// Volume 3 of TOEIC Listening Mock Exams (Sets 11-15, 270 tracks = 500 Qs)
globalThis.TOEIC_LISTEN_VOLS = globalThis.TOEIC_LISTEN_VOLS || {};
globalThis.TOEIC_LISTEN_VOLS[3] = (() => {
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
    // ==================== SET 11 ====================
    // Themes: Commercial Banking, Corporate Audit/Tax, Payroll Software Rollout
    p1(11, 'l11-p1-1', 'us_f', [
      'A bank teller is handing a paper slip across a counter.',
      'A customer is counting coins beside an outdoor kiosk.',
      'Several tellers are locking metal cash drawers together.',
      'Glass security panels are being installed around a desk.',
    ], 0, 'ตอบ A bank teller is handing a paper slip across a counter. (พนักงานธนาคารกำลังยื่นใบเสร็จกระดาษข้ามเคาน์เตอร์ให้ลูกค้า)'),
    p1(11, 'l11-p1-2', 'uk_m', [
      'Binders have fallen onto the floor beside a conference chair.',
      'Two auditors are leaning over financial ledgers on a table.',
      'Accountants are packing cardboard archive boxes into a cart.',
      'A presenter is erasing figures from a mounted whiteboard.',
    ], 1, 'ตอบ Two auditors are leaning over financial ledgers on a table. (ผู้ตรวจสอบบัญชีสองคนกำลังก้มดูสมุดบัญชีที่กางอยู่บนโต๊ะ)'),
    p1(11, 'l11-p1-3', 'au_f', [
      'Visitors are signing deposit forms at a reception desk.',
      'A technician is repairing the lock on a vault door.',
      'Metal safe-deposit lockers line the wall behind a vacant table.',
      'Potted plants have been placed inside an open bank vault.',
    ], 2, 'ตอบ Metal safe-deposit lockers line the wall behind a vacant table. (ตู้เซฟนิรภัยโลหะเรียงรายอยู่เต็มผนังด้านหลังโต๊ะไม้ที่ไม่มีคนนั่ง)'),
    p1(11, 'l11-p1-4', 'ca_m', [
      'Workers are unplugging desktop monitors along a cubicle row.',
      'A man is carrying stacked laptops out of a glass office.',
      'Two colleagues are shaking hands near a hallway elevator.',
      'A woman is pointing at a laptop screen while a colleague writes.',
    ], 3, 'ตอบ A woman is pointing at a laptop screen while a colleague writes. (ผู้หญิงกำลังชี้ไปที่หน้าจอแล็ปท็อปขณะที่เพื่อนร่วมงานจดบันทึก)'),
    p1(11, 'l11-p1-5', 'us_m2', [
      'Several people are waiting in line beside bank cash machines.',
      'A guard is sweeping paper receipts off a tiled lobby floor.',
      'Banking brochures are being handed out near a revolving door.',
      'Customers are seated around a round marble table.',
    ], 0, 'ตอบ Several people are waiting in line beside bank cash machines. (มีหลายคนกำลังต่อแถวรอใช้งานข้างตู้กดเงินอัตโนมัติของธนาคาร)'),
    p1(11, 'l11-p1-6', 'uk_f', [
      'File folders are scattered across a narrow storage aisle.',
      'Labeled archive cartons are stacked on metal shelving units.',
      'A clerk is shredding outdated tax documents by a window.',
      'Wooden crates are being wheeled down a concrete ramp.',
    ], 1, 'ตอบ Labeled archive cartons are stacked on metal shelving units. (กล่องเอกสารที่ติดป้ายกำกับถูกจัดวางซ้อนกันบนชั้นวางโลหะอย่างเป็นระเบียบ)'),

    // Set 11 Part 2 (25 Qs)
    p2(11, 'l11-p2-1', 'us_m', 'uk_f', 'Where is the commercial lending desk located?', ['Right past the marble columns on your left.', 'Because interest rates dipped last quarter.', 'Usually between nine and four o’clock.'], 0, 'ตอบ Right past the marble columns on your left. (ถามตำแหน่งโต๊ะสินเชื่อธุรกิจ ตอบเดินเลยเสาหินอ่อนไปทางซ้ายมือ)'),
    p2(11, 'l11-p2-2', 'uk_f', 'ca_m', 'Who signed off on the revised corporate tax extension?', ['In the third-floor audit archive.', 'Our external CPA approved it this morning.', 'No, the deadline isn’t until April fifteenth.'], 1, 'ตอบ Our external CPA approved it this morning. (ถามบุคคล Who ตอบผู้สอบบัญชีรับอนุญาตภายนอกอนุมัติเมื่อเช้านี้)'),
    p2(11, 'l11-p2-3', 'au_m', 'us_f2', 'When will the new payroll software go live for factory staff?', ['Roughly two hundred hourly employees.', 'With automatic direct-deposit notifications.', 'Starting with the second pay cycle in May.'], 2, 'ตอบ Starting with the second pay cycle in May. (ถามเวลา When ตอบเริ่มใช้จริงตั้งแต่รอบจ่ายเงินเดือนรอบที่สองของเดือนพฤษภาคม)'),
    p2(11, 'l11-p2-4', 'ca_f', 'uk_m', 'Should we wire the vendor deposit in euros or U.S. dollars?', ['Their invoice specifies euros.', 'Yes, the bank transfer cleared early.', 'About fourteen thousand per shipment.'], 0, 'ตอบ Their invoice specifies euros. (คำถามทางเลือก A or B ตอบโดยอ้างอิงใบแจ้งหนี้ว่ากำหนดให้โอนเป็นสกุลยูโร)'),
    p2(11, 'l11-p2-5', 'us_m2', 'au_f', 'Why hasn’t the internal audit team received the warehouse inventory log?', ['Behind the main loading bay.', 'The logistics director is still verifying damaged-stock counts.', 'Just four binders of shipping manifests.'], 1, 'ตอบ The logistics director is still verifying damaged-stock counts. (ถามเหตุผล Why ตอบเพราะผู้อำนวยการฝ่ายโลจิสติกส์ยังตรวจนับสต็อกชำรุดไม่เสร็จ)'),
    p2(11, 'l11-p2-6', 'uk_m', 'us_f', 'Didn’t your branch manager already submit the quarterly credit report?', ['Three commercial accounts were added.', 'No, I usually park on the lower deck.', 'Actually, she asked for a two-day extension.'], 2, 'ตอบ Actually, she asked for a two-day extension. (คำถามปฏิเสธ Didn’t... ตอบความจริงว่าขอขยายเวลาส่งออกไปอีกสองวัน)'),
    p2(11, 'l11-p2-7', 'us_f', 'ca_m', 'How long does it take to clear an international commercial check?', ['Up to five business days, depending on the issuing bank.', 'At the foreign currency window downstairs.', 'Only if the signature matches our file.'], 0, 'ตอบ Up to five business days, depending on the issuing bank. (ถามระยะเวลา How long ตอบใช้เวลาสูงสุด 5 วันทำการขึ้นอยู่กับธนาคารผู้ออกเช็ค)'),
    p2(11, 'l11-p2-8', 'au_f', 'uk_m', 'Could you unlock the audit team’s temporary workroom on Floor Four?', ['Yes, the tax workshop ended at noon.', 'Reception keeps the spare access badge for that suite.', 'Four external auditors arrived yesterday.'], 1, 'ตอบ Reception keeps the spare access badge for that suite. (ขอให้เปิดห้องทำงาน ตอบเลี่ยงโดยบอกว่าเคาน์เตอร์ต้อนรับเก็บบัตรผ่านสำรองไว้)'),
    p2(11, 'l11-p2-9', 'ca_m', 'us_f2', 'Our new payroll portal isn’t calculating shift differentials accurately.', ['Every biweekly Friday morning.', 'About fifteen percent above base pay.', 'IT already opened a priority ticket for that bug.'], 2, 'ตอบ IT already opened a priority ticket for that bug. (ประโยคบอกเล่าแจ้งปัญหาซอฟต์แวร์ ตอบว่าฝ่ายไอทีเปิดใบแจ้งซ่อมด่วนไปแล้ว)'),
    p2(11, 'l11-p2-10', 'uk_f2', 'us_m', 'Which corporate banking package waives outgoing wire charges?', ['The Enterprise Treasury plan covers them completely.', 'Yes, we switched accounts in January.', 'Send the signed mandate to Suite 300.'], 0, 'ตอบ The Enterprise Treasury plan covers them completely. (ถามเลือกแพ็กเกจ Which ตอบชื่อแพ็กเกจ Enterprise Treasury)'),
    p2(11, 'l11-p2-11', 'us_m', 'au_m', 'How many employees completed the payroll portal onboarding quiz?', ['Tomorrow before payroll cutoff.', 'Everyone except the field sales reps on travel.', 'In Conference Room B upstairs.'], 1, 'ตอบ Everyone except the field sales reps on travel. (ถามจำนวน How many ตอบแบบอ้อมๆ ว่าทำครบทุกคนยกเว้นทีมขายที่เดินทางอยู่)'),
    p2(11, 'l11-p2-12', 'ca_f', 'uk_f', 'Why don’t we review the municipal tax exemptions before the auditors arrive?', ['No, the municipal office closes at three.', 'Six pages of depreciation schedules.', 'Good call—I’ll pull the file from the vault now.'], 2, 'ตอบ Good call—I’ll pull the file from the vault now. (Why don’t we เป็นการชวน/เสนอแนะ ตอบเห็นด้วยและจะไปหยิบแฟ้มมาดูเดี๋ยวนี้)'),
    p2(11, 'l11-p2-13', 'uk_m', 'us_m2', 'Where can hourly drivers view their updated pay stubs?', ['Inside the mobile app under the Earnings tab.', 'They usually finish deliveries by five.', 'Because paper checks were phased out.'], 0, 'ตอบ Inside the mobile app under the Earnings tab. (ถามสถานที่/ช่องทาง Where ตอบดูสลิปเงินเดือนได้ในแอปมือถือแท็บ Earnings)'),
    p2(11, 'l11-p2-14', 'us_f2', 'ca_m', 'Aren’t you leading Thursday’s payroll software training session?', ['Three training manuals on each desk.', 'No, Carla from HR swapped shifts with me.', 'Yes, the software vendor called twice.'], 1, 'ตอบ No, Carla from HR swapped shifts with me. (ถามว่าไม่ได้เป็นคนนำอบรมหรือ ตอบไม่ได้นำแล้วเพราะ Carla ฝ่ายบุคคลขอสลับรอบกัน)'),
    p2(11, 'l11-p2-15', 'au_m', 'uk_f', 'What time does the bank’s armored cash courier arrive on Tuesdays?', ['To replenish the drive-up tellers.', 'Usually right around seven-thirty A.M.', 'With two sealed deposit bags.'], 1, 'ตอบ Usually right around seven-thirty A.M. (ถามเวลา What time ตอบปกติมาประมาณ 07:30 น.)'),
    p2(11, 'l11-p2-16', 'us_f', 'uk_m', 'Who is handling the fixed-asset depreciation schedule this year?', ['They depreciated over seven years.', 'Check with Marcus—he took over fixed assets in June.', 'Right inside the central tax folder.'], 1, 'ตอบ Check with Marcus—he took over fixed assets in June. (ถามบุคคล Who ตอบแนะนำให้ถาม Marcus เพราะเขารับหน้าที่นี้ตั้งแต่เดือนมิถุนายน)'),
    p2(11, 'l11-p2-17', 'ca_m', 'au_f', 'I heard the regional bank branch is extending Saturday lobby hours.', ['It was deposited in the night slot.', 'Yes, it’s staying open until two P.M. now.', 'About forty small-business clients.'], 1, 'ตอบ Yes, it’s staying open until two P.M. now. (รับฟังข้อมูลบอกเล่าเรื่องขยายเวลาเปิดวันเสาร์ ตอบยืนยันว่าขยายถึงบ่ายสองโมงแล้ว)'),
    p2(11, 'l11-p2-18', 'uk_f', 'us_m', 'Did the corporate tax software import our Q3 vendor totals properly?', ['Twice a year during budget season.', 'No, a few comma errors skipped four suppliers.', 'On the accounting shared drive.'], 1, 'ตอบ No, a few comma errors skipped four suppliers. (ถามระบบนำเข้าข้อมูลเรียบร้อยไหม ตอบไม่เรียบร้อยเพราะเครื่องหมายจุลภาคผิดเลยข้ามซัพพลายเออร์ไป 4 ราย)'),
    p2(11, 'l11-p2-19', 'us_m2', 'ca_f', 'How much did the outside CPA firm charge for last year’s audit?', ['Next Monday at ten sharp.', 'For three subsidiary manufacturing plants.', 'Slightly under forty-two thousand dollars.'], 2, 'ตอบ Slightly under forty-two thousand dollars. (ถามค่าใช้จ่าย How much ตอบเกือบสี่หมื่นสองพันดอลลาร์)'),
    p2(11, 'l11-p2-20', 'au_f', 'us_f', 'Would you like a printed balance sheet or a spreadsheet link?', ['The shared spreadsheet works better for my team.', 'Yes, our fiscal year ends next month.', 'Behind the loan officer’s glass partition.'], 0, 'ตอบ The shared spreadsheet works better for my team. (ถามทางเลือก printed or link ตอบลิงก์สเปรดชีตสะดวกกับทีมมากกว่า)'),
    p2(11, 'l11-p2-21', 'uk_m', 'au_m', 'Have the commercial loan underwriters finished checking our equipment appraisals?', ['Not yet—they requested clearer photos of the CNC machines.', 'About twelve percent down payment.', 'Inside the downtown banking tower.'], 0, 'ตอบ Not yet—they requested clearer photos of the CNC machines. (ถามว่าตรวจประเมินราคาเสร็จหรือยัง ตอบยัง เพราะขอรูปถ่ายเครื่องจักรที่ชัดกว่าเดิม)'),
    p2(11, 'l11-p2-22', 'ca_f', 'us_m2', 'Can you double-check the routing number on this supplier payment?', ['Sure, read me the last four digits.', 'Yes, the supplier shipped on Monday.', 'On the third shelf near Reception.'], 0, 'ตอบ Sure, read me the last four digits. (ขอให้ช่วยเช็กเลขบัญชีธนาคาร ตอบได้สิ ช่วยอ่านเลข 4 ตัวท้ายให้ฟังหน่อย)'),
    p2(11, 'l11-p2-23', 'us_f', 'uk_f2', 'Whose signature is missing from the payroll migration sign-off sheet?', ['Operations still hasn’t returned theirs.', 'Every Friday afternoon at four.', 'No, I signed my copy yesterday.'], 0, 'ตอบ Operations still hasn’t returned theirs. (ถามลายเซ็นใครหายไป Whose ตอบฝ่ายปฏิบัติการยังไม่ส่งคืน)'),
    p2(11, 'l11-p2-24', 'au_m', 'ca_m', 'Do you know if our corporate credit cards work without travel notices now?', ['Twenty-five business travelers last month.', 'Our bank rep said chip cards still need international flags.', 'Across the street from the train terminal.'], 1, 'ตอบ Our bank rep said chip cards still need international flags. (ถามเรื่องแจ้งเดินทางล่วงหน้า ตอบตัวแทนธนาคารแจ้งว่าบัตรยังต้องตั้งสถานะเดินทางต่างประเทศอยู่)'),
    p2(11, 'l11-p2-25', 'uk_f2', 'us_m', 'The audit committee moved Tuesday’s briefing forward by thirty minutes, didn’t they?', ['To review annual tax reserves.', 'I’d better check my calendar invite right away.', 'Yes, the third floor has twelve chairs.'], 1, 'ตอบ I’d better check my calendar invite right away. (คำถามหางเสียง didn’t they? ตอบเลี่ยงอย่างเป็นธรรมชาติว่าจะรีบเปิดดูนัดหมายในปฏิทินเดี๋ยวนี้)'),

    // Set 11 Part 3 (13 Conversations: 1-10 null doc, 11-13 graphic doc)
    p3(11, 'l11-p3-1', [
      ['Woman', 'us_f', 'Hi David, thanks for dropping by the commercial lending desk. Did your logistics firm finish gathering the equipment appraisal for your expansion loan?'],
      ['Man', 'uk_m', 'Mostly—we submitted the forklift and cold-trailer valuations yesterday, though the independent appraiser still hasn’t emailed the warehouse dock-leveler report.'],
      ['Woman', 'us_f', 'Our credit committee meets Friday morning, so we’ll need that final PDF by four P.M. Thursday to keep your file on this week’s docket.'],
      ['Man', 'uk_m', 'Got it. I’ll call the appraisal office right after we wrap up and ask them to copy you directly.'],
    ], null, [
      ['Part 3 · Detail', 'What document is missing from the man’s business loan file?', ['A valuation report for warehouse dock equipment', 'Signed ownership titles for commercial forklifts', 'Three years of audited logistics tax statements', 'Insurance certificates for refrigerated trailers'], 0, 'ตอบ A valuation report for warehouse dock equipment (ผู้ชายแจ้งว่ารายงานประเมินราคา dock-leveler ของคลังสินค้ายังไม่ถูกส่งมา)'],
      ['Part 3 · Time', 'When is the deadline to submit the remaining paperwork?', ['Thursday at 4:00 P.M.', 'Friday morning', 'Yesterday afternoon', 'Monday at 9:00 A.M.'], 0, 'ตอบ Thursday at 4:00 P.M. (เจ้าหน้าที่สินเชื่อระบุว่าต้องส่ง PDF สุดท้ายภายใน 16:00 น. วันพฤหัสบดีเพื่อให้ทันประชุมคณะกรรมการวันศุกร์)'],
      ['Part 3 · Action', 'What will the logistics owner do right after the meeting?', ['Phone the appraisal firm to forward the file directly', 'Reschedule Friday’s credit committee meeting', 'Withdraw the expansion loan application', 'Deliver cold-trailer keys to the bank branch'], 0, 'ตอบ Phone the appraisal firm to forward the file directly (ผู้ชายบอกว่าจะโทรหาบริษัทประเมินและขอให้ส่งสำเนาถึงเจ้าหน้าที่โดยตรง)'],
    ]),

    p3(11, 'l11-p3-2', [
      ['Man', 'ca_m', 'Maya, did the sandbox payroll test run finish for our hourly warehouse crew?'],
      ['Woman', 'us_f2', 'It ran, but fourteen direct-deposit lines bounced back with invalid bank-code alerts.'],
      ['Man', 'ca_m', 'That’s surprising—weren’t those routing numbers imported straight from our old payroll vendor?'],
      ['Woman', 'us_f2', 'They were, yet the legacy CSV file stripped off leading zeros on regional credit union accounts. Let me run a nine-digit padding rule and re-test before lunch.'],
    ], null, [
      ['Part 3 · Problem', 'What issue occurred during the payroll software test?', ['Fourteen direct-deposit transfers returned routing errors', 'Hourly warehouse workers logged incorrect clock-in hours', 'The legacy payroll vendor failed to export tax codes', 'Regional bank servers closed before lunch cutoff'], 0, 'ตอบ Fourteen direct-deposit transfers returned routing errors (รายการโอนเงินเข้าบัญชี 14 รายการตีกลับเพราะแจ้งรหัสธนาคารไม่ถูกต้อง)'],
      ['Part 3 · Cause', 'Why did the imported bank numbers fail validation?', ['A spreadsheet export dropped leading zeros from account codes', 'Warehouse staff switched credit unions without notifying HR', 'Security firewalls blocked CSV uploads from outside vendors', 'Duplicate employee IDs overwrote direct-deposit fields'], 0, 'ตอบ A spreadsheet export dropped leading zeros from account codes (ไฟล์ CSV เดิมตัดเลขศูนย์ตัวหน้าของรหัสบัญชีสหกรณ์ออมทรัพย์ทิ้ง)'],
      ['Part 3 · Action', 'How does the woman plan to fix the test file?', ['By formatting the codes to nine digits before re-running', 'By issuing paper checks to all fourteen warehouse staff', 'By asking employees to re-enter bank details manually', 'By contacting each credit union branch by phone'], 0, 'ตอบ By formatting the codes to nine digits before re-running (ผู้หญิงจะใช้กฎเติมเลขให้ครบ 9 หลักแล้วทดสอบซ้ำก่อนเที่ยง)'],
    ]),

    p3(11, 'l11-p3-3', [
      ['Woman', 'uk_f', 'Excuse me, Mr. Foster—while auditing fourth-quarter cost of goods, I noticed an eighteen-thousand-dollar inventory write-off that lacks physical disposal receipts.'],
      ['Man', 'au_m', 'Oh, that’s from the November pipe leak in Storage Annex B. Everything damaged was photographed and logged by our insurance inspector.'],
      ['Woman', 'uk_f', 'Do you happen to have copies of those disposal certificates in the finance cabinet?'],
      ['Man', 'au_m', 'Not in Finance—Facilities Director Omar holds the signed hazardous-waste haul tickets. Come on, I’ll walk you down to his office so you can scan them today.'],
    ], null, [
      ['Part 3 · Topic', 'What are the auditor and company controller mainly discussing?', ['Supporting paperwork for an inventory loss write-off', 'Repairs needed on a leaking pipe in Storage Annex B', 'Hiring an external insurance inspector for Q4', 'Relocating finance cabinets to the facilities wing'], 0, 'ตอบ Supporting paperwork for an inventory loss write-off (กำลังคุยเรื่องเอกสารหลักฐานประกอบการตัดยอดสินค้าเสียหายไตรมาส 4 มูลค่า 18,000 ดอลลาร์)'],
      ['Part 3 · Detail', 'Where are the signed disposal records currently kept?', ['In the Facilities Director’s office', 'Inside the central finance cabinet', 'At the insurance inspector’s headquarters', 'In Storage Annex B near the loading bay'], 0, 'ตอบ In the Facilities Director’s office (ผู้ชายบอกว่าผู้อำนวยการฝ่ายอาคาร Omar เป็นผู้เก็บใบเสร็จขนย้ายของเสียไว้)'],
      ['Part 3 · Action', 'What does the controller offer to do immediately for the auditor?', ['Escort the auditor to Omar’s office to copy the tickets', 'Photograph the damaged goods in Storage Annex B', 'Adjust the fourth-quarter balance sheet totals', 'Email an insurance claim to the accounting team'], 0, 'ตอบ Escort the auditor to Omar’s office to copy the tickets (ผู้ชายบอกว่าจะพาผู้ตรวจสอบบัญชีเดินไปที่ห้องของ Omar เพื่อให้สแกนเอกสารวันนี้)'],
    ]),

    p3(11, 'l11-p3-4', [
      ['Man1', 'us_m', 'Thanks for hopping on this call, Priya and Ben. Our packaging client, CrestLine, needs to wire ninety-five thousand dollars to a machinery supplier in Munich tomorrow.'],
      ['Woman', 'ca_f', 'Wait—their commercial checking profile currently caps single outgoing international wires at fifty thousand dollars.'],
      ['Man2', 'uk_m', 'Can we issue a one-time limit override so they don’t have to split the payment across two separate transfer fees?'],
      ['Woman', 'ca_f', 'Yes, provided CrestLine’s controller signs our dual-control verification form and completes a voice callback by three P.M.'],
      ['Man1', 'us_m', 'Great—Ben, please email that verification form now while I call CrestLine’s controller to expect our security callback.'],
    ], null, [
      ['Part 3 · Problem', 'Why might CrestLine be unable to send the Munich payment in one transfer?', ['Their account has a $50,000 international wire ceiling', 'German machinery suppliers only accept domestic drafts', 'Daily currency exchange desks close before three P.M.', 'Their commercial checking account lacks sufficient funds'], 0, 'ตอบ Their account has a $50,000 international wire ceiling (บัญชีของลูกค้าจำกัดวงเงินโอนต่างประเทศต่อครั้งไว้ที่ 50,000 ดอลลาร์ แต่ต้องโอน 95,000 ดอลลาร์)'],
      ['Part 3 · Condition', 'What must CrestLine’s controller do to obtain a single-transfer exception?', ['Sign a verification form and confirm by phone callback', 'Upgrade permanently to a higher corporate checking tier', 'Split the machinery deposit across two business days', 'Visit the commercial branch lobby with two IDs'], 0, 'ตอบ Sign a verification form and confirm by phone callback (ต้องเซ็นแบบฟอร์มยืนยันการควบคุมสองชั้นและรับสายโทรกลับเพื่อยืนยันตัวตนก่อนบ่ายสามโมง)'],
      ['Part 3 · Action', 'What will Ben send to CrestLine’s controller immediately?', ['Send the verification form to the client by email', 'Complete the voice security callback himself', 'Process two separate forty-seven-thousand-dollar wires', 'Contact the machinery supplier in Munich'], 0, 'ตอบ Send the verification form to the client by email (Man1 ขอให้ Ben ส่งอีเมลแบบฟอร์มยืนยันให้ลูกค้าทันที)'],
    ]),

    p3(11, 'l11-p3-5', [
      ['Woman', 'au_f', 'Good news, Trevor—the state revenue department approved our six-month corporate tax extension for the Midwest retail subsidiary.'],
      ['Man', 'us_m2', 'That takes huge pressure off next week! Does that mean we can hold off on sending any payment until October?'],
      ['Woman', 'au_f', 'Careful—an extension gives extra time to file the return, not to pay. We still have to submit an estimated voucher covering ninety percent of liability by Wednesday.'],
      ['Man', 'us_m2', 'Right, good catch. I’ll finalize the provisional profit worksheet tonight so Treasury can schedule the electronic tax debit tomorrow morning.'],
    ], null, [
      ['Part 3 · Detail', 'What did the state revenue agency recently grant?', ['Additional time to submit the Midwest subsidiary’s tax return', 'A waiver reducing corporate tax liability by ninety percent', 'Approval to pay state taxes after October inventory counts', 'Exemption from electronic tax debit requirements'], 0, 'ตอบ Additional time to submit the Midwest subsidiary’s tax return (หน่วยงานสรรพากรของรัฐอนุมัติขยายเวลายื่นแบบภาษีเงินได้นิติบุคคล 6 เดือน)'],
      ['Part 3 · Meaning', 'What does the woman emphasize when she says, "Careful—an extension gives extra time to file the return, not to pay"?', ['The company must still remit most of the estimated tax this week', 'Midwest retail stores failed to qualify for penalty relief', 'Electronic debits take longer than mailed paper vouchers', 'Treasury cannot schedule transfers until October'], 0, 'ตอบ The company must still remit most of the estimated tax this week (เธอเตือนว่าการขอเลื่อนเวลาเป็นการเลื่อนเวลายื่นเอกสาร แต่ยังต้องชำระภาษีประมาณการ 90% ภายในวันพุธนี้)'],
      ['Part 3 · Action', 'What tax worksheet will Trevor complete tonight?', ['Complete the preliminary earnings calculation worksheet', 'Mail a paper extension voucher to state regulators', 'Ask Treasury to cancel tomorrow’s automatic debit', 'Audit fourth-quarter receipts for Midwest stores'], 0, 'ตอบ Complete the preliminary earnings calculation worksheet (ผู้ชายจะทำตารางคำนวณกำไรเบื้องต้นให้เสร็จคืนนี้เพื่อให้ฝ่ายการเงินตั้งรายการโอนพรุ่งนี้เช้า)'],
    ]),

    p3(11, 'l11-p3-6', [
      ['Woman', 'us_f', 'Carlos, two assembly-line supervisors just called saying night-shift workers’ pay previews didn’t add the holiday double-time bonus.'],
      ['Man', 'uk_m', 'Hmm, let me open the timekeeping configuration table. Look right here—someone left the Memorial Day calendar flag set to Inactive during setup.'],
      ['Woman', 'us_f', 'Can we flip that toggle on right now, or has payroll already locked for Wednesday’s bank upload?'],
      ['Man', 'uk_m', 'It doesn’t lock until five P.M. today! Once I activate the holiday rule and click Recalculate All, the correct overtime totals will refresh automatically.'],
    ], null, [
      ['Part 3 · Problem', 'Why were assembly-line workers’ holiday bonuses missing from pay previews?', ['A holiday calendar setting was left deactivated in the system', 'Supervisors forgot to approve night-shift timesheets', 'Wednesday’s bank upload locked before overtime hours synced', 'Assembly workers clocked out under regular day codes'], 0, 'ตอบ A holiday calendar setting was left deactivated in the system (ตั้งค่าวันหยุดในระบบลงเวลาถูกปล่อยเป็นสถานะไม่ใช้งาน Inactive)'],
      ['Part 3 · Time', 'When does the payroll run become locked for bank submission?', ['At 5:00 P.M. today', 'On Memorial Day morning', 'At 9:00 A.M. Wednesday', 'Right after the night shift ends'], 0, 'ตอบ At 5:00 P.M. today (ผู้ชายระบุว่าระบบยังไม่ล็อกจนกว่าจะถึง 17:00 น. วันนี้)'],
      ['Part 3 · Action', 'What will the man do to resolve the error?', ['Enable the holiday flag and refresh the payroll totals', 'Add manual bonus adjustments inside bank spreadsheets', 'Extend Wednesday’s payroll cutoff by twenty-four hours', 'Ask supervisors to resubmit timecards next week'], 0, 'ตอบ Enable the holiday flag and refresh the payroll totals (เขาจะเปิดใช้งานกฎวันหยุดและกดคำนวณยอดใหม่ทั้งหมดทันที)'],
    ]),

    p3(11, 'l11-p3-7', [
      ['Woman', 'uk_f2', 'Hello, Metro Commercial Banking Merchant Services—how can I assist your bistro today?'],
      ['Man', 'us_m', 'Hi, this is Chef Andre at Oakwood Bistro. Both of our wireless card readers froze mid-transaction during lunch rush, forcing customers to wait ten minutes!'],
      ['Woman', 'uk_f2', 'I’m very sorry about that disruption, Chef. Let me check your terminal serial logs—ah, your models didn’t pull last week’s Wi-Fi security patch.'],
      ['Man', 'us_m', 'Can you push it remotely, or do we need replacement terminals before tonight’s dinner seating?'],
      ['Woman', 'uk_f2', 'I’m dispatching a courier with two pre-updated swap units right now—they’ll reach your host stand before four o’clock.'],
    ], null, [
      ['Part 3 · Problem', 'Why is Chef Andre contacting the bank’s merchant support desk?', ['Wireless payment terminals stalled during busy lunch service', 'Bistro credit card fees increased without prior warning', 'Restaurant Wi-Fi passwords expired at noon', 'Duplicate dinner charges appeared on customer statements'], 0, 'ตอบ Wireless payment terminals stalled during busy lunch service (เครื่องรูดบัตรไร้สายค้างกลางมื้อเที่ยงทำให้ลูกค้าต้องรอนาน)'],
      ['Part 3 · Cause', 'What caused the payment readers to malfunction?', ['They missed a recent wireless security software update', 'Heavy lunch volume overloaded the bistro router', 'Countertop chargers damaged both terminal batteries', 'Card network servers went offline for maintenance'], 0, 'ตอบ They missed a recent wireless security software update (เครื่องไม่ได้รับการอัปเดตแพตช์ความปลอดภัย Wi-Fi เมื่อสัปดาห์ก่อน)'],
      ['Part 3 · Solution', 'How will the representative fix the issue before dinner?', ['By sending updated replacement devices by courier', 'By resetting the restaurant’s modem remotely', 'By waiving merchant processing fees for the weekend', 'By emailing firmware download links to the host'], 0, 'ตอบ By sending updated replacement devices by courier (เจ้าหน้าที่ส่งแมสเซนเจอร์นำเครื่องสำรองที่อัปเดตเรียบร้อยแล้วไปเปลี่ยนให้ก่อนสี่โมงเย็น)'],
    ]),

    p3(11, 'l11-p3-8', [
      ['Woman1', 'us_f2', 'Okay team, we’re down to the last audit sample folder—March travel expenses for the regional sales conference in Dallas.'],
      ['Woman2', 'au_f', 'Six hotel folios look great, though three receipts from Senior Rep Nolan only show credit card summary slips without itemized room rates.'],
      ['Man', 'ca_m', 'Without itemized hotel bills, tax compliance won’t let us separate lodging from taxable minibar or parking fees.'],
      ['Woman1', 'us_f2', 'Did Nolan upload the full PDFs in the expense app, or did he lose them?'],
      ['Man', 'ca_m', 'He probably forgot to expand the email folio—let me message him to call the Dallas hotel front desk for duplicate copies by tomorrow noon.'],
    ], null, [
      ['Part 3 · Problem', 'What issue did the team spot in Senior Rep Nolan’s hotel receipts?', ['They only display total charges rather than itemized nightly breakdowns', 'Three Dallas hotel bookings were billed to a personal credit card', 'Conference lodging exceeded company travel allowance caps', 'Minibar charges were mislabeled as conference registration fees'], 0, 'ตอบ They only display total charges rather than itemized nightly breakdowns (ใบเสร็จแสดงแค่ยอดรวมบัตรเครดิต ไม่มีรายละเอียดแยกราคาห้องพักกับค่าจอดรถหรือมินิบาร์)'],
      ['Part 3 · Detail', 'Why do the auditors need detailed hotel bills?', ['To distinguish deductible lodging from other taxable charges', 'To verify whether Nolan attended every conference session', 'To confirm Dallas hotel tax rates matched state guidelines', 'To reimburse Nolan for missing credit card receipts'], 0, 'ตอบ To distinguish deductible lodging from other taxable charges (เพื่อให้ฝ่ายภาษีแยกค่าที่พักออกจากค่าใช้จ่ายอื่นที่เสียภาษีต่างกันได้)'],
      ['Part 3 · Action', 'What will the auditor ask Senior Rep Nolan to obtain?', ['Request itemized invoice copies from the Dallas hotel', 'Re-upload credit card statements into the expense portal', 'Reimburse the company for undocumented parking fees', 'Meet with tax compliance officers tomorrow morning'], 0, 'ตอบ Request itemized invoice copies from the Dallas hotel (ผู้ชายจะส่งข้อความให้ Nolan โทรขอใบแจ้งหนี้แบบแจกแจงรายการจากแผนกต้อนรับโรงแรมในดัลลัส)'],
    ]),

    p3(11, 'l11-p3-9', [
      ['Man', 'uk_m', 'Hi Elena, quick question—I’m applying for a mortgage next week, and the bank wants last year’s tax form. How do I download it since we left our old payroll provider?'],
      ['Woman', 'us_f', 'No problem! Our migration archived the past three years of W-2 forms inside the new self-service portal under Tax Documents.'],
      ['Man', 'uk_m', 'Oh, thank goodness—I thought I’d have to dig through dusty file boxes at home!'],
      ['Woman', 'us_f', 'Not at all. Just log in with your company email and complete the two-factor text code, and your PDF downloads in seconds.'],
    ], null, [
      ['Part 3 · Purpose', 'Why does the man need a copy of last year’s tax document?', ['To include it in a home mortgage application', 'To verify direct-deposit routing changes', 'To prepare for a corporate payroll audit', 'To contest an incorrect state withholding'], 0, 'ตอบ To include it in a home mortgage application (ผู้ชายกำลังจะยื่นกู้ซื้อบ้านสัปดาห์หน้าและธนาคารขอเอกสารภาษีปีที่แล้ว)'],
      ['Part 3 · Meaning', 'What does the man mean when he says, "I thought I’d have to dig through dusty file boxes at home"?', ['He is relieved he won’t have to search for paper copies', 'He accidentally threw away his old payroll records', 'He plans to store tax binders inside his office cabinet', 'He prefers receiving printed W-2 forms by mail'], 0, 'ตอบ He is relieved he won’t have to search for paper copies (เขารู้สึกโล่งใจที่ไม่ต้องไปรื้อค้นเอกสารกระดาษเก่าๆ ที่บ้าน)'],
      ['Part 3 · Detail', 'What extra security step is needed to download the form?', ['Entering a two-factor SMS verification code', 'Requesting temporary clearance from the old vendor', 'Changing his company email password first', 'Submitting a mortgage verification letter to HR'], 0, 'ตอบ Entering a two-factor SMS verification code (ต้องยืนยันรหัสสองชั้นทางข้อความ SMS ก่อนดาวน์โหลด PDF)'],
    ]),

    p3(11, 'l11-p3-10', [
      ['Woman', 'ca_f', 'Good afternoon, Commercial Escrow Desk—this is attorney Sandra Reyes checking on the Elm Street warehouse closing.'],
      ['Man', 'us_m2', 'Hi Sandra! Yes, the buyer’s final wire cleared Federal Reserve settlement twenty minutes ago, and payoff funds went straight to the prior lender.'],
      ['Woman', 'ca_f', 'Wonderful. There was also a five-thousand-dollar property-tax holdback in escrow until city lien verification cleared—can we release that balance now?'],
      ['Man', 'us_m2', 'Just attach the stamped municipal clearance receipt to our release ticket, and we’ll credit the seller’s account before closing today.'],
    ], null, [
      ['Part 3 · Detail', 'What did the escrow officer confirm happened twenty minutes ago?', ['Final purchase funds finished clearing settlement', 'The prior lender requested a higher payoff balance', 'City tax inspectors delivered a stamped lien receipt', 'Seller wiring instructions bounced from the bank'], 0, 'ตอบ Final purchase funds finished clearing settlement (เงินโอนงวดสุดท้ายของผู้ซื้อผ่านการชำระดุลเรียบร้อยแล้วเมื่อ 20 นาทีก่อน)'],
      ['Part 3 · Topic', 'What are the speakers discussing releasing next?', ['A $5,000 tax holdback fund held in escrow', 'Legal title deeds for a downtown office suite', 'Commercial broker commission checks', 'Property insurance refunds from the city'], 0, 'ตอบ A $5,000 tax holdback fund held in escrow (เงินกันสำรองค่าภาษีทรัพย์สินจำนวน 5,000 ดอลลาร์ที่พักไว้ในบัญชีเอสโครว์)'],
      ['Part 3 · Condition', 'What is required before the remaining escrow funds can be transferred?', ['Uploading the city’s stamped tax clearance confirmation', 'Waiting until tomorrow’s Federal Reserve window opens', 'Having the buyer sign a supplemental property deed', 'Confirming payoff receipt by certified mail'], 0, 'ตอบ Uploading the city’s stamped tax clearance confirmation (ต้องแนบใบเสร็จยืนยันการปลอดภาระภาษีจากเทศบาลที่มีตราประทับเข้าในใบคำร้อง)'],
    ]),

    p3(11, 'l11-p3-11', [
      ['Man', 'us_m', 'Carla, look at the payroll rollout roadmap—Manufacturing asked to delay their live cutover by a week because two plant supervisors are away at a safety expo.'],
      ['Woman', 'uk_f', 'That’s fine—Retail is fully trained and eager to go early anyway. Wait, which trainer is assigned to Logistics right after Manufacturing’s original slot?'],
      ['Man', 'us_m', 'Derrick is handling Logistics on May 19. If we swap Manufacturing into the final week on May 26, Derrick stays free that whole week!'],
      ['Woman', 'uk_f', 'Smart move. Let’s lock in Retail for May 12 and push Manufacturing to the May 26 cutover window.'],
    ], doc('schedule', 'CloudPay — May Department Rollout Schedule', [['Phase', 'Live Cutover Plan']], [
      tbl(
        ['Department', 'Cutover Date', 'Lead Trainer', 'Readiness'],
        [
          ['Finance', 'May 5', 'Carla P.', 'Completed'],
          ['Manufacturing', 'May 12', 'Toby R.', 'Delay Requested'],
          ['Logistics', 'May 19', 'Derrick K.', 'Data Verified'],
          ['Retail', 'May 26', 'Carla P.', 'Training Done'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Who is the assigned trainer for the department now moving to May 12?', ['Carla P.', 'Toby R.', 'Derrick K.', 'Nadia S.'], 0, 'ตอบ Carla P. (ผู้พูดสลับให้แผนก Retail ขึ้นมาใช้ระบบก่อนในวันที่ 12 พ.ค. ซึ่งในตารางระบุว่าผู้ฝึกอบรมของ Retail คือ Carla P.)'],
      ['Part 3 · Cause', 'Why did Manufacturing request to postpone its payroll cutover?', ['Two factory supervisors are traveling for a safety conference', 'Logistics failed to verify hourly employee routing codes', 'Trainer Toby R. is scheduled for Finance follow-ups', 'Plant timekeeping kiosks still lack network wiring'], 0, 'ตอบ Two factory supervisors are traveling for a safety conference (หัวหน้างานโรงงานสองคนติดภารกิจไปงานแสดงสินค้าความปลอดภัย)'],
      ['Part 3 · Detail', 'Which department’s cutover date stays unchanged on May 19?', ['Logistics', 'Finance', 'Manufacturing', 'Retail'], 0, 'ตอบ Logistics (แผนก Logistics ยังคงกำหนดการเดิมคือวันที่ 19 พ.ค.)'],
    ]),

    p3(11, 'l11-p3-12', [
      ['Man', 'au_m', 'Nadia, we need to select an annual corporate audit tier from Grant & Partners before Friday’s board meeting.'],
      ['Woman', 'ca_f', 'Well, the board capped outside audit fees at eighteen thousand dollars maximum, which immediately rules out the top global package.'],
      ['Man', 'au_m', 'True. And since we acquired that small distribution subsidiary in Ohio last fall, we absolutely need consolidated subsidiary tax review included.'],
      ['Woman', 'ca_f', 'Look at the quote card—only one tier under our budget limit covers subsidiary tax filings.'],
      ['Man', 'au_m', 'Perfect—let’s recommend that tier in tomorrow’s finance memo.'],
    ], doc('proposal', 'Grant & Partners — Annual Audit Fee Tiers', [['Client', 'Midwest Manufacturing Corp.']], [
      box('Service Package Comparison', [
        '• Essential Review ($11,500): Single-entity balance sheet & cash flow check',
        '• Core Compliance ($14,800): Full GAAP audit + payroll withholding test',
        '• Multi-Unit Plus ($17,400): Full GAAP audit + subsidiary tax return review',
        '• Enterprise Global ($23,900): International IFRS audit + quarterly advisory',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which audit package meets the company’s budget and tax requirements?', ['Multi-Unit Plus', 'Essential Review', 'Core Compliance', 'Enterprise Global'], 0, 'ตอบ Multi-Unit Plus (บอร์ดจำกัดงบไม่เกิน $18,000 และต้องรวมตรวจภาษีบริษัทย่อย ซึ่งมีเพียง Multi-Unit Plus ราคา $17,400 ที่ตรงเงื่อนไข)'],
      ['Part 3 · Detail', 'Why does the company need consolidated tax review this year?', ['They purchased a distribution subsidiary in Ohio last year', 'Board directors requested quarterly international advisory calls', 'Payroll withholding calculations failed federal compliance', 'Essential Review fees increased unexpectedly'], 0, 'ตอบ They purchased a distribution subsidiary in Ohio last year (เพราะเพิ่งเข้าซื้อกิจการบริษัทย่อยด้านจัดจำหน่ายในรัฐโอไฮโอเมื่อฤดูใบไม้ร่วงปีที่แล้ว)'],
      ['Part 3 · Action', 'How will the speakers present their audit tier recommendation tomorrow?', ['Put forward the chosen audit package in tomorrow’s memo', 'Negotiate a discount on the Enterprise Global fee', 'Schedule a meeting with Ohio warehouse managers', 'Request an extension on Friday’s board presentation'], 0, 'ตอบ Put forward the chosen audit package in tomorrow’s memo (ทั้งคู่จะเสนอแพ็กเกจนี้ในบันทึกข้อความฝ่ายการเงินวันพรุ่งนี้)'],
    ]),

    p3(11, 'l11-p3-13', [
      ['Woman', 'us_f2', 'Leo, let’s review our commercial bank account options before opening the new treasury profile. How many international supplier wires do we average per month?'],
      ['Man', 'uk_m', 'Accounting counted eighteen overseas transfers monthly, plus roughly ten domestic vendor wires.'],
      ['Woman', 'us_f2', 'Okay—paying per-wire fees on eighteen international transfers would add up fast! Let’s pick a tier that includes at least twenty free global wires and zero domestic wire charges.'],
      ['Man', 'uk_m', 'Right, that narrows it straight to one plan—unless we’re eligible for Nonprofit Reserve, which we aren’t as a commercial retailer!'],
    ], doc('notice', 'Apex Commercial Bank — Business Account Tiers', [['Rates', 'Monthly Treasury Schedule']], [
      lst([
        '• Starter Business: $25/mo — 0 free international wires, $15 domestic wire',
        '• Growth Treasury: $95/mo — 8 free international wires, $5 domestic wire',
        '• Enterprise Global: $185/mo — 25 free international wires, $0 domestic wire',
        '• Nonprofit Reserve: $60/mo — 20 free international wires, $0 domestic (501c3 only)',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which commercial banking plan will the speakers select?', ['Enterprise Global', 'Starter Business', 'Growth Treasury', 'Nonprofit Reserve'], 0, 'ตอบ Enterprise Global (ต้องใช้โอนต่างประเทศเดือนละ 18 ครั้งและโอนในประเทศฟรี แต่บริษัทไม่ใช่การกุศล 501c3 จึงเลือก Enterprise Global ที่ให้โอนต่างประเทศฟรี 25 ครั้ง)'],
      ['Part 3 · Detail', 'How many domestic vendor wires does the company send in a typical month?', ['Around ten', 'Eighteen', 'Twenty-five', 'Eight'], 0, 'ตอบ Around ten (ผู้ชายระบุว่าฝ่ายบัญชีนับรายการโอนในประเทศได้ประมาณ 10 ครั้งต่อเดือน)'],
      ['Part 3 · Topic', 'What kind of organization does the woman work for?', ['A commercial retail business', 'A nonprofit community charity', 'An international banking regulator', 'A commercial software consulting firm'], 0, 'ตอบ A commercial retail business (ผู้ชายระบุว่าบริษัทเป็นธุรกิจค้าปลีกเชิงพาณิชย์จึงไม่มีสิทธิ์ใช้แผน Nonprofit Reserve)'],
    ]),

    // Set 11 Part 4 (10 Talks: 1-7 null doc, 8-10 graphic doc; 45-85 words each)
    p4(11, 'l11-p4-1', 'the following recorded telephone message', 'us_f',
      'Thank you for calling Summit Commercial Bank’s Treasury Support Desk. Please note our revised same-day wire transfer cutoff is now four-thirty P.M. Eastern Time, thirty minutes earlier than before, to accommodate automated fraud screening. Business clients initiating transfers above twenty-five thousand dollars must also enter a six-digit hardware token code before submitting. To speak with a relationship specialist regarding multi-currency accounts, press two or hold for the next representative.',
      null, [
        ['Part 4 · Purpose', 'What policy change is announced in this recorded message?', ['An earlier daily deadline for same-day wire transfers', 'Higher service fees for multi-currency business accounts', 'Extended evening support hours at Treasury branches', 'Elimination of hardware security tokens for small wires'], 0, 'ตอบ An earlier daily deadline for same-day wire transfers (เลื่อนเวลาตัดรอบโอนเงินภายในวันเดียวกันให้เร็วขึ้นเป็น 16:30 น. เพื่อรองรับระบบคัดกรองการทุจริต)'],
        ['Part 4 · Detail', 'What extra security step applies to transfers exceeding $25,000?', ['Inputting a six-digit hardware token number', 'Calling a relationship specialist in person', 'Submitting a notarized multi-currency form', 'Splitting the wire across two business days'], 0, 'ตอบ Inputting a six-digit hardware token number (รายการที่เกิน 25,000 ดอลลาร์ต้องกรอกรหัส 6 หลักจากอุปกรณ์โทเค็น)'],
        ['Part 4 · Action', 'How should callers reach an agent about foreign-currency accounts?', ['By pressing two on their telephone keypad', 'By waiting past four-thirty P.M. Eastern Time', 'By visiting a local commercial teller window', 'By registering a hardware token online'], 0, 'ตอบ By pressing two on their telephone keypad (หากต้องการคุยเรื่องบัญชีหลายสกุลเงินให้กด 2 หรือรอสาย)'],
      ]),

    p4(11, 'l11-p4-2', 'the following office announcement', 'uk_m',
      'Attention all corporate finance and accounting staff. External auditors arrive Monday morning at eight-thirty to begin our annual inventory and tax verification. Please clear personal papers from shared tables in Conference Wing Four, and lock all confidential vendor contracts inside fireproof cabinets before leaving Friday evening. Temporary work badges for the visiting audit team can be collected from Security Reception starting at eight A.M. Monday. Thank you for helping keep this year’s review organized.',
      null, [
        ['Part 4 · Purpose', 'Why is the speaker making this announcement?', ['To prepare staff for Monday’s external audit arrival', 'To introduce newly hired accounting department managers', 'To relocate Conference Wing Four storage cabinets', 'To announce updated security badge renewal dates'], 0, 'ตอบ To prepare staff for Monday’s external audit arrival (แจ้งเตรียมความพร้อมก่อนทีมผู้ตรวจสอบบัญชีภายนอกเข้ามาปฏิบัติงานเช้าวันจันทร์)'],
        ['Part 4 · Instruction', 'What should employees do before leaving the office on Friday?', ['Store sensitive supplier agreements inside locked cabinets', 'Deliver confidential vendor contracts to Security Reception', 'Move Conference Wing Four tables into empty hallways', 'Issue temporary visitor badges to incoming auditors'], 0, 'ตอบ Store sensitive supplier agreements inside locked cabinets (ให้เก็บสัญญาซัพพลายเออร์ที่เป็นความลับไว้ในตู้กันไฟที่ล็อกกุญแจก่อนกลับบ้านเย็นวันศุกร์)'],
        ['Part 4 · Detail', 'When can the visiting auditors pick up their access passes?', ['From 8:00 A.M. on Monday', 'Friday evening before closing', 'Monday at 8:30 A.M.', 'Following the tax verification meeting'], 0, 'ตอบ From 8:00 A.M. on Monday (สามารถรับบัตรผ่านชั่วคราวที่เคาน์เตอร์ รปภ. ได้ตั้งแต่ 08:00 น. วันจันทร์)'],
      ]),

    p4(11, 'l11-p4-3', 'the following excerpt from a meeting', 'ca_f',
      'Good morning, department managers. Before CloudPay replaces our legacy payroll engine next Friday, we are running one mandatory parallel test cycle this Wednesday. Please review your team’s draft pay previews on the test dashboard by two P.M. Wednesday and compare net amounts against last month’s baseline sheets. If you spot any discrepancy in overtime hours or health deductions, log it directly in the red Payroll Feedback form rather than emailing IT separately.',
      null, [
        ['Part 4 · Event', 'What is scheduled to occur this Wednesday?', ['A trial payroll run alongside the existing system', 'A mandatory company-wide software training workshop', 'The final shutdown of legacy accounting servers', 'Quarterly employee health benefit renewals'], 0, 'ตอบ A trial payroll run alongside the existing system (จะมีการรันทดสอบระบบจ่ายเงินเดือนคู่ขนานในวันพุธนี้ก่อนใช้งานจริงศุกร์หน้า)'],
        ['Part 4 · Action', 'What should managers verify by 2:00 P.M. Wednesday?', ['Whether test net-pay numbers align with prior baseline figures', 'Whether all staff updated their home mailing addresses', 'Whether CloudPay sent login links to new hires', 'Whether bank holiday schedules loaded properly'], 0, 'ตอบ Whether test net-pay numbers align with prior baseline figures (ตรวจสอบยอดรับสุทธิในแดชบอร์ดทดสอบเทียบกับยอดมาตรฐานเดือนก่อนภายในบ่ายสองโมงวันพุธ)'],
        ['Part 4 · Instruction', 'How should managers report calculation mistakes?', ['By entering issues in the red Payroll Feedback form', 'By sending urgent individual emails to IT technicians', 'By calling CloudPay’s external support desk', 'By adjusting employee deductions manually'], 0, 'ตอบ By entering issues in the red Payroll Feedback form (ให้กรอกแจ้งในแบบฟอร์ม Payroll Feedback สีแดงแทนการส่งอีเมลแยกไปที่ฝ่ายไอที)'],
      ]),

    p4(11, 'l11-p4-4', 'the following radio advertisement', 'us_m',
      'Is your growing business outgrowing slow, impersonal bank queues? Discover Meridian Commercial Bank, built specifically for regional manufacturers and service companies. Enjoy dedicated local relationship bankers who visit your facility, same-day working capital credit lines, and zero monthly fees on automated payroll disbursements. Open a Meridian Commercial Checking account before September thirtieth and receive complimentary cash-management setup valued at eight hundred dollars. Visit meridian-commercial dot com or stop by our Downtown Plaza branch today.',
      null, [
        ['Part 4 · Audience', 'Who is this radio advertisement primarily aimed at?', ['Owners of expanding local production and service firms', 'Individual consumers applying for home mortgages', 'Retired investors seeking high-yield savings plans', 'Software startups requesting international venture funding'], 0, 'ตอบ Owners of expanding local production and service firms (โฆษณามุ่งเป้าไปที่ธุรกิจผู้ผลิตและผู้ให้บริการระดับภูมิภาคที่กำลังเติบโต)'],
        ['Part 4 · Detail', 'Which service feature is offered free of monthly charges?', ['Automated employee payroll transfers', 'On-site equipment appraisal visits', 'International foreign-currency drafts', 'Commercial real estate closing fees'], 0, 'ตอบ Automated employee payroll transfers (บริการโอนจ่ายเงินเดือนอัตโนมัติไม่มีค่าธรรมเนียมรายเดือน)'],
        ['Part 4 · Promotion', 'What bonus is available through September 30?', ['Waived cash-management onboarding worth $800', 'An eight-hundred-dollar deposit match on payroll runs', 'Reduced interest rates on downtown office leases', 'Free financial audits for regional manufacturers'], 0, 'ตอบ Waived cash-management onboarding worth $800 (รับบริการตั้งค่าระบบบริหารเงินสดฟรีมูลค่า 800 ดอลลาร์เมื่อเปิดบัญชีก่อน 30 กันยายน)'],
      ]),

    p4(11, 'l11-p4-5', 'the following voicemail message', 'au_f',
      'Hi Rachel, this is CPA Kenji Sato calling at ten-fifteen Tuesday. I finished reviewing your manufacturing plant’s municipal tax abatement packet, and good news—all three equipment purchase invoices qualify for the green-machinery credit! However, the county clerk requires original wet-ink signatures from your chief financial officer on Page Four before accepting the claim. Could someone courier that signed sheet to my downtown suite by noon Thursday so we don’t miss Friday’s filing window?',
      null, [
        ['Part 4 · Topic', 'Why is Kenji Sato leaving this voicemail?', ['To request a handwritten signature on a tax credit form', 'To notify Rachel that three equipment claims were rejected', 'To schedule an on-site tax audit at the manufacturing plant', 'To confirm Friday’s filing deadline was extended'], 0, 'ตอบ To request a handwritten signature on a tax credit form (โทรมาแจ้งว่าหน้า 4 ต้องให้ CFO เซ็นชื่อด้วยหมึกจริงก่อนยื่นขอรับสิทธิลดหย่อนภาษีเครื่องจักร)'],
        ['Part 4 · Detail', 'What positive news did Kenji share about the tax claim?', ['Three machinery purchases met green-credit rules', 'The county clerk waived signature verification', 'Past municipal tax penalties were refunded', 'Digital signatures were accepted on all attachments'], 0, 'ตอบ Three machinery purchases met green-credit rules (ใบกำกับภาษีซื้อเครื่องจักรทั้งสามรายการผ่านเกณฑ์รับเครดิตภาษีเครื่องจักรสีเขียวแล้ว)'],
        ['Part 4 · Time', 'By when does Kenji need the signed page delivered?', ['Thursday at noon', 'Tuesday at ten-fifteen', 'Friday afternoon', 'Early next week'], 0, 'ตอบ Thursday at noon (ขอให้ส่งเอกสารที่มีลายเซ็นมาที่สำนักงานตัวเมืองภายในเที่ยงวันพฤหัสบดี)'],
      ]),

    p4(11, 'l11-p4-6', 'the following orientation talk', 'uk_f',
      'Welcome to Harbor & Bell Tax Associates! During your first client-site audit rotation starting Monday, data protection is everyone’s top responsibility. Never copy client payroll spreadsheets onto personal flash drives or unencrypted laptops; always use the firm-issued encrypted tablets checked out from IT Supply. Also remember to enter your billable project codes in our time-tracking app before six P.M. every Friday so client invoicing stays accurate. Let’s walk over to IT Supply now to collect your equipment.',
      null, [
        ['Part 4 · Audience', 'Who is most likely listening to this orientation talk?', ['Newly hired junior tax and audit associates', 'Independent IT contractors installing office routers', 'Corporate clients preparing for annual reviews', 'Reception staff managing weekly visitor badges'], 0, 'ตอบ Newly hired junior tax and audit associates (กล่าวต้อนรับพนักงานใหม่เข้าสู่บริษัทตรวจสอบบัญชีและภาษีก่อนเริ่มออกตรวจหน้างานลูกค้าครั้งแรก)'],
        ['Part 4 · Rule', 'What are staff strictly prohibited from doing with client files?', ['Saving payroll data onto personal storage devices', 'Accessing billing software after six P.M. Friday', 'Bringing firm-issued tablets to client offices', 'Checking out equipment from IT Supply'], 0, 'ตอบ Saving payroll data onto personal storage devices (ห้ามคัดลอกไฟล์เงินเดือนลูกค้าลงแฟลชไดรฟ์ส่วนตัวหรือโน้ตบุ๊กที่ไม่ได้เข้ารหัสเด็ดขาด)'],
        ['Part 4 · Sequence', 'What will the group do right after this talk?', ['Pick up encrypted tablets at IT Supply', 'Drive to their first client audit site', 'Enter project codes into the billing app', 'Attend a tax compliance webinar'], 0, 'ตอบ Pick up encrypted tablets at IT Supply (วิทยากรชวนเดินไปรับแท็บเล็ตที่เข้ารหัสแล้วที่ห้อง IT Supply ทันที)'],
      ]),

    p4(11, 'l11-p4-7', 'the following radio business report', 'us_m2',
      'In corporate technology news this morning, mid-sized retailers are racing to replace outdated desktop payroll spreadsheets with cloud compliance suites before July’s state tax updates take effect. According to a national survey released today, sixty-eight percent of firms under three hundred employees suffered penalty fines last year due to manual local-tax miscalculations. Software analysts note that companies switching early cut payroll processing time in half—leaving accounting departments wondering how they ever survived Friday afternoon paper runs!',
      null, [
        ['Part 4 · Topic', 'What trend is highlighted in this business broadcast?', ['Smaller firms adopting cloud-based payroll compliance tools', 'State agencies lowering corporate tax filing penalties', 'Retailers expanding in-house accounting departments', 'Banks discontinuing paper check printing services'], 0, 'ตอบ Smaller firms adopting cloud-based payroll compliance tools (ธุรกิจขนาดกลางกำลังเปลี่ยนจากสเปรดชีตเก่ามาใช้ระบบจ่ายเงินเดือนบนคลาวด์ก่อนกฎหมายภาษีใหม่มีผลเดือนกรกฎาคม)'],
        ['Part 4 · Detail', 'According to the survey, what problem affected 68 percent of surveyed firms?', ['Tax fines resulting from manual calculation errors', 'Delayed software deployments during July holidays', 'Missing state tax registration certificates', 'Server outages interrupting Friday payroll transfers'], 0, 'ตอบ Tax fines resulting from manual calculation errors (ผลสำรวจพบว่า 68% โดนค่าปรับจากการคำนวณภาษีท้องถิ่นผิดพลาดด้วยมือ)'],
        ['Part 4 · Meaning', 'What does the reporter mean by saying accountants wondered "how they ever survived Friday afternoon paper runs"?', ['The new automated process is dramatically easier than manual work', 'Staff regret abandoning printed payroll verification folders', 'Friday paydays require extra software backups', 'Analysts expect paper tax returns to return next July'], 0, 'ตอบ The new automated process is dramatically easier than manual work (สื่อว่าระบบใหม่ช่วยลดเวลาทำงานลงครึ่งหนึ่งจนฝ่ายบัญชีแปลกใจว่าเมื่อก่อนทนทำแบบกระดาษที่ยุ่งยากมาได้อย่างไร)'],
      ]),

    p4(11, 'l11-p4-8', 'the following tax deadline briefing and table', 'us_f2',
      'Good afternoon, Corporate Tax Team—please open our Q2 Regional Filing Calendar so we stay ahead of state compliance cutoffs. First, quick relief: Oregon pushed the deadline on Form OR-20 back two full weeks to May 29, giving Senior Associate Priya extra breathing room! However, notice which filing now lands earliest on our board—the Illinois Franchise return requires electronic certification right after tomorrow’s review, and its assigned preparer is out sick! Could someone swap schedules and take over that earliest return today?',
      doc('table', 'Corporate Tax Unit — May Filing Deadline Tracker', [['Quarter', 'Q2 Compliance Board']], [
        tbl(
          ['Form ID', 'Jurisdiction', 'Due Date', 'Assigned Preparer'],
          [
            ['Form 1120-IL', 'Illinois Franchise', 'May 14', 'David Cho'],
            ['Form OR-20', 'Oregon Excise', 'May 15 (New: May 29)', 'Priya Nair'],
            ['Form TX-05', 'Texas Margin', 'May 18', 'Elena Ruiz'],
            ['Form NY-CT3', 'New York Combined', 'May 22', 'Marcus Lee'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which tax preparer is currently out sick?', ['David Cho', 'Priya Nair', 'Elena Ruiz', 'Marcus Lee'], 0, 'ตอบ David Cho (วิทยากรบอกว่าแบบฟอร์มที่ครบกำหนดเร็วที่สุดคือ Illinois Franchise และผู้รับผิดชอบลาป่วย ซึ่งในตารางคือ Form 1120-IL ของ David Cho กำหนดส่ง 14 พ.ค.)'],
        ['Part 4 · Detail', 'Why does Priya Nair have extra time to complete Form OR-20?', ['State authorities extended the Oregon filing cutoff to May 29', 'Another associate volunteered to handle Oregon excise totals', 'Tomorrow’s internal review meeting was moved back two weeks', 'Illinois tax software automated Oregon calculations'], 0, 'ตอบ State authorities extended the Oregon filing cutoff to May 29 (รัฐออริกอนเลื่อนกำหนดส่ง Form OR-20 ออกไปอีกสองสัปดาห์เป็นวันที่ 29 พ.ค.)'],
        ['Part 4 · Request', 'What is the speaker asking a team member to do today?', ['Assume responsibility for preparing the Illinois filing', 'Contact Texas officials regarding Form TX-05 extensions', 'Help Marcus Lee audit New York revenue sheets', 'Reassign Oregon tax vouchers to Elena Ruiz'], 0, 'ตอบ Assume responsibility for preparing the Illinois filing (ขอให้สมาชิกในทีมสลับตารางมาช่วยรับผิดชอบยื่นภาษีของรัฐอิลลินอยส์แทนวันนี้)'],
      ]),

    p4(11, 'l11-p4-9', 'the following support team briefing and ticket summary', 'au_m',
      'Morning, CloudPay Support Engineers! Let’s check our overnight Rollout Ticket Triage Board before phones open at nine. Yesterday’s mobile browser update locked hundreds of staff out right at login, causing tickets in our quickest-response category to spike to forty-two! Meanwhile, Direct Deposit setup tickets look calm at just four open cases. So for today’s morning shift, I’m pulling two specialists off Direct Deposit and moving them onto that one-hour SLA queue until password resets clear out!',
      doc('report', 'CloudPay Rollout — Morning Ticket Triage Board', [['Updated', '8:45 A.M. Shift Handoff']], [
        box('Open Queue Breakdown', [
          '• Login & Password Lockout — 42 Open | Target SLA: 1 Hour | Queue A',
          '• Tax Withholding Updates — 16 Open | Target SLA: 4 Hours | Queue B',
          '• Direct Deposit Verification — 4 Open | Target SLA: 8 Hours | Queue C',
          '• PTO Accrual Balance Queries — 9 Open | Target SLA: 12 Hours | Queue D',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which support queue are two specialists temporarily moving into?', ['Queue A (Login & Password Lockout)', 'Queue B (Tax Withholding Updates)', 'Queue C (Direct Deposit Verification)', 'Queue D (PTO Accrual Balance Queries)'], 0, 'ตอบ Queue A (Login & Password Lockout) (ผู้พูดย้ายเจ้าหน้าที่จาก Direct Deposit ไปช่วยคิวที่มีเคสพุ่ง 42 เคสและมีเป้าหมาย SLA 1 ชั่วโมง ซึ่งตรงกับ Queue A)'],
        ['Part 4 · Cause', 'What triggered the sharp overnight increase in support requests?', ['A mobile browser update prevented users from signing in', 'A new tax withholding table miscalculated employee credits', 'Direct-deposit banking links disconnected at midnight', 'PTO accrual formulas reset to zero unexpectedly'], 0, 'ตอบ A mobile browser update prevented users from signing in (การอัปเดตเบราว์เซอร์มือถือเมื่อวานทำให้พนักงานล็อกอินเข้าไม่ได้จำนวนมาก)'],
        ['Part 4 · Detail', 'How many open tickets are currently sitting in Queue C?', ['Four cases', 'Nine cases', 'Sixteen cases', 'Forty-two cases'], 0, 'ตอบ Four cases (ตารางระบุ Queue C หรือ Direct Deposit Verification มีเคสเปิดอยู่เพียง 4 เคส)'],
      ]),

    p4(11, 'l11-p4-10', 'the following lobby announcement and directory', 'ca_m',
      'Good morning, bank visitors! Thank you for banking with Liberty Commercial Trust today. Please note our normal Commercial Credit suite is undergoing overnight carpet adhesive repairs that haven’t finished airing out yet. Consequently, all business loan meetings and multi-currency letter-of-credit consultations scheduled this morning have moved temporarily into the second-floor space right next to our Safe Deposit Vault. Regular retail cashiers and foreign draft tellers on the ground floor remain completely open.',
      doc('directory', 'Liberty Commercial Trust — Branch Service Directory', [['Notice', 'Floor Guide & Temporary Moves']], [
        lst([
          '• Ground Floor, Window A: Retail Cash & Check Deposits',
          '• Ground Floor, Window B: Foreign Currency & Bank Drafts',
          '• Second Floor, Suite 201: Commercial Credit & Letters of Credit',
          '• Second Floor, Suite 204: Safe Deposit Vault & Private Consults',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Where should business clients go for letter-of-credit meetings this morning?', ['Suite 204', 'Suite 201', 'Window A', 'Window B'], 0, 'ตอบ Suite 204 (ห้อง Suite 201 ปิดซ่อมกลิ่นกาวพรม จึงย้ายบริการสินเชื่อธุรกิจและ letter of credit ไปยังห้องถัดไปข้างตู้เซฟนิรภัย ซึ่งในป้ายคือ Suite 204)'],
        ['Part 4 · Problem', 'Why is Suite 201 closed temporarily?', ['Strong carpet glue odors need additional ventilation time', 'Vault security locks are undergoing electronic upgrades', 'Commercial loan officers are attending an off-site summit', 'Foreign currency tellers needed extra lobby seating'], 0, 'ตอบ Strong carpet glue odors need additional ventilation time (เพิ่งซ่อมกาวติดพรมเมื่อคืนและกลิ่นยังไม่ระบายออกหมด)'],
        ['Part 4 · Detail', 'Which services remain unaffected on the ground floor?', ['Retail deposits and foreign bank drafts', 'Commercial credit line closings', 'Safe deposit locker access', 'Private business loan consultations'], 0, 'ตอบ Retail deposits and foreign bank drafts (บริการเคาน์เตอร์รับฝากเงินสดและดราฟต์ต่างประเทศที่ชั้นล่างยังคงเปิดให้บริการตามปกติ)'],
      ]),

    // ==================== SET 12 ====================
    // Themes: Commercial Bakery & Espresso Roastery, Wholesale Food Safety, Catering Equipment Leasing
    p1(12, 'l12-p1-1', 'uk_f', [
      'A baker is sliding trays of loaves into a steel deck oven.',
      'Delivery drivers are stacking flour sacks onto a wooden pallet.',
      'A pastry chef is frosting a tall cake near a glass display.',
      'Kitchen staff are scrubbing baking sheets inside a deep sink.',
    ], 0, 'ตอบ A baker is sliding trays of loaves into a steel deck oven. (คนทำขนมปังกำลังใช้พายสอดถาดขนมปังเข้าเตาอบเหล็กแบบหลายชั้น)'),
    p1(12, 'l12-p1-2', 'us_m', [
      'Diners are clearing empty mugs from an outdoor café patio.',
      'A barista is pouring steamed milk into a ceramic coffee cup.',
      'Coffee beans are being scooped into foil retail pouches.',
      'Two workers are polishing the brass trim on an espresso machine.',
    ], 1, 'ตอบ A barista is pouring steamed milk into a ceramic coffee cup. (บาริสต้ากำลังเทนมอุ่นลงในแก้วเซรามิกบนเคาน์เตอร์)'),
    p1(12, 'l12-p1-3', 'ca_f', [
      'Technicians are checking gauges on a rooftop cooling tower.',
      'Fresh vegetables are being washed in a stainless basin.',
      'Sealed food bins are lined up on metal racks in a cold room.',
      'Cardboard shipping boxes are piled beside an open freezer door.',
    ], 2, 'ตอบ Sealed food bins are lined up on metal racks in a cold room. (กล่องอาหารปิดฝาสนิทถูกจัดเรียงบนชั้นโลหะภายในห้องเย็น)'),
    p1(12, 'l12-p1-4', 'au_m', [
      'Waiters are setting white plates along a banquet buffet line.',
      'Workers are loading folding banquet tables into a cargo van.',
      'Guests are serving themselves soup from silver tureens.',
      'Stainless-steel warming trays are displayed on a showroom table.',
    ], 3, 'ตอบ Stainless-steel warming trays are displayed on a showroom table. (ถาดอุ่นอาหารสเตนเลสสำหรับงานจัดเลี้ยงวางเรียงแสดงอยู่บนโต๊ะในโชว์รูม)'),
    p1(12, 'l12-p1-5', 'us_f2', [
      'Two workers are weighing burlap sacks of coffee beans near a scale.',
      'Roastery employees are sweeping spilled grounds off a stone floor.',
      'A supervisor is attaching shipping labels to wooden barrels.',
      'Roasting drums are being cleaned with long wire brushes.',
    ], 0, 'ตอบ Two workers are weighing burlap sacks of coffee beans near a scale. (พนักงานสองคนกำลังชั่งน้ำหนักกระสอบเมล็ดกาแฟข้างเครื่องชั่ง)'),
    p1(12, 'l12-p1-6', 'uk_m', [
      'Bakers are arranging croissants inside a refrigerated display case.',
      'A courier is pushing stacked bread crates on a hand truck.',
      'A mechanic is inspecting the rear tires of a delivery truck.',
      'Empty plastic trays are piled neatly against a brick wall.',
    ], 1, 'ตอบ A courier is pushing stacked bread crates on a hand truck. (พนักงานส่งของกำลังเข็นลังขนมปังที่ซ้อนกันด้วยรถเข็นสองล้อ)'),

    // Set 12 Part 2 (25 Qs)
    p2(12, 'l12-p2-1', 'uk_f', 'us_m', 'Where do we store the allergen-free pastry cooling racks?', ['Against the far stainless wall in Zone B.', 'Because sesame flour requires separate ovens.', 'Before the five-thirty morning delivery.'], 0, 'ตอบ Against the far stainless wall in Zone B. (ถามสถานที่เก็บชั้นวางขนมปลอดสารก่อภูมิแพ้ ตอบพิงอยู่ชิดผนังสเตนเลสด้านในของโซน B)'),
    p2(12, 'l12-p2-2', 'us_m', 'ca_f', 'Who calibrated the espresso grinders at the flagship café?', ['Every morning before opening.', 'A technician from Copper Kettle stopped by yesterday.', 'With medium-fine Ethiopian roast.'], 1, 'ตอบ A technician from Copper Kettle stopped by yesterday. (ถามบุคคล Who ตอบช่างจาก Copper Kettle แวะมาปรับตั้งให้เมื่อวาน)'),
    p2(12, 'l12-p2-3', 'au_f', 'uk_m', 'When are the rented induction chafing dishes due back at the depot?', ['At least twenty-four brass lids.', 'Inside padded plastic transport crates.', 'No later than Monday morning at ten.'], 2, 'ตอบ No later than Monday morning at ten. (ถามกำหนดคืนอุปกรณ์จัดเลี้ยง When ตอบต้องส่งคืนไม่เกิน 10:00 น. เช้าวันจันทร์)'),
    p2(12, 'l12-p2-4', 'ca_m', 'us_f2', 'Would the hotel kitchen prefer whole roasted beans or pre-ground espresso pouches?', ['Their head barista always grinds fresh per order.', 'Yes, six cases arrived this morning.', 'Next to the commercial ice machine.'], 0, 'ตอบ Their head barista always grinds fresh per order. (ถามทางเลือกเมล็ดหรือบดแล้ว ตอบเลี่ยงโดยบอกว่าบาริสต้าประจำโรงแรมบดสดใหม่ตามออเดอร์เสมอ ซึ่งหมายถึงเลือกแบบเมล็ด)'),
    p2(12, 'l12-p2-5', 'us_f', 'au_m', 'Why was Deck Oven Three shut down during the afternoon shift?', ['In the main sourdough proofing hall.', 'Its upper thermostat probe started reading thirty degrees too high.', 'About forty rustic loaves per batch.'], 1, 'ตอบ Its upper thermostat probe started reading thirty degrees too high. (ถามเหตุผล Why ตอบเพราะหัววัดอุณหภูมิด้านบนอ่านค่าเพี้ยนสูงเกินจริงไป 30 องศา)'),
    p2(12, 'l12-p2-6', 'uk_m', 'ca_f', 'Hasn’t the city food inspector signed our updated cold-storage log yet?', ['Three walk-in freezers behind the dock.', 'Yes, she always brings stainless thermometers.', 'Actually, she rescheduled her follow-up visit for Thursday.'], 2, 'ตอบ Actually, she rescheduled her follow-up visit for Thursday. (คำถามปฏิเสธ Hasn’t... ตอบความจริงว่าเจ้าหน้าที่เลื่อนนัดตรวจติดตามผลไปเป็นวันพฤหัสบดีแล้ว)'),
    p2(12, 'l12-p2-7', 'us_m2', 'uk_f', 'How many twenty-pound bags of organic rye flour remain in Dry Storage?', ['Only four—we should reorder right after lunch.', 'Twice weekly from Miller’s Grain.', 'Behind the rolling dough mixers.'], 0, 'ตอบ Only four—we should reorder right after lunch. (ถามจำนวนคงเหลือ How many ตอบเหลือแค่ 4 ถุง ต้องรีบสั่งเพิ่มหลังพักเที่ยง)'),
    p2(12, 'l12-p2-8', 'au_m', 'us_f', 'Could you swap out the leaking gasket on Walk-In Cooler Two?', ['Yes, the produce supplier left early.', 'Sure, let me grab a new rubber seal from the van.', 'At three degrees Celsius all night.'], 1, 'ตอบ Sure, let me grab a new rubber seal from the van. (ขอให้ช่วยเปลี่ยนซีลยางตู้เย็น ตอบตกลงและจะไปหยิบอะไหล่จากรถตู้มาเปลี่ยนให้)'),
    p2(12, 'l12-p2-9', 'ca_f', 'uk_m', 'The catering van’s liftgate switch has been sticking all morning.', ['Every weekend for corporate weddings.', 'Around six hundred pounds per load.', 'Better flag Fleet Maintenance before Saturday’s gala.'], 2, 'ตอบ Better flag Fleet Maintenance before Saturday’s gala. (บอกเล่าปัญหาฝาท้ายรถตู้จัดเลี้ยงค้าง ตอบแนะนำให้รีบแจ้งฝ่ายซ่อมบำรุงก่อนงานวันเสาร์)'),
    p2(12, 'l12-p2-10', 'us_f2', 'au_f', 'Which wholesale pastry account ordered extra cardamom buns for Friday?', ['Harbor View Hotel doubled their usual tray count.', 'Yes, cardamom pods went up in price.', 'At five-forty-five A.M. sharp.'], 0, 'ตอบ Harbor View Hotel doubled their usual tray count. (ถามลูกค้ารายใด Which account ตอบโรงแรม Harbor View สั่งเพิ่มเป็นสองเท่า)'),
    p2(12, 'l12-p2-11', 'uk_m', 'ca_m', 'How long does it take each coffee roaster batch to cool on the tray?', ['From Guatemala and Colombia mostly.', 'Roughly four minutes with the cooling agitator running.', 'On the lower warehouse mezzanine.'], 1, 'ตอบ Roughly four minutes with the cooling agitator running. (ถามระยะเวลา How long ตอบประมาณ 4 นาทีเมื่อเปิดใบพัดระบายความร้อน)'),
    p2(12, 'l12-p2-12', 'au_f', 'us_m', 'Should we rent porcelain dinner plates or heavy stoneware for the outdoor wedding?', ['Down beside the vineyard pavilion.', 'Three hundred guests signed the RSVP list.', 'Stoneware handles uneven lawn tables much better.'], 2, 'ตอบ Stoneware handles uneven lawn tables much better. (ถามทางเลือกจานสองแบบ ตอบจาน stoneware ทนทานและเหมาะกับโต๊ะกลางสนามหญ้ามากกว่า)'),
    p2(12, 'l12-p2-13', 'us_m', 'uk_f2', 'Where did Marco put the sanitizer test strips for the dishwashing sink?', ['Check the magnetic plastic caddy next to the soap dispenser.', 'Because health codes require hourly checks.', 'Every two hours during lunch prep.'], 0, 'ตอบ Check the magnetic plastic caddy next to the soap dispenser. (ถามหาแถบตรวจน้ำยาฆ่าเชื้อ Where ตอบดูในกล่องพลาสติกแม่เหล็กข้างที่กดสบู่)'),
    p2(12, 'l12-p2-14', 'ca_m', 'us_f', 'Why don’t we offer a complimentary grinder check when cafes sign an annual roast contract?', ['No, I switched to decaf last month.', 'That’s a great incentive—our techs are already driving those routes.', 'Sixty-five dollars per service visit.'], 1, 'ตอบ That’s a great incentive—our techs are already driving those routes. (Why don’t we เสนอโปรโมชันจูงใจ ตอบเห็นด้วยว่าเป็นข้อเสนอที่ดีเพราะช่างวิ่งเส้นทางนั้นอยู่แล้ว)'),
    p2(12, 'l12-p2-15', 'uk_f', 'au_m', 'Aren’t you bringing the mobile espresso cart to Saturday’s street fair?', ['Two espresso group heads and a water tank.', 'Actually, the event organizer canceled outdoor power hookups.', 'Yes, oat milk stays chilled in the cooler.'], 1, 'ตอบ Actually, the event organizer canceled outdoor power hookups. (ถามไม่ได้เอารถเข็นกาแฟไปงานเสาร์นี้หรือ ตอบความจริงว่าผู้จัดงานยกเลิกจุดต่อไฟกลางแจ้งไปแล้ว)'),
    p2(12, 'l12-p2-16', 'us_f', 'ca_f', 'Who approves emergency overtime when holiday croissant orders spike?', ['Between December fifteenth and New Year’s.', 'Production Manager Ken signs those slips every morning.', 'About twelve dozen butter croissants.'], 1, 'ตอบ Production Manager Ken signs those slips every morning. (ถามบุคคล Who ตอบผู้จัดการฝ่ายผลิต Ken เป็นผู้เซ็นอนุมัติทุกเช้า)'),
    p2(12, 'l12-p2-17', 'au_m', 'us_m2', 'How much is the refundable security deposit on a commercial convection oven lease?', ['For a six-week seasonal pop-up kitchen.', 'Three hundred fifty dollars, returned after cleaning inspection.', 'Yes, it runs on standard 240-volt lines.'], 1, 'ตอบ Three hundred fifty dollars, returned after cleaning inspection. (ถามราคาค่ามัดจำ How much ตอบ $350 โดยคืนให้หลังตรวจความสะอาด)'),
    p2(12, 'l12-p2-18', 'uk_f2', 'us_f', 'Did the green-bean shipment pass our roastery moisture test?', ['Right across from the cupping bar.', 'Most sacks read eleven percent, though two burlap bags ran damp.', 'No, I ordered dark French roast instead.'], 1, 'ตอบ Most sacks read eleven percent, though two burlap bags ran damp. (ถามเมล็ดกาแฟดิบผ่านตรวจความชื้นไหม ตอบส่วนใหญ่ผ่านที่ 11% แต่มีสองกระสอบที่ชื้นเกิน)'),
    p2(12, 'l12-p2-19', 'us_m2', 'uk_m', 'I heard Cedar Street Bistro switched to our wholesale sourdough loaves.', ['Yes, they ordered forty boules a day starting Monday!', 'Down the alley behind the loading ramp.', 'Try adjusting the dough hydration by two percent.'], 0, 'ตอบ Yes, they ordered forty boules a day starting Monday! (ประโยคบอกเล่าเรื่องลูกค้าใหม่ ตอบรับสอดคล้องว่าสั่งวันละ 40 ก้อนเริ่มวันจันทร์นี้)'),
    p2(12, 'l12-p2-20', 'ca_f', 'au_f', 'When is our annual food-safety third-party audit scheduled?', ['Every employee must wear hairnets.', 'Ask Elena—she’s coordinating dates with the certifying agency.', 'Inside the dry spice storage cage.'], 1, 'ตอบ Ask Elena—she’s coordinating dates with the certifying agency. (ถามกำหนดตรวจมาตรฐานอาหาร ตอบเลี่ยงอย่างเป็นธรรมชาติให้ถาม Elena ซึ่งเป็นผู้ประสานงาน)'),
    p2(12, 'l12-p2-21', 'uk_m', 'us_f2', 'Do you know if there’s a floor drain near the catering dish-return bay?', ['Twelve crates of tall champagne flutes.', 'Yes, right underneath the stainless spray table.', 'Probably around four-thirty this afternoon.'], 1, 'ตอบ Yes, right underneath the stainless spray table. (ถามตำแหน่งท่อระบายน้ำที่พื้น ตอบมีอยู่ใต้โต๊ะฉีดล้างสเตนเลสพอดี)'),
    p2(12, 'l12-p2-22', 'us_f', 'ca_m', 'What time does our morning wholesale bread truck depart for Downtown?', ['Loaded with rye, brioche, and baguettes.', 'Promptly at four-fifteen A.M. to beat traffic.', 'To seven restaurants along Main Street.'], 1, 'ตอบ Promptly at four-fifteen A.M. to beat traffic. (ถามเวลา What time ตอบรถออกตรงเวลา 04:15 น. เพื่อเลี่ยงรถติด)'),
    p2(12, 'l12-p2-23', 'au_f', 'uk_m', 'Can you cover the cupping tasting session for our hotel buyers at two?', ['Sure, just leave the sample roast notes on the counter.', 'Yes, the hotel banquet hall holds two hundred.', 'In ceramic bowls along the back wall.'], 0, 'ตอบ Sure, just leave the sample roast notes on the counter. (ขอให้ช่วยดูแลรอบชิมกาแฟ ตอบได้สิ แค่ทิ้งโน้ตข้อมูลกาแฟไว้บนเคาน์เตอร์)'),
    p2(12, 'l12-p2-24', 'ca_m', 'us_m', 'Have we heard back from the catering depot about extending our tent rental?', ['About forty folding banquet chairs.', 'They left a message confirming Monday pickup is fine.', 'Because afternoon showers soaked the terrace.'], 1, 'ตอบ They left a message confirming Monday pickup is fine. (ถามว่าทางร้านเช่าติดต่อกลับมาหรือยัง ตอบฝากข้อความยืนยันแล้วว่าเก็บคืนวันจันทร์ได้)'),
    p2(12, 'l12-p2-25', 'uk_f', 'au_m', 'Whose insulated beverage dispensers were left beside Loading Gate Four?', ['Check the label—they might belong to Summit Coffee’s trade booth.', 'Yes, hot cider stays warm for six hours.', 'Put the spare coffee filters on the top shelf.'], 0, 'ตอบ Check the label—they might belong to Summit Coffee’s trade booth. (ถามความเป็นเจ้าของ Whose ตอบให้ดูป้ายชื่อ น่าจะเป็นของบูธ Summit Coffee)'),

    // Set 12 Part 3 (13 Conversations: 1-10 null doc, 11-13 graphic doc)
    p3(12, 'l12-p3-1', [
      ['Man', 'us_m', 'Hey Priya, I just ran the moisture meter across our new shipment of washed Ethiopian green beans—five sacks came in at thirteen-point-two percent.'],
      ['Woman', 'au_f', 'That’s noticeably higher than our usual eleven-percent target. If we charge them into the drum at standard heat, they’ll scorch on the outside before the core dries.'],
      ['Man', 'us_m', 'Agreed. Should I drop our preheat charge temperature by fifteen degrees and stretch the drying phase by forty seconds?'],
      ['Woman', 'au_f', 'Yes—start with a single ten-pound sample batch using that curve, and let’s cup it at three o’clock before roasting the full lot.'],
    ], null, [
      ['Part 3 · Problem', 'What issue did the man find with the incoming green coffee beans?', ['Their moisture content exceeded the roastery’s target level', 'Five burlap sacks arrived torn during port shipping', 'The wrong Ethiopian bean variety was delivered', 'The moisture meter failed calibration checks'], 0, 'ตอบ Their moisture content exceeded the roastery’s target level (ค่าความชื้นวัดได้ 13.2% ซึ่งสูงกว่าเป้าหมายปกติที่ 11%)'],
      ['Part 3 · Detail', 'What happens if the beans are roasted at the normal heat setting?', ['The outer bean surface burns before the interior dries', 'The cooling tray agitator jams mid-cycle', 'The espresso loses its natural crema aroma', 'Roasting batches take forty minutes longer'], 0, 'ตอบ The outer bean surface burns before the interior dries (หากใช้ความร้อนปกติผิวเมล็ดจะไหม้เกรียมก่อนด้านในแห้ง)'],
      ['Part 3 · Action', 'What will the speakers do at three o’clock?', ['Taste a small test batch roasted with adjusted heat', 'Return the five damp sacks to the coffee importer', 'Clean the drum exhaust fans before evening shifts', 'Ship roasted pouches to downtown cafe buyers'], 0, 'ตอบ Taste a small test batch roasted with adjusted heat (ผู้หญิงให้ลองคั่วชุดเล็ก 10 ปอนด์ตามสูตรที่ปรับแล้วและนัดชิมทดสอบตอนบ่ายสามโมง)'],
    ]),

    p3(12, 'l12-p3-2', [
      ['Man', 'uk_m', 'Good morning, Nina—did the overnight alert on Walk-In Cooler Three clear up after midnight?'],
      ['Woman', 'ca_f', 'Not quite. Temperature crept up to six degrees Celsius by four A.M., so night bakers shifted all cream fillings into Cooler Two right away.'],
      ['Man', 'uk_m', 'Smart call saving the dairy stock. Did our refrigeration tech think the compressor motor failed?'],
      ['Woman', 'ca_f', 'Actually, he checked the coils and found the compressor strong—the bottom magnetic door gasket ripped loose, letting warm kitchen air leak in. He’s fitting a new seal now.'],
    ], null, [
      ['Part 3 · Action', 'What did night bakers do when Cooler Three warmed up?', ['Moved dairy fillings to an adjacent refrigerator', 'Turned off the kitchen ovens until dawn', 'Discarded all overnight pastry batches', 'Defrosted the compressor cooling coils'], 0, 'ตอบ Moved dairy fillings to an adjacent refrigerator (คนทำขนมกะดึกย้ายไส้ครีมทั้งหมดไปเก็บในตู้เย็นหมายเลข 2 ทันที)'],
      ['Part 3 · Cause', 'What caused Walk-In Cooler Three to lose cold air?', ['A torn rubber seal along the bottom of the door', 'An electrical breakdown in the compressor motor', 'Bakers leaving inventory carts wedged in the doorway', 'A power surge during midnight sanitation'], 0, 'ตอบ A torn rubber seal along the bottom of the door (ขอบยางแม่เหล็กด้านล่างประตูปิดตู้เย็นฉีกขาดทำให้อากาศร้อนจากครัวรั่วเข้าไป)'],
      ['Part 3 · Detail', 'Who is currently fixing the cooler problem?', ['A refrigeration repair technician', 'The night bakery shift supervisor', 'A municipal food safety inspector', 'The cream filling wholesale driver'], 0, 'ตอบ A refrigeration repair technician (ช่างทำความเย็นกำลังติดตั้งขอบยางซีลใหม่ให้อยู่ตอนนี้)'],
    ]),

    p3(12, 'l12-p3-3', [
      ['Woman', 'us_f', 'Hi, Heritage Catering Rentals—this is Claire from Belmont Hotel Events. Our Saturday banquet RSVP list jumped unexpectedly, so we need eighteen more induction chafing warmers added to ticket 482.'],
      ['Man', 'uk_m', 'Certainly, Claire! Let me check our main warehouse rack beside your Friday drop-off. Hmm, Central Depot only has ten spare units left, though our North Annex branch across town holds twelve!'],
      ['Woman', 'us_f', 'Could your Friday truck swing past North Annex on the way, or should I send our hotel steward van over?'],
      ['Man', 'uk_m', 'Oh, our driver passes right beside North Annex every Friday morning anyway—I’ll bundle all forty-eight warmers onto one delivery with zero extra haul fee.'],
    ], null, [
      ['Part 3 · Purpose', 'Why is Claire calling Heritage Catering Rentals?', ['To add more food warming dishes to an existing rental order', 'To change Friday’s linen delivery to Saturday morning', 'To cancel extra banquet tables due to lower attendance', 'To report missing electrical cords from last week’s gala'], 0, 'ตอบ To add more food warming dishes to an existing rental order (โทรมาขอเพิ่มเตาอุ่นอาหารแบบเหนี่ยวนำอีก 18 ชุดสำหรับงานวันเสาร์)'],
      ['Part 3 · Problem', 'Why can’t the entire request be filled from the main warehouse alone?', ['Central Depot only has ten spare induction warmers left', 'All Friday delivery trucks are booked by another hotel', 'North Annex inventory was reserved for linen storage', 'Electric warmers are undergoing safety testing'], 0, 'ตอบ Central Depot only has ten spare induction warmers left (คลังหลักเหลือเครื่องสำรองแค่ 10 ชุด จึงต้องดึงจากสาขา North Annex ด้วย)'],
      ['Part 3 · Meaning', 'What does the man imply when he says, "our driver passes right beside North Annex every Friday morning anyway"?', ['He can consolidate the extra units onto her delivery at no extra charge', 'Claire’s hotel van should collect the equipment directly', 'Friday deliveries usually arrive late due to annex traffic', 'North Annex charges double haul fees for separate stops'], 0, 'ตอบ He can consolidate the extra units onto her delivery at no extra charge (พนักงานขับรถผ่านทางนั้นอยู่แล้ว จึงแวะรับรวมส่งให้ครบ 48 ชุดโดยไม่คิดค่าขนส่งเพิ่ม)'],
    ]),

    p3(12, 'l12-p3-4', [
      ['Woman1', 'uk_f', 'Morning, team. Notice how flat our first batch of country sourdough loaves came out today? They barely rose in the proofing room!'],
      ['Man', 'us_m2', 'I noticed that too—our fermentation log shows dough temperature dropped four degrees below standard overnight.'],
      ['Woman2', 'au_f', 'Wait—wasn’t the building HVAC crew testing chilled rooftop vents above the bakery around two A.M.?'],
      ['Man', 'us_m2', 'Aha, that explains it! Look at the thermostat panel—the proofing steam valve never kicked back on after their vent check.'],
      ['Woman1', 'uk_f', 'Good catch. Let’s extend bulk fermentation by forty-five minutes on Batch Two and ask Maintenance to lock that thermostat cover today.'],
    ], null, [
      ['Part 3 · Problem', 'What issue occurred with the morning sourdough batch?', ['The loaves did not rise properly during proofing', 'The deck ovens burned the crust on Batch One', 'Air conditioning failed in the retail pastry lobby', 'Ingredients were measured with expired yeast'], 0, 'ตอบ The loaves did not rise properly during proofing (ขนมปังซาวร์โดว์ชุดแรกแบนและไม่ขึ้นฟูในห้องหมักแป้ง)'],
      ['Part 3 · Cause', 'What caused the proofing room temperature to fall overnight?', ['Building maintenance left a steam valve off after HVAC vent testing', 'Night bakers forgot to close the rooftop delivery door', 'Water pipes leaked inside the sourdough mixing bowls', 'Electricity went out across the bakery at two A.M.'], 0, 'ตอบ Building maintenance left a steam valve off after HVAC vent testing (ทีมช่างระบบปรับอากาศมาทดสอบช่องลมแล้ววาล์วไอน้ำห้องหมักแป้งไม่ทำงานต่อ)'],
      ['Part 3 · Action', 'How will the bakers rescue Batch Two?', ['By lengthening its fermentation time by forty-five minutes', 'By moving trays straight into hot deck ovens', 'By discarding overnight dough and mixing fresh rye', 'By doubling the water temperature in the mixers'], 0, 'ตอบ By lengthening its fermentation time by forty-five minutes (ยืดเวลาหมักแป้งของชุดที่สองออกไปอีก 45 นาทีและให้ช่างมาล็อกฝาครอบเทอร์โมสตัต)'],
    ]),

    p3(12, 'l12-p3-5', [
      ['Man', 'ca_m', 'Hi Rachel, I’m reviewing Tuesday’s allergen sanitation binder ahead of next week’s wholesale food-safety certification.'],
      ['Woman', 'us_f2', 'Everything should be initialed—we washed down Line Four right after the hazelnut biscotti run as required.'],
      ['Man', 'ca_m', 'Right, I see the detergent wash initials at one P.M., yet the final supervisor stamp says three-fifteen. Why the two-hour gap before switching to plain shortbread?'],
      ['Woman', 'us_f2', 'Because our first rapid protein swab flagged trace nut residue on a conveyor seam, so crew scrubbed the belt twice before a second swab tested completely zero.'],
    ], null, [
      ['Part 3 · Role', 'What is the man’s professional role during the bakery check?', ['A food-safety compliance auditor or quality coordinator', 'A wholesale cookie distributor calling about shipping', 'An industrial dishwasher repair specialist', 'A hazelnut farm supplier checking delivery logs'], 0, 'ตอบ A food-safety compliance auditor or quality coordinator (ผู้ชายกำลังตรวจสอบสมุดบันทึกการทำความสะอาดสารก่อภูมิแพ้ก่อนการรับรองมาตรฐานความปลอดภัยอาหารสัปดาห์หน้า)'],
      ['Part 3 · Detail', 'Why was Line Four delayed from restarting plain shortbread for two hours?', ['An initial allergen swab test detected remaining nut residue', 'Supervisors stepped away for a safety certification workshop', 'Sanitizing detergent supplies ran out at one P.M.', 'Hazelnut biscotti baking took longer than scheduled'], 0, 'ตอบ An initial allergen swab test detected remaining nut residue (การป้ายตรวจโปรตีนรอบแรกยังพบคราบถั่วหลงเหลือตรงรอยต่อสายพานจึงต้องล้างซ้ำอีกรอบ)'],
      ['Part 3 · Result', 'How was the sanitation line finally cleared for production?', ['A follow-up swab test registered zero allergen trace', 'Shortbread dough moved to an adjacent allergen-free room', 'Production supervisors bypassed the swab verification rule', 'New conveyor belts replaced the contaminated seam'], 0, 'ตอบ A follow-up swab test registered zero allergen trace (ล้างซ้ำแล้วตรวจรอบสองจนได้ผลเป็นศูนย์ทั้งหมด)'],
    ]),

    p3(12, 'l12-p3-6', [
      ['Woman', 'uk_f2', 'Hi, I’m organizing a three-day coffee tasting booth inside the Civic Art Pavilion, and we’d like to lease one of your compact espresso carts.'],
      ['Man', 'au_m', 'Glad to help! Our compact one-group cart is super popular for indoor booths—just make sure your expo booth includes a dedicated twenty-amp electrical drop.'],
      ['Woman', 'uk_f2', 'Hmm, my pavilion contract lists a standard fifteen-amp wall outlet. Would that trip the breaker?'],
      ['Man', 'au_m', 'With the boiler and grinder running together, yes. Fortunately, we lease dual-fuel carts with propane-heated boilers that only need fifteen amps for the pump and grinder!'],
    ], null, [
      ['Part 3 · Problem', 'What issue arises with the standard compact electric espresso cart?', ['The venue’s 15-amp outlet cannot power both boiler and grinder', 'The Civic Art Pavilion prohibits indoor coffee booths', 'Compact carts cannot fit inside freight elevators', 'Grinder water tanks leak onto wooden pavilion floors'], 0, 'ตอบ The venue’s 15-amp outlet cannot power both boiler and grinder (สถานที่จัดงานมีปลั๊กแค่ 15 แอมป์ แต่รถเข็นไฟฟ้าต้องใช้ปลั๊กเฉพาะ 20 แอมป์ไม่อย่างนั้นเบรกเกอร์จะตัด)'],
      ['Part 3 · Solution', 'What alternative rental item does the man propose?', ['A hybrid cart whose boiler runs on propane gas', 'A silent battery generator stored beneath the cart', 'Pre-brewed thermal dispensers delivered each morning', 'Two separate 15-amp extension cords from nearby booths'], 0, 'ตอบ A hybrid cart whose boiler runs on propane gas (แนะนำรถเข็นรุ่นที่ใช้แก๊สโพรเพนต้มน้ำแทน ทำให้ปลั๊ก 15 แอมป์ใช้กับปั๊มและเครื่องบดได้พอดี)'],
      ['Part 3 · Time', 'How long will the woman’s tasting event last?', ['Three days', 'One weekend afternoon', 'Five days', 'Two weeks'], 0, 'ตอบ Three days (ผู้หญิงระบุว่าจะจัดบูธชิมกาแฟเป็นเวลา 3 วัน)'],
    ]),

    p3(12, 'l12-p3-7', [
      ['Man', 'us_m', 'Hold the press, Laura! I just checked the digital proof for our five thousand croissant bakery boxes, and the white barcode box sits right over a dark chocolate border.'],
      ['Woman', 'uk_f', 'Oh, thank goodness you caught that before plates went onto the offset press! Retail grocery scanners often fail when dark ink bleeds near barcode edges.'],
      ['Man', 'us_m', 'Can your design team slide the nutrition panel up five millimeters to leave a crisp white margin around the barcode?'],
      ['Woman', 'uk_f', 'Easy fix—I’ll update the artwork PDF within the hour and still hold your Wednesday morning print slot.'],
    ], null, [
      ['Part 3 · Problem', 'What flaw did the man notice on the pastry box proof?', ['A dark graphic border overlaps the scannable barcode margin', 'Ingredient weights were omitted from the nutrition panel', 'Croissant quantities on the shipping carton were misprinted', 'Five thousand bakery boxes were shipped in the wrong size'], 0, 'ตอบ A dark graphic border overlaps the scannable barcode margin (ช่องบาร์โค้ดสีขาววางทับขอบสีช็อกโกแลตเข้มซึ่งอาจทำให้เครื่องสแกนร้านค้าอ่านไม่ออก)'],
      ['Part 3 · Action', 'How will Laura solve the layout issue?', ['By nudging the nutrition label upward to clear white space', 'By shrinking the bakery’s chocolate border logo completely', 'By printing separate adhesive barcode stickers for staff', 'By postponing box printing until next Wednesday'], 0, 'ตอบ By nudging the nutrition label upward to clear white space (เธอจะขยับตารางโภชนาการขึ้น 5 มิลลิเมตรเพื่อเว้นขอบสีขาวรอบบาร์โค้ดให้ชัดเจน)'],
      ['Part 3 · Detail', 'When is the packaging order scheduled to be printed?', ['Wednesday morning', 'Within the next hour', 'Later this evening', 'Friday afternoon'], 0, 'ตอบ Wednesday morning (ยังทันรอบพิมพ์เช้าวันพุธตามกำหนดเดิม)'],
    ]),

    p3(12, 'l12-p3-8', [
      ['Man1', 'ca_m', 'Bad news from wholesale sales—three downtown boutique hotels paused their weekly espresso subscriptions this month.'],
      ['Woman', 'us_f', 'Wait, did they complain about bean roast consistency or late morning vans?'],
      ['Man2', 'uk_m', 'Actually, I spoke with two of their beverage directors—they loved our beans, yet high staff turnover left untrained baristas pulling bitter, uneven shots!'],
      ['Man1', 'ca_m', 'Oh, so the coffee isn’t the issue—machine dial-in is! What if we include complimentary thirty-minute barista calibration visits every quarter?'],
      ['Woman', 'us_f', 'Brilliant idea. Let’s send our lead trainer out to offer free refresher sessions to all three hotels starting Tuesday!'],
    ], null, [
      ['Part 3 · Cause', 'Why did three downtown hotels pause their espresso bean orders?', ['Frequent staff turnover resulted in poorly trained espresso makers', 'Morning wholesale delivery vans repeatedly missed breakfast service', 'Roasted espresso blends tasted burnt due to over-roasting', 'Competitor roasters offered steep bulk price discounts'], 0, 'ตอบ Frequent staff turnover resulted in poorly trained espresso makers (โรงแรมเปลี่ยนพนักงานบ่อยทำให้บาริสต้าใหม่ยังไม่ได้ฝึกชงจนสกัดกาแฟออกมาขม)'],
      ['Part 3 · Proposal', 'What customer retention idea does the first man suggest for the hotels?', ['Providing free quarterly on-site espresso machine dial-in coaching', 'Installing automated single-button coffee machines in hotel lobbies', 'Switching hotel accounts to pre-ground espresso pods', 'Lowering wholesale per-pound coffee prices for downtown buyers'], 0, 'ตอบ Providing free quarterly on-site espresso machine dial-in coaching (เสนอเพิ่มบริการส่งผู้เชี่ยวชาญไปช่วยตั้งค่าเครื่องชงและสอนบาริสต้าฟรีทุกไตรมาส)'],
      ['Part 3 · Action', 'Who will visit the hotel kitchens starting Tuesday?', ['The roastery’s lead barista trainer', 'Wholesale delivery truck drivers', 'Equipment leasing repair mechanics', 'Quality-control green-bean buyers'], 0, 'ตอบ The roastery’s lead barista trainer (จะส่งหัวหน้าผู้ฝึกอบรมบาริสต้าออกไปสอนทบทวนให้ฟรีเริ่มวันอังคาร)'],
    ]),

    p3(12, 'l12-p3-9', [
      ['Woman', 'au_f', 'Hello, I’m returning our rented glassware crates from the Museum Gala, yet your invoice added a ninety-dollar breakage fee for six chipped wine glasses.'],
      ['Man', 'us_m2', 'Let me check our return station sheet—yes, Receiving marked six glasses chipped along the rim inside Crate Four.'],
      ['Woman', 'au_f', 'Wait—when your driver dropped off Crate Four Friday morning, I took timestamped phone photos because one corner divider was already cracked!'],
      ['Man', 'us_m2', 'Oh, hold on—let me look at those photos! Yes, I see the pre-existing divider crack right under our dispatch seal. Let me waive that ninety-dollar fee right away.'],
    ], null, [
      ['Part 3 · Purpose', 'Why is the woman speaking with the rental depot clerk?', ['To challenge a damage charge on returned banquet glassware', 'To rent extra wine crates for an upcoming museum event', 'To replace a lost invoice from Friday morning’s drop-off', 'To report late pickup service at the museum loading dock'], 0, 'ตอบ To challenge a damage charge on returned banquet glassware (มาโต้แย้งค่าปรับแก้วบิ่น 90 ดอลลาร์ในใบแจ้งหนี้)'],
      ['Part 3 · Detail', 'How does the woman prove the damage wasn’t caused by her catering team?', ['She shows timestamped pictures captured upon delivery Friday', 'She presents a signed repair voucher from the museum guard', 'She points out missing dispatch seals on all four crates', 'She brings the rental truck driver to confirm Crate Four’s weight'], 0, 'ตอบ She shows timestamped pictures captured upon delivery Friday (เปิดรูปถ่ายที่มีเวลาประทับตอนรับของเมื่อวันศุกร์ให้ดูว่าตัวกั้นลังร้าวมาก่อนแล้ว)'],
      ['Part 3 · Result', 'What billing adjustment does the rental clerk agree to make?', ['Remove the ninety-dollar fee from her rental bill', 'Deliver six replacement wine glasses tomorrow', 'Credit the museum for future gala chair rentals', 'Inspect the delivery van’s loading ramp'], 0, 'ตอบ Remove the ninety-dollar fee from her rental bill (พนักงานตรวจสอบภาพแล้วยินยอมยกเว้นค่าปรับ 90 ดอลลาร์ให้ทันที)'],
    ]),

    p3(12, 'l12-p3-10', [
      ['Man', 'uk_m', 'Hi Carla, I see our monthly flour silo pest-seal inspection is penciled in for Thursday at eight A.M.'],
      ['Woman', 'ca_f', 'Ooh, let’s check the receiving dock calendar—forty-ton bulk tankers of organic winter wheat are scheduled to blow flour into Silo Two from seven-thirty until ten Thursday!'],
      ['Man', 'uk_m', 'Good thing we checked—we can’t open the top inspection hatches while pneumatic grain blowers are pressurizing the tank!'],
      ['Woman', 'ca_f', 'Definitely not. Let’s move the safety inspector’s silo check to Friday morning at eight when no tanker deliveries are booked.'],
    ], null, [
      ['Part 3 · Problem', 'Why must Thursday’s flour silo inspection be postponed?', ['Bulk grain tankers will be filling Silo Two during that time', 'The safety inspector canceled Thursday’s morning appointment', 'Organic winter wheat deliveries arrived contaminated', 'Top inspection hatches require overnight welding repairs'], 0, 'ตอบ Bulk grain tankers will be filling Silo Two during that time (รถบรรทุกแป้งขนาดใหญ่จะเป่าแป้งสาลีออร์แกนิกลงไซโลหมายเลข 2 ช่วง 07:30-10:00 น. วันพฤหัส ทำให้เปิดฝาตรวจไม่ได้)'],
      ['Part 3 · Detail', 'What danger prevents inspecting the silo during delivery?', ['High air pressure from pneumatic flour pumping', 'Slippery dock ramps outside the warehouse', 'Excessive heat inside nearby bread ovens', 'Dust allergies among receiving office clerks'], 0, 'ตอบ High air pressure from pneumatic flour pumping (ระหว่างปั๊มลมเป่าแป้งเข้าถังจะมีแรงดันสูงจึงเปิดฝาบนเพื่อตรวจสอบไม่ได้)'],
      ['Part 3 · Time', 'When is the pest-seal inspection rescheduled for?', ['Friday at 8:00 A.M.', 'Thursday at 10:00 A.M.', 'Thursday at 7:30 A.M.', 'Monday morning'], 0, 'ตอบ Friday at 8:00 A.M. (ย้ายไปตรวจเช้าวันศุกร์เวลา 08:00 น. ที่ไม่มีคิวรถส่งของ)'],
    ]),

    p3(12, 'l12-p3-11', [
      ['Woman', 'us_f', 'Hi Ben, we’re finalizing our new espresso subscription menu for our hotel cafes. We need a smooth, low-acidity caffeinated blend under ninety-five dollars per case.'],
      ['Man', 'au_m', 'Let’s look at the roastery wholesale sheet. Midnight Decaf is ruled out right away since you want regular caffeine for breakfast service.'],
      ['Woman', 'us_f', 'True, and Single-Origin Kenya hits the bright fruity high-acidity profile, plus it’s well above our case price limit.'],
      ['Man', 'au_m', 'Look closely between the remaining two—one carries rich cocoa notes with low acidity and stays comfortably under budget!'],
    ], doc('menu', 'Copper Kettle Roasters — Wholesale Espresso Sheet', [['Terms', '5-lb Valve Bags (4/Case)']], [
      tbl(
        ['Blend Name', 'Flavor & Acidity', 'Case Price', 'Caffeine'],
        [
          ['Velvet Crema', 'Cocoa & Caramel · Low Acidity', '$88 / case', 'Regular'],
          ['Copper Ridge', 'Citrus & Berry · Bright Acidity', '$92 / case', 'Regular'],
          ['Midnight Decaf', 'Toasted Nut · Low Acidity', '$94 / case', 'Decaf'],
          ['Single-Origin Kenya', 'Floral Wine · High Acidity', '$112 / case', 'Regular'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which coffee blend satisfies all of the woman’s requirements?', ['Velvet Crema', 'Copper Ridge', 'Midnight Decaf', 'Single-Origin Kenya'], 0, 'ตอบ Velvet Crema (ต้องการกาแฟมีคาเฟอีน ความเปรี้ยวต่ำ Low Acidity และราคาต่ำกว่า $95/ลัง ซึ่งตรงกับ Velvet Crema ราคา $88/ลัง)'],
      ['Part 3 · Detail', 'Why does the woman reject Single-Origin Kenya?', ['Its acidity is too bright and its case price exceeds $95', 'Hotel guests dislike floral notes in iced drinks', 'It only ships in decaffeinated two-pound bags', 'It requires grinding with specialty burrs'], 0, 'ตอบ Its acidity is too bright and its case price exceeds $95 (Single-Origin Kenya มีความเปรี้ยวสูงและราคา $112 เกินงบ $95)'],
      ['Part 3 · Topic', 'What type of business does the woman represent?', ['Hotel café operations', 'An independent bean importer', 'A commercial coffee-grinder manufacturer', 'A municipal food-testing laboratory'], 0, 'ตอบ Hotel café operations (เธอระบุว่ากำลังเลือกเมนูเอสเพรสโซให้ร้านกาแฟในโรงแรมของเธอ)'],
    ]),

    p3(12, 'l12-p3-12', [
      ['Man', 'ca_m', 'Nina, our corporate charity dinner needs catering equipment for the weekend, and our rental budget caps out at four hundred dollars before deposit.'],
      ['Woman', 'uk_f2', 'Well, the Beverage Station bundle is out because the venue already owns insulated coffee urns.'],
      ['Man', 'ca_m', 'Right, and we don’t need a full barista cart—we just need heated buffet stations with overhead carving lamps for hot entrees!'],
      ['Woman', 'uk_f2', 'Look at our rental card—only one package fits our four-hundred-dollar limit and includes warming lamps!'],
    ], doc('catalog', 'Heritage Catering Leasing — Weekend Bundles', [['Rates', 'Fri–Mon Event Rentals']], [
      lst([
        '• Beverage Station: $240 (+$75 deposit) — Two 50-cup coffee urns & cold pitchers',
        '• Hot Buffet Pro: $385 (+$120 deposit) — Six chafing warmers & two overhead heat lamps',
        '• Pastry Display Suite: $430 (+$150 deposit) — Glass cooling case & three tiered stands',
        '• Mobile Espresso Cart: $540 (+$200 deposit) — Commercial machine, grinder & water pump',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. How much is the refundable deposit for the bundle the speakers choose?', ['$120', '$75', '$150', '$200'], 0, 'ตอบ $120 (ผู้พูดต้องการชุดอุ่นอาหารที่มีโคมไฟให้ความร้อนและราคาไม่เกิน $400 ซึ่งคือ Hot Buffet Pro ราคา $385 โดยมีค่ามัดจำ +$120)'],
      ['Part 3 · Detail', 'Why don’t the speakers need the Beverage Station bundle?', ['The event site already supplies large coffee urns', 'Coffee and tea service was removed from the dinner menu', 'Beverage Station packages exceed the four-hundred-dollar cap', 'Cold pitchers require extra twenty-amp electrical outlets'], 0, 'ตอบ The event site already supplies large coffee urns (สถานที่จัดงานมีถังต้มกาแฟเก็บความร้อนอยู่แล้ว)'],
      ['Part 3 · Event', 'What kind of occasion are the speakers organizing?', ['A weekend corporate charity dinner', 'A three-day coffee roasting expo', 'A downtown bakery grand opening', 'An outdoor wedding reception'], 0, 'ตอบ A weekend corporate charity dinner (ผู้ชายระบุว่าเตรียมอุปกรณ์สำหรับงานเลี้ยงอาหารค่ำการกุศลของบริษัทช่วงสุดสัปดาห์)'],
    ]),

    p3(12, 'l12-p3-13', [
      ['Man', 'us_m2', 'Hold everything, Elena—a municipal food-safety auditor arrives at two P.M., and I’m double-checking our morning sanitation board!'],
      ['Woman', 'us_f', 'Let’s see—Cold Dock Four passed at four degrees, and the Dry Spice Vault seal looked spotless at ten.'],
      ['Man', 'us_m2', 'Wait—look at the bottom line on the checklist! Somebody noted faint detergent foam wasn’t rinsed completely from the final rinse basin before noon, and test strips haven’t been re-dipped yet!'],
      ['Woman', 'us_f', 'Good catch! I’ll drain and sanitize that basin right now so we record a fresh pass stamp before two!'],
    ], doc('checklist', 'Wholesale Bakery — Pre-Audit Safety Log', [['Date', 'Tuesday 1:15 P.M. Check']], [
      box('Station Inspection Status', [
        '• Cold Dock 4°C — Passed (3.8°C logged at 9:30 A.M.)',
        '• Allergen Zone B — Passed (0 ppm hazelnut swab at 10:15 A.M.)',
        '• Dry Spice Vault — Passed (Moisture seals intact at 10:45 A.M.)',
        '• Sanitizer Sink — Action Needed (Unrinsed soap noted; re-test pending)',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which station still requires corrective action before 2:00 P.M.?', ['Sanitizer Sink', 'Cold Dock 4°C', 'Allergen Zone B', 'Dry Spice Vault'], 0, 'ตอบ Sanitizer Sink (รายการในกล่องแสดงว่า Sanitizer Sink ขึ้นสถานะ Action Needed เพราะมีฟองสบู่ตกค้างและยังไม่ได้ตรวจแถบทดสอบซ้ำ)'],
      ['Part 3 · Detail', 'What temperature was recorded at Cold Dock earlier in the morning?', ['3.8 degrees Celsius', '4.0 degrees Celsius', '6.0 degrees Celsius', '10.0 degrees Celsius'], 0, 'ตอบ 3.8 degrees Celsius (ในรายการบันทึก Cold Dock วัดอุณหภูมิได้ 3.8°C เวลา 09:30 น.)'],
      ['Part 3 · Action', 'What will Elena do immediately to prepare for the 2:00 P.M. audit?', ['Empty, clean, and re-test the sanitizer wash basin', 'Re-swab Allergen Zone B for hazelnut traces', 'Greet the municipal auditor at two P.M.', 'Seal dry spice containers in the vault'], 0, 'ตอบ Empty, clean, and re-test the sanitizer wash basin (Elena บอกว่าจะไปปล่อยน้ำล้างทำความสะอาดอ่างและตรวจแถบวัดซ้ำให้ผ่านก่อนบ่ายสอง)'],
    ]),

    // Set 12 Part 4 (10 Talks: 1-7 null doc, 8-10 graphic doc; 45-85 words each)
    p4(12, 'l12-p4-1', 'the following recorded telephone message', 'uk_f',
      'Thank you for calling Heritage Catering Supply. Our weekend pickup bays at Dock Seven are open Saturdays from seven A.M. until one P.M. When returning equipment after Sunday events, please place your crate keys inside the locked gray drop box beside the main gate rather than leaving carts unguarded on the ramp. To add an accidental breakage waiver to an existing rental invoice, press three to reach Event Billing.',
      null, [
        ['Part 4 · Purpose', 'What details does Heritage Catering Supply’s recorded message provide?', ['Weekend warehouse pickup hours and key return rules', 'Daily menu specials at a commercial bakery', 'Instructions for cleaning industrial coffee urns', 'Temporary weekday closures at Dock Seven'], 0, 'ตอบ Weekend warehouse pickup hours and key return rules (แจ้งเวลาเปิดรับอุปกรณ์วันเสาร์และวิธีคืนกุญแจลังหลังจบงานวันอาทิตย์)'],
        ['Part 4 · Instruction', 'Where should customers leave crate keys after Sunday rentals?', ['Inside the secured gray drop box near the gate', 'On top of unloaded rolling carts on the ramp', 'At the main reception desk inside Dock Seven', 'With the morning freight security guard'], 0, 'ตอบ Inside the secured gray drop box near the gate (ให้นำกุญแจลังใส่ในกล่องรับคืนสีเทาที่ล็อกไว้ข้างประตูใหญ่)'],
        ['Part 4 · Action', 'Why would a catering client press three on the phone menu?', ['To add damage protection coverage to a rental bill', 'To schedule Saturday equipment delivery after one P.M.', 'To request emergency repairs on chafing warmers', 'To cancel an existing catering deposit'], 0, 'ตอบ To add damage protection coverage to a rental bill (กด 3 เพื่อติดต่อฝ่ายการเงินเพิ่มประกันความเสียหายลงในใบแจ้งหนี้เช่าอุปกรณ์)'],
      ]),

    p4(12, 'l12-p4-2', 'the following orientation talk', 'us_m',
      'Welcome to Sunburst Wholesale Bakery! Before stepping onto the production floor, remember our three strict food-safety rules. First, everyone entering mixing zones must tuck hair fully under blue nets—no jewelry or watches allowed. Second, wear green aprons exclusively when handling nut-free pastry dough, and never cross into yellow sesame racks. Finally, wash hands for twenty full seconds whenever you switch stations, following the wall timers above each sink.',
      null, [
        ['Part 4 · Topic', 'What is the main focus of this safety briefing?', ['Hygiene and allergen prevention rules for bakery staff', 'Maintenance steps for commercial deck ovens', 'Proper box stacking inside wholesale delivery vans', 'Clock-in procedures for morning pastry shifts'], 0, 'ตอบ Hygiene and allergen prevention rules for bakery staff (อธิบายกฎสุขอนามัยและการป้องกันการปนเปื้อนข้ามของสารก่อภูมิแพ้ในโรงงานเบเกอรี่)'],
        ['Part 4 · Detail', 'Which employees must wear green aprons?', ['Staff working solely with nut-free pastry batches', 'Workers cleaning sesame-seed storage racks', 'Supervisors timing handwashing stations', 'Drivers loading finished bread carts'], 0, 'ตอบ Staff working solely with nut-free pastry batches (ผ้ากันเปื้อนสีเขียวใช้เฉพาะเวลาจัดการแป้งขนมที่ปลอดถั่วเท่านั้น)'],
        ['Part 4 · Rule', 'What assists employees in meeting handwashing rules?', ['Timers mounted above every washing sink', 'Supervisor spot checks at the mixing door', 'Color-coded soap dispensers near ovens', 'Automated alarms on bakery lockers'], 0, 'ตอบ Timers mounted above every washing sink (ใช้นาฬิกาจับเวลาที่ติดอยู่เหนืออ่างล้างมือให้ครบ 20 วินาที)'],
      ]),

    p4(12, 'l12-p4-3', 'the following radio advertisement', 'au_f',
      'Does your café’s morning espresso lack rich, velvety consistency? Switch to Copper Kettle Roasters, proudly supplying small-batch roasted beans to independent bakeries and restaurants across the city! We roast fresh every Tuesday morning and deliver straight to your door within twenty-four hours—never weeks old on a warehouse shelf. Sign a wholesale account this month and receive complimentary barista dial-in coaching for your whole team. Call 555-0194 today for free sample tins!',
      null, [
        ['Part 4 · Detail', 'What benefit sets Copper Kettle Roasters apart according to the ad?', ['Rapid delivery within one day of weekly roasting', 'Automatic leasing of commercial espresso grinders', 'Discounted paper cups for small local bakeries', 'Twenty-four-hour customer phone troubleshooting'], 0, 'ตอบ Rapid delivery within one day of weekly roasting (คั่วสดทุกเช้าวันอังคารและส่งถึงหน้าร้านภายใน 24 ชั่วโมงไม่ค้างสต็อก)'],
        ['Part 4 · Promotion', 'What bonus comes with opening a wholesale account this month?', ['Free on-site espresso training for café staff', 'Complimentary brass tampers and milk pitchers', 'Half-price espresso pouches on Tuesday mornings', 'Waived shipping fees for one full calendar year'], 0, 'ตอบ Free on-site espresso training for café staff (แถมการฝึกอบรมปรับจูนรสชาติกาแฟให้บาริสต้าทั้งทีมฟรี)'],
        ['Part 4 · Action', 'How can listeners request complimentary coffee samples?', ['By phoning the roastery’s sales number', 'By visiting a local bakery partner downtown', 'By registering online for Tuesday warehouse tours', 'By mailing a wholesale cafe menu'], 0, 'ตอบ By phoning the roastery’s sales number (ให้โทรไปที่เบอร์ 555-0194 เพื่อขอรับกระป๋องตัวอย่างฟรี)'],
      ]),

    p4(12, 'l12-p4-4', 'the following excerpt from a meeting', 'ca_m',
      'Thanks for gathering before dawn, Pastry Team. Holiday hotel pre-orders jumped thirty-five percent this week, so we’re adjusting morning oven assignments starting tomorrow. All laminated croissants will bake exclusively in Rotary Rack A to keep flaky layers uniform, while brioche burger buns shift over to Deck Oven Two. Please double-check tray spacing before sliding racks inside—overcrowded pans block hot air circulation and leave pale centers.',
      null, [
        ['Part 4 · Cause', 'Why is the bakery reorganizing its oven assignments?', ['Hotel pre-orders for holiday pastries rose sharply', 'Deck Oven Two broke down during overnight baking', 'Brioche bun ingredients changed suppliers this week', 'Rotary Rack A needs extra time for croissant cooling'], 0, 'ตอบ Hotel pre-orders for holiday pastries rose sharply (ยอดสั่งจองล่วงหน้าจากโรงแรมช่วงวันหยุดเพิ่มขึ้นถึง 35%)'],
        ['Part 4 · Detail', 'Where will brioche buns be baked starting tomorrow?', ['Inside Deck Oven Two', 'Inside Rotary Rack A', 'On top warming shelves', 'In the hotel kitchen'], 0, 'ตอบ Inside Deck Oven Two (ขนมปังบริยอชจะย้ายไปอบในเตา Deck Oven Two แทน)'],
        ['Part 4 · Warning', 'Why must bakers avoid crowding dough trays together?', ['Blocked airflow prevents centers from browning evenly', 'Tightly packed trays scratch steel oven tracks', 'Pastry parchment paper tears along rack edges', 'Brioche buns stick together inside steam vents'], 0, 'ตอบ Blocked airflow prevents centers from browning evenly (ถาดที่ชิดกันเกินไปจะขวางทางลมร้อน ทำให้ตรงกลางขนมสีซีดสุกไม่ทั่ว)'],
      ]),

    p4(12, 'l12-p4-5', 'the following voicemail message', 'us_f2',
      'Hi David, this is technician Samira calling from Allied Catering Leasing. Good news regarding your weekend banquet setup—we finished replacing the cracked door hinge and testing temperature probes on your rented double-stack convection oven! Our box truck is scheduled to deliver it tomorrow morning between eight-thirty and nine-thirty. Please make sure the service alley behind the ballroom stays clear of parked linen vans so we can roll the oven straight onto your freight lift.',
      null, [
        ['Part 4 · Purpose', 'Why is technician Samira leaving this message for David?', ['To confirm repair completion and schedule oven delivery', 'To report cracked temperature gauges on a banquet lift', 'To cancel tomorrow morning’s catering van rental', 'To request payment for an extra convection oven hinge'], 0, 'ตอบ To confirm repair completion and schedule oven delivery (โทรแจ้งว่าซ่อมบานพับประตูและทดสอบหัววัดอุณหภูมิเตาอบเรียบร้อยแล้ว และนัดส่งพรุ่งนี้เช้า 8:30-9:30 น.)'],
        ['Part 4 · Detail', 'Which equipment component was recently repaired?', ['A damaged oven door hinge', 'A freight lift hydraulic cable', 'A ballroom electrical breaker', 'A rolling linen cart wheel'], 0, 'ตอบ A damaged oven door hinge (ซ่อมบานพับประตูเตาอบที่แตกร้าวเรียบร้อยแล้ว)'],
        ['Part 4 · Request', 'What does Samira ask David to ensure before arrival?', ['That delivery access behind the ballroom remains unobstructed', 'That ballroom security guards sign rental keys by eight A.M.', 'That kitchen counters are cleared for propane tanks', 'That linen vans unload beside the main lobby'], 0, 'ตอบ That delivery access behind the ballroom remains unobstructed (ขอให้เคลียร์รถขนผ้าออกจากซอยบริการหลังห้องบอลรูมเพื่อให้เข็นเตาอบขึ้นลิฟต์ขนของได้สะดวก)'],
      ]),

    p4(12, 'l12-p4-6', 'the following facility tour briefing', 'uk_m',
      'Welcome inside Copper Kettle’s main roasting floor! Notice that huge perforated copper tray spinning right in front of the cast-iron drum—once beans hit our exact roast color, warm air would keep cooking them in seconds if left piled up. Watch how fast the cooling paddles spread beans across cool suction air! Also notice the smokeless afterburner pipe overhead—city visitors often ask why our neighborhood smells like toasted almonds instead of bitter smoke!',
      null, [
        ['Part 4 · Detail', 'What happens immediately after coffee beans drop onto the copper tray?', ['Spinning paddles and cool airflow halt further roasting', 'Workers scoop beans straight into retail valve bags', 'Cast-iron drums spray cold mist across hot beans', 'Smoke pipes channel almond aroma into the cupping room'], 0, 'ตอบ Spinning paddles and cool airflow halt further roasting (ใบพัดและแรงดูดอากาศเย็นจะรีบระบายความร้อนเพื่อหยุดไม่ให้เมล็ดกาแฟสุกเกิน)'],
        ['Part 4 · Purpose', 'Why is an afterburner pipe installed above the roaster?', ['To eliminate harsh roasting smoke from exhaust air', 'To recapture oven heat for adjacent bakery trays', 'To measure bean moisture levels automatically', 'To deliver toasted almond oil to espresso blends'], 0, 'ตอบ To eliminate harsh roasting smoke from exhaust air (ปล่องเผาควันไร้กลิ่นช่วยให้รอบโรงคั่วไม่มีควันขมรบกวน)'],
        ['Part 4 · Meaning', 'Why does the guide mention that "our neighborhood smells like toasted almonds instead of bitter smoke"?', ['To highlight how effectively the filtration system cleans exhaust odors', 'To advertise the roastery’s flavored almond espresso syrup', 'To warn guests about tree-nut allergens near the drum', 'To explain why downtown bakeries prefer Copper Kettle beans'], 0, 'ตอบ To highlight how effectively the filtration system cleans exhaust odors (อ้างถึงกลิ่นหอมแทนที่จะเป็นควันขมเพื่อเน้นย้ำประสิทธิภาพของระบบบำบัดควัน)'],
      ]),

    p4(12, 'l12-p4-7', 'the following food-safety announcement', 'us_f',
      'Attention all wholesale kitchen supervisors and receiving clerks. Quality Assurance just placed an immediate preventive hold on Lot S-409 of imported white sesame seeds delivered Monday morning. An independent lab test on a companion crate showed trace undeclared mustard pollen, so please do not open or transfer any bags carrying code S-409 into mixing hoppers. Move remaining sealed sacks straight into the locked yellow Quarantine Cage beside Dock Two until supplier pickup arrives tomorrow.',
      null, [
        ['Part 4 · Action', 'What should kitchen staff do with sesame sacks labeled Lot S-409?', ['Place unopened bags inside the yellow Quarantine Cage', 'Run rapid swab tests across mixing hoppers immediately', 'Mix the seeds only into allergen-labeled bread batches', 'Return the crates straight onto Monday’s delivery van'], 0, 'ตอบ Place unopened bags inside the yellow Quarantine Cage (ห้ามเปิดใช้และให้ย้ายกระสอบที่ยังปิดผนึกอยู่ไปเก็บในกรงกักกันสีเหลืองข้างประตูส่งของ 2)'],
        ['Part 4 · Problem', 'Why was Lot S-409 quarantined by Quality Assurance?', ['A related sample tested positive for hidden mustard traces', 'Moisture sensors detected mold inside Monday’s shipment', 'Supplier packaging lacked mandatory nutrition labels', 'Dock Two temperature logs drifted above safe ranges'], 0, 'ตอบ A related sample tested positive for hidden mustard traces (ผลแล็บจากลังชุดเดียวกันตรวจพบละอองมัสตาร์ดปนเปื้อนที่ไม่ได้ระบุบนฉลาก)'],
        ['Part 4 · Time', 'When will the supplier collect the quarantined shipment?', ['Tomorrow', 'Monday morning', 'Later this afternoon', 'Next week'], 0, 'ตอบ Tomorrow (เก็บไว้จนกว่าซัพพลายเออร์จะมารับคืนในวันพรุ่งนี้)'],
      ]),

    p4(12, 'l12-p4-8', 'the following bakery schedule update and table', 'au_m',
      'Morning bakers—quick change on this week’s Commercial Oven Maintenance schedule before prep starts! Yesterday’s thermostat glitch on Deck Two worsened overnight, so our gas repair crew moved its maintenance up from Thursday to today at noon. Thankfully, our backup unit listed for that oven stays open all afternoon, so please wheel every afternoon sourdough pan over there until repairs wrap up at three!',
      doc('table', 'Bakery Production — Weekly Oven Maintenance Plan', [['Week', 'May 12–16 Schedule']], [
        tbl(
          ['Oven Unit', 'Maintenance Window', 'Technician', 'Designated Backup'],
          [
            ['Deck Oven 1', 'Tuesday 1:00–3:00 P.M.', 'Toby H.', 'Deck Oven 2'],
            ['Deck Oven 2', 'Thursday 12:00–3:00 P.M.', 'Toby H.', 'Rotary Rack B'],
            ['Rotary Rack A', 'Wednesday 2:00–4:00 P.M.', 'Lena M.', 'Rotary Rack B'],
            ['Proofing Box B', 'Friday 11:00 A.M.–1:00 P.M.', 'Lena M.', 'Proofing Box A'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which unit should bakers use for afternoon sourdough loaves today?', ['Rotary Rack B', 'Deck Oven 1', 'Proofing Box A', 'Rotary Rack A'], 0, 'ตอบ Rotary Rack B (งานซ่อมของ Deck Oven 2 เลื่อนมาเป็นวันนี้ตอนเที่ยง และตารางระบุ Designated Backup ของ Deck Oven 2 คือ Rotary Rack B)'],
        ['Part 4 · Cause', 'Why was Deck Oven 2’s maintenance moved earlier?', ['Its faulty thermostat worsened overnight', 'Technician Toby H. is unavailable Thursday afternoon', 'Proofing Box B failed steam pressure checks', 'Afternoon sourdough batches doubled in volume'], 0, 'ตอบ Its faulty thermostat worsened overnight (ปัญหาหัววัดอุณหภูมิของเตา Deck Oven 2 แย่ลงเมื่อคืนนี้จึงต้องเลื่อนซ่อมมาเป็นวันนี้เลย)'],
        ['Part 4 · Time', 'Until what time will Deck Oven 2 remain offline today?', ['3:00 P.M.', '1:00 P.M.', '4:00 P.M.', '2:00 P.M.'], 0, 'ตอบ 3:00 P.M. (ผู้พูดแจ้งให้ย้ายไปใช้เตาสำรองจนกว่าจะซ่อมเสร็จเวลา 15:00 น.)'],
      ]),

    p4(12, 'l12-p4-9', 'the following dispatch briefing and route sheet', 'ca_f',
      'Hey Carlos—before you roll Cold Van Four off the dock, take a quick look at today’s morning chilled pastry delivery list. Harbor Hotel and Civic Hospital drops stay identical, yet the third stop just phoned saying their basement walk-in cooler is still being defrosted! So skip that address completely today—doing so saves you twenty-five minutes and ensures you reach our airport VIP lounge client well before breakfast service!',
      doc('schedule', 'Cold Van 4 — Morning Refrigerated Delivery Route', [['Date', 'Wednesday Morning Run']], [
        lst([
          '1. 5:30 A.M. — Harbor Hotel (24 trays Danish pastries)',
          '2. 6:15 A.M. — Civic Hospital Café (18 boxes gluten-free muffins)',
          '3. 7:00 A.M. — Midtown Bakery Co-op (30 cartons butter croissants)',
          '4. 7:45 A.M. — Airport VIP Lounge (16 trays mini brioche)',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which wholesale customer canceled today’s delivery?', ['Midtown Bakery Co-op', 'Harbor Hotel', 'Civic Hospital Café', 'Airport VIP Lounge'], 0, 'ตอบ Midtown Bakery Co-op (วิทยากรบอกให้ข้ามจุดส่งลำดับที่ 3 ซึ่งในรายการคือ Midtown Bakery Co-op เวลา 7:00 A.M.)'],
        ['Part 4 · Cause', 'Why can’t the third stop receive its croissant cartons this morning?', ['Their basement refrigerator is currently defrosting', 'Cold Van Four lacked space for thirty extra cartons', 'Airport lounge breakfast service moved twenty-five minutes earlier', 'Harbor Hotel requested additional trays at 5:30 A.M.'], 0, 'ตอบ Their basement refrigerator is currently defrosting (ห้องเย็นชั้นใต้ดินของร้านกำลังละลายน้ำแข็งอยู่)'],
        ['Part 4 · Detail', 'What benefit results from skipping the third route stop?', ['Carlos gains twenty-five minutes before the airport delivery', 'Carlos finishes unloading gluten-free muffins earlier', 'Midtown Bakery receives free brioche samples tomorrow', 'Cold Van Four avoids downtown bridge tolls'], 0, 'ตอบ Carlos gains twenty-five minutes before the airport delivery (ช่วยประหยัดเวลาได้ 25 นาที ทำให้ไปส่งที่ห้องรับรองสนามบินได้ทันก่อนมื้อเช้าแน่นอน)'],
      ]),

    p4(12, 'l12-p4-10', 'the following equipment inspection briefing and form', 'uk_f2',
      'Team, before finalizing billing on this weekend’s Lakeside Wedding return, check our Lease Inspection Form carefully. Our dual espresso machine and chafing pan set passed spotless—zero fees there! Wait—notice our inspector flagged that one returned item for a missing cleaning wipe-down, adding a forty-dollar fee, and also marked a sticky wheel on our rolling cooler cart. Let’s waive the cooler cart adjustment since it’s normal outdoor wear, and only invoice the hotel for that unwashed liquid urn!',
      doc('report', 'Lakeside Wedding — Lease Return Inspection', [['Invoice', '#R-9042 Closeout']], [
        box('Returned Equipment Audit', [
          '• Dual Espresso Machine — Clean & Tested | Extra Fee: $0',
          '• 40-Cup Coffee Urn — Dried milk residue inside tap | Cleaning Fee: $40',
          '• Chafing Pan Set (12x) — Sanitized & Complete | Extra Fee: $0',
          '• Rolling Cooler Cart — Gravel jammed in rear caster | Repair Hold: $25',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Why is the client being charged a $40 cleaning fee?', ['Milk residue remained inside the coffee urn tap', 'Espresso machine boilers were not drained properly', 'Chafing pans returned with burnt food stains', 'Gravel scratched the exterior of the cooler cart'], 0, 'ตอบ Milk residue remained inside the coffee urn tap (ใบตรวจระบุว่า 40-Cup Coffee Urn มีคราบนมแห้งติดอยู่ด้านในก๊อก จึงมีค่าทำความสะอาด $40)'],
        ['Part 4 · Decision', 'What does the speaker instruct staff to do regarding the $25 cart repair hold?', ['Cancel the charge because wheel wear is routine', 'Double the fee due to lakeside gravel damage', 'Subtract $25 from the coffee urn cleaning bill', 'Hold the full wedding deposit until wheel repair finishes'], 0, 'ตอบ Cancel the charge because wheel wear is routine (ให้ยกเว้นค่าซ่อมล้อรถเข็นแช่เย็นเพราะถือเป็นการสึกหรอตามการใช้งานกลางแจ้งปกติ)'],
        ['Part 4 · Detail', 'How much total extra fee will appear on the closeout bill?', ['$40', '$25', '$65', '$0'], 0, 'ตอบ $40 (ยกเว้นค่าล้อรถเข็น $25 ออกไปแล้ว เหลือเรียกเก็บเฉพาะค่าล้างถังกาแฟ $40)'],
      ]),

    // ==================== SET 13 ====================
    // Themes: Recording Studio & Film Post-Production, Ad Agency Campaign Pitch, Cinema Sound Upgrade
    p1(13, 'l13-p1-1', 'us_m', [
      'A sound engineer is adjusting sliders on a large mixing console.',
      'Musicians are packing guitar cases beside a glass partition.',
      'A singer is reading sheet music seated on a wooden stool.',
      'Studio technicians are hanging microphones from a metal ceiling grid.',
    ], 0, 'ตอบ A sound engineer is adjusting sliders on a large mixing console. (วิศวกรเสียงกำลังปรับแถบเลื่อนบนแผงมิกเซอร์เสียงขนาดใหญ่)'),
    p1(13, 'l13-p1-2', 'uk_f', [
      'Employees are erasing sketches from a glass office wall.',
      'Several colleagues are gathered around a board covered with storyboards.',
      'A designer is stapling fabric samples onto a wooden panel.',
      'Office chairs are stacked in the corner of a bright studio.',
    ], 1, 'ตอบ Several colleagues are gathered around a board covered with storyboards. (เพื่อนร่วมงานหลายคนยืนรวมตัวกันหน้ากระดานที่ติดแผ่นสตอรีบอร์ดไว้เต็ม)'),
    p1(13, 'l13-p1-3', 'ca_m', [
      'Ticket holders are walking down a carpeted theater aisle.',
      'A projectionist is changing film reels behind an open window.',
      'Rows of empty velvet seats face a wide cinema screen.',
      'Ushers are wiping armrests along a dimly lit balcony.',
    ], 2, 'ตอบ Rows of empty velvet seats face a wide cinema screen. (แถวเก้าอี้กำมะหยี่ที่ว่างเปล่าหันหน้าเข้าหาจอภาพยนตร์ขนาดใหญ่)'),
    p1(13, 'l13-p1-4', 'au_f', [
      'A woman is tuning an acoustic violin near a music stand.',
      'Two announcers are sharing a desk inside a radio booth.',
      'A technician is coiling audio cables around a speaker tripod.',
      'A woman wearing headphones is speaking into a suspended microphone.',
    ], 3, 'ตอบ A woman wearing headphones is speaking into a suspended microphone. (ผู้หญิงสวมหูฟังกำลังพูดใส่ไมโครโฟนที่แขวนอยู่ตรงหน้าขาตั้งโน้ต)'),
    p1(13, 'l13-p1-5', 'us_f2', [
      'Two computer screens on an editing desk show audio waveform graphics.',
      'An editor is carrying portable monitors down a dark hallway.',
      'Speakers have been removed from wall brackets for repainting.',
      'Cardboard shipping tubes rest across an empty mixing desk.',
    ], 0, 'ตอบ Two computer screens on an editing desk show audio waveform graphics. (หน้าจอคอมพิวเตอร์สองจอบนโต๊ะตัดต่อกำลังแสดงกราฟคลื่นเสียง)'),
    p1(13, 'l13-p1-6', 'uk_m', [
      'Crew members are unloading lighting tripods from a freight elevator.',
      'Black equipment cases with metal latches line a carpeted hallway.',
      'Soundproofing panels are leaning against an unfinished brick wall.',
      'Several camera lenses have been laid out on a padded table.',
    ], 1, 'ตอบ Black equipment cases with metal latches line a carpeted hallway. (กล่องใส่อุปกรณ์สีดำที่มีตัวล็อกโลหะวางเรียงรายอยู่ตามทางเดินปูพรม)'),

    // Set 13 Part 2 (25 Qs)
    p2(13, 'l13-p2-1', 'us_m', 'uk_f', 'Where should the foley artist store the wooden rain-effect boxes?', ['Inside Sound Locker C behind Foley Room Two.', 'Because the documentary director asked for louder thunder.', 'Right after we wrap Thursday’s morning mix.'], 0, 'ตอบ Inside Sound Locker C behind Foley Room Two. (ถามสถานที่เก็บอุปกรณ์ประกอบเสียง Where ตอบเก็บไว้ในตู้ Sound Locker C หลังห้อง Foley 2)'),
    p2(13, 'l13-p2-2', 'ca_f', 'au_m', 'Who approved the final voice-over script for the electric car commercial?', ['Three thirty-second radio spots.', 'The automotive client’s brand director signed off this morning.', 'In Recording Booth One downstairs.'], 1, 'ตอบ The automotive client’s brand director signed off this morning. (ถามบุคคล Who ตอบผู้อำนวยการฝ่ายแบรนด์ของลูกค้าบริษัทรถยนต์เซ็นอนุมัติเมื่อเช้า)'),
    p2(13, 'l13-p2-3', 'uk_m', 'us_f2', 'When will acoustic contractors finish wiring the new ceiling speakers in Cinema Four?', ['With sixty-four surround channels.', 'Yes, the front lobby carpets were replaced too.', 'By Thursday evening, just ahead of Friday’s premiere.'], 2, 'ตอบ By Thursday evening, just ahead of Friday’s premiere. (ถามเวลา When ตอบเสร็จภายในเย็นวันพฤหัสบดี ก่อนรอบปฐมทัศน์วันศุกร์พอดี)'),
    p2(13, 'l13-p2-4', 'au_f', 'ca_m', 'Should we pitch the summer soda campaign with animated graphics or live actors?', ['Our creative director feels live-action beach scenes test warmer.', 'Yes, the ad agency won that account in April.', 'Around forty-five seconds per clip.'], 0, 'ตอบ Our creative director feels live-action beach scenes test warmer. (ถามทางเลือก A or B ตอบแสดงความเห็นว่าผู้อำนวยการฝ่ายสร้างสรรค์เห็นว่าแบบคนแสดงจริงให้ผลตอบรับอบอุ่นกว่า)'),
    p2(13, 'l13-p2-5', 'us_m2', 'uk_f', 'Why did the color grading suite stay booked past midnight yesterday?', ['On two calibrated reference monitors.', 'The film producer requested softer skin tones on five scenes.', 'Until Friday’s festival submission cutoff.'], 1, 'ตอบ The film producer requested softer skin tones on five scenes. (ถามเหตุผล Why ตอบเพราะโปรดิวเซอร์ภาพยนตร์ขอปรับโทนสีผิวให้ละมุนขึ้นในห้าฉาก)'),
    p2(13, 'l13-p2-6', 'uk_f2', 'us_m', 'Didn’t our media buyer already reserve prime-time television slots for October?', ['No, the commercial jingle runs thirty seconds.', 'Twice every autumn on local news.', 'Actually, the client paused TV spending until holiday quarter.'], 2, 'ตอบ Actually, the client paused TV spending until holiday quarter. (คำถามปฏิเสธ Didn’t... ตอบข้อเท็จจริงว่าลูกค้าชะลอการใช้เงินโฆษณาทีวีไปจนถึงไตรมาสวันหยุด)'),
    p2(13, 'l13-p2-7', 'ca_m', 'au_f', 'How long does it take to export a 4K master reel from Editing Bay Three?', ['Usually thirty-five minutes if color filters are already rendered.', 'Inside the secure server vault upstairs.', 'By Friday morning’s client screening.'], 0, 'ตอบ Usually thirty-five minutes if color filters are already rendered. (ถามระยะเวลา How long ตอบปกติใช้เวลา 35 นาทีถ้าเรนเดอร์ฟิลเตอร์สีไว้แล้ว)'),
    p2(13, 'l13-p2-8', 'us_f', 'uk_m', 'Could you dim the auditorium wall sconces before our speaker test begins?', ['Yes, the projection lens arrived yesterday.', 'Let me switch panel three on the lobby dimmer.', 'Eighteen subwoofers behind the screen.'], 1, 'ตอบ Let me switch panel three on the lobby dimmer. (ขอให้ช่วยหรี่ไฟในโรงหนัง ตอบได้ เดี๋ยวไปปรับสวิตช์แผงที่ 3 ตรงล็อบบี้ให้)'),
    p2(13, 'l13-p2-9', 'au_m', 'us_f2', 'The wireless lapel mic in Studio B keeps picking up faint radio static.', ['Every Monday for podcast interviews.', 'About twelve feet from the acoustic glass.', 'Swap its battery pack and change to channel nine.'], 2, 'ตอบ Swap its battery pack and change to channel nine. (บอกเล่าปัญหาไมค์ไร้สายมีเสียงซ่า ตอบแนะวิธีแก้ให้เปลี่ยนก้อนแบตเตอรี่และสลับไปช่อง 9)'),
    p2(13, 'l13-p2-10', 'uk_f', 'ca_f', 'Which creative team is presenting the footwear pitch deck at ten o’clock?', ['Maya’s group from the fourth-floor studio.', 'Yes, sneakers sold well last quarter.', 'In Boardroom A overlooking the plaza.'], 0, 'ตอบ Maya’s group from the fourth-floor studio. (ถามกลุ่มใด Which team ตอบทีมของ Maya จากสตูดิโอชั้นสี่)'),
    p2(13, 'l13-p2-11', 'us_m', 'au_f', 'How many spare headphone adapters are left in the recording control drawer?', ['About four hours of vocal tracking.', 'I counted six quarter-inch gold plugs earlier.', 'Behind the upright acoustic piano.'], 1, 'ตอบ I counted six quarter-inch gold plugs earlier. (ถามจำนวน How many ตอบนับเมื่อกี้เหลือหัวแปลงสีทองอยู่ 6 ตัว)'),
    p2(13, 'l13-p2-12', 'ca_f', 'uk_m', 'Why don’t we play the cinema trailer with the upgraded bass calibration first?', ['No, the popcorn machine isn’t running yet.', 'Twenty-two surround speakers along each wall.', 'Good idea—that’ll show off the subwoofers right away.'], 2, 'ตอบ Good idea—that’ll show off the subwoofers right away. (Why don’t we เสนอแนะ ตอบเห็นด้วยเพราะจะได้โชว์พลังซับวูฟเฟอร์ให้เห็นชัดเจนทันที)'),
    p2(13, 'l13-p2-13', 'uk_m', 'us_f', 'Where did Elena place the signed talent release forms for yesterday’s narration?', ['In the locked green binder beside Reception.', 'Because the actor flew back to Toronto.', 'Every voice-over contract lasts two years.'], 0, 'ตอบ In the locked green binder beside Reception. (ถามสถานที่เก็บเอกสาร Where ตอบอยู่ในแฟ้มสีเขียวที่ล็อกไว้ข้างเคาน์เตอร์ต้อนรับ)'),
    p2(13, 'l13-p2-14', 'us_f2', 'ca_m', 'Aren’t you flying to Los Angeles for the film post-production conference?', ['Three sound-mixing workshops on Tuesday.', 'Not anymore—our lead colorist went instead while I finish this ad mix.', 'Yes, the editing room stays chilly.'], 1, 'ตอบ Not anymore—our lead colorist went instead while I finish this ad mix. (ถามไม่ได้บินไปประชุมหรือ ตอบไม่ได้ไปแล้ว ให้หัวหน้าฝ่ายปรับสีไปแทนส่วนตัวเราอยู่ทำมิกซ์โฆษณาให้เสร็จ)'),
    p2(13, 'l13-p2-15', 'au_m', 'uk_f2', 'What time does the ad agency’s client pitch rehearsal start in the big lounge?', ['With twelve laminated packaging mockups.', 'Right at two-fifteen, after the media team returns.', 'For a regional organic tea brand.'], 1, 'ตอบ Right at two-fifteen, after the media team returns. (ถามเวลา What time ตอบเริ่ม 14:15 น. หลังทีมมีเดียกลับมา)'),
    p2(13, 'l13-p2-16', 'ca_m', 'us_m', 'Who handles licensing clearance for vintage jazz tracks in our commercials?', ['Ten seconds during the closing logo.', 'Talk to Devon in Legal—he clears all music rights.', 'At the downtown vinyl archive.'], 1, 'ตอบ Talk to Devon in Legal—he clears all music rights. (ถามบุคคล Who ตอบให้คุยกับ Devon ฝ่ายกฎหมาย ซึ่งเป็นผู้ดูแลลิขสิทธิ์เพลงทั้งหมด)'),
    p2(13, 'l13-p2-17', 'uk_f2', 'au_m', 'How much extra did the theater charge to install acoustic wall baffles?', ['Across six auditorium balconies.', 'Nearly nine thousand dollars including overtime rigging.', 'Yes, dialogue sounds much crisper now.'], 1, 'ตอบ Nearly nine thousand dollars including overtime rigging. (ถามราคาเพิ่ม How much ตอบเกือบ 9,000 ดอลลาร์รวมค่าแรงติดตั้งล่วงเวลาแล้ว)'),
    p2(13, 'l13-p2-18', 'us_m2', 'ca_f', 'Did the film director confirm whether the background traffic noise should stay muted?', ['Inside Screen Two’s projection booth.', 'Actually, she asked us to bring faint street ambiance back in.', 'No, I usually edit documentaries instead.'], 1, 'ตอบ Actually, she asked us to bring faint street ambiance back in. (ถามว่าผู้กำกับยืนยันให้ปิดเสียงจราจรใช่ไหม ตอบความจริงว่าเธอกลับขอให้ใส่เสียงถนนเบาๆ กลับเข้ามา)'),
    p2(13, 'l13-p2-19', 'au_f', 'uk_m', 'I heard Grand Plaza Cinema won a regional award for its new lobby acoustics.', ['Really? Their sound renovation only wrapped up last month!', 'Two hundred reclining leather seats.', 'Check the brass nameplate near the ticket booth.'], 0, 'ตอบ Really? Their sound renovation only wrapped up last month! (รับฟังข่าวโรงหนังได้รางวัล ตอบรับอย่างประหลาดใจและสอดคล้องว่าเพิ่งปรับปรุงเสร็จเมื่อเดือนก่อนเอง)'),
    p2(13, 'l13-p2-20', 'uk_m', 'us_f2', 'When can the graphic illustrator send over updated storyboards for Slide Nine?', ['Using warm pastel ink sketches.', 'She promised to drop them into our shared folder by four.', 'Because the client disliked blue logos.'], 1, 'ตอบ She promised to drop them into our shared folder by four. (ถามเวลา When ตอบเธอรับปากว่าจะอัปโหลดลงโฟลเดอร์กลางภายในสี่โมงเย็น)'),
    p2(13, 'l13-p2-21', 'us_f', 'ca_m', 'Do you know if Studio One has an isolation booth large enough for a cello?', ['Three music stands and a metronome.', 'Yes, the side vocal room easily fits a seated cellist.', 'Tomorrow afternoon around three.'], 1, 'ตอบ Yes, the side vocal room easily fits a seated cellist. (ถามห้องอัดเสียงพอวางเชลโลไหม ตอบพอ ห้องร้องด้านข้างกว้างพอให้คนนั่งสีเชลโลได้สบาย)'),
    p2(13, 'l13-p2-22', 'ca_f', 'au_m', 'What time do projectionists unlock the multiplex doors before Saturday matinees?', ['Tickets start at twelve dollars.', 'Usually thirty minutes before the first noon show.', 'To test emergency aisle strips.'], 1, 'ตอบ Usually thirty minutes before the first noon show. (ถามเวลาเปิดประตูโรงหนัง ตอบปกติเปิดก่อนรอบฉายเที่ยง 30 นาที)'),
    p2(13, 'l13-p2-23', 'au_m', 'us_m2', 'Can you splice these two narration takes together before the producer reviews the cut?', ['Sure, give me ten minutes to smooth the breath pause.', 'Yes, the producer flew from Chicago.', 'Inside the third desk drawer.'], 0, 'ตอบ Sure, give me ten minutes to smooth the breath pause. (ขอให้ช่วยตัดต่อเสียงพากย์สองเทกเข้าด้วยกัน ตอบได้ ขอเวลา 10 นาทีแต่งจังหวะหายใจให้เนียน)'),
    p2(13, 'l13-p2-24', 'uk_f', 'us_f', 'Have the agency printers finished binding our glossy campaign pitch books?', ['About twenty-four pages each.', 'Not yet—the heavy cover stock just arrived an hour ago.', 'Because our client visits tomorrow morning.'], 1, 'ตอบ Not yet—the heavy cover stock just arrived an hour ago. (ถามโรงพิมพ์เข้าเล่มเสร็จหรือยัง ตอบยัง เพราะกระดาษปกแข็งเพิ่งมาส่งเมื่อชั่วโมงก่อน)'),
    p2(13, 'l13-p2-25', 'us_m', 'uk_f2', 'Whose external solid-state drive was left plugged into Edit Station Four?', ['Check the orange tape—that looks like Hannah’s backup.', 'Yes, it holds four terabytes of raw video.', 'Store unused cables inside the metal bin.'], 0, 'ตอบ Check the orange tape—that looks like Hannah’s backup. (ถามความเป็นเจ้าของ Whose ตอบดูเทปสีส้ม น่าจะเป็นไดรฟ์สำรองของ Hannah)'),

    // Set 13 Part 3 (13 Conversations: 1-10 null doc, 11-13 graphic doc)
    p3(13, 'l13-p3-1', [
      ['Woman', 'us_f', 'Hold on, Kenji—let’s pause the jingle vocal track right there. I’m hearing a faint sixty-hertz buzz behind every chorus line.'],
      ['Man', 'uk_m', 'Yeah, I noticed that hum on the monitors too. Let me solo channel two—hmm, it isn’t coming from the vocal condenser mic itself.'],
      ['Woman', 'us_f', 'Could it be the neon studio sign outside the glass booth, or a bad XLR cable?'],
      ['Man', 'uk_m', 'Wait—the phantom-power cable running across that metal floor strip has a bent shielding pin! Let me swap in a fresh braided cable and test one quick bar.'],
    ], null, [
      ['Part 3 · Problem', 'What issue interrupted the commercial jingle recording?', ['A faint electrical hum appeared in the audio feed', 'The vocalist forgot lyrics to the opening chorus', 'Studio monitors stopped playing backing music', 'Outside traffic noise leaked through the booth glass'], 0, 'ตอบ A faint electrical hum appeared in the audio feed (ได้ยินเสียงฮัม 60 เฮิรตซ์แทรกอยู่หลังท่อนร้อง)'],
      ['Part 3 · Cause', 'What did Kenji identify as the source of the sound problem?', ['A damaged microphone cable lying near metal trim', 'An unshielded neon sign beside the booth window', 'Faulty internal wiring inside the condenser mic', 'Low battery voltage in the studio headphones'], 0, 'ตอบ A damaged microphone cable lying near metal trim (พบว่าสาย phantom-power ที่พาดข้ามแถบโลหะมีขั้วชีลด์งอ)'],
      ['Part 3 · Action', 'What will sound engineer Kenji do to eliminate the buzz?', ['Replace the faulty cable and record a brief test', 'Turn off the hallway neon studio light', 'Switch the vocalist to an adjacent recording booth', 'Filter out the hum later during film editing'], 0, 'ตอบ Replace the faulty cable and record a brief test (Kenji จะเปลี่ยนสายถักเส้นใหม่แล้วทดสอบอัดสั้นๆ หนึ่งท่อน)'],
    ]),

    p3(13, 'l13-p3-2', [
      ['Man', 'ca_m', 'Nadia, we have an emergency pivot before our three P.M. pitch to CitrusSpark Beverages!'],
      ['Woman', 'au_f', 'What happened? Did their marketing team move the meeting room?'],
      ['Man', 'ca_m', 'Worse—their brand VP emailed saying she hates neon green bottle mockups and wants an earthy, sunlit botanical vibe instead.'],
      ['Woman', 'au_f', 'Whoa, four hours before showtime! Good thing our designer kept layered Photoshop files—I’ll swap the labels to warm terracotta tones and re-export the hero slides before two.'],
    ], null, [
      ['Part 3 · Cause', 'Why do the agency’s presentation materials need last-minute changes?', ['An executive rejected the current neon packaging colors', 'CitrusSpark delayed the beverage launch until autumn', 'Photoshop mockup files failed to open in the boardroom', 'The afternoon client pitch moved earlier to two P.M.'], 0, 'ตอบ An executive rejected the current neon packaging colors (รองประธานฝ่ายแบรนด์ส่งอีเมลมาว่าไม่ชอบม็อกอัปสีเขียวนีออนและอยากได้โทนธรรมชาติอบอุ่นแทน)'],
      ['Part 3 · Time', 'When is the agency scheduled to pitch to CitrusSpark Beverages?', ['At 3:00 P.M.', 'At 2:00 P.M.', 'At 4:00 P.M.', 'Tomorrow morning'], 0, 'ตอบ At 3:00 P.M. (ผู้ชายระบุว่ามีนัดนำเสนอ Pitch ตอนบ่าย 3 โมง)'],
      ['Part 3 · Detail', 'Why is Nadia able to revise the visuals quickly?', ['The original artwork was saved in editable layered files', 'Warm terracotta bottle photos were already approved earlier', 'CitrusSpark sent replacement labels by courier', 'The agency hired extra graphic designers for the afternoon'], 0, 'ตอบ The original artwork was saved in editable layered files (นักออกแบบเก็บไฟล์ Photoshop แบบแยกเลเยอร์ไว้ จึงแก้โทนสีฉลากใหม่ได้ทัน)'],
    ]),

    p3(13, 'l13-p3-3', [
      ['Man', 'us_m2', 'Wait a second, Hannah—stand right here near the back row of Cinema Three while my crew blasts the action explosion cue inside Cinema Four next door!'],
      ['Woman', 'uk_f2', 'Okay, let’s listen... hmm, dialogue is quiet, yet I can still feel that deep sub-bass vibration rattling through the shared brick wall!'],
      ['Man', 'us_m2', 'Yeah, those dual eighteen-inch subwoofers pack serious energy. If we leave them bolted straight to the concrete floor, moviegoers next door will hear rumbles during quiet dramas.'],
      ['Woman', 'uk_f2', 'Can you mount rubber isolation pads beneath the subwoofer cabinets today, or do we have to lower bass volume?'],
      ['Man', 'us_m2', 'Rubber isolation mounts are already on our truck—my riggers can slip them under every cabinet before five P.M. without losing any punch!'],
    ], null, [
      ['Part 3 · Problem', 'What acoustic issue did the speakers discover during testing?', ['Low-frequency bass vibrations travel into an adjacent theater', 'Action scene dialogue sounds muffled near the back row', 'Subwoofer cabinets are too large to fit behind Cinema Four’s screen', 'Shared brick walls need repainting before weekend screenings'], 0, 'ตอบ Low-frequency bass vibrations travel into an adjacent theater (เสียงเบสลึกจากโรง 4 สั่นสะเทือนทะลุกำแพงเข้ามาในโรง 3 ที่อยู่ติดกัน)'],
      ['Part 3 · Solution', 'How will the installation crew resolve the vibration bleed?', ['By placing rubber dampening pads under the speakers', 'By turning down Cinema Four’s bass volume permanently', 'By adding a second brick partition between auditoriums', 'By moving action films away from Cinema Four'], 0, 'ตอบ By placing rubber dampening pads under the speakers (ช่างเตรียมแผ่นยางรองกันสะเทือนมาในรถบรรทุกแล้วและจะสอดรองใต้ตู้ซับวูฟเฟอร์ก่อนห้าโมงเย็น)'],
      ['Part 3 · Meaning', 'What does the man mean when he says, "without losing any punch"?', ['Sound impact in Cinema Four will remain equally powerful', 'Cinema Three viewers won’t feel wall rumbles anymore', 'Riggers won’t require heavy lifting jacks on the truck', 'Subwoofer power cables won’t need rewiring'], 0, 'ตอบ Sound impact in Cinema Four will remain equally powerful (หมายถึงยังคงพลังความหนักแน่นของเสียงเบสในโรง 4 ได้เต็มที่โดยไม่ต้องลดเสียง)'],
    ]),

    p3(13, 'l13-p3-4', [
      ['Woman1', 'us_f', 'Devon, let’s review Scene Twelve of the wildlife documentary. Why does the narrator’s new voice track drift slightly behind the river footage at the end?'],
      ['Man', 'ca_m', 'Oh, look at the timeline header—when the narrator re-recorded that line in London yesterday, their studio exported the audio at twenty-five frames per second instead of twenty-four!'],
      ['Woman2', 'uk_f', 'No wonder the last sentence lags half a second behind the eagle shot! Can we run a frame-rate pull-down conversion without distorting his voice pitch?'],
      ['Man', 'ca_m', 'Definitely—I’ll apply pitch-locked resampling in ProTools right now, and export a synced reference clip for your approval in fifteen minutes.'],
    ], null, [
      ['Part 3 · Cause', 'Why did the documentary narration fall out of sync with the video?', ['The London studio exported the audio at an incorrect frame rate', 'River wildlife footage was shortened during color grading', 'The narrator read the closing paragraph too slowly', 'Editing software corrupted yesterday’s ProTools project file'], 0, 'ตอบ The London studio exported the audio at an incorrect frame rate (สตูดิโอที่ลอนดอนส่งออกไฟล์เสียงที่ 25 เฟรมต่อวินาทีแทนที่จะเป็น 24 เฟรมต่อวินาที)'],
      ['Part 3 · Concern', 'What does the second woman want to avoid while fixing the narration timing?', ['Altering the natural tone of the narrator’s voice', 'Re-booking the London voice actor for another session', 'Cutting the eagle footage out of Scene Twelve', 'Delaying final color grading past fifteen minutes'], 0, 'ตอบ Altering the natural tone of the narrator’s voice (ถามว่าจะแปลงอัตราเฟรมได้ไหมโดยไม่ทำให้โทนเสียงพูดเพี้ยน)'],
      ['Part 3 · Action', 'What will Devon deliver in fifteen minutes?', ['A synchronized test clip for the team to verify', 'A revised wildlife script for the London studio', 'Twenty-five frame-rate video footage from London', 'A new microphone setup in Editing Suite Two'], 0, 'ตอบ A synchronized test clip for the team to verify (Devon จะใช้ระบบปรับจังหวะแบบล็อกระดับเสียงและส่งคลิปอ้างอิงที่ตรงภาพแล้วให้ตรวจใน 15 นาที)'],
    ]),

    p3(13, 'l13-p3-5', [
      ['Man', 'au_m', 'Hi Chloe—our beverage client loved the voice actor we cast for their regional radio spot, and now they want to drop that exact same thirty-second read into national podcast ads!'],
      ['Woman', 'us_f2', 'Wait before sending that file to media! Let me check the talent buyout contract we signed last month—hmm, it explicitly covers terrestrial radio in three Midwest states only.'],
      ['Man', 'au_m', 'Oh! So streaming podcasts require a separate usage expansion fee?'],
      ['Woman', 'us_f2', 'Right. Let me call his talent agent today to negotiate a six-month digital streaming rider before we publish anything online.'],
    ], null, [
      ['Part 3 · Problem', 'Why can’t the agency immediately upload the radio ad to national podcasts?', ['The voice actor’s contract only authorizes regional broadcast radio', 'Audio files recorded for radio lack digital podcast stereo quality', 'The beverage client hasn’t paid last month’s production invoice', 'Podcast platforms require forty-five-second commercial spots'], 0, 'ตอบ The voice actor’s contract only authorizes regional broadcast radio (สัญญาซื้อสิทธิ์เสียงที่เซ็นไว้ครอบคลุมเฉพาะวิทยุภาคพื้นดินในสามรัฐมิดเวสต์เท่านั้น)'],
      ['Part 3 · Action', 'What will Chloe arrange with the voice actor’s representative?', ['Contact the performer’s agent to arrange digital rights expansion', 'Hire a different voice actor to re-record the podcast ad', 'Edit the thirty-second read to comply with Midwest regulations', 'Send the original audio file straight to podcast networks'], 0, 'ตอบ Contact the performer’s agent to arrange digital rights expansion (Chloe จะโทรหาเอเจนต์ของนักพากย์เพื่อเจรจาขอเพิ่มสิทธิ์เผยแพร่ทางพอดแคสต์ดิจิทัล 6 เดือน)'],
      ['Part 3 · Detail', 'How long is the commercial audio clip?', ['Thirty seconds', 'Fifteen seconds', 'Sixty seconds', 'Six months'], 0, 'ตอบ Thirty seconds (คลิปโฆษณาความยาว 30 วินาทีเท่าเดิม)'],
    ]),

    p3(13, 'l13-p3-6', [
      ['Man', 'uk_m', 'Hi Maya, a freight truck just backed into our studio alley with twelve long cartons of oak acoustic diffuser panels for Live Room A.'],
      ['Woman', 'ca_f', 'Great—wait, our studio carpenters aren’t installing them until Saturday morning, and Live Room A has a jazz quartet recording all day Friday!'],
      ['Man', 'uk_m', 'Definitely can’t stack wood cartons behind the drum kit during a session. What about the unused lounge hallway outside Suite Three?'],
      ['Woman', 'ca_f', 'Perfect, just tell the movers to lean them flat against the hallway brick wall, away from the emergency exit door.'],
    ], null, [
      ['Part 3 · Topic', 'What was just delivered to the recording studio?', ['Wooden acoustic wall panels for Live Room A', 'Acoustic drums for Friday’s jazz quartet session', 'Carpenter workbenches for Saturday’s renovation', 'Spare emergency exit signs for Suite Three'], 0, 'ตอบ Wooden acoustic wall panels for Live Room A (แผงกระจายเสียงไม้โอ๊กสำหรับติดตั้งในห้อง Live Room A จำนวน 12 กล่อง)'],
      ['Part 3 · Detail', 'Why can’t the cartons be placed inside Live Room A today?', ['A musical group has booked the room for Friday', 'Carpenters need open floor space for painting first', 'Freight doors into Live Room A are under repair', 'Live Room A lacks brick walls to support the cartons'], 0, 'ตอบ A musical group has booked the room for Friday (วงดนตรีแจ๊สจองใช้ห้อง Live Room A อัดเสียงตลอดวันศุกร์จึงวางกีดขวางไม่ได้)'],
      ['Part 3 · Instruction', 'Where will the freight crew put the cartons temporarily?', ['Along a corridor brick wall outside Suite Three', 'Behind the reception counter in the front lobby', 'Inside the freight truck until Saturday morning', 'Next to the emergency exit inside Live Room A'], 0, 'ตอบ Along a corridor brick wall outside Suite Three (ให้วางพิงแนวราบชิดผนังอิฐตรงโถงทางเดินหน้า Suite Three โดยเว้นระยะจากประตูทางออกฉุกเฉิน)'],
    ]),

    p3(13, 'l13-p3-7', [
      ['Man', 'us_m', 'Morning, Dana—how did overnight wiring go for the lobby sound beacons?'],
      ['Woman', 'au_f', 'Pretty smoothly, except our electrical crew only got two-thirds of the ceiling junction boxes sealed before dawn.'],
      ['Man', 'us_m', 'Wait—matinee moviegoers arrive at nine A.M.! Are your tall scissor lifts still parked under the main ticket lobby chandelier?'],
      ['Woman', 'au_f', 'Don’t worry—we’re lowering both lifts right now and rolling them behind the velvet storage curtain in West Hallway by eight-thirty sharp.'],
    ], null, [
      ['Part 3 · Role', 'What job does Dana most likely hold at the cinema?', ['A contractor supervising cinema electrical installation', 'A theater usher selling morning matinee tickets', 'An architect designing lobby chandeliers', 'A movie projector repair technician'], 0, 'ตอบ A contractor supervising cinema electrical installation (ผู้หญิงเป็นผู้ควบคุมทีมช่างไฟที่ทำงานเดินสายลำโพงกลางคืนและกำลังเก็บรถกระเช้าก่อนโรงหนังเปิด)'],
      ['Part 3 · Detail', 'How much of the ceiling junction box work finished overnight?', ['Roughly two-thirds of the boxes', 'All lobby wiring except chandeliers', 'Only the West Hallway speakers', 'Less than half of the ceiling panels'], 0, 'ตอบ Roughly two-thirds of the boxes (ทำเสร็จไปสองในสามส่วนก่อนรุ่งสาง)'],
      ['Part 3 · Time', 'By what time will the scissor lifts be cleared from the lobby?', ['8:30 A.M.', '9:00 A.M.', 'Dawn', 'Noon'], 0, 'ตอบ 8:30 A.M. (ยืนยันว่าจะลดระดับและเข็นไปซ่อนหลังม่านที่โถงตะวันตกให้เสร็จภายในเวลา 08:30 น. ตรง)'],
    ]),

    p3(13, 'l13-p3-8', [
      ['Man1', 'uk_m', 'Okay everyone, we just timed our dry run of the Metro Airlines campaign pitch, and we ran eleven minutes over our twenty-minute limit!'],
      ['Man2', 'us_m2', 'Whoa—their marketing committee is strict about cutting off presenters on time. Which section dragged on longest?'],
      ['Woman', 'ca_f', 'Definitely the forty-slide consumer survey breakdown—we spent nearly twelve minutes reading raw age-group bar charts!'],
      ['Man1', 'uk_m', 'Agreed. Why not condense those survey stats into three crisp headline slides and drop the raw tables into an appendix handout?'],
      ['Woman', 'ca_f', 'Love that! Let’s trim the deck down to eighteen slides total so we save five minutes for client Q&A.'],
    ], null, [
      ['Part 3 · Problem', 'What issue occurred during the ad agency’s rehearsal?', ['The presentation exceeded its allotted twenty-minute slot', 'Metro Airlines rejected the consumer survey graphics', 'Raw data slides failed to display on the conference screen', 'Client executives requested five fewer minutes for Q&A'], 0, 'ตอบ The presentation exceeded its allotted twenty-minute slot (ซ้อมนำเสนอแล้วใช้เวลาเกินกำหนด 20 นาทีไปถึง 11 นาที)'],
      ['Part 3 · Detail', 'Which part of the pitch consumed the most speaking time?', ['Detailed charts from a consumer demographic survey', 'Airline brand logo animations at the opening', 'Media buying cost tables near the conclusion', 'Questions from the agency’s creative committee'], 0, 'ตอบ Detailed charts from a consumer demographic survey (ส่วนวิเคราะห์ผลสำรวจผู้บริโภค 40 สไลด์ที่อ่านกราฟแท่งแยกตามช่วงอายุใช้เวลาไปเกือบ 12 นาที)'],
      ['Part 3 · Decision', 'How will the team shorten the slide deck?', ['By summarizing key survey insights and printing full tables as handouts', 'By speaking faster during the airline commercial storyboard', 'By removing the question-and-answer segment completely', 'By emailing all forty raw data slides after the pitch'], 0, 'ตอบ By summarizing key survey insights and printing full tables as handouts (ย่อสถิติสำรวจเหลือแค่สไลด์หัวข้อหลัก 3 แผ่น ส่วนตารางดิบใส่ไว้ในเอกสารแจกภาคผนวก)'],
    ]),

    p3(13, 'l13-p3-9', [
      ['Woman', 'us_f', 'Hey Omar, look at Editing Bay Two’s external RAID storage tower—the third drive bay light has been blinking amber since nine o’clock!'],
      ['Man', 'au_m', 'Yikes—an amber LED on that array means a failing disk sector! Please tell me today’s raw camera dailies are backed up somewhere else!'],
      ['Woman', 'us_f', 'Yes, the camera cards haven’t been wiped yet, plus yesterday’s timeline synced to Cloud Archive—Wait, today’s morning drone shots are ONLY on that drive!'],
      ['Man', 'au_m', 'Stop editing on that array immediately and mirror today’s drone folder onto Vault Server Two before we power-cycle Bay Three!'],
    ], null, [
      ['Part 3 · Problem', 'What warning did the woman notice on Editing Bay Two’s storage tower?', ['An indicator light flashing amber on Drive Bay Three', 'Cloud Archive disconnected during morning video upload', 'Yesterday’s camera cards were accidentally erased', 'Morning drone footage failed to import into editing software'], 0, 'ตอบ An indicator light flashing amber on Drive Bay Three (ไฟสัญญาณที่ช่องไดรฟ์ 3 กะพริบสีส้มเตือนความเสี่ยงฮาร์ดดิสก์เสียตั้งแต่เก้าโมง)'],
      ['Part 3 · Meaning', 'What does the man imply when he says, "Please tell me today’s raw camera dailies are backed up somewhere else!"?', ['He is alarmed that uncopied footage could be permanently lost', 'He wants the woman to wipe older camera cards for space', 'He forgot how to access Cloud Archive from Bay Two', 'He expects Vault Server Two to copy files automatically'], 0, 'ตอบ He is alarmed that uncopied footage could be permanently lost (เขาตกใจและกังวลว่าไฟล์กล้องถ่ายทำวันนี้อาจสูญหายถ้ายังไม่มีสำเนาสำรองที่อื่น)'],
      ['Part 3 · Action', 'What should the woman do right away?', ['Copy the morning drone files over to Vault Server Two', 'Restart the external RAID tower before copying footage', 'Re-shoot today’s drone footage with fresh camera cards', 'Upload yesterday’s timeline to Cloud Archive'], 0, 'ตอบ Copy the morning drone files over to Vault Server Two (ให้หยุดตัดต่อบนไดรฟ์นั้นทันทีและรีบคัดลอกโฟลเดอร์ภาพโดรนช่วงเช้าไปเก็บที่ Vault Server Two ก่อน)'],
    ]),

    p3(13, 'l13-p3-10', [
      ['Woman', 'uk_f', 'Hi Mark, our theater ushers asked about the new lobby assistive-listening headsets now that Cinema One has Dolby Atmos speakers installed.'],
      ['Man', 'us_m', 'Good timing! The updated infrared transmitters mount right beneath the projection glass and sync straight from the clean dialogue channel on our cinema processor.'],
      ['Woman', 'uk_f', 'Oh nice—so guests using neck loops or headsets won’t get muddied sound effects drowning out actors’ voices?'],
      ['Man', 'us_m', 'Exactly—pure crisp dialogue. Let’s train your ushers before Friday’s matinee on pairing the fresh rechargeable earpieces at the coat check counter.'],
    ], null, [
      ['Part 3 · Benefit', 'What advantage do the upgraded assistive-listening transmitters offer guests?', ['They deliver isolated spoken dialogue free from loud effects', 'They automatically recharge inside theater cup holders', 'They let guests switch between Cinema One and Cinema Two', 'They connect directly to visitors’ personal smartphones'], 0, 'ตอบ They deliver isolated spoken dialogue free from loud effects (ส่งสัญญาณตรงจากช่องเสียงพูดที่คมชัดโดยไม่มีเสียงเอฟเฟกต์ดังกลบ)'],
      ['Part 3 · Detail', 'Where are the new infrared transmitters installed?', ['Below the cinema projection booth window', 'Beside the main lobby coat check desk', 'Inside velvet seating armrests in Row A', 'Directly behind Cinema One’s ceiling speakers'], 0, 'ตอบ Below the cinema projection booth window (ติดตั้งไว้ใต้กระจกห้องฉายภาพยนตร์พอดี)'],
      ['Part 3 · Action', 'What will happen before Friday’s afternoon screening?', ['Theater ushers will learn how to pair the rechargeable headsets', 'Audiences will test neck loops during a preview gala', 'Sound engineers will move transmitters to the ticket desk', 'Lobby staff will replace older infrared receivers'], 0, 'ตอบ Theater ushers will learn how to pair the rechargeable headsets (จะฝึกอบรมพนักงานต้อนรับก่อนรอบบ่ายวันศุกร์เรื่องการจับคู่หูฟังรุ่นชาร์จแบตที่เคาน์เตอร์ฝากของ)'],
    ]),

    p3(13, 'l13-p3-11', [
      ['Woman', 'ca_f', 'Lucas, trouble in post-production—Color Suite C’s laser projector bulb just burned out mid-session, and the replacement part won’t arrive until five!'],
      ['Man', 'us_m2', 'Uh-oh. That affects the commercial client booked at three o’clock, right? Wait—didn’t they only need final voice-over dubbing for their French spot?'],
      ['Woman', 'ca_f', 'Yes, they didn’t even need color grading today! Let’s see which suite is completely unbooked during the three-to-five window and handles vocal dubbing!'],
      ['Man', 'us_m2', 'Look at the booking grid—the vocal booth at the bottom is wide open! Let’s shift them there and notify our engineer!'],
    ], doc('schedule', 'Soundwave Post — Today’s 3:00–5:00 P.M. Suite Board', [['Status', 'Afternoon Room Assignments']], [
      tbl(
        ['Suite', '3:00–5:00 P.M. Booking', 'Primary Use', 'Engineer'],
        [
          ['Mix Stage A', 'Feature Film Trailer', 'Surround Mixing', 'Omar K.'],
          ['Foley Room B', 'Animated Short SFX', 'Sound Effects', 'Priya N.'],
          ['Color Suite C', 'French Ad Voice Dub', 'Color & Review', 'Toby H.'],
          ['ADR Booth D', 'Available / Open', 'Voice Dubbing', 'Unassigned'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Where will the 3:00 P.M. French ad session be relocated?', ['ADR Booth D', 'Mix Stage A', 'Foley Room B', 'Color Suite C'], 0, 'ตอบ ADR Booth D (ห้อง Color Suite C หลอดโปรเจกเตอร์ขาด และงาน 15:00 น. เป็นการพากย์เสียง ซึ่งตารางแสดงว่า ADR Booth D ว่างอยู่และรองรับงานพากย์เสียงพอดี)'],
      ['Part 3 · Cause', 'Why can’t the client use Color Suite C this afternoon?', ['Its projection lamp burned out and awaits replacement', 'Engineer Toby H. took off early for an equipment pickup', 'Surrounding foley sound effects leaked into the room', 'French commercial audio files failed to load properly'], 0, 'ตอบ Its projection lamp burned out and awaits replacement (หลอดไฟโปรเจกเตอร์เลเซอร์ขาดกลางคันและอะไหล่จะมาถึงห้าโมงเย็น)'],
      ['Part 3 · Time', 'When is the replacement projector part expected to arrive?', ['At 5:00 P.M.', 'At 3:00 P.M.', 'At noon', 'Tomorrow morning'], 0, 'ตอบ At 5:00 P.M. (ผู้หญิงระบุว่าอะไหล่ทดแทนจะมาไม่ถึงจนกว่าจะ 17:00 น.)'],
    ]),

    p3(13, 'l13-p3-12', [
      ['Man', 'au_m', 'Hannah, BrightPath Energy just emailed—their CFO trimmed our quarterly ad campaign budget from sixty thousand dollars down to forty-eight thousand!'],
      ['Woman', 'uk_f2', 'A twelve-thousand-dollar cut? Wait—that’s the exact amount we allocated for city bus-shelter transit posters! Should we drop print posters completely to save our video and cinema spots?'],
      ['Man', 'au_m', 'Yes! Better yet, their marketing director asked whether we could shift four thousand out of cinema pre-roll into podcast host reads since commuter podcast listening surged.'],
      ['Woman', 'uk_f2', 'Easy math—cutting transit posters removes twelve thousand, and sliding four thousand over brings podcast ads up nicely while keeping total spend right at forty-eight thousand!'],
    ], doc('budget', 'BrightPath Energy — Q3 Ad Media Allocation', [['Original Total', '$60,000 Approved Draft']], [
      box('Channel Spend Breakdown', [
        '• Cinema Pre-Roll Video — $22,000 (Regional theater screens)',
        '• Social Short-Form Video — $18,000 (Targeted mobile feeds)',
        '• Transit Bus Posters — $12,000 (Downtown commuter shelters)',
        '• Podcast Host Reads — $8,000 (Business & tech shows)',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. After the speaker’s adjustments, how much will be allocated to Podcast Host Reads?', ['$12,000', '$8,000', '$18,000', '$16,000'], 0, 'ตอบ $12,000 (เดิม Podcast Host Reads ตั้งงบไว้ $8,000 แล้วโยกงบจาก Cinema Pre-Roll เพิ่มเข้ามาอีก $4,000 รวมเป็น $12,000)'],
      ['Part 3 · Decision', 'Which advertising channel is being eliminated entirely?', ['Transit Bus Posters', 'Cinema Pre-Roll Video', 'Social Short-Form Video', 'Podcast Host Reads'], 0, 'ตอบ Transit Bus Posters (ตัดงบสื่อโปสเตอร์ป้ายรถเมล์ $12,000 ออกทั้งหมดเพื่อให้สอดคล้องกับงบใหม่ที่ถูกลดลง)'],
      ['Part 3 · Cause', 'Why does the client want greater investment in podcast commercials?', ['Listenership among commuting audiences has grown strongly', 'Transit shelter poster permits expired last month', 'Social short-form video spots exceeded production limits', 'Cinema pre-roll ads failed to finish audio mixing'], 0, 'ตอบ Listenership among commuting audiences has grown strongly (ยอดผู้ฟังพอดแคสต์ในกลุ่มคนเดินทางพุ่งสูงขึ้น)'],
    ]),

    p3(13, 'l13-p3-13', [
      ['Woman', 'us_f2', 'Bad timing, Trevor—customs just held the steel ceiling brackets for Screen Two’s Dolby Atmos speakers until next Monday!'],
      ['Man', 'uk_m', 'Ugh, we can’t delay the entire theater overhaul! Let’s check our multiplex phase card—Screen One’s laser projection finished yesterday, right?'],
      ['Woman', 'us_f2', 'Yes, Screen One is spotless. What if we pull the Screen Three crew forward to start May 12 on schedule, while bumping Screen Two behind Screen Three?'],
      ['Man', 'uk_m', 'Smart pivot! That way the contractors stay busy installing recliners and subwoofers on Screen Three while Screen Two’s brackets clear customs!'],
    ], doc('schedule', 'CineMax Downtown — Multiplex Upgrade Phases', [['Timeline', 'May Renovation Plan']], [
      lst([
        '• Phase 1 (Screen 1): IMAX Laser Retrofit — Completed May 10',
        '• Phase 2 (Screen 2): Dolby Atmos Ceiling Array — May 12–14',
        '• Phase 3 (Screen 3): Recliner Seats & Subwoofers — May 15–17',
        '• Phase 4 (Lobby Mezzanine): Acoustic Lounge Panels — May 18–20',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which upgrade phase will begin earlier than originally printed?', ['Phase 3 (Screen 3)', 'Phase 1 (Screen 1)', 'Phase 2 (Screen 2)', 'Phase 4 (Lobby Mezzanine)'], 0, 'ตอบ Phase 3 (Screen 3) (ตัวยึดลำโพงของ Screen 2 ติดด่านศุลกากรถึงวันจันทร์หน้า จึงเลื่อนงานของ Screen 3 เข้ามาทำแทนในวันที่ 12 พ.ค.)'],
      ['Part 3 · Problem', 'What caused the delay on Screen Two’s sound upgrade?', ['Imported ceiling mounting hardware was held at customs', 'Recliner seating deliveries arrived damaged', 'IMAX laser projectors required extra calibration', 'Electrical permits for ceiling arrays expired'], 0, 'ตอบ Imported ceiling mounting hardware was held at customs (ตัวยึดเพดานเหล็กสำหรับลำโพง Dolby Atmos ติดค้างอยู่ที่ศุลกากรจนถึงวันจันทร์)'],
      ['Part 3 · Detail', 'Which area of the multiplex has already finished renovation?', ['Screen 1', 'Screen 2', 'Screen 3', 'Lobby Mezzanine'], 0, 'ตอบ Screen 1 (ป้ายระบุว่า Phase 1 Screen 1 เสร็จสมบูรณ์แล้วเมื่อวันที่ 10 พ.ค.)'],
    ]),

    // Set 13 Part 4 (10 Talks: 1-7 null doc, 8-10 graphic doc; 45-85 words each)
    p4(13, 'l13-p4-1', 'the following recorded telephone message', 'ca_m',
      'You have reached Soundwave Mastering Studios. Our daytime reception desk answers calls Monday through Friday from nine A.M. to six P.M. For independent artists seeking overnight mixing blocks between midnight and six A.M., discounted off-peak studio rates apply automatically through our online calendar. Before uploading vocal or drum stems for mastering, please label every WAV track with exact tempo and sample rate. Press one for booking assistance.',
      null, [
        ['Part 4 · Purpose', 'What does this recorded message explain?', ['Studio desk hours, night discounts, and file upload rules', 'New retail prices for studio condenser microphones', 'Directions to Soundwave Mastering’s downtown building', 'Cancellation policies for weekend vocal sessions'], 0, 'ตอบ Studio desk hours, night discounts, and file upload rules (แจ้งเวลาทำการแผนกต้อนรับ ส่วนลดช่วงกลางคืน และวิธีตั้งชื่อไฟล์เสียงก่อนอัปโหลด)'],
        ['Part 4 · Detail', 'When do reduced off-peak studio rates apply?', ['Between midnight and 6:00 A.M.', 'Monday through Friday mornings', 'Between 9:00 A.M. and 6:00 P.M.', 'Every Sunday afternoon'], 0, 'ตอบ Between midnight and 6:00 A.M. (อัตราค่าบริการช่วงนอกเวลาที่มีส่วนลดใช้ในช่วงเที่ยงคืนถึงหกโมงเช้า)'],
        ['Part 4 · Instruction', 'What must musicians include when naming audio tracks?', ['Tempo and sample rate details', 'Recording engineer license numbers', 'Requested microphone brand models', 'Credit card invoice confirmation codes'], 0, 'ตอบ Tempo and sample rate details (ให้ตั้งชื่อไฟล์ WAV ทุกแทร็กพร้อมระบุจังหวะ tempo และค่า sample rate ให้ชัดเจน)'],
      ]),

    p4(13, 'l13-p4-2', 'the following office announcement', 'us_f',
      'Attention everyone on the creative and account teams. Tomorrow morning’s final rehearsal for our automotive agency pitch moves up thirty minutes to nine-thirty A.M. in the Skyview Boardroom. Please help keep the third-floor lounge completely quiet between ten and noon today while our video editors capture clean executive voice-over tracks next door. Fresh coffee and sandwiches will arrive in the kitchen pantry around one o’clock.',
      null, [
        ['Part 4 · Detail', 'What scheduling change is announced for tomorrow’s pitch rehearsal?', ['It will start thirty minutes earlier at 9:30 A.M.', 'It is shifting from the Skyview Boardroom to the third floor', 'Video editors will lead the rehearsal instead of account staff', 'The automotive client rescheduled the pitch for afternoon'], 0, 'ตอบ It will start thirty minutes earlier at 9:30 A.M. (การซ้อมนำเสนอครั้งสุดท้ายพรุ่งนี้เลื่อนเวลาขึ้นมาเร็วขึ้น 30 นาทีเป็น 09:30 น.)'],
        ['Part 4 · Request', 'Why should staff keep the third-floor lounge quiet from ten to noon?', ['Video editors are recording executive narration in an adjoining space', 'Automotive executives are touring the agency floors', 'Audio engineers are calibrating conference room speakers', 'New acoustic panels are being drilled into lounge walls'], 0, 'ตอบ Video editors are recording executive narration in an adjoining space (ทีมตัดต่อกำลังอัดเสียงบรรยายของผู้บริหารอยู่ห้องติดกันระหว่าง 10 โมงถึงเที่ยง)'],
        ['Part 4 · Detail', 'When will lunch refreshments be set out in the pantry?', ['Around 1:00 P.M.', 'At 9:30 A.M.', 'Before 10:00 A.M.', 'At noon'], 0, 'ตอบ Around 1:00 P.M. (กาแฟสดและแซนด์วิชจะมาส่งที่ห้องครัวประมาณ 13:00 น.)'],
      ]),

    p4(13, 'l13-p4-3', 'the following radio advertisement', 'uk_m',
      'Ready to experience summer blockbusters the way sound designers intended? Visit the newly renovated CineMax Downtown, featuring brand-new sixty-four-channel overhead surround arrays and custom acoustic velvet wall panels in every auditorium! Feel every footstep and whisper with zero echo—even from the back balcony row. Book tickets online before Friday using code SOUND50 to enjoy half-price afternoon matinee seats all opening weekend. Reserve yours today at cinemax-downtown dot com!',
      null, [
        ['Part 4 · Topic', 'What improvement is CineMax Downtown promoting?', ['Upgraded surround audio systems and soundproofing panels', 'Expanded gourmet popcorn and espresso lobby bars', 'Free downtown garage parking for weekend visitors', 'Newly constructed outdoor rooftop movie screens'], 0, 'ตอบ Upgraded surround audio systems and soundproofing panels (โปรโมตระบบเสียงรอบทิศทาง 64 ช่องสัญญาณเหนือศีรษะและแผงผนังกำมะหยี่ซับเสียงแบบใหม่)'],
        ['Part 4 · Promotion', 'What discount is available with promo code SOUND50?', ['Fifty percent off afternoon weekend matinee tickets', 'Complimentary upgrades to balcony VIP recliners', 'Half-price movie soundtracks sold in the lobby', 'Free weekday evening admission before Friday'], 0, 'ตอบ Fifty percent off afternoon weekend matinee tickets (ลดราคา 50% สำหรับรอบฉายช่วงบ่ายตลอดสุดสัปดาห์เปิดฉายเมื่อจองก่อนวันศุกร์)'],
        ['Part 4 · Action', 'Where should listeners go to redeem the offer?', ['To the theater’s website', 'To the downtown box office window', 'To a local radio station counter', 'To the cinema mezzanine lounge'], 0, 'ตอบ To the theater’s website (ให้จองออนไลน์ที่เว็บไซต์ cinemax-downtown dot com)'],
      ]),

    p4(13, 'l13-p4-4', 'the following excerpt from a meeting', 'au_f',
      'Before wrapping our post-production sync, please verify every film editor follows our updated file-naming standard starting tonight. Name exported rough cuts with Project Code, Scene Number, and Date in eight digits—never use words like Final or Revised, since those confuse overnight render servers. Also remember automated cloud archiving runs at midnight sharp, so save active timelines inside the Shared Vault folder before logging off.',
      null, [
        ['Part 4 · Purpose', 'What rule is the supervisor introducing for film editors?', ['A strict naming convention for exported video edits', 'Earlier midnight shift hours for post-production teams', 'Manual tape backups replacing automated cloud servers', 'Weekly training sessions on color grading plugins'], 0, 'ตอบ A strict naming convention for exported video edits (กำหนดมาตรฐานการตั้งชื่อไฟล์ตัดต่อฉบับร่างด้วยรหัสโปรเจกต์ หมายเลขฉาก และวันที่ 8 หลัก)'],
        ['Part 4 · Warning', 'Why must editors avoid labeling files with the word "Final"?', ['It disrupts the automated overnight rendering servers', 'Clients mistake rough cuts for approved releases', 'Cloud storage compresses files containing text tags', 'Sound engineers cannot import files with long titles'], 0, 'ตอบ It disrupts the automated overnight rendering servers (คำอย่าง Final หรือ Revised ทำให้เซิร์ฟเวอร์เรนเดอร์ช่วงกลางคืนสับสน)'],
        ['Part 4 · Detail', 'At what time does the automated cloud backup begin?', ['At midnight', 'At 8:00 P.M.', 'Every morning at six', 'Right after this meeting'], 0, 'ตอบ At midnight (ระบบสำรองข้อมูลขึ้นคลาวด์อัตโนมัติเริ่มทำงานตรงเวลาเที่ยงคืน)'],
      ]),

    p4(13, 'l13-p4-5', 'the following voicemail message', 'us_m2',
      'Hi Elena, this is Marcus from account services calling at four-twenty. Our beverage client’s legal counsel just flagged one tiny snag in the thirty-second television spot we mixed this morning—they must add a spoken zero-sugar disclaimer at the tail end to satisfy broadcast regulations. Could your sound booth bring our voice actor back for a quick fifteen-minute pickup session tomorrow morning before we ship master tapes to the network?',
      null, [
        ['Part 4 · Problem', 'Why does the television commercial require an additional recording?', ['Client lawyers requested a mandatory nutritional disclaimer line', 'Background jingle music drowned out the closing slogan', 'Broadcast networks rejected the thirty-second file format', 'The beverage company changed its brand tagline today'], 0, 'ตอบ Client lawyers requested a mandatory nutritional disclaimer line (ฝ่ายกฎหมายของลูกค้าแจ้งว่าต้องเพิ่มเสียงพูดข้อความปฏิเสธความรับผิดชอบเรื่องไม่มีน้ำตาลตอนท้ายคลิปตามกฎระเบียบ)'],
        ['Part 4 · Request', 'What does Marcus ask Elena to arrange tomorrow morning?', ['A brief fifteen-minute recording pickup with the voice actor', 'Early shipment of unedited master tapes to the network', 'A conference call with the beverage client’s legal counsel', 'Full remixing of the commercial’s background score'], 0, 'ตอบ A brief fifteen-minute recording pickup with the voice actor (ขอให้จองคิวนักพากย์กลับมาอัดซ่อมสั้นๆ 15 นาทีในเช้าวันพรุ่งนี้)'],
        ['Part 4 · Time', 'When did Marcus place this phone call?', ['At 4:20 P.M.', 'Early this morning', 'At noon', 'Tomorrow morning'], 0, 'ตอบ At 4:20 P.M. (ผู้พูดระบุเวลาโทรคือ 16:20 น. พร้อมกล่าวถึงงานที่มิกซ์ไปเมื่อเช้านี้)'],
      ]),

    p4(13, 'l13-p4-6', 'the following orientation talk', 'uk_f',
      'Welcome, autumn interns, to Harbor Sound Studios! Before touching any patch bay or console inside Studios A through C, remember one golden house rule: zero coffee mugs, water bottles, or soda cans ever cross our control room thresholds! Last year, one tipped espresso ruined six fader banks and knocked Studio B offline for two weeks. Keep drinks at the hallway lounge bar, and always return condenser microphones to their padded wooden lockers after sessions.',
      null, [
        ['Part 4 · Rule', 'What is strictly forbidden inside the studio control rooms?', ['Bringing any open or closed beverages near consoles', 'Connecting personal headphones to studio patch bays', 'Entering Studios A through C without a lead engineer', 'Leaving wooden microphone lockers unlocked overnight'], 0, 'ตอบ Bringing any open or closed beverages near consoles (ห้ามนำกาแฟ ขวดน้ำ หรือเครื่องดื่มทุกชนิดเข้าไปในห้องควบคุมเสียงเด็ดขาด)'],
        ['Part 4 · Meaning', 'Why does the speaker mention last year’s spilled espresso?', ['To illustrate how costly beverage accidents can be to equipment', 'To announce new espresso machines in the hallway lounge bar', 'To explain why Studio B was recently redesigned', 'To remind interns to clean studio carpets every evening'], 0, 'ตอบ To illustrate how costly beverage accidents can be to equipment (ยกตัวอย่างเอสเพรสโซหกใส่แผงควบคุมจนสตูดิโอ B ปิดซ่อมสองสัปดาห์เพื่อย้ำความสำคัญของกฎนี้)'],
        ['Part 4 · Instruction', 'What must interns do after recording sessions finish?', ['Place condenser mics back into padded wooden lockers', 'Wipe console faders with dry microfiber cloths', 'Lock the hallway lounge refreshment bar', 'Disconnect patch-bay cables in Studio B'], 0, 'ตอบ Place condenser mics back into padded wooden lockers (ให้นำไมโครโฟนคอนเดนเซอร์เก็บกลับเข้าตู้ไม้บุโฟมหลังจบงานทุกครั้ง)'],
      ]),

    p4(13, 'l13-p4-7', 'the following industry radio broadcast', 'ca_f',
      'Welcome back to Media Pulse. Fresh quarterly ad-agency data reveals a dramatic shift in how regional consumer brands spend digital budgets. Instead of buying millions of tiny web banner ads that commuters scroll past, marketing directors are funneling twenty-eight percent more capital into theater pre-roll commercials and short branded documentaries. Why? Viewers sitting in dark cinema halls recall brand storylines three times more accurately than hurried mobile shoppers!',
      null, [
        ['Part 4 · Trend', 'According to the broadcast, how are consumer brands shifting ad spending?', ['Investing more heavily in cinema ads and short brand films', 'Replacing theater pre-roll slots with mobile web banners', 'Cutting quarterly agency budgets by twenty-eight percent', 'Focusing exclusively on highway commuter billboards'], 0, 'ตอบ Investing more heavily in cinema ads and short brand films (เพิ่มงบโฆษณาในโรงภาพยนตร์และสารคดีสั้นของแบรนด์มากขึ้นถึง 28% แทนแบนเนอร์เว็บขนาดเล็ก)'],
        ['Part 4 · Cause', 'Why do advertisers favor theater commercials over mobile banners?', ['Seated moviegoers remember narrative messages far better', 'Theater pre-roll production costs less than banner graphics', 'Mobile platforms blocked commuter brand advertisements', 'Documentaries reach larger weekend retail crowds'], 0, 'ตอบ Seated moviegoers remember narrative messages far better (ผู้ชมที่นั่งอยู่ในโรงหนังที่มืดสนิทจดจำเรื่องราวของแบรนด์ได้แม่นยำกว่าผู้ใช้งานมือถือถึงสามเท่า)'],
        ['Part 4 · Detail', 'How much did spending increase in those preferred video channels?', ['By 28 percent', 'By 3 percent', 'By 50 percent', 'By 12 percent'], 0, 'ตอบ By 28 percent (จัดสรรเงินทุนเพิ่มมากขึ้น 28%)'],
      ]),

    p4(13, 'l13-p4-8', 'the following client briefing and rate table', 'us_m',
      'Thanks for calling NorthStar Audio, Maya—let’s check our studio rate sheet for your four-hour independent documentary surround mix next Tuesday. You mentioned wanting our senior engineer on the board, so look at the package marked Yes for Engineer Included. Even better, Tuesday falls under our weekday off-peak member tier, which shaves fifteen dollars off each billed hour across any package meeting minimum session hours!',
      doc('table', 'NorthStar Audio — Studio Hourly Rate Card', [['Note', 'Weekday Member Discount: -$15/hr']], [
        tbl(
          ['Session Package', 'Standard Rate', 'Engineer Included?', 'Min Booking'],
          [
            ['Vocal Booth Dry', '$65 / hr', 'No (Self-Operate)', '2 Hours'],
            ['Podcast Mastering', '$95 / hr', 'Yes', '2 Hours'],
            ['Full Band Tracking', '$140 / hr', 'No (Add $40/hr)', '4 Hours'],
            ['Surround Film Mix', '$180 / hr', 'Yes', '3 Hours'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. What discounted hourly rate will Maya pay on Tuesday?', ['$165 per hour', '$180 per hour', '$125 per hour', '$80 per hour'], 0, 'ตอบ $165 per hour (ลูกค้าจอง Surround Film Mix ราคาปกติ $180/ชม. และได้ส่วนลดสมาชิกวันธรรมดา -$15/ชม. เหลือ $165/ชม.)'],
        ['Part 4 · Detail', 'How many hours does Maya intend to book?', ['Four hours', 'Two hours', 'Three hours', 'Five hours'], 0, 'ตอบ Four hours (ผู้พูดเอ่ยถึงเซสชันมิกซ์เสียงสารคดีความยาว 4 ชั่วโมงในวันอังคารหน้า)'],
        ['Part 4 · Feature', 'Which other package includes an audio engineer in its base hourly price?', ['Podcast Mastering', 'Vocal Booth Dry', 'Full Band Tracking', 'None of the others'], 0, 'ตอบ Podcast Mastering (ตารางแสดงว่าแพ็กเกจเดียวอีกตัวที่ระบุ Engineer Included? เป็น Yes คือ Podcast Mastering)'],
      ]),

    p4(13, 'l13-p4-9', 'the following team update and checklist', 'au_m',
      'Quick morning huddle, Pitch Team—our client moves up tomorrow’s shoe commercial meeting by an hour, so look sharp on today’s Deliverable Checklist! First, heavy cardstock jammed the color copier at nine, meaning we’ll present Printed Storyboards directly on shared iPads instead of paper boards. Meanwhile, please help Carla finish our most urgent deliverable—the one carrying the eleven-thirty morning deadline—right after this huddle!',
      doc('checklist', 'Footwear Pitch — Today’s Final Deliverables', [['Client', 'StridePro Athletics']], [
        lst([
          '• Competitor Audit Slides — Owner: Leo | Due: 1:00 P.M.',
          '• 15-Second Cutdown Reel — Owner: Carla | Due: 11:30 A.M.',
          '• Printed Storyboards — Owner: Priya | Due: 2:00 P.M.',
          '• Final Production Cost Sheet — Owner: Maya | Due: 4:00 P.M.',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which deliverable must the team prioritize right now?', ['15-Second Cutdown Reel', 'Competitor Audit Slides', 'Printed Storyboards', 'Final Production Cost Sheet'], 0, 'ตอบ 15-Second Cutdown Reel (ผู้พูดให้รีบช่วย Carla ทำชิ้นงานที่มีกำหนดส่งเร็วที่สุดเวลา 11:30 A.M. ซึ่งในรายการคือ 15-Second Cutdown Reel)'],
        ['Part 4 · Problem', 'Why are Printed Storyboards switching to digital tablets?', ['Thick paper jammed the office color printer', 'StridePro requested eco-friendly paperless slides', 'Priya miscalculated the storyboard print margins', 'The client moved the pitch completely online'], 0, 'ตอบ Thick paper jammed the office color printer (กระดาษแข็งติดในเครื่องถ่ายเอกสารสีเมื่อตอนเก้าโมงเช้า จึงเปลี่ยนไปพรีเซนต์ผ่านไอแพดแทน)'],
        ['Part 4 · Detail', 'Who owns the Final Production Cost Sheet?', ['Maya', 'Leo', 'Priya', 'Carla'], 0, 'ตอบ Maya (รายการสุดท้ายระบุ Owner คือ Maya กำหนดส่ง 4:00 P.M.)'],
      ]),

    p4(13, 'l13-p4-10', 'the following technical briefing and log', 'uk_f2',
      'Afternoon, Audio Crew—let’s inspect our Cinema Five calibration readings before tonight’s festival opening! Sub-Bass, Midrange Dialogue, and Overhead Ceiling speakers all passed within two decibels of target! Look closely at the one row flagged Adjust, though: left-side ambient reflections boosted volume four decibels hotter than our target curve. Please dial down that wall array amp before doors open at six so action scenes stay balanced!',
      doc('report', 'Cinema 5 — Pre-Premiere Acoustic Test Log', [['Target', '85 dB Reference Curve']], [
        box('Zone Calibration Results', [
          '• Sub-Bass (40 Hz): 85.2 dB — PASS (Target 85 dB ± 2)',
          '• Midrange Dialogue (1 kHz): 84.8 dB — PASS (Target 85 dB ± 2)',
          '• Surround Left / Right Walls: 89.1 dB — ADJUST (+4.1 dB High)',
          '• Ceiling Overhead Array: 85.5 dB — PASS (Target 85 dB ± 2)',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which frequency zone needs attenuation before tonight’s screening?', ['Surround Left / Right Walls', 'Sub-Bass (40 Hz)', 'Midrange Dialogue (1 kHz)', 'Ceiling Overhead Array'], 0, 'ตอบ Surround Left / Right Walls (บันทึกการทดสอบขึ้นสถานะ ADJUST ที่ Surround Left / Right Walls เนื่องจากดังเกินเป้าไป +4.1 เดซิเบล)'],
        ['Part 4 · Cause', 'What caused the excess sound pressure in that zone?', ['Reflective sound bouncing off side theater walls', 'Overpowered ceiling speakers mounted near the screen', 'Defective wiring inside the forty-hertz subwoofers', 'Incorrect settings on the dialogue microphone processor'], 0, 'ตอบ Reflective sound bouncing off side theater walls (เสียงสะท้อนด้านข้างทำให้ระดับความดังพุ่งเกินค่ามาตรฐานไป 4 เดซิเบล)'],
        ['Part 4 · Time', 'By what time must technicians adjust the amplifier?', ['Before 6:00 P.M.', 'Before 8:50 P.M.', 'After tonight’s premiere', 'Tomorrow morning'], 0, 'ตอบ Before 6:00 P.M. (ผู้พูดให้ปรับลดระดับแอมป์ก่อนเปิดประตูให้ผู้ชมเข้าเวลา 18:00 น.)'],
      ]),

    // ==================== SET 14 ====================
    // Themes: EV Fleet Charging Maintenance, Commercial Auto Tire/Body Shop, Municipal Parking Structure
    p1(14, 'l14-p1-1', 'au_m', [
      'A technician wearing gloves is inspecting a charging cable on an electric van.',
      'Delivery drivers are washing parked vans in an outdoor lot.',
      'A mechanic is lifting the hood of a yellow taxi cab.',
      'Several charging posts are being bolted onto a concrete curb.',
    ], 0, 'ตอบ A technician wearing gloves is inspecting a charging cable on an electric van. (ช่างสวมถุงมือกำลังตรวจสอบสายชาร์จที่เสียบอยู่กับรถตู้ไฟฟ้า)'),
    p1(14, 'l14-p1-2', 'us_f', [
      'A clerk is sweeping rubber shavings beside an open garage bay.',
      'Stacked rubber tires stand beside a hydraulic vehicle lift.',
      'Mechanics are rolling tool chests out onto a sunny driveway.',
      'Several pickup trucks are parked outside a brick tire shop.',
    ], 1, 'ตอบ Stacked rubber tires stand beside a hydraulic vehicle lift. (ยางรถยนต์ที่ซ้อนกันหลายกองตั้งอยู่ข้างแท่นยกรถไฮดรอลิกในอู่)'),
    p1(14, 'l14-p1-3', 'uk_m', [
      'Attendants are painting white stall lines across a parking ramp.',
      'Commuters are carrying suitcases toward a garage stairwell.',
      'Vehicles are parked in numbered spaces beneath concrete beams.',
      'A tow truck is backing down an empty parking garage lane.',
    ], 2, 'ตอบ Vehicles are parked in numbered spaces beneath concrete beams. (รถยนต์จอดอยู่ในช่องที่มีหมายเลขกำกับใต้คานคอนกรีตของอาคารจอดรถ)'),
    p1(14, 'l14-p1-4', 'ca_f', [
      'Workers are masking car windows with brown paper tape.',
      'A technician is removing a dented bumper from a delivery van.',
      'Paint cans are arranged along a shelf near a garage window.',
      'A mechanic wearing safety glasses is polishing a car’s front fender.',
    ], 3, 'ตอบ A mechanic wearing safety glasses is polishing a car’s front fender. (ช่างสวมแว่นตานิรภัยกำลังขัดเงาบังโคลนหน้ารถเก๋ง)'),
    p1(14, 'l14-p1-5', 'us_m2', [
      'A driver is reaching from a car window toward a parking ticket dispenser.',
      'A security guard is raising a striped barrier arm manually.',
      'Two motorists are exchanging insurance cards near a toll booth.',
      'Pedestrians are walking past an automated payment kiosk.',
    ], 0, 'ตอบ A driver is reaching from a car window toward a parking ticket dispenser. (คนขับรถยื่นมือออกจากหน้าต่างรถไปกดรับบัตรจอดรถที่ตู้คีออส)'),
    p1(14, 'l14-p1-6', 'uk_f', [
      'Customers are comparing windshield wipers on a wall display.',
      'Service clipboards and tread models sit on a garage reception counter.',
      'A receptionist is handing car keys across a glass partition.',
      'Brochures have fallen off a small rack near the waiting chairs.',
    ], 1, 'ตอบ Service clipboards and tread models sit on a garage reception counter. (คลิปบอร์ดรับงานซ่อมและโมเดลตัวอย่างดอกยางวางอยู่บนเคาน์เตอร์ต้อนรับของอู่)'),

    // Set 14 Part 2 (25 Qs)
    p2(14, 'l14-p2-1', 'au_m', 'us_f', 'Where is the municipal parking garage’s lost-and-found office?', ['Right next to the Level One elevator lobby.', 'Because monthly permit decals expire tomorrow.', 'Up to seventy-two hours after pickup.'], 0, 'ตอบ Right next to the Level One elevator lobby. (ถามตำแหน่งสำนักงานของหาย Where ตอบอยู่ติดกับโถงลิฟต์ชั้น 1)'),
    p2(14, 'l14-p2-2', 'uk_f', 'ca_m', 'Who calibrated the laser wheel-alignment machine in Bay Two?', ['Every six months under warranty.', 'A factory engineer came by early this morning.', 'For heavy commercial cargo vans.'], 1, 'ตอบ A factory engineer came by early this morning. (ถามบุคคล Who ตอบวิศวกรจากโรงงานเข้ามาปรับตั้งค่าเมื่อเช้าตรู่)'),
    p2(14, 'l14-p2-3', 'us_m2', 'au_f', 'When will the high-voltage DC charger at Dock Four be back online?', ['About one hundred fifty kilowatts.', 'Yes, three electric vans need top-ups.', 'As soon as the cooling pump seal arrives tomorrow morning.'], 2, 'ตอบ As soon as the cooling pump seal arrives tomorrow morning. (ถามเวลา When ตอบทันทีที่ซีลปั๊มระบายความร้อนมาส่งพรุ่งนี้เช้า)'),
    p2(14, 'l14-p2-4', 'ca_f', 'uk_m', 'Should we use paintless dent removal or replace the van’s entire side door?', ['Our estimator thinks paintless pulling saves two full days.', 'Yes, the hailstorm dented four fleet sedans.', 'Down in Body Shop Bay Three.'], 0, 'ตอบ Our estimator thinks paintless pulling saves two full days. (ถามทางเลือกระหว่างดึงลักยิ้มหรือเปลี่ยนประตู ตอบผู้ประเมินราคาเห็นว่าการดึงแบบไม่ทำสีประหยัดเวลาได้สองวันเต็ม)'),
    p2(14, 'l14-p2-5', 'uk_m', 'us_f2', 'Why are monthly permit holders being routed to Level Three today?', ['Four dollars per hour for visitors.', 'Crews are applying waterproof sealant across the rooftop deck.', 'Behind the automated entry gate.'], 1, 'ตอบ Crews are applying waterproof sealant across the rooftop deck. (ถามเหตุผล Why ตอบเพราะทีมช่างกำลังทาสารเคลือบกันน้ำบนดาดฟ้า)'),
    p2(14, 'l14-p2-6', 'us_f', 'au_m', 'Hasn’t the city fleet director approved our tire replacement quote yet?', ['No, winter treads run slightly deeper.', 'Twenty-four reinforced cargo tires.', 'Actually, Purchasing is still checking two competitor bids.'], 2, 'ตอบ Actually, Purchasing is still checking two competitor bids. (คำถามปฏิเสธ Hasn’t... ตอบความจริงว่าฝ่ายจัดซื้อยังเช็กใบเสนอราคาเทียบกับอีกสองเจ้าอยู่)'),
    p2(14, 'l14-p2-7', 'ca_m', 'uk_f2', 'How long does it take to charge an electric delivery van from twenty to eighty percent?', ['Around thirty-eight minutes on a fast charger.', 'At the downtown municipal bus depot.', 'Only drivers carrying RFID key fobs.'], 0, 'ตอบ Around thirty-eight minutes on a fast charger. (ถามระยะเวลา How long ตอบประมาณ 38 นาทีเมื่อใช้เครื่องชาร์จเร็ว)'),
    p2(14, 'l14-p2-8', 'au_f', 'us_m', 'Could you move that scraped white sedan into the paint drying booth?', ['Yes, the metallic silver paint arrived on time.', 'Sure—just let me grab the key tag off the board.', 'About three hundred dollars for the bumper.'], 1, 'ตอบ Sure—just let me grab the key tag off the board. (ขอให้ช่วยย้ายรถเข้าห้องอบสี ตอบได้ เดี๋ยวไปหยิบพวงกุญแจจากกระดานก่อน)'),
    p2(14, 'l14-p2-9', 'us_m', 'uk_m', 'The South Exit parking gate arm stayed stuck upright after that courier truck left.', ['Three hundred fifty permit spaces.', 'Every Friday during street sweeping.', 'I’ll inspect the ground loop sensor right after lunch.'], 2, 'ตอบ I’ll inspect the ground loop sensor right after lunch. (บอกเล่าปัญหาไม้กั้นทางออกค้าง ตอบว่าจะไปตรวจเช็กเซนเซอร์ใต้พื้นหลังมื้อเที่ยง)'),
    p2(14, 'l14-p2-10', 'uk_f2', 'ca_f', 'Which automotive vendor supplies our heavy-duty hydraulic floor jacks?', ['Northern Garage Equipment ships all our lift gear.', 'Yes, our alignment rack handles five tons.', 'Inside Bay A beside the air compressor.'], 0, 'ตอบ Northern Garage Equipment ships all our lift gear. (ถามผู้จัดหา Which vendor ตอบบริษัท Northern Garage Equipment)'),
    p2(14, 'l14-p2-11', 'ca_m', 'us_f', 'How many insulated high-voltage glove kits passed this quarter’s safety test?', ['Until Friday afternoon at four.', 'All twelve pairs passed without pinhole leaks.', 'Stored inside the yellow depot cabinet.'], 1, 'ตอบ All twelve pairs passed without pinhole leaks. (ถามจำนวน How many ตอบผ่านทดสอบทั้ง 12 คู่โดยไม่มีรอยรั่ว)'),
    p2(14, 'l14-p2-12', 'au_m', 'uk_f', 'Why don’t we stagger EV van departures so chargers don’t peak at five P.M.?', ['No, electricity rates drop overnight.', 'Sixty-five miles per full battery.', 'Smart idea—that avoids utility demand surcharges completely.'], 2, 'ตอบ Smart idea—that avoids utility demand surcharges completely. (Why don’t we เสนอแนะให้เหลื่อมเวลารถออก ตอบเห็นด้วยเพราะช่วยเลี่ยงค่าไฟช่วงพีคได้ทั้งหมด)'),
    p2(14, 'l14-p2-13', 'us_f2', 'uk_m', 'Where can visitors validate their municipal garage parking tickets?', ['At the customer kiosk inside City Hall’s west entrance.', 'Because street meters close after six P.M.', 'Only for appointments under two hours.'], 0, 'ตอบ At the customer kiosk inside City Hall’s west entrance. (ถามสถานที่สแตมป์บัตรจอดรถ Where ตอบที่ตู้คีออสทางเข้าฝั่งตะวันตกของศาลาว่าการ)'),
    p2(14, 'l14-p2-14', 'uk_m', 'ca_f', 'Aren’t you rotating tires on the three city ambulances this morning?', ['Four winter snow chains per vehicle.', 'No, ambulance fleet priority shifted to tomorrow dawn.', 'Yes, torque specs are posted by the lift.'], 1, 'ตอบ No, ambulance fleet priority shifted to tomorrow dawn. (ถามไม่ได้สลับยางรถพยาบาลเช้านี้หรือ ตอบเลื่อนคิวรถพยาบาลไปเช้ามืดพรุ่งนี้แล้ว)'),
    p2(14, 'l14-p2-15', 'ca_f', 'au_f', 'What time does the commercial body shop’s parts courier make afternoon drop-offs?', ['Mostly replacement mirrors and fenders.', 'Usually right around three-fifteen before rush hour.', 'At the side roll-up service door.'], 1, 'ตอบ Usually right around three-fifteen before rush hour. (ถามเวลา What time ตอบปกติมาส่งช่วงบ่ายสามโมงสิบห้าก่อนรถติด)'),
    p2(14, 'l14-p2-16', 'us_m', 'uk_f', 'Who oversees RFID charging card replacements for overnight delivery drivers?', ['Twenty-two electric cargo vans.', 'Check with Dana in Fleet Dispatch—she activates new fobs.', 'Near the north security turnstile.'], 1, 'ตอบ Check with Dana in Fleet Dispatch—she activates new fobs. (ถามบุคคล Who ตอบให้ถาม Dana ฝ่ายจัดส่งยานพาหนะ ซึ่งเป็นคนเปิดใช้งานการ์ดใหม่)'),
    p2(14, 'l14-p2-17', 'uk_f', 'us_m2', 'How much is the hourly overnight parking cap at the Civic Center Garage?', ['On Levels Two through Four.', 'Twelve dollars flat between six P.M. and seven A.M.', 'Yes, electric chargers include free parking.'], 1, 'ตอบ Twelve dollars flat between six P.M. and seven A.M. (ถามอัตราค่าจอดข้ามคืน How much ตอบเหมาจ่าย $12 ตั้งแต่หกโมงเย็นถึงเจ็ดโมงเช้า)'),
    p2(14, 'l14-p2-18', 'au_f', 'ca_m', 'Did the body shop match the metallic blue tint on that courier van door?', ['Behind the compressed-air paint booth.', 'Nearly—they’re spraying one final clear coat before noon.', 'No, I drove my personal hybrid car today.'], 1, 'ตอบ Nearly—they’re spraying one final clear coat before noon. (ถามว่าเทียบสีฟ้าเมทัลลิกตรงหรือยัง ตอบเกือบเสร็จแล้ว กำลังพ่นเคลือบเงาชั้นสุดท้ายก่อนเที่ยง)'),
    p2(14, 'l14-p2-19', 'us_m2', 'uk_m', 'I heard the city installed solar canopies across the top deck of Oak Parking Garage.', ['Yeah, they shade sixty cars and power the EV chargers below!', 'Pay using the mobile parking app.', 'Look for the green concrete pillar near Exit B.'], 0, 'ตอบ Yeah, they shade sixty cars and power the EV chargers below! (ประโยคบอกเล่าเรื่องหลังคาโซลาร์บนชั้นดาดฟ้า ตอบรับสอดคล้องว่าช่วยบังแดดรถได้ 60 คันและจ่ายไฟให้จุดชาร์จด้วย)'),
    p2(14, 'l14-p2-20', 'ca_m', 'au_m', 'When are the municipal garage’s emergency stairwell lights inspected?', ['Every level has two fire exits.', 'Ask Facilities Lead Ben—he keeps the quarterly safety schedule.', 'With waterproof LED strip fixtures.'], 1, 'ตอบ Ask Facilities Lead Ben—he keeps the quarterly safety schedule. (ถามกำหนดตรวจไฟบันไดหนีไฟ When ตอบเลี่ยงอย่างเป็นธรรมชาติให้ถาม Ben หัวหน้าฝ่ายอาคาร)'),
    p2(14, 'l14-p2-21', 'uk_f2', 'us_f', 'Do you know if there’s an air compressor hose long enough to reach Bay Four?', ['Thirty-five pounds per square inch.', 'Yes, the blue reel mounted on Pillar Six reaches all bays.', 'Before the afternoon tire delivery arrives.'], 1, 'ตอบ Yes, the blue reel mounted on Pillar Six reaches all bays. (ถามหาสายลมยาวพอถึงช่อง 4 ไหม ตอบพอ ม้วนสายสีฟ้าตรงเสา 6 ดึงถึงทุกช่อง)'),
    p2(14, 'l14-p2-22', 'us_f', 'ca_f', 'What time does the tire recycling contractor collect worn truck casings?', ['Stacked along the fenced back yard.', 'Normally around six-thirty A.M. every Wednesday.', 'To be shredded for playground surfacing.'], 1, 'ตอบ Normally around six-thirty A.M. every Wednesday. (ถามเวลา What time ตอบปกติมารับทุกเช้าวันพุธประมาณ 06:30 น.)'),
    p2(14, 'l14-p2-23', 'au_m', 'uk_f2', 'Can you double-check the lug nut torque on those freshly mounted transit van wheels?', ['Sure, let me grab the calibrated torque wrench right now.', 'Yes, all four tires match winter tread rules.', 'In the front customer waiting lounge.'], 0, 'ตอบ Sure, let me grab the calibrated torque wrench right now. (ขอให้ช่วยเช็กแรงขันนอตล้อรถตู้ ตอบได้ เดี๋ยวไปหยิบประแจปอนด์มาเช็กให้เดี๋ยวนี้)'),
    p2(14, 'l14-p2-24', 'uk_m', 'us_m', 'Have we received the supplemental fender brackets from the insurance adjuster yet?', ['About four hundred fifty dollars.', 'Yes, they arrived by courier twenty minutes ago.', 'Because the bumper sensor cracked on impact.'], 1, 'ตอบ Yes, they arrived by courier twenty minutes ago. (ถามว่าได้รับชิ้นส่วนตัวยึดจากฝ่ายเคลมหรือยัง ตอบมาส่งแล้วเมื่อ 20 นาทีก่อน)'),
    p2(14, 'l14-p2-25', 'ca_f', 'au_f', 'Whose diagnostic tablet was left plugged into Charger Post Three?', ['Probably Mateo’s—he was testing ground-fault firmware earlier.', 'Yes, charging speed reads fifty kilowatts.', 'Lock spare tablets inside the supervisor office.'], 0, 'ตอบ Probably Mateo’s—he was testing ground-fault firmware earlier. (ถามความเป็นเจ้าของ Whose ตอบน่าจะเป็นของ Mateo เพราะเขามาทดสอบเฟิร์มแวร์ก่อนหน้านี้)'),

    // Set 14 Part 3 (13 Conversations: 1-10 null doc, 11-13 graphic doc)
    p3(14, 'l14-p3-1', [
      ['Man', 'us_m', 'Hey Priya, Charger Bay Four threw another ground-fault interruption code at five-thirty this morning right when Van Twelve plugged in.'],
      ['Woman', 'ca_f', 'Again? Didn’t we notice that exact error only pops up on damp, foggy mornings?'],
      ['Man', 'us_m', 'Right! Look inside the handle latch—the rubber weather boot has a hairline crack letting morning dew seep onto the pilot pin.'],
      ['Woman', 'ca_f', 'Good diagnosis. Tag Bay Four out of service and let’s swap out the entire cable whip assembly before evening fleet returns.'],
    ], null, [
      ['Part 3 · Problem', 'What issue is affecting Charger Bay Four?', ['Moisture entering a cracked connector triggers safety errors', 'Van Twelve’s battery pack refuses to accept fast charging', 'Utility voltage drops across the fleet depot at dawn', 'Software updates wiped ground-fault error logs'], 0, 'ตอบ Moisture entering a cracked connector triggers safety errors (ปลอกยางกันน้ำที่หัวชาร์จมีรอยร้าวเล็กๆ ทำให้น้ำค้างตอนเช้าซึมเข้าไปเกิดรหัสข้อผิดพลาดไฟรั่ว)'],
      ['Part 3 · Detail', 'When does the charger malfunction typically occur?', ['On humid or foggy mornings', 'Whenever multiple vans charge simultaneously', 'After five-thirty P.M. shift changes', 'During scheduled firmware updates'], 0, 'ตอบ On humid or foggy mornings (มักเกิดขึ้นเฉพาะในเช้าที่อากาศชื้นหรือมีหมอกลง)'],
      ['Part 3 · Action', 'What will the depot technician do about Charger Bay Four?', ['Mark the charger offline and replace the cable assembly', 'Dry the connector pins with compressed air and resume use', 'Move Van Twelve permanently to another charging depot', 'Wait for an outside electrician to inspect depot wiring'], 0, 'ตอบ Mark the charger offline and replace the cable assembly (ติดป้ายงดใช้งานช่อง 4 แล้วเปลี่ยนชุดสายชาร์จใหม่ทั้งเส้นก่อนรถกลับเข้าอู่ตอนเย็น)'],
    ]),

    p3(14, 'l14-p3-2', [
      ['Woman', 'uk_f', 'Hi, Metro Commercial Tire? This is Sandra from SwiftBox Couriers. Three of our high-roof delivery vans need six-tire rotations and laser alignment today.'],
      ['Man', 'au_m', 'Morning, Sandra! We can definitely fit all three in—when do your drivers need them back on the road?'],
      ['Woman', 'uk_f', 'Ideally before our five-thirty A.M. route loading tomorrow. Can your overnight shop team knock them out tonight?'],
      ['Man', 'au_m', 'Even better—bring them into Heavy Lift Bays One and Two after four P.M., and our evening techs will finish all three by ten tonight!'],
    ], null, [
      ['Part 3 · Purpose', 'Why is Sandra calling the tire shop?', ['To book maintenance for three commercial delivery vans', 'To order winter snow tires for SwiftBox Couriers', 'To ask about alignment warranty coverage on one truck', 'To request roadside tire repair for a stranded driver'], 0, 'ตอบ To book maintenance for three commercial delivery vans (โทรจองคิวสลับยางและตั้งศูนย์ด้วยเลเซอร์ให้รถตู้ส่งของ 3 คัน)'],
      ['Part 3 · Time', 'By when do the vehicles need to be ready for route loading?', ['5:30 A.M. tomorrow', '4:00 P.M. today', '10:00 P.M. tonight', 'Noon tomorrow'], 0, 'ตอบ 5:30 A.M. tomorrow (ต้องนำรถไปขึ้นของวิ่งงานเวลา 05:30 น. วันพรุ่งนี้)'],
      ['Part 3 · Detail', 'When does the man expect his technicians to finish the work?', ['By 10:00 P.M. tonight', 'Right after 4:00 P.M.', 'Early tomorrow morning', 'During lunch hours'], 0, 'ตอบ By 10:00 P.M. tonight (ช่างกะเย็นจะทำทั้งสามคันให้เสร็จภายในสี่ทุ่มคืนนี้)'],
    ]),

    p3(14, 'l14-p3-3', [
      ['Woman', 'us_f2', 'Heads up, Ben—two monthly commuters just reported the South Exit barrier arm stayed upright for twenty minutes straight after noon!'],
      ['Man', 'uk_m', 'Yikes—if the gate arm stays stuck up, unpaid hourly visitors can drive straight out without hitting the pay kiosk!'],
      ['Woman', 'us_f2', 'Exactly! I already stationed an attendant at South Exit with a handheld scanner while we figure out why it isn’t closing.'],
      ['Man', 'uk_m', 'Wait—did anyone check the asphalt induction loop? Last winter, water seeped into a pavement seam and fooled the controller into thinking a car was still parked under the arm!'],
      ['Woman', 'us_f2', 'Aha—good memory! Grab the circuit tester and meet me by Gate Two right away!'],
    ], null, [
      ['Part 3 · Problem', 'What malfunction happened at the garage’s South Exit?', ['The automated exit gate arm failed to lower after cars passed', 'Monthly commuter key cards stopped opening the barrier', 'A payment kiosk printed unreadable parking receipts', 'Construction vehicles blocked the South Exit lane'], 0, 'ตอบ The automated exit gate arm failed to lower after cars passed (ไม้กั้นทางออกฝั่งใต้ค้างยกขึ้นตลอดไม่ยอมลงมานาน 20 นาที)'],
      ['Part 3 · Action', 'How did the woman handle the issue temporarily?', ['She assigned an attendant with a scanner to watch the exit', 'She closed South Exit and routed traffic to North Gate', 'She raised hourly visitor fees at the indoor payment kiosk', 'She disconnected the main electrical breaker at noon'], 0, 'ตอบ She assigned an attendant with a scanner to watch the exit (ส่งพนักงานถือเครื่องสแกนไปเฝ้าที่ทางออกฝั่งใต้ไว้ชั่วคราวแล้ว)'],
      ['Part 3 · Meaning', 'What does the woman imply when she says, "Aha—good memory!"?', ['Ben’s theory about pavement moisture explains the sensor glitch', 'She remembers repairing Gate Two manually last winter', 'The attendant forgot where the circuit tester was stored', 'Monthly commuters often park too close to induction loops'], 0, 'ตอบ Ben’s theory about pavement moisture explains the sensor glitch (ชมว่า Ben จำแม่นและสมมติฐานเรื่องน้ำซึมเข้ารอยแยกพื้นถนนทำให้เซนเซอร์ค้างน่าจะตรงจุด)'],
    ]),

    p3(14, 'l14-p3-4', [
      ['Man1', 'au_m', 'Team, utility power bills jumped eighteen percent at our EV charging yard last month because all twenty-four refrigerated vans started fast charging together at six P.M.!'],
      ['Woman', 'us_f', 'Ouch—so our depot tripped the commercial peak-demand surcharge right during dinner-hour grid rates!'],
      ['Man2', 'uk_m', 'Can our depot software stagger charger wake-up times? Twelve vans don’t leave until seven A.M., so they don’t need juice until after midnight anyway!'],
      ['Woman', 'us_f', 'Brilliant! Let’s split the fleet into Wave A from six to eleven P.M., and delay Wave B until midnight off-peak rates kick in.'],
      ['Man1', 'au_m', 'Done—Dan, please program that load-balancing schedule across Chargers One through Twelve before shift change.'],
    ], null, [
      ['Part 3 · Cause', 'Why did the fleet depot’s electricity expenses surge last month?', ['All twenty-four electric vans drew fast power during peak rate hours', 'Refrigerated van cooling units stayed running inside the depot', 'Twelve chargers malfunctioned and drew double amperage', 'Commercial utility providers raised overnight off-peak prices'], 0, 'ตอบ All twenty-four electric vans drew fast power during peak rate hours (รถตู้ไฟฟ้า 24 คันชาร์จพร้อมกันตอนหกโมงเย็น ทำให้โดนค่าไฟช่วงพีค)'],
      ['Part 3 · Solution', 'How will the team reduce power bills starting tonight?', ['By dividing vehicle charging into early and post-midnight groups', 'By switching twelve vans back to diesel engines temporarily', 'By reducing fast-charger speeds to low trickle power', 'By unplugging refrigerator coolers until seven A.M.'], 0, 'ตอบ By dividing vehicle charging into early and post-midnight groups (แบ่งชาร์จเป็น 2 รอบ โดยรอบ B รอเริ่มหลังเที่ยงคืนที่เป็นช่วงค่าไฟถูก)'],
      ['Part 3 · Action', 'What will Dan do before the shift ends?', ['Configure staggered schedules on the depot chargers', 'Meet with utility executives about peak surcharges', 'Label vans assigned to the seven A.M. departure group', 'Inspect power meters on Chargers One through Twelve'], 0, 'ตอบ Configure staggered schedules on the depot chargers (Man1 สั่งให้ Dan ตั้งโปรแกรมตารางสลับเวลาโหลดบนเครื่องชาร์จ 1-12 ก่อนเปลี่ยนกะ)'],
    ]),

    p3(14, 'l14-p3-5', [
      ['Woman', 'uk_f2', 'Hi, Apex Collision & Body? This is Nadia, the fleet claims adjuster checking on City Water Utility’s silver hatchback scheduled for pickup today.'],
      ['Man', 'ca_m', 'Hi Nadia—I was actually just about to call you. Paint prep finished on schedule, yet we had to push reassembly back by two days.'],
      ['Woman', 'uk_f2', 'Oh no—did your technicians spot hidden frame damage underneath the rear bumper?'],
      ['Man', 'ca_m', 'No structural damage at all! Our paint vendor backordered the exact factory pearl-silver pigment, and it only arrived via express freight this morning. We’ll bake the bumper clear coat tonight and have it detailed Thursday afternoon.'],
    ], null, [
      ['Part 3 · Problem', 'Why was the city utility hatchback delayed by two days?', ['Factory pearl-silver paint stock arrived late from the supplier', 'Technicians uncovered hidden rear frame cracks during prep', 'Insurance adjusters delayed approving bumper replacement', 'Paint booth ovens broke down overnight'], 0, 'ตอบ Factory pearl-silver paint stock arrived late from the supplier (สีเงินมุกแท้จากโรงงานขาดสต็อกและเพิ่งส่งด่วนมาถึงเมื่อเช้านี้)'],
      ['Part 3 · Detail', 'What happens to the hatchback’s bumper tonight?', ['Its clear protective coating will be baked dry', 'Structural metal brackets will be welded on', 'Factory pearl paint will be stripped off', 'Fleet safety decals will be applied'], 0, 'ตอบ Its clear protective coating will be baked dry (คืนนี้จะพ่นเคลือบเงา clear coat และอบสีให้แห้ง)'],
      ['Part 3 · Time', 'When will the repaired vehicle be ready for pickup?', ['Thursday afternoon', 'Later today', 'Friday morning', 'Next Tuesday'], 0, 'ตอบ Thursday afternoon (ผู้ชายแจ้งว่าล้างเก็บงานพร้อมส่งมอบช่วงบ่ายวันพฤหัสบดี)'],
    ]),

    p3(14, 'l14-p3-6', [
      ['Man', 'us_m2', 'Good morning, Carla—ready to review Monday’s waterproofing plan for the Oak Street Municipal Garage?'],
      ['Woman', 'au_f', 'Sure am! Our concrete contractor says the Level Five open rooftop deck needs forty-eight hours of complete dry weather for polyurethane joint sealant to cure properly.'],
      ['Man', 'us_m2', 'Wait—let me verify where our seventy rooftop economy permit holders will park during Monday and Tuesday closures!'],
      ['Woman', 'au_f', 'I already blocked off eighty-five underutilized spaces along the west ramp of Level Two, and our digital message boards will direct rooftop passes there automatically.'],
    ], null, [
      ['Part 3 · Topic', 'What maintenance work is planned for Monday and Tuesday?', ['Sealing concrete joints on the open rooftop parking deck', 'Repainting parking stall numbers along Level Two', 'Installing digital entrance message boards at Oak Street', 'Fixing drainage leaks beneath the underground ramp'], 0, 'ตอบ Sealing concrete joints on the open rooftop parking deck (ลงสารเคลือบกันน้ำบริเวณรอยต่อคอนกรีตบนดาดฟ้าชั้น 5 ที่เปิดโล่ง)'],
      ['Part 3 · Detail', 'How many open spaces were reserved on Level Two for displaced drivers?', ['85 spaces', '70 spaces', '48 spaces', '100 spaces'], 0, 'ตอบ 85 spaces (ผู้หญิงกันช่องจอดที่ว่างอยู่ฝั่งทางลาดตะวันตกชั้น 2 ไว้ 85 ช่องสำหรับผู้ถือบัตรจอดดาดฟ้า 70 คัน)'],
      ['Part 3 · Action', 'How will rooftop pass holders learn about their temporary parking zone?', ['Via electronic directional signs inside the garage', 'Through mailed permit stickers next week', 'From security attendants blocking the main gate', 'Via automated phone reminders on Sunday night'], 0, 'ตอบ Via electronic directional signs inside the garage (ป้ายข้อความดิจิทัลจะช่วยชี้ทางให้รถบัตรจอดดาดฟ้าเข้าไปจอดที่ชั้น 2 โดยอัตโนมัติ)'],
    ]),

    p3(14, 'l14-p3-7', [
      ['Man', 'uk_m', 'Hi Elena, this is Dave at Harbor Tire Supply confirming tomorrow morning’s wholesale order for your municipal shuttle garage.'],
      ['Woman', 'us_f', 'Thanks for checking in, Dave! Did all forty heavy-duty all-season shuttle tires pass your warehouse inspection?'],
      ['Man', 'uk_m', 'All forty Michelin commercial sidewalls look great, plus I tucked six boxes of brass valve stems onto the same pallet as requested.'],
      ['Woman', 'us_f', 'Awesome. Just ask your driver to back into Roll-Up Door Three before seven A.M. so our shop crew can unload before commuter shuttles depart.'],
    ], null, [
      ['Part 3 · Detail', 'What items are included in tomorrow’s delivery besides forty shuttle tires?', ['Six boxes of brass valve stems', 'Heavy-duty hydraulic tire jacks', 'Winter snow chains for city buses', 'Portable laser alignment gauges'], 0, 'ตอบ Six boxes of brass valve stems (นอกจากยางรถชัตเทิล 40 เส้นแล้ว ยังใส่วาล์วลมทองเหลือง 6 กล่องมาบนพาเลตเดียวกันตามที่ขอ)'],
      ['Part 3 · Time', 'Before what time does Elena want the truck to unload?', ['7:00 A.M.', '6:30 A.M.', '8:00 A.M.', 'Noon'], 0, 'ตอบ 7:00 A.M. (ขอให้คนขับถอยเข้าประตูม้วนหมายเลข 3 ก่อน 07:00 น. ก่อนรถรับส่งออกวิ่งงาน)'],
      ['Part 3 · Role', 'What type of facility does Elena appear to manage?', ['At a city transit maintenance garage', 'At a wholesale rubber manufacturing plant', 'At a municipal parking permit office', 'At an automobile insurance agency'], 0, 'ตอบ At a city transit maintenance garage (ทำงานที่อู่ซ่อมบำรุงรถรับส่งของเทศบาล)'],
    ]),

    p3(14, 'l14-p3-8', [
      ['Woman1', 'ca_f', 'Morning, dispatchers! Notice how three overnight van drivers logged manual billing errors at Public Fast Chargers yesterday?'],
      ['Woman2', 'us_f2', 'Yeah—turns out two drivers lost their company RFID charging fobs during rainy loading shifts and used personal credit cards instead!'],
      ['Man', 'au_m', 'Wait—if they pay out of pocket, Accounting has to process slow expense reimbursements instead of getting our bulk fleet discount!'],
      ['Woman1', 'ca_f', 'Right! Let’s issue backup six-digit vehicle PINs linked directly to each van’s registration number on the dashboard visor, so drivers never get stuck without a plastic fob.'],
      ['Woman2', 'us_f2', 'Smart—I’ll email our fleet card provider today to activate backup PINs for all thirty vans!'],
    ], null, [
      ['Part 3 · Problem', 'Why did three fleet drivers pay for charging with personal cards?', ['Lost company RFID key fobs forced manual payment', 'Public fast chargers rejected municipal fleet accounts', 'Rainy weather shorted out dashboard card readers', 'Bulk fleet discounts expired at midnight'], 0, 'ตอบ Lost company RFID key fobs forced manual payment (คนขับทำพวงกุญแจบัตรชาร์จ RFID ของบริษัทหายช่วงโหลดของกลางสายฝน เลยต้องใช้บัตรส่วนตัวจ่ายไปก่อน)'],
      ['Part 3 · Disadvantage', 'What drawback comes from drivers using personal credit cards?', ['It creates extra reimbursement paperwork and forfeits fleet discounts', 'Drivers receive points toward municipal parking permits', 'Public fast chargers charge double electricity taxes', 'Vehicle VIN logs fail to record battery mileage'], 0, 'ตอบ It creates extra reimbursement paperwork and forfeits fleet discounts (ฝ่ายบัญชีต้องทำเรื่องเบิกจ่ายคืนยุ่งยากแถมเสียสิทธิ์ส่วนลดองค์กร)'],
      ['Part 3 · Action', 'What will the second dispatcher arrange for the delivery vans today?', ['Activating backup PIN access across all thirty fleet vans', 'Ordering plastic lanyards for every driver’s key fob', 'Installing private fast chargers inside the rainy loading bay', 'Reimbursing personal credit card bills in cash'], 0, 'ตอบ Activating backup PIN access across all thirty fleet vans (จะส่งอีเมลให้ผู้ให้บริการบัตรเปิดใช้งานรหัส PIN สำรองเชื่อมกับทะเบียนรถทั้ง 30 คัน)'],
    ]),

    p3(14, 'l14-p3-9', [
      ['Woman', 'uk_f', 'Thanks for walking Level One with me, Carlos. City Commuter Services wants twenty secure electric-bike charging lockers near the Main Street exit.'],
      ['Man', 'us_m', 'Hmm, we definitely can’t take away accessible car stalls near the main ramp. Look over beside Stairwell B, though—that concrete alcove just holds old sand buckets!'],
      ['Woman', 'uk_f', 'Oh, nice—plus there’s already a 240-volt electrical conduit box mounted overhead!'],
      ['Man', 'us_m', 'Right! Installing lockers right there saves thousands in new trench wiring and keeps cyclists safely separated from turning cars!'],
    ], null, [
      ['Part 3 · Topic', 'What project are the speakers planning on Level One?', ['Adding enclosed charging cages for electric bicycles', 'Replacing accessible car parking spaces near the ramp', 'Upgrading electrical conduits inside Stairwell B', 'Removing unused sand buckets from city garages'], 0, 'ตอบ Adding enclosed charging cages for electric bicycles (หาพื้นที่ติดตั้งตู้ล็อกเกอร์ชาร์จจักรยานไฟฟ้า 20 ตู้ใกล้ทางออกถนน Main)'],
      ['Part 3 · Benefit', 'Why is the alcove beside Stairwell B an ideal location?', ['Existing overhead wiring lowers installation costs and keeps riders safe', 'Cyclists can exit straight onto accessible car ramps', 'Main Street traffic signals stop right outside Stairwell B', 'Municipal sand storage is moving to the rooftop deck'], 0, 'ตอบ Existing overhead wiring lowers installation costs and keeps riders safe (มีท่อสายไฟ 240 โวลต์อยู่ด้านบนแล้ว ช่วยประหยัดค่าเดินสายใหม่และแยกจักรยานออกจากทางรถเลี้ยวได้อย่างปลอดภัย)'],
      ['Part 3 · Meaning', 'What does the man imply when he says, "saves thousands in new trench wiring"?', ['Using existing power lines avoids expensive concrete cutting', 'Bike locker manufacturers offer municipal bulk rebates', 'Sand buckets can be sold back to city road crews', 'Stairwell B lighting stays turned off during daytime hours'], 0, 'ตอบ Using existing power lines avoids expensive concrete cutting (หมายความว่าไม่ต้องกรีดพื้นคอนกรีตวางท่อสายไฟใหม่ซึ่งประหยัดงบได้หลายพันดอลลาร์)'],
    ]),

    p3(14, 'l14-p3-10', [
      ['Man', 'ca_m', 'Hey Elena—did your senior dent technician finish inspecting the six municipal patrol sedans caught in last Friday’s hailstorm?'],
      ['Woman', 'au_f', 'Yes, good news! Four sedans have shallow roof dimples with unbroken paint, meaning paintless dent pulling wraps all four up within three days.'],
      ['Man', 'ca_m', 'And what about the other two patrol cars?'],
      ['Woman', 'au_f', 'Two hoods took deeper creases along the aluminum ridge, so we’ll order factory replacement hoods and repaint them before returning all six next Wednesday.'],
    ], null, [
      ['Part 3 · Detail', 'How many damaged sedans can be repaired without repainting?', ['Four vehicles', 'Two vehicles', 'Six vehicles', 'All patrol cars'], 0, 'ตอบ Four vehicles (สี่คันแรกมีรอยบุบตื้นและสีไม่แตก สามารถใช้วิธีดึงตัวถังแบบไม่ทำสีได้เสร็จในสามวัน)'],
      ['Part 3 · Cause', 'Why do two sedans require brand-new aluminum hoods?', ['Sharp hail dents creased along rigid structural edges', 'Factory paint peeled off during rainstorms', 'Paintless pulling tools broke during inspection', 'Municipal police decals faded unevenly'], 0, 'ตอบ Sharp hail dents creased along rigid structural edges (ฝากระโปรงของอีกสองคันมีรอยพับลึกตรงแนวสันอะลูมิเนียม จึงต้องสั่งเปลี่ยนฝากระโปรงแท้จากโรงงานและพ่นสีใหม่)'],
      ['Part 3 · Time', 'When is the entire fleet of six cars expected back in service?', ['Next Wednesday', 'Within three days', 'This Friday', 'Tomorrow afternoon'], 0, 'ตอบ Next Wednesday (ตั้งเป้าส่งคืนครบทั้งหกคันในวันพุธหน้า)'],
    ]),

    p3(14, 'l14-p3-11', [
      ['Man', 'us_m', 'Quick, Hannah—Van Nine just pulled into the depot with only eight percent battery, and its next frozen-food run leaves in forty minutes!'],
      ['Woman', 'uk_f', 'Whoa, forty minutes isn’t nearly enough time on our slow 50-kilowatt charger! Let’s grab an active 150-kilowatt bay right away.'],
      ['Man', 'us_m', 'Wait—look at the diagnostic screen: Bay Two is flagged offline for a cooling pump fault, and Bay Four just started a 20-minute automated firmware reboot!'],
      ['Woman', 'uk_f', 'Okay—plug Van Nine straight into the only working fast bay on our board immediately!'],
    ], doc('status', 'EV Fleet Depot — Live Charger Diagnostic Panel', [['Time', '1:15 P.M. Status']], [
      tbl(
        ['Bay', 'Power Rating', 'Current Status', 'Notes'],
        [
          ['Bay 1', '150 kW DC Fast', 'Online · Ready', 'Connector tested 12:30 P.M.'],
          ['Bay 2', '150 kW DC Fast', 'Offline · Pump Fault', 'Awaiting technician repair'],
          ['Bay 3', '50 kW Standard', 'Online · Ready', 'Overnight trickle bay'],
          ['Bay 4', '150 kW DC Fast', 'Busy · Firmware Reboot', 'Locked for ~20 minutes'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Where will the speakers plug in Van Nine?', ['Bay 1', 'Bay 2', 'Bay 3', 'Bay 4'], 0, 'ตอบ Bay 1 (ต้องใช้หัวชาร์จเร็ว 150 kW ทันทีเพราะมีเวลาแค่ 40 นาที โดย Bay 2 เสียและ Bay 4 รีบูตอยู่ 20 นาที จึงเหลือ Bay 1 ช่องเดียวที่ Online พร้อมใช้งาน)'],
      ['Part 3 · Problem', 'Why can’t Bay 4 be used immediately?', ['It is locked while updating system firmware', 'Its cooling pump leaked onto the concrete curb', 'Its 50-kilowatt rating charges too slowly', 'Another frozen-food van is parked there'], 0, 'ตอบ It is locked while updating system firmware (Bay 4 กำลังรีบูตเฟิร์มแวร์อัตโนมัติซึ่งจะถูกล็อกใช้งานไม่ได้ประมาณ 20 นาที)'],
      ['Part 3 · Detail', 'How much battery charge remains in Van Nine?', ['Eight percent', 'Twenty percent', 'Forty percent', 'Fifty percent'], 0, 'ตอบ Eight percent (ผู้ชายแจ้งว่ารถตู้หมายเลข 9 กลับมาถึงอู่โดยเหลือแบตเตอรี่เพียง 8%)'],
    ]),

    p3(14, 'l14-p3-12', [
      ['Woman', 'au_f', 'Hi, I manage delivery vans for GreenGrocer Market. We want to bring six vans in for laser wheel alignments plus our annual safety checks next week.'],
      ['Man', 'ca_m', 'Happy to take care of your fleet! Looking at our service menu, combining those two items keeps your per-van maintenance smooth and thorough.'],
      ['Woman', 'au_f', 'Wait—since we’re bringing six vans together under one commercial invoice, do you offer a multi-vehicle fleet discount?'],
      ['Man', 'ca_m', 'Yes! Any fleet scheduling five or more vans in one week gets twenty percent off total labor and diagnostics—I’ll apply that straight to your quote!'],
    ], doc('menu', 'Metro Tire & Body — Commercial Service Menu', [['Fleet Deal', '5+ Vans/Week: 20% Off Total']], [
      box('Standard Per-Vehicle Rates', [
        '• Commercial 6-Tire Rotate & Balance — $140 / vehicle',
        '• Laser 4-Wheel Precision Alignment — $115 / vehicle',
        '• Minor Bumper Scuff Refinish — $380 / vehicle',
        '• Annual Fleet Safety Inspection — $95 / vehicle',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Before the 20% fleet discount, what is the combined standard rate per van for the requested services?', ['$210', '$255', '$235', '$190'], 0, 'ตอบ $210 (ลูกค้าขอทำ Laser Alignment $115 + Annual Fleet Safety Inspection $95 รวมเป็น $210 ต่อคันก่อนหักส่วนลด 20%)'],
      ['Part 3 · Condition', 'What qualifies GreenGrocer Market for the 20% discount?', ['Booking five or more vans within the same week', 'Paying the commercial invoice in advance by wire', 'Adding tire rotation and bumper refinishing services', 'Scheduling maintenance during overnight hours'], 0, 'ตอบ Booking five or more vans within the same week (ตารางและพนักงานระบุว่าจอง 5 คันขึ้นไปในสัปดาห์เดียวกันได้ส่วนลด 20%)'],
      ['Part 3 · Detail', 'How many delivery vans is GreenGrocer Market bringing in?', ['Six vans', 'Four vans', 'Five vans', 'Eight vans'], 0, 'ตอบ Six vans (ผู้หญิงแจ้งว่ามีรถตู้ส่งของ 6 คันที่ต้องเข้าเช็กสัปดาห์หน้า)'],
    ]),

    p3(14, 'l14-p3-13', [
      ['Man', 'uk_m', 'Hi, welcome to City Parking Authority! Looking to upgrade your monthly pass?'],
      ['Woman', 'us_f2', 'Yes—our engineering firm just leased an electric service pickup, so I need an overnight covered pass that includes Level-2 charging access without paying extra per-hour kiosk fees.'],
      ['Man', 'uk_m', 'Got it! That rules out the open rooftop pass since it has zero roof cover against winter hail, and our regular commuter pass doesn’t include EV plugs.'],
      ['Woman', 'us_f2', 'Makes sense—sign me up for the monthly electric-ready level starting June first!'],
    ], doc('notice', 'Civic Municipal Garage — Monthly Permit Schedule', [['Effective', 'June 1 Rate Card']], [
      lst([
        '• Level 1 Visitor Short-Stay: $4 / hour (Max $24 daily, no monthly pass)',
        '• Level 2 Covered Commuter Pass: $135 / month (Standard covered stalls)',
        '• Level 3 Covered EV Permit: $165 / month (Covered stall + unlimited Level-2 charging)',
        '• Level 5 Rooftop Economy Pass: $85 / month (Uncovered open-air deck)',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. How much will the woman pay monthly starting June 1?', ['$165 per month', '$135 per month', '$85 per month', '$24 per day'], 0, 'ตอบ $165 per month (ต้องการที่จอดในร่มพร้อมหัวชาร์จ EV แบบไม่เสียรายชั่วโมง ซึ่งตรงกับ Level 3 Covered EV Permit ราคา $165/เดือน)'],
      ['Part 3 · Detail', 'Why does the man eliminate the $85 Economy Pass?', ['It sits on an exposed outdoor deck lacking weather protection', 'City permits prohibit engineering pickups on Level Five', 'Rooftop gates close overnight during maintenance', 'Short-stay visitor rates apply after six P.M.'], 0, 'ตอบ It sits on an exposed outdoor deck lacking weather protection (ดาดฟ้าชั้น 5 ไม่มีหลังคาคลุมกันลูกเห็บในฤดูหนาว)'],
      ['Part 3 · Time', 'When will the new parking permit begin?', ['June 1', 'Immediately today', 'Next Monday', 'End of the month'], 0, 'ตอบ June 1 (ผู้หญิงขอสมัครบัตรจอดรถรายเดือนเริ่มตั้งแต่วันที่ 1 มิถุนายน)'],
    ]),

    // Set 14 Part 4 (10 Talks: 1-7 null doc, 8-10 graphic doc; 45-85 words each)
    p4(14, 'l14-p4-1', 'the following recorded telephone message', 'us_f',
      'Thank you for calling Metro Commercial Tire and Alignment. Our heavy-truck service bays are open Monday through Saturday from six A.M. to eight P.M. For fleet drivers stranded on the highway with a flat tire or broken wheel stud, press nine immediately to reach our mobile roadside service van. To book scheduled fleet safety inspections or check warranty tread claims, stay on the line for our service desk.',
      null, [
        ['Part 4 · Audience', 'Who is this recorded message mainly designed for?', ['Commercial fleet managers and truck drivers', 'Personal sedan buyers shopping for car audio', 'Municipal garage parking permit holders', 'Electric vehicle battery engineers'], 0, 'ตอบ Commercial fleet managers and truck drivers (แจ้งเวลาเปิดอู่รถบรรทุกหนัก บริการรถซ่อมเคลื่อนที่ริมถนน และนัดตรวจสภาพฟลีตรถเชิงพาณิชย์)'],
        ['Part 4 · Action', 'What should a driver with a roadside flat tire do?', ['Press nine for mobile repair dispatch', 'Wait until six A.M. Monday morning', 'Stay on the line for warranty claims', 'Drive slowly to the service desk'], 0, 'ตอบ Press nine for mobile repair dispatch (กด 9 ทันทีเพื่อติดต่อรถบริการซ่อมฉุกเฉินริมถนน)'],
        ['Part 4 · Detail', 'Until what time are the truck bays open on Saturdays?', ['8:00 P.M.', '6:00 A.M.', '5:00 P.M.', '9:00 P.M.'], 0, 'ตอบ 8:00 P.M. (เปิดให้บริการวันจันทร์ถึงเสาร์ตั้งแต่ 06:00 น. ถึง 20:00 น.)'],
      ]),

    p4(14, 'l14-p4-2', 'the following public announcement', 'uk_m',
      'Attention, Civic Center Parking Garage guests. Overnight high-pressure concrete sweeping begins on Level One tonight at ten P.M. and concludes at five A.M. Please ensure all short-stay vehicles exit Level One before ten o’clock so cleaning crews have clear lane access; any cars remaining after ten will be towed to overflow Lot C at the owner’s expense. Complimentary shuttle vans will operate from Lot C back to the main terminal until midnight.',
      null, [
        ['Part 4 · Purpose', 'Why is this announcement being made inside the parking garage?', ['To warn drivers to clear Level One before overnight cleaning', 'To promote free shuttle routes to downtown events', 'To announce higher hourly parking fees on Level One', 'To reopen overflow Lot C after concrete repairs'], 0, 'ตอบ To warn drivers to clear Level One before overnight cleaning (ประกาศเตือนให้ย้ายรถออกจากชั้น 1 ก่อนสี่ทุ่มคืนนี้เพื่อล้างทำความสะอาดพื้นคอนกรีต)'],
        ['Part 4 · Warning', 'What happens to vehicles left on Level One past 10:00 P.M.?', ['They will be relocated to Lot C at the driver’s cost', 'Owners will receive double overnight parking citations', 'Cleaning crews will wash around parked cars', 'Exit gates will lock until five A.M.'], 0, 'ตอบ They will be relocated to Lot C at the driver’s cost (รถที่จอดทิ้งไว้หลังสี่ทุ่มจะถูกลากไปไว้ที่ลาน Lot C โดยเจ้าของรถรับผิดชอบค่าใช้จ่าย)'],
        ['Part 4 · Detail', 'How long will complimentary shuttles run from Lot C?', ['Until midnight', 'Until 10:00 P.M.', 'Until 5:00 A.M.', 'All night long'], 0, 'ตอบ Until midnight (รถตู้รับส่งฟรีจาก Lot C กลับอาคารหลักให้บริการจนถึงเที่ยงคืน)'],
      ]),

    p4(14, 'l14-p4-3', 'the following radio advertisement', 'ca_m',
      'When a delivery van gets dented in city traffic, every idle day costs your business money! Bring your commercial fleet to Apex Auto Body & Collision—we guarantee forty-eight-hour turnaround on minor bumper, fender, and side-panel repairs! Our certified technicians match factory metallic paints digitally, handle direct insurance billing paperwork for you, and even supply a clean cargo loaner van while yours cures in the paint booth. Call Apex Collision today!',
      null, [
        ['Part 4 · Promise', 'What service guarantee does Apex Auto Body highlight?', ['Two-day completion on minor panel and bumper damage', 'Free annual safety inspections for commercial vans', 'Lifetime warranty against roadside tire punctures', 'Overnight battery charging for electric delivery fleets'], 0, 'ตอบ Two-day completion on minor panel and bumper damage (รับประกันซ่อมกันชนและแผงข้างขนาดเล็กเสร็จภายใน 48 ชั่วโมง)'],
        ['Part 4 · Benefit', 'How does the shop reduce disruption for business owners during repairs?', ['By providing a replacement cargo van and handling insurance forms', 'By sending mobile painters directly to client loading docks', 'By waiving deductible charges on commercial traffic accidents', 'By discounting bulk tire alignments for fleet contracts'], 0, 'ตอบ By providing a replacement cargo van and handling insurance forms (ช่วยจัดการเอกสารเบิกประกันให้และมีรถตู้ขนของสำรองให้ใช้ระหว่างซ่อม)'],
        ['Part 4 · Detail', 'How do technicians match vehicle paint colors?', ['By using digital factory color-matching equipment', 'By ordering pre-painted replacement doors from dealers', 'By mixing metallic pigments manually in the booth', 'By scanning original purchase invoices'], 0, 'ตอบ By using digital factory color-matching equipment (ใช้ระบบดิจิทัลเทียบสีเมทัลลิกให้ตรงตามโรงงาน)'],
      ]),

    p4(14, 'l14-p4-4', 'the following excerpt from a meeting', 'au_f',
      'Before our EV depot technicians pull power modules this week, let’s review safety procedures from last month’s audit. First, always attach your personal red lockout tag to the main wall disconnect before opening any charger cabinet—never trust software off-switches alone! Second, check the cuff stamp on your insulated rubber gloves; two pairs expire Friday and must move straight into the yellow testing bin. Finally, log thermal camera scans on every plug handle.',
      null, [
        ['Part 4 · Audience', 'Who is listening to this meeting briefing?', ['Electric-vehicle charging equipment maintenance technicians', 'Commercial fleet van drivers starting morning shifts', 'Parking garage attendants inspecting ticket kiosks', 'Auto body painters operating drying booths'], 0, 'ตอบ Electric-vehicle charging equipment maintenance technicians (หัวหน้างานประชุมช่างซ่อมบำรุงตู้ชาร์จรถไฟฟ้าเรื่องขั้นตอนความปลอดภัยแรงดันสูง)'],
        ['Part 4 · Rule', 'What must technicians do prior to opening a charger cabinet?', ['Place a personal red lockout tag on the wall power switch', 'Turn off the charger using its touchscreen menu only', 'Wear thermal cameras attached to their work helmets', 'Unplug all nearby delivery vans in the depot'], 0, 'ตอบ Place a personal red lockout tag on the wall power switch (ต้องติดป้ายล็อกเอาต์สีแดงส่วนตัวที่สวิตช์ตัดไฟหลักที่ผนังทุกครั้ง ห้ามเชื่อแค่ปุ่มปิดบนหน้าจอซอฟต์แวร์)'],
        ['Part 4 · Detail', 'What happens to insulated gloves whose inspection stamp expires Friday?', ['They go into the yellow bin for safety re-testing', 'Technicians discard them in hazardous waste drums', 'Supervisors issue automatic replacements on Monday', 'They remain usable for low-voltage plug scans'], 0, 'ตอบ They go into the yellow bin for safety re-testing (ถุงมือยางหุ้มฉนวนสองคู่ที่หมดอายุวันศุกร์ต้องแยกใส่ถังสีเหลืองเพื่อส่งตรวจมาตรฐาน)'],
      ]),

    p4(14, 'l14-p4-5', 'the following voicemail message', 'us_m2',
      'Hi Sandra, this is Mike from Central Fleet Body Shop calling at three-ten Wednesday. Good news on Utility Van Seven—your city insurance adjuster just authorized the supplemental rear bumper support brackets we requested Monday! Our parts distributor already delivered the steel braces, so welders are bolting everything together this afternoon. Plan on sending a driver tomorrow after two P.M. once final alignment checks wrap up.',
      null, [
        ['Part 4 · Purpose', 'Why is Mike from Central Fleet Body Shop calling Sandra?', ['To share repair progress and give a Thursday pickup time', 'To request insurance authorization for supplemental parts', 'To delay Utility Van Seven’s welding work until Monday', 'To report delayed bracket shipments from the supplier'], 0, 'ตอบ To share repair progress and give a Thursday pickup time (แจ้งความคืบหน้าว่าประกันอนุมัติอะไหล่เสริมแล้ว กำลังประกอบบ่ายนี้ และนัดให้ส่งคนขับมารับรถพรุ่งนี้หลังบ่ายสองโมง)'],
        ['Part 4 · Detail', 'What component arrived after insurance approval?', ['Rear bumper steel mounting brackets', 'Replacement side sliding door latches', 'Laser wheel-alignment sensors', 'Factory metallic paint cans'], 0, 'ตอบ Rear bumper steel mounting brackets (ตัวยึดโครงกันชนหลังเหล็กเสริมมาส่งถึงอู่เรียบร้อยแล้ว)'],
        ['Part 4 · Time', 'When can Sandra’s driver collect Utility Van Seven?', ['Tomorrow after 2:00 P.M.', 'Wednesday at 3:10 P.M.', 'Monday morning', 'Later this afternoon'], 0, 'ตอบ Tomorrow after 2:00 P.M. (พรุ่งนี้หลังเวลา 14:00 น. เมื่อตรวจเช็กศูนย์ล้อรอบสุดท้ายเสร็จ)'],
      ]),

    p4(14, 'l14-p4-6', 'the following orientation talk', 'uk_f',
      'Welcome to Metro Commercial Tire’s apprentice workshop! Look over at Lift Two—before anyone raises a ten-ton shuttle bus, always slide those steel safety lock bars into place once the carriage reaches working height. Hydraulic pressure alone is never your safety net! Also, keep our calibrated digital torque wrenches inside the red foam tray after tightening wheel lug nuts, and stack worn casings horizontally inside the fenced yard rather than blocking fire lanes.',
      null, [
        ['Part 4 · Rule', 'What must apprentices do immediately after lifting a heavy bus to height?', ['Engage physical steel locking bars on the lift', 'Lower hydraulic fluid pressure on Lift Two', 'Check wheel lug nuts using a red foam gauge', 'Roll worn rubber tires toward the outdoor fire lane'], 0, 'ตอบ Engage physical steel locking bars on the lift (ต้องสอดเหล็กนิรภัยล็อกแท่นยกเข้าที่ทุกครั้งหลังยกขึ้นถึงระดับทำงาน อย่าพึ่งพาแรงดันไฮดรอลิกอย่างเดียว)'],
        ['Part 4 · Meaning', 'What does the foreman emphasize when saying, "Hydraulic pressure alone is never your safety net"?', ['Mechanical lock bars are mandatory to prevent sudden lift drops', 'Apprentices should test hydraulic hoses twice daily', 'Ten-ton shuttle buses require two lifts working together', 'Torque wrenches perform poorly near hydraulic compressors'], 0, 'ตอบ Mechanical lock bars are mandatory to prevent sudden lift drops (เน้นย้ำว่าแรงดันน้ำมันไฮดรอลิกอาจรั่วได้ ต้องใช้ตัวล็อกเหล็กกลไกช่วยค้ำป้องกันแท่นร่วงเสมอ)'],
        ['Part 4 · Instruction', 'How should removed old tires be stored outside?', ['Laid flat inside the fenced outdoor yard', 'Leaning vertically beside Lift Two', 'Loaded directly onto shuttle delivery vans', 'Piled beside the red foam tool tray'], 0, 'ตอบ Laid flat inside the fenced outdoor yard (ให้วางซ้อนแนวนอนภายในลานที่มีรั้วล้อมด้านหลัง อย่าขวางทางหนีไฟ)'],
      ]),

    p4(14, 'l14-p4-7', 'the following local radio broadcast', 'us_m',
      'Commuting into downtown just got noticeably less stressful! The Municipal Transit Board flipped the switch this morning on smart space-counting sensors across the six-story Oak Street Parking Garage. Electronic LED signs above the main entrance now display exact open stall counts on every floor, guiding motorists straight to available decks instead of circling tight concrete ramps. Even better, thirty new rooftop solar chargers now power electric commuter cars reliably all day!',
      null, [
        ['Part 4 · Topic', 'What new technology began operating at the Oak Street Garage?', ['Automated stall-counting displays and rooftop EV chargers', 'License-plate toll cameras replacing paper tickets', 'Express underground bus lanes below Level One', 'Mobile apps allowing advance valet reservations'], 0, 'ตอบ Automated stall-counting displays and rooftop EV chargers (เปิดตัวเซนเซอร์นับจำนวนช่องว่างแบบเรียลไทม์บนป้าย LED หน้าทางเข้าและหัวชาร์จพลังงานแสงอาทิตย์ 30 จุดบนดาดฟ้า)'],
        ['Part 4 · Benefit', 'How do the new entrance signs help downtown drivers?', ['By directing them straight to decks with open spaces', 'By reserving Level One spots for monthly commuters', 'By showing live highway traffic speeds outside downtown', 'By calculating hourly solar charging rebates automatically'], 0, 'ตอบ By directing them straight to decks with open spaces (ช่วยนำทางผู้ขับขี่ตรงไปยังชั้นที่มีที่ว่างทันที ไม่ต้องขับวนหาตามทางลาดให้เสียเวลา)'],
        ['Part 4 · Detail', 'How many new solar charging stations were added on the roof?', ['Thirty chargers', 'Six chargers', 'Sixty chargers', 'Twelve chargers'], 0, 'ตอบ Thirty chargers (ระบุว่าติดตั้งจุดชาร์จพลังงานแสงอาทิตย์บนดาดฟ้าใหม่ 30 จุด)'],
      ]),

    p4(14, 'l14-p4-8', 'the following maintenance update and table', 'ca_f',
      'Morning, EV Field Electricians! Heavy thunderstorms flooded power conduits along the Downtown Utility Lot overnight, so city safety officers closed that lot for drainage pumping until Friday. Therefore, Technician Leo’s scheduled morning visit there is canceled—please have Leo drive straight out to team up with Priya at the site scheduled for Thursday, since that hub has twice as many high-power cabinets needing preventive inspection!',
      doc('table', 'EV Depot — Weekly Preventive Maintenance Plan', [['Division', 'Regional Charger Service']], [
        tbl(
          ['Depot Site', 'Scheduled Day', 'Lead Tech', 'Power Tier'],
          [
            ['North Bus Terminal', 'Monday', 'Dana R.', '150 kW (12 Bays)'],
            ['Harbor Freight Yard', 'Tuesday', 'Maya K.', '350 kW (8 Bays)'],
            ['Downtown Utility Lot', 'Wednesday', 'Leo P.', '50 kW (6 Bays)'],
            ['Airport Shuttle Hub', 'Thursday', 'Priya N.', '350 kW (16 Bays)'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Where will Leo P. report to assist Priya N.?', ['Airport Shuttle Hub', 'North Bus Terminal', 'Harbor Freight Yard', 'Downtown Utility Lot'], 0, 'ตอบ Airport Shuttle Hub (งานตรวจที่ Downtown Utility Lot ถูกปิดชั่วคราวเพราะน้ำท่วม จึงส่ง Leo ไปช่วย Priya ที่สาขาวันพฤหัสบดี ซึ่งในตารางคือ Airport Shuttle Hub)'],
        ['Part 4 · Cause', 'Why was maintenance canceled at the Downtown Utility Lot?', ['Stormwater flooded the underground electrical conduits', 'Equipment parts for 50-kilowatt chargers arrived late', 'Utility shuttles needed all six bays during morning rush', 'Safety inspectors reassigned Leo P. to Harbor Freight Yard'], 0, 'ตอบ Stormwater flooded the underground electrical conduits (พายุฝนทำให้ท่อร้อยสายไฟถูกน้ำท่วมและเจ้าหน้าที่สั่งปิดสูบน้ำออกจนถึงวันศุกร์)'],
        ['Part 4 · Detail', 'How many charging bays operate at Airport Shuttle Hub?', ['16 bays', '12 bays', '8 bays', '6 bays'], 0, 'ตอบ 16 bays (ตารางระบุว่า Airport Shuttle Hub มีตู้ชาร์จขนาด 350 kW จำนวน 16 ช่อง)'],
      ]),

    p4(14, 'l14-p4-9', 'the following shop floor briefing and bay board', 'au_m',
      'Listen up, Service Bay Leads! Emergency Dispatch just radioed that a city ambulance picked up a nail in its rear tire two blocks away and is limping here right now! Look over at our Bay Board: heavy trucks tie up Bay B past noon, while Bay C is sealed for clear-coat baking. Have Mechanics clear Bay D the instant that silver delivery van finishes balancing at ten-thirty so the ambulance rolls straight in!',
      doc('schedule', 'Metro Tire & Body — Live 10:15 A.M. Bay Board', [['Shift', 'Morning Shop Assignments']], [
        box('Active Bay Status', [
          '• Bay A (Laser Alignment Rack): City Shuttle Bus #14 — Est. Done: 11:45 A.M.',
          '• Bay B (Heavy Truck Lift): Freight Box Truck — Est. Done: 12:30 P.M.',
          '• Bay C (Paint & Body Booth): Sealed Curing Clear Coat — Est. Done: 1:15 P.M.',
          '• Bay D (Quick Patch & Balance): Silver Delivery Van — Est. Done: 10:30 A.M.',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Why is Bay D selected for the incoming ambulance?', ['Its current tire job finishes soonest at 10:30 A.M.', 'It holds the shop’s heavy ten-ton truck hydraulic lift', 'Bay A’s laser alignment rack is undergoing calibration', 'Ambulances require sealed paint-booth clearance'], 0, 'ตอบ Its current tire job finishes soonest at 10:30 A.M. (Bay D เป็นช่องซ่อมด่วนและปะสมดุลยางที่รถตู้สีเงินกำลังจะทำเสร็จเร็วที่สุดในเวลา 10:30 น.)'],
        ['Part 4 · Problem', 'What happened to the city ambulance nearby?', ['A sharp nail punctured one of its rear tires', 'Its rear bumper brackets loosened in traffic', 'Hydraulic steering fluid leaked two blocks away', 'Wheel alignment drifted out of city spec'], 0, 'ตอบ A sharp nail punctured one of its rear tires (รถพยาบาลเหยียบตะปูเจาะยางหลังห่างจากอู่ไปสองช่วงตึก)'],
        ['Part 4 · Detail', 'Which vehicle is currently inside Bay A?', ['City Shuttle Bus #14', 'Freight Box Truck', 'Silver Delivery Van', 'A municipal patrol car'], 0, 'ตอบ City Shuttle Bus #14 (ตารางระบุ Bay A กำลังตั้งศูนย์ล้อให้ City Shuttle Bus #14)'],
      ]),

    p4(14, 'l14-p4-10', 'the following parking alert and occupancy report', 'uk_f2',
      'Good evening, Arena Concert guests—welcome to the Civic Center Parking Structure! Check our live occupancy summary before driving up the ramps. Ground-floor Short-Stay stalls are almost completely packed, and EV Plug decks are filling fast too. Rather than idling on tight spiral turns downstairs, drive straight up past the permit decks to our spacious Overflow level, where nearly four-fifths of concrete spaces sit completely open near Express Elevator Two!',
      doc('report', 'Civic Center Garage — 6:30 P.M. Occupancy Board', [['Event', 'Arena Concert Evening']], [
        lst([
          '• Level 1 (Short-Stay Visitor): 94% Full (12 stalls remaining)',
          '• Level 2 (Monthly Permit Holders): 78% Full (Restricted access)',
          '• Level 3 (EV Charging Deck): 88% Full (6 plugs remaining)',
          '• Level 4 (Concert Overflow Deck): 22% Full (215 stalls open)',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Where does the speaker advise concert visitors to park?', ['Level 4', 'Level 1', 'Level 2', 'Level 3'], 0, 'ตอบ Level 4 (ชั้น 1 เกือบเต็ม 94% ส่วนชั้น 2 สงวนสิทธิ์บัตรรายเดือน จึงแนะนำให้ขับขึ้นไปที่ Concert Overflow Deck ซึ่งก็คือ Level 4 ที่ว่างอยู่ถึง 215 ช่อง)'],
        ['Part 4 · Detail', 'How many open parking stalls remain on Level 1?', ['Twelve stalls', 'Six stalls', 'Seventy-eight stalls', 'Two hundred fifteen stalls'], 0, 'ตอบ Twelve stalls (ป้ายระบุ Level 1 เต็ม 94% เหลือช่องว่างเพียง 12 ช่อง)'],
        ['Part 4 · Benefit', 'What convenience is located near the open Level 4 parking spaces?', ['Quick access to Express Elevator Two', 'Complimentary arena concert shuttle vans', 'Discounted short-stay evening rates', 'Free Level-2 electric vehicle charging'], 0, 'ตอบ Quick access to Express Elevator Two (มีช่องจอดว่างเกือบสี่ในห้าอยู่ใกล้ลิฟต์ด่วนหมายเลข 2)'],
      ]),

    // ==================== SET 15 ====================
    // Themes: Textile Mill & Apparel Showroom, Tailoring Atelier, Trade Expo Fashion Booth Operations
    p1(15, 'l15-p1-1', 'uk_f', [
      'Garments on hangers are arranged along rolling metal racks beside mirrors.',
      'Shoppers are trying on winter coats inside a fitting booth.',
      'A stylist is folding knit sweaters onto glass display shelves.',
      'Several empty mannequins are packed inside cardboard shipping boxes.',
    ], 0, 'ตอบ Garments on hangers are arranged along rolling metal racks beside mirrors. (เสื้อผ้าบนไม้แขวนถูกจัดเรียงไว้บนราวเหล็กมีล้อเลื่อนข้างกระจกเงาบานใหญ่)'),
    p1(15, 'l15-p1-2', 'us_m', [
      'A customer is paying for a linen suit at a register.',
      'A tailor is pinning chalk-marked fabric onto a jacket on a mannequin.',
      'Two designers are unrolling bolts of silk across a floor.',
      'Sewing machines are lined up along a brick workshop wall.',
    ], 1, 'ตอบ A tailor is pinning chalk-marked fabric onto a jacket on a mannequin. (ช่างตัดเสื้อกำลังกลัดเข็มหมุดบนผ้าที่ขีดชอล์กไว้บนเสื้อแจ็กเก็ตที่สวมหุ่นลองเสื้อ)'),
    p1(15, 'l15-p1-3', 'ca_f', [
      'Workers are dyeing cloth vats inside an industrial mill.',
      'Finished denim rolls are being weighed on a floor scale.',
      'Large spools of colored yarn are mounted on rows of spinning frames.',
      'Inspectors are cutting fabric swatches with rotary blades.',
    ], 2, 'ตอบ Large spools of colored yarn are mounted on rows of spinning frames. (หลอดด้ายสีขนาดใหญ่จำนวนมากถูกติดตั้งเรียงเป็นแถวบนโครงเครื่องปั่นด้าย)'),
    p1(15, 'l15-p1-4', 'au_m', [
      'Exhibitors are dismantling metal truss frames in an arena.',
      'A guard is checking admission badges near an escalator.',
      'Folded wool blankets are stacked underneath a wooden counter.',
      'Visitors are examining fabric swatch binders across a trade booth counter.',
    ], 3, 'ตอบ Visitors are examining fabric swatch binders across a trade booth counter. (ผู้เข้าชมงานกำลังเปิดดูแฟ้มตัวอย่างเนื้อผ้าบนเคาน์เตอร์บูธแสดงสินค้า)'),
    p1(15, 'l15-p1-5', 'us_f2', [
      'Scissors, measuring tapes, and thread spools sit across a cutting table.',
      'A seamstress is ironing collar seams on a padded board.',
      'Wooden button trays have spilled onto a workshop rug.',
      'Paper dress patterns are pinned onto a cork bulletin board.',
    ], 0, 'ตอบ Scissors, measuring tapes, and thread spools sit across a cutting table. (กรรไกร สายวัด และหลอดด้ายไม้วางกระจายอยู่บนโต๊ะตัดผ้า)'),
    p1(15, 'l15-p1-6', 'uk_m', [
      'Clerks are boxing winter gloves inside an apparel warehouse.',
      'Two workers are steaming coats before placing garment bags over them.',
      'Clothing racks are being loaded into a freight elevator.',
      'A delivery driver is scanning barcodes on folded dress shirts.',
    ], 1, 'ตอบ Two workers are steaming coats before placing garment bags over them. (พนักงานสองคนกำลังรีดไอน้ำเสื้อโค้ตก่อนสวมถุงคลุมกันฝุ่นทับ)'),

    // Set 15 Part 2 (25 Qs)
    p2(15, 'l15-p2-1', 'uk_f', 'us_m', 'Where did you put the autumn wool swatch cards for Booth 412?', ['Inside the wheeled silver trunk under the counter.', 'Because our mill ran out of slate dye.', 'Until Thursday’s wholesale buyer preview.'], 0, 'ตอบ Inside the wheeled silver trunk under the counter. (ถามสถานที่เก็บการ์ดตัวอย่างผ้า Where ตอบเก็บอยู่ในลังอะลูมิเนียมมีล้อใต้เคาน์เตอร์)'),
    p2(15, 'l15-p2-2', 'ca_m', 'uk_f2', 'Who altered the sleeve hems on that navy bridal suit?', ['Two centimeters shorter on each cuff.', 'Elena finished hand-stitching them before lunch.', 'Yes, the bride flies out Friday evening.'], 1, 'ตอบ Elena finished hand-stitching them before lunch. (ถามบุคคล Who ตอบ Elena เย็บสอยชายแขนเสร็จก่อนมื้อเที่ยงแล้ว)'),
    p2(15, 'l15-p2-3', 'au_m', 'us_f', 'When will Weaving Loom Seven resume running organic linen warp?', ['Around two hundred yards per bolt.', 'With unbleached Belgian flax yarn.', 'Right after the tension sensor finishes calibrating at three.'], 2, 'ตอบ Right after the tension sensor finishes calibrating at three. (ถามเวลา When ตอบทันทีที่เซนเซอร์วัดความตึงด้ายปรับตั้งค่าเสร็จตอนบ่ายสาม)'),
    p2(15, 'l15-p2-4', 'us_f2', 'ca_m', 'Would retail buyers prefer viewing the spring coats in Showroom A or the Skylight Loft?', ['Skylight Loft has much truer natural daylight for wool colors.', 'Yes, twelve department store buyers RSVPed.', 'By courier parcel tomorrow morning.'], 0, 'ตอบ Skylight Loft has much truer natural daylight for wool colors. (ถามทางเลือกห้องโชว์รูม ตอบห้อง Skylight Loft ให้แสงธรรมชาติที่ตรงสีผ้าวูลมากกว่า)'),
    p2(15, 'l15-p2-5', 'uk_m', 'au_f', 'Why did our trade expo shipment of collapsible garment racks go to Hall C?', ['Fifteen chrome racks on casters.', 'Freight handlers misread our booth tag as 112 instead of 412.', 'Until Sunday’s convention teardown.'], 1, 'ตอบ Freight handlers misread our booth tag as 112 instead of 412. (ถามเหตุผล Why ตอบพนักงานขนส่งอ่านป้ายเลขบูธผิดจาก 412 เป็น 112)'),
    p2(15, 'l15-p2-6', 'ca_f', 'us_m2', 'Hasn’t the textile dye house sent over the olive cotton lab dips yet?', ['Three bolts of brushed twill.', 'No, I always iron silk on low steam.', 'Actually, the dye chemist emailed saying Vat Two needed another wash.'], 2, 'ตอบ Actually, the dye chemist emailed saying Vat Two needed another wash. (คำถามปฏิเสธ Hasn’t... ตอบความจริงว่านักเคมีสีส่งอีเมลมาแจ้งว่าถังย้อม 2 ต้องล้างสีอีกรอบ)'),
    p2(15, 'l15-p2-7', 'us_m', 'uk_f', 'How many yards of charcoal silk lining remain on the atelier shelf?', ['Only about nine yards—barely enough for four blazers.', 'From a family weaver near Lyon.', 'Behind the wooden button drawers.'], 0, 'ตอบ Only about nine yards—barely enough for four blazers. (ถามจำนวนหลาคงเหลือ How many ตอบเหลือแค่ประมาณ 9 หลา พอตัดเบลเซอร์ได้แค่ 4 ตัว)'),
    p2(15, 'l15-p2-8', 'au_f', 'ca_m', 'Could you press the collar lapels on those display trench coats before buyers arrive?', ['Yes, rainproof cotton sold briskly.', 'Sure, let me fill the upright garment steamer right now.', 'At the corner of Avenue B inside the expo.'], 1, 'ตอบ Sure, let me fill the upright garment steamer right now. (ขอให้ช่วยรีดปกเสื้อโค้ตก่อนผู้ซื้อมา ตอบได้ เดี๋ยวเติมน้ำเครื่องรีดไอน้ำให้เดี๋ยวนี้)'),
    p2(15, 'l15-p2-9', 'uk_f2', 'us_f', 'The tablet badge scanner at our fashion booth keeps dropping Wi-Fi.', ['Every morning before doors open at nine.', 'About eighty retail buyers stopped by.', 'Switch to the offline mode—it syncs leads automatically later.'], 2, 'ตอบ Switch to the offline mode—it syncs leads automatically later. (บอกเล่าปัญหาเครื่องสแกนป้ายหลุด Wi-Fi ตอบแนะนำให้สลับเป็นโหมดออฟไลน์แล้วค่อยซิงก์ทีหลัง)'),
    p2(15, 'l15-p2-10', 'us_m2', 'au_m', 'Which tailoring atelier is handling rush tuxedo alterations for the film awards?', ['Savile & Co. opened two late-night fitting slots for us.', 'Yes, velvet lapels returned into fashion.', 'Between Wednesday and Friday afternoon.'], 0, 'ตอบ Savile & Co. opened two late-night fitting slots for us. (ถามร้านตัดเสื้อใด Which ตอบร้าน Savile & Co. เปิดคิวฟิตติ้งรอบดึกให้สองคิว)'),
    p2(15, 'l15-p2-11', 'ca_m', 'uk_m', 'How long does it take to weave a three-hundred-yard custom twill run?', ['In slate gray and deep forest green.', 'Roughly four days once the warp beams are threaded.', 'At our northern mill annex.'], 1, 'ตอบ Roughly four days once the warp beams are threaded. (ถามระยะเวลา How long ตอบประมาณ 4 วันเมื่อร้อยด้ายยืนเสร็จแล้ว)'),
    p2(15, 'l15-p2-12', 'us_f', 'ca_f', 'Should we order mother-of-pearl buttons or matte horn buttons for the linen blazers?', ['Packed in fifty-piece velvet trays.', 'Next to the lapel chalk table.', 'Matte horn complements oatmeal linen much better.'], 2, 'ตอบ Matte horn complements oatmeal linen much better. (ถามทางเลือกกระดุมสองแบบ ตอบกระดุมเขาสัตว์แบบด้านเข้ากับผ้าลินินสีข้าวโอ๊ตได้ดีกว่า)'),
    p2(15, 'l15-p2-13', 'uk_m', 'us_m', 'Where can wholesale showroom visitors pick up printed lookbooks?', ['On the walnut pedestal right beside Reception.', 'Because price sheets updated this morning.', 'Every autumn before Paris Fashion Week.'], 0, 'ตอบ On the walnut pedestal right beside Reception. (ถามสถานที่หยิบหนังสือแคตตาล็อก Where ตอบวางอยู่บนแท่นไม้วอลนัตข้างเคาน์เตอร์ต้อนรับ)'),
    p2(15, 'l15-p2-14', 'au_f', 'uk_f2', 'Aren’t you working the Textile Sourcing Expo booth on Sunday morning?', ['Three sample trunks and two mannequins.', 'Actually, my flight home leaves Saturday night, so Priya took Sunday.', 'Yes, exhibition halls stay brightly lit.'], 1, 'ตอบ Actually, my flight home leaves Saturday night, so Priya took Sunday. (ถามไม่ได้เฝ้าบูธเช้าวันอาทิตย์หรือ ตอบความจริงว่าบินกลับคืนวันเสาร์ Priya เลยรับกะวันอาทิตย์แทน)'),
    p2(15, 'l15-p2-15', 'us_m2', 'ca_m', 'What time does the bridal client come back for her second dress pinning?', ['With ivory lace trim along the hem.', 'She booked four-thirty after her flight lands.', 'In Fitting Alcove Two downstairs.'], 1, 'ตอบ She booked four-thirty after her flight lands. (ถามเวลา What time ตอบนัดไว้สี่โมงครึ่งหลังเครื่องลง)'),
    p2(15, 'l15-p2-16', 'uk_f', 'au_m', 'Who signs off on organic cotton export certificates for European mills?', ['Ten metric tons of combed cotton bales.', 'Talk to Carlos in Quality Control—he handles EU customs stamps.', 'Inside the climate-controlled yarn vault.'], 1, 'ตอบ Talk to Carlos in Quality Control—he handles EU customs stamps. (ถามบุคคล Who ตอบให้คุยกับ Carlos ฝ่ายควบคุมคุณภาพ ซึ่งเป็นคนดูแลใบรับรองส่งออกยุโรป)'),
    p2(15, 'l15-p2-17', 'ca_f', 'us_f2', 'How much is the textile mill’s minimum surcharge for custom-dyed sample yardage?', ['For recycled canvas and hemp blends.', 'One hundred eighty dollars per vat color under fifty yards.', 'Yes, sample bolts ship within ten days.'], 1, 'ตอบ One hundred eighty dollars per vat color under fifty yards. (ถามค่าใช้จ่ายขั้นต่ำ How much ตอบ $180 ต่อสีสำหรับออเดอร์ต่ำกว่า 50 หลา)'),
    p2(15, 'l15-p2-18', 'au_m', 'uk_m', 'Did the apparel showroom swap out those warm track spotlights over the wool coats?', ['Behind the rear velvet fitting curtain.', 'Yes, Maintenance installed cooler LED fixtures yesterday afternoon.', 'No, I prefer belted cashmere overcoats.'], 1, 'ตอบ Yes, Maintenance installed cooler LED fixtures yesterday afternoon. (ถามว่าเปลี่ยนโคมไฟสปอตไลต์แล้วหรือยัง ตอบเปลี่ยนเป็นหลอด LED เย็นแล้วเมื่อบ่ายวานนี้)'),
    p2(15, 'l15-p2-19', 'us_f', 'uk_f', 'I heard Meridian Boutique placed an initial order for forty merino trench coats.', ['That’s huge—let’s flag Production right away so we lock in yarn!', 'Hang sample tags on the left shoulder.', 'Next to the freight elevator on Floor Three.'], 0, 'ตอบ That’s huge—let’s flag Production right away so we lock in yarn! (รับฟังข่าวลูกค้าสั่งออเดอร์ใหญ่ ตอบรับตื่นเต้นและเสนอให้รีบแจ้งฝ่ายผลิตจองเส้นด้าย)'),
    p2(15, 'l15-p2-20', 'uk_m', 'ca_f', 'When do exhibitor crates need to be packed and labeled for expo freight pickup?', ['By six P.M. sharp after the closing bell.', 'Using bright orange destination stickers.', 'Ask the floor supervisor at Loading Gate Four.'], 0, 'ตอบ By six P.M. sharp after the closing bell. (ถามกำหนดเวลาเก็บลังสินค้า When ตอบต้องแพ็กและติดป้ายให้เสร็จภายใน 18:00 น. ตรงหลังจบงาน)'),
    p2(15, 'l15-p2-21', 'us_m', 'au_f', 'Do you know if there’s an electrical outlet behind the booth’s fitting mirror?', ['Twelve yards of heavy blackout drapery.', 'Yes, a twenty-amp floor box sits right beneath the curtain.', 'Tomorrow morning during setup hours.'], 1, 'ตอบ Yes, a twenty-amp floor box sits right beneath the curtain. (ถามตำแหน่งปลั๊กไฟหลังกระจก ตอบมีกล่องปลั๊ก 20 แอมป์บนพื้นใต้ม่านพอดี)'),
    p2(15, 'l15-p2-22', 'ca_m', 'uk_f2', 'What time do textile mill morning shifts inspect overnight loom output?', ['Checking yarn tension and weft defects.', 'Usually right around six-forty-five before shift handoff.', 'Along Spinning Rows One through Six.'], 1, 'ตอบ Usually right around six-forty-five before shift handoff. (ถามเวลา What time ตอบปกติตรวจช่วง 06:45 น. ก่อนส่งมอบกะ)'),
    p2(15, 'l15-p2-23', 'au_f', 'us_f2', 'Can you courier these altered dinner jackets to the client’s hotel concierge?', ['Sure, write the room reservation name on the garment tag.', 'Yes, silk lapels look sharp under stage lights.', 'Inside the cedar-lined coat wardrobe.'], 0, 'ตอบ Sure, write the room reservation name on the garment tag. (ขอให้ช่วยส่งสูทไปที่โรงแรมลูกค้า ตอบได้ ให้เขียนชื่อผู้จองห้องลงบนป้ายชุดเลย)'),
    p2(15, 'l15-p2-24', 'uk_f', 'ca_f', 'Have our European showroom reps confirmed their flight times for Buyer Week?', ['About thirty-five retail chain merchandisers.', 'Most arrived this morning, though two from Milan land tonight.', 'Because wool sample trunks cleared customs late.'], 1, 'ตอบ Most arrived this morning, though two from Milan land tonight. (ถามตัวแทนยุโรปยืนยันเที่ยวบินหรือยัง ตอบส่วนใหญ่ถึงเมื่อเช้า เหลืออีกสองคนจากมิลานลงเครื่องคืนนี้)'),
    p2(15, 'l15-p2-25', 'us_m2', 'uk_m', 'Whose brass tailor shears were left sitting on the showroom pressing board?', ['Those have Marcus’s initials engraved on the handle.', 'Yes, German steel stays sharp for years.', 'Keep extra chalk pencils inside the top drawer.'], 0, 'ตอบ Those have Marcus’s initials engraved on the handle. (ถามความเป็นเจ้าของ Whose ตอบกรรไกรคู่นั้นสลักชื่อย่อของ Marcus ไว้ที่ด้าม)'),

    // Set 15 Part 3 (13 Conversations: 1-10 null doc, 11-13 graphic doc)
    p3(15, 'l15-p3-1', [
      ['Man', 'uk_m', 'Hannah, take a look at Bolt Fourteen from yesterday’s olive linen dye run under the north skylight.'],
      ['Woman', 'us_f', 'Hmm... hold it right beside the approved lab dip card. Wait—this batch came out noticeably darker forest green than the soft olive our apparel buyer signed off on!'],
      ['Man', 'uk_m', 'Agreed—checking the vat log, overnight boiler steam drifted five degrees hotter, making the fiber soak up extra pigment.'],
      ['Woman', 'us_f', 'Let’s pull those eight olive bolts off the shipping pallet and schedule a gentle scour wash before re-sampling for the buyer.'],
    ], null, [
      ['Part 3 · Problem', 'What defect did the speakers find in Bolt Fourteen?', ['The dyed fabric shade came out darker than the approved sample', 'Overnight boiler steam shrank the woven linen width', 'Olive dye stained adjacent white cotton bolts', 'The buyer rejected the soft linen fabric texture'], 0, 'ตอบ The dyed fabric shade came out darker than the approved sample (สีผ้าลินินล็อตนี้เข้มกว่าตัวอย่างสีที่ลูกค้าอนุมัติไว้)'],
      ['Part 3 · Cause', 'Why did the dye batch absorb extra color?', ['Boiler steam ran five degrees warmer than specified overnight', 'Mill technicians mixed double quantities of olive pigment', 'Unbleached flax yarn sat in the dye vat too long', 'North skylight glare distorted visual color checks'], 0, 'ตอบ Boiler steam ran five degrees warmer than specified overnight (ไอน้ำหม้อต้มตอนกลางคืนร้อนเกินกำหนดไป 5 องศาทำให้เส้นใยดูดซับสีเข้มขึ้น)'],
      ['Part 3 · Action', 'What will the mill team do with the eight olive bolts?', ['Remove them from shipping and run a mild color-lightening wash', 'Send them directly to the apparel buyer with a discount', 'Sell the darker forest green yardage at the trade expo', 'Re-weave eight fresh bolts using unbleached yarn'], 0, 'ตอบ Remove them from shipping and run a mild color-lightening wash (คัด 8 ม้วนออกจากพาเลตส่งออกแล้วนำไปซักลดสีอ่อนๆ ก่อนส่งตัวอย่างให้ลูกค้าตรวจใหม่)'],
    ]),

    p3(15, 'l15-p3-2', [
      ['Woman', 'au_f', 'Good afternoon, Savile & Co. Atelier! Your cream silk wedding jacket is pinned and marked—let’s check timing for final pickup.'],
      ['Man', 'ca_m', 'Thanks so much, Elena! Wait—my flight to Lisbon moved up from Saturday to Thursday morning, so could I possibly collect the altered jacket by five P.M. Wednesday?'],
      ['Woman', 'au_f', 'Thursday morning? Let’s see—shortening both cuffs and taking in the back seam usually takes four days, though I only have one bridal dress ahead of you tomorrow.'],
      ['Man', 'ca_m', 'Would paying a rush tailoring surcharge get it pressed and bagged by Wednesday afternoon?'],
      ['Woman', 'au_f', 'No need for extra rush fees—since you’ve been a loyal client, I’ll finish the hand-basting tonight and have it steamed ready by four Wednesday.'],
    ], null, [
      ['Part 3 · Purpose', 'Why does the man ask for an earlier pickup time?', ['His international flight departure moved two days earlier', 'His wedding ceremony was rescheduled to Wednesday evening', 'Another tailoring shop failed to alter his trousers on time', 'He plans to pack the jacket into a trade show trunk'], 0, 'ตอบ His international flight departure moved two days earlier (เที่ยวบินไปลิสบอนเลื่อนเร็วขึ้นจากวันเสาร์เป็นเช้าวันพฤหัส จึงอยากรับชุดเย็นวันพุธ)'],
      ['Part 3 · Detail', 'Which alterations are needed on the jacket?', ['Shortening the sleeves and narrowing the back seam', 'Replacing horn buttons and adding silk shoulder pads', 'Attaching ivory lace trim along the collar lapels', 'Removing steam creases from cream trousers'], 0, 'ตอบ Shortening the sleeves and narrowing the back seam (ต้องตัดแขนเสื้อทั้งสองข้างให้สั้นลงและเก็บทรงตะเข็บด้านหลัง)'],
      ['Part 3 · Decision', 'How does Elena respond to the man’s offer to pay a rush fee?', ['She waives the surcharge and promises completion by 4:00 P.M. Wednesday', 'She charges a standard express fee to finish tonight', 'She advises picking up the jacket directly at Lisbon airport', 'She asks him to come back Thursday morning instead'], 0, 'ตอบ She waives the surcharge and promises completion by 4:00 P.M. Wednesday (ไม่คิดค่าเร่งด่วนเพราะเป็นลูกค้าประจำ และรับปากทำให้เสร็จพร้อมรีดไอน้ำภายในบ่ายสี่โมงวันพุธ)'],
    ]),

    p3(15, 'l15-p3-3', [
      ['Man', 'us_m2', 'Uh-oh, Maya—we unpacked all four freight crates inside Booth 412, and our three collapsible steel garment racks are completely missing!'],
      ['Woman', 'uk_f2', 'Wait, what? How can we hang forty fall wool coats before buyer previews open at nine A.M.? Let me scan the freight dock receipt!'],
      ['Man', 'us_m2', 'Look at the yellow sticker—someone smudged Booth 412 so it reads 112 over in Hall C!'],
      ['Woman', 'uk_f2', 'Oh no, Hall C is half a mile away and freight carts take hours! Wait—didn’t Exhibitor Services mention spare loaner stands at the East Hall Desk?'],
      ['Man', 'us_m2', 'Good thinking—run down to East Hall Desk for three loaner racks while I steam coats on the back table!'],
    ], null, [
      ['Part 3 · Problem', 'What went wrong with the booth setup in Hall A/Booth 412?', ['Collapsible steel clothing racks were delivered to the wrong hall', 'Forty wool coats arrived wrinkled inside damaged crates', 'Booth 412’s overhead lighting truss failed safety inspection', 'Freight dock workers misplaced the company’s swatch binders'], 0, 'ตอบ Collapsible steel clothing racks were delivered to the wrong hall (ราวแขวนเสื้อเหล็กพับได้ถูกส่งผิดไปที่บูธ 112 ใน Hall C เพราะป้ายเลอะ)'],
      ['Part 3 · Meaning', 'What does the woman mean when she says, "Hall C is half a mile away and freight carts take hours"?', ['Retrieving the misplaced racks won’t be fast enough before opening', 'Exhibition hall freight crews charge extra fees for long distances', 'She prefers moving Booth 412 permanently into Hall C', 'Wool coats are too heavy to carry back without rolling racks'], 0, 'ตอบ Retrieving the misplaced racks won’t be fast enough before opening (เดินไปเอาจาก Hall C ไม่ทันเปิดงานเก้าโมงเช้าแน่ๆ)'],
      ['Part 3 · Action', 'Where will Maya obtain temporary coat stands before nine A.M.?', ['Borrow temporary display stands from the East Hall Desk', 'Walk to Booth 112 in Hall C to claim the steel racks', 'Lay all forty wool coats flat across the front counter', 'Call freight dock dispatchers to delay buyer previews'], 0, 'ตอบ Borrow temporary display stands from the East Hall Desk (จะรีบไปยืมราวแขวนสำรองจากเคาน์เตอร์บริการผู้แสดงสินค้าที่ East Hall แทน)'],
    ]),

    p3(15, 'l15-p3-4', [
      ['Woman1', 'us_f', 'Okay showroom team, buyers from three major department stores arrive at ten A.M. Let’s check Rack Layout before unlocking the glass doors.'],
      ['Man', 'uk_m', 'All twenty-four spring linen jackets are steamed and arranged by color palette along Rack One, and fabric composition hangtags are clipped on.'],
      ['Woman2', 'ca_f', 'Wait—didn’t Regional Merchandising ask us to group showroom racks by wholesale price tier this season rather than color?'],
      ['Woman1', 'us_f', 'Yes, good catch! Last quarter, buyers kept grabbing luxury cashmere pieces thinking they sat in the mid-price tier! Let’s re-sort Racks One through Three by price bracket right now.'],
      ['Man', 'uk_m', 'On it—takes ten minutes tops while Chloe sets out the wholesale order tablets!'],
    ], null, [
      ['Part 3 · Detail', 'Why does the first woman agree to reorganize the showroom garment racks?', ['Organizing by price tier prevents buyers from confusing cost brackets', 'Color-sorted racks looked uneven beside the front mirrors', 'Cashmere jackets needed extra hanger space away from linen', 'Department store buyers asked to preview winter wool first'], 0, 'ตอบ Organizing by price tier prevents buyers from confusing cost brackets (ไตรมาสที่แล้วผู้ซื้อหยิบเสื้อแคชเมียร์ราคาแพงเพราะเข้าใจผิดว่าเป็นกลุ่มราคากลาง จึงจัดเรียงใหม่ตามระดับราคาแทนสี)'],
      ['Part 3 · Time', 'When do the department store buyers arrive?', ['At 10:00 A.M.', 'In ten minutes', 'This afternoon', 'Tomorrow morning'], 0, 'ตอบ At 10:00 A.M. (ผู้ซื้อจากห้างสรรพสินค้าใหญ่สามแห่งจะมาถึงเวลา 10:00 น.)'],
      ['Part 3 · Action', 'What will Chloe do while the racks are re-sorted?', ['Place wholesale order tablets out for buyer use', 'Clip composition hangtags onto linen jackets', 'Unlock the showroom glass entrance doors', 'Steam twenty-four luxury cashmere coats'], 0, 'ตอบ Place wholesale order tablets out for buyer use (Man ระบุว่า Chloe จะเตรียมวางแท็บเล็ตสำหรับสั่งซื้อส่งระหว่างที่ช่วยกันเรียงราวใหม่)'],
    ]),

    p3(15, 'l15-p3-5', [
      ['Man', 'au_m', 'Hey Priya, Loom Seven just flashed an auto-stop light along Weaving Row Two.'],
      ['Woman', 'us_f2', 'Oh no—did the main drive belt slip again, or did a shuttle jam?'],
      ['Man', 'au_m', 'Neither—thankfully its optical tension sensor caught a snapped combed-cotton warp thread early before creating a three-yard weave flaw!'],
      ['Woman', 'us_f2', 'Nice save by the sensor. How long to re-thread that warp end and bring Loom Seven back up to speed?'],
      ['Man', 'au_m', 'About thirty-five minutes—I already grabbed matching two-ply spools from Yarn Cart Three.'],
    ], null, [
      ['Part 3 · Problem', 'What triggered Loom Seven to stop automatically?', ['A cotton warp yarn strand broke mid-weave', 'The main rubber drive belt slipped off its pulley', 'Optical tension sensors failed overnight inspection', 'Yarn Cart Three ran empty of two-ply spools'], 0, 'ตอบ A cotton warp yarn strand broke mid-weave (ด้ายยืนเส้นฝ้ายขาดกลางคัน เซนเซอร์เลยสั่งหยุดเครื่องอัตโนมัติ)'],
      ['Part 3 · Benefit', 'Why is the woman pleased with the machine’s sensor?', ['It prevented yards of defective fabric from being woven', 'It automatically re-threaded the broken yarn strand', 'It switched Loom Seven to a faster backup belt', 'It signaled Yarn Cart Three operators to deliver spools'], 0, 'ตอบ It prevented yards of defective fabric from being woven (เซนเซอร์จับได้ไวก่อนจะทอผ้าเสียยาวถึง 3 หลา)'],
      ['Part 3 · Time', 'How long does the technician estimate repairs will take?', ['Roughly 35 minutes', 'About 3 hours', 'Seven minutes', 'Until shift change'], 0, 'ตอบ Roughly 35 minutes (ประเมินเวลาประมาณ 35 นาทีเพราะหยิบหลอดด้ายสำรองมาเตรียมไว้แล้ว)'],
    ]),

    p3(15, 'l15-p3-6', [
      ['Woman', 'uk_f', 'Leo, check our lining inventory drawer—we only have nine yards of breathable charcoal silk twill left!'],
      ['Man', 'ca_m', 'Whoa, didn’t we stock forty yards last month?'],
      ['Woman', 'uk_f', 'We did, yet corporate orders for bespoke summer blazers doubled this week! Every single client picked breathable silk lining over heavy acetate.'],
      ['Man', 'ca_m', 'Got it. Should I call our Lyon textile distributor right now for a thirty-yard express bolt so Tuesday’s fittings stay on schedule?'],
      ['Woman', 'uk_f', 'Yes please—and add five spools of matching charcoal buttonhole thread while they’re packing the tube!'],
    ], null, [
      ['Part 3 · Cause', 'Why did charcoal silk lining run low so quickly?', ['Orders for custom summer blazers doubled unexpectedly', 'Heavy acetate lining bolts arrived damaged from France', 'Tuesday’s fittings used extra fabric for sleeve alterations', 'Atelier drawers misplaced thirty yards of silk twill'], 0, 'ตอบ Orders for custom summer blazers doubled unexpectedly (ยอดสั่งตัดเสื้อเบลเซอร์ฤดูร้อนขององค์กรเพิ่มขึ้นสองเท่าในสัปดาห์นี้)'],
      ['Part 3 · Action', 'What will Leo order from the textile distributor?', ['Thirty yards of silk lining plus five spools of matching thread', 'Forty yards of breathable acetate lining in charcoal', 'Bespoke summer blazer patterns for corporate fittings', 'Five spare shipping tubes for Tuesday’s deliveries'], 0, 'ตอบ Thirty yards of silk lining plus five spools of matching thread (ให้สั่งผ้าซับในไหม 30 หลาด่วนและเพิ่มด้ายรังดุมสีเทาถ่านอีก 5 หลอด)'],
      ['Part 3 · Detail', 'Where is the atelier’s silk distributor located?', ['In Lyon', 'In Lisbon', 'In Milan', 'Downtown'], 0, 'ตอบ In Lyon (ผู้ชายระบุว่าจะโทรหาผู้จัดจำหน่ายสิ่งทอที่เมือง Lyon ทันที)'],
    ]),

    p3(15, 'l15-p3-7', [
      ['Man', 'us_m', 'Excuse me, Expo Tech Support? I’m staffing Fashion Booth 412, and our handheld badge-scanner tablet isn’t uploading buyer contacts into our sales system!'],
      ['Woman', 'au_f', 'Let’s take a look at your tablet settings—hmm, your Wi-Fi toggle shows connected to Hall Public Guest, which blocks secure CRM ports!'],
      ['Man', 'us_m', 'Oh! No wonder all twenty-eight morning buyer scans are sitting in the queue! Did I lose those leads?'],
      ['Woman', 'au_f', 'Not at all—they’re safely cached locally. Let me connect your scanner to our encrypted Exhibitor-Sync network, and all twenty-eight contacts will upload automatically within sixty seconds.'],
    ], null, [
      ['Part 3 · Problem', 'Why were buyer contact scans failing to upload at Booth 412?', ['The tablet connected to an unsecured public guest Wi-Fi network', 'Handheld badge scanners ran out of local storage space', 'CRM sales software went offline during morning expo hours', 'Twenty-eight visitor badges carried unreadable QR codes'], 0, 'ตอบ The tablet connected to an unsecured public guest Wi-Fi network (แท็บเล็ตไปเชื่อมต่อกับ Wi-Fi สาธารณะสำหรับแขกซึ่งบล็อกพอร์ตส่งข้อมูลเข้าระบบ CRM)'],
      ['Part 3 · Detail', 'What happened to the twenty-eight buyer contacts scanned earlier?', ['They stayed stored safely on the tablet’s internal memory', 'They were permanently erased when Wi-Fi dropped', 'Exhibitor Tech Support backed them up onto flash drives', 'They printed automatically at the main registration desk'], 0, 'ตอบ They stayed stored safely on the tablet’s internal memory (ข้อมูลทั้งหมดถูกแคชเก็บไว้ในเครื่องอย่างปลอดภัย ไม่ได้หายไปไหน)'],
      ['Part 3 · Solution', 'How does the technician fix the synchronization issue?', ['By switching the tablet onto the dedicated Exhibitor-Sync network', 'By emailing a spreadsheet of morning buyer contacts manually', 'By replacing the handheld scanner with a wired barcode reader', 'By restarting the company’s external sales database'], 0, 'ตอบ By switching the tablet onto the dedicated Exhibitor-Sync network (ย้ายไปเชื่อมเครือข่ายเข้ารหัส Exhibitor-Sync เพื่ออัปโหลดอัตโนมัติใน 60 วินาที)'],
    ]),

    p3(15, 'l15-p3-8', [
      ['Man1', 'ca_m', 'Team, Dock Four is loading twenty bales of combed organic cotton bound for our Portuguese apparel partner this afternoon.'],
      ['Man2', 'us_m2', 'Hold up—did European customs brokers verify whether organic farm lot traceability certificates are tucked inside every bale wrap?'],
      ['Woman', 'uk_f', 'Good question! Checking our export manifest—we attached digital certificates online, yet EU port inspectors also demand waterproof paper lot tags sealed directly to Bale One and Bale Twenty!'],
      ['Man1', 'ca_m', 'Whoa, thank goodness we checked before the container doors locked!'],
      ['Woman', 'uk_f', 'I already printed both laminated lot tags—let’s walk out to Dock Four now and zip-tie them onto the bale straps.'],
    ], null, [
      ['Part 3 · Topic', 'What export shipment are the speakers preparing?', ['Twenty bales of organic cotton heading to Portugal', 'Combed wool coats destined for European showrooms', 'Waterproof shipping tarps for Dock Four containers', 'Custom apparel tags printed for European retailers'], 0, 'ตอบ Twenty bales of organic cotton heading to Portugal (เตรียมส่งออกฝ้ายออร์แกนิกหวี 20 ก้อนไปให้คู่ค้าในโปรตุเกส)'],
      ['Part 3 · Requirement', 'What extra step do European port inspectors require besides online files?', ['Physical waterproof lot certificates attached to outer bales', 'Signed customs clearance stamped at Dock Four', 'Separate plastic wrapping around all twenty cotton bales', 'Spanish translations inside the export manifest'], 0, 'ตอบ Physical waterproof lot certificates attached to outer bales (ด่านยุโรปบังคับต้องมีป้ายกระดาษกันน้ำระบุล็อตติดผนึกไว้ที่ก้อนที่ 1 และ 20 ด้วย)'],
      ['Part 3 · Action', 'What will the speakers do immediately?', ['Fasten printed laminated tags onto bales at Dock Four', 'Delay the container truck departure until tomorrow', 'Upload digital organic farm certificates to customs brokers', 'Inspect cotton yarn weight inside the shipping container'], 0, 'ตอบ Fasten printed laminated tags onto bales at Dock Four (จะเดินไปที่ Dock Four เพื่อรัดป้ายเคลือบพลาสติกทั้งสองใบติดกับสายรัดก้อนฝ้ายทันที)'],
    ]),

    p3(15, 'l15-p3-9', [
      ['Woman', 'us_f', 'Whew—walk over by Showroom Window Two with me, Ben. Do these heavy camel wool coats feel weirdly warm to the touch?'],
      ['Man', 'uk_m', 'Whoa—you’re right, those three halogen track spotlights overhead are baking the shoulders right through the glass display!'],
      ['Woman', 'us_f', 'No wonder! Prolonged heat dries out natural wool fibers and fades dye along the collar!'],
      ['Man', 'uk_m', 'Let’s pull those coats off the front rack right now and ask Building Maintenance to swap every window spotlight over to cool LED bulbs before Friday’s press preview.'],
    ], null, [
      ['Part 3 · Problem', 'What issue did the speakers notice near Showroom Window Two?', ['Hot halogen lights are overheating displayed wool coats', 'Sunlight fading damaged camel coats near the glass door', 'Broken track spotlights left Window Two poorly lit', 'Wool garments wrinkled excessively on the front rack'], 0, 'ตอบ Hot halogen lights are overheating displayed wool coats (ไฟสปอตไลต์ฮาโลเจนสามดวงด้านบนแผ่ความร้อนมากเกินไปจนเสื้อโค้ตวูลร้อนและเสี่ยงต่อสีซีดเส้นใยแห้ง)'],
      ['Part 3 · Meaning', 'What does the woman mean when she says, "No wonder!"?', ['The hot track lights clearly explain why the coats felt warm', 'She expected wool fabrics to hold afternoon sunlight heat', 'Maintenance warned them earlier about Window Two wiring', 'Press reporters often complain about bright showroom lights'], 0, 'ตอบ The hot track lights clearly explain why the coats felt warm (เข้าใจเหตุผลทันทีว่าความร้อนจากหลอดฮาโลเจนนั่นเองที่ทำให้เสื้อร้อน)'],
      ['Part 3 · Action', 'What will happen before Friday’s press preview?', ['Building staff will replace the halogen bulbs with cool LEDs', 'Showroom stylists will draw blackout curtains over Window Two', 'All camel wool coats will move permanently to storage racks', 'Press photographers will bring portable cool studio lamps'], 0, 'ตอบ Building staff will replace the halogen bulbs with cool LEDs (ให้ฝ่ายอาคารเปลี่ยนหลอดไฟหน้าต่างทั้งหมดเป็นหลอด LED แบบเย็นก่อนงานสื่อวันศุกร์)'],
    ]),

    p3(15, 'l15-p3-10', [
      ['Woman', 'au_f', 'Hi Mark—morning crowds at the Sustainable Apparel Expo completely wiped out Display Tray One! We don’t have a single recycled-denim swatch card left!'],
      ['Man', 'us_m', 'Whoa, that fast? Wait—we packed three reserve boxes of denim swatch cards inside our hotel storage van parked across the street, right?'],
      ['Woman', 'au_f', 'Yes, sitting right behind the exhibitor banner tubes! Can your courier runner dash over and grab two boxes before the one P.M. keynote crowd spills back into the hall?'],
      ['Man', 'us_m', 'Already texting our runner—he’ll drop fresh swatch packs at our booth counter in fifteen minutes.'],
    ], null, [
      ['Part 3 · Problem', 'Why is the apparel expo booth representative contacting Mark?', ['Morning visitors took every recycled-denim sample card', 'Exhibition staff misplaced Display Tray One at opening', 'Hotel van keys were accidentally locked inside Booth 412', 'Afternoon keynote speeches canceled booth traffic'], 0, 'ตอบ Morning visitors took every recycled-denim sample card (ผู้เข้าชมช่วงเช้าหยิบการ์ดตัวอย่างผ้ายีนส์รีไซเคิลไปจนหมดถาดแล้ว)'],
      ['Part 3 · Detail', 'Where are the extra swatch cards currently stored?', ['Inside a storage van parked near the venue', 'Underneath the exhibitor banner desk in Hall A', 'Back at the textile mill’s regional office', 'In Display Tray Two beside the coat rack'], 0, 'ตอบ Inside a storage van parked near the venue (สำรองไว้อีก 3 กล่องในรถตู้เก็บของที่จอดอยู่ฝั่งตรงข้ามงาน)'],
      ['Part 3 · Time', 'When should the fresh sample packs arrive at the booth?', ['In about 15 minutes', 'Right after 1:00 P.M.', 'Tomorrow morning', 'At closing time'], 0, 'ตอบ In about 15 minutes (ผู้ชายส่งข้อความให้คนวิ่งของไปเอามาให้และจะถึงบูธภายใน 15 นาที)'],
    ]),

    p3(15, 'l15-p3-11', [
      ['Woman', 'ca_f', 'Lucas, where should we plug in our portable two-thousand-watt commercial garment steamer inside Booth 412?'],
      ['Man', 'uk_m', 'Careful—the front swatch counter and center lookbook table only have light 10-amp strips meant for iPads and desk lamps! Plugging a high-wattage steamer up front will pop the circuit!'],
      ['Woman', 'ca_f', 'Good catch! Let’s check our booth floor plan—which zone carries the heavy-duty 20-amp drop and keeps steam safely behind a curtain?'],
      ['Man', 'uk_m', 'Right here at the back! Let’s wheel the steamer rack into that rear fitting area right away!'],
    ], doc('diagram', 'Trade Expo Booth 412 — Electrical & Layout Map', [['Booth Size', '20 x 20 ft Corner Space']], [
      box('Booth Zone Specifications', [
        '• Zone 1 — Front Swatch Bar: 10A Strip (Tablets & LED strips only)',
        '• Zone 2 — Center Lookbook Table: 10A Floor Drop (Lighting & chargers)',
        '• Zone 3 — Rear Fitting Alcove: 20A Dedicated Circuit (Curtained area)',
        '• Zone 4 — Storage Closet: Unpowered Lockbox (Extra coat trunks)',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Where will the speakers set up the garment steamer?', ['Zone 3 (Rear Fitting Alcove)', 'Zone 1 (Front Swatch Bar)', 'Zone 2 (Center Lookbook Table)', 'Zone 4 (Storage Closet)'], 0, 'ตอบ Zone 3 (Rear Fitting Alcove) (เครื่องรีดไอน้ำ 2,000 วัตต์ต้องใช้ไฟแรง 20A และมีม่านกั้น ซึ่งในแผนผังคือ Zone 3 Rear Fitting Alcove)'],
      ['Part 3 · Problem', 'What would happen if the steamer ran from the Front Swatch Bar?', ['Excess power draw would trip the 10-amp circuit', 'Water steam would warp wooden lookbook tables', 'Buyers would trip over extension cords at the entrance', 'Tablet badge scanners would disconnect from Wi-Fi'], 0, 'ตอบ Excess power draw would trip the 10-amp circuit (ด้านหน้ามีปลั๊กแค่ 10 แอมป์สำหรับแท็บเล็ตและไฟ LED ถ้าเสียบเครื่องรีดไอน้ำกำลังไฟสูงเบรกเกอร์จะตัด)'],
      ['Part 3 · Detail', 'Which booth zone has no electrical outlets?', ['Zone 4 (Storage Closet)', 'Zone 1 (Front Swatch Bar)', 'Zone 2 (Center Lookbook Table)', 'Zone 3 (Rear Fitting Alcove)'], 0, 'ตอบ Zone 4 (Storage Closet) (แผนผังระบุ Zone 4 เป็น Unpowered Lockbox ไม่มีปลั๊กไฟ)'],
    ]),

    p3(15, 'l15-p3-12', [
      ['Woman', 'us_f2', 'Hi Ben—we’re sourcing two hundred yards of sustainable jacket fabric for our spring collection. Our target ceiling is fifteen dollars per yard, and we need delivery within two weeks!'],
      ['Man', 'au_m', 'Welcome to LoomCraft Mills! Let’s scan our wholesale sheet together. Silk Charmeuse and Brushed Wool Twill are well above fifteen dollars per yard.'],
      ['Woman', 'us_f2', 'Right—and looking closely at the two fabrics under fifteen dollars, wait: one takes three full weeks to ship, which misses our sample patternmaker’s deadline!'],
      ['Man', 'au_m', 'Exactly—so your best match is the recycled option! Even better, its 150-yard minimum easily clears your two-hundred-yard order and ships in just ten days!'],
    ], doc('table', 'LoomCraft Mills — Wholesale Fabric Price Sheet', [['Terms', 'FOB Mill Warehouse']], [
      tbl(
        ['Fabric Type', 'Price / Yard', 'Lead Time', 'Min Order'],
        [
          ['Organic Linen Blend', '$14.50', '21 Days', '100 Yards'],
          ['Brushed Wool Twill', '$26.00', '14 Days', '100 Yards'],
          ['Recycled Cotton Canvas', '$11.20', '10 Days', '150 Yards'],
          ['Silk Charmeuse', '$34.00', '7 Days', '50 Yards'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which fabric meets both the price cap and two-week delivery deadline?', ['Recycled Cotton Canvas', 'Organic Linen Blend', 'Brushed Wool Twill', 'Silk Charmeuse'], 0, 'ตอบ Recycled Cotton Canvas (Organic Linen Blend ราคา $14.50 แต่ส่ง 21 วันเกิน 2 สัปดาห์ จึงเลือก Recycled Cotton Canvas ที่ราคา $11.20 และส่งใน 10 วัน)'],
      ['Part 3 · Detail', 'How many yards of fabric does the woman plan to order?', ['200 yards', '150 yards', '100 yards', '50 yards'], 0, 'ตอบ 200 yards (ผู้หญิงระบุว่าต้องการสั่งซื้อผ้า 200 หลาสำหรับคอลเลกชันฤดูใบไม้ผลิ)'],
      ['Part 3 · Cause', 'Why can’t the buyer use Organic Linen Blend for this order?', ['Its three-week shipping lead time misses the patternmaker’s schedule', 'Its $14.50 per-yard price exceeds the fifteen-dollar ceiling', 'LoomCraft Mills requires a minimum order above 200 yards', 'Patternmakers prefer brushed wool textures for spring jackets'], 0, 'ตอบ Its three-week shipping lead time misses the patternmaker’s schedule (ใช้เวลาจัดส่ง 21 วัน ซึ่งไม่ทันกำหนดส่งงานแพตเทิร์นใน 2 สัปดาห์)'],
    ]),

    p3(15, 'l15-p3-13', [
      ['Woman', 'uk_f2', 'Hi, Savile & Co. Atelier—this is Marcus calling about Alteration Ticket 619 for my charcoal wool suit.'],
      ['Man', 'us_m2', 'Of course, Marcus! Let me pull up your ticket: four tasks logged—sleeve shortening, waist tapering, button replacement, and trouser cuff hemming.'],
      ['Woman', 'uk_f2', 'Actually, I realized I like the original dark buttons after all, so please cancel the button swap! Can you check when the rest will be ready and what my updated balance is?'],
      ['Man', 'us_m2', 'No problem—removing the button task hasn’t started anyway, so your total drops by twenty-five dollars, and everything remaining finishes right on schedule by Thursday afternoon!'],
    ], doc('receipt', 'Savile & Co. Atelier — Alteration Ticket #619', [['Client', 'Marcus Cho · Charcoal Suit']], [
      lst([
        '• Shorten Jacket Sleeves (1.5 cm): $35 — Ready Wednesday',
        '• Taper Jacket Waist Seam: $45 — Ready Thursday 3:00 P.M.',
        '• Replace Standard Buttons with Horn: $25 — Ready Friday',
        '• Hem Trouser Cuffs: $22 — Ready Wednesday',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. What is Marcus’s updated total bill after canceling the button replacement?', ['$102', '$127', '$80', '$105'], 0, 'ตอบ $102 (รายการทั้งหมด $35 + $45 + $25 + $22 = $127 เมื่อยกเลิกเปลี่ยนกระดุม -$25 จึงเหลือ $102)'],
      ['Part 3 · Time', 'Why is the suit now ready on Thursday instead of Friday?', ['Only the eliminated button task required until Friday', 'Sleeve shortening was moved ahead to Tuesday morning', 'Marcus paid an express tailoring fee over the phone', 'Trouser cuffs were already hemmed last week'], 0, 'ตอบ Only the eliminated button task required until Friday (มีเพียงงานเปลี่ยนกระดุมที่เสร็จวันศุกร์ งานอื่นเสร็จช้าสุดคือบ่ายสามโมงวันพฤหัสบดี)'],
      ['Part 3 · Detail', 'Which garment alteration is the most expensive item remaining on the ticket?', ['Tapering the jacket waist seam', 'Shortening jacket sleeves by 1.5 cm', 'Hemming the trouser cuffs', 'Steaming the charcoal wool fabric'], 0, 'ตอบ Tapering the jacket waist seam (ในใบรับงาน Taper Jacket Waist Seam ราคาสูงที่สุดที่ $45)'],
    ]),

    // Set 15 Part 4 (10 Talks: 1-7 null doc, 8-10 graphic doc; 45-85 words each)
    p4(15, 'l15-p4-1', 'the following recorded telephone message', 'uk_m',
      'Thank you for calling Savile & Co. Tailoring Atelier. Our showroom is open Tuesday through Saturday from ten A.M. to six P.M. Custom suit fittings typically require a three-week turnaround, while standard sleeve or hem alterations finish within four business days. Need urgent garment steaming before a ceremony? Same-day express pressing is available for drop-offs before eleven A.M. Press two to schedule a private fitting appointment.',
      null, [
        ['Part 4 · Detail', 'How long do routine alteration jobs usually take at the atelier?', ['Four business days', 'Three weeks', 'One business day', 'Two hours'], 0, 'ตอบ Four business days (งานแก้ทรงทั่วไปเช่นแขนเสื้อหรือชายกางเกงเสร็จภายใน 4 วันทำการ)'],
        ['Part 4 · Condition', 'What condition applies to same-day express garment pressing?', ['Items must be dropped off prior to 11:00 A.M.', 'Clients must book private fitting rooms in advance', 'Orders must belong to custom three-week suit packages', 'Pressing services run exclusively on Saturdays'], 0, 'ตอบ Items must be dropped off prior to 11:00 A.M. (ต้องนำชุดมาส่งก่อนเวลา 11:00 น. จึงจะได้บริการรีดไอน้ำด่วนภายในวันเดียวกัน)'],
        ['Part 4 · Action', 'Why would a tailoring customer press two on the atelier line?', ['To book a personal suit fitting session', 'To check the status of altered trouser hems', 'To request Saturday express pressing service', 'To speak with showroom fabric suppliers'], 0, 'ตอบ To book a personal suit fitting session (กด 2 เพื่อนัดหมายเวลาเข้าฟิตติ้งชุดส่วนตัว)'],
      ]),

    p4(15, 'l15-p4-2', 'the following trade expo announcement', 'us_f',
      'Good morning, exhibitors and retail buyers at the International Apparel Sourcing Expo! Please note that our afternoon sustainable-textile keynote panel has shifted from Hall B Stage to the larger Grand Concourse Auditorium due to strong pre-registration demand. Exhibitor crews finishing booth touch-ups must wheel empty wooden packing crates off the main carpet aisles before doors unlock to retail buyers at nine-thirty sharp.',
      null, [
        ['Part 4 · Cause', 'Why was the afternoon keynote panel moved to a larger room?', ['Advance attendee registrations exceeded Hall B capacity', 'Exhibition setup crews delayed carpet installation in Hall B', 'Sustainable-textile speakers requested better stage lighting', 'Freight crate deliveries blocked the Hall B Stage entrance'], 0, 'ตอบ Advance attendee registrations exceeded Hall B capacity (ยอดลงทะเบียนล่วงหน้ามีจำนวนมาก จึงย้ายไปห้อง Grand Concourse Auditorium ที่ใหญ่กว่า)'],
        ['Part 4 · Rule', 'What must booth teams do before 9:30 A.M.?', ['Clear empty wooden shipping crates out of walkway aisles', 'Pick up retail buyer badges at Grand Concourse Auditorium', 'Lock fabric swatch displays inside Hall B storage cages', 'Register attendees for the afternoon sustainable-textile talk'], 0, 'ตอบ Clear empty wooden shipping crates out of walkway aisles (ต้องเข็นลังไม้เปล่าออกจากทางเดินพรมหลักให้หมดก่อนเปิดประตู 09:30 น.)'],
        ['Part 4 · Time', 'When do retail buyers enter the exhibition floor?', ['At 9:30 A.M.', 'At 9:00 A.M.', 'In the afternoon', 'At noon'], 0, 'ตอบ At 9:30 A.M. (ประตูจะเปิดรับผู้ซื้อค้าปลีกเวลา 09:30 น. ตรง)'],
      ]),

    p4(15, 'l15-p4-3', 'the following radio advertisement', 'au_f',
      'Tired of waiting six months for imported fabric minimums that tie up your studio budget? Discover LoomCraft Textile Mills! We weave certified recycled canvas, organic linen, and fine merino blends right here locally—with custom dye runs starting at just fifty yards! Best of all, sample yardage ships from our mill floor within ten business days, letting independent fashion labels launch seasonal collections faster. Visit loomcraft-mills dot com today!',
      null, [
        ['Part 4 · Benefit', 'What key advantage does LoomCraft Textile Mills offer small fashion brands?', ['Low custom-dye minimums and rapid ten-day sample delivery', 'Complimentary tailoring ateliers inside overseas mill buildings', 'Six-month payment credit terms on bulk merino wool', 'Automated garment steaming before retail booth openings'], 0, 'ตอบ Low custom-dye minimums and rapid ten-day sample delivery (รับย้อมสีตามสั่งขั้นต่ำเพียง 50 หลาและส่งผ้าตัวอย่างได้ไวใน 10 วันทำการ)'],
        ['Part 4 · Detail', 'Where are LoomCraft’s recycled and organic fabrics woven?', ['At domestic local facilities', 'Across European partner mills', 'Inside independent fashion showrooms', 'At coastal trade expo booths'], 0, 'ตอบ At domestic local facilities (ทอในโรงงานท้องถิ่นเอง ไม่ต้องรอนำเข้าจากต่างประเทศนาน 6 เดือน)'],
        ['Part 4 · Detail', 'What is the minimum order quantity for a custom dye batch?', ['Fifty yards', 'Ten yards', 'Sixty yards', 'Two hundred yards'], 0, 'ตอบ Fifty yards (รับย้อมสีพิเศษเริ่มต้นเพียง 50 หลา)'],
      ]),

    p4(15, 'l15-p4-4', 'the following excerpt from a meeting', 'ca_m',
      'Morning, Showroom Associates! Doors open for Fall Buyer Week in forty minutes, so let’s verify three floor details. First, whenever a retail buyer borrows a sample coat for daylight window checks, scan its red neck tag into your iPad immediately so nothing goes missing between racks. Second, double-check that wholesale price sheets match yesterday’s revised wool quotes. Finally, hot chamomile tea and scones arrive at the hospitality lounge by ten.',
      null, [
        ['Part 4 · Audience', 'Who is attending this pre-opening showroom briefing?', ['Apparel showroom sales associates', 'Tailoring atelier seamstresses', 'Textile mill loom technicians', 'Trade expo freight truck drivers'], 0, 'ตอบ Apparel showroom sales associates (หัวหน้าโชว์รูมบรีฟทีมพนักงานขายก่อนเปิดรับผู้ซื้อในงาน Fall Buyer Week)'],
        ['Part 4 · Instruction', 'What must staff do if a buyer takes a garment near natural windows?', ['Log its red collar tag using a showroom tablet', 'Write a handwritten receipt on wholesale price sheets', 'Accompany the buyer into the hospitality lounge', 'Replace the garment with a color swatch card'], 0, 'ตอบ Log its red collar tag using a showroom tablet (ต้องสแกนป้ายแท็กสีแดงที่คอเสื้อลงใน iPad ทันทีเพื่อป้องกันสินค้าสูญหายระหว่างราว)'],
        ['Part 4 · Detail', 'Why should associates review the wholesale price sheets?', ['Wool garment prices were updated yesterday', 'Fall Buyer Week discounts expire in forty minutes', 'New linen sample tags omit currency figures', 'iPad ordering software reset overnight'], 0, 'ตอบ Wool garment prices were updated yesterday (ราคาผ้าวูลเพิ่งปรับปรุงใหม่เมื่อวาน จึงต้องตรวจให้ตรงกันก่อนเปิดรับผู้ซื้อ)'],
      ]),

    p4(15, 'l15-p4-5', 'the following voicemail message', 'us_f2',
      'Hi Maya, this is Dana from Expo Freight Logistics calling at seven-fifteen Tuesday. Fantastic news regarding your fashion booth’s centerpiece—those three custom backlit linen banners just cleared port inspection overnight! Our flatbed truck picked them up at six A.M. and is already crossing East Bridge toward Convention Loading Bay Four. Please alert your setup crew to have step ladders ready when our driver pulls in around eight.',
      null, [
        ['Part 4 · Purpose', 'Why is Dana leaving this voicemail for Maya?', ['To announce that delayed booth banners cleared customs and arrive soon', 'To notify Maya that backlit banners were held at port inspection', 'To ask Maya to pick up linen tubes at East Bridge warehouse', 'To reschedule Tuesday’s convention loading bay arrival to Wednesday'], 0, 'ตอบ To announce that delayed booth banners cleared customs and arrive soon (โทรแจ้งข่าวดีว่าป้ายผ้าลินินแบบมีไฟผ่านด่านตรวจท่าเรือแล้วและรถกำลังนำไปส่งประมาณ 8 โมงเช้า)'],
        ['Part 4 · Request', 'What should Maya tell her booth installation crew to prepare?', ['Step ladders for hanging the banners', 'Backlit electrical extension cables', 'Forklifts at Convention Loading Bay Three', 'Customs clearance papers from yesterday'], 0, 'ตอบ Step ladders for hanging the banners (ให้เตรียมบันไดพับไว้ให้พร้อมตอนคนขับมาถึงเวลาประมาณแปดโมง)'],
        ['Part 4 · Time', 'When did the freight truck pick up the shipment from port?', ['At 6:00 A.M.', 'At 7:15 A.M.', 'At 8:00 A.M.', 'Last night'], 0, 'ตอบ At 6:00 A.M. (รถบรรทุกเข้ารับของออกมาตั้งแต่เวลา 06:00 น.)'],
      ]),

    p4(15, 'l15-p4-6', 'the following orientation talk', 'uk_f',
      'Welcome to Crestview Textile Mills! Before entering Spinning Gallery Two, remember our machinery safety standards. High-speed yarn spindles rotate at three thousand revolutions per minute—always tie long hair tightly beneath a cap and avoid wearing loose scarves or dangling lanyards near spinning frames. Ear protection plugs sit inside the green wall dispenser beside the steel doors; wear them continuously inside weaving halls. Look at the yellow eye-wash station before we tour the dye lab.',
      null, [
        ['Part 4 · Warning', 'Why must employees secure long hair and remove loose lanyards?', ['Fast-spinning yarn spindles pose a severe entanglement hazard', 'Loose clothing carries lint fibers into clean dye vats', 'Steel spinning frames generate high electrostatic sparks', 'Supervisors check uniform caps beside green dispensers'], 0, 'ตอบ Fast-spinning yarn spindles pose a severe entanglement hazard (แกนปั่นด้ายหมุนเร็วถึง 3,000 รอบต่อนาที เสี่ยงจะดึงผมหรือสายคล้องคอเข้าไปพัน)'],
        ['Part 4 · Meaning', 'Why does the speaker point out the yellow eye-wash station?', ['To ensure new staff know emergency equipment locations before entering the dye lab', 'To announce upcoming maintenance on dye-lab water pipes', 'To remind operators where to rinse stained work gloves', 'To separate spinning gallery walkways from weaving halls'], 0, 'ตอบ To ensure new staff know emergency equipment locations before entering the dye lab (ชี้จุดล้างตาฉุกเฉินสีเหลืองให้พนักงานใหม่จดจำตำแหน่งไว้ก่อนเข้าไปดูห้องย้อมสี)'],
        ['Part 4 · Detail', 'Where can workers obtain hearing protection?', ['From a green dispenser mounted near the steel entrance', 'At the yellow dye-lab station downstairs', 'Inside individual spinning frame lockers', 'From the weaving hall shift supervisor'], 0, 'ตอบ From a green dispenser mounted near the steel entrance (ที่อุดหูกันเสียงอยู่ในกล่องจ่ายสีเขียวข้างประตูเหล็กทางเข้า)'],
      ]),

    p4(15, 'l15-p4-7', 'the following trunk show speech', 'us_m',
      'Thank you all for braving autumn rain to join Savile & Co.’s private Showroom Trunk Show! Over twenty-five years of tailoring in this city, our craftspeople have learned that great fabric speaks loudest when cut simply. Tonight we proudly unveil our twelve-piece Merino-Cashmere Capsule, woven exclusively for our atelier in northern Scotland! Feel free to examine seam finishes on Racks One and Two, and sign our fitting tablet if you’d like private measurements.',
      null, [
        ['Part 4 · Occasion', 'What private event is the Savile & Co. founder hosting?', ['A private evening apparel showcase at a tailoring showroom', 'A twenty-five-year employee retirement dinner', 'An industrial textile mill machinery auction', 'A public trade expo panel on Scottish wool exports'], 0, 'ตอบ A private evening apparel showcase at a tailoring showroom (กล่าวต้อนรับแขกในงานแสดงคอลเลกชันพิเศษ Trunk Show ที่โชว์รูมร้านตัดเสื้อ)'],
        ['Part 4 · Detail', 'Where was the fabric for the new twelve-piece capsule woven?', ['In northern Scotland', 'In northern Italy', 'At a downtown city mill', 'In southern France'], 0, 'ตอบ In northern Scotland (ทอขึ้นเป็นพิเศษสำหรับร้านในภาคเหนือของสกอตแลนด์)'],
        ['Part 4 · Action', 'What are guests invited to do if they want bespoke sizing?', ['Enter their details on the showroom fitting tablet', 'Speak with Scottish mill representatives at Rack One', 'Book morning appointments through the telephone hotline', 'Write measurements on garment paper hangtags'], 0, 'ตอบ Enter their details on the showroom fitting tablet (สามารถลงชื่อบนแท็บเล็ตฟิตติ้งเพื่อขอนัดวัดตัวแบบส่วนตัวได้)'],
      ]),

    p4(15, 'l15-p4-8', 'the following showroom briefing and schedule', 'au_m',
      'Quick morning update, Showroom Stylists—look over today’s Retail Buyer Appointment Schedule before nine-thirty! Coastal fog delayed flights out of Seattle, so our eleven A.M. buyer pushed their showroom visit back by two hours, landing right during our quiet afternoon gap! Please have Stylists switch the men’s wool rack into Room B right after lunch, since Harbor Department Store keeps Room A through eleven.',
      doc('schedule', 'Apparel Showroom — Today’s Buyer Appointments', [['Date', 'Tuesday Fall Preview']], [
        tbl(
          ['Time Slot', 'Retail Buyer', 'Assigned Room', 'Requested Line'],
          [
            ['9:30 A.M.', 'Harbor Dept Store', 'Room A', 'Women’s Cashmere Coats'],
            ['11:00 A.M.', 'Urban Thread Co.', 'Room B', 'Men’s Wool Blazers'],
            ['1:00 P.M.', 'Open · Unbooked', 'Room B', 'Available Window'],
            ['2:30 P.M.', 'Meridian Boutique', 'Room A', 'Organic Linen Suits'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which buyer’s showroom appointment moved to 1:00 P.M.?', ['Urban Thread Co.', 'Harbor Dept Store', 'Meridian Boutique', 'None of the buyers'], 0, 'ตอบ Urban Thread Co. (ลูกค้าเวลา 11:00 A.M. เที่ยวบินดีเลย์จึงขอเลื่อนออกไป 2 ชั่วโมงเป็นช่วงบ่ายโมง ซึ่งในตารางเวลา 11:00 A.M. คือ Urban Thread Co.)'],
        ['Part 4 · Cause', 'Why was the morning appointment rescheduled?', ['Dense fog delayed incoming flights from Seattle', 'Room B wool blazer racks arrived late from steaming', 'Harbor Dept Store extended its Room A session past noon', 'Meridian Boutique requested an earlier afternoon slot'], 0, 'ตอบ Dense fog delayed incoming flights from Seattle (หมอกลงจัดทำให้เที่ยวบินจากซีแอตเทิลล่าช้า)'],
        ['Part 4 · Instruction', 'Which merchandise line should stylists move into Room B after lunch?', ['Men’s wool blazers', 'Women’s cashmere coats', 'Organic linen suits', 'Recycled denim samples'], 0, 'ตอบ Men’s wool blazers (เตรียมราวเสื้อเบลเซอร์ผ้าวูลผู้ชายซึ่งเป็นสินค้าที่ Urban Thread Co. ขอชมไว้ใน Room B หลังมื้อเที่ยง)'],
      ]),

    p4(15, 'l15-p4-9', 'the following booth team announcement and timeline', 'ca_f',
      'Attention, Trade Expo Booth Crew! Check our morning setup timeline before grabbing toolboxes. Freight elevator congestion delayed carpet and overhead lighting contractors by a full hour this morning, meaning they won’t clear Booth 412 until eleven! Rather than standing idle, unpack garment boxes inside the back corner while we push steel rack assembly back sixty minutes—everything else stays right on schedule before afternoon Wi-Fi testing!',
      doc('schedule', 'Fashion Expo — Booth 412 Setup Timeline', [['Day', 'Pre-Opening Setup Day']], [
        lst([
          '• 8:00–10:00 A.M. — Carpet Rollout & Overhead Lighting Rigging',
          '• 10:00 A.M.–1:00 P.M. — Steel Garment Rack Assembly',
          '• 1:00–3:30 P.M. — Sample Coat Steaming & Hangtag Placement',
          '• 3:30–4:30 P.M. — Badge-Scanner Tablet Wi-Fi & Lead Test',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. At what time will the crew now begin assembling steel garment racks?', ['11:00 A.M.', '10:00 A.M.', '1:00 P.M.', '3:30 P.M.'], 0, 'ตอบ 11:00 A.M. (งานปูพรมและไฟล่าช้า 1 ชั่วโมงไปเสร็จตอน 11 โมง จึงเลื่อนเวลาประกอบราวเหล็กจาก 10:00 น. ไปเริ่ม 11:00 น.)'],
        ['Part 4 · Cause', 'What caused the initial morning schedule delay?', ['Crowded freight elevators slowed carpet and lighting crews', 'Steel garment racks arrived late from the freight depot', 'Steaming tools failed morning electrical safety inspections', 'Convention organizers changed the booth number to 412'], 0, 'ตอบ Crowded freight elevators slowed carpet and lighting crews (ความแออัดของลิฟต์ขนของทำให้ช่างปูพรมและติดตั้งไฟล่าช้าไปหนึ่งชั่วโมงเต็ม)'],
        ['Part 4 · Instruction', 'What should booth workers do while waiting for contractors to finish?', ['Open boxed clothing crates in the rear corner', 'Test badge-scanner tablets on the expo Wi-Fi', 'Help overhead lighting riggers clear freight elevators', 'Tag winter coats along the main exhibition aisle'], 0, 'ตอบ Open boxed clothing crates in the rear corner (ให้แกะกล่องเสื้อผ้ารอตรงมุมด้านหลังแทนการยืนรอเฉยๆ)'],
      ]),

    p4(15, 'l15-p4-10', 'the following mill shift briefing and batch report', 'uk_m',
      'Afternoon, Dye House Supervisors! Let’s review our morning Textile Mill Batch Report before evening rolling crews arrive. Slate Gray and Sage Olive both hit exact spectrophotometer color specs and passed! However, notice the one vat flagged Hold—an automatic dosing valve stuck mid-cycle, leaving woven cotton bolts noticeably washed out and streaky. Transfer that entire batch back into Vat Two for chemical rebalancing before night shifts begin!',
      doc('report', 'Crestview Textile Mill — Dye House Batch Log', [['Shift', '2:00 P.M. Quality Review']], [
        box('Active Vat Output Summary', [
          '• Vat 1 (Slate Gray Twill): Passed — Spectrophotometer Delta 0.3',
          '• Vat 2 (Deep Terracotta Cotton): Hold — Under-dyed / Streaky',
          '• Vat 3 (Sage Olive Linen): Passed — Spectrophotometer Delta 0.4',
          '• Vat 4 (Navy Indigo Canvas): Drying — Final inspection at 4:00 P.M.',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which fabric batch requires immediate re-dyeing before the evening shift?', ['Deep Terracotta Cotton', 'Slate Gray Twill', 'Sage Olive Linen', 'Navy Indigo Canvas'], 0, 'ตอบ Deep Terracotta Cotton (รายงานระบุ Vat 2 Deep Terracotta Cotton ขึ้นสถานะ Hold เพราะสีซีดไม่สม่ำเสมอและต้องนำกลับไปปรับสมดุลเคมีใหม่)'],
        ['Part 4 · Cause', 'What malfunction ruined color uniformity in that vat?', ['An automated dye-dosing valve jammed during the cycle', 'Night operators misread the spectrophotometer color spec', 'Cotton bolts entered the vat before pre-wash scouring', 'Drying ovens ran too hot for terracotta pigments'], 0, 'ตอบ An automated dye-dosing valve jammed during the cycle (วาล์วจ่ายสีย้อมอัตโนมัติติดขัดกลางรอบการทำงานทำให้สีจางและด่าง)'],
        ['Part 4 · Detail', 'When will Navy Indigo Canvas undergo its final check?', ['At 4:00 P.M.', 'At 2:00 P.M.', 'Before evening rolling', 'Tomorrow morning'], 0, 'ตอบ At 4:00 P.M. (ตารางระบุ Vat 4 Navy Indigo Canvas กำลังอบแห้งและตรวจขั้นสุดท้ายเวลา 16:00 น.)'],
      ]),
  ];
})();
if (typeof module !== 'undefined') module.exports = { TOEIC_LISTEN_VOL3: globalThis.TOEIC_LISTEN_VOLS[3] };

