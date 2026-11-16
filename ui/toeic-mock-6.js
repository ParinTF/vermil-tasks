// Volume 6 of TOEIC Mock Exam Part 7 passages (Sets 26-30, 70 passage groups = 270 Qs)
globalThis.TOEIC_MOCK_VOLS = globalThis.TOEIC_MOCK_VOLS || {};
globalThis.TOEIC_MOCK_VOLS[6] = (() => {
  const doc = (kind, title, meta, blocks) => ({ kind, title, ...(meta ? { meta } : {}), blocks });
  const tbl = (headers, rows) => ({ type: 'table', headers, rows });
  const lst = (items) => ({ type: 'list', items });
  const chat = (msgs) => ({ type: 'chat', msgs });
  const p7 = (set, id, docs, questions) => ({
    set, id, docs,
    questions: questions.map(([tag, q, choices, ans, why]) => ({ tag, q, choices, ans, why })),
  });
  return [
    // ==================== SET 26 ====================
    p7(26, 'm26-s1', [
      doc('chat', 'Text Message Chain · Metro Kitchen Repair', null, [
        chat([
          ['Victor Ramos', '03:12 P.M.', 'Paula, I arrived behind Bistro Verde to service the DishPro-800 rack washer, though the alley wall breaker box is padlocked.'],
          ['Paula Chen', '03:15 P.M.', 'Ask Line Chef Marco inside the pastry door—he keeps brass key #4 clipped beside the dry-goods dry-erase board. Also refill the empty rinse-aid jug on Shelf 2 before priming pump B.'],
          ['Victor Ramos', '03:19 P.M.', 'Got key #4 from Marco and topped off the sanitizer reservoir. Power cycles normally now; dinner prep dishes can run starting at 4:00 P.M.'],
        ]),
      ]),
    ], [
      ['Single · Problem', 'Why could Victor NOT start repairing the washer immediately upon arriving?', ['A locked electrical panel blocked breaker access in the alley', 'Pump B lacked replacement sealing rings in the service van', 'Line Chef Marco refused entry through the main dining room', 'Evening dinner preparation filled every sink basin'], 0, 'ตอบ A locked electrical panel blocked breaker access in the alley (กล่องเบรกเกอร์ที่ผนังตรอกด้านหลังคล้องแม่กุญแจล็อกไว้)'],
      ['Single · Detail', 'Where did Marco store brass key #4?', ['Next to a dry-erase board near dry-goods storage', 'Inside the rinse-aid reservoir cabinet on Shelf 2', 'Under the DishPro-800 stainless drainage tray', 'Behind the bistro reception desk register'], 0, 'ตอบ Next to a dry-erase board near dry-goods storage (Marco แขวนกุญแจ #4 ไว้ข้างกระดานไวท์บอร์ดห้องเก็บของแห้ง)'],
    ]),

    p7(26, 'm26-s2', [
      doc('memo', 'CIVIC TRANSIT SERVICE ADVISORY',
        [['Effective Dates', 'Monday, April 7 – Friday, April 11'], ['Route Affected', 'Downtown Museum Loop Shuttle']],
        [
          'Because asphalt resurfacing crews are repaving Oak Gate Circle all next week, Downtown Museum Loop shuttles will bypass the East Courtyard drop-off shelter through Friday evening.',
          'Passengers should board at the shaded West Fountain Plaza kiosk on 4th Street, where zero-emission minibuses continue departing every 12 minutes from 8:30 A.M. to 6:30 P.M.',
        ]),
    ], [
      ['Single · Purpose', 'Why is the Museum Loop Shuttle skipping East Courtyard next week?', ['Road crews are laying fresh pavement around Oak Gate Circle', 'Minibuses are undergoing battery maintenance until Saturday', 'West Fountain Plaza installed new solar ticket kiosks', 'Museum operating hours shifted later for spring renovations'], 0, 'ตอบ Road crews are laying fresh pavement around Oak Gate Circle (เจ้าหน้าที่ถนนกำลังปูยางมะตอยใหม่บริเวณ Oak Gate Circle จันทร์–ศุกร์)'],
      ['Single · Detail', 'How frequently do buses depart from West Fountain Plaza during service hours?', ['Every twelve minutes', 'Every five minutes', 'Once every half hour', 'Hourly starting at noon'], 0, 'ตอบ Every twelve minutes (รถมินิบัสออกทุก 12 นาที ตั้งแต่ 08:30–18:30 น.)'],
    ]),

    p7(26, 'm26-s3', [
      doc('review', 'Heritage Dry Cleaners — Customer Review & Manager Reply', null, [
        '★ ★ ★ ★ ★ — Reviewed by Grace Novak (Vintage Silk Suit Pressing)',
        'I accidentally dripped raspberry vinaigrette onto an heirloom ivory blazer three days before my brother’s gallery opening. Heritage treated the silk softly with citrus-enzyme spotting rather than harsh steam chemicals—no yellow halo whatsoever! Only panicked momentarily Saturday afternoon when I noticed one antique brass sleeve cufflink missing from the garment bag.',
        'Manager Reply (Owen Lee, Proprietor): Relieved your blazer shone at the gallery, Grace! Just checking back in here too: our presser recovered that exact engraved cufflink inside the padded shoulder press guard right after locking up, and we tucked it inside Security Envelope #18 in our front safe until you swing by this week!',
      ]),
    ], [
      ['Single · Problem', 'What issue prompted Grace to worry Saturday afternoon?', ['One antique cufflink appeared absent from her blazer’s garment bag', 'Citrus-enzyme spotting left a faint yellow halo on silk sleeves', 'Her brother’s gallery opening was postponed by poor weather', 'Steam presses slightly shrunk the ivory lapel seams'], 0, 'ตอบ One antique cufflink appeared absent from her blazer’s garment bag (เธอตกใจที่เห็นกระดุมข้อมือทองเหลืองหายไปข้างหนึ่งหลังรับชุด)'],
      ['Single · Detail', 'How did Heritage Dry Cleaners protect the heirloom silk fabric?', ['By spot-cleaning with gentle citrus enzymes rather than strong chemicals', 'By washing the blazer in cold distilled water overnight', 'By replacing lined lapels with untreated cotton trim', 'By locking garment bags inside heated steel safes'], 0, 'ตอบ By spot-cleaning with gentle citrus enzymes rather than strong chemicals (ใช้เอนไซม์ส้มแต้มเฉพาะจุดแทนสารเคมีไอน้ำรุนแรง)'],
      ['Single · Detail', 'Where is Grace’s missing brass cufflink currently stored?', ['Inside a numbered security envelope locked in the shop safe', 'Mounted back onto the shoulder press guard for pickup', 'Shipped directly to her brother’s art gallery', 'Pinned inside the blazer pocket on Rack 18'], 0, 'ตอบ Inside a numbered security envelope locked in the shop safe (ผู้จัดการเก็บใส่ซอง Security Envelope #18 ไว้ในตู้เซฟหน้าร้าน)'],
    ]),

    p7(26, 'm26-s4', [
      doc('memo', 'HUMAN RESOURCES POLICY — Q4 PAID VOLUNTEER RELEASE',
        [['Eligibility', 'All Full-Time Employees'], ['Program Year', 'Through December 31']],
        [
          'SilverOak Media supports community engagement by granting each full-time staff member up to eight hours of paid annual Volunteer Release Time without dipping into personal vacation balances.',
          'To arrange time off, submit the volunteer organization name and service date via HR Portal at least seven calendar days beforehand for manager scheduling approval. Within five business days after completing your shift, upload a signed nonprofit attendance slip to finalize payroll coding.',
        ]),
    ], [
      ['Single · Detail', 'How much annual paid time off does SilverOak Media offer specifically for community volunteering?', ['Up to eight hours per year', 'Five business days each quarter', 'Seven calendar days per project', 'One full week before December'], 0, 'ตอบ Up to eight hours per year (พนักงานประจำได้สิทธิ์ลาทำกิจกรรมจิตอาสาโดยรับค่าจ้างสูงสุดปีละ 8 ชั่วโมง ไม่หักวันพักร้อน)'],
      ['Single · Timing', 'How far in advance must employees apply via HR Portal before volunteering?', ['At least seven calendar days early', 'Within five business days of completion', 'At the start of Quarter 4 only', 'Prior to December 31 payroll closing'], 0, 'ตอบ At least seven calendar days early (ต้องยื่นชื่อองค์กรและวันที่ผ่าน HR Portal ล่วงหน้าอย่างน้อย 7 วันปฏิทิน)'],
      ['Single · Requirement', 'What must an employee submit after finishing their volunteer shift?', ['An attendance confirmation form signed by the nonprofit group', 'Photographed receipts for transportation mileage', 'A written summary published in the company intranet newsletter', 'Approval emails from personal vacation coordinators'], 0, 'ตอบ An attendance confirmation form signed by the nonprofit group (ต้องอัปโหลดใบรับรองการเข้าร่วมที่องค์กรไม่แสวงหากำไรเซ็นชื่อภายใน 5 วันทำการ)'],
    ]),

    p7(26, 'm26-s5', [
      doc('ad', 'CAREER OPENING · Riverview Medical Research', null, [
        'Position: Bilingual Clinical Study Intake Coordinator (Full-Time — Mon–Fri Day Hours)',
        'Riverview Medical Research coordinates outpatient cardiovascular studies across four neighborhood clinics. We are hiring an organized Intake Coordinator fluent in Spanish and English to walk volunteers through informed-consent packets, schedule morning blood draws, and log questionnaire scores into secure electronic records.',
        'Schedule & Support: Strict weekday daytime shifts (8:00 A.M.–4:30 P.M.); zero evening or weekend clinical rotations. CPR certification is NOT required before your start date—our nursing director hosts paid recertification workshops during Month 1. Apply with resume and two professional references at riverviewtrials.org/apply.',
      ]),
    ], [
      ['Single · Detail', 'What primary duties will the Intake Coordinator perform?', ['Explaining study consent forms and booking daytime volunteer lab appointments', 'Conducting overnight cardiac hospital ward rounds on weekends', 'Authoring laboratory blood assay procedures for clinical nurses', 'Translating pharmaceutical television commercials into Spanish'], 0, 'ตอบ Explaining study consent forms and booking daytime volunteer lab appointments (อธิบายเอกสารยินยอม นัดเจาะเลือด และบันทึกแบบสอบถามอาสาสมัคร)'],
      ['Single · Detail', 'What is true about the position’s working schedule?', ['Staff work weekday daytime shifts without weekend clinical hours', 'Evening phone follow-ups rotate among coordinators each Saturday', 'Part-time candidates split hours between four outpatient pharmacies', 'Monthly nursing workshops take place on Sunday mornings'], 0, 'ตอบ Staff work weekday daytime shifts without weekend clinical hours (ทำงานจันทร์–ศุกร์ 08:00–16:30 น. ไม่มีกะกลางคืนหรือวันหยุดสุดสัปดาห์)'],
      ['Single · Inference', 'When can a newly hired coordinator earn required CPR credentials?', ['After starting the job, through an employer-funded Month 1 session', 'Prior to uploading two references on riverviewtrials.org', 'During unpaid weekend shadowing before orientation', 'Only if the nursing director approves external clinic credits'], 0, 'ตอบ After starting the job, through an employer-funded Month 1 session (ไม่ต้องมี CPR ตอนสมัคร เพราะผู้อำนวยการพยาบาลจัดอบรมแบบจ่ายค่าจ้างให้ในเดือนแรก)'],
    ]),

    p7(26, 'm26-s6', [
      doc('notice', 'PRODUCT ADVISORY — AeroBrew Smart Kettle (Model KB-9)', null, [
        'AeroBrew Kitchenware has released Firmware v3.4 for connected Model KB-9 temperature-control teakettles sold between May and October.',
        'Under rare Wi-Fi router drops, smart schedules triggered remotely via smartphone could delay the automatic boil-dry shutoff relay by up to ten seconds. Physical pouring and pushing the physical Base Switch manually remain 100% unaffected.',
        'Owners should open the AeroBrew Home app while the kettle rests on its powered cradle to apply the free 90-second over-the-air update automatically, or hold Base Button "+" for five seconds to disable remote Wi-Fi scheduling completely.',
      ]),
    ], [
      ['Single · Detail', 'Under what specific condition could the shutoff delay happen on Model KB-9 kettles?', ['When remote app schedules trigger during unstable home Wi-Fi dropouts', 'When pouring boiling water manually without closing the steel lid', 'When holding Base Button "+" for more than five seconds', 'When upgrading mobile operating systems to Firmware v3.4'], 0, 'ตอบ When remote app schedules trigger during unstable home Wi-Fi dropouts (เกิดได้เฉพาะเวลาสั่งต้มทางไกลผ่านแอปฯ ขณะสัญญาณ Wi-Fi หลุด)'],
      ['Single · Inference', 'What is safe to conclude about using the kettle strictly with its physical Base Switch?', ['Manual button operation works safely even before updating firmware', 'It requires keeping the AeroBrew Home app open continuously', 'Warranty rules prohibit manual boiling until Firmware v3.4 completes', 'Users must unplug the powered cradle every ninety seconds'], 0, 'ตอบ Manual button operation works safely even before updating firmware (ประกาศระบุว่าการใช้งานปุ่มที่ฐานเครื่องโดยตรงปลอดภัย 100% ไม่มีผลกระทบ)'],
      ['Single · Detail', 'How can an owner turn off remote Wi-Fi scheduling without installing the mobile app?', ['Hold Base Button "+" continuously for five seconds', 'Unplug the kettle base during router maintenance windows', 'Clear temperature presets at an authorized kitchenware counter', 'Double-tap the lid release switch while cooling water'], 0, 'ตอบ Hold Base Button "+" continuously for five seconds (กดปุ่ม "+" ที่ฐานค้างไว้ 5 วินาทีเพื่อปิดระบบสั่งงานผ่าน Wi-Fi)'],
    ]),

    p7(26, 'm26-s7', [
      doc('article', 'Swappable Battery Barges Quietly Reshape Short-Haul Canal Freight', null, [
        'ANTWERP MARITIME WEEKLY — For nearly a century, low steel barges pushed timber, bagged cement, and grain along the 90-kilometer canal corridor linking inland brickyards with port terminals powered by booming diesel engines.',
        '[1] Beginning this autumn, logistics firm CanalLine debuted six autonomous-ready electric barges that draw propulsion exclusively from containerized forklift-style battery packs stacked behind the wheelhouse. Rather than tying vessels up for eight-hour plug-in dock waits, quay gantry cranes swap drained battery modules for freshly charged units in just twelve minutes during routine cargo unloading. [2] Each pair of lithium containers delivers enough range to reach two canal lock stations under full load without burning a drop of marine fuel.',
        '[3] Lock tenders and waterfront apartment residents report noticeably calmer canal banks since exhaust fumes and diesel thrum vanished on morning passages. [4] Encouraged by fuel savings exceeding 40%, CanalLine plans to retrofit four more coastal feed vessels by next March.',
      ]),
    ], [
      ['Single · Purpose', 'What development does the article mainly describe?', ['Replacing diesel canal vessels with quick-swap battery electric barges', 'Widening concrete lock gates between brickyards and coastal ports', 'Reducing container crane heights across downtown maritime terminals', 'Exporting bagged cement from Antwerp directly via ocean freighters'], 0, 'ตอบ Replacing diesel canal vessels with quick-swap battery electric barges (เรือบรรทุกไฟฟ้าแบบสลับตู้แบตเตอรี่มาแทนเรือดีเซลในคลองขนส่งสินค้า)'],
      ['Single · Detail', 'How do CanalLine operators minimize battery recharging delays?', ['Quay cranes trade depleted battery boxes for charged ones during unloading', 'Solar panels lining vessel hulls charge packs while sailing between locks', 'Diesel backup generators recharge motors overnight along brickyard banks', 'Two smaller barges tow each cargo load in relay teams'], 0, 'ตอบ Quay cranes trade depleted battery boxes for charged ones during unloading (ใช้เครนยกสลับตู้แบตฯ ที่หมดกับตู้ที่ชาร์จเต็มแล้วใน 12 นาทีระหว่างขนถ่ายสินค้า ไม่ต้องจอดรอ 8 ชม.)'],
      ['Single · Detail', 'Why have nearby waterfront residents reacted positively to the new barges?', ['Engine vibration noise and exhaust smoke no longer drift past homes', 'New apartment walkways opened beside canal lock quays', 'Morning cargo sailings shifted to midday business hours', 'Local cement deliveries now cost 40 percent less'], 0, 'ตอบ Engine vibration noise and exhaust smoke no longer drift past homes (เสียงเครื่องยนต์ดีเซลที่ดังกระหึ่มและควันไอเสียหมดไป)'],
      ['Single · Insertion', 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n"This streamlined turnaround lets fleet dispatchers run the same tight three-voyage daily timetable as before."', ['[1]', '[2]', '[3]', '[4]'], 1, 'ตอบ [2] (คำว่า This streamlined turnaround อ้างถึงการเปลี่ยนแบตฯ ใช้เวลาแค่ 12 นาทีแทนการจอดรอ 8 ชม. ในประโยคก่อนหน้า [2] พอดี)'],
    ]),

    p7(26, 'm26-s8', [
      doc('memo', 'COMPENSATION GUIDE — COMMUTER CYCLING & GEAR BENEFIT',
        [['Benefit Allowance', '$400 Once Every 36 Months'], ['Tax Status', 'Taxable Payroll Reimbursement']],
        [
          '[1] Full-time employees who cycle, walk, or ride electric kick-scooters to headquarters at least ten days per month may claim up to $400 toward sustainable commuter gear every three years. [2] Eligible purchases include commuter bicycles, folding scooters, certified helmets, high-visibility vests, U-locks, and rechargeable LED taillights.',
          '[3] Reimbursement does NOT apply to annual shop tune-ups, flat-tire tube patches, or third-party theft insurance premiums. To claim reimbursement, upload an itemized merchant PDF receipt showing vendor name, purchase date, and item descriptions via MyBenefits within 60 days of checkout. [4]',
        ]),
    ], [
      ['Single · Detail', 'How frequently may eligible staff claim the $400 commuter equipment allowance?', ['Once every thirty-six months', 'At the beginning of each calendar year', 'Ten days after starting full-time employment', 'Quarterly whenever helmet gear wears out'], 0, 'ตอบ Once every thirty-six months (รับสิทธิ์เบิกเงินสนับสนุนอุปกรณ์เดินทาง $400 ได้ 1 ครั้งในทุกๆ 36 เดือน)'],
      ['Single · NOT', 'Which purchase CANNOT be reimbursed under this commuter benefit?', ['Periodic mechanic bicycle tune-up labor', 'Safety helmets and LED taillights', 'Heavy-duty steel U-locks for rack storage', 'Folding electric kick-scooters'], 0, 'ตอบ Periodic mechanic bicycle tune-up labor (ค่าบำรุงรักษารายปี ค่าปะยาง และเบี้ยประกันรถหายไม่สามารถเบิกได้)'],
      ['Single · Detail', 'Within what timeframe after purchasing equipment must employees upload receipts?', ['Sixty days', 'Ten days', 'Thirty-six days', 'Two weeks'], 0, 'ตอบ Sixty days (ต้องอัปโหลดใบเสร็จผ่าน MyBenefits ภายใน 60 วันหลังวันชำระเงิน)'],
      ['Single · Insertion', 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n"Approved reimbursements appear as a separate taxable stipend on the following month’s paycheck."', ['[1]', '[2]', '[3]', '[4]'], 3, 'ตอบ [4] (กล่าวถึงขั้นตอนหลังพนักงานยื่นใบเสร็จผ่าน MyBenefits แล้วว่าจะได้รับเงินคืนในสลิปเงินเดือนเดือนถัดไป เหมาะวางท้ายสุดที่ [4])'],
    ]),

    p7(26, 'm26-s9', [
      doc('chat', 'Fulfillment Warehouse Channel · #packaging-floor-2', null, [
        chat([
          ['Samir Kapoor (Floor Lead)', '08:22 A.M.', 'Heads up: twenty corrugated cartons bounced open along Conveyor 3 this morning—our Vendor B acrylic box tape loses grip whenever cooler bays drop under 6°C.'],
          ['Hannah Bell (Procurement)', '08:25 A.M.', 'Did we receive ten rolls of water-activated reinforced kraft tape from MetroSupply last week as backup?'],
          ['Trevor Reed (Packing)', '08:29 A.M.', 'Yes—four desktop heated sponge dispensers already sit unboxed on Shelf C! One wet strip bites deep into recycled cardboard fibers even inside the 2°C cold room.'],
          ['Paula Diaz (Quality)', '08:33 A.M.', 'Tested three kraft-sealed test boxes after an hour in Bay 4 cooler right now: flaps stay rock-solid even when stacked five cartons high!'],
          ['Samir Kapoor (Floor Lead)', '08:36 A.M.', 'Awesome. Hannah, freeze all pending tape orders from Vendor B immediately and shift Conveyor 3 stations exclusively onto kraft dispensers by noon!'],
        ]),
      ]),
    ], [
      ['Single · Problem', 'Why did twenty boxes come unsealed on Conveyor 3?', ['Acrylic adhesive from Vendor B failed in cold warehouse temperatures', 'Shipping labels tore off wet cardboard flaps inside Bay 4', 'Heated sponge dispensers malfunctioned under heavy box stacks', 'Conveyor belts ran too quickly for packing workers'], 0, 'ตอบ Acrylic adhesive from Vendor B failed in cold warehouse temperatures (กาวอะคริลิกของเทปจาก Vendor B เสียการยึดเกาะเมื่ออุณหภูมิต่ำกว่า 6°C)'],
      ['Single · Detail', 'Where did Trevor locate the backup heated dispensers?', ['On Shelf C at the packing warehouse', 'Inside Bay 4 cold storage lockers', 'Delivered fresh via morning postal van', 'Stored under Paula’s quality desk'], 0, 'ตอบ On Shelf C at the packing warehouse (Trevor แจ้งว่าเครื่องจ่ายเทปแบบชุบน้ำอุ่น 4 เครื่องแกะกล่องตั้งไว้บนชั้น C แล้ว)'],
      ['Single · Detail', 'What advantage of kraft reinforced tape did Paula observe after testing?', ['Boxes stacked five high stayed sealed securely inside cold rooms', 'Kraft rolls cost significantly less per meter than acrylic tape', 'Manual handheld dispensers worked cleanly without electricity or heat', 'Carton labels dried twice as quickly during wet winter loading'], 0, 'ตอบ Boxes stacked five high stayed sealed securely inside cold rooms (ทดลองแช่เย็น 1 ชม. แล้วยังติดแน่นแม้ซ้อนกล่องสูง 5 ชั้น)'],
      ['Single · Intention', 'What does Samir mean when he writes, "freeze all pending tape orders from Vendor B immediately"?', ['Halt upcoming purchase requests for the defective acrylic tape', 'Test acrylic rolls inside refrigerated lockers until noon', 'Demand cold-weather rebates on previously delivered Vendor B freight', 'Cancel MetroSupply’s backup kraft tape delivery'], 0, 'ตอบ Halt upcoming purchase requests for the defective acrylic tape (สั่งให้ฝ่ายจัดซื้อระงับการสั่งเทปที่มีปัญหากับ Vendor B ไว้ทั้งหมดทันที)'],
      ['Single · Inference', 'By what time must Conveyor 3 switch over to reinforced kraft sealing?', ['12:00 P.M. today', '08:36 A.M. tomorrow', 'End of the cold-room testing week', 'After all Vendor B rolls are exhausted'], 0, 'ตอบ 12:00 P.M. today (Samir สั่งให้ย้ายสถานี Conveyor 3 มาใช้เทป kraft ให้เสร็จภายในเที่ยงวัน (by noon))'],
    ]),

    p7(26, 'm26-d1', [
      doc('notice', 'SkyVault Cloud Archive — Team Tier Comparison', null, [
        tbl(
          ['Plan Tier', 'Included Storage', 'Monthly Rate', 'Annual Prepay Rate (Save 20%)', 'Cold Egress Retrieval Fee'],
          [
            ['Starter Team', '10 TB Pool', '$180 / mo', '$144 / mo ($1,728/yr)', '$0.02 / GB downloaded'],
            ['Enterprise Archive', '50 TB Pool', '$450 / mo', '$360 / mo ($4,320/yr)', 'Free Egress ($0.00 / GB)'],
          ]
        ),
        'Note: Up to 25 team user seats included on both plans. Migrations downloading archives onto external local servers pay standard tier egress rates.',
      ]),
      doc('email', 'Accounting Director E-mail',
        [['To', 'enterprise@skyvaultcloud.com'], ['From', 'Arthur Cho, Redbridge Accounting'], ['Subject', 'Plan Recommendation for 18 Auditors & 24 TB Ledger Migration']],
        [
          'Dear SkyVault Account Team,',
          'Our 18-auditor regional tax practice needs cloud storage for 24 TB of historical PDF client ledgers. Although we rarely open files from prior decades, regional banking regulators occasionally audit 5 TB batches back onto our local server.',
          'Which tier saves us unexpected retrieval surprises, and what would our exact annual invoice come to if Redbridge pays annually upfront in a single lump sum?',
        ]),
    ], [
      ['Double · Synthesis', 'Why does Enterprise Archive fit Redbridge Accounting better than Starter Team?', ['24 TB exceeds Starter Team’s 10 TB cap and Enterprise waives egress retrieval fees', 'Redbridge’s 18 auditors exceed Starter Team’s user seat cap', 'Starter Team does not allow storing PDF accounting records', 'Starter Team refuses annual upfront invoicing options'], 0, 'ตอบ 24 TB exceeds Starter Team’s 10 TB cap and Enterprise waives egress retrieval fees (ข้อมูล 24 TB เกินเพดาน 10 TB ของ Starter และ Enterprise ดึงไฟล์กลับเซิร์ฟเวอร์ฟรี $0/GB เวลาผู้ตรวจสอบบัญชีดึง Batch ละ 5 TB)'],
      ['Double · Math', 'If Redbridge pays upfront for 12 months on Enterprise Archive, how much will the single annual invoice total?', ['$4,320', '$5,400', '$1,728', '$360'], 0, 'ตอบ $4,320 (ตารางระบุเรตจ่ายรายปีล่วงหน้าของ Enterprise Archive ลด 20% เหลือปีละ $4,320)'],
      ['Double · Math', 'Under the Starter Team plan, what would a 5 TB (5,000 GB) regulatory download cost in egress fees alone?', ['$100', '$50', '$20', '$0'], 0, 'ตอบ $100 (5,000 GB × $0.02/GB = $100)'],
      ['Double · Inference', 'Do 18 auditors fit within SkyVault’s included user seat quota without buying add-on seats?', ['Yes—both plans include up to 25 user seats', 'No—Starter caps seats at 15 auditors', 'Only if regional banking regulators cover 8 guest licenses', 'Only when billed month-to-month rather than annually'], 0, 'ตอบ Yes—both plans include up to 25 user seats (หมายเหตุระบุทั้ง 2 แพ็กเกจรวมผู้ใช้ได้ถึง 25 ที่นั่ง ซึ่ง 18 คนพอสบาย)'],
      ['Double · Detail', 'How often does Redbridge need to pull archived batches onto its local server?', ['Occasionally when regional regulators audit files', 'Daily across all 18 regional tax offices', 'Once every month for backup synchronization', 'Never after initial 24 TB PDF upload'], 0, 'ตอบ Occasionally when regional regulators audit files (นานๆ ครั้งเวลาหน่วยงานกำกับดูแลเรียกตรวจเป็นชุด 5 TB)'],
    ]),

    p7(26, 'm26-d2', [
      doc('letter', 'PACIFIC MARITIME QUARTERLY — Book Review Invitation',
        [['Editor', 'Miriam Vance, Book Reviews Editor'], ['Date', 'July 8']],
        [
          'Dear Prof. Haruki Mori,',
          'I am delighted to send you an advance galley proof of Dr. Alan Frost’s upcoming 340-page monograph, *Steamships Across Monsoon Routes*, publishing September 30. Because of your landmark essays on 19th-century port tariffs, we would be honored to run your critique in our October Fall Issue.',
          'Review guidelines: 1,100–1,200 words submitted in plain .DOCX format via email by Monday, August 18. We offer a $250 contributor honorarium payable within 30 days of October print release, along with three complimentary physical journal copies.',
        ]),
      doc('email', 'Reply E-mail',
        [['To', 'reviews@pacificmaritimequarterly.org'], ['From', 'Prof. Haruki Mori'], ['Date', 'July 10'], ['Subject', 'Re: Monograph Review Invitation']],
        [
          'Dear Miriam,',
          'Thank you warmly for thinking of me—the advance proof arrived in my university mailbox yesterday! I would be delighted to write the full 1,200-word review before leaving for a research symposium on August 15, comfortably ahead of your August 18 cutoff.',
          'May I quote up to two brief tables directly from Dr. Frost’s Chapter 4 if our copyright permission clears through your editorial desk?',
        ]),
    ], [
      ['Double · Detail', 'Why did Miriam Vance select Prof. Haruki Mori to review Dr. Alan Frost’s book?', ['Prof. Mori has previously published respected research on historic port tariffs', 'Prof. Mori co-wrote Chapter 4 alongside Dr. Alan Frost', 'Prof. Mori teaches at the same maritime university as Miriam Vance', 'Other reviewers declined the 340-page reading deadline'], 0, 'ตอบ Prof. Mori has previously published respected research on historic port tariffs (เพราะบทความวิชาการเด่นเรื่องภาษีท่าเรือศตวรรษที่ 19)'],
      ['Double · Detail', 'What maximum word length should Prof. Mori’s book review stay within?', ['1,200 words', '340 words', '250 words', '1,500 words'], 0, 'ตอบ 1,200 words (กำหนดความยาวบทวิจารณ์ระหว่าง 1,100–1,200 คำ)'],
      ['Double · Inference', 'By what date does Prof. Mori plan to email the completed .DOCX manuscript?', ['Prior to August 15', 'On September 30', 'Within thirty days of October release', 'After returning from the symposium late in August'], 0, 'ตอบ Prior to August 15 (ศาสตราจารย์แจ้งว่าจะเขียนเสร็จก่อนออกเดินทางไปประชุมวิชาการวันที่ 15 ส.ค. ซึ่งเร็วกว่าเดดไลน์ 18 ส.ค.)'],
      ['Double · Detail', 'When will Pacific Maritime Quarterly pay Prof. Mori’s $250 honorarium?', ['Within 30 days following the October print issue release', 'Immediately after August 18 manuscript receipt', 'Upon mailing advance galley proofs on July 8', 'After copyright permission clears Chapter 4 tables'], 0, 'ตอบ Within 30 days following the October print issue release (จ่ายค่าตอบแทน $250 ภายใน 30 วันหลังฉบับเดือนตุลาคมตีพิมพ์ออกจำหน่าย)'],
      ['Double · Detail', 'What request does Prof. Mori ask Miriam at the end of his e-mail?', ['Permission to include two short tables from Chapter 4', 'An extra physical copy of the monograph for symposium attendees', 'Permission to submit notes in PDF format instead of .DOCX', 'Extending the August 18 deadline until Dr. Frost’s September 30 launch'], 0, 'ตอบ Permission to include two short tables from Chapter 4 (ขออนุญาตยกตารางสั้นๆ 2 ตารางจากบทที่ 4 มาประกอบบทวิจารณ์)'],
    ]),

    p7(26, 'm26-t1', [
      doc('notice', 'Vanguard Modern Art Museum — Evening Group Tickets', null, [
        tbl(
          ['Ticket Option', 'Included Access', 'Group Rate (10+ Guests)', 'Rain Guarantee Policy'],
          [
            ['Main Galleries Evening', 'Permanent Wings 1–4 (until 9:00 P.M.)', '$16 / guest', 'Unaffected by weather'],
            ['Sunset Sculpture Terrace', 'Galleries + Open-Air Roof Deck', '$24 / guest', 'Closed in rain -> Shift indoors + $4 Voucher'],
          ]
        ),
        'Rain Policy Details: If outdoor terraces close due to rain after 4:00 P.M., Terrace passholders enjoy full indoor Glass Atrium access AND receive a $4 per-person museum shop / cafe credit code (`RAIN20` applied at checkout or refunded onto group invoice).',
      ]),
      doc('memo', 'WEATHER OPERATIONS BULLETIN — THURSDAY MAY 22',
        [['Posted', 'Thursday, May 22 · 4:15 P.M.'], ['Area Status', 'Rooftop Sunset Sculpture Terrace CLOSED']],
        [
          'Steady coastal showers and wet stone steps force temporary closure of the Open-Air Roof Deck for this entire evening. Permanent Wings 1–4 plus our illuminated Glass Atrium remain warm and open until 9:00 P.M.',
          'Holders of Thursday Terrace Tickets qualify automatically for the Rain Guarantee Policy credit (`RAIN20`: $4 deducted per Terrace admission or usable at Atrium Café tonight).',
        ]),
      doc('email', 'Group Leader Invoice Inquiry',
        [['To', 'groups@vanguardart.org'], ['From', 'Elena Novak, Westside High Teachers’ Guild'], ['Date', 'Friday, May 23'], ['Subject', 'Thursday Night Invoice & Rain Credit — 12 Teachers']],
        [
          'Dear Group Desk,',
          'Even with yesterday’s rain shifting us off the roof deck into the Glass Atrium, our twelve art teachers thoroughly enjoyed Thursday evening’s collection!',
          'Rather than redeeming Atrium Café snacks last night, none of us used code `RAIN20` at the register. Per your Rain Guarantee Policy, could Billing apply the $4 per-person rain credit directly onto our twelve unpaid Sunset Terrace group invoice tickets before charging our school account?',
        ]),
    ], [
      ['Triple · Synthesis', 'Where did Elena’s group of twelve teachers spend Thursday evening instead of the roof deck?', ['Inside Permanent Galleries and the indoor Glass Atrium', 'At the Atrium Café patio tables until midnight', 'Outside under shaded West Gate umbrellas', 'In the Museum Auditorium film lounge'], 0, 'ตอบ Inside Permanent Galleries and the indoor Glass Atrium (ประกาศปิดดาดฟ้าจากฝน เปิดให้บริการห้องจัดแสดงหลักและ Glass Atrium ในร่มแทน)'],
      ['Triple · Math', 'Calculate the group’s ORIGINAL Sunset Terrace bill for 12 teachers BEFORE deducting the rain credit:', ['$288', '$192', '$240', '$336'], 0, 'ตอบ $288 (12 คน × เรตกลุ่ม Sunset Sculpture Terrace $24/คน = $288)'],
      ['Triple · Math', 'After deducting the unused `RAIN20` $4-per-person credit, what FINAL net invoice should the school account pay?', ['$240 ($288 minus $48 credit)', '$284 ($288 minus single $4 credit)', '$192 (reclassified to Main Galleries rate)', '$264 ($288 minus 10% educator discount)'], 0, 'ตอบ $240 ($288 - [12 × $4 = $48] = $240)'],
      ['Triple · Detail', 'Why were none of the `RAIN20` cafe vouchers redeemed during the Thursday visit?', ['The twelve teachers skipped using the code at the café register and asked for invoice credit instead', 'Atrium Café cashiers ran out of printed rain vouchers at 4:15 P.M.', 'Rain Guarantee rules prohibit groups of 10+ from café purchases', 'Evening rain forced Atrium Café to close alongside the roof deck'], 0, 'ตอบ The twelve teachers skipped using the code at the café register and asked for invoice credit instead (ไม่ได้นำไปแลกขนมที่คาเฟ่ จึงขอหักเป็นเครดิตลดยอดในใบแจ้งหนี้แทน)'],
      ['Triple · Detail', 'Until what hour do Permanent Wings 1–4 stay open during evening sessions?', ['9:00 P.M.', '4:15 P.M.', '6:30 P.M.', '8:00 P.M.'], 0, 'ตอบ 9:00 P.M. (เปิดถึง 21:00 น.)'],
    ]),

    p7(26, 'm26-t2', [
      doc('notice', 'TitanAir Compressors — Approved Replacement Intake Filter Chart', null, [
        tbl(
          ['Compressor Series', 'Motor Output', 'Required Filter SKU', 'Micron Rating', 'Service Interval'],
          [
            ['TitanScrew 20-HP', '15 kW', '#AF-40 (Standard Pleat)', '10 Micron', 'Every 1,000 Hours'],
            ['TitanScrew 40-HP', '30 kW', '#AF-65 (High-Flow Heavy)', '5 Micron', 'Every 1,500 Hours'],
          ]
        ),
        'Warranty Clause: Running an undersized low-flow filter (#AF-40) on 40-HP units starves compressor air intake, elevating internal oil-separator heat and voiding factory rotor warranties.',
      ]),
      doc('form', 'PREVENTIVE MAINTENANCE WORK LOG #PM-309',
        [['Site', 'Precision Woodworks Mill'], ['Equipment', 'TitanScrew 40-HP Unit #TS40-88 (Run Time: 3,000 Hours)'], ['Date', 'October 14 — Performed by Outside Contractor B']],
        [
          lst([
            'Tasks Logged: Drained synthetic compressor oil, inspected drive V-belts, installed ONE replacement Intake Air Filter Part #AF-40.',
            'Notes: Machine restarted cleanly at 10:40 A.M.; air line gauge reading slightly low under dual cabinet router load.',
          ]),
        ]),
      doc('email', 'Warehouse Manager Inquiry E-mail',
        [['To', 'service@titanaircompressors.com'], ['From', 'Neil Patel, Precision Woodworks Mill'], ['Date', 'October 15'], ['Subject', 'Audit of Work Log #PM-309 — Unit #TS40-88']],
        [
          'Hi TitanAir Technical Support,',
          'While filing yesterday’s service folder from Contractor B, I spotted two troubling details: our 40-HP cabinet shop compressor started showing low line pressure under dual router load right after #PM-309, AND the contractor listed Filter SKU #AF-40 on the sheet!',
          'Please confirm whether that undersized cartridge caused our pressure drop, ship an overnight #AF-65 replacement filter before Monday’s shift, and verify that catching this error in 24 hours preserves our factory rotor warranty.',
        ]),
    ], [
      ['Triple · Synthesis', 'What mistake did Outside Contractor B make during Preventive Maintenance #PM-309?', ['He installed a 20-HP standard filter (#AF-40) onto a 40-HP high-flow compressor', 'He swapped synthetic oil after 3,000 hours instead of 1,500 hours', 'He forgot to tighten drive V-belts before restarting at 10:40 A.M.', 'He ran a 15-kW TitanScrew machine on dual cabinet routers'], 0, 'ตอบ He installed a 20-HP standard filter (#AF-40) onto a 40-HP high-flow compressor (เครื่องเป็นรุ่น 40-HP ที่ต้องใช้ไส้กรอง High-Flow #AF-65 แต่ช่างดันใส่รุ่น #AF-40 สำหรับเครื่อง 20-HP)'],
      ['Triple · Detail', 'Which filter specification belongs to TitanScrew 40-HP compressors?', ['#AF-65 rated at 5 microns', '#AF-40 rated at 10 microns', '#AF-65 rated at 10 microns', '#AF-40 rated at 5 microns'], 0, 'ตอบ #AF-65 rated at 5 microns (ตารางระบุว่าเครื่อง 40-HP ต้องใช้ #AF-65 ความละเอียด 5 ไมครอน เปลี่ยนทุก 1,500 ชม.)'],
      ['Triple · Synthesis', 'Why is Precision Woodworks’ factory rotor warranty at risk if Contractor B’s filter stays installed?', ['Insufficient intake airflow overheats the internal oil-separator stage', 'Contractor B performed maintenance after 3,000 continuous run hours', 'Dual cabinet routers require 10-micron filtration under warranty clauses', 'Air line pressure gauges void protection when tested before noon'], 0, 'ตอบ Insufficient intake airflow overheats the internal oil-separator stage (การใส่ #AF-40 ทำให้ลมเข้าไม่พอและชุดแยกน้ำมันร้อนเกิน จนหลุดประกันจากโรงงาน)'],
      ['Triple · Detail', 'Why did Neil Patel write to TitanAir Support on October 15?', ['He noticed low router air pressure and spotted the wrong filter code while filing logs', 'Oil drained cleanly from Unit #TS40-88 showed metal shavings overnight', 'Contractor B refused to return after missing a scheduled Monday appointment', 'Unit #TS40-88 hit its final 1,500-hour synthetic belt guarantee'], 0, 'ตอบ He noticed low router air pressure and spotted the wrong filter code while filing logs (พบทั้งแรงดันลมตกตอนเปิดเราเตอร์คู่ และเห็นรหัส #AF-40 ผิดรุ่นในใบงานเมื่อวาน)'],
      ['Triple · Inference', 'According to the chart, how many total intake filter intervals has Unit #TS40-88 completed at 3,000 runtime hours?', ['Two intervals (one every 1,500 hours)', 'Three intervals (one every 1,000 hours)', 'Four intervals (every 750 hours)', 'One initial break-in interval only'], 0, 'ตอบ Two intervals (ตารางระบุเปลี่ยนทุก 1,500 ชม. -> 3,000 ชม. ครบ 2 รอบพอดี)'],
    ]),

    p7(26, 'm26-t3', [
      doc('notice', 'City of Oakridge — Annual Business Operating License Fee Schedule', null, [
        tbl(
          ['Gross Revenue Bracket (Prior Year)', 'Base Renewal Fee', 'Standard Filing Cutoff', 'Late Penalty (Paid Apr 1–30)'],
          [
            ['Micro Tier (Under $100,000)', '$75', 'March 31', '+10% Late Surcharge'],
            ['Small Tier ($100,000–$399,999)', '$180', 'March 31', '+10% Late Surcharge'],
            ['Growth Tier ($400,000+)', '$340', 'March 31', '+10% Late Surcharge'],
          ]
        ),
        'Food Service Requirement: Bakeries and cafés must attach a current County Health Sanitation Certificate alongside annual license payment.',
      ]),
      doc('memo', 'MUNICIPAL PERMIT CLERK DEFICIENCY NOTICE',
        [['Account', 'CopperKettle Sourdough Bakery (#BL-904)'], ['Logged Date', 'Monday, April 14']],
        [
          lst([
            'Declared Prior-Year Gross Sales: $265,400.',
            'Packet Received: Paper application dropped off April 14 (check enclosed for $180.00 ONLY).',
            'Deficiencies Flagged: (1) Payment omits mandatory April 1–30 late filing surcharge; (2) Missing updated County Health Sanitation Certificate copy.',
          ]),
        ]),
      doc('email', 'Bakery Owner Response E-mail',
        [['To', 'licensing@oakridgecity.gov'], ['From', 'Nadia Rossi, CopperKettle Bakery (#BL-904)'], ['Date', 'April 15'], ['Subject', 'Resolving Application #BL-904']],
        [
          'Dear Permit Clerk,',
          'Apologies for missing the March 31 cutoff while traveling for an equipment expo! Attached please find our freshly renewed County Health Sanitation Certificate stamped April 4.',
          'Please confirm the EXACT small late penalty balance still owed on our Small Tier license so I can authorize electronic payment by 3:00 P.M. today and get our retail wall permit mailed cleanly.',
        ]),
    ], [
      ['Triple · Synthesis', 'Which gross revenue bracket applies to CopperKettle Sourdough Bakery?', ['Small Tier ($100,000–$399,999)', 'Micro Tier (Under $100,000)', 'Growth Tier ($400,000+)', 'Exempt Charitable Tier'], 0, 'ตอบ Small Tier (ยอดขายปีก่อน $265,400 อยู่ในช่วง $100,000–$399,999)'],
      ['Triple · Math', 'Since CopperKettle enclosed $180 on April 14, how much ADDITIONAL penalty money does Nadia still owe?', ['$18.00 (10% of $180 base fee)', '$7.50 (10% of Micro Tier fee)', '$34.00 (10% of Growth Tier fee)', '$36.00 (double filing penalty)'], 0, 'ตอบ $18.00 (ส่งวันที่ 14 เม.ย. อยู่ในช่วงจ่ายช้า เม.ย. 1–30 โดนปรับเพิ่ม 10% ของฐาน $180 = $18 ซึ่งเธอยังขาดอยู่อีก $18)'],
      ['Triple · Synthesis', 'In addition to paying the remaining fee balance, what missing document did Nadia attach on April 15?', ['An updated County Health Sanitation Certificate stamped April 4', 'Signed proof of attendance from her March equipment expo', 'A revised declaration lowering prior-year sales under $100,000', 'Fire sprinkler maintenance receipts from Building Services'], 0, 'ตอบ An updated County Health Sanitation Certificate stamped April 4 (แนบใบรับรองสุขาภิบาลที่ตกหล่นในซองเมื่อวันที่ 14 เม.ย. มาให้ครบในอีเมลวันที่ 15 เม.ย.)'],
      ['Triple · Detail', 'Why did Nadia miss the March 31 regular filing deadline?', ['She was out of town attending an equipment exposition', 'County Health delayed inspecting her bakery ovens until April 14', 'Electronic check payments on oakridgecity.gov went offline in March', 'Clerk staff misclassified CopperKettle into the Growth Tier'], 0, 'ตอบ She was out of town attending an equipment exposition (Nadia ขอโทษที่ส่งเลยกำหนด 31 มี.ค. เพราะเดินทางไปงานแสดงอุปกรณ์)'],
      ['Triple · Detail', 'What is the full combined license fee (base + penalty) for a Growth Tier firm paying on April 18?', ['$374.00 ($340 + $34 penalty)', '$340.00', '$198.00 ($180 + $18 penalty)', '$350.00'], 0, 'ตอบ $374.00 (Growth Tier ฐาน $340 + ค่าปรับช้า 10% อีก $34 = $374.00)'],
    ]),

    // ==================== SET 27 ====================
    p7(27, 'm27-s1', [
      doc('chat', 'Text Message Chain · Apex Stage Lighting Crew', null, [
        chat([
          ['Devon Kim', '11:10 A.M.', 'Kayla, Dimmer Pack #4 above North Pavilion keeps tripping the 20-amp breaker during spotlight checks, and keynote panelists arrive for soundcheck at 1:30 P.M.'],
          ['Kayla Chen', '11:14 A.M.', 'Do NOT gamble on Pack #4 during live broadcast. Unplug it cleanly and swap in spare Pack #7—it is strapped inside Pelican Flight Case B behind backstage curtains.'],
          ['Devon Kim', '11:18 A.M.', 'Located Pelican Case B! Mounting Pack #7 onto the overhead truss right now—voltage tests hold steady across all eight spotlight channels.'],
        ]),
      ]),
    ], [
      ['Single · Problem', 'What technical issue prompted Devon Kim to text Kayla at 11:10 A.M.?', ['Overloading dimmer hardware kept tripping an electrical breaker', 'Keynote panelists moved rehearsal forward before 1:30 P.M.', 'Pelican Case B had been left unlocked backstage', 'Spotlight lenses shattered along North Pavilion overhead truss'], 0, 'ตอบ Overloading dimmer hardware kept tripping an electrical breaker (ชุดหรี่ไฟ Dimmer Pack #4 ตัดเบรกเกอร์ 20 แอมป์ตลอด)'],
      ['Single · Detail', 'Where did Devon find replacement Dimmer Pack #7?', ['Inside a flight case stored behind backstage curtains', 'Hanging already unused beside North Pavilion trusses', 'Mounted inside the keynote broadcast sound truck', 'At the main front foyer check-in desk'], 0, 'ตอบ Inside a flight case stored behind backstage curtains (อยู่ในกล่อง Pelican Case B หลังม่านเวทีด้านหลัง)'],
    ]),

    p7(27, 'm27-s2', [
      doc('memo', 'COWORKING SPACE GUIDELINES — MEZZANINE ACOUSTIC PODS',
        [['Location', 'Mezzanine Level 2 (Pods A–F)'], ['Effective', 'Immediately']],
        [
          'To ensure all members can take quiet video client calls without desk congestion, private glass Acoustic Pods A–F cap reservations at a strict 90-minute consecutive window per booking—please tap the doorway tablet QR schedule rather than holding booths unreserved with backpacks.',
          'Additionally, open coffee mugs and takeout soup bowls are prohibited inside acoustic pods, as liquid spills soak deeply into the custom wool wall felt panels. Sealed screw-top water tumblers remain welcome.',
        ]),
    ], [
      ['Single · Rule', 'What is the maximum consecutive duration for reserving a Mezzanine 2 Acoustic Pod?', ['Ninety minutes', 'Two hours', 'Thirty minutes', 'One full business day'], 0, 'ตอบ Ninety minutes (จำกัดการจองติดต่อกันสูงสุดไม่เกินครั้งละ 90 นาทีต่อรอบ)'],
      ['Single · Detail', 'Which beverage container may members bring inside Acoustic Pods A–F?', ['Sealed screw-top water bottles', 'Ceramic open-rim coffee mugs', 'Uncovered hot soup bowls', 'Paper takeout cups without lids'], 0, 'ตอบ Sealed screw-top water bottles (อนุญาตเฉพาะขวดน้ำฝาเกลียวปิดสนิทเพื่อป้องกันน้ำหกใส่แผงผ้าสักหลาดซับเสียง)'],
    ]),

    p7(27, 'm27-s3', [
      doc('review', 'GreenWheel Mobile Car Care — Online Review & Response', null, [
        '★ ★ ★ ★ ☆ — Reviewed by Sam Patel (On-Site Compact SUV Detail)',
        'Booked GreenWheel’s van straight to our downtown office parking deck Tuesday morning so my car shone before picking up visiting investors. Technician Leo decontaminated road tar using clay-bar treatment and dressed every tire cleanly inside the covered lot—zero hassle leaving work! Subtracted just one star because embedded golden retriever fur in my cargo trunk triggered a $35 Pet-Hair Extraction surcharge I only noticed once paying.',
        'Owner Reply (Nora Lin, Operations): Glad Leo kept you rolling seamlessly before the investor pickup, Sam! To eliminate surprise charges on site, we updated our online booking checkout yesterday with a clear mandatory Pet Hair Checkbox showing that $35 extraction fee upfront.',
      ]),
    ], [
      ['Single · Detail', 'Why did Sam schedule GreenWheel at his office parking garage rather than driving to a shop?', ['He needed his vehicle detailed cleanly while staying at work before meeting investors', 'Downtown road tar closed neighborhood manual car wash bays', 'Clay-bar equipment cannot operate indoors inside standard car washes', 'His compact SUV could not fit onto commercial wash conveyor rails'], 0, 'ตอบ He needed his vehicle detailed cleanly while staying at work before meeting investors (ให้รถมาล้างถึงที่ลานจอดบริษัทช่วงทำงาน ก่อนออกไปรับนักลงทุน)'],
      ['Single · Criticism', 'Why did Sam leave four stars instead of five?', ['An unexpected $35 pet-hair removal fee appeared only at payment time', 'Technician Leo failed to clear golden retriever fur from rear seats', 'Parking deck clearance blocked GreenWheel’s mobile van roof', 'Tire dressing smeared across road asphalt before afternoon meetings'], 0, 'ตอบ An unexpected $35 pet-hair removal fee appeared only at payment time (ไม่รู้ตัวล่วงหน้าว่ามีค่าดูดขนสุนัขเพิ่ม $35 จนตอนจ่ายเงิน)'],
      ['Single · Detail', 'What checkout update did Nora Lin launch to solve Sam’s complaint?', ['Adding an explicit upfront pet-hair fee checkbox on the booking form', 'Eliminating $35 extraction fees completely for compact SUVs', 'Instructing drivers to waive surcharges on downtown decks', 'Excluding cargo trunk vacuuming from mobile detail visits'], 0, 'ตอบ Adding an explicit upfront pet-hair fee checkbox on the booking form (เพิ่มช่องติ๊กแสดงค่าดูดขนสัตว์ $35 ให้เห็นชัดเจนตั้งแต่ตอนกดจองออนไลน์)'],
    ]),

    p7(27, 'm27-s4', [
      doc('notice', 'PRESS RELEASE — Meridian Port Unveils Clean Hydrogen Harbor Tug Dock', null, [
        'WEST HARBOR — Maritime Port Authority officials christened Berth 14’s green hydrogen bunkering station Wednesday morning, becoming the first regional deepwater container terminal capable of fueling electric-hydrogen harbor tugboats directly between ship-assist shifts.',
        'Operated jointly with HydroBarge Fuels, the floating pontoon facility compresses locally electrolyzed hydrogen into zero-emission composite fuel tanks in 22 minutes per vessel. Port environmental monitors estimate swapping six legacy diesel harbor tugs onto hydrogen hybrids will reduce shoreline particulate exhaust near adjacent residential docks by 95%.',
      ]),
    ], [
      ['Single · Purpose', 'What milestone did Meridian Port celebrate Wednesday morning?', ['Opening a refueling dock for hydrogen-powered harbor tugboats', 'Launching six oversized container freighters toward foreign harbors', 'Replacing floating residential homes along West Harbor slips', 'Converting municipal buses outside Berth 14 to diesel fuel'], 0, 'ตอบ Opening a refueling dock for hydrogen-powered harbor tugboats (เปิดสถานีเติมเชื้อเพลิงไฮโดรเจนสำหรับเรือลากจูงในท่าเรือแห่งแรกของภูมิภาค)'],
      ['Single · Detail', 'How long does it take to refuel a tugboat at the new HydroBarge dock?', ['Twenty-two minutes', 'Two hours', 'Fourteen minutes', 'Six hours'], 0, 'ตอบ Twenty-two minutes (อัดก๊าซไฮโดรเจนเข้าถังคอมโพสิตของเรือแต่ละลำเสร็จใน 22 นาที)'],
      ['Single · Benefit', 'What air-quality improvement is expected after six tugboats switch to hydrogen hybrids?', ['A 95 percent drop in waterfront particulate exhaust emissions', 'Lower ocean dredging silt near residential marina slips', 'Elimination of ship-assist tug fees across Berth 14', 'Doubled container cargo unloading speeds overnight'], 0, 'ตอบ A 95 percent drop in waterfront particulate exhaust emissions (ลดฝุ่นควันไอเสียบริเวณชายฝั่งลงถึง 95%)'],
    ]),

    p7(27, 'm27-s5', [
      doc('ad', 'STUDIO CRAFT ARCHITECTURAL MODELS — NOW HIRING', null, [
        'Open Role: Architectural Scale Model Maker (Downtown Fabrication Workshop)',
        'Studio Craft partners with municipal urban planners and housing developers to hand-build museum-quality basswood, cast resin, and frosted acrylic urban scale models for civic public hearings.',
        'What We Need: Steady hands with precision X-Acto joinery, airbrush spray booths, and experience reading 1:200 CAD floor plans. Knowledge adjusting CO2 laser cutters and sanding 3D SLA prints is strongly preferred (refresher shop training included).',
        'How to Apply: Email your CV plus a 6-page PDF photo lookbook highlighting physical craft projects (student or professional!) to workshops@studiocraftmodels.com by May 9.',
      ]),
    ], [
      ['Single · Detail', 'Who primarily commissions scale models from Studio Craft?', ['Urban city planners and architectural property developers', 'Neighborhood hobbyists seeking wooden model railway kits', 'Laser cutter equipment distributors advertising trade demos', 'Local gallery framers requesting protective glass boxes'], 0, 'ตอบ Urban city planners and architectural property developers (นักผังเมืองเทศบาลและผู้พัฒนาอสังหาริมทรัพย์สำหรับงานประชุมประชาพิจารณ์)'],
      ['Single · Requirement', 'What visual document must applicants include alongside their resume?', ['A six-page PDF portfolio showing crafted physical models', 'Signed blueprints from municipal housing development hearings', 'Three minutes of video testing CO2 laser safety equipment', 'CAD software coding certificates in 3D animation'], 0, 'ตอบ A six-page PDF portfolio showing crafted physical models (ต้องส่งไฟล์ PDF รูปผลงานโมเดลจริงจำนวน 6 หน้าคู่กับ CV)'],
      ['Single · Inference', 'What can be inferred about Studio Craft’s laser-cutter knowledge requirement?', ['Candidates still learning advanced shop maintenance receive refresher coaching', 'Only certified laser electrical technicians may apply before May 9', 'Models are constructed completely by hand without digital cutting equipment', 'Hobbyists must supply their own studio airbrush booths'], 0, 'ตอบ Candidates still learning advanced shop maintenance receive refresher coaching (ระบุชัดเจนว่ามี training ทบทวนการใช้งานเครื่องให้ด้วย)'],
    ]),

    p7(27, 'm27-s6', [
      doc('notice', 'CUSTOMER SERVICE ADVISORY — NorthWind Heat Pump Fan Shroud Clips', null, [
        'NorthWind Climate Systems has observed premature corrosion on silver steel grille clips installed on outdoor heat-pump condenser cages manufactured between 2022 and 2024 within 15 kilometers of salty ocean coastlines.',
        'While mechanical cooling performance and compressor safety remain completely intact, exposed screws may rattle subtly during fierce winter gusts. Registered coastal ZIP-code owners receive a free four-pack of marine-grade black polymer snap clips mailed automatically.',
        'Installing these snap-on replacement clips requires only a basic Phillips screwdriver and takes five minutes—no licensed HVAC contractor visit necessary.',
      ]),
    ], [
      ['Single · Cause', 'Why are replacement clips being distributed specifically to coastal residents?', ['Salty marine air accelerated rust on original steel condenser fan clips', 'Compressor units within 15 kilometers of oceans froze during summer storms', 'Winter gusts bent aluminum evaporator blades inside indoor thermostats', 'Marine polymer manufacturers discontinued black plastic housing molds'], 0, 'ตอบ Salty marine air accelerated rust on original steel condenser fan clips (ไอเกลือทะเลทำให้กิ๊บเหล็กของตะแกรงพัดลมรุ่นปี 2022–2024 เป็นสนิมเร็วกว่าปกติ)'],
      ['Single · Inference', 'Do homeowners need to pay an HVAC technician to install the new snap clips?', ['No—homeowners can swap them themselves in five minutes with a screwdriver', 'Yes—warranty terms forbid removing outer grille cages without certification', 'Only if the heat pump operates within five kilometers of ocean piers', 'Yes—licensed contractors must inspect compressor refrigerant pressure afterward'], 0, 'ตอบ No—homeowners can swap them themselves in five minutes with a screwdriver (ทำเองได้ด้วยไขควงปากแฉกภายใน 5 นาที ไม่ต้องเรียกช่าง HVAC)'],
      ['Single · Effect', 'What symptom do corroded original clips occasionally cause without this upgrade?', ['Mild rattling noise during strong winter winds', 'Complete electrical compressor shutdowns', 'Salty condensation leaking indoors', 'Elevated monthly home heating bills'], 0, 'ตอบ Mild rattling noise during strong winter winds (ไม่ได้กระทบความเย็นหรือความปลอดภัย มีแค่อาการสั่นมีเสียงดังเบาๆ เวลาลมหนาวพัดแรง)'],
    ]),

    p7(27, 'm27-s7', [
      doc('article', 'Hotel Roof Apiary Turns Idle Tar Space Into Award-Winning Kitchen Honey', null, [
        'HARBOR BUSINESS WEEKLY — [1] Two floors above noisy valet lanes and delivery ramps, executive pastry chef Nina Brooks tends six painted cedar bee hives perched along a gravel ledge of Grand Harbor Suites.',
        'Starting as an experimental Earth Day project with three local beekeepers four years ago, the hotel rooftop now harvests roughly 240 glass jars of seasonal rooftop wildflower comb honey each autumn—sourced strictly from nearby coastal botanical gardens and shaded balcony planters within two miles. [2] To keep bees cool during humid August afternoons, engineering staff suspended perforated cedar shade canopies and shallow pebble water basins beneath every hive landing board.',
        '[3] Rather than exporting jars to supermarket chains, Grand Harbor reserves every drop for breakfast scones, afternoon cheese pairings, and small wedding guest favor bottles sold inside the lobby espresso bar. [4] Hotel general manager Owen Hart reports that zero guests have ever faced patio stings since honeybees fly straight upward over tall downtown parapets immediately after takeoff.',
      ]),
    ], [
      ['Single · Purpose', 'What is the article mainly about?', ['An urban hotel producing local kitchen honey on its own rooftop', 'Earth Day protests limiting kitchen food waste across harbor hotels', 'Architectural complaints over hotel penthouse cedar balconies', 'Expanding wildflower garden tours at coastal city parks'], 0, 'ตอบ An urban hotel producing local kitchen honey on its own rooftop (โรงแรมเลี้ยงผึ้งบนดาดฟ้าเพื่อนำน้ำผึ้งมาใช้ปรุงอาหารและจำหน่ายเองในโรงแรม)'],
      ['Single · Detail', 'How did hotel engineers help the rooftop colonies handle hot August heat?', ['By adding cedar shade screens and pebble watering trays', 'By moving painted cedar hives indoors into cooled banquet kitchens', 'By misting glass honeycomb frames with chilled rainwater sprinklers', 'By shrinking hive harvest totals below 100 jars per season'], 0, 'ตอบ By adding cedar shade screens and pebble watering trays (วิศวกรติดตั้งแผงบังแดดไม้ซีดาร์เจาะรูและถาดน้ำก้อนกรวดกันความร้อน)'],
      ['Single · Detail', 'Where are the hotel’s 240 seasonal honey jars used and sold?', ['Exclusively in hotel dishes, weddings, and the lobby espresso shop', 'Distributed through twelve downtown regional grocery supermarkets', 'Shipped online to loyal members of local beekeeping associations', 'Reserved strictly for Earth Day civic botanical auctions'], 0, 'ตอบ Exclusively in hotel dishes, weddings, and the lobby espresso shop (ไม่ได้ส่งขายซูเปอร์มาร์เก็ต ใช้เฉพาะเมนูอาหาร งานแต่ง และร้านกาแฟล็อบบี้โรงแรม)'],
      ['Single · Insertion', 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n"Before installing the hives, that sun-baked concrete terrace held only discarded patio chairs and empty flower planters."', ['[1]', '[2]', '[3]', '[4]'], 0, 'ตอบ [1] (ประโยคเปิดที่ [1] เกริ่นภาพรวมดาดฟ้าอันรกร้างในอดีต ก่อนจะแนะนำเชฟ Nina กับรังผึ้ง 6 รังที่เข้ามาเปลี่ยนพื้นที่ตรงนี้)'],
    ]),

    p7(27, 'm27-s8', [
      doc('memo', 'EMPLOYEE BENEFITS HANDBOOK — TUITION ASSISTANCE VOUCHERS',
        [['Section', '7.3 Continuing Professional Education'], ['Annual Cap', '$1,800 Per Fiscal Year']],
        [
          '[1] Eligible employees with at least six months of full-time service at NorthCoast Logistics may apply for up to $1,800 per fiscal year toward accredited college night classes or trade certificates directly tied to supply chain, accounting, or coding duties.',
          '[2] Coursework must conclude with a verified final grade of C or higher (classes scored Pass/Fail require an official "Pass"); incomplete credits or grades of C-minus and below forfeit all tuition support. [3] Applicants should obtain written supervisor pre-approval prior to paying college bursar bills, even though payout arrives post-term.',
          'Within 30 days after final grades publish, upload BOTH an itemized bursar payment receipt AND an official term transcript directly onto HR BenefitTrack to receive tax-free payroll reimbursement. [4]',
        ]),
    ], [
      ['Single · Eligibility', 'Which employee is eligible to apply for NorthCoast’s $1,800 tuition grant?', ['A full-time accountant enrolled for nine months taking evening financial software classes', 'A three-month seasonal dock worker taking accredited culinary lessons', 'An unpaid logistics intern enrolled in weekend supply chain courses', 'A six-year forklift operator requesting recreational guitar tuition'], 0, 'ตอบ A full-time accountant enrolled for nine months taking evening financial software classes (ต้องเป็นพนักงานประจำครบ 6 เดือนขึ้นไป และเรียนวิชาที่เกี่ยวกับงานสายโลจิสติกส์ บัญชี หรือโค้ดดิ้ง)'],
      ['Single · Rule', 'What happens if a pre-approved worker completes a seminar with a final grade of C-minus?', ['All company tuition reimbursement is forfeited for that class', 'Company reimbursement drops by fifty percent automatically', 'The employee receives credit only toward next fiscal year’s cap', 'Supervisors convert the course manually into a Pass/Fail voucher'], 0, 'ตอบ All company tuition reimbursement is forfeited for that class (กฎระบุชัดเจนว่าต้องได้เกรด C ขึ้นไป หากได้ C- หรือต่ำกว่าจะหมดสิทธิ์เบิก)'],
      ['Single · Detail', 'Which two documents must be uploaded within 30 days after grades post?', ['An itemized bursar fee receipt and an official term grade transcript', 'A written textbook list and supervisor attendance calendar', 'A signed employment contract and college admissions letter', 'Weekly lab sign-in logs and midterm exam copies'], 0, 'ตอบ An itemized bursar fee receipt and an official term grade transcript (ต้องอัปโหลดทั้งใบเสร็จค่าเล่าเรียนและใบแสดงผลเกรดอย่างเป็นทางการภายใน 30 วัน)'],
      ['Single · Insertion', 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n"Note that college parking passes, campus gym fees, and hardbound textbooks remain the student’s personal expense."', ['[1]', '[2]', '[3]', '[4]'], 3, 'ตอบ [4] (เป็นข้อควรทราบเพิ่มเติมเรื่องค่าใช้จ่ายปลีกย่อยที่ไม่รวมในวงเงินเบิกคืน ต่อท้ายขั้นตอนการเบิกจ่ายที่ [4] อย่างลงตัว)'],
    ]),

    p7(27, 'm27-s9', [
      doc('chat', 'Lab Facilities Messaging · #cold-chain-alerts', null, [
        chat([
          ['Carlos Mendez (QA)', '06:42 A.M.', 'Morning alert: Probe 2 inside Vaccine Cooler B logged a +9.2°C threshold ping at 6:30 A.M.! Anyone near Wing D right now?'],
          ['Sonia Cho (Night Tech)', '06:46 A.M.', 'Checking physically inside Wing D right now! Hold on—thermometer gauge mounted on the opposite wall reads steady +3.8°C, and ice packs feel rock-hard.'],
          ['Trevor Hall (HVAC)', '06:50 A.M.', 'Inspect the magnetic rubber gasket along the top corner nearest Probe 2, Sonia. Night courier crates sometimes pinch loose cardboard tags right beside the doorway sensor.'],
          ['Sonia Cho (Night Tech)', '06:54 A.M.', 'Good catch, Trevor! A thick nylon parcel strap jammed the top hinge corner near Probe 2, letting warm hallway air wash straight across that edge probe while core shelves stayed cold. Strap cleared cleanly; door seals tight!'],
          ['Carlos Mendez (QA)', '06:58 A.M.', 'Thanks both! Trevor, pull the hourly CSV temperature log export BEFORE pressing reset on Probe 2’s alarm dashboard so our monthly compliance binder stays intact!'],
        ]),
      ]),
    ], [
      ['Single · Discovery', 'Why did Probe 2 trigger a high-temperature alarm despite cool core shelves?', ['A cargo strap wedged the door open slightly, blowing hallway air over the edge probe', 'Electronic wall thermostats inside Wing D suffered an electrical short', 'Night couriers left steel freezer shelves unplugged overnight', 'Ice pack cartons inside Cooler B had expired past capacity'], 0, 'ตอบ A cargo strap wedged the door open slightly, blowing hallway air over the edge probe (สายรัดพัสดุขัดอยู่ตรงมุมขอบประตู ทำให้ลมร้อนจากโถงทางเดินพัดโดนหัววัดที่ติดขอบประตู)'],
      ['Single · Inference', 'Are vaccines stored on the central shelves of Cooler B likely ruined?', ['No—an opposite wall gauge held steady at +3.8°C and ice packs remained frozen', 'Yes—temperatures reached +9.2°C throughout the entire vault for hours', 'Unknown until Trevor resets Probe 2 at 7:00 A.M.', 'Yes—Warm air melted cardboard pallet tags inside central bins'], 0, 'ตอบ No—an opposite wall gauge held steady at +3.8°C and ice packs remained frozen (เกจฝั่งตรงข้ามยังอยู่ที่ 3.8°C และเจลเย็นยังแข็งดี แค่ลมรั่วโดนหัววัดขอบประตู)'],
      ['Single · Detail', 'Who suggested checking the door seal near Probe 2?', ['Trevor Hall', 'Carlos Mendez', 'Sonia Cho', 'The night delivery courier'], 0, 'ตอบ Trevor Hall (Trevor จากฝ่าย HVAC เสนอให้ตรวจซีลยางมุมบนใกล้ Probe 2)'],
      ['Single · Intention', 'What does Carlos mean when he writes, "pull the hourly CSV temperature log export BEFORE pressing reset"?', ['Save audit records first so clearing the alarm does not erase compliance evidence', 'Email vaccine manufacturers to replace Probe 2’s doorway sensor wire', 'Turn off hallway heaters beside Wing D cargo entrances', 'Recalibrate the +3.8°C wall gauge upward to match Probe 2'], 0, 'ตอบ Save audit records first so clearing the alarm does not erase compliance evidence (ให้เซฟบันทึกข้อมูลอุณหภูมิรายชั่วโมงเก็บลงแฟ้มตรวจสอบก่อนกดรีเซ็ตหน้าจอเตือน)'],
      ['Single · Detail', 'At what time did Sonia remove the jammed nylon parcel strap?', ['By 6:54 A.M.', 'At 6:30 A.M.', 'Before 6:42 A.M.', 'After 7:00 A.M.'], 0, 'ตอบ By 6:54 A.M. (Sonia รายงานเวลา 06:54 น. ว่าเอาสายรัดออกและปิดประตูสนิทแล้ว)'],
    ]),

    p7(27, 'm27-d1', [
      doc('ad', 'BayBreeze Private Yacht Charters — Harbor Rates', null, [
        tbl(
          ['Vessel Model', 'Guest Limit', 'Weekday Rate (4-Hr Charter)', 'Sat–Sun Surcharge', 'Sunset Dinner Buffet'],
          [
            ['Harbor Cruiser 30', 'Up to 14 Guests', '$1,100', '+$250', '$45 / guest optional'],
            ['Catalina Catamaran 42', 'Up to 28 Guests', '$1,950', '+$350', '$45 / guest optional'],
          ]
        ),
        'Standard Rules: Vessel fees include USCG licensed captain & deckhand. A mandatory 15% crew service fee applies strictly to base vessel + weekend rates (NOT food buffet charges).',
      ]),
      doc('email', 'Reunion Charter Request E-mail',
        [['To', 'charters@baybreezeyachts.com'], ['From', 'Linda Morales'], ['Subject', 'Saturday Afternoon Family Charter — 18 Guests']],
        [
          'Hi BayBreeze Reservations,',
          'I would love to reserve a 4-hour Saturday evening harbor cruise for 18 family members celebrating my parents’ 40th anniversary, complete with your optional Sunset Dinner Buffet for every attendee.',
          'Please reply with our single combined price breakdown including Saturday vessel pricing, crew service fee, and catering buffet charges so we can wire our 50% deposit today.',
        ]),
    ], [
      ['Double · Synthesis', 'Which boat must Linda Morales charter for her 18 family members?', ['Catalina Catamaran 42', 'Harbor Cruiser 30', 'Either vessel accommodates 18 guests', 'Two Harbor Cruiser 30 vessels combined'], 0, 'ตอบ Catalina Catamaran 42 (ผู้โดยสาร 18 คน เกินความจุ 14 คนของ Harbor Cruiser 30 จึงต้องเลือก Catalina Catamaran 42 ซึ่งรับได้ถึง 28 คน)'],
      ['Double · Math', 'Calculate the vessel fee PLUS the Saturday surcharge BEFORE adding the crew service fee:', ['$2,300', '$1,950', '$1,350', '$2,650'], 0, 'ตอบ $2,300 (ค่าเรือ Catalina วันธรรมดา $1,950 + ค่าเช่าวันเสาร์–อาทิตย์ +$350 = $2,300)'],
      ['Double · Math', 'Calculate the mandatory 15% crew service fee applied to the Saturday vessel fee ($2,300):', ['$345', '$292.50', '$810', '$466.50'], 0, 'ตอบ $345 (15% ของค่าเช่าเรือเสาร์ $2,300 = $345 — ไม่คิดจากค่าอาหาร)'],
      ['Double · Math', 'What will the Sunset Dinner Buffet add for all 18 guests ($45/guest)?', ['$810', '$630', '$1,260', '$931.50'], 0, 'ตอบ $810 (18 คน × $45 = $810)'],
      ['Double · Synthesis', 'What GRAND TOTAL quote (Vessel + Saturday + 15% Crew Fee + 18-Guest Buffet) should BayBreeze send Linda?', ['$3,455 ($2,300 + $345 + $810)', '$3,576.50', '$3,110', '$2,645'], 0, 'ตอบ $3,455 ($2,300 ค่าเรือเสาร์ + $345 ค่าบริการลูกเรือ + $810 ค่าบุฟเฟต์ = $3,455)'],
    ]),

    p7(27, 'm27-d2', [
      doc('invoice', 'TriCounty Gazette — Advertising Billing Statement #AD-619',
        [['Advertiser', 'OakStreet Appliance Outlet'], ['Campaign', 'May 3-Run Color Display Ad (Quarter-Page)']],
        [
          tbl(
            ['Published Edition', 'Ad Size & Color', 'Rate Card Billed'],
            [
              ['Issue 1 — Thu, May 1', 'Quarter-Page Full Color', '$420.00'],
              ['Issue 2 — Thu, May 8', 'Quarter-Page Full Color', '$420.00'],
              ['Issue 3 — Thu, May 15', 'Quarter-Page Full Color', '$420.00'],
            ]
          ),
          'Total Statement Due: $1,260.00. Standard Policy: Advertisers pre-booking 3+ identical Thursday runs on one insertion order automatically receive a 15% Multi-Run Frequency Discount off published Rate Card totals.',
        ]),
      doc('email', 'Dispute E-mail to Ad Accounting',
        [['To', 'adbilling@tricountygazette.com'], ['From', 'Samir Kapoor, OakStreet Appliance Outlet'], ['Date', 'May 19'], ['Subject', 'Correction on Invoice #AD-619 — Missing 3-Run Discount']],
        [
          'Dear Billing Office,',
          'Running our spring dishwasher promotion every Thursday in early May brought great weekend foot traffic! However, comparing Statement #AD-619 against signed Insertion Order #IO-88 (attached), I noticed two items:',
          'First, our May 15 Issue #3 artwork accidentally ran in black-and-white grayscale instead of Full Color—for which rep Kayla Jones already promised a $90 Make-Good Color Credit via email last Friday. Second, because we booked all three consecutive Thursdays on a single signed order, our invoice missed the 15% Multi-Run Frequency Discount on the $1,260 base rate!',
        ]),
    ], [
      ['Double · Detail', 'What printing error happened in the May 15 edition of OakStreet Appliance’s advertisement?', ['The advertisement printed in grayscale instead of full color', 'The quarter-page display accidentally dropped off May 15 entirely', 'Shop telephone digits appeared incorrectly inside the corner border', 'Publication delayed until Saturday instead of Thursday'], 0, 'ตอบ The advertisement printed in grayscale instead of full color (ฉบับวันที่ 15 พ.ค. พิมพ์เป็นภาพขาวดำแทนสีเต็มรูป)'],
      ['Double · Math', 'How much is the 15% Multi-Run Frequency Discount on the $1,260.00 base charge?', ['$189.00', '$126.00', '$63.00', '$210.00'], 0, 'ตอบ $189.00 (15% ของ $1,260 = $189.00)'],
      ['Double · Math', 'After subtracting BOTH the $189.00 Multi-Run Discount AND the $90.00 color-error credit, what corrected balance does OakStreet owe?', ['$981.00', '$1,071.00', '$1,170.00', '$1,260.00'], 0, 'ตอบ $981.00 ($1,260 - $189 ส่วนลด 3 สัปดาห์ - $90 เครดิตพิมพ์ผิดขาวดำ = $981.00)'],
      ['Double · Detail', 'Who previously agreed to grant the $90 Make-Good Color Credit?', ['Sales representative Kayla Jones', 'TriCounty Gazette Accounting Manager', 'Newspaper printing press operators', 'OakStreet Appliance’s graphic artist'], 0, 'ตอบ Sales representative Kayla Jones (Samir ระบุว่าตัวแทน Kayla Jones ตอบตกลงให้เครดิตชดเชย $90 ทางอีเมลเมื่อวันศุกร์ก่อนแล้ว)'],
      ['Double · Inference', 'Why did OakStreet qualify automatically for the 15% Multi-Run discount?', ['They committed to three Thursday issues on one signed insertion order', 'They ran weekend display ads alongside full-page newspaper sections', 'They prepaid cash prior to May 1 rate card announcements', 'Color printing mistakes double multi-run promotional discounts'], 0, 'ตอบ They committed to three Thursday issues on one signed insertion order (จองลงครบ 3 พฤหัสฯ ต่อเนื่องในใบสั่งลงโฆษณาเดียว #IO-88)'],
    ]),

    p7(27, 'm27-t1', [
      doc('notice', 'Northbridge University — Alumni Homecoming Pass Tiers', null, [
        tbl(
          ['Pass Package', 'What It Covers', 'Individual Price', '8-Person Class Table Bundle'],
          [
            ['Tailgate & Game Pass', 'Outdoor BBQ Lawn + Stadium Bleacher Seat', '$45', '$320 ($40/person!)'],
            ['All-Weekend Gala Pass', 'BBQ Lawn + Stadium Seat + Friday Formal Gala', '$115', '$840 ($105/person!)'],
          ]
        ),
        'Group Wristbands: Check-in tents open at 11:00 A.M. Saturday behind Varsity Gate 2 for pre-paid class coordinators collecting wristbands.',
      ]),
      doc('memo', 'HOMECOMING WEATHER LOGISTICS UPDATE',
        [['Issued', 'Friday Afternoon, Oct 17'], ['Affected Venue', 'Saturday Morning Outdoor BBQ Lawn Tailgate']],
        [
          'Due to saturated turf from Friday morning storms, Saturday’s 11:30 A.M. Alumni BBQ Tailgate is relocating under the dry heated roof of Fieldhouse West Court (Enter via Gate 5). Stadium kickoff at 2:00 P.M. remains unchanged at Varsity Stadium.',
          'Wristband pickup tables move indoors alongside Fieldhouse Gate 5 starting at 10:45 A.M. Saturday.',
        ]),
      doc('email', 'Class of 2015 Coordinator E-mail',
        [['To', 'alumni-events@northbridge.edu'], ['From', 'Derek Chen, Class of 2015 Coordinator'], ['Date', 'Friday, Oct 17 · 4:10 P.M.'], ['Subject', 'Check-in & Payment for Our 8-Person Table Bundle']],
        [
          'Hi Homecoming Team,',
          'Just confirming our online payment settled cleanly for one 8-Person Class Table Bundle of the Tailgate & Game Pass ($320 total) for eight classmates flying in tomorrow!',
          'Glad to hear Fieldhouse West Court keeps our burgers warm and dry at 11:30 A.M.! Could you hold all eight green wristbands under "Derek Chen — Class of 2015" at your relocated check-in counter around 10:50 A.M. tomorrow?',
        ]),
    ], [
      ['Triple · Synthesis', 'Where should Derek Chen pick up his eight classmates’ wristbands at 10:50 A.M. Saturday?', ['At the indoor check-in table beside Fieldhouse Gate 5', 'Outside Varsity Gate 2 in front of the soaked stadium lawn', 'At Friday Formal Gala registration desks', 'Inside the Alumni Bookstore box office'], 0, 'ตอบ At the indoor check-in table beside Fieldhouse Gate 5 (ประกาศบ่ายวันศุกร์ย้ายจุดรับสายรัดข้อมือจาก Varsity Gate 2 มาที่ Fieldhouse Gate 5 เปิด 10:45 น.)'],
      ['Triple · Math', 'How much total did Derek Chen’s classmates SAVE together by booking an 8-Person Table Bundle of the Tailgate & Game Pass instead of buying 8 individual tickets?', ['$40 ($320 vs $360)', '$80 ($840 vs $920)', '$45', '$320'], 0, 'ตอบ $40 (ซื้อแยก 8 × $45 = $360 แต่จองโต๊ะ 8 คนจ่ายแค่ $320 -> ประหยัด $40)'],
      ['Triple · Detail', 'Why was the Saturday morning BBQ gathering shifted into Fieldhouse West Court?', ['Rainstorms left the outdoor BBQ grass soggy', 'Football players scheduled early stadium turf warmups', 'Formal Friday Gala tables needed overnight setup', 'Gate 2 electrical panels lost heating power'], 0, 'ตอบ Rainstorms left the outdoor BBQ grass soggy (พายุฝนเช้าวันศุกร์ทำให้สนามหญ้าแฉะ จึงย้ายเข้าใต้อาคาร Fieldhouse West Court)'],
      ['Triple · Inference', 'Which homecoming activity is NOT included on Derek’s $320 wristbands?', ['Friday’s Formal Gala banquet', 'Saturday’s Alumni BBQ lunch', 'Saturday’s 2:00 P.M. Varsity Stadium football game', 'Indoor Fieldhouse shelter access'], 0, 'ตอบ Friday’s Formal Gala banquet (คณะนี้ซื้อแพ็กเกจ Tailgate & Game Pass ซึ่งไม่มีงานกาลาคืนวันศุกร์รวมอยู่ด้วย)'],
      ['Triple · Detail', 'At what time does the stadium football kickoff begin Saturday afternoon?', ['At 2:00 P.M.', 'At 11:30 A.M.', 'At 10:45 A.M.', 'At 10:50 A.M.'], 0, 'ตอบ At 2:00 P.M. (เวลาเขี่ยลูกที่สนาม Varsity Stadium ยังคงเป็น 14:00 น. ตามเดิม)'],
    ]),

    p7(27, 'm27-t2', [
      doc('notice', 'PrecisionMach Care — CNC Spindle Calibration Service Plans', null, [
        tbl(
          ['Tier', 'Annual Visits', 'Ballbar Alignment Inspection', 'Emergency Spindle Dispatch', 'Laser Interferometer Option'],
          [
            ['Standard Plan ($900/yr)', '1 Annual Tune-Up', '$240 Add-On Fee', '$195 Callout Rate', '+$480 per axis'],
            ['Premier Mill Plan ($1,650/yr)', '2 Semi-Annual Visits', 'Included Free ($0)', '$0 Waived Dispatch', '+$220 per axis'],
          ]
        ),
        'After-Hours Rule: Emergency visits completed after 5:00 P.M. or on weekends incur an additional +$140 flat technician overtime charge under BOTH plans.',
      ]),
      doc('form', 'FIELD SERVICE TICKET #TK-812 — Summit Aerospace Parts (Plan: Premier Mill)',
        [['Service Date', 'Wednesday, March 5 · 10:00 A.M. (Scheduled Semi-Annual Visit #1)'], ['Machine', '5-Axis VMC Mill #M-4']],
        [
          lst([
            'Baseline Work Completed: Semi-Annual Spindle Bearing & Ballbar Alignment Inspection.',
            'Additional Customer Work Requested On Site: Full X-Axis and Y-Axis (2 axes total) Optical Laser Interferometer Linear Accuracy Compensation.',
          ]),
        ]),
      doc('email', 'Shop Foreman Verification E-mail',
        [['To', 'billing@precisionmachcare.com'], ['From', 'Trevor Cole, Summit Aerospace Shop Foreman'], ['Date', 'March 6'], ['Subject', 'Reviewing Add-On Totals for Ticket #TK-812']],
        [
          'Hello PrecisionMach Accounting,',
          'Your calibration engineer completed Wednesday morning’s 10:00 A.M. preventive maintenance on Mill #M-4 under our active Premier Mill Plan ($1,650 already prepaid for the year).',
          'Because we added optical laser compensation across BOTH X and Y axes during regular business hours, please confirm our sole extra balance owed on Ticket #TK-812 is $440 so I can sign off AP payment cleanly.',
        ]),
    ], [
      ['Triple · Synthesis', 'Does Trevor Cole’s $440 add-on calculation for Ticket #TK-812 match Premier Mill pricing?', ['Yes—Ballbar Alignment is $0 and 2 laser axes at $220 each equal $440', 'No—Premier Mill charges $240 for Ballbar Alignment plus $440', 'No—two laser axes under Premier cost $960 combined', 'Only if Wednesday morning visits exclude preventive bearing inspections'], 0, 'ตอบ Yes—Ballbar Alignment is $0 and 2 laser axes at $220 each equal $440 (Premier Mill ฟรี Ballbar + คิดค่า Laser 2 แกน X/Y แกนละ $220 = $440 และทำในเวลา 10:00 น. จึงไม่มีค่าล่วงเวลา)'],
      ['Triple · Math', 'What would those EXACT SAME Ticket #TK-812 tasks (Ballbar + 2 Laser Axes during business hours) cost as add-ons under the Standard Plan?', ['$1,200 ($240 Ballbar + $960 for 2 laser axes)', '$960 ($0 Ballbar + $960 laser axes)', '$680 ($240 Ballbar + $440 laser axes)', '$1,340 (including $140 overtime fee)'], 0, 'ตอบ $1,200 (แผน Standard คิด Ballbar $240 + Laser 2 แกน × $480 = $960 -> รวมเป็น $1,200)'],
      ['Triple · Detail', 'Why was the +$140 technician overtime charge omitted on Ticket #TK-812?', ['Work took place at 10:00 A.M. Wednesday during standard business hours', 'Premier Mill subscribers never pay after-hours overtime surcharges', 'Laser interferometer runs qualify as automated evening scans', 'Annual prepaid memberships waive weekend surcharges automatically'], 0, 'ตอบ Work took place at 10:00 A.M. Wednesday during standard business hours (ตรวจซ่อมวันพุธเวลา 10:00 น. ซึ่งอยู่ในเวลาทำการปกติ ไม่ใช่หลัง 17:00 น. หรือวันหยุด)'],
      ['Triple · Detail', 'How much has Summit Aerospace already prepaid for its annual Premier Mill contract?', ['$1,650', '$900', '$440', '$480'], 0, 'ตอบ $1,650 (Trevor ระบุว่าชำระค่าแผน Premier Mill รายปี $1,650 ล่วงหน้าไว้แล้ว)'],
      ['Triple · Inference', 'When will Summit Aerospace receive its second scheduled preventive maintenance visit of the year?', ['Roughly six months after March 5 under Semi-Annual Premier coverage', 'Not until next March, because Standard grants only 1 annual tune-up', 'Whenever Emergency Spindle Dispatch requests exceed $195', 'At the end of every month after AP payment clearance'], 0, 'ตอบ Roughly six months after March 5 under Semi-Annual Premier coverage (แผน Premier ครอบคลุมเข้าตรวจ 2 ครั้งต่อปีแบบรายครึ่งปี)'],
    ]),

    p7(27, 'm27-t3', [
      doc('notice', 'PineRidge Trail Half-Marathon — Official Runner Transfer & Gear Rules', null, [
        lst([
          'Bib Transfers: Paid runners unable to attend may transfer their official timing bib to a substitute runner online for a $15 admin processing fee until Friday, June 10 at 11:59 P.M. (No refunds or transfers after June 10).',
          'Pace Wave Changes: Moving backward into a slower Corral Wave (e.g., Wave A -> Wave C) is completely FREE anytime before Race Morning; moving forward to faster corrals requires a verified 10K proof time.',
          'Aid-Station Drop Bags: Small zipper gear pouches marked Drop Bag B deploy exclusively to Mile-8 River Crossing Aid Station (max 1 kg; jackets/gels only, no glass bottles).',
        ]),
      ]),
      doc('form', 'RUNNER CONFIRMATION SUMMARY #PR-2094',
        [['Original Registrant', 'Carlos Vega'], ['Assigned Corral', 'Wave A (7:30 A.M. Fast Pace)'], ['Race Day', 'Sunday, June 19']],
        [
          'Drop Bag Opt-In: None selected yet; drop boxes close at Saturday June 18 Packet Expo by 5:00 P.M.',
        ]),
      doc('email', 'Runner Transfer & Wave Request E-mail',
        [['To', 'registration@pineridgetrail.org'], ['From', 'Carlos Vega (#PR-2094)'], ['Date', 'Monday, June 6'], ['Subject', 'Transferring Bib #PR-2094 to My Twin Brother Luis']],
        [
          'Hi PineRidge Race Directors,',
          'I twisted my ankle during Saturday long trail training and must bow out of June 19’s race—fortunately, my brother Luis Vega runs regularly and would love to take over Bib #PR-2094 today (June 6)!',
          'Since Luis targets a relaxed finish pace rather than my fast 7:30 A.M. group, please move the transferred entry cleanly down into Wave C without requiring a 10K proof card, and let Luis know whether he can still drop a lightweight jacket pouch for Mile 8 next Saturday at the expo.',
        ]),
    ], [
      ['Triple · Synthesis', 'Can Carlos lawfully transfer Bib #PR-2094 to his brother Luis on June 6?', ['Yes—June 6 beats the June 10 deadline with a $15 transfer fee', 'No—race rules forbid sibling bib transfers entirely', 'Only if Luis first submits a certified 10K proof time before June 10', 'No—Wave A bibs expire whenever runners suffer trail injuries'], 0, 'ตอบ Yes—June 6 beats the June 10 deadline with a $15 transfer fee (แจ้งโอนวันที่ 6 มิ.ย. ทันเส้นตาย 10 มิ.ย. โดยมีค่าธรรมเนียม $15)'],
      ['Triple · Detail', 'Why does Luis NOT need to submit a verified 10K race time to move from Wave A to Wave C?', ['Downgrading into a slower pace corral is free and unrestricted', 'Twin siblings inherit previous verified corral proof automatically', 'Wave C accommodates half-marathon runners carrying drop bags', 'June 6 emails waive corral verification rules globally'], 0, 'ตอบ Downgrading into a slower pace corral is free and unrestricted (กฎระบุว่าย้ายลงกลุ่มที่ช้าลงเช่น Wave A -> Wave C ทำได้ฟรีและไม่ต้องใช้ผลเวลา 10K)'],
      ['Triple · Synthesis', 'How and when can Luis check a windbreaker drop bag for Mile 8 River Crossing?', ['Pack a pouch under 1 kg without glass and turn it in at the Packet Expo before 5:00 P.M. Saturday, June 18', 'Mail it to PineRidge headquarters before Friday, June 10', 'Leave it with Wave A pacers at 7:30 A.M. Sunday morning', 'Request Carlos transfer Drop Bag B receipts before Monday noon'], 0, 'ตอบ Pack a pouch under 1 kg without glass and turn it in at the Packet Expo before 5:00 P.M. Saturday, June 18 (นำถุงซิปน้ำหนักไม่เกิน 1 กก. ไม่มีขวดแก้ว ไปส่งที่ Packet Expo วันเสาร์ 18 มิ.ย. ก่อน 17:00 น.)'],
      ['Triple · Detail', 'Why is Carlos giving up his spot in the June 19 half-marathon?', ['He injured his ankle while training on Saturday', 'His pace slowed below Wave A minimums', 'Business travel conflicted with Saturday Packet Expo pickup', 'Race directors capped Mile-8 aid station runner numbers'], 0, 'ตอบ He injured his ankle while training on Saturday (ข้อเท้าแพลงระหว่างซ้อมวิ่งเทรลวันเสาร์)'],
      ['Triple · Detail', 'Which item is explicitly barred inside Mile-8 Drop Bag B pouches?', ['Glass beverage containers', 'Running energy gels', 'Lightweight windbreaker jackets', 'Spare cotton socks'], 0, 'ตอบ Glass beverage containers (ห้ามใส่ขวดแก้วเด็ดขาด)'],
    ]),

    // ==================== SET 28 ====================
    p7(28, 'm28-s1', [
      doc('chat', 'Text Message Chain · HearthCrumb Sourdough', null, [
        chat([
          ['Nadia Torres', '07:40 A.M.', 'Ben, Front Street stays barricaded for the open-air farmers market setup until 11:00 A.M.—your insulated flour van won’t squeeze past the main awning.'],
          ['Ben Walker', '07:43 A.M.', 'Good save before I turned off the highway! Should I park beside Rear Cold Dock 2 behind Oak Alley instead?'],
          ['Nadia Torres', '07:46 A.M.', 'Yes, pull straight into Cold Dock 2. Baker Mateo unlocked the roll-up steel door and stacked all twelve rye starter tubs beside the scale for loading.'],
        ]),
      ]),
    ], [
      ['Single · Problem', 'Why can Ben NOT drive up to the bakery’s Front Street entrance?', ['Barricades for a street farmers market close Front Street until 11:00 A.M.', 'Baker Mateo locked the front bakery awning door until noon', 'Cold Dock 2 repairs diverted heavy trucks off the highway', 'Rye starter tubs blocked the Front Street unloading scale'], 0, 'ตอบ Barricades for a street farmers market close Front Street until 11:00 A.M. (ถนนด้านหน้าตั้งแผงปิดตลาดนัดเกษตรกรจนถึง 11:00 น.)'],
      ['Single · Detail', 'What did Baker Mateo already prepare at Cold Dock 2?', ['Twelve tubs of rye bread starter beside the warehouse scale', 'Insulated flour sacks packed onto Front Street carts', 'Spare roll-up steel door keys left with street market staff', 'Cleaned delivery crates inside Ben’s refrigerated truck'], 0, 'ตอบ Twelve tubs of rye bread starter beside the warehouse scale (Mateo เปิดประตูม้วนและเรียงถังหัวเชื้อแป้งไรย์ 12 ถังไว้ข้างตาชั่งแล้ว)'],
    ]),

    p7(28, 'm28-s2', [
      doc('memo', 'STAFF LOCKER UPGRADE NOTICE',
        [['To', 'West Wing Lab Technicians'], ['From', 'Building Facilities'], ['Subject', 'Keypad Lock Installation — Locker Row B']],
        [
          'Facility technicians are replacing corroded padlocked hasps across Row B coat lockers with battery-powered 4-digit PIN latches next Friday morning between 8:00 A.M. and Noon.',
          'Please empty personal coats, safety goggles, and lunch coolers from Row B completely by Thursday at 5:00 P.M. Unclaimed items left inside Friday morning will be tagged carefully inside Lost Property closets at Reception.',
        ]),
    ], [
      ['Single · Purpose', 'What improvement are technicians making to Locker Row B?', ['Upgrading worn padlocks to digital keypad latches', 'Expanding locker frames across the West Wing cafeteria', 'Installing insulated lunch cooling compartments inside Row B', 'Removing unused steel coat hooks before Friday inspections'], 0, 'ตอบ Upgrading worn padlocks to digital keypad latches (เปลี่ยนกลอนแม่กุญแจที่ขึ้นสนิมเป็นตัวล็อกรหัสตัวเลข 4 หลัก)'],
      ['Single · Timing', 'By when must employees clear personal belongings out of Row B?', ['Thursday at 5:00 P.M.', 'Friday at 8:00 A.M.', 'Friday at Noon', 'Immediately upon checking Reception'], 0, 'ตอบ Thursday at 5:00 P.M. (ต้องเคลียร์ของใช้ส่วนตัวออกให้หมดก่อน 17:00 น. วันพฤหัสฯ)'],
    ]),

    p7(28, 'm28-s3', [
      doc('review', 'Horizon Frame & Glass — Customer Review & Shop Reply', null, [
        '★ ★ ★ ★ ★ — Reviewed by Claire Bell (Antique Botanical Watercolor Map)',
        'My heirloom 1912 botanical survey map faded slightly under living room windows, so Horizon swapped the scratched regular glass for 99% UV-filtering anti-reflective museum acrylic. The watercolor greens pop with zero overhead glare now! Even better, when courier transit dented one protective wooden box corner Tuesday, owner Tom Rush cut fresh cedar moldings in four hours and waived the rush pickup fee completely.',
        'Owner Response (Tom Rush): Protecting century-old inks stays our favorite craft, Claire! Remember to dust museum acrylic sheets solely with plain dry microfiber rather than ammonia window spray.',
      ]),
    ], [
      ['Single · Detail', 'Why did Claire replace the original glass frame on her 1912 map?', ['Regular glass scratched and failed to block sunlight fading', 'Antique cedar moldings had split apart in living room humidity', 'Courier transit shattered the watercolor paper glass pane', 'Ammonia glass cleaner stained the heirloom map borders'], 0, 'ตอบ Regular glass scratched and failed to block sunlight fading (กระจกเดิมเป็นรอยและกันแสง UV ไม่ได้ ทำให้สีภาพซีดจาง)'],
      ['Single · Detail', 'How did Tom Rush handle Tuesday’s courier crate corner dent?', ['He built new cedar trim quickly and canceled the rush fee', 'He refunded the museum acrylic sheet invoice entirely', 'He shipped a spare microfiber cleaning bottle free', 'He sent a replacement delivery crate via express van Wednesday'], 0, 'ตอบ He built new cedar trim quickly and canceled the rush fee (เจ้าของร้านทำกรอบไม้ซีดาร์ใหม่เสร็จใน 4 ชม. และยกเว้นค่าธรรมเนียมงานด่วนให้ด้วย)'],
      ['Single · Advice', 'What care rule does Tom Rush warn Claire about for the new acrylic glazing?', ['Wipe only with dry microfiber and avoid chemical ammonia sprays', 'Keep antique maps sealed inside protective wooden boxes permanently', 'Apply soft beeswax polish across cedar moldings quarterly', 'Place the frame at least five feet away from overhead lighting'], 0, 'ตอบ Wipe only with dry microfiber and avoid chemical ammonia sprays (เตือนให้เช็ดด้วยผ้าไมโครไฟเบอร์แห้ง ห้ามใช้น้ำยาเช็ดกระจกที่มีแอมโมเนีย)'],
    ]),

    p7(28, 'm28-s4', [
      doc('memo', 'CORPORATE TRAVEL DIRECTIVE — SHORT-HAUL RAIL FIRST',
        [['To', 'All Regional Account Staff'], ['Effective', 'June 1']],
        [
          'To cut travel emissions and airport tarmac delays, business trips between cities separated by under 400 kilometers must book quiet Business Class express rail tickets instead of regional jet flights.',
          'Accounting approves regional airfares under 400 km ONLY when a client site breakfast begins prior to 8:00 A.M. and no direct train arrives the evening before, with VP sign-off attached inside Concur prior to ticketing.',
        ]),
    ], [
      ['Single · Rule', 'What travel change takes effect on June 1 for trips under 400 kilometers?', ['Staff must travel via high-speed business rail rather than short flights', 'Accounting stops reimbursing express rail seating for regional teams', 'Employees must depart the evening before every client meeting', 'Concur software blocks all out-of-town breakfast expenses'], 0, 'ตอบ Staff must travel via high-speed business rail rather than short flights (ระยะทางต่ำกว่า 400 กม. ต้องนั่งรถไฟความเร็วสูงชั้น Business Class แทนเครื่องบิน)'],
      ['Single · Exception', 'When will Accounting approve flying on a sub-400 km route?', ['For pre-8:00 A.M. meetings impossible via prior-evening trains, with VP permission', 'Whenever airport ticket prices drop beneath Business Class rail tariffs', 'During summer weather alerts across major rail corridors', 'When regional managers fly alongside client executives'], 0, 'ตอบ For pre-8:00 A.M. meetings impossible via prior-evening trains, with VP permission (ยกเว้นเฉพาะนัดเช้าก่อน 08:00 น. ที่ไม่มีรถไฟเย็นวันก่อนหน้า และต้องได้ลายเซ็น VP ล่วงหน้า)'],
      ['Single · Detail', 'Which software system records pre-flight VP approvals?', ['Concur', 'TravelRail Portal', 'Accounting Direct', 'ExpressLog'], 0, 'ตอบ Concur (ระบุให้แนบเอกสารอนุมัติจาก VP เข้าในระบบ Concur ก่อนออกตั๋ว)'],
    ]),

    p7(28, 'm28-s5', [
      doc('ad', 'CAREER OPPORTUNITY · Pacific Rim Freight Clearinghouse', null, [
        'Position: Entry-Level Customs Documentation Trainee (Incheon–Long Beach Desk)',
        'Rapidly growing ocean freight forwarder Pacific Rim Clearinghouse is recruiting a Bilingual Customs Trainee fluent in written Korean and English to match commercial packing bills, verify tariff harmonized codes, and resolve container inspection holds with port customs brokers.',
        'Perks & Growth: Full licensed Customs Broker exam prep classes and exam testing fees are paid 100% by the company once trainees complete six months of full-time service. Apply at pacrimfreight.com/careers by uploading a cover letter, resume, and screenshot showing your 55+ WPM typing score.',
      ]),
    ], [
      ['Single · Detail', 'What everyday responsibility will the Customs Trainee handle?', ['Auditing commercial cargo packing lists and harmonized import codes', 'Operating container dock cranes across Long Beach piers', 'Teaching Korean shipping vocabulary to ocean cargo captains', 'Writing legal maritime insurance arbitration contracts'], 0, 'ตอบ Auditing commercial cargo packing lists and harmonized import codes (ตรวจสอบเอกสารแพ็กสินค้า รหัสพิกัดศุลกากร และเคลียร์ตู้ค้างตรวจ)'],
      ['Single · Benefit', 'What career support does Pacific Rim Clearinghouse provide after six months?', ['Full payment for Customs Broker exam preparation courses and testing fees', 'Paid airfare between Incheon and Long Beach ocean ports twice yearly', 'Automatic salary bonuses for 55+ WPM typing benchmarks', 'Part-time flex schedules while pursuing graduate trade law'], 0, 'ตอบ Full payment for Customs Broker exam preparation courses and testing fees (จ่ายค่าคอร์สติวและค่าสอบใบอนุญาต Customs Broker ให้ 100% หลังทำงานครบ 6 เดือน)'],
      ['Single · Requirement', 'Along with a resume and cover letter, what image must candidates submit online?', ['A verification screenshot of their 55+ words-per-minute typing speed', 'A scan of an active licensed maritime customs certificate', 'A translated sample page of Korean ocean tariff schedules', 'Reference letters from port freight inspectors'], 0, 'ตอบ A verification screenshot of their 55+ words-per-minute typing speed (ต้องแนบภาพแคปหน้าจอผลทดสอบพิมพ์เร็ว 55+ คำต่อนาทีด้วย)'],
    ]),

    p7(28, 'm28-s6', [
      doc('notice', 'QUALITY ENHANCEMENT NOTICE — ThermoSip Thermal Pitcher (Model TS-18)', null, [
        'ThermoSip Kitchen Goods has identified minor silicone aging in clear translucent spout seals installed inside Lot W24 (manufactured March–April) of our Model TS-18 insulated carafes. Repeated boiling water fills can split older clear gaskets prematurely, allowing slow steam drips under sealed thumb levers.',
        'Complete stainless vacuum insulation stays fully safe! Email a quick snapshot of the silver "W24" lot sticker stamped under the base ring to support@thermosip.com to receive two free upgraded high-temp amber silicone rings within four business days—no receipt or carafe shipment needed.',
      ]),
    ], [
      ['Single · Problem', 'What defect appeared on certain Model TS-18 insulated pitchers?', ['Clear spout gaskets crack under boiling water and drip slowly near thumb levers', 'Outer stainless vacuum bottles fracture during spring shipping transit', 'Base lot stickers peel off inside automated commercial dishwashers', 'Plastic carafe handles overheat when filled with cold iced tea'], 0, 'ตอบ Clear spout gaskets crack under boiling water and drip slowly near thumb levers (ซีลยางซิลิโคนใสตรงปากพวยในล็อต W24 ปริแตกเมื่อโดนน้ำเดือด ทำให้น้ำซึมหยดเล็กน้อย)'],
      ['Single · Detail', 'How do affected owners claim upgraded amber silicone rings?', ['By emailing a photo of the W24 lot code stamped beneath the pitcher base', 'By mailing their whole insulated carafe back to ThermoSip factories', 'By uploading original store purchase receipts via support websites', 'By dropping damaged lids off at participating coffee equipment shops'], 0, 'ตอบ By emailing a photo of the W24 lot code stamped beneath the pitcher base (แค่ถ่ายรูปสติกเกอร์ล็อต W24 ใต้ฐานส่งอีเมลไปขอซีลยางฟรี ไม่ต้องส่งกาน้ำคืนหรือใช้ใบเสร็จ)'],
      ['Single · Inference', 'Which statement about ThermoSip carafes from Lot W24 is accurate?', ['Replacing only the rubber spout ring fixes the issue cleanly without returning the pitcher', 'Stainless vacuum shells lose insulation performance after March', 'Owners must discard stainless carafes immediately until June upgrades arrive', 'Hot coffee refills are prohibited permanently even after seal swaps'], 0, 'ตอบ Replacing only the rubber spout ring fixes the issue cleanly without returning the pitcher (ตัวถังสแตนเลสปลอดภัย 100% แค่เปลี่ยนยางปากพวยสีอำพันใหม่ก็ได้เลย)'],
    ]),

    p7(28, 'm28-s7', [
      doc('article', 'Narrow "Micro-Trenching" Slots Speed Urban Fiber Rollout Overnight', null, [
        'CIVIC INFRASTRUCTURE WEEKLY — Upgrading aging downtown apartment streets to multi-gigabit optical fiber traditionally meant jackhammering wide asphalt ditches, blocking bus stops for three weeks, and patching noisy concrete seams afterward.',
        '[1] Recently, municipal utility BrookFiber swapped heavy backhoes for precision circular diamond saws that carve shallow trenches barely four centimeters wide and fifteen centimeters deep along gutter seams. [2] Utility crews blow bright orange protective conduit ribbons directly into the narrow slot, test light pulses, and pump rapid-setting gray structural resin flush before morning delivery vans arrive.',
        'Because single blocks complete start-to-finish between 8:00 P.M. and 5:00 A.M., corner bakery cafes and bus commuters barely register overnight construction passed by. [3] BrookFiber’s director estimates micro-trenching trims street restoration labor costs by nearly 55% per urban mile compared to deep utility excavation. [4]',
      ]),
    ], [
      ['Single · Detail', 'How deep are the micro-trench channels carved along city gutters?', ['Fifteen centimeters deep', 'Four centimeters deep', 'Fifty-five centimeters deep', 'Three inches above curb tops'], 0, 'ตอบ Fifteen centimeters deep (ใบเลื่อยเพชรตัดร่องกว้างเพียง 4 ซม. และลึกเพียง 15 ซม.)'],
      ['Single · Benefit', 'Why do local retail shops experience minimal daytime disruption from BrookFiber?', ['Each block’s trenching, conduit placement, and resin sealing finishes overnight', 'Work takes place strictly inside enclosed apartment basements', 'BrookFiber shuts off nearby street buses until Sunday afternoons', 'Conduit wires string silently overhead between municipal street lamps'], 0, 'ตอบ Each block’s trenching, conduit placement, and resin sealing finishes overnight (ทำงานช่วง 20:00–05:00 น. เสร็จเป็นบล็อกๆ ปิดด้วยเรซินแห้งเร็วก่อนรถส่งของตอนเช้ามา)'],
      ['Single · Detail', 'How much cheaper is micro-trenching street repair compared to traditional deep trenching?', ['Roughly 55 percent less per mile', 'Forty percent faster labor onboarding', 'Four times lower fiber glass cost', 'Nearly 100 percent zero material expense'], 0, 'ตอบ Roughly 55 percent less per mile (ประหยัดค่าแรงซ่อมผิวถนนลงได้เกือบ 55% ต่อไมล์)'],
      ['Single · Insertion', 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n"Traffic lane cones clear smoothly right at dawn without leaving bumpy metal road plates behind."', ['[1]', '[2]', '[3]', '[4]'], 1, 'ตอบ [2] (ต่อจากประโยคที่ลงเรซินปิดผิวเสมอกันก่อนรถส่งของตอนเช้าจะมาถึง ทำให้เก็บกรวยจราจรออกได้ตอนรุ่งสางโดยไม่ทิ้งแผ่นเหล็กขรุขระไว้ — วางที่ [2] เหมาะเจาะที่สุด)'],
    ]),

    p7(28, 'm28-s8', [
      doc('memo', 'HR POLICY BULLETIN — REMOTE ERGONOMIC WORKSTATION GRANT',
        [['Eligibility', 'Hybrid & Remote Analysts After 90-Day Probation'], ['Grant Limit', '$350 One-Time Purchase Stipend']],
        [
          '[1] To support healthy neck posture and crisp desk illumination at home, NorthBay Analytics offers newly confirmed remote staff a one-time $350 hardware stipend once employees pass initial 90-day probation.',
          '[2] Approved items cover ergonomic task chairs, articulating monitor stands, full-spectrum desk lamps, and quiet wrist-rest mechanical keyboards. [3] Note that desk gear funded through this grant becomes NorthBay company asset property if an employee leaves voluntarily within 18 months of payout, requiring insured courier return via prepaid labels. After completing 18 full months of continuous service, employees retain lifetime personal ownership of all stipend furniture and accessories cleanly! [4]',
        ]),
    ], [
      ['Single · Timing', 'When does a remote analyst become eligible for the $350 ergonomic desk stipend?', ['Upon finishing the initial 90-day probationary period', 'On their first orientation morning prior to probation', 'After completing eighteen continuous months of service', 'During annual end-of-year tax bonus distributions'], 0, 'ตอบ Upon finishing the initial 90-day probationary period (ต้องผ่านช่วงทดลองงาน 90 วันแรกเสียก่อน)'],
      ['Single · Condition', 'What must happen if a grant recipient resigns ten months after buying an ergonomic chair?', ['The company-funded hardware must be shipped back using prepaid courier labels', 'Employee payroll deducts fifty percent of the $350 stipend', 'Workers lose personal access to NorthBay retirement software accounts', 'Stipend receipts must be donated to local school labs'], 0, 'ตอบ The company-funded hardware must be shipped back using prepaid courier labels (ลาออกก่อนครบ 18 เดือน ถือเป็นทรัพย์สินบริษัท ต้องส่งคืนด้วยป้ายส่งของชำระล่วงหน้า)'],
      ['Single · NOT', 'Which desk item is explicitly listed as ELIGIBLE rather than excluded?', ['Articulating monitor arms and mechanical keyboards', 'High-speed home fiber router monthly bills', 'Private home office air-conditioning repairs', 'Replacement laptop chargers already issued at onboarding'], 0, 'ตอบ Articulating monitor arms and mechanical keyboards (รายการที่เบิกได้ระบุเก้าอี้ ขาแขวนจอ โคมไฟ และคีย์บอร์ด)'],
      ['Single · Insertion', 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n"Employees wishing to order pricier boutique chairs above $350 may simply cover any difference out of pocket."', ['[1]', '[2]', '[3]', '[4]'], 2, 'ตอบ [3] (ขยายความต่อจากรายการอุปกรณ์และงบ $350 ที่เพิ่งระบุในประโยคก่อนหน้า [3] ก่อนที่จะพูดถึงเงื่อนไขกรรมสิทธิ์หากลาออกก่อน 18 เดือนในประโยคถัดไป)'],
    ]),

    p7(28, 'm28-s9', [
      doc('chat', 'Logistics Operations Messaging · #cold-dispatch', null, [
        chat([
          ['Nina Reyes (Hub 4)', '05:52 A.M.', 'Dry ice supplier just phoned—highway fog stalled their morning pellet truck outside Milepost 18! Zero dry ice bins remain on Platform A for Route C pediatric clinic coolers.'],
          ['Kenji Ito (Pharma QA)', '05:56 A.M.', 'Wait—Route C carries refrigerated vials stabilized at 2°C–8°C (`Standard Chilled`), NOT sub-zero frozen batches. Do we have Phase-Change 5°C blue gel bricks thawed cleanly inside Staging Freezer 3?'],
          ['Marco Silva (Packing)', '06:00 A.M.', 'Counting now—eighteen validated insulated totes packed with pre-conditioned +4°C PCM gel bricks stand ready beside Locker 7! Enough for Route C’s full fourteen stops.'],
          ['Nina Reyes (Hub 4)', '06:04 A.M.', 'Brilliant pivot! Driver Omar, Route B takes sub-zero frozen samples directly and still needs dry-ice replenishment; hold Route C vans at Bay 4 until Marco seals those fourteen PCM totes around 6:30 A.M.'],
          ['Kenji Ito (Pharma QA)', '06:07 A.M.', 'Approved by QA—just slip green "2–8°C PCM Validated" pouch manifests inside each tote lid so Route C clinic nurses recognize the alternate pack immediately!'],
        ]),
      ]),
    ], [
      ['Single · Cause', 'Why did Platform A run out of dry-ice pellets at 5:52 A.M.?', ['Dense fog along Highway Milepost 18 delayed the vendor supply truck', 'Freezer Locker 7 malfunctioned overnight and thawed reserves', 'Route B drivers loaded extra dry ice beyond approved allotments', 'Packaging vendors canceled pellet deliveries until next Tuesday'], 0, 'ตอบ Dense fog along Highway Milepost 18 delayed the vendor supply truck (หมอกลงจัดบนทางหลวงแถวหลักกิโลฯ 18 ทำให้รถส่งน้ำแข็งแห้งมาช้า)'],
      ['Single · Synthesis', 'Why could Route C safely swap from dry ice onto +4°C PCM blue gel bricks?', ['Route C carries standard 2°C–8°C refrigerated vials rather than deep-frozen stock', 'Dry ice reacts dangerously with pediatric glass bottle seals', 'PCM gel bricks freeze vials deeper than industrial dry-ice pellets', 'Fourteen stops take under thirty minutes from Hub 4'], 0, 'ตอบ Route C carries standard 2°C–8°C refrigerated vials rather than deep-frozen stock (สาย C ขนส่งวัคซีนแช่เย็น 2–8°C ไม่ใช่แบบแช่แข็งติดลบ จึงใช้เจลแพ็ก +4°C แทนได้)'],
      ['Single · Detail', 'Where did Marco locate eighteen pre-conditioned PCM gel brick totes?', ['Inside Locker 7 near Staging Area', 'Aboard stalled Milepost 18 freight vans', 'Under Platform A sorting tables', 'Inside Kenji’s QA verification lab'], 0, 'ตอบ Inside Locker 7 near Staging Area (Marco นับได้ 18 กล่องพร้อมใช้อยู่ข้างตู้ Locker 7)'],
      ['Single · Intention', 'What does Nina mean when she writes, "hold Route C vans at Bay 4"?', ['Keep Route C delivery vehicles parked briefly until gel-brick totes finish sealing', 'Transfer Route C pediatric clinic drivers onto Route B frozen cargo', 'Cancel morning deliveries to all fourteen Route C clinics', 'Direct highway dry-ice vendors to park inside Bay 4 instead'], 0, 'ตอบ Keep Route C delivery vehicles parked briefly until gel-brick totes finish sealing (ให้รถสาย C จอดรอที่ช่อง 4 ก่อน จนกว่า Marco จะแพ็กกล่องเจลครบ 14 ชุดเสร็จตอน 6:30 น.)'],
      ['Single · Detail', 'What extra instruction did QA Lead Kenji add before dispatch?', ['Include green validation manifest sheets inside every tote lid for clinic nurses', 'Replace all +4°C bricks with extra dry ice once trucks arrive at 7:00 A.M.', 'Weigh individual gel bricks again at Staging Freezer 3', 'Phone nursing staff prior to departing Milepost 18'], 0, 'ตอบ Include green validation manifest sheets inside every tote lid for clinic nurses (แนบใบรายการสีเขียวแสดงการรับรอง PCM ไว้ใต้ฝากล่องให้พยาบาลปลายทางรับทราบ)'],
    ]),

    p7(28, 'm28-d1', [
      doc('notice', 'CleanGrid Annual Engineering Symposium — Registration Fee Table', null, [
        tbl(
          ['Pass Category', '2-Day Main Lecture Hall', 'Add-On: Interactive Grid Simulation Lab', 'Early Cutoff Rate (Until Sept 1)'],
          [
            ['Member Registration', '$320 (Standard $390)', '+$95 Half-Day Workshop', 'Save $70 before Sept 1'],
            ['Non-Member Guest', '$480 (Standard $550)', '+$130 Half-Day Workshop', 'Save $70 before Sept 1'],
          ]
        ),
        'Group Rule: Registering 3+ employees together from ONE firm in a single corporate order waives all $95 / $130 Lab fees for ONE attending team lead (highest add-on fee applies otherwise).',
      ]),
      doc('email', 'Corporate Registration Inquiry',
        [['To', 'symposium@cleangridassoc.org'], ['From', 'Rachel Kim, NorthPoint Power Utilities'], ['Date', 'August 25'], ['Subject', 'Three Engineer Passes + Simulation Lab Order']],
        [
          'Dear CleanGrid Registration,',
          'NorthPoint Power is registering THREE full CleanGrid Associate Members for this autumn’s two-day symposium on a single unified corporate checkout today, August 25.',
          'All three engineers want seats inside the Half-Day Interactive Grid Simulation Lab in addition to the Main Lecture Hall. Applying both your August pre-Sept 1 Early Cutoff rate AND your 3-employee Lab waiver for our senior lead, please confirm our combined final payment.',
        ]),
    ], [
      ['Double · Synthesis', 'Which base pass price applies to each NorthPoint engineer registering on August 25?', ['$320 early Member rate per engineer', '$390 standard Member rate per engineer', '$480 early Non-Member rate', '$550 late rate'], 0, 'ตอบ $320 early Member rate per engineer (ทั้ง 3 คนเป็นสมาชิก CleanGrid และลงทะเบียนวันที่ 25 ส.ค. ทันเรต Early ก่อน 1 ก.ย. ที่คนละ $320)'],
      ['Double · Synthesis', 'For how many engineers must NorthPoint pay the +$95 Simulation Lab add-on fee?', ['Two engineers (one lead’s $95 workshop fee is waived free under the 3+ group rule)', 'All three engineers', 'Zero engineers (all lab fees waived)', 'One team lead only'], 0, 'ตอบ Two engineers (กฎกลุ่ม 3+ คนจากบริษัทเดียวกันช่วยยกเว้นค่า Workshop Lab ให้หัวหน้าทีม 1 คน จึงจ่ายจริงแค่ 2 คน)'],
      ['Double · Math', 'Calculate NorthPoint Power’s EXACT grand total invoice for all three engineers including the two paid Lab seats:', ['$1,150 ([3 × $320] + [2 × $95])', '$1,245 ([3 × $320] + [3 × $95])', '$1,360 ([3 × $390] + [2 × $95])', '$960 ($320 × 3 passes, all labs free)'], 0, 'ตอบ $1,150 (ค่าบัตร 3 × $320 = $960 + ค่าห้องแล็บ 2 × $95 = $190 -> รวม $1,150)'],
      ['Double · Detail', 'How much total workshop savings did NorthPoint capture from registering together vs purchasing three passes individually?', ['$95 saved from one waived Simulation Lab seat', '$70 total savings across all registrations', '$130 Non-Member lab waiver', '$210 overall discount'], 0, 'ตอบ $95 saved from one waived Simulation Lab seat (ประหยัดค่าเข้า Lab ของหัวหน้าทีม 1 ที่นั่งคือ $95 ในฐานะสมาชิก)'],
      ['Double · Inference', 'When would a company miss early cutoff pricing for CleanGrid registration?', ['On or after September 2', 'Before August 25', 'When skipping the Grid Simulation Lab', 'When paying through one corporate invoice'], 0, 'ตอบ On or after September 2 (ราคา Early ใช้ได้จนถึง 1 ก.ย.)'],
    ]),

    p7(28, 'm28-d2', [
      doc('invoice', 'VeloBrew Office Coffee Service — Monthly Service Statement #VB-410',
        [['Account', 'BrightLeaf Law Group (Plan: Gold Brew Care — $195/mo Fixed)'], ['Service Date', 'June 4']],
        [
          tbl(
            ['Line Item', 'Details', 'Charged Amount'],
            [
              ['Monthly Gold Brew Care Base Fee', 'Covers routine descaling & water cartridge swaps', '$195.00'],
              ['Water Hardness Filter Pack (2-Pack)', 'Replacement Resin Cartridges Installed', '$68.00'],
              ['Boiler Pressure Gauge Replacement', 'Leaking dial assembly replaced on Barista Pro 2', '$0.00 (Warranty)'],
            ]
          ),
          'Invoice #VB-410 Total Due: $263.00. Gold Brew Care Terms explicitly include ALL quarterly water-filter cartridge swaps at zero extra part charge.',
        ]),
      doc('email', 'Billing Question E-mail',
        [['To', 'ar@velobrewcoffee.com'], ['From', 'Helen Davis, BrightLeaf Office Coordinator'], ['Date', 'June 6'], ['Subject', 'Statement #VB-410 Duplicate Cartridge Fee']],
        [
          'Hi VeloBrew Billing Team,',
          'Thank you for fixing our espresso machine’s leaking boiler gauge so swiftly without hardware charges on June 4!',
          'While coding Statement #VB-410 for payment, I noticed our accounting portal was billed $68.00 extra for the two replacement Water Hardness Cartridges. Because Gold Brew Care ($195/mo) already covers routine resin filter swaps under plan terms, could you issue an updated invoice dropping that $68.00 line so we remit $195.00 cleanly?',
        ]),
    ], [
      ['Double · Problem', 'Why is Helen Davis challenging a charge on Statement #VB-410?', ['Water filter cartridges already covered under their Gold plan were billed $68.00 extra', 'Replacement boiler pressure gauges failed warranty rules on June 4', 'Monthly Gold Brew Care pricing increased unexpectedly above $195.00', 'VeloBrew technicians failed to replace leaking Barista Pro dial rings'], 0, 'ตอบ Water filter cartridges already covered under their Gold plan were billed $68.00 extra (แผน Gold $195/เดือนครอบคลุมเปลี่ยนไส้กรองน้ำฟรี แต่บิลยังเก็บเพิ่ม $68)'],
      ['Double · Detail', 'Which June 4 repair task WAS correctly billed at $0.00?', ['Replacing a leaking boiler pressure gauge assembly', 'Supplying quarterly Arabica bean wholesale deliveries', 'Installing external plumbing copper shutoffs', 'Cleaning cafeteria sink countertops'], 0, 'ตอบ Replacing a leaking boiler pressure gauge assembly (รายการเปลี่ยนเกจวัดความดันหม้อต้มระบุชัดว่า $0.00 (Warranty))'],
      ['Double · Math', 'If VeloBrew corrects the billing mistake, what revised balance should BrightLeaf Law Group pay?', ['$195.00', '$263.00', '$127.00', '$68.00'], 0, 'ตอบ $195.00 ($263 - $68 ที่คิดซ้ำ = $195.00 ค่าสมาชิกรายเดือนตามสัญญา)'],
      ['Double · Inference', 'When did VeloBrew technician service take place at BrightLeaf Law Group?', ['Two days prior to Helen’s June 6 e-mail', 'On the morning of June 6', 'After quarterly accounting closed on June 30', 'Prior to upgrading onto Gold Brew Care'], 0, 'ตอบ Two days prior to Helen’s June 6 e-mail (งานซ่อมเกิดวันที่ 4 มิ.ย. ก่อน Helen ส่งอีเมลวันที่ 6 มิ.ย.)'],
      ['Double · Detail', 'What does the Gold Brew Care Monthly Base Fee routinely cover besides descaling?', ['Water filter cartridge swaps', 'Monthly corporate coffee cup stock', 'Free baristas during legal conferences', 'Replacement stainless grinder burrs every week'], 0, 'ตอบ Water filter cartridge swaps (ในใบแจ้งหนี้ระบุชัดว่าครอบคลุม routine descaling & water cartridge swaps)'],
    ]),

    p7(28, 'm28-t1', [
      doc('notice', 'OakCrest Sculpture Park — Twilight Acoustic Concert Schedule', null, [
        tbl(
          ['Concert Evening', 'Featured Ensemble', 'General Lawn Ticket', 'Covered Pavilion Reserve'],
          [
            ['Friday, July 11 · 7:30 P.M.', 'RiverString Quartet', '$22', '$42 (Includes Folding Cushion)'],
            ['Friday, July 18 · 7:30 P.M.', 'Cedar Brass Quintet', '$22', '$42 (Includes Folding Cushion)'],
          ]
        ),
        'Heat/Storm Guarantee: If outdoor heat exceeds 35°C or lightning arrives, concerts continue safely under Covered Pavilion seating; General Lawn holders automatically receive complimentary Pavilion Bleacher upgrades on availability, plus free chilled shuttle rides from North Mall Lot C.',
      ]),
      doc('memo', 'EXTREME HEAT WEATHER RELOCATION ALERT',
        [['Issued', 'Friday, July 11 · Noon'], ['Event', 'Tonight’s 7:30 P.M. RiverString Quartet Performance']],
        [
          'Due to forecast evening highs lingering near 37°C across OakCrest Lawn meadows, tonight’s July 11 RiverString Quartet setup moves completely onto Covered Pavilion Shade Tiers (cooled by misting fans)!',
          'ALL General Lawn ticket holders ($22) are upgraded free into Covered Pavilion Upper Bleachers tonight, and North Mall Lot C shaded electric shuttles run continuously every 8 minutes from 6:15 P.M. onward.',
        ]),
      doc('email', 'Patron Group E-mail Inquiry',
        [['To', 'tickets@oakcrestpark.org'], ['From', 'Grace Patel'], ['Date', 'Friday, July 11 · 2:15 P.M.'], ['Subject', 'Tonight’s Four Lawn Tickets & Shaded Shuttles']],
        [
          'Hi Park Box Office,',
          'I bought four $22 General Lawn tickets earlier this week for tonight’s RiverString Quartet concert with my elderly parents. Seeing your afternoon heat alert moving seating under Covered Pavilion Shade Tiers brings huge relief!',
          'Do we need to stop at Will Call to exchange barcodes for those complimentary Pavilion Upper Bleachers, and will my father’s folding cane clear boarding safely onto North Mall Lot C electric shuttles at 6:30 P.M.?',
        ]),
    ], [
      ['Triple · Synthesis', 'Why did Park staff move Friday, July 11’s RiverString Quartet audience beneath the Covered Pavilion?', ['Evening outdoor temperatures are projected to reach 37°C, above the 35°C threshold', 'Summer thunderstorms flooded North Mall Annex Lot C grass lanes', 'Cedar Brass Quintet requested enclosed shell acoustics', 'Pavilion folding cushions required clearance before July 18'], 0, 'ตอบ Evening outdoor temperatures are projected to reach 37°C, above the 35°C threshold (ประกาศพยากรณ์อากาศร้อนถึง 37°C เกินเกณฑ์ 35°C จึงย้ายเข้าร่มที่มีพัดลมไอน้ำ)'],
      ['Triple · Math', 'How much total money did Grace Patel save across 4 guests by receiving free Pavilion seating upgrades instead of paying upfront Pavilion ticket rates?', ['$80 saved (paid $88 vs $168 Pavilion face value)', '$42 saved total', '$22 saved per family pair', '$168 refunded entirely'], 0, 'ตอบ $80 saved (จ่ายตั๋ว General Lawn 4 × $22 = $88 แต่ได้อัปเกรดขึ้น Covered Pavilion มูลค่าใบละ $42 (4 × $42 = $168) -> ประหยัด $80)'],
      ['Triple · Synthesis', 'At 6:30 P.M., how frequently can Grace and her parents board a shuttle from North Mall Lot C?', ['Every 8 minutes (starting 6:15 P.M.)', 'Once every 30 minutes starting 7:00 P.M.', 'Only after 7:30 P.M. opening chords', 'Shuttles run only during lightning rainstorms'], 0, 'ตอบ Every 8 minutes (ประกาศระบุรถรับส่งไฟฟ้าจาก Lot C วิ่งทุก 8 นาที ตั้งแต่ 18:15 น. เป็นต้นไป)'],
      ['Triple · Detail', 'Which musical group performs the following week on Friday, July 18?', ['Cedar Brass Quintet', 'RiverString Quartet', 'North Mall Jazz Duo', 'OakCrest Youth Winds'], 0, 'ตอบ Cedar Brass Quintet (ตารางวันที่ 18 ก.ค. คือวง Cedar Brass Quintet)'],
      ['Triple · Detail', 'What perk normally comes specifically with paid $42 Covered Pavilion Reserve passes?', ['A provided folding seat cushion', 'Complimentary frozen fruit drinks', 'Private VIP parking beside Pavilion gates', 'Printed signed quartet sheet music'], 0, 'ตอบ A provided folding seat cushion (ตารางระบุตั๋ว Covered Pavilion แถม Folding Cushion ในตัว)'],
    ]),

    p7(28, 'm28-t2', [
      doc('notice', 'SignCraft Commercial Press — Custom Outdoor Vinyl Banner Price Sheet', null, [
        tbl(
          ['Specification Option', 'Standard Spec Included', 'Heavy-Duty Overpass Upgrade'],
          [
            ['Mesh Weight & Sizing', '13-oz Solid Vinyl (6 ft × 3 ft) — $90', '9-oz Wind-Slit Mesh (6 ft × 3 ft) — $115'],
            ['Brass Grommet Ring Spacing', 'Every 24 inches ($0 Standard)', 'Every 12 inches (+$18 Reinforced Edges)'],
            ['UV Anti-Fade Overlaminate', 'Unlaminated Matte ($0)', 'Clear Liquid UV Coat (+$24 / banner)'],
          ]
        ),
        'Turnaround: Standard 5 business days included. Urgent 48-Hour Rush Production adds +$45 flat fee per artwork batch.',
      ]),
      doc('form', 'ARTWORK PROOF APPROVAL ORDER #SC-554',
        [['Customer', 'Metro Hardware Grand Opening'], ['Quantity', '2 Identical Banners (6 ft × 3 ft)'], ['Proof Version', 'V1 — Draft Submitted Monday May 5']],
        [
          'Initial Draft Selected Specs: 13-oz Solid Vinyl ($90/each) · Grommets every 24 inches ($0) · No Laminate ($0) · Standard 5-Day Turnaround.',
        ]),
      doc('email', 'Client Design & Spec Change E-mail',
        [['To', 'production@signcraftpress.com'], ['From', 'Derek Gomez, Metro Hardware'], ['Date', 'Monday, May 5 · 4:00 P.M.'], ['Subject', 'URGENT Revision on Order #SC-554 BEFORE Printing']],
        [
          'Hi Production Team,',
          'Hold the ink rollers on Proof #SC-554! Highway Permit inspectors just rejected solid vinyl over our windy pedestrian bridge—we MUST immediately change BOTH banners from 13-oz Solid Vinyl to the 9-oz Wind-Slit Mesh ($115/banner), upgrade brass grommets to heavy-duty 12-inch spacing (+$18/banner), AND skip the UV laminate so we still meet Saturday morning’s ribbon-cutting via Urgent 48-Hour Rush Production (+$45 flat batch charge)!',
        ]),
    ], [
      ['Triple · Reason', 'Why did Metro Hardware abandon 13-oz Solid Vinyl on May 5?', ['Bridge permit officers rejected solid vinyl for windy overpass hanging', 'Solid vinyl costs more per square foot than wind-slit mesh', 'Liquid UV coats peel rapidly off 13-oz matte banners', '24-inch grommet punches ripped during warehouse inspection'], 0, 'ตอบ Bridge permit officers rejected solid vinyl for windy overpass hanging (เจ้าหน้าที่ตรวจอนุญาตสะพานลอยไม่อนุญาตให้ใช้ไวนิลทึบในจุดลมแรง จึงต้องเปลี่ยนเป็นตาข่าย 9-oz Wind-Slit Mesh)'],
      ['Triple · Math', 'Calculate the NEW per-banner cost (Mesh + 12-inch Grommet Upgrade, excluding Rush batch fee) for ONE revised banner:', ['$133 per banner', '$157 per banner', '$115 per banner', '$108 per banner'], 0, 'ตอบ $133 per banner ($115 Wind-Slit Mesh + $18 ห่วงตาไก่ทุก 12 นิ้ว; ไม่เอาเคลือบ UV)'],
      ['Triple · Math', 'Calculate Metro Hardware’s REVISED GRAND TOTAL for ALL 2 banners INCLUDING the flat +$45 Urgent 48-Hour Rush fee:', ['$311 (2 × $133 + $45 rush batch fee)', '$356 (2 × $133 + 2 × $45 rush fee)', '$266 ($133 × 2, rush waived)', '$359 (including UV coat)'], 0, 'ตอบ $311 (ป้าย 2 ผืน × $133 = $266 + ค่าทำด่วนต่อชุดงานอีก +$45 เหมาจ่ายทั้งแบตช์ = $311)'],
      ['Triple · Detail', 'Which optional print upgrade did Derek Gomez explicitly decide to skip?', ['Clear Liquid UV anti-fade overlaminate', 'Reinforced brass grommets at 12-inch intervals', '48-hour rush turnaround', 'Wind-slit fabric perforations'], 0, 'ตอบ Clear Liquid UV anti-fade overlaminate (Derek สั่งระบุว่าให้ skip the UV laminate เพื่อให้งานเสร็จทันวันเสาร์)'],
      ['Triple · Detail', 'What was the total cost of Metro Hardware’s ORIGINAL Proof V1 order before Monday afternoon’s revision?', ['$180 (two $90 solid banners, zero upgrades)', '$90', '$225', '$270'], 0, 'ตอบ $180 (เดิมสั่งไวนิลทึบ 2 ผืน × $90 และไม่เพิ่มออปชันเสริม = $180)'],
    ]),

    p7(28, 'm28-t3', [
      doc('notice', 'BayLink Commuter Ferries — Peak Fare Passes', null, [
        tbl(
          ['Ticket Product', 'Price', 'Included Crossings', 'Delay Credit Guarantee'],
          [
            ['Single One-Way Adult', '$6.50', '1 Crossing', 'N/A'],
            ['10-Ride Digital Commuter Pack', '$55.00 ($5.50/ride)', '10 Crossings (Valid 60 Days)', '+1 Free Bonus Ride added if boat delayed > 25 min'],
          ]
        ),
        'Dock Schedule Note: All weekday 6:45 A.M. East Shore Commuter boats regularly moor at Berth B unless Coast Guard harbor works divert departures.',
      ]),
      doc('memo', 'PORT MAINTENANCE BULLETIN — BERTH B PILING REPAIR',
        [['Effective Dates', 'Tuesday Oct 7 – Thursday Oct 9'], ['Affected Service', 'Morning Express Boats Only (Before 8:00 A.M.)']],
        [
          'Timber fender pile replacements close Berth B all day Tuesday through Thursday this week. Therefore, 6:45 A.M. East Shore departures shift temporarily onto neighboring Berth A—allow five extra walking minutes from South Gate parking!',
          'Note: Monday morning’s October 6 6:45 A.M. sailing experienced an unrelated 35-minute engine starter delay at Berth B prior to dock construction; automatic Delay Credit vouchers post Tuesday afternoon.',
        ]),
      doc('email', 'Commuter Support E-mail',
        [['To', 'support@baylinkferries.com'], ['From', 'Hannah Park (Account #BL-8129)'], ['Date', 'Wednesday, October 8'], ['Subject', 'Berth A Boarding & Missing Delay Bonus Credit']],
        [
          'Hi BayLink Rider Support,',
          'Glad I caught your dock notice yesterday—walking those five extra minutes around South Gate to Berth A went smoothly before our 6:45 A.M. departure today!',
          'However, checking my active 10-Ride Digital Commuter Pack inside the app right now (I scanned onto Monday’s 6:45 A.M. crossing that sat 35 minutes late waiting for starter repairs), I noticed my remaining rides only dropped without adding Monday’s guaranteed +1 Free Bonus Ride. Could you credit that missing bonus ride before Friday’s ride leaves me at zero?',
        ]),
    ], [
      ['Triple · Synthesis', 'At which berth did Hannah Park board her Wednesday morning 6:45 A.M. commuter boat?', ['Berth A', 'Berth B', 'South Gate Parking Pier', 'Coast Guard Tender Slip'], 0, 'ตอบ Berth A (ช่วงอังคาร 7–พฤหัสฯ 9 ต.ค. ท่า Berth B ซ่อมเสาเทียบเรือ จึงย้ายเรือรอบ 6:45 น. ไปออกที่ Berth A ชั่วคราว)'],
      ['Triple · Synthesis', 'Why does Hannah qualify for +1 Free Bonus Ride under BayLink rules?', ['She holds a 10-Ride Commuter Pack and Monday’s boat ran 35 minutes late, beating the 25-min threshold', 'Berth B repairs diverted Tuesday trains onto Berth A docks', 'South Gate pedestrians receive bonus mileage credits after October 6', 'Engine repairs canceled all morning departures prior to 8:00 A.M.'], 0, 'ตอบ She holds a 10-Ride Commuter Pack and Monday’s boat ran 35 minutes late, beating the 25-min threshold (ผู้ใช้บัตรชุด 10 เที่ยวที่ได้เจอเรือล่าช้าเกิน 25 นาทีในวันจันทร์ที่ช้า 35 นาที จะได้รับแถมฟรี 1 เที่ยว)'],
      ['Triple · Math', 'How much per crossing does Hannah save on her 10-Ride Digital Pack ($55.00) compared to paying Single One-Way fares ($6.50)?', ['$1.00 saved per ride ($10.00 across 10 crossings)', '$0.50 saved per ride', '$1.50 saved per ride', '$5.50 saved per ride'], 0, 'ตอบ $1.00 saved per ride (เฉลี่ยเที่ยวละ $5.50 เทียบกับซื้อเดี่ยว $6.50 -> ประหยัดเที่ยวละ $1.00 หรือรวม $10 ใน 10 เที่ยว)'],
      ['Triple · Detail', 'How long did Monday, October 6’s 6:45 A.M. engine delay hold passengers?', ['Thirty-five minutes', 'Twenty-five minutes', 'Five minutes', 'Until 8:00 A.M.'], 0, 'ตอบ Thirty-five minutes (ประกาศระบุว่าเรือรอบเช้าวันจันทร์ 6 ต.ค. ล่าช้าไป 35 นาทีจากปัญหาตัวสตาร์ตเครื่อง)'],
      ['Triple · Detail', 'Why should commuters add extra arrival minutes when walking to Berth A during October 7–9?', ['It requires a five-minute farther walk past South Gate parking', 'Metal piling security gates scan paper commuter QR receipts', 'Commuter ferries depart five minutes early from Berth A', 'Free coffee carts block South Gate footbridges until 7:00 A.M.'], 0, 'ตอบ It requires a five-minute farther walk past South Gate parking (ต้องเผื่อเวลาเดินเพิ่มอีก 5 นาทีจากลานจอดรถประตูใต้)'],
    ]),

    // ==================== SET 29 ====================
    p7(29, 'm29-s1', [
      doc('chat', 'Text Message Chain · ReelBite Film Catering', null, [
        chat([
          ['Elena Cruz', '06:15 A.M.', 'Luis, production just pushed crane camera setup onto the Barn Studio gravel drive—set up both hot coffee urns and gluten-free muffin trays beneath Gazebo #3 near the pond instead!'],
          ['Luis Gomez', '06:19 A.M.', 'Swinging past the pond now! Does Gazebo #3 have a live 15-amp extension outlet for our two 10-liter percolators?'],
          ['Elena Cruz', '06:22 A.M.', 'Location manager Dan clipped an orange outdoor GFCI power box directly onto Gazebo Pillar B for us this morning.'],
        ]),
      ]),
    ], [
      ['Single · Reason', 'Why is breakfast service shifting away from the Barn Studio gravel drive?', ['Film crew crane equipment is occupying that driveway area', 'Indoor studio tables lacked electrical power for percolators', 'Rain ruined coffee urns left outside near the pond', 'Location manager Dan moved craft tables exclusively indoors'], 0, 'ตอบ Film crew crane equipment is occupying that driveway area (กองถ่ายตั้งเครนกล้องตรงทางเข้า Barn Studio จึงย้ายอาหารเช้าไปที่ศาลา Gazebo #3)'],
      ['Single · Detail', 'Where can Luis plug in both 10-liter coffee percolators?', ['Into an orange outdoor power box mounted on Gazebo Pillar B', 'Inside Barn Studio wall outlets beside the gravel drive', 'Back aboard ReelBite’s catering van generator', 'Behind main reception tent curtains'], 0, 'ตอบ Into an orange outdoor power box mounted on Gazebo Pillar B (ผู้จัดการสถานที่แขวนกล่องปลั๊กไฟสีส้ม GFCI ไว้ที่เสา Pillar B ของศาลาไว้ให้แล้ว)'],
    ]),

    p7(29, 'm29-s2', [
      doc('memo', 'IT AUTHENTICATION UPGRADE',
        [['To', 'All Employees'], ['From', 'Network Identity Ops'], ['Effective', 'May 30']],
        [
          'Beginning May 30, corporate VPN logins will deactivate insecure SMS text verification codes permanently due to rising carrier phishing attacks.',
          'Every employee must stop by Help Desk Window 2 (Monday–Thursday, 9:00 A.M.–4:00 P.M.) with company photo ID before May 29 to pick up and pair a pocket USB-C hardware security key (FIDO2 token) in under two minutes.',
        ]),
    ], [
      ['Single · Purpose', 'Why is Network Identity Ops replacing SMS login verification?', ['Text-message codes are vulnerable to telecom phishing attempts', 'USB-C security keys run VPN connections twice as fast offshore', 'Carrier fees raised monthly IT messaging expenses', 'Mobile phones lose cellular service inside Window 2 closets'], 0, 'ตอบ Text-message codes are vulnerable to telecom phishing attempts (รหัส OTP ทาง SMS เสี่ยงต่อการหลอกลวงแบบ phishing สูง จึงยกเลิกและเปลี่ยนเป็นกุญแจฮาร์ดแวร์ USB-C)'],
      ['Single · Detail', 'What must workers bring to Help Desk Window 2 before May 29?', ['Their workplace photo identification badge', 'A personal cellular billing statement', 'Spare USB-C laptop charging adapters', 'Signed manager VPN request forms'], 0, 'ตอบ Their workplace photo identification badge (ต้องพกบัตรประจำตัวพนักงานที่มีรูปถ่ายไปแสดงเพื่อรับและผูกอุปกรณ์)'],
    ]),

    p7(29, 'm29-s3', [
      doc('review', 'Crestline Mountain Cobbler — Customer Review & Shop Reply', null, [
        '★ ★ ★ ★ ★ — Reviewed by Tom Parker (Goodyear-Welt Boot Resole)',
        'Sent my worn leather alpine boots in for fresh deep-lug rubber Vibram outsoles ahead of autumn climbs. Stitch spacing matched original welt holes invisibly, and Crestline even waxed my scuffed leather toe caps for free because a regional snowstorm held outbound return parcels inside a sorting hub for two extra days!',
        'Owner Response (Maya Soto, Master Cobbler): Glad those treads grip nicely on alpine trails, Tom! Always apply thin beeswax balm lightly rather than heavy synthetic oil so stitched welt leather breathes across damp seasons.',
      ]),
    ], [
      ['Single · Detail', 'Why did Crestline include complimentary leather boot waxing on Tom’s order?', ['Winter weather delayed outgoing shipping parcels by two days', 'Vibram sole rubber left scuff marks along leather toe caps', 'Goodyear-welt orders over two weeks old waive trim labor', 'Original welt stitch spacing misaligned during sole press work'], 0, 'ตอบ Winter weather delayed outgoing shipping parcels by two days (พายุหิมะทำให้พัสดุส่งกลับล่าช้าไป 2 วัน ทางร้านเลยลงแวกซ์บำรุงหนังฟรีเพื่อขออภัย)'],
      ['Single · Detail', 'What repair did Tom originally ship his hiking boots for?', ['Replacing worn rubber treads with deep-lug Vibram outsoles', 'Enlarging narrow toe boxes inside damp leather lining', 'Installing steel snow-traction screws along heel counters', 'Conditioning leather uppers exclusively before winter hikes'], 0, 'ตอบ Replacing worn rubber treads with deep-lug Vibram outsoles (ส่งซ่อมเปลี่ยนพื้นยางดอกลึก Vibram ใหม่)'],
      ['Single · Advice', 'Why does Maya Soto advise avoiding heavy synthetic leather oil?', ['Light natural beeswax allows stitched boot leather to breathe properly', 'Synthetic oils dissolve adhesive under Vibram rubber lugs', 'Beeswax protects cardboard return boxes from winter snow moisture', 'Heavy synthetic creams darken metal eyelet rivets'], 0, 'ตอบ Light natural beeswax allows stitched boot leather to breathe properly (Maya แนะนำให้ทาขี้ผึ้งบางๆ แทนน้ำมันสังเคราะห์ เพื่อให้หนังตรงรอยเย็บระบายอากาศได้)'],
    ]),

    p7(29, 'm29-s4', [
      doc('memo', 'ACCOUNTS PAYABLE DIRECTIVE — YEAR-END INVOICE CUTOFF',
        [['To', 'Department Budget Leads'], ['From', 'Controller’s Office'], ['Applies To', 'Weekly Vendor Payment Runs']],
        [
          'Ahead of our annual financial audit closing next month, weekly vendor check and ACH wire approvals shift permanently forward from Friday noon to Thursday at 3:00 P.M.',
          'Any subcontractor invoice emailed to ap-desk@horizonbuild.com lacking a valid 6-digit Purchase Order (PO) code or signed receiving confirmation automatically rolls into the following week’s cycle without exception.',
        ]),
    ], [
      ['Single · Change', 'How has the weekly vendor invoice approval schedule shifted?', ['Cutoffs moved earlier from Friday noon to Thursday at 3:00 P.M.', 'Vendor checks will switch strictly to monthly ACH bank payouts', 'Subcontractors must now wait thirty extra days during annual audits', 'Purchasing codes shortened from six digits to four digits'], 0, 'ตอบ Cutoffs moved earlier from Friday noon to Thursday at 3:00 P.M. (เลื่อนเส้นตายอนุมัติจ่ายเงินให้เร็วขึ้นจากเที่ยงวันศุกร์ เป็นบ่าย 3 โมงวันพฤหัสฯ)'],
      ['Single · Consequence', 'What happens to a vendor bill submitted without a 6-digit Purchase Order code?', ['Payment waits until the subsequent weekly clearing cycle', 'The Controller’s Office deducts a manual filing penalty', 'Department budget leads receive direct phone reminders Friday morning', 'Vendors must mail paper checks back to Receiving Dock desks'], 0, 'ตอบ Payment waits until the subsequent weekly clearing cycle (บิลที่ขาดรหัส PO 6 หลักหรือใบเซ็นรับของจะถูกเลื่อนไปจ่ายรอบสัปดาห์ถัดไปทันที)'],
      ['Single · Reason', 'Why did the Controller’s Office enact this permanent Thursday cutoff?', ['In preparation for next month’s annual financial close audit', 'Because banking ACH networks shut down Friday afternoons', 'Due to software upgrades on vendor portal mailboxes', 'To reduce subcontractor shipping volumes during December'], 0, 'ตอบ In preparation for next month’s annual financial close audit (เพื่อเตรียมพร้อมสำหรับการตรวจปิดงบการเงินประจำปีเดือนหน้า)'],
    ]),

    p7(29, 'm29-s5', [
      doc('ad', 'CAREER LISTING · QuietHome Appliances', null, [
        'Position: Acoustic Performance Lab Technician (Day Shift — Columbus Test Center)',
        'QuietHome designs ultra-quiet kitchen range hoods and induction dishwashers engineered for open-plan city apartments. We seek an Acoustic Lab Technician to calibrate microphone arrays inside our semi-anechoic sound chamber, log decibel spectra across motor speeds, and compare fan blade baffle prototypes.',
        'Qualifications: Technical degree in Mechanical Technology, Audio Engineering, or Physics; comfort generating frequency-response graphs in MATLAB or Python is strongly valued. Apply at quiethome.io/jobs with resume plus a 1-page sample technical lab summary (PDF).',
      ]),
    ], [
      ['Single · Detail', 'What type of products will the technician mainly measure for noise performance?', ['Kitchen exhaust hoods and modern dishwashers', 'Residential outdoor heat-pump condenser units', 'Recording studio wall insulation panels', 'Open-plan office wireless computer fans'], 0, 'ตอบ Kitchen exhaust hoods and modern dishwashers (ทดสอบความเงียบของเครื่องดูดควันในครัวและเครื่องล้างจาน)'],
      ['Single · Detail', 'Inside what specialized testing room will decibel measurements take place?', ['A semi-anechoic sound isolation chamber', 'An outdoor rooftop equipment testing deck', 'A busy open-plan apartment showroom kitchen', 'A warehouse forklift assembly bay'], 0, 'ตอบ A semi-anechoic sound isolation chamber (ทำในห้องทดสอบไร้เสียงสะท้อนกึ่งสมบูรณ์ semi-anechoic sound chamber)'],
      ['Single · Requirement', 'In addition to a resume, what document should applicants upload at quiethome.io/jobs?', ['A one-page PDF example of a technical laboratory summary', 'Audio recordings testing three home microwave motors', 'University Python course completion tuition invoices', 'Blueprint patents for fan blade baffle molds'], 0, 'ตอบ A one-page PDF example of a technical laboratory summary (ต้องส่งเรซูเม่คู่กับไฟล์ PDF ตัวอย่างสรุปรายงานแล็บเทคนิค 1 หน้า)'],
    ]),

    p7(29, 'm29-s6', [
      doc('notice', 'MetroCycle Bike-Share Newsletter — Hillside E-Assist Launch', null, [
        'Great news for steep Uptown commuters! MetroCycle deployed 120 emerald pedal-assist electric bicycles across our eighteen hillside transit stations Monday morning—no more arriving drenched at morning client pitches!',
        'Membership Pricing Rule: Annual Passholders ($99/yr) ride standard manual bikes free up to 45 minutes per trip, while emerald E-Assist bikes include a free 30-minute window before accruing $0.15 per extra minute cleanly docked back at any station rack.',
      ]),
    ], [
      ['Single · Benefit', 'Why did MetroCycle place its 120 new E-Assist bicycles primarily at hillside stations?', ['To help commuters climb steep streets without getting overly sweaty', 'Because flat downtown waterfront stations lacked electric dock outlets', 'Annual Passholders refused riding emerald manual bicycles uphill', 'Municipal laws restrict electric assist speeds on flat city trails'], 0, 'ตอบ To help commuters climb steep streets without getting overly sweaty (ช่วยให้คนทำงานขึ้นเนินสูงแถว Uptown ได้โดยไม่เปียกเหงื่อก่อนเข้าประชุม)'],
      ['Single · Detail', 'How long may an Annual Passholder ride a new E-Assist bike per trip before per-minute fees start?', ['Thirty minutes', 'Forty-five minutes', 'Fifteen minutes', 'Sixty minutes'], 0, 'ตอบ Thirty minutes (จักรยานไฟฟ้า E-Assist ฟรี 30 นาทีแรกต่อรอบ ถ้าเป็นรุ่นธรรมดาฟรี 45 นาที)'],
      ['Single · Math', 'If an Annual Passholder rides an emerald E-Assist bike for 40 continuous minutes in one trip, how much overage fee accrues?', ['$1.50 (10 extra minutes at $0.15/min)', '$0.75', '$6.00', '$0.00 (covered up to 45 minutes)'], 0, 'ตอบ $1.50 (ปั่น 40 นาที เกินโควตาฟรี 30 นาทีมา 10 นาที -> 10 × $0.15 = $1.50)'],
    ]),

    p7(29, 'm29-s7', [
      doc('article', 'Empty Marble Bank Vault Reborn as Commercial Culinary Incubator', null, [
        'MIDTOWN COMMERCE JOURNAL — [1] Standing idle behind heavy brass doors for nearly a decade after First National Bank consolidated branches, the landmark 1928 granite building on Vine Street now smells of roasting cumin, caramelized onions, and warm brioche loaves.',
        'Nonprofit economic group KitchenBridge outfitted the sunlit main teller hall with six stainless commercial prep islands, walk-in spiral blast chillers, and state-certified hood vents—letting startup jam makers, street-food chefs, and specialty bakers rent licensed kitchen shifts by the hour rather than signing risky five-year commercial leases or dropping $80,000 on ventilation plumbing. [2]',
        '[3] Even the massive walk-in steel deposit vault downstairs found fresh purpose as a climate-controlled cheese-aging and sourdough starter fermentation room. [4] Nearly forty neighborhood food businesses have already bottled retail sauce lines inside KitchenBridge since opening fourteen months ago, twelve of which later leased brick-and-mortar storefronts nearby.',
      ]),
    ], [
      ['Single · Purpose', 'What problem does KitchenBridge help small culinary founders avoid?', ['Paying huge upfront kitchen buildout costs and multi-year storefront leases', 'Navigating state bank licensing rules along Vine Street corridors', 'Shipping baked brioche loaves across coastal county supermarkets', 'Preserving 1928 granite columns during street renovations'], 0, 'ตอบ Paying huge upfront kitchen buildout costs and multi-year storefront leases (เช่าทำอาหารเป็นรายชั่วโมง ไม่ต้องเสี่ยงเซ็นสัญญาเช่า 5 ปีหรือลงทุน $80,000 วางท่อดูดควันเอง)'],
      ['Single · Detail', 'How is the bank’s old basement steel vault currently used?', ['As a temperature-regulated room for aging cheese and proofing dough', 'As dry pallet storage for bottled retail pasta sauce jars', 'As an employee locker area beneath stainless prep islands', 'As an acoustic showroom highlighting historic 1928 marble doors'], 0, 'ตอบ As a temperature-regulated room for aging cheese and proofing dough (ห้องนิรภัยเหล็กใต้ดินถูกดัดแปลงเป็นห้องบ่มชีสและหมักหัวเชื้อขนมปังคุมอุณหภูมิ)'],
      ['Single · Detail', 'How many food entrepreneurs incubated at KitchenBridge eventually opened their own neighborhood shops?', ['Twelve businesses', 'Forty businesses', 'Six businesses', 'Fourteen businesses'], 0, 'ตอบ Twelve businesses (จาก 40 ธุรกิจที่มาเริ่มต้น มี 12 รายที่เติบโตจนไปเช่าเปิดหน้าร้านของตัวเองใกล้ๆ ได้สำเร็จ)'],
      ['Single · Insertion', 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n"Civic investors say transforming vacant architectural landmarks into shared workshops keeps independent brands rooted downtown."', ['[1]', '[2]', '[3]', '[4]'], 0, 'ตอบ [1] (เป็นประโยคเปิดบริบทภาพรวมที่ [1] เกริ่นความสำคัญของการเปลี่ยนอาคารรกร้างให้กลายเป็นศูนย์บ่มเพาะก่อนจะเล่ารายละเอียดตึกธนาคารปี 1928 บนถนน Vine)'],
    ]),

    p7(29, 'm29-s8', [
      doc('memo', 'EMPLOYEE BENEFITS HANDBOOK — FIVE-YEAR PAID SABBATICAL LEAVE',
        [['Milestone', '5 Years Continuous Full-Time Tenure'], ['Leave Grant', '4 Continuous Paid Weeks']],
        [
          '[1] Recognizing steady employee dedication, TimberLine Software grants every full-time team member a one-time four-week Paid Recharge Sabbatical at 100% base salary upon crossing their fifth employment anniversary.',
          '[2] Unlike routine two-day holiday breaks, sabbatical months are strictly designed as uninterrupted unplugging windows—corporate laptop logins, email tokens, and Slack badges suspend cleanly during all 28 days. [3] Unused annual paid vacation days (PTO) may NOT stack directly back-to-back onto a sabbatical trip without written Department VP coverage exception, ensuring operational teams retain backup overlap. Staff must file sabbatical calendars through WorkDay Leave at least 90 days before departure so squad handoffs finish calmly. [4]',
        ]),
    ], [
      ['Single · Eligibility', 'When do full-time TimberLine Software employees unlock a four-week Paid Sabbatical?', ['Upon completing five continuous years of service', 'Ninety days prior to their annual performance review', 'Every year once unused vacation days accumulate to 28 days', 'After receiving a Department VP project handoff award'], 0, 'ตอบ Upon completing five continuous years of service (พนักงานประจำรับสิทธิ์เมื่อทำงานต่อเนื่องครบ 5 ปี)'],
      ['Single · Detail', 'What happens to a staff member’s work email and Slack accounts during sabbatical leave?', ['Digital workplace accounts are temporarily paused for all 28 days', 'Colleagues reply automatically via shared mobile phones', 'Work laptops remain active only for urgent Monday meetings', 'Managers assign two hours weekly checking project handoffs'], 0, 'ตอบ Digital workplace accounts are temporarily paused for all 28 days (ระบบจะระงับสิทธิ์ล็อกอินแล็ปท็อป อีเมล และ Slack ตลอด 28 วัน เพื่อให้พักผ่อนจริงจัง)'],
      ['Single · Rule', 'What restriction applies to combining regular vacation days (PTO) with a sabbatical?', ['Combining consecutive PTO requires exceptional written approval from a Department VP', 'All accrued annual PTO expires permanently once employees reach Year 5', 'Vacation stacking works automatically whenever filed 90 days beforehand', 'Teams forbid any paid leave between June and September'], 0, 'ตอบ Combining consecutive PTO requires exceptional written approval from a Department VP (ห้ามนำวันลาพักร้อนทั่วไปมาต่อท้ายสัปดาห์พักยาว เว้นแต่ได้ลายเซ็นยกเว้นจาก VP)'],
      ['Single · Insertion', 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n"Upon return, employees sit down briefly with People Ops for an informal coffee catch-up to ease back onto sprint boards."', ['[1]', '[2]', '[3]', '[4]'], 3, 'ตอบ [4] (กล่าวถึงขั้นตอนตอนกลับเข้ามาทำงานหลังจบช่วงพักร้อน 4 สัปดาห์ ปิดท้ายบทความที่ [4] ได้พอดี)'],
    ]),

    p7(29, 'm29-s9', [
      doc('chat', 'Retail Merchandising Channel · #store-floor-safety', null, [
        chat([
          ['Leo Carter (Compliance)', '09:10 A.M.', 'Urgent store alert across all branches: manufacturer NorthPot flagged Lot #NP-19 blue ceramic coffee mugs for an unexpected kiln glaze check—temporarily pull ALL Lot #NP-19 mugs off customer shelves until lab test sheets clear!'],
          ['Hannah Bell (Store 4 Lead)', '09:14 A.M.', 'Checking Housewares Aisle 6! Twelve mugs matching Lot #NP-19 (base stamp in black ink) stand on Front Endcap 4 right beside our $9.99 Seasonal Sale sign, plus six more inside Box 2 upstairs.'],
          ['Marco Torres (Inventory)', '09:18 A.M.', 'Hold on—only Lot #NP-19 needs holding? Our matching cream-white bowls on Shelf 2 carry stamp Lot #NP-22.'],
          ['Leo Carter (Compliance)', '09:21 A.M.', 'Correct, Marco—leave cream Lot #NP-22 bowls selling normally! Hannah, pull the paper display signs off Endcap 4 first so guests stop grabbing mugs while carts wheel them into Back Bay Quarantine!'],
          ['Hannah Bell (Store 4 Lead)', '09:25 A.M.', 'Display signs torn down, and all eighteen Lot #NP-19 mugs (12 endcap + 6 upstairs) sit safely sealed inside Back Bay Quarantine Crate Q3!'],
        ]),
      ]),
    ], [
      ['Single · Action', 'What did Leo Carter ask branches to do with Lot #NP-19 blue ceramic mugs?', ['Remove them temporarily from retail shelves pending manufacturer kiln lab checks', 'Discount them immediately to $9.99 on Front Endcap 4', 'Pack and ship them directly back to customer billing addresses', 'Re-stamp black base ink codes cleanly in Housewares Aisle 6'], 0, 'ตอบ Remove them temporarily from retail shelves pending manufacturer kiln lab checks (สั่งเก็บชั่วคราวออกจากชั้นวางจนกว่าผลแล็บเคลือบสีจะผ่าน)'],
      ['Single · Inference', 'Should Store 4 also pull cream-white bowls marked Lot #NP-22 off Shelf 2?', ['No—only mugs stamped Lot #NP-19 fall under the temporary hold', 'Yes—all NorthPot ceramic items must lock inside Back Bay Crate Q3', 'Only upstairs boxes need checking while endcaps sell out', 'Yes—Shelf 2 bowls share matching blue glaze batches'], 0, 'ตอบ No—only mugs stamped Lot #NP-19 fall under the temporary hold (Leo ยืนยันชัดว่าเฉพาะแก้ว Lot #NP-19 ส่วนชาม Lot #NP-22 ขายได้ตามปกติ)'],
      ['Single · Math', 'How many total Lot #NP-19 mugs did Store 4 gather together in Back Bay Quarantine?', ['18 mugs (12 on display plus 6 upstairs)', '12 mugs', '6 mugs', '22 mugs'], 0, 'ตอบ 18 mugs (หน้าร้าน Endcap 4 จำนวน 12 ใบ + คลังชั้นบนอีก 6 ใบ = 18 ใบ)'],
      ['Single · Intention', 'What does Leo mean when he writes, "pull the paper display signs off Endcap 4 first"?', ['Take down promotional signs immediately so shoppers stop picking up held mugs', 'Update $9.99 markdown flyers for cream-white Shelf 2 ceramic bowls', 'Post written safety recall apologies directly above Cashier Lane 4', 'Attach shipping barcode tags onto Endcap 4 metal shelf frames'], 0, 'ตอบ Take down promotional signs immediately so shoppers stop picking up held mugs (ให้รีบปลดป้ายราคาโปรโมชันออกก่อนเลย เพื่อไม่ให้ลูกค้าหยิบแก้วระหว่างกำลังเข็นรถมาเก็บ)'],
      ['Single · Detail', 'Where did Hannah lock all pulled ceramic items at 9:25 A.M.?', ['Inside Back Bay Quarantine Crate Q3', 'Inside Housewares Aisle 6 stockroom bins', 'Underneath the Cashier Front Endcap counter', 'Aboard outbound manufacturer freight trucks'], 0, 'ตอบ Inside Back Bay Quarantine Crate Q3 (เก็บปิดผนึกไว้ในลัง Back Bay Quarantine Crate Q3 เรียบร้อยเวลา 09:25 น.)'],
    ]),

    p7(29, 'm29-d1', [
      doc('ad', 'IronHarbor Athletic Club — Corporate Partner Membership Tiers', null, [
        tbl(
          ['Membership Tier', 'Monthly Fee (12-Mo Term)', 'Lap Pool & Sauna', 'One-Time Keycard Activation'],
          [
            ['Essential Floor Plan', '$58 / month', 'Not Included', '$35 Activation Fee'],
            ['All-Access Aquatics Plan', '$78 / month', 'Unlimited Lap Pool + Sauna', 'Waived Free ($0)'],
          ]
        ),
        'Employer Wellness Stipend Note: Many local firms reimburse $50/month toward monthly club dues upon submitting automated PDF billing statements (activation fees excluded from corporate stipends).',
      ]),
      doc('email', 'Corporate Employee Inquiry E-mail',
        [['To', 'memberships@ironharborclub.com'], ['From', 'David Cho, NorthStar Bank Analyst'], ['Subject', 'Joining Under NorthStar Corporate Wellness Program']],
        [
          'Hello IronHarbor Membership Team,',
          'NorthStar Bank HR reimburses employees up to $50 every month for monthly gym dues (excluding one-time registration or keycard fees). Since I swim laps three mornings weekly before work, I definitely want the All-Access Aquatics Plan on a 12-month term.',
          'Please confirm both my gross upfront due at sign-up for Month 1 and my exact NET out-of-pocket monthly cost after NorthStar deposits my $50 wellness reimbursement!',
        ]),
    ], [
      ['Double · Synthesis', 'Which IronHarbor tier fits David Cho’s swimming routine?', ['All-Access Aquatics Plan ($78/month)', 'Essential Floor Plan ($58/month)', 'Both plans include morning lap swimming before work', 'A custom $50 corporate bank tier'], 0, 'ตอบ All-Access Aquatics Plan (David ว่ายน้ำสัปดาห์ละ 3 วัน แผน Essential ไม่รวมสระว่ายน้ำ จึงต้องเลือก All-Access Aquatics)'],
      ['Double · Math', 'How much is David’s ONE-TIME Keycard Activation Fee under the All-Access Aquatics Plan?', ['$0 (waived free)', '$35', '$50', '$20'], 0, 'ตอบ $0 (ตารางระบุแผน All-Access ยกเว้นค่าเปิดบัตร Keycard ฟรี $0)'],
      ['Double · Math', 'What will David pay NET out of his own pocket each month AFTER receiving NorthStar’s $50 wellness stipend?', ['$28 per month ($78 minus $50)', '$8 per month', '$78 per month', '$63 per month'], 0, 'ตอบ $28 per month (ค่าสมาชิกรายเดือน $78 หักเงินสนับสนุนจากธนาคาร $50 = จ่ายส่วนต่างเองเดือนละ $28)'],
      ['Double · Detail', 'Why did NorthStar HR NOT need to cover any activation fee on David’s plan even though stipends exclude activation charges?', ['All-Access Aquatics waives the $35 keycard fee altogether', 'NorthStar Bank negotiated private $35 fee exemptions for analysts', 'Employees joining for 12 months earn double $50 credits in Month 1', 'Keycard fees apply only to evening sauna swimmers'], 0, 'ตอบ All-Access Aquatics waives the $35 keycard fee altogether (ถึงสวัสดิการบริษัทไม่รวมค่าแรกเข้า แต่แพ็กเกจ All-Access เองก็ฟรีค่าเปิดบัตรให้อยู่แล้ว)'],
      ['Double · Inference', 'Which statement about the $58 Essential Floor Plan is accurate?', ['Members on that tier pay a $35 activation fee and cannot use the lap pool', 'Monthly dues leave zero net cost after a $50 corporate stipend', 'Essential members get free sauna access on weekday mornings', 'Activation charges are reimbursed monthly via PDF statements'], 0, 'ตอบ Members on that tier pay a $35 activation fee and cannot use the lap pool (ตารางระบุชัดว่า Essential ไม่มีสระ/ซาวน่า และมีค่าเปิดบัตร $35)'],
    ]),

    p7(29, 'm29-d2', [
      doc('invoice', 'CleanSweep Commercial Floor Care — Service Estimate #EST-990',
        [['Client', 'Horizon Logistics Headquarters'], ['Floors Scheduled', 'Saturday Night Steam Extraction (6:00 P.M.–Midnight)']],
        [
          tbl(
            ['Suite Zone', 'Carpet Area', 'Rate ($0.40 / sq m)', 'Zone Subtotal'],
            [
              ['Floor 1 Reception & Hallways', '400 sq m', '$0.40 / sq m', '$160.00'],
              ['Floor 2 Open Analyst Bay', '550 sq m', '$0.40 / sq m', '$220.00'],
              ['Floor 2 Server Vault Room', '100 sq m', '$0.40 / sq m', '$40.00'],
              ['Saturday Evening Shift Fee', 'Flat After-Hours Dispatch', 'Standard Fee', '$85.00'],
            ]
          ),
          'Original Total Estimate: $505.00. Warning: Hot steam water extraction is NEVER approved atop anti-static raised computer server floor tiles.',
        ]),
      doc('email', 'Estimate Adjustment E-mail',
        [['To', 'quotes@cleansweepcare.com'], ['From', 'Maria Diaz, Horizon Facility Manager'], ['Date', 'Wednesday, August 13'], ['Subject', 'Updating Estimate #EST-990 Prior to Saturday']],
        [
          'Hi CleanSweep Dispatch,',
          'Before signing off Estimate #EST-990 for Saturday night’s carpet crew, please cross out the 100 sq m Floor 2 Server Vault Room immediately—it uses specialized anti-static raised tiles that IT sweeps dry only, zero hot steam!',
          'Please keep both Floor 1 and the Open Analyst Bay on Floor 2 as quoted, retain Saturday evening scheduling, and email back our revised final quote before Thursday noon.',
        ]),
    ], [
      ['Double · Detail', 'Why does Maria instruct CleanSweep to skip the Floor 2 Server Vault Room?', ['Its raised anti-static server tiles must never be exposed to hot steam', 'IT technicians will still be patching network racks past midnight Saturday', 'CleanSweep miscounted Floor 2 Server room measurements as 400 sq m', 'Horizon security denies weekend badge access inside basement server vaults'], 0, 'ตอบ Its raised anti-static server tiles must never be exposed to hot steam (พื้นยกแบบป้องกันไฟฟ้าสถิตในห้อง Server ห้ามใช้น้ำ/ไอน้ำร้อนล้าง ให้ IT ปัดแห้งเท่านั้น)'],
      ['Double · Math', 'After removing the Floor 2 Server Vault Room ($40.00), how many square meters remain scheduled for steam cleaning?', ['950 square meters', '1,050 square meters', '550 square meters', '400 square meters'], 0, 'ตอบ 950 square meters (Floor 1 จำนวน 400 ตร.ม. + Open Analyst Bay ชั้น 2 อีก 550 ตร.ม. = 950 ตร.ม.)'],
      ['Double · Math', 'Calculate the REVISED total estimate Horizon will pay INCLUDING Saturday’s flat after-hours fee:', ['$465.00', '$505.00', '$380.00', '$425.00'], 0, 'ตอบ $465.00 ($505.00 เดิม ลบค่าห้อง Server $40.00 = $465.00 — ค่ากะกลางคืนวันเสาร์ $85 ยังอยู่เหมือนเดิม)'],
      ['Double · Detail', 'On which day and hours will CleanSweep perform the cleaning?', ['Saturday from 6:00 P.M. to Midnight', 'Wednesday before Thursday noon', 'Thursday morning during business hours', 'Sunday afternoon following IT sweeps'], 0, 'ตอบ Saturday from 6:00 P.M. to Midnight (ตารางระบุ Saturday Night 18:00–24:00 น.)'],
      ['Double · Detail', 'By when does Maria request the updated written quote?', ['Before noon on Thursday', 'Before Saturday at 6:00 P.M.', 'By Wednesday afternoon', 'Immediately after IT audits Floor 2'], 0, 'ตอบ Before noon on Thursday (Maria ขอใบเสนอราคาฉบับแก้ไขกลับมาก่อนเที่ยงวันพฤหัสฯ)'],
    ]),

    p7(29, 'm29-t1', [
      doc('notice', 'ClayWorks Civic Center — Studio Electric Kiln Firing Fee Table', null, [
        tbl(
          ['Firing Option', 'Temperature / Cycle', 'Shared Shelf Fee (Per Item)', 'Full Private Kiln Load Fee'],
          [
            ['Low-Fire Bisque Load', 'Cone 06 (1,000°C)', '$8 / Medium Bowl', '$75 (Entire Chamber)'],
            ['High-Fire Glaze Load', 'Cone 6 (1,220°C)', '$12 / Medium Bowl', '$110 (Entire Chamber)'],
          ]
        ),
        'Member Perk: Studio Pass holders with 10+ clay pieces save significantly booking a Full Private Kiln Load rather than paying per-piece shelf rates.',
      ]),
      doc('memo', 'STUDIO OPERATIONS BULLETIN — KILN #2 THERMOCOUPLE SERVICE',
        [['Posted', 'Monday, March 17'], ['Affected Schedule', 'Thursday March 20 Bisque Firing']],
        [
          'Technicians are replacing a drifting digital temperature probe in Electric Kiln #2 this Thursday morning; therefore, Thursday’s scheduled Low-Fire Bisque firing is postponed to Sunday, March 23 at 8:00 A.M.',
          'Any potter booked on Thursday’s Private Kiln Load automatically carries over cleanly to Sunday at $0 rescheduling cost, OR may convert fees directly into High-Fire Glaze credits.',
        ]),
      doc('email', 'Studio Member Inquiry E-mail',
        [['To', 'kilnroom@clayworkscenter.org'], ['From', 'Nolan Reyes, Studio Pass Holder'], ['Date', 'Monday, March 17 · 4:40 P.M.'], ['Subject', 'Thursday Bisque Load -> Sunday Transfer']],
        [
          'Hi Kiln Room Coordinators,',
          'I had reserved a Full Private Low-Fire Bisque load ($75) this Thursday March 20 for fourteen hand-thrown ramen bowls ahead of next weekend’s craft booth!',
          'Confirming I want to carry my reservation straight into Sunday morning’s March 23 makeup Bisque run—keeping that private rate rather than paying fourteen individual Cone 06 shelf tickets—and thank you for keeping temperature calibration tight before unloading!',
        ]),
    ], [
      ['Triple · Synthesis', 'Why was Nolan’s Thursday, March 20 Low-Fire Bisque kiln firing moved to Sunday?', ['Kiln #2 needed a replacement digital temperature sensor on Thursday', 'Fourteen ramen bowls cracked during Cone 6 high-temperature tests', 'Craft booth weekend dates pushed back across late March', 'Electric circuit capacity prohibited running shared and private loads together'], 0, 'ตอบ Kiln #2 needed a replacement digital temperature sensor on Thursday (ประกาศแจ้งเปลี่ยนหัววัดอุณหภูมิ thermocouple ในเตาเผา #2 เช้าวันพฤหัสฯ)'],
      ['Triple · Math', 'How much total money does Nolan save on his 14 medium bowls by booking a Full Private Bisque Load ($75) instead of paying individual Cone 06 shelf rates ($8/piece)?', ['$37 saved ($75 vs $112 individual)', '$93 saved ($75 vs $168 glaze)', '$12 saved', '$35 saved'], 0, 'ตอบ $37 saved (คิดรายชิ้น 14 × $8 = $112 แต่เหมาทั้งเตา Bisque จ่ายแค่ $75 -> ประหยัด $37)'],
      ['Triple · Detail', 'When will Nolan’s transferred Bisque cycle start firing?', ['Sunday, March 23 at 8:00 A.M.', 'Thursday, March 20 afternoon', 'Monday, March 17 at 4:40 P.M.', 'The following Monday morning'], 0, 'ตอบ Sunday, March 23 at 8:00 A.M. (ย้ายรอบ Low-Fire Bisque ไปวันอาทิตย์ที่ 23 มี.ค. เวลา 08:00 น.)'],
      ['Triple · Inference', 'Which statement accurately describes Nolan’s $75 booking fee on Sunday?', ['He pays no additional rescheduling fee when carrying over from Thursday', 'He must convert $75 into High-Fire Cone 6 credits before Sunday', 'Studio Pass members receive a second private firing free', 'He must pay $110 instead because Sunday uses Cone 6 glazing'], 0, 'ตอบ He pays no additional rescheduling fee when carrying over from Thursday (ประกาศระบุให้โอนไปวันอาทิตย์โดยไม่มีค่าธรรมเนียมเลื่อนนัด ($0))'],
      ['Triple · Detail', 'What firing temperature corresponds to High-Fire Cone 6 glaze cycles?', ['1,220°C', '1,000°C', '800°C', '110°C'], 0, 'ตอบ 1,220°C (ตารางระบุ High-Fire Glaze Load ที่ Cone 6 อุณหภูมิ 1,220°C)'],
    ]),

    p7(29, 'm29-t2', [
      doc('notice', 'SkyCrop Precision Drone Services — Orchard Spraying Price Tiers', null, [
        tbl(
          ['Acreage Tier', 'Standard Price / Acre', 'Multi-Pass Contract (2+ Flights/Season)', 'Minimum Setup Mobilization'],
          [
            ['Small Block (10–49 Acres)', '$28 / acre', '$24 / acre', '$150 truck fee (< 30 acres)'],
            ['Estate Block (50+ Acres)', '$22 / acre', '$19 / acre', 'Free Mobilization ($0)'],
          ]
        ),
        'Weather Drift Clause: FAA-certified precision sprayers never operate when local orchard gusts exceed 12 km/h; weather postponements rebook automatically at zero penalty.',
      ]),
      doc('form', 'ORCHARD COMPLIANCE BOUNDARY FORM — GreenValley Apple Growers',
        [['Block Size', '60 Mature Apple Acres (East Ridge)'], ['Contract Choice', 'Spring Blossom + Mid-Summer 2-Flight Multi-Pass']],
        [
          'Required Notice: Neighboring organic apiary hives sit 180 meters west of East Ridge fence—no flight permitted if westward gusts surpass 12 km/h.',
        ]),
      doc('email', 'Farm Manager Scheduling E-mail',
        [['To', 'dispatch@skycropdrones.com'], ['From', 'Ben Patel, GreenValley Apple Growers'], ['Date', 'Tuesday, April 22'], ['Subject', 'Mid-Summer Flight 2 Weather Window & Invoice Check']],
        [
          'Hi SkyCrop Flight Dispatch,',
          'Our Spring Blossom flight cleared cleanly last month, and tomorrow morning Wednesday looks calm around 6 km/h wind for our 60-acre Mid-Summer Spray Flight #2!',
          'Could you double-check tomorrow’s forecast near East Ridge so hives west of our orchard stay safely undisturbed, AND verify our Flight #2 invoice reads strictly $1,140 with zero truck mobilization fee added?',
        ]),
    ], [
      ['Triple · Synthesis', 'Why is tomorrow Wednesday safe for flying near neighboring organic honeybee hives?', ['Forecast wind speeds (~6 km/h) sit well below the 12 km/h safety limit', 'Mid-Summer spray mixes use plain irrigation water harmless to bees', 'Neighboring organic hives relocated 180 meters indoors until May', 'Estate blocks over 50 acres exempt neighboring apiculture distances'], 0, 'ตอบ Forecast wind speeds (~6 km/h) sit well below the 12 km/h safety limit (พยากรณ์ลมแค่ 6 กม./ชม. ต่ำกว่าเกณฑ์ปลอดภัย 12 กม./ชม. ป้องกันละอองปลิวไปโดนรังผึ้งด้านตะวันตก)'],
      ['Triple · Math', 'Verify Ben Patel’s Flight #2 invoice calculation ($1,140) for GreenValley’s 60 acres under Multi-Pass Estate terms:', ['Correct—60 acres × $19/acre multi-pass Estate rate equals $1,140 with $0 mobilization', 'Incorrect—60 acres should bill $22/acre ($1,320 total)', 'Incorrect—a $150 truck mobilization fee still applies under 100 acres', 'Incorrect—2-flight contracts halve to $9.50/acre'], 0, 'ตอบ Correct—60 acres × $19/acre multi-pass Estate rate equals $1,140 with $0 mobilization (60 เอเคอร์เข้าเกณฑ์ Estate 50+ เอเคอร์ คิดเรตสัญญา 2 รอบ $19 × 60 = $1,140 และฟรีค่าเคลื่อนย้ายรถ)'],
      ['Triple · Detail', 'Why does GreenValley NOT pay a $150 truck mobilization fee?', ['The $150 fee applies only to Small Blocks under 30 acres', 'Apple growers pay annual orchard association exemptions', 'Spring contracts roll setup fees exclusively onto Flight #1', 'Multi-Pass users tow drone generators inside farm tractors'], 0, 'ตอบ The $150 fee applies only to Small Blocks under 30 acres (ตารางระบุค่าเคลื่อนย้าย $150 เฉพาะแปลงเล็ก < 30 เอเคอร์ ส่วน Estate 50+ เอเคอร์ฟรี $0)'],
      ['Triple · Detail', 'What happens financially if winds unexpectedly pick up to 18 km/h and delay spraying?', ['The flight reschedules automatically without postponement charges', 'Farms forfeit the $150 mobilization balance permanently', 'Pilots bill standard $28/acre hourly standby wait fees', 'Multi-Pass pricing reverts back to single-flight rates'], 0, 'ตอบ The flight reschedules automatically without postponement charges (เงื่อนไขระบุให้เลื่อนวันบินใหม่อัตโนมัติโดยไม่มีค่าปรับ)'],
      ['Triple · Inference', 'In which compass direction from East Ridge Orchard are the bee hives located?', ['West', 'East', 'North', 'South'], 0, 'ตอบ West (แบบฟอร์มระบุว่าอยู่ 180 meters west of East Ridge fence)'],
    ]),

    p7(29, 'm29-t3', [
      doc('notice', 'ArchivalScan Digitization Lab — Reel Microfilm Conversion Quote',
        [['Client', 'Lakeside Historical Society'], ['Quotation #', 'AS-7710']],
        [
          tbl(
            ['Service Item', 'Quantity / Unit', 'Unit Rate', 'Quoted Total'],
            [
              ['35mm Silver Microfilm High-Res OCR Scan', '40 Reels', '$85.00 / reel', '$3,400.00'],
              ['Searchable PDF/A Cloud Delivery Drive', '1 Encrypted SSD', '$120.00 Flat', '$120.00'],
              ['Armored Insured Courier Shipping Insurance', 'Outbound + Return Transit', '$180.00 Flat', '$180.00'],
            ]
          ),
          'Grand Laboratory Quote Total: $3,700.00.',
        ]),
      doc('memo', 'HERITAGE PRESERVATION MATCHING GRANT GUIDELINES — ROUND 4',
        [['Grantor', 'State Cultural Archives Commission'], ['Max Grant Share', 'Up to 50% of Qualifying Digitization & Storage Costs']],
        [
          'Approved county historical societies receive dollar-for-dollar matching reimbursements equal to 50% of qualifying technical scanning lab bills AND archival delivery media hardware (SSDs/LTO tapes).',
          'Grant Exclusion Rule: Transit freight postage, padded crate rentals, and shipping insurance premiums MUST be absorbed 100% by the applying local society.',
        ]),
      doc('email', 'Head Archivist Budget E-mail',
        [['To', 'board-treasurer@lakesidehistory.org'], ['From', 'Miriam Cho, Head Archivist'], ['Subject', 'Grant Match Breakdown for Quotation #AS-7710 ($3,700)']],
        [
          'Hi Treasurer Sam,',
          'Great news—our State Heritage Grant Round 4 committee approved our Lakeside 1900–1945 shipping ledger microfilm project this morning!',
          'Please remember that shipping crate insurance ($180) is excluded from state matching funds, so calculate our exact 50% State Grant reimbursement strictly off scanning + SSD drive ($3,520) and tell me how much total net cash Lakeside Historical Society still needs from our local operating reserve to settle ArchivalScan’s full $3,700 invoice!',
        ]),
    ], [
      ['Triple · Synthesis', 'Which cost line item in Quotation #AS-7710 is EXCLUDED from the State Cultural Archives matching grant?', ['The $180.00 insured courier shipping coverage', 'The 40-reel 35mm microfilm OCR scans ($3,400)', 'The encrypted searchable PDF/A solid-state drive ($120)', 'Software OCR indexing labor bundled inside reel rates'], 0, 'ตอบ The $180.00 insured courier shipping coverage (ระเบียบทุนระบุชัดว่าค่าขนส่ง ค่าเช่าลัง และประกันขนส่งไม่รวมอยู่ในยอดสมทบทุน)'],
      ['Triple · Math', 'How much total matching reimbursement will the State Heritage Grant award toward the $3,520 qualifying portion?', ['$1,760.00 (50% of $3,520)', '$1,850.00 (50% of $3,700)', '$1,700.00 (50% of $3,400 only)', '$3,520.00 (100% covered)'], 0, 'ตอบ $1,760.00 (สมทบ 50% ของส่วนที่เข้าเกณฑ์ $3,400 + $120 = $3,520 -> ได้เงินอุดหนุน $1,760.00)'],
      ['Triple · Math', 'After factoring in the $1,760.00 state grant, how much NET local reserve cash must Lakeside Historical Society provide altogether to cover ArchivalScan’s full $3,700.00 bill?', ['$1,940.00 ($1,760 matching share + $180 ungranted insurance)', '$1,850.00', '$1,760.00', '$3,520.00'], 0, 'ตอบ $1,940.00 ($3,700 ยอดบิลเต็ม ลบเงินอุดหนุนจากรัฐ $1,760 = สมาคมจ่ายสุทธิ $1,940.00 — คือครึ่งหนึ่งที่เข้าเกณฑ์ $1,760 + ค่าประกันขนส่งที่ต้องจ่ายเองเต็ม $180)'],
      ['Triple · Detail', 'In what digital file format will ArchivalScan deliver searchable ledger files on the encrypted SSD?', ['Searchable PDF/A format', 'Uncompressed TIFF photographs only', 'Spreadsheet CSV ledgers', 'Editable word-processing files'], 0, 'ตอบ Searchable PDF/A format (ตารางระบุ Searchable PDF/A Cloud Delivery Drive)'],
      ['Triple · Detail', 'Which historic time span do the Lakeside shipping ledger microfilms cover?', ['1900 through 1945', '1842 through 1889', 'Round 4 through 1990', '1928 through 1935'], 0, 'ตอบ 1900 through 1945 (Miriam ระบุในอีเมลว่าคือโครงการ Lakeside 1900–1945 shipping ledger microfilm)'],
    ]),

    // ==================== SET 30 ====================
    p7(30, 'm30-s1', [
      doc('chat', 'Text Message Chain · Metro Botanical Conservatory', null, [
        chat([
          ['Kenji Ito', '05:18 P.M.', 'Priya, portable lectern mic Channel 3 inside Palm Dome keeps picking up static clicks from security walkie-talkies outside the East glass doors!'],
          ['Priya Nair', '05:21 P.M.', 'Switch the wireless receiver beneath the fern planter straight onto Backup Bank B Channel 9—no guard radios operate on Band B. Also tape down both XLR mic cords along the slate stone seam before VIP donors walk in at 5:45 P.M.'],
          ['Kenji Ito', '05:25 P.M.', 'Switched onto Channel 9—audio sounds crisp now! Cords taped safely beside the center aisle; doors ready to open cleanly at 5:45 P.M.'],
        ]),
      ]),
    ], [
      ['Single · Problem', 'What issue disrupted sound checks inside Palm Dome at 5:18 P.M.?', ['Wireless security radio signals interfered with lectern microphone Channel 3', 'A wet fern planter shorted out portable wireless power supplies', 'Donor arrival times moved ahead from 5:45 P.M. to 5:25 P.M.', 'Loose stone walkway seams disconnected audio cables'], 0, 'ตอบ Wireless security radio signals interfered with lectern microphone Channel 3 (ช่องสัญญาณไมค์ 3 ถูกรบกวนจากวิทยุสื่อสารของเจ้าหน้าที่รักษาความปลอดภัย)'],
      ['Single · Detail', 'At what time will VIP donors begin entering Palm Dome?', ['At 5:45 P.M.', 'At 5:18 P.M.', 'At 5:21 P.M.', 'At 5:25 P.M.'], 0, 'ตอบ At 5:45 P.M. (ระบุชัดว่า VIP donors walk in at 5:45 P.M.)'],
    ]),

    p7(30, 'm30-s2', [
      doc('memo', 'BUILDING WATER SYSTEM NOTICE — SOUTH ANNEX',
        [['Date', 'Tuesday Afternoon'], ['Outage Window', 'Wednesday · 9:00 A.M.–1:00 P.M.']],
        [
          'Facility plumbers will flush sediment valves on the rooftop rainwater reclamation cistern Wednesday between 9:00 A.M. and 1:00 P.M., temporarily shutting water pressure to South Annex non-potable restroom fixtures.',
          'South Annex kitchen breakroom drinking sinks and main-wing municipal tap lines run on separate filtered city water mains and remain fully active throughout morning maintenance.',
        ]),
    ], [
      ['Single · Detail', 'Which plumbing fixtures inside South Annex will lose water Wednesday morning?', ['Restroom flush lines connected to the rainwater cistern', 'Second-floor kitchen cold drinking faucets', 'Main-wing breakroom coffee brewers and dish sinks', 'Outdoor municipal sidewalk fire hydrants'], 0, 'ตอบ Restroom flush lines connected to the rainwater cistern (ท่อชักโครกห้องน้ำที่ใช้น้ำฝนรีไซเคิลจะปิดชั่วคราว 09:00–13:00 น.)'],
      ['Single · Inference', 'What is true about South Annex kitchen sinks between 9:00 A.M. and 1:00 P.M. Wednesday?', ['Employees may continue using tap drinking water normally there', 'Staff must boil kitchen faucet water during valve flushing', 'Breakroom dish sinks switch temporarily onto recycled cisterns', 'Kitchen plumbing drains remain locked until afternoon inspections'], 0, 'ตอบ Employees may continue using tap drinking water normally there (อ่างน้ำดื่มในครัวแยกใช้ท่อน้ำประปาเมืองตามปกติ จึงใช้งานได้เต็มที่ตลอดช่วงซ่อม)'],
    ]),

    p7(30, 'm30-s3', [
      doc('review', 'ClearSound Studio Gear — Customer Review & Seller Reply', null, [
        '★ ★ ★ ★ ★ — Reviewed by Paula Ramos (36-Pack Hex Acoustic Wall Tiles)',
        'Installed 36 charcoal acoustic felt tiles across my home podcast studio walls Monday evening! The studio echo dropped sharply, and heavy recycled wool fibers look super sharp on camera. When outer parcel delivery corners arrived slightly squished Friday morning—cracking just one hex corner tile—I snapped a phone photo and received a six-tile bonus box overnighted free PLUS spare adhesive mounting tabs!',
        'Merchant Reply (Dan Ortiz, Support Lead): Podcast recordings sound way crisper without bare drywall flutter, Paula! Leave 2 mm thin airflow seams between tiles if you ever shift them later without peeling wall paint.',
      ]),
    ], [
      ['Single · Detail', 'Why did ClearSound overnight a free six-tile replacement box to Paula?', ['Parcel shipping squished the outer box and damaged one tile edge', 'Acoustic felt fibers failed to lower podcast studio echo initially', 'Adhesive wall strips omitted mounting backing cards on Friday', 'Charcoal dye shades differed slightly across two production batches'], 0, 'ตอบ Parcel shipping squished the outer box and damaged one tile edge (มุมกล่องขนส่งถูกกระแทกจนแผ่นหนึ่งแตก พนักงานจึงส่งกล่องใหม่ 6 แผ่นมาให้ฟรีในคืนเดียว)'],
      ['Single · Detail', 'Where did Paula install the charcoal acoustic tiles?', ['In her home podcast recording space', 'In a commercial office conference lobby', 'Along outdoor hallway drywall corridors', 'Inside ClearSound Studio Gear’s demo booth'], 0, 'ตอบ In her home podcast recording space (ติดบนผนังห้องอัดพอดแคสต์ที่บ้านเพื่อลดเสียงก้อง)'],
      ['Single · Advice', 'Why does Dan Ortiz suggest leaving a 2 mm gap between mounted tiles?', ['To make future rearrangement easier without damaging painted drywall', 'To double sound-absorption rates across bare plaster ceilings', 'To fit adhesive mounting strips underneath thick wool edges', 'To ventilate wireless studio camera equipment behind tiles'], 0, 'ตอบ To make future rearrangement easier without damaging painted drywall (ช่วยให้เวลาย้ายตำแหน่งแผ่นในอนาคตไม่ต้องดึงสีผนังหลุดลอก)'],
    ]),

    p7(30, 'm30-s4', [
      doc('memo', 'FINANCE & EXPENSE POLICY — HOSTED CLIENT MEALS',
        [['Update Date', 'October 1'], ['Applies To', 'All Business Development & Account Staff']],
        [
          'When dining with external clients at commercial trade shows or site visits, employees may expense up to $45 per attendee (tax and gratuity included; alcoholic beverages strictly excluded from corporate cards).',
          'Claimants must upload the full ITEMIZED restaurant receipt displaying every dish and beverage line via ExpenseHub within 10 business days; brief credit card customer-copy totals showing only lump-sum tips without food breakdowns will automatically be declined.',
        ]),
    ], [
      ['Single · Rule', 'What maximum meal expense per person does company policy allow (including tax and tip)?', ['Forty-five dollars', 'Ten dollars', 'Sixty dollars', 'Fifteen percent only'], 0, 'ตอบ Forty-five dollars (กำหนดเพดานไม่เกิน $45 ต่อคน รวมภาษีและทิปแล้ว)'],
      ['Single · Exclusion', 'Which expense item will ExpenseHub decline when auditing client dinner bills?', ['Alcoholic drinks ordered alongside client entrees', 'Gratuity tips added below itemized food subtotals', 'Regional restaurant sales taxes included under $45/person', 'Client lunch meals hosted during trade conventions'], 0, 'ตอบ Alcoholic drinks ordered alongside client entrees (นโยบายห้ามเบิกเครื่องดื่มแอลกอฮอล์โดยเด็ดขาด)'],
      ['Single · Detail', 'Why might ExpenseHub reject a short credit card summary slip?', ['It omits itemized food and drink line details required for verification', 'Card slips rarely print restaurant tax identification codes', 'Lump-sum credit card slips must be emailed prior to October 1', 'Account managers must pay restaurant gratuities in personal cash'], 0, 'ตอบ It omits itemized food and drink line details required for verification (ต้องแนบใบเสร็จแบบแจงรายการอาหาร/เครื่องดื่มทุกบรรทัด สลิปยอดรวมสั้นๆ จะถูกปฏิเสธ)'],
    ]),

    p7(30, 'm30-s5', [
      doc('ad', 'CAREER OPPORTUNITY · AeroCabin Technical Publishing', null, [
        'Open Role: Technical Illustrator — Commercial Aviation Seating Manuals (Wichita Office)',
        'AeroCabin engineers lightweight passenger seats and galley carts installed across regional jets. Our Technical Publications group is hiring a detail-focused Illustrator to convert 3D engineering assemblies into crystal-clear black-and-white isometric exploded parts diagrams for airline maintenance crews.',
        'Ideal Profile: Associate or bachelor’s degree in Technical Illustration or Mechanical Drafting; strong command of Adobe Illustrator plus hands-on experience opening STEP/IGES CAD models in common desktop viewers. Email resume and a 4-page PDF technical vector sample portfolio to talent@aerocabin-tech.com.',
      ]),
    ], [
      ['Single · Detail', 'Who primarily uses the exploded cutaway diagrams created in this position?', ['Commercial airline mechanics maintaining cabin seats and carts', 'Interior textile buyers selecting passenger leather swatches', 'Jet fuel logistics planners tracking regional airport routes', 'Software developers writing 3D aviation training simulators'], 0, 'ตอบ Commercial airline mechanics maintaining cabin seats and carts (ทำภาพประกอบแยกชิ้นส่วนสำหรับช่างซ่อมบำรุงสายการบิน)'],
      ['Single · Requirement', 'Which software pairing is highlighted as important for candidates?', ['Adobe Illustrator alongside 3D CAD viewer tools', 'Spreadsheets paired with accounting payroll utilities', 'Video post-production editing suites and audio mixers', 'HTML web layout frameworks and database queries'], 0, 'ตอบ Adobe Illustrator alongside 3D CAD viewer tools (ต้องคล่องทั้ง Adobe Illustrator และการเปิดโมเดล CAD แบบ STEP/IGES)'],
      ['Single · Detail', 'What visual attachment must accompany a candidate’s resume?', ['A four-page PDF portfolio showing technical vector illustrations', 'Photographs taken inside Wichita regional jet passenger cabins', 'Signed engineering security clearances from previous airlines', 'Printed parts catalogs shipped via postal carrier'], 0, 'ตอบ A four-page PDF portfolio showing technical vector illustrations (ส่งเรซูเม่พร้อมพอร์ตฟอลิโอ PDF ภาพเวกเตอร์เทคนิค 4 หน้า)'],
    ]),

    p7(30, 'm30-s6', [
      doc('notice', 'SAFETY SERVICE BULLETIN — HarborBreeze Patio Heater (Model HB-12)', null, [
        'HarborBreeze Outdoor Goods is offering a free protective silicone sleeve kit for pilot-igniter leads on Model HB-12 propane patio heaters produced from October through December 2024 (serial prefix `HB24-10`, `HB24-11`, or `HB24-12` etched beneath control knobs).',
        'Vibration during outdoor wheel rolling can nick thin yellow ignition wire jackets over time, causing weak spark starts. Enter your serial code at harborbreeze.com/hb12 to have a snap-on rubber shield delivered free by mail within four business days—no store receipt or technician appointment required.',
      ]),
    ], [
      ['Single · Detail', 'How can an owner identify whether their Model HB-12 heater qualifies for the free sleeve kit?', ['Check whether the serial number etched under control knobs begins with HB24-10, -11, or -12', 'Inspect propane tanks for yellow manufacturing stamps from October', 'Measure rubber patio wheels for structural wheel vibration cracks', 'Present original store payment receipts to hardware dealers'], 0, 'ตอบ Check whether the serial number etched under control knobs begins with HB24-10, -11, or -12 (ดูเลขซีเรียลที่สลักใต้ปุ่มหมุนควบคุม)'],
      ['Single · Cause', 'What leads to weak spark ignition on affected HB-12 units?', ['Rolling patio heaters outdoors can rub thin yellow wire insulation raw', 'Propane valves clog inside sealed control knob assemblies', 'Rain showers enter serial number stamp plates during autumn winds', 'Battery igniter covers detach automatically after four days'], 0, 'ตอบ Rolling patio heaters outdoors can rub thin yellow wire insulation raw (แรงสั่นสะเทือนตอนเข็นฮีตเตอร์ไปมาอาจเสียดสีฉนวนสายจุดระเบิดสีเหลืองให้ถลอก)'],
      ['Single · Detail', 'How quickly will HarborBreeze mail the free protective rubber shield once requested online?', ['Within four business days', 'Within twelve weeks', 'During annual store safety clinics', 'Only after a technician inspects the wire'], 0, 'ตอบ Within four business days (ส่งไปรษณีย์ให้ฟรีถึงบ้านภายใน 4 วันทำการ ไม่ต้องมีใบเสร็จหรือเรียกช่าง)'],
    ]),

    p7(30, 'm30-s7', [
      doc('article', 'Foldable Plastic Crates Slash Waxed-Cardboard Grocery Waste by 64%', null, [
        'RETAIL SUPPLY WEEKLY — Every morning before sunrise, neighborhood grocery produce departments rip open hundreds of single-use waxed corrugated lettuce and broccoli cartons—heavily coated in paraffin wax so recyclers reject them straight to municipal landfills.',
        '[1] Starting six months ago, regional co-op MeadowMart partnered with 28 county vegetable farms to substitute sturdy collapsible blue HDPE produce crates across leafy-green morning shipments. [2] Each perforated blue crate carries an RFID gate sticker scanned automatically at cold receiving doors, tracks sanitation wash cycles cleanly at central hub plants, and folds flat like a book to fill tiny return-truck stacks.',
        '[3] Since adopting pooled crates, MeadowMart cut weekly back-dock landfill compactor hauls by 64% while keeping bruised heirloom tomato rejects under 1.5%. Farmers also report zero damp box collapses inside misty spray coolers compared with soggy fiberboard cartons. [4]',
      ]),
    ], [
      ['Single · Problem', 'Why could recycling plants NOT accept MeadowMart’s older disposable produce cartons?', ['Water-resistant paraffin wax coatings made standard paper recycling impossible', 'Farmers left damp RFID stickers glued onto muddy cardboard flaps', 'Leafy vegetable bruising soaked structural box dividers in transit', 'Grocery stores crushed corrugated crates too compactly at back doors'], 0, 'ตอบ Water-resistant paraffin wax coatings made standard paper recycling impossible (กล่องกระดาษเดิมเคลือบไขพาราฟินกันน้ำ ทำให้โรงรีไซเคิลไม่รับ ต้องทิ้งลงหลุมฝังกลบ)'],
      ['Single · Benefit', 'Why do empty HDPE blue crates take up little room on return trucks to farms?', ['Hinged crate walls fold completely flat after grocery unloading', 'Central wash plants shred used blue boxes for plastic pellets weekly', 'Twenty-eight county farmers reuse them exclusively inside cold rooms', 'Automated receiving scanners sort crates according to store size'], 0, 'ตอบ Hinged crate walls fold completely flat after grocery unloading (ลังพลาสติก HDPE พับแบนเหมือนหนังสือได้ จึงซ้อนกลับรถได้ประหยัดพื้นที่มาก)'],
      ['Single · Benefit', 'Besides cutting landfill hauls by 64%, what operational bonus did farms and stores notice?', ['Zero soggy box cave-ins inside humid coolers and < 1.5% bruised tomato loss', 'Produce washing water usage halved across 28 county partner farms', 'Early morning grocery receiving shifts ended two hours earlier daily', 'Truck fuel expenses climbed only slightly despite heavier crate weights'], 0, 'ตอบ Zero soggy box cave-ins inside humid coolers and < 1.5% bruised tomato loss (ลังไม่ยุบตัวในห้องเย็นชื้นๆ และมะเขือเทศช้ำเสียหายต่ำกว่า 1.5%)'],
      ['Single · Insertion', 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n"Packers fill them directly along sunny farm rows before sliding stacks onto morning chiller trucks."', ['[1]', '[2]', '[3]', '[4]'], 1, 'ตอบ [2] (ต่อจากประโยคที่เริ่มร่วมมือกับฟาร์ม 28 แห่งเพื่อใช้ลังพลาสติกฟ้าที่พับได้ แล้วอธิบายการใช้งานจริงตั้งแต่เก็บในไร่ก่อนสแกนผ่านประตูห้องเย็นในประโยคถัดไป [2])'],
    ]),

    p7(30, 'm30-s8', [
      doc('memo', 'COMMUNITY SERVICE BRIEFING — EAST CREEK TREE PLANTING DAY',
        [['Date', 'Saturday, October 18 · 8:30 A.M.–1:00 P.M.'], ['Meeting Spot', 'East Creek Timber Pavilion']],
        [
          '[1] Thank you to all forty-two warehouse and accounting colleagues joining Saturday’s East Creek Urban Canopy workday! [2] Crews will plant 150 native red maple and river birch saplings along eroded trail banks to cool summer bike lanes and stabilize creek soil.',
          '[3] Because shovels, steel digging bars, and wet clay ditches pose foot hazards, all participants MUST wear closed-toe hiking boots or sturdy leather work shoes (running sneakers or sandals are turned back for safety!). Work gloves, water jugs, and hot minestrone soup lunches await under Timber Pavilion at 12:30 P.M., where forestry leads will also hand out laminated Backyard Tree Care Guides cleanly before afternoon wrap-up. [4]',
        ]),
    ], [
      ['Single · Purpose', 'What environmental objective does planting 150 saplings along East Creek aim to achieve?', ['Shading summer bicycle paths and preventing creek bank erosion', 'Harvesting timber boards for municipal pavilion benches', 'Replacing invasive river birch shrubs with gravel walkways', 'Training warehouse forklift drivers on soil compaction gauges'], 0, 'ตอบ Shading summer bicycle paths and preventing creek bank erosion (ปลูกเมเปิลแดงและเบิร์ชพื้นเมือง 150 ต้นเพื่อช่วยบังแดดเลนจักรยานหน้าร้อนและยึดตลิ่งลำธาร)'],
      ['Single · Requirement', 'Which footwear rule applies strictly to Saturday volunteers?', ['Participants must wear closed hiking boots or durable work shoes', 'Athletic running sneakers are supplied free beside shovel racks', 'Open-toe sandals are acceptable once mud ditches dry at noon', 'Only warehouse staff need steel-toed footwear along trail banks'], 0, 'ตอบ Participants must wear closed hiking boots or durable work shoes (บังคับใส่รองเท้าบูทเดินป่าหัวปิดหรือรองเท้าทำงานหนัง ห้ามใส่ผ้าใบวิ่งหรือรองเท้าแตะ)'],
      ['Single · Detail', 'When and where will hot soup lunches be served?', ['Under East Creek Timber Pavilion at 12:30 P.M.', 'Along bike lanes starting at 8:30 A.M.', 'Inside the main accounting breakroom at 1:00 P.M.', 'Next to county forestry nursery trucks at 10:00 A.M.'], 0, 'ตอบ Under East Creek Timber Pavilion at 12:30 P.M. (มีซุปมินิสโตรเนร้อนๆ แจกที่ Timber Pavilion ตอน 12:30 น.)'],
      ['Single · Insertion', 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n"Drivers heading home afterward should rinse muddy clay off boot soles at outdoor grate hoses beside the North Exit gate."', ['[1]', '[2]', '[3]', '[4]'], 3, 'ตอบ [4] (กล่าวถึงข้อแนะนำก่อนแยกย้ายขับรถกลับบ้านในช่วงท้ายหลังพักเที่ยงและรับคู่มือปลูกต้นไม้ จึงวางปิดท้ายที่ [4] เหมาะสมที่สุด)'],
    ]),

    p7(30, 'm30-s9', [
      doc('chat', 'Plant Quality & Packaging Channel · #conveyor-line-2', null, [
        chat([
          ['Kenji Sato (Packing)', '10:05 A.M.', 'Stop Conveyor Line 2! Frost condensation on laminated seafood bags is smudging black thermal GS1 lot barcodes right off Carton Labels #18 through #21!'],
          ['Elena Cruz (Print Supplies)', '10:08 A.M.', 'Wait—someone loaded standard matte-wax thermal ribbons (`#TR-12`) onto Printer B this morning! Freezer pouches MUST run on Wax-Resin Extreme rolls (`#WR-40`) so ice moisture cannot smear ink!'],
          ['Samir Patel (Receiving)', '10:12 A.M.', 'Just unlocked Dry Cage 4 and grabbed four fresh `#WR-40` Wax-Resin Extreme spools—walking down to swap Printer B’s ribbon shaft right now.'],
          ['Kenji Sato (Packing)', '10:15 A.M.', 'Great hustle, Samir! Quarantine Pallets #18 through #21 beside Hold Zone Yellow immediately so every blurred carton label gets freshly reprinted before noon truck loading!'],
          ['Maya Verma (Cold QA)', '10:18 A.M.', 'Hold Zone Yellow checked! Verified the first test label printed with `#WR-40`: rubbed ice water straight across the barcode for ten seconds with zero smudge marks!'],
        ]),
      ]),
    ], [
      ['Single · Problem', 'Why were printed barcodes smudging on seafood cartons on Conveyor Line 2?', ['Printer B accidentally ran standard wax ribbons instead of moisture-proof wax-resin rolls', 'Freezer pouches were packed upside down along Conveyor Line 2 trays', 'Conveyor sensors ran too fast for thermal barcode ink to dry naturally', 'Printer B heating plates broke inside Hold Zone Yellow'], 0, 'ตอบ Printer B accidentally ran standard wax ribbons instead of moisture-proof wax-resin rolls (ใส่ผิดเป็นม้วนหมึก #TR-12 ธรรมดาแทนที่จะเป็น #WR-40 สำหรับซองแช่เย็นที่มีไอน้ำ)'],
      ['Single · Detail', 'Where did Samir locate the four #WR-40 Wax-Resin Extreme spools?', ['Locked inside Dry Cage 4', 'On top of Printer B’s standby rack', 'Beside Hold Zone Yellow forklifts', 'Inside Elena Cruz’s supply cabinet'], 0, 'ตอบ Locked inside Dry Cage 4 (Samir ปลดล็อกตู้ Dry Cage 4 แล้วนำม้วน #WR-40 สี่ม้วนไปเปลี่ยนที่ Printer B)'],
      ['Single · Intention', 'What does Kenji mean when he writes, "Quarantine Pallets #18 through #21 beside Hold Zone Yellow"?', ['Separate all pallets carrying smudged barcode cartons for reprinting before shipping', 'Discard thawed seafood pouches inside Pallets #18 through #21 permanently', 'Move morning trucks directly to Yellow Zone dock bays at noon', 'Store empty #TR-12 wax spools inside Quarantine cages'], 0, 'ตอบ Separate all pallets carrying smudged barcode cartons for reprinting before shipping (กันพาเลตที่บาร์โค้ดเลอะ #18–21 ไว้โซนสีเหลืองเพื่อแปะป้ายบาร์โค้ดใหม่ก่อนรถบรรทุกเที่ยงมารับ)'],
      ['Single · Detail', 'How did Maya test whether the #WR-40 replacement ribbon fixed the defect?', ['By rubbing wet ice water across a sample printed label for ten seconds', 'By scanning Carton #18 inside Dry Cage 4 scanners', 'By baking wet laminated seafood pouches inside drying ovens', 'By calling afternoon truck dispatchers at Hold Zone Yellow'], 0, 'ตอบ By rubbing wet ice water across a sample printed label for ten seconds (ทดลองเอาน้ำเย็นจัดถูบนฉลากตัวอย่างนาน 10 วินาที พบว่าหมึกไม่เลอะแล้ว)'],
      ['Single · Detail', 'Before what time must the quarantined pallet cartons be freshly relabeled?', ['Noon truck loading', '10:18 A.M.', 'End of afternoon cold QA shifts', 'Tuesday inventory counts'], 0, 'ตอบ Noon truck loading (ต้องพิมพ์ป้ายแก้ให้เสร็จทันรอบรถบรรทุกเที่ยง (noon truck loading))'],
    ]),

    p7(30, 'm30-d1', [
      doc('ad', 'HarborWind Boat Club — Corporate Sailing Team Charters', null, [
        tbl(
          ['Vessel Class', 'Max Crew Capacity', 'Mon–Fri Charter (Half-Day)', 'Saturday Charter (Half-Day)', 'Captained Lunch Add-On'],
          [
            ['Coastal Sloop 35', '8 Guests', '$680', '$820', '+$25 / teammate optional'],
            ['Voyager Cruiser 46', '14 Guests', '$1,050', '$1,240', '+$25 / teammate optional'],
          ]
        ),
        'Standard Rules: Rates cover a licensed skipper. A mandatory $120 Vessel Cleaning & Safety Briefing fee applies once per booking regardless of day or guest count.',
      ]),
      doc('email', 'Corporate Retreat Booking E-mail',
        [['To', 'charters@harborwindclub.com'], ['From', 'Ben Patel, Apex Engineering'], ['Subject', 'Friday Team Retreat Sail — 10 Colleagues']],
        [
          'Hi HarborWind Events,',
          'Ten engineers from our structural design team want a refreshing Friday afternoon half-day sail out onto the bay, plus boxed sandwich lunches ordered for all ten attendees!',
          'Please issue one consolidated company invoice listing the appropriate Friday yacht rate, lunch boxes, and standard cleaning/briefing fee so Finance clears our card right away.',
        ]),
    ], [
      ['Double · Synthesis', 'Why can Apex Engineering NOT book the less expensive Coastal Sloop 35?', ['The Coastal Sloop holds at most 8 passengers, whereas 10 engineers are attending', 'Corporate retreats are banned on Coastal Sloop vessels on Fridays', 'Boxed lunches require galley cooling units found only on Saturdays', 'Coastal Sloop 35 sails exclusively without a licensed skipper'], 0, 'ตอบ The Coastal Sloop holds at most 8 passengers, whereas 10 engineers are attending (Coastal Sloop 35 นั่งได้สูงสุด 8 คน แต่มีวิศวกร 10 คน จึงต้องใช้ Voyager Cruiser 46 ซึ่งจุได้ 14 คน)'],
      ['Double · Math', 'What base Friday charter fee applies to the Voyager Cruiser 46?', ['$1,050', '$1,240', '$680', '$820'], 0, 'ตอบ $1,050 (Ben จองรอบบ่ายวันศุกร์ จึงใช้เรต Mon–Fri ของ Voyager Cruiser 46 = $1,050)'],
      ['Double · Math', 'Calculate the boxed sandwich lunch total for all 10 attending engineers ($25 each):', ['$250', '$200', '$120', '$350'], 0, 'ตอบ $250 (10 คน × $25 = $250)'],
      ['Double · Math', 'What GRAND TOTAL company invoice (Friday Yacht + 10 Lunches + Mandatory $120 Fee) should HarborWind bill Apex Engineering?', ['$1,420 ($1,050 + $250 + $120)', '$1,300 ($1,050 + $250; fee waived)', '$1,610 (Saturday rate applied)', '$1,050 (lunch & cleaning included)'], 0, 'ตอบ $1,420 ($1,050 ค่าเรือวันศุกร์ + $250 ค่าข้าวกล่อง 10 คน + $120 ค่าทำความสะอาดและบรีฟความปลอดภัย = $1,420)'],
      ['Double · Detail', 'Does the $120 Vessel Cleaning & Safety Briefing charge multiply per passenger or per booking?', ['Flat $120 total per reservation regardless of headcount', '$120 per teammate aboard Voyager Cruiser 46', 'Applied only on Saturday afternoon half-day charters', 'Waived completely whenever optional lunches exceed $200'], 0, 'ตอบ Flat $120 total per reservation regardless of headcount (ระบุชัดเจนว่า applies once per booking regardless of day or guest count)'],
    ]),

    p7(30, 'm30-d2', [
      doc('invoice', 'VaultCloud Enterprise Backup — Monthly Billing Statement #CB-883',
        [['Account', 'BrightStone Legal LLC (Subscribed Seat Pack: Up to 15 Active Mailboxes @ $180/mo)'], ['Billing Period', 'May 1 – May 31']],
        [
          tbl(
            ['Line Item', 'Billed Units', 'Rate', 'Amount'],
            [
              ['Core Team Seat Bundle (1–15 Users)', '1 Bundle', '$180.00 / mo', '$180.00'],
              ['Additional User Seat Overage', '3 Extra Active Seats (Total: 18)', '$30.00 / extra seat', '$90.00'],
            ]
          ),
          'Invoice #CB-883 Total Due: $270.00. Seat Removal Policy: Archived alumni licenses marked "Suspended" on the admin dashboard before the 1st of any billing month incur $0 seat charges.',
        ]),
      doc('email', 'IT Admin Billing Audit E-mail',
        [['To', 'billing@vaultcloud.io'], ['From', 'Nadia Torres, BrightStone IT Admin'], ['Date', 'June 2'], ['Subject', 'Seat Overage Dispute — Statement #CB-883 (3 Spring Interns)']],
        [
          'Hi VaultCloud Account Billing,',
          'I am auditing May Statement #CB-883 and spotted an extra $90.00 charge listing 18 active seats instead of our standard 15-attorney legal team!',
          'Actually, all three spring paralegal interns concluded their internships on April 25, and I switched all three mailboxes cleanly to "Suspended" inside our VaultCloud Admin Console on April 28—three days BEFORE May 1 opened! Attached is the timestamped April 28 suspension screenshot; please drop the $90.00 overage charge and bill $180.00.',
        ]),
    ], [
      ['Double · Problem', 'Why was BrightStone Legal billed $90.00 above its base monthly subscription?', ['System billing still counted three expired spring intern accounts as active users', 'VaultCloud raised its 15-attorney base bundle price in May', 'Nadia forgot to download April monthly backup logs before May 1', 'Three newly hired attorneys added mailboxes mid-May without approval'], 0, 'ตอบ System billing still counted three expired spring intern accounts as active users (ระบบคิดเกินไป 3 ที่นั่งจากบัญชีเด็กฝึกงานฤดูใบไม้ผลิที่จริงแล้วปิดไปแล้ว)'],
      ['Double · Synthesis', 'Under VaultCloud’s Seat Removal Policy, why should those three intern accounts cost $0 in May?', ['Nadia changed their dashboard status to Suspended on April 28, prior to May 1', 'Legal interns qualify for free three-month student storage under team packs', 'Paused mailboxes remain exempt for thirty days even after May starts', 'Admin screenshots automatically waive all future seat overage fees'], 0, 'ตอบ Nadia changed their dashboard status to Suspended on April 28, prior to May 1 (นโยบายระบุบัญชีที่ถูก Suspend ก่อนวันที่ 1 ของรอบบิลคิด $0 ซึ่ง Nadia ปิดตั้งแต่วันที่ 28 เม.ย. ก่อนเริ่มพฤษภาคม 3 วัน)'],
      ['Double · Math', 'If BrightStone’s dispute is approved, how much should VaultCloud invoice altogether for May?', ['$180.00', '$270.00', '$90.00', '$240.00'], 0, 'ตอบ $180.00 (ชำระเฉพาะแพ็กเกจหลัก 15 บัญชีในราคา $180.00 โดยตัดยอดเกิน $90.00 ออก)'],
      ['Double · Inference', 'How many active attorneys remain on BrightStone Legal’s account excluding the three departed interns?', ['Fifteen attorneys', 'Eighteen attorneys', 'Three attorneys', 'Twelve attorneys'], 0, 'ตอบ Fifteen attorneys (18 - 3 = 15 ทนายความที่ใช้งานจริง ตรงกับแพ็กเกจหลัก 1–15 Users พอดี)'],
      ['Double · Detail', 'What supporting evidence did Nadia attach to verify her April 28 action?', ['A timestamped screenshot from the VaultCloud Admin Console', 'Three interns’ signed internship offboarding badges', 'HR payroll termination checks dated April 25', 'Prior April monthly invoice receipts showing $180.00 paid'], 0, 'ตอบ A timestamped screenshot from the VaultCloud Admin Console (แนบภาพแคปหน้าจอที่มีเวลาบันทึกว่ากดปิด Suspend วันที่ 28 เม.ย.)'],
    ]),

    p7(30, 'm30-t1', [
      doc('notice', 'Civic Symphony Hall — Season Subscription Seating Rates', null, [
        tbl(
          ['Seating Section', 'Acoustics Tier', 'Single Evening Ticket', 'Complimentary Parking Perks'],
          [
            ['Balcony Tier B', 'Upper Panorama View', '$48 / concert', 'Garage Standard ($18 self-park)'],
            ['Dress Circle Premier', 'Mid-Level Golden Acoustic Row', '$78 / concert', 'Complimentary Valet Voucher Included'],
          ]
        ),
      ]),
      doc('memo', 'ACOUSTIC WING BRACING CLOSURE NOTICE — FRIDAY CONCERT',
        [['Posted', 'Wednesday, November 12'], ['Affected Event', 'Friday, November 14 · 8:00 P.M. (Autumn Cello Gala)']],
        [
          'Structural carpenters tightening walnut acoustic wall braces behind Balcony Tier B are cordoning off Rows AA–EE for Friday evening’s Autumn Cello Gala as a precaution.',
          'ALL Friday Balcony Tier B ticketholders ($48) are automatically relocated downward into vacant Dress Circle Premier rows at ZERO upgrade fee—and ALSO gain complimentary Dress Circle Valet Parking Vouchers! New scannable barcodes emailed Wednesday morning.',
        ]),
      doc('email', 'Subscriber Confirmation E-mail',
        [['To', 'boxoffice@civicsymphony.org'], ['From', 'Miriam Frost (Season Patron #CF-992)'], ['Date', 'Wednesday, November 12 · 1:40 P.M.'], ['Subject', 'Two Reissued Dress Circle Tickets — Friday Cello Gala']],
        [
          'Dear Symphony Box Office,',
          'Just downloaded both updated Dress Circle Premier Row C mobile passes emailed to my inbox—what a delightful surprise ahead of Friday night’s Autumn Cello Gala!',
          'Since my Friday Balcony pass originally carried $18 self-park charges rather than Dress Circle valet, please verify our two complimentary valet vouchers apply at Main Curb Canopy when we drop off at 7:20 P.M. before curtain.',
        ]),
    ], [
      ['Triple · Reason', 'Why were Balcony Tier B Rows AA–EE closed for Friday’s November 14 concert?', ['Carpenters are reinforcing walnut acoustic wall braces behind those upper seats', 'Lighting rigging upgrades blocked panoramic Balcony views this week', 'Cello Gala demand fell short of filling upper balcony rows', 'Valet driveway paving forced Friday ticketholders toward main lobby doors'], 0, 'ตอบ Carpenters are reinforcing walnut acoustic wall braces behind those upper seats (ช่างไม้กำลังขันเสริมโครงไม้ผนังกันเสียงด้านหลังโซน Balcony Tier B)'],
      ['Triple · Math', 'Across two relocated seats ($48 original vs $78 Dress Circle rate) PLUS skipping one $18 self-park fee for free valet, how much TOTAL value did Miriam receive free from Friday’s relocation?', ['$78 saved total ($60 seat upgrade + $18 parking saved)', '$60 saved total', '$30 saved total', '$48 refunded onto season pass balances'], 0, 'ตอบ $78 saved total (ส่วนต่างที่นั่งอัปเกรด 2 ที่นั่ง × [$78 - $48 = $30] = $60 + ประหยัดค่าจอดรถเอง $18 เพราะได้ Valet ฟรี = $78)'],
      ['Triple · Synthesis', 'Will Miriam Frost have to pay extra for Main Curb Canopy valet parking at 7:20 P.M.?', ['No—Friday’s relocation notice extends Dress Circle Valet Vouchers to relocated Balcony guests', 'Yes—original $48 Balcony pass rules override parking upgrades at Main Curb', 'Only for season patrons arriving prior to 7:00 P.M.', 'Yes—valet parking covers only one pass per two patrons'], 0, 'ตอบ No—Friday’s relocation notice extends Dress Circle Valet Vouchers to relocated Balcony guests (ประกาศระบุชัดว่าผู้ย้ายจาก Balcony วันศุกร์ได้บัตร Valet ฟรีของ Dress Circle ไปด้วยเลย)'],
      ['Triple · Detail', 'When did Miriam Frost receive her reissued Dress Circle Row C mobile tickets?', ['Wednesday morning, November 12', 'Friday evening at 7:20 P.M.', 'Tuesday afternoon before structural bracing began', 'At Main Curb Canopy upon valet arrival'], 0, 'ตอบ Wednesday morning, November 12 (ประกาศระบุส่งบาร์โค้ดใหม่ให้เช้าวันพุธ และ Miriam ดาวน์โหลดแล้วในบ่ายวันเดียวกัน)'],
      ['Triple · Inference', 'Which artist showcase headlines Friday night’s 8:00 P.M. performance?', ['The Autumn Cello Gala', 'Acoustic Wing Walnut Choir', 'Premier Valet Jazz Ensemble', 'Balcony Panoramic Recital'], 0, 'ตอบ The Autumn Cello Gala (งานค่ำวันศุกร์ 20:00 น. คือ Autumn Cello Gala)'],
    ]),

    p7(30, 'm30-t2', [
      doc('notice', 'VertiLift Elevators — Commercial Preventive Service Plans', null, [
        tbl(
          ['Service Tier', 'Monthly Retainer / Lift', 'Replacement Switch Discount', 'Weekend / After-Hours Callout Charge'],
          [
            ['Bronze Care', '$210 / month', '0% (Full List Price)', '$280 Dispatch Fee'],
            ['Platinum Uptime', '$360 / month', '30% Off Electrical Switches', 'Waived Free ($0)'],
          ]
        ),
        'Hours Definition: Emergency dispatch calls logged Mon–Fri after 5:00 P.M. or anytime Saturday–Sunday trigger the Weekend / After-Hours Callout Charge under Bronze Care.',
      ]),
      doc('form', 'FIELD DISPATCH REPORT #EL-604 — HarborView Medical Plaza',
        [['Contract Active', 'Platinum Uptime (Covers Passenger Elevators #1 & #2)'], ['Call Logged', 'Saturday, April 5 · 1:45 P.M.']],
        [
          lst([
            'Fault Diagnosed: Passenger Lift #2 failed to level at Floor 3 due to a worn Door Interlock Relay Switch.',
            'Replacement Component Fitted: OEM Optical Interlock Relay Switch (Published List Price: $400.00).',
            'Technician Hours: Routine swap completed by 3:10 P.M. Saturday under monthly retainer labor.',
          ]),
        ]),
      doc('email', 'Property Manager Invoice Verification E-mail',
        [['To', 'ar@vertiliftelevators.com'], ['From', 'Carlos Diaz, HarborView Medical Plaza'], ['Date', 'Monday, April 7'], ['Subject', 'Billing Check on Report #EL-604']],
        [
          'Hi VertiLift Billing Desk,',
          'Your on-call engineer restored Passenger Lift #2 quickly Saturday afternoon so clinic visitors moved smoothly! Reviewing Field Report #EL-604 under our active Platinum Uptime plan, please verify that zero Saturday callout surcharge applies AND confirm the single exact part total owed after our 30% Platinum electrical switch discount.',
        ]),
    ], [
      ['Triple · Detail', 'Why did Passenger Lift #2 require urgent repair on Saturday, April 5?', ['A faulty door interlock switch prevented it from stopping evenly at Floor 3', 'HarborView security accidentally locked Freight Lift #1 controls', 'Annual brake cables stretched past Bronze Care limits', 'Electrical storm surges tripped lobby circuit breakers'], 0, 'ตอบ A faulty door interlock switch prevented it from stopping evenly at Floor 3 (รีเลย์สวิตช์ประตู Door Interlock Relay Switch เสีย ทำให้จอดไม่เสมอกับพื้นชั้น 3)'],
      ['Triple · Synthesis', 'How much is HarborView Medical Plaza charged for Saturday afternoon’s emergency dispatch fee?', ['$0 (waived under Platinum Uptime coverage)', '$280 (Bronze Care weekend dispatch)', '$140 (half-price medical facility rate)', '$360 (reclassified retainer month)'], 0, 'ตอบ $0 (อาคารใช้สัญญา Platinum Uptime ซึ่งยกเว้นค่าเรียกฉุกเฉินวันหยุดและนอกเวลาทำการ $0)'],
      ['Triple · Math', 'Calculate HarborView’s exact total balance owed for the replacement Optical Interlock Relay Switch ($400.00 list price):', ['$280.00 (with 30% Platinum discount applied)', '$400.00 (full retail price)', '$560.00 (part plus Saturday callout fee)', '$120.00 (30% billed share)'], 0, 'ตอบ $280.00 (Platinum ลดราคาสวิตช์ 30% จากราคาป้าย $400 -> $400 × 0.70 = $280.00)'],
      ['Triple · Math', 'If HarborView had subscribed strictly to Bronze Care instead, how much MORE would Report #EL-604 alone cost (Parts + Callout vs Platinum $280)?', ['$400 more ($680 total vs $280 total)', '$280 more ($560 total vs $280 total)', '$120 more', '$680 more'], 0, 'ตอบ $400 more (ถ้าเป็น Bronze Care จะต้องจ่ายค่าสวิตช์เต็ม $400 + ค่าเรียกเสาร์ $280 = $680 เทียบกับของ Platinum $280 -> แพงกว่า $400)'],
      ['Triple · Inference', 'Which statement about technician labor time on Saturday afternoon (1:45–3:10 P.M.) is supported?', ['Labor was absorbed by the monthly Platinum retainer without extra hourly billing', 'HarborView paid an additional 90-minute Floor 3 overtime invoice', 'Technician travel time added $120 above OEM switch prices', 'Bronze Care contracts waive Saturday labor while charging callout fees'], 0, 'ตอบ Labor was absorbed by the monthly Platinum retainer without extra hourly billing (รายงานระบุ Routine swap completed... under monthly retainer labor)],'],
    ]),

    p7(30, 'm30-t3', [
      doc('notice', 'OakRidge Downtown Authority — Storefront Façade Improvement Grant', null, [
        'Small retail shops renovating street-facing Main Street exteriors qualify for a 60% Cash Rebate Grant (MAXIMUM cap of $4,500 rebate per street address) covering:',
        lst([
          'Eligible Streetfront Exterior Work: Custom fabric awnings, illuminated blade store signs, historical brick masonry tuckpointing, and street-level shopfront paint.',
          'Explicitly Excluded Roof/Back Expenses: Flat membrane waterproofing repairs, rear alley HVAC enclosures, and interior flooring.',
        ]),
      ]),
      doc('memo', 'GRANT APPLICATION SUBMISSION TIMELINE & RECEIPT RULES',
        [['Filing Deadline', 'Applications audited monthly; final paid contractor receipts due within 90 days of pre-approval'], ['Notice', 'Combined contractor invoices must itemize streetfront vs roof trades cleanly']],
        [
          'Pre-Approved Applicant Log #OR-312 — CopperPot Spice Shop (114 Main St): Approved for storefront work up to $4,500 rebate cap upon submitting itemized paid contractor bills.',
        ]),
      doc('email', 'Shop Owner Rebate Settlement E-mail',
        [['To', 'grants@oakridgedowntown.org'], ['From', 'Benita Morales, CopperPot Spice Shop (#OR-312)'], ['Subject', 'Itemized Paid Invoices Attached — 114 Main Street']],
        [
          'Dear Downtown Grant Reviewers,',
          'Our street-facing renovation finished gloriously yesterday! Attached are three itemized paid contractor invoices for #OR-312:',
          '(1) Striped Canvas Street Awning: $6,000 paid; (2) Illuminated Steel Blade Sign: $1,500 paid; and (3) Rear Roof Leak Patching: $2,000 paid (listed separately so excluded roof work stays crystal clear). Could you verify whether our 60% rebate hits the full $4,500 cap cleanly and when rebate checks mail out?',
        ]),
    ], [
      ['Triple · Synthesis', 'Which contractor bill attached by Benita is INELIGIBLE for municipal grant reimbursement?', ['The $2,000 Rear Roof Leak Patching charge', 'The $6,000 Striped Canvas Street Awning invoice', 'The $1,500 Illuminated Steel Blade Sign invoice', 'Both exterior signage and canvas awning charges'], 0, 'ตอบ The $2,000 Rear Roof Leak Patching charge (ระเบียบระบุชัดว่างานกันซึมดาดฟ้า/หลังคา และพื้นที่ด้านหลังไม่ร่วมโครงการ)'],
      ['Triple · Math', 'Calculate CopperPot Spice Shop’s TOTAL ELIGIBLE storefront spending before applying the 60% rebate rate:', ['$7,500 ($6,000 awning + $1,500 sign)', '$9,500 (including roof repairs)', '$6,000 (awning only)', '$4,500'], 0, 'ตอบ $7,500 (เฉพาะงานหน้าร้านที่เข้าเกณฑ์: กันสาด $6,000 + ป้ายไฟยื่น $1,500 = $7,500 ไม่รวมงานหลังคา $2,000)'],
      ['Triple · Math', 'Multiplying the $7,500 eligible total by 60%, what EXACT grant check amount does Benita qualify to receive?', ['$4,500 (hits the maximum cap squarely: 60% of $7,500 = $4,500)', '$5,700 (60% of full $9,500 outlay)', '$3,600 (60% of canvas awning alone)', '$4,200'], 0, 'ตอบ $4,500 (60% ของ $7,500 = $4,500 พอดีกับเพดานสูงสุด $4,500 ต่อห้องแถว!)'],
      ['Triple · Detail', 'Why did Benita attach the $2,000 roof work on a separate itemized line?', ['Grant rules require invoices to separate eligible façade items from excluded roof repairs', 'Rear alley roof repairs earn higher 75% historical preservation rebates', 'Roofing contractors refused submitting checks alongside awning builders', 'Applications above $9,000 require municipal building committee signatures'], 0, 'ตอบ Grant rules require invoices to separate eligible façade items from excluded roof repairs (ประกาศระบุต้องแยกใบเสร็จงานหน้าร้านกับงานหลังคาให้ชัดเจน)'],
      ['Triple · Detail', 'Within how many days after pre-approval must CopperPot submit paid contractor receipts?', ['Ninety days', 'Sixty days', 'Thirty days', 'Forty-five days'], 0, 'ตอบ Ninety days (ต้องส่งใบเสร็จที่ชำระเงินแล้วภายใน 90 วันนับจากวันที่ได้รับอนุมัติล่วงหน้า)'],
    ]),
  ];
})();
if (typeof module !== 'undefined') module.exports = { TOEIC_MOCK_VOL6: globalThis.TOEIC_MOCK_VOLS[6] };



