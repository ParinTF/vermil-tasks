// TOEIC Reading Part 7 Volume 2 (Sets 6-10: 70 Passage Groups = 270 Questions).
globalThis.TOEIC_MOCK_VOLS = globalThis.TOEIC_MOCK_VOLS || {};
globalThis.TOEIC_MOCK_VOLS[2] = (() => {
  const doc = (kind, title, meta, blocks) => ({ kind, title, ...(meta ? { meta } : {}), blocks });
  const tbl = (headers, rows) => ({ type: 'table', headers, rows });
  const lst = (items) => ({ type: 'list', items });
  const chat = (msgs) => ({ type: 'chat', msgs });
  const p7 = (set, id, docs, questions) => ({
    set,
    id,
    docs,
    questions: questions.map(([tag, q, choices, ans, why]) => ({ tag, q, choices, ans, why })),
  });

  return [
    // ══════════════════ SET 6 (Q147–Q200: 54 Qs) ══════════════════
    p7(6, 'm6-s1', [
      doc('memo', 'Staff Parking Notice', [['To', 'Floor 1–8 Tenants'], ['From', 'Harbor Plaza Security'], ['Date', 'April 8']],
        [
          'Repainting of bright yellow safety arrows inside Garage Level P2 begins Sunday morning at 6:00 A.M. All vehicles parked overnight inside P2 bays must relocate smoothly down onto Level P3 before 11:00 P.M. Saturday.',
          'Remaining cars left inside P2 after midnight will be towed carefully onto North Annex Lot B at owner expense.',
        ]),
    ], [
      ['Single · Detail', 'Why must drivers leave Level P2 empty on Sunday morning?', ['Lane safety markings are being repainted', 'North Annex Lot B is closing permanently', 'Level P3 elevators require testing', 'Security cameras failed overnight'], 0, 'ตอบ Lane safety markings are being repainted (Repainting of safety arrows inside Garage Level P2)'],
      ['Single · Detail', 'Where should overnight drivers move cars by 11:00 P.M. Saturday?', ['Level P3', 'North Annex Lot B', 'Level P1', 'Main Street exit'], 0, 'ตอบ Level P3 (relocate smoothly down onto Level P3 before 11:00 P.M. Saturday)'],
    ]),

    p7(6, 'm6-s2', [
      doc('ad', 'Harbor Pottery Studio — Weekend Wheel-Throwing Trial', [['Location', '19 Wharf Lane']],
        [
          'Curious to try shaping stoneware coffee mugs yourself? Join our Sunday afternoon 90-minute ceramic workshop ($45 all inclusive—clay, glaze firing, and herbal tea included)! Fired bowls stay ready for pickup two weeks later.',
          'Classes cap strictly at eight spinning wheels per room so instructors guide hands individually.',
        ]),
    ], [
      ['Single · Detail', 'When can participants pick up their glazed mugs?', ['Two weeks after the class', 'Immediately at class end', 'The next morning at 9:00 A.M.', 'Only on Friday evenings'], 0, 'ตอบ Two weeks after the class (Fired bowls stay ready for pickup two weeks later)'],
      ['Single · Cause', 'Why are workshop spots strictly capped at eight students?', ['So teachers give individual hands-on guidance', 'Herbal tea bars fit eight cups', 'Room heaters allow eight kilns', 'Wheel pedals break above eight users'], 0, 'ตอบ So teachers give individual... (so instructors guide hands individually)'],
    ]),

    p7(6, 'm6-s3', [
      doc('chat', 'IT Operations Chat', [['Channel', '#server-alerts'], ['Date', 'July 9']],
        [
          chat([
            ['Devon Patel', '1:18 P.M.', 'Customer invoice PDF downloads started throwing 502 gateway timeouts from Node East-2 just now.'],
            ['Grace Chen', '1:21 P.M.', 'Checking container logs—memory hit 99% during today’s bulk export script. Wait, did Finance launch their quarterly archive job early?'],
            ['Devon Patel', '1:24 P.M.', 'Yep, Tomas confirmed Finance triggered Q2 bulk PDF batch at 1:10 P.M. Let us double East-2 worker RAM cleanly right now!'],
            ['Grace Chen', '1:27 P.M.', 'Scaled Node East-2 up to 16 GB cleanly—error rate already dropped back down to zero percent.'],
          ]),
        ]),
    ], [
      ['Single · Cause', 'What overloaded Node East-2 memory at 1:10 P.M.?', ['Finance started a large quarterly PDF export early', 'A sudden rush of customer login errors', 'Hard disk drives disconnected cleanly', 'Devon restarted container servers twice'], 0, 'ตอบ Finance started a large quarterly PDF export... (Finance triggered Q2 bulk PDF batch at 1:10 P.M.)'],
      ['Single · Action', 'How did Grace resolve the gateway timeouts?', ['Increased server worker RAM allocation', 'Canceled customer invoice accounts', 'Disabled Finance email passwords', 'Shut down Node East-2 permanently'], 0, 'ตอบ Increased server worker RAM... (Scaled Node East-2 up to 16 GB)'],
      ['Single · Outcome', 'What was the error rate by 1:27 P.M.?', ['Zero percent', '99 percent', '16 percent', '50 percent'], 0, 'ตอบ Zero percent (error rate already dropped back down to zero percent)'],
    ]),

    p7(6, 'm6-s4', [
      doc('table', 'Skyline Courier — Regional Overnight Rates (From Toronto)', [['Cutoff', 'Drop parcels before 6:00 P.M. weekdays']],
        [
          tbl(
            ['Zone Destination', 'Next-Day 9:00 A.M.', 'Next-Day 5:00 P.M.', '2-Day Economy'],
            [
              ['Montreal / Ottawa', '$28', '$19', '$12'],
              ['Winnipeg / Halifax', '$42', '$29', '$18'],
              ['Vancouver / Victoria', '$54', '$38', '$24'],
            ]),
          'Rates apply up to 5 kg box weight; add $3 per extra kilogram.',
        ]),
    ], [
      ['Single · Detail', 'How much does 2-Day Economy shipping to Halifax cost for a 4 kg package?', ['$18', '$29', '$42', '$24'], 0, 'ตอบ $18 (น้ำหนักไม่เกิน 5 kg ส่งไป Halifax แบบ 2-Day Economy ราคาตาราง = $18)'],
      ['Single · Math', 'What would a 7 kg Next-Day 9:00 A.M. box cost sent from Toronto to Ottawa?', ['$34', '$28', '$31', '$25'], 0, 'ตอบ $34 (ราคาฐาน <=5 kg คือ $28 + น้ำหนักเกิน 2 kg × $3 = $6 -> รวม $34)'],
      ['Single · Detail', 'By what hour must weekday packages be dropped off for standard dispatch?', ['6:00 P.M.', '5:00 P.M.', '9:00 A.M.', 'Midnight'], 0, 'ตอบ 6:00 P.M. (Cutoff: Drop parcels before 6:00 P.M. weekdays)'],
    ]),

    p7(6, 'm6-s5', [
      doc('letter', 'Client Account Notice', [['To', 'Mr. Daniel Osei'], ['From', 'Civic Commercial Bank'], ['Date', 'June 18']],
        [
          'Dear Mr. Osei,',
          'While auditing business debit profiles last week, our fraud unit temporarily paused international online card alerts on account ending in 4412 after detecting two unusual currency login attempts from Madrid.',
          'Your retail branch terminals remain completely operational for domestic checkouts! Should those Madrid charges reflect real team business travel, confirm neatly inside your Banking App or dial Desk 4 to restore international card charges immediately.',
        ]),
    ], [
      ['Single · Purpose', 'Why did the bank contact Daniel Osei?', ['Unusual foreign login activity paused international online charges', 'His domestic retail card terminals broke down', 'Check deposits arrived three days late', 'Account 4412 closed permanently'], 0, 'ตอบ Unusual foreign login activity... (paused international online card alerts after detecting two unusual attempts from Madrid)'],
      ['Single · Detail', 'Are domestic store card swipes currently affected?', ['No, domestic branch checkouts keep working normally', 'Yes, every transaction pauses until July', 'Only check clearing continues smoothly', 'Mobile app logins stopped entirely'], 0, 'ตอบ No, domestic branch checkouts... (retail branch terminals remain completely operational for domestic checkouts)'],
      ['Single · Action', 'How can Mr. Osei reactivate international permissions if the charges were genuine?', ['Approve them inside the app or call Desk 4', 'Visit Madrid branch offices personally', 'Reapply for a new debit number 4412', 'Mail notarized travel tickets first'], 0, 'ตอบ Approve them inside the app... (confirm neatly inside your Banking App or dial Desk 4)'],
    ]),

    p7(6, 'm6-s6', [
      doc('article', 'Pacific Paper Mills Cuts Bleaching Water Usage Safely With Ozone', [['City', 'Tacoma'], ['Date', 'October 2']],
        [
          'Evergreen Pulp & Paper unveiled a closed-loop ozone pulp brightening stage at its Tacoma facility yesterday, eliminating harsh liquid chlorine chemicals from cardboard coffee sleeve manufacturing.',
          'Plant chemical lead Sarah Lin explained that concentrated oxygen gas converts bright wood pulp cleanly back to pure water after reaction, trimming daily river water draw by 1.8 million liters while stopping unpleasant sulfur steam odors across adjacent waterfront bicycle greenways.',
        ]),
    ], [
      ['Single · Detail', 'What replaced liquid chlorine chemicals in Evergreen’s Tacoma pulp brightening line?', ['Concentrated ozone oxygen gas', 'Synthetic cardboard dye', 'Boiled river salt mixtures', 'Recycled plastic pellets'], 0, 'ตอบ Concentrated ozone oxygen gas (closed-loop ozone stage ... concentrated oxygen gas converts pulp cleanly)'],
      ['Single · Benefit', 'What noticeable neighborhood benefit accompanied the factory upgrade?', ['Sulfur steam odors disappeared near waterfront bike trails', 'Bicycle trails expanded onto factory roofs', 'Coffee sleeve unit prices doubled', 'Tacoma water mains expanded pipelines'], 0, 'ตอบ Sulfur steam odors disappeared... (stopping unpleasant sulfur steam odors across adjacent waterfront bicycle greenways)'],
      ['Single · Vocab', 'The word "trimming" in paragraph 2 is closest in meaning to ___.', ['reducing', 'painting', 'measuring', 'collecting'], 0, 'ตอบ reducing (trimming daily river water draw by 1.8 million liters = ลดการใช้น้ำลง)'],
    ]),

    p7(6, 'm6-s7', [
      doc('ad', 'Careers — Retail Visual Coordinator (Nordic Home Decor)', [['Location', 'Downtown Flagship · Full-Time']],
        [
          'Love turning solid oak dining tables, woven wool throws, and sculptural ceramic lamps into calm showroom stories? [1] We are hiring a Visual Coordinator to build quarterly living-room vignette displays across three bright atrium floors.',
          'Responsibilities & Skills:',
          lst([
            'Assemble clean furniture settings weekly following HQ floor layout blueprints',
            'Swap seasonal botanical lighting fixtures smoothly alongside maintenance crew',
            'Train sales floor clerks quickly on highlighting sustainable timber labels',
          ]),
          '[2] Salary starts around $54,000 plus annual employee furniture allowances and dental insurance. [3] Apply smoothly through careers.nordichomedecor.com attaching four layout photos by June 28. [4]',
        ]),
    ], [
      ['Single · Detail', 'What should candidates include with their online application?', ['Four showroom layout photos', 'Blueprint furniture sketches mailed in print', 'Receipt for dental insurance', 'Recommendations from timber mills'], 0, 'ตอบ Four showroom layout photos (attaching four layout photos by June 28)'],
      ['Single · Detail', 'Who works alongside the Visual Coordinator to swap overhead lighting?', ['Maintenance crew', 'Furniture truck drivers', 'Accounting clerks', 'Headquarters HR staff'], 0, 'ตอบ Maintenance crew (alongside maintenance crew)'],
      ['Single · Detail', 'What extra shopping benefit comes with the position?', ['Employee furniture discounts or allowances', 'Quarterly oak lumber deliveries', 'Free international airline flights', 'Guaranteed Sunday closures'], 0, 'ตอบ Employee furniture discounts... (annual employee furniture allowances)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does this sentence fit best? "Weekend retail floor experience styling seasonal displays strongly preferred."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจาก Skills ทันที เพื่อบอกคุณสมบัติเสริมที่ชอบเป็นพิเศษ ก่อนเข้าสู่ข้อมูลเงินเดือน)'],
    ]),

    p7(6, 'm6-s8', [
      doc('memo', 'Harbor Botanical Expo — Food Truck Safety Checklists', [['Issued By', 'Fire & Health Compliance']],
        [
          'Mobile kitchen vans parking along Marina Promenade must clear morning safety inspections prior to 8:30 A.M. Friday before festival gates unlock cleanly.',
          lst([
            'Class-K stainless grease fire extinguishers require inspection tags dated within twelve months.',
            'Propane tanks must stand upright chained securely to rear iron trailer frames.',
            'Use quiet inverter generators resting inside insulated foam boxes rather than noisy construction units.',
            'Grey sink wastewater drops strictly into blue port utility valves—never pour soapy rinse down storm grates.',
          ]),
        ]),
    ], [
      ['Single · Time', 'When must food trucks pass safety inspections?', ['Before 8:30 A.M. Friday', 'Thursday midnight', 'Immediately after closing gates', 'Anytime Friday afternoon'], 0, 'ตอบ Before 8:30 A.M. Friday (clear morning safety inspections prior to 8:30 A.M. Friday)'],
      ['Single · Detail', 'How must propane tanks be secured?', ['Standing upright chained onto rear iron frames', 'Locked inside foam generator boxes', 'Stored flat under sink tables', 'Attached cleanly beside blue utility valves'], 0, 'ตอบ Standing upright chained... (stand upright chained securely to rear iron trailer frames)'],
      ['Single · Detail', 'Why does compliance require inverter generators?', ['They run quieter than loud construction generators', 'Storm grates flood construction motors', 'Propane valves plug directly into them', 'Fire extinguishers weigh less beside them'], 0, 'ตอบ They run quieter... (quiet inverter generators ... rather than noisy construction units)'],
      ['Single · Vocab', 'The word "strictly" in rule 4 is closest in meaning to ___.', ['exclusively', 'loosely', 'briefly', 'rarely'], 0, 'ตอบ exclusively (drops strictly into blue utility valves = เททิ้งเฉพาะในวาล์วท่อสีฟ้าเท่านั้น)'],
    ]),

    p7(6, 'm6-s9', [
      doc('article', 'Automated Parcel Lockers Ease Apartment Lobby Mail Chaos', [['By', 'Hannah Brooks'], ['Journal', 'Property Tech Quarterly']],
        [
          'Online retail booms pushed daily package volumes inside high-rise residential towers past double pre-2020 norms, quickly turning cramped concierge desks into towering cardboard obstacle courses. [1] Exhausted night lobby receptionists often spent three hours nightly hunting misplaced shoeboxes behind reception chairs whenever office commuters rushed home.',
          'Property managers across Vancouver increasingly counter lobby logjams by swapping decorative lobby bench space for modular steel PIN parcel walls tucked discreetly beside service elevators. [2] Delivery drivers tap multi-carrier screen menus cleanly once, load cartons across variable drawer compartments, and walk away in forty seconds flat as encrypted pickup barcodes land instantly inside tenant smartphones.',
          '"Package handling labor hours dropped cleanly 70 percent overnight, freeing front concierge staff once again for genuine neighborhood guest welcomes and building maintenance tickets," remarks Oakridge Towers manager Victor Ortiz. [3] Even perishable meal-kit boxes stay chilled inside cold-locker columns built directly onto the right-hand wall.',
          'Residents particularly appreciate retrieving shipments cleanly at midnight without waiting around restricted evening mailroom hours. [4]',
        ]),
    ], [
      ['Single · Purpose', 'What problem did residential parcel locker walls solve?', ['Lobby clutter and heavy staff labor sorting rising tenant package deliveries', 'Frequent parcel thefts outside Vancouver trains', 'Rising cardboard box wholesale prices', 'Cold hallway drafts near lobby elevators'], 0, 'ตอบ Lobby clutter and heavy staff labor... (ลดกองกล่องพัสดุรกหน้าฟรอนต์และลดเวลาพนักงานคอนเซียร์จหาของ)'],
      ['Single · Process', 'How do tenants know when a box arrives inside the lockers?', ['Encrypted pickup barcodes arrive directly on their mobile phones', 'Concierge clerks slip paper cards under apartment doors', 'Drivers ring apartment buzzers twice', 'Building websites post public tenant rosters'], 0, 'ตอบ Encrypted pickup barcodes arrive... (encrypted pickup barcodes land instantly inside tenant smartphones)'],
      ['Single · Inference', 'What can be done with cold grocery meal boxes under the new system?', ['Drivers store them inside dedicated refrigerated locker columns', 'Concierge staff move them into kitchen freezers', 'Tenants pick them up strictly before 6:00 P.M.', 'Courier vans keep cold boxes overnight'], 0, 'ตอบ Drivers store them inside dedicated refrigerated locker columns (perishable meal-kit boxes stay chilled inside cold-locker columns)'],
      ['Single · Vocab', 'The word "logjams" in paragraph 2 is closest in meaning to ___.', ['bottlenecks', 'upgrades', 'receipts', 'schedules'], 0, 'ตอบ bottlenecks (lobby logjams = ความติดขัดแออัดในล็อบบี้)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "This also eliminated mistaken pickups between neighbors sharing identical last names."', ['[3]', '[1]', '[2]', '[4]'], 0, 'ตอบ [3] (ผลพลอยได้เพิ่มเติมต่อจากคำพูดผู้จัดการตึก Victor Ortiz เรื่องประสิทธิภาพและการจัดการพัสดุด้วยรหัสลับ)'],
    ]),

    p7(6, 'm6-d1', [
      doc('ad', 'ClearCast Audio Rentals — Conference Wireless Gear', [['Rates', 'Daily Event Pricing']],
        [
          tbl(
            ['Equipment Pack', 'Daily Fee', 'Setup Difficulty', 'Includes'],
            [
              ['Solo Keynote Kit', '$65', 'Plug-and-Play', '1 Wireless Lapel Mic + Receiver + Case'],
              ['Panel 4-Mic Pack', '$175', 'Plug-and-Play', '4 Handheld Mics + Compact 4-Ch Mixer'],
              ['Full Stage Pro', '$390', 'Audio Tech Required (+$120)', '8 Wireless Channels + Dual Speakers + Mixer'],
            ]),
          'Delivery & morning hotel drop-off: Free inside Metro Core on orders totaling $150+; otherwise $30 van fee.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'rentals@clearcastaudio.com'], ['From', 'Dr. Maya Menon <m.menon@civicforum.org>'], ['Date', 'August 21'], ['Subject', 'Equipment Order for September 5 Panel']],
        [
          'Hi Audio Team,',
          'Our policy institute hosts a 75-person roundtable discussion inside Grandview Hotel (Downtown Metro Core) on Thursday, September 5. Rather than buying the large speaker setup—since Grandview Ballroom ceiling speakers already connect cleanly into any compact mixer—we want to rent ONE Panel 4-Mic Pack cleanly for the full day.',
          'Since plug-and-play setup saves us hiring a live technician, can your delivery van drop the mic case cleanly at Grandview Reception by 8:30 A.M. September 5?',
          'Best,\nMaya Menon',
        ]),
    ], [
      ['Double · Math', 'How much total will Maya Menon pay ClearCast Audio including delivery?', ['$175', '$205', '$295', '$145'], 0, 'ตอบ $175 (เช่า Panel 4-Mic Pack = $175 ซึ่งเป็น >= $150 ในเขต Metro Core จึงได้ค่าส่งฟรี $0 และไม่ต้องจ้างช่างเสียง)'],
      ['Double · Detail', 'Why did Dr. Menon skip renting the Full Stage Pro speaker package?', ['Grandview Ballroom already supplies built-in ceiling speakers', 'Only one speaker will speak during the roundtable', 'Audio technicians remain unavailable September 5', 'Full Stage equipment exceeds hotel doorway size'], 0, 'ตอบ Grandview Ballroom already supplies built-in ceiling speakers'],
      ['Double · Detail', 'How many handheld microphones are included in Maya’s chosen package?', ['Four', 'One', 'Eight', 'Zero'], 0, 'ตอบ Four (Panel 4-Mic Pack includes 4 Handheld Mics)'],
      ['Double · Synthesis', 'Does Maya need to pay the $120 audio technician fee?', ['No, because Panel 4-Mic Pack is Plug-and-Play', 'Yes, because hotels mandate union operators', 'Yes, because four channels exceed Ballroom limits', 'Only if delivery arrives before 8:30 A.M.'], 0, 'ตอบ No, because Panel 4-Mic Pack is Plug-and-Play (ค่าช่าง +$120 กำกับไว้เฉพาะ Full Stage Pro)'],
      ['Double · Inference', 'When would ClearCast charge its $30 courier drop-off fee inside Metro Core?', ['When renting strictly a Solo Keynote Kit ($65)', 'On any Thursday morning hotel event', 'For Panel packs exceeding two days', 'When speakers plug into hotel walls'], 0, 'ตอบ When renting strictly a Solo Keynote Kit ($65 ต่ำกว่าเกณฑ์ส่งฟรี $150)'],
    ]),

    p7(6, 'm6-d2', [
      doc('notice', 'Greenfield Sports Complex — Indoor Tennis Court Booking Policy', [['Access', 'Member Portal Bookings Only']],
        [
          lst([
            'Courts open daily from 6:00 A.M. to 10:00 P.M.',
            'Peak Evening Slots (5:00 P.M.–9:00 P.M. weekdays) cost $36/hour; Off-Peak Slots cost $24/hour.',
            'Full-Access Wellness Members enjoy 20% off strictly on Off-Peak court bookings.',
            'Ball hopper baskets containing 60 practice tennis balls rent flat for $8 per reservation cleanly at Check-In Desk.',
          ]),
        ]),
      doc('email', 'Booking Confirmation #GS-502',
        [['Player', 'Kevin Grant (Full-Access Wellness Member)'], ['Date', 'Wednesday, October 16'], ['Reserved Slot', 'Court 2 · 10:00 A.M.–12:00 P.M. (2 Hours)']],
        [
          'Session Breakdown: 2 × Off-Peak Indoor Court Hours · Member Discount Applied (-20%) · Plus 1 × Practice Ball Hopper Basket.',
          'Please swipe your plastic Wellness ID pass cleanly at Check-In Desk ten minutes ahead so indoor LED lights turn on promptly at 10:00 A.M. Cancellation requires 12 hours notice.',
        ]),
    ], [
      ['Double · Math', 'How much total did Kevin pay for his 2-hour Wednesday session AND ball hopper?', ['$46.40', '$56.00', '$65.60', '$38.40'], 0, 'ตอบ $46.40 (Off-Peak 10:00–12:00 น. = $24 × 2 ชม. = $48 -> ลดสมาชิก 20% เหลือ $38.40 + ค่าเช่าตะกร้าลูกเทนนิส $8 = $46.40)'],
      ['Double · Synthesis', 'Why did Kevin receive the 20% member discount on this booking?', ['He booked weekday daytime Off-Peak hours as a Wellness Member', 'He reserved two consecutive hours instead of one', 'Wednesday courts include free member mornings', 'Check-in discounts ball hoppers by 20%'], 0, 'ตอบ He booked weekday daytime Off-Peak... (10:00–12:00 น. อยู่นอกช่วง Peak 5–9 P.M.)'],
      ['Double · Detail', 'When must Kevin swipe his ID card at the desk?', ['At 9:50 A.M.', 'At 10:10 A.M.', 'Twelve hours early', 'At 6:00 A.M.'], 0, 'ตอบ At 9:50 A.M. (ten minutes ahead of 10:00 A.M.)'],
      ['Double · Inference', 'How much would Kevin have paid per hour for tennis court access alone at 7:00 P.M. Wednesday?', ['$36/hour (no discount applies during Peak hours)', '$28.80/hour', '$24/hour', '$19.20/hour'], 0, 'ตอบ $36/hour (Peak 5–9 P.M. ราคา $36 และส่วนลด 20% ให้เฉพาะ Off-Peak เท่านั้น)'],
      ['Double · Detail', 'How many tennis balls come inside the rented hopper basket?', ['60', '20', '36', '12'], 0, 'ตอบ 60 (60 practice tennis balls)'],
    ]),

    p7(6, 'm6-t1', [
      doc('ad', 'EcoCrate Packaging — Custom Branded Mailer Boxes', [['Lead Time', '10 Business Days']],
        [
          tbl(
            ['Box Size', 'Min Qty', 'Unit Rate (500 pcs)', 'Unit Rate (1,000+ pcs)', 'Interior Print Ink?'],
            [
              ['Small (20×15×8 cm)', '250', '$1.40', '$1.10', 'No (Outside 1-color only)'],
              ['Medium (30×22×10 cm)', '250', '$1.90', '$1.55', 'Yes (+$0.25/box)'],
              ['Large (42×30×14 cm)', '250', '$2.65', '$2.15', 'Yes (+$0.25/box)'],
            ]),
          'One-time brass printing plate setup fee: $120 (Waived automatically when ordering 1,000+ boxes!).',
        ]),
      doc('chat', 'Merchandising Ops Chat', [['Channel', '#snack-boxes'], ['Date', 'May 6']],
        [
          chat([
            ['Elena Wu', '3:10 P.M.', 'Ready to launch our monthly granola + coffee gift kit! Need Medium cartons cleanly with our dark green welcome message printed INSIDE the lid so unboxing pops.'],
            ['Benny Park', '3:14 P.M.', 'Should we order 500 first or jump cleanly straight to 1,000 boxes? Ordering 1,000 waives that $120 plate fee AND drops unit price nicely!'],
            ['Elena Wu', '3:17 P.M.', 'Let us go straight with 1,000 Medium boxes with inside ink—we will burn through 1,000 before autumn anyway!'],
          ]),
        ]),
      doc('invoice', 'EcoCrate Production Order #EC-1904',
        [['Client', 'Harvest Roast Co.'], ['Date', 'May 7'], ['Scheduled Ship Date', 'May 21']],
        [
          'Specs: 1,000 × Medium Custom Branded Mailer (30×22×10 cm) · Outside Dark Green Ink + Interior Lid Message (+$0.25/box).',
          'Printing Plate Setup Fee: $0.00 (Waived · 1,000-unit tier). Total Order Billed: $1,800.00.',
        ]),
    ], [
      ['Triple · Synthesis', 'How did Harvest Roast avoid paying EcoCrate’s $120 printing plate setup charge?', ['They ordered at least 1,000 boxes', 'Medium boxes waive setup charges automatically', 'They picked single outside-color ink only', 'Orders placed in May bypass plate charges'], 0, 'ตอบ They ordered at least 1,000 boxes (Waived automatically when ordering 1,000+ boxes)'],
      ['Triple · Math', 'Verify how the $1,800.00 total on Invoice #EC-1904 breaks down per Medium box:', ['$1.55 base rate + $0.25 interior print = $1.80 × 1,000 boxes', '$1.90 base rate + $0.25 interior print × 800 boxes', '$1.10 base rate + $0.25 interior print + $120 fee', '$1.55 × 1,000 plus $250 express delivery'], 0, 'ตอบ $1.55 base rate + $0.25 interior print = $1.80 × 1,000 = $1,800'],
      ['Triple · Inference', 'Why could Elena NOT order Small boxes for her granola gift kit plan?', ['Small boxes do not support interior lid ink printing', 'Small boxes cap minimum quantities above 1,000', 'Small boxes take 20 business days lead time', 'Plate fees double on Small sizes'], 0, 'ตอบ Small boxes do not support interior lid ink printing (ตารางระบุ Interior Print Ink ของ Small คือ No)'],
      ['Triple · Detail', 'When is Invoice #EC-1904 scheduled to ship?', ['May 21', 'May 6', 'May 7', 'May 17'], 0, 'ตอบ May 21 (Scheduled Ship Date: May 21; ตรงกับ 10 วันทำการหลัง 7 พ.ค.)'],
      ['Triple · Detail', 'What ink color did Elena choose for the greeting inside the box lid?', ['Dark green', 'Matte black', 'Bright yellow', 'Silver foil'], 0, 'ตอบ Dark green (our dark green welcome message printed INSIDE the lid)'],
    ]),

    p7(6, 'm6-t2', [
      doc('memo', 'Library Digital Microfilm Scanner Booking Policy', [['Location', 'Westgate Archive Basement'], ['Updated', 'March 1']],
        [
          'Two specialized high-DPI historical newspaper microfilm scanners (Unit A and Unit B) operate exclusively by advance slot reservation cleanly inside Basement Room B2. Researchers may reserve up to 2 hours per calendar day free of charge. Staff cannot stay past closing bell at 5:30 P.M.',
        ]),
      doc('table', 'Friday, March 15 — Microfilm Reader Log', null, [
        tbl(
          ['Time Window', 'Unit A (Wide Glass)', 'Unit B (Roll-Feed Auto)', 'Notes'],
          [
            ['10:00 A.M.–12:00 P.M.', 'Booked: P. Ramirez', 'Available', ''],
            ['1:00 P.M.–3:00 P.M.', 'Booked: M. Jensen', 'Maintenance Check', 'Unit B offline until 3:00'],
            ['3:00 P.M.–5:00 P.M.', 'Available', 'Available', 'Archive closes 5:30 P.M.'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'archive@westgatelibrary.org'], ['From', 'Dr. Priya Nair <p.nair@historydept.edu>'], ['Date', 'March 13'], ['Subject', 'Friday March 15 Scanner Slot for Newspaper Maps']],
        [
          'Hello Archive Desk,',
          'I need two straight hours scanning fragile 1920s folded harbor property broadsheet negatives this Friday afternoon (cannot reach campus cleanly before noon). Since old folded sheets jam roll-feed loaders, please assign Unit A cleanly rather than Unit B. Looking at Friday openings after midday, let me grab the earliest open afternoon block cleanly!',
          'Best,\nPriya Nair',
        ]),
    ], [
      ['Triple · Synthesis', 'Which reservation time slot fits Dr. Priya Nair’s exact requirements on March 15?', ['Unit A · 3:00 P.M.–5:00 P.M.', 'Unit A · 1:00 P.M.–3:00 P.M.', 'Unit B · 3:00 P.M.–5:00 P.M.', 'Unit B · 10:00 A.M.–12:00 P.M.'], 0, 'ตอบ Unit A · 3:00 P.M.–5:00 P.M. (ต้องมาช่วงบ่าย, ต้องใช้ Unit A เพราะกระดาษพับเก่าติดเครื่องป้อนอัตโนมัติ Unit B, ช่วง 1–3 P.M. Unit A ถูก M. Jensen จองไปแล้ว จึงเหลือแค่ 3–5 P.M.)'],
      ['Triple · Detail', 'Why does Priya want to avoid Unit B?', ['Fragile folded sheets jam its automated roll feeder', 'Unit B charges hourly reservation fees', 'Unit B breaks down permanently Friday evening', 'Room B2 only fits laptops beside Unit A'], 0, 'ตอบ Fragile folded sheets jam its automated roll feeder'],
      ['Triple · Detail', 'Who reserved Unit A between 1:00 P.M. and 3:00 P.M. Friday?', ['M. Jensen', 'P. Ramirez', 'Dr. Priya Nair', 'Archive Technician'], 0, 'ตอบ M. Jensen (แถว 1:00–3:00 P.M. Unit A: Booked M. Jensen)'],
      ['Triple · Inference', 'Why can Priya NOT ask the archive desk to extend her afternoon appointment until 6:00 P.M.?', ['Staff cannot stay open past 5:30 P.M.', 'Microfilm bulbs overheat after two hours', 'Archive closes cleanly on weekends', 'Three-hour sessions violate Friday rules'], 0, 'ตอบ Staff cannot stay open past 5:30 P.M. (Memo ระบุ Staff cannot stay past closing bell at 5:30 P.M.)'],
      ['Triple · Detail', 'Why does Unit B show unavailable between 1:00 P.M. and 3:00 P.M.?', ['Scheduled maintenance check', 'Booked by M. Jensen', 'Wide glass tray replacement', 'Booked by P. Ramirez'], 0, 'ตอบ Scheduled maintenance check (ตารางระบุ Maintenance Check · Unit B offline until 3:00)'],
    ]),

    p7(6, 'm6-t3', [
      doc('article', 'Pacific Craft Coffee Expands Roastery Subscription Club', [['Launched', 'September 1']],
        [
          'Neighborhood subscribers opting into Pacific Craft’s biweekly bean club earn free courier delivery plus seasonal origin tasting postcards. Standard 340g bags retail for $18 each, whereas subscribers pay $15 per delivered bag and swap grind size or pause shipments cleanly anytime inside member portals without penalties.',
        ]),
      doc('table', 'Subscriber Portal Log — Member #PC-804 (Sara Lindqvist)', null, [
        tbl(
          ['Dispatch Date', 'Origin Roast', 'Grind Spec', 'Status', 'Billed'],
          [
            ['Sept 15', 'Ethiopia Yirgacheffe', 'Whole Bean', 'Delivered', '$15'],
            ['Sept 29', 'Colombia Huila', 'Whole Bean', 'Delivered', '$15'],
            ['Oct 13', 'Paused (Travel)', 'Whole Bean', 'Skipped by User', '$0'],
            ['Oct 27', 'Guatemala Antigua', 'Espresso Fine', 'Scheduled Dispatch', '$15'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'club@pacificcraft.com'], ['From', 'Sara Lindqvist'], ['Date', 'October 20'], ['Subject', 'Quick Switch Back + Double Gift Bag Question']],
        [
          'Hi Pacific Craft Crew,',
          'Returned cleanly from my Osaka work trip and unpaused my account right in time for Oct 27! Noticed my portal currently shows Espresso Fine grind for the Guatemala shipment because I tested a moka pot before traveling—could you flip Oct 27 smoothly back onto Whole Bean cleanly? Also, I want to toss one non-subscription retail pouch of Ethiopia Yirgacheffe into that exact Oct 27 courier carton for my sister—would adding that extra single gift bag bill $15 or $18?',
          'Cheers,\nSara',
        ]),
    ], [
      ['Triple · Detail', 'Why did Sara Lindqvist skip the October 13 delivery?', ['She was traveling on a trip', 'She switched onto retail single-bag purchases', 'Ethiopia roast sold out cleanly', 'Membership fees rose above $18'], 0, 'ตอบ She was traveling on a trip (ตารางระบุ Paused Travel และอีเมลระบุเพิ่งกลับจาก Osaka work trip)'],
      ['Triple · Inference', 'What pricing does the extra single gift bag for Sara’s sister likely carry if treated as a non-subscription retail bag?', ['$18', '$15', '$0 (Free Gift)', '$30'], 0, 'ตอบ $18 (บทความระบุ Standard 340g bags retail for $18 each, whereas subscribers pay $15)'],
      ['Triple · Detail', 'Which coffee origin is scheduled to ship to Sara on October 27?', ['Guatemala Antigua', 'Ethiopia Yirgacheffe', 'Colombia Huila', 'Costa Rica Tarrazu'], 0, 'ตอบ Guatemala Antigua (ตารางแถว Oct 27)'],
      ['Triple · Detail', 'What modification does Sara request for her October 27 bag?', ['Change the grind back to Whole Bean instead of Espresso Fine', 'Delay shipment until November 10', 'Cancel Colombia Huila deliveries', 'Switch onto biweekly paper postcards'], 0, 'ตอบ Change the grind back to Whole Bean (flip Oct 27 smoothly back onto Whole Bean cleanly)'],
      ['Triple · Math', 'How much total was billed to Sara across September and October BEFORE any extra gift bag?', ['$45', '$60', '$54', '$30'], 0, 'ตอบ $45 ($15 Sept 15 + $15 Sept 29 + $0 Oct 13 + $15 Oct 27 = $45)'],
    ]),

    // ══════════════════ SET 7 (Q147–Q200: 54 Qs) ══════════════════
    p7(7, 'm7-s1', [
      doc('email', 'E-mail Message',
        [['To', 'Downtown Accounting Staff'], ['From', 'Audit Compliance Desk'], ['Date', 'January 10'], ['Subject', 'Year-End Paper Receipt Boxes']],
        [
          'Boxes holding reconciled 2025 paper merchant slips must carry bold black Marker ID labels listing branch code, fiscal quarter, and auditor initials before Records Courier picks up pallets Wednesday at 2:00 P.M.',
          'Unlabeled cartons risk being left sitting inside Storage Room C until February quarterly archive runs.',
        ]),
    ], [
      ['Single · Detail', 'What must be written boldly on archive carton labels?', ['Branch code, quarter, and auditor initials', 'Courier van plate number', 'Accountant home addresses', 'Estimated box weight in pounds'], 0, 'ตอบ Branch code, quarter, and auditor initials'],
      ['Single · Inference', 'What happens to boxes missing required labels on Wednesday?', ['They remain uncollected in Storage Room C until February', 'Records Courier discards them cleanly', 'Headquarters charges branch penalties', 'Accounting staff open and re-audit slips'], 0, 'ตอบ They remain uncollected... (risk being left sitting inside Storage Room C until February)'],
    ]),

    p7(7, 'm7-s2', [
      doc('notice', 'Clinic Facility Update', [['Venue', 'Riverside Dental Partners']],
        [
          'New Dedicated Side-Lot Patient Parking',
          'Because Main Street lane widening limits street meter spaces cleanly through August, patients holding afternoon appointments may park completely free behind our clinic inside Oak Street Lot B.',
          'Remember to grab a pink validated exit barcode token at Reception Desk 1 before returning to your car.',
        ]),
    ], [
      ['Single · Cause', 'Why did the dental clinic arrange free side-lot parking through August?', ['Road construction along Main Street reduced meter parking', 'Reception Desk 1 moved onto Oak Street', 'Meter fees doubled downtown yesterday', 'Oak Street Lot B just finished paving'], 0, 'ตอบ Road construction along Main Street... (Main Street lane widening limits street meter spaces)'],
      ['Single · Detail', 'What do patients need to exit Oak Street Lot B cleanly at zero fee?', ['A validated pink barcode token from Reception', 'A paper appointment calendar screenshot', 'Parking meter coins for backup', 'Dentist signatures on car dashboards'], 0, 'ตอบ A validated pink barcode token... (pink validated exit barcode token at Reception Desk 1)'],
    ]),

    p7(7, 'm7-s3', [
      doc('chat', 'Showroom Team Chat', [['Channel', '#display-floor'], ['Date', 'June 3']],
        [
          chat([
            ['Tomoko Sato', '9:04 A.M.', 'Just finished assembling the new walnut bookshelf display near Entrance A. Quick snag—two bronze shelf pins fell under pallet crates cleanly missing.'],
            ['Ben Carter', '9:07 A.M.', 'Let me check spare hardware drawers behind Counter 3! Pretty sure spare 5mm brass-tone pins came packed inside last spring’s table kits.'],
            ['Tomoko Sato', '9:10 A.M.', 'Sweet, fingers crossed! Doors unlock cleanly for preview buyers at 10:00 A.M.'],
            ['Ben Carter', '9:14 A.M.', 'Found an unopened pack of ten identical 5mm bronze pins right inside Drawer B! Walking them across right now.'],
          ]),
        ]),
    ], [
      ['Single · Problem', 'What minor issue slowed Tomoko’s bookshelf setup?', ['Two bronze shelf pins went missing', 'Walnut panels arrived chipped near Entrance A', 'Pallet crates blocked front doors', 'Doors locked early at 9:10 A.M.'], 0, 'ตอบ Two bronze shelf pins went missing (two bronze shelf pins fell under pallet crates cleanly missing)'],
      ['Single · Detail', 'Where did Ben Carter find replacement pins?', ['Inside Drawer B behind Counter 3', 'Inside Entrance A pallet crates', 'From another retail store', 'On top of spring dining tables'], 0, 'ตอบ Inside Drawer B behind Counter 3 (drawers behind Counter 3 -> Drawer B)'],
      ['Single · Inference', 'Will the display likely finish before preview buyers enter at 10:00 A.M.?', ['Yes, replacement pins arrive around 9:15 A.M. leaving 45 minutes', 'No, pins must ship from Warehouse tomorrow', 'No, Ben left at 9:14 A.M. without hardware', 'Buyers postponed preview until noon'], 0, 'ตอบ Yes, replacement pins arrive around 9:15 A.M.... (มีเวลาอีกตั้ง 45 นาทีก่อนเปิดประตู 10:00 น.)'],
    ]),

    p7(7, 'm7-s4', [
      doc('table', 'Metro Shuttle Transit — Regional Airport Van Rates', [['Service', 'Door-to-Door Direct']],
        [
          tbl(
            ['Pickup District', 'First Passenger', 'Each Additional Passenger (Same Stop)', 'Early Dawn Surcharge (Before 5:30 A.M.)'],
            [
              ['Downtown Core', '$32', '+$10', '+$8 flat'],
              ['North Suburbs', '$44', '+$12', '+$8 flat'],
              ['Coastal Harbor', '$56', '+$14', '+$8 flat'],
            ]),
          'Max two standard checked suitcases included per guest; third oversized trunk adds $12.',
        ]),
    ], [
      ['Single · Math', 'How much would three coworkers sharing one stop from Downtown Core pay at 9:00 A.M.?', ['$52', '$96', '$60', '$42'], 0, 'ตอบ $52 (คนแรก $32 + เพิ่มอีก 2 คน × $10 = $20 -> รวม $52; 9:00 A.M. ไม่เสียค่ารอบเช้ามืด)'],
      ['Single · Detail', 'What extra charge applies to a 4:45 A.M. airport pickup from North Suburbs for one person with one bag?', ['$52', '$44', '$56', '$64'], 0, 'ตอบ $52 (North Suburbs คนแรก $44 + ค่ารอบก่อน 5:30 น. $8 = $52)'],
      ['Single · Detail', 'When does a baggage fee of $12 apply?', ['When carrying a third oversized suitcase trunk', 'For every checked cabin backpack', 'On Downtown pickups past 6:00 P.M.', 'Only for coastal harbor bookings'], 0, 'ตอบ When carrying a third oversized suitcase trunk'],
    ]),

    p7(7, 'm7-s5', [
      doc('review', 'Online Hardware Review — VoltPro Portable Tire Compressor', [['Buyer', 'Carlos Mendez · Verified Purchase']],
        [
          'Review: "Compact enough to tuck silently beside jumper cables inside my delivery van glove tray! Topped four low van tires from 28 up to 36 PSI cleanly in six minutes with bright automatic LED shutoff stopping precisely at target numbers. Wish the braided air hose measured 20 cm longer so tall van valve stems required zero bending, though build quality feels tank-solid."',
          'Response from VoltPro Engineering: "Glad digital auto-stop helped your van routes, Carlos! Our upcoming 2026 hose extension adapter clips cleanly onto all 2025 compressors and ships free once you submit serial digits on support.voltpro.io."',
        ]),
    ], [
      ['Single · Praise', 'Which feature did Carlos Mendez highlight positively?', ['Accurate automatic pressure shutoff and compact size', 'Ultra-long braided rubber hose', 'Zero-noise brushless motor', 'Free lifetime replacement fuses'], 0, 'ตอบ Accurate automatic pressure shutoff and compact size (compact enough... bright automatic LED shutoff stopping precisely)'],
      ['Single · Critique', 'What minor flaw did Carlos mention about the compressor?', ['The air hose felt slightly short for tall stems', 'It took over thirty minutes per tire', 'Jumper cables drained van batteries', 'PSI numbers flickered in dark areas'], 0, 'ตอบ The air hose felt slightly short... (Wish the braided air hose measured 20 cm longer)'],
      ['Single · Detail', 'What offer does VoltPro provide to Carlos in its reply?', ['A free upcoming hose extension adapter upon serial registration', 'A complete refund of compressor pricing', 'Replacement metal valve caps', 'Free tire rotation checks'], 0, 'ตอบ A free upcoming hose extension adapter... (upcoming hose extension adapter ships free once you submit serial digits)'],
    ]),

    p7(7, 'm7-s6', [
      doc('article', 'Smart Composting Cafeterias Slash Downtown Food Hauling Costs', [['Journal', 'Civic Business Monthly']],
        [
          'Twelve midtown office towers cut bulky weekly dumpster pickups in half over the past six months simply by placing tabletop food-dehydrator presses beside dish-return windows. Overnight warm airflow gently shrinks heavy wet soup greens and citrus rinds into lightweight odor-free dry soil meal within eight hours.',
          'Building operations manager Rachel Cho notes dry compost flakes take barely one-sixth previous bin space, eliminating slimy trash spills along freight service ramps while delivering nutrient-rich planter soil directly to neighborhood rooftop farm boxes every Friday.',
        ]),
    ], [
      ['Single · Process', 'How do tabletop dehydrator presses change cafeteria waste?', ['Warm overnight airflow shrinks wet food into dry odorless flakes', 'Chemicals dissolve citrus rinds down kitchen sinks', 'Solar panels freeze wet leftovers cleanly', 'Municipal trucks haul heavy bins twice daily'], 0, 'ตอบ Warm overnight airflow shrinks... (Overnight warm airflow gently shrinks heavy wet leftovers into lightweight odor-free dry soil meal)'],
      ['Single · Benefit', 'What advantage did building managers observe along freight ramps?', ['Garbage spills and bulky dumpster hauls fell sharply', 'Cafeterias sold packaged fertilizer in lobbies', 'Water pipes consumed less dishwashing soap', 'Rooftop farms paid commercial trash rent'], 0, 'ตอบ Garbage spills and bulky dumpster hauls fell sharply (cut weekly pickups in half ... eliminating slimy trash spills)'],
      ['Single · Detail', 'Where does finished nutrient meal go each Friday?', ['To neighborhood rooftop farm planter boxes', 'Directly into downtown sewer mains', 'Back into cafe kitchen ovens', 'To suburban plastic landfills'], 0, 'ตอบ To neighborhood rooftop farm planter boxes (delivering nutrient-rich planter soil directly to neighborhood rooftop farm boxes)'],
    ]),

    p7(7, 'm7-s7', [
      doc('ad', 'Job Opportunity — Technical Onboarding Specialist (CleanGrid SaaS)', [['Location', 'Hybrid · Austin Office']],
        [
          'CleanGrid builds cloud monitoring software helping solar farm technicians track panel inverter voltage smoothly across five continents. [1] As Technical Onboarding Specialist, you will host live 45-minute setup video trainings for newly signed engineering clients and migrate legacy Excel site equipment lists smoothly into client dashboards.',
          'What We Look For:',
          lst([
            'Clear patience explaining technical dashboard menus to non-software electricians',
            'Fluency debugging messy CSV column formatting inside Excel or Google Sheets',
            'Prior client customer-success or software support experience (18+ months)',
          ]),
          '[2] Enjoy flexible weekday morning start hours, annual tech stipends, and full medical/vision plans. [3] Apply smoothly through cleangrid.io/jobs attaching a 2-minute sample training video link explaining any favorite everyday app. [4]',
        ]),
    ], [
      ['Single · Detail', 'What is a primary responsibility of the role?', ['Teaching new engineering clients how to set up software via video sessions', 'Climbing solar rooftops to wire live inverters', 'Designing hardware panel junction boxes', 'Auditing company corporate taxes'], 0, 'ตอบ Teaching new engineering clients... (host live 45-minute setup video trainings ... migrate Excel lists)'],
      ['Single · Detail', 'What unusual item must applicants submit with their job application?', ['A short sample video demonstrating how any app works', 'Signed letters from three solar farm electricians', 'Raw CSV accounting sheets', 'Austin driving permits'], 0, 'ตอบ A short sample video... (attaching a 2-minute sample training video link explaining any everyday app)'],
      ['Single · Requirement', 'How much prior client support or success experience is requested?', ['At least 18 months', 'Exactly five years', 'Strictly three months internship', 'Zero experience required'], 0, 'ตอบ At least 18 months (18+ months)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Comfort troubleshooting basic browser cache or REST API error messages helps too."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจาก What We Look For ทันที ก่อนเข้าสู่หัวข้อสวัสดิการ)'],
    ]),

    p7(7, 'm7-s8', [
      doc('memo', 'Museum Patron Photography & Tripod Policy', [['Institution', 'Harbor Contemporary Art Museum']],
        [
          'Handheld smartphone cameras and silent mirrorless bodies remain welcome across permanent Collection Galleries 1 through 5 for personal non-commercial snapshot sharing.',
          'Restrictions:',
          lst([
            'Flash strobes, selfie sticks, and standing three-leg tripods remain strictly forbidden inside public walkways for artwork protection.',
            'Temporary Traveling Exhibition Hall 6 bans photography entirely under strict international lender copyright agreements.',
            'Commercial fashion shoots or wedding portrait sessions require pre-booked Monday closed-gallery facility permits ($450/hr).',
          ]),
        ]),
    ], [
      ['Single · Detail', 'Which gallery forbids visitor smartphone snapshots altogether?', ['Traveling Exhibition Hall 6', 'Collection Gallery 1', 'Collection Gallery 5', 'Outdoor Plaza Courtyard'], 0, 'ตอบ Traveling Exhibition Hall 6 (bans photography entirely under lender copyright agreements)'],
      ['Single · Inference', 'On which weekday can commercial wedding portrait crews reserve empty galleries?', ['Mondays', 'Wednesdays', 'Saturdays', 'Sundays'], 0, 'ตอบ Mondays (require pre-booked Monday closed-gallery facility permits)'],
      ['Single · NOT', 'Which device is ALLOWED in Permanent Galleries 1–5?', ['Silent mirrorless handheld cameras without flash', 'Selfie extension poles', 'Folding steel tripods', 'Bright external strobe flashes'], 0, 'ตอบ Silent mirrorless handheld cameras... (อนุญาต smartphone และ silent mirrorless แบบไม่ใช้แฟลช/ขาตั้ง/ไม้เซลฟี่)'],
      ['Single · Vocab', 'The word "strict" in bullet 2 is closest in meaning to ___.', ['binding and firm', 'optional', 'brief', 'colorful'], 0, 'ตอบ binding and firm (strict agreements = ข้อตกลงที่เข้มงวดผูกพันตามกฎหมายลิขสิทธิ์)'],
    ]),

    p7(7, 'm7-s9', [
      doc('article', 'Small Electric Vans Quietly Transform Historic Downtown Night Freight', [['By', 'Owen Diaz'], ['Publication', 'European Fleet Watch']],
        [
          'Narrow cobblestone lanes winding through medieval European retail cores force heavy diesel grocery lorries to squeeze tightly onto dawn sidewalks, awakening upstairs apartment windows cleanly at 5:00 A.M. with rattling engine clatter. [1] Over the past twelve months, sixteen artisan bakeries and boutique wine shops in Ghent pooled logistics schedules to fund shared whisper-quiet electric micro-cargo vans operating straight out of a ring-road edge depot.',
          'Standing barely 1.6 meters wide, agile electric vans zip effortlessly past café patio chairs without blocking fire-lane curbs or spewing warm tailpipe soot onto crisp pastry shop glass windows. [2] Each compact truck holds twelve chilled Euro-crates reliably for eighty city stops on a single overnight charge.',
          '"Consolidated night runs cut downtown commercial truck trips cleanly by 60 percent along our cobblestone market street," praises urban transit planner Katrin Peeters. [3] Shop owners simply tap shared smartphone keys unlocking curb drop boxes cleanly before leaving evening tills, letting zero-contact night drops rest fresh inside climate hallways before morning baristas step inside.',
          'Municipal officials recently announced subsidizing charging sockets at two more suburban edge yards next spring so suburban furniture restorers can join the quiet fleet. [4]',
        ]),
    ], [
      ['Single · Purpose', 'What is the main focus of the article?', ['Independent stores sharing narrow quiet electric delivery vans downtown', 'Banning sidewalk cafe patios in Ghent', 'Electric passenger tram ticket discounts', 'Training night baristas on bread baking'], 0, 'ตอบ Independent stores sharing narrow quiet electric delivery vans... (ร้านค้าย่านเมืองเก่าใน Ghent ร่วมกันใช้รถส่งของไฟฟ้าขนาดแคบเพื่อลดเสียงและความแออัด)'],
      ['Single · Detail', 'Why were older diesel trucks problematic along Ghent’s downtown market street?', ['Their width squeezed tight lanes and engines rattled early sleepers awake', 'They lacked space to hold Euro-crates', 'Diesel prices quadrupled over night shifts', 'Bakery glass windows melted near curbs'], 0, 'ตอบ Their width squeezed tight lanes and engines rattled... (squeeze tightly onto dawn sidewalks, awakening upstairs windows cleanly with rattling clatter)'],
      ['Single · Process', 'How do closed bakeries receive clean deliveries safely overnight?', ['Electric drivers unlock digital curb boxes with shared smartphone keys', 'Baristas stay waiting past midnight', 'Cargo sits openly beside patio chairs', 'Ring-road couriers hire armed street guards'], 0, 'ตอบ Electric drivers unlock digital curb boxes... (tap shared smartphone keys unlocking curb drop boxes cleanly)'],
      ['Single · Vocab', 'The word "agile" in paragraph 2 is closest in meaning to ___.', ['nimble', 'heavy', 'ancient', 'fragile'], 0, 'ตอบ nimble (agile electric vans = รถตู้ที่คล่องตัวหลบหลีกซอกซอยแคบได้ง่าย)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Street sweepers also report cleanly clear mornings free of stalled curbside triple-parking."', ['[3]', '[1]', '[2]', '[4]'], 0, 'ตอบ [3] (ผลเสริมต่อจากการลดจำนวนรถบรรทุกลง 60% บนถนนตลาดตามคำกล่าวของ Katrin Peeters)'],
    ]),

    p7(7, 'm7-d1', [
      doc('ad', 'SkyView Conference Center — Hybrid Boardroom Packages', [['Location', 'Midtown Business District']],
        [
          tbl(
            ['Package Tier', 'Max Seated', 'Cameras & Audio', '4-Hour Slot', 'Full 8-Hour Day'],
            [
              ['FocusPod 8', '8 seats', 'Dual 4K Auto-Track Bar', '$240', '$420'],
              ['Executive Suite 18', '18 seats', 'Ceiling Mics + 2 Cameras', '$450', '$780'],
              ['TownHall 45', '45 seats', '3 Broadcast Cams + Sound Desk', '$820', '$1,450'],
            ]),
          'Add barista coffee urns & assorted pastries for +$18 per attendee. Outside catering brings a flat $75 plate cleanup fee.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'bookings@skyviewcenter.com'], ['From', 'Rachel Kim <r.kim@northlightbiotech.com>'], ['Date', 'November 5'], ['Subject', 'All-Day Hybrid Shareholder Call — Nov 19']],
        [
          'Hello SkyView Desk,',
          'Our executive board needs a quiet Midtown room for a Full 8-Hour Day board review on Tuesday, November 19. Twelve directors attend physically inside the room while six overseas partners join cleanly via Zoom video link, so crisp ceiling mics tracking whoever speaks around the table will save tons of passing microphones!',
          'We will order SkyView’s coffee urns and pastry platters cleanly for the 12 in-person attendees rather than hauling outside snacks. Could you share an estimated total invoice?',
          'Regards,\nRachel Kim',
        ]),
    ], [
      ['Double · Synthesis', 'Which room package meets Rachel Kim’s group size and camera/mic needs?', ['Executive Suite 18', 'FocusPod 8', 'TownHall 45', 'Outside Catering Room'], 0, 'ตอบ Executive Suite 18 (มีผู้เข้าห้องจริง 12 คนเกิน FocusPod 8 และต้องการ Ceiling Mics ตามที่อีเมลระบุ)'],
      ['Double · Math', 'What will the total cost be for the 8-hour room plus in-house coffee/pastries for 12 physical directors?', ['$996', '$780', '$855', '$1,104'], 0, 'ตอบ $996 (Full Day Executive Suite 18 = $780 + 12 คน × $18 = $216 -> รวม $996; ไม่เสียค่าทำความสะอาดอาหารนอก $75)'],
      ['Double · Detail', 'Why does Northlight Biotech avoid paying the $75 plate cleanup fee?', ['They are ordering coffee and pastries directly from SkyView', 'Six overseas directors join strictly via video', 'FocusPod seats under ten visitors', 'They booked for a full eight hours'], 0, 'ตอบ They are ordering coffee and pastries directly... (using SkyView’s coffee/pastries rather than outside catering)'],
      ['Double · Inference', 'How many total people will participate across physical seating plus video?', ['18 people', '12 people', '45 people', '6 people'], 0, 'ตอบ 18 people (12 directors physically + 6 overseas partners on Zoom = 18)'],
      ['Double · Detail', 'What problem do ceiling microphones help avoid during the hybrid call?', ['Having directors pass handheld microphones around the table', 'Zoom network dropouts on November 19', 'Outside catering cleanup surcharges', 'Paying overtime rental rates'], 0, 'ตอบ Having directors pass handheld microphones... (will save tons of passing microphones!)'],
    ]),

    p7(7, 'm7-d2', [
      doc('notice', 'Pacific Home Appliance — Warranty Dispatch Rules', [['Support Line', '1-800-555-0194']],
        [
          lst([
            'Register appliance Serial Number online within 30 days of purchase to activate full 2-Year In-Home Service Coverage.',
            'Unregistered items still qualify cleanly under standard 1-Year Store Carry-In Warranty ONLY upon presenting itemized store sales slips.',
            'In-home technician dispatch covers defective motors, relays, and cooling compressors cleanly at zero labor fee—replacement glass shelves carry separate parts pricing.',
          ]),
        ]),
      doc('email', 'E-mail Message',
        [['To', 'support@pacifichomeappliance.com'], ['From', 'Marcus Hall'], ['Date', 'December 12'], ['Subject', 'Compressor Cycling Loudly — Fridge Serial #PH-77412']],
        [
          'Hi Support Team,',
          'I am hoping our cooling compressor qualifies cleanly for an in-home technician visit this week! I purchased my ArcticWave 400L refrigerator sixteen months ago on August 10 last year, and thankfully registered Serial #PH-77412 cleanly inside your customer portal that exact afternoon I plugged it in.',
          'Yesterday the bottom freezer compressor started clicking nonstop and stopped dropping below zero degrees cleanly. No cracked glass shelves anywhere—just worried about frozen goods thawing rapidly!',
          'Best,\nMarcus Hall',
        ]),
    ], [
      ['Double · Synthesis', 'Does Marcus Hall qualify for a free in-home technician visit?', ['Yes, he registered within 30 days (activating 2-Year coverage) and compressors are covered', 'No, because 16 months exceeds the 1-Year Carry-In limit', 'No, because glass shelves void freezer warranties', 'Only if he delivers the 400L fridge cleanly to the store'], 0, 'ตอบ Yes, he registered within 30 days... (ซื้อมา 16 เดือน < 2 ปี เพราะลงทะเบียนในวันเดียวกับที่ซื้อ จึงได้สิทธิ์ In-Home Service 2 ปีเต็ม และมอเตอร์/คอมเพรสเซอร์ฟรีค่าแรง)'],
      ['Double · Detail', 'Why would Marcus pay zero repair labor fees under this claim?', ['Cooling compressor issues carry $0 labor under In-Home Coverage', 'Retailers pay all technician callout fees on December Fridays', 'Marcus bought separate freezer parts protection', 'Store sales slips cover 5 years'], 0, 'ตอบ Cooling compressor issues carry $0 labor... (dispatch covers cooling compressors cleanly at zero labor fee)'],
      ['Double · Inference', 'What would happen if Marcus had ONLY forgotten to register Serial #PH-77412 online after buying?', ['Coverage would have expired after 12 months (1-Year Carry-In), leaving his 16-month claim out of warranty', 'Glass shelves would ship free instead', 'Technician would waive labor on motors anyway', 'He would still have 24 months coverage cleanly'], 0, 'ตอบ Coverage would have expired after 12 months... (ไม่ได้ลงทะเบียนจะได้แค่ 1-Year Carry-In ซึ่งผ่านไป 16 เดือนแล้วก็หมดประกัน)'],
      ['Double · Detail', 'When did the refrigerator problem start?', ['December 11', 'August 10', 'December 12', 'Within 30 days'], 0, 'ตอบ December 11 (ส่งเมล Dec 12 บอก Yesterday compressor started clicking = Dec 11)'],
      ['Double · Detail', 'Which household issue is Marcus hoping to prevent quickly?', ['Frozen food thawing inside the freezer', 'Glass shelves shattering', 'Portal password resetting', 'Excessive store restocking charges'], 0, 'ตอบ Frozen food thawing... (worried about frozen goods thawing rapidly!)'],
    ]),

    p7(7, 'm7-t1', [
      doc('ad', 'VeloCargo Electric Bike Fleet — Urban Merchant Deals', [['Showroom', '44 River Avenue']],
        [
          tbl(
            ['Model', 'Payload Cap', 'Range / Charge', 'Single Price', 'Fleet 3+ Unit Rate'],
            [
              ['CityHop S2', '85 kg', '75 km', '$1,650', '$1,480 / bike'],
              ['CargoHaul L4', '160 kg', '110 km', '$2,450', '$2,200 / bike'],
              ['ChillBox C6 (Fridge Pod)', '140 kg', '95 km', '$3,100', '$2,800 / bike'],
            ]),
          'Optional spare quick-swap 48V lithium battery pack: $380 ($320 when ordered alongside any fleet purchase).',
        ]),
      doc('memo', 'Purchasing Request — Meadow Fresh Organics', [['From', 'Logistics Lead Sofia Gomez'], ['Date', 'April 3']],
        [
          'To replace two noisy delivery scooters cleanly before summer produce volume rises, we plan buying FOUR CargoHaul L4 electric cargo bikes alongside TWO spare quick-swap lithium packs so drivers never pause afternoon farm boxes awaiting wall charging.',
          'Wait—no fridge pod needed since produce deliveries finish cleanly within twenty minutes locally using insulated wool box liners.',
        ]),
      doc('invoice', 'VeloCargo Fleet Invoice #VC-409',
        [['Customer', 'Meadow Fresh Organics'], ['Date', 'April 4']],
        [
          '4 × CargoHaul L4 Electric Bikes (Fleet 3+ Tier) + 2 × Spare Quick-Swap 48V Battery Packs (Bundled Rate).',
          'Subtotal Charged: $9,440.00 · Expected Assembly Pickup: Friday, April 11 at 44 River Avenue.',
        ]),
    ], [
      ['Triple · Math', 'Verify the $9,440.00 subtotal billed on Invoice #VC-409:', ['(4 × $2,200) + (2 × $320)', '(4 × $2,450) + (2 × $380)', '(4 × $2,200) + (2 × $380)', '(4 × $2,800) + (2 × $320)'], 0, 'ตอบ (4 × $2,200) + (2 × $320) (4 × $2,200 = $8,800; 2 × $320 bundled battery = $640 -> รวม $9,440)'],
      ['Triple · Synthesis', 'Why did Sofia Gomez choose CargoHaul L4 instead of the more expensive ChillBox C6?', ['Short twenty-minute trips let wool box liners keep produce cool cleanly without built-in fridge pods', 'ChillBox C6 payload exceeds 160 kg limits', 'CargoHaul L4 carries extra batteries at half rate', 'River Avenue stopped stocking ChillBox frames'], 0, 'ตอบ Short twenty-minute trips... (produce deliveries finish cleanly within twenty minutes locally using insulated wool liners)'],
      ['Triple · Inference', 'How much did Meadow Fresh save in total by qualifying for Fleet 3+ pricing on BOTH bikes AND spare batteries?', ['$1,120', '$1,000', '$120', '$880'], 0, 'ตอบ $1,120 (รถ 4 คันประหยัด $250/คัน = $1,000 + แบต 2 ก้อนประหยัด $60/ก้อน = $120 -> รวม $1,120)'],
      ['Triple · Detail', 'Where and when will Meadow Fresh collect the assembled bikes?', ['At 44 River Avenue on Friday, April 11', 'Delivered straight to suburban farms April 4', 'At CityHop Depot on April 3', 'Inside Showroom West Monday morning'], 0, 'ตอบ At 44 River Avenue on Friday, April 11'],
      ['Triple · Detail', 'Why did the bakery/grocery team add two spare quick-swap batteries?', ['So drivers keep running afternoon deliveries without waiting for charging', 'Because CargoHaul bikes need two batteries simultaneously', 'Old scooters donated mismatched cords', 'To extend single charges past 300 km'], 0, 'ตอบ So drivers keep running... (never pause afternoon farm boxes awaiting wall charging)'],
    ]),

    p7(7, 'm7-t2', [
      doc('article', 'Midtown Tech Week Announces Free Hardware Makers Pavilion', [['Dates', 'June 20–22']],
        [
          'Open-source hardware tinkerers, robotics students, and CNC machine builders gather cleanly across Hall B June 20–22 at Midtown Tech Week. Evening laser-cutter speed contests require pre-booked safety checks due to tight protective eyewear caps.',
        ]),
      doc('table', 'Hall B Hardware Maker Workshop Schedule (Pre-Registration Free)', null, [
        tbl(
          ['Date', 'Time', 'Session', 'Supervisor', 'Eyewear Needed?'],
          [
            ['June 20', '2:00 P.M.', '3D-Printed Enclosure Tolerances', 'A. Kim', 'No'],
            ['June 21', '4:30 P.M.', 'High-Speed Acrylic Laser Cutting', 'M. Navarro', 'Yes (Mandatory)'],
            ['June 22', '11:00 A.M.', 'PCB Micro-Soldering Clinic', 'S. Brooks', 'Yes (Mandatory)'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'makers@midtowntechweek.org'], ['From', 'Leo Tan'], ['Date', 'June 12'], ['Subject', 'Seat Transfer — June 21 -> June 22']],
        [
          'Hi Makers Desk,',
          'I originally signed up early for M. Navarro’s afternoon laser-cutting session on Friday June 21 cleanly! However, our university robotics sponsor scheduled an unexpected design meeting at 4:00 P.M. Friday across town, forcing me to miss Hall B Friday afternoon.',
          'Could you switch my free seat cleanly into S. Brooks’ morning soldering clinic on Saturday June 22 instead? Also, I already bring personal ANSI Z87 clear wraparound lab safety glasses from campus—will those pass inspection cleanly or do we use Hall B’s loaner goggles?',
          'Thanks!\nLeo Tan',
        ]),
    ], [
      ['Triple · Synthesis', 'Which scheduled workshop is Leo Tan transferring INTO?', ['PCB Micro-Soldering Clinic on June 22', '3D-Printed Enclosure Tolerances on June 20', 'High-Speed Acrylic Laser Cutting on June 21', 'Hall A Keynote Lecture'], 0, 'ตอบ PCB Micro-Soldering Clinic on June 22 (ย้ายจาก June 21 ของ M. Navarro ไปเป็น June 22 เวลา 11:00 A.M. ของ S. Brooks)'],
      ['Triple · Synthesis', 'Why did Leo ask about his personal ANSI Z87 safety glasses?', ['Because S. Brooks’ June 22 soldering clinic requires protective eyewear', 'Enclosure tolerances banned clear safety glasses', 'All Hall B guests wear yellow hard hats', 'Laser goggles expired before June 12'], 0, 'ตอบ Because S. Brooks’ June 22 soldering clinic requires protective eyewear (ตารางระบุ Eyewear Needed: Yes Mandatory)'],
      ['Triple · Detail', 'Why can Leo no longer attend M. Navarro’s Friday workshop?', ['His university robotics sponsor set an afternoon meeting across town', 'Protective eyewear ran out on June 21', 'Enrollment required paid sponsor fees', 'M. Navarro canceled June 21 classes'], 0, 'ตอบ His university robotics sponsor... (university robotics sponsor scheduled an unexpected design meeting at 4:00 P.M. Friday)'],
      ['Triple · Detail', 'Which session does NOT mandate protective eyewear?', ['3D-Printed Enclosure Tolerances', 'High-Speed Acrylic Laser Cutting', 'PCB Micro-Soldering Clinic', 'All three sessions mandate eyewear'], 0, 'ตอบ 3D-Printed Enclosure Tolerances (ตารางระบุ June 20 Eyewear Needed: No)'],
      ['Triple · Detail', 'What time does Leo’s newly requested Saturday clinic begin?', ['11:00 A.M.', '2:00 P.M.', '4:30 P.M.', '4:00 P.M.'], 0, 'ตอบ 11:00 A.M. (ตาราง June 22 -> 11:00 A.M.)'],
    ]),

    p7(7, 'm7-t3', [
      doc('notice', 'Oakridge Hotel — Group Catering Invoice Policy', [['Department', 'Banquet & Conferences']],
        [
          'Corporations booking group luncheons settle a 30% refundable room deposit at booking, with final guest plate headcounts locked strictly 72 hours (3 full days) prior to event start. Headcounts lowered less than 72 hours ahead remain billed at the locked quantity.',
        ]),
      doc('invoice', 'Oakridge Banquet Invoice — Crestline Law Firm',
        [['Event Date', 'Friday, November 15 · Noon'], ['Original Contracted Headcount', '40 Guests × $48 Plate = $1,920']],
        [
          'Initial 30% Deposit Paid Oct 20: $576.00 · Scheduled Final Headcount Lock Deadline: Tuesday, November 12 at Noon.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'banquets@oakridgehotel.com'], ['From', 'Paula Gomez (Crestline Law)'], ['Date', 'Monday, November 11 · 3:00 P.M.'], ['Subject', 'Updated Headcount for Friday Nov 15 Luncheon']],
        [
          'Hi Events Team,',
          'Six junior attorneys just departed unexpectedly on an out-of-state client deposition tomorrow morning, bringing our firm’s attending headcount down neatly from 40 guests to 34 attendees for Friday’s noon banquet.',
          'Since today is Monday afternoon well ahead of Tuesday’s 72-hour lock deadline, could you revise our remaining balance smoothly reflecting 34 plates rather than 40 cleanly? Keep our original salmon + herb risotto entrees unchanged!',
          'Many thanks,\nPaula Gomez',
        ]),
    ], [
      ['Triple · Synthesis', 'Will Oakridge Hotel adjust Crestline Law Firm’s banquet charges down to 34 guests?', ['Yes, Paula notified Banquets on Monday afternoon well ahead of Tuesday noon’s 72-hour deadline', 'No, because 30% deposits lock all 40 plates permanently', 'No, out-of-state client travel voids banquet adjustments', 'Yes, because salmon entrees dropped below $48'], 0, 'ตอบ Yes, Paula notified Banquets on Monday... (เส้นตาย 72 ชม. ก่อนเที่ยงวันศุกร์คือเที่ยงวันอังคาร 12 พ.ย. แต่ Paula ส่งอีเมลตั้งแต่วันจันทร์ 11 พ.ย. 15:00 น.)'],
      ['Triple · Math', 'After deducting the already paid $576 deposit, what FINAL REMAINING balance will Crestline Law owe for 34 guests at $48/plate?', ['$1,056', '$1,632', '$1,344', '$1,920'], 0, 'ตอบ $1,056 (ค่าอาหารใหม่ 34 × $48 = $1,632 หักมัดจำที่จ่ายแล้ว $576 = เหลือยอดค้างชำระ $1,056)'],
      ['Triple · Detail', 'Why are six lawyers missing Friday’s luncheon?', ['They left on an unexpected out-of-state deposition', 'They requested vegetarian wraps instead of salmon', 'November 12 flights arrived late', 'Banquet contracts capped room space at 34'], 0, 'ตอบ They left on an unexpected... (departed unexpectedly on an out-of-state client deposition)'],
      ['Triple · Detail', 'How much deposit did Crestline Law pay back on October 20?', ['$576', '$1,920', '$288', '$1,632'], 0, 'ตอบ $576 (Initial 30% Deposit Paid Oct 20: $576.00)'],
      ['Triple · Inference', 'What would have happened if Paula had emailed Wednesday afternoon, November 13 instead?', ['The firm would still have been billed for all 40 plates', 'Deposit money would have doubled', 'Oakridge would cancel the Friday hall booking', 'Entree choices would switch automatically'], 0, 'ตอบ The firm would still have been billed for all 40 plates (เลยกำหนด 72 ชม. เที่ยงวันอังคาร กฎระบุ headcounts lowered <72h remain billed at locked quantity)'],
    ]),

    // ══════════════════ SET 8 (Q147–Q200: 54 Qs) ══════════════════
    p7(8, 'm8-s1', [
      doc('memo', 'Staff Bulletin', [['To', 'Regional Store Managers'], ['From', 'Loss Prevention'], ['Date', 'February 18']],
        [
          'Starting March 1, high-value compact wireless earbuds and smartwatch boxes priced over $150 move from open aisle hooks behind locked glass showcase bays near Checkout Counter 1.',
          'Please issue every morning opener a magnetic display key fob and record serial handover logs cleanly before opening security shutters.',
        ]),
    ], [
      ['Single · Detail', 'Which merchandise moves behind locked glass cases starting March 1?', ['Earbuds and smartwatches over $150', 'All store accessories under $50', 'Charging cables behind Counter 2', 'Returned clearance boxes'], 0, 'ตอบ Earbuds and smartwatches over $150 (high-value earbuds and smartwatch boxes priced over $150)'],
      ['Single · Detail', 'What should morning supervisors do before raising security shutters?', ['Sign key-fob serial logs and hand fobs to morning openers', 'Count glass showcases twice overnight', 'Unlock Checkout Counter 1 shutters first', 'Move $100 accessories to open aisles'], 0, 'ตอบ Sign key-fob serial logs... (issue every morning opener a magnetic display key fob and record serial handover logs)'],
    ]),

    p7(8, 'm8-s2', [
      doc('notice', 'Community Announcement — Central Botanical Conservatory', [['Seasonal Hours', 'May 1 – September 30']],
        [
          'Evening Twilight Strolls return cleanly every Thursday through August! Conservatory glasshouses stay warmly illuminated until 9:00 P.M., offering live string quartets beside Lotus Fountain from 6:30 P.M. to 8:15 P.M.',
          'Admission drops smoothly to half price after 5:00 P.M. exclusively on Thursday evenings.',
        ]),
    ], [
      ['Single · Detail', 'On which evening does the conservatory offer half-price late admission?', ['Thursday', 'Friday', 'Saturday', 'Sunday'], 0, 'ตอบ Thursday (drops smoothly to half price after 5:00 P.M. exclusively on Thursday evenings)'],
      ['Single · Detail', 'How long does the live string quartet perform beside Lotus Fountain?', ['One hour and 45 minutes', 'Three hours', 'Two hours and 30 minutes', 'Forty-five minutes'], 0, 'ตอบ One hour and 45 minutes (6:30 P.M. to 8:15 P.M. = 1 ชม. 45 นาที)'],
    ]),

    p7(8, 'm8-s3', [
      doc('chat', 'Shipping Coordination Messages', [['Thread', '#dock-bay-2'], ['Date', 'September 11']],
        [
          chat([
            ['Martin Reyes', '8:10 A.M.', 'Pacific Freight truck #44 just pulled into Bay 2 with our fall knitwear boxes, but the driver says liftgate hydraulics froze halfway down.'],
            ['Nadia Wu', '8:13 A.M.', 'Oh man—can our manual steel pallet ramp reach Bay 2 bumper height cleanly?'],
            ['Martin Reyes', '8:16 A.M.', 'Checking now... Bay 2 concrete dock sits 15 cm higher than trailer bed, so yes, our portable aluminum ramp clips smoothly straight onto the rear floor sill!'],
            ['Nadia Wu', '8:19 A.M.', 'Awesome, bring two warehouse helpers onto Bay 2 now so #44 clears dock traffic before our dairy van arrives at 9:00 A.M.'],
          ]),
        ]),
    ], [
      ['Single · Problem', 'Why could truck #44 not unload using its own hydraulic liftgate?', ['Its hydraulic mechanism got stuck halfway down', 'Bay 2 sits too low for trailer tires', 'Forklifts blocked Bay 2 entrance', 'Knitwear cartons weighed past ramp caps'], 0, 'ตอบ Its hydraulic mechanism got stuck halfway down (liftgate hydraulics froze halfway down)'],
      ['Single · Solution', 'How are workers able to move boxes off truck #44 anyway?', ['By locking a portable aluminum ramp onto the trailer floor', 'By waiting until a mechanic fixes truck hydraulics', 'By shifting truck #44 to Bay 1 at 9:00 A.M.', 'By handing cartons one by one onto dairy vans'], 0, 'ตอบ By locking a portable aluminum ramp... (portable aluminum ramp clips smoothly straight onto rear floor sill)'],
      ['Single · Cause', 'Why does Nadia urge unloading #44 quickly before 9:00 A.M.?', ['Another van carrying dairy products arrives at 9:00 A.M.', 'Bay 2 locks shutters at 9:00 A.M.', 'Truck #44 faces afternoon highway rain', 'Helpers rotate shifts cleanly at 9:00 A.M.'], 0, 'ตอบ Another van carrying dairy products arrives at 9:00 A.M.'],
    ]),

    p7(8, 'm8-s4', [
      doc('table', 'Clearview Coworking — Monthly Membership Plans', [['Access', 'All 4 Downtown Branches']],
        [
          tbl(
            ['Tier', 'Monthly Fee', 'Workspace Type', 'Conference Room Credits', 'Locker Included?'],
            [
              ['Flex Lounge', '$140', 'Any shared open seat', '2 hrs / month', 'No (+$25/mo)'],
              ['Dedicated Desk', '$280', 'Reserved desk + 24" display', '6 hrs / month', 'Yes'],
              ['Private 4-Desk Suite', '$980', 'Lockable suite for 4 staff', '15 hrs / month', 'Yes (4 lockers)'],
            ]),
          'Unused monthly conference hours do not carry over past billing month end.',
        ]),
    ], [
      ['Single · Detail', 'Which membership plan does NOT automatically include a storage locker?', ['Flex Lounge', 'Dedicated Desk', 'Private 4-Desk Suite', 'None include lockers'], 0, 'ตอบ Flex Lounge (ตารางระบุ Locker Included?: No +$25/mo)'],
      ['Single · Math', 'How much would two independent freelancers paying for Flex Lounge + optional lockers spend combined per month?', ['$330', '$280', '$305', '$560'], 0, 'ตอบ $330 (($140 + $25) × 2 คน = $330/เดือน)'],
      ['Single · Detail', 'What happens to unused conference room credit hours on the final day of the month?', ['They expire at month end', 'They convert into $25 discounts', 'They roll forward up to six months', 'They transfer cleanly between branches'], 0, 'ตอบ They expire at month end (Unused monthly conference hours do not carry over past billing month end)'],
    ]),

    p7(8, 'm8-s5', [
      doc('letter', 'Client Advisory Letter', [['To', 'Valued Policyholders'], ['From', 'Harbor Auto Mutual'], ['Date', 'October 3']],
        [
          'Dear Valued Customer,',
          'Replacing shattered windshields no longer requires mailing crumpled shop invoices or waiting weeks for paper refund checks! Harbor Auto Mutual now connects seamlessly with 320 certified glass workshops nationwide through DirectGlass Billing.',
          'Whenever gravel chips a windshield, open our mobile app to pick an approved neighborhood shop near your workplace. We pay the workshop directly cleanly minus any standard policy deductible, letting drivers pick up vehicles fast with zero cash hassle.',
        ]),
    ], [
      ['Single · Purpose', 'What service improvement does this letter announce?', ['Cashless direct auto-glass repair billing through certified shops', 'Lower comprehensive windshield deductibles nationwide', 'A new mobile gravel-road hazard warning alert', 'Extended shop business hours past 8:00 P.M.'], 0, 'ตอบ Cashless direct auto-glass repair billing... (จ่ายตรงกับอู่กระจก 320 แห่งผ่านแอปโดยไม่ต้องสำรองจ่ายและส่งใบเสร็จทางไปรษณีย์)'],
      ['Single · Detail', 'What must drivers do to start a direct glass repair claim?', ['Select a partner workshop inside the Harbor mobile app', 'Mail signed repair quotes before dropping cars off', 'Pay shops cash and upload bank slips later', 'Switch onto paper check billing'], 0, 'ตอบ Select a partner workshop inside the Harbor mobile app'],
      ['Single · Detail', 'What charge might a customer still pay directly if applicable to their plan?', ['Their standard policy deductible', 'Mail check processing postage', 'A $320 DirectGlass enrollment fee', 'Sales taxes on windshield glass'], 0, 'ตอบ Their standard policy deductible (pay workshop directly cleanly minus any standard policy deductible)'],
    ]),

    p7(8, 'm8-s6', [
      doc('article', 'Boutique Chocolate Maker Backs Transparent Cocoa Traceability', [['Location', 'Zurich'], ['Journal', 'Ethical Commerce Weekly']],
        [
          'Helvetia Cacao Co. printed clickable supply-chain QR stamps across all four hundred thousand dark-chocolate wrappers manufactured this season. Scanning the gold seal lets supermarket buyers view exact harvest week data, fermentation sun-drying logs, and cooperative fair-trade payment receipts from Ecuadorian smallholder farms.',
          'Managing partner Laura Keller notes QR transparency boosted repeat online sales cleanly 28 percent among environmentally conscious corporate holiday gift buyers.',
        ]),
    ], [
      ['Single · Detail', 'What can shoppers see when scanning the wrapper QR stamp?', ['Harvest timing, drying records, and farm payment receipts', 'Interactive video games and coupons', 'Calorie counts compared against competitors', 'Grocery store shelf delivery timestamps'], 0, 'ตอบ Harvest timing, drying records, and farm payment receipts'],
      ['Single · Result', 'Which customer group increased repeat gift purchases noticeably following QR adoption?', ['Corporate holiday gift buyers', 'Zurich supermarket cashiers', 'Ecuadorian cacao inspectors', 'Wholesale shipping brokers'], 0, 'ตอบ Corporate holiday gift buyers (boosted repeat online sales 28% among corporate holiday gift buyers)'],
      ['Single · Vocab', 'The word "transparency" in paragraph 2 refers to ___.', ['openness and clearly shared sourcing data', 'materials made of clear glass', 'extremely fragile packaging', 'secretly priced wholesale cacao'], 0, 'ตอบ openness and clearly shared sourcing data (QR transparency = ความโปร่งใสที่ตรวจสอบแหล่งที่มาและยอดจ่ายได้จริง)'],
    ]),

    p7(8, 'm8-s7', [
      doc('ad', 'Now Hiring — Bilingual Accounts Receivable Clerk', [['Firm', 'Greenway Freight International'], ['City', 'Miami (On-Site)']],
        [
          'Greenway Freight coordinates refrigerated maritime cargo across Latin America and Caribbean terminals cleanly daily. [1] Join our Floor 4 Finance group verifying ocean bill-of-lading statements, reconciling wire transfers in USD and MXN, and gently reminding wholesale importers ahead of Net-30 due dates.',
          'Core Criteria:',
          lst([
            'Fluency speaking and drafting crisp polite emails cleanly in BOTH English and Spanish',
            'Minimum 2 years billing, collections, or bookkeeping experience cleanly using ERP tools',
            'Sharp eye noticing mismatched tariff quantities or duplicate customs line entries',
          ]),
          '[2] Full healthcare, commuter transit checks, and yearly 15-day vacation package start day one. [3] Apply online uploading your bilingual CV to greenwayfreight.com/careers before June 14. [4]',
        ]),
    ], [
      ['Single · Detail', 'Which software or workflow will the clerk handle routinely?', ['Matching ocean shipping statements and wire payments cleanly', 'Driving refrigerated maritime container cranes', 'Designing marketing ocean maps', 'Installing Net-30 warehouse scanners'], 0, 'ตอบ Matching ocean shipping statements... (verifying bill-of-lading statements, reconciling wire transfers)'],
      ['Single · Requirement', 'What language ability is strictly required?', ['Strong spoken and written fluency in English and Spanish', 'Conversational French and Portuguese', 'Basic Spanish reading only', 'Fluency in Mandarin customs codes'], 0, 'ตอบ Strong spoken and written fluency in English and Spanish'],
      ['Single · Detail', 'When do healthcare benefits begin for hired employees?', ['Immediately on the first day of work', 'After completing 90 probation days', 'Beginning June 14 next year', 'Only after two years service'], 0, 'ตอบ Immediately on the first day of work (benefits ... start day one)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Familiarity with NetSuite or SAP invoicing modules strongly accelerates onboarding."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจากรายการ Core Criteria เพื่อเสริมทักษะซอฟต์แวร์บัญชี ก่อนเข้าสู่สวัสดิการ)'],
    ]),

    p7(8, 'm8-s8', [
      doc('memo', 'City Bike-Share Program — Winter Storage & Spring Re-Launch Rules', [['Operator', 'VeloCity Transit']],
        [
          'Before freezing road-salt brine corrodes aluminum chain guards over mid-winter storms, VeloCity rotates 400 pedal docks indoors between December 15 and February 28 while preserving 200 heated all-weather main subway docks.',
          'Guidelines:',
          lst([
            'Annual Pass Members keep frozen memberships automatically paused during December–February UNLESS checking out heated subway station bikes.',
            'Electric pedal-assist bikes store indoors strictly under heated roof bays (charging stops cleanly below zero Celsius).',
            'Spring station re-installation starts cleanly March 1 along East River loops first.',
          ]),
        ]),
    ], [
      ['Single · Cause', 'Why do 400 outdoor stations move indoors mid-winter?', ['Road salt and freezing storms corrode chain mechanisms', 'Electricity rates quadruple in winter', 'Subway halls prohibit bike-share access', 'All cyclists prefer indoor stationary gyms'], 0, 'ตอบ Road salt and freezing storms corrode... (Before freezing road-salt brine corrodes aluminum chain guards)'],
      ['Single · Condition', 'What happens to Annual Memberships if a rider NEVER unlocks a bike between Dec 15 and Feb 28?', ['Paid membership time automatically pauses cleanly until spring', 'Unused months forfeit cleanly January 1', 'Members owe a $20 heated dock surcharge', 'Electric passes convert to bus tickets'], 0, 'ตอบ Paid membership time automatically pauses... (memberships automatically paused UNLESS checking out heated subway bikes)'],
      ['Single · Detail', 'When do heated subway station bikes remain usable despite cold outdoors?', ['All winter (for riders checking out bikes cleanly)', 'Only after March 1 along East River', 'Strictly on dry days above 10 Celsius', 'Weekends only between noon and dusk'], 0, 'ตอบ All winter (preserving 200 heated all-weather main subway docks throughout Dec 15–Feb 28)'],
      ['Single · Detail', 'Which neighborhoods receive spring bikes back FIRST starting March 1?', ['East River bike loops', 'Northern suburban hills', 'Downtown financial basements', 'Airport parking terminals'], 0, 'ตอบ East River bike loops (starts cleanly March 1 along East River loops first)'],
    ]),

    p7(8, 'm8-s9', [
      doc('article', 'Independent Hardware Cafes Pair Co-Working Coffee With Tool Libraries', [['By', 'Sam Rivera'], ['Section', 'Small Business Innovation']],
        [
          'Urban renters living inside compact studio apartments frequently abandon minor home repair plans simply because storing bulky orbital sanders, tile wet-saws, and cordless hammer drills year-round eats precious hall closets. [1] Across Seattle and Portland, clever social enterprises are opening daytime espresso counters linked seamlessly to wall-to-wall neighborhood tool-lending vaults.',
          'Monthly patrons paying a modest $28 community bench pass enjoy half-price filter pours alongside weekend tool checkouts ranging from torque wrenches down to upholstery staplers. [2] Staffed repair mentors walk hesitant beginners step-by-step through straightening wobbly oak chair joints right atop butcher-block workbenches tucked cleanly behind acoustic café partitions.',
          '"Most drills sit completely idle roughly 99 percent of their factory lifespan inside residential closets," explains CraftBean co-founder Nora Sato. [3] Pooling shared tools turns single-use plastic tool clutter into vibrant weekend maker clubs while pulling steady weekday remote laptop workers into otherwise quiet daytime workshops.',
          'Two regional library systems already contracted CraftBean staff to design pop-up repair carts inside public branches next summer. [4]',
        ]),
    ], [
      ['Single · Purpose', 'What core concept does CraftBean Cafe promote?', ['Combining neighborhood coffee bars with shared tool lending and DIY help desks', 'Selling discounted cordless drills directly to apartment landlords', 'Converting noisy woodworking sheds into quiet office rentals', 'Eliminating espresso machines from community hubs'], 0, 'ตอบ Combining neighborhood coffee bars with shared tool lending... (คาเฟ่ที่รวมโต๊ะกาแฟกับคลังยืมเครื่องมือช่างและครูแนะนำซ่อมของ)'],
      ['Single · Detail', 'Besides borrowing tools on weekends, what discount comes with a $28 monthly pass?', ['Fifty percent off filter coffee pours', 'Free oak chair cushions', 'Free closet storage bins downtown', 'Unlimited weekend power saws to keep'], 0, 'ตอบ Fifty percent off filter coffee pours (half-price filter pours alongside weekend tool checkouts)'],
      ['Single · Inference', 'Why did CraftBean combine daytime coffee with a repair workshop?', ['Remote cafe customers bring steady weekday income while workshops sit quiet', 'Drills run smoother when heated beside espresso boilers', 'Coffee shops legally require acoustic wood partitions', 'Landlords banned noisy kitchen blenders'], 0, 'ตอบ Remote cafe customers bring steady weekday income... (pulling steady weekday remote laptop workers into otherwise quiet daytime workshops)'],
      ['Single · Vocab', 'The word "hesitant" in paragraph 2 is closest in meaning to ___.', ['unsure', 'experienced', 'impatient', 'careless'], 0, 'ตอบ unsure (hesitant beginners = มือใหม่ที่ยังลังเลไม่มั่นใจในการซ่อมเอง)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Instead, lending one pro-grade Makita kit serves forty apartment neighbors cleanly all year."', ['[3]', '[1]', '[2]', '[4]'], 0, 'ตอบ [3] (ต่อจากคำกล่าวของ Nora Sato ที่ว่าสว่านตามบ้านถูกวางทิ้งไว้เฉยๆ 99% ของอายุใช้งาน)'],
    ]),

    p7(8, 'm8-d1', [
      doc('webpage', 'Harbor Symphony Season Subscriptions — Member Tiers', [['Season', 'Sept – May (8 Masterworks Concerts)']],
        [
          tbl(
            ['Package Plan', 'Concerts Included', 'Seating Tier', 'Price', 'Ticket Exchange Fee'],
            [
              ['Discovery Trio', 'Pick any 3 concerts', 'Rear Balcony', '$135', '$12 per swap'],
              ['Classic Five', 'Pick any 5 concerts', 'Grand Tier Center', '$260', '$0 (2 free swaps)'],
              ['Full Patron All-8', 'All 8 seasonal concerts', 'Orchestra Prime', '$460', '$0 (Unlimited free swaps)'],
            ]),
          'Subscribers ordering online before August 15 receive two complimentary guest drink lounge vouchers cleanly.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'boxoffice@harborsymphony.org'], ['From', 'Daniel Sato'], ['Date', 'August 10'], ['Subject', 'Ticket Date Swap + August Voucher Inquiry']],
        [
          'Hello Box Office,',
          'Ordered my Classic Five subscription cleanly back on August 8 for Grand Tier Center seating! Checking December business trips just now revealed a sudden conflict on December 14 when Beethoven’s Ninth performs.',
          'Could I exchange my December 14 ticket cleanly into the February 22 Cello Concerto instead using one of my subscription exchanges? Also, should those two guest lounge drink vouchers mail inside paper ticket sleeves or load digitally inside our member wallet?',
          'Warm regards,\nDaniel Sato',
        ]),
    ], [
      ['Double · Synthesis', 'How much exchange fee will Daniel Sato owe to swap his December 14 seat onto February 22?', ['$0 (Free)', '$12', '$25', '$135'], 0, 'ตอบ $0 (Free) (Daniel ถือแพ็กเกจ Classic Five ซึ่งได้สิทธิ์เปลี่ยนรอบฟรี 2 ครั้ง)'],
      ['Double · Synthesis', 'Why does Daniel qualify for the two complimentary lounge drink vouchers?', ['He bought his subscription on August 8 ahead of the August 15 cutoff', 'Orchestra Prime seats include drink vouchers year-round', 'Ticket swaps automatically grant lounge perks', 'December concerts offer free champagne'], 0, 'ตอบ He bought his subscription on August 8... (สั่งซื้อวันที่ 8 ส.ค. ก่อนเส้นตาย 15 ส.ค.)'],
      ['Double · Detail', 'Which section is Daniel seated in for his Classic Five series?', ['Grand Tier Center', 'Rear Balcony', 'Orchestra Prime', 'Side Box B'], 0, 'ตอบ Grand Tier Center (ตารางแถว Classic Five -> Seating Tier: Grand Tier Center)'],
      ['Double · Inference', 'How many free ticket swaps will Daniel have REMAINING after moving his December 14 ticket?', ['One remaining free swap', 'Two remaining free swaps', 'Zero remaining free swaps', 'Unlimited free swaps'], 0, 'ตอบ One remaining free swap (แพ็กเกจ Classic Five ให้สิทธิ์ 2 free swaps ใช้ไป 1 ครั้ง เหลืออีก 1 ครั้ง)'],
      ['Double · Detail', 'Why does Daniel want to cancel his December 14 attendance?', ['A business trip conflicts with the performance', 'Cello concertos cost less than symphonies', 'Balcony stairs are under repair', 'He misplaced paper ticket sleeves'], 0, 'ตอบ A business trip conflicts... (Checking December business trips revealed a sudden conflict on Dec 14)'],
    ]),

    p7(8, 'm8-d2', [
      doc('notice', 'Greenfield Logistics — Warehouse Job Safety Training Calendar', [['Location', 'Dock Annex Classroom 2']],
        [
          'Every newly hired warehouse picker must pass Forklift Safety Orientation AND Hazardous Spill Handling prior to stepping onto active bay lanes. Sessions run twice monthly:',
          lst([
            'Forklift Orientation (4 hrs): First & Third Monday · 8:00 A.M.–12:00 P.M.',
            'Hazardous Spill Handling (2 hrs): First & Third Tuesday · 1:00 P.M.–3:00 P.M.',
            'Steel-toe leather work boots MUST be worn for practical lift-pallet exercises (sneakers prohibited!).',
          ]),
        ]),
      doc('email', 'E-mail Message',
        [['To', 'training@greenfieldlogistics.com'], ['From', 'Kevin Brooks (New Hire — Picking Crew)'], ['Date', 'Thursday, March 7'], ['Subject', 'Monday March 18 Onboarding Sessions']],
        [
          'Hi HR Training,',
          'Super excited to join Greenfield Logistics! Having just missed March’s first-week Monday/Tuesday training cycle before receiving my contract paperwork cleanly on Wednesday, I plan joining the Third Monday & Third Tuesday sessions cleanly on March 18–19 inside Classroom 2.',
          'Quick footwear check: my company uniform voucher arrived today so I bought sturdy steel-toe composite work boots from TradeWear Store just down Road 9—are composite safety toes accepted cleanly like traditional steel caps during practical forklift drills?',
          'Thanks,\nKevin Brooks',
        ]),
    ], [
      ['Double · Synthesis', 'At what exact day and time does Kevin’s Forklift Safety Orientation conclude?', ['Monday, March 18 at 12:00 P.M.', 'Tuesday, March 19 at 3:00 P.M.', 'Monday, March 11 at noon', 'Wednesday at 1:00 P.M.'], 0, 'ตอบ Monday, March 18 at 12:00 P.M. (Third Monday คือ March 18 เวลา 8:00 A.M.–12:00 P.M.)'],
      ['Double · Detail', 'Why did Kevin miss the first-week training cycle earlier in March?', ['His final employment paperwork did not arrive until Wednesday March 6', 'Forklift bays closed during snowstorms', 'His safety boots arrived late', 'Classroom 2 held an external audit'], 0, 'ตอบ His final employment paperwork... (missed first-week cycle before receiving my contract paperwork Wednesday)'],
      ['Double · Synthesis', 'How many total training hours will Kevin spend across BOTH required classes March 18–19?', ['6 hours', '4 hours', '2 hours', '8 hours'], 0, 'ตอบ 6 hours (Forklift 4 ชม. + Hazardous Spill Handling 2 ชม. = 6 ชม.)'],
      ['Double · Detail', 'Which type of shoes is explicitly forbidden during practical warehouse exercises?', ['Sneakers', 'Composite safety shoes', 'Steel-toe leather work boots', 'Road 9 TradeWear boots'], 0, 'ตอบ Sneakers (sneakers prohibited!)'],
      ['Double · Detail', 'Where is the training conducted?', ['Dock Annex Classroom 2', 'TradeWear Store', 'HR Front Reception', 'Active Picking Bay 1'], 0, 'ตอบ Dock Annex Classroom 2'],
    ]),

    p7(8, 'm8-t1', [
      doc('ad', 'NovaPrint Color Labs — Trade Banner Specials', [['Turnaround', '3 Business Days']],
        [
          tbl(
            ['Product', 'Dimensions', '1–4 Units', '5+ Units', 'Case Included?'],
            [
              ['Retractable Roll-Up Stand', '85 × 200 cm', '$95', '$78', 'Padded nylon shoulder bag'],
              ['Wide Fabric Backdrop Wall', '240 × 225 cm', '$310', '$265', 'Hard wheeled case'],
              ['Tabletop Cloth Banner', '180 × 75 cm', '$68', '$55', 'Folded plastic zip bag'],
            ]),
          'Expedite Next-Day Rush Production: Add +25% to print subtotal (excludes bags/cases).',
        ]),
      doc('chat', 'Marketing Prep Thread', [['Channel', '#berlin-expo'], ['Date', 'June 4']],
        [
          chat([
            ['Rachel Sato', '9:30 A.M.', 'Team, our sales group needs FIVE Retractable Roll-Up Stands AND ONE Wide Fabric Backdrop cleanly before shipping boxes to Berlin!'],
            ['Owen Kim', '9:35 A.M.', 'Standard 3-business-day turnaround delivers Tuesday June 9 cleanly—way ahead of Friday June 12 flight loading, so zero need to pay +25% Rush fees! Ordering now.'],
          ]),
        ]),
      doc('invoice', 'NovaPrint Sales Receipt #NP-6612',
        [['Client', 'SolarWave Systems'], ['Date', 'June 4']],
        [
          'Items: 5 × Retractable Roll-Up Stand (Bulk 5+ tier: $390) + 1 × Wide Fabric Backdrop Wall ($310).',
          'Rush Production Surcharge: $0 · Total Paid: $700.00 · Status: Ready for Pickup June 9.',
        ]),
    ], [
      ['Triple · Synthesis', 'Why did each Retractable Roll-Up Stand cost $78 on Receipt #NP-6612 rather than $95?', ['SolarWave ordered 5 units, reaching the 5+ bulk price tier', 'Ordering a Wide Fabric Backdrop discounts Roll-Up Stands', 'Skipped rush fees save 18 percent cleanly', 'June promotions waive standard rates'], 0, 'ตอบ SolarWave ordered 5 units... (5+ Units ราคา $78 -> 5 × $78 = $390)'],
      ['Triple · Synthesis', 'Why did Owen skip the 25% Rush surcharge?', ['Standard 3-day turnaround gets prints ready June 9 well before their June 12 flight', 'Backdrop walls prohibit next-day rush orders', 'Budget caps prohibited any order above $650', 'Nylon bags delay rush dispatches'], 0, 'ตอบ Standard 3-day turnaround... (June 9 เสร็จทันก่อนขึ้นเครื่อง June 12 จึงไม่จำเป็นต้องเสียค่าเร่ง +25%)'],
      ['Triple · Math', 'How much would SolarWave have paid EXTRA if Owen had unnecessarily selected +25% Rush Production on that $700 subtotal?', ['$175', '$70', '$310', '$95'], 0, 'ตอบ $175 (25% ของ $700 = $175)'],
      ['Triple · NOT', 'Which carrying case comes cleanly alongside SolarWave’s purchased banners?', ['A folded plastic zip bag', 'Five padded nylon shoulder bags', 'A hard wheeled case', 'Both nylon bags and a wheeled case'], 0, 'ตอบ A folded plastic zip bag (ตารางระบุถุงซิปพลาสติกมากับ Tabletop Cloth Banner ซึ่งไม่ได้สั่งในบิลนี้)'],
      ['Triple · Detail', 'When is SolarWave loading banners for their trip to Berlin?', ['Friday, June 12', 'Tuesday, June 9', 'June 4', 'Monday, June 15'], 0, 'ตอบ Friday, June 12 (ahead of Friday June 12 flight loading)'],
    ]),

    p7(8, 'm8-t2', [
      doc('article', 'Midtown Tech Hub Hosts Free Cloud Careers Open House', [['Venue', 'Civic Innovation Loft · May 18']],
        [
          'Seeking a hands-on switch into cloud infrastructure, site reliability, or data engineering? Midtown Tech Hub invites recent grads and mid-career IT support pros to tour employer booths freely between 1:00 P.M. and 5:00 P.M. Bring three printed resumes for lightning feedback clinics.',
        ]),
      doc('table', 'Lightning Portfolio Review Desks (Reservation Free · 15-Min Slots)', null, [
        tbl(
          ['Track Desk', 'Mentor Name', 'Specialty Focus', 'Open Afternoon Windows'],
          [
            ['Desk A', 'D. Okafor (NordicBank)', 'Python Data Pipelines', '1:30, 2:00, 3:30 P.M.'],
            ['Desk B', 'S. Patel (ApexCloud)', 'Kubernetes & DevOps Labs', '2:15, 3:00, 4:00 P.M.'],
            ['Desk C', 'L. Novak (ClearMed)', 'Healthcare SQL Databases', '1:45, 2:45, 4:15 P.M.'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'events@midtowntechhub.org'], ['From', 'Benny Torres'], ['Date', 'May 9'], ['Subject', 'Open House Registration + Desk Slot Choice']],
        [
          'Hello Coordinators,',
          'Thrilled to attend next Saturday’s Open House! After spending three years repairing office Linux printers cleanly at my current job, I completed my DevOps container automation certificate cleanly last month and want to transition into server deployment engineering.',
          'Note that my weekend bus arrives at Midtown Terminal strictly at 2:40 P.M. Can you book me into S. Patel’s earliest Kubernetes feedback slot AFTER 2:45 P.M.?',
          'Thanks!\nBenny Torres',
        ]),
    ], [
      ['Triple · Synthesis', 'Which specific reservation time should coordinators assign Benny Torres?', ['3:00 P.M. at Desk B', '2:15 P.M. at Desk B', '4:00 P.M. at Desk B', '2:45 P.M. at Desk C'], 0, 'ตอบ 3:00 P.M. at Desk B (เชี่ยวชาญ Kubernetes & DevOps คือ S. Patel Desk B และรอบแรกหลัง 2:45 P.M. คือ 3:00 P.M.)'],
      ['Triple · Detail', 'Why does Benny skip Desk A or Desk C?', ['His recent certification focuses on container DevOps/Kubernetes rather than SQL or data pipelines', 'Desk A closes cleanly after 2:00 P.M.', 'Medical clinics banned Linux technicians', 'Printer repair requires SQL diplomas'], 0, 'ตอบ His recent certification focuses on container DevOps/Kubernetes...'],
      ['Triple · Detail', 'What does the Open House article recommend bringing along?', ['Three printed copies of a resume', 'Personal Linux server racks', 'Sealed bank employment contracts', 'Employer bus passes'], 0, 'ตอบ Three printed copies of a resume (Bring three printed resumes for lightning feedback clinics)'],
      ['Triple · Inference', 'How long will Benny’s session with S. Patel last?', ['15 minutes', '30 minutes', 'One hour', 'Two hours'], 0, 'ตอบ 15 minutes (ตารางระบุ 15-Min Slots)'],
      ['Triple · Detail', 'What problem would occur if Benny signed up for S. Patel’s 2:15 P.M. slot?', ['His weekend bus only reaches Midtown at 2:40 P.M.', 'Desk B hosts SQL clinics at 2:15 P.M.', 'The Open House unlocks at 2:30 P.M.', 'Resume reviews end at 2:00 P.M.'], 0, 'ตอบ His weekend bus only reaches Midtown at 2:40 P.M.'],
    ]),

    p7(8, 'm8-t3', [
      doc('notice', 'Oakridge Municipal Pool — Swim Pass & Towel Service Fees', [['Facility', 'East Aquatics Pavilion']],
        [
          tbl(
            ['Pass Item', 'Resident Rate', 'Non-Resident Rate', 'Key Details'],
            [
              ['Single Drop-In Visit', '$8', '$12', 'Valid any public lap hour'],
              ['Monthly Unlimited Pass', '$45', '$68', 'Includes locker wristband'],
              ['Towel Rental Add-On', '$3 / visit', '$3 / visit', 'Clean cotton bath towel'],
            ]),
          'Free Swim Assessment Clinics run cleanly first Saturday of every month at 9:00 A.M. exclusively for active Monthly Unlimited holders.',
        ]),
      doc('invoice', 'East Aquatics Receipt #EA-2019',
        [['Patron', 'Clara Ramos (Verified Local Resident)'], ['Billing Cycle', 'May 1 – May 31']],
        [
          'Purchased: 1 × Monthly Unlimited Pass (Resident Tier: $45) + 4 × Towel Rental Tokens ($12). Total Paid May 1: $57.00.',
        ]),
      doc('chat', 'Front Desk Customer Inquiry', [['Between', 'Clara Ramos & Clerk David'], ['Date', 'May 3']],
        [
          chat([
            ['Clara Ramos', '4:10 P.M.', 'Hi David! Picked up my new Monthly Unlimited resident wristband Wednesday May 1 and noticed towel rentals worked nicely today. Can I pop into tomorrow morning’s May 4 9:00 A.M. Free Swim Assessment Clinic without extra sign-up forms?'],
            ['Clerk David', '4:14 P.M.', 'Yep—since Saturday May 4 is the FIRST Saturday of May cleanly, just tap your wristband at Lane 1 at 8:55 A.M. and Coach Sato handles stroke checks automatically free!'],
          ]),
        ]),
    ], [
      ['Triple · Synthesis', 'Why can Clara Ramos attend the Saturday May 4 Swim Assessment Clinic cleanly at zero extra fee?', ['May 4 is the first Saturday of the month and she holds an active Monthly Unlimited Pass', 'Resident towel tokens grant free coach sessions', 'Drop-in receipts cover Saturday morning assessments', 'May 1 sign-ups earn bonus weekend vouchers'], 0, 'ตอบ May 4 is the first Saturday... (กติกาให้เฉพาะ active Monthly Unlimited holders ในวันเสาร์แรกของเดือน = May 4)'],
      ['Triple · Math', 'Verify how much Clara SAVED on her May pass compared with paying a Non-Resident rate for the Monthly Pass + 4 Towel Rentals:', ['$23', '$12', '$30', '$15'], 0, 'ตอบ $23 (Pass ผู้มีถิ่นพำนัก $45 เทียบคนนอกพื้นที่ $68 -> ต่างกัน $23; ส่วนผ้าเช็ดตัว $3 เท่ากันทั้งคู่)'],
      ['Triple · Detail', 'When did Clara originally purchase her pass?', ['Wednesday, May 1', 'May 3', 'Saturday, May 4', 'April 30'], 0, 'ตอบ Wednesday, May 1 (Picked up my pass Wednesday May 1 และบิลลง May 1)'],
      ['Triple · Detail', 'Where should Clara go at 8:55 A.M. Saturday morning?', ['Lane 1', 'Checkout Counter 2', 'Oak Street Lot', 'Main Towel Closet'], 0, 'ตอบ Lane 1 (tap your wristband at Lane 1 at 8:55 A.M.)'],
      ['Triple · Inference', 'How much would a non-resident pay for a single drop-in swim WITH one rented towel?', ['$15', '$11', '$12', '$8'], 0, 'ตอบ $15 ($12 Non-Resident Single Drop-In + $3 Towel Rental = $15)'],
    ]),

    // ══════════════════ SET 9 (Q147–Q200: 54 Qs) ══════════════════
    p7(9, 'm9-s1', [
      doc('email', 'E-mail Message',
        [['To', 'All Campus Staff'], ['From', 'Mailroom Services'], ['Date', 'November 1'], ['Subject', 'Holiday Courier Cutoff Calendar']],
        [
          'Due to steep seasonal freight surcharges cleanly taking effect November 25, outgoing inter-office department envelopes weighing under 500 grams should drop inside the Blue Consolidated Bin by 3:00 P.M. daily rather than booking private rush vans.',
          'Consolidated pouches reach regional partner hubs smoothly next morning at half standard courier tariffs.',
        ]),
    ], [
      ['Single · Purpose', 'Why is Mailroom Services promoting the Blue Consolidated Bin before November 25?', ['To save money by cutting seasonal freight surcharge costs', 'Because private rush vans cease running November 25', 'Heavy envelopes over 500g require blue pouches', 'Hub deliveries shift strictly onto evening routes'], 0, 'ตอบ To save money... (surcharges rising -> Consolidated pouches arrive next morning at half standard tariffs)'],
      ['Single · Detail', 'By what daily time must light pouches reach the Blue Bin?', ['3:00 P.M.', 'Noon', '5:00 P.M.', '11:00 A.M.'], 0, 'ตอบ 3:00 P.M. (drop inside Blue Consolidated Bin by 3:00 P.M. daily)'],
    ]),

    p7(9, 'm9-s2', [
      doc('ad', 'Harbor Bike Repair — Express Spring Tune-Up', [['Address', '22 Elm Boulevard']],
        [
          'Beat warm-weather trail crowds cleanly! Bring any city commuter bicycle to Elm Boulevard before April 15 for our $49 Spring Safety Special (regularly $75)—covering brake cable tension, chain ultrasonic wash, tire inflation check, and gear derailleur alignment.',
          'Most drop-offs finished cleanly same afternoon when parked ahead of 10:00 A.M.',
        ]),
    ], [
      ['Single · Math', 'How much does the Spring Safety Special save compared to regular repair pricing?', ['$26', '$49', '$15', '$35'], 0, 'ตอบ $26 ($75 - $49 = $26)'],
      ['Single · Detail', 'When should cyclists drop bicycles off for same-afternoon pickup?', ['Before 10:00 A.M.', 'Only after April 15', 'At closing time cleanly', 'Sunday afternoons'], 0, 'ตอบ Before 10:00 A.M. (same afternoon when parked ahead of 10:00 A.M.)'],
    ]),

    p7(9, 'm9-s3', [
      doc('chat', 'Print Room Messages', [['Thread', '#print-ops'], ['Date', 'March 19']],
        [
          chat([
            ['Leo Diaz', '11:02 A.M.', 'Just hit Print on the 250 quarterly shareholder booklets—suddenly Press 2 flashed Cyan Toner Critical Low at page 12!'],
            ['Maya Chen', '11:05 A.M.', 'Hold on—did Press 2 pause cleanly mid-job automatically so colors will not fade halfway through booklet batches?'],
            ['Leo Diaz', '11:08 A.M.', 'Yup, auto-paused neatly cleanly waiting for a fresh cartridge! Already checked Cabinet A—only empty shells sitting on the top rack.'],
            ['Maya Chen', '11:11 A.M.', 'Check lowest Shelf C tucked behind gloss bond reams—Supply Courier dropped six sealed cyan drums yesterday afternoon!'],
          ]),
        ]),
    ], [
      ['Single · Condition', 'What happened cleanly to Press 2 after cyan toner ran critically low?', ['The printer paused automatically so brochure colors stay consistent', 'It printed remaining pages strictly in black ink', 'Booklets jammed inside bottom output trays', 'Page 12 printed cleanly twice'], 0, 'ตอบ The printer paused automatically... (auto-paused neatly waiting for fresh cartridge so colors won’t fade)'],
      ['Single · Problem', 'Why could Leo not swap toner immediately upon opening Cabinet A?', ['The top shelf held only empty cartridge shells', 'Sealed drums shipped wrong yellow codes', 'Press 2 locks toner bays for safety', 'Supply Courier postponed delivery'], 0, 'ตอบ The top shelf held only empty... (only empty shells sitting on top rack)'],
      ['Single · Detail', 'Where are the six new cyan drums stored according to Maya?', ['On the lowest shelf behind gloss paper reams', 'Beside shareholder envelopes at Reception', 'On Cabinet A’s upper tray', 'Inside Supply Courier boxes cleanly'], 0, 'ตอบ On the lowest shelf behind gloss paper reams (lowest Shelf C tucked behind gloss bond reams)'],
    ]),

    p7(9, 'm9-s4', [
      doc('table', 'SilverRail Regional Cargo — Cold-Box Freight Tariff', [['Minimum', '100 kg base bill']],
        [
          tbl(
            ['Temperature Tier', 'Range Control', 'Rate / 100 kg', 'Transit Window'],
            [
              ['Chilled Fresh', '2°C to 4°C', '$92', 'Same Night / Next Dawn'],
              ['Deep Frozen', '-18°C to -22°C', '$128', 'Overnight Direct'],
              ['Dry Ambient Insulated', '14°C to 18°C', '$64', '24–36 Hours'],
            ]),
          'Real-time GSM temperature charts email automatically hourly to verified shippers at no extra fee.',
        ]),
    ], [
      ['Single · Detail', 'Which temperature tier suits fresh dairy butter requiring 3°C maintenance?', ['Chilled Fresh', 'Deep Frozen', 'Dry Ambient Insulated', '24-Hour Express'], 0, 'ตอบ Chilled Fresh (Range Control: 2°C to 4°C)'],
      ['Single · Math', 'How much would shipping 300 kg of Deep Frozen fillets cost under SilverRail’s listed rate?', ['$384', '$276', '$192', '$128'], 0, 'ตอบ $384 ($128 ต่อ 100 kg × 3 = $384)'],
      ['Single · Detail', 'What bonus service comes free with any cold-box freight booking?', ['Hourly automated temperature graph emails', 'Double ice foam crates', 'Two extra days cold depot storage', 'Sunday driver pick-ups'], 0, 'ตอบ Hourly automated temperature graph emails (GSM temperature charts email hourly at no extra fee)'],
    ]),

    p7(9, 'm9-s5', [
      doc('letter', 'Customer Care Follow-Up', [['To', 'Ms. Nora Lindqvist'], ['From', 'Nordic Home Lighting'], ['Date', 'May 14']],
        [
          'Dear Ms. Lindqvist,',
          'Thank you kindly for sending clear photos showing the cracked linen lampshade delivered inside Order #NH-3092 yesterday. Because rough courier stacking clearly crushed that carton corner prior to arrival, we already dispatched a brand-new double-boxed replacement lampshade via Express Priority Post today—you do NOT need to mail the broken shade back cleanly!',
          'Please simply recycle the damaged cardboard wrap locally, and anticipate tracking updates arriving inside your inbox tonight before 8:00 P.M.',
        ]),
    ], [
      ['Single · Detail', 'What item arrived damaged inside Ms. Lindqvist’s May 13 order?', ['A linen lampshade', 'A floor brass lamp base', 'Express courier labels', 'Carton tracking codes'], 0, 'ตอบ A linen lampshade (cracked linen lampshade delivered inside Order #NH-3092 yesterday)'],
      ['Single · Detail', 'What does Nordic Home Lighting ask Ms. Lindqvist to do with the broken lampshade?', ['Nothing—she does not have to ship it back', 'Mail photos within 48 hours of pickup', 'Drop it inside any retail partner desk', 'Hold it for courier inspection Thursday'], 0, 'ตอบ Nothing—she does not have to ship it back (you do NOT need to mail the broken shade back)'],
      ['Single · Inference', 'How is Nordic Home Lighting preventing damage to the second lampshade?', ['Packing it inside reinforced double-box cartons', 'Delivering by Nordic staff truck drivers directly', 'Swapping linen fabric for brushed metal', 'Waiting until autumn dry weather'], 0, 'ตอบ Packing it inside reinforced double-box cartons (brand-new double-boxed replacement lampshade)'],
    ]),

    p7(9, 'm9-s6', [
      doc('article', 'Suburban Warehouses Add Quiet Roof Gardens for Night Workers', [['Location', 'Columbus Logistics Park']],
        [
          'Rather than fencing flat asphalt truck employee lots with chain-link gravel, Apex Fulfillment turned half an acre beside Breakroom 2 into shaded cedar pergolas, evening herb beds, and soft warm pathway lights cleanly tailored for overnight warehouse pickers.',
          'Plant Director Tom Alvarez reports annual warehouse shift turnover slipped neatly from 24 percent down to 13 percent following spring opening, since night packers finally enjoy quiet fresh outdoor tables cleanly away from noisy concrete loading engine exhaust during 1:00 A.M. midnight meal breaks.',
        ]),
    ], [
      ['Single · Detail', 'For whom was the outdoor garden courtyard specifically designed?', ['Night-shift warehouse workers during breaks', 'Daytime neighborhood tourist guides', 'Truck mechanics servicing diesel axles', 'Headquarters visiting shareholders'], 0, 'ตอบ Night-shift warehouse workers... (tailored for overnight warehouse pickers during 1:00 A.M. midnight meal breaks)'],
      ['Single · Outcome', 'What measurable workplace improvement followed the courtyard’s spring debut?', ['Annual employee turnover fell roughly nearly in half (24% to 13%)', 'Truck deliveries doubled cleanly overnight', 'Heating energy bills dropped 24 percent', 'Warehouse bays added twice as many forklifts'], 0, 'ตอบ Annual employee turnover fell... (turnover slipped from 24% down to 13%)'],
      ['Single · Vocab', 'The word "slipped" in paragraph 2 is closest in meaning to ___.', ['dropped', 'stumbled', 'doubled', 'paused'], 0, 'ตอบ dropped (turnover slipped from 24% down to 13% = ลดต่ำลงมาที่ร้อยละ 13)'],
    ]),

    p7(9, 'm9-s7', [
      doc('ad', 'Careers — Packaging Structural Engineer (GreenBox Solutions)', [['Work Mode', 'On-Site · Chicago Prototype Lab']],
        [
          'Help e-commerce retail leaders ditch bubble wrap cleanly for sculpted origami corrugated inserts! [1] As Packaging Structural Engineer, you will cut custom pulp board prototypes on CAD Kongsberg plotters and run ISTA 3A transit drop simulations cleanly across glassware and consumer electronics.',
          'Required Credentials:',
          lst([
            'Bachelor degree in Packaging Science, Mechanical Engineering, or Industrial Design',
            'Hands-on mastery creating die-cut layouts using ArtiosCAD or SolidWorks',
            'Comfort documenting exact vibration and drop-test metrics cleanly in client PDF decks',
          ]),
          '[2] Competitive salary, full family dental coverage, 401(k) matching, and paid patent bonuses apply day one. [3] Email resume plus three structural CAD die-line screenshots smoothly to talent@greenbox.co quoting Job ID PSE-11. [4]',
        ]),
    ], [
      ['Single · Detail', 'Which equipment will the engineer use inside the Chicago lab?', ['CAD Kongsberg cutting plotters and drop-test simulators', 'Glassware kilns cleanly', 'Plastic bubble extrusion ovens', 'Forklifts in shipping docks'], 0, 'ตอบ CAD Kongsberg cutting plotters and drop-test simulators'],
      ['Single · Detail', 'What goal drives GreenBox’s packaging designs?', ['Replacing plastic bubble wrap with shaped paperboard inserts', 'Lowering international cargo ship weights cleanly', 'Adding colorful glossy lamination to cartons', 'Increasing tape dispenser factory speeds'], 0, 'ตอบ Replacing plastic bubble wrap... (ditch bubble wrap cleanly for sculpted origami corrugated inserts)'],
      ['Single · Requirement', 'Which software background is specifically requested?', ['ArtiosCAD or SolidWorks', 'Adobe Premiere Pro', 'SAP Financial Ledgers', 'QuickBooks Payroll'], 0, 'ตอบ ArtiosCAD or SolidWorks (creating die-cut layouts using ArtiosCAD or SolidWorks)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Experience optimizing molded fiber or honeycomb paper cushions gives candidates a clear edge."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจากคุณสมบัติ Required Credentials เพื่อเพิ่มข้อได้เปรียบพิเศษ ก่อนกล่าวถึงผลตอบแทน)'],
    ]),

    p7(9, 'm9-s8', [
      doc('memo', 'Corporate Device Security & Traveling Abroad Notice', [['To', 'Traveling Consultants'], ['From', 'Information Security'], ['Effective', 'June 1']],
        [
          'Consultants traveling internationally across conferences outside Europe or North America frequently step onto unsecured public airport Wi-Fi portals.',
          'Mandatory Travel Steps:',
          lst([
            'Submit International Travel Ticket notifications inside IT Portal strictly 5 business days pre-departure.',
            'Enable full-disk hardware encryption + automatic corporate VPN tunnel ahead of boarding planes.',
            'Never plug personal USB thumb sticks or random hotel lobby charging cables straight into corporate laptop ports—always bring personal AC wall bricks plus red Data-Blocker USB tips stocked free at Security Desk 1.',
          ]),
        ]),
    ], [
      ['Single · Timing', 'How early must consultants register upcoming international travel in IT Portal?', ['At least five business days ahead', 'Twenty-four hours before boarding', 'Upon landing at airport gates cleanly', 'Once quarterly before June 1'], 0, 'ตอบ At least five business days ahead (strictly 5 business days pre-departure)'],
      ['Single · Detail', 'Where can travelers pick up free USB Data-Blocker adapters?', ['At Security Desk 1', 'Inside international hotel lobbies', 'At airport retail newsstands', 'Via conference organizers'], 0, 'ตอบ At Security Desk 1 (stocked free at Security Desk 1)'],
      ['Single · Cause', 'Why should travelers carry their own AC power wall chargers?', ['Avoid plugging corporate laptops into unverified hotel lobby USB ports', 'Hotel sockets lack European voltage adapters cleanly', 'Airlines confiscate corporate USB cords', 'VPN tunnels drain AC cables rapidly'], 0, 'ตอบ Avoid plugging corporate laptops... (never plug into random hotel lobby charging cables)'],
      ['Single · NOT', 'Which region is NOT noted as triggering elevated public Wi-Fi travel alerts unless registering notice?', ['Domestic home office desks inside North America', 'Conferences across South America', 'Hotel lounges in East Asia', 'Middle East transit airports'], 0, 'ตอบ Domestic home office desks... (นโยบายเน้น traveling internationally outside Europe or North America)'],
    ]),

    p7(9, 'm9-s9', [
      doc('article', 'Micro-Batch Textile Dye Labs Help Sportswear Brands Cut Inventory Waste', [['By', 'Mia Reyes'], ['Magazine', 'Apparel Supply Monitor']],
        [
          'Conventional garment factories force outdoor jacket labels to pick seasonal dye vats nine months ahead of autumn retail openings, gambling blindly on whether shoppers will crave forest green or bright mustard parkas cleanly come October. [1] Whenever trend predictions miss badly, millions of unpopular neon jackets pile up onto clearance racks before quietly moving toward discount outlets below factory cost.',
          'German machinery startup ChromaQuick is inverting that rigid factory timeline through waterless digital fabric-jet finishing booths installed smoothly inside domestic fulfillment depots. [2] Brands ship clean neutral undyed merino fleece shells directly into local sewing hubs, then dye and waterproof exact hundred-jacket micro-batches overnight strictly matching real-time online shopping cart clicks.',
          '"Seeing Monday morning online color clicks lets our warehouse finish and mail exact olive coats cleanly Wednesday afternoon instead of guessing blind bulk vats last January," celebrates Nordic Trail CEO Lukas Lind. [3] Closed-loop supercritical fluid vessels capture 98 percent of dry pigment powder without flushing bright dye rivers into municipal waterways.',
          'Ten European outdoor brands have booked trial booth slots ahead of winter ski collections starting next month. [4]',
        ]),
    ], [
      ['Single · Problem', 'What expensive headache plagues traditional nine-month-early garment dyeing?', ['Leftover unsold colors forced into below-cost markdowns', 'Merino sheep produce uneven white fleece', 'Outdoor shoppers avoid wool winter parkas', 'Clearance racks charge steep municipal taxes'], 0, 'ตอบ Leftover unsold colors... (gambling blindly ... millions of unpopular neon jackets pile up onto clearance racks below cost)'],
      ['Single · Process', 'How does ChromaQuick decide which colors to dye each week?', ['Matches live real-time e-commerce customer orders', 'Surveys textile trends nine months before October', 'Alternates forest green and mustard strictly monthly', 'Allows retail outlet buyers to print labels cleanly'], 0, 'ตอบ Matches live real-time e-commerce... (strictly matching real-time online shopping cart clicks)'],
      ['Single · Benefit', 'What environmental improvement does the supercritical process deliver besides cutting unsold stock?', ['Captures nearly all dye pigment cleanly without dirtying rivers', 'Shrinks merino wool wash times by half', 'Turns neon clearance racks into park mulch', 'Replaces courier vans cleanly'], 0, 'ตอบ Captures nearly all dye pigment... (capture 98% of dry pigment without flushing bright dye into municipal waterways)'],
      ['Single · Vocab', 'The word "inverting" in paragraph 2 is closest in meaning to ___.', ['reversing', 'preserving', 'delaying', 'copying'], 0, 'ตอบ reversing (inverting that rigid factory timeline = พลิกกลับรูปแบบขั้นตอนดั้งเดิม)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Waiting weeks for overseas dye boats quickly shrinks down into flexible 48-hour domestic replenishment."', ['[3]', '[1]', '[2]', '[4]'], 0, 'ตอบ [3] (ขยายผลต่อทันทีหลังตัวอย่าง Nordic Trail ที่สั่งผลิตวันจันทร์-ส่งได้วันพุธ โดยเปรียบเทียบเวลา 48 ชั่วโมงกับเรือส่งเดิม)'],
    ]),

    p7(9, 'm9-d1', [
      doc('webpage', 'Pacific Coast Culinary Institute — Evening Knife Skills Courses', [['Venue', 'Main Kitchen Demo Hall']],
        [
          tbl(
            ['Course Level', 'Date', 'Time', 'Tuition', 'Equipment Included'],
            [
              ['Knife Basics 101', 'Tues Oct 15', '6:00–8:30 P.M.', '$68', 'Loaner 8" Chef Knife + Apron'],
              ['Fish Fileting Mastery', 'Thurs Oct 17', '6:00–9:00 P.M.', '$95', 'Loaner Boning Knife + Whole Salmon'],
              ['Whetstone Sharpening Lab', 'Sat Oct 19', '10:00 A.M.–12:30 P.M.', '$75', 'Take-Home 1000/6000 Grit Stone ($40 value)'],
            ]),
          'Alumni who finished ANY previous class earn 15% off cleanly when typing code ALUM15 before checkout.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'classes@pacificculinary.edu'], ['From', 'Tariq Hassan'], ['Date', 'October 2'], ['Subject', 'Registration Question — Whetstone Sharpening']],
        [
          'Hi Admissions Desk,',
          'I had such an informative Tuesday night learning chopping techniques back in last spring’s Knife Basics 101 session cleanly! Now my Japanese santoku knife at home needs fresh bevel honing, so I just enrolled online for Saturday morning’s Whetstone Sharpening Lab on October 19 using code ALUM15 cleanly.',
          'Also, since Whetstone Sharpening lets participants carry home the 1000/6000 grit stone anyway, should we also pack one dull personal kitchen knife wrapped safely inside cardboard, or does Main Kitchen provide practice blades safely during demonstrations?',
          'Best regards,\nTariq Hassan',
        ]),
    ], [
      ['Double · Math', 'How much did Tariq pay after applying ALUM15 to Saturday’s Whetstone Sharpening Lab?', ['$63.75', '$75.00', '$57.80', '$80.75'], 0, 'ตอบ $63.75 (ราคาปกติ $75 ลดศิษย์เก่า ALUM15 15% = ลดลง $11.25 -> เหลือ $63.75)'],
      ['Double · Synthesis', 'Why was Tariq legally allowed to use promo code ALUM15?', ['He completed Knife Basics 101 last spring', 'Whetstone students receive automatic 15% off Saturdays', 'Bringing personal knives grants equipment discounts', 'He registered more than two weeks early'], 0, 'ตอบ He completed Knife Basics 101 last spring (เงื่อนไขระบุ Alumni who finished ANY previous class earn 15% off)'],
      ['Double · Detail', 'Which item do Whetstone Lab students get to keep afterward?', ['A dual 1000/6000 grit sharpening stone', 'A loaner 8-inch chef knife', 'A whole salmon fillet', 'Canvas workshop aprons'], 0, 'ตอบ A dual 1000/6000 grit... (Take-Home 1000/6000 Grit Stone)'],
      ['Double · Detail', 'What time does Tariq’s upcoming October 19 class end?', ['12:30 P.M.', '8:30 P.M.', '9:00 P.M.', '10:00 A.M.'], 0, 'ตอบ 12:30 P.M. (Sat Oct 19 · 10:00 A.M.–12:30 P.M.)'],
      ['Double · Detail', 'Why does Tariq write to Admissions despite already enrolling online?', ['To check whether to bring his own dull knife wrapped safely', 'To request transferring into Fish Fileting Mastery', 'To ask why ALUM15 failed on checkout', 'To collect forgotten aprons from last spring'], 0, 'ตอบ To check whether to bring his own dull knife...'],
    ]),

    p7(9, 'm9-d2', [
      doc('memo', 'Harbor Medical Tower — Urgent Elevators Maintenance & Routing Plan', [['Effective', 'Saturday, May 18 · 6:00 A.M.–4:00 P.M.']],
        [
          'Technicians will replace main hoist drive brakes inside Express Passenger Bank B serving Floors 8 through 16 this Saturday. During maintenance, ONLY Service Elevator S1 (West Hallway) reaches Floors 8–16 cleanly.',
          'Floors 1 through 7 remain smoothly accessible via Lobby Bank A as usual. Dial Security Desk Extension 200 immediately if wheelchair clinic patients need priority lift holds.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'dr-office@harbormedical.org'], ['From', 'Dr. Elena Cruz (Suite 1204 — Ophthalmology)'], ['Date', 'Thursday, May 16'], ['Subject', 'Saturday Morning Elderly Patient Pickups']],
        [
          'Hi Building Ops,',
          'Thank you for the clear notice! Suite 1204 on Floor 12 has four scheduled morning post-cataract follow-up patients arriving cleanly between 9:00 A.M. and 11:30 A.M. this Saturday—two of whom rely cleanly on clinic wheelchairs.',
          'Since Lobby Bank A stops below Floor 8, I posted bright directional notes beside Suite 1204 doors AND texted patients to dial Security Extension 200 right inside West Hallway upon landing so Service Elevator S1 meets them without waiting in queues!',
          'Appreciatively,\nElena Cruz, M.D.',
        ]),
    ], [
      ['Double · Synthesis', 'Which elevator must Dr. Cruz’s Saturday morning patients use to reach Suite 1204?', ['Service Elevator S1 in West Hallway', 'Express Passenger Bank B', 'Lobby Bank A', 'Parking Ramp Stairs'], 0, 'ตอบ Service Elevator S1 in West Hallway (Suite 1204 อยู่ชั้น 12 แต่ Bank B ปิดซ่อมวันเสาร์ และ Bank A ขึ้นถึงแค่ชั้น 7)'],
      ['Double · Detail', 'How are Dr. Cruz’s wheelchair patients getting priority access?', ['Calling Security Extension 200 upon reaching West Hallway', 'Swiping medical fobs inside Bank B', 'Arriving after 4:00 P.M. when brakes finish', 'Switching rooms down to Floor 7'], 0, 'ตอบ Calling Security Extension 200... (Memo แนะนำให้โทร Ext 200 เพื่อจองลิฟต์ให้ผู้ใช้รถเข็นก่อน)'],
      ['Double · Detail', 'Which building levels stay completely unaffected by Saturday’s maintenance?', ['Floors 1 through 7', 'Floors 8 through 16', 'Express Penthouse Floor 16', 'Rooftop clinic parking'], 0, 'ตอบ Floors 1 through 7 (Lobby Bank A ให้บริการชั้น 1–7 ตามปกติ)'],
      ['Double · Detail', 'What exact mechanical work happens inside Bank B Saturday?', ['Hoist drive brake replacements', 'Security intercom wiring', 'Flooring carpet swaps', 'West Hallway glass painting'], 0, 'ตอบ Hoist drive brake replacements (replace main hoist drive brakes inside Express Passenger Bank B)'],
      ['Double · Inference', 'When will Express Passenger Bank B resume regular direct runs to Suite 1204?', ['After 4:00 P.M. Saturday', 'Thursday morning May 16', 'At 11:30 A.M. Saturday', 'Not until Monday noon'], 0, 'ตอบ After 4:00 P.M. Saturday (งานซ่อมเริ่ม 6:00 A.M.–4:00 P.M. Saturday)'],
    ]),

    p7(9, 'm9-t1', [
      doc('ad', 'ClearSound Podcast Studio — Hourly Recording Booths', [['Location', 'Downtown Suite 302']],
        [
          tbl(
            ['Booth Size', 'Max Hosts', 'Base Hourly Rate', '4-Hour Package', 'Raw Audio + Video Stems?'],
            [
              ['Solo Voiceover Pod', '1', '$45 / hr', '$150', 'Audio WAV Only'],
              ['Duo Desk Studio', '2', '$70 / hr', '$240', 'Audio + Dual 4K Cameras'],
              ['Roundtable Video Room', '4', '$110 / hr', '$380', 'Audio + 3 4K Angles'],
            ]),
          'Add live Audio Engineer Mixing (+$35/hr). First-time corporate bookings take $20 off cleanly using code STUDIO20.',
        ]),
      doc('invoice', 'ClearSound Booking Summary #CP-410',
        [['Client', 'GreenWave Tech Media (Host: Ben Kim)'], ['Booking Date', 'Wednesday, August 7 · 1:00–5:00 P.M.']],
        [
          'Selected: Roundtable Video Room (4-Hour Package = $380) + 4 Hours Live Audio Engineer Mixing ($140).',
          'Discounts Applied: First-time code STUDIO20 (-$20). Total Billed: $500.00.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'studio@clearsoundpod.com'], ['From', 'Ben Kim <b.kim@greenwavemedia.co>'], ['Date', 'August 8'], ['Subject', 'Great Recording Yesterday + Checking 4K Video Files']],
        [
          'Hi ClearSound Team,',
          'We had a fantastic four-hour roundtable shoot with our three battery-engineering guests cleanly yesterday! Everyone loved our audio engineer Sam’s level balancing right through headphones. Checking our shared download folder this morning though, I spot clean isolated WAV tracks for all 4 mics, yet ONLY two camera angles appear rather than all three 4K video files included in our Roundtable Video Room package. Could Sam check card #3 cleanly before editing begins tomorrow?',
          'Thanks!\nBen Kim',
        ]),
    ], [
      ['Triple · Inference', 'Why did GreenWave choose Roundtable Video Room over Duo Desk Studio?', ['Ben hosted three guests (4 total speakers), exceeding Duo Studio’s 2-person cap', 'Duo Desk Studio omits 4K video cameras', 'Roundtable Video waives audio engineer hourly rates', 'Code STUDIO20 excludes Duo booths'], 0, 'ตอบ Ben hosted three guests... (Ben + แขก 3 คน = 4 คน ซึ่ง Duo Desk จุสูงสุดแค่ 2 คน)'],
      ['Triple · Detail', 'Which delivered file is currently missing from Ben’s download folder?', ['The third 4K camera video track', 'Clean WAV microphone tracks', 'Sample soundtrack music clips', 'Invoice #CP-410 receipt PDF'], 0, 'ตอบ The third 4K camera video track (ตาราง Roundtable ให้ 3 4K Angles แต่ในโฟลเดอร์พบแค่ 2 มุมกล้อง)'],
      ['Triple · Math', 'How much did GreenWave pay specifically for Live Audio Engineer Mixing before promo codes?', ['$140 ($35 × 4 hours)', '$150', '$380', '$500'], 0, 'ตอบ $140 ($35 × 4 ชั่วโมง = $140)'],
      ['Triple · Synthesis', 'How much would the 4-hour Roundtable room rental + Live Mixing have cost WITHOUT first-time code STUDIO20?', ['$520', '$500', '$580', '$480'], 0, 'ตอบ $520 (ยอดที่จ่ายหลังลด $20 คือ $500 -> ราคาเต็ม $520; หรือเทียบซื้อรายชั่วโมง ($110+$35)×4 = $580)'],
      ['Triple · Detail', 'On what date did the four-hour recording shoot take place?', ['Wednesday, August 7', 'August 8', 'Tomorrow morning', 'Saturday afternoon'], 0, 'ตอบ Wednesday, August 7 (บิลระบุ August 7 · อีเมล August 8 เล่าถึง shoot yesterday = Aug 7)'],
    ]),

    p7(9, 'm9-t2', [
      doc('article', 'Westside Harbor Art Center Opens Ceramic & Print Workshops', [['Venue', 'Warehouse 4 · Opens April 1']],
        [
          'Newly renovated brick Warehouse 4 unveils sunlit north-window community printmaking presses and eighteen stoneware pottery wheels cleanly on April 1. Monthly Studio Passes cover open bench hours Wednesday through Sunday, whereas Monday–Tuesday afternoons reserve cleanly for quiet technician kiln loading.',
        ]),
      doc('table', 'April Open Studio Bench Pass Schedule (No Firing Fees for Small Cups)', null, [
        tbl(
          ['Pass Option', 'Monthly Dues', 'Included Benefits', 'Kiln Shelf Space'],
          [
            ['Printmaker Access', '$85', 'Relief & letterpress roller benches + inks', 'None (Drying racks only)'],
            ['Wheel Potter Pass', '$115', '18 electric wheels + 10 kg clay bag monthly', '1 half-shelf weekly'],
            ['Dual Studio Full', '$165', 'Full access to BOTH Print + Clay wings', '2 half-shelves weekly'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'studios@westsideartcenter.org'], ['From', 'Hannah Park'], ['Date', 'March 24'], ['Subject', 'Spring Access Pass Question']],
        [
          'Hello Team,',
          'So pumped for April 1 opening inside Warehouse 4! During workdays I design bookplates using woodblock carving presses smoothly, AND recently began shaping stoneware matcha tea bowls cleanly on weekends. Looks like Dual Studio Full fits neatly so I can use relief presses AND fire ceramic mugs weekly cleanly!',
          'Quick schedule question: since my consulting contract ends at 1:00 P.M. Tuesdays, may I pop quietly onto letterpress roller benches Tuesday afternoons at 2:00 P.M. even if ceramic kiln technicians load glazes nearby?',
          'Thanks,\nHannah Park',
        ]),
    ], [
      ['Triple · Synthesis', 'How will staff likely respond to Hannah’s Tuesday afternoon 2:00 P.M. studio request?', ['She cannot use open benches Tuesdays because Mon–Tue reserve strictly for technician kiln work', 'She may print woodblocks Tuesdays cleanly since roller benches stay outside kiln rooms', 'Dual Studio passes double Tuesday bench access', 'Opening April 1 shifts kiln loading onto Fridays'], 0, 'ตอบ She cannot use open benches Tuesdays... (บทความระบุชัดเจน open bench hours เปิดเฉพาะพุธ-อาทิตย์ ส่วนจันทร์-อังคารปิดเพื่อการจัดการเตาเผา)'],
      ['Triple · Synthesis', 'How much total monthly cost will Hannah pay for access to BOTH relief printing presses and stoneware wheels?', ['$165', '$200', '$115', '$85'], 0, 'ตอบ $165 (แพ็กเกจ Dual Studio Full ครอบคลุมทั้ง Print + Clay ในราคา $165/เดือน แทน $85+$115=$200)'],
      ['Triple · Detail', 'How much kiln shelf capacity is included weekly under Hannah’s chosen Dual Studio plan?', ['Two half-shelves per week', 'One half-shelf per week', 'Drying racks only', 'One whole shelf monthly'], 0, 'ตอบ Two half-shelves per week (ตารางช่อง Kiln Shelf Space ของ Dual Studio Full)'],
      ['Triple · Detail', 'What creative item does Hannah plan printing using woodblock presses?', ['Bookplates', 'Newspaper broadsheets', 'Matcha porcelain decals', 'Event posters'], 0, 'ตอบ Bookplates (design bookplates using woodblock carving presses)'],
      ['Triple · Detail', 'Why do Wheel Potter members receive free small-cup firings?', ['A complimentary 10 kg clay allowance plus small-cup zero firing policy apply monthly', 'Technicians load kilns strictly overnight', 'Drying racks replace electrical kilns', 'Opening passes waive fees during spring only'], 0, 'ตอบ A complimentary 10 kg clay allowance... (ตารางระบุ No Firing Fees for Small Cups + 10 kg clay bag)'],
    ]),

    p7(9, 'm9-t3', [
      doc('notice', 'Alpine Express Rail — Group Ticket & Seat Change Guidelines', [['Service', 'Zurich – Milan InterCity']],
        [
          lst([
            'Economy Saver Fares ($48/person) stay fixed strictly on original booked train numbers—miss departure time cleanly forfeits full fare.',
            'Standard Flex Fares ($74/person) swap free anytime UP TO 2 hours ahead of original departure via Station Kiosk QR or Mobile App.',
            'Groups purchasing 6+ Standard Flex seats together automatically unlock reserved quiet car table bays at $0 seat fee.',
          ]),
        ]),
      doc('invoice', 'Alpine Express E-Receipt #AE-8830',
        [['Coordinator', 'Martin Diaz (TechNorth Team)'], ['Travel Date', 'Friday, October 18 · Train IC-404 (8:15 A.M.)']],
        [
          'Issued: 6 × Standard Flex Fares ($74 each) = $444.00 Total Paid · Assigned Seats: Coach 3 Quiet Car Tables 12–17.',
        ]),
      doc('chat', 'Team Travel Chat', [['Between', 'Martin Diaz & Support Desk'], ['Date', 'Friday, October 18 · 7:15 A.M.']],
        [
          chat([
            ['Martin Diaz', '7:15 A.M.', 'Help! Heavy rain slowed our taxi convoy across Zurich bridge—all six coworkers on #AE-8830 cannot make Train IC-404 at 8:15 A.M. Can we slide straight onto the 10:15 A.M. Train IC-406 smoothly for $0 change fee cleanly inside our Standard Flex app right now?'],
            ['Support Agent Maya', '7:18 A.M.', 'Looking cleanly at #AE-8830—your train departs at 8:15 A.M. and right now it is 7:18 A.M., which sits INSIDE the final 2-hour free window! Standard Flex free mobile swaps lock 2 hours before departure (6:15 A.M.), though desk agents can process late same-day rebookings cleanly at Window 4 for a $15 per-seat late shift fee cleanly before 8:15 A.M.'],
          ]),
        ]),
    ], [
      ['Triple · Synthesis', 'Why can Martin Diaz NOT swap #AE-8830 tickets cleanly for $0 at 7:18 A.M.?', ['Free swaps require acting at least 2 hours before 8:15 A.M. (by 6:15 A.M.)', 'Groups exceeding five riders forfeit mobile swaps', 'Train IC-406 bans Coach 3 quiet tables', 'Standard Flex tickets behave identically to Economy Saver'], 0, 'ตอบ Free swaps require acting at least 2 hours before 8:15 A.M.... (เงื่อนไข UP TO 2 hours ahead = ต้องเปลี่ยนก่อน 6:15 A.M. ขณะที่เวลาในแชตคือ 7:15–7:18 A.M.)'],
      ['Triple · Math', 'How much total late rebooking fee will TechNorth owe at Window 4 to switch ALL 6 seats onto Train IC-406 before 8:15 A.M.?', ['$90', '$15', '$444', '$0'], 0, 'ตอบ $90 (ค่าเปลี่ยนสาย $15 ต่อที่นั่ง × 6 คน = $90)'],
      ['Triple · Inference', 'Why had TechNorth paid $0 earlier to sit together inside Coach 3 Quiet Car Tables?', ['Buying 6+ Standard Flex seats unlocks free reserved quiet table bays', 'Early morning trains grant quiet access freely', 'Support Agent Maya waived table fees manually', 'Taxi passengers qualify for Coach 3 perks'], 0, 'ตอบ Buying 6+ Standard Flex seats unlocks free reserved quiet table bays'],
      ['Triple · Inference', 'What would happen to #AE-8830 if the team had mistakenly bought $48 Economy Saver tickets and missed 8:15 A.M.?', ['The full fare value would be forfeited cleanly with zero swap option', 'Window 4 would rebook them onto IC-406 for $15', 'Quiet car tables would refund half', 'Mobile apps would delay check-in cleanly'], 0, 'ตอบ The full fare value would be forfeited cleanly... (Economy Saver miss departure cleanly forfeits full fare)'],
      ['Triple · Detail', 'What caused TechNorth’s team to run late on Friday morning?', ['Heavy rain traffic slowed their taxis crossing Zurich bridge', 'Coach 3 Quiet Car maintenance delayed departures', 'Station Kiosk QR scanners crashed overnight', 'Confusion between Milan and Zurich departures'], 0, 'ตอบ Heavy rain traffic slowed their taxis... (Heavy rain slowed our taxi convoy across Zurich bridge)'],
    ]),

    // ══════════════════ SET 10 (Q147–Q200: 54 Qs) ══════════════════
    p7(10, 'm10-s1', [
      doc('memo', 'Cafeteria Operations Update', [['To', 'Campus Staff'], ['From', 'Dining Wellness'], ['Date', 'July 8']],
        [
          'Glass mason salad jars borrowed from our South Atrium Salad Station must rinse lightly under pantry faucets before dropping back onto Green Rack bins near Floor 2 Breakroom.',
          'Customers bringing personal insulated tumblers at Coffee Counter 3 automatically save 50 cents off every espresso drink.',
        ]),
    ], [
      ['Single · Detail', 'What should employees do before placing borrowed glass salad jars onto Green Rack bins?', ['Rinse jars lightly under breakroom faucets', 'Wash lids inside personal office dishwashers', 'Return clean bags at Coffee Counter 3', 'Stick room numbers on jar bottoms'], 0, 'ตอบ Rinse jars lightly under breakroom faucets'],
      ['Single · Detail', 'How do coffee buyers earn a 50-cent cup discount?', ['By bringing their own insulated mugs to Coffee Counter 3', 'By ordering espresso cleanly before noon', 'By returning South Atrium salad jars', 'By paying with employee dining fobs'], 0, 'ตอบ By bringing their own insulated mugs... (bringing personal insulated tumblers at Coffee Counter 3)'],
    ]),

    p7(10, 'm10-s2', [
      doc('notice', 'Oak Street Garage — Automatic Barrier Camera Upgrade', [['Effective', 'Monday, April 15']],
        [
          'License-plate recognition cameras installed cleanly atop Entry Lanes 1 and 2 replace windshield barcode stickers starting April 15. Drivers holding verified commuter monthly accounts roll smoothly past exit arms without rolling down windows in rain!',
          'Make sure current rear or front vehicle license digits sit updated cleanly inside MyParking Portal beforehand.',
        ]),
    ], [
      ['Single · Purpose', 'What technology replaces old windshield stickers on April 15?', ['Overhead license-plate scanning cameras', 'Mobile Bluetooth gate keys', 'QR paper slips from kiosks', 'Handheld guard tablets'], 0, 'ตอบ Overhead license-plate scanning cameras (License-plate recognition cameras installed atop Entry Lanes 1 and 2)'],
      ['Single · Requirement', 'What must commuters verify inside MyParking Portal before Monday?', ['That their current vehicle plate numbers are entered accurately', 'That barcode stickers stay visible on windshields', 'That window buttons open smoothly', 'That backup entry lanes stay clear'], 0, 'ตอบ That their current vehicle plate numbers... (Make sure current vehicle license digits sit updated cleanly inside MyParking Portal)'],
    ]),

    p7(10, 'm10-s3', [
      doc('chat', 'Store Support Team Chat', [['Channel', '#store-212'], ['Date', 'August 2']],
        [
          chat([
            ['Sonia Gomez', '1:30 P.M.', 'Customer at Register 4 wants returning an opened ceramic pour-over kettle bought three weeks back—box is slightly torn though receipt checks out cleanly!'],
            ['Manager Tariq', '1:33 P.M.', 'Wait—are all inner stainless lid coils intact without lime stains or burned base scuffs?'],
            ['Sonia Gomez', '1:36 P.M.', 'Totally spotless inside! Seems she only brewed water once and opted for an electric gooseneck model instead.'],
            ['Manager Tariq', '1:39 P.M.', 'Approve full store merchandise credit smoothly under our 30-day open-box swap policy cleanly—she can apply it toward that gooseneck kettle right off Aisle 3!'],
          ]),
        ]),
    ], [
      ['Single · Condition', 'Why did Manager Tariq inspect kettle interior details before deciding?', ['Spotless unused kettles qualify under the 30-day open-box return policy', 'Electrical units forfeit cash returns automatically', 'Torn outer cartons double restocking penalties', 'Customers returning after 3 weeks require HQ approval'], 0, 'ตอบ Spotless unused kettles qualify... (เมื่อเช็กแล้วข้างในสะอาดหมดจด จึงอนุมัติตามนโยบาย 30-day open-box swap policy)'],
      ['Single · Detail', 'Why is the customer returning the ceramic kettle?', ['She prefers switching onto an electric gooseneck model', 'The stainless coil corroded after brewing coffee', 'Receipt dates expired cleanly over 60 days', 'Its pouring handle arrived broken'], 0, 'ตอบ She prefers switching onto an electric gooseneck model'],
      ['Single · Action', 'What refund form does Tariq authorize at Register 4?', ['Full store merchandise credit toward Aisle 3 stock', 'Half-price repair exchange vouchers', 'Postal cash checks mailed next Tuesday', 'Discount codes for coffee beans only'], 0, 'ตอบ Full store merchandise credit... (Approve full store merchandise credit cleanly -> apply it toward gooseneck off Aisle 3)'],
    ]),

    p7(10, 'm10-s4', [
      doc('table', 'Nordic Translation Bureau — Document Turnaround & Pricing', [['Languages', 'English, German, Japanese, Spanish, Thai']],
        [
          tbl(
            ['Service Tier', 'Words Included', 'Turnaround', 'Base Fee', 'Certified Stamp Add-On'],
            [
              ['Standard Business', 'Up to 1,200 words', '4 Business Days', '$110', '+$25'],
              ['Express Priority', 'Up to 1,200 words', '48 Hours', '$165', '+$25'],
              ['Overnight Urgent', 'Up to 1,200 words', 'Next Morning 9:00 A.M.', '$240', '+$25'],
            ]),
          'Documents exceeding 1,200 words add $0.09 per extra word cleanly.',
        ]),
    ], [
      ['Single · Math', 'How much would translating and notarizing-stamping a 1,000-word birth document via Express Priority (48 Hours) cost?', ['$190', '$165', '$135', '$265'], 0, 'ตอบ $190 (Express Priority <= 1,200 คำ = $165 + Certified Stamp +$25 = $190)'],
      ['Single · Math', 'If a technical manual totals 1,500 words under Standard Business WITHOUT a stamp, what will the total fee be?', ['$137', '$110', '$145', '$127'], 0, 'ตอบ $137 ($110 ฐานสำหรับ 1,200 คำ + ส่วนเกิน 300 คำ × $0.09 = $27 -> รวม $137)'],
      ['Single · Detail', 'Which turn-around tier delivers completed text by 9:00 A.M. the following morning?', ['Overnight Urgent', 'Express Priority', 'Standard Business', 'Weekend Express'], 0, 'ตอบ Overnight Urgent'],
    ]),

    p7(10, 'm10-s5', [
      doc('letter', 'Official Notice from Landlord', [['To', 'Unit 2B Tenants (Crestview Optics)'], ['From', 'Harbor Property Partners'], ['Date', 'April 19']],
        [
          'Dear Unit 2B Team,',
          'Routine insurance hydrant flow tests along Chestnut Alley take place Wednesday morning, May 1 between 7:00 A.M. and 8:30 A.M. Because sidewalk standpipes run high water pressure directly beside basement window wells, kindly roll down storm shutters along rear alley windows cleanly before locking up Tuesday night.',
          'Water service inside clinic sinks and restrooms will remain completely normal afterward, though brief cloudy air bubbles may fizz momentarily out of cold taps around 9:00 A.M. before clearing cleanly.',
        ]),
    ], [
      ['Single · Detail', 'Why are tenants instructed to close rear alley window shutters Tuesday evening?', ['Pressurized hydrant testing happens beside basement window wells Wednesday early', 'Rainstorms forecast flooding along Chestnut Alley', 'Property painters are spraying rear brick facades Wednesday', 'Window glass seals need replacement after May 1'], 0, 'ตอบ Pressurized hydrant testing... (standpipes run high water pressure directly beside basement window wells)'],
      ['Single · Detail', 'What minor temporary plumbing side effect might tenants notice around 9:00 A.M. Wednesday?', ['Momentary cloudy air bubbles in cold faucet streams', 'Zero running restroom water until Thursday', 'Discolored hot heating pipes overnight', 'Loud alley pump alarms all afternoon'], 0, 'ตอบ Momentary cloudy air bubbles... (brief cloudy air bubbles may fizz momentarily out of cold taps around 9:00 A.M.)'],
      ['Single · Detail', 'How long does the active alley hydrant test last?', ['Ninety minutes', 'Three hours', 'Twenty-four hours', 'Forty-five minutes'], 0, 'ตอบ Ninety minutes (7:00 A.M. to 8:30 A.M. = 1 ชม. 30 นาที)'],
    ]),

    p7(10, 'm10-s6', [
      doc('article', 'Regional Bus Routes Switch Onboard Bike Racks to Hydraulic E-Bike Lifts', [['Source', 'Transit Engineering Review']],
        [
          'Standard front-bumper bicycle frames on city commuter buses historically capped weight limits cleanly below twenty kilograms—shutting out heavier modern electric cargo-commuter bikes carrying sturdy frame batteries.',
          'Starting this spring, Metro Transit retrofitted sixty suburban express coach fronts with dampened spring-assisted aluminum wheel cradles holding up to 34 kilograms effortlessly with a single fingertip lift, quickly bumping bicycle commuter boardings up 37 percent across hillside suburban rail corridors.',
        ]),
    ], [
      ['Single · Problem', 'Why could older bus front racks NOT carry many modern commuter e-bikes?', ['Heavier batteries exceeded the twenty-kilogram structural weight cap', 'Suburban buses parked too close to curb poles', 'E-bike tires slipped inside skinny aluminum slots', 'Drivers banned rechargeable bikes indoors'], 0, 'ตอบ Heavier batteries exceeded the 20-kg weight cap (historically capped weight limits cleanly below 20 kg — shutting out heavier e-bikes)'],
      ['Single · Detail', 'What weight limit do the upgraded spring-assisted racks support?', ['Up to 34 kilograms', 'Strictly 20 kilograms', 'Thirty-seven pounds', 'Sixty kilograms'], 0, 'ตอบ Up to 34 kilograms (holding up to 34 kilograms effortlessly)'],
      ['Single · Vocab', 'The word "retrofitted" in paragraph 2 is closest in meaning to ___.', ['upgraded older vehicles with new gear', 'scrapped completely cleanly', 'painted safety yellow', 'delayed delivery runs'], 0, 'ตอบ upgraded older vehicles with new gear (retrofitted = ดัดแปลงติดตั้งอุปกรณ์ใหม่เพิ่มเข้าไปในรถเดิม)'],
    ]),

    p7(10, 'm10-s7', [
      doc('ad', 'Job Opening — Event Catering Logistics Lead', [['Company', 'Evergreen Table Co.'], ['Location', 'Denver Commissary (Mon–Fri + Sat Events)']],
        [
          'Coordinate culinary hot-box vans across corporate gala luncheons and university museum dinners smoothly across Front Range venues! [1] You will verify spotless chafing burner inventories, map van arrival routes avoiding downtown sports parades, and lead friendly five-person banquet unloading crews smoothly onboard site docks.',
          'Essentials:',
          lst([
            'Valid clean commercial box-van driving record across Colorado highways',
            'Experience coordinating 150-guest+ plated or buffet banquet setups',
            'Ability lifting 20-kilogram insulated polycarbonate beverage carriers comfortably',
          ]),
          '[2] Benefits include hot daily shift kitchen lunches, $62,000 base salary, overtime banquet bonuses, and full health coverage. [3] Email work history smoothly to jobs@evergreentable.co mentioning Dispatch Lead. [4]',
        ]),
    ], [
      ['Single · Detail', 'Which duty is part of the Logistics Lead’s job?', ['Verifying heating inventories and guiding dock unloading teams', 'Developing new seasonal pastry recipes', 'Auditing downtown sports arena ticket revenue', 'Cleaning university dorm kitchens'], 0, 'ตอบ Verifying heating inventories... (verify chafing burner inventories, map routes, and lead unloading crews)'],
      ['Single · NOT', 'What is NOT listed under core candidate essentials?', ['Culinary pastry certification', 'Clean highway box-van driving history', 'Comfort lifting 20 kg drink carriers', 'Banquet experience with 150+ guests'], 0, 'ตอบ Culinary pastry certification (ไม่ได้ระบุเรื่องประกาศนียบัตรทำขนม/เชฟ)'],
      ['Single · Detail', 'What workplace meal perk is noted in benefits?', ['Free daily hot kitchen staff lunches', 'Wholesale pastry discount vouchers', 'Overtime coffee bar coupons', 'Annual banquet wine baskets'], 0, 'ตอบ Free daily hot kitchen staff lunches (hot daily shift kitchen lunches)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Fluency tracking mobile dispatch checklists inside tablets also speeds morning dock checks."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจาก Essentials เพื่อบอกทักษะเสริมที่มีประโยชน์ ก่อนเข้าสู่สวัสดิการ)'],
    ]),

    p7(10, 'm10-s8', [
      doc('memo', 'Library Makerspace — 3D Printer Filament & Safety Guidelines', [['Room', 'Creator Lab Room 108']],
        [
          'Members holding verified adult Maker Badges enjoy complimentary 4-hour 3D PLA filament jobs weekdays between 10:00 A.M. and 6:00 P.M.',
          'Usage Policy:',
          lst([
            'Use strictly plant-based biodegradable PLA spools supplied free behind Desk 1—bringing personal ABS plastic reels is forbidden due to strong heated nozzle fumes.',
            'Stay inside Room 108 until extruder layers complete cleanly at least 15 minutes (never start prints and rush straight home!).',
            'Unclaimed finished plastic models sitting uncollected over 10 calendar days recycle neatly cleanly into workshop trays.',
          ]),
        ]),
    ], [
      ['Single · Cause', 'Why does Creator Lab ban personal ABS plastic filament spools?', ['Heated ABS emits harsh fumes indoor spaces avoid', 'ABS costs triple biodegradable PLA', 'Room 108 nozzles reject blue plastic colors', 'Prints finish slower than four hours'], 0, 'ตอบ Heated ABS emits harsh fumes... (forbidden due to strong heated nozzle fumes)'],
      ['Single · Timing', 'How long must members watch their new 3D print job run before stepping out briefly?', ['At least fifteen minutes', 'Four full hours cleanly', 'Ten calendar days', 'Until staff locks Desk 1'], 0, 'ตอบ At least fifteen minutes (complete cleanly at least 15 minutes)'],
      ['Single · Inference', 'What happens to finished 3D toys left behind cleanly for three weeks?', ['Workshop crews clean trays and recycle forgotten prints', 'Staff mail unclaimed plastics via courier', 'Desk 1 locks badges for thirty days', 'Fees double cleanly daily'], 0, 'ตอบ Workshop crews clean trays... (sitting uncollected over 10 calendar days recycle neatly cleanly)'],
      ['Single · Detail', 'When can verified Maker Badge holders submit prints?', ['Weekdays between 10:00 A.M. and 6:00 P.M.', 'Any hour including Sunday midnights', 'Only Saturday mornings', 'Strictly four times annually'], 0, 'ตอบ Weekdays between 10:00 A.M. and 6:00 P.M.'],
    ]),

    p7(10, 'm10-s9', [
      doc('article', 'Compact Heat-Recovery Ventilators Keep Historic Brick Schools Warm & Fresh', [['By', 'David Kim'], ['Issue', 'Green Building Watch']],
        [
          'Century-old masonry elementary schools routinely face an uncomfortable winter dilemma: sealing historic drafty oak window frames stops icy frost drafts, yet stale classroom air quickly leaves afternoon math students groggy with elevated carbon dioxide levels. [1] Tearing down solid brick corridor walls to thread massive central ceiling air ducts through 1920s plastered ceilings can easily top two million dollars per schoolhouse.',
          'Engineering consultants across Minneapolis tackled that steep ductwork hurdle neatly this winter by fitting compact decentralized air-recovery units right inside single windowless brick transom spaces cleanly above classroom chalkboards. [2] Dual whisper fans push foggy indoor classroom exhaust past thin aluminum heat-exchange honeycombs alongside incoming freezing January outdoor air without letting streams mix.',
          '"Warm exiting air pre-warms freezing outdoor intake up cleanly by 84 percent before cold gusts enter desks, cutting noisy boiler gas bills nearly in half while keeping crisp outdoor oxygen high," emphasizes engineer Claire Wu. [3] Automated room air sensors slow fans silently down whenever classes recess outside for afternoon gym periods.',
          'Twelve neighboring school boards recently approved matching energy grants to install 180 wall-mounted recovery bricks across autumn repairs cleanly next year. [4]',
        ]),
    ], [
      ['Single · Problem', 'Why could historic masonry schools not easily install standard central HVAC ducts?', ['Cutting giant ducts through thick 1920s brick walls and plaster ceilings was prohibitively costly', 'Municipal fire rules banned ceiling fans cleanly', 'Elementary windows opened wider than hallways', 'Boiler gas stopped reaching Minnesota neighborhoods'], 0, 'ตอบ Cutting giant ducts through thick brick walls... (Tearing down brick corridor walls ... can easily top two million dollars per schoolhouse)'],
      ['Single · Process', 'How does freezing winter outdoor air get warmed inside the compact ceiling unit?', ['Exiting warm indoor air transfers heat cleanly across thin aluminum plates without mixing air streams', 'Electric baseboard wires heat incoming snow gusts', 'Chalkboard radiators blow hot steam backward', 'Boilers boil river water inside corridor trays'], 0, 'ตอบ Exiting warm indoor air transfers heat... (push indoor exhaust past thin aluminum honeycombs alongside cold intake without letting streams mix)'],
      ['Single · Benefit', 'What additional savings happen when classes leave classrooms empty for gym periods?', ['Smart sensors throttle fan speeds smoothly down to save power', 'Chalkboard windows latch cleanly open', 'Janitors switch boilers entirely off until Monday', 'Gas meters refund school boards daily'], 0, 'ตอบ Smart sensors throttle fan speeds... (Automated sensors slow fans silently down whenever classes recess outside)'],
      ['Single · Vocab', 'The word "hurdle" in paragraph 2 is closest in meaning to ___.', ['obstacle', 'stairwell', 'incentive', 'invoice'], 0, 'ตอบ obstacle (ductwork hurdle = อุปสรรค/ความยุ่งยากเรื่องท่อลม)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does this sentence best belong? "Installing two units per classroom required barely a quiet weekend with zero hallway plaster dust."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจากประโยคอธิบายติดตั้งเครื่องเหนือกระดานดำแทนท่อขนาดใหญ่ -> แสดงความติดตั้งไวภายในสุดสัปดาห์เดียวโดยไม่มีฝุ่น)'],
    ]),

    p7(10, 'm10-d1', [
      doc('ad', 'OceanView Marine Tours — Whale & Seabird Cruises', [['Dock', 'Pier 4 Harbor Walk']],
        [
          tbl(
            ['Cruise Tour', 'Departure Times', 'Duration', 'Adult Ticket', 'Senior (65+) / Child Ticket'],
            [
              ['Morning Bay Loop', '9:00 A.M. daily', '2.5 hrs', '$48', '$36'],
              ['Afternoon Pelagic Express', '1:30 P.M. Fri–Sun', '4.0 hrs', '$74', '$58'],
              ['Sunset Harbor Sail', '5:45 P.M. daily', '2.0 hrs', '$52', '$42'],
            ]),
          'Rain or shine heated enclosed cabins! Families booking 4+ full tickets together get free printed waterproof seabird field guides cleanly at boarding gates.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'tickets@oceanviewtours.com'], ['From', 'Dr. Samuel Alvarez'], ['Date', 'July 2'], ['Subject', 'Booking Request — Friday July 12']],
        [
          'Hi Ticket Crew,',
          'Visiting Pier 4 next Friday morning July 12 cleanly alongside three guests: myself (adult 42), my father (age 68), my sister (adult 39), and my nephew (age 10)—4 passengers total! Our family train leaves downtown promptly at 3:00 P.M. Friday afternoon so we must stick strictly to your Morning Bay Loop departing at 9:00 A.M. cleanly rather than later pelagic trips.',
          'Also, since 2 adults + 1 senior + 1 child total 4 riders, do we grab our complimentary waterproof seabird guides directly from Pier 4 boarding attendants cleanly around 8:45 A.M.?',
          'Thanks,\nSamuel Alvarez',
        ]),
    ], [
      ['Double · Math', 'How much total will Samuel Alvarez pay for all 4 Morning Bay Loop tickets?', ['$168', '$192', '$264', '$144'], 0, 'ตอบ $168 (ผู้ใหญ่ 2 คน × $48 = $96 + ผู้สูงอายุ/เด็ก 2 คน × $36 = $72 -> รวม $168)'],
      ['Double · Synthesis', 'Why does Samuel skip Afternoon Pelagic Express and Sunset Harbor Sail?', ['His family’s downtown train departs Friday at 3:00 P.M.', 'Sunset sails prohibit children under 12', 'Pelagic boats lack enclosed heated cabins', 'Senior discounts expire after noon'], 0, 'ตอบ His family’s downtown train departs... (leaves downtown at 3:00 P.M. so Afternoon 1:30–5:30 P.M. and Sunset won’t fit)'],
      ['Double · Synthesis', 'Will the Alvarez family qualify for complimentary waterproof seabird field guides?', ['Yes, four paid tickets meet the 4+ family threshold cleanly', 'No, guides require buying Afternoon Pelagic Express', 'Only Senior tickets include waterproof guides', 'No, child tickets drop below minimum adults'], 0, 'ตอบ Yes, four paid tickets... (booking 4+ full tickets together get free guides at boarding gates)'],
      ['Double · Detail', 'When should the morning boat land cleanly back at Pier 4?', ['11:30 A.M.', '1:30 P.M.', '12:00 P.M.', '5:30 P.M.'], 0, 'ตอบ 11:30 A.M. (ออก 9:00 A.M. + ใช้เวลา 2.5 ชม. = 11:30 A.M.)'],
      ['Double · Detail', 'Are OceanView boat cruises canceled automatically during light coastal rain?', ['No, heated enclosed cabins allow cruises to sail rain or shine', 'Yes, light drizzle delays departures cleanly', 'Boats swap routes to Tuesday mornings', 'Paper tickets convert to train passes'], 0, 'ตอบ No, heated enclosed cabins... (Rain or shine heated enclosed cabins!)'],
    ]),

    p7(10, 'm10-d2', [
      doc('notice', 'BrightPath Health Insurance — Dental & Optical Claim Submission Checklist', [['Portal', 'claims.brightpath.io']],
        [
          lst([
            'Claims MUST upload digitally inside 60 calendar days of clinic treatment date.',
            'Optical prescription frame receipts require optometrist Lens Power PD numbers PLUS itemized Merchant Tax ID neatly visible.',
            'Orthodontic cleanings reimburse up to 80% cleanly up to $450 annual dental cap.',
            'Standard processing transfers funds straight to employee payroll accounts within 7 business days cleanly.',
          ]),
        ]),
      doc('email', 'E-mail Message',
        [['To', 'claims@brightpath.io'], ['From', 'Chloe Patel'], ['Date', 'September 18'], ['Subject', 'Optical Claim Status — Ticket #BP-512']],
        [
          'Hello BrightPath Team,',
          'Submitted digital Ticket #BP-512 back on September 9 cleanly for new distance eyeglasses bought September 5 at Oak Street Vision Center ($280 frame + progressive lenses). Everything loaded neatly 4 days post-visit well within 60 days!',
          'Checked portal status just now (Sept 18 — 7 business days past Sept 9!) and noticed a pending hold banner reading "Verify Merchant Docs." Glancing back onto my uploaded scan, Oak Street Vision’s shop printout listed Lens PD numbers clearly, yet cropped off the bottom Merchant Tax ID box cleanly near paper fold!',
          'Re-uploading the complete full-sheet uncropped invoice scan smoothly today—hope payouts resume quickly!',
          'Best,\nChloe Patel',
        ]),
    ], [
      ['Double · Synthesis', 'Why was Claim #BP-512 paused on pending hold despite arriving well within 60 days?', ['The Merchant Tax ID at the bottom edge got cropped out of the initial photo scan', 'Progressive eyeglasses are excluded from BrightPath optical policies', 'Nine calendar days exceeded standard processing delays', 'Chloe forgot submitting Lens Power PD measurements'], 0, 'ตอบ The Merchant Tax ID at the bottom edge got cropped out... (ข้อกำหนดระบุ Optical receipt ต้องเห็นทั้ง PD และ Merchant Tax ID ชัดเจน แต่สแกนรอบแรกตัดขอบล่าง Tax ID ทิ้งไป)'],
      ['Double · Detail', 'When did Chloe originally purchase her new eyeglasses?', ['September 5', 'September 9', 'September 18', 'Sixty days earlier'], 0, 'ตอบ September 5 (glasses bought September 5 at Oak Street Vision)'],
      ['Double · Detail', 'Why did Chloe expect payout arrival cleanly around September 18?', ['Seven business days passed since her initial September 9 upload', 'Oak Street Vision promised next-day payroll wiring', 'Claims under $300 skip verification reviews', 'Receipts uploaded under 5 days auto-clear'], 0, 'ตอบ Seven business days passed... (นโยบายโอนคืนภายใน 7 business days จาก 9 ก.ย. -> 18 ก.ย.)'],
      ['Double · Inference', 'What is BrightPath’s maximum annual payout specifically for orthodontic cleanings?', ['$450', '$280', '$600', '$80'], 0, 'ตอบ $450 (up to $450 annual dental cap)'],
      ['Double · Detail', 'How is Chloe fixing the hold banner today?', ['Uploading an uncropped scan showing the complete receipt bottom', 'Calling Oak Street Vision for a duplicate prescription', 'Switching claims onto dental categories', 'Mailing paper glasses receipts downtown'], 0, 'ตอบ Uploading an uncropped scan... (Re-uploading complete full-sheet uncropped invoice scan smoothly today)'],
    ]),

    p7(10, 'm10-t1', [
      doc('ad', 'TimberLine Shelving Co. — Heavy Warehouse Racks', [['Warehouse', 'Ships flat from Atlanta']],
        [
          tbl(
            ['Model', 'Beam Width', 'Shelf Capacity / Level', 'Levels', 'Unit Price'],
            [
              ['LightSteel R2', '120 cm', '180 kg', '4 shelves', '$145'],
              ['HeavySpan H4', '180 cm', '450 kg', '4 shelves', '$260'],
              ['MegaPallet M5', '240 cm', '900 kg', '5 shelves', '$420'],
            ]),
          'Bolt-down floor anchor wedge kit (set of 4 steel anchors): $18. Buy 6+ HeavySpan or MegaPallet bays and receive FREE flat pallet freight (normally $110 flat truck fee)!',
        ]),
      doc('memo', 'Purchasing Directive — Coffee Roastery Storage Annex', [['From', 'Operations Lead Daniel Kim'], ['Date', 'October 7']],
        [
          'To store sixty green raw coffee burlap sacks cleanly (70 kg per sack -> up to 350 kg resting per steel shelf level!) along our 14-meter west masonry wall cleanly, let us buy SEVEN HeavySpan H4 bays cleanly paired with SEVEN bolt-down steel floor anchor kits for seismic compliance.',
          'MegaPallet M5 bays project too deep across forklift turnaround lanes, whereas LightSteel caps below 200 kg/level dangerously fail sack weights!',
        ]),
      doc('invoice', 'TimberLine Dispatch Receipt #TL-908',
        [['Buyer', 'NorthHarbor Roasters'], ['Date', 'October 8']],
        [
          '7 × HeavySpan H4 Bays ($1,820) + 7 × Floor Anchor Wedge Kits ($126).',
          'Pallet Freight Delivery: $0 (Free Tier Applied · 7 Bays). Total Paid: $1,946.00.',
        ]),
    ], [
      ['Triple · Synthesis', 'Why did Daniel Kim select HeavySpan H4 instead of LightSteel R2 or MegaPallet M5?', ['HeavySpan handles 350 kg shelves safely without overhanging narrow forklift paths', 'HeavySpan costs less per bay than LightSteel', 'Only HeavySpan connects bolt-down floor anchors', 'MegaPallet bays cap cleanly below 400 kg per shelf'], 0, 'ตอบ HeavySpan handles 350 kg shelves cleanly... (ใส่กระสอบ 350 kg/ชั้นได้ในลิมิต 450 kg แต่ MegaPallet ลึกเกินทางวิ่งรถยก ส่วน LightSteel รับได้แค่ 180 kg)'],
      ['Triple · Math', 'Verify the $1,946.00 billed on Receipt #TL-908:', ['(7 × $260) + (7 × $18) + $0 freight', '(7 × $260) + (7 × $18) + $110 freight', '(6 × $420) + $126 anchors', '(7 × $145) + (7 × $18)'], 0, 'ตอบ (7 × $260) + (7 × $18) + $0 freight (7 × $260 = $1,820 + 7 × $18 = $126 + ค่าส่งฟรีเพราะสั่ง 7 ชุด >= 6 ชุด -> รวม $1,946)'],
      ['Triple · Inference', 'Why did NorthHarbor pay $0 instead of $110 for truck pallet shipping?', ['Ordering 7 HeavySpan H4 bays qualified above the 6+ unit free freight minimum', 'Atlanta pickups waive truck surcharges cleanly', 'Anchor kits grant complimentary freight upgrades', 'October sales remove flat pallet fees'], 0, 'ตอบ Ordering 7 HeavySpan H4 bays... (Buy 6+ HeavySpan or MegaPallet bays and receive FREE flat pallet freight)'],
      ['Triple · Detail', 'Why were bolt-down floor anchor wedge kits added onto all seven bays?', ['For seismic earthquake stability compliance', 'LightSteel beams require four bolts per corner', 'To raise shelf capacity above 900 kg', 'Forklifts drag shelves without floor pins'], 0, 'ตอบ For seismic earthquake stability compliance (for seismic compliance)'],
      ['Triple · Detail', 'Where along NorthHarbor’s roastery will the seven bays stand?', ['Along the 14-meter west masonry wall', 'Beside Main Coffee Counter 3', 'Inside Atlanta pickup docks', 'Outside loading ramps'], 0, 'ตอบ Along the 14-meter west masonry wall'],
    ]),

    p7(10, 'm10-t2', [
      doc('article', 'Pacific Green Architecture Expo Opens Early Registration', [['City', 'Vancouver · Sept 26–27']],
        [
          'Building designers, municipal code planners, and mass-timber engineers converge cleanly across Vancouver Waterfront Hall September 26–27 to explore low-carbon glazing, timber joinery, and acoustic cladding.',
        ]),
      doc('table', 'September 26 Morning Keynote & Panel Rooms', null, [
        tbl(
          ['Start Time', 'Hall', 'Topic', 'Lead Speaker', 'Accredited CE Credits'],
          [
            ['9:00 A.M.', 'Main Stage A', 'Cross-Laminated Timber Seismic Safety', 'Dr. Hana Sato', '1.5 HSW Credits'],
            ['10:45 A.M.', 'Theater 202', 'Triple-Glazed Acoustic Facades', 'M. Alvarez', '1.0 LU Credit'],
            ['11:00 A.M.', 'Room 104', 'Zero-Waste Jobsite Sorting', 'R. Bennett', '1.0 LU Credit'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'credits@greenarchexpo.org'], ['From', 'Arthur Lin (Structural Architect)'], ['Date', 'September 29'], ['Subject', 'Missing HSW Credit Certificate from Sept 26 Morning']],
        [
          'Hello Conference Desk,',
          'I attended cleanly across Waterfront Hall all day Thursday September 26! Looking inside my downloaded continuing education PDF summary today though, only M. Alvarez’s 10:45 A.M. acoustic window talk appears logged cleanly—Dr. Hana Sato’s opening 9:00 A.M. timber keynote (1.5 HSW Credits!) vanished completely from my list even though door ushers tapped my badge cleanly outside Main Stage A at 8:55 A.M.!',
          'Please verify badge scan logs so all 2.5 morning credits record cleanly before October state licensing audits.',
          'Best,\nArthur Lin',
        ]),
    ], [
      ['Triple · Synthesis', 'Which session did Arthur Lin NOT attend at 11:00 A.M. on September 26?', ['R. Bennett’s Zero-Waste Jobsite Sorting in Room 104', 'M. Alvarez’s Triple-Glazed Acoustic Facades', 'Dr. Hana Sato’s Cross-Laminated Timber talk', 'Main Stage A morning session'], 0, 'ตอบ R. Bennett’s Zero-Waste Jobsite Sorting... (Arthur เข้าฟัง Dr. Hana Sato 9:00 และ M. Alvarez 10:45 ได้ 1.5 + 1.0 = 2.5 เครดิต จึงไม่ได้เข้าห้อง 104)'],
      ['Triple · Detail', 'Which credit entry is missing from Arthur Lin’s online summary PDF?', ['Dr. Hana Sato’s 1.5 HSW Credits session', 'M. Alvarez’s 1.0 LU Credit session', 'Room 104 Zero-Waste Sorting credit', 'September 27 closing credits'], 0, 'ตอบ Dr. Hana Sato’s 1.5 HSW Credits session (opening 9:00 A.M. timber keynote vanished completely)'],
      ['Triple · Math', 'Verify Arthur’s expected total morning credits BEFORE his upcoming October licensing audit:', ['1.5 HSW + 1.0 LU = 2.5 total credits', '1.0 LU + 1.0 LU = 2.0 total credits', '1.5 HSW alone', '3.5 total credits'], 0, 'ตอบ 1.5 HSW + 1.0 LU = 2.5 total credits (ตรงกับที่ Arthur ระบุว่า all 2.5 morning credits)'],
      ['Triple · Detail', 'What evidence shows Arthur attended Main Stage A on time?', ['Ushers scanned his badge cleanly outside Main Stage A at 8:55 A.M.', 'He emailed M. Alvarez notes during the lecture', 'Room 104 handed paper attendance cards', 'He arrived September 29 at Front Desk'], 0, 'ตอบ Ushers scanned his badge cleanly outside Main Stage A at 8:55 A.M.'],
      ['Triple · Inference', 'Why could Arthur NOT physically attend BOTH Theater 202 (10:45 A.M.) and Room 104 (11:00 A.M.) completely?', ['M. Alvarez’s talk overlaps cleanly past Room 104’s 11:00 A.M. start', 'Room 104 sits across Harbor River', 'Theater 202 locked badge readers until noon', 'HSW licenses cap daily sessions at one'], 0, 'ตอบ M. Alvarez’s talk overlaps cleanly past Room 104’s 11:00 A.M. start (เวลา 10:45 กับ 11:00 ทับซ้อนกัน)'],
    ]),

    p7(10, 'm10-t3', [
      doc('ad', 'Metro Courier Locker Network — 24/7 Business Drop-Offs', [['Rates', 'Flat Domestic Zone Matrix']],
        [
          tbl(
            ['Locker Compartment', 'Max Dimensions', 'Max Weight', 'Domestic Fee (2-Day Air)', 'Signature Release Fee'],
            [
              ['Envelope S', '32 × 24 × 5 cm', '1 kg', '$7.50', '+$2.00'],
              ['Standard Parcel M', '40 × 32 × 18 cm', '10 kg', '$14.00', '+$2.00'],
              ['Bulk Crate L', '60 × 45 × 38 cm', '25 kg', '$26.00', '+$2.00'],
            ]),
          'Drop items before 5:00 P.M. Monday–Friday for same-evening airport hub transfer.',
        ]),
      doc('invoice', 'Metro Locker Receipt #ML-7840',
        [['Sender', 'CrestView Optics (Tech Bench)'], ['Dropped Off', 'Tuesday, May 7 · 4:10 P.M.']],
        [
          'Compartment Used: Standard Parcel M (40×32×18 cm · Weight Checked: 6.4 kg) + Recipient Signature Release Added.',
          'Total Deducted: $16.00 · Recipient: Alpine Sports Shop, Denver · Est. Arrival: Thursday, May 9.',
        ]),
      doc('chat', 'Shipping Desk Chat', [['Between', 'Samira Patel & Courier Support'], ['Date', 'Wednesday, May 8 · 10:00 A.M.']],
        [
          chat([
            ['Samira Patel', '10:00 A.M.', 'Hi there! Dropped optical eyewear frames weighing 6.4 kg inside Metro Locker #44 yesterday afternoon (4:10 P.M., Receipt #ML-7840) using Standard Parcel M + Signature Release. Confirming whether our parcel caught last evening’s airport flight toward Denver!'],
            ['Support Agent Ben', '10:04 A.M.', 'Checking #ML-7840 right now—yep! Dropped cleanly 50 minutes ahead of our 5:00 P.M. weekday hub cutoff, so Parcel M landed onto Denver’s overnight jet smoothly and delivers tomorrow Thursday May 9 requiring signed handoff as requested cleanly!'],
          ]),
        ]),
    ], [
      ['Triple · Synthesis', 'Why did Receipt #ML-7840 make the same-evening Tuesday airport hub transfer cleanly?', ['It was dropped at 4:10 P.M. ahead of the 5:00 P.M. weekday cutoff', 'Standard Parcel M skips airport hub sorting checks', 'Signature release flights depart after 6:00 P.M.', 'Optics cartons receive same-evening priority upgrades'], 0, 'ตอบ It was dropped at 4:10 P.M. ahead of the 5:00 P.M. weekday cutoff'],
      ['Triple · Math', 'Verify why $16.00 was charged on Receipt #ML-7840:', ['Standard Parcel M ($14.00) + Signature Release ($2.00)', 'Envelope S ($7.50 × 2) + $1.00 extra weight', 'Bulk Crate L ($26.00) minus $10 weekday coupon', 'Standard Parcel M ($14.00) + $2.00 late fee'], 0, 'ตอบ Standard Parcel M ($14.00) + Signature Release ($2.00) = $16.00'],
      ['Triple · Inference', 'Why did CrestView Optics need Standard Parcel M rather than Envelope S?', ['The 6.4 kg parcel exceeds Envelope S’s 1 kg maximum capacity', 'Envelope S excludes 2-Day Air airport delivery', 'Denver shops only accept orange Parcel M doors', 'Signature release cannot cover envelopes'], 0, 'ตอบ The 6.4 kg parcel exceeds Envelope S’s 1 kg cap (น้ำหนัก 6.4 kg เกินลิมิต 1 kg ของซอง Envelope S แต่พอดีใน Standard Parcel M <= 10 kg)'],
      ['Triple · Detail', 'When is Alpine Sports Shop scheduled to receive the eyewear parcel?', ['Thursday, May 9', 'Tuesday, May 7', 'Wednesday, May 8', 'Friday, May 10'], 0, 'ตอบ Thursday, May 9 (Est. Arrival: Thursday, May 9 · delivers tomorrow Thursday May 9)'],
      ['Triple · Detail', 'What special delivery security feature did Samira request?', ['Recipient must sign upon handoff', 'Courier takes locker photos at noon', 'Drops inside Denver outdoor kiosks', 'Double padded shipping tape'], 0, 'ตอบ Recipient must sign upon handoff (requiring signed handoff as requested / Signature Release)'],
    ]),
  ];
})();

if (typeof module !== 'undefined') module.exports = { TOEIC_MOCK_VOL2: globalThis.TOEIC_MOCK_VOLS[2] };

