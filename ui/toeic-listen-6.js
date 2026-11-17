// Volume 6 of TOEIC Listening Mock Exams (Sets 26-30, 270 tracks = 500 Qs)
globalThis.TOEIC_LISTEN_VOLS = globalThis.TOEIC_LISTEN_VOLS || {};
globalThis.TOEIC_LISTEN_VOLS[6] = (() => {
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
    // ==================== SET 26 ====================
    // Themes: High-Speed Commuter Railway Operations, Ticket Kiosk Maintenance, Ferry-to-Rail Transfer Terminal
    p1(26, 'l26-p1-1', 'uk_m', [
      'A conductor is locking the doors of an empty railcar.',
      'Passengers are boarding a commuter train from a concrete platform.',
      'Suitcases have been stacked across the railroad tracks.',
      'Workers are painting yellow safety lines along a stairwell.',
    ], 1, 'ตอบ Passengers are boarding a commuter train from a concrete platform. (ผู้โดยสารกำลังก้าวขึ้นรถไฟชานเมืองจากชานชาลาคอนกรีต)'),
    p1(26, 'l26-p1-2', 'us_f', [
      'A technician is opening the front panel of a ticket kiosk.',
      'A traveler is inserting coins into a vending machine.',
      'Several ticket machines are being loaded onto a truck.',
      'A security guard is wiping a glass display screen.',
    ], 0, 'ตอบ A technician is opening the front panel of a ticket kiosk. (ช่างเทคนิคกำลังเปิดฝาด้านหน้าตู้จำหน่ายตั๋วอัตโนมัติเพื่อตรวจสอบ)'),
    p1(26, 'l26-p1-3', 'au_m', [
      'Commuters are queuing in front of a customer service desk.',
      'Floor tiles are being scrubbed inside a ferry terminal.',
      'Rows of metal benches face an electronic departure board.',
      'Life jackets have been piled beside an exit turnstile.',
    ], 2, 'ตอบ Rows of metal benches face an electronic departure board. (เก้าอี้โลหะเรียงเป็นแถวหันหน้าไปทางป้ายตารางเวลาเดินทางอิเล็กทรอนิกส์)'),
    p1(26, 'l26-p1-4', 'ca_f', [
      'Passengers are carrying bicycles up a steep ramp.',
      'A boat is sailing beneath a suspension bridge.',
      'Several lifeboats are being lowered toward the water.',
      'A ferry worker is tying a mooring rope to a dock bollard.',
    ], 3, 'ตอบ A ferry worker is tying a mooring rope to a dock bollard. (พนักงานท่าเรือกำลังผูกเชือกโยงเรือเฟอร์รี่เข้ากับหลักผูกเรือบนท่า)'),
    p1(26, 'l26-p1-5', 'us_m2', [
      'Two dispatchers are reviewing route maps on wide computer monitors.',
      'An engineer is adjusting overhead lights from a tall ladder.',
      'Binders are falling off a shelf behind a reception counter.',
      'The control room chairs have been pushed away from the desks.',
    ], 0, 'ตอบ Two dispatchers are reviewing route maps on wide computer monitors. (เจ้าหน้าที่ควบคุมการเดินรถสองคนกำลังดูแผนที่เส้นทางบนจอมอนิเตอร์ขนาดใหญ่)'),
    p1(26, 'l26-p1-6', 'uk_f2', [
      'Pedestrians are resting on benches along a waterfront promenade.',
      'Construction barriers block every entrance to the station hall.',
      'Overhead directional signs hang above a covered pedestrian walkway.',
      'Ticket turnstiles are being dismantled near an escalator.',
    ], 2, 'ตอบ Overhead directional signs hang above a covered pedestrian walkway. (ป้ายบอกทางห้อยอยู่เหนือทางเดินมีหลังคาเชื่อมต่อระหว่างอาคาร)'),

    // Set 26 Part 2 (25 Qs)
    p2(26, 'l26-p2-1', 'uk_f', 'us_m', 'Which platform does the express railcar to North Harbor depart from?', [
      'Track Four, right down the east escalators.',
      'Every thirty minutes on weekdays.',
      'Yes, I bought a round-trip pass.',
    ], 0, 'ตอบ Track Four, right down the east escalators. (ถามชานชาลา Which platform ตอบ Track Four ลงบันไดเลื่อนฝั่งตะวันออก)'),
    p2(26, 'l26-p2-2', 'us_m2', 'ca_f', 'Who signed off on replacing the card readers in Kiosk Seven?', [
      'Outside the main ticket concourse.',
      'Our lead maintenance engineer approved it Monday.',
      'With a contactless transit card.',
    ], 1, 'ตอบ Our lead maintenance engineer approved it Monday. (ถามบุคคล Who ตอบหัวหน้าวิศวกรซ่อมบำรุงเป็นคนอนุมัติเมื่อวันจันทร์)'),
    p2(26, 'l26-p2-3', 'au_f', 'uk_m', 'When will the morning ferry connect with the six-fifteen train again?', [
      'About forty passengers per crossing.',
      'At the south waterfront slip.',
      'Starting next Monday, once pier dredging ends.',
    ], 2, 'ตอบ Starting next Monday, once pier dredging ends. (ถามเวลา When ตอบเริ่มวันจันทร์หน้าหลังขุดลอกท่าเรือเสร็จ)'),
    p2(26, 'l26-p2-4', 'ca_m', 'us_f', 'Did the replacement thermal receipt rolls arrive from the depot?', [
      'Two cartons were delivered to Storage Bay B.',
      'Because the printer jammed twice.',
      'Only fifteen cents per ticket.',
    ], 0, 'ตอบ Two cartons were delivered to Storage Bay B. (ถามว่าของมาส่งหรือยัง ตอบแบบแจ้งพิกัดว่ามาส่งแล้ว 2 ลังที่ช่องเก็บ B)'),
    p2(26, 'l26-p2-5', 'us_f2', 'au_m', 'Why are commuters queuing outside the West Concourse gates?', [
      'For the waterfront shuttle bus.',
      'One of the turnstile scanners lost network power.',
      'Just past the bakery kiosk.',
    ], 1, 'ตอบ One of the turnstile scanners lost network power. (ถามเหตุผล Why ตอบเพราะเครื่องสแกนตรงประตูหมุนตัวหนึ่งไฟเครือข่ายดับ)'),
    p2(26, 'l26-p2-6', 'uk_m', 'us_f', 'Would you rather inspect the turnstile sensors now or after rush hour?', [
      'Yes, they were calibrated last week.',
      'Near the north baggage lockers.',
      'Wait until ten—the platforms will be much quieter.',
    ], 2, 'ตอบ Wait until ten—the platforms will be much quieter. (ถามทางเลือก now or after rush hour ตอบรอสิบโมงตอนคนซาก่อน)'),
    p2(26, 'l26-p2-7', 'us_m', 'uk_f2', 'How long does the harbor ferry crossing take in calm weather?', [
      'Usually twenty-two minutes from dock to dock.',
      'Twice every hour until midnight.',
      'On the upper passenger deck.',
    ], 0, 'ตอบ Usually twenty-two minutes from dock to dock. (ถามระยะเวลา How long ตอบใช้เวลาข้ามฟากประมาณ 22 นาที)'),
    p2(26, 'l26-p2-8', 'ca_f', 'us_m2', 'The barcode scanner at Gate Nine keeps beeping red.', [
      'No, the train hasn’t arrived yet.',
      'Let me swap out its optical lens right away.',
      'Every passenger wears a badge.',
    ], 1, 'ตอบ Let me swap out its optical lens right away. (ประโยคบอกเล่าแจ้งเครื่องเสีย เสนอตัวช่วยเปลี่ยนเลนส์ให้ทันที)'),
    p2(26, 'l26-p2-9', 'au_m', 'ca_f', 'Where should I store the spare coin hoppers for the ticket machines?', [
      'Because the coin slot overflowed.',
      'Last Thursday afternoon.',
      'Lock them inside Cabinet Three in the vault room.',
    ], 2, 'ตอบ Lock them inside Cabinet Three in the vault room. (ถามสถานที่เก็บ Where ตอบให้ล็อกไว้ในตู้หมายเลขสามห้องนิรภัย)'),
    p2(26, 'l26-p2-10', 'uk_f', 'au_m', 'Hasn’t the track signaling upgrade along Line B been completed?', [
      'Crews still need one more night shift near Oakwood.',
      'Yes, the train fare went up slightly.',
      'Along the waterfront promenade.',
    ], 0, 'ตอบ Crews still need one more night shift near Oakwood. (คำถามปฏิเสธ Hasn’t... ตอบข้อเท็จจริงว่ายังต้องทำกะกลางคืนอีกหนึ่งคืน)'),
    p2(26, 'l26-p2-11', 'us_m2', 'uk_f', 'Could you verify how many commuter passes were issued at Terminal C?', [
      'Right next to the luggage claim belt.',
      'I can pull that sales log as soon as I finish this call.',
      'About fifteen minutes ahead of schedule.',
    ], 1, 'ตอบ I can pull that sales log as soon as I finish this call. (ขอให้ตรวจยอด ตอบจะดึงรายงานให้ทันทีที่วางสายนี้)'),
    p2(26, 'l26-p2-12', 'ca_m', 'au_f', 'How often do mechanics clean the bill acceptors inside each kiosk?', [
      'Only thirty dollars in bills.',
      'Near the south bicycle racks.',
      'Once every two weeks during overnight service.',
    ], 2, 'ตอบ Once every two weeks during overnight service. (ถามความถี่ How often ตอบทุกสองสัปดาห์ช่วงซ่อมบำรุงกลางคืน)'),
    p2(26, 'l26-p2-13', 'us_f', 'uk_m', 'What caused the ten-minute hold on the coastal express route?', [
      'A drawbridge clearance check over Cedar River.',
      'Every morning at seven-thirty.',
      'Inside the passenger waiting lounge.',
    ], 0, 'ตอบ A drawbridge clearance check over Cedar River. (ถามสาเหตุ What caused ตอบเพราะการตรวจระยะเปิดปิดสะพานยกข้ามแม่น้ำ)'),
    p2(26, 'l26-p2-14', 'uk_f2', 'ca_m', 'Why don’t we station an attendant beside the new touch-screen kiosks?', [
      'No, I prefer paying with exact change.',
      'That would really help first-time ferry riders.',
      'Until the final train leaves at eleven.',
    ], 1, 'ตอบ That would really help first-time ferry riders. (ข้อเสนอแนะ Why don’t we ตอบเห็นด้วยพร้อมเหตุผลว่าช่วยผู้โดยสารมือใหม่ได้ดี)'),
    p2(26, 'l26-p2-15', 'au_f', 'us_m', 'You already uploaded the weekend ferry timetable, didn’t you?', [
      'By high-speed catamaran.',
      'Across from Gate Twelve.',
      'Actually, Marco is formatting the evening sailings first.',
    ], 2, 'ตอบ Actually, Marco is formatting the evening sailings first. (คำถามย้ำ tag question ตอบเลี่ยงว่า Marco กำลังจัดรูปแบบรอบเย็นอยู่ก่อน)'),
    p2(26, 'l26-p2-16', 'us_m', 'uk_f', 'How much does a combined ferry-and-rail day pass cost for seniors?', [
      'Fourteen dollars with a valid ID card.',
      'Every Friday through Sunday.',
      'At the customer information booth.',
    ], 0, 'ตอบ Fourteen dollars with a valid ID card. (ถามราคา How much ตอบ 14 ดอลลาร์เมื่อแสดงบัตรยืนยันตัวตน)'),
    p2(26, 'l26-p2-17', 'ca_f', 'us_f2', 'Is the pedestrian skybridge to the ferry pier wheelchair accessible?', [
      'No, my ticket expired yesterday.',
      'Yes, elevators operate at both ends.',
      'Roughly three hundred meters long.',
    ], 1, 'ตอบ Yes, elevators operate at both ends. (ถามใช่/ไม่เรื่องทางลาด/ลิฟต์สำหรับรถเข็น ตอบมีลิฟต์ให้บริการทั้งสองฝั่ง)'),
    p2(26, 'l26-p2-18', 'uk_m', 'au_f', 'When did Operations schedule the emergency brake drill for Train Twelve?', [
      'Inside the central maintenance yard.',
      'Because regulations require quarterly tests.',
      'Early Sunday morning before regular service.',
    ], 2, 'ตอบ Early Sunday morning before regular service. (ถามเวลา When ตอบเช้าวันอาทิตย์ก่อนเปิดเดินรถปกติ)'),
    p2(26, 'l26-p2-19', 'us_f2', 'ca_m', 'Who handles lost luggage turned in at the transfer terminal?', [
      'Check with the security desk opposite Platform One.',
      'Mostly backpacks and umbrellas.',
      'Since nine o’clock this morning.',
    ], 0, 'ตอบ Check with the security desk opposite Platform One. (ถามบุคคล/หน่วยงานรับผิดชอบ ตอบแนะนำให้ไปสอบถามโต๊ะ รปภ. ตรงข้ามชานชาลา 1)'),
    p2(26, 'l26-p2-20', 'au_m', 'uk_f2', 'Didn’t the contractor deliver the waterproof kiosk canopies yesterday?', [
      'Yes, the rain stopped around noon.',
      'They rescheduled delivery for Friday due to fog.',
      'Around four thousand dollars total.',
    ], 1, 'ตอบ They rescheduled delivery for Friday due to fog. (ถามปฏิเสธ Didn’t ตอบแจ้งว่าเลื่อนส่งเป็นวันศุกร์เพราะหมอกลงจัด)'),
    p2(26, 'l26-p2-21', 'uk_f', 'us_m2', 'Should passengers transfer luggage at Pier Two or stay on the shuttle?', [
      'Yes, luggage racks are available.',
      'Only two bags per passenger.',
      'Stay aboard—the shuttle loops straight to Rail Gate A.',
    ], 2, 'ตอบ Stay aboard—the shuttle loops straight to Rail Gate A. (ถามทางเลือก A or B ตอบให้นั่งต่อบนรถเพราะวนตรงไปยังประตูรถไฟ A)'),
    p2(26, 'l26-p2-22', 'us_m', 'ca_f', 'How many backup batteries are left in the kiosk repair van?', [
      'Just two, so pick up another case before heading out.',
      'Because power flickered overnight.',
      'Inside the east terminal concourse.',
    ], 0, 'ตอบ Just two, so pick up another case before heading out. (ถามจำนวน How many ตอบเหลือแค่สองก้อน ให้หยิบเพิ่มอีกกล่องก่อนออกปฏิบัติงาน)'),
    p2(26, 'l26-p2-23', 'ca_m', 'uk_f', 'What time does the ticket office window close on public holidays?', [
      'Across from the ferry gangway.',
      'At six P.M., two hours earlier than usual.',
      'Mostly commuter rail vouchers.',
    ], 1, 'ตอบ At six P.M., two hours earlier than usual. (ถามเวลา What time ตอบปิดหกโมงเย็น เร็วกว่าวันปกติสองชั่วโมง)'),
    p2(26, 'l26-p2-24', 'au_f', 'us_f', 'I heard the express line added heated shelters on the outer platforms.', [
      'Right beside the bike lockers.',
      'No, I took the morning ferry instead.',
      'Yes, commuters were thrilled during last week’s frost.',
    ], 2, 'ตอบ Yes, commuters were thrilled during last week’s frost. (ประโยคบอกเล่าแสดงความเห็น ตอบรับสอดคล้องว่าผู้โดยสารดีใจมากช่วงอากาศหนาวจัด)'),
    p2(26, 'l26-p2-25', 'uk_m', 'us_m2', 'Where can maintenance crews park the service truck near Dock Four?', [
      'Use the striped loading apron behind Customs Shed B.',
      'At least forty-five minutes.',
      'To replace a broken fare gate.',
    ], 0, 'ตอบ Use the striped loading apron behind Customs Shed B. (ถามสถานที่จอดรถ Where ตอบให้จอดตรงลานตีเส้นหลังอาคาร B)'),

    // Set 26 Part 3 (13 Conversations × 3 Qs = 39 Qs; Convs 11-13 with Graphics)
    p3(26, 'l26-p3-1', [
      ['Man', 'us_m', 'Nadia, Kiosk Three near the commuter escalators stopped accepting chip cards again during the eight o’clock rush.'],
      ['Woman', 'uk_f', 'Not surprised—that magnetic slot has been worn loose for weeks. Did you switch the screen to cash-and-QR mode?'],
      ['Man', 'us_m', 'Yes, and I posted an attendant beside the queue so riders know to use the mobile tap lane.'],
      ['Woman', 'uk_f', 'Good move. Once morning commuters clear out around ten, I’ll swap in the spare card module from Storage Locker Four.'],
    ], null, [
      ['Part 3 · Problem', 'What issue occurred at Kiosk Three during the morning rush?', [
        'Its chip card reader failed to process payments',
        'Its receipt roll ran out of thermal paper',
        'Its touchscreen froze during ticket selection',
        'Its coin dispenser jammed with foreign currency',
      ], 0, 'ตอบ Its chip card reader failed to process payments (ตัวอ่านบัตรแบบชิปของตู้ที่ 3 ไม่รับบัตรช่วงชั่วโมงเร่งด่วน)'],
      ['Part 3 · Action', 'How did the man reduce delays for waiting commuters?', [
        'By directing riders to use mobile payments with an attendant',
        'By opening the emergency fare gates for free boarding',
        'By unplugging all neighboring ticket kiosks temporarily',
        'By handing out printed timetables on the platform',
      ], 0, 'ตอบ By directing riders to use mobile payments with an attendant (ปรับเป็นโหมดเงินสด/คิวอาร์และจัดพนักงานคอยแนะนำให้แตะจ่ายผ่านมือถือ)'],
      ['Part 3 · Detail', 'When does the woman plan to install the replacement module?', [
        'Around ten o’clock after peak crowds leave',
        'Right after the final ferry arrives tonight',
        'Immediately while commuters wait in line',
        'Tomorrow morning before station doors open',
      ], 0, 'ตอบ Around ten o’clock after peak crowds leave (รอประมาณสิบโมงหลังผู้โดยสารช่วงเช้าซาลงแล้วค่อยเปลี่ยนอะไหล่)'],
    ]),

    p3(26, 'l26-p3-2', [
      ['Woman', 'au_f', 'Excuse me, I just got off the Harbor Express ferry with two oversized equipment cases, and the luggage cart rack by Pier Two is empty.'],
      ['Man', 'ca_m', 'Sorry about that, ma’am. A tour group took the last batch up to the rail concourse ten minutes ago.'],
      ['Woman', 'au_f', 'Oh, I need to catch the nine-forty train on Track Six—can I check these bags or get another cart?'],
      ['Man', 'ca_m', 'Let me radio the ramp attendant to roll three spare carts down the freight lift right now, which takes under two minutes.'],
    ], null, [
      ['Part 3 · Topic', 'Where is this exchange about luggage carts taking place?', [
        'At a ferry-to-rail transfer pier',
        'Inside an airport baggage claim hall',
        'At a suburban hotel valet stand',
        'Outside a commercial shipping warehouse',
      ], 0, 'ตอบ At a ferry-to-rail transfer pier (ผู้หญิงเพิ่งลงเรือเฟอร์รี่ที่ Pier Two เพื่อต่อรถไฟบน Track Six)'],
      ['Part 3 · Reason', 'Why are there no luggage carts available at the rack?', [
        'Another group of travelers recently moved them upstairs',
        'Maintenance workers locked them away for wheel repairs',
        'Severe rain forced staff to store carts indoors',
        'Cart rentals are suspended before nine-forty',
      ], 0, 'ตอบ Another group of travelers recently moved them upstairs (กลุ่มทัวร์เพิ่งเข็นรถเข็นชุดสุดท้ายขึ้นไปโถงรถไฟเมื่อ 10 นาทีก่อน)'],
      ['Part 3 · Action', 'What does the man offer to do for the woman?', [
        'Ask a colleague to send spare carts down by elevator',
        'Store her equipment cases behind the information counter',
        'Hold the nine-forty train for an extra five minutes',
        'Carry her suitcases up the concourse stairs himself',
      ], 0, 'ตอบ Ask a colleague to send spare carts down by elevator (วิทยุเรียกพนักงานทางลาดให้เข็นรถเข็นสำรองลงลิฟต์ขนของมาให้)'],
    ]),

    p3(26, 'l26-p3-3', [
      ['Man', 'uk_m', 'Sonia, Train 204 just pulled into the maintenance bay—the driver reported vibration along the front roof pantograph above ninety miles an hour.'],
      ['Woman', 'us_f2', 'Has the electrical crew isolated the overhead catenary power yet so we can raise the inspection scaffolding?'],
      ['Man', 'uk_m', 'Power lockouts are verified and tagged. We’re waiting on the high-resolution thermal camera from Calibration Lab B.'],
      ['Woman', 'us_f2', 'Grab my backup tablet instead; it runs the same contact-strip diagnostic software so we don’t lose our noon departure slot.'],
    ], null, [
      ['Part 3 · Problem', 'What prompted Train 204 to enter the maintenance bay?', [
        'Unusual vibration in the overhead power collector at high speed',
        'Shattered windshield glass on the front locomotive cab',
        'Overheating brake pads along the rear passenger cars',
        'A scheduled quarterly seat upholstery replacement',
      ], 0, 'ตอบ Unusual vibration in the overhead power collector at high speed (คนขับแจ้งว่าพบรอยสั่นบริเวณอุปกรณ์รับไฟบนหลังคาเมื่อวิ่งเกิน 90 ไมล์ต่อชั่วโมง)'],
      ['Part 3 · Detail', 'What step has already been completed before inspecting the roof?', [
        'Overhead electrical power has been shut off and locked out',
        'Replacement pantograph springs have been bolted into place',
        'Passengers have been transferred to Train 208',
        'The thermal camera has been brought from Calibration Lab B',
      ], 0, 'ตอบ Overhead electrical power has been shut off and locked out (ตัดไฟสายส่งด้านบนและติดป้ายล็อกนิรภัยเรียบร้อยแล้ว)'],
      ['Part 3 · Proposal', 'What does the woman suggest to stay on schedule?', [
        'Using her backup tablet loaded with diagnostic software',
        'Delaying the noon departure until tomorrow morning',
        'Sending a mechanic down to Calibration Lab B by golf cart',
        'Testing the train at lower speed without inspection',
      ], 0, 'ตอบ Using her backup tablet loaded with diagnostic software (เสนอให้ใช้แท็บเล็ตสำรองของเธอที่มีโปรแกรมตรวจเช็กเดียวกันเพื่อจะได้ทันรอบเที่ยง)'],
    ]),

    p3(26, 'l26-p3-4', [
      ['Woman1', 'us_f', 'Before we roll out the software update across all West Concourse kiosks tonight, did anyone test the Spanish audio menu?'],
      ['Man', 'us_m2', 'I ran a trial on Kiosk One at seven, and the voice prompts read clearly, though the contrast toggle took two taps to respond.'],
      ['Woman2', 'uk_f2', 'That’s a screen calibration lag from the older infrared bezels—it only affects Units Four and Five.'],
      ['Woman1', 'us_f', 'Wait—if Unit Four sits right beside the accessible ramp, riders relying on screen readers will notice that delay immediately.'],
      ['Man', 'us_m2', 'True. Let’s swap in our fresh capacitive monitor from the workshop for Unit Four before midnight.'],
    ], null, [
      ['Part 3 · Topic', 'What are the speakers mainly preparing to update?', [
        'Automated ticket kiosk software across a station concourse',
        'Public address loudspeakers inside commuter railcars',
        'Digital menu boards at terminal coffee shops',
        'Employee time-clock terminals in the dispatch office',
      ], 0, 'ตอบ Automated ticket kiosk software across a station concourse (เตรียมอัปเดตซอฟต์แวร์ตู้จำหน่ายตั๋วทั่วโถงตะวันตกคืนนี้)'],
      ['Part 3 · Meaning', 'What does the first woman mean when she says, "Wait—if Unit Four sits right beside the accessible ramp"?', [
        'Its touchscreen lag poses a serious usability issue for riders needing assistance',
        'Contractors placed the kiosk too close to the emergency exit',
        'Passengers with luggage will block traffic around Unit Four',
        'Maintenance crews cannot roll carts past the ramp tonight',
      ], 0, 'ตอบ Its touchscreen lag poses a serious usability issue for riders needing assistance (เน้นย้ำว่าตู้ 4 อยู่ติดทางลาดสำหรับผู้ต้องการความช่วยเหลือ หากจอกดติดช้าจะกระทบผู้ใช้ทันที)'],
      ['Part 3 · Action', 'What will the team do regarding Unit Four before midnight?', [
        'Install a newer capacitive display screen from the workshop',
        'Turn off the Spanish audio prompts temporarily',
        'Relocate the kiosk to the East Concourse lobby',
        'Postpone the software update for every terminal unit',
      ], 0, 'ตอบ Install a newer capacitive display screen from the workshop (เปลี่ยนจอแบบ capacitive ตัวใหม่จากห้องช่างมาใส่ให้ตู้ 4 ก่อนเที่ยงคืน)'],
    ]),

    p3(26, 'l26-p3-5', [
      ['Woman', 'ca_f', 'Captain Reyes, harbor control just forecast an unusually low spring tide between five-thirty and six-forty tomorrow morning.'],
      ['Man', 'au_m', 'Thanks for the early alert, Claire. That cuts clearance at Slip Three too close for our double-deck catamaran.'],
      ['Woman', 'ca_f', 'Should we shift the five-forty sailing back to six-thirty, or dock at the deeper outer berth near Pier One?'],
      ['Man', 'au_m', 'Docking at Pier One keeps commuters synced with the six-fifteen rail express—let’s notify terminal staff to update gate signage tonight.'],
    ], null, [
      ['Part 3 · Problem', 'Why is tomorrow morning’s catamaran operation facing a challenge?', [
        'Low tidal water levels reduce clearance at Slip Three',
        'Strong crosswinds damaged the Pier One passenger shelter',
        'The six-fifteen express train was canceled for repairs',
        'Navigation radar equipment failed an evening test',
      ], 0, 'ตอบ Low tidal water levels reduce clearance at Slip Three (น้ำลงต่ำผิดปกติช่วงเช้ามืดทำให้ความลึกตรงท่าจอด 3 น้อยเกินไป)'],
      ['Part 3 · Decision', 'How does the man decide to handle the morning ferry arrival?', [
        'Move docking to a deeper outer berth to protect rail connections',
        'Cancel the five-forty sailing until midday high tide',
        'Deploy smaller single-deck launches across three trips',
        'Hold the six-fifteen express train for forty minutes',
      ], 0, 'ตอบ Move docking to a deeper outer berth to protect rail connections (ย้ายไปจอดที่ท่า Pier One ที่น้ำลึกกว่าเพื่อไม่ให้พลาดขบวนรถไฟ 6:15 น.)'],
      ['Part 3 · Action', 'What will terminal staff be asked to do tonight?', [
        'Update passenger gate signs to reflect the berth change',
        'Dredge silt around Slip Three with rented pumps',
        'Refund early commuter tickets at the main booth',
        'Reassign train conductors to coastal shuttle buses',
      ], 0, 'ตอบ Update passenger gate signs to reflect the berth change (แจ้งพนักงานให้เปลี่ยนป้ายประตูเทียบเรือคืนนี้)'],
    ]),

    p3(26, 'l26-p3-6', [
      ['Man', 'uk_m', 'Helen, passengers transferring from Pier Four keep missing the turn toward the express train escalators during foggy mornings.'],
      ['Woman', 'us_f', 'Even with the illuminated overhead arrows? Maybe the glazed atrium windows reflect too much glare at dawn.'],
      ['Man', 'uk_m', 'Exactly. Adding gentle directional audio chimes above the archway could guide hurried commuters without raising noise levels.'],
      ['Woman', 'us_f', 'Let’s test a low-volume tone above Gate Seven first and check commuter feedback on Friday’s survey.'],
    ], null, [
      ['Part 3 · Problem', 'What difficulty are ferry riders experiencing after disembarking at Pier Four?', [
        'They overlook the turn leading to the express train escalators',
        'They cannot hear boarding calls over ferry engine noise',
        'They wait in the wrong queue for luggage screening',
        'They slip on damp pavement outside the atrium doors',
      ], 0, 'ตอบ They overlook the turn leading to the express train escalators (ผู้โดยสารเดินเลยทางเลี้ยวไปบันไดเลื่อนรถไฟด่วนในช่วงเช้าที่หมอกลง)'],
      ['Part 3 · Cause', 'What does the woman think contributes to the visibility issue?', [
        'Morning glare reflecting off the atrium glass windows',
        'Flickering bulbs inside the overhead sign boxes',
        'Temporary scaffolding blocking the transfer corridor',
        'Faded floor arrows near the luggage lockers',
      ], 0, 'ตอบ Morning glare reflecting off the atrium glass windows (คาดว่าแสงเช้าสะท้อนกระจกโถงกลางจนมองป้ายไฟไม่ชัด)'],
      ['Part 3 · Proposal', 'What pilot test do the speakers agree to run?', [
        'Installing a soft audio chime above one transfer gate',
        'Posting fluorescent floor stickers along the outdoor pier',
        'Replacing clear atrium glass with tinted panels',
        'Assigning two extra security guards at dawn',
      ], 0, 'ตอบ Installing a soft audio chime above one transfer gate (ทดลองติดเสียงสัญญาณนำทางเบาๆ เหนือ Gate Seven ก่อนแล้วเก็บผลสำรวจวันศุกร์)'],
    ]),

    p3(26, 'l26-p3-7', [
      ['Woman', 'us_f2', 'Hi, I left my monthly smart-card pass inside a cafe coat pocket this morning, and I need to board the commuter rail back to Greenwood.'],
      ['Man', 'ca_m', 'I can issue a forty-eight-hour temporary paper barcode right away if you show a photo ID matching your registered pass account.'],
      ['Woman', 'us_f2', 'Wonderful—here’s my driver’s license. Will my lost plastic card be deactivated automatically so nobody else uses it?'],
      ['Man', 'ca_m', 'Yes, I’m suspending the old serial number now, and if your card turns up later, just bring it here to reactivate instead of paying the fifteen-dollar replacement fee.'],
    ], null, [
      ['Part 3 · Request', 'Why is the woman visiting the customer service counter?', [
        'She misplaced her monthly transit card before her return trip',
        'Her smart card failed to scan at the ferry turnstile',
        'She wants to upgrade her Greenwood pass to first class',
        'A ticket kiosk overcharged her credit card twice',
      ], 0, 'ตอบ She misplaced her monthly transit card before her return trip (เธอลืมบัตรรายเดือนไว้ในกระเป๋าเสื้อที่ร้านกาแฟและต้องการขึ้นรถไฟกลับ)'],
      ['Part 3 · Detail', 'What does the woman need to provide to receive a temporary paper pass?', [
        'A photo identification document matching her account',
        'A printed cafe receipt from this morning',
        'A refundable cash deposit of fifteen dollars',
        'Her original cardboard pass sleeve',
      ], 0, 'ตอบ A photo identification document matching her account (ต้องแสดงบัตรที่มีรูปถ่ายตรงกับบัญชีที่ลงทะเบียนไว้)'],
      ['Part 3 · Detail', 'How can the woman avoid paying a replacement fee?', [
        'By returning her found plastic card to the counter to reactivate',
        'By purchasing a quarterly rail subscription online',
        'By using the temporary paper barcode for the rest of the month',
        'By filing an insurance claim through her employer',
      ], 0, 'ตอบ By returning her found plastic card to the counter to reactivate (หากหาบัตรเดิมเจอสามารถนำมาเปิดใช้งานใหม่โดยไม่ต้องเสียค่าออกบัตร $15)'],
    ]),

    p3(26, 'l26-p3-8', [
      ['Man1', 'us_m', 'Team, track sensors flagged uneven ballast settling along Curve Twelve just south of Riverbend Station.'],
      ['Woman', 'au_f', 'Is it severe enough to impose a speed restriction on afternoon express trains?'],
      ['Man2', 'uk_m', 'Right now trains can run safely at sixty miles an hour instead of ninety, which adds barely four minutes to the corridor schedule.'],
      ['Man1', 'us_m', 'Let’s push that temporary speed order out to dispatchers immediately and book the tamping machine for Thursday midnight.'],
      ['Woman', 'au_f', 'I’ll alert commuter operations now so platform screens show the revised arrival times without confusing evening riders.'],
    ], null, [
      ['Part 3 · Problem', 'What maintenance issue did track sensors detect near Riverbend Station?', [
        'Ground ballast shifting unevenly along a curved track section',
        'Cracked concrete ties beneath the express platform roof',
        'Overhead signal wires sagging after heavy snow',
        'Switch heaters failing to ignite along Curve Twelve',
      ], 0, 'ตอบ Ground ballast shifting unevenly along a curved track section (เซ็นเซอร์พบหินรองรางทรุดตัวไม่สม่ำเสมอตรงโค้ง Curve Twelve)'],
      ['Part 3 · Meaning', 'What does the second man mean when he says, "adds barely four minutes to the corridor schedule"?', [
        'The temporary speed reduction will cause minimal overall delay',
        'Repairs near Curve Twelve can wait until next season',
        'Express trains must skip Riverbend Station completely',
        'Passengers will hardly notice if the tamping crew arrives late',
      ], 0, 'ตอบ The temporary speed reduction will cause minimal overall delay (การลดความเร็วจาก 90 เหลือ 60 ไมล์ต่อชั่วโมงเพิ่มเวลาเดินทางแค่ราว 4 นาที กระทบเล็กน้อยมาก)'],
      ['Part 3 · Action', 'What will the woman do to inform evening rail commuters?', [
        'Coordinate updates to station arrival screens for commuters',
        'Operate the tamping machine on Thursday midnight',
        'Inspect track bolts between Riverbend and North Harbor',
        'Cancel all afternoon express routes until Friday',
      ], 0, 'ตอบ Coordinate updates to station arrival screens for commuters (แจ้งฝ่ายปฏิบัติการให้ปรับเวลาบนจอชานชาลาเพื่อไม่ให้ผู้โดยสารช่วงเย็นสับสน)'],
    ]),

    p3(26, 'l26-p3-9', [
      ['Woman', 'uk_f', 'Carlos, ferry commuters keep dropping Wi-Fi connections whenever they walk from the glass skybridge down toward Platform Three.'],
      ['Man', 'us_m2', 'I ran a signal-strength sweep yesterday—there’s a concrete steel beam above Stairwell B blocking the mezzanine router.'],
      ['Woman', 'uk_f', 'Can we mount a compact ceiling repeater right past the stair landing rather than rewiring the main trunk?'],
      ['Man', 'us_m2', 'Yes, our Power-over-Ethernet ports are already live near that stairwell light fixture, so installation takes less than an hour.'],
    ], null, [
      ['Part 3 · Problem', 'Where are travelers losing wireless internet signal inside the terminal?', [
        'Along the path between the skybridge and Platform Three',
        'Inside the ferry captain’s radio cabin',
        'Around the ticket kiosks in the main lobby',
        'Throughout the underground parking garage',
      ], 0, 'ตอบ Along the path between the skybridge and Platform Three (สัญญาณหลุดช่วงเดินจากสะพานลอยกระจกลงมายังชานชาลา 3)'],
      ['Part 3 · Cause', 'What is interfering with the mezzanine wireless signal?', [
        'A thick structural steel-and-concrete beam near Stairwell B',
        'Interference from high-speed train radio antennas',
        'An unplugged power cable inside the security office',
        'Expired network router firmware from last winter',
      ], 0, 'ตอบ A thick structural steel-and-concrete beam near Stairwell B (คานเหล็กหุ้มคอนกรีตเหนือบันได B บังสัญญาณเราเตอร์ชั้นลอย)'],
      ['Part 3 · Detail', 'Why will adding a ceiling repeater be relatively quick?', [
        'Compatible network power ports are already wired near the landing',
        'The hardware vendor sent a three-person crew on standby',
        'Platform Three closes every afternoon for track sweeping',
        'The repeater runs strictly on long-life solar batteries',
      ], 0, 'ตอบ Compatible network power ports are already wired near the landing (มีพอร์ต Power-over-Ethernet ที่เดินไฟพร้อมแล้วตรงโคมไฟชานพักบันได)'],
    ]),

    p3(26, 'l26-p3-10', [
      ['Man', 'ca_m', 'Nina, our warehouse tally shows only twelve drums of eco-safe rail switch de-icer left before November storms start.'],
      ['Woman', 'us_f', 'That won’t cover two frost nights across the outer junction yards. Did Vendor Ridgeway honor last season’s bulk rate?'],
      ['Man', 'ca_m', 'They quoted six percent higher for pallet delivery, unless we lock in thirty drums before the end of October.'],
      ['Woman', 'us_f', 'Submit the thirty-drum purchase order today—we have shelf space in Shed Four and avoid winter rush surcharges.'],
    ], null, [
      ['Part 3 · Problem', 'What supply issue does the man bring to the woman’s attention?', [
        'Low remaining stock of switch de-icing solution ahead of winter',
        'Broken storage valves inside Shed Four heating tanks',
        'Delayed pallet trucks from Vendor Ridgeway',
        'Corrosion on electrical switches at the outer junction yards',
      ], 0, 'ตอบ Low remaining stock of switch de-icing solution ahead of winter (น้ำยาละลายน้ำแข็งประแจสับรางเหลือเพียง 12 ถังก่อนเข้าช่วงพายุเดือนพฤศจิกายน)'],
      ['Part 3 · Detail', 'How can the railway avoid a six percent price increase?', [
        'By placing a thirty-drum order before October ends',
        'By picking up drums directly from Ridgeway’s plant',
        'By switching to standard rock salt blends',
        'By sharing bulk shipments with the ferry terminal',
      ], 0, 'ตอบ By placing a thirty-drum order before October ends (สั่งซื้อครบ 30 ถังภายในสิ้นเดือนตุลาคมจะได้เรตราคาเดิม)'],
      ['Part 3 · Decision', 'What does the woman instruct the man to order today?', [
        'Place the full thirty-drum order immediately',
        'Request competing quotes from two alternative vendors',
        'Inspect remaining storage capacity in Shed Four first',
        'Wait until November weather forecasts arrive',
      ], 0, 'ตอบ Place the full thirty-drum order immediately (สั่งให้ออกใบสั่งซื้อ 30 ถังวันนี้เลยเพราะมีที่เก็บในโรง 4)'],
    ]),

    p3(26, 'l26-p3-11', [
      ['Woman', 'uk_f2', 'Morning, Leo. A courier just dropped off two fresh Thermal Cutter Assemblies from our depot supplier.'],
      ['Man', 'us_m', 'Awesome timing—I’ve been waiting on those cutters all week. Remind me which concourse unit needs that exact part?'],
      ['Woman', 'uk_f2', 'Check our fault sheet—it’s the kiosk currently sitting offline with an E-42 paper jam code, right beside the North Ferry exit.'],
      ['Man', 'us_m', 'Got it. I’ll take my tool kit down there right now and bring it back online before the ten o’clock ferry docks.'],
    ], doc('table', 'Ticket Kiosk Maintenance Log', [['Updated', '08:30 A.M.'], ['Zone', 'Transfer Concourse']], [
      tbl(['Kiosk ID', 'Location', 'Error Code', 'Required Part'], [
        ['K-104', 'South Escalator', 'E-19', 'Coin Acceptor Motor'],
        ['K-107', 'North Ferry Exit', 'E-42', 'Thermal Cutter Assembly'],
        ['K-112', 'Track 2 Platform', 'E-31', 'NFC Tap Antenna'],
        ['K-115', 'Main Ticket Hall', 'E-08', 'Screen Backlight Strip'],
      ]),
    ]), [
      ['Part 3 · Detail', 'What shipment did the courier recently deliver?', [
        'Replacement Thermal Cutter Assemblies',
        'Backup NFC Tap Antennas',
        'High-capacity coin acceptor motors',
        'Touchscreen backlight strips',
      ], 0, 'ตอบ Replacement Thermal Cutter Assemblies (เจ้าหน้าที่ส่งพัสดุเพิ่งนำชุดตัดกระดาษความร้อน Thermal Cutter Assemblies มาส่ง)'],
      ['Part 3 · Graphic', 'Look at the graphic. Which kiosk will the man repair next?', [
        'K-107',
        'K-104',
        'K-112',
        'K-115',
      ], 0, 'ตอบ K-107 (ตารางแสดงว่าตู้ K-107 ตรงทางออกเฟอร์รี่ฝั่งเหนือขึ้นรหัส E-42 และต้องใช้ชิ้นส่วน Thermal Cutter Assembly)'],
      ['Part 3 · Action', 'By when does the man hope to restore the kiosk?', [
        'Before the ten o’clock ferry arrival',
        'After evening rush hour concludes',
        'Following the noon platform sweep',
        'Before tomorrow morning’s shift',
      ], 0, 'ตอบ Before the ten o’clock ferry arrival (ตั้งใจจะซ่อมให้กลับมาใช้งานได้ทันก่อนเรือเฟอร์รี่รอบสิบโมงเข้าเทียบท่า)'],
    ]),

    p3(26, 'l26-p3-12', [
      ['Woman1', 'ca_f', 'Excuse me, we’re stepping off the Harbor Jet ferry at ten-fifteen with a stroller, so we need at least twelve minutes to take the elevator up to the trains.'],
      ['Man', 'au_m', 'Let’s glance at the transfer board together. Normally Harbor Jet docks at Pier Two, which gives a tight seven-minute dash to the local train.'],
      ['Woman2', 'us_f', 'Wait—isn’t the express bound for Oakwood Station departing slightly later from Track Five?'],
      ['Man', 'au_m', 'Yes, that’s a smooth thirteen-minute connection with wide-door elevator access straight up from Pier Two.'],
      ['Woman1', 'ca_f', 'Perfect, we’ll take that train to Oakwood and grab coffee on the concourse on the way.'],
    ], doc('table', 'Morning Ferry-to-Rail Transfer Board', [['Terminal', 'Bayview Hub'], ['Effective', 'Weekdays']], [
      tbl(['Ferry Arrival', 'Pier', 'Connecting Train', 'Departure', 'Transfer Time'], [
        ['10:15 A.M.', 'Pier 2', 'Local 402 (Track 1)', '10:22 A.M.', '7 min'],
        ['10:15 A.M.', 'Pier 2', 'Express 118 (Track 5)', '10:28 A.M.', '13 min'],
        ['10:30 A.M.', 'Pier 4', 'Coastal 305 (Track 3)', '10:41 A.M.', '11 min'],
        ['10:45 A.M.', 'Pier 1', 'Express 122 (Track 6)', '11:02 A.M.', '17 min'],
      ]),
    ]), [
      ['Part 3 · Detail', 'Why does the first woman want at least twelve minutes to transfer?', [
        'She is traveling with a stroller and needs elevator access',
        'She plans to stop at the lost luggage office first',
        'She has to purchase printed passes at the kiosk',
        'She expects her ferry arrival to run ten minutes late',
      ], 0, 'ตอบ She is traveling with a stroller and needs elevator access (เธอเข็นรถเข็นเด็กจึงต้องเผื่อเวลาขึ้นลิฟต์อย่างน้อย 12 นาที)'],
      ['Part 3 · Graphic', 'Look at the graphic. Which train will the travelers most likely board?', [
        'Express 118',
        'Local 402',
        'Coastal 305',
        'Express 122',
      ], 0, 'ตอบ Express 118 (เรือรอบ 10:15 น. ที่ Pier 2 ต่อขบวน Express 118 ที่ Track 5 มีเวลาเปลี่ยนถ่าย 13 นาที ตรงตามเงื่อนไข)'],
      ['Part 3 · Detail', 'What do the travelers plan to do on the way to the platform?', [
        'Pick up coffee on the station concourse',
        'Store extra bags in a concourse locker',
        'Meet a tour guide near Pier Four',
        'Validate commuter tickets at Gate Five',
      ], 0, 'ตอบ Pick up coffee on the station concourse (ผู้หญิงคนแรกบอกว่าจะแวะซื้อกาแฟที่โถงสถานีระหว่างเดินไปขึ้นรถไฟ)'],
    ]),

    p3(26, 'l26-p3-13', [
      ['Man', 'uk_m', 'Priya, contractors start waterproofing the West Atrium ceiling tomorrow, so we’re temporarily closing one transfer corridor.'],
      ['Woman', 'uk_f', 'Which route is shifting? I need to brief our ticket booth staff before morning shifts start.'],
      ['Man', 'uk_m', 'Anyone heading from Ferry Slip A toward the High-Speed Express tracks should follow the temporary signage via Gallery North instead.'],
      ['Woman', 'uk_f', 'Got it—I’ll remind staff that the temporary detour stays open right up until the restoration finishes on June eighteenth.'],
    ], doc('box', 'Terminal Corridor Detour Notice', [['Project', 'Atrium Skylight Sealing']], [
      box('Temporary Route Reassignments (June 4 – June 18)', [
        'Corridor A (Slip A → High-Speed Express): Closed — Detour via Gallery North',
        'Corridor B (Slip B → Regional Platforms): Open (Normal Access)',
        'Corridor C (Slip C → Bus Plaza): Open (Elevator 2 Under Service June 6)',
        'Corridor D (Taxi Bay → Ticket Hall): Open (Nightly Cleaning 11 P.M.–4 A.M.)',
      ]),
    ]), [
      ['Part 3 · Topic', 'What construction work is starting at the terminal tomorrow?', [
        'Sealing leaks along the West Atrium skylight ceiling',
        'Installing new security turnstiles at Corridor B',
        'Repaving the bus plaza outside Slip C',
        'Replacing elevators inside the main ticket hall',
      ], 0, 'ตอบ Sealing leaks along the West Atrium skylight ceiling (ผู้รับเหมาจะเริ่มงานกันซึมหลังคา/ช่องแสง West Atrium)'],
      ['Part 3 · Graphic', 'Look at the graphic. Which corridor will be closed during the project?', [
        'Corridor A',
        'Corridor B',
        'Corridor C',
        'Corridor D',
      ], 0, 'ตอบ Corridor A (ผู้ชายบอกเส้นทางจาก Ferry Slip A ไป High-Speed Express ปิดปรับปรุงและให้เลี่ยงไป Gallery North ซึ่งตรงกับ Corridor A ในประกาศ)'],
      ['Part 3 · Action', 'Who will the woman update before tomorrow’s morning shift?', [
        'Staff working at the terminal ticket booths',
        'Waterfront ferry captains and deckhands',
        'High-speed rail track inspection crews',
        'Contractors delivering roofing supplies',
      ], 0, 'ตอบ Staff working at the terminal ticket booths (เธอจะแจ้งพนักงานประจำบูธจำหน่ายตั๋วก่อนเข้ากะเช้า)'],
    ]),

    // Set 26 Part 4 (10 Talks × 3 Qs = 30 Qs; Talks 8-10 with Graphics)
    p4(26, 'l26-p4-1', 'the following railway platform announcement', 'uk_f',
      'Attention Bayview Station passengers waiting for the four-twenty high-speed express to Silverton. Due to an unscheduled inspection on overhead power lines near Track Two, this afternoon’s departure will board from Track Five instead. Please follow the illuminated orange arrows through the underpass. As a reminder, bike racks are located in Car Six at the rear of the train, and hot snacks are served in Car Three.',
      null, [
        ['Part 4 · Topic', 'What is the main purpose of the announcement?', [
          'To inform commuters of a boarding track change',
          'To announce the cancellation of the Silverton express',
          'To advertise discounted dining car meals',
          'To remind riders to lock bicycles outside the station',
        ], 0, 'ตอบ To inform commuters of a boarding track change (แจ้งผู้โดยสารให้ย้ายไปขึ้นรถไฟขบวนสี่โมงยี่สิบที่ชานชาลา 5 แทนชานชาลา 2)'],
        ['Part 4 · Reason', 'Why is the train not departing from Track Two?', [
          'Crews are conducting an unscheduled overhead line check',
          'Cleaning staff are still washing the passenger coaches',
          'Track Two is blocked by a freight locomotive',
          'Storm flooding damaged the Track Two escalator',
        ], 0, 'ตอบ Crews are conducting an unscheduled overhead line check (มีการตรวจสายไฟฟ้าเหนือรางโดยไม่ได้นัดหมายใกล้ Track Two)'],
        ['Part 4 · Detail', 'Which train car provides bicycle storage racks?', [
          'Car Six',
          'Car Two',
          'Car Three',
          'Car Five',
        ], 0, 'ตอบ Car Six (ประกาศระบุชั้นวางจักรยานอยู่ในตู้ Car Six ท้ายขบวน)'],
      ]),

    p4(26, 'l26-p4-2', 'the following recorded telephone message', 'us_m',
      'Thank you for calling SwiftFare Automated Kiosk Support. If you are a station technician calling regarding frozen card terminals following Tuesday’s security firmware patch, press one to download our diagnostic reset sheet directly to your tablet. For urgent replacement parts including bill acceptors, thermal printers, or coin hoppers, please stay on the line with your kiosk serial number ready. Our parts dispatch warehouse operates daily until nine P.M.',
      null, [
        ['Part 4 · Audience', 'Who is the first option in this message intended for?', [
          'Station technicians troubleshooting frozen card terminals',
          'Commuters requesting refunds for unused transit passes',
          'Software engineers designing mobile payment apps',
          'Delivery drivers dropping off thermal paper rolls',
        ], 0, 'ตอบ Station technicians troubleshooting frozen card terminals (กด 1 สำหรับช่างเทคนิคประจำสถานีที่พบปัญหาเครื่องอ่านบัตรค้างหลังอัปเดตเฟิร์มแวร์)'],
        ['Part 4 · Detail', 'What information should callers prepare when requesting replacement parts?', [
          'The serial number of the kiosk',
          'A copy of the Tuesday patch invoice',
          'The station manager’s employee badge',
          'Photos of the damaged coin slot',
        ], 0, 'ตอบ The serial number of the kiosk (ให้เตรียมหมายเลขซีเรียลของตู้จำหน่ายตั๋วไว้ก่อนถือสายรอ)'],
        ['Part 4 · Detail', 'When does the replacement parts warehouse close each day?', [
          'At 9:00 P.M.',
          'At 5:00 P.M.',
          'At 7:30 P.M.',
          'At midnight',
        ], 0, 'ตอบ At 9:00 P.M. (คลังจัดส่งอะไหล่เปิดให้บริการทุกวันจนถึง 21:00 น.)'],
      ]),

    p4(26, 'l26-p4-3', 'the following ferry terminal broadcast', 'au_m',
      'May I have your attention, Harbor Link travelers? Dense coastal fog near Lighthouse Point has slowed incoming vessels, delaying the eleven-fifteen ferry arrival by twenty-five minutes. Passengers holding connecting tickets for the eleven-thirty coastal train should proceed immediately to Curbside Bay B outside the West Doors. Complimentary express shuttle coaches are standing by to drive you directly to Central Rail Depot in under ten minutes.',
      null, [
        ['Part 4 · Problem', 'What weather condition is causing ferry delays today?', [
          'Thick coastal fog slowing incoming boats',
          'High ocean waves flooding the passenger dock',
          'Sudden hailstorms blocking terminal roadways',
          'Strong gusts snapping mooring cables',
        ], 0, 'ตอบ Thick coastal fog slowing incoming boats (หมอกหนาชายฝั่งใกล้ Lighthouse Point ทำให้เรือเข้าเทียบท่าช้าลง 25 นาที)'],
        ['Part 4 · Action', 'What should travelers with 11:30 train tickets do now?', [
          'Board free shuttle buses outside the West Doors',
          'Exchange their rail tickets for afternoon ferry passes',
          'Wait in the upstairs lounge until fog clears',
          'Walk through the harbor tunnel to Central Rail Depot',
        ], 0, 'ตอบ Board free shuttle buses outside the West Doors (ให้เดินไปขึ้นรถชัตเทิลบัสฟรีที่จุด Curbside Bay B นอกประตูฝั่งตะวันตกทันที)'],
        ['Part 4 · Detail', 'How long does the shuttle ride to Central Rail Depot take?', [
          'Less than ten minutes',
          'Exactly twenty-five minutes',
          'About fifteen minutes',
          'Nearly half an hour',
        ], 0, 'ตอบ Less than ten minutes (รถบัสด่วนใช้เวลาส่งถึง Central Rail Depot ไม่ถึง 10 นาที)'],
      ]),

    p4(26, 'l26-p4-4', 'the following excerpt from an operations meeting', 'ca_f',
      'Looking at last month’s corridor report, our high-speed trains lost an average of ninety seconds per station solely during peak evening boarding. Travelers with rolling suitcases hesitate near narrow vestibule doors because overhead luggage signs sit too far down the aisle. Starting Monday, we’ll apply bright green boarding strips along platform edge doors and mount clear rack markers inside every doorway. Remember, shaving a minute per stop puts the whole evening fleet back on time.',
      null, [
        ['Part 4 · Problem', 'What has been delaying high-speed trains during evening peak hours?', [
          'Passengers pausing near narrow doors while locating luggage racks',
          'Malfunctioning ticket scanners at station entrance turnstiles',
          'Slow mechanical switches between downtown and suburban tracks',
          'Delayed ferry transfers holding back platform departures',
        ], 0, 'ตอบ Passengers pausing near narrow doors while locating luggage racks (ผู้โดยสารที่มีกระเป๋าล้อลากลังเลตรงประตูตู้เพราะป้ายชั้นวางสัมภาระอยู่ลึกเข้าไปด้านใน)'],
        ['Part 4 · Action', 'What visual change will be added to trains starting Monday?', [
          'Clear luggage rack markers mounted beside every doorway',
          'Digital seat reservation screens above each window',
          'Wider hydraulic steps along platform curbs',
          'Extra overhead handles inside Car Three',
        ], 0, 'ตอบ Clear luggage rack markers mounted beside every doorway (ติดป้ายบอกจุดวางสัมภาระให้ชัดเจนตรงบริเวณประตูทุกบานและติดแถบสีเขียวที่ชานชาลา)'],
        ['Part 4 · Meaning', 'What does the speaker mean when she says, "shaving a minute per stop puts the whole evening fleet back on time"?', [
          'Small time savings at each station eliminate cumulative schedule delays',
          'Conductors should reduce platform dwell times by skipping minor stops',
          'Evening express trains need higher maximum cruising speeds',
          'Maintenance crews should shorten overnight car cleaning shifts',
        ], 0, 'ตอบ Small time savings at each station eliminate cumulative schedule delays (ประหยัดเวลาได้แค่สถานีละหนึ่งนาทีก็ช่วยให้ขบวนรถช่วงเย็นทั้งหมดตรงเวลาได้)'],
      ]),

    p4(26, 'l26-p4-5', 'the following maintenance briefing', 'us_m2',
      'Before tonight’s shift begins on Concourse B, listen closely to our updated kiosk lockout procedure. Whenever servicing bill acceptors or high-voltage printer power supplies, you must turn off the wall breaker behind the steel service door and clip your personal red padlock onto the switch latch. Never rely solely on the software shutdown button inside the menu. Afterward, log each coin-hopper calibration reading in the tablet tracker before restoring power.',
      null, [
        ['Part 4 · Topic', 'What is the main focus of this Concourse B briefing?', [
          'Electrical safety steps during ticket kiosk servicing',
          'Installing new contactless payment readers in Concourse B',
          'Counting cash deposits at the end of evening shifts',
          'Cleaning touchscreen glass without scratching coatings',
        ], 0, 'ตอบ Electrical safety steps during ticket kiosk servicing (ขั้นตอนตัดไฟและล็อกความปลอดภัยขณะซ่อมบำรุงตู้จำหน่ายตั๋ว)'],
        ['Part 4 · Detail', 'What must technicians attach after shutting off the wall breaker?', [
          'Their personal red safety padlock',
          'A yellow magnetic calibration tag',
          'A printed inspection sticker from Operations',
          'A secondary software reset cable',
        ], 0, 'ตอบ Their personal red safety padlock (ต้องคล้องแม่กุญแจสีแดงส่วนตัวเข้ากับสลักสวิตช์เบรกเกอร์)'],
        ['Part 4 · Detail', 'What should workers record on their tablet before turning power back on?', [
          'Readings from coin-hopper calibration checks',
          'Total bills collected from each machine',
          'Firmware version numbers on every screen',
          'Door hinge lubrication inspection times',
        ], 0, 'ตอบ Readings from coin-hopper calibration checks (บันทึกค่าการคาลิเบรตช่องรับเหรียญลงแท็บเล็ตก่อนเปิดไฟกลับมา)'],
      ]),

    p4(26, 'l26-p4-6', 'the following radio transit report', 'uk_m',
      'Good morning, commuters—here is your seven-thirty Harbor Transit update. Coastal ferries and high-speed rail lines are running right on schedule despite overnight drizzle. However, municipal engineers are inspecting expansion joints on the Oak Street Bridge until ten A.M., closing one eastbound lane leading toward South Ferry Terminal. Drivers dropping off rail passengers should plan ten extra minutes or use the Park-and-Ride lot at Junction Nine, where trains run directly into the harbor hub.',
      null, [
        ['Part 4 · Detail', 'How are high-speed rail lines operating at the time of the broadcast?', [
          'They are running on time',
          'They are delayed twenty minutes by drizzle',
          'They are detouring around Junction Nine',
          'They are suspended until ten A.M.',
        ], 0, 'ตอบ They are running on time (ผู้ประกาศแจ้งว่ารถไฟความเร็วสูงและเรือเฟอร์รี่วิ่งตรงเวลาปกติ)'],
        ['Part 4 · Problem', 'What is causing slower vehicle traffic near South Ferry Terminal?', [
          'An engineering bridge inspection closing one eastbound lane',
          'A minor traffic collision outside Junction Nine',
          'Repaving work along the harbor parking lot',
          'Heavy morning fog reducing bridge visibility',
        ], 0, 'ตอบ An engineering bridge inspection closing one eastbound lane (วิศวกรเทศบาลกำลังตรวจรอยต่อขยายบนสะพาน Oak Street ทำให้ปิดหนึ่งช่องจราจรฝั่งตะวันออกถึงสิบโมง)'],
        ['Part 4 · Proposal', 'What alternative does the broadcaster suggest for commuters driving in?', [
          'Parking at Junction Nine and riding the train directly in',
          'Taking the coastal bus route across West Harbor',
          'Walking across the Oak Street pedestrian bridge',
          'Postponing travel until after midday',
        ], 0, 'ตอบ Parking at Junction Nine and riding the train directly in (แนะนำให้จอดรถที่ลาน Park-and-Ride ตรง Junction Nine แล้วนั่งรถไฟเข้าศูนย์กลางท่าเรือ)'],
      ]),

    p4(26, 'l26-p4-7', 'the following staff training orientation', 'us_f2',
      'Welcome to your first morning at the Bayview Multi-Modal Transfer Desk. Our terminal serves over eighteen thousand ferry and commuter rail passengers daily, so quick, accurate guidance matters. Whenever a traveler’s ferry runs late and causes them to miss a reserved express train, you don’t need supervisor sign-off to revalidate their ticket for the next departure. Simply scan their pass under the Disruption Override menu and hand them a green priority boarding slip.',
      null, [
        ['Part 4 · Audience', 'Who is listening to this transfer desk orientation?', [
          'Newly assigned transfer desk staff members',
          'Experienced high-speed train engineers',
          'Ferry ticket kiosk repair contractors',
          'First-time harbor commuters',
        ], 0, 'ตอบ Newly assigned transfer desk staff members (ปฐมนิเทศพนักงานใหม่ประจำเคาน์เตอร์เปลี่ยนถ่ายการเดินทางในเช้าวันแรก)'],
        ['Part 4 · Detail', 'What can staff do without asking a supervisor when a delayed ferry causes a missed train?', [
          'Revalidate the traveler’s pass for the next departure',
          'Issue full cash refunds for round-trip tickets',
          'Hold departing express railcars for five minutes',
          'Book free rideshare vouchers to Silverton',
        ], 0, 'ตอบ Revalidate the traveler’s pass for the next departure (สามารถสแกนรับรองตั๋วให้ผู้โดยสารขึ้นรถไฟขบวนถัดไปได้เลยโดยไม่ต้องขออนุมัติหัวหน้า)'],
        ['Part 4 · Detail', 'What item should staff give passengers after scanning their pass?', [
          'A green priority boarding slip',
          'A stamped luggage transfer tag',
          'A complimentary terminal coffee coupon',
          'A printed harbor ferry timetable',
        ], 0, 'ตอบ A green priority boarding slip (ยื่นใบขึ้นรถเร่งด่วนสีเขียวให้ผู้โดยสารหลังจากสแกนผ่านเมนู Disruption Override)'],
      ]),

    p4(26, 'l26-p4-8', 'the following fare schedule and announcement', 'ca_m',
      'Good afternoon, Bayview riders. Next Monday our simplified zonal fare structure launches across all automated station kiosks and ticket booths. Regular travelers using both the commuter rail and harbor ferry can now bundle crossings directly onto one smart card. If you commute three rail zones during midday off-peak hours and add the ferry segment, you’ll automatically pay the lowest single-ticket off-peak tier shown on the posted chart—just tap the Bundle button before inserting payment.',
      doc('table', 'Bayview Combined Fare Schedule (Per Single Trip)', [['Effective', 'Next Monday'], ['Currency', 'USD']], [
        tbl(['Travel Distance', 'Peak Rail Only', 'Off-Peak Rail Only', 'Off-Peak Rail + Ferry'], [
          ['Zones 1–2', '$4.50', '$3.25', '$6.00'],
          ['Zones 1–3', '$6.00', '$4.50', '$7.25'],
          ['Zones 1–4', '$7.50', '$5.75', '$8.50'],
          ['Zones 1–5', '$9.00', '$6.75', '$9.50'],
        ]),
      ]), [
        ['Part 4 · Topic', 'What change is taking effect next Monday?', [
          'A simplified combined rail-and-ferry zonal pricing system',
          'Free midday ferry crossings for senior pass holders',
          'The removal of cash payment slots from station kiosks',
          'Hourly express service extending to Zone Six',
        ], 0, 'ตอบ A simplified combined rail-and-ferry zonal pricing system (วันจันทร์หน้าจะเริ่มใช้โครงสร้างค่าโดยสารแบบแบ่งโซนที่รวมรถไฟและเรือเฟอร์รี่ไว้ในสมาร์ตการ์ดเดียว)'],
        ['Part 4 · Graphic', 'Look at the graphic. How much will a passenger pay for a single off-peak trip across three zones with the ferry add-on?', [
          '$7.25',
          '$6.00',
          '$4.50',
          '$8.50',
        ], 0, 'ตอบ $7.25 (ผู้พูดระบุเดินทาง 3 โซนช่วงนอกเวลาเร่งด่วน off-peak พร้อมพ่วงเรือเฟอร์รี่ เมื่อดูแถว Zones 1–3 ช่อง Off-Peak Rail + Ferry คือ $7.25)'],
        ['Part 4 · Action', 'What should riders select at the kiosk to receive the combined rate?', [
          'The Bundle button before paying',
          'The Express Upgrade menu on the main screen',
          'The Multi-Day Tourist Pass tab',
          'The Print Paper Receipt icon',
        ], 0, 'ตอบ The Bundle button before paying (ต้องกดปุ่ม Bundle บนหน้าจอตู้ก่อนชำระเงิน)'],
      ]),

    p4(26, 'l26-p4-9', 'the following maintenance checklist and voicemail message', 'uk_f2',
      'Hi Sam, it’s Tessa calling from Pier Concourse. I’m wrapping up the emergency firmware upgrade on Kiosk Nine before the evening ferries arrive. I already backed up today’s transaction logs and installed the security patch smoothly, and I’m just waiting for the reboot prompt right now. Could you meet me here in ten minutes? Since the screen asks for a supervisor security PIN on the step right after rebooting, I can’t test contactless taps on my own.',
      doc('list', 'Kiosk Firmware Rollout Protocol', [['Unit Type', 'Touch Kiosk V4'], ['Est. Time', '25 Mins']], [
        lst([
          'Step 1: Export daily transaction audit file to USB drive',
          'Step 2: Apply encrypted security patch via maintenance port',
          'Step 3: Perform full power cycle and system reboot',
          'Step 4: Run test card & NFC tap verification (Supervisor PIN required)',
          'Step 5: Re-lock front cabinet and switch unit to public mode',
        ]),
      ]), [
        ['Part 4 · Detail', 'Which tasks has Tessa already completed on Kiosk Nine?', [
          'Backing up transaction logs and applying the security patch',
          'Testing NFC taps and locking the front cabinet',
          'Replacing the card reader bezel and USB drive',
          'Cleaning the touchscreen and restarting the power cycle',
        ], 0, 'ตอบ Backing up transaction logs and applying the security patch (Tessa แจ้งว่าสำรองไฟล์รายการขายและติดตั้งแพตช์ความปลอดภัยเรียบร้อยแล้ว)'],
        ['Part 4 · Graphic', 'Look at the graphic. Which step requires Sam’s assistance?', [
          'Step 4',
          'Step 1',
          'Step 3',
          'Step 5',
        ], 0, 'ตอบ Step 4 (ผู้พูดระบุว่าขั้นถัดไปหลังรีบูตต้องใช้รหัส Supervisor PIN ซึ่งตรงกับ Step 4: Run test card & NFC tap verification ในรายการ)'],
        ['Part 4 · Request', 'When does Tessa ask Sam to arrive at Pier Concourse?', [
          'In ten minutes',
          'After the last evening ferry leaves',
          'At the start of tomorrow’s shift',
          'Immediately without waiting for reboot',
        ], 0, 'ตอบ In ten minutes (Tessa ขอให้ Sam มาพบที่โถงท่าเรือในอีกสิบนาที)'],
      ]),

    p4(26, 'l26-p4-10', 'the following terminal directory and tour update', 'us_f',
      'Welcome to your walking tour of the newly expanded Harbor Rail-and-Ferry Terminal. We’re currently standing inside the Lower Atrium near the main escalator bank. Please note one recent layout change from printed brochures: because construction crews widened the commuter turnstiles downstairs, our Customer Lost-and-Found Office moved upstairs one level yesterday, right across from the express coffee bar. After we tour the observation deck above us, we’ll take the glass lift straight down to the boat boarding slips.',
      doc('box', 'Harbor Terminal Level Directory', [['Building', 'South Transfer Hub']], [
        box('Floor Guide', [
          'Level 3 — Rooftop Observation Deck & Solar Canopy',
          'Level 2 — Skybridge to City Bus Plaza, Express Coffee Bar & Lost-and-Found',
          'Level 1 — Lower Atrium, Ticket Kiosks & Commuter Rail Platforms',
          'Level B1 — Waterfront Ferry Slips 1–6 & Luggage Cart Depot',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. On which level is the Lost-and-Found Office currently located?', [
          'Level 2',
          'Level 1',
          'Level 3',
          'Level B1',
        ], 0, 'ตอบ Level 2 (ผู้พูดบอกว่าห้อง Lost-and-Found ย้ายขึ้นไปหนึ่งชั้นจาก Lower Atrium ไปอยู่ตรงข้าม express coffee bar ซึ่งตามผังคือ Level 2)'],
        ['Part 4 · Reason', 'Why was the Lost-and-Found Office relocated yesterday?', [
          'Crews expanded the commuter ticket turnstiles downstairs',
          'Water leaks damaged electrical wiring on Level B1',
          'The express coffee bar needed additional kitchen seating',
          'Tour groups complained about long lines in the Lower Atrium',
        ], 0, 'ตอบ Crews expanded the commuter ticket turnstiles downstairs (ทีมช่างขยายช่องประตูหมุนชั้นล่างเลยต้องย้ายห้องของหายขึ้นชั้นบน)'],
        ['Part 4 · Action', 'Where will the tour group go right after visiting the observation deck?', [
          'Down by glass elevator to the ferry boarding slips',
          'Across the skybridge to the city bus plaza',
          'Into the control room above Track One',
          'Back to the ticket kiosks for transit card demos',
        ], 0, 'ตอบ Down by glass elevator to the ferry boarding slips (หลังชมดาดฟ้าแล้วจะลงลิฟต์กระจกตรงไปยังท่าเทียบเรือเฟอร์รี่)'],
      ]),

    // ==================== SET 27 ====================
    // Themes: Fine Art Auction House, Conservation Framing Studio, Charity Foundation Fundraising Dinner
    p1(27, 'l27-p1-1', 'us_f', [
      'An auctioneer is packing sculptures into wooden shipping crates.',
      'White pedestals have been stacked in the corner of a hallway.',
      'Visitors are examining framed paintings hung along a gallery wall.',
      'A painter is wiping dust from a large ceiling light.',
    ], 2, 'ตอบ Visitors are examining framed paintings hung along a gallery wall. (ผู้เข้าชมกำลังยืนพิจารณางานจิตรกรรมใส่กรอบที่แขวนเรียงตามผนังแกลเลอรี)'),
    p1(27, 'l27-p1-2', 'uk_m', [
      'Glass sheets are being unloaded from a delivery van.',
      'A framer is measuring a mat board with a metal ruler.',
      'Oil canvases are hanging from clotheslines above a sink.',
      'Two technicians are polishing brass plaques on a podium.',
    ], 1, 'ตอบ A framer is measuring a mat board with a metal ruler. (ช่างทำกรอบรูปกำลังใช้ไม้บรรทัดโลหะวัดแผ่นกระดาษรองภาพบนโต๊ะทำงาน)'),
    p1(27, 'l27-p1-3', 'ca_f', [
      'Waitstaff are clearing empty plates from a banquet table.',
      'Guests are applauding a speaker near a stage curtain.',
      'Potted orchids are being watered along a stone patio.',
      'Round dining tables have been set with folded napkins and glassware.',
    ], 3, 'ตอบ Round dining tables have been set with folded napkins and glassware. (โต๊ะจัดเลี้ยงทรงกลมถูกจัดเตรียมไว้ด้วยผ้าเช็ดปากพับเรียบร้อยและชุดแก้วน้ำ)'),
    p1(27, 'l27-p1-4', 'au_m', [
      'A man standing behind a wooden lectern is raising a small gavel.',
      'Bidders are handing numbered paddles to a cashier.',
      'Curators are hanging velvet curtains across an archway.',
      'Catalogs are scattered across the floor near a doorway.',
    ], 0, 'ตอบ A man standing behind a wooden lectern is raising a small gavel. (ผู้ชายที่ยืนหลังแท่นบรรยายไม้กำลังยกค้อนประมูลขนาดเล็กขึ้น)'),
    p1(27, 'l27-p1-5', 'uk_f2', [
      'Carpenters are sanding long planks beside an open window.',
      'Framing tools have been left inside an open cardboard box.',
      'Wooden frame moldings are sorted upright inside tall storage racks.',
      'A customer is signing an invoice at a wooden counter.',
    ], 2, 'ตอบ Wooden frame moldings are sorted upright inside tall storage racks. (ไม้คิ้วกรอบรูปถูกจัดวางตั้งเรียงแยกประเภทไว้ในชั้นเก็บทรงสูง)'),
    p1(27, 'l27-p1-6', 'us_m2', [
      'Musicians are tuning violins beside a grand staircase.',
      'A woman is handing a printed program to a guest at a reception desk.',
      'Name badges are being laminated near a coat check booth.',
      'Several diners are carrying trays toward a buffet table.',
    ], 1, 'ตอบ A woman is handing a printed program to a guest at a reception desk. (ผู้หญิงตรงโต๊ะต้อนรับกำลังยื่นสูจิบัตรพิมพ์ให้แขกที่มาร่วมงาน)'),

    // Set 27 Part 2 (25 Qs)
    p2(27, 'l27-p2-1', 'us_m', 'uk_f', 'Where are the pre-auction viewing catalogs stacked for tonight’s guests?', [
      'On the mahogany console beside the main gallery doors.',
      'Mostly nineteenth-century oil landscapes.',
      'Starting promptly at seven-thirty.',
    ], 0, 'ตอบ On the mahogany console beside the main gallery doors. (ถามสถานที่ Where ตอบวางเรียงบนโต๊ะไม้มะฮอกกานีข้างประตูห้องแสดงภาพ)'),
    p2(27, 'l27-p2-2', 'ca_f', 'us_m2', 'Who is delivering the keynote speech at Friday’s charity gala?', [
      'Inside the grand crystal ballroom.',
      'Dr. Elena Vance from the Pediatric Arts Trust.',
      'Over two hundred thousand dollars last year.',
    ], 1, 'ตอบ Dr. Elena Vance from the Pediatric Arts Trust. (ถามบุคคล Who ตอบชื่อผู้กล่าวปาฐกถาในงานการกุศลวันศุกร์)'),
    p2(27, 'l27-p2-3', 'uk_m', 'au_f', 'Why did the conservation studio switch to UV-filtering museum glass?', [
      'About forty-eight by thirty-six inches.',
      'Next to the framing workshop counter.',
      'It prevents watercolor pigments from fading over time.',
    ], 2, 'ตอบ It prevents watercolor pigments from fading over time. (ถามเหตุผล Why ตอบเพราะช่วยป้องกันสีน้ำซีดจางในระยะยาว)'),
    p2(27, 'l27-p2-4', 'au_m', 'us_f', 'When does absentee online bidding close for Lot Forty-Two?', [
      'Exactly two hours before the live gavel opens.',
      'Only registered collectors with verified deposits.',
      'Because the starting bid was revised upward.',
    ], 0, 'ตอบ Exactly two hours before the live gavel opens. (ถามเวลา When ตอบปิดรับประมูลออนไลน์ล่วงหน้าสองชั่วโมงก่อนเริ่มประมูลสด)'),
    p2(27, 'l27-p2-5', 'us_f2', 'ca_m', 'Would you prefer walnut or brushed-brass molding around the landscape print?', [
      'Yes, it hangs in the north parlor.',
      'Let’s go with walnut—it warms up the autumn tones.',
      'Under two hundred dollars including tax.',
    ], 1, 'ตอบ Let’s go with walnut—it warms up the autumn tones. (ถามทางเลือก A or B ตอบเลือกไม้วอลนัตพร้อมเหตุผล)'),
    p2(27, 'l27-p2-6', 'uk_f', 'us_m', 'Has the catering company confirmed the vegetarian entrée count yet?', [
      'No, dinner starts at eight sharp.',
      'Roasted squash risotto with herbs.',
      'Their chef emailed the updated tally around ten.',
    ], 2, 'ตอบ Their chef emailed the updated tally around ten. (ถามว่ายืนยันหรือยัง ตอบเชฟอีเมลยอดอัปเดตมาให้ตอนสิบโมงแล้ว)'),
    p2(27, 'l27-p2-7', 'ca_m', 'uk_f2', 'How long will it take to stretch and frame the oversized tapestry?', [
      'Allow at least ten business days for custom backing.',
      'In the climate-controlled archive room.',
      'Yes, cotton thread matches the border.',
    ], 0, 'ตอบ Allow at least ten business days for custom backing. (ถามระยะเวลา How long ตอบต้องใช้เวลาอย่างน้อย 10 วันทำการ)'),
    p2(27, 'l27-p2-8', 'us_m2', 'au_f', 'Isn’t the silent auction table supposed to sit near the courtyard entrance?', [
      'Thirty-five donated items in total.',
      'We moved it inside because evening winds picked up.',
      'Yes, bid sheets require a phone number.',
    ], 1, 'ตอบ We moved it inside because evening winds picked up. (คำถามปฏิเสธ Isn’t... ตอบแจ้งเหตุผลที่ย้ายโต๊ะเข้ามาด้านในแทน)'),
    p2(27, 'l27-p2-9', 'au_f', 'uk_m', 'Which restoration specialist cleaned the nineteenth-century harbor oil painting?', [
      'By removing darkened resin varnish carefully.',
      'On the third-floor conservation easel.',
      'Mr. Okafor handled the varnish removal himself.',
    ], 2, 'ตอบ Mr. Okafor handled the varnish removal himself. (ถามเลือกบุคคล Which specialist ตอบคุณ Okafor เป็นผู้ดูแลเอง)'),
    p2(27, 'l27-p2-10', 'uk_f2', 'us_f', 'The bid paddle printer ran out of heavyweight card stock.', [
      'There’s an unopened ream inside the supply closet.',
      'Three hundred guests registered online.',
      'At the volunteer check-in counter.',
    ], 0, 'ตอบ There’s an unopened ream inside the supply closet. (ประโยคบอกเล่าแจ้งกระดาษหมด บอกพิกัดว่ามีรีมใหม่ในตู้เก็บของ)'),
    p2(27, 'l27-p2-11', 'us_m', 'ca_f', 'How many guests reserved seats at the Patron Circle tables?', [
      'Because sponsors requested front-row seating.',
      'Forty-eight so far, with two more expected tonight.',
      'Through the foundation website last week.',
    ], 1, 'ตอบ Forty-eight so far, with two more expected tonight. (ถามจำนวน How many ตอบตอนนี้จองแล้ว 48 ที่นั่ง)'),
    p2(27, 'l27-p2-12', 'ca_f', 'uk_m', 'Could you verify the provenance certificate for the bronze sculpture?', [
      'Yes, it stood in the courtyard garden.',
      'Around six thousand five hundred dollars.',
      'Our archivist is double-checking the signature right now.',
    ], 2, 'ตอบ Our archivist is double-checking the signature right now. (ขอให้ช่วยตรวจเอกสาร ตอบเจ้าหน้าที่จดหมายเหตุกำลังตรวจสอบให้อยู่พอดี)'),
    p2(27, 'l27-p2-13', 'uk_m', 'us_f2', 'Why don’t we offer a framed lithograph as the raffle grand prize?', [
      'Donors always respond enthusiastically to limited prints.',
      'Next Saturday evening at the museum annex.',
      'No, raffle tickets sold out yesterday.',
    ], 0, 'ตอบ Donors always respond enthusiastically to limited prints. (ข้อเสนอแนะ Why don’t we ตอบเห็นด้วยเพราะผู้บริจาคชอบภาพพิมพ์จำนวนจำกัดมาก)'),
    p2(27, 'l27-p2-14', 'au_m', 'ca_f', 'Did the acoustic string quartet arrive for the cocktail reception?', [
      'Mainly classical pieces by request.',
      'They’re setting up music stands near the conservatory.',
      'For roughly ninety minutes before dinner.',
    ], 1, 'ตอบ They’re setting up music stands near the conservatory. (ถามว่ามาถึงหรือยัง ตอบแบบแจ้งการกระทำว่ากำลังตั้งขาตั้งโน้ตอยู่)'),
    p2(27, 'l27-p2-15', 'us_f', 'uk_f2', 'How much is the buyer’s premium on fine jewelry lots this season?', [
      'Only certified appraisals over five carats.',
      'At the settlement cashier desk downstairs.',
      'Eighteen percent on hammer prices up to fifty thousand.',
    ], 2, 'ตอบ Eighteen percent on hammer prices up to fifty thousand. (ถามอัตราค่าธรรมเนียม How much ตอบ 18 เปอร์เซ็นต์ตามเกณฑ์ราคา)'),
    p2(27, 'l27-p2-16', 'ca_m', 'au_m', 'Where should we store the acid-free foam boards away from humidity?', [
      'Keep them flat inside the climate-controlled vault.',
      'Because moisture warps cardboard corners.',
      'Every shipment arrives wrapped in kraft paper.',
    ], 0, 'ตอบ Keep them flat inside the climate-controlled vault. (ถามสถานที่เก็บ Where ตอบให้วางราบไว้ในห้องนิรภัยคุมความชื้น)'),
    p2(27, 'l27-p2-17', 'uk_f', 'us_m2', 'You invited the museum curator to preview the estate collection, didn’t you?', [
      'Several landscape sketches from Rome.',
      'Yes, she booked a private tour for Wednesday morning.',
      'Right across from the framing counter.',
    ], 1, 'ตอบ Yes, she booked a private tour for Wednesday morning. (คำถามย้ำ didn’t you ตอบรับว่าจองรอบเข้าชมส่วนตัวเช้าวันพุธแล้ว)'),
    p2(27, 'l27-p2-18', 'us_m2', 'ca_f', 'What time do the ballroom doors open for VIP foundation sponsors?', [
      'Around twelve sponsor tables total.',
      'In the historic mezzanine gallery.',
      'At six sharp, half an hour ahead of general seating.',
    ], 2, 'ตอบ At six sharp, half an hour ahead of general seating. (ถามเวลา What time ตอบเปิดประตูหกโมงตรง ก่อนแขกทั่วไปครึ่งชั่วโมง)'),
    p2(27, 'l27-p2-19', 'au_f', 'us_f', 'Can our framing van fit the six-foot gilded mirror through the rear alley?', [
      'Better measure the loading bay clearance first.',
      'Yes, the brass leaf looks freshly restored.',
      'Before four o’clock tomorrow afternoon.',
    ], 0, 'ตอบ Better measure the loading bay clearance first. (ถามว่าขนเข้าได้ไหม ตอบเลี่ยงอย่างเป็นธรรมชาติให้ไปวัดความสูงช่องโหลดก่อน)'),
    p2(27, 'l27-p2-20', 'uk_m', 'ca_m', 'Who approved the revised seating chart for Table Nine?', [
      'Near the center floral arrangement.',
      'Ms. Bellamy signed off after yesterday’s donor call.',
      'Eight place cards with gold trim.',
    ], 1, 'ตอบ Ms. Bellamy signed off after yesterday’s donor call. (ถามบุคคล Who ตอบคุณ Bellamy เซ็นอนุมัติหลังโทรคุยกับผู้บริจาคเมื่อวาน)'),
    p2(27, 'l27-p2-21', 'us_f2', 'au_m', 'Should the pledge cards include a QR code for mobile donations?', [
      'Every contributor receives a tax receipt.',
      'On heavy cream cotton paper.',
      'Definitely—half our contributors prefer paying by phone.',
    ], 2, 'ตอบ Definitely—half our contributors prefer paying by phone. (ถามความเห็น Should... ตอบเห็นด้วยเต็มที่เพราะผู้บริจาคครึ่งหนึ่งชอบสแกนจ่ายผ่านมือถือ)'),
    p2(27, 'l27-p2-22', 'ca_f', 'uk_f', 'How often are humidity sensors calibrated inside the auction vault?', [
      'Twice a year by an independent lab.',
      'Between forty-five and fifty percent.',
      'Right beside the freight elevator.',
    ], 0, 'ตอบ Twice a year by an independent lab. (ถามความถี่ How often ตอบปีละสองครั้งโดยห้องแล็บอิสระ)'),
    p2(27, 'l27-p2-23', 'us_m', 'au_f', 'I heard the foundation surpassed last year’s fundraising goal by twenty percent.', [
      'For community youth art scholarships.',
      'Wait until you hear the final matching pledge total.',
      'Yes, tickets went on sale in August.',
    ], 1, 'ตอบ Wait until you hear the final matching pledge total. (ประโยคบอกเล่าแสดงความยินดี ตอบรับสอดคล้องให้รอลุ้นยอดสมทบสุดท้ายด้วย)'),
    p2(27, 'l27-p2-24', 'uk_f2', 'us_m2', 'Hasn’t the silver tea service been photographed for the online catalog yet?', [
      'Yes, it dates back to eighteen-ninety.',
      'Along with four matching candlesticks.',
      'The studio lighting rig won’t be free until two.',
    ], 2, 'ตอบ The studio lighting rig won’t be free until two. (คำถามปฏิเสธ Hasn’t... ตอบแจ้งเหตุผลว่ายังไม่ได้ถ่ายเพราะชุดไฟสตูดิโอว่างตอนบ่ายสอง)'),
    p2(27, 'l27-p2-25', 'au_m', 'uk_m', 'Which auctioneer is handling the live charity paddle raise after dinner?', [
      'Hannah Brooks—she’s raised record totals for three years.',
      'Right after the dessert plates are cleared.',
      'Inside the West Pavilion Tent.',
    ], 0, 'ตอบ Hannah Brooks—she’s raised record totals for three years. (ถามเลือกบุคคล Which auctioneer ตอบชื่อ Hannah Brooks ผู้ทำสถิติยอดบริจาคสูงสุด)'),

    // Set 27 Part 3 (13 Conversations × 3 Qs = 39 Qs; Convs 11-13 with Graphics)
    p3(27, 'l27-p3-1', [
      ['Woman', 'uk_f', 'Daniel, the London collector who won Lot Nineteen just emailed—he wants the landscape painting delivered by Friday rather than next week.'],
      ['Man', 'us_m', 'Friday is tight because it still needs a custom foam-lined wooden crate. Has our shipping partner cleared the export paperwork yet?'],
      ['Woman', 'uk_f', 'Yes, customs forms are signed. If our woodshop builds the crate this afternoon, can Express Art Van load it onto tomorrow’s morning flight?'],
      ['Man', 'us_m', 'Let me call their air-freight coordinator right now to hold space on the early cargo plane.'],
    ], null, [
      ['Part 3 · Topic', 'What transport arrangement are the auction staff planning?', [
        'Expedited crating and air transport for a sold painting',
        'Customs appraisal fees for an incoming estate collection',
        'Framing materials for an upcoming gallery preview',
        'Insurance coverage for an auction viewing room',
      ], 0, 'ตอบ Expedited crating and air transport for a sold painting (เร่งทำลังไม้บุโฟมและส่งงานศิลปะ Lot 19 ทางเครื่องบินให้ทันวันศุกร์)'],
      ['Part 3 · Detail', 'Which step for the shipment has already been completed?', [
        'Export customs documents have been approved',
        'The wooden shipping crate has been sealed',
        'Express Art Van has picked up the canvas',
        'Air-freight cargo space has been paid for',
      ], 0, 'ตอบ Export customs documents have been approved (ผู้หญิงแจ้งว่าเอกสารศุลกากรส่งออกลงนามเรียบร้อยแล้ว)'],
      ['Part 3 · Action', 'What will the man do to reserve tomorrow’s cargo flight space?', [
        'Telephone the carrier to reserve cargo flight space',
        'Email the London collector to decline Friday delivery',
        'Drive to the woodshop to measure the painting frame',
        'Request duplicate customs signatures from legal staff',
      ], 0, 'ตอบ Telephone the carrier to reserve cargo flight space (ผู้ชายจะโทรหาผู้ประสานงานขนส่งทางอากาศเพื่อจองพื้นที่เที่ยวบินเช้าวันพรุ่งนี้)'],
    ]),

    p3(27, 'l27-p3-2', [
      ['Man', 'ca_m', 'Good afternoon, I brought in this vintage botanical print my grandmother left me—I’d like it preserved without harming the deckled paper edges.'],
      ['Woman', 'au_f', 'Smart choice. For delicate edges like these, we avoid dry-mounting glue completely and float the artwork using Japanese mulberry paper hinges.'],
      ['Man', 'ca_m', 'That sounds ideal. Should we pair it with a pale linen mat so the ink doesn’t touch the glazing directly?'],
      ['Woman', 'au_f', 'Yes, an eight-ply conservation mat leaves plenty of breathing space behind UV-shielded acrylic, and I’ll draft two frame samples for you to compare.'],
    ], null, [
      ['Part 3 · Request', 'What is the man’s main priority for his botanical print?', [
        'Protecting its natural paper borders during framing',
        'Trimming worn edges to fit a standard frame size',
        'Restoring faded green watercolor tones',
        'Finding an inexpensive frame for a bright kitchen',
      ], 0, 'ตอบ Protecting its natural paper borders during framing (ต้องการเก็บรักษาขอบกระดาษเดิมไว้ไม่ให้เสียหายขณะเข้ากรอบ)'],
      ['Part 3 · Detail', 'How does the woman recommend securing the print inside the frame?', [
        'Using gentle Japanese paper hinges instead of full glue',
        'Pressing the print onto heated dry-mount board',
        'Taping all four corners directly onto clear acrylic',
        'Placing heavy canvas backing tight against the ink',
      ], 0, 'ตอบ Using gentle Japanese paper hinges instead of full glue (หลีกเลี่ยงกาวทั้งแผ่นและใช้บานพับกระดาษสาญี่ปุ่นแทน)'],
      ['Part 3 · Action', 'What will the woman prepare next for the print customer?', [
        'Prepare two frame molding options for the client to inspect',
        'Order custom deckled paper sheets from Japan',
        'Glue the linen mat onto the back of the print',
        'Cut UV-shielded glass sheets before measuring',
      ], 0, 'ตอบ Prepare two frame molding options for the client to inspect (เธอจะจัดทำตัวอย่างกรอบ 2 แบบให้ลูกค้าเลือกเทียบ)'],
    ]),

    p3(27, 'l27-p3-3', [
      ['Woman1', 'us_f2', 'Guys, we just ran a microphone check inside the Heritage Ballroom, and the podium mic buzzes whenever the overhead spotlights dim.'],
      ['Man', 'uk_m', 'That’s electrical interference from the stage dimmer pack sharing the same floor outlet as the sound mixer.'],
      ['Woman2', 'ca_f', 'Can we run a heavy-duty extension cord from the kitchen service corridor? Donors arrive in forty-five minutes.'],
      ['Man', 'uk_m', 'Better yet, I’ll plug our mixer into the isolated wall circuit behind the piano so there’s no loose cable across the doorway.'],
      ['Woman1', 'us_f2', 'Perfect—I’ll also verify our sponsor thank-you slides load properly while you switch the power plug.'],
    ], null, [
      ['Part 3 · Problem', 'What technical issue did the team discover during the sound check?', [
        'Static buzzing from the stage microphone when lights dim',
        'A cracked speaker wire behind the grand piano',
        'Blurred projection slides listing gala donors',
        'Missing wireless batteries for the auctioneer’s headset',
      ], 0, 'ตอบ Static buzzing from the stage microphone when lights dim (ไมโครโฟนบนโพเดียมมีเสียงฮัมทุกครั้งที่หรี่ไฟสปอตไลต์)'],
      ['Part 3 · Cause', 'What caused the audio interference?', [
        'Lighting dimmers and audio equipment using the same outlet',
        'Low battery voltage inside handheld microphones',
        'Acoustic echo bouncing off ballroom chandeliers',
        'Loose extension cables near the kitchen doorway',
      ], 0, 'ตอบ Lighting dimmers and audio equipment using the same outlet (ตัวหรี่ไฟเวทีกับเครื่องผสมเสียงเสียบปลั๊กพื้นวงจรเดียวกัน)'],
      ['Part 3 · Meaning', 'What does the man mean when he says, "so there’s no loose cable across the doorway"?', [
        'Using the wall outlet behind the piano avoids creating a tripping hazard',
        'The kitchen corridor lacks grounded three-prong outlets',
        'Sponsor slides should be controlled wirelessly from backstage',
        'Ballroom doors will remain locked until donors arrive',
      ], 0, 'ตอบ Using the wall outlet behind the piano avoids creating a tripping hazard (ย้ายไปเสียบปลั๊กผนังหลังเปียโนจะได้ไม่ต้องลากสายพาดประตูให้แขกสะดุด)'],
    ]),

    p3(27, 'l27-p3-4', [
      ['Man', 'us_m2', 'Claire, Lot Seventy-Four—the eighteenth-century porcelain vase—already has three absentee bids above estimate, and two phone specialists just requested live lines.'],
      ['Woman', 'uk_f2', 'Make sure both phone clerks review our increment chart before the lot opens; last month someone jumped five thousand dollars out of sequence.'],
      ['Man', 'us_m2', 'I briefed them ten minutes ago. Should we also display the vase on the turntable under the front stage camera?'],
      ['Woman', 'uk_f2', 'Definitely—in-room buyers love seeing the glaze pattern rotate under studio lights before bidding starts.'],
    ], null, [
      ['Part 3 · Topic', 'What item are the speakers discussing before an auction?', [
        'A rare porcelain vase attracting strong early bids',
        'A damaged display turntable on the auction stage',
        'A silver bowl missing its catalog photography',
        'A collection of vintage telephone consoles',
      ], 0, 'ตอบ A rare porcelain vase attracting strong early bids (แจกันพอร์ซเลน Lot 74 ที่มีผู้ประมูลล่วงหน้าสูงกว่าราคาประเมินแล้ว)'],
      ['Part 3 · Detail', 'Why does the woman caution the phone bidding clerks?', [
        'A clerk previously announced an incorrect bid increment',
        'Telephone reception in the front gallery is unreliable',
        'Absentee clients prefer texting rather than live calls',
        'Auction paddles must be matched to guest deposits',
      ], 0, 'ตอบ A clerk previously announced an incorrect bid increment (เดือนก่อนมีพนักงานรับโทรศัพท์กระโดดขั้นราคาผิดจังหวะไปห้าพันดอลลาร์)'],
      ['Part 3 · Decision', 'What do the speakers agree to do during the sale of Lot 74?', [
        'Rotate the vase on a lit display turntable for bidders',
        'Raise the minimum opening price by five thousand dollars',
        'Limit bidding exclusively to in-room paddle holders',
        'Keep the vase locked inside a glass cabinet offstage',
      ], 0, 'ตอบ Rotate the vase on a lit display turntable for bidders (นำแจกันขึ้นจานหมุนใต้ไฟสตูดิโอหน้าเวทีให้ผู้ประมูลในห้องเห็นลวดลายเคลือบชัดเจน)'],
    ]),

    p3(27, 'l27-p3-5', [
      ['Woman', 'au_f', 'Hi Mark, it’s Tessa at Oakwood Gallery. Are the six walnut exhibition frames we ordered still scheduled for pickup Thursday?'],
      ['Man', 'uk_m', 'I’m really glad you called—our fine-tooth miter blade chipped cutting hardwood yesterday, and the replacement blade arrives this afternoon.'],
      ['Woman', 'au_f', 'Oh no, our photography exhibit opens Saturday morning! Can you finish four frames by Friday noon if we hang the smaller pair later?'],
      ['Man', 'uk_m', 'Yes, once that blade locks onto the saw at three today, I’ll stay late assembling your four main frames so they’re cured and ready Friday morning.'],
    ], null, [
      ['Part 3 · Problem', 'Why are the gallery’s six walnut frames delayed?', [
        'A specialized saw blade damaged during cutting awaits replacement',
        'Hardwood walnut molding sold out at the lumber distributor',
        'Museum glass sheets cracked inside the delivery crate',
        'Glue joints required extra drying time in damp weather',
      ], 0, 'ตอบ A specialized saw blade damaged during cutting awaits replacement (ใบเลื่อยตัดมุมละเอียดบิ่นเมื่อวาน กำลังรออะไหล่มาส่งช่วงบ่าย)'],
      ['Part 3 · Proposal', 'What compromise does the woman suggest so her exhibit opens on time?', [
        'Picking up four key frames first and hanging two smaller ones later',
        'Switching the order from walnut molding to painted aluminum',
        'Postponing the Oakwood Gallery opening until next Thursday',
        'Borrowing display easels from the framing studio',
      ], 0, 'ตอบ Picking up four key frames first and hanging two smaller ones later (ขอรับกรอบหลัก 4 ชิ้นก่อนภายในวันศุกร์ ส่วนคู่เล็กค่อยแขวนทีหลัง)'],
      ['Part 3 · Action', 'What does the man promise to do today once the blade arrives?', [
        'Work extra hours assembling the four priority frames',
        'Deliver completed frames directly to Oakwood Gallery',
        'Refund the deposit on the two smaller prints',
        'Order spare miter blades for next month',
      ], 0, 'ตอบ Work extra hours assembling the four priority frames (จะอยู่ทำล่วงเวลาประกอบกรอบหลักทั้ง 4 ชิ้นให้เสร็จพร้อมรับเช้าวันศุกร์)'],
    ]),

    p3(27, 'l27-p3-6', [
      ['Man', 'us_m', 'Elena, I just walked past the VIP tables for tonight’s charity dinner—those tall white orchid centerpieces look stunning, except they block the stage screen.'],
      ['Woman', 'us_f', 'Oh, you’re right! Guests sitting on the far left won’t see the youth scholarship video when the lights dim.'],
      ['Man', 'us_m', 'Should we ask the florist’s assistant to trim the stems down, or swap them into low glass bowls?'],
      ['Woman', 'us_f', 'Swapping to low glass bowls takes five minutes and keeps every blossom intact—plus we can move the tall vases beside the entrance coat check.'],
    ], null, [
      ['Part 3 · Problem', 'What issue did the man notice inside the dinner venue?', [
        'Tall floral centerpieces obstruct the view of the stage screen',
        'White orchids have started wilting under warm spotlights',
        'VIP guest tables are spaced too far from the stage',
        'Entrance coat check lacks decorative arrangements',
      ], 0, 'ตอบ Tall floral centerpieces obstruct the view of the stage screen (แจกันดอกกล้วยไม้ทรงสูงบังจอภาพบนเวที)'],
      ['Part 3 · Detail', 'When would the blocked sightline matter most during the evening?', [
        'While guests watch the scholarship video presentation',
        'During the silent auction check-out process',
        'While servers pour coffee after dessert',
        'When valet drivers return guest vehicles',
      ], 0, 'ตอบ While guests watch the scholarship video presentation (แขกฝั่งซ้ายจะมองไม่เห็นวิดีโอทุนการศึกษาตอนหรี่ไฟ)'],
      ['Part 3 · Decision', 'What will the speakers do with the tall orchid vases?', [
        'Transfer blossoms to low bowls and place tall vases near the entrance',
        'Ask the florist’s assistant to trim half the flower stems',
        'Remove flowers completely from all VIP guest tables',
        'Raise the stage projection screen two feet higher',
      ], 0, 'ตอบ Transfer blossoms to low bowls and place tall vases near the entrance (ย้ายดอกไม้ลงชามแก้วเตี้ยแทน ส่วนแจกันสูงยกไปตั้งตรงจุดฝากเสื้อทางเข้า)'],
    ]),

    p3(27, 'l27-p3-7', [
      ['Man1', 'ca_m', 'Helen, our autumn catalog goes to the printer at five today, and the archivist just raised a question about Lot Thirty-One.'],
      ['Woman', 'uk_f', 'Wait—isn’t that the unsigned coastal watercolor attributed to Thomas Mercer? What did the lab report say?'],
      ['Man2', 'au_m', 'Under infrared scan, the paper watermark actually dates to nineteen-twenty-eight, twelve years after Mercer retired from painting.'],
      ['Woman', 'uk_f', 'Thank goodness we checked before printing! Pull Lot Thirty-One from the autumn catalog immediately until we verify the true artist.'],
      ['Man1', 'ca_m', 'Already flagged—I’ll slot the verified harbor etching from our reserve shelf onto Page Eighteen instead.'],
    ], null, [
      ['Part 3 · Problem', 'What did the infrared scan reveal about Lot Thirty-One?', [
        'Its paper watermark is newer than the attributed artist’s career',
        'Hidden pencil sketches lie beneath the watercolor paint',
        'Mold spores damaged the back of the watercolor paper',
        'Someone painted over Thomas Mercer’s signature recently',
      ], 0, 'ตอบ Its paper watermark is newer than the attributed artist’s career (ลายน้ำกระดาษผลิตในปี 1928 ซึ่งหลังศิลปิน Thomas Mercer เกษียณไปแล้ว 12 ปี)'],
      ['Part 3 · Meaning', 'What does the woman mean when she says, "Thank goodness we checked before printing!"?', [
        'Catching the attribution error early avoided distributing inaccurate catalogs',
        'The printer charged extra for infrared color photography',
        'The harbor etching arrived just in time for appraisal',
        'Collectors had already placed high bids on the watercolor',
      ], 0, 'ตอบ Catching the attribution error early avoided distributing inaccurate catalogs (ดีใจที่ตรวจพบความคลาดเคลื่อนก่อนส่งโรงพิมพ์ตอนห้าโมงเย็น)'],
      ['Part 3 · Action', 'How will the first man adjust Page Eighteen before the five o’clock deadline?', [
        'Substitute an authenticated harbor etching from reserve storage',
        'Print a revised artist biography below Lot Thirty-One',
        'Delay the print run until next Tuesday morning',
        'Leave Page Eighteen blank with an online link',
      ], 0, 'ตอบ Substitute an authenticated harbor etching from reserve storage (นำภาพกัดกรดรูปท่าเรือที่ยืนยันแท้แล้วจากชั้นสำรองมาลงแทนในหน้า 18)'],
    ]),

    p3(27, 'l27-p3-8', [
      ['Woman', 'us_f2', 'Sam, remember how long checkout lines dragged on after last year’s charity paddle raise? Guests waited twenty minutes just to swipe cards.'],
      ['Man', 'us_m', 'Right—our single desk terminal couldn’t handle ninety donors paying simultaneously. What’s our backup plan for Saturday?'],
      ['Woman', 'us_f2', 'I rented four wireless tablet readers and arranged with the hotel for a dedicated private Wi-Fi channel solely for payment traffic.'],
      ['Man', 'us_m', 'Smart. I’ll assign four volunteers who have retail cashier experience to roam the foyer with those tablets as soon as bidding wraps up.'],
    ], null, [
      ['Part 3 · Problem', 'What issue occurred at the end of last year’s charity dinner?', [
        'Guests faced slow payment queues due to limited terminal capacity',
        'Hotel wireless passwords expired midway through dinner',
        'Volunteers misplaced printed credit card receipts',
        'Bidders disputed final amounts after leaving the ballroom',
      ], 0, 'ตอบ Guests faced slow payment queues due to limited terminal capacity (เครื่องรูดบัตรมีเครื่องเดียวทำให้แขกรอคิวชำระเงินนานถึง 20 นาที)'],
      ['Part 3 · Detail', 'What arrangement did the woman make with the hotel for Saturday?', [
        'Securing an isolated Wi-Fi channel dedicated to payment processing',
        'Reserving three extra cashier desks inside the main lobby',
        'Extending valet parking hours past midnight',
        'Borrowing tablet stands from the hotel gift shop',
      ], 0, 'ตอบ Securing an isolated Wi-Fi channel dedicated to payment processing (เช่าเครื่องอ่านบัตรแท็บเล็ต 4 เครื่องและขอช่องสัญญาณ Wi-Fi แยกเฉพาะการจ่ายเงินจากโรงแรม)'],
      ['Part 3 · Action', 'Who will the man select to operate the mobile payment tablets?', [
        'Volunteers who previously worked as retail cashiers',
        'Hotel front-desk supervisors on night shift',
        'Off-duty auctioneers from the main ballroom',
        'Foundation accountants sitting at table one',
      ], 0, 'ตอบ Volunteers who previously worked as retail cashiers (จัดอาสาสมัครที่มีประสบการณ์แคชเชียร์ร้านค้า 4 คนเดินรับชำระเงินตรงโถงด้านหน้า)'],
    ]),

    p3(27, 'l27-p3-9', [
      ['Man', 'uk_m', 'Look at the bottom corner of this antique gilt mirror frame—two inches of decorative plaster leaf flaked off during transit.'],
      ['Woman', 'ca_f', 'Let’s make a silicone mold from the intact upper corner so the carved floral scroll matches seamlessly.'],
      ['Man', 'uk_m', 'Good thinking. Once the fresh gesso sets tomorrow morning, should I match the antique gold using real twenty-two-karat leaf or metallic wax?'],
      ['Woman', 'ca_f', 'Use genuine gold leaf with an aged dark-umber wash over top—the client specifically requested conservation-grade restoration.'],
    ], null, [
      ['Part 3 · Problem', 'What damage is the antique mirror frame showing?', [
        'A section of carved plaster decoration chipped off one bottom corner',
        'The mirror glass cracked diagonally during wall mounting',
        'Dark moisture stains discolored the wooden backing board',
        'Hinges on the back panel rusted loose',
      ], 0, 'ตอบ A section of carved plaster decoration chipped off one bottom corner (ลวดลายปูนปั้นปิดทองตรงมุมล่างหลุดลอกไปราวสองนิ้วระหว่างขนส่ง)'],
      ['Part 3 · Proposal', 'How will the restorers recreate the missing floral scroll shape?', [
        'By casting a silicone mold from an undamaged corner',
        'By ordering an identical mass-produced plastic corner',
        'By carving fresh oak wood by hand without a mold',
        'By sanding down all four corners to look smooth',
      ], 0, 'ตอบ By casting a silicone mold from an undamaged corner (ทำแม่พิมพ์ซิลิโคนจากมุมบนที่ยังสมบูรณ์เพื่อให้ลายเข้ากันสนิท)'],
      ['Part 3 · Detail', 'Why does the woman insist on genuine gold leaf rather than metallic wax?', [
        'The client paid for authentic conservation-grade restoration',
        'Metallic wax takes three days longer to dry indoors',
        'Gold leaf matches modern aluminum molding more evenly',
        'Metallic wax cannot adhere to silicone plaster',
      ], 0, 'ตอบ The client paid for authentic conservation-grade restoration (ลูกค้าระบุขอการบูรณะระดับอนุรักษ์โดยตรง)'],
    ]),

    p3(27, 'l27-p3-10', [
      ['Woman', 'au_f', 'Derek, three hundred dinner guests are arriving between six and six-thirty tomorrow, and our street lane outside the museum gets narrow around valet drop-off.'],
      ['Man', 'us_m2', 'I checked with city traffic enforcement—we’re cleared to cone off one curb lane exclusively for taxis and valet cars from five-thirty onward.'],
      ['Woman', 'au_f', 'Great. What about directing arriving patrons quickly out of the cold toward coat check?'],
      ['Man', 'us_m2', 'I’ve stationed two umbrella ushers at the curb and four coat-check attendants inside the vestibule so lines never back up outdoors.'],
    ], null, [
      ['Part 3 · Topic', 'What logistical challenge are the speakers planning for?', [
        'Preventing evening traffic and entry bottlenecks at a gala dinner',
        'Organizing auction crate delivery trucks along a back alley',
        'Assigning museum guards to overnight gallery surveillance',
        'Relocating coat check racks to an outdoor heated tent',
      ], 0, 'ตอบ Preventing evening traffic and entry bottlenecks at a gala dinner (วางแผนจัดการจราจรจุดส่งแขกและคิวรับฝากเสื้อคลุมสำหรับแขก 300 คน)'],
      ['Part 3 · Detail', 'What permission did the man obtain from city traffic enforcement?', [
        'Reserving one street lane solely for valet and taxi drop-offs',
        'Closing the entire avenue to public buses until midnight',
        'Parking guest vehicles along the museum courtyard lawn',
        'Running shuttle vans without valet permits',
      ], 0, 'ตอบ Reserving one street lane solely for valet and taxi drop-offs (ได้รับอนุญาตให้ตั้งกรวยกันช่องจราจรริมทาง 1 เลนไว้สำหรับรถรับฝากและแท็กซี่)'],
      ['Part 3 · Detail', 'How will staff reduce waiting outdoors in cold weather?', [
        'By positioning four coat-check workers inside the entryway',
        'By installing infrared heaters above the street lane',
        'By asking guests to leave coats inside their vehicles',
        'By opening ballroom doors an hour earlier than scheduled',
      ], 0, 'ตอบ By positioning four coat-check workers inside the entryway (วางเจ้าหน้าที่รับฝากเสื้อ 4 คนด้านในโถงทางเข้าเพื่อระบายแถวได้เร็ว)'],
    ]),

    p3(27, 'l27-p3-11', [
      ['Man', 'uk_m', 'Nina, a private collector just called from Geneva asking about our upcoming Modernist Works sale.'],
      ['Woman', 'us_f', 'Which piece caught his eye? We have several strong landscapes in Friday’s session.'],
      ['Man', 'uk_m', 'He has a strict maximum budget of six thousand dollars and refuses to buy anything listed as needing frame or surface restoration.'],
      ['Woman', 'us_f', 'Let’s check the reserve sheet—only one piece meets both conditions directly. I’ll email him its condition photos right away.'],
    ], doc('table', 'Friday Auction Lot Summary', [['Session', 'Modernist Works'], ['Currency', 'USD']], [
      tbl(['Lot #', 'Title', 'Reserve Price', 'Condition Note'], [
        ['Lot 14', 'Autumn Meadow', '$4,800', 'Minor canvas tear (needs repair)'],
        ['Lot 18', 'Harbor Fog', '$5,500', 'Original varnish — ready to hang'],
        ['Lot 22', 'Red Rooftops', '$6,800', 'Mint condition — original frame'],
        ['Lot 25', 'Cedar Valley', '$5,200', 'Gilt frame chipped at lower edge'],
      ]),
    ]), [
      ['Part 3 · Detail', 'What condition requirement did the Geneva collector specify?', [
        'The artwork must not require any surface or frame repairs',
        'The canvas must come unframed in a shipping tube',
        'The painting must include an independent museum appraisal',
        'The lot must carry an estimate above six thousand dollars',
      ], 0, 'ตอบ The artwork must not require any surface or frame repairs (ลูกค้าปฏิเสธงานที่ต้องซ่อมแซมผิวภาพหรือซ่อมกรอบ)'],
      ['Part 3 · Graphic', 'Look at the graphic. Which lot matches both of the collector’s criteria?', [
        'Lot 18',
        'Lot 14',
        'Lot 22',
        'Lot 25',
      ], 0, 'ตอบ Lot 18 (ตารางแสดงว่า Lot 18 ราคาขั้นต่ำ $5,500 ไม่เกินงบ $6,000 และสภาพพร้อมแขวนไม่ต้องซ่อมแซม)'],
      ['Part 3 · Action', 'What will the woman send to the collector next?', [
        'Detailed condition photographs by email',
        'A printed catalog via overnight courier',
        'An absentee bidder deposit contract',
        'A frame repair quote from the workshop',
      ], 0, 'ตอบ Detailed condition photographs by email (เธอจะส่งภาพถ่ายสภาพงานจริงทางอีเมลให้ลูกค้าทันที)'],
    ]),

    p3(27, 'l27-p3-12', [
      ['Woman', 'ca_f', 'Hi, I have an original signed jazz festival poster from nineteen-seventy-five that I’d like framed for my home office.'],
      ['Man', 'us_m2', 'Beautiful piece! Does your office get much direct sunlight, and when do you need it finished?'],
      ['Woman', 'ca_f', 'It faces a bright south window all afternoon, so fade protection is essential—and we’re hosting family guests in ten days, so I need it within one week.'],
      ['Man', 'us_m2', 'In that case, this second package gives you full UV protection and guarantees completion inside your timeline.'],
    ], doc('table', 'Conservation Framing Service Packages', [['Studio', 'Archival Frame Co.'], ['Width', 'Up to 36 in.']], [
      tbl(['Package', 'Glazing Type', 'Turnaround', 'Price'], [
        ['Basic Display', 'Standard clear glass', '3 business days', '$140'],
        ['SunGuard Archival', '99% UV museum acrylic', '5 business days', '$265'],
        ['Heritage Heirloom', '99% UV anti-reflective glass', '12 business days', '$340'],
        ['Gallery Aluminum', 'Non-UV glare-free acrylic', '4 business days', '$195'],
      ]),
    ]), [
      ['Part 3 · Detail', 'Why is fade protection important to the customer?', [
        'The poster will hang opposite a sunny south-facing window',
        'She plans to lend the poster to an outdoor jazz festival',
        'Fluorescent ceiling lamps already yellowed the backing paper',
        'Her office lacks window blinds or curtains',
      ], 0, 'ตอบ The poster will hang opposite a sunny south-facing window (ห้องทำงานรับแสงแดดทิศใต้โดยตรงตลอดช่วงบ่ายจึงต้องกันแสงยูวี)'],
      ['Part 3 · Graphic', 'Look at the graphic. How much does the recommended framing package cost?', [
        '$265',
        '$140',
        '$340',
        '$195',
      ], 0, 'ตอบ $265 (ต้องกันแสง UV 99% และเสร็จภายใน 1 สัปดาห์ ซึ่ง SunGuard Archival เสร็จใน 5 วันทำการ ราคา $265)'],
      ['Part 3 · Detail', 'Why does the customer want the framed poster back within a week?', [
        'Family visitors are arriving at her home in ten days',
        'A museum photographer wants to catalog her collection',
        'She is moving into a new home office on Monday',
        'Her business insurance inspection occurs next week',
      ], 0, 'ตอบ Family visitors are arriving at her home in ten days (กำลังจะมีญาติมาเยี่ยมบ้านในอีกสิบวันเลยต้องการงานเสร็จภายในหนึ่งสัปดาห์)'],
    ]),

    p3(27, 'l27-p3-13', [
      ['Woman1', 'au_f', 'Let’s double-check tonight’s Gala Run Sheet before doors open at six—we had to shift the auctioneer’s microphone test earlier.'],
      ['Man', 'uk_m', 'Right, Hannah Brooks asked to close silent auction tables fifteen minutes prior to the live paddle raise so guests return to their seats.'],
      ['Woman2', 'us_f2', 'Wait—if Main Course Service starts at seven-fifteen, who is coordinating the stage spotlight cue right after dinner plates clear?'],
      ['Man', 'uk_m', 'Check the bottom half of the schedule—that’s the segment directly following dinner service, and our lighting lead already signed off on the cue.'],
      ['Woman1', 'au_f', 'Great, I’ll confirm that timing with the kitchen captain so courses wrap up smoothly on cue.'],
    ], doc('list', 'Charity Gala Run-of-Show Timeline', [['Venue', 'Grand Conservatory'], ['Date', 'Oct 18']], [
      lst([
        '6:00 P.M. — VIP Reception & Silent Auction Preview (Lead: Rachel Kim)',
        '7:15 P.M. — Main Course Dinner Service (Lead: Chef Alvarez)',
        '8:00 P.M. — Silent Auction Closing Bell (Lead: Martin Chen)',
        '8:15 P.M. — Live Paddle Raise & Scholarship Video (Lead: Hannah Brooks)',
        '9:00 P.M. — Dessert Buffet & Checkout Desk Opening (Lead: Priya Patel)',
      ]),
    ]), [
      ['Part 3 · Detail', 'Why does Hannah Brooks want the silent auction tables closed fifteen minutes before the live raise?', [
        'To give guests enough time to return to their dining seats',
        'To allow staff time to pack fragile artworks into crates',
        'To prevent bidders from overlapping with dessert service',
        'To turn off ballroom ceiling lights for video playback',
      ], 0, 'ตอบ To give guests enough time to return to their dining seats (ต้องการปิดโต๊ะประมูลเงียบก่อนล่วงหน้า 15 นาทีเพื่อให้แขกกลับมานั่งประจำโต๊ะ)'],
      ['Part 3 · Graphic', 'Look at the graphic. Who leads the segment scheduled immediately after Main Course Dinner Service?', [
        'Martin Chen',
        'Rachel Kim',
        'Hannah Brooks',
        'Priya Patel',
      ], 0, 'ตอบ Martin Chen (รายการต่อจาก Main Course Dinner Service เวลา 7:15 น. คือ Silent Auction Closing Bell เวลา 8:00 น. นำโดย Martin Chen)'],
      ['Part 3 · Action', 'What will the first woman confirm with the kitchen captain?', [
        'Verify meal pacing with the head chef or kitchen captain',
        'Adjust microphone levels on Hannah Brooks’s headset',
        'Remind Rachel Kim to open the VIP reception doors early',
        'Help Priya Patel count dessert plates at the buffet',
      ], 0, 'ตอบ Verify meal pacing with the head chef or kitchen captain (เธอจะไปยืนยันเรื่องจังหวะเวลาเสิร์ฟอาหารกับหัวหน้าครัวเพื่อให้จบตรงคิว)'],
    ]),

    // Set 27 Part 4 (10 Talks × 3 Qs = 30 Qs; Talks 8-10 with Graphics)
    p4(27, 'l27-p4-1', 'the following auction gallery announcement', 'uk_m',
      'Good evening, collectors, and welcome to Whitmore Fine Art’s autumn preview. Before live bidding begins at seven-thirty, guests are invited to inspect all eighty cataloged lots across Galleries A and B. Please refrain from touching unframed oil canvases directly; an attendant wearing white cotton gloves will gladly lift any artwork for closer inspection. Registered buyers who haven’t collected their numbered bidding paddles may pick them up at the walnut counter beside the front coatroom.',
      null, [
        ['Part 4 · Detail', 'When does live auction bidding start?', [
          'At 7:30 P.M.',
          'At 6:30 P.M.',
          'At 8:00 P.M.',
          'Immediately after the welcome speech',
        ], 0, 'ตอบ At 7:30 P.M. (ผู้ประกาศแจ้งว่าเริ่มประมูลสดเวลา 19:30 น.)'],
        ['Part 4 · Detail', 'What rule are gallery visitors asked to follow while viewing artworks?', [
          'Ask gloved attendants before touching unframed canvases',
          'Leave briefcases and camera bags inside the coatroom',
          'Avoid photographing sculptures inside Gallery B',
          'Keep paper catalogs away from display pedestals',
        ], 0, 'ตอบ Ask gloved attendants before touching unframed canvases (ห้ามสัมผัสผ้าใบไร้กรอบโดยตรง ให้พนักงานสวมถุงมือขาวหยิบให้ดูแทน)'],
        ['Part 4 · Detail', 'Where can registered bidders collect their numbered paddles?', [
          'At a walnut counter next to the coatroom',
          'Inside the private consultation room off Gallery A',
          'From white-gloved attendants walking the aisles',
          'At the auctioneer’s podium ten minutes prior',
        ], 0, 'ตอบ At a walnut counter next to the coatroom (รับป้ายหมายเลขประมูลได้ที่เคาน์เตอร์ไม้วอลนัตข้างห้องฝากเสื้อ)'],
      ]),

    p4(27, 'l27-p4-2', 'the following recorded telephone message', 'us_f',
      'You’ve reached Cedar Leaf Conservation Framing Studio. Please note our modified workshop hours during next week’s regional museum conference. From Wednesday through Friday, our custom design counter will close early at three P.M., though completed frame orders may still be collected until six P.M. by calling our rear loading bell. If you need rush archival mounting for upcoming exhibitions, leave your dimensions and target pickup date after the tone.',
      null, [
        ['Part 4 · Reason', 'Why is the framing studio adjusting its afternoon schedule next week?', [
          'Staff are attending a regional museum conference',
          'Workshop carpenters are installing new storage racks',
          'Museum glass deliveries are delayed until Friday',
          'Utility crews are servicing front-counter lighting',
        ], 0, 'ตอบ Staff are attending a regional museum conference (ปรับเวลาทำงานเนื่องจากงานประชุมพิพิธภัณฑ์ระดับภูมิภาคสัปดาห์หน้า)'],
        ['Part 4 · Detail', 'Until what time can customers pick up finished orders Wednesday through Friday?', [
          '6:00 P.M.',
          '3:00 P.M.',
          '5:00 P.M.',
          '7:00 P.M.',
        ], 0, 'ตอบ 6:00 P.M. (แม้เคาน์เตอร์ออกแบบปิด 15:00 น. แต่ยังมารับงานที่เสร็จแล้วได้ถึง 18:00 น. ผ่านกริ่งประตูหลัง)'],
        ['Part 4 · Action', 'What should callers requesting rush exhibition mounting include in their voicemail?', [
          'Artwork measurements and desired completion date',
          'Preferred wood stain sample numbers',
          'An insurance policy certificate number',
          'Credit card authorization details',
        ], 0, 'ตอบ Artwork measurements and desired completion date (ให้ฝากขนาดภาพและวันที่ต้องการรับงานไว้หลังเสียงสัญญาณ)'],
      ]),

    p4(27, 'l27-p4-3', 'the following charity gala welcome speech', 'ca_m',
      'Good evening, friends and trustees. On behalf of the Bright Horizon Foundation, thank you for joining our fifteenth annual benefit dinner. Thanks to your generosity last autumn, our foundation funded weekend music and ceramics workshops for nine hundred neighborhood students. Tonight, every dollar pledged during our live appeal goes directly toward building a sunlit community art library on Maple Street. Before dinner is served, please take a moment to sign the pledge card beside your water glass.',
      null, [
        ['Part 4 · Detail', 'How were funds from last autumn’s charity event used?', [
          'Providing weekend arts workshops for local youth',
          'Purchasing historical paintings for Maple Street Hall',
          'Renovating the Bright Horizon main administrative office',
          'Funding international travel scholarships for art teachers',
        ], 0, 'ตอบ Providing weekend arts workshops for local youth (นำเงินจากปีที่แล้วไปจัดเวิร์กช็อปดนตรีและเซรามิกวันหยุดให้นักเรียน 900 คน)'],
        ['Part 4 · Topic', 'What is the fundraising goal of tonight’s dinner?', [
          'Constructing a neighborhood art library on Maple Street',
          'Hiring nine additional ceramics instructors',
          'Publishing an anniversary photo book for trustees',
          'Replacing acoustic equipment inside the ballroom',
        ], 0, 'ตอบ Constructing a neighborhood art library on Maple Street (เงินบริจาคคืนนี้ทั้งหมดนำไปสร้างห้องสมุดศิลปะชุมชนบนถนน Maple)'],
        ['Part 4 · Action', 'What does the speaker ask guests to do before dinner begins?', [
          'Sign the pledge card placed beside their glass',
          'Hand donation envelopes to table captains',
          'Bid on silent auction canvases in the hallway',
          'Upload photos from the reception to social media',
        ], 0, 'ตอบ Sign the pledge card placed beside their glass (ขอให้แขกเซ็นบัตรแสดงเจตจำนงบริจาคที่วางข้างแก้วน้ำก่อนเสิร์ฟอาหาร)'],
      ]),

    p4(27, 'l27-p4-4', 'the following excerpt from a curator meeting', 'au_f',
      'Before we finalize next month’s estate auction agreement, let’s revisit our transit insurance clause. Two porcelain figurines arrived from an out-of-state estate with hairline base fractures last spring because the seller used thin bubble wrap instead of custom foam cavities. From now on, our team will cover transit liability only when our own approved art handlers inspect and pack fragile lots on site. Let’s make sure that policy sits right on Page One—I don’t want another costly surprise.',
      null, [
        ['Part 4 · Problem', 'What happened to two porcelain pieces received last spring?', [
          'They suffered minor base cracks due to inadequate packing',
          'They went missing during an interstate courier transfer',
          'Humidity warped their wooden display stands',
          'They were mistakenly shipped to the wrong estate',
        ], 0, 'ตอบ They suffered minor base cracks due to inadequate packing (ตุ๊กตาพอร์ซเลนสองชิ้นแตกร้าวเล็กน้อยที่ฐานเพราะผู้ขายห่อด้วยแผ่นกันกระแทกบางๆ เท่านั้น)'],
        ['Part 4 · Detail', 'Under the new rule, when will the auction house cover transit insurance?', [
          'Only when approved handlers pack fragile pieces at the origin',
          'Whenever sellers purchase additional foam cartons independently',
          'After local appraisers photograph every item at reception',
          'Only for shipments valued under ten thousand dollars',
        ], 0, 'ตอบ Only when approved handlers pack fragile pieces at the origin (รับประกันความเสียหายระหว่างขนส่งเฉพาะเมื่อทีมขนย้ายที่บริษัทรับรองเข้าไปตรวจและแพ็กถึงหน้างานเท่านั้น)'],
        ['Part 4 · Meaning', 'What does the speaker mean when she says, "I don’t want another costly surprise"?', [
          'She wants clear contract rules to prevent expensive damage claims',
          'She thinks approved packing handlers charge unreasonable rates',
          'She prefers excluding porcelain lots from future estate auctions',
          'She worries catalog printing costs will exceed the Q4 budget',
        ], 0, 'ตอบ She wants clear contract rules to prevent expensive damage claims (ต้องการระบุเงื่อนไขให้ชัดตั้งแต่หน้าแรกของสัญญาเพื่อไม่ให้เกิดค่าเสียหายแพงๆ ซ้ำอีก)'],
      ]),

    p4(27, 'l27-p4-5', 'the following workshop training briefing', 'us_m2',
      'Morning, everyone. Since three new apprentices joined our framing floor this week, let’s review proper scoring technique for non-reflective museum glass. That delicate coating scratches easily if bare glass slides across dusty felt mats. Always vacuum the cutting table surface first, lay down clean kraft paper, and hold your carbide wheel cutter perpendicular in one firm pass. Any leftover strips wider than eight inches go vertically into the green offcut bin for small portrait jobs.',
      null, [
        ['Part 4 · Audience', 'Who is this training talk primarily aimed at?', [
          'Framing studio staff including three new apprentices',
          'Gallery tour guides preparing evening viewing rooms',
          'Glass factory delivery drivers unloading shipments',
          'Retail store clerks pricing ready-made frames',
        ], 0, 'ตอบ Framing studio staff including three new apprentices (ชี้แจงเทคนิคการตัดกระจกกันแสงสะท้อนให้พนักงานและเด็กฝึกงานใหม่ 3 คน)'],
        ['Part 4 · Detail', 'What step must workers take before placing museum glass onto the cutting table?', [
          'Vacuum dust off the table and spread clean kraft paper',
          'Spray lubricant oil across the felt surface',
          'Apply painter’s tape along all four glass borders',
          'Polish the anti-reflective coating with dry cotton',
        ], 0, 'ตอบ Vacuum dust off the table and spread clean kraft paper (ต้องดูดฝุ่นบนโต๊ะตัดและปูกระดาษคราฟท์สะอาดก่อนเสมอเพื่อกันรอยขีดข่วน)'],
        ['Part 4 · Detail', 'How should leftover glass strips wider than eight inches be handled?', [
          'Stored upright in the green offcut bin for smaller frames',
          'Discarded immediately inside reinforced recycling containers',
          'Cut down into uniform four-inch glass samples',
          'Returned to the vendor in padded shipping sleeves',
        ], 0, 'ตอบ Stored upright in the green offcut bin for smaller frames (เศษกระจกที่กว้างเกิน 8 นิ้วให้ตั้งเก็บในถังสีเขียวสำหรับงานกรอบภาพขนาดเล็ก)'],
      ]),

    p4(27, 'l27-p4-6', 'the following voicemail message', 'uk_f2',
      'Hi Martin, it’s Chef Clara calling from Crescent Banquet Catering regarding tomorrow evening’s foundation fundraiser. Our pastry team finished plating the dairy-free berry tarts for Table Four and Table Twelve, and we’ve labeled those trays clearly for your lead servers. One quick update: our refrigerated van leaves the kitchen thirty minutes earlier than planned due to downtown bridge construction, so please unlock the side loading dock by four-fifteen sharp.',
      null, [
        ['Part 4 · Topic', 'Why is Chef Clara calling Martin?', [
          'To confirm dessert prep and request earlier dock access',
          'To ask how many vegetarian meals were ordered',
          'To report an ingredient shortage affecting berry tarts',
          'To reschedule tomorrow’s tasting appointment',
        ], 0, 'ตอบ To confirm dessert prep and request earlier dock access (แจ้งว่าเตรียมทาร์ตปลอดนมเสร็จแล้ว และขอให้เปิดประตูท่าโหลดเร็วขึ้นเพราะรถออกก่อนเวลา)'],
        ['Part 4 · Reason', 'Why is the catering delivery van departing earlier than scheduled?', [
          'Road construction along a downtown bridge may slow traffic',
          'The hotel kitchen needs extra time to chill pastry trays',
          'Another charity banquet booked the evening delivery slot',
          'Cold storage units inside the van require maintenance',
        ], 0, 'ตอบ Road construction along a downtown bridge may slow traffic (มีงานซ่อมสะพานใจกลางเมืองเลยต้องออกรถเร็วขึ้น 30 นาที)'],
        ['Part 4 · Action', 'What should Martin do by 4:15 P.M. tomorrow?', [
          'Unlock the side loading dock for the delivery van',
          'Confirm table labels with VIP foundation donors',
          'Clear Table Four and Table Twelve before service',
          'Call the pastry team to check tart quantities',
        ], 0, 'ตอบ Unlock the side loading dock for the delivery van (ขอให้เปิดประตูท่าขนส่งด้านข้างไว้ให้พร้อมภายในเวลา 16:15 น.)'],
      ]),

    p4(27, 'l27-p4-7', 'the following radio advertisement', 'ca_f',
      'Looking for an inspiring Saturday evening that gives back to local neighborhoods? Join the Harborview Foundation’s annual Art for Youth Benefit Auction on November ninth at Riverfront Hall! Bid on over sixty original paintings, handcrafted ceramics, and bespoke architectural sketches donated by renowned regional artists. Doors open at six for gourmet hors d’oeuvres and live acoustic jazz. Reserve single seats or corporate tables today at harborviewbenefit dot org—all proceeds fund free after-school art studios.',
      null, [
        ['Part 4 · Topic', 'What event is being promoted in this commercial?', [
          'An annual charity art auction raising money for youth studios',
          'A weekend museum exhibition celebrating regional jazz musicians',
          'An outdoor ceramics market along Riverfront Park',
          'A grand opening for an architectural design school',
        ], 0, 'ตอบ An annual charity art auction raising money for youth studios (โฆษณางานประมูลศิลปะการกุศลประจำปีเพื่อสมทบทุนสตูดิโอศิลปะหลังเลิกเรียน)'],
        ['Part 4 · Detail', 'What activities begin when doors open at 6:00 P.M.?', [
          'Appetizers and live acoustic jazz music',
          'Pottery demonstrations by regional sculptors',
          'Live bidding on architectural sketches',
          'Guided tours of Riverfront Hall studios',
        ], 0, 'ตอบ Appetizers and live acoustic jazz music (เปิดประตูหกโมงเย็นด้วยอาหารว่างและดนตรีแจ๊สอะคูสติกสด)'],
        ['Part 4 · Action', 'How can listeners purchase seats or corporate tables?', [
          'By booking online at the event website',
          'By visiting the Harborview box office in person',
          'By calling the Riverfront Hall concierge desk',
          'By purchasing tickets at the door on November ninth',
        ], 0, 'ตอบ By booking online at the event website (จองที่นั่งเดี่ยวหรือโต๊ะองค์กรได้ที่เว็บไซต์ harborviewbenefit dot org)'],
      ]),

    p4(27, 'l27-p4-8', 'the following auction fee guide and briefing', 'us_m',
      'Thank you for attending today’s settlement desk briefing ahead of next week’s Impressionist Sale. Because we introduced tiered buyer’s premiums this quarter, remember to apply the exact bracket matching the winning hammer price, not the catalog estimate. For example, if a collector wins a painting at eighty-five thousand dollars and arranges pickup ten days after the auction, please double-check both the matching commission bracket and whether any warehouse storage charges apply beyond the free grace window.',
      doc('table', 'Buyer’s Premium & Storage Schedule', [['Effective', 'Q4 Sales'], ['Grace Period', '7 Calendar Days']], [
        tbl(['Hammer Price Tier', 'Buyer’s Premium', 'Daily Storage After Grace'], [
          ['Up to $50,000', '20%', '$25 / day'],
          ['$50,001 – $150,000', '16%', '$40 / day'],
          ['$150,001 – $500,000', '12%', '$65 / day'],
          ['Over $500,000', '10%', '$95 / day'],
        ]),
      ]), [
        ['Part 4 · Detail', 'What value determines a buyer’s commission percentage?', [
          'The final winning hammer price at auction',
          'The high catalog estimate printed before the sale',
          'The collector’s annual membership tier',
          'The declared shipping insurance value',
        ], 0, 'ตอบ The final winning hammer price at auction (ผู้พูดย้ำให้คิดอัตราค่าธรรมเนียมตามราคาปิดประมูลจริง ไม่ใช่ราคาประเมินในแคตตาล็อก)'],
        ['Part 4 · Graphic', 'Look at the graphic. Which buyer’s premium rate applies to a $85,000 winning bid?', [
          '16%',
          '20%',
          '12%',
          '10%',
        ], 0, 'ตอบ 16% (ราคาปิด $85,000 อยู่ในช่วง $50,001 – $150,000 ซึ่งคิดค่าธรรมเนียมผู้ซื้อที่ 16%)'],
        ['Part 4 · Detail', 'How many calendar days of complimentary storage do buyers receive after a sale?', [
          'Seven days',
          'Three days',
          'Ten days',
          'Fourteen days',
        ], 0, 'ตอบ Seven days (ส่วนหัวตารางระบุระยะเวลาฝากฟรี Grace Period อยู่ที่ 7 Calendar Days)'],
      ]),

    p4(27, 'l27-p4-9', 'the following studio inspection checklist and voicemail', 'uk_f',
      'Hi Leo, it’s Rachel at the studio bench. I’m checking our three antique botanical engravings before the client arrives at four. Corner joinery and interior glass already look spotless. However, right before applying the dust-seal backing, I noticed two framing points didn’t sit flush against the rabbet edge. Could you bring your point driver over here to fix that?',
      doc('list', 'Conservation Frame Quality Inspection', [['Bench', 'Station 2'], ['Sign-Off', 'Required']], [
        lst([
          '1. Verify mitered corner joinery alignment and glue seams',
          '2. Inspect interior museum glazing for dust, lint, or smudges',
          '3. Confirm stainless steel fitting points sit flush inside frame rabbet',
          '4. Attach acid-free kraft paper dust-seal backing and corner bumpers',
          '5. Mount braided hanging wire and attach studio provenance label',
        ]),
      ]), [
        ['Part 4 · Detail', 'Why is Rachel checking the three botanical engravings right now?', [
          'The customer is scheduled to collect them at four o’clock',
          'A shipping courier asked for updated crate dimensions',
          'She wants to photograph them for the studio website',
          'A gallery curator requested rush glazing changes',
        ], 0, 'ตอบ The customer is scheduled to collect them at four o’clock (ลูกค้านัดเข้ามารับงานตอนสี่โมงเย็นจึงตรวจคุณภาพขั้นสุดท้าย)'],
        ['Part 4 · Graphic', 'Look at the graphic. Which inspection step uncovered a problem?', [
          'Step 3',
          'Step 1',
          'Step 2',
          'Step 5',
        ], 0, 'ตอบ Step 3 (Rachel ตรวจข้อ 1 และ 2 ผ่านแล้ว และพบปัญหาในขั้นก่อนติดกระดาษปิดหลังซึ่งตรงกับ Step 3: ตรวจสอบหมุดยึดขอบกรอบ)'],
        ['Part 4 · Request', 'What does Rachel ask Leo to bring to Station 2?', [
          'His point driver tool',
          'Extra rolls of kraft backing paper',
          'Braided stainless hanging wire',
          'Cleaning spray for museum glass',
        ], 0, 'ตอบ His point driver tool (ขอให้ Leo ถือเครื่องยิงหมุดกรอบ point driver มาช่วยแก้ไข)'],
      ]),

    p4(27, 'l27-p4-10', 'the following banquet hall floor summary and staff update', 'au_m',
      'Quick update before staff dinner. Corporate sponsor Harborview Capital asked to relocate their forty guests directly beside the Acoustic Stage where the youth string ensemble performs. I’m moving them into our matching forty-seat section and shifting general ticket holders to the Balcony Terrace. Please inform that section’s captain right away so menus and place cards are updated on site.',
      doc('table', 'Gala Ballroom Section Assignments', [['Event', 'Annual Benefit'], ['Total Seats', '240']], [
        tbl(['Section Name', 'Tables', 'Seats', 'Key Proximity', 'Section Captain'], [
          ['Atrium Garden', '1–5', '40', 'Silent Auction Tables', 'Marcus Lee'],
          ['Center Stage', '6–10', '40', 'Acoustic Stage', 'Elena Gomez'],
          ['Balcony Terrace', '11–18', '64', 'Upper Mezzanine Bar', 'Tariq Hassan'],
          ['Patron Circle', '19–30', '96', 'Main Podium & Screen', 'Diane Novak'],
        ]),
      ]), [
        ['Part 4 · Topic', 'What change did a corporate sponsor request for tonight’s dinner?', [
          'Moving their seats directly beside the Acoustic Stage',
          'Increasing their reservation from forty seats to sixty',
          'Serving dinner courses thirty minutes earlier',
          'Placing additional silent auction tables in their section',
        ], 0, 'ตอบ Moving their seats directly beside the Acoustic Stage (ผู้สนับสนุนองค์กรขอเปลี่ยนที่นั่งไปติดเวทีดนตรี Acoustic Stage)'],
        ['Part 4 · Graphic', 'Look at the graphic. Which section captain will oversee Harborview Capital’s table group?', [
          'Elena Gomez',
          'Marcus Lee',
          'Tariq Hassan',
          'Diane Novak',
        ], 0, 'ตอบ Elena Gomez (ตารางระบุพื้นที่ 40 ที่นั่งที่อยู่ติด Acoustic Stage คือโซน Center Stage ซึ่งมี Elena Gomez เป็นหัวหน้าโซน)'],
        ['Part 4 · Detail', 'Where will displaced general ticket holders be seated instead?', [
          'In the Balcony Terrace section',
          'Inside the Patron Circle tables',
          'Around the Atrium Garden tables',
          'Beside the Upper Mezzanine Coatroom',
        ], 0, 'ตอบ In the Balcony Terrace section (ผู้พูดระบุว่าย้ายผู้ถือบัตรทั่วไปไปยังโซน Balcony Terrace แทน)'],
      ]),

    // ==================== SET 28 ====================
    // Themes: Robotics Precision Electronics Plant, Circuit Board Assembly QC, Supplier Tooling Calibration
    p1(28, 'l28-p1-1', 'ca_m', [
      'Technicians are unloading plastic bins from a freight elevator.',
      'Robotic arms are positioned along an automated assembly line.',
      'Finished circuit boards are piled onto an outdoor loading ramp.',
      'Workers are sweeping metal shavings beneath a conveyor belt.',
    ], 1, 'ตอบ Robotic arms are positioned along an automated assembly line. (แขนกลหุ่นยนต์ติดตั้งเรียงรายอยู่ตลอดแนวสายการผลิตอัตโนมัติ)'),
    p1(28, 'l28-p1-2', 'us_f', [
      'An inspector is looking through a binocular microscope at a workbench.',
      'An engineer is soldering wires onto an office computer monitor.',
      'Packing peanuts are spilling out of an open shipping carton.',
      'A supervisor is writing shift totals on a corridor whiteboard.',
    ], 0, 'ตอบ An inspector is looking through a binocular microscope at a workbench. (ผู้ตรวจสอบคุณภาพกำลังส่องกล้องจุลทรรศน์แบบสองตาบนโต๊ะทำงาน)'),
    p1(28, 'l28-p1-3', 'uk_m', [
      'Calibration certificates are hanging from clips along a glass partition.',
      'A mechanic is tightening bolts on a heavy hydraulic press.',
      'Toolboxes have been stacked beside an emergency exit door.',
      'Precision gauges and torque wrenches are arranged in foam trays.',
    ], 3, 'ตอบ Precision gauges and torque wrenches are arranged in foam trays. (เกจวัดความละเอียดสูงและประแจปอนด์ถูกจัดเรียงไว้ในถาดโฟมรองรับ)'),
    p1(28, 'l28-p1-4', 'au_f', [
      'Employees are removing safety goggles inside a break room.',
      'Soldering irons are being packed into metal travel cases.',
      'Workers wearing protective coats are seated beside an assembly bench.',
      'A forklift is transporting steel cabinets across a warehouse.',
    ], 2, 'ตอบ Workers wearing protective coats are seated beside an assembly bench. (พนักงานสวมเสื้อคลุมป้องกันนั่งทำงานอยู่ข้างโต๊ะประกอบชิ้นส่วน)'),
    p1(28, 'l28-p1-5', 'us_m2', [
      'A technician is adjusting dials on an electronic testing console.',
      'Cables have been coiled around the base of a wooden stool.',
      'Two managers are shaking hands beside a robotic welding cage.',
      'Warning signs are being taped over a shattered glass window.',
    ], 0, 'ตอบ A technician is adjusting dials on an electronic testing console. (ช่างเทคนิคกำลังหมุนปรับปุ่มบนเครื่องทดสอบอิเล็กทรอนิกส์)'),
    p1(28, 'l28-p1-6', 'uk_f2', [
      'Delivery drivers are scanning barcodes outside a security gate.',
      'Anti-static trays have been stacked onto a rolling cart.',
      'Plastic pallets are leaning against a freshly painted concrete wall.',
      'Inspectors are sorting copper coils inside a dark storage room.',
    ], 1, 'ตอบ Anti-static trays have been stacked onto a rolling cart. (ถาดป้องกันไฟฟ้าสถิตวางซ้อนเรียงไว้บนรถเข็นล้อเลื่อน)'),

    // Set 28 Part 2 (25 Qs)
    p2(28, 'l28-p2-1', 'uk_f', 'us_m', 'Which assembly cell produces the brushless servo motors?', [
      'Cell Four along the north corridor.',
      'Over eighty units per shift.',
      'Before Friday’s quality audit.',
    ], 0, 'ตอบ Cell Four along the north corridor. (ถามสายการผลิต Which assembly cell ตอบ Cell Four ตามทางเดินฝั่งเหนือ)'),
    p2(28, 'l28-p2-2', 'us_m2', 'ca_f', 'Who calibrated the optical solder-paste inspector on Line Two?', [
      'Inside the cleanroom gowning area.',
      'Hector from Metrology signed its tag this morning.',
      'Yes, the camera focus looks crisp.',
    ], 1, 'ตอบ Hector from Metrology signed its tag this morning. (ถามบุคคล Who ตอบ Hector จากฝ่ายมาตรวิทยาเซ็นรับรองเมื่อเช้านี้)'),
    p2(28, 'l28-p2-3', 'au_m', 'uk_f2', 'When are the supplier torque drivers due back from recertification?', [
      'Packed inside three padded aluminum cases.',
      'Mostly digital angle wrenches.',
      'Before noon Friday, according to Precision Lab.',
    ], 2, 'ตอบ Before noon Friday, according to Precision Lab. (ถามกำหนดคืน When ตอบก่อนเที่ยงวันศุกร์ตามที่ Precision Lab แจ้ง)'),
    p2(28, 'l28-p2-4', 'ca_m', 'us_f', 'Did the humidity inside the cleanroom stay within specification overnight?', [
      'Yes, the wall logger stayed right at forty-two percent.',
      'Because static buildup harms microchips.',
      'Near the main nitrogen manifold.',
    ], 0, 'ตอบ Yes, the wall logger stayed right at forty-two percent. (ถามใช่/ไม่เรื่องความชื้น ตอบยืนยันตัวเลขเครื่องบันทึกอยู่ที่ 42 เปอร์เซ็นต์ตลอดคืน)'),
    p2(28, 'l28-p2-5', 'us_f2', 'au_m', 'Why was Batch Ninety-Four of the mainboards held at final inspection?', [
      'At testing station number five.',
      'Two resistors shifted slightly off their solder pads.',
      'Shipped via temperature-controlled courier.',
    ], 1, 'ตอบ Two resistors shifted slightly off their solder pads. (ถามเหตุผล Why ตอบเพราะตัวต้านทานสองตัวเลื่อนออกจากแผ่นบัดกรีเล็กน้อย)'),
    p2(28, 'l28-p2-6', 'uk_m', 'us_f', 'Should we schedule the robotic arm firmware update for lunch or midnight?', [
      'Yes, version four fixes the gripper pause.',
      'About fifteen minutes per welding bay.',
      'Midnight—we shouldn’t pause daytime production.',
    ], 2, 'ตอบ Midnight—we shouldn’t pause daytime production. (ถามทางเลือก lunch or midnight ตอบเลือกเที่ยงคืนเพื่อไม่ให้กระทบการผลิตกลางวัน)'),
    p2(28, 'l28-p2-7', 'us_m', 'uk_f2', 'How many micro-soldering tips remain inside the ESD supply cabinet?', [
      'Almost a full box of thirty.',
      'For fine-pitch circuit repair.',
      'Twice every morning shift.',
    ], 0, 'ตอบ Almost a full box of thirty. (ถามจำนวน How many ตอบเหลือเกือบเต็มกล่องสามสิบชิ้น)'),
    p2(28, 'l28-p2-8', 'ca_f', 'us_m2', 'The laser barcode etcher near Station Six keeps misreading serial tags.', [
      'No, every board passed electrical continuity.',
      'Try wiping dust off its optical mirror first.',
      'Last month’s lot ran out of copper.',
    ], 1, 'ตอบ Try wiping dust off its optical mirror first. (ประโยคบอกเล่าแจ้งเครื่องอ่านรหัสผิดพลาด เสนอวิธีแก้ให้ลองเช็ดฝุ่นบนกระจกเลนส์ก่อน)'),
    p2(28, 'l28-p2-9', 'au_f', 'ca_m', 'Where do rejected circuit boards go after automated X-ray testing?', [
      'Because solder voids showed up on screen.',
      'Every hour on the hour.',
      'Place them inside the red quarantine bin by Dock Three.',
    ], 2, 'ตอบ Place them inside the red quarantine bin by Dock Three. (ถามสถานที่ Where ตอบให้นำใส่ถังกักกันสีแดงข้างท่าเทียบ 3)'),
    p2(28, 'l28-p2-10', 'uk_f', 'au_m', 'Hasn’t Vendor Apex shipped the replacement pneumatic grippers yet?', [
      'Customs cleared their parcel just an hour ago.',
      'Yes, pneumatic pressure runs at six bars.',
      'Beside the robotic loading cage.',
    ], 0, 'ตอบ Customs cleared their parcel just an hour ago. (คำถามปฏิเสธ Hasn’t... ตอบความคืบหน้าว่าพัสดุเพิ่งผ่านศุลกากรเมื่อชั่วโมงก่อน)'),
    p2(28, 'l28-p2-11', 'us_m2', 'uk_f', 'Could you verify the tolerance margin on the aluminum sensor bracket?', [
      'Around four ounces per mounting plate.',
      'I’ll pull up the latest blueprint on my screen.',
      'At the vendor tooling warehouse.',
    ], 1, 'ตอบ I’ll pull up the latest blueprint on my screen. (ขอให้ตรวจค่าความเผื่อ ตอบจะเปิดแบบแปลนล่าสุดบนหน้าจอให้ทันที)'),
    p2(28, 'l28-p2-12', 'ca_m', 'au_f', 'How often does Quality Control audit supplier gauge accuracy?', [
      'Plus or minus two microns.',
      'Inside Metrology Room B.',
      'Every ninety days without exception.',
    ], 2, 'ตอบ Every ninety days without exception. (ถามความถี่ How often ตอบทุก 90 วันอย่างสม่ำเสมอ)'),
    p2(28, 'l28-p2-13', 'us_f', 'uk_m', 'What caused the voltage spike along Test Bench Three yesterday?', [
      'A faulty surge protector beneath the bench.',
      'Every printed board needs burn-in testing.',
      'Right before the evening shift change.',
    ], 0, 'ตอบ A faulty surge protector beneath the bench. (ถามสาเหตุ What caused ตอบปลั๊กกันไฟกระชากใต้โต๊ะทำงานชำรุด)'),
    p2(28, 'l28-p2-14', 'uk_f2', 'ca_m', 'Why don’t we cross-train second-shift operators on optical inspection?', [
      'Only three microscopes are mounted there.',
      'That would prevent bottlenecks whenever someone is out.',
      'No, I worked the morning line on Tuesday.',
    ], 1, 'ตอบ That would prevent bottlenecks whenever someone is out. (ข้อเสนอแนะ Why don’t we ตอบเห็นด้วยเพราะช่วยลดคอขวดเวลาพนักงานลางาน)'),
    p2(28, 'l28-p2-15', 'au_m', 'us_m', 'You remembered to wear your grounding wrist strap before touching the boards, didn’t you?', [
      'In the anti-static packaging aisle.',
      'Approximately twenty-five sensors per tray.',
      'Always—it’s clipped straight to the bench mat.',
    ], 2, 'ตอบ Always—it’s clipped straight to the bench mat. (คำถามย้ำ didn’t you ตอบยืนยันว่าใส่สายรัดข้อมือป้องกันไฟฟ้าสถิตติดกับแผ่นรองโต๊ะตลอด)'),
    p2(28, 'l28-p2-16', 'us_m', 'uk_f', 'How much does an annual multi-axis calibration contract cost per robot?', [
      'Around nineteen hundred dollars, parts excluded.',
      'Every January after holiday shutdown.',
      'At the Nagoya robotics assembly center.',
    ], 0, 'ตอบ Around nineteen hundred dollars, parts excluded. (ถามราคา How much ตอบราว 1,900 ดอลลาร์ไม่รวมอะไหล่)'),
    p2(28, 'l28-p2-17', 'ca_f', 'us_f2', 'Are the thermal imaging cameras charged for tomorrow’s vendor audit?', [
      'No, they measure up to four hundred degrees.',
      'Both batteries finished charging twenty minutes ago.',
      'In Building Four’s tool crib.',
    ], 1, 'ตอบ Both batteries finished charging twenty minutes ago. (ถามว่าชาร์จพร้อมหรือยัง ตอบยืนยันแบตเตอรี่ทั้งสองก้อนชาร์จเต็มเมื่อยี่สิบนาทีก่อน)'),
    p2(28, 'l28-p2-18', 'uk_m', 'au_f', 'When did Engineering finalize the new circuit layout revision?', [
      'With thicker gold contact fingers.',
      'From our Shenzhen PCB fabricator.',
      'Late Tuesday, right after drop-test results came in.',
    ], 2, 'ตอบ Late Tuesday, right after drop-test results came in. (ถามเวลา When ตอบช่วงค่ำวันอังคารหลังผลทดสอบการตกกระแทกออกมา)'),
    p2(28, 'l28-p2-19', 'us_f2', 'ca_m', 'Who handles defective component returns to our Osaka supplier?', [
      'Dana in Procurement coordinates all vendor claims.',
      'Mostly cracked ceramic capacitors.',
      'Every second Wednesday by air cargo.',
    ], 0, 'ตอบ Dana in Procurement coordinates all vendor claims. (ถามบุคคลรับผิดชอบ Who ตอบ Dana จากฝ่ายจัดซื้อดูแลเรื่องเคลมซัพพลายเออร์ทั้งหมด)'),
    p2(28, 'l28-p2-20', 'au_f', 'uk_f2', 'Didn’t the maintenance crew replace the air filter above Paint Booth B?', [
      'Yes, spray nozzles work much better now.',
      'No, the new HEPA cartridge arrived with a bent frame.',
      'Along the ceiling ventilation duct.',
    ], 1, 'ตอบ No, the new HEPA cartridge arrived with a bent frame. (คำถามปฏิเสธ Didn’t... ตอบปฏิเสธพร้อมเหตุผลว่าไส้กรองใหม่ที่มาส่งมีโครงบิดงอ)'),
    p2(28, 'l28-p2-21', 'uk_f', 'us_m2', 'Should inspectors log minor cosmetic scratches separately or reject the unit?', [
      'Usually inside a silver aluminum enclosure.',
      'During final visual verification.',
      'Log them separately unless copper traces are exposed.',
    ], 2, 'ตอบ Log them separately unless copper traces are exposed. (ถามทางเลือกแยกบันทึกหรือคัดทิ้ง ตอบให้แยกบันทึกไว้ก่อนเว้นแต่รอยขูดลึกถึงลายทองแดง)'),
    p2(28, 'l28-p2-22', 'us_m', 'ca_f', 'How many pallets of raw silicon wafers fit inside Vault Two?', [
      'Up to sixteen if stacked two high.',
      'Shipped directly from Oregon.',
      'Temperature stays locked at twenty degrees.',
    ], 0, 'ตอบ Up to sixteen if stacked two high. (ถามความจุ/จำนวน How many ตอบใส่ได้สูงสุด 16 พาเลตหากวางซ้อนสองชั้น)'),
    p2(28, 'l28-p2-23', 'ca_m', 'uk_f', 'What time does the calibration lab’s evening courier pickup leave?', [
      'By insured next-day freight.',
      'At five-fifteen sharp from the west lobby.',
      'Mostly micrometer sets and pin gauges.',
    ], 1, 'ตอบ At five-fifteen sharp from the west lobby. (ถามเวลา What time ตอบรถขนส่งออกตรงเวลา 17:15 น. จากโถงตะวันตก)'),
    p2(28, 'l28-p2-24', 'au_m', 'us_f', 'I heard the new pick-and-place machine cut placement defects in half.', [
      'Only tiny surface-mount chips.',
      'Check the floor plan on Wall B.',
      'Our rework technicians finally have time to breathe.',
    ], 2, 'ตอบ Our rework technicians finally have time to breathe. (ประโยคบอกเล่าเรื่องเครื่องใหม่ลดงานเสียลงครึ่งหนึ่ง ตอบรับสอดคล้องว่าช่างซ่อมงานได้พักหายใจเสียที)'),
    p2(28, 'l28-p2-25', 'uk_m', 'us_m2', 'Where can visiting supplier auditors check in for safety badges?', [
      'At the glass reception desk beside Gate One.',
      'To review our welding fixture logs.',
      'Every visitor wears steel-toe shoes.',
    ], 0, 'ตอบ At the glass reception desk beside Gate One. (ถามสถานที่เช็กอิน Where ตอบที่เคาน์เตอร์กระจกข้างประตูหนึ่ง)'),

    // Set 28 Part 3 (13 Conversations × 3 Qs = 39 Qs; Convs 11-13 with Graphics)
    p3(28, 'l28-p3-1', [
      ['Man', 'us_m', 'Maya, Robotic Arm Three on Line B dropped two optical sensor housings during the morning cycle—both landed right next to the feeder track.'],
      ['Woman', 'uk_f', 'Did its suction vacuum pressure drop, or did the silicone gripper tips slip on machined oil?'],
      ['Man', 'us_m', 'Pressure sensors held steady at seventy kilopascals, so I suspect worn rubber pads on the jaws.'],
      ['Woman', 'uk_f', 'Let’s pause Cell B for ten minutes so you can fit fresh pads and run five dry pick-and-place cycles before restarting output.'],
    ], null, [
      ['Part 3 · Problem', 'What issue occurred with Robotic Arm Three on Line B?', [
        'It dropped two sensor housings during automated transfers',
        'Its vacuum compressor lost air pressure overnight',
        'Its feeder track jammed with uncut metal scraps',
        'It collided with a safety partition along Cell B',
      ], 0, 'ตอบ It dropped two sensor housings during automated transfers (แขนกลตัวที่ 3 ทำตัวเรือนเซ็นเซอร์หล่นสองชิ้นระหว่างรอบการทำงานช่วงเช้า)'],
      ['Part 3 · Cause', 'What does the man suspect caused the parts to fall?', [
        'Worn rubber pads on the robotic gripper jaws',
        'Insufficient vacuum air pressure at the nozzle',
        'Thick machining oil coating the conveyor belt',
        'Incorrect coordinates programmed into the arm controller',
      ], 0, 'ตอบ Worn rubber pads on the robotic gripper jaws (แรงดันสุญญากาศปกติดี จึงคาดว่าแผ่นยางรองขากรรไกรจับสึกหรอ)'],
      ['Part 3 · Action', 'What will happen before Line B resumes regular production?', [
        'Fresh gripper pads will be installed and tested with five dry cycles',
        'Vacuum compressor seals will be sent to Metrology for testing',
        'Machined sensor housings will be washed manually first',
        'Production shifts will transfer onto Line A for the afternoon',
      ], 0, 'ตอบ Fresh gripper pads will be installed and tested with five dry cycles (หยุดสาย B สิบนาทีเพื่อเปลี่ยนแผ่นยางและทดสอบหยิบวางเปล่า 5 รอบก่อนเดินเครื่องต่อ)'],
    ]),

    p3(28, 'l28-p3-2', [
      ['Woman', 'au_f', 'Liam, our Automated Optical Inspection scanner just flagged seventeen solder bridges across Batch 412 of the controller boards.'],
      ['Man', 'ca_m', 'Seventeen bridges in one batch? That’s way above our usual two-board threshold. Are they concentrated around the same processor pins?'],
      ['Woman', 'au_f', 'Every single one appears along the bottom edge of Chip U-Fourteen, which points straight to excess paste squeezing through the screen stencil.'],
      ['Man', 'ca_m', 'I’ll pull Stencil S-Nine off the screen printer immediately and verify its stainless aperture tension under the laser gauge.'],
    ], null, [
      ['Part 3 · Topic', 'What production alert are the PCB inspectors discussing?', [
        'A surge in solder defects detected on circuit boards',
        'Upgrading software on the Automated Optical Inspection scanner',
        'Missing processor chips in Batch 412 inventory',
        'Training new inspection staff on screen printers',
      ], 0, 'ตอบ A surge in solder defects detected on circuit boards (พบปัญหาสะพานตะกั่วเชื่อมติดกันถึง 17 จุดในชุดผลิต Batch 412 ซึ่งสูงกว่าเกณฑ์มาก)'],
      ['Part 3 · Detail', 'Why does the woman think the screen stencil is responsible?', [
        'Every defect sits in the exact same area beside Chip U-Fourteen',
        'The optical scanner failed calibration earlier that shift',
        'Soldering oven temperatures climbed ten degrees overnight',
        'Processor pins from the supplier arrived bent',
      ], 0, 'ตอบ Every defect sits in the exact same area beside Chip U-Fourteen (ทุกจุดเกิดซ้ำตรงขอบล่างของชิป U-14 เหมือนกันหมด ชี้ไปที่น้ำยาตะกั่วล้นผ่านสเตนซิล)'],
      ['Part 3 · Action', 'What does the man say he will do right away?', [
        'Remove Stencil S-Nine and measure its tension on a laser gauge',
        'Manually desolder all seventeen defective controller boards',
        'Adjust optical scanner sensitivity thresholds downward',
        'Order spare U-Fourteen chips from the warehouse',
      ], 0, 'ตอบ Remove Stencil S-Nine and measure its tension on a laser gauge (จะถอดแผ่นสเตนซิล S-Nine ออกไปวัดความตึงด้วยเกจเลเซอร์ทันที)'],
    ]),

    p3(28, 'l28-p3-3', [
      ['Man', 'uk_m', 'Rachel, we have an external ISO tooling audit Friday morning, and I just spotted a problem on Supplier Precision’s thread micrometer set.'],
      ['Woman', 'us_f2', 'Wait—didn’t Supplier Precision ship us updated calibration certificates last month?'],
      ['Man', 'uk_m', 'Yes, for their pin gauges—but Micrometer Set Twelve actually drifted three hundredths of a millimeter outside limit during our in-house check yesterday.'],
      ['Woman', 'us_f2', 'Good catch! Tag Set Twelve out of service in the red drawer right now, and I’ll courier our certified backup set over from Plant Two before noon.'],
    ], null, [
      ['Part 3 · Detail', 'When is the external ISO tooling audit taking place?', [
        'Friday morning',
        'Tomorrow afternoon',
        'Next Monday at noon',
        'At the end of next month',
      ], 0, 'ตอบ Friday morning (การตรวจประเมินเครื่องมือมาตรฐาน ISO จากภายนอกมีขึ้นเช้าวันศุกร์)'],
      ['Part 3 · Problem', 'What issue did the man find with Micrometer Set Twelve?', [
        'Its measurement accuracy drifted beyond acceptable limits',
        'Its calibration certificate from last month is missing',
        'Supplier Precision sent metric sizes instead of imperial',
        'Two spindle locks seized up inside the storage case',
      ], 0, 'ตอบ Its measurement accuracy drifted beyond acceptable limits (ค่าความแม่นยำคลาดเคลื่อนเกินขอบเขตไป 0.03 มม. จากการตรวจภายในเมื่อวาน)'],
      ['Part 3 · Action', 'How will the woman ensure certified tooling is ready for the audit?', [
        'By having a calibrated backup set couriered from Plant Two',
        'By asking Supplier Precision for an overnight calibration rush',
        'By removing thread measurements from Friday’s audit list',
        'By repairing Micrometer Set Twelve in the metrology room',
      ], 0, 'ตอบ By having a calibrated backup set couriered from Plant Two (ติดป้ายงดใช้ชุดที่ 12 แล้วส่งพนักงานวิ่งรับชุดสำรองที่ผ่านการรับรองจากโรงงาน 2 มาก่อนเที่ยง)'],
    ]),

    p3(28, 'l28-p3-4', [
      ['Woman1', 'us_f', 'Team, the continuous thermal logger on Reflow Oven One just alerted—Zone Four dropped six degrees below our lead-free solder curve.'],
      ['Man', 'us_m2', 'Six degrees? No wonder those last two motor-driver boards showed dull cold joints under visual inspection!'],
      ['Woman2', 'uk_f2', 'Should I halt incoming boards from the pick-and-place feeder before any more enter the oven tunnel?'],
      ['Woman1', 'us_f', 'Yes, pause feeding right away! Let’s check whether a heating element fuse blew or the blower fan belt slipped.'],
      ['Man', 'us_m2', 'Wait—if Zone Four failed mid-run, every board currently riding inside Zones Four through Seven will need full X-ray re-screening.'],
    ], null, [
      ['Part 3 · Problem', 'What did the thermal monitoring system indicate on Reflow Oven One?', [
        'Temperature in Zone Four fell below required soldering levels',
        'Conveyor speed increased too quickly through the cooling chamber',
        'Lead-free solder paste overheated across Zone Seven',
        'Exhaust filters clogged along the pick-and-place feeder',
      ], 0, 'ตอบ Temperature in Zone Four fell below required soldering levels (เซ็นเซอร์แจ้งว่าอุณหภูมิโซน 4 ลดต่ำกว่าเกณฑ์ตะกั่วไร้สาร 6 องศา)'],
      ['Part 3 · Action', 'What will the second woman halt on the reflow oven line right away?', [
        'Stop additional circuit boards from entering the oven tunnel',
        'Replace the blown heating element fuse inside Zone Four',
        'Adjust reflow conveyor speed upward by ten percent',
        'Send cold-joint boards straight to customer packaging',
      ], 0, 'ตอบ Stop additional circuit boards from entering the oven tunnel (หยุดการป้อนแผ่นวงจรชุดใหม่เข้าอุโมงค์เตาอบทันที)'],
      ['Part 3 · Meaning', 'What does the man mean when he says, "Wait—if Zone Four failed mid-run, every board currently riding inside Zones Four through Seven will need full X-ray re-screening"?', [
        'Boards already passing through the oven could contain hidden solder defects',
        'X-ray scanners must shut down whenever Zone Four cools off',
        'Only boards inside Zones One through Three require inspection',
        'Heating fan repairs cannot begin until X-ray results print',
      ], 0, 'ตอบ Boards already passing through the oven could contain hidden solder defects (แผ่นวงจรที่อยู่ในช่วงโซน 4–7 ระหว่างเกิดเหตุอาจมีรอยบัดกรีเย็นซ่อนอยู่จึงต้องสแกน X-ray ใหม่ทั้งหมด)'],
    ]),

    p3(28, 'l28-p3-5', [
      ['Woman', 'ca_f', 'Derek, our wave-soldering station is scheduled for a heavy weekend run of drone flight controllers, and the bulk nitrogen tank gauge sits at eighteen percent.'],
      ['Man', 'au_m', 'Eighteen percent won’t make it past Saturday morning without risking oxidation on the copper pads. Did CryoGas confirm Friday’s refill truck?'],
      ['Woman', 'ca_f', 'They bumped routine routes to Monday because of a regional driver shortage—unless we pay a same-day dispatch fee or pick up two portable cylinders.'],
      ['Man', 'au_m', 'Portable cylinders take hours to hook up across manifold lines. Authorize the dispatch fee today so the main tank gets topped off before five.'],
    ], null, [
      ['Part 3 · Problem', 'What supply concern is affecting the weekend production run?', [
        'Bulk nitrogen gas levels are too low to sustain wave soldering',
        'Copper circuit pads arrived oxidized from the fabricator',
        'The wave-soldering manifold valve leaked overnight',
        'Drone flight controller enclosures failed drop testing',
      ], 0, 'ตอบ Bulk nitrogen gas levels are too low to sustain wave soldering (ก๊าซไนโตรเจนเหลือเพียง 18% ไม่พอเดินเครื่องบัดกรีคลื่นตลอดสุดสัปดาห์)'],
      ['Part 3 · Reason', 'Why did CryoGas postpone its standard delivery until Monday?', [
        'A shortage of regional delivery drivers delayed regular routes',
        'Refill trucks underwent mandatory pressure inspections',
        'Plant receiving docks close early on Fridays',
        'Portable cylinders sold out across the region',
      ], 0, 'ตอบ A shortage of regional delivery drivers delayed regular routes (บริษัทก๊าซขาดแคลนคนขับรถในภูมิภาคจึงเลื่อนรอบส่งปกติไปวันจันทร์)'],
      ['Part 3 · Decision', 'How does the man decide to resolve the shortage?', [
        'Approve the extra same-day delivery fee for a main-tank refill',
        'Send a plant pickup truck for two portable nitrogen cylinders',
        'Move the drone controller run to Monday afternoon',
        'Operate the soldering line without nitrogen shielding',
      ], 0, 'ตอบ Approve the extra same-day delivery fee for a main-tank refill (อนุมัติจ่ายค่าส่งด่วนวันเดียวเพื่อให้เติมถังหลักเสร็จก่อนห้าโมงเย็น)'],
    ]),

    p3(28, 'l28-p3-6', [
      ['Man', 'uk_m', 'Elena, during yesterday’s floor walkthrough, I noticed two assembly benches near Window Bay Three didn’t have logged morning ESD floor-mat resistance tests.'],
      ['Woman', 'us_f', 'Really? Operators usually swipe their shoe straps at the entry turnstile, so maybe they assumed bench mats stay grounded automatically.'],
      ['Man', 'uk_m', 'Cord snaps come loose all the time when chairs roll over them. Could we add a simple two-second cord-clip check to the start-of-shift tablet checklist?'],
      ['Woman', 'us_f', 'Great idea—and let’s route those grounding cords underneath rubber cable guards along the desk legs so chairs never pinch them again.'],
    ], null, [
      ['Part 3 · Detail', 'What gap did the man spot during yesterday’s floor inspection?', [
        'Missing morning resistance test logs at two assembly benches',
        'Employees skipping shoe-strap checks at the entry gate',
        'Damaged rolling chairs blocking Window Bay Three aisles',
        'Uncovered power outlets near conductive floor mats',
      ], 0, 'ตอบ Missing morning resistance test logs at two assembly benches (โต๊ะประกอบสองตัวใกล้หน้าต่าง 3 ไม่มีบันทึกการตรวจความต้านทานแผ่นรองโต๊ะช่วงเช้า)'],
      ['Part 3 · Cause', 'Why do bench mat grounding cords frequently disconnect?', [
        'Rolling chair wheels catch and pull the cord snaps loose',
        'Floor cleaners unplug them while mopping aisles',
        'Humidity weakens adhesive backing on plastic clips',
        'Operators remove straps to reach neighboring benches',
      ], 0, 'ตอบ Rolling chair wheels catch and pull the cord snaps loose (ล้อเก้าอี้กลิ้งทับสายกราวด์จนหัวล็อกหลุดออกบ่อยครั้ง)'],
      ['Part 3 · Proposal', 'What physical fix does the woman suggest in addition to the checklist update?', [
        'Securing cords inside protective guards along desk legs',
        'Replacing rolling chairs with stationary metal stools',
        'Relocating both assembly benches away from Window Bay Three',
        'Installing wireless mat sensors above each workstation',
      ], 0, 'ตอบ Securing cords inside protective guards along desk legs (ร้อยสายกราวด์ไว้ใต้รางยางครอบสายตามขาโต๊ะเพื่อกันเก้าอี้ทับ)'],
    ]),

    p3(28, 'l28-p3-7', [
      ['Woman', 'us_f2', 'Hi, this is Priya from Horizon Robotics calling about our annual precision bore-gauge calibration contract—last time turnaround took eleven business days.'],
      ['Man', 'ca_m', 'I apologize for that backlog, Priya. We added two metrology technicians last quarter, so standard bench turnaround is now down to four business days.'],
      ['Woman', 'us_f2', 'Four days helps a lot, though we have forty-two gauges total and can’t halt our machine shop all at once. Can we split them into two weekly batches?'],
      ['Man', 'ca_m', 'Certainly—no extra shipping fee on split batches as long as each lot includes at least fifteen tools, and I’ll email you pre-paid courier labels today.'],
    ], null, [
      ['Part 3 · Problem', 'What concern does Priya raise at the beginning of the call?', [
        'Previous calibration service took eleven business days to complete',
        'Horizon Robotics lost calibration certificates for forty-two gauges',
        'Courier shipping fees doubled since last year’s contract',
        'Two bore gauges returned damaged from the metrology lab',
      ], 0, 'ตอบ Previous calibration service took eleven business days to complete (รอบก่อนใช้เวลาสอบเทียบนานถึง 11 วันทำการ)'],
      ['Part 3 · Detail', 'Why can the calibration lab now complete orders in four business days?', [
        'They hired two additional metrology specialists',
        'They automated bore-gauge cleaning machines',
        'They moved closer to Horizon Robotics’ industrial park',
        'They stopped accepting large split-batch contracts',
      ], 0, 'ตอบ They hired two additional metrology specialists (แล็บเพิ่งจ้างช่างมาตรวิทยาเพิ่มอีกสองคนเมื่อไตรมาสก่อน)'],
      ['Part 3 · Detail', 'What condition applies to receiving free shipping on split batches?', [
        'Each individual shipment must contain fifteen or more tools',
        'Both weekly shipments must return within the same month',
        'Horizon Robotics must drop off the first batch in person',
        'All forty-two bore gauges must share the same serial range',
      ], 0, 'ตอบ Each individual shipment must contain fifteen or more tools (ไม่มีค่าส่งเพิ่มหากแต่ละรอบส่งเครื่องมืออย่างน้อย 15 ชิ้นขึ้นไป)'],
    ]),

    p3(28, 'l28-p3-8', [
      ['Man1', 'us_m', 'Hannah, shipping just notified us that three vision-sensor boards for our Zurich client arrived with snapped corner capacitors.'],
      ['Woman', 'au_f', 'Snapped capacitors? Were they packed inside our pink anti-static bubble bags inside standard cardboard dividers?'],
      ['Man2', 'uk_m', 'Look at the return photos—the corner capacitors sit flush with the board edge, so cardboard dividers pressed directly against those tiny pins during transit.'],
      ['Man1', 'us_m', 'That explains it! Let’s switch to custom-milled foam trays with recessed edge pockets immediately so nothing touches the component perimeter.'],
      ['Woman', 'au_f', 'Good call—I’ll get the packaging vendor on the line now and pull the current divider batch before afternoon dispatch rolls out.'],
    ], null, [
      ['Part 3 · Problem', 'What issue was reported by the Zurich client?', [
        'Several vision-sensor boards arrived with broken corner components',
        'Shipping cartons arrived without anti-static moisture barriers',
        'Board shipments were delayed at Swiss customs',
        'Software firmware was missing from three sensor boards',
      ], 0, 'ตอบ Several vision-sensor boards arrived with broken corner components (ตัวเก็บประจุตรงมุมแผ่นวงจรหักเสียหาย 3 แผ่นเมื่อถึงลูกค้าที่ซูริก)'],
      ['Part 3 · Cause', 'Why did the components break during shipping?', [
        'Cardboard box dividers pressed right against edge-mounted pins',
        'Warehouse workers stacked heavy motor crates onto the parcels',
        'Static electricity discharged through pink bubble bags',
        'Moisture softened the outer shipping cartons in transit',
      ], 0, 'ตอบ Cardboard box dividers pressed right against edge-mounted pins (ตัวคั่นกระดาษแข็งกดทับขั้วตัวเก็บประจุที่วางชิดขอบแผ่นวงจรระหว่างขนส่ง)'],
      ['Part 3 · Meaning', 'What does the woman mean when she says, "pull the current divider batch before afternoon dispatch rolls out"?', [
        'Stop today’s outgoing shipment from using the faulty cardboard dividers',
        'Return unused pink anti-static bags to the warehouse vendor',
        'Delay the Zurich client’s replacement shipment until next week',
        'Ask shipping clerks to hand-deliver packages locally',
      ], 0, 'ตอบ Stop today’s outgoing shipment from using the faulty cardboard dividers (รีบระงับการใช้แผ่นกั้นกระดาษแข็งล็อตนี้ก่อนรถขนส่งรอบบ่ายจะออก)'],
    ]),

    p3(28, 'l28-p3-9', [
      ['Woman', 'uk_f', 'Sam, boards feeding out of Assembly Station Four keep skewing about two degrees to the right before entering the automated laser marker.'],
      ['Man', 'us_m2', 'Wait—if they tilt two degrees, the serial barcode prints off the white label pad. Have you checked the drive belt guide rails?'],
      ['Woman', 'uk_f', 'The rails look tight, though the left-side urethane roller feels glazed smooth while the right roller still grips firmly.'],
      ['Man', 'us_m2', 'Uneven roller traction will twist any light board! Swap both rollers as a matched pair tonight—we keep six sets inside Maintenance Locker Two.'],
    ], null, [
      ['Part 3 · Problem', 'What happens when circuit boards leave Assembly Station Four?', [
        'They rotate slightly crookedly before reaching the laser marker',
        'They fall off the conveyor guide rails onto the floor',
        'They pause mid-belt because urethane rollers locked up',
        'Their barcode labels peel off from excessive belt heat',
      ], 0, 'ตอบ They rotate slightly crookedly before reaching the laser marker (แผ่นวงจรเอียงไปทางขวาประมาณสององศาก่อนเข้าเครื่องยิงเลเซอร์)'],
      ['Part 3 · Cause', 'What physical defect did the woman observe on the conveyor?', [
        'One side roller wore smoother than the opposite roller',
        'Guide rail brackets loosened along the laser station',
        'Heavy dust coated the white barcode label pads',
        'Drive belt motors ran at inconsistent speeds',
      ], 0, 'ตอบ One side roller wore smoother than the opposite roller (ลูกกลิ้งฝั่งซ้ายสึกจนลื่นกว่าฝั่งขวาทำให้แรงเสียดทานไม่เท่ากัน)'],
      ['Part 3 · Proposal', 'What maintenance does the man advise on Station Four tonight?', [
        'Replacing both left and right rollers together as a pair',
        'Realigning the laser barcode head two degrees right',
        'Cleaning existing urethane rollers with alcohol wipes',
        'Ordering custom guide rails from Maintenance Locker Two',
      ], 0, 'ตอบ Replacing both left and right rollers together as a pair (แนะนำให้เปลี่ยนลูกกลิ้งทั้งซ้ายและขวาพร้อมกันเป็นคู่จากตู้ซ่อมบำรุง 2)'],
    ]),

    p3(28, 'l28-p3-10', [
      ['Man', 'ca_m', 'Nina, incoming QC just measured four aluminum heat-sink castings from Vendor Sterling that came in three tenths over thickness tolerance.'],
      ['Woman', 'us_f', 'Three tenths over means the cooling fan clip won’t snap onto the motherboard mount! Is it one random mold cavity or the whole crate?'],
      ['Man', 'ca_m', 'Every part stamped with Cavity Number Four failed the height gauge, while Cavities One through Three tested dead-on.'],
      ['Woman', 'us_f', 'Call Sterling’s tooling manager right away—they need to pull Cavity Four for die resurfacing and send us sorted replacements by Thursday.'],
    ], null, [
      ['Part 3 · Problem', 'Why will the defective aluminum heat sinks cause trouble on the assembly line?', [
        'Their extra thickness prevents cooling fan clips from latching',
        'Their mounting holes are drilled too wide for motherboard screws',
        'Rough metal burrs could scratch optical board traces',
        'Inconsistent aluminum weight slows down robotic pickers',
      ], 0, 'ตอบ Their extra thickness prevents cooling fan clips from latching (ความหนาเกินค่าเผื่อ 0.3 ทำให้คลิปล็อกพัดลมระบายความร้อนกดไม่ลง)'],
      ['Part 3 · Detail', 'Which parts inside the shipment failed the height inspection?', [
        'Only castings marked with Cavity Number Four',
        'Every heat sink across all four mold cavities',
        'Heat sinks from Cavities One through Three',
        'Only bottom-layer crates damaged in shipping',
      ], 0, 'ตอบ Only castings marked with Cavity Number Four (เฉพาะชิ้นงานที่ประทับตราเบ้าหล่อ Cavity Number Four เท่านั้นที่ไม่ผ่านเกณฑ์)'],
      ['Part 3 · Action', 'What should Vendor Sterling do before Thursday?', [
        'Repair Cavity Four’s die and ship inspected replacement parts',
        'Issue a full credit and close all four mold cavities',
        'Send technicians on site to sand down oversized castings',
        'Redesign the motherboard cooling fan clip',
      ], 0, 'ตอบ Repair Cavity Four’s die and ship inspected replacement parts (ถอดเบ้า 4 ไปปรับผิวแม่พิมพ์ใหม่และคัดส่งชิ้นส่วนทดแทนภายในวันพฤหัสบดี)'],
    ]),

    p3(28, 'l28-p3-11', [
      ['Woman', 'uk_f2', 'Devon, I just pulled the midday Automated Optical Inspection printout across all four surface-mount lines.'],
      ['Man', 'us_m', 'How are things holding up? Yesterday morning Line Three gave us a headache with misaligned capacitors.'],
      ['Woman', 'uk_f2', 'Line Three looks steady today, actually—the real alarm is whichever line just crossed our fifteen-defect shutdown threshold due to insufficient solder paste.'],
      ['Man', 'us_m', 'Whoa, let me halt that line right now and send a technician over to scrub the solder squeegee blades before afternoon boards stack up.'],
    ], doc('table', 'Midday AOI Shift Defect Summary', [['Plant', 'Precision Plant B'], ['Limit', '15 Defects Max']], [
      tbl(['Assembly Line', 'Primary Defect', 'Defect Count', 'Threshold Status'], [
        ['Line 1', 'Component Skew', '6', 'Within Limit'],
        ['Line 2', 'Insufficient Solder Paste', '19', 'Exceeded (Action)'],
        ['Line 3', 'Tombstoning', '4', 'Within Limit'],
        ['Line 4', 'Solder Bridging', '11', 'Within Limit'],
      ]),
    ]), [
      ['Part 3 · Detail', 'Which issue troubled Line Three yesterday morning?', [
        'Capacitors placed slightly out of alignment',
        'Blocked vacuum nozzles on robotic pickers',
        'High defect counts from insufficient solder paste',
        'Power interruptions along the AOI scanner belt',
      ], 0, 'ตอบ Capacitors placed slightly out of alignment (เมื่อวานเช้า Line 3 มีปัญหาตัวเก็บประจุวางเบี้ยวตำแหน่ง)'],
      ['Part 3 · Graphic', 'Look at the graphic. Which assembly line will the man shut down now?', [
        'Line 2',
        'Line 1',
        'Line 3',
        'Line 4',
      ], 0, 'ตอบ Line 2 (ผู้หญิงระบุสายที่เกินเกณฑ์ 15 ชิ้นเนื่องจากน้ำยาตะกั่วไม่พอ Insufficient Solder Paste ซึ่งในตารางคือ Line 2 พบ 19 ชิ้น)'],
      ['Part 3 · Action', 'What maintenance step will a technician perform on that line?', [
        'Clean the solder paste squeegee blades',
        'Replace the optical camera ring light',
        'Recalibrate component placement feeders',
        'Increase reflow oven heat in Zone Three',
      ], 0, 'ตอบ Clean the solder paste squeegee blades (ส่งช่างไปทำความสะอาดใบปาดน้ำยาตะกั่ว solder squeegee blades)'],
    ]),

    p3(28, 'l28-p3-12', [
      ['Man1', 'ca_m', 'Before the truck leaves for our external metrology lab at four, let’s confirm which supplier tools need urgent recertification.'],
      ['Woman', 'au_f', 'Vendor Nord sent word that their torque sensors must stay within one-point-five percent deviation under ISO rules.'],
      ['Man2', 'uk_m', 'Check our calibration bench log—only one Nord sensor drifted past that tolerance limit this morning, even though its sticker isn’t due until next month.'],
      ['Man1', 'ca_m', 'Good catch! Let’s box that specific Nord unit right away so it catches today’s four o’clock courier.'],
      ['Woman', 'au_f', 'I’ll print its fault sheet now and tape the shipping barcode onto the foam case.'],
    ], doc('table', 'Supplier Tooling Calibration Check', [['Tolerance', '±1.5% Max'], ['Courier', '4:00 P.M.']], [
      tbl(['Tool ID', 'Supplier', 'Tool Type', 'Measured Deviation', 'Sticker Due'], [
        ['TG-201', 'Nord Metrology', 'Torque Sensor', '+0.4%', 'Next Month'],
        ['TG-204', 'Nord Metrology', 'Torque Sensor', '+2.3%', 'Next Month'],
        ['PG-118', 'Vanguard Tool', 'Pin Gauge Set', '+1.9%', 'Overdue'],
        ['MC-305', 'Nord Metrology', 'Digital Micrometer', '-0.8%', 'Two Weeks'],
      ]),
    ]), [
      ['Part 3 · Detail', 'What tolerance limit did Vendor Nord specify for its torque sensors?', [
        'Maximum deviation of 1.5 percent',
        'Maximum deviation of 0.4 percent',
        'Mandatory calibration every two weeks',
        'Annual testing regardless of sensor readings',
      ], 0, 'ตอบ Maximum deviation of 1.5 percent (Nord ระบุว่าค่าความคลาดเคลื่อนของเซ็นเซอร์แรงบิดต้องไม่เกิน 1.5 เปอร์เซ็นต์)'],
      ['Part 3 · Graphic', 'Look at the graphic. Which tool will the team pack for today’s courier?', [
        'TG-204',
        'TG-201',
        'PG-118',
        'MC-305',
      ], 0, 'ตอบ TG-204 (เป็นเซ็นเซอร์แรงบิดของ Nord Metrology ที่ค่าคลาดเคลื่อน +2.3% เกินเกณฑ์ 1.5% ทั้งที่ป้ายยังไม่หมดอายุ)'],
      ['Part 3 · Action', 'What will the woman prepare before the Nord courier departs?', [
        'Print a fault report and attach a shipping label to the case',
        'Call Vendor Nord to request an on-site technician visit',
        'Recheck PG-118 pin gauges on the metrology bench',
        'Hold the four o’clock courier for ten extra minutes',
      ], 0, 'ตอบ Print a fault report and attach a shipping label to the case (เธอจะพิมพ์ใบแจ้งอาการเสียและติดบาร์โค้ดส่งของบนกล่องโฟม)'],
    ]),

    p3(28, 'l28-p3-13', [
      ['Woman', 'us_f', 'Marcus, we need to wheel forty trays of freshly soldered control boards through Zone C into cold burn-in testing right around two o’clock today.'],
      ['Man', 'us_m2', 'Hold on—check the facilities cleanroom board! Zone C has high-pressure ceiling work scheduled right through the two o’clock window.'],
      ['Woman', 'us_f', 'Oh, we definitely can’t roll open ESD board trays under ceiling dust blowing! Who is supervising that Zone C work so I can ask if they’ll delay thirty minutes?'],
      ['Man', 'us_m2', 'Look at the lead column—call him on radio Channel Four before lunch, and he’ll probably swap Zone C until after your carts pass through.'],
    ], doc('box', 'Cleanroom Maintenance Schedule — Today', [['Facility', 'Robotics Plant Wing 2']], [
      box('Scheduled Maintenance Windows', [
        'Zone A (9:00 A.M.–11:00 A.M.) — Robotic Arm Axis Lubrication | Lead: Priya Nair',
        'Zone B (11:30 A.M.–1:00 P.M.) — ESD Floor Strip Waxing | Lead: David Ortiz',
        'Zone C (1:30 P.M.–3:00 P.M.) — HEPA Ceiling Filter Blowout | Lead: Kenji Sato',
        'Zone D (3:30 P.M.–5:00 P.M.) — Nitrogen Line Pressure Check | Lead: Laura Brooks',
      ]),
    ]), [
      ['Part 3 · Topic', 'What task does the woman plan to perform around two o’clock?', [
        'Transport forty trays of circuit boards to burn-in testing',
        'Replace HEPA ceiling filters above the burn-in lab',
        'Inspect robotic arm lubrication along Zone A',
        'Wax anti-static floor strips inside Zone B',
      ], 0, 'ตอบ Transport forty trays of circuit boards to burn-in testing (ต้องการเข็นถาดแผงวงจรที่เพิ่งบัดกรีเสร็จ 40 ถาดผ่านโซน C ไปทดสอบการเบิร์นอิน)'],
      ['Part 3 · Graphic', 'Look at the graphic. Who should the woman contact on radio Channel Four?', [
        'Kenji Sato',
        'Priya Nair',
        'David Ortiz',
        'Laura Brooks',
      ], 0, 'ตอบ Kenji Sato (ตารางระบุว่างานช่วง 13:30–15:00 น. ใน Zone C คือ HEPA Ceiling Filter Blowout มี Kenji Sato เป็นผู้รับผิดชอบ)'],
      ['Part 3 · Proposal', 'What will the woman ask the maintenance lead to do?', [
        'Postpone Zone C ceiling work by thirty minutes',
        'Cover all forty board trays with plastic tarps',
        'Help push ESD carts down the Zone B corridor',
        'Start nitrogen pressure checks ahead of schedule',
      ], 0, 'ตอบ Postpone Zone C ceiling work by thirty minutes (เธอจะขอให้เลื่อนงานเป่ากรองฝุ่นเพดานในโซน C ออกไป 30 นาทีเพื่อรอเข็นรถผ่านก่อน)'],
    ]),

    // Set 28 Part 4 (10 Talks × 3 Qs = 30 Qs; Talks 8-10 with Graphics)
    p4(28, 'l28-p4-1', 'the following factory floor announcement', 'uk_f',
      'Attention Assembly Line B technicians and robotic cell operators. Tomorrow morning between five-thirty and six-fifteen A.M., facilities engineers will temporarily shut down central compressed air valves along the north wing to replace two leaking manifold regulators. Please verify that all pneumatic grippers are parked in lock position and that circuit trays are covered with anti-static shields before leaving tonight’s shift. Normal air pressure will resume prior to the six-thirty morning startup.',
      null, [
        ['Part 4 · Topic', 'Why is compressed air being turned off tomorrow morning?', [
          'Engineers need to replace two leaking manifold regulators',
          'Technicians are installing new pneumatic robotic arms',
          'Power utilities are upgrading north wing electrical panels',
          'Safety inspectors are conducting a routine valve drill',
        ], 0, 'ตอบ Engineers need to replace two leaking manifold regulators (วิศวกรอาคารจะปิดวาล์วลมอัดชั่วคราวเพื่อเปลี่ยนตัวคุมแรงดันที่รั่วสองตัว)'],
        ['Part 4 · Detail', 'When will normal air pressure be restored?', [
          'Before the 6:30 A.M. shift begins',
          'At 5:30 A.M. sharp',
          'Immediately after tonight’s shift ends',
          'At midday during lunch break',
        ], 0, 'ตอบ Before the 6:30 A.M. shift begins (ประกาศระบุแรงดันลมจะกลับมาเป็นปกติก่อนเริ่มกะเช้าเวลา 6:30 น.)'],
        ['Part 4 · Action', 'What should outgoing night-shift workers do before leaving?', [
          'Lock pneumatic grippers and cover circuit board trays',
          'Drain condensation tanks behind Assembly Line B',
          'Unplug optical inspection monitors along the north wing',
          'Move finished servo motors to the loading bay',
        ], 0, 'ตอบ Lock pneumatic grippers and cover circuit board trays (ให้ตั้งแขนจับลมไว้ในตำแหน่งล็อกและคลุมถาดวงจรด้วยแผ่นป้องกันไฟฟ้าสถิต)'],
      ]),

    p4(28, 'l28-p4-2', 'the following recorded telephone message', 'us_m',
      'You have reached Precision Gauge Calibration Labs. Our shipping and receiving dock is open Monday through Friday from seven A.M. until four-thirty P.M. To check whether your company’s torque wrenches, micrometers, or temperature probes have completed NIST-traceable certification, please visit our client portal using your work order code. For rush twenty-four-hour turnaround requests or broken seal reports, stay on the line to speak directly with a metrology coordinator.',
      null, [
        ['Part 4 · Detail', 'Until what time is the receiving dock open on weekdays?', [
          '4:30 P.M.',
          '4:00 P.M.',
          '5:00 P.M.',
          '7:00 P.M.',
        ], 0, 'ตอบ 4:30 P.M. (จุดรับส่งสินค้าเปิดวันจันทร์ถึงศุกร์ 07:00–16:30 น.)'],
        ['Part 4 · Detail', 'How can clients verify if their equipment calibration is finished?', [
          'By checking the online portal with their work order code',
          'By calling the receiving dock after five o’clock',
          'By waiting for an automated text message alert',
          'By reviewing monthly paper billing statements',
        ], 0, 'ตอบ By checking the online portal with their work order code (เข้าตรวจสอบผ่านพอร์ทัลลูกค้าโดยใช้รหัสใบสั่งงาน)'],
        ['Part 4 · Action', 'Why should a caller remain on the line?', [
          'To arrange twenty-four-hour rush calibration or report broken seals',
          'To schedule routine Friday afternoon courier pickups',
          'To download blank calibration certificate templates',
          'To request pricing quotes for new micrometers',
        ], 0, 'ตอบ To arrange twenty-four-hour rush calibration or report broken seals (ให้ถือสายรอเพื่อขอคิวเร่งด่วน 24 ชั่วโมงหรือแจ้งเรื่องซีลชำรุด)'],
      ]),

    p4(28, 'l28-p4-3', 'the following excerpt from a quality control meeting', 'au_m',
      'Let’s review why our optical inspection station on Line Four flagged eighty false defects yesterday afternoon. Turns out the overhead LED ring light flickered whenever nearby welding robots cycled on, casting shadows beside silver capacitor pins so the camera mistook shadows for missing solder. Yesterday our technicians wasted two hours re-checking perfectly sound boards by hand! Tonight electricians are adding a dedicated voltage stabilizer to that camera rig—hopefully that puts the ghost chase behind us.',
      null, [
        ['Part 4 · Problem', 'What triggered eighty unnecessary defect alerts on Line Four?', [
          'Flickering inspection lights created shadows mistaken for missing solder',
          'Welding sparks smudged the optical scanner’s glass lens',
          'Capacitor suppliers switched from silver pins to matte black coatings',
          'Camera software misread updated circuit board part numbers',
        ], 0, 'ตอบ Flickering inspection lights created shadows mistaken for missing solder (ไฟวงแหวน LED กะพริบเวลาหุ่นยนต์เชื่อมทำงานจนเกิดเงา ทำให้กล้องเข้าใจผิดว่าตะกั่วหาย)'],
        ['Part 4 · Detail', 'How did technicians lose two hours yesterday afternoon?', [
          'Manually re-inspecting circuit boards that actually passed standards',
          'Replacing burned-out LED bulbs above Line Four',
          'Reprogramming welding robot paths away from optical benches',
          'Waiting for spare capacitors from the warehouse',
        ], 0, 'ตอบ Manually re-inspecting circuit boards that actually passed standards (เสียเวลาสองชั่วโมงไปตรวจซ้ำแผ่นวงจรที่จริงๆ แล้วสมบูรณ์ดี)'],
        ['Part 4 · Meaning', 'What does the speaker mean when he says, "hopefully that puts the ghost chase behind us"?', [
          'The voltage stabilizer should stop false defect alarms from recurring',
          'Electricians will inspect hidden wiring behind the main wall',
          'Technicians should stop logging minor cosmetic defects',
          'Line Four cameras will be replaced with newer X-ray units',
        ], 0, 'ตอบ The voltage stabilizer should stop false defect alarms from recurring (หวังว่าการติดตัวคุมแรงดันไฟจะช่วยให้เลิกต้องไล่ตามแก้การแจ้งเตือนหลอกเสียที)'],
      ]),

    p4(28, 'l28-p4-4', 'the following staff training briefing', 'ca_f',
      'Before loading today’s wire-harness crimping machine, let’s inspect the supplier’s newly returned carbide dies together. Never mount a freshly sharpened die straight into the press without checking its brass alignment pin and running three pull-force sample wires. Last quarter, a slightly burred die nicked copper strands inside two hundred power harnesses before an operator caught it. Remember, five minutes at the pull-tester saves an entire afternoon of cutting scrap wire.',
      null, [
        ['Part 4 · Audience', 'Who is the speaker instructing before loading the crimping press?', [
          'Machine operators preparing a wire-crimping station',
          'Procurement officers ordering carbide dies from vendors',
          'Robotics programmers adjusting press cycle speeds',
          'Quality auditors inspecting finished shipping pallets',
        ], 0, 'ตอบ Machine operators preparing a wire-crimping station (ชี้แจงผู้ควบคุมเครื่องย้ำสายไฟก่อนนำแม่พิมพ์ที่ลับคมมาติดตั้ง)'],
        ['Part 4 · Detail', 'What should workers do before running regular production with a sharpened die?', [
          'Inspect the alignment pin and test three sample crimps for pull strength',
          'Coat the carbide edge with high-viscosity cutting oil',
          'Polish copper wire ends with fine sandpaper',
          'Adjust press air pressure ten percent lower than usual',
        ], 0, 'ตอบ Inspect the alignment pin and test three sample crimps for pull strength (ตรวจสลักจัดตำแหน่งทองเหลืองและทดสอบแรงดึงตัวอย่าง 3 เส้นก่อนเสมอ)'],
        ['Part 4 · Reason', 'Why is this pre-startup verification emphasized?', [
          'A damaged die previously ruined two hundred wire harnesses',
          'Pull-testing machines require calibration every five minutes',
          'Carbide dies frequently crack under high press speeds',
          'Suppliers often ship mismatched brass alignment pins',
        ], 0, 'ตอบ A damaged die previously ruined two hundred wire harnesses (ไตรมาสก่อนแม่พิมพ์ที่มีรอยบิ่นทำให้สายไฟเสียถึง 200 เส้นก่อนจะตรวจพบ)'],
      ]),

    p4(28, 'l28-p4-5', 'the following plant tour introduction', 'us_m2',
      'Welcome, visiting automation engineers, to Apex Robotics and Circuit Manufacturing. Over the next forty minutes, we’ll tour our cleanroom surface-mount lines, then inspect our six-axis robotic assembly cells from the elevated glass skywalk. Please slip blue static-dissipative shoe covers over your boots here in the lobby, and keep cameras stowed inside coat pockets while passing prototype benches. Any technical questions about cycle tolerances or sensor specs are welcome during our Q&A in Boardroom B afterward.',
      null, [
        ['Part 4 · Detail', 'From where will visitors observe the six-axis robotic assembly cells?', [
          'An elevated glass walkway above the floor',
          'Direct workstations beside each robotic cage',
          'Live monitor feeds inside Boardroom B',
          'The lobby exhibition display windows',
        ], 0, 'ตอบ An elevated glass walkway above the floor (ผู้เยี่ยมชมจะได้ดูเซลล์หุ่นยนต์หกแกนจากทางเดินลอยฟ้ากระจกด้านบน)'],
        ['Part 4 · Detail', 'What rule must guests observe near prototype workbenches?', [
          'Keep cameras put away inside their pockets',
          'Avoid speaking with assembly line technicians',
          'Wear protective noise-canceling earmuffs',
          'Carry anti-static wrist straps at all times',
        ], 0, 'ตอบ Keep cameras put away inside their pockets (ให้เก็บกล้องไว้ในกระเป๋าเสื้อตลอดเวลาขณะเดินผ่านโต๊ะงานต้นแบบ)'],
        ['Part 4 · Detail', 'When will visitors have an opportunity to ask detailed technical questions?', [
          'After the tour during a session in Boardroom B',
          'Immediately before stepping into the cleanroom',
          'At each station along the surface-mount line',
          'Via an online feedback form sent tonight',
        ], 0, 'ตอบ After the tour during a session in Boardroom B (ซักถามรายละเอียดทางเทคนิคได้ในช่วงถาม-ตอบที่ห้องประชุม B หลังจบการเดินชม)'],
      ]),

    p4(28, 'l28-p4-6', 'the following voicemail message', 'uk_m',
      'Hello Sandra, this is David calling from Summit Precision Tooling regarding your standing purchase order for tungsten micro-drill bits. Unfortunately, our heat-treatment furnace went down for emergency sensor replacement yesterday, which pushed curing back on your zero-point-three-millimeter bits until Wednesday morning. I can dispatch half the order—two hundred bits—by overnight air tomorrow at our expense if that keeps your PCB drilling spindles running until the remaining lot arrives Thursday.',
      null, [
        ['Part 4 · Reason', 'Why was the shipment of micro-drill bits delayed?', [
          'A heat-treatment furnace shut down for sensor repair',
          'Tungsten raw rods failed incoming hardness tests',
          'Overnight air freight flights were canceled by fog',
          'Summit Precision misread the zero-point-three-millimeter order',
        ], 0, 'ตอบ A heat-treatment furnace shut down for sensor repair (เตาอบชุบแข็งต้องปิดซ่อมเปลี่ยนเซ็นเซอร์กะทันหันเมื่อวาน)'],
        ['Part 4 · Proposal', 'What does David offer to do at his company’s cost?', [
          'Send half the drill bits by overnight air tomorrow',
          'Discount the entire purchase order by twenty percent',
          'Loan temporary carbide spindles until Wednesday',
          'Refund shipping fees on next month’s tooling invoice',
        ], 0, 'ตอบ Send half the drill bits by overnight air tomorrow (เสนอส่งด่วนทางเครื่องบินมาให้ครึ่งหนึ่งจำนวน 200 ดอกในวันพรุ่งนี้โดยบริษัทผู้ขายออกค่าใช้จ่ายเอง)'],
        ['Part 4 · Detail', 'When is the rest of the order expected to arrive?', [
          'On Thursday',
          'On Tuesday morning',
          'On Wednesday afternoon',
          'Next Monday morning',
        ], 0, 'ตอบ On Thursday (ส่วนที่เหลือคาดว่าจะส่งถึงในวันพฤหัสบดี)'],
      ]),

    p4(28, 'l28-p4-7', 'the following operations update', 'us_f2',
      'Good afternoon, afternoon-shift leads. As we transition to extended twenty-four-hour runs for our autumn robotics orders, please enforce one critical check during every two A.M. shift walk. When outside temperatures dip below freezing, outdoor liquid-nitrogen vaporizer pipes build heavy frost sleeves that reduce line pressure. If you notice frost exceeding half an inch along the vaporizer coils outside Bay Five, switch immediately to Reserve Manifold B and log a ticket for morning facilities.',
      null, [
        ['Part 4 · Topic', 'What issue occurs outdoors when overnight temperatures fall below freezing?', [
          'Frost forms on vaporizer pipes and lowers gas line pressure',
          'Liquid nitrogen freezes inside Bay Five indoor tanks',
          'Automated bay doors fail to seal around shipping trucks',
          'Condensation drips onto circuit boards near exterior walls',
        ], 0, 'ตอบ Frost forms on vaporizer pipes and lowers gas line pressure (น้ำแข็งเกาะท่อไอระเหยไนโตรเจนเหลวด้านนอกจนทำให้แรงดันในสายส่งลดลง)'],
        ['Part 4 · Detail', 'How often should shift leads check the outdoor vaporizer coils?', [
          'Every morning at 2:00 A.M.',
          'Once every hour throughout the night',
          'Only at the start of the afternoon shift',
          'Right before weekend plant shutdowns',
        ], 0, 'ตอบ Every morning at 2:00 A.M. (ให้ตรวจเช็กทุกครั้งในช่วงเดินตรวจรอบเวลาตีสอง)'],
        ['Part 4 · Action', 'What should leads do if frost exceeds half an inch?', [
          'Switch flow to Reserve Manifold B and file a facilities ticket',
          'Pour warm water across the exterior vaporizer pipes',
          'Halt robotic assembly operations until dawn',
          'Increase tank valve pressure manually by twenty percent',
        ], 0, 'ตอบ Switch flow to Reserve Manifold B and file a facilities ticket (สลับไปใช้ท่อสำรอง Reserve Manifold B ทันทีและเปิดใบแจ้งซ่อมให้ทีมอาคารช่วงเช้า)'],
      ]),

    p4(28, 'l28-p4-8', 'the following inspection report and team briefing', 'ca_m',
      'Let’s look at last week’s circuit board yield breakdown before setting maintenance priorities for Friday night. Our target minimum first-pass yield across all shifts is ninety-six percent. Two of the three shifts comfortably beat that target with minimal manual rework. However, the lowest-performing shift dragged down our weekly plant average, largely because one placement feeder kept flipping small chip resistors upside down. Let’s assign Metrology to rebuild that feeder before that shift returns tomorrow.',
      doc('table', 'Weekly PCB Assembly Shift Yield', [['Target Yield', '96.0% Min'], ['Plant', 'Line 1–4']], [
        tbl(['Shift', 'Boards Built', 'First-Pass Yield', 'Primary Cause of Rework'], [
          ['Day Shift (6 A.M.–2 P.M.)', '4,200', '97.4%', 'Minor Label Skew'],
          ['Swing Shift (2 P.M.–10 P.M.)', '3,950', '96.8%', 'Flux Residue Spots'],
          ['Night Shift (10 P.M.–6 A.M.)', '3,600', '93.5%', 'Inverted Chip Resistors'],
        ]),
      ]), [
        ['Part 4 · Detail', 'What minimum first-pass yield percentage does the plant aim to achieve?', [
          '96.0%',
          '93.5%',
          '97.4%',
          '96.8%',
        ], 0, 'ตอบ 96.0% (ผู้พูดระบุเป้าหมายขั้นต่ำ First-Pass Yield ของทุกกะคือ 96 เปอร์เซ็นต์)'],
        ['Part 4 · Graphic', 'Look at the graphic. Which shift missed the quality target last week?', [
          'Night Shift',
          'Day Shift',
          'Swing Shift',
          'Both Swing and Night Shifts',
        ], 0, 'ตอบ Night Shift (ตารางแสดงว่า Night Shift ได้เพียง 93.5% ซึ่งต่ำกว่าเป้า 96% และมีปัญหาตัวต้านทานกลับหัว Inverted Chip Resistors)'],
        ['Part 4 · Action', 'What will Metrology do before that shift’s next rotation?', [
          'Rebuild the problematic chip placement feeder',
          'Clean flux residue nozzles on Line Four',
          'Adjust label skew guides for the Day Shift',
          'Increase output quotas to four thousand boards',
        ], 0, 'ตอบ Rebuild the problematic chip placement feeder (มอบหมายให้ฝ่ายมาตรวิทยาซ่อมประกอบตัวป้อนชิ้นส่วนที่พลิกตัวต้านทานกลับหัวให้เสร็จก่อนกะนั้นกลับมาทำงาน)'],
      ]),

    p4(28, 'l28-p4-9', 'the following calibration procedure and voicemail', 'uk_f2',
      'Hey Leo, it’s Maya at the supplier tooling bench. I started recertifying the twenty digital torque drivers returned by Summit Motors earlier today. I’ve already wiped down the handles, completed the mechanical zero-point check, and finished the thermal soak test—those results look steady. However, I just got pulled into a customer video call, so could you finish the exact step where the drivers sit twenty minutes at room temperature? Thanks—the automated digital logger is ready on Bench Two.',
      doc('list', 'Torque Driver Recertification Steps', [['Bench', 'Metrology 2'], ['Standard', 'ISO-6789']], [
        lst([
          'Step 1: Clean exterior housing and verify battery contact resistance',
          'Step 2: Perform mechanical zero-point baseline alignment check',
          'Step 3: Execute three-cycle thermal chamber soak at 40°C',
          'Step 4: Rest tool 20 minutes at ambient room temp before digital load logging',
          'Step 5: Print tamper-evident sticker and update master compliance sheet',
        ]),
      ]), [
        ['Part 4 · Detail', 'Why did Maya have to step away from the calibration bench?', [
          'She was called into a video meeting with a client',
          'She needed extra batteries from the supply warehouse',
          'The digital load logger on Bench Two malfunctioned',
          'Summit Motors asked to pause testing on twenty tools',
        ], 0, 'ตอบ She was called into a video meeting with a client (Maya ถูกเรียกเข้าประชุมวิดีโอกับลูกค้ากะทันหัน)'],
        ['Part 4 · Graphic', 'Look at the graphic. Which step does Maya ask Leo to complete?', [
          'Step 4',
          'Step 2',
          'Step 3',
          'Step 5',
        ], 0, 'ตอบ Step 4 (Maya ทำขั้นที่ 1–3 เสร็จแล้ว และขอให้ Leo ทำขั้นที่ต้องวางเครื่องมือพักไว้ 20 นาทีในอุณหภูมิห้องก่อนบันทึกโหลดซึ่งคือ Step 4)'],
        ['Part 4 · Detail', 'Where did Maya leave the digital logging equipment ready for Leo?', [
          'On Bench Two',
          'Inside Summit Motors’ shipping crate',
          'Next to the thermal test chamber',
          'At the front metrology desk',
        ], 0, 'ตอบ On Bench Two (เธอแจ้งว่าเตรียมเครื่องบันทึกดิจิทัลไว้พร้อมแล้วที่ Bench Two)'],
      ]),

    p4(28, 'l28-p4-10', 'the following vendor comparison chart and meeting excerpt', 'us_f',
      'Let’s pick our external calibration contractor for next month’s plant-wide check of twenty-four precision pressure gauges. Remember two strict operational constraints: first, we cannot ship delicate gauges off-site because transit shocks ruin diaphragm sensors, so the vendor must calibrate inside our plant. Second, our manufacturing floor cannot spare those gauges for longer than forty-eight hours. Comparing the four quotes we gathered, only one contractor meets both constraints at once—let’s sign their service agreement today.',
      doc('table', 'External Calibration Vendor Quotes (24 Pressure Gauges)', [['Requirement', 'On-Site Only'], ['Max Window', '2 Days']], [
        tbl(['Vendor Name', 'Turnaround Time', 'Service Location', 'Fee per Gauge'], [
          ['CalibraTech', '3 Days', 'On-Site Mobile Lab', '$45'],
          ['ExactLab Inc.', '2 Days', 'Ship to Vendor Lab', '$38'],
          ['PrecisionOne', '2 Days', 'On-Site Mobile Lab', '$52'],
          ['MetroServe', '5 Days', 'On-Site Mobile Lab', '$40'],
        ]),
      ]), [
        ['Part 4 · Reason', 'Why does the plant refuse to mail its pressure gauges to a vendor facility?', [
          'Bumps during shipping can damage sensitive internal diaphragms',
          'Shipping insurance on twenty-four gauges costs too much',
          'Vendor laboratories take over five days to clear customs',
          'Plant managers prefer watching calibrations via webcam',
        ], 0, 'ตอบ Bumps during shipping can damage sensitive internal diaphragms (แรงกระแทกระหว่างขนส่งทำให้แผ่นไดอะแฟรมเซ็นเซอร์ที่บอบบางเสียหายได้)'],
        ['Part 4 · Graphic', 'Look at the graphic. Which vendor will the company hire?', [
          'PrecisionOne',
          'CalibraTech',
          'ExactLab Inc.',
          'MetroServe',
        ], 0, 'ตอบ PrecisionOne (เงื่อนไขต้องเป็น On-Site Mobile Lab และใช้เวลาไม่เกิน 2 วัน หรือ 48 ชั่วโมง ซึ่งมีเพียง PrecisionOne เท่านั้นที่ตรงทั้งสองข้อ)'],
        ['Part 4 · Detail', 'How many pressure gauges require calibration next month?', [
          'Twenty-four',
          'Forty-eight',
          'Forty-five',
          'Fifty-two',
        ], 0, 'ตอบ Twenty-four (ทั้งในสคริปต์และหัวตารางระบุจำนวน 24 ชิ้น)'],
      ]),

    // ==================== SET 29 ====================
    // Themes: City Botanical Gardens Pavilion, Community Library Maker-Lab, Historic Train Depot Preservation
    p1(29, 'l29-p1-1', 'us_f', [
      'Gardeners are digging up flower beds beside a stone path.',
      'Wooden benches have been stacked inside a greenhouse doorway.',
      'Sunlight streams through a curved glass roof over tropical plants.',
      'A fountain is being drained near a brick courtyard.',
    ], 2, 'ตอบ Sunlight streams through a curved glass roof over tropical plants. (แสงแดดส่องผ่านหลังคากระจกโค้งลงมายังหมู่ไม้เมืองร้อนด้านล่าง)'),
    p1(29, 'l29-p1-2', 'uk_m', [
      'Librarians are shelving hardcover novels along high aisles.',
      'A patron is adjusting settings on a desktop three-dimensional printer.',
      'Sewing machines have been covered with heavy vinyl sheets.',
      'Two students are painting murals on an outdoor concrete wall.',
    ], 1, 'ตอบ A patron is adjusting settings on a desktop three-dimensional printer. (ผู้ใช้บริการกำลังปรับตั้งค่าบนเครื่องพิมพ์สามมิติแบบตั้งโต๊ะ)'),
    p1(29, 'l29-p1-3', 'au_f', [
      'A carpenter is sanding an arched wooden window frame on sawhorses.',
      'Passengers are buying commuter tickets at an antique brass window.',
      'Roofing tiles are falling off a historic brick clock tower.',
      'Heavy steel rails are being welded beside a grassy embankment.',
    ], 0, 'ตอบ A carpenter is sanding an arched wooden window frame on sawhorses. (ช่างไม้กำลังขัดกรอบหน้าต่างไม้ทรงโค้งที่วางพาดอยู่บนม้าเลื่อย)'),
    p1(29, 'l29-p1-4', 'ca_m', [
      'Visitors are picnicking on blankets across a rose lawn.',
      'Wheelbarrows have been overturned beside a tool shed.',
      'A tour guide is unlocking wrought-iron pavilion gates.',
      'A worker is watering potted ferns arranged along a stone railing.',
    ], 3, 'ตอบ A worker is watering potted ferns arranged along a stone railing. (คนงานกำลังรดน้ำกระถางเฟิร์นที่ตั้งเรียงตามแนวราวระเบียงหิน)'),
    p1(29, 'l29-p1-5', 'uk_f2', [
      'Empty cardboard boxes block a narrow library hallway.',
      'A technician is repairing ceiling projectors from a scaffolding.',
      'Hand tools and spools of filament are organized along a pegboard.',
      'Computers have been turned off around a circular study table.',
    ], 2, 'ตอบ Hand tools and spools of filament are organized along a pegboard. (เครื่องมือช่างและม้วนเส้นพลาสติก 3 มิติถูกจัดแขวนเป็นระเบียบบนแผงรู)'),
    p1(29, 'l29-p1-6', 'us_m2', [
      'Restored oak benches line the center of a vaulted station hall.',
      'Scaffolding completely covers a marble ticket counter.',
      'Volunteers are scrubbing graffiti off an exterior brick wall.',
      'Suitcases are lined up beneath an old station clock.',
    ], 0, 'ตอบ Restored oak benches line the center of a vaulted station hall. (ม้านั่งไม้โอ๊คที่บูรณะแล้ววางเรียงตรงกลางโถงสถานีเพดานโค้ง)'),

    // Set 29 Part 2 (25 Qs)
    p2(29, 'l29-p2-1', 'us_m', 'uk_f', 'Where should visitors check in for the afternoon orchid greenhouse tour?', [
      'By the bronze fountain inside the East Pavilion.',
      'Every Tuesday and Thursday afternoon.',
      'Yes, misting keeps the roots healthy.',
    ], 0, 'ตอบ By the bronze fountain inside the East Pavilion. (ถามสถานที่เช็กอิน Where ตอบตรงน้ำพุทองสัมฤทธิ์ในศาลาฝั่งตะวันออก)'),
    p2(29, 'l29-p2-2', 'ca_f', 'us_m2', 'Who certified the community library’s new laser engraver for public use?', [
      'Behind the digital media desk.',
      'Fire safety inspector Morales signed off Tuesday.',
      'Only birch plywood and thick acrylic.',
    ], 1, 'ตอบ Fire safety inspector Morales signed off Tuesday. (ถามบุคคล Who ตอบผู้ตรวจความปลอดภัยอัคคีภัย Morales เซ็นรับรองเมื่อวันอังคาร)'),
    p2(29, 'l29-p2-3', 'uk_m', 'au_f', 'Why are preservation masons repointing the depot’s west brick arch with lime mortar?', [
      'Along the original nineteen-ten foundation.',
      'Using curved wooden arch forms.',
      'Modern cement traps moisture inside historic bricks.',
    ], 2, 'ตอบ Modern cement traps moisture inside historic bricks. (ถามเหตุผล Why ตอบเพราะปูนซีเมนต์สมัยใหม่จะกักเก็บความชื้นไว้ในอิฐเก่า)'),
    p2(29, 'l29-p2-4', 'au_m', 'us_f', 'When does the botanical conservatory mist its rare alpine fern display?', [
      'Every morning at eight and again at two.',
      'Inside the cool mountain flora wing.',
      'Roughly thirty native fern species.',
    ], 0, 'ตอบ Every morning at eight and again at two. (ถามเวลา When ตอบทุกเช้าแปดโมงและอีกครั้งตอนบ่ายสอง)'),
    p2(29, 'l29-p2-5', 'us_f2', 'ca_m', 'Would you prefer attending the soldering workshop Tuesday evening or Saturday morning?', [
      'Yes, basic electronics kits are included.',
      'Saturday morning fits my family schedule better.',
      'In Maker-Lab Room B.',
    ], 1, 'ตอบ Saturday morning fits my family schedule better. (ถามทางเลือกเวลา A or B ตอบเลือกเช้าวันเสาร์เพราะลงตัวกับตารางครอบครัว)'),
    p2(29, 'l29-p2-6', 'uk_f', 'us_m', 'Has the city heritage board approved replacing the depot’s slate roof tiles?', [
      'Above the former baggage platform.',
      'Nearly a century of winter hail.',
      'Yes, matching Welsh slate arrives next month.',
    ], 2, 'ตอบ Yes, matching Welsh slate arrives next month. (ถามการอนุมัติ Has... ตอบรับว่าอนุมัติแล้วและกระเบื้องหินชนวนแบบเดิมจะมาถึงเดือนหน้า)'),
    p2(29, 'l29-p2-7', 'ca_m', 'uk_f2', 'How long does a thirty-minute maker-lab laser slot allow for setup?', [
      'Setup counts inside the slot, so arrive five minutes early.',
      'Up to four sheets per library patron.',
      'Mostly vector SVG drawings.',
    ], 0, 'ตอบ Setup counts inside the slot, so arrive five minutes early. (ถามเรื่องเวลาเตรียมเครื่อง ตอบเวลาตั้งค่ารวมอยู่ในรอบ 30 นาทีแล้ว ควรมาล่วงหน้า 5 นาที)'),
    p2(29, 'l29-p2-8', 'us_m2', 'au_f', 'Isn’t the butterfly conservatory staying open until eight tonight?', [
      'Nearly two hundred tropical moths.',
      'Only on Fridays during July and August.',
      'Right past the cactus walkway.',
    ], 1, 'ตอบ Only on Fridays during July and August. (คำถามปฏิเสธ Isn’t... ตอบชี้แจงว่าเปิดถึงสองทุ่มเฉพาะวันศุกร์ช่วงเดือนกรกฎาคมและสิงหาคม)'),
    p2(29, 'l29-p2-9', 'au_f', 'uk_m', 'Which local arborist evaluated the century-old oak beside the train depot?', [
      'Just south of the granite platform.',
      'Because deep roots lifted the curb.',
      'Ms. Alvarez submitted her root report yesterday.',
    ], 2, 'ตอบ Ms. Alvarez submitted her root report yesterday. (ถามเลือกบุคคล Which arborist ตอบคุณ Alvarez ส่งรายงานตรวจรากไม้เมื่อวาน)'),
    p2(29, 'l29-p2-10', 'uk_f2', 'us_f', 'The maker-lab’s vinyl cutter keeps snagging glossy sticker sheets.', [
      'Switch to the sixty-degree blade inside Drawer Two.',
      'No, library cards stay free for residents.',
      'Around fifty custom club decals.',
    ], 0, 'ตอบ Switch to the sixty-degree blade inside Drawer Two. (ประโยคบอกเล่าแจ้งปัญหาเครื่องตัดสติกเกอร์ แนะนำให้เปลี่ยนใบมีด 60 องศาในลิ้นชัก 2)'),
    p2(29, 'l29-p2-11', 'us_m', 'ca_f', 'How many volunteers signed up to catalog salvaged depot brass hardware?', [
      'In wooden trays along the attic table.',
      'Nine retired machinists and three history students.',
      'Every piece was stamped in nineteen-twelve.',
    ], 1, 'ตอบ Nine retired machinists and three history students. (ถามจำนวน How many ตอบมีอาสาสมัครช่างกลึงเกษียณ 9 คนและนักศึกษาประวัติศาสตร์ 3 คน)'),
    p2(29, 'l29-p2-12', 'ca_f', 'uk_m', 'Could you check whether the botanical pavilion humidifier tank needs refilling?', [
      'Usually sixty-five percent relative humidity.',
      'Behind the palm nursery shed.',
      'I topped it off right before unlocking the glasshouse.',
    ], 2, 'ตอบ I topped it off right before unlocking the glasshouse. (ขอให้ช่วยตรวจแท็งก์ความชื้น ตอบว่าเติมเต็มเรียบร้อยแล้วก่อนเปิดประตูกระจก)'),
    p2(29, 'l29-p2-13', 'uk_m', 'us_f2', 'Why don’t we host a weekend repair café inside the library maker-lab?', [
      'Neighborhood residents have been requesting one for months.',
      'Yes, my toaster cord needs replacing.',
      'Between one and four on weekdays.',
    ], 0, 'ตอบ Neighborhood residents have been requesting one for months. (ข้อเสนอแนะ Why don’t we ตอบเห็นด้วยเพราะชาวบ้านเรียกร้องมานานหลายเดือนแล้ว)'),
    p2(29, 'l29-p2-14', 'au_m', 'ca_f', 'Did the custom stained-glass transom window arrive safely from the restoration studio?', [
      'Deep cobalt and amber panes.',
      'Crating crews set it carefully inside Gallery Two.',
      'Over four months of hand leading.',
    ], 1, 'ตอบ Crating crews set it carefully inside Gallery Two. (ถามว่าส่งถึงอย่างปลอดภัยไหม ตอบแจ้งว่าทีมงานยกเข้าไปวางอย่างระมัดระวังใน Gallery Two แล้ว)'),
    p2(29, 'l29-p2-15', 'us_f', 'uk_f2', 'How much is the material deposit for borrowing a maker-lab robotics kit?', [
      'Four ultrasonic sensors per kit.',
      'From the teen media checkout desk.',
      'Nothing—just scan a valid city library card.',
    ], 2, 'ตอบ Nothing—just scan a valid city library card. (ถามค่ามัดจำ How much ตอบไม่มีค่าใช้จ่าย แค่สแกนบัตรห้องสมุดที่ยังไม่หมดอายุ)'),
    p2(29, 'l29-p2-16', 'ca_m', 'au_m', 'Where are extra potting soil bags stored away from rainy weather?', [
      'Stacked behind the cedar potting shed.',
      'Rich compost mixed with perlite.',
      'For transplanting seasonal bulbs.',
    ], 0, 'ตอบ Stacked behind the cedar potting shed. (ถามสถานที่เก็บ Where ตอบวางซ้อนอยู่ด้านหลังโรงเรือนเพาะชำไม้ซีดาร์)'),
    p2(29, 'l29-p2-17', 'uk_f', 'us_m2', 'You submitted the historic preservation grant paperwork before noon, didn’t you?', [
      'Toward restoring the copper cupola.',
      'Yes, and the confirmation receipt is already in my inbox.',
      'At the municipal archives office.',
    ], 1, 'ตอบ Yes, and the confirmation receipt is already in my inbox. (คำถามย้ำ didn’t you ตอบรับว่าส่งแล้วและได้รับใบยืนยันในอีเมลเรียบร้อย)'),
    p2(29, 'l29-p2-18', 'us_m2', 'ca_f', 'What time does the volunteer plant-watering shift finish on Sundays?', [
      'Inside the succulent propagation house.',
      'Around twelve volunteers per morning.',
      'Usually by eleven, before midday visitors arrive.',
    ], 2, 'ตอบ Usually by eleven, before midday visitors arrive. (ถามเวลา What time ตอบปกติเสร็จตอนสิบเอ็ดโมงก่อนผู้เข้าชมช่วงเที่ยง)'),
    p2(29, 'l29-p2-19', 'au_f', 'us_f', 'Can the maker-lab’s large sewing machine stitch heavy canvas tote bags?', [
      'Yes, just load the denim needle first.',
      'Dark olive and natural cotton.',
      'Every Wednesday afternoon at three.',
    ], 0, 'ตอบ Yes, just load the denim needle first. (ถามความสามารถเครื่องเย็บผ้า ตอบเย็บได้แค่เปลี่ยนเป็นเข็มเย็บผ้ายีนส์ก่อน)'),
    p2(29, 'l29-p2-20', 'uk_m', 'ca_m', 'Who painted the botanical illustration plaques along the desert wing?', [
      'Showing cactus blossoms in spring.',
      'A retired science illustrator from Ridgefield.',
      'Mounted onto weatherproof enamel tiles.',
    ], 1, 'ตอบ A retired science illustrator from Ridgefield. (ถามบุคคล Who ตอบนักวาดภาพวิทยาศาสตร์เกษียณจากเมือง Ridgefield)'),
    p2(29, 'l29-p2-21', 'us_f2', 'au_m', 'Should we seal the restored depot floorboards with satin wax or oil finish?', [
      'Original heart-pine planks from nineteen-ten.',
      'After sanding down the paint residue.',
      'Matte tung oil preserves the original grain best.',
    ], 2, 'ตอบ Matte tung oil preserves the original grain best. (ถามทางเลือก A or B ตอบเลือกน้ำมันเคลือบด้านเพื่อรักษาเนื้อไม้เดิม)'),
    p2(29, 'l29-p2-22', 'ca_f', 'uk_f', 'How often are air filters changed on the library’s woodshop dust extractor?', [
      'After every twenty hours of milling time.',
      'Outside beside the loading ramp.',
      'Because fine cedar dust clogs motors.',
    ], 0, 'ตอบ After every twenty hours of milling time. (ถามความถี่ How often ตอบเปลี่ยนทุกๆ 20 ชั่วโมงการใช้งานเครื่อง)'),
    p2(29, 'l29-p2-23', 'us_m', 'au_f', 'I heard the restored depot clock tower chimed for the first time since nineteen-sixty.', [
      'Four cast-iron dials facing Main Street.',
      'Everyone on Main Street stopped to applaud.',
      'No, the brass pendulum stayed intact.',
    ], 1, 'ตอบ Everyone on Main Street stopped to applaud. (ประโยคบอกเล่าเรื่องหอนาฬิกากลับมาตีระฆังอีกครั้ง ตอบรับสอดคล้องว่าทุกคนบนถนนต่างหยุดปรบมือ)'),
    p2(29, 'l29-p2-24', 'uk_f2', 'us_m2', 'Hasn’t the tropical conservatory’s shade cloth motor been repaired yet?', [
      'Yes, palm fronds need filtered sun.',
      'Above the central glass dome.',
      'Electricians are testing a new relay switch this afternoon.',
    ], 2, 'ตอบ Electricians are testing a new relay switch this afternoon. (คำถามปฏิเสธ Hasn’t... ตอบความคืบหน้าว่าช่างไฟกำลังทดสอบสวิตช์รีเลย์ตัวใหม่บ่ายนี้)'),
    p2(29, 'l29-p2-25', 'au_m', 'uk_m', 'Which community group booked the botanical courtyard for Sunday’s sketch meetup?', [
      'The Riverside Urban Sketchers—around twenty-five people.',
      'Bring waterproof ink and folding stools.',
      'Under the pergola near the koi pond.',
    ], 0, 'ตอบ The Riverside Urban Sketchers—around twenty-five people. (ถามเลือกกลุ่ม Which group ตอบชมรมวาดภาพ Riverside Urban Sketchers)'),

    // Set 29 Part 3 (13 Conversations × 3 Qs = 39 Qs; Convs 11-13 with Graphics)
    p3(29, 'l29-p3-1', [
      ['Woman', 'uk_f', 'Sam, water pressure along the Cloud Forest bromeliad beds dropped to zero—there’s a damp puddle pooling under Valve Four behind the rockery.'],
      ['Man', 'us_m', 'Did the brass pressure regulator crack from last week’s cold snap, or did a tree root pinch the PVC feeder?'],
      ['Woman', 'uk_f', 'A split rubber gasket blew right out of the regulator collar. Good thing those rare bromeliads still have misting coverage from the upper dome sprayers.'],
      ['Man', 'us_m', 'Whew, thank goodness. I’ll shut the main zone bypass now and replace that gasket from our greenhouse repair kit in twenty minutes.'],
    ], null, [
      ['Part 3 · Problem', 'What issue did the woman discover in the Cloud Forest area?', [
        'An irrigation leak stopped water flow to the bromeliad beds',
        'Upper dome misting nozzles clogged with mineral deposits',
        'Cold night air damaged tropical tree roots near Valve Four',
        'Rockery stones shifted onto the main PVC supply line',
      ], 0, 'ตอบ An irrigation leak stopped water flow to the bromeliad beds (ปะเก็นยางตรงวาล์ว 4 แตกทำให้น้ำรั่วและแรงดันน้ำที่แปลงสับปะรดสีตกเหลือศูนย์)'],
      ['Part 3 · Detail', 'Why are the rare bromeliads not in immediate danger of drying out?', [
        'Overhead sprayers from the upper dome still mist them',
        'Rainwater runoff naturally pools around the rockery',
        'Gardeners watered those beds by hand an hour ago',
        'Soil sensors automatically triggered backup tanks',
      ], 0, 'ตอบ Overhead sprayers from the upper dome still mist them (ยังมีละอองน้ำจากหัวฉีดด้านบนโดมช่วยหล่อเลี้ยงความชื้นอยู่)'],
      ['Part 3 · Action', 'What will the man do to restore the bromeliad irrigation line?', [
        'Close the bypass line and install a replacement gasket',
        'Order a new brass pressure regulator from hardware supply',
        'Drain water puddles around the rockery stones',
        'Move potted bromeliads to an adjacent greenhouse',
      ], 0, 'ตอบ Close the bypass line and install a replacement gasket (ปิดวาล์วบายพาสหลักและเปลี่ยนปะเก็นใหม่จากชุดซ่อมเรือนกระจกภายใน 20 นาที)'],
    ]),

    p3(29, 'l29-p3-2', [
      ['Man', 'ca_m', 'Elena, Maker-Lab Printer Two stopped extruding filament halfway through printing the bridges for tomorrow’s middle school robotics camp.'],
      ['Woman', 'au_f', 'Ugh, did someone load wet nylon spooling again without drying it in the dehumidifier box?'],
      ['Man', 'ca_m', 'Worse—an old piece of glow-in-the-dark glitter PLA snapped right inside the brass nozzle throat.'],
      ['Woman', 'au_f', 'Let’s swap in our spare zero-point-four-millimeter nozzle assembly from Tool Tray One and shift the remaining prints onto Printer Four overnight.'],
    ], null, [
      ['Part 3 · Problem', 'Why did Maker-Lab Printer Two stop working?', [
        'A fragment of specialty plastic filament clogged inside the nozzle',
        'Damp nylon spooling warped the heated build plate',
        'The dehumidifier box overheated near the worktable',
        'Robotics camp files contained corrupted print coordinates',
      ], 0, 'ตอบ A fragment of specialty plastic filament clogged inside the nozzle (เส้นพลาสติกผสมกากเพชรเรืองแสงหักคาคอหัวฉีดทองเหลือง)'],
      ['Part 3 · Detail', 'What event are the printed bridge parts needed for?', [
        'A middle school robotics workshop tomorrow',
        'A weekend library exhibition on bridge engineering',
        'An adult repair café hosted on Friday night',
        'Testing spare filament brands for the supply budget',
      ], 0, 'ตอบ A middle school robotics workshop tomorrow (ใช้สำหรับค่ายหุ่นยนต์นักเรียนมัธยมต้นในวันพรุ่งนี้)'],
      ['Part 3 · Action', 'How will the speakers finish printing the remaining parts on time?', [
        'By swapping the nozzle and splitting jobs onto Printer Four overnight',
        'By borrowing desktop printers from the main library branch',
        'By soaking the clogged brass nozzle in cleaning solvent first',
        'By having students glue broken bridge pieces by hand',
      ], 0, 'ตอบ By swapping the nozzle and splitting jobs onto Printer Four overnight (เปลี่ยนชุดหัวฉีดสำรองและย้ายไฟล์ที่เหลือไปพิมพ์ต่อบนเครื่องที่ 4 ตลอดคืน)'],
    ]),

    p3(29, 'l29-p3-3', [
      ['Woman1', 'us_f2', 'Look at these original nineteen-twelve brass ticket grilles we pulled from the depot basement—two vertical bars snapped off Window Three.'],
      ['Man', 'uk_m', 'Matching solid brass rod from a modern hardware store won’t look right unless we tone down the bright polish first.'],
      ['Woman2', 'ca_f', 'Actually, my locksmith cousin runs a heritage foundry downtown—he can braze matching aged brass bars and match the dark patina seamlessly.'],
      ['Woman1', 'us_f2', 'Wait—won’t custom foundry work blow past our modest hardware restoration budget?'],
      ['Woman2', 'ca_f', 'Not at all; he offered a fifty percent civic discount for historic town landmarks if we deliver the frame by Thursday.'],
    ], null, [
      ['Part 3 · Problem', 'What issue did the team find on the salvaged depot ticket grilles?', [
        'Two vertical brass bars broke off Window Three’s grille',
        'Modern hardware polish ruined the antique brass finish',
        'Basement dampness rusted the cast-iron ticket counter',
        'Locksmith keys no longer turn inside Window Three latches',
      ], 0, 'ตอบ Two vertical brass bars broke off Window Three’s grille (ซี่ลูกกรงทองเหลืองแนวตั้งสองซี่หักหายไปจากช่องขายตั๋วที่ 3)'],
      ['Part 3 · Meaning', 'What does the first woman mean when she says, "won’t custom foundry work blow past our modest hardware restoration budget"?', [
        'She worries specialized metal repairs will be too expensive',
        'She thinks downtown foundries take too long for historic repairs',
        'She wants to replace all brass grilles with modern steel bars',
        'She doubts the preservation board allows external contractors',
      ], 0, 'ตอบ She worries specialized metal repairs will be too expensive (กังวลว่าค่าจ้างโรงหล่อทำพิเศษจะเกินงบประมาณซ่อมบำรุงวัสดุขนาดย่อมของโครงการ)'],
      ['Part 3 · Detail', 'Why is the foundry option affordable for the depot project?', [
        'The owner gives half-price discounts for local historic buildings',
        'Salvaged brass rods from Window One can be melted down free',
        'The city heritage board covered foundry invoices separately',
        'Thursday deliveries waive standard crating fees',
      ], 0, 'ตอบ The owner gives half-price discounts for local historic buildings (ช่างหล่อลดราคาให้ 50% สำหรับงานอนุรักษ์สถานที่สำคัญทางประวัติศาสตร์ของเมืองถ้าส่งกรอบภายในวันพฤหัสบดี)'],
    ]),

    p3(29, 'l29-p3-4', [
      ['Man', 'us_m2', 'Claire, two elementary busloads arrive at the Botanical Pavilion at nine-thirty Thursday, and both teachers booked guided tours through the Desert Dome.'],
      ['Woman', 'uk_f2', 'Wait—our Desert Dome path is barely four feet wide around the barrel cactus bed! Sixty students at once will bottleneck the walkway.'],
      ['Man', 'us_m2', 'Should I phone one school to push their arrival to eleven, or split the classes between the Tropical Dome and the Desert Dome?'],
      ['Woman', 'uk_f2', 'Splitting them works smoothly—have Class A explore the Tropical canopy first while Class B tours Desert, then swap groups at ten-fifteen.'],
    ], null, [
      ['Part 3 · Problem', 'Why is having sixty students inside the Desert Dome together impractical?', [
        'The narrow four-foot path cannot comfortably fit a crowd that size',
        'Only one botanical tour guide works Thursday mornings',
        'Barrel cactus beds are closed for soil repotting until ten',
        'School buses cannot park simultaneously outside the Desert entrance',
      ], 0, 'ตอบ The narrow four-foot path cannot comfortably fit a crowd that size (ทางเดินรอบแปลงกระบองเพชรกว้างแค่ 4 ฟุต ถ้านักเรียน 60 คนเข้าพร้อมกันจะติดขัด)'],
      ['Part 3 · Decision', 'How will the staff accommodate both visiting school groups at 9:30?', [
        'Route one group through the Tropical Dome while the other visits Desert, then switch',
        'Ask one elementary school bus to delay arrival until eleven o’clock',
        'Combine both classes for an outdoor courtyard sketch lesson first',
        'Move potted cacti out into the main pavilion rotunda',
      ], 0, 'ตอบ Route one group through the Tropical Dome while the other visits Desert, then switch (สลับแบ่งกลุ่ม A ชมโดมเขตร้อนและกลุ่ม B ชมโดมทะเลทราย แล้วสลับกันเวลา 10:15 น.)'],
      ['Part 3 · Detail', 'When will the two student groups switch garden domes?', [
        'At 10:15 A.M.',
        'At 9:30 A.M.',
        'At 11:00 A.M.',
        'Right after lunch',
      ], 0, 'ตอบ At 10:15 A.M. (สลับโซนชมกันในเวลา 10:15 น.)'],
    ]),

    p3(29, 'l29-p3-5', [
      ['Woman', 'au_f', 'Liam, Saturday’s open maker-lab drop-in had twice our normal attendance—we burned through every roll of matte gray PLA filament and cracked three pairs of safety goggles.'],
      ['Man', 'uk_m', 'Great turnout, though our supply drawer looks bare for Tuesday’s community workshop! Did our library account get approved with PrintSupply Direct yet?'],
      ['Woman', 'au_f', 'Yes, our tax-exempt municipal account went live Friday, and they ship within twenty-four hours for local library branches.'],
      ['Man', 'uk_m', 'Awesome—order ten spools of gray, five spools of natural wood-fill, plus a dozen wrap-around safety glasses right now so Tuesday runs without hiccups.'],
    ], null, [
      ['Part 3 · Reason', 'Why did the maker-lab run low on filament and safety goggles?', [
        'Saturday’s drop-in session drew double the usual number of visitors',
        'School robotics teams borrowed extra supplies for an off-site trip',
        'Previous filament spools arrived brittle from humid storage',
        'Supply deliveries from PrintSupply Direct were delayed last week',
      ], 0, 'ตอบ Saturday’s drop-in session drew double the usual number of visitors (วันเสาร์มีผู้เข้าใช้บริการมากกว่าปกติสองเท่า)'],
      ['Part 3 · Detail', 'What advantage does the library now have with PrintSupply Direct?', [
        'An active tax-exempt account with next-day local shipping',
        'Bulk fifty-percent discounts on wooden craft kits',
        'Free replacement safety goggles on municipal orders',
        'Priority technical repairs for broken 3D printers',
      ], 0, 'ตอบ An active tax-exempt account with next-day local shipping (เปิดบัญชีองค์กรยกเว้นภาษีเรียบร้อยแล้วและส่งถึงภายใน 24 ชั่วโมง)'],
      ['Part 3 · Action', 'What will the woman order for Tuesday’s community workshop?', [
        'Fifteen filament spools across two styles and twelve safety glasses',
        'Ten pairs of goggles and five printers from PrintSupply Direct',
        'Emergency repair tools for Saturday’s cracked equipment',
        'Only matte gray PLA rolls until budget review finishes',
      ], 0, 'ตอบ Fifteen filament spools across two styles and twelve safety glasses (สั่งเส้นสีเทาด้าน 10 ม้วน สีไม้ 5 ม้วน รวม 15 ม้วน และแว่นตานิรภัย 12 อัน)'],
    ]),

    p3(29, 'l29-p3-6', [
      ['Man', 'us_m', 'Nina, while stripping plaster off the old stationmaster’s office wall, contractors uncovered a sealed copper tube holding original nineteen-twelve depot blueprints!'],
      ['Woman', 'us_f', 'No way! Are the linen drawings brittle or still readable?'],
      ['Man', 'us_m', 'Surprisingly crisp—we can clearly see the original timber truss joinery and cast-iron lamp brackets that vanished during the nineteen-fifty remodel.'],
      ['Woman', 'us_f', 'Hold off unrolling them further on site! Let’s bring our municipal archivist down with a flatbed scanner so we capture high-resolution copies without tearing the ink.'],
    ], null, [
      ['Part 3 · Topic', 'What unexpected discovery did construction workers make?', [
        'Original architectural drawings sealed inside a metal tube in a wall',
        'Hidden nineteen-fifty train schedules behind brass ticket windows',
        'Damaged timber trusses inside the stationmaster’s office ceiling',
        'Cast-iron lamp brackets buried beneath the depot porch',
      ], 0, 'ตอบ Original architectural drawings sealed inside a metal tube in a wall (พบกระบอกทองแดงปิดผนึกบรรจุแบบแปลนสถานีรถไฟปี 1912 อยู่หลังปูนผนัง)'],
      ['Part 3 · Detail', 'What details appear clearly on the recovered drawings?', [
        'Early roof truss carpentry and missing lamp fixture designs',
        'Modern electrical wiring paths added during nineteen-fifty',
        'Handwritten budgets from the original station builder',
        'Color paint swatches for the main waiting hall benches',
      ], 0, 'ตอบ Early roof truss carpentry and missing lamp fixture designs (เห็นรายละเอียดรอยต่อโครงหลังคาไม้และขายึดโคมไฟเหล็กหล่อเดิมที่หายไปตอนรีโนเวตปี 1950)'],
      ['Part 3 · Proposal', 'What does the woman advise doing with the blueprints next?', [
        'Having a city archivist scan them safely before handling them further',
        'Mounting the original linen sheets inside the waiting room frame',
        'Handing the drawings directly to roofing carpenters',
        'Unrolling them on the drafting table to trace truss angles',
      ], 0, 'ตอบ Having a city archivist scan them safely before handling them further (งดคลี่บนหน้างานแล้วเรียกนักจดหมายเหตุมาสแกนความละเอียดสูงอย่างปลอดภัยก่อน)'],
    ]),

    p3(29, 'l29-p3-7', [
      ['Man1', 'ca_m', 'Team, next Saturday’s Native Pollinator Plant Sale opens at eight inside the pavilion courtyard, and forecast models show crisp mornings near four degrees Celsius.'],
      ['Woman', 'uk_f', 'Four degrees is chilly for tender prairie seedlings that just came out of our heated propagation bench!'],
      ['Man2', 'au_m', 'Should we shift all sixty seedling racks indoors inside the glass Rotunda instead of setting tables outdoors along the courtyard?'],
      ['Man1', 'ca_m', 'The Rotunda gets crowded fast with strollers. What if we keep hardy shrubs outside by the stone path and tuck only cold-sensitive trays inside the South Atrium?'],
      ['Woman', 'uk_f', 'Smart split—that keeps outdoor foot traffic flowing while protecting every delicate wildflower flat from frost damage.'],
    ], null, [
      ['Part 3 · Problem', 'Why are the staff concerned about next Saturday’s outdoor plant sale?', [
        'Early morning temperatures could harm young greenhouse seedlings',
        'Heavy weekend crowds may damage stone courtyard paths',
        'Rain forecasts threaten sales brochures inside the Rotunda',
        'Propagated shrubs have not rooted fully for customer pickup',
      ], 0, 'ตอบ Early morning temperatures could harm young greenhouse seedlings (พยากรณ์อากาศเช้าวันเสาร์หนาวราว 4 องศาเซลเซียส ซึ่งเย็นเกินไปสำหรับต้นกล้าอ่อน)'],
      ['Part 3 · Detail', 'Why does the first man hesitate to place the entire sale inside the glass Rotunda?', [
        'Limited indoor space creates congestion for visitors with strollers',
        'Glass Rotunda doors remain locked until ten o’clock',
        'Moisture from watering tables slips on marble Rotunda floors',
        'Parking shuttles drop guests right by the courtyard gate',
      ], 0, 'ตอบ Limited indoor space creates congestion for visitors with strollers (ห้องโถง Rotunda แคบและแออัดเร็วเมื่อมีผู้ปกครองเข็นรถเข็นเด็ก)'],
      ['Part 3 · Decision', 'What plant display arrangement do the speakers agree on?', [
        'Display tough shrubs outdoors and shelter delicate trays in the South Atrium',
        'Postpone the native plant sale until warmer weather arrives',
        'Cover outdoor courtyard tables with plastic frost domes',
        'Sell cold-sensitive wildflowers strictly by online pre-order',
      ], 0, 'ตอบ Display tough shrubs outdoors and shelter delicate trays in the South Atrium (วางไม้พุ่มทนหนาวด้านนอก ส่วนถาดกล้าที่บอบบางนำเข้าหลบในโถง South Atrium)'],
    ]),

    p3(29, 'l29-p3-8', [
      ['Woman', 'us_f2', 'David, a first-time visitor almost ran acrylic with adhesive vinyl backing through our CO2 laser cutter this morning—that releases corrosive fumes inside the lens bay.'],
      ['Man', 'us_m', 'Whoa, thank goodness an attendant spotted the sheet before pressing start! Did that visitor watch our online safety video?'],
      ['Woman', 'us_f2', 'He claimed he skimmed it months ago, yet clearly forgot our banned-materials chart. Relying on honor-system video checks isn’t cutting it anymore.'],
      ['Man', 'us_m', 'Agreed. Starting next Monday, let’s program library badges so the laser power relay unlocks only after a patron completes an in-person fifteen-minute certification check.'],
    ], null, [
      ['Part 3 · Problem', 'What dangerous mistake nearly happened in the maker-lab?', [
        'A patron attempted to laser-cut vinyl-backed material that emits harmful fumes',
        'A visitor forgot to wear safety goggles while operating a soldering iron',
        'An attendant accidentally cut through the laser machine’s optical power cord',
        'Acrylic sheets caught fire because the exhaust fan was turned off',
      ], 0, 'ตอบ A patron attempted to laser-cut vinyl-backed material that emits harmful fumes (ผู้มาใช้บริการเกือบนำแผ่นอะคริลิกติดสติกเกอร์ไวนิลเข้าเครื่องตัดเลเซอร์ ซึ่งจะปล่อยไอระเหยกัดกร่อน)'],
      ['Part 3 · Cause', 'Why does the woman believe the current safety procedure failed?', [
        'Online videos without hands-on verification do not ensure visitors remember rules',
        'The banned-materials poster fell off the laser room door',
        'Attendants were busy helping other patrons on 3D printers',
        'Library staff forgot to inspect vinyl sheets at the reception desk',
      ], 0, 'ตอบ Online videos without hands-on verification do not ensure visitors remember rules (ระบบดูวิดีโอออนไลน์แบบเชื่อใจกันเองไม่พอเพราะผู้ใช้อ้างว่าดูผ่านๆ แล้วลืม)'],
      ['Part 3 · Decision', 'What new policy takes effect next Monday?', [
        'Users must pass a brief in-person safety check to unlock laser badge access',
        'All acrylic cutting requests must be submitted to staff twenty-four hours ahead',
        'Patrons may purchase materials exclusively from the library supply desk',
        'Laser cutter hours will be restricted to supervised weekend sessions',
      ], 0, 'ตอบ Users must pass a brief in-person safety check to unlock laser badge access (ตั้งแต่วันจันทร์หน้าบัตรจะปลดล็อกไฟเครื่องเลเซอร์ได้ต่อเมื่อผ่านการตรวจอบรมต่อหน้า 15 นาทีก่อน)'],
    ]),

    p3(29, 'l29-p3-9', [
      ['Man', 'uk_m', 'Rachel, laboratory swabs from the historic depot’s outdoor iron canopy brackets came back negative for lead—that’s a huge relief for our sandblasting budget.'],
      ['Woman', 'ca_f', 'Awesome news! Under those flaking black layers, did scraping reveal what color those brackets were originally painted back in nineteen-ten?'],
      ['Man', 'uk_m', 'Yes! Beneath four coats of modern gloss black sits a deep heritage forest green matching the window trim on the salvaged blueprints.'],
      ['Woman', 'ca_f', 'How cool! Let’s mix a sample quart of matte mineral green this week so the heritage board can approve the color match before painting begins.'],
    ], null, [
      ['Part 3 · Topic', 'What positive test result does the man share about the depot iron brackets?', [
        'The old paint layers contain no hazardous lead',
        'Iron brackets show zero structural rust underneath flaking coats',
        'Modern gloss paint peels away without sandblasting',
        'Original fasteners match standard nineteenth-century bolts',
      ], 0, 'ตอบ The old paint layers contain no hazardous lead (ผลตรวจจากห้องแล็บยืนยันว่าไม่มีสารตะกั่วปนเปื้อน ช่วยประหยัดงบพ่นทรายได้มาก)'],
      ['Part 3 · Detail', 'What original feature was discovered under the modern black paint?', [
        'Deep forest green paint matching historic window trim records',
        'Stamped brass foundry dates on every canopy bracket',
        'Hand-carved oak inserts inside the iron scrollwork',
        'Silver leaf trim hidden along the lower edges',
      ], 0, 'ตอบ Deep forest green paint matching historic window trim records (พบชั้นสีเดิมใต้สีดำสี่ชั้นเป็นสีเขียวเข้ม heritage forest green ตรงกับแบบแปลนเดิม)'],
      ['Part 3 · Action', 'What will the speakers do before painting all the canopy brackets?', [
        'Prepare a color sample for city heritage board approval',
        'Order four gallons of modern gloss black enamel',
        'Strip every window frame inside the waiting hall',
        'Submit lab swab invoices to the municipal finance office',
      ], 0, 'ตอบ Prepare a color sample for city heritage board approval (ผสมสีตัวอย่างหนึ่งควอร์ตสัปดาห์นี้ให้คณะกรรมการอนุรักษ์อนุมัติก่อนลงมือทาจริง)'],
    ]),

    p3(29, 'l29-p3-10', [
      ['Woman', 'au_f', 'Trevor, tonight’s sold-out acoustic string concert inside the Botanical Palm House requires eighty folding chairs, and we need clear emergency exit aisles.'],
      ['Man', 'us_m2', 'I already tagged the tall teak garden benches for temporary relocation behind the West Fern Wall so guests aren’t blocked near the glass doors.'],
      ['Woman', 'au_f', 'Smart move—and what about protecting the warm tile floor along the fountain pool from metal chair tips?'],
      ['Man', 'us_m2', 'Every folding chair in Storage Shed C got fitted with thick felt floor pads last month, plus stagehands are laying woven runner mats down the center aisle.'],
    ], null, [
      ['Part 3 · Topic', 'What event are the speakers preparing the Palm House for?', [
        'An evening acoustic concert with eighty seated guests',
        'A weekend botanical photography exhibition',
        'A morning volunteer bench-refinishing workshop',
        'An outdoor fern auction beside the West Wall',
      ], 0, 'ตอบ An evening acoustic concert with eighty seated guests (เตรียมสถานที่เรือนปาล์มสำหรับคอนเสิร์ตเครื่องสายอะคูสติกคืนนี้ที่มีผู้ชม 80 ที่นั่ง)'],
      ['Part 3 · Detail', 'Why were the heavy teak benches temporarily moved behind the West Fern Wall?', [
        'To keep emergency exit paths clear near the glass doors',
        'To create space for acoustic musicians near the fountain',
        'To protect wooden frames from evening greenhouse misting',
        'To prevent guests from blocking rare palm displays',
      ], 0, 'ตอบ To keep emergency exit paths clear near the glass doors (ย้ายม้านั่งไม้สักออกชั่วคราวเพื่อไม่ให้ขวางทางออกฉุกเฉินใกล้ประตูกระจก)'],
      ['Part 3 · Detail', 'How are tile floors being protected from scratches?', [
        'With felt-padded chair legs and woven aisle runner mats',
        'By setting folding chairs strictly on outdoor stone patios',
        'By placing rubber trays beneath the string quartet’s stools',
        'By locking Storage Shed C metal chairs away until winter',
      ], 0, 'ตอบ With felt-padded chair legs and woven aisle runner mats (ติดแผ่นสักหลาดที่ขาเก้าอี้ทุกตัวและปูพรมทอตรงทางเดินกลาง)'],
    ]),

    p3(29, 'l29-p3-11', [
      ['Man', 'uk_m', 'Priya, our automated botanical climate alert just beeped on my tablet—one wing inside the glass pavilion jumped over twenty-eight degrees while its humidity dipped under target.'],
      ['Woman', 'us_f', 'Over twenty-eight? Let’s glance at the live climate dashboard right now—if that’s our high-humidity orchid wing, petals will drop before afternoon tours begin!'],
      ['Man', 'uk_m', 'Look closely at the third row—actually the temperature spiked right in the tropical wing listed there, and the roof vent motor is stuck closed.'],
      ['Woman', 'us_f', 'I’ll grab the manual crank wrench from Maintenance Closet B right away and crack those roof louvers open before noon heat builds further.'],
    ], doc('table', 'Botanical Pavilion Live Climate Monitor', [['Time', '10:45 A.M.'], ['Control', 'Zone Sensors']], [
      tbl(['Pavilion Wing', 'Target Temp', 'Current Temp', 'Target Humidity', 'Current Humidity'], [
        ['Alpine Fern Wing', '16°C', '16.5°C', '75%', '74%'],
        ['Arid Cactus Dome', '30°C', '29.2°C', '25%', '24%'],
        ['Orchid Canopy Wing', '24°C', '28.9°C', '80%', '62%'],
        ['Coastal Palm House', '25°C', '25.4°C', '70%', '69%'],
      ]),
    ]), [
      ['Part 3 · Cause', 'What mechanical malfunction contributed to the climate alert?', [
        'A motorized roof ventilation louver got stuck shut',
        'Ceiling misting hoses disconnected in Maintenance Closet B',
        'Sunlight sensors turned on winter heating coils by mistake',
        'Tablet alert thresholds reset overnight during software updates',
      ], 0, 'ตอบ A motorized roof ventilation louver got stuck shut (มอเตอร์ช่องระบายอากาศบนหลังคาติดค้างไม่ยอมเปิด)'],
      ['Part 3 · Graphic', 'Look at the graphic. Which pavilion wing experienced the dangerous temperature spike and humidity drop?', [
        'Orchid Canopy Wing',
        'Alpine Fern Wing',
        'Arid Cactus Dome',
        'Coastal Palm House',
      ], 0, 'ตอบ Orchid Canopy Wing (ตารางแถวที่ 3 แสดงอุณหภูมิพุ่งเป็น 28.9°C เกิน 28°C และความชื้นตกลงเหลือ 62% จากเป้าหมาย 80%)'],
      ['Part 3 · Action', 'What will the woman do to cool the Orchid Canopy Wing?', [
        'Fetch a manual wrench to open the roof vents by hand',
        'Move potted orchids into the Coastal Palm House',
        'Restart the tablet climate dashboard from the control room',
        'Cancel afternoon botanical garden guided tours',
      ], 0, 'ตอบ Fetch a manual wrench to open the roof vents by hand (หยิบประแจหมุนมือจากห้องซ่อมบำรุง B ไปเปิดบานเกล็ดหลังคาทันที)'],
    ]),

    p3(29, 'l29-p3-12', [
      ['Woman', 'ca_f', 'Hi! My fourteen-year-old son passed the Level One orientation badge last week, and he wants to reserve Saturday morning time to cut birch plywood birdhouses on your workshop machines.'],
      ['Man', 'us_m2', 'Wait—let’s double-check our machine certification chart together. Does he plan to use the flatbed CO2 laser or the desktop CNC wood router?'],
      ['Woman', 'ca_f', 'Whichever one only requires his Level One badge and is currently marked available for Saturday bookings!'],
      ['Man', 'us_m2', 'Aha—look at that middle row: the other wood machine requires Level Two training or is offline for spindle maintenance, so this one is his exact match.'],
    ], doc('table', 'Community Maker-Lab Equipment Access', [['Branch', 'Central Library'], ['Booking', 'Saturday Slots']], [
      tbl(['Equipment', 'Approved Material', 'Badge Required', 'Saturday Status'], [
        ['CO2 Laser Cutter', 'Birch plywood, acrylic', 'Badge Level 2', 'Available'],
        ['Vinyl Craft Plotter', 'Adhesive vinyl, cardstock', 'Badge Level 1', 'Available'],
        ['Scroll Saw Station', 'Birch plywood, softwoods', 'Badge Level 1', 'Available'],
        ['Desktop CNC Router', 'Birch plywood, aluminum', 'Badge Level 2', 'Under Maintenance'],
      ]),
    ]), [
      ['Part 3 · Detail', 'What project does the woman’s son want to build on Saturday?', [
        'Wooden birdhouses cut from birch plywood',
        'Custom cardstock greeting cards',
        'Engraved acrylic library nameplates',
        'Aluminum garden sign brackets',
      ], 0, 'ตอบ Wooden birdhouses cut from birch plywood (ลูกชายต้องการตัดไม้อัดเบิร์ชทำบ้านนกในเช้าวันเสาร์)'],
      ['Part 3 · Graphic', 'Look at the graphic. Which machine matches the boy’s certification and project?', [
        'Scroll Saw Station',
        'CO2 Laser Cutter',
        'Vinyl Craft Plotter',
        'Desktop CNC Router',
      ], 0, 'ตอบ Scroll Saw Station (ต้องตัดไม้อัด birch plywood ใช้แค่ Badge Level 1 และพร้อมใช้งานวันเสาร์ ซึ่งตรงกับ Scroll Saw Station เท่านั้น)'],
      ['Part 3 · Detail', 'Why can patrons not reserve the Desktop CNC Router this Saturday?', [
        'It is undergoing maintenance repairs',
        'It only accepts aluminum stock instead of wood',
        'All Saturday time slots are already booked',
        'Patrons under age sixteen cannot operate routers',
      ], 0, 'ตอบ It is undergoing maintenance repairs (ตารางระบุสถานะ Under Maintenance)'],
    ]),

    p3(29, 'l29-p3-13', [
      ['Woman1', 'au_f', 'Before we wrap today’s historic train depot preservation board check-in, let’s confirm our contractor schedule for November.'],
      ['Man', 'uk_m', 'Right—our masonry contractor warned that lime mortar won’t cure reliably once overnight frost hits later this month, so outdoor brickwork has to wait until April.'],
      ['Woman2', 'us_f', 'Makes total sense. Meanwhile, which interior restoration phase carries the highest remaining grant allocation so crews can stay busy indoors all winter?'],
      ['Man', 'uk_m', 'Check the summary box—focus indoor winter crews on that sixty-eight-thousand-dollar phase while heating the main hall safely.'],
      ['Woman1', 'au_f', 'Perfect, I’ll ask our timber foreman to pull his team inside starting Monday morning.'],
    ], doc('box', '1910 Union Train Depot — Preservation Phases', [['Grant Source', 'State Heritage Fund']], [
      box('Active Restoration Phases & Remaining Grant Funds', [
        'Phase 1 — West Arch Lime-Mortar Repointing | $34,000 | Outdoor (Resumes April)',
        'Phase 2 — Vaulted Oak Truss & Waiting Hall Millwork | $68,000 | Indoor Winter Work',
        'Phase 3 — Copper Clock Tower Cupola Flashing | $22,000 | Exterior (Completed Oct)',
        'Phase 4 — Platform Canopy Ironwork Enamel | $19,500 | Shop Finishing',
      ]),
    ]), [
      ['Part 3 · Reason', 'Why is masonry repointing paused until April?', [
        'Cold freezing nights prevent traditional lime mortar from curing properly',
        'Matching nineteen-ten bricks will not ship from the quarry until spring',
        'West Arch scaffolding must be removed for winter holiday parades',
        'The preservation board redirected masonry funds to roof flashing',
      ], 0, 'ตอบ Cold freezing nights prevent traditional lime mortar from curing properly (อากาศหนาวจัดช่วงกลางคืนทำให้ปูนปั้นปูนขาว lime mortar ไม่เซตตัว)'],
      ['Part 3 · Graphic', 'Look at the graphic. Which restoration phase will indoor crews focus on this winter?', [
        'Phase 2',
        'Phase 1',
        'Phase 3',
        'Phase 4',
      ], 0, 'ตอบ Phase 2 (ผู้พูดระบุงานในร่มช่วงฤดูหนาวที่มียอดเงินทุนคงเหลือ $68,000 ซึ่งตรงกับ Phase 2: Vaulted Oak Truss & Waiting Hall Millwork)'],
      ['Part 3 · Action', 'Who will the first woman contact to coordinate Monday’s indoor transition?', [
        'The timber restoration foreman',
        'The state heritage fund accountant',
        'The copper cupola roofing inspector',
        'The exterior masonry contractor',
      ], 0, 'ตอบ The timber restoration foreman (จะแจ้งหัวหน้าช่างไม้ให้ย้ายทีมเข้ามาทำงานด้านในอาคารตั้งแต่เช้าวันจันทร์)'],
    ]),

    // Set 29 Part 4 (10 Talks × 3 Qs = 30 Qs; Talks 8-10 with Graphics)
    p4(29, 'l29-p4-1', 'the following botanical garden tour announcement', 'uk_m',
      'Good evening, botanical members, and welcome to our special late-night opening inside the Arid Conservatory! Tonight only, our century-old queen-of-the-night cactus collection is opening dozens of fragrant white blossoms that fade before sunrise. As you stroll along the stone walkway, please switch smartphone camera flashes completely off—bright strobes interfere with our volunteer botanists recording nocturnal moth pollination patterns. Guided flashlight talks depart every twenty minutes from the central fountain.',
      null, [
        ['Part 4 · Topic', 'What special event are visitors attending tonight?', [
          'A nighttime viewing of rare blooming desert cacti',
          'A seminar on pruning indoor tropical orchids',
          'A morning fundraiser around the conservatory fountain',
          'An insect-collecting field workshop for students',
        ], 0, 'ตอบ A nighttime viewing of rare blooming desert cacti (เปิดให้เข้าชมรอบดึกพิเศษเพื่อดูดอกกระบองเพชรราชินีแห่งรัตติกาลที่บานเพียงคืนเดียวก่อนรุ่งสาง)'],
        ['Part 4 · Detail', 'Why must guests turn off smartphone camera flashes?', [
          'Bright flashes disrupt botanists observing nighttime moth pollination',
          'Camera strobes reflect harshly off curved glass conservatory walls',
          'Flashlight beams fade delicate white cactus petals quickly',
          'Bright bursts frighten guided tour groups along narrow paths',
        ], 0, 'ตอบ Bright flashes disrupt botanists observing nighttime moth pollination (แสงแฟลชรบกวนนักพฤกษศาสตร์อาสาที่กำลังบันทึกพฤติกรรมการผสมเกสรของผีเสื้อกลางคืน)'],
        ['Part 4 · Detail', 'How often do guided flashlight talks begin at the central fountain?', [
          'Every twenty minutes',
          'Every fifteen minutes',
          'Once every hour',
          'Only at sunset and midnight',
        ], 0, 'ตอบ Every twenty minutes (รอบบรรยายพร้อมไฟฉายออกทุก 20 นาทีจากบริเวณน้ำพุกลาง)'],
      ]),

    p4(29, 'l29-p4-2', 'the following recorded library announcement', 'us_f',
      'Thank you for calling the Maplewood Public Library Maker-Lab information line. Free community access to our three-dimensional printers, digital embroidery machines, and woodworking scroll saws is available to all cardholders aged thirteen and up. Before reserving equipment online, first-time users must complete a thirty-minute safety orientation held Tuesday and Thursday evenings at six P.M., plus Saturdays at ten. Closed-toe shoes are mandatory inside the workshop floor.',
      null, [
        ['Part 4 · Detail', 'Who is eligible to use the library Maker-Lab equipment free of charge?', [
          'Library cardholders aged thirteen or older',
          'Adults over eighteen with prior shop licenses',
          'Registered city students enrolled in STEM classes',
          'Monthly Maker-Lab paying subscribers only',
        ], 0, 'ตอบ Library cardholders aged thirteen or older (ผู้ถือบัตรห้องสมุดอายุ 13 ปีขึ้นไปใช้งานได้ฟรี)'],
        ['Part 4 · Detail', 'What must new users complete prior to booking machines online?', [
          'A thirty-minute in-person safety orientation session',
          'A written online quiz about woodworking saws',
          'A refundable deposit form at the front desk',
          'An embroidery design check with library staff',
        ], 0, 'ตอบ A thirty-minute in-person safety orientation session (ต้องเข้าอบรมปฐมนิเทศความปลอดภัย 30 นาทีก่อนจองเครื่องออนไลน์)'],
        ['Part 4 · Detail', 'What dress code rule applies inside the workshop area?', [
          'Visitors must wear closed-toe footwear',
          'Safety aprons must be brought from home',
          'Long sleeves are prohibited near embroidery units',
          'Protective gloves are required at all printing tables',
        ], 0, 'ตอบ Visitors must wear closed-toe footwear (บังคับสวมรองเท้าปิดหัวเท้าทุกครั้งในพื้นที่เวิร์กช็อป)'],
      ]),

    p4(29, 'l29-p4-3', 'the following historic site dedication speech', 'ca_m',
      'Neighbors, historians, and preservation volunteers—welcome back inside the nineteen-ten Union Train Depot! Seven years ago, peeling plaster and a sagging slate roof nearly condemned this landmark to demolition. Instead, four hundred community donors and skilled local craftspeople spent thirty-two months restoring every oak pew, brass ticket grille, and hand-painted ceiling rosette. Starting tomorrow morning, this vaulted waiting hall reopens permanently as our town’s civic auditorium and weekend farmers’ market pavilion.',
      null, [
        ['Part 4 · Topic', 'What milestone is being celebrated in this speech?', [
          'The reopening of a restored historic train station for civic use',
          'The launch of new high-speed commuter rail service downtown',
          'The announcement of fundraising goals for roof repairs',
          'The anniversary of a neighborhood farmers’ market association',
        ], 0, 'ตอบ The reopening of a restored historic train station for civic use (ฉลองการเปิดใช้งานสถานีรถไฟเก่าปี 1910 อีกครั้งหลังบูรณะเสร็จสิ้น)'],
        ['Part 4 · Detail', 'How long did the restoration work on the depot take?', [
          'Thirty-two months',
          'Seven years',
          'Twelve months',
          'Fourteen weeks',
        ], 0, 'ตอบ Thirty-two months (ช่างและผู้บริจาคใช้เวลาบูรณะทั้งสิ้น 32 เดือน)'],
        ['Part 4 · Detail', 'What will the restored station hall serve as starting tomorrow?', [
          'A community auditorium and weekend market hall',
          'A railway museum housing historic locomotives',
          'A private woodworking workshop for craftspeople',
          'A ticket annex for regional freight lines',
        ], 0, 'ตอบ A community auditorium and weekend market hall (จะเปิดใช้เป็นหอประชุมชุมชนและพื้นที่ตลาดนัดเกษตรกรสุดสัปดาห์)'],
      ]),

    p4(29, 'l29-p4-4', 'the following excerpt from a museum preservation meeting', 'au_f',
      'Before contractors hang directional signage inside the restored Union Depot lobby next week, let’s settle our mounting method for the historic limestone pillars. Drilling expansion bolts straight into nineteen-ten carved stonework leaves permanent holes we can never erase if signs change later. Instead, our preservation engineer designed tensioned bronze collar bands lined with soft cork that wrap snugly around each column. Yes, fabrication costs slightly more, yet cutting corners on century-old stone just isn’t worth the regret.',
      null, [
        ['Part 4 · Problem', 'Why does the speaker oppose drilling bolts into the lobby pillars?', [
          'It causes irreversible damage to century-old carved limestone',
          'Expansion bolts cannot support heavy directional signs',
          'Limestone dust interferes with ongoing oak bench finishing',
          'Contractors lack masonry drills suitable for historic stone',
        ], 0, 'ตอบ It causes irreversible damage to century-old carved limestone (การเจาะพุกเหล็กจะทิ้งรูถาวรบนเสาหินปูนแกะสลักอายุร้อยปีซึ่งแก้ไขคืนไม่ได้)'],
        ['Part 4 · Proposal', 'What alternative mounting hardware will the team use?', [
          'Cork-lined bronze bands tightened around the columns',
          'Clear museum adhesive attached behind wooden sign frames',
          'Freestanding steel signposts bolted into floor grout',
          'Ceiling cables suspended from restored oak roof trusses',
        ], 0, 'ตอบ Cork-lined bronze bands tightened around the columns (ใช้สายรัดทองสัมฤทธิ์บุไม้ก๊อกนุ่มรัดรอบเสาโดยไม่ต้องเจาะ)'],
        ['Part 4 · Meaning', 'What does the speaker mean when she says, "cutting corners on century-old stone just isn’t worth the regret"?', [
          'Saving money now is unwise if it risks permanent architectural harm',
          'Workers must carefully trim square stone corners before wrapping bands',
          'Bronze collar fabrication should be outsourced to save time',
          'Directional signs should be kept small to reduce material costs',
        ], 0, 'ตอบ Saving money now is unwise if it risks permanent architectural harm (การลดต้นทุนแบบมักง่ายไม่คุ้มกับความเสียหายถาวรต่อหินโบราณ)'],
      ]),

    p4(29, 'l29-p4-5', 'the following volunteer training briefing', 'us_m2',
      'Welcome, greenhouse volunteers, to Saturday’s orchid repotting clinic. Our collection houses nearly three hundred rare tropical specimens, and viral plant diseases spread rapidly on unwashed blades. Before trimming even a single browned root on a new pot, dip your stainless pruning shears into our seventy-percent alcohol sanitizing tray and wipe them dry with clean paper towels. Also, remember to pot plants in coarse fir-bark chips rather than dense garden soil so air circulates freely around roots.',
      null, [
        ['Part 4 · Audience', 'Who is attending this orchid repotting clinic?', [
          'Botanical garden volunteers assisting with orchid care',
          'Commercial nursery growers ordering fir-bark potting chips',
          'Visitors attending an evening tropical flower tour',
          'City gardeners planting outdoor perennial beds',
        ], 0, 'ตอบ Botanical garden volunteers assisting with orchid care (อบรมอาสาสมัครเรือนกระจกในกิจกรรมเปลี่ยนกระถางกล้วยไม้)'],
        ['Part 4 · Detail', 'Why must volunteers dip pruning shears in alcohol between pots?', [
          'To stop plant viruses from spreading between rare orchids',
          'To prevent stainless steel blades from rusting in humidity',
          'To dissolve sticky sap left by fir-bark chips',
          'To soften tough orchid roots before cutting',
        ], 0, 'ตอบ To stop plant viruses from spreading between rare orchids (ป้องกันโรคไวรัสพืชแพร่กระจายจากต้นหนึ่งไปอีกต้นผ่านใบมีดที่ไม่สะอาด)'],
        ['Part 4 · Detail', 'What growing medium should volunteers place inside orchid pots?', [
          'Coarse fir-bark chips',
          'Moist composted garden soil',
          'Crushed limestone gravel',
          'Peat moss mixed with sand',
        ], 0, 'ตอบ Coarse fir-bark chips (ให้ใช้เปลือกสนหยาบแทนดินสวนเนื้อแน่นเพื่อให้รากถ่ายเทอากาศได้ดี)'],
      ]),

    p4(29, 'l29-p4-6', 'the following voicemail message', 'uk_f2',
      'Hi Martin, this is Claire calling from the Central Library Maker-Lab. Your three-dimensional printed architectural scale model of the historic Union Train Depot just finished its fourteen-hour resin cure cycle—the cupola louvers and arched brick windows turned out extraordinarily sharp! I’ve placed the finished white model inside a cushioned cardboard tray behind the second-floor media desk. Drop by anytime before seven tonight to pick it up for tomorrow’s heritage board presentation.',
      null, [
        ['Part 4 · Topic', 'Why is Claire leaving a voicemail for Martin?', [
          'To let him know his 3D-printed building model is ready for pickup',
          'To remind him about an upcoming heritage board meeting',
          'To warn him that resin printing took longer than fourteen hours',
          'To ask for revised cupola measurements before printing starts',
        ], 0, 'ตอบ To let him know his 3D-printed building model is ready for pickup (โทรแจ้งว่าโมเดล 3 มิติของสถานีรถไฟ Union Train Depot อบเรซินเสร็จเรียบร้อยแล้ว)'],
        ['Part 4 · Detail', 'Where did Claire store the finished model?', [
          'Inside a padded tray behind the second-floor media desk',
          'Inside the locked resin curing cabinet downstairs',
          'At the ground-floor library checkout counter',
          'On Maker-Lab Printer Two’s cooling shelf',
        ], 0, 'ตอบ Inside a padded tray behind the second-floor media desk (เก็บไว้ในถาดกระดาษบุกันกระแทกหลังเคาน์เตอร์สื่อชั้นสอง)'],
        ['Part 4 · Detail', 'Why does Martin need the architectural model by tomorrow?', [
          'For a presentation to the heritage board',
          'For an opening exhibit inside the depot waiting hall',
          'For photography in the city library newsletter',
          'For masonry contractors inspecting window arches',
        ], 0, 'ตอบ For a presentation to the heritage board (เพื่อนำไปใช้ประกอบการนำเสนอต่อคณะกรรมการอนุรักษ์มรดกพรุ่งนี้)'],
      ]),

    p4(29, 'l29-p4-7', 'the following radio community feature', 'ca_f',
      'Looking for green-thumbed fun and practical DIY skills this weekend? Stop by the Civic Campus on Saturday from nine to three for our joint Botanical Seed Swap and Library Tool Repair Clinic! Bring heirloom vegetable or wildflower seeds in labeled envelopes to trade at the glass pavilion patio, then step next door into the library Maker-Lab where volunteer technicians help mend wobbly lamp cords, dull garden shears, and small kitchen appliances completely free.',
      null, [
        ['Part 4 · Topic', 'What two organizations are teaming up for Saturday’s Civic Campus event?', [
          'A botanical garden pavilion and a public library maker-lab',
          'A historic train museum and a local hardware store',
          'An appliance factory and a city parks department',
          'An elementary school garden club and a neighborhood café',
        ], 0, 'ตอบ A botanical garden pavilion and a public library maker-lab (ศาลาสวนพฤกษศาสตร์และห้องปฏิบัติการสร้างสรรค์ของห้องสมุดร่วมกันจัดงานแลกเมล็ดพันธุ์และคลินิกซ่อมเครื่องมือ)'],
        ['Part 4 · Detail', 'What should attendees bring if they want to join the seed exchange?', [
          'Labeled packets of heirloom or wildflower seeds',
          'Empty clay pots for greenhouse seedlings',
          'Receipts showing recent library card renewals',
          'Spare power cords for volunteer technicians',
        ], 0, 'ตอบ Labeled packets of heirloom or wildflower seeds (ให้นำเมล็ดพันธุ์ผักพื้นบ้านหรือดอกไม้ป่าใส่ซองติดป้ายชื่อมาแลกเปลี่ยน)'],
        ['Part 4 · Detail', 'What services are offered free of charge next door in the Maker-Lab?', [
          'Hands-on help repairing small appliances, lamps, and garden tools',
          'Free laser engraving on wooden seed garden markers',
          'Complimentary garden shear sharpening lessons for children',
          'Distribution of brand-new kitchen electronics',
        ], 0, 'ตอบ Hands-on help repairing small appliances, lamps, and garden tools (อาสาสมัครช่วยซ่อมสายไฟโคมไฟ กรรไกรตัดหญ้าทื่อ และเครื่องใช้ไฟฟ้าขนาดเล็กในครัวฟรี)'],
      ]),

    p4(29, 'l29-p4-8', 'the following workshop schedule and announcement', 'us_m',
      'Welcome, families, to Maplewood Library’s Saturday Morning Sign-Up Desk! Before checking availability on our printed workshop board, let me highlight one session for parents with middle-schoolers. We have two slots left in an introductory Saturday maker workshop open specifically to twelve-year-olds that carries zero supply fees because our community foundation donated all vinyl and craft blanks. Simply write your child’s library card number beside that free course on our clipboard.',
      doc('table', 'Maker-Lab Saturday Youth Workshops', [['Location', 'Maplewood Library'], ['Spots', 'Limited']], [
        tbl(['Workshop Title', 'Room', 'Age Range', 'Material Fee'], [
          ['3D Keychain Design', 'Lab A', 'Ages 10–14', '$8'],
          ['Laser Wood Coasters', 'Lab B', 'Ages 14–17', '$12'],
          ['Vinyl Sticker Studio', 'Lab A', 'Ages 11–14', 'Free'],
          ['Mini Soldering Bots', 'Lab C', 'Ages 12–16', '$15'],
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which workshop still has two free spots for twelve-year-olds?', [
          'Vinyl Sticker Studio',
          '3D Keychain Design',
          'Laser Wood Coasters',
          'Mini Soldering Bots',
        ], 0, 'ตอบ Vinyl Sticker Studio (ตารางแสดงคอร์สที่รับอายุ 12 ปี คือ Ages 11–14 และไม่เสียค่าวัสดุ Free คือ Vinyl Sticker Studio ใน Lab A)'],
        ['Part 4 · Reason', 'Why is there no material charge for that workshop?', [
          'A community foundation funded the vinyl and craft supplies',
          'Library cardholders receive free materials on their first visit',
          'Participants bring their own leftover stickers from home',
          'Youth workshops under one hour waive supply charges',
        ], 0, 'ตอบ A community foundation funded the vinyl and craft supplies (มูลนิธิชุมชนบริจาคแผ่นไวนิลและวัสดุงานฝีมือให้ทั้งหมด)'],
        ['Part 4 · Action', 'How should parents register their child for the open spots?', [
          'By listing the child’s library card number on the desk clipboard',
          'By paying an eight-dollar deposit at the main circulation desk',
          'By emailing the Lab A instructor before noon',
          'By scanning a mobile code posted outside Lab C',
        ], 0, 'ตอบ By listing the child’s library card number on the desk clipboard (เขียนหมายเลขบัตรห้องสมุดของเด็กข้างชื่อคอร์สบนคลิปบอร์ดที่โต๊ะลงทะเบียน)'],
      ]),

    p4(29, 'l29-p4-9', 'the following restoration inspection checklist and update', 'uk_f',
      'Hi David, it’s Hannah calling from the Union Train Depot window restoration bay. Our weekend carpentry crew made great headway on the arched waiting-hall sashes—they already stripped the weathered paint, reset the wavy historic glass panes, and finished sanding and puttying every joint. Tomorrow morning, I’m tackling the step right before we bolt on the restored brass sash locks. Could you bring two gallons of oil-based primer when you drive over at eight so I don’t run short halfway through?',
      doc('list', 'Historic Depot Window Sash Workflow', [['Location', 'Wait Hall Bay'], ['Crew', 'Timber Team']], [
        lst([
          'Step 1: Strip old flaking paint and inspect mortise-and-tenon wood joints',
          'Step 2: Glaze antique wavy glass panes with linseed oil putty',
          'Step 3: Sand cured putty seams flush along timber mullions',
          'Step 4: Apply two coats of breathable oil-based primer and heritage green topcoat',
          'Step 5: Reinstall polished brass sash locks and counterweighted pulley cords',
        ]),
      ]), [
        ['Part 4 · Detail', 'Which tasks did the weekend crew already finish on the arched window sashes?', [
          'Stripping paint, glazing glass panes, and sanding putty seams',
          'Applying oil-based primer and mounting brass sash locks',
          'Replacing broken counterweight pulley cords inside wall pockets',
          'Painting heritage green topcoats along waiting-hall trim',
        ], 0, 'ตอบ Stripping paint, glazing glass panes, and sanding putty seams (ทีมวันหยุดลอกสีเก่า ใส่กระจกด้วยน้ำมันลินสีด และขัดรอยโป๊วเรียบร้อยแล้ว)'],
        ['Part 4 · Graphic', 'Look at the graphic. Which workflow step will Hannah work on tomorrow morning?', [
          'Step 4',
          'Step 2',
          'Step 3',
          'Step 5',
        ], 0, 'ตอบ Step 4 (Hannah ระบุว่าจะทำขั้นตอนก่อนติดตัวล็อกทองเหลืองซึ่งต้องใช้สีรองพื้น oil-based primer ตรงกับ Step 4)'],
        ['Part 4 · Request', 'What does Hannah ask David to bring at eight o’clock?', [
          'Two gallons of oil-based primer',
          'Extra brass sash locks from storage',
          'Fine sandpaper sheets for mullions',
          'Spare sheets of antique wavy glass',
        ], 0, 'ตอบ Two gallons of oil-based primer (ขอให้ David นำสีรองพื้นสูตรน้ำมันมาด้วยสองแกลลอนตอนแปดโมงเช้า)'],
      ]),

    p4(29, 'l29-p4-10', 'the following botanical pavilion map guide and tour notice', 'au_m',
      'Good morning, garden members, and welcome to our Botanical Glass Pavilion architectural tour. Let’s glance briefly at your printed pavilion map before stepping through the entrance doors. Normally our route begins with the carnivorous bog plants inside our cool mist gallery, then loops clockwise past the arid succulents. However, facilities technicians are flushing a noisy circulation pump inside that carnivorous plant gallery until eleven, so we’ll start clockwise right past the dry cactus collection instead.',
      doc('box', 'Botanical Glass Pavilion Map Directory', [['Campus', 'City Botanical'], ['Clock', '10:00 A.M. Tour']], [
        box('Pavilion Galleries (Clockwise Order from Entrance)', [
          'West Gallery — Carnivorous Bog Plants & Waterfall Cascade',
          'North Dome — Tall Tropical Palms & Aerial Orchids',
          'East Gallery — Mediterranean Citrus & Olive Trees',
          'South Wing — Arid Succulents & Desert Agave Bed',
        ]),
      ]), [
        ['Part 4 · Problem', 'Why is the tour skipping the carnivorous plant area at the start?', [
          'Maintenance workers are running a loud circulation pump repair there',
          'Misting hoses flooded walkways around the waterfall cascade',
          'A school group already filled the West Gallery entrance',
          'Rare pitcher plants were temporarily moved to the North Dome',
        ], 0, 'ตอบ Maintenance workers are running a loud circulation pump repair there (ช่างอาคารกำลังล้างทำความสะอาดปั๊มน้ำเสียงดังอยู่จนถึงสิบเอ็ดโมง)'],
        ['Part 4 · Graphic', 'Look at the graphic. Which gallery is undergoing pump maintenance until eleven?', [
          'West Gallery',
          'North Dome',
          'East Gallery',
          'South Wing',
        ], 0, 'ตอบ West Gallery (ผู้พูดระบุว่าพื้นที่ที่มีต้นไม้กินแมลง carnivorous bog plants กำลังซ่อมปั๊มน้ำ ซึ่งตามผังคือ West Gallery)'],
        ['Part 4 · Detail', 'Where will the guided tour begin instead?', [
          'Inside the South Wing desert collection',
          'Beside the waterfall cascade in West Gallery',
          'Underneath the aerial orchids in North Dome',
          'Among Mediterranean citrus trees in East Gallery',
        ], 0, 'ตอบ Inside the South Wing desert collection (เปลี่ยนไปเริ่มต้นที่โซนกระบองเพชรทะเลทรายซึ่งก็คือ South Wing แทน)'],
      ]),

    // ==================== SET 30 ====================
    // Themes: International Conference Center Logistics, Non-Profit Community Housing Program, City Cycling Trail Opening
    p1(30, 'l30-p1-1', 'uk_m', [
      'Attendees are folding chairs inside an empty auditorium.',
      'Projection screens are being packed into cardboard shipping tubes.',
      'A technician is adjusting a microphone on a conference stage.',
      'Badges are scattered across a glass registration counter.',
    ], 2, 'ตอบ A technician is adjusting a microphone on a conference stage. (ช่างเทคนิคกำลังปรับระดับไมโครโฟนบนเวทีห้องประชุม)'),
    p1(30, 'l30-p1-2', 'us_f', [
      'Painters are rolling white coats onto an outdoor brick fence.',
      'Volunteers are carrying wooden lumber beams across a residential yard.',
      'Roofing shingles have been unloaded beside a public subway exit.',
      'A surveyor is reading blueprints inside a furnished living room.',
    ], 1, 'ตอบ Volunteers are carrying wooden lumber beams across a residential yard. (อาสาสมัครกำลังช่วยกันแบกท่อนไม้ก่อสร้างเดินผ่านสนามหน้าบ้านพัก)'),
    p1(30, 'l30-p1-3', 'au_f', [
      'Cyclists are fixing flat tires inside a downtown repair shop.',
      'A ribbon is being cut across a busy city highway intersection.',
      'Traffic cones block every lane of a concrete pedestrian bridge.',
      'Several bicycles are parked along metal racks beside a paved trail.',
    ], 3, 'ตอบ Several bicycles are parked along metal racks beside a paved trail. (จักรยานหลายคันจอดเรียงตามราวเหล็กข้างเส้นทางลาดยาง)'),
    p1(30, 'l30-p1-4', 'ca_m', [
      'Workers are pushing loaded carts past exhibition display booths.',
      'Visitors are sampling hot beverages inside a crowded cafeteria.',
      'Carpet rolls have been left along a narrow hotel staircase.',
      'Speakers are waving to an audience from an outdoor balcony.',
    ], 0, 'ตอบ Workers are pushing loaded carts past exhibition display booths. (พนักงานกำลังเข็นรถเข็นบรรทุกของผ่านบูธจัดแสดงสินค้าในฮอลล์)'),
    p1(30, 'l30-p1-5', 'uk_f2', [
      'Filing cabinets are being carried out toward a moving van.',
      'Two mechanics are inspecting heating ducts on an apartment roof.',
      'A counselor is pointing at paperwork on a desk across from a client.',
      'A woman is locking a mailbox beside an apartment stairwell.',
    ], 2, 'ตอบ A counselor is pointing at paperwork on a desk across from a client. (เจ้าหน้าที่ให้คำปรึกษากำลังชี้เอกสารบนโต๊ะทำงานต่อหน้าผู้รับบริการ)'),
    p1(30, 'l30-p1-6', 'us_m2', [
      'Pedestrians are sitting along wooden bleachers facing a stadium.',
      'A trail map sign stands beside a paved riverside path.',
      'Maintenance trucks are repaving lanes near an airport runway.',
      'Balloons have been tied around streetlamps along an expressway.',
    ], 1, 'ตอบ A trail map sign stands beside a paved riverside path. (ป้ายแผนที่เส้นทางตั้งอยู่ริมทางปั่นจักรยานลาดยางเลียบแม่น้ำ)'),

    // Set 30 Part 2 (25 Qs)
    p2(30, 'l30-p2-1', 'uk_f', 'us_m', 'Where are the simultaneous translation headsets distributed for Keynote Hall A?', [
      'At the glass kiosk just outside the west entrance.',
      'Four international languages including Japanese.',
      'Before the opening panel begins at nine.',
    ], 0, 'ตอบ At the glass kiosk just outside the west entrance. (ถามสถานที่แจกหูฟังแปลภาษา Where ตอบตรงซุ้มกระจกหน้าทางเข้าฝั่งตะวันตก)'),
    p2(30, 'l30-p2-2', 'us_m2', 'ca_f', 'Who coordinates volunteer carpenter shifts for the Maple Street housing builds?', [
      'Mainly framing exterior wall panels.',
      'Rosa Martinez schedules every Saturday crew.',
      'No, steel work boots are mandatory.',
    ], 1, 'ตอบ Rosa Martinez schedules every Saturday crew. (ถามบุคคล Who ตอบ Rosa Martinez เป็นผู้จัดตารางอาสาสมัครวันเสาร์ทั้งหมด)'),
    p2(30, 'l30-p2-3', 'au_m', 'uk_f2', 'When does the ribbon-cutting ceremony for the Riverbend Bike Trail begin?', [
      'Twelve miles along the harbor shoreline.',
      'With free helmet fittings for children.',
      'At nine sharp beside the cedar trailhead arch.',
    ], 2, 'ตอบ At nine sharp beside the cedar trailhead arch. (ถามเวลา When ตอบเริ่มเวลาเก้าโมงตรงข้างซุ้มประตูไม้ซีดาร์จุดเริ่มต้นเส้นทาง)'),
    p2(30, 'l30-p2-4', 'ca_m', 'us_f', 'Did the exhibitor freight crates clear customs ahead of Thursday’s setup?', [
      'All fourteen pallets arrived at Dock Four this morning.',
      'Mostly solar panel display stands.',
      'Because the convention hall floor opens at seven.',
    ], 0, 'ตอบ All fourteen pallets arrived at Dock Four this morning. (ถามว่าผ่านศุลกากรหรือยัง ตอบยืนยันว่าทั้ง 14 พาเลตมาถึงท่าโหลด 4 เมื่อเช้าแล้ว)'),
    p2(30, 'l30-p2-5', 'us_f2', 'au_m', 'Why is the new community housing application workshop moving to Room Two-Twelve?', [
      'Across from the municipal parks department.',
      'Double the applicants registered than we first expected.',
      'Bring two recent utility bills.',
    ], 1, 'ตอบ Double the applicants registered than we first expected. (ถามเหตุผล Why ตอบเพราะมีผู้ลงทะเบียนมากกว่าที่คาดไว้ถึงสองเท่า)'),
    p2(30, 'l30-p2-6', 'uk_m', 'us_f', 'Should we mount solar path lights along the bike trail bridges or keep them at intersections only?', [
      'Yes, rechargeable batteries last five nights.',
      'Roughly every fifty yards.',
      'Illuminating the wooden bridges prevents nighttime slips too.',
    ], 2, 'ตอบ Illuminating the wooden bridges prevents nighttime slips too. (ถามทางเลือกติดไฟบนสะพานหรือเฉพาะทางแยก ตอบควรติดบนสะพานด้วยเพื่อกันลื่นตอนกลางคืน)'),
    p2(30, 'l30-p2-7', 'us_m', 'uk_f2', 'How long does the city cycling loop take at a relaxed commuter pace?', [
      'Roughly forty minutes from Downtown Pier to Oak Park.',
      'Every Sunday morning from May through October.',
      'Along the shaded canal embankment.',
    ], 0, 'ตอบ Roughly forty minutes from Downtown Pier to Oak Park. (ถามระยะเวลา How long ตอบใช้เวลาประมาณ 40 นาทีจากท่าเรือกลางเมืองถึงสวนสาธารณะ)'),
    p2(30, 'l30-p2-8', 'ca_f', 'us_m2', 'The ceiling projector in Breakout Room C keeps flickering green.', [
      'No, delegates preferred printed handouts.',
      'Swap its HDMI cable with the spare inside the podium drawer.',
      'During the afternoon energy panel.',
    ], 1, 'ตอบ Swap its HDMI cable with the spare inside the podium drawer. (ประโยคบอกเล่าแจ้งโปรเจกเตอร์ติดดับเป็นสีเขียว แนะนำให้เปลี่ยนสาย HDMI สำรองในลิ้นชักโพเดียม)'),
    p2(30, 'l30-p2-9', 'au_f', 'ca_m', 'Where can low-income homeowners pick up free weatherization kits this weekend?', [
      'Foam door strips and window film.',
      'Between ten A.M. and four P.M.',
      'At our neighborhood outreach van beside the library.',
    ], 2, 'ตอบ At our neighborhood outreach van beside the library. (ถามสถานที่รับชุดอุปกรณ์ Where ตอบที่รถตู้กิจกรรมชุมชนข้างห้องสมุด)'),
    p2(30, 'l30-p2-10', 'uk_f', 'au_m', 'Hasn’t the conference catering team delivered coffee urns to the press lounge yet?', [
      'Wait—staff are wheeling carts down Hallway B right now.',
      'Yes, decaf roast and oat milk.',
      'For forty accredited journalists.',
    ], 0, 'ตอบ Wait—staff are wheeling carts down Hallway B right now. (คำถามปฏิเสธ Hasn’t... ตอบความคืบหน้าว่าพนักงานกำลังเข็นรถมาทางโถง B พอดี)'),
    p2(30, 'l30-p2-11', 'us_m2', 'uk_f', 'Could you confirm which sponsor banners hang over the Main Expo Atrium?', [
      'Ten feet wide on aluminum trusses.',
      'Let me pull up the ceiling rigging diagram from our manager.',
      'During Tuesday’s press conference.',
    ], 1, 'ตอบ Let me pull up the ceiling rigging diagram from our manager. (ขอให้ช่วยยืนยันป้ายผู้สนับสนุน ตอบจะเปิดผังแขวนป้ายเพดานจากผู้จัดการให้ดู)'),
    p2(30, 'l30-p2-12', 'ca_m', 'au_f', 'How often are bike-repair air pumps checked along the riverfront path?', [
      'Up to eighty pounds per square inch.',
      'Beside Mile Markers Three and Seven.',
      'Parks crews inspect every station every Monday morning.',
    ], 2, 'ตอบ Parks crews inspect every station every Monday morning. (ถามความถี่ How often ตอบเจ้าหน้าที่สวนสาธารณะตรวจทุกวันจันทร์เช้า)'),
    p2(30, 'l30-p2-13', 'us_f', 'uk_m', 'What delayed insulation installation on the duplex renovation project?', [
      'City electrical inspectors needed access behind the wall studs first.',
      'Pink fiberglass batts in the attic.',
      'About six neighborhood families.',
    ], 0, 'ตอบ City electrical inspectors needed access behind the wall studs first. (ถามสาเหตุความล่าช้า What delayed ตอบต้องรอผู้ตรวจงานไฟฟ้าตรวจช่องผนังก่อน)'),
    p2(30, 'l30-p2-14', 'uk_f2', 'ca_m', 'Why don’t we offer shuttle vans between the hotel block and the convention dock?', [
      'Every twenty minutes during peak mornings.',
      'Good call—two miles feels far for attendees carrying laptops.',
      'No, our badge scanners are already charged.',
    ], 1, 'ตอบ Good call—two miles feels far for attendees carrying laptops. (ข้อเสนอแนะ Why don’t we ตอบเห็นด้วยเพราะระยะทางสองไมล์ไกลไปสำหรับผู้ถือโน้ตบุ๊ก)'),
    p2(30, 'l30-p2-15', 'au_m', 'us_m', 'You already submitted the housing grant matching-funds spreadsheet, didn’t you?', [
      'Funded by regional bank sponsorships.',
      'On the community center bulletin board.',
      'Actually, Finance is double-checking two subcontractor invoices first.',
    ], 2, 'ตอบ Actually, Finance is double-checking two subcontractor invoices first. (คำถามย้ำ didn’t you ตอบเลี่ยงว่าฝ่ายการเงินกำลังตรวจใบแจ้งหนี้ผู้รับเหมาสองใบอยู่ก่อน)'),
    p2(30, 'l30-p2-16', 'us_m', 'uk_f', 'How much does an electric-assist bike rental cost at the new trailhead pavilion?', [
      'Twelve dollars for the first hour with helmet included.',
      'Open daily from sunrise until dusk.',
      'Right next to the kayak launch dock.',
    ], 0, 'ตอบ Twelve dollars for the first hour with helmet included. (ถามค่าเช่า How much ตอบชั่วโมงแรก 12 ดอลลาร์รวมหมวกกันน็อก)'),
    p2(30, 'l30-p2-17', 'ca_f', 'us_f2', 'Are all twelve breakout rooms wired for live video streaming?', [
      'Check the moderator notes on Stage Two.',
      'Only Rooms One through Eight have fiber uplinks installed.',
      'Over six hundred remote participants.',
    ], 1, 'ตอบ Only Rooms One through Eight have fiber uplinks installed. (ถามว่ารองรับสตรีมมิงครบทุกห้องไหม ตอบเฉพาะห้อง 1–8 เท่านั้นที่เดินสายไฟเบอร์แล้ว)'),
    p2(30, 'l30-p2-18', 'uk_m', 'au_f', 'When will families move into the newly finished Oakwood townhomes?', [
      'Three-bedroom energy-efficient layouts.',
      'With subsidized zero-interest mortgages.',
      'Keys are being handed over on the first of November.',
    ], 2, 'ตอบ Keys are being handed over on the first of November. (ถามกำหนดการย้ายเข้า When ตอบส่งมอบกุญแจวันที่ 1 พฤศจิกายน)'),
    p2(30, 'l30-p2-19', 'us_f2', 'ca_m', 'Who approves exhibitor requests for forklift assistance after five P.M.?', [
      'Check with Operations Supervisor Paul at the loading desk.',
      'Two wooden crates per booth.',
      'Along Freight Corridor C.',
    ], 0, 'ตอบ Check with Operations Supervisor Paul at the loading desk. (ถามบุคคลผู้อนุมัติ Who ตอบให้สอบถามหัวหน้าปฏิบัติการ Paul ที่โต๊ะท่าโหลด)'),
    p2(30, 'l30-p2-20', 'au_f', 'uk_f2', 'Didn’t the parks department finish painting green bike-lane arrows near Elm Bridge?', [
      'Yes, wider bike lanes improve visibility.',
      'Rain forced crews to postpone the last half-mile until Tuesday.',
      'Right beside the riverside picnic grove.',
    ], 1, 'ตอบ Rain forced crews to postpone the last half-mile until Tuesday. (คำถามปฏิเสธ Didn’t... ตอบแจ้งว่าฝนตกเลยต้องเลื่อนทาช่วงสุดท้ายไปวันอังคาร)'),
    p2(30, 'l30-p2-21', 'uk_f', 'us_m2', 'Should attendees scan paper tickets or digital QR codes at the summit badge printer?', [
      'Yes, laminated lanyards sit beside each terminal.',
      'During the opening morning rush.',
      'Either works—the kiosk cameras read both automatically.',
    ], 2, 'ตอบ Either works—the kiosk cameras read both automatically. (ถามทางเลือกกระดาษหรือ QR ตอบใช้ได้ทั้งคู่ กล้องตู้สแกนอ่านได้อัตโนมัติ)'),
    p2(30, 'l30-p2-22', 'us_m', 'ca_f', 'How many affordable apartment units are included in Phase Two on Cedar Avenue?', [
      'Thirty-six two-bedroom units plus four accessible ground flats.',
      'Within walking distance of the bus loop.',
      'Next spring after zoning approval.',
    ], 0, 'ตอบ Thirty-six two-bedroom units plus four accessible ground flats. (ถามจำนวนห้อง How many ตอบ 36 ยูนิตแบบสองห้องนอนบวก 4 ยูนิตชั้นล่าง)'),
    p2(30, 'l30-p2-23', 'ca_m', 'uk_f', 'What time does the international conference registration desk close Friday afternoon?', [
      'Inside the Grand Pacific Foyer.',
      'At five-thirty, once the final panel wraps up.',
      'Nearly twelve hundred international delegates.',
    ], 1, 'ตอบ At five-thirty, once the final panel wraps up. (ถามเวลาปิด What time ตอบปิด 17:30 น. หลังจบเสวนาช่วงสุดท้าย)'),
    p2(30, 'l30-p2-24', 'au_m', 'us_f', 'I heard over four hundred cyclists already registered for Sunday’s trail opening ride.', [
      'Helmets and front lights are recommended.',
      'Across three historic steel bridges.',
      'We might need extra water coolers at Mile Marker Five.',
    ], 2, 'ตอบ We might need extra water coolers at Mile Marker Five. (ประโยคบอกเล่าเรื่องยอดนักปั่นลงทะเบียนสูง ตอบรับสอดคล้องว่าคงต้องเพิ่มถังน้ำดื่มตรงจุด Mile Marker Five)'),
    p2(30, 'l30-p2-25', 'uk_m', 'us_m2', 'Where should returning construction volunteers drop off borrowed tool belts?', [
      'Hang them on the numbered pegs inside Trailer Two.',
      'Because morning shifts ended early.',
      'Mostly framing hammers and tape measures.',
    ], 0, 'ตอบ Hang them on the numbered pegs inside Trailer Two. (ถามสถานที่คืนอุปกรณ์ Where ตอบให้แขวนไว้บนหมุดมีหมายเลขในรถพ่วง 2)'),

    // Set 30 Part 3 (13 Conversations × 3 Qs = 39 Qs; Convs 11-13 with Graphics)
    p3(30, 'l30-p3-1', [
      ['Man', 'us_m', 'Elena, Interpreter Booth Three inside Hall A just reported muffled static on the Mandarin channel, and the trade ministers take the stage in twenty minutes!'],
      ['Woman', 'uk_f', 'Did the booth technician check whether the fiber patch cable plugged loosely into the wall mixer box?'],
      ['Man', 'us_m', 'Both wall sockets tested solid—we suspect the tabletop interpreter console’s condenser microphone cable has a hairline crack near the jack.'],
      ['Woman', 'uk_f', 'Grab our sealed spare microphone unit from AV Flight Case Two right away, and I’ll run a quick sound check with the translator before doors open.'],
    ], null, [
      ['Part 3 · Problem', 'What technical trouble is happening in Interpreter Booth Three?', [
        'Static distortion on the Mandarin audio channel',
        'A loose fiber power cable inside Hall A’s stage podium',
        'Missing wireless headsets at the delegate kiosk',
        'Overheating amplifiers behind the translation booth',
      ], 0, 'ตอบ Static distortion on the Mandarin audio channel (บูธล่ามหมายเลข 3 แจ้งว่าช่องเสียงภาษาจีนกลางมีเสียงซ่าไม่ชัดก่อนเริ่มงาน 20 นาที)'],
      ['Part 3 · Cause', 'What do the speakers think caused the audio problem?', [
        'A damaged wire near the interpreter desk microphone plug',
        'An unplugged socket inside the wall mixer box',
        'Wireless interference from delegate smartphones',
        'Incorrect language routing in AV Flight Case Two',
      ], 0, 'ตอบ A damaged wire near the interpreter desk microphone plug (คาดว่าสายไมโครโฟนแบบตั้งโต๊ะมีรอยร้าวใกล้ขั้วเสียบ)'],
      ['Part 3 · Action', 'What will the woman do once the spare microphone arrives?', [
        'Test a replacement microphone directly with the translator',
        'Delay the diplomatic panel by twenty minutes',
        'Inspect wall sockets behind the stage curtain',
        'Swap the Mandarin interpreter to Booth Two',
      ], 0, 'ตอบ Test a replacement microphone directly with the translator (จะทดสอบเสียงกับล่ามทันทีหลังผู้ชายหยิบไมค์สำรองจากกล่อง AV Flight Case Two มาเปลี่ยน)'],
    ]),

    p3(30, 'l30-p3-2', [
      ['Woman', 'au_f', 'Carlos, our non-profit housing weatherization grant requires serial photos of all six heat pumps before we can collect the municipal energy rebate.'],
      ['Man', 'ca_m', 'Wait—didn’t the HVAC contractor submit digital installation invoices last Friday?'],
      ['Woman', 'au_f', 'Invoices show the model number, not the outdoor unit serial stickers needed by the city rebate portal—and tomorrow is the quarterly claim deadline!'],
      ['Man', 'ca_m', 'No worries—I’m driving past Elm Court duplexes after lunch anyway, so I’ll snap clear close-ups of every outdoor unit plate and upload them before four.'],
    ], null, [
      ['Part 3 · Problem', 'Why is the housing program’s energy rebate application incomplete?', [
        'City reviewers require photographs of each outdoor unit’s serial sticker',
        'The HVAC contractor failed to submit Friday’s installation invoices',
        'Heat pumps installed at Elm Court do not match approved models',
        'The municipal rebate portal closed for maintenance yesterday',
      ], 0, 'ตอบ City reviewers require photographs of each outdoor unit’s serial sticker (พอร์ทัลเงินคืนต้องการภาพถ่ายป้ายหมายเลขซีเรียลของเครื่องนอกอาคารทั้ง 6 เครื่อง ไม่ใช่แค่ใบแจ้งหนี้)'],
      ['Part 3 · Detail', 'Why is resolving this issue urgent?', [
        'The quarterly reimbursement deadline falls tomorrow',
        'Renters are moving into Elm Court duplexes tonight',
        'Municipal energy rebate rates drop next Monday',
        'Outdoor unit serial stickers wash off easily in rain',
      ], 0, 'ตอบ The quarterly reimbursement deadline falls tomorrow (พรุ่งนี้เป็นวันครบกำหนดยื่นเบิกเงินคืนประจำไตรมาส)'],
      ['Part 3 · Action', 'How will the man solve the problem this afternoon?', [
        'Visit Elm Court to photograph the missing serial plates himself',
        'Call the HVAC contractor to resend signed invoices',
        'Email the municipal portal to request a one-week extension',
        'Copy serial numbers off the Elm Court blueprint folder',
      ], 0, 'ตอบ Visit Elm Court to photograph the missing serial plates himself (จะแวะเข้าไปที่บ้านแฝด Elm Court หลังอาหารเที่ยงเพื่อถ่ายภาพป้ายซีเรียลอัปโหลดก่อนสี่โมงเย็น)'],
    ]),

    p3(30, 'l30-p3-3', [
      ['Man', 'uk_m', 'Sarah, I just biked the full twelve-mile Riverbend Trail loop for our final pre-opening safety check, and two wooden mile-marker posts are missing near Mile Eight.'],
      ['Woman', 'us_f2', 'Missing? Did recent riverbank grading knock them out before Sunday’s grand opening ride?'],
      ['Man', 'uk_m', 'Exactly—gravel crews cleared brush along the levee and stacked the posts beside the maintenance gate instead of resetting them.'],
      ['Woman', 'us_f2', 'Let’s send our parks utility truck out tomorrow morning with post-hole cement so emergency volunteers have accurate mile markers every thousand yards.'],
    ], null, [
      ['Part 3 · Topic', 'Why did the man cycle the entire Riverbend Trail today?', [
        'To conduct a final safety inspection ahead of opening day',
        'To lead a preview tour for city council officials',
        'To distribute water bottles along gravel maintenance gates',
        'To test new solar lights installed near Mile Eight',
      ], 0, 'ตอบ To conduct a final safety inspection ahead of opening day (ปั่นสำรวจเส้นทางครบ 12 ไมล์เพื่อตรวจความปลอดภัยรอบสุดท้ายก่อนวันเปิดงาน)'],
      ['Part 3 · Cause', 'Why were two mile-marker posts out of place near Mile Eight?', [
        'Brushing crews removed them while clearing the levee embankment',
        'Vandalism knocked down trail signage over the weekend',
        'Heavy river currents washed away wooden posts',
        'Supply deliveries for Mile Eight arrived late from the shop',
      ], 0, 'ตอบ Brushing crews removed them while clearing the levee embankment (ทีมปรับหน้าดินถางพุ่มไม้ริมคันดินเลยถอนเสาไปวางกองไว้ข้างประตูซ่อมบำรุงแล้วยังไม่ได้ปักคืน)'],
      ['Part 3 · Action', 'What repair will parks staff carry out tomorrow morning?', [
        'Cement the missing marker posts back into the ground',
        'Pave gravel shoulders near the maintenance gate',
        'Relocate emergency aid tents away from Mile Eight',
        'Print paper detour maps for Sunday riders',
      ], 0, 'ตอบ Cement the missing marker posts back into the ground (ส่งรถบำรุงรักษาพร้อมปูนซีเมนต์ออกไปปักเสาบอกระยะทางกลับเข้าที่พรุ่งนี้เช้า)'],
    ]),

    p3(30, 'l30-p3-4', [
      ['Woman1', 'us_f', 'Guys, Freight Dock B is completely backed up—seven exhibitor semi-trucks showed up together even though we issued timed unloading passes.'],
      ['Man', 'us_m2', 'Wait—why did they ignore their scheduled dock slots? Did our logistics portal send conflicting arrival times?'],
      ['Woman2', 'uk_f2', 'Actually, highway police closed two lanes north of Exit Twelve for emergency pothole patching, so morning trucks arrived bunched right behind afternoon trucks.'],
      ['Woman1', 'us_f', 'Oh! That explains the pileup. Let’s open overflow Freight Bay D immediately and divert empty crate vans over there so loaded exhibition trucks clear first.'],
      ['Man', 'us_m2', 'On it—I’ll grab two radio marshals and redirect waiting drivers down the south ramp right now.'],
    ], null, [
      ['Part 3 · Problem', 'What issue is happening at Freight Dock B?', [
        'Multiple exhibition delivery trucks arrived simultaneously causing gridlock',
        'Empty crate vans blocked access to Exit Twelve',
        'Dock B forklifts broke down during morning setup',
        'Logistics portal software crashed before passes printed',
      ], 0, 'ตอบ Multiple exhibition delivery trucks arrived simultaneously causing gridlock (รถบรรทุกผู้แสดงสินค้า 7 คันมาถึงพร้อมกันจนล้นท่าโหลด B)'],
      ['Part 3 · Cause', 'Why did trucks miss their assigned unloading times?', [
        'Emergency roadwork closures delayed earlier highway traffic',
        'Exhibitors received duplicate unloading passes by email',
        'Security guards closed the north convention gate early',
        'Drivers confused Freight Dock B with Freight Bay D',
      ], 0, 'ตอบ Emergency roadwork closures delayed earlier highway traffic (ตำรวจทางหลวงปิดซ่อมหลุมถนนสองเลนก่อนทางออก 12 ทำให้รถรอบเช้าติดสะสมมาชนกับรอบบ่าย)'],
      ['Part 3 · Meaning', 'What does the first woman mean when she says, "divert empty crate vans over there so loaded exhibition trucks clear first"?', [
        'Free up primary dock space by moving empty vehicles to overflow parking',
        'Ask loaded exhibitors to unpack wooden crates outdoors on the ramp',
        'Cancel afternoon deliveries until Dock B empties completely',
        'Transfer forklift crews away from Freight Bay D permanently',
      ], 0, 'ตอบ Free up primary dock space by moving empty vehicles to overflow parking (แยกรถตู้เปล่าไปท่าสำรอง Bay D เพื่อเปิดช่องทางหลักให้รถบรรทุกสินค้าที่ยังเต็มคันเข้าขนลงก่อน)'],
    ]),

    p3(30, 'l30-p3-5', [
      ['Woman', 'ca_f', 'Mark, Saturday’s first-time homebuyer eligibility clinic at Cedar Community Center already has sixty families signed up—nearly half requested Spanish or Vietnamese assistance.'],
      ['Man', 'au_m', 'We only have one Spanish-speaking counselor scheduled for Saturday morning! Could any staff from our downtown mortgage outreach team cover the afternoon shift?'],
      ['Woman', 'ca_f', 'Maria already volunteered for Spanish coverage, though we’re still short someone fluent in Vietnamese for income-verification worksheets.'],
      ['Man', 'au_m', 'Call Tuan Nguyen at our partner neighborhood legal clinic—he led two tax-prep clinics with us last spring and usually keeps Saturdays open for outreach.'],
    ], null, [
      ['Part 3 · Topic', 'What event are the speakers staffing for Saturday?', [
        'A community homebuyer eligibility workshop for sixty families',
        'A neighborhood tax-preparation seminar at a legal clinic',
        'A volunteer carpentry orientation at Cedar Community Center',
        'A municipal mortgage underwriting board meeting',
      ], 0, 'ตอบ A community homebuyer eligibility workshop for sixty families (จัดคลินิกให้คำปรึกษาสิทธิ์ผู้ซื้อบ้านหลังแรกวันเสาร์ซึ่งมี 60 ครอบครัวลงทะเบียนแล้ว)'],
      ['Part 3 · Problem', 'What staffing gap still needs to be filled?', [
        'A counselor fluent in Vietnamese for document reviews',
        'Additional Spanish translators for the morning shift',
        'Mortgage officers from the downtown bank branch',
        'Check-in clerks for Cedar Community Center',
      ], 0, 'ตอบ A counselor fluent in Vietnamese for document reviews (ยังขาดที่ปรึกษาที่สื่อสารภาษาเวียดนามได้สำหรับช่วยตรวจเอกสารรายได้)'],
      ['Part 3 · Proposal', 'Who does the man suggest contacting to fill the gap?', [
        'A volunteer attorney from a partner legal clinic',
        'An interpreter working at Saturday’s international summit',
        'A housing director from the municipal office',
        'A counselor on the downtown Spanish outreach team',
      ], 0, 'ตอบ A volunteer attorney from a partner legal clinic (เสนอให้โทรหา Tuan Nguyen จากคลินิกกฎหมายพันธมิตรที่เคยร่วมงานเมื่อฤดูใบไม้ผลิ)'],
    ]),

    p3(30, 'l30-p3-6', [
      ['Man', 'uk_m', 'Priya, look at Sunday’s cycling trail map right around the Oak Street railroad underpass—that concrete tunnel narrows sharply and curves blind onto the river bridge.'],
      ['Woman', 'us_f', 'Ooh, with four hundred riders expected for opening morning, cyclists speeding downhill could collide with families walking strollers!'],
      ['Man', 'uk_m', 'Exactly. What if we paint bright yellow "Slow & Walk Bikes" signs before the ramp and station two volunteer course marshals with handheld flags at both tunnel mouths?'],
      ['Woman', 'us_f', 'Great call—and let’s position a shaded hydration canopy fifty yards past the bridge so riders don’t stop inside the narrow exit lane.'],
    ], null, [
      ['Part 3 · Problem', 'What safety hazard did the man spot along Sunday’s cycling route?', [
        'A narrow curved tunnel leading onto a bridge creates collision risks',
        'Standing rainwater pooled beneath the Oak Street underpass',
        'Loose railroad gravel spilled across the downhill cycling ramp',
        'Bridge construction barriers restrict pedestrian stroller access',
      ], 0, 'ตอบ A narrow curved tunnel leading onto a bridge creates collision risks (อุโมงค์ลอดทางรถไฟ Oak Street แคบและโค้งอับสายตาก่อนขึ้นสะพาน เสี่ยงชนกัน)'],
      ['Part 3 · Proposal', 'How does the man suggest managing speed through the underpass?', [
        'Posting slow-down signs and placing flagged marshals at both ends',
        'Rerouting opening day cyclists onto adjacent city streets',
        'Blocking families with strollers from entering the tunnel',
        'Installing temporary speed bumps inside the concrete tube',
      ], 0, 'ตอบ Posting slow-down signs and placing flagged marshals at both ends (ติดป้ายชะลอและจูงจักรยานพร้อมวางอาสาสมัครถือธงคอยคุมที่ปากอุโมงค์ทั้งสองด้าน)'],
      ['Part 3 · Detail', 'Why will the hydration station be placed fifty yards past the bridge?', [
        'To keep thirsty cyclists from crowding the narrow bridge exit',
        'To find flat shaded ground near the Oak Street parking lot',
        'To keep water coolers close to volunteer marshal vehicles',
        'To avoid splashing runners along the riverbank stairs',
      ], 0, 'ตอบ To keep thirsty cyclists from crowding the narrow bridge exit (ตั้งจุดบริการน้ำห่างจากสะพานออกไป 50 หลาเพื่อไม่ให้คนจอดออกันตรงทางออกแคบๆ)'],
    ]),

    p3(30, 'l30-p3-7', [
      ['Woman', 'us_f2', 'Devon, Badge Printer Four in the Main Registration Foyer just flashed an empty ink-ribbon warning, and three hundred morning delegates are still checking in!'],
      ['Man', 'ca_m', 'Hold on—didn’t our vendor ship six extra thermal badge ribbon cartridges in Monday’s supply pallet?'],
      ['Woman', 'us_f2', 'They did, except our registration lead locked those cartons inside Security Closet C and went up to check Keynote Hall seating.'],
      ['Man', 'ca_m', 'I carry the master closet key ring on my belt! Keep delegates tapping on Printers One through Three while I sprint back with fresh ribbons in three minutes.'],
    ], null, [
      ['Part 3 · Problem', 'Why did Badge Printer Four stop operating during morning check-in?', [
        'Its printing ink ribbon ran out',
        'Its QR code scanner disconnected from Wi-Fi',
        'Blank cardstock badges jammed inside the feed tray',
        'Thermal heating elements overheated from heavy use',
      ], 0, 'ตอบ Its printing ink ribbon ran out (เครื่องพิมพ์ป้ายชื่อเครื่องที่ 4 ขึ้นเตือนหมึกริบบอนหมดระหว่างมีผู้ร่วมงานเช็กอินจำนวนมาก)'],
      ['Part 3 · Reason', 'Why could the woman not immediately swap in a spare cartridge?', [
        'Replacement ribbons are locked inside a closet held by an absent lead',
        'Vendor shipment pallets failed to arrive on Monday morning',
        'All backup cartridges were sent to Press Lounge registration',
        'Printer Four requires a specialized badge size out of stock',
      ], 0, 'ตอบ Replacement ribbons are locked inside a closet held by an absent lead (ตลับสำรองถูกล็อกไว้ในห้องเก็บของ C ซึ่งหัวหน้าทีมพกกุญแจขึ้นไปตรวจฮอลล์ใหญ่)'],
      ['Part 3 · Action', 'What does the man offer to retrieve from Security Closet C?', [
        'Unlock the storage closet and bring spare ribbons quickly',
        'Page the registration lead to return from Keynote Hall',
        'Handwrite temporary paper passes for waiting delegates',
        'Reboot Badge Printer Four from the security desk',
      ], 0, 'ตอบ Unlock the storage closet and bring spare ribbons quickly (ผู้ชายมีพวงกุญแจหลักติดตัวอยู่พอดี จึงอาสาวิ่งไปหยิบตลับหมึกมาให้ภายใน 3 นาที)'],
    ]),

    p3(30, 'l30-p3-8', [
      ['Man1', 'us_m', 'Team, our weekend volunteer carpenters are scheduled to hang drywall sheets inside the Cedar Avenue duplex starting eight A.M. Saturday.'],
      ['Woman', 'au_f', 'Wait—did the city plumbing inspector already sign off on the rough-in copper pipe pressure test yesterday afternoon?'],
      ['Man2', 'uk_m', 'Not quite—he caught one tiny pinhole sweat on a second-floor shower valve, so our master plumber re-soldered it last night and scheduled a re-inspection Friday morning at ten.'],
      ['Man1', 'us_m', 'Thank goodness you caught that! If we had nailed drywall up before Friday’s sign-off, we would have ripped down brand-new wallboard just for a two-minute look!'],
      ['Woman', 'au_f', 'True—let’s confirm the re-inspection passes Friday at noon before emailing Saturday’s drywall crew to show up.'],
    ], null, [
      ['Part 3 · Detail', 'What problem delayed final plumbing approval at the Cedar Avenue duplex?', [
        'A minor leak discovered on an upstairs shower valve joint',
        'Missing copper pipe pressure gauges during Thursday’s inspection',
        'Volunteers mistakenly hung drywall over exposed plumbing lines',
        'City inspectors postponed Friday’s schedule due to staffing shortages',
      ], 0, 'ตอบ A minor leak discovered on an upstairs shower valve joint (ผู้ตรวจพบจุดซึมเล็กๆ ตรงวาล์วฝักบัวชั้นสอง ช่างประปาจึงเชื่อมแก้ใหม่และนัดตรวจซ้ำเช้าวันศุกร์)'],
      ['Part 3 · Meaning', 'What does the first man mean when he says, "we would have ripped down brand-new wallboard just for a two-minute look"?', [
        'Hanging drywall before inspection sign-off would force costly rework',
        'City inspectors take too long examining copper shower pipes',
        'Weekend carpenters prefer inspecting pipes themselves before framing',
        'Drywall sheets at Cedar Avenue arrived damaged from the supplier',
      ], 0, 'ตอบ Hanging drywall before inspection sign-off would force costly rework (หากตีแผ่นยิปซัมปิดผนังก่อนผ่านการตรวจจะต้องรื้อผนังใหม่ทั้งหมดเพียงเพื่อให้เจ้าหน้าที่ดูจุดต่อแค่สองนาที)'],
      ['Part 3 · Decision', 'When will the woman notify Saturday’s drywall volunteers?', [
        'Friday at noon after the plumbing re-inspection passes',
        'Immediately after this team meeting ends',
        'Saturday morning at eight A.M. on site',
        'Thursday evening once the master plumber calls',
      ], 0, 'ตอบ Friday at noon after the plumbing re-inspection passes (รอให้ตรวจประปาซ้ำผ่านตอนเที่ยงวันศุกร์ก่อนแล้วค่อยส่งอีเมลนัดอาสาสมัครวันเสาร์)'],
    ]),

    p3(30, 'l30-p3-9', [
      ['Woman', 'uk_f', 'Sam, cyclists testing the new Trailhead Pavilion café patio noticed our new wave-shaped bike racks sit too close to the cedar railing—road bikes with long handlebars scrape the wood.'],
      ['Man', 'us_m2', 'Good feedback before Sunday’s crowd arrives! Are those racks bolted directly into the concrete slab, or weighted freestanding frames?'],
      ['Woman', 'uk_f', 'Bolted with four anchor screws each, though there’s thirty inches of empty concrete apron right in front of the racks toward the lawn.'],
      ['Man', 'us_m2', 'Easy fix—our parks crew can unbolt them, shift the whole rack line eighteen inches forward toward the lawn, and seal the old bolt holes tomorrow morning.'],
    ], null, [
      ['Part 3 · Problem', 'What issue did test cyclists notice near the café patio?', [
        'Bike handlebars rub against a wooden railing because racks sit too close',
        'Freestanding bike racks tip over on uneven concrete slabs',
        'Cedar railings block access to the Trailhead Pavilion entrance',
        'Narrow concrete aprons leave no space for tandem bicycles',
      ], 0, 'ตอบ Bike handlebars rub against a wooden railing because racks sit too close (ราวแขวนจักรยานติดชิดราวไม้ซีดาร์เกินไปทำให้แฮนด์จักรยานขูดโดนไม้)'],
      ['Part 3 · Detail', 'How are the bicycle racks currently secured?', [
        'Fastened into concrete with four anchor screws per rack',
        'Weighted down with freestanding gravel bases',
        'Welded directly onto the cedar patio railing',
        'Clamped along the edge of the pavilion lawn',
      ], 0, 'ตอบ Fastened into concrete with four anchor screws per rack (ยึดด้วยนอตพุกสี่ตัวต่อราวลงบนพื้นคอนกรีต)'],
      ['Part 3 · Action', 'How will the parks crew fix the spacing tomorrow morning?', [
        'Move the rack line eighteen inches forward and patch old holes',
        'Trim back eighteen inches of the cedar patio railing',
        'Install padded rubber bumpers along the wooden rails',
        'Relocate all bike racks inside the Trailhead Pavilion hall',
      ], 0, 'ตอบ Move the rack line eighteen inches forward and patch old holes (ถอนนอตแล้วย้ายแนวราวจอดถอยออกมาด้านหน้า 18 นิ้วและอุดรูเดิมให้เรียบร้อย)'],
    ]),

    p3(30, 'l30-p3-10', [
      ['Man', 'ca_m', 'Nina, a medical robotics exhibitor from Munich at Booth 308 just realized their diagnostic scanner runs on two-hundred-thirty-volt European power, and they packed no step-up transformers.'],
      ['Woman', 'us_f', 'Ugh, exhibitors always overlook North American outlet voltage! Did they request heavy industrial power drops on their pre-show electrical form?'],
      ['Man', 'ca_m', 'No—just standard wall outlets, yet their demo opens tomorrow morning at eight-thirty before local electronics stores even unlock.'],
      ['Woman', 'us_f', 'Check our convention electrical cage behind Hall B—our AV vendor keeps six rental two-thousand-watt step-up converters on standby for international exhibitors.'],
    ], null, [
      ['Part 3 · Problem', 'Why can the exhibitor at Booth 308 not run their medical scanner yet?', [
        'They lack voltage converters to match local electrical outlets',
        'Their pre-show electrical drop behind Hall B lost power',
        'Shipping pallets containing power cords stayed at customs',
        'Booth 308 lacks wall outlets near the demo stage',
      ], 0, 'ตอบ They lack voltage converters to match local electrical outlets (เครื่องสแกนจากมิวนิกใช้ไฟ 230 โวลต์แบบยุโรปและผู้แสดงสินค้าไม่ได้เตรียมหม้อแปลงมาด้วย)'],
      ['Part 3 · Detail', 'Why is buying a converter from a local retail shop impractical?', [
        'The booth demonstration starts before retail stores open tomorrow',
        'Local electronics stores do not carry medical-grade cords',
        'The exhibitor’s budget prohibits local equipment purchases',
        'Retail converters cannot exceed two hundred watts',
      ], 0, 'ตอบ The booth demonstration starts before retail stores open tomorrow (การสาธิตเริ่ม 08:30 น. พรุ่งนี้เช้าก่อนที่ร้านเครื่องใช้ไฟฟ้าท้องถิ่นจะเปิด)'],
      ['Part 3 · Proposal', 'Where might the man find compatible step-up converters right now?', [
        'Inside the AV vendor’s electrical storage cage behind Hall B',
        'At the main exhibitor registration desk in the lobby',
        'In Booth 308’s leftover shipping freight crates',
        'From another European robotics pavilion in Hall A',
      ], 0, 'ตอบ Inside the AV vendor’s electrical storage cage behind Hall B (ผู้จัดระบบภาพเสียงของศูนย์ประชุมเก็บหม้อแปลงเช่าขนาด 2,000 วัตต์ไว้ 6 เครื่องที่ห้องเก็บอุปกรณ์ไฟหลังฮอลล์ B)'],
    ]),

    p3(30, 'l30-p3-11', [
      ['Woman', 'uk_f2', 'Leo, the organizing committee for tomorrow’s Asia-Pacific Clean Energy Forum just bumped their attendee forecast up to one hundred ninety delegates.'],
      ['Man', 'us_m', 'One hundred ninety? Wait—originally we booked them into Cedar Hall, which tops out at one hundred fifty seats!'],
      ['Woman', 'uk_f2', 'Right, plus they require both built-in simultaneous translation booths and dedicated live-streaming fiber lines for overseas viewers.'],
      ['Man', 'us_m', 'Let’s pull up our unassigned breakout room sheet—only one open space handles that crowd size with both tech features built in. I’ll transfer their booking right away.'],
    ], doc('table', 'Conference Center Room Availability — Tomorrow', [['Building', 'East Wing'], ['Check', 'AV & Capacity']], [
      tbl(['Room Name', 'Theater Capacity', 'Translation Booths', 'Streaming Fiber', 'Status'], [
        ['Cedar Hall', '150', 'Yes', 'Yes', 'Booked'],
        ['Pacific Ballroom B', '220', 'Yes', 'Yes', 'Available'],
        ['Harbor Lecture Hall', '240', 'No', 'Yes', 'Available'],
        ['Summit Room 4', '200', 'Yes', 'No', 'Available'],
      ]),
    ]), [
      ['Part 3 · Problem', 'Why must the Clean Energy Forum move out of Cedar Hall?', [
        'Expected attendance now exceeds Cedar Hall’s 150-seat capacity',
        'Cedar Hall lacks built-in simultaneous translation booths',
        'Dedicated live-streaming cables in Cedar Hall need repairs',
        'Another international conference double-booked Cedar Hall',
      ], 0, 'ตอบ Expected attendance now exceeds Cedar Hall’s 150-seat capacity (ผู้เข้าร่วมเพิ่มเป็น 190 คนซึ่งเกินความจุ 150 ที่นั่งของ Cedar Hall)'],
      ['Part 3 · Graphic', 'Look at the graphic. Which room meets all of the forum’s requirements?', [
        'Pacific Ballroom B',
        'Harbor Lecture Hall',
        'Summit Room 4',
        'Cedar Hall',
      ], 0, 'ตอบ Pacific Ballroom B (ต้องจุได้อย่างน้อย 190 คน มีทั้งบูธแปลภาษา Translation Booths และสาย Streaming Fiber และสถานะว่าง ซึ่งมีเพียง Pacific Ballroom B เท่านั้น)'],
      ['Part 3 · Action', 'What will the man do to accommodate the expanded Clean Energy Forum?', [
        'Update the forum’s room assignment in the booking system',
        'Order portable translation booths for Harbor Lecture Hall',
        'Notify overseas viewers that live streaming is canceled',
        'Ask delegates to split into two separate morning sessions',
      ], 0, 'ตอบ Update the forum’s room assignment in the booking system (จะโอนย้ายการจองไปยังห้องที่ตรงเงื่อนไขทันที)'],
    ]),

    p3(30, 'l30-p3-12', [
      ['Man1', 'ca_m', 'Good news, team—the city housing authority just released emergency winterization grant money specifically for homes facing immediate heating furnace failure ahead of next week’s cold front.'],
      ['Woman', 'au_f', 'That’s a huge relief! Pull up our active neighborhood repair queue—we have an elderly resident living alone whose primary heat source failed yesterday.'],
      ['Man2', 'uk_m', 'Got it right here on screen—that single-person household needs furnace work completed before Friday, and look who our dispatch sheet assigns as the licensed heating contractor.'],
      ['Man1', 'ca_m', 'Awesome—I’ll phone that contractor immediately so they prioritize her home first thing tomorrow morning.'],
      ['Woman', 'au_f', 'And I’ll call the homeowner right afterward to let her know technicians arrive between eight and nine A.M.'],
    ], doc('table', 'Non-Profit Housing Urgent Repair Queue', [['Program', 'Senior Safe Home'], ['Week', 'Oct 21–25']], [
      tbl(['Address', 'Household', 'Urgent Repair Needed', 'Target Date', 'Assigned Contractor'], [
        ['142 Birch Lane', 'Family of 4', 'Leaky Roof Flashing', 'Oct 28', 'Apex Roofing'],
        ['89 Maple Court', '1 Senior', 'Heating Furnace Failure', 'Oct 24', 'NorthStar HVAC'],
        ['310 Oak Terrace', '2 Seniors', 'Broken Storm Door Latch', 'Oct 26', 'Metro Carpentry'],
        ['55 Willow Drive', 'Family of 3', 'Electrical Breaker Upgrade', 'Oct 29', 'BrightWire Electric'],
      ]),
    ]), [
      ['Part 3 · Topic', 'What type of emergency funding did the city housing authority release?', [
        'Grants to repair broken residential heating systems before cold weather',
        'Low-interest loans for replacing leaky apartment roof shingles',
        'Vouchers covering senior electrical breaker box upgrades',
        'Subsidies for storm door weatherproofing across four streets',
      ], 0, 'ตอบ Grants to repair broken residential heating systems before cold weather (เงินทุนฉุกเฉินสำหรับบ้านที่เตาทำความร้อนเสียก่อนคลื่นความหนาวสัปดาห์หน้า)'],
      ['Part 3 · Graphic', 'Look at the graphic. Which contractor will the first man telephone immediately?', [
        'NorthStar HVAC',
        'Apex Roofing',
        'Metro Carpentry',
        'BrightWire Electric',
      ], 0, 'ตอบ NorthStar HVAC (บ้านที่ผู้สูงอายุอยู่คนเดียวและเตาทำความร้อนเสียคือ 89 Maple Court ซึ่งผู้รับเหมาที่ได้รับมอบหมายคือ NorthStar HVAC)'],
      ['Part 3 · Action', 'What will the woman do after the contractor is contacted?', [
        'Call the homeowner to confirm tomorrow’s arrival window',
        'Visit 89 Maple Court to deliver portable electric heaters',
        'Submit completed winterization receipts to the city office',
        'Reschedule roof repairs on Birch Lane until next week',
      ], 0, 'ตอบ Call the homeowner to confirm tomorrow’s arrival window (โทรแจ้งเจ้าของบ้านให้ทราบว่าช่างจะเข้าซ่อมช่วงแปดถึงเก้าโมงเช้าวันพรุ่งนี้)'],
    ]),

    p3(30, 'l30-p3-13', [
      ['Woman', 'us_f', 'Marcus, local parent groups keep calling about Sunday’s Riverbend Cycling Trail opening—many want an easy beginner ride pulling young kids in bike trailers.'],
      ['Man', 'us_m2', 'They definitely shouldn’t attempt any steep crushed-gravel climb! Check our trail segment guide—we should point families straight to the flat paved riverside section with shaded rest stops.'],
      ['Woman', 'us_f', 'Ooh, let’s highlight that exact segment on our opening day flyer and add a dedicated stroller-and-trailer parking corral beside its start kiosk.'],
      ['Man', 'us_m2', 'Great idea—I’ll deliver extra traffic cones and volunteer marshal vests to that trailhead kiosk tomorrow afternoon.'],
    ], doc('box', 'Riverbend Cycling Trail — Opening Day Segments', [['Total Loop', '12 Miles'], ['Event', 'Sunday Ride']], [
      box('Trail Segment Guide', [
        'Segment A (Harbor Pier → Cedar Grove, 2.5 mi) — Flat Asphalt | Shaded Benches & Café',
        'Segment B (Cedar Grove → Quarry Ridge, 3.5 mi) — Steep Crushed Gravel | Scenic Overlook',
        'Segment C (Quarry Ridge → Willow Dam, 3.0 mi) — Rolling Dirt Track | Narrow Wooden Bridges',
        'Segment D (Willow Dam → Oak Park, 3.0 mi) — Unshaded Concrete | Busy Road Crossings',
      ]),
    ]), [
      ['Part 3 · Audience', 'Which riders are the speakers planning a safe route recommendation for?', [
        'Families riding with young children in bicycle trailers',
        'Experienced mountain bikers seeking steep gravel climbs',
        'Downtown commuters racing across the twelve-mile loop',
        'Volunteer course marshals patrolling wooden bridges',
      ], 0, 'ตอบ Families riding with young children in bicycle trailers (กลุ่มครอบครัวที่พาลูกเล็กนั่งรถพ่วงจักรยานมาปั่นร่วมวันเปิดเส้นทาง)'],
      ['Part 3 · Graphic', 'Look at the graphic. Which trail segment will the speakers highlight for those families?', [
        'Segment A',
        'Segment B',
        'Segment C',
        'Segment D',
      ], 0, 'ตอบ Segment A (ผู้ชายแนะนำช่วงทางเรียบลาดยางเลียบแม่น้ำที่มีม้านั่งพักร่มรื่นและหลีกเลี่ยงทางกรวดชัน ซึ่งตรงกับ Segment A: Flat Asphalt | Shaded Benches & Café)'],
      ['Part 3 · Action', 'What will the man drop off at that segment’s start kiosk tomorrow afternoon?', [
        'Traffic cones and volunteer safety vests',
        'Extra bicycle trailers and child helmets',
        'Shaded benches and bottled water cases',
        'Printed trail flyers and café discount coupons',
      ], 0, 'ตอบ Traffic cones and volunteer safety vests (จะนำกรวยจราจรและเสื้อกั๊กอาสาสมัครไปส่งไว้ที่ซุ้มเริ่มต้นเส้นทางช่วงบ่ายพรุ่งนี้)'],
    ]),

    // Set 30 Part 4 (10 Talks × 3 Qs = 30 Qs; Talks 8-10 with Graphics)
    p4(30, 'l30-p4-1', 'the following conference hall announcement', 'uk_f',
      'Good morning, delegates attending the Global Urban Mobility Summit. Please note one room change for our ten-thirty morning plenary on Zero-Emission Transit Networks. Due to overwhelming delegate demand, that session has moved across the main foyer from Summit Room Three to Grand Keynote Hall B, doubling available seating. Simultaneous translation headsets in French, Japanese, and Spanish remain available at the glass kiosk outside Hall B—simply scan your conference badge upon pickup.',
      null, [
        ['Part 4 · Topic', 'Why was the 10:30 A.M. plenary session moved to a larger room?', [
          'More attendees wanted to attend than Summit Room Three could hold',
          'Audio equipment inside Summit Room Three malfunctioned overnight',
          'Simultaneous translation booths were only wired in Hall B',
          'Morning catering tables blocked the Summit Room Three doors',
        ], 0, 'ตอบ More attendees wanted to attend than Summit Room Three could hold (ผู้เข้าร่วมสนใจล้นหลามจึงย้ายไป Grand Keynote Hall B เพื่อเพิ่มที่นั่งเป็นสองเท่า)'],
        ['Part 4 · Detail', 'Where is Grand Keynote Hall B located relative to Summit Room Three?', [
          'Across the main conference foyer',
          'One floor directly upstairs',
          'Behind the West Freight Corridor',
          'Beside the outdoor transit plaza',
        ], 0, 'ตอบ Across the main conference foyer (อยู่ฝั่งตรงข้ามโถงกลาง main foyer)'],
        ['Part 4 · Action', 'What must delegates do to borrow a translation headset?', [
          'Scan their conference badge at the glass kiosk',
          'Leave a passport deposit with room ushers',
          'Reserve a language channel on the summit app',
          'Exchange paper session tickets before ten-thirty',
        ], 0, 'ตอบ Scan their conference badge at the glass kiosk (เพียงสแกนบัตรประจำตัวผู้ร่วมประชุมที่ซุ้มกระจกหน้า Hall B)'],
      ]),

    p4(30, 'l30-p4-2', 'the following recorded telephone message', 'us_m',
      'Thank you for calling Heartland Community Housing Partners. Our neighborhood home-repair and energy-efficiency grant window for low-income homeowners reopens Monday through Friday from nine A.M. until four P.M. Walk-in applicants are welcome at our Cedar Street intake office on Wednesdays without an appointment; please bring photo identification, proof of residency, and your two most recent household utility bills. To check an existing application status, enter your six-digit case number now.',
      null, [
        ['Part 4 · Detail', 'When may homeowners apply in person without scheduling an appointment first?', [
          'On Wednesdays between nine A.M. and four P.M.',
          'Any weekday morning before noon',
          'On Monday and Friday afternoons only',
          'During Saturday community intake clinics',
        ], 0, 'ตอบ On Wednesdays between nine A.M. and four P.M. (เปิดรับผู้ยื่นเรื่องแบบ walk-in ไม่ต้องนัดหมายในวันพุธ)'],
        ['Part 4 · Detail', 'Which document should applicants bring alongside photo ID and proof of residency?', [
          'Their two latest household utility statements',
          'A signed contractor repair estimate',
          'Previous year municipal property tax receipts',
          'Bank mortgage pre-approval paperwork',
        ], 0, 'ตอบ Their two latest household utility statements (ให้นำบิลค่าสาธารณูปโภคในบ้านสองเดือนล่าสุดมาด้วย)'],
        ['Part 4 · Action', 'How can callers look up an application already under review?', [
          'By keying in their six-digit case code',
          'By leaving a voicemail with their street address',
          'By pressing zero to reach Cedar Street reception',
          'By visiting the online energy portal on Mondays',
        ], 0, 'ตอบ By keying in their six-digit case code (กดหมายเลขเคส 6 หลักผ่านระบบโทรศัพท์เพื่อตรวจสอบสถานะได้ทันที)'],
      ]),

    p4(30, 'l30-p4-3', 'the following trail opening welcome speech', 'au_m',
      'Good morning, cyclists, neighbors, and parks volunteers! Today marks a proud milestone for our city as we cut the ribbon on the twelve-mile Riverbend Cycling Trail. Five years ago, this corridor was an overgrown railway right-of-way cut off from our waterfront neighborhoods. Now, twelve continuous miles of smooth asphalt link six public parks, three commuter train stations, and four brand-new solar bike-share docks—giving thousands of residents a safe, scenic route to work and recreation.',
      null, [
        ['Part 4 · Topic', 'What city amenity is being dedicated today?', [
          'A twelve-mile paved riverside bicycle path',
          'A restored historic passenger train line',
          'A downtown park-and-ride transit terminal',
          'A weekend farmers’ market pavilion along the river',
        ], 0, 'ตอบ A twelve-mile paved riverside bicycle path (พิธีตัดริบบิ้นเปิดเส้นทางปั่นจักรยานลาดยางเลียบแม่น้ำยาว 12 ไมล์)'],
        ['Part 4 · Detail', 'What used to occupy the land where the cycling trail now runs?', [
          'An abandoned, overgrown railway corridor',
          'A series of waterfront parking garages',
          'An industrial gravel freight highway',
          'Private residential backyards along six parks',
        ], 0, 'ตอบ An abandoned, overgrown railway corridor (เมื่อ 5 ปีก่อนเคยเป็นแนวทางรถไฟรกร้างที่ถูกตัดขาดจากชุมชนริมน้ำ)'],
        ['Part 4 · Detail', 'How many solar-powered bike-share docks connect with the new trail?', [
          'Four',
          'Three',
          'Six',
          'Twelve',
        ], 0, 'ตอบ Four (เชื่อมโยงกับสถานีจักรยานสาธารณะพลังงานแสงอาทิตย์ใหม่ 4 จุด)'],
      ]),

    p4(30, 'l30-p4-4', 'the following excerpt from an event logistics meeting', 'ca_f',
      'Before we publish next month’s medical expo exhibitor guide, let’s fix the freight dock chaos we saw during October’s industrial show. Because every large booth driver arrived right at eight A.M., trucks idled down two city blocks waiting for forklifts. Next month, our logistics portal will assign staggered forty-five-minute arrival slots tied directly to hall aisle letters, and drivers arriving early wait in the North Staging Lot. Putting teeth into timed passes keeps everyone moving safely.',
      null, [
        ['Part 4 · Problem', 'What issue occurred during October’s industrial expo setup?', [
          'Simultaneous truck arrivals caused traffic backups along city streets',
          'Forklift operators lacked enough pallets for medical booth crates',
          'Drivers arrived late because the North Staging Lot flooded',
          'Hall aisle letters were left off the exhibitor logistics portal',
        ], 0, 'ตอบ Simultaneous truck arrivals caused traffic backups along city streets (รถบรรทุกทุกคันมาพร้อมกันแปดโมงเช้าจนรถติดยาวไปสองช่วงตึก)'],
        ['Part 4 · Proposal', 'How will next month’s arrival passes be organized?', [
          'In forty-five-minute staggered windows matched to exhibition aisles',
          'First-come, first-served starting at six A.M. inside Dock B',
          'Grouped strictly by booth crate weight above two tons',
          'Split evenly between morning local vans and evening semi-trucks',
        ], 0, 'ตอบ In forty-five-minute staggered windows matched to exhibition aisles (จัดรอบเวลาเหลื่อมกันทีละ 45 นาทีผูกตามตัวอักษรทางเดินบูธในฮอลล์)'],
        ['Part 4 · Meaning', 'What does the speaker mean when she says, "Putting teeth into timed passes keeps everyone moving safely"?', [
          'Strictly enforcing arrival windows prevents dangerous dock congestion',
          'Adding barcode scanners at gate doors speeds up truck unloading',
          'Hiring extra forklift mechanics keeps freight tools sharp',
          'Penalizing exhibitors financially raises revenue for staging lots',
        ], 0, 'ตอบ Strictly enforcing arrival windows prevents dangerous dock congestion (การบังคับใช้เวลาเข้าจอดอย่างจริงจังโดยให้คันที่มาก่อนเวลาไปรอที่ลานพักรถจะช่วยให้การทำงานปลอดภัยและไม่ติดขัด)'],
      ]),

    p4(30, 'l30-p4-5', 'the following volunteer construction briefing', 'us_m2',
      'Morning, weekend crew—welcome to House Seventeen on Pine Street. Before pairing up inside the kitchen and bathrooms, listen closely to today’s water-saving fixture checklist. Every older faucet aerator and worn exterior door seal we replace today trims roughly two hundred dollars off the homeowner’s annual utility bills. Please test each newly tightened sink supply line with a dry paper towel beneath the valve for sixty seconds before moving on to the next room.',
      null, [
        ['Part 4 · Audience', 'Who is the speaker briefing at House Seventeen?', [
          'Home renovation volunteers working on a community housing project',
          'Licensed city plumbers inspecting new Pine Street duplexes',
          'Hardware store clerks assembling weatherization supply kits',
          'Prospective homeowners touring finished affordable residences',
        ], 0, 'ตอบ Home renovation volunteers working on a community housing project (บรรยายสรุปอาสาสมัครช่างสุดสัปดาห์ก่อนเข้าปรับปรุงบ้านเลขที่ 17)'],
        ['Part 4 · Detail', 'What financial benefit do the new faucet and door upgrades provide homeowners?', [
          'Lower annual water and energy utility costs',
          'Higher city property tax deductions in winter',
          'Rebates covering full kitchen plumbing labor',
          'Discounted insurance rates for older homes',
        ], 0, 'ตอบ Lower annual water and energy utility costs (ช่วยประหยัดค่าสาธารณูปโภคให้เจ้าของบ้านราวปีละ 200 ดอลลาร์)'],
        ['Part 4 · Action', 'How should volunteers verify sink pipe connections before leaving a room?', [
          'Hold a dry paper towel under the valve for one minute to check for drips',
          'Run hot water at full pressure for five consecutive minutes',
          'Photograph the tightened brass valve for the crew supervisor',
          'Wrap plumber’s tape around exterior door frame hinges',
        ], 0, 'ตอบ Hold a dry paper towel under the valve for one minute to check for drips (ใช้กระดาษทิชชูแห้งรองใต้สายน้ำดีวาล์วนาน 60 วินาทีเพื่อตรวจว่าไม่มีน้ำซึม)'],
      ]),

    p4(30, 'l30-p4-6', 'the following radio community announcement', 'uk_m',
      'Planning to ride in this Sunday’s Riverbend Trail Grand Opening Celebration? Don’t wait until Sunday morning to pump low tires or adjust squeaky brakes! All day Saturday from ten to four, volunteer mechanics from City Bike Co-op are hosting free safety tune-up tents at Oak Park and Downtown Pier. Bring your bike for complimentary brake checks, chain lubrication, and proper child-helmet sizing—no registration needed, just roll right up and ride safer Sunday.',
      null, [
        ['Part 4 · Topic', 'What service is being promoted for this Saturday?', [
          'Free bicycle safety inspections and minor tune-ups before Sunday’s event',
          'Discounted rentals for electric commuter bikes at Downtown Pier',
          'Guided Saturday practice rides along the Riverbend Trail loop',
          'On-site helmet sales inside the Oak Park community pavilion',
        ], 0, 'ตอบ Free bicycle safety inspections and minor tune-ups before Sunday’s event (ชวนนำจักรยานมาตรวจเช็กเบรก หยอดน้ำมันโซ่ และปรับขนาดหมวกฟรีในวันเสาร์ก่อนวันปั่นจริง)'],
        ['Part 4 · Detail', 'Where can cyclists find the volunteer mechanic tents?', [
          'At Oak Park and Downtown Pier',
          'At Mile Marker Five and Willow Dam',
          'Outside the Cedar Avenue community office',
          'Inside the Riverbend Trailhead underground garage',
        ], 0, 'ตอบ At Oak Park and Downtown Pier (ตั้งเต็นท์อาสาสมัครที่สวน Oak Park และท่าเรือ Downtown Pier)'],
        ['Part 4 · Detail', 'What do cyclists need to do in advance to receive Saturday’s tune-up?', [
          'No advance sign-up is required',
          'Download a rider barcode from the city parks site',
          'Bring proof of Sunday opening ride registration',
          'Purchase replacement brake pads beforehand',
        ], 0, 'ตอบ No advance sign-up is required (ผู้ประกาศย้ำว่าไม่ต้องลงทะเบียนล่วงหน้า สามารถเข็นรถเข้ามาได้เลย)'],
      ]),

    p4(30, 'l30-p4-7', 'the following voicemail message', 'us_f2',
      'Hi Arthur, this is Diana from Convention AV Services calling about tomorrow morning’s Global Trade Keynote in Ballroom C. I just finished testing both wireless lapel microphones and the stage speaker confidence monitor—everything came through crisp with zero feedback. However, the keynote speaker’s assistant emailed asking for a green laser pointer built into the slide advancer remote, so I swapped out our standard black clicker and left two fresh spare batteries taped under the lectern shelf.',
      null, [
        ['Part 4 · Topic', 'Why is Diana calling Arthur?', [
          'To confirm Ballroom C audio tests and explain a stage clicker swap',
          'To report microphone feedback during rehearsals in Ballroom C',
          'To ask whether the keynote speaker prefers a handheld microphone',
          'To request fresh batteries from Convention AV inventory',
        ], 0, 'ตอบ To confirm Ballroom C audio tests and explain a stage clicker swap (โทรยืนยันว่าเทสต์เสียงเรียบร้อยแล้วและแจ้งว่าเปลี่ยนรีโมตสไลด์เป็นรุ่นที่มีพอยน์เตอร์แสงสีเขียวให้ตามที่ผู้ช่วยวิทยากรขอ)'],
        ['Part 4 · Detail', 'What feature did the keynote speaker’s team specifically request?', [
          'A slide remote equipped with a green laser pointer',
          'A backup confidence monitor beside the stage stairs',
          'Two wired podium microphones instead of lapel units',
          'Longer stage cables under the speaker’s lectern',
        ], 0, 'ตอบ A slide remote equipped with a green laser pointer (ขอตัวกดสไลด์ที่มีเลเซอร์พอยน์เตอร์สีเขียวในตัว)'],
        ['Part 4 · Detail', 'Where did Diana store extra batteries for the remote?', [
          'Taped underneath the stage lectern shelf',
          'Inside the Ballroom C AV flight case',
          'At the front registration check-in counter',
          'Beside the sound technician’s mixing console',
        ], 0, 'ตอบ Taped underneath the stage lectern shelf (ติดเทปเก็บถ่านสำรองสองก้อนไว้ใต้ชั้นวางของแท่นบรรยาย)'],
      ]),

    p4(30, 'l30-p4-8', 'the following shuttle timetable and conference notice', 'ca_m',
      'Good morning, international conference delegates! Thanks to heavier-than-expected morning registration, we expanded complimentary hotel shuttle loops between partner lodgings and our West Convention Entrance. If you are staying at the Grand Harbor Inn and require a wheelchair-accessible lift van running every twenty minutes throughout the day, please wait under the blue Canopy Two flag outside your hotel lobby rather than walking to the main boulevard stop. Simply show your delegate badge to board.',
      doc('table', 'Conference Center Hotel Shuttle Schedule', [['Pickup Point', 'West Entrance'], ['Fare', 'Free w/ Badge']], [
        tbl(['Route Color', 'Hotel Served', 'Frequency', 'Hours', 'Wheelchair Lift'], [
          ['Red Line', 'Grand Harbor Inn', 'Every 15 min', '6:30 A.M.–9:30 P.M.', 'No (Coach Bus)'],
          ['Blue Line', 'Grand Harbor Inn', 'Every 20 min', '6:30 A.M.–10:00 P.M.', 'Yes (Lift Van)'],
          ['Green Line', 'Bayside Suites', 'Every 20 min', '7:00 A.M.–9:00 P.M.', 'Yes (Lift Van)'],
          ['Gold Line', 'Civic Plaza Hotel', 'Every 30 min', '6:45 A.M.–9:30 P.M.', 'No (Mini-Bus)'],
        ]),
      ]), [
        ['Part 4 · Reason', 'Why did organizers expand the complimentary hotel shuttle schedule?', [
          'Higher morning delegate turnout increased transportation demand',
          'City roadwork blocked public buses along the main boulevard',
          'Heavy rain flooded walkways near the West Convention Entrance',
          'Bayside Suites requested earlier evening return trips',
        ], 0, 'ตอบ Higher morning delegate turnout increased transportation demand (ผู้เข้าร่วมลงทะเบียนช่วงเช้าหนาแน่นกว่าที่คาดจึงขยายรอบรถรับส่งโรงแรม)'],
        ['Part 4 · Graphic', 'Look at the graphic. Which shuttle route serves Grand Harbor Inn with wheelchair lift access?', [
          'Blue Line',
          'Red Line',
          'Green Line',
          'Gold Line',
        ], 0, 'ตอบ Blue Line (ตารางระบุเส้นทางที่รับจาก Grand Harbor Inn ออกทุก 20 นาที และมีลิฟต์รถเข็น Yes (Lift Van) คือ Blue Line)'],
        ['Part 4 · Detail', 'What must delegates show the driver when boarding?', [
          'Their conference delegate badge',
          'A Grand Harbor Inn hotel keycard',
          'A printed shuttle pass from Canopy Two',
          'Mobile confirmation from the conference app',
        ], 0, 'ตอบ Their conference delegate badge (เพียงแสดงบัตรผู้เข้าร่วมประชุม badge ให้คนขับดูก็ขึ้นรถได้ฟรี)'],
      ]),

    p4(30, 'l30-p4-9', 'the following inspection checklist and team update', 'uk_f2',
      'Hey Carlos, it’s Rosa calling from Unit Four at the Maple Street community housing duplex. Our Saturday volunteer crews wrapped up remarkably fast today—plumbers finished testing water-heater relief valves, electricians verified every kitchen outlet, and inspectors signed off on all hallway smoke alarms. Before we invite the incoming family for tomorrow’s move-in walkthrough and hand over front-door keys, could you head over with our final checklist form to tackle that remaining cleanliness step?',
      doc('list', 'Community Housing Move-In Readiness Checklist', [['Unit', 'Maple Duplex #4'], ['Target', 'Tomorrow 10 A.M.']], [
        lst([
          '1. Pressure-test water heater relief valve and bathroom sink lines',
          '2. Verify kitchen ground-fault electrical outlets with test meter',
          '3. Confirm interconnected smoke and carbon-monoxide alarms',
          '4. Mop sealed hardwood floors and wipe dust off window sills',
          '5. Conduct final walkthrough and hand front-door keys to resident family',
        ]),
      ]), [
        ['Part 4 · Detail', 'Which inspections have already been completed inside Unit Four?', [
          'Plumbing valve tests, electrical outlet checks, and alarm verification',
          'Floor mopping, window sill wiping, and front-door lock changes',
          'Roof shingle sealing and outdoor siding touch-ups',
          'Family move-in walkthrough and utility account setup',
        ], 0, 'ตอบ Plumbing valve tests, electrical outlet checks, and alarm verification (ช่างประปา ไฟฟ้า และสัญญาณเตือนควันตรวจผ่านครบข้อ 1–3 แล้ว)'],
        ['Part 4 · Graphic', 'Look at the graphic. Which step does Rosa ask Carlos to complete before tomorrow’s key handover?', [
          'Step 4',
          'Step 2',
          'Step 3',
          'Step 5',
        ], 0, 'ตอบ Step 4 (Rosa ขอให้มาช่วยทำขั้นตอนความสะอาดก่อนส่งมอบกุญแจในขั้นที่ 5 ซึ่งตรงกับ Step 4: ถูพื้นไม้และเช็ดฝุ่นขอบหน้าต่าง)'],
        ['Part 4 · Detail', 'When is the resident family scheduled to take possession of Unit Four?', [
          'Tomorrow morning at ten o’clock',
          'Late this Saturday afternoon',
          'Monday morning at nine o’clock',
          'Next Friday after final grading',
        ], 0, 'ตอบ Tomorrow morning at ten o’clock (หัวข้อตารางระบุกำหนดเวลา Target: Tomorrow 10 A.M.)'],
      ]),

    p4(30, 'l30-p4-10', 'the following trail directory and radio bulletin', 'us_f',
      'Attention, cyclists planning to ride the Riverbend Cycling Trail during tomorrow’s grand opening festival! While every paved mile from Pier Zero through Oak Park is open and sweeping clean, parks plumbers had to shut off water at the midpoint rest kiosk near Mile Six until Monday afternoon to flush a new main pipe. If your water bottles run low halfway through the loop, keep pedaling to the very next shelter equipped with both cold chilled drinking taps and solar bike-repair tools.',
      doc('box', 'Riverbend Trail — Station Amenities Directory', [['Trail Length', '12 Miles'], ['Update', 'Opening Weekend']], [
        box('Service Kiosks Along Route', [
          'Mile 0 (Harbor Pier) — Visitor Booth, Bike-Share Dock & Public Restrooms',
          'Mile 3 (Cedar Bridge) — Shaded Picnic Tables & Espresso Cart (No Water Tap)',
          'Mile 6 (Midpoint Grove) — Drinking Fountain (Shut Off Until Monday) & First Aid',
          'Mile 9 (Willow Overlook) — Chilled Water Refill Station, Solar Air Pump & Chain Tools',
          'Mile 12 (Oak Park) — Bike-Share Dock, Trail Café & Bus Terminal',
        ]),
      ]), [
        ['Part 4 · Problem', 'Why is water unavailable at the Mile Six rest kiosk this weekend?', [
          'Maintenance workers closed the supply line to flush a newly installed pipe',
          'Freezing overnight weather cracked the outdoor drinking fountain',
          'Construction crews have not connected Mile Six plumbing yet',
          'Solar pumps at Midpoint Grove ran low on battery power',
        ], 0, 'ตอบ Maintenance workers closed the supply line to flush a newly installed pipe (ช่างประปาของสวนปิดน้ำชั่วคราวจนถึงวันจันทร์เพื่อล้างท่อเมนใหม่)'],
        ['Part 4 · Graphic', 'Look at the graphic. At which trail marker should riders stop for both cold water refills and bike repair tools?', [
          'Mile 9',
          'Mile 0',
          'Mile 3',
          'Mile 12',
        ], 0, 'ตอบ Mile 9 (จุดพักถัดจาก Mile 6 ที่มีทั้งน้ำดื่มเย็น Chilled Water Refill Station ที่สูบลมและเครื่องมือซ่อมโซ่คือ Mile 9: Willow Overlook)'],
        ['Part 4 · Detail', 'When will normal water service resume at Midpoint Grove?', [
          'On Monday afternoon',
          'Before Sunday’s morning ride starts',
          'Later tomorrow evening',
          'Next Saturday morning',
        ], 0, 'ตอบ On Monday afternoon (ประกาศระบุปิดน้ำจนถึงบ่ายวันจันทร์)'],
      ]),
  ];
})();
if (typeof module !== 'undefined') module.exports = { TOEIC_LISTEN_VOL6: globalThis.TOEIC_LISTEN_VOLS[6] };
