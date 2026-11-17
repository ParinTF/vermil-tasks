// Volume 1 of TOEIC Listening Mock Exams (Sets 1-5, 270 tracks = 500 Qs)
globalThis.TOEIC_LISTEN_VOLS = globalThis.TOEIC_LISTEN_VOLS || {};
globalThis.TOEIC_LISTEN_VOLS[1] = (() => {
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
    // ==================== SET 1 ====================
    p1(1, 'l1-p1-1', 'us_m', [
      'They are closing window blinds around a dark room.',
      'A woman is pointing at a tablet while a man takes notes.',
      'Several empty briefcases are lined up against a glass door.',
      'The colleagues are shaking hands across the wooden desk.',
    ], 1, 'ตอบ A woman is pointing at a tablet while a man takes notes (ผู้หญิงชี้หน้าจอแท็บเล็ต ส่วนผู้ชายถือปากกาจดลงสมุดข้างโต๊ะประชุมไม้)'),
    p1(1, 'l1-p1-2', 'uk_f', [
      'A worker wearing a safety vest is scanning labels on stacked boxes.',
      'A forklift driver is unloading timber onto a flat parking lot.',
      'Cardboard cartons are being wrapped inside clear plastic film.',
      'Several warehouse employees are lifting wooden pallets together.',
    ], 0, 'ตอบ A worker wearing a safety vest is scanning labels on stacked boxes (พนักงานสวมเสื้อสะท้อนแสงและหมวกนิรภัยใช้เครื่องยิงบาร์โค้ดสแกนกล่องบนพาเลต)'),
    p1(1, 'l1-p1-3', 'au_m', [
      'Waiters are wiping down glass storefront windows with towels.',
      'Patrons are queuing along a crowded city sidewalk.',
      'Wooden chairs have been arranged around unoccupied patio tables.',
      'Umbrellas have been opened wide to shade afternoon diners.',
    ], 2, 'ตอบ Wooden chairs have been arranged around unoccupied patio tables (เก้าอี้ไม้ถูกจัดวางรอบโต๊ะกลมหน้าร้านบนถนนหินกรวด โดยยังไม่มีลูกค้านั่ง)'),
    p1(1, 'l1-p1-4', 'ca_f', [
      'A technician is kneeling behind a desk to repair power cables.',
      'White boxes of printer paper are stacked high onto a rolling cart.',
      'Office binders are tumbling off a crowded wooden bookshelf.',
      'A woman is placing sheets of paper into an office copier tray.',
    ], 3, 'ตอบ A woman is placing sheets of paper into an office copier tray (ผู้หญิงยืนข้างเครื่องถ่ายเอกสารขนาดใหญ่กำลังใส่/จัดปึกกระดาษขาวตรงถาดด้านข้าง)'),
    p1(1, 'l1-p1-5', 'us_f', [
      'Fallen tree leaves are being swept across a paved courtyard.',
      'A man standing on a stepladder is trimming green hedges.',
      'A gardener is pushing a wheelbarrow beside a stone fountain.',
      'Flower pots have been hung along the top of a brick wall.',
    ], 1, 'ตอบ A man standing on a stepladder is trimming green hedges (ผู้ชายยืนบนบันไดอะลูมิเนียมใช้กรรไกรตัดแต่งพุ่มไม้เขียวริมกำแพงอิฐ)'),
    p1(1, 'l1-p1-6', 'uk_m', [
      'Tourists are boarding a ferry boat from a metal gangplank.',
      'Wooden cargo crates are piled along the edge of a dock.',
      'Several white sailboats are moored along a wooden harbor pier.',
      'Rowboats have been pulled onto dry sand for winter storage.',
    ], 2, 'ตอบ Several white sailboats are moored along a wooden harbor pier (เรือใบสีขาวหลายลำจอดผูกเชือกเรียงริมสะพานท่าเทียบเรือไม้ น้ำสงบ ไม่มีคน)'),

    // Set 1 Part 2 (25 Qs: 8/8/9 balance across 0,1,2)
    p2(1, 'l1-p2-1', 'uk_f', 'us_m', 'Where is the regional budget workshop being held?', ['On the third floor, in Room 304.', 'Because sales exceeded last quarter.', 'Every Tuesday afternoon at three.'], 0, 'ตอบ On the third floor, in Room 304. (ถามสถานที่ Where ตอบห้องประชุมชั้น 3)'),
    p2(1, 'l1-p2-2', 'us_m', 'au_f', 'Who authorized the extra shipment of toner cartridges?', ['No, I haven’t read the manual yet.', 'Our floor supervisor signed off yesterday.', 'Inside the supply closet near Reception.'], 1, 'ตอบ Our floor supervisor signed off yesterday. (ถามบุคคล Who ตอบหัวหน้างานเซ็นอนุมัติเมื่อวาน)'),
    p2(1, 'l1-p2-3', 'ca_f', 'uk_m', 'When does the express commuter train leave for Boston?', ['From Track 6 near the North Exit.', 'It was delayed by fifteen passengers.', 'Roughly every twenty minutes starting at noon.'], 2, 'ตอบ Roughly every twenty minutes starting at noon. (ถามเวลา/ความถี่ When ตอบช่วงเวลาออกรถทุก 20 นาที)'),
    p2(1, 'l1-p2-4', 'au_m', 'us_f', 'Would you prefer sitting inside or out on the terrace?', ['Either spot works nicely for me.', 'Yes, I ordered the grilled salmon.', 'About twelve dollars plus tax.'], 0, 'ตอบ Either spot works nicely for me. (คำถามเลือก inside or terrace ตอบแบบไหนก็ได้เลย)'),
    p2(1, 'l1-p2-5', 'us_f', 'uk_m', 'Why was Monday’s marketing briefing pushed to Thursday?', ['Across from the main lobby.', 'Ms. Tanaka is still traveling back from Seoul.', 'Just twenty printed handouts, please.'], 1, 'ตอบ Ms. Tanaka is still traveling back from Seoul. (ถามเหตุผล Why ตอบเพราะคุณ Tanaka ยังเดินทางกลับไม่ถึง)'),
    p2(1, 'l1-p2-6', 'uk_m', 'ca_f', 'Hasn’t the courier delivered our signed lease agreement yet?', ['Sure, let’s eat around one.', 'He dropped it at the mailroom ten minutes ago.', 'Because the elevator needed repairs.'], 1, 'ตอบ He dropped it at the mailroom ten minutes ago. (คำถามปฏิเสธ Hasn’t... ตอบแจ้งข้อเท็จจริงว่ามาส่งที่ห้องไปรษณีย์แล้ว)'),
    p2(1, 'l1-p2-7', 'us_m2', 'us_f2', 'How many boxes of letterhead arrived this morning?', ['Only six instead of the ten we ordered.', 'Usually around nine o’clock.', 'At the downtown stationery warehouse.'], 0, 'ตอบ Only six instead of the ten we ordered. (ถามจำนวน How many ตอบมาถึงแค่ 6 กล่องจากที่สั่ง 10)'),
    p2(1, 'l1-p2-8', 'uk_f', 'au_m', 'Could you unlock the rooftop storage closet before you leave?', ['Yes, the roof garden closes next month.', 'Sorry, Facility Security holds the spare key.', 'By Monday morning at the earliest.'], 1, 'ตอบ Sorry, Facility Security holds the spare key. (ตอบเลี่ยงแบบสุภาพพร้อมบอกเหตุผลว่าฝ่าย รปภ. เก็บกุญแจสำรองไว้)'),
    p2(1, 'l1-p2-9', 'ca_m', 'us_f', 'The printer on the fourth floor is out of cyan ink again.', ['No, it wasn’t printed in color.', 'Around forty pages per minute.', 'I’ll notify IT Helpdesk right away.'], 2, 'ตอบ I’ll notify IT Helpdesk right away. (ประโยคบอกเล่าแจ้งปัญหา -> เสนอตัวช่วยโทรแจ้ง IT ให้ทันที)'),
    p2(1, 'l1-p2-10', 'us_f', 'uk_m', 'Which supplier offered the lowest unit price on shipping tape?', ['BrightPack beat everyone by ten percent.', 'Yes, ten rolls fit in one box.', 'Tomorrow before five P.M.'], 0, 'ตอบ BrightPack beat everyone by ten percent. (ถามเลือกผู้ขาย Which supplier ตอบชื่อบริษัท BrightPack)'),
    p2(1, 'l1-p2-11', 'au_f', 'us_m2', 'How long will the software database update take tonight?', ['Twice every spring.', 'Probably around forty-five minutes.', 'Mostly accounting spreadsheets.'], 1, 'ตอบ Probably around forty-five minutes. (ถามระยะเวลา How long ตอบประมาณ 45 นาที)'),
    p2(1, 'l1-p2-12', 'uk_m', 'us_f2', 'Should I send the client quote by email or courier?', ['The downtown branch office.', 'At three hundred dollars per tray.', 'Digital PDF is faster and fine.'], 2, 'ตอบ Digital PDF is faster and fine. (ถามทางเลือก A or B ตอบส่งแบบ PDF ดิจิทัลเร็วและใช้ได้เลย)'),
    p2(1, 'l1-p2-13', 'us_m', 'ca_f', 'Where did Kenji leave the revised floor blueprint?', ['Check inside the flat drawer beneath his monitor.', 'Because the client asked for wider halls.', 'Almost completed last Thursday.'], 0, 'ตอบ Check inside the flat drawer beneath his monitor. (ถามหาของ Where ตอบให้ดูในลิ้นชักใต้จอของ Kenji)'),
    p2(1, 'l1-p2-14', 'uk_f', 'au_m', 'Why don’t we ask Sarah to review the Spanish translation?', ['No, I didn’t translate that brochure.', 'Good idea—she studied in Madrid for years.', 'Until Friday afternoon at four.'], 1, 'ตอบ Good idea—she studied in Madrid for years. (Why don’t we เป็นการเสนอแนะ ตอบเห็นด้วยพร้อมเหตุผลสนับสนุน)'),
    p2(1, 'l1-p2-15', 'us_m2', 'us_f', 'Aren’t you attending the trade show in Chicago this weekend?', ['Three convention booths down the aisle.', 'That’s a very affordable hotel.', 'Actually, my coworker Liam went in my place.'], 2, 'ตอบ Actually, my coworker Liam went in my place. (ถามไม่ได้ไปหรือ ตอบเลี่ยงว่าเพื่อนร่วมงานไปแทนแล้ว)'),
    p2(1, 'l1-p2-16', 'ca_m', 'uk_f', 'Who will lead the safety tour for our summer interns?', ['Ben from Operations volunteered this morning.', 'Around thirty engineering students.', 'Right inside the main cafeteria.'], 0, 'ตอบ Ben from Operations volunteered this morning. (ถามบุคคล Who ตอบคุณ Ben จากฝ่ายปฏิบัติการอาสาทำ)'),
    p2(1, 'l1-p2-17', 'us_f', 'au_m', 'How much did that custom ceramic coffee mug cost?', ['Yes, the breakroom has fresh roast.', 'Eighteen dollars at the museum shop.', 'For my manager’s retirement gift.'], 1, 'ตอบ Eighteen dollars at the museum shop. (ถามราคา How much ตอบ $18)'),
    p2(1, 'l1-p2-18', 'uk_m', 'ca_f', 'Did the accounting software update finish installing cleanly?', ['About once a month on Fridays.', 'No, I usually drink green tea.', 'It froze near ninety percent, so IT restarted it.'], 2, 'ตอบ It froze near ninety percent, so IT restarted it. (ถามว่าติดตั้งเสร็จหรือยัง ตอบข้อเท็จจริงว่าค้างเลยต้องรีสตาร์ต)'),
    p2(1, 'l1-p2-19', 'us_f2', 'us_m', 'I heard Harbor Cafe opened a branch across from our station.', ['Right, they already have lines every morning!', 'Yes, the train arrives at seven.', 'Try putting it on the top shelf.'], 0, 'ตอบ Right, they already have lines every morning! (ประโยคบอกเล่าแสดงความคิดเห็น/รับทราบ -> ตอบรับสอดคล้องเรื่องร้านกาแฟคิวแน่นทุกเช้า)'),
    p2(1, 'l1-p2-20', 'au_m', 'uk_f', 'When are the annual employee performance reviews due?', ['By courier parcel or priority post.', 'Ask your department head—mine isn’t due until May.', 'Every regional team leader.'], 1, 'ตอบ Ask your department head—mine isn’t due until May. (ถามกำหนดส่งแบบประเมินประจำปี ตอบเลี่ยงอย่างเป็นธรรมชาติว่าให้ลองถามหัวหน้าแผนก)'),
    p2(1, 'l1-p2-21', 'uk_f', 'us_m2', 'Do you know if there is an ATM inside this shopping arcade?', ['I withdrew cash yesterday evening.', 'Four hundred dollars per withdrawal.', 'Yes, right beside the pharmacy escalators.'], 2, 'ตอบ Yes, right beside the pharmacy escalators. (ถามตำแหน่งตู้ ATM ตอบมีอยู่ข้างบันไดเลื่อนร้านขายยา)'),
    p2(1, 'l1-p2-22', 'us_m', 'ca_f', 'What time is our video call with the Zurich engineering team?', ['Scheduled for nine-thirty A.M. sharp.', 'To finalize brake caliper tolerances.', 'In Conference Room B upstairs.'], 0, 'ตอบ Scheduled for nine-thirty A.M. sharp. (ถามเวลา What time ตอบ 9:30 น. ตรง)'),
    p2(1, 'l1-p2-23', 'ca_f', 'au_m', 'Can you cover my reception desk shift from twelve to one?', ['Yes, the parcel arrived before twelve.', 'No problem—I’ll grab lunch afterward.', 'Inside the lobby visitor logbook.'], 1, 'ตอบ No problem—I’ll grab lunch afterward. (ขอให้ช่วยสลับกะช่วงเที่ยง ตอบยินดีช่วย เดี๋ยวค่อยไปกินข้าวทีหลัง)'),
    p2(1, 'l1-p2-24', 'us_f2', 'uk_m', 'Have we heard back from SilverOak Catering about Saturday’s menu?', ['About sixty vegetarian boxed lunches.', 'They’re usually busy around noon.', 'Rachel just forwarded their final quote ten minutes ago.'], 2, 'ตอบ Rachel just forwarded their final quote ten minutes ago. (ถามว่าได้คำตอบหรือยัง ตอบ Rachel เพิ่งส่งใบเสนอราคามาเมื่อ 10 นาทีก่อน)'),
    p2(1, 'l1-p2-25', 'uk_m', 'us_f', 'Whose black umbrella was left behind the conference room door?', ['Looks like David’s—he usually carries a compact one.', 'Yes, it’s supposed to clear up by noon.', 'Put the extra brochures beside the wall.'], 0, 'ตอบ Looks like David’s—he usually carries a compact one. (ถามแสดงความเป็นเจ้าของ Whose ตอบน่าจะเป็นของ David)'),

    // Set 1 Part 3 (13 Conversations × 3 Qs = 39 Qs; Convs 11-13 include Graphics)
    p3(1, 'l1-p3-1', [
      ['Man', 'us_m', 'Hi Rachel, did the regional sales binder come back from the print shop yet?'],
      ['Woman', 'uk_f', 'Not yet. The shop called saying their spiral-binding machine jammed, so copies won’t arrive before three o’clock.'],
      ['Man', 'us_m', 'Three is cutting it close—the board presentation opens at three-thirty! Should I send out digital PDFs in the meantime?'],
      ['Woman', 'uk_f', 'Good call. I’ll load the slides onto the conference laptop so at least the charts are ready on screen.'],
    ], null, [
      ['Part 3 · Problem', 'Why has the sales binder delivery been delayed?', ['Print shop binding equipment malfunctioned', 'The delivery driver went to the wrong branch', 'Regional figures were submitted too late', 'Paper cartons sold out at the supplier'], 0, 'ตอบ Print shop binding equipment malfunctioned (เครื่องเข้าเล่มสันห่วงที่โรงพิมพ์ติดขัด เลยส่งได้หลังบ่ายสาม)'],
      ['Part 3 · Detail', 'When is the board presentation scheduled to begin?', ['At 3:30 P.M.', 'At 3:00 P.M.', 'Tomorrow morning', 'At 2:30 P.M.'], 0, 'ตอบ At 3:30 P.M. (ผู้ชายบอกเวลาเริ่มพรีเซนต์ 15:30 น.)'],
      ['Part 3 · Action', 'What will the woman do next?', ['Prepare the presentation slides on a conference laptop', 'Drive over to pick up paper brochures', 'Postpone the afternoon board briefing', 'Send digital PDFs to regional accountants'], 0, 'ตอบ Prepare the presentation slides on a conference laptop (ผู้หญิงบอกว่าจะโหลดสไลด์ขึ้นโน้ตบุ๊กห้องประชุมไว้ก่อน)'],
    ]),

    p3(1, 'l1-p3-2', [
      ['Woman', 'au_f', 'Excuse me, I reserved a midsize hybrid car under Nadia Patel, and my receipt shows daily pickup at Terminal B.'],
      ['Man', 'ca_m', 'Welcome to DriveEase! Unfortunately all compact hybrids are out being inspected after heavy morning traffic, so I’m moving you into a full-size electric sedan at the exact same daily rate.'],
      ['Woman', 'au_f', 'Oh, thank you! Does that sedan charge at regular highway stations cleanly without special adapters?'],
      ['Man', 'ca_m', 'Yes—there is an adapter cable tucked inside the trunk pouch just in case, plus your parking exit ticket comes pre-validated.'],
    ], null, [
      ['Part 3 · Detail', 'Why is the woman receiving a different vehicle model?', ['Reserved hybrid cars are currently undergoing post-trip inspection', 'All reservations under Nadia Patel were canceled this morning', 'Heavy rain flooded outdoor compact parking lanes', 'The woman requested more luggage room for trade show boxes'], 0, 'ตอบ Reserved hybrid cars are currently undergoing post-trip inspection (รถไฮบริดถูกนำเข้าตรวจสภาพทั้งหมดหลังจราจรช่วงเช้า)'],
      ['Part 3 · Detail', 'How does the upgrade affect the woman’s daily rental cost?', ['She will pay the original agreed daily rate', 'A full-size sedan fee adds twenty percent extra', 'Charging cables require a refundable cash deposit', 'Terminal B parking incurs an airport tax'], 0, 'ตอบ She will pay the original agreed daily rate (เจ้าหน้าที่ระบุอัปเกรดในราคาเรตเดิมพอดี)'],
      ['Part 3 · Detail', 'Where did the clerk say an extra charging adapter is stored?', ['Inside a storage pouch in the car trunk', 'Underneath the front glove compartment', 'At the Terminal B customer validation counter', 'Mounted beside highway charging stations'], 0, 'ตอบ Inside a storage pouch in the car trunk (เก็บสายอะแดปเตอร์สำรองไว้ในกระเป๋าที่กระโปรงหลังรถ)'],
    ]),

    p3(1, 'l1-p3-3', [
      ['Man', 'uk_m', 'Wait—you’ve already hung every acoustic panel inside Studio Four? You finished an hour early!'],
      ['Woman', 'us_f', 'Thanks! Actually, carpenter Leo dropped by to measure our door frame and helped hold the heavy corners level while I drilled.'],
      ['Man', 'uk_m', 'No wonder it looks laser-straight. While you’re here, have you seen the shipment of wireless microphones we ordered Monday?'],
      ['Woman', 'us_f', 'Reception signed for two yellow padded boxes around ten—probably sitting on the Mailroom shelf marked Audio Gear.'],
    ], null, [
      ['Part 3 · Detail', 'How did the woman finish mounting acoustic panels ahead of schedule?', ['Another coworker assisted by holding the corners level', 'Electrical power tools sped up drywall cutting', 'Studio Four needed fewer foam boards than planned', 'The contractor installed panels before opening time'], 0, 'ตอบ Another coworker assisted by holding the corners level (ช่างไม้ Leo ช่วยจับมุมแผ่นไว้ให้ระหว่างเธอเจาะติดตั้ง)'],
      ['Part 3 · Meaning', 'What does the man mean when he says, "No wonder it looks laser-straight"?', ['He admires how evenly aligned the mounted panels look', 'He worries the wall plaster shifted off center', 'He asks to borrow carpenter Leo’s laser ruler', 'He dislikes heavy frame corners along Studio Four'], 0, 'ตอบ He admires how evenly aligned the mounted panels look (ชื่นชมว่าแผงติดได้ตรงเป๊ะเสมอกันมาก)'],
      ['Part 3 · Detail', 'Where can the man likely locate the new wireless microphones?', ['On a labeled shelf inside the Mailroom', 'Stacked beside Reception’s main guest sofa', 'Inside Studio Four’s sound locker', 'At the shipping dock loading ramp'], 0, 'ตอบ On a labeled shelf inside the Mailroom (กล่องสีเหลืองวางอยู่บนชั้นในห้องไปรษณีย์ที่ติดป้าย Audio Gear)'],
    ]),

    p3(1, 'l1-p3-4', [
      ['Woman1', 'us_f2', 'Sam, our customer hotline wait times climbed over seven minutes yesterday morning after we rolled out the new loyalty app.'],
      ['Man', 'us_m2', 'I saw that queue spike too. Half the callers just couldn’t locate their old paper gift points inside the updated login screen.'],
      ['Woman2', 'ca_f', 'I can post a two-minute walkthrough banner right inside the app’s opening help tab this afternoon if IT pushes an update.'],
      ['Man', 'us_m2', 'Even faster—our Web Team can mirror that short help card directly onto the login page without waiting for an app store review!'],
    ], null, [
      ['Part 3 · Problem', 'Why did phone support wait times rise above seven minutes?', ['Customers struggled to find transferred gift points after an app update', 'Phone headset lines disconnected automatically across regional queues', 'Customer service agents took training workshops all yesterday morning', 'Mobile login servers shut down completely during launch hours'], 0, 'ตอบ Customers struggled to find transferred gift points after an app update (ลูกค้าหาคะแนนบัตรสะสมเดิมไม่เจอหลังอัปเดตหน้าล็อกอินแอปใหม่)'],
      ['Part 3 · Proposal', 'What solution does the man suggest to roll out help instructions quickly?', ['Displaying guidance directly on a web login banner to avoid app-store wait', 'Assigning temporary accountants to answer incoming customer hotlines', 'Replacing mobile app rewards with physical paper gift cards', 'Scheduling a three-day software maintenance outage tonight'], 0, 'ตอบ Displaying guidance directly on a web login banner to avoid app-store wait (ให้ทีมเว็บแปะการ์ดแนะนำบนหน้าล็อกอินเลย ไม่ต้องรอ app store ตรวจอัปเดต)'],
      ['Part 3 · Topic', 'What role does the second woman likely work in?', ['Mobile application support or digital content publishing', 'Commercial real estate leasing', 'Retail warehouse inventory shipping', 'Corporate legal payroll compliance'], 0, 'ตอบ Mobile application support or digital content publishing (พูดถึงการอัปโหลดคำแนะนำลง Help tab ของแอปและประสานงาน IT)'],
    ]),

    p3(1, 'l1-p3-5', [
      ['Man', 'au_m', 'Good morning! My firm is catering a buffet lunch next Tuesday for thirty-five architectural engineers, and we loved your lemon herb chicken.'],
      ['Woman', 'us_f', 'We’d be delighted to prepare that! Do any guests follow gluten-free or plant-based diets so we portion labeled side trays cleanly?'],
      ['Man', 'au_m', 'Let’s see—five colleagues requested vegan grain bowls, and one partner avoids tree nuts altogether.'],
      ['Woman', 'us_f', 'Got it: thirty herb chicken portions, five sealed vegan bowls, and nut-free olive oil dressings across every tray. Delivery is complimentary on orders over thirty meals!'],
    ], null, [
      ['Part 3 · Detail', 'How many guests in total are attending Tuesday’s catered lunch?', ['Thirty-five people', 'Thirty people', 'Twenty-five people', 'Five people'], 0, 'ตอบ Thirty-five people (ผู้ชายบอกว่ามีวิศวกร 35 คน โดยแยกเป็นมังสวิรัติ 5 คน)'],
      ['Part 3 · Detail', 'Why does the catering manager adjust the salad dressing recipe?', ['One lunch attendee has a severe allergy to tree nuts', 'Lemon herb chicken pairs better with olive oil marinades', 'Architectural firms only permit dairy-free side salads', 'Creamy dressings spoil quickly during delivery vans'], 0, 'ตอบ One lunch attendee has a severe allergy to tree nuts (มี 1 คนแพ้ถั่วเปลือกแข็ง จึงทำน้ำสลัดปราศจากถั่วทั้งหมด)'],
      ['Part 3 · Benefit', 'Why will the client pay zero delivery charge?', ['Orders exceeding thirty meal portions ship for free', 'Tuesday lunch bookings receive complimentary city delivery', 'Architectural firms hold preferred corporate discount passes', 'Vegan grain bowls qualify for free van shipping'], 0, 'ตอบ Orders exceeding thirty meal portions ship for free (ยอดสั่งเกิน 30 ที่ได้ส่งฟรีตามเงื่อนไข)'],
    ]),

    p3(1, 'l1-p3-6', [
      ['Woman', 'uk_f', 'Ben, look at these energy metering graphs from Plant Number Two—electricity draw dropped twenty percent right after April’s compressor retrofit!'],
      ['Man', 'us_m', 'Impressive numbers! Still, notice those two steep midday spikes on May 8 and May 15? Did packaging line two jam again?'],
      ['Woman', 'uk_f', 'No, maintenance flushed hot steam boilers those two mornings while testing winter backup heaters.'],
      ['Man', 'us_m', 'That makes total sense. Let’s drop a quick footnote under both May peaks before sending this efficiency slide to the Sustainability Board!'],
    ], null, [
      ['Part 3 · Detail', 'What positive trend did April’s equipment upgrade bring to Plant Number Two?', ['Energy consumption declined by one-fifth', 'Machine assembly speed increased by twenty percent', 'Packaging waste completely disappeared on conveyor lines', 'Monthly utility billing shifted automatically online'], 0, 'ตอบ Energy consumption declined by one-fifth (การใช้ไฟฟ้าลดลง 20% หลังปรับปรุงคอมเพรสเซอร์ในเดือนเมษายน)'],
      ['Part 3 · Detail', 'What caused the brief electricity surges on May 8 and May 15?', ['Routine steam boiler flushing and winter backup heater checks', 'Packaging line jams during high daytime output', 'Power utility rate hikes across municipal factories', 'Summer cooling fans running without compressor covers'], 0, 'ตอบ Routine steam boiler flushing and winter backup heater checks (เกิดจากการล้างหม้อไอน้ำและทดสอบฮีตเตอร์สำรองฤดูหนาว)'],
      ['Part 3 · Action', 'What will the speakers do before sharing the chart with the Sustainability Board?', ['Add explanatory footnotes beneath both May spikes', 'Remove May data columns from the final slide', 'Schedule a second compressor retrofit next month', 'Convert kilowatt metering graphs into pie tables'], 0, 'ตอบ Add explanatory footnotes beneath both May spikes (ตกลงกันให้ใส่เชิงอรรถอธิบายยอดพุ่งทั้งสองจุดก่อนส่งบอร์ด)'],
    ]),

    p3(1, 'l1-p3-7', [
      ['Man', 'ca_m', 'Pardon me—this olive green ceramic mug looks chipped on the rim, yet it was the last box left on the display table.'],
      ['Woman', 'us_f2', 'Oh dear, thanks for pointing that out! Hang on—our ceramic workshop shipped six fresh cartons just an hour ago; let me peek behind Stockroom Curtain Two.'],
      ['Man', 'ca_m', 'Thank you! While you check, could I also grab two matching linen saucer cloths?'],
      ['Woman', 'us_f2', 'Of course! Feel free to bring them up to Express Lane One—if any spare mint mug lacks a box lid, I’ll still match our twenty-percent opening discount!'],
    ], null, [
      ['Part 3 · Problem', 'What issue did the shopper find with the mug on the display table?', ['Its ceramic rim had a small chip', 'Its matching gift box lid was torn', 'The olive glaze color faded under shop lights', 'Only one mug remained paired without a saucer cloth'], 0, 'ตอบ Its ceramic rim had a small chip (ขอบแก้วมัคมีรอยบิ่นเล็กน้อย)'],
      ['Part 3 · Detail', 'Why does the store clerk walk behind Stockroom Curtain Two?', ['To locate undamaged replacement mugs delivered earlier', 'To look up the twenty-percent discount checkout code', 'To wash dusty linen table cloths for express counters', 'To photograph damaged pottery for warehouse claims'], 0, 'ตอบ To locate undamaged replacement mugs delivered earlier (เข้าไปดูกล่องแก้วที่เพิ่งส่งมาใหม่ 6 ลังเมื่อชั่วโมงก่อน)'],
      ['Part 3 · Inference', 'Where will the customer likely finish paying for his items?', ['At Express Lane One', 'At the ceramic workshop pick-up dock', 'Beside the front garden table', 'Online via the mobile store portal'], 0, 'ตอบ At Express Lane One (พนักงานแนะนำให้นำของไปจ่ายที่ช่องด่วน Express Lane One)'],
    ]),

    p3(1, 'l1-p3-8', [
      ['Woman', 'au_f', 'Derek, did EastSide Construction send back the signed foundation change order for the Civic Center library expansion?'],
      ['Man', 'uk_m', 'They approved all structural drawings yesterday morning, yet accounting is still holding final signatures until our steel vendor confirms June delivery weeks.'],
      ['Woman', 'au_f', 'Let’s call NorthStar Steel this afternoon cleanly—if rebar arrives before May 28, ground crews won’t lose any summer pour days!'],
      ['Man', 'uk_m', 'Agreed. Ask for Priya Patel at dispatch; she promised priority rail cars whenever concrete pours hit early June.'],
    ], null, [
      ['Part 3 · Detail', 'Why hasn’t EastSide Construction finalized the change-order paperwork yet?', ['They are waiting for confirmed shipping dates from a steel supplier', 'Architectural structural drawings still contain engineering errors', 'Civic Center librarians asked to pause June pouring schedules', 'Accounting clerks misplaced signed copies during yesterday’s review'], 0, 'ตอบ They are waiting for confirmed shipping dates from a steel supplier (บริษัทรอฝ่ายผู้ขายเหล็กยืนยันกำหนดส่งของเดือนมิถุนายนก่อนเซ็นปิดงาน)'],
      ['Part 3 · Detail', 'Who should the woman contact at NorthStar Steel?', ['Priya Patel in shipping dispatch', 'Derek’s municipal project accountant', 'Library expansion structural architects', 'Concrete rail operators downtown'], 0, 'ตอบ Priya Patel in shipping dispatch (ผู้ชายแนะนำให้โทรขอสาย Priya Patel ฝ่ายจัดส่ง)'],
      ['Part 3 · Timing', 'Before what date must rebar arrive to preserve summer construction momentum?', ['May 28', 'June 15', 'May 1', 'Yesterday morning'], 0, 'ตอบ May 28 (ถ้าเหล็กเส้นมาถึงก่อน 28 พ.ค. ทีมหน้างานจะไม่เสียวันเทปูนช่วงฤดูร้อน)'],
    ]),

    p3(1, 'l1-p3-9', [
      ['Man', 'us_m', 'Welcome to MeadowView Apartments Leasing Office! Looking for a quiet one-bedroom overlooking the courtyard?'],
      ['Woman', 'uk_f', 'Yes, ideally starting September 1. What’s included inside the monthly rent—does water or high-speed fiber come bundled?'],
      ['Man', 'us_m', 'Cold water, recycling, and bike locker stalls come bundled free; tenants only pay electric bills and optional internet.'],
      ['Woman', 'uk_f', 'That’s reasonable! Also, I adopt a sleepy ten-year-old tabby cat—do second-floor courtyard apartments permit pets?'],
      ['Man', 'us_m', 'Cats under fifteen pounds are warmly welcome with a one-time refundable pet deposit of two hundred dollars! Let me grab keys for Apartment 208 so you can peek right now.'],
    ], null, [
      ['Part 3 · Detail', 'Which utility or building feature is NOT included automatically in monthly rent?', ['Electricity consumption charges', 'Cold tap water supply', 'Covered bicycle storage lockers', 'Building recycling service'], 0, 'ตอบ Electricity consumption charges (น้ำเย็น รีไซเคิล และล็อกเกอร์จักรยานฟรี แต่ค่าไฟและเน็ตเสริมผู้เช่าจ่ายเอง)'],
      ['Part 3 · Detail', 'What pet rule applies to the woman’s tabby cat?', ['Lightweight cats are allowed with a refundable $200 security deposit', 'Pets are restricted solely to first-floor garden units', 'Monthly pet rent increases base apartment fees permanently', 'Apartment 208 prohibits animals exceeding five years old'], 0, 'ตอบ Lightweight cats are allowed with a refundable $200 security deposit (แมวหนักไม่เกิน 15 ปอนด์เลี้ยงได้ โดยมีมัดจำคืนได้ $200)'],
      ['Part 3 · Action', 'What is the leasing agent going to do next?', ['Show the woman around vacant Apartment 208', 'Calculate fiber internet installation dates', 'Email September 1 lease drafts for signatures', 'Verify veterinary records for a ten-year-old pet'], 0, 'ตอบ Show the woman around vacant Apartment 208 (ไปหยิบกุญแจห้อง 208 พาเธอขึ้นไปดูห้องจริงตอนนี้เลย)'],
    ]),

    p3(1, 'l1-p3-10', [
      ['Woman', 'us_f', 'Wait—why are two conference keynote chairs wrapped in red caution ribbon inside Ballroom B?'],
      ['Man', 'us_m2', 'Lighting riggers noticed a loose ceiling speaker bolt hanging right over seats 4 and 5 this morning, so Hotel Engineering taped those two spots off until a boom lift tightens it at midnight.'],
      ['Woman', 'us_f', 'Good safety catch! Have we warned AV director Nina so keynote speakers walk strictly along the left podium ramp tonight?'],
      ['Man', 'us_m2', 'Already done—she shifted the VIP front row two paces left, and all sixty badges check in cleanly at six o’clock!'],
    ], null, [
      ['Part 3 · Reason', 'Why were two chairs taped off inside Ballroom B?', ['Overhead ceiling audio hardware required structural tightening', 'Carpet steam cleaning left two seating rows damp', 'VIP badge holders requested wider podium walking lanes', 'Midnight lighting rehearsals blocked camera sightlines'], 0, 'ตอบ Overhead ceiling audio hardware required structural tightening (พบสลักยึดลำโพงบนเพดานหลวมตรงเหนือเก้าอี้ 4 และ 5)'],
      ['Part 3 · Timing', 'When will maintenance workers tighten the loose overhead bolt?', ['At midnight', 'At six o’clock this evening', 'Earlier yesterday afternoon', 'Just before badges print'], 0, 'ตอบ At midnight (ช่างโรงแรมจะเอารถกระเช้ามาขันให้ตอนเที่ยงคืน)'],
      ['Part 3 · Detail', 'How did AV director Nina resolve podium traffic ahead of tonight’s program?', ['She adjusted front-row chairs slightly to the left', 'She moved the keynote address downstairs into Lobby A', 'She canceled the evening lighting setup checks', 'She removed sixty VIP guest passes at check-in'], 0, 'ตอบ She adjusted front-row chairs slightly to the left (ย้ายแถวหน้าขยับไปทางซ้ายสองก้าวเพื่อหลบจุดเสี่ยง)'],
    ]),

    // Set 1 Part 3 Graphics (Convs 11, 12, 13)
    p3(1, 'l1-p3-11', [
      ['Man', 'us_m', 'Hi Hannah, I’m booking Tuesday’s cross-town workshop shuttle—did we pick up twelve or eighteen visiting software trainees?'],
      ['Woman', 'uk_f', 'Wait—our Boston group added six extra engineers last night, bringing total passenger seats up to twenty-two! Check the Charter Rate Card on your screen—none of our regular vans fit twenty-two anymore!'],
      ['Man', 'us_m', 'Right—the City Sprinter tops out at fifteen seats, so let’s reserve the thirty-passenger Metro Coach instead.'],
      ['Woman', 'uk_f', 'Just remember Wednesday weekend pricing doesn’t apply since Tuesday runs on standard weekday pricing! Lock in the half-day charter slot now!'],
    ], doc('table', 'BayLine Charter Bus — Vehicle & Rate Card', null, [
      tbl(
        ['Vehicle Model', 'Seat Capacity', 'Weekday 4-Hr Rate', 'Sat–Sun Rate'],
        [
          ['Executive Town Car', '3 Seats', '$180', '$210'],
          ['City Sprinter Van', '15 Seats', '$340', '$390'],
          ['Metro Touring Coach', '30 Seats', '$520', '$590'],
          ['Grand Motorcoach', '52 Seats', '$780', '$860'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which vehicle must the speakers book for their 22 visiting engineers?', ['Metro Touring Coach', 'City Sprinter Van', 'Executive Town Car', 'Grand Motorcoach'], 0, 'ตอบ Metro Touring Coach (ผู้ชายสรุปเปลี่ยนจาก Sprinter ที่จุ 15 คน มาใช้ Metro Touring Coach ที่จุได้ 30 คน)'],
      ['Part 3 · Graphic', 'How much will Tuesday’s four-hour charter cost?', ['$520', '$590', '$340', '$780'], 0, 'ตอบ $520 (เดินทางวันอังคาร ซึ่งเป็น Weekday Rate ของ Metro Touring Coach = $520)'],
      ['Part 3 · Detail', 'Why did seat requirements jump above initial estimates?', ['Six more engineers from Boston joined the training roster overnight', 'Software trainers requested double space for hardware crates', 'Executive sedans failed airport shuttle inspections', 'Saturday weekend schedules shifted forward to Tuesday'], 0, 'ตอบ Six more engineers from Boston joined the training roster overnight (กลุ่มบอสตันเพิ่มวิศวกรเข้ามาอีก 6 คนเมื่อคืน)'],
    ]),

    p3(1, 'l1-p3-12', [
      ['Woman', 'au_f', 'Hi, I need to ship a framed architectural poster safely before Friday morning’s zoning board hearing, and I packed my own cardboard tube.'],
      ['Man', 'ca_m', 'No problem—your priority envelope weighed cleanly under two kilograms. Look at our Delivery Tier Menu here—since Friday starts tomorrow morning, Next-Day Noon falls too late for a nine A.M. hearing!'],
      ['Woman', 'au_f', 'Ugh, good catch! Better bump me onto the fastest morning option so the board receives it cleanly by eight-thirty A.M.!'],
      ['Man', 'ca_m', 'Sure thing! Signing you up now—that includes live GPS driver tracking straight to your phone.'],
    ], doc('table', 'RapidWing Courier — Next-Day Delivery Tiers (Up to 2 kg)', null, [
      tbl(
        ['Service Tier', 'Guaranteed Arrival', 'Base Charge', 'Tracking Included'],
        [
          ['Standard Ground', '2–3 Business Days', '$14.00', 'Hub Scans Only'],
          ['Next-Day Afternoon', 'By 4:30 P.M.', '$24.00', 'Email Receipt'],
          ['Next-Day Noon', 'By 12:00 P.M.', '$32.00', 'Web Status'],
          ['Priority Sunrise', 'By 8:30 A.M.', '$46.00', 'Live GPS SMS'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which courier tier will the woman select?', ['Priority Sunrise ($46.00)', 'Next-Day Noon ($32.00)', 'Next-Day Afternoon ($24.00)', 'Standard Ground ($14.00)'], 0, 'ตอบ Priority Sunrise ($46.00) (การประชุมเริ่ม 09:00 น. จึงต้องเลือกรอบถึงไม่เกิน 08:30 น. คือ Priority Sunrise)'],
      ['Part 3 · Detail', 'Why was the Next-Day Noon service unsuitable for this shipment?', ['Twelve P.M. arrives after the nine A.M. zoning hearing begins', 'Cardboard poster tubes exceed Next-Day Noon width restrictions', 'Only parcels weighing over two kilograms use midday vans', 'Zoning boards prohibit midday lobby courier drops'], 0, 'ตอบ Twelve P.M. arrives after the nine A.M. zoning hearing begins (ส่งถึงเที่ยงไม่ทันการพิจารณาตอนเก้าโมงเช้า)'],
      ['Part 3 · Detail', 'What perk accompanies the selected delivery tier?', ['Real-time GPS tracking updates to her phone', 'Free custom waterproof cardboard tube wrapping', 'Refund vouchers for Friday morning arrivals', 'Discounted two-day return mailing'], 0, 'ตอบ Real-time GPS tracking updates to her phone (ระบบ Live GPS SMS ติดตามคนขับแบบเรียลไทม์)'],
    ]),

    p3(1, 'l1-p3-13', [
      ['Man', 'us_m2', 'Paula, check the GreenFest Trade Hall Booth Map—which corner stand matches our new solar battery demonstration trailer?'],
      ['Woman', 'us_f2', 'Wait—solar demo batteries need heavy 240-volt outlets and direct courtyard vehicle access! Notice Booth B2 sits isolated behind enclosed carpet aisles, whereas the far loading corner next to West Truck Roll-Up works!'],
      ['Man', 'us_m2', 'Aha, Booth D4 right beside West Freight Roll-Up Door! Look how convenient moving heavy demo racks straight off our truck will be!'],
      ['Woman', 'us_f2', 'Perfect—email Fair Operations immediately to claim D4 before another battery exhibitor snaps it up!'],
    ], doc('list', 'GreenFest Trade Hall — Open Corner Booth Directory', null, [
      lst([
        'Booth A1 · Main Glass Lobby Entry (110V Light Power Only — Quiet Merch Display)',
        'Booth B2 · Central Carpeted Aisle Intersection (110V Power Only — No Heavy Wheel Carts)',
        'Booth C3 · North Food Court Patio Corner (110V Shared Strip — Catering Focus)',
        'Booth D4 · West Freight Roll-Up Door (240V Heavy Power + Direct Truck Dock Access)',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which trade hall booth will the company reserve?', ['Booth D4', 'Booth B2', 'Booth A1', 'Booth C3'], 0, 'ตอบ Booth D4 (Booth D4 ใกล้ประตู West Freight Roll-Up และมีไฟแรงสูง 240V ตามที่รถสาธิตแบตเตอรี่โซลาร์ต้องการ)'],
      ['Part 3 · Reason', 'Why did the woman rule out Booth B2?', ['It lacks heavy electrical capacity and convenient truck loading access', 'Main lobby carpet noise interferes with customer discussions', 'Food court aromas drift steadily over central display tables', 'Booth B2 already went to another solar hardware competitor'], 0, 'ตอบ It lacks heavy electrical capacity and convenient truck loading access (Booth B2 เป็นทางเดินปูพรมปิดล้อมและมีไฟแค่ 110V)'],
      ['Part 3 · Action', 'What should happen immediately next according to the woman?', ['Contact Fair Operations via email to lock in the preferred spot', 'Park the demonstration trailer outside Main Glass Lobby Entry', 'Apply for 110-volt extension power cords from North Patio', 'Cancel shipping orders for heavy solar display batteries'], 0, 'ตอบ Contact Fair Operations via email to lock in the preferred spot (ให้รีบส่งอีเมลแจ้งฝ่ายจัดงานเพื่อจองช่อง D4 ทันที)'],
    ]),

    // Set 1 Part 4 (10 Talks × 3 Qs = 30 Qs; Talks 8-10 include Graphics)
    p4(1, 'l1-p4-1', 'Recorded Telephone Message', 'uk_f',
      'Thank you for calling Lakeside Dental Wellness. Our downtown clinic is currently closed this Friday morning so our entire hygienist and clerical staff can complete annual medical safety and digital X-ray recertification. Normal patient cleanings and crown consultations resume tomorrow, Saturday, at eight-thirty A.M. If you are an existing clinic patient experiencing severe tooth pain today, press two to reach Dr. Park’s emergency on-call mobile desk. Otherwise, leave your full name and phone number after the chime.',
      null, [
        ['Part 4 · Reason', 'Why is Lakeside Dental Wellness closed on Friday morning?', ['Employees are attending yearly safety and imaging training', 'Digital X-ray machines are undergoing software upgrades', 'Dr. Park is presenting at a regional dental convention', 'Downtown roadwork temporarily closed patient parking bays'], 0, 'ตอบ Employees are attending yearly safety and imaging training (พนักงานทั้งหมดเข้ารับการอบรมต่ออายุความปลอดภัยและการใช้เครื่องเอกซเรย์ประจำปี)'],
        ['Part 4 · Detail', 'When will regular routine appointments restart?', ['Saturday at 8:30 A.M.', 'Friday afternoon at 2:00 P.M.', 'Monday at 9:00 A.M.', 'Immediately after noon safety training'], 0, 'ตอบ Saturday at 8:30 A.M. (เปิดตรวจตามปกติวันเสาร์เวลา 08:30 น.)'],
        ['Part 4 · Action', 'What should an urgent dental patient do right now?', ['Press button two to connect to Dr. Park’s on-call line', 'Visit the downtown emergency hospital wing directly', 'Send X-ray files via the weekend patient portal', 'Call back Saturday morning when clerks return'], 0, 'ตอบ Press button two to connect to Dr. Park’s on-call line (กดเลข 2 เพื่อติดต่อ Dr. Park กรณีฉุกเฉิน)'],
      ]),

    p4(1, 'l1-p4-2', 'Public Museum Announcement', 'us_m',
      'May I have your attention, museum visitors. Due to unexpected electrical panel maintenance along our Third Floor South Sculpture Wing, that small side gallery will close at three-thirty P.M. this afternoon—earlier than our usual six o’clock evening bell. All guests wishing to admire the Bronze Sea Trade exhibition should step upstairs within the next twenty minutes. Note that the First Floor Waterfront Cafe and Maritime Bookstore remain open as scheduled until seven P.M. tonight, and weekend tickets remain half price through Sunday.',
      null, [
        ['Part 4 · Purpose', 'What is the main purpose of this museum announcement?', ['To alert guests that one upper gallery is closing early for electrical service', 'To invite ticket holders to free afternoon bronze sculpting talks', 'To announce early evening closing hours for the Waterfront Cafe', 'To warn pedestrians about wet floors near museum exits'], 0, 'ตอบ To alert guests that one upper gallery is closing early for electrical service (แจ้งปิดห้องแสดงประติมากรรมชั้น 3 ปีกใต้เร็วขึ้นเวลา 15:30 น. เพื่อซ่อมตู้ไฟ)'],
        ['Part 4 · Detail', 'At what time does the Third Floor South Sculpture Wing close today?', ['At 3:30 P.M.', 'At 6:00 P.M.', 'At 7:00 P.M.', 'Within ten minutes'], 0, 'ตอบ At 3:30 P.M. (ประกาศระบุ will close at three-thirty P.M.)'],
        ['Part 4 · Inference', 'When is this announcement most likely being broadcast?', ['Around 3:10 P.M.', 'At 6:00 P.M.', 'At 7:00 P.M.', 'Sunday morning at opening'], 0, 'ตอบ Around 3:10 P.M. (บอกให้ขึ้นไปภายใน 20 นาทีข้างหน้า ก่อนห้องปิด 15:30 น. = ประมาณ 15:10 น.)'],
      ]),

    p4(1, 'l1-p4-3', 'Radio Traffic & Weather Update', 'au_f',
      'This is Hannah Ortiz on Bayside FM Ninety-Four with your Wednesday five o’clock commuter check. Steady coastal drizzle pushed fog onto Bridge Avenue southbound lanes, backing traffic cleanly past Exit Twelve—so consider cutting across Pine Street Ferry Terminal if heading toward Harbor Point tonight! Tomorrow brings crisp sunshine and light bay breezes near eighteen degrees, perfect timing for Metro Park’s annual Outdoor Book Market kicking off Friday noon near the Fountain Lawn.',
      null, [
        ['Part 4 · Problem', 'What is slowing southbound commuter traffic along Bridge Avenue?', ['Heavy drizzle and foggy coastal visibility', 'Bridge toll lane repaving near Exit Twelve', 'Outdoor book tents blocking Pine Street Terminal', 'Early morning commuter train crossings'], 0, 'ตอบ Heavy drizzle and foggy coastal visibility (ฝนปรอยและหมอกหนาทึบทำให้รถติดยาวผ่านทางออก 12)'],
        ['Part 4 · Recommendation', 'What alternate route does the broadcaster advise for commuters heading to Harbor Point?', ['Taking Pine Street Ferry Terminal instead', 'Waiting past seven o’clock on Exit Twelve ramps', 'Driving inland through Metro Park lawns', 'Using Bridge Avenue northbound carpool lanes'], 0, 'ตอบ Taking Pine Street Ferry Terminal instead (แนะนำให้ตัดออกทางท่าเรือเฟอร์รี Pine Street แทน)'],
        ['Part 4 · Detail', 'When does the annual Outdoor Book Market begin?', ['Friday at noon', 'Wednesday evening at five', 'Thursday morning', 'Next Tuesday afternoon'], 0, 'ตอบ Friday at noon (เริ่มเปิดตลาดหนังสือกลางแจ้งวันศุกร์เวลาเที่ยงตรง)'],
      ]),

    p4(1, 'l1-p4-4', 'Employee Training Onboarding Welcome', 'ca_m',
      'Welcome to CrestLine Freight Logistics, everyone! Before we hand out high-visibility warehouse vests and tour Loading Dock C, please turn to Page Four of your blue orientation binder. You’ll notice all new inventory associates spend Week One shadowing a certified forklift lead rather than operating pallet lifts solo. Once Payroll confirms your direct-deposit tax forms tomorrow afternoon, stop by IT Desk B to collect your digital barcode badge and personal lockbox PIN.',
      null, [
        ['Part 4 · Audience', 'Who is most likely listening to this speech?', ['Newly hired warehouse inventory staff', 'Regional forklift safety auditors', 'Payroll accounting managers on leave', 'Freight delivery truck clients'], 0, 'ตอบ Newly hired warehouse inventory staff (เป็นการปฐมนิเทศพนักงานใหม่ที่เพิ่งมารับเสื้อสะท้อนแสงและรหัสล็อกเกอร์)'],
        ['Part 4 · Rule', 'What restriction applies to trainees during their first week?', ['They must observe an experienced forklift mentor instead of driving alone', 'They cannot visit Loading Dock C until payroll verification finishes', 'No safety vests are distributed prior to Week Two tests', 'Trainees may operate lifts exclusively without blue orientation binders'], 0, 'ตอบ They must observe an experienced forklift mentor instead of driving alone (สัปดาห์แรกต้องประกบดูงานหัวหน้ารถยก ห้ามขับคนเดียว)'],
        ['Part 4 · Detail', 'Where should new associates pick up their digital barcode badges tomorrow afternoon?', ['At IT Desk B', 'Behind Loading Dock C gates', 'Inside the Payroll tax office', 'Beside the main lobby fountain'], 0, 'ตอบ At IT Desk B (แวะไปรับบัตรบาร์โค้ดและรหัสตู้เก็บของที่ IT Desk B หลังฝ่ายบัญชีตรวจแบบฟอร์มภาษีเสร็จ)'],
      ]),

    p4(1, 'l1-p4-5', 'Supermarket Promotional Announcement', 'us_f2',
      'Good afternoon, FreshBasket shoppers! Stop by Bakery Counter A right next to Floral Display Four over the next thirty minutes for complimentary warm samples of our new rosemary olive-oil focaccia bread—fresh out of brick ovens just moments ago! Plus, Digital Club members checking out before seven P.M. tonight automatically earn triple reward points across all organic stone fruits and local roasted espresso beans. Thank you for shopping FreshBasket!',
      null, [
        ['Part 4 · Offer', 'What can shoppers sample for free near Floral Display Four?', ['Freshly baked rosemary olive-oil focaccia bread', 'Organic summer peaches and plums', 'Complimentary espresso bean tastings', 'Warm garlic baguettes at register aisles'], 0, 'ตอบ Freshly baked rosemary olive-oil focaccia bread (มีชิมขนมปัง Focaccia โรสแมรีน้ำมันมะกอกอบใหม่ฟรีที่เคาน์เตอร์ A)'],
        ['Part 4 · Detail', 'Until what hour do Digital Club shoppers earn triple points tonight?', ['7:00 P.M.', '3:30 P.M.', '8:00 P.M.', 'For only thirty minutes'], 0, 'ตอบ 7:00 P.M. (ผู้เป็นสมาชิก Digital Club ที่ชำระเงินก่อน 19:00 น. จะได้แต้มคูณ 3)'],
        ['Part 4 · Inference', 'What products qualify for the triple points promotion?', ['Organic stone fruits and local roasted coffee beans', 'All fresh bread items at Bakery Counter A', 'Bouquets inside Floral Display Four only', 'Storewide refrigerated dairy milk cartons'], 0, 'ตอบ Organic stone fruits and local roasted coffee beans (เฉพาะผลไม้เมล็ดแข็งออร์แกนิกและเมล็ดกาแฟคั่วท้องถิ่น)'],
      ]),

    p4(1, 'l1-p4-6', 'Speaker Introduction at Industry Summit', 'uk_m',
      'Now please join me in welcoming our afternoon keynote speaker, Dr. Elena Sato. For twelve years, Dr. Sato directed municipal solar microgrid installations across coastal islands, helping rural clinics eliminate costly diesel backup generators cleanly. Last November, her engineering guidebook on community battery recycling won the National Clean Energy Medal! Today she’ll walk us through lessons learned connecting small neighborhood rooftops into resilient emergency power loops.',
      null, [
        ['Part 4 · Detail', 'What accomplishment earned Dr. Elena Sato a national award last November?', ['Publishing an engineering manual about recycling community batteries', 'Building coastal diesel clinics across rural islands', 'Serving twelve terms as municipal energy commissioner', 'Wiring urban rooftop solar installations free for schools'], 0, 'ตอบ Publishing an engineering manual about recycling community batteries (หนังสือคู่มือวิศวกรรมว่าด้วยการรีไซเคิลแบตเตอรี่ชุมชนได้รับรางวัลเมื่อ พ.ย. ปีก่อน)'],
        ['Part 4 · Topic', 'What will Dr. Sato primarily speak about today?', ['Linking residential rooftops into dependable local backup energy networks', 'Lowering wholesale shipping taxes on diesel backup motors', 'Replacing rural clinic roofs during coastal storm months', 'Auditing national clean-energy grant forms'], 0, 'ตอบ Linking residential rooftops into dependable local backup energy networks (บทเรียนการเชื่อมโซลาร์หลังคาบ้านเรือนเข้าด้วยกันเป็นระบบสำรองไฟฉุกเฉิน)'],
        ['Part 4 · Detail', 'How long did Dr. Sato oversee coastal island microgrid rollouts?', ['Twelve years', 'Two years', 'Since last November', 'Twenty years'], 0, 'ตอบ Twelve years (ทำงานกำกับระบบไมโครกริดตามเกาะชายฝั่งมา 12 ปี)'],
      ]),

    p4(1, 'l1-p4-7', 'Staff Meeting Excerpt — Packaging Update', 'us_f',
      'Before we wrap up today’s operations huddle, quick heads-up regarding our glass olive-oil gift bottles. Customers told us last quarter’s glossy paper sleeve tore awkwardly whenever condensation dampened shipping vans. Therefore, starting Monday’s production run, we are swapping onto water-resistant matte kraft labels paired with molded pulp neck collars—which actually trims cardboard waste weight per crate by eighteen percent! Supervisor Sam placed sample bottles on Shelf B outside Lab Three if anyone wants to feel the new matte texture afterward.',
      null, [
        ['Part 4 · Problem', 'Why did operations staff decide to replace the older glass bottle sleeves?', ['Humidity inside delivery vans caused paper sleeves to rip easily', 'Glossy sleeves looked dark underneath store display bulbs', 'Glass gift bottle weights exceeded parcel courier limits', 'Molded pulp neck collars cracked glass necks in cold trucks'], 0, 'ตอบ Humidity inside delivery vans caused paper sleeves to rip easily (ความชื้นจากไอน้ำในรถส่งของทำให้ปลอกกระดาษมันเดิมฉีกขาดง่าย)'],
        ['Part 4 · Benefit', 'What extra advantage does the new packaging offer?', ['A nearly one-fifth reduction in total shipping carton waste weight', 'Faster automated bottle filling on Monday morning runs', 'Zero need for cushioned protective dividers between bottles', 'Double space inside Lab Three sample closets'], 0, 'ตอบ A nearly one-fifth reduction in total shipping carton waste weight (ช่วยลดน้ำหนักขยะกระดาษแข็งลงได้ถึง 18%)'],
        ['Part 4 · Detail', 'Where can employees inspect sample bottles with the updated label?', ['On Shelf B outside Lab Three', 'Inside regional shipping delivery vans', 'On the main reception counter', 'At Sam’s fourth-floor desk'], 0, 'ตอบ On Shelf B outside Lab Three (วางขวดตัวอย่างไว้ที่ชั้น B หน้าห้อง Lab Three ให้ลองจับผิวสัมผัสได้หลังประชุม)'],
      ]),

    // Set 1 Part 4 Graphics (Talks 8, 9, 10)
    p4(1, 'l1-p4-8', 'Municipal Aquatic Center Schedule Announcement', 'ca_f',
      'Welcome to Oakridge Aquatic Center’s Saturday morning briefing! Please check the Pool Lane Directory posted beside Deck Doors. Due to a sudden swimming clinic for regional junior lifeguards, the Competition Lap Tank—originally slated for adult lap swimming until noon—will shift strictly to coach clinics at nine-thirty A.M. All morning lap swimmers holding orange pool wristbands may move straight across the hallway into the Warm Therapy Pool without extra lane charges, and locker room towel carts will be restocked every hour until eight P.M. closing.',
      doc('table', 'Oakridge Aquatic Center — Saturday Morning Pool Directory', null, [
        tbl(
          ['Facility Pool Zone', 'Normal Hours', 'Pass Group', 'Notes'],
          [
            ['Zone A · Competition Lap Tank', '6:00 A.M.–12:00 P.M.', 'Orange Wristband', '25m Lanes 1–8'],
            ['Zone B · Warm Therapy Pool', '7:00 A.M.–8:00 P.M.', 'Green Senior / Medical', 'Zero Lane Rope'],
            ['Zone C · Family Splash Lagoon', '10:00 A.M.–6:00 P.M.', 'Day Pass Guests', 'Shallow Slide'],
            ['Zone D · Outdoor Training Dive Well', 'Closed Apr–Oct', 'Coach Only', '3m Boards'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which pool zone is switching exclusively to a junior lifeguard clinic at 9:30 A.M.?', ['Zone A · Competition Lap Tank', 'Zone B · Warm Therapy Pool', 'Zone C · Family Splash Lagoon', 'Zone D · Outdoor Training Dive Well'], 0, 'ตอบ Zone A · Competition Lap Tank (ประกาศแจ้งว่าสระแข่งว่ายน้ำ Competition Lap Tank ต้องเปิดให้คลินิกอบรมไลฟ์การ์ดตอน 09:30 น.)'],
        ['Part 4 · Graphic', 'Look at the graphic. Until what time does the alternate pool offered to adult Orange Wristband swimmers stay open?', ['8:00 P.M.', '12:00 P.M.', '6:00 P.M.', '9:30 A.M.'], 0, 'ตอบ 8:00 P.M. (ผู้ว่ายน้ำถูกย้ายไปใช้ Zone B Warm Therapy Pool ซึ่งในตารางเปิดถึง 8:00 P.M.)'],
        ['Part 4 · Detail', 'Why are towel carts in the locker rooms receiving extra attention?', ['Staff are restocking towels hourly all day through closing', 'Lifeguard clinics require oversized deck towels', 'Family Splash Lagoon passes include two towels free', 'Zone D Dive Well renovations delayed laundry trucks'], 0, 'ตอบ Staff are restocking towels hourly all day through closing (พนักงานจะเติมรถเข็นผ้าเช็ดตัวในห้องแต่งตัวทุกๆ 1 ชั่วโมงจนปิด)'],
      ]),

    p4(1, 'l1-p4-9', 'Recorded Customer Promo & Coupon Voicemail', 'us_m',
      'Hello, preferred HarborBooks readers! Thanks for signing up for our Fall Mystery Festival newsletter! Take a glance at the Special Savings Voucher mailed in your welcome packet—we extended our Storewide Anniversary deadline! Instead of expiring November 10 as printed along the bottom banner, ALL codes shown stay gladly valid right through Sunday, November 17! Notice that buying two hardcover mysteries automatically triggers the middle tier bonus: twenty-five percent off PLUS one complimentary woven canvas tote bag at Checkout Counter Two—no minimum subtotal required when redeeming by Sunday!',
      doc('voucher', 'HarborBooks — Fall Festival Tiered Savings Voucher', null, [
        box('Voucher Tiers', [
          'Tier 1 · Code FALL10 — Buy ANY 1 Paperback Mystery -> 10% Off + Bookmark',
          'Tier 2 · Code FALL25 — Buy 2 Hardcover Mysteries -> 25% Off + Canvas Tote Bag',
          'Tier 3 · Code FALL40 — Spend $120+ Storewide -> 40% Off + Signed Collector Print',
          'Printed Expiry: Valid through Sunday, November 10 (See Audio Notice for Updates)',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which promo code applies to customers purchasing two hardcover mystery books?', ['FALL25', 'FALL10', 'FALL40', 'NONE'], 0, 'ตอบ FALL25 (ระดับกลาง Tier 2 คือซื้อปกแข็ง 2 เล่ม ใช้โค้ด FALL25 ลด 25% แถมกระเป๋าผ้า)'],
        ['Part 4 · Change', 'What printed voucher detail did the speaker update in this recording?', ['The expiration deadline was pushed back one week to November 17', 'Checkout Counter Two moved upstairs into the Mystery Lounge', 'Tier 2 now enforces a strict $120 minimum purchase requirement', 'Canvas tote bags sold out prior to November 10'], 0, 'ตอบ The expiration deadline was pushed back one week to November 17 (ขยายวันหมดอายุจาก 10 พ.ย. ออกไปถึงอาทิตย์ที่ 17 พ.ย.)'],
        ['Part 4 · Detail', 'What complimentary gift comes with using Tier 2?', ['A woven canvas book tote', 'A hardcover mystery bookmark', 'A signed author collector print', 'An audiobook download code'], 0, 'ตอบ A woven canvas book tote (Tier 2 แถมกระเป๋าผ้าแคนวาสที่เคาน์เตอร์ 2)'],
      ]),

    p4(1, 'l1-p4-10', 'Plant Manager Operations Update', 'uk_f',
      'Team, before noon lunch break, look briefly at the Packaging Floor Production Dashboard on screen. Great appreciation to Conveyor Line C operators—zero defective seals across forty-two thousand jars packed all week! However, notice one column dropping sharply beneath our eighty-five percent weekly target benchmark: Carton Labeling Bay Three slipped due to an overheating thermal barcode print head since Monday morning! Maintenance technician Carlos already brought a fresh spare print assembly, so Bay Three shifts offline strictly between one and two P.M. while Line C runs cleanly as usual.',
      doc('table', 'Packing Plant — Weekly Efficiency Dashboard (Target: >= 85%)', null, [
        tbl(
          ['Floor Line Unit', 'Weekly Output', 'Target Attainment', 'Supervisor Note'],
          [
            ['Line A · Glass Rinse & Fill', '51,400 Jars', '96%', 'On Track'],
            ['Line B · Vacuum Cap Seal', '49,200 Jars', '91%', 'Routine'],
            ['Line C · Safety Foil Wrap', '42,000 Jars', '98%', 'Zero Seal Defects'],
            ['Bay 3 · Carton Barcode Label', '28,100 Boxes', '68%', 'Thermal Print Head Overheat'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which unit currently fell below the 85% weekly target benchmark?', ['Bay 3 · Carton Barcode Label (68%)', 'Line C · Safety Foil Wrap (98%)', 'Line B · Vacuum Cap Seal (91%)', 'Line A · Glass Rinse & Fill (96%)'], 0, 'ตอบ Bay 3 · Carton Barcode Label (68%) (แผนกเดียวที่ต่ำกว่าเกณฑ์ 85% คือ Bay 3 ได้ 68% จากปัญหาหัวพิมพ์ความร้อนโอเวอร์ฮีต)'],
        ['Part 4 · Timing', 'Between what hours will Bay 3 stop running for printer replacement?', ['From 1:00 P.M. to 2:00 P.M.', 'Throughout the afternoon after 3:00 P.M.', 'Only until the noon lunch bell rings', 'Monday morning for two full hours'], 0, 'ตอบ From 1:00 P.M. to 2:00 P.M. (หยุดซ่อมเฉพาะช่วง 13:00–14:00 น.)'],
        ['Part 4 · Praise', 'Why did the manager specifically thank Conveyor Line C operators?', ['They completed 42,000 jar packages with zero seal mistakes', 'They fixed Bay Three’s overheating thermal ribbon rolls', 'They exceeded Line A production outputs cleanly', 'They volunteered during noon lunch repairs'], 0, 'ตอบ They completed 42,000 jar packages with zero seal mistakes (ชมเชย Line C ที่แพ็กขวด 42,000 ใบโดยไม่มีตำหนิซีลรั่วเลยแม้แต่อันเดียว)'],
      ]),

    // ==================== SET 2 ====================
    p1(2, 'l2-p1-1', 'uk_f', [
      'A pilot is stepping out of a parked commercial airplane.',
      'Passengers are carrying boxed groceries along a city street.',
      'Travelers are pulling wheeled suitcases across an airport concourse.',
      'Empty luggage carts have been stacked outside a terminal entrance.',
    ], 2, 'ตอบ Travelers are pulling wheeled suitcases across an airport concourse. (ผู้โดยสารกำลังลากกระเป๋าเดินทางล้อเลื่อนข้ามโถงสนามบิน)'),
    p1(2, 'l2-p1-2', 'us_m', [
      'A baker is placing round bread loaves onto wooden shelves.',
      'Customers are paying for pastries at a front shop counter.',
      'Paper flour sacks are piled beside a stainless mixing bowl.',
      'A chef is slicing fresh loaves of bread on a cutting board.',
    ], 0, 'ตอบ A baker is placing round bread loaves onto wooden shelves. (ช่างทำขนมปังสวมผ้ากันเปื้อนขาวกำลังเรียงขนมปังก้อนกลมลงบนชั้นไม้)'),
    p1(2, 'l2-p1-3', 'au_m', [
      'Workers are folding metal easels away against an office wall.',
      'A presenter is pointing at a chart while seated colleagues watch.',
      'Attendees are hanging framed bar graphs along a brick corridor.',
      'Two engineers are repairing a whiteboard tripod stand together.',
    ], 1, 'ตอบ A presenter is pointing at a chart while seated colleagues watch. (ผู้บรรยายกำลังชี้กราฟบนกระดาษชาร์ตขณะที่เพื่อนร่วมงานนั่งฟัง)'),
    p1(2, 'l2-p1-4', 'ca_f', [
      'Pedestrians are stepping carefully over freshly painted street stripes.',
      'Workers are repaving a cracked brick sidewalk outside storefronts.',
      'Orange safety barriers block every entrance to an underground garage.',
      'Workers in bright vests are kneeling beside an open street manhole.',
    ], 3, 'ตอบ Workers in bright vests are kneeling beside an open street manhole. (ช่างสองคนใส่เสื้อกั๊กสะท้อนแสงสีส้มคุกเข่าข้างฝาท่อระบายน้ำกลางถนนที่มีกรวยส้มล้อมรอบ)'),
    p1(2, 'l2-p1-5', 'us_f', [
      'Servers are pouring drinking water into tall stemmed glasses.',
      'Place settings have been laid out along an empty dining table.',
      'A dining room floor is being swept prior to evening service.',
      'Framed paintings are stacked neatly beside tall arched windows.',
    ], 1, 'ตอบ Place settings have been laid out along an empty dining table. (ผ้าเช็ดปากและแก้วน้ำวางจัดโต๊ะอาหารยาวเรียงรายพร้อมเก้าอี้ว่างในห้องอาหารหน้าต่างโค้ง)'),
    p1(2, 'l2-p1-6', 'uk_m', [
      'A gardener is planting new vegetable seeds along outdoor rows.',
      'Greenhouse benches have been cleared ahead of autumn cleaning.',
      'A woman wearing gloves is watering potted ferns inside a greenhouse.',
      'Hanging flower baskets are being loaded onto a delivery cart.',
    ], 2, 'ตอบ A woman wearing gloves is watering potted ferns inside a greenhouse. (ผู้หญิงสวมถุงมือถือบัวรดน้ำสีเขียวรดต้นเฟิร์นบนม้านั่งในเรือนกระจก)'),

    p2(2, 'l2-p2-1', 'us_m', 'uk_f', 'Who handles parking pass renewals for visiting contractors?', ['At Security Desk A beside the garage.', 'No, I usually walk from Main Street.', 'Ask Tom Gomez in Building Services.'], 2, 'ตอบ Ask Tom Gomez in Building Services. (ถามบุคคล Who -> ตอบชื่อเจ้าหน้าที่ Tom Gomez)'),
    p2(2, 'l2-p2-2', 'au_f', 'us_m2', 'Where should I set down these newly arrived archive cartons?', ['Leave them next to Room 104 for now.', 'About forty pounds per pallet.', 'Yes, we archived last year’s tax files.'], 0, 'ตอบ Leave them next to Room 104 for now. (ถามสถานที่วางกล่อง -> วางไว้ข้างห้อง 104 ก่อน)'),
    p2(2, 'l2-p2-3', 'uk_m', 'ca_f', 'When is our monthly inventory software check scheduled?', ['Every Friday afternoon cleanly before five.', 'The third Tuesday of each month at two.', 'Usually via our bar-code tablet app.'], 1, 'ตอบ The third Tuesday of each month at two. (ถามกำหนดการรายเดือน When -> วันอังคารที่สามของเดือน)'),
    p2(2, 'l2-p2-4', 'us_f', 'au_m', 'Has anyone tested the wireless projector inside Boardroom C?', ['Yes, I plugged in both HDMI adapters.', 'Across the corridor from the elevators.', 'Tomorrow afternoon around four.'], 0, 'ตอบ Yes, I plugged in both HDMI adapters. (ถามว่าลองเทสโปรเจกเตอร์หรือยัง ตอบลองเสียบสายเช็กแล้ว)'),
    p2(2, 'l2-p2-5', 'ca_m', 'us_f2', 'Why did the Chicago flight push back forty minutes late?', ['At Departure Gate B14.', 'Because baggage crews waited for late connecting carts.', 'Round-trip economy class.'], 1, 'ตอบ Because baggage crews waited for late connecting carts. (ถามเหตุผล Why ตอบเพราะรอรถขนกระเป๋าต่อเครื่อง)'),
    p2(2, 'l2-p2-6', 'uk_f', 'us_m', 'Would you like tea or sparkling water before we review the contract?', ['Sparkling water would be lovely, thank you.', 'Yes, we already signed Page 6.', 'Outside beside the marble reception bench.'], 0, 'ตอบ Sparkling water would be lovely, thank you. (ถามเลือกเครื่องดื่ม ตอบรับน้ำแร่โซดา)'),
    p2(2, 'l2-p2-7', 'us_m2', 'uk_f', 'How often does the harbor shuttle bus run on Sundays?', ['Around eighteen passengers per trip.', 'No, Sunday ferry service ended earlier.', 'Once every thirty minutes until eight P.M.'], 2, 'ตอบ Once every thirty minutes until eight P.M. (ถามความถี่ How often -> ทุก 30 นาที)'),
    p2(2, 'l2-p2-8', 'au_m', 'us_f', 'Don’t we need signed safety waivers from all visiting guests?', ['Two guests forgot to order vegetarian lunch boxes.', 'Yes, Hannah prints waiver forms at Front Check-In.', 'In the conference atrium after noon.'], 1, 'ตอบ Yes, Hannah prints waiver forms at Front Check-In. (คำถามปฏิเสธ Don’t we... -> ยืนยันว่าต้องใช้และบอกขั้นตอน)'),
    p2(2, 'l2-p2-9', 'ca_f', 'uk_m', 'Our shipping scale shows three error dashes instead of grams.', ['Almost twelve boxes were labeled today.', 'Try switching the power outlet strip behind Table Two.', 'Yes, FedEx vans arrive at four.'], 1, 'ตอบ Try switching the power outlet strip behind Table Two. (บอกเล่าเครื่องชั่งเออเร่อ -> แนะนำวิธีแก้ปัญหา)'),
    p2(2, 'l2-p2-10', 'us_f2', 'au_m', 'Which graphic artist designed the autumn brochure cover?', ['Marcus in Creative Studio put it together.', 'On recycled linen uncoated stock.', 'Because print proofs ran a day early.'], 0, 'ตอบ Marcus in Creative Studio put it together. (ถามบุคคลผู้ออกแบบ ตอบ Marcus จาก Creative Studio)'),
    p2(2, 'l2-p2-11', 'uk_m', 'us_f', 'Could you lower the room temperature two degrees before clients arrive?', ['No, the presentation lasts two hours.', 'Actually, thermostat locks are controlled by Facilities.', 'Along the hallway near Floor 3 lifts.'], 1, 'ตอบ Actually, thermostat locks are controlled by Facilities. (ตอบเลี่ยงสุภาพว่าฝ่ายอาคารควบคุมตัวปรับแอร์ไว้)'),
    p2(2, 'l2-p2-12', 'us_m', 'ca_f', 'How much extra did expedited overnight parcel postage cost?', ['Forty-two dollars total.', 'Two separate cardboard envelopes.', 'Delivered by nine-fifteen this morning.'], 0, 'ตอบ Forty-two dollars total. (ถามราคาค่าส่ง How much ตอบ $42)'),
    p2(2, 'l2-p2-13', 'au_f', 'uk_m', 'Should we schedule product photography Tuesday morning or Wednesday afternoon?', ['Both studio backdrops fit cleanly inside Van 2.', 'Let’s check which day our lighting freelancer is open.', 'Over four hundred glossy catalog shots.'], 1, 'ตอบ Let’s check which day our lighting freelancer is open. (ตอบเลี่ยงเป็นธรรมชาติว่าขอดูคิวช่างไฟก่อน)'),
    p2(2, 'l2-p2-14', 'ca_m', 'us_f2', 'Why isn’t Ben sitting at his corner desk today?', ['He’s visiting our Cleveland packaging supplier.', 'The wooden chair wheel came loose yesterday.', 'Right between Accounting and Design.'], 0, 'ตอบ He’s visiting our Cleveland packaging supplier. (ถามเหตุผล Why ตอบไปตรวจเยี่ยมซัพพลายเออร์ที่คลีฟแลนด์)'),
    p2(2, 'l2-p2-15', 'uk_f', 'us_m2', 'Whose black tablet charger stayed plugged in beside Booth 4?', ['No, battery percentage stays above eighty.', 'Maybe check with Sarah—she gave product demos there.', 'At our downtown electronics retail counter.'], 1, 'ตอบ Maybe check with Sarah—she gave product demos there. (ถามเจ้าของสิ่งของ Whose -> แนะนำให้ลองถาม Sarah)'),
    p2(2, 'l2-p2-16', 'us_m2', 'au_f', 'Did the municipal building inspector approve our new sprinkler valves?', ['Twelve gallons per minute cleanly.', 'Right above the steel loading doors.', 'Yes, the clearance certificate arrived by email today.'], 2, 'ตอบ Yes, the clearance certificate arrived by email today. (ถามอนุมัติหรือยัง ตอบใบรับรองส่งมาทางอีเมลแล้ววันนี้)'),
    p2(2, 'l2-p2-17', 'ca_f', 'uk_m', 'How long have you managed regional accounts at CrestBank?', ['Since last spring, so roughly fourteen months.', 'About eighty business checking clients.', 'Only when Senior Director Kim is away.'], 0, 'ตอบ Since last spring, so roughly fourteen months. (ถามระยะเวลา How long ตอบประมาณ 14 เดือน)'),
    p2(2, 'l2-p2-18', 'us_f', 'au_m', 'Isn’t the corner café closed on Monday afternoons for deep cleaning?', ['Yes, they serve roasted espresso blends.', 'No, they actually shifted deep cleans to Sunday nights.', 'Twenty-five percent off ceramic travel cups.'], 1, 'ตอบ No, they actually shifted deep cleans to Sunday nights. (ถามเช็กวันปิดร้าน ตอบแก้ว่าย้ายไปล้างใหญ่คืนวันอาทิตย์แล้ว)'),
    p2(2, 'l2-p2-19', 'uk_m', 'us_f', 'Let’s reserve the corner patio booth for Thursday’s client celebration.', ['Wait—remember forecasts call for heavy thunderstorms Thursday!', 'Six vegetarian pasta bowls and sparklers.', 'Across the bridge near Pier Seven.'], 0, 'ตอบ Wait—remember forecasts call for heavy thunderstorms Thursday! (เสนอจองโต๊ะกลางแจ้ง -> เตือนว่าพยากรณ์มีพายุฝนวันพฤหัสฯ)'),
    p2(2, 'l2-p2-20', 'au_m', 'ca_f', 'What size storage envelopes do we still need from Stationery Supply?', ['Legal-size padded mailers—the gray box is almost empty.', 'Wait until Friday’s monthly invoice clears.', 'By messenger courier in Building Two.'], 0, 'ตอบ Legal-size padded mailers—the gray box is almost empty. (ถามขนาดซอง What size -> ตอบซองกันกระแทกไซส์ Legal)'),
    p2(2, 'l2-p2-21', 'us_f2', 'uk_m', 'Where can I validate my underground visitor parking ticket?', ['Two hours free for weekend patrons.', 'Reception Desk clerks stamp parking slips before five.', 'At Exit Lane 3 near Fifth Avenue.'], 1, 'ตอบ Reception Desk clerks stamp parking slips before five. (ถามที่ประทับตราจอดรถ ตอบเคาน์เตอร์ต้อนรับสแตมป์ให้)'),
    p2(2, 'l2-p2-22', 'ca_m', 'us_f', 'How did the new stainless water filtration system perform during testing?', ['Installed underneath the breakroom sink.', 'Every quarterly replacement cartridge costs forty dollars.', 'Super cleanly—zero mineral scale left in espresso boilers.'], 2, 'ตอบ Super cleanly—zero mineral scale left in espresso boilers. (ถามผลทดสอบทำงานเป็นไง ตอบทำงานเยี่ยมไม่มีตะกรันเหลือเลย)'),
    p2(2, 'l2-p2-23', 'uk_f', 'au_m', 'I couldn’t open the payroll PDF attachment you sent this morning.', ['Really? Let me export a plain unencrypted copy right now.', 'About two hundred full-time warehouse associates.', 'Every second Friday before five P.M.'], 0, 'ตอบ Really? Let me export a plain unencrypted copy right now. (แจ้งปัญหาเปิดไฟล์ไม่ออก ตอบรับส่งไฟล์ชุดใหม่ให้ทันที)'),
    p2(2, 'l2-p2-24', 'us_m', 'ca_f', 'Do you happen to know when the museum gift shop closes tonight?', ['Twenty percent discount for museum members.', 'I believe their register shuts cleanly at six-thirty.', 'Beside the dinosaur fossils gallery.'], 1, 'ตอบ I believe their register shuts cleanly at six-thirty. (ถามเวลาปิดร้าน ตอบประมาณหกโมงครึ่ง)'),
    p2(2, 'l2-p2-25', 'au_f', 'uk_m', 'Why don’t we split taxi fare from the airport back to downtown?', ['Flight 418 landed at Gate Twelve.', 'Only two carry-on duffel bags.', 'Sounds great—sharing rides cuts parking hassles too.'], 2, 'ตอบ Sounds great—sharing rides cuts parking hassles too. (ชวนแชร์ค่าแท็กซี่ ตอบเห็นด้วยช่วยลดความยุ่งยากด้วย)'),

    // Set 2 Part 3 (13 Conversations × 3 Qs = 39 Qs; Convs 11-13 include Graphics)
    p3(2, 'l2-p3-1', [
      ['Woman', 'us_f', 'Hi Mark, did our quarterly employee engagement survey pull enough responses across the factory floor yet?'],
      ['Man', 'uk_m', 'Desk staff hit eighty-five percent, yet night-shift assembly lines only reached twenty percent because kiosk tablets stayed locked at Front Reception.'],
      ['Woman', 'us_f', 'Oh! No wonder night crews skipped it! Why don’t we print scannable QR posters and tape them beside Breakroom lockers before five P.M.?'],
      ['Man', 'uk_m', 'Smart idea—every worker checks schedules on phones anyway! I’ll run twenty posters off the color printer right now.'],
    ], null, [
      ['Part 3 · Problem', 'Why did night-shift factory employees complete few survey responses?', ['Shared feedback tablets were kept inside a locked Front Reception room', 'Survey login servers crashed during late night shifts', 'Breakroom lockers blocked QR code wall lighting', 'Printed brochures excluded night assembly job codes'], 0, 'ตอบ Shared feedback tablets were kept inside a locked Front Reception room (แท็บเล็ตทำแบบสอบถามถูกล็อกเก็บไว้ที่แผนกต้อนรับ ทำให้พนักงานกะดึกเข้าถึงไม่ได้)'],
      ['Part 3 · Detail', 'How does the woman propose improving participation tonight?', ['Taping scannable QR flyers near employee Breakroom lockers', 'Opening Front Reception desks until midnight all week', 'Issuing paper survey envelopes alongside paychecks', 'Extending the survey deadline into next quarter'], 0, 'ตอบ Taping scannable QR flyers near employee Breakroom lockers (พิมพ์โปสเตอร์ QR code ติดไว้ข้างล็อกเกอร์ห้องพักพนักงานก่อนห้าโมงเย็น)'],
      ['Part 3 · Action', 'What will the man do immediately next?', ['Print out twenty color survey posters', 'Unlock Front Reception tablet storage trays', 'Send reminder emails to desk staff managers', 'Collect completed forms after the night shift ends'], 0, 'ตอบ Print out twenty color survey posters (ผู้ชายรับอาสาไปสั่งปรินต์โปสเตอร์สี 20 แผ่นทันที)'],
    ]),

    p3(2, 'l2-p3-2', [
      ['Man', 'ca_m', 'Good morning! I dropped off my winter wool overcoat Tuesday for zipper stitching and stain care under David Klein.'],
      ['Woman', 'us_f2', 'Checking Bag #804! Look—your olive overcoat came back crisp and clean, though our tailor noticed two tiny brass sleeve buttons loosening and reinforced them at no extra fee.'],
      ['Man', 'ca_m', 'Oh, thank you so much for spotting that before cold weather hits! Also, do you take digital wallet phone taps today?'],
      ['Woman', 'us_f2', 'Sure do! Just hold your phone right atop that small gray keypad beside the receipt printer.'],
    ], null, [
      ['Part 3 · Service', 'Where is this conversation most likely taking place?', ['At a dry cleaner or garment tailoring shop', 'Inside a winter sporting goods store', 'At a downtown luggage repair booth', 'In a hotel coat-check cloakroom'], 0, 'ตอบ At a dry cleaner or garment tailoring shop (เอาเสื้อโค้ตมาแก้ซิป ขจัดคราบ และเย็บกระดุมร้านซักแห้ง/แก้เสื้อผ้า)'],
      ['Part 3 · Detail', 'What complimentary extra service did the tailor perform?', ['Reinforcing two loose brass sleeve cuff buttons', 'Replacing worn interior zipper pockets cleanly', 'Brushing dust off winter wool collar linings', 'Adding a waterproof protective coat bag'], 0, 'ตอบ Reinforcing two loose brass sleeve cuff buttons (ช่างช่วยย้ำกระดุมข้อมือทองเหลือง 2 เม็ดที่หลวมให้ฟรี)'],
      ['Part 3 · Inference', 'How will David Klein pay for his order?', ['Via contactless smartphone payment on a counter keypad', 'With a mailed monthly tailoring invoice', 'By inserting bank notes inside Bag #804', 'Checking out on an online customer website'], 0, 'ตอบ Via contactless smartphone payment on a counter keypad (ถามจ่ายด้วยแตะมือถือและพนักงานชี้แป้นสีเทาข้างเครื่องพิมพ์ใบเสร็จ)'],
    ]),

    p3(2, 'l2-p3-3', [
      ['Man1', 'us_m', 'Everyone, our new solar street-lamp housings launch at Pacific Builders Expo next Thursday, yet Crate Three holding all outdoor mounting brackets is still stuck at customs in Tacoma!'],
      ['Woman', 'au_f', 'Should we reschedule our Thursday product demo session completely?'],
      ['Man2', 'uk_m', 'Wait—we built three extra bracket sets during last month’s indoor prototype check in Warehouse Bay B! Can Technician Luis drive them down by rental cargo van tomorrow?'],
      ['Man1', 'us_m', 'That saves us completely! Maria, text Luis Warehouse Bay B shelf labels right away so he hits the interstate early!'],
    ], null, [
      ['Part 3 · Problem', 'What issue is threatening next Thursday’s trade show showcase?', ['Key outdoor bracket hardware was delayed at port customs', 'Pacific Builders Expo canceled Thursday demo floor slots', 'Solar street-lamp battery prototypes failed indoor tests', 'Rental cargo vans were fully booked until Friday afternoon'], 0, 'ตอบ Key outdoor bracket hardware was delayed at port customs (ลังที่ 3 ที่ใส่ตัวยึดโคมไฟติดอยู่ที่ด่านศุลกากร Tacoma)'],
      ['Part 3 · Solution', 'How does the second man suggest fixing the hardware shortage?', ['Transporting spare prototype bracket sets kept in Warehouse Bay B', 'Borrowing outdoor brackets from competing Expo exhibitors', 'Running indoor booth lights strictly on extension cables', 'Shifting the product launch presentation to Tacoma docks'], 0, 'ตอบ Transporting spare prototype bracket sets kept in Warehouse Bay B (เสนอให้ขับรถตู้เช่าขนชุดตัวยึดสำรอง 3 ชุดที่ทำไว้เดือนก่อนจาก Warehouse Bay B)'],
      ['Part 3 · Action', 'Who will send Luis exact storage shelf numbers?', ['The woman', 'The first man', 'The second man', 'The Tacoma customs broker'], 0, 'ตอบ The woman (ผู้ชายคนแรกหันมาสั่ง Maria คือผู้หญิงในกลุ่มให้ส่งข้อความรหัสชั้นเก็บของไปบอก Luis)'],
    ]),

    p3(2, 'l2-p3-4', [
      ['Woman', 'ca_f', 'Excuse me, I’m checking out three archival reference volumes on nineteenth-century canal engineering—I’m a visiting professor at Oakridge University.'],
      ['Man', 'us_m2', 'Welcome! Note that non-circulating historic ledgers stay inside Reading Room A only, yet these two modern paperback monographs can check out for fourteen days under a guest pass.'],
      ['Woman', 'ca_f', 'Got it—I’ll photograph pages from the historic ledger inside Reading Room A using non-flash camera settings, and just check out these two paperbacks today!'],
      ['Man', 'us_m2', 'Exactly right! Scan your Oakridge faculty badge at Kiosk Two right beside the glass stairs to link guest library borrowing.'],
    ], null, [
      ['Part 3 · Rule', 'What restriction applies to the nineteenth-century historic canal ledgers?', ['They must remain inside Reading Room A without leaving the library', 'Visiting faculty may check them out strictly for fourteen days', 'Photographs require written curator approval prior to scanning', 'Kiosk Two prohibits faculty badges from viewing old folios'], 0, 'ตอบ They must remain inside Reading Room A without leaving the library (หนังสือประวัติศาสตร์ห้ามยืมออก อ่านได้เฉพาะใน Reading Room A เท่านั้น)'],
      ['Part 3 · Action', 'How will the woman copy material from the historic volume?', ['By taking camera pictures with flash turned off', 'By scanning loose sheets at Kiosk Two beside glass stairs', 'By requesting archival PDF copies by courier next week', 'By taking two paperback copies home for notes'], 0, 'ตอบ By taking camera pictures with flash turned off (จะถ่ายรูปหน้าหนังสือแบบปิดแฟลชภายใน Reading Room A)'],
      ['Part 3 · Detail', 'How long can the woman keep the two modern paperback books?', ['Two weeks', 'One day', 'One month', 'Until semester breaks'], 0, 'ตอบ Two weeks (หนังสือปกอ่อนสมัยใหม่ยืมออกได้ 14 วัน = สองสัปดาห์)'],
    ]),

    p3(2, 'l2-p3-5', [
      ['Man', 'uk_m', 'Nadia, why is the conference dining hall smelling so strongly of fresh pine varnish before noon?'],
      ['Woman', 'us_f', 'Facilities refinished the wooden speaker stage edges overnight—they finished buffing at four A.M., though the air circulation fans barely clear odors quickly enough!'],
      ['Man', 'uk_m', 'Yikes! Four hundred city hospitality managers walk in here at two o’clock! Can we open both East Courtyard patio French doors right now?'],
      ['Woman', 'us_f', 'Already unlocked them—and Building Crew is setting up three extra charcoal air scrubbers behind the podium curtain until two P.M.!'],
    ], null, [
      ['Part 3 · Cause', 'Why was there a strong varnish smell inside the conference dining hall?', ['Stage wooden trim received fresh overnight coat finishing', 'Patio French doors had stayed locked for several weeks', 'Charcoal air filters malfunctioned beside podium curtains', 'Hospitality managers tested industrial cleaners before noon'], 0, 'ตอบ Stage wooden trim received fresh overnight coat finishing (ฝ่ายอาคารลงน้ำมันเคลือบขอบเวทีไม้เมื่อคืน)'],
      ['Part 3 · Detail', 'When do the four hundred conference guests arrive?', ['At 2:00 P.M.', 'At 4:00 A.M.', 'At 12:00 P.M.', 'Tomorrow morning'], 0, 'ตอบ At 2:00 P.M. (ผู้ร่วมงาน 400 คนจะมาถึงตอนบ่ายสองโมง)'],
      ['Part 3 · Detail', 'What extra equipment is Building Crew deploying behind curtains?', ['Three portable charcoal air-cleaning units', 'Portable heater fans along East Courtyard doors', 'Podium microphones checked ahead of opening bells', 'Spare wooden risers to cover wet floor varnish'], 0, 'ตอบ Three portable charcoal air-cleaning units (ตั้งเครื่องฟอกอากาศถ่านชาร์โคลเสริม 3 เครื่องหลังม่านเวที)'],
    ]),

    p3(2, 'l2-p3-6', [
      ['Woman', 'au_f', 'Hey Kevin, did accounting ask why our October trade publication ad bill climbed by three hundred dollars?'],
      ['Man', 'us_m', 'Yes! Actually, our graphic artist swapped the standard quarter-page spot onto the shiny inside back cover at the last minute because a feature article ran next to it!'],
      ['Woman', 'au_f', 'Oh! That makes total sense—inside back cover placement always carries an extra position surcharge, plus click analytics on our QR banner jumped forty percent!'],
      ['Man', 'us_m', 'Glad you brought up that QR jump—let’s clip our analytics chart right onto the invoice memo so Accounting sees the extra value!'],
    ], null, [
      ['Part 3 · Reason', 'Why did October’s magazine advertising cost increase by $300?', ['Placement upgraded from a standard spot onto the premium inside back cover', 'Additional QR codes ran across three separate trade magazines', 'Late color proof revisions triggered overnight graphic design fees', 'Quarter-page dimensions expanded into full-page spreads'], 0, 'ตอบ Placement upgraded from a standard spot onto the premium inside back cover (ย้ายตำแหน่งโฆษณาไปอยู่ปกหลังด้านใน ซึ่งมีค่าตำแหน่งพิเศษเพิ่ม)'],
      ['Part 3 · Detail', 'What measurable result accompanied the updated ad position?', ['QR code traffic jumped forty percent higher', 'Accounting cleared vendor invoices faster in October', 'Print subscriptions rose sharply among regional buyers', 'Standard quarter-page slots lowered design turnarounds'], 0, 'ตอบ QR code traffic jumped forty percent higher (ยอดคลิก/สแกน QR พุ่งขึ้นถึง 40%)'],
      ['Part 3 · Action', 'What will the speakers attach to the accounting invoice memo?', ['Traffic performance charts proving the higher ad return', 'Written apologies from the graphic design artist', 'Pre-approved annual advertising contracts for next year', 'Original invoices from September quarter-page spots'], 0, 'ตอบ Traffic performance charts proving the higher ad return (แนบกราฟวิเคราะห์ยอดคนสแกน QR ไปกับบันทึกชี้แจงฝ่ายบัญชีเพื่อแสดงความคุ้มค่า)'],
    ]),

    p3(2, 'l2-p3-7', [
      ['Man', 'ca_m', 'Hello TechHelp Desk? My laptop tracks office Wi-Fi smoothly at headquarters, yet here inside Chicago Airport Lounge it keeps dropping connection every two minutes!'],
      ['Woman', 'us_f2', 'Aha—many airport public portals rotate security certificates automatically! Let’s check your VPN client icon in the top tray: is Auto-Tunnel toggled ON right now?'],
      ['Man', 'ca_m', 'Yes, Auto-Tunnel shows active green! Should I switch it OFF momentarily until the airport’s browser login agreement window pops up?'],
      ['Woman', 'us_f2', 'Spot on! Turn VPN off for sixty seconds, click Accept on the lounge welcome page, then click VPN right back on once green bars appear!'],
    ], null, [
      ['Part 3 · Problem', 'Where is the caller experiencing frequent Wi-Fi disconnections?', ['Inside a Chicago airport passenger lounge', 'On the fourth floor of corporate headquarters', 'Inside a regional passenger train car', 'At a downtown client conference hotel'], 0, 'ตอบ Inside a Chicago airport passenger lounge (กำลังอยู่ที่เลานจ์สนามบินชิคาโกแล้วเน็ตหลุดทุก 2 นาที)'],
      ['Part 3 · Diagnosis', 'What caused the airport welcome login screen not to stay connected?', ['Active VPN Auto-Tunnel settings interfered with airport portal pop-ups', 'Airport security expired headquarters hardware passwords', 'Outdated Wi-Fi adapters stopped syncing above two minutes', 'Lounge electrical hubs lost wireless bandwidth'], 0, 'ตอบ Active VPN Auto-Tunnel settings interfered with airport portal pop-ups (เปิด Auto-Tunnel VPN ค้างไว้ ทำให้หน้าเว็บยืนยันตัวตนสนามบินเด้งไม่สมบูรณ์)'],
      ['Part 3 · Action', 'What step should the man take first right after turning VPN off?', ['Accept the airport lounge browser login terms page', 'Restart his laptop operating system completely', 'Email HelpDesk screenshots of his top tray icon', 'Connect via personal cellular hotspot tethering'], 0, 'ตอบ Accept the airport lounge browser login terms page (ปิด VPN ชั่วคราว 60 วินาที กด Accept หน้าต้อนรับเลานจ์ แล้วค่อยเปิด VPN กลับคืน)'],
    ]),

    p3(2, 'l2-p3-8', [
      ['Woman', 'uk_f', 'Good morning! Are you the courier picking up refrigerated orchid centerpieces for the Westgate Hotel Grand Gala?'],
      ['Man', 'us_m', 'Yes ma’am! Parked my chilled box truck right behind Green Alley Loading Ramp—just checking whether we pack twelve glass vases or fourteen?'],
      ['Woman', 'uk_f', 'Fourteen glass vases total—two extra backup bouquets sit wrapped in damp moss beside Cooler Shelf Three just in case any stem shifts on cobbles!'],
      ['Man', 'us_m', 'Smart planning! Wait—should I deliver straight to Ballroom Reception or the Westgate Service Kitchen entrance?'],
      ['Woman', 'uk_f', 'Service Kitchen entrance around Back Oak Street—Banquet Manager Luis prefers misting blooms inside chilled pantry halls before tables open at five.'],
    ], null, [
      ['Part 3 · Detail', 'Why are two extra orchid vases included in the delivery?', ['To replace any blooms disturbed during bumpy road transport', 'Westgate Hotel increased Gala table reservations this morning', 'Cooler Shelf Three lacked wrapping cloth for twelve bowls', 'Banquet Manager Luis requested matching floral desk displays'], 0, 'ตอบ To replace any blooms disturbed during bumpy road transport (เตรียมสำรองเผื่อดอกไม้ขยับช้ำบนถนนหินระหว่างขนส่ง)'],
      ['Part 3 · Detail', 'Where should the driver unload the floral arrangements at Westgate Hotel?', ['At the Service Kitchen entrance off Back Oak Street', 'Through the Ballroom Reception lobby glass doors', 'Along the front valet parking awning before five', 'Inside Green Alley cold freight storage'], 0, 'ตอบ At the Service Kitchen entrance off Back Oak Street (ผู้จัดการงานเลี้ยงให้ส่งเข้าทาง Service Kitchen ด้านถนน Back Oak)'],
      ['Part 3 · Timing', 'When will gala dining tables open to evening guests?', ['At 5:00 P.M.', 'At 12:00 P.M.', 'At 3:00 P.M.', 'Early tomorrow morning'], 0, 'ตอบ At 5:00 P.M. (ผู้หญิงบอกว่าก่อนโต๊ะจะเปิดต้อนรับตอนห้าโมงเย็น)'],
    ]),

    p3(2, 'l2-p3-9', [
      ['Man', 'au_m', 'Excuse me, I bought this programmable thermal drip coffee maker here four days ago, yet the glass carafe warmer plate never clicks off automatically after brewing.'],
      ['Woman', 'uk_f', 'Let’s inspect your model code—oh, this stainless edition uses an insulated double-wall carafe rather than an electric hot-plate switch! Check under Base Button B cleanly: pressing Brew Once heats strictly the water reservoir!'],
      ['Man', 'au_m', 'Wait—so the lower metal circle is ONLY a magnetic sensor tray rather than a heating burner?'],
      ['Woman', 'uk_f', 'Exactly! Thermal steel walls keep coffee piping hot four hours naturally so beans never scorch! Still, if you genuinely prefer an active warm-plate glass pot, I can swap you freely into our Model C-20 right across Aisle Three!'],
    ], null, [
      ['Part 3 · Explanation', 'What misconception caused the customer to think his coffee maker was faulty?', ['He mistook a passive magnetic sensor tray for a heated hot-plate burner', 'Stainless carafe walls cooled brewed coffee within thirty minutes', 'Base Button B failed to activate water reservoir heaters', 'Instruction sheets omitted glass carafe replacement SKUs'], 0, 'ตอบ He mistook a passive magnetic sensor tray for a heated hot-plate burner (รุ่นนี้ใช้กาเก็บความร้อนสแตนเลส ไม่ใช่แผ่นทำความร้อนก้นกาแบบรุ่นกระจก เลยไม่มีระบบตัดแผ่นทำความร้อน)'],
      ['Part 3 · Benefit', 'How does the thermal carafe design preserve coffee flavor according to the clerk?', ['By trapping heat inside insulated steel so coffee never burns', 'By clicking electric coils off every fifteen minutes automatically', 'By piping cold filtered water around stainless handles', 'By vibrating coffee grounds gently while brewing'], 0, 'ตอบ By trapping heat inside insulated steel so coffee never burns (ผนังสแตนเลสเก็บความร้อนได้ 4 ชม. ทำให้น้ำกาแฟไม่ไหม้ขม)'],
      ['Part 3 · Offer', 'What option does the clerk provide if the customer still wants an active heating hot-plate?', ['Exchanging the unit for Model C-20 without charge', 'Installing a custom magnetic heating sensor inside Aisle Three', 'Refunding fifty percent off stainless replacement lids', 'Shipping a replacement glass carafe from factory warehouses'], 0, 'ตอบ Exchanging the unit for Model C-20 without charge (เสนอเปลี่ยนเป็นรุ่น C-20 ที่มีแผ่นอุ่นกาแก้วให้ฟรีถ้าลูกค้าอยากได้แบบเดิม)'],
    ]),

    p3(2, 'l2-p3-10', [
      ['Woman', 'us_f2', 'Sam, check those morning attendance badges from our Annual Wellness Walk—how many headquarters staff checked in at East Park Gate before eight?'],
      ['Man', 'ca_m', 'Amazing turnout! One hundred eighty employees checked in—nearly fifty higher than last spring! Still, running short on medium cotton shirts left twelve folks grabbing Large sizes instead.'],
      ['Woman', 'us_f2', 'Not ideal—let’s keep a note inside our Event Playbook! Ordering forty extra Mediums next year prevents mid-size shortages cleanly while leaving fewer XXL bundles leftover.'],
      ['Man', 'ca_m', 'Already adding a note onto the shared summary spreadsheet! Also, volunteers handed out every single chilled citrus water bottle by ten o’clock—another thing to double next April!'],
    ], null, [
      ['Part 3 · Detail', 'How did this year’s Wellness Walk attendance compare to last spring’s?', ['Roughly fifty more staff members joined this year', 'Attendance declined slightly below one hundred eighty runners', 'Twelve volunteers arrived late after eight o’clock gates closed', 'Size distributions stayed identical to prior April walks'], 0, 'ตอบ Roughly fifty more staff members joined this year (มีพนักงานมาร่วม 180 คน มากกว่าฤดูใบไม้ผลิปีก่อนเกือบ 50 คน)'],
      ['Part 3 · Problem', 'What clothing supply mismatch happened before the walk began?', ['Medium T-shirts ran out early, forcing some participants to wear Large', 'Shirt logos peeled off before ten o’clock finish bells', 'Extra XXL bundles delayed morning badge registration lines', 'Delivery boxes arrived damp at East Park Gate'], 0, 'ตอบ Medium T-shirts ran out early, forcing some participants to wear Large (เสื้อไซส์ M หมดก่อน ทำให้ 12 คนต้องหยิบไซส์ L ไปใส่แทน)'],
      ['Part 3 · Proposal', 'In addition to ordering more Medium T-shirts next April, what do the speakers plan to double?', ['Supplies of chilled water bottles for participants', 'Event Playbook volunteers stationed at check-in gates', 'XXL shirt allocations on headquarters spreadsheets', 'Morning start windows prior to eight A.M.'], 0, 'ตอบ Supplies of chilled water bottles for participants (น้ำดื่มเย็นแช่หมดเกลี้ยงตอน 10 โมง ปีหน้าเลยจะสั่งเพิ่มเป็นสองเท่า)'],
    ]),

    // Set 2 Part 3 Graphics (Convs 11, 12, 13)
    p3(2, 'l2-p3-11', [
      ['Man', 'uk_m', 'Paula, check the Harbor Ferry Express Timetable before we leave downtown—if we finish lunch around twelve-thirty, can we catch the one P.M. express crossing cleanly?'],
      ['Woman', 'au_f', 'Careful—look closely at the Friday notes column! That one-oh-five P.M. Green Line Catamaran bypasses Oak Island completely on odd-numbered days, running straight across Harbor Point instead!'],
      ['Man', 'uk_m', 'Yikes, good eye—today IS the seventeenth! So if we still need to drop contract samples at Oak Island Marina, which afternoon boat hits Oak Island directly without transfer shuttles?'],
      ['Woman', 'au_f', 'Wait just slightly until the two-fifteen P.M. Ferry Route Two—it pulls directly into Oak Island Pier Three in twenty-five minutes! Let’s grab an espresso while waiting!'],
    ], doc('table', 'HarborLink Commuter Ferries — Afternoon Express Departures (Pier 1)', null, [
      tbl(
        ['Departure Time', 'Route Line', 'Direct Destinations', 'Special Service Rule'],
        [
          ['12:30 P.M.', 'Route 1 · Blue Boat', 'West Bay -> Harbor Point', 'Hourly Standard'],
          ['1:05 P.M.', 'Green Catamaran', 'Harbor Point Nonstop (Skips Oak Island on odd dates)', 'Express Only'],
          ['2:15 P.M.', 'Route 2 · Red Boat', 'Oak Island Pier 3 (Direct)', '25-Min Crossing'],
          ['3:40 P.M.', 'Route 3 · Evening Loop', 'West Bay -> Oak Island -> North Dock', 'Evening Loop'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which afternoon departure will the speakers board to reach Oak Island?', ['2:15 P.M. · Route 2 · Red Boat', '1:05 P.M. · Green Catamaran', '12:30 P.M. · Route 1 · Blue Boat', '3:40 P.M. · Route 3 · Evening Loop'], 0, 'ตอบ 2:15 P.M. · Route 2 · Red Boat (วันนี้วันที่ 17 ซึ่งเป็นเลขคี่ ทำให้เรือรอบ 13:05 น. ข้าม Oak Island ไป จึงต้องขึ้นเรือรอบ 14:15 น. สาย 2 ไปลง Oak Island โดยตรง)'],
      ['Part 3 · Reason', 'Why could the speakers NOT rely on the 1:05 P.M. Green Catamaran?', ['Because today is an odd-numbered calendar date when it skips Oak Island', 'Lunch ran longer than planned until past two o’clock', 'Contract cargo boxes exceed express catamaran weight limits', 'Pier 1 closed for afternoon maintenance inspections'], 0, 'ตอบ Because today is an odd-numbered calendar date when it skips Oak Island (เรือ Catamaran ข้าม Oak Island ในวันเลขคี่ และวันนี้คือวันที่ 17)'],
      ['Part 3 · Inference', 'At approximately what time will the speakers reach Oak Island Pier 3?', ['At 2:40 P.M.', 'At 1:30 P.M.', 'At 2:15 P.M.', 'At 3:40 P.M.'], 0, 'ตอบ At 2:40 P.M. (ออกเวลา 14:15 น. ใช้เวลาข้าม 25 นาที -> ถึงเวลา 14:40 น.)'],
    ]),

    p3(2, 'l2-p3-12', [
      ['Woman', 'us_f', 'Hi, I’m picking up three custom embroidered polo shirts for ClearView Dental under receipt #CV-109.'],
      ['Man', 'ca_m', 'Welcome! Here is your folded garment bag and printed invoice summary. Still, check line two on the sheet—Notice the teal embroidery crest was stitched on Size Medium cleanly rather than the Large you originally requested?'],
      ['Woman', 'us_f', 'Wait—you’re right! Look at the quantity sizes on our order table: Dr. Cho specifically wears Large!'],
      ['Man', 'ca_m', 'So sorry our shop caught that late! Luckily our back press runs idle right now—our embroiderer can stitch a fresh Size Large shirt within forty minutes at zero extra cost, OR credit twenty-eight dollars straight onto your card while you keep this extra Medium too!'],
    ], doc('table', 'StitchPro Apparel — Invoice Summary #CV-109', null, [
      tbl(
        ['Line Item', 'Size', 'Quantity', 'Unit Cost', 'Line Total'],
        [
          ['1. Embroidered Navy Polo', 'Small', '2', '$28.00', '$56.00'],
          ['2. Embroidered Teal Polo', 'Medium (Stitched instead of Large)', '1', '$28.00', '$28.00'],
          ['3. Logo Digitizing Setup', 'One-Time Setup', '1', '$15.00', '$15.00'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which order line had an incorrect shirt size stitched?', ['Line 2 · Embroidered Teal Polo', 'Line 1 · Embroidered Navy Polo', 'Line 3 · Logo Digitizing Setup', 'Both Size Small and Medium lines'], 0, 'ตอบ Line 2 · Embroidered Teal Polo (ตาราง Line 2 ระบุชัดว่าปักไซส์ Medium แทนที่จะเป็น Large)'],
      ['Part 3 · Detail', 'How long would fixing the garment mistake on site take?', ['Forty minutes', 'Twenty-eight minutes', 'Fifteen minutes', 'Two business days'], 0, 'ตอบ Forty minutes (ช่างปักหลังร้านว่างอยู่ตอนนี้ ปักเสื้อ Size Large ตัวใหม่เสร็จใน 40 นาทีโดยไม่คิดเพิ่ม)'],
      ['Part 3 · Choice', 'What alternative does the store clerk offer if the customer prefers not to wait?', ['A $28.00 refund while keeping the mis-sized Medium shirt', 'Waiving the $15.00 Logo Digitizing Setup charge cleanly', 'Trading two Navy Small polos for extra Large crests', 'Mailing a Large polo via next-morning courier for $15.00'], 0, 'ตอบ A $28.00 refund while keeping the mis-sized Medium shirt (คืนเงิน $28 เข้าบัตรให้โดยยังเก็บเสื้อ Medium ตัวนี้ไว้ได้เลย)'],
    ]),

    p3(2, 'l2-p3-13', [
      ['Man', 'us_m2', 'Nina, check this Downtown Co-Working Day Pass Comparison chart before booking seats for our eight-person client design sprint Thursday!'],
      ['Woman', 'uk_f', 'Sure—let’s see! Hot Desk Passes run twenty-five dollars per person, yet none of us get guaranteed whiteboards or closed glass doors when recording live usability interviews!'],
      ['Man', 'us_m2', 'Wait—if eight teammates book the Glass Corner Pod instead, it’s two hundred forty flat for the full day—barely five dollars more per person than eight open hot desks, AND comes with dual wall whiteboards plus coffee service!'],
      ['Woman', 'uk_f', 'No contest! Book the Glass Corner Pod right now—closed doors and two whiteboards make user testing infinitely quieter!'],
    ], doc('table', 'WorkNest Downtown — Thursday Room & Desk Rates', null, [
      tbl(
        ['Booking Option', 'Max Capacity', 'Full-Day Flat Rate', 'Included Features'],
        [
          ['Open Lounge Hot Desk', '1 Person / Pass', '$25 / person', 'Shared Lobby Wi-Fi Only'],
          ['Quiet Focus Booth', '2 People Max', '$95 / booth', 'Small Desk · No Whiteboard'],
          ['Glass Corner Pod', 'Up to 10 People', '$240 / pod', '2 Wall Whiteboards + Coffee Carafe'],
          ['TownHall Terrace', '35 People Max', '$620 / hall', 'Projector + Catering Stage'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which space will the speakers book for Thursday’s eight-person design sprint?', ['Glass Corner Pod ($240)', 'Open Lounge Hot Desk ($25/person)', 'Quiet Focus Booth ($95)', 'TownHall Terrace ($620)'], 0, 'ตอบ Glass Corner Pod ($240) (ทีม 8 คนต้องการประตูบานกระจกปิดมิดชิดและกระดานไวท์บอร์ด ซึ่งตรงกับ Glass Corner Pod)'],
      ['Part 3 · Math', 'How much total extra will booking the Glass Corner Pod ($240) cost compared with buying eight individual Open Lounge Hot Desks ($25 each)?', ['$40 more total', '$5 more total', '$145 more total', '$200 more total'], 0, 'ตอบ $40 more total (โต๊ะเดี่ยว 8 × $25 = $200 ส่วน Glass Corner Pod เหมาทั้งวัน $240 -> แพงกว่ากันรวม $40 หรือคนละ $5)'],
      ['Part 3 · Reason', 'Why do the speakers specifically need an enclosed space with whiteboards?', ['For conducting quiet live client usability interviews', 'Because shared lobby Wi-Fi blocks software uploads', 'To serve warm lunch buffets to thirty-five visitors', 'Because Open Lounge Passes sold out Thursdays'], 0, 'ตอบ For conducting quiet live client usability interviews (บันทึกเสียงทดสอบการใช้งานของลูกค้าสดจึงต้องห้องเก็บเสียงและใช้ไวท์บอร์ด)'],
    ]),

    // Set 2 Part 4 (10 Talks × 3 Qs = 30 Qs; Talks 8-10 include Graphics)
    p4(2, 'l2-p4-1', 'Customer Service Voicemail Greeting', 'ca_f',
      'Hello, you’ve reached OakCrest Furniture Assembly Support. Due to higher spring patio dining deliveries this week, telephone wait lines are averaging twelve minutes. Good news—nearly every hardware screw count, glass tabletop latch, and warranty claim can be resolved in under ninety seconds via our online Repair Hub at oakcresthome.com/parts! Simply snap a smartphone picture of the white production barcode sticker glued under any bench rail, and replacement hardware bags ship free next business morning. To hold for a live agent anyway, remain on the line.',
      null, [
        ['Part 4 · Problem', 'Why are telephone wait times longer than usual this week?', ['Seasonal patio dining sales boosted spring customer deliveries', 'Assembly technicians transferred to warehouse packaging shifts', 'Online web portals crashed during Monday morning updates', 'White production barcode stickers peeled off wooden benches'], 0, 'ตอบ Seasonal patio dining sales boosted spring customer deliveries (ยอดสั่งซื้อชุดโต๊ะสนามฤดูใบไม้ผลิสูงขึ้น ทำให้คิวสายโทรรอนาน 12 นาที)'],
        ['Part 4 · Instruction', 'What should callers photograph to request free replacement hardware online?', ['A white factory barcode tag located underneath a furniture rail', 'The printed cardboard invoice packed outside truck trailers', 'Damaged patio tabletop glass laid flat indoors', 'Shipping driver signatures collected at porch delivery'], 0, 'ตอบ A white factory barcode tag located underneath a furniture rail (ถ่ายรูปสติกเกอร์บาร์โค้ดสีขาวใต้คานม้านั่งส่งเข้าเว็บ oakcresthome.com/parts)'],
        ['Part 4 · Benefit', 'How quickly do hardware replacement bags ship after submitting photos online?', ['The next business morning at zero charge', 'Within twelve calendar days via standard ground', 'Following confirmation from a telephone agent', 'During seasonal fall repair cycles'], 0, 'ตอบ The next business morning at zero charge (จัดส่งฟรีในเช้าวันทำการถัดไป)'],
      ]),

    p4(2, 'l2-p4-2', 'Airport Gate Boarding Announcement', 'us_m',
      'Good morning passengers waiting at Gate Twelve for Coastal Air Flight Two-Zero-Nine to Vancouver. Before general seating zones board at ten-fifteen, please double-check roller carry-on baggage tags! Today’s twin-jet cabin bins fill swiftly, so passengers carrying oversized padded winter garment totes who volunteer to gate-check bags straight to Vancouver Baggage Carousel Four receive complimentary Priority Group One boarding immediately! Simply step forward to Desk B beside Agent Leo with your paper or mobile boarding pass within the next ten minutes.',
      null, [
        ['Part 4 · Offer', 'What perk do travelers receive if they agree to gate-check oversized bags?', ['Immediate Priority Group One early boarding access', 'Free upgrade seating near front aircraft exits', 'Waived extra baggage return fees on arrival', 'Guaranteed overhead bin space behind Gate Twelve'], 0, 'ตอบ Immediate Priority Group One early boarding access (ผู้โดยสารที่ยอมโหลดกระเป๋าหน้าเกตจะได้สิทธิ์ขึ้นเครื่องก่อนใน Priority Group One ทันที)'],
        ['Part 4 · Detail', 'Where would gate-checked bags be picked up upon reaching Vancouver?', ['At Vancouver Baggage Carousel Four', 'Inside Gate Twelve jet-bridge doors', 'At Coastal Air ticket counters before noon', 'Beside Agent Leo’s arrival kiosk'], 0, 'ตอบ At Vancouver Baggage Carousel Four (ไปรับกระเป๋าที่สายพาน Baggage Carousel Four ในแวนคูเวอร์)'],
        ['Part 4 · Timing', 'When is regular passenger boarding scheduled to open?', ['At 10:15 A.M.', 'In two hours', 'Once Desk B closes tomorrow', 'Immediately at 12:00 P.M.'], 0, 'ตอบ At 10:15 A.M. (ผู้โดยสารทั่วไปจะเริ่มขึ้นเครื่องตอน 10:15 น.)'],
      ]),

    p4(2, 'l2-p4-3', 'Corporate Town Hall Budget Update', 'uk_f',
      'Thank you all for joining our third-quarter Finance Town Hall cleanly on time! First, fantastic milestone: operating revenue climbed nine percent year-over-year thanks squarely to hospital cold-storage clients upgrading multi-year maintenance contracts. Second, because regional warehouse utility leases renewed slightly below forecast, executive directors voted yesterday to restore our full five-hundred-dollar annual Wellness & Desk Ergonomics allowance for every full-time team member! Claim receipts starting November first directly in HR Direct—and let’s celebrate with fresh fruit pastries out in Atrium Lounge!',
      null, [
        ['Part 4 · Reason', 'What drove the nine percent increase in third-quarter operating revenue?', ['Medical clients signing multi-year cold-storage service upgrades', 'Lower warehouse electricity bills during early autumn', 'Expanding regional logistics deliveries overseas', 'Reducing executive wellness benefits earlier this year'], 0, 'ตอบ Medical clients signing multi-year cold-storage service upgrades (ลูกค้าโรงพยาบาลอัปเกรดสัญญาบำรุงรักษาห้องเย็นระยะยาว)'],
        ['Part 4 · Announcement', 'What employee benefit is being brought back starting November 1?', ['A $500 annual stipend for wellness and desk ergonomics', 'Complimentary daily pastry breakfasts in Atrium Lounge', 'Ten percent holiday cash bonuses for warehouse leases', 'Free annual clinic physical appointments'], 0, 'ตอบ A $500 annual stipend for wellness and desk ergonomics (คืนสิทธิ์งบสนับสนุนสุขภาพและการจัดโต๊ะทำงาน $500 ต่อปีให้พนักงานประจำ)'],
        ['Part 4 · Action', 'Where should employees submit eligible receipts next month?', ['Through the HR Direct online portal', 'To Atrium Lounge reception folders', 'Directly with regional Finance auditors', 'Attached to quarterly warehouse lease forms'], 0, 'ตอบ Through the HR Direct online portal (ยื่นใบเสร็จตั้งแต่วันที่ 1 พ.ย. ผ่านระบบ HR Direct)'],
      ]),

    p4(2, 'l2-p4-4', 'Tour Guide Orientation — Historic Textile Mill', 'au_m',
      'Welcome everyone to the RedBrick Textile Mill Historic Preserve! Before we step inside the 1904 stone spinning loft, keep two simple rules in mind. First, our original oak floorboards still carry historic weaving oil luster—making corridors delightfully glossy yet slightly slick near entry ramps, so keep one hand near brass handrails while ascending. Second, feel free to take clear daylight snapshots throughout the loom hall cleanly, just skip metal tripod legs so school tour groups squeeze smoothly past narrow belt aisles! Ready? Step right inside Hall One!',
      null, [
        ['Part 4 · Safety', 'Why does the guide tell visitors to hold brass handrails on the way up?', ['Glossy oiled wooden stairs can be slightly slippery', 'Construction scaffolding still covers 1904 stone entry ramps', 'Heavy weaving machines vibrate historic wooden floors', 'Dim loft lighting hides steep metal ladder treads'], 0, 'ตอบ Glossy oiled wooden stairs can be slightly slippery (พื้นไม้โอ๊กเดิมเคลือบน้ำมันไว้ทำให้เงาและลื่นเล็กน้อยตรงทางขึ้น)'],
        ['Part 4 · Rule', 'What photography accessory is NOT allowed inside the spinning loom hall?', ['Standing metal camera tripods', 'Smartphone camera flashes outdoors', 'Handheld digital zoom lenses', 'Notebook sketching equipment'], 0, 'ตอบ Standing metal camera tripods (ถ่ายรูปได้ แต่ห้ามตั้งขาตั้งกล้อง tripod เพราะทางเดินแคบอาจเกะกะคณะนักเรียน)'],
        ['Part 4 · Location', 'Where is the tour group about to enter first?', ['Hall One of the spinning loft', 'An outdoor stone mill yard', 'The gift shop beside entry ramps', 'An executive textile boardroom'], 0, 'ตอบ Hall One of the spinning loft (ตอนท้ายชวนเดินเข้าไปใน Hall One)'],
      ]),

    p4(2, 'l2-p4-5', 'Software Product Demonstration Intro', 'us_f2',
      'Hello accounting teams! Today I’m excited to demonstrate SwiftLedger Version Four—our latest update tackling the number-one headache you flagged last spring: matching supplier PDF receipts against messy credit card CSV exports! Watch my left screen right now: instead of manually typing invoice totals column-by-column every Friday afternoon, you simply drag your bank statement straight onto this orange Drop Zone, and SwiftLedger automatically highlights mismatched dates or duplicated tips in under four seconds! Stick around until the end for a live Q&A plus thirty-day free sandbox keys!',
      null, [
        ['Part 4 · Purpose', 'What main task was SwiftLedger Version Four redesigned to automate?', ['Reconciling vendor invoice receipts with monthly bank card records', 'Exporting colorful accounting tax charts every Friday morning', 'Scanning hand-written customer signatures via webcam', 'Translating international supplier currency contracts'], 0, 'ตอบ Reconciling vendor invoice receipts with monthly bank card records (จับคู่บิล PDF ผู้ขายเข้ากับไฟล์ CSV บัตรเครดิตโดยอัตโนมัติ)'],
        ['Part 4 · Detail', 'How does SwiftLedger help accountants spot errors quickly?', ['It automatically marks duplicate tips and date discrepancies in seconds', 'It mails printed exception letters straight to credit card banks', 'It blocks duplicate vendor logins before Friday afternoon closes', 'It removes unverified receipts cleanly without accountant checks'], 0, 'ตอบ It automatically marks duplicate tips and date discrepancies in seconds (ไฮไลต์วันที่ไม่ตรงหรือยอดทิปซ้ำให้ภายใน 4 วินาที)'],
        ['Part 4 · Offer', 'What will attendees receive if they stay until the demonstration concludes?', ['Trial thirty-day software sandbox access codes', 'Free lifetime upgrades onto Version Five modules', 'Printed PDF invoice reference manuals', 'Discount vouchers for spring bookkeeping webinars'], 0, 'ตอบ Trial thirty-day software sandbox access codes (อยู่จนจบจะได้กุญแจทดลองใช้ sandbox ฟรี 30 วัน)'],
      ]),

    p4(2, 'l2-p4-6', 'Radio Weather & Festival Advisory', 'ca_m',
      'Back on Civic FM Ninety-Eight! Planning to catch tonight’s Outdoor Jazz Trio beside Harbor Amphitheater? Pack a light waterproof windbreaker cleanly just in case: brisk offshore gusts picking up around eight P.M. drop dockside temperatures quickly down toward twelve degrees Celsius! Good news for weekend sailors—tomorrow’s Saturday Harbor Paddle Race runs right on schedule under bright morning sunshine! Also, don’t miss RiverWalk Art Guild’s sidewalk chalk competition shifting from Market Square onto wider Library Plaza pavements tomorrow starting cleanly at nine A.M.',
      null, [
        ['Part 4 · Advice', 'What should attendees bring to tonight’s Harbor Amphitheater concert?', ['A light wind-blocking jacket for chilly evening breezes', 'Folding waterproof umbrellas inside Library Plaza lawns', 'Morning paddle boat oars for Friday jazz rehearsals', 'Thermal winter gloves ahead of freezing Saturday forecasts'], 0, 'ตอบ A light wind-blocking jacket for chilly evening breezes (แนะนำพกเสื้อกันลมบางๆ เพราะลมทะเลพัดแรงตอนสองทุ่มทำให้อากาศลดลงเหลือ 12°C)'],
        ['Part 4 · Change', 'What event location changed for Saturday morning?', ['The sidewalk chalk art contest moved to Library Plaza', 'The Jazz Trio shifted from Market Square onto Harbor Pier', 'Harbor Paddle Races moved indoors near Market Square', 'Civic FM radio broadcasts moved from Harbor Amphitheater'], 0, 'ตอบ The sidewalk chalk art contest moved to Library Plaza (การแข่งวาดภาพชอล์กย้ายจาก Market Square ไปลาน Library Plaza)'],
        ['Part 4 · Detail', 'What is the weather forecast for Saturday morning’s paddle race?', ['Bright and sunny skies', 'Brisk gale winds above twenty knots', 'Scattered heavy morning thunderstorms', 'Thick foggy visibility until noon'], 0, 'ตอบ Bright and sunny skies (พรุ่งนี้เช้าวันเสาร์แดดจ้าท้องฟ้าแจ่มใส)'],
      ]),

    p4(2, 'l2-p4-7', 'Factory Floor Safety Inspection Recap', 'uk_m',
      'Alright floor supervisors, thank you for walking Assembly Bays One through Four cleanly with our municipal fire safety inspector this morning! First, the inspector praised how clearly yellow floor walk-lines and fire-extinguisher tags stayed unobstructed across Bays One and Two! However, notice one single citation on his clipboard for Bay Three: two wooden pallet racks stacked slightly above the painted red wall height line—partially blocking overhead sprinkler spray cones! Drop those top two pallet cartons onto the low annex rack before three P.M. so Inspector Reyes signs off our annual certificate tomorrow!',
      null, [
        ['Part 4 · Problem', 'Why did Assembly Bay Three receive a citation during morning inspection?', ['High wooden pallet stacks blocked overhead fire-sprinkler coverage', 'Fire extinguishers lacked updated yellow inspection tags', 'Yellow floor walkways appeared faded along shipping aisles', 'Two wooden shipping docks leaned near electrical exit doors'], 0, 'ตอบ High wooden pallet stacks blocked overhead fire-sprinkler coverage (ชั้นวางพาเลตวางสูงเกินเส้นสีแดงบนผนัง ทำให้ขวางหัวฉีดดับเพลิงสปริงเกลอร์)'],
        ['Part 4 · Praise', 'Which parts of the facility received complimentary remarks from the inspector?', ['Bays One and Two for clear aisles and accessible extinguisher tags', 'Bay Four for storing top cartons on annex shelves cleanly', 'External loading ramps beside fire department hoses', 'Bay Three’s low ceiling lighting brightness'], 0, 'ตอบ Bays One and Two for clear aisles and accessible extinguisher tags (ชมเชย Bay 1 และ 2 ที่ทางเดินสีเหลืองและป้ายถังดับเพลิงโล่งชัดเจนดีมาก)'],
        ['Part 4 · Deadline', 'By what time must Bay Three supervisors lower the tall pallet cartons?', ['Before 3:00 P.M. today', 'Immediately after tomorrow morning’s audit', 'Prior to 9:00 A.M. inspections Friday', 'End of the current month'], 0, 'ตอบ Before 3:00 P.M. today (สั่งย้ายลงชั้นเตี้ยให้เสร็จก่อน 15:00 น. วันนี้ เพื่อรอรับใบรับรองพรุ่งนี้)'],
      ]),

    // Set 2 Part 4 Graphics (Talks 8, 9, 10)
    p4(2, 'l2-p4-8', 'Hotel Fitness & Spa Directory Orientation', 'us_f',
      'Welcome to Grand Harbor Hotel! As our gold-tier executive guest, let me quickly highlight our Fourth Floor Wellness Wing map right beside elevator doors. Our sunlit Sauna Lounge stays blissfully quiet until eleven P.M., and notice one exciting schedule change not yet reflected inside printed room binders: starting today, Lap Pool Maintenance finished three days early! That means you DON’T need off-site guest gym passes anymore—our twenty-five-meter Heated Lap Pool reopens right on schedule this evening at five P.M. cleanly! Stop by Fitness Desk Two anytime for fresh citrus eucalyptus towels!',
      doc('table', 'Grand Harbor Hotel — Floor 4 Wellness Wing Hours', null, [
        tbl(
          ['Amenity Room', 'Printed Hours', 'Room Fee', 'Binder Notice'],
          [
            ['Strength & Cardio Gym', '24 Hours (Keycard)', 'Complimentary', 'Treadmills 1–8'],
            ['25m Heated Lap Pool', '6:00 A.M.–10:00 P.M.', 'Complimentary', 'Notice: Closed for Tile Repair until Fri'],
            ['Cedar Sauna Lounge', '8:00 A.M.–11:00 P.M.', 'Complimentary', 'Quiet Zone'],
            ['Deep-Tissue Massage Spa', '10:00 A.M.–8:00 P.M.', 'By Appointment', 'Lobby Level 20% Off'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which hotel facility is reopening earlier than the printed binder states?', ['25m Heated Lap Pool', 'Strength & Cardio Gym', 'Cedar Sauna Lounge', 'Deep-Tissue Massage Spa'], 0, 'ตอบ 25m Heated Lap Pool (ตารางในแฟ้มยังเขียนว่าปิดซ่อมถึงวันศุกร์ แต่ประกาศแจ้งว่าซ่อมเสร็จเร็วขึ้นและเปิดให้บริการเย็นนี้เวลา 17:00 น. แล้ว)'],
        ['Part 4 · Detail', 'What does the speaker say guests no longer have to use?', ['Off-site partner neighborhood gym passes', 'Digital hotel keycards at Fitness Desk Two', 'Extra citrus eucalyptus laundry towels', 'Lobby level appointment sign-up tablets'], 0, 'ตอบ Off-site partner neighborhood gym passes (ไม่จำเป็นต้องใช้บัตรผ่านไปว่ายน้ำที่ยิมภายนอกอีกต่อไปเพราะสระเปิดแล้ว)'],
        ['Part 4 · Graphic', 'Which wellness service requires pre-booked appointments rather than walk-in keycard access?', ['Deep-Tissue Massage Spa', 'Strength & Cardio Gym', 'Cedar Sauna Lounge', 'Heated Lap Pool'], 0, 'ตอบ Deep-Tissue Massage Spa (ในตารางระบุว่า Deep-Tissue Massage Spa ต้องนัดหมายล่วงหน้า By Appointment)'],
      ]),

    p4(2, 'l2-p4-9', 'Store Event Announcement & Workshop Schedule', 'au_f',
      'Good Saturday morning, UrbanGarden visitors! Thank you for joining our Spring Balcony Planting weekend! Glance briefly at our Greenhouse Workshop Board mounted near the soil bags. Unfortunately, master arborist Luis Chen called from highway traffic saying he’s stuck behind a bridge repair detour—meaning his ten-thirty A.M. Citrus Pruning Demo shifts smoothly onto the empty afternoon two-thirty slot! Meanwhile, our eleven-fifteen Herb Window Box session starts right on schedule at Demo Table Two with plenty of free terracotta starter pots still sitting beside Checkout Two!',
      doc('table', 'UrbanGarden Nursery — Saturday Free Workshop Timetable', null, [
        tbl(
          ['Time Slot', 'Topic', 'Instructor', 'Location'],
          [
            ['9:30 A.M.', 'Soil Composting Basics', 'Elena Cho', 'Outdoor Bench 1'],
            ['10:30 A.M.', 'Dwarf Citrus Pruning Demo', 'Luis Chen', 'Demo Table 1'],
            ['11:15 A.M.', 'Herb Window Box Workshop', 'Sara Mills', 'Demo Table 2'],
            ['2:30 P.M.', '(Open Afternoon Slot)', 'TBA', 'Demo Table 1'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Whose morning class is moving into the 2:30 P.M. afternoon slot?', ['Luis Chen’s Dwarf Citrus Pruning Demo', 'Elena Cho’s Soil Composting Basics', 'Sara Mills’s Herb Window Box Workshop', 'Outdoor Bench Garden Q&A'], 0, 'ตอบ Luis Chen’s Dwarf Citrus Pruning Demo (Luis Chen รถติดซ่อมสะพาน จึงย้ายรอบ 10:30 น. ไปลงช่องว่างบ่ายสองโมงครึ่ง)'],
        ['Part 4 · Detail', 'Where can attendees pick up free terracotta starter pots for Sara Mills’s class?', ['Beside Checkout Counter Two', 'At Outdoor Bench One', 'Along highway bridge detours', 'Behind soil pallet sacks at Demo Table 1'], 0, 'ตอบ Beside Checkout Counter Two (ประกาศระบุว่ากระถางดินเผาฟรีวางอยู่ข้างเคาน์เตอร์จ่ายเงิน 2)'],
        ['Part 4 · Detail', 'Which instructor will begin teaching on time at 11:15 A.M.?', ['Sara Mills', 'Luis Chen', 'Elena Cho', 'Workshop coordinator'], 0, 'ตอบ Sara Mills (ตาราง 11:15 น. คือ Sara Mills วิชา Herb Window Box ซึ่งเริ่มตรงเวลาปกติ)'],
      ]),

    p4(2, 'l2-p4-10', 'Corporate IT Rollout Briefing', 'us_m2',
      'Attention NorthPoint employees: please review the Laptop Hardware Trade-In Swap Schedule displayed in our All-Hands slide. Over the next two weeks, IT is upgrading older three-year workstation notebooks cleanly onto faster solid-state ThinkBooks! Look carefully along the right column: because Accounting runs quarterly tax filings all this Tuesday, the Finance & Accounting Department swap moves slightly later onto next Tuesday afternoon instead! Meanwhile, Operations Staff sitting on Floor Four can still trade machines on time tomorrow Monday morning between nine and noon—remember to close encrypted mail windows before handing over old units!',
      doc('table', 'NorthPoint IT — Hardware Upgrade Rollout Calendar', null, [
        tbl(
          ['Department', 'Floor', 'Scheduled Swap Window', 'Coordinator Desk'],
          [
            ['Operations Team', 'Floor 4', 'Monday · 9:00 A.M.–12:00 P.M.', 'Lab Door A'],
            ['Finance & Accounting', 'Floor 2', 'This Tuesday · 1:00–4:00 P.M.', 'Room 204'],
            ['Design & Marketing', 'Floor 3', 'Wednesday · 10:00 A.M.–2:00 P.M.', 'Studio Desk C'],
            ['Customer Care', 'Floor 1', 'Thursday · 1:00–5:00 P.M.', 'Help Window 1'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which floor’s original scheduled swap window is being postponed by one week?', ['Floor 2 (Finance & Accounting)', 'Floor 4 (Operations Team)', 'Floor 3 (Design & Marketing)', 'Floor 1 (Customer Care)'], 0, 'ตอบ Floor 2 (Finance & Accounting) (ฝ่ายบัญชีติดปิดงบไตรมาสวันอังคารนี้ จึงเลื่อนสลับเครื่องไปอังคารหน้าแทน — ตามตารางคือ Floor 2)'],
        ['Part 4 · Graphic', 'At which location should Operations Team staff trade in older notebooks on Monday morning?', ['Lab Door A', 'Room 204', 'Studio Desk C', 'Help Window 1'], 0, 'ตอบ Lab Door A (ตารางระบุช่อง Coordinator Desk ของ Operations Team คือ Lab Door A)'],
        ['Part 4 · Reminder', 'What must staff remember to do before turning in their old workstation laptops?', ['Shut down encrypted email applications cleanly beforehand', 'Print quarterly tax spreadsheet PDFs onto paper', 'Transfer solid-state drives manually at Studio Desk C', 'Update three-year security badges at Help Window 1'], 0, 'ตอบ Shut down encrypted email applications cleanly beforehand (เตือนให้ปิดหน้าต่างอีเมลที่เข้ารหัสไว้ให้เรียบร้อยก่อนส่งเครื่องคืน IT)'],
      ]),

    // ==================== SET 3 ====================
    p1(3, 'l3-p1-1', 'uk_m', [
      'Commuters are waiting behind a yellow safety strip as a train arrives.',
      'Mechanics are polishing metallic train wheels inside a service depot.',
      'Passengers are stacking cardboard boxes along a covered concrete ramp.',
      'Empty commuter benches are being repainted bright yellow outdoors.',
    ], 0, 'ตอบ Commuters are waiting behind a yellow safety strip as a train arrives. (ผู้โดยสารยืนรอหลังเส้นนิรภัยสีเหลืองบนชานชาลารถไฟ)'),
    p1(3, 'l3-p1-2', 'us_f', [
      'A librarian is wheeled pushing a wooden book cart between tall aisles.',
      'Two readers are seated across from each other looking at open books.',
      'Office desks have been cleared completely for evening floor cleaning.',
      'Students are lining up beside a front computer check-out desk.',
    ], 1, 'ตอบ Two readers are seated across from each other looking at open books. (คนสองคนนั่งตรงข้ามกันที่โต๊ะไม้ในห้องสมุดและกำลังอ่านหนังสือที่เปิดกางอยู่)'),
    p1(3, 'l3-p1-3', 'au_m', [
      'Cyclists are riding single file down a steep paved forest path.',
      'A repair technician is tightening parts on a bicycle held on a stand.',
      'Shoppers are carrying wrapped bicycle helmets out of a glass store.',
      'Several mountain bicycles are leaned together beside iron park gates.',
    ], 1, 'ตอบ A repair technician is tightening parts on a bicycle held on a stand. (ช่างซ่อมกำลังขันน็อตซ่อมจักรยานที่หงายขึ้นบนแท่นซ่อมในร้าน)'),
    p1(3, 'l3-p1-4', 'ca_f', [
      'Workers are assembling transparent glass barriers along an upper roof.',
      'A wide staircase leads down into a sunlit glass-walled atrium.',
      'Crowds of conference guests are resting across leather hall benches.',
      'Potted indoor fig trees are being watered beside front escalators.',
    ], 1, 'ตอบ A wide staircase leads down into a sunlit glass-walled atrium. (บันไดไม้โอ๊กและราวกระจกกว้างทอดลงสู่โถงกระจกสว่างที่มีต้นไม้ในกระถางและม้านั่งว่าง)'),
    p1(3, 'l3-p1-5', 'us_m2', [
      'Produce crates filled with fresh vegetables sit beneath a market awning.',
      'Delivery vans are unloading plastic milk jugs outside grocery stores.',
      'Farmers are harvesting orange carrots directly out of damp field soil.',
      'Empty wooden crates have been folded flat behind a timber barn.',
    ], 0, 'ตอบ Produce crates filled with fresh vegetables sit beneath a market awning. (ลังไม้ใส่ผักสดอย่างแครอทและมะเขือเทศตั้งเรียงใต้เต็นท์ตลาดนัด)'),
    p1(3, 'l3-p1-6', 'uk_f', [
      'Workers are painting white cargo lettering onto blue metal containers.',
      'A crane is hoisting a blue shipping container over a harbor dock.',
      'Commercial freight trucks are parked evenly outside toll plaza lanes.',
      'Sailboats are racing close together beneath tall port bridge cables.',
    ], 1, 'ตอบ A crane is hoisting a blue shipping container over a harbor dock. (เครนท่าเรือสีเหลืองกำลังยกตู้คอนเทนเนอร์สีน้ำเงินลงบนรถบรรทุก)'),

    p2(3, 'l3-p2-1', 'uk_f', 'us_m', 'When are the annual software security audits starting?', ['Every Monday in Building Four.', 'At the start of next quarter.', 'Our IT lead sent thirty pages.'], 1, 'ตอบ At the start of next quarter. (ถามกำหนดการเริ่มต้น When -> ต้นไตรมาสหน้า)'),
    p2(3, 'l3-p2-2', 'ca_m', 'au_f', 'Where is the closest print shop from headquarters?', ['Go two blocks north past Oak Avenue.', 'Fifty glossy color flyers, please.', 'Before Friday’s board briefing.'], 0, 'ตอบ Go two blocks north past Oak Avenue. (ถามทาง/สถานที่ Where -> เดินขึ้นเหนือไปสองบล็อก)'),
    p2(3, 'l3-p2-3', 'us_f2', 'uk_m', 'Who picked up our lunch trays from Harbor Grill?', ['No, I rarely order soup.', 'Claire brought them up ten minutes ago.', 'At twelve-fifteen on Table Three.'], 1, 'ตอบ Claire brought them up ten minutes ago. (ถามบุคคล Who -> Claire ยกขึ้นมาแล้ว)'),
    p2(3, 'l3-p2-4', 'au_m', 'ca_f', 'How many extra conference badges did Reception print?', ['Around thirty spare blank ones.', 'In white plastic neck pouches.', 'Only for visiting regional managers.'], 0, 'ตอบ Around thirty spare blank ones. (ถามจำนวน How many -> ประมาณ 30 ใบ)'),
    p2(3, 'l3-p2-5', 'us_m', 'uk_f', 'Why did the downtown streetcar stop before Pine Street?', ['Because road crews are fixing power lines ahead.', 'Two dollars per single fare.', 'Every morning cleanly at eight.'], 0, 'ตอบ Because road crews are fixing power lines ahead. (ถามเหตุผล Why -> ช่างกำลังซ่อมสายไฟข้างหน้า)'),
    p2(3, 'l3-p2-6', 'uk_m', 'us_f', 'Could you email that draft press release before three o’clock?', ['Yes, it’s published inside Civic Weekly.', 'I’ll finish the closing quote and send it cleanly by two.', 'Beside the conference press table.'], 1, 'ตอบ I’ll finish the closing quote and send it cleanly by two. (รับปากว่าจะทำให้เสร็จส่งก่อนบ่ายสอง)'),
    p2(3, 'l3-p2-7', 'ca_f', 'us_m2', 'Did Maria arrange travel insurance for the Tokyo delegation?', ['She took an afternoon express train.', 'No, HR handles overseas travel coverage.', 'For four engineers next month.'], 1, 'ตอบ No, HR handles overseas travel coverage. (ถามว่า Maria จัดการให้ไหม -> ตอบเปล่า ฝ่าย HR เป็นผู้ดูแลส่วนนี้)'),
    p2(3, 'l3-p2-8', 'us_f', 'au_m', 'Would you rather review Q4 budgets today or tomorrow morning?', ['Let’s get it done early tomorrow while coffee is fresh.', 'Around twelve million dollars overall.', 'Yes, Accounting printed two charts.'], 0, 'ตอบ Let’s get it done early tomorrow while coffee is fresh. (คำถามเลือก today or tomorrow -> เลือกพรุ่งนี้เช้า)'),
    p2(3, 'l3-p2-9', 'uk_f', 'ca_m', 'Haven’t the stainless kitchen sinks been inspected by Plumbing yet?', ['No, the contractor rescheduled until Thursday noon.', 'Turn the cold water valve leftward.', 'Beside the back loading pantry.'], 0, 'ตอบ No, the contractor rescheduled until Thursday noon. (คำถามปฏิเสธ Haven’t... -> แจ้งว่ายังไม่ตรวจ เลื่อนไปเที่ยงวันพฤหัสฯ)'),
    p2(3, 'l3-p2-10', 'us_m2', 'uk_f', 'Wait—both elevators in the East Wing appear offline right now.', ['Let’s walk up the South courtyard stairs instead.', 'On Floor 6 next to Human Resources.', 'Five hundred pounds capacity limit.'], 0, 'ตอบ Let’s walk up the South courtyard stairs instead. (บอกเล่าลิฟต์เสีย -> เสนอทางออกให้เดินขึ้นบันไดแทน)'),
    p2(3, 'l3-p2-11', 'au_f', 'us_m', 'How long should we boil the green tea leaves?', ['Usually two to three minutes maximum.', 'Two wooden boxes from Kyoto.', 'For visiting hotel executives.'], 0, 'ตอบ Usually two to three minutes maximum. (ถามระยะเวลา How long -> ไม่เกิน 2-3 นาที)'),
    p2(3, 'l3-p2-12', 'uk_m', 'us_f2', 'Which parcel delivery van uses the underground basement ramp?', ['Our refrigerated vans do—regular boxes dock outdoors.', 'Fifty cartons of fresh roasted coffee.', 'Before noon cleanly on Saturdays.'], 0, 'ตอบ Our refrigerated vans do—regular boxes dock outdoors. (ถามคันไหนลงทางลาดชั้นใต้ดิน -> รถห้องเย็นลงตรงนั้น ส่วนกล่องทั่วไปจอดข้างนอก)'),
    p2(3, 'l3-p2-13', 'ca_m', 'uk_f', 'Should I order laminated floor maps or folded paper leaflets?', ['Folded paper works well and cuts printing bills cleanly.', 'In the lobby information booth.', 'By Thursday evening before doors open.'], 0, 'ตอบ Folded paper works well and cuts printing bills cleanly. (เลือกแบบไหนดี -> แบบกระดาษพับใช้ได้ดีและประหยัดค่าพิมพ์)'),
    p2(3, 'l3-p2-14', 'us_f', 'au_m', 'Who forgot to lock the rooftop greenhouse skylight yesterday evening?', ['It stayed warm until six-thirty.', 'Probably the last maintenance crew—everyone else left at five.', 'Upstairs above Floor Five.'], 1, 'ตอบ Probably the last maintenance crew—everyone else left at five. (ถาม Who -> น่าจะเป็นทีมช่างชุดสุดท้ายที่อยู่เกิน 5 โมงเย็น)'),
    p2(3, 'l3-p2-15', 'uk_f', 'ca_m', 'Why don’t we test our booth lighting rig one hour earlier?', ['Four overhead LED strips per beam.', 'Smart idea—if any dimmer hums we’ll still catch it in time.', 'Inside North Pavilion Booth 204.'], 1, 'ตอบ Smart idea—if any dimmer hums we’ll still catch it in time. (Why don’t we... -> เห็นด้วยพร้อมเหตุผลดีๆ)'),
    p2(3, 'l3-p2-16', 'us_m', 'us_f2', 'Has our monthly electric utility rebate cleared corporate checking?', ['Look up Invoice 441 in Treasury—Ben processed rebates Tuesday.', 'Over forty solar inverter panels.', 'During sunny afternoon peak hours.'], 0, 'ตอบ Look up Invoice 441 in Treasury—Ben processed rebates Tuesday. (ตอบเลี่ยงให้ไปเช็กเลขบิล 441 ในฝ่ายการเงิน)'),
    p2(3, 'l3-p2-17', 'au_m', 'uk_f', 'What time does the evening express shuttle depart Building C?', ['Every twenty minutes after five o’clock.', 'Outside main glass turnstiles.', 'Yes, it connects cleanly to Pier 4.'], 0, 'ตอบ Every twenty minutes after five o’clock. (ถามรอบเวลา Every 20 minutes...)'),
    p2(3, 'l3-p2-18', 'ca_f', 'us_m2', 'Are you visiting our Montreal factory next Monday or flying straight home?', ['Montreal first—Plant Lead Leo wants an afternoon safety check.', 'Nonstop economy tickets both ways.', 'Roughly four hundred cardboard crates.'], 0, 'ตอบ Montreal first—Plant Lead Leo wants an afternoon safety check. (เลือกไปมอนทรีออลก่อนเพราะหัวหน้าโรงงานขอให้ตรวจความปลอดภัย)'),
    p2(3, 'l3-p2-19', 'us_f2', 'uk_m', 'How much is annual membership for the downtown swimming facility?', ['Five mornings cleanly per week.', 'Nine hundred dollars billed annually, or eighty-five monthly.', 'Beside Metro Plaza Exit Three.'], 1, 'ตอบ Nine hundred dollars billed annually, or eighty-five monthly. (ถามราคาค่าสมาชิก -> ปีละ $900 หรือเดือนละ $85)'),
    p2(3, 'l3-p2-20', 'uk_m', 'au_f', 'Did Accounting approve the reimbursement request for Sarah’s laptop adapter?', ['Only seventy-five dollars for OEM power cables.', 'Not yet—Finance still needs the itemized store receipt attached.', 'Under Keyboard Tray Three.'], 1, 'ตอบ Not yet—Finance still needs the itemized store receipt attached. (ถามว่าอนุมัติหรือยัง -> ยัง เพราะขาดใบเสร็จแจงรายการ)'),
    p2(3, 'l3-p2-21', 'us_m2', 'ca_f', 'I’m having trouble hearing voice calls in this open-plan office wing.', ['Try booking Acoustic Booth B next to Kitchenette Two!', 'Monday through Friday from nine to five.', 'Yes, I ordered two spare wireless headsets.'], 0, 'ตอบ Try booking Acoustic Booth B next to Kitchenette Two! (แจ้งปัญหาเสียงดัง -> แนะนำให้ใช้ตู้เก็บเสียง Acoustic Booth B)'),
    p2(3, 'l3-p2-22', 'au_f', 'us_m', 'When can mechanics inspect van number seven’s brake rotors?', ['Just pull it into Service Bay 1 cleanly right after lunch.', 'Replaced twenty-two thousand kilometers ago.', 'Mostly smooth highway commuter deliveries.'], 0, 'ตอบ Just pull it into Service Bay 1 cleanly right after lunch. (ถามเมื่อไหร่ซ่อมได้ -> ขับเข้าช่อง Service Bay 1 หลังพักเที่ยงได้เลย)'),
    p2(3, 'l3-p2-23', 'uk_f', 'ca_m', 'Whose silver thermal tumbler is resting beside the conference sink?', ['Warm dark roast coffee inside.', 'Ask Devon—he never steps into meetings without coffee.', 'Across from Reception Hall Three.'], 1, 'ตอบ Ask Devon—he never steps into meetings without coffee. (ถามเจ้าของ -> แนะนำให้ถาม Devon)'),
    p2(3, 'l3-p2-24', 'us_m', 'au_f', 'Can the catering driver unpack salad trays before eleven-thirty?', ['Yes—two chilled vans already backed into South Dock.', 'Forty fresh spinach and quinoa boxes.', 'With zero walnut oil dressings requested.'], 0, 'ตอบ Yes—two chilled vans already backed into South Dock. (ถามส่งทันก่อน 11:30 ไหม -> ทัน รถตู้เย็นสองคันถอยจอดที่ท่าโหลดแล้ว)'),
    p2(3, 'l3-p2-25', 'ca_f', 'uk_m', 'Where are extra paper coffee cups kept after the pantry counter empties?', ['Grab fresh sleeves off Bottom Shelf 2 behind the microwave.', 'Usually thirty cents per compostable lid.', 'Right after morning break ends cleanly.'], 0, 'ตอบ Grab fresh sleeves off Bottom Shelf 2 behind the microwave. (ถามแหล่งเก็บแก้วสำรอง -> หยิบจากชั้นล่าง 2 หลังไมโครเวฟ)'),

    // Set 3 Part 3
    p3(3, 'l3-p3-1', [
      ['Woman', 'us_f', 'David, why are twenty boxes of winter wool gloves still sitting on Reception Floor One instead of Shelf Nine?'],
      ['Man', 'ca_m', 'Wait—Inventory scanners flagged mismatched color labels on those cartons! Nearly half are tagged Slate Blue outside while actually holding Olive Green inside!'],
      ['Woman', 'us_f', 'Good thing scanners caught that before holiday shoppers placed online orders! Should I print clean Olive Green sticker sheets for Stockroom Crew right now?'],
      ['Man', 'ca_m', 'Yes please! Drop fifty sheets by Table Two so we re-tag cartons accurately before five P.M. truck loading.'],
    ], null, [
      ['Part 3 · Problem', 'Why haven’t the glove cartons been moved onto Shelf Nine yet?', ['Outer box stickers showed the wrong merchandise color', 'Truck loading at five P.M. blocked Reception Floor One', 'Inventory barcode scanners ran low on battery', 'Holiday shoppers purchased half the wool stock early'], 0, 'ตอบ Outer box stickers showed the wrong merchandise color (สติกเกอร์ข้างกล่องเขียนสี Slate Blue ทั้งที่ข้างในเป็น Olive Green)'],
      ['Part 3 · Detail', 'How was the labeling discrepancy spotted?', ['Automated inventory scanning flagged the mismatch', 'Online customers returned green wool pairs by post', 'Reception clerks opened cartons searching for winter hats', 'Shipping truck drivers reported uneven carton weights'], 0, 'ตอบ Automated inventory scanning flagged the mismatch (เครื่องสแกนสินค้าตรวจพบข้อมูลสีไม่ตรงกัน)'],
      ['Part 3 · Action', 'What will the woman do right away?', ['Print corrected color stickers for the stockroom crew', 'Transfer fifty cartons into Shelf Nine bins personally', 'Cancel online winter glove orders before noon', 'Load unlabeled boxes onto delivery trucks'], 0, 'ตอบ Print corrected color stickers for the stockroom crew (พิมพ์แผ่นสติกเกอร์สี Olive Green ใหม่ 50 แผ่นให้ทีมคลังแปะแก้ก่อนรถออกห้าโมงเย็น)'],
    ]),

    p3(3, 'l3-p3-2', [
      ['Man', 'uk_m', 'Hi! Can I enroll my daughter in the Saturday Morning Ceramics Workshop starting next weekend?'],
      ['Woman', 'au_f', 'Let’s check—ah, our nine-thirty beginner wheel slot actually filled up cleanly yesterday afternoon! Still, two open wheels remain inside our one P.M. Afternoon Pottery class taught by Master Sara Lin!'],
      ['Man', 'uk_m', 'One P.M. works great for us! Does tuition cover clay bags and kiln glaze firing fees altogether?'],
      ['Woman', 'au_f', 'Wait—your eighty-five-dollar fee covers clay and two shared bisque firings cleanly; bring only an old cotton kitchen apron on Day One!'],
    ], null, [
      ['Part 3 · Problem', 'Why can’t the man’s daughter attend the 9:30 A.M. class?', ['All seats for the morning session were booked yesterday', 'Beginner wheel equipment broke during Friday glazing', 'Master Sara Lin teaches exclusively on Friday nights', 'Afternoon classes replaced every Saturday morning slot'], 0, 'ตอบ All seats for the morning session were booked yesterday (รอบ 9:30 น. เต็มหมดแล้วตั้งแต่เมื่อวานบ่าย)'],
      ['Part 3 · Detail', 'Which class option has available spots?', ['The 1:00 P.M. afternoon class', 'The Friday night kiln workshop', 'Next Sunday morning beginner wheels', 'A private weekday pottery session'], 0, 'ตอบ The 1:00 P.M. afternoon class (รอบบ่าย 13:00 น. ยังว่างอยู่ 2 ที่)'],
      ['Part 3 · Requirement', 'What personal item must the student bring from home?', ['A casual apron to protect clothes', 'Twenty kilograms of pottery wheel clay', 'Individual kiln firing brush kits', 'Written parent workshop vouchers'], 0, 'ตอบ A casual apron to protect clothes (ค่าเรียนรวมดินและค่าเผาแล้ว ให้เตรียมแค่ผ้ากันเปื้อนเก่าๆ มาจากบ้านวันแรก)'],
    ]),

    p3(3, 'l3-p3-3', [
      ['Man', 'us_m2', 'Elena, did City Press send final galley proofs for our annual Harbor Architectural Awards booklet?'],
      ['Woman', 'ca_f', 'They emailed PDF pages cleanly before nine A.M., though look closely at Page 14—they swapped the photo caption for Oak Bridge Library with Riverside Boathouse!'],
      ['Man', 'us_m2', 'Ouch! Good catch before presses rolled! Call account rep Trevor now while I annotate sticky notes cleanly on Page 14!'],
      ['Woman', 'ca_f', 'Calling Trevor right now—he guaranteed zero extra setup cost if caption edits arrive prior to noon!'],
    ], null, [
      ['Part 3 · Problem', 'What error did the woman catch on Page 14 of the booklet?', ['Photo descriptions beneath two architectural buildings were switched', 'City Press printed black-and-white charts instead of full color', 'Page numbers disappeared cleanly across Page 14 margins', 'Award recipient names were spelled inaccurately on Page 1'], 0, 'ตอบ Photo descriptions beneath two architectural buildings were switched (คำบรรยายใต้ภาพของอาคารสองแห่งถูกใส่สลับกัน)'],
      ['Part 3 · Action', 'What is the man going to do next?', ['Mark correction notes on Page 14 of the digital proof', 'Drive physical sketches directly down to City Press', 'Email winning architects postponing Friday’s ceremony', 'Redesign the Riverside Boathouse cover image'], 0, 'ตอบ Mark correction notes on Page 14 of the digital proof (ผู้ชายจะเขียนโน้ตแก้ลงใน PDF หน้า 14)'],
      ['Part 3 · Timing', 'Why must they contact Trevor before noon?', ['To qualify for free pre-press correction edits', 'Because printing staff attend lunch breaks from noon to three', 'Architectural Awards booklets ship out cleanly at noon', 'PDF email servers shut off cleanly midday'], 0, 'ตอบ To qualify for free pre-press correction edits (ตัวแทนรับรองว่าแก้ฟรีหากแจ้งก่อนเที่ยงวัน)'],
    ]),

    p3(3, 'l3-p3-4', [
      ['Woman', 'uk_f', 'Good morning! Welcome to WestRail Station—may I help look up a regional express ticket?'],
      ['Man', 'us_m', 'Yes please! My phone battery died on the commuter tram, and I booked an eight-forty A.M. e-ticket to Newark under Leo Diaz without printing paper backup!'],
      ['Woman', 'uk_f', 'Zero worries, Mr. Diaz! Show me a photo ID right here—I can reprint your bar-coded boarding slip at Desk One in seconds, plus there’s a USB charging tower beside Platform C benches!'],
      ['Man', 'us_m', 'Whew—what a relief! Here’s my driver’s license. Also, did Platform 3 stay unchanged for eight-forty Newark trains?'],
      ['Woman', 'uk_f', 'Actually, Platform 3 has freight checks today, so watch the board: your Newark Express leaves Platform 5 across the footbridge!'],
    ], null, [
      ['Part 3 · Problem', 'Why did Leo Diaz need assistance at WestRail Station?', ['His dead phone battery blocked viewing his digital rail ticket', 'He missed the 8:40 A.M. Newark train due to tram traffic', 'Drivers license photos failed automatic kiosk scans', 'Paper boarding passes jammed Platform C ticket readers'], 0, 'ตอบ His dead phone battery blocked viewing his digital rail ticket (แบตฯ มือถือหมดเลยเปิดตั๋วอิเล็กทรอนิกส์ไม่ได้)'],
      ['Part 3 · Requirement', 'What did the station agent ask to verify before reprinting the ticket?', ['Official photographic identification', 'Confirmation digits memorized from email receipts', 'Bank credit cards used during ticket booking', 'Dead phone cables wrapped beside Platform C'], 0, 'ตอบ Official photographic identification (ขอดูบัตรประจำตัวที่มีรูปถ่ายเพื่อพิมพ์ตั๋วกระดาษให้ใหม่)'],
      ['Part 3 · Change', 'From which platform does the 8:40 A.M. Newark train depart today?', ['Platform 5', 'Platform 3', 'Platform C', 'Desk 1'], 0, 'ตอบ Platform 5 (วันนี้ชานชาลา 3 ปิดตรวจขบวนสินค้า รถด่วนไปนวร์กย้ายไปออกที่ Platform 5)'],
    ]),

    p3(3, 'l3-p3-5', [
      ['Woman1', 'us_f2', 'Raj, thanks for running electrical diagnostics on Cafeteria Espresso Brewer Number Two cleanly yesterday evening!'],
      ['Man', 'au_m', 'Happy to help—turns out corroded copper water valves dropped steam wand pressure sharply, so I scrubbed the intake solenoid and swapped fresh silicone seals.'],
      ['Woman2', 'uk_f', 'Does that mean morning cafe staff can pull flat whites from both spouts again starting at seven A.M.?'],
      ['Man', 'au_m', 'Even better—I ran six test shots at sixty degrees before locking up! Only skip pouring cold tap water directly atop brass gauge covers during closing rinse!'],
    ], null, [
      ['Part 3 · Cause', 'What caused espresso steam pressure to weaken earlier?', ['Mineral buildup inside copper water valves choked intake flow', 'Evening closing cleaning left electrical switches wet', 'Silicone seals melted cleanly at sixty degrees', 'Second spouts broke completely during morning crowds'], 0, 'ตอบ Mineral buildup inside copper water valves choked intake flow (วาล์วน้ำทองแดงเกิดคราบตะกรันอุดตันทำให้แรงดันไอน้ำตก)'],
      ['Part 3 · Detail', 'How do the speakers confirm the repair succeeded?', ['The technician pulled six test espresso servings successfully', 'Morning baristas finished opening shifts twenty minutes early', 'Water utility sensors showed rising pressure cleanly outside', 'Replacement spouts arrived overnight from manufacturer stocks'], 0, 'ตอบ The technician pulled six test espresso servings successfully (ช่างทดสอบชงไปแล้ว 6 ช็อตเรียบร้อยก่อนล็อกร้าน)'],
      ['Part 3 · Advice', 'What care warning does Raj give the cafe team?', ['Avoid splashing rinse water directly onto top brass meters', 'Keep steam wands wrapped in cold cloths all morning', 'Clean copper intake solenoids hourly before seven A.M.', 'Run flat white boilers strictly under forty degrees'], 0, 'ตอบ Avoid splashing rinse water directly onto top brass meters (เตือนว่าตอนล้างปิดร้านอย่าเอาน้ำก๊อกราดลงบนฝาเกจวัดทองเหลืองโดยตรง)'],
    ]),

    p3(3, 'l3-p3-6', [
      ['Man', 'ca_m', 'Hey Hannah, look closely at our quarterly Software Subscription renewal email—our vendor bumped monthly seats from fifteen dollars up to twenty-two starting July 1!'],
      ['Woman', 'us_f', 'Whoa—that adds forty percent across two hundred staff licenses! Did we even check whether all two hundred accounts logged in over the past ninety days?'],
      ['Man', 'ca_m', 'Wait—pulling usage CSV logs right now! Look: forty-six inactive intern and former contractor licenses haven’t opened the tool since winter!'],
      ['Woman', 'us_f', 'Perfect timing before July 1! Let’s prune those forty-six idle seats today so our annual invoice actually drops rather than climbs!'],
    ], null, [
      ['Part 3 · Reason', 'Why did the software subscription renewal alarm the speakers?', ['Vendor per-seat rates are scheduled to rise significantly on July 1', 'Two hundred new engineers require immediate enterprise upgrades', 'Former contractors locked active company licensing dashboards', 'Software spreadsheets stopped logging monthly user counts cleanly'], 0, 'ตอบ Vendor per-seat rates are scheduled to rise significantly on July 1 (ผู้ขายขึ้นค่ารายเดือนต่อที่นั่งจาก $15 เป็น $22 เริ่ม 1 ก.ค.)'],
      ['Part 3 · Discovery', 'What did reviewing recent ninety-day login logs reveal?', ['Nearly a quarter of active seats belonged to inactive users', 'Employees shared login passes cleanly across teams', 'Usage dropped sharply after winter holidays across Accounting', 'Vendor billing accidentally duplicated two hundred annual invoices'], 0, 'ตอบ Nearly a quarter of active seats belonged to inactive users (พบบัญชีไม่ได้ใช้งาน 46 บัญชีจากเด็กฝึกงาน/สัญญาจ้างเก่าที่ไม่ได้ใช้มาตั้งแต่หน้าหนาว)'],
      ['Part 3 · Decision', 'What will the speakers do before the July 1 rate hike takes effect?', ['Cancel the forty-six unused seats to trim total cost', 'Negotiate fifteen-dollar per-user pricing through Accounting', 'Archive winter spreadsheets onto internal HR folders', 'Upgrade all remaining staff cleanly onto annual plans'], 0, 'ตอบ Cancel the forty-six unused seats to trim total cost (ตัด 46 บัญชีร้างทิ้งวันนี้ เพื่อให้ยอดบิลรวมลดลงแทนที่จะเพิ่มขึ้น)'],
    ]),

    p3(3, 'l3-p3-7', [
      ['Woman', 'au_f', 'Welcome to Civic Audio & Acoustics! Looking to dampen street bus noise leaking into a home office window?'],
      ['Man', 'us_m', 'Exactly—my apartment faces Fourth Avenue where delivery trucks rumble past starting cleanly at five A.M.! Acoustic foam wedges helped slightly on bare walls, yet low bass rumble still vibrates straight through thin window glass!'],
      ['Woman', 'au_f', 'Ah! Lightweight foam absorbs high echoes, NOT heavy low bass street rumbles! You’ll want heavy multi-layer Acoustic Velvet Curtains hung across a wrap-around ceiling track cleanly past both window frames.'],
      ['Man', 'us_m', 'That looks smart! Can your shop hem panels specifically to match my ninety-six-inch ceiling height?'],
      ['Woman', 'au_f', 'Sure—custom hemming runs free on orders over two hundred dollars, finishing cleanly within five business days!'],
    ], null, [
      ['Part 3 · Purpose', 'Why is the customer visiting the acoustics store?', ['To block early-morning truck traffic noise entering his home office', 'To return lightweight adhesive foam panels that peeled off plaster', 'To buy ceiling track brackets for bedroom blackout shades', 'To soundproof an indoor music podcast booth cleanly'], 0, 'ตอบ To block early-morning truck traffic noise entering his home office (ต้องการกันเสียงรถบรรทุกตอนเช้ามืดหน้าอพาร์ตเมนต์ที่สั่นผ่านกระจกเข้ามา)'],
      ['Part 3 · Advice', 'Why did acoustic foam fail to stop the truck noise completely?', ['Lightweight foam targets indoor echo rather than heavy window traffic vibrations', 'Foam panels require ninety-six-inch ceiling wrap-around mounts', 'Fourth Avenue humidity soaked thin acoustic foam backing glue', 'Window glass frames blocked sound waves smoothly inside walls'], 0, 'ตอบ Lightweight foam targets indoor echo rather than heavy window traffic vibrations (ฟองน้ำลดเฉพาะเสียงก้องความถี่สูง ไม่กันเสียงเบสต่ำจากกระจก จึงต้องใช้ม่านกำมะหยี่เก็บเสียงหนาหลายชั้น)'],
      ['Part 3 · Benefit', 'What complimentary service can the man receive on a $200+ curtain purchase?', ['Custom length tailoring finished in five business days', 'On-site ceiling track drilling and weekend hanging', 'Two extra foam panels cleanly boxed inside pickups', 'Free sound decibel meter rentals across Fourth Avenue'], 0, 'ตอบ Custom length tailoring finished in five business days (บริการเย็บปรับความยาวฟรีเมื่อซื้อครบ $200 ขึ้นไป เสร็จใน 5 วันทำการ)'],
    ]),

    p3(3, 'l3-p3-8', [
      ['Man', 'uk_m', 'Paula, remember Municipal Health Inspector Kim tours our Community Kitchen Incubator this Thursday morning at nine A.M.!'],
      ['Woman', 'us_f2', 'Everything stays sanitized daily, yet wait—did baking tenants finally label all clear sugar and flour bins underneath Dry Storage Shelf Two?'],
      ['Man', 'uk_m', 'Not yet! Seven clear plastic tubs still carry zero ingredient or expiry date tags! Also, Floor Drain Cover C near the dish pit sits slightly loose after plumbers snaked pipes Tuesday.'],
      ['Woman', 'us_f2', 'Yikes! Let’s solve both tonight: email tenants now that unlabeled tubs get tossed at seven A.M., while Maintenance bolts Drain Cover C down cleanly before five!'],
    ], null, [
      ['Part 3 · Event', 'What takes place Thursday morning at 9:00 A.M.?', ['An official municipal sanitation inspection of the shared kitchen', 'Plumbing pipe repairs along Dish Pit Floor Drain C', 'Cooking classes led by Community Kitchen incubator bakers', 'Weekly dry ingredient bulk stock deliveries'], 0, 'ตอบ An official municipal sanitation inspection of the shared kitchen (เจ้าหน้าที่สุขาภิบาลเมืองมาตรวจความสะอาดวันพฤหัสฯ 09:00 น.)'],
      ['Part 3 · Problem', 'What issue was discovered on Dry Storage Shelf Two?', ['Clear flour and sugar tubs lacked ingredient and date labels', 'Seven plastic storage tubs showed minor rim cracks', 'Maintenance crews removed heavy dish pit drainage plates', 'Dry baking shelves sat damp after Tuesday pipe flushing'], 0, 'ตอบ Clear flour and sugar tubs lacked ingredient and date labels (ถังพลาสติกใส 7 ใบยังไม่ติดป้ายชื่อวัตถุดิบและวันหมดอายุ)'],
      ['Part 3 · Action', 'Who will tighten the loose Floor Drain Cover C before 5:00 P.M.?', ['Building Maintenance staff', 'Community baking tenants', 'Municipal Health Inspector Kim', 'Sanitation delivery contractors'], 0, 'ตอบ Building Maintenance staff (ให้ฝ่ายซ่อมบำรุง Maintenance ขันยึดฝาท่อระบายน้ำให้แน่นก่อนห้าโมงเย็น)'],
    ]),

    p3(3, 'l3-p3-9', [
      ['Woman', 'ca_f', 'Hi Ben, our summer campus bike-share maintenance logs show Front Gear Cable wear spiked unusually high on Harbor Dock stations!'],
      ['Man', 'us_m2', 'Salty mist blowing straight off Harbor Pier rusts standard bare steel gear wires in six weeks! Did we test stainless PTFE-coated replacement cables on Bikes 40 through 50 last month?'],
      ['Woman', 'ca_f', 'Just checked those ten test bikes yesterday—zero sticky rust stiffness even after four weeks parked facing ocean spray!'],
      ['Man', 'us_m2', 'Wait—stainless PTFE runs three dollars more per cable, yet replacing rusted wires every six weeks cost triple! Let’s order two hundred coated spools for every dockside station immediately!'],
    ], null, [
      ['Part 3 · Cause', 'Why were standard bicycle gear cables failing rapidly near Harbor Dock?', ['Salty ocean wind accelerated rusting on bare steel wires', 'Summer riders shifted front gears clumsily up steep hills', 'Bike-share repair racks lacked proper cable tension lubrication', 'Test bikes 40 through 50 carried extra cargo basket weight'], 0, 'ตอบ Salty ocean wind accelerated rusting on bare steel wires (ละอองไอเกลือจากท่าเรือทำให้สายเกียร์เหล็กธรรมดาขึ้นสนิมใน 6 สัปดาห์)'],
      ['Part 3 · Result', 'How did test bikes fitted with PTFE-coated stainless cables perform?', ['All ten bikes operated smoothly without rust buildup', 'Three units required extra lubrication after four ocean weeks', 'Costs stayed identical to bare steel harbor wires', 'Harbor Dock usage fell slightly during misty mornings'], 0, 'ตอบ All ten bikes operated smoothly without rust buildup (ทดสอบ 10 คันครบ 4 สัปดาห์แล้วยังลื่นไม่มีสนิมเกาะเลย)'],
      ['Part 3 · Reasoning', 'Why did Ben approve spending $3 more per coated cable?', ['Avoiding frequent replacement swaps saves money over time', 'Budget surpluses from summer memberships require spending now', 'Municipal coastal rules forbid uncoated harbor steel wires', 'PTFE spools install twice as fast inside dock workshops'], 0, 'ตอบ Avoiding frequent replacement swaps saves money over time (คุ้มกว่าการเปลี่ยนสายที่ขึ้นสนิมบ่อยๆ ทุก 6 สัปดาห์ซึ่งเสียค่าใช้จ่ายสูงกว่าถึงสามเท่า)'],
    ]),

    p3(3, 'l3-p3-10', [
      ['Man', 'au_m', 'Wait—our autumn Customer Webinar starts in twelve minutes, yet Guest Panelist Dr. Diaz still hasn’t clicked onto the Studio Backstage soundcheck link!'],
      ['Woman', 'uk_f', 'Look at her email reply just now—she’s driving past construction outside Metro West and calling in from her car Bluetooth, yet forgot her Studio Presenter PIN code!'],
      ['Man', 'au_m', 'Let’s text her mobile phone direct backup PIN 4819 right now, AND tell Moderator Claire to cover our first ten minutes of Q3 product slides solo smoothly so callers don’t sit in silence!'],
      ['Woman', 'uk_f', 'Texting PIN 4819 cleanly now and tapping Claire in Studio Chat!'],
    ], null, [
      ['Part 3 · Problem', 'Why hasn’t Dr. Diaz joined the webinar audio check yet?', ['She is stuck in traffic without her presenter login PIN', 'Audio headsets inside Studio Backstage lost Bluetooth sync', 'Moderator Claire shifted the Q3 presentation forward early', 'Email invitations failed to carry valid webinar calendar URLs'], 0, 'ตอบ She is stuck in traffic without her presenter login PIN (รถติดงานก่อสร้างแถว Metro West และลืมรหัส PIN สำหรับเข้าโหมดผู้บรรยาย)'],
      ['Part 3 · Action', 'How will the man help prevent dead air at the start of the webinar?', ['Asking Moderator Claire to open with ten minutes of product slides', 'Postponing the live autumn broadcast by fifteen minutes', 'Playing prerecorded summer webinar audio over phone lines', 'Reading Dr. Diaz’s research biography aloud solo'], 0, 'ตอบ Asking Moderator Claire to open with ten minutes of product slides (ให้พิธีกร Claire นำเสนอสไลด์สินค้า 10 นาทีแรกก่อนเพื่อไม่ให้ผู้ชมรอเงียบๆ)'],
      ['Part 3 · Detail', 'How will the woman send PIN 4819 to Dr. Diaz?', ['By text message to her mobile phone', 'Via an automated calendar confirmation email', 'Inside the public webinar chat sidebar', 'Through her Metro West office assistant'], 0, 'ตอบ By text message to her mobile phone (ส่ง SMS ข้อความตรงเข้ามือถือของ Dr. Diaz)'],
    ]),

    // Set 3 Part 3 Graphics (Convs 11, 12, 13)
    p3(3, 'l3-p3-11', [
      ['Woman', 'us_f', 'Ben, look at this Office Renovation Floor Plan Matrix before movers place Floor Four archive safes Tuesday morning!'],
      ['Man', 'ca_m', 'Sure—where does that heavy cast-iron Patent Vault go? Notice the Southeast Window Lounge sits atop lightweight open-span floor joists rated solely for light armchairs!'],
      ['Woman', 'us_f', 'Whoa, thank goodness we checked the Load Capacity column! Look strictly for Reinforced Concrete Slab framing capable of two thousand kilograms per square meter—ah, Zone B North Core fits cleanly right beside the freight shaft!'],
      ['Man', 'ca_m', 'Lock Zone B cleanly on the movers’ clipboard today so nobody wheels a half-ton vault onto wooden beams!'],
    ], doc('table', 'Office Tower Floor 4 — Structural Floor Load Limits', null, [
      tbl(
        ['Floor 4 Zone', 'Location', 'Structural Slab Type', 'Rated Max Load'],
        [
          ['Zone A · West Window Bay', 'Facing Main Plaza', 'Lightweight Wood Truss', '350 kg / sq m'],
          ['Zone B · North Elevator Core', 'Beside Freight Lift', 'Reinforced Concrete Slab', '2,200 kg / sq m'],
          ['Zone C · Southeast Lounge', 'Corner Glass Bay', 'Open-Span Steel Joist', '450 kg / sq m'],
          ['Zone D · East Mezzanine', 'Over Lobby Entry', 'Suspended Glass Frame', '250 kg / sq m'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. In which Floor 4 zone will movers place the heavy cast-iron Patent Vault?', ['Zone B · North Elevator Core', 'Zone C · Southeast Lounge', 'Zone A · West Window Bay', 'Zone D · East Mezzanine'], 0, 'ตอบ Zone B · North Elevator Core (ตารางระบุว่า Zone B เป็นพื้นคอนกรีตเสริมเหล็กที่รับน้ำหนักได้สูงถึง 2,200 kg/sq m ตามเกณฑ์ 2,000+ กก.)'],
      ['Part 3 · Reason', 'Why could the vault NOT sit inside the Southeast Corner Glass Bay?', ['Open-span floor joists there support at most 450 kilograms per square meter', 'Door widths beside freight lifts prohibit turning heavy metal wheels', 'Glass window sunlight damages paper patent folders', 'Lightweight armchairs occupy every corner wall space'], 0, 'ตอบ Open-span floor joists there support at most 450 kilograms per square meter (โครงพื้นโซน C รับน้ำหนักได้แค่ 450 kg/sq m สำหรับชุดเก้าอี้เบาเท่านั้น)'],
      ['Part 3 · Timing', 'When are movers scheduled to transport the safe upstairs?', ['Tuesday morning', 'This afternoon cleanly before five', 'Next Friday midday', 'Immediately after structural testing'], 0, 'ตอบ Tuesday morning (คนขนย้ายจะนำตู้เซฟขึ้นชั้น 4 เช้าวันอังคาร)'],
    ]),

    p3(3, 'l3-p3-12', [
      ['Man', 'uk_m', 'Welcome to RiverWalk Bike Rentals! Checking out a weekend cruiser for today’s sunny Greenway Ride?'],
      ['Woman', 'au_f', 'Hi! Actually, look at your Rental Rate Menu—me and my two sisters are all teachers carrying school ID badges! Do all three of us qualify for that group discount tier on electric pedal-assist bikes?'],
      ['Man', 'uk_m', 'Yes indeed! Look closely at the bottom rule: Educator Badges save twenty percent cleanly off ANY regular rental—AND booking three bicycles together gives one helmet camera mount free!'],
      ['Woman', 'au_f', 'Sweet! Let’s grab three Half-Day E-Cruisers right now—so that’s forty dollars minus twenty percent educator savings per bike!'],
    ], doc('table', 'RiverWalk Bike Rentals — Rate & Discount Schedule', null, [
      tbl(
        ['Bike Tier', '2-Hour Quick Loop', 'Half-Day (4 Hours)', 'Full Day (Close by 7 P.M.)'],
        [
          ['Classic City Cruiser', '$14', '$24', '$36'],
          ['E-Assist Greenway Cruiser', '$24', '$40', '$58'],
          ['Tandem 2-Rider Bike', '$28', '$48', '$66'],
        ]
      ),
      lst([
        'Educator / Student Discount: 20% Off Standard Rental Rates with Valid ID Badge.',
        'Group Perk (3+ Bikes): Free Handlebar Helmet Camera Mount Included.',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. After applying the 20% educator discount, how much does EACH Half-Day E-Assist Cruiser cost?', ['$32 per bike', '$40 per bike', '$24 per bike', '$19.20 per bike'], 0, 'ตอบ $32 per bike (ค่าเช่า Half-Day E-Assist ปกติ $40 ลด 20% สำหรับครู = $40 × 0.8 = $32 ต่อคัน)'],
      ['Part 3 · Math', 'Calculate the combined TOTAL bill for ALL three Half-Day E-Assist Cruisers after the 20% discount:', ['$96 total', '$120 total', '$72 total', '$144 total'], 0, 'ตอบ $96 total (3 คัน × $32 = $96)'],
      ['Part 3 · Benefit', 'What complimentary extra will the three sisters receive together?', ['A camera mount for handlebars or helmets', 'Two extra free riding hours until seven P.M.', 'A free Tandem 2-Rider trial upgrade', 'Free padded leather pannier cargo bags'], 0, 'ตอบ A camera mount for handlebars or helmets (กติกา Group Perk 3+ คัน แถมขายึดกล้องฟรี 1 ชุด)'],
    ]),

    p3(3, 'l3-p3-13', [
      ['Woman', 'us_f2', 'Wait—look at tomorrow’s Trade Expo Schedule Card before finalizing catering coffee trays! Notice our Keynote AI Ethics Talk at Ten-Fifteen A.M. just swapped rooms?'],
      ['Man', 'us_m2', 'Hold on—checking Facilities email right now! Yes! Nearly three hundred people tapped Register on the mobile app, bursting Oak Classroom C’s hundred-seat capacity cleanly—so Facilities bumped our Ten-Fifteen session over into Grand Pavilion Two!'],
      ['Woman', 'us_f2', 'Aha! Good thing I caught that BEFORE wheeling three urns of hot coffee down the wrong hallway! Let’s redirect morning pastry tables right outside Grand Pavilion Two at nine-thirty instead!'],
      ['Man', 'us_m2', 'Wait—text Caterer Sam that new room name immediately so urns arrive outside Pavilion Two on time!'],
    ], doc('table', 'Pacific Tech Expo — Morning Session Directory', null, [
      tbl(
        ['Start Time', 'Session Topic', 'Assigned Room', 'Room Seat Limit'],
        [
          ['9:00 A.M.', 'Opening Keynote: Cloud Costs', 'Grand Pavilion Two', '400 Seats'],
          ['10:15 A.M.', 'Panel: Applied AI Ethics', 'Oak Classroom C', '100 Seats'],
          ['11:30 A.M.', 'Hardware Supply Workshop', 'Cedar Room A', '120 Seats'],
          ['1:00 P.M.', 'Customer Case Showcase', 'Maple Hall B', '200 Seats'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which scheduled session outgrew its original 100-seat classroom?', ['10:15 A.M. · Panel: Applied AI Ethics', '9:00 A.M. · Opening Keynote: Cloud Costs', '11:30 A.M. · Hardware Supply Workshop', '1:00 P.M. · Customer Case Showcase'], 0, 'ตอบ 10:15 A.M. · Panel: Applied AI Ethics (ในตารางห้อง Oak Classroom C จุได้แค่ 100 ที่นั่ง แต่ยอดจองพุ่งเกือบ 300 คนเลยย้ายไป Grand Pavilion Two)'],
      ['Part 3 · Detail', 'Where should Caterer Sam bring coffee urns and morning pastries at 9:30 A.M.?', ['Outside Grand Pavilion Two', 'Inside Oak Classroom C', 'Down Cedar Room A corridor', 'Beside Maple Hall B stairs'], 0, 'ตอบ Outside Grand Pavilion Two (ผู้หญิงสรุปให้นำกาแฟและขนมอบไปตั้งหน้าห้อง Grand Pavilion Two แทนตอน 09:30 น.)'],
      ['Part 3 · Detail', 'How many people signed up to attend the 10:15 A.M. panel?', ['Nearly three hundred attendees', 'One hundred attendees', 'Four hundred attendees', 'One hundred twenty attendees'], 0, 'ตอบ Nearly three hundred attendees (ผู้ชายระบุว่าคนกดลงทะเบียนผ่านแอปเกือบ 300 คน)'],
    ]),

    // Set 3 Part 4 (10 Talks)
    p4(3, 'l3-p4-1', 'Customer Voicemail — Auto Dealership Service', 'us_m',
      'Good afternoon, Ms. Brooks—this is Ben calling from Summit Motors Service Department regarding your blue hybrid hatchback dropped off this morning for its thirty-thousand-mile inspection. Great news: your hybrid battery cooling fans, synthetic oil levels, and brake pads all scored excellent cleanly! However, while rotating wheels across axles, mechanics spotted a small galvanized nail embedded straight inside your rear passenger-side tire tread! Because the nail missed side walls completely, patching and sealing it safely adds just twenty-eight dollars instead of buying an entire new tire. Call Extension 214 before four P.M. to give us the green light!',
      null, [
        ['Part 4 · Purpose', 'Why did Ben leave this telephone message for Ms. Brooks?', ['To request permission to patch a punctured tire spotted during inspection', 'To notify her that her vehicle battery needs costly replacement', 'To ask her to pick up her hatchback before afternoon closing', 'To reschedule her thirty-thousand-mile inspection cleanly'], 0, 'ตอบ To request permission to patch a punctured tire spotted during inspection (แจ้งว่าพบตะปูตำยางล้อหลังด้านผู้โดยสาร จึงขออนุมัติปะซ่อมราคา $28)'],
        ['Part 4 · Detail', 'Why is buying a completely new tire unnecessary in this case?', ['The nail punctured cleanly away from vulnerable tire sidewalls', 'Summit Motors honors free thirty-thousand-mile tire warranties', 'Front brake pads cushioned impact along highway roads', 'Synthetic sealants came included inside original inspection fees'], 0, 'ตอบ The nail punctured cleanly away from vulnerable tire sidewalls (ตะปูไม่โดนแก้มยางด้านข้าง จึงปะซ่อมได้ปลอดภัยโดยไม่ต้องเปลี่ยนเส้นใหม่)'],
        ['Part 4 · Action', 'What should Ms. Brooks do before 4:00 P.M.?', ['Phone Extension 214 to authorize the $28 repair', 'Drop by Summit Motors Desk A in person cleanly', 'Order two spare hybrid tires through dealership websites', 'Sign vehicle inspection release sheets tomorrow morning'], 0, 'ตอบ Phone Extension 214 to authorize the $28 repair (โทรกลับเบอร์ต่อ 214 ก่อน 16:00 น. เพื่อยืนยันให้ช่างดำเนินการ)'],
      ]),

    p4(3, 'l3-p4-2', 'Department Store Announcement', 'au_f',
      'Attention, shoppers in MeadowMart Home & Living! Looking for crisp Egyptian cotton bedsheets or woven bathroom towels before autumn weather arrives? Over in Home Textiles Aisle Seven—right beside Bedding Clearance Tables—store staff are demonstrating our new lightweight Bamboo-Blend Waffle Bath Robes all afternoon! Plus, shoppers holding red MeadowMart Loyalty Keytags save an instant fifteen dollars off any textile purchase totaling seventy-five dollars or more today until closing at nine P.M.! Don’t forget gift wrapping comes completely free upstairs at Mezzanine Counter B.',
      null, [
        ['Part 4 · Location', 'Where are live bathrobe product demonstrations happening this afternoon?', ['In Home Textiles Aisle Seven', 'Beside Mezzanine Gift Counter B', 'Near Main Entrance cash registers', 'Across Supermarket Produce Aisle One'], 0, 'ตอบ In Home Textiles Aisle Seven (สาธิตการใช้ชุดคลุมอาบน้ำผ้าใยไผ่ที่โซนสิ่งทอ Aisle Seven)'],
        ['Part 4 · Detail', 'How do shoppers qualify for the $15 instant textile savings today?', ['By scanning a MeadowMart Loyalty Keytag on $75+ textile purchases', 'By buying matching bath robes alongside cotton sheet packages', 'By requesting weekend clearance coupons at Mezzanine Counter B', 'By signing up for complimentary gift-wrapping notices'], 0, 'ตอบ By scanning a MeadowMart Loyalty Keytag on $75+ textile purchases (แสดงป้ายสมาชิกสีแดงเมื่อซื้อสิ่งทอครบ $75 ขึ้นไป รับส่วนลด $15 ทันที)'],
        ['Part 4 · Benefit', 'What complimentary service is offered at Mezzanine Counter B?', ['Present wrapping for store purchases', 'Custom embroidery monogram initials', 'Home delivery scheduling before nine P.M.', 'Loyalty card keytag reprints'], 0, 'ตอบ Present wrapping for store purchases (บริการห่อของขวัญฟรีที่ชั้นลอย Mezzanine Counter B)'],
      ]),

    p4(3, 'l3-p4-3', 'Guided Botanic Park Audio Welcome', 'uk_m',
      'Welcome to Riverbend Conservatory & Rainforest Dome! To help keep tropical orchid soil clean and our free-flying monarch butterflies undisturbed, leave open coffee cups inside cubby lockers beside West Lobby doors before entering humid glass rooms. Notice our winding Canopy Walkway Bridge climbs gently toward steel tree-top platforms twenty meters high—offering breathtaking panoramic views straight across flowering ferns! If anyone in your group prefers staying on flat paved ground, paved Lower Fern Paths lead cleanly around shaded koi ponds back out toward the main herb garden gift shop.',
      null, [
        ['Part 4 · Rule', 'What are visitors asked to store inside West Lobby cubby lockers?', ['Open beverage containers such as coffee cups', 'Handbag digital cameras and zoom binoculars', 'Warm winter jackets prior to humid glasshouse walks', 'Printed rainforest butterfly guidebooks'], 0, 'ตอบ Open beverage containers such as coffee cups (ต้องเก็บแก้วกาแฟแบบไม่มีฝาไว้ในล็อกเกอร์หน้าโถงตะวันตกก่อนเข้าโดม เพื่อดูแลดินกล้วยไม้และผีเสื้อ)'],
        ['Part 4 · Detail', 'What special vantage point does the Canopy Walkway Bridge offer?', ['Elevated panoramic treetop views twenty meters up', 'Close-up glass benches beside resting koi ponds', 'Shaded orchid soil misting displays below ground', 'Direct exits leading outside onto West Lobby lawns'], 0, 'ตอบ Elevated panoramic treetop views twenty meters up (ทางเดินลอยฟ้าสูง 20 เมตรชมวิวยอดไม้แบบพาโนรามา)'],
        ['Part 4 · Option', 'How does the conservatory accommodate guests wanting level walking routes?', ['Through flat paved Lower Fern Paths circling koi ponds', 'Using private glass elevators inside steel tree platforms', 'Providing audio virtual tours inside West Lobby shops', 'Opening ground-level shuttle carts along herb gardens'], 0, 'ตอบ Through flat paved Lower Fern Paths circling koi ponds (คนที่ไม่ขึ้นทางเดินสูงสามารถเดินตามทางเรียบ Lower Fern Paths วนรอบบ่อปลาคาร์ปได้)'],
      ]),

    p4(3, 'l3-p4-4', 'Business Conference Opening Remarks', 'us_f',
      'Good morning, hospitality leaders from across twelve states! Before our opening panel launches cleanly at nine-fifteen, two quick logistical items. First, heavy overnight wind knocked out one cellular tower near Market Street, making regular phone coverage slightly spotty indoors—so tap onto free Guest Conference Wi-Fi using passcode Harbor2025 displayed atop every printed name lanyard! Second, afternoon Design Thinking Breakout Groups shifted rooms: Finance Directors stay right here inside Grand Ballroom A, while Kitchen Operations Leads walk cleanly upstairs across the skybridge to Cedar Suite 302.',
      null, [
        ['Part 4 · Problem', 'Why might guests struggle to make standard mobile cellular calls inside the venue?', ['Overnight storm winds damaged a nearby cellular tower', 'Steel conference ballroom walls shield external phone signals', 'Venue management blocked voice calls during keynote speeches', 'Harbor2025 Wi-Fi routers interfered with Market Street masts'], 0, 'ตอบ Overnight storm winds damaged a nearby cellular tower (ลมแรงเมื่อคืนพัดเสาสัญญาณมือถือแถว Market Street เสียหาย)'],
        ['Part 4 · Detail', 'Where can conference attendees find the passcode for free Wi-Fi?', ['Printed near the top of their conference name badge lanyards', 'Displayed along Cedar Suite 302 skybridge screens', 'Inside email newsletters scheduled at 9:15 A.M.', 'Posted at registration front desks only'], 0, 'ตอบ Printed near the top of their conference name badge lanyards (รหัส Wi-Fi Harbor2025 พิมพ์ไว้ด้านบนสายคล้องป้ายชื่อทุกคนแล้ว)'],
        ['Part 4 · Instruction', 'Who should relocate upstairs across the skybridge for afternoon breakouts?', ['Kitchen Operations managers', 'Regional Finance Directors', 'Telecom infrastructure speakers', 'Unregistered morning walk-in visitors'], 0, 'ตอบ Kitchen Operations managers (กลุ่ม Finance อยู่ต่อที่ Grand Ballroom A ส่วนหัวหน้าฝ่าย Kitchen Operations ให้เดินข้ามสะพานเชื่อมไปห้อง Cedar Suite 302)'],
      ]),

    p4(3, 'l3-p4-5', 'Radio Community News Segment', 'ca_f',
      'You’re listening to MetroArts Radio! Exciting local news for weekend cycling families: starting next Saturday morning, Maple Street’s historic eight-mile river trail unveils brand-new solar LED bollard pathway lamps along every shady mile marker! Previously, winter commuters and late runners packed away pedals right around five P.M. once darkness settled across river bends. Thanks cleanly to a joint civic infrastructure grant, bright low-glare path lights stay illuminated until eleven P.M. year-round! Free bike safety bell giveaways celebrate opening dusk next Saturday outside Boathouse Plaza starting at four-thirty P.M.',
      null, [
        ['Part 4 · Improvement', 'What upgrade is launching next Saturday along the Maple Street river trail?', ['Solar-powered pathway lighting stretching eight miles', 'Widened paved jogging lanes beside Boathouse Plaza', 'Heated commuter rest shelters for winter cyclists', 'Electronic rental bicycle lock stations at every milepost'], 0, 'ตอบ Solar-powered pathway lighting stretching eight miles (ติดตั้งเสาไฟส่องสว่างพลังงานแสงอาทิตย์ตลอดเส้นทางจักรยาน 8 ไมล์)'],
        ['Part 4 · Benefit', 'How will the new installation affect evening commuters and runners?', ['People can safely continue riding and running outdoors up until 11:00 P.M.', 'Bicyclists no longer need reflectors or safety bells after five P.M.', 'Trail gates will remain open twenty-four hours every summer', 'Evening solar lamp brightness lowers city utility bills cleanly'], 0, 'ตอบ People can safely continue riding and running outdoors up until 11:00 P.M. (เปิดไฟยาวถึง 23:00 น. ตลอดปี ไม่ต้องหยุดออกกำลังกายตอนมืด 5 โมงเย็นอีกต่อไป)'],
        ['Part 4 · Detail', 'What free promotional item will volunteers hand out at Boathouse Plaza?', ['Safety bicycle bells', 'Rechargeable LED flashlights', 'Folded river trail maps', 'Hot autumn cider cups'], 0, 'ตอบ Safety bicycle bells (แจกกระดิ่งติดจักรยานฟรีเริ่ม 16:30 น. วันเสาร์หน้า)'],
      ]),

    p4(3, 'l3-p4-6', 'Sales Manager Weekly Team Coaching Call', 'us_m2',
      'Great hustle this week, regional medical supply reps! Our Q2 portable ultrasound demo bookings jumped twenty-four percent cleanly above quarterly goals! Still, reviewing your CRM pipeline entries last night, I caught one recurring pattern costing us quick deal sign-offs: clinic purchasing managers love our live hospital room demo yet stall afterward because hardware installation timelines sit buried on Page Nine of forty-page PDF contracts! Going forward, attach our brand-new One-Page Quick Setup Summary cleanly at Page One atop every client email—let’s watch signatures accelerate next month!',
      null, [
        ['Part 4 · Achievement', 'What sales milestone did the regional reps recently surpass?', ['Quarterly bookings for portable ultrasound product demos rose 24%', 'Contract signing turnarounds cut cleanly under twenty-four hours', 'Forty-page medical manuals won industry clarity awards', 'Purchasing managers expanded hospital supply budgets twice cleanly'], 0, 'ตอบ Quarterly bookings for portable ultrasound product demos rose 24% (ยอดจองเดโมเครื่องอัลตราซาวนด์พกพาไตรมาส 2 พุ่งสูงเกินเป้า 24%)'],
        ['Part 4 · Problem', 'Why have hospital clinic clients been delaying final contract signatures?', ['Delivery and setup timing schedules were hidden deep inside lengthy PDFs', 'Portable ultrasound units required extended shipping warehouse checks', 'Purchasing managers disliked watching live clinic room demonstrations', 'CRM pipeline software lost several client email replies last month'], 0, 'ตอบ Delivery and setup timing schedules were hidden deep inside lengthy PDFs (ตารางเวลาติดตั้งไปซ่อนอยู่หน้า 9 ในเอกสารสัญญา PDF ยาว 40 หน้าทำให้ลูกค้ารอช้า)'],
        ['Part 4 · Instruction', 'What change does the sales manager require immediately for client emails?', ['Placing a concise single-page setup overview right at the front', 'Replacing hospital room demos with thirty-second video previews', 'Eliminating detailed PDF installation contracts entirely cleanly', 'Sending follow-up reminder emails automatically every week'], 0, 'ตอบ Placing a concise single-page setup overview right at the front (ให้แนบสรุปหน้าเดียวเรื่องการติดตั้งไว้หน้าแรกสุดในอีเมลทุกฉบับ)'],
      ]),

    p4(3, 'l3-p4-7', 'Factory Floor Morning Huddle — Tool Calibration', 'uk_f',
      'Good morning Precision Optics Assembly! Quick reminder before CNC milling machines spin up cleanly today: weekly calibration checks logged slightly high vibration along Lathe Machine Four late Friday afternoon. Maintenance technician Marco already balanced its rotating collet spindle overnight and left green Certified Passed tags dangling beside Emergency Stop buttons! Just keep watch: if anyone hears subtle chatter while cutting aluminum housing rings this morning, pause feeds immediately and drop a quick flag card onto Supervisor Ben’s clipboard rather than forcing dull bits cleanly through parts.',
      null, [
        ['Part 4 · Problem', 'What maintenance issue occurred on Lathe Machine Four on Friday?', ['Weekly inspection detected excessive cutting vibration', 'Aluminum housing rings fractured rotating collet spindles', 'Emergency Stop tags went missing before closing time', 'Lubrication coolant dried cleanly inside CNC milling tanks'], 0, 'ตอบ Weekly inspection detected excessive cutting vibration (ตรวจพบการสั่นสะเทือนสูงผิดปกติบนเครื่องกลึง #4 เมื่อบ่ายวันศุกร์)'],
        ['Part 4 · Detail', 'How do machinists know Marco completed repairs cleanly overnight?', ['A green approval inspection tag hangs beside Emergency Stop buttons', 'Supervisor Ben emailed machine clearance spreadsheets earlier', 'Rotating collet spindles were swapped for brand-new silver housings', 'Audio alarms beep once upon pressing main power starts'], 0, 'ตอบ A green approval inspection tag hangs beside Emergency Stop buttons (ห้อยป้ายสีเขียว Certified Passed ไว้ข้างปุ่มหยุดฉุกเฉินแล้ว)'],
        ['Part 4 · Instruction', 'What should operators do immediately if they hear chattering while milling aluminum?', ['Stop feeding metal parts and note the issue on Supervisor Ben’s clipboard', 'Adjust collet spindle balance wrenches independently on shift', 'Finish running remaining housing rings before lunch breaks', 'Discard green calibration tags into Machine Four scrap bins'], 0, 'ตอบ Stop feeding metal parts and note the issue on Supervisor Ben’s clipboard (ให้หยุดป้อนชิ้นงานทันทีและแปะบัตรแจ้งบนคลิปบอร์ดของหัวหน้า Ben แทนการฝืนกลึงต่อ)'],
      ]),

    // Set 3 Part 4 Graphics (Talks 8, 9, 10)
    p4(3, 'l3-p4-8', 'Office Building Utility Maintenance Announcement', 'us_m',
      'Good morning tenants of WestGate Commerce Plaza! Please take a quick glance at the Weekend Building Service Calendar posted inside lobby monitors. Notice one critical room adjustment since printed flyers went up yesterday: Electrical Transformer Testing in Parking Level P2—originally spanning only Saturday morning—required ordering one extra high-voltage switch gasket, so Level P2 EV chargers stay turned OFF until Sunday noon cleanly! Meanwhile, Freight Lift #2 finishes cable tightening cleanly right on time Friday at five P.M., so Saturday furniture deliveries roll unhindered!',
      doc('table', 'WestGate Commerce Plaza — Weekend Utility Work Schedule', null, [
        tbl(
          ['Building System', 'Planned Service Window', 'Status Note', 'Tenant Impact'],
          [
            ['Main Freight Lift #2', 'Fri 9:00 A.M.–5:00 P.M.', 'Cable Tension Check', 'No heavy carts Friday daytime'],
            ['Parking Level P2 EV Chargers', 'Sat 7:00 A.M.–11:00 A.M.', 'Transformer Seal Swap', 'Stalls B1–B12 powered off'],
            ['Floor 6 Kitchen Hot Water', 'Sun 6:00 A.M.–9:00 A.M.', 'Valve Flush', 'Cold tap runs normally'],
            ['Lobby Rotating Entry Doors', 'Mon 6:00 A.M.–8:00 A.M.', 'Brush Weatherstrip', 'Use Side Patio Glass Doors'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which system maintenance window has been extended past Saturday morning?', ['Parking Level P2 EV Chargers', 'Main Freight Lift #2', 'Floor 6 Kitchen Hot Water', 'Lobby Rotating Entry Doors'], 0, 'ตอบ Parking Level P2 EV Chargers (ต้องรอปะเก็นสวิตช์เสริม ทำให้เครื่องชาร์จรถยนต์ไฟฟ้าชั้น P2 ปิดยาวไปจนถึงเที่ยงวันอาทิตย์แทนที่จะเสร็จสายวันเสาร์)'],
        ['Part 4 · Graphic', 'Look at the graphic. Why will Saturday morning office furniture movers experience zero freight elevator delays?', ['Freight Lift #2 service concludes on schedule Friday at 5:00 P.M.', 'Heavy furniture carts fit comfortably inside Lobby Rotating Entry Doors', 'Building utilities moved elevator checks onto Sunday morning', 'Parking Level P2 stalls clear automatically before Friday noon'], 0, 'ตอบ Freight Lift #2 service concludes on schedule Friday at 5:00 P.M. (ลิฟต์ขนของปรับสายเคเบิลเสร็จตรงเวลาเย็นวันศุกร์ 17:00 น. วันเสาร์จึงขนของได้ตามปกติ)'],
        ['Part 4 · Detail', 'Which entry route should early commuters use on Monday morning between 6:00 and 8:00 A.M.?', ['Side Patio Glass Doors', 'Main Freight Lift #2', 'Lobby Rotating Entry Doors', 'Parking Level P2 ramps'], 0, 'ตอบ Side Patio Glass Doors (ตารางวันจันทร์ 6–8 โมงเช้าซ่อมประตูหมุนล็อบบี้ ให้ใช้ Side Patio Glass Doors)'],
      ]),

    p4(3, 'l3-p4-9', 'Charity Run Packet Pickup Briefing', 'au_f',
      'Thank you for registering to run Sunday’s Harbor Breeze Five-K Charity Run supporting coastal watershed trails! Check the Race Morning Shuttle & Bag Drop Chart displayed at the Expo Booth before stepping outside. Because municipal marathons keep Oceanfront Drive blocked all morning, cars CANNOT drop runners past Pine Street Garage! Take note of ONE vital timing fix: Shuttle Bus Route Green leaves Pine Street Garage at six-thirty A.M. sharp instead of six-forty-five—five minutes faster turnaround means even Wave One runners arrive well ahead of seven-thirty gun time!',
      doc('table', 'Harbor Breeze 5K — Race Morning Logistics Chart', null, [
        tbl(
          ['Runner Item / Transport', 'Location', 'Printed Schedule', 'Important Rule'],
          [
            ['Runner Shuttle · Green Line', 'Pine Street Parking Garage', 'Departs 6:45 A.M. every 10 min', 'Bib number required to board'],
            ['Gear Bag Check Tent', 'South Lawn Boathouse', 'Opens 6:15 A.M.–10:30 A.M.', 'Stick numbered paper tag on strap'],
            ['Wave 1 Fast Corral Start', 'Harbor Arch Plaza', '7:30 A.M. Gun Start', 'Arrive 15 min prior'],
            ['Post-Race Fruit & Water Booth', 'North Pier Finish Tent', '8:00 A.M.–11:00 A.M.', 'Free with wrist pass'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. What scheduled time on the Logistics Chart is moving fifteen minutes earlier?', ['Shuttle Bus Green Line first departure (6:30 A.M. instead of 6:45 A.M.)', 'Gear Bag Check Tent opening hours (6:15 A.M.)', 'Wave 1 Fast Corral Gun Start (7:30 A.M.)', 'Post-Race Fruit & Water Booth hours (8:00 A.M.)'], 0, 'ตอบ Shuttle Bus Green Line first departure (รถชัทเทิลสายสีเขียวจากลานจอด Pine Street ออกเร็วขึ้นเป็น 06:30 น. แทน 06:45 น.)'],
        ['Part 4 · Reason', 'Why can’t family drivers drop runners directly beside Harbor Arch Plaza?', ['Oceanfront Drive stays closed to regular cars during morning races', 'Gear Bag Check Tents block every paved street turnaround', 'Parking garages charge double weekend entry tariffs', 'Coastal watershed trails permit strictly walking spectators'], 0, 'ตอบ Oceanfront Drive stays closed to regular cars during morning races (ถนน Oceanfront Drive ปิดการจราจรช่วงเช้า รถทั่วไปเข้าไม่ได้เกิน Pine Street Garage)'],
        ['Part 4 · Graphic', 'What must runners attach onto backpacks before leaving items at South Lawn Boathouse?', ['A numbered paper identification sticker on the strap', 'Their Pine Street Garage payment stub', 'Green Shuttle Line boarding badges', 'Waterproof plastic name tags'], 0, 'ตอบ A numbered paper identification sticker on the strap (ตารางระบุให้ติดป้ายกระดาษที่มีหมายเลขไว้ที่สายกระเป๋า)'],
      ]),

    p4(3, 'l3-p4-10', 'Software Support Team Monthly Metrics Review', 'ca_m',
      'Great work finishing October tickets strongly, Technical Support Crew! Pull up our Q3 Resolution Channel Summary Table on your second screen for thirty seconds. Look at Live Chat Support—median reply time dropped impressively cleanly down to forty-five seconds while customer satisfaction hit ninety-four percent! However, look carefully down at Email Support Row Three: response turnaround stretched above thirty hours simply because complex billing refund tickets keep getting dumped inside General Tech queues instead of Accounting! Starting tomorrow, let’s create one dedicated Billing Routing Filter button so tech reps clear email queues back under four hours cleanly!',
      doc('table', 'Customer Support Team — Channel Metrics Report', null, [
        tbl(
          ['Support Channel', 'Monthly Volume', 'Avg Reply Time', 'Satisfaction Rating'],
          [
            ['Live Web Chat', '4,120 Chats', '45 Seconds', '94%'],
            ['Inbound Voice Hotline', '1,890 Calls', '4 Minutes', '89%'],
            ['General Tech Email', '2,450 Emails', '31 Hours', '76%'],
            ['In-App Self Help', '9,300 Views', 'Instant', '91%'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which support channel currently suffers the lowest customer satisfaction score?', ['General Tech Email (76%)', 'Inbound Voice Hotline (89%)', 'Live Web Chat (94%)', 'In-App Self Help (91%)'], 0, 'ตอบ General Tech Email (76%) (ตารางระบุช่อง General Tech Email ใช้เวลาตอบเฉลี่ย 31 ชม. และได้คะแนนความพึงพอใจต่ำสุดคือ 76%)'],
        ['Part 4 · Cause', 'Why did email response delays stretch past thirty hours?', ['Complicated billing refund questions flooded General Tech queues instead of Accounting', 'Monthly chat volumes dropped cleanly below email traffic counts', 'In-App self-help tutorials contained broken web screenshots', 'Support staff staffed inbound voice hotlines all week instead'], 0, 'ตอบ Complicated billing refund questions flooded General Tech queues instead of Accounting (ตั๋วเรื่องคืนเงินที่ซับซ้อนถูกส่งปนเข้ามาในคิวอีเมลฝ่ายเทคนิค)'],
        ['Part 4 · Solution', 'What new workflow tool does the speaker propose launching tomorrow?', ['A dedicated filter routing billing requests away from tech support inboxes', 'Hiring extra overnight agents solely for Live Web Chat traffic', 'Disabling general support emails in favor of hotline calls', 'Updating In-App Self Help FAQ billing tables monthly'], 0, 'ตอบ A dedicated filter routing billing requests away from tech support inboxes (เพิ่มปุ่มคัดกรองส่งต่อเรื่องบิลตรงไปฝ่ายบัญชี เพื่อลดเวลารออีเมลกลับมาต่ำกว่า 4 ชม.)'],
      ]),

    // ==================== SET 4 ====================
    p1(4, 'l4-p1-1', 'uk_m', [
      'A chef is slicing fresh vegetables beside a stainless steel stove.',
      'An architect is unrolling large paper blueprints over a drafting table.',
      'Workers are painting white trim along an office corridor wall.',
      'Several stools have been stacked upside down near a window.',
    ], 1, 'ตอบ An architect is unrolling large paper blueprints over a drafting table. (สถาปนิกกำลังคลี่แบบแปลนกระดาษแผ่นใหญ่บนโต๊ะเขียนแบบ)'),
    p1(4, 'l4-p1-2', 'us_f2', [
      'Passengers are waiting behind yellow barriers along a train platform.',
      'A luggage cart is being loaded into the rear compartment of a bus.',
      'Bicycles have been parked neatly inside metal racks beneath a shelter.',
      'Pedestrians are crossing a wide intersection toward a brick station.',
    ], 2, 'ตอบ Bicycles have been parked neatly inside metal racks beneath a shelter. (จักรยานหลายคันจอดเรียงอย่างเป็นระเบียบในราวเหล็กใต้หลังคากันแดด)'),
    p1(4, 'l4-p1-3', 'au_f', [
      'A museum docent is gesturing toward a framed oil painting.',
      'Visitors are signing a guestbook on a marble reception stand.',
      'Security guards are closing heavy glass entry doors.',
      'Sculptures have been packed inside wooden shipping crates.',
    ], 0, 'ตอบ A museum docent is gesturing toward a framed oil painting. (มัคคุเทศก์พิพิธภัณฑ์กำลังผายมืออธิบายภาพวาดสีน้ำมันใส่กรอบ)'),
    p1(4, 'l4-p1-4', 'ca_m', [
      'Workers are pouring asphalt along a closed city lane.',
      'Delivery trucks are backing slowly toward a covered loading bay.',
      'A courier is weighing small parcels on an electronic floor scale.',
      'Empty plastic bins are floating beside a river dock.',
    ], 1, 'ตอบ Delivery trucks are backing slowly toward a covered loading bay. (รถบรรทุกส่งของกำลังถอยเข้าช่องจอดรับ-ส่งสินค้าที่มีหลังคาคลุม)'),
    p1(4, 'l4-p1-5', 'us_m', [
      'A baker is arranging glass pastry domes on a front counter.',
      'Customers are paying bills at an outdoor market booth.',
      'Fresh loaves of bread have been placed into wicker baskets along a wooden shelf.',
      'A waitress is refilling coffee mugs around a patio table.',
    ], 2, 'ตอบ Fresh loaves of bread have been placed into wicker baskets along a wooden shelf. (ขนมปังอบใหม่วางอยู่ในตะกร้าหวายบนชั้นไม้)'),
    p1(4, 'l4-p1-6', 'uk_f2', [
      'Two technicians are testing soil samples with handheld meters in a greenhouse.',
      'Gardeners are watering rows of potted saplings with long hoses.',
      'Metal shelving units are being assembled along an empty hallway.',
      'A farmer is loading wooden fruit crates onto a tractor trailer.',
    ], 0, 'ตอบ Two technicians are testing soil samples with handheld meters in a greenhouse. (ช่างเทคนิคสองคนกำลังตรวจตัวอย่างดินด้วยเครื่องวัดแบบพกพาในเรือนกระจก)'),

    // Set 4 Part 2 (25 Qs)
    p2(4, 'l4-p2-1', 'us_m2', 'uk_f', 'Where should visitors pick up their security badges?', ['At the main concierge desk beside the elevators.', 'Tomorrow afternoon after the ribbon cutting.', 'Only temporary contractors need red lanyards.'], 0, 'ตอบ At the main concierge desk beside the elevators. (ถามสถานที่รับบัตรเข้าอาคาร Where ตอบให้รับที่เคาน์เตอร์ด้านหน้าใกล้ลิฟต์)'),
    p2(4, 'l4-p2-2', 'ca_f', 'au_m', 'Who is leading the product safety inspection on Friday?', ['In the third-floor testing laboratory.', 'Maya Chen from Quality Compliance will handle it.', 'Yes, every helmet passed drop testing.'], 1, 'ตอบ Maya Chen from Quality Compliance will handle it. (ถามหาผู้รับผิดชอบ Who ตอบคุณ Maya Chen ฝ่ายควบคุมคุณภาพ)'),
    p2(4, 'l4-p2-3', 'uk_m', 'us_f', 'When will the downtown footbridge reopen to commuters?', ['Around four hundred meters from the pier.', 'Contractors expect to finish railing welds by May 10.', 'Because winter salt corroded the steel bolts.'], 1, 'ตอบ Contractors expect to finish railing welds by May 10. (ถามกำหนดการเปิดสะพาน When ตอบผู้รับเหมาคาดว่าจะเสร็จภายใน 10 พ.ค.)'),
    p2(4, 'l4-p2-4', 'au_f', 'ca_m', 'Would you like an aisle seat or a window seat on the shuttle flight?', ['The shuttle boards from Gate B4.', 'A window seat gives me more room to sleep, thanks.', 'About two hours including layover time.'], 1, 'ตอบ A window seat gives me more room to sleep, thanks. (ถามเลือกที่นั่ง A or B ตอบเลือกที่นั่งริมหน้าต่างพร้อมเหตุผล)'),
    p2(4, 'l4-p2-5', 'us_f', 'uk_m', 'Why was the quarterly payroll audit moved into Boardroom B?', ['Accounting expects twelve external auditors to attend.', 'Every third Friday of the quarter.', 'Yes, I emailed those spreadsheets earlier.'], 0, 'ตอบ Accounting expects twelve external auditors to attend. (ถามเหตุผลย้ายห้อง Why ตอบเพราะจะมีผู้ตรวจสอบภายนอกมาร่วมถึง 12 คน)'),
    p2(4, 'l4-p2-6', 'uk_f2', 'us_m', 'Didn’t the graphic designer upload the spring catalog proof last night?', ['On matte recycled stock if budget allows.', 'She asked for one extra day to swap the cover photo.', 'Nearly six hundred print copies per branch.'], 1, 'ตอบ She asked for one extra day to swap the cover photo. (ถามเชิงปฏิเสธว่าอัปโหลดแล้วไม่ใช่หรือ ตอบเลี่ยงว่าเธอขอเพิ่ม 1 วันเพื่อเปลี่ยนรูปหน้าปก)'),
    p2(4, 'l4-p2-7', 'us_m', 'ca_f', 'How much does annual cloud archiving cost per branch?', ['Roughly four hundred dollars a year.', 'It backs up invoices automatically at midnight.', 'Through the IT purchasing portal.'], 0, 'ตอบ Roughly four hundred dollars a year. (ถามราคาค่าบริการ How much ตอบราว 400 ดอลลาร์ต่อปี)'),
    p2(4, 'l4-p2-8', 'au_m', 'us_f2', 'Could someone help carry these sample tiles out to the van?', ['Yes, the tile showroom closes at six.', 'Let me grab a folding hand truck from Receiving.', 'They were glazed in dark slate gray.'], 1, 'ตอบ Let me grab a folding hand truck from Receiving. (ตอบรับคำขอช่วยยกของอย่างสุภาพโดยไปหยิบรถเข็นพับมาช่วย)'),
    p2(4, 'l4-p2-9', 'ca_m', 'uk_f', 'Our HVAC thermostat in Wing C keeps resetting to twenty-eight degrees.', ['Twenty-eight laptops arrived yesterday morning.', 'I’ll log an urgent work order with Building Maintenance.', 'Along the south hallway past Reception.'], 1, 'ตอบ I’ll log an urgent work order with Building Maintenance. (แจ้งปัญหาแอร์ผิดปกติ -> ตอบรับว่าจะเปิดใบแจ้งซ่อมด่วนให้ทันที)'),
    p2(4, 'l4-p2-10', 'us_f2', 'au_m', 'Which catering tray sold out fastest during yesterday’s summit?', ['The vegetarian mushroom wraps went within twenty minutes.', 'Inside Banquet Hall North.', 'About sixty-five conference delegates registered.'], 0, 'ตอบ The vegetarian mushroom wraps went within twenty minutes. (ถามเลือกเมนูใดหมดไวสุด Which ตอบเมนูแร็ปเห็ดมังสวิรัติหมดภายใน 20 นาที)'),
    p2(4, 'l4-p2-11', 'uk_m', 'ca_f', 'How long does the ferry crossing to Bainbridge Island usually take?', ['Only thirty-five minutes in calm weather.', 'Adult round-trip tickets cost nine dollars.', 'From Pier 52 downtown.'], 0, 'ตอบ Only thirty-five minutes in calm weather. (ถามระยะเวลา How long ตอบใช้เวลาแค่ 35 นาทีถ้าคลื่นลมสงบ)'),
    p2(4, 'l4-p2-12', 'us_m2', 'au_f', 'Should we schedule the client kickoff call for Tuesday or Thursday morning?', ['Let’s aim for Thursday so Legal finishes reviewing the draft.', 'At the downtown branch conference room.', 'Yes, we called the supplier back twice.'], 0, 'ตอบ Let’s aim for Thursday so Legal finishes reviewing the draft. (ถามเลือกวัน A or B ตอบเลือกวันพฤหัสฯ พร้อมเหตุผลประกอบ)'),
    p2(4, 'l4-p2-13', 'au_f', 'uk_m', 'Where are we storing the extra folding chairs after Saturday’s lecture?', ['Stack them behind the stage curtain in Storage D.', 'Nearly ninety guests stayed for the Q&A.', 'Every guest chair has padded cushions.'], 0, 'ตอบ Stack them behind the stage curtain in Storage D. (ถามหาที่เก็บของ Where ตอบให้ซ้อนไว้หลังม่านเวทีในห้องเก็บของ D)'),
    p2(4, 'l4-p2-14', 'ca_f', 'us_m', 'Why don’t we offer a ten-percent early-bird discount for July workshops?', ['The workshop lasted three hours longer.', 'Wait—Finance needs to sign off on promotional pricing first.', 'Yes, ten participants signed up already.'], 1, 'ตอบ Wait—Finance needs to sign off on promotional pricing first. (ตอบเชิงระมัดระวังต่อข้อเสนอแนะ ว่าต้องให้ฝ่ายการเงินอนุมัติราคาก่อน)'),
    p2(4, 'l4-p2-15', 'uk_f', 'ca_m', 'Haven’t you tested the upgraded barcode scanners yet?', ['Right after I wrap up morning receiving.', 'Along aisle four near frozen goods.', 'Three handheld batteries came inside each box.'], 0, 'ตอบ Right after I wrap up morning receiving. (ถามว่ายังไม่ได้ลองอีกหรือ ตอบว่ากำลังจะทดสอบทันทีที่เคลียร์งานรับของช่วงเช้าเสร็จ)'),
    p2(4, 'l4-p2-16', 'us_m', 'uk_f2', 'How often does the regional sales team update its territory map?', ['Wait until the downtown lease renews.', 'Normally at the start of every fiscal quarter.', 'It covers twelve coastal municipalities.'], 1, 'ตอบ Normally at the start of every fiscal quarter. (ถามความถี่ How often ตอบอัปเดตทุกต้นไตรมาสทางบัญชี)'),
    p2(4, 'l4-p2-17', 'au_m', 'us_f', 'You didn’t forget to pack the trade show backdrop banner, did you?', ['Of course—every trade booth costs five hundred dollars.', 'No, I slid its canvas tube behind the driver’s seat.', 'Because our booth faced the main escalator.'], 1, 'ตอบ No, I slid its canvas tube behind the driver’s seat. (tag question ยืนยันว่าไม่ลืม โดยเก็บกระบอกป้ายไว้หลังเบาะคนขับแล้ว)'),
    p2(4, 'l4-p2-18', 'us_f', 'ca_m', 'Who can approve overnight overtime for the packaging night shift?', ['Warehouse Director Owen Brooks handles extra shift approvals.', 'Packaging shifted over to Line B yesterday.', 'Until six o’clock sharp tomorrow morning.'], 0, 'ตอบ Warehouse Director Owen Brooks handles extra shift approvals. (ถามบุคคลผู้อนุมัติ Who ตอบผู้อำนวยการคลังสินค้า Owen Brooks)'),
    p2(4, 'l4-p2-19', 'uk_m', 'au_f', 'What time will the keynote speaker’s car reach the hotel lobby?', ['Probably around quarter to eight depending on bridge traffic.', 'He booked a three-night executive suite.', 'Yes, the microphone check sounded clear.'], 0, 'ตอบ Probably around quarter to eight depending on bridge traffic. (ถามเวลา What time ตอบประมาณ 7:45 น. ขึ้นอยู่กับการจราจรบนสะพาน)'),
    p2(4, 'l4-p2-20', 'ca_m', 'us_f2', 'Do you happen to know if the pharmacy on Pine Street stays open Sundays?', ['Every prescription requires a doctor’s signature.', 'It closes early at two P.M. on weekends, actually.', 'Across from the municipal fountain.'], 1, 'ตอบ It closes early at two P.M. on weekends, actually. (ถามเวลาเปิด-ปิดวันอาทิตย์ ตอบให้ข้อมูลชัดเจนว่าวันหยุดปิดบ่ายสอง)'),
    p2(4, 'l4-p2-21', 'us_m2', 'uk_f', 'Can you double-check whether Vendor 14 sent a revised W-9 tax form?', ['Sure—I’ll check our Compliance folder right after lunch.', 'We hired fourteen interns last summer.', 'No, vendor parking permits cost extra.'], 0, 'ตอบ Sure—I’ll check our Compliance folder right after lunch. (รับปากช่วยตรวจเอกสารหลังมื้อเที่ยง)'),
    p2(4, 'l4-p2-22', 'au_f', 'ca_m', 'What kind of flooring did the architect pick for the clinic lobby?', ['Durable slip-resistant terrazzo tiles.', 'Roughly two thousand square feet total.', 'Because wheelchair ramps require gentler slopes.'], 0, 'ตอบ Durable slip-resistant terrazzo tiles. (ถามชนิดวัสดุ What kind ตอบกระเบื้องหินขัดกันลื่นชนิดทนทาน)'),
    p2(4, 'l4-p2-23', 'uk_f2', 'us_m', 'I think our quarterly expense report has a rounding mismatch in row twelve.', ['Let me pull up the raw CSV export and trace the formula.', 'Yes, twelve managers joined the conference.', 'Before Friday’s afternoon bank cutoff.'], 0, 'ตอบ Let me pull up the raw CSV export and trace the formula. (แจ้งปัญหาตัวเลขไม่ตรง -> เสนอเปิดไฟล์ดิบมาไล่เช็กสูตรให้)'),
    p2(4, 'l4-p2-24', 'us_f', 'uk_m', 'How far is the nearest rapid-charge EV station from the exhibition center?', ['Two blocks north on Cedar Avenue.', 'At least three hours for a full battery.', 'Yes, compact sedans fit inside Bay Four.'], 0, 'ตอบ Two blocks north on Cedar Avenue. (ถามระยะทาง How far ตอบอยู่ห่างไปทางเหนือสองช่วงตึกบนถนน Cedar)'),
    p2(4, 'l4-p2-25', 'ca_f', 'au_m', 'Whose portfolio binder is sitting on top of the reception counter?', ['Probably Daniel’s—he stopped by right before noon.', 'Wait inside Lobby Lounge B.', 'Put extra name badges in the acrylic bowl.'], 0, 'ตอบ Probably Daniel’s—he stopped by right before noon. (ถามแสดงความเป็นเจ้าของ Whose ตอบน่าจะเป็นของ Daniel เพราะเพิ่งแวะมาตอนเที่ยง)'),

    // Set 4 Part 3 (13 Convs × 3 Qs = 39 Qs; Convs 11-13 include Graphics)
    p3(4, 'l4-p3-1', [
      ['Woman', 'us_f', 'Tom, did our glass partition contractor confirm Thursday morning installation for the new quiet booths?'],
      ['Man', 'uk_m', 'They texted an hour ago: tempered glass panels are all cut, yet brass door hinges got held up at customs until Friday morning.'],
      ['Woman', 'us_f', 'Friday works fine—let’s shift the electrical outlets installation to Thursday so contractors don’t wait around empty-handed.'],
      ['Man', 'uk_m', 'Smart plan. I’ll call electrician Carlos right now to lock in Thursday’s slot.'],
    ], null, [
      ['Part 3 · Problem', 'Why must glass partition installation move from Thursday to Friday?', ['Required brass hinges experienced a customs delay', 'Tempered glass panels still require factory cutting', 'Floor carpet glue has not cured cleanly yet', 'Thursday electrical testing occupies all quiet rooms'], 0, 'ตอบ Required brass hinges experienced a customs delay (บานพับทองเหลืองติดด่านศุลกากรจนถึงเช้าวันศุกร์)'],
      ['Part 3 · Detail', 'Which task will move into Thursday’s open work slot instead?', ['Electrical outlet wiring', 'Ceiling tile painting', 'Glass corner polishing', 'Soundproofing carpet installation'], 0, 'ตอบ Electrical outlet wiring (ย้ายงานติดตั้งปลั๊กไฟเข้ามาทำวันพฤหัสบดีแทน)'],
      ['Part 3 · Action', 'Who will the man contact immediately?', ['An electrician named Carlos', 'A customs clearance broker', 'A glass fabrication supervisor', 'An office carpet supplier'], 0, 'ตอบ An electrician named Carlos (ผู้ชายบอกว่าจะโทรหาช่างไฟชื่อ Carlos ทันที)'],
    ]),

    p3(4, 'l4-p3-2', [
      ['Man', 'au_m', 'Welcome to Lakeside Botanical Conservatory! Are you visiting for the orchid exhibit today?'],
      ['Woman', 'ca_f', 'Yes! Actually I hold an annual Garden Patron Pass—does that include admission into the glass Rainforest Pavilion too?'],
      ['Man', 'au_m', 'Normally yes, though our misting pipes are getting serviced until one o’clock. You can scan your pass right now for Outdoor Rose Gardens, then enter the Rainforest hall cleanly after lunch.'],
      ['Woman', 'ca_f', 'Oh, nice! Could I store my heavy camera tripod in your coat check locker until then?'],
      ['Man', 'au_m', 'Certainly—locker tokens are free at the gift desk just past those glass doors.'],
    ], null, [
      ['Part 3 · Restriction', 'Why is the Rainforest Pavilion closed until one P.M.?', ['Workers are servicing overhead misting pipes', 'Special orchid photography sessions booked the hall', 'Afternoon sunshine overheated the glass roof', 'Patron Pass scanning machines need firmware updates'], 0, 'ตอบ Workers are servicing overhead misting pipes (ระบบท่อพ่นหมอกกำลังอยู่ระหว่างซ่อมบำรุงจนถึงบ่ายโมง)'],
      ['Part 3 · Detail', 'What does the staff member suggest the woman visit first?', ['The Outdoor Rose Gardens', 'The downtown Botany Museum', 'The Conservatory gift warehouse', 'The south ticket pavilion'], 0, 'ตอบ The Outdoor Rose Gardens (แนะนำให้สแกนบัตรเข้าชมสวนกุหลาบกลางแจ้งก่อนระหว่างรอ)'],
      ['Part 3 · Request', 'Where can the visitor get a free token for her tripod locker?', ['At the gift shop desk beyond the glass doors', 'At the Rainforest Pavilion entrance turnstile', 'Inside the coat check hallway kiosk', 'At the Outdoor Rose Garden kiosk'], 0, 'ตอบ At the gift shop desk beyond the glass doors (ขอเหรียญล็อกเกอร์ฟรีได้ที่เคาน์เตอร์ร้านขายของที่ระลึกหลังประตูกระจก)'],
    ]),

    p3(4, 'l4-p3-3', [
      ['Woman', 'uk_f2', 'Samir, thank goodness you picked up! Our cold-chain truck bound for Riverside Grocery developed an alternator warning light outside Oakridge.'],
      ['Man', 'us_m2', 'Hold on—how are the chilled dairy cabin temperatures holding right now?'],
      ['Woman', 'uk_f2', 'Still steady at two degrees Celsius on backup battery, though we’ve got maybe ninety minutes before warming starts. Can Dispatch transfer those forty crates onto Van Nine?'],
      ['Man', 'us_m2', 'Van Nine already cleared Westside Hospital ten minutes ago—I’m routing driver Elena straight to your Oakridge pullout right now!'],
    ], null, [
      ['Part 3 · Problem', 'What issue is the woman’s delivery truck experiencing?', ['An electrical alternator dashboard warning appeared mid-route', 'Dairy cabin cooling failed completely outside Riverside', 'Oakridge highway construction blocked every exit lane', 'Forty cheese crates shifted loose inside the trailer'], 0, 'ตอบ An electrical alternator dashboard warning appeared mid-route (ไฟเตือนไดชาร์จบนหน้าปัดรถขนส่งติดขึ้นกลางทาง)'],
      ['Part 3 · Detail', 'How long does backup battery cooling keep the cargo safe?', ['Roughly ninety minutes', 'Ten minutes', 'Forty minutes', 'Two hours'], 0, 'ตอบ Roughly ninety minutes (แบตสำรองประคองความเย็นที่ 2 องศาได้อีกประมาณ 90 นาที)'],
      ['Part 3 · Action', 'Who is being dispatched to transfer the refrigerated cargo?', ['A driver operating Van Nine named Elena', 'An Oakridge roadside diesel mechanic', 'A backup cold-storage clerk at Riverside Grocery', 'A Westside Hospital receiving supervisor'], 0, 'ตอบ A driver operating Van Nine named Elena (ส่งคนขับชื่อ Elena จากรถ Van Nine ที่เพิ่งเสร็จงานไปรับช่วงต่อทันที)'],
    ]),

    p3(4, 'l4-p3-4', [
      ['Man', 'us_m', 'Hi Priya, did Marketing pick the background soundtrack for next week’s product demo reel?'],
      ['Woman1', 'us_f2', 'We narrowed it down to two instrumental tracks—an upbeat synth loop or acoustic piano—yet Legal warned commercial licenses for both jumped to two thousand dollars!'],
      ['Man', 'us_m', 'Yikes! Let’s check with composer Julian in our Audio Lab—didn’t he build an internal library of royalty-free loops last winter?'],
      ['Woman2', 'au_f', 'He sure did! Wait, I have Julian’s shared Drive folder open right here—Track Twelve matches our two-minute slide pace practically beat-for-beat!'],
    ], null, [
      ['Part 3 · Problem', 'Why were the two shortlisted songs rejected?', ['Commercial licensing rates became too expensive', 'Acoustic piano files sounded slightly distorted', 'Marketing exceeded its slide playback duration limit', 'Composer Julian withheld commercial rights'], 0, 'ตอบ Commercial licensing rates became too expensive (ค่าลิขสิทธิ์เชิงพาณิชย์ของทั้งสองเพลงพุ่งไปถึงสองพันดอลลาร์)'],
      ['Part 3 · Suggestion', 'Who previously compiled an in-house catalog of royalty-free music?', ['Audio Lab composer Julian', 'Chief Marketing Officer Priya', 'Legal contract manager Sam', 'An external licensing vendor'], 0, 'ตอบ Audio Lab composer Julian (ผู้ชายเสนอให้ไปดูคลังเพลงปลอดค่าลิขสิทธิ์ที่ Julian ทำไว้เมื่อฤดูหนาวก่อน)'],
      ['Part 3 · Outcome', 'What does the second woman discover inside the shared Drive folder?', ['An internal track aligning smoothly with the slide timing', 'Signed licensing waivers from the legal department', 'Two-thousand-dollar discount coupons for synth audio', 'Raw voiceover scripts needing re-recording'], 0, 'ตอบ An internal track aligning smoothly with the slide timing (เจอเพลง Track Twelve ที่จังหวะเข้ากับความยาวสไลด์สองนาทีพอดีเป๊ะ)'],
    ]),

    p3(4, 'l4-p3-5', [
      ['Woman', 'ca_f', 'Good afternoon, Harborview Hotel Events Desk! How may I assist your planning committee?'],
      ['Man', 'uk_m', 'Hello! Our Biotech Symposium booked your Grand Ballroom for October 18, and we need breakout tables set across three smaller rooms next door.'],
      ['Woman', 'ca_f', 'Let me pull up Reservation H-409. Yes—Cedar, Maple, and Oak Suites remain free all morning, complete with ceiling projectors and standing flipcharts.'],
      ['Man', 'uk_m', 'Marvelous. One small tweak: could Catering push our coffee station service out from nine-thirty to ten-fifteen so panels wrap smoothly first?'],
    ], null, [
      ['Part 3 · Topic', 'What kind of event is the man helping coordinate?', ['A biotechnology symposium', 'An autumn catering expo', 'A hotel ballroom wedding reception', 'A regional timber trade show'], 0, 'ตอบ A biotechnology symposium (ผู้ชายระบุว่าเป็นงานประชุมวิชาการ Biotech Symposium)'],
      ['Part 3 · Detail', 'Which amenities are already included inside Cedar, Maple, and Oak Suites?', ['Overhead projectors and flipchart stands', 'Dedicated espresso barista booths', 'Wireless interpreter headsets', 'Podium microphones and stage lighting'], 0, 'ตอบ Overhead projectors and flipchart stands (ห้องย่อยมีโปรเจกเตอร์ติดเพดานและกระดานพลิกเตรียมไว้ครบ)'],
      ['Part 3 · Change', 'What schedule adjustment does the man request from Catering?', ['Delay morning coffee service by forty-five minutes', 'Serve afternoon pastries in Grand Ballroom only', 'Reduce table seating by three breakout panels', 'Move lunch delivery forward to nine-thirty'], 0, 'ตอบ Delay morning coffee service by forty-five minutes (ขอเลื่อนเวลาบริการกาแฟจาก 9:30 น. ไปเป็น 10:15 น.)'],
    ]),

    p3(4, 'l4-p3-6', [
      ['Man', 'ca_m', 'Wait a second, Nora—why do these monthly lab safety audit sheets still list old plastic eyewear standards on Page Three?'],
      ['Woman', 'us_f', 'Ugh, Printing pulled last autumn’s template out of the shared archive instead of February’s ANSI revision!'],
      ['Man', 'ca_m', 'Good thing we caught that before tomorrow’s technician orientation! How many packets went through binding already?'],
      ['Woman', 'us_f', 'Only twenty—and since Page Three sits on a single sheet, I’ll print forty corrected insert pages and swap them cleanly by four o’clock.'],
    ], null, [
      ['Part 3 · Problem', 'What error did the man spot in the training binders?', ['Outdated eyewear safety specifications remained on Page Three', 'Lab technician rosters missed forty incoming trainees', 'Orientation attendance sheets were printed on wrong colors', 'February attendance signatures disappeared from the archive'], 0, 'ตอบ Outdated eyewear safety specifications remained on Page Three (หน้า 3 ยังใช้มาตรฐานแว่นตานิรภัยของเทมเพลตเก่าเมื่อปีก่อน)'],
      ['Part 3 · Meaning', 'Why does the woman say, "I’ll print forty corrected insert pages"?', ['She plans to replace only the outdated single sheet rather than reprinting full packets', 'Forty extra guests requested safety helmets for tomorrow', 'Page Three requires double-sided lamination across forty binders', 'The print shop refuses to rebind older technician guides'], 0, 'ตอบ She plans to replace only the outdated single sheet rather than reprinting full packets (แก้เฉพาะหน้า 3 แล้วแทรกเปลี่ยนแผ่นเดียว ไม่ต้องพิมพ์ทั้งเล่มใหม่)'],
      ['Part 3 · Time', 'When will the corrected packets be ready?', ['By four P.M. today', 'Early tomorrow afternoon', 'Right before February testing', 'Next Monday morning'], 0, 'ตอบ By four P.M. today (ผู้หญิงบอกว่าจะสลับหน้าแก้ไขเสร็จภายใน 4 โมงเย็นวันนี้)'],
    ]),

    p3(4, 'l4-p3-7', [
      ['Woman', 'au_f', 'Hi Mark! Have customer pre-orders for our ceramic drip coffee brewer started shipping from West Warehouse yet?'],
      ['Man', 'us_m2', 'Batch One—around six hundred units—left docks at seven A.M., though customs held our extra silicone carafe lids at port until midnight.'],
      ['Woman', 'au_f', 'Wait—won’t early backers receive incomplete kits if Batch Two ships without spare lids inside the gift box?'],
      ['Man', 'us_m2', 'Don’t worry: Batch One already holds primary glass lids! Spare travel lids only affect deluxe pledges, and we’ll mail them via priority flat-rate pouches Saturday at zero cost to backers.'],
    ], null, [
      ['Part 3 · Detail', 'How many units shipped early this morning in Batch One?', ['About six hundred brewers', 'Four hundred silicone lids', 'Two thousand deluxe pledges', 'Seven hundred glass carafes'], 0, 'ตอบ About six hundred brewers (ผู้ชายระบุว่าล็อตแรกประมาณ 600 เครื่องส่งออกตอน 7 โมงเช้าแล้ว)'],
      ['Part 3 · Concern', 'What worries the woman when hearing about the customs hold?', ['Deluxe customers might receive unsealed or missing accessory sets', 'Primary glass carafes could break during port inspection', 'West Warehouse space ran out for Saturday shipments', 'Backers canceled credit card pre-orders overnight'], 0, 'ตอบ Deluxe customers might receive unsealed or missing accessory sets (กังวลว่าลูกค้าจะได้ชุดสินค้าที่ขาดชิ้นส่วนเสริม)'],
      ['Part 3 · Solution', 'How will delayed silicone travel lids reach deluxe customers?', ['By complimentary express pouches mailed Saturday', 'By holding Batch One trucks at West Warehouse until midnight', 'By refunding accessory fees directly to backer cards', 'By substituting metal mugs inside standard boxes'], 0, 'ตอบ By complimentary express pouches mailed Saturday (จะส่งฝาสำรองตามไปให้วันเสาร์ทางซองด่วนฟรี ไม่มีค่าใช้จ่าย)'],
    ]),

    p3(4, 'l4-p3-8', [
      ['Man', 'uk_m', 'Excuse me, is this where City Marathon runners pick up Saturday morning race bibs and timing chips?'],
      ['Woman', 'ca_f', 'Right here at Booth C! Just show a photo ID along with your QR confirmation barcode so I scan Packet 842.'],
      ['Man', 'uk_m', 'Here you go—also, my knee acted up Tuesday, so could I switch down from the full marathon to the half-marathon route?'],
      ['Man2', 'us_m', 'Hi there—I oversee course transfers at the white Help Desk right behind Booth D! Step over once she checks your ID, and I’ll encode a green half-marathon timing tag cleanly in two minutes.'],
    ], null, [
      ['Part 3 · Location', 'Where does this conversation take place?', ['At an athletic event packet pickup area', 'At a downtown physical therapy clinic', 'Inside a sporting goods shoe store', 'Near a municipal parking ticket counter'], 0, 'ตอบ At an athletic event packet pickup area (สถานที่รับเบอร์วิ่งและชิปจับเวลาของงาน City Marathon ที่บูธ C)'],
      ['Part 3 · Request', 'Why does the runner ask to modify his registration?', ['A recent knee injury makes him prefer a shorter race distance', 'His original QR confirmation code printed incorrectly', 'Saturday’s half-marathon starts later near his hotel', 'Friends signed up inside Booth D’s running club'], 0, 'ตอบ A recent knee injury makes him prefer a shorter race distance (เข่ามีอาการเจ็บเมื่อวันอังคาร เลยอยากขอลดระยะจากฟูลมาราธอนเป็นฮาล์ฟมาราธอน)'],
      ['Part 3 · Action', 'What should the runner do immediately after his ID is verified at Booth C?', ['Walk over to the white Help Desk behind Booth D for a green timing tag', 'Wait until Saturday morning starting corrals open', 'Purchase a replacement photo badge online', 'Submit a signed physician letter at Booth A'], 0, 'ตอบ Walk over to the white Help Desk behind Booth D for a green timing tag (เจ้าหน้าที่อีกคนบอกให้เดินไปที่เคาน์เตอร์ Help Desk สีขาวหลังบูธ D เพื่อลงรหัสแท็กสีเขียวใหม่)'],
    ]),

    p3(4, 'l4-p3-9', [
      ['Woman', 'us_f', 'Carlos, did our quarterly employee engagement survey score higher on remote flexibility this round?'],
      ['Man', 'au_m', 'Up twelve points! Almost eighty-five percent of staff love the three-day hybrid schedule—yet notice written comments about meeting room availability on Wednesdays?'],
      ['Woman', 'us_f', 'Let me guess: everyone picks Wednesday as their shared in-office day, so conference rooms stay double-booked nonstop!'],
      ['Man', 'au_m', 'Spot on. HR suggests encouraging engineering teams to rotate their anchor day onto Thursdays starting next month cleanly.'],
    ], null, [
      ['Part 3 · Detail', 'How did remote flexibility scores change in the recent employee survey?', ['Approval rose by twelve points to roughly eighty-five percent', 'Feedback fell below expectations on hybrid laptops', 'Thirty-five percent requested full-time office desks', 'Wednesday attendance dropped after policy updates'], 0, 'ตอบ Approval rose by twelve points to roughly eighty-five percent (คะแนนความพึงพอใจด้านความยืดหยุ่นเพิ่มขึ้น 12 จุดเป็นราว 85%)'],
      ['Part 3 · Problem', 'What workplace bottleneck emerged on Wednesdays?', ['Heavy simultaneous office attendance overcrowded conference rooms', 'Shared kitchen coffee machines malfunctioned midweek', 'HR training seminars took over open work desks', 'Thursday project stand-ups ran past noon deadlines'], 0, 'ตอบ Heavy simultaneous office attendance overcrowded conference rooms (พนักงานส่วนใหญ่เลือกเข้าออฟฟิศวันพุธพร้อมกัน ทำให้ห้องประชุมเต็มซ้อนตลอดวัน)'],
      ['Part 3 · Proposal', 'What adjustment does HR recommend starting next month?', ['Staggering engineering team in-office anchor days to Thursdays', 'Reducing team meetings down to fifteen minutes daily', 'Partitioning cafeteria corners into quiet phone booths', 'Suspending Wednesday remote work eligibility altogether'], 0, 'ตอบ Staggering engineering team in-office anchor days to Thursdays (ฝ่ายบุคคลเสนอให้สลับวันเข้าออฟฟิศหลักของทีมวิศวกรรมเป็นวันพฤหัสบดีแทน)'],
    ]),

    p3(4, 'l4-p3-10', [
      ['Man', 'ca_m', 'Hannah, I noticed our new packaging supplier sent kraft mailers made with recycled pulp—do their flap adhesive strips hold cleanly during humid coastal weather?'],
      ['Woman', 'uk_f2', 'Good question! Lab Assistant Ben ran seventy-two-hour humidity chamber tests on forty sealed pouches yesterday—zero flaps peeled open cleanly even at ninety percent humidity!'],
      ['Man', 'ca_m', 'Relief! Let’s switch our autumn skincare line into these mailers then—cutting foam filler drops shipping weight eighteen percent per box!'],
      ['Woman', 'uk_f2', 'Wait until Procurement locks annual pricing tomorrow morning—sales rep Tessa offered five percent extra off pallet orders over ten thousand envelopes.'],
    ], null, [
      ['Part 3 · Topic', 'What product packaging change are the speakers evaluating?', ['Recycled kraft mailers for an autumn skincare line', 'Waterproof glass jars for cosmetic serums', 'Compressed foam boxes for heavy shipping pallets', 'Pre-printed return labels for coastal pharmacies'], 0, 'ตอบ Recycled kraft mailers for an autumn skincare line (กำลังประเมินซองกระดาษคราฟท์รีไซเคิลสำหรับผลิตภัณฑ์สกินแคร์ช่วงฤดูใบไม้ร่วง)'],
      ['Part 3 · Detail', 'What did Lab Assistant Ben confirm yesterday?', ['Adhesive seals stayed intact through prolonged high humidity', 'Recycled pulp absorbed moisture inside ocean containers', 'Shipping scale weight increased slightly across forty envelopes', 'Peel-and-stick labels needed extra clear tape corners'], 0, 'ตอบ Adhesive seals stayed intact through prolonged high humidity (แถบกาวติดแน่นไม่ลอกหลุดแม้ทดสอบในตู้ความชื้น 90% นาน 72 ชั่วโมง)'],
      ['Part 3 · Timing', 'Why does the woman advise waiting until tomorrow morning before placing orders?', ['To claim an additional volume discount once pricing is finalized', 'To test five thousand skincare bottles inside cold storage', 'To verify coastal carrier postage schedules first', 'To wait for green ink printing plates from Ben'], 0, 'ตอบ To claim an additional volume discount once pricing is finalized (รอฝ่ายจัดซื้อล็อกราคาสัญญารายปีพรุ่งนี้เช้าเพื่อรับส่วนลดเพิ่มอีก 5%)'],
    ]),

    p3(4, 'l4-p3-11', [
      ['Woman', 'us_f2', 'Hi Victor! I pulled up the Oakridge Renovation Phase Timetable before our contractor kickoff call. Looking at Exterior Masonry, did Brickworks finish tuck-pointing yesterday?'],
      ['Man', 'us_m', 'Yes, Exterior Masonry signed off right on schedule. Keep your eye on Window Glazing right underneath though—our custom aluminum frames slipped three weeks back!'],
      ['Woman', 'us_f2', 'Ouch—if glazing slips three weeks, does Interior Drywall have to wait behind it so rain doesn’t soak fresh plaster?'],
      ['Man', 'us_m', 'Precisely! Tell Site Foreman Ray we’re swapping Interior Drywall right after Window Glazing so plaster crews don’t sit idle next week.'],
    ], doc('table', 'Oakridge Plaza — Renovation Phase Timetable', [['Updated', 'May 4']], [
      tbl(
        ['Work Phase', 'Assigned Crew', 'Target Finish', 'Current Status'],
        [
          ['Exterior Masonry', 'Apex Brickworks', 'May 3', 'Signed Off'],
          ['Window Glazing', 'ClearView Glass', 'May 12', '3-Week Frame Delay'],
          ['Interior Drywall', 'Redwood Interiors', 'May 22', 'Scheduled'],
          ['Electrical Trim', 'VoltLine Co.', 'June 2', 'Pending Inspection'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which contractor is responsible for the delayed task?', ['ClearView Glass', 'Apex Brickworks', 'Redwood Interiors', 'VoltLine Co.'], 0, 'ตอบ ClearView Glass (ตารางระบุ Window Glazing มี Frame Delay 3 สัปดาห์ โดยมีผู้รับเหมาคือ ClearView Glass)'],
      ['Part 3 · Cause', 'Why can’t Interior Drywall start before Window Glazing wraps up?', ['Unsealed window openings could allow rain to damage fresh plaster', 'Redwood Interiors workers are still occupied on Exterior Masonry', 'Electrical inspection inspectors prohibit concurrent indoor work', 'Aluminum frame trucks block indoor drywall staging ramps'], 0, 'ตอบ Unsealed window openings could allow rain to damage fresh plaster (ต้องรอติดกระจกหน้าต่างก่อนเพื่อกันฝนเข้ามากัดเซาะผนังยิปซัมใหม่)'],
      ['Part 3 · Action', 'Who will receive updated schedule instructions right away?', ['Site Foreman Ray', 'ClearView dispatch', 'Electrical inspector', 'Brickworks manager'], 0, 'ตอบ Site Foreman Ray (ผู้ชายสั่งให้แจ้งหัวหน้าหน้างานชื่อ Ray ให้สลับคิวงาน Interior Drywall)'],
    ]),

    p3(4, 'l4-p3-12', [
      ['Man', 'uk_m', 'Sophie, let’s double-check seat counts across our Regional Rail Express morning runs before releasing summer fare discounts.'],
      ['Woman', 'au_f', 'Sure—here’s last month’s average ridership readout! Look how crammed the seven-fifteen train to Springfield gets: nearly full capacity every weekday morning!'],
      ['Man', 'uk_m', 'Whoa, ninety-six percent load factor leaves hardly any room for walk-up travelers! Meanwhile that nine-forty-five commuter train barely hits half-full.'],
      ['Woman', 'au_f', 'Let’s restrict our twenty-percent off Early-Bird coupon purely to trains averaging under sixty-five percent load factor so commuters spread out naturally cleanly!'],
    ], doc('table', 'Metro Rail — Morning Outbound Load Averages', [['Period', 'Month of April · Coach Class']], [
      tbl(
        ['Departure', 'Route', 'Seat Capacity', 'Avg Load Factor'],
        [
          ['06:30 A.M.', 'Central → Harbor', '320 Seats', '68%'],
          ['07:15 A.M.', 'Central → Springfield', '400 Seats', '96%'],
          ['08:20 A.M.', 'Central → Harbor', '320 Seats', '79%'],
          ['09:45 A.M.', 'Central → Springfield', '300 Seats', '48%'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. On which departure will the twenty-percent coupon apply?', ['The 09:45 A.M. train to Springfield', 'The 06:30 A.M. train to Harbor', 'The 07:15 A.M. train to Springfield', 'The 08:20 A.M. train to Harbor'], 0, 'ตอบ The 09:45 A.M. train to Springfield (ตั้งเงื่อนไขให้ส่วนลดเฉพาะขบวนที่ Load Factor ต่ำกว่า 65% ซึ่งในตารางมีขบวน 09:45 A.M. ที่ 48% เท่านั้น)'],
      ['Part 3 · Detail', 'Why does the man reject applying discounts to the 07:15 A.M. departure?', ['It already runs nearly completely full at ninety-six percent capacity', 'It serves only Harbor station passengers', 'Seat capacity drops by one hundred seats in summer', 'Walk-up commuter tickets exclude coach cars'], 0, 'ตอบ It already runs nearly completely full at ninety-six percent capacity (ขบวน 7:15 น. มีคนเต็มถึง 96% แล้ว ไม่ต้องกระตุ้นยอดเพิ่ม)'],
      ['Part 3 · Purpose', 'What behavioral shift do the speakers hope the targeted discount achieves?', ['Spreading daily riders away from peak rush-hour departures', 'Replacing Harbor express locomotives with Springfield buses', 'Increasing morning coach fares above peak levels', 'Eliminating weekend walk-up ticket kiosks'], 0, 'ตอบ Spreading daily riders away from peak rush-hour departures (ต้องการกระจายผู้โดยสารจากรอบชั่วโมงเร่งด่วนไปรอบที่ว่างกว่า)'],
    ]),

    p3(4, 'l4-p3-13', [
      ['Woman', 'ca_f', 'Mark, did Facility Services finalize where each vendor booth goes for next Friday’s Wellness Fair in the Atrium?'],
      ['Man', 'us_m2', 'Almost! Take a quick peek at this Floor Zone Sketch—North Wall tables along natural skylights hold Blood Pressure Screenings and Nutrition Samples.'],
      ['Woman', 'ca_f', 'Looks airy and accessible! Wait—where should Dental Checkups set up their portable UV sterilizer lamp? It pulls heavy amperage and needs wall outlets!'],
      ['Man', 'us_m2', 'Good catch! Put Dental Checkups at Corner Zone Four beside our electrical service pillar instead of putting Meditation Rugs there—we can shift Meditation Rugs over onto Sunny East Alcove!'],
    ], doc('floorplan', 'Corporate Atrium — Wellness Fair Floor Sketch', null, [
      box('Atrium Zones', [
        '• Zone 1 (North Skylights): Blood Pressure Screenings',
        '• Zone 2 (North Wall Center): Nutrition Samples',
        '• Zone 3 (Sunny East Alcove): Reserved for Quiet Activity',
        '• Zone 4 (South Service Pillar — High-Voltage Outlets): Assigned Slot',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Where will the Dental Checkup booth be stationed?', ['At Zone 4 near the South Service Pillar', 'At Zone 1 beside North Skylights', 'At Zone 3 in the Sunny East Alcove', 'At Zone 2 next to Nutrition Samples'], 0, 'ตอบ At Zone 4 near the South Service Pillar (ย้ายจุดตรวจฟันที่ใช้ไฟสูงไปอยู่ Zone 4 ข้างเสาปลั๊กไฟแรงสูง)'],
      ['Part 3 · Reason', 'Why couldn’t the Dental Checkup equipment go into another open alcove easily?', ['Its sterilizer lamp demands dedicated electrical power outlets', 'Sunlight glares strongly through East Alcove blinds', 'Patient confidential forms require double glass doors', 'Nutrition carts block heavy vendor foot traffic'], 0, 'ตอบ Its sterilizer lamp demands dedicated electrical power outlets (เครื่องฆ่าเชื้อ UV กินไฟสูง ต้องอยู่ติดเสาจ่ายไฟ)'],
      ['Part 3 · Detail', 'Which activity is relocated into the Sunny East Alcove instead?', ['Meditation Rugs', 'Blood Pressure Screenings', 'Vendor Bag Registration', 'Nutrition Cooking Demos'], 0, 'ตอบ Meditation Rugs (ย้ายโซน Meditation Rugs ไปไว้ที่ Sunny East Alcove หรือ Zone 3 แทน)'],
    ]),

    // Set 4 Part 4 (10 Talks × 3 Qs = 30 Qs; Talks 8-10 include Graphics)
    p4(4, 'l4-p4-1', 'the following recorded telephone message', 'uk_f',
      'Thank you for calling Crestline Dental Group! Please note our downtown clinic hours have shifted cleanly starting May 1: we now open mornings at seven-thirty A.M. Tuesday through Friday to accommodate early workplace appointments, and remain closed Saturdays until renovation work in Suite 2 finishes next month. If you need to reschedule a routine cleaning or verify insurance eligibility, press two to speak with Scheduling Desk coordinator Priya; for sudden toothache emergencies after hours, call our on-call line listed on our homepage cleanly!',
      null, [
        ['Part 4 · Purpose', 'What policy update does the recorded greeting explain?', ['Updated weekday clinic opening times and temporary Saturday closures', 'Expanded evening orthodontics parking garage discounts', 'Moving dental laboratories away from Suite 2 permanently', 'Switching insurance verification exclusively online'], 0, 'ตอบ Updated weekday clinic opening times and temporary Saturday closures (แจ้งปรับเวลาเปิดเช้าวันอังคาร-ศุกร์ เป็น 7:30 น. และปิดวันเสาร์ชั่วคราวระหว่างปรับปรุงห้อง Suite 2)'],
        ['Part 4 · Time', 'Why is Crestline Dental Group currently closed on Saturdays?', ['Interior remodeling is underway inside Suite 2', 'Hygienists rotate onto downtown hospital clinics', 'Insurance providers halted weekend claim approvals', 'Staff attend monthly sterilization licensing workshops'], 0, 'ตอบ Interior remodeling is underway inside Suite 2 (ห้อง Suite 2 กำลังปรับปรุงต่อเติมจนถึงเดือนหน้า)'],
        ['Part 4 · Detail', 'How should a caller reach Coordinator Priya to adjust a cleaning date?', ['By pressing option two on the phone keypad', 'By visiting Crestline’s homepage contact chatbot', 'By dialing the after-hours dental pain hotline', 'By emailing insurance policy cards directly'], 0, 'ตอบ By pressing option two on the phone keypad (ข้อความเสียงแจ้งให้กด 2 เพื่อติดต่อโต๊ะนัดหมายของคุณ Priya)'],
      ]),

    p4(4, 'l4-p4-2', 'the following airport announcement', 'us_m',
      'Attention travelers ticketed on Northern Sky Flight 418 nonstop service to Denver: boarding from Gate B-9 is delayed approximately thirty-five minutes due to de-icing checks following overnight freezing rain. Passengers holding tight international connections out of Denver should check in immediately with Agent Sandra at the red podium beside Gate B-9 so we reserve alternate evening legs cleanly in advance. All passengers remain welcome to enjoy complimentary hot coffee coupons valid at nearby Concourse Bean kiosks while waiting—simply scan your mobile boarding pass at the register!',
      null, [
        ['Part 4 · Cause', 'Why has Flight 418 boarding been pushed back?', ['Aircraft crews are completing safety de-icing inspections', 'Overnight crew flights arrived thirty-five minutes late', 'Baggage belts inside Gate B-9 jammed during loading', 'Denver runways halted regional landings until noon'], 0, 'ตอบ Aircraft crews are completing safety de-icing inspections (ล่าช้า 35 นาทีเพื่อตรวจสอบและละลายน้ำแข็งบนเครื่องหลังฝนน้ำแข็งเมื่อคืน)'],
        ['Part 4 · Action', 'Who is advised to visit Agent Sandra at the red podium right away?', ['Passengers facing tight connecting flights in Denver', 'Travelers carrying oversized skis or golf bags', 'Loyalty members requesting window seat upgrades', 'Unaccompanied minors boarding early zones'], 0, 'ตอบ Passengers facing tight connecting flights in Denver (ผู้โดยสารที่ต้องต่อเครื่องไฟลต์ต่างประเทศกระชั้นชิดที่เดนเวอร์ ให้รีบติดต่อคุณ Sandra เพื่อเตรียมเที่ยวบินสำรอง)'],
        ['Part 4 · Benefit', 'How can delayed travelers claim free hot coffee while waiting?', ['By scanning their mobile boarding passes at Concourse Bean counters', 'By requesting paper vouchers from flight attendants onboard', 'By presenting loyalty cards inside the international lounge', 'By submitting café receipts to the customer desk'], 0, 'ตอบ By scanning their mobile boarding passes at Concourse Bean counters (สแกนบัตรขึ้นเครื่องบนมือถือที่ร้าน Concourse Bean เพื่อรับกาแฟฟรี)'],
      ]),

    p4(4, 'l4-p4-3', 'the following museum tour introduction', 'au_f',
      'Welcome inside the Maritime History Wing here at Pacific Heritage Museum! Before we step past these brass porthole doors, please notice photography without flash is freely allowed across every timber model gallery—just keep camera bags tucked close so delicate brass compass pedestals aren’t bumped! Our highlight stops today start around the restored 1892 Pacific schooner wheel, followed closely by original hand-inked coastal weather logs donated recently by Harbor Captain Reyes’s family. We’ll gather back under this compass skylight in forty minutes cleanly for Q&A!',
      null, [
        ['Part 4 · Rule', 'What guideline does the museum guide emphasize before entering the gallery?', ['Disable camera flashes and keep bulky bags tightly close', 'Leave cell phones inside lobby lockers throughout the tour', 'Maintain silence inside historic coastal log displays', 'Avoid sketching beside glass marine compass pedestals'], 0, 'ตอบ Disable camera flashes and keep bulky bags tightly close (ถ่ายรูปได้โดยห้ามใช้แฟลช และระวังกระเป๋ากล้องชนแท่นแสดงเข็มทิศทองเหลือง)'],
        ['Part 4 · Detail', 'Which donated collection will visitors view during the second half of the walk?', ['Historic hand-written weather records from a sea captain’s family', 'Restored brass cannons salvaged off downtown reefs', 'Oil portraits painted aboard early merchant freighters', 'Interactive digital wave simulation tables'], 0, 'ตอบ Historic hand-written weather records from a sea captain’s family (สมุดบันทึกสภาพอากาศเขียนด้วยมือโบราณที่ครอบครัวกัปตัน Reyes บริจาคให้)'],
        ['Part 4 · Timing', 'How long will guests spend touring inside the wing before Q&A?', ['Forty minutes', 'Twenty minutes', 'Sixty minutes', 'Ninety minutes'], 0, 'ตอบ Forty minutes (นัดกลับมารวมตัวใต้ช่องแสงหลังคาอีก 40 นาทีข้างหน้าเพื่อถามตอบ)'],
      ]),

    p4(4, 'l4-p4-4', 'the following radio advertisement', 'ca_m',
      'Tired of replacing cheap patio timber chairs every second rainy spring? Discover NorthWood Composite Furniture—crafted cleanly right here in Oregon using ninety percent reclaimed coastal plastic blended with cedar wood fibers! Our Adirondack loungers, dining tables, and modular garden benches laugh off sun fade, warping, and wood rot for twenty guaranteed years without needing single coats of stain or oil. Visit NorthWood’s Mill Street Factory Showroom this Saturday and Sunday cleanly: bring two canned goods supporting FoodBank Oregon and take fifteen percent off any outdoor dining set immediately!',
      null, [
        ['Part 4 · Product', 'What key durability advantage does NorthWood Furniture claim?', ['Weather resistance lasting twenty years without resealing stains', 'Solid raw teak timber imported directly from Oregon', 'Lightweight aluminum frames folding cleanly into closets', 'Complimentary waterproof zip covers with every lounge chair'], 0, 'ตอบ Weather resistance lasting twenty years without resealing stains (ทนแดดฝนและความชื้นนาน 20 ปีโดยไม่ต้องทาสีย้อมหรือน้ำมันเคลือบซ้ำ)'],
        ['Part 4 · Promotion', 'How can shoppers qualify for a fifteen-percent weekend discount?', ['By donating two canned food items at the showroom', 'By signing up for Oregon newsletter alerts online', 'By trading in damaged wooden patio tables', 'By ordering three modular benches simultaneously'], 0, 'ตอบ By donating two canned food items at the showroom (นำอาหารกระป๋อง 2 กระป๋องมาบริจาคให้ FoodBank Oregon ในสุดสัปดาห์นี้รับส่วนลดทันที 15%)'],
        ['Part 4 · Location', 'Where does the special weekend event take place?', ['At NorthWood’s Mill Street Factory Showroom', 'Inside the downtown FoodBank convention hall', 'At suburban garden supply hardware dealers', 'On Oregon harbor marketplace docks'], 0, 'ตอบ At NorthWood’s Mill Street Factory Showroom (จัดที่โชว์รูมโรงงานบนถนน Mill Street)'],
      ]),

    p4(4, 'l4-p4-5', 'the following excerpt from a staff meeting', 'us_f2',
      'Thanks for joining Monday’s Editorial Stand-Up early, everyone! Two quick wins: first, our summer clean-energy investigative special already drew double our usual subscriber renewals overnight—kudos especially to Data Reporter Sam for plotting those regional grid charts so cleanly! Now turning to June printing schedules: Printing Plant South warned freight paper prices jumped six percent this month, so we’re trimming two glossy ad-insert pages out of July’s regional print edition while moving interactive bonus interviews cleanly onto our subscriber web portal instead!',
      null, [
        ['Part 4 · Recognition', 'Why does the speaker praise Data Reporter Sam?', ['His clear electricity grid charts boosted subscription renewals sharply', 'He negotiated six-percent paper rebates from Printing Plant South', 'He completed July web portal video interviews ahead of Friday', 'He identified printing machine savings across summer brochures'], 0, 'ตอบ His clear electricity grid charts boosted subscription renewals sharply (ชม Sam ที่ทำแผนภูมิกริดพลังงานได้ชัดเจน ช่วยให้ยอดต่ออายุสมาชิกพุ่งเป็นสองเท่า)'],
        ['Part 4 · Cause', 'Why is the magazine cutting two glossy pages from July’s print issue?', ['Bulk freight paper pricing climbed six percent this month', 'Print advertisers switched budgets onto weekend podcasts', 'Mailing post offices reduced allowable magazine thickness', 'Subscriber surveys disliked multi-page ad inserts'], 0, 'ตอบ Bulk freight paper pricing climbed six percent this month (ราคาค่ากระดาษพิมพ์และขนส่งเดือนนี้ปรับขึ้น 6% จึงต้องลดหน้ากระดาษมัน)'],
        ['Part 4 · Strategy', 'Where will extra interactive interviews appear starting in July?', ['On the magazine’s online subscriber portal', 'Inside weekend newspaper bonus booklets', 'At regional bookstore display racks', 'On complimentary audio podcasts for non-subscribers'], 0, 'ตอบ On the magazine’s online subscriber portal (ย้ายบทสัมภาษณ์เสริมแบบอินเทอร์แอกทีฟขึ้นเว็บพอร์ทัลสมาชิกแทน)'],
      ]),

    p4(4, 'l4-p4-6', 'the following voicemail message', 'uk_m',
      'Hi Claire, this is Martin calling from Metro Courier Logistics on Wednesday at four-fifteen! Good news regarding those three heavy trade show display crates bound for Zurich: Swiss customs cleared Form 7B cleanly twenty minutes ago without charging extra inspection holds, so everything moves onto tomorrow’s morning freight plane right as planned! Quick head’s up though: since your Zurich hotel concierge closes freight doors nightly at six, I listed Booth Supervisor David Klein directly on the delivery phone line in case local vans encounter afternoon rush delays. Text me back if you prefer our driver dropping everything straight inside Convention Hall West instead!',
      null, [
        ['Part 4 · Purpose', 'Why is Martin leaving this voicemail message for Claire?', ['To confirm customs clearance and check local hotel delivery contacts', 'To request missing customs Form 7B invoices immediately', 'To report an overnight cargo flight cancellation to Zurich', 'To warn about unexpected freight inspection surcharges'], 0, 'ตอบ To confirm customs clearance and check local hotel delivery contacts (แจ้งข่าวดีว่าตู้แสดงสินค้าผ่านศุลกากรสวิสแล้ว พร้อมเช็กผู้รับปลายทางเผื่อรถติดตอนเย็น)'],
        ['Part 4 · Detail', 'Whose phone number did Martin place on the Zurich courier waybill?', ['Booth Supervisor David Klein’s', 'Claire’s personal hotel room number', 'Convention Hall West’s freight security desk', 'Swiss customs officer desk line'], 0, 'ตอบ Booth Supervisor David Klein’s (ใส่เบอร์ผู้ควบคุมบูธ David Klein ไว้สำรองเผื่อประตูขนของโรงแรมปิดตอน 6 โมงเย็น)'],
        ['Part 4 · Action', 'What should Claire text back if she prefers dropping crates straight at the convention venue?', ['Her preference for direct Convention Hall West delivery', 'Corrected weight labels for three display boxes', 'Authorization for paying Zurich courier overtime fees', 'Updated morning hotel check-in details'], 0, 'ตอบ Her preference for direct Convention Hall West delivery (ส่งข้อความกลับหากต้องการให้รถนำลังไปส่งที่ Convention Hall West โดยตรงแทนโรงแรม)'],
      ]),

    p4(4, 'l4-p4-7', 'the following employee orientation talk', 'ca_f',
      'Welcome aboard Metro Hospital’s Outpatient Pharmacy Desk, new hires! Before opening Dispensing Windows A and B, let’s run through our double-verify medication protocol—it takes just fifteen extra seconds per bag and protects every patient safely. Step one: scan the green printed prescription barcode first cleanly; never rely solely on patient last names since common surnames cross over frequently! Second, compare dosage tablets visually against screen photos before stapling white pickup slips closed. Finally, log refrigerated insulin bags immediately inside the blue door ledger so pickup couriers locate cold packs in seconds!',
      null, [
        ['Part 4 · Audience', 'Who is listening to this workplace instruction?', ['Newly hired pharmacy desk employees', 'Hospital delivery truck mechanics', 'Outpatient family clinic receptionists', 'Medical school equipment technicians'], 0, 'ตอบ Newly hired pharmacy desk employees (เป็นการปฐมนิเทศพนักงานใหม่ประจำเคาน์เตอร์จ่ายยาผู้ป่วยนอก)'],
        ['Part 4 · Procedure', 'Why must staff always scan prescription barcodes rather than checking names only?', ['Multiple patients often share identical surnames', 'White pickup bags conceal typed patient initials', 'Barcode ink fades quickly inside warm cabinets', 'Hospital insurance rules demand timestamp printouts'], 0, 'ตอบ Multiple patients often share identical surnames (ป้องกันความผิดพลาดกรณีคนไข้มีนามสกุลซ้ำกันหลายคน)'],
        ['Part 4 · Detail', 'Where should staff record cold-stored insulin orders right after packing?', ['Inside the ledger kept on the blue refrigerator door', 'On green adhesive tags taped to patient windows', 'Inside courier smartphone scanner databases', 'Across Dispensing Window B daily paper pads'], 0, 'ตอบ Inside the ledger kept on the blue refrigerator door (จดบันทึกลงสมุดบัญชีที่ประตูสีน้ำเงินทันทีเพื่อให้คนส่งหาเจอภายในไม่กี่วินาที)'],
      ]),

    p4(4, 'l4-p4-8', 'the following project update and chart', 'us_m2',
      'Good morning, Warehouse Systems Team! Pull up our Regional Packing Station Output slide before we finalize Tuesday staffing shifts. Looking closely across the four automated wrapping lines: Line North and Line West comfortably stayed ahead of our target twelve hundred cartons per hour cleanly all week! Meanwhile, peek down at Line South: output sank right down to seven hundred ninety cartons hourly—well below benchmark—mainly because stretch-film sensors kept pausing conveyors whenever cold plastic rolls tightened up. Tomorrow morning, Maintenance is installing pre-warmed film sleeves right alongside Line South so afternoon throughput snaps straight back above twelve hundred cleanly!',
      doc('table', 'Warehouse Packaging — Hourly Line Output', [['Target', '1,200 cartons/hr (Weekly Avg)']], [
        tbl(
          ['Wrapping Line', 'Shift Lead', 'Cartons / Hour', 'Target Gap'],
          [
            ['Line North', 'K. Patel', '1,340', '+140'],
            ['Line East', 'R. Santos', '1,180', '-20'],
            ['Line South', 'T. Nguyen', '790', '-410'],
            ['Line West', 'D. Kim', '1,265', '+65'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which Shift Lead oversees the severely underperforming wrapping line?', ['T. Nguyen', 'K. Patel', 'R. Santos', 'D. Kim'], 0, 'ตอบ T. Nguyen (ตารางแสดง Line South ทำยอดต่ำสุดที่ 790 กล่อง/ชม. ต่ำกว่าเป้าถึง 410 กล่อง โดยมีหัวหน้ากะคือ T. Nguyen)'],
        ['Part 4 · Cause', 'Why did Line South stop repeatedly throughout the week?', ['Stiff cold plastic stretch rolls triggered optical conveyor sensors', 'Pallet supply forklifts ran behind morning target speeds', 'Box taping motors overheated during double shifts', 'Label printers lost wireless connection with central scanners'], 0, 'ตอบ Stiff cold plastic stretch rolls triggered optical conveyor sensors (ม้วนฟิล์มยืดที่เย็นเกินไปตึงตัวทำให้เซนเซอร์สั่งหยุดสายพานบ่อยครั้ง)'],
        ['Part 4 · Solution', 'What hardware fix will Maintenance install tomorrow morning?', ['Heated pre-warming sleeves for plastic film rolls', 'Faster optical barcode readers above Line East', 'Auxiliary backup box motors from Line North', 'Automatic shift-lead dashboard alerts'], 0, 'ตอบ Heated pre-warming sleeves for plastic film rolls (ติดตั้งปลอกอุ่นม้วนฟิล์มให้ Line South เพื่อให้ได้ยอดทะลุเป้า 1,200 ตามเดิม)'],
      ]),

    p4(4, 'l4-p4-9', 'the following store manager briefing', 'uk_f',
      'Attention weekend floor associates at Lakeside Homewares—let’s take sixty seconds cleanly over this Weekend Clearance Markdown Sign schedule before doors unlock at nine! Starting today, Ceramic Dinnerware moves neatly into the middle tier at forty percent off automatically at checkout. Watch closely around Patio Lanterns though: Corporate sent last-minute email revisions moving Patio Lanterns up onto the deepest sixty-percent clearance rack, NOT the fifty-percent printed tag still sitting in your binder! Swap out the old fifty-percent table signs near Garden Exit right away so shoppers see accurate pricing from opening bell!',
      doc('table', 'Lakeside Homewares — Clearance Tag Schedule', [['Status', 'Original Draft Before Update']], [
        tbl(
          ['Department', 'Aisle Location', 'Markdown Tier', 'Sign Status'],
          [
            ['Linens & Throws', 'Aisle 2', '25% Off', 'Posted'],
            ['Ceramic Dinnerware', 'Aisle 5', '40% Off', 'Posted'],
            ['Patio Lanterns', 'Garden Exit', '50% Off (Outdated)', 'Needs Swap'],
            ['Copper Cookware', 'Aisle 8', '30% Off', 'Posted'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. What final percentage discount applies to Patio Lanterns today?', ['60% Off', '50% Off', '40% Off', '30% Off'], 0, 'ตอบ 60% Off (ตารางเดิมพิมพ์ไว้ 50% Off แต่ผู้จัดการประกาศแก้ไขด่วนจากบริษัทให้ปรับโคมไฟสวนเป็นลด 60%)'],
        ['Part 4 · Instruction', 'What immediate task must associates finish before nine A.M.?', ['Replace outdated markdown table signs beside Garden Exit', 'Move Copper Cookware displays closer to Aisle 2', 'Re-price Ceramic Dinnerware stickers individually by hand', 'Recalculate checkout scanner codes for Linens & Throws'], 0, 'ตอบ Replace outdated markdown table signs beside Garden Exit (รีบเปลี่ยนป้ายลดราคาเดิม 50% ตรงทางออกโซนสวนก่อนประตูเปิด 9 โมงเช้า)'],
        ['Part 4 · Detail', 'According to the talk, how will the Ceramic Dinnerware discount register for buyers?', ['Automatically at checkout counters', 'Through printed weekend newspaper coupons', 'Upon asking Aisle 5 supervisors for stickers', 'Only with Lakeside Homewares rewards cards'], 0, 'ตอบ Automatically at checkout counters (ระบบคิดเงินจะหักส่วนลด 40% ของชุดจานเซรามิกให้อัตโนมัติที่แคชเชียร์)'],
      ]),

    p4(4, 'l4-p4-10', 'the following conference session notice', 'au_m',
      'Good morning, TechConnect attendees! Before our afternoon tracks resume cleanly across Building B, check this Venue Schedule Change board carefully! Remember originally Professor Elena Cho’s Cybersecurity Lab sat inside Auditorium Three at one-fifteen—well, her interactive hardware demo requires specialized fiber-optic network jacks installed solely inside Theater B on the ground floor! Meanwhile, Startup Funding Pitch remains comfortably inside Room 204 right on time. If you signed up for Elena Cho’s hands-on workshop, simply head straight downstairs past Registration toward Theater B cleanly before doors close at one-ten!',
      doc('table', 'TechConnect Summit — Afternoon Session Board', [['Hours', '1:15 P.M. – 2:45 P.M.']], [
        tbl(
          ['Session Title', 'Speaker', 'Listed Room', 'Capacity'],
          [
            ['Cloud API Scaling', 'H. Takahashi', 'Hall A', '220 Seats'],
            ['Cybersecurity Lab', 'E. Cho', 'Auditorium 3 (Moved)', '140 Seats'],
            ['Startup Funding Pitch', 'L. Mendez', 'Room 204', '85 Seats'],
            ['UX Accessibility Audit', 'N. Brooks', 'Room 208', '70 Seats'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which session is moving from Auditorium 3 into Theater B?', ['Cybersecurity Lab led by E. Cho', 'Cloud API Scaling led by H. Takahashi', 'Startup Funding Pitch led by L. Mendez', 'UX Accessibility Audit led by N. Brooks'], 0, 'ตอบ Cybersecurity Lab led by E. Cho (ตารางแสดงคลาส Cybersecurity Lab ของ E. Cho เดิมอยู่ออดิทอเรียม 3 และถูกย้ายไป Theater B)'],
        ['Part 4 · Reason', 'Why did organizers relocate the session downstairs?', ['Only Theater B features dedicated fiber-optic demo ports', 'Registration demand exceeded one hundred forty seats cleanly', 'Auditorium Three experienced HVAC ventilation noise', 'Afternoon speakers requested closer proximity to Startup Funding Pitch'], 0, 'ตอบ Only Theater B features dedicated fiber-optic demo ports (การสาธิตฮาร์ดแวร์จำเป็นต้องใช้ช่องเสียบไฟเบอร์ออปติกที่มีเฉพาะใน Theater B ชั้นล่าง)'],
        ['Part 4 · Time', 'What deadline must attendees watch so they enter Theater B before closing?', ['1:10 P.M.', '1:15 P.M.', '2:45 P.M.', '12:45 P.M.'], 0, 'ตอบ 1:10 P.M. (ผู้พูดย้ำให้ลงไป Theater B ก่อนประตูห้องจะปิดเวลา 13:10 น.)'],
      ]),

    // ==================== SET 5 ====================
    p1(5, 'l5-p1-1', 'us_f', [
      'Passengers are handing paper tickets to a bus driver beside a terminal.',
      'A woman is typing on a laptop seated beside tall glass windows.',
      'Several computer monitors are being loaded into moving cartons.',
      'Two colleagues are erasing diagrams off a mounted glass whiteboard.',
    ], 1, 'ตอบ A woman is typing on a laptop seated beside tall glass windows. (ผู้หญิงกำลังพิมพ์งานบนแล็ปท็อปตรงที่นั่งริมหน้าต่างกระจกบานใหญ่)'),
    p1(5, 'l5-p1-2', 'uk_m', [
      'Workers are assembling scaffolding outside a brick facade.',
      'Delivery vans are parked head-first into open loading bays.',
      'A technician is calibrating optical gauges inside a bright testing bay.',
      'Protective tarps are draped across unfinished timber roof rafters.',
    ], 2, 'ตอบ A technician is calibrating optical gauges inside a bright testing bay. (ช่างเทคนิคกำลังปรับเทียบมาตรวัดแสงภายในห้องทดสอบที่สว่าง)'),
    p1(5, 'l5-p1-3', 'au_m', [
      'A barista is steaming milk beside an espresso counter.',
      'Empty luggage trolleys are stacked along a tiled hotel lobby.',
      'Diners are lining up behind a stainless-steel buffet station.',
      'A florist is wrapping cut stems inside brown kraft sheets.',
    ], 0, 'ตอบ A barista is steaming milk beside an espresso counter. (บาริสต้ากำลังสตีมนมอยู่ข้างเคาน์เตอร์เครื่องชงเอสเพรสโซ)'),
    p1(5, 'l5-p1-4', 'ca_f', [
      'A truck driver is fastening cargo straps over flat steel sheets.',
      'Store clerks are arranging folded towels along lower shelving units.',
      'Books have been tied together inside thick shipping twine.',
      'A librarian is scanning returned hardcovers at a front kiosk.',
    ], 3, 'ตอบ A librarian is scanning returned hardcovers at a front kiosk. (บรรณารักษ์กำลังสแกนหนังสือปกแข็งที่นำมาคืนตรงจุดบริการด้านหน้า)'),
    p1(5, 'l5-p1-5', 'us_m2', [
      'Hikers are pausing along a wooden footbridge to photograph water birds.',
      'Canoes have been pulled sideways onto tall marshland reeds.',
      'A weathered wooden boardwalk with timber railings winds over green wetland reeds.',
      'Workers are hammering replacement planks along a lakeside pier.',
    ], 2, 'ตอบ A weathered wooden boardwalk with timber railings winds over green wetland reeds. (ภาพจริงแสดงทางเดินไม้เก่าที่มีราวกันตกทอดคดเคี้ยวผ่านพุ่มกกสีเขียวและน้ำนิ่ง ไม่มีคนอยู่ในภาพ)'),
    p1(5, 'l5-p1-6', 'uk_f2', [
      'Waiters are wiping outdoor glass tables before opening.',
      'Two mechanics are inspecting the open engine hood of a service van.',
      'Drivers are waiting along painted taxi pickup lanes.',
      'Tires have been stacked neatly behind concrete warehouse pillars.',
    ], 1, 'ตอบ Two mechanics are inspecting the open engine hood of a service van. (ช่างยนต์สองคนกำลังก้มตรวจเช็กเครื่องยนต์ใต้ฝากระโปรงหน้าของรถตู้บริการที่เปิดไว้)'),

    // Set 5 Part 2 (25 Qs)
    p2(5, 'l5-p2-1', 'uk_f', 'us_m', 'Where is Ms. Alvarez attending this afternoon’s supplier briefing?', ['Upstairs inside Executive Boardroom Four.', 'Mostly regarding aluminum tariff clauses.', 'Around three-thirty after lunch finishes.'], 0, 'ตอบ Upstairs inside Executive Boardroom Four. (ถามสถานที่ Where ตอบห้องประชุมผู้บริหาร 4 ชั้นบน)'),
    p2(5, 'l5-p2-2', 'us_m', 'ca_f', 'Who programmed the automated invoice reminder script?', ['Last Tuesday before closing.', 'Software intern Trevor built it during April.', 'Every overdue bill gets flagged automatically.'], 1, 'ตอบ Software intern Trevor built it during April. (ถามหาผู้สร้าง Who ตอบนักศึกษาฝึกงานซอฟต์แวร์ Trevor เป็นคนเขียน)'),
    p2(5, 'l5-p2-3', 'au_f', 'uk_m', 'When will updated safety gloves arrive for Plant Three crews?', ['Next Monday’s early morning pallet truck.', 'Because synthetic rubber grips better.', 'On the bottom rack inside Supply Closet A.'], 0, 'ตอบ Next Monday’s early morning pallet truck. (ถามกำหนดมาถึง When ตอบรถพาเลตเช้าวันจันทร์หน้า)'),
    p2(5, 'l5-p2-4', 'ca_m', 'us_f2', 'Would you rather host the product webinar live or pre-record the slides?', ['The marketing coordinator booked Studio B.', 'Yes, nearly four hundred clients registered.', 'Pre-recording avoids audio glitches during live Q&A.'], 2, 'ตอบ Pre-recording avoids audio glitches during live Q&A. (ถามทางเลือก A or B ตอบเลือกอัดล่วงหน้าพร้อมอธิบายเหตุผล)'),
    p2(5, 'l5-p2-5', 'us_f2', 'au_m', 'Why wasn’t the west parking gate repaired before Friday morning?', ['Just thirty staff visitor permits total.', 'The motorized hinge assembly shipped late from Detroit.', 'Turn right past the main brick security booth.'], 1, 'ตอบ The motorized hinge assembly shipped late from Detroit. (ถามเหตุผล Why ตอบชุดบานพับมอเตอร์ส่งมาจากดีทรอยต์ล่าช้า)'),
    p2(5, 'l5-p2-6', 'uk_m', 'ca_f', 'Aren’t you flying back from Toronto right after Wednesday’s board dinner?', ['Actually, I booked an early Thursday morning flight instead.', 'At Pearson Terminal Three near Gate C12.', 'Board agendas normally circulate four days prior.'], 0, 'ตอบ Actually, I booked an early Thursday morning flight instead. (ถามย้ำไม่ได้บินคืนวันพุธหรือ ตอบแก้ข้อเท็จจริงว่าจองไฟลต์เช้าวันพฤหัสบดีแทน)'),
    p2(5, 'l5-p2-7', 'us_m2', 'uk_f2', 'How many extra banquet tables did the catering manager reserve?', ['Usually around twelve dollars per rental linen.', 'She added six long rectangular ones this morning.', 'Wait until Reception confirms final RSVP counts.'], 1, 'ตอบ She added six long rectangular ones this morning. (ถามจำนวนโต๊ะ How many ตอบเพิ่มโต๊ะยาวทรงสี่เหลี่ยมอีก 6 ตัว)'),
    p2(5, 'l5-p2-8', 'au_m', 'us_f', 'Could you review these Korean website captions before Legal locks copy?', ['Sure—drop the slide link into my chat window.', 'About fifteen international trade offices total.', 'Yes, Legal signed last summer’s handbook.'], 0, 'ตอบ Sure—drop the slide link into my chat window. (ตอบรับคำขอให้ช่วยตรวจอย่างยินดี)'),
    p2(5, 'l5-p2-9', 'ca_f', 'uk_m', 'The conference microphone battery keeps cutting out mid-sentence.', ['Only twenty-five attendees joined remotely.', 'Here—swap in the spare rechargeable pack from the podium tray.', 'Inside Auditorium B every Tuesday.'], 1, 'ตอบ Here—swap in the spare rechargeable pack from the podium tray. (แจ้งปัญหาแบตไมค์ขาดๆ หายๆ -> ยื่นแพ็กสำรองบนถาดโพเดียมให้เปลี่ยน)'),
    p2(5, 'l5-p2-10', 'us_f', 'au_m', 'Which courier service promises guaranteed overnight delivery to Anchorage?', ['SkyFreight Express runs an eleven A.M. cold-pack cutoff.', 'Because winter fog delayed coastal barges.', 'Pack the foam cooler securely inside tape.'], 0, 'ตอบ SkyFreight Express runs an eleven A.M. cold-pack cutoff. (ถามเลือกผู้ให้บริการ Which ตอบชื่อบริษัท SkyFreight Express พร้อมเวลาตัดรอบ)'),
    p2(5, 'l5-p2-11', 'uk_f2', 'ca_m', 'How long has Nadia managed our flagship downtown retail store?', ['Almost six years since our initial street launch.', 'Across from Metro Station Exit Four.', 'Sixty-five full- and part-time associates.'], 0, 'ตอบ Almost six years since our initial street launch. (ถามระยะเวลาดำรงตำแหน่ง How long ตอบเกือบ 6 ปีตั้งแต่เปิดตัวสาขา)'),
    p2(5, 'l5-p2-12', 'us_m', 'uk_f', 'Should we renew our printing toner lease for one year or two?', ['A two-year agreement locks down our current low rate.', 'Yes, cyan cartridges shipped yesterday morning.', 'In the basement stationery storage room.'], 0, 'ตอบ A two-year agreement locks down our current low rate. (ถามเลือกสัญญา 1 หรือ 2 ปี ตอบเลือก 2 ปีเพื่อล็อกราคาถูกไว้)'),
    p2(5, 'l5-p2-13', 'au_f', 'us_m2', 'Where can visiting consultants validate their downtown garage tickets?', ['Press the silver kiosk button beside Reception.', 'Two hours complimentary per visiting partner.', 'Because street meters restrict commercial vans.'], 0, 'ตอบ Press the silver kiosk button beside Reception. (ถามสถานที่สแตมป์บัตรจอดรถ Where ตอบกดที่ตู้สีเงินข้างเคาน์เตอร์ต้อนรับ)'),
    p2(5, 'l5-p2-14', 'ca_m', 'au_f', 'Why don’t we split Tuesday’s orientation tour into two smaller groups?', ['Wait until noon cafeteria rushes finish cleanly.', 'That makes hallway demonstrations much easier to hear!', 'Twelve new technicians joined Logistics.'], 1, 'ตอบ That makes hallway demonstrations much easier to hear! (ตอบเห็นด้วยกับข้อเสนอแนะ Why don’t we พร้อมบอกข้อดี)'),
    p2(5, 'l5-p2-15', 'uk_m', 'us_f', 'Didn’t Finance clear your travel reimbursement expense report yet?', ['Payroll said international wire transfers settle this Friday.', 'Only coach airfare plus taxi receipts.', 'Chicago hosts three regional banks downtown.'], 0, 'ตอบ Payroll said international wire transfers settle this Friday. (ตอบเลี่ยงแจ้งความคืบหน้าว่าการเงินระบุจะโอนวันศุกร์นี้)'),
    p2(5, 'l5-p2-16', 'us_f2', 'ca_m', 'How much deposit does Hillside Catering require to hold October 12?', ['About twenty-five percent of the estimated tray total.', 'Wait outside the front kitchen gate.', 'Vegetarian sandwiches cost slightly less.'], 0, 'ตอบ About twenty-five percent of the estimated tray total. (ถามจำนวนเงินมัดจำ How much ตอบ 25% ของยอดประเมินทั้งหมด)'),
    p2(5, 'l5-p2-17', 'au_m', 'uk_f', 'You noticed the hallway elevator inspection certificate expired Friday, right?', ['Yes—Building Facilities already scheduled the city inspector for Monday morning.', 'Down to the underground loading ramp.', 'Twelve floors high from street reception.'], 0, 'ตอบ Yes—Building Facilities already scheduled the city inspector for Monday morning. (รับทราบและแจ้งว่าฝ่ายอาคารนัดเจ้าหน้าที่มาตรวจเช้าวันจันทร์แล้ว)'),
    p2(5, 'l5-p2-18', 'ca_f', 'us_m', 'Who handles software seat transfers when a team member leaves?', ['Open an onboarding ticket with IT Asset Desk—they reassign keys cleanly.', 'Usually on the last working Friday.', 'Two annual licenses cover cloud backups.'], 0, 'ตอบ Open an onboarding ticket with IT Asset Desk—they reassign keys cleanly. (ถามผู้รับผิดชอบ Who ตอบบอกช่องทางไปที่ IT Asset Desk)'),
    p2(5, 'l5-p2-19', 'uk_f', 'au_m', 'When is the graphic designer presenting initial packaging mockups?', ['Wednesday morning right after our nine o’clock stand-up.', 'Because matte silver foil scratched cleanly.', 'Three cardboard prototypes sitting near Press Two.'], 0, 'ตอบ Wednesday morning right after our nine o’clock stand-up. (ถามเวลาพรีเซนต์ When ตอบเช้าวันพุธหลังประชุมสแตนด์อัป 9 โมง)'),
    p2(5, 'l5-p2-20', 'us_m2', 'ca_f', 'Do we still keep blank courier shipping labels inside Cabinet Two?', ['We ran low yesterday—check the bottom carton beside Mail Desk.', 'Priority parcels ship by six P.M.', 'Only domestic ground postcodes need stickers.'], 0, 'ตอบ We ran low yesterday—check the bottom carton beside Mail Desk. (ตอบตรงประเด็นว่าของในตู้ 2 ใกล้หมด ให้ไปดูในลังล่างข้างโต๊ะไปรษณีย์)'),
    p2(5, 'l5-p2-21', 'au_f', 'uk_m', 'Can you ask Victor whether our booth power drop covers two espresso brewers?', ['Sure, I’ll catch him right after morning site walk.', 'Each brewer weighs forty pounds empty.', 'Along Aisle Nine near the north entrance.'], 0, 'ตอบ Sure, I’ll catch him right after morning site walk. (ตอบรับช่วยถามให้หลังเดินตรวจหน้างานช่วงเช้า)'),
    p2(5, 'l5-p2-22', 'ca_m', 'us_f', 'What time does the evening shuttle loop stop running to North Station?', ['The final bus departs Courtyard Stop at ten-fifteen.', 'Nearly twelve minutes along Harbor Road.', 'Yes, show your employee lanyard when boarding.'], 0, 'ตอบ The final bus departs Courtyard Stop at ten-fifteen. (ถามเวลารถเที่ยวสุดท้าย What time ตอบ 22:15 น.)'),
    p2(5, 'l5-p2-23', 'uk_f2', 'us_m2', 'Customer Support logged twelve duplicate refund emails from this morning’s billing batch.', ['Wait—our payment gateway might have retried failed timeouts; let’s pause auto-emails now.', 'Inside Accounting Suite 204.', 'Twelve monthly software subscribers upgraded tiers.'], 0, 'ตอบ Wait—our payment gateway might have retried failed timeouts; let’s pause auto-emails now. (วิเคราะห์สาเหตุและสั่งหยุดส่งอีเมลซ้ำทันที)'),
    p2(5, 'l5-p2-24', 'us_f', 'uk_m', 'How far ahead should department leads submit spring travel budgets?', ['At least four weeks prior to conference booking dates.', 'Domestic airfare plus hotel reimbursement.', 'Yes, Executive Finance tracks every department line.'], 0, 'ตอบ At least four weeks prior to conference booking dates. (ถามต้องส่งล่วงหน้ากี่วัน How far ahead ตอบอย่างน้อย 4 สัปดาห์ก่อนวันจอง)'),
    p2(5, 'l5-p2-25', 'au_m', 'ca_f', 'Why did Marketing switch this brochure font to larger bold subheadings?', ['Trade show buyers complained tiny gray text felt hard to read under bright booth spotlights.', 'Around five thousand trifold sheets printed.', 'Check the bottom portfolio drawer.'], 0, 'ตอบ Trade show buyers complained tiny gray text felt hard to read under bright booth spotlights. (ถามเหตุผลเปลี่ยนฟอนต์ Why ตอบลูกค้าบ่นตัวเล็กอ่านยากใต้ไฟบูธ)'),

    // Set 5 Part 3 (13 Convs × 3 Qs = 39 Qs; Convs 11-13 include Graphics)
    p3(5, 'l5-p3-1', [
      ['Woman', 'uk_f', 'Ken, have the rooftop solar inverter panels at Warehouse East started feeding power into our evening shift lights yet?'],
      ['Man', 'us_m', 'Almost—all thirty-six roof racks are bolted tight and wired, yet Municipal Power Inspector Ruiz pushed final grid hookup checks back to Wednesday afternoon.'],
      ['Woman', 'uk_f', 'Got it. Meanwhile, can warehouse loaders keep charging overnight forklifts using utility lines without tripping older basement breakers?'],
      ['Man', 'us_m', 'Easily—Foreman Lee staggered charger timers so half plug in at eight and half kick on at midnight cleanly!'],
    ], null, [
      ['Part 3 · Detail', 'Why aren’t the rooftop solar panels powering the warehouse yet?', ['A city utility inspection has not taken place yet', 'Roof panel brackets are still awaiting delivery', 'Basement circuit breakers sustained weather damage', 'Evening warehouse shifts reduced electrical demand'], 0, 'ตอบ A city utility inspection has not taken place yet (แผงติดตั้งเสร็จแล้ว แต่รอผู้ตรวจการไฟฟ้าเทศบาลมาตรวจเชื่อมระบบวันพุธบ่าย)'],
      ['Part 3 · Detail', 'What concern does the woman raise about temporary night operations?', ['Overloading old electrical circuits while charging forklifts', 'Shortening evening forklift loading hours before Wednesday', 'Running out of sunlight during early winter shifts', 'Delaying solar wiring installation past rooftop inspections'], 0, 'ตอบ Overloading old electrical circuits while charging forklifts (กังวลว่าการชาร์จรถโฟล์กลิฟต์พร้อมกันจะทำให้เบรกเกอร์เก่าชั้นใต้ดินตัด)'],
      ['Part 3 · Solution', 'How did Foreman Lee resolve the forklift charging load?', ['By staggering charger start times between eight P.M. and midnight', 'By rotating spare batteries manually across morning docks', 'By routing temporary diesel generators into Basement East', 'By halving forklift shifts until Municipal Power Inspector Ruiz finishes'], 0, 'ตอบ By staggering charger start times between eight P.M. and midnight (ตั้งเวลาสลับชาร์จเป็นสองรอบเวลา 2 ทุ่มและเที่ยงคืน)'],
    ]),

    p3(5, 'l5-p3-2', [
      ['Man', 'ca_m', 'Good morning! My badge number is E-209, and I dropped off my cracked company tablet at IT Repair Desk yesterday noon.'],
      ['Woman', 'us_f2', 'Let me pull up Ticket 514—ah, good timing! Technician Sam replaced the digitizer glass completely and calibrated stylus touch cleanly an hour ago.'],
      ['Man', 'ca_m', 'Awesome! Did my offline architectural field sketches stay intact on local storage?'],
      ['Woman', 'us_f2', 'Yes—zero factory wipe was needed! Wait one second while I log your pickup signature and grab your silicone bumper sleeve from Bin Three.'],
    ], null, [
      ['Part 3 · Location', 'Where is the man likely speaking right now?', ['At a corporate IT repair desk', 'Inside an electronics warranty post office', 'At an architectural drafting blueprint shop', 'At a downtown retail phone booth'], 0, 'ตอบ At a corporate IT repair desk (นำแท็บเล็ตบริษัทมาซ่อมที่โต๊ะ IT Repair Desk และยื่นรหัสบัตรพนักงาน)'],
      ['Part 3 · Relief', 'What reassuring news does the technician desk provide about the tablet?', ['Saved architectural field drawings remained undamaged on storage', 'New warranty styling sleeves fit every screen edge cleanly', 'IT absorbed the replacement cost cleanly without manager chargebacks', 'Tablet battery life doubled following screen glass replacement'], 0, 'ตอบ Saved architectural field drawings remained undamaged on storage (ไม่ต้องล้างเครื่อง ไฟล์สเก็ตช์งานยังอยู่ครบ)'],
      ['Part 3 · Action', 'What will the woman do before handing over the tablet?', ['Record a checkout signature and fetch a protective sleeve', 'Transfer field sketches onto a cloud backup drive', 'Call Technician Sam to adjust stylus sensitivity', 'Inspect the stylus tip for screen scratches'], 0, 'ตอบ Record a checkout signature and fetch a protective sleeve (ลงบันทึกเซ็นรับของแล้วเดินไปหยิบเคสกันกระแทกในช่อง 3)'],
    ]),

    p3(5, 'l5-p3-3', [
      ['Woman', 'au_f', 'Liam, thanks for hosting our client tasting dinner Thursday! Every executive loved that roasted beet salad—did we keep ingredient costs comfortably under twenty-two dollars per guest?'],
      ['Man', 'uk_m', 'Right at nineteen-eighty per head! Actually, Chef Rosa saved four hundred dollars just by sourcing golden beets directly from Valley Creek Co-op instead of specialty food wholesalers.'],
      ['Woman', 'au_f', 'Smart budgeting! Let’s ask Valley Creek Co-op whether they supply winter root greens cleanly all through November’s investor gala as well.'],
      ['Man', 'uk_m', 'Already on it—Rosa’s meeting their orchard buyer Friday morning to price multi-crate weekly drops!'],
    ], null, [
      ['Part 3 · Detail', 'How did Thursday’s catering budget compare against expectations?', ['Per-guest ingredient expense stayed below the target cap', 'Tasting dinner salads cost two dollars above plan', 'Wholesaler surcharges pushed food costs above twenty-two dollars', 'Executive guests reduced appetizer quantities cleanly'], 0, 'ตอบ Per-guest ingredient expense stayed below the target cap (ตั้งเป้าไม่เกิน 22 ดอลลาร์ต่อหัว แต่ทำได้จริงแค่ 19.80 ดอลลาร์)'],
      ['Part 3 · Reason', 'How did Chef Rosa achieve meaningful food savings?', ['By purchasing seasonal produce directly from a local growers co-op', 'By omitting expensive greens from guest salad courses', 'By substituting frozen beets ordered through wholesalers', 'By trimming dinner banquet guest seatings cleanly'], 0, 'ตอบ By purchasing seasonal produce directly from a local growers co-op (ซื้อหัวบีตตรงจากสหกรณ์ท้องถิ่น Valley Creek Co-op แทนผู้ค้าส่งใหญ่)'],
      ['Part 3 · Plan', 'What will Chef Rosa do Friday morning?', ['Meet a farm representative to negotiate November multi-crate rates', 'Deliver leftover produce trays toward city investor luncheons', 'Finalize menu cards for winter tasting galas', 'Verify wholesale food inspection forms cleanly'], 0, 'ตอบ Meet a farm representative to negotiate November multi-crate rates (นัดเจอกับฝ่ายขายของไร่เช้าวันศุกร์เพื่อคุยราคาส่งรายสัปดาห์เดือน พ.ย.)'],
    ]),

    p3(5, 'l5-p3-4', [
      ['Man', 'us_m2', 'Hi Claire, I heard the Municipal Art Archive just scanned fifteen hundred nineteenth-century ferry posters onto public servers!'],
      ['Woman1', 'ca_f', 'Right—historic boat timetables, ticket engravings, everything! Wait, are high-resolution print TIFFs open to community magazines cleanly without licensing fees?'],
      ['Man', 'us_m2', 'Yes! Wait—let me double-check with Archivist Dev right beside me whether local blogs require credit caption lines underneath every photo.'],
      ['Man2', 'uk_m', 'Dev here: public domain posters ship completely royalty-free—just insert a tiny line citing "Metro Maritime Archive" beneath published prints cleanly!'],
    ], null, [
      ['Part 3 · Topic', 'What recent accomplishment are the speakers discussing?', ['Digitization of historical transit posters into an open archive', 'Launching a paid photography portal for municipal museums', 'Printing vintage ferry timetable cards for tourists', 'Framing nineteenth-century engravings inside city halls'], 0, 'ตอบ Digitization of historical transit posters into an open archive (สแกนโปสเตอร์เรือเฟอร์รีโบราณ 1,500 ภาพขึ้นระบบสาธารณะ)'],
      ['Part 3 · Question', 'What usage detail does the woman want confirmed before publishing?', ['Whether community magazines pay copyright license charges', 'How fast high-resolution TIFF downloads finish on home Wi-Fi', 'Whether archivist Dev supplies antique wooden frame borders', 'Which timetable route boats operated fastest downtown'], 0, 'ตอบ Whether community magazines pay copyright license charges (อยากรู้ว่านิตยสารชุมชนนำไฟล์ความละเอียดสูงไปใช้ได้ฟรีโดยไม่เสียค่าลิขสิทธิ์หรือไม่)'],
      ['Part 3 · Rule', 'According to Dev, what sole requirement applies to using archive images?', ['Including a brief attribution credit naming the archive', 'Emailing high-res layout proofs prior to magazine printing', 'Applying a transparent watermark across engraved corners', 'Ordering physical copy books directly from city offices'], 0, 'ตอบ Including a brief attribution credit naming the archive (ใช้ได้ฟรีโดยใส่ข้อความให้เครดิตสั้นๆ ว่า "Metro Maritime Archive" ใต้ภาพ)'],
    ]),

    p3(5, 'l5-p3-5', [
      ['Woman', 'us_f', 'Eric, our customer live-demo webinar on Friday drew two hundred sixty sales directors—over triple last quarter’s turnout!'],
      ['Man', 'au_m', 'Incredible jump! Wait—did our standard conferencing license cap simultaneous viewers at two hundred fifty seats?'],
      ['Woman', 'us_f', 'Good catch! I upgraded our webinar tier cleanly this morning up to five hundred seats, AND turned on auto-generated cloud replay links so anyone joining late doesn’t hit locked virtual doors!'],
      ['Man', 'au_m', 'Relief! Let’s email registered directors that cloud replay link proactively right at noon so international time zones catch every chart cleanly.'],
    ], null, [
      ['Part 3 · Detail', 'Why does the man initially express concern after hearing Friday’s signup total?', ['Standard software subscription limits might block excess attendees', 'Audio latency grows sharply above two hundred webcams', 'International time zones conflict cleanly against noon demos', 'Marketing sales directors prefer smaller group sessions'], 0, 'ตอบ Standard software subscription limits might block excess attendees (กังวลว่าแพ็กเกจมาตรฐานจะจำกัดผู้ชมพร้อมกันแค่ 250 คน)'],
      ['Part 3 · Solution', 'How had the woman already resolved the capacity issue earlier?', ['By bumping the subscription plan ceiling to five hundred seats', 'By splitting regional buyers across two identical morning sessions', 'By streaming audio clips exclusively through telephone bridges', 'By removing automated screen sharing for late entrants'], 0, 'ตอบ By bumping the subscription plan ceiling to five hundred seats (อัปเกรดแพ็กเกจขึ้นเป็น 500 ที่นั่งเรียบร้อยแล้วเมื่อเช้า)'],
      ['Part 3 · Action', 'What message will the team send registered attendees at noon?', ['A cloud recording link enabling convenient later viewing', 'Emergency phone dial-in passwords for overflowing rooms', 'Discount renewal coupons for quarterly accounts', 'Survey polls collecting sales director feedback'], 0, 'ตอบ A cloud recording link enabling convenient later viewing (ส่งลิงก์ดูย้อนหลังบนคลาวด์ให้ผู้ลงทะเบียนไว้ตอนเที่ยง)'],
    ]),

    p3(5, 'l5-p3-6', [
      ['Man', 'uk_m', 'Excuse me, I’m picking up three custom acoustic curtains under Clearwater Theater—invoice number CT-88.'],
      ['Woman', 'us_f2', 'Welcome back! Let’s check our Finishing Rack—yes, heavy navy velvet drapes finished hemming cleanly this morning! Wait, are you hanging them straight onto ceiling I-beam tracks?'],
      ['Man', 'uk_m', 'Exact same brass glider hooks our backstage crew already installed last summer—just check whether center eyelets sit sixteen inches apart cleanly!'],
      ['Woman', 'us_f2', 'They sure do—tailor Priya measured sixteen-inch centers across all three panels plus sealed matching spare steel hooks inside Pocket Bag B.'],
    ], null, [
      ['Part 3 · Purpose', 'Why is the man visiting the upholstery workshop?', ['To collect custom sewn acoustic curtains for a theater', 'To schedule seamstress repairs on ripped stage velvet', 'To match summer curtain brass trim dyes', 'To purchase ceiling steel I-beam mounting tracks'], 0, 'ตอบ To collect custom sewn acoustic curtains for a theater (มารับผ้าม่านกันเสียงสั่งตัดสำหรับโรงละคร Clearwater)'],
      ['Part 3 · Detail', 'What spacing measurement does the man verify?', ['Sixteen-inch gaps between top suspension eyelets', 'Eighty-eight-inch drop length to stage floorboards', 'Navy dye consistency across three thick hems', 'Weight clearance along overhead wooden rods'], 0, 'ตอบ Sixteen-inch gaps between top suspension eyelets (ตรวจระยะห่างห่วงตาไก่ตรงกลางให้ห่างกัน 16 นิ้วพอดี)'],
      ['Part 3 · Detail', 'What bonus hardware did tailor Priya pack inside Pocket Bag B?', ['Spare steel hanging hooks', 'Matched velvet seam tape', 'Extra brass wall tiebacks', 'Measuring rule templates'], 0, 'ตอบ Spare steel hanging hooks (แถมตะขอเหล็กสำรองใส่ไว้ในถุง Pocket Bag B เรียบร้อย)'],
    ]),

    p3(5, 'l5-p3-7', [
      ['Woman', 'ca_f', 'David, why are customer satisfaction ratings on our Austin branch home-cleaning crew trailing every other city by twelve points?'],
      ['Man', 'us_m', 'Wait—pull up comment tags! Almost every complaint mentions cleaners rushing out missing kitchen pantry baseboards and window sills whenever afternoon highway traffic stalls route shifts cleanly.'],
      ['Woman', 'ca_f', 'Look—our Austin dispatch software still plans twenty-minute drive buffers across thirty-mile ring roads!'],
      ['Man', 'us_m', 'Spot on. Expanding drive windows to thirty-five minutes trims one daily appointment per van yet saves repeat cleanings and overtime refunds all week!'],
    ], null, [
      ['Part 3 · Problem', 'What issue is pulling down Austin branch customer ratings?', ['Staff rush kitchen edges and sills due to cramped afternoon transit windows', 'Austin dispatch cleaners arrive unprepared without floor cleaners', 'Customers cancel afternoon appointments because fees rose steeply', 'Green window sprays left soapy residue streaks across counters'], 0, 'ตอบ Staff rush kitchen edges and sills due to cramped afternoon transit windows (รถติดตอนบ่ายทำให้เวลาเดินทางไม่พอ พนักงานจึงต้องรีบทำจนพลาดจุดเล็กๆ)'],
      ['Part 3 · Cause', 'What software setting triggered the unrealistic schedules?', ['Routing templates allotted too few travel minutes between distant jobs', 'Automated map pins pointed crews onto closed toll loops', 'Weekend shift apps failed to track kitchen pantry notes', 'Cleaning supply kits omitted window cloths'], 0, 'ตอบ Routing templates allotted too few travel minutes between distant jobs (ซอฟต์แวร์จัดคิวให้เวลาขับรถแค่ 20 นาทีทั้งที่ระยะทางไกลและรถติด)'],
      ['Part 3 · Meaning', 'What trade-off does the man defend when he says, "saves repeat cleanings and overtime refunds"?', ['Adding commute margin reduces complaints and costly redo trips despite one fewer daily slot', 'Refunding delayed bookings eliminates weekend schedule stress cleanly', 'Hiring backup vans raises route revenue immediately', 'Charging distance fees encourages downtown scheduling cleanly'], 0, 'ตอบ Adding commute margin reduces complaints and costly redo trips despite one fewer daily slot (ยอมลดงานลงวันละ 1 คิวเพื่อเพิ่มเวลาเดินทางเป็น 35 นาที จะคุ้มกว่าเสียเงินจ้างทำซ้ำและคืนเงินลูกค้า)'],
    ]),

    p3(5, 'l5-p3-8', [
      ['Man', 'au_m', 'Hi Maya! Did NorthPort Freight forward our signed sea bill-of-lading ahead of tomorrow’s cotton textile arrival?'],
      ['Woman', 'uk_f2', 'Courier Envelope just landed on Customs Desk two minutes ago—Wait, why does Container 44 list weight as eleven tons instead of our warehouse count of nine?'],
      ['Man', 'au_m', 'Hang on—did our mill pack complimentary sample bolts inside wooden pallets on Container 44 cleanly without adjusting invoice pages?'],
      ['Woman', 'uk_f2', 'Wait—if port tariff inspectors spot two undeclared tons at Dock Gate B, clearance stalls three days! Fax our mill manager right now for an amended packing list before noon cutoffs cleanly!'],
    ], null, [
      ['Part 3 · Problem', 'What discrepancy does the woman catch on Container 44’s shipping paperwork?', ['Listed cargo weight exceeds warehouse inventory counts by two tons', 'Original bill-of-lading sheets omitted cotton fabric codes', 'Delivery dates printed incorrectly for Dock Gate B arrivals', 'Wooden crate counts mismatched courier pickup stamps'], 0, 'ตอบ Listed cargo weight exceeds warehouse inventory counts by two tons (ใบตราส่งระบุน้ำหนัก 11 ตัน ทั้งที่โกดังนับไว้ 9 ตัน เกินมา 2 ตัน)'],
      ['Part 3 · Guess', 'What possible reason does the man suggest for the higher weight?', ['Extra unbilled cloth rolls may have been tucked into the shipping container', 'Digital scale calibration drifted off cleanly at NorthPort docks', 'Ocean rainwater soaked outer wooden packing pallets', 'Customs forms rounded net bales up to gross tonnage'], 0, 'ตอบ Extra unbilled cloth rolls may have been tucked into the shipping container (เดาว่าโรงทออาจแพ็กม้วนผ้าตัวอย่างแถมใส่ลังมาให้โดยไม่ได้แก้อินวอยซ์)'],
      ['Part 3 · Urgency', 'Why must the mill send a revised packing list before noon?', ['To avoid multi-day customs holds over undeclared freight weight', 'To claim discounted Dock Gate B express crane fees', 'To arrange complimentary extra warehouse forklifts', 'To finalize cargo insurance refunds cleanly'], 0, 'ตอบ To avoid multi-day customs holds over undeclared freight weight (ป้องกันด่านศุลกากรกักตู้สินค้าไว้ตรวจนานถึง 3 วันถ้าข้อมูลน้ำหนักไม่ตรงกับเอกสาร)'],
    ]),

    p3(5, 'l5-p3-9', [
      ['Woman', 'us_f2', 'Noah, congrats on winning the Civic Innovation Grant for our neighborhood tool-lending library! Did City Finance clarify when the initial check arrives?'],
      ['Man', 'ca_m', 'Thank you! Grant Officer Singh confirmed twenty-five thousand dollars clears municipal accounts May 20 cleanly—once we upload final commercial fire-extinguisher inspection certificates cleanly!'],
      ['Woman', 'us_f2', 'Oh! Volunteer carpenter Dan already scheduled Fire Marshal inspection for this Thursday at ten, right after tool shelves get anchored into wall studs!'],
      ['Man', 'ca_m', 'Perfect sync! I’ll scan Thursday’s signed certificate straight into the city portal before lunch so May 20 payouts stay smoothly on track.'],
    ], null, [
      ['Part 3 · Topic', 'What community project recently received city grant funding?', ['A shared neighborhood tool-borrowing center', 'A volunteer residential roof framing workshop', 'A downtown municipal fire safety museum', 'A weekend carpenter job training academy'], 0, 'ตอบ A shared neighborhood tool-borrowing center (ห้องสมุดให้ยืมเครื่องมือช่างประจำชุมชนได้รับเงินทุนสนับสนุนจากเมือง)'],
      ['Part 3 · Condition', 'What final requirement must be met before city funds clear?', ['Uploading current building fire-safety inspection documentation', 'Mounting tool storage lockers onto street sidewalks', 'Verifying volunteer carpenter insurance badges online', 'Completing twenty-five thousand dollars in advance tool purchases'], 0, 'ตอบ Uploading current building fire-safety inspection documentation (ต้องอัปโหลดใบรับรองการตรวจถังดับเพลิงเชิงพาณิชย์เข้าระบบก่อนรับเงินวันที่ 20 พ.ค.)'],
      ['Part 3 · Schedule', 'When will the Fire Marshal examine the library premises?', ['This Thursday morning at ten', 'On May 20 at noon', 'Next Tuesday afternoon cleanly', 'After shelves ship next month'], 0, 'ตอบ This Thursday morning at ten (อาสาสมัครช่างไม้ Dan นัดเจ้าหน้าที่ดับเพลิงมาตรวจวันพฤหัสบดีนี้เวลา 10 โมงเช้า)'],
    ]),

    p3(5, 'l5-p3-10', [
      ['Man', 'uk_m', 'Hi Lena! Listen—our weekend acoustic jazz quartet concert at Old Mill Courtyard nearly sold out online, except lightning storms popped cleanly into Saturday’s evening forecast!'],
      ['Woman', 'au_f', 'Ugh, weather alerts again! Do we hold backup indoor capacity down inside Historic Grain Hall just one block away?'],
      ['Man', 'uk_m', 'Wait—Historic Grain Hall already closes cleanly at eight for gallery cleaning, YET Municipal Ballroom on Riverfront holds two hundred twenty padded chairs free Saturday night!'],
      ['Woman', 'au_f', 'Book Municipal Ballroom right now cleanly—same sound gear, dry ceiling, and I’ll text every ticket holder updated map pins by tomorrow noon!'],
    ], null, [
      ['Part 3 · Problem', 'Why are the concert organizers searching for a replacement venue?', ['Evening thunderstorms are predicted during the outdoor courtyard show', 'Acoustic jazz microphones sustained rain damage earlier', 'Online ticket sales exceeded Old Mill Courtyard’s capacity', 'Sound ordinance permits ended cleanly before Saturday'], 0, 'ตอบ Evening thunderstorms are predicted during the outdoor courtyard show (พยากรณ์อากาศเตือนพายุฝนฟ้าคะนองเย็นวันเสาร์ตรงกับวันแสดงกลางแจ้ง)'],
      ['Part 3 · Detail', 'Why can’t the event move inside Historic Grain Hall?', ['The venue locks early at eight P.M. for cleaning crews', 'Its stone acoustics fail to support live acoustic jazz', 'Its seating capacity drops far below ticket counts', 'Another private banquet already booked the space'], 0, 'ตอบ The venue locks early at eight P.M. for cleaning crews (ห้อง Historic Grain Hall ปิด 2 ทุ่มเพื่อทำความสะอาดแกลเลอรี)'],
      ['Part 3 · Action', 'What task does the woman take responsibility for tomorrow morning?', ['Sending digital venue map updates to all ticketholders', 'Transferring sound amplifiers cleanly onto Municipal Ballroom stages', 'Issuing automatic ticket refunds over city portals', 'Checking lightning protection permits near Riverfront'], 0, 'ตอบ Sending digital venue map updates to all ticketholders (รับอาสาส่งข้อความแจ้งปักหมุดสถานที่ใหม่ให้ผู้ซื้อบัตรทุกคนภายในเที่ยงพรุ่งนี้)'],
    ]),

    p3(5, 'l5-p3-11', [
      ['Woman', 'ca_f', 'Tom, check this Quarterly Customer Return Ledger before our Tuesday Operations meeting cleanly! Look how wireless keyboards stayed impressively reliable cleanly at just 1.4 percent returns.'],
      ['Man', 'us_m2', 'Wait—jump up one row! Nearly nine percent of Ergonomic Desk Lamps came back? What happened—flickering dimmers or broken bases?'],
      ['Woman', 'ca_f', 'Shipping damage mostly! Packaging used thin corner cardboard instead of molded trays, so cast-iron bases cracked straight through box bottoms!'],
      ['Man', 'us_m2', 'Ouch—let’s switch Ergonomic Desk Lamps into double-wall foam cradles starting Friday before November retail orders spike!'],
    ], doc('table', 'Quarterly Electronics — Product Return Ledger', [['Period', 'Q3 Hardware Sales Summary']], [
      tbl(
        ['Product SKU', 'Units Sold', 'Return Rate', 'Primary Reason'],
        [
          ['Ergonomic Desk Lamp', '3,400 Units', '8.9%', 'Cracked Cast Base'],
          ['Wireless Mechanical Keyboard', '6,200 Units', '1.4%', 'Wrong Layout Picked'],
          ['USB-C Travel Dock', '4,850 Units', '2.1%', 'Driver Setup Help'],
          ['Noise-Canceling Webcam', '2,900 Units', '3.0%', 'Clip Fit on Monitors'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. What is the return rate of the most frequently returned item?', ['8.9%', '1.4%', '2.1%', '3.0%'], 0, 'ตอบ 8.9% (ตารางระบุ Ergonomic Desk Lamp มียอดคืนสูงสุดถึง 8.9% เพราะฐานเหล็กหล่อแตก)'],
      ['Part 3 · Cause', 'Why did Ergonomic Desk Lamps crack repeatedly during shipping?', ['Insufficiently thin packaging corners failed to shield heavy bases', 'Cast-iron base castings held microscopic factory cracks', 'USB-C dimmer cables pulled lamps off shipping pallets', 'Cold truck bays warped exterior carton seals cleanly'], 0, 'ตอบ Insufficiently thin packaging corners failed to shield heavy bases (ใช้กระดาษแข็งกันกระแทกมุมที่บางเกินไปจนฐานเหล็กหล่อกระแทกทะลุกล่อง)'],
      ['Part 3 · Action', 'What packaging upgrade will begin Friday?', ['Adopting dual-layer protective foam insert cradles', 'Reinforcing outer mailing bags around keyboards', 'Removing heavy cast bases from travel boxes cleanly', 'Inserting setup help booklets under box flaps'], 0, 'ตอบ Adopting dual-layer protective foam insert cradles (เปลี่ยนมาใช้เบาะโฟมกันกระแทกสองชั้นตั้งแต่วันศุกร์ก่อนยอดขายเดือน พ.ย. พุ่ง)'],
    ]),

    p3(5, 'l5-p3-12', [
      ['Man', 'au_m', 'Hi Rachel! Facility Engineering posted the Spring Window-Washing Lift Map on the intranet cleanly—take a quick peek so Client Reception stays peaceful!'],
      ['Woman', 'us_f', 'Let’s see—Monday morning covers North Courtyard windows cleanly, and Tuesday runs above the South Employee Garden...'],
      ['Man', 'au_m', 'Whoa, stop right at Thursday: Exterior Window Lift sits directly outside Third-Floor Executive Conference Suite A while our Tokyo bank delegation negotiates merger contracts all morning!'],
      ['Woman', 'us_f', 'Nice catch! Let’s email Maintenance Supervisor Greg right away asking to trade Thursday’s West Wing wash onto Friday afternoon when Suite A sits completely empty cleanly!'],
    ], doc('table', 'Headquarters — Spring Exterior Window Lift Plan', [['Dates', 'May 12 – May 16']], [
      tbl(
        ['Day', 'Building Facade', 'Affected Floor Area', 'Crew Window'],
        [
          ['Monday', 'North Courtyard', 'Lobby Atrium Glass', '08:00 – 12:00'],
          ['Tuesday', 'South Garden', 'Staff Cafeteria Terrace', '08:00 – 12:00'],
          ['Wednesday', 'East Avenue', 'Logistics Docks & Hall 2', '09:00 – 13:00'],
          ['Thursday', 'West Wing', '3F Executive Suite A', '08:30 – 12:30'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which scheduled facade clean creates a meeting conflict?', ['Thursday’s West Wing wash', 'Monday’s North Courtyard wash', 'Tuesday’s South Garden wash', 'Wednesday’s East Avenue wash'], 0, 'ตอบ Thursday’s West Wing wash (ตารางแสดงวันพฤหัสบดีล้างกระจกฝั่ง West Wing ตรงห้อง 3F Executive Suite A ซึ่งชนกับการเจรจาควบรวมกิจการ)'],
      ['Part 3 · Reason', 'Why is undisturbed silence important inside Executive Suite A on Thursday morning?', ['An overseas banking delegation is negotiating major business contracts', 'Tokyo interns are recording executive training videos', 'Maintenance teams are testing sound-canceling window seals', 'Cafeteria staff are serving formal ambassador luncheons'], 0, 'ตอบ An overseas banking delegation is negotiating major business contracts (คณะผู้แทนธนาคารจากโตเกียวจะเจรจาสัญญาควบรวมตลอดช่วงเช้าวันพฤหัสฯ)'],
      ['Part 3 · Proposal', 'What alternative timing does the woman ask Maintenance Supervisor Greg for?', ['Moving West Wing window cleaning cleanly into Friday afternoon', 'Canceling spring exterior washes across West Wing completely', 'Shifting the Tokyo bank delegation down onto North Lobby rooms', 'Washing glass panels overnight using artificial floodlights'], 0, 'ตอบ Moving West Wing window cleaning cleanly into Friday afternoon (ขอสลับคิวเช็ดกระจก West Wing ไปทำบ่ายวันศุกร์ตอนห้อง Suite A ว่างแทน)'],
    ]),

    p3(5, 'l5-p3-13', [
      ['Woman', 'uk_f', 'Sam, our monthly Farmers Market booth fee invoice just came from City Parks cleanly—wait, why did Booth Zone rates change starting June?'],
      ['Man', 'ca_m', 'Look closely down at this Market Zone Pricing Card: Shaded Pavilion Row costs slightly more now cleanly, yet Corner Truck Bay still waives utility cord fees cleanly for solar refrigeration carts!'],
      ['Woman', 'uk_f', 'Hold on—our berry jam jars don’t require cold trucks cleanly, and Foot Traffic averages highest right inside Center Fountain Loop! Why pay extra truck hookup costs we barely touch?'],
      ['Man', 'ca_m', 'True! Signing Center Fountain Loop saves fifty-five dollars every Saturday plus puts jam samples directly past coffee stands!'],
    ], doc('notice', 'Riverside Farmers Market — June Booth Tier Card', [['Schedule', 'Weekly Saturday Rates']], [
      lst([
        '• Shaded Pavilion Row: $160 / wk (10x10 canopy included)',
        '• Center Fountain Loop: $125 / wk (highest walk-by foot traffic)',
        '• Corner Truck Bay: $180 / wk (free 20A electric refrigeration outlet)',
        '• Grassy South Lawn: $95 / wk (unpaved lawn, afternoon sun)',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. What weekly rate will the jam sellers pay after switching spots?', ['$125 per week', '$160 per week', '$180 per week', '$95 per week'], 0, 'ตอบ $125 per week (ตัดสินใจย้ายไปจองโซน Center Fountain Loop ซึ่งรายการระบุอัตราค่าเช่า $125 / สัปดาห์)'],
      ['Part 3 · Detail', 'Why does Corner Truck Bay fail to fit their fruit jam stand cleanly?', ['Electric refrigeration outlets aren’t needed for shelf-stable jam jars', 'Truck bays sit far away from grassy afternoon lawns', 'Refrigeration outlets charge extra weekend kilowatt surcharges', 'Canopy frames are prohibited inside corner vehicle zones'], 0, 'ตอบ Electric refrigeration outlets aren’t needed for shelf-stable jam jars (แยมเบอร์รีไม่จำเป็นต้องใช้ปลั๊กไฟทำความเย็น จึงไม่ต้องจ่ายแพงสำหรับโซนรถบรรทุก)'],
      ['Part 3 · Benefit', 'Besides weekly savings, what extra advantage favors Center Fountain Loop?', ['Dense customer pedestrian traffic walking past coffee counters', 'Heavy canopy shade provided cleanly over summer tables', 'Direct truck loading ramps alongside Grassy South Lawn', 'Complimentary city utility hookups for heating hot cider'], 0, 'ตอบ Dense customer pedestrian traffic walking past coffee counters (คนเดินผ่านเยอะที่สุดและอยู่ติดซุ้มกาแฟช่วยให้ชิมตัวอย่างง่าย)'],
    ]),

    // Set 5 Part 4 (10 Talks × 3 Qs = 30 Qs; Talks 8-10 include Graphics)
    p4(5, 'l5-p4-1', 'the following recorded telephone message', 'ca_f',
      'Hello! You’ve reached Oakridge Civic Recreation Center’s Aquatic Desk. Please listen carefully for updated spring swim schedules taking effect Monday, May 5: Morning lap lanes open half an hour earlier at five-thirty A.M. daily following strong member survey requests! Please remember Outdoor Splash Pool undergoes tile grouting repair through Wednesday next week, though Indoor Olympic Lanes remain crystal clear and heated cleanly to twenty-eight degrees all weekend. To book children’s group swim assessments or inspect private locker waitlist status, press four to leave your name with Coordinator Leo!',
      null, [
        ['Part 4 · Purpose', 'What main update is announced in this recorded message?', ['Earlier morning pool opening times and temporary outdoor splash closures', 'Summer lifeguard certification courses starting May 5', 'Raised monthly recreation center family locker fees', 'Emergency indoor heating repairs closing Olympic lanes'], 0, 'ตอบ Earlier morning pool opening times and temporary outdoor splash closures (เปิดสระเช้าขึ้นเป็น 05:30 น. และแจ้งปิดซ่อมยาแนวกระเบื้องสระกลางแจ้งชั่วคราว)'],
        ['Part 4 · Cause', 'Why did Oakridge Center expand morning swim hours?', ['Strong demand reflected in recent member questionnaires', 'Swim coaches requested cooler outdoor temperatures early morning', 'Afternoon lap reservations overflowed past locker capacities', 'City recreation inspectors approved extended summer shift credits'], 0, 'ตอบ Strong demand reflected in recent member questionnaires (ตอบรับคำขอจำนวนมากจากแบบสอบถามสมาชิก)'],
        ['Part 4 · Detail', 'How can parents check a child’s swim class evaluation openings?', ['By pressing four to reach Coordinator Leo’s voicemail', 'By visiting the outdoor splash deck desk Monday', 'By logging directly onto pool locker kiosks', 'By staying on the line for emergency aquatic operators'], 0, 'ตอบ By pressing four to reach Coordinator Leo’s voicemail (ให้กด 4 เพื่อฝากชื่อไว้กับผู้ประสานงาน Leo)'],
      ]),

    p4(5, 'l5-p4-2', 'the following radio traffic and transit update', 'us_m',
      'Good Tuesday morning, Metro commuters—this is Dana Park bringing your eight-fifteen Transit Corridor Watch on Station WBRT! Watch out heading eastbound across Oak Bridge right now: utility crews cleared last night’s fallen tree limb near Exit 14, yet two highway repainting trucks remain cleanly blocking the right express lane until nine-thirty sharp! Inbound Metro Rail Green Line riders enjoy smooth five-minute intervals smoothly across every station, and Harbor Ferry Shuttle 2 added an extra express catamaran boat cleanly off Pier 4 through noon to ease morning highway delays!',
      null, [
        ['Part 4 · Problem', 'What is currently slowing eastbound road commuters across Oak Bridge?', ['Road striping trucks occupying the right lane until nine-thirty', 'Emergency tree-trimming crews clearing fresh limbs at Exit 14', 'Signal outages slowing Metro Rail Green Line platforms', 'Dense fog halting Harbor Ferry boats near Pier 4'], 0, 'ตอบ Road striping trucks occupying the right lane until nine-thirty (กิ่งไม้เก็บไปแล้ว แต่ยังเหลือรถตีเส้นถนนปิดช่องทางขวาอยู่จนถึง 09:30 น.)'],
        ['Part 4 · Solution', 'What additional public transit option is running cleanly through noon?', ['An extra rapid ferry service leaving Pier 4', 'Express replacement buses bypassing Oak Bridge ramps', 'Two-minute Metro Green Line express trains', 'Free bridge toll lanes opening until nine-thirty'], 0, 'ตอบ An extra rapid ferry service leaving Pier 4 (เพิ่มเรือเฟอร์รี่ด่วนคาตามารันอีก 1 ลำออกจากท่า Pier 4 จนถึงเที่ยง)'],
        ['Part 4 · Detail', 'At what frequency are Metro Green Line trains running currently?', ['Every five minutes', 'Every fourteen minutes', 'Every fifteen minutes', 'Every thirty minutes'], 0, 'ตอบ Every five minutes (รถไฟ Green Line วิ่งราบรื่นทุกๆ 5 นาทีในทุกสถานี)'],
      ]),

    p4(5, 'l5-p4-3', 'the following tour announcement at a botanical park', 'uk_f',
      'Good morning, green-thumb visitors, and welcome to Willowbrook Urban Vertical Farm! Before entering our climate-controlled lettuce towers, please slip those blue shoe covers beside the bench over your sneakers so outdoor garden soil stays safely out of sterile hydroponic trays! Notice our stacked vertical columns raise forty times more leafy greens per square meter cleanly than outdoor soil rows—using ninety-five percent less circulating rainwater! In five minutes cleanly, Head Agronomist Samira will demonstrate automated nutrient misting nozzles right behind Glass Window Two before opening our organic salad tasting bar cleanly!',
      null, [
        ['Part 4 · Instruction', 'Why must tour participants wear blue shoe covers inside the facility?', ['To prevent outside soil germs from contaminating sterile water trays', 'To protect visitor shoes against overflowing nutrient pipes', 'To keep polished glass tour walkways completely streak-free', 'To separate tasting guests cleanly from agricultural forklift zones'], 0, 'ตอบ To prevent outside soil germs from contaminating sterile water trays (ใส่ถุงคลุมรองเท้าสีน้ำเงินเพื่อป้องกันดินจากภายนอกปนเปื้อนรางปลูกระบบน้ำปลอดเชื้อ)'],
        ['Part 4 · Detail', 'How much less water does the vertical farm circulate compared to field farms?', ['Ninety-five percent less', 'Forty percent less', 'Fifty percent less', 'Two percent less'], 0, 'ตอบ Ninety-five percent less (ใช้น้ำฝนหมุนเวียนน้อยกว่าการปลูกบนดินแบบปกติถึง 95%)'],
        ['Part 4 · Sequence', 'What happens immediately after Head Agronomist Samira’s nozzle demo?', ['Guests are invited to sample fresh organic salads', 'Visitors put away blue protective footwear in wall bins', 'Technicians adjust rainwater recirculation pumps cleanly', 'Agricultural tours move out into sunlit soil orchards'], 0, 'ตอบ Guests are invited to sample fresh organic salads (หลังชมสาธิตหัวพ่นสารอาหารหน้ากระจกที่ 2 แล้ว จะเปิดบาร์ให้ชิมสลัดออร์แกนิก)'],
      ]),

    p4(5, 'l5-p4-4', 'the following radio commercial', 'au_m',
      'Running out of quiet battery life right before landing an evening flight? Meet VoltPack Slim 20K—the aerospace-aluminum laptop power bank thinner than an ordinary hardcover notebook! Engineered neatly with dual sixty-five-watt USB-C ports cleanly, VoltPack charges both your ultrabook computer and smartphone rapidly in thirty-five minutes flat while passing every major international airline carry-on inspection! Pick up VoltPack Slim 20K this week cleanly through Horizon Travel Tech shops or online at horizon-gear dot com—enter promo code FLY20 before Sunday midnight for complimentary braided fast-charge travel cables inside every box!',
      null, [
        ['Part 4 · Product', 'What key benefit highlights the VoltPack Slim 20K charger?', ['Airline-approved slim battery capacity fast-charging two devices simultaneously', 'Solar photovoltaic glass panels recharging smoothly on airplane windows', 'Built-in retractable AC extension cords fitting airport lounge chairs', 'Replaceable cellular SIM cards supporting international roaming calls'], 0, 'ตอบ Airline-approved slim battery capacity fast-charging two devices simultaneously (พาวเวอร์แบงก์บางเบาผ่านกฎการบิน มีพอร์ต 65W คู่ชาร์จโน้ตบุ๊กกับมือถือพร้อมกันเร็วมาก)'],
        ['Part 4 · Detail', 'How fast can VoltPack recharge compatible portable gear cleanly?', ['Within thirty-five minutes', 'In twenty minutes flat', 'In sixty-five minutes', 'By Sunday midnight'], 0, 'ตอบ Within thirty-five minutes (ชาร์จไวทั้งโน้ตบุ๊กและมือถือภายใน 35 นาที)'],
        ['Part 4 · Promotion', 'What do buyers receive using discount code FLY20 before Sunday night?', ['Complimentary braided USB fast-charge travel cords', 'Twenty-percent cash rebates on airport store receipts', 'Free padded aerospace travel carrying sleeves', 'Upgraded dual-voltage international wall plugs'], 0, 'ตอบ Complimentary braided USB fast-charge travel cords (แถมสายชาร์จเร็วแบบถักฟรีในกล่องเมื่อใช้โค้ด FLY20 ก่อนเที่ยงคืนวันอาทิตย์)'],
      ]),

    p4(5, 'l5-p4-5', 'the following excerpt from a logistics meeting', 'us_f2',
      'Thanks for stepping off dock floors cleanly for ten minutes, Morning Shift Supervisors! Quick celebration first: our new automated dock barcode scanners sliced misrouted parcel claims down cleanly by forty-two percent in April—let’s keep those yellow handheld cradles docked fully between unload waves cleanly! Now one urgent item affecting Friday mornings: Pacific Hardware Suppliers switched shipping wraps from gray cardboard cartons onto dark charcoal reusable plastic totes starting tomorrow—wait, dark plastic confuses older overhead conveyor sensors unless totes keep white barcode corners clear! Make sure receiving clerks stick neon green routing dots cleanly beside every white barcode until Firmware Patch 4 pushes Monday!',
      null, [
        ['Part 4 · Result', 'What positive shift happened cleanly across April following scanner upgrades?', ['Parcel misrouting claims declined by forty-two percent', 'Dock worker unloading shifts shortened by forty-two minutes', 'Warehouse truck turnaround speed doubled across night docks', 'Yellow cradle batteries needed zero weekday charging breaks'], 0, 'ตอบ Parcel misrouting claims declined by forty-two percent (เครื่องสแกนใหม่ช่วยลดปัญหาพัสดุส่งผิดเส้นทางในเดือนเมษายนลงถึง 42%)'],
        ['Part 4 · Problem', 'Why could Pacific Hardware’s new charcoal plastic bins disrupt Friday sorting?', ['Dark surface colors interfere with existing overhead optical sensors', 'Plastic crate weights exceed conveyor belt load ratings', 'Gray cardboard barcodes peel cleanly off slippery bins', 'Firmware updates halted Friday overnight scanning completely'], 0, 'ตอบ Dark surface colors interfere with existing overhead optical sensors (ลังพลาสติกสีเทาเข้มทำให้เซนเซอร์เหนือศีรษะรุ่นเก่าตรวจจับพลาด)'],
        ['Part 4 · Action', 'What interim fix must clerks apply until Monday’s software patch?', ['Attach neon green sticker dots beside shipping barcode corners', 'Transfer hardware tools back inside spare gray cardboard cartons', 'Enter serial labels manually through handheld scanners cleanly', 'Hold dark charcoal totes cleanly beside Loading Gate B'], 0, 'ตอบ Attach neon green sticker dots beside shipping barcode corners (ให้พนักงานติดจุดสติกเกอร์สีเขียวนีออนข้างบาร์โค้ดสีขาวทุกกล่องจนกว่าจะอัปเดตเฟิร์มแวร์วันจันทร์)'],
      ]),

    p4(5, 'l5-p4-6', 'the following voicemail message', 'uk_m',
      'Hi Sandra, this is Chef Omar calling from Meridian Bistro’s kitchen line at five-oh-five! Quick update regarding Saturday evening’s retirement banquet for thirty-two professors: our pastry kitchen just pulled fresh lemon tarts from ovens cleanly, AND floral supplier BloomBox confirmed white centerpieces arrive tomorrow morning by nine! However, our walk-in seafood supplier just alerted me wild Atlantic scallops came in short due to harbor wind advisories—thankfully fresh Gulf black cod fillets arrived gorgeous this afternoon! Would the Retirement Committee prefer pan-seared cod with caper butter instead of scallops, or roasted rosemary chicken? Ring my cell back before eight tonight cleanly so prep cooks adjust sauces cleanly!',
      null, [
        ['Part 4 · Role', 'Who is Chef Omar calling?', ['A coordinator helping organize an upcoming university retirement dinner', 'A seafood wholesaler handling Atlantic shipping disruptions', 'BloomBox’s Saturday floral delivery driver', 'A pastry cook inside Meridian Bistro’s kitchen'], 0, 'ตอบ A coordinator helping organize an upcoming university retirement dinner (เชฟโทรหาผู้ประสานงานจัดงานเลี้ยงเกษียณของอาจารย์ 32 ท่านในเย็นวันเสาร์)'],
        ['Part 4 · Problem', 'Why must Saturday’s seafood menu course change?', ['High harbor winds limited Atlantic scallop harvests', 'Oven malfunctions delayed baked fish seasoning', 'Guest RSVPs jumped past thirty-two professors cleanly', 'Flower crates blocked seafood kitchen delivery ramps'], 0, 'ตอบ High harbor winds limited Atlantic scallop harvests (ลมทะเลแรงทำให้หอยเชลล์แอตแลนติกเข้ามาน้อยกว่าที่สั่ง)'],
        ['Part 4 · Choice', 'By what time should Sandra confirm the substitute main course?', ['Before eight P.M. tonight', 'By nine A.M. tomorrow morning', 'At five-oh-five Saturday afternoon', 'Right before university speeches begin'], 0, 'ตอบ Before eight P.M. tonight (ขอให้โทรกลับมายืนยันเลือกเมนูปลากะพงดำหรือไก่อบโรสแมรีก่อน 2 ทุ่มคืนนี้)'],
      ]),

    p4(5, 'l5-p4-7', 'the following workshop orientation talk', 'us_m',
      'Welcome to Harbor Makerspace’s Laser-Cutting Safety Clinic, everyone! Before flipping on those sixty-watt acrylic cutters inside Bay Two, remember our golden rule cleanly: NEVER slice unknown recycled foam or vinyl PVC sheets! Heating chlorine plastics releases corrosive acid mist cleanly inside seconds—it pits gold focusing mirrors instantly and trips every studio smoke alarm cleanly across the hall! Instead, always choose laser-certified cast acrylic or birch plywood stamped along our Front Material Rack cleanly—and log your project weight on the green clipboard so staff swap exhausted carbon filters cleanly on time!',
      null, [
        ['Part 4 · Warning', 'Why are vinyl PVC materials strictly banned inside the laser cutters?', ['Cutting them emits harmful vapors that quickly damage focusing optics', 'Thick PVC melts unpredictably onto wooden workbench floors', 'Foam waste jams studio dust vacuum hoses cleanly', 'Uncertified vinyl burns slowly at lower wattages cleanly'], 0, 'ตอบ Cutting them emits harmful vapors that quickly damage focusing optics (การตัด PVC จะปล่อยไอระเหยกรดกัดกร่อนกระจกโฟกัสสีทองและทำให้สัญญาณเตือนควันดังทันที)'],
        ['Part 4 · Detail', 'Where can studio members find approved materials ready to cut cleanly?', ['On the stamped Front Material Rack', 'Inside green cabinet storage bins', 'Behind Bay Two extractor hoses', 'Under workshop safety desks'], 0, 'ตอบ On the stamped Front Material Rack (เลือกใช้แผ่นอะคริลิกหล่อหรือไม้อัดเบิร์ชที่ประทับตราไว้ตรงชั้นวัสดุหน้าห้อง)'],
        ['Part 4 · Action', 'Why must users write completed job metrics on the green clipboard?', ['So technicians schedule timely filter replacements', 'So managers calculate monthly acrylic billing rates', 'So safety instructors issue certification stamps', 'So cleaners disinfect workbenches evenly cleanly'], 0, 'ตอบ So technicians schedule timely filter replacements (จดน้ำหนักงานลงแผ่นรองเขียนสีเขียวเพื่อให้เจ้าหน้าที่เปลี่ยนไส้กรองคาร์บอนได้ทันเวลา)'],
      ]),

    p4(5, 'l5-p4-8', 'the following project review and table', 'ca_f',
      'Good morning, Website Localization Team! Pull up our Spring App Download Summary across those four European regions before our budget vote cleanly. Notice Germany and France kept terrific steady organic traction—especially German tutorials pulling seventy-four hundred downloads while costing barely zero paid promotions! Meanwhile, peek down at Spain: total installs look flat right around twenty-one hundred even though we ran hefty banner ads all April! Why? User reviews point out our Spanish checkout help screens STILL link straight to untranslated English billing forms! Before boosting May ad spending anywhere else cleanly, let’s have localization writer Sofia fix those Spanish billing screens first!',
      doc('table', 'Europe Spring — Mobile App Metrics Report', [['Period', 'April Regional Rollout']], [
        tbl(
          ['Country Market', 'Apr Downloads', 'Ad Spend', 'Checkout Drop-Off'],
          [
            ['Germany', '7,400', '$600', '9%'],
            ['France', '5,850', '$1,100', '11%'],
            ['Italy', '4,100', '$950', '14%'],
            ['Spain', '2,120', '$2,400', '38%'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which country spent the highest April ad budget yet saw the highest drop-off?', ['Spain', 'Germany', 'France', 'Italy'], 0, 'ตอบ Spain (ตารางแสดงสเปนใช้งบโฆษณาสูงสุดที่ $2,400 แต่ยอด Checkout Drop-Off สูงสุดถึง 38% และดาวน์โหลดต่ำสุด)'],
        ['Part 4 · Cause', 'What glitch discouraged Spanish app customers during checkout?', ['Key payment help screens stayed displayed solely in English', 'Slow mobile data servers dropped card approvals cleanly', 'Localized tutorial clips lagged behind regional launches', 'Euro pricing converted unevenly inside mobile menus'], 0, 'ตอบ Key payment help screens stayed displayed solely in English (หน้าช่วยเหลือการชำระเงินในแอปยังลิงก์ไปฟอร์มภาษาอังกฤษที่ไม่ได้แปล)'],
        ['Part 4 · Decision', 'What action takes top priority before allocating May promotion funds cleanly?', ['Having Sofia translate the missing Spanish payment screens cleanly', 'Pausing all profitable German tutorial campaigns completely', 'Shifting Spanish ad dollars straight into Italy banner ads', 'Rewriting mobile store descriptions cleanly across France'], 0, 'ตอบ Having Sofia translate the missing Spanish payment screens cleanly (ให้ Sofia แก้ไขแปลหน้าจ่ายเงินภาษาสเปนก่อนเพิ่มงบโฆษณาเดือน พ.ค.)'],
      ]),

    p4(5, 'l5-p4-9', 'the following museum security briefing', 'au_f',
      'Good morning, Weekend Docent Team—let’s take sixty seconds cleanly over today’s Temporary Exhibition Gallery Access schedule before doors open at ten! Normally guests enter right through Glass Arcade West and loop cleanly past Ancient Textiles before reaching our Bronze Sculptures Hall. Wait—overnight floor polishers flagged a damp sealant patch right inside Hall 3 linking Ancient Textiles onward into Modern Photography! Consequently, Rope Barriers block Hall 3 through three P.M. cleanly! Kindly guide noon tour crowds out via Courtyard Fountain Walk cleanly to reach Modern Photography until Hall 3 dries completely!',
      doc('route', 'Civic Art Museum — Today’s Gallery Route Card', [['Notice', 'Effective Until 3:00 P.M.']], [
        lst([
          '1. Glass Arcade West → Main Entry & Coat Check',
          '2. Hall 1 (Ancient Textiles) → Open Normally',
          '3. Hall 3 Corridor → Closed (Floor Sealant Drying)',
          '4. Alternate Path → Courtyard Fountain Walk → Hall 4 (Modern Photography)',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Why can’t visitors walk straight from Hall 1 into Hall 4 cleanly?', ['Connecting corridor Hall 3 has freshly applied wet floor sealant', 'Gallery construction relocated Ancient Textiles exhibits', 'Sculpture pedestals are being crated inside Glass Arcade West', 'Courtyard rain forced temporary security closures cleanly'], 0, 'ตอบ Connecting corridor Hall 3 has freshly applied wet floor sealant (ทางเชื่อม Hall 3 ปิดชั่วคราวถึงบ่าย 3 โมงเพราะน้ำยาเคลือบพื้นยังไม่แห้ง)'],
        ['Part 4 · Instruction', 'Which alternate route should docents direct noon visitors down?', ['Along the outdoor Courtyard Fountain Walk', 'Backward past main lobby Coat Check exits', 'Upstairs around Bronze Sculptures galleries', 'Straight through restricted construction ropes cleanly'], 0, 'ตอบ Along the outdoor Courtyard Fountain Walk (แผนผังและวิทยากรแนะนำให้เดินเลี่ยงไปทาง Courtyard Fountain Walk เพื่อเข้าสู่ Hall 4)'],
        ['Part 4 · Time', 'When is Hall 3 expected to reopen for regular visitor flow cleanly?', ['At 3:00 P.M. today', 'At 10:00 A.M. tomorrow', 'Right after noon lunch tours', 'Following Sunday museum hours'], 0, 'ตอบ At 3:00 P.M. today (ปิดถึง 15:00 น. วันนี้เพื่อให้พื้นแห้งสนิท)'],
      ]),

    p4(5, 'l5-p4-10', 'the following company budget announcement', 'uk_m',
      'Attention Product Engineering Leads—let’s glance together over this Q3 Prototyping Spend vs. Budget comparison chart ahead of Tuesday’s finance sign-off! Notice Optical Sensors stayed wonderfully frugal—finishing twelve thousand dollars neatly underneath forecast simply because Supplier Apex shared existing aluminum test molds! Meanwhile, jump down sharply to Battery Housing: engineering prototypes blew eighteen thousand dollars over budget! Wait—did custom safety shells crack repeatedly? No! Air-expediting heavy test cells twice monthly cost nearly triple slow container shipping! Starting next month, every prototype order over two hundred pounds moves strictly via scheduled standard ground freight unless Executive Director Chen signs an urgent rush slip!',
      doc('table', 'Hardware R&D — Q3 Prototyping Budget Board', [['Currency', 'Figures in USD ($)']], [
        tbl(
          ['Subsystem', 'Allocated', 'Actual Spend', 'Variance'],
          [
            ['Optical Sensors', '$45,000', '$33,000', '-$12,000 (Under)'],
            ['Circuit Boards', '$60,000', '$58,500', '-$1,500 (Under)'],
            ['Battery Housing', '$50,000', '$68,000', '+$18,000 (Over)'],
            ['Thermal Fans', '$30,000', '$29,400', '-$600 (Under)'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. How much over budget did the Battery Housing division run?', ['$18,000 over budget', '$12,000 under budget', '$50,000 over budget', '$68,000 over budget'], 0, 'ตอบ $18,000 over budget (ตารางระบุ Battery Housing ใช้จริง $68,000 จากงบที่ตั้งไว้ $50,000 เกินงบไป +$18,000)'],
        ['Part 4 · Cause', 'What unexpectedly inflated Battery Housing prototype costs?', ['Frequent costly rush air-shipping of heavy battery test cells', 'Supplier Apex raising aluminum safety casing molding quotes', 'Repeated shell cracking forcing double laboratory reprints', 'Circuit board heat vents damaging shipping crates'], 0, 'ตอบ Frequent costly rush air-shipping of heavy battery test cells (เกิดจากการสั่งส่งด่วนทางอากาศสำหรับแบตเตอรี่ทดสอบหนักๆ เดือนละสองครั้งซึ่งแพงกว่าส่งทางเรือ/ทางบกเกือบ 3 เท่า)'],
        ['Part 4 · Policy', 'When can shipments exceeding two hundred pounds use rush air freight starting next month?', ['Only upon receiving signed approval from Executive Director Chen', 'Whenever Thermal Fans run cleanly below Q3 budget targets', 'Through automatic supplier Apex shipping waivers', 'Never under any engineering research timelines'], 0, 'ตอบ Only upon receiving signed approval from Executive Director Chen (ตั้งแตเดือนหน้าของที่หนักเกิน 200 ปอนด์ต้องส่งแบบปกติ ยกเว้นได้ลายเซ็นอนุมัติด่วนจาก Executive Director Chen)'],
      ]),
  ];
})();
if (typeof module !== 'undefined') module.exports = { TOEIC_LISTEN_VOL1: globalThis.TOEIC_LISTEN_VOLS[1] };

