// Volume 5 of TOEIC Listening Mock Exams (Sets 21-25, 270 tracks = 500 Qs)
globalThis.TOEIC_LISTEN_VOLS = globalThis.TOEIC_LISTEN_VOLS || {};
globalThis.TOEIC_LISTEN_VOLS[5] = (() => {
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
    // ==================== SET 21 ====================
    p1(21, 'l21-p1-1', 'us_f', [
      'A lab technician is holding a glass sample vial up toward the light.',
      'Several empty cardboard cartons are stacked near an open loading door.',
      'A researcher is wiping down a stainless steel sink with a cloth.',
      'Two scientists are shaking hands across a laboratory workbench.',
    ], 0, 'ตอบ A lab technician is holding a glass sample vial up toward the light. (เจ้าหน้าที่ห้องแล็บกำลังยกขวดแก้วตัวอย่างขึ้นส่องดูกับแสง)'),
    p1(21, 'l21-p1-2', 'uk_m', [
      'A warehouse worker is taping shut an insulated shipping box.',
      'Forklift operators are unloading wooden crates onto a driveway.',
      'Plastic bottles are falling off an elevated conveyor belt.',
      'A driver is locking the rear doors of a refrigerated van.',
    ], 0, 'ตอบ A warehouse worker is taping shut an insulated shipping box. (พนักงานคลังสินค้ากำลังใช้เทปปิดกล่องเก็บความเย็น)'),
    p1(21, 'l21-p1-3', 'au_f', [
      'Two colleagues are looking at a digital tablet beside an upright freezer.',
      'A repair technician is replacing a thermostat dial on a brick wall.',
      'Medical charts have been spread across a crowded reception desk.',
      'Protective goggles are hanging in a row above a washbasin.',
    ], 0, 'ตอบ Two colleagues are looking at a digital tablet beside an upright freezer. (เพื่อนร่วมงานสองคนกำลังดูข้อมูลบนแท็บเล็ตข้างตู้แช่แข็งทรงตั้ง)'),
    p1(21, 'l21-p1-4', 'ca_m', [
      'Metal cold-storage canisters are arranged along a numbered shelving unit.',
      'Clinical volunteers are seated along a sunlit clinic hallway.',
      'Glass beakers have been overturned inside a wooden cabinet.',
      'A janitor is mopping water off a concrete warehouse floor.',
    ], 0, 'ตอบ Metal cold-storage canisters are arranged along a numbered shelving unit. (ถังโลหะเก็บความเย็นถูกจัดวางเรียงเป็นระเบียบบนชั้นวางที่มีหมายเลขกำกับ)'),
    p1(21, 'l21-p1-5', 'us_m', [
      'A gloved inspector is scanning barcode labels on stacked medical boxes.',
      'Pharmacists are placing prescription bags onto a wooden counter.',
      'An office clerk is sorting thick folders into a metal cabinet.',
      'Workers are assembling cardboard partitions on a factory floor.',
    ], 0, 'ตอบ A gloved inspector is scanning barcode labels on stacked medical boxes. (ผู้ตรวจสอบที่สวมถุงมือกำลังสแกนบาร์โค้ดบนกล่องเวชภัณฑ์ที่วางซ้อนกัน)'),
    p1(21, 'l21-p1-6', 'uk_f2', [
      'Two staff members are pulling a loaded pallet jack across a shipping bay.',
      'Boxes of sterile gloves are piled underneath a waiting room bench.',
      'A truck driver is refueling a delivery vehicle at an outdoor pump.',
      'Technicians are calibrating microscope lenses at separate stations.',
    ], 0, 'ตอบ Two staff members are pulling a loaded pallet jack across a shipping bay. (พนักงานสองคนกำลังลากรถลากพาเลตที่มีสินค้าข้ามพื้นที่โหลดของ)'),

    // Set 21 Part 2 (25 Qs)
    p2(21, 'l21-p2-1', 'uk_f', 'us_m', 'Where are the calibrated temperature loggers stored?', ['In the locked drawer beneath the cold-room monitor.', 'Before Tuesday’s regulatory inspection starts.', 'Every six months by an outside vendor.'], 0, 'ตอบ In the locked drawer beneath the cold-room monitor. (ถามสถานที่ Where ตอบตำแหน่งที่เก็บเครื่องบันทึกอุณหภูมิในลิ้นชักล็อกใต้จอ)'),
    p2(21, 'l21-p2-2', 'us_m2', 'au_f', 'Who signed the batch release paperwork for Trial Group C?', ['Dr. Patel approved it before lunch.', 'Yes, the clinical sample arrived cold.', 'Forty-two sealed boxes altogether.'], 0, 'ตอบ Dr. Patel approved it before lunch. (ถามบุคคล Who ตอบชื่อผู้เซ็นอนุมัติคือ Dr. Patel)'),
    p2(21, 'l21-p2-3', 'ca_f', 'uk_m', 'When will the dry-ice courier arrive at Dock Four?', ['Right beside the freight elevator.', 'Expected around two-thirty this afternoon.', 'Because the highway bridge had a lane closure.'], 1, 'ตอบ Expected around two-thirty this afternoon. (ถามเวลา When ตอบเวลามาถึงโดยประมาณบ่ายสองโมงครึ่ง)'),
    p2(21, 'l21-p2-4', 'au_m', 'us_f', 'Why was the morning participant screening moved to Clinic Room B?', ['They’re sanitizing Room A’s air filtration unit.', 'Only participants under forty-five.', 'By checking their laminated wristband numbers.'], 0, 'ตอบ They’re sanitizing Room A’s air filtration unit. (ถามเหตุผล Why ตอบเพราะกำลังฆ่าเชื้อระบบกรองอากาศในห้อง A)'),
    p2(21, 'l21-p2-5', 'us_f2', 'ca_m', 'How many insulated foam liners do we have left in Bay Two?', ['About eighty, enough for Friday’s dispatch.', 'Two degrees Celsius above freezing.', 'Yes, we switched to thicker tape.'], 0, 'ตอบ About eighty, enough for Friday’s dispatch. (ถามจำนวน How many ตอบมีเหลือประมาณ 80 ชิ้น พอสำหรับวันศุกร์)'),
    p2(21, 'l21-p2-6', 'uk_m', 'us_f', 'Should we ship the baseline blood vials by overnight air or refrigerated van?', ['Overnight air gets them to Boston by nine A.M.', 'Both freezers passed last week’s audit.', 'Inside the amber biohazard bags.'], 0, 'ตอบ Overnight air gets them to Boston by nine A.M. (ถามทางเลือก A or B ตอบเลือกส่งทางอากาศข้ามคืนเพราะถึงบอสตันเก้าโมงเช้า)'),
    p2(21, 'l21-p2-7', 'ca_m', 'au_f', 'Haven’t the sterile gown kits been delivered to Lab Three yet?', ['I saw two unopened pallets by the north hallway.', 'No, I usually wear size medium.', 'At seven-thirty every Monday morning.'], 0, 'ตอบ I saw two unopened pallets by the north hallway. (คำถามปฏิเสธ Haven’t... ตอบข้อมูลที่พบเห็นว่ามีพาเลตยังไม่ได้แกะอยู่ที่โถงทิศเหนือ)'),
    p2(21, 'l21-p2-8', 'au_f', 'uk_f2', 'Could you double-check the lot numbers on those blister packs?', ['Sure, send the manifest sheet over to my desk.', 'They expire in November next year.', 'Only two percent of the shipment.'], 0, 'ตอบ Sure, send the manifest sheet over to my desk. (คำขอให้ช่วยตรวจสอบหมายเลขล็อต ตอบตกลงให้ส่งใบรายการมาที่โต๊ะ)'),
    p2(21, 'l21-p2-9', 'us_m', 'uk_m', 'What caused the alarm in Cold Vault Two last night?', ['Someone left the gasket door slightly ajar.', 'At minus twenty degrees Celsius.', 'Ask the reception guard for a visitor pass.'], 0, 'ตอบ Someone left the gasket door slightly ajar. (ถามสาเหตุ What caused... ตอบเพราะมีคนปิดประตูห้องเย็นไม่สนิท)'),
    p2(21, 'l21-p2-10', 'uk_f2', 'ca_f', 'Which carrier offered lower cold-chain rates to Toronto?', ['NorthStar Freight quoted fifteen percent under budget.', 'Yes, customs cleared the crate in two hours.', 'Every second Tuesday of the month.'], 0, 'ตอบ NorthStar Freight quoted fifteen percent under budget. (ถามเลือกผู้ให้บริการ Which carrier ตอบชื่อบริษัท NorthStar Freight)'),
    p2(21, 'l21-p2-11', 'us_f', 'au_m', 'How long does the stability test run before we record readings?', ['Every four hours over a seventy-two-hour window.', 'Along the second row of the incubator.', 'Yes, the technician entered the data.'], 0, 'ตอบ Every four hours over a seventy-two-hour window. (ถามระยะเวลา How long ตอบกรอบเวลา 72 ชั่วโมงโดยบันทึกทุก 4 ชั่วโมง)'),
    p2(21, 'l21-p2-12', 'ca_f', 'us_m2', 'The label printer at Packing Station Five keeps smudging barcodes.', ['Switch it out for the spare thermal unit in Supply.', 'Yes, five hundred labels per roll.', 'Around three-fifteen yesterday afternoon.'], 0, 'ตอบ Switch it out for the spare thermal unit in Supply. (ประโยคบอกเล่าแจ้งปัญหาเครื่องพิมพ์หมึกเลอะ ตอบแนะนำทางแก้ให้เปลี่ยนเอาเครื่องสำรองมาใช้)'),
    p2(21, 'l21-p2-13', 'uk_m', 'au_f', 'Aren’t the phase-two clinical volunteers scheduled for blood draws today?', ['Actually, the nurse pushed half of them to tomorrow morning.', 'It covers twelve metropolitan clinics.', 'Inside the third cabinet on your left.'], 0, 'ตอบ Actually, the nurse pushed half of them to tomorrow morning. (ถามย้ำตารางนัด ตอบชี้แจงว่าพยาบาลเลื่อนครึ่งหนึ่งไปพรุ่งนี้เช้าแล้ว)'),
    p2(21, 'l21-p2-14', 'au_m', 'ca_m', 'Why don’t we schedule the freezer defrost cycle for Sunday evening?', ['Good timing—no shipments leave until Monday noon.', 'No, the compressor was replaced in April.', 'Four kilograms of gel packs per carton.'], 0, 'ตอบ Good timing—no shipments leave until Monday noon. (ข้อเสนอแนะ Why don’t we... ตอบเห็นด้วยพร้อมเหตุผลสนับสนุน)'),
    p2(21, 'l21-p2-15', 'us_f2', 'uk_f', 'Do you know if Dr. Chen reviewed the adverse-event summary?', ['She emailed her edits to Regulatory twenty minutes ago.', 'Room 410 on the west corridor.', 'About twelve pages including charts.'], 0, 'ตอบ She emailed her edits to Regulatory twenty minutes ago. (ถามว่าตรวจสรุปผลแล้วหรือยัง ตอบยืนยันว่าส่งอีเมลแก้ไขไปเมื่อ 20 นาทีก่อน)'),
    p2(21, 'l21-p2-16', 'uk_f', 'us_m', 'Would you like me to tape those tamper-evident seals onto the crates?', ['Yes, please—the courier truck backs in at four.', 'They’re made of reinforced cardboard.', 'Next to the packaging supervisor’s clipboard.'], 0, 'ตอบ Yes, please—the courier truck backs in at four. (เสนอตัวช่วยติดซีล ตอบรับพร้อมบอกเวลารถรับของจะมาถึงสี่โมง)'),
    p2(21, 'l21-p2-17', 'ca_m', 'uk_f2', 'How often do safety auditors inspect the sterile storage vault?', ['Quarterly, plus one unannounced spot visit each fall.', 'Just four certified inspectors from Geneva.', 'Mostly stainless steel sample trays.'], 0, 'ตอบ Quarterly, plus one unannounced spot visit each fall. (ถามความถี่ How often ตอบตรวจทุกไตรมาสและสุ่มตรวจอีกหนึ่งครั้ง)'),
    p2(21, 'l21-p2-18', 'us_m2', 'ca_f', 'You updated the cold-room access badge list, didn’t you?', ['Wait—I still need Maria’s new employee number first.', 'Yes, the badge reader sits by the door.', 'Usually between eight and ten degrees.'], 0, 'ตอบ Wait—I still need Maria’s new employee number first. (Tag question ถามยืนยัน ตอบตามจริงว่ายังติดรหัสพนักงานใหม่ของ Maria)'),
    p2(21, 'l21-p2-19', 'au_f', 'us_f', 'When can the warehouse crew take their afternoon safety break?', ['Once those six refrigerated pallets clear inspection.', 'In the breakroom beside Locker Bay B.', 'Only two forklifts are running right now.'], 0, 'ตอบ Once those six refrigerated pallets clear inspection. (ถามเวลา When ตอบเป็นเงื่อนไขเวลาคือหลังจากตรวจพาเลตทั้ง 6 ชุดเสร็จ)'),
    p2(21, 'l21-p2-20', 'uk_m', 'au_m', 'Whose clipboard was left inside Airlock Two?', ['Looks like Tariq’s—his initials are on the corner.', 'Put the spare gloves on the metal cart.', 'Yes, the airlock pressure stabilized quickly.'], 0, 'ตอบ Looks like Tariq’s—his initials are on the corner. (ถามความเป็นเจ้าของ Whose ตอบน่าจะเป็นของ Tariq เพราะมีอักษรย่อ)'),
    p2(21, 'l21-p2-21', 'us_f', 'ca_m', 'How much did those wireless freezer telemetry probes cost?', ['Nearly four hundred dollars each, including calibration.', 'Within fifteen minutes of the power outage.', 'Yes, they transmit straight to the central server.'], 0, 'ตอบ Nearly four hundred dollars each, including calibration. (ถามราคา How much ตอบราคาเกือบ 400 ดอลลาร์ต่อชิ้น)'),
    p2(21, 'l21-p2-22', 'ca_f', 'us_m', 'I’m worried the heavy rain will delay our morning vial pickup.', ['Our dispatcher already called—the driver switched to an earlier route.', 'Two boxes of glass pipettes.', 'No, I prefer working the early lab shift.'], 0, 'ตอบ Our dispatcher already called—the driver switched to an earlier route. (บอกเล่าความกังวลเรื่องฝนตก ตอบคลายกังวลว่าคนขับปรับเส้นทางออกเร็วขึ้นแล้ว)'),
    p2(21, 'l21-p2-23', 'au_m', 'uk_f', 'Where should new clinical interns drop off signed confidentiality forms?', ['Give them directly to Priya at the Trials Office.', 'By five P.M. before lab orientation.', 'Because federal privacy rules require original signatures.'], 0, 'ตอบ Give them directly to Priya at the Trials Office. (ถามสถานที่ส่งเอกสาร Where ตอบให้ส่งที่ Priya ในสำนักงานฝ่ายวิจัย)'),
    p2(21, 'l21-p2-24', 'us_m', 'uk_m', 'What time does the evening autoclave sterilization cycle finish?', ['Around six-forty-five, assuming no load interruptions.', 'Mainly surgical stainless forceps.', 'Yes, the steam gauge looks steady.'], 0, 'ตอบ Around six-forty-five, assuming no load interruptions. (ถามเวลาเสร็จสิ้น What time ตอบประมาณ 18:45 น.)'),
    p2(21, 'l21-p2-25', 'uk_f2', 'us_f2', 'Is the spare walk-in cooler ready to hold incoming vaccine cartons?', ['Maintenance is still verifying the backup thermostat right now.', 'Sixty cartons fit on a standard wooden pallet.', 'At the downtown clinical pharmacy branch.'], 0, 'ตอบ Maintenance is still verifying the backup thermostat right now. (ถามความพร้อมของห้องเย็น ตอบเลี่ยงโดยแจ้งสถานะว่าฝ่ายซ่อมบำรุงกำลังตรวจเทอร์โมสตัทอยู่)'),

    // Set 21 Part 3 (13 Conversations: Convs 4 & 8 have 3 speakers; Convs 11-13 have Graphics)
    p3(21, 'l21-p3-1', [
      ['Woman', 'us_f', 'Mark, our clinical phlebotomy team just notified me that the courier missed our blood-draw kit drop-off this morning.'],
      ['Man', 'uk_m', 'Seriously? We have fourteen trial volunteers booked between nine and eleven! Do we have enough backup tubes in Supply Closet Two?'],
      ['Woman', 'us_f', 'Only enough for six patients. If I shift the nine-thirty and ten o’clock check-ins to Thursday morning, the nurse can cover early arrivals without turning anyone away.'],
      ['Man', 'uk_m', 'Smart move—call those eight afternoon-flexible volunteers right now while I phone the regional depot to rush a midday courier.'],
    ], null, [
      ['Part 3 · Problem', 'What issue is affecting the clinic this morning?', ['A scheduled delivery of blood-draw kits did not arrive', 'Fourteen trial participants canceled their appointments', 'Supply Closet Two has a broken electronic lock', 'The clinic nurse called in sick before nine o’clock'], 0, 'ตอบ A scheduled delivery of blood-draw kits did not arrive (ผู้หญิงแจ้งว่าพนักงานส่งของพลาดการส่งชุดเจาะเลือดเมื่อเช้า)'],
      ['Part 3 · Detail', 'How many patients can the backup stock currently support?', ['Six patients', 'Fourteen patients', 'Eight patients', 'Ten patients'], 0, 'ตอบ Six patients (อุปกรณ์สำรองในตู้มีพอสำหรับผู้ป่วยเพียง 6 คน)'],
      ['Part 3 · Action', 'What will the man do to secure extra blood-draw kits?', ['Contact the regional depot to arrange an urgent delivery', 'Reschedule morning volunteers to Thursday morning', 'Move equipment from Supply Closet Two to Clinic A', 'Ask the nurse to extend afternoon clinic hours'], 0, 'ตอบ Contact the regional depot to arrange an urgent delivery (ผู้ชายบอกว่าจะโทรหาศูนย์กระจายสินค้าให้ส่งด่วนรอบเที่ยง)'],
    ]),

    p3(21, 'l21-p3-2', [
      ['Man', 'au_m', 'Clara, check these insulated IV cartons coming off Line Three—several bottom seams are splitting apart even with double tape.'],
      ['Woman', 'ca_f', 'Let me feel the adhesive—oh, the warehouse air conditioner is off during bay repairs, so moisture in the room is loosening standard paper tape!'],
      ['Man', 'au_m', 'That explains it! Should we pause packing until the chillers kick back on?'],
      ['Woman', 'ca_f', 'No need to stop the line—grab those rolls of cold-rated acrylic film from Pallet Six. That adhesive holds tightly in humid air.'],
    ], null, [
      ['Part 3 · Problem', 'What is causing the shipping carton seams to split?', ['High humidity from an offline air conditioner is weakening the tape', 'Packers on Line Three forgot to apply a second tape strip', 'Cardboard walls on the IV cartons were cut too thin', 'Heavy glass IV bottles exceed the weight rating of Pallet Six'], 0, 'ตอบ High humidity from an offline air conditioner is weakening the tape (แอร์คลังสินค้าปิดซ่อมทำให้ความชื้นในห้องสูง เทปกระดาษจึงคลายตัว)'],
      ['Part 3 · Proposal', 'What solution does the woman recommend?', ['Switching to rolls of cold-rated acrylic tape from Pallet Six', 'Halting Line Three packing until evening repairs finish', 'Moving finished boxes into an air-conditioned office', 'Replacing cardboard cartons with wooden shipping crates'], 0, 'ตอบ Switching to rolls of cold-rated acrylic tape from Pallet Six (แนะนำให้ใช้ม้วนเทปอะคริลิกทนความชื้นจากพาเลตที่ 6 แทน)'],
      ['Part 3 · Meaning', 'What does the woman mean when she says, "No need to stop the line"?', ['Workers can fix the taping issue while keeping packing operations running', 'Pallet Six does not require barcode scanning today', 'The air-conditioning contractor has already left the bay', 'Line Three finished all orders ahead of schedule'], 0, 'ตอบ Workers can fix the taping issue while keeping packing operations running (หมายความว่าไม่ต้องหยุดสายการผลิต สามารถแก้ปัญหาไปด้วยและทำงานต่อได้)'],
    ]),

    p3(21, 'l21-p3-3', [
      ['Woman', 'uk_f', 'Dispatch? This is Nadia in Cold-Chain QC—Van Seven’s flight to Montreal was pushed back four hours due to de-icing at the airport.'],
      ['Man', 'us_m2', 'Hold on—those oncology vials inside Van Seven only hold stable two-to-eight-degree cooling for six hours after loading!'],
      ['Woman', 'uk_f', 'Exactly why I’m calling. Can your driver swing by our West Depot cold dock to swap in fresh dry-ice packs before queuing again?'],
      ['Man', 'us_m2', 'He’s twelve minutes away right now. I’ll message him to pull into Bay One immediately so your team can re-ice the shippers.'],
    ], null, [
      ['Part 3 · Topic', 'What are the speakers mainly discussing?', ['Extending cooling time for a delayed medical air shipment', 'Canceling an oncology trial at the Montreal hospital', 'Hiring a replacement courier driver for Van Seven', 'Repairing aircraft de-icing sprayers at the airport'], 0, 'ตอบ Extending cooling time for a delayed medical air shipment (หารือเรื่องการเติมน้ำแข็งแห้งเพิ่มเวลาความเย็นให้เวชภัณฑ์ที่เที่ยวบินล่าช้า 4 ชั่วโมง)'],
      ['Part 3 · Detail', 'Why is the delay urgent for the cargo in Van Seven?', ['Current cold packs only protect the vials for six hours', 'West Depot closes all loading bays in twelve minutes', 'Airport security restricts liquid vials after sunset', 'Montreal customs requires paper manifests before noon'], 0, 'ตอบ Current cold packs only protect the vials for six hours (แพ็กความเย็นเดิมรักษาอุณหภูมิได้เพียง 6 ชั่วโมงเท่านั้น)'],
      ['Part 3 · Action', 'What will the man instruct the driver to do?', ['Return to West Depot Bay One for fresh cooling packs', 'Wait inside the airport cargo queue until departure', 'Deliver the oncology crates to a local clinic instead', 'Turn up the van cabin air conditioning'], 0, 'ตอบ Return to West Depot Bay One for fresh cooling packs (สั่งคนขับวนเข้าช่องจอดที่ 1 ของ West Depot เพื่อเปลี่ยนชุดน้ำแข็งแห้งใหม่)'],
    ]),

    p3(21, 'l21-p3-4', [
      ['Woman1', 'us_f2', 'Before we lock our Phase Three safety dataset tonight, Clinic B still has nine patient dosage timestamps missing from Tuesday’s portal upload.'],
      ['Man', 'ca_m', 'I noticed that gap in the spreadsheet too—looks like only afternoon outpatient infusions failed to sync when their Wi-Fi dropped.'],
      ['Woman2', 'uk_f2', 'I have the paper nurse logs right here in my binder! If you give me portal edit access for twenty minutes, I can key in those nine timestamps manually.'],
      ['Woman1', 'us_f2', 'Wait—federal audit rules require two-person sign-off on manual data entries.'],
      ['Man', 'ca_m', 'No problem—she can type them in right now while I verify each scanned paper sheet line by line beside her.'],
    ], null, [
      ['Part 3 · Problem', 'Why are nine patient timestamps missing from the database?', ['Clinic B experienced a wireless outage during afternoon uploads', 'Nurses forgot to record outpatient dosages on paper logs', 'The Phase Three safety portal locked ahead of schedule', 'Biostatisticians accidentally deleted Tuesday’s spreadsheet tab'], 0, 'ตอบ Clinic B experienced a wireless outage during afternoon uploads (Wi-Fi ที่คลินิก B หลุดตอนอัปโหลดช่วงบ่าย)'],
      ['Part 3 · Detail', 'What rule does the first woman point out regarding manual entries?', ['Two staff members must verify and sign off on manual changes', 'Paper nurse binders cannot leave Clinic B’s premises', 'Only the clinic director may unlock portal edit permissions', 'Spreadsheet revisions must wait until Friday morning'], 0, 'ตอบ Two staff members must verify and sign off on manual changes (กฎการตรวจสอบกำหนดให้ต้องมีเจ้าหน้าที่สองคนตรวจยืนยันการกรอกข้อมูลด้วยมือ)'],
      ['Part 3 · Action', 'What will the man and the second woman do next?', ['Enter the missing paper records together with live verification', 'Wait for Clinic B’s wireless network to automatically sync', 'Postpone locking the safety dataset until next Tuesday', 'Scan the binder pages and email them to regional auditors'], 0, 'ตอบ Enter the missing paper records together with live verification (ผู้หญิงคนที่สองจะคีย์ข้อมูลจากแฟ้มกระดาษโดยมีผู้ชายช่วยตรวจทีละบรรทัด)'],
    ]),

    p3(21, 'l21-p3-5', [
      ['Man', 'us_m', 'Hi Lena, thanks for bringing the revised foil-pack samples. Look at the expiration date stamped near the crimped edge—the pale gray ink practically vanishes under bright clinic lights.'],
      ['Woman', 'au_f', 'Oh, I see what you mean—the ribbed aluminum pattern breaks up light ink strokes. Our press operator can switch that thermal ribbon to dark matte black this afternoon.'],
      ['Man', 'us_m', 'Much better. Can you print fifty test blisters and drop them by Quality Assurance before four so inspectors approve the full run tomorrow?'],
      ['Woman', 'au_f', 'Consider it done—I’ll verify high-contrast readability across all font sizes before sending them over.'],
    ], null, [
      ['Part 3 · Problem', 'What flaw does the man identify on the sample blister packs?', ['The printed expiration date is hard to read in bright lighting', 'Aluminum foil edges tear easily when opened', 'Lot numbers do not match the clinical pharmacy order', 'Font sizes exceed standard package label dimensions'], 0, 'ตอบ The printed expiration date is hard to read in bright lighting (หมึกสีเทาอ่อนตรงขอบฟอยล์อ่านยากเมื่ออยู่ใต้แสงสว่าง)'],
      ['Part 3 · Detail', 'How does the woman plan to resolve the printing issue?', ['By changing the thermal print ribbon to matte black ink', 'By moving expiration text to a separate paper insert', 'By flattening the ribbed foil along the top seal', 'By ordering pre-printed adhesive stickers'], 0, 'ตอบ By changing the thermal print ribbon to matte black ink (เปลี่ยนริบบิ้นเครื่องพิมพ์ความร้อนเป็นสีดำด้านเข้ม)'],
      ['Part 3 · Action', 'Who must approve the fifty sample packs before four o’clock?', ['Quality Assurance inspectors', 'Clinic pharmacy technicians', 'Aluminum foil suppliers', 'Marketing compliance editors'], 0, 'ตอบ Quality Assurance inspectors (ต้องส่งตัวอย่าง 50 แผงให้ฝ่าย Quality Assurance ตรวจอนุมัติก่อนสี่โมงเย็น)'],
    ]),

    p3(21, 'l21-p3-6', [
      ['Woman', 'ca_f', 'Welcome to Cold Storage Wing B, Devon. Whenever you hear a steady chime near Freezer Four, check the red indicator light above the doorframe first—don’t hit silence right away.'],
      ['Man', 'uk_m', 'Got it—look at the light first. What if the digital panel shows normal temperature even though the alarm keeps ringing?'],
      ['Woman', 'ca_f', 'That usually means the backup battery or the door-ajar contact sensor tripped. Log the alert code in the binder by the doorway, then page Maintenance on extension two-four.'],
      ['Man', 'uk_m', 'Easy enough—check the panel, log the code, and call extension two-four before opening the seal.'],
    ], null, [
      ['Part 3 · Topic', 'What is the woman primarily doing?', ['Training a colleague on cold-storage alarm procedures', 'Interviewing an applicant for a maintenance supervisor post', 'Checking temperature readings inside an empty freezer', 'Repairing a faulty battery indicator above Freezer Four'], 0, 'ตอบ Training a colleague on cold-storage alarm procedures (กำลังสอนงานและอธิบายขั้นตอนการรับมือเมื่อสัญญาณเตือนห้องเย็นดัง)'],
      ['Part 3 · Detail', 'What does the woman say causes an alarm when temperatures appear normal?', ['A triggered backup battery or door-ajar sensor', 'An overloaded circuit in an adjacent lab wing', 'Frost buildup covering the exterior digital display', 'Routine automated defrost cycles at noon'], 0, 'ตอบ A triggered backup battery or door-ajar sensor (แบตเตอรี่สำรองหรือเซนเซอร์เตือนประตูแง้มทำงานผิดปกติ)'],
      ['Part 3 · Detail', 'What should Devon do before calling extension two-four?', ['Write the alert code in the doorway logbook', 'Press the silence button near the doorframe', 'Transfer sample trays to an adjacent freezer', 'Unplug the hallway indicator light'], 0, 'ตอบ Write the alert code in the doorway logbook (จดรหัสแจ้งเตือนลงในแฟ้มบันทึกตรงประตูทางเข้าก่อนโทรแจ้งซ่อม)'],
    ]),

    p3(21, 'l21-p3-7', [
      ['Woman', 'au_f', 'Hi Kevin, I’m calling from Harbor BioSupply. Your purchase order for four hundred single-use USB temperature loggers just arrived at our desk, and I wanted to confirm shipping speed.'],
      ['Man', 'us_m', 'We actually need at least one hundred units by Wednesday noon for an emergency vaccine transfer—can you split the order?'],
      ['Woman', 'au_f', 'Certainly. I can express-ship one hundred calibrated loggers today at no extra handling cost, and send the remaining three hundred via standard ground freight Friday.'],
      ['Man', 'us_m', 'That works nicely! Please email the NIST calibration certificates ahead of the parcel so our receiving clerk doesn’t hold the box in quarantine.'],
    ], null, [
      ['Part 3 · Reason', 'Why is the man requesting a split shipment?', ['He needs part of the order urgently for a midweek vaccine move', 'His warehouse shelf lacks space for four hundred loggers at once', 'Half of the previous batch failed accuracy certification', 'Standard ground couriers refused hazardous cold cargo'], 0, 'ตอบ He needs part of the order urgently for a midweek vaccine move (ต้องการใช้งานด่วน 100 ตัวภายในเที่ยงวันพุธสำหรับเคลื่อนย้ายวัคซีน)'],
      ['Part 3 · Detail', 'What does the woman agree to waive for the urgent portion?', ['Additional handling fees for split express shipping', 'The base unit cost of the USB temperature loggers', 'Calibration certification charges on the Friday batch', 'Standard ground freight fees across all four hundred units'], 0, 'ตอบ Additional handling fees for split express shipping (ผู้หญิงตกลงส่งด่วน 100 ชิ้นให้วันนี้โดยไม่คิดค่าดำเนินการแยกส่งเพิ่ม)'],
      ['Part 3 · Request', 'What does the man ask the woman to send in advance?', ['Calibration certificates via email', 'Printed customs declarations', 'Discount vouchers for future bulk orders', 'Installation manuals for the receiving clerk'], 0, 'ตอบ Calibration certificates via email (ขอให้ส่งใบรับรองการสอบเทียบ NIST ล่วงหน้าทางอีเมลเพื่อไม่ให้ติดค้างการตรวจรับ)'],
    ]),

    p3(21, 'l21-p3-8', [
      ['Man', 'uk_m', 'Thanks for meeting inside the pharmacy annex, both of you. Facilities wants to test our backup diesel generator for ninety minutes this Saturday morning.'],
      ['Woman1', 'us_f', 'Wait—if power switches over, our vaccine refrigerators drop off line for roughly twenty seconds before the generator catches. Is that brief drop safe for our trial biologics?'],
      ['Woman2', 'ca_f', 'Twenty seconds won’t warm the interior if nobody opens the doors during the test, though our clinical audit rules require continuous battery telemetry throughout any outage.'],
      ['Man', 'uk_m', 'Good point—I’ll verify every pharmacy fridge’s internal logger battery reads full on Friday afternoon, and post "Do Not Open" signs across every handle.'],
      ['Woman1', 'us_f', 'Perfect, and let’s keep two empty rolling coolers packed with conditioned ice bricks ready beside the door just in case a compressor fails to restart.'],
    ], null, [
      ['Part 3 · Topic', 'What building test are the clinic speakers preparing for?', ['A scheduled weekend test of the building’s backup generator', 'Installing brand-new vaccine refrigerators in the annex', 'Responding to an unexpected midweek utility blackout', 'Moving clinical trial biologics to another city hospital'], 0, 'ตอบ A scheduled weekend test of the building’s backup generator (เตรียมความพร้อมสำหรับการทดสอบเครื่องปั่นไฟสำรองเป็นเวลา 90 นาทีในเช้าวันเสาร์)'],
      ['Part 3 · Detail', 'What condition does the second woman emphasize for compliance?', ['Temperature loggers must record continuously on battery power', 'Refrigerator gaskets must be replaced before Saturday', 'Only trial pharmacists may enter the annex after noon', 'Facilities must shorten the test to twenty seconds'], 0, 'ตอบ Temperature loggers must record continuously on battery power (กฎตรวจสอบกำหนดให้เครื่องบันทึกอุณหภูมิต้องทำงานต่อเนื่องด้วยแบตเตอรี่ตลอดช่วงไฟดับ)'],
      ['Part 3 · Action', 'What precaution does the first woman suggest?', ['Keeping two chilled rolling coolers on standby outside the door', 'Unplugging nonessential lab printers on Friday afternoon', 'Scheduling patient appointments around the morning test', 'Transferring all vials to dry-ice chests before the switchover'], 0, 'ตอบ Keeping two chilled rolling coolers on standby outside the door (เสนอให้เตรียมกล่องเก็บความเย็นใส่อิฐน้ำแข็ง 2 ใบสแตนด์บายไว้เผื่อคอมเพรสเซอร์ไม่ทำงาน)'],
    ]),

    p3(21, 'l21-p3-9', [
      ['Man', 'us_m2', 'Hey Jenna, did anyone check those six cases of sterile gauze sitting in Aisle Nine? None of them carry external lot barcodes or expiration dates.'],
      ['Woman', 'uk_f', 'Oh no—never move uncoded medical consumables onto picking shelves! Did the receiving dock accept them without an inspection slip?'],
      ['Man', 'us_m2', 'Looks like a temp worker unloaded them during yesterday’s rush. Should I pull them onto the red quarantine pallet right now?'],
      ['Woman', 'uk_f', 'Yes, shrink-wrap the whole stack in yellow hold tape and send me the vendor name from the side carton so I can file a supplier trace request.'],
    ], null, [
      ['Part 3 · Problem', 'Why must the gauze cases in Aisle Nine be removed from regular stock?', ['They lack mandatory external lot codes and expiration dates', 'Water leaked onto the outer cardboard cartons overnight', 'The wrong size gauze pads arrived from the supplier', 'A temporary employee stacked them past the aisle height limit'], 0, 'ตอบ They lack mandatory external lot codes and expiration dates (กล่องผ้าก๊อซปลอดเชื้อไม่มีบาร์โค้ดล็อตและวันหมดอายุติดอยู่ภายนอก)'],
      ['Part 3 · Inference', 'How did the unlabeled cases likely enter the warehouse aisle?', ['A temporary worker accepted them during a busy dock shift', 'The barcode printer jammed inside Receiving Bay Three', 'Supplier labels peeled off inside a cold delivery van', 'Inventory software accidentally deleted their SKU numbers'], 0, 'ตอบ A temporary worker accepted them during a busy dock shift (พนักงานชั่วคราวน่าจะรับลงมาวางในช่วงงานยุ่งเมื่อวานโดยไม่ตรวจใบรับรอง)'],
      ['Part 3 · Action', 'What will the woman do after receiving the vendor name?', ['Submit a formal supplier trace inquiry', 'Print new expiration labels for Aisle Nine', 'Return the shipment using a courier van', 'Reassign the temporary worker to inventory'], 0, 'ตอบ Submit a formal supplier trace inquiry (ส่งคำร้องตรวจสอบย้อนกลับไปยังซัพพลายเออร์)'],
    ]),

    p3(21, 'l21-p3-10', [
      ['Man', 'ca_m', 'Nina, our logistics cost audit showed vacuum-insulated panels cut monthly air-freight weight by eighteen percent compared with thick polyurethane boxes.'],
      ['Woman', 'au_f', 'Eighteen percent is impressive! Why aren’t we switching every domestic route over to vacuum panels right away?'],
      ['Man', 'ca_m', 'Front-end cost—each vacuum panel liner runs triple the price of standard foam, and regional couriers often forget to ship the returnable shells back to us.'],
      ['Woman', 'au_f', 'Fair point. Let’s limit vacuum shippers exclusively to long-haul overseas lanes where air-weight savings pay back the liner cost within two round trips.'],
    ], null, [
      ['Part 3 · Detail', 'What advantage do vacuum-insulated panels offer in shipping?', ['They substantially reduce total air-freight parcel weight', 'They cost a third as much as standard foam containers', 'They hold sub-zero temperatures without any gel bricks', 'Couriers never need to scan them at international customs'], 0, 'ตอบ They substantially reduce total air-freight parcel weight (ลดน้ำหนักขนส่งทางอากาศลงได้ถึง 18%)'],
      ['Part 3 · Problem', 'Why is the company hesitant to use vacuum panels on local routes?', ['High purchase prices and low container return rates', 'Airline restrictions on reusable metallic shipping frames', 'Difficulty fitting rectangular panels inside delivery vans', 'Frequent cracking during mild domestic winter weather'], 0, 'ตอบ High purchase prices and low container return rates (ราคาสูงกว่าโฟมถึง 3 เท่า และพนักงานส่งของท้องถิ่นมักลืมส่งกล่องคืน)'],
      ['Part 3 · Decision', 'Where will the speakers deploy vacuum-insulated shippers?', ['On long international air routes', 'Across all local clinic van deliveries', 'Only inside warehouse freezer storage', 'Strictly for dry-ice sample returns'], 0, 'ตอบ On long international air routes (จะจำกัดการใช้เฉพาะเส้นทางขนส่งทางอากาศระยะไกลต่างประเทศที่คุ้มทุนเร็ว)'],
    ]),

    p3(21, 'l21-p3-11', [
      ['Woman', 'us_f', 'Dr. Patel, a new volunteer named Samuel Reyes just passed baseline vitals! He works weekdays until noon, and his intake sheet flags a mild gelatin sensitivity.'],
      ['Man', 'uk_m', 'Great—let’s check our Clinical Trial Cohort Schedule. Since he’s only free after twelve P.M., Cohort A and Cohort B are both out right away.'],
      ['Woman', 'us_f', 'Wait—Cohort D meets in the afternoon too, right? Let’s see what capsule formulation each afternoon arm uses.'],
      ['Man', 'uk_m', 'Aha—Cohort D uses standard bovine gelatin shells, whereas Cohort C uses plant-cellulose capsules! Put Mr. Reyes into Cohort C and book his first dosing Tuesday at two.'],
    ], doc('table', 'Phase II Trial — Active Cohort Screening Schedule', [['Site', 'Northside Clinical Research Wing']], [
      tbl(
        ['Cohort Arm', 'Visit Window', 'Capsule Shell', 'Open Slots'],
        [
          ['Cohort A', '8:00 A.M. – 10:30 A.M.', 'Plant Cellulose', '4 Open'],
          ['Cohort B', '9:30 A.M. – 11:45 A.M.', 'Bovine Gelatin', '2 Open'],
          ['Cohort C', '1:30 P.M. – 4:00 P.M.', 'Plant Cellulose', '5 Open'],
          ['Cohort D', '2:00 P.M. – 4:30 P.M.', 'Bovine Gelatin', '3 Open'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which trial cohort will Mr. Reyes join?', ['Cohort C', 'Cohort A', 'Cohort B', 'Cohort D'], 0, 'ตอบ Cohort C (ผู้สมัครว่างหลังเที่ยงวันและแพ้เจลาติน จึงต้องเลือก Cohort C ช่วงบ่ายที่ใช้แคปซูลจากเซลลูโลสพืช)'],
      ['Part 3 · Graphic', 'Why is Cohort D unsuitable for this volunteer?', ['Its study medication uses bovine gelatin capsules', 'All three afternoon slots were filled earlier today', 'Visit hours conflict with his morning job shift', 'Northside Wing suspends Tuesday afternoon testing'], 0, 'ตอบ Its study medication uses bovine gelatin capsules (Cohort D ใช้แคปซูลเจลาตินจากสัตว์ ซึ่งผู้สมัครมีอาการไวต่อเจลาติน)'],
      ['Part 3 · Detail', 'When will Mr. Reyes attend his initial dosing visit?', ['Tuesday at 2:00 P.M.', 'Monday at 1:30 P.M.', 'Wednesday at 8:00 A.M.', 'Thursday at 4:30 P.M.'], 0, 'ตอบ Tuesday at 2:00 P.M. (ผู้ชายบอกให้จองวันรับยาครั้งแรกในวันอังคารเวลา 14:00 น.)'],
    ]),

    p3(21, 'l21-p3-12', [
      ['Man', 'au_m', 'Sonia, we’ve got an order of sensitive oncology monoclonal antibodies leaving for Denver tonight. Transit estimate is forty-eight hours door-to-door, and it strictly requires two to eight degrees Celsius.'],
      ['Woman', 'us_f2', 'Okay, pull up the Cold-Chain Packaging Tier Guide. Notice CryoLite 36 tops out well under forty-eight hours—that cuts it way too close if a truck hits traffic.'],
      ['Man', 'au_m', 'Right, and SubZero Deep holds minus twenty, which would ruin liquid antibodies immediately!'],
      ['Woman', 'us_f2', 'Then AeroGel Pro 72 is our clear winner—seventy-two hours of protection right inside that two-to-eight band. Pull six cartons off Rack Four now!'],
    ], doc('list', 'MedLogix Warehouse — Cold-Chain Packaging Tier Guide', null, [
      lst([
        'ChillBasic 24 · 2°C to 8°C Hold · Up to 24 Hours · Local Van Routes Only',
        'CryoLite 36 · 2°C to 8°C Hold · Up to 36 Hours · Overnight Regional Air',
        'AeroGel Pro 72 · 2°C to 8°C Hold · Up to 72 Hours · Cross-Country Biologics',
        'SubZero Deep 96 · -20°C Frozen Hold · Up to 96 Hours · Dry-Ice Pellet Liners',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which shipping container will the workers select?', ['AeroGel Pro 72', 'CryoLite 36', 'SubZero Deep 96', 'ChillBasic 24'], 0, 'ตอบ AeroGel Pro 72 (สินค้าต้องคุมอุณหภูมิ 2–8 องศา และเดินทาง 48 ชั่วโมง จึงต้องใช้ AeroGel Pro 72 ที่เก็บความเย็นได้ถึง 72 ชั่วโมง)'],
      ['Part 3 · Detail', 'Why would SubZero Deep 96 damage this Denver shipment?', ['Its frozen minus-twenty range would ruin liquid antibodies', 'It cannot accommodate six standard vials inside one box', 'Regional trucks refuse dry-ice pellet cartons', 'Denver depot lacks sub-zero unloading equipment'], 0, 'ตอบ Its frozen minus-twenty range would ruin liquid antibodies (SubZero Deep เย็นจัดถึง -20 องศาเซลเซียส ซึ่งจะทำลายยาแอนติบอดีชนิดเหลว)'],
      ['Part 3 · Detail', 'Where are the selected cartons located in the warehouse?', ['On Rack Four', 'Inside Van Seven', 'At Denver’s local depot', 'Along Packing Station Two'], 0, 'ตอบ On Rack Four (ผู้หญิงสั่งให้ไปหยิบ 6 กล่องมาจากชั้น Rack Four)'],
    ]),

    p3(21, 'l21-p3-13', [
      ['Woman', 'ca_f', 'Leo, before we load tomorrow’s clinical batches, take a look at this morning’s Freezer Bay Calibration Log.'],
      ['Man', 'us_m', 'Let’s see—standard QC tolerance allows plus or minus zero-point-five degrees Celsius maximum drift against the reference thermometer.'],
      ['Woman', 'ca_f', 'Look down the right-hand variance column—three bays sit right inside spec, except one South Wing unit drifted well past two degrees warm!'],
      ['Man', 'us_m', 'Whoa—flag that bay offline immediately and call BioCal Services to swap out its temperature probe before noon!'],
    ], doc('box', 'Morning QC — Freezer Bay Sensor Calibration Log', [
      ['Tolerance', '±0.5°C Max Drift'],
      ['Logged By', 'QC Night Shift'],
    ], [
      box('Bay Readings vs. Reference Probe', [
        'Bay 1 (North Wing) · Reference -20.0°C · Sensor -19.8°C · Drift +0.2°C',
        'Bay 2 (North Wing) · Reference -20.0°C · Sensor -20.3°C · Drift -0.3°C',
        'Bay 3 (South Wing) · Reference -20.0°C · Sensor -17.6°C · Drift +2.4°C',
        'Bay 4 (East Annex) · Reference -80.0°C · Sensor -79.9°C · Drift +0.1°C',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which storage bay requires immediate probe replacement?', ['Bay 3 (South Wing)', 'Bay 1 (North Wing)', 'Bay 2 (North Wing)', 'Bay 4 (East Annex)'], 0, 'ตอบ Bay 3 (South Wing) (ค่าความคลาดเคลื่อนที่ยอมรับได้คือ ±0.5°C แต่ Bay 3 คลาดเคลื่อนสูงถึง +2.4°C เกินเกณฑ์มาก)'],
      ['Part 3 · Detail', 'What is the maximum sensor variance allowed under QC standards?', ['Plus or minus 0.5°C', 'Plus or minus 2.4°C', 'Plus or minus 1.0°C', 'Zero degrees variance'], 0, 'ตอบ Plus or minus 0.5°C (ในบทสนทนาและหัวตารางระบุเกณฑ์ยอมรับได้สูงสุด ±0.5°C)'],
      ['Part 3 · Action', 'What will happen to the faulty bay right away?', ['It will be taken offline until BioCal Services replaces the probe', 'Night shift staff will raise its target to minus eighty degrees', 'Tomorrow’s clinical batches will be loaded inside it anyway', 'Maintenance will clean frost off the North Wing doorway'], 0, 'ตอบ It will be taken offline until BioCal Services replaces the probe (สั่งปิดการใช้งานชั่วคราวและเรียกบริษัท BioCal มาเปลี่ยนหัววัดก่อนเที่ยง)'],
    ]),

    // Set 21 Part 4 (10 Talks: Talks 8-10 have Graphics)
    p4(21, 'l21-p4-1', 'the following recorded voicemail message', 'us_f2',
      'Hello, this is Nurse Carmen calling from Westlake Clinical Trials regarding tomorrow morning’s baseline blood draw. As a quick reminder, please do not eat or drink anything except plain water after ten P.M. tonight so your metabolic lab panel remains accurate. Please arrive at Clinic Entrance B fifteen minutes prior to your scheduled check-in, bringing your photo ID and current medication list. Call our coordinator desk before six P.M. if traffic or illness prevents you from attending.',
      null, [
        ['Part 4 · Purpose', 'Why is Nurse Carmen leaving this voicemail?', ['To remind study volunteers about pre-visit fasting and arrival guidelines', 'To reschedule tomorrow morning’s metabolic clinic appointments', 'To announce new parking rates outside Clinic Entrance B', 'To share blood-test results from last week’s check-in'], 0, 'ตอบ To remind study volunteers about pre-visit fasting and arrival guidelines (โทรเตือนอาสาสมัครให้ดอาหารหลังสี่ทุ่มและเตรียมเอกสารมาก่อนเวลานัด 15 นาที)'],
        ['Part 4 · Detail', 'What are participants permitted to consume after ten P.M. tonight?', ['Only plain water', 'Black coffee without sugar', 'Clear fruit juice', 'Herbal tea and crackers'], 0, 'ตอบ Only plain water (งดอาหารและเครื่องดื่มทุกชนิดยกเว้นน้ำเปล่าหลังเวลา 22:00 น.)'],
        ['Part 4 · Detail', 'What items should volunteers bring with them tomorrow?', ['A photo identification card and a list of current medications', 'Completed metabolic questionnaires and parking tickets', 'Sealed water bottles and spare clinic wristbands', 'Insurance receipts from previous hospital stays'], 0, 'ตอบ A photo identification card and a list of current medications (ให้พกบัตรประจำตัวที่มีรูปถ่ายและรายการยาที่ใช้อยู่ในปัจจุบันมาด้วย)'],
      ]),

    p4(21, 'l21-p4-2', 'the following warehouse shift briefing', 'uk_m',
      'Good morning, Warehouse Team Two. Starting this Monday, our insulated parcel line is upgrading from paper packing strips to heavy-duty synthetic fiber tape across all export shipments. Recent humidity spikes in regional cargo hubs softened several standard paper seals during multi-day transit. Before your morning shift starts, swap out the old dispenser rolls at your station and drop leftover paper coils into the bin beside Bay Four. Contact Supervisor Alvarez if any handheld tape gun jams.',
      null, [
        ['Part 4 · Topic', 'What operational change is announced in this briefing?', ['Export parcels will now use synthetic fiber tape instead of paper strips', 'Warehouse Team Two is moving to a new export hub on Monday', 'Standard insulated cartons are being replaced by metal crates', 'Afternoon loading hours are expanding to reduce transit delays'], 0, 'ตอบ Export parcels will now use synthetic fiber tape instead of paper strips (เปลี่ยนจากการใช้เทปกระดาษมาเป็นเทปใยสังเคราะห์สำหรับสินค้าส่งออกตั้งแต่วันจันทร์)'],
        ['Part 4 · Reason', 'Why is the warehouse making this packaging switch?', ['Humid cargo hubs caused paper seals to lose adhesion in transit', 'Synthetic tape dispensers cut packing time by half', 'Paper packing strips ran out across domestic suppliers', 'International customs agencies banned recycled paper boxes'], 0, 'ตอบ Humid cargo hubs caused paper seals to lose adhesion in transit (ความชื้นสูงในศูนย์คัดแยกสินค้าทำให้เทปกระดาษคลายตัวระหว่างขนส่ง)'],
        ['Part 4 · Action', 'Where should workers place unused paper tape rolls?', ['In the collection bin near Bay Four', 'Inside Supervisor Alvarez’s office', 'Back onto the morning export pallets', 'At the main warehouse security desk'], 0, 'ตอบ In the collection bin near Bay Four (ให้นำม้วนเทปกระดาษที่เหลือไปใส่ในถังข้างช่องจอดที่ 4)'],
      ]),

    p4(21, 'l21-p4-3', 'the following quality-control update', 'au_f',
      'I’m pleased to share the third-quarter scorecard from our Regional Biologics Cold-Chain Audit. Out of twelve thousand temperature-sensitive pallets shipped across six distribution centers since July, zero excursions crossed the critical safety threshold. Much of that success belongs to our overnight dock inspectors, who reduced loading-door open times from eleven minutes down to just four minutes per trailer. To celebrate this milestone, leadership is catering hot lunches for every cold-dock crew next Wednesday.',
      null, [
        ['Part 4 · Topic', 'What achievement is the speaker highlighting?', ['A quarter with zero critical temperature failures across twelve thousand shipments', 'Opening six new biologics distribution centers ahead of budget', 'Hiring twelve additional overnight dock inspectors since July', 'Cutting shipping fuel costs across regional trailer routes'], 0, 'ตอบ A quarter with zero critical temperature failures across twelve thousand shipments (รายงานความสำเร็จไตรมาส 3 ที่ไม่มีสินค้าเสียหายจากอุณหภูมิเกินเกณฑ์เลยแม้แต่ชิ้นเดียวจาก 12,000 พาเลต)'],
        ['Part 4 · Detail', 'How did overnight dock staff improve handling performance?', ['By cutting trailer loading-door open times down to four minutes', 'By pre-chilling empty cardboard boxes for eleven minutes', 'By doubling the number of temperature loggers per pallet', 'By shifting regional truck departures to cool midnight windows'], 0, 'ตอบ By cutting trailer loading-door open times down to four minutes (ลดเวลาการเปิดประตูห้องโหลดสินค้าจาก 11 นาทีเหลือเพียง 4 นาทีต่อคัน)'],
        ['Part 4 · Detail', 'How will management reward the cold-dock crews next Wednesday?', ['By providing catered hot lunches', 'By granting an extra paid vacation day', 'By distributing wireless tablet bonuses', 'By hosting an off-site awards dinner'], 0, 'ตอบ By providing catered hot lunches (ผู้บริหารจะจัดเลี้ยงอาหารกลางวันร้อนๆ ให้ทีมท่าโหลดสินค้าวันพุธหน้า)'],
      ]),

    p4(21, 'l21-p4-4', 'the following business podcast excerpt', 'ca_m',
      'You’re listening to MedSupply Weekly. Today we examine how regional pharmaceutical packaging depots are trimming costly human inspection bottlenecks. At Crestview Pharma’s newly retrofitted Ohio plant, high-speed optical cameras now photograph every aluminum vial cap at three hundred units per minute, automatically kicking crooked crimps off the conveyor before cold storage. Plant Director Kenji Sato notes that automated vision didn’t cut staff—instead, former line checkers retrained as calibration specialists earning higher technical wages.',
      null, [
        ['Part 4 · Topic', 'What technology is featured in the Crestview Pharma plant profile?', ['High-speed optical cameras that reject poorly sealed vial caps', 'Robotic pallet trucks that load refrigerated cargo airplanes', 'Cold-chain labels that change color during power outages', 'Automated software that schedules pharmaceutical clinical trials'], 0, 'ตอบ High-speed optical cameras that reject poorly sealed vial caps (กล้องความเร็วสูงที่ถ่ายภาพฝาขวดยาและคัดแยกฝาที่ปิดเบี้ยวออกโดยอัตโนมัติ)'],
        ['Part 4 · Detail', 'How fast can the inspection cameras check aluminum caps?', ['Three hundred vials per minute', 'Three hundred pallets per hour', 'Two hundred vials per second', 'Sixty cartons per shift'], 0, 'ตอบ Three hundred vials per minute (ตรวจสอบได้เร็วถึง 300 ขวดต่อนาที)'],
        ['Part 4 · Detail', 'What happened to employees who previously checked vials manually?', ['They retrained into higher-paid calibration technician roles', 'They transferred to Crestview’s overnight shipping dock', 'They took early retirement packages last spring', 'They moved to an external quality auditing firm'], 0, 'ตอบ They retrained into higher-paid calibration technician roles (พนักงานเดิมได้รับการฝึกอบรมใหม่เป็นช่างเทคนิคสอบเทียบที่ได้รับค่าตอบแทนสูงขึ้น)'],
      ]),

    p4(21, 'l21-p4-5', 'the following facility tour introduction', 'uk_f',
      'Welcome, visiting regulatory auditors, to MedCore’s Cleanroom Packaging Annex. Before stepping through the gowning airlock, please slip blue shoe covers over your footwear and store wristwatches or loose jewelry inside the hallway lockers. Once inside Suite Three, you’ll observe our sterile blister-sealing machines operating under positive air pressure to keep airborne dust particles out. Please keep voice volumes low near the inspection glass, and save camera photos until our courtyard briefing afterward.',
      null, [
        ['Part 4 · Audience', 'Who is the speaker addressing?', ['Visiting regulatory inspectors touring a cleanroom facility', 'Newly hired packaging technicians starting morning training', 'Clinical trial participants arriving for initial check-ins', 'Construction contractors installing airlock lockers'], 0, 'ตอบ Visiting regulatory inspectors touring a cleanroom facility (ต้อนรับผู้ตรวจสอบกฎระเบียบที่มาเยี่ยมชมส่วนบรรจุภัณฑ์ห้องสะอาด)'],
        ['Part 4 · Detail', 'What are visitors instructed to place in the hallway lockers?', ['Wristwatches and loose jewelry', 'Blue protective shoe covers', 'Clipboards and inspection checklists', 'Sterile blister-pack samples'], 0, 'ตอบ Wristwatches and loose jewelry (ให้เก็บนาฬิกาข้อมือและเครื่องประดับหลวมๆ ไว้ในล็อกเกอร์ตรงโถงทางเดิน)'],
        ['Part 4 · Detail', 'Why is Suite Three maintained under positive air pressure?', ['To prevent airborne dust from entering the sterile area', 'To cool down aluminum blister-sealing machinery', 'To dry newly printed ink labels quickly', 'To lower electricity usage during daytime runs'], 0, 'ตอบ To prevent airborne dust from entering the sterile area (ใช้แรงดันอากาศบวกเพื่อป้องกันฝุ่นละอองในอากาศเล็ดลอดเข้าไปในพื้นที่ปลอดเชื้อ)'],
      ]),

    p4(21, 'l21-p4-6', 'the following product demonstration', 'us_m',
      'Take a close look at our new AeroTag Bluetooth Cold-Chain Logger. Unlike legacy USB sticks that force warehouse clerks to slit open sealed vaccine cartons just to plug into a laptop, AeroTag transmits full hourly temperature logs straight through insulated foam walls up to thirty meters away. Simply tap your clinic tablet near the pallet wrap and generate a signed PDF receipt in three seconds. Better yet, its replaceable lithium cell runs continuously for eighteen months.',
      null, [
        ['Part 4 · Topic', 'What main benefit of the AeroTag logger is emphasized?', ['Workers can read temperature logs wirelessly without opening sealed boxes', 'Warehouse vans no longer need refrigerated insulation walls', 'Clinic tablets can cool down warm cartons remotely', 'Data files erase automatically after three seconds'], 0, 'ตอบ Workers can read temperature logs wirelessly without opening sealed boxes (อ่านบันทึกอุณหภูมิแบบไร้สายได้ทันทีโดยไม่ต้องกรีดเปิดกล่องพัสดุที่ซีลไว้)'],
        ['Part 4 · Detail', 'From what maximum distance can AeroTag transmit through foam walls?', ['Up to thirty meters', 'Up to three meters', 'Up to eighteen meters', 'Up to sixty meters'], 0, 'ตอบ Up to thirty meters (ส่งสัญญาณผ่านผนังโฟมได้ไกลถึง 30 เมตร)'],
        ['Part 4 · Detail', 'How long does the replaceable battery last?', ['Eighteen months', 'Three months', 'Twelve months', 'Twenty-four months'], 0, 'ตอบ Eighteen months (แบตเตอรี่ลิเทียมแบบเปลี่ยนได้ใช้งานต่อเนื่องได้นาน 18 เดือน)'],
      ]),

    p4(21, 'l21-p4-7', 'the following automated telephone menu', 'us_f',
      'Thank you for calling MedPack Supply Depot, your regional partner for cold-chain medical packaging. Our warehouse shipping desks are open Monday through Friday from six A.M. to seven P.M. To track an active refrigerated freight order, press one and enter your eight-digit airway bill. For dry-ice restocking requests or emergency weekend cooler rentals, press two to reach our on-call dispatcher. To speak with billing regarding monthly account invoices, please stay on the line.',
      null, [
        ['Part 4 · Detail', 'When is MedPack Supply Depot’s regular shipping desk open?', ['Weekdays from 6:00 A.M. to 7:00 P.M.', 'Daily including Sundays until 7:00 P.M.', 'Monday through Saturday starting at 8:00 A.M.', 'Twenty-four hours for billing inquiries'], 0, 'ตอบ Weekdays from 6:00 A.M. to 7:00 P.M. (เปิดบริการวันจันทร์ถึงศุกร์ เวลา 06:00–19:00 น.)'],
        ['Part 4 · Action', 'Which button should a caller press to rent an emergency weekend cooler?', ['Two', 'One', 'Three', 'Zero'], 0, 'ตอบ Two (กดหมายเลข 2 เพื่อติดต่อพนักงานสำหรับขอเช่ากล่องเก็บความเย็นฉุกเฉินช่วงสุดสัปดาห์)'],
        ['Part 4 · Action', 'What should someone with an invoice question do?', ['Remain on the line without pressing a number', 'Enter an eight-digit airway bill code', 'Call back Monday morning at six o’clock', 'Press one to download a monthly receipt'], 0, 'ตอบ Remain on the line without pressing a number (หากมีคำถามเรื่องใบแจ้งหนี้ให้ถือสายรอได้เลย)'],
      ]),

    p4(21, 'l21-p4-8', 'the following project briefing and milestone chart', 'uk_f2',
      'Good morning, clinical steering committee. Please review our Phase Two Drug Trial Milestone Tracker on screen. As you can see, Protocol Approval and Lab Assay Setup wrapped up right on target. However, notice our third row: multi-center patient enrollment sits three weeks behind schedule because two partner hospitals took longer than expected to clear local ethics reviews. Consequently, our final safety database lock shifts from October to mid-November—meaning we won’t need external statistical auditors until November eighteenth.',
      doc('table', 'NeuroCalm Phase II — Trial Milestone Tracker', [['Updated', 'Week 28']], [
        tbl(
          ['Trial Milestone', 'Target Date', 'Current Status', 'Variance'],
          [
            ['Protocol Approval', 'March 15', 'Completed', 'On Time'],
            ['Lab Assay Setup', 'May 10', 'Completed', 'On Time'],
            ['Patient Enrollment (N=240)', 'August 30', 'In Progress', '3 Weeks Behind'],
            ['Safety Database Lock', 'October 25', 'Rescheduled', 'Mid-November'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which trial milestone is currently running behind schedule?', ['Patient Enrollment', 'Protocol Approval', 'Lab Assay Setup', 'Safety Database Lock'], 0, 'ตอบ Patient Enrollment (ตารางระบุ Patient Enrollment สถานะ In Progress และล่าช้า 3 สัปดาห์)'],
        ['Part 4 · Cause', 'Why did that milestone fall three weeks behind target?', ['Two partner hospitals faced slower local ethics board approvals', 'Laboratory blood assay machines failed initial calibration', 'External statistical auditors requested extra protocol edits', 'Two hundred forty volunteers withdrew from the study'], 0, 'ตอบ Two partner hospitals faced slower local ethics board approvals (โรงพยาบาลพันธมิตรสองแห่งผ่านการพิจารณาจริยธรรมการวิจัยล่าช้ากว่าคาด)'],
        ['Part 4 · Detail', 'When will external statistical auditors now be needed?', ['On November 18', 'On October 25', 'On August 30', 'On May 10'], 0, 'ตอบ On November 18 (ผู้บรรยายระบุว่าจะยังไม่เรียกผู้ตรวจสอบสถิติภายนอกจนกว่าจะถึงวันที่ 18 พฤศจิกายน)'],
      ]),

    p4(21, 'l21-p4-9', 'the following warehouse announcement and dock directory', 'ca_m',
      'Attention morning forklift drivers and receiving clerks. Maintenance crews just shut down the damaged rubber dock seal at Bay Two, so please clear all outbound wooden skids from that apron right now. Any refrigerated truck arriving this morning carrying two-to-eight-degree biologics must be rerouted straight to our backup temperature-controlled chute instead of sitting idle outdoors. Dry-ambient cardboard boxes can still unload normally at the south open gate until noon repairs conclude.',
      doc('list', 'Apex Medical Depot — Loading Bay Assignments', null, [
        lst([
          'Bay 1 · Ambient Cardboard & Dry Supplies (Open Gate — No Seal)',
          'Bay 2 · Refrigerated Primary Dock (CLOSED FOR RUBBER SEAL REPAIR)',
          'Bay 3 · Backup Temperature-Controlled Chute (2°C–8°C Biologics)',
          'Bay 4 · Hazardous Dry-Ice Returns & Empty Pallet Staging',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Where should incoming refrigerated biologics trucks dock this morning?', ['Bay 3', 'Bay 1', 'Bay 2', 'Bay 4'], 0, 'ตอบ Bay 3 (Bay 2 ปิดซ่อมซีลยาง และประกาศให้รถส่งชีววัตถุควบคุมอุณหภูมิ 2–8 องศาไปที่ช่องจอดควบคุมอุณหภูมิสำรอง ซึ่งตรงกับ Bay 3)'],
        ['Part 4 · Problem', 'Why is Bay 2 temporarily closed?', ['Its rubber dock seal is undergoing repairs', 'Empty pallets are blocking the hydraulic ramp', 'Refrigeration compressors froze overnight', 'Dry-ice crates spilled across the loading lane'], 0, 'ตอบ Its rubber dock seal is undergoing repairs (ซีลยางกันความเย็นที่ Bay 2 ชำรุดและกำลังซ่อมแซม)'],
        ['Part 4 · Detail', 'When are the dock repairs expected to finish?', ['At noon', 'Before sunrise', 'Tomorrow afternoon', 'Next Monday'], 0, 'ตอบ At noon (คาดว่าการซ่อมแซมจะเสร็จสิ้นตอนเที่ยง)'],
      ]),

    p4(21, 'l21-p4-10', 'the following training talk and response card', 'au_m',
      'Let’s walk through a real scenario using your Cold-Chain Excursion Response Card. Suppose a courier hands over an antibody shipper whose digital logger flashed ten degrees Celsius for forty-five minutes while sitting on a sunny tarmac. Notice on your reference card that brief spikes under one hour fall in our moderate tier—meaning you do NOT discard the vials immediately! Move the carton straight into Walk-In Cooler A, attach an amber Hold tag, and email the stability summary to Dr. Wu within two hours.',
      doc('box', 'Lab QC — Excursion Tier Response Card', [
        ['Target Band', '2°C – 8°C'],
        ['Owner', 'Receiving QC'],
      ], [
        box('Excursion Action Protocol', [
          'Tier 1 (Minor): 8.1°C–10°C under 15 min -> Log & Release to Stock',
          'Tier 2 (Moderate): 8.1°C–12°C for 15–60 min -> Cooler A + Hold Tag + Email Dr. Wu (2 hrs)',
          'Tier 3 (Critical): Over 12°C OR over 60 min -> Quarantine Vault + Reject Batch',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which excursion tier applies to the tarmac scenario described?', ['Tier 2 (Moderate)', 'Tier 1 (Minor)', 'Tier 3 (Critical)', 'Target Band'], 0, 'ตอบ Tier 2 (Moderate) (อุณหภูมิ 10 องศาเซลเซียสนาน 45 นาที ตรงกับช่วง 8.1°C–12°C นาน 15–60 นาที ใน Tier 2)'],
        ['Part 4 · Action', 'What must the receiving technician do first with the affected carton?', ['Place it inside Walk-In Cooler A with an amber Hold tag', 'Discard all antibody vials into biohazard waste immediately', 'Release the shipment straight to regular clinic stock', 'Lock the parcel inside the Quarantine Vault'], 0, 'ตอบ Place it inside Walk-In Cooler A with an amber Hold tag (นำกล่องเข้าแช่ใน Walk-In Cooler A ทันทีและติดป้าย Hold สีเหลืองอำพัน)'],
        ['Part 4 · Detail', 'How soon should Dr. Wu receive the stability summary email?', ['Within two hours', 'Within fifteen minutes', 'By the end of the week', 'Before the truck leaves the tarmac'], 0, 'ตอบ Within two hours (ต้องส่งอีเมลสรุปผลความเสถียรให้ Dr. Wu ภายใน 2 ชั่วโมง)'],
      ]),

    // ==================== SET 22 ====================
    p1(22, 'l22-p1-1', 'uk_f', [
      'A ticket agent is handing printed programs across a counter to a patron.',
      'Audience members are filing up a carpeted balcony staircase.',
      'A violinist is placing sheet music onto a wooden music stand.',
      'Box office staff are locking glass lobby doors from the outside.',
    ], 0, 'ตอบ A ticket agent is handing printed programs across a counter to a patron. (พนักงานขายตั๋วกำลังยื่นสูจิบัตรที่พิมพ์แล้วข้ามเคาน์เตอร์ให้ผู้เข้าชม)'),
    p1(22, 'l22-p1-2', 'us_m2', [
      'A stage technician is adjusting clamps on an overhead lighting truss.',
      'Several spotlights have been boxed inside padded wooden cases.',
      'Actors are rehearsing lines under bright stage footlights.',
      'A carpenter is sweeping sawdust off a theater apron.',
    ], 0, 'ตอบ A stage technician is adjusting clamps on an overhead lighting truss. (ช่างเทคนิคเวทีกำลังปรับตัวหนีบบนโครงเหล็กแขวนไฟด้านบน)'),
    p1(22, 'l22-p1-3', 'au_f', [
      'Crystal water glasses are arranged along white-clothed banquet tables.',
      'Waitstaff are clearing empty dessert plates onto serving trays.',
      'Museum guests are seated around a fountain in a courtyard.',
      'Folded cloth napkins are stacked inside a kitchen pantry.',
    ], 0, 'ตอบ Crystal water glasses are arranged along white-clothed banquet tables. (แก้วน้ำคริสตัลถูกจัดเรียงไว้บนโต๊ะจัดเลี้ยงที่ปูผ้าสีขาว)'),
    p1(22, 'l22-p1-4', 'ca_m', [
      'Two stagehands are coiling thick black cables beside velvet curtains.',
      'Electricians are testing wall outlets along a backstage corridor.',
      'Heavy wooden benches are lined up outside a rehearsal room.',
      'A custodian is polishing brass handrails near the main lobby.',
    ], 0, 'ตอบ Two stagehands are coiling thick black cables beside velvet curtains. (ทีมงานเวทีสองคนกำลังม้วนสายไฟสีดำเส้นหนาข้างม่านกำมะหยี่)'),
    p1(22, 'l22-p1-5', 'uk_m', [
      'A museum guide is gesturing toward a framed painting for evening guests.',
      'Sculptures have been wrapped in protective foam sheets.',
      'Visitors are signing a leather guestbook at a corner podium.',
      'A photographer is mounting a tripod beside an arched doorway.',
    ], 0, 'ตอบ A museum guide is gesturing toward a framed painting for evening guests. (ผู้นำชมพิพิธภัณฑ์กำลังผายมือชี้ไปยังภาพวาดใส่กรอบให้แขกงานค่ำดู)'),
    p1(22, 'l22-p1-6', 'us_f', [
      'Musicians are seated on wooden risers tuning stringed instruments.',
      'An usher is tearing paper concert tickets at a side aisle.',
      'Empty instrument cases are scattered across a tiled hallway.',
      'A conductor is bowing toward a packed auditorium balcony.',
    ], 0, 'ตอบ Musicians are seated on wooden risers tuning stringed instruments. (นักดนตรีกำลังนั่งปรับสายเครื่องดนตรีบนอัฒจันทร์ไม้)'),

    // Set 22 Part 2 (25 Qs)
    p2(22, 'l22-p2-1', 'ca_f', 'us_m', 'Where can gala guests pick up their complimentary coat-check tags?', ['Right beside the East Marble Rotunda.', 'Before the seven-thirty chamber quartet.', 'Yes, evening gowns are recommended.'], 0, 'ตอบ Right beside the East Marble Rotunda. (ถามสถานที่รับป้ายฝากเสื้อโค้ต Where ตอบข้างโถงหินอ่อนด้านตะวันออก)'),
    p2(22, 'l22-p2-2', 'uk_m', 'au_f', 'Who programmed the dimmer cues for Act Two’s sunset scene?', ['Our assistant lighting designer finished them yesterday.', 'On the third catwalk above center stage.', 'About forty-five amber LED fixtures.'], 0, 'ตอบ Our assistant lighting designer finished them yesterday. (ถามผู้ตั้งค่าแสง Who ตอบผู้ช่วยผู้ออกแบบแสงทำเสร็จเมื่อวาน)'),
    p2(22, 'l22-p2-3', 'us_m2', 'uk_f', 'When do the box office doors open for Saturday’s matinee pickup?', ['At twelve-thirty sharp, ninety minutes before curtain.', 'Orchestra Row D, seats twelve and thirteen.', 'Only for prepaid conservatory subscribers.'], 0, 'ตอบ At twelve-thirty sharp, ninety minutes before curtain. (ถามเวลาเปิดห้องตั๋ว When ตอบ 12:30 น. ตรง ก่อนม่านเปิด 90 นาที)'),
    p2(22, 'l22-p2-4', 'au_f', 'ca_m', 'Why did the symphony postpone tomorrow’s outdoor park rehearsal?', ['High winds are forecast along the waterfront bandstand.', 'Nearly sixty brass and woodwind players.', 'Try calling the donor relations extension.'], 0, 'ตอบ High winds are forecast along the waterfront bandstand. (ถามเหตุผล Why ตอบเพราะพยากรณ์อากาศคาดว่าจะมีลมแรงริมน้ำ)'),
    p2(22, 'l22-p2-5', 'us_f', 'uk_m', 'How many spare spotlight color frames should I bring up to the fly gallery?', ['Grab a dozen, just in case two gels warp under heat.', 'Yes, the stage rigging passed inspection.', 'Up the steel spiral staircase behind Stage Left.'], 0, 'ตอบ Grab a dozen, just in case two gels warp under heat. (ถามจำนวน How many ตอบให้หยิบขึ้นไป 12 ชิ้นเผื่อแผ่นเจลสีบิดงอ)'),
    p2(22, 'l22-p2-6', 'uk_f2', 'us_m', 'Should we seat the museum trustees near the podium or overlooking the sculpture terrace?', ['Near the podium works better for the keynote toast.', 'Invitations went out three weeks ago.', 'Both tables hold ten dinner guests.'], 0, 'ตอบ Near the podium works better for the keynote toast. (ถามทางเลือก A or B ตอบจัดให้นั่งใกล้โพเดียมดีกว่าสำหรับช่วงกล่าวเปิด)'),
    p2(22, 'l22-p2-7', 'ca_m', 'au_f', 'Didn’t the catering kitchen send over the vegetarian gala seating list?', ['Wait—I saw Chef Marco checking revisions with Reception.', 'Yes, dinner rolls will be served warm.', 'At the corner of Elm and Fourth Avenue.'], 0, 'ตอบ Wait—I saw Chef Marco checking revisions with Reception. (คำถามปฏิเสธ Didn’t... ตอบข้อมูลที่เห็นว่าเชฟกำลังตรวจรายการแก้ไขอยู่กับแผนกต้อนรับ)'),
    p2(22, 'l22-p2-8', 'au_m', 'us_f2', 'Could you lower the center stage spotlight rig by two feet?', ['Give me one minute to clear the crew below first.', 'No, I already bought my symphony season pass.', 'It weighs around three hundred kilograms.'], 0, 'ตอบ Give me one minute to clear the crew below first. (ขอให้ลดโครงไฟเวทีลง 2 ฟุต ตอบรับโดยขอเวลา 1 นาทีเคลียร์คนด้านล่างก่อน)'),
    p2(22, 'l22-p2-9', 'us_m', 'uk_f', 'Which theater exit leads straight out to the valet pickup lane?', ['Take the North Canopy doors past the gift kiosk.', 'Valet tickets cost twenty-five dollars.', 'Every Friday and Saturday night through May.'], 0, 'ตอบ Take the North Canopy doors past the gift kiosk. (ถามทางออก Which exit ตอบให้ออกประตู North Canopy ผ่านร้านขายของที่ระลึก)'),
    p2(22, 'l22-p2-10', 'uk_f', 'ca_f', 'How long is the intermission during tonight’s Beethoven concert?', ['Twenty minutes—just enough time for lobby refreshments.', 'With a guest cellist from Vienna.', 'Yes, the acoustic shell looks magnificent.'], 0, 'ตอบ Twenty minutes—just enough time for lobby refreshments. (ถามระยะเวลาพักครึ่ง How long ตอบ 20 นาที)'),
    p2(22, 'l22-p2-11', 'ca_f', 'uk_m', 'What should I tell donors who lost their digital gala QR passes?', ['Have them show a photo ID at the Patron Check-In desk.', 'Donations doubled compared with last autumn.', 'Yes, champagne glasses were polished this morning.'], 0, 'ตอบ Have them show a photo ID at the Patron Check-In desk. (ถามวิธีรับมือ What should I tell... ตอบให้แสดงบัตรประชาชนที่โต๊ะลงทะเบียนผู้อุปถัมภ์)'),
    p2(22, 'l22-p2-12', 'au_f', 'us_m2', 'The box office credit card terminal keeps losing its Wi-Fi signal.', ['Plug in the backup Ethernet cable coiled under Counter Two.', 'No, cash refunds require a manager.', 'Over four hundred tickets sold this morning.'], 0, 'ตอบ Plug in the backup Ethernet cable coiled under Counter Two. (แจ้งปัญหาเครื่องรูดบัตรหลุด Wi-Fi ตอบแนะวิธีแก้ให้เสียบสายแลนสำรองใต้เคาน์เตอร์สอง)'),
    p2(22, 'l22-p2-13', 'us_f2', 'au_m', 'Why don’t we open the balcony lobby doors ten minutes early tonight?', ['Smart idea—there’s already a crowd forming outside.', 'Balcony rows start at twenty-eight dollars.', 'No, the usher team wore navy blazers.'], 0, 'ตอบ Smart idea—there’s already a crowd forming outside. (ข้อเสนอเปิดประตูเร็วขึ้น 10 นาที ตอบเห็นด้วยเพราะคนเริ่มรอข้างนอกเยอะแล้ว)'),
    p2(22, 'l22-p2-14', 'uk_m', 'us_f', 'How much is the student rush discount for Wednesday’s symphony performance?', ['Fifty percent off unsold mezzanine seats an hour before curtain.', 'Yes, bring a valid university identification card.', 'Inside the main conservatory auditorium.'], 0, 'ตอบ Fifty percent off unsold mezzanine seats an hour before curtain. (ถามส่วนลดบัตรนักศึกษา How much ตอบลด 50% สำหรับที่นั่งชั้นลอยที่ยังเหลือ)'),
    p2(22, 'l22-p2-15', 'ca_m', 'uk_f2', 'Aren’t the stage carpenters testing the motorized backdrop winch at noon?', ['Actually, sound check pushed that test back to three o’clock.', 'Mostly painted canvas and pine framing.', 'Yes, I hung my tool belt in the workshop.'], 0, 'ตอบ Actually, sound check pushed that test back to three o’clock. (ถามย้ำกำหนดการตอนเที่ยง ตอบแก้ไขว่าช่วงซาวด์เช็กทำให้เลื่อนไปบ่ายสามแล้ว)'),
    p2(22, 'l22-p2-16', 'us_m', 'ca_f', 'Would you like me to carry those heavy brass music stands up to the stage?', ['Thanks! Put six near the percussion riser.', 'No, the conductor brought his own baton.', 'About thirty-five minutes until rehearsal.'], 0, 'ตอบ Thanks! Put six near the percussion riser. (เสนอช่วยยกแท่นวางโน้ต ตอบขอบคุณและบอกจุดวาง)'),
    p2(22, 'l22-p2-17', 'uk_f2', 'au_f', 'Do you know who donated the grand piano for the museum atrium gala?', ['A longtime benefactor from the Heritage Circle.', 'At eight-fifteen right after dessert.', 'Yes, it was tuned early this morning.'], 0, 'ตอบ A longtime benefactor from the Heritage Circle. (ถามผู้บริจาคเปียโน Do you know who... ตอบผู้สนับสนุนระยะยาวจากกลุ่ม Heritage Circle)'),
    p2(22, 'l22-p2-18', 'au_m', 'uk_m', 'You checked every safety shackle on the front spotlight truss, right?', ['Yes, all twelve steel pins are locked and taped.', 'They produce a soft cool-white beam.', 'Until the closing curtain falls on Sunday.'], 0, 'ตอบ Yes, all twelve steel pins are locked and taped. (Tag question ถามยืนยันการตรวจความปลอดภัย ตอบยืนยันว่าสลักเหล็กทั้ง 12 ตัวล็อกเรียบร้อยแล้ว)'),
    p2(22, 'l22-p2-19', 'us_f', 'ca_m', 'What time will the floral team finish setting up the gala centerpieces?', ['They promised to clear the ballroom floor before five P.M.', 'Mainly white orchids and silver eucalyptus.', 'In the service corridor behind the coat room.'], 0, 'ตอบ They promised to clear the ballroom floor before five P.M. (ถามเวลาจัดดอกไม้เสร็จ What time ตอบรับปากว่าจะเคลียร์พื้นที่เสร็จก่อนห้าโมงเย็น)'),
    p2(22, 'l22-p2-20', 'uk_m', 'us_f2', 'How often does the theater inspect its overhead counterweight ropes?', ['Every spring and autumn by certified riggers.', 'Two tons across forty-two stage battens.', 'Down behind the orchestra pit stairs.'], 0, 'ตอบ Every spring and autumn by certified riggers. (ถามความถี่การตรวจเชือกเวที How often ตอบตรวจทุกฤดูใบไม้ผลิและใบไม้ร่วง)'),
    p2(22, 'l22-p2-21', 'ca_f', 'au_m', 'I heard the museum extended the Bronze Age exhibition through August.', ['Great news—my out-of-town cousins can still catch it.', 'Yes, the gift shop closes at six.', 'Tickets include audio headset guides.'], 0, 'ตอบ Great news—my out-of-town cousins can still catch it. (บอกเล่าข่าวการขยายเวลานิทรรศการ ตอบรับด้วยความยินดี)'),
    p2(22, 'l22-p2-22', 'us_m2', 'uk_f', 'Where did Stage Manager Priya place the spare wireless headset mics?', ['Locked inside the black rolling road-case by Wing Right.', 'Because three actors are sharing dressing rooms.', 'Around two hours prior to curtain call.'], 0, 'ตอบ Locked inside the black rolling road-case by Wing Right. (ถามหาของ Where ตอบเก็บล็อกไว้ในกล่องล้อเลื่อนสีดำข้างปีกขวาของเวที)'),
    p2(22, 'l22-p2-23', 'au_f', 'ca_m', 'Whose symphony donor lanyard is sitting on the box-office sill?', ['Maybe Mr. Alvarez’s—he stopped by to ask about parking.', 'No, I already scanned all VIP guests.', 'Put the extra brochures under the shelf.'], 0, 'ตอบ Maybe Mr. Alvarez’s—he stopped by to ask about parking. (ถามความเป็นเจ้าของ Whose ตอบอาจจะเป็นของคุณ Alvarez เพราะเพิ่งแวะมาถามเรื่องที่จอดรถ)'),
    p2(22, 'l22-p2-24', 'uk_f', 'us_m', 'Can an usher swap two rear-balcony tickets for wheelchair-accessible seats?', ['Only the head treasurer can process accessible exchanges.', 'Front orchestra seats have plush velvet cushions.', 'Sure, the performance sold out last Friday.'], 0, 'ตอบ Only the head treasurer can process accessible exchanges. (ถามว่าพนักงานเดินตั๋วสลับที่นั่งพิเศษได้ไหม ตอบเลี่ยงว่าต้องให้หัวหน้าฝ่ายการเงินดำเนินการเท่านั้น)'),
    p2(22, 'l22-p2-25', 'ca_m', 'us_f2', 'Is the museum’s rooftop terrace open during Saturday’s rain forecast?', ['No, we’ll shift the cocktail reception into the Glass Pavilion.', 'Over three hundred members renewed online.', 'Around forty minutes per gallery tour.'], 0, 'ตอบ No, we’ll shift the cocktail reception into the Glass Pavilion. (ถามว่าดาดฟ้าเปิดไหมถ้าฝนตก ตอบว่าไม่เปิด และจะย้ายงานเลี้ยงค็อกเทลไปที่ Glass Pavilion แทน)'),

    // Set 22 Part 3 (13 Conversations: Convs 4 & 8 have 3 speakers; Convs 11-13 have Graphics)
    p3(22, 'l22-p3-1', [
      ['Man', 'us_m', 'Excuse me, I bought two balcony tickets for tonight’s violin concerto, but my wife hurt her ankle yesterday and can’t climb the upper stairs.'],
      ['Woman', 'ca_f', 'I’m sorry to hear that! Let me check our main-floor inventory—the symphony hall has no elevator to the upper balcony, so we definitely want her seated downstairs.'],
      ['Man', 'us_m', 'Thank you—do you have anything open near an aisle on the ground level?'],
      ['Woman', 'ca_f', 'Yes, two seats just released in Dress Circle Side Row F, step-free right from the lobby. There’s no upgrade fee due to medical accessibility—let me print those right away!'],
    ], null, [
      ['Part 3 · Reason', 'Why is the man requesting different concert seats?', ['His wife injured her ankle and cannot manage balcony stairs', 'He arrived late and missed the balcony seating call', 'Obstructed pillars blocked his view of the violin soloist', 'He prefers listening closer to the orchestra percussion section'], 0, 'ตอบ His wife injured her ankle and cannot manage balcony stairs (ภรรยาข้อเท้าเจ็บเมื่อวาน จึงขึ้นบันไดไปชั้นระเบียงบนไม่ไหว)'],
      ['Part 3 · Detail', 'Where will the couple be seated instead?', ['In Dress Circle Side Row F', 'In the upper balcony front row', 'Inside a private upstairs box', 'Beside the second-floor elevator'], 0, 'ตอบ In Dress Circle Side Row F (เจ้าหน้าที่เปลี่ยนที่นั่งให้เป็นโซน Dress Circle ด้านข้างแถว F ที่เดินเข้าจากล็อบบี้โดยไม่มีบันได)'],
      ['Part 3 · Detail', 'How much extra will the man pay for the seat change?', ['Nothing', 'Twenty-five dollars', 'Half of the original ticket cost', 'A ten-dollar exchange fee'], 0, 'ตอบ Nothing (ไม่มีค่าอัปเกรดเพิ่มเติมเพราะเป็นกรณีความจำเป็นทางการแพทย์)'],
    ]),

    p3(22, 'l22-p3-2', [
      ['Man', 'uk_m', 'Tessa, that center-stage LED wash fixture keeps strobing randomly during cue fourteen, even though the lighting board shows a steady blue fade.'],
      ['Woman', 'us_f2', 'Strobing usually points to a loose DMX data cable or an unshielded splitter up on Truss Two. Did you swap out the jumper wire yet?'],
      ['Man', 'uk_m', 'I swapped the jumper five minutes ago and it still flickers. Think the fixture’s internal power driver is going bad?'],
      ['Woman', 'us_f2', 'Possibly—better not risk it during tonight’s premiere! Unplug unit twelve from the truss and mount our calibrated spare from the backstage road-case.'],
    ], null, [
      ['Part 3 · Problem', 'What malfunction is occurring on stage?', ['An overhead LED light flashes unpredictably during a steady cue', 'The main lighting console lost all saved show cues', 'Backstage road-case locks jammed before rehearsal', 'Truss Two cables cannot reach the center outlet'], 0, 'ตอบ An overhead LED light flashes unpredictably during a steady cue (โคมไฟ LED กลางเวทีกระพริบผิดปกติระหว่างคิวที่ 14 ทั้งที่ตั้งค่าให้ค่อยๆ จาง)'],
      ['Part 3 · Detail', 'What troubleshooting step has the man already tried?', ['Replacing the jumper cable', 'Resetting the entire lighting console', 'Moving the light onto Truss One', 'Lowering the catwalk harness'], 0, 'ตอบ Replacing the jumper cable (ผู้ชายลองเปลี่ยนสายจัมเปอร์ไปเมื่อ 5 นาทีก่อนแล้วแต่ยังกระพริบอยู่)'],
      ['Part 3 · Action', 'What does the woman decide to do before tonight’s show?', ['Replace the faulty fixture with a spare unit from backstage', 'Program a shorter blue fade on cue fourteen', 'Order a replacement power driver for next week', 'Keep unit twelve off throughout Act Two'], 0, 'ตอบ Replace the faulty fixture with a spare unit from backstage (ถอดตัวที่เสียออกและนำโคมสำรองจากกล่องหลังเวทีขึ้นติดตั้งแทน)'],
    ]),

    p3(22, 'l22-p3-3', [
      ['Woman1', 'au_f', 'Hi Claire, thanks for bringing these sample white orchid arrangements into the museum’s Atrium Gallery ahead of tomorrow’s gala.'],
      ['Woman2', 'uk_f', 'My pleasure! Look how nicely those tall glass vases echo the height of the stone columns—do you want thirty-two of these across the dinner tables?'],
      ['Woman1', 'au_f', 'Hmm, wait—they’re gorgeous, though sit down at chair level for one second. Can you see the keynote podium clearly across those tall stems?'],
      ['Woman2', 'uk_f', 'Ooh, fair catch! They sit right at eye level when seated! Let’s trim the stems into low silver bowls so donors see both the stage and each other across dinner.'],
    ], null, [
      ['Part 3 · Location', 'Where is the conversation most likely taking place?', ['Inside a museum gallery preparing for a banquet', 'At a wholesale flower market downtown', 'Inside a symphony concert box office', 'In a theater workshop building wooden tables'], 0, 'ตอบ Inside a museum gallery preparing for a banquet (สนทนาอยู่ในโถงพิพิธภัณฑ์ Atrium Gallery เพื่อเตรียมงานเลี้ยงกาลาวันพรุ่งนี้)'],
      ['Part 3 · Problem', 'What drawback does the first woman notice about the sample arrangements?', ['The tall vases block seated guests’ view of the speaker podium', 'White orchids clash with the gallery’s silver tablecloths', 'Thirty-two glass vases exceed the florist’s delivery budget', 'Stone columns hide corner tables near the doorway'], 0, 'ตอบ The tall vases block seated guests’ view of the speaker podium (แจกันสูงบดบังสายตาแขกที่นั่งโต๊ะไม่ให้เห็นโพเดียมบนเวที)'],
      ['Part 3 · Decision', 'How will the floral displays be modified?', ['Flowers will be cut shorter and placed in low silver bowls', 'Ten centerpieces will be removed from front-row tables', 'Tall glass vases will move onto the keynote stage', 'Candle holders will replace orchids across the atrium'], 0, 'ตอบ Flowers will be cut shorter and placed in low silver bowls (ตัดก้านให้สั้นลงและจัดใส่ชามเงินทรงเตี้ยแทน)'],
    ]),

    p3(22, 'l22-p3-4', [
      ['Man1', 'us_m2', 'Hey team, our box office phone lines have been ringing nonstop—music students say the online rush discount code gives an error message at checkout!'],
      ['Woman', 'ca_f', 'I tested code RUSH22 five minutes ago too—it displays "Invalid Event Category" even when selecting Wednesday’s symphonic pops concert!'],
      ['Man2', 'uk_m', 'Let me check the ticketing admin panel—aha! Someone linked RUSH22 exclusively to classical masterworks series instead of pops concerts!'],
      ['Man1', 'us_m2', 'Can you enable it across both concert tags immediately?'],
      ['Man2', 'uk_m', 'Done—just saved the update! Wait—tell phone agents to honor the fifty-percent rush rate manually for anyone calling in during the next hour while cached browsers clear.'],
    ], null, [
      ['Part 3 · Problem', 'Why could music students not apply the online discount code?', ['The promo code was restricted to the wrong concert category', 'Student rush tickets for Wednesday already sold out', 'Checkout pages crashed under heavy web traffic', 'Conservatory email addresses were missing from the database'], 0, 'ตอบ The promo code was restricted to the wrong concert category (รหัสส่วนลดถูกผูกไว้กับหมวดคอนเสิร์ตคลาสสิกเท่านั้น ไม่รวมรอบซิมโฟนิกป๊อป)'],
      ['Part 3 · Detail', 'Who identifies the technical setting error?', ['The second man', 'The first man', 'The woman', 'A music conservatory student'], 0, 'ตอบ The second man (ผู้ชายคนที่สองเข้าไปตรวจแผงแอดมินแล้วพบสาเหตุ)'],
      ['Part 3 · Action', 'What instruction does the second man give for incoming callers?', ['Apply the half-price discount manually for the next hour', 'Ask students to refresh their browser tomorrow morning', 'Direct callers to visit the lobby box office window instead', 'Send replacement promo codes to university counselors'], 0, 'ตอบ Apply the half-price discount manually for the next hour (ให้พนักงานรับสายลดราคา 50% ให้ลูกค้าแบบแมนนวลไปก่อน 1 ชั่วโมงระหว่างที่ระบบเคลียร์แคช)'],
    ]),

    p3(22, 'l22-p3-5', [
      ['Woman', 'us_f', 'Hold on, Dan—before your touring sound crew attaches two more line-array speaker boxes onto Truss B, check our certified load sticker!'],
      ['Man', 'au_m', 'Let’s see—Truss B says six hundred kilograms maximum uniform load, and we’re already hanging lighting fixtures across the middle span.'],
      ['Woman', 'us_f', 'Exactly. Those two speaker cabinets weigh ninety kilos apiece, which pushes Truss B past safe rigging margin once cable weight adds up.'],
      ['Man', 'au_m', 'Good catch! Let’s stack the extra subwoofers neatly on stage-side floor risers instead of flying them overhead.'],
    ], null, [
      ['Part 3 · Topic', 'What safety concern do the speakers discuss?', ['Exceeding the maximum overhead weight limit on a stage truss', 'Blocking audience sightlines with tall floor speakers', 'Insufficient electrical outlets along Truss B', 'Loose speaker brackets rattling during acoustic sets'], 0, 'ตอบ Exceeding the maximum overhead weight limit on a stage truss (กังวลว่าจะแขวนลำโพงหนักเกินพิกัดรับน้ำหนักของโครงเหล็ก Truss B)'],
      ['Part 3 · Detail', 'How heavy is each additional speaker cabinet?', ['Ninety kilograms', 'Six hundred kilograms', 'One hundred kilograms', 'Forty-five kilograms'], 0, 'ตอบ Ninety kilograms (ตู้ลำโพงแต่ละใบหนัก 90 กิโลกรัม)'],
      ['Part 3 · Decision', 'What will Dan’s crew do with the extra speakers?', ['Place them on ground-level risers beside the stage', 'Remove two lighting fixtures from Truss B', 'Split the speaker load onto Truss A instead', 'Leave the extra equipment inside the tour truck'], 0, 'ตอบ Place them on ground-level risers beside the stage (วางซับวูฟเฟอร์เสริมบนแท่นยกพื้นด้านข้างเวทีแทนการแขวนด้านบน)'],
    ]),

    p3(22, 'l22-p3-6', [
      ['Woman', 'uk_f2', 'Sam, expect a bigger surge of black-car arrivals at Saturday’s Museum Gala—we sold out all forty benefactor VIP tables!'],
      ['Man', 'ca_m', 'Forty tables! If all those town cars queue inside our single-lane cobblestone courtyard, traffic will back right out onto Grand Avenue before seven.'],
      ['Woman', 'uk_f2', 'That’s why I arranged city cones along the wide west side-street. Can your security team station two valets there to check donor passes before drivers enter the drop-off loop?'],
      ['Man', 'ca_m', 'Definitely—putting two flaggers on the side street keeps traffic moving smoothly while keeping non-gala cars out of the courtyard.'],
    ], null, [
      ['Part 3 · Problem', 'What traffic issue does the man anticipate for Saturday evening?', ['Arriving VIP vehicles backing up into Grand Avenue', 'Lack of parking spaces for museum security staff', 'City cones blocking pedestrian access to the main courtyard', 'Rain making the cobblestone driveway slippery'], 0, 'ตอบ Arriving VIP vehicles backing up into Grand Avenue (รถรับส่งแขก VIP จำนวนมากอาจติดสะสมล้นออกไปถึงถนน Grand Avenue)'],
      ['Part 3 · Detail', 'How many VIP tables were sold for the gala?', ['Forty', 'Twenty', 'Sixty', 'Fourteen'], 0, 'ตอบ Forty (ขายโต๊ะ VIP สำหรับผู้อุปถัมภ์ครบหมดแล้ว 40 โต๊ะ)'],
      ['Part 3 · Proposal', 'What staffing plan does the woman suggest?', ['Assigning two security valets to verify passes on the west side-street', 'Closing Grand Avenue to public buses after seven o’clock', 'Asking benefactor guests to use municipal garages instead', 'Moving the main gala entrance around to the loading dock'], 0, 'ตอบ Assigning two security valets to verify passes on the west side-street (วางกรวยและจัดเจ้าหน้าที่ 2 คนตรวจบัตรเชิญตรงถนนซอยฝั่งตะวันตกก่อนเข้าลานจอด)'],
    ]),

    p3(22, 'l22-p3-7', [
      ['Man', 'us_m', 'Hi Maya, I’m reviewing Friday’s orchestra stage plot with the percussion section—where are we positioning the concert harp and the four timpani drums?'],
      ['Woman', 'au_f', 'Wait—if you put timpani up on the rear right corner, they sit directly beneath the narrow stage-right doorway where harpist Naomi wheels her instrument case!'],
      ['Man', 'us_m', 'Ooh, right—concert harps need wide double doors and level rolling clearance. Could we move timpani slightly toward center-rear riser three instead?'],
      ['Woman', 'au_f', 'Perfect! That leaves a wide, unobstructed rolling lane straight from the backstage freight lift to Naomi’s front-left spot.'],
    ], null, [
      ['Part 3 · Topic', 'What are the speakers arranging?', ['Stage seating and rolling clearance for large orchestra instruments', 'Ticket discounts for visiting conservatory percussionists', 'Repairs to a stuck backstage freight elevator', 'Soundproofing curtains behind the rear choir risers'], 0, 'ตอบ Stage seating and rolling clearance for large orchestra instruments (จัดผังตำแหน่งวางเครื่องดนตรีขนาดใหญ่และทางเข็นฮาร์ปบนเวที)'],
      ['Part 3 · Problem', 'Why shouldn’t the timpani drums be placed in the rear right corner?', ['They would block the narrow rolling path needed for the harp', 'Rear-corner risers cannot support heavy copper drums', 'Audience seats on the right cannot hear rear percussion', 'Overhead microphones pick up too much drum echo there'], 0, 'ตอบ They would block the narrow rolling path needed for the harp (จะขวางทางเข้าออกที่นักเล่นฮาร์ปใช้เข็นกล่องเครื่องดนตรีขนาดใหญ่)'],
      ['Part 3 · Decision', 'Where will the timpani section be placed instead?', ['On center-rear riser three', 'Beside the front-left audience aisle', 'Directly outside the backstage freight lift', 'Underneath the conductor’s main podium'], 0, 'ตอบ On center-rear riser three (ย้ายชุดกลองทิมปานีไปวางที่แท่นยกพื้นแถวหลังตรงกลางหมายเลข 3 แทน)'],
    ]),

    p3(22, 'l22-p3-8', [
      ['Woman1', 'uk_f', 'Hold on everyone—let’s run that final curtain cue one more time! When the painted stone archway rolls backward, our lead actor walks straight into darkness!'],
      ['Man', 'us_m2', 'I see why—our carpenter crew moved the archway five feet farther upstage than yesterday’s tape mark, so spotlight three misses him completely!'],
      ['Woman2', 'ca_f', 'Should my scenic team shift the rolling archway track back to yesterday’s chalk line, or can lighting widen the beam?'],
      ['Woman1', 'uk_f', 'Keep the archway deeper upstage—visually it looks way grander! Can your booth widen spotlight three by twenty degrees and bring it up half a second earlier?'],
      ['Man', 'us_m2', 'Easy fix! Let me update cue forty-two on the board right now and test it with the actor walking through.'],
    ], null, [
      ['Part 3 · Problem', 'What went wrong during the stage rehearsal cue?', ['A repositioned scenic arch left the lead actor standing outside the spotlight', 'Motorized stage scenery rolled too slowly before final curtain', 'Chalk alignment marks rubbed off the painted floorboard', 'Spotlight three burned out mid-scene during Act Two'], 0, 'ตอบ A repositioned scenic arch left the lead actor standing outside the spotlight (ทีมช่างขยับซุ้มประตูฉากถอยลึกเข้าไปอีก 5 ฟุต ทำให้แสงสปอตไลต์ส่องไม่ถึงนักแสดงนำ)'],
      ['Part 3 · Decision', 'What does the director prefer to do with the stone archway?', ['Leave it in its deeper upstage position', 'Roll it five feet closer toward the audience', 'Remove the heavy arch before opening night', 'Replace it with a painted canvas backdrop'], 0, 'ตอบ Leave it in its deeper upstage position (ผู้กำกับชอบให้ตั้งซุ้มประตูไว้ลึกด้านหลังแบบใหม่เพราะดูยิ่งใหญ่กว่า)'],
      ['Part 3 · Action', 'How will the lighting technician fix cue forty-two?', ['By widening spotlight three’s beam and triggering it slightly earlier', 'By installing an extra footlight strip along the arch frame', 'By asking the actor to pause half a second in the doorway', 'By moving the booth operator closer to stage center'], 0, 'ตอบ By widening spotlight three’s beam and triggering it slightly earlier (ขยายมุมลำแสงสปอตไลต์ตัวที่สามให้กว้างขึ้น 20 องศาและเปิดไฟเร็วขึ้นครึ่งวินาที)'],
    ]),

    p3(22, 'l22-p3-9', [
      ['Man', 'au_m', 'Hi Hannah, I’m calling from Sterling Press regarding the embossed cream dinner menus for Thursday’s Museum Gala. We ran into one last-minute snag.'],
      ['Woman', 'uk_f', 'Oh no—don’t tell me the gold foil stamp tore the heavyweight cotton paper!'],
      ['Man', 'au_m', 'No, the foil looks gorgeous! However, your chef emailed an allergy update swapping walnut sauce to sunflower glaze on the roasted sea bass—do you want that updated before we trim all three hundred cards?'],
      ['Woman', 'uk_f', 'Oh, thank goodness you caught that before cutting! Yes—update line four immediately, and I’ll approve the digital proof within ten minutes.'],
    ], null, [
      ['Part 3 · Detail', 'Why did the printer contact Hannah?', ['A menu ingredient change arrived right before final cutting', 'Gold foil ink smudged across heavyweight cotton cards', 'Three hundred gala menus were accidentally trimmed too small', 'Chef’s office sent the wrong total table count'], 0, 'ตอบ A menu ingredient change arrived right before final cutting (เชฟเพิ่งแจ้งเปลี่ยนซอสจากวอลนัทเป็นเมล็ดทานตะวันเนื่องจากข้อกังวลเรื่องการแพ้อาหาร ก่อนที่โรงพิมพ์จะตัดกระดาษทั้งหมด)'],
      ['Part 3 · Detail', 'What condition is the gold foil stamping in?', ['It came out properly without damaging the paper', 'It peeled slightly around the card borders', 'It requires an extra day to dry completely', 'It needs darker ink over cream cotton stock'], 0, 'ตอบ It came out properly without damaging the paper (ผู้ชายบอกว่าฟอยล์สีทองออกมาสวยงามดี ไม่ได้ทำให้กระดาษขาด)'],
      ['Part 3 · Action', 'What will Hannah do within the next ten minutes?', ['Approve an updated digital proof of the menu', 'Ask the chef to restore the original walnut sauce', 'Drive over to Sterling Press to inspect sample cards', 'Cancel printing for half of the gala dinner tables'], 0, 'ตอบ Approve an updated digital proof of the menu (จะอนุมัติไฟล์ปรู๊ฟดิจิทัลที่แก้ไขบรรทัดที่สี่แล้วภายใน 10 นาที)'],
    ]),

    p3(22, 'l22-p3-10', [
      ['Woman', 'us_f2', 'Hi, I’m leading twenty music conservatory students for tonight’s brass recital, and the box office will-call envelope only holds sixteen printed passes!'],
      ['Man', 'uk_m', 'Let me check your university group invoice right here—oh, your department booked sixteen tickets in October, then paid an add-on receipt for four more on Tuesday!'],
      ['Woman', 'us_f2', 'Right! Our four freshman horn players joined last minute, and the recital doors open in twenty minutes!'],
      ['Man', 'uk_m', 'No problem—those four add-on seats sit right across the aisle in Row K. Let me print those extra stubs at Window Two right now so your whole class heads inside together.'],
    ], null, [
      ['Part 3 · Problem', 'Why were four student tickets missing from the will-call envelope?', ['Four additional seats were purchased separately a few days before the show', 'Conservatory students lost their passes inside the lobby', 'Will-call staff misplaced one of the October invoices', 'The brass recital hall limited school groups to sixteen guests'], 0, 'ตอบ Four additional seats were purchased separately a few days before the show (ทางมหาวิทยาลัยเพิ่งจ่ายเงินซื้อตั๋วเพิ่มอีก 4 ที่นั่งเมื่อวันอังคารที่ผ่านมาแยกจากใบจองเดือนตุลาคม)'],
      ['Part 3 · Detail', 'When does the recital hall open for audience entry?', ['In twenty minutes', 'At seven-thirty sharp', 'In an hour', 'Next Tuesday'], 0, 'ตอบ In twenty minutes (ประตูห้องแสดงจะเปิดในอีก 20 นาทีข้างหน้า)'],
      ['Part 3 · Action', 'What will the box office clerk do right away?', ['Print the remaining four tickets at Window Two', 'Refund the October conservatory group invoice', 'Seat the four freshman players backstage', 'Ask the leader to download mobile tickets'], 0, 'ตอบ Print the remaining four tickets at Window Two (พนักงานจะพิมพ์ตั๋วอีก 4 ใบที่ช่องหน้าต่าง 2 ให้ทันที)'],
    ]),

    p3(22, 'l22-p3-11', [
      ['Woman', 'uk_f', 'Good afternoon, Symphony Box Office. How can I help you today?'],
      ['Man', 'us_m', 'Hi! I’m trying to book four adjacent seats for Sunday’s Mahler concert. One member of our group uses a walker, so we strictly need zero steps from the street—and we’re hoping to keep tickets under ninety-five dollars each.'],
      ['Woman', 'uk_f', 'Wait—let me check our Seating Tier Chart here. Orchestra Front costs way over your ceiling, and Mezzanine Rear only opens via twenty stairs—no lift goes up there!'],
      ['Man', 'us_m', 'Ah, stairs won’t work at all. What about Orchestra Side or Dress Circle?'],
      ['Woman', 'uk_f', 'Dress Circle Center runs one hundred ten dollars, whereas Orchestra Side seats sit completely step-free off the main lobby at eighty-eight dollars each—and I have four together in Row M!'],
    ], doc('table', 'Symphony Hall — Seating Tiers & Accessibility Guide', [['Event', 'Sunday Matinee']], [
      tbl(
        ['Section', 'Ticket Price', 'Access Route', 'Available Adjacent'],
        [
          ['Orchestra Front', '$135', 'Step-Free Lobby', '2 Seats'],
          ['Orchestra Side', '$88', 'Step-Free Lobby', '6 Seats'],
          ['Dress Circle Center', '$110', 'Ramp / Lift', '4 Seats'],
          ['Mezzanine Rear', '$62', '20 Stairs (No Lift)', '8 Seats'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which seating section meets all of the caller’s requirements?', ['Orchestra Side', 'Orchestra Front', 'Dress Circle Center', 'Mezzanine Rear'], 0, 'ตอบ Orchestra Side (ผู้โทรต้องการ 4 ที่นั่งติดกัน ราคาไม่เกิน $95 และไม่มีขั้นบันได จึงตรงกับ Orchestra Side ราคา $88 ทางเข้า Step-Free ที่ว่าง 6 ที่)'],
      ['Part 3 · Graphic', 'Why does the box office clerk rule out Mezzanine Rear?', ['Reaching that section requires climbing twenty stairs without a lift', 'Only two adjacent tickets remain in the back row', 'Sound echoes poorly underneath the rear balcony overhang', 'Sunday afternoon matinees close the mezzanine section'], 0, 'ตอบ Reaching that section requires climbing twenty stairs without a lift (ชั้น Mezzanine Rear ต้องเดินขึ้นบันได 20 ขั้นและไม่มีลิฟต์ ซึ่งไม่เหมาะกับผู้ใช้เครื่องช่วยเดิน)'],
      ['Part 3 · Detail', 'How much will each ticket in the chosen section cost?', ['$88', '$62', '$110', '$135'], 0, 'ตอบ $88 (ราคาตั๋วของโซน Orchestra Side คือใบละ $88)'],
    ]),

    p3(22, 'l22-p3-12', [
      ['Man', 'ca_m', 'Hey Nora, the guest lighting director just added two heavy eighteen-kilogram moving-head spotlights for tomorrow’s opera showcase. Where can we clamp thirty-six extra kilos overhead?'],
      ['Woman', 'au_f', 'Pull up our Stage Truss Load & Fixture Allocation sheet! Look at Truss One—already sitting only fifteen kilos shy of its max capacity, so that’s out.'],
      ['Man', 'ca_m', 'And Truss Four holds zero spare power outlets right now, plus Truss Two only has twenty-five kilos left—still short of thirty-six!'],
      ['Woman', 'au_f', 'Look at Truss Three though—eighty kilos of spare capacity and two open twenty-amp circuits! Hang both new spots evenly across Truss Three’s outer joints.'],
    ], doc('list', 'Grand Theater — Overhead Stage Truss Load Sheet', null, [
      lst([
        'Truss 1 (Downstage Apron) · Spare Load: 15 kg · Spare Power: 1 Circuit',
        'Truss 2 (Center Acting Zone) · Spare Load: 25 kg · Spare Power: 2 Circuits',
        'Truss 3 (Mid-Stage Choir Bar) · Spare Load: 80 kg · Spare Power: 2 Circuits',
        'Truss 4 (Upstage Backdrop) · Spare Load: 60 kg · Spare Power: 0 Open Circuits',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. On which truss will the crew mount the two new spotlights?', ['Truss 3', 'Truss 1', 'Truss 2', 'Truss 4'], 0, 'ตอบ Truss 3 (สปอตไลต์ 2 ตัวหนักรวม 36 กก. ต้องใช้โครงที่มีน้ำหนักว่างพอและมีช่องไฟเหลือ ซึ่งมีแค่ Truss 3 ที่รับได้อีก 80 กก. และมีวงจรว่าง 2 ช่อง)'],
      ['Part 3 · Graphic', 'Why is Truss 4 rejected even though it supports sixty more kilograms?', ['It has no remaining open power circuits', 'Its aluminum clamps broke during yesterday’s focus', 'Hanging heavy spots there blocks the choir microphone', 'Upstage backdrops sit too close to moving heads'], 0, 'ตอบ It has no remaining open power circuits (แม้จะรับน้ำหนักได้อีก 60 กก. แต่ Truss 4 ไม่มีวงจรไฟฟ้าว่างเหลือเลย)'],
      ['Part 3 · Detail', 'Where along the chosen truss will the spotlights be attached?', ['Across the outer joints', 'Clustered at the dead center', 'Suspended beneath the choir bar', 'Clamped onto Truss Two’s safety line'], 0, 'ตอบ Across the outer joints (ผู้หญิงสั่งให้แขวนกระจายไว้ตรงข้อต่อด้านนอกทั้งสองฝั่งของ Truss 3)'],
    ]),

    p3(22, 'l22-p3-13', [
      ['Woman', 'us_f', 'Thanks for calling about corporate sponsorship for our autumn Museum Membership Gala, Mr. Brooks.'],
      ['Man', 'uk_m', 'Our engineering firm wants to host a full table of eight clients—plus we’d love an exclusive private curatorial preview before the banquet doors open. However, our marketing budget caps out at six thousand dollars.'],
      ['Woman', 'us_f', 'Let’s match that against our Sponsorship Matrix. Silver Circle fits comfortably inside budget, though it skips the private curatorial preview. Meanwhile, Platinum Patron runs ten thousand—way above your ceiling.'],
      ['Man', 'uk_m', 'Aha—Gold Benefactor sits right at five thousand five hundred dollars, covers a full eight-seat table, AND grants early gallery access with a curator! Let’s lock in Gold Benefactor today.'],
    ], doc('box', 'City Art Museum — Gala Sponsorship Tiers', [
      ['Gala Date', 'November 14'],
      ['Table Size', '8 Guests Max'],
    ], [
      box('Corporate Patron Benefits Matrix', [
        'Bronze Friend ($1,800) · 2 Dinner Tickets · Program Listing',
        'Silver Circle ($3,500) · 4 Dinner Tickets · Lobby Logo Banner',
        'Gold Benefactor ($5,500) · Full Table (8 Seats) · Private Curator Preview',
        'Platinum Patron ($10,000) · 2 Full Tables · Curator Preview + Stage Remarks',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which gala sponsorship package will Mr. Brooks select?', ['Gold Benefactor', 'Bronze Friend', 'Silver Circle', 'Platinum Patron'], 0, 'ตอบ Gold Benefactor (งบไม่เกิน $6,000 ต้องการโต๊ะ 8 ที่นั่ง และรอบชมส่วนตัวกับภัณฑารักษ์ ตรงกับระดับ Gold Benefactor ราคา $5,500)'],
      ['Part 3 · Detail', 'Why does the caller not choose Silver Circle?', ['It seats only four guests and excludes the private curator preview', 'It omits company logo placement on lobby gala banners', 'All Silver Circle dinner seats sold out last week', 'Corporate engineering firms are restricted to Gold or higher'], 0, 'ตอบ It seats only four guests and excludes the private curator preview (ระดับ Silver ได้แค่ 4 ที่นั่งและไม่มีรอบชมพิพิธภัณฑ์ส่วนตัวกับภัณฑารักษ์)'],
      ['Part 3 · Detail', 'Who will guide the client’s group before the main banquet opens?', ['A museum curator', 'The gala florist', 'A symphony violinist', 'The museum catering director'], 0, 'ตอบ A museum curator (จะได้รับสิทธิ์เข้าชมแกลเลอรีล่วงหน้าเป็นส่วนตัวพร้อมภัณฑารักษ์)'],
    ]),

    // Set 22 Part 4 (10 Talks: Talks 8-10 have Graphics)
    p4(22, 'l22-p4-1', 'the following recorded box office message', 'us_f',
      'Thank you for calling the Civic Symphony Box Office. If you are calling regarding Sunday’s two P.M. afternoon matinee, please note that Main Street garage resurfacing begins at noon, so kindly allow an extra twenty minutes to park in the Oak Avenue municipal lot behind the hall. Box office will-call windows open ninety minutes prior to curtain for voucher validation and seat exchanges. Press one to hear upcoming winter concert dates, or remain on the line.',
      null, [
        ['Part 4 · Problem', 'Why should Sunday concertgoers arrive earlier than usual?', ['Roadwork at Main Street garage requires parking in an alternate lot', 'Will-call ticket lines moved outside onto Oak Avenue', 'Sunday’s matinee concert was moved up by twenty minutes', 'Security bag screening takes ninety minutes before curtain'], 0, 'ตอบ Roadwork at Main Street garage requires parking in an alternate lot (ถนนหน้าอาคารจอดรถ Main Street กำลังทำผิวถนน จึงต้องเผื่อเวลาไปจอดที่ลานเทศบาล Oak Avenue)'],
        ['Part 4 · Detail', 'When do the box office will-call windows open on Sunday?', ['At 12:30 P.M.', 'At 2:00 P.M.', 'At 12:00 P.M.', 'At 1:40 P.M.'], 0, 'ตอบ At 12:30 P.M. (รอบแสดงเริ่ม 14:00 น. และเปิดหน้าต่างรับตั๋วล่วงหน้า 90 นาที = 12:30 น.)'],
        ['Part 4 · Action', 'How can callers check upcoming winter concert schedules?', ['By pressing one on their phone keypad', 'By visiting the Oak Avenue municipal booth', 'By remaining on the line for an agent', 'By bringing printed vouchers to will-call'], 0, 'ตอบ By pressing one on their phone keypad (กดเลข 1 เพื่อฟังกำหนดการคอนเสิร์ตฤดูหนาวที่กำลังจะมาถึง)'],
      ]),

    p4(22, 'l22-p4-2', 'the following backstage safety briefing', 'uk_m',
      'Welcome aboard, visiting stagehands, to the Regent Theater. Before any climber steps onto the steel catwalk above the stage to hang follow-spots or focus lighting trusses, listen closely to our house harness policy. Full-body safety harnesses must clip directly onto the overhead blue steel lifeline—never onto lighting pipes or decorative scenery cables. Additionally, empty every coin, wrench, and smartphone from shirt pockets before climbing, or use our canvas lanyard pouches stocked beside Lift Gate Two.',
      null, [
        ['Part 4 · Audience', 'Who is this announcement intended for?', ['Visiting theater crew working on overhead stage rigging', 'Symphony musicians warming up inside the orchestra pit', 'Museum volunteers setting up lobby gala tables', 'Box office clerks operating ticket printers'], 0, 'ตอบ Visiting theater crew working on overhead stage rigging (ชี้แจงทีมงานเวทีที่มาช่วยงานติดตั้งระบบไฟบนทางเดินเหล็กเหนือเวที)'],
        ['Part 4 · Detail', 'Where must climbing workers attach their harness clips?', ['To the overhead blue steel lifeline', 'To empty lighting pipes along Truss One', 'To decorative scenery cables beside the curtain', 'To canvas pouches near Lift Gate Two'], 0, 'ตอบ To the overhead blue steel lifeline (ต้องเกี่ยวสายรัดนิรภัยเข้ากับสายเคเบิลเหล็กสีน้ำเงินด้านบนเท่านั้น)'],
        ['Part 4 · Detail', 'Why are workers told to empty their shirt pockets before climbing?', ['To prevent loose objects from falling onto people below', 'To make room for two-way theater radios', 'To protect smartphones from strong magnetic trusses', 'To speed up post-show tool inventory checks'], 0, 'ตอบ To prevent loose objects from falling onto people below (เพื่อป้องกันเหรียญ ประแจ หรือมือถือร่วงหล่นลงมาจากที่สูงใส่คนด้านล่าง)'],
      ]),

    p4(22, 'l22-p4-3', 'the following gala welcome speech', 'au_f',
      'Good evening, cherished members, trustees, and guests of the City Maritime Museum. Looking across this candlelit atrium tonight, I’m thrilled to announce that your extraordinary generosity has pushed our Bronze Age Restoration Fund past two point four million dollars—exceeding our annual gala target three months early! Starting this January, those resources will open our newly climate-controlled coastal gallery and double free Saturday workshops for local elementary schools. Enjoy your dinner before the string quartet begins.',
      null, [
        ['Part 4 · Purpose', 'What milestone does the speaker celebrate in her toast?', ['Surpassing the museum’s annual restoration fundraising goal early', 'Opening a new dining restaurant inside the maritime atrium', 'Hiring an internationally famous string quartet for January', 'Completing coastal gallery repairs ahead of last summer'], 0, 'ตอบ Surpassing the museum’s annual restoration fundraising goal early (ประกาศความสำเร็จที่ยอดบริจาคกองทุนฟื้นฟูทะลุ 2.4 ล้านดอลลาร์ เกินเป้าหมายเร็วกว่ากำหนด 3 เดือน)'],
        ['Part 4 · Detail', 'What new program will the raised funds help expand in January?', ['Free weekend workshops for local elementary students', 'Evening candlelit gala dinners every Saturday', 'Guided boat tours along the city’s coastal harbor', 'Restoration grants for private art collectors'], 0, 'ตอบ Free weekend workshops for local elementary students (ขยายเวิร์กช็อปวันเสาร์ฟรีสำหรับโรงเรียนประถมในท้องถิ่นเพิ่มขึ้นเป็นสองเท่า)'],
        ['Part 4 · Detail', 'What entertainment will follow dinner?', ['A performance by a string quartet', 'A slideshow of Bronze Age shipwrecks', 'A charity auction hosted by museum trustees', 'A guided lantern walk through the atrium'], 0, 'ตอบ A performance by a string quartet (วงสตริงควอเต็ตจะเริ่มบรรเลงหลังรับประทานอาหารเย็นเสร็จ)'],
      ]),

    p4(22, 'l22-p4-4', 'the following pre-concert hall announcement', 'ca_f',
      'Ladies and gentlemen, welcome to Harmon Symphony Hall. Tonight’s performance of Dvorak’s Ninth Symphony will begin in five minutes. Before the conductor takes the podium, kindly power down mobile phones, smartwatches, and camera flashes completely, as silent-vibrate modes still echo faintly inside our wooden balcony tiers. Also, skip the intermission beverage lines by scanning the QR sticker on your armrests right now to pre-order sparkling water or espresso for Lobby Bar pickup.',
      null, [
        ['Part 4 · Detail', 'Why does the announcer ask guests to turn off phones completely rather than using vibrate mode?', ['Vibrations can still be heard inside the hall’s wooden balconies', 'Vibrate signals interfere with wireless stage microphones', 'Lobby bar tablets require strong Wi-Fi reception', 'Smartwatch flashes disrupt the orchestra conductor'], 0, 'ตอบ Vibrations can still be heard inside the hall’s wooden balconies (โหมดสั่นยังส่งเสียงสะท้อนเบาๆ ก้องได้ภายในระเบียงไม้ของหอแสดงดนตรี)'],
        ['Part 4 · Detail', 'When will tonight’s symphony performance start?', ['In five minutes', 'In fifteen minutes', 'Right after intermission', 'In thirty minutes'], 0, 'ตอบ In five minutes (การแสดงจะเริ่มขึ้นในอีก 5 นาทีข้างหน้า)'],
        ['Part 4 · Action', 'How can audience members avoid waiting in line at intermission?', ['By pre-ordering drinks via the QR sticker on their seat armrests', 'By visiting Lobby Bar prior to the conductor’s arrival', 'By asking hall ushers to deliver water to their row', 'By downloading the symphony program booklet online'], 0, 'ตอบ By pre-ordering drinks via the QR sticker on their seat armrests (สแกนคิวอาร์โค้ดบนที่พักแขนเก้าอี้เพื่อสั่งเครื่องดื่มล่วงหน้าได้ทันที)'],
      ]),

    p4(22, 'l22-p4-5', 'the following theater tour explanation', 'us_m2',
      'Step carefully onto center stage, everyone, and tilt your heads upward toward the wooden loft sixty feet overhead. Unlike modern auditoriums powered strictly by motorized hoists, our nineteen-twenty-eight playhouse still relies on forty-two hand-operated counterweight rope lines along the right wall. Notice how iron weights slide inside steel tracks so a single stagehand can glide a three-hundred-pound velvet curtain silently out of sight. Look down too—those brass latches mark historic trapdoors once used for dramatic ghost entrances.',
      null, [
        ['Part 4 · Topic', 'What architectural feature is the tour guide describing?', ['A theater’s historic hand-operated counterweight rigging and stage traps', 'Recent renovations adding motorized ceiling lights to an opera house', 'Acoustic ceiling panels installed above wooden orchestra seats', 'Basement storage lockers for ninety-year-old velvet costumes'], 0, 'ตอบ A theater’s historic hand-operated counterweight rigging and stage traps (อธิบายระบบรอกเชือกถ่วงน้ำหนักแบบดั้งเดิมและช่องประตูกลบนพื้นเวทีโรงละครเก่า)'],
        ['Part 4 · Detail', 'How heavy is a velvet stage curtain lifted by those rope lines?', ['Three hundred pounds', 'Sixty pounds', 'Forty-two pounds', 'One hundred pounds'], 0, 'ตอบ Three hundred pounds (ม่านกำมะหยี่หนักถึง 300 ปอนด์แต่ดึงขึ้นลงได้ด้วยคนคนเดียวผ่านระบบลูกตุ้มเหล็กถ่วงน้ำหนัก)'],
        ['Part 4 · Detail', 'What were the brass latches on the stage floor originally built for?', ['Opening trapdoors for dramatic performer entrances', 'Anchoring heavy brass symphony music stands', 'Locking portable spotlight electrical cables', 'Measuring precise distance for actor blocking'], 0, 'ตอบ Opening trapdoors for dramatic performer entrances (สลักทองเหลืองใช้เปิดช่องประตูกลพื้นเวทีสำหรับการโผล่ตัวของนักแสดงในอดีต)'],
      ]),

    p4(22, 'l22-p4-6', 'the following equipment sales pitch', 'uk_f2',
      'Are distracting cooling-fan hums ruining quiet solo violin passages in your concert hall? Meet the LuminaWhisper Follow-Spot from StageTech Optics. By replacing bulky noisy exhaust blowers with sealed copper heat-pipes, LuminaWhisper cuts acoustic output below eighteen decibels—so quiet you can mount it directly inside rear audience balconies without muffling soft acoustic music. Plus, tool-free magnetic color frames let spotlight operators drop in warm amber gels in under two seconds flat.',
      null, [
        ['Part 4 · Problem', 'What common performance problem does the LuminaWhisper product solve?', ['Loud cooling-fan noise disturbing quiet musical moments', 'Color gel frames melting inside rear balcony booths', 'Heavy spotlight mounts straining older wooden trusses', 'Glare reflecting off polished symphony violins'], 0, 'ตอบ Loud cooling-fan noise disturbing quiet musical moments (แก้ปัญหาเสียงพัดลมระบายความร้อนของไฟสปอตไลต์ที่ดังรบกวนช่วงดนตรีบรรเลงเบาๆ)'],
        ['Part 4 · Detail', 'How does StageTech Optics cool the new spotlight quietly?', ['Using sealed copper heat-pipes instead of exhaust blowers', 'Attaching acoustic foam panels over rear booth windows', 'Limiting bulb brightness during soft solo acts', 'Running chilled water hoses along balcony railings'], 0, 'ตอบ Using sealed copper heat-pipes instead of exhaust blowers (ใช้ท่อนำความร้อนทองแดงแบบปิดแทนพัดลมระบายอากาศเสียงดัง)'],
        ['Part 4 · Detail', 'Why is changing spotlight colors faster on this model?', ['It uses tool-free magnetic color gel frames', 'Operators select hues wirelessly via mobile apps', 'Internal color wheels spin automatically every two seconds', 'Copper heat-pipes eliminate the need for amber gels'], 0, 'ตอบ It uses tool-free magnetic color gel frames (ใช้กรอบแม่เหล็กถอดเปลี่ยนแผ่นเจลสีได้โดยไม่ต้องใช้เครื่องมือภายในไม่ถึง 2 วินาที)'],
      ]),

    p4(22, 'l22-p4-7', 'the following volunteer briefing', 'au_m',
      'Thank you all for volunteering at tonight’s Museum Membership Gala! Before early benefactors step inside at six-thirty, let’s double-check two quick stations. Volunteers assigned to the Red Carpet Entrance should scan guests’ digital QR badges with the museum tablets—avoid taking paper printouts since our tally syncs live with the dining hall seating screen. Meanwhile, coat-check helpers must attach matching brass luggage tags onto every umbrella handle as well as overcoats so items stay paired together.',
      null, [
        ['Part 4 · Audience', 'Who is listening to this evening museum gala briefing?', ['Event volunteers helping run a museum gala', 'Professional catering chefs prepping gala appetizers', 'Museum trustees rehearsing fundraising speeches', 'Valet parking attendants stationed outside'], 0, 'ตอบ Event volunteers helping run a museum gala (เป็นการบรีฟงานอาสาสมัครที่ช่วยดูแลหน้างานกาลาของพิพิธภัณฑ์)'],
        ['Part 4 · Detail', 'Why should entrance volunteers use tablets instead of collecting paper printouts?', ['Scanned codes update dining hall seating charts automatically', 'Paper tickets jam the museum’s lobby scanners', 'Guests prefer saving paper programs as gala souvenirs', 'Dining hall screens display donor photos upon entry'], 0, 'ตอบ Scanned codes update dining hall seating charts automatically (การสแกนผ่านแท็บเล็ตจะซิงก์ยอดผู้เข้าร่วมแบบเรียลไทม์ไปยังหน้าจอห้องจัดเลี้ยง)'],
        ['Part 4 · Detail', 'What extra item besides coats requires a matching brass tag?', ['Umbrellas', 'Purses', 'Gift bags', 'Musical instruments'], 0, 'ตอบ Umbrellas (ต้องติดป้ายแท็กทองเหลืองคู่กันไว้ที่ด้ามร่มด้วยนอกเหนือจากเสื้อโค้ต)'],
      ]),

    p4(22, 'l22-p4-8', 'the following sales review and ticket summary', 'ca_m',
      'Good morning, marketing team. Let’s glance over this weekend’s Box Office Ticket Sales Summary for our Autumn Chamber Series. Saturday evening’s grand finale is practically sold out across every price tier, and Sunday afternoon’s matinee crossed eighty-five percent capacity after our radio spot aired. Look closely at Friday’s opening night, however: less than half of our mid-tier seats have moved! Let’s email our student subscriber list a forty-eight-hour two-for-one offer specifically for Friday before lunch.',
      doc('table', 'Harmon Hall — Weekend Box Office Capacity Summary', [['Series', 'Autumn Chamber']], [
        tbl(
          ['Performance Slot', 'Total Capacity', 'Tickets Sold', 'Fill Rate'],
          [
            ['Friday 7:30 P.M. (Opening)', '900 Seats', '414 Seats', '46%'],
            ['Saturday 8:00 P.M. (Finale)', '900 Seats', '882 Seats', '98%'],
            ['Sunday 2:00 P.M. (Matinee)', '900 Seats', '774 Seats', '86%'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. How many tickets remain unsold for the Saturday evening concert?', ['18 seats', '126 seats', '486 seats', '414 seats'], 0, 'ตอบ 18 seats (ความจุทั้งหมด 900 ที่นั่ง ขายไปแล้ว 882 ที่นั่ง ในรอบวันเสาร์ จึงเหลืออีก 18 ที่นั่ง)'],
        ['Part 4 · Problem', 'Which performance is the marketing team targeting with an urgent promotion?', ['Friday evening’s opening concert', 'Saturday night’s grand finale', 'Sunday afternoon’s matinee', 'Next weekend’s winter preview'], 0, 'ตอบ Friday evening’s opening concert (รอบคืนวันศุกร์ขายไปได้เพียง 46% จึงจะส่งโปรโมชันซื้อ 1 แถม 1 เฉพาะรอบวันศุกร์)'],
        ['Part 4 · Action', 'Who will receive the forty-eight-hour two-for-one email offer?', ['Student subscribers', 'Museum gala trustees', 'Radio station listeners', 'Weekend valet pass holders'], 0, 'ตอบ Student subscribers (จะส่งอีเมลโปรโมชันให้รายชื่อสมาชิกกลุ่มนักศึกษาก่อนเที่ยง)'],
      ]),

    p4(22, 'l22-p4-9', 'the following backstage briefing and circuit directory', 'us_m',
      'Hold up, lighting crew—quick change on our Main Stage Overhead Circuit Schedule before actors walk on for Act One dress rehearsal. Earlier this afternoon, our upstage blue strip fixtures tripped Circuit D’s breaker twice whenever the fog machine kicked on simultaneously. While electricians trace that fault, unplug both blue LED bars and plug them into our highest-capacity open reserve circuit listed on the sheet. Leave Circuit C free since stagehands still run work lights off it.',
      doc('list', 'Regent Stage — Overhead Dimmer Circuit Allocation', null, [
        lst([
          'Circuit A · 20 Amps Max · Active: Front Warm Apron Spots (Full)',
          'Circuit B · 40 Amps Max · Open Reserve (High-Draw Ready)',
          'Circuit C · 15 Amps Max · Active: Stagehand Work Lights (Do Not Share)',
          'Circuit D · 20 Amps Max · TRIPPED / OFFLINE (Upstage Blue Strips + Fogger)',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. To which circuit will the lighting crew reconnect the blue LED bars?', ['Circuit B', 'Circuit A', 'Circuit C', 'Circuit D'], 0, 'ตอบ Circuit B (Circuit D เบรกเกอร์ทริป ประกาศให้ย้ายไปเสียบวงจรสำรองที่รับกระแสสูงสุดและยังว่างอยู่ ซึ่งตรงกับ Circuit B ที่รับได้ 40 แอมป์)'],
        ['Part 4 · Cause', 'When did Circuit D repeatedly trip earlier today?', ['Whenever the fog machine ran at the same time as the blue lights', 'When stagehands turned on overhead work lights', 'During warm-up checks on the front apron spots', 'Right after actors walked onstage for Act One'], 0, 'ตอบ Whenever the fog machine ran at the same time as the blue lights (ไฟเส้นสีน้ำเงินกับเครื่องทำควันทำงานพร้อมกันทำให้เบรกเกอร์วงจร D ทริปสองครั้ง)'],
        ['Part 4 · Detail', 'Why should Circuit C remain untouched?', ['It powers the stagehand work lights', 'Its twenty-amp breaker needs replacement', 'It only serves balcony follow-spots', 'It feeds the orchestra pit music stands'], 0, 'ตอบ It powers the stagehand work lights (Circuit C ใช้เลี้ยงไฟทำงานของทีมงานเวทีและห้ามใช้ร่วมกัน)'],
      ]),

    p4(22, 'l22-p4-10', 'the following event briefing and run-of-show card', 'uk_f',
      'Gather round, banquet captains—just one rapid timing shift on your Gala Evening Run-of-Show before guests enter the Grand Hall. Our museum board president just called from the airport: heavy tarmac fog delayed her flight by half an hour, so she won’t reach the podium until eight-fifteen. Waitstaff should keep serving the sea bass main course right on schedule at seven-thirty, then hold clearing plates and pause the chamber quartet applause cue until the revised keynote finishes.',
      doc('box', 'Annual Membership Gala — Evening Run-of-Show', [
        ['Venue', 'Grand Maritime Hall'],
        ['Headcount', '320 Guests'],
      ], [
        box('Original Scheduled Timeline', [
          '6:30 P.M. · Atrium Champagne Reception & QR Check-In',
          '7:15 P.M. · Guest Seating & Welcome Quartet Set',
          '7:30 P.M. · Main Dinner Entrée Service (Sea Bass / Herb Risotto)',
          '7:45 P.M. · Board President Keynote & Fund Milestone Toast',
          '8:30 P.M. · Dessert Platter & Private Gallery Lantern Tour',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. By how many minutes is the board president’s keynote delayed?', ['30 minutes', '15 minutes', '45 minutes', '60 minutes'], 0, 'ตอบ 30 minutes (กำหนดการเดิม 19:45 น. แต่เที่ยวบินล่าช้าครึ่งชั่วโมงจึงขยับไปขึ้นเวทีเวลา 20:15 น.)'],
        ['Part 4 · Detail', 'What happens at 7:30 P.M. despite the keynote delay?', ['Dinner entrée service proceeds as originally planned', 'Champagne reception resumes inside the atrium', 'Waitstaff begin clearing dessert platters', 'Guests depart for the private gallery lantern tour'], 0, 'ตอบ Dinner entrée service proceeds as originally planned (ยังเสิร์ฟอาหารจานหลักเวลา 19:30 น. ตามเดิม)'],
        ['Part 4 · Reason', 'Why is the board president arriving late to the gala?', ['Fog at the airport delayed her flight', 'Valet lanes backed up outside Grand Hall', 'Her written speech needed menu revisions', 'The welcome chamber quartet ran overtime'], 0, 'ตอบ Fog at the airport delayed her flight (หมอกหนาที่ลานจอดเครื่องบินทำให้เที่ยวบินล่าช้า)'],
      ]),

    // ==================== SET 23 ====================
    p1(23, 'l23-p1-1', 'us_f2', [
      'A recruiter is handing a printed brochure to a candidate across a booth table.',
      'Job applicants are queuing outside an auditorium glass door.',
      'A coordinator is taping direction arrows onto an exhibition hall floor.',
      'Two colleagues are dismantling a fabric display banner near an exit.',
    ], 0, 'ตอบ A recruiter is handing a printed brochure to a candidate across a booth table. (เจ้าหน้าที่สรรหาบุคลากรกำลังยื่นโบรชัวร์ให้ผู้สมัครงานข้ามโต๊ะบูธ)'),
    p1(23, 'l23-p1-2', 'uk_m', [
      'Two employees are leaning over a laptop in a glass-walled lounge.',
      'Office chairs are stacked upside down along a conference wall.',
      'A trainer is plugging a projector cord into a floor outlet.',
      'Workshop attendees are exchanging business cards beside an elevator.',
    ], 0, 'ตอบ Two employees are leaning over a laptop in a glass-walled lounge. (พนักงานสองคนกำลังก้มมองหน้าจอแล็ปท็อปในห้องรับรองผนังกระจก)'),
    p1(23, 'l23-p1-3', 'ca_f', [
      'Moving crew members are carrying sealed wardrobe boxes down a hallway.',
      'Delivery trucks are parked side by side along a residential curb.',
      'A receptionist is sorting incoming mail packets behind a desk.',
      'Two neighbors are unpacking kitchen dishes onto a dining counter.',
    ], 0, 'ตอบ Moving crew members are carrying sealed wardrobe boxes down a hallway. (ทีมงานขนย้ายกำลังแบกกล่องใส่เสื้อผ้าที่ปิดผนึกเดินไปตามโถงทางเดิน)'),
    p1(23, 'l23-p1-4', 'au_m', [
      'Rows of vacant folding tables are draped with navy banners inside a hall.',
      'Volunteers are inflating balloons along a gymnasium bleachers railing.',
      'Visitors are checking coat hangers near a registration desk.',
      'Paper resumes are scattered across a wooden reception bench.',
    ], 0, 'ตอบ Rows of vacant folding tables are draped with navy banners inside a hall. (โต๊ะพับที่ยังไม่มีคนนั่งเรียงเป็นแถวคลุมด้วยป้ายผ้าสีกรมท่าในห้องโถงจัดงาน)'),
    p1(23, 'l23-p1-5', 'uk_f', [
      'A workshop facilitator is writing agenda notes on a freestanding whiteboard.',
      'Participants are eating boxed lunches at round banquet tables.',
      'A janitor is wiping marker ink off a conference room wall.',
      'Employees are filing out through double doors carrying folders.',
    ], 0, 'ตอบ A workshop facilitator is writing agenda notes on a freestanding whiteboard. (วิทยากรเวิร์กช็อปกำลังเขียนหัวข้อกำหนดการลงบนกระดานไวท์บอร์ดแบบตั้งพื้น)'),
    p1(23, 'l23-p1-6', 'us_m', [
      'Two colleagues are comparing housing booklets across a small cafe table.',
      'A real estate agent is unlocking the front door of a brick townhouse.',
      'Suitcases have been placed inside the open trunk of a sedan.',
      'Waiters are carrying coffee carafes past an outdoor courtyard.',
    ], 0, 'ตอบ Two colleagues are comparing housing booklets across a small cafe table. (เพื่อนร่วมงานสองคนกำลังดูเปรียบเทียบคู่มือที่พักอาศัยบนโต๊ะกาแฟขนาดเล็ก)'),

    // Set 23 Part 2 (25 Qs)
    p2(23, 'l23-p2-1', 'au_f', 'us_m', 'Where should campus recruiters pick up their exhibition hall passes?', ['At the West Concourse check-in table beside Gate B.', 'Between nine A.M. and four-thirty P.M.', 'Only three representatives per employer booth.'], 0, 'ตอบ At the West Concourse check-in table beside Gate B. (ถามสถานที่รับบัตรเข้างาน Where ตอบที่โต๊ะลงทะเบียนโถงตะวันตกข้างประตู B)'),
    p2(23, 'l23-p2-2', 'uk_m', 'ca_f', 'Who coordinates the mentor pairing matches for incoming engineering hires?', ['Elena from Learning and Development oversees the roster.', 'Yes, the six-month program begins next Tuesday.', 'Mostly virtual coffee chats twice a month.'], 0, 'ตอบ Elena from Learning and Development oversees the roster. (ถามผู้รับผิดชอบจับคู่พี่เลี้ยง Who ตอบ Elena จากฝ่ายฝึกอบรมและพัฒนา)'),
    p2(23, 'l23-p2-3', 'us_m2', 'uk_f2', 'When will the relocation moving van arrive at Maya’s new apartment?', ['On the fourth floor near the service lift.', 'Scheduled for Friday morning between eight and ten.', 'Because her old lease expired last month.'], 1, 'ตอบ Scheduled for Friday morning between eight and ten. (ถามเวลา When ตอบกำหนดถึงเช้าวันศุกร์ระหว่างแปดถึงสิบโมง)'),
    p2(23, 'l23-p2-4', 'ca_m', 'au_f', 'Why did the career fair organizers shift Booth Twelve to the main aisle?', ['Our original corner spot lacked a working floor outlet.', 'Nearly two hundred computer science seniors registered.', 'By scanning the QR code on our banner.'], 0, 'ตอบ Our original corner spot lacked a working floor outlet. (ถามเหตุผล Why ตอบเพราะจุดมุมเดิมไม่มีปลั๊กไฟที่พื้นใช้งานได้)'),
    p2(23, 'l23-p2-5', 'us_f', 'uk_m', 'How many breakout rooms did HR reserve for Friday’s mentorship kickoff?', ['Four rooms on the second floor, labeled Elm through Pine.', 'Yes, lunch platters are included for pairs.', 'Every first Thursday of the quarter.'], 0, 'ตอบ Four rooms on the second floor, labeled Elm through Pine. (ถามจำนวนห้อง How many ตอบจองไว้ 4 ห้องบนชั้นสอง)'),
    p2(23, 'l23-p2-6', 'uk_f', 'us_m', 'Would you rather host candidate interviews on site today or schedule video calls Monday?', ['Let’s meet top candidates in person while we’re on campus.', 'About twenty minutes per resume screening.', 'At the Alumni Center auditorium.'], 0, 'ตอบ Let’s meet top candidates in person while we’re on campus. (ถามทางเลือก A or B ตอบเลือกสัมภาษณ์ตัวต่อตัวเลยระหว่างอยู่ที่มหาวิทยาลัย)'),
    p2(23, 'l23-p2-7', 'au_m', 'ca_f', 'Hasn’t Payroll approved the housing deposit reimbursement for our Tokyo transfer yet?', ['Wait—Accounting is still waiting on her signed apartment lease.', 'No, I flew back from Tokyo on Sunday.', 'Up to three thousand dollars per household.'], 0, 'ตอบ Wait—Accounting is still waiting on her signed apartment lease. (คำถามปฏิเสธ Hasn’t... ตอบแจ้งข้อเท็จจริงว่าบัญชียังรอสำเนาสัญญาเช่าที่มีลายเซ็นอยู่)'),
    p2(23, 'l23-p2-8', 'us_f2', 'au_m', 'Could you print twenty more mentorship handbook packets before the workshop starts?', ['No problem—the copy center already has the PDF queued.', 'They cover goal-setting and feedback etiquette.', 'Yes, the seminar room holds fifty chairs.'], 0, 'ตอบ No problem—the copy center already has the PDF queued. (คำขอให้ช่วยพิมพ์คู่มือเพิ่ม ตอบตกลงว่าศูนย์ถ่ายเอกสารมีไฟล์รออยู่แล้ว)'),
    p2(23, 'l23-p2-9', 'ca_f', 'us_m2', 'Which relocation carrier handles international household sea freight?', ['GlobalMove Logistics manages all our overseas containers.', 'Around six to eight weeks by cargo ship.', 'Yes, insured against transit damage.'], 0, 'ตอบ GlobalMove Logistics manages all our overseas containers. (ถามเลือกบริษัทขนย้าย Which carrier ตอบชื่อบริษัท GlobalMove Logistics)'),
    p2(23, 'l23-p2-10', 'uk_m', 'us_f', 'How long does the corporate temporary housing benefit cover new transfers?', ['Up to forty-five days in a furnished corporate suite.', 'Right across from the downtown rail station.', 'Just bring two utility bills to Human Resources.'], 0, 'ตอบ Up to forty-five days in a furnished corporate suite. (ถามระยะเวลา How long ตอบคุ้มครองสูงสุด 45 วัน)'),
    p2(23, 'l23-p2-11', 'au_f', 'uk_f2', 'What time does the alumni networking mixer start after the career fair?', ['Promptly at five-thirty inside the Atrium Lounge.', 'Mostly engineering and finance recruiters.', 'Yes, business casual attire is fine.'], 0, 'ตอบ Promptly at five-thirty inside the Atrium Lounge. (ถามเวลาเริ่มงาน What time ตอบห้าโมงครึ่งตรง)'),
    p2(23, 'l23-p2-12', 'us_m', 'ca_m', 'The tablet scanner at our recruiting booth won’t read paper resume badges.', ['Have applicants type their email into the backup web form instead.', 'Over sixty students stopped by before noon.', 'Beside the university bookstore entrance.'], 0, 'ตอบ Have applicants type their email into the backup web form instead. (แจ้งปัญหาเครื่องสแกนแท็บเล็ตไม่อ่านป้ายชื่อ ตอบแนะทางแก้ให้ผู้สมัครกรอกอีเมลในเว็บฟอร์มสำรอง)'),
    p2(23, 'l23-p2-13', 'uk_f2', 'us_f2', 'Why don’t we pair junior analysts with mentors outside their direct reporting line?', ['Great idea—cross-team mentors offer much fresher perspective.', 'About twelve new analysts joined this fall.', 'No, I moved to the Chicago office in May.'], 0, 'ตอบ Great idea—cross-team mentors offer much fresher perspective. (ข้อเสนอแนะ Why don’t we... ตอบเห็นด้วยพร้อมเหตุผลสนับสนุน)'),
    p2(23, 'l23-p2-14', 'ca_m', 'uk_m', 'How much is the maximum vehicle-shipping reimbursement for cross-country moves?', ['Benefits covers up to twelve hundred dollars with two carrier quotes.', 'Usually five days from coast to coast.', 'Ask the parking garage attendant for a permit.'], 0, 'ตอบ Benefits covers up to twelve hundred dollars with two carrier quotes. (ถามวงเงินสูงสุด How much ตอบเบิกได้สูงสุด $1,200 เมื่อมีใบเสนอราคาสองเจ้า)'),
    p2(23, 'l23-p2-15', 'us_f', 'au_f', 'Aren’t the HR benefits advisors hosting a live Q&A on visa transfers this afternoon?', ['Actually, legal counsel postponed it until Wednesday morning.', 'Just twelve relocation packets left on the shelf.', 'Yes, every transfer receives tax consultation.'], 0, 'ตอบ Actually, legal counsel postponed it until Wednesday morning. (ถามย้ำกำหนดการช่วงบ่าย ตอบแก้ไขว่าฝ่ายกฎหมายเลื่อนไปเช้าวันพุธแล้ว)'),
    p2(23, 'l23-p2-16', 'uk_m', 'ca_f', 'Would you like me to carry the spare retractable booth banners out to the van?', ['Yes, please—make sure both aluminum cases latch shut.', 'No, the graphic designer printed them in color.', 'Near the loading ramp behind Hall C.'], 0, 'ตอบ Yes, please—make sure both aluminum cases latch shut. (เสนอช่วยขนป้ายบูธไปที่รถ ตอบรับพร้อมกำชับให้ปิดล็อกกล่องอะลูมิเนียม)'),
    p2(23, 'l23-p2-17', 'au_m', 'us_m2', 'Do you know if graduates can submit digital portfolios after the career fair closes?', ['Sure, the portal stays open until Sunday midnight.', 'Room 202 in the Engineering Wing.', 'Nearly forty software internships are available.'], 0, 'ตอบ Sure, the portal stays open until Sunday midnight. (ถามว่าส่งพอร์ตโฟลิโอหลังจบงานได้ไหม ตอบว่าพอร์ทัลเปิดรับถึงเที่ยงคืนวันอาทิตย์)'),
    p2(23, 'l23-p2-18', 'us_f2', 'uk_f', 'You sent the relocation expense guidelines to our newest Lisbon hire, didn’t you?', ['Wait—I’m waiting for HR to confirm her start date first.', 'Yes, direct flights run eight hours.', 'Inside the shared benefits policy folder.'], 0, 'ตอบ Wait—I’m waiting for HR to confirm her start date first. (Tag question ถามยืนยัน ตอบตามจริงว่ารอ HR ยืนยันวันเริ่มงานก่อนจึงจะส่ง)'),
    p2(23, 'l23-p2-19', 'ca_f', 'au_m', 'How often do mentorship pairs meet after finishing today’s kickoff workshop?', ['At least once every three weeks over the next two quarters.', 'Inside any quiet café near the campus.', 'Mostly setting ninety-day skill milestones.'], 0, 'ตอบ At least once every three weeks over the next two quarters. (ถามความถี่ How often ตอบอย่างน้อยทุก 3 สัปดาห์ตลอดสองไตรมาสถัดไป)'),
    p2(23, 'l23-p2-20', 'uk_f', 'us_m', 'Whose suitcase tag came loose beside the relocation hotel lobby?', ['Check with Jordan—he checked out early for his house tour.', 'No, the shuttle bus runs every half hour.', 'Leave the spare keys with the front desk clerk.'], 0, 'ตอบ Check with Jordan—he checked out early for his house tour. (ถามความเป็นเจ้าของ Whose ตอบให้ลองถาม Jordan ที่เพิ่งเช็กเอาต์ออกไปดูบ้าน)'),
    p2(23, 'l23-p2-21', 'us_m2', 'ca_m', 'I heard our mentorship cohort grew by thirty percent compared with last spring.', ['Right—even senior directors volunteered as coaches this round!', 'Yes, the workshop binder costs twelve dollars.', 'Across the street from the training annex.'], 0, 'ตอบ Right—even senior directors volunteered as coaches this round! (บอกเล่าเรื่องจำนวนผู้เข้าร่วมโครงการโตขึ้น 30% ตอบรับอย่างสอดคล้อง)'),
    p2(23, 'l23-p2-22', 'au_f', 'uk_m', 'Where did Sandra file the signed summer internship offer letters?', ['Inside the confidential cabinet behind Reception Desk A.', 'Because four candidates accepted before Friday.', 'Around two-thirty right after lunch.'], 0, 'ตอบ Inside the confidential cabinet behind Reception Desk A. (ถามที่เก็บเอกสาร Where ตอบในตู้เก็บความลับหลังเคาน์เตอร์ต้อนรับ A)'),
    p2(23, 'l23-p2-23', 'uk_m', 'us_f', 'How can relocating employees request an advance on their moving allowance?', ['Submit Form R-4 through the HR employee portal.', 'Only full-time staff transferring over fifty miles.', 'Within ten business days of receipt upload.'], 0, 'ตอบ Submit Form R-4 through the HR employee portal. (ถามวิธีการขอเบิกล่วงหน้า How ตอบให้ยื่นแบบฟอร์ม R-4 ผ่านพอร์ทัลพนักงาน)'),
    p2(23, 'l23-p2-24', 'ca_m', 'us_f2', 'Did the career fair catering team include gluten-free sandwiches for exhibitors?', ['Yes, two labeled platters are sitting behind the coffee urns.', 'About fifteen companies reserved double booths.', 'Until the afternoon employer panel wraps up.'], 0, 'ตอบ Yes, two labeled platters are sitting behind the coffee urns. (ถามเรื่องอาหารปลอดกลูเตน ตอบยืนยันว่ามีวางแยกติดป้ายไว้หลังโถกาแฟ)'),
    p2(23, 'l23-p2-25', 'us_m', 'au_m', 'Can we schedule two final-round applicant interviews in Conference Room Four tomorrow?', ['Let me check the calendar—Marketing might hold it until noon.', 'Sure, both candidates majored in industrial design.', 'At least three pages per resume packet.'], 0, 'ตอบ Let me check the calendar—Marketing might hold it until noon. (ถามว่าจองห้องประชุม 4 พรุ่งนี้ได้ไหม ตอบเลี่ยงโดยขอเช็กปฏิทินก่อนเพราะฝ่ายการตลาดอาจใช้อยู่)'),

    // Set 23 Part 3 (13 Conversations: Convs 4 & 8 have 3 speakers; Convs 11-13 have Graphics)
    p3(23, 'l23-p3-1', [
      ['Woman', 'au_f', 'Excuse me, are you with the State University Career Fair operations team? Our company was assigned Booth Fourteen, right underneath the noisy central stairwell.'],
      ['Man', 'us_m', 'Ah, I see—echoes from the lobby stairs really carry during resume chats! Let me check our floor map to see which exhibitor tables stayed empty.'],
      ['Woman', 'au_f', 'We also brought a six-foot lighted display sign, so we definitely need access to a wall power outlet.'],
      ['Man', 'us_m', 'Good news—a biotech firm canceled last night, opening Corner Booth Twenty-Eight near the quiet North Window! It includes a grounded wall plug—let’s wheel your cart over there now.'],
    ], null, [
      ['Part 3 · Problem', 'Why is the woman unhappy with Booth Fourteen?', ['Foot traffic and echoes near the stairwell make conversations difficult', 'Stairwell doors block the six-foot display banner', 'Two biotech exhibitors already claimed the adjacent table', 'Career fair organizers double-booked Booth Fourteen'], 0, 'ตอบ Foot traffic and echoes near the stairwell make conversations difficult (บูธ 14 อยู่ใต้บันไดกลาง เสียงก้องดังรบกวนการคุยกับผู้สมัคร)'],
      ['Part 3 · Detail', 'What technical requirement does the woman mention?', ['Access to an electrical wall outlet for a lighted sign', 'High-speed wired Ethernet cables for live video calls', 'Extra folding chairs for four company interviewers', 'Overhead ceiling hooks for hanging velvet banners'], 0, 'ตอบ Access to an electrical wall outlet for a lighted sign (ป้ายไฟขนาด 6 ฟุตจำเป็นต้องเสียบปลั๊กไฟที่ผนัง)'],
      ['Part 3 · Action', 'What will the speakers do next?', ['Move the woman’s recruiting gear to Corner Booth Twenty-Eight', 'Install acoustic curtains beneath the central stairwell', 'Borrow an extension cord from the North Window lounge', 'Turn off the lighted company sign until afternoon'], 0, 'ตอบ Move the woman’s recruiting gear to Corner Booth Twenty-Eight (ย้ายอุปกรณ์ไปตั้งที่บูธมุมหมายเลข 28 ที่เพิ่งว่างและมีปลั๊กไฟที่ผนัง)'],
    ]),

    p3(23, 'l23-p3-2', [
      ['Woman', 'uk_f2', 'Hi Liam, thanks for printing the pairing cards for tomorrow’s Corporate Mentorship Workshop. Did all twenty-four incoming junior analysts get matched?'],
      ['Man', 'ca_m', 'Almost—twenty-two are paired already, except two new Supply Chain hires just transferred Monday and weren’t on last week’s HR spreadsheet!'],
      ['Woman', 'uk_f2', 'Ooh, good catch! Which experienced operations leads volunteered as backup mentors on our signup form?'],
      ['Man', 'ca_m', 'Sandra Wu in Procurement and Marcus Lee in Logistics both checked "Available Anytime." Let me call both of them before four to confirm they can attend Friday’s kickoff lunch.'],
    ], null, [
      ['Part 3 · Problem', 'Why were two junior employees left unpaired on the workshop roster?', ['They joined Supply Chain after last week’s list was exported', 'Only twenty-two senior mentors registered for the program', 'HR postponed Supply Chain mentorship pairings until next quarter', 'Two pairing cards were missing from the printed batch'], 0, 'ตอบ They joined Supply Chain after last week’s list was exported (พนักงานใหม่ฝ่าย Supply Chain เพิ่งย้ายเข้ามาวันจันทร์เลยไม่ทันอยู่ในสเปรดชีตสัปดาห์ก่อน)'],
      ['Part 3 · Detail', 'Who did Liam identify as backup mentors?', ['Sandra Wu and Marcus Lee', 'Elena and Marcus Lee', 'Two senior Supply Chain interns', 'Human Resources workshop facilitators'], 0, 'ตอบ Sandra Wu and Marcus Lee (Sandra Wu จากจัดซื้อและ Marcus Lee จากโลจิสติกส์ลงชื่อสำรองไว้)'],
      ['Part 3 · Action', 'What will Liam do before four o’clock?', ['Phone the two backup mentors to confirm lunch attendance', 'Update the printed handbook pages for twenty-four guests', 'Ask Supply Chain hires to join an existing group pair', 'Reserve a larger banquet room for Friday’s kickoff'], 0, 'ตอบ Phone the two backup mentors to confirm lunch attendance (จะโทรยืนยันกับทั้งสองคนก่อนสี่โมงเย็นว่ามาร่วมมื้อกลางวันเปิดโครงการวันศุกร์ได้หรือไม่)'],
    ]),

    p3(23, 'l23-p3-3', [
      ['Woman', 'us_f', 'Hi, I’m Priya Nair—I relocated from Chicago this month for the Senior Data Analyst role, and I had a question about my temporary corporate apartment.'],
      ['Man', 'uk_m', 'Welcome to London, Priya! How’s the Maplewood serviced flat working out?'],
      ['Woman', 'us_f', 'It’s lovely, thank you! However, the townhouse I’m renting long-term won’t finish floor sanding until the twentieth—five days past my thirty-day corporate stay limit. Can benefits cover those extra nights?'],
      ['Man', 'uk_m', 'Yes! Since contractor construction caused the delay, HR allows a one-time seven-day extension at the company rate. Just forward your landlord’s repair email to Relocation Desk by Thursday.'],
    ], null, [
      ['Part 3 · Reason', 'Why does Priya want to stay longer in her temporary corporate apartment?', ['Floor repairs at her permanent rental home are running five days late', 'Her household furniture shipment from Chicago was delayed at customs', 'She decided to look for a larger apartment near the train station', 'Her supervisor extended her onboarding schedule in London'], 0, 'ตอบ Floor repairs at her permanent rental home are running five days late (บ้านทาวน์เฮาส์ที่เช่าไว้ระยะยาวยังขัดพื้นไม่เสร็จ ล่าช้าไปจากกำหนดเดิม 5 วัน)'],
      ['Part 3 · Detail', 'How long an extension does company policy allow in this situation?', ['Up to seven days', 'Up to thirty days', 'Only five days', 'Two additional weeks'], 0, 'ตอบ Up to seven days (นโยบาย HR อนุญาตให้ขยายเวลาได้ครั้งเดียวสูงสุด 7 วันหากเกิดจากงานซ่อมของช่าง)'],
      ['Part 3 · Action', 'What documentation must Priya submit by Thursday?', ['An email from her landlord confirming the repair delay', 'Receipts for extra hotel nights at Maplewood', 'A signed copy of her Chicago moving invoice', 'A manager approval memo from Data Analytics'], 0, 'ตอบ An email from her landlord confirming the repair delay (ให้ส่งต่ออีเมลแจ้งกำหนดซ่อมจากเจ้าของบ้านให้ฝ่าย Relocation ภายในวันพฤหัสบดี)'],
    ]),

    p3(23, 'l23-p3-4', [
      ['Woman', 'ca_f', 'Look at that line forming outside our Career Fair booth already—we have thirty-five engineering candidates waiting for ten-minute chats!'],
      ['Man1', 'us_m2', 'Even with two interviewers, we’ll never clear that queue before the hall closes at three! Wait—did our software team lead Sam make it through campus parking?'],
      ['Man2', 'au_m', 'Just walked up—sorry traffic backed up along College Avenue! Hand me a stack of blank scorecards and point me to the third chair!'],
      ['Woman', 'ca_f', 'Lifesaver, Sam! Let’s divide the queue by specialty: I’ll screen systems architecture, David takes backend cloud, and Sam meets mobile developers!'],
      ['Man1', 'us_m2', 'Great—also tell standing candidates they can drop their printed resume in the priority tray if they have a two o’clock class!'],
    ], null, [
      ['Part 3 · Problem', 'What challenge are the recruiters facing at their booth?', ['A large crowd of candidates has formed and closing time is approaching', 'College Avenue roadwork blocked booth supplies from arriving', 'Printed applicant scorecards ran out before noon', 'Only ten minutes remain before the exhibition hall closes'], 0, 'ตอบ A large crowd of candidates has formed and closing time is approaching (มีผู้สมัครมารอคิวถึง 35 คนซึ่งอาจสัมภาษณ์ไม่ทันก่อนงานปิดบ่ายสาม)'],
      ['Part 3 · Detail', 'Why did the second man arrive late?', ['Heavy street traffic slowed his trip near the campus', 'He stopped to pick up extra blank scorecards', 'Campus parking garages closed for maintenance', 'He was interviewing mobile developers in another building'], 0, 'ตอบ Heavy street traffic slowed his trip near the campus (รถติดบนถนน College Avenue)'],
      ['Part 3 · Action', 'How does the woman organize the interviewing workload?', ['By assigning each interviewer a distinct technical specialty', 'By shortening candidate chats from ten minutes to five minutes', 'By sending half the crowd to a different engineering booth', 'By switching all afternoon interviews to virtual phone screens'], 0, 'ตอบ By assigning each interviewer a distinct technical specialty (แบ่งสายกันสัมภาษณ์ตามความถนัดเฉพาะทางของแต่ละคน)'],
    ]),

    p3(23, 'l23-p3-5', [
      ['Man', 'uk_m', 'Hey Sofia, quick accounting question on the Corporate Mentorship budget. Three senior mentors submitted café receipts totaling seventy-five dollars for one pair’s kickoff coffee!'],
      ['Woman', 'us_f2', 'Wait—seventy-five dollars for coffee? Our mentorship handbook explicitly caps monthly pair coffee or lunch reimbursements at thirty dollars per meeting!'],
      ['Man', 'uk_m', 'Right—looks like one mentor paid for four coworkers who happened to drop by the same cafe table! Should Finance reject the whole claim?'],
      ['Woman', 'us_f2', 'Approve only the thirty-dollar policy cap, and ask HR to include a bold reminder about the monthly reimbursement limit inside tomorrow’s workshop welcome packet.'],
    ], null, [
      ['Part 3 · Problem', 'Why did the man flag the submitted coffee receipts?', ['A receipt exceeded the program’s monthly reimbursement cap', 'Mentors forgot to attach itemized café invoices', 'Finance lost receipts from three senior engineering mentors', 'Receipts were submitted after the quarterly fiscal deadline'], 0, 'ตอบ A receipt exceeded the program’s monthly reimbursement cap (ใบเสร็จค่ากาแฟสูงถึง $75 ซึ่งเกินวงเงินเบิกเดือนละ $30 ตามคู่มือ)'],
      ['Part 3 · Detail', 'Why was the café bill unusually high?', ['A mentor paid for additional coworkers who joined the table', 'The cafe charged extra service fees for private meeting seating', 'Three pairs combined all quarterly meals onto one invoice', 'Workshop catering accidentally billed Finance twice'], 0, 'ตอบ A mentor paid for additional coworkers who joined the table (พี่เลี้ยงจ่ายค่ากาแฟให้เพื่อนร่วมงานอีก 4 คนที่แวะมานั่งร่วมโต๊ะด้วย)'],
      ['Part 3 · Decision', 'How much of the disputed claim will Finance reimburse?', ['$30', '$75', '$45', '$0'], 0, 'ตอบ $30 (อนุมัติเบิกจ่ายตามเพดานนโยบายที่ $30 เท่านั้น)'],
    ]),

    p3(23, 'l23-p3-6', [
      ['Man', 'au_m', 'Hi Ms. Dawson, this is Carlos from Beacon Moving. Our truck carrying your household boxes from Seattle just pulled up to your new apartment building—except the lobby security guard won’t let us touch the freight elevator!'],
      ['Woman', 'ca_f', 'Oh no! Wait—did my property manager forget to log our Tuesday delivery window into the building calendar?'],
      ['Man', 'au_m', 'Looks like it—he says no elevator pads are hung, and someone else booked a sofa delivery at eleven!'],
      ['Woman', 'ca_f', 'Let me sprint downstairs to talk to the leasing office right now—wait beside the loading bay for ten minutes while I get them to unlock Elevator B and hang the protective blankets!'],
    ], null, [
      ['Part 3 · Problem', 'Why are the movers unable to unload the truck immediately?', ['Building staff have no record of a reserved freight elevator slot', 'The moving van is too tall to fit inside the apartment loading bay', 'Seattle highway traffic delayed the sofa delivery crew', 'The leasing office lost the keys to Ms. Dawson’s unit'], 0, 'ตอบ Building staff have no record of a reserved freight elevator slot (รปภ. ไม่ให้ใช้ลิฟต์ขนของเพราะไม่มีชื่อจองในปฏิทินและยังไม่ได้ติดแผ่นกันกระแทก)'],
      ['Part 3 · Detail', 'Who else is scheduled to use the elevator at eleven o’clock?', ['Another resident receiving a sofa delivery', 'Apartment maintenance crews testing fire alarms', 'Commercial cleaners washing lobby windows', 'Carpenters delivering kitchen cabinets'], 0, 'ตอบ Another resident receiving a sofa delivery (มีคนอื่นจองส่งโซฟาไว้ตอน 11 โมง)'],
      ['Part 3 · Action', 'What will Ms. Dawson do in the next ten minutes?', ['Speak with the leasing office to arrange elevator access and padding', 'Unload smaller cardboard boxes through the front guest lobby', 'Ask Beacon Moving to return tomorrow morning at eight', 'Reschedule the Seattle freight truck to a storage warehouse'], 0, 'ตอบ Speak with the leasing office to arrange elevator access and padding (จะรีบลงไปติดต่อสำนักงานนิติบุคคลให้เปิดลิฟต์ B และติดผ้ากันกระแทกให้เรียบร้อย)'],
    ]),

    p3(23, 'l23-p3-7', [
      ['Man', 'us_m', 'Chloe, unroll that career fair banner right here—let’s test the giant QR code on the bottom corner with my phone camera before we pack the crate!'],
      ['Woman', 'uk_f', 'Wait—why did your screen open last autumn’s expired internship page instead of our new graduate engineering portal?!'],
      ['Man', 'us_m', 'Ugh! The print vendor reused our September artwork template without swapping the destination link! And our flight to Boston leaves at seven A.M. tomorrow!'],
      ['Woman', 'uk_f', 'Don’t panic—no need to reprint the whole vinyl! Ask Marketing to redirect that old URL straight to the new graduate page tonight, AND print opaque QR stickers to cover the bottom corner just in case.'],
    ], null, [
      ['Part 3 · Problem', 'What error did the speakers discover on the banner?', ['Its QR code opens an outdated internship webpage', 'Vinyl colors faded before packing the display crate', 'The graduate portal crashes on mobile phone cameras', 'The print vendor misspelled the Boston event date'], 0, 'ตอบ Its QR code opens an outdated internship webpage (คิวอาร์โค้ดบนป้ายแบนเนอร์ลิงก์ไปหน้าเว็บรับสมัครฝึกงานเก่าที่หมดอายุแล้ว)'],
      ['Part 3 · Detail', 'Why is ordering a brand-new banner impractical right now?', ['The recruiting team departs for Boston early tomorrow morning', 'Vinyl banner suppliers closed for the autumn holidays', 'Marketing ran out of funds in the recruiting print budget', 'Airport luggage weight limits prevent carrying heavier banners'], 0, 'ตอบ The recruiting team departs for Boston early tomorrow morning (ต้องบินไปบอสตันตั้งแต่ 7 โมงเช้าพรุ่งนี้จึงพิมพ์ป้ายใหม่ไม่ทัน)'],
      ['Part 3 · Proposal', 'What two-step fix does the woman suggest?', ['Redirecting the old web link and covering the printed code with updated stickers', 'Handing out paper flyers instead of bringing the display banner', 'Taking down the Boston graduate portal until Monday afternoon', 'Crossing out the QR square with black permanent marker'], 0, 'ตอบ Redirecting the old web link and covering the printed code with updated stickers (ให้ฝ่ายการตลาดทำลิงก์เปลี่ยนเส้นทางไปหน้าใหม่คืนนี้และพิมพ์สติกเกอร์ QR ใหม่แปะทับ)'],
    ]),

    p3(23, 'l23-p3-8', [
      ['Woman', 'us_f', 'Testing, testing—Trevor, hear that sharp ringing echo every time I speak into the wireless lapel mic before our Mentorship Workshop panel?'],
      ['Man1', 'uk_m', 'Yeah, we’ve got high feedback right near the front-left loudspeaker! Hold on, where is our guest keynote speaker sitting during the audience Q&A?'],
      ['Man2', 'ca_m', 'Actually, I plan to walk down the center aisle with a handheld mic during questions—so maybe skip wiring me up right under that speaker!'],
      ['Man1', 'uk_m', 'Smart call! Let me mute channel four on the lapel belt and hand you a directional handheld microphone tuned to reject front-speaker bleed.'],
      ['Woman', 'us_f', 'Sounds crisp already! Thank you both—let’s open the hall doors five minutes early so attendees grab coffee before nine.'],
    ], null, [
      ['Part 3 · Problem', 'What audio issue occurs during the pre-workshop sound check?', ['A wireless lapel microphone produces ringing feedback near a speaker', 'The auditorium’s main center loudspeaker lost power completely', 'Channel four recordings sound too quiet in the back row', 'Handheld microphones ran out of charged batteries'], 0, 'ตอบ A wireless lapel microphone produces ringing feedback near a speaker (ไมโครโฟนติดปกเสื้อส่งเสียงหอนสะท้อนเมื่ออยู่ใกล้ลำโพงหน้าซ้าย)'],
      ['Part 3 · Detail', 'How does the guest speaker intend to handle the Q&A session?', ['By walking along the center aisle while speaking', 'By sitting on a stool directly beneath the front-left speaker', 'By collecting written index cards from workshop tables', 'By answering questions from behind the podium'], 0, 'ตอบ By walking along the center aisle while speaking (วิทยากรรับเชิญตั้งใจจะเดินถือไมค์ไปตามทางเดินกลางห้องช่วงถาม-ตอบ)'],
      ['Part 3 · Decision', 'How does the technician resolve the sound issue?', ['By switching the guest speaker to a directional handheld microphone', 'By moving the front-left loudspeaker behind the stage curtain', 'By keeping the hall doors closed until nine o’clock', 'By cancelling the audience Q&A segment'], 0, 'ตอบ By switching the guest speaker to a directional handheld microphone (ปิดช่องไมค์ติดปกเสื้อและเปลี่ยนมาใช้ไมค์มือถือแบบรับเสียงเฉพาะทิศทางแทน)'],
    ]),

    p3(23, 'l23-p3-9', [
      ['Woman1', 'uk_f', 'Hi Megan, welcome to your Employee Relocation Benefits briefing! Since you’re moving twelve hundred miles from Denver to Atlanta, let’s confirm how you’d like to transport your sedan.'],
      ['Woman2', 'au_f', 'Thanks! I saw two options in my offer packet: open-carrier auto transport or claiming personal mileage reimbursement if my husband drives it down over three days.'],
      ['Woman1', 'uk_f', 'Right—both are covered! Just keep in mind that if he drives, we pay standard mileage plus two hotel nights and meals up to one hundred fifty dollars daily, whereas auto carrier leaves you both free to fly direct Monday.'],
      ['Woman2', 'au_f', 'Honestly, flying together Monday sounds far less exhausting than a three-day road trip! Let’s book the auto carrier and send me the pickup inspection checklist.'],
    ], null, [
      ['Part 3 · Topic', 'What relocation decision is Megan making?', ['How to move her personal car from Denver to Atlanta', 'Which airline offers the fastest Monday flight to Atlanta', 'Whether to stay in a corporate hotel for three nights', 'How to claim meal reimbursements during relocation training'], 0, 'ตอบ How to move her personal car from Denver to Atlanta (ตัดสินใจเลือกวิธีขนย้ายรถยนต์ส่วนตัวข้ามเมืองระยะทาง 1,200 ไมล์)'],
      ['Part 3 · Detail', 'What does the mileage reimbursement option cover in addition to fuel?', ['Two nights of lodging and a daily meal allowance', 'Full vehicle maintenance after arriving in Atlanta', 'Rental car charges during the three-day trip', 'Airline flight upgrades for her husband'], 0, 'ตอบ Two nights of lodging and a daily meal allowance (ครอบคลุมค่าที่พัก 2 คืนและค่าอาหารสูงสุดวันละ $150)'],
      ['Part 3 · Decision', 'Which transport option does Megan choose?', ['Shipping the car via an auto transport carrier while flying', 'Driving the sedan over three days with her husband', 'Selling her Denver car and buying a vehicle in Atlanta', 'Extending her hotel stay until the movers arrive'], 0, 'ตอบ Shipping the car via an auto transport carrier while flying (เลือกส่งรถผ่านบริษัทขนส่งรถยนต์และบินไปแอตแลนตาวันจันทร์พร้อมสามีเพื่อไม่ให้เหนื่อยเกินไป)'],
    ]),

    p3(23, 'l23-p3-10', [
      ['Man1', 'ca_m', 'Hey Victor, two engineering interns flying in for Friday’s regional mentoring summit haven’t received their prepaid travel stipends yet!'],
      ['Man2', 'us_m2', 'Hold on—let me check their vendor profiles in Payroll! Oh, look here: neither student entered a bank routing number under "Direct Deposit," so the system defaulted to mailing paper checks!'],
      ['Man1', 'ca_m', 'Paper checks take seven days—they fly out in forty-eight hours and need cash for airport transit and hotel incidentals!'],
      ['Man2', 'us_m2', 'Tell them to log into WorkPay and add their checking details before two P.M. today. Once that updates, I’ll void the paper checks and push an express wire straight to their accounts tomorrow morning.'],
    ], null, [
      ['Part 3 · Problem', 'Why have the two interns not received their travel funds?', ['Missing bank details caused Payroll to issue slow paper checks', 'Airport shuttle receipts failed supervisor verification', 'WorkPay software crashed before Friday’s payroll run', 'Travel stipends were excluded from the internship contract'], 0, 'ตอบ Missing bank details caused Payroll to issue slow paper checks (นักศึกษาฝึกงานไม่ได้กรอกเลขบัญชีรับเงินอัตโนมัติ ระบบเลยส่งเช็คกระดาษแทนซึ่งใช้เวลา 7 วัน)'],
      ['Part 3 · Detail', 'When do the interns depart for the summit?', ['In two days', 'Tomorrow morning', 'In seven days', 'Next Monday'], 0, 'ตอบ In two days (จะเดินทางในอีก 48 ชั่วโมงข้างหน้า)'],
      ['Part 3 · Action', 'What must the interns do before two o’clock today?', ['Enter their bank account details in the WorkPay system', 'Email hotel incidental receipts to Payroll', 'Cash their paper checks at a local branch', 'Request an airport shuttle voucher from Human Resources'], 0, 'ตอบ Enter their bank account details in the WorkPay system (เข้าไปกรอกข้อมูลบัญชีธนาคารในระบบ WorkPay ก่อนบ่ายสองวันนี้เพื่อให้โอนด่วนพรุ่งนี้เช้า)'],
    ]),

    p3(23, 'l23-p3-11', [
      ['Man', 'us_m', 'Hannah, a sharp cloud-architecture finalist at our Career Fair booth can’t come back next week, so she asked if we can hold a quiet thirty-minute technical interview right here at two-thirty P.M.'],
      ['Woman', 'au_f', 'Let’s scan our On-Site Interview Room Schedule! Notice Suite A is blocked until three, and Suite D only sits open for noisy group portfolio reviews—plus look at our acoustic privacy note!'],
      ['Man', 'us_m', 'Right—Suite C stays locked for campus staff, leaving only one private room free right at two-thirty!'],
      ['Woman', 'au_f', 'Got it! Reserve Suite B from two-thirty to three, and walk her up the east stairs five minutes beforehand.'],
    ], doc('table', 'Career Fair — On-Site Interview Room Schedule', [['Floor', '2nd Floor Mezzanine']], [
      tbl(
        ['Room', '2:00–2:30 P.M.', '2:30–3:00 P.M.', 'Room Notes'],
        [
          ['Suite A', 'Booked (Apex Bio)', 'Booked (Apex Bio)', 'Quiet Private Room'],
          ['Suite B', 'Booked (DataGrid)', 'Open', 'Quiet Private Room'],
          ['Suite C', 'Staff Storage', 'Staff Storage', 'Locked — No Candidates'],
          ['Suite D', 'Open', 'Open', 'Shared Group Tables (Noisy)'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which room will the speakers reserve for the two-thirty interview?', ['Suite B', 'Suite A', 'Suite C', 'Suite D'], 0, 'ตอบ Suite B (ผู้สมัครต้องการห้องส่วนตัวที่เงียบเวลา 14:30–15:00 น. ซึ่งมีเพียง Suite B ที่ว่างและเป็นห้องส่วนตัวเงียบสงบ)'],
      ['Part 3 · Graphic', 'Why is Suite D unsuitable for this candidate interview?', ['It uses shared group tables that are noisy', 'It is booked by Apex Bio until three o’clock', 'It remains locked for career fair staff storage', 'It lacks seating for technical whiteboard tests'], 0, 'ตอบ It uses shared group tables that are noisy (Suite D เป็นโต๊ะกลุ่มรวมและมีเสียงดัง ไม่เหมาะกับการสัมภาษณ์ตัวต่อตัว)'],
      ['Part 3 · Action', 'What will the speakers do five minutes before the interview?', ['Escort the candidate up the east stairs', 'Clear storage boxes out of Suite C', 'Ask DataGrid staff to finish early', 'Print cloud-architecture test packets'], 0, 'ตอบ Escort the candidate up the east stairs (พาผู้สมัครเดินขึ้นบันไดฝั่งตะวันออกล่วงหน้า 5 นาที)'],
    ]),

    p3(23, 'l23-p3-12', [
      ['Woman', 'uk_f', 'Welcome to our Corporate Mentorship Workshop check-in, Marcus. You’re transitioning into a department manager role, correct?'],
      ['Man', 'ca_m', 'Yes—just promoted last month! Today I’m specifically looking for a breakout track focused on coaching peers across different departments, rather than beginner technical skills.'],
      ['Woman', 'uk_f', 'Let’s look at your Mentorship Track Session Menu. Track One targets first-year interns, and Track Three covers Python and data tooling—neither fits your leadership goals.'],
      ['Man', 'ca_m', 'And Track Four looks geared toward retiring executives! Track Two—Cross-Functional Influence—matches exactly what I need. Sign me up for Room Oak at ten-fifteen!'],
    ], doc('list', 'Corporate Mentorship Workshop — Morning Breakout Tracks', null, [
      lst([
        'Track 1 · Campus-to-Desk Transition (Room Birch · Early-Career Interns)',
        'Track 2 · Cross-Functional Influence (Room Oak · New & Mid-Level Managers)',
        'Track 3 · Applied Analytics Coaching (Room Cedar · Technical Code Mentors)',
        'Track 4 · Executive Succession Planning (Room Maple · Senior VPs & Directors)',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which workshop room will Marcus attend?', ['Room Oak', 'Room Birch', 'Room Cedar', 'Room Maple'], 0, 'ตอบ Room Oak (Marcus ต้องการหลักสูตรสำหรับผู้จัดการใหม่เรื่องการโค้ชข้ามแผนก ตรงกับ Track 2 ที่จัดในห้อง Room Oak)'],
      ['Part 3 · Detail', 'Why does the woman rule out Track Three for Marcus?', ['It focuses on technical analytics tools rather than leadership', 'All seats inside Room Cedar were filled during early registration', 'Only senior vice presidents qualify for Track Three', 'It runs simultaneously with the relocation benefits briefing'], 0, 'ตอบ It focuses on technical analytics tools rather than leadership (Track 3 เน้นทักษะด้านโค้ดและเครื่องมือวิเคราะห์ข้อมูล ซึ่งไม่ใช่สิ่งที่ Marcus ต้องการ)'],
      ['Part 3 · Detail', 'When did Marcus move into his current manager role?', ['Last month', 'Six months ago', 'Last week', 'Two years ago'], 0, 'ตอบ Last month (Marcus บอกว่าเพิ่งได้รับการเลื่อนตำแหน่งเมื่อเดือนที่แล้ว)'],
    ]),

    p3(23, 'l23-p3-13', [
      ['Woman', 'us_f2', 'Hi David, thanks for hopping on a call to finalize your Employee Relocation Allowance before you transfer from Dallas to Seattle.'],
      ['Man', 'uk_m', 'Glad to! Let’s make sure I’m reading this tier breakdown box right. My new base distance clocks in just over two thousand miles, and I’m moving with my spouse and two kids.'],
      ['Woman', 'us_f2', 'Wait—let’s check both distance and household status on the Relocation Allowance Chart! Notice Tier A stops at five hundred miles, and Tier B applies only to single-person studio moves.'],
      ['Man', 'uk_m', 'Got it—so moving a family over eight hundred miles puts us squarely in Tier C! Does that lump sum cover temporary hotel nights as well as packing?'],
      ['Woman', 'us_f2', 'Yes—Tier C delivers the full twelve-thousand-dollar flexible grant straight into your first paycheck, zero receipts required for the packing portion!'],
    ], doc('box', 'HR Benefits — Relocation Allowance Tier Breakdown', [
      ['Policy', 'Domestic Transfers'],
      ['Tax Note', 'Grossed-Up Monthly'],
    ], [
      box('Grant Eligibility Tiers', [
        'Tier A ($3,500) · 100–500 Miles · Single or Family Move',
        'Tier B ($6,500) · Over 500 Miles · Single Household (1 Bedroom Max)',
        'Tier C ($12,000) · Over 800 Miles · Family / Multi-Person Household',
        'Tier D ($18,500) · International / Overseas Container Transfers',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which relocation grant amount will David receive?', ['$12,000', '$6,500', '$3,500', '$18,500'], 0, 'ตอบ $12,000 (ย้ายครอบครัวระยะทางกว่า 2,000 ไมล์ภายในประเทศ ตรงกับ Tier C ได้รับเงินสนับสนุน $12,000)'],
      ['Part 3 · Graphic', 'Why does David not qualify for Tier B?', ['He is relocating with his family rather than alone', 'His move covers fewer than five hundred miles', 'Tier B requires submitting receipts for international containers', 'Dallas transfers are excluded from single-household grants'], 0, 'ตอบ He is relocating with his family rather than alone (Tier B สำหรับครัวเรือนคนเดียวเท่านั้น แต่ David ย้ายพร้อมภรรยาและลูกสองคน)'],
      ['Part 3 · Detail', 'How will the relocation funds be issued to David?', ['Included directly inside his first paycheck', 'Reimbursed only after all moving boxes arrive', 'Paid directly to an external moving van contractor', 'Split across six monthly hotel vouchers'], 0, 'ตอบ Included directly inside his first paycheck (เงินก้อนจะจ่ายรวมเข้าไปในเช็คเงินเดือนงวดแรกของเขาโดยตรง)'],
    ]),

    // Set 23 Part 4 (10 Talks: Talks 8-10 have Graphics)
    p4(23, 'l23-p4-1', 'the following recruiting orientation announcement', 'ca_m',
      'Welcome, corporate recruiting teams, to the East Coast Engineering Career Fair. Before student doors open at ten A.M., please stop by the Employer Hospitality Desk behind Pillar Six to pick up your printed lanyard badges and table Wi-Fi passcodes. Notice that electric power strips have already been taped under every booth skirt—avoid plugging personal space heaters or espresso makers into floor outlets, as heavy loads can trip hall breakers mid-morning. Good luck finding great talent!',
      null, [
        ['Part 4 · Purpose', 'What is the purpose of this announcement?', ['To provide setup instructions and power guidelines to career fair recruiters', 'To welcome graduating engineering students entering the exhibition hall', 'To announce afternoon interview cancellations near Pillar Six', 'To advertise Wi-Fi passcodes for university job applicants'], 0, 'ตอบ To provide setup instructions and power guidelines to career fair recruiters (ชี้แจงจุดรับบัตรและรหัส Wi-Fi รวมถึงข้อห้ามใช้เครื่องใช้ไฟฟ้ากำลังไฟสูงสำหรับทีมสรรหาบุคลากร)'],
        ['Part 4 · Detail', 'Where can recruiters collect their lanyard badges?', ['At the Employer Hospitality Desk behind Pillar Six', 'Beside the main student entry doors', 'Underneath their assigned booth tablecloth', 'Inside the morning espresso refreshment lounge'], 0, 'ตอบ At the Employer Hospitality Desk behind Pillar Six (ไปรับได้ที่โต๊ะ Employer Hospitality Desk ด้านหลังเสาที่ 6)'],
        ['Part 4 · Detail', 'Why should exhibitors avoid plugging espresso makers into floor outlets?', ['They might overload electrical circuits and trip breakers', 'Coffee spills damage expensive exhibition hall carpeting', 'Free espresso stations already operate near Pillar Six', 'Floor power strips only support two-prong phone chargers'], 0, 'ตอบ They might overload electrical circuits and trip breakers (กระแสไฟสูงเกินไปอาจทำให้เบรกเกอร์ของห้องโถงตัดไฟได้)'],
      ]),

    p4(23, 'l23-p4-2', 'the following workshop opening remarks', 'uk_f',
      'Good morning, mentors and incoming associates, and welcome to our autumn Corporate Mentorship Workshop. Over the next six months, each pair is asked to meet for thirty minutes every other week—whether over coffee, walking outdoors, or via video link. Remember, today’s session isn’t about grading job performance; your role as a mentor is sharing unspoken company insights and helping new colleagues build confidence. Let’s start by opening the blue conversation prompt cards at your tables.',
      null, [
        ['Part 4 · Detail', 'How frequently should mentorship pairs meet over the next six months?', ['For thirty minutes every two weeks', 'Once a month for sixty minutes', 'Every Friday morning over lunch', 'Twice weekly via video calls'], 0, 'ตอบ For thirty minutes every two weeks (กำหนดให้พบปะกันครั้งละ 30 นาที ทุกๆ สองสัปดาห์ตลอด 6 เดือน)'],
        ['Part 4 · Detail', 'What does the speaker emphasize that mentors should NOT focus on?', ['Evaluating or grading employees’ formal job performance', 'Sharing practical tips about workplace culture', 'Meeting outdoors or over informal coffee chats', 'Helping junior colleagues build workplace confidence'], 0, 'ตอบ Evaluating or grading employees’ formal job performance (ย้ำว่าวันนี้และบทบาทพี่เลี้ยงไม่ใช่การประเมินหรือให้เกรดผลการปฏิบัติงาน)'],
        ['Part 4 · Action', 'What will participants do immediately next?', ['Open the blue conversation cards on their tables', 'Schedule video links for next month’s review', 'Walk outdoors in matched pairs for thirty minutes', 'Complete an online HR performance survey'], 0, 'ตอบ Open the blue conversation cards on their tables (ให้เริ่มเปิดการ์ดหัวข้อสนทนาสีน้ำเงินที่วางบนโต๊ะ)'],
      ]),

    p4(23, 'l23-p4-3', 'the following webinar excerpt', 'us_m2',
      'Welcome to this afternoon’s Relocation Benefits Orientation for incoming international managers. Many of you asked whether you need to pay upfront out of pocket for your initial thirty nights at our partner extended-stay hotels. The short answer is no: once your HR coordinator submits your arrival flight date, our central travel desk establishes a direct-billing master folio covering room rate and local taxes. You’ll only place a personal card at check-in for incidentals like room service or dry cleaning.',
      null, [
        ['Part 4 · Topic', 'What question is the speaker answering for relocating employees?', ['How extended-stay hotel room charges are billed during arrival', 'Whether international flight tickets are booked by travel agents', 'How long incoming managers stay at partner hotels', 'Which cities offer dry-cleaning allowances for new transfers'], 0, 'ตอบ How extended-stay hotel room charges are billed during arrival (ชี้แจงเรื่องระบบการชำระค่าโรงแรม 30 คืนแรกโดยไม่ต้องสำรองจ่ายเอง)'],
        ['Part 4 · Detail', 'Who arranges the direct-billing hotel master folio?', ['The company’s central travel desk after receiving flight dates', 'The incoming manager at the hotel reception desk', 'Local tax offices in the destination city', 'External moving van coordinators'], 0, 'ตอบ The company’s central travel desk after receiving flight dates (ฝ่าย Central Travel Desk จะเปิดบิลตรงให้หลังจาก HR ส่งวันที่เดินทางมาถึง)'],
        ['Part 4 · Detail', 'What expenses must guests cover with a personal credit card?', ['Optional extras such as room service or dry cleaning', 'Nightly room rates and city accommodation taxes', 'Airport taxi rides from incoming flights', 'Initial thirty-night hotel parking permits'], 0, 'ตอบ Optional extras such as room service or dry cleaning (ค่าใช้จ่ายเบ็ดเตล็ดส่วนตัว เช่น รูมเซอร์วิสหรือซักแห้งต้องใช้บัตรส่วนตัววางประกันไว้)'],
      ]),

    p4(23, 'l23-p4-4', 'the following campus event announcement', 'au_f',
      'Attention graduating seniors visiting the Spring Technology Career Fair! Before handing printed resumes directly to hiring managers inside Hall A, consider stopping by our quick Resume Clinic along the lobby corridor right now. Volunteer HR alumni from twelve partner tech companies are reviewing portfolios and offering five-minute formatting critiques until one-thirty P.M. Sign up on the clipboards near the fountain—no pre-registration needed—and grab a complimentary leather padfolio while supplies last.',
      null, [
        ['Part 4 · Topic', 'What service is being promoted in the lobby corridor?', ['Free brief resume feedback from visiting HR professionals', 'On-site technical coding interviews for graduating seniors', 'Printed resume copying services near the courtyard fountain', 'Pre-registration tables for next semester’s career fair'], 0, 'ตอบ Free brief resume feedback from visiting HR professionals (ประชาสัมพันธ์คลินิกตรวจเรซูเม่ฟรี 5 นาทีโดยศิษย์เก่า HR จาก 12 บริษัท)'],
        ['Part 4 · Detail', 'Until what time are the volunteer reviewers available?', ['1:30 P.M.', '12:00 P.M.', '5:00 P.M.', '2:30 P.M.'], 0, 'ตอบ 1:30 P.M. (เปิดให้คำปรึกษาจนถึงเวลา 13:30 น.)'],
        ['Part 4 · Detail', 'What complimentary item can students pick up at the clinic?', ['A leather padfolio', 'A printed tech directory', 'A coffee voucher', 'A USB flash drive'], 0, 'ตอบ A leather padfolio (รับแฟ้มเอกสารหนังฟรีได้จนกว่าของจะหมด)'],
      ]),

    p4(23, 'l23-p4-5', 'the following recognition luncheon speech', 'us_f',
      'Before dessert plates arrive, please join me in honoring three senior mentorship leads stepping down from our committee this year—David Cho, Miriam Klein, and Priya Raman. When we launched this coaching initiative four years ago with only eighteen volunteers, these three pioneers stayed late drafting every pairing guide and training checklist we still rely on today. Since then, over four hundred junior analysts have moved into leadership roles after completing their mentorship year. Please raise your glasses to them!',
      null, [
        ['Part 4 · Purpose', 'What is the main purpose of this luncheon speech?', ['To thank three retiring leaders who helped build the mentorship program', 'To recruit eighteen new senior volunteers for next year’s cohort', 'To announce promotions for four hundred junior analysts', 'To introduce revised pairing guides for incoming mentors'], 0, 'ตอบ To thank three retiring leaders who helped build the mentorship program (กล่าวขอบคุณผู้นำโครงการพี่เลี้ยงอาวุโส 3 ท่านที่กำลังจะอำลาตำแหน่ง)'],
        ['Part 4 · Detail', 'When was the mentorship initiative originally started?', ['Four years ago', 'Eighteen months ago', 'Last spring', 'Ten years ago'], 0, 'ตอบ Four years ago (ริเริ่มโครงการนี้เมื่อ 4 ปีที่แล้ว)'],
        ['Part 4 · Detail', 'How many junior analysts have advanced to leadership after participating?', ['Over four hundred', 'Eighteen', 'Three hundred', 'Forty-five'], 0, 'ตอบ Over four hundred (นักวิเคราะห์รุ่นน้องกว่า 400 คนได้ก้าวสู่ตำแหน่งผู้นำหลังจากจบโครงการ)'],
      ]),

    p4(23, 'l23-p4-6', 'the following podcast interview introduction', 'uk_m',
      'Welcome back to Global Talent Radio. Transferring skilled professionals overseas involves far more than shipping sofas and booking airfare—when employees bring school-age children, family stability determines whether an assignment succeeds. Today we’re joined by Kenji Morita, Director of Global Mobility at NorthStar Pharma, whose team rolled out a pioneering tuition-search and neighborhood-orientation stipend last quarter. Stay tuned as Kenji shares how early school placement support cut mid-assignment early returns by half.',
      null, [
        ['Part 4 · Topic', 'What aspect of employee relocation is the focus of today’s episode?', ['Supporting transferring families with children’s schooling and local orientation', 'Negotiating cheaper container rates for overseas household shipping', 'Automating airline booking tools for international executives', 'Replacing long-term overseas postings with remote work'], 0, 'ตอบ Supporting transferring families with children’s schooling and local orientation (เจาะลึกเรื่องการสนับสนุนค่าหาโรงเรียนและปรับตัวเข้าชุมชนสำหรับครอบครัวพนักงานที่มีบุตร)'],
        ['Part 4 · Detail', 'Who is the guest speaker on today’s podcast?', ['The Director of Global Mobility at NorthStar Pharma', 'A school principal from an international academy', 'An overseas shipping logistics consultant', 'The host of an employee recruitment conference'], 0, 'ตอบ The Director of Global Mobility at NorthStar Pharma (Kenji Morita ผู้อำนวยการฝ่าย Global Mobility ของ NorthStar Pharma)'],
        ['Part 4 · Detail', 'What measurable result did NorthStar Pharma achieve with this stipend?', ['It reduced early assignment returns by fifty percent', 'It doubled overseas relocation applications last quarter', 'It cut international airfare expenses in half', 'It expanded furniture shipping allowances to twelve countries'], 0, 'ตอบ It reduced early assignment returns by fifty percent (ลดอัตราพนักงานขอกลับประเทศก่อนครบกำหนดลงได้ครึ่งหนึ่ง)'],
      ]),

    p4(23, 'l23-p4-7', 'the following automated helpline recording', 'ca_f',
      'You have reached the Employee Relocation Assistance Helpline. Our benefits specialists answer live calls Monday through Friday from eight A.M. to six P.M. Central Time. If you have already uploaded moving receipts and wish to check reimbursement deposit status, press one and enter your six-digit employee ID. For urgent flight disruptions or temporary apartment lockouts during transit, press two to reach our twenty-four-hour emergency travel desk. All other inquiries, please leave a detailed voicemail.',
      null, [
        ['Part 4 · Detail', 'When are benefits specialists available to speak live?', ['Weekdays between 8:00 A.M. and 6:00 P.M. Central Time', 'Twenty-four hours daily including weekends', 'Monday through Saturday from 9:00 A.M. to 5:00 P.M.', 'Only during morning arrival check-in hours'], 0, 'ตอบ Weekdays between 8:00 A.M. and 6:00 P.M. Central Time (เจ้าหน้าที่ให้บริการสดวันจันทร์ถึงศุกร์ เวลา 08:00–18:00 น. ตามเวลา Central Time)'],
        ['Part 4 · Action', 'Which option checks the deposit status of uploaded moving receipts?', ['Pressing one and entering an employee ID', 'Pressing two for the emergency desk', 'Leaving a detailed voicemail message', 'Calling back during weekend travel hours'], 0, 'ตอบ Pressing one and entering an employee ID (กดเลข 1 และกรอกรหัสพนักงาน 6 หลักเพื่อเช็กสถานะเงินชดเชย)'],
        ['Part 4 · Detail', 'Who should press button two?', ['Employees facing urgent flight issues or apartment lockouts', 'New hires requesting extra cardboard wardrobe boxes', 'Managers approving relocation expense extensions', 'Landlords verifying corporate apartment leases'], 0, 'ตอบ Employees facing urgent flight issues or apartment lockouts (พนักงานที่ประสบเหตุฉุกเฉินเรื่องเที่ยวบินหรือเข้าห้องพักชั่วคราวไม่ได้)'],
      ]),

    p4(23, 'l23-p4-8', 'the following recruiting debrief and candidate pipeline table', 'au_m',
      'Let’s review our candidate funnel from last week’s Spring Engineering Career Fair shown on the slide. Notice our booth drew plenty of initial foot traffic, and phone recruiters moved forty-two applicants efficiently into our technical coding assessment! However, look right below that stage: more than half of candidates dropped out before booking their final panel! Several applicants emailed saying our multi-hour coding prompt felt unclear. Before autumn recruiting opens, let’s trim that test to sixty minutes.',
      doc('table', 'Spring Career Fair — Software Candidate Funnel', [['Role', 'Junior Backend Engineer']], [
        tbl(
          ['Hiring Stage', 'Candidates', 'Drop-Off Rate', 'Notes'],
          [
            ['Booth Resume Scans', '180', '—', 'Strong Campus Traffic'],
            ['15-Min Phone Screen', '42', '77% Filtered', 'On Target'],
            ['Take-Home Coding Test', '18', '57% Drop-Off', 'Prompt Complaints'],
            ['Final Panel Interview', '12', '33% Filtered', '8 Offers Extended'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. At which stage did 57% of candidates drop out of the process?', ['Take-Home Coding Test', 'Booth Resume Scans', '15-Min Phone Screen', 'Final Panel Interview'], 0, 'ตอบ Take-Home Coding Test (ตารางระบุอัตราการถอนตัว 57% อยู่ที่ขั้นตอน Take-Home Coding Test)'],
        ['Part 4 · Reason', 'Why did many applicants fail to complete that stage?', ['They found the multi-hour coding instructions confusing', 'Phone screening calls ran behind schedule', 'Final panel interview dates conflicted with exams', 'Eight offers were already accepted early'], 0, 'ตอบ They found the multi-hour coding instructions confusing (ผู้สมัครส่งอีเมลบอกว่าโจทย์เขียนโค้ดที่ใช้เวลาหลายชั่วโมงไม่ชัดเจน)'],
        ['Part 4 · Action', 'What change will the recruiting team make before the autumn fair?', ['Shorten the coding assessment to sixty minutes', 'Double the number of booth resume scanners', 'Eliminate the fifteen-minute phone screen', 'Extend job offers directly from the campus booth'], 0, 'ตอบ Shorten the coding assessment to sixty minutes (จะปรับลดเวลาทำแบบทดสอบเขียนโค้ดลงเหลือ 60 นาที)'],
      ]),

    p4(23, 'l23-p4-9', 'the following workshop update and room directory', 'us_f2',
      'Attention mentorship workshop participants—before we break into morning cohort discussions, please take note of one room change on our Breakout Directory. Building maintenance just began loud ceiling repairs on the ventilation duct above our Finance track room, making conversation nearly impossible. Therefore, Finance mentors and mentees should bypass that noisy room and walk down the west corridor into our unused spare room instead. Operations, Design, and Legal cohorts stay right where originally posted.',
      doc('list', 'Corporate Mentorship Workshop — Breakout Room Directory', null, [
        lst([
          'Room 201 (North Hall) · Operations & Supply Cohort (Unchanged)',
          'Room 204 (East Hall) · Finance & Risk Cohort (NOISY HVAC REPAIR — MOVED)',
          'Room 208 (South Hall) · Product Design Cohort (Unchanged)',
          'Room 212 (West Corridor) · Open Reserve Room (Reassigned to Finance)',
          'Room 215 (West Corridor) · Legal & Compliance Cohort (Unchanged)',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Where should the Finance & Risk Cohort now meet?', ['Room 212', 'Room 201', 'Room 204', 'Room 215'], 0, 'ตอบ Room 212 (Room 204 มีงานซ่อมระบบระบายอากาศเสียงดัง จึงย้ายกลุ่ม Finance ไปใช้ห้องสำรองที่โถงตะวันตกคือ Room 212)'],
        ['Part 4 · Problem', 'Why was the original Finance breakout room unsuitable?', ['Workers are repairing noisy ceiling ventilation ducts above it', 'Chairs inside Room 204 were removed for painting', 'Product Design teams accidentally occupied the room', 'Projector screens failed to power on in East Hall'], 0, 'ตอบ Workers are repairing noisy ceiling ventilation ducts above it (ช่างซ่อมบำรุงกำลังซ่อมท่อระบายอากาศบนเพดานทำให้เกิดเสียงดังรบกวน)'],
        ['Part 4 · Detail', 'Which cohorts remain in their originally assigned rooms?', ['Operations, Design, and Legal cohorts', 'Only Legal and Operations cohorts', 'Only Finance and Product Design cohorts', 'All cohorts on the West Corridor'], 0, 'ตอบ Operations, Design, and Legal cohorts (กลุ่ม Operations, Design และ Legal ยังอยู่ห้องเดิมทั้งหมด)'],
      ]),

    p4(23, 'l23-p4-10', 'the following benefits talk and claim checklist', 'uk_f2',
      'Let’s wrap up our Relocation Orientation by glancing at your Reimbursement Claim Checklist so Payroll approves your invoices on the first try. Remember, ordinary travel meals and highway tolls need only itemized receipts uploaded within thirty days. Look closely at the bottom line of the box, however: shipping musical instruments, motorcycles, or oversized crates ALWAYS requires written pre-approval from HR before moving day—otherwise Accounting must deduct that surcharge from your final payout.',
      doc('box', 'HR Relocation — Reimbursement Claim Checklist', [
        ['Portal', 'WorkPay Expenses'],
        ['Deadline', '30 Days Post-Move'],
      ], [
        box('Documentation Rules by Expense Type', [
          'Highway Tolls & Fuel -> Itemized Paper or Digital Receipt',
          'En-Route Travel Meals -> Itemized Receipt (No Alcohol)',
          'Auto Carrier Deposit -> Carrier Bill of Lading + Proof of Payment',
          'Specialty Freight (Pianos / Motorcycles / Heavy Crates) -> Written HR Pre-Approval + Quote',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which relocation expense requires written HR authorization before moving day?', ['Shipping a piano or motorcycle', 'Paying highway tolls during the drive', 'Buying en-route meals while traveling', 'Submitting an auto carrier deposit'], 0, 'ตอบ Shipping a piano or motorcycle (บรรทัดล่างสุดของรายการระบุ Specialty Freight เช่น เปียโน รถจักรยานยนต์ ต้องได้รับอนุมัติล่วงหน้าเป็นลายลักษณ์อักษรจาก HR)'],
        ['Part 4 · Detail', 'Within how many days after moving must travelers upload expense receipts?', ['Within 30 days', 'Within 7 days', 'Within 14 days', 'Within 60 days'], 0, 'ตอบ Within 30 days (หัวข้อ Deadline ระบุต้องอัปโหลดภายใน 30 วันหลังย้ายเสร็จ)'],
        ['Part 4 · Detail', 'What happens if a specialty freight item lacks prior HR sign-off?', ['Accounting withholds that fee from the reimbursement payout', 'The moving van leaves the item at the old residence', 'HR doubles the thirty-day receipt submission deadline', 'Payroll moves the charge onto next year’s tax statement'], 0, 'ตอบ Accounting withholds that fee from the reimbursement payout (ฝ่ายบัญชีจำเป็นต้องหักค่าใช้จ่ายส่วนเกินนั้นออกจากยอดเงินคืนสุดท้าย)'],
      ]),

    // ==================== SET 24 ====================
    p1(24, 'l24-p1-1', 'au_m', [
      'A solar technician is fastening dark panels onto metal roof rails.',
      'Electricians are digging a narrow trench beside a garden fence.',
      'Stacks of cedar shingles are covered with a waterproof tarp.',
      'A homeowner is climbing down an aluminum extension ladder.',
    ], 0, 'ตอบ A solar technician is fastening dark panels onto metal roof rails. (ช่างโซลาร์เซลล์กำลังยึดแผงสีเข้มเข้ากับรางโลหะบนหลังคา)'),
    p1(24, 'l24-p1-2', 'uk_f', [
      'A salesperson is pointing at a brushed-brass faucet above a display sink.',
      'Customers are comparing ceramic floor tiles under fluorescent lights.',
      'A plumber is tightening copper pipes underneath a kitchen cabinet.',
      'Boxed bathroom mirrors are leaning against a showroom counter.',
    ], 0, 'ตอบ A salesperson is pointing at a brushed-brass faucet above a display sink. (พนักงานขายกำลังชี้แนะนำก๊อกน้ำทองเหลืองปัดเงาเหนืออ่างล้างหน้าตัวอย่าง)'),
    p1(24, 'l24-p1-3', 'ca_m', [
      'A carpenter is measuring a wooden cabinet frame with a tape measure.',
      'Painters are rolling white primer onto bare drywall panels.',
      'Several cordless drills are lined up along a pegboard rack.',
      'Two installers are carrying a granite countertop into a lobby.',
    ], 0, 'ตอบ A carpenter is measuring a wooden cabinet frame with a tape measure. (ช่างไม้กำลังใช้ตลับเมตรวัดขนาดโครงตู้ไม้)'),
    p1(24, 'l24-p1-4', 'us_m2', [
      'Sanded wooden drawer fronts are stacked beside sawhorses in a shop.',
      'Metal plumbing valves are packed inside open cardboard bins.',
      'Workers are sweeping wood shavings around a circular table saw.',
      'Finished oak bookshelves stand along a brightly lit showroom wall.',
    ], 0, 'ตอบ Sanded wooden drawer fronts are stacked beside sawhorses in a shop. (หน้าบานลิ้นชักไม้ที่ขัดเรียบแล้ววางซ้อนกันอยู่ข้างม้ารองเลื่อยในโรงงานไม้)'),
    p1(24, 'l24-p1-5', 'us_f', [
      'A homeowner and contractor are examining blueprint drawings on a porch.',
      'Roofers are unloading bundles of dark solar wiring from a pickup truck.',
      'An inspector is testing outdoor lighting switches beside a garage.',
      'Two neighbors are trimming tree branches overhanging a patio.',
    ], 0, 'ตอบ A homeowner and contractor are examining blueprint drawings on a porch. (เจ้าของบ้านและผู้รับเหมากำลังดูแบบแปลนพิมพ์เขียวร่วมกันบนระเบียงบ้าน)'),
    p1(24, 'l24-p1-6', 'uk_m', [
      'Tankless water heaters are mounted in a neat row on a tiled showroom wall.',
      'PVC drainpipes have been bundled together on a wooden pallet.',
      'A technician is calibrating pressure gauges inside a boiler room.',
      'Shower glass doors are leaning against padded warehouse dividers.',
    ], 0, 'ตอบ Tankless water heaters are mounted in a neat row on a tiled showroom wall. (เครื่องทำน้ำอุ่นแบบไร้ถังถูกติดตั้งเรียงเป็นแถวบนผนังกระเบื้องในโชว์รูม)'),

    // Set 24 Part 2 (25 Qs)
    p2(24, 'l24-p2-1', 'uk_f', 'us_m', 'Where are the walnut cabinet stain samples kept?', ['In the top flat drawer behind the reception counter.', 'Around three weeks for custom milling.', 'Yes, we switched to water-based varnish.'], 0, 'ตอบ In the top flat drawer behind the reception counter. (ถามที่เก็บตัวอย่างสีไม้ Where ตอบในลิ้นชักแบนชั้นบนหลังเคาน์เตอร์ต้อนรับ)'),
    p2(24, 'l24-p2-2', 'au_m', 'ca_f', 'Who inspected the residential roof trusses before solar rail installation?', ['Our licensed structural engineer signed off Tuesday morning.', 'Fourteen monocrystalline panels altogether.', 'On the south-facing garage slope.'], 0, 'ตอบ Our licensed structural engineer signed off Tuesday morning. (ถามผู้ตรวจโครงหลังคา Who ตอบวิศวกรโครงสร้างที่มีใบอนุญาตตรวจอนุมัติเมื่อเช้าวันอังคาร)'),
    p2(24, 'l24-p2-3', 'us_m', 'uk_f2', 'When does the city utility schedule bidirectional solar meter swaps?', ['Within five business days after passing electrical inspection.', 'Beside the main exterior breaker box.', 'About four hundred kilowatt-hours monthly.'], 0, 'ตอบ Within five business days after passing electrical inspection. (ถามเวลาเปลี่ยนมิเตอร์ไฟ When ตอบภายใน 5 วันทำการหลังผ่านการตรวจระบบไฟฟ้า)'),
    p2(24, 'l24-p2-4', 'ca_f', 'au_m', 'Why did the plumbing showroom mark down those floor-model sensor faucets?', ['We’re clearing wall space for next season’s brass series.', 'At zero-point-five gallons per minute.', 'Try tightening the chrome aerator ring.'], 0, 'ตอบ We’re clearing wall space for next season’s brass series. (ถามเหตุผลลดราคา Why ตอบเพราะกำลังเคลียร์พื้นที่ผนังรับสินค้ารุ่นทองเหลืองฤดูกาลหน้า)'),
    p2(24, 'l24-p2-5', 'us_f2', 'uk_m', 'How many soft-close cabinet hinges do we still need for the hotel lobby desk?', ['Thirty-six pairs—the carpenter ordered extra spares.', 'Stainless steel with concealed mounting plates.', 'Yes, installation finishes Thursday afternoon.'], 0, 'ตอบ Thirty-six pairs—the carpenter ordered extra spares. (ถามจำนวนบานพับ How many ตอบยังต้องใช้อีก 36 คู่)'),
    p2(24, 'l24-p2-6', 'uk_m', 'us_f', 'Should we install the solar inverter inside the garage or on the shaded north wall?', ['Inside the garage protects it better from winter sleet.', 'Both batteries hold ten kilowatt-hours.', 'Right above the laundry room sink.'], 0, 'ตอบ Inside the garage protects it better from winter sleet. (ถามทางเลือก A or B ตอบติดตั้งในโรงรถดีกว่าเพื่อกันลูกเห็บและอากาศหนาว)'),
    p2(24, 'l24-p2-7', 'au_f', 'ca_m', 'Didn’t the plumbing wholesaler ship our low-flow showerheads yesterday?', ['Actually, customs held the copper valve crate at the port.', 'Yes, customers save thirty percent on water bills.', 'Along Aisle Three near tankless heaters.'], 0, 'ตอบ Actually, customs held the copper valve crate at the port. (คำถามปฏิเสธ Didn’t... ตอบตามจริงว่าศุลกากรกักลังวาล์วทองแดงไว้ที่ท่าเรือ)'),
    p2(24, 'l24-p2-8', 'ca_m', 'us_m2', 'Could you hold the end of this birch crown molding while I check the miter angle?', ['Sure, let me brace it firmly against the saw fence.', 'Forty-five degrees on both outside corners.', 'No, I prefer matte oak trim for breakrooms.'], 0, 'ตอบ Sure, let me brace it firmly against the saw fence. (ขอให้ช่วยจับปลายไม้บัว ตอบตกลงพร้อมช่วยยึดทาบกับรั้วเลื่อย)'),
    p2(24, 'l24-p2-9', 'us_m2', 'au_f', 'Which rebate program applies to residential greywater filtration tanks?', ['The Metro Water Board covers twenty-five percent of hardware costs.', 'Installed underneath the backyard patio deck.', 'Every Tuesday through Saturday from ten to six.'], 0, 'ตอบ The Metro Water Board covers twenty-five percent of hardware costs. (ถามโปรแกรมเงินคืน Which rebate program ตอบโครงการของการประปานครหลวงที่คืนเงิน 25%)'),
    p2(24, 'l24-p2-10', 'uk_f2', 'us_m', 'How long does a standard four-kilowatt rooftop solar installation take?', ['Usually two full days from rail layout to wiring.', 'Roughly thirty-year power output warranties.', 'Yes, the city permit arrived this morning.'], 0, 'ตอบ Usually two full days from rail layout to wiring. (ถามระยะเวลาติดตั้ง How long ตอบปกติใช้เวลา 2 วันเต็ม)'),
    p2(24, 'l24-p2-11', 'ca_f', 'uk_m', 'What should I apply to protect outdoor cedar cabinet doors from kitchen steam?', ['Two coats of marine-grade polyurethane sealer.', 'Beside the espresso machine counter.', 'Almost twelve feet of linear cabinetry.'], 0, 'ตอบ Two coats of marine-grade polyurethane sealer. (ถามวัสดุเคลือบผิวไม้ What should I apply ตอบทาน้ำยาเคลือบโพลียูรีเทนเกรดกันน้ำ 2 รอบ)'),
    p2(24, 'l24-p2-12', 'au_m', 'us_f', 'The showroom’s live water-pressure demo basin is dripping underneath the trap.', ['Turn off the under-counter shutoff valve before calling Maintenance.', 'No, it uses recirculated filtered rainwater.', 'Around sixty pounds per square inch.'], 0, 'ตอบ Turn off the under-counter shutoff valve before calling Maintenance. (แจ้งปัญหาอ่างสาธิตน้ำรั่ว ตอบแนะวิธีแก้ให้ปิดวาล์วน้ำใต้เคาน์เตอร์ก่อนโทรแจ้งซ่อม)'),
    p2(24, 'l24-p2-13', 'us_f', 'ca_m', 'Why don’t we replace those worn table-saw blades before cutting the maple veneers?', ['Good call—a sharp blade prevents chipping the edges.', 'Yes, maple plywood sheets arrived in Stack Four.', 'Around three hundred revolutions per minute.'], 0, 'ตอบ Good call—a sharp blade prevents chipping the edges. (ข้อเสนอเปลี่ยนใบเลื่อยก่อนตัดไม้วีเนียร์ ตอบเห็นด้วยพร้อมเหตุผลว่าใบคมช่วยกันขอบไม้บิ่น)'),
    p2(24, 'l24-p2-14', 'uk_m', 'au_f', 'How much extra does a backup battery add to the homeowner’s solar quote?', ['Roughly nine thousand dollars before federal tax credits.', 'Yes, it powers essential kitchen circuits overnight.', 'Mounted beside the main electrical panel.'], 0, 'ตอบ Roughly nine thousand dollars before federal tax credits. (ถามราคาเพิ่ม How much ตอบเพิ่มประมาณ $9,000 ก่อนหักเครดิตภาษี)'),
    p2(24, 'l24-p2-15', 'ca_m', 'uk_f', 'Aren’t the cabinetry installers delivering the reception desk modules this morning?', ['Wait—heavy rain pushed their box-truck dispatch to one o’clock.', 'Mostly laminated birch and brushed aluminum trim.', 'Yes, we cleared the lobby pathway yesterday.'], 0, 'ตอบ Wait—heavy rain pushed their box-truck dispatch to one o’clock. (ถามย้ำกำหนดส่งเมื่อเช้า ตอบแก้ไขว่าฝนตกหนักทำให้เลื่อนส่งเป็นบ่ายโมง)'),
    p2(24, 'l24-p2-16', 'us_m', 'ca_f', 'Would you like me to carry those aluminum roof rails up to the scaffolding?', ['Wait until I strap down the ladder rungs first.', 'They measure sixteen feet per section.', 'No, solar roof brackets go inside the blue crate.'], 0, 'ตอบ Wait until I strap down the ladder rungs first. (เสนอช่วยยกรางโซลาร์ขึ้นนั่งร้าน ตอบให้รอก่อนจนกว่าจะรัดบันไดให้แน่น)'),
    p2(24, 'l24-p2-17', 'uk_f', 'us_m2', 'Do you know which showroom consultant handles commercial restaurant sinks?', ['Ask Priya—she specializes in heavy hospitality plumbing specs.', 'Yes, triple-basin stainless units are in stock.', 'Until seven P.M. on Thursday evenings.'], 0, 'ตอบ Ask Priya—she specializes in heavy hospitality plumbing specs. (ถามหาผู้ดูแลงานลูกค้าองค์กร Do you know which... ตอบให้ถาม Priya ที่เชี่ยวชาญสเปกร้านอาหาร)'),
    p2(24, 'l24-p2-18', 'au_f', 'uk_m', 'You logged the roof pitch and shade measurements into the solar app, didn’t you?', ['Wait—my tablet battery died right before measuring the east gable.', 'About twenty-eight degrees facing southwest.', 'Inside the customer site-survey folder.'], 0, 'ตอบ Wait—my tablet battery died right before measuring the east gable. (Tag question ถามยืนยัน ตอบตามจริงว่าแบตแท็บเล็ตหมดก่อนวัดฝั่งตะวันออก)'),
    p2(24, 'l24-p2-19', 'us_f2', 'ca_m', 'How often should homeowners rinse dust off residential solar panels?', ['Once or twice a year, unless heavy pollen builds up.', 'Always use soft brushes instead of harsh pressure washers.', 'Usually during midday peak sunlight hours.'], 0, 'ตอบ Once or twice a year, unless heavy pollen builds up. (ถามความถี่การล้างแผงโซลาร์ How often ตอบปีละ 1–2 ครั้ง)'),
    p2(24, 'l24-p2-20', 'uk_m', 'au_m', 'Whose cordless impact driver was left on the plumbing van tailgate?', ['Check with Luis—he was tightening outdoor hose bibs.', 'No, both lithium batteries finished charging.', 'Set the toolbox beside the shop door.'], 0, 'ตอบ Check with Luis—he was tightening outdoor hose bibs. (ถามความเป็นเจ้าของ Whose ตอบให้ลองถาม Luis ที่เพิ่งขันก๊อกสนาม)'),
    p2(24, 'l24-p2-21', 'ca_f', 'us_f', 'I heard municipal permits for rooftop batteries now approve electronically in forty-eight hours.', ['Finally! That saves homeowners weeks of paper delays.', 'Yes, twelve-kilowatt inverters require larger breakers.', 'Down at City Hall Window Three.'], 0, 'ตอบ Finally! That saves homeowners weeks of paper delays. (บอกเล่าเรื่องการอนุมัติใบอนุญาตออนไลน์เร็วขึ้นใน 48 ชม. ตอบรับอย่างดีใจ)'),
    p2(24, 'l24-p2-22', 'us_m2', 'uk_f2', 'Where did the millwork foreman store the custom brushed-nickel drawer pulls?', ['In the labeled cardboard tray next to the finishing booth.', 'Because the hotel architect changed the hardware finish.', 'Every piece arrives wrapped in protective foam.'], 0, 'ตอบ In the labeled cardboard tray next to the finishing booth. (ถามที่เก็บมือจับลิ้นชัก Where ตอบในถาดกระดาษติดป้ายข้างห้องพ่นสี)'),
    p2(24, 'l24-p2-23', 'au_m', 'ca_f', 'What voltage rating do those commercial heat-pump water heaters require?', ['Two hundred forty volts on a dedicated thirty-amp circuit.', 'Around eighty gallons of insulated tank capacity.', 'Yes, rebates apply to ENERGY STAR units.'], 0, 'ตอบ Two hundred forty volts on a dedicated thirty-amp circuit. (ถามสเปกแรงดันไฟฟ้า What voltage ตอบ 240 โวลต์ในวงจรแยก 30 แอมป์)'),
    p2(24, 'l24-p2-24', 'uk_f2', 'us_m', 'Can we trim half an inch off the left end of this laminated countertop?', ['Sure—scribe a masking-tape line first so the laminate doesn’t splinter.', 'It spans ninety-six inches across the cafe bar.', 'Yes, the glue cured overnight inside the clamps.'], 0, 'ตอบ Sure—scribe a masking-tape line first so the laminate doesn’t splinter. (ถามว่าตัดท็อปเคาน์เตอร์ออกครึ่งนิ้วได้ไหม ตอบได้พร้อมแนะให้ติดเทปกันลามิเนตแตก)'),
    p2(24, 'l24-p2-25', 'ca_m', 'au_f', 'Is the eco-plumbing showroom offering Saturday consultations this weekend?', ['Only by appointment, since two advisors are attending a trade expo.', 'We carry twelve low-flow toilet designs.', 'Right across from the downtown lumberyard.'], 0, 'ตอบ Only by appointment, since two advisors are attending a trade expo. (ถามบริการวันเสาร์ ตอบว่าเปิดเฉพาะลูกค้าที่นัดล่วงหน้าเพราะที่ปรึกษาไปงานแฟร์สองคน)'),

    // Set 24 Part 3 (13 Conversations: Convs 4 & 8 have 3 speakers; Convs 11-13 have Graphics)
    p3(24, 'l24-p3-1', [
      ['Man', 'us_m', 'Ms. Diaz, we’ve bolted down all sixteen solar panels on your south roof! Before we wire the wall inverter, our blueprint marks it beside your west patio gate.'],
      ['Woman', 'uk_f2', 'Wait—the west fence gets fierce direct sun from one P.M. onward! Won’t intense afternoon heat cause the inverter electronics to throttle power output?'],
      ['Man', 'us_m', 'Good observation—prolonged glare over ninety-five degrees can indeed derate efficiency. Do you have shaded wall space right inside your attached garage next to the main breaker?'],
      ['Woman', 'uk_f2', 'Yes, there’s four feet of clear drywall right by the side door! Let’s mount it inside where it stays cool year-round.'],
    ], null, [
      ['Part 3 · Topic', 'What are the speakers deciding?', ['Where to mount a residential solar power inverter', 'How many solar panels fit on the south-facing roof', 'Whether to trim trees shading the west patio gate', 'When to inspect the attached garage electrical breaker'], 0, 'ตอบ Where to mount a residential solar power inverter (กำลังตัดสินใจเลือกตำแหน่งติดตั้งเครื่องแปลงไฟอินเวอร์เตอร์)'],
      ['Part 3 · Problem', 'Why is the woman concerned about the west patio location?', ['Direct afternoon sunlight could overheat and reduce inverter output', 'Patio gate swings might strike the inverter housing', 'Neighbors complained about humming electronics near the fence', 'Running conduit outdoors requires tearing up garden tiles'], 0, 'ตอบ Direct afternoon sunlight could overheat and reduce inverter output (ผนังทิศตะวันตกโดนแดดจัดช่วงบ่ายซึ่งอาจทำให้อินเวอร์เตอร์ร้อนและลดกำลังผลิต)'],
      ['Part 3 · Decision', 'Where will the technician install the inverter instead?', ['On a clear wall inside the attached garage', 'Underneath the shaded north porch roof', 'Beside the outdoor south-facing patio gate', 'Inside an enclosed basement utility closet'], 0, 'ตอบ On a clear wall inside the attached garage (เปลี่ยนไปติดบนผนังที่ว่างในโรงรถใกล้ตู้เบรกเกอร์หลักเพื่อให้เย็นตลอดปี)'],
    ]),

    p3(24, 'l24-p3-2', [
      ['Woman', 'au_f', 'Hi Ben, I’m sourcing fixtures at your Eco-Plumbing Showroom for a client’s boutique hotel renovation. We love this wall-hung dual-flush toilet—how deep must the wall framing be for its concealed tank?'],
      ['Man', 'ca_m', 'Let’s pull the spec sheet: that slim-profile carrier requires standard five-and-a-half-inch two-by-six studs, plus a clear access panel behind the flush plate for future valve servicing.'],
      ['Woman', 'au_f', 'Oh, wait—our historic brick guestrooms only have shallow three-and-a-half-inch walls! Putting five-and-a-half-inch framing inside steals valuable bathroom floor space.'],
      ['Man', 'ca_m', 'No problem—our European compact carrier fits comfortably inside shallow three-and-a-half-inch studs! Wait—let me check warehouse stock so your plumber receives all twelve frames before tiling starts.'],
    ], null, [
      ['Part 3 · Problem', 'Why won’t the first toilet carrier model work for the client’s hotel?', ['Existing bathroom wall cavities are too shallow for its concealed tank', 'Boutique hotel rooms prohibit dual-flush wall fixtures', 'The flush plate lacks a service access panel for valve repairs', 'Standard brick walls cannot support ceramic wall-hung bowls'], 0, 'ตอบ Existing bathroom wall cavities are too shallow for its concealed tank (ผนังห้องน้ำโรงแรมเก่าลึกเพียง 3.5 นิ้ว ไม่พอสำหรับโครงถังซ่อนผนังรุ่นแรกที่ต้องลึก 5.5 นิ้ว)'],
      ['Part 3 · Detail', 'How thick are the walls in the historic guestrooms?', ['Three and a half inches', 'Five and a half inches', 'Twelve inches', 'Six inches'], 0, 'ตอบ Three and a half inches (ผนังเดิมมีความลึกเพียง 3.5 นิ้ว)'],
      ['Part 3 · Action', 'What will Ben check next?', ['Whether twelve compact carrier frames are available in warehouse stock', 'When the hotel renovation contractor finishes tiling', 'If European plumbing adapters comply with local codes', 'How much floor space the slim-profile model saves'], 0, 'ตอบ Whether twelve compact carrier frames are available in warehouse stock (จะตรวจสต็อกคลังสินค้าว่ามีโครงรุ่นบางสำหรับผนัง 3.5 นิ้วครบ 12 ชุดหรือไม่)'],
    ]),

    p3(24, 'l24-p3-3', [
      ['Man', 'uk_m', 'Elena, I just measured your new espresso bar counter at Oakwood Roasters before milling your custom white-oak cabinetry. Look at our cutout sheet for your commercial coffee machine.'],
      ['Woman', 'us_f', 'Great—we ordered the two-group Italian brewer, and it needs a three-inch drain-hose drop hole centered behind the drip tray.'],
      ['Man', 'uk_m', 'Hold on—the spec diagram your supplier emailed yesterday shows the water filter manifold sits directly underneath that spot, leaving zero vertical room for a straight drain elbow!'],
      ['Woman', 'us_f', 'Aha! Let’s shift the drain cutout four inches to the right and install a curved brass sweeping fitting—I’ll phone my equipment installer right now to verify clearance.'],
    ], null, [
      ['Part 3 · Problem', 'What installation conflict did the carpenter spot on the counter layout?', ['A water filter manifold sits directly beneath the planned drain hole', 'White-oak cabinetry cannot support the heavy commercial brewer', 'Oakwood Roasters ordered a three-group machine instead of two-group', 'The supplier forgot to send electrical outlet dimensions'], 0, 'ตอบ A water filter manifold sits directly beneath the planned drain hole (ชุดท่อกรองน้ำอยู่ตรงตำแหน่งใต้รูท่อน้ำทิ้งพอดี ทำให้ไม่มีที่พอใส่ข้อต่อท่อตรง)'],
      ['Part 3 · Proposal', 'How does Elena suggest modifying the cutout plan?', ['Moving the drain hole four inches right and using a curved fitting', 'Mounting the water filter manifold on an adjacent storage shelf', 'Cutting a larger six-inch square opening behind the drip tray', 'Switching the counter surface from white oak to stainless steel'], 0, 'ตอบ Moving the drain hole four inches right and using a curved fitting (เลื่อนเจาะรูท่อน้ำทิ้งไปทางขวา 4 นิ้วและใช้ข้อต่อทองเหลืองแบบโค้งแทน)'],
      ['Part 3 · Action', 'Who will Elena contact immediately to confirm the adjustment?', ['Her espresso equipment installer', 'The white-oak lumber supplier', 'A municipal plumbing inspector', 'The cafe’s interior architect'], 0, 'ตอบ Her espresso equipment installer (จะโทรหาช่างติดตั้งเครื่องชงกาแฟเพื่อยืนยันระยะเผื่อทันที)'],
    ]),

    p3(24, 'l24-p3-4', [
      ['Woman1', 'us_f2', 'Mr. Grant, our residential solar crew is ready to bring your utility meter online today—and Inspector Patel from City Electrical just pulled up outside!'],
      ['Man', 'au_m', 'Thanks for organizing this quickly! Wait—before we swap the utility meter, where is the main disconnect switch? I can’t inspect behind a locked side yard gate!'],
      ['Woman2', 'ca_f', 'Oops—our tenants keep that side gate padlocked for their dog! Hold on, I’ve got the spare brass key hanging right inside the kitchen pantry—let me go unlock it!'],
      ['Man', 'au_m', 'Appreciate it! Also, homeowners need clear permanent red-and-white warning plaques above both the breaker box and meter base—looks like your crew already mounted them properly.'],
      ['Woman1', 'us_f2', 'Sure did—and once Mr. Patel signs the green approval tag, the power company remotely switches on bidirectional billing within forty-eight hours.'],
    ], null, [
      ['Part 3 · Problem', 'Why could the electrical inspector not immediately view the disconnect switch?', ['A locked side yard gate blocked access to the exterior wall', 'The crew had not mounted the required warning plaques yet', 'Utility workers removed the old meter earlier that morning', 'Tenants parked a car directly in front of the breaker box'], 0, 'ตอบ A locked side yard gate blocked access to the exterior wall (ประตูรั้วด้านข้างบ้านถูกล็อกกุญแจไว้เพราะมีสุนัข)'],
      ['Part 3 · Detail', 'Who retrieves the key to the side gate?', ['The second woman', 'The first woman', 'Inspector Patel', 'A solar crew technician'], 0, 'ตอบ The second woman (ผู้หญิงคนที่สองบอกว่าจะไปหยิบกุญแจสำรองในห้องเก็บอาหารมาไขให้)'],
      ['Part 3 · Detail', 'How soon after approval will bidirectional utility billing begin?', ['Within two days', 'Immediately upon tag signing', 'After one billing month', 'Within one week'], 0, 'ตอบ Within two days (การไฟฟ้าจะเปิดระบบมิเตอร์สองทิศทางให้จากระยะไกลภายใน 48 ชั่วโมง)'],
    ]),

    p3(24, 'l24-p3-5', [
      ['Man', 'ca_m', 'Claire, an interior designer just bought thirty matte-black low-flow basin aerators from the showroom floor, leaving our front display bins empty—can Warehouse pull thirty more?'],
      ['Woman', 'uk_f', 'Let me check inventory on the tablet—oh! Our supplier delayed our matte-black restock shipment from Milan until next Wednesday! All we have upstairs are forty brushed-nickel aerators.'],
      ['Man', 'ca_m', 'Yikes—two contractors already pre-ordered twelve matte-black sets for Monday morning pickups!'],
      ['Woman', 'uk_f', 'Check our sister showroom across town—Northside Bath usually keeps twenty spares in stock. Call Manager Sam right now and arrange a van transfer before closing!'],
    ], null, [
      ['Part 3 · Problem', 'Why is the showroom temporarily short on matte-black aerators?', ['A high-volume purchase cleared display stock and a supplier order is delayed', 'Customers returned thirty defective units from a Milan batch', 'Warehouse staff misplaced twelve pre-ordered boxes upstairs', 'Designers switched Monday pickups over to brushed-nickel sets'], 0, 'ตอบ A high-volume purchase cleared display stock and a supplier order is delayed (นักออกแบบตกแต่งภายในเพิ่งเหมาซื้อไป 30 ชิ้นและของล็อตใหม่จากมิลานล่าช้าถึงพุธหน้า)'],
      ['Part 3 · Detail', 'How many pre-ordered sets are scheduled for Monday pickup?', ['Twelve', 'Thirty', 'Forty', 'Twenty'], 0, 'ตอบ Twelve (มีผู้รับเหมาก่อสร้างสั่งจองล่วงหน้าไว้ 12 ชุดสำหรับมารับเช้าวันจันทร์)'],
      ['Part 3 · Action', 'What solution does Claire propose?', ['Transferring spare units from the Northside Bath branch', 'Persuading contractors to accept brushed-nickel aerators', 'Paying expedited air-freight charges to the Milan factory', 'Pushing Monday morning pickups back to Wednesday afternoon'], 0, 'ตอบ Transferring spare units from the Northside Bath branch (โทรหาผู้จัดการ Sam ที่สาขา Northside Bath เพื่อขอโอนสต็อกสำรองมาให้ทันก่อนปิดร้าน)'],
    ]),

    p3(24, 'l24-p3-6', [
      ['Man1', 'us_m2', 'Hold on, Jordan—stop feeding those walnut door stiles through the planer! Look at those faint raised ridges running lengthwise down the grain!'],
      ['Man2', 'au_m', 'Whoa—you’re right, those ridges weren’t there on yesterday’s maple batch! Did a knot nick one of the carbide planer blades?'],
      ['Man1', 'us_m2', 'Exactly—there’s a tiny chip right in the center knife! If we mill our luxury restaurant banquettes with a chipped blade, sanding out those lines will cost six extra hours!'],
      ['Man2', 'au_m', 'Good catch! Let’s power down the breaker, flip in our fresh spare knife set from Tool Drawer Three, and test a scrap offcut before touching the walnut boards.'],
    ], null, [
      ['Part 3 · Problem', 'What defect did the first man notice on the walnut cabinet boards?', ['Narrow raised ridges running down the wood surface', 'Deep moisture warping from yesterday’s storage', 'Mismatched dark wood grain across door stiles', 'Incorrect board thickness settings on the planer'], 0, 'ตอบ Narrow raised ridges running down the wood surface (พบรอยสันนูนเป็นเส้นยาวตามแนวลายไม้)'],
      ['Part 3 · Cause', 'What caused the surface defect?', ['A chipped carbide knife inside the planer', 'Dry knots inside yesterday’s maple boards', 'Sandpaper grit left on the finishing bench', 'Overheated drive belts inside Tool Drawer Three'], 0, 'ตอบ A chipped carbide knife inside the planer (ใบมีดคาร์ไบด์ของเครื่องไสไม้บิ่นตรงกลางหนึ่งจุด)'],
      ['Part 3 · Action', 'What will the carpenters do right before resuming walnut milling?', ['Install spare blades and verify results on a scrap piece', 'Switch today’s cabinetry run back to maple wood', 'Order replacement walnut boards from the lumberyard', 'Spend six hours hand-sanding the defective boards'], 0, 'ตอบ Install spare blades and verify results on a scrap piece (เปลี่ยนใบมีดสำรองชุดใหม่จากลิ้นชัก 3 และทดลองไสกับเศษไม้ก่อนเริ่มงานจริง)'],
    ]),

    p3(24, 'l24-p3-7', [
      ['Woman', 'uk_f', 'Hi Mark, I’m reviewing your site survey for the Elm Street residential solar estimate. Everything looks straightforward—until I saw your roof photos!'],
      ['Man', 'us_m', 'Right—those cedar shakes look pretty weathered and curling near the chimney ridge! Honestly, they only have maybe three or four years of life left before leaking.'],
      ['Woman', 'uk_f', 'That’s a red flag—our solar panels last twenty-five years, so bolting aluminum rails onto aging cedar means paying twice to unbolt everything when roofers re-shingle!'],
      ['Man', 'us_m', 'Agreed. Should I call the homeowner this afternoon and recommend bundling a fresh standing-seam metal roof quote alongside our solar proposal?'],
    ], null, [
      ['Part 3 · Problem', 'What did the roof inspection photos reveal at the Elm Street house?', ['Existing cedar roofing shingles are nearing the end of their lifespan', 'Tree shadows cover most of the chimney ridge during midday', 'South-facing rafters lack proper spacing for aluminum rails', 'Chimney bricks are cracking beneath heavy snow loads'], 0, 'ตอบ Existing cedar roofing shingles are nearing the end of their lifespan (แผ่นมุงหลังคาไม้ซีดาร์เดิมเก่าและงอตัว เหลืออายุใช้งานเพียง 3–4 ปี)'],
      ['Part 3 · Reason', 'Why shouldn’t panels be installed directly onto the current roof?', ['Removing panels later to replace the roof would create extra labor costs', 'Aluminum solar rails cannot fasten onto wooden cedar shakes', 'Municipal codes forbid solar arrays near masonry chimneys', 'Panels lose power output over weathered dark wood'], 0, 'ตอบ Removing panels later to replace the roof would create extra labor costs (ต้องเสียค่าแรงรื้อแผงโซลาร์ออกแล้วติดใหม่ทั้งหมดตอนซ่อมหลังคาในอีกไม่กี่ปี)'],
      ['Part 3 · Proposal', 'What does Mark suggest offering the homeowner?', ['Combining a new metal roof quote with the solar installation estimate', 'Shortening the solar panel warranty to four years', 'Installing smaller ground-mounted panels in the backyard', 'Delaying solar installation until next summer'], 0, 'ตอบ Combining a new metal roof quote with the solar installation estimate (เสนอให้ลูกค้าทำหลังคาเมทัลชีทแบบ Standing Seam ไปพร้อมกับชุดโซลาร์เซลล์ในคราวเดียว)'],
    ]),

    p3(24, 'l24-p3-8', [
      ['Woman1', 'au_f', 'Welcome to Eco-Plumbing Showroom! Let’s review the touchless sensor faucet specs for your Mercy Hospital clinic wing remodel.'],
      ['Man', 'uk_m', 'Wait—for clinical scrub sinks, hospital infection rules require automatic thirty-second hygiene flush cycles every twelve hours so stagnant water never sits in dead-end lines.'],
      ['Woman2', 'us_f', 'Good point, Carlos—our architectural blueprint didn’t call out auto-purge valves! Does this sleek brass showroom model program automated line flushes?'],
      ['Woman1', 'au_f', 'The residential model doesn’t, though our Commercial MedLine series includes programmable twelve-hour hygiene flushes AND runs off either AC power or ten-year lithium batteries!'],
      ['Man', 'uk_m', 'Battery-backed hygiene flush checks every code box! Email both of us the MedLine submittal PDF so we can get hospital engineering approval Friday.'],
    ], null, [
      ['Part 3 · Topic', 'What building project are the speakers selecting plumbing hardware for?', ['A hospital clinic renovation', 'A residential eco-plumbing showroom', 'A boutique hotel restaurant kitchen', 'A city hall public restroom'], 0, 'ตอบ A hospital clinic renovation (กำลังเลือกสเปกก๊อกน้ำเซ็นเซอร์สำหรับงานปรับปรุงปีกคลินิกของโรงพยาบาล Mercy)'],
      ['Part 3 · Detail', 'Why does the hospital require automated twelve-hour flush cycles?', ['To prevent water from stagnating inside clinic pipes', 'To preserve battery charge across ten-year lithium cells', 'To rinse soap residue off brushed-brass scrub basins', 'To calibrate municipal water pressure every morning'], 0, 'ตอบ To prevent water from stagnating inside clinic pipes (ป้องกันไม่ให้น้ำขังค้างอยู่ในท่อตามกฎควบคุมการติดเชื้อของโรงพยาบาล)'],
      ['Part 3 · Action', 'What will the showroom consultant send before Friday?', ['Technical specification documents for the Commercial MedLine faucet', 'Battery price quotes for residential sensor faucets', 'Updated architectural floor blueprints for the clinic', 'Installation schedules for hospital plumbers'], 0, 'ตอบ Technical specification documents for the Commercial MedLine faucet (ส่งไฟล์ PDF ข้อมูลจำเพาะรุ่น Commercial MedLine ให้ทั้งคู่เพื่อขออนุมัติจากฝ่ายวิศวกรรมโรงพยาบาล)'],
    ]),

    p3(24, 'l24-p3-9', [
      ['Woman', 'ca_f', 'Hey Omar, look at the revised drawing for the Harbor Hotel’s curved reception counter. Our client’s facilities chief flagged a durability concern on the lower front kickplate.'],
      ['Man', 'us_m2', 'Let me guess—housekeeping floor scrubbers and rolling luggage carts bang straight into that bottom four-inch toe-kick every morning!'],
      ['Woman', 'ca_f', 'Bingo! Standard painted wood veneer chips within two months. They asked us to switch that lower band to brushed stainless steel or high-impact dark bronze phenolic laminate.'],
      ['Man', 'us_m2', 'Go with the dark bronze phenolic laminate—it bends seamlessly around curved lobby ribs and shrugs off wet mop water! Update CAD sheet four and send it to cutting today.'],
    ], null, [
      ['Part 3 · Problem', 'Why is the hotel concerned about the reception desk’s bottom trim?', ['Cleaning equipment and rolling luggage could chip painted wood veneer', 'Curved wooden ribs swell when exposed to lobby humidity', 'Dark bronze metal clashes with existing hotel carpet colors', 'Standard four-inch toe-kicks sit too low for floor scrubbers'], 0, 'ตอบ Cleaning equipment and rolling luggage could chip painted wood veneer (เครื่องขัดพื้นของแม่บ้านและรถเข็นกระเป๋ามักชนขอบล่างจนไม้วีเนียร์ทำสีหลุดลอกภายในสองเดือน)'],
      ['Part 3 · Detail', 'Which material does Omar recommend for the lower kickplate?', ['High-impact dark bronze phenolic laminate', 'Brushed stainless steel sheets', 'Marine-grade cedar wood veneer', 'Thick clear acrylic molding'], 0, 'ตอบ High-impact dark bronze phenolic laminate (แนะนำให้ใช้ลามิเนตฟีนอลิกสีบรอนซ์เข้มทนแรงกระแทก)'],
      ['Part 3 · Detail', 'What advantage of that chosen material does Omar mention?', ['It curves smoothly around rounded desk ribs and resists moisture', 'It costs significantly less than painted wood veneer', 'It matches brushed stainless elevator doors upstairs', 'It ships pre-cut without needing CAD sheet updates'], 0, 'ตอบ It curves smoothly around rounded desk ribs and resists moisture (ดัดโค้งรับแนวเคาน์เตอร์ได้ดีและทนน้ำจากไม้ถูพื้นได้สบาย)'],
    ]),

    p3(24, 'l24-p3-10', [
      ['Man', 'us_m', 'Hi Mrs. Kim, your new whole-home solar battery wall is fully charged! Let me walk you through the mobile app’s storm-reserve slider before I pack up my ladder.'],
      ['Woman', 'au_f', 'Wonderful—we get nasty coastal windstorms every November, so outage protection is the main reason we added battery storage.'],
      ['Man', 'us_m', 'Right now it’s set to twenty-percent reserve for daily evening cycling. Whenever weather alerts forecast high winds, tap "Storm Watch" right here—it automatically tops the battery up to one hundred percent from the grid ahead of blackouts.'],
      ['Woman', 'au_f', 'Oh, brilliant! That way we don’t accidentally enter an overnight power cut half-empty—thanks for setting up those alert notifications!'],
    ], null, [
      ['Part 3 · Topic', 'What feature of the solar battery app is the technician explaining?', ['A storm setting that keeps the battery fully charged before severe weather', 'An energy report tracking monthly grid export payments', 'A safety lock that shuts down roof panels during windstorms', 'A schedule limiting evening air-conditioning usage'], 0, 'ตอบ A storm setting that keeps the battery fully charged before severe weather (อธิบายฟีเจอร์ Storm Watch ที่ชาร์จแบตสำรองไว้เต็ม 100% ล่วงหน้าเมื่อมีพยากรณ์อากาศแปรปรวน)'],
      ['Part 3 · Detail', 'What is the battery reserve currently set to for everyday use?', ['Twenty percent', 'Fifty percent', 'Eighty percent', 'One hundred percent'], 0, 'ตอบ Twenty percent (ค่าสำรองไฟปกติตั้งไว้ที่ 20% สำหรับหมุนเวียนใช้ช่วงเย็น)'],
      ['Part 3 · Detail', 'Why did Mrs. Kim decide to purchase a home battery system?', ['To keep household power running during coastal windstorm outages', 'To qualify for municipal greywater plumbing rebates', 'To avoid paying ladder maintenance fees next November', 'To disconnect her home permanently from city electrical lines'], 0, 'ตอบ To keep household power running during coastal windstorm outages (เหตุผลหลักที่ซื้อแบตสำรองเพราะแถบชายฝั่งมีพายุลมแรงและไฟดับบ่อยในเดือนพฤศจิกายน)'],
    ]),

    p3(24, 'l24-p3-11', [
      ['Man', 'au_m', 'Mrs. Rivera, I finished measuring your garage roof for solar! Your south-west roof captures plenty of sun, except two tall oak trees shade the upper corner every afternoon.'],
      ['Woman', 'us_f', 'We really don’t want to cut down those old oaks—we just want reliable output around six kilowatts without wasting money if part of the roof stays shaded!'],
      ['Man', 'au_m', 'Got it! Look at our Residential Solar Package Chart. Standard string inverters pull the whole panel row down whenever one tree shadow hits a corner—whereas microinverters let every panel produce independently!'],
      ['Woman', 'us_f', 'Aha—and the EcoStart package is too small at four kilowatts anyway. Let’s go with the ShadeSmart 6.4 system—looks like its monthly output stays protected even under oak shadows!'],
    ], doc('table', 'SunPeak Energy — Residential Solar Package Specs', [['Roof', 'South-West Pitch']], [
      tbl(
        ['Package Name', 'System Size', 'Inverter Type', 'Best Roof Condition'],
        [
          ['EcoStart 4.0', '4.0 kW', 'Central String', 'Full Sun Only (No Shade)'],
          ['ValueLine 6.2', '6.2 kW', 'Central String', 'Unshaded Wide Roof'],
          ['ShadeSmart 6.4', '6.4 kW', 'Panel Microinverters', 'Partial Tree / Chimney Shade'],
          ['EstateMax 9.6', '9.6 kW', 'Dual String + Battery', 'Large Unshaded Estate'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which solar package will Mrs. Rivera purchase?', ['ShadeSmart 6.4', 'EcoStart 4.0', 'ValueLine 6.2', 'EstateMax 9.6'], 0, 'ตอบ ShadeSmart 6.4 (หลังคามีเงาต้นโอ๊กบังบางส่วนและต้องการกำลังไฟราว 6 kW จึงเลือก ShadeSmart 6.4 ที่ใช้ Microinverters แยกอิสระต่อแผง)'],
      ['Part 3 · Graphic', 'Why is ValueLine 6.2 unsuitable for this house?', ['Its central string inverter loses output when part of the roof is shaded', 'Its 6.2-kilowatt capacity exceeds residential utility limits', 'It requires installing a large garage backup battery', 'Oak branches block maintenance access to central strings'], 0, 'ตอบ Its central string inverter loses output when part of the roof is shaded (ValueLine 6.2 ใช้ Central String Inverter ซึ่งกำลังไฟจะตกทั้งแผงหากมีเงาไม้บังจุดใดจุดหนึ่ง)'],
      ['Part 3 · Detail', 'What does the homeowner refuse to do on her property?', ['Cut down her two oak trees', 'Install panels on the south-west roof', 'Upgrade her main breaker panel', 'Schedule afternoon site inspections'], 0, 'ตอบ Cut down her two oak trees (เจ้าของบ้านไม่อยากตัดต้นโอ๊กเก่าแก่สองต้นนั้นออก)'],
    ]),

    p3(24, 'l24-p3-12', [
      ['Woman', 'uk_f', 'Carlos, our client wants low-flow bathroom faucets for twelve condo units, and she specifically asked to qualify for the city’s twenty-five-percent water efficiency rebate.'],
      ['Man', 'ca_m', 'Let’s double-check our Eco-Plumbing Showroom Flow-Rate Guide! Notice municipal rules updated in January: only fixtures rated at one point zero gallons per minute or lower qualify for the twenty-five-percent credit!'],
      ['Woman', 'uk_f', 'Whoa, good catch—Classic Chrome runs one point five gallons, and Spa Cascade sits at one point two! Neither qualifies anymore!'],
      ['Man', 'ca_m', 'Right—and PureMist 0.5 feels a bit light for residential sinks, whereas AeroDrop 1.0 hits the exact city threshold while keeping full rinsing comfort. Order twelve AeroDrop sets for Tuesday delivery!'],
    ], doc('list', 'EcoFlow Showroom — Basin Faucet Flow-Rate & Rebate Guide', null, [
      lst([
        'Classic Chrome · 1.5 GPM · Standard Aerator · No Municipal Rebate',
        'Spa Cascade · 1.2 GPM · Wide Ribbon Spout · No Municipal Rebate (Pre-Jan Rule)',
        'AeroDrop 1.0 · 1.0 GPM · Air-Infused Stream · Qualifies for 25% City Rebate',
        'PureMist 0.5 · 0.5 GPM · Ultra-Fine Commercial Spray · Qualifies for 25% City Rebate',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which faucet model will the speakers order?', ['AeroDrop 1.0', 'Classic Chrome', 'Spa Cascade', 'PureMist 0.5'], 0, 'ตอบ AeroDrop 1.0 (เทศบาลกำหนดเกณฑ์ใหม่ไม่เกิน 1.0 GPM เพื่อรับเงินคืน 25% และ AeroDrop 1.0 ยังคงแรงดันล้างมือสบายกว่ารุ่น 0.5 GPM)'],
      ['Part 3 · Detail', 'Why does Spa Cascade no longer qualify for the city credit?', ['Municipal efficiency rules tightened to 1.0 GPM or below in January', 'Ribbon spouts restrict air-infused stream aerators', 'Condo renovations are excluded from Spa Cascade rebates', 'Suppliers discontinued Spa Cascade cartridges in January'], 0, 'ตอบ Municipal efficiency rules tightened to 1.0 GPM or below in January (กติกาใหม่ตั้งแต่เดือนมกราคมกำหนดอัตราไหลต้องไม่เกิน 1.0 GPM)'],
      ['Part 3 · Detail', 'When will the twelve faucet sets arrive?', ['On Tuesday', 'In January', 'Next Wednesday', 'This afternoon'], 0, 'ตอบ On Tuesday (สั่งซื้อ 12 ชุดให้มาส่งวันอังคาร)'],
    ]),

    p3(24, 'l24-p3-13', [
      ['Man', 'us_m2', 'Hi Sarah, thanks for visiting our carpentry shop to pick out wood finishes for your bakery’s new pastry counter! When is your grand opening?'],
      ['Woman', 'uk_f', 'Wait—we open in twenty-one days! So we strictly need a durable moisture-resistant finish that ships completely finished within three weeks, not four or five!'],
      ['Man', 'us_m2', 'Let’s scan our Custom Finish & Lead-Time Board. Solid Cherry Oil looks rich, though five weeks misses your opening by fourteen days—and White Lacquer runs four weeks!'],
      ['Woman', 'uk_f', 'What about Brushed Ash vs. Textured Oak Thermofoil? Remember, baristas wipe damp coffee cloths across this counter hourly!'],
      ['Man', 'us_m2', 'Then Textured Oak Thermofoil is unbeatable—heat-sealed against coffee spills and ready in just fourteen days! Let’s lock in that finish now.'],
    ], doc('box', 'CraftLine Millwork — Wood Finish & Lead-Time Board', [
      ['Shop', 'Commercial Cabinetry'],
      ['Rush Fee', 'None Under 3 Weeks'],
    ], [
      box('Available Counter Finish Specs', [
        'Solid Cherry Hand-Oil · 5-Week Lead · Warm Classic Tone (Sensitive to Moisture)',
        'Satin White Lacquer · 4-Week Lead · Crisp Modern Look (Moderate Scratch Resistance)',
        'Brushed Ash Stain · 3-Week Lead · Natural Grain (Requires Annual Waxing)',
        'Textured Oak Thermofoil · 2-Week Lead · Moisture-Sealed (Heavy Cafe Use)',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which cabinet finish do the speakers choose?', ['Textured Oak Thermofoil', 'Solid Cherry Hand-Oil', 'Satin White Lacquer', 'Brushed Ash Stain'], 0, 'ตอบ Textured Oak Thermofoil (ต้องเสร็จทันเปิดร้านใน 3 สัปดาห์และทนความชื้นจากการเช็ดผ้าเปียกทุกชั่วโมง จึงเลือก Textured Oak Thermofoil ที่ใช้เวลา 2 สัปดาห์และกันความชื้น)'],
      ['Part 3 · Detail', 'Why is Satin White Lacquer ruled out for this bakery?', ['Its four-week production time exceeds the grand opening deadline', 'Bakery staff prefer natural wood grain over modern lacquer', 'Moisture-sealed surfaces cannot match white pastry counters', 'White lacquer requires annual waxing by carpentry crews'], 0, 'ตอบ Its four-week production time exceeds the grand opening deadline (ระยะเวลาผลิต 4 สัปดาห์ไม่ทันกำหนดเปิดร้านในอีก 21 วัน)'],
      ['Part 3 · Detail', 'How long will the selected finish take to complete?', ['Two weeks', 'Three weeks', 'Four weeks', 'Five weeks'], 0, 'ตอบ Two weeks (ใช้เวลาผลิตเพียง 2 สัปดาห์หรือ 14 วัน)'],
    ]),

    // Set 24 Part 4 (10 Talks: Talks 8-10 have Graphics)
    p4(24, 'l24-p4-1', 'the following recorded customer voicemail', 'us_m',
      'Hello, this is Marcus calling from SunPeak Residential Solar regarding your rooftop panel installation scheduled for Thursday morning. Because coastal wind gusts exceeding thirty-five miles per hour are forecast along the ridge tomorrow, our safety policy pauses all two-story roof ladder work until conditions calm. We have tentatively shifted your installation slot to Saturday at eight A.M. Please call our dispatch office before four P.M. today if Saturday works for your household.',
      null, [
        ['Part 4 · Reason', 'Why is Thursday’s rooftop installation being rescheduled?', ['High wind gusts create unsafe conditions for two-story roof work', 'Aluminum solar rails failed warehouse safety checks', 'Installation crews are finishing another project on the ridge', 'Municipal permits for the property have not cleared yet'], 0, 'ตอบ High wind gusts create unsafe conditions for two-story roof work (พยากรณ์คาดว่ามีลมกระโชกแรงเกิน 35 ไมล์ต่อชั่วโมง ทำให้งานบนหลังคาสองชั้นไม่ปลอดภัย)'],
        ['Part 4 · Detail', 'When is the new tentative installation appointment?', ['Saturday at 8:00 A.M.', 'Thursday at 4:00 P.M.', 'Friday morning', 'Next Tuesday'], 0, 'ตอบ Saturday at 8:00 A.M. (เลื่อนกำหนดการเบื้องต้นไปเป็นวันเสาร์เวลา 08:00 น.)'],
        ['Part 4 · Action', 'What should the homeowner do before four o’clock today?', ['Call the dispatch office to confirm the Saturday time slot', 'Clear vehicles out of the two-story garage driveway', 'Check wind speed monitors along the coastal ridge', 'Sign updated safety paperwork online'], 0, 'ตอบ Call the dispatch office to confirm the Saturday time slot (โทรแจ้งฝ่ายจัดตารางงานก่อน 16:00 น. วันนี้เพื่อยืนยันเวลาวันเสาร์)'],
      ]),

    p4(24, 'l24-p4-2', 'the following showroom seminar introduction', 'au_f',
      'Welcome, homeowners and builders, to our Saturday workshop at EcoFlow Bath & Kitchen Showroom. Over the next forty-five minutes, plumbing engineer David Chen will demonstrate how pairing dual-flush cisterns with compact backyard greywater filtration cuts household water consumption by nearly forty percent. Stick around afterward for live pressure tests at our copper-pipe wall, plus pickup packets containing municipal water-conservation rebate vouchers valid through December thirty-first.',
      null, [
        ['Part 4 · Topic', 'What is the main topic of David Chen’s workshop?', ['Reducing household water usage using dual-flush and greywater systems', 'Repairing leaking copper pipes behind showroom display walls', 'Designing luxury kitchen cabinets for compact city homes', 'Applying for solar rooftop installation rebates before December'], 0, 'ตอบ Reducing household water usage using dual-flush and greywater systems (การลดการใช้น้ำในบ้านเกือบ 40% ด้วยชักโครกประหยัดน้ำสองระบบร่วมกับเครื่องกรองน้ำสีเทา)'],
        ['Part 4 · Detail', 'How long will the demonstration last?', ['Forty-five minutes', 'Forty minutes', 'Thirty minutes', 'One hour'], 0, 'ตอบ Forty-five minutes (การสาธิตใช้เวลา 45 นาที)'],
        ['Part 4 · Detail', 'What can attendees pick up after the presentation?', ['Municipal water-conservation rebate packets', 'Free copper pipe pressure test kits', 'Samples of brushed-brass basin faucets', 'Appointment cards for backyard excavations'], 0, 'ตอบ Municipal water-conservation rebate packets (สามารถรับชุดเอกสารคูปองเงินคืนการประหยัดน้ำของเทศบาลได้หลังจบงาน)'],
      ]),

    p4(24, 'l24-p4-3', 'the following carpentry shop safety briefing', 'ca_m',
      'Hold up before turning on the table saws this morning, shop crew. Yesterday’s safety audit spotted two habits we need to correct immediately while milling custom maple reception cabinets. First, always use a wooden push-stick rather than bare fingers whenever ripping narrow strips under four inches wide. Second, empty the sawdust cyclone barrel whenever chips reach the yellow fill line—overfilled bins clog overhead ducts and slow suction across every sanding station.',
      null, [
        ['Part 4 · Audience', 'Who is listening to this briefing?', ['Carpenters working in a custom cabinetry millshop', 'Safety inspectors auditing a commercial construction site', 'Salespeople guiding clients through a wood showroom', 'Maintenance plumbers installing ventilation pipes'], 0, 'ตอบ Carpenters working in a custom cabinetry millshop (เป็นการบรีฟความปลอดภัยก่อนเปิดเลื่อยวงเดือนให้ทีมช่างไม้ทำตู้)'],
        ['Part 4 · Detail', 'When must carpenters use a wooden push-stick?', ['When cutting narrow wood strips less than four inches wide', 'Whenever cleaning sawdust out of overhead suction ducts', 'While lifting heavy maple cabinet frames onto workbenches', 'During weekly table-saw blade sharpening checks'], 0, 'ตอบ When cutting narrow wood strips less than four inches wide (ต้องใช้ไม้ดันชิ้นงานทุกครั้งที่ผ่าไม้แถบแคบกว้างไม่เกิน 4 นิ้ว)'],
        ['Part 4 · Problem', 'What happens if the dust-collector barrel fills past the yellow mark?', ['Sawdust clogs overhead pipes and reduces suction at sanders', 'Motorized table saws trip the shop electrical breaker', 'Fine maple dust ruins wet polyurethane cabinet finishes', 'Cyclone lids pop open during afternoon milling runs'], 0, 'ตอบ Sawdust clogs overhead pipes and reduces suction at sanders (ขี้เลื่อยล้นจะอุดตันท่อด้านบนและลดแรงดูดฝุ่นที่โต๊ะขัดทุกจุด)'],
      ]),

    p4(24, 'l24-p4-4', 'the following radio advertisement', 'uk_f',
      'Tired of unpredictable summer electric bills? Let Harbor Sun Energy lock in your monthly power cost with our seasonal Solar-Plus-Battery bundle! Sign up before May thirtieth and receive zero-percent financing for twenty-four months—plus free squirrel-guard mesh around every roof panel edge to protect hidden wiring. Our certified local roofers handle every city permit and utility interconnection inspection from start to finish. Visit harborsunenergy.com for a complimentary drone shade scan.',
      null, [
        ['Part 4 · Purpose', 'What is being advertised in this radio spot?', ['A residential solar-and-battery installation financing promotion', 'A drone photography service for commercial real estate', 'Summer utility bill assistance from city electric companies', 'Roof repair shingles that resist wildlife damage'], 0, 'ตอบ A residential solar-and-battery installation financing promotion (โฆษณาโปรโมชันติดตั้งโซลาร์พร้อมแบตเตอรี่ผ่อน 0% นาน 24 เดือน)'],
        ['Part 4 · Detail', 'What bonus protection is included for contracts signed by May thirtieth?', ['Protective mesh along panel edges to guard wiring from wildlife', 'Twenty-four months of complimentary home electrical repairs', 'Free replacement utility meters from local inspectors', 'Half-price roof shingle replacement before summer'], 0, 'ตอบ Protective mesh along panel edges to guard wiring from wildlife (แถมตาข่ายกันกระรอกรอบขอบแผงเพื่อป้องกันสายไฟ)'],
        ['Part 4 · Action', 'How can listeners request a free shade analysis?', ['By visiting the company’s website', 'By phoning their city electric utility', 'By stopping by the local roofing office', 'By emailing municipal permit inspectors'], 0, 'ตอบ By visiting the company’s website (เข้าเว็บไซต์ harborsunenergy.com เพื่อขอรับบริการสแกนเงาด้วยโดรนฟรี)'],
      ]),

    p4(24, 'l24-p4-5', 'the following showroom tour presentation', 'us_f2',
      'Step over to Display Wall Four, everyone, and test the lever handle on our Nordic EcoBrass basin faucet. Many cheaper showroom models conceal plastic internal valves inside shiny chrome shells—meaning mineral buildup cracks them within three years. By contrast, every fixture along this Eco-Plumbing wall features solid-machined ceramic disc cartridges backed by a lifetime drip-free guarantee. Even better, replacing a worn rubber aerator washer takes thirty seconds using any ordinary kitchen coin.',
      null, [
        ['Part 4 · Topic', 'What product quality feature is the speaker demonstrating?', ['Durable ceramic internal valves in solid brass faucets', 'Low-cost plastic faucet cartridges with replaceable shells', 'Automated touchless sensors mounted on showroom walls', 'Tools for removing heavy mineral deposits from copper pipes'], 0, 'ตอบ Durable ceramic internal valves in solid brass faucets (โชว์ความทนทานของวาล์วเซรามิกภายในก๊อกน้ำทองเหลืองที่ไม่รั่วซึมตลอดอายุการใช้งาน)'],
        ['Part 4 · Problem', 'Why do less expensive faucets often fail after a few years?', ['Plastic inner valves crack from mineral scale buildup', 'Chrome exterior coatings peel off Display Wall Four', 'Kitchen coins damage delicate rubber aerator washers', 'High water pressure loosens lever handles'], 0, 'ตอบ Plastic inner valves crack from mineral scale buildup (รุ่นราคาถูกใช้วาล์วพลาสติกภายในซึ่งมักแตกร้าวจากคราบแร่ธาตุสะสมภายในสามปี)'],
        ['Part 4 · Detail', 'How can an owner easily swap out an aerator washer?', ['By loosening it with an ordinary coin', 'By calling a certified showroom plumber', 'By replacing the entire solid-brass spout', 'By soaking the handle in mineral cleaner'], 0, 'ตอบ By loosening it with an ordinary coin (ถอดเปลี่ยนแหวนยางหัวก๊อกได้เองใน 30 วินาทีโดยใช้แค่เหรียญทั่วไป)'],
      ]),

    p4(24, 'l24-p4-6', 'the following jobsite crew huddle', 'uk_m',
      'Listen up, carpentry crew—our delivery truck carrying the sixteen custom laminated reception modules for Riverview Clinic just cleared downtown traffic and arrives at the South Loading Dock in twenty minutes. Because painters are still rolling final primer inside the West Lobby until noon, stage all wrapped oak frames temporarily inside Ground Floor Storage Room B. Do not peel off protective corner foam until floor tiles cure completely tomorrow morning.',
      null, [
        ['Part 4 · Detail', 'When is the cabinetry delivery truck expected to arrive?', ['In twenty minutes', 'At noon', 'Tomorrow morning', 'In forty-five minutes'], 0, 'ตอบ In twenty minutes (รถบรรทุกขนส่งโครงเคาน์เตอร์ต้อนรับจะมาถึงในอีก 20 นาที)'],
        ['Part 4 · Action', 'Where should workers temporarily place the wrapped oak frames?', ['Inside Ground Floor Storage Room B', 'Directly inside the West Lobby entrance', 'Along the South Loading Dock apron', 'Beside the second-floor clinic waiting room'], 0, 'ตอบ Inside Ground Floor Storage Room B (ให้นำไปวางพักไว้ชั่วคราวที่ห้องเก็บของ B ชั้นล่างเนื่องจากช่างทาสียังทาสีรองพื้นในล็อบบี้อยู่)'],
        ['Part 4 · Detail', 'Why should the crew keep protective foam corners attached today?', ['To avoid damage while lobby floor tiles finish curing', 'To help painters roll primer around wooden frames', 'To keep laminated modules dry on the loading dock', 'To label cabinet sequence numbers accurately'], 0, 'ตอบ To avoid damage while lobby floor tiles finish curing (ห้ามแกะโฟมกันกระแทกมุมจนกว่ากระเบื้องพื้นล็อบบี้จะเซ็ตตัวเรียบร้อยในเช้าวันพรุ่งนี้)'],
      ]),

    p4(24, 'l24-p4-7', 'the following recorded utility notice', 'au_m',
      'Thank you for calling GreenGrid Electric’s Solar Interconnection Desk. Once your licensed contractor passes municipal electrical inspection, do NOT switch on your rooftop solar inverter until you receive our official Permission to Operate email. Turning panels on early before we install a bidirectional smart meter causes unapproved daytime exports to register as electricity consumed—raising your bill instead of crediting it! Press three to verify your meter swap date.',
      null, [
        ['Part 4 · Purpose', 'What warning is given to new solar homeowners?', ['Wait for official utility email approval before turning on solar panels', 'Contact municipal inspectors directly before paying utility bills', 'Shut off home inverters whenever utility meter readers visit', 'Schedule battery installation prior to municipal electrical inspection'], 0, 'ตอบ Wait for official utility email approval before turning on solar panels (เตือนเจ้าของบ้านอย่าเพิ่งเปิดสวิตช์อินเวอร์เตอร์จนกว่าจะได้รับอีเมลอนุญาตเปิดใช้งานอย่างเป็นทางการ)'],
        ['Part 4 · Problem', 'What happens if panels operate before a smart meter is installed?', ['Exported solar power gets billed as household electricity usage', 'Unapproved inverters permanently trip main street breakers', 'City electrical permits expire automatically after inspection', 'Smart meters erase monthly customer billing credits'], 0, 'ตอบ Exported solar power gets billed as household electricity usage (ไฟที่ส่งออกจะถูกมิเตอร์เก่าคิดเป็นยอดไฟที่ใช้จริง ทำให้ค่าไฟแพงขึ้นแทนที่จะได้เครดิตลด)'],
        ['Part 4 · Action', 'How can callers check their scheduled meter replacement day?', ['By pressing three on the telephone keypad', 'By replying to their contractor’s invoice', 'By emailing municipal electrical inspectors', 'By staying on the line for billing agents'], 0, 'ตอบ By pressing three on the telephone keypad (กดเลข 3 เพื่อตรวจสอบวันกำหนดเปลี่ยนมิเตอร์อัจฉริยะ)'],
      ]),

    p4(24, 'l24-p4-8', 'the following operations briefing and crew schedule', 'ca_f',
      'Good morning, installation dispatchers. Take a look at this week’s Rooftop Solar Crew Schedule before trucks roll out at seven-thirty. Crew Alpha and Crew Gamma remain right on track. However, City Hall just emailed a structural permit hold on the Oakwood Drive townhouse because engineers requested an extra rafter spacing photo. Reassign Crew Bravo to our pre-approved backup site on Pine Lane today, and shift Oakwood Drive to Thursday once the permit clears.',
      doc('table', 'SunPeak Solar — Weekly Installation Crew Schedule', [['Dispatch', 'Tuesday Morning']], [
        tbl(
          ['Crew Team', 'Assigned Site', 'System Size', 'Status'],
          [
            ['Crew Alpha', '412 Maple Ridge', '6.4 kW', 'Cleared — On Track'],
            ['Crew Bravo', '88 Oakwood Drive', '5.2 kW', 'PERMIT HOLD (Rafter Photo)'],
            ['Crew Gamma', '19 Harbor View', '8.0 kW', 'Cleared — On Track'],
            ['Reserve Slot', '305 Pine Lane', '6.0 kW', 'Pre-Approved Backup'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Where will Crew Bravo work today instead of Oakwood Drive?', ['305 Pine Lane', '412 Maple Ridge', '19 Harbor View', 'City Hall Office'], 0, 'ตอบ 305 Pine Lane (Crew Bravo ติดปัญหาใบอนุญาตที่ 88 Oakwood Drive จึงถูกโยกไปทำไซต์สำรองที่ได้รับอนุมัติแล้วคือ 305 Pine Lane)'],
        ['Part 4 · Problem', 'Why was the Oakwood Drive installation placed on hold?', ['Municipal reviewers asked for an additional roof rafter photo', 'Crew Bravo’s five-point-two-kilowatt panels missed delivery', 'Heavy coastal winds prevented climbing on the townhouse roof', 'The homeowner postponed electrical wiring until Thursday'], 0, 'ตอบ Municipal reviewers asked for an additional roof rafter photo (เทศบาลสั่งชะลอใบอนุญาตเพื่อขอรูปถ่ายระยะห่างจันทันหลังคาเพิ่มเติม)'],
        ['Part 4 · Detail', 'When is Oakwood Drive now expected to take place?', ['On Thursday', 'Tomorrow morning', 'At seven-thirty today', 'Next Monday'], 0, 'ตอบ On Thursday (เลื่อนงานบ้าน Oakwood Drive ไปทำในวันพฤหัสบดีหลังจากใบอนุญาตผ่านแล้ว)'],
      ]),

    p4(24, 'l24-p4-9', 'the following showroom update and rebate poster', 'us_m2',
      'Quick five-minute huddle, EcoFlow showroom advisors—our city’s Water Authority just emailed updated rebate guidelines taking effect next Monday morning. Look at our Showroom Rebate Tier Poster by the front register: notice low-flow kitchen aerators stay unchanged, whereas the popular dual-flush toilet credit drops fifty dollars per unit because program funding shifted heavily toward outdoor rainwater tanks! Please swap in the new poster tonight so weekend shoppers get accurate quotes.',
      doc('list', 'EcoFlow Showroom — Municipal Water Rebate Tiers', null, [
        lst([
          'Kitchen Low-Flow Aerators · $25 Credit Per Fixture (Unchanged)',
          'Dual-Flush High-Efficiency Toilets · $150 Credit (Dropping to $100 Next Monday)',
          'Tankless Recirculating Pumps · $200 Credit Per Home (Unchanged)',
          'Rainwater Greywater Cisterns · $600 Credit (Increased City Priority)',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Starting next Monday, how much credit will a dual-flush toilet earn?', ['$100', '$150', '$200', '$25'], 0, 'ตอบ $100 (ประกาศระบุเครดิตเงินคืนชักโครก Dual-Flush จะลดลง $50 จากเดิม $150 เหลือ $100 ตั้งแต่วันจันทร์หน้า)'],
        ['Part 4 · Reason', 'Why is the municipal rebate on dual-flush toilets decreasing?', ['More city funding is shifting toward outdoor rainwater storage tanks', 'Almost every household already upgraded bathroom toilets', 'Tankless pump prices rose sharply across suppliers', 'City water supplies recovered after spring storms'], 0, 'ตอบ More city funding is shifting toward outdoor rainwater storage tanks (งบประมาณโครงการถูกโยกไปสนับสนุนถังเก็บน้ำฝนกลางแจ้งมากขึ้น)'],
        ['Part 4 · Action', 'What should showroom staff do before leaving tonight?', ['Put up the updated rebate poster near the register', 'Call weekend shoppers to cancel toilet orders', 'Lower retail prices on kitchen low-flow aerators', 'Move rainwater tanks into the front display window'], 0, 'ตอบ Put up the updated rebate poster near the register (เปลี่ยนโปสเตอร์รายการเงินคืนฉบับใหม่ให้เรียบร้อยคืนนี้เพื่อให้ข้อมูลลูกค้าสุดสัปดาห์ถูกต้อง)'],
      ]),

    p4(24, 'l24-p4-10', 'the following carpentry shop briefing and cut-list card', 'uk_f2',
      'Before anyone powers up the edge-bander this morning, glance at our Millwork Shop Cut-List Summary taped beside Bench Two. Three commercial clients are waiting on deliveries, and our courier van loads at two P.M. Friday. Notice the Metro Law Library shelving sits comfortably ahead of next month’s deadline, and the Dental Clinic drawers only need hinge drilling. Prioritize completing the Downtown Cafe walnut veneer bar panels first so Friday’s courier hits the road on time!',
      doc('box', 'CraftLine Carpentry — Weekly Shop Cut-List Priority', [
        ['Ship Van', 'Friday 2:00 P.M.'],
        ['Bench', 'Edge-Bander Two'],
      ], [
        box('Active Commercial Millwork Orders', [
          'Order #408 · Downtown Cafe Walnut Veneer Bar Panels -> Due Friday 2:00 P.M. (Cut & Band Today)',
          'Order #411 · Bayside Dental Clinic Drawers -> Due Next Wednesday (Hinge Drill Only)',
          'Order #415 · Metro Law Library Birch Shelving -> Due Next Month (Rough Cut Done)',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which millwork order must carpenters finish first today?', ['Order #408 (Downtown Cafe panels)', 'Order #411 (Bayside Dental drawers)', 'Order #415 (Metro Law shelving)', 'Edge-Bander Two repairs'], 0, 'ตอบ Order #408 (Downtown Cafe panels) (ต้องส่งขึ้นรถวันศุกร์เวลา 14:00 น. จึงสั่งให้เร่งทำ Order #408 แผงบาร์ไม้วอลนัทของร้านกาแฟให้เสร็จก่อน)'],
        ['Part 4 · Detail', 'What remaining step is needed on the Dental Clinic drawers?', ['Drilling holes for hinges', 'Rough-cutting birch boards', 'Applying walnut wood veneer', 'Loading them onto Friday’s van'], 0, 'ตอบ Drilling holes for hinges (ลิ้นชักคลินิกทันตกรรมเหลือเพียงเจาะรูติดบานพับเท่านั้น)'],
        ['Part 4 · Detail', 'When is the Metro Law Library order scheduled for completion?', ['Next month', 'Friday at 2:00 P.M.', 'Next Wednesday', 'Tomorrow morning'], 0, 'ตอบ Next month (ชั้นหนังสือห้องสมุดกฎหมายกำหนดส่งเดือนหน้า)'],
      ]),

    // ==================== SET 25 ====================
    p1(25, 'l25-p1-1', 'uk_m', [
      'A technician is splicing colored cables inside an open street cabinet.',
      'Crew members are repainting parking stripes along a storefront curb.',
      'Orange plastic traffic cones are stacked inside the back of a van.',
      'Two pedestrians are reading a street map near a bus shelter.',
    ], 0, 'ตอบ A technician is splicing colored cables inside an open street cabinet. (ช่างโทรคมนาคมกำลังเชื่อมสายใยแก้วนำแสงหลากสีภายในตู้ข้างถนนที่เปิดอยู่)'),
    p1(25, 'l25-p1-2', 'us_f', [
      'Banners are suspended above a tiled shopping mall atrium with potted palms.',
      'Shoppers are waiting in a long line outside a bakery kiosk.',
      'Janitors are waxing marble tiles beside a stopped escalator.',
      'Wooden display tables have been cleared after a weekend market.',
    ], 0, 'ตอบ Banners are suspended above a tiled shopping mall atrium with potted palms. (ป้ายแบนเนอร์แขวนอยู่เหนือโถงกลางศูนย์การค้าปูกระเบื้องที่มีต้นปาล์มประดับ)'),
    p1(25, 'l25-p1-3', 'ca_m', [
      'Two supervisors are pointing at live charts across dual office monitors.',
      'Agents are unplugging telephone headsets along a dark cubicle row.',
      'An engineer is tightening screws underneath a standing server rack.',
      'Boxes of printed monthly statements are stacked beside a copier.',
    ], 0, 'ตอบ Two supervisors are pointing at live charts across dual office monitors. (หัวหน้างานสองคนกำลังชี้ดูกราฟข้อมูลบนจอคอมพิวเตอร์คู่)'),
    p1(25, 'l25-p1-4', 'au_f', [
      'Utility workers are pulling orange tubing off a wheeled spool near a trench.',
      'A paver driver is smoothing fresh asphalt across a highway ramp.',
      'Metal streetlamp poles are resting horizontally on wooden blocks.',
      'Inspectors are measuring sidewalk width with a rolling wheel.',
    ], 0, 'ตอบ Utility workers are pulling orange tubing off a wheeled spool near a trench. (ทีมช่างสาธารณูปโภคกำลังดึงท่อสีส้มออกจากม้วนล้อเลื่อนใกล้แนวขุดร่องถนน)'),
    p1(25, 'l25-p1-5', 'us_m2', [
      'A store owner is locking glass entrance doors beside a mall directory sign.',
      'Customers are carrying shopping bags toward an underground garage.',
      'Security guards are raising a metal gate above a delivery alley.',
      'Display mannequins are being dressed inside a boutique window.',
    ], 0, 'ตอบ A store owner is locking glass entrance doors beside a mall directory sign. (เจ้าของร้านกำลังล็อกประตูกระจกหน้าร้านข้างป้ายไดเรกทอรีของศูนย์การค้า)'),
    p1(25, 'l25-p1-6', 'uk_f2', [
      'A billing specialist wearing a headset is typing at a dual-screen workstation.',
      'Office interns are distributing bottled water along a conference table.',
      'Two accountants are shredding outdated invoices beside a storage wall.',
      'A manager is taping shift schedules onto a glass partition.',
    ], 0, 'ตอบ A billing specialist wearing a headset is typing at a dual-screen workstation. (เจ้าหน้าที่ฝ่ายบิลสวมชุดหูฟังกำลังพิมพ์งานหน้าจอคอมพิวเตอร์สองจอ)'),

    // Set 25 Part 2 (25 Qs)
    p2(25, 'l25-p2-1', 'us_m', 'uk_f', 'Where is the shopping mall merchant association meeting being held tonight?', ['In the second-floor Community Lounge above the food court.', 'Every third Wednesday at six-thirty P.M.', 'Nearly forty boutique and cafe owners attended.'], 0, 'ตอบ In the second-floor Community Lounge above the food court. (ถามสถานที่ประชุม Where ตอบห้อง Community Lounge ชั้นสองเหนือศูนย์อาหาร)'),
    p2(25, 'l25-p2-2', 'ca_f', 'au_m', 'Who authorized the duplicate-charge billing refunds for Springfield customers?', ['Team Lead Priya approved the batch this morning.', 'About two hundred residential accounts.', 'Yes, autopay runs on the fifth of each month.'], 0, 'ตอบ Team Lead Priya approved the batch this morning. (ถามผู้อนุมัติ Who ตอบหัวหน้าทีม Priya อนุมัติเมื่อเช้า)'),
    p2(25, 'l25-p2-3', 'uk_m', 'us_f2', 'When will optical fiber service go live along Cedar Avenue?', ['Right outside the municipal library entrance.', 'Technicians expect final splice testing done by Friday afternoon.', 'Up to two gigabits symmetrical upload speed.'], 1, 'ตอบ Technicians expect final splice testing done by Friday afternoon. (ถามเวลาเปิดใช้งาน When ตอบช่างคาดว่าทดสอบการเชื่อมสายเสร็จภายในบ่ายวันศุกร์)'),
    p2(25, 'l25-p2-4', 'au_f', 'ca_m', 'Why did the call center queue jump to twelve minutes around noon?', ['Three downtown billing offices lost local internet simultaneously.', 'Mostly headset volume adjustments and training.', 'Press zero to speak with Spanish support.'], 0, 'ตอบ Three downtown billing offices lost local internet simultaneously. (ถามเหตุผลคิวสายยาว Why ตอบเพราะศูนย์รับสายในเมืองสามแห่งเน็ตล่มพร้อมกัน)'),
    p2(25, 'l25-p2-5', 'us_f', 'uk_f2', 'How many sidewalk trench permits did City Public Works approve for Zone Four?', ['Only six blocks so far, starting north of Maple Street.', 'Yes, orange conduit rolls arrived before dawn.', 'Between nine A.M. and four P.M. weekdays.'], 0, 'ตอบ Only six blocks so far, starting north of Maple Street. (ถามจำนวน How many ตอบอนุมัติมาเพียง 6 ช่วงตึกในตอนนี้)'),
    p2(25, 'l25-p2-6', 'uk_f', 'us_m2', 'Should callers update expired autopay cards through the mobile app or with a phone agent?', ['Our encrypted web portal updates billing profiles instantly.', 'Every credit card expires after three years.', 'In the downtown customer service atrium.'], 0, 'ตอบ Our encrypted web portal updates billing profiles instantly. (ถามทางเลือก A or B ตอบเลี่ยงโดยแนะนำเว็บพอร์ทัลที่อัปเดตได้ทันที)'),
    p2(25, 'l25-p2-7', 'ca_m', 'au_f', 'Haven’t the mall maintenance crew hung the spring festival banners over the atrium yet?', ['Wait—they’re waiting on a taller scissor lift until closing time.', 'Yes, matching flyers sit at the information kiosk.', 'Over twenty specialty shops joined the sale.'], 0, 'ตอบ Wait—they’re waiting on a taller scissor lift until closing time. (คำถามปฏิเสธ Haven’t... ตอบตามจริงว่ากำลังรอกระเช้าสูงหลังเวลาปิดห้าง)'),
    p2(25, 'l25-p2-8', 'us_m2', 'uk_m', 'Could you inspect the optical splice closure inside Street Cabinet Nine?', ['Sure, let me grab my handheld power meter first.', 'It carries ninety-six color-coded glass strands.', 'Yes, traffic cones block the right curb lane.'], 0, 'ตอบ Sure, let me grab my handheld power meter first. (ขอให้ช่วยตรวจจุดต่อสายไฟเบอร์ ตอบตกลงโดยขอหยิบเครื่องวัดกำลังแสงก่อน)'),
    p2(25, 'l25-p2-9', 'au_m', 'ca_f', 'Which mall retail anchor sponsors Friday’s late-night holiday shopping shuttle?', ['Westfield Department Store covers half the bus cost.', 'Every twenty minutes until eleven P.M.', 'Across from Gate Three parking deck.'], 0, 'ตอบ Westfield Department Store covers half the bus cost. (ถามผู้สนับสนุน Which anchor ตอบห้าง Westfield ออกค่าใช้จ่ายครึ่งหนึ่ง)'),
    p2(25, 'l25-p2-10', 'uk_f2', 'us_f', 'How long should billing agents wait before escalating a disputed installation fee?', ['Pass accounts over fifty dollars straight to a floor lead.', 'Usually three to five business days for bank clearing.', 'Yes, the caller verified her mailing address.'], 0, 'ตอบ Pass accounts over fifty dollars straight to a floor lead. (ถามเกณฑ์ส่งต่อเคส How long ตอบเลี่ยงอย่างเป็นธรรมชาติโดยบอกเกณฑ์ยอดเงินที่ส่งให้หัวหน้าทันที)'),
    p2(25, 'l25-p2-11', 'ca_f', 'uk_m', 'What time do delivery vans have to clear the mall’s indoor concourse?', ['Strictly before nine-thirty A.M. when retail shutters lift.', 'Near the East Freight Tunnel ramp.', 'Just bakery flour sacks and garment racks.'], 0, 'ตอบ Strictly before nine-thirty A.M. when retail shutters lift. (ถามเวลารถส่งของต้องออกจากพื้นที่ What time ตอบก่อน 09:30 น. ตรงเวลาห้างเปิด)'),
    p2(25, 'l25-p2-12', 'us_f2', 'ca_m', 'My billing workstation headset keeps cutting out whenever callers transfer.', ['Swap it for a fresh USB headset from the supervisor cabinet.', 'Around forty calls per shift on average.', 'Yes, the billing tariff sheet changed last Monday.'], 0, 'ตอบ Swap it for a fresh USB headset from the supervisor cabinet. (แจ้งปัญหาหูฟังขาดหาย ตอบแนะวิธีแก้ให้เปลี่ยนเอาชุดใหม่จากตู้หัวหน้างาน)'),
    p2(25, 'l25-p2-13', 'uk_m', 'au_m', 'Why don’t we bundle mall sidewalk-sale flyers inside every merchant’s receipt bag?', ['Great idea—customers actually keep those tucked in their bags.', 'Printing five thousand flyers cost three hundred dollars.', 'No, my jewelry booth faces the central fountain.'], 0, 'ตอบ Great idea—customers actually keep those tucked in their bags. (ข้อเสนอแนบใบปลิวในถุงสินค้า ตอบเห็นด้วยพร้อมเหตุผลสนับสนุน)'),
    p2(25, 'l25-p2-14', 'au_f', 'us_m', 'How much is the early-termination credit for business fiber migrations?', ['We waive up to two hundred fifty dollars with a prior carrier bill.', 'Twenty-four-month commercial service agreements.', 'Outside the North Industrial Park gate.'], 0, 'ตอบ We waive up to two hundred fifty dollars with a prior carrier bill. (ถามวงเงินเครดิตชดเชย How much ตอบยกเว้นให้สูงสุด $250 เมื่อแนบบิลค่ายเดิม)'),
    p2(25, 'l25-p2-15', 'ca_m', 'uk_f', 'Aren’t the fiber trenching crews digging along Birch Street this afternoon?', ['Actually, underground gas line markings pushed Birch Street to Monday.', 'About three feet below asphalt surface.', 'Yes, residential gigabit plans include a Wi-Fi router.'], 0, 'ตอบ Actually, underground gas line markings pushed Birch Street to Monday. (ถามย้ำงานขุดช่วงบ่าย ตอบแก้ไขว่าแนวท่อก๊าซทำให้เลื่อนงานถนน Birch ไปวันจันทร์)'),
    p2(25, 'l25-p2-16', 'us_m', 'ca_f', 'Would you like me to draft the merchant newsletter notice about Sunday power testing?', ['Yes, remind restaurants to shut off walk-in fryers by midnight.', 'No, I usually read the digital newsletter Tuesday.', 'Around fifty-four storefronts along Wing A.'], 0, 'ตอบ Yes, remind restaurants to shut off walk-in fryers by midnight. (เสนอช่วยร่างจดหมายข่าวร้านค้า ตอบรับพร้อมย้ำให้เตือนร้านอาหารปิดเครื่องใช้ไฟฟ้า)'),
    p2(25, 'l25-p2-17', 'uk_f', 'us_f2', 'Do you know if residential customers can split an annual fiber equipment fee into installments?', ['Sure, our billing portal offers three interest-free monthly payments.', 'Every neighborhood junction box serves thirty homes.', 'No, fiber optic cables are weatherproof.'], 0, 'ตอบ Sure, our billing portal offers three interest-free monthly payments. (ถามว่าผ่อนค่าอุปกรณ์ได้ไหม ตอบได้ผ่านพอร์ทัลบิลแบบแบ่งจ่าย 3 เดือนปลอดดอกเบี้ย)'),
    p2(25, 'l25-p2-18', 'au_m', 'uk_m', 'You checked every street-side junction label against the GIS map, didn’t you?', ['Almost—Eastgate Alley still has two faded tags I need to verify.', 'Yes, orange fiber ducts run parallel to storm drains.', 'Inside the field truck’s waterproof binder.'], 0, 'ตอบ Almost—Eastgate Alley still has two faded tags I need to verify. (Tag question ถามยืนยัน ตอบเกือบครบแล้ว เหลือป้ายที่ซอย Eastgate อีกสองจุด)'),
    p2(25, 'l25-p2-19', 'us_f2', 'ca_m', 'How often does the shopping mall association audit shared common-area fees?', ['Once every fiscal year with two elected tenant treasurers.', 'Nearly twelve thousand square feet of food court seating.', 'Mostly holiday atrium decor and evening security patrols.'], 0, 'ตอบ Once every fiscal year with two elected tenant treasurers. (ถามความถี่การตรวจบัญชีค่าส่วนกลาง How often ตอบปีละครั้งร่วมกับเหรัญญิกร้านค้าที่ได้รับเลือก)'),
    p2(25, 'l25-p2-20', 'uk_m', 'au_f', 'Whose yellow safety vest was left hanging on the fiber spool trailer?', ['Ask Marcus—he drove back to the depot early for spare couplers.', 'No, reflective vests stay mandatory near moving traffic.', 'Park the trailer behind Gate Four overnight.'], 0, 'ตอบ Ask Marcus—he drove back to the depot early for spare couplers. (ถามความเป็นเจ้าของ Whose ตอบให้ถาม Marcus ที่ขับรถกลับคลังไปก่อน)'),
    p2(25, 'l25-p2-21', 'ca_f', 'au_m', 'I heard our call center’s updated billing dashboard finally shows prorated taxes clearly.', ['Thank goodness—that saves agents three minutes per explanation!', 'Yes, monthly statements generate on the first.', 'On the fourth floor of Harbor Tower.'], 0, 'ตอบ Thank goodness—that saves agents three minutes per explanation! (บอกเล่าเรื่องหน้าจอบิลใหม่แสดงภาษีเฉลี่ยชัดเจนขึ้น ตอบรับอย่างโล่งใจ)'),
    p2(25, 'l25-p2-22', 'us_m2', 'uk_f2', 'Where did Floor Lead Devon store the blank replacement fiber router labels?', ['Inside the top gray bin behind Workstation Twelve.', 'Because two shipment boxes arrived missing serial stickers.', 'Until the afternoon contact-center shift wraps up.'], 0, 'ตอบ Inside the top gray bin behind Workstation Twelve. (ถามที่เก็บป้ายสติกเกอร์ Where ตอบในกล่องสีเทาชั้นบนหลังโต๊ะทำงาน 12)'),
    p2(25, 'l25-p2-23', 'au_f', 'us_f', 'Who should boutique owners contact about booking pop-up kiosks near the fountain?', ['Email Claire in Mall Leasing before the fifteenth.', 'Three-day weekend spots start at four hundred dollars.', 'Right across from the glass main elevator.'], 0, 'ตอบ Email Claire in Mall Leasing before the fifteenth. (ถามผู้ติดต่อจองบูธชั่วคราว Who ตอบให้ส่งอีเมลหา Claire ฝ่ายเช่าพื้นที่ห้างก่อนวันที่ 15)'),
    p2(25, 'l25-p2-24', 'uk_f2', 'ca_m', 'Did our morning billing batch email go out properly without duplicate invoices?', ['Wait—actually, two hundred Springfield accounts got billed twice!', 'Yes, PDF invoices include itemized call logs.', 'Around ten-fifteen during shift change.'], 0, 'ตอบ Wait—actually, two hundred Springfield accounts got billed twice! (ถามว่าอีเมลบิลส่งไปเรียบร้อยไหม ตอบความจริงว่ามี 200 บัญชีที่ส่งซ้ำ)'),
    p2(25, 'l25-p2-25', 'ca_m', 'us_m', 'Can our fiber crew leave the mini-excavator parked along Oak Boulevard overnight?', ['No—city code requires towing heavy machinery back to the yard by six P.M.', 'It digs roughly four hundred feet of trench daily.', 'Yes, homeowners received door-hanger notices Monday.'], 0, 'ตอบ No—city code requires towing heavy machinery back to the yard by six P.M. (ถามว่าจอดรถขุดค้างคืนริมถนนได้ไหม ตอบไม่ได้เพราะกฎหมายเทศบาลให้ลากกลับลานจอดก่อนหกโมงเย็น)'),

    // Set 25 Part 3 (13 Conversations: Convs 4 & 8 have 3 speakers; Convs 11-13 have Graphics)
    p3(25, 'l25-p3-1', [
      ['Man', 'us_m', 'Claire, my fiber trenching crew hit a snag along Fourth Street—City Water just flagged an unmapped six-inch cast-iron water main running right along our marked curb!'],
      ['Woman', 'ca_f', 'Wait—those old downtown blueprints never show secondary sprinkler mains! How close is it to our orange fiber conduit line?'],
      ['Man', 'us_m', 'Less than ten inches! If our boring machine keeps going along that curb, we risk nicking a pressurized water pipe and flooding basement storefronts!'],
      ['Woman', 'ca_f', 'Stop drilling immediately! Call Inspector Patel at Public Works to sign an emergency two-foot offset onto the wide sidewalk shoulder before noon.'],
    ], null, [
      ['Part 3 · Problem', 'Why did the man’s crew halt fiber trenching along Fourth Street?', ['Workers encountered an unmarked underground water pipe', 'The boring machine broke down near downtown storefronts', 'City Public Works revoked their morning sidewalk permit', 'Orange conduit supplies ran out at the Fourth Street curb'], 0, 'ตอบ Workers encountered an unmarked underground water pipe (เจอท่อประปาเหล็กหล่อขนาด 6 นิ้วที่ไม่ได้ระบุในแผนผังขวางแนวขุดอยู่)'],
      ['Part 3 · Detail', 'How close is the pipe to the planned fiber conduit path?', ['Less than ten inches away', 'Two feet away', 'Six inches below the sidewalk', 'Ten feet behind the storefront'], 0, 'ตอบ Less than ten inches away (ท่อประปาอยู่ห่างจากแนวสายไฟเบอร์ไม่ถึง 10 นิ้ว)'],
      ['Part 3 · Action', 'Who will the man contact to approve a route shift?', ['Inspector Patel at Public Works', 'Downtown basement storefront owners', 'The orange conduit supplier', 'The fiber boring machine operator'], 0, 'ตอบ Inspector Patel at Public Works (โทรหาผู้ตรวจการ Patel ที่กรมโยธาธิการเพื่อขออนุมัติขยับแนวขุดออกไปสองฟุตบนไหล่ทางเท้า)'],
    ]),

    p3(25, 'l25-p3-2', [
      ['Woman', 'uk_f', 'Hi Mark, as chair of the Shopping Mall Merchant Association, I’m getting frustrated emails from three North Wing shop owners about the seasonal flower carts.'],
      ['Man', 'au_m', 'Uh-oh—did those pop-up floral carts set up near the North Freight Corridor again?'],
      ['Woman', 'uk_f', 'Yes—their wheeled water buckets sit right across the service roll-up door, blocking early-morning shoe and apparel deliveries until ten A.M.!'],
      ['Man', 'au_m', 'That’s a safety hazard too! Let’s assign those floral vendors permanent spots inside the wide Central Fountain Rotunda where delivery carts never pass.'],
    ], null, [
      ['Part 3 · Problem', 'What complaint did North Wing store owners submit?', ['Pop-up flower carts are obstructing morning merchandise deliveries', 'Seasonal floral displays leak water onto boutique carpets', 'Association membership dues increased for North Wing stores', 'Central Fountain visitors crowd narrow apparel storefronts'], 0, 'ตอบ Pop-up flower carts are obstructing morning merchandise deliveries (รถเข็นดอกไม้ชั่วคราวไปตั้งขวางประตูขนส่งสินค้าจนร้านค้าส่งของตอนเช้าไม่ได้)'],
      ['Part 3 · Detail', 'Until what time are deliveries delayed by the blocked doorway?', ['10:00 A.M.', '9:30 A.M.', '8:00 A.M.', 'Noon'], 0, 'ตอบ 10:00 A.M. (ขวางประตูขนส่งจนถึงเวลา 10:00 น.)'],
      ['Part 3 · Decision', 'Where will the association relocate the flower vendors?', ['To the Central Fountain Rotunda', 'Outside the North Wing street curb', 'Inside an empty shoe boutique', 'Beside the South Freight roll-up door'], 0, 'ตอบ To the Central Fountain Rotunda (ย้ายร้านดอกไม้ไปตั้งที่ลานวงเวียนน้ำพุกลางที่กว้างและไม่มีรถเข็นส่งของผ่าน)'],
    ]),

    p3(25, 'l25-p3-3', [
      ['Woman', 'us_f2', 'Liam, our Billing Contact Center escalations spiked by forty percent this week, and almost every caller is questioning a mid-cycle prorated fiber charge!'],
      ['Man', 'uk_m', 'I noticed that pattern on QA call recordings too! When residential customers upgrade from 300-megabit to gigabit mid-month, our invoice prints two confusing partial-week lines instead of one clear breakdown.'],
      ['Woman', 'us_f2', 'Exactly—even experienced agents take four minutes deciphering the date math on screen!'],
      ['Man', 'uk_m', 'Let’s draft a plain-language calculation box for agents’ knowledge base today, and ask Billing IT to label old versus new plan dates explicitly on next month’s PDF statements.'],
    ], null, [
      ['Part 3 · Problem', 'Why are so many customers calling the Billing Contact Center this week?', ['Mid-month fiber plan upgrades generated confusing partial billing lines', 'Gigabit internet speeds dropped across residential neighborhoods', 'Customers were accidentally charged twice for PDF statements', 'Phone agents failed to record upgrade dates in the system'], 0, 'ตอบ Mid-month fiber plan upgrades generated confusing partial billing lines (ลูกค้าอัปเกรดแพ็กเกจกลางเดือนแล้วใบแจ้งหนี้พิมพ์ยอดคิดเฉลี่ยสองบรรทัดที่อ่านเข้าใจยาก)'],
      ['Part 3 · Detail', 'How long does it currently take agents to explain the calculation?', ['Four minutes', 'Forty minutes', 'Two weeks', 'Ten minutes'], 0, 'ตอบ Four minutes (พนักงานที่มีประสบการณ์ยังต้องใช้เวลาถึง 4 นาทีในการอธิบายตัวเลขคิดเฉลี่ยบนหน้าจอ)'],
      ['Part 3 · Action', 'What long-term change will the speakers request from Billing IT?', ['Clearly labeling old and new plan date ranges on PDF invoices', 'Disallowing mid-cycle fiber speed upgrades', 'Eliminating prorated charges for gigabit subscribers', 'Routing upgrade questions to technical support'], 0, 'ตอบ Clearly labeling old and new plan date ranges on PDF invoices (ขอให้ฝ่ายไอทีระบบบิลระบุช่วงวันที่ของแพ็กเกจเก่าและใหม่ให้ชัดเจนในใบแจ้งหนี้ PDF เดือนหน้า)'],
    ]),

    p3(25, 'l25-p3-4', [
      ['Man', 'ca_m', 'Good morning, Mrs. Alvarez! My splicing crew is ready to cut over the Oakwood Apartments’ main basement optical terminal onto our new gigabit trunk line.'],
      ['Woman1', 'us_f', 'Wait—I’m the property superintendent, and I strictly warned your dispatch office last week: nobody cuts power to our lobby security cameras during daytime hours!'],
      ['Woman2', 'uk_f2', 'Hold on—I checked the building’s riser panel five minutes ago! Our fiber cabinet runs off dedicated telecom battery backup, NOT the lobby security camera breaker!'],
      ['Man', 'ca_m', 'That’s right—camera feeds stay live the whole time, and tenants only lose internet for roughly twelve minutes while we fusion-splice the main tray!'],
      ['Woman1', 'us_f', 'Oh, thank goodness! As long as the lobby cameras stay online, follow me to Basement Room B and I’ll unlock the steel cage.'],
    ], null, [
      ['Part 3 · Problem', 'Why does the apartment superintendent initially hesitate to allow the fiber work?', ['She worried lobby security cameras would lose power during the day', 'Dispatchers arrived without notice inside Basement Room B', 'Tenants objected to a twelve-hour daytime internet outage', 'The steel cage padlock key was misplaced last week'], 0, 'ตอบ She worried lobby security cameras would lose power during the day (กังวลว่ากล้องวงจรปิดตรงล็อบบี้จะดับระหว่างช่างตัดต่อสายตอนกลางวัน)'],
      ['Part 3 · Detail', 'Who confirms that the security cameras run on a separate circuit?', ['The second woman', 'The apartment superintendent', 'The splicing crew leader', 'A dispatch supervisor'], 0, 'ตอบ The second woman (ผู้หญิงคนที่สองเพิ่งไปตรวจตู้แผงไฟเมื่อ 5 นาทีก่อนและยืนยันว่าตู้ไฟเบอร์ใช้แบตเตอรี่แยกต่างหาก ไม่เกี่ยวกับเบรกเกอร์กล้อง)'],
      ['Part 3 · Detail', 'How long will apartment internet service be interrupted?', ['About twelve minutes', 'All afternoon', 'Five minutes', 'Two hours'], 0, 'ตอบ About twelve minutes (อินเทอร์เน็ตลูกบ้านจะสะดุดเพียงประมาณ 12 นาทีระหว่างเชื่อมสาย)'],
    ]),

    p3(25, 'l25-p3-5', [
      ['Woman', 'au_f', 'Sam, the Mall Merchant Association’s weekend Harvest Stamp Card promotion kicks off Saturday, and I just checked the print box from your bakery!'],
      ['Man', 'us_m2', 'Oh no—don’t tell me our ink stamps didn’t arrive yet! Half of our pastry shoppers ask about double stamps on Saturday morning!'],
      ['Woman', 'au_f', 'Your ink stamps look great—it’s the stamp cards themselves! The printer shipped five hundred cards missing the mall directory map on the back where shoppers claim prize vouchers!'],
      ['Man', 'us_m2', 'Yikes! Should I hold handing them out until the vendor reprints?'],
      ['Woman', 'au_f', 'No—our association desk printed peel-and-stick prize claim stickers! Swing by Booth One before nine A.M. Saturday and grab two rolls to slap onto the back of your batch.'],
    ], null, [
      ['Part 3 · Problem', 'What printing mistake affects the bakery’s promotional stamp cards?', ['The reverse-side mall prize map was left off the cards', 'Ink stamps failed to arrive before Saturday morning', 'Double-stamp bonus dates were misprinted on the front', 'Pastry discount amounts differ from other mall shops'], 0, 'ตอบ The reverse-side mall prize map was left off the cards (ด้านหลังการ์ดไม่มีแผนผังจุดแลกรางวัลของศูนย์การค้าพิมพ์ติดมาด้วย)'],
      ['Part 3 · Detail', 'What condition are the ink stamps in?', ['They are ready and look fine', 'They are missing from the print box', 'They smeared across five hundred cards', 'They remain held at Booth One'], 0, 'ตอบ They are ready and look fine (ตัวปั๊มหมึกเรียบร้อยดี ไม่มีปัญหา)'],
      ['Part 3 · Action', 'How will the bakery owner fix the cards before opening?', ['By picking up stickers from Booth One to place on the backs', 'By waiting for the print vendor to deliver corrected cards', 'By writing prize booth directions by hand on receipts', 'By canceling Saturday morning’s double-stamp offer'], 0, 'ตอบ By picking up stickers from Booth One to place on the backs (แวะไปรับสติกเกอร์ที่บูธ 1 ก่อนเก้าโมงเช้าวันเสาร์มาแปะด้านหลังการ์ด)'],
    ]),

    p3(25, 'l25-p3-6', [
      ['Man', 'uk_m', 'Nina, our third-floor billing specialists just flagged four workstations where noise-canceling USB headsets crackle nonstop whenever someone nudges the cord.'],
      ['Woman', 'ca_f', 'Four headsets failing in one row usually means chair casters kept rolling over dangling cables! Did anyone check our IT spare locker?'],
      ['Man', 'uk_m', 'I checked—only two wired spares remain on the shelf, and thirty afternoon billing agents log in at one o’clock!'],
      ['Woman', 'ca_f', 'Grab those two spares for Stations Twelve and Fourteen right away, and I’ll order ten wireless DECT headsets with under-desk hooks today so chair wheels never shred cords again.'],
    ], null, [
      ['Part 3 · Cause', 'What likely damaged the four headsets on the third floor?', ['Rolling office chair wheels pinched the hanging cords', 'Power surges in Row Three damaged USB ports', 'Afternoon billing software updates caused audio static', 'Manufacturing defects affected the latest headset batch'], 0, 'ตอบ Rolling office chair wheels pinched the hanging cords (ล้อเก้าอี้สำนักงานทับสายหูฟังที่ห้อยตกลงมาซ้ำๆ)'],
      ['Part 3 · Detail', 'How many spare wired headsets are currently in the IT locker?', ['Two', 'Four', 'Ten', 'Thirty'], 0, 'ตอบ Two (เหลือหูฟังแบบมีสายสำรองอยู่เพียง 2 ชุดเท่านั้น)'],
      ['Part 3 · Action', 'What equipment upgrade will the woman order today?', ['Wireless headsets and under-desk mounting hooks', 'Thirty additional wired USB replacement cords', 'Protective plastic floor mats for Row Three', 'Desktop speakerphones for billing specialists'], 0, 'ตอบ Wireless headsets and under-desk mounting hooks (สั่งซื้อหูฟังไร้สาย DECT พร้อมตะขอแขวนใต้โต๊ะเพื่อป้องกันล้อเก้าอี้ทับสายอีก)'],
    ]),

    p3(25, 'l25-p3-7', [
      ['Man', 'us_m2', 'Thanks for inviting FiberCore Business to your dental clinic, Dr. Park. You mentioned nightly patient imaging backups crawl over your old cable connection?'],
      ['Woman', 'au_f', 'Painfully slow! Uploading three-dimensional dental X-rays takes nearly two hours every night because our current cable line caps upload speeds at just twenty megabits!'],
      ['Man', 'us_m2', 'Aha—cable advertises fast downloads, whereas upload speeds lag badly! Our 500-megabit symmetrical optical fiber plan pushes uploads at the exact same 500-megabit pace—cutting a two-hour cloud backup down under five minutes!'],
      ['Woman', 'au_f', 'Under five minutes means my hygienists aren’t stuck waiting to lock up after six P.M.! Send me the two-year commercial service agreement today.'],
    ], null, [
      ['Part 3 · Problem', 'Why do the clinic’s nightly backups currently take almost two hours?', ['Its existing cable internet severely limits upload speeds', 'Three-dimensional X-ray machines crash after six o’clock', 'Cloud storage servers disconnect during evening backups', 'Clinic workstations share one outdated wireless router'], 0, 'ตอบ Its existing cable internet severely limits upload speeds (อินเทอร์เน็ตเคเบิลเดิมจำกัดความเร็วอัปโหลดไว้แค่ 20 เมกะบิตทำให้สำรองไฟล์ภาพเอกซเรย์ช้ามาก)'],
      ['Part 3 · Detail', 'What speed advantage does FiberCore’s business plan provide?', ['Equal 500-megabit download and upload speeds', 'Unlimited free backup cloud server space', 'Double speed exclusively after six P.M.', 'Automatic daytime software updates'], 0, 'ตอบ Equal 500-megabit download and upload speeds (แพ็กเกจไฟเบอร์ให้ความเร็วอัปโหลดและดาวน์โหลดเท่ากันที่ 500 เมกะบิต)'],
      ['Part 3 · Decision', 'What does Dr. Park ask the representative to send today?', ['A two-year business fiber contract', 'Pricing for a faster gigabit wireless router', 'Technician availability for Saturday testing', 'Sample invoices comparing cable versus fiber'], 0, 'ตอบ A two-year business fiber contract (ขอให้ส่งสัญญาบริการเชิงพาณิชย์ระยะ 2 ปีมาให้วันนี้เลย)'],
    ]),

    p3(25, 'l25-p3-8', [
      ['Woman', 'uk_f', 'Thanks for meeting near the mall food court, both of you. Our Merchant Association voted to extend Friday shopping hours until ten-thirty P.M. starting next month—especially for dining tenants!'],
      ['Man1', 'ca_m', 'Hold on—before restaurants stay open ninety minutes later, look at our building automation schedule: the main kitchen exhaust fans currently shut off automatically at nine-fifteen!'],
      ['Man2', 'us_m', 'Right—as bakery co-owner, if hood exhaust cuts off while we bake late cinnamon rolls, smoke detectors will trip and evacuate the entire concourse!'],
      ['Man1', 'ca_m', 'Easy fix on my HVAC controller! I’ll reprogram Zones Four and Five to keep kitchen exhaust and chilled makeup air running until eleven P.M. every Friday.'],
      ['Woman', 'uk_f', 'Thank you—and remind me to include that eleven P.M. cutoff inside Friday’s merchant security memo so closing managers know when fryers must power down.'],
    ], null, [
      ['Part 3 · Topic', 'What upcoming change are the speakers coordinating around?', ['Extending mall Friday night operating hours until ten-thirty', 'Installing new smoke detectors above the bakery oven', 'Reducing weekend air-conditioning usage across dining zones', 'Adding new restaurant booths to the central food court'], 0, 'ตอบ Extending mall Friday night operating hours until ten-thirty (สมาคมร้านค้าลงมติขยายเวลาเปิดบริการคืนวันศุกร์ไปจนถึง 22:30 น. เริ่มเดือนหน้า)'],
      ['Part 3 · Problem', 'What risk would occur if kitchen exhaust schedules stayed unchanged?', ['Cooking smoke could trigger mall-wide fire alarms after nine-fifteen', 'Dining tenants would pay double electricity rates after closing', 'Chilled air vents would freeze bakery cooling racks', 'Security guards would lock food court restrooms early'], 0, 'ตอบ Cooking smoke could trigger mall-wide fire alarms after nine-fifteen (พัดลมดูดควันตั้งเวลาดับอัตโนมัติตอน 21:15 น. หากอบขนมหรือทำอาหารต่อควันอาจทำให้สัญญาณไฟไหม้ดังทั้งห้าง)'],
      ['Part 3 · Action', 'Until what time will the HVAC technician set Friday kitchen exhaust fans?', ['11:00 P.M.', '10:30 P.M.', '9:15 P.M.', 'Midnight'], 0, 'ตอบ 11:00 P.M. (ตั้งโปรแกรมระบบระบายอากาศโซน 4 และ 5 ให้ทำงานไปจนถึง 23:00 น. ทุกวันศุกร์)'],
    ]),

    p3(25, 'l25-p3-9', [
      ['Man', 'au_m', 'Hey Rachel, did your Billing Contact Center queue get hit with angry late-fee calls this morning? Forty-two corporate accounts got flagged past due!'],
      ['Woman', 'us_f', 'Yes—every single caller insists they wired payment on time Monday! Wait—didn’t our regional bank switch automated clearing routing numbers over the weekend?'],
      ['Man', 'au_m', 'Aha! That explains it—those forty-two wires sat in a holding suspense ledger for two extra days during the bank’s routing cutover!'],
      ['Woman', 'us_f', 'Poor clients shouldn’t pay thirty-five-dollar late penalties for a bank migration delay! Clear all forty-two late fees immediately and send an automated apology notice before three P.M.'],
    ], null, [
      ['Part 3 · Problem', 'Why were forty-two corporate accounts wrongly charged late fees?', ['A bank routing transition delayed incoming wire transfers by two days', 'Corporate clients forgot Monday’s automated billing deadline', 'Billing agents misentered wire confirmation numbers on Monday', 'Software maintenance erased weekend payment records'], 0, 'ตอบ A bank routing transition delayed incoming wire transfers by two days (ธนาคารปรับเปลี่ยนหมายเลขเส้นทางโอนเงินช่วงสุดสัปดาห์ทำให้ยอดโอนค้างอยู่สองวัน)'],
      ['Part 3 · Detail', 'How much is the standard late penalty per account?', ['$35', '$42', '$20', '$50'], 0, 'ตอบ $35 (ค่าปรับจ่ายล่าช้าบัญชีละ $35)'],
      ['Part 3 · Action', 'What will the woman instruct staff to do before three o’clock?', ['Waive the late penalties and email an apology notice', 'Ask corporate clients to resend wire transfer receipts', 'Switch affected accounts onto manual paper invoicing', 'Contact the regional bank for manual fee refunds'], 0, 'ตอบ Waive the late penalties and email an apology notice (ให้ล้างค่าปรับทั้ง 42 บัญชีทันทีและส่งข้อความขอโทษอัตโนมัติก่อนบ่ายสามโมง)'],
    ]),

    p3(25, 'l25-p3-10', [
      ['Woman', 'ca_f', 'Hold on, Tom—before your crew sets out orange lane cones along Oak Boulevard for afternoon fiber pulling, check the bus lane rules!'],
      ['Man', 'uk_m', 'Wait—we’re only closing the outer right lane for two hours between one and three P.M. to feed conduit past the manhole!'],
      ['Woman', 'ca_f', 'City Transit runs express commuter buses in that outer lane until two P.M.—our permit strictly blocks closing the curb lane before two! If a transit inspector catches cones out at one, they’ll fine us five hundred dollars!'],
      ['Man', 'uk_m', 'Ugh, good save! Let’s have the crew prep cable reels off-street inside the side alley first, then drop road cones right at two-oh-five once the express lane opens.'],
    ], null, [
      ['Part 3 · Problem', 'Why cannot the fiber crew close the outer lane of Oak Boulevard at one P.M.?', ['Transit rules reserve that lane for express buses until two o’clock', 'Afternoon traffic cones have not been delivered to the crew yet', 'Sidewalk manhole covers require special municipal keys first', 'Oak Boulevard merchants forbid afternoon truck parking'], 0, 'ตอบ Transit rules reserve that lane for express buses until two o’clock (เลนขวาสุดสงวนไว้สำหรับรถบัสด่วนจนถึง 14:00 น. หากตั้งกรวยก่อนจะโดนปรับ $500)'],
      ['Part 3 · Meaning', 'What does the man mean when he says, "Ugh, good save"?', ['He appreciates his colleague catching a mistake that avoided a costly fine', 'He agrees to store leftover orange fiber conduit inside a depot', 'He hopes bus drivers finish their route ahead of two P.M.', 'He plans to save two hours by shortening cable pulling'], 0, 'ตอบ He appreciates his colleague catching a mistake that avoided a costly fine (ขอบคุณที่เตือนทันทำให้รอดพ้นจากค่าปรับ $500)'],
      ['Part 3 · Action', 'What will the crew do between one and two o’clock?', ['Prepare cable reels inside a nearby side alley', 'Set out orange traffic cones along the left lane', 'Wait inside the depot until express buses pass', 'Open the Oak Boulevard manhole cover early'], 0, 'ตอบ Prepare cable reels inside a nearby side alley (เตรียมม้วนสายเคเบิลไว้ในซอยด้านข้างก่อน แล้วค่อยวางกรวยปิดถนนเวลา 14:05 น.)'],
    ]),

    p3(25, 'l25-p3-11', [
      ['Man', 'us_m', 'Elena, look at our Optical Fiber Rollout Schedule before Monday’s field dispatch! Three zones still need underground trenching cleared, and one zone is aerial stringing on existing wooden poles.'],
      ['Woman', 'uk_f', 'Wait—our underground directional boring drill just went into the repair shop until next Thursday! So we need to launch Monday inside whichever district runs completely overhead on utility poles—AND already holds signed landowner clearance!'],
      ['Man', 'us_m', 'Let’s check the table: Northridge runs aerial, except its pole clearance is still pending utility sign-off! Whereas Pinehurst uses aerial poles AND cleared inspection yesterday!'],
      ['Woman', 'uk_f', 'Pinehurst it is! Dispatch Crew Two straight to Pinehurst Monday at seven-thirty A.M.'],
    ], doc('table', 'MetroFiber — Rollout District Construction Status', [['Week', 'October 14']], [
      tbl(
        ['District Zone', 'Install Method', 'Permit Clearance', 'Target Homes'],
        [
          ['Harbor West', 'Underground Boring', 'Cleared', '320 Homes'],
          ['Northridge', 'Aerial Utility Poles', 'Pending Utility Sign-Off', '280 Homes'],
          ['Pinehurst', 'Aerial Utility Poles', 'Cleared', '410 Homes'],
          ['Elmwood', 'Underground Boring', 'Pending Gas Survey', '190 Homes'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which district will Crew Two work in on Monday morning?', ['Pinehurst', 'Harbor West', 'Northridge', 'Elmwood'], 0, 'ตอบ Pinehurst (เครื่องเจาะดินเสียต้องซ่อม จึงต้องเลือกเขตที่พาดสายบนเสาไฟฟ้าและผ่านการอนุมัติแล้ว คือ Pinehurst)'],
      ['Part 3 · Graphic', 'Why is Harbor West ruled out for Monday’s dispatch?', ['Its installation method requires the underground drill currently under repair', 'Utility pole owners have not signed clearance permits yet', 'Gas line surveys must finish before boring starts', 'It connects fewer residential homes than Pinehurst'], 0, 'ตอบ Its installation method requires the underground drill currently under repair (Harbor West ใช้การเจาะใต้ดินซึ่งเครื่องเจาะกำลังซ่อมอยู่ถึงพฤหัสหน้า)'],
      ['Part 3 · Detail', 'When will Crew Two arrive at the chosen district?', ['Monday at 7:30 A.M.', 'Next Thursday', 'Monday at noon', 'Friday afternoon'], 0, 'ตอบ Monday at 7:30 A.M. (ส่งทีม Crew Two เข้าพื้นที่วันจันทร์เวลา 07:30 น.)'],
    ]),

    p3(25, 'l25-p3-12', [
      ['Man', 'ca_m', 'Welcome to the Mall Merchant Association marketing desk, Mrs. Chen! Let’s pick an autumn co-op advertising bundle for your fine jewelry boutique.'],
      ['Woman', 'au_f', 'Thanks! Last spring, printed mall flyers barely moved foot traffic—this season I really want animated video slots on those giant digital atrium screens, and I’d like to keep our monthly co-op fee under six hundred dollars.'],
      ['Man', 'ca_m', 'Let’s look down our Co-Op Marketing Package Menu. Bronze Spotlight covers only printed maps, and Silver Print skips digital screens altogether!'],
      ['Woman', 'au_f', 'And Platinum Gala tops eight hundred dollars—way above budget! So Gold Digital Atrium sits right at five hundred fifty dollars AND gives us forty daily screen plays! Sign my shop up for Gold!'],
    ], doc('list', 'Oakridge Mall — Merchant Co-Op Marketing Packages', null, [
      lst([
        'Bronze Spotlight · $220/mo · Printed Directory Map Logo Only',
        'Silver Print Plus · $380/mo · Directory Map + Food Court Table Cards (No Screens)',
        'Gold Digital Atrium · $550/mo · 40 Daily Digital Atrium Screen Plays + Newsletter',
        'Platinum Gala · $850/mo · 90 Screen Plays + Atrium Banner + Event Booth',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which advertising package does Mrs. Chen choose?', ['Gold Digital Atrium', 'Bronze Spotlight', 'Silver Print Plus', 'Platinum Gala'], 0, 'ตอบ Gold Digital Atrium (ต้องการโฆษณาบนจอดิจิทัลกลางโถงและคุมงบไม่เกิน $600 จึงเลือก Gold Digital Atrium ราคา $550/เดือน)'],
      ['Part 3 · Detail', 'Why does Mrs. Chen reject Silver Print Plus?', ['It excludes animated advertisements on the atrium digital screens', 'It costs more than her six-hundred-dollar monthly budget', 'Food court table cards conflict with fine jewelry branding', 'All Silver Print Plus slots already sold out for autumn'], 0, 'ตอบ It excludes animated advertisements on the atrium digital screens (Silver Print Plus ไม่มีสื่อโฆษณาบนจอดิจิทัลกลางโถง)'],
      ['Part 3 · Detail', 'What type of business does Mrs. Chen operate?', ['A fine jewelry store', 'A specialty bakery', 'A floral kiosk', 'An apparel boutique'], 0, 'ตอบ A fine jewelry store (ผู้ชายทักทายเรื่องแพ็กเกจโฆษณาสำหรับร้านจิวเวลรีของเธอ)'],
    ]),

    p3(25, 'l25-p3-13', [
      ['Woman', 'us_f2', 'Devon, I have a small-business restaurant owner on hold in Queue Two! Our construction truck accidentally sliced his street fiber drop line for ten hours yesterday, knocking out his card register.'],
      ['Man', 'uk_m', 'Oof, ten hours down during lunch and dinner! How much outage credit is he requesting on his monthly bill?'],
      ['Woman', 'us_f2', 'One hundred forty-five dollars to match his missed day rate plus mobile hotspot data fees. Let’s check our Billing Escalation Credit Authority Chart—my Frontline tier caps out at seventy-five dollars!'],
      ['Man', 'uk_m', 'Right—and one hundred forty-five sits safely inside Senior Team Lead authority! Transfer his caller ticket to my screen right now and I’ll apply the full credit within two minutes.'],
    ], doc('box', 'Contact Center — Outage Credit Approval Authority', [
      ['Policy', 'Verified Network Fault'],
      ['SLA', 'Same-Call Resolution'],
    ], [
      box('Credit Approval Thresholds', [
        'Frontline Billing Agent · Up to $75.00 Maximum Credit',
        'Senior Team Lead · $75.01 to $200.00 Maximum Credit',
        'Contact Center Manager · $200.01 to $500.00 Credit',
        'Regional VP Billing · Over $500.00 Requires Signed Audit Slip',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Who has the authority to approve the caller’s $145 outage credit?', ['Senior Team Lead', 'Frontline Billing Agent', 'Contact Center Manager', 'Regional VP Billing'], 0, 'ตอบ Senior Team Lead (ยอดชดเชย $145 อยู่ในช่วง $75.01–$200.00 ซึ่งเป็นอำนาจอนุมัติของ Senior Team Lead)'],
      ['Part 3 · Cause', 'Why did the restaurant lose fiber internet service yesterday?', ['A construction crew accidentally cut the street fiber line', 'An expired autopay credit card suspended the business account', 'Food court exhaust fans overheated the basement telecom rack', 'A regional bank cutover delayed monthly billing payments'], 0, 'ตอบ A construction crew accidentally cut the street fiber line (รถก่อสร้างตัดสายไฟเบอร์ริมถนนขาดโดยไม่ได้ตั้งใจทำให้เน็ตล่ม 10 ชั่วโมง)'],
      ['Part 3 · Action', 'What will the woman do immediately next?', ['Route the caller’s ticket to Devon’s workstation', 'Issue a seventy-five-dollar partial credit immediately', 'Submit a signed audit slip to the Regional VP', 'Schedule a field technician to replace the restaurant’s card reader'], 0, 'ตอบ Route the caller’s ticket to Devon’s workstation (โอนทิกเก็ตสายลูกค้าไปที่หน้าจอของ Devon เพื่ออนุมัติเครดิตเต็มจำนวน)'],
    ]),

    // Set 25 Part 4 (10 Talks: Talks 8-10 have Graphics)
    p4(25, 'l25-p4-1', 'the following recorded service announcement', 'uk_m',
      'Thank you for calling MetroFiber Network Operations. Residents and businesses along Elm Street between Third and Seventh Avenues may experience a brief fiber internet interruption tonight between one A.M. and three-thirty A.M. as technicians splice new high-capacity redundancy trunks underground. No modem reset is required—once splicing concludes, routers will reconnect automatically within two minutes. If service does not resume after four A.M., press two to reach twenty-four-hour technical support.',
      null, [
        ['Part 4 · Purpose', 'What is the main purpose of this recorded message?', ['To notify Elm Street customers of scheduled overnight fiber maintenance', 'To explain how to replace outdated residential fiber modems', 'To advertise faster gigabit internet packages for Elm Street shops', 'To warn drivers about daytime street closures along Third Avenue'], 0, 'ตอบ To notify Elm Street customers of scheduled overnight fiber maintenance (แจ้งเตือนลูกค้าย่าน Elm Street เรื่องการตัดต่อสายไฟเบอร์ช่วงกลางคืนเวลา 01:00–03:30 น.)'],
        ['Part 4 · Detail', 'When will the overnight maintenance window end?', ['At 3:30 A.M.', 'At 1:00 A.M.', 'At 4:00 A.M.', 'Within two minutes'], 0, 'ตอบ At 3:30 A.M. (ช่วงเวลาปิดปรับปรุงคือ 01:00–03:30 น.)'],
        ['Part 4 · Action', 'What should a subscriber do if internet does not return after four A.M.?', ['Press button two for round-the-clock technical support', 'Unplug their street cabinet trunk cables manually', 'Visit MetroFiber’s Third Avenue service desk', 'Wait until seven A.M. for automated router resets'], 0, 'ตอบ Press button two for round-the-clock technical support (กด 2 เพื่อติดต่อฝ่ายสนับสนุนทางเทคนิค 24 ชั่วโมงหากหลังตีสี่ยังใช้งานไม่ได้)'],
      ]),

    p4(25, 'l25-p4-2', 'the following merchant association announcement', 'us_f2',
      'Good evening, fellow Oakridge Mall shop owners, and thank you for staying after closing for our monthly Merchant Association briefing. Starting next Friday, mall management is extending weekend retail hours until nine-thirty P.M. To support staff walking to employee garages late at night, we’ve arranged two extra uniformed security patrols along the North Walkway from eight P.M. onward—at zero extra assessment fee to tenants! Please pick up updated door-hour stickers at the exit.',
      null, [
        ['Part 4 · Detail', 'Who is this announcement primarily aimed at?', ['Retail shop owners operating stores inside Oakridge Mall', 'Weekend shoppers visiting the North Walkway garage', 'Newly hired mall security officers starting Friday shifts', 'Contractors installing electric door stickers'], 0, 'ตอบ Retail shop owners operating stores inside Oakridge Mall (เป็นการประชุมชี้แจงเจ้าของร้านค้าสมาชิกสมาคมศูนย์การค้า Oakridge Mall)'],
        ['Part 4 · Detail', 'How does mall management address safety during the extended evening hours?', ['By adding two security patrols along the North Walkway after eight P.M.', 'By installing brighter parking floodlights inside employee garages', 'By moving retail store closing times back to eight-thirty P.M.', 'By hiring private shuttle vans between garages and shops'], 0, 'ตอบ By adding two security patrols along the North Walkway after eight P.M. (จัดสายตรวจ รปภ. เพิ่มอีก 2 นายตามทางเดินฝั่งเหนือตั้งแต่สองทุ่มเป็นต้นไป)'],
        ['Part 4 · Action', 'What should attendees collect before leaving the briefing?', ['Updated operating-hours window decals', 'New North Walkway garage access badges', 'Revised monthly merchant assessment invoices', 'Security patrol contact phone lists'], 0, 'ตอบ Updated operating-hours window decals (หยิบสติกเกอร์เวลาเปิด-ปิดร้านฉบับใหม่ตรงทางออก)'],
      ]),

    p4(25, 'l25-p4-3', 'the following contact center shift briefing', 'ca_f',
      'Attention morning Billing Contact Center agents—before you toggle phones to Available at eight A.M., read the red banner on your screen. An automated script misfired at five A.M. and sent duplicate May invoice emails to roughly two thousand Springfield residential fiber customers. Fortunately, NO credit cards were billed twice—only the notification email doubled! Reassure worried callers immediately, send them confirmation screenshot macro fourteen, and skip escalating unless actual bank charges appear.',
      null, [
        ['Part 4 · Problem', 'What error occurred at five o’clock this morning?', ['Two thousand customers received a duplicate billing notification email', 'Credit cards belonging to Springfield residents were charged twice', 'Automated billing software crashed prior to the eight A.M. shift', 'Telephone queues disconnected incoming residential callers'], 0, 'ตอบ Two thousand customers received a duplicate billing notification email (สคริปต์ส่งอีเมลแจ้งหนี้ซ้ำไปให้ลูกค้าย่าน Springfield ประมาณ 2,000 ราย แต่ยังไม่มีการตัดเงินซ้ำ)'],
        ['Part 4 · Detail', 'When should billing agents escalate a caller’s case to a supervisor?', ['Only if a customer was actually charged twice by the bank', 'Whenever a Springfield subscriber calls before noon', 'Every time screenshot macro fourteen fails to send', 'If a caller demands paper monthly billing statements'], 0, 'ตอบ Only if a customer was actually charged twice by the bank (ไม่ต้องส่งต่อเคส ยกเว้นกรณีที่มียอดตัดเงินซ้ำในบัญชีธนาคารจริงเท่านั้น)'],
        ['Part 4 · Detail', 'What tool should agents use to reassure callers?', ['Confirmation screenshot macro fourteen', 'A live supervisor transfer button', 'Manual invoice refund forms', 'A red phone-queue warning script'], 0, 'ตอบ Confirmation screenshot macro fourteen (ใช้ข้อความสำเร็จรูป macro 14 ส่งหลักฐานยืนยันให้ลูกค้าทันที)'],
      ]),

    p4(25, 'l25-p4-4', 'the following local radio business report', 'au_m',
      'This is David Wu with Harbor Business Radio. Good news for manufacturers along the Eastgate Industrial Corridor: regional telecom provider MetroFiber broke ground Tuesday on a twelve-million-dollar underground optical fiber ring connecting forty-eight logistics warehouses and machine shops to ten-gigabit symmetrical internet by early spring. Eastgate Business Council estimates reliable high-speed backups will slash cloud software downtime across the park and help attract two mid-size medical device plants next year.',
      null, [
        ['Part 4 · Topic', 'What infrastructure project is reported in this broadcast?', ['Installation of a high-speed underground optical fiber network in an industrial park', 'Construction of forty-eight new logistics warehouses along Eastgate', 'Relocation of two medical device factories to Harbor City', 'Launch of municipal business grants for cloud software upgrades'], 0, 'ตอบ Installation of a high-speed underground optical fiber network in an industrial park (MetroFiber เริ่มวางโครงข่ายไฟเบอร์ใยแก้วใต้ดินความเร็ว 10 กิกะบิตเชื่อมโรงงานและคลังสินค้า 48 แห่ง)'],
        ['Part 4 · Detail', 'When is the twelve-million-dollar fiber ring expected to finish?', ['By early spring', 'Next Tuesday', 'By late autumn', 'Within two years'], 0, 'ตอบ By early spring (คาดว่าจะเชื่อมต่อครบสมบูรณ์ภายในต้นฤดูใบไม้ผลิ)'],
        ['Part 4 · Detail', 'How many facilities will connect to the new fiber loop?', ['Forty-eight', 'Twelve', 'Forty', 'Ten'], 0, 'ตอบ Forty-eight (เชื่อมต่อคลังสินค้าโลจิสติกส์และโรงกลึงรวม 48 แห่ง)'],
      ]),

    p4(25, 'l25-p4-5', 'the following new-hire training talk', 'uk_f',
      'Welcome to Week Two of Billing Contact Center onboarding! Today we’re practicing how to set up three-month interest-free installment plans for customers facing sudden seasonal bills. Before quoting any monthly breakdown, ALWAYS verify two security items out loud: the account holder’s four-digit billing PIN and the last four digits of their service ZIP code. Never waive identity checks even if a caller sounds rushed—skipping verification triggers an immediate compliance audit flag.',
      null, [
        ['Part 4 · Audience', 'Who is this training talk directed toward?', ['Newly hired customer billing center agents', 'Telecom field engineers installing service lines', 'Small-business owners applying for fiber discounts', 'Internal compliance auditors reviewing phone logs'], 0, 'ตอบ Newly hired customer billing center agents (อบรมพนักงานศูนย์รับสายฝ่ายบิลที่เพิ่งเริ่มงานใหม่สัปดาห์ที่สอง)'],
        ['Part 4 · Detail', 'What must agents verify before offering a payment installment plan?', ['Two account security details spoken by the caller', 'Written consent uploaded through the web portal', 'Three consecutive months of on-time bill payments', 'Approval from a billing supervisor on shift'], 0, 'ตอบ Two account security details spoken by the caller (ต้องตรวจสอบยืนยันรหัส PIN 4 หลักและรหัสไปรษณีย์ 4 ตัวท้ายกับผู้โทรทุกครั้ง)'],
        ['Part 4 · Detail', 'What happens if an agent skips customer verification?', ['The system generates an immediate compliance audit alert', 'The customer’s installment plan incurs interest fees', 'The phone call transfers automatically to billing IT', 'Monthly billing statements switch to paper mail'], 0, 'ตอบ The system generates an immediate compliance audit alert (หากข้ามขั้นตอนยืนยันตัวตน ระบบจะขึ้นธงแจ้งเตือนการตรวจสอบทันที)'],
      ]),

    p4(25, 'l25-p4-6', 'the following public shopping mall announcement', 'us_m',
      'Good afternoon, Oakridge Mall shoppers! Stop by the West Fountain Concourse until six P.M. today for our Merchant Association’s Autumn Makers Showcase. Eighteen independent regional shops have set up pop-up tables offering hand-poured soy candles, small-batch roasted coffees, and stitched leather notebooks—plus every participating vendor offers a ten-percent discount when you show a same-day receipt from any permanent mall restaurant! Live acoustic guitar music starts near the fountain at three-thirty.',
      null, [
        ['Part 4 · Topic', 'What special event is taking place at Oakridge Mall today?', ['A temporary pop-up market featuring eighteen local independent makers', 'Grand opening celebrations for new permanent mall restaurants', 'An afternoon concert inside the second-floor lounge', 'Sidewalk clearance sales outside the parking garage'], 0, 'ตอบ A temporary pop-up market featuring eighteen local independent makers (งานออกบูธสินค้าทำมือจากผู้ประกอบการอิสระ 18 ร้านตรงลานน้ำพุตะวันตก)'],
        ['Part 4 · Action', 'How can shoppers claim a ten-percent discount at the pop-up tables?', ['By presenting a same-day receipt from a mall restaurant', 'By picking up a merchant association stamp card', 'By registering online prior to three-thirty P.M.', 'By paying with a mall rewards credit card'], 0, 'ตอบ By presenting a same-day receipt from a mall restaurant (แสดงใบเสร็จจากร้านอาหารในห้างของวันเดียวกันเพื่อรับส่วนลด 10%)'],
        ['Part 4 · Detail', 'What begins near the fountain at 3:30 P.M.?', ['A live acoustic guitar performance', 'A coffee tasting workshop', 'A merchant association raffle', 'Late-night extended store hours'], 0, 'ตอบ A live acoustic guitar performance (ดนตรีกีตาร์โปร่งแสดงสดเริ่มเวลา 15:30 น.)'],
      ]),

    p4(25, 'l25-p4-7', 'the following automated business telephone greeting', 'au_f',
      'Thank you for calling MetroFiber Business Billing Support. Did you know enrolling your commercial account in paperless autopay saves ten dollars per location every month and prevents accidental service pauses? To hear your current statement balance, press one and enter your ten-digit business account ID. To request a formal tax-exempt certificate update for municipal or nonprofit offices, press two. Otherwise, hold for the next available specialist.',
      null, [
        ['Part 4 · Detail', 'How much monthly savings does paperless autopay enrollment provide per site?', ['$10', '$20', '$15', '$5'], 0, 'ตอบ $10 (สมัครตัดเงินอัตโนมัติแบบไร้กระดาษช่วยประหยัดได้ $10 ต่อสาขาต่อเดือน)'],
        ['Part 4 · Action', 'Which button should nonprofit callers press to update tax-exempt documentation?', ['Two', 'One', 'Three', 'Zero'], 0, 'ตอบ Two (กดหมายเลข 2 เพื่อขออัปเดตเอกสารยกเว้นภาษีสำหรับหน่วยงานไม่แสวงหากำไรหรือราชการ)'],
        ['Part 4 · Detail', 'What information is required after pressing one?', ['A ten-digit business account number', 'A four-digit billing security PIN', 'A paperless autopay routing number', 'An office municipal ZIP code'], 0, 'ตอบ A ten-digit business account number (กด 1 แล้วต้องกรอกรหัสบัญชีธุรกิจ 10 หลักเพื่อฟังยอดค้างชำระ)'],
      ]),

    p4(25, 'l25-p4-8', 'the following rollout review and completion tracker', 'ca_m',
      'Let’s check Friday’s Optical Fiber Splicing Tracker across our four metro expansion zones. South Gate wrapped up ahead of schedule, and Westpark Valley stands at ninety-two percent with final customer drops wrapping tomorrow morning. Look closely at North Harbor, however—less than a third of fiber cabinets are spliced because heavy coastal rain flooded three underground vaults! Redirect Crew Four from finished South Gate straight to North Harbor with sump pumps Monday morning.',
      doc('table', 'MetroFiber — Weekly Splicing Zone Completion Tracker', [['Report', 'Friday Close']], [
        tbl(
          ['Expansion Zone', 'Cabinets Total', 'Completed', 'Completion %'],
          [
            ['South Gate', '40 Cabinets', '40 Cabinets', '100% (Done)'],
            ['Westpark Valley', '50 Cabinets', '46 Cabinets', '92%'],
            ['North Harbor', '45 Cabinets', '14 Cabinets', '31%'],
            ['Midtown Loop', '30 Cabinets', '24 Cabinets', '80%'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. How many cabinets still need splicing in Westpark Valley?', ['4 cabinets', '31 cabinets', '6 cabinets', '14 cabinets'], 0, 'ตอบ 4 cabinets (Westpark Valley มีตู้ทั้งหมด 50 ตู้ ทำเสร็จแล้ว 46 ตู้ จึงเหลืออีก 4 ตู้)'],
        ['Part 4 · Problem', 'Why has progress stalled in North Harbor?', ['Coastal rainwater flooded three underground cable vaults', 'Crew Four lacked enough optical splicing machines', 'Westpark Valley required extra technicians yesterday', 'Municipal inspectors closed downtown streets for rain'], 0, 'ตอบ Coastal rainwater flooded three underground cable vaults (ฝนตกหนักชายฝั่งทำให้น้ำท่วมบ่อพักสายใต้ดิน 3 จุดในเขต North Harbor)'],
        ['Part 4 · Action', 'Where will Crew Four be reassigned on Monday morning?', ['To North Harbor with water-pumping equipment', 'To Midtown Loop to finish remaining drops', 'To Westpark Valley for cabinet testing', 'Back to South Gate for pavement repairs'], 0, 'ตอบ To North Harbor with water-pumping equipment (ย้ายทีม Crew Four จาก South Gate ที่เสร็จแล้วไปช่วยสูบน้ำและต่อสายที่ North Harbor เช้าวันจันทร์)'],
      ]),

    p4(25, 'l25-p4-9', 'the following mall briefing and event map', 'us_f',
      'Quick operations update before Saturday’s Holiday Preview inside Oakridge Mall’s Main Atrium. Take a look at our Event Booth Directory on the clipboard. Yesterday’s mall safety walkthrough flagged that the charity gift-wrapping booth sits right at the foot of the Central Escalator, risking holiday shopping congestion as crowds step off! Move Gift Wrapping immediately into our vacant side alcove instead, leaving the escalator landing completely unobstructed.',
      doc('list', 'Oakridge Mall — Holiday Atrium Event Map', null, [
        lst([
          'Zone A · North Glass Entry -> Winter Brass Quartet Stage',
          'Zone B · Central Escalator Foot -> Charity Gift-Wrapping Booth (CONGESTION RISK — MOVE)',
          'Zone C · East Fountain Alcove -> Vacant Reserve Space (Reassigned to Gift Wrapping)',
          'Zone D · South Rotunda -> Children’s Letter Writing Mailbox',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. To which zone is the Charity Gift-Wrapping Booth moving?', ['Zone C (East Fountain Alcove)', 'Zone A (North Glass Entry)', 'Zone B (Central Escalator Foot)', 'Zone D (South Rotunda)'], 0, 'ตอบ Zone C (East Fountain Alcove) (จุดเดิมหน้าบันไดเลื่อน Zone B เสี่ยงแออัด จึงย้ายไปพื้นที่ว่างสำรองคือ Zone C บริเวณซุ้มน้ำพุตะวันออก)'],
        ['Part 4 · Reason', 'Why did safety staff require relocating the gift-wrapping table?', ['Crowds stepping off the escalator could create a bottleneck there', 'Wrapping paper blocked views of the brass quartet stage', 'East Fountain shoppers requested closer gift-wrapping access', 'Escalator repairs begin Saturday morning at Zone B'], 0, 'ตอบ Crowds stepping off the escalator could create a bottleneck there (เสี่ยงเกิดความแออัดติดขัดตรงปลายทางลงบันไดเลื่อนกลาง)'],
        ['Part 4 · Detail', 'What activity remains in Zone D?', ['A holiday mailbox for children’s letters', 'The winter brass quartet performance', 'A merchant association information desk', 'Weekend coffee sampling carts'], 0, 'ตอบ A holiday mailbox for children’s letters (Zone D ยังคงเป็นตู้จดหมายสำหรับเด็กเขียนจดหมายตามเดิม)'],
      ]),

    p4(25, 'l25-p4-10', 'the following manager briefing and KPI board', 'uk_f2',
      'Good morning, Billing Contact Center team. Let’s look closely at our Weekly KPI Shift Board after Monday’s telecom tariff adjustment. Notice First-Call Resolution held steady near eighty-eight percent and customer satisfaction actually climbed! However, our Average Handle Time jumped nearly two minutes past target because agents must scroll through three separate PDF tabs to compare legacy pricing against new fiber bundles. Starting tomorrow, IT is deploying a side-by-side comparison calculator right inside your billing screen!',
      doc('box', 'Billing Contact Center — Weekly KPI Shift Board', [
        ['Period', 'Post-Tariff Week'],
        ['Headcount', '64 Agents'],
      ], [
        box('Contact Center Performance Snapshot', [
          'First-Call Resolution · Target 85% · Actual 88% (Met)',
          'Customer Satisfaction Score · Target 4.5/5 · Actual 4.7/5 (Exceeded)',
          'Average Handle Time (AHT) · Target 4m 30s · Actual 6m 25s (1m 55s Over)',
          'Abandoned Call Rate · Target <4% · Actual 2.8% (Met)',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which contact center metric exceeded its target limit negatively?', ['Average Handle Time (AHT)', 'First-Call Resolution', 'Customer Satisfaction Score', 'Abandoned Call Rate'], 0, 'ตอบ Average Handle Time (AHT) (ตารางระบุ Average Handle Time อยู่ที่ 6 นาที 25 วินาที ซึ่งเกินเป้าหมาย 4 นาที 30 วินาทีไปเกือบ 2 นาที)'],
        ['Part 4 · Cause', 'Why have billing calls been taking noticeably longer this week?', ['Agents must switch across multiple PDF tabs to compare old and new plans', 'Sixty-four new agents are still learning basic billing software', 'Tariff updates caused widespread abandoned call disconnections', 'IT system outages locked customer satisfaction surveys'], 0, 'ตอบ Agents must switch across multiple PDF tabs to compare old and new plans (พนักงานต้องสลับเปิดแท็บ PDF สามหน้าเพื่อเทียบแพ็กเกจเก่าและใหม่ให้ลูกค้า)'],
        ['Part 4 · Detail', 'What new tool will IT roll out tomorrow?', ['An integrated side-by-side rate comparison calculator', 'Automated voice menus answering tariff inquiries', 'Additional customer satisfaction survey prompts', 'Pre-recorded PDF walkthrough links for subscribers'], 0, 'ตอบ An integrated side-by-side rate comparison calculator (ไอทีจะปล่อยเครื่องคำนวณเปรียบเทียบอัตราค่าบริการแบบเคียงคู่บนหน้าจอบิลเลยตั้งแต่พรุ่งนี้)'],
      ]),
  ];
})();
if (typeof module !== 'undefined') module.exports = { TOEIC_LISTEN_VOL5: globalThis.TOEIC_LISTEN_VOLS[5] };
