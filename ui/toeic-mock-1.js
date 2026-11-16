// TOEIC Reading Part 7 Volume 1 (Sets 1-5: 70 Passage Groups = 270 Questions).
// Per set: 9 Single Passages (29 Qs) + 2 Double Passages (10 Qs) + 3 Triple Passages (15 Qs) = 54 Qs.
globalThis.TOEIC_MOCK_VOLS = globalThis.TOEIC_MOCK_VOLS || {};
globalThis.TOEIC_MOCK_VOLS[1] = (() => {
  const doc = (kind, title, meta, blocks) => ({ kind, title, ...(meta ? { meta } : {}), blocks });
  const tbl = (headers, rows) => ({ type: 'table', headers, rows });
  const lst = (items) => ({ type: 'list', items });
  const chat = (msgs) => ({ type: 'chat', msgs });
  const box = (title, lines) => ({ type: 'box', title, lines });
  const p7 = (set, id, docs, questions) => ({
    set,
    id,
    docs,
    questions: questions.map(([tag, q, choices, ans, why]) => ({ tag, q, choices, ans, why })),
  });

  return [
    // ══════════════════ SET 1 (Q147–Q200: 54 Qs) ══════════════════
    // Single 1 (2 Qs)
    p7(1, 'm1-s1', [
      doc('email', 'E-mail Message',
        [['To', 'Maya Patel <m.patel@crestprint.com>'], ['From', 'DanielCho <d.cho@northstarhq.com>'], ['Date', 'April 2'], ['Subject', 'Spring Trade-Show Brochures']],
        [
          'Hi Maya,',
          'Thank you for sending the digital PDF proof for our 16-page Spring Robotics catalog yesterday. The product photos on pages 4 and 5 look crisp, though our finance team caught one small error inside the spec chart on page 9: the battery weight for the R-20 arm should read 3.4 kilograms rather than 4.3 kilograms.',
          'Since our sales booth opens at the Gothenburg Industrial Expo on April 14, we need 600 bound booklets shipped straight to Hotel Nordica by April 11 instead of our downtown office. Please proceed with printing once you swap that single digit.',
          'Best regards,\nDaniel Cho',
        ]),
    ], [
      ['Single · Detail', 'Why did Daniel Cho write to Maya Patel?', ['To correct a number before printing begins', 'To ask for 600 extra brochures', 'To cancel his trip to Gothenburg', 'To complain about blurry cover photos'], 0, 'ตอบ To correct a number... (หน้า 9 ตารางสเปคต้องแก้จาก 4.3 กก. เป็น 3.4 กก. ก่อนสั่งพิมพ์)'],
      ['Single · Detail', 'Where does Daniel request the printed catalogs be delivered?', ['To a hotel in Gothenburg', 'To Northstar headquarters', 'To CrestPrint’s downtown shop', 'Directly to an airline counter'], 0, 'ตอบ To a hotel in Gothenburg (shipped straight to Hotel Nordica by April 11 แทนที่จะส่งออฟฟิศใจกลางเมือง)'],
    ]),

    // Single 2 (2 Qs)
    p7(1, 'm1-s2', [
      doc('notice', 'Public Notice', [['Location', 'Maple Grove Ferry Terminal']],
        [
          'Pier 3 Dock Gate Repair Schedule',
          'To replace worn rubber ferry bumpers along Slip B, commuter boats departing Maple Grove toward Harbor Island will board strictly from adjacent Slip A from Wednesday, May 8 through Friday, May 10.',
          'Automated turnstiles and ticket kiosks inside the main terminal remain unaffected. Cyclists should dismount bicycles cleanly before walking up Slip A’s temporary timber ramp.',
        ]),
    ], [
      ['Single · Purpose', 'What is the main purpose of the notice?', ['To announce a temporary boarding slip change', 'To advertise weekend ferry discounts', 'To report an outage at ticket kiosks', 'To prohibit bicycles aboard ferries'], 0, 'ตอบ To announce a temporary boarding slip change (ย้ายขึ้นเรือจาก Slip B ไป Slip A ชั่วคราว 8-10 พ.ค.)'],
      ['Single · Detail', 'What are cyclists instructed to do?', ['Walk their bicycles up the ramp', 'Purchase an extra timber ramp ticket', 'Leave bicycles locked inside kiosks', 'Board at Pier 3 on Friday evening only'], 0, 'ตอบ Walk their bicycles up the ramp (คำว่า dismount bicycles cleanly before walking = ลงจากจักรยานแล้วจูงเดินขึ้นทางลาด)'],
    ]),

    // Single 3 (3 Qs) - Text Message Chain
    p7(1, 'm1-s3', [
      doc('chat', 'Group Text Messages', [['Channel', 'Bayside Cafe Kitchen Team'], ['Date', 'July 14']],
        [
          chat([
            ['Rosa Kim', '7:42 A.M.', 'Morning everyone. Our milk fridge dropped to 7 degrees overnight because someone left the gasket door slightly ajar. Had to toss six cartons of oat milk.'],
            ['Tariq Ali', '7:45 A.M.', 'Whoa, sorry to hear that! I still have four sealed cartons at the North Street kiosk. Should I send Leo over on the cargo bike right now?'],
            ['Rosa Kim', '7:47 A.M.', 'Yes please, that will hold us easily past the 9:00 a.m. office rush!'],
            ['Ben Wu', '7:51 A.M.', 'Also called Valley Dairy—they can drop two extra cases at noon along with tomorrow’s pastry flour. Wait, Rosa, did the compressor turn back down smoothly?'],
            ['Rosa Kim', '7:53 A.M.', 'Yep, back down at 3 degrees already. Just remember to latch that silver clip after restocking!'],
          ]),
        ]),
    ], [
      ['Single · Cause', 'Why did Rosa Kim throw out six cartons of oat milk?', ['The refrigerator door was not shut tightly', 'A supplier delivered expired milk', 'The cafe lost electrical power overnight', 'The cargo bike crashed during delivery'], 0, 'ตอบ The refrigerator door was not shut tightly (left the gasket door slightly ajar ทำให้อุณหภูมิพุ่งเป็น 7 องศา)'],
      ['Single · Intent', 'What does Rosa Kim mean when she writes "that will hold us easily" at 7:47 A.M.?', ['The four cartons are enough through morning peak hours', 'Tariq should lock the kiosk fridge promptly', 'Staff must stop selling oat-milk drinks today', 'She wants Leo to repair the metal gasket'], 0, 'ตอบ The four cartons are enough... (พอประคองขายข้ามช่วงลูกค้าเร่งด่วน 9 โมงเช้าไปได้)'],
      ['Single · Detail', 'When will Valley Dairy deliver extra milk?', ['At midday', 'At 7:53 A.M.', 'Right before 9:00 A.M.', 'Tomorrow afternoon'], 0, 'ตอบ At midday (drop two extra cases at noon = เที่ยงตรง)'],
    ]),

    // Single 4 (3 Qs) - Schedule / Table
    p7(1, 'm1-s4', [
      doc('table', 'Quarterly Workshop Series — Westside Business Center',
        [['Registration', 'Free for Westside Chamber members · $35 public']],
        [
          'All sessions take place inside Second-Floor Training Suites and include printed workbook binders.',
          tbl(
            ['Date', 'Workshop Title', 'Instructor', 'Room', 'Seats Left'],
            [
              ['Oct 8', 'Small-Business Bookkeeping Basics', 'H. Takahashi', '202', '4'],
              ['Oct 15', 'Writing Clear Vendor Proposals', 'R. Mensah', '204', 'Full'],
              ['Oct 22', 'Social Media Video on a Budget', 'S. Lindqvist', '201', '9'],
              ['Oct 29', 'Export Customs Paperwork 101', 'A. Kowalski', '202', '2'],
            ]),
        ]),
    ], [
      ['Single · Detail', 'Which workshop currently has no open spots?', ['Writing Clear Vendor Proposals', 'Small-Business Bookkeeping Basics', 'Social Media Video on a Budget', 'Export Customs Paperwork 101'], 0, 'ตอบ Writing Clear Vendor Proposals (ตารางแสดง Seats Left: Full)'],
      ['Single · Detail', 'Who leads both finance-related and customs classes in Room 202?', ['H. Takahashi and A. Kowalski', 'R. Mensah and S. Lindqvist', 'H. Takahashi alone', 'A. Kowalski alone'], 0, 'ตอบ H. Takahashi and A. Kowalski (ทั้ง Oct 8 และ Oct 29 จัดในห้อง 202 โดยมีผู้สอนสองคนนี้)'],
      ['Single · Inference', 'How much would two non-member freelancers pay together to attend the Oct 22 class?', ['$70', '$35', 'Nothing ($0)', '$105'], 0, 'ตอบ $70 (บุคคลทั่วไปคนละ $35 -> 2 คน = $70)'],
    ]),

    // Single 5 (3 Qs) - Letter
    p7(1, 'm1-s5', [
      doc('letter', 'Customer Letter',
        [['To', 'Mr. Victor Reyes'], ['From', 'ClearWater Filtration Co.'], ['Date', 'August 19']],
        [
          'Dear Mr. Reyes,',
          'Thank you for purchasing an UnderSink AquaPure Model X2 system last October. Every X2 purifier monitors water flow electronically so owners never need to guess when internal sediment cartridges clog.',
          'Our automated telemetry records show your kitchen unit is nearing its 2,500-liter recommended filter capacity. Waiting too long beyond this milestone lowers kitchen tap pressure and dulls drinking taste.',
          'Enter personalized voucher AQUA25 on our website before September 5 to save 25 percent on twin replacement filters plus free ground delivery.',
          'Warm regards,\nClearWater Support',
        ]),
    ], [
      ['Single · Detail', 'Why does ClearWater recommend replacing the filter soon?', ['Usage is approaching the 2,500-liter mark', 'Model X2 units are being recalled immediately', 'October installations have faulty seals', 'A city water advisory was issued'], 0, 'ตอบ Usage is approaching the 2,500-liter mark (nearing its 2,500-liter recommended filter capacity)'],
      ['Single · NOT', 'Which is NOT mentioned as a consequence of waiting too long to swap filters?', ['Bursting under-sink steel pipes', 'Lower kitchen tap pressure', 'Less crisp drinking taste', 'Exceeding recommended capacity'], 0, 'ตอบ Bursting under-sink steel pipes (ในจดหมายกล่าวถึงแค่แรงดันน้ำลดลงและรสชาติจืดชืด ไม่ได้บอกท่อแตก)'],
      ['Single · Detail', 'What benefit does code AQUA25 unlock before September 5?', ['A 25% discount plus free ground shipping', 'A free digital flow meter', 'Free plumber installation at home', 'Extension of the annual warranty'], 0, 'ตอบ A 25% discount plus free ground shipping (ลด 25% สำหรับไส้กรองคู่พร้อมส่งฟรีทางภาคพื้นดิน)'],
    ]),

    // Single 6 (3 Qs) - Press Release / News
    p7(1, 'm1-s6', [
      doc('article', 'Press Release — Regional Retail', [['City', 'Portsmouth'], ['Date', 'November 3']],
        [
          'GreenBasket Grocers announced plans today to open three compact neighborhood pickup hubs near commuter rail exits across Portsmouth early next year. Unlike full-scale supermarkets stocking 30,000 items, each pickup hub will keep roughly 800 fresh daily staples on site while letting shoppers collect online grocery baskets ordered by lunchtime.',
          'Managing Director Sarah Lin said the transit-side model saves busy office commuters up to forty minutes weekly by eliminating supermarket checkout lanes and parking-lot walks. Each compact station employs six part-time order packers and uses battery-cooled lockers powered partially by rooftop solar panels.',
        ]),
    ], [
      ['Single · Detail', 'How do the new GreenBasket hubs differ from standard supermarkets?', ['They focus on pickup orders and carry far fewer shelf items', 'They stay closed to online shoppers', 'They sell strictly frozen bulk seafood', 'They do not employ part-time workers'], 0, 'ตอบ They focus on pickup orders... (เก็บของสดพื้นฐานราว 800 รายการและเน้นมารับตะกร้าที่สั่งออนไลน์ ไม่ใช่ซูเปอร์ใหญ่ 30,000 รายการ)'],
      ['Single · Vocab', 'The word "eliminating" in paragraph 2 is closest in meaning to ___.', ['removing', 'expanding', 'postponing', 'inspecting'], 0, 'ตอบ removing (eliminating checkout lanes = ตัด/ขจัดแถวรอจ่ายเงินออกไป)'],
      ['Single · Detail', 'How are the grocery lockers kept cool?', ['With rooftop solar-assisted batteries', 'Via underground liquid cooling pipes', 'By overnight diesel trucks', 'With disposable dry-ice packs'], 0, 'ตอบ With rooftop solar-assisted batteries (battery-cooled lockers powered partially by rooftop solar panels)'],
    ]),

    // Single 7 (4 Qs) - Job Ad + [1]-[4] or Vocab
    p7(1, 'm1-s7', [
      doc('ad', 'Careers Posting — Veridian Architecture', [['Position', 'Junior Lighting Coordinator'], ['Location', 'Seattle Office (Hybrid)']],
        [
          'Veridian Architecture seeks an organized Junior Lighting Coordinator to support commercial retail and museum interior teams. [1] You will prepare LED fixture schedules, request manufacturer sample boxes, and coordinate delivery dates with electrical contractors.',
          'Requirements:',
          lst([
            'Bachelor’s degree in Interior Design, Architectural Engineering, or related visual field',
            'Fluency with AutoCAD and spreadsheet pricing formulas',
            'Minimum one year of internship or studio support work',
            'Ability to travel regionally two days per month for site ceiling inspections',
          ]),
          '[2] We offer three weeks paid vacation, transit card stipends, and tuition credits toward lighting certification exams. [3] Applicants should upload a single PDF combining a cover letter, resume, and three sample fixture drawings through our Careers page before Friday, May 24. [4]',
        ]),
    ], [
      ['Single · Detail', 'Which task will the hired coordinator perform?', ['Track delivery timelines with electrical contractors', 'Install overhead glass panels personally', 'Design custom museum security turnstiles', 'Approve corporate annual tax returns'], 0, 'ตอบ Track delivery timelines... (coordinate delivery dates with electrical contractors)'],
      ['Single · NOT', 'What is NOT listed as a job requirement?', ['Fluency in a second spoken language', 'Knowledge of AutoCAD', 'At least one year of studio or intern experience', 'Regional monthly site visits'], 0, 'ตอบ Fluency in a second spoken language (คุณสมบัติระบุแค่ AutoCAD, ปริญญาตรงสาย, ประสบการณ์ 1 ปี และออกไซท์เดือนละ 2 วัน)'],
      ['Single · Detail', 'How must candidates submit their application files?', ['Combined into a single PDF on the Careers page', 'Mailed as bound paper portfolios', 'Emailed directly as separate CAD files', 'Dropped off in person at Reception'], 0, 'ตอบ Combined into a single PDF... (upload a single PDF combining... through our Careers page)'],
      ['Single · Insertion', 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "Previous experience using Revit lighting plugins is considered a strong advantage."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจากรายการ Requirements ทันที เพื่อบอกคุณสมบัติเสริมที่พิจารณาเป็นพิเศษ ก่อนเข้าสู่หัวข้อสวัสดิการ)'],
    ]),

    // Single 8 (4 Qs) - Policy / Instructions
    p7(1, 'm1-s8', [
      doc('memo', 'Company Travel & Car Rental Guidelines', [['Division', 'Field Service Engineers'], ['Effective', 'January 1']],
        [
          'Engineers driving over 120 kilometers on single-day customer warranty repairs are advised to reserve a compact corporate fleet hybrid rather than claiming personal-vehicle mileage.',
          'Booking Rules:',
          lst([
            'Reserve vehicles in Portal FleetTab at least 24 hours ahead whenever possible.',
            'Inspect bumper paint for existing scratches prior to leaving Garage Dock 2.',
            'Fuel tanks must sit above half full upon returning keys to Night Security.',
            'Toll road transponders inside glove compartments bill HQ directly—never pay tolls out of pocket in cash.',
          ]),
          'Parking citation fines or speeding penalties remain the individual driver’s financial responsibility and are never reimbursable.',
        ]),
    ], [
      ['Single · Condition', 'When should an engineer book a corporate hybrid car instead of using a personal car?', ['When driving more than 120 kilometers in one day', 'For any local trip under two hours', 'Only when traveling across international borders', 'Whenever Garage Dock 2 is closed'], 0, 'ตอบ When driving more than 120 kilometers... (driving over 120 kilometers on single-day repairs)'],
      ['Single · Detail', 'How are highway tolls handled for company fleet vehicles?', ['They charge headquarters automatically via onboard transponders', 'Drivers pay cash and submit paper receipts', 'Customers cover tolls on repair invoices', 'Drivers deduct tolls from meal stipends'], 0, 'ตอบ They charge headquarters automatically... (Toll road transponders bill HQ directly—never pay cash)'],
      ['Single · Inference', 'What can be inferred about returning a corporate car with an empty tank?', ['It violates the fleet return policy', 'Night Security refills tanks for a bonus', 'Gas receipts are added automatically to salaries', 'The car automatically routes to Garage Dock 1'], 0, 'ตอบ It violates the fleet return policy (กฎระบุชัดเจน Fuel tanks must sit above half full)'],
      ['Single · Vocab', 'The word "citation" in the final paragraph is closest in meaning to ___.', ['ticket', 'voucher', 'quote', 'pass'], 0, 'ตอบ ticket (parking citation = ใบสั่งค่าปรับจอดรถ)'],
    ]),

    // Single 9 (5 Qs) - Long Feature Article
    p7(1, 'm1-s9', [
      doc('article', 'Circular Footwear Takes Hold Across European Running Shops',
        [['Author', 'Claire Moreau'], ['Date', 'September 14']],
        [
          'Athletic shoe manufacturers typically glue twelve synthetic plastics, foam wedges, and rubber treads tightly together, making worn-out running sneakers virtually impossible to separate cleanly in neighborhood recycling centers. [1] Consequently, hundreds of millions of pairs wind up incinerated or buried each year after barely six months of marathon training.',
          'Zurich startup Helvetia Sole hopes to upend that wasteful cycle this fall with its modular Tempo-01 trainer. Instead of irreversible chemical glues, Tempo-01 threads a tough knitted wool-poly upper onto a snap-lock TPU heel chassis using replaceable tension cords. When tread rubber wears smooth after 700 kilometers of pavement running, owners bring shoes back to participating running shops to swap fresh outsoles in four minutes flat. [2]',
          '"Most cushioning breakdown happens solely inside the thin heel pad and bottom rubber skin—the breathable upper sock barely shows wear after one season," explains founder Lukas Weber. [3] Retail partners also benefit: keeping quick-swap press machines beside cash registers draws loyal runners directly back inside local stores rather than losing repeat orders to online discount warehouses.',
          'While early pricing sits roughly 20 percent higher than conventional marathon trainers, independent test clubs found resoled pairs cost nearly 35 percent less over two years of regular road mileage. [4] Next month, forty-five specialty running boutiques across Germany and France begin carrying Tempo-01.',
        ]),
    ], [
      ['Single · Purpose', 'What is the main topic of the article?', ['A replaceable-sole running shoe design', 'Rising global raw rubber prices', 'An upcoming Zurich city marathon', 'A study comparing online and retail ads'], 0, 'ตอบ A replaceable-sole running shoe design (รองเท้าวิ่ง Tempo-01 ที่ถอดเปลี่ยนพื้นรองเท้าใหม่ได้ไม่ต้องทิ้งทั้งคู่)'],
      ['Single · Cause', 'Why are traditional athletic sneakers hard to recycle?', ['Different materials are permanently glued together', 'Retail shops refuse to collect old laces', 'Foam wedges dissolve in cold rainwater', 'Municipal centers ban wool textiles'], 0, 'ตอบ Different materials are permanently glued together (glue twelve synthetic plastics... virtually impossible to separate)'],
      ['Single · Inference', 'What advantage do local running stores gain from stocking Tempo-01?', ['Runners return in person for resole service', 'Factory glues no longer smell in stockrooms', 'Shoes ship fully assembled without boxes', 'Shop staff avoid measuring foot sizes'], 0, 'ตอบ Runners return in person... (draws loyal runners directly back inside local stores rather than losing repeat orders online)'],
      ['Single · Vocab', 'The word "upend" in paragraph 2 is closest in meaning to ___.', ['transform', 'hide', 'verify', 'lengthen'], 0, 'ตอบ transform (upend that wasteful cycle = พลิกโฉม/เปลี่ยนแปลงวงจรเดิมที่สิ้นเปลือง)'],
      ['Single · Insertion', 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "Shop clerks then grind worn tread shavings back into playground turf pellets."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจากประโยคอธิบายร้านค้าเปลี่ยนพื้นรองเท้าใหม่ให้ภายใน 4 นาที -> อธิบายต่อทันทีว่าพื้นเก่าที่ถอดออกเอาไปทำอะไรต่อ)'],
    ]),

    // Double Passage 1 (5 Qs: Notice + Email)
    p7(1, 'm1-d1', [
      doc('notice', 'Oakridge Botanical Market — Vendor Booth Guide', [['Dates', 'June 15–16'], ['Venue', 'Riverfront Pavilion']],
        [
          'Show Hours: Saturday 8:00 A.M.–4:00 P.M. · Sunday 9:00 A.M.–3:00 P.M.',
          tbl(
            ['Booth Tier', 'Footprint', 'Early Bird (Before May 15)', 'Standard Rate', 'Included Equipment'],
            [
              ['Seedling', '2m × 2m', '$95', '$125', '1 folding bench, overhead banner bar'],
              ['Orchard', '3m × 3m', '$155', '$190', '2 tables, electrical outlet, water access'],
              ['Greenhouse', '4m × 3m', '$220', '$265', 'Corner space, 2 tables, power, sink hookup'],
            ]),
          'Setup opens Friday 1:00–6:00 P.M. All unpaid balances lock in the Standard Rate automatically after May 15.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'exhibitors@oakridgemarket.org'], ['From', 'tessa@fernhoney.com'], ['Date', 'May 12'], ['Subject', 'Application Confirmation — Fern Valley Honey']],
        [
          'Hello Oakridge Coordinator,',
          'I just submitted our digital vendor form requesting an Orchard booth for Fern Valley Honey on June 15–16, along with a $155 electronic transfer. Since we give tasting samples on bamboo spoons, having running water beside our display is essential.',
          'However, our refrigerated delivery van cannot make Friday afternoon setup because we pack jars straight from our morning harvest in Kent. Could our crew roll in at 6:30 A.M. Saturday morning instead? Let me know if East Dock permits Saturday early load-in.',
          'Thank you,\nTessa Grant',
        ]),
    ], [
      ['Double · Synthesis', 'Why did Tessa Grant select the Orchard booth tier?', ['It provides water access within her space', 'It offers a corner footprint with a sink', 'It allows free late setup on Sunday', 'It costs $95 before May 15'], 0, 'ตอบ It provides water access... (ในอีเมลบอก having running water is essential และตารางระบุ Orchard มี water access; ระวัง Greenhouse มี sink hookup)'],
      ['Double · Detail', 'Why does Tessa qualify for the $155 price?', ['She applied and paid before May 15', 'She brings her own folding tables', 'She is donating honey to volunteers', 'She shares a booth with Kent growers'], 0, 'ตอบ She applied and paid before May 15 (ตารางระบุ Early Bird Before May 15 = $155, อีเมลส่ง May 12)'],
      ['Double · Detail', 'What time would Tessa like to arrive to set up her booth?', ['At 6:30 A.M. Saturday', 'On Friday at 1:00 P.M.', 'At 8:00 A.M. Sunday', 'After 4:00 P.M. Saturday'], 0, 'ตอบ At 6:30 A.M. Saturday (ขอเข้าจัดบูธเช้ามืดวันเสาร์ 6:30 น. แทนรอบวันศุกร์)'],
      ['Double · Inference', 'Why can Tessa’s crew NOT attend standard setup on Friday afternoon?', ['They will still be jarring honey in Kent Friday morning', 'East Dock closes for street repairs on Fridays', 'The Orchard power outlet turns on Saturday only', 'Bamboo tasting spoons arrive Saturday morning'], 0, 'ตอบ They will still be jarring honey... (we pack jars straight from our morning harvest in Kent)'],
      ['Double · NOT', 'Which feature is NOT included with an Orchard tier?', ['Corner booth placement', 'Two tables', 'Electrical outlet', 'Water access'], 0, 'ตอบ Corner booth placement (ตำแหน่งหัวมุม Corner space อยู่ในระดับ Greenhouse เท่านั้น)'],
    ]),

    // Double Passage 2 (5 Qs: Invoice/Shipping Rule + Complaint Email)
    p7(1, 'm1-d2', [
      doc('notice', 'Nordic Office Direct — Return & Exchange Policy', [['Website', 'www.nordicofficedirect.com']],
        [
          'Customer satisfaction comes first at Nordic Office Direct.',
          lst([
            'Unopened office electronics qualify for full refunds within 30 calendar days of delivery.',
            'Opened desk printers or laminators showing manufacturing flaws within 45 days receive free courier pickup and same-day replacement dispatch.',
            'Items damaged solely due to customer voltage misuse cannot be exchanged.',
            'Free return courier labels apply automatically when customers keep original foam corner inserts.',
          ]),
          'Contact returns@nordicofficedirect.com quoting your 6-digit Order Code for prepaid shipping barcodes.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'returns@nordicofficedirect.com'], ['From', 'Martin Halvorsen'], ['Date', 'October 28'], ['Subject', 'Paper Feed Jam — Order #482190']],
        [
          'Dear Support Team,',
          'Two weeks ago on October 14, our architecture practice received a LaserPro D70 duplex printer ordered under #482190. Upon printing our first architectural binder batch today, the bottom tray paper roller began grinding loudly and tearing standard A4 sheets.',
          'Everything else works cleanly, though clearly the roller axle came defective straight from assembly. Luckily our mailroom saved the heavy molded styrofoam corners inside the box.',
          'Please issue our return pickup barcode cleanly—we urgently need an operational printer before next Monday’s municipal permit deadline.',
          'Sincerely,\nMartin Halvorsen',
        ]),
    ], [
      ['Double · Synthesis', 'Why does Martin Halvorsen qualify for free courier pickup and replacement?', ['The defect occurred within 45 days and foam inserts were kept', 'The printer remains completely factory sealed', 'Municipal permit offices pay shipping fees', 'His order falls inside the 90-day corporate tier'], 0, 'ตอบ The defect occurred within 45 days... (ส่งของ Oct 14 แจ้ง Oct 28 = 14 วัน < 45 วัน และเก็บโฟมมุมเดิมไว้ครบ)'],
      ['Double · Detail', 'What problem is Martin experiencing with the printer?', ['Its lower tray roller tears A4 paper and grinds', 'Its wireless Wi-Fi card fails to connect', 'Toner cartridges leaked inside the box', 'It arrived missing a 220V power cord'], 0, 'ตอบ Its lower tray roller tears... (the bottom tray paper roller began grinding loudly and tearing standard A4 sheets)'],
      ['Double · Detail', 'What information did Martin provide as required by policy?', ['His 6-digit order number #482190', 'A signed electrician voltage report', 'Receipt for a second printer', 'Photos of his office mailroom'], 0, 'ตอบ His 6-digit order number... (นโยบายระบุ quoting your 6-digit Order Code และหัวเมลใส่ Order #482190)'],
      ['Double · Inference', 'Why did Martin mention keeping the styrofoam box inserts?', ['To guarantee he receives a free prepaid shipping label', 'To request a partial cash discount instead of repair', 'To prove delivery happened in October', 'To return A4 paper sheets as well'], 0, 'ตอบ To guarantee he receives a free prepaid label (ตามกฎข้อ 4: Free return courier labels apply when customers keep original foam corner inserts)'],
      ['Double · Inference', 'When is Martin’s urgent project deadline?', ['Next Monday', 'October 14', 'Within 45 days', 'October 28'], 0, 'ตอบ Next Monday (we urgently need an operational printer before next Monday’s municipal permit deadline)'],
    ]),

    // Triple Passage 1 (5 Qs: Web Ad + Invoice + Customer Email)
    p7(1, 'm1-t1', [
      doc('ad', 'Apex Soundbar Co. — Holiday Upgrade Promo (Dec 1–15)', [['Site', 'www.apexaudio.shop']],
        [
          'Transform your studio editing room or living room before holiday guests arrive!',
          tbl(
            ['Model', 'Channels', 'Retail Price', 'Promo Code HOLIDAY15'],
            [
              ['StudioBeam Mini', '2.1 Ch', '$220', '$187'],
              ['TheaterBar Pro', '5.1 Ch', '$400', '$340'],
              ['CinemaWall X', '7.1.2 Ch', '$640', '$544'],
            ]),
          'Free 2-day courier delivery on orders over $300. Customers spending $500+ in a single cart also receive a complimentary optical braided HDMI cable ($35 value).',
        ]),
      doc('invoice', 'Apex Order Confirmation #AX-7741',
        [['Customer', 'Kevin Sato'], ['Date', 'December 9'], ['Ship To', '712 Harbor Way, Portland']],
        [
          tbl(
            ['Item', 'Qty', 'Unit Price', 'Subtotal'],
            [
              ['TheaterBar Pro (Black)', '1', '$400', '$400'],
              ['Wall Mount Steel Bracket', '1', '$45', '$45'],
              ['Promo Code: HOLIDAY15 (Bar)', '-', '-$60', '-$60'],
              ['2-Day Express Delivery', '-', '$0', '$0'],
            ]),
          'Total Charged: $385.00 · Status: Dispatched Dec 10 via SwiftCourier.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'help@apexaudio.shop'], ['From', 'Kevin Sato'], ['Date', 'December 12'], ['Subject', 'Missing Wall Bracket & Question on HDMI Gift']],
        [
          'Hi Apex Team,',
          'My TheaterBar Pro box arrived in Portland cleanly today—sounds awesome! However, opening the shipping sleeve revealed no steel wall bracket inside even though I paid $45 for it on Invoice #AX-7741. Also, I noticed no braided optical HDMI cable was packed—could you include one alongside the missing bracket?',
          'Thanks,\nKevin Sato',
        ]),
    ], [
      ['Triple · Synthesis', 'Why was Kevin Sato NOT charged a delivery fee on Order #AX-7741?', ['His net order total exceeded $300', 'He placed the order on December 15', 'He bought a CinemaWall X model', 'He paid extra for a Portland courier pass'], 0, 'ตอบ His net order total exceeded $300 (ยอดสุทธิ $385 > $300 ตามเงื่อนไขส่งฟรี 2-day delivery)'],
      ['Triple · Synthesis', 'Is Kevin eligible for the free $35 braided HDMI cable?', ['No, because his total spending stayed below $500', 'Yes, because TheaterBar Pro includes it automatically', 'Yes, because brackets double all accessories', 'No, because HOLIDAY15 voids all free gifts'], 0, 'ตอบ No, because his total spending stayed below $500 (เงื่อนไขต้องมียอดจ่าย $500+ แต่บิล Kevin ยอดสุทธิ $385 / ยอดก่อนลด $445)'],
      ['Triple · Detail', 'Which item failed to arrive inside Kevin’s December 12 parcel?', ['The Wall Mount Steel Bracket', 'The TheaterBar Pro speaker', 'The Invoice receipt', 'The power cable'], 0, 'ตอบ The Wall Mount Steel Bracket (no steel wall bracket inside)'],
      ['Triple · Inference', 'What discount rate does code HOLIDAY15 apply to soundbars?', ['15 percent', '25 percent', '$45 flat', '10 percent'], 0, 'ตอบ 15 percent (ราคา $400 ลดเหลือ $340 = ลดลง $60 ซึ่งคิดเป็น 15%)'],
      ['Triple · Detail', 'When did SwiftCourier ship Kevin’s package?', ['December 10', 'December 9', 'December 12', 'December 1'], 0, 'ตอบ December 10 (Status: Dispatched Dec 10 via SwiftCourier)'],
    ]),

    // Triple Passage 2 (5 Qs: Memo + Workshop Schedule + Email)
    p7(1, 'm1-t2', [
      doc('memo', 'HR Memo — Annual Mandatory Compliance Refresher', [['To', 'All Branch Personnel'], ['From', 'Learning Operations'], ['Date', 'March 1']],
        [
          'Under updated financial licensing statutes, every staff member must complete one live two-hour Compliance Ethics clinic before March 31. Attendance at one live session plus scoring 85% or higher on the Friday portal quiz satisfies full compliance.',
          'Team supervisors may approve remote video attendance solely for staff stationed outside Metro Zone.',
        ]),
      doc('table', 'March Live Session Calendar (Metro Headquarters — Floor 4)', null, [
        tbl(
          ['Date', 'Time', 'Language Track', 'Presenter', 'Room'],
          [
            ['March 12', '9:00–11:00 A.M.', 'English', 'J. Park', 'Auditorium B'],
            ['March 19', '1:30–3:30 P.M.', 'Spanish / Eng', 'L. Cruz', 'Room 402'],
            ['March 25', '10:00 A.M.–12:00 P.M.', 'English', 'J. Park', 'Room 405'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'learning@crestbank.org'], ['From', 'Nadia Haddad (Metro Downtown Branch)'], ['Date', 'March 13'], ['Subject', 'Re-scheduling Missed March 12 Clinic']],
        [
          'Hi Team,',
          'Because an urgent wire-transfer audit kept our downtown teller desk busy yesterday morning, I missed J. Park’s opening session in Auditorium B. Looking at the remaining calendar, March 19 conflicts with my client appointment at 2:00 P.M., so please reserve a seat for me in the final English session led by J. Park. Afterward I will take the online quiz cleanly.',
          'Also, does my new intern Kenji need to sit through the full session since his onboarding packet already covered privacy basics?',
          'Best,\nNadia Haddad',
        ]),
    ], [
      ['Triple · Synthesis', 'In which room will Nadia Haddad attend her Compliance Ethics session?', ['Room 405', 'Auditorium B', 'Room 402', 'Her branch office via video'], 0, 'ตอบ Room 405 (พลาด March 12 และติดนัดบ่ายวันที่ 19 จึงเลือกรอบสุดท้ายของ J. Park คือ March 25 ซึ่งจัดที่ Room 405)'],
      ['Triple · Inference', 'Why can Nadia NOT request remote video attendance?', ['She works within the Metro Zone', 'All video servers stay shut in March', 'J. Park prohibits virtual attendance', 'She failed the Friday quiz once'], 0, 'ตอบ She works within the Metro Zone (หัวเมลระบุ Nadia อยู่ Metro Downtown Branch แต่กฎให้ Video เฉพาะนอก Metro Zone)'],
      ['Triple · Detail', 'What minimum portal quiz score is required for compliance?', ['85 percent', '75 percent', '90 percent', '100 percent'], 0, 'ตอบ 85 percent (scoring 85% or higher on the Friday portal quiz)'],
      ['Triple · Inference', 'According to HR memo rules, how would Learning Operations likely reply regarding Nadia’s intern Kenji?', ['He still must attend a live clinic and pass the quiz', 'Onboarding packets exempt all interns permanently', 'Only bilingual Spanish tracks cover interns', 'He may wait until next year'], 0, 'ตอบ He still must attend... (Memo ระบุชัดเจนว่า every staff member ต้องเข้าอบรมสด 2 ชม. + สอบให้ผ่าน 85% ก่อน 31 มี.ค.)'],
      ['Triple · Detail', 'Why did Nadia miss the March 12 morning session?', ['She handled an urgent wire-transfer audit', 'She was visiting a bilingual Spanish client', 'Auditorium B had seating capacity issues', 'She joined wrong room 402'], 0, 'ตอบ She handled an urgent wire-transfer audit (คำตอบชัดเจนในย่อหน้าแรกของอีเมล)'],
    ]),

    // Triple Passage 3 (5 Qs: Flyer + Booking Email + Hotel Chat)
    p7(1, 'm1-t3', [
      doc('ad', 'Pinecrest Resort — Corporate Wellness Package', [['Valid', 'April 1 – May 31 (Sun–Thu Stays)']],
        [
          'Escape noisy downtown hotels for quiet forest cabins just 40 minutes north of the rail terminal!',
          lst([
            'Standard Cedar Room ($160/night): Queen bed, hot spring spa pass, buffet breakfast.',
            'Executive Loft ($220/night): Balcony work desk, espresso maker, private thermal soak, breakfast, plus complimentary airport van.',
          ]),
          'Companies booking 4+ nights in total unlock complimentary boardroom projector use (normally $60/day).',
        ]),
      doc('email', 'Booking Confirmation #PR-904',
        [['Guest', 'Hiroshi Tanaka (2 Rooms)'], ['Check-in', 'Monday, April 21'], ['Check-out', 'Thursday, April 24 (3 Nights)']],
        [
          'Room 1: Executive Loft (Hiroshi Tanaka) — 3 nights × $220 = $660',
          'Room 2: Standard Cedar Room (Elena Novak) — 3 nights × $160 = $480',
          'Subtotal: $1,140 (Breakfast & Spa included). Conference Boardroom B reserved for Tuesday afternoon ($0 — waived for 4+ combined room-nights).',
        ]),
      doc('chat', 'Guest Concierge Messages', [['Thread', 'Reservation #PR-904 · April 21']],
        [
          chat([
            ['Hiroshi Tanaka', '8:10 A.M.', 'Hi! My colleague Elena Novak flies into Terminal 1 at 11:00 A.M. today while my train pulls in at 1:30 P.M. Could your airport shuttle grab Elena even though she stays in the Cedar Room while I booked the Executive Loft?'],
            ['Concierge Maya', '8:16 A.M.', 'Happy to verify! Since your booking covers 6 total room-nights cleanly, we waived Tuesday’s $60 Boardroom B projector charge—you will see zero fee on folio checkout. Standard airport shuttle rides for Cedar guests carry a $25 one-way seat fee unless sharing the Executive Loft van pickup!'],
          ]),
        ]),
    ], [
      ['Triple · Detail', 'Why was the $60 Boardroom B projector fee waived on Reservation #PR-904?', ['Their combined booking equals 6 room-nights (over the 4-night minimum)', 'Executive Loft guests always get free projectors for one room', 'Elena Novak is arriving by regional train', 'No projector was delivered to Boardroom B'], 0, 'ตอบ Their combined booking equals 6 room-nights... (เงื่อนไขระบุ 4+ nights in total และ 2 ห้อง × 3 คืน = 6 คืน)'],
      ['Triple · Synthesis', 'How much would Elena Novak pay for the airport shuttle if traveling separately?', ['$25', 'Nothing ($0)', '$60', '$160'], 0, 'ตอบ $25 (Concierge ยืนยัน Standard shuttle rides for Cedar guests carry a $25 one-way fee เว้นแต่นั่งคันเดียวกับ Executive Loft)'],
      ['Triple · Synthesis', 'Which day did Hiroshi Tanaka reserve Conference Boardroom B?', ['Tuesday, April 22', 'Monday, April 21', 'Wednesday, April 23', 'Thursday, April 24'], 0, 'ตอบ Tuesday, April 22 (เช็กอิน Monday April 21 -> วันถัดมาคือ Tuesday April 22 ตามคำระบุ Tuesday afternoon)'],
      ['Triple · Detail', 'How is Hiroshi Tanaka arriving at the resort region?', ['By train at 1:30 P.M.', 'By plane into Terminal 1 at 11:00 A.M.', 'By rental SUV overnight Sunday', 'By ferry from Harbor Island'], 0, 'ตอบ By train at 1:30 P.M. (my train pulls in at 1:30 P.M.)'],
      ['Triple · NOT', 'Which amenity is NOT included in the Standard Cedar Room tier?', ['In-room espresso maker', 'Hot spring spa access', 'Buffet breakfast', 'Queen bed'], 0, 'ตอบ In-room espresso maker (เครื่องทำเอสเปรสโซ่รวมอยู่ใน Executive Loft เท่านั้น)'],
    ]),

    // ══════════════════ SET 2 (Q147–Q200: 54 Qs) ══════════════════
    // Single 1 (2 Qs)
    p7(2, 'm2-s1', [
      doc('memo', 'Internal Memo', [['To', 'Regional Store Cashiers'], ['From', 'Retail Systems IT'], ['Date', 'February 7'], ['Subject', 'Gift Card Barcodes Update']],
        [
          'Effective tomorrow morning, physical gift card sleeves carrying old silver magnetic stripes require scanning under the handheld optical QR scanner rather than swiping through credit-card side slots.',
          'Register Software v4.8 already enables QR balance activation smoothly across all lanes. Call IT Desk 1 immediately if any sleeve rejects activation twice.',
        ]),
    ], [
      ['Single · Detail', 'How should cashiers process older silver-stripe gift cards starting tomorrow?', ['By using the handheld QR optical scanner', 'By swiping them through side card readers', 'By calling IT Desk 1 before every sale', 'By replacing sleeves with handwritten paper slips'], 0, 'ตอบ By using the handheld QR optical scanner (scanning under the handheld optical QR scanner rather than swiping)'],
      ['Single · Detail', 'When should staff contact IT Desk 1?', ['When a gift card fails activation twice', 'Before updating Register Software v4.8', 'Each evening before drawer closing', 'When shoppers ask for cash refunds'], 0, 'ตอบ When a gift card fails activation twice (if any sleeve rejects activation twice)'],
    ]),

    // Single 2 (2 Qs)
    p7(2, 'm2-s2', [
      doc('ad', 'Grand Opening Ad', [['Business', 'Harborview Roasters'], ['Date', 'Saturday, March 16']],
        [
          'Visit our brand-new flagship coffee shop at 44 Canal Street starting at 7:00 A.M. this Saturday! All espresso drinks cost half price until noon, and the first 100 guests receive a complimentary 150-gram bag of Ethiopian whole-bean coffee.',
          'Outdoor canal patio seating welcomes leashed dogs and features fast free Wi-Fi.',
        ]),
    ], [
      ['Single · Detail', 'What special offer runs until 12:00 P.M. on opening Saturday?', ['Fifty percent off espresso beverages', 'Free whole-bean bags for all guests all week', 'Half-price patio furniture sales', 'Complimentary dog treats inside the bar'], 0, 'ตอบ Fifty percent off espresso beverages (All espresso drinks cost half price until noon)'],
      ['Single · Detail', 'What is mentioned about outdoor seating?', ['Leashed dogs are permitted outside', 'Indoor tables charge hourly Wi-Fi fees', 'It opens one hour later at 8:00 A.M.', 'Reservations must be paid in advance'], 0, 'ตอบ Leashed dogs are permitted outside (Outdoor canal patio seating welcomes leashed dogs)'],
    ]),

    // Single 3 (3 Qs) - Text Chat
    p7(2, 'm2-s3', [
      doc('chat', 'Work Chat Messages', [['Channel', '#trade-fair-setup'], ['Date', 'May 1']],
        [
          chat([
            ['Leo Diaz', '2:14 P.M.', 'Quick check at Booth 118: the display lighting truss arrived intact, but our shipping crate only had three tall bar stools instead of four.'],
            ['Chloe Park', '2:17 P.M.', 'Oh no! Wait, could the fourth stool have slipped onto Crate B with the brochure racks?'],
            ['Leo Diaz', '2:20 P.M.', 'Checked Crate B already—just banners and sample packs inside. Expo Rentals Desk is open down Hall A until 5:00 P.M., want me to grab a matching black stool there?'],
            ['Chloe Park', '2:22 P.M.', 'Go for it, keep the paper receipt for travel accounting. Also grab two extension strips while you are there!'],
          ]),
        ]),
    ], [
      ['Single · Problem', 'What item is missing from Leo’s booth shipment?', ['One tall bar stool', 'A lighting truss', 'Printed brochure racks', 'Product sample packs'], 0, 'ตอบ One tall bar stool (had three tall bar stools instead of four)'],
      ['Single · Intent', 'What does Chloe mean by "Go for it" at 2:22 P.M.?', ['Rent a replacement stool from Expo Rentals Desk', 'Search Freight Crate B one more time', 'Pack banners away before 5:00 P.M.', 'Wait until tomorrow morning’s opening'], 0, 'ตอบ Rent a replacement stool... (เห็นด้วยให้ Leo ไปเช่าเก้าอี้สีดำเพิ่มจาก Expo Rentals Desk ได้เลย)'],
      ['Single · Detail', 'What additional item does Chloe ask Leo to pick up?', ['Two power extension strips', 'Extra brochure stands', 'Spare light bulbs', 'Blank name lanyards'], 0, 'ตอบ Two power extension strips (Also grab two extension strips while you are there)'],
    ]),

    // Single 4 (3 Qs) - Form / Rate Table
    p7(2, 'm2-s4', [
      doc('table', 'SwiftBox Co-Working Private Room Rates (Midtown Branch)', [['Booking Policy', 'Cancel 24+ hrs ahead for 100% refund']],
        [
          tbl(
            ['Suite Name', 'Max Capacity', 'Hourly Rate', 'Half-Day (4 Hrs)', 'AV Included'],
            [
              ['Cedar Focus', '4 people', '$32', '$110', '27" Monitor + Webcam'],
              ['Elm Studio', '8 people', '$55', '$195', '55" 4K TV + Ceiling Mic'],
              ['Harbor Board', '16 people', '$90', '$320', 'Dual Projector + Video Bar'],
            ]),
          'Complimentary drip coffee and sparkling water are stocked outside Suite Elm Studio for every guest.',
        ]),
    ], [
      ['Single · Detail', 'Which room should a ten-person client workshop reserve?', ['Harbor Board', 'Cedar Focus', 'Elm Studio', 'Any standard desk'], 0, 'ตอบ Harbor Board (รองรับสูงสุด 16 คน ส่วน Elm Studio รับได้แค่ 8 คน)'],
      ['Single · Math', 'How much does a customer save by booking Elm Studio for a Half-Day (4 Hrs) instead of paying four individual hourly blocks?', ['$25', '$15', '$55', '$35'], 0, 'ตอบ $25 (รายชั่วโมง $55 × 4 = $220 เทียบ Half-Day $195 -> ประหยัด $25)'],
      ['Single · Condition', 'What is required for a full cancellation refund?', ['Canceling at least 24 hours in advance', 'Rebooking inside Cedar Focus', 'Switching to a half-day package', 'Paying a sparkling-water fee'], 0, 'ตอบ Canceling at least 24 hours in advance (Cancel 24+ hrs ahead for 100% refund)'],
    ]),

    // Single 5 (3 Qs) - Customer Review & Owner Reply
    p7(2, 'm2-s5', [
      doc('review', 'Online Hotel Review & Response', [['Property', 'Harborlight Boutique Inn']],
        [
          'Guest Review by David Foster (Stayed Oct 10–12 · 4/5 Stars): "Location across from Waterfront Station cannot be beat, and front desk clerk Sonia checked me in warmly within two minutes despite heavy evening rain. Breakfast pastries tasted crisp each morning. Only drawback: Room 308 sits directly above the delivery alley, so garbage trucks woke me at 5:45 A.M. Friday."',
          'Manager Reply from Arthur Lin: "Thank you kindly for recognizing Sonia and our bakery team, Mr. Foster! Quiet stays matter deeply to us—during your next Portland trip, ask directly for rooms facing Elm Courtyard (ending in 01 through 06), which stay peaceful all night."',
        ]),
    ], [
      ['Single · Praise', 'What did David Foster compliment most in his stay?', ['Convenient transit location, helpful desk staff, and pastries', 'Soundproofing in Room 308', 'Early morning alley deliveries', 'Complimentary train passes'], 0, 'ตอบ Convenient transit location... (Location across from station, front desk clerk Sonia, crisp pastries)'],
      ['Single · Problem', 'Why was David Foster awakened early Friday?', ['Noise from trucks in the alley below', 'Construction inside Waterfront Station', 'A fire alarm on Floor 3', 'A late breakfast staff delivery'], 0, 'ตอบ Noise from trucks in the alley below (Room 308 sits above delivery alley -> garbage trucks woke me at 5:45 A.M.)'],
      ['Single · Inference', 'Which room would likely suit a light sleeper staying at Harborlight Inn?', ['Room 304', 'Room 308', 'Room 208', 'Room 310'], 0, 'ตอบ Room 304 (ผู้จัดการแนะนำห้องหันหน้าเข้าสวนที่ลงท้าย 01 ถึง 06 จึงได้แก่ 304)'],
    ]),

    // Single 6 (3 Qs) - Email
    p7(2, 'm2-s6', [
      doc('email', 'E-mail Message',
        [['To', 'All Warehouse Clerks'], ['From', 'Inventory Systems'], ['Date', 'November 12'], ['Subject', 'Holiday Temporary Rack Re-Numbering']],
        [
          'Starting Monday at 6:00 A.M., holiday gift-set boxes arriving from Osaka will temporarily occupy Overflow Aisle 9 instead of their usual Aisle 4 bins because plumbing technicians need clear overhead ceiling access above Aisle 4.',
          'Tablet picking screens will automatically route handheld barcode guns straight to Aisle 9 throughout the two-week pipe replacement project. Please double-check green magnetic aisle tags before pulling bulk gift cartons cleanly.',
        ]),
    ], [
      ['Single · Cause', 'Why are holiday gift boxes temporarily moved to Aisle 9?', ['Plumbers require clear overhead space in Aisle 4', 'Aisle 4 shelves collapsed under heavy weight', 'Osaka trucks arrive strictly at Dock 9', 'Tablet screens cannot scan Aisle 4 labels'], 0, 'ตอบ Plumbers require clear overhead space... (plumbing technicians need clear overhead ceiling access above Aisle 4)'],
      ['Single · Detail', 'How long is the pipe replacement project expected to take?', ['Two weeks', 'Six days', 'One month', 'Until December 31'], 0, 'ตอบ Two weeks (two-week pipe replacement project)'],
      ['Single · Inference', 'How do warehouse workers know exact shelf destinations during the move?', ['Picking tablets update routes automatically', 'Printed binder manuals sit at Reception', 'Plumbers direct forklift traffic verbally', 'Old orange tags stay mounted'], 0, 'ตอบ Picking tablets update routes automatically (Tablet picking screens will automatically route...)'],
    ]),

    // Single 7 (4 Qs) - Notice with Insertion
    p7(2, 'm2-s7', [
      doc('notice', 'Oakwood Municipal Pool — Autumn Lap Hours Update', [['Effective', 'October 1']],
        [
          'Beginning October 1, indoor heated 50-meter lanes adjust for autumn school swim practices. Public morning lap swimming runs continuously Monday through Friday from 5:30 A.M. to 9:00 A.M. [1] Four center lanes remain dedicated strictly to continuous lap swimmers, while two side lanes open for relaxed water walking.',
          'Locker rooms close sharply fifteen minutes after final whistle blasts so custodial crews can sanitize tile floors overnight. [2] Bring personal reusable padlocks—daily coin lockers on Wall B are being replaced with digital wristband slots later next month. [3] Multi-visit 20-swim punch passes bought during summer stay valid indefinitely through winter months without expiration. [4]',
        ]),
    ], [
      ['Single · Detail', 'Which pool lanes are reserved specifically for continuous lap swimmers?', ['The four center lanes', 'All six lanes after 9:00 A.M.', 'The two outside lanes', 'Lanes 1 and 2 on weekends'], 0, 'ตอบ The four center lanes (Four center lanes remain dedicated strictly to continuous lap swimmers)'],
      ['Single · Detail', 'What should swimmers bring right now to secure belongings?', ['Their own padlocks', 'Quarters for coin lockers', 'Digital wristbands already issued', 'Printed summer receipts'], 0, 'ตอบ Their own padlocks (Bring personal reusable padlocks)'],
      ['Single · Inference', 'What happens to unused summer punch cards in winter?', ['Swimmers can still use them cleanly', 'They lose half their value after October 1', 'Front desk swaps them for day receipts', 'They expire automatically at midnight Dec 31'], 0, 'ตอบ Swimmers can still use them cleanly (stay valid indefinitely through winter months without expiration)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Evening adult lap swim resumes smoothly from 6:30 P.M. until 9:30 P.M. after team practices finish."', ['[1]', '[2]', '[3]', '[4]'], 0, 'ตอบ [1] (ต่อจากตารางเวลาว่ายน้ำช่วงเช้า 5:30–9:00 A.M. ก่อนพูดถึงกติกาการใช้เลน)'],
    ]),

    // Single 8 (4 Qs) - Product / Tech Release
    p7(2, 'm2-s8', [
      doc('article', 'HarborTech Unveils Recycled-Aluminum Workstation', [['Location', 'Vancouver'], ['Date', 'June 5']],
        [
          'Commercial laptop builder HarborTech revealed its StudioBook 15 chassis yesterday, crafted entirely from post-consumer beverage-can aluminum reclaimed across Pacific Northwest recycling depots. Weighing just 1.38 kilograms, StudioBook 15 skips structural chemical adhesives altogether in favor of eight standard Torx-T5 bottom screws.',
          '"IT teams hate discarding healthy business fleets over one swollen three-year-old battery," noted lead mechanical architect Jenna Osei. Swapping SSD drives, memory sticks, or fresh batteries takes a technician less than four minutes cleanly using one ordinary screwdriver. Major hospital networks in Vancouver and Portland already pre-ordered 2,400 units ahead of autumn shipping.',
        ]),
    ], [
      ['Single · Detail', 'What material makes up the StudioBook 15 exterior chassis?', ['Recycled aluminum beverage cans', 'Molded carbon-fiber plastic', 'Stainless steel tubes', 'Engineered bamboo composites'], 0, 'ตอบ Recycled aluminum beverage cans (post-consumer beverage-can aluminum)'],
      ['Single · Benefit', 'Why did engineers avoid using permanent glues inside StudioBook 15?', ['So components like batteries and drives can be swapped easily', 'To drop laptop weight below one kilogram', 'To meet airplane cabin battery rules', 'Because chemical glues dissolve under hospital heat'], 0, 'ตอบ So components like batteries and drives can be swapped easily (ใช้สกรูแทนกาว ทำให้เปลี่ยน SSD/แบตเตอรี่ในไม่กี่นาที)'],
      ['Single · Inference', 'Who has already placed substantial early orders?', ['Regional healthcare groups', 'Local beverage bottling plants', 'Public school math classes', 'Consumer toy stores'], 0, 'ตอบ Regional healthcare groups (Major hospital networks in Vancouver and Portland already pre-ordered 2,400 units)'],
      ['Single · Vocab', 'The word "discarding" in paragraph 2 is closest in meaning to ___.', ['throwing away', 'repairing', 'backing up', 'delivering'], 0, 'ตอบ throwing away (discarding healthy business fleets = โละทิ้งเครื่องเก่า)'],
    ]),

    // Single 9 (5 Qs) - Feature Article
    p7(2, 'm2-s9', [
      doc('article', 'Night Freight Trains Return to Small-City Produce Hubs', [['By', 'Samuel Cho'], ['Issue', 'Logistics Review']],
        [
          'Long-haul highway trucking dominates fresh produce shipping across North America, yet soaring diesel fuel prices and chronic driver shortages are pushing regional farm cooperatives to test overnight express rail cars once again. [1] Two months ago, Clearwater Berry Cooperative partnered with Silverline Rail to dedicate four insulated refrigerated freight cars strictly between valley packing sheds and downtown metropolitan produce terminals.',
          'Rather than waiting inside crowded highway rest stops, freshly harvested raspberries roll onto cold rail platforms at 8:00 P.M. and reach urban wholesale docks by 4:30 A.M. just in time for supermarket trucks. [2] Each electric-chilled railcar holds roughly the payload of three semi-trailers while generating one-fourth the carbon emissions per kilogram.',
          '"Supermarket produce managers initially worried rail switching delays might bruise fragile blackberries," notes cooperative coordinator Rachel Tan. [3] Pneumatic air-cushion suspension inside refurbished bogies kept vibration noticeably smoother than bumpy interstate bridges.',
          'Following zero spoilage complaints over eight straight weeks, two orchard pear growers plan to reserve space on an additional Friday express run next harvest. [4]',
        ]),
    ], [
      ['Single · Purpose', 'What is this article mainly about?', ['Farm cooperatives using overnight refrigerated trains for produce', 'A union strike by long-haul highway truckers', 'Construction of a new metropolitan rail terminal', 'Ways supermarkets store frozen berries longer'], 0, 'ตอบ Farm cooperatives using overnight refrigerated trains... (เล่าเรื่องสหกรณ์เบอร์รี่หันมาใช้รถไฟแช่เย็นกลางคืนส่งผลผลิตสดเข้าเมือง)'],
      ['Single · Detail', 'How many semi-trailer loads can a single chilled railcar carry?', ['About three', 'Four', 'Eight', 'Twenty-five'], 0, 'ตอบ About three (holds roughly the payload of three semi-trailers)'],
      ['Single · Concern', 'What worried grocery buyers before the trial started?', ['Possible fruit bruising from rail vibrations or delays', 'Lack of wholesale truck parking at 4:30 A.M.', 'Excess carbon taxes on train shipments', 'Shortage of electric power inside fields'], 0, 'ตอบ Possible fruit bruising... (worried rail switching delays might bruise fragile blackberries)'],
      ['Single · Vocab', 'The word "chronic" in paragraph 1 is closest in meaning to ___.', ['long-lasting', 'minor', 'seasonal', 'sudden'], 0, 'ตอบ long-lasting (chronic driver shortages = ปัญหาขาดแคลนคนขับเรื้อรัง/ยืดเยื้อมานาน)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Instead, temperature logs and arrival inspections consistently beat expectations."', ['[3]', '[1]', '[2]', '[4]'], 0, 'ตอบ [3] (ต่อจากความกังวลเรื่องผลไม้ช้ำในประโยคก่อนหน้า แล้วตามด้วยเหตุผลระบบกันสะเทือนลมที่นุ่มกว่าถนน)'],
    ]),

    // Double Passage 1 (5 Qs: Email Inquiry + Brochure/Schedule)
    p7(2, 'm2-d1', [
      doc('ad', 'Apex Culinary Studio — Group Team-Building Workshops', [['Location', '190 Market Street'], ['Contact', 'events@apexculinary.com']],
        [
          'Menu Options (Minimum 8 participants · All tools & aprons provided):',
          tbl(
            ['Package', 'Duration', 'Per Person', 'Highlights'],
            [
              ['Handmade Pasta Lab', '2.5 hrs', '$75', 'Fettuccine from scratch, basil pesto, sparkling water'],
              ['Artisan Bakery Sprint', '3.0 hrs', '$90', 'Sourdough focaccia, herb oil tasting, espresso bar'],
              ['Plant-Based Mezze Night', '2.5 hrs', '$80', 'Hummus trio, flatbread grill, hibiscus iced tea'],
            ]),
          'Add optional wine pairings for +$22/person. Private weekday morning slots (9:00 A.M.–Noon) qualify for a flat 10% corporate early discount.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'events@apexculinary.com'], ['From', 'Benny Cruz <b.cruz@finvault.io>'], ['Date', 'September 4'], ['Subject', 'Thursday Oct 17 Engineering Retreat']],
        [
          'Hi Events Desk,',
          'Our 12-person data engineering team would love to book your Artisan Bakery Sprint on Thursday morning, October 17 starting at 9:30 A.M. None of us require alcohol pairings—just espresso and water are great!',
          'Quick dietary check: one colleague strictly avoids tree nuts, though dairy and wheat work fine for everyone. Could you confirm total estimated billing after our weekday morning discount and hold the slot until Friday while Finance approves the corporate card?',
          'Thanks!\nBenny Cruz',
        ]),
    ], [
      ['Double · Detail', 'Which package does Benny Cruz want for his team?', ['Artisan Bakery Sprint', 'Handmade Pasta Lab', 'Plant-Based Mezze Night', 'Espresso Tasting Only'], 0, 'ตอบ Artisan Bakery Sprint (ระบุตรงตัวในอีเมลว่า book your Artisan Bakery Sprint)'],
      ['Double · Math', 'What will the final discounted workshop fee be for 12 employees before taxes?', ['$972', '$1,080', '$1,242', '$900'], 0, 'ตอบ $972 (12 คน × $90 = $1,080 ไม่รับไวน์ และรอบเช้าวันพฤหัสลด 10% -> $1,080 - $108 = $972)'],
      ['Double · Synthesis', 'Why is Benny’s booking eligible for the 10% discount?', ['He chose a weekday morning time slot', 'He has over 15 coworkers attending', 'They ordered tree-nut free ingredients', 'He is paying in cash on October 17'], 0, 'ตอบ He chose a weekday morning time slot (Thursday morning Oct 17 ตรงเงื่อนไข Private weekday morning slots 9:00-Noon)'],
      ['Double · Inference', 'Why might Pastry Chefs NOT worry about the pesto sauce allergen on Benny’s selected menu?', ['Pesto appears on the Pasta Lab menu, not the Bakery Sprint', 'Tree nuts are banned inside 190 Market Street', 'Espresso bars neutralize nut oils', 'Only hummus contains almonds'], 0, 'ตอบ Pesto appears on the Pasta Lab menu... (หลักสูตร Bakery ทำขนมปังโฟคาเซียกับน้ำมันสมุนไพร ไม่มีซอสเพสโต้)'],
      ['Double · Detail', 'What does Benny ask the studio to do until Friday?', ['Hold the October 17 date pending Finance approval', 'Substitute milk with oat creamer', 'Email tax forms to Market Street', 'Ship aprons ahead to his office'], 0, 'ตอบ Hold the October 17 date... (hold the slot until Friday while Finance approves the corporate card)'],
    ]),

    // Double Passage 2 (5 Qs: Clinic Policy + Follow-up Email)
    p7(2, 'm2-d2', [
      doc('notice', 'Oakridge Physiotherapy — Patient Rescheduling & Billing Policy', [['Address', 'Suite 200, Medical Plaza']],
        [
          lst([
            'Appointments canceled or shifted 24+ business hours in advance incur zero fees.',
            'Late cancellations under 24 hours carry a $35 missed-slot charge unless caused by sudden emergency hospital stays or icy highway closures.',
            'Initial sports injury assessments last 60 minutes ($110); follow-up massage or mobility checks run 30 minutes ($65).',
            'Direct insurance billing applies solely when valid Policy Cards arrive on file before visit check-in.',
          ]),
        ]),
      doc('email', 'E-mail Message',
        [['To', 'reception@oakridgephysio.com'], ['From', 'Claire Bennett'], ['Date', 'Monday, November 4 · 4:15 P.M.'], ['Subject', 'Moving Wednesday Nov 6 Knee Follow-Up']],
        [
          'Hello Reception,',
          'I currently hold a 30-minute knee mobility checkup this Wednesday, November 6 at 10:00 A.M. with Dr. Sam Patel. My flight returning from Winnipeg just got pushed back overnight, so I will land too late Wednesday morning.',
          'Could we move my session cleanly to Thursday afternoon, November 7 around 3:00 P.M.? Also, my workplace switched health insurers on November 1—I will bring the new card five minutes early to Lobby Desk so reception can scan it for direct billing.',
          'Thanks so much,\nClaire Bennett',
        ]),
    ], [
      ['Double · Synthesis', 'Will Claire Bennett be charged the $35 late-cancellation fee?', ['No, because she emailed more than 24 hours ahead', 'Yes, because flight delays are not covered', 'Yes, because her insurer switched November 1', 'No, because follow-up checks are always free'], 0, 'ตอบ No, because she emailed more than 24 hours ahead (อีเมลส่งวันจันทร์ 16:15 น. เพื่อขอเลื่อนนัดวันพุธ 10:00 น. = ล่วงหน้า ~42 ชม.)'],
      ['Double · Synthesis', 'What is the standard rate for Claire’s Wednesday visit type?', ['$65', '$110', '$35', '$95'], 0, 'ตอบ $65 (follow-up knee mobility check 30 นาที ราคาตามป้ายคือ $65)'],
      ['Double · Detail', 'Why can Claire NOT attend her original November 6 morning slot?', ['Her return flight from Winnipeg was delayed', 'Her new insurer rejected knee therapy', 'Icy highways closed Suite 200', 'Dr. Patel took personal leave'], 0, 'ตอบ Her return flight... (My flight returning from Winnipeg just got pushed back)'],
      ['Double · Synthesis', 'Why is bringing her new insurance card early necessary on Thursday?', ['Direct billing requires valid current card details before check-in', 'Winnipeg patients pay triple without cards', 'It waives the 60-minute assessment fee', 'Lobby Desk closes at 3:05 P.M.'], 0, 'ตอบ Direct billing requires... (นโยบายข้อ 4: Direct insurance billing applies solely when valid Policy Cards arrive before visit check-in)'],
      ['Double · Detail', 'How long will Claire’s Thursday mobility check last?', ['30 minutes', '60 minutes', '24 minutes', '45 minutes'], 0, 'ตอบ 30 minutes (นัดเป็น 30-minute knee mobility checkup)'],
    ]),

    // Triple Passage 1 (5 Qs: Web Ad + Memo + Chat)
    p7(2, 'm2-t1', [
      doc('ad', 'BrightDesk LED Task Lamps — Ergonomic Office Collection', [['Warranty', '5 Years Hardware']],
        [
          tbl(
            ['Model', 'Mount Type', 'Max Lumens', 'Unit Price', 'Color Temp Presets'],
            [
              ['Luma-Clamp C1', 'Desk C-Clamp', '950 lm', '$88', 'Warm / Neutral / Cool'],
              ['Luma-Base B2', 'Weighted Stand', '800 lm', '$94', 'Warm / Cool'],
              ['Luma-Architect A5', 'Dual Arm Clamp', '1,300 lm', '$135', 'Stepless Dial'],
            ]),
          'Save 15% automatically on corporate orders purchasing 20 or more units of any single model.',
        ]),
      doc('memo', 'Internal Purchasing Memo — Design Wing Lighting', [['To', 'Facilities Buyer (Sam Rivera)'], ['From', 'VP of Architecture (Grace Park)'], ['Date', 'April 9']],
        [
          'To prepare desks ahead of next month’s new architectural interns arriving on Floor 6, let us order 24 BrightDesk task lamps. Since drafting monitors take up deep rear desk surfaces, weighted bases eat too much blueprint layout space—stick strictly to clamp mounts. Draftspeople also need maximum brightness and stepless dimming for sketching fine ink lines cleanly. Place the purchase today if budget stays under $3,000.',
        ]),
      doc('chat', 'Purchasing Slack Thread', [['Channel', '#office-ops'], ['Date', 'April 9']],
        [
          chat([
            ['Sam Rivera', '11:05 A.M.', 'Grace, checked vendor stock on Luma-Architect A5 just now. With our 20+ unit corporate tier discount, 24 clamps drop nicely within budget!'],
            ['Grace Park', '11:09 A.M.', 'Sweet! Does BrightDesk pack AC cords in black or white for the A5?'],
            ['Sam Rivera', '11:12 A.M.', 'Black braided cables cleanly, and warehouse ships all 24 units on Thursday morning so Reception receives them Monday.'],
          ]),
        ]),
    ], [
      ['Triple · Synthesis', 'Which BrightDesk lamp model did Sam Rivera order for Floor 6?', ['Luma-Architect A5', 'Luma-Clamp C1', 'Luma-Base B2', 'Weighted Stand S1'], 0, 'ตอบ Luma-Architect A5 (ต้องเป็นแบบ clamp + สว่างสูงสุด 1,300 lm + stepless dimming ตามสเปคและ Slack ยืนยัน Luma-Architect A5)'],
      ['Triple · Math', 'What will the 24 ordered Luma-Architect A5 lamps cost after the 15% corporate discount?', ['$2,754', '$3,240', '$2,160', '$2,880'], 0, 'ตอบ $2,754 (24 × $135 = $3,240 -> ลด 15% ($486) = $2,754 ซึ่งต่ำกว่างบ $3,000 จริง)'],
      ['Triple · Detail', 'Why did Grace Park reject weighted-stand lamps like the Luma-Base B2?', ['They occupy too much desk space needed for drafting blueprints', 'Their color temperature lacks Cool mode', 'They cost over $135 per unit', 'Their warranties last only one year'], 0, 'ตอบ They occupy too much desk space... (weighted bases eat too much blueprint layout space)'],
      ['Triple · Inference', 'When will the lamp shipment arrive at Reception?', ['On Monday', 'On April 9', 'On Thursday morning', 'In five years'], 0, 'ตอบ On Monday (ships Thursday morning so Reception receives them Monday)'],
      ['Triple · Detail', 'What color are the included power cords?', ['Black', 'White', 'Clear', 'Silver'], 0, 'ตอบ Black (Black braided cables cleanly)'],
    ]),

    // Triple Passage 2 (5 Qs: Article + Schedule + Email)
    p7(2, 'm2-t2', [
      doc('article', 'Midtown Public Art Walk Returns This May', [['City Arts Board']],
        [
          'Following last year’s huge turnout of 14,000 pedestrians, Midtown’s annual Open Studio & Mural Walk expands across four evening weekends beginning May 4. Free guided walking tours leave every half hour from Fountain Plaza, highlighting brick courtyard murals, kinetic wind sculptures, and glass-blowing studios.',
          'Merchants along Cedar Lane stay open late until 9:00 P.M. offering studio snacks and art postcard prints.',
        ]),
      doc('table', 'May Guided Mural Walk Routes (Departing Fountain Plaza)', null, [
        tbl(
          ['Route Code', 'Focus Area', 'Length', 'Lead Guide', 'Wheelchair Friendly?'],
          [
            ['Route A', 'Brick Alleyway Murals', '1.4 km', 'Elena Vasquez', 'Yes'],
            ['Route B', 'Canal Kinetic Sculptures', '2.1 km', 'Tom Sato', 'Yes'],
            ['Route C', 'Historic Loft Studios (Stairs)', '1.8 km', 'David Osei', 'No (3rd floor walk-up)'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'tours@midtownarts.org'], ['From', 'Mariko Sato <m.sato@citytransit.org>'], ['Date', 'April 26'], ['Subject', 'Group Accessibility Request — May 11']],
        [
          'Hello Arts Board,',
          'Seven retired colleagues from our transit engineering union would love to join an evening walk on Saturday, May 11 starting at 6:00 P.M. Since one guest relies cleanly on an electric mobility scooter, please reserve Route A under Elena Vasquez rather than loft studios.',
          'Also, does Cedar Lane stay open late on May 11 so we can grab tea afterward around 8:00 P.M.?',
          'Best,\nMariko Sato',
        ]),
    ], [
      ['Triple · Synthesis', 'Why did Mariko Sato pick Route A instead of Route C?', ['Route C climbs loft stairs inaccessible to a mobility scooter', 'Route A is longest at 2.1 kilometers', 'Tom Sato does not guide Saturday evenings', 'Route C skips Fountain Plaza'], 0, 'ตอบ Route C climbs loft stairs... (ตารางระบุ Route C มีบันไดขึ้นชั้น 3 จึงไม่รองรับรถเข็น/สกู๊ตเตอร์)'],
      ['Triple · Synthesis', 'Will shops along Cedar Lane still be open when Mariko’s group finishes around 8:00 P.M.?', ['Yes, shops stay open until 9:00 P.M.', 'No, Cedar Lane closes sharply at 7:00 P.M.', 'Only Route B finishes near Cedar Lane', 'Postcard booths shut at dusk'], 0, 'ตอบ Yes, shops stay open until 9:00 P.M. (Merchants along Cedar Lane stay open late until 9:00 P.M.)'],
      ['Triple · Detail', 'How long is the Route A Brick Alleyway walking tour?', ['1.4 km', '2.1 km', '1.8 km', '4.0 km'], 0, 'ตอบ 1.4 km (ข้อมูลในตารางช่อง Length ของ Route A)'],
      ['Triple · Detail', 'How frequently do guided walks leave Fountain Plaza?', ['Every 30 minutes', 'Every hour', 'Strictly once at 6:00 P.M.', 'Every 15 minutes'], 0, 'ตอบ Every 30 minutes (บทความระบุ leave every half hour from Fountain Plaza)'],
      ['Triple · Detail', 'Who leads Mariko’s requested walking route?', ['Elena Vasquez', 'Tom Sato', 'David Osei', 'Mariko Sato'], 0, 'ตอบ Elena Vasquez (ตารางและอีเมลตรงกัน: Route A โดย Elena Vasquez)'],
    ]),

    // Triple Passage 3 (5 Qs: Invoice + Tracking Log + Email Claim)
    p7(2, 'm2-t3', [
      doc('invoice', 'Apex Kitchen Supply — Tax Invoice #AK-5502',
        [['Buyer', 'Harvest Bistro (Attn: Chef Leo)'], ['Date', 'August 1'], ['Payment', 'Corporate Card Paid']],
        [
          tbl(
            ['SKU', 'Description', 'Ordered Qty', 'Total'],
            [
              ['KN-40', '8-Inch Forged Chef Knife', '6', '$420'],
              ['CB-12', 'Maple End-Grain Cutting Board', '4', '$320'],
              ['AP-09', 'Heavy Canvas Apron (Navy)', '10', '$180'],
            ]),
          'Total Invoice: $920.00 (Ships in 2 separate cartons: Carton 1 = Knives & Boards; Carton 2 = Aprons).',
        ]),
      doc('table', 'CourierWay Parcel Log — Tracking Group #CW-88', null, [
        tbl(
          ['Parcel Ref', 'Weight', 'Depot Scan', 'Delivery Timestamp', 'Signed By'],
          [
            ['Box 1 of 2', '18.2 kg', 'Arrived East Hub Aug 2', 'Aug 3 · 9:14 A.M.', 'S. Romero (Kitchen)'],
            ['Box 2 of 2', '4.1 kg', 'Held Sorting Gate (Rerouted)', 'Pending · Est Aug 5', 'Not Yet Delivered'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'orders@apexkitchensupply.com'], ['From', 'Chef Leo <leo@harvestbistro.com>'], ['Date', 'August 3 · 1:00 P.M.'], ['Subject', 'Quick Question on Aug 3 Morning Delivery']],
        [
          'Hi Support,',
          'S. Romero signed calmly for our 18.2 kg carton this morning! Knives look great, though we only found two maple cutting boards wrapped inside instead of all four listed on Invoice #AK-5502. Could you check if the missing two boards fell into Carton 2, or did packing leave two behind in your warehouse?',
          'No panic over aprons—tracking already showed Carton 2 arriving Monday August 5 cleanly.',
          'Thanks,\nChef Leo',
        ]),
    ], [
      ['Triple · Synthesis', 'Which missing items triggered Chef Leo’s August 3 email?', ['Two maple cutting boards', 'Ten navy canvas aprons', 'Four forged chef knives', 'CourierWay tracking stickers'], 0, 'ตอบ Two maple cutting boards (สั่ง 4 แผ่นใน Carton 1 แต่แกะกล่องพบแค่ 2 แผ่น)'],
      ['Triple · Synthesis', 'Why is it unlikely that the missing cutting boards were packed inside Box 2?', ['Box 2 holds aprons only and weighs just 4.1 kg total', 'Box 2 already arrived August 2 cleanly', 'Box 2 went straight to municipal customs', 'Aprons cost $180 more than boards'], 0, 'ตอบ Box 2 holds aprons only and weighs just 4.1 kg... (Carton 2 ใส่ผ้ากันเปื้อนหนักรวมแค่ 4.1 kg ส่วนกล่องไม้+มีดหนัก 18.2 kg -> เขียง 2 อันน่าจะตกหล่นไม่ถูกแพ็ก)'],
      ['Triple · Detail', 'Who accepted and signed for Carton 1 on August 3?', ['S. Romero', 'Chef Leo', 'Apex Depot Driver', 'East Hub Clerk'], 0, 'ตอบ S. Romero (ตาราง Signed By: S. Romero (Kitchen))'],
      ['Triple · Math', 'What was the unit price of each Heavy Canvas Apron?', ['$18', '$32', '$70', '$80'], 0, 'ตอบ $18 ($180 สำหรับ 10 ผืน = ผืนละ $18)'],
      ['Triple · Detail', 'When is Carton 2 scheduled to arrive at Harvest Bistro?', ['Monday, August 5', 'August 1', 'August 2', 'August 3'], 0, 'ตอบ Monday, August 5 (ตารางระบุ Pending · Est Aug 5 และอีเมลระบุ arriving Monday August 5)'],
    ]),

    // ══════════════════ SET 3 (Q147–Q200: 54 Qs) ══════════════════
    // Single 1 (2 Qs)
    p7(3, 'm3-s1', [
      doc('memo', 'Staff Bulletin', [['To', 'Customer Care Representatives'], ['From', 'Support Operations'], ['Date', 'July 2'], ['Subject', 'New Quick-Refund Threshold']],
        [
          'Effective immediately, Tier-1 support representatives may authorize instant store-credit refunds up to $75 without routing tickets upward for supervisor sign-off.',
          'Tickets involving damaged courier deliveries over $75, or duplicate credit-card settlements of any size, must still escalate cleanly to Finance Queue B.',
        ]),
    ], [
      ['Single · Detail', 'When can Tier-1 support agents approve store credit on their own?', ['When the store credit amount is $75 or less', 'Whenever duplicate credit-card billing occurs', 'Only on courier claims above $75', 'With Finance Queue B approval first'], 0, 'ตอบ When the store credit amount is $75 or less (instant store-credit refunds up to $75 without supervisor sign-off)'],
      ['Single · Detail', 'Where must all duplicate card-billing tickets be sent?', ['Finance Queue B', 'Shipping Desk 1', 'Tier-1 Store Credit', 'IT Security Operations'], 0, 'ตอบ Finance Queue B (duplicate credit-card settlements of any size must still escalate to Finance Queue B)'],
    ]),

    // Single 2 (2 Qs)
    p7(3, 'm3-s2', [
      doc('notice', 'Building Access Reminder', [['Location', 'Crestline Tower']],
        [
          'Freight Elevator B Scheduled Cable Inspection',
          'Elevator B remains offline for safety steel-cable tensioning this Friday between 1:00 P.M. and 5:00 P.M. Mail couriers carrying heavy paper boxes should deliver before 12:30 P.M. or use South Service Ramp C during afternoon hours.',
          'Regular passenger elevators 1 through 4 in the main lobby will operate unaffected.',
        ]),
    ], [
      ['Single · Detail', 'Why will Freight Elevator B close Friday afternoon?', ['Safety cable tension checks are scheduled', 'South Service Ramp C is under renovation', 'Mail couriers requested faster passenger lifts', 'Floor 1 lobby tiles need polishing'], 0, 'ตอบ Safety cable tension checks are scheduled (safety steel-cable tensioning this Friday 1–5 P.M.)'],
      ['Single · Detail', 'How should afternoon couriers haul heavy boxes during the closure?', ['Via South Service Ramp C', 'Inside Lobby Passenger Lift 1', 'On Saturday morning only', 'Outside Main Glass Revolving Doors'], 0, 'ตอบ Via South Service Ramp C (use South Service Ramp C during afternoon hours)'],
    ]),

    // Single 3 (3 Qs) - Text Chat
    p7(3, 'm3-s3', [
      doc('chat', 'Lab Operations Chat', [['Channel', '#bio-bench-3'], ['Date', 'November 18']],
        [
          chat([
            ['Dr. Helen Cho', '9:12 A.M.', 'Just walked into Clean Room 3 and saw the red low-humidity indicator blinking on Sensor B2. Did overnight HVAC flush too dry?'],
            ['Marcus Hale', '9:15 A.M.', 'Checking building logs right now—looks like Steam Valve 2 jammed partially shut at 3:00 A.M. Already paged Facilities tech Omar.'],
            ['Dr. Helen Cho', '9:17 A.M.', 'Good catch! I am delaying our noon cell coating test cleanly until humidity stabilizes above 45 percent.'],
            ['Marcus Hale', '9:21 A.M.', 'Makes total sense. Omar just replied he is walking up with a replacement brass actuator now, should reset within twenty minutes.'],
          ]),
        ]),
    ], [
      ['Single · Cause', 'What triggered the red alert on Sensor B2?', ['A steam valve stuck partially closed overnight', 'Someone left Clean Room 3 doors open', 'Power failed across Floor 3 at noon', 'The cell coating tray leaked moisture'], 0, 'ตอบ A steam valve stuck partially closed... (Steam Valve 2 jammed partially shut at 3:00 A.M.)'],
      ['Single · Detail', 'What action does Dr. Helen Cho decide to take?', ['Postpone the noon cell coating test', 'Swap Sensor B2 personally', 'Cancel all November lab deliveries', 'Evacuate Floor 3 immediately'], 0, 'ตอบ Postpone the noon cell coating test (delaying our noon cell coating test until humidity stabilizes above 45%)'],
      ['Single · Inference', 'When will Omar likely finish resetting the steam valve?', ['Before 10:00 A.M.', 'Late Friday afternoon', 'Tomorrow morning', 'At 3:00 P.M.'], 0, 'ตอบ Before 10:00 A.M. (เวลา 9:21 A.M. แจ้งว่าจะเสร็จภายใน 20 นาที = ประมาณ 9:41 A.M.)'],
    ]),

    // Single 4 (3 Qs) - Schedule Table
    p7(3, 'm3-s4', [
      doc('table', 'Northport Waterfront Ferry — Summer Weekday Schedule', [['Policy', 'Hold e-ticket QR 10 mins before sailing']],
        [
          tbl(
            ['Route Code', 'Pier 1 Depart', 'Oak Island Arrive', 'Bike Slots', 'Vessel Class'],
            [
              ['F-101', '6:30 A.M.', '7:10 A.M.', '18', 'Fast Catamaran'],
              ['F-103', '8:15 A.M.', '9:05 A.M.', '30', 'Double-Deck Ferry'],
              ['F-105', '11:30 A.M.', '12:10 P.M.', '18', 'Fast Catamaran'],
              ['F-107', '4:45 P.M.', '5:35 P.M.', '30', 'Double-Deck Ferry'],
            ]),
        ]),
    ], [
      ['Single · Detail', 'Which morning departure carries up to 30 bicycles?', ['F-103', 'F-101', 'F-105', 'F-107'], 0, 'ตอบ F-103 (รอบเช้า 8:15 A.M. เป็น Double-Deck Ferry จุได้ 30 คัน ส่วน F-107 เป็นรอบบ่าย 4:45 P.M.)'],
      ['Single · Math', 'How much faster is Fast Catamaran crossing time compared with a Double-Deck Ferry?', ['10 minutes faster', '5 minutes faster', '15 minutes faster', '25 minutes faster'], 0, 'ตอบ 10 minutes faster (Fast Catamaran ใช้ 40 นาที 6:30->7:10 ส่วน Double-Deck ใช้ 50 นาที 8:15->9:05)'],
      ['Single · Detail', 'When should passengers have mobile QR tickets ready?', ['At least 10 minutes before departure', 'Only upon landing at Oak Island', 'One hour ahead of sailing', 'After boarding bicycle racks'], 0, 'ตอบ At least 10 minutes before departure (Hold e-ticket QR 10 mins before sailing)'],
    ]),

    // Single 5 (3 Qs) - Letter
    p7(3, 'm3-s5', [
      doc('letter', 'Official Notice to Tenants', [['From', 'Harbor Square Management'], ['To', 'Retail Suites 100–120'], ['Date', 'August 6']],
        [
          'Dear Merchants,',
          'Thank you for keeping sidewalk floral planters blooming cheerfully all summer! Starting Monday evening, August 12, city forestry arborists will prune tall elm canopy branches along West Promenade between 9:00 P.M. and 2:00 A.M.',
          'Though street closures happen well past boutique closing times, please tuck cloth sidewalk awnings cleanly upward Monday night and wheel out patio A-frame chalkboard signs before leaving so aerial lift trucks gain clear curb access.',
        ]),
    ], [
      ['Single · Detail', 'Why must retail owners retract awnings Monday night?', ['Tree-trimming aerial trucks need clear space near the curb', 'Heavy rain is forecast Monday afternoon', 'Sidewalk concrete will be repainted', 'West Promenade closes permanently'], 0, 'ตอบ Tree-trimming aerial trucks need clear space... (aerial lift trucks gain clear curb access เพื่อตัดแต่งกิ่งต้นเอล์ม)'],
      ['Single · Inference', 'Why did planners schedule tree work from 9:00 P.M. to 2:00 A.M.?', ['To avoid blocking stores during daytime shopping hours', 'City arborists work strictly on weekends', 'Elm trees drop pollen during mornings', 'Chalkboard signs glow brighter at night'], 0, 'ตอบ To avoid blocking stores... (street closures happen well past boutique closing times)'],
      ['Single · Detail', 'What else should store managers bring inside Monday night?', ['Patio A-frame chalkboard signs', 'Summer floral planters', 'Glass display showcases', 'Indoor cash drawers'], 0, 'ตอบ Patio A-frame chalkboard signs (wheel out/put away patio A-frame chalkboard signs before leaving)'],
    ]),

    // Single 6 (3 Qs) - Business News
    p7(3, 'm3-s6', [
      doc('article', 'Midwest Bakery Flour Mill Switches to Rail Hoppers', [['Source', 'Grain & Commerce Gazette']],
        [
          'Pioneer Heritage Flour doubled bulk deliveries across three southern pasta factories last quarter without adding a single diesel semi-truck to congested regional highways. Instead, the cooperative refurbished its 1960s private rail spur connecting golden prairie silos straight into city industrial yards.',
          'Clean sealed pneumatic rail hoppers move sixty tons of stone-ground durum semolina inside stainless bins untouched by humid outdoor weather, cutting bulk bagging waste to zero while lowering freight costs 19 percent.',
        ]),
    ], [
      ['Single · Detail', 'How did Pioneer Heritage Flour handle higher pasta-factory demand without more trucks?', ['By restoring an older railway spur track', 'By renting nearby downtown warehouses', 'By bagging flour into smaller retail cartons', 'By importing durum wheat by sea'], 0, 'ตอบ By restoring an older railway spur track (refurbished its 1960s private rail spur)'],
      ['Single · Benefit', 'What benefit does pneumatic hopper delivery provide besides lower freight expense?', ['It eliminates bulk packaging bag waste', 'It mills grain faster on trains', 'It cools pasta factories automatically', 'It triples highway speed limits'], 0, 'ตอบ It eliminates bulk packaging bag waste (cutting bulk bagging waste to zero)'],
      ['Single · Vocab', 'The word "untouched" in paragraph 2 is closest in meaning to ___.', ['unaffected', 'unpacked', 'unpaid', 'unmarked'], 0, 'ตอบ unaffected (untouched by humid outdoor weather = ไม่ได้รับผลกระทบจากความชื้นภายนอก)'],
    ]),

    // Single 7 (4 Qs) - Job Ad + [1]-[4]
    p7(3, 'm3-s7', [
      doc('ad', 'Careers at Apex BioMetrics — Clinical Data Coordinator', [['Location', 'Boston Medical Park (Full-Time)']],
        [
          'Join Apex BioMetrics to oversee multi-clinic wearable heart-sensor trial spreadsheets cleanly from recruitment through regulatory submission. [1] You will verify daily patient log timestamps, prepare clinic site audit binders, and brief lead cardiologists monthly.',
          'Qualifications:',
          lst([
            'Associate or bachelor’s degree in Health Informatics, Statistics, or Nursing',
            'Strong spreadsheet pivot-table and validation formula skills',
            'Clear written communication under strict HIPAA medical confidentiality rules',
          ]),
          '[2] Benefits cover complete dental and optical insurance, gym stipends, and 4 weeks accrued paid time off. [3] Email one combined PDF resume plus two professional references to talent@apexbiometrics.org noting Code CDC-09 in the subject line. [4]',
        ]),
    ], [
      ['Single · Detail', 'Which task belongs to the Clinical Data Coordinator role?', ['Briefing lead cardiologists on trial progress monthly', 'Manufacturing wearable wrist sensors', 'Performing emergency heart surgeries', 'Negotiating hospital real estate leases'], 0, 'ตอบ Briefing lead cardiologists... (brief lead cardiologists monthly)'],
      ['Single · Detail', 'How must applicants format their email submission?', ['Include code CDC-09 inside the email subject line', 'Mail certified school transcripts first', 'Send spreadsheet formulas as separate zip archives', 'Apply via phone interviews only'], 0, 'ตอบ Include code CDC-09... (noting Code CDC-09 in the subject line)'],
      ['Single · NOT', 'What is NOT listed among job qualifications?', ['Previous cardiology hospital surgery experience', 'Pivot-table spreadsheet ability', 'Knowledge of medical confidentiality standards', 'Degree in Health Informatics or related area'], 0, 'ตอบ Previous cardiology hospital surgery experience (ไม่ได้ระบุใน Qualifications)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does this sentence best fit? "Prior familiarity with electronic FDA data capture portals is a distinct plus."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจากรายการ Qualifications ทันที ก่อนกล่าวถึงหัวข้อสวัสดิการ Benefits)'],
    ]),

    // Single 8 (4 Qs) - Return / Policy
    p7(3, 'm3-s8', [
      doc('memo', 'Corporate IT Equipment Buyback Policy', [['Department', 'Technology Assets']],
        [
          'Whenever Engineering refreshes three-year-old MacBook or ThinkPad laptops, employees who currently operate those specific machines hold first option to purchase them personally at depreciated book rates rather than letting electronics sit idle.',
          'Steps:',
          lst([
            'IT wipes hard drives cleanly and installs a clean licensed operating system first.',
            'Personal company monitors and USB-C docks stay property of Headquarters and cannot be purchased.',
            'Prices set at 20 percent of original purchase invoice, deducted cleanly over one payroll cycle.',
            'Repurchased personal computers carry zero corporate Help Desk warranty after transfer.',
          ]),
        ]),
    ], [
      ['Single · Detail', 'Who receives first chance to buy three-year-old company laptops?', ['Employees already using those specific machines', 'External electronics recyclers', 'Any newly hired summer interns', 'IT technicians repairing keyboards'], 0, 'ตอบ Employees already using those specific machines (employees who currently operate those specific machines hold first option)'],
      ['Single · Detail', 'Which equipment CANNOT be bought under this policy?', ['Monitors and USB-C docks', 'Refreshed three-year-old ThinkPads', 'MacBooks with wiped drives', 'Cleanly licensed laptops'], 0, 'ตอบ Monitors and USB-C docks (monitors and USB-C docks stay property of Headquarters and cannot be purchased)'],
      ['Single · Inference', 'If a laptop originally cost the company $1,500, how much would an employee pay?', ['$300', '$1,200', '$150', '$750'], 0, 'ตอบ $300 (ราคาขายต่อ 20% ของราคาซื้อเดิม -> $1,500 × 20% = $300)'],
      ['Single · Detail', 'What must employees understand after completing the buyback?', ['IT Help Desk no longer supports the device', 'Monthly deductions continue for three years', 'The original operating system stays deleted', 'Devices must return before retirement'], 0, 'ตอบ IT Help Desk no longer supports... (carry zero corporate Help Desk warranty after transfer)'],
    ]),

    // Single 9 (5 Qs) - Feature Article
    p7(3, 'm3-s9', [
      doc('article', 'Micro-Hydro Turbines Bring Quiet Night Power to Mountain Canals', [['By', 'Elena Rossi'], ['Issue', 'Clean Engineering Today']],
        [
          'High-elevation alpine cheese dairies often spend hefty sums stringing exposed overhead power poles across avalanche valleys, yet freezing winter gales snap cables repeatedly every February. [1] Recently, three agricultural cooperatives in northern Italy began sliding sleek cylindrical water turbines directly inside existing snowmelt irrigation ditches.',
          'Unlike massive concrete river dams that halt migrating trout cleanly, low-head vortex turbines spin gently inside shallow two-meter sluice boxes without blocking natural fish movement or shifting gravel beds. [2] Falling water swirls naturally around stainless blades, producing steady 24-hour electricity year-round as long as canal currents keep flowing.',
          '"During peak summer snowmelt we actually generate surplus power that charges electric milking carts and delivery vans overnight," smiles cooperative director Marco Conti. [3] Since hardware sits tucked flush below stone canal walls, passing hikers barely notice turbines humming quietly beneath wooden footbridges.',
          'Four neighboring valley orchardists recently secured regional clean-energy grants to mount six identical units before winter frost returns. [4]',
        ]),
    ], [
      ['Single · Purpose', 'What is the main subject of the article?', ['Compact canal water turbines powering mountain farms', 'Problems caused by Italian cheese exports', 'Building concrete dams along northern rivers', 'Replacing electric vans with snowplows'], 0, 'ตอบ Compact canal water turbines... (กังหันน้ำขนาดเล็กในคลองชลประทานบนภูเขาช่วยผลิตไฟฟ้าให้ฟาร์ม)'],
      ['Single · Advantage', 'How do low-head vortex turbines protect river wildlife compared with large concrete dams?', ['They allow fish to pass without blocking water flow', 'They warm icy canal water in February', 'They run only during daytime hours', 'They eliminate snowmelt ditches altogether'], 0, 'ตอบ They allow fish to pass... (spin gently... without blocking natural fish movement)'],
      ['Single · Inference', 'Why did alpine dairies struggle with conventional overhead electrical lines?', ['Winter windstorms repeatedly broke valley cables', 'Cables interfered with hikers on wooden bridges', 'Fuel trucks refused climbing mountain roads', 'Trout farms owned river utility rights'], 0, 'ตอบ Winter windstorms repeatedly broke... (freezing winter gales snap cables repeatedly every February)'],
      ['Single · Vocab', 'The word "flush" in paragraph 3 is closest in meaning to ___.', ['even', 'bright', 'tall', 'noisy'], 0, 'ตอบ even (sit flush below walls = วางเสมอเรียบไปกับระดับแนวกำแพงหินไม่ยื่นเกะกะ)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does this sentence fit best? "Zero overhead utility lines means spring avalanches leave dairy power completely uninterrupted."', ['[3]', '[1]', '[2]', '[4]'], 0, 'ตอบ [3] (ขยายผลต่อจากผลิตไฟเองได้และไม่ต้องพึ่งสายไฟบนภูเขาที่มีหิมะถล่ม)'],
    ]),

    // Double Passage 1 (5 Qs: Web Page + Registration Inquiry Email)
    p7(3, 'm3-d1', [
      doc('webpage', 'Pacific UX Summit — Ticket Packages', [['Venue', 'Seattle Trade Forum · May 18–19']],
        [
          tbl(
            ['Pass Tier', 'Price', 'Includes'],
            [
              ['1-Day Friday Pass', '$195', 'Friday Keynotes + Design Expo Hall + Lunch'],
              ['2-Day Conference Pass', '$340', 'All Fri & Sat Talks + Expo + Video Recordings'],
              ['Full Workshop Pass', '$490', '2-Day Conference + Small-Group Prototyping Lab (Thurs May 17)'],
            ]),
          'Student / Educator Code EDU30 saves 30% cleanly on 1-Day and 2-Day passes (excludes Workshop Pass). Team bookings of 4+ passes receive one complimentary paper Design Fieldbook per guest.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'tickets@pacificuxsummit.org'], ['From', 'Dr. Kevin Cho <k.cho@designschool.edu>'], ['Date', 'April 10'], ['Subject', 'Group Registration Question']],
        [
          'Hi Registration Team,',
          'I teach interactive product prototyping at Pacific Design College and plan to register myself plus four senior students for the May 18–19 conference talks (5 attendees total). We cannot travel early enough on Thursday May 17 for hands-on workshop labs, so the standard Friday & Saturday conference pass works neatly.',
          'If I put all five 2-Day Conference Passes under one college credit card using EDU30, do our students still qualify for the printed Design Fieldbook bonus?',
          'Best,\nKevin Cho',
        ]),
    ], [
      ['Double · Synthesis', 'Which pass tier is Dr. Kevin Cho ordering for his group?', ['2-Day Conference Pass', 'Full Workshop Pass', '1-Day Friday Pass', 'Student Volunteer Badge'], 0, 'ตอบ 2-Day Conference Pass (ไม่สามารถไปวันพฤหัส Workshop ได้ จึงเลือก Friday & Saturday conference pass)'],
      ['Double · Math', 'What will the total discounted ticket charge be for all 5 attendees?', ['$1,190', '$1,700', '$1,470', '$2,450'], 0, 'ตอบ $1,190 (5 คน × $340 = $1,700; EDU30 ใช้ได้กับ 2-Day Pass ลด 30% -> 70% ของ $1,700 = $1,190)'],
      ['Double · Synthesis', 'Will Dr. Cho’s five attendees receive complimentary printed Design Fieldbooks?', ['Yes, because his group orders at least 4 passes', 'No, because EDU30 disqualifies free books', 'Only Kevin receives one as an educator', 'No, fieldbooks require the Thursday Workshop Pass'], 0, 'ตอบ Yes, because his group orders at least 4 passes (เงื่อนไข Team bookings of 4+ passes รับหนังสือฟรีคนละเล่ม ไม่มียกเว้นโค้ด EDU)'],
      ['Double · Detail', 'Why is the group skipping the Thursday May 17 lab?', ['Their travel schedule prevents arriving early enough Thursday', 'The Prototyping Lab requires coding laptops', 'Educators are barred from workshop suites', 'EDU30 fills lab waitlists first'], 0, 'ตอบ Their travel schedule... (cannot travel early enough on Thursday May 17)'],
      ['Double · NOT', 'Which benefit is NOT covered under the 2-Day Conference Pass?', ['The Thursday prototyping workshop lab', 'Saturday talks', 'Video recordings', 'Design Expo Hall access'], 0, 'ตอบ The Thursday prototyping workshop lab (เฉพาะ Full Workshop Pass จึงจะได้คลาสวันพฤหัส)'],
    ]),

    // Double Passage 2 (5 Qs: Memo + Expense Policy Table)
    p7(3, 'm3-d2', [
      doc('table', 'Northwind Engineering — Client Hospitality Allowances', [['Updated', 'Effective July 1']],
        [
          tbl(
            ['Event Type', 'Max Daily Cap / Guest', 'Itemized Receipt Required?', 'VP Approval Needed?'],
            [
              ['Coffee / Quick Pastry', '$18', 'No (under $15)', 'No'],
              ['Client Working Lunch', '$45', 'Yes', 'No'],
              ['Executive Client Dinner', '$110', 'Yes', 'Yes if group exceeds 4 people'],
            ]),
        ]),
      doc('email', 'E-mail Message',
        [['To', 'expenses@northwind-eng.com'], ['From', 'Nadia Alverez'], ['Date', 'July 14'], ['Subject', 'Expense Clarification — Chicago Client Meal']],
        [
          'Hi Finance Team,',
          'Just logged my trip expenses from Thursday’s bridge sensor presentation in Chicago. Afterward, I hosted five visiting city bridge inspectors along with myself (6 people total) at Riverhouse Grill, totaling $540 ($90 per diner cleanly).',
          'I uploaded the full itemized restaurant receipt under Expense Claim #EX-209. Before payroll processes Friday payouts, should I ask VP Marcus Vance for written sign-off even though my per-person amount stayed safely under the $110 cap?',
          'Thanks,\nNadia Alverez',
        ]),
    ], [
      ['Double · Synthesis', 'Does Nadia need VP Marcus Vance’s approval on Claim #EX-209?', ['Yes, because more than four people attended dinner', 'No, because per-person spending stayed under $110', 'No, because itemized receipts waive VP review', 'Yes, because Chicago meals exclude lunch caps'], 0, 'ตอบ Yes, because more than four people... (มีผู้ร่วมโต๊ะ 6 คน > 4 คน ตามกติกา Yes if group exceeds 4 people)'],
      ['Double · Detail', 'How much did Nadia spend per diner at Riverhouse Grill?', ['$90', '$45', '$110', '$18'], 0, 'ตอบ $90 ($540 ÷ 6 คน = $90 ต่อคน)'],
      ['Double · Detail', 'Why did Nadia upload an itemized restaurant receipt?', ['Working lunches and client dinners always require itemized receipts', 'Riverhouse Grill overcharged taxes', 'Expenses over $100 prohibit credit cards', 'Payroll requested extra coffee copies'], 0, 'ตอบ Working lunches and client dinners... (ตารางระบุ Client Dinner -> Itemized Receipt Required: Yes)'],
      ['Double · Inference', 'When would a receipt NOT be required under company policy?', ['On a $12 coffee check with a client', 'At any working lunch over $30', 'On a two-person dinner totaling $150', 'For every Friday payout claim'], 0, 'ตอบ On a $12 coffee check... (Coffee / Quick Pastry under $15 -> No)'],
      ['Double · Detail', 'What city did Nadia visit for her bridge sensor presentation?', ['Chicago', 'Detroit', 'Portland', 'Toronto'], 0, 'ตอบ Chicago (Thursday’s bridge sensor presentation in Chicago)'],
    ]),

    // Triple Passage 1 (5 Qs: Web Catalog + Chat + Invoice)
    p7(3, 'm3-t1', [
      doc('ad', 'OakLeaf Acoustic Studio Gear — Acoustic Foam Panels', [['Direct Dispatch', 'Ships daily from Chicago']],
        [
          tbl(
            ['Panel Kit', 'Coverage / Box', 'Thickness', 'Price / Box', 'Mounting Adhesive Included?'],
            [
              ['WedgePack 12', '12 sq ft', '2.5 cm', '$48', 'No (buy strips separately)'],
              ['ProStudio 24', '24 sq ft', '5.0 cm', '$105', 'Yes (heavy foam tape tabs)'],
              ['BassTrap Corner 4', '4 corners', '25 cm wedge', '$130', 'Yes (velcro clips)'],
            ]),
          'Adhesive Command Tab Packs (36 tabs): $14 each. Free ground parcel shipping on orders $200+.',
        ]),
      doc('chat', 'Design Team Messages', [['Thread', 'Podcast Booth Build'], ['Date', 'September 2']],
        [
          chat([
            ['Tara Reed', '10:02 A.M.', 'Just measured our new interview booth walls! Need roughly 48 sq ft of 5 cm thick wall foam plus one set of BassTraps for the corners.'],
            ['Devon Brooks', '10:06 A.M.', 'Cool, ordering right now—glad ProStudio boxes include mounting tabs so we do not need separate strip packs.'],
          ]),
        ]),
      doc('invoice', 'OakLeaf Order Confirmation #OL-8321',
        [['Buyer', 'Devon Brooks (ClearCast Media)'], ['Date', 'September 2']],
        [
          'Items Billed: 2 × ProStudio 24 ($210) + 1 × BassTrap Corner 4 ($130). Ground Shipping: Free ($0). Order Total: $340.00. Note: BassTrap corners ship one day later separately from Ohio depot.',
        ]),
    ], [
      ['Triple · Synthesis', 'Why did Devon Brooks order two boxes of ProStudio 24 rather than WedgePack 12?', ['Tara needed 48 sq ft at 5.0 cm thickness', 'WedgePack 12 costs more per square foot', 'ProStudio 24 covers ceiling corners only', 'BassTraps work strictly with WedgePack'], 0, 'ตอบ Tara needed 48 sq ft at 5.0 cm thickness (ต้องการพื้นที่ 48 ตร.ฟุต หนา 5 ซม. และProStudio กล่องละ 24 ตร.ฟุต หนา 5.0 ซม.)'],
      ['Triple · Synthesis', 'Why did Devon pay $0 for ground parcel delivery?', ['The $340 order total exceeded the $200 minimum', 'Corner BassTraps ship free automatically', 'Chicago buyers get permanent free freight', 'Tara used an educator discount coupon'], 0, 'ตอบ The $340 order total exceeded... (ส่งฟรีเมื่อยอดสั่งซื้อ $200+ ยอดรวม $340)'],
      ['Triple · Inference', 'Why did Devon skip ordering the $14 Adhesive Command Tab Packs?', ['Both chosen kits already include mounting hardware', 'ClearCast booth walls use wooden nails', 'Devon wanted corners glued permanently', 'Adhesive packs ran out of Chicago stock'], 0, 'ตอบ Both chosen kits already include mounting hardware (ProStudio มี tape tabs, BassTrap มี velcro clips)'],
      ['Triple · Detail', 'Which item on Order #OL-8321 arrives separately?', ['BassTrap Corner 4', 'ProStudio 24 Box 1', 'Command Tab Packs', 'Printed installation manual'], 0, 'ตอบ BassTrap Corner 4 (Note: BassTrap corners ship one day later separately from Ohio depot)'],
      ['Triple · Math', 'What would it have cost to buy two Adhesive Tab Packs separately?', ['$28', '$14', '$42', '$48'], 0, 'ตอบ $28 ($14 × 2 = $28)'],
    ]),

    // Triple Passage 2 (5 Qs: Memo + Software Guide + Email)
    p7(3, 'm3-t2', [
      doc('memo', 'IT Migration Memo — Switching File Storage to DriveVault', [['To', 'All Architecture Staff'], ['From', 'Cloud Operations'], ['Date', 'May 3']],
        [
          'Our legacy local Z: Network Drive reaches read-only archival freeze on May 24 at 5:00 P.M. Every active floor plan folder must move into our cloud DriveVault spaces beforehand so regional offices keep instant remote editing.',
        ]),
      doc('table', 'DriveVault Team Workspace Directory', null, [
        tbl(
          ['Department', 'Vault Folder Name', 'Max Single File Size', 'External Client Share?'],
          [
            ['Structural CAD', '/vault-cad-26', '5 GB', 'View-Only Link Only'],
            ['Marketing Decks', '/vault-brand', '1 GB', 'Yes (Password Protected)'],
            ['Accounting & Tax', '/vault-finance-priv', '500 MB', 'Disabled (Internal Strict)'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'it-cloud@northarch.com'], ['From', 'Samir Patel <s.patel@northarch.com>'], ['Date', 'May 20'], ['Subject', 'Help Moving Museum CAD Folder & Client Access']],
        [
          'Hi Cloud Ops,',
          'Quick migration check: I am uploading our 3.2 GB Westside Museum Revit model into DriveVault today ahead of Friday’s Z: freeze. Everything uploaded nicely inside /vault-cad-26 under the 5 GB limit!',
          'One small snag—the museum’s external electrical engineering firm asked for full download-and-edit rights inside /vault-cad-26 directly so they can save live conduit changes. Can IT enable external edit links on that folder temporarily?',
          'Thanks,\nSamir Patel',
        ]),
    ], [
      ['Triple · Synthesis', 'How much headroom did Samir stay below the max file limit when uploading his 3.2 GB Revit file?', ['1.8 GB under the limit', '800 MB under the limit', '3.2 GB under the limit', '2.7 GB over the limit'], 0, 'ตอบ 1.8 GB under the limit (/vault-cad-26 รองรับสูงสุด 5 GB ลบไฟล์ 3.2 GB = เหลือ 1.8 GB)'],
      ['Triple · Synthesis', 'Based on the Directory policy, how will Cloud Ops likely respond to Samir’s external edit request?', ['They cannot grant full external edits because /vault-cad-26 limits guests to View-Only', 'They will shift the museum model into /vault-finance-priv for full editing', 'They will lift all password rules temporarily', 'They will revert Z: drive until August'], 0, 'ตอบ They cannot grant full external edits... (ตารางระบุ External Client Share ของ /vault-cad-26 คือ View-Only Link Only)'],
      ['Triple · Inference', 'When will files still stored on the old Z: Network Drive become locked against saving changes?', ['On May 24 at 5:00 P.M.', 'On May 3', 'On May 20', 'Immediately this morning'], 0, 'ตอบ On May 24 at 5:00 P.M. (reaches read-only archival freeze on May 24 at 5:00 P.M.)'],
      ['Triple · Detail', 'Which DriveVault folder forbids sharing links with outside partners entirely?', ['/vault-finance-priv', '/vault-cad-26', '/vault-brand', 'Legacy Z: Network Drive'], 0, 'ตอบ /vault-finance-priv (Disabled Internal Strict)'],
      ['Triple · Detail', 'Why does an external engineering partner want folder access?', ['To upload live electrical conduit updates', 'To archive old 2020 tax forms', 'To compress marketing slide decks', 'To delete read-only CAD models'], 0, 'ตอบ To upload live electrical conduit updates (so they can save live conduit changes)'],
    ]),

    // Triple Passage 3 (5 Qs: Airline Ad + Booking + Support Email)
    p7(3, 'm3-t3', [
      doc('ad', 'SkyNordic Airlines — FlexBusiness Fare Tiers', [['Routes', 'Nordic & Western Europe']],
        [
          tbl(
            ['Fare Class', 'Checked Bag', 'Date Changes', 'Lounge Entry', 'Priority Boarding'],
            [
              ['Eco Saver', '0 (Carry-on only)', '$65 fee', 'No', 'No'],
              ['Eco Smart', '1 × 23 kg included', '$30 fee', 'No', 'Yes'],
              ['Flex Business', '2 × 23 kg included', 'Free ($0)', 'Yes (All hubs)', 'Yes'],
            ]),
        ]),
      doc('invoice', 'SkyNordic E-Ticket Receipt #SN-4012',
        [['Passenger', 'Anna Kowalski'], ['Booking Date', 'January 12'], ['Ticket Class', 'Eco Smart']],
        [
          'Outbound Flight SN204: Oslo (OSL) -> Amsterdam (AMS) · February 3 · 7:15 A.M.',
          'Total Paid: €189 (Includes 1 × 23 kg checked bag). Assigned Seat: 14A.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'support@skynordic.eu'], ['From', 'Anna Kowalski'], ['Date', 'January 28'], ['Subject', 'Flight Change Request — #SN-4012']],
        [
          'Hello SkyNordic Team,',
          'Our Amsterdam architecture workshop shifted cleanly by one day, so I need to move Flight SN204 from February 3 onto February 4 at the exact same 7:15 A.M. departure time. Also, since we built a heavier concrete timber model in Oslo yesterday, could I add a second 23 kg checked suitcase onto this updated ticket—or how much would checking bag #2 cost at the airport counter?',
          'Many thanks,\nAnna Kowalski',
        ]),
    ], [
      ['Triple · Synthesis', 'How much change fee does Anna owe for shifting her flight from February 3 to February 4?', ['$30', '$65', '$0 (Free)', '€189'], 0, 'ตอบ $30 (ใบเสร็จระบุ Anna ถือตั๋ว Eco Smart ซึ่งตารางระบุค่าเปลี่ยนวัน $30 fee)'],
      ['Triple · Synthesis', 'Which statement accurately describes Anna’s baggage allowance on Ticket #SN-4012?', ['She already has one 23 kg checked bag included and must pay extra for a second', 'She carries zero checked bags and pays for all luggage', 'She receives two free 23 kg bags under Eco Smart', 'Priority baggage waives second-bag costs'], 0, 'ตอบ She already has one 23 kg checked bag included... (Eco Smart รวมกระเป๋าโหลด 1 ใบ 23 กก. หากโหลดใบที่ 2 ต้องจ่ายเพิ่ม ต่างจาก Flex Business ที่ให้ 2 ใบ)'],
      ['Triple · NOT', 'Which privilege is NOT included with Anna’s current Eco Smart ticket?', ['Airport lounge access', 'Priority boarding', 'One 23 kg checked bag', 'Lower change fees than Eco Saver'], 0, 'ตอบ Airport lounge access (Eco Smart ได้ Priority Boarding และกระเป๋า 1 ใบ แต่ Lounge Entry คือ No)'],
      ['Triple · Detail', 'Why does Anna need to travel to Amsterdam one day later?', ['Her architecture workshop date moved to a day later', 'Oslo runway fog delayed February 3 flights', 'Seat 14A became unavailable', 'Her second suitcase got damaged'], 0, 'ตอบ Her architecture workshop date moved... (workshop shifted cleanly by one day)'],
      ['Triple · Detail', 'When was Anna’s original e-ticket booked?', ['January 12', 'January 28', 'February 3', 'February 4'], 0, 'ตอบ January 12 (Booking Date: January 12)'],
    ]),

    // ══════════════════ SET 4 (Q147–Q200: 54 Qs) ══════════════════
    // Single 1 (2 Qs)
    p7(4, 'm4-s1', [
      doc('email', 'E-mail Message',
        [['To', 'Building 4 Tenants'], ['From', 'Plaza Management'], ['Date', 'September 5'], ['Subject', 'Courtyard Window Washing']],
        [
          'Exterior window-washing crews will scale north glass facades on Building 4 starting Thursday, September 12 from 8:00 A.M. to 3:00 P.M.',
          'Please keep interior office window blinds lowered slightly and lock balcony tilt latches securely before leaving Wednesday evening so workers move smoothly down drops without disturbing private calls.',
        ]),
    ], [
      ['Single · Detail', 'When will window washers work on Building 4?', ['Thursday, September 12', 'Wednesday evening, September 11', 'September 5', 'All weekend'], 0, 'ตอบ Thursday, September 12 (starting Thursday, September 12 from 8:00 A.M. to 3:00 P.M.)'],
      ['Single · Detail', 'What are tenants asked to do before leaving Wednesday night?', ['Lock balcony latches and draw blinds partially closed', 'Move office desks away from glass facades', 'Leave courtyard balcony doors unlatched', 'Clear roof drains near Floor 4'], 0, 'ตอบ Lock balcony latches... (keep blinds lowered slightly and lock balcony tilt latches securely)'],
    ]),

    // Single 2 (2 Qs)
    p7(4, 'm4-s2', [
      doc('ad', 'Promotional Flyer — Harbor Optical Studio', [['Offer Valid', 'Through November 30']],
        [
          'Clearer Vision for Screen-Heavy Workdays!',
          'Upgrade any clear prescription lens pair with blue-light glare filters for just $35 (regularly $60) throughout November. Bring a current optometrist prescription or book a complimentary 20-minute digital eye screening online.',
          'Walk-in frame styling consultations open daily without appointments.',
        ]),
    ], [
      ['Single · Detail', 'How much do customers save on blue-light filters during November?', ['$25', '$35', '$60', '$20'], 0, 'ตอบ $25 (ลดจากราคาปกติ $60 เหลือ $35 = ประหยัด $25)'],
      ['Single · Detail', 'Which service requires an online reservation rather than walking in?', ['A 20-minute digital eye screening', 'Frame styling consultations', 'Picking up replacement nose pads', 'Checking November flyer dates'], 0, 'ตอบ A 20-minute digital eye screening (book screening online ส่วน frame styling consultations เป็น walk-in without appointments)'],
    ]),

    // Single 3 (3 Qs) - Chat
    p7(4, 'm4-s3', [
      doc('chat', 'Bakery Supply Chat', [['Thread', '#morning-prep'], ['Date', 'October 20']],
        [
          chat([
            ['Chef Nina', '6:15 A.M.', 'Heads up team—Oven Rack 2 stalled mid-cycle at 195 degrees. Croissant trays are backing up smoothly on Rack 1 though.'],
            ['Owen Sato', '6:18 A.M.', 'Bummer! Did the digital timer chime reset or is the bottom heating coil completely dark?'],
            ['Chef Nina', '6:21 A.M.', 'Bottom coil stays dark. Could you ring BakerTech emergency service so they send a van before noon?'],
            ['Owen Sato', '6:24 A.M.', 'On the phone with their dispatcher now! Until they arrive, let us split noon sandwich baguettes onto the smaller deck oven beside Sink 1.'],
          ]),
        ]),
    ], [
      ['Single · Problem', 'What issue is happening with Oven Rack 2?', ['Its lower heating element stopped warming', 'Its door timer refuses to chime', 'Croissants burned above 220 degrees', 'Oven Rack 1 blocked Dock doors'], 0, 'ตอบ Its lower heating element stopped warming (Bottom coil stays dark)'],
      ['Single · Detail', 'What backup solution does Owen suggest for baking baguettes?', ['Dividing batches into the smaller deck oven', 'Canceling noon sandwich deliveries', 'Raising Rack 1 heat past 250 degrees', 'Buying rolls from another bakery'], 0, 'ตอบ Dividing batches into the smaller deck oven (split noon baguettes onto the smaller deck oven beside Sink 1)'],
      ['Single · Intent', 'What is Owen doing at 6:24 A.M.?', ['Calling the repair company for a technician visit', 'Inspecting Oven Rack 2 fuses personally', 'Cleaning flour trays beside Sink 1', 'Delivering croissants downtown'], 0, 'ตอบ Calling the repair company... (On the phone with BakerTech dispatcher now)'],
    ]),

    // Single 4 (3 Qs) - Table / Price Sheet
    p7(4, 'm4-s4', [
      doc('table', 'Metro Copy & Print — Thesis & Corporate Binding Rates', [['Turnaround', 'Same-day ready if ordered before 1:00 P.M.']],
        [
          tbl(
            ['Binding Style', 'Max Pages', 'Unit Cost (1–9 Copies)', 'Bulk Rate (10+ Copies)'],
            [
              ['Plastic Spiral Coil', '220', '$4.50', '$3.80'],
              ['Hardcover Linen Case', '350', '$18.00', '$14.50'],
              ['Saddle Stitch Booklet', '64', '$2.20', '$1.75'],
            ]),
          'Add heavy frosted vinyl front covers to any Spiral Coil order for +$1.00 per book.',
        ]),
    ], [
      ['Single · Detail', 'Which binding method supports a 280-page corporate handbook?', ['Hardcover Linen Case', 'Plastic Spiral Coil', 'Saddle Stitch Booklet', 'Frosted Vinyl Only'], 0, 'ตอบ Hardcover Linen Case (รับได้สูงสุด 350 หน้า ส่วน Spiral Coil สูงสุด 220 และ Saddle Stitch สูงสุด 64)'],
      ['Single · Math', 'How much would 10 Plastic Spiral Coil copies WITH frosted vinyl covers cost together?', ['$48.00', '$55.00', '$38.00', '$45.00'], 0, 'ตอบ $48.00 (เรทจำนวนมาก 10+ เล่ม = $3.80 + ค่าปกใส $1.00 = $4.80/เล่ม × 10 เล่ม = $48.00)'],
      ['Single · Detail', 'When must orders arrive to qualify for same-day finishing?', ['Before 1:00 P.M.', 'After 4:00 P.M.', 'Twenty-four hours ahead', 'On Monday mornings'], 0, 'ตอบ Before 1:00 P.M. (Same-day ready if ordered before 1:00 P.M.)'],
    ]),

    // Single 5 (3 Qs) - Email Memo
    p7(4, 'm4-s5', [
      doc('email', 'E-mail Message',
        [['To', 'Field Sales Directors'], ['From', 'Marketing Analytics'], ['Date', 'June 9'], ['Subject', 'Updated Trade Lead Tagging']],
        [
          'During May regional expos, several sales reps scanned attendee badges into CRM without tagging which specific machinery demo interested the visitor. Without product tags, automated follow-up brochures sent out generic links, lowering reply rates slightly.',
          'Starting at next Tuesday’s Dallas Show, make sure tablet scanner drop-downs have one specific equipment code checked before hitting Save Lead so Marketing triggers tailored PDF specs automatically within one hour.',
        ]),
    ], [
      ['Single · Cause', 'Why did May email reply rates drop slightly?', ['Scanned leads lacked specific product tags, triggering generic emails', 'Tablet barcode scanners ran out of power', 'Brochure PDFs expired before May expos ended', 'Attendee emails were typed manually wrong'], 0, 'ตอบ Scanned leads lacked specific product tags... (without tagging which demo interested visitor -> generic links -> lowering reply rates)'],
      ['Single · Detail', 'Where is the sales team exhibiting next Tuesday?', ['In Dallas', 'In Chicago', 'In Boston', 'In Seattle'], 0, 'ตอบ In Dallas (next Tuesday’s Dallas Show)'],
      ['Single · Detail', 'How quickly does Marketing send tailored specification PDFs once leads are tagged?', ['Within one hour', 'After the expo closes Friday', 'Every Monday morning', 'Two business days later'], 0, 'ตอบ Within one hour (triggers tailored PDF specs automatically within one hour)'],
    ]),

    // Single 6 (3 Qs) - News Brief
    p7(4, 'm4-s6', [
      doc('article', 'Harbor Ferry Fleet Adds Quiet Hybrid Electric Hulls', [['Location', 'Bergen Maritime Notes']],
        [
          'Commuters riding FjordLink ferries across western harbor coves welcomed the sleek silent BlueWave 4 passenger boat yesterday. Pairing lightweight aluminum catamaran hulls with rapid shore-dock pantograph battery chargers, BlueWave 4 tops up depleted cells cleanly in twelve minutes while foot passengers walk off and board.',
          'Captains report cutting yearly diesel consumption nearly 65 percent per vessel, slashing harbor exhaust odors along waterfront fish cafes while retaining identical 28-knot express cruising speeds.',
        ]),
    ], [
      ['Single · Detail', 'How does BlueWave 4 recharge between harbor trips?', ['Quickly in twelve minutes while passengers exchange at docks', 'Overnight using onboard diesel generators', 'Through underwater tidal wires at sea', 'Only during monthly dry-dock repairs'], 0, 'ตอบ Quickly in twelve minutes... (tops up depleted cells cleanly in twelve minutes while foot passengers walk off and board)'],
      ['Single · Detail', 'How does vessel speed compare with older diesel ferries?', ['It maintains the same 28-knot cruising speed', 'It sails 12 percent slower along coves', 'It travels twice as fast to harbor cafes', 'Its aluminum hull restricts top knots'], 0, 'ตอบ It maintains the same... (retaining identical 28-knot express cruising speeds)'],
      ['Single · Vocab', 'The word "slashing" in paragraph 2 is closest in meaning to ___.', ['sharply reducing', 'carefully measuring', 'gradually replacing', 'openly ignoring'], 0, 'ตอบ sharply reducing (slashing harbor exhaust odors = ลดกลิ่นควันเสียลงอย่างฮวบฮาบ)'],
    ]),

    // Single 7 (4 Qs) - Job Ad + [1]-[4]
    p7(4, 'm4-s7', [
      doc('ad', 'Job Opening — Botanical Park Operations Coordinator', [['Organization', 'Meadowbrook Conservatory'], ['Schedule', 'Tue–Sat (Full-Time)']],
        [
          'Meadowbrook Conservatory seeks an enthusiastic Operations Coordinator to manage daily visitor gate teams, coordinate school field trip buses, and inspect glasshouse walking paths for safety. [1] You will draft weekend volunteer rosters and collaborate smoothly with catering leads during botanical evening weddings.',
          'Ideal Background:',
          lst([
            'Two+ years supervising retail, museum, or hospitality frontline teams',
            'Calm interpersonal composure managing busy weekend entry crowds',
            'First-aid certification or willingness to complete training within 30 days of hire',
          ]),
          '[2] Compensation includes full health benefits, retirement matching, and free family conservatory passes year-round. [3] Submit resume plus a brief statement of hospitality strengths via jobs.meadowbrook.org by April 19. [4]',
        ]),
    ], [
      ['Single · Detail', 'What days make up the standard weekly work schedule?', ['Tuesday through Saturday', 'Monday through Friday', 'Wednesday through Sunday', 'Friday through Tuesday'], 0, 'ตอบ Tuesday through Saturday (Schedule: Tue–Sat Full-Time)'],
      ['Single · Detail', 'Who does this role collaborate with during evening conservatory weddings?', ['Catering leads', 'Bus mechanics', 'Botanical landscape architects', 'Municipal accountants'], 0, 'ตอบ Catering leads (collaborate smoothly with catering leads during evening weddings)'],
      ['Single · Inference', 'Is pre-existing first-aid certification strictly required on the application date?', ['No, hires may obtain certification within their first month', 'Yes, resumes lacking cards are rejected immediately', 'Only security managers carry first-aid cards', 'Training happens after six months'], 0, 'ตอบ No, hires may obtain certification... (or willingness to complete training within 30 days of hire)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best belong? "Knowledge of digital POS ticketing tablets is also welcomed."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจากรายการ Ideal Background เพื่อเพิ่มคุณสมบัติเสริมที่ยินดีรับ ก่อนเข้าสู่ค่าตอบแทนสวัสดิการ)'],
    ]),

    // Single 8 (4 Qs) - Instruction Manual Excerpt
    p7(4, 'm4-s8', [
      doc('memo', 'Quick-Setup Care Guide — Ceramic Aroma Diffuser S8', [['Support', 'help@nordicair.co']],
        [
          'Enjoy quiet cool mist across meeting rooms up to 40 square meters using ultrasonic ceramic vibration.',
          'Setup Rules:',
          lst([
            'Set base unit squarely onto a waterproof flat tray—never rest directly atop unvarnished oak desks.',
            'Fill water chamber cleanly using room-temperature tap or filtered water up to the 300 ml MAX indicator line.',
            'Add strictly 3 to 5 drops of pure plant oil; thick sugary perfume syrups clog stainless piezo discs.',
            'Press the timer dial once for continuous 6-hour mist or twice for 30-second intermittent cycles lasting 12 hours.',
          ]),
        ]),
    ], [
      ['Single · Detail', 'Where should users avoid placing the diffuser directly?', ['Unfinished wooden desk surfaces', 'Waterproof ceramic saucers', 'Meeting tables near wall outlets', 'Flat kitchen stone counters'], 0, 'ตอบ Unfinished wooden desk surfaces (never rest directly atop unvarnished oak desks)'],
      ['Single · Detail', 'How does pressing the timer dial twice operate the diffuser?', ['It runs on intermittent 30-second bursts for up to 12 hours', 'It shuts off heating coils automatically after 6 hours', 'It doubles ultrasonic mist pressure', 'It rinses the 300 ml water chamber'], 0, 'ตอบ It runs on intermittent... (press twice for 30-second intermittent cycles lasting 12 hours)'],
      ['Single · Cause', 'Why does the guide warn against perfume syrups?', ['Heavy sweet liquids block ultrasonic mist components', 'They evaporate faster than 300 ml water', 'Oak desks absorb sugary mist drops', 'They disable timer dial LED lights'], 0, 'ตอบ Heavy sweet liquids block... (thick sugary perfume syrups clog stainless piezo discs)'],
      ['Single · Vocab', 'The word "squarely" in rule 1 is closest in meaning to ___.', ['steadily and flatly', 'loudly and quickly', 'temporarily', 'diagonally'], 0, 'ตอบ steadily and flatly (set squarely = วางให้ตรงมั่นคงเต็มฐาน)'],
    ]),

    // Single 9 (5 Qs) - Long Feature Article
    p7(4, 'm4-s9', [
      doc('article', 'Modular Office Furniture Cuts Corporate Move Budgets in Half', [['By', 'David Kwon'], ['Journal', 'Commercial Spaces Review']],
        [
          'Whenever fast-growing tech tenants outgrow leased suites and sign larger floor plans across town, conventional nailed-together reception desks and built-in millwork shelves routinely wind up splintered inside construction dumpsters. [1] Traditional custom carpentry rarely survives disassembly intact because screws glue tightly inside particleboard seams.',
          'Interior furniture builder WorkGrid is flipping that disposable cycle upside down with snap-pin birch-ply partitions, acoustic felt walls, and aluminum desk frames assembled solely using standardized brass cam locks. When a 40-person studio relocates buildings over a holiday weekend, movers simply pop latches open cleanly with hex keys, stack flat wall panels onto rolling carts, and click identical desks together Monday morning inside new offices. [2]',
          '"Last autumn, fintech firm Kestrel Cloud carried 95 percent of its entire meeting room carpentry cleanly across three city blocks without buying a single new plywood panel," recalls project lead Sofia Ramos. [3] Avoiding demolition crews saved Kestrel nearly $68,000 in new contractor build-outs while keeping four tons of laminated timber out of regional landfills.',
          'Commercial property landlords increasingly favor modular lease interiors as well because vacating companies hand back clean, unscarred concrete floors quickly without costly wall patching. [4]',
        ]),
    ], [
      ['Single · Purpose', 'What problem does WorkGrid’s modular furniture solve?', ['Waste and expense from demolishing office interiors during company moves', 'Lack of parking space near downtown buildings', 'High shipping costs for imported steel screws', 'Slow internet speeds inside co-working spaces'], 0, 'ตอบ Waste and expense... (ลดขยะและงบก่อสร้างใหม่เวลาย้ายออฟฟิศ ไม่ต้องทุบทิ้งเหมือนงานไม้บิลท์อินเดิม)'],
      ['Single · Detail', 'How are WorkGrid walls and frames joined together?', ['With standardized brass cam locks and hex keys', 'Using industrial epoxy glue on seams', 'By welding aluminum joints on site', 'With permanent drywall nails'], 0, 'ตอบ With standardized brass cam locks... (assembled solely using standardized brass cam locks ... pop latches with hex keys)'],
      ['Single · Inference', 'Why do commercial landlords appreciate modular tenant build-outs?', ['Leaving tenants return floors cleanly without wall repair damage', 'Tenants stay locked into twenty-year contracts', 'Landlords collect demolition fees from WorkGrid', 'Concrete floors absorb acoustic noise better'], 0, 'ตอบ Leaving tenants return floors cleanly... (hand back clean, unscarred concrete floors quickly without costly wall patching)'],
      ['Single · Vocab', 'The word "splintered" in paragraph 1 is closest in meaning to ___.', ['broken into scraps', 'polished cleanly', 'stacked neatly', 'painted gray'], 0, 'ตอบ broken into scraps (splintered inside dumpsters = พังแตกเป็นเศษชิ้นส่วนทิ้งถังขยะ)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Workers needed barely six hours to reassemble four enclosed phone booths and twelve worktables."', ['[3]', '[1]', '[2]', '[4]'], 0, 'ตอบ [3] (ต่อจากความสำเร็จการย้ายของบริษัท Kestrel Cloud ทันที เพื่อขยายเวลาที่ใช้จริงในการประกอบคืน)'],
    ]),

    // Double Passage 1 (5 Qs: Web Event Page + Email)
    p7(4, 'm4-d1', [
      doc('webpage', 'Bayside Culinary Expo — Exhibitor Shipping & Cold Storage Guide', [['Dates', 'July 19–21'], ['Venue', 'Pier 8 Exhibition Center']],
        [
          'Freight Rules:',
          lst([
            'Dry packaged goods cartons may ship cleanly to Pier 8 Warehouse starting July 15 (no handling charge for shipments under 150 kg).',
            'Refrigerated or frozen samples MUST reserve cold-locker space ($45/day) on Portal ExhibitorHub prior to July 10.',
            'Electric booth hookups (110V) cost $70 if ordered online before July 12 or $105 onsite.',
          ]),
        ]),
      doc('email', 'E-mail Message',
        [['To', 'ops@baysideculinary.org'], ['From', 'Kenji Takahashi <k.takahashi@artisangelato.jp>'], ['Date', 'July 13'], ['Subject', 'Late Arrival Question — Booth 210']],
        [
          'Hello Exhibitor Operations,',
          'Artisan Gelato just confirmed our booth space cleanly for next week’s expo. Earlier on July 8, I registered and paid online via ExhibitorHub for our frozen cold-locker storage spanning Friday through Sunday (3 days), plus booked our booth 110V electrical freezer plug that exact same morning.',
          'Because we are hand-carrying dry tasting spoons and napkins inside personal flight luggage totaling 40 kg rather than shipping boxes early to Pier 8 Warehouse, do we need any extra Dock Freight pass upon arriving Friday 7:30 A.M.?',
          'Regards,\nKenji Takahashi',
        ]),
    ], [
      ['Double · Synthesis', 'How much did Kenji pay for his 110V booth power hookup?', ['$70', '$105', '$45', '$135'], 0, 'ตอบ $70 (จองออนไลน์วันที่ July 8 ซึ่งก่อนกำหนด July 12 จริง จึงได้ราคา $70 แทน $105)'],
      ['Double · Math', 'How much total fee did Kenji pay on July 8 for BOTH cold storage (3 days) and electricity?', ['$205', '$135', '$240', '$115'], 0, 'ตอบ $205 (ค่าตู้แช่เย็น 3 วัน × $45 = $135 + ค่าไฟ 110V $70 = $205)'],
      ['Double · Synthesis', 'Why did Kenji NOT violate the July 10 cold-locker booking deadline?', ['He reserved and paid on July 8 ahead of the cutoff', 'Dry tasting spoons do not require cold lockers', 'Flight luggage items waive warehouse fees', 'Pier 8 holds free overflow coolers'], 0, 'ตอบ He reserved and paid on July 8... (จองวันที่ 8 ก.ค. ก่อนเส้นตาย 10 ก.ค.)'],
      ['Double · Detail', 'How is Artisan Gelato bringing its tasting spoons and napkins to the venue?', ['Hand-carried in airline luggage totaling 40 kg', 'Shipped July 15 to Pier 8 Warehouse', 'Delivered in a refrigerated gelato truck', 'Purchased onsite from ExhibitorHub'], 0, 'ตอบ Hand-carried in airline luggage... (hand-carrying dry tasting spoons... inside personal flight luggage)'],
      ['Double · Inference', 'Which item would have carried NO warehouse fee even if mailed on July 16?', ['His 40 kg box of dry spoons and napkins', 'Frozen gelato tubs weighing 50 kg', 'A spare 110V freezer cord', 'Overweight cartons totaling 200 kg'], 0, 'ตอบ His 40 kg box of dry spoons... (ของแห้งน้ำหนักต่ำกว่า 150 kg ส่งเข้า Pier 8 ได้ตั้งแต่ 15 ก.ค. โดยไม่เสียค่าขนย้าย)'],
    ]),

    // Double Passage 2 (5 Qs: Invoice + Feedback Email)
    p7(4, 'm4-d2', [
      doc('invoice', 'ClearSound Pro — Repair Work Order #CS-9910',
        [['Client', 'Civic Theater Sound Desk'], ['Technician', 'Elena Diaz'], ['Returned', 'April 22']],
        [
          tbl(
            ['Device', 'Serial #', 'Service Performed', 'Parts Cost', 'Labor Cost'],
            [
              ['Wireless Mic Receiver R4', 'WR-882', 'Replaced antenna BNC socket + RF tune', '$38', '$65'],
              ['Mixing Console M16', 'MC-410', 'Cleaned Channel 9–12 sliders + Firmware v3.1', '$0', '$90'],
            ]),
          'Total Invoice: $193.00 (Net 15 Days Payment Terms · Covered by 90-Day Bench Repair Guarantee).',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'service@clearsoundpro.com'], ['From', 'Civic Theater Sound Desk'], ['Date', 'May 6'], ['Subject', 'Follow-Up on Order #CS-9910 Payment & Channel 10']],
        [
          'Hi Elena,',
          'Our theater finance clerk processed check payment for the $193 invoice right on time today! Wireless Receiver R4 has performed crystal clear across twelve performances without any signal drops.',
          'Quick glitch on Mixing Console M16: Channel 10’s volume fader began crackling slightly again during last night’s rehearsal even though channels 9, 11, and 12 glide silently. Could our courier drop the M16 back at your shop Tuesday morning under the repair guarantee?',
          'Best,\nMarco Rossi',
        ]),
    ], [
      ['Double · Synthesis', 'Will Civic Theater pay extra labor costs to inspect Channel 10 again?', ['No, because May 6 falls cleanly within the 90-day repair guarantee', 'Yes, $90 labor applies to every clean check', 'Yes, because payment arrived past Net 15 days', 'No, because Elena forgot Firmware v3.1'], 0, 'ตอบ No, because May 6 falls cleanly within... (ส่งคืน 22 เม.ย. แจ้ง 6 พ.ค. = 14 วัน ยังอยู่ในประกันซ่อม 90 วัน)'],
      ['Double · Detail', 'Which serviced unit is working flawlessly for the theater?', ['Wireless Mic Receiver R4', 'Mixing Console M16 Channel 10', 'Antenna BNC cable stockroom', 'Backup theater subwoofer'], 0, 'ตอบ Wireless Mic Receiver R4 (Receiver R4 has performed crystal clear without any signal drops)'],
      ['Double · Math', 'Why does Marco mention paying the $193 invoice on May 6?', ['To confirm payment cleared within the Net 15-day window', 'Because $38 in BNC parts was refunded', 'He overpaid labor charges accidentally', 'Late penalty interest starts after 7 days'], 0, 'ตอบ To confirm payment cleared... (April 22 -> May 6 = 14 วัน พอดีภายในเงื่อนไข Net 15 Days)'],
      ['Double · Detail', 'Who handled the original bench servicing at ClearSound Pro?', ['Elena Diaz', 'Marco Rossi', 'Firmware Team', 'Check Clerk'], 0, 'ตอบ Elena Diaz (ตารางระบุ Technician: Elena Diaz)'],
      ['Double · Detail', 'What issue still affects Channel 10 on the Mixing Console?', ['Crackling sound when moving the volume fader', 'Outdated Firmware v3.1 alert', 'Broken antenna BNC port', 'Missing power switch'], 0, 'ตอบ Crackling sound... (Channel 10’s volume fader began crackling slightly again)'],
    ]),

    // Triple Passage 1 (5 Qs: Web Listing + Spec Comparison Email + Invoice)
    p7(4, 'm4-t1', [
      doc('ad', 'SunPeak Solar Generators — Field Survey Gear', [['Brand', 'SunPeak Outdoors']],
        [
          tbl(
            ['Model', 'Battery Capacity', 'AC Output', 'Unit Weight', 'Price'],
            [
              ['PeakGo 500', '512 Wh', '500 W', '6.2 kg', '$390'],
              ['PeakForce 1200', '1,220 Wh', '1,200 W', '12.5 kg', '$790'],
              ['PeakBase 2400', '2,400 Wh', '2,200 W', '23.0 kg', '$1,420'],
            ]),
          'Optional Fold-Flat 200W Solar Panel Mat: $260 ($195 when bundled alongside any PeakForce or PeakBase unit).',
        ]),
      doc('email', 'Internal Request Email',
        [['To', 'Procurement Desk'], ['From', 'Dr. Hannah Cho (Wetlands Field Team)'], ['Date', 'March 19'], ['Subject', 'Remote Water Sampler Battery Order']],
        [
          'Hi Team,',
          'Next month’s field survey hikes two kilometers up muddy marsh boardwalks without road vans, so two researchers must carry our generator unit effortlessly by hand—stay strictly under 15 kg!',
          'However, our submersible pump draws 850 watts cleanly at startup, meaning the smallest 500W unit will trip overload protection immediately. Grab the compatible generator plus one folding 200W solar panel mat so batteries top up cleanly during noon camp breaks.',
        ]),
      doc('invoice', 'SunPeak Direct Receipt #SP-6091',
        [['Buyer', 'Wetlands Survey Dept.'], ['Date', 'March 20']],
        [
          'Billed: 1 × PeakForce 1200 ($790) + 1 × Fold-Flat 200W Solar Panel Mat ($195 bundled price). Total Paid: $985.00. Carrier: Regional Freight Ground (Expected Arrival: March 25).',
        ]),
    ], [
      ['Triple · Synthesis', 'Why did Procurement order PeakForce 1200 instead of PeakGo 500 or PeakBase 2400?', ['It runs 850W pumps cleanly while weighing under 15 kg', 'It provides the highest 2,400 Wh capacity', 'PeakGo 500 weighs over 15 kg', 'Only PeakForce bundles free ground vans'], 0, 'ตอบ It runs 850W pumps... (ปั๊มกินไฟ 850W จึงใช้ PeakGo 500W ไม่ได้ และต้องแบกเบา <15 kg จึงเลือก 12.5 kg ไม่ใช้ 23 kg)'],
      ['Triple · Synthesis', 'How much did buying the bundled 200W solar mat save compared with its standalone $260 price?', ['$65', '$195', '$130', '$985'], 0, 'ตอบ $65 (ราคาปกติ $260 ลดเหลือ $195 เมื่อซื้อคู่ PeakForce -> ประหยัด $65)'],
      ['Triple · Inference', 'Why did Dr. Cho prioritize carrying weight so heavily?', ['Equipment must be hand-carried two kilometers along boardwalks', 'Helicopter cargo permits cap weight at 6 kg', 'Wetland mud sinks 200W solar mats', 'Two vans split generator storage'], 0, 'ตอบ Equipment must be hand-carried... (hikes two kilometers up muddy marsh boardwalks without road vans)'],
      ['Triple · Detail', 'When is Receipt #SP-6091 projected to arrive?', ['March 25', 'March 19', 'March 20', 'April 1'], 0, 'ตอบ March 25 (Expected Arrival: March 25)'],
      ['Triple · Detail', 'How will field staff recharge batteries between morning and afternoon pump checks?', ['With the Fold-Flat 200W solar mat during lunch breaks', 'Using gasoline backup tanks', 'From boardwalk outlet posts', 'Via truck cigarette adapters'], 0, 'ตอบ With the Fold-Flat 200W solar mat... (batteries top up cleanly during noon camp breaks)'],
    ]),

    // Triple Passage 2 (5 Qs: Press Release + Menu Schedule + Email)
    p7(4, 'm4-t2', [
      doc('article', 'City Farmers Market Expands Into Covered Glass Hall', [['Date', 'May 1']],
        [
          'Beginning Sunday, May 12, the thirty-vendor Pine Street Growers Market moves permanently inside the bright glass Depot Pavilion at 88 Elm Road, enabling comfortable year-round shopping cleanly shielded from winter sleet or intense July sunshine. Coffee roasters and sourdough booths open at 7:30 A.M., followed by fresh orchard produce stalls at 8:00 A.M.',
        ]),
      doc('table', 'Depot Pavilion May Sunday Chef Demo Schedule (Center Kitchen Stage)', null, [
        tbl(
          ['Sunday Date', 'Time', 'Guest Chef', 'Dish Focus'],
          [
            ['May 12', '10:30 A.M.', 'Chef Mei Lin', 'Spring Asparagus & Sesame Tart'],
            ['May 19', '10:30 A.M.', 'Chef Oscar Perez', 'Wild Mushroom Heirloom Tacos'],
            ['May 26', '10:30 A.M.', 'Chef Paula Becker', 'Honey Strawberry Galette'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'info@pinestreetmarket.org'], ['From', 'Rosa Martinez'], ['Date', 'May 14'], ['Subject', 'Volunteer Question — Chef Stage Helpers']],
        [
          'Hi Coordinators,',
          'What a bright upgrade inside 88 Elm Road last Sunday—loved tasting Chef Mei Lin’s asparagus tart! I missed signing up for this weekend’s demo prep team, though I remain completely free Sunday morning May 26 to hand out Chef Paula Becker’s recipe cards around Center Kitchen Stage.',
          'Should volunteer assistants arrive by 7:30 A.M. with coffee roasters or closer to 9:45 A.M. ahead of stage seating?',
          'Warmly,\nRosa Martinez',
        ]),
    ], [
      ['Triple · Synthesis', 'Which dish demo does Rosa Martinez want to volunteer at on May 26?', ['Honey Strawberry Galette', 'Spring Asparagus & Sesame Tart', 'Wild Mushroom Heirloom Tacos', 'Sourdough Bread Tasting'], 0, 'ตอบ Honey Strawberry Galette (ตารางระบุ May 26 Chef Paula Becker สอนทำ Honey Strawberry Galette)'],
      ['Triple · Synthesis', 'When did Rosa Martinez attend Chef Mei Lin’s cooking demonstration?', ['Sunday, May 12', 'May 1', 'May 14', 'May 19'], 0, 'ตอบ Sunday, May 12 (อีเมลส่ง 14 พ.ค. ชมว่าสัปดาห์ที่แล้วได้ชิมทาร์ตหน่อไม้ฝรั่งของ Chef Mei Lin = 12 พ.ค.)'],
      ['Triple · Detail', 'Why did the market move to 88 Elm Road?', ['To protect vendors and shoppers from rain and summer heat indoors', 'To open earlier at 6:00 A.M. daily', 'Because Pine Street permanently outlawed produce trucks', 'To reduce stall rents for coffee roasters'], 0, 'ตอบ To protect vendors and shoppers... (moves permanently inside covered Glass Hall shielded from winter sleet or intense July sunshine)'],
      ['Triple · Detail', 'What task does Rosa hope to assist with on May 26?', ['Distributing printed recipe cards', 'Roasting morning coffee beans', 'Baking sourdough loaves at 7:30 A.M.', 'Translating mushroom taco recipes'], 0, 'ตอบ Distributing printed recipe cards (hand out Chef Paula Becker’s recipe cards)'],
      ['Triple · Detail', 'At what time do orchard produce booths officially start opening inside Depot Pavilion?', ['8:00 A.M.', '7:30 A.M.', '10:30 A.M.', '9:45 A.M.'], 0, 'ตอบ 8:00 A.M. (Coffee opens 7:30 A.M., followed by fresh orchard produce stalls at 8:00 A.M.)'],
    ]),

    // Triple Passage 3 (5 Qs: HR Policy + Chat + Booking Summary)
    p7(4, 'm4-t3', [
      doc('memo', 'Corporate Learning Grant Guidelines', [['To', 'Full-Time Employees'], ['From', 'People Development']],
        [
          'Employees completing one full year of service qualify for up to $800 per calendar year toward accredited external workshops, technical book bundles, or official industry certification test sittings. Claims require manager endorsement PRIOR to enrollment plus an official certificate or receipt showing passing completion.',
        ]),
      doc('chat', 'Team Direct Messages', [['Between', 'Lucas Reed & Manager Mia Cho'], ['Date', 'February 18']],
        [
          chat([
            ['Lucas Reed', '1:40 P.M.', 'Hey Mia! Next month marks my 18-month milestone here, and I want to sit for the Cloud Architect Pro exam on April 4 ($320 test fee) plus take a 2-day prep lab ($450). Any budget ok from our team?'],
            ['Mia Cho', '1:45 P.M.', 'Awesome plan, both topics directly improve our server deployments—definitely pre-approved! Just make sure total fees sit under the annual $800 ceiling cleanly.'],
            ['Lucas Reed', '1:48 P.M.', 'Sweet, $770 total keeps us safely under! Will upload booking receipts right after passing April 4.'],
          ]),
        ]),
      doc('invoice', 'EduCloud Certification Receipt #EC-719',
        [['Candidate', 'Lucas Reed'], ['Test Date', 'April 4'], ['Result Status', 'PASSED (Score: 890/1000)']],
        [
          'Charges Verified: Cloud Architect Pro Exam Voucher ($320) + Live 2-Day Prep Lab Seat ($450). Total Paid: $770.00. Remaining HR Annual Grant Balance after reimbursement: $30.00.',
        ]),
    ], [
      ['Triple · Synthesis', 'Why does Lucas Reed qualify for the $800 annual learning grant?', ['He has worked full time for 18 months (over the 1-year minimum)', 'He passed with 890/1000 cleanly', 'Prep labs exempt employees from waiting one year', 'Cloud exams double yearly balances'], 0, 'ตอบ He has worked full time for 18 months... (เกณฑ์ต้องอายุงานครบ 1 ปีขึ้นไป และ Lucas ทำงานมา 18 เดือน)'],
      ['Triple · Synthesis', 'How did Lucas follow the required HR approval procedure?', ['He obtained Manager Mia Cho’s pre-approval on February 18 before April 4', 'He submitted book receipts in January', 'He paid $30 deposit toward next year’s grant', 'He waived prep lab receipts'], 0, 'ตอบ He obtained Manager Mia Cho’s pre-approval... (กฎต้องได้ Manager endorsement PRIOR to enrollment และ Mia กดอนุมัติในแชต 18 ก.พ. ก่อนสอบ 4 เม.ย.)'],
      ['Triple · Math', 'How much annual learning grant balance remains for Lucas later this year if he buys books cleanly?', ['$30', '$320', '$450', '$80'], 0, 'ตอบ $30 (งบปีละ $800 เบิกไป $320 + $450 = $770 เหลือ $30)'],
      ['Triple · Inference', 'Could Lucas have claimed this $770 cleanly if he had NOT yet passed the exam and lacked an attendance certificate?', ['No, proof of passing/completion is mandatory before reimbursement', 'Yes, pre-approval alone pays invoices in advance', 'Only the $320 fee requires passing', 'HR pays half upfront regardless of result'], 0, 'ตอบ No, proof of passing/completion is mandatory... (Memo ระบุชัดเจน requires official certificate or receipt showing passing completion)'],
      ['Triple · Detail', 'What score did Lucas achieve on the April 4 exam?', ['890 out of 1000', '770 out of 1000', '450 out of 800', '18 out of 20'], 0, 'ตอบ 890 out of 1000 (Result Status: PASSED Score: 890/1000)'],
    ]),

    // ══════════════════ SET 5 (Q147–Q200: 54 Qs) ══════════════════
    // Single 1 (2 Qs)
    p7(5, 'm5-s1', [
      doc('notice', 'Community Announcement', [['Venue', 'Elmwood Civic Theater']],
        [
          'Box Office Summer Remodel — Online Tickets Recommended',
          'Walk-up ticket windows inside the East Lobby close temporarily May 6 through May 17 while carpenters install curved accessible transaction counters.',
          'Patrons may reserve seats online anytime with zero booking surcharges using code NOFEE, or buy day-of-show passes at the mobile kiosk beside Courtyard Gate 2 starting 90 minutes before curtain.',
        ]),
    ], [
      ['Single · Detail', 'Why are walk-up lobby windows closed May 6–17?', ['New accessible counters are being constructed', 'Summer performances have been postponed', 'Online systems crashed last Tuesday', 'East Lobby carpets are getting shampooed'], 0, 'ตอบ New accessible counters... (install curved accessible transaction counters)'],
      ['Single · Detail', 'What does code NOFEE provide to ticket buyers?', ['Waived online booking fees', 'Half-price matinee balcony seats', 'Free courtyard beverage vouchers', 'Ninety minutes early seating'], 0, 'ตอบ Waived online booking fees (online anytime with zero booking surcharges using code NOFEE)'],
    ]),

    // Single 2 (2 Qs)
    p7(5, 'm5-s2', [
      doc('email', 'E-mail Message',
        [['To', 'Harbor Fitness Members'], ['From', 'Club Operations'], ['Date', 'January 22'], ['Subject', 'Locker Towel Bins Moved']],
        [
          'To stop wet bath towels from dampening dry wooden benches near Exit Row 3, laundry return hampers inside Men’s and Women’s Locker Rooms have moved directly beside shower tile alcoves starting today.',
          'Fresh cotton bath towels remain stacked near Front Check-In Desk cleanly as usual—grab one upon tapping member fobs at the turnstile.',
        ]),
    ], [
      ['Single · Detail', 'Where are used towel return hampers now placed?', ['Next to the tiled shower alcoves', 'Beside Front Check-In Desk turnstiles', 'Next to Exit Row 3 wooden benches', 'Inside basement laundry closets'], 0, 'ตอบ Next to the tiled shower alcoves (moved directly beside shower tile alcoves)'],
      ['Single · Cause', 'Why did Club Operations relocate the bins?', ['To prevent wooden exit benches from getting damp', 'Front Check-In needed more bench seating', 'Members stopped using cotton bath towels', 'Turnstiles blocked Exit Row 3 doors'], 0, 'ตอบ To prevent wooden exit benches from getting damp (stop wet bath towels from dampening dry wooden benches)'],
    ]),

    // Single 3 (3 Qs) - Text Chat
    p7(5, 'm5-s3', [
      doc('chat', 'Event Crew Group Chat', [['Channel', '#stage-sound'], ['Date', 'August 14']],
        [
          chat([
            ['Rachel Sato', '4:05 P.M.', 'Hey crew, keynote mic Check-In starting at 5:30 P.M.! Has Dr. Vance confirmed whether he uses a handheld mic or clip lapel for tonight’s talk?'],
            ['Sam Patel', '4:08 P.M.', 'Emailed his assistant at noon—she wrote back that Dr. Vance prefers pacing across stage edges with free hands, so clip lapel Channel 4 works best cleanly.'],
            ['Rachel Sato', '4:11 P.M.', 'Got it! Checking AA batteries inside Lapel Pack 4 right now. Wait—did we also swap foam windscreens since podium AC blows hard?'],
            ['Sam Patel', '4:13 P.M.', 'Good shout, grabbing fresh sealed black windscreens from Audio Case B right now and heading up cleanly!'],
          ]),
        ]),
    ], [
      ['Single · Cause', 'Why does Dr. Vance prefer using a clip lapel microphone?', ['He likes walking around the stage with both hands free', 'Handheld mic Channel 2 has dead batteries', 'Podium air conditioning blocks handheld stands', 'His assistant broke the wireless stand'], 0, 'ตอบ He likes walking around the stage... (prefers pacing across stage edges with free hands)'],
      ['Single · Detail', 'Where is Sam getting replacement windscreens?', ['From Audio Case B', 'From Dr. Vance’s assistant', 'At Front Check-In', 'Beside Lapel Pack 2'], 0, 'ตอบ From Audio Case B (grabbing fresh sealed black windscreens from Audio Case B)'],
      ['Single · Inference', 'When will Sam likely arrive at the main stage?', ['Shortly after 4:13 P.M.', 'Exactly at noon', 'After the keynote concludes', 'Around 6:00 P.M. tomorrow'], 0, 'ตอบ Shortly after 4:13 P.M. (เวลา 4:13 P.M. กำลังหยิบฟองน้ำและเดินขึ้นเวทีทันที เพื่อเตรียมตรวจเสียง 5:30 P.M.)'],
    ]),

    // Single 4 (3 Qs) - Schedule / Pricing Table
    p7(5, 'm5-s4', [
      doc('table', 'Bayview Kayak Rentals — Weekend Lagoon Rates', [['Included', 'Life vest, lightweight paddle, dry phone pouch']],
        [
          tbl(
            ['Craft Type', 'Seats', '2-Hour Rental', 'Half-Day (4 Hrs)', 'Full Day (8 Hrs)'],
            [
              ['Solo Touring Kayak', '1 adult', '$34', '$54', '$82'],
              ['Tandem Coastal Kayak', '2 adults', '$52', '$84', '$125'],
              ['Stable Paddleboard', '1 adult', '$30', '$48', '$74'],
            ]),
          'Groups renting 4+ watercraft together save $5 off per craft cleanly.',
        ]),
    ], [
      ['Single · Detail', 'Which rental duration for a Tandem Coastal Kayak costs $84?', ['Four hours', 'Two hours', 'Eight hours', 'One day'], 0, 'ตอบ Four hours (ช่อง Half-Day 4 Hrs ของ Tandem Coastal Kayak ราคา $84)'],
      ['Single · Math', 'How much would four friends pay together to rent two Tandem Coastal Kayaks for 2 hours?', ['$104', '$94', '$168', '$125'], 0, 'ตอบ $104 (เช่า Tandem 2 ลำ × $52 = $104; หมายเหตุ ส่วนลด $5 ใช้เมื่อเช่า 4+ ลำขึ้นไป)'],
      ['Single · NOT', 'Which item is NOT listed as automatically included with every rental?', ['Waterproof action camera', 'Life vest', 'Lightweight paddle', 'Dry phone pouch'], 0, 'ตอบ Waterproof action camera (Included ระบุเฉพาะเสื้อชูชีพ ไม้พาย และซองกันน้ำมือถือ)'],
    ]),

    // Single 5 (3 Qs) - Customer Review & Response
    p7(5, 'm5-s5', [
      doc('review', 'Verified Buyer Review — TimberCraft Standing Desk M3', [['Rating', '4 / 5 Stars · Buyer: Leo Kim']],
        [
          'Review: "Assembling the brushed steel frame took only twenty-five minutes thanks to pre-drilled threaded brass inserts under the walnut top—solid zero-wobble lifting! Only minor hiccup: Box 1 arrived with four missing M6 washers, though customer support mailed replacement hardware overnight via courier without hesitation."',
          'Brand Response: "Thank you for sharing honest feedback, Leo! We alerted packing supervisors in Tacoma so steel hardware blister packs get double heat-sealed before stepping into cartons."',
        ]),
    ], [
      ['Single · Praise', 'What made assembling the desk quick according to Leo Kim?', ['Threaded metal inserts were pre-drilled under the desktop', 'Replacement couriers assembled the steel legs', 'Washers arrived sealed inside the frame tubes', 'The walnut top required no bolts'], 0, 'ตอบ Threaded metal inserts... (pre-drilled threaded brass inserts under the walnut top)'],
      ['Single · Problem', 'What issue occurred when the order arrived?', ['Four small metal washers were missing', 'The walnut desk surface arrived cracked', 'Lifting motors wobbled above mid-height', 'Express delivery arrived two weeks late'], 0, 'ตอบ Four small metal washers were missing (four missing M6 washers)'],
      ['Single · Detail', 'What did TimberCraft do to prevent future packing misses?', ['Informed packing supervisors to double-seal hardware packs', 'Switched courier companies in Tacoma', 'Eliminated M6 washers from design drawings', 'Shortened desktop warranty coverage'], 0, 'ตอบ Informed packing supervisors... (alerted packing supervisors in Tacoma so hardware packs get double heat-sealed)'],
    ]),

    // Single 6 (3 Qs) - News Article
    p7(5, 'm5-s6', [
      doc('article', 'Harbor Spice Cooperative Launches Zero-Plastic Glass Refills', [['Source', 'Food & Retail Today']],
        [
          'Shoppers tired of tossing dozens of disposable spice bottles each year can now refill organic cardamom, smoked paprika, and whole black peppercorns directly inside Harbor Spice’s forty-two participating grocery corners across the Midwest.',
          'Each smart gravity dispenser prints an exact batch lot and expiration barcode sticker onto customer jars automatically upon weighing, ensuring complete traceability while shaving packaging prices nearly 30 percent off standard sealed glass spice jars.',
        ]),
    ], [
      ['Single · Detail', 'How do customers save money using Harbor Spice refill stations?', ['Cutting packaging costs lowers prices by roughly 30 percent', 'Buying empty sealed jars waives grocery sales tax', 'Co-op discounts increase 42 percent quarterly', 'Spices are weighed strictly in kilogram tins'], 0, 'ตอบ Cutting packaging costs... (shaving packaging prices nearly 30 percent off standard sealed glass spice jars)'],
      ['Single · Benefit', 'Why does the dispenser print barcode stickers onto refilled jars?', ['To preserve batch traceability and expiration dates', 'To charge extra weighing service deposits', 'To qualify shoppers for supermarket free parking', 'To convert glass bottles into steel tins'], 0, 'ตอบ To preserve batch traceability... (exact batch lot and expiration barcode sticker ... ensuring complete traceability)'],
      ['Single · Vocab', 'The word "shaving" in paragraph 2 is closest in meaning to ___.', ['cutting', 'piling', 'hiding', 'doubling'], 0, 'ตอบ cutting (shaving prices 30 percent = ลดราคาลงเกือบ 30%)'],
    ]),

    // Single 7 (4 Qs) - Job Ad + [1]-[4]
    p7(5, 'm5-s7', [
      doc('ad', 'Career Opportunity — Regional Fleet Dispatcher', [['Company', 'Pacific Cold Transport'], ['Shift', 'Mon–Fri · 6:00 A.M.–2:30 P.M.']],
        [
          'Pacific Cold Transport operates eighty refrigerated box trucks serving regional grocery warehouses smoothly around dawn. [1] Reporting to Fleet Director Ben Morales, you will assign daily driver bay numbers, track interstate chill telemetry screens, and smoothly reroute trucks whenever highway snow delays occur.',
          'Candidate Requirements:',
          lst([
            'Three years commercial freight dispatching or transport logistics coordination',
            'Fluency with multi-window GPS routing maps and Excel route sheets',
            'Clear decisive phone communication calmly under morning dock pressure',
          ]),
          '[2] Competitive salary alongside medical insurance, free espresso breakroom access, and paid CDL license renewal credits awaits. [3] Apply online uploading your resume to careers.pacificcold.com citing Ref #RFD-55 before May 31. [4]',
        ]),
    ], [
      ['Single · Detail', 'What does a Regional Fleet Dispatcher monitor during shifts?', ['Live trailer refrigeration telemetry and highway delays', 'Warehouse cashier register totals', 'Grocery shelf expiration tags', 'Driver private health insurance claims'], 0, 'ตอบ Live trailer refrigeration telemetry... (track interstate chill telemetry screens and reroute trucks during delays)'],
      ['Single · NOT', 'What is NOT mentioned as a job benefit?', ['Company-provided commuter hybrid car', 'Health medical coverage', 'Free espresso lounge drinks', 'Commercial license renewal credits'], 0, 'ตอบ Company-provided commuter hybrid car (ไม่ได้ระบุในรายการสวัสดิการ)'],
      ['Single · Detail', 'What minimum prior experience is requested?', ['Three years in freight dispatch or transport logistics', 'Five years driving refrigerated box trucks', 'Two winters plowing snow routes', 'A master degree in computer mapping'], 0, 'ตอบ Three years in freight dispatch... (Three years commercial freight dispatching or transport logistics coordination)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best belong? "Bilingual English and Spanish radio familiarity provides a helpful edge."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจาก Candidate Requirements ทันที ก่อนเข้าสู่หัวข้อสวัสดิการค่าตอบแทน)'],
    ]),

    // Single 8 (4 Qs) - Warranty / Safety Policy
    p7(5, 'm5-s8', [
      doc('memo', 'Library Laptop Loan Program — Student & Member Rules', [['Institution', 'Westport Central Library']],
        [
          'Adult cardholders with verified local utility bills may borrow clean 14-inch Chromebooks completely free for up to four hours inside Third-Floor Study Commons.',
          'Borrowing Rules:',
          lst([
            'Present physical library card plus valid photo ID directly at Technology Desk 2.',
            'Laptops operate strictly within library wireless walls; exit door sensors sound alarms if taken outside.',
            'Save any typed homework or personal spreadsheets onto personal USB flash drives cleanly before logging out—machines automatically erase all browser files upon lid closure.',
            'Late desk returns beyond closing bells carry $10 hourly late charges.',
          ]),
        ]),
    ], [
      ['Single · Detail', 'How long can patrons borrow a Chromebook cleanly per session?', ['Up to four hours', 'For one full week', 'Only until Technology Desk closes at noon', 'Two hours per monthly card'], 0, 'ตอบ Up to four hours (borrow clean 14-inch Chromebooks free for up to four hours)'],
      ['Single · Condition', 'Where are borrowed laptops permitted to be used?', ['Only inside library building zones', 'At nearby downtown cafes', 'Anywhere within Westport municipal limits', 'At school classrooms overnight'], 0, 'ตอบ Only inside library building zones (operate strictly within library wireless walls; exit sensors sound alarms outside)'],
      ['Single · Inference', 'Why should patrons carry a USB flash drive before borrowing a Chromebook?', ['Local files delete automatically once sessions end and lids close', 'Library computers lack wireless internet keyboards', 'Technology Desk charges $10 to print PDFs', 'Screens lock completely after one hour'], 0, 'ตอบ Local files delete automatically... (machines automatically erase all browser files upon lid closure)'],
      ['Single · Detail', 'What happens if a patron returns a laptop past closing time?', ['A $10 per hour late fee applies', 'Their utility bill account freezes permanently', 'Technology Desk deletes library card points', 'Loan privileges shift down to 30 minutes'], 0, 'ตอบ A $10 per hour late fee applies (late desk returns carry $10 hourly late charges)'],
    ]),

    // Single 9 (5 Qs) - Feature Article
    p7(5, 'm5-s9', [
      doc('article', 'Smart Rain Barrels Quietly Shield City Parks From Flash Floods', [['By', 'Priya Rao'], ['Journal', 'Urban Ecology Today']],
        [
          'Concrete sidewalks and crowded shopping roofs shed sudden cloudburst rain rapidly straight into storm drains, frequently overwhelming older brick municipal sewer tunnels during intense summer squalls. [1] Rather than tearing open miles of busy streets to sink costly concrete storage caves, civil engineers in Rotterdam have started hooking weather-forecast valves onto oversized rooftop terrace planter tanks across 120 apartment blocks.',
          'Each rooftop smart cistern gathers bright afternoon runoff cleanly for balcony fern watering throughout dry July heat waves. [2] However, twenty-four hours ahead of any severe radar thunderstorm approaching coast stations, tiny solar-powered drain valves automatically crack open gradually, releasing crystal-clear stored water gently into empty city canals while pipes still sit completely dry.',
          '"When skies finally dump five centimeters of rain an hour, our empty tanks swallow massive roof runoff like thirsty sponges instead of flooding subway steps," explains municipal water lead Bram Vermeer. [3] During subsequent calm sunny weeks, shut valves rapidly catch trailing showers cleanly to keep rooftop lawns lush without consuming drinking-water taps.',
          'Independent hydrology monitors calculated the networked smart valves cut peak district storm overflow alerts nearly 42 percent during their debut rainy season alone. [4]',
        ]),
    ], [
      ['Single · Purpose', 'What technology does the article primarily examine?', ['Forecast-connected rainwater tanks that drain ahead of storms to prevent urban flooding', 'Desalination pumps supplying apartment drinking faucets', 'Tunnel construction digging deeper brick sewers downtown', 'Subway escalator canopies built near Rotterdam'], 0, 'ตอบ Forecast-connected rainwater tanks... (ถังเก็บน้ำฝนอัจฉริยะเชื่อมต่อพยากรณ์อากาศเพื่อปล่อยน้ำล่วงหน้าก่อนพายุ ช่วยรับน้ำฝนฉับพลันกันน้ำท่วมเมือง)'],
      ['Single · Process', 'What happens inside the rooftop tanks 24 hours before a major approaching storm?', ['Weather valves release clean stored water early so tanks have room for heavy rain', 'Solar sensors shut drains tight to seal balcony roofs', 'Pumps transfer rainwater directly into subway pipes', 'Drinking water faucets top up dry planter boxes'], 0, 'ตอบ Weather valves release clean stored water early... (drain valves automatically crack open gradually, releasing water before storm hits)'],
      ['Single · Benefit', 'Why did planners choose rooftop smart valves over burying large concrete tanks under roads?', ['Digging open miles of city streets is vastly more expensive and disruptive', 'Rooftop concrete caves hold more fish species', 'Brick municipal sewers stopped working completely', 'Dry July heat waves crack sidewalk cement'], 0, 'ตอบ Digging open miles... (Rather than tearing open miles of busy streets to sink costly concrete storage caves)'],
      ['Single · Vocab', 'The word "swallow" in paragraph 3 is closest in meaning to ___.', ['absorb', 'spill', 'measure', 'filter'], 0, 'ตอบ absorb (empty tanks swallow massive roof runoff like thirsty sponges = ดูดซับน้ำฝนปริมาณมหาศาลแทน)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "This pre-draining clears maximum spare volume right before streets flood."', ['[3]', '[1]', '[2]', '[4]'], 0, 'ตอบ [3] (สรุปย้ำผลทันทีหลังคำพูดของ Vermeer ที่อธิบายว่าถังเปล่าซับน้ำฝนปริมาณมหาศาลตอนพายุเข้าแทนท่อระบายได้อย่างไร)'],
    ]),

    // Double Passage 1 (5 Qs: Web Promotion + Inquiry Email)
    p7(5, 'm5-d1', [
      doc('ad', 'NorthWood Custom Desks — Studio Bulk Quote Chart', [['Factory', 'Portland Woodworks']],
        [
          tbl(
            ['Desktop Finish', 'Length 140 cm', 'Length 180 cm', 'Cable Tray Cutout Add-On'],
            [
              ['Solid Ash Wood', '$480', '$580', '+$35'],
              ['Matte Birch Ply', '$360', '$440', '+$35'],
              ['Smoked Walnut Veneer', '$620', '$740', 'Included ($0)'],
            ]),
          'Free local van delivery + corridor placement across Portland on orders totaling 5+ desks. Otherwise flat $95 dock delivery fee applies.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'quotes@northwooddesks.com'], ['From', 'Tomás Vega <t.vega@pixelcraft.co>'], ['Date', 'November 2'], ['Subject', 'Six Custom 180cm Desks Order']],
        [
          'Hi NorthWood Sales,',
          'Our animation studio just signed a lease three blocks away in Portland! We want to order 6 × Matte Birch Ply desks cleanly in the 180 cm width, each customized with the rear cable tray cutout slot so dual animator monitors look tidy.',
          'Please prepare our formal sales invoice confirming free local courier delivery along with estimated November build turnaround time.',
          'Cheers,\nTomás Vega',
        ]),
    ], [
      ['Double · Math', 'What will the total cost be for all 6 Matte Birch Ply 180 cm desks WITH cable cutouts?', ['$2,850', '$2,640', '$2,945', '$2,370'], 0, 'ตอบ $2,850 (โต๊ะ Matte Birch 180 cm = $440 + ช่องเคเบิล $35 = $475/ตัว × 6 ตัว = $2,850; ส่งฟรีเพราะเกิน 5 ตัวในพอร์ตแลนด์)'],
      ['Double · Synthesis', 'Why will PixelCraft Media pay $0 for Portland delivery?', ['They ordered at least 5 desks inside Portland', 'All 180 cm sizes ship free nationwide', 'Cable tray cutouts waive delivery rates', 'Smoked Walnut purchases exempt dock fees'], 0, 'ตอบ They ordered at least 5 desks... (สั่ง 6 ตัว >= 5 ตัว และอยู่ในพอร์ตแลนด์ตรงเงื่อนไขส่งฟรี)'],
      ['Double · Detail', 'Which desk finish includes rear cable tray cutouts without adding $35?', ['Smoked Walnut Veneer', 'Solid Ash Wood', 'Matte Birch Ply', 'All three wood finishes'], 0, 'ตอบ Smoked Walnut Veneer (ตารางระบุ Smoked Walnut Veneer -> Included $0)'],
      ['Double · Inference', 'How much would delivery have cost if Tomás had ordered strictly 3 desks cleanly?', ['$95', '$35', '$105', '$0'], 0, 'ตอบ $95 (ต่ำกว่า 5 ตัวจะเสียค่าขนส่งเหมาจ่าย $95 flat fee)'],
      ['Double · Detail', 'What does Tomás request besides the formal invoice?', ['Expected November production wait time', 'Fabric samples for chair cushions', 'Installation blueprints for wall shelves', 'Extra spare screws'], 0, 'ตอบ Expected November production wait time (estimated November build turnaround time)'],
    ]),

    // Double Passage 2 (5 Qs: Memo + Expense Form Review)
    p7(5, 'm5-d2', [
      doc('memo', 'Company Relocation Policy — Office Plant & Monitor Moving Guide', [['To', 'Floor 3–5 Staff'], ['From', 'Office Move Committee']],
        [
          'Movers begin shifting rolling chairs, monitors, and white file cabinets cleanly onto North Annex Wing over Friday afternoon starting 3:00 P.M.',
          lst([
            'Unplug personal monitors and place power bricks inside yellow padded zip sleeves (tape owner’s last name + new Annex Desk Code firmly onto front flaps).',
            'Tape glass desk water pitchers and fragile ceramic succulents personally inside small cardboard box carriers—movers will NOT transport loose open mugs or fragile live plants on flat open carts.',
            'Keyboard trays and shared whiteboards detach easily with Floor IT assistance after 2:00 P.M.',
          ]),
        ]),
      doc('email', 'E-mail Message',
        [['To', 'move@brightcoast.io'], ['From', 'Hannah Lee (Suite 404 -> Annex N-42)'], ['Date', 'Thursday, June 6'], ['Subject', 'Packing Questions Ahead of Tomorrow’s Move']],
        [
          'Hi Move Committee,',
          'Finished unplugging both of my 27-inch monitors cleanly and labeled yellow sleeves "Lee — N-42" right on the front flaps as guided! Quick check: since I am driving straight to North Annex Garage tomorrow afternoon anyway to test my new parking fob, is it okay if I tuck my potted ceramic cactus inside my own car trunk around lunch rather than boxing it cleanly beside corridor carts?',
          'Also, does IT want us leaving USB webcams plugged into monitor bezels or packed inside the yellow sleeve too?',
          'Best,\nHannah Lee',
        ]),
    ], [
      ['Double · Inference', 'Why does Hannah plan to transport her ceramic cactus in her own car?', ['Movers refuse to carry unboxed fragile plants on open carts', 'Cacti are prohibited inside North Annex Wing', 'Cardboard boxes cost $15 per desk', 'She already gave her plant box away'], 0, 'ตอบ Movers refuse to carry unboxed fragile plants... (กฎระบุ movers will NOT transport loose fragile live plants on flat open carts)'],
      ['Double · Detail', 'How has Hannah prepared her monitors for the Friday move?', ['Placed them unplugged in labeled yellow padded sleeves', 'Left them wired onto Suit 404 arms', 'Packed monitors inside her car trunk', 'Handed them directly to Floor IT at 2:00 P.M.'], 0, 'ตอบ Placed them unplugged... (unplugging monitors and labeled yellow sleeves "Lee — N-42")'],
      ['Double · Synthesis', 'What new desk number was Hannah Lee assigned inside North Annex?', ['N-42', 'Suite 404', 'Desk 3', 'Cart N-2'], 0, 'ตอบ N-42 (หัวอีเมล Suite 404 -> Annex N-42)'],
      ['Double · Detail', 'When do Floor IT technicians begin assisting with shared whiteboards and keyboard trays?', ['After 2:00 P.M. Friday', 'Thursday afternoon', 'At 3:00 P.M. Friday', 'Monday morning'], 0, 'ตอบ After 2:00 P.M. Friday (Tomorrow’s Move = วันศุกร์ และ IT ช่วยหลัง 2:00 P.M.)'],
      ['Double · Detail', 'What personal errand brings Hannah to North Annex Garage Friday afternoon anyway?', ['Testing her parking fob', 'Delivering shared whiteboards', 'Inspecting cable outlets', 'Meeting moving truck drivers'], 0, 'ตอบ Testing her parking fob (to test my new parking fob)'],
    ]),

    // Triple Passage 1 (5 Qs: Web Ad + Coupon/Review + Invoice)
    p7(5, 'm5-t1', [
      doc('ad', 'ClearBrew Coffee Supply — Barista Bundles', [['Web', 'www.clearbrew.shop']],
        [
          tbl(
            ['Equipment Bundle', 'Includes', 'Price', 'Complimentary Bonus'],
            [
              ['Home Pour-Over Kit', 'Scale, Gooseneck Kettle, Ceramic Dripper', '$145', '50 Paper Filters'],
              ['Espresso Apprentice Pack', 'Semi-Auto Machine, Tamper, Knock Box', '$460', '500g Espresso Roast'],
              ['Cafe Calibration Pro', 'Precision Grinder, Digital Scale, Steaming Pitcher', '$320', 'Barista Video Pass'],
            ]),
          'Free courier delivery on orders above $250. Apply code ESPRESSO10 on bundles costing $400+ to take $40 off instantly!',
        ]),
      doc('invoice', 'ClearBrew Order Receipt #CB-3109',
        [['Customer', 'Owen Brooks'], ['Date', 'March 3']],
        [
          'Items Ordered: 1 × Espresso Apprentice Pack ($460) + 1 × Precision Stainless Frothing Pitcher ($28).',
          'Discounts: Code ESPRESSO10 (-$40). Delivery: $0 (Free Tier). Total Billed: $448.00. Tracking dispatched March 4.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'care@clearbrew.shop'], ['From', 'Owen Brooks'], ['Date', 'March 9'], ['Subject', 'Missing Coffee Beans inside Order #CB-3109']],
        [
          'Hi Team,',
          'My shiny new espresso machine and extra frothing pitcher arrived solidly in Vancouver yesterday! Everything heats fast and tastes smooth, though unpacking the brown carton showed zero bag of complimentary 500g Espresso Roast coffee beans mentioned inside the Espresso Apprentice Pack listing.',
          'Luckily I bought beans locally to test pulling shots tonight, though could you pop that complimentary roast bag onto Monday’s postal van cleanly?',
          'Thanks,\nOwen Brooks',
        ]),
    ], [
      ['Triple · Synthesis', 'Why did code ESPRESSO10 successfully deduct $40 on Owen’s invoice?', ['The Espresso Apprentice Pack bundle exceeds the $400 threshold', 'Total cart items exceeded $250', 'Adding a frothing pitcher unlocks a $40 discount', 'Barista Video Passes replace coffee beans'], 0, 'ตอบ The Espresso Apprentice Pack bundle exceeds $400... (ราคาชุด $460 >= $400 ตามกฎ ESPRESSO10 ให้ส่วนลด $40 ทันที)'],
      ['Triple · Detail', 'Which item was accidentally omitted from Owen’s delivered carton?', ['The complimentary 500g bag of Espresso Roast beans', 'The Precision Stainless Frothing Pitcher', 'The stainless tamper', '50 paper dripper filters'], 0, 'ตอบ The complimentary 500g bag... (zero bag of complimentary 500g Espresso Roast coffee beans)'],
      ['Triple · Synthesis', 'How much would Owen have paid BEFORE delivery if he had bought the Home Pour-Over Kit + Frothing Pitcher ($28) instead?', ['$173 plus shipping fee (under $250)', '$133 with free delivery', '$145 with $40 off', '$250 exact total'], 0, 'ตอบ $173 plus shipping fee... ($145 + $28 = $173 ไม่ถึงเกณฑ์ส่งฟรี $250 และไม่ถึงเกณฑ์โค้ด $400)'],
      ['Triple · Detail', 'When did Owen receive his espresso package?', ['March 8', 'March 3', 'March 4', 'March 9'], 0, 'ตอบ March 8 (ส่งอีเมลวันที่ March 9 บอก arrived yesterday = วันที่ 8 มีนาคม)'],
      ['Triple · Detail', 'Why was Owen still able to test his new machine immediately despite the missing beans?', ['He purchased coffee beans from a nearby shop locally', 'Complimentary filters had coffee powder', 'He borrowed beans from ClearBrew couriers', 'The grinder came pre-filled'], 0, 'ตอบ He purchased coffee beans... (bought beans locally to test pulling shots tonight)'],
    ]),

    // Triple Passage 2 (5 Qs: Notice + Repair Quote Email + Approval Chat)
    p7(5, 'm5-t2', [
      doc('notice', 'Oakridge Civic Center — Annual HVAC Maintenance Policy', [['Authority', 'Facilities Contract #44']],
        [
          'Approved service vendors carrying repairs estimated cleanly below $1,500 proceed directly upon Building Manager Nora Sato’s single signature. Single equipment replacements costing between $1,500 and $5,000 require countersignature from Operations VP Tom Diaz beforehand.',
        ]),
      doc('email', 'Repair Estimate Email',
        [['To', 'Nora Sato (Building Manager)'], ['From', 'PolarTemp Mechanical'], ['Date', 'April 15'], ['Subject', 'Quotation #PT-701 — Chiller Pump Bearing Replacement']],
        [
          'Dear Nora,',
          'Yesterday’s diagnostic inspection on Auditorium Chiller Unit 2 revealed seized ball bearings inside its circulation pump. Replacing sealed ceramic bearings alongside balancing fan belts carries $1,280 total parts plus labor—roughly $600 cheaper than swapping the entire pump assembly ($1,880).',
          'Once your team emails go-ahead cleanly by Tuesday afternoon, technicians hold bearing kits ready inside stock vans cleanly for Thursday 7:00 A.M. installation.',
        ]),
      doc('chat', 'Management Team Messages', [['Between', 'Nora Sato & Tom Diaz'], ['Date', 'April 15']],
        [
          chat([
            ['Nora Sato', '10:30 A.M.', 'Hi Tom! PolarTemp quoted $1,280 to rebuild Auditorium Chiller Pump bearings vs $1,880 for a whole new pump motor. Bearing rebuild restores 100% flow rate quietly!'],
            ['Tom Diaz', '10:34 A.M.', 'Rebuilding for $1,280 looks smart and saves $600 right away—plus under $1,500 your signature covers approval seamlessly! Email PolarTemp before noon so they lock Thursday morning.'],
          ]),
        ]),
    ], [
      ['Triple · Synthesis', 'Why does Nora Sato NOT formally require VP Tom Diaz’s written countersignature for the bearing rebuild?', ['The $1,280 repair falls below the $1,500 single-signature limit', 'Chiller Pump contracts bypass Contract #44', 'PolarTemp waived all labor billing', 'Civic auditorium repairs always stay exempted'], 0, 'ตอบ The $1,280 repair falls below... (ระเบียบระบุ < $1,500 แค่ลายเซ็น Nora Sato คนเดียวก็อนุมัติได้ ส่วนปั๊มใหม่ $1,880 จะต้องใช้ลายเซ็น VP)'],
      ['Triple · Synthesis', 'What would have been required if Building Management had chosen to replace the entire pump assembly ($1,880)?', ['Written countersignature from Operations VP Tom Diaz', 'Waiting until next quarterly council vote', 'Two extra vendor diagnostic inspections', 'Overnight installation after midnight'], 0, 'ตอบ Written countersignature from Operations VP... ($1,880 อยู่ในช่วง $1,500–$5,000 จึงต้องขอเคาน์เตอร์ซิกเนเจอร์จาก VP Tom Diaz)'],
      ['Triple · Detail', 'When did PolarTemp technicians diagnose the seized ball bearings?', ['April 14', 'April 15', 'Tuesday afternoon', 'Thursday 7:00 A.M.'], 0, 'ตอบ April 14 (เมลส่งวันที่ 15 เม.ย. บอก Yesterday’s diagnostic inspection = 14 เม.ย.)'],
      ['Triple · Detail', 'When is PolarTemp scheduled to perform the bearing replacement once approved?', ['Thursday at 7:00 A.M.', 'Tuesday before noon', 'April 15 afternoon', 'Next Monday'], 0, 'ตอบ Thursday at 7:00 A.M. (Thursday 7:00 A.M. installation)'],
      ['Triple · Math', 'How much does the Civic Center save by rebuilding bearings instead of installing a whole new pump?', ['$600', '$220', '$1,280', '$1,500'], 0, 'ตอบ $600 ($1,880 - $1,280 = $600)'],
    ]),

    // Triple Passage 3 (5 Qs: Press Release + Workshop Grid + Reply Email)
    p7(5, 'm5-t3', [
      doc('article', 'Harbor Design Week Announces Downtown Showroom Open House', [['Dates', 'October 17–19']],
        [
          'Over thirty independent lighting studios, acoustic felt weavers, and sustainable timber workshops across Harbor Design District open studio doors freely to retail buyers and architects during October 17–19. Wristbands grant complimentary shuttle rides connecting Pier 2 galleries to Foundry Quarter.',
        ]),
      doc('table', 'Featured Hands-On Studio Demonstrations (Free Wristband Entry)', null, [
        tbl(
          ['Studio Name', 'District', 'Day & Time', 'Topic', 'Seat Cap'],
          [
            ['Lumen Craft', 'Pier 2', 'Thurs Oct 17 · 2:00 P.M.', 'Blown Opal Glass Shades', '20'],
            ['TimberJoinery Lab', 'Foundry Qtr', 'Fri Oct 18 · 11:00 A.M.', 'Steam-Bent Ash Armchairs', '15'],
            ['WeaveAcoustic', 'Pier 2', 'Sat Oct 19 · 3:00 P.M.', 'Recycled PET Acoustic Tiles', '25'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'rsvp@harbordesignweek.org'], ['From', 'Claire Chen (Interior Designer)'], ['Date', 'October 8'], ['Subject', 'Seat RSVP — Foundry Quarter & Pier 2 Demos']],
        [
          'Hello Organizers,',
          'Counting down eagerly toward next week’s Open House! Since our interior architecture firm mostly specifies acoustic ceiling baffles and bentwood dining seating for restaurants, kindly hold one seat each cleanly for TimberJoinery Lab Friday morning plus Saturday’s Pier 2 demo led by WeaveAcoustic.',
          'Also, where inside Foundry Quarter do complimentary Design Week shuttles pick passengers up at 12:30 P.M. Friday heading back toward Pier 2 lunches?',
          'Warmly,\nClaire Chen',
        ]),
    ], [
      ['Triple · Synthesis', 'Which scheduled demonstration is Claire Chen skipping?', ['Lumen Craft’s Blown Opal Glass Shades', 'TimberJoinery Lab’s Steam-Bent Ash Armchairs', 'WeaveAcoustic’s Recycled PET Tiles', 'Foundry Quarter shuttle loop'], 0, 'ตอบ Lumen Craft’s Blown Opal Glass Shades (Claire จองเฉพาะศุกร์ TimberJoinery Lab และเสาร์ WeaveAcoustic)'],
      ['Triple · Synthesis', 'At what time will Claire’s Friday studio session start?', ['11:00 A.M.', '2:00 P.M.', '3:00 P.M.', '12:30 P.M.'], 0, 'ตอบ 11:00 A.M. (ตารางระบุ TimberJoinery Lab วันศุกร์ Oct 18 เวลา 11:00 A.M.)'],
      ['Triple · Detail', 'How does Claire travel between Foundry Quarter and Pier 2 lunches?', ['Using complimentary Open House shuttle buses', 'By coastal passenger ferry', 'On subway Line 2', 'Walking 10 kilometers'], 0, 'ตอบ Using complimentary Open House shuttle buses (บทความระบุ Wristbands grant complimentary shuttle rides connecting Pier 2 to Foundry Quarter)'],
      ['Triple · Inference', 'Which studio session has the smallest participant capacity?', ['TimberJoinery Lab (15 seats)', 'Lumen Craft (20 seats)', 'WeaveAcoustic (25 seats)', 'All cap at 30'], 0, 'ตอบ TimberJoinery Lab (15 seats เทียบ 20 และ 25)'],
      ['Triple · Detail', 'Why is Claire particularly interested in TimberJoinery Lab and WeaveAcoustic?', ['Her firm chooses acoustic baffles and bentwood dining furniture for restaurants', 'She is launching an opal glass pendant shop', 'She only attends evening dinner receptions', 'She lives inside Foundry Quarter'], 0, 'ตอบ Her firm chooses acoustic baffles... (mostly specifies acoustic ceiling baffles and bentwood dining seating for restaurants)'],
    ]),
  ];
})();

if (typeof module !== 'undefined') module.exports = { TOEIC_MOCK_VOL1: globalThis.TOEIC_MOCK_VOLS[1] };

