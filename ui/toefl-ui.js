// TOEFL iBT (2026 Redesign · 1–6 Band + 0–120 Concordance · Adaptive 4-Skill Mock Engine).
// Reuses Vermil's speech synthesis, MediaRecorder local playback, and optional Assistant Gemini key (opt-in).
(() => {
  function createToeflController(ctx) {
    const {
      el, $, ask, tell, loadFile, today, save, emit,
      getData, paint, sourceBar, pickVoice, formatClock, shuffleWith,
    } = ctx;

    const LETTERS = ['A', 'B', 'C', 'D'];
    const TIME_LIMITS = { reading: 30 * 60, listening: 29 * 60, writing: 23 * 60, speaking: 8 * 60 };
    const tauriInvoke = (cmd, args) => (window.__TAURI__?.core?.invoke ? window.__TAURI__.core.invoke(cmd, args) : null);

    let toeflSection = 'full'; // 'full' | 'reading' | 'listening' | 'writing' | 'speaking'
    let toeflMode = 'exam'; // 'exam' | 'practice'
    let loadingSet = 0;
    let sess = null;
    let timerId = null;

    const tts = { playing: false, key: '', rate: 1.0, played: new Set(), error: '' };
    const rec = { recorder: null, stream: null, key: '', urls: new Map(), chunks: [], active: false, error: '' };

    function setsLoaded() {
      const a = typeof TOEFL_SETS_1 !== 'undefined' ? TOEFL_SETS_1 : [];
      const b = typeof TOEFL_SETS_2 !== 'undefined' ? TOEFL_SETS_2 : [];
      return [...a, ...b].sort((x, y) => x.set - y.set);
    }

    async function ensureSets(setNum) {
      if (setNum <= 5 && typeof TOEFL_SETS_1 === 'undefined' && !$('script-toefl-sets-1')) {
        await loadFile('script', { src: 'toefl-sets-1.js', id: 'script-toefl-sets-1' });
      }
      if (setNum > 5 && typeof TOEFL_SETS_2 === 'undefined' && !$('script-toefl-sets-2')) {
        await loadFile('script', { src: 'toefl-sets-2.js', id: 'script-toefl-sets-2' });
      }
      return setsLoaded().find((x) => x.set === setNum) || null;
    }

    function stopTts() {
      tts.playing = false;
      tts.key = '';
      if (window.speechSynthesis) try { window.speechSynthesis.cancel(); } catch {}
    }

    function stopMic(revokeUrls = false) {
      if (rec.recorder && rec.recorder.state !== 'inactive') {
        try { rec.recorder.stop(); } catch {}
      }
      if (rec.stream) {
        try { rec.stream.getTracks().forEach((t) => t.stop()); } catch {}
      }
      rec.recorder = null;
      rec.stream = null;
      rec.active = false;
      rec.key = '';
      if (revokeUrls) {
        for (const u of rec.urls.values()) { try { URL.revokeObjectURL(u); } catch {} }
        rec.urls.clear();
      }
    }

    function stopTimer() {
      if (timerId) { clearInterval(timerId); timerId = null; }
    }

    function stopAll(revokeUrls = true) {
      stopTimer();
      stopTts();
      stopMic(revokeUrls);
    }

    function speakLines(key, utterances) {
      if (!window.speechSynthesis || typeof SpeechSynthesisUtterance === 'undefined') {
        tts.error = 'System text-to-speech is unavailable in this browser/runtime — open Transcript below.';
        paint();
        return;
      }
      if (toeflMode === 'exam' && sess?.examMode === 'exam' && tts.played.has(key) && !sess.submitted) return;
      stopTts();
      tts.error = '';
      tts.playing = true;
      tts.key = key;
      paint();

      let idx = 0;
      const step = () => {
        if (!tts.playing || tts.key !== key) return;
        if (idx >= utterances.length) {
          tts.playing = false;
          tts.played.add(key);
          paint();
          return;
        }
        const [txt, acc = 'us', sex = 'f'] = utterances[idx++];
        const u = new SpeechSynthesisUtterance(txt);
        const v = pickVoice ? pickVoice(acc, sex) : null;
        if (v) u.voice = v;
        u.rate = tts.rate || 1.0;
        u.pitch = sex === 'f' ? 1.06 : 0.95;
        u.onend = () => { if (tts.playing && tts.key === key) setTimeout(step, 320); };
        u.onerror = () => { tts.playing = false; tts.error = 'Speech playback interrupted.'; paint(); };
        window.speechSynthesis.speak(u);
      };
      step();
    }

    async function toggleMic(key) {
      if (rec.active && rec.key === key) {
        stopMic(false);
        paint();
        return;
      }
      stopMic(false);
      rec.error = '';
      if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
        rec.error = 'Microphone recording is unavailable in this environment — practice aloud using the timer and self-rate below.';
        paint();
        return;
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mr = new MediaRecorder(stream);
        rec.stream = stream;
        rec.recorder = mr;
        rec.key = key;
        rec.chunks = [];
        rec.active = true;
        mr.ondataavailable = (ev) => { if (ev.data && ev.data.size > 0) rec.chunks.push(ev.data); };
        mr.onstop = () => {
          if (rec.chunks.length) {
            const old = rec.urls.get(key);
            if (old) try { URL.revokeObjectURL(old); } catch {}
            const blob = new Blob(rec.chunks, { type: mr.mimeType || 'audio/webm' });
            rec.urls.set(key, URL.createObjectURL(blob));
          }
          try { stream.getTracks().forEach((t) => t.stop()); } catch {}
          rec.stream = null;
          rec.recorder = null;
          rec.active = false;
          rec.key = '';
          paint();
        };
        mr.start();
        paint();
      } catch (e) {
        rec.error = 'Microphone access denied or unavailable: ' + (e?.message || 'check Windows microphone permissions.');
        paint();
      }
    }

    function syncTimer() {
      const running = sess && !sess.submitted && !sess.paused && !sess.intermission && sess.examMode === 'exam';
      if (!running) { stopTimer(); return; }
      if (timerId) return;
      timerId = setInterval(() => {
        if (!sess || sess.submitted || sess.paused || sess.intermission) { stopTimer(); return; }
        sess.elapsed++;
        const limit = TIME_LIMITS[sess.curSkill] || 1800;
        const left = Math.max(0, limit - sess.elapsed);
        const tEl = $('tf-timer');
        if (tEl) {
          tEl.textContent = formatClock(left);
          tEl.className = 'fc-mk-timer' + (left <= 180 ? ' warn' : '');
        }
        if (left <= 0) {
          stopTimer();
          advanceStageOrSubmit(true);
        }
      }, 1000);
    }

    function makeReadingState(setObj) {
      return {
        stageKey: 'stage1', // 'stage1' | 'stage2a' | 'stage2b'
        branch: '', // '' | 'lower' | 'upper'
        step: 0, // 0=cloze, 1..daily.length=daily, last=academic
        stage1: { cloze: {}, mcqs: {} },
        stage2a: { cloze: {}, mcqs: {} },
        stage2b: { cloze: {}, mcqs: {} },
        report: null,
        raw: setObj.reading,
      };
    }

    function makeListeningState(setObj) {
      return {
        stageKey: 'stage1',
        branch: '',
        step: 0, // 0=responses, 1=conversation, 2=announcement, 3=talk
        stage1: { resp: {}, conv: {}, ann: {}, talk: {} },
        stage2a: { resp: {}, conv: {}, ann: {}, talk: {} },
        stage2b: { resp: {}, conv: {}, ann: {}, talk: {} },
        report: null,
        raw: setObj.listening,
      };
    }

    function makeWritingState(setObj) {
      const buildChunks = setObj.writing.build.map((b, i) => shuffleWith(b.chunks, () => ((setObj.set * 13 + i * 7) % 17) / 17));
      return {
        step: 0, // 0..9 = Build a Sentence 1..10, 10 = Email, 11 = Academic Discussion
        buildPicks: setObj.writing.build.map(() => []),
        buildPool: buildChunks,
        emailText: '',
        emailSelf: 0,
        emailAi: null,
        discText: '',
        discSelf: 0,
        discAi: null,
        report: null,
        raw: setObj.writing,
      };
    }

    function makeSpeakingState(setObj) {
      return {
        step: 0, // 0..4 = Repeat 1..5, 5..8 = Interview 1..4
        repeatNotes: setObj.speaking.repeat.map(() => ''),
        repeatSelf: setObj.speaking.repeat.map(() => 0),
        ivNotes: setObj.speaking.interview.questions.map(() => ''),
        ivSelf: setObj.speaking.interview.questions.map(() => 0),
        ivAi: null,
        report: null,
        raw: setObj.speaking,
      };
    }

    async function launchSet(setNum, { section = toeflSection, examMode = toeflMode } = {}) {
      const s = Number(setNum) || 1;
      loadingSet = s;
      stopAll(true);
      tts.played.clear();
      paint();
      try {
        const setObj = await ensureSets(s);
        loadingSet = 0;
        if (!setObj) { tell(`TOEFL Set ${s} could not be loaded.`); paint(); return; }
        const skills = section === 'full' ? ['reading', 'listening', 'writing', 'speaking'] : [section];
        sess = {
          set: s,
          theme: setObj.theme,
          section,
          examMode,
          skills,
          skillIdx: 0,
          curSkill: skills[0],
          elapsed: 0,
          paused: false,
          intermission: false,
          submitted: false,
          revSkill: skills[0],
          r: makeReadingState(setObj),
          l: makeListeningState(setObj),
          w: makeWritingState(setObj),
          sp: makeSpeakingState(setObj),
          reports: {},
          overall: null,
        };
        syncTimer();
        paint();
      } catch (e) {
        loadingSet = 0;
        tell('Could not load TOEFL Set: ' + (e?.message || e));
        paint();
      }
    }

    function countReadingStage(stRaw, stAns) {
      let correct = 0;
      let total = 0;
      const gaps = (stRaw.cloze.segments || []).filter((x) => typeof x === 'object');
      gaps.forEach((g, gi) => {
        total++;
        if (scoreToeflWordGap(stAns.cloze[gi], g.ans)) correct++;
      });
      stRaw.daily.forEach((d, di) => {
        d.qs.forEach((q, qi) => {
          total++;
          if (stAns.mcqs[`d${di}_${qi}`] === q.ans) correct++;
        });
      });
      stRaw.academic.qs.forEach((q, qi) => {
        total++;
        if (stAns.mcqs[`a_${qi}`] === q.ans) correct++;
      });
      return { correct, total };
    }

    function countListeningStage(stRaw, stAns) {
      let correct = 0;
      let total = 0;
      stRaw.responses.forEach((r, ri) => {
        total++;
        if (stAns.resp[ri] === r.ans) correct++;
      });
      stRaw.conversation.qs.forEach((q, qi) => {
        total++;
        if (stAns.conv[qi] === q.ans) correct++;
      });
      stRaw.announcement.qs.forEach((q, qi) => {
        total++;
        if (stAns.ann[qi] === q.ans) correct++;
      });
      stRaw.talk.qs.forEach((q, qi) => {
        total++;
        if (stAns.talk[qi] === q.ans) correct++;
      });
      return { correct, total };
    }

    function computeWritingReport(w) {
      let buildOk = 0;
      w.raw.build.forEach((item, idx) => {
        if (scoreToeflBuildSentence(w.buildPicks[idx], item)) buildOk++;
      });
      const buildBand = toeflBandScore(buildOk, w.raw.build.length, 'full');
      const emailBand = w.emailAi?.band || w.emailSelf || (w.emailText.trim().split(/\s+/).filter(Boolean).length >= 55 ? 4.0 : 2.5);
      const discBand = w.discAi?.band || w.discSelf || (w.discText.trim().split(/\s+/).filter(Boolean).length >= 75 ? 4.0 : 2.5);
      const band = snapToeflBand((buildBand + emailBand * 1.5 + discBand * 1.5) / 4);
      const eq = toeflComparable120(band);
      return {
        band,
        cefr: eq.cefr,
        range120: eq.range,
        buildOk,
        buildTotal: w.raw.build.length,
        buildBand,
        emailBand,
        discBand,
        emailSource: w.emailAi ? 'AI Rubric' : w.emailSelf ? 'Self-Rated' : 'Auto Estimate',
        discSource: w.discAi ? 'AI Rubric' : w.discSelf ? 'Self-Rated' : 'Auto Estimate',
      };
    }

    function computeSpeakingReport(sp) {
      const repRated = sp.repeatSelf.filter((x) => x > 0);
      const ivRated = sp.ivSelf.filter((x) => x > 0);
      const repAvg = repRated.length ? repRated.reduce((a, b) => a + b, 0) / repRated.length : 0;
      const ivAvg = sp.ivAi?.band || (ivRated.length ? ivRated.reduce((a, b) => a + b, 0) / ivRated.length : 0);
      const vals = [repAvg, ivAvg].filter((v) => v > 0);
      const band = vals.length ? snapToeflBand(vals.reduce((a, b) => a + b, 0) / vals.length) : 3.0;
      const eq = toeflComparable120(band);
      return {
        band,
        cefr: eq.cefr,
        range120: eq.range,
        repRated: repRated.length,
        ivRated: ivRated.length,
        source: sp.ivAi ? 'AI + Self-Rubric' : vals.length ? 'Self-Rubric' : 'Default Baseline',
      };
    }

    function finalizeReading() {
      const r = sess.r;
      const s1 = countReadingStage(r.raw.stage1, r.stage1);
      const st2Key = r.branch === 'upper' ? 'stage2b' : 'stage2a';
      const s2 = countReadingStage(r.raw[st2Key], r[st2Key]);
      const band = toeflBandScore(s1.correct + s2.correct, s1.total + s2.total, r.branch || 'full');
      const eq = toeflComparable120(band);
      r.report = { band, cefr: eq.cefr, range120: eq.range, branch: r.branch || 'stage2a', s1, s2, correct: s1.correct + s2.correct, total: s1.total + s2.total };
      sess.reports.reading = r.report;
    }

    function finalizeListening() {
      const l = sess.l;
      const s1 = countListeningStage(l.raw.stage1, l.stage1);
      const st2Key = l.branch === 'upper' ? 'stage2b' : 'stage2a';
      const s2 = countListeningStage(l.raw[st2Key], l[st2Key]);
      const band = toeflBandScore(s1.correct + s2.correct, s1.total + s2.total, l.branch || 'full');
      const eq = toeflComparable120(band);
      l.report = { band, cefr: eq.cefr, range120: eq.range, branch: l.branch || 'stage2a', s1, s2, correct: s1.correct + s2.correct, total: s1.total + s2.total };
      sess.reports.listening = l.report;
    }

    function saveToeflResult() {
      const d = getData();
      const key = `${sess.section}:${sess.set}`;
      const prev = d.toeflScores?.[key];
      const overall = sess.overall;
      d.toeflScores = {
        ...(d.toeflScores || {}),
        [key]: {
          bestBand: Math.max(prev?.bestBand || 0, overall.band),
          lastBand: overall.band,
          cefr: toeflCefrBand(Math.max(prev?.bestBand || 0, overall.band)),
          range120: toeflComparable120(Math.max(prev?.bestBand || 0, overall.band)).range,
          attempts: (prev?.attempts || 0) + 1,
        },
      };
      save();
      emit('card-reviewed', { key: `toefl:${sess.section}:${sess.set}:${today()}` });
    }

    async function advanceStageOrSubmit(autoTimeout = false) {
      if (!sess || sess.submitted) return;
      stopTts();
      stopMic(false);

      // Check Stage 1 -> Stage 2 Adaptive Routing inside Reading / Listening
      if (sess.curSkill === 'reading' && sess.r.stageKey === 'stage1') {
        const s1 = countReadingStage(sess.r.raw.stage1, sess.r.stage1);
        const route = toeflAdaptiveBranch(s1.correct, s1.total);
        sess.r.branch = route === 'stage2b' ? 'upper' : 'lower';
        sess.r.stageKey = route;
        sess.r.step = 0;
        paint();
        return;
      }
      if (sess.curSkill === 'listening' && sess.l.stageKey === 'stage1') {
        const s1 = countListeningStage(sess.l.raw.stage1, sess.l.stage1);
        const route = toeflAdaptiveBranch(s1.correct, s1.total);
        sess.l.branch = route === 'stage2b' ? 'upper' : 'lower';
        sess.l.stageKey = route;
        sess.l.step = 0;
        paint();
        return;
      }

      if (!autoTimeout && !(await ask(`Finish ${sess.curSkill.toUpperCase()} section and continue?`, 'Finish section'))) return;

      if (sess.curSkill === 'reading') finalizeReading();
      if (sess.curSkill === 'listening') finalizeListening();
      if (sess.curSkill === 'writing') { sess.w.report = computeWritingReport(sess.w); sess.reports.writing = sess.w.report; }
      if (sess.curSkill === 'speaking') { sess.sp.report = computeSpeakingReport(sess.sp); sess.reports.speaking = sess.sp.report; }

      if (sess.skillIdx + 1 < sess.skills.length) {
        sess.skillIdx++;
        sess.curSkill = sess.skills[sess.skillIdx];
        sess.elapsed = 0;
        sess.intermission = true;
        stopTimer();
        paint();
        return;
      }

      // Final submission
      stopAll(false);
      sess.submitted = true;
      const bands = sess.skills.map((k) => sess.reports[k]?.band).filter(Boolean);
      const ov = toeflOverallBand(...bands);
      const eq = toeflComparable120(ov);
      sess.overall = { band: ov, cefr: eq.cefr, range120: eq.range, mid120: eq.mid };
      sess.revSkill = sess.skills[0];
      saveToeflResult();
      paint();
    }

    async function runAiEvaluation(kind, promptText, studentText, onResult) {
      const cleaned = String(studentText || '').trim();
      if (!cleaned) { tell('Write a response or spoken transcript note first before requesting AI evaluation.'); return; }
      if (!window.__TAURI__?.core?.invoke) {
        tell('Gemini AI rubric evaluation requires the Vermil desktop runtime (add your API key in Settings -> Assistant).');
        return;
      }
      try {
        const info = await tauriInvoke('get_assistant');
        if (!info?.has_key) {
          tell('No Gemini API key configured yet. Open Settings -> Assistant to add your API key (optional), or use the Self-Rating rubric offline.');
          return;
        }
        const preview = cleaned.length > 260 ? cleaned.slice(0, 260) + '…' : cleaned;
        const ok = await ask(`Send your ${kind} response to Gemini (${info.model}) for TOEFL 1.0–6.0 rubric feedback?\n\n"${preview}"`, 'Send for Feedback');
        if (!ok) return;
        const system = [
          'You are an official TOEFL iBT (2026 Redesign) rater.',
          'Score the candidate strictly on the 1.0–6.0 band scale in 0.5 increments.',
          'Reply ONLY with valid JSON: {"band": number, "summary": "concise Thai + English rubric summary", "strengths": ["..."], "improvements": ["..."]}.',
        ].join(' ');
        const raw = await tauriInvoke('assistant_ask', {
          system,
          turns: [{ role: 'user', text: `Task:\n${promptText}\n\nCandidate Response:\n${cleaned}` }],
        });
        const parsed = parseToeflAiEval(raw);
        if (!parsed) { tell('Could not parse AI feedback JSON. Try again or rate manually.'); return; }
        onResult(parsed);
        paint();
      } catch (e) {
        tell('AI evaluation failed: ' + (e?.message || e));
      }
    }

    function renderAiBox(aiObj, selfVal, onSelf, onAiClick, hasResponse) {
      const scales = [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0];
      return el('div', { className: 'tf-eval-box' },
        el('div', { className: 'tf-eval-head' },
          el('div', { className: 'tf-self-rate' },
            el('small', {}, 'Self-Rate (1.0–6.0):'),
            ...scales.filter((v) => v >= 2.0).map((v) => el('button', {
              type: 'button',
              className: 'tag-pill' + (selfVal === v ? ' active' : ''),
              onclick: () => { onSelf(v); paint(); },
            }, v.toFixed(1)))),
          el('button', { type: 'button', className: 'fc-grade', disabled: !hasResponse, onclick: onAiClick }, el('b', {}, aiObj ? '↻ Re-score AI' : '✦ AI Rubric Check (Gemini)'))),
        ...(aiObj ? [el('div', { className: 'fc-qz-explain ok tf-ai-res' },
          el('strong', {}, `AI Rubric Score: ${aiObj.band.toFixed(1)} / 6.0 · CEFR ${aiObj.cefr}`),
          el('p', {}, aiObj.summary),
          ...(aiObj.strengths.length ? [el('p', {}, 'Strengths: ' + aiObj.strengths.join(' · '))] : []),
          ...(aiObj.improvements.length ? [el('p', {}, 'Next steps: ' + aiObj.improvements.join(' · '))] : []))] : []));
    }

    function renderReading() {
      const r = sess.r;
      const stKey = r.stageKey;
      const stRaw = r.raw[stKey];
      const stAns = r[stKey];
      const stepsTotal = 1 + stRaw.daily.length + 1;
      const showImmediate = sess.examMode === 'practice';

      const stageTabs = sess.examMode === 'practice'
        ? el('div', { className: 'fc-mk-modepills' },
            [['stage1', 'Stage 1 (Router)'], ['stage2a', 'Stage 2A (Standard)'], ['stage2b', 'Stage 2B (Upper)']].map(([k, lbl]) => el('button', {
              type: 'button',
              className: 'tag-pill' + (stKey === k ? ' active' : ''),
              onclick: () => { r.stageKey = k; r.step = 0; if (k === 'stage2b') r.branch = 'upper'; else if (k === 'stage2a') r.branch = 'lower'; paint(); },
            }, lbl)))
        : el('span', { className: 'fc-mk-partpill' }, stKey === 'stage1' ? 'Module 1 · Router' : `Module 2 · ${r.branch === 'upper' ? 'Upper Adaptive' : 'Standard Adaptive'}`);

      let content;
      if (r.step === 0) {
        const c = stRaw.cloze;
        let gapIdx = 0;
        const nodes = [];
        for (const seg of c.segments) {
          if (typeof seg === 'string') {
            nodes.push(seg);
          } else {
            const gi = gapIdx++;
            const val = stAns.cloze[gi] || '';
            const ok = showImmediate && val.trim().length > 0 && scoreToeflWordGap(val, seg.ans);
            const bad = showImmediate && val.trim().length > 0 && !ok;
            nodes.push(el('span', { className: 'tf-cloze-tok' },
              el('b', {}, seg.pre),
              el('input', {
                type: 'text',
                className: 'tf-gap-in' + (ok ? ' ok' : bad ? ' bad' : ''),
                maxLength: seg.ans.length + 3,
                style: { width: `${Math.max(3.2, seg.ans.length * 0.9 + 0.8)}em` },
                value: val,
                placeholder: '·'.repeat(seg.ans.length),
                ariaLabel: `Complete word starting with ${seg.pre}`,
                oninput: (e) => { stAns.cloze[gi] = e.target.value; },
                onblur: () => { if (showImmediate) paint(); },
              })));
          }
        }
        content = el('div', { className: 'tf-card-block' },
          el('div', { className: 'fc-mk-phead' }, el('span', {}, `Complete the Words · ${c.title}`), el('small', { style: { color: 'var(--mute)' } }, 'Type the missing letters for all 10 blanks')),
          el('p', { className: 'tf-cloze-body' }, el('span', { className: 'tf-cloze-intro' }, c.intro + ' '), ...nodes),
          ...(showImmediate ? [el('div', { className: 'fc-qz-explain' }, el('strong', {}, 'Word Key & Grammar Notes'), el('p', {}, c.segments.filter((x) => typeof x === 'object').map((g, idx) => `${idx + 1}. ${g.pre}${g.ans}`).join('  ·  ')), el('p', {}, c.why))] : []));
      } else if (r.step <= stRaw.daily.length) {
        const di = r.step - 1;
        const d = stRaw.daily[di];
        content = el('div', { className: 'fc-mk-split' },
          el('div', { className: 'fc-mk-passage' },
            el('div', { className: 'fc-mk-phead' }, el('span', {}, `Read in Daily Life · ${d.kind || 'Notice'}`)),
            el('article', { className: 'fc-mk-doc' }, el('h4', {}, d.title), el('pre', { className: 'fc-mk-pre' }, d.text))),
          el('div', { className: 'fc-mk-qpane' }, ...d.qs.map((q, qi) => renderMcqItem(q, stAns.mcqs[`d${di}_${qi}`], (ci) => { stAns.mcqs[`d${di}_${qi}`] = ci; paint(); }, showImmediate, qi + 1))));
      } else {
        const ac = stRaw.academic;
        content = el('div', { className: 'fc-mk-split' },
          el('div', { className: 'fc-mk-passage' },
            el('div', { className: 'fc-mk-phead' }, el('span', {}, `Academic Passage · ${ac.subject}`)),
            el('article', { className: 'fc-mk-doc' }, el('h4', {}, ac.title), ...ac.paragraphs.map((p) => el('p', {}, p)))),
          el('div', { className: 'fc-mk-qpane' }, ...ac.qs.map((q, qi) => renderMcqItem(q, stAns.mcqs[`a_${qi}`], (ci) => { stAns.mcqs[`a_${qi}`] = ci; paint(); }, showImmediate, qi + 1))));
      }

      const taskNames = ['1. Complete Words', ...stRaw.daily.map((_, idx) => `${idx + 2}. Daily Text`), `${stepsTotal}. Academic Passage`];
      return el('div', { className: 'tf-work' },
        el('div', { className: 'tf-subbar' },
          stageTabs,
          el('div', { className: 'fc-mk-modepills' }, ...taskNames.map((lbl, si) => el('button', {
            type: 'button',
            className: 'tag-pill' + (r.step === si ? ' active' : ''),
            onclick: () => { r.step = si; paint(); },
          }, lbl))),
          r.step + 1 < stepsTotal
            ? el('button', { type: 'button', className: 'primary', onclick: () => { r.step++; paint(); } }, el('span', {}, 'Next Task →'))
            : el('button', { type: 'button', className: 'fc-mk-subbtn', onclick: () => advanceStageOrSubmit(false) }, stKey === 'stage1' ? 'Route to Module 2 →' : 'Finish Reading →')),
        content);
    }

    function renderMcqItem(q, picked, onPick, showImmediate, num) {
      const answered = picked !== null && picked !== undefined;
      return el('div', { className: 'fc-card fc-qz-card tf-mcq' },
        el('div', { className: 'fc-qz-q' }, `${num}. ${q.q}`),
        el('div', { className: 'fc-qz-choices' }, ...q.choices.map((ch, ci) => {
          let cls = 'fc-qz-opt';
          if (showImmediate && answered) cls += ci === q.ans ? ' right' : ci === picked ? ' wrong' : ' dim';
          else if (picked === ci) cls += ' right';
          return el('button', {
            type: 'button',
            className: cls,
            disabled: showImmediate && answered,
            onclick: () => onPick(ci),
          }, el('b', { className: 'fc-qz-let' }, LETTERS[ci]), el('span', {}, ch));
        })),
        ...(showImmediate && answered ? [el('div', { className: 'fc-qz-explain ' + (picked === q.ans ? 'ok' : 'bad') }, el('strong', {}, picked === q.ans ? `✓ Correct (${LETTERS[q.ans]})` : `✕ Correct: (${LETTERS[q.ans]}) ${q.choices[q.ans]}`), el('p', {}, q.why))] : []));
    }

    function renderAudioControl(key, label, utterances, transcriptLines) {
      const locked = sess.examMode === 'exam' && tts.played.has(key) && !sess.submitted;
      const active = tts.playing && tts.key === key;
      const showScript = sess.examMode === 'practice' || sess.submitted;
      return el('div', { className: 'tf-audio-wrap' },
        el('div', { className: 'fc-mk-audiobar' },
          el('button', {
            type: 'button',
            className: 'fc-mk-playbtn' + (active ? ' playing' : ''),
            disabled: locked,
            onclick: () => { if (active) { stopTts(); paint(); } else speakLines(key, utterances); },
          }, active ? '■ Stop Speech' : locked ? '✓ Played (Exam)' : `▶ ${label}`),
          el('span', { className: 'tf-audio-msg' }, tts.error || (active ? 'Speaking via system TTS…' : 'Uses Windows/Web Speech multi-voice synthesis')),
          ...(showScript ? [0.85, 1.0, 1.15].map((rt) => el('button', {
            type: 'button',
            className: 'tag-pill' + (tts.rate === rt ? ' active' : ''),
            onclick: () => { tts.rate = rt; paint(); },
          }, `${rt}×`)) : [])),
        ...(showScript && transcriptLines?.length
          ? [el('details', { className: 'tf-transcript' }, el('summary', {}, 'Transcript / Audio Script'), ...transcriptLines.map((ln) => el('p', {}, ln)))]
          : []));
    }

    function renderListening() {
      const l = sess.l;
      const stKey = l.stageKey;
      const stRaw = l.raw[stKey];
      const stAns = l[stKey];
      const showImmediate = sess.examMode === 'practice';

      const stageTabs = sess.examMode === 'practice'
        ? el('div', { className: 'fc-mk-modepills' },
            [['stage1', 'Stage 1 (Router)'], ['stage2a', 'Stage 2A (Standard)'], ['stage2b', 'Stage 2B (Upper)']].map(([k, lbl]) => el('button', {
              type: 'button',
              className: 'tag-pill' + (stKey === k ? ' active' : ''),
              onclick: () => { stopTts(); l.stageKey = k; l.step = 0; if (k === 'stage2b') l.branch = 'upper'; else if (k === 'stage2a') l.branch = 'lower'; paint(); },
            }, lbl)))
        : el('span', { className: 'fc-mk-partpill' }, stKey === 'stage1' ? 'Module 1 · Router' : `Module 2 · ${l.branch === 'upper' ? 'Upper Adaptive' : 'Standard Adaptive'}`);

      let content;
      if (l.step === 0) {
        content = el('div', { className: 'tf-stack' },
          ...stRaw.responses.map((r, ri) => el('div', { className: 'tf-card-block' },
            renderAudioControl(`l:${stKey}:r:${ri}`, `Hear Prompt ${ri + 1}`, [[r.prompt, r.accent || 'us', r.speaker || 'f']], [`Prompt ${ri + 1}: "${r.prompt}"`]),
            renderMcqItem({ q: 'Listen and choose the most appropriate response:', choices: r.choices, ans: r.ans, why: r.why }, stAns.resp[ri], (ci) => { stAns.resp[ri] = ci; paint(); }, showImmediate, ri + 1))));
      } else if (l.step === 1) {
        const cv = stRaw.conversation;
        const utt = cv.lines.map((ln) => [ln.text, ln.acc || 'us', ln.sex || 'f']);
        const scr = cv.lines.map((ln) => `${ln.role}: ${ln.text}`);
        content = el('div', { className: 'tf-stack' },
          el('div', { className: 'fc-mk-phead' }, el('span', {}, `Conversation · ${cv.title}`)),
          renderAudioControl(`l:${stKey}:conv`, 'Play Conversation', utt, scr),
          ...cv.qs.map((q, qi) => renderMcqItem(q, stAns.conv[qi], (ci) => { stAns.conv[qi] = ci; paint(); }, showImmediate, qi + 1)));
      } else if (l.step === 2) {
        const an = stRaw.announcement;
        const utt = an.lines.map((txt) => [txt, an.accent || 'us', an.speaker || 'm']);
        content = el('div', { className: 'tf-stack' },
          el('div', { className: 'fc-mk-phead' }, el('span', {}, `Announcement · ${an.title}`)),
          renderAudioControl(`l:${stKey}:ann`, 'Play Announcement', utt, an.lines),
          ...an.qs.map((q, qi) => renderMcqItem(q, stAns.ann[qi], (ci) => { stAns.ann[qi] = ci; paint(); }, showImmediate, qi + 1)));
      } else {
        const tk = stRaw.talk;
        const utt = tk.lines.map((txt) => [txt, tk.accent || 'us', tk.speaker || 'f']);
        content = el('div', { className: 'tf-stack' },
          el('div', { className: 'fc-mk-phead' }, el('span', {}, `Academic Talk (${tk.subject}) · ${tk.title}`)),
          renderAudioControl(`l:${stKey}:talk`, 'Play Academic Talk', utt, tk.lines),
          ...tk.qs.map((q, qi) => renderMcqItem(q, stAns.talk[qi], (ci) => { stAns.talk[qi] = ci; paint(); }, showImmediate, qi + 1)));
      }

      const taskNames = ['1. Choose Response', '2. Conversation', '3. Announcement', '4. Academic Talk'];
      return el('div', { className: 'tf-work' },
        el('div', { className: 'tf-subbar' },
          stageTabs,
          el('div', { className: 'fc-mk-modepills' }, ...taskNames.map((lbl, si) => el('button', {
            type: 'button',
            className: 'tag-pill' + (l.step === si ? ' active' : ''),
            onclick: () => { stopTts(); l.step = si; paint(); },
          }, lbl))),
          l.step + 1 < 4
            ? el('button', { type: 'button', className: 'primary', onclick: () => { stopTts(); l.step++; paint(); } }, el('span', {}, 'Next Task →'))
            : el('button', { type: 'button', className: 'fc-mk-subbtn', onclick: () => advanceStageOrSubmit(false) }, stKey === 'stage1' ? 'Route to Module 2 →' : 'Finish Listening →')),
        content);
    }

    function renderWriting() {
      const w = sess.w;
      const showImmediate = sess.examMode === 'practice';
      let content;

      if (w.step < 10) {
        const idx = w.step;
        const item = w.raw.build[idx];
        const pickedIdx = w.buildPicks[idx]; // array of indices into w.buildPool[idx]
        const pool = w.buildPool[idx];
        const chosenTokens = pickedIdx.map((pi) => pool[pi]);
        const isDone = pickedIdx.length === pool.length;
        const isOk = isDone && scoreToeflBuildSentence(chosenTokens, item);

        content = el('div', { className: 'tf-stack' },
          el('div', { className: 'fc-card fc-qz-card' },
            el('div', { className: 'fc-card-meta' }, el('span', {}, `Task 1: Build a Sentence · Item ${idx + 1}/10`)),
            el('p', { className: 'tf-cue' }, item.cue),
            el('div', { className: 'tf-sentence-box' + (showImmediate && isDone ? (isOk ? ' ok' : ' bad') : '') },
              ...(item.prefix ? [el('span', { className: 'tf-fixed' }, item.prefix)] : []),
              ...(pickedIdx.length
                ? pickedIdx.map((pi, slotIdx) => el('button', {
                    type: 'button',
                    className: 'tf-chip placed',
                    onclick: () => { w.buildPicks[idx] = pickedIdx.filter((_, k) => k !== slotIdx); paint(); },
                  }, pool[pi]))
                : [el('span', { className: 'tf-placeholder' }, 'Click word chips below in grammatical order…')]),
              el('span', { className: 'tf-fixed' }, item.suffix || '.')),
            el('div', { className: 'tf-chip-bank' },
              ...pool.map((tok, pi) => {
                const used = pickedIdx.includes(pi);
                return el('button', {
                  type: 'button',
                  className: 'tf-chip' + (used ? ' used' : ''),
                  disabled: used,
                  onclick: () => { w.buildPicks[idx] = [...pickedIdx, pi]; paint(); },
                }, tok);
              })),
            el('div', { className: 'tf-chip-acts' },
              el('button', { type: 'button', className: 'tag-pill', disabled: !pickedIdx.length, onclick: () => { w.buildPicks[idx] = pickedIdx.slice(0, -1); paint(); } }, '⌫ Undo'),
              el('button', { type: 'button', className: 'tag-pill', disabled: !pickedIdx.length, onclick: () => { w.buildPicks[idx] = []; paint(); } }, 'Clear')),
            ...(showImmediate && isDone ? [el('div', { className: 'fc-qz-explain ' + (isOk ? 'ok' : 'bad') }, el('strong', {}, isOk ? '✓ Correct sentence!' : `✕ Model sentence: ${item.ans}`), el('p', {}, item.why))] : [])));
      } else if (w.step === 10) {
        const em = w.raw.email;
        const wc = w.emailText.trim() ? w.emailText.trim().split(/\s+/).length : 0;
        content = el('div', { className: 'fc-mk-split' },
          el('div', { className: 'fc-mk-passage' },
            el('div', { className: 'fc-mk-phead' }, el('span', {}, `Task 2: Write an Email · Suggested ~7 min`)),
            el('article', { className: 'fc-mk-doc' },
              el('h4', {}, em.title),
              el('p', {}, em.situation),
              el('ul', { className: 'tf-bullets' }, ...em.bullets.map((b) => el('li', {}, b))),
              el('details', { className: 'tf-transcript', open: showImmediate },
                el('summary', {}, 'Model Band 6.0 Email & Notes'),
                el('pre', { className: 'fc-mk-pre' }, em.model),
                el('p', {}, em.notes)))),
          el('div', { className: 'fc-mk-qpane' },
            el('div', { className: 'tf-editor-head' }, el('strong', {}, 'Your Email Draft'), el('span', { id: 'tf-wc-email' }, `${wc} words`)),
            el('textarea', {
              className: 'tf-textarea',
              rows: 11,
              value: w.emailText,
              placeholder: 'Write your complete email addressing all three points clearly…',
              oninput: (e) => {
                w.emailText = e.target.value;
                const elWc = $('tf-wc-email');
                if (elWc) elWc.textContent = `${w.emailText.trim() ? w.emailText.trim().split(/\s+/).length : 0} words`;
              },
            }),
            renderAiBox(w.emailAi, w.emailSelf, (v) => { w.emailSelf = v; }, () => runAiEvaluation('Email Writing', `${em.situation}\nRequirements: ${em.bullets.join('; ')}`, w.emailText, (res) => { w.emailAi = res; }), w.emailText.trim().length >= 15)));
      } else {
        const dc = w.raw.discussion;
        const wc = w.discText.trim() ? w.discText.trim().split(/\s+/).length : 0;
        content = el('div', { className: 'fc-mk-split' },
          el('div', { className: 'fc-mk-passage' },
            el('div', { className: 'fc-mk-phead' }, el('span', {}, `Task 3: Academic Discussion · Suggested ~10 min`)),
            el('article', { className: 'fc-mk-doc' },
              el('h4', {}, dc.topic),
              el('p', {}, dc.profPrompt),
              ...dc.posts.map((p) => el('div', { className: 'tf-post' }, el('b', {}, p.name + ': '), el('span', {}, p.text))),
              el('details', { className: 'tf-transcript', open: showImmediate },
                el('summary', {}, 'Model Band 6.0 Response & Notes'),
                el('pre', { className: 'fc-mk-pre' }, dc.model),
                el('p', {}, dc.notes)))),
          el('div', { className: 'fc-mk-qpane' },
            el('div', { className: 'tf-editor-head' }, el('strong', {}, 'Your Discussion Post (target 100+ words)'), el('span', { id: 'tf-wc-disc' }, `${wc} words`)),
            el('textarea', {
              className: 'tf-textarea',
              rows: 11,
              value: w.discText,
              placeholder: 'Respond to the professor and add an original supporting example or reason…',
              oninput: (e) => {
                w.discText = e.target.value;
                const elWc = $('tf-wc-disc');
                if (elWc) elWc.textContent = `${w.discText.trim() ? w.discText.trim().split(/\s+/).length : 0} words`;
              },
            }),
            renderAiBox(w.discAi, w.discSelf, (v) => { w.discSelf = v; }, () => runAiEvaluation('Academic Discussion', `${dc.profPrompt}\nPeers: ${dc.posts.map((p) => `${p.name}: ${p.text}`).join(' | ')}`, w.discText, (res) => { w.discAi = res; }), w.discText.trim().length >= 20)));
      }

      return el('div', { className: 'tf-work' },
        el('div', { className: 'tf-subbar' },
          el('div', { className: 'fc-mk-modepills' },
            ...Array.from({ length: 10 }, (_, k) => el('button', { type: 'button', className: 'tag-pill' + (w.step === k ? ' active' : ''), onclick: () => { w.step = k; paint(); } }, `S${k + 1}`)),
            el('button', { type: 'button', className: 'tag-pill' + (w.step === 10 ? ' active' : ''), onclick: () => { w.step = 10; paint(); } }, 'Email'),
            el('button', { type: 'button', className: 'tag-pill' + (w.step === 11 ? ' active' : ''), onclick: () => { w.step = 11; paint(); } }, 'Discussion')),
          w.step < 11
            ? el('button', { type: 'button', className: 'primary', onclick: () => { w.step++; paint(); } }, el('span', {}, 'Next Item →'))
            : el('button', { type: 'button', className: 'fc-mk-subbtn', onclick: () => advanceStageOrSubmit(false) }, 'Finish Writing →')),
        content);
    }

    function renderMicRecorder(key) {
      const url = rec.urls.get(key);
      const isRec = rec.active && rec.key === key;
      return el('div', { className: 'tf-mic-box' },
        el('div', { className: 'tf-mic-bar' },
          el('button', {
            type: 'button',
            className: 'fc-mk-playbtn' + (isRec ? ' playing' : ''),
            onclick: () => toggleMic(key),
          }, isRec ? '■ Stop Recording' : url ? '● Re-record Voice' : '● Record Response'),
          ...(rec.error ? [el('span', { className: 'tf-audio-msg' }, rec.error)] : []),
          ...(url ? [el('audio', { controls: true, src: url, className: 'tf-audio-player' })] : [])));
    }

    function renderSpeaking() {
      const sp = sess.sp;
      const showImmediate = sess.examMode === 'practice';
      let content;

      if (sp.step < 5) {
        const ri = sp.step;
        const item = sp.raw.repeat[ri];
        const key = `sp:rep:${ri}`;
        content = el('div', { className: 'fc-card fc-qz-card' },
          el('div', { className: 'fc-card-meta' }, el('span', {}, `Task 1: Listen and Repeat · Sentence ${ri + 1}/5`)),
          renderAudioControl(key, 'Hear Sentence', [[item.text, item.accent || 'us', item.sex || 'f']], [`Target Sentence: "${item.text}"`]),
          renderMicRecorder(key),
          el('details', { className: 'tf-transcript', open: showImmediate },
            el('summary', {}, 'Target Sentence Text'),
            el('p', {}, item.text)),
          el('div', { className: 'tf-self-rate' },
            el('small', {}, 'Fluency & Accuracy Self-Rate:'),
            ...[2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0].map((v) => el('button', {
              type: 'button',
              className: 'tag-pill' + (sp.repeatSelf[ri] === v ? ' active' : ''),
              onclick: () => { sp.repeatSelf[ri] = v; paint(); },
            }, v.toFixed(1)))));
      } else {
        const qi = sp.step - 5;
        const iv = sp.raw.interview;
        const qObj = iv.questions[qi];
        const key = `sp:iv:${qi}`;
        content = el('div', { className: 'fc-card fc-qz-card' },
          el('div', { className: 'fc-card-meta' }, el('span', {}, `Task 2: Take an Interview (${iv.topic}) · Q${qi + 1}/4 (~45s)`)),
          el('p', { className: 'tf-cue' }, iv.intro),
          renderAudioControl(key, 'Hear Interviewer Question', [[qObj.q, 'us', 'f']], [`Interviewer: "${qObj.q}"`]),
          el('div', { className: 'fc-qz-q' }, qObj.q),
          renderMicRecorder(key),
          el('textarea', {
            className: 'tf-textarea',
            rows: 4,
            value: sp.ivNotes[qi],
            placeholder: 'Optional: jot down key points or your spoken transcript to check with Model Answer / Gemini AI…',
            oninput: (e) => { sp.ivNotes[qi] = e.target.value; },
          }),
          renderAiBox(sp.ivAi, sp.ivSelf[qi], (v) => { sp.ivSelf[qi] = v; }, () => runAiEvaluation('Speaking Interview', `${iv.topic}\nQuestion: ${qObj.q}`, sp.ivNotes[qi], (res) => { sp.ivAi = res; }), sp.ivNotes[qi].trim().length >= 10),
          el('details', { className: 'tf-transcript', open: showImmediate },
            el('summary', {}, 'Band 6.0 Sample Spoken Answer & Tips'),
            el('p', {}, qObj.model),
            el('p', {}, 'Tips: ' + qObj.tips)));
      }

      return el('div', { className: 'tf-work' },
        el('div', { className: 'tf-subbar' },
          el('div', { className: 'fc-mk-modepills' },
            ...Array.from({ length: 5 }, (_, k) => el('button', { type: 'button', className: 'tag-pill' + (sp.step === k ? ' active' : ''), onclick: () => { stopTts(); sp.step = k; paint(); } }, `Repeat ${k + 1}`)),
            ...Array.from({ length: 4 }, (_, k) => el('button', { type: 'button', className: 'tag-pill' + (sp.step === 5 + k ? ' active' : ''), onclick: () => { stopTts(); sp.step = 5 + k; paint(); } }, `Interview ${k + 1}`))),
          sp.step < 8
            ? el('button', { type: 'button', className: 'primary', onclick: () => { stopTts(); sp.step++; paint(); } }, el('span', {}, 'Next Prompt →'))
            : el('button', { type: 'button', className: 'fc-mk-subbtn', onclick: () => advanceStageOrSubmit(false) }, 'Finish Speaking →')),
        content);
    }

    function renderReport(stage) {
      const ov = sess.overall;
      const cards = sess.skills.map((sk) => {
        const rp = sess.reports[sk];
        if (!rp) return null;
        let sub = '';
        if (sk === 'reading' || sk === 'listening') sub = `${rp.correct}/${rp.total} correct · ${rp.branch === 'upper' ? 'Upper Adaptive' : 'Standard Adaptive'} (${rp.range120}/120)`;
        if (sk === 'writing') sub = `Build ${rp.buildOk}/${rp.buildTotal} · Email ${rp.emailBand.toFixed(1)} (${rp.emailSource}) · Disc ${rp.discBand.toFixed(1)}`;
        if (sk === 'speaking') sub = `${rp.source} · Rated ${rp.repRated + rp.ivRated}/9 prompts`;
        return el('div', { className: 'fc-mk-partbox' },
          el('small', {}, `${sk.toUpperCase()} BAND`),
          el('b', {}, `${rp.band.toFixed(1)} / 6.0`),
          el('span', {}, sub));
      }).filter(Boolean);

      let reviewPanel = null;
      if (sess.revSkill === 'reading') {
        const r = sess.r;
        const st2 = r.branch === 'upper' ? r.raw.stage2b : r.raw.stage2a;
        const items = [
          ...r.raw.stage1.academic.qs.map((q, qi) => ({ q, pick: r.stage1.mcqs[`a_${qi}`], lbl: 'Stage 1 Academic' })),
          ...st2.academic.qs.map((q, qi) => ({ q, pick: r[r.branch === 'upper' ? 'stage2b' : 'stage2a'].mcqs[`a_${qi}`], lbl: 'Stage 2 Academic' })),
        ];
        reviewPanel = el('ul', { className: 'fc-qz-review' }, ...items.map((it) => el('li', { className: 'fc-qz-rev-item' },
          el('small', {}, `${it.lbl} · ${it.pick === it.q.ans ? '✓ Correct' : '✕ Review'}`),
          el('p', { className: 'fc-qz-rev-q' }, it.q.q),
          el('p', { className: 'fc-qz-rev-pick' }, `Correct: (${LETTERS[it.q.ans]}) ${it.q.choices[it.q.ans]}`),
          el('p', { className: 'fc-qz-why' }, it.q.why))));
      } else if (sess.revSkill === 'writing') {
        reviewPanel = el('ul', { className: 'fc-qz-review' }, ...sess.w.raw.build.map((it, bi) => {
          const ok = scoreToeflBuildSentence(sess.w.buildPicks[bi], it);
          return el('li', { className: 'fc-qz-rev-item' },
            el('small', {}, `Build Sentence ${bi + 1} · ${ok ? '✓ Correct' : '✕ Review'}`),
            el('p', { className: 'fc-qz-rev-q' }, it.ans),
            el('p', { className: 'fc-qz-why' }, it.why));
        }));
      } else if (sess.revSkill === 'listening') {
        const l = sess.l;
        const st2 = l.branch === 'upper' ? l.raw.stage2b : l.raw.stage2a;
        const items = [
          ...l.raw.stage1.talk.qs.map((q, qi) => ({ q, pick: l.stage1.talk[qi], lbl: 'Stage 1 Talk' })),
          ...st2.talk.qs.map((q, qi) => ({ q, pick: l[l.branch === 'upper' ? 'stage2b' : 'stage2a'].talk[qi], lbl: 'Stage 2 Talk' })),
        ];
        reviewPanel = el('ul', { className: 'fc-qz-review' }, ...items.map((it) => el('li', { className: 'fc-qz-rev-item' },
          el('small', {}, `${it.lbl} · ${it.pick === it.q.ans ? '✓ Correct' : '✕ Review'}`),
          el('p', { className: 'fc-qz-rev-q' }, it.q.q),
          el('p', { className: 'fc-qz-rev-pick' }, `Correct: (${LETTERS[it.q.ans]}) ${it.q.choices[it.q.ans]}`),
          el('p', { className: 'fc-qz-why' }, it.q.why))));
      } else if (sess.revSkill === 'speaking') {
        reviewPanel = el('ul', { className: 'fc-qz-review' }, ...sess.sp.raw.interview.questions.map((qObj, qi) => el('li', { className: 'fc-qz-rev-item' },
          el('small', {}, `Interview Question ${qi + 1}`),
          el('p', { className: 'fc-qz-rev-q' }, qObj.q),
          el('p', { className: 'fc-qz-why' }, `Model Band 6.0: ${qObj.model}`))));
      }

      stage.replaceChildren(
        el('div', { className: 'fc-mk-report' },
          el('div', { className: 'fc-mk-hud' },
            el('div', { className: 'fc-mk-hud-l' },
              el('button', { type: 'button', className: 'linkish', onclick: () => { stopAll(true); sess = null; paint(); } }, '← All 10 TOEFL Sets'),
              el('strong', {}, `TOEFL iBT Set ${sess.set} · 2026 Score Report`)),
            el('div', { className: 'fc-mk-hud-r' },
              el('button', { type: 'button', className: 'fc-grade', onclick: () => launchSet(sess.set, { section: sess.section, examMode: sess.examMode }) }, el('b', {}, `Retake Set ${sess.set}`)),
              ...(sess.set < 10 ? [el('button', { type: 'button', className: 'primary', onclick: () => launchSet(sess.set + 1, { section: sess.section, examMode: sess.examMode }) }, el('span', {}, `Next: Set ${sess.set + 1} →`))] : []))),
          el('div', { className: 'fc-mk-hero' },
            el('div', { className: 'fc-mk-hero-score' },
              el('b', {}, ov.band.toFixed(1)),
              el('small', {}, `/ 6.0 Band · CEFR ${ov.cefr}`)),
            el('div', {},
              el('strong', {}, `Comparable 0–120 Range: ${ov.range120} (approx. ${ov.mid120}/120)`),
              el('small', { style: { display: 'block', color: 'var(--mute)' } }, `Theme: ${sess.theme}`))),
          el('div', { className: 'fc-mk-parts' }, ...cards),
          el('div', { className: 'fc-mk-revbar' },
            el('div', { className: 'fc-mk-modepills' }, ...sess.skills.map((sk) => el('button', {
              type: 'button',
              className: 'tag-pill' + (sess.revSkill === sk ? ' active' : ''),
              onclick: () => { sess.revSkill = sk; paint(); },
            }, `Review ${sk}`)))),
          ...(reviewPanel ? [reviewPanel] : [])));
    }

    function paintToefl(stage) {
      const d = getData();
      if (!sess) {
        const scores = d.toeflScores || {};
        const doneKeys = Object.keys(scores).filter((k) => k.startsWith(`${toeflSection}:`));
        const bestBand = doneKeys.reduce((mx, k) => Math.max(mx, scores[k]?.bestBand || 0), 0);
        const setThemes = [
          'Urban Heat Islands & Marine Biology',
          'Pollinators & Early Printing Press',
          'Aquifers & Viking Navigation',
          'Forest Mycelium & Roman Concrete',
          'Hydrothermal Vents & Choice Nudges',
          'Bird Magnetoreception & Film Sound',
          'Coral Restoration & Phonetics',
          'Ice Core Climate & Filtration',
          'Soil Microbiomes & Sleep Memory',
          'Tidal Turbines & Silk Road Ceramics',
        ];
        stage.replaceChildren(
          el('div', { className: 'fc-qz-bar' }, sourceBar()),
          el('div', { className: 'fc-mk-lobby' },
            el('div', { className: 'fc-mk-modebar' },
              el('div', { className: 'fc-mk-modepills', role: 'group', ariaLabel: 'TOEFL iBT 2026 Section' },
                [['full', 'Full 4-Skill (~90m)'], ['reading', 'Reading (~30m)'], ['listening', 'Listening (~29m)'], ['writing', 'Writing (~23m)'], ['speaking', 'Speaking (~8m)']].map(([sk, lbl]) => el('button', {
                  type: 'button',
                  className: 'tag-pill' + (toeflSection === sk ? ' active' : ''),
                  onclick: () => { toeflSection = sk; paint(); },
                }, lbl))),
              el('span', { className: 'fc-mk-stats' }, `${doneKeys.length}/10 completed` + (bestBand ? ` · Peak ${bestBand.toFixed(1)}/6.0 (${toeflComparable120(bestBand).range})` : ''))),
            el('div', { className: 'fc-mk-modebar' },
              el('div', { className: 'fc-mk-modepills' },
                el('button', { type: 'button', className: 'tag-pill' + (toeflMode === 'exam' ? ' active' : ''), onclick: () => { toeflMode = 'exam'; paint(); } }, 'Adaptive Exam Mode (Timed · 1-Play Audio)'),
                el('button', { type: 'button', className: 'tag-pill' + (toeflMode === 'practice' ? ' active' : ''), onclick: () => { toeflMode = 'practice'; paint(); } }, 'Practice Mode (Untimed · Replay · Stage Switch · Models)'))),
            el('div', { className: 'fc-mk-grid tf-grid', role: 'group', ariaLabel: '10 TOEFL iBT 2026 Sets' },
              ...Array.from({ length: 10 }, (_, idx) => {
                const s = idx + 1;
                const sc = scores[`${toeflSection}:${s}`];
                const isLoad = loadingSet === s;
                return el('button', {
                  type: 'button',
                  className: 'fc-mk-setcard' + (sc ? ' scored' : '') + (isLoad ? ' disabled' : ''),
                  disabled: loadingSet > 0,
                  onclick: () => launchSet(s, { section: toeflSection, examMode: toeflMode }),
                },
                el('b', {}, `TOEFL Set ${s}`, ...(sc ? [el('span', { className: 'fc-mk-band' }, `${sc.bestBand.toFixed(1)} (${sc.cefr})`)] : [])),
                el('small', {}, isLoad ? 'Loading…' : sc ? `Best ${sc.bestBand.toFixed(1)}/6.0 · ${sc.range120}` : setThemes[idx]));
              }))));
        return;
      }

      if (sess.submitted) { renderReport(stage); return; }

      if (sess.intermission) {
        const prevSk = sess.skills[sess.skillIdx - 1];
        const prevRep = sess.reports[prevSk];
        stage.replaceChildren(
          el('div', { className: 'fc-mk-hud' },
            el('div', { className: 'fc-mk-hud-l' },
              el('button', { type: 'button', className: 'linkish', onclick: () => { stopAll(true); sess = null; paint(); } }, '← Exit TOEFL'),
              el('strong', {}, `TOEFL Set ${sess.set}`)),
            el('span', { className: 'fc-mk-partpill' }, `Next Section: ${sess.curSkill.toUpperCase()}`)),
          el('div', { className: 'fc-mk-stage2box' },
            el('h3', {}, `${prevSk.toUpperCase()} Complete · Estimated ${prevRep?.band?.toFixed(1) || '—'}/6.0 (${prevRep?.cefr || ''})`),
            el('p', {}, `Ready for Section ${sess.skillIdx + 1}/${sess.skills.length}: ${sess.curSkill.toUpperCase()} (${Math.round((TIME_LIMITS[sess.curSkill] || 1800) / 60)} min base).`),
            el('button', {
              type: 'button',
              className: 'primary',
              onclick: () => { sess.intermission = false; sess.elapsed = 0; syncTimer(); paint(); },
            }, el('span', {}, `Begin ${sess.curSkill.toUpperCase()} →`))));
        return;
      }

      const limit = TIME_LIMITS[sess.curSkill] || 1800;
      const left = Math.max(0, limit - sess.elapsed);
      const hud = el('div', { className: 'fc-mk-hud' },
        el('div', { className: 'fc-mk-hud-l' },
          el('button', { type: 'button', className: 'linkish', onclick: () => { stopAll(true); sess = null; paint(); } }, '← All 10 TOEFL Sets'),
          el('strong', {}, `TOEFL Set ${sess.set}`),
          el('span', { className: 'fc-mk-partpill' }, `${sess.curSkill.toUpperCase()} (${sess.skillIdx + 1}/${sess.skills.length})`)),
        el('div', { className: 'fc-mk-hud-r' },
          ...(sess.examMode === 'exam'
            ? [
                el('span', { id: 'tf-timer', className: 'fc-mk-timer' + (left <= 180 ? ' warn' : '') }, formatClock(left)),
                el('button', { type: 'button', className: 'tag-pill', onclick: () => { sess.paused = !sess.paused; if (sess.paused) stopTts(); syncTimer(); paint(); } }, sess.paused ? 'Resume' : 'Pause'),
              ]
            : [el('span', { className: 'fc-mk-partpill' }, 'Practice Mode')]),
          el('button', { type: 'button', className: 'fc-mk-subbtn', onclick: () => advanceStageOrSubmit(false) }, sess.skillIdx + 1 < sess.skills.length ? `Next Section →` : 'Submit Test')));

      if (sess.paused) {
        stage.replaceChildren(hud, el('div', { className: 'fc-mk-pausebox' },
          el('h3', {}, `TOEFL Set ${sess.set} (${sess.curSkill.toUpperCase()}) Paused`),
          el('p', {}, `${formatClock(left)} remaining in this section.`),
          el('button', { type: 'button', className: 'primary', onclick: () => { sess.paused = false; syncTimer(); paint(); } }, el('span', {}, 'Resume Test →'))));
        return;
      }

      const body = sess.curSkill === 'reading'
        ? renderReading()
        : sess.curSkill === 'listening'
          ? renderListening()
          : sess.curSkill === 'writing'
            ? renderWriting()
            : renderSpeaking();

      stage.replaceChildren(hud, body);
      syncTimer();
    }

    return {
      paint: paintToefl,
      stopAll,
      isActive: () => Boolean(sess),
      launchSet,
    };
  }

  if (typeof module !== 'undefined') module.exports = { createToeflController };
  else globalThis.createToeflController = createToeflController;
})();
