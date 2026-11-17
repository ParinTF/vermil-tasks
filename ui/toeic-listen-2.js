// Volume 2 of TOEIC Listening Mock Exams (Sets 6-10, 270 tracks = 500 Qs)
globalThis.TOEIC_LISTEN_VOLS = globalThis.TOEIC_LISTEN_VOLS || {};
globalThis.TOEIC_LISTEN_VOLS[2] = (() => {
  const doc = (kind, title, meta, blocks) => ({ kind, title, ...(meta ? { meta } : {}), blocks });
  const tbl = (headers, rows) => ({ type: 'table', headers, rows });
  const lst = (items) => ({ type: 'list', items });
  const box = (title, lines) => ({ type: 'box', title, lines });
  const rotPlace = (arr, ansIdx, seed) => {
    const n = arr.length;
    const target = ((seed % n) + n) % n;
    const wrong = arr.filter((_, i) => i !== ansIdx);
    const out = new Array(n);
    out[target] = arr[ansIdx];
    let wi = 0;
    for (let i = 0; i < n; i++) if (i !== target) out[i] = wrong[wi++];
    return [out, target];
  };
  const itemNum = (id) => Number(String(id).split('-').pop()) || 1;
  const p1 = (set, id, accent, stmts, ans, why) => {
    const [bal, bAns] = rotPlace(stmts, ans, set * 3 + itemNum(id));
    return { set, part: 1, id, accent, stmts: bal, ans: bAns, why };
  };
  const p2 = (set, id, accentQ, accentA, prompt, choices, ans, why) => {
    const [bal, bAns] = rotPlace(choices, ans, set * 7 + itemNum(id));
    return { set, part: 2, id, accentQ, accentA, accent: `${accentQ} / ${accentA}`, prompt, choices: bal, ans: bAns, why };
  };
  const p3 = (set, id, turns, docItem, qs) => ({
    set, part: 3, id, turns, doc: docItem,
    questions: qs.map(([tag, q, choices, ans, why]) => ({ tag, q, choices, ans, why })),
  });
  const p4 = (set, id, label, speaker, text, docItem, qs) => ({
    set, part: 4, id, label, speaker, text, doc: docItem,
    questions: qs.map(([tag, q, choices, ans, why]) => ({ tag, q, choices, ans, why })),
  });

  return [
    // ==================== SET 6 ====================
    p1(6, 'l6-p1-1', 'us_f', [
      'A dental receptionist is handing a clipboard across a counter to a patient.',
      'A hygienist is polishing metal instruments beside a sink.',
      'Patients are filling out medical forms while standing in a hallway.',
      'Empty clinic chairs have been stacked against the waiting room wall.',
    ], 0, 'ตอบ A dental receptionist is handing a clipboard across a counter to a patient. (พนักงานต้อนรับคลินิกทันตกรรมกำลังยื่นคลิปบอร์ดข้ามเคาน์เตอร์ให้คนไข้)'),
    p1(6, 'l6-p1-2', 'uk_m', [
      'Passengers are claiming suitcases from a rotating baggage carousel.',
      'Ground crew members are loading luggage onto a conveyor belt truck.',
      'A pilot is walking down mobile stairs beside a parked aircraft.',
      'Plastic cargo containers are being washed near a hangar door.',
    ], 1, 'ตอบ Ground crew members are loading luggage onto a conveyor belt truck. (เจ้าหน้าที่ภาคพื้นกำลังขนกระเป๋าเดินทางขึ้นรถสายพานลำเลียงสัมภาระ)'),
    p1(6, 'l6-p1-3', 'au_f', [
      'Reporters are reading morning editions beside a printing press.',
      'Bundles of freshly printed newspapers are stacked on a wooden pallet.',
      'A delivery driver is tying twine around rolled magazines.',
      'Boxes of ink cartridges are spilling onto a concrete floor.',
    ], 1, 'ตอบ Bundles of freshly printed newspapers are stacked on a wooden pallet. (มัดหนังสือพิมพ์ที่พิมพ์เสร็จใหม่วางเรียงซ้อนกันอยู่บนพาเลตไม้)'),
    p1(6, 'l6-p1-4', 'ca_m', [
      'Travelers are seated in armchairs facing large airport terminal windows.',
      'Waitstaff are clearing breakfast plates from small round tables.',
      'Commuters are lining up to scan boarding passes at a kiosk.',
      'A flight crew is pushing wheeled suitcases toward an escalator.',
    ], 0, 'ตอบ Travelers are seated in armchairs facing large airport terminal windows. (ผู้โดยสารนั่งพักบนเก้าอี้นวมหันหน้าเข้าหากระจกบานใหญ่ของอาคารผู้โดยสาร)'),
    p1(6, 'l6-p1-5', 'us_m2', [
      'A lab technician is adjusting a microscope on a steel workbench.',
      'Medical bottles are being labeled with adhesive barcode stickers.',
      'Two clinicians are comparing X-ray films held up to a light box.',
      'Glass beakers are drying upside down on a wooden rack.',
    ], 0, 'ตอบ A lab technician is adjusting a microscope on a steel workbench. (เจ้าหน้าที่ห้องแล็บกำลังปรับกล้องจุลทรรศน์บนโต๊ะทำงานสเตนเลส)'),
    p1(6, 'l6-p1-6', 'uk_f2', [
      'Journalists are typing articles on desktop computers in cubicles.',
      'Two editors are inspecting printed page proofs spread across a table.',
      'A photographer is mounting camera lenses onto a heavy tripod.',
      'Paper recycling bins are being wheeled out of a dark hallway.',
    ], 1, 'ตอบ Two editors are inspecting printed page proofs spread across a table. (บรรณาธิการสองคนกำลังก้มตรวจปรู๊ฟหน้าหนังสือพิมพ์ที่กางอยู่เต็มโต๊ะ)'),

    // Set 6 Part 2 (25 Qs)
    p2(6, 'l6-p2-1', 'uk_f', 'us_m', 'Where can passengers pick up complimentary lounge shower towels?', ['Ask the concierge desk beside the quiet zone.', 'Only on international flights over six hours.', 'Yes, the spa showers were renovated last spring.'], 0, 'ตอบ Ask the concierge desk beside the quiet zone. (ถามสถานที่รับผ้าเช็ดตัวในเลานจ์ ตอบให้ติดต่อเคาน์เตอร์คอนเซียร์จข้างโซนเงียบ)'),
    p2(6, 'l6-p2-2', 'us_m', 'au_f', 'Who is covering Dr. Ortiz’s afternoon dental cleanings?', ['Mostly routine checkups and sealants.', 'Dr. Patel swapped shifts so she could attend a seminar.', 'In Treatment Room Two down the corridor.'], 1, 'ตอบ Dr. Patel swapped shifts so she could attend a seminar. (ถามบุคคล Who ตอบคุณหมอ Patel สลับเวรมาดูแลแทน)'),
    p2(6, 'l6-p2-3', 'ca_f', 'uk_m', 'When does the final proof for tomorrow’s front page go to press?', ['At the downtown distribution facility.', 'Roughly thirty thousand weekend copies.', 'Right after the managing editor signs off at nine.'], 2, 'ตอบ Right after the managing editor signs off at nine. (ถามเวลา When ตอบทันทีที่บรรณาธิการบริหารอนุมัติตอนสามทุ่ม)'),
    p2(6, 'l6-p2-4', 'au_m', 'us_f', 'Would you rather schedule your root canal on Tuesday morning or Thursday afternoon?', ['Thursday afternoon gives me time to leave work early.', 'No, the dentist recommended waiting a week.', 'About forty-five minutes with local numbing.'], 0, 'ตอบ Thursday afternoon gives me time to leave work early. (คำถามเลือกวันเวลา ตอบเลือกบ่ายวันพฤหัสบดีเพราะเลิกงานทัน)'),
    p2(6, 'l6-p2-5', 'us_f', 'uk_f2', 'Why was Gate 14 closed for tarmac resurfacing?', ['Boarding starts twenty minutes before departure.', 'Heavy winter salt cracked the concrete apron.', 'At the south end of Concourse B.'], 1, 'ตอบ Heavy winter salt cracked the concrete apron. (ถามเหตุผล Why ตอบเกลือละลายหิมะช่วงหน้าหนาวทำให้ลานจอดแตกร้าว)'),
    p2(6, 'l6-p2-6', 'uk_m', 'ca_m', 'Haven’t the sterilization pouches been restocked in Exam Room 3?', ['No, I didn’t sterilize the waiting room chairs.', 'Our dental assistant just put two fresh boxes in the drawer.', 'Every patient wears a disposable paper bib.'], 1, 'ตอบ Our dental assistant just put two fresh boxes in the drawer. (คำถามปฏิเสธ Haven’t... ตอบข้อเท็จจริงว่าผู้ช่วยทันตแพทย์เพิ่งเติมสองกล่องใหม่ลงลิ้นชักแล้ว)'),
    p2(6, 'l6-p2-7', 'us_m2', 'us_f2', 'How many carry-on luggage carts are parked near Carousel Five?', ['I counted at least a dozen along the pillar.', 'Check with Lost and Found upstairs.', 'Passengers usually prefer the rolling bins.'], 0, 'ตอบ I counted at least a dozen along the pillar. (ถามจำนวน How many ตอบนับได้ประมาณโหลหนึ่งตรงเสา)'),
    p2(6, 'l6-p2-8', 'uk_f2', 'au_m', 'Could you verify the patient’s insurance card before she goes back?', ['Yes, the dental clinic opened at eight sharp.', 'Sure, I’ll scan both sides at the front desk right now.', 'Her filling lasted almost three years.'], 1, 'ตอบ Sure, I’ll scan both sides at the front desk right now. (ขอให้ตรวจบัตรประกันก่อน ตอบรับว่าจะสแกนทั้งสองด้านให้เดี๋ยวนี้)'),
    p2(6, 'l6-p2-9', 'ca_m', 'us_f', 'The newsroom coffee brewer has been leaking onto the counter all morning.', ['No, I prefer dark roast espresso.', 'Around twelve journalists on the night desk.', 'Let’s unplug it and call Building Maintenance.'], 2, 'ตอบ Let’s unplug it and call Building Maintenance. (ประโยคบอกเล่าแจ้งเครื่องชงกาแฟรั่ว ตอบเสนอให้ถอดปลั๊กแล้วแจ้งฝ่ายอาคาร)'),
    p2(6, 'l6-p2-10', 'us_f2', 'uk_m', 'Which printing press requires new ink rollers this month?', ['Unit Four has been streaking on glossy inserts.', 'Yes, black ink cartridges arrived on Monday.', 'On the lower floor beside the paper rolls.'], 0, 'ตอบ Unit Four has been streaking on glossy inserts. (ถามเลือกเครื่อง Which printing press ตอบระบุเครื่องหมายเลข 4 ที่พิมพ์เป็นรอยเส้น)'),
    p2(6, 'l6-p2-11', 'au_f', 'us_m2', 'How long does the VIP tarmac shuttle take between Terminal A and Concourse C?', ['Only for platinum cardholders.', 'Usually around eight minutes unless a jet crosses.', 'Three times every hour before noon.'], 1, 'ตอบ Usually around eight minutes unless a jet crosses. (ถามระยะเวลา How long ตอบประมาณ 8 นาที)'),
    p2(6, 'l6-p2-12', 'uk_m', 'ca_f', 'Should we run the airline merger story on page one or in the business section?', ['Our editorial board agreed page one makes more impact.', 'Yes, the merger takes effect next quarter.', 'Over two hundred regional flights daily.'], 0, 'ตอบ Our editorial board agreed page one makes more impact. (คำถามทางเลือก A or B ตอบบอร์ดบรรณาธิการเห็นพ้องให้ลงหน้าหนึ่ง)'),
    p2(6, 'l6-p2-13', 'us_m', 'uk_f', 'Where did the phlebotomist leave the sealed blood sample coolers?', ['They go out on the three o’clock courier van.', 'Right inside the refrigerated drop box by Lab B.', 'Because the clinic extended morning fasting hours.'], 1, 'ตอบ Right inside the refrigerated drop box by Lab B. (ถามสถานที่ Where ตอบวางไว้ในตู้แช่รับส่งข้างแล็บ B)'),
    p2(6, 'l6-p2-14', 'uk_f', 'au_m', 'Why don’t we offer evening dental appointments on Wednesdays?', ['No, I had my teeth cleaned last Tuesday.', 'Until the receptionists finish billing claims.', 'Commuters would definitely appreciate later hours.'], 2, 'ตอบ Commuters would definitely appreciate later hours. (Why don’t we เสนอความเห็น ตอบเห็นด้วยว่าคนทำงานเดินทางน่าจะชอบเวลาช่วงเย็น)'),
    p2(6, 'l6-p2-15', 'us_m2', 'us_f', 'You’re flying out of Heathrow on Friday evening, aren’t you?', ['Platform Two near the express ticket gate.', 'Actually, my assistant rebooked me onto Thursday morning.', 'That lounge has really comfortable armchairs.'], 1, 'ตอบ Actually, my assistant rebooked me onto Thursday morning. (Tag question ถามย้ำ ตอบแก้ไขข้อมูลว่าผู้ช่วยเลื่อนไฟลต์เป็นเช้าวันพฤหัสฯ แล้ว)'),
    p2(6, 'l6-p2-16', 'ca_m', 'uk_f2', 'Who approved the extra editorial intern stipend for the summer desk?', ['Managing Editor Wong signed the budget memo yesterday.', 'Four journalism majors from local colleges.', 'Inside the corner newsroom conference booth.'], 0, 'ตอบ Managing Editor Wong signed the budget memo yesterday. (ถามบุคคล Who ตอบบรรณาธิการบริหาร Wong เป็นคนเซ็นอนุมัติ)'),
    p2(6, 'l6-p2-17', 'us_f', 'au_m', 'How much is the overnight boarding pass upgrade for lounge access?', ['Twenty-eight dollars if you book through the airline app.', 'Yes, reclining pods include pillows and blankets.', 'Only passengers departing before midnight.'], 0, 'ตอบ Twenty-eight dollars if you book through the airline app. (ถามราคา How much ตอบ 28 ดอลลาร์หากจองผ่านแอป)'),
    p2(6, 'l6-p2-18', 'uk_m', 'ca_f', 'Did the baggage tug finish unloading the delayed Vancouver flight?', ['Twice a day from Gate Nine.', 'No, I checked my carry-on bag already.', 'Half the cargo hold still needs clearing because of rain.'], 2, 'ตอบ Half the cargo hold still needs clearing because of rain. (ถามว่าขนเสร็จหรือยัง ตอบข้อเท็จจริงว่ายังเหลืออีกครึ่งลำเพราะฝนตก)'),
    p2(6, 'l6-p2-19', 'us_f2', 'us_m', 'Our clinic waiting area gets really noisy whenever the streetcar passes.', ['Right—maybe double-paned windows would help calm patients.', 'Yes, the appointment takes thirty minutes.', 'Put the extra magazines on the side shelf.'], 0, 'ตอบ Right—maybe double-paned windows would help calm patients. (ประโยคบอกเล่าเรื่องเสียงรบกวน ตอบเห็นด้วยพร้อมเสนอทางแก้ติดกระจกสองชั้น)'),
    p2(6, 'l6-p2-20', 'au_m', 'uk_f', 'When will the quarterly subscriber circulation report be ready for the publisher?', ['Mainly print renewals from suburban households.', 'Analytics promised the verified totals by Tuesday noon.', 'Sent via encrypted PDF to regional managers.'], 1, 'ตอบ Analytics promised the verified totals by Tuesday noon. (ถามกำหนดเวลา When ตอบฝ่ายวิเคราะห์ข้อมูลสัญญาว่าจะส่งยอดเที่ยงวันอังคาร)'),
    p2(6, 'l6-p2-21', 'uk_f', 'us_m2', 'Do you know if the airport pharmacy inside Terminal 2 stays open past midnight?', ['I picked up travel earplugs there yesterday.', 'They switch to an emergency walk-up window at eleven.', 'Around fifteen dollars for prescription copays.'], 1, 'ตอบ They switch to an emergency walk-up window at eleven. (ถามเวลาเปิดทำการ ตอบอ้อมว่าหลังห้าทุ่มจะเปลี่ยนเป็นช่องรับยาฉุกเฉิน)'),
    p2(6, 'l6-p2-22', 'us_m', 'ca_f', 'What time does the morning dental huddle start on Mondays?', ['Ten minutes before the first patient arrives at eight.', 'To review hygienist rooms and lab crown deliveries.', 'In the staff breakroom behind X-ray.'], 0, 'ตอบ Ten minutes before the first patient arrives at eight. (ถามเวลา What time ตอบ 7:50 น. คือสิบนาทีก่อนคนไข้คนแรกเข้าแปดโมง)'),
    p2(6, 'l6-p2-23', 'ca_f', 'au_m', 'Can you help me sort these archived newspaper microfilm reels?', ['Yes, the Sunday sports column won an award.', 'Sure, let’s organize them chronologically by decade.', 'Inside the climate-controlled vault downstairs.'], 1, 'ตอบ Sure, let’s organize them chronologically by decade. (ขอให้ช่วยจัดเรียง ตอบตกลงพร้อมเสนอวิธีเรียงตามทศวรรษ)'),
    p2(6, 'l6-p2-24', 'us_f2', 'uk_m', 'Have the ground crew supervisors updated the winter de-icing checklist yet?', ['About two hundred gallons of glycol fluid.', 'They’re testing the revised checklist on Hangar Three’s jet right now.', 'Usually whenever runway frost forms overnight.'], 1, 'ตอบ They’re testing the revised checklist on Hangar Three’s jet right now. (ถามว่าอัปเดตหรือยัง ตอบกำลังทดสอบรายการตรวจฉบับปรับปรุงที่โรงเก็บเครื่องบิน 3)'),
    p2(6, 'l6-p2-25', 'uk_m', 'us_f', 'Whose stethoscope is hanging on the hook behind the nurses’ station?', ['Dr. Kim left it there before stepping out for lunch.', 'Yes, the pediatric clinic gets busy on Fridays.', 'Place the sterilized thermometers in the blue bin.'], 0, 'ตอบ Dr. Kim left it there before stepping out for lunch. (ถามเจ้าของ Whose ตอบคุณหมอ Kim แขวนทิ้งไว้ก่อนออกไปทานมื้อกลางวัน)'),

    // Set 6 Part 3 (13 Conversations: 1-10 no doc, 11-13 with doc; >=2 3-speaker convs)
    p3(6, 'l6-p3-1', [
      ['Woman', 'us_f', 'Ben, our new patient scheduling software just double-booked Ms. Alvarez and Mr. Cho with our only morning hygienist at ten o’clock.'],
      ['Man', 'uk_m', 'Oh no—did the online portal fail to sync with our walk-in calendar again?'],
      ['Woman', 'us_f', 'Exactly. Ms. Alvarez lives five minutes away, so I’m going to call and see if she can slide to eleven-thirty in exchange for a complimentary fluoride rinse.'],
      ['Man', 'uk_m', 'Smart idea. Meanwhile, I’ll turn off automated morning bookings until IT patches that calendar lag.'],
    ], null, [
      ['Part 3 · Problem', 'What problem occurred at the dental clinic?', ['Two patients were assigned to the same hygienist slot', 'The morning hygienist called in sick without notice', 'A patient missed a scheduled ten o’clock cleaning', 'The clinic’s billing system erased insurance records'], 0, 'ตอบ Two patients were assigned to the same hygienist slot (ระบบนัดหมายซ้ำให้คนไข้สองคนมาเวลารอบสิบโมงกับทันตานามัยคนเดียวกัน)'],
      ['Part 3 · Detail', 'How does the woman plan to persuade Ms. Alvarez to move her appointment?', ['By offering a free fluoride treatment at eleven-thirty', 'By waiving her annual dental checkup fee completely', 'By assigning a second hygienist from another branch', 'By sending a taxi voucher to her home address'], 0, 'ตอบ By offering a free fluoride treatment at eleven-thirty (เสนอเคลือบฟลูออไรด์ฟรีถ้าขยับเวลาเป็น 11:30 น.)'],
      ['Part 3 · Action', 'What will the man do next?', ['Pause automatic morning reservations until a software fix arrives', 'Phone the clinic’s insurance provider for billing help', 'Drive to Ms. Alvarez’s home to deliver paperwork', 'Update patient X-ray files on the reception desktop'], 0, 'ตอบ Pause automatic morning reservations until a software fix arrives (ผู้ชายจะปิดการจองอัตโนมัติช่วงเช้าไว้ชั่วคราวจนกว่าฝ่ายไอทีจะแก้บั๊ก)'],
    ]),

    p3(6, 'l6-p3-2', [
      ['Man', 'au_m', 'Priya, Cargo Flight 880 just got diverted from Bay 4 to Bay 9 because the hydraulic tow bar snapped during pushback on the previous jet.'],
      ['Woman', 'ca_f', 'Bay 9 is clear, right? Do we have enough baggage tractors positioned on the east apron?'],
      ['Man', 'au_m', 'Only one loader is parked near Bay 9 right now. I’m pulling two electric belt carts over from Bay 4 as soon as the runway signal turns green.'],
      ['Woman', 'ca_f', 'Perfect. I’ll radio the customs inspector so his team drives straight to Bay 9 instead of waiting by the old bay.'],
    ], null, [
      ['Part 3 · Problem', 'Why was Cargo Flight 880 redirected to Bay 9?', ['A tow bar broke at its originally assigned bay', 'Heavy fog reduced visibility across the east apron', 'Custom inspectors requested a larger hangar space', 'Two electric belt carts ran out of battery power'], 0, 'ตอบ A tow bar broke at its originally assigned bay (คานลากเครื่องบินหักที่หลุมจอด 4 จึงต้องย้ายไปหลุมจอด 9)'],
      ['Part 3 · Detail', 'What equipment will the man move to Bay 9?', ['Two electric baggage belt carts', 'A replacement hydraulic tow truck', 'Portable passenger boarding stairs', 'Extra runway floodlight towers'], 0, 'ตอบ Two electric baggage belt carts (ผู้ชายจะย้ายรถสายพานลำเลียงไฟฟ้า 2 คันจากหลุมจอด 4 มาหลุมจอด 9)'],
      ['Part 3 · Action', 'Who will the woman contact by radio?', ['A customs inspection team', 'The incoming flight’s captain', 'An airport fuel truck driver', 'The terminal passenger lounge desk'], 0, 'ตอบ A customs inspection team (ผู้หญิงจะวิทยุแจ้งเจ้าหน้าที่ศุลกากรให้ตรงไปที่หลุมจอด 9)'],
    ]),

    p3(6, 'l6-p3-3', [
      ['Man', 'us_m2', 'Hannah, I just finished typing the city transit budget article, and the press desk is begging for copy before four.'],
      ['Woman', 'uk_f2', 'Hold on—did you verify those highway bridge repair numbers with the comptroller’s office? The draft spreadsheet we got yesterday looked preliminary.'],
      ['Man', 'us_m2', 'I left a voicemail this morning, though I haven’t heard back yet. Should I go ahead and submit it as is?'],
      ['Woman', 'uk_f2', 'Let’s not cut corners on a front-page figure. Walk down to City Hall’s press counter now while I ask layout to hold that bottom column for twenty minutes.'],
    ], null, [
      ['Part 3 · Topic', 'Where do the speakers most likely work?', ['At a newspaper publishing house', 'At a municipal bridge engineering firm', 'At an airport baggage dispatch center', 'At an architectural consulting studio'], 0, 'ตอบ At a newspaper publishing house (พูดถึงการส่งต้นฉบับบทความ หน้าหนึ่ง และฝ่ายจัดหน้า layout)'],
      ['Part 3 · Meaning', 'What does the woman mean when she says, "Let’s not cut corners on a front-page figure"?', ['They must confirm the budget numbers carefully before printing', 'They should trim two paragraphs to fit the column width', 'They need to remove photos from the front-page layout', 'They can publish yesterday’s draft without calling City Hall'], 0, 'ตอบ They must confirm the budget numbers carefully before printing (หมายความว่าไม่ควรลัดขั้นตอนหรือรีบส่งตัวเลขหน้าหนึ่งโดยไม่ตรวจสอบให้ชัวร์ก่อน)'],
      ['Part 3 · Action', 'What will the woman ask the layout department to do?', ['Reserve the lower page space for twenty extra minutes', 'Replace the bridge article with a sports photo', 'Move the deadline back until tomorrow morning', 'Print extra copies of yesterday’s financial spreadsheet'], 0, 'ตอบ Reserve the lower page space for twenty extra minutes (ผู้หญิงจะขอให้ฝ่ายจัดหน้ากันคอลัมน์ด้านล่างรอไว้ 20 นาที)'],
    ]),

    p3(6, 'l6-p3-4', [
      ['Woman1', 'us_f2', 'Excuse me, I’m waiting for the Zurich connection, and the gluten-free muffin tray at the SkyClub buffet is completely empty.'],
      ['Man', 'uk_m', 'I’m very sorry about that, ma’am! Let me check with our lounge kitchen supervisor right away. Mei, do we have sealed allergen-free pastries left in cold storage?'],
      ['Woman2', 'au_f', 'We actually sold through our morning delivery twenty minutes ago, though I have individual sealed quinoa oatmeal cups plus fresh berries I can warm up for her immediately.'],
      ['Woman1', 'us_f2', 'Warm oatmeal with berries sounds lovely—and could I grab a double espresso as well before boarding starts?'],
      ['Man', 'uk_m', 'Of course! I’ll bring the espresso right to your window armchair as soon as the oatmeal is ready.'],
    ], null, [
      ['Part 3 · Problem', 'Why does the traveler approach the lounge attendant?', ['A specific dietary food tray ran out at the buffet', 'Her boarding pass failed to scan at the lounge entrance', 'The airport espresso machine stopped working', 'No empty armchairs were available near the window'], 0, 'ตอบ A specific dietary food tray ran out at the buffet (ถาดมัฟฟินปลอดกลูเตนที่ไลน์บุฟเฟต์ในเลานจ์หมดเกลี้ยง)'],
      ['Part 3 · Detail', 'What substitute item does the kitchen supervisor offer?', ['Heated quinoa oatmeal cups with berries', 'A freshly baked batch of rye bagels', 'Complimentary meal vouchers for the main concourse', 'Prepackaged chocolate chip granola bars'], 0, 'ตอบ Heated quinoa oatmeal cups with berries (ผู้จัดการครัวเสนอถ้วยข้าวโอ๊ตคินัวอุ่นร้อนพร้อมเบอร์รีให้แทน)'],
      ['Part 3 · Action', 'What will the man deliver to the traveler’s seat?', ['A double espresso along with her breakfast', 'A blanket and luggage tag for her Zurich flight', 'A revised departure schedule printout', 'An allergen chart for the afternoon lunch menu'], 0, 'ตอบ A double espresso along with her breakfast (พนักงานจะนำดับเบิลเอสเปรสโซไปเสิร์ฟให้ถึงที่นั่งริมหน้าต่างพร้อมอาหาร)'],
    ]),

    p3(6, 'l6-p3-5', [
      ['Man', 'ca_m', 'Hi, this is Jordan at Bayside Medical Clinic. Our supply pallet arrived an hour ago, and all ten cartons of exam gloves are powdered latex instead of powder-free nitrile.'],
      ['Woman', 'us_f', 'Oh, I apologize for that mix-up, Jordan—let me pull up invoice 4092. Yes, you clearly ordered large blue nitrile gloves.'],
      ['Man', 'ca_m', 'Our allergy clinic starts at two o’clock, so we really cannot open latex boxes around sensitive patients.'],
      ['Woman', 'us_f', 'Our local van is only six blocks from you right now. I’ll instruct the driver to bring ten nitrile cartons by one-thirty and collect the wrong boxes at the same time.'],
    ], null, [
      ['Part 3 · Problem', 'Why is the clinic employee calling the supplier?', ['The wrong type of medical exam gloves was delivered', 'Ten boxes of syringes arrived with damaged seals', 'His order number 4092 never appeared at the loading bay', 'The supplier double-billed the clinic’s monthly account'], 0, 'ตอบ The wrong type of medical exam gloves was delivered (ร้านส่งถุงมือลาเท็กซ์มีแป้งมาผิดแบบ แทนที่จะเป็นไนไตรล์ไร้แป้ง)'],
      ['Part 3 · Detail', 'Why is the replacement urgent?', ['An afternoon allergy clinic opens at two o’clock', 'Health inspectors are touring Bayside Clinic at noon', 'Staff members are moving supply closets today', 'The clinic closes early on Friday afternoons'], 0, 'ตอบ An afternoon allergy clinic opens at two o’clock (คลินิกโรคภูมิแพ้ช่วงบ่ายเริ่มตอน 14:00 น. จึงใช้ถุงมือลาเท็กซ์ไม่ได้)'],
      ['Part 3 · Detail', 'How will the supplier resolve the error?', ['Dispatch a nearby delivery van with correct cartons by 1:30 P.M.', 'Issue a full store credit for next month’s medical shipment', 'Ship overnight replacement cartons via air courier tomorrow', 'Ask Jordan to pick up gloves at the warehouse six blocks away'], 0, 'ตอบ Dispatch a nearby delivery van with correct cartons by 1:30 P.M. (ให้รถตู้ส่งของที่อยู่ใกล้เคียงนำถุงมือไนไตรล์มาเปลี่ยนให้ภายใน 13:30 น.)'],
    ]),

    p3(6, 'l6-p3-6', [
      ['Woman', 'uk_f', 'Leo, Crestwood Hardware just canceled their half-page Sunday advertisement because their spring garden tools got stuck at customs.'],
      ['Man', 'us_m', 'Wait—that leaves a massive blank hole on page six of the City Life section! Do we have a standby advertiser ready?'],
      ['Woman', 'uk_f', 'None that fit a half-page horizontal layout. However, our cultural desk wrote an extra profile on the weekend Harbor Book Fair with three high-resolution author portraits.'],
      ['Man', 'us_m', 'Great save! Send me the text file and crop one vertical portrait into a banner so the column grid matches our Sunday print template.'],
    ], null, [
      ['Part 3 · Problem', 'Why did Crestwood Hardware cancel its advertisement?', ['Promoted seasonal merchandise was delayed in customs', 'The store decided to switch to radio advertising exclusively', 'Printed ad rates exceeded its quarterly marketing budget', 'Layout staff misplaced the store’s logo graphics'], 0, 'ตอบ Promoted seasonal merchandise was delayed in customs (สินค้าเครื่องมือจัดสวนฤดูใบไม้ผลิของร้านติดอยู่ที่ด่านศุลกากร)'],
      ['Part 3 · Proposal', 'What content will replace the canceled ad on page six?', ['A feature article about an upcoming local book fair', 'A discounted subscription coupon for Sunday readers', 'An extended city weather and tide forecast chart', 'Photos from last month’s municipal marathon'], 0, 'ตอบ A feature article about an upcoming local book fair (นำบทความแนะนำงาน Harbor Book Fair พร้อมรูปผู้เขียนมาลงแทน)'],
      ['Part 3 · Action', 'What does the man ask the woman to send him?', ['The article text file for formatting', 'The original hardware store invoice', 'Contact numbers for three local authors', 'Copies of last Sunday’s print template'], 0, 'ตอบ The article text file for formatting (ผู้ชายขอให้ผู้หญิงส่งไฟล์เนื้อหาบทความมาให้จัดวางหน้า)'],
    ]),

    p3(6, 'l6-p3-7', [
      ['Woman', 'ca_f', 'Marco, incoming Flight 209 just requested three wheelchair escorts at Gate 18, and our afternoon ramp crew is already stretched across Terminal B.'],
      ['Man', 'au_m', 'Let me check the tablet roster. Two passenger-assist staff finish escorting the Madrid arrival at Gate 12 in five minutes.'],
      ['Woman', 'ca_f', 'Can we have them take the express service corridor behind duty-free? That cuts four minutes off their walk and lets them use the staff elevator straight to customs.'],
      ['Man', 'au_m', 'Definitely—just remind them to tap their security badges twice at the green doors so the alarm doesn’t chime.'],
    ], null, [
      ['Part 3 · Topic', 'What are the speakers coordinating?', ['Wheelchair assistance for arriving airline passengers', 'Catering cart restocking on an international flight', 'Gate maintenance repairs along Terminal B', 'Lost luggage claims at the customs desk'], 0, 'ตอบ Wheelchair assistance for arriving airline passengers (ประสานงานเจ้าหน้าที่เข็นรถเข็นรับผู้โดยสารขาเข้า 3 รายที่ประตู 18)'],
      ['Part 3 · Detail', 'Where are two available staff members currently finishing a task?', ['At Gate 12 with an incoming Madrid flight', 'Inside the Terminal B duty-free stockroom', 'At the main terminal customs exit lane', 'Beside the ground crew locker room'], 0, 'ตอบ At Gate 12 with an incoming Madrid flight (เจ้าหน้าที่สองคนกำลังดูแลผู้โดยสารจากมาดริดเสร็จที่ประตู 12)'],
      ['Part 3 · Detail', 'What instruction does the man give regarding the service corridor?', ['Tap security badges twice at the green doors', 'Leave electric carts parked outside duty-free', 'Call customs supervisors before taking the elevator', 'Wear reflective ramp vests inside the corridor'], 0, 'ตอบ Tap security badges twice at the green doors (ให้แตะบัตรรักษาความปลอดภัยสองครั้งที่ประตูสีเขียวเพื่อไม่ให้สัญญาณดัง)'],
    ]),

    p3(6, 'l6-p3-8', [
      ['Man1', 'us_m', 'Looking at your digital bitewing X-ray, Mr. Tanaka, that sharp pain when you chew cold food comes from a tiny hairline crack along your lower left molar.'],
      ['Man2', 'ca_m', 'Oh, I was afraid it might need an extraction! Can it be saved?'],
      ['Woman', 'uk_f2', 'Yes—Dr. Ellis recommends fitting a protective ceramic crown before the crack deepens. I checked your chart, and we can scan your tooth digitally today without messy putty impressions.'],
      ['Man2', 'ca_m', 'What a relief! The only catch is I leave for a two-week trade conference in Osaka next Thursday.'],
      ['Man1', 'us_m', 'No problem—our in-house milling unit crafts ceramic crowns in forty-eight hours, so Nadia here can get you fitted comfortably on Tuesday afternoon.'],
    ], null, [
      ['Part 3 · Detail', 'What caused Mr. Tanaka’s tooth pain?', ['A small crack in a lower molar', 'An infection beneath an old crown', 'A cavity between two front teeth', 'A loose dental implant screw'], 0, 'ตอบ A small crack in a lower molar (ฟิล์มเอกซเรย์พบรอยร้าวเล็กๆ ที่ฟันกรามล่างซ้าย)'],
      ['Part 3 · Detail', 'Why does Mr. Tanaka mention Osaka?', ['He is departing on a business trip next Thursday', 'He had previous dental work performed there', 'He wants his digital X-rays emailed to an overseas clinic', 'He plans to postpone treatment for three months'], 0, 'ตอบ He is departing on a business trip next Thursday (แจ้งว่าต้องเดินทางไปประชุมการค้าที่โอซากาพฤหัสฯ หน้า)'],
      ['Part 3 · Detail', 'How is the clinic able to finish the crown before Mr. Tanaka’s trip?', ['An on-site machine produces crowns within two days', 'A nearby dental lab offers weekend rush delivery', 'Dr. Ellis keeps prefabricated ceramic caps in stock', 'Another patient canceled Tuesday morning’s surgery'], 0, 'ตอบ An on-site machine produces crowns within two days (คลินิกมีเครื่องกลึงเซรามิกเอง ใช้เวลาทำครอบฟันเพียง 48 ชั่วโมง)'],
    ]),

    p3(6, 'l6-p3-9', [
      ['Woman', 'au_f', 'Tomas, we received eleven wet-paper complaints from the Oakwood newsstand route after yesterday’s rainstorm.'],
      ['Man', 'us_m2', 'Yeah, the corner awning at Oakwood Station leaks right where we drop bundles at four-thirty A.M.'],
      ['Woman', 'au_f', 'Starting tonight, pack every bundle for stops four through nine inside double waterproof sleeves, and place a raised plastic pallet under the Oakwood stack.'],
      ['Man', 'us_m2', 'Got it. Also, could we move that Oakwood drop fifteen minutes later so the kiosk attendant unlocks the dry side door before I unload?'],
    ], null, [
      ['Part 3 · Problem', 'What issue prompted customer complaints along the Oakwood route?', ['Morning newspapers became soaked during delivery', 'Bundles were dropped off after commuters departed', 'Sunday insert flyers were missing from kiosk stacks', 'Delivery vans blocked the station’s commuter lane'], 0, 'ตอบ Morning newspapers became soaked during delivery (มีคำร้องเรียนว่าหนังสือพิมพ์เปียกน้ำฝนในเส้นทาง Oakwood)'],
      ['Part 3 · Detail', 'What does the woman instruct the driver to use starting tonight?', ['Double waterproof sleeves and a plastic pallet', 'Water-resistant cardboard shipping crates', 'Canvas tarps borrowed from the main depot', 'Extra twine straps around every newsstand bundle'], 0, 'ตอบ Double waterproof sleeves and a plastic pallet (สั่งให้ใช้ซองกันน้ำสองชั้นและวางบนพาเลตพลาสติกยกพื้น)'],
      ['Part 3 · Suggestion', 'What adjustment does the man propose?', ['Arriving fifteen minutes later once a side door is unlocked', 'Delivering papers exclusively inside plastic coin boxes', 'Combining stops four through nine onto one truck', 'Switching the Oakwood stop to an afternoon route'], 0, 'ตอบ Arriving fifteen minutes later once a side door is unlocked (เสนอให้ไปส่งช้าลง 15 นาทีเพื่อให้พนักงานร้านเปิดประตูด้านข้างที่แห้งก่อน)'],
    ]),

    p3(6, 'l6-p3-10', [
      ['Man', 'uk_m', 'Ms. Brooks, several business flyers in the quiet work pods complained that video calls drop near the back glass partition.'],
      ['Woman', 'us_f2', 'Thanks for flagging that, Arthur. Our signal map shows a steel structural column blocks the main lobby router back there.'],
      ['Man', 'uk_m', 'Can IT mount an extra ceiling access point directly above Pods Five and Six?'],
      ['Woman', 'us_f2', 'Yes, technicians are scheduled between midnight and four A.M. tonight when the lounge closes, so noisy drilling won’t disturb anyone.'],
    ], null, [
      ['Part 3 · Problem', 'What problem have lounge guests experienced in the quiet work pods?', ['Weak wireless internet signal during video calls', 'Loud noise drifting through the back glass partition', 'Insufficient electrical outlets under desk dividers', 'Glare from overhead recessed lighting fixtures'], 0, 'ตอบ Weak wireless internet signal during video calls (ผู้โดยสารในบูธทำงานร้องเรียนว่าสัญญาณ Wi-Fi หลุดเวลาประชุมวิดีโอคอล)'],
      ['Part 3 · Detail', 'According to the woman, what causes the connectivity gap?', ['A metal support column blocks the main wireless signal', 'Too many guests stream movies at the bar counter', 'Old Ethernet cables inside Pod Five need replacing', 'Airport security radar interferes near window glass'], 0, 'ตอบ A metal support column blocks the main wireless signal (เสาเหล็กโครงสร้างบังสัญญาณเราเตอร์หลักของโถง)'],
      ['Part 3 · Detail', 'When will technicians install the new access point?', ['Overnight after the passenger lounge closes', 'Early tomorrow morning before the first flight', 'During this afternoon’s low-traffic window', 'Next Sunday while floor carpets are cleaned'], 0, 'ตอบ Overnight after the passenger lounge closes (ช่างจะเข้ามาติดตั้งช่วงหลังเที่ยงคืนถึงตีสี่ตอนเลานจ์ปิดให้บริการแล้ว)'],
    ]),

    p3(6, 'l6-p3-11', [
      ['Woman', 'ca_f', 'Liam, Dr. Patel needs a room set up for a nervous pediatric patient at two o’clock—one equipped with both a nitrous unit and a ceiling entertainment screen.'],
      ['Man', 'us_m', 'Wait, let me glance at today’s clinic chart. Room 1 and Room 3 both have those two items listed, right?'],
      ['Woman', 'ca_f', 'Yes, though note that Room 3’s digital X-ray sensor just went out for manufacturer calibration this morning, and Dr. Patel still needs X-rays for this checkup.'],
      ['Man', 'us_m', 'Good catch! Let’s assign her to the other room with the screen and nitrous unit, and I’ll wipe down the chair right away.'],
    ], doc('Schedule', 'Harborview Dental Clinic — Treatment Rooms', [['Date', 'Wednesday, Oct 14']], [
      tbl(['Room', 'Special Equipment', 'X-Ray Status', 'Morning Lead'], [
        ['Room 1', 'Nitrous unit, ceiling screen', 'Operational', 'Open'],
        ['Room 2', 'Intraoral camera, curing light', 'Operational', 'Dr. Kim'],
        ['Room 3', 'Nitrous unit, ceiling screen', 'Operational', 'Dr. Ortiz'],
        ['Room 4', 'Surgical suction, laser tool', 'Offline', 'Dr. Patel'],
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which treatment room will the speakers prepare for Dr. Patel’s two o’clock patient?', ['Room 1', 'Room 2', 'Room 3', 'Room 4'], 0, 'ตอบ Room 1 (ตารางมีไนตรัสออกไซด์กับจอเพดานแค่ Room 1 และ Room 3 แต่ในเสียงบอกเซนเซอร์เอกซเรย์ของ Room 3 ส่งซ่อมปรับเทียบ จึงต้องเลือก Room 1)'],
      ['Part 3 · Detail', 'Why does the woman rule out Room 3?', ['Its digital X-ray sensor is away for calibration', 'Dr. Ortiz booked it for an afternoon procedure', 'The ceiling entertainment screen failed to power on', 'A nervous patient requested a larger corner room'], 0, 'ตอบ Its digital X-ray sensor is away for calibration (เซนเซอร์เอกซเรย์ดิจิทัลของห้อง 3 ถูกส่งไปปรับเทียบตั้งแต่วันนี้ช่วงเช้า)'],
      ['Part 3 · Action', 'What will the man do immediately?', ['Clean and sanitize the dental chair in the selected room', 'Reschedule Dr. Patel’s two o’clock checkup to tomorrow', 'Call the calibration technician for an X-ray update', 'Move Dr. Kim’s curing light into Room 4'], 0, 'ตอบ Clean and sanitize the dental chair in the selected room (ผู้ชายบอกว่าจะรีบไปเช็ดทำความสะอาดเก้าอี้ทำฟันในห้องนั้นทันที)'],
    ]),

    p3(6, 'l6-p3-12', [
      ['Woman', 'uk_f', 'Sam, check your dispatch board—Flight 742 from Zurich had to be reassigned because a fuel pump truck broke down at its printed gate.'],
      ['Man', 'au_m', 'Where should I send the baggage crew instead? Our tug drivers are already waiting along the north apron.'],
      ['Woman', 'uk_f', 'Move everyone to the wide-body gate listed right underneath it on the schedule—the one marked with dual jet bridges.'],
      ['Man', 'au_m', 'Got it, I’ll redirect the tractors there now and tell the wheelchair lead to meet passengers at that new jet bridge door.'],
    ], doc('Schedule', 'Concourse B — Ground Handling Board', [['Shift', 'Afternoon Arrivals']], [
      tbl(['Flight', 'Origin', 'Printed Gate', 'Stand Notes'], [
        ['FL 510', 'Toronto', 'Gate B4', 'Standard narrow-body'],
        ['FL 742', 'Zurich', 'Gate B6', 'Single jet bridge'],
        ['FL 815', 'Frankfurt', 'Gate B8', 'Wide-body, dual jet bridges'],
        ['FL 902', 'Seoul', 'Gate B10', 'Remote tarmac shuttle'],
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. To which gate will Flight 742 be moved?', ['Gate B8', 'Gate B4', 'Gate B6', 'Gate B10'], 0, 'ตอบ Gate B8 (ตารางแสดง Flight 742 เดิมอยู่ Gate B6 และผู้หญิงสั่งให้ย้ายไปเกตเครื่องบินลำตัวกว้างที่มีสะพานเทียบคู่ซึ่งอยู่บรรทัดถัดลงมาคือ Gate B8)'],
      ['Part 3 · Problem', 'Why could Flight 742 not use its originally listed gate?', ['A fuel pump vehicle malfunctioned at that stand', 'The Frankfurt flight had not yet pushed back', 'A single jet bridge could not fit wide-body doors', 'Tug drivers blocked the north apron taxiway'], 0, 'ตอบ A fuel pump vehicle malfunctioned at that stand (รถปั๊มน้ำมันเชื้อเพลิงเสียอยู่ที่หลุมจอดเดิมของไฟลต์ 742)'],
      ['Part 3 · Action', 'Who else will the man notify about the gate change?', ['The wheelchair escort team leader', 'The Zurich airport operations desk', 'An in-flight catering truck driver', 'Maintenance staff repairing the fuel truck'], 0, 'ตอบ The wheelchair escort team leader (ผู้ชายจะแจ้งหัวหน้าทีมรถเข็นผู้โดยสารให้ไปรับที่ประตูสะพานเทียบใหม่ด้วย)'],
    ]),

    p3(6, 'l6-p3-13', [
      ['Woman', 'us_f2', 'Thanks for coming in, Mr. Novak. You initially booked our Quarter Page Color ad for your bakery’s grand opening, right?'],
      ['Man', 'ca_m', 'Yes, though now we want more photo room—the next size up on your rate card, as long as it stays under twelve hundred dollars.'],
      ['Woman', 'us_f2', 'Let’s check the sheet carefully: the early-bird column actually expired last Friday, so today’s standard rate applies. Still, the Half Page Color size comes in just under your cap!'],
      ['Man', 'ca_m', 'Fantastic—let’s upgrade to that size, and I’ll email our high-resolution pastry photos before noon tomorrow.'],
    ], doc('Rate Card', 'The Daily Chronicle — Weekend Edition Ads', [['Currency', 'USD']], [
      tbl(['Ad Size', 'Standard Rate', 'Early-Bird Rate', 'Artwork Due'], [
        ['Eighth Page Color', '$420', '$360', 'Thursday 5 P.M.'],
        ['Quarter Page Color', '$690', '$590', 'Thursday 5 P.M.'],
        ['Half Page Color', '$1,150', '$980', 'Wednesday 3 P.M.'],
        ['Full Page Color', '$1,950', '$1,680', 'Tuesday 12 P.M.'],
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. How much will Mr. Novak pay for the upgraded advertisement?', ['$1,150', '$980', '$690', '$1,680'], 0, 'ตอบ $1,150 (ลูกค้าอัปเกรดเป็นขนาดถัดไปจาก Quarter Page คือ Half Page Color ซึ่งแม้โปรล่วงหน้าหมดเขตแล้ววันศุกร์ แต่เรตมาตรฐาน $1,150 ก็ยังต่ำกว่างบ $1,200)'],
      ['Part 3 · Detail', 'Why does the early-bird rate no longer apply?', ['The promotional deadline ended last Friday', 'Upgraded ads cannot use discounted seasonal coupons', 'Grand opening announcements require rush placement', 'Mr. Novak missed the Tuesday artwork deadline'], 0, 'ตอบ The promotional deadline ended last Friday (เรตราคาจองล่วงหน้าหมดเขตไปตั้งแต่วันศุกร์ที่ผ่านมาแล้ว)'],
      ['Part 3 · Detail', 'What does the man plan to send before noon tomorrow?', ['High-resolution photographs of baked goods', 'A signed check for the newspaper deposit', 'Revised text for the grand opening coupon', 'Proofs approved by his business partner'], 0, 'ตอบ High-resolution photographs of baked goods (ผู้ชายจะส่งภาพถ่ายขนมอบความละเอียดสูงทางอีเมลก่อนเที่ยงพรุ่งนี้)'],
    ]),

    // Set 6 Part 4 (10 Talks: 1-7 no doc, 8-10 with doc; 45-85 words each)
    p4(6, 'l6-p4-1', 'the following recorded message', 'us_f',
      'Thank you for calling Oakridge Family Dental. Our clinic is open Monday through Friday from eight A.M. to five-thirty P.M., plus alternate Saturdays until one. If you are calling to reschedule a cleaning, please use our patient portal online rather than leaving a voicemail, as morning reception lines are busy. For sudden tooth pain after hours, press four to reach Dr. Alvarez’s on-call line. Please bring an updated insurance card to your next checkup.',
      null, [
      ['Part 4 · Purpose', 'What is the main purpose of the recorded message?', ['To provide clinic hours and contact instructions to patients', 'To announce the hiring of a new dental hygienist', 'To confirm Friday’s surgical schedule with staff', 'To explain a new fee for missed appointments'], 0, 'ตอบ To provide clinic hours and contact instructions to patients (แจ้งเวลาทำการ วิธีเลื่อนนัดผ่านพอร์ทัล และเบอร์ติดต่อฉุกเฉินนอกเวลา)'],
      ['Part 4 · Detail', 'How should callers reschedule a cleaning?', ['By logging into the online patient portal', 'By leaving their phone number after the beep', 'By pressing four on their phone keypad', 'By visiting the reception desk on Saturday'], 0, 'ตอบ By logging into the online patient portal (แนะนำให้ใช้พอร์ทัลคนไข้ทางออนไลน์เพื่อเลื่อนนัดทำความสะอาดฟัน)'],
      ['Part 4 · Detail', 'What are patients reminded to bring to their next appointment?', ['A current insurance card', 'Previous dental X-ray films', 'A list of current medications', 'A photo identification badge'], 0, 'ตอบ A current insurance card (เตือนให้นำบัตรประกันที่อัปเดตล่าสุดมาในนัดครั้งถัดไป)'],
    ]),

    p4(6, 'l6-p4-2', 'the following announcement', 'uk_m',
      'Attention passengers waiting at Gate 11 for Flight 518 to Dublin. Because today’s flight is completely full, overhead bin space is extremely limited. Gate agents are happy to tag larger wheeled carry-on bags now and load them directly into the cargo hold at no charge. Checked items will appear at your destination baggage carousel as usual. Boarding begins in ten minutes starting with Priority Group One; please have your passport open to the photo page.',
      null, [
      ['Part 4 · Location', 'Where is this announcement most likely being made?', ['At an airport departure gate', 'Inside a passenger lounge shower suite', 'On board an arriving commuter train', 'At a downtown hotel check-in desk'], 0, 'ตอบ At an airport departure gate (ประกาศเรียกขึ้นเครื่อง Flight 518 ที่ Gate 11)'],
      ['Part 4 · Detail', 'What free service is offered to passengers with larger carry-on bags?', ['Checking wheeled bags into the cargo hold at the gate', 'Upgrading seats to Priority Group One', 'Storing suitcases inside the VIP terminal lounge', 'Wrapping luggage in waterproof protective film'], 0, 'ตอบ Checking wheeled bags into the cargo hold at the gate (ให้บริการติดแท็กโหลดกระเป๋าล้อลากใบใหญ่ลงห้องสัมภาระฟรีที่หน้าเกต)'],
      ['Part 4 · Action', 'What should travelers prepare before boarding starts?', ['Open their passports to the photograph page', 'Remove laptop batteries from checked suitcases', 'Weigh carry-on bags on the scale beside Gate 11', 'Confirm Dublin hotel shuttles with gate agents'], 0, 'ตอบ Open their passports to the photograph page (ให้เปิดหนังสือเดินทางค้างไว้ที่หน้าแสดงรูปถ่ายก่อนเริ่มเรียกขึ้นเครื่อง)'],
    ]),

    p4(6, 'l6-p4-3', 'the following excerpt from a meeting', 'au_f',
      'Before we wrap up today’s editorial stand-up, notice one major change to our publishing workflow starting Monday. Because our morning audio podcast now links directly inside every digital feature, culture and city reporters must upload finalized headlines and three-sentence summaries by four P.M. instead of five. That extra hour gives our podcast producer time to record matching show notes. Copy editors will continue proofing print columns on the regular evening schedule.',
      null, [
      ['Part 4 · Audience', 'Who is most likely listening to this talk?', ['Newspaper reporters and editors', 'Airport ground crew supervisors', 'Dental clinic receptionists', 'Commercial print shop mechanics'], 0, 'ตอบ Newspaper reporters and editors (พูดถึงการประชุมกองบรรณาธิการ ผู้สื่อข่าว และฝ่ายตรวจอักษร)'],
      ['Part 4 · Detail', 'Why is the deadline for digital summaries moving earlier?', ['To allow time for recording matching podcast show notes', 'To finish printing weekend editions before rush hour', 'To accommodate shorter evening staffing shifts', 'To sync advertisements with national wire feeds'], 0, 'ตอบ To allow time for recording matching podcast show notes (เพื่อให้โปรดิวเซอร์พอดแคสต์มีเวลาอัดโน้ตประกอบรายการให้สอดคล้องกัน)'],
      ['Part 4 · Detail', 'What remains unchanged under the new schedule?', ['Evening proofreading for printed newspaper columns', 'Weekly advertising rate card deadlines', 'Podcast host recording times on weekends', 'Print bundle drop-offs at downtown newsstands'], 0, 'ตอบ Evening proofreading for printed newspaper columns (ฝ่ายพิสูจน์อักษรคอลัมน์สิ่งพิมพ์ยังคงตรวจงานตามตารางเวลาช่วงเย็นตามเดิม)'],
    ]),

    p4(6, 'l6-p4-4', 'the following announcement', 'ca_m',
      'Good morning, Horizon Lounge guests. Please note that technicians are servicing our main espresso bar until ten-thirty A.M. to install a new steam boiler. While that counter is closed, fresh drip coffee, hot teas, and our complete hot breakfast buffet remain available upstairs on the Mezzanine Terrace, which you can reach via the glass staircase behind Reception. Our quiet work booths and shower rooms downstairs are operating normally without interruption.',
      null, [
      ['Part 4 · Detail', 'Why is the main espresso bar temporarily unavailable?', ['Technicians are installing a replacement steam boiler', 'Morning coffee bean deliveries arrived late', 'The lounge bar area is being repainted today', 'Breakfast staff are attending a safety briefing'], 0, 'ตอบ Technicians are installing a replacement steam boiler (ช่างกำลังซ่อมบำรุงและติดตั้งหม้อต้มไอน้ำใหม่จนถึง 10:30 น.)'],
      ['Part 4 · Detail', 'Where can guests currently find hot breakfast items?', ['On the Mezzanine Terrace upstairs', 'At a food cart outside Reception', 'Beside the downstairs shower rooms', 'Inside the quiet work booth corridor'], 0, 'ตอบ On the Mezzanine Terrace upstairs (บริการอาหารเช้าและกาแฟดริปย้ายไปชั้นลอย Mezzanine Terrace ด้านบน)'],
      ['Part 4 · Detail', 'Which lounge amenities are operating as usual?', ['Quiet work booths and shower rooms', 'The espresso bar and luggage lockers', 'The baggage check desk and massage chairs', 'The ground-floor buffet dining tables'], 0, 'ตอบ Quiet work booths and shower rooms (บูธทำงานเงียบและห้องอาบน้ำชั้นล่างเปิดให้บริการตามปกติ)'],
    ]),

    p4(6, 'l6-p4-5', 'the following voicemail message', 'us_m2',
      'Hi Nurse Carla, this is Devon from Metro Medical Couriers calling at eleven-forty. Our refrigerated van carrying your clinic’s flu vaccine shipment got stuck behind a multi-lane highway closure near Oak Avenue. Instead of arriving at noon as scheduled, we expect to pull up to your side loading bay at one-fifteen. Please ensure someone from the clinic signs our temperature-log tablet immediately upon arrival so those vials move straight into cold storage.',
      null, [
      ['Part 4 · Problem', 'Why will the courier arrive later than expected?', ['A highway closure delayed the delivery van', 'The vaccine vials needed repackaging in ice', 'The driver misplaced the clinic’s delivery address', 'Heavy rain flooded the clinic’s side loading bay'], 0, 'ตอบ A highway closure delayed the delivery van (รถตู้แช่เย็นติดปัญหาการปิดถนนทางหลวงใกล้ถนน Oak Avenue)'],
      ['Part 4 · Detail', 'When does the speaker expect to reach the clinic?', ['At 1:15 P.M.', 'At 11:40 A.M.', 'At 12:00 P.M.', 'At 2:00 P.M.'], 0, 'ตอบ At 1:15 P.M. (ผู้พูดคาดว่าจะไปถึงท่าขนส่งด้านข้างเวลา 13:15 น.)'],
      ['Part 4 · Action', 'What does the speaker ask clinic staff to do when the van arrives?', ['Sign a digital temperature log right away', 'Unload empty medical coolers onto the truck', 'Verify insurance codes on each vaccine carton', 'Call Metro Medical Couriers to confirm payment'], 0, 'ตอบ Sign a digital temperature log right away (ขอให้เจ้าหน้าที่คลินิกเซ็นรับรองบนแท็บเล็ตบันทึกอุณหภูมิทันทีที่ไปถึง)'],
    ]),

    p4(6, 'l6-p4-6', 'the following radio broadcast', 'uk_f2',
      'This weekend in The Metropolitan Herald, don’t miss our four-part investigative series exploring how automated shipping cranes are transforming coastal ports across the region. Our maritime reporters spent six months interviewing dockworkers, customs officers, and supply-chain analysts to bring you the inside story. Want unlimited digital access on your phone and tablet? Visit heraldnews.com before Sunday midnight and enter code PORT50 to save fifty percent on an annual online subscription.',
      null, [
      ['Part 4 · Topic', 'What is the featured investigative series mainly about?', ['Automation changes at regional coastal ports', 'Safety rules for airport ground handling crews', 'New ferry routes linking island suburbs', 'Historical architecture along the city waterfront'], 0, 'ตอบ Automation changes at regional coastal ports (ซีรีส์ข่าวสืบสวนเกี่ยวกับปั้นจั่นขนส่งสินค้าอัตโนมัติที่กำลังเปลี่ยนโฉมท่าเรือชายฝั่ง)'],
      ['Part 4 · Detail', 'How long did reporters spend interviewing sources for the series?', ['Six months', 'Four weeks', 'Two years', 'Ten days'], 0, 'ตอบ Six months (ผู้สื่อข่าวใช้เวลาสัมภาษณ์แหล่งข่าวนานหกเดือน)'],
      ['Part 4 · Detail', 'What should listeners do to receive a fifty-percent subscription discount?', ['Enter a promotional code on the newspaper’s website by Sunday', 'Call the newspaper’s circulation hotline before noon', 'Purchase a weekend print bundle at a local newsstand', 'Register for the audio podcast newsletter at Port Hall'], 0, 'ตอบ Enter a promotional code on the newspaper’s website by Sunday (เข้าเว็บ heraldnews.com และใส่รหัส PORT50 ก่อนเที่ยงคืนวันอาทิตย์)'],
    ]),

    p4(6, 'l6-p4-7', 'the following instructions', 'au_m',
      'Quick safety reminder for all ground handlers working this afternoon’s turnaround shifts. High coastal gusts up to thirty-five knots are forecast through dusk. Before attaching ground power cables or positioning passenger stairs at any narrow-body jet, always lock double rubber chocks tightly against both nose wheels. Remember—an ounce of prevention goes a long way out on an open apron. Also inspect cargo net latches twice before pushing loaded dollies across taxiway lines.',
      null, [
      ['Part 4 · Problem', 'What weather condition is expected during afternoon shifts?', ['Strong coastal wind gusts', 'Sudden freezing rain on the apron', 'Dense fog reducing ramp visibility', 'Heavy afternoon lightning storms'], 0, 'ตอบ Strong coastal wind gusts (พยากรณ์อากาศระบุว่าจะมีลมกระโชกแรงริมชายฝั่งถึง 35 นอตจนถึงค่ำ)'],
      ['Part 4 · Detail', 'What must workers secure before connecting ground power cables?', ['Rubber chocks against the aircraft’s nose wheels', 'Metal chains along the cargo loading belt', 'Reflective cones around airport fuel trucks', 'Safety ropes on the passenger boarding stairs'], 0, 'ตอบ Rubber chocks against the aircraft’s nose wheels (ต้องล็อกหมอนรองล้อยางคู่หน้าของเครื่องบินให้แน่นก่อนต่อสายไฟภาคพื้น)'],
      ['Part 4 · Meaning', 'What does the speaker mean when he says, "an ounce of prevention goes a long way"?', ['Taking simple safety precautions early prevents serious accidents', 'Lighter cargo dollies travel faster across open taxiways', 'Checking weather forecasts saves money on aircraft fuel', 'Morning shifts require fewer workers than afternoon shifts'], 0, 'ตอบ Taking simple safety precautions early prevents serious accidents (หมายความว่าการป้องกันไว้ก่อนด้วยขั้นตอนง่ายๆ ช่วยลดอุบัติเหตุร้ายแรงได้มาก)'],
    ]),

    p4(6, 'l6-p4-8', 'the following telephone message', 'ca_f',
      'Hello Mr. Foster, this is Maya calling from Northside Medical Clinic regarding your inquiry about Dr. Chen’s sports injury follow-up. Just a heads-up that our consultation fees increased by fifteen dollars across all specialists on Monday, though our reception brochure hasn’t been reprinted yet. We do have an opening on Saturday morning with Dr. Chen—could you call back before four to confirm that slot?',
      doc('Fee Schedule', 'Northside Medical Clinic — Specialist Consultations', [['Notice', 'Printed Brochure Rate']], [
        tbl(['Specialist', 'Consultation Type', 'Listed Fee', 'Clinic Hours'], [
          ['Dr. Alvarez', 'General Checkup', '$95', 'Mon–Fri 8–4'],
          ['Dr. Chen', 'Sports Injury Follow-Up', '$110', 'Wed & Sat 9–1'],
          ['Dr. Patel', 'Pediatric Allergy', '$125', 'Tue–Thu 10–5'],
          ['Dr. Kim', 'Dermatology Screen', '$140', 'Mon & Fri 9–3'],
        ]),
      ]), [
      ['Part 4 · Graphic', 'Look at the graphic. How much will Mr. Foster actually pay for his consultation with Dr. Chen?', ['$125', '$110', '$95', '$140'], 0, 'ตอบ $125 (ในโบรชัวร์ระบุค่าปรึกษาของ Dr. Chen ไว้ $110 แต่ผู้พูดแจ้งว่าตั้งแต่วันจันทร์ปรับขึ้นอีก $15 ทุกรายการ จึงเป็น $125)'],
      ['Part 4 · Detail', 'When is Dr. Chen’s available appointment?', ['Saturday morning', 'Monday afternoon', 'Wednesday evening', 'Friday morning'], 0, 'ตอบ Saturday morning (แจ้งว่ามีคิวว่างกับคุณหมอ Chen ในช่วงเช้าวันเสาร์)'],
      ['Part 4 · Action', 'What is Mr. Foster asked to do before four o’clock?', ['Call the clinic back to confirm his appointment', 'Bring an updated insurance card to Reception', 'Download a corrected fee chart from the website', 'Submit his allergy history through the portal'], 0, 'ตอบ Call the clinic back to confirm his appointment (ขอให้โทรกลับมาก่อนสี่โมงเย็นเพื่อยืนยันคิวดังกล่าว)'],
    ]),

    p4(6, 'l6-p4-9', 'the following excerpt from a meeting', 'us_m',
      'Let’s review yesterday’s ground fleet inspection sheet before releasing afternoon vehicles. The first two categories passed with zero issues, and our mechanics signed off on them immediately. Unfortunately, three units in the third category failed hydraulic pressure tests, so we are pulling those vehicles into Maintenance Bay 2 before noon. Everything under the fourth category remains parked until Friday’s scheduled parts shipment arrives.',
      doc('Inspection Log', 'Metro Airport — Ground Fleet Audit', [['Prepared By', 'Ramp Safety Team']], [
        tbl(['Category', 'Equipment Type', 'Units Tested', 'Garage Location'], [
          ['1. Baggage Tugs', 'Electric tractors', '12', 'North Apron'],
          ['2. Cabin Stairs', 'Mobile passenger stairs', '6', 'Concourse A'],
          ['3. Belt Loaders', 'Hydraulic conveyor trucks', '9', 'Maintenance Bay 2'],
          ['4. De-Icing Rigs', 'Glycol sprayer trucks', '4', 'South Hangar'],
        ]),
      ]), [
      ['Part 4 · Graphic', 'Look at the graphic. Which equipment type had three units fail hydraulic pressure tests?', ['Belt Loaders', 'Baggage Tugs', 'Cabin Stairs', 'De-Icing Rigs'], 0, 'ตอบ Belt Loaders (ผู้พูดระบุว่าหมวดที่ 1 และ 2 ผ่านหมด ส่วนหมวดที่ 3 มี 3 คันไม่ผ่านการทดสอบแรงดันไฮดรอลิก ซึ่งในตารางหมวด 3 คือ Belt Loaders)'],
      ['Part 4 · Detail', 'What happened with the first two vehicle categories?', ['Mechanics approved them without finding problems', 'Technicians moved them to the South Hangar', 'Spare parts were ordered for both fleets', 'Afternoon drivers requested hydraulic checks'], 0, 'ตอบ Mechanics approved them without finding problems (สองหมวดแรกผ่านการตรวจโดยไม่มีปัญหาและช่างเซ็นรับรองทันที)'],
      ['Part 4 · Detail', 'Why are De-Icing Rigs staying parked until Friday?', ['Replacement parts have not yet been delivered', 'Runway temperatures remain warm all week', 'Safety inspectors have not visited the South Hangar', 'Drivers are completing electric tractor training'], 0, 'ตอบ Replacement parts have not yet been delivered (หมวดที่ 4 ต้องรอชุดอะไหล่ที่กำหนดส่งมาถึงในวันศุกร์)'],
    ]),

    p4(6, 'l6-p4-10', 'the following announcement', 'uk_f',
      'Attention night-shift newspaper drivers loading up now. Because road crews closed the Eastbridge railway crossing for emergency track repairs until five A.M., trucks normally carrying bundles for the Coastal Route must skip their usual hub. Instead, drop all Coastal Route pallets at the hub operating the two-thirty A.M. departure window so our backup vans can take the highway bypass. Please scan every pallet tag twice before pulling out.',
      doc('Dispatch Sheet', 'Metropolitan Press — Distribution Hubs', [['Effective', 'Tonight Only']], [
        tbl(['Hub Name', 'Primary Route', 'Departure Window', 'Dock Bay'], [
          ['Harbor Hub', 'Coastal Route', '1:45 A.M.', 'Bay 3'],
          ['Oakridge Hub', 'Mountain Route', '2:00 A.M.', 'Bay 5'],
          ['Midtown Hub', 'Suburban Loop', '2:30 A.M.', 'Bay 7'],
          ['Airport Hub', 'Express Kiosks', '3:15 A.M.', 'Bay 9'],
        ]),
      ]), [
      ['Part 4 · Graphic', 'Look at the graphic. At which hub should drivers drop Coastal Route bundles tonight?', ['Midtown Hub', 'Harbor Hub', 'Oakridge Hub', 'Airport Hub'], 0, 'ตอบ Midtown Hub (ผู้พูดสั่งให้นำหนังสือพิมพ์สาย Coastal Route ไปส่งที่ฮับที่มีรอบออกเวลา 02:30 น. แทน ซึ่งในตารางคือ Midtown Hub)'],
      ['Part 4 · Problem', 'What forced the temporary reroute tonight?', ['Emergency track repairs closed a railway crossing', 'Harbor Hub ran out of waterproof plastic sleeves', 'Backup vans broke down along the Mountain Route', 'Heavy fog delayed bundles leaving the main press'], 0, 'ตอบ Emergency track repairs closed a railway crossing (จุดตัดทางรถไฟ Eastbridge ปิดซ่อมฉุกเฉินจนถึงตีห้า)'],
      ['Part 4 · Action', 'What are drivers instructed to do before leaving the loading dock?', ['Scan each pallet barcode tag twice', 'Check tire pressure on backup vans', 'Pack extra copies into Harbor Hub trucks', 'Wait until two-thirty A.M. to start engines'], 0, 'ตอบ Scan each pallet barcode tag twice (ให้สแกนป้ายบาร์โค้ดบนพาเลตทุกอันสองครั้งก่อนขับรถออก)'],
    ]),

    // ==================== SET 7 ====================
    p1(7, 'l7-p1-1', 'ca_f', [
      'Students are seated around a long wooden table with open laptops.',
      'A librarian is pushing a wheeled book cart between tall shelves.',
      'Heavy hardcover encyclopedias are piled beside a photocopier.',
      'People are standing in line at a university cafeteria counter.',
    ], 0, 'ตอบ Students are seated around a long wooden table with open laptops. (นักศึกษานั่งรอบโต๊ะไม้ตัวยาวพร้อมเปิดโน้ตบุ๊กทำงาน)'),
    p1(7, 'l7-p1-2', 'us_m', [
      'Workers are painting tall white walls inside an empty gallery.',
      'Museum visitors are looking up at a hanging model of planets.',
      'Tourists are taking photographs outside a stone museum entrance.',
      'Display cases of mineral rocks are covered with drop cloths.',
    ], 1, 'ตอบ Museum visitors are looking up at a hanging model of planets. (ผู้เข้าชมพิพิธภัณฑ์กำลังแหงนหน้ามองแบบจำลองดาวเคราะห์ที่แขวนอยู่กลางโถง)'),
    p1(7, 'l7-p1-3', 'uk_f', [
      'A technician is wiping the glass surface of a solar panel.',
      'Electricians are unrolling spools of copper cable across grass.',
      'Two engineers are climbing a tall metal wind turbine ladder.',
      'Roof tiles are being stacked neatly beside a glass skylight.',
    ], 0, 'ตอบ A technician is wiping the glass surface of a solar panel. (ช่างเทคนิคกำลังเช็ดทำความสะอาดหน้ากระจกของแผงโซลาร์เซลล์)'),
    p1(7, 'l7-p1-4', 'au_m', [
      'Cyclists are riding across a paved campus plaza.',
      'Bicycles are parked side by side in metal racks beside a brick hall.',
      'A maintenance worker is repairing a broken bicycle chain.',
      'Students are locking backpacks inside outdoor metal lockers.',
    ], 1, 'ตอบ Bicycles are parked side by side in metal racks beside a brick hall. (รถจักรยานจอดเรียงรายอยู่ในราวเหล็กข้างอาคารอิฐของมหาวิทยาลัย)'),
    p1(7, 'l7-p1-5', 'us_f2', [
      'Lab researchers are inspecting a turbine blade inside a test chamber.',
      'Engineers are pouring liquids into tall graduated cylinders.',
      'A professor is writing mathematical formulas on a green chalkboard.',
      'Safety helmets are hanging on hooks beside a glass lab door.',
    ], 0, 'ตอบ Lab researchers are inspecting a turbine blade inside a test chamber. (นักวิจัยกำลังตรวจใบพัดกังหันลมจำลองภายในตู้ทดสอบกระจก)'),
    p1(7, 'l7-p1-6', 'uk_m', [
      'Visitors are putting coins into a museum gift shop vending machine.',
      'A museum attendant behind a desk is pointing toward a wall map.',
      'Security guards are locking glass doors at closing time.',
      'Schoolchildren are sitting on carpeted steps listening to a guide.',
    ], 1, 'ตอบ A museum attendant behind a desk is pointing toward a wall map. (เจ้าหน้าที่หลังเคาน์เตอร์พิพิธภัณฑ์กำลังชี้บอกทางไปที่แผนที่บนผนัง)'),

    // Set 7 Part 2 (25 Qs)
    p2(7, 'l7-p2-1', 'us_m', 'uk_f', 'Where do transfer students pick up their campus shuttle passes?', ['At the Transit Desk inside the Student Union.', 'Valid through the end of the spring term.', 'Yes, Route Four runs past the dormitory.'], 0, 'ตอบ At the Transit Desk inside the Student Union. (ถามสถานที่ Where ตอบเคาน์เตอร์ขนส่งในอาคารสโมสรนักศึกษา)'),
    p2(7, 'l7-p2-2', 'uk_f', 'ca_m', 'Who is calibrating the anemometers in the wind tunnel lab today?', ['Around twelve meters per second.', 'Our senior aerodynamics technician, Marco.', 'Behind the thick glass observation window.'], 1, 'ตอบ Our senior aerodynamics technician, Marco. (ถามบุคคล Who ตอบช่างเทคนิคอาวุโสด้านอากาศพลศาสตร์ชื่อ Marco)'),
    p2(7, 'l7-p2-3', 'au_m', 'us_f2', 'When does the planetarium laser show start on Saturdays?', ['Inside the domed ceiling theater upstairs.', 'Twenty-five dollars with museum admission.', 'First screening is at one-thirty, then every two hours.'], 2, 'ตอบ First screening is at one-thirty, then every two hours. (ถามเวลา When ตอบรอบแรก 13:30 น. และมีทุกสองชั่วโมง)'),
    p2(7, 'l7-p2-4', 'ca_f', 'au_m', 'Should I install the solar inverter on the south wall or inside the utility shed?', ['Put it inside the shaded shed so it stays cooler.', 'Yes, those panels generate five kilowatts.', 'Last Thursday afternoon before the storm.'], 0, 'ตอบ Put it inside the shaded shed so it stays cooler. (คำถามเลือก A or B ตอบแนะนำให้ติดในโรงเก็บของที่มีร่มเงาจะได้ไม่ร้อน)'),
    p2(7, 'l7-p2-5', 'us_f2', 'uk_m', 'Why was the graduate dining hall closed early on Wednesday?', ['Mostly pasta dishes and grilled vegetables.', 'Kitchen staff had a mandatory food-safety drill.', 'Across from the main chemistry building.'], 1, 'ตอบ Kitchen staff had a mandatory food-safety drill. (ถามเหตุผล Why ตอบพนักงานครัวมีซ้อมแผนความปลอดภัยด้านอาหาร)'),
    p2(7, 'l7-p2-6', 'uk_m', 'us_f', 'Hasn’t the museum restored the antique brass telescope exhibit yet?', ['No, I didn’t attend the astronomy lecture.', 'Curators finished polishing the lenses yesterday afternoon.', 'On the mezzanine overlooking the dinosaur hall.'], 1, 'ตอบ Curators finished polishing the lenses yesterday afternoon. (คำถามปฏิเสธ Hasn’t... ตอบข้อเท็จจริงว่าภัณฑารักษ์ขัดเลนส์เสร็จเมื่อวานบ่ายแล้ว)'),
    p2(7, 'l7-p2-7', 'us_m2', 'ca_f', 'How many solar array panels were mounted on the engineering roof?', ['Forty-eight high-efficiency units in four rows.', 'Facing due south at a thirty-degree tilt.', 'Before the campus power audit in June.'], 0, 'ตอบ Forty-eight high-efficiency units in four rows. (ถามจำนวน How many ตอบติดตั้งไปทั้งหมด 48 แผง แบ่งเป็น 4 แถว)'),
    p2(7, 'l7-p2-8', 'uk_f2', 'au_f', 'Could you sign off on the geology field trip van reservation?', ['Yes, the limestone canyon looks dramatic.', 'Send the driver roster to my inbox and I’ll approve it.', 'Twelve graduate students plus two professors.'], 1, 'ตอบ Send the driver roster to my inbox and I’ll approve it. (ขอให้อนุมัติการจองรถตู้ ตอบให้ส่งรายชื่อคนขับเข้าอีเมลแล้วจะเซ็นให้)'),
    p2(7, 'l7-p2-9', 'ca_m', 'us_f', 'The campus Wi-Fi drops out every time we enter the basement archive.', ['No, I turned in my thesis draft online.', 'About two hundred historical yearbooks.', 'Let’s report that dead spot to Campus IT today.'], 2, 'ตอบ Let’s report that dead spot to Campus IT today. (ประโยคบอกเล่าแจ้งปัญหาสัญญาณเน็ตหลุด ตอบเสนอให้แจ้งศูนย์ไอทีมหาวิทยาลัยวันนี้)'),
    p2(7, 'l7-p2-10', 'us_f', 'uk_m', 'Which dormitory laundry room received the new card-reader machines?', ['Oakwood Hall was upgraded first over the break.', 'Yes, twenty-five cents per wash cycle.', 'Behind the vending machines on floor one.'], 0, 'ตอบ Oakwood Hall was upgraded first over the break. (ถามเลือกหอพัก Which ตอบหอ Oakwood ได้รับการติดตั้งเครื่องใหม่เป็นแห่งแรก)'),
    p2(7, 'l7-p2-11', 'au_f', 'us_m2', 'How long will the battery storage stress test run in Lab B?', ['Roughly six continuous hours until thermal shutoff.', 'Three lithium packs connected in series.', 'Ask the chemistry safety officer on Tuesday.'], 0, 'ตอบ Roughly six continuous hours until thermal shutoff. (ถามระยะเวลา How long ตอบทดสอบต่อเนื่องประมาณ 6 ชั่วโมง)'),
    p2(7, 'l7-p2-12', 'uk_m', 'ca_f', 'Would you prefer attending the morning physics lecture or watching the recorded stream?', ['In-person works better so I can ask questions.', 'Yes, Professor Lin posted the slides online.', 'At nine o’clock in Auditorium 204.'], 0, 'ตอบ In-person works better so I can ask questions. (คำถามเลือก A or B ตอบไปฟังสดดีกว่าเพราะจะได้ซักถามอาจารย์ได้)'),
    p2(7, 'l7-p2-13', 'us_m', 'au_f', 'Where can museum visitors store oversized backpacks and umbrellas?', ['Rent one of the coin-free lockers beside the coat check.', 'Because flash photography damages old fossils.', 'Open daily from nine-thirty until five.'], 0, 'ตอบ Rent one of the coin-free lockers beside the coat check. (ถามที่ฝากกระเป๋า Where ตอบใช้ตู้ล็อกเกอร์ฟรีข้างจุดรับฝากเสื้อโค้ต)'),
    p2(7, 'l7-p2-14', 'uk_f', 'us_m2', 'Why don’t we pair the wind-blade display with an interactive airflow dial?', ['No, the turbine blades weigh forty kilos.', 'That would help students feel how pitch angles change lift!', 'Until the science museum closes next Monday.'], 1, 'ตอบ That would help students feel how pitch angles change lift! (Why don’t we เสนอไอเดียจัดนิทรรศการ ตอบเห็นด้วยพร้อมเหตุผลว่าช่วยให้นักเรียนเข้าใจหลักแรงยกดีขึ้น)'),
    p2(7, 'l7-p2-15', 'ca_f', 'uk_m', 'You work at the Student Financial Aid office on Wednesdays, don’t you?', ['Usually two scholarship deadlines each autumn.', 'Only during the morning shift—I study in the afternoon.', 'That building has solar panels along the awning.'], 1, 'ตอบ Only during the morning shift—I study in the afternoon. (Tag question ถามย้ำ ตอบทำเฉพาะกะเช้าวันพุธ ส่วนช่วงบ่ายไปเรียน)'),
    p2(7, 'l7-p2-16', 'au_m', 'us_f2', 'Who donated the fossilized mammoth tooth in the Earth Hall?', ['Found during a river excavation in 1998.', 'Dr. Alvarez’s family lent it to our permanent collection.', 'Inside the climate-controlled glass display case.'], 1, 'ตอบ Dr. Alvarez’s family lent it to our permanent collection. (ถามบุคคล Who ตอบครอบครัวของ ดร. Alvarez ให้ยืมมาจัดแสดงถาวร)'),
    p2(7, 'l7-p2-17', 'us_f', 'ca_m', 'How much is a semester parking permit for the West Campus garage?', ['Students pay eighty-five dollars if they register early.', 'Yes, shuttle buses leave every twelve minutes.', 'On the third level near the elevator lobby.'], 0, 'ตอบ Students pay eighty-five dollars if they register early. (ถามราคาค่าจอดรถ How much ตอบ 85 ดอลลาร์หากลงทะเบียนล่วงหน้า)'),
    p2(7, 'l7-p2-18', 'uk_m', 'au_f', 'Did the solar microgrid switch seamlessly to backup power during the drill?', ['Once a semester before winter storms.', 'No, there wasn’t enough cloud cover.', 'There was a half-second flicker before batteries took over.'], 2, 'ตอบ There was a half-second flicker before batteries took over. (ถามว่าระบบสลับไฟสำรองราบรื่นไหม ตอบข้อเท็จจริงว่ามีไฟกะพริบครึ่งวินาทีก่อนแบตเตอรี่ทำงาน)'),
    p2(7, 'l7-p2-19', 'us_f2', 'uk_m', 'I love how quiet the third-floor reading lounge stays during finals week.', ['Me too—posting quiet-zone signs actually worked!', 'Yes, the exam schedule runs until Friday.', 'Try checking the library reference desk downstairs.'], 0, 'ตอบ Me too—posting quiet-zone signs actually worked! (ประโยคบอกเล่าแสดงความชื่นชม ตอบเห็นด้วยว่าป้ายเขตงดใช้เสียงได้ผลจริง)'),
    p2(7, 'l7-p2-20', 'ca_m', 'us_f', 'When are engineering capstone teams submitting their prototype schematics?', ['Through the online design portal.', 'Department chairs extended the deadline to next Wednesday.', 'Solar water heaters and micro-turbines.'], 1, 'ตอบ Department chairs extended the deadline to next Wednesday. (ถามกำหนดส่ง When ตอบหัวหน้าภาควิชาขยายเวลาส่งเป็นวันพุธหน้า)'),
    p2(7, 'l7-p2-21', 'uk_f2', 'au_m', 'Do you know if the science museum cafe serves hot soup after three?', ['I grabbed a sandwich there around noon.', 'Only cold salads and pastries once the lunch rush ends.', 'Right beside the fossil gift shop.'], 1, 'ตอบ Only cold salads and pastries once the lunch rush ends. (ถามว่าหลังบ่ายสามมีซุปร้อนไหม ตอบว่าพอหมดช่วงเที่ยงจะมีแค่สลัดเย็นกับขนมอบ)'),
    p2(7, 'l7-p2-22', 'us_m', 'uk_f', 'What time does the evening campus safety escort van begin rounds?', ['Seven P.M. sharp from the Main Library steps.', 'To escort students back to residential halls.', 'Free with any valid university ID card.'], 0, 'ตอบ Seven P.M. sharp from the Main Library steps. (ถามเวลา What time ตอบเริ่มวิ่งเวลา 19:00 น. ตรงจากหน้าหอสมุดกลาง)'),
    p2(7, 'l7-p2-23', 'au_f', 'ca_m', 'Can you drop off these overdue chemistry lab keys at Facilities?', ['Yes, the fume hood inspection passed.', 'Sure, I’m walking past their office on my way to lunch.', 'Inside the locked cabinet near Lab 209.'], 1, 'ตอบ Sure, I’m walking past their office on my way to lunch. (ขอให้ช่วยนำกุญแจไปคืน ตอบยินดีช่วยเพราะเดินผ่านพอดี)'),
    p2(7, 'l7-p2-24', 'us_m2', 'uk_f2', 'Have the exhibit curators approved the Spanish audio-guide scripts?', ['Around forty-five stops throughout three floors.', 'They’re reviewing the final dinosaur gallery track this afternoon.', 'Recorded in our basement sound studio.'], 1, 'ตอบ They’re reviewing the final dinosaur gallery track this afternoon. (ถามว่าอนุมัติสคริปต์หรือยัง ตอบกำลังตรวจแทร็กสุดท้ายของโซนไดโนเสาร์บ่ายนี้)'),
    p2(7, 'l7-p2-25', 'uk_f', 'us_m', 'Whose protective helmet is sitting next to the turbine rotor bench?', ['That belongs to Elena—she stepped out to grab torque wrenches.', 'Yes, hard hats are mandatory inside the test bay.', 'Put the extra ear protection inside the yellow bin.'], 0, 'ตอบ That belongs to Elena—she stepped out to grab torque wrenches. (ถามเจ้าของหมวกนิรภัย Whose ตอบเป็นของ Elena ที่ออกไปหยิบประแจวัดแรงบิด)'),

    // Set 7 Part 3 (13 Conversations: 1-10 no doc, 11-13 with doc; >=2 3-speaker convs)
    p3(7, 'l7-p3-1', [
      ['Woman', 'us_f', 'David, Maple Hall’s front entrance smart-lock reader keeps rejecting alumni keycards during reunion weekend check-in.'],
      ['Man', 'uk_m', 'Wait—freshman ID cards still open it, right? Let me plug my diagnostic tablet into the door controller.'],
      ['Woman', 'us_f', 'Yes, regular student cards work fine, only the temporary visitor cards flash red. Can we fix it before noon when fifty guests arrive?'],
      ['Man', 'uk_m', 'Aha—the guest card database hadn’t synced to Maple Hall’s offline cache. I’m pushing the roster update now and testing a spare visitor badge right here.'],
    ], null, [
      ['Part 3 · Problem', 'What issue is occurring at Maple Hall’s main entrance?', ['Temporary visitor cards fail to unlock the door', 'Student ID cards stopped scanning after midnight', 'The front door hinge requires emergency replacement', 'Alumni guests arrived at the wrong residential hall'], 0, 'ตอบ Temporary visitor cards fail to unlock the door (เครื่องอ่านสมาร์ตล็อกปฏิเสธบัตรชั่วคราวของศิษย์เก่าที่มาร่วมงานคืนสู่เหย้า)'],
      ['Part 3 · Detail', 'According to the man, what caused the malfunction?', ['The guest card roster had not synced to the door lock', 'Low battery power weakened the card reader sensor', 'Fifty temporary cards were programmed with expired dates', 'Campus wireless service shut down overnight'], 0, 'ตอบ The guest card roster had not synced to the door lock (ฐานข้อมูลรายชื่อบัตรแขกยังไม่ได้ซิงก์เข้าหน่วยความจำของตัวล็อกประตู)'],
      ['Part 3 · Action', 'What will the man do to resolve the lock issue?', ['Send the updated roster and test a sample card', 'Assign a student worker to open the door manually', 'Replace the smart-lock hardware on Maple Hall', 'Print paper meal vouchers for arriving alumni'], 0, 'ตอบ Send the updated roster and test a sample card (ผู้ชายจะส่งอัปเดตข้อมูลรายชื่อแล้วทดลองแตะบัตรแขกสำรองดูทันที)'],
    ]),

    p3(7, 'l7-p3-2', [
      ['Woman', 'ca_f', 'Sam, did you hear that low metallic rattle coming from the museum’s earthquake simulator platform during this morning’s test cycle?'],
      ['Man', 'au_m', 'I did! One of the floor bolts worked loose underneath the hydraulic frame, and it echoes straight through the neighboring fossil hall.'],
      ['Woman', 'ca_f', 'Two elementary school classes are booked on that platform at ten-fifteen. Do we have enough time to quiet it down?'],
      ['Man', 'au_m', 'Plenty of time. Let’s slip heavy rubber isolation pads under all four mounting brackets and tighten the bolts before opening doors.'],
    ], null, [
      ['Part 3 · Problem', 'What problem did the speakers notice during a morning test?', ['A simulator exhibit produced a loud metallic rattling noise', 'Hydraulic fluid leaked onto the fossil hall floor', 'The museum’s school group booking system crashed', 'Overhead spotlights flickered inside the earthquake gallery'], 0, 'ตอบ A simulator exhibit produced a loud metallic rattling noise (ฐานเครื่องจำลองแผ่นดินไหวเกิดเสียงสั่นสะเทือนของโลหะดังสะท้อนไปห้องถัดไป)'],
      ['Part 3 · Detail', 'Who is scheduled to use the simulator at 10:15 A.M.?', ['Two elementary school groups', 'A university geology seminar', 'Museum board donors', 'Safety certification inspectors'], 0, 'ตอบ Two elementary school groups (มีนักเรียนชั้นประถม 2 กลุ่มจองเข้าใช้งานตอน 10:15 น.)'],
      ['Part 3 · Detail', 'How will the man fix the vibration issue?', ['By placing rubber pads beneath brackets and tightening bolts', 'By disconnecting the hydraulic motor until tomorrow', 'By relocating the exhibit away from the fossil wall', 'By restricting groups to five students per cycle'], 0, 'ตอบ By placing rubber pads beneath brackets and tightening bolts (ใส่แผ่นยางกันสะเทือนรองใต้ขายึดทั้งสี่จุดและขันสลักเกลียวให้แน่น)'],
    ]),

    p3(7, 'l7-p3-3', [
      ['Man', 'us_m2', 'Nadia, heavy cloud cover rolled in around two o’clock, so our rooftop solar irradiance sensor log for this afternoon looks completely jagged.'],
      ['Woman', 'uk_f2', 'Ugh, don’t tell me we lost a whole day of calibration readings for the inverter report!'],
      ['Man', 'us_m2', 'Not necessarily—the morning dataset between eight and noon recorded spotless clear-sky curves with steady sun angles.'],
      ['Woman', 'uk_f2', 'Oh, thank goodness! Export that four-hour morning block right now so I can finish plotting the baseline graphs before five.'],
    ], null, [
      ['Part 3 · Problem', 'Why are the afternoon solar sensor readings unusable?', ['Passing clouds disrupted afternoon sunlight measurements', 'A rooftop cable disconnected during lunch', 'Inverter firmware erased yesterday’s log file', 'Shadow from a nearby crane covered the test panel'], 0, 'ตอบ Passing clouds disrupted afternoon sunlight measurements (เมฆหนาพัดเข้ามาตอนบ่ายสองทำให้ค่าความเข้มแสงอาทิตย์แกว่ง)'],
      ['Part 3 · Meaning', 'What does the man mean when he says, "Not necessarily"?', ['Usable clear-sky measurements are still available from earlier in the day', 'Cloudy readings can be uploaded directly to the inverter report', 'The calibration deadline has been moved back to next week', 'Indoor halogen lamps can substitute for outdoor sunlight'], 0, 'ตอบ Usable clear-sky measurements are still available from earlier in the day (หมายความว่ายังไม่ได้เสียข้อมูลทั้งหมด เพราะช่วงเช้า 8:00-12:00 น. ท้องฟ้าโปร่งและกราฟสมบูรณ์ดี)'],
      ['Part 3 · Action', 'What will the man send the woman so she can finish the graphs?', ['Export the morning solar data block for graphing', 'Recalibrate the rooftop irradiance sensor at noon', 'Reschedule outdoor solar tests for tomorrow morning', 'Replace the inverter battery packs in Lab B'], 0, 'ตอบ Export the morning solar data block for graphing (ผู้ชายจะส่งออกไฟล์ข้อมูลช่วงเช้าสี่ชั่วโมงให้ผู้หญิงนำไปพล็อตกราฟ)'],
    ]),

    p3(7, 'l7-p3-4', [
      ['Woman', 'au_f', 'Welcome to Campus Bookstore. How can I help you with your Biology 202 order?'],
      ['Man1', 'ca_m', 'I preordered the lab manual two weeks ago, and Professor Sato is standing right behind me—actually, neither of us sees copies on the shelf!'],
      ['Man2', 'us_m', 'Right, Maya—did our publisher’s freight container clear customs yet? Half my class still has no workbook for tomorrow’s lab.'],
      ['Woman', 'au_f', 'The distributor just emailed saying the pallet is delayed at port until Friday. Would you like me to notify students by email as soon as they land?'],
      ['Man2', 'us_m', 'Yes, please! Meanwhile, I’ll upload scanned copies of Chapters One and Two to the campus course portal tonight and postpone Friday’s reading quiz.'],
    ], null, [
      ['Part 3 · Problem', 'Why are the Biology 202 lab manuals missing from the shelf?', ['The publisher’s shipment is delayed at a shipping port', 'The bookstore clerk ordered the wrong edition number', 'Graduating seniors bought out the entire inventory', 'Campus mail services delivered the boxes to the biology lab'], 0, 'ตอบ The publisher’s shipment is delayed at a shipping port (ตู้คอนเทนเนอร์หนังสือของสำนักพิมพ์ติดค้างอยู่ที่ท่าเรือจนถึงวันศุกร์)'],
      ['Part 3 · Detail', 'Who is the second man in the conversation?', ['A university biology professor', 'A regional bookstore freight driver', 'A campus library catalog specialist', 'A textbook publishing sales representative'], 0, 'ตอบ A university biology professor (นักศึกษาเรียกว่า Professor Sato และเขาดูแลวิชา Biology 202)'],
      ['Part 3 · Action', 'What will the second man do tonight?', ['Post scanned book chapters on the online course portal', 'Drive to the port warehouse to collect twenty manuals', 'Cancel tomorrow afternoon’s introductory biology lab', 'Refund student textbook deposits at the bookstore counter'], 0, 'ตอบ Post scanned book chapters on the online course portal (อาจารย์จะสแกนบทที่ 1 และ 2 อัปโหลดขึ้นระบบบทเรียนออนไลน์คืนนี้)'],
    ]),

    p3(7, 'l7-p3-5', [
      ['Woman1', 'uk_f', 'Ben, visitors in the Robotics Wing keep returning handheld audio guides with dead batteries after barely ninety minutes!'],
      ['Woman2', 'us_f2', 'Really? Those wands are rated for six hours. Are staff forgetting to dock them firmly on the charging pins overnight?'],
      ['Woman1', 'uk_f', 'I checked the rack this morning—every green indicator light was solid. I suspect the rechargeable batteries themselves are worn out after three years of museum tours.'],
      ['Woman2', 'us_f2', 'Good diagnosis. Let’s order sixty fresh lithium packs today and rotate half the wands out at midday so tour groups never lose audio.'],
    ], null, [
      ['Part 3 · Problem', 'What issue is happening with the museum’s handheld audio guides?', ['Their batteries lose power much faster than normal', 'The charging rack indicator lights stopped working', 'Robotics Wing speakers interfere with audio signals', 'Spanish tour tracks cut off after ninety seconds'], 0, 'ตอบ Their batteries lose power much faster than normal (เครื่องเล่นเสียงนำชมแบตหมดใน 90 นาที ทั้งที่ควรอยู่ได้ 6 ชั่วโมง)'],
      ['Part 3 · Detail', 'What does the first woman believe caused the problem?', ['Aging rechargeable batteries have reached the end of their lifespan', 'Evening staff forgot to place wands onto charging docks', 'Heavy visitor volume doubled weekend tour lengths', 'A loose power cord shut off the charging rack overnight'], 0, 'ตอบ Aging rechargeable batteries have reached the end of their lifespan (คาดว่าแบตเตอรี่เสื่อมสภาพหลังใช้งานมานาน 3 ปี)'],
      ['Part 3 · Detail', 'What interim plan do the speakers agree on?', ['Swapping half of the audio guides halfway through the day', 'Guiding visitors with printed paper gallery maps', 'Shutting down the Robotics Wing charging rack at noon', 'Asking tour volunteers to read scripts aloud'], 0, 'ตอบ Swapping half of the audio guides halfway through the day (สลับหมุนเวียนเครื่องเล่นเสียงครึ่งหนึ่งออกชาร์จตอนกลางวันระหว่างรอแบตใหม่)'],
    ]),

    p3(7, 'l7-p3-6', [
      ['Man1', 'ca_m', 'Liam, our carbon-fiber turbine blade prototype just arrived from the molding shop, and the trailing edge feels slightly uneven along the tip.'],
      ['Man2', 'uk_m', 'Let me run a caliper check across it. Yeah, excess resin hardened near the outer six inches—mounting it like this would throw off our wind tunnel balance readings.'],
      ['Man1', 'ca_m', 'Can we sand that ridge down here in the composite bay rather than shipping it all the way back to the vendor?'],
      ['Man2', 'uk_m', 'Definitely. I’ll wet-sand the edge smooth this afternoon and re-weigh the blade on the precision scale before our morning tunnel test.'],
    ], null, [
      ['Part 3 · Problem', 'What flaw did the engineers notice on the prototype blade?', ['Dried resin left a rough edge near the blade tip', 'The carbon-fiber shell cracked during freight shipping', 'The blade weighs significantly less than design specs', 'Mounting bolt holes do not fit the wind tunnel hub'], 0, 'ตอบ Dried resin left a rough edge near the blade tip (พบคราบเรซินส่วนเกินแข็งตัวเป็นสันขรุขระบริเวณปลายใบพัด)'],
      ['Part 3 · Detail', 'What problem would occur if the blade were tested without fixing?', ['Aerodynamic balance measurements would be inaccurate', 'Wind tunnel glass panels could be scratched', 'The precision scale would fail to calibrate', 'Engine fans inside the lab would overheat'], 0, 'ตอบ Aerodynamic balance measurements would be inaccurate (จะทำให้ค่าการวัดความสมดุลในอุโมงค์ลมเพี้ยน)'],
      ['Part 3 · Action', 'What will the second man do after sanding the edge?', ['Verify the blade’s weight on a precision scale', 'Ship the composite shell back to the molding shop', 'Order a replacement batch of carbon-fiber tips', 'Install acoustic sensors along the hub mount'], 0, 'ตอบ Verify the blade’s weight on a precision scale (ผู้ชายจะนำใบพัดไปชั่งน้ำหนักซ้ำบนเครื่องชั่งละเอียดก่อนทดสอบพรุ่งนี้เช้า)'],
    ]),

    p3(7, 'l7-p3-7', [
      ['Man', 'us_m', 'Elena, two of our electric campus loop buses failed to charge overnight because the East Depot breaker panel tripped around two A.M.'],
      ['Woman', 'au_f', 'That explains why Morning Route B is running behind! Did an electrician check whether rain leaked into the conduit box?'],
      ['Man', 'us_m', 'Facility electricians are opening the junction box now. Meanwhile, I’m sending both low-battery buses to the North Lot fast chargers so they hit eighty percent before noon classes.'],
      ['Woman', 'au_f', 'Smart move—I’ll post a brief shuttle alert on the campus transit app letting students know Route B is running ten minutes apart temporarily.'],
    ], null, [
      ['Part 3 · Problem', 'Why were two campus buses unable to charge overnight?', ['An electrical breaker panel tripped at the East Depot', 'Fast-charging stations at the North Lot were full', 'Heavy snow blocked campus transit parking lanes', 'Drivers forgot to plug in charging connectors'], 0, 'ตอบ An electrical breaker panel tripped at the East Depot (แผงเบรกเกอร์ที่โรงจอดฝั่งตะวันออกตัดไฟตอนตีสอง)'],
      ['Part 3 · Detail', 'Where are the two buses being charged now?', ['At fast chargers located in the North Lot', 'Inside the university engineering garage', 'At downtown municipal transit bays', 'Behind the Student Union bus stop'], 0, 'ตอบ At fast chargers located in the North Lot (ส่งรถบัสทั้งสองคันไปชาร์จด่วนที่จุดชาร์จ North Lot)'],
      ['Part 3 · Action', 'What will the woman do using the campus transit app?', ['Notify riders of temporary Route B bus spacing', 'Instruct drivers to skip afternoon dormitory stops', 'Request backup gasoline vans from Facilities', 'Survey students about overnight shuttle hours'], 0, 'ตอบ Notify riders of temporary Route B bus spacing (ผู้หญิงจะโพสต์แจ้งเตือนนักศึกษาบนแอปว่ารถสาย B จะเว้นระยะห่างชั่วคราว 10 นาที)'],
    ]),

    p3(7, 'l7-p3-8', [
      ['Man', 'uk_m', 'Let’s do one final walk-through of the Deep Ocean Gallery before Friday night’s donor reception. How are the interactive squid touchscreens looking?'],
      ['Woman1', 'us_f', 'They’re super responsive! Though notice how the overhead spotlights cast bright glare across the front glass panel when you stand at an angle.'],
      ['Woman2', 'ca_f', 'I saw that too—we actually have matte anti-glare acrylic shields sitting in our workshop crate. My crew can swap those covers out before tomorrow’s catering setup arrives.'],
      ['Man', 'uk_m', 'Thank you, Clara. Once that glare is gone, Nadia, please check that donor name plaques along the entrance wall sit evenly lit.'],
    ], null, [
      ['Part 3 · Topic', 'What event are the speakers preparing for?', ['An evening reception for museum donors', 'A summer physics workshop for college interns', 'A public auction of antique marine artifacts', 'A live television interview with oceanographers'], 0, 'ตอบ An evening reception for museum donors (เตรียมงานเลี้ยงต้อนรับผู้บริจาคคืนวันศุกร์ที่โซน Deep Ocean Gallery)'],
      ['Part 3 · Problem', 'What issue did the first woman notice at the interactive displays?', ['Overhead lighting reflects sharply off the screen glass', 'Touchscreens respond slowly to visitor fingers', 'Audio captions fail to play near the entrance wall', 'Deep-sea squid videos stopped looping automatically'], 0, 'ตอบ Overhead lighting reflects sharply off the screen glass (ไฟสปอตไลต์ด้านบนสะท้อนแสงจ้าบนกระจกหน้าจอสัมผัส)'],
      ['Part 3 · Action', 'What will Clara’s team install before tomorrow?', ['Matte anti-glare acrylic screen covers', 'Low-voltage LED track bulbs overhead', 'Brass donor plaques along the side corridor', 'Temporary velvet barriers around catering tables'], 0, 'ตอบ Matte anti-glare acrylic screen covers (ทีมของ Clara จะนำแผ่นอะคริลิกด้านลดแสงสะท้อนจากลังอุปกรณ์มาเปลี่ยนให้)'],
    ]),

    p3(7, 'l7-p3-9', [
      ['Man', 'au_m', 'Maya, telemetry data coming from Rooftop Array 3 has been dropping every third packet since nine o’clock this morning.'],
      ['Woman', 'us_f2', 'Hmm—the inverter temperature looks completely normal on my dashboard. Could wind be rattling an unshielded Ethernet connector inside the roof conduit?'],
      ['Man', 'au_m', 'Actually, grounds staff pressure-washed the parapet walls right beside Array 3’s weatherproof junction box at eight-thirty.'],
      ['Woman', 'us_f2', 'Oh, moisture probably crept inside the seal! Grab a hair dryer, fresh silicone gaskets, and spare RJ45 plugs—let’s head up to the roof now.'],
    ], null, [
      ['Part 3 · Problem', 'What technical problem is occurring with Rooftop Array 3?', ['Network telemetry data packets are intermittently dropping', 'Solar inverter temperatures climbed past safety limits', 'Rooftop power output fell completely to zero', 'Wind gusts tore loose a solar mounting bracket'], 0, 'ตอบ Network telemetry data packets are intermittently dropping (ข้อมูลระยะไกลที่ส่งจากแผงชุดที่ 3 ขาดหายเป็นช่วงๆ)'],
      ['Part 3 · Detail', 'What likely caused the signal disruption?', ['Water from wall pressure-washing entered a junction box', 'High rooftop wind snapped an Ethernet cable', 'Software updates restarted the lab dashboard', 'Birds nested inside the solar conduit pipe'], 0, 'ตอบ Water from wall pressure-washing entered a junction box (พนักงานฉีดน้ำล้างผนังข้างกล่องรวมสายไฟตอนแปดโมงครึ่ง ทำให้น้ำอาจซึมเข้าซีล)'],
      ['Part 3 · Action', 'What supplies will the speakers bring to the roof?', ['Replacement gaskets and spare network plugs', 'Thermal imaging cameras and voltage meters', 'Fresh lithium batteries and copper grounding wire', 'Clean microfiber cloths and glass cleaner'], 0, 'ตอบ Replacement gaskets and spare network plugs (หยิบปะเก็นซิลิโคนใหม่และหัวปลั๊ก RJ45 สำรองขึ้นไปซ่อมบนดาดฟ้า)'],
    ]),

    p3(7, 'l7-p3-10', [
      ['Woman', 'uk_f2', 'Jake, the campus pool’s automated chlorine probe just flashed a low-sanitizer warning—even though my manual drop test shows levels are spot on.'],
      ['Man', 'us_m2', 'Wait, didn’t the pump technician mention that glass probe needs monthly recalibration after heavy weekend swim meets?'],
      ['Woman', 'uk_f2', 'You’re right, today marks four weeks! I’ll clear the flow cell and run calibration fluid through it right after morning lap swim ends at ten.'],
      ['Man', 'us_m2', 'Great—meanwhile I’ll update our recreation center schedule board so intramural water polo captains know the pool opens smoothly at ten-thirty.'],
    ], null, [
      ['Part 3 · Detail', 'How does the woman know the pool water itself is safe?', ['Her manual drop test confirmed proper sanitizer levels', 'Morning swimmers reported clear water conditions', 'Pump technicians inspected the tanks at dawn', 'Automated chlorine dispensers refilled last night'], 0, 'ตอบ Her manual drop test confirmed proper sanitizer levels (ผลทดสอบด้วยน้ำยาแบบหยดด้วยตนเองแสดงว่าค่าคลอรีนปกติ)'],
      ['Part 3 · Detail', 'Why did the sensor alarm sound?', ['The monitoring probe is overdue for monthly calibration', 'Weekend swim meets drained the main chemical tank', 'A clogged pool filter blocked water circulation', 'Pump technicians switched off the breaker panel'], 0, 'ตอบ The monitoring probe is overdue for monthly calibration (ครบกำหนดสี่สัปดาห์ที่หัววัดแก้วต้องปรับเทียบค่าประจำเดือนแล้ว)'],
      ['Part 3 · Action', 'What will the man update?', ['A campus recreation schedule board', 'A university lifeguard training manual', 'An online chemical supply order form', 'Pool maintenance invoices for Facilities'], 0, 'ตอบ A campus recreation schedule board (ผู้ชายจะอัปเดตกระดานตารางเวลาของศูนย์กีฬาให้ทีมโปโลน้ำทราบว่าสระเปิด 10:30 น.)'],
    ]),

    p3(7, 'l7-p3-11', [
      ['Man', 'ca_m', 'Excuse me, I’m a visiting grad student and need to reach the Marine Biology Annex before my nine-fifteen orientation seminar. Should I catch the North Loop shuttle?'],
      ['Woman', 'uk_f', 'Let’s check the summer schedule. Careful—the North Loop departure listed here at eight-thirty was actually pushed fifteen minutes later starting Monday due to library construction.'],
      ['Man', 'ca_m', 'Oh! If it leaves at eight-forty-five and takes thirty-five minutes, I’d walk in late!'],
      ['Woman', 'uk_f', 'Take the Science Express instead—it departs from Bay 2 right outside, stops right beside the Annex, and gets you there with ten minutes to spare.'],
    ], doc('Transit', 'Westfield University — Summer Shuttle Board', [['Updated', 'June 1']], [
      tbl(['Route', 'Listed Departure', 'Travel Time', 'Boarding Bay'], [
        ['West Campus Circulator', '8:15 A.M.', '40 mins', 'Bay 1'],
        ['North Loop', '8:30 A.M.', '35 mins', 'Bay 4'],
        ['Science Express', '8:40 A.M.', '25 mins', 'Bay 2'],
        ['Downtown Dorm Link', '8:50 A.M.', '30 mins', 'Bay 3'],
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Where should the student board the recommended shuttle?', ['Bay 2', 'Bay 1', 'Bay 3', 'Bay 4'], 0, 'ตอบ Bay 2 (เจ้าหน้าที่แนะนำให้นั่งสาย Science Express แทนเพื่อไปทันเวลา 9:15 น. ซึ่งในตารางขึ้นรถที่ Bay 2)'],
      ['Part 3 · Detail', 'What schedule error does the clerk point out?', ['The North Loop shuttle now leaves fifteen minutes later than printed', 'The Science Express no longer stops near the library', 'Summer shuttle travel times increased due to construction', 'Bay 4 closed temporarily for campus sidewalk repairs'], 0, 'ตอบ The North Loop shuttle now leaves fifteen minutes later than printed (รถสาย North Loop ขยับเวลาออกช้าลงจากป้าย 15 นาทีเป็น 8:45 น.)'],
      ['Part 3 · Detail', 'When will the student’s orientation seminar begin?', ['At 9:15 A.M.', 'At 8:40 A.M.', 'At 8:50 A.M.', 'At 9:05 A.M.'], 0, 'ตอบ At 9:15 A.M. (นักศึกษาระบุว่าต้องไปให้ทันสัมมนาปฐมนิเทศเวลา 9:15 น.)'],
    ]),

    p3(7, 'l7-p3-12', [
      ['Woman', 'us_f', 'Hi! I have two eight-year-old twins who are obsessed with dinosaurs and robots—which special wings should we add to our general museum passes?'],
      ['Man', 'au_m', 'Welcome! Our Dinosaur IMAX Dome is showing right now. Unfortunately, the Robotics Interactive Zone listed on our brochure is closed all today while technicians upgrade its floor sensors.'],
      ['Woman', 'us_f', 'Aw, that’s a shame—they were really hoping to program the robot arms.'],
      ['Man', 'au_m', 'I understand! Since that wing is offline, I can give your family a twenty-percent courtesy discount on the Dinosaur Dome tickets, plus free entry to the Fossil Dig Pit upstairs.'],
    ], doc('Directory', 'Discovery Science Museum — Featured Exhibits', [['Admission', 'Add-On Wings']], [
      tbl(['Wing / Zone', 'Highlight', 'Recommended Age', 'Add-On Price'], [
        ['Dinosaur IMAX Dome', 'Prehistoric 3D film', 'All ages', '$10 / person'],
        ['Robotics Interactive Zone', 'Programmable rover arms', '7–14 years', '$12 / person'],
        ['Deep Space Planetarium', 'Laser constellation show', '6+ years', '$9 / person'],
        ['Toddler Water Lab', 'Splash dam locks', '2–5 years', '$6 / person'],
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which add-on attraction is closed for upgrades today?', ['Robotics Interactive Zone', 'Dinosaur IMAX Dome', 'Deep Space Planetarium', 'Toddler Water Lab'], 0, 'ตอบ Robotics Interactive Zone (พนักงานแจ้งว่าโซนหุ่นยนต์ปิดปรับปรุงเซนเซอร์พื้นตลอดทั้งวันนี้)'],
      ['Part 3 · Detail', 'How much is the regular add-on price for the recommended dinosaur attraction?', ['$10 per person', '$12 per person', '$9 per person', '$6 per person'], 0, 'ตอบ $10 per person (ราคาปกติในตารางสำหรับ Dinosaur IMAX Dome คือ $10 ต่อคน ก่อนลด 20%)'],
      ['Part 3 · Detail', 'What complimentary perk does the agent offer the family?', ['Free admission to an upstairs Fossil Dig Pit', 'Reserved front-row seats inside the planetarium', 'Two free robotic keychains from the gift shop', 'Lunch coupons for the museum courtyard cafe'], 0, 'ตอบ Free admission to an upstairs Fossil Dig Pit (ให้สิทธิ์เข้าบ่อขุดฟอสซิลชั้นบนฟรีปลอบใจ)'],
    ]),

    p3(7, 'l7-p3-13', [
      ['Man', 'us_m2', 'Claire, let’s pick which prototype turbine blade advances to full-scale endurance testing. Remember our structural cap—anything heavier than four point five kilograms is disqualified.'],
      ['Woman', 'ca_f', 'Right. Looking at the summary printout, Blade B and Blade C are both well under the weight limit, though wait—our lab intern accidentally swapped the efficiency numbers between Blade B and Blade C!'],
      ['Man', 'us_m2', 'Oh, good thing you checked the raw logs! That means Blade B actually achieved the higher true peak efficiency under four point five kilos, right?'],
      ['Woman', 'ca_f', 'Yes, Blade B scored forty-four percent in reality! Let’s schedule Blade B for Monday’s wind tunnel endurance run and fix that printout.'],
    ], doc('Lab Sheet', 'SolarWind Lab — Prototype Blade Summary', [['Test Rig', 'Subsonic Tunnel 2']], [
      tbl(['Model', 'Composite Material', 'Mass (kg)', 'Peak Efficiency'], [
        ['Blade A', 'Solid fiberglass', '5.2 kg', '46%'],
        ['Blade B', 'Hollow carbon fiber', '3.8 kg', '39%'],
        ['Blade C', 'Balsa-epoxy hybrid', '4.1 kg', '44%'],
        ['Blade D', 'Recycled aluminum', '4.9 kg', '41%'],
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Why was Blade A rejected despite having the highest listed percentage?', ['It exceeds the 4.5-kilogram maximum mass limit', 'Its hollow carbon-fiber shell cracked under load', 'Its peak efficiency dropped below forty percent', 'Subsonic Tunnel 2 cannot fit fiberglass blades'], 0, 'ตอบ It exceeds the 4.5-kilogram maximum mass limit (Blade A หนัก 5.2 กก. เกินเพดานน้ำหนักที่กำหนดไม่เกิน 4.5 กก.)'],
      ['Part 3 · Detail', 'What error on the summary sheet did the woman catch?', ['Two efficiency ratings were swapped between models', 'Mass weights were recorded in pounds instead of kilos', 'Blade D’s material was mislabeled as fiberglass', 'Test rig number 2 was omitted from the header'], 0, 'ตอบ Two efficiency ratings were swapped between models (ผู้ฝึกงานสลับค่าประสิทธิภาพของ Blade B และ Blade C บนใบสรุปผล)'],
      ['Part 3 · Detail', 'What is the true peak efficiency of Blade B?', ['44%', '39%', '41%', '46%'], 0, 'ตอบ 44% (เมื่อสลับค่าจริงกลับมา Blade B ได้ประสิทธิภาพสูงสุดที่แท้จริงคือ 44%)'],
    ]),

    // Set 7 Part 4 (10 Talks: 1-7 no doc, 8-10 with doc; 45-85 words each)
    p4(7, 'l7-p4-1', 'the following announcement', 'us_f',
      'Attention students and faculty dining at Oak Commons. Beginning Monday, two express mobile-ordering kiosks will open beside the south entrance so anyone picking up preordered bowls can skip the main cashier line. We are also proud to unveil a dedicated nut-free and sesame-free kitchen station along the east counter, staffed with separate utensils and prep boards. Please tap your university ID card at the kiosk screen to apply meal-plan credits automatically.',
      null, [
      ['Part 4 · Topic', 'What changes are taking place at Oak Commons next week?', ['Express pickup kiosks and an allergen-free station are opening', 'Evening dining hours are extending until midnight', 'Cash payments are no longer accepted at cashier desks', 'The south entrance walkway is closing for renovations'], 0, 'ตอบ Express pickup kiosks and an allergen-free station are opening (เปิดจุดรับอาหารสั่งล่วงหน้าและเคาน์เตอร์ครัวปลอดถั่ว/งาเริ่มวันจันทร์)'],
      ['Part 4 · Detail', 'How is food safety maintained at the new east counter station?', ['Dedicated utensils and cutting boards are used separately', 'Meals are delivered pre-sealed from an off-campus kitchen', 'Only raw fruit and cold beverages are served there', 'Students must register medical notes two days ahead'], 0, 'ตอบ Dedicated utensils and cutting boards are used separately (แยกอุปกรณ์ทำครัวและเขียงเฉพาะสำหรับโซนปลอดสารก่อภูมิแพ้)'],
      ['Part 4 · Action', 'What should diners do to pay with meal-plan credits at a kiosk?', ['Tap their university ID card on the kiosk screen', 'Ask a cashier for a printed barcode receipt', 'Link a credit card inside the dining web portal', 'Show a driver’s license at the east counter'], 0, 'ตอบ Tap their university ID card on the kiosk screen (ให้แตะบัตรนักศึกษา/บุคลากรที่หน้าจอคีออสเพื่อหักเครดิตอาหาร)'],
    ]),

    p4(7, 'l7-p4-2', 'the following tour guide talk', 'uk_m',
      'Welcome everyone to the Optics and Light Pavilion! Over the next forty minutes, we will test parabolic sound mirrors, split white beams through giant glass prisms, and step inside our infrared shadow room. Please keep camera flashes switched off throughout this gallery, as bright flashes disrupt the phosphor glow walls for other guests. Our group will reconvene beneath the brass Foucault pendulum in the central rotunda promptly at two o’clock.',
      null, [
      ['Part 4 · Location', 'Where is this talk most likely taking place?', ['Inside a science museum exhibition pavilion', 'At a university architecture studio', 'Inside a solar panel testing laboratory', 'In an outdoor campus botanical garden'], 0, 'ตอบ Inside a science museum exhibition pavilion (ไกด์นำชมโซนจัดแสดงแสงและทัศนศาสตร์ของพิพิธภัณฑ์วิทยาศาสตร์)'],
      ['Part 4 · Detail', 'Why does the guide ask guests to turn off camera flashes?', ['Bright flashes interfere with glow-wall displays for others', 'Glass prisms reflect dangerous UV rays back at cameras', 'Security policies ban photography inside the museum', 'Flashes trigger automated motion alarms near the mirrors'], 0, 'ตอบ Bright flashes interfere with glow-wall displays for others (แสงแฟลชจะรบกวนผนังเรืองแสงฟอสเฟอร์ของแขกท่านอื่น)'],
      ['Part 4 · Detail', 'Where should visitors meet at two o’clock?', ['Underneath the brass pendulum in the central rotunda', 'Outside the infrared shadow room doorway', 'Beside the museum’s main ticket counter', 'Near the giant glass prism display case'], 0, 'ตอบ Underneath the brass pendulum in the central rotunda (นัดรวมตัวเวลาบ่ายสองใต้ลูกตุ้มทองเหลืองตรงโถงกลมกลาง)'],
    ]),

    p4(7, 'l7-p4-3', 'the following excerpt from a meeting', 'au_f',
      'Great news to kick off our Renewable Storage Lab briefing—our joint federal grant application for next-generation grid batteries was approved in full yesterday! That funding lets us order the high-speed thermal imaging camera we requested back in March, plus hire two summer research fellows. Before any new batteries arrive, however, Facilities must schedule our mandatory high-voltage safety refresher next Thursday afternoon, so keep one to three P.M. open on your calendars.',
      null, [
      ['Part 4 · Purpose', 'What good news does the speaker share at the beginning?', ['A federal research grant application received full approval', 'A new battery manufacturer donated equipment to the lab', 'Summer research fellows completed safety certification', 'Solar panel installations finished ahead of budget'], 0, 'ตอบ A federal research grant application received full approval (ได้รับอนุมัติทุนวิจัยจากรัฐบาลกลางเต็มจำนวนแล้ว)'],
      ['Part 4 · Detail', 'What piece of equipment will the lab now purchase?', ['A high-speed thermal imaging camera', 'A subsonic wind tunnel airflow sensor', 'Two lithium battery recycling presses', 'An automated solar irradiance tracker'], 0, 'ตอบ A high-speed thermal imaging camera (เงินทุนนี้ทำให้สั่งซื้อกล้องถ่ายภาพความร้อนความเร็วสูงที่ขอไว้เมื่อเดือนมีนาคมได้)'],
      ['Part 4 · Action', 'What should listeners reserve on their calendars next Thursday?', ['One to three P.M. for a mandatory safety refresher', 'Nine to eleven A.M. for interviewing summer fellows', 'Two to four P.M. for unpacking thermal gear', 'Morning hours for touring the campus substation'], 0, 'ตอบ One to three P.M. for a mandatory safety refresher (ให้กันเวลา 13:00-15:00 น. วันพฤหัสฯ หน้าไว้อบรมทบทวนความปลอดภัยไฟฟ้าแรงสูง)'],
    ]),

    p4(7, 'l7-p4-4', 'the following voicemail message', 'ca_m',
      'Hello Professor Chen, this is Trevor from University Media Services calling on Thursday morning. Good news—we replaced the malfunctioning lecture-capture camera mounted in Auditorium 108 last night and ran a ten-minute test video using your lapel microphone profile. Everything looks crisp and stays centered on the main whiteboard. I’ve placed that sample clip in your faculty folder; please dial extension four-four-one-two if your vocal audio levels need adjusting before Monday’s class.',
      null, [
      ['Part 4 · Purpose', 'Why is Trevor leaving this voicemail?', ['To confirm an auditorium camera replacement is complete', 'To cancel Professor Chen’s Monday morning lecture', 'To request spare lapel microphones for Media Services', 'To explain how to upload slides to the student portal'], 0, 'ตอบ To confirm an auditorium camera replacement is complete (โทรมาแจ้งว่าเปลี่ยนกล้องบันทึกการสอนในห้องบรรยาย 108 เสร็จเรียบร้อยแล้ว)'],
      ['Part 4 · Detail', 'Where can Professor Chen view the sample test video?', ['Inside her faculty folder', 'On the auditorium projector screen', 'On the university’s public website', 'In an attached text message link'], 0, 'ตอบ Inside her faculty folder (นำคลิปทดสอบไปใส่ไว้ในโฟลเดอร์คณาจารย์ของอาจารย์เรียบร้อยแล้ว)'],
      ['Part 4 · Action', 'Why should Professor Chen call extension 4412?', ['If microphone volume levels require adjustment', 'If Monday’s lecture room needs to be changed', 'If whiteboards require cleaning before class', 'If guest logins fail to open the faculty folder'], 0, 'ตอบ If microphone volume levels require adjustment (ให้โทรต่อภายใน 4412 หากต้องการปรับระดับเสียงไมโครโฟน)'],
    ]),

    p4(7, 'l7-p4-5', 'the following advertisement', 'us_m2',
      'Experience the museum after dark at Saturday’s Night at the Observatory! From seven to ten P.M., families can step onto our newly opened rooftop deck and gaze at Saturn’s rings through computer-guided telescopes. Inside the dome, astrophysicist Dr. Maya Lin will present colorful deep-space nebula images captured earlier this month. Admission includes complimentary hot cider in the courtyard. Space is strictly capped at one hundred guests, so reserve early-bird passes at sciencemuseum.org today.',
      null, [
      ['Part 4 · Topic', 'What event is being advertised?', ['An evening astronomy program at a science museum', 'A grand opening of a campus robotics competition', 'A weekend seminar on residential solar panels', 'A daytime school field trip to an observatory'], 0, 'ตอบ An evening astronomy program at a science museum (โฆษณางานสังเกตการณ์ดาราศาสตร์ภาคค่ำที่พิพิธภัณฑ์วิทยาศาสตร์)'],
      ['Part 4 · Detail', 'What will Dr. Maya Lin showcase inside the dome?', ['Recent photographs of deep-space nebulae', 'Live demonstrations of wind tunnel blades', 'Models of antique brass ship compasses', 'Videos of deep ocean thermal vents'], 0, 'ตอบ Recent photographs of deep-space nebulae (ดร. Maya Lin จะนำเสนอภาพเนบิวลาในห้วงอวกาศที่ถ่ายได้ต้นเดือนนี้)'],
      ['Part 4 · Detail', 'Why does the speaker urge listeners to reserve early?', ['Attendance is limited to one hundred visitors', 'Hot cider supplies run out after eight o’clock', 'Telescope viewing only runs for thirty minutes', 'Early-bird rates expire in two hours'], 0, 'ตอบ Attendance is limited to one hundred visitors (จำกัดจำนวนผู้ร่วมงานเพียง 100 คนเท่านั้น)'],
    ]),

    p4(7, 'l7-p4-6', 'the following recorded message', 'uk_f2',
      'You have reached the Westfield University Registrar and Campus Services summer information line. While the Main Library atrium undergoes window restoration through August twelfth, in-person diploma and paper transcript pickups have relocated temporarily to the Welcome Pavilion beside Gate Two. Electronic PDF transcripts continue to be processed online within twenty-four hours at no extra fee. To speak directly with an academic records advisor during weekday office hours, stay on the line.',
      null, [
      ['Part 4 · Detail', 'Why were in-person transcript pickups moved temporarily?', ['The Main Library atrium is undergoing window repairs', 'The Welcome Pavilion added expanded parking spaces', 'Campus Services is reducing summer staff hours', 'Gate Two now serves as the university admissions desk'], 0, 'ตอบ The Main Library atrium is undergoing window repairs (โถงหอสมุดกลางกำลังปรับปรุงซ่อมแซมหน้าต่างจนถึงวันที่ 12 สิงหาคม)'],
      ['Part 4 · Detail', 'Where should students go to pick up paper diplomas in person?', ['To the Welcome Pavilion near Gate Two', 'To the Registrar basement mailroom', 'To the Student Union transit desk', 'To the Main Library side entrance'], 0, 'ตอบ To the Welcome Pavilion near Gate Two (ย้ายจุดรับเอกสารตัวจริงชั่วคราวไปที่ Welcome Pavilion ข้างประตู 2)'],
      ['Part 4 · Detail', 'How quickly are digital PDF transcripts issued?', ['Within twenty-four hours', 'Within three business days', 'After August twelfth', 'Immediately upon phone request'], 0, 'ตอบ Within twenty-four hours (เอกสารทรานสคริปต์แบบ PDF ยังคงดำเนินการออนไลน์ภายใน 24 ชั่วโมง)'],
    ]),

    p4(7, 'l7-p4-7', 'the following instructions', 'au_m',
      'Before anyone climbs up to inspect Rooftop Solar Array Four this morning, review two vital precautions. First, clip your safety harness directly onto the perimeter lifeline cable before stepping anywhere near the glass skylights. Second, shut off all DC isolator switches along the combiner box before loosening any panel clamps. Remember—we can’t afford a shortcut when storm clouds move in later! Let’s check each other’s clips right here at the stairwell.',
      null, [
      ['Part 4 · Topic', 'What task are listeners preparing to perform?', ['Inspecting solar panels on a building roof', 'Mounting wind turbine blades inside a test chamber', 'Replacing electrical breakers in a dorm basement', 'Washing glass skylights inside a museum atrium'], 0, 'ตอบ Inspecting solar panels on a building roof (เตรียมตัวขึ้นไปตรวจสอบแผงโซลาร์เซลล์ชุดที่ 4 บนดาดฟ้า)'],
      ['Part 4 · Detail', 'What must workers switch off before loosening panel clamps?', ['The DC isolator switches on the combiner box', 'The indoor lighting breakers near the stairwell', 'The main campus shuttle charging stations', 'The automated rooftop weather alarm'], 0, 'ตอบ The DC isolator switches on the combiner box (ต้องปิดสวิตช์ตัดไฟกระแสตรง DC isolator ที่กล่องรวมสายก่อนคลายตัวยึดแผง)'],
      ['Part 4 · Meaning', 'What does the speaker mean when he says, "we can’t afford a shortcut when storm clouds move in later"?', ['Rushing safety steps is dangerous because bad weather is approaching', 'Testing solar efficiency is impossible during cloudy afternoons', 'Shorter roof ladders cannot reach the upper glass skylights', 'Repair budgets must cover storm damage later this month'], 0, 'ตอบ Rushing safety steps is dangerous because bad weather is approaching (หมายความว่าห้ามลัดขั้นตอนความปลอดภัยเด็ดขาด เพราะช่วงบ่ายจะมีเมฆพายุเข้าซึ่งอันตรายมาก)'],
    ]),

    p4(7, 'l7-p4-8', 'the following announcement', 'ca_f',
      'Attention graduating seniors entering the Student Union Ballroom for today’s Campus Career Services Fair. Please note one room layout swap from the printed directory boards: Resume Review was originally assigned to Table Two, right? Well, because Study Abroad Advising switched to virtual video appointments this morning, Resume Review has moved over into Study Abroad’s corner booth for extra seating room. Remember to bring three printed copies of your resume.',
      doc('Floor Guide', 'Student Union Ballroom — Career Services Booths', [['Event', 'Spring Grad Fair']], [
        tbl(['Booth #', 'Campus Service', 'Advisor', 'Location Zone'], [
          ['Booth 1', 'Mock Interviews', 'K. Ramirez', 'North Entrance'],
          ['Booth 2', 'Resume Review', 'T. Brooks', 'Center Aisle'],
          ['Booth 3', 'Graduate School Info', 'Dr. Okafor', 'East Window'],
          ['Booth 4', 'Study Abroad Advising', 'M. Sato', 'South Corner'],
        ]),
      ]), [
      ['Part 4 · Graphic', 'Look at the graphic. At which booth can students now get their resumes reviewed?', ['Booth 4', 'Booth 1', 'Booth 2', 'Booth 3'], 0, 'ตอบ Booth 4 (ฝ่ายตรวจเรซูเม่ย้ายจาก Booth 2 ไปอยู่บูธมุมห้องที่เดิมระบุว่าเป็นของ Study Abroad Advising คือ Booth 4)'],
      ['Part 4 · Detail', 'Why did Study Abroad Advising leave its assigned booth?', ['It changed to virtual online appointments today', 'Advisor M. Sato is attending an overseas conference', 'Its tables lacked power outlets for laptops', 'Extra chairs were needed near the North Entrance'], 0, 'ตอบ It changed to virtual online appointments today (ย้ายไปให้คำปรึกษาแบบออนไลน์ผ่านวิดีโอทั้งหมดในวันนี้)'],
      ['Part 4 · Action', 'What should graduating students bring with them?', ['Three printed copies of their resume', 'Transcript requests stamped by the Registrar', 'Student ID badges for Mock Interviews', 'Laptops loaded with portfolio slides'], 0, 'ตอบ Three printed copies of their resume (เตือนให้นักศึกษาพกสำเนาเรซูเม่ฉบับพิมพ์มา 3 ชุด)'],
    ]),

    p4(7, 'l7-p4-9', 'the following tour guide talk', 'us_m',
      'Good morning, museum guests! Before you disperse for today’s Saturday hands-on science workshops, check the schedule carefully. The morning Rocketry Lab already filled every seat five minutes ago, and our afternoon Weather Forecasting workshop was shortened by thirty minutes so it wraps up promptly at three P.M. Therefore, if you still want open hands-on seats right after lunch, head straight to the workshop listed with electronics and breadboards!',
      doc('Schedule', 'National Science Museum — Saturday Workshops', [['Location', 'Education Wing']], [
        tbl(['Time', 'Workshop Title', 'Room', 'Open Seats'], [
          ['10:30–11:30 A.M.', 'Bottle Rocketry Lab', 'Room 201', '0 (Full)'],
          ['12:30–1:30 P.M.', 'Solar Breadboard Circuits', 'Room 204', '9 open'],
          ['2:00–3:30 P.M.', 'Weather Forecasting Desk', 'Room 202', '4 open'],
          ['3:45–4:45 P.M.', 'Fossil Casting Studio', 'Room 206', '6 open'],
        ]),
      ]), [
      ['Part 4 · Graphic', 'Look at the graphic. Which room hosts the post-lunch workshop the guide recommends?', ['Room 204', 'Room 201', 'Room 202', 'Room 206'], 0, 'ตอบ Room 204 (ผู้พูดแนะนำเวิร์กช็อปหลังมื้อเที่ยงที่เกี่ยวกับอุปกรณ์อิเล็กทรอนิกส์และ breadboards คือ Solar Breadboard Circuits ใน Room 204)'],
      ['Part 4 · Detail', 'How was the Weather Forecasting workshop adjusted today?', ['It will end thirty minutes earlier than printed', 'Its remaining four seats were filled at ten-thirty', 'It moved upstairs to the Fossil Casting Studio', 'It added extra rocketry demonstrations'], 0, 'ตอบ It will end thirty minutes earlier than printed (เวิร์กช็อปพยากรณ์อากาศช่วงบ่ายถูกลดเวลาลง 30 นาทีให้จบตอน 15:00 น. จากเดิม 15:30 น.)'],
      ['Part 4 · Detail', 'Which workshop currently has no spaces remaining?', ['Bottle Rocketry Lab', 'Solar Breadboard Circuits', 'Weather Forecasting Desk', 'Fossil Casting Studio'], 0, 'ตอบ Bottle Rocketry Lab (เวิร์กช็อปจรวดขวดน้ำรอบเช้าที่นั่งเต็มแล้วทั้งในเสียงและตาราง)'],
    ]),

    p4(7, 'l7-p4-10', 'the following excerpt from a meeting', 'uk_f',
      'Let’s check yesterday’s inverter output table from our rooftop test array. Several interns asked why Unit 2 dipped to fourteen kilowatts during afternoon sun—actually, Maintenance turned Unit 2 offline for twenty minutes while washing dust off West Wing panels, so its hardware is completely healthy. However, look closely at whichever unit logged the lowest DC voltage on this printout: its capacitor bank is failing and requires a swap this Friday.',
      doc('Telemetry', 'CleanGrid Lab — Inverter Output Log', [['Recorded', 'May 19, 3:00 P.M.']], [
        tbl(['Unit ID', 'Array Zone', 'DC Voltage (V)', 'Peak Output (kW)'], [
          ['Unit 1', 'South Roof', '612 V', '19.4 kW'],
          ['Unit 2', 'West Wing', '608 V', '14.0 kW'],
          ['Unit 3', 'East Canopy', '542 V', '16.8 kW'],
          ['Unit 4', 'Lab Shed', '615 V', '18.9 kW'],
        ]),
      ]), [
      ['Part 4 · Graphic', 'Look at the graphic. Which inverter requires a capacitor replacement on Friday?', ['Unit 3', 'Unit 1', 'Unit 2', 'Unit 4'], 0, 'ตอบ Unit 3 (ผู้พูดชี้ว่าเครื่องที่มีค่า DC Voltage ต่ำที่สุดในตารางตัวเก็บประจุกำลังเสื่อมและต้องเปลี่ยนวันศุกร์ ซึ่งในตารางคือ Unit 3 ที่ 542 V)'],
      ['Part 4 · Detail', 'Why did Unit 2 record only 14.0 kilowatts during the afternoon?', ['Maintenance switched it off briefly while cleaning panels', 'Heavy afternoon clouds shaded the West Wing roof', 'A faulty capacitor reduced its output voltage', 'Electricians disconnected it for safety testing'], 0, 'ตอบ Maintenance switched it off briefly while cleaning panels (ฝ่ายบำรุงรักษาปิดเครื่องชั่วคราว 20 นาทีเพื่อล้างฝุ่นบนแผงปีกตะวันตก)'],
      ['Part 4 · Topic', 'What is the main focus of this meeting segment?', ['Reviewing solar equipment diagnostics from a log sheet', 'Training interns to wash rooftop solar glass safely', 'Comparing battery storage grants across campus labs', 'Planning next month’s wind tunnel schedule'], 0, 'ตอบ Reviewing solar equipment diagnostics from a log sheet (ทบทวนผลบันทึกการทำงานและตรวจวินิจฉัยอุปกรณ์อินเวอร์เตอร์โซลาร์เซลล์)'],
    ]),

    // ==================== SET 8 ====================
    p1(8, 'l8-p1-1', 'uk_f', [
      'Banquet servers are arranging silverware beside white plates on a long table.',
      'Hotel guests are carrying breakfast trays away from a buffet line.',
      'Waitstaff are folding red cloth napkins inside a kitchen pantry.',
      'A caterer is pouring coffee from a silver carafe into ceramic cups.',
    ], 0, 'ตอบ Banquet servers are arranging silverware beside white plates on a long table. (พนักงานจัดเลี้ยงกำลังวางช้อนส้อมข้างจานสีขาวบนโต๊ะยาว)'),
    p1(8, 'l8-p1-2', 'us_m', [
      'Passengers are stepping off a municipal bus beside a shelter.',
      'A mechanic is checking a bus tire with a pressure gauge.',
      'Drivers are washing the windshield of a parked city coach.',
      'Toolboxes are stacked inside the luggage bay of a tour bus.',
    ], 1, 'ตอบ A mechanic is checking a bus tire with a pressure gauge. (ช่างซ่อมบำรุงกำลังใช้เกจวัดลมตรวจยางรถโดยสารประจำทาง)'),
    p1(8, 'l8-p1-3', 'ca_f', [
      'Customers are browsing hardcover novels beside a checkout desk.',
      'Wooden shelves packed with books line both sides of a narrow aisle.',
      'A clerk is climbing a rolling ladder to reach top-shelf binders.',
      'Open notebooks and ink bottles are scattered across a display table.',
    ], 1, 'ตอบ Wooden shelves packed with books line both sides of a narrow aisle. (ชั้นหนังสือไม้ที่เรียงหนังสือปกแข็งจนเต็มตั้งขนาบทั้งสองฝั่งของทางเดินแคบๆ)'),
    p1(8, 'l8-p1-4', 'au_m', [
      'A hotel guest holding a suitcase handle is checking in at a marble counter.',
      'Bellhops are unloading conference crates onto a lobby baggage cart.',
      'A receptionist is handing room keys to two arriving airline pilots.',
      'Tourists are reading city brochures seated in lobby armchairs.',
    ], 0, 'ตอบ A hotel guest holding a suitcase handle is checking in at a marble counter. (แขกโรงแรมที่จับคันชักกระเป๋าเดินทางกำลังเช็กอินหน้าเคาน์เตอร์หินอ่อน)'),
    p1(8, 'l8-p1-5', 'us_f2', [
      'A shopkeeper is tying a ribbon around a wrapped stationery box.',
      'A customer is testing fountain pens on a paper pad.',
      'Greeting cards are hanging vertically inside spinning wire racks.',
      'Envelope boxes are being unpacked from a cardboard shipping carton.',
    ], 0, 'ตอบ A shopkeeper is tying a ribbon around a wrapped stationery box. (พนักงานร้านเครื่องเขียนกำลังผูกริบบิ้นบนกล่องเครื่องเขียนที่ห่อเรียบร้อย)'),
    p1(8, 'l8-p1-6', 'uk_m', [
      'Commuters are queuing along a rainy sidewalk for an evening bus.',
      'Several city transit buses are parked side by side inside a covered depot.',
      'Workers are painting yellow lane lines across an empty garage floor.',
      'A bus engine has been lifted onto a metal hoist for repair.',
    ], 1, 'ตอบ Several city transit buses are parked side by side inside a covered depot. (รถโดยสารประจำทางหลายคันจอดเรียงเคียงกันภายในอู่ซ่อมที่มีหลังคาคลุม)'),

    // Set 8 Part 2 (25 Qs)
    p2(8, 'l8-p2-1', 'uk_f', 'us_m', 'Where are the extra chafing dishes stored for the grand ballroom dinner?', ['In the banquet pantry right behind Kitchen Two.', 'About four hundred conference delegates.', 'Yes, the plated salmon goes out at seven.'], 0, 'ตอบ In the banquet pantry right behind Kitchen Two. (ถามสถานที่เก็บอ่างอุ่นอาหาร Where ตอบอยู่ในห้องเก็บอุปกรณ์จัดเลี้ยงหลังครัว 2)'),
    p2(8, 'l8-p2-2', 'us_m', 'au_f', 'Who inspected the brake pads on Bus Route 14 this morning?', ['Only forty-five thousand miles since the last overhaul.', 'Senior technician Omar signed the safety sheet at six.', 'Along the northern loop past Oak Park.'], 1, 'ตอบ Senior technician Omar signed the safety sheet at six. (ถามบุคคล Who ตอบช่างอาวุโส Omar เซ็นใบตรวจความปลอดภัยตอนหกโมงเช้า)'),
    p2(8, 'l8-p2-3', 'ca_f', 'uk_m', 'When does the boutique bookshop’s author signing event begin tonight?', ['Right beside the poetry reading nook.', 'Hardcover memoirs sold out yesterday.', 'Doors open at six-thirty, with readings at seven.'], 2, 'ตอบ Doors open at six-thirty, with readings at seven. (ถามเวลาเริ่มงาน When ตอบเปิดประตู 18:30 น. และเริ่มอ่านหนังสือ 19:00 น.)'),
    p2(8, 'l8-p2-4', 'au_m', 'us_f', 'Should we set up the convention coffee break outside the foyer or inside Salon C?', ['Keep it outside in the foyer so keynote doors stay quiet.', 'Yes, both decaf and dark roast urns are brewed.', 'Every morning between ten and ten-fifteen.'], 0, 'ตอบ Keep it outside in the foyer so keynote doors stay quiet. (คำถามเลือกสถานที่ A or B ตอบให้จัดที่โถงหน้าห้องเพื่อไม่ให้เสียงรบกวนห้องปาฐกถา)'),
    p2(8, 'l8-p2-5', 'us_f2', 'uk_m', 'Why was the downtown express bus rerouted past Elm Street?', ['Every twelve minutes during weekday peak hours.', 'Water main crews dug up the intersection on Main.', 'Ask the transit booth clerk near Bay Three.'], 1, 'ตอบ Water main crews dug up the intersection on Main. (ถามเหตุผล Why ตอบทีมซ่อมท่อประปาขุดเจาะสี่แยกถนน Main)'),
    p2(8, 'l8-p2-6', 'uk_m', 'ca_m', 'Haven’t the custom linen fountain pen journals arrived from Kyoto yet?', ['No, I prefer wide-ruled spiral notebooks.', 'Customs cleared the parcel this morning—it’s arriving tomorrow.', 'Usually priced around thirty-two dollars each.'], 1, 'ตอบ Customs cleared the parcel this morning—it’s arriving tomorrow. (คำถามปฏิเสธ Haven’t... ตอบแจ้งข้อเท็จจริงว่าผ่านศุลกากรเช้านี้และจะมาส่งพรุ่งนี้)'),
    p2(8, 'l8-p2-7', 'us_m2', 'us_f', 'How many banquet tables need floral centerpieces for the medical summit?', ['Thirty-two round tables across Ballroom A and B.', 'White orchids with eucalyptus leaves.', 'Our hotel florist delivers at four o’clock.'], 0, 'ตอบ Thirty-two round tables across Ballroom A and B. (ถามจำนวน How many ตอบโต๊ะกลม 32 โต๊ะ)'),
    p2(8, 'l8-p2-8', 'uk_f2', 'au_m', 'Could you restock the hotel lobby’s complimentary mint bowl before noon?', ['Yes, the shuttle departs for the airport at eleven.', 'Of course—let me grab a fresh sealed bag from the storeroom.', 'Beside the concierge bell near the elevators.'], 1, 'ตอบ Of course—let me grab a fresh sealed bag from the storeroom. (ขอให้เติมลูกอมที่ล็อบบี้ ตอบรับทันทีว่าจะไปหยิบถุงใหม่จากห้องเก็บของ)'),
    p2(8, 'l8-p2-9', 'ca_m', 'us_f', 'The air compressor in Maintenance Bay Three keeps shutting off unexpectedly.', ['No, the pneumatic wrenches are brand new.', 'Let’s call the shop electrician before someone gets stranded.', 'Every bus gets tire pressure checks weekly.'], 1, 'ตอบ Let’s call the shop electrician before someone gets stranded. (ประโยคบอกเล่าแจ้งปัญหาเครื่องอัดลมตัดไฟ ตอบเสนอให้เรียกช่างไฟฟ้าของอู่มาตรวจ)'),
    p2(8, 'l8-p2-10', 'us_f', 'uk_f2', 'Which stationery supplier offers recycled cotton envelopes in blush pink?', ['PaperCraft Mill carries them in three standard sizes.', 'Yes, calligraphy gold ink shows up nicely on cotton.', 'We usually bundle packs of twenty-five envelopes.'], 0, 'ตอบ PaperCraft Mill carries them in three standard sizes. (ถามเลือกผู้จำหน่าย Which supplier ตอบชื่อบริษัท PaperCraft Mill ที่มีครบ 3 ขนาด)'),
    p2(8, 'l8-p2-11', 'au_f', 'us_m2', 'How long does an overnight hotel guest laundry press take?', ['Drop garments by nine P.M. and they return before seven.', 'Complimentary pressing for executive suite bookings.', 'Two wool suits and three dress shirts.'], 0, 'ตอบ Drop garments by nine P.M. and they return before seven. (ถามระยะเวลา How long ตอบส่งซักรีดก่อนสามทุ่มจะได้คืนก่อนเจ็ดโมงเช้า)'),
    p2(8, 'l8-p2-12', 'uk_m', 'ca_f', 'Would you rather buy the hardcover biography or wait for next spring’s paperback?', ['The hardcover includes sixteen extra archival photographs.', 'Yes, the author lives near Harbor Square.', 'On the staff recommendations table near the door.'], 0, 'ตอบ The hardcover includes sixteen extra archival photographs. (คำถามเลือกซื้อปกแข็งหรือรอปกอ่อน ตอบเลี่ยงโดยให้เหตุผลสนับสนุนปกแข็งว่ามีภาพแถม 16 หน้า)'),
    p2(8, 'l8-p2-13', 'us_m', 'uk_f', 'Where should mechanics place worn transit alternator belts for recycling?', ['Drop them in the labeled rubber bin beside the oil drums.', 'Usually after sixty thousand urban miles.', 'Because city regulations require separate disposal.'], 0, 'ตอบ Drop them in the labeled rubber bin beside the oil drums. (ถามสถานที่ Where ตอบให้ทิ้งในถังยางที่มีป้ายกำกับข้างถังน้ำมัน)'),
    p2(8, 'l8-p2-14', 'uk_f', 'au_m', 'Why don’t we bundle our brass bookmarks with leather reading journals?', ['No, I didn’t mark the receipt price.', 'Great idea—they’d sell quickly as graduation gifts!', 'On the upper shelf next to wax seal kits.'], 1, 'ตอบ Great idea—they’d sell quickly as graduation gifts! (Why don’t we เสนอจัดชุดสินค้า ตอบเห็นด้วยว่าเป็นไอเดียดีสำหรับการขายเป็นของขวัญรับปริญญา)'),
    p2(8, 'l8-p2-15', 'us_m2', 'ca_f', 'The city transit inspection deadline falls on the last Friday of October, doesn’t it?', ['Forty-two diesel and hybrid buses in total.', 'Actually, the state board moved it up to October eighteenth.', 'That inspection pit has bright LED lights underneath.'], 1, 'ตอบ Actually, the state board moved it up to October eighteenth. (Tag question ถามย้ำวันกำหนด ตอบแก้ไขข้อมูลว่าบอร์ดเลื่อนขึ้นมาเป็นวันที่ 18 ตุลาคมแล้ว)'),
    p2(8, 'l8-p2-16', 'ca_m', 'uk_f2', 'Who authorized overtime pay for the banquet kitchen staff on Saturday?', ['Hospitality Director Morales signed off when the gala doubled.', 'Three pastry cooks and four dishwashers.', 'Inside the hotel accounting office on floor two.'], 0, 'ตอบ Hospitality Director Morales signed off when the gala doubled. (ถามบุคคล Who ตอบผู้อำนวยการฝ่ายบริการ Morales เป็นคนอนุมัติ)'),
    p2(8, 'l8-p2-17', 'us_f2', 'au_m', 'How much is the conference room AV projector rental per full day?', ['Two hundred forty dollars, including technical setup.', 'Yes, wireless lapel microphones come with the kit.', 'In Magnolia Meeting Room on the mezzanine.'], 0, 'ตอบ Two hundred forty dollars, including technical setup. (ถามราคา How much ตอบ 240 ดอลลาร์รวมค่าติดตั้ง)'),
    p2(8, 'l8-p2-18', 'uk_m', 'us_f', 'Did the morning shuttle driver top off the diesel buses before seven?', ['Every weekday morning except public holidays.', 'No, I usually take the subway to the depot.', 'Fuel pump three broke down, so two coaches still need diesel.'], 2, 'ตอบ Fuel pump three broke down, so two coaches still need diesel. (ถามว่าเติมน้ำมันครบหรือยัง ตอบข้อเท็จจริงว่าหัวจ่าย 3 เสีย เลยยังเหลือรถ 2 คันที่ต้องเติม)'),
    p2(8, 'l8-p2-19', 'au_f', 'us_m', 'This new cedarwood stationery cabinet smells wonderful inside the bookshop!', ['I know—customers keep asking where we bought the display case!', 'Yes, we restocked Japanese fountain inks today.', 'Just wrap two packs of greeting cards, please.'], 0, 'ตอบ I know—customers keep asking where we bought the display case! (ประโยคบอกเล่าชมตู้ไม้ใหม่ ตอบรับสอดคล้องว่าลูกค้าถามกันตลอดว่าซื้อมาจากไหน)'),
    p2(8, 'l8-p2-20', 'ca_f', 'uk_m', 'When will the hotel housekeeping carts be equipped with quiet rubber wheels?', ['Along all guest corridors above the fourth floor.', 'Maintenance is swapping casters on ten carts every Wednesday.', 'Mostly spare towels and shampoo bottles.'], 1, 'ตอบ Maintenance is swapping casters on ten carts every Wednesday. (ถามเวลา/ความคืบหน้า When ตอบฝ่ายซ่อมบำรุงกำลังทยอยเปลี่ยนล้อทุกวันพุธสัปดาห์ละ 10 คัน)'),
    p2(8, 'l8-p2-21', 'uk_f2', 'us_m2', 'Do you know if the transit garage still stocks 24-volt wiper motors?', ['I replaced two wiper blades yesterday afternoon.', 'Let’s check the parts cage computer—we used the last boxed pair Monday.', 'Around eighty dollars per replacement motor.'], 1, 'ตอบ Let’s check the parts cage computer—we used the last boxed pair Monday. (ถามสต็อกอะไหล่ ตอบให้ช่วยดูคอมพิวเตอร์คลังอะไหล่เพราะเพิ่งใช้คู่สุดท้ายไปเมื่อวันจันทร์)'),
    p2(8, 'l8-p2-22', 'us_m', 'ca_f', 'What time does the bookshop close on rainy Sunday evenings?', ['Six P.M. year-round, regardless of the weather.', 'To let staff organize the poetry shelves.', 'Beside the tram stop on Cedar Street.'], 0, 'ตอบ Six P.M. year-round, regardless of the weather. (ถามเวลาปิดทำการ What time ตอบปิดหกโมงเย็นตลอดทั้งปีไม่ว่าฝนจะตกหรือไม่)'),
    p2(8, 'l8-p2-23', 'au_m', 'uk_f', 'Can you taste-test the vegan mushroom tartlets before plating three hundred?', ['Yes, the convention menu features seasonal vegetables.', 'Gladly—hand me a clean spoon near the pastry counter.', 'Inside the walk-in convection oven rack.'], 1, 'ตอบ Gladly—hand me a clean spoon near the pastry counter. (ขอให้ช่วยชิมอาหารก่อนจัดจาน ตอบยินดีพร้อมขอช้อนสะอาด)'),
    p2(8, 'l8-p2-24', 'us_f', 'uk_m', 'Have the convention organizers confirmed dietary restrictions for Friday’s lunch?', ['Roughly two hundred fifty engineering delegates.', 'They promised to email the finalized allergy spreadsheet by three today.', 'At the Crescent Harbor Hotel Ballroom.'], 1, 'ตอบ They promised to email the finalized allergy spreadsheet by three today. (ถามว่ายืนยันข้อมูลอาหารแพ้หรือยัง ตอบผู้จัดงานรับปากว่าจะส่งสเปรดชีตให้ภายในบ่ายสามวันนี้)'),
    p2(8, 'l8-p2-25', 'ca_m', 'au_f', 'Whose brass inkwell was left on the front wrapping counter?', ['Probably Ms. Park’s—she brought it in to match turquoise ink.', 'Yes, handmade calligraphy pens make thoughtful gifts.', 'Place the extra wrapping twine inside the drawer.'], 0, 'ตอบ Probably Ms. Park’s—she brought it in to match turquoise ink. (ถามเจ้าของสิ่งของ Whose ตอบน่าจะเป็นของคุณ Park ที่นำมาเทียบสีหมึก)'),

    // Set 8 Part 3 (13 Conversations: 1-10 no doc, 11-13 with doc; >=2 3-speaker convs)
    p3(8, 'l8-p3-1', [
      ['Woman', 'us_f', 'Carlos, the tech summit keynote wrapped up twenty minutes ahead of schedule, so two hundred hungry guests are already heading toward the breakfast foyer!'],
      ['Man', 'uk_m', 'Whoa—our kitchen ovens still have six trays of croissants finishing! Can waitstaff serve the fruit bowls and iced juices right away while pastries bake?'],
      ['Woman', 'us_f', 'Already done—coffee servers just unlocked the Ballroom B airwall too. How many minutes until those first hot trays come out?'],
      ['Man', 'uk_m', 'Give us seven minutes. Tell your runners to wait by the north kitchen swinging doors so we can roll them straight onto the warming lamps.'],
    ], null, [
      ['Part 3 · Problem', 'Why do hotel catering staff need to speed up breakfast service?', ['A conference keynote session finished twenty minutes early', 'Kitchen ovens experienced a power outage this morning', 'Two hundred extra walk-in guests registered at dawn', 'The Ballroom B airwall jammed before breakfast opened'], 0, 'ตอบ A conference keynote session finished twenty minutes early (การบรรยายหลักจบเร็วกว่ากำหนด 20 นาที แขกจึงเดินออกมาทานอาหารเช้าก่อนเวลา)'],
      ['Part 3 · Detail', 'What items are waitstaff serving immediately while pastries finish baking?', ['Fruit bowls and cold juices', 'Hot coffee and scrambled eggs', 'Oatmeal cups and yogurt jars', 'Plated toast and butter dishes'], 0, 'ตอบ Fruit bowls and cold juices (เสิร์ฟชามผลไม้และน้ำผลไม้เย็นให้แขกก่อนระหว่างรอครัวซองต์อบเสร็จ)'],
      ['Part 3 · Action', 'Where does the man instruct food runners to wait?', ['Outside the north kitchen swinging doors', 'Beside the Ballroom B coffee urns', 'In the foyer registration line', 'Next to the pastry storage pantry'], 0, 'ตอบ Outside the north kitchen swinging doors (ให้พนักงานเสิร์ฟไปรอรับถาดร้อนที่ประตูบานสวิงฝั่งเหนือของครัว)'],
    ]),

    p3(8, 'l8-p3-2', [
      ['Man', 'au_m', 'Nadia, Bus 412’s front wheelchair ramp stalled halfway down during this morning’s pre-trip inspection—the driver couldn’t deploy or retract it.'],
      ['Woman', 'ca_f', 'Not good! Did you test the manual override pump, or is the hydraulic pressure sensor dead?'],
      ['Man', 'au_m', 'The sensor’s totally unresponsive, and our vendor won’t deliver replacement sensors until Thursday afternoon.'],
      ['Woman', 'ca_f', 'Wait—Bus 309 over in Bay 6 is waiting two weeks for a transmission rebuild anyway. Let’s pull its working ramp sensor right now so Bus 412 makes the noon route!'],
    ], null, [
      ['Part 3 · Problem', 'What issue is affecting Bus 412?', ['Its front wheelchair ramp stopped moving halfway', 'Its transmission failed during morning inspection', 'Its hydraulic override pump leaked onto the floor', 'Its noon route driver called in absent'], 0, 'ตอบ Its front wheelchair ramp stopped moving halfway (ทางลาดสำหรับรถเข็นด้านหน้าของรถบัส 412 ค้างกลางคันตอนตรวจสภาพ)'],
      ['Part 3 · Detail', 'When will ordered replacement sensors arrive from the vendor?', ['On Thursday afternoon', 'Within two hours', 'Early tomorrow morning', 'In two weeks'], 0, 'ตอบ On Thursday afternoon (ซัพพลายเออร์จะส่งอะไหล่เซนเซอร์ใหม่มาได้เร็วสุดบ่ายวันพฤหัสบดี)'],
      ['Part 3 · Proposal', 'What solution does the woman propose?', ['Borrowing a matching sensor from a bus parked in Bay 6', 'Moving noon route riders onto smaller shuttle vans', 'Operating the wheelchair ramp manually all week', 'Sending Bus 412 to an outside repair garage'], 0, 'ตอบ Borrowing a matching sensor from a bus parked in Bay 6 (เสนอให้ถอดเซนเซอร์ที่ยังใช้ได้จากรถบัส 309 ที่จอดรอซ่อมเกียร์ในช่องจอด 6 มาใส่แทนชั่วคราว)'],
    ]),

    p3(8, 'l8-p3-3', [
      ['Woman', 'uk_f2', 'Sam, a customer’s backpack clipped our rotating greeting card rack by the front window, and now the wooden base tilts slightly whenever anyone spins it.'],
      ['Man', 'us_m2', 'Ugh, right next to that shelf of hand-blown glass inkwells? If the rack tips over during weekend crowds, we could lose half our stationery display!'],
      ['Woman', 'uk_f2', 'Exactly why we should nip that in the bud before Saturday. Do we have L-shaped steel brackets in the back supply closet?'],
      ['Man', 'us_m2', 'Yes! I’ll anchor the rack’s base to the floor trim right after I relocate those fragile inkwells onto the high wall shelf.'],
    ], null, [
      ['Part 3 · Problem', 'What happened to the greeting card display rack?', ['A customer bumped it and made the base unstable', 'Its rotating steel bearings rusted near the window', 'Greeting card envelopes spilled onto the shop floor', 'Weekend crowds blocked access to the front counter'], 0, 'ตอบ A customer bumped it and made the base unstable (เป้ของลูกค้าชนชั้นวางการ์ดอวยพรจนฐานไม้เอียงโยกเยก)'],
      ['Part 3 · Meaning', 'What does the woman mean when she says, "we should nip that in the bud before Saturday"?', ['They must repair the wobbling rack immediately before weekend shoppers arrive', 'They need to prune potted plants along the bookstore window display', 'They should discount old greeting cards ahead of Saturday’s sale', 'They ought to order a smaller circular stand next week'], 0, 'ตอบ They must repair the wobbling rack immediately before weekend shoppers arrive (หมายความว่าต้องรีบแก้ปัญหาให้จบตั้งแต่เนิ่นๆ ก่อนคนแน่นร้านวันเสาร์)'],
      ['Part 3 · Action', 'What will the man do first?', ['Move fragile glass inkwells to a safer wall shelf', 'Purchase steel L-brackets at a hardware store', 'Sweep broken glass beside the front window', 'Restock greeting cards inside the back closet'], 0, 'ตอบ Move fragile glass inkwells to a safer wall shelf (ผู้ชายจะย้ายขวดหมึกแก้วที่แตกง่ายขึ้นไปวางบนชั้นติดผนังที่สูงปลอดภัยก่อนยึดฐาน)'],
    ]),

    p3(8, 'l8-p3-4', [
      ['Woman1', 'us_f2', 'Hi everyone—sorry for the last-minute scramble, though our biotech association gala just added thirty nut-free guests for tonight’s seven o’clock dinner!'],
      ['Man', 'ca_m', 'Thirty more plated entrees is doable, Elena—our hotel kitchen stocked extra herb-roasted chicken—though what about dessert? Our hazelnut tarts are out for those guests.'],
      ['Woman2', 'au_f', 'No worries! My pastry crew prepared extra dark-chocolate berry mousse cups in sealed allergen-free trays—we can garnish thirty plates quickly with fresh mint.'],
      ['Woman1', 'us_f2', 'What a lifesaver! Do we need extra floor servers to handle the higher headcount?'],
      ['Man', 'ca_m', 'I’m pulling two experienced servers over from our quiet Patio Lounge from six to ten tonight so service stays seamless.'],
    ], null, [
      ['Part 3 · Problem', 'Why is Elena requesting urgent menu changes for tonight’s gala?', ['Thirty guests with nut allergies were added to the dinner', 'The hotel ran out of herb-roasted chicken entrees', 'The seven o’clock biotech dinner was moved to Patio Lounge', 'Hazelnut tart crusts burned inside the pastry oven'], 0, 'ตอบ Thirty guests with nut allergies were added to the dinner (งานเลี้ยงกาล่าเพิ่งเพิ่มรายชื่อแขกที่แพ้ถั่วอีก 30 คนสำหรับมื้อค่ำคืนนี้)'],
      ['Part 3 · Detail', 'How will the pastry chef accommodate the added guests?', ['By serving berry mousse cups garnished with mint', 'By baking gluten-free hazelnut tarts from scratch', 'By ordering packaged sorbet from a nearby bakery', 'By replacing all gala desserts with fresh fruit'], 0, 'ตอบ By serving berry mousse cups garnished with mint (เชฟขนมหวานเตรียมถ้วยมูสเบอร์รีช็อกโกแลตปลอดสารก่อภูมิแพ้ไว้แล้ว แค่แต่งหน้าด้วยใบสะระแหน่)'],
      ['Part 3 · Action', 'How will the man ensure sufficient dining room staff tonight?', ['By reassigning two servers from the Patio Lounge', 'By hiring temporary banquet staff through an agency', 'By having kitchen pastry cooks help clear tables', 'By shifting dinner service thirty minutes later'], 0, 'ตอบ By reassigning two servers from the Patio Lounge (ดึงพนักงานเสิร์ฟที่มีประสบการณ์ 2 คนจาก Patio Lounge มาช่วยช่วง 18:00-22:00 น.)'],
    ]),

    p3(8, 'l8-p3-5', [
      ['Man', 'uk_m', 'Carla, Bus 118 just failed its quarterly exhaust opacity check—its diesel particulate filter is heavily clogged with soot.'],
      ['Woman', 'us_f', 'Ugh, Route 22 already has reduced afternoon frequency! Can our garage clean that filter today, or does it need an entire swap?'],
      ['Man', 'uk_m', 'We can bake it in our thermal regeneration oven right here, though that cycle takes four full hours plus cool-down time.'],
      ['Woman', 'us_f', 'Let’s pull Bus 118 into Bake Bay 1 now, and I’ll assign standby coach 408 to cover Route 22’s evening commuter rush.'],
    ], null, [
      ['Part 3 · Problem', 'Why cannot Bus 118 operate on Route 22 this afternoon?', ['Its clogged exhaust filter caused it to fail emissions testing', 'Its diesel fuel tank developed a slow leak', 'A regeneration oven blocked its exit from Bay 1', 'Standby coach 408 broke down during morning rush'], 0, 'ตอบ Its clogged exhaust filter caused it to fail emissions testing (ไส้กรองอนุภาคไอเสียอุดตันจนไม่ผ่านการตรวจวัดควันดำ)'],
      ['Part 3 · Detail', 'How long does the thermal filter-cleaning process take?', ['More than four hours including cool-down', 'Roughly forty-five minutes', 'Until tomorrow afternoon', 'Two hours during evening rush'], 0, 'ตอบ More than four hours including cool-down (การอบทำความสะอาดใช้เวลา 4 ชั่วโมงเต็มบวกเวลาพักให้เย็นอีก)'],
      ['Part 3 · Action', 'How will Route 22 maintain evening commuter service?', ['By deploying standby bus 408 onto the route', 'By combining Route 22 riders onto Bus 118 later', 'By outsourcing afternoon runs to charter coaches', 'By extending morning bus drivers’ shift hours'], 0, 'ตอบ By deploying standby bus 408 onto the route (ส่งรถโดยสารสำรองหมายเลข 408 ไปวิ่งแทนสาย 22 ช่วงชั่วโมงเร่งด่วนตอนเย็น)'],
    ]),

    p3(8, 'l8-p3-6', [
      ['Woman', 'ca_f', 'Excuse me, I’m buying a retirement gift for my architecture professor—she sketches outdoors with watercolor washes and waterproof fountain pen ink.'],
      ['Man', 'au_m', 'Oh, she’ll love our cold-press cotton sketchbooks! Let me show you this landscape format with 300-gram acid-free paper so wet washes won’t buckle the pages.'],
      ['Woman', 'ca_f', 'That paper feels wonderfully sturdy! Do you also carry black pigment ink that won’t smudge when brushed over with water?'],
      ['Man', 'au_m', 'Yes, right beside the register—and you’re welcome to test a fine nib dipped in that exact ink on our counter scratch pad before deciding.'],
    ], null, [
      ['Part 3 · Topic', 'Who is the customer shopping for?', ['A retiring architecture professor', 'A college stationery store manager', 'An art school student starting watercolor class', 'A visiting museum sketch artist'], 0, 'ตอบ A retiring architecture professor (ลูกค้ามาหาซื้อของขวัญเกษียณให้อาจารย์คณะสถาปัตยกรรม)'],
      ['Part 3 · Detail', 'Why does the clerk recommend 300-gram cotton paper?', ['It resists warping when wet watercolor washes are applied', 'It absorbs fountain pen pigment ink faster than cardboard', 'Its spiral binding folds flat inside small travel bags', 'It costs less than imported linen sketch pads'], 0, 'ตอบ It resists warping when wet watercolor washes are applied (กระดาษหนา 300 แกรมไร้กรดไม่บิดงอง่ายเมื่อลงสีน้ำเปียก)'],
      ['Part 3 · Detail', 'What does the clerk invite the customer to do near the register?', ['Test a fountain pen nib using waterproof black ink', 'Wrap the sketchbook in complimentary linen paper', 'Browse discounted watercolor paint palettes', 'Sign up for a weekend calligraphy workshop'], 0, 'ตอบ Test a fountain pen nib using waterproof black ink (เชิญให้ทดลองเขียนด้วยหัวปากกาหมึกซึมและหมึกดำกันน้ำบนกระดาษลองเขียนที่เคาน์เตอร์)'],
    ]),

    p3(8, 'l8-p3-7', [
      ['Woman', 'uk_f', 'Mark, the ninth-floor hallway baseboard varnish work finished this morning, though Suite 904 still smells noticeably sharp—and our keynote speaker checks in at two!'],
      ['Man', 'us_m', 'Definitely can’t put Dr. Sato into a suite smelling like fresh paint fumes! Is Corner Suite 1102 upstairs already inspected and cleared?'],
      ['Woman', 'uk_f', 'Yes, housekeeping finished 1102 ten minutes ago—it has panoramic harbor views and zero hallway maintenance nearby.'],
      ['Man', 'us_m', 'Upgrade Dr. Sato into 1102 immediately without charge, and ask Room Service to place a complimentary fruit and sparkling water tray inside before two.'],
    ], null, [
      ['Part 3 · Problem', 'Why is Suite 904 unsuitable for Dr. Sato’s check-in?', ['Strong varnish odors linger from nearby hallway work', 'Housekeeping has not finished cleaning the suite yet', 'A panoramic harbor window failed to seal tightly', 'Room Service mistakenly delivered another guest’s luggage'], 0, 'ตอบ Strong varnish odors linger from nearby hallway work (กลิ่นน้ำยาเคลือบเงาไม้ที่ทางเดินชั้น 9 ยังฉุนอยู่มาก)'],
      ['Part 3 · Detail', 'Why is Suite 1102 a good alternative?', ['It is freshly inspected and away from ongoing work', 'It sits closer to the ground-floor convention ballroom', 'It features an in-room espresso machine and desk', 'It has two separate bedrooms for conference aides'], 0, 'ตอบ It is freshly inspected and away from ongoing work (ห้อง 1102 เพิ่งตรวจความเรียบร้อยเสร็จและอยู่ห่างจากโซนทาสีซ่อมบำรุง)'],
      ['Part 3 · Action', 'What will Room Service place inside Suite 1102?', ['A complimentary tray of fruit and sparkling water', 'Printed schedules for the afternoon keynote', 'An air purifier from the housekeeping closet', 'A gift certificate for the hotel dining room'], 0, 'ตอบ A complimentary tray of fruit and sparkling water (ให้รูมเซอร์วิสจัดถาดผลไม้และน้ำแร่อัดแก๊สอภินันทนาการไปวางต้อนรับก่อนบ่ายสอง)'],
    ]),

    p3(8, 'l8-p3-8', [
      ['Man1', 'ca_m', 'Hold on, Elena—before you pull Bus 319 onto Route 8, look up at the front digital LED destination sign. It’s scrolling scrambled symbols instead of Downtown Express!'],
      ['Woman', 'uk_f2', 'Oh, good catch! Passengers at the curb wouldn’t know where I’m heading. Can we reboot it from the driver’s console?'],
      ['Man2', 'us_m2', 'I already tried a console reboot—the route controller memory chip corrupted after last night’s firmware push. Give me five minutes with my laptop right here at the bay door to re-flash the Route 8 file.'],
      ['Man1', 'ca_m', 'Appreciate the quick turnaround, Devon. Elena, grab a laminated paper Route 8 windshield card from Dispatch just in case as backup.'],
    ], null, [
      ['Part 3 · Problem', 'What issue is occurring on Bus 319?', ['Its exterior LED route sign is displaying garbled text', 'The driver’s cabin console lost battery voltage', 'Transit dispatch printed wrong Route 8 schedules', 'Last night’s firmware update disabled brake sensors'], 0, 'ตอบ Its exterior LED route sign is displaying garbled text (ป้ายไฟ LED บอกสายด้านหน้ารถแสดงสัญลักษณ์มั่วอ่านไม่ออก)'],
      ['Part 3 · Detail', 'Who is Devon in this conversation?', ['A transit electrical or diagnostic technician', 'A municipal downtown express bus driver', 'A passenger waiting at the Route 8 curb', 'A software vendor calling from headquarters'], 0, 'ตอบ A transit electrical or diagnostic technician (มีโน้ตบุ๊กมาเชื่อมต่อรีแฟลชไฟล์ป้ายไฟดิจิทัลให้รถบัส)'],
      ['Part 3 · Action', 'What backup item is Elena told to pick up from Dispatch?', ['A printed paper windshield route card', 'An extra rechargeable laptop battery', 'A handheld two-way garage radio', 'A spare digital controller memory chip'], 0, 'ตอบ A printed paper windshield route card (ให้ไปหยิบป้ายกระดาษเคลือบพลาสติกบอกสาย 8 มาวางหน้ารถสำรองไว้ด้วย)'],
    ]),

    p3(8, 'l8-p3-9', [
      ['Woman', 'au_f', 'Leo, registrations for Thursday night’s mystery novelist talk just hit thirty-four readers—our back reading nook barely squeezes eighteen chairs!'],
      ['Man', 'ca_m', 'Whoa, that author’s latest hardcover really took off! Could we clear the center tables out of the Poetry Alcove near the skylight instead?'],
      ['Woman', 'au_f', 'That open alcove easily seats thirty-five folding chairs, plus the standing microphone reaches our corner outlet.'],
      ['Man', 'ca_m', 'Awesome! Let’s stack forty signed hardcovers right next to the front register so guests can grab copies smoothly as they file out.'],
    ], null, [
      ['Part 3 · Problem', 'Why must Thursday’s author talk change locations inside the bookshop?', ['Attendance exceeded the capacity of the reading nook', 'Roof leaks damaged carpeting in the back corner', 'The mystery novelist requested natural skylight lighting', 'Folding chairs are currently stacked by the register'], 0, 'ตอบ Attendance exceeded the capacity of the reading nook (มียอดลงทะเบียนถึง 34 คน แต่มุมอ่านหนังสือด้านหลังจุได้แค่ 18 ที่นั่ง)'],
      ['Part 3 · Detail', 'How will the speakers prepare the Poetry Alcove?', ['By moving center display tables aside for folding chairs', 'By installing extra overhead track spotlights', 'By disconnecting microphones from wall outlets', 'By removing poetry shelves along the skylight'], 0, 'ตอบ By moving center display tables aside for folding chairs (ย้ายโต๊ะกลางออกเพื่อตั้งเก้าอี้พับได้ถึง 35 ตัว)'],
      ['Part 3 · Action', 'Where will the man place forty signed copies of the book?', ['Beside the front checkout register', 'On wooden tables in the back reading nook', 'Inside cardboard boxes under the skylight', 'Along the shop’s front display window'], 0, 'ตอบ Beside the front checkout register (วางหนังสือปกแข็งพร้อมลายเซ็น 40 เล่มเรียงไว้ข้างเคาน์เตอร์คิดเงินด้านหน้า)'],
    ]),

    p3(8, 'l8-p3-10', [
      ['Man', 'us_m', 'Rachel, every time Banquet Staff plugs in that second silver coffee urn behind the Ballroom registration desk, the power strip shuts off immediately!'],
      ['Woman', 'uk_f', 'Those commercial 1500-watt urns draw way too much amperage to share one surge strip—especially alongside your registration badge printer!'],
      ['Man', 'us_m', 'I thought that outlet looked overloaded. Where else can we plug in the decaf urn before registration opens at eight?'],
      ['Woman', 'uk_f', 'See that brass wall plate behind the pillar? That connects directly to an isolated 20-amp kitchen service line—plug the decaf urn straight into that wall socket.'],
    ], null, [
      ['Part 3 · Problem', 'What caused the power strip to trip behind the registration desk?', ['Two high-wattage coffee urns and a printer overloaded one strip', 'A broken badge printer shorted out the ballroom wall socket', 'Spilled coffee damaged the surge protector switch', 'Building maintenance shut down ballroom power before eight'], 0, 'ตอบ Two high-wattage coffee urns and a printer overloaded one strip (หม้อต้มกาแฟกำลังไฟสูงสองใบกับเครื่องพิมพ์ป้ายชื่อดึงไฟเกินกำลังรางปลั๊กเดียว)'],
      ['Part 3 · Detail', 'Which item needs to be plugged into a different power source?', ['The decaf coffee urn', 'The conference badge printer', 'The first silver coffee urn', 'A laptop registration station'], 0, 'ตอบ The decaf coffee urn (ผู้ชายถามว่าจะเสียบปลั๊กหม้อต้มกาแฟไร้คาเฟอีนใบที่สองไว้ตรงไหน)'],
      ['Part 3 · Detail', 'Where is the dedicated 20-amp wall outlet located?', ['Behind a nearby pillar', 'Inside the banquet kitchen doorway', 'Underneath the Ballroom registration table', 'Along the hallway carpet seam'], 0, 'ตอบ Behind a nearby pillar (ช่องปลั๊กทองเหลืองที่ผนังหลังเสาต่อตรงกับสายไฟ 20 แอมป์ของครัว)'],
    ]),

    p3(8, 'l8-p3-11', [
      ['Woman', 'ca_f', 'Welcome to Grand Harbor Hotel Catering! You mentioned hosting forty-five healthcare researchers next Thursday with a firm budget cap of forty-two dollars per guest, right?'],
      ['Man', 'uk_m', 'Yes—and our group won’t fit the sixty-person minimums, plus I noticed the Executive Hot Buffet on your printed sheet lists forty-six dollars.'],
      ['Woman', 'ca_f', 'Actually, our hotel gives registered nonprofit medical groups an automatic five-dollar discount off that printed Executive Hot Buffet rate, bringing it under your cap! Also, we just sold out of brioche rolls for the Garden Picnic Box today.'],
      ['Man', 'uk_m', 'Forty-one dollars per guest with hot entrees works wonderfully! Let’s lock in the Executive Hot Buffet, and I’ll email our final headcount by Monday noon.'],
    ], doc('Menu Sheet', 'Grand Harbor Hotel — Convention Lunch Packages', [['Pricing', 'Per Guest']], [
      tbl(['Package Name', 'Main Selection', 'Listed Price', 'Min Guests'], [
        ['Garden Picnic Box', 'Brioche sandwiches & salad', '$36', '20 guests'],
        ['Executive Hot Buffet', 'Herb chicken & seasonal veg', '$46', '35 guests'],
        ['Coastal Seafood Gala', 'Grilled salmon & crab cakes', '$54', '40 guests'],
        ['Grand Banquet Plated', 'Filet medallions & risotto', '$62', '60 guests'],
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. How much per guest will the man pay for the chosen lunch package?', ['$41', '$46', '$36', '$54'], 0, 'ตอบ $41 (เลือกแพ็กเกจ Executive Hot Buffet ที่พิมพ์ราคาไว้ $46 แต่โรงแรมลดให้องค์กรการแพทย์ไม่แสวงผลกำไรอีก $5 จึงเหลือคนละ $41)'],
      ['Part 3 · Detail', 'Why is the Garden Picnic Box unavailable for this group?', ['The kitchen ran out of brioche sandwich rolls', 'Its price exceeds forty-two dollars per guest', 'Forty-five attendees exceeds its maximum capacity', 'The client rejected cold sandwiches for Thursday'], 0, 'ตอบ The kitchen ran out of brioche sandwich rolls (ผู้หญิงแจ้งว่าขนมปังบริยอชสำหรับชุด Garden Picnic Box เพิ่งหมดวันนี้)'],
      ['Part 3 · Action', 'What will the man email by Monday noon?', ['The finalized number of conference attendees', 'Tax-exemption paperwork from his hotel account', 'Dietary restriction notes for coastal seafood', 'A signed credit card deposit authorization'], 0, 'ตอบ The finalized number of conference attendees (ผู้ชายจะส่งอีเมลแจ้งจำนวนผู้ร่วมงานที่แน่นอนภายในเที่ยงวันจันทร์)'],
    ]),

    p3(8, 'l8-p3-12', [
      ['Man', 'au_m', 'Maya, Bus 214 just pulled in needing its rear rooftop air-conditioning compressor recharged before tomorrow’s early commuter shift.'],
      ['Woman', 'us_f2', 'Let’s look at the garage bay log. We definitely need a heavy-duty lift rated for buses, plus AC diagnostic manifold gauges at the bay.'],
      ['Man', 'au_m', 'Watch out—the log still marks Bay 2 as Open, though Safety Inspectors just locked out Bay 2’s hydraulic lift twenty minutes ago for hose pressure checks.'],
      ['Woman', 'us_f2', 'Good thing you told me! Guide Bus 214 into the other open bay equipped with AC diagnostic tools, and I’ll haul over two canisters of refrigerant.'],
    ], doc('Garage Log', 'City Transit Depot — Maintenance Bay Status', [['Shift', '2:00 P.M. Update']], [
      tbl(['Bay #', 'Lift Rating', 'Specialty Tools', 'Listed Status'], [
        ['Bay 1', 'Light Van (6 ton)', 'Tire balancer, alignment rack', 'Open'],
        ['Bay 2', 'Heavy Bus (20 ton)', 'AC diagnostic manifold, crane', 'Open'],
        ['Bay 3', 'Heavy Bus (20 ton)', 'Diesel exhaust dyno', 'Occupied'],
        ['Bay 4', 'Heavy Bus (20 ton)', 'AC diagnostic manifold, lift', 'Open'],
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. To which bay will the speakers direct Bus 214?', ['Bay 4', 'Bay 1', 'Bay 2', 'Bay 3'], 0, 'ตอบ Bay 4 (ต้องใช้ช่องที่รับน้ำหนักรถบัส 20 ตันและมีเครื่องมือตรวจแอร์ ซึ่งมี Bay 2 กับ Bay 4 แต่ Bay 2 เพิ่งถูกล็อกตรวจความปลอดภัย จึงต้องใช้ Bay 4)'],
      ['Part 3 · Problem', 'Why is Bay 2 currently unusable despite its printed status?', ['Safety inspectors locked out its lift for hose checks', 'A diesel exhaust dyno is blocking the doorway', 'Its AC diagnostic tools were sent out for calibration', 'Another heavy coach is scheduled to enter at two'], 0, 'ตอบ Safety inspectors locked out its lift for hose checks (ผู้ตรวจสอบความปลอดภัยเพิ่งล็อกลิฟต์ไฮดรอลิกของช่อง 2 เมื่อ 20 นาทีก่อนเพื่อเช็กสายแรงดัน)'],
      ['Part 3 · Action', 'What will the woman bring to the selected bay?', ['Two canisters of air-conditioning refrigerant', 'Heavy-duty bus tire pressure gauges', 'Inspection forms from the safety office', 'Overhead gantry crane safety hooks'], 0, 'ตอบ Two canisters of air-conditioning refrigerant (ผู้หญิงจะไปหยิบถังน้ำยาแอร์สองถังมาที่ช่องซ่อม)'],
    ]),

    p3(8, 'l8-p3-13', [
      ['Man', 'us_m2', 'Ms. Bennett, I’m reviewing your order form for one hundred custom thank-you cards with your law firm’s gold foil monogram. You checked Cream Linen on the slip, right?'],
      ['Woman', 'uk_f', 'Yes, though after feeling your paper samples today, I’d like to switch to the heaviest cardstock on your chart—as long as it still takes foil stamping and ships within your standard seven-day window without rush fees.'],
      ['Man', 'us_m2', 'Let’s see—our heaviest stock handles crisp gold foil beautifully, and it’s actually part of our regular five-business-day press cycle!'],
      ['Woman', 'uk_f', 'Perfect! Let’s update the ticket to that stock, and keep our matching ivory envelopes.'],
    ], doc('Order Chart', 'Paper & Quill — Custom Stationery Stocks', [['Service', 'Letterpress & Foil']], [
      tbl(['Paper Stock', 'Weight', 'Foil Compatible', 'Turnaround'], [
        ['Cream Linen', '270 gsm', 'Yes', '5 business days'],
        ['Ivory Cotton', '350 gsm', 'Yes', '7 business days'],
        ['Pearl Deckle', '420 gsm', 'No (textured)', '10 business days'],
        ['Alabaster Heavy', '600 gsm', 'Yes', '5 business days'],
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which paper stock is Ms. Bennett switching her order to?', ['Alabaster Heavy', 'Cream Linen', 'Ivory Cotton', 'Pearl Deckle'], 0, 'ตอบ Alabaster Heavy (ลูกค้าต้องการกระดาษที่หนักที่สุดในตารางที่พิมพ์ฟอยล์ทองได้และใช้เวลาปกติไม่เกิน 7 วันทำการ ซึ่งคือ Alabaster Heavy 600 gsm ใช้เวลา 5 วันทำการ)'],
      ['Part 3 · Detail', 'Why could Pearl Deckle not be used for Ms. Bennett’s order?', ['It cannot accept foil stamping and exceeds seven days', 'Its weight is lighter than standard cream linen cards', 'Matching ivory envelopes are out of stock for that line', 'It incurs a mandatory rush surcharge for law firms'], 0, 'ตอบ It cannot accept foil stamping and exceeds seven days (Pearl Deckle รองรับฟอยล์ไม่ได้และใช้เวลานานถึง 10 วันทำการ)'],
      ['Part 3 · Detail', 'How many thank-you cards is the customer ordering?', ['100 cards', '270 cards', '350 cards', '600 cards'], 0, 'ตอบ 100 cards (ผู้ชายทวนคำสั่งซื้อว่าเป็นการ์ดขอบคุณสั่งทำพิเศษจำนวน 100 ใบ)'],
    ]),

    // Set 8 Part 4 (10 Talks: 1-7 no doc, 8-10 with doc; 45-85 words each)
    p4(8, 'l8-p4-1', 'the following announcement', 'us_f',
      'Welcome back from your morning breakout sessions, Apex Financial delegates. Please note a quick dining venue change for today’s twelve-thirty buffet lunch. Because technicians are still balancing acoustic microphones inside the Grand Ballroom ahead of this afternoon’s panel, lunch service has relocated downstairs to the glass-roofed Garden Pavilion. Simply follow the floral floor arrows past the gift shop, and keep your printed conference badge visible so catering staff can scan you through smoothly.',
      null, [
      ['Part 4 · Purpose', 'Why is this announcement being made?', ['To inform conference attendees of a lunch venue change', 'To announce delayed afternoon panel discussions', 'To invite delegates to visit the hotel gift shop', 'To explain microphone rules for breakout presenters'], 0, 'ตอบ To inform conference attendees of a lunch venue change (แจ้งย้ายสถานที่รับประทานอาหารกลางวันของผู้ร่วมประชุม)'],
      ['Part 4 · Detail', 'Why cannot lunch be served in the Grand Ballroom today?', ['Audio technicians are still testing stage microphones there', 'Catering tables have not arrived from the hotel kitchen', 'Floral arrangements leaked onto the ballroom carpet', 'Attendance exceeded the Grand Ballroom’s seating capacity'], 0, 'ตอบ Audio technicians are still testing stage microphones there (ช่างเสียงยังปรับสมดุลไมโครโฟนในห้องแกรนด์บอลรูมสำหรับช่วงบ่ายอยู่)'],
      ['Part 4 · Action', 'What should delegates wear when entering the Garden Pavilion?', ['Their printed conference name badge', 'A meal voucher from registration', 'Visitor passes from the gift shop', 'Blue ribbons for panel speakers'], 0, 'ตอบ Their printed conference name badge (ให้ติดป้ายชื่อผู้ร่วมประชุมให้เห็นชัดเจนเพื่อให้พนักงานสแกนเข้างานได้)'],
    ]),

    p4(8, 'l8-p4-2', 'the following instructions', 'uk_m',
      'Quick shop update for all second-shift mechanics before you pull coaches over the maintenance pits. City environmental auditors inspected our fluid room yesterday and issued new color rules for waste barrels: blue drums strictly collect green engine coolant, while black steel drums are strictly for used motor oil. Never mix windshield solvent into either barrel. Also, log every wheel-lug torque reading into your shop tablet before signing a bus ready for morning dispatch.',
      null, [
      ['Part 4 · Audience', 'Who is this briefing intended for?', ['Municipal bus garage mechanics', 'Hotel banquet kitchen dishwashers', 'Bookshop warehouse inventory clerks', 'Commercial parking lot attendants'], 0, 'ตอบ Municipal bus garage mechanics (กล่าวถึงช่างซ่อมบำรุงกะบ่าย รถโดยสาร ช่องตรวจใต้ท้องรถ และค่าแรงบิดนอตล้อ)'],
      ['Part 4 · Detail', 'What should go inside the blue waste barrels?', ['Used engine coolant', 'Waste motor oil', 'Windshield washer solvent', 'Hydraulic brake fluid'], 0, 'ตอบ Used engine coolant (ถังสีน้ำเงินใช้สำหรับเก็บน้ำยาหล่อเย็นเครื่องยนต์เท่านั้น)'],
      ['Part 4 · Action', 'What must mechanics record on shop tablets before releasing a bus?', ['Wheel-lug torque measurements', 'Coolant barrel fill levels', 'Environmental auditor badge numbers', 'Morning dispatch driver names'], 0, 'ตอบ Wheel-lug torque measurements (ต้องบันทึกค่าแรงบิดนอตล้อลงแท็บเล็ตของอู่ก่อนเซ็นปล่อยรถ)'],
    ]),

    p4(8, 'l8-p4-3', 'the following advertisement', 'au_f',
      'Discover autumn reading and fine writing at Hawthorne Books and Paper on Maple Lane! All weekend long, step up to our back counter for a complimentary fountain pen ink tasting bar featuring twenty vibrant imported shades from Kyoto and Berlin. Plus, buy any hardcover biography or travel memoir through Sunday evening and receive twenty percent off our entire wall of stitched Japanese linen notebooks. Visit early for free gift wrapping while limited holiday ribbons last.',
      null, [
      ['Part 4 · Topic', 'What is being advertised?', ['A weekend ink event and discount at a bookshop', 'A grand opening of an online stationery warehouse', 'A calligraphy textbook signing by Japanese authors', 'A clearance sale on used hardcover mysteries'], 0, 'ตอบ A weekend ink event and discount at a bookshop (โฆษณากิจกรรมชิมสีหมึกปากกาและส่วนลดช่วงสุดสัปดาห์ที่ร้านหนังสือและเครื่องเขียน)'],
      ['Part 4 · Detail', 'What free activity is offered at the back counter?', ['Testing twenty imported fountain pen ink colors', 'Custom embossing on leather book covers', 'Guided memoir writing workshops for beginners', 'Complimentary espresso drinks with any purchase'], 0, 'ตอบ Testing twenty imported fountain pen ink colors (บาร์ทดลองสีหมึกปากกาหมึกซึมนำเข้า 20 เฉดสีฟรีที่เคาน์เตอร์ด้านหลัง)'],
      ['Part 4 · Detail', 'How can shoppers earn twenty percent off Japanese linen notebooks?', ['By buying any hardcover biography or travel memoir', 'By spending fifty dollars on gift ribbons', 'By subscribing to the shop’s autumn newsletter', 'By bringing old fountain pens for recycling'], 0, 'ตอบ By buying any hardcover biography or travel memoir (ซื้อหนังสือชีวประวัติหรือบันทึกการเดินทางปกแข็งเล่มใดก็ได้รับส่วนลดสมุด 20%)'],
    ]),

    p4(8, 'l8-p4-4', 'the following voicemail message', 'ca_m',
      'Hi Ms. Takahashi, this is Leo from Crestview Hotel Banquet Operations calling at ten-fifteen. We received your email requesting a late switch from twenty round banquet tables to long rectangular farm tables for Saturday’s architectural awards dinner, and I’m happy to confirm our warehouse has enough oak farm tables in stock! Your dark charcoal linen runners will arrive Friday afternoon around three. Please call me back at extension four-two-zero if your florist needs extra vase width measurements.',
      null, [
      ['Part 4 · Purpose', 'Why is Leo calling Ms. Takahashi?', ['To confirm availability of rectangular tables for an event', 'To cancel Saturday’s architectural awards banquet', 'To ask for final payment on charcoal linen runners', 'To postpone Friday’s flower delivery until evening'], 0, 'ตอบ To confirm availability of rectangular tables for an event (โทรมาคอนเฟิร์มว่าคลังโรงแรมมีโต๊ะไม้ยาวทรงสี่เหลี่ยมเพียงพอให้เปลี่ยนตามที่ขอ)'],
      ['Part 4 · Detail', 'When will the dark charcoal table runners arrive?', ['On Friday around 3:00 P.M.', 'On Thursday at 10:15 A.M.', 'On Saturday before noon', 'Early Friday morning'], 0, 'ตอบ On Friday around 3:00 P.M. (ผ้าคาดโต๊ะสีเทาชาร์โคลจะมาถึงบ่ายวันศุกร์เวลาประมาณ 15:00 น.)'],
      ['Part 4 · Action', 'Why might Ms. Takahashi return Leo’s call at extension 420?', ['If the event florist requires table width details', 'If fewer guests plan to attend the awards dinner', 'If warehouse staff lose the oak table order', 'If hotel servers arrive late on Friday'], 0, 'ตอบ If the event florist requires table width details (หากช่างจัดดอกไม้ต้องการทราบขนาดความกว้างโต๊ะสำหรับจัดแจกันเพิ่มเติม)'],
    ]),

    p4(8, 'l8-p4-5', 'the following excerpt from a meeting', 'us_m2',
      'Before we wrap up tonight’s maintenance briefing, let’s talk about the regenerative braking software update rolling out across our electric-hybrid bus fleet. Field pilots in District Four showed that this patch cuts brake pad wear by nearly eighteen percent—and believe me, those savings really add up over two hundred buses! Night-shift diagnostics techs will flash each coach while plugged into the overnight chargers, so drivers won’t see any daytime downtime at all.',
      null, [
      ['Part 4 · Detail', 'What benefit did District Four pilot buses show?', ['Nearly eighteen percent less brake pad wear', 'Eighteen percent faster battery charging overnight', 'Reduced diesel fuel consumption on steep hills', 'Lower repair costs for hydraulic wheelchair ramps'], 0, 'ตอบ Nearly eighteen percent less brake pad wear (ผลการทดสอบช่วยลดการสึกหรอของผ้าเบรกได้เกือบ 18%)'],
      ['Part 4 · Meaning', 'What does the speaker mean when he says, "those savings really add up over two hundred buses"?', ['An eighteen-percent reduction yields major cost savings across the fleet', 'Software downloads take longer when applied to two hundred coaches', 'Maintenance crews need two hundred spare brake pads on hand', 'District Four plans to buy two hundred additional electric buses'], 0, 'ตอบ An eighteen-percent reduction yields major cost savings across the fleet (หมายความว่าการลดต้นทุน 18% เมื่อคูณกับรถบัส 200 คันจะกลายเป็นเงินประหยัดมหาศาล)'],
      ['Part 4 · Detail', 'When will technicians install the software update?', ['Overnight while buses are charging', 'During Sunday morning driver shifts', 'Every Monday afternoon at Bay 4', 'Right before District Four inspections'], 0, 'ตอบ Overnight while buses are charging (ช่างจะอัปเดตซอฟต์แวร์ให้ช่วงกลางคืนขณะรถเสียบสายชาร์จอยู่ ทำให้ไม่กระทบการวิ่งตอนกลางวัน)'],
    ]),

    p4(8, 'l8-p4-6', 'the following recorded message', 'uk_f2',
      'Thank you for calling Paper and Quill Bookshop and Fine Stationery. Our main shop is open Tuesday through Sunday from ten A.M. until seven P.M.; we are closed Mondays for inventory restocking. Customers waiting on special-order international art books should note that overseas publisher shipments arrive every Thursday afternoon, and we text you immediately once titles are shelved. Please note our custom ribbon and gift-wrapping counter closes thirty minutes before the store.',
      null, [
      ['Part 4 · Detail', 'Why is the bookshop closed on Mondays?', ['Staff spend the day restocking inventory', 'Overseas shipments arrive every Monday afternoon', 'Local writers host private book clubs indoors', 'Technicians polish wooden bookcases all morning'], 0, 'ตอบ Staff spend the day restocking inventory (ปิดร้านทุกวันจันทร์เพื่อจัดเติมสต็อกสินค้า)'],
      ['Part 4 · Detail', 'How are customers notified when special-order art books arrive?', ['By receiving a text message once books are shelved', 'By calling the store every Thursday morning', 'Through a mailed postcard from the publisher', 'By checking an online spreadsheet on Mondays'], 0, 'ตอบ By receiving a text message once books are shelved (ทางร้านจะส่งข้อความ SMS แจ้งทันทีที่จัดขึ้นชั้นเรียบร้อย)'],
      ['Part 4 · Detail', 'When does the gift-wrapping counter close each open day?', ['At 6:30 P.M.', 'At 7:00 P.M.', 'At 6:00 P.M.', 'At 5:30 P.M.'], 0, 'ตอบ At 6:30 P.M. (ร้านปิด 19:00 น. และเคาน์เตอร์ห่อของขวัญปิดก่อนร้านปิด 30 นาที คือ 18:30 น.)'],
    ]),

    p4(8, 'l8-p4-7', 'the following announcement', 'au_m',
      'Attention all morning transit drivers departing the West Depot before dawn. Heavy overnight wind brought wet autumn leaves down across the steep downhill curves near North Terminal, making steel tram tracks and asphalt unusually slick. Please test your pneumatic sanders before pulling past the dispatch gate, engage retarder braking early approaching Ridge Hill, and allow two extra bus lengths behind commuter traffic until street sweepers clear those corridors by nine A.M.',
      null, [
      ['Part 4 · Problem', 'What road hazard are bus drivers warned about?', ['Slippery streets covered in wet fallen leaves', 'Flooded pavement near the West Depot gate', 'Construction barriers blocking North Terminal', 'Dense morning fog along Ridge Hill'], 0, 'ตอบ Slippery streets covered in wet fallen leaves (ลมพัดใบไม้ร่วงเปียกน้ำลงบนถนนและรางรถรางช่วงทางลงเขาทำให้ถนนลื่น)'],
      ['Part 4 · Action', 'What equipment should operators check before leaving the depot?', ['Pneumatic sanders', 'Destination LED signs', 'Windshield wipers', 'Wheelchair lift ramps'], 0, 'ตอบ Pneumatic sanders (ให้ทดสอบเครื่องพ่นทรายกันลื่นก่อนขับออกจากประตูอู่)'],
      ['Part 4 · Detail', 'When are street sweepers expected to finish clearing the hills?', ['By 9:00 A.M.', 'Before dawn', 'At 7:30 A.M.', 'Around noon'], 0, 'ตอบ By 9:00 A.M. (รถกวาดถนนจะเคลียร์เส้นทางช่วงดังกล่าวเสร็จภายใน 09:00 น.)'],
    ]),

    p4(8, 'l8-p4-8', 'the following announcement', 'ca_f',
      'Attention Horizon Convention delegates! Because this afternoon’s keynote panel ran twenty minutes long, catering staff consolidated two refreshment areas to prevent pastry queues. Specifically, the Afternoon Tea and Scones station listed upstairs on the third floor has moved down and combined right beside the Gluten-Free Snacks table in the Atrium Lobby! Meanwhile, our Hydration Infused Water bar remains right outside Hall A as printed.',
      doc('Venue Guide', 'Horizon Convention Center — Break Stations', [['Updated', 'Day 2 Program']], [
        tbl(['Station Name', 'Printed Location', 'Serving Window', 'Featured Item'], [
          ['Morning Espresso Bar', 'Mezzanine West', '8:00–11:00 A.M.', 'Oat milk lattes'],
          ['Hydration Infused Water', 'Outside Hall A', '9:00 A.M.–5:00 P.M.', 'Cucumber citrus water'],
          ['Gluten-Free Snacks', 'Atrium Lobby', '2:00–4:30 P.M.', 'Almond oat bars'],
          ['Afternoon Tea & Scones', 'Third Floor Balcony', '2:30–4:30 P.M.', 'Earl Grey & clotted cream'],
        ]),
      ]), [
      ['Part 4 · Graphic', 'Look at the graphic. Where should attendees now go for Afternoon Tea and Scones?', ['Atrium Lobby', 'Third Floor Balcony', 'Mezzanine West', 'Outside Hall A'], 0, 'ตอบ Atrium Lobby (ผู้พูดแจ้งว่าบูธ Afternoon Tea & Scones ย้ายจากชั้น 3 ลงมารวมข้างโต๊ะ Gluten-Free Snacks ซึ่งอยู่ในตารางคือ Atrium Lobby)'],
      ['Part 4 · Detail', 'Which station stayed at its originally printed location?', ['Hydration Infused Water', 'Afternoon Tea & Scones', 'Morning Espresso Bar', 'Third Floor Pastry Cart'], 0, 'ตอบ Hydration Infused Water (บูธน้ำดื่มผลไม้ยังคงตั้งอยู่หน้า Hall A ตามที่พิมพ์ไว้)'],
      ['Part 4 · Problem', 'Why did catering staff combine the two afternoon tables?', ['To keep lines moving smoothly after a long keynote', 'Third Floor Balcony air conditioning malfunctioned', 'Almond oat bars ran out upstairs at two o’clock', 'Hotel workers needed the third floor for evening dinner'], 0, 'ตอบ To keep lines moving smoothly after a long keynote (ช่วงปาฐกถายาวเกินเวลา 20 นาที จึงรวมบูธเพื่อลดแถวรอคิวขนมอบ)'],
    ]),

    p4(8, 'l8-p4-9', 'the following voicemail message', 'us_m',
      'Hi Tessa, this is Ray from the Parts Cage calling at three-thirty before I clock out. Good news first—a surprise shipment of LED Headlight Assemblies landed at noon, so scratch those right off the reorder sheet. Also, our coolant hoses are on factory backorder until next month anyway. Please submit an urgent rush purchase order today strictly for the brake component whose current stock dipped below its minimum safety level.',
      doc('Inventory Sheet', 'Metro Transit Depot — Parts Reorder Log', [['Checked By', 'R. Gomez']], [
        tbl(['Part Description', 'Current Stock', 'Minimum Required', 'Standard Lead Time'], [
          ['LED Headlight Assembly', '4 units', '8 units', '3 days'],
          ['Silicone Coolant Hose', '6 units', '10 units', 'Backordered'],
          ['Front Brake Caliper Kit', '12 units', '10 units', '4 days'],
          ['Rear Brake Air Chamber', '3 units', '8 units', '2 days'],
        ]),
      ]), [
      ['Part 4 · Graphic', 'Look at the graphic. Which part should Tessa place a rush order for today?', ['Rear Brake Air Chamber', 'LED Headlight Assembly', 'Silicone Coolant Hose', 'Front Brake Caliper Kit'], 0, 'ตอบ Rear Brake Air Chamber (ในกลุ่มเบรกที่สต็อกต่ำกว่าเกณฑ์ขั้นต่ำคือ Rear Brake Air Chamber เหลือ 3 ชิ้นจากขั้นต่ำ 8 ชิ้น ส่วน Caliper Kit มี 12 ชิ้นเกินเกณฑ์แล้ว)'],
      ['Part 4 · Detail', 'Why does Ray say to skip ordering LED Headlight Assemblies?', ['A delivery of headlights arrived earlier at noon', 'Mechanics installed halogen lamps instead', 'Headlight units are on factory backorder until next month', 'Current stock still exceeds the minimum requirement'], 0, 'ตอบ A delivery of headlights arrived earlier at noon (มีลอตไฟหน้า LED มาส่งถึงอู่แล้วตอนเที่ยงวันนี้)'],
      ['Part 4 · Detail', 'What is the standard delivery lead time for the needed brake part?', ['Two days', 'Three days', 'Four days', 'One month'], 0, 'ตอบ Two days (ดูในตารางสำหรับ Rear Brake Air Chamber ระบุ Standard Lead Time ไว้ 2 days)'],
    ]),

    p4(8, 'l8-p4-10', 'the following radio broadcast', 'uk_f',
      'Book lovers, listen up! Ink and Folio Bookshop on River Street has just three seats left across its Saturday creative lineup, though schedules shifted slightly this morning. Our morning Fountain Pen Maintenance clinic filled every spot overnight, and Bookbinding Basics relocated outdoors onto the sunlit Courtyard Patio because upstairs floors were freshly varnished. So if you’re searching for open seats indoors for creative writing, grab a spot with local novelist Nora Hale!',
      doc('Class Flyer', 'Ink & Folio Bookshop — Weekend Workshops', [['Day', 'Saturday, Nov 8']], [
        tbl(['Workshop', 'Instructor', 'Assigned Room', 'Remaining Seats'], [
          ['Fountain Pen Maintenance', 'K. Watanabe', 'Ground Study', '0 (Sold Out)'],
          ['Bookbinding Basics', 'T. Mercer', 'Upstairs Loft', '4 open'],
          ['Short Fiction Dialogue', 'Nora Hale', 'Poetry Alcove', '3 open'],
          ['Watercolor Postcards', 'L. Chen', 'Upstairs Loft', '5 open'],
        ]),
      ]), [
      ['Part 4 · Graphic', 'Look at the graphic. Which workshop fits listeners wanting indoor creative writing seats?', ['Short Fiction Dialogue', 'Fountain Pen Maintenance', 'Bookbinding Basics', 'Watercolor Postcards'], 0, 'ตอบ Short Fiction Dialogue (ผู้พูดแนะนำคลาสเขียนเชิงสร้างสรรค์ในร่มกับนักเขียน Nora Hale ซึ่งในตารางคือ Short Fiction Dialogue ห้อง Poetry Alcove)'],
      ['Part 4 · Detail', 'Why was Bookbinding Basics moved outdoors to the Courtyard Patio?', ['Floors upstairs received fresh varnish', 'K. Watanabe requested natural sunlight', 'Five extra students registered overnight', 'Water leaked into the Poetry Alcove'], 0, 'ตอบ Floors upstairs received fresh varnish (พื้นชั้นบนเพิ่งลงน้ำยาเคลือบเงาใหม่จึงย้ายไปลานระเบียงกลางแจ้งแทน)'],
      ['Part 4 · Detail', 'How many spots remain in Nora Hale’s workshop?', ['3 seats', '0 seats', '4 seats', '5 seats'], 0, 'ตอบ 3 seats (ตารางระบุ Short Fiction Dialogue เหลือที่นั่งว่าง 3 ที่)'],
    ]),

    // ==================== SET 9 ====================
    p1(9, 'l9-p1-1', 'us_f', [
      'An optician is arranging eyeglasses along an illuminated wall display.',
      'Customers are trying on sunglasses in front of an outdoor mirror.',
      'Plastic lens cases are being packed into cardboard shipping cartons.',
      'An eye doctor is adjusting straps on a patient’s reading glasses.',
    ], 0, 'ตอบ An optician is arranging eyeglasses along an illuminated wall display. (ช่างแว่นตากำลังจัดเรียงกรอบแว่นบนชั้นโชว์ติดผนังที่มีไฟส่อง)'),
    p1(9, 'l9-p1-2', 'uk_m', [
      'Flight attendants are pushing beverage carts down an aircraft aisle.',
      'Catering workers wearing hairnets are sliding meal trays into metal trolleys.',
      'Airport inspectors are checking temperature gauges on freezer doors.',
      'Waitstaff are washing stainless-steel plates inside a restaurant kitchen.',
    ], 1, 'ตอบ Catering workers wearing hairnets are sliding meal trays into metal trolleys. (พนักงานครัวการบินที่สวมหมวกคลุมผมกำลังจัดถาดอาหารใส่รถเข็นโลหะ)'),
    p1(9, 'l9-p1-3', 'au_f', [
      'Two podcast hosts wearing headphones are speaking into desk microphones.',
      'Audio technicians are coiling black cables behind a radio stage.',
      'A journalist is interviewing pedestrians outside a broadcast studio.',
      'Musicians are tuning acoustic guitars inside a soundproof room.',
    ], 0, 'ตอบ Two podcast hosts wearing headphones are speaking into desk microphones. (ผู้จัดพอดแคสต์สองคนสวมหูฟังกำลังพูดใส่ไมโครโฟนบนโต๊ะ)'),
    p1(9, 'l9-p1-4', 'ca_m', [
      'Patients are sitting in a waiting area reading vision brochures.',
      'Eye-testing equipment stands beside an empty adjustable exam chair.',
      'A technician is cleaning glass lenses with a microfiber cloth.',
      'Framed eye charts have been stacked against a clinic wall.',
    ], 1, 'ตอบ Eye-testing equipment stands beside an empty adjustable exam chair. (อุปกรณ์ตรวจสายตาตั้งอยู่ข้างเก้าอี้ตรวจที่ว่างเปล่าไม่มีคน)'),
    p1(9, 'l9-p1-5', 'uk_f2', [
      'Passengers are climbing mobile stairs toward a regional airplane.',
      'A catering lift truck is raised level with an aircraft cabin door.',
      'Baggage handlers are unloading mail sacks from a cargo hold.',
      'Fuel hoses are coiled beside the landing gear of a parked jet.',
    ], 1, 'ตอบ A catering lift truck is raised level with an aircraft cabin door. (รถยกอาหารการบินยกระดับขึ้นไปเทียบเสมอประตูห้องโดยสารเครื่องบิน)'),
    p1(9, 'l9-p1-6', 'us_m2', [
      'A sound engineer is adjusting sliders on a broadcast mixing console.',
      'An announcer is reading news bulletins from paper scripts.',
      'Studio shelves are lined with vintage vinyl record jackets.',
      'Two radio interns are testing handheld microphones in a hallway.',
    ], 0, 'ตอบ A sound engineer is adjusting sliders on a broadcast mixing console. (วิศวกรเสียงกำลังเลื่อนเฟดเดอร์ปรับระดับเสียงบนแผงมิกซ์เสียงออกอากาศ)'),

    // Set 9 Part 2 (25 Qs)
    p2(9, 'l9-p2-1', 'uk_f', 'us_m', 'Where should patients leave old eyewear frames for the charity donation box?', ['Drop them in the wooden bin beside the reception coat rack.', 'Yes, children’s reading glasses are accepted too.', 'Mostly metal frames with mild prescriptions.'], 0, 'ตอบ Drop them in the wooden bin beside the reception coat rack. (ถามสถานที่วางแว่นเก่าบริจาค Where ตอบใส่ในกล่องไม้ข้างราวแขวนเสื้อตรงจุดต้อนรับ)'),
    p2(9, 'l9-p2-2', 'us_m', 'au_f', 'Who is inspecting the insulated beverage carts before Flight 308 departs?', ['Forty-eight economy trays plus eight business salads.', 'Galley Lead Marcus just started checking the seals.', 'At Tarmac Loading Bay Seven.'], 1, 'ตอบ Galley Lead Marcus just started checking the seals. (ถามบุคคล Who ตอบหัวหน้าฝ่ายจัดเตรียม Marcus เพิ่งเริ่มตรวจซีลรถเข็น)'),
    p2(9, 'l9-p2-3', 'ca_f', 'uk_m', 'When does the live Friday afternoon jazz radio broadcast go on air?', ['Right from our downtown glass storefront booth.', 'Right after the four o’clock traffic bulletin ends.', 'About two hours with local quartet interviews.'], 1, 'ตอบ Right after the four o’clock traffic bulletin ends. (ถามเวลา When ตอบเริ่มออกอากาศทันทีหลังข่าวจราจรตอนสี่โมงเย็น)'),
    p2(9, 'l9-p2-4', 'au_m', 'us_f', 'Would you prefer polycarbonate lenses or thinner high-index glass for these frames?', ['High-index lenses keep thick prescriptions much lighter.', 'Yes, I chose the tortoiseshell acetate frames.', 'Covered eighty percent under your employer vision plan.'], 0, 'ตอบ High-index lenses keep thick prescriptions much lighter. (คำถามเลือกชนิดเลนส์ A or B ตอบเลือก high-index พร้อมเหตุผลว่าเบากว่ามาก)'),
    p2(9, 'l9-p2-5', 'us_f2', 'uk_m', 'Why was the Tuesday morning eye-dilation appointment slot canceled?', ['Drops wear off in roughly three hours.', 'Dr. Patel had an urgent pediatric surgery consultation.', 'Bring dark sunglasses for your drive home.'], 1, 'ตอบ Dr. Patel had an urgent pediatric surgery consultation. (ถามเหตุผล Why ตอบคุณหมอ Patel ติดเคสปรึกษาผ่าตัดเด็กเร่งด่วน)'),
    p2(9, 'l9-p2-6', 'uk_m', 'ca_m', 'Hasn’t the audio engineer uploaded Episode 42 of our commuter podcast yet?', ['No, I didn’t subscribe to the morning feed.', 'She’s normalizing the sponsor volume levels right now.', 'About thirty-five minutes per commute episode.'], 1, 'ตอบ She’s normalizing the sponsor volume levels right now. (คำถามปฏิเสธ Hasn’t... ตอบแจ้งความคืบหน้าว่าวิศวกรกำลังปรับระดับเสียงสปอนเซอร์อยู่)'),
    p2(9, 'l9-p2-7', 'us_m2', 'us_f', 'How many kosher meal trays did the airline catering desk request for tonight?', ['Twelve sealed dinners—all labeled with yellow tags.', 'Inside thermal cart C-3 near the galley door.', 'Served alongside warm whole-grain rolls.'], 0, 'ตอบ Twelve sealed dinners—all labeled with yellow tags. (ถามจำนวน How many ตอบ 12 ชุดติดแท็กสีเหลืองครบ)'),
    p2(9, 'l9-p2-8', 'uk_f2', 'au_m', 'Could you swap out the pop filter on Studio Microphone Two before the guest arrives?', ['Yes, the city councilwoman speaks at nine-fifteen.', 'Sure, there’s a clean spare foam ring inside the drawer.', 'Behind the acoustic foam glass panel.'], 1, 'ตอบ Sure, there’s a clean spare foam ring inside the drawer. (ขอให้เปลี่ยนตัวกรองเสียงไมค์ ตอบยินดีเพราะมีอันสำรองสะอาดอยู่ในลิ้นชัก)'),
    p2(9, 'l9-p2-9', 'ca_m', 'us_f', 'The optical lab’s lens-edging machine has been vibrating loudly since noon.', ['No, single-vision lenses finish in an hour.', 'Around two dozen pairs waiting on the tray.', 'Let’s power it down and inspect the cutting wheel bearing.'], 2, 'ตอบ Let’s power it down and inspect the cutting wheel bearing. (ประโยคบอกเล่าแจ้งเครื่องเจียรเลนส์สั่นเสียงดัง ตอบเสนอให้ปิดเครื่องตรวจตลับลูกปืนล้อตัด)'),
    p2(9, 'l9-p2-10', 'us_f', 'uk_f2', 'Which catering supplier delivers fresh citrus slices for regional cabin service?', ['Valley Produce drops off vacuum packs before five A.M.', 'Yes, lemon and lime wedges come in separate trays.', 'For forty-minute commuter flights out of Terminal One.'], 0, 'ตอบ Valley Produce drops off vacuum packs before five A.M. (ถามเลือกผู้ส่งสินค้า Which supplier ตอบชื่อบริษัท Valley Produce ที่มาส่งก่อนตีห้า)'),
    p2(9, 'l9-p2-11', 'au_f', 'us_m2', 'How long does a full retinal imaging scan usually take?', ['Only about five minutes—no air puffs required.', 'On the digital monitor beside the exam stool.', 'Twice a year for contact lens wearers.'], 0, 'ตอบ Only about five minutes—no air puffs required. (ถามระยะเวลา How long ตอบใช้เวลาแค่ประมาณ 5 นาทีเท่านั้น)'),
    p2(9, 'l9-p2-12', 'uk_m', 'ca_f', 'Should we record the sponsor advertisement before the interview or edit it in afterward?', ['Drop it in during editing so the conversation flows naturally.', 'Yes, our financial sponsor renewed through winter.', 'Thirty seconds right after the opening music.'], 0, 'ตอบ Drop it in during editing so the conversation flows naturally. (คำถามเลือกวิธีทำงาน A or B ตอบให้ตัดต่อใส่ทีหลังเพื่อให้บทสนทนาลื่นไหลเป็นธรรมชาติ)'),
    p2(9, 'l9-p2-13', 'us_m', 'uk_f', 'Where did the flight attendant store the extra sealed sparkling water cans?', ['Behind the bottom drawer of beverage cart four.', 'Because dry cabin air makes passengers thirsty.', 'Complimentary on flights over ninety minutes.'], 0, 'ตอบ Behind the bottom drawer of beverage cart four. (ถามสถานที่เก็บของ Where ตอบอยู่หลังลิ้นชักล่างของรถเข็นเครื่องดื่มหมายเลข 4)'),
    p2(9, 'l9-p2-14', 'uk_f', 'au_m', 'Why don’t we offer a two-for-one frame discount on prescription sunglasses?', ['No, I didn’t leave my reading pair at work.', 'That would definitely encourage commuters to grab polarized spares!', 'Until the summer UV awareness week wraps up.'], 1, 'ตอบ That would definitely encourage commuters to grab polarized spares! (Why don’t we เสนอโปรโมชัน ตอบเห็นด้วยว่าจะช่วยกระตุ้นลูกค้าให้ซื้อแว่นกันแดดสายตาสำรอง)'),
    p2(9, 'l9-p2-15', 'us_m2', 'ca_f', 'You finished balancing the studio monitor speakers yesterday afternoon, didn’t you?', ['Wait—actually our contractor pushed that calibration to Friday morning.', 'Two studio subwoofers underneath the console.', 'That podcast guest spoke remarkably clearly.'], 0, 'ตอบ Wait—actually our contractor pushed that calibration to Friday morning. (Tag question ถามย้ำ ตอบแก้ไขว่าช่างเลื่อนการปรับจูนลำโพงไปเป็นเช้าวันศุกร์แทน)'),
    p2(9, 'l9-p2-16', 'ca_m', 'uk_f2', 'Who approved the seasonal cold-noodle salad for our short-haul cabin menu?', ['Menu Director Chen signed off after last Tuesday’s tasting.', 'Chilled sesame dressing with shredded carrots.', 'Loaded onto regional jets under eighty seats.'], 0, 'ตอบ Menu Director Chen signed off after last Tuesday’s tasting. (ถามบุคคล Who ตอบผู้อำนวยการฝ่ายเมนู Chen อนุมัติหลังชิมเมื่อวันอังคาร)'),
    p2(9, 'l9-p2-17', 'us_f2', 'au_m', 'How much is the anti-reflective coating upgrade on children’s frames?', ['Thirty-five dollars flat, with a one-year scratch warranty.', 'Yes, kids often drop glasses on the playground.', 'Included automatically in our titanium adult line.'], 0, 'ตอบ Thirty-five dollars flat, with a one-year scratch warranty. (ถามราคา How much ตอบ 35 ดอลลาร์แบบเหมาพร้อมรับประกันรอยขีดข่วนหนึ่งปี)'),
    p2(9, 'l9-p2-18', 'uk_m', 'us_f', 'Did the morning catering truck clear airport tarmac security on time?', ['Every hour starting at four-thirty A.M.', 'No, I usually drink black coffee in the breakroom.', 'Security checked every galley lock twice, so it rolled out ten minutes late.'], 2, 'ตอบ Security checked every galley lock twice, so it rolled out ten minutes late. (ถามว่าผ่านจุดตรวจตรงเวลาไหม ตอบข้อเท็จจริงว่าตรวจซ้ำสองรอบเลยออกช้าไป 10 นาที)'),
    p2(9, 'l9-p2-19', 'au_f', 'us_m', 'Our soundproof booth really blocks out all that downtown siren noise!', ['Right? You can’t hear a single fire truck once the heavy door latches!', 'Yes, the morning news broadcast runs thirty minutes.', 'Try lowering the desk chair by two inches.'], 0, 'ตอบ Right? You can’t hear a single fire truck once the heavy door latches! (ประโยคบอกเล่าชมห้องเก็บเสียง ตอบรับเห็นด้วยว่าปิดประตูแล้วไม่ได้ยินเสียงรถหวอเลย)'),
    p2(9, 'l9-p2-20', 'ca_f', 'uk_m', 'When will Mr. Reyes’s progressive bifocal glasses be ready for pickup?', ['From the main optical counter near Pharmacy.', 'Our lab tracker estimates Thursday afternoon around four.', 'Tortoiseshell metal half-rim frames.'], 1, 'ตอบ Our lab tracker estimates Thursday afternoon around four. (ถามกำหนดรับแว่น When ตอบระบบติดตามงานแล็บประเมินว่าเสร็จบ่ายวันพฤหัสฯ ประมาณสี่โมง)'),
    p2(9, 'l9-p2-21', 'uk_f2', 'us_m2', 'Do you know if the radio station allows podcast interns to borrow field recorders?', ['I interviewed street musicians there last summer.', 'Ask Producer Morales—she manages the weekend equipment sign-out sheet.', 'Two shotgun microphones with foam windscreens.'], 1, 'ตอบ Ask Producer Morales—she manages the weekend equipment sign-out sheet. (ถามกติกายืมอุปกรณ์ ตอบแนะนำให้ถามโปรดิวเซอร์ Morales ผู้ดูแลใบเบิกอุปกรณ์)'),
    p2(9, 'l9-p2-22', 'us_m', 'ca_f', 'What time does the final regional catering run leave the flight kitchen?', ['Ten-fifteen P.M., strictly for early-dawn red-eye departures.', 'To restock chilled breakfast sandwiches and yogurt.', 'From Loading Bay Two facing the runway fence.'], 0, 'ตอบ Ten-fifteen P.M., strictly for early-dawn red-eye departures. (ถามเวลาออกรอบสุดท้าย What time ตอบ 22:15 น. สำหรับเที่ยวบินเช้าตรู่)'),
    p2(9, 'l9-p2-23', 'au_m', 'uk_f', 'Can you adjust the nose pads on my reading glasses while I wait?', ['Yes, reading prescriptions change every two years.', 'Certainly—have a seat right here, it takes barely two minutes.', 'Inside the blue hard case in my coat pocket.'], 1, 'ตอบ Certainly—have a seat right here, it takes barely two minutes. (ขอให้ดัดแป้นจมูกแว่นระหว่างรอ ตอบยินดีพร้อมเชิญนั่งรอใช้เวลาไม่ถึงสองนาที)'),
    p2(9, 'l9-p2-24', 'us_f', 'uk_m', 'Have the broadcast producers booked a backup guest in case traffic delays Mayor Lin?', ['Usually fifteen minutes for live civic interviews.', 'Yes, urban planner Dr. Ortiz is standing by on Studio Phone Three.', 'Along the harbor expressway near Bridge Four.'], 1, 'ตอบ Yes, urban planner Dr. Ortiz is standing by on Studio Phone Three. (ถามว่าจัดหาแขกรับเชิญสำรองไว้หรือยัง ตอบเตรียมนักผังเมือง ดร. Ortiz สแตนด์บายทางสายโทรศัพท์ 3 แล้ว)'),
    p2(9, 'l9-p2-25', 'ca_m', 'au_f', 'Whose prescription lens cloth was left beside the autorefractor machine?', ['Optometrist Kim keeps that microfiber cloth tucked in her lab coat.', 'Yes, clean the chin rest with alcohol wipes between patients.', 'Place the extra lens sample case on shelf two.'], 0, 'ตอบ Optometrist Kim keeps that microfiber cloth tucked in her lab coat. (ถามเจ้าของผ้าเช็ดเลนส์ Whose ตอบเป็นของจักษุแพทย์ Kim)'),

    // Set 9 Part 3 (13 Conversations: 1-10 no doc, 11-13 with doc; >=2 3-speaker convs)
    p3(9, 'l9-p3-1', [
      ['Man', 'uk_m', 'Excuse me, I picked up my new progressive glasses here on Tuesday, though when I read spreadsheets on my laptop, the text looks slightly blurry unless I tilt my chin way up.'],
      ['Woman', 'us_f', 'Let’s take a look right away, Mr. Brooks! Could you put them on and look straight ahead at this wall calendar while I check your optical center marks?'],
      ['Man', 'uk_m', 'Sure—see how the frames slide about half a centimeter down my nose whenever I lean forward?'],
      ['Woman', 'us_f', 'Aha, that explains it! Your reading zone is dropping too low. I’ll tighten both temple tips behind your ears and raise the nose pads slightly so the lenses sit right at eye level.'],
    ], null, [
      ['Part 3 · Problem', 'Why did Mr. Brooks return to the optical shop?', ['Text appears blurry through the reading section of his new glasses', 'One lens cracked after dropping off his desk on Tuesday', 'His prescription frames feel overly tight behind his ears', 'Anti-reflective coating started peeling along the nose pads'], 0, 'ตอบ Text appears blurry through the reading section of his new glasses (เวลามองตารางบนโน้ตบุ๊กตัวหนังสือเบลอ เว้นแต่จะเงยคางขึ้นสูง)'],
      ['Part 3 · Detail', 'What caused the focus problem?', ['The frames sit too low down the bridge of his nose', 'The optical lab cut the wrong lens magnification', 'His wall calendar hangs too high above eye level', 'Scratch-resistant coating distorted his laptop screen'], 0, 'ตอบ The frames sit too low down the bridge of his nose (กรอบแว่นเลื่อนไหลลงมาครึ่งเซนติเมตรทำให้โซนอ่านหนังสืออยู่ต่ำเกินไป)'],
      ['Part 3 · Action', 'How will the optician fix the glasses?', ['By tightening the temple tips and lifting the nose pads', 'By ordering thinner replacement progressive lenses', 'By switching to plastic frames with built-in bridges', 'By measuring his reading distance with a digital ruler'], 0, 'ตอบ By tightening the temple tips and lifting the nose pads (ดัดปลายขาแว่นให้กระชับและยกแป้นจมูกขึ้นเล็กน้อยเพื่อให้อยู่ระดับสายตาพอดี)'],
    ]),

    p3(9, 'l9-p3-2', [
      ['Man', 'au_m', 'Carla, hold off loading Cart A-4 onto the Regional Flight 412 truck—the rubber gasket around its dry-ice drawer cracked, so cold air is leaking out fast.'],
      ['Woman', 'ca_f', 'Whoa, those chilled salmon wraps and yogurt parfaits have to stay under four degrees! Can we swap food trays into another insulated cart before departure?'],
      ['Man', 'au_m', 'Yes! Reserve Cart B-7 passed seal testing ten minutes ago and sits empty beside Dishwasher Bay 2.'],
      ['Woman', 'ca_f', 'Awesome—help me transfer the trays into B-7 now, then I’ll cross out A-4 and sign the updated galley manifest for the flight attendants.'],
    ], null, [
      ['Part 3 · Problem', 'Why must Cart A-4 be kept off Flight 412?', ['A cracked dry-ice drawer seal allows cold air to escape', 'Its locking wheels jammed beside Dishwasher Bay 2', 'Yogurt parfaits spilled onto the metal trolley shelves', 'Flight attendants requested larger beverage carts instead'], 0, 'ตอบ A cracked dry-ice drawer seal allows cold air to escape (ซีลยางลิ้นชักน้ำแข็งแห้งแตกร้าวทำให้ความเย็นรั่วไหลออกเร็ว)'],
      ['Part 3 · Detail', 'What is true about Reserve Cart B-7?', ['It recently passed seal inspection and is empty', 'It already holds chilled salmon wraps for Flight 412', 'It needs fresh dry ice packs from the loading dock', 'It is parked inside the tarmac catering lift truck'], 0, 'ตอบ It recently passed seal inspection and is empty (รถเข็นสำรอง B-7 เพิ่งผ่านการทดสอบซีลเมื่อสิบนาทีก่อนและยังว่างอยู่)'],
      ['Part 3 · Action', 'What paperwork will the woman update?', ['The airline galley cart manifest', 'The dishwasher maintenance logbook', 'An inventory invoice for fresh yogurt', 'Security clearance badges for drivers'], 0, 'ตอบ The airline galley cart manifest (ผู้หญิงจะขีดฆ่า A-4 ออกและเซ็นกำกับใบรายการจัดส่งครัวการบินฉบับแก้ไข)'],
    ]),

    p3(9, 'l9-p3-3', [
      ['Man', 'us_m2', 'Claire, our guest recorded yesterday’s podcast interview from her hotel room, and there’s a steady air-conditioning drone underneath her entire forty-minute audio track!'],
      ['Woman', 'uk_f2', 'Ugh, those hotel wall units rumble right across vocal frequencies. Did she remember to pause silently before speaking?'],
      ['Man', 'us_m2', 'Thank goodness—she stayed completely quiet for twelve full seconds at the start of the tape!'],
      ['Woman', 'uk_f2', 'Good thing we always require a ten-second room tone! Let me sample that clean hum profile and run our spectral denoiser across her track—it’ll sound crystal clear in twenty minutes.'],
    ], null, [
      ['Part 3 · Problem', 'What flaw occurred in the guest’s podcast recording?', ['Background air-conditioner noise appears throughout the audio', 'The guest forgot to mute her hotel telephone ringtone', 'Forty minutes of interview audio recorded at low volume', 'Studio microphones failed to sync with remote speakers'], 0, 'ตอบ Background air-conditioner noise appears throughout the audio (แทร็กเสียงของแขกรับเชิญมีเสียงฮัมของเครื่องปรับอากาศในโรงแรมแทรกตลอด 40 นาที)'],
      ['Part 3 · Meaning', 'What does the woman mean when she says, "Good thing we always require a ten-second room tone"?', ['Having silent ambient audio lets her filter out the hum accurately', 'Guests relax more effectively during quiet breathing pauses', 'Hotel rooms become quieter after running AC for ten seconds', 'Opening jingles cover background hotel noises effortlessly'], 0, 'ตอบ Having silent ambient audio lets her filter out the hum accurately (หมายความว่าการอัดเสียงความเงียบในห้องไว้ 10 วินาทีช่วยให้ซอฟต์แวร์จับโปรไฟล์เสียงรบกวนและตัดออกได้เนียน)'],
      ['Part 3 · Action', 'How long does the woman estimate audio cleanup will take?', ['About twenty minutes', 'About forty minutes', 'Twelve seconds', 'Until tomorrow afternoon'], 0, 'ตอบ About twenty minutes (ผู้หญิงคาดว่าจะรันตัวลดเสียงรบกวนจนเสียงใสได้ภายใน 20 นาที)'],
    ]),

    p3(9, 'l9-p3-4', [
      ['Woman1', 'ca_f', 'Dr. Brooks, Mr. Gomez just called confirming his three o’clock contact lens fitting, though our morning delivery crate left out his right-eye astigmatism trial lenses!'],
      ['Man', 'us_m', 'Wait—we can’t fit him properly with only the left-eye trial box! Priya, did our vendor ship those toric lenses separately?'],
      ['Woman2', 'au_f', 'I just checked the tracking link—they got delayed until tomorrow morning. However, our Midtown sister clinic carries that exact base curve in stock!'],
      ['Woman1', 'ca_f', 'Midtown is only fifteen minutes away! Let me call their receptionist now and send our clinic courier over on an express pickup before two-thirty.'],
    ], null, [
      ['Part 3 · Problem', 'What issue affects Mr. Gomez’s three o’clock appointment?', ['His right-eye trial contact lenses were missing from a shipment', 'He canceled his afternoon fitting at the last minute', 'Midtown sister clinic misplaced his prescription records', 'His left-eye trial box arrived with the wrong base curve'], 0, 'ตอบ His right-eye trial contact lenses were missing from a shipment (กล่องคอนแทคเลนส์ทดลองสายตาเอียงข้างขวาตกหล่นไม่ได้มากับลังส่งของตอนเช้า)'],
      ['Part 3 · Detail', 'When will the vendor’s missing lenses arrive?', ['Tomorrow morning', 'Around two-thirty today', 'In fifteen minutes', 'Next Tuesday afternoon'], 0, 'ตอบ Tomorrow morning (ลิงก์ติดตามพัสดุแจ้งว่าล่าช้าไปส่งพรุ่งนี้เช้า)'],
      ['Part 3 · Action', 'How will the clinic obtain the needed lenses in time?', ['By having a courier fetch them from a nearby sister clinic', 'By asking Mr. Gomez to visit the Midtown location instead', 'By fitting him with non-astigmatism sample lenses today', 'By requesting an emergency afternoon flight delivery'], 0, 'ตอบ By having a courier fetch them from a nearby sister clinic (โทรขอแบ่งจากคลินิกสาขา Midtown ที่อยู่ห่างออกไป 15 นาทีและส่งเมสเซนเจอร์ไปรับมาก่อน 14:30 น.)'],
    ]),

    p3(9, 'l9-p3-5', [
      ['Woman1', 'uk_f', 'Thanks for meeting, Brenda. Several regional flight attendants reported that our hot lentil soup cups keep splashing onto tray tables during rough mountain crosswinds.'],
      ['Woman2', 'us_f2', 'That’s definitely a burn hazard we need to eliminate quickly—especially on forty-seat commuter jets with narrow aisles.'],
      ['Woman1', 'uk_f', 'Our culinary kitchen tested two zero-spill alternatives this week: warm baked spinach puff pastries wrapped in parchment, and sealed cold citrus quinoa bowls.'],
      ['Woman2', 'us_f2', 'Passengers love savory warm snacks on mountain routes—let’s switch next month’s afternoon flight menu to the spinach pastries and add napkins to each wrapper.'],
    ], null, [
      ['Part 3 · Problem', 'Why does the airline want to replace hot soup on regional flights?', ['Turbulence causes hot liquid to spill on passengers and trays', 'Lentil soup takes too long to heat inside commuter ovens', 'Passengers complained about sodium levels in soup cups', 'Catering trucks lack insulated carts for small jets'], 0, 'ตอบ Turbulence causes hot liquid to spill on passengers and trays (กระแสลมแปรปรวนเหนือภูเขาทำให้น้ำซุปร้อนกระฉอกหกเลอะถาดอาหาร)'],
      ['Part 3 · Detail', 'What new menu item do the speakers select?', ['Baked spinach puff pastries', 'Chilled citrus quinoa bowls', 'Sealed yogurt and granola cups', 'Warm toasted cheese sandwiches'], 0, 'ตอบ Baked spinach puff pastries (เลือกขนมอบพายผักโขมอุ่นร้อนห่อกระดาษไขแทนซุป)'],
      ['Part 3 · Detail', 'When will the new item debut on regional routes?', ['Next month', 'Later this week', 'Tomorrow morning', 'During winter holidays'], 0, 'ตอบ Next month (ผู้หญิงระบุให้ปรับเปลี่ยนเมนูเที่ยวบินช่วงบ่ายเริ่มในเดือนหน้า)'],
    ]),

    p3(9, 'l9-p3-6', [
      ['Man1', 'ca_m', 'Tariq, Engineering just reminded me our broadcast tower crew is replacing the main AM antenna insulator this Sunday between one and four A.M.'],
      ['Man2', 'uk_m', 'Does the station have to go totally silent overnight, or are we switching to our low-power backup transmitter?'],
      ['Man1', 'ca_m', 'Backup transmitter! Listeners within city limits will hear our jazz rerun fine, though outer highway towns might get static for those three hours.'],
      ['Man2', 'uk_m', 'Got it—I’ll record a brief twenty-second listener notice right after traffic wraps up so Friday commuters know streaming online stays unaffected.'],
    ], null, [
      ['Part 3 · Topic', 'What planned work is happening at the radio station on Sunday?', ['Technicians are replacing an insulator on the broadcast tower', 'Hosts are moving overnight jazz shows to a downtown studio', 'Engineers are upgrading highway traffic microphones', 'Online streaming servers are shutting down for three hours'], 0, 'ตอบ Technicians are replacing an insulator on the broadcast tower (ทีมช่างเสาสัญญาณจะเปลี่ยนฉนวนสายอากาศหลักช่วงตีหนึ่งถึงตีสี่วันอาทิตย์)'],
      ['Part 3 · Detail', 'How will the station remain on air during maintenance?', ['By transmitting through a low-power backup unit', 'By broadcasting exclusively from an outdoor mobile van', 'By replaying pre-taped announcements continuously', 'By borrowing bandwidth from a sister FM frequency'], 0, 'ตอบ By transmitting through a low-power backup unit (สลับไปใช้เครื่องส่งสำรองกำลังไฟต่ำระหว่างซ่อมบำรุง)'],
      ['Part 3 · Action', 'What will Tariq mention in his recorded listener notice?', ['That online web streaming will continue without static', 'That Sunday morning traffic bulletins are canceled', 'That highway towns must retune to AM channels', 'That live call-in contests move to Saturday night'], 0, 'ตอบ That online web streaming will continue without static (จะอัดประกาศแจ้งผู้ฟังว่ายังฟังผ่านสตรีมมิงออนไลน์ได้ชัดเจนตามปกติ)'],
    ]),

    p3(9, 'l9-p3-7', [
      ['Man', 'au_m', 'Hi Julia, this is David at Harbor Optical. We need twenty more flexible children’s frames in navy and forest green before back-to-school checkups peak next week.'],
      ['Woman', 'us_f', 'Let me check our warehouse inventory—oh, our titanium kids’ line is actually backordered from Italy for six more weeks due to hinge tooling delays.'],
      ['Man', 'au_m', 'Six weeks puts us way past August! Do you carry any impact-resistant alternatives ready to ship today?'],
      ['Woman', 'us_f', 'Yes—our bendable memory-nylon youth line comes in those exact four colors, carries a two-year breakage warranty, and ships at the exact same wholesale price.'],
    ], null, [
      ['Part 3 · Problem', 'Why cannot Harbor Optical receive the Italian titanium children’s frames next week?', ['The manufacturer is facing a six-week backorder delay', 'Navy and forest green finishes have been discontinued', 'Back-to-school orders exceeded annual wholesale quotas', 'Custom nose pads failed children’s safety inspections'], 0, 'ตอบ The manufacturer is facing a six-week backorder delay (กรอบแว่นไทเทเนียมเด็กจากอิตาลีค้างสต็อกอีกหกสัปดาห์เพราะปัญหาแม่พิมพ์บานพับ)'],
      ['Part 3 · Detail', 'What alternative product does the supplier recommend?', ['Memory-nylon frames with a two-year warranty', 'Lightweight stainless frames with discounted lenses', 'Clear polycarbonate frames shipped in bulk packs', 'Adjustable adult frames in small bridge widths'], 0, 'ตอบ Memory-nylon frames with a two-year warranty (แนะนำกรอบไนลอนยืดหยุ่นพร้อมรับประกันการแตกหัก 2 ปี)'],
      ['Part 3 · Detail', 'How does the wholesale price of the alternative compare?', ['It costs the same as the original frames', 'It includes a ten-percent back-to-school discount', 'It charges extra for forest green finishes', 'It waives expedited shipping costs for clinics'], 0, 'ตอบ It costs the same as the original frames (ราคาส่งเท่ากับรุ่นเดิมทุกประการ)'],
    ]),

    p3(9, 'l9-p3-8', [
      ['Woman1', 'uk_f2', 'Careful—our morning political roundtable goes live in twelve minutes, and Studio A’s guest microphone mute button keeps sticking halfway down!'],
      ['Man', 'us_m', 'Seriously? If a panelist coughs on live air and I can’t mute Channel Three, listeners are going to hear every rustle!'],
      ['Woman2', 'ca_f', 'Don’t panic—I already tested Studio C across the hall, and its mixing console is spotless and patched to the same caller lines.'],
      ['Woman1', 'uk_f2', 'Brilliant! Move the printed talk-show rundown sheets and water pitchers into Studio C right now while Tina swaps that sticky fader switch in Studio A.'],
    ], null, [
      ['Part 3 · Problem', 'What equipment malfunction occurred in Studio A?', ['A microphone mute button on the console is sticking', 'Live caller telephone lines disconnected abruptly', 'Podcast rundown software froze twelve minutes before air', 'Guest headphones emitted loud electrical static'], 0, 'ตอบ A microphone mute button on the console is sticking (ปุ่มปิดเสียงไมค์แขกรับเชิญบนโต๊ะมิกซ์ Studio A ค้างกดไม่ลงสุด)'],
      ['Part 3 · Detail', 'How do the speakers solve the problem before broadcast time?', ['By relocating the live show across the hall to Studio C', 'By pre-recording the political roundtable earlier', 'By sharing one working table microphone among guests', 'By postponing the morning broadcast by thirty minutes'], 0, 'ตอบ By relocating the live show across the hall to Studio C (ย้ายรายการเสวนาสดไปจัดที่ Studio C ฝั่งตรงข้ามโถงทางเดินแทนทันที)'],
      ['Part 3 · Detail', 'What will Tina do in Studio A?', ['Replace the defective fader switch', 'Deliver water pitchers to Studio C', 'Answer incoming listener telephone lines', 'Reprint the roundtable script sheets'], 0, 'ตอบ Replace the defective fader switch (Tina ซึ่งเป็นฝ่ายเทคนิคจะเปลี่ยนสวิตช์เฟดเดอร์ที่ค้างใน Studio A)'],
    ]),

    p3(9, 'l9-p3-9', [
      ['Woman1', 'us_f2', 'Elena, flight crews reported that nearly a third of our individually wrapped almond shortbread cookies arrived crumbled to dust on yesterday’s Denver hop!'],
      ['Woman2', 'au_f', 'Oh no—did cabin altitude expansion pop the foil bags or smash them inside the galley drawers?'],
      ['Woman1', 'us_f2', 'Both! We puff too much nitrogen air into the pouches at sea level, so at thirty thousand feet they swell up tight and squeeze against the metal drawer edges.'],
      ['Woman2', 'au_f', 'Easy fix on our bakery packaging line: we’ll dial back nitrogen puff pressure by forty percent and slip thicker corrugated U-trays around every cookie.'],
    ], null, [
      ['Part 3 · Problem', 'What complaint did flight crews report about the shortbread cookies?', ['Many cookies broke into crumbs inside sealed packages', 'Foil pouches melted inside heated cabin ovens', 'Almond cookies went stale before afternoon flights', 'Cookie boxes did not fit inside Denver galley drawers'], 0, 'ตอบ Many cookies broke into crumbs inside sealed packages (คุกกี้เนยอัลมอนด์ประมาณหนึ่งในสามแตกละเอียดเป็นผงระหว่างเที่ยวบิน)'],
      ['Part 3 · Detail', 'What caused the packages to press tightly against drawer edges?', ['Sea-level nitrogen gas expanded inside bags at high altitude', 'Loaders stacked heavy beverage carts on top of cookie boxes', 'Denver bakery ovens overbaked yesterday’s pastry batch', 'Metal galley latches snapped shut onto plastic pouches'], 0, 'ตอบ Sea-level nitrogen gas expanded inside bags at high altitude (ก๊าซไนโตรเจนที่อัดแน่นเกินไปพองตัวขยายใหญ่ขึ้นที่ระดับความสูงการบิน)'],
      ['Part 3 · Detail', 'What packaging changes will the bakery implement?', ['Less gas inside pouches and thicker cardboard inner trays', 'Vacuum-sealed plastic tubs with snap-on lids', 'Smaller bite-sized cookies baked in metal tins', 'Double foil wrapping stored inside frozen drawers'], 0, 'ตอบ Less gas inside pouches and thicker cardboard inner trays (ลดแรงดันก๊าซไนโตรเจนลง 40% และใส่ถาดกระดาษลูกฟูกทรงตัวยูที่หนาขึ้นรองรับ)'],
    ]),

    p3(9, 'l9-p3-10', [
      ['Man1', 'uk_m', 'Carlos, Mrs. Alvarez’s vision insurance covers brand-new eyeglass frames only once every twenty-four months—and she picked up her current acetate pair fourteen months ago.'],
      ['Man2', 'ca_m', 'Wait—does her annual benefit still cover updated progressive lenses if she reuses her existing frames?'],
      ['Man1', 'uk_m', 'Yes! Her plan pays one hundred percent toward new prescription lenses every year. Plus, our practice gives loyal patients thirty percent off lab edging fees when reusing sturdy frames.'],
      ['Man2', 'ca_m', 'Fantastic! Let me inspect her acetate hinges for cracks first, then ring up the lens-only order under her annual plan.'],
    ], null, [
      ['Part 3 · Detail', 'Why is Mrs. Alvarez ineligible for new insurance-covered frames right now?', ['She used her two-year frame allowance fourteen months ago', 'Her employer vision policy excludes acetate eyewear frames', 'Progressive lenses require waiting twenty-four months', 'Her current prescription did not change since last year'], 0, 'ตอบ She used her two-year frame allowance fourteen months ago (สิทธิเบิกกรอบแว่นใช้ได้ทุก 24 เดือน แต่เธอเพิ่งเบิกกรอบไปเมื่อ 14 เดือนก่อน)'],
      ['Part 3 · Detail', 'What benefit does the optical clinic offer when patients keep old frames?', ['A thirty-percent reduction on lab lens-edging charges', 'Free replacement nose pads and temple covers', 'An upgrade to high-index tinted sunglasses', 'Complimentary overnight express shipping'], 0, 'ตอบ A thirty-percent reduction on lab lens-edging charges (คลินิกให้ส่วนลดค่าบริการเจียรเลนส์ในแล็บ 30% เมื่อนำกรอบเดิมมาใส่เลนส์ใหม่)'],
      ['Part 3 · Action', 'What will the second man check before placing the order?', ['The condition of the existing frame hinges', 'The exact date Mrs. Alvarez’s insurance renews', 'Whether the lab stocks tinted acetate temples', 'Whether Mrs. Alvarez wants backup reading glasses'], 0, 'ตอบ The condition of the existing frame hinges (ผู้ชายจะตรวจสภาพบานพับกรอบแว่นเดิมก่อนว่ามีรอยร้าวหรือไม่ก่อนสั่งทำเลนส์)'],
    ]),

    p3(9, 'l9-p3-11', [
      ['Woman', 'us_f', 'Hi Mr. Ortiz, let’s pick a lens coating package for your new prescription glasses. You mentioned spending ten hours daily in front of dual office monitors, right?'],
      ['Man', 'ca_m', 'Exactly—so blue-light glare protection is essential, though I’d like my add-on fee to stay under ninety-five dollars total. How about the Outdoor Tint option?'],
      ['Woman', 'us_f', 'Oh, notice our printed counter menu still lists Outdoor Tint, though our lab actually discontinued that specific glaze last month anyway—besides, it didn’t include blue-light filtering.'],
      ['Man', 'ca_m', 'Makes sense! I’ll take the blue-light package under ninety-five dollars, and I can swing by next Wednesday to pick them up.'],
    ], doc('Price Menu', 'ClearSight Optical — Lens Coating Upgrades', [['Notice', 'Add-On Per Pair']], [
      tbl(['Package Name', 'Key Protection', 'Listed Add-On', 'Lab Turnaround'], [
        ['Basic Scratch Shield', 'Hard anti-scratch coat', '$45', '2 business days'],
        ['Outdoor Tint', 'Gradient sun glare tint', '$70', '4 business days'],
        ['ScreenGuard Blue', 'Blue-light & anti-glare', '$85', '3 business days'],
        ['Executive Ultra HD', 'Blue-light, hydrophobic & UV', '$125', '5 business days'],
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which lens coating package will Mr. Ortiz purchase?', ['ScreenGuard Blue', 'Basic Scratch Shield', 'Outdoor Tint', 'Executive Ultra HD'], 0, 'ตอบ ScreenGuard Blue (ลูกค้าต้องการกันแสงสีฟ้าสำหรับจอคอมพิวเตอร์ในงบต่ำกว่า $95 ซึ่งตรงกับ ScreenGuard Blue ราคา $85 ส่วน Executive Ultra HD ราคาเกินงบ)'],
      ['Part 3 · Detail', 'What update does the optician give about the Outdoor Tint option?', ['The optical lab stopped offering it last month', 'Its add-on fee recently increased above ninety-five dollars', 'It now takes five business days to manufacture', 'It includes complimentary blue-light glare protection'], 0, 'ตอบ The optical lab stopped offering it last month (ตัวเลือก Outdoor Tint ถูกแล็บยกเลิกการผลิตไปตั้งแต่เดือนที่แล้ว)'],
      ['Part 3 · Detail', 'How long is the lab turnaround for Mr. Ortiz’s chosen package?', ['3 business days', '2 business days', '4 business days', '5 business days'], 0, 'ตอบ 3 business days (ในตารางระบุเวลาผลิตของ ScreenGuard Blue คือ 3 วันทำการ)'],
    ]),

    p3(9, 'l9-p3-12', [
      ['Man', 'au_m', 'Hannah, Regional Flight 615 just cleared eight standby passengers, so we’re short on special meals for that gate run!'],
      ['Woman', 'uk_f', 'Wait—check the morning dispatch board! Flight 602 to Seattle was just canceled due to coastal fog, so its sealed vegan entrée trolley never left Cold Bay 3.'],
      ['Man', 'au_m', 'Oh, brilliant! Let me check its cart code—if we pull Flight 602’s vegan cart over onto the Flight 615 lift truck alongside its standard drink cart, every passenger eats well.'],
      ['Woman', 'uk_f', 'Do it! Just swap the destination sticker on that cart handle and update our tarmac supervisor on channel two.'],
    ], doc('Galley Sheet', 'SkyBite Regional Catering — Morning Cart Manifest', [['Station', 'Cold Bay 3']], [
      tbl(['Cart Code', 'Assigned Flight', 'Contents', 'Trays Packed'], [
        ['Cart V-12', 'Flight 602 (Seattle)', 'Vegan warm entrees', '18 trays'],
        ['Cart D-04', 'Flight 615 (Denver)', 'Sparkling drinks & ice', '44 cans'],
        ['Cart P-09', 'Flight 628 (Portland)', 'Kosher cold salads', '10 trays'],
        ['Cart B-16', 'Flight 640 (Boise)', 'Breakfast pastry boxes', '36 boxes'],
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which cart will be reassigned onto Flight 615?', ['Cart V-12', 'Cart D-04', 'Cart P-09', 'Cart B-16'], 0, 'ตอบ Cart V-12 (ผู้หญิงให้ย้ายรถเข็นอาหารมังสวิรัติของ Flight 602 ที่ยกเลิกไปขึ้นรถยกของ Flight 615 ซึ่งในตารางคือ Cart V-12)'],
      ['Part 3 · Detail', 'Why are extra trays available from Flight 602?', ['Coastal fog caused Flight 602 to cancel', 'Standby passengers missed Seattle boarding gates', 'Flight 602 switched exclusively to breakfast boxes', 'Galley space on the Seattle jet was under maintenance'], 0, 'ตอบ Coastal fog caused Flight 602 to cancel (เที่ยวบิน 602 ไปซีแอตเทิลถูกยกเลิกเพราะหมอกชายฝั่ง)'],
      ['Part 3 · Action', 'What should the man change before loading the reassigned cart?', ['Replace the destination tag on the cart handle', 'Repack canned drinks into the vegan entrée drawers', 'Transfer ice packs from Cold Bay 3 into Cart B-16', 'Recount kosher salad trays for Flight 628'], 0, 'ตอบ Replace the destination tag on the cart handle (ให้เปลี่ยนสติกเกอร์ปลายทางบนมือจับรถเข็นก่อนนำไปโหลด)'],
    ]),

    p3(9, 'l9-p3-13', [
      ['Man', 'us_m2', 'Maya, we’re hosting four city architects at two P.M. Wednesday for our design podcast, and we definitely need multi-angle video cameras plus full acoustic booth isolation.'],
      ['Woman', 'au_f', 'Let’s look at the Wednesday afternoon studio grid. Studio 2 shows Open at two o’clock, right? Careful—the newsroom chief just reserved Studio 2 five minutes ago for an emergency storm special!'],
      ['Man', 'us_m2', 'Oh, good thing we didn’t rely on the old printout! Is there another room open at two that fits four microphones and has video cameras?'],
      ['Woman', 'au_f', 'Yes—check the bottom line! It handles up to six speakers, includes 4K cameras, and sits totally silent behind double sound doors. Let me lock it in now.'],
    ], doc('Studio Grid', 'KWRD Radio & Podcast — Wednesday 2:00 P.M. Grid', [['Floor', 'Broadcast Level 3']], [
      tbl(['Studio', 'Max Mics', 'Equipment Features', 'Printed Status'], [
        ['Studio 1', '2 mics', 'Audio desk only, open glass', 'Booked (Jazz Hour)'],
        ['Studio 2', '4 mics', 'Acoustic booth, 4K video cams', 'Open'],
        ['Studio 3', '4 mics', 'Audio desk, phone call-ins only', 'Open'],
        ['Studio 4', '6 mics', 'Acoustic booth, 4K video cams', 'Open'],
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which studio will the speakers book for Wednesday at two P.M.?', ['Studio 4', 'Studio 1', 'Studio 2', 'Studio 3'], 0, 'ตอบ Studio 4 (ต้องการไมค์อย่างน้อย 4 ตัว ห้องเก็บเสียง และกล้องวิดีโอ 4K ซึ่ง Studio 2 เพิ่งถูกฝ่ายข่าวจองไปเมื่อ 5 นาทีก่อน จึงเลือกบรรทัดล่างสุดคือ Studio 4)'],
      ['Part 3 · Detail', 'Why is Studio 3 unsuitable for the architects’ podcast?', ['It lacks video camera equipment and acoustic booth isolation', 'It supports only two simultaneous speaker microphones', 'A weekly jazz radio broadcast occupies it at two', 'Newsroom staff reserved it for a storm special'], 0, 'ตอบ It lacks video camera equipment and acoustic booth isolation (Studio 3 รองรับแค่ระบบเสียงและสายโทรเข้า ไม่มีกล้อง 4K และห้องเก็บเสียง)'],
      ['Part 3 · Detail', 'Why could the speakers not reserve Studio 2?', ['The news department recently booked it for weather coverage', 'Its fourth microphone cable malfunctioned earlier today', 'Two jazz musicians asked to practice there until three', 'Double soundproof doors are being installed Wednesday'], 0, 'ตอบ The news department recently booked it for weather coverage (หัวหน้าฝ่ายข่าวเพิ่งจอง Studio 2 ไปเมื่อห้านาทีก่อนเพื่อทำรายการพิเศษเรื่องพายุ)'],
    ]),

    // Set 9 Part 4 (10 Talks: 1-7 no doc, 8-10 with doc; 45-85 words each)
    p4(9, 'l9-p4-1', 'the following recorded message', 'us_f',
      'Thank you for calling VisionCare Optical Associates. Our main showroom and exam suites are open Monday through Saturday from nine A.M. to six P.M. If you are picking up ordered contact lenses, simply bring your photo ID to our express counter on weekdays without waiting in check-in lines. Patients scheduled for comprehensive pupil dilation should pack dark sunglasses for the trip home. For urgent eye injuries after hours, press five to page our on-call optometrist.',
      null, [
      ['Part 4 · Purpose', 'What is the main purpose of this telephone recording?', ['To share office hours, pickup rules, and emergency instructions', 'To promote weekend discounts on designer sunglasses', 'To notify callers of delayed contact lens shipments', 'To confirm Dr. Kim’s surgical schedule on Saturday'], 0, 'ตอบ To share office hours, pickup rules, and emergency instructions (แจ้งเวลาทำการ ขั้นตอนรับคอนแทคเลนส์ด่วน คำแนะนำพกแว่นกันแดด และเบอร์ติดต่อฉุกเฉิน)'],
      ['Part 4 · Detail', 'What should customers bring to pick up contact lenses at the express counter?', ['A photo identification card', 'A paper receipt from their exam', 'Dark sunglasses for eye dilation', 'Their old contact lens cases'], 0, 'ตอบ A photo identification card (ให้นำบัตรประจำตัวที่มีรูปถ่ายไปแสดงที่เคาน์เตอร์รับด่วน)'],
      ['Part 4 · Detail', 'What should callers press if they experience an after-hours eye injury?', ['Five', 'One', 'Three', 'Nine'], 0, 'ตอบ Five (ให้กดเลข 5 เพื่อติดต่อจักษุแพทย์เวรนอกเวลาทำการ)'],
    ]),

    p4(9, 'l9-p4-2', 'the following instructions', 'uk_m',
      'Attention cold-prep cooks starting the evening airline catering shift. Before assembling meals for regional commuter routes, review our strict allergen station zones. Anyone slicing ingredients for nut-free passenger trays must wear a purple apron and sanitize stainless prep boards twice between batches. Also, insert calibrated digital probes into every chilled chicken salad tray and record core temperatures below four degrees on the galley tablet before locking trolley seals.',
      null, [
      ['Part 4 · Audience', 'Who is listening to these instructions?', ['In-flight catering kitchen cooks', 'Regional airline cabin flight attendants', 'Commercial restaurant dishwashers', 'Airport tarmac security guards'], 0, 'ตอบ In-flight catering kitchen cooks (ผู้ฟังคือพนักงานเตรียมอาหารเย็นในครัวการบินสำหรับเที่ยวบินภูมิภาค)'],
      ['Part 4 · Detail', 'Why must certain cooks wear purple aprons?', ['To identify staff working in nut-free meal preparation', 'To distinguish evening supervisors from morning helpers', 'To indicate employees certified in trolley sealing', 'To separate poultry prep stations from vegetarian counters'], 0, 'ตอบ To identify staff working in nut-free meal preparation (ผู้ที่หั่นวัตถุดิบสำหรับถาดปลอดถั่วต้องสวมผ้ากันเปื้อนสีม่วงเพื่อป้องกันการปนเปื้อน)'],
      ['Part 4 · Action', 'What must cooks log on the galley tablet before sealing carts?', ['Internal temperatures of chilled chicken salad trays', 'Names of all allergen station employees on shift', 'Expiration dates of sealed airline utensils', 'Departure gate numbers for regional routes'], 0, 'ตอบ Internal temperatures of chilled chicken salad trays (ต้องวัดและบันทึกอุณหภูมิแกนกลางของสลัดไก่แช่เย็นว่าต่ำกว่า 4 องศาเซลเซียสลงแท็บเล็ต)'],
    ]),

    p4(9, 'l9-p4-3', 'the following radio broadcast', 'au_f',
      'You’re listening to Metro Public Radio ninety-one-point-five, and we’re thrilled to launch our newest original podcast series, City Makers, debuting next Thursday morning! Hosted by cultural reporter Maya Chen, each twenty-five-minute episode steps inside local workshops—from custom wooden boatbuilders to independent bookbinders—to hear how craftspeople keep neighborhood traditions thriving. Station sustaining members unlock commercial-free early episodes every Tuesday through our mobile app; become a listener supporter today at metropublicradio.org.',
      null, [
      ['Part 4 · Topic', 'What is the main focus of the City Makers podcast?', ['Stories of local craftspeople and neighborhood workshops', 'Live coverage of city council budget meetings', 'Reviews of regional commuter airlines and lounges', 'Interviews with classical jazz musicians worldwide'], 0, 'ตอบ Stories of local craftspeople and neighborhood workshops (พอดแคสต์ใหม่พาไปคุยกับช่างฝีมือท้องถิ่น ตั้งแต่ช่างต่อเรือไม้จนถึงช่างเข้าเล่มหนังสือ)'],
      ['Part 4 · Detail', 'How long is each episode of City Makers?', ['Twenty-five minutes', 'Fifteen minutes', 'Thirty minutes', 'Forty-five minutes'], 0, 'ตอบ Twenty-five minutes (ระบุว่าแต่ละตอนมีความยาว 25 นาที)'],
      ['Part 4 · Detail', 'What benefit do station sustaining members receive?', ['Early ad-free episode access on Tuesdays', 'Free tickets to live radio tapings downtown', 'Autographed books from interviewed craftspeople', 'Behind-the-scenes studio recording tours'], 0, 'ตอบ Early ad-free episode access on Tuesdays (ผู้สนับสนุนสถานีจะได้ฟังตอนใหม่ล่วงหน้าแบบไร้โฆษณาทุกวันอังคารทางแอป)'],
    ]),

    p4(9, 'l9-p4-4', 'the following announcement', 'ca_m',
      'Good morning, shoppers and patients visiting Lakeview Eyewear! This Saturday from ten A.M. to four P.M., stop by our bright corner showroom for our annual Scandinavian Titanium Trunk Show, featuring over two hundred ultralight frames flown in specially for one day. Bring your current eyeglasses for complimentary ultrasonic steam cleaning while sipping fresh artisan coffee at our lobby bar. Best of all, order any prescription frame Saturday and save fifteen percent on a second pair.',
      null, [
      ['Part 4 · Topic', 'What special event is Lakeview Eyewear hosting on Saturday?', ['A one-day showcase of Scandinavian titanium frames', 'A charity collection drive for old sunglasses', 'A seminar on preventing digital computer eye strain', 'An anniversary clearance on contact lens cases'], 0, 'ตอบ A one-day showcase of Scandinavian titanium frames (จัดงานแสดงกรอบแว่นไทเทเนียมจากสแกนดิเนเวียกว่า 200 แบบในวันเสาร์วันเดียว)'],
      ['Part 4 · Detail', 'What complimentary service is available to visitors bringing old glasses?', ['Ultrasonic steam frame cleaning', 'Same-day prescription lens tinting', 'Digital retinal eye photography', 'Replacement titanium nose screws'], 0, 'ตอบ Ultrasonic steam frame cleaning (บริการทำความสะอาดกรอบแว่นด้วยเครื่องไอน้ำอัลตราโซนิกฟรีพร้อมมุมกาแฟ)'],
      ['Part 4 · Detail', 'What discount is offered during the trunk show?', ['Fifteen percent off a second pair of prescription eyewear', 'Twenty percent off single-vision polycarbonate lenses', 'Free anti-reflective glaze on children’s frames', 'Fifty dollars off titanium sunglasses'], 0, 'ตอบ Fifteen percent off a second pair of prescription eyewear (สั่งตัดแว่นสายตาวันเสาร์รับส่วนลด 15% สำหรับแว่นคู่ที่สอง)'],
    ]),

    p4(9, 'l9-p4-5', 'the following excerpt from a meeting', 'us_m2',
      'Let’s review our sustainable cabin packaging transition before next quarter’s airline contract audit. Beginning July first, all commuter flights under ninety minutes will replace heavy sealed plastic cutlery kits with slim compostable birchwood forks and paper-wrapped napkins. Besides eliminating four tons of landfill plastic annually, these lighter birchwood packets cut cart weight by six kilograms per flight—and trust me, that weight drop alone shaves real fuel off every leg.',
      null, [
      ['Part 4 · Detail', 'Which flights will switch to birchwood cutlery on July 1?', ['Commuter flights shorter than ninety minutes', 'Overnight international flights over six hours', 'Weekend charter flights carrying cargo', 'Regional routes serving warm pasta meals'], 0, 'ตอบ Commuter flights shorter than ninety minutes (เที่ยวบินภูมิภาคที่ใช้เวลาบินต่ำกว่า 90 นาทีจะเริ่มเปลี่ยนในวันที่ 1 กรกฎาคม)'],
      ['Part 4 · Meaning', 'What does the speaker mean when he says, "that weight drop alone shaves real fuel off every leg"?', ['Lighter meal carts noticeably lower aircraft fuel consumption per flight', 'Flight crews need less time to push wooden cutlery down aisles', 'Shorter flights save kitchen catering trucks fuel on the tarmac', 'Birchwood handles are shaved thinner than plastic utensils'], 0, 'ตอบ Lighter meal carts noticeably lower aircraft fuel consumption per flight (หมายความว่าน้ำหนักรถเข็นอาหารที่ลดลงช่วยประหยัดน้ำมันเชื้อเพลิงของเครื่องบินได้จริงในทุกเที่ยวบิน)'],
      ['Part 4 · Detail', 'How much landfill plastic will the switch eliminate each year?', ['Four tons', 'Six kilograms', 'Ninety pounds', 'Twelve tons'], 0, 'ตอบ Four tons (ช่วยลดขยะพลาสติกที่จะไปหลุมฝังกลบได้ถึงปีละ 4 ตัน)'],
    ]),

    p4(9, 'l9-p4-6', 'the following voicemail message', 'uk_f2',
      'Hello Dr. Patel, this is Hannah from SoundWave Podcast Studios calling Monday afternoon to confirm your interview taping tomorrow at eleven A.M. Please note a small room swap: because our morning music show is still packing drum microphones inside Studio B, we moved your recording across the hall into Studio D—our cozy armchair conversation room. Just stop by the ground-floor security lobby desk when you arrive to pick up your validated garage parking pass.',
      null, [
      ['Part 4 · Purpose', 'Why is Hannah leaving this voicemail for Dr. Patel?', ['To confirm an interview and inform him of a studio change', 'To reschedule Tuesday’s podcast taping until afternoon', 'To ask Dr. Patel to bring drum microphones to Studio B', 'To cancel his parking validation at the security desk'], 0, 'ตอบ To confirm an interview and inform him of a studio change (โทรยืนยันนัดอัดพอดแคสต์พรุ่งนี้ 11:00 น. และแจ้งย้ายห้องบันทึกเสียงจาก Studio B เป็น Studio D)'],
      ['Part 4 · Detail', 'Why is Studio B unavailable at eleven A.M. tomorrow?', ['A morning music program is still clearing out audio gear', 'Audio engineers are replacing a faulty mixing fader', 'Acoustic panels inside Studio B are being repaired', 'Another podcast host already booked Studio B'], 0, 'ตอบ A morning music program is still clearing out audio gear (รายการดนตรีช่วงเช้ายังเก็บอุปกรณ์ไมโครโฟนกลองใน Studio B ไม่เสร็จ)'],
      ['Part 4 · Action', 'What should Dr. Patel collect at the ground-floor security desk?', ['A validated parking garage pass', 'A printed episode question script', 'A temporary visitor microphone badge', 'Directions to the Studio B elevator'], 0, 'ตอบ A validated parking garage pass (ให้แวะรับบัตรจอดรถที่ประทับตราจอดฟรีได้ที่เคาน์เตอร์ รปภ. ชั้นล่าง)'],
    ]),

    p4(9, 'l9-p4-7', 'the following advertisement', 'au_m',
      'Don’t let your annual vision insurance benefits vanish untouched at year’s end! At ClearView Optometry, unused employer frame stipends and flexible health savings credits expire on December thirty-first. Whether you need updated computer lenses, polarized driving sunglasses, or a fresh year’s supply of daily contact lenses, our clinic now stays open late every Thursday evening until seven-thirty P.M. Book your sixty-second appointment online today at clearviewoptometry.com before December calendars fill up.',
      null, [
      ['Part 4 · Purpose', 'What does the advertisement urge listeners to do before December 31?', ['Use remaining annual vision insurance credits', 'Renew expired contact lens prescriptions by mail', 'Apply for new employer flexible health savings accounts', 'Drop off broken driving sunglasses for free repair'], 0, 'ตอบ Use remaining annual vision insurance credits (เตือนให้รีบใช้วงเงินประกันสายตารายปีและสิทธิ์ค่ารักษาให้คุ้มก่อนหมดเขต 31 ธันวาคม)'],
      ['Part 4 · Detail', 'How does the clinic accommodate customers with busy daytime schedules?', ['By staying open until 7:30 P.M. on Thursdays', 'By offering Sunday home eye examinations', 'By delivering prescription frames via overnight courier', 'By processing insurance rebates over the phone'], 0, 'ตอบ By staying open until 7:30 P.M. on Thursdays (ขยายเวลาเปิดให้บริการช่วงค่ำทุกวันพฤหัสบดีจนถึง 19:30 น.)'],
      ['Part 4 · Detail', 'Which product is NOT specifically mentioned in the advertisement?', ['Reading magnifiers', 'Computer lenses', 'Polarized sunglasses', 'Daily contact lenses'], 0, 'ตอบ Reading magnifiers (ในโฆษณาพูดถึงเลนส์คอมพิวเตอร์ แว่นกันแดดขับรถ และคอนแทคเลนส์รายวัน ไม่ได้พูดถึงแว่นขยายอ่านหนังสือ)'],
    ]),

    p4(9, 'l9-p4-8', 'the following telephone message', 'ca_f',
      'Hello Mr. David Park, this is Nina calling from BrightView Eye Clinic on Thursday afternoon. Good news—your multi-focal contact lens boxes just arrived from our distributor! Before you swing by, though, please notice a computer mix-up: our automated text alerts accidentally tagged your file under Ready for Curbside, whereas your new prescription actually requires a quick two-minute corneal fit check inside Exam Room 2 first. Please step inside to Reception when you arrive.',
      doc('Order Log', 'BrightView Eye Clinic — Contact Lens Orders', [['Batch', 'Thursday Arrivals']], [
        tbl(['Order ID', 'Patient Name', 'Printed Status', 'Supply Duration'], [
          ['CL-408', 'Sandra Lin', 'Ready for Curbside', '3 months'],
          ['CL-411', 'David Park', 'Ready for Curbside', '6 months'],
          ['CL-415', 'Trevor Brooks', 'In Transit', '12 months'],
          ['CL-419', 'Elena Gomez', 'Exam Required', '6 months'],
        ]),
      ]), [
      ['Part 4 · Graphic', 'Look at the graphic. How many months of contact lenses did Mr. Park order?', ['6 months', '3 months', '12 months', '2 months'], 0, 'ตอบ 6 months (ดูในตารางบรรทัดของ David Park Order ID CL-411 ระบุ Supply Duration ไว้ 6 months)'],
      ['Part 4 · Detail', 'What correction does Nina make to the automated status notice?', ['Mr. Park must complete a brief corneal check before taking his lenses', 'His order is still in transit from the regional distributor', 'Only a three-month trial supply arrived on Thursday', 'Curbside pickup moved to Exam Room 2 permanently'], 0, 'ตอบ Mr. Park must complete a brief corneal check before taking his lenses (ระบบส่งข้อความพลาดติดป้ายว่า Ready for Curbside แต่ความจริงต้องตรวจความพอดีกับกระจกตา 2 นาทีในห้องตรวจ 2 ก่อน)'],
      ['Part 4 · Action', 'Where should Mr. Park go when he arrives at the clinic?', ['To the indoor reception desk', 'To the curbside pickup parking lane', 'Directly into the optical lab room', 'To Trevor Brooks’s exam station'], 0, 'ตอบ To the indoor reception desk (ขอให้เดินเข้ามาติดต่อที่เคาน์เตอร์ต้อนรับด้านในเมื่อมาถึงคลินิก)'],
    ]),

    p4(9, 'l9-p4-9', 'the following announcement', 'us_m',
      'Attention Regional Air Catering lift truck drivers preparing morning departures. Runway Operations just alerted us that sudden forty-knot crosswinds forced Tarmac Gate 4 to suspend high-lift bridges temporarily for safety. Therefore, whichever crew is scheduled on the eleven-twenty A.M. departure should hold loaded trucks right inside your assigned loading bay and await radio escort clearance instead of driving out onto the apron early. Please keep chilled dairy carts plugged into shore power.',
      doc('Bay Board', 'Regional Air Catering — Morning Truck Schedule', [['Date', 'Friday, Oct 23']], [
        tbl(['Flight #', 'Departure Time', 'Loading Bay', 'Carts Loaded'], [
          ['Flight 204', '10:35 A.M.', 'Bay A', '2 beverage, 1 breakfast'],
          ['Flight 318', '11:05 A.M.', 'Bay B', '3 snack, 1 ice'],
          ['Flight 422', '11:20 A.M.', 'Bay C', '2 lunch, 2 beverage'],
          ['Flight 510', '11:45 A.M.', 'Bay D', '4 lunch, 1 kosher'],
        ]),
      ]), [
      ['Part 4 · Graphic', 'Look at the graphic. Which flight’s catering truck crew must wait inside its bay?', ['Flight 422', 'Flight 204', 'Flight 318', 'Flight 510'], 0, 'ตอบ Flight 422 (ผู้พูดสั่งให้รถขนอาหารรอบออกเวลา 11:20 น. รอคำสั่งคุ้มกันในช่องจอดก่อน ซึ่งในตารางรอบ 11:20 น. คือ Flight 422 ช่องจอด Bay C)'],
      ['Part 4 · Problem', 'Why did Tarmac Gate 4 temporarily close high-lift operations?', ['Strong crosswinds created unsafe lifting conditions', 'Ice buildup coated the morning tarmac apron', 'Radio escort trucks ran low on battery power', 'Flight 422 delayed passenger boarding until noon'], 0, 'ตอบ Strong crosswinds created unsafe lifting conditions (ลมขวางทางวิ่งแรงถึง 40 นอตจึงต้องระงับการใช้สะพานรถยกชั่วคราวเพื่อความปลอดภัย)'],
      ['Part 4 · Action', 'What should waiting drivers keep connected while parked?', ['Shore power cables for chilled dairy carts', 'Air-conditioning hoses to truck cabs', 'Loading bay hydraulic safety latches', 'Two-way headsets to airport customs'], 0, 'ตอบ Shore power cables for chilled dairy carts (ให้เสียบปลั๊กไฟเลี้ยงรถเข็นผลิตภัณฑ์นมแช่เย็นไว้ตลอดระหว่างรอ)'],
    ]),

    p4(9, 'l9-p4-10', 'the following excerpt from a meeting', 'uk_f',
      'Let’s quickly check our WaveCast podcast pipeline board so every show lands smoothly in Friday’s release queue. Good news on Episode 19: legal cleared the banking sponsor script at nine A.M. Also, Episode 21’s acoustic intro music licensing finished yesterday afternoon. That leaves only one episode still blocking Friday’s schedule—whichever entry on our board currently shows Pending Audio Cleanup. Lead editor on that episode, please bump it to top priority right after lunch.',
      doc('Production Board', 'WaveCast Podcast Network — Release Pipeline', [['Target Drop', 'Friday 6:00 A.M.']], [
        tbl(['Episode #', 'Featured Topic', 'Lead Editor', 'Printed Status'], [
          ['Episode 18', 'Urban Transit Design', 'M. Alvarez', 'Ready to Publish'],
          ['Episode 19', 'Solar Microgrids', 'T. Brooks', 'Pending Sponsor Script'],
          ['Episode 20', 'Rare Book Auctions', 'H. Sato', 'Pending Audio Cleanup'],
          ['Episode 21', 'Nighttime Astronomy', 'D. Okafor', 'Pending Music License'],
        ]),
      ]), [
      ['Part 4 · Graphic', 'Look at the graphic. Which editor must prioritize finishing an episode right after lunch?', ['H. Sato', 'M. Alvarez', 'T. Brooks', 'D. Okafor'], 0, 'ตอบ H. Sato (ตอนเดียวที่ยังติดขัดก่อนปล่อยวันศุกร์คือตอนที่ขึ้นสถานะ Pending Audio Cleanup ซึ่งในตารางคือ Episode 20 ที่มี H. Sato เป็น Lead Editor)'],
      ['Part 4 · Detail', 'What update did the speaker give regarding Episode 19?', ['Its sponsor script received legal approval this morning', 'Its acoustic intro music licensing wrapped up yesterday', 'Its audio cleanup is scheduled after lunch', 'Its featured topic shifted to urban transit design'], 0, 'ตอบ Its sponsor script received legal approval this morning (ฝ่ายกฎหมายอนุมัติสคริปต์สปอนเซอร์ของ Episode 19 แล้วเมื่อเก้าโมงเช้า)'],
      ['Part 4 · Detail', 'When are finalized episodes scheduled to release?', ['On Friday at 6:00 A.M.', 'Tomorrow afternoon', 'At nine A.M. Monday', 'Right after lunch'], 0, 'ตอบ On Friday at 6:00 A.M. (ดูจากข้อมูลด้านบนของบอร์ด Target Drop: Friday 6:00 A.M. และในเสียงบอก Friday release queue)'],
    ]),

    // ==================== SET 10 ====================
    p1(10, 'l10-p1-1', 'uk_f', [
      'A veterinarian is examining a dog resting on a stainless table.',
      'Pet owners are sitting with puppies on a waiting room bench.',
      'A technician is mopping the floor inside an animal kennel.',
      'Bags of dog food are stacked beside a clinic doorway.',
    ], 0, 'ตอบ A veterinarian is examining a dog resting on a stainless table. (สัตวแพทย์กำลังตรวจร่างกายสุนัขที่นอนอยู่บนโต๊ะตรวจสเตนเลส)'),
    p1(10, 'l10-p1-2', 'us_m', [
      'A scientist is pouring water from a glass flask into a testing vial.',
      'Chemists are sealing plastic jugs inside cardboard shipping boxes.',
      'Water samples are cooling inside an open laboratory refrigerator.',
      'Two technicians are wiping safety goggles beside a sink.',
    ], 0, 'ตอบ A scientist is pouring water from a glass flask into a testing vial. (นักวิทยาศาสตร์กำลังรินตัวอย่างน้ำจากขวดแก้วลงในหลอดทดสอบ)'),
    p1(10, 'l10-p1-3', 'au_f', [
      'Electricians are screwing light bulbs into tall ceiling fixtures.',
      'Glass pendant lamps hang at varied heights above a wooden counter.',
      'Floor lamps have been packed inside brown crates for delivery.',
      'Shoppers are switching desk lamps on and off along a shelf.',
    ], 1, 'ตอบ Glass pendant lamps hang at varied heights above a wooden counter. (โคมไฟแขวนแก้วห้อยเรียงรายในระดับความสูงต่างกันเหนือเคาน์เตอร์ไม้ของโชว์รูม)'),
    p1(10, 'l10-p1-4', 'ca_m', [
      'A pet owner holding a carrier is speaking with a clinic receptionist.',
      'Two veterinarians are lifting a dog onto a rolling examination cart.',
      'Cat collars and leashes are hanging evenly along a pegboard wall.',
      'A clerk is sorting medical charts inside a metal filing cabinet.',
    ], 0, 'ตอบ A pet owner holding a carrier is speaking with a clinic receptionist. (เจ้าของสัตว์เลี้ยงที่ถือตะกร้าแมวกำลังพูดคุยกับพนักงานต้อนรับหลังเคาน์เตอร์)'),
    p1(10, 'l10-p1-5', 'us_f2', [
      'Interior designers are looking up at illuminated wall sconces.',
      'Painters are brushing white primer onto a brick showroom wall.',
      'Clients are seated around fabric swatches on a low table.',
      'Boxes of brass hardware are being carried through double doors.',
    ], 0, 'ตอบ Interior designers are looking up at illuminated wall sconces. (นักออกแบบตกแต่งภายในกำลังแหงนหน้าดูโคมไฟติดผนังที่เปิดไฟสว่าง)'),
    p1(10, 'l10-p1-6', 'uk_m', [
      'Lab inspectors are placing barcode stickers onto water meters.',
      'Sealed sample bottles are arranged in wire racks inside a steel cabinet.',
      'Technicians are calibrating microscope lenses near a cleanroom window.',
      'Protective lab coats are hung side by side along a locker door.',
    ], 1, 'ตอบ Sealed sample bottles are arranged in wire racks inside a steel cabinet. (ขวดเก็บตัวอย่างน้ำที่ปิดผนึกแล้วถูกจัดเรียงอยู่ในตะแกรงลวดภายในตู้สเตนเลส)'),

    // Set 10 Part 2 (25 Qs)
    p2(10, 'l10-p2-1', 'uk_f', 'us_m', 'Where do pet owners sign the surgical consent form before dropping off pets?', ['At the check-in kiosk beside the feline waiting bench.', 'Yes, our veterinary clinic opens at seven-thirty.', 'Usually two hours after routine dental scaling.'], 0, 'ตอบ At the check-in kiosk beside the feline waiting bench. (ถามสถานที่เซ็นใบยินยอม Where ตอบที่จุดเช็กอินข้างม้านั่งโซนแมว)'),
    p2(10, 'l10-p2-2', 'us_m', 'au_f', 'Who calibrated the turbidity meter in the drinking water cleanroom?', ['Below zero-point-five nephelometric units.', 'Lead analyst Sarah checked it right after dawn.', 'On Stainless Bench Three beside Airlock B.'], 1, 'ตอบ Lead analyst Sarah checked it right after dawn. (ถามบุคคล Who ตอบนักวิเคราะห์หลัก Sarah เป็นคนปรับเทียบตั้งแต่เช้าตรู่)'),
    p2(10, 'l10-p2-3', 'ca_f', 'uk_m', 'When does the architectural lighting showroom’s evening designer showcase begin?', ['Inside our darkened bronze gallery downstairs.', 'Over forty custom Italian glass fixtures.', 'Cocktails start at six, followed by the dimmer demo at six-thirty.'], 2, 'ตอบ Cocktails start at six, followed by the dimmer demo at six-thirty. (ถามเวลาเริ่มงาน When ตอบเริ่มเครื่องดื่มต้อนรับ 18:00 น. และสาธิตดิมเมอร์ 18:30 น.)'),
    p2(10, 'l10-p2-4', 'au_m', 'us_f', 'Should we mount brass track spotlights along the gallery ceiling or use recessed downlights?', ['Recessed downlights keep the plaster ceiling looking crisp.', 'Yes, both fixtures run on warm 2700-kelvin LEDs.', 'Roughly twelve feet above the marble entryway.'], 0, 'ตอบ Recessed downlights keep the plaster ceiling looking crisp. (คำถามเลือกแบบไฟ A or B ตอบเลือกไฟดาวน์ไลต์ฝังฝ้าเพื่อให้เพดานดูเรียบสวย)'),
    p2(10, 'l10-p2-5', 'us_f2', 'uk_m', 'Why was Friday’s river water sampling trip postponed until Monday?', ['Every month across six municipal stations.', 'Heavy upstream storms muddied normal baseline flows.', 'Bring twelve sterile glass amber bottles.'], 1, 'ตอบ Heavy upstream storms muddied normal baseline flows. (ถามเหตุผล Why ตอบพายุฝนต้นน้ำทำให้น้ำขุ่นผิดปกติจากค่ามาตรฐาน)'),
    p2(10, 'l10-p2-6', 'uk_m', 'ca_m', 'Haven’t the rabies vaccination certificates been mailed to Mrs. Nguyen yet?', ['No, her tabby cat came in for grooming only.', 'She actually asked us to email the stamped PDF instead.', 'Twenty-five dollars including city registration tags.'], 1, 'ตอบ She actually asked us to email the stamped PDF instead. (คำถามปฏิเสธ Haven’t... ตอบข้อเท็จจริงว่าลูกค้าขอให้ส่งไฟล์ PDF ทางอีเมลแทนการส่งไปรษณีย์)'),
    p2(10, 'l10-p2-7', 'us_m2', 'us_f', 'How many warm-dimming LED pendants did the restaurant client reserve?', ['Fourteen brushed-brass units for above their bar counter.', 'Rated at three thousand lumens per fixture.', 'Shipping direct from Milan next Tuesday.'], 0, 'ตอบ Fourteen brushed-brass units for above their bar counter. (ถามจำนวน How many ตอบจองไว้ 14 โคมสำหรับติดเหนือเคาน์เตอร์บาร์)'),
    p2(10, 'l10-p2-8', 'uk_f2', 'au_m', 'Could you sterilize the stainless kennels in Recovery Ward B before three?', ['Yes, post-op patients need quiet warm blankets.', 'Already done—I finished disinfecting the whole row at two.', 'Behind the pharmacy storage closet.'], 1, 'ตอบ Already done—I finished disinfecting the whole row at two. (ขอให้ฆ่าเชื้อกรงพักฟื้นก่อนบ่ายสาม ตอบว่าฆ่าเชื้อเสร็จทั้งแถวแล้วตั้งแต่บ่ายสอง)'),
    p2(10, 'l10-p2-9', 'ca_m', 'us_f', 'The deionized water tap beside Bench Four has been dripping since yesterday.', ['No, I used distilled water for that titration.', 'About ten liters per hour when fully open.', 'I’ll submit an urgent plumbing ticket to Facilities right now.'], 2, 'ตอบ I’ll submit an urgent plumbing ticket to Facilities right now. (ประโยคบอกเล่าแจ้งก๊อกน้ำรั่ว ตอบรับอาสาแจ้งฝ่ายซ่อมบำรุงท่อน้ำทันที)'),
    p2(10, 'l10-p2-10', 'us_f', 'uk_f2', 'Which veterinary pharmacy supplier stocks flavored chewable heartworm tablets?', ['VetMed Direct usually carries all three weight tiers in stock.', 'Yes, dogs love beef-flavored monthly chews.', 'Kept inside the locked cabinet behind Reception.'], 0, 'ตอบ VetMed Direct usually carries all three weight tiers in stock. (ถามเลือกผู้จัดหา Which supplier ตอบบริษัท VetMed Direct ที่มักมีสต็อกครบสามขนาด)'),
    p2(10, 'l10-p2-11', 'au_f', 'us_m2', 'How long does bacterial incubation testing take for municipal reservoir samples?', ['Twenty-four full hours inside the thirty-five-degree oven.', 'Three sterile filtration membranes per batch.', 'Ask Supervisor Lee at the microbiology bench.'], 0, 'ตอบ Twenty-four full hours inside the thirty-five-degree oven. (ถามระยะเวลา How long ตอบบ่มเชื้อครบ 24 ชั่วโมงเต็มในตู้อบ)'),
    p2(10, 'l10-p2-12', 'uk_m', 'ca_f', 'Would you rather review the hotel chandelier blueprints now or after lunch?', ['Let’s tackle them right now while our electrical engineer is free.', 'Yes, the atrium ceiling spans thirty feet.', 'Sixteen custom hand-blown glass rings.'], 0, 'ตอบ Let’s tackle them right now while our electrical engineer is free. (คำถามเลือกเวลา A or B ตอบดูตอนนี้เลยขณะที่วิศวกรไฟฟ้าว่างอยู่)'),
    p2(10, 'l10-p2-13', 'us_m', 'uk_f', 'Where should lab analysts store expired reagent cartridges for hazardous pickup?', ['Lock them inside the yellow ventilated chemical locker by Dock Two.', 'Every second Wednesday morning before ten.', 'Because acid cartridges cannot mix with general trash.'], 0, 'ตอบ Lock them inside the yellow ventilated chemical locker by Dock Two. (ถามสถานที่เก็บสารหมดอายุ Where ตอบล็อกไว้ในตู้เก็บสารเคมีสีเหลืองข้างท่าขนส่ง 2)'),
    p2(10, 'l10-p2-14', 'uk_f', 'au_m', 'Why don’t we set up a separate cat-only waiting alcove near the sunlit bay window?', ['No, Dr. Torres prefers examining large dogs early.', 'Cats stay far calmer without barking dogs beside their carriers!', 'Across from the reception check-out desk.'], 1, 'ตอบ Cats stay far calmer without barking dogs beside their carriers! (Why don’t we เสนอจัดมุมแยกสำหรับแมว ตอบเห็นด้วยพร้อมเหตุผลว่าช่วยให้แมวไม่ตื่นตกใจเสียงสุนัข)'),
    p2(10, 'l10-p2-15', 'us_m2', 'ca_f', 'You remembered to switch off the showroom window track lights last night, didn’t you?', ['Actually, our automatic sunset timer handles those every night now.', 'Warm amber spots highlighting hand-blown globes.', 'That corner gallery faces busy Cedar Boulevard.'], 0, 'ตอบ Actually, our automatic sunset timer handles those every night now. (Tag question ถามย้ำ ตอบชี้แจงว่าปัจจุบันใช้ตัวตั้งเวลาเปิดปิดอัตโนมัติแทนแล้ว)'),
    p2(10, 'l10-p2-16', 'ca_m', 'uk_f2', 'Who approved the extra Saturday technician hours for the reservoir water audit?', ['Lab Director Patel authorized overtime after Thursday’s algae bloom.', 'Two microbiologists and one cleanroom helper.', 'Inside the downtown water quality headquarters.'], 0, 'ตอบ Lab Director Patel authorized overtime after Thursday’s algae bloom. (ถามบุคคล Who ตอบผู้อำนวยการแล็บ Patel อนุมัติล่วงเวลาหลังพบสาหร่ายบลูม)'),
    p2(10, 'l10-p2-17', 'us_f2', 'au_m', 'How much is the microchip registration fee during our spring puppy wellness clinic?', ['Just twenty dollars, including lifetime database enrollment.', 'Yes, painless implantation takes only a few seconds.', 'For dogs and cats over eight weeks old.'], 0, 'ตอบ Just twenty dollars, including lifetime database enrollment. (ถามราคา How much ตอบเพียง 20 ดอลลาร์รวมค่าลงทะเบียนฐานข้อมูลตลอดชีพ)'),
    p2(10, 'l10-p2-18', 'uk_m', 'us_f', 'Did the cleanroom air filtration pressure stay within range during the power test?', ['Twice yearly before federal lab accreditation.', 'No, technicians forgot to wear double shoe covers.', 'Backup generators kicked in smoothly, so pressure never dipped.'], 2, 'ตอบ Backup generators kicked in smoothly, so pressure never dipped. (ถามว่าความดันอากาศห้องปลอดเชื้อปกติไหม ตอบเครื่องปั่นไฟสำรองทำงานทัน ความดันเลยไม่ตก)'),
    p2(10, 'l10-p2-19', 'au_f', 'us_m', 'Those handmade frosted glass wall sconces throw such a gentle glow!', ['Right? Zero harsh glare even at full brightness!', 'Yes, we carry replacement dimmers on wall display four.', 'Let me write up the showroom quote for six sconces.'], 0, 'ตอบ Right? Zero harsh glare even at full brightness! (ประโยคบอกเล่าชมแสงโคมไฟ ตอบเห็นด้วยว่าแสงนุ่มนวลไม่แยงตาเลยแม้เปิดสุด)'),
    p2(10, 'l10-p2-20', 'ca_f', 'uk_m', 'When will custom brushed-bronze dimmer switches arrive from the Italian factory?', ['Packaged in foam-lined wooden crates.', 'Our import broker estimates arrival by the eighteenth of this month.', 'Ordered for the boutique hotel renovation downtown.'], 1, 'ตอบ Our import broker estimates arrival by the eighteenth of this month. (ถามกำหนดถึง When ตอบตัวแทนนำเข้าประเมินว่าจะมาถึงวันที่ 18 เดือนนี้)'),
    p2(10, 'l10-p2-21', 'uk_f2', 'us_m2', 'Do you know if the veterinary clinic offers late evening prescription pickups?', ['I refilled my terrier’s ear drops yesterday morning.', 'They stay open until seven-thirty on Wednesdays for medication pickups.', 'Behind the pet pharmacy counter on floor one.'], 1, 'ตอบ They stay open until seven-thirty on Wednesdays for medication pickups. (ถามเวลาเปิดรับยาช่วงค่ำ ตอบว่าวันพุธเปิดถึง 19:30 น. สำหรับมารับยา)'),
    p2(10, 'l10-p2-22', 'us_m', 'ca_f', 'What time does the hazardous chemical disposal van collect waste solvents on Thursdays?', ['Promptly at eight-fifteen A.M. outside Loading Bay One.', 'To dispose of expired chromatography solvents safely.', 'Required under state environmental lab guidelines.'], 0, 'ตอบ Promptly at eight-fifteen A.M. outside Loading Bay One. (ถามเวลา What time ตอบ 8:15 น. ตรงที่ท่าขนส่ง 1)'),
    p2(10, 'l10-p2-23', 'au_m', 'uk_f', 'Can you hold this nervous terrier steady while I trim his front nails?', ['Yes, canine nail clippers are in the top drawer.', 'Sure thing—let me wrap a warm towel gently around his shoulders.', 'Inside Examination Room Two near the scale.'], 1, 'ตอบ Sure thing—let me wrap a warm towel gently around his shoulders. (ขอให้ช่วยจับสุนัขให้นิ่ง ตอบยินดีพร้อมใช้ผ้าขนหนูอุ่นห่อตัวเบาๆ)'),
    p2(10, 'l10-p2-24', 'us_f', 'uk_m', 'Have the interior lighting consultants confirmed sample finishes for the museum atrium?', ['Matte champagne aluminum and hand-rubbed brass.', 'They’re emailing signed finish cards right after their three o’clock walkthrough.', 'Along the vaulted glass dome overlooking the courtyard.'], 1, 'ตอบ They’re emailing signed finish cards right after their three o’clock walkthrough. (ถามว่ายืนยันตัวอย่างผิววัสดุหรือยัง ตอบจะส่งการ์ดตัวอย่างที่เซ็นรับรองหลังเดินตรวจหน้างานตอนบ่ายสาม)'),
    p2(10, 'l10-p2-25', 'ca_m', 'au_f', 'Whose lab safety goggles are hanging on the hook outside Airlock Two?', ['Those belong to Mei—she’s logging nitrate readings inside the lab.', 'Yes, anti-fog lenses are required past the cleanroom line.', 'Place spare sterile hairnets inside the metal dispenser.'], 0, 'ตอบ Those belong to Mei—she’s logging nitrate readings inside the lab. (ถามเจ้าของแว่นตานิรภัย Whose ตอบเป็นของ Mei ที่กำลังบันทึกค่าไนเตรตในแล็บ)'),

    // Set 10 Part 3 (13 Conversations: 1-10 no doc, 11-13 with doc; >=2 3-speaker convs)
    p3(10, 'l10-p3-1', [
      ['Woman', 'us_f', 'Liam, watch out before Dr. Brooks weighs that golden retriever—Exam Room 1’s floor scale is reading three kilos heavy even with nothing standing on it!'],
      ['Man', 'uk_m', 'Wait—did mopping water seep under the load cell sensor this morning? Zeroing button isn’t resetting it either.'],
      ['Woman', 'us_f', 'Probably! And accurate dosage calculations depend on exact body weight, so let’s unplug Room 1’s pad and wheel in the portable scale from Recovery Ward A.'],
      ['Man', 'uk_m', 'Good call—I’ll put an Out of Order cone on the faulty scale and grab the backup unit before the nine o’clock appointment walks in.'],
    ], null, [
      ['Part 3 · Problem', 'What malfunction did the woman notice in Exam Room 1?', ['A digital animal scale displays an inaccurate baseline weight', 'Water flooded the examination table drawers', 'The zeroing switch snapped off the wall panel', 'A golden retriever refused to step onto the clinic floor'], 0, 'ตอบ A digital animal scale displays an inaccurate baseline weight (เครื่องชั่งน้ำหนักสัตว์อ่านค่าเกินจริงไป 3 กก. แม้ไม่มีอะไรวางอยู่ และกดรีเซ็ตไม่ได้)'],
      ['Part 3 · Detail', 'Why is fixing the weight reading urgent before nine o’clock?', ['Medication dosages rely on accurate pet weight measurements', 'Dr. Brooks needs weight records for grooming price tiers', 'Recovery Ward A requires the portable scale at ten', 'Insurance auditors inspect clinic scales every morning'], 0, 'ตอบ Medication dosages rely on accurate pet weight measurements (การคำนวณขนาดยาต้องอาศัยน้ำหนักตัวสัตว์ที่แม่นยำ)'],
      ['Part 3 · Action', 'What will the man place beside the broken scale?', ['An out-of-order warning cone', 'A waterproof plastic floor mat', 'A replacement load cell sensor', 'A towel to dry mop water'], 0, 'ตอบ An out-of-order warning cone (ผู้ชายจะวางกรวยป้ายชำรุดไว้ตรงเครื่องชั่งที่เสียแล้วไปเข็นเครื่องสำรองมาใช้)'],
    ]),

    p3(10, 'l10-p3-2', [
      ['Man', 'au_m', 'Nadia, why is the positive-pressure warning light blinking amber outside Cleanroom B’s pass-through hatch?'],
      ['Woman', 'ca_f', 'I just checked the differential gauge—air pressure dropped slightly because the rubber gasket along the inner hatch door tore at the bottom hinge.'],
      ['Man', 'au_m', 'Good catch! We can’t pass municipal drinking water bottles through an unsealed hatch without risking airborne dust contamination.'],
      ['Woman', 'ca_f', 'Exactly. Let’s route morning bottles through Airlock A for the next hour while I glue a fresh neoprene seal strip onto Hatch B.'],
    ], null, [
      ['Part 3 · Problem', 'What triggered the amber pressure warning at Cleanroom B?', ['A torn rubber seal around the pass-through hatch door', 'A power failure inside the cleanroom air filtration unit', 'Municipal water bottles left open inside Airlock A', 'Dust buildup clogging the differential pressure gauge'], 0, 'ตอบ A torn rubber seal around the pass-through hatch door (ซีลยางของประตูช่องส่งผ่านตัวอย่างฉีกขาดตรงบานพับล่างทำให้ความดันอากาศลด)'],
      ['Part 3 · Detail', 'What risk would occur if bottles passed through Hatch B right now?', ['Airborne dust could contaminate water samples', 'Glass sample bottles could crack against the hinge', 'Airlock A gauges would lose calibration', 'Water spills could dissolve adhesive glue strips'], 0, 'ตอบ Airborne dust could contaminate water samples (เสี่ยงที่ฝุ่นในอากาศจะเล็ดลอดเข้าไปปนเปื้อนขวดตัวอย่างน้ำดื่ม)'],
      ['Part 3 · Action', 'How will staff transfer samples during the next hour?', ['Through Airlock A while the hatch seal is repaired', 'By postponing morning water testing until noon', 'Inside sealed stainless-steel carts in the hallway', 'Directly through the front laboratory doorway'], 0, 'ตอบ Through Airlock A while the hatch seal is repaired (เปลี่ยนไปส่งขวดตัวอย่างผ่าน Airlock A ชั่วคราว 1 ชั่วโมงระหว่างซ่อมซีล)'],
    ]),

    p3(10, 'l10-p3-3', [
      ['Woman', 'uk_f2', 'Devon, Cedar Bistro wants all eighteen amber glass pendant lights installed before Friday’s soft opening, and our warehouse just called—only twelve amber shades are on the shelf!'],
      ['Man', 'us_m2', 'Twelve? Where are the remaining six? Didn’t the Milan shipment land Tuesday?'],
      ['Woman', 'uk_f2', 'Customs held one crate until Monday—so we can’t leave their dining room in the dark on opening night! Should we lend them six clear-ribbed showroom pendants for the weekend?'],
      ['Man', 'us_m2', 'Great save! If our electricians hang twelve amber over the main tables and six clear glass above the bar temporarily, we can swap those six Monday free of charge.'],
    ], null, [
      ['Part 3 · Problem', 'Why are six amber pendant lights unavailable for Cedar Bistro’s opening?', ['One shipping crate is delayed in customs until Monday', 'Six glass shades broke during showroom installation', 'Cedar Bistro increased its dining room order today', 'The Milan factory discontinued amber pendant shades'], 0, 'ตอบ One shipping crate is delayed in customs until Monday (ลังสินค้าหนึ่งลังติดตรวจอยู่ที่ศุลกากรจนถึงวันจันทร์)'],
      ['Part 3 · Meaning', 'What does the woman mean when she says, "we can’t leave their dining room in the dark on opening night"?', ['They must provide temporary lighting so the restaurant can open Friday', 'Dining room dimmer switches need higher wattage bulbs', 'Electricians must work overnight with floodlights on Thursday', 'The bistro should turn off bar pendants during dinner'], 0, 'ตอบ They must provide temporary lighting so the restaurant can open Friday (หมายความว่าต้องหาโคมไฟชั่วคราวไปติดให้ร้านอาหารเปิดให้บริการคืนวันศุกร์ได้ทัน ไม่ปล่อยให้ไม่มีไฟใช้)'],
      ['Part 3 · Detail', 'What will the showroom do on Monday?', ['Replace the six temporary clear fixtures at no charge', 'Ship twelve more amber globes to another restaurant', 'Refund the client’s installation deposit in full', 'Send an interior designer to adjust dining table spots'], 0, 'ตอบ Replace the six temporary clear fixtures at no charge (จะส่งช่างไปสับเปลี่ยนโคมไฟแก้วใสชั่วคราว 6 ดวงออกเป็นสีอำพันให้ฟรีในวันจันทร์)'],
    ]),

    p3(10, 'l10-p3-4', [
      ['Man', 'ca_m', 'Mrs. Alvarez, your beagle’s ear infection cleared up nicely, though we want five more days of medicated eardrops to ensure it doesn’t rebound.'],
      ['Woman1', 'us_f2', 'Of course, Doctor! Can I pick those drops up right here at your front clinic pharmacy before heading home?'],
      ['Woman2', 'au_f', 'Yes—actually, this compounded formula stays potent only when refrigerated, so I just pulled a fresh bottle from our vaccine cold box and slipped it inside an insulated ice-pack sleeve.'],
      ['Man', 'ca_m', 'Wait—remember to warm the dropper bottle gently in your hands for sixty seconds before putting drops in his ear so cold liquid doesn’t startle him!'],
      ['Woman1', 'us_f2', 'Oh, thank you for mentioning that tip—I’ll apply them morning and evening after his walks.'],
    ], null, [
      ['Part 3 · Detail', 'Why does the pharmacy technician give the pet owner an ice-pack sleeve?', ['The custom ear medication must remain refrigerated', 'The beagle needs cold compresses after outdoor walks', 'Clinic waiting room refrigerators are undergoing defrosting', 'Hot weather could melt the plastic dropper tip'], 0, 'ตอบ The custom ear medication must remain refrigerated (ยาหยอดหูสูตรผสมพิเศษต้องแช่เย็นเพื่อคงประสิทธิภาพตัวยา)'],
      ['Part 3 · Detail', 'What advice does the veterinarian give before applying the drops?', ['Warm the bottle briefly in her hands first', 'Shake the refrigerated drops vigorously for sixty seconds', 'Apply medication only before morning walks', 'Store the opened bottle beside pet food bowls'], 0, 'ตอบ Warm the bottle briefly in her hands first (แนะนำให้อุ่นขวดยาในฝ่ามือ 60 วินาทีก่อนหยอด เพื่อไม่ให้ยาเย็นจนสุนัขตกใจ)'],
      ['Part 3 · Topic', 'What is the second woman’s role at the clinic?', ['Veterinary pharmacy technician', 'Animal surgical nurse', 'Reception appointment clerk', 'Dog grooming specialist'], 0, 'ตอบ Veterinary pharmacy technician (เป็นคนจัดยาหยอดหูสูตรผสมจากตู้เย็นและใส่ซองเจลเย็นให้เจ้าของสัตว์เลี้ยง)'],
    ]),

    p3(10, 'l10-p3-5', [
      ['Man', 'uk_m', 'Elena, heavy storm runoff forced our field crew to collect East Creek nitrate samples four hours earlier than planned, so those amber bottles expire at one P.M. sharp!'],
      ['Woman', 'us_f', 'Yikes—our ion chromatograph bench is currently loaded with routine municipal tap water checks that don’t expire until tomorrow!'],
      ['Man', 'uk_m', 'Can we pause the tap water queue after the current twenty-minute run finishes and slip East Creek straight into Slots 1 through 6?'],
      ['Woman', 'us_f', 'Definitely! Label the East Creek rack Urgent Hold and set it by Bench Two—I’ll re-index the automated sampler script right now.'],
    ], null, [
      ['Part 3 · Problem', 'Why must East Creek water samples be tested immediately?', ['Their laboratory holding window expires at 1:00 P.M.', 'Storm runoff cracked several amber sample bottles', 'Routine municipal tap tests contaminated Bench Two', 'Field samplers accidentally froze the nitrate vials'], 0, 'ตอบ Their laboratory holding window expires at 1:00 P.M. (ตัวอย่างน้ำ East Creek เก็บเร็วกว่ากำหนดจึงจะหมดอายุการเก็บรักษาตอน 13:00 น. ตรง)'],
      ['Part 3 · Detail', 'What is currently running on the ion chromatograph?', ['Routine tap water tests with a later deadline', 'Microbial colony counts from Cedar Reservoir', 'Calibration fluid tests after morning maintenance', 'Stormwater sediment filtration experiments'], 0, 'ตอบ Routine tap water tests with a later deadline (ตัวอย่างน้ำประปาทั่วไปซึ่งยังไม่หมดอายุจนถึงวันพรุ่งนี้)'],
      ['Part 3 · Action', 'How will the woman adjust Bench Two’s testing queue?', ['Update the automated sampler sequence on the bench', 'Drive back to East Creek to collect fresh bottles', 'Cancel afternoon tap water analysis until tomorrow', 'Wash glass amber vials in Cleanroom A'], 0, 'ตอบ Update the automated sampler sequence on the bench (ผู้หญิงจะเข้าไปจัดลำดับสคริปต์เครื่องสุ่มตัวอย่างอัตโนมัติใหม่ทันที)'],
    ]),

    p3(10, 'l10-p3-6', [
      ['Woman', 'ca_f', 'Hi Marco, I’m specifying track spotlights for a contemporary sculpture gallery, and the curator insists on ultra-accurate color rendering above CRI 95 with zero harsh edge rings.'],
      ['Man', 'au_m', 'You came to the right showroom! Let’s step into our Dark Room demo alcove—we mounted both our 2700-kelvin warm museum tracks and 3500-kelvin neutral beams side by side above plaster busts.'],
      ['Woman', 'ca_f', 'Oh, look how crisp the stone grain appears under the 3500-kelvin beam without looking cold or clinical! Do those heads accept honeycomb louvers to hide bulb glare?'],
      ['Man', 'au_m', 'Yes, snap-in black honeycomb baffles come standard—and I’ll print photometric beam spread sheets for your lighting layout binder.'],
    ], null, [
      ['Part 3 · Topic', 'What type of project is the woman selecting lighting for?', ['A modern sculpture exhibition gallery', 'An outdoor botanical garden walkway', 'A boutique residential dining room', 'A downtown veterinary hospital lobby'], 0, 'ตอบ A modern sculpture exhibition gallery (ออกแบบไฟส่องสว่างสำหรับแกลเลอรีจัดแสดงประติมากรรมร่วมสมัย)'],
      ['Part 3 · Detail', 'Which beam color temperature impressed the woman during the demonstration?', ['3500-kelvin neutral lighting', '2700-kelvin warm lighting', '5000-kelvin bright daylight', '4000-kelvin halogen lighting'], 0, 'ตอบ 3500-kelvin neutral lighting (เธอบอกว่าเนื้อหินดูคมชัดสวยมากภายใต้ลำแสง 3500 เคลวินโดยไม่ดูแข็งทื่อ)'],
      ['Part 3 · Detail', 'What does the man offer to print for the woman’s binder?', ['Photometric beam spread specifications', 'Wholesale trade pricing invoices', 'Gallery floor plans from past clients', 'Installation checklists for electricians'], 0, 'ตอบ Photometric beam spread specifications (เสนอพิมพ์ตารางข้อมูลการกระจายลำแสงเชิงโฟโตเมตริกใส่แฟ้มให้)'],
    ]),

    p3(10, 'l10-p3-7', [
      ['Woman', 'uk_f', 'Carlos, I noticed Grooming Room drying cage number two felt unusually hot when I walked past—even with the dial set to room-temperature air only!'],
      ['Man', 'us_m', 'Wait, let me hold my thermometer probe inside! Whoa—it’s blowing forty-two degrees! The heating element relay must have stuck closed!'],
      ['Woman', 'uk_f', 'Unplug that cage immediately and wheel it into Maintenance Storage so nobody puts a puppy inside by accident!'],
      ['Man', 'us_m', 'Done—I’ll order a replacement thermal relay today, and our groomers can rely on handheld low-heat stand dryers for today’s appointments.'],
    ], null, [
      ['Part 3 · Problem', 'What defect did the speakers discover in Grooming Room cage two?', ['Its drying fan blew hot air despite being turned to cool', 'Its thermometer probe displayed forty-two degrees too low', 'Its kennel door latch jammed while a puppy was inside', 'Its electrical plug sparked against the wall outlet'], 0, 'ตอบ Its drying fan blew hot air despite being turned to cool (กรงเป่าแห้งลมร้อนค้างที่อุณหภูมิสูงแม้หมุนปุ่มไปที่ลมอุณหภูมิห้องแล้วก็ตาม)'],
      ['Part 3 · Action', 'Why does the woman want the cage wheeled into storage right away?', ['To prevent staff from accidentally placing a pet inside it', 'To make space for large handheld grooming dryers', 'To let facility electricians test hallway wall sockets', 'To clean spilled shampoo behind Grooming Room two'], 0, 'ตอบ To prevent staff from accidentally placing a pet inside it (เพื่อป้องกันไม่ให้ใครเผลอนำลูกสุนัขเข้าไปอบในกรงที่พังโดยไม่รู้ตัว)'],
      ['Part 3 · Detail', 'How will groomers dry pets during the rest of the day?', ['By using handheld low-heat stand blowers', 'By towel-drying dogs in Recovery Ward B', 'By scheduling poodle appointments for tomorrow', 'By sharing drying cage number one with Exam Room 2'], 0, 'ตอบ By using handheld low-heat stand blowers (ช่างตัดขนจะใช้เครื่องเป่าแบบตั้งพื้นความร้อนต่ำแทนไปก่อนตลอดทั้งวันนี้)'],
    ]),

    p3(10, 'l10-p3-8', [
      ['Man1', 'us_m2', 'Maya, our cleanroom UV spectrophotometer failed its baseline energy check twice this morning—the deuterium lamp intensity dropped forty percent below calibration spec.'],
      ['Woman', 'uk_f2', 'Good thing we noticed before running municipal trace organics! Let me bring in David—our instrument service rep actually arrived downstairs ten minutes ago for quarterly checks.'],
      ['Man2', 'ca_m', 'Morning, team! I heard you have a dimming deuterium lamp? Lucky for you, I always stock two pre-aligned replacement lamps right inside my van tool case.'],
      ['Man1', 'us_m2', 'Fantastic! Once you swap that bulb and run the wavelength verification curve, could you also update our cleanroom wall calibration certificate?'],
    ], null, [
      ['Part 3 · Problem', 'Why could the cleanroom lab not run trace organics testing this morning?', ['A UV instrument lamp failed its energy intensity check', 'Municipal water samples arrived without sterile caps', 'Quarterly safety inspections closed the cleanroom bench', 'Calibration software erased baseline wavelength curves'], 0, 'ตอบ A UV instrument lamp failed its energy intensity check (หลอดไฟดิวเทอเรียมของเครื่องวิเคราะห์ UV อ่อนกำลังลง 40% จนไม่ผ่านเกณฑ์ทดสอบ)'],
      ['Part 3 · Detail', 'Why is David able to repair the instrument right away?', ['He carries pre-aligned spare lamps inside his service van', 'He already ordered a new bulb through cleanroom mail', 'A neighboring lab lent him an identical spectrophotometer', 'Quarterly maintenance contracts require spare bench storage'], 0, 'ตอบ He carries pre-aligned spare lamps inside his service van (David ตัวแทนบริการอุปกรณ์พกหลอดไฟอะไหล่ที่ปรับศูนย์ไว้แล้วมาในรถตู้ด้วยเสมอ)'],
      ['Part 3 · Action', 'What additional task does the lab director ask David to complete?', ['Update the calibration certificate posted on the lab wall', 'Train Maya on replacing deuterium lamps independently', 'Test municipal trace organic samples on Bench Three', 'Inspect cleanroom airlock gaskets before leaving'], 0, 'ตอบ Update the calibration certificate posted on the lab wall (ขอให้ช่วยอัปเดตใบรับรองการปรับเทียบที่ติดอยู่บนผนังห้องแล็บด้วย)'],
    ]),

    p3(10, 'l10-p3-9', [
      ['Woman', 'au_f', 'Leo, the boutique hotel manager over on Harbor Avenue just called—our delivery van dropped off four cases of 5000-kelvin bright daylight bulbs instead of the 2700-kelvin warm filament bulbs they ordered!'],
      ['Man', 'ca_m', 'Oh no! Crisp blue-white 5000-kelvin bulbs would look like a hospital corridor inside their vintage mahogany lobby!'],
      ['Woman', 'au_f', 'Right? Their ribbon-cutting photo shoot starts at four P.M., so they need the warm amber bulbs ASAP. Do we have four cases of 2700-kelvin in our back warehouse?'],
      ['Man', 'ca_m', 'Yes, pallet aisle six is packed with them! I’m loading four cases into our express courier van now and telling the driver to pick up the daylight cartons simultaneously.'],
    ], null, [
      ['Part 3 · Problem', 'What shipping error occurred with the hotel’s lighting order?', ['Bulbs with the wrong color temperature were delivered', 'Four glass chandelier globes cracked during transport', 'Daylight bulbs arrived without mahogany mounting sockets', 'Delivery drivers dropped cases at the wrong avenue'], 0, 'ตอบ Bulbs with the wrong color temperature were delivered (ส่งหลอดไฟอุณหภูมิสีผิดเป็นแสงขาวจ้า 5000K แทนที่จะเป็นแสงวอร์ม 2700K)'],
      ['Part 3 · Detail', 'Why does the hotel need the replacement bulbs urgently?', ['A ribbon-cutting photography session begins at four P.M.', 'Nighttime desk lamps stopped functioning across the lobby', 'Interior designers leave town at two o’clock today', 'Building inspectors arrive before noon tomorrow'], 0, 'ตอบ A ribbon-cutting photography session begins at four P.M. (โรงแรมมีงานถ่ายภาพพิธีเปิดริบบิ้นเวลา 16:00 น.)'],
      ['Part 3 · Action', 'What will the express courier driver do at the hotel?', ['Deliver warm bulbs and retrieve the wrong cartons', 'Install replacement filament bulbs in lobby chandeliers', 'Verify fixture invoices with the hotel manager', 'Wait until four P.M. to unpack pallet aisle six'], 0, 'ตอบ Deliver warm bulbs and retrieve the wrong cartons (นำหลอดไฟแสงวอร์ม 4 ลังไปส่งด่วนพร้อมรับกล่องหลอดแสงขาวที่ส่งผิดกลับมาด้วย)'],
    ]),

    p3(10, 'l10-p3-10', [
      ['Man', 'us_m', 'Hannah, our vaccine refrigerator alarm just chirped twice—its digital door display spiked up to seven degrees while our courier unloaded weekly serum crates!'],
      ['Woman', 'uk_f', 'Don’t throw out the vials yet! Remember, the door sensor measures fast-moving air, whereas vaccines match the liquid inside that sealed glycol buffer bottle on the middle shelf.'],
      ['Man', 'us_m', 'Oh, let me read the glycol bottle thermometer! Phew—it stayed steady at three-point-five degrees!'],
      ['Woman', 'uk_f', 'What a relief! Still, let’s attach a magnetic door-ajar chime strip along the top hinge so nobody props that freezer latch open while unpacking crates again.'],
    ], null, [
      ['Part 3 · Problem', 'Why did the vaccine refrigerator alarm sound?', ['Holding the door open while unloading crates warmed air sensors', 'A power surge shut off the cooling compressor overnight', 'Broken serum vials leaked onto the middle storage shelf', 'The glycol buffer thermometer lost battery voltage'], 0, 'ตอบ Holding the door open while unloading crates warmed air sensors (เปิดประตูตู้แช่ไว้นานตอนขนลังวัคซีนเข้าทำให้อุณหภูมิอากาศแตะ 7 องศาและสัญญาณดัง)'],
      ['Part 3 · Detail', 'How do the speakers confirm the vaccines remained safe?', ['A thermometer inside a sealed glycol bottle still read 3.5 degrees', 'The digital display returned to zero immediately after closing', 'Courier ice packs kept cardboard crates frozen solid', 'Vaccine vials showed cold condensation along the caps'], 0, 'ตอบ A thermometer inside a sealed glycol bottle still read 3.5 degrees (เทอร์โมมิเตอร์ในขวดไกลคอลชั้นกลางยังคงอยู่ที่ 3.5 องศาเซลเซียสปกติ)'],
      ['Part 3 · Action', 'What preventative measure does the woman suggest?', ['Installing a magnetic door-ajar warning strip', 'Moving vaccine crates to a smaller pharmacy fridge', 'Unloading weekly serum deliveries outside clinic hours', 'Replacing the refrigerator’s middle storage shelf'], 0, 'ตอบ Installing a magnetic door-ajar warning strip (ติดแถบแม่เหล็กเตือนประตูเปิดค้างตรงบานพับด้านบนเพื่อป้องกันเปิดค้างอีก)'],
    ]),

    p3(10, 'l10-p3-11', [
      ['Woman', 'ca_f', 'Hello Mr. Brooks! For your eleven-year-old tabby cat’s annual checkup, you wanted kidney screening plus dental X-rays while keeping the bill under two hundred twenty dollars, correct?'],
      ['Man', 'uk_m', 'Right—and Tiger gets grumpy if he fasts past ten A.M., so we definitely need an early morning blood-draw slot! Isn’t the Platinum Senior package discounted to two hundred ten dollars?'],
      ['Woman', 'ca_f', 'Careful—our printed autumn brochure lists a promotional two-ten price on Platinum Senior, though that special ended yesterday, so it’s back to its standard two-fifty fee today. However, the package right above it covers kidney bloodwork and dental imaging, starts before ten, and fits your budget!'],
      ['Man', 'uk_m', 'Great! Book Tiger into that option for Tuesday at eight-thirty, and I’ll skip his breakfast bowl that morning.'],
    ], doc('Clinic Brochure', 'Oakridge Veterinary — Senior Cat Screenings', [['Note', 'Fasting Required']], [
      tbl(['Package', 'Tests Included', 'Fee', 'Earliest Slot'], [
        ['Basic Wellness', 'Physical exam & urinalysis', '$115', '8:00 A.M.'],
        ['Kidney & Thyroid Plus', 'Renal blood panel & abdominal ultrasound', '$175', '11:30 A.M.'],
        ['Golden Care Complete', 'Kidney blood panel & dental X-rays', '$195', '8:30 A.M.'],
        ['Platinum Senior', 'Full panel, dental X-rays & echo', '$210 (Promo) / $250', '9:00 A.M.'],
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which wellness package does Mr. Brooks choose for his cat?', ['Golden Care Complete', 'Basic Wellness', 'Kidney & Thyroid Plus', 'Platinum Senior'], 0, 'ตอบ Golden Care Complete (ต้องการตรวจไตกับเอกซเรย์ฟันในงบต่ำกว่า $220 และนัดได้ก่อนสิบโมง ซึ่งตรงกับ Golden Care Complete ราคา $195 คิวเช้า 8:30 น.)'],
      ['Part 3 · Detail', 'Why does the man not book the Platinum Senior package?', ['Its promotional discount expired yesterday', 'Its earliest morning slot begins after ten A.M.', 'It omits dental X-ray imaging for older cats', 'Veterinarians stopped offering heart echocardiograms'], 0, 'ตอบ Its promotional discount expired yesterday (ราคาโปรโมชัน $210 หมดเขตเมื่อวานนี้ จึงกลับไปใช้ราคาปกติ $250 ซึ่งเกินงบ $220)'],
      ['Part 3 · Detail', 'Why must Tiger’s appointment take place before ten A.M.?', ['The cat becomes irritable when kept without food too long', 'Clinic blood-processing equipment shuts down at noon', 'Mr. Brooks must leave for work by nine-thirty', 'Senior cats receive discounted lab fees before ten'], 0, 'ตอบ The cat becomes irritable when kept without food too long (แมวจะหงุดหงิดหากต้องอดอาหารเพื่อเจาะเลือดเกินสิบโมงเช้า)'],
    ]),

    p3(10, 'l10-p3-12', [
      ['Man', 'au_m', 'Priya, Field Ops just radioed that Sample 408 from Cedar Reservoir has been canceled because overnight storms flooded the intake bridge.'],
      ['Woman', 'us_f2', 'Okay, scratch 408 off Bench 2’s queue! What should we move up immediately in its place?'],
      ['Man', 'au_m', 'Check the morning hold-time column—whichever remaining sample expires earliest before three P.M. goes onto Bench 2 right now so we don’t invalidate city compliance results.'],
      ['Woman', 'us_f2', 'Got it—pulling that rack from Cold Cabinet One right away, and I’ll tell the data intern to skip Cedar Reservoir in the daily report.'],
    ], doc('Lab Queue', 'PureStream Cleanroom — Daily Sample Priority', [['Bench', 'Microbiology Bench 2']], [
      tbl(['Sample ID', 'Source Site', 'Test Type', 'Hold Expiration'], [
        ['Sample 405', 'North Treatment Plant', 'Coliform bacteria', '4:30 P.M.'],
        ['Sample 408', 'Cedar Reservoir', 'Algae toxin screen', '12:30 P.M.'],
        ['Sample 411', 'Oakwood Well #3', 'Heavy metals ICP', '5:00 P.M.'],
        ['Sample 414', 'Midtown Tap Zone', 'Turbidity & E. coli', '1:45 P.M.'],
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which sample will the woman load onto Bench 2 immediately?', ['Sample 414', 'Sample 405', 'Sample 408', 'Sample 411'], 0, 'ตอบ Sample 414 (Sample 408 ถูกยกเลิกเพราะน้ำท่วมสะพาน จึงต้องหยิบตัวอย่างที่เหลือซึ่งหมดอายุเร็วที่สุดก่อนบ่ายสามมาตรวจทันทีคือ Sample 414 หมดอายุ 13:45 น.)'],
      ['Part 3 · Problem', 'Why was Sample 408 removed from today’s lab queue?', ['Floodwaters blocked field access to Cedar Reservoir', 'Algae toxin reagents expired inside Cold Cabinet One', 'Bench 2’s heavy-metals sensor failed morning checks', 'Data interns mislabeled its cold-storage rack'], 0, 'ตอบ Floodwaters blocked field access to Cedar Reservoir (พายุฝนทำให้น้ำท่วมสะพานทางเข้าอ่างเก็บน้ำ Cedar Reservoir จนเก็บตัวอย่างไม่ได้)'],
      ['Part 3 · Action', 'What instruction will the woman pass to the data intern?', ['Omit Cedar Reservoir from today’s daily report', 'Re-label Oakwood Well containers before five', 'Move expired samples out of Cold Cabinet One', 'Verify turbidity numbers for North Treatment Plant'], 0, 'ตอบ Omit Cedar Reservoir from today’s daily report (บอกนักศึกษาฝึกงานให้ข้ามรายการ Cedar Reservoir ออกไปในรายงานประจำวัน)'],
    ]),

    p3(10, 'l10-p3-13', [
      ['Man', 'us_m2', 'Claire, for this private art collector’s hallway, I must use dimmable hanging pendants rated specifically at three thousand kelvin warm-white with a CRI of ninety-five or higher.'],
      ['Woman', 'uk_f', 'Sure—let’s check our architectural pendant spec table. Careful though: the Solis Brass Cylinder printed at 3000K was actually recalled for dimmer flicker last week, and the factory now ships it strictly in a 2700K version.'],
      ['Man', 'us_m2', 'Oh, thank goodness you warned me before I sent final blueprints! Let’s check the next row—that glass model meets 3000K, scores above ninety-five CRI, and supports smooth dimming!'],
      ['Woman', 'uk_f', 'Yes! I’ll reserve eight units of that glass model in matte black cord and email you the updated spec sheet this afternoon.'],
    ], doc('Spec Sheet', 'LumenCraft Showroom — Architectural Pendants', [['Series', 'Gallery Corridor Line']], [
      tbl(['Fixture Model', 'Color Temp', 'CRI Rating', 'Dimming Support'], [
        ['Solis Brass Cylinder', '3000K', '96 CRI', '0–10V Dimming'],
        ['Velo Frosted Dome', '3000K', '92 CRI', 'Triac Dimming'],
        ['Kuro Fluted Glass', '3000K', '97 CRI', '0–10V & Triac Dimming'],
        ['Lina Brushed Cone', '2700K', '98 CRI', '0–10V Dimming'],
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which fixture model will the interior designer specify?', ['Kuro Fluted Glass', 'Solis Brass Cylinder', 'Velo Frosted Dome', 'Lina Brushed Cone'], 0, 'ตอบ Kuro Fluted Glass (ต้องได้ 3000K, CRI 95+ และหรี่ไฟได้ โดย Solis Brass Cylinder เพิ่งเปลี่ยนรุ่นเป็น 2700K ไปแล้ว จึงต้องเลือก Kuro Fluted Glass 3000K / 97 CRI)'],
      ['Part 3 · Detail', 'Why is the Velo Frosted Dome rejected for this art hallway?', ['Its CRI rating falls below ninety-five', 'It does not support commercial dimming switches', 'Its frosted shade emits 2700-kelvin light', 'The manufacturer recalled it last week'], 0, 'ตอบ Its CRI rating falls below ninety-five (ค่า CRI ในตารางอยู่ที่ 92 ซึ่งต่ำกว่าเกณฑ์ขั้นต่ำ 95 ที่ลูกค้ากำหนด)'],
      ['Part 3 · Action', 'How many units will the showroom consultant set aside?', ['Eight units', 'Six units', 'Ten units', 'Twelve units'], 0, 'ตอบ Eight units (พนักงานจะกันสต็อกโคมไฟรุ่นนี้ไว้ให้ 8 ชุดพร้อมส่งสเปกฉบับอัปเดตให้ทางอีเมล)'],
    ]),

    // Set 10 Part 4 (10 Talks: 1-7 no doc, 8-10 with doc; 45-85 words each)
    p4(10, 'l10-p4-1', 'the following recorded message', 'us_f',
      'Thank you for calling Pinecrest Veterinary Wellness Clinic. Our doctors see scheduled wellness exams Monday through Friday from eight A.M. until six P.M., plus walk-in booster vaccinations Saturdays from nine to noon. If you are bringing a cat, please enter through our quiet green side door marked Feline Lounge so your pet stays relaxed away from dogs. For overnight injuries or urgent poison concerns when we are closed, dial five-five-five, zero-one-nine-four for Oakridge Animal Emergency.',
      null, [
      ['Part 4 · Purpose', 'What information does this recorded message provide?', ['Clinic hours, cat entrance directions, and emergency contact details', 'Pricing tiers for Saturday grooming and nail trims', 'Instructions for ordering pet heartworm refills online', 'Reminders about upcoming rabies clinic road closures'], 0, 'ตอบ Clinic hours, cat entrance directions, and emergency contact details (แจ้งเวลาทำการ ประตูเข้าเฉพาะโซนแมว และเบอร์โรงพยาบาลสัตว์ฉุกเฉินนอกเวลา)'],
      ['Part 4 · Detail', 'When does the clinic offer walk-in booster shots?', ['Saturday mornings from 9:00 A.M. to noon', 'Weekday evenings until six P.M.', 'Sunday afternoons by appointment', 'Friday mornings between eight and ten'], 0, 'ตอบ Saturday mornings from 9:00 A.M. to noon (บริการฉีดวัคซีนกระตุ้นแบบไม่ต้องนัดล่วงหน้าเปิดวันเสาร์ 9:00-12:00 น.)'],
      ['Part 4 · Detail', 'Why should cat owners use the green side door?', ['To reduce stress by keeping cats separated from dogs', 'To drop off heavy pet carriers near parking stalls', 'To bypass Saturday vaccine check-in lines', 'To access the after-hours animal emergency room'], 0, 'ตอบ To reduce stress by keeping cats separated from dogs (เพื่อให้แมวผ่อนคลายห่างจากสุนัข)'],
    ]),

    p4(10, 'l10-p4-2', 'the following instructions', 'uk_m',
      'Welcome new lab interns to Cleanroom Water-Quality Suite B. Before entering the airlock, slip two pairs of sterile blue shoe covers over your clogs and pull hairnets snugly over both ears. Never carry cardboard boxes across the cleanroom line; instead, wipe every exterior surface of plastic sample coolers with seventy-percent ethanol wipes and pass them through the stainless transfer hatch. Once inside, log baseline laser particle counts on the wall clipboard before opening bottles.',
      null, [
      ['Part 4 · Audience', 'Who is this cleanroom orientation meant for?', ['Newly arrived laboratory interns', 'Municipal reservoir truck drivers', 'Hospital pharmacy delivery couriers', 'Building ventilation repair technicians'], 0, 'ตอบ Newly arrived laboratory interns (คำแนะนำสำหรับนักศึกษาฝึกงานใหม่ในห้องปลอดเชื้อตรวจคุณภาพน้ำ)'],
      ['Part 4 · Detail', 'What are listeners forbidden from bringing past the airlock line?', ['Cardboard boxes', 'Plastic sample coolers', 'Sterile blue shoe covers', 'Ethanol cleaning wipes'], 0, 'ตอบ Cardboard boxes (ห้ามนำกล่องกระดาษลูกฟูกผ่านแนวห้องปลอดเชื้อเด็ดขาด)'],
      ['Part 4 · Action', 'What must interns record before opening water sample bottles?', ['Baseline air particle counter readings', 'Exterior cooler temperature measurements', 'Batch expiration dates on ethanol wipes', 'Names of supervisors inside Suite B'], 0, 'ตอบ Baseline air particle counter readings (ต้องจดค่าพื้นฐานเครื่องนับอนุภาคฝุ่นบนคลิปบอร์ดติดผนังก่อนเปิดขวดตัวอย่าง)'],
    ]),

    p4(10, 'l10-p4-3', 'the following advertisement', 'au_f',
      'Transforming a home renovation or hospitality dining room? Visit LumenCraft Architectural Lighting Showroom on Harbor Avenue this Sunday between eleven A.M. and five P.M. for our Summer Illumination Design Day! Bring printed floor plans and receive a complimentary twenty-minute dimming and glare audit from our certified lighting consultants. Trade designers and homeowners alike can also enjoy twenty-five percent off all floor-sample linear chandeliers, handmade Venetian sconces, and brass desk lamps—one day only.',
      null, [
      ['Part 4 · Topic', 'What special event is LumenCraft hosting on Sunday?', ['A one-day design audit and showroom floor-sample sale', 'An evening glassblowing workshop with Venetian artisans', 'A grand opening of a new suburban hardware warehouse', 'A trade certification exam for residential electricians'], 0, 'ตอบ A one-day design audit and showroom floor-sample sale (จัดกิจกรรมให้คำปรึกษาตรวจแบบแสงฟรีและลดราคาโคมไฟตัวโชว์ 25% วันอาทิตย์วันเดียว)'],
      ['Part 4 · Detail', 'What should visitors bring to receive a free twenty-minute consultation?', ['Printed floor plans of their space', 'Old light fixtures for bulb recycling', 'Swatches of wall paint and dining curtains', 'Photos of existing hallway switches'], 0, 'ตอบ Printed floor plans of their space (ให้นำแบบแปลนพื้นฉบับพิมพ์มาเพื่อรับบริการตรวจสอบการหรี่ไฟและแสงแยงตาฟรี 20 นาที)'],
      ['Part 4 · Detail', 'How much is the Sunday discount on floor-sample linear chandeliers?', ['Twenty-five percent', 'Twenty percent', 'Fifteen percent', 'Thirty percent'], 0, 'ตอบ Twenty-five percent (ลดราคา 25% สำหรับโคมไฟระย้าแนวยาว โคมติดผนัง และโคมตั้งโต๊ะตัวโชว์ในร้าน)'],
    ]),

    p4(10, 'l10-p4-4', 'the following voicemail message', 'ca_m',
      'Hi Dr. Brooks, this is Kevin from Apex Veterinary Diagnostics calling at ten-twenty on Wednesday. Your clinic’s canine allergy blood panels finished lab sequencing early, and all four PDF diagnostic charts are now live inside your secure clinic portal. Regarding those physical glass pathology slides you requested for Mr. Tanaka’s dog, our afternoon courier van will drop off the padded slide case at Reception by two-thirty today. Call extension two-zero-nine with questions.',
      null, [
      ['Part 4 · Purpose', 'Why is Kevin calling Dr. Brooks?', ['To report uploaded allergy results and a slide delivery time', 'To request fresh blood samples from Mr. Tanaka’s dog', 'To announce afternoon delays for the veterinary courier van', 'To reset Dr. Brooks’s password for the clinic portal'], 0, 'ตอบ To report uploaded allergy results and a slide delivery time (โทรแจ้งว่าผลตรวจภูมิแพ้สุนัขขึ้นพอร์ทัลแล้วและสไลด์แก้วจะมาส่งถึงฝ่ายต้อนรับภายใน 14:30 น.)'],
      ['Part 4 · Detail', 'How can Dr. Brooks view the four canine allergy charts right now?', ['By logging into the secure clinic online portal', 'By inspecting glass slides at the front reception desk', 'By calling extension 209 for verbal results', 'By waiting until the afternoon courier van arrives'], 0, 'ตอบ By logging into the secure clinic online portal (ไฟล์ PDF ทั้ง 4 รายการถูกอัปโหลดขึ้นพอร์ทัลปลอดภัยของคลินิกเรียบร้อยแล้ว)'],
      ['Part 4 · Detail', 'When are the physical pathology slides scheduled to arrive?', ['By 2:30 P.M. today', 'At 10:20 A.M. Thursday', 'Early tomorrow morning', 'Before noon today'], 0, 'ตอบ By 2:30 P.M. today (รถตู้ส่งของรอบบ่ายจะนำกล่องใส่สไลด์มาส่งภายในเวลา 14:30 น. วันนี้)'],
    ]),

    p4(10, 'l10-p4-5', 'the following excerpt from a meeting', 'us_m2',
      'Before signing next quarter’s municipal river monitoring contract, let’s review how our automated solar autosamplers performed across West Basin. Having field robots collect twenty-four-hour composite bottles cut technician highway driving time by thirty percent last month—and believe me, that puts real lab hours back into analysis instead of sitting in rush-hour traffic! Based on those numbers, Operations approved purchasing two spare refrigerated composite jugs for Friday’s flood-watch stations.',
      null, [
      ['Part 4 · Detail', 'What benefit did automated river autosamplers provide last month?', ['They reduced field technician driving time by thirty percent', 'They increased bacterial incubation temperatures by thirty percent', 'They eliminated the need for refrigerated composite jugs', 'They detected illegal chemical runoff across West Basin'], 0, 'ตอบ They reduced field technician driving time by thirty percent (เครื่องสุ่มตัวอย่างอัตโนมัติช่วยลดเวลาขับรถเดินทางของช่างลงได้ถึง 30%)'],
      ['Part 4 · Meaning', 'What does the speaker mean when he says, "that puts real lab hours back into analysis"?', ['Technicians spend less time commuting and more time testing water samples', 'Municipal contracts now pay higher hourly rates for lab work', 'Automated samplers analyze bacterial colonies inside river stations', 'Highway traffic delays forced staff to extend evening shifts'], 0, 'ตอบ Technicians spend less time commuting and more time testing water samples (หมายความว่าเจ้าหน้าที่เสียเวลาน้อยลงบนท้องถนน จึงมีเวลามาวิเคราะห์ผลน้ำในห้องแล็บได้มากขึ้น)'],
      ['Part 4 · Detail', 'What new items did Operations approve buying?', ['Two extra refrigerated composite jugs', 'Four solar-powered field sampling robots', 'Additional highway safety cones for bridges', 'Backup air filters for West Basin stations'], 0, 'ตอบ Two extra refrigerated composite jugs (ฝ่ายปฏิบัติการอนุมัติซื้อขวดเก็บตัวอย่างรวมแบบทำความเย็นสำรองเพิ่ม 2 ใบสำหรับสถานีเฝ้าระวังน้ำท่วม)'],
    ]),

    p4(10, 'l10-p4-6', 'the following announcement', 'uk_f2',
      'Good evening, architects and interior designers! Thank you for braving the rain to join Atelier Lux’s lighting showcase tonight. In ten minutes, please gather inside Dark Room Two behind the brass partition for a live demonstration of circadian tunable recessed downlights—followed at seven P.M. sharp by a question-and-answer session with master Venetian glassblower Lorenzo Moretti. Afterward, enjoy complimentary espresso and almond biscotti out under our heated glass courtyard canopy.',
      null, [
      ['Part 4 · Audience', 'Who is the primary audience for this evening event?', ['Architects and interior designers', 'Veterinary surgeons and clinic nurses', 'Cleanroom chemical safety inspectors', 'Commercial electrical warehouse drivers'], 0, 'ตอบ Architects and interior designers (ผู้พูดทักทายสถาปนิกและนักออกแบบตกแต่งภายในที่มาร่วมงานโชว์รูม)'],
      ['Part 4 · Detail', 'What will take place inside Dark Room Two in ten minutes?', ['A live demonstration of tunable recessed ceiling lights', 'A lecture on cleaning Venetian glass pendants', 'A private cocktail tasting under a heated canopy', 'An introduction of lighting showroom sales staff'], 0, 'ตอบ A live demonstration of tunable recessed ceiling lights (การสาธิตสดไฟดาวน์ไลต์ฝังฝ้าแบบปรับอุณหภูมิสีตามนาฬิกาชีวิตในอีกสิบนาที)'],
      ['Part 4 · Detail', 'What is scheduled for seven P.M.?', ['A question-and-answer session with a glass artist', 'Closing remarks by the showroom manager', 'An auction of handmade brass sconces', 'Complimentary almond biscotti baking demos'], 0, 'ตอบ A question-and-answer session with a glass artist (เวลา 19:00 น. ตรงมีช่วงถาม-ตอบกับช่างเป่าแก้วฝีมือเยี่ยมจากเวนิส Lorenzo Moretti)'],
    ]),

    p4(10, 'l10-p4-7', 'the following instructions', 'au_m',
      'Quick reminder for veterinary technicians covering afternoon surgical recovery shifts. Every dog and cat coming off anesthesia must have body temperature and heart rate logged every fifteen minutes on the tablet mounted beside each kennel door—never wait a full half hour during initial wake-up. Also, double-check that heated water blankets stay set to low and remain covered with dry fleece towels before calling owners for evening pickup.',
      null, [
      ['Part 4 · Detail', 'How often must technicians log post-surgery temperature and heart rate?', ['Every fifteen minutes', 'Every thirty minutes', 'Once per hour', 'Right before owner pickup'], 0, 'ตอบ Every fifteen minutes (ต้องจดบันทึกอุณหภูมิร่างกายและอัตราการเต้นหัวใจทุกๆ 15 นาที ห้ามรอจนครบครึ่งชั่วโมง)'],
      ['Part 4 · Detail', 'Where are recovery measurements recorded?', ['On tablets mounted next to kennel doors', 'Inside paper charts at Front Reception', 'On dry-erase boards in Operating Room One', 'In owner discharge folders before pickup'], 0, 'ตอบ On tablets mounted next to kennel doors (บันทึกข้อมูลลงบนแท็บเล็ตที่ติดอยู่ข้างประตูกรงแต่ละกรง)'],
      ['Part 4 · Action', 'What should technicians verify about heated water blankets?', ['That they stay on low heat under dry fleece towels', 'That owners pack extra blankets inside pet carriers', 'That stainless kennels remain unplugged until evening', 'That grooming dryers warm cold kennel floors'], 0, 'ตอบ That they stay on low heat under dry fleece towels (ตรวจให้มั่นใจว่าปรับความร้อนผ้าห่มน้ำอุ่นไว้ระดับต่ำและปูทับด้วยผ้าฟลีซแห้งเสมอ)'],
    ]),

    p4(10, 'l10-p4-8', 'the following announcement', 'ca_f',
      'Quick afternoon floor update for our Willow Creek Veterinary assistants before two o’clock check-ins start. First, Dr. Ortiz finished surgery early and is running fifteen minutes ahead in Exam Bay 1. Second, our printed bay schedule still lists a nervous Dalmatian for a Nail Trim inside Bay 3—please move him straight into Bay 4 instead, because noisy high-speed grooming blow-dryers right beside Bay 3 startled him last visit.',
      doc('Bay Schedule', 'Willow Creek Veterinary — Saturday Afternoon', [['Updated', '1:45 P.M.']], [
        tbl(['Bay #', 'Pet Name & Breed', 'Scheduled Service', 'Time'], [
          ['Bay 1', 'Milo (Beagle)', 'Annual Booster Shot', '2:00 P.M.'],
          ['Bay 2', 'Cleo (Siamese Cat)', 'Senior Dental Check', '2:15 P.M.'],
          ['Bay 3', 'Spot (Dalmatian)', 'Nail Trim', '2:30 P.M.'],
          ['Bay 4', 'Open Reserve', 'Quiet Isolation Bay', '2:00–4:00 P.M.'],
        ]),
      ]), [
      ['Part 4 · Graphic', 'Look at the graphic. Which pet is being reassigned to Bay 4 at two-thirty?', ['Spot', 'Milo', 'Cleo', 'Dr. Ortiz’s surgery patient'], 0, 'ตอบ Spot (ตารางระบุสุนัขพันธุ์ดัลเมเชียนชื่อ Spot มีคิวตัดเล็บ Nail Trim เวลา 14:30 น. ที่ Bay 3 ซึ่งผู้พูดสั่งให้ย้ายไปที่ Bay 4 แทน)'],
      ['Part 4 · Problem', 'Why is the dog being moved out of Bay 3?', ['Loud blow-dryers from an adjacent grooming area upset him', 'Bay 3’s digital scale malfunctioned earlier today', 'Dr. Ortiz needs Bay 3 for an extra surgery follow-up', 'Cleo the Siamese cat cannot share nearby waiting halls'], 0, 'ตอบ Loud blow-dryers from an adjacent grooming area upset him (เสียงไดร์เป่าขนความเร็วสูงข้างๆ Bay 3 ทำให้สุนัขตกใจกลัวในการมาครั้งก่อน)'],
      ['Part 4 · Detail', 'How is Dr. Ortiz’s afternoon schedule progressing in Bay 1?', ['Fifteen minutes ahead of schedule', 'Fifteen minutes behind schedule', 'Canceled until Monday morning', 'Paused for equipment sterilizing'], 0, 'ตอบ Fifteen minutes ahead of schedule (คุณหมอ Ortiz ผ่าตัดเสร็จเร็วกว่ากำหนดและกำลังเดินคิวล่วงหน้าไป 15 นาทีใน Bay 1)'],
    ]),

    p4(10, 'l10-p4-9', 'the following excerpt from a meeting', 'us_m',
      'Let’s review this morning’s Cleanroom Bench Calibration Log before releasing analytical shifts. Bench A passed electrical conductivity checks without variance, and remember Bench D received a brand-new reagent pump Tuesday, so QA already cleared it off today’s retest list. However, look at the drift column carefully: whichever bench exceeded our maximum allowable limit of two-point-zero percent must remain offline for testing until technicians recalibrate it right after lunch.',
      doc('Calibration Log', 'AquaPure Water Lab — Morning QA Verification', [['Limit', 'Max Drift ±2.0%']], [
        tbl(['Bench #', 'Parameter Tested', 'Measured Drift', 'Assigned Tech'], [
          ['Bench A', 'Conductivity', '0.4%', 'M. Patel'],
          ['Bench B', 'Dissolved Oxygen', '1.8%', 'K. Chen'],
          ['Bench C', 'Chlorine Residual', '2.7%', 'D. Gomez'],
          ['Bench D', 'pH & Alkalinity', '2.3%', 'R. Sato'],
        ]),
      ]), [
      ['Part 4 · Graphic', 'Look at the graphic. Which technician’s bench must stay offline until recalibrated after lunch?', ['D. Gomez', 'M. Patel', 'K. Chen', 'R. Sato'], 0, 'ตอบ D. Gomez (ค่าความคลาดเคลื่อนสูงสุดที่ยอมรับได้คือ 2.0% มี Bench C และ D ที่เกิน 2.0% แต่ในเสียงบอก Bench D เพิ่งเปลี่ยนปั๊มและ QA ปลดล็อกไปแล้ว เหลือเพียง Bench C ที่ค่า 2.7% ของช่าง D. Gomez)'],
      ['Part 4 · Detail', 'Why is Bench D exempt from today’s retesting list?', ['A new reagent pump was installed on Tuesday and cleared by QA', 'Its pH probe operates independently from cleanroom limits', 'Technician R. Sato recalibrated it before the morning meeting', 'Alkalinity testing has been suspended until Friday'], 0, 'ตอบ A new reagent pump was installed on Tuesday and cleared by QA (เพิ่งเปลี่ยนปั๊มน้ำยาใหม่เมื่อวันอังคารและฝ่ายประกันคุณภาพอนุมัติผ่านแล้ว)'],
      ['Part 4 · Detail', 'When will the out-of-spec bench be recalibrated?', ['Immediately after lunch', 'Tuesday morning', 'Before morning shifts start', 'At the end of the week'], 0, 'ตอบ Immediately after lunch (ช่างจะเข้าไปปรับเทียบใหม่ทันทีหลังพักเที่ยง)'],
    ]),

    p4(10, 'l10-p4-10', 'the following telephone message', 'uk_f',
      'Hello Ms. Rivera, this is Hannah calling from Atelier Lux Lighting Showroom on Monday morning regarding your hotel client’s custom orders. Good news—your brushed-nickel halo chandelier cleared port customs ahead of schedule! However, our delivery van’s hydraulic lift gate broke down this morning, so we had to push back every heavy crate weighing over thirty-five kilograms from Tuesday afternoon to Thursday morning. Please confirm whether your site electrician can receive it Thursday at nine.',
      doc('Delivery Manifest', 'Atelier Lux Showroom — Tuesday Van Schedule', [['Carrier', 'Showroom Freight Van']], [
        tbl(['Order #', 'Fixture Description', 'Crate Weight', 'Printed Delivery'], [
          ['LX-702', 'Amber Glass Wall Sconces (x6)', '18 kg', 'Tuesday 1:00 P.M.'],
          ['LX-705', 'Brushed-Nickel Halo Chandelier', '42 kg', 'Tuesday 2:30 P.M.'],
          ['LX-709', 'Matte Brass Desk Lamps (x4)', '14 kg', 'Tuesday 3:30 P.M.'],
          ['LX-712', 'Clear Fluted Pendant Set', '29 kg', 'Tuesday 4:30 P.M.'],
        ]),
      ]), [
      ['Part 4 · Graphic', 'Look at the graphic. Which order number has been rescheduled to Thursday morning?', ['LX-705', 'LX-702', 'LX-709', 'LX-712'], 0, 'ตอบ LX-705 (เฉพาะลังสินค้าที่หนักเกิน 35 กก. ต้องเลื่อนจากบ่ายวันอังคารเป็นเช้าวันพฤหัสฯ ซึ่งคือโคมไฟ Brushed-Nickel Halo Chandelier รหัส LX-705 หนัก 42 กก.)'],
      ['Part 4 · Problem', 'Why was the heavy chandelier delivery postponed?', ['The showroom delivery van’s hydraulic lift gate broke down', 'Port customs inspectors held the wooden crate until Wednesday', 'Site electricians asked to reschedule Tuesday installations', 'Missing brass ceiling canopies delayed packing'], 0, 'ตอบ The showroom delivery van’s hydraulic lift gate broke down (ฝาท้ายไฮดรอลิกของรถตู้ส่งของเสียเมื่อเช้าวันนี้)'],
      ['Part 4 · Action', 'What does Hannah ask Ms. Rivera to confirm?', ['Whether the site electrician can accept delivery at 9:00 A.M. Thursday', 'Whether four brass desk lamps can ship alongside the chandelier', 'Whether customs clearance fees have been wired to the showroom', 'Whether hotel reception staff can unload an 18-kilogram crate'], 0, 'ตอบ Whether the site electrician can accept delivery at 9:00 A.M. Thursday (ขอให้ยืนยันว่าช่างไฟฟ้าหน้างานสะดวกเซ็นรับของเช้าวันพฤหัสฯ เก้าโมงหรือไม่)'],
    ]),
  ];
})();
if (typeof module !== 'undefined') module.exports = { TOEIC_LISTEN_VOL2: globalThis.TOEIC_LISTEN_VOLS[2] };
