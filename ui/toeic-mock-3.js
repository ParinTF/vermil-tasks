// TOEIC Reading Part 7 Volume 3 (Sets 11-15: 70 Passage Groups = 270 Questions).
globalThis.TOEIC_MOCK_VOLS = globalThis.TOEIC_MOCK_VOLS || {};
globalThis.TOEIC_MOCK_VOLS[3] = (() => {
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
    // ══════════════════ SET 11 (Q147–Q200: 54 Qs) ══════════════════
    p7(11, 'm11-s1', [
      doc('memo', 'Safety Notice', [['To', 'Warehouse Loading Drivers'], ['From', 'Bay Operations'], ['Date', 'March 12']],
        [
          'Due to overhead steel roller replacement along Bay Door 6 this week, refrigerated delivery trailers must reverse strictly into adjacent Bay Door 7 through Friday evening.',
          'Please lock rear wheel chocks firmly before rolling heavy stainless milk carts across trailer dock plates.',
        ]),
    ], [
      ['Single · Detail', 'Why are refrigerated trailers diverted from Bay Door 6 this week?', ['Door steel rollers are being replaced overhead', 'Bay Door 7 installs colder storage vents', 'Milk carts broke Bay Door 6 dock plates', 'Rear wheel chocks arrived late Friday'], 0, 'ตอบ Door steel rollers are being replaced... (overhead steel roller replacement along Bay Door 6)'],
      ['Single · Detail', 'What safety action must drivers complete before moving milk carts?', ['Place chocks solidly behind trailer tires', 'Wait until Friday evening inspections', 'Turn off trailer refrigeration fans', 'Clear Bay Door 7 rollers manually'], 0, 'ตอบ Place chocks solidly... (lock rear wheel chocks firmly before rolling milk carts)'],
    ]),

    p7(11, 'm11-s2', [
      doc('ad', 'Harborview Acoustic Guitar Studio — Evening Adult Beginner Course', [['Term', '6 Wednesdays Starting May 8']],
        [
          'Always wanted to strum acoustic campfire chords effortlessly after office workdays? Join six relaxed 60-minute small-group Wednesday evening classes (6:30–7:30 P.M., Tuition $120) inside Studio Room 2!',
          'Need an instrument? Borrow sleek spruce-top practice guitars completely free during class hours—just reserve early since strictly ten seats open per term.',
        ]),
    ], [
      ['Single · Detail', 'What perk helps newcomers who do not yet own a guitar?', ['Free practice guitars are provided for loan during lessons', 'Studio Room 2 repairs broken strings free', 'Tuition drops by half for first-time buyers', 'Online recordings replace evening sessions'], 0, 'ตอบ Free practice guitars are provided... (Borrow sleek spruce-top practice guitars completely free during class hours)'],
      ['Single · Detail', 'How many total instructional hours does the 6-week term include?', ['Six hours', 'Ten hours', 'Twelve hours', 'Three hours'], 0, 'ตอบ Six hours (6 Wednesdays × 60 minutes = 6 ชม.)'],
    ]),

    p7(11, 'm11-s3', [
      doc('chat', 'Design Sprint Chat', [['Channel', '#app-release'], ['Date', 'October 1']],
        [
          chat([
            ['Hana Kim', '2:15 P.M.', 'Just pushed our iOS expense app update to internal beta! Testing invoice photo crops—noticed dark gray paper receipts blur slightly inside low lobby light.'],
            ['Owen Reed', '2:19 P.M.', 'Good spot! Can we auto-trigger phone flash LED softly OR boost contrast curves before OCR text scans run?'],
            ['Hana Kim', '2:22 P.M.', 'Boosting edge contrast locally takes only 20 lines of code and avoids blinding colleagues with sudden bright flashes in dim cafes!'],
            ['Owen Reed', '2:25 P.M.', 'Way smoother UX cleanly! Push that contrast tweak onto TestFlight Build 18 right away before Friday QA.'],
          ]),
        ]),
    ], [
      ['Single · Problem', 'What issue did Hana discover while testing the beta expense app?', ['Gray paper receipts looked blurry in dimly lit rooms', 'The camera flash drained phone batteries cleanly', 'Receipts saved upside down inside folders', 'OCR refused reading blue ink totals'], 0, 'ตอบ Gray paper receipts looked blurry... (dark gray paper receipts blur slightly inside low lobby light)'],
      ['Single · Detail', 'Why does Hana prefer boosting edge contrast rather than enabling automatic flash?', ['It works cleanly without shining harsh flashes inside quiet cafes', 'TestFlight prohibits hardware camera flash triggers', 'Flash bulbs blur glossy merchant paper ink', 'Owen’s team lacks LED contrast licenses'], 0, 'ตอบ It works cleanly without shining harsh flashes... (avoids blinding colleagues with sudden bright flashes in dim cafes)'],
      ['Single · Timeline', 'When must Build 18 be ready for QA testing?', ['Before Friday', 'By October 1 midnight', 'Next Monday morning', 'After customer launch'], 0, 'ตอบ Before Friday (before Friday QA)'],
    ]),

    p7(11, 'm11-s4', [
      doc('table', 'Westport Printers — Custom Envelope Printing Matrix', [['Included', 'Free PDF color proof before press run']],
        [
          tbl(
            ['Envelope Stock', 'Dimensions', '500 pcs', '1,000 pcs', 'Peel-and-Seal Flap?'],
            [
              ['Standard White #10', '241 × 105 mm', '$68', '$112', 'No (Moisture gum)'],
              ['Recycled Kraft #10', '241 × 105 mm', '$76', '$128', 'Yes'],
              ['Clear Window #9', '225 × 98 mm', '$84', '$142', 'Yes'],
            ]),
          'Add second return-address ink color (Back Flap) for +$18 flat per batch cleanly.',
        ]),
    ], [
      ['Single · Detail', 'Which envelope option lacks self-adhesive peel-and-seal flaps?', ['Standard White #10', 'Recycled Kraft #10', 'Clear Window #9', 'Both #10 styles'], 0, 'ตอบ Standard White #10 (ตารางระบุ No Moisture gum)'],
      ['Single · Math', 'How much would 1,000 Recycled Kraft #10 envelopes WITH a second ink color on the back flap cost?', ['$146', '$128', '$130', '$160'], 0, 'ตอบ $146 ($128 ค่าซอง 1,000 ซอง + $18 ค่าพิมพ์สีที่ 2 ฝาหลัง = $146)'],
      ['Single · Detail', 'What complimentary pre-print step comes cleanly with every batch?', ['A digital PDF color proof', 'Peel-and-seal adhesive samples', 'Free local bicycle delivery', 'Extra envelope cartons'], 0, 'ตอบ A digital PDF color proof (Free PDF color proof before press run)'],
    ]),

    p7(11, 'm11-s5', [
      doc('letter', 'Notice of Contract Extension', [['To', 'Ms. Nora Alverez'], ['From', 'Oakridge Municipal Parks'], ['Date', 'August 22']],
        [
          'Dear Ms. Alverez,',
          'Impressed cleanly by Evergreen Grounds’ crisp turf care across five downtown plazas this summer, our Municipal Parks Committee voted Monday night to exercise the optional twelve-month extension under Contract #OMP-14 covering all next year’s mowing and winter leaf hauling cleanly at existing 2025 pricing tiers.',
          'Simply sign and email Page 3 of the enclosed renewal addendum before September 15 so Finance extends vendor treasury codes uninterrupted.',
        ]),
    ], [
      ['Single · Purpose', 'Why did Oakridge Municipal Parks write to Nora Alverez?', ['To offer a one-year contract renewal at unchanged current pricing', 'To cancel downtown summer plaza mowing', 'To raise municipal vendor license taxes', 'To switch onto a competing landscaping team'], 0, 'ตอบ To offer a one-year contract renewal... (voted to exercise the optional 12-month extension cleanly at existing 2025 pricing tiers)'],
      ['Single · Detail', 'Which part of the enclosed packet must Nora return signed before September 15?', ['Page 3 of the renewal addendum', 'Summer mowing invoice copies', 'Finance vendor tax forms', 'Municipal park inspection sheets'], 0, 'ตอบ Page 3 of the renewal addendum'],
      ['Single · Praise', 'What convinced the committee to renew Evergreen Grounds?', ['Strong summer lawn upkeep across five plazas', 'Cheaper fuel prices in winter months', 'Automated robotic mowers installed in August', 'Nora lowered current 2025 fees cleanly'], 0, 'ตอบ Strong summer lawn upkeep... (Impressed cleanly by crisp turf care across five downtown plazas this summer)'],
    ]),

    p7(11, 'm11-s6', [
      doc('article', 'Subway Stations Test Modular Solar Canopy Bus Shelters', [['City', 'Lyon Transit Notes']],
        [
          'Neighborhood transit authorities frequently struggle lighting dark outer-suburb bus bays because digging deep electrical trench conduits beneath concrete residential sidewalks costs nearly thirty thousand dollars per stop.',
          'Lyon Metro solved outer-route lighting costs cleanly this month by dropping twenty prefabricated curved glass bus shelters topped cleanly with thin translucent photovoltaic skylights. Built-in lithium bench batteries power bright dusk-to-dawn overhead LED strips and crisp e-ink route arrival timetables cleanly without drawing a single watt from city underground power grids.',
        ]),
    ], [
      ['Single · Problem', 'Why do remote bus stops often lack electric timetable screens?', ['Trenching underground wires through concrete sidewalks is very costly', 'Translucent glass panels melt during summer heat', 'Subway buses arrive too unpredictably for paper signs', 'Residents dislike bright sidewalk benches'], 0, 'ตอบ Trenching underground wires... (digging deep electrical trench conduits beneath sidewalks costs nearly thirty thousand dollars per stop)'],
      ['Single · Process', 'How are the digital timetables inside Lyon’s new shelters powered?', ['By built-in batteries charged through rooftop solar glass', 'By passing hybrid bus wheel generators', 'Via nearby residential basement outlets', 'Through underground city power cables'], 0, 'ตอบ By built-in batteries... (built-in lithium bench batteries charged by photovoltaic skylights)'],
      ['Single · Vocab', 'The word "prefabricated" in paragraph 2 refers to structures that are ___.', ['built beforehand in sections off site', 'painted dark gray after assembly', 'wired beneath concrete floors', 'inspected exclusively every winter'], 0, 'ตอบ built beforehand in sections off site (prefabricated = ผลิตสำเร็จรูปเป็นชิ้นส่วนจากโรงงานแล้วยกมาติดตั้งทันที)'],
    ]),

    p7(11, 'm11-s7', [
      doc('ad', 'Job Posting — Junior Quality Assurance Inspector', [['Employer', 'Harbor Glassworks Co.'], ['Shift', 'Mon–Fri · 2:00 P.M.–10:30 P.M.']],
        [
          'Join our afternoon container-glass inspection floor ensuring restaurant carafes and pharmaceutical amber vials leave annealing ovens cleanly defect free! [1] You will sample random glass bottles hourly using calibrated digital micrometers, check thermal stress polariscopes, and log exact reject batch counts smoothly inside Shift ERP.',
          'Qualifications:',
          lst([
            'Associate technical diploma OR 1+ year factory manufacturing inspection background',
            'Keen visual accuracy spotting tiny hairline rim chips under bright bench lamps',
            'Ability wearing lightweight protective Kevlar sleeves and safety glasses on shifts',
          ]),
          '[2] Evening shift includes a +$2.50 hourly shift differential atop competitive base hourly wages plus full health plans. [3] Email work summary quickly cleanly to hiring@harborglass.com referencing Afternoon QA. [4]',
        ]),
    ], [
      ['Single · Detail', 'Which additional pay perk comes with this 2:00 P.M.–10:30 P.M. shift?', ['An extra $2.50 per hour shift differential', 'Guaranteed four-day workweeks', 'Free restaurant glassware monthly quotas', 'Overtime bonuses starting at 3:00 P.M.'], 0, 'ตอบ An extra $2.50 per hour... (+$2.50 hourly shift differential atop competitive base wages)'],
      ['Single · Detail', 'What inspection task happens every hour?', ['Measuring glass bottles using calibrated micrometers', 'Polishing oven doors with Kevlar pads', 'Delivering vials straight onto pharmacy vans', 'Swapping factory safety lamp bulbs'], 0, 'ตอบ Measuring glass bottles... (sample random glass bottles hourly using calibrated digital micrometers)'],
      ['Single · Condition', 'Is a college technical diploma strictly mandatory if an applicant worked previously on factory assembly lines?', ['No, 1+ year of factory inspection experience also qualifies', 'Yes, every applicant needs a bachelor diploma', 'Evening differential only opens to graduates', 'Only polariscope engineers bypass diplomas'], 0, 'ตอบ No, 1+ year of factory inspection experience also qualifies (OR 1+ year factory manufacturing inspection background)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Prior familiarity with SPC quality control spreadsheets is strongly welcomed."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจาก Qualifications เพื่อเสริมทักษะซอฟต์แวร์คุณภาพ ก่อนเข้าสู่เรื่องค่าจ้างเพิ่มรอบบ่าย)'],
    ]),

    p7(11, 'm11-s8', [
      doc('memo', 'Library Digital Audio Lending — Portable Player Guidelines', [['Branch', 'Oakwood Public Library']],
        [
          'Adult cardholders with zero unpaid account fines above $5 may check out pre-loaded audiobook pocket players cleanly for 21 calendar days.',
          'Handling Rules:',
          lst([
            'Inspect protective silicone bumper skin and USB-C cord neatly inside zippered pouch before exiting Lobby Desk 1.',
            'Keep devices safely away from steam kitchens or poolside chairs—internal fluid corrosion voids warranty ($85 unit replacement charge).',
            'Never wipe MP3 files off internal memory; devices update cleanly at desk return only.',
            'Hand pocket players straight back across Media Counter inside—NEVER drop battery devices down outdoor metal Book Drop Chutes!',
          ]),
        ]),
    ], [
      ['Single · Cause', 'Why must borrowed audiobook players never go into outdoor metal Book Drop Chutes?', ['Impacts inside hard metal drop chutes can crack battery electronics', 'Desktop chargers unlock strictly at dawn', 'Zippered pouches jam metal slot handles', 'MP3 tracks wipe cleanly when dropped'], 0, 'ตอบ Impacts inside hard metal drop chutes... (hand players straight back across Media Counter inside — NEVER drop battery devices down outdoor metal Chutes)'],
      ['Single · Condition', 'When might a library patron be blocked from borrowing a pocket player?', ['If they owe more than $5 in unpaid library fines', 'If they own an audiobook smartphone app', 'Whenever USB-C cables sit inside zippered pouches', 'Only during summer months cleanly'], 0, 'ตอบ If they owe more than $5... (zero unpaid account fines above $5)'],
      ['Single · Detail', 'What penalty applies if spilled water ruins a borrowed device?', ['An $85 unit replacement fee', 'Five-dollar monthly interest', 'Loss of USB-C cables only', '21-day library suspension'], 0, 'ตอบ An $85 unit replacement fee ($85 unit replacement charge)'],
      ['Single · Detail', 'For how many days may a patron keep one player cleanly?', ['Twenty-one days', 'Five days', 'Thirty days', 'Fourteen days'], 0, 'ตอบ Twenty-one days (21 calendar days)'],
    ]),

    p7(11, 'm11-s9', [
      doc('article', 'Compact Cold-Brew Beer Makers Brew Coffee Without Wasteful Shipping Glass', [['By', 'Claire Novak'], ['Issue', 'Beverage Biz Weekly']],
        [
          'Supermarket cold-brewed coffee cans require continuous refrigerated warehouse trucks across every mile from distant bottling lines down to corner convenience fridges, burning hefty cold diesel fuel just hauling 98 percent plain municipal water inside heavy aluminum tins. [1] Boutique coffee roaster ClearCup is testing a much lighter B2B model across forty corporate workplace breakrooms this quarter.',
          'Rather than stacking bulky glass bottles inside cramped lobby refrigerators cleanly every Monday morning, ClearCup mails slim shelf-stable micro-filtered nitrogen concentrate pouches roughly the size of hardcover paperbacks. [2] Barista coordinators simply snap one room-temperature bag neatly onto sleek under-counter chrome taps wired straight to cold building municipal tap water lines.',
          '"Every single two-kilogram foil bag pours cleanly 160 chilled café cups on tap cleanly without heavy carton deliveries cluttering basement cargo lifts," highlights workplace operations manager Tom Lee. [3] Automated nozzle rinse jets flush coffee lines every evening cleanly for 30 seconds at 2:00 A.M. so morning drinks pour consistently crisp.',
          'Regional hotel chains recently began ordering under-counter taps for executive floor breakfast bars ahead of spring conference travel. [4]',
        ]),
    ], [
      ['Single · Purpose', 'What problem does ClearCup’s concentrate tap system primarily reduce?', ['Weight, cold trucking fuel, and fridge space lost hauling ready-to-drink water bottles', 'Rising global raw espresso bean harvest failures', 'Customer aversion to aluminum nitrogen taps', 'Overheated corporate lounge water pipes'], 0, 'ตอบ Weight, cold trucking fuel, and fridge space... (เดิมต้องขนส่งน้ำ 98% แบบแช่เย็นหนักและเปลืองพื้นที่ตู้เย็น)'],
      ['Single · Process', 'How is the concentrated coffee pouch mixed into finished chilled coffee?', ['Under-counter dispensers blend concentrate neatly with cold building tap water', 'Breakroom baristas heat concentrate in coffee pots overnight', 'Drivers pour bagged water directly inside refrigerator canisters', 'Tap water mixes cleanly inside factory cartons beforehand'], 0, 'ตอบ Under-counter dispensers blend concentrate... (snap bag onto chrome taps wired straight to cold building municipal tap water lines)'],
      ['Single · Inference', 'Why do hotel breakfast managers find these taps appealing?', ['They pour high drink volumes consistently without hauling heavy bottle cases up service lifts', 'Pouch foils double as guest coffee coasters', 'Drinks stay cold even when water valves break', 'Taps print billing hotel receipts automatically'], 0, 'ตอบ They pour high drink volumes consistently... (two-kilogram foil bag pours cleanly 160 cups without cluttering cargo lifts)'],
      ['Single · Vocab', 'The word "cluttering" in paragraph 3 is closest in meaning to ___.', ['crowding messily', 'sanitizing cleanly', 'locking securely', 'repairing smoothly'], 0, 'ตอบ crowding messily (cluttering cargo lifts = กองเกะกะในลิฟต์ขนของ)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Sealed vacuum foil locks roasted flavor aromatics cleanly for up to six months without refrigeration."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจากประโยคแนะนำซองหัวเชื้อแบบพกพาที่วางอุณหภูมิห้องได้ อธิบายว่าซองฟอยล์เก็บกลิ่นได้นานโดยไม่ต้องแช่เย็น)'],
    ]),

    p7(11, 'm11-d1', [
      doc('webpage', 'Silverline Tech Labs — IT Certification Exam Vouchers & Lab Bundles', [['Site', 'learn.silverlinelabs.io']],
        [
          tbl(
            ['Voucher Bundle', 'What Is Included', 'Individual Rate', 'Corporate 5+ Team Pack'],
            [
              ['Exam Seat Only', '1 Official Remote Exam Sitting', '$190', '$165 / person'],
              ['Study Prep Pack', 'Exam Sitting + 2 Practice Sim Tests', '$240', '$210 / person'],
              ['Bootcamp Total Kit', 'Exam Sitting + Practice Tests + 1 Free Retake Guarantee', '$310', '$270 / person'],
            ]),
          'Use code EARLY25 on Bootcamp Total Kits bought before May 10 to save an additional $25 off cleanly per seat (stacks with Corporate 5+!).',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'training@silverlinelabs.io'], ['From', 'Elena Brooks (IT Team Lead · CrestBank)'], ['Date', 'May 4'], ['Subject', 'Order Confirmation — 6 Engineering Vouchers']],
        [
          'Hi Licensing Team,',
          'Ordered cleanly six Bootcamp Total Kit vouchers just now on May 4 cleanly using our team card so six junior systems engineers get BOTH official practice simulators AND peace-of-mind free retakes ahead of August audits! Glad EARLY25 stacked smoothly right atop your 5+ Team corporate discount cleanly at checkout.',
          'Could you assign individual alphanumeric access keys directly inside my CrestBank Admin dashboard before Monday morning so engineers start practice labs over the weekend?',
          'Thanks!\nElena Brooks',
        ]),
    ], [
      ['Double · Math', 'How much total did CrestBank pay for 6 Bootcamp Total Kit vouchers AFTER BOTH 5+ Team pricing AND EARLY25 stacked?', ['$1,470', '$1,620', '$1,710', '$1,860'], 0, 'ตอบ $1,470 (Bootcamp 5+ Team = $270/คน ลบ EARLY25 ก่อน May 10 อีก $25 = $245/คน × 6 คน = $1,470)'],
      ['Double · Synthesis', 'Why did Elena Brooks qualify cleanly for the extra $25/seat EARLY25 bonus?', ['She purchased Bootcamp Total Kits on May 4 ahead of the May 10 deadline', 'Any IT Team booking over five seats gets EARLY25 automatically', 'Audit vouchers exclude Study Prep Packs', 'Remote exam sittings in August double discounts'], 0, 'ตอบ She purchased Bootcamp Total Kits on May 4... (โค้ดใช้ได้กับ Bootcamp Total Kits ก่อน 10 พ.ค. และ Elena สั่ง 4 พ.ค.)'],
      ['Double · Detail', 'Which privilege separates Bootcamp Total Kit from the Study Prep Pack?', ['One free exam retake guarantee if needed', 'Access to two practice simulation exams', 'Eligibility for Corporate 5+ bulk tiers', 'Official remote exam sittings'], 0, 'ตอบ One free exam retake guarantee (Bootcamp Total Kit adds 1 Free Retake Guarantee)'],
      ['Double · Detail', 'When does Elena want engineer keys activated?', ['Before Monday morning', 'In August ahead of audits', 'After May 10', 'Next fiscal quarter'], 0, 'ตอบ Before Monday morning (before Monday morning so engineers start practice labs over the weekend)'],
      ['Double · Inference', 'How much would 6 Study Prep Pack vouchers cost under Corporate 5+ pricing?', ['$1,260', '$1,440', '$1,110', '$1,310'], 0, 'ตอบ $1,260 ($210 × 6 = $1,260; หมายเหตุ EARLY25 ไม่ครอบคลุม Study Prep Pack)'],
    ]),

    p7(11, 'm11-d2', [
      doc('notice', 'Greenfield Botanical Arboretum — Tram & Wheelchair Rental Rules', [['Open', 'Daily 8:30 A.M.–5:30 P.M.']],
        [
          lst([
            'Guided loop open-air trams loop 4 km around Pine Ridge every 30 minutes starting at 9:30 A.M. ($8 Adult / Free with Annual Member Card).',
            'Manual folding wheelchairs loan completely FREE inside Visitor Desk 1 cleanly upon leaving a valid photo ID.',
            'Motorized electric mobility scooters rent $22 for half-day (3 hrs) cleanly—cannot board loop trams due to weight ramps (smoothly roll across wide paved Valley Paths instead!).',
          ]),
        ]),
      doc('email', 'E-mail Message',
        [['To', 'visitor@greenfieldarboretum.org'], ['From', 'Arthur Sato'], ['Date', 'April 27'], ['Subject', 'Sunday Visit Access Question']],
        [
          'Hello Visitor Desk,',
          'Bringing my parents (both age 74!) out neatly this Sunday morning April 28 around 9:15 A.M. excitedly checking spring magnolias! I hold an active Annual Member Card myself, though neither parent currently holds membership cards yet.',
          'Since Dad tires rapidly walking hills, we want reserving ONE motorized electric mobility scooter for him while Mom and I ride nicely aboard the 9:30 A.M. guided Pine Ridge tram cleanly—WAIT: could Dad roll his electric scooter straight onto that 9:30 tram so we all tour Pine Ridge loops together, OR should Mom and I rent a FREE manual folding wheelchair instead so he climbs up cleanly alongside us on the tram?',
          'Best,\nArthur Sato',
        ]),
    ], [
      ['Double · Synthesis', 'Based on Arboretum policies, which arrangement lets ALL THREE family members ride the 9:30 A.M. Pine Ridge tram together?', ['Borrowing a free folding wheelchair cleanly instead of renting a heavy motorized scooter', 'Rolling a rented $22 motorized scooter straight up tram ramps', 'Buying three Annual Member Cards at Gate 2', 'Waiting until afternoon Valley Path buses launch'], 0, 'ตอบ Borrowing a free folding wheelchair cleanly... (นโยบายระบุชัดเจน Electric scooters CANNOT board loop trams; ส่วนรถเข็นพับได้ฟรี/พับขึ้นรถได้และพาไปด้วยกันบนรถรางได้)'],
      ['Double · Math', 'How much total will ALL THREE tram rides cost on Sunday morning given Arthur holds an Annual Member Card?', ['$16', '$24', '$8', '$38'], 0, 'ตอบ $16 (Arthur ฟรีเพราะถือบัตรรายปี ส่วนคุณพ่อกับคุณแม่ 2 คน × $8 = $16)'],
      ['Double · Synthesis', 'Why can Arthur’s dad NOT take a rented motorized scooter onto the Pine Ridge loop tram?', ['Weight ramp limits prohibit motorized scooters aboard trams', 'Scooters operate strictly indoors inside glasshouses', 'Only Annual Members rent motorized scooters', 'Valley Paths ban motorized tires Sundays'], 0, 'ตอบ Weight ramp limits prohibit motorized scooters... (cannot board loop trams due to weight ramps)'],
      ['Double · Detail', 'What does Visitor Desk 1 require to loan a manual folding wheelchair at zero cost?', ['Holding a valid photo identification card temporarily', 'Buying three tram passes ahead', 'Paying an $8 refundable scooter deposit', 'Reserving three weeks early'], 0, 'ตอบ Holding a valid photo identification card... (upon leaving a valid photo ID)'],
      ['Double · Detail', 'At what time does Arthur’s family plan reaching the arboretum Sunday morning?', ['Around 9:15 A.M.', 'At 8:30 A.M.', 'At 9:30 A.M.', 'Around 12:30 P.M.'], 0, 'ตอบ Around 9:15 A.M.'],
    ]),

    p7(11, 'm11-t1', [
      doc('ad', 'ProBake Commercial Mixers — Bakery Outlet Sale', [['Showroom', '400 Mill Road']],
        [
          tbl(
            ['Model', 'Bowl Volume', 'Included Attachments', 'Sale Price', 'Shipping Option'],
            [
              ['BakerLite 7Qt', '7 Liters', 'Dough Hook, Wire Whisk, Flat Beater', '$420', '$25 Courier Ground'],
              ['ArtisanMix 12Qt', '12 Liters', 'Spiral Hook, Heavy Whisk, Paddle, Guard', '$780', '$45 Liftgate Freight'],
              ['BakeryKing 20Qt', '20 Liters', 'Full Commercial Steel Trio + Bowl Guard', '$1,390', 'Free Freight ($0)'],
            ]),
          'Spare extra 12Qt Stainless Mixing Bowl: $95 ($75 if bought same receipt alongside ArtisanMix 12Qt!).',
        ]),
      doc('chat', 'Bakery Owners Chat', [['Thread', '#pastry-upgrade'], ['Date', 'July 14']],
        [
          chat([
            ['Maya Morales', '11:20 A.M.', 'Outgrew our tiny 5-liter counter mixers fast! Let us order ONE ArtisanMix 12Qt cleanly today plus ONE spare 12Qt mixing bowl so we keep cinnamon dough rising cleanly inside Bowl 2 while whipping frosting inside Bowl 1!'],
            ['Kevin Lee', '11:24 A.M.', 'Wait—20Qt costs $1,390, totally overkill under our low counter height! Adding one spare 12Qt bowl alongside ArtisanMix 12Qt cleanly gets that bundled $75 bowl price cleanly right?'],
          ]),
        ]),
      doc('invoice', 'ProBake Invoice #PB-2241',
        [['Buyer', 'Sunrise Sourdough Cafe'], ['Date', 'July 14']],
        [
          'Line 1: 1 × ArtisanMix 12Qt Commercial Mixer ($780).',
          'Line 2: 1 × Spare 12Qt Stainless Bowl ($75 Bundle Rate).',
          'Delivery: Liftgate Commercial Freight ($45). Total Billed: $900.00 · Est. Freight Arrival: July 22.',
        ]),
    ], [
      ['Triple · Math', 'How much total did Sunrise Sourdough SAVE by bundling the spare bowl rather than ordering it separately later?', ['$20', '$45', '$75', '$95'], 0, 'ตอบ $20 (ราคาชามแยก $95 ลดเหลือ $75 เมื่อสั่งพร้อมเครื่อง -> ประหยัด $20)'],
      ['Triple · Inference', 'Why did Kevin Lee reject upgrading to BakeryKing 20Qt despite its Free Freight ($0) shipping?', ['It costs significantly more AND sits too tall under their cafe counter height', 'It lacks spiral dough hooks', 'BakeryKing does not permit spare stainless bowls', 'Mill Road stopped freight trucks cleanly'], 0, 'ตอบ It costs significantly more AND sits too tall... (Kevin ระบุ $1,390 overkill under our low counter height)'],
      ['Triple · Detail', 'How much was charged for commercial delivery on Invoice #PB-2241?', ['$45', '$0', '$25', '$75'], 0, 'ตอบ $45 (Liftgate Commercial Freight $45 บน ArtisanMix 12Qt)'],
      ['Triple · Detail', 'Why does Maya Morales want two 12Qt stainless bowls?', ['To keep dough proofing in one while mixing icing in the second', 'One bowl holds 20 liters total capacity', 'Commercial guards cover only single bowls', 'One bowl ships late July 22'], 0, 'ตอบ To keep dough proofing in one... (keep cinnamon dough rising cleanly inside Bowl 2 while whipping frosting inside Bowl 1)'],
      ['Triple · Detail', 'When is Invoice #PB-2241 estimated to arrive?', ['July 22', 'July 14', 'July 20', 'August 1'], 0, 'ตอบ July 22 (Est. Freight Arrival: July 22)'],
    ]),

    p7(11, 'm11-t2', [
      doc('article', 'Midtown Tech Career Fair Moves Indoors to Harbor Convention Atrium', [['Date', 'Thursday, Sept 19']],
        [
          'Over forty software startups, aerospace robotics labs, and clean-energy engineering firms meet job seekers cleanly inside Harbor Convention Atrium Thursday Sept 19 from 10:00 A.M. to 4:00 P.M. Pre-registered visitors scan QR passes straight past lobby queues.',
        ]),
      doc('table', 'Employer Booth Directory — Robotics & Hardware Row (Floor 1)', null, [
        tbl(
          ['Booth #', 'Company Name', 'Open Internships / Roles', 'Portfolio / Resume Note'],
          [
            ['B-12', 'VeloDrone Corp.', 'Embedded C++ Firmware Engineer', 'Paper Resume + GitHub Link'],
            ['B-18', 'AeroGrip Robotics', 'Mechanical CAD Actuator Intern', 'Laptop Live SolidWorks Demo'],
            ['B-24', 'SunGrid Hardware', 'Battery PCB Layout Associate', 'Paper Resume Only'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'hello@aerogrip.io'], ['From', 'Maya Chen (Mechanical Senior)'], ['Date', 'September 20'], ['Subject', 'Thank You + SolidWorks Gripper File Link (Fair Booth B-18)']],
        [
          'Dear Hiring Team at AeroGrip,',
          'Thank you so much for chatting thoughtfully for fifteen minutes beside Booth B-18 yesterday afternoon cleanly! Showing off my live four-finger compliant cable-actuator CAD assembly smoothly off my laptop felt vastly clearer than squinting over black-and-white printed sheets!',
          'As promised to Lead Engineer Sam Patel at closing time cleanly, linked below is our downloadable STEP CAD archive ahead of Monday’s follow-up phone interviews.',
          'Warmly,\nMaya Chen',
        ]),
    ], [
      ['Triple · Synthesis', 'Where was Booth B-18 located inside Harbor Convention Atrium?', ['Along Robotics & Hardware Row on Floor 1', 'Inside Floor 2 Software Lounge', 'At B-12 next to VeloDrone', 'Outside outdoor courtyard'], 0, 'ตอบ Along Robotics & Hardware Row on Floor 1 (ตารางระบุหัวข้อ Directory — Floor 1)'],
      ['Triple · Synthesis', 'Why did Maya Chen demonstrate her gripper assembly directly on her laptop at Booth B-18?', ['AeroGrip’s booth directory specifically asked for a live SolidWorks laptop demo', 'Atrium Wi-Fi blocked QR pass logins', 'Paper printers broke cleanly before noon', 'Lead Engineer Sam Patel banned paper resumes'], 0, 'ตอบ AeroGrip’s booth directory specifically asked... (ตารางช่อง Portfolio Note ของ AeroGrip B-18 ระบุ Laptop Live SolidWorks Demo)'],
      ['Triple · Detail', 'Which company listed NO requirement for bringing a laptop or online portfolio link?', ['SunGrid Hardware (Booth B-24)', 'VeloDrone Corp. (Booth B-12)', 'AeroGrip Robotics (Booth B-18)', 'All three asked for laptops'], 0, 'ตอบ SunGrid Hardware (Paper Resume Only)'],
      ['Triple · Detail', 'When did Maya’s booth conversation take place?', ['Thursday, September 19', 'Wednesday, September 18', 'Friday, September 20', 'Monday morning'], 0, 'ตอบ Thursday, September 19 (อีเมลวันที่ 20 ก.ย. บอก yesterday afternoon = 19 ก.ย. ตรงวันงาน Fair)'],
      ['Triple · Detail', 'What next interview step does Maya expect Monday?', ['Follow-up phone interviews', 'On-site CAD printing tests', 'Visiting SunGrid battery labs', 'Second expo booth demos'], 0, 'ตอบ Follow-up phone interviews (ahead of Monday’s follow-up phone interviews)'],
    ]),

    p7(11, 'm11-t3', [
      doc('notice', 'Oakridge Municipal Theater — Member Priority Ticket Window Rules', [['Contact', 'tickets@oakridgetheater.org']],
        [
          lst([
            'Gold Season Patrons claim unlimited pre-sale balcony OR orchestra seats cleanly 48 hours BEFORE public box office drops ($0 convenience fee).',
            'Silver Friends unlock 24 hours BEFORE public sale ($4 per-ticket booking charge applies unless buying 4+ tickets cleanly in one cart).',
            'Complimentary coat check passes load neatly automatically onto BOTH Gold and Silver QR badges.',
          ]),
        ]),
      doc('invoice', 'Oakridge Pre-Sale Receipt #OT-3309',
        [['Member', 'Kevin Alvarez (Silver Friend Tier)'], ['Booked', 'Tuesday, October 8 · 10:15 A.M.']],
        [
          'Show: Autumn Jazz Gala (Public Sale Opens Wednesday, October 9 · 10:00 A.M.).',
          'Seats: 3 × Orchestra Row F ($65 each = $195) + Pre-Sale Booking Fee ($12). Total Paid: $207.00.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'tickets@oakridgetheater.org'], ['From', 'Kevin Alvarez'], ['Date', 'October 8 · 11:00 A.M.'], ['Subject', 'Quick Question — Adding 1 Seat onto Receipt #OT-3309']],
        [
          'Hi Box Office Crew,',
          'Thrilled I logged in right when Silver pre-sale unlocked this morning cleanly grabbing 3 Orchestra Row F seats! Moments ago, a fourth college friend confirmed coming cleanly along—luckily adjacent seat F14 still sits open right beside our trio!',
          'Wait—if I pick up that single extra seat F14 cleanly separately right now, will I pay another $4 booking fee cleanly, OR can support merge all 4 seats onto one consolidated 4-ticket receipt cleanly so our $16 total booking fee gets refunded neatly?',
          'Best,\nKevin Alvarez',
        ]),
    ], [
      ['Triple · Synthesis', 'Why did Kevin pay $12 ($4 × 3 seats) booking fees on Receipt #OT-3309?', ['Silver Friends owe $4 per ticket unless buying 4+ tickets in one single order', 'Orchestra Row F seats carry extra $4 pre-sale surcharges', 'He bought tickets cleanly after Tuesday 10:00 A.M.', 'Gold members charge $12 minimum per cart'], 0, 'ตอบ Silver Friends owe $4 per ticket unless buying 4+... (ซื้อเพียง 3 ใบจึงยังไม่ถึงเกณฑ์ 4 ใบขึ้นไปที่ยกเว้นค่าจอง $4/ใบ)'],
      ['Triple · Synthesis', 'Why was Kevin able to book seats on Tuesday, October 8 at 10:15 A.M.?', ['Silver Friends open 24 hours ahead of Wednesday October 9 at 10:00 A.M.', 'Silver members receive 48 hours pre-sale head starts', 'Wednesday concerts sell strictly to college groups', 'Orchestra Row F never opens publicly'], 0, 'ตอบ Silver Friends open 24 hours ahead... (Public Sale เปิดพุธ Oct 9 10:00 -> Silver เปิดก่อน 24 ชม. คืออังคาร Oct 8 10:00)'],
      ['Triple · Detail', 'Which perk does Kevin ALREADY receive automatically on his Silver QR badge?', ['Free theater coat check service', 'Zero per-ticket fees on 1-seat orders', '48-hour early access windows', 'Complimentary jazz drink tokens'], 0, 'ตอบ Free theater coat check service (Complimentary coat check passes load onto BOTH Gold and Silver badges)'],
      ['Triple · Math', 'Verify the unit ticket cost + booking fee BEFORE tax for Seat F14 if added as an unmerged 1-seat Silver purchase:', ['$69 ($65 seat + $4 booking fee)', '$65 exact', '$77 ($65 + $12)', '$207'], 0, 'ตอบ $69 ($65 ค่าตั๋ว + $4 ค่าธรรมเนียมแยกซื้อ 1 ใบ)'],
      ['Triple · Inference', 'What must happen for Kevin to qualify cleanly for Silver’s $0 booking-fee waiver?', ['Tickets need to combine onto a single 4+ seat consolidated transaction', 'Upgrading Row F into Rear Balcony', 'Switching seats to Thursday matinees', 'Borrowing a coat check voucher'], 0, 'ตอบ Tickets need to combine onto a single 4+ seat... (buying 4+ tickets cleanly in one cart)'],
    ]),

    // ══════════════════ SET 12 (Q147–Q200: 54 Qs) ══════════════════
    p7(12, 'm12-s1', [
      doc('email', 'E-mail Message',
        [['To', 'Floor 3 Engineering Teams'], ['From', 'IT Support Desk'], ['Date', 'September 2'], ['Subject', 'Docking Monitor Cable Swaps']],
        [
          'Technicians placed coiled braided USB-C 2.0m dock cords beside every Floor 3 kitchen printer counter this afternoon. Please trade in older flickering white adapter dongles neatly into the red electronics return tub before Friday evening.',
          'All upgraded single-plug cables supply both crisp dual-4K monitor video plus 90-watt laptop charging safely.',
        ]),
    ], [
      ['Single · Detail', 'Where can engineers pick up the new braided USB-C cables?', ['Next to the Floor 3 kitchen printer counter', 'Inside the red electronics return tub', 'At Lobby Security Desk 1', 'In Basement IT Storeroom B'], 0, 'ตอบ Next to the Floor 3 kitchen printer counter (beside every Floor 3 kitchen printer counter)'],
      ['Single · Detail', 'What benefit do the upgraded dock cables offer?', ['They deliver both 4K video and laptop charging over one cable', 'They turn old white dongles wireless', 'They cut printer paper jams cleanly', 'They boost building Wi-Fi speed'], 0, 'ตอบ They deliver both 4K video... (supply both crisp dual-4K video plus 90-watt laptop charging)'],
    ]),

    p7(12, 'm12-s2', [
      doc('notice', 'Greenway Trail — East Boardwalk Varnishing', [['Dates', 'May 14–15']],
        [
          'Forestry maintenance volunteers are brushing water-based cedar sealant smoothly across East Marsh Boardwalk planking Tuesday and Wednesday (May 14–15).',
          'Because wet amber boards require 24 full hours to dry cleanly without tracking footprint marks, runners and strollers should take the firm paved Maple Loop Path just east of North Duck Pond until Thursday morning.',
        ]),
    ], [
      ['Single · Cause', 'Why will East Marsh Boardwalk close May 14–15?', ['Volunteers are applying fresh wood sealant that needs drying time', 'Cedar boards collapsed cleanly into North Duck Pond', 'Maple Loop Path ran out of asphalt gravel', 'Strollers damaged boardwalk handrails'], 0, 'ตอบ Volunteers are applying fresh wood sealant... (brushing water-based cedar sealant ... require 24 hours to dry)'],
      ['Single · Detail', 'When can joggers safely step back onto East Marsh Boardwalk?', ['Thursday morning, May 16', 'Wednesday afternoon cleanly', 'Tuesday at 5:00 P.M.', 'Next Monday'], 0, 'ตอบ Thursday morning, May 16 (Detour until Thursday morning)'],
    ]),

    p7(12, 'm12-s3', [
      doc('chat', 'Bakery Wholesale Dispatch Chat', [['Channel', '#morning-vans'], ['Date', 'October 9']],
        [
          chat([
            ['Marco Silva', '5:12 A.M.', 'Heads up! Loading Van 2 just spotted only twelve trays of sourdough country loaves on Cooling Rack A instead of fifteen trays promised to Harbor Cafe Hotel cleanly at 6:30 A.M.!'],
            ['Chef Priya', '5:15 A.M.', 'Check Proofer Rack 3 beside Oven 2—the final batch went inside Deck 1 late and just rolled out steaming fresh!'],
            ['Marco Silva', '5:18 A.M.', 'Found them steaming on Proofer Rack 3 right now—WAIT: they stay super warm, should I crack crate lids open ten minutes en route so crusts stay crunchy?'],
            ['Chef Priya', '5:20 A.M.', 'Yes! Leave breathable wooden slats slightly vented until hotel chef signs cleanly—trapped steam turns artisan crusts rubbery cleanly fast.'],
          ]),
        ]),
    ], [
      ['Single · Problem', 'Why did Marco initially count three fewer bread trays than expected?', ['The final three sourdough trays just came out of the oven separately onto Proofer Rack 3', 'Harbor Cafe Hotel cut Wednesday orders to twelve trays', 'Van 2 left three trays behind at Reception', 'Morning bakers skipped baking Deck 1'], 0, 'ตอบ The final three sourdough trays... (rolled out onto Proofer Rack 3 later)'],
      ['Single · Detail', 'Why does Chef Priya instruct Marco to leave crate vents slightly open?', ['So escaping bread steam prevents crusts from turning soft and chewy', 'Waiters inside Harbor Cafe open grates early', 'Overheating melts Van 2 plastic dashboards', 'Oven 2 dryers run inside Delivery Van 2'], 0, 'ตอบ So escaping bread steam prevents crusts from turning soft... (trapped steam turns artisan crusts rubbery fast)'],
      ['Single · Timing', 'When is Harbor Cafe Hotel expecting the sourdough bread delivery?', ['At 6:30 A.M.', 'At 5:12 A.M.', 'At noon', 'Within ten minutes'], 0, 'ตอบ At 6:30 A.M. (promised to Harbor Cafe Hotel cleanly at 6:30 A.M.)'],
    ]),

    p7(12, 'm12-s4', [
      doc('table', 'Metro Music Conservatory — Practice Room Rental Matrix', [['Hours', 'Mon–Sun · 8:00 A.M.–10:00 P.M.']],
        [
          tbl(
            ['Room Type', 'Equipment', 'Community Rate / Hr', 'Enrolled Student Rate / Hr'],
            [
              ['Solo Vocal Studio', 'Music Stand, Mirror, Digital Metronome', '$16', '$9'],
              ['Upright Piano Suite', 'Yamaha U1 Upright + Recording Mic', '$24', '$14'],
              ['Grand Chamber Hall', 'Steinway Grand + 6 Music Stands', '$52', '$32'],
            ]),
          'Book 10-Hour Bulk Punch Cards cleanly at Desk 1 to shave $2 off EVERY hourly slot across all tiers!',
        ]),
    ], [
      ['Single · Math', 'How much would an outside community cellist pay to practice 2 hours inside an Upright Piano Suite WITHOUT a punch card?', ['$48', '$28', '$44', '$32'], 0, 'ตอบ $48 (Upright Piano Suite เรทคนนอก Community = $24/ชม. × 2 ชม. = $48)'],
      ['Single · Math', 'What would an enrolled student spend per hour inside the Grand Chamber Hall using a 10-Hour Bulk Punch Card?', ['$30 / hr', '$32 / hr', '$50 / hr', '$12 / hr'], 0, 'ตอบ $30 / hr (เรท Student $32 ลบส่วนลดบัตร 10 ชม. $2/ชม. = $30/ชม.)'],
      ['Single · Detail', 'Which practice space provides a built-in recording microphone?', ['Upright Piano Suite', 'Solo Vocal Studio', 'Grand Chamber Hall', 'Lobby Reception'], 0, 'ตอบ Upright Piano Suite (Yamaha U1 Upright + Recording Mic)'],
    ]),

    p7(12, 'm12-s5', [
      doc('review', 'Online Product Feedback — AeroFold Camping Table Pro', [['Buyer', 'Hannah Kim · Verified Owner']],
        [
          'Review: "Sets up solidly cleanly in fifteen seconds using click-lock aluminum X-bars! Easily held our heavy two-burner camp stove plus cast-iron skillets steadily on uneven pine forest gravel thanks to screw-adjust leveler legs. My ONLY tiny wishlist note: embroidered seam labels on the canvas carry sack tore off after our third river trip cleanly—reinforced handles would make this bag immortal!"',
          'Brand Note from AeroFold Care: "Love hearing screw-levelers tackled forest gravel smoothly, Hannah! We switched canvas bags onto triple bar-tacked nylon webbing starting last month—DM your shipping code cleanly and we will mail an upgraded carry sack completely free!"',
        ]),
    ], [
      ['Single · Praise', 'Why did the AeroFold table sit steadily on rough forest gravel?', ['Individual screw-adjust legs compensate cleanly on uneven ground', 'Cast-iron skillets weighed legs tightly into mud', 'Triple bar-tacked nylon handles lock feet flat', 'Aluminum X-bars fold flat on carpets'], 0, 'ตอบ Individual screw-adjust legs... (thanks to screw-adjust leveler legs on uneven pine gravel)'],
      ['Single · Critique', 'What minor component tore during Hannah’s third camping trip?', ['Seam stitching on the canvas carry bag', 'Click-lock aluminum X-frame joints', 'Two-burner camp stove brackets', 'Screw-adjust plastic leveler tips'], 0, 'ตอบ Seam stitching on the canvas carry bag (seam labels on canvas carry sack tore off)'],
      ['Single · Action', 'What solution does AeroFold offer Hannah in response?', ['Mailing an improved nylon carry sack at zero charge', 'Refunding her table purchase cleanly', 'Sending cast-iron skillet pads', 'Replacing aluminum X-bars with steel'], 0, 'ตอบ Mailing an improved nylon carry sack at zero charge (mail an upgraded carry sack completely free!)'],
    ]),

    p7(12, 'm12-s6', [
      doc('article', 'Small Downtown Cinemas Fill Quiet Weekday Afternoons With Remote Study Sessions', [['Publication', 'Metro Culture Business']],
        [
          'Historic neighborhood movie houses routinely sit nearly empty from 9:00 A.M. until 4:00 P.M. Monday through Thursday while utility AC bills still run quietly across plush tiered auditoriums.',
          'Savvy independent operators at Astor Cinema Theater began renting daytime balcony lounges and calm auditorium lobby booths to laptop remote workers for $12 daily—throwing in unlimited brewed coffee plus discounted afternoon popcorn bowls cleanly until 4:30 P.M. matinee trailers cue up. Weekday non-screening revenue climbed nearly $4,800 monthly cleanly without hiring a single extra usher.',
        ]),
    ], [
      ['Single · Cause', 'Why did Astor Cinema decide to open auditorium lobbies for weekday desk workers?', ['Theater rooms sat quiet and unused between 9:00 A.M. and 4:00 P.M. while expenses ran', 'Evening blockbuster attendance collapsed cleanly last summer', 'Cafes nearby stopped serving brewed filter coffee', 'Ushers petitioned for extra weekday shifts'], 0, 'ตอบ Theater rooms sat quiet and unused... (sit nearly empty from 9:00 A.M. until 4:00 P.M. while utility bills still run)'],
      ['Single · Timing', 'When must remote workers wrap up desk sessions cleanly?', ['By 4:30 P.M. ahead of afternoon movie screenings', 'Promptly at 1:00 P.M. daily', 'Friday through Sunday mornings', 'Whenever popcorn bowls empty'], 0, 'ตอบ By 4:30 P.M. ahead of afternoon movie screenings (until 4:30 P.M. matinee trailers cue up)'],
      ['Single · Detail', 'What labor advantage did Astor Cinema highlight regarding the program?', ['Zero additional staff ushers were needed to manage daytime guests', 'Ushers baked artisan popcorn treats mornings', 'Cafeteria staff cleaned tiered balcony seating', 'Ticket kiosks lowered daily wages'], 0, 'ตอบ Zero additional staff ushers were needed... (without hiring a single extra usher)'],
    ]),

    p7(12, 'm12-s7', [
      doc('ad', 'Careers — Lab Instrument Calibration Specialist (ClearBio Metrology)', [['City', 'San Diego · Field Travel 40%']],
        [
          'Ensure life-science hospital labs read exact pipette drops and centrifuge speeds smoothly! [1] Based out of our coastal San Diego workshop, you will travel cleanly locally across partner clinics verifying temperature probes, adjusting analytical gram scales, and issuing digital ISO-17025 compliance tags.',
          'Requirements:',
          lst([
            'Two years biomedical electronics calibration or clinical instrumentation maintenance',
            'Valid clean California driver license (company hybrid tool van supplied cleanly!)',
            'Methodical note-taking habits recording pre/post microgram tolerance graphs neatly',
          ]),
          '[2] Benefits span paid field mileage/lunch stipends, $70,000–$78,000 salary, and 4 weeks annual vacation. [3] Apply quickly emailing CV to talent@clearbio.org noting SD Metrology Role. [4]',
        ]),
    ], [
      ['Single · Detail', 'How does the Calibration Specialist travel to local partner hospital clinics?', ['Using a company-supplied hybrid van', 'By regional coastal commuter train', 'Using personal vehicles paid via bus vouchers', 'Strictly via downtown electric scooters'], 0, 'ตอบ Using a company-supplied hybrid van (company hybrid tool van supplied cleanly!)'],
      ['Single · Detail', 'What compliance certification documents does the specialist issue after checks?', ['Digital ISO-17025 compliance records', 'Hospital patient medicine vouchers', 'California driver audit tags', 'Biomedical factory tax receipts'], 0, 'ตอบ Digital ISO-17025 compliance records (issuing digital ISO-17025 compliance tags)'],
      ['Single · Detail', 'How much annual paid vacation is offered?', ['Four weeks', 'Two weeks', 'Forty percent', 'Three months'], 0, 'ตอบ Four weeks (4 weeks annual vacation)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Experience calibrating Sartorius or Mettler balances is highly prized."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจาก Requirements ทันที เพื่อเน้นประสบการณ์กับเครื่องชั่งยี่ห้อเฉพาะ ก่อนพูดถึงเงินเดือน/สวัสดิการ)'],
    ]),

    p7(12, 'm12-s8', [
      doc('memo', 'Harbor Cargo Depot — Overnight Battery Charging Safety', [['To', 'Night Logistics Leads'], ['From', 'Fire Compliance Officer']],
        [
          'Expanding our electric pallet jack fleet from ten units up to twenty-eight requires tighter overnight fire prevention cleanly inside West Charging Bay 1.',
          'Rules Effective Immediately:',
          lst([
            'Plug chargers strictly into bright orange 240V dedicated wall outlets along north cinderblock piers—NEVER string orange extension cords across walkway paint.',
            'Clear wooden pallets and empty stretch-wrap rolls at least TWO METERS back cleanly away from every battery vent bay.',
            'Inspect heavy black rubber plug boots before docking; report cracked prongs directly onto Tag Sheet 4 cleanly rather than forcing damaged plugs.',
          ]),
        ]),
    ], [
      ['Single · Cause', 'Why did Fire Compliance tighten overnight charging guidelines?', ['The facility nearly tripled its electric pallet jack fleet cleanly', 'Wood pallets caught fire inside East Dock last week', 'Extension cords ran cleanly out of wall outlets', 'Night drivers left stretch-wrap around tires'], 0, 'ตอบ The facility nearly tripled its electric pallet jack fleet... (Expanding fleet from ten units up to twenty-eight requires tighter prevention)'],
      ['Single · Detail', 'How far back must wooden pallets sit from battery charging bays?', ['At least two meters away', 'Four feet away', 'Beside north cinderblock corridors', 'Right next to Tag Sheet 4'], 0, 'ตอบ At least two meters away (at least TWO METERS back cleanly away)'],
      ['Single · Action', 'What should an operator do upon noticing cracked rubber insulation on a charger plug?', ['Log it on Tag Sheet 4 and do not plug it in cleanly', 'Wrap green stretch film smoothly around prongs', 'Plug into adjacent white 110V outlets instead', 'Charge strictly during daytime morning breaks'], 0, 'ตอบ Log it on Tag Sheet 4... (report cracked prongs directly onto Tag Sheet 4 cleanly rather than forcing damaged plugs)'],
      ['Single · Detail', 'Which color wall sockets are dedicated exclusively to pallet jack chargers?', ['Bright orange', 'Matte yellow', 'Dark gray', 'Blue cinderblock'], 0, 'ตอบ Bright orange (bright orange 240V dedicated wall outlets)'],
    ]),

    p7(12, 'm12-s9', [
      doc('article', 'Smart Soil Moisture Sensors Slash Golf & Park Turf Irrigation Waste', [['By', 'Samir Patel'], ['Publication', 'Municipal Water Management']],
        [
          'Municipal park watering crews traditionally rely heavily on rigid wall-timer schedules programmed manually every April—routinely blasting overhead sprinklers straight through cool misty dawn showers simply because nobody drove thirty miles out across town turning manual valve dials down cleanly in advance. [1] Up to 45 percent of city park irrigation evaporates noisily across paved parking asphalt or runs wastefully down wet clay slopes unabsorbed.',
          'Water management startup AquaRoot is rescuing strained summer city reservoirs neatly across eighteen suburban athletic complexes by burying palm-sized ceramic moisture needles ten centimeters cleanly beneath green turf roots. [2] Long-range low-power radio chips ping root hydration levels cleanly every fifteen minutes up onto park office tablet dashboards.',
          '"Rather than watering soccer lawns blindly Tuesday and Friday regardless of Tuesday morning rainstorms, valves crack open ONLY whenever root-zone soil dips under 22 percent moisture cleanly," notes Grounds Supervisor Elena Diaz. [3] Cutting unnecessary soaked lawn cycles dropped municipal park utility bills 38 percent over the inaugural summer while actually reducing shallow turf root fungus.',
          'Regional airport landscaping authorities recently signed multi-year pilot agreements deploying 200 buried ceramic probes cleanly across highway median strips next spring. [4]',
        ]),
    ], [
      ['Single · Problem', 'Why did traditional timer sprinklers waste nearly 45 percent of city park irrigation water?', ['Rigid preset timers sprayed automatically even during cool rainy mornings', 'Manual dials broke down cleanly across thirty-mile highways', 'Clay slopes blocked water pumps from turning on cleanly', 'Park crews watered asphalt lots intentionally'], 0, 'ตอบ Rigid preset timers sprayed automatically... (rely heavily on rigid wall-timer schedules — blasting sprinklers straight through misty dawn showers)'],
      ['Single · Process', 'How deeply are AquaRoot ceramic moisture sensors buried under turf?', ['Ten centimeters below the surface', 'Twenty-two centimeters down', 'Forty-five centimeters deep', 'Directly above green grass blades'], 0, 'ตอบ Ten centimeters below the surface (burying palm-sized ceramic needles ten centimeters beneath green turf roots)'],
      ['Single · Bonus Outcome', 'Besides cutting water utility bills by 38 percent, what turf health bonus appeared?', ['Root fungus infections decreased thanks to skipping over-watering', 'Soccer fields grew twice as thick in April', 'Highway medians required zero mowing', 'Paved parking lots dried faster'], 0, 'ตอบ Root fungus infections decreased... (actually reducing shallow turf root fungus)'],
      ['Single · Vocab', 'The word "strained" in paragraph 2 is closest in meaning to ___.', ['heavily stretched in supply', 'carefully filtered clean', 'brightly painted blue', 'completely empty'], 0, 'ตอบ heavily stretched in supply (strained summer city reservoirs = อ่างเก็บน้ำในเมืองที่ตึงตัวขาดแคลนช่วงหน้าร้อน)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Each AA lithium sensor capsule runs continuously cleanly underground for up to five years untouched."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (รายละเอียดการทำงานและความทนทานของเซ็นเซอร์วิทยุใต้ดินต่อเนื่องจากวิธีฝังเซ็นเซอร์ที่ความลึก 10 ซม.)'],
    ]),

    p7(12, 'm12-d1', [
      doc('ad', 'PineCone Timber Designs — Custom Conference Tables', [['Workshop', 'Seattle · Direct Factory Delivery']],
        [
          tbl(
            ['Table Length', 'Recommended Seats', 'Solid Maple', 'Smoked White Oak', 'Flush Pop-Up Power Box'],
            [
              ['240 cm', '8 seats', '$1,850', '$2,150', '+$220 (1 box)'],
              ['300 cm', '10 seats', '$2,300', '$2,700', '+$400 (2 boxes)'],
              ['360 cm', '12 seats', '$2,800', '$3,250', '+$400 (2 boxes)'],
            ]),
          'Delivery + Two-Tech Room Assembly inside Puget Sound: $180 flat fee (Waived $0 on orders totaling $3,000+!).',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'orders@pineconetimber.com'], ['From', 'Claire Chen (ClearView Architecture · Seattle)'], ['Date', 'November 4'], ['Subject', 'Order Quote Check — New Floor 4 Boardroom']],
        [
          'Hi PineCone Workshop,',
          'Settling smoothly into our newly leased Seattle boardroom! Our twelve senior architects sit together daily for morning schematic critiques so we definitely require the full 360 cm table cleanly—picking Solid Maple finish cleanly to brighten warm cedar walls rather than darker Smoked Oak.',
          'Also include the dual flush pop-up power boxes (+$400) neatly centered down table planks so staff laptops plug cleanly without floor trip cords! Just double-checking whether our $3,200 subtotal cleanly clears the $3,000 free assembly and Seattle delivery waiver?',
          'Warmly,\nClaire Chen',
        ]),
    ], [
      ['Double · Synthesis', 'Will ClearView Architecture owe the $180 delivery and assembly charge?', ['No, because their $3,200 Solid Maple + Dual Power order tops the $3,000 threshold', 'Yes, because assembly waives strictly on Smoked White Oak models', 'Yes, because power boxes do not count toward the $3,000 minimum', 'Only if Seattle workshops delay delivery until December'], 0, 'ตอบ No, because their $3,200 Solid Maple + Dual Power order tops $3,000 (โต๊ะ $2,800 + กล่องไฟ $400 = $3,200 >= $3,000 ได้สิทธิ์ส่งและประกอบฟรีใน Seattle)'],
      ['Double · Detail', 'Why did Claire choose Solid Maple instead of Smoked White Oak?', ['Its lighter tone complements warm cedar room walls nicely', 'Solid Maple supports twelve seats while Oak holds eight', 'Smoked White Oak costs less than $2,800', 'Only Solid Maple installs pop-up power boxes'], 0, 'ตอบ Its lighter tone complements warm cedar walls... (Solid Maple cleanly to brighten warm cedar walls rather than darker Smoked Oak)'],
      ['Double · Math', 'Verify total final billed amount for Claire’s configured table AFTER Seattle delivery/assembly waivers:', ['$3,200', '$3,380', '$2,980', '$3,650'], 0, 'ตอบ $3,200 ($2,800 ค่าโต๊ะ + $400 ค่ากล่องไฟ + $0 ส่งประกอบ = $3,200)'],
      ['Double · Detail', 'How many pop-up power boxes are included cleanly inside the +$400 upgrade on 360 cm tables?', ['Two power boxes', 'One power box', 'Four power boxes', 'Twelve USB ports'], 0, 'ตอบ Two power boxes (ตารางแถว 360 cm -> +$400 2 boxes)'],
      ['Double · Detail', 'How does PineCone perform on-site installation?', ['Two technicians deliver and assemble inside the conference room', 'Customers unload flat planks cleanly curbside', 'Power plugs require independent city electricians', 'Workshops ship tools strictly by parcel mail'], 0, 'ตอบ Two technicians deliver and assemble... (Two-Tech Room Assembly inside Puget Sound)'],
    ]),

    p7(12, 'm12-d2', [
      doc('memo', 'Evergreen Hospital — Outpatient MRI Imaging Arrival Rules', [['Department', 'Radiology Floor 2']],
        [
          lst([
            'Arrive cleanly at Radiology Check-In Window A strictly 25 minutes PRIOR to scan timestamp to review metal implant safety questionnaires calmly.',
            'Leave watches, belt buckles, coins, and magnetic strip credit cards securely locked inside complimentary PIN Dressing Lockers before stepping past Zone III doors.',
            'Late arrivals exceeding 15 minutes past appointment slots must reschedule cleanly for next open slots to avoid backing up afternoon trauma patients.',
          ]),
        ]),
      doc('email', 'E-mail Message',
        [['To', 'radiology@evergreenhosp.org'], ['From', 'David Brooks'], ['Date', 'Monday, June 10'], ['Subject', 'Wednesday 11:00 A.M. Knee MRI Question']],
        [
          'Hello Radiology Desk,',
          'I have a Knee MRI booked neatly this Wednesday, June 12 cleanly at 11:00 A.M.! Marking my calendar right now: planning to step cleanly onto Check-In Window A at 10:35 A.M. as guided.',
          'Quick metal safety query: I broke my left wrist ten years ago and carry two tiny medical-grade titanium wrist screws—no pacemakers anywhere! Should I call ahead today to email orthopedic operative notes cleanly ahead of Wednesday, OR simply report titanium wrist screws onto Window A intake questionnaires at 10:35 A.M.?',
          'Many thanks,\nDavid Brooks',
        ]),
    ], [
      ['Double · Detail', 'Why does David plan reaching Check-In Window A specifically at 10:35 A.M.?', ['Policy asks patients to arrive cleanly 25 minutes before their 11:00 A.M. scan', 'Parking garage meters unlock smoothly at 10:30 A.M.', 'Locker PINs reset automatically before 10:40 A.M.', 'Orthopedic doctors finish morning rounds at 10:35 A.M.'], 0, 'ตอบ Policy asks patients to arrive cleanly 25 minutes before... (11:00 A.M. - 25 นาที = 10:35 A.M.)'],
      ['Double · Inference', 'By what latest clock time would David STILL avoid forced rescheduling if regional subway delays hit him Wednesday morning?', ['By 11:15 A.M.', 'Strictly by 10:35 A.M.', 'By 11:25 A.M.', 'Anytime before 12:00 P.M.'], 0, 'ตอบ By 11:15 A.M. (Late arrivals exceeding 15 minutes past 11:00 A.M. appointment slot = เกิน 11:15 น. ต้องเลื่อนนัด)'],
      ['Double · Detail', 'What does David want clarified ahead of Wednesday’s check-in?', ['Whether titanium wrist screws require emailing surgery papers early', 'Whether PIN lockers hold heavy winter boots', 'Why late arrivals reschedule onto weekends', 'If Window A accepts credit cards'], 0, 'ตอบ Whether titanium wrist screws require emailing surgery papers early'],
      ['Double · Detail', 'Which personal items MUST stay locked outside Zone III doors?', ['Watches, belt buckles, coins, and bank cards', 'Paper safety questionnaires', 'Orthopedic medical folder copies', 'Cotton athletic shorts'], 0, 'ตอบ Watches, belt buckles, coins, and bank cards'],
      ['Double · Detail', 'Which body part is being imaged during David’s Wednesday MRI?', ['Knee', 'Left wrist', 'Chest heart valve', 'Shoulder'], 0, 'ตอบ Knee (Knee MRI booked neatly this Wednesday June 12)'],
    ]),

    p7(12, 'm12-t1', [
      doc('ad', 'Harbor Coffee Supply — Cafe Espresso Grinder Clearance', [['Stock', 'Ships Certified Used & New']],
        [
          tbl(
            ['Model', 'Burr Size', 'Hopper Size', 'Condition & Warranty', 'Sale Price'],
            [
              ['MazzerMini E64', '64 mm Flat Steel', '600 g', 'Factory Refurbished (1-Yr Parts)', '$490'],
              ['PeakGrind Pro 75', '75 mm Titanium', '1.2 kg', 'Brand New Boxed (3-Yr Parts+Labor)', '$980'],
              ['QuietDose X80', '80 mm Flat Steel', '1.5 kg', 'Brand New Boxed (3-Yr Parts+Labor)', '$1,240'],
            ]),
          'Trade in any working commercial brass grinder cleanly when visiting showroom for -$100 instant credit off PeakGrind or QuietDose! (Not valid on refurbished models).',
        ]),
      doc('chat', 'Cafe Setup Chat', [['Channel', '#espressoshop'], ['Date', 'April 5']],
        [
          chat([
            ['Rosa Lin', '9:15 A.M.', 'Choosing our primary high-volume espresso grinder for Opening Day! Morning rush pulls easily 220 doubles before noon, so a tiny 600g bean hopper means baristas pausing constantly to dump bags. Let us grab PeakGrind Pro 75 cleanly—titanium burrs stay razor sharp forever AND our clunky old working grinder sitting in storage knocks $100 off cleanly!'],
            ['Leo Morales', '9:20 A.M.', 'Smart math! Dropping old brass unit at Showroom saves $100 instantly PLUS gets full 3-year warranty coverage cleanly. Loading old grinder into station wagon trunk right now!'],
          ]),
        ]),
      doc('invoice', 'Harbor Coffee Supply Order #HC-1940',
        [['Customer', 'Canal Bean Coffee Bar (Rosa Lin)'], ['Date', 'April 5']],
        [
          'Item: 1 × PeakGrind Pro 75 Espresso Grinder (New 3-Yr Coverage) — List Sale: $980.',
          'Trade-In Applied: Working Commercial Brass Grinder Dropped Onsite (-$100). Net Paid: $880.00.',
        ]),
    ], [
      ['Triple · Synthesis', 'Why did Rosa Lin pass over the cheaper $490 MazzerMini E64?', ['Its 600g hopper is too small for heavy morning coffee volume AND trade-in rebates exclude refurbished units', 'MazzerMini E64 burrs lack steel construction cleanly', 'PeakGrind Pro holds 1.5 kg inside smaller glass', 'One-year warranties omit coffee hoppers'], 0, 'ตอบ Its 600g hopper is too small... (tiny 600g hopper means pausing constantly, อีกทั้ง trade-in -$100 ไม่รวมเครื่อง Refurbished!)'],
      ['Triple · Math', 'How much total did Rosa pay on Order #HC-1940 after dropping off her old grinder cleanly?', ['$880', '$980', '$1,140', '$490'], 0, 'ตอบ $880 ($980 - $100 เทิร์นเครื่องเก่า = $880)'],
      ['Triple · Detail', 'How long does Canal Bean’s new PeakGrind Pro 75 carry BOTH parts AND labor warranty coverage?', ['Three years', 'One year', 'Six months', 'Five years'], 0, 'ตอบ Three years (Brand New Boxed 3-Yr Parts+Labor)'],
      ['Triple · Detail', 'Why would Leo’s trade-in have earned $0 discount if they had picked MazzerMini E64 instead?', ['Trade-in credits apply strictly to non-refurbished models (PeakGrind or QuietDose)', 'Steel burrs cannot swap with old brass frames', 'Showroom skips trade-ins under $500', 'MazzerMini uses 64mm parts'], 0, 'ตอบ Trade-in credits apply strictly... (Not valid on refurbished models)'],
      ['Triple · Detail', 'Roughly how many double espresso shots does Canal Bean expect before midday?', ['Around 220 doubles', 'Exactly 75 doubles', 'Six hundred doubles', 'Under 100 shots'], 0, 'ตอบ Around 220 doubles (Morning rush pulls easily 220 doubles before noon)'],
    ]),

    p7(12, 'm12-t2', [
      doc('article', 'Harbor Film Festival Unveils Outdoor Waterfront Pier Screenings', [['Season', 'July 11–14']],
        [
          'Enjoy classic documentary premieres projected crisply onto massive inflatable harbor screens beside Pier 6 Lawn nightly July 11–14! Free folding beach blankets check out cleanly near South Dock tents, though indoor alternate halls stand ready on Harbor Theater Stage B whenever evening coastal storms bring lightning cleanly.',
        ]),
      doc('table', 'July 11–13 Documentary Screening Lineup (Gates Open 7:00 P.M.)', null, [
        tbl(
          ['Night', 'Film Title', 'Director Q&A Live?', 'Backup Rain Hall', 'Showtime'],
          [
            ['Thurs July 11', 'North Atlantic Kelp Farms', 'Yes (Dir. Hans Olsen)', 'Harbor Theater Stage B', '8:15 P.M.'],
            ['Fri July 12', 'Cargo Sailboats of 2030', 'No (Short Intro only)', 'Harbor Theater Stage B', '8:15 P.M.'],
            ['Sat July 13', 'Timber Bridges Across Oregon', 'Yes (Dir. Mia Cho)', 'Civic Auditorium Room A', '8:00 P.M.'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'info@harborfilmfest.org'], ['From', 'Victor Sato'], ['Date', 'July 13 · 4:30 P.M.'], ['Subject', 'Tonight’s Rain Plan & Mia Cho Q&A Location']],
        [
          'Hello Festival Team,',
          'Super excited bringing three fellow civil bridge engineers out tonight Saturday July 13 specifically to watch "Timber Bridges Across Oregon" AND hear Director Mia Cho talk cleanly afterward! Glancing at gray harbor storm radar heading in around 7:30 P.M. tonight cleanly though—if lightning pushes Saturday’s screening indoors right before doors open, please confirm we head directly across onto Civic Auditorium Room A rather than Harbor Theater Stage B so we do not lose seats!',
          'Thanks!\nVictor Sato',
        ]),
    ], [
      ['Triple · Synthesis', 'Which indoor backup hall should Victor Sato’s group visit if heavy thunderstorms cancel outdoor Pier 6 tonight (Saturday July 13)?', ['Civic Auditorium Room A', 'Harbor Theater Stage B', 'South Dock tents cleanly', 'Lobby Projection Room 2'], 0, 'ตอบ Civic Auditorium Room A (ตารางระบุ Saturday July 13 Backup Rain Hall: Civic Auditorium Room A ต่างจากพฤหัสและศุกร์ที่ย้ายไป Stage B)'],
      ['Triple · Synthesis', 'At what time does tonight’s documentary screening start?', ['8:00 P.M.', '8:15 P.M.', '7:00 P.M.', '7:30 P.M.'], 0, 'ตอบ 8:00 P.M. (ตารางระบุ Saturday July 13 Showtime 8:00 P.M. เร็วกว่าพฤหัส/ศุกร์ 15 นาที)'],
      ['Triple · Detail', 'Why did Victor pick Saturday night specifically over Friday July 12?', ['He works in civil bridge engineering and wants to catch Director Mia Cho’s live Q&A', 'Friday’s Cargo Sailboats lacks free outdoor beach blankets', 'Stage B sits further from downtown bridges', 'Saturday features 8:15 P.M. gates cleanly'], 0, 'ตอบ He works in civil bridge engineering... (bringing civil bridge engineers specifically to watch Timber Bridges & Mia Cho Q&A)'],
      ['Triple · Detail', 'Which night features a screening WITHOUT a live director Q&A session?', ['Friday, July 12', 'Thursday, July 11', 'Saturday, July 13', 'All nights host Q&As'], 0, 'ตอบ Friday, July 12 (ตาราง Friday Director Q&A: No Short Intro only)'],
      ['Triple · Detail', 'When do screening gates unlock for attendees?', ['At 7:00 P.M.', 'At 8:15 P.M.', 'At 4:30 P.M.', 'At 7:30 P.M.'], 0, 'ตอบ At 7:00 P.M. (ตารางระบุ Gates Open 7:00 P.M.)'],
    ]),

    p7(12, 'm12-t3', [
      doc('memo', 'ClearGrid Corporate Card Reconciliation Policy', [['To', 'Cardholders'], ['From', 'Treasury Compliance']],
        [
          'Every monthly credit statement charge above $25 requires matched PDF receipts uploaded smoothly onto VaultPay cleanly within 10 calendar days post-month close. Late unmatched statements past Day 10 freeze card limits temporarily until outstanding PDFs clear audit checks cleanly.',
        ]),
      doc('table', 'August Statement Summary — Card Ending #8821 (Ben Alvarez · Marketing)', null, [
        tbl(
          ['Post Date', 'Merchant', 'Amount', 'VaultPay Status'],
          [
            ['Aug 8', 'Copperplate Signage Co.', '$412.00', 'PDF Verified ✓'],
            ['Aug 19', 'Central Airport Shuttle', '$22.50', 'Exempt (Under $25)'],
            ['Aug 24', 'Hotel Nordica Dinner', '$118.40', 'MISSING RECEIPT !'],
            ['Aug 29', 'CloudHost Monthly SaaS', '$89.00', 'PDF Verified ✓'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'compliance@cleargrid.io'], ['From', 'Ben Alvarez'], ['Date', 'September 11'], ['Subject', 'Card #8821 Unfrozen Request + Nordica Folio Attached']],
        [
          'Hi Treasury Crew,',
          'Aha—completely see why my corporate card blocked tapping at coffee carts smoothly this morning! Being out sick Monday–Wednesday clearly pushed uploading my $118.40 Hotel Nordica client dinner PDF past yesterday’s Sept 10 Day-10 monthly cutoff cleanly.',
          'Just called Hotel Nordica Reception Desk this morning and attached their official itemized signed folio PDF right onto VaultPay cleanly seconds ago! Central Airport Shuttle at $22.50 stayed exempt cleanly under $25 right? Hoping card #8821 unblocks quickly before Monday’s trade booth trip!',
          'Best,\nBen Alvarez',
        ]),
    ], [
      ['Triple · Synthesis', 'Why was Ben Alvarez’s corporate card #8821 frozen on the morning of September 11?', ['He missed the September 10 cutoff to upload the $118.40 Hotel Nordica receipt', 'Central Airport Shuttle failed vault tax checks cleanly', 'CloudHost SaaS expired cleanly in August', 'Total spending crossed $500 monthly caps'], 0, 'ตอบ He missed the September 10 cutoff... (เส้นตาย 10 วันหลังสิ้นเดือน ส.ค. คือ 10 ก.ย. แต่ใบเสร็จ Nordica $118.40 ยังค้าง Missing จนเลยวันที่ 10)'],
      ['Triple · Synthesis', 'How will Treasury answer Ben’s question about the $22.50 Central Airport Shuttle receipt?', ['Yes, receipts below $25 do not require VaultPay PDF uploads', 'No, all airport receipts demand scanned driver tickets', 'Yes, provided Hotel Nordica clears first', 'Only shuttle rides over $50 stay exempt'], 0, 'ตอบ Yes, receipts below $25 do not require... (Memo ระบุ charge above $25 requires receipts และตารางขึ้นว่า Exempt Under $25)'],
      ['Triple · Detail', 'Why did Ben fail to upload the missing receipt on time earlier this week?', ['He was away sick from Monday through Wednesday', 'Hotel Nordica lost original restaurant paper copies', 'VaultPay servers crashed cleanly September 9', 'Copperplate Signage emailed wrong totals'], 0, 'ตอบ He was away sick... (Being out sick Monday–Wednesday pushed uploading past yesterday’s cutoff)'],
      ['Triple · Math', 'What is the total dollar amount of ALL four August charges listed on Ben’s statement?', ['$641.90', '$523.50', '$619.40', '$501.00'], 0, 'ตอบ $641.90 ($412.00 + $22.50 + $118.40 + $89.00 = $641.90)'],
      ['Triple · Detail', 'When does Ben urgently need his corporate card reactivated?', ['Before next Monday’s trade booth trip', 'Before Copperplate Signage bills again', 'By September 30', 'Right after Hotel Nordica audits close'], 0, 'ตอบ Before next Monday’s trade booth trip (before Monday’s trade booth trip!)'],
    ]),

    // ══════════════════ SET 13 (Q147–Q200: 54 Qs) ══════════════════
    p7(13, 'm13-s1', [
      doc('memo', 'HR Notice', [['To', 'Regional Office Managers'], ['From', 'People Operations'], ['Date', 'February 11']],
        [
          'Printed annual fire warden vests and neon flashlights for Floor 5 teams arrive tomorrow inside Supply Locker 3B. Please verify flashlight AA batteries work cleanly before assigning warden kits ahead of March city drills.',
        ]),
    ], [
      ['Single · Detail', 'Where will the new safety vests and flashlights be stored?', ['Inside Supply Locker 3B', 'Beside Floor 5 Lobby Desk', 'Inside municipal fire trucks', 'On Floor 3 kitchen counters'], 0, 'ตอบ Inside Supply Locker 3B'],
      ['Single · Action', 'What should office managers check before distributing warden kits?', ['Whether flashlight AA batteries work properly', 'Whether vest stripes match Floor 3 colors', 'When March drills switch to April', 'How many flashlights fit inside envelopes'], 0, 'ตอบ Whether flashlight AA batteries work properly (verify flashlight AA batteries work cleanly before assigning kits)'],
    ]),

    p7(13, 'm13-s2', [
      doc('notice', 'Oakridge Municipal Pool — Sunday Family Swim Promotion', [['Valid', 'Every Sunday 1:00–5:00 P.M.']],
        [
          'Bring kids cleanly out onto Heated Pool Deck 2 Sunday afternoons! Paying adult admissions ($9) allow up to two youths under age 14 inside free alongside complimentary floating kickboards.',
          'Lockers accept refundable quarter coins only near Pool Deck 2 entrances.',
        ]),
    ], [
      ['Single · Detail', 'How many children under 14 enter free per paying adult on Sunday afternoons?', ['Up to two children', 'Up to four children', 'One child cleanly', 'Unlimited kids'], 0, 'ตอบ Up to two children (allow up to two youths under age 14 inside free)'],
      ['Single · Detail', 'What should families remember to bring for changing-room lockers near Pool Deck 2?', ['Quarter coins cleanly', 'Personal steel padlocks', 'Electronic wristbands', 'Waterproof ID pouches'], 0, 'ตอบ Quarter coins cleanly (Lockers accept refundable quarter coins only)'],
    ]),

    p7(13, 'm13-s3', [
      doc('chat', 'Bakery Cafe Team Chat', [['Channel', '#store-counter'], ['Date', 'November 19']],
        [
          chat([
            ['Clara Sato', '8:08 A.M.', 'Espresso Bar Group 2 suddenly stopped pulling water cleanly—pressure gauge sits stuck at zero bars though boiler lights look warm!'],
            ['Tariq Kim', '8:11 A.M.', 'Whoa! Check water line brass shutoff valve underneath Sink B right away cleanly—did dish staff bump that handle while mopping crates?'],
            ['Clara Sato', '8:14 A.M.', 'Checking now... Haha bingo! Someone nudged the blue brass quarter-turn valve halfway closed cleaning soap buckets!'],
            ['Tariq Kim', '8:16 A.M.', 'Awesome catch, flip it straight vertical again and purge Group 2 five seconds cleanly before steaming cappuccinos!'],
          ]),
        ]),
    ], [
      ['Single · Cause', 'Why did Espresso Bar Group 2 lose water pressure cleanly at 8:08 A.M.?', ['A shutoff valve beneath Sink B had been bumped partly closed', 'Boiler heating elements failed overnight cleanly', 'Sink B water pipes froze solid', 'Coffee grinds clogged brass Group 2 screens'], 0, 'ตอบ A shutoff valve beneath Sink B had been bumped... (nudged the blue brass quarter-turn valve halfway closed while cleaning)'],
      ['Single · Action', 'What should Clara do right after reopening the valve cleanly?', ['Run water through Group 2 briefly for five seconds', 'Call external espresso repair technicians', 'Drain warm water out of boiler tanks', 'Close espresso sales until noon'], 0, 'ตอบ Run water through Group 2 briefly... (purge Group 2 five seconds cleanly before steaming)'],
      ['Single · Role', 'What position do Clara and Tariq likely hold?', ['Cafe baristas or coffee shop staff', 'Municipal plumbing inspectors', 'Commercial appliance mechanics', 'Dish soap delivery drivers'], 0, 'ตอบ Cafe baristas or coffee shop staff (กำลังเปิดเครื่องทำคาปูชิโน่หน้าเคาน์เตอร์ร้านกาแฟ)'],
    ]),

    p7(13, 'm13-s4', [
      doc('table', 'Metro Shuttle Parking — Daily Airport Long-Term Rates', [['Location', '3 Mins to Terminal 1 & 2']],
        [
          tbl(
            ['Parking Zone', 'Shuttle Frequency', 'Daily Rate', 'Weekly 7-Day Cap', 'Covered Roof?'],
            [
              ['Economy Lot C', 'Every 12 mins', '$14', '$84', 'No (Open sky)'],
              ['Covered Mid-Deck', 'Every 8 mins', '$21', '$126', 'Yes'],
              ['Express Curb Garages', 'Walk 2-min skybridge', '$32', '$195', 'Yes'],
            ]),
          'Pre-pay cleanly online 24+ hrs ahead to knock $2/day off Covered Mid-Deck!',
        ]),
    ], [
      ['Single · Math', 'How much would pre-paying online cleanly for a 5-day Covered Mid-Deck trip cost?', ['$95', '$105', '$126', '$70'], 0, 'ตอบ $95 (Covered Mid-Deck ปกติ $21/วัน จองออนไลน์ล่วงหน้าลด $2/วัน เหลือ $19 × 5 วัน = $95)'],
      ['Single · Detail', 'Which lot offers direct terminal access WITHOUT riding a shuttle bus?', ['Express Curb Garages', 'Economy Lot C', 'Covered Mid-Deck', 'Terminal South Ramp'], 0, 'ตอบ Express Curb Garages (Walk 2-min skybridge)'],
      ['Single · Inference', 'Under Weekly 7-Day Caps on Economy Lot C, how many days essentially turn free compared to paying daily?', ['One day free (6 × $14 = $84)', 'Two days free', 'Three days free', 'Zero days free'], 0, 'ตอบ One day free (7 วันในเรทCap $84 = จ่ายแค่ราคา 6 วัน $14 × 6 = $84)'],
    ]),

    p7(13, 'm13-s5', [
      doc('letter', 'Client Service Reply', [['To', 'Mr. Victor Reyes'], ['From', 'CrestWood Hardwood Flooring'], ['Date', 'June 3']],
        [
          'Dear Mr. Reyes,',
          'Thank you kindly for welcoming our installation crew onto Oak Lane last week cleanly! Glancing back onto Work Order #CW-510, our foreman noticed leftover engineered white oak planks packed neatly inside two unopened factory cartons remained sitting inside your garage instead of returning onboard Friday afternoon vans.',
          'Because unopened cartons qualify cleanly for 100% restocking refunds minus zero return pickup fee when collected cleanly along standard route loops, our delivery van will swing past Oak Lane this Thursday morning around 9:30 A.M. to refund $140 back straight onto your invoice card!',
        ]),
    ], [
      ['Single · Purpose', 'Why did CrestWood Hardwood Flooring write to Victor Reyes?', ['To arrange picking up two leftover unopened plank cartons for a $140 refund', 'To charge extra Friday van fees', 'To inspect damaged white oak planks cleanly', 'To change installation schedules cleanly'], 0, 'ตอบ To arrange picking up two leftover unopened cartons for a $140 refund'],
      ['Single · Math', 'How much per carton did those white oak flooring boxes cost cleanly?', ['$70', '$140', '$35', '$280'], 0, 'ตอบ $70 (2 unopened cartons รวมคืนเงิน $140 = กล่องละ $70)'],
      ['Single · Detail', 'Is CrestWood deducting a restocking pickup charge from Victor’s refund?', ['No, returns along standard routes carry zero pickup charge', 'Yes, $25 deduction applies on Thursdays', 'Only open cartons waive pickup fees', 'Friday routes charge double'], 0, 'ตอบ No, returns along standard routes carry zero pickup charge (100% restocking refunds minus zero return pickup fee)'],
    ]),

    p7(13, 'm13-s6', [
      doc('article', 'Boutique Hotel Chain Swaps Plastic Room Keycards for Reusable Cork Tags', [['City', 'Lisbon Hospitality News']],
        [
          'Tired of issuing twenty thousand disposable PVC magnetic hotel swipe keys annually cleanly discarded upon airport departures, Mediterranean chain CasaSol transitioned all twelve coastal hotels onto laser-engraved Portuguese wine cork RFID fobs cleanly this quarter.',
          'Guests delightedly clip slim waterproof oak-cork fobs straight onto beach totes cleanly without scratching smart screens inside pockets—and return bins inside lobby exits recover 91 percent cleanly for alcohol sanitizing rather than snapping bent plastic hotel cards cleanly weekly.',
        ]),
    ], [
      ['Single · Detail', 'What material replaced traditional disposable plastic hotel keycards at CasaSol?', ['Laser-engraved cork RFID key fobs', 'Recycled steel coins', 'Biodegradable corn cardboard cards', 'Paper wristbands cleanly'], 0, 'ตอบ Laser-engraved cork RFID key fobs'],
      ['Single · Inference', 'Why did CasaSol prefer RFID cork fobs over PVC magnetic strips?', ['They last longer cleanly, get returned at 91% rates, and cut plastic waste cleanly', 'Guests pay extra deposits at beach doors', 'Steel scanners erase PVC cards cleanly', 'Portuguese vineyards supply keys free cleanly'], 0, 'ตอบ They last longer cleanly, get returned at 91% rates, and cut plastic waste cleanly'],
      ['Single · Vocab', 'The word "recover" in paragraph 2 is closest in meaning to ___.', ['get back for reuse', 'throw away neatly', 'polish smoothly', 'pay back'], 0, 'ตอบ get back for reuse (return bins recover 91 percent cleanly for alcohol sanitizing = เก็บคืนกลับมาใช้ซ้ำ)'],
    ]),

    p7(13, 'm13-s7', [
      doc('ad', 'Now Hiring — Inventory Control Specialist (Beacon Pharma)', [['Location', 'Raleigh Cold Depot · Mon–Fri']],
        [
          'Safeguard sensitive refrigerated oncology vials inside our climate-verified medical distribution hub cleanly! [1] As Inventory Control Specialist, you will execute cycle-count reconciliations daily inside ERP scanners, audit lot expiration dates ahead of quarterly shipments, and flag low buffer stock smoothly to Purchasing Managers.',
          'Candidate Background:',
          lst([
            'Minimum 2 years pharmaceutical, medical supply, or clean-room ERP warehouse counting experience',
            'Precision typing accuracy entering batch numbers and FIFO expiration brackets',
            'Willingness spending 2 hours per shift inside 4°C cold-vault rooms (insulated coats provided!)',
          ]),
          '[2] Competitive pay ($58,000), full family medical benefits, retirement matching, and quarterly cold-vault gear stipends await cleanly. [3] Submit resume online smoothly at beaconpharma.com/jobs noting Code ICS-4. [4]',
        ]),
    ], [
      ['Single · Detail', 'How does Beacon Pharma support specialists working inside chilly 4°C storage vaults?', ['Insulated cold coats and gear stipends are supplied cleanly', 'Shifts rotate strictly out of vaults every ten minutes', 'Hot beverages ship cleanly every hour', 'Cold-vault staff work strictly four-day schedules'], 0, 'ตอบ Insulated cold coats and gear stipends... (insulated coats provided! + quarterly cold-vault gear stipends)'],
      ['Single · Requirement', 'How much cold-room or clean-room warehouse experience is requested?', ['At least two years', 'Four years minimum', 'Strictly six months internship', 'Zero warehouse background required'], 0, 'ตอบ At least two years (Minimum 2 years)'],
      ['Single · Detail', 'What does FIFO expiration checking verify?', ['Vaccine and vial lot expiration dates are sequenced properly', 'Shipping truck tires clear winter roads safely', 'Purchase order prices match monthly invoices', 'Uniform coats fit department racks cleanly'], 0, 'ตอบ Vaccine and vial lot expiration dates... (audit lot expiration dates cleanly)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Familiarity with FDA lot traceability logging rules is considered a definite plus."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจาก Candidate Background ทันที ก่อนเข้าสู่ผลตอบแทนและสวัสดิการ)'],
    ]),

    p7(13, 'm13-s8', [
      doc('memo', 'Company Wellness Subsidies — Annual Fitness Reimbursement Policy', [['Department', 'Total Rewards HR']],
        [
          'Full-time permanent staff working 30+ hours weekly qualify cleanly for up to $400 annual wellness reimbursements cleanly covering gym passes, swimming lane memberships, yoga classes, or running marathon race registrations!',
          'Claim Guidelines:',
          lst([
            'Upload itemized monthly or annual billing receipts cleanly showing BOTH employee full name AND active membership calendar window.',
            'Sportswear apparel (running sneakers, shorts, yoga mats) or dietary vitamin shakes CANNOT claim against Wellness Subsidies.',
            'Submit year-end claims cleanly inside BenefitHub prior to December 15 midnight.',
          ]),
        ]),
    ], [
      ['Single · NOT', 'Which purchase CAN be reimbursed cleanly under the $400 annual wellness program?', ['A local marathon entry fee or swimming pool pass', 'Running marathon sneakers', 'Cotton yoga floor mats cleanly', 'Protein vitamin nutrition powders'], 0, 'ตอบ A local marathon entry fee... (covering gym, swimming, yoga classes, or running race registrations — รองเท้า/เสื่อ/อาหารเสริมห้ามเบิก)'],
      ['Single · Requirement', 'How many weekly hours qualify an employee cleanly for Wellness Subsidies?', ['At least 30 hours per week', 'Strictly 40+ hours weekly', 'Any part-time 15-hour worker cleanly', 'Contractors under 20 hours'], 0, 'ตอบ At least 30 hours per week (working 30+ hours weekly)'],
      ['Single · Detail', 'What information MUST appear clearly on uploaded membership receipts?', ['Employee full name plus active billing period dates', 'Coach license ID stamps', 'Store cashier signature cards', 'Personal heart rate metrics'], 0, 'ตอบ Employee full name plus active billing period dates'],
      ['Single · Deadline', 'When is the final yearly cutoff for submitting receipts in BenefitHub?', ['December 15', 'December 31', 'January 15', 'Before race start'], 0, 'ตอบ December 15 (prior to December 15 midnight)'],
    ]),

    p7(13, 'm13-s9', [
      doc('article', 'Modular Rooftop Micro-Turbines Harvest Swirling Urban Tower Winds', [['By', 'Hannah Brooks'], ['Publication', 'Clean Energy Architecture']],
        [
          'Tall glassy downtown office towers force crisp afternoon sea breezes cleanly upward along sharp stone parapet walls, blasting pedestrian hats sideways cleanly while conventional towering three-blade wind turbines remain impossible atop crowded midtown roofs due to heavy crane rigging and low thumping acoustic noise. [1] Industrial aerodynamic engineers across Bristol think quiet curved vertical helical blades finally unlock urban high-rise corners cleanly.',
          'Standing barely three meters high inside lightweight aluminum cages bolted right beside standard elevator mechanical penthouses cleanly, omnidirectional AeroHelix columns spin softly regardless of whether gusts whip north-east or swirl upward off narrow city avenues. [2] Unlike loud horizontal helicopter-like propellers that rattle steel beams, curved vertical scoops turn silently below street-traffic whispers cleanly at forty decibels.',
          '"Linking twelve modular rooftop columns smoothly onto tower basement batteries cleanly trimmed evening lobby hallway lighting costs 28 percent at Beacon Tower last winter," highlights facilities director Arthur Lin. [3] Compact helical cages require zero guy wires cleanly and survive 160-kilometer coastal storm gusts smoothly thanks to automated magnetic brake locks.',
          'Municipal green-building planners just cleared simplified rooftop permits across fourteen coastal business parks starting next quarter cleanly. [4]',
        ]),
    ], [
      ['Single · Problem', 'Why could standard three-blade horizontal turbines NOT mount safely atop crowded downtown towers?', ['Heavy crane installation needs, high weight, and thumping blade noise cleanly prevented city use', 'Urban roofs lack coastal breezes cleanly', 'Basement batteries run strictly off solar arrays', 'Pavement regulations require vertical elevators'], 0, 'ตอบ Heavy crane installation needs... (conventional three-blade turbines remain impossible due to heavy crane rigging and low thumping acoustic noise)'],
      ['Single · Design', 'What advantage does AeroHelix’s vertical helical blade geometry offer regarding wind direction?', ['It catches swirling breezes cleanly coming from any horizontal or upward angle', 'It spins strictly during steady north winds cleanly', 'It hides cleanly inside basement mechanical rooms', 'It unfolds flat guy wires across parapet stones'], 0, 'ตอบ It catches swirling breezes... (omnidirectional AeroHelix columns spin regardless of whether gusts whip north-east or swirl upward)'],
      ['Single · Safety', 'How do the vertical cages handle extreme coastal gales?', ['Automated magnetic braking locks blades securely during 160 km/h gusts', 'Building crews unscrew cages before storms arrive', 'Aluminum slats detach safely downward onto balconies', 'Street noise alarms halt rooftop motors cleanly'], 0, 'ตอบ Automated magnetic braking locks... (survive 160-kilometer storm gusts smoothly thanks to automated magnetic brake locks)'],
      ['Single · Vocab', 'The word "trimmed" in paragraph 3 is closest in meaning to ___.', ['cut', 'doubled', 'measured', 'delayed'], 0, 'ตอบ cut (trimmed evening lobby hallway lighting costs 28 percent = ลดค่าไฟส่องสว่างโถงลง 28%)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Because blades move smoothly alongside passing rooftop maintenance workers, safety screens prevent accidental finger contact cleanly."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (รายละเอียดโครงสร้างความปลอดภัยและเสียงเงียบของตัวกรงสูง 3 เมตรต่อเนื่องจากขนาดและการติดตั้งบนดาดฟ้า)'],
    ]),

    p7(13, 'm13-d1', [
      doc('ad', 'Nordic Craft Printers — Custom Hardcover Book Editions', [['Studio', 'Stockholm Press Works']],
        [
          tbl(
            ['Print Run', 'Page Size', 'Black & White Pages', 'Full Color Pages', 'Turnaround'],
            [
              ['50 copies', 'A5 Paperback', '$390', '$620', '7 Business Days'],
              ['100 copies', 'A5 Paperback', '$640', '$980', '7 Business Days'],
              ['100 copies', 'B5 Hardcover Linen', '$890', '$1,320', '10 Business Days'],
            ]),
          'Add shiny Gold Foil Cover Stamp cleanly (+$90 flat per run regardless of quantity!).',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'hello@nordiccraftprint.se'], ['From', 'Sofia Holm (Holm Architecture Studio)'], ['Date', 'October 1'], ['Subject', 'Monograph Print Order Check']],
        [
          'Hi Print Team,',
          'Preparing 100 anniversary architectural books cleanly showcasing thirty years of timber housing drawings + rich interior photographs! Since glossy full-color courtyard renders appear neatly throughout every chapter, we want the larger B5 Hardcover Linen finish neatly with Full Color inside pages PLUS that crisp Gold Foil Cover Stamp on front cloth.',
          'Confirm total price nicely and check whether mailing ready PDF layout tomorrow morning Oct 2 gets cartons delivered securely ahead of our October 24 gallery reception?',
          'Best regards,\nSofia Holm',
        ]),
    ], [
      ['Double · Math', 'How much total will Holm Architecture pay for its 100-copy B5 Hardcover Full Color print run WITH Gold Foil Stamp?', ['$1,410', '$1,320', '$1,070', '$980'], 0, 'ตอบ $1,410 (100 copies B5 Hardcover Linen Full Color = $1,320 + Gold Foil Cover Stamp +$90 flat = $1,410)'],
      ['Double · Synthesis', 'Will Sofia Holm’s books likely finish printing well before her October 24 reception if files arrive October 2?', ['Yes, 10 business days puts finishing mid-October leaving over a week buffer cleanly', 'No, hardcover printing shuts cleanly down mid-October', 'Only A5 black-and-white copies finish before October 24', 'Gold foil stamps add thirty business days cleanly'], 0, 'ตอบ Yes, 10 business days puts finishing mid-October... (Oct 2 + 10 วันทำการ = ประมาณ Oct 16 ยังเหลือเวลาอีกหลายวันก่อน Oct 24!)'],
      ['Double · Detail', 'Why did Sofia select Full Color pages instead of Black & White?', ['Her monograph contains rich interior color courtyard architectural photos', 'B5 Hardcover Linen bans black-and-white interior paper cleanly', 'Full Color turns A5 paperbacks into B5 books automatically', 'Gold foil stamps pair exclusively with full color'], 0, 'ตอบ Her monograph contains rich interior color... (rich interior photographs ... glossy full-color courtyard renders)'],
      ['Double · Inference', 'How much EXTRA does upgrading strictly from 100 B5 Black & White copies ($890) up to Full Color ($1,320) add?', ['$430', '$340', '$520', '$90'], 0, 'ตอบ $430 ($1,320 - $890 = $430)'],
      ['Double · Detail', 'Does Gold Foil Cover Stamping multiply cost cleanly per individual book?', ['No, it adds one flat $90 charge per total batch', 'Yes, $0.90 per book cleanly', 'Yes, $90 per fifty books cleanly', 'Hardcover linen includes gold foil cleanly free'], 0, 'ตอบ No, it adds one flat $90 charge per batch (+$90 flat per run regardless of quantity!)'],
    ]),

    p7(13, 'm13-d2', [
      doc('notice', 'Oakridge Municipal Library — Meeting Room Reservation Rules', [['Venue', 'Main Downtown Branch · Floor 2']],
        [
          lst([
            'Registered nonprofit civic groups and book clubs with valid cardholder sponsors reserve Seminar Rooms (cap 20 seats) FREE up to 3 hours weekly cleanly.',
            'For-profit business client pitches or paid private workshops carry $45/hour facility fees cleanly payable at Desk 1 ahead of opening keys.',
            'Light covered boxed lunches allowed ONLY inside Room 204—STRICTLY zero open cups or food allowed inside carpet Conference Rooms 201 and 202.',
          ]),
        ]),
      doc('email', 'E-mail Message',
        [['To', 'rooms@oakridgelibrary.org'], ['From', 'Daniel Park (Volunteer Coding Literacy Nonprofit)'], ['Date', 'June 4'], ['Subject', 'Saturday Teen Coding Workshop Room Request']],
        [
          'Hi Library Coordinator,',
          'As a registered local nonprofit chapter teaching free Python weekend bootcamps cleanly for high-schoolers, we would love reserving a 20-seat Floor 2 Seminar Room Saturday June 15 from 1:00 P.M. to 4:00 P.M. (3 hours!). Since our parent sponsor organization brings individually sealed cardboard sandwich snack boxes for students mid-break cleanly, please assign Room 204 rather than 201 or 202 so carpet food rules stay 100% honored cleanly!',
          'Confirm whether holding my active Oakridge adult borrower badge clears Room 204 at zero charge.',
          'Warm regards,\nDaniel Park',
        ]),
    ], [
      ['Double · Synthesis', 'Will Daniel Park’s Saturday workshop owe any room booking charges?', ['No, verified nonprofit clubs booking up to 3 weekly hours use Seminar Rooms free', 'Yes, $135 applies for three Saturday hours', 'Yes, Room 204 adds $45 snack cleaning fees', 'No, provided fewer than ten teenagers attend'], 0, 'ตอบ No, verified nonprofit clubs booking <=3h use rooms free (ชมรมไม่แสวงหากำไรจดทะเบียน จองไม่เกิน 3 ชม./สัปดาห์ ฟรีค่าห้อง!)'],
      ['Double · Synthesis', 'Why does Daniel specifically request Room 204 instead of Rooms 201 or 202?', ['Covered boxed sandwich breaks are allowed ONLY inside Room 204', 'Rooms 201 and 202 hold strictly ten students cleanly', 'Room 204 supplies Python computers automatically', 'Carpet Rooms 201 and 202 close Saturdays cleanly'], 0, 'ตอบ Covered boxed sandwich breaks are allowed ONLY inside Room 204'],
      ['Double · Detail', 'Which sponsor requirement does Daniel meet as an individual librarian borrower?', ['He holds an active Oakridge adult library borrower card', 'He teaches high-school mathematics weekdays cleanly', 'His nonprofit paid for Room 201 previously', 'Snack boxes arrive sealed by approved caterers'], 0, 'ตอบ He holds an active Oakridge adult library borrower card (with valid cardholder sponsors)'],
      ['Double · Inference', 'What would a private tutoring startup charging students $100 tuition pay to rent Room 204 cleanly for 2 hours?', ['$90', '$0 (Free)', '$45', '$135'], 0, 'ตอบ $90 (ติวเตอร์เอกชนแสวงหากำไรเสีย $45/ชม. × 2 ชม. = $90)'],
      ['Double · Detail', 'What is the maximum weekly complimentary booking hours cap for civic nonprofit clubs?', ['Three hours per week', 'Two hours daily', 'Twenty hours monthly', 'Five hours per club'], 0, 'ตอบ Three hours per week (FREE up to 3 hours weekly cleanly)'],
    ]),

    p7(13, 'm13-t1', [
      doc('ad', 'Apex Outdoor Gear — Portable Propane Camp Stoves', [['Warranty', '3 Years Stainless Burners']],
        [
          tbl(
            ['Model', 'Burners', 'BTU Total', 'Folded Weight', 'Retail Price', 'Carrying Tote Bundle'],
            [
              ['TrailJet Single', '1', '10,000 BTU', '1.8 kg', '$72', '+$18 zip pouch'],
              ['BaseChef Twin', '2', '22,000 BTU', '4.4 kg', '$145', '+$28 padded canvas tote'],
              ['GourmetPro Dual', '2 + Windscreen', '28,000 BTU', '5.1 kg', '$190', 'Included Free Canvas Tote ($0)'],
            ]),
          'Use coupon CAMPOUT15 cleanly on orders over $150 to shave 15% off hardware & cases together!',
        ]),
      doc('chat', 'Outing Club Prep Chat', [['Between', 'Sam & Coach Priya'], ['Date', 'April 10']],
        [
          chat([
            ['Sam Lee', '4:10 P.M.', 'Buying a camp stove cleanly for twelve student paddlers cooking pasta + tomato sauce simultaneously next week cleanly along windy coastal cliffs! Need TWO burners clearly plus sturdy windscreen shields so ocean gusts never blow cooking flames out. Wait—GourmetPro Dual already packs its padded carrying tote free cleanly AND tops $150 for CAMPOUT15 cleanly right?'],
            ['Coach Priya', '4:15 P.M.', 'Totally! Ordering GourmetPro Dual right now using CAMPOUT15 drops total cleanly well below $170! Remember grabbing green 1-lb propane canisters locally near Highway 9 tomorrow morning cleanly.'],
          ]),
        ]),
      doc('invoice', 'Apex Outdoor Receipt #AO-7704',
        [['Buyer', 'NorthCoast Kayak Club'], ['Date', 'April 10']],
        [
          'Ordered: 1 × GourmetPro Dual Stove (with Included Canvas Carrying Tote) — Retail $190.00.',
          'Promo Code CAMPOUT15 (-15%): -$28.50 · Net Charged: $161.50.',
        ]),
    ], [
      ['Triple · Synthesis', 'Why did Sam prefer GourmetPro Dual over BaseChef Twin even though BaseChef costs $45 less?', ['GourmetPro offers windshields for windy cliffs, higher BTU output, AND includes a canvas tote free', 'BaseChef Twin carries only one cooking burner', 'BaseChef Twin stays too heavy above 6 kg cleanly', 'CAMPOUT15 excludes BaseChef Twin models'], 0, 'ตอบ GourmetPro offers windshields... (สำหรับทำอาหารริมหน้าผาลมแรง ต้องใช้ 2 เตา + Windscreen และได้กระเป๋า Canvas ฟรีไม่ต้องซื้อเพิ่ม $28)'],
      ['Triple · Math', 'Compare net savings cleanly: how much LESS did NorthCoast pay for GourmetPro Dual WITH CAMPOUT15 ($161.50) vs buying BaseChef Twin ($145) + Tote ($28) ALSO using CAMPOUT15?', ['BaseChef + Tote after 15% ($147.05) costs $14.45 less, though GourmetPro adds 6,000 BTU + windscreen for only $14.45 difference cleanly!', 'GourmetPro actually cost $10 less strictly', 'Both cost exact identical $161.50 cleanly', 'BaseChef totals $190 cleanly'], 0, 'ตอบ BaseChef + Tote after 15% ($147.05) costs $14.45 less... (คำนวณเป๊ะ: BaseChef $145 + Tote $28 = $173 × 0.85 = $147.05 ต่างจาก $161.50 เพียง $14.45 ซึ่งได้กำลังไฟ 28,000 BTU และแผ่นกันลมเพิ่ม)'],
      ['Triple · Math', 'Verify exact dollar savings produced by promo code CAMPOUT15 on Invoice #AO-7704:', ['$28.50', '$15.00', '$19.00', '$31.50'], 0, 'ตอบ $28.50 (15% ของ $190.00 = $28.50 เหลือสุทธิ $161.50)'],
      ['Triple · Inference', 'Why did Coach Priya note buying propane fuel canisters separately near Highway 9?', ['Apex Outdoor sells stoves and cases without pressurized shipping gas bottles inside mail cartons cleanly', 'Coastal cliffs prohibit metal canisters cleanly', 'Canvas bags block gas canisters cleanly', 'Highway 9 gives free student fuel canisters'], 0, 'ตอบ Apex Outdoor sells stoves without gas canisters inside cartons... (ต้องแวะซื้อถังแก๊ส 1-lb เพิ่มแยกต่างหากตามทางหลวง)'],
      ['Triple · Detail', 'How many campers is the GourmetPro Dual cooking meals for next week?', ['Twelve student paddlers', 'Five teachers cleanly', 'Two backpackers', 'Twenty kayakers cleanly'], 0, 'ตอบ Twelve student paddlers (twelve student paddlers cooking pasta + tomato sauce simultaneously)'],
    ]),

    p7(13, 'm13-t2', [
      doc('article', 'Midtown Wellness Clinic Unveils Evening Physical Therapy Hours', [['Starts', 'May 1']],
        [
          'Busy office commuters no longer miss afternoon spreadsheets hunting sports recovery care cleanly! Starting May 1, Midtown Wellness expands orthopedics and neck ergonomics clinics weekly Monday–Thursday cleanly until 8:00 P.M.',
        ]),
      doc('table', 'May Evening Sports Therapy Staff Directory (Rooms 301–304)', null, [
        tbl(
          ['Therapist', 'Focus Area', 'Evening Days', 'Slot Window', 'Room'],
          [
            ['Dr. Anita Patel', 'Lower Back & Posture Alignment', 'Mon & Wed', '5:00–8:00 P.M.', '301'],
            ['Dr. Ben Kwon', 'Running Knee & Ankle Rehab', 'Tue & Thu', '5:00–8:00 P.M.', '303'],
            ['Dr. Nora Silva', 'Wrist Carpal Tunnel & Neck Tension', 'Mon & Thu', '5:30–8:00 P.M.', '304'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'booking@midtownwellness.org'], ['From', 'Kevin Alvarez'], ['Date', 'April 28'], ['Subject', 'Evening Appointment Request — Wrist Pain & Laptop Typing']],
        [
          'Hi Appointments Desk,',
          'Thank goodness for extended May evening clinic hours cleanly! Drafting CAD architectural plans eight hours straight daily recently left my right wrist tingling sharply around 4:00 P.M. daily cleanly—looks exactly like repetitive carpal wrist strain!',
          'Note that my architectural team works late Mondays during weekly print critiques until 7:00 P.M., making Mondays completely impossible. Please grab me Dr. Nora Silva’s earliest available Thursday evening opening starting May 2!',
          'Best,\nKevin Alvarez',
        ]),
    ], [
      ['Triple · Synthesis', 'Which specific room and doctor should Kevin visit on Thursday evening, May 2?', ['Dr. Nora Silva inside Room 304', 'Dr. Ben Kwon inside Room 303', 'Dr. Anita Patel inside Room 301', 'Any therapist inside Room 302'], 0, 'ตอบ Dr. Nora Silva inside Room 304 (อาการ Carpal Tunnel ข้อมือตรงเฉพาะทางของ Dr. Nora Silva วันจันทร์/พฤหัส แต่ติดวันจันทร์จึงลงตัววันพฤหัสในห้อง 304)'],
      ['Triple · Detail', 'From what exact clock hour can Kevin’s Thursday appointment with Dr. Nora Silva possibly start at the earliest?', ['5:30 P.M.', '5:00 P.M.', '7:00 P.M.', '8:00 P.M.'], 0, 'ตอบ 5:30 P.M. (ตารางระบุช่วงเวลาของ Dr. Nora Silva คือ 5:30–8:00 P.M. ต่างจากคนอื่น 5:00)'],
      ['Triple · Detail', 'Why does Kevin ask cleanly for Thursday evening rather than Monday?', ['Monday architectural team print critiques keep him at work until 7:00 P.M.', 'Clinic evening hours launch strictly Thursdays cleanly', 'Room 304 conducts ankle rehab Mondays', 'Trains skip Midtown on Mondays cleanly'], 0, 'ตอบ Monday architectural team print critiques... (works late Mondays during print critiques until 7:00 P.M.)'],
      ['Triple · Detail', 'Which therapist treats athletic runner ankle injuries cleanly?', ['Dr. Ben Kwon', 'Dr. Anita Patel', 'Dr. Nora Silva', 'Kevin Alvarez'], 0, 'ตอบ Dr. Ben Kwon (Running Knee & Ankle Rehab in Room 303)'],
      ['Triple · Inference', 'When did Midtown Wellness’s late 8:00 P.M. operating schedule begin?', ['May 1', 'April 28', 'May 2', 'Late last winter'], 0, 'ตอบ May 1 (Starts May 1)'],
    ]),

    p7(13, 'm13-t3', [
      doc('notice', 'GreenLine Express — Electronic Bus Ticket & Baggage Terms', [['Service', 'Boston – Portland Intercity Coaches']],
        [
          lst([
            'Passengers carry 1 overhead duffel + 1 under-coach checked suitcase (max 23 kg) COMPLETELY FREE per boarding pass.',
            'Additional checked bulky boxes or bicycles carry $15 space tags bought online ahead of departure ($25 if bought curbside from coach drivers!).',
            'Pets under 9 kg inside ventilated solid floor-fit carriers ride smoothly aboard cleanly with $20 pet boarding stickers.',
          ]),
        ]),
      doc('invoice', 'GreenLine E-Ticket Receipt #GL-6629',
        [['Traveler', 'Hannah Wu'], ['Departure', 'Sunday, July 7 · 9:15 A.M. (Gate 4, South Terminal)']],
        [
          'Passenger Ticket (Boston -> Portland): $29.00 · Add-Ons Paid Online: 1 × Folding Bicycle Space Tag ($15.00). Total Charged: $44.00.',
        ]),
      doc('chat', 'Coach Support Chat', [['Between', 'Hannah Wu & Agent Sam'], ['Date', 'July 7 · 8:40 A.M.']],
        [
          chat([
            ['Hannah Wu', '8:40 A.M.', 'Morning! Standing nicely by Gate 4 holding Ticket #GL-6629 + my folded bike tag AND one standard 18 kg checked suitcase plus a tiny shoulder backpack. Quick favor—my sister just handed me a large 12 kg sealed cardboard box of winter books cleanly at the curb! Since my suitcase stays light cleanly at 18 kg, does adding one extra 12 kg cardboard box count under my 1-bag free allowance cleanly or cost extra at curbside?'],
            ['Agent Sam', '8:44 A.M.', 'Glad you asked quickly! Every ticket allows strictly ONE free under-coach suitcase (your 18 kg bag!) plus ONE small overhead backpack—additional extra boxes cleanly carry a $25 curbside fee bought right at the bus cargo bay cleanly before rolling bags onto Coach 4!'],
          ]),
        ]),
    ], [
      ['Triple · Synthesis', 'How much total fee will Hannah owe at curbside to load the extra 12 kg cardboard book box onto Gate 4?', ['$25', '$15', '$0 (Free since luggage totals under 35 kg)', '$20'], 0, 'ตอบ $25 (ใช้สิทธิ์กระเป๋าโหลดฟรี 1 ใบ 18 kg ไปแล้ว ชิ้นส่วนกล่องเพิ่มที่หน้าประตูรถโค้ชต้องจ่ายราคา curbside $25 แทน $15 ออนไลน์)'],
      ['Triple · Math', 'How much did Hannah SAVE earlier by adding her Bicycle Space Tag online ($15) instead of waiting cleanly until curbside boarding?', ['$10', '$15', '$25', '$5'], 0, 'ตอบ $10 (ราคาออนไลน์ $15 เทียบหน้าประตูรถ $25 -> ประหยัด $10)'],
      ['Triple · Synthesis', 'Why could Hannah NOT put her small shoulder backpack as checked box #2 free?', ['Overhead bags count separately from the single free checked under-coach bag slot', 'Bicycles occupy overhead racks cleanly', 'Books exceed 9 kg limits', 'Coach 4 restricts passengers to backpacks'], 0, 'ตอบ Overhead bags count separately... (Free = 1 ชิ้นบนรถ + 1 กระเป๋าโหลดใต้ท้องรถเท่านั้น กล่องที่เพิ่มถือเป็นชิ้นพิเศษ)'],
      ['Triple · Detail', 'Where does Hannah’s bus depart from at 9:15 A.M.?', ['Gate 4, South Terminal in Boston', 'Portland Main Station cleanly', 'Coach Desk 15', 'Cargo Bay B'], 0, 'ตอบ Gate 4, South Terminal in Boston'],
      ['Triple · Inference', 'Under GreenLine terms, what would a passenger traveling ONLY with a tiny 5 kg terrier inside an approved floor carrier pay ON TOP of a $29 ticket cleanly?', ['$20', '$15', '$25', '$0'], 0, 'ตอบ $20 ($20 pet boarding stickers for pets under 9 kg cleanly)'],
    ]),

    // ══════════════════ SET 14 (Q147–Q200: 54 Qs) ══════════════════
    p7(14, 'm14-s1', [
      doc('email', 'E-mail Message',
        [['To', 'All Lab Researchers'], ['From', 'Central Safety Desk'], ['Date', 'April 3'], ['Subject', 'Compressed Gas Cylinder Deliveries']],
        [
          'CryoGas delivery drivers swap tall steel nitrogen tanks cleanly strictly along North Receiving Bay 3 between 7:00 A.M. and 10:00 A.M. Tuesdays and Fridays cleanly.',
          'Remember rolling steel safety caps cleanly tightly over brass tank valves cleanly prior to moving wheeled cylinder carts down main corridors.',
        ]),
    ], [
      ['Single · Detail', 'On which days do nitrogen tank deliveries arrive cleanly?', ['Tuesdays and Fridays', 'Mondays and Thursdays', 'Weekdays every afternoon', 'Strictly Wednesdays'], 0, 'ตอบ Tuesdays and Fridays'],
      ['Single · Safety', 'What precautionary step must lab staff take before wheeling tanks inside hallways?', ['Twist steel safety caps tightly atop valve stems', 'Clear North Receiving Bay 3 carts hourly', 'Check nitrogen purity charts beforehand', 'Switch elevators to passenger priority'], 0, 'ตอบ Twist steel safety caps tightly... (rolling steel safety caps tightly over brass valves prior to moving)'],
    ]),

    p7(14, 'm14-s2', [
      doc('notice', 'Oakwood Public Market — Electric Bike Free Valet Lot', [['Hours', 'Sat–Sun · 8:00 A.M.–4:00 P.M.']],
        [
          'Skipping downtown parking meter hunts just got simpler cleanly! Park bicycles, cargo trailers, OR commuter scooters completely FREE beside Entrance Plaza South cleanly under staffed guarded bike corrals every weekend.',
          'Present claimed yellow numbered paper stub tags upon exiting cleanly—unclaimed bikes lock inside indoor storage sheds after 4:30 P.M.',
        ]),
    ], [
      ['Single · Detail', 'What happens to bicycles left past closing time at 4:30 P.M.?', ['Valet guards lock them safely inside indoor storage sheds', 'Municipal tow vans impound unclaimed carts', 'Weekend corrals stay guarded overnight cleanly', 'Exit stubs require $10 fines smoothly'], 0, 'ตอบ Valet guards lock them safely... (unclaimed bikes lock inside indoor storage sheds after 4:30 P.M.)'],
      ['Single · Detail', 'How much does weekend valet bicycle parking cost shoppers?', ['Nothing (Free)', '$2 per hour', '$5 flat tag', '$10 with cargo trailers'], 0, 'ตอบ Nothing (completely FREE cleanly)'],
    ]),

    p7(14, 'm14-s3', [
      doc('chat', 'Event Hospitality Chat', [['Channel', '#gala-banquet'], ['Date', 'September 28']],
        [
          chat([
            ['Martin Reyes', '5:10 P.M.', 'Setting salad forks cleanly across Table 14 right now! Chef Marco asks cleanly how many strict gluten-free dinners appeared on RSVP slips tonight so plating labels match?'],
            ['Nora Sato', '5:14 P.M.', 'Pulling up master Excel seating log right now—Wait... counts updated just at 3:00 P.M.: five gluten-free mushroom risottos AND three vegan lentil bowls! Tables 4, 9, and 14 cleanly!'],
            ['Martin Reyes', '5:18 P.M.', 'Got it! Writing neat bright green card flags cleanly directly beside seat cards for Tables 4, 9, and 14 so servers never miss dietary plates!'],
            ['Nora Sato', '5:21 P.M.', 'Super clean system! Guests walk cleanly inside doors right at 6:00 P.M.'],
          ]),
        ]),
    ], [
      ['Single · Detail', 'How many special dietary meals IN TOTAL (gluten-free plus vegan) does Nora list at 5:14 P.M.?', ['Eight special meals total', 'Five special meals total', 'Three special meals total', 'Fourteen special meals total'], 0, 'ตอบ Eight special meals total (5 gluten-free mushroom risottos + 3 vegan lentil bowls = 8 จาน)'],
      ['Single · Action', 'How does Martin help servers spot special dietary seats accurately?', ['Placing bright green marker cards beside those guest seat settings', 'Texting Chef Marco exact floor charts cleanly', 'Separating vegan diners onto Table 14', 'Serving risotto trays at 5:30 P.M.'], 0, 'ตอบ Placing bright green marker cards... (Writing neat bright green card flags beside seat cards)'],
      ['Single · Detail', 'At what hour are banquet guests expected to enter?', ['At 6:00 P.M.', 'At 3:00 P.M.', 'At 5:10 P.M.', 'At 5:21 P.M.'], 0, 'ตอบ At 6:00 P.M. (Guests walk cleanly inside doors right at 6:00 P.M.)'],
    ]),

    p7(14, 'm14-s4', [
      doc('table', 'ClearPath Self-Storage — Climate-Controlled Downtown Units', [['Bonus', 'First Month Half-Price on 6-Month Leases']],
        [
          tbl(
            ['Unit Code', 'Floor Area', 'Ideal Contents', 'Monthly Rent', 'Elevator Bay Proximity'],
            [
              ['Locker S', '1.5 × 1.5 m', 'Archive boxes, holiday skis', '$64', '30m down Corridor B'],
              ['Studio M', '3.0 × 2.5 m', '1-bedroom apartment furniture', '$128', 'Right beside Freight Lift'],
              ['Vault L', '3.0 × 5.0 m', 'Retail fixture stock, pallet racks', '$220', 'Direct Drive-Up Bay'],
            ]),
          'Humidity kept stably between 40–50% cleanly year-round across ALL lockers!',
        ]),
    ], [
      ['Single · Detail', 'Which unit size allows trucks to pull directly up beside storage doors without lifting hallways?', ['Vault L', 'Studio M', 'Locker S', 'Corridor B units'], 0, 'ตอบ Vault L (Elevator Bay Proximity: Direct Drive-Up Bay)'],
      ['Single · Math', 'How much total rent does a student signing a 6-Month Lease on Locker S pay specifically for MONTH ONE?', ['$32', '$64', '$384', '$48'], 0, 'ตอบ $32 (โบนัส First Month Half-Price on 6-Month Leases -> $64 ÷ 2 = $32 สำหรับเดือนแรก)'],
      ['Single · Feature', 'Which unit sizes maintain steady 40–50% indoor climate humidity?', ['All three unit sizes cleanly', 'Strictly Vault L and Studio M', 'Locker S units near skis cleanly', 'Only upper Freight Lift bays'], 0, 'ตอบ All three unit sizes cleanly (across ALL lockers!)'],
    ]),

    p7(14, 'm14-s5', [
      doc('review', 'Verified Shopper Feedback — SwiftKettle Electric Gooseneck', [['Buyer', 'David Alvarez · Coffee Enthusiast']],
        [
          'Review: "Pouring boiling water down delicate narrow matcha whisk bowls cleanly without splashing felt effortless cleanly thanks to SwiftKettle’s crisp weighted flow restrictor spout! Built-in hold-temp kept 85°C stably across thirty quiet minutes smoothly. Minor grip quirk: smooth matte plastic base touch controls occasionally fail registering wet dish-washed fingertips cleanly unless dried briefly first."',
          'Manufacturer Reply: "Appreciate that balanced honest insight cleanly, David! Our engineers just coated 2026 capacitive base glass cleanly with hydrophobic droplets shielding wet kitchen taps smoothly—also remember quick towel wipes trigger crisp instant taps cleanly!"',
        ]),
    ], [
      ['Single · Praise', 'What design feature helped David pour water steadily without splashes?', ['Its weighted curved flow-restrictor spout cleanly', 'Quiet hydrophobic touch glass base', 'Boil speeds under thirty seconds cleanly', 'Oversized stainless matcha whisk trays'], 0, 'ตอบ Its weighted curved flow-restrictor spout... (weighted flow restrictor spout)'],
      ['Single · Problem', 'When do touch controls along the kettle base sometimes fail to respond?', ['When touched with wet fingertips right after washing dishes', 'Whenever water warms above 85°C cleanly', 'After sitting thirty minutes on hold-temp', 'During steep matcha bowl pours'], 0, 'ตอบ When touched with wet fingertips... (fail registering wet dish-washed fingertips cleanly unless dried first)'],
      ['Single · Detail', 'How did SwiftKettle improve its upcoming 2026 manufacturing batch?', ['Applied moisture-resistant coating across base touch glass', 'Added raised mechanical click toggles cleanly', 'Shortened weighted gooseneck spouts cleanly', 'Dropped hold-temp timers below ten minutes'], 0, 'ตอบ Applied moisture-resistant coating... (coated capacitive base glass cleanly with hydrophobic droplets)'],
    ]),

    p7(14, 'm14-s6', [
      doc('article', 'Neighborhood Hardware Chain Launches Tool Repair Benchmarks vs Replacement Waste', [['Journal', 'Pacific Circular Commerce']],
        [
          'Big-box discount hardware chains routinely toss cracked lawnmower starters and noisy circular saw brushes straight into scrap dumpsters simply because ordering single $6 carbon motor blocks takes longer than slapping retail refund credit stickers onto whole boxes.',
          'Northwest co-op BuildRight Hardware overturned that throwaway habit cleanly across fourteen neighborhood branches cleanly by opening bright storefront Fix-It Workbenches stocked cleanly with 2,000 tiny brass springs, switches, and replacement cords. Fixing customers’ broken drills cleanly at flat $25 labor rates keeps over twelve tons of copper motor windings working smoothly annually cleanly while earning enthusiastic loyal foot traffic cleanly.',
        ]),
    ], [
      ['Single · Contrast', 'How does BuildRight differ from major discount hardware warehouses cleanly regarding faulty tools?', ['It fixes broken tools cheaply in-house instead of scrapping whole units cleanly', 'It bans selling corded circular saws cleanly', 'It ships broken tools overseas cleanly to factories', 'It lowers flat retail refund prices sharply cleanly'], 0, 'ตอบ It fixes broken tools cheaply... (opening Fix-It Workbenches fixing at flat $25 instead of tossing into dumpsters)'],
      ['Single · Detail', 'How much labor fee does BuildRight charge customers to repair tools at Fix-It Workbenches?', ['$25 flat rate', '$6 flat rate', '$12 per pound', '$14 per spring'], 0, 'ตอบ $25 flat rate (flat $25 labor rates)'],
      ['Single · Vocab', 'The word "overturned" in paragraph 2 is closest in meaning to ___.', ['reversed', 'repeated', 'postponed', 'ignored'], 0, 'ตอบ reversed (overturned that throwaway habit = เปลี่ยน/ล้มเลิกพฤติกรรมทิ้งขว้างเดิม)'],
    ]),

    p7(14, 'm14-s7', [
      doc('ad', 'Careers — Customer Onboarding Educator (Veritas Cloud Billing)', [['Mode', 'Remote (Pacific / Mountain Time Zones)']],
        [
          'Help busy accounting firms ditch clunky messy desktop spreadsheets smoothly forever! [1] As Customer Onboarding Educator, you will lead crisp interactive live Zoom cohorts for 15 newly enrolled bookkeepers cleanly weekly, author short 3-minute screen-capture walk-through clips, and simplify technical jargon cleanly into memorable everyday tips.',
          'Requirements:',
          lst([
            'Two years teaching software workflows, hosting webinar demos, or writing product help centers',
            'Warm clear microphone delivery cleanly maintaining energetic group engagement on video',
            'Familiarity cleaning client balance sheets cleanly or basic bookkeeping vocabulary',
          ]),
          '[2] Remote stipend ($1,000 home office build-out), full benefits, and generous Friday wellness half-days come cleanly standard! [3] Send resume plus a crisp 90-second audio/video clip teaching any spreadsheet shortcut to jobs@veritascloud.io cleanly by May 17. [4]',
        ]),
    ], [
      ['Single · Detail', 'Which geographic scheduling constraint applies to this remote role?', ['Living or working within Pacific or Mountain time zones cleanly', 'Relocating onto Downtown Seattle offices cleanly', 'Hosting midnight European customer calls', 'Monthly travel across fifty bookkeepers'], 0, 'ตอบ Living or working within Pacific or Mountain time zones... (Mode: Remote · Pacific / Mountain Time Zones)'],
      ['Single · Requirement', 'What sample material must applicants submit alongside their resume?', ['A brief 90-second recording explaining any spreadsheet tip cleanly', 'Sample printed corporate balance sheets cleanly', 'Two signed accounting audit reviews cleanly', 'Proof of $1,000 home desk setups'], 0, 'ตอบ A brief 90-second recording... (90-second audio/video clip teaching any spreadsheet shortcut)'],
      ['Single · Detail', 'What perk helps new hires set up their home desk?', ['A $1,000 remote workstation stipend', 'Free accounting client billing plans cleanly', 'Guaranteed Monday holidays monthly cleanly', 'Travel reimbursement checks annually'], 0, 'ตอบ A $1,000 remote workstation stipend ($1,000 home office build-out)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Experience recording Loom or Camtasia screen demos accelerates ramp-up nicely."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจาก Requirements ทันที เพื่อเสริมทักษะซอฟต์แวร์อัดหน้าจอ ก่อนเข้าสู่หัวข้อสวัสดิการ)'],
    ]),

    p7(14, 'm14-s8', [
      doc('memo', 'Museum Textile Gallery — Loan Handling & Crate Security Protocol', [['From', 'Chief Registrar Elena Vance'], ['To', 'Visiting Courier Escorts']],
        [
          'Fragile 18th-century woven silk tapestries arriving Monday onboard climate-air-ride museum vans enter Vault B solely under dual-curator witness logs.',
          'Escort Steps:',
          lst([
            'Wait cleanly inside padded Staging Vestibule 24 full hours before unscrewing sealed wooden museum crate lids so silk fibers match indoor room humidity slowly.',
            'Wear powder-free cotton OR nitrile archival gloves anytime lifting acid-free tissue trays.',
            'Steel security cameras monitor Crate Seals uninterruptedly until condition photo inspections sign off cleanly.',
          ]),
        ]),
    ], [
      ['Single · Cause', 'Why do museum crates sit untouched inside Staging Vestibule for a full 24 hours before opening?', ['So delicate silk threads adjust slowly to gallery indoor humidity cleanly', 'Curators clean powder-free tools Mondays cleanly', 'Security cameras require 24 hours calibration cleanly', 'Air-ride vans unpack steel pallets slowly'], 0, 'ตอบ So delicate silk threads adjust slowly... (wait 24 full hours before unscrewing lids so silk fibers match indoor room humidity slowly)'],
      ['Single · Detail', 'Who must be present when tapestries actually move into Vault B?', ['Two museum curators witnessing together', 'Strictly delivery truck drivers alone', 'Local art student photographers cleanly', 'Municipal building painters'], 0, 'ตอบ Two museum curators witnessing together (solely under dual-curator witness logs)'],
      ['Single · Safety', 'What hand protection is mandatory when handling tissue trays?', ['Clean powder-free cotton or archival nitrile gloves', 'Heavy leather dock work gloves cleanly', 'Bare sanitized dry hands', 'Steel mesh sleeve guards'], 0, 'ตอบ Clean powder-free cotton or archival nitrile gloves'],
      ['Single · Vocab', 'The word "uninterruptedly" in step 3 means ___.', ['continuously without pause', 'brightly under spotlights', 'loudly cleanly', 'only overnight'], 0, 'ตอบ continuously without pause (อย่างต่อเนื่องไม่ขาดสาย)'],
    ]),

    p7(14, 'm14-s9', [
      doc('article', 'Smart Traffic Loops Give Downtown Delivery Bicycles Green-Wave Priority', [['By', 'Leo Romero'], ['Publication', 'European Mobility Notes']],
        [
          'Cargo-bike couriers hauling warm lunch boxes or urgent clinic pathology slides across crowded downtown boulevards routinely stall repeatedly at red-light intersections timed solely around fast four-lane morning commuter car speeds. [1] Frequent heavy dead-stops burn legs exhaustedly upward along slick cobble hills while pushing riders tightly against impatient bus lanes.',
          'Urban planners across Copenhagen recently inverted intersection priority cleanly along twelve busy cross-town bicycle express corridors using subtle under-asphalt copper induction radar pads mounted smoothly sixty meters ahead of traffic signals. [2] Whenever three or more commuters roll cleanly across sensors at crisp 20 km/h speeds during heavy rain gusts or morning rushes, smart roadside cabinets stretch approaching green signals smoothly for five crucial extra seconds cleanly.',
          '"Eliminating sudden frustrating yellow-light sprints let morning cargo deliveries hold steady rhythms safely without tempted riders beating red signals recklessly," celebrates urban cycling coordinator Astrid Lind. [3] Drivers crossing intersecting side lanes rarely notice minor three-second waits since software balances delays smoothly across quiet off-peak gaps cleanly.',
          'Following zero morning corridor collisions across six winter trial months, municipal councils cleared budget adding green-wave induction pads onto eight outer ring-road school bike lanes cleanly this autumn. [4]',
        ]),
    ], [
      ['Single · Purpose', 'What problem does Copenhagen’s green-wave sensor system tackle cleanly?', ['Repeated exhausting red-light stops hurting bike commuters and urban cargo efficiency', 'Heavy morning traffic jams inside bus garages', 'Car drivers speeding across cobblestone lanes cleanly', 'Wet asphalt slipping electric scooter tires'], 0, 'ตอบ Repeated exhausting red-light stops... (couriers routinely stall repeatedly at lights timed solely for cars -> green-wave cuts stops and risky red runs)'],
      ['Single · Detail', 'How does the system detect approaching bike riders ahead of intersections cleanly?', ['Subsurface copper radar pads sit sixty meters before traffic signals', 'Overhead intersection cameras track neon helmets', 'Smartphone GPS apps transmit bicycle speeds cleanly', 'Drivers push roadside crosswalk buttons'], 0, 'ตอบ Subsurface copper radar pads sit sixty meters before signals (under-asphalt copper induction radar pads mounted cleanly 60 meters ahead)'],
      ['Single · Inference', 'Why did bicycle accident counts remain clean at zero during six winter trial months?', ['Giving cyclists steady green waves reduced stressful unsafe yellow-light dashing', 'Side street cars stopped driving downtown during winter', 'Twenty km/h speed limits banned cargo bikes cleanly', 'Copper pads melt wet snow off intersections'], 0, 'ตอบ Giving cyclists steady green waves reduced... (without tempted riders beating red signals recklessly)'],
      ['Single · Vocab', 'The word "tempted" in paragraph 3 is closest in meaning to ___.', ['inclined or enticed', 'forbidden firmly', 'exhausted completely', 'delayed repeatedly'], 0, 'ตอบ inclined or enticed (without tempted riders beating red signals = โดยไม่ต้องถูกชวนให้ฝ่าไฟแดงอย่างเสี่ยงๆ)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Small roadside illuminated green-arrow pylons even flash steady target pacing cleanly so groups coast smoothly onto every clear green light."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (รายละเอียดหน้างานของสัญญาณไฟเสริมต่อเนื่องจากการตรวจจับความเร็ว 20 km/h ก่อนหน้า 60 เมตร)'],
    ]),

    p7(14, 'm14-d1', [
      doc('ad', 'ClearSound Meeting Pods — Office Acoustic Booth Lease Tiers', [['Service', '12-Month & 24-Month Corporate Plans']],
        [
          tbl(
            ['Pod Unit', 'Occupancy', 'Power & Fresh Air', '24-Mo Monthly Lease', '12-Mo Monthly Lease'],
            [
              ['EchoPhone S', '1 person', 'Dual AC/USB + Motion Fan', '$240 / mo', '$290 / mo'],
              ['HuddleDuo M', '2 people', 'Monitor Arm + Quiet Fan', '$390 / mo', '$460 / mo'],
              ['TeamRoom L', '4 people', 'Table + Ceiling Audio Bar', '$680 / mo', '$790 / mo'],
            ]),
          'Delivery & Inside Elevator Placement: $250 flat per unit (Waived FREE when leasing 3+ pods simultaneously cleanly on 24-month contracts!).',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'leases@clearsoundpods.com'], ['From', 'Tomás Alvarez (Ops Director · BrightCode)'], ['Date', 'July 3'], ['Subject', 'Floor 7 Quiet Zone Booths Quote Check']],
        [
          'Hi Lease Crew,',
          'Expanding our downtown engineering floor cleanly! Since open standups make private 1-on-1 performance chats and quiet candidate video screens tough near desks, we plan ordering THREE EchoPhone S single-person booths PLUS ONE HuddleDuo M two-person pod (4 pods total!) cleanly under a solid 24-Month Corporate Plan cleanly.',
          'Wait—confirming cleanly that all 4 pods together sit under ONE flat 24-month contract waving ALL delivery & freight elevator placement fees cleanly ($0 setup)? Ready to countersign cleanly Monday morning!',
          'Thanks!\nTomás Alvarez',
        ]),
    ], [
      ['Double · Math', 'Calculate BrightCode’s exact TOTAL MONTHLY lease payment for ALL 4 booths under their 24-Month Plan:', ['$1,110 / mo', '$1,330 / mo', '$1,360 / mo', '$1,450 / mo'], 0, 'ตอบ $1,110 / mo (3 × EchoPhone S $240 = $720 + 1 × HuddleDuo M $390 = $1,110/เดือน)'],
      ['Double · Synthesis', 'Will BrightCode owe ANY delivery & elevator placement charges ($250/unit)?', ['No, leasing 3+ pods together on 24-month terms waives delivery completely ($0)', 'Yes, $1,000 applies because HuddleDuo skips 3-unit EchoPhone counts', 'Only EchoPhone S waives elevator fees', 'Wait—yes, 12-month delivery charges apply cleanly'], 0, 'ตอบ No, leasing 3+ pods together on 24-month terms waives delivery ($0) (สั่ง 4 ตัวบนสัญญา 24 เดือน >= เกณฑ์ 3+ pods ได้ฟรีค่าจัดส่ง)'],
      ['Double · Detail', 'Why does BrightCode want acoustic booths on Floor 7?', ['Private employee reviews and quiet recruiting calls get disrupted by open-floor standups', 'Engineers need extra conference monitor rooms cleanly', 'Building elevators vibrate near corner desks', 'Twenty-four month leases beat buying new cubicles'], 0, 'ตอบ Private employee reviews and quiet recruiting calls... (1-on-1 performance chats and candidate screens tough near open standups)'],
      ['Double · Detail', 'Which unit size did Tomás NOT include in his 4-pod request?', ['TeamRoom L (4 people)', 'EchoPhone S', 'HuddleDuo M', 'Single-seat pods'], 0, 'ตอบ TeamRoom L (สั่งเฉพาะ 3× EchoPhone S + 1× HuddleDuo M)'],
      ['Double · Inference', 'How much total monthly cost did BrightCode SAVE per month by locking a 24-Month Lease instead of 12-Month terms across those 4 pods?', ['$220 / mo', '$150 / mo', '$70 / mo', '$250 / mo'], 0, 'ตอบ $220 / mo (12-Month จะเป็น 3×$290 + $460 = $1,330; ลดจาก $1,330 ลงมา $1,110 = ประหยัด $220/เดือน!)'],
    ]),

    p7(14, 'm14-d2', [
      doc('notice', 'Greenfield Transit — Monthly Commuter Pass SmartCard Exchange Rules', [['Effective', 'August 1']],
        [
          lst([
            'Faded legacy paper magnetic rail passes retire permanently cleanly August 31—riders must swap straight onto green tap-only RFID SmartCards beforehand.',
            'Present paper pass + valid photo ID cleanly at ANY Downtown Hub Desk for FREE instant SmartCard balance transfer (no $5 plastic card issuance fee!).',
            'Waiting past August 31 forfeits paper magnetic swipes at gates, though customer centers keep transferring leftover dollar balances smoothly through October 31 cleanly FOR A $5 replacement card charge.',
          ]),
        ]),
      doc('email', 'E-mail Message',
        [['To', 'cards@greenfieldtransit.org'], ['From', 'Mia Navarro'], ['Date', 'September 4'], ['Subject', 'Expired Paper Commuter Pass Balance Transfer']],
        [
          'Hello Customer Care,',
          'I completely missed returning back from August summer family travel until September 2! Tapping my old blue magnetic paper monthly commuter rail pass carrying $38 unused train credit at North Station Gate this morning understandably rejected cleanly with an "Expired Card" beep cleanly.',
          'Hoping all $38 remaining credit stays totally recoverable cleanly! Since August 31 just passed four days ago, do I drop by Downtown Hub Desk tomorrow morning cleanly paying ONLY the $5 plastic SmartCard fee so my remaining $38 loads cleanly straight onto a brand-new tap RFID card?',
          'Appreciatively,\nMia Navarro',
        ]),
    ], [
      ['Double · Synthesis', 'Based on August 1 rules, can Mia recover her remaining $38 rail balance cleanly on September 5?', ['Yes—she can transfer the $38 onto a new RFID SmartCard by paying the $5 card issuance fee until October 31', 'No, all paper rail balances zeroed out permanently August 31', 'Yes—transfers stay completely $0 free all autumn through October 31', 'Only North Station ticket machines refund September credits cleanly'], 0, 'ตอบ Yes—she can transfer the $38... by paying the $5 card fee (เลย 31 ส.ค. มาแล้วแต่ยังไม่เกิน 31 ต.ค. จึงโอนยอดเงิน $38 ได้ โดยเสียค่าออกบัตรใหม่ $5)'],
      ['Double · Math', 'After paying the $5 card issuance fee cleanly to receive her new RFID SmartCard with $38 loaded, what is Mia’s net balance benefit compared to buying a fresh empty $5 SmartCard + adding $38 new money ($43)?', ['Saves $38 cleanly (only pays $5 issuance instead of forfeiting $38)', 'Loses $38 cleanly', 'Pays $43 extra penalty', 'Owes $10 administrative surcharge'], 0, 'ตอบ Saves $38 cleanly (ได้รับยอดเงินเดิม $38 คืนครบ เพียงจ่ายค่าออกบัตรพลาสติก $5 แทนที่จะเสียเงิน $38 ไปเปล่าๆ)'],
      ['Double · Detail', 'Why did Mia miss switching cards before the free August 31 deadline?', ['She was away on summer family travel until September 2', 'North Station turnstiles closed cleanly in August', 'She lacked valid photo identification cards', 'Paper cards continued opening gates cleanly Tuesday'], 0, 'ตอบ She was away on summer family travel... (missed returning back from August family travel until September 2)'],
      ['Double · Detail', 'Where must Mia go in person cleanly to transfer her paper credit?', ['Any Downtown Hub Desk', 'North Station magnetic gate cleanly', 'Online commuter wallet website cleanly', 'Rail coach driver window'], 0, 'ตอบ Any Downtown Hub Desk'],
      ['Double · Inference', 'When would Mia permanently lose the ability to transfer her old $38 paper pass balance?', ['After October 31', 'Immediately on September 1', 'After August 15', 'Before September 4'], 0, 'ตอบ After October 31 (keep transferring leftover dollar balances smoothly through October 31)'],
    ]),

    p7(14, 'm14-t1', [
      doc('ad', 'BrightDesk Custom Framing — Museum UV Glass Promotions', [['Shop', '310 Oak Avenue']],
        [
          tbl(
            ['Standard Frame Size', 'Matte Walnut Frame', 'Brushed Silver Metal', '99% UV Acrylic Upgrade'],
            [
              ['40 × 50 cm (Poster)', '$85', '$75', '+$25'],
              ['60 × 80 cm (Gallery)', '$135', '$118', '+$40'],
              ['80 × 100 cm (Oversized)', '$195', '$170', '+$60'],
            ]),
          'Bring two or more pieces cleanly under ONE order ticket to claim 20% off total framing & UV upgrades cleanly!',
        ]),
      doc('chat', 'Design Team Studio Chat', [['Channel', '#lobby-art'], ['Date', 'June 18']],
        [
          chat([
            ['Elena Kim', '10:15 A.M.', 'Framing BOTH our founder’s vintage 60×80 cm architectural drawing AND our colorful 40×50 cm patent silkscreen for sunlit Lobby Reception!'],
            ['Samir Brooks', '10:19 A.M.', 'Awesome, direct afternoon lobby sunshine fades ink super fast without UV protection—add 99% UV Acrylic cleanly onto BOTH frames cleanly AND match sleek Matte Walnut moldings nicely with Lobby oak reception desks! Remember framing both under one order unlocks that 20% multi-piece deal cleanly!'],
          ]),
        ]),
      doc('invoice', 'BrightDesk Framing Ticket #BF-902',
        [['Customer', 'NorthStar Design Lab'], ['Date', 'June 18 · Ready Date: June 26']],
        [
          'Piece 1: 60 × 80 cm Matte Walnut ($135) + 99% UV Acrylic ($40) = $175.',
          'Piece 2: 40 × 50 cm Matte Walnut ($85) + 99% UV Acrylic ($25) = $110.',
          'Order Subtotal: $285.00 · Multi-Piece Discount (-20%): -$57.00 · Net Paid: $228.00.',
        ]),
    ], [
      ['Triple · Synthesis', 'Why did NorthStar Design Lab pick 99% UV Acrylic upgrades cleanly for BOTH Lobby artworks?', ['Direct lobby afternoon sunshine would otherwise fade artwork colors rapidly', 'Only Matte Walnut frames require acrylic cleanly', 'UV acrylic lowers multi-piece totals cleanly below $200', 'Glass sheets shatter inside oak reception desks'], 0, 'ตอบ Direct lobby afternoon sunshine would otherwise fade... (direct afternoon lobby sunshine fades ink super fast without UV protection)'],
      ['Triple · Math', 'Verify the exact dollar savings NorthStar earned from ordering BOTH frames on ONE receipt instead of separate trips:', ['$57.00', '$65.00', '$45.00', '$28.50'], 0, 'ตอบ $57.00 (20% ของ $285.00 = $57.00 ทำให้ยอดสุทธิลดเหลือ $228.00)'],
      ['Triple · Detail', 'Why did Samir select Matte Walnut framing over Brushed Silver Metal?', ['Walnut wood matches the oak reception desks inside Lobby Reception', 'Silver metal bans UV acrylic covers cleanly', 'Walnut frames finish faster than metal cleanly', 'Silver frames cap sizes cleanly at 40×50 cm'], 0, 'ตอบ Walnut wood matches oak reception desks... (match sleek Matte Walnut moldings nicely with Lobby oak reception desks)'],
      ['Triple · Inference', 'How much would framing Piece 1 ALONE (60 × 80 cm Brushed Silver Metal + 99% UV Acrylic cleanly) have cost without multi-piece discounts?', ['$158', '$175', '$118', '$126.40'], 0, 'ตอบ $158 ($118 Silver Metal + $40 UV Acrylic = $158 และไม่มีส่วนลด 20% เพราะส่งกรอบเดียว)'],
      ['Triple · Detail', 'When can NorthStar collect the finished framed artwork?', ['June 26', 'June 18', 'July 1', 'Immediately same day'], 0, 'ตอบ June 26 (Ready Date: June 26)'],
    ]),

    p7(14, 'm14-t2', [
      doc('article', 'Westport Culinary Fair Opens Artisan Cheese & Honey Tasting Pavilion', [['Location', 'Pier 3 Pavilion · Aug 9–11']],
        [
          'Thirty small-batch cheesemakers, raw honeycomb apiaries, and cider press orchards open sampling counters inside Pier 3 Pavilion Aug 9–11! Timed entry tokens control tasting corridor crowds smoothly—guests holding tasting wristbands get souvenir glass tumblers cleanly at Desk A.',
        ]),
      doc('table', 'August 10 Saturday Chef Pairing Stage Passes (Pier 3 Room B)', null, [
        tbl(
          ['Session Slot', 'Time', 'Tasting Pairing', 'Host Educator', 'Seats Left'],
          [
            ['Pair 1', '11:00 A.M.', 'Alpine Aged Gouda + Wildflower Honey', 'H. Weber', '6 seats left'],
            ['Pair 2', '1:30 P.M.', 'Dry Pear Cider + Farmhouse Cheddar', 'M. Diaz', 'Sold Out'],
            ['Pair 3', '3:30 P.M.', 'Buckwheat Honeycomb + Blue Stilton', 'C. Sato', '11 seats left'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'tickets@westportculinary.org'], ['From', 'Owen Patel'], ['Date', 'August 3'], ['Subject', 'Saturday Afternoon Tasting Stage Question']],
        [
          'Hi Fair Desk,',
          'Bought two general Pier 3 weekend wristbands cleanly for my wife and me to visit Saturday August 10! Note that our train arrives downtown strictly at 12:45 P.M. cleanly, meaning morning 11:00 A.M. sessions run cleanly too early for us. Looking at afternoon Chef Pairing Room B tables, Pair 2 (1:30 P.M.) already shows Sold Out online—can you lock TWO spots cleanly into C. Sato’s 3:30 P.M. afternoon honey & Stilton tasting instead, OR let us join a 1:30 P.M. cancellation waitlist cleanly?',
          'Also, do souvenir glass tumblers come automatically with weekend wristbands at Desk A?',
          'Cheers,\nOwen Patel',
        ]),
    ], [
      ['Triple · Synthesis', 'Which Saturday Pairing Stage class has plenty of room available for Owen’s group after his 12:45 P.M. train lands?', ['Pair 3 (Buckwheat Honeycomb + Blue Stilton at 3:30 P.M.)', 'Pair 1 (Alpine Aged Gouda at 11:00 A.M.)', 'Pair 2 (Dry Pear Cider at 1:30 P.M.)', 'Morning honey tasting cleanly'], 0, 'ตอบ Pair 3 (Buckwheat Honeycomb + Blue Stilton at 3:30 P.M.) (รถไฟถึง 12:45 จึงไม่ทันรอบ 11:00, รอบ 1:30 เต็ม Sold Out, เหลือ 3:30 มี 11 seats left!)'],
      ['Triple · Detail', 'How should Fair Desk reply to Owen’s question regarding souvenir glass tumblers?', ['Yes—wristband holders collect souvenir glass tumblers cleanly at Desk A', 'No—tumblers belong strictly to VIP Pair 2 tickets', 'Only Buckwheat Honeycomb tastings include glassware', 'Guests buy glassware inside train terminals cleanly'], 0, 'ตอบ Yes—wristband holders collect souvenir glass tumblers cleanly at Desk A'],
      ['Triple · Detail', 'Why does Owen rule out Pair 1 automatically?', ['His train arrives at 12:45 P.M. after the 11:00 A.M. session passes cleanly', 'He dislikes Alpine Aged Gouda cheese', 'Pair 1 seats sold out cleanly online', 'H. Weber postponed Saturday talks'], 0, 'ตอบ His train arrives at 12:45 P.M. after 11:00 A.M.'],
      ['Triple · Inference', 'How many open seats would remain inside Pair 3 cleanly AFTER Owen reserves two passes?', ['Nine remaining seats', 'Zero seats', 'Eleven seats', 'Four seats'], 0, 'ตอบ Nine remaining seats (เดิม 11 seats left หักของ Owen 2 ที่ = เหลือ 9 ที่)'],
      ['Triple · Detail', 'Who teaches the 3:30 P.M. Saturday Pairing session?', ['C. Sato', 'H. Weber', 'M. Diaz', 'Owen Patel'], 0, 'ตอบ C. Sato (ตารางแถว Pair 3 -> Host: C. Sato)'],
    ]),

    p7(14, 'm14-t3', [
      doc('memo', 'NorthWind Shipping — Cold Parcel Liability & Packaging Rules', [['To', 'Merchants'], ['Policy', 'Tariff Guide Section 7']],
        [
          'Perishable bakery pastries or frozen seafood parcels insured cleanly against courier transit delays MUST satisfy THREE rules: (1) use rigid 3 cm insulated EPS foam wall liners, (2) label OUTER top flaps clearly "PERISHABLE — KEEP COOL," AND (3) drop off at airport branches Mondays–Wednesdays BEFORE 4:00 P.M. so parcels clear transit before weekend depot pauses!',
        ]),
      doc('invoice', 'NorthWind Waybill #NW-8891',
        [['Shipper', 'BayCoast Seafood Market'], ['Dropped Off', 'Thursday, May 9 · 2:15 P.M.']],
        [
          'Route: Seattle Depot -> Denver Restaurant Buyer · Weight: 14 kg Fresh Salmon Fillets.',
          'Packaging Verified: 3 cm EPS Foam Liner + Sealed Gel Ice Packs + Top Label "PERISHABLE — KEEP COOL" ✓.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'claims@northwindship.com'], ['From', 'Chef Nora Sato (Denver Buyer)'], ['Date', 'Monday, May 13'], ['Subject', 'Spoilage Refund Claim on Waybill #NW-8891']],
        [
          'Dear Claims Team,',
          'We hope NorthWind handles this smoothly! Waybill #NW-8891 shipped fresh salmon fillets neatly out from Seattle last Thursday afternoon May 9 using thick 3 cm EPS foam plus bright "PERISHABLE — KEEP COOL" top tape clearly applied. Because Friday weekend airport sorting backed up near Denver though, our carton sat warm through Sunday and arrived visibly spoiled cleanly Monday morning May 13!',
          'Please honor the transit-delay spoilage insurance refund ($310 fillet wholesale value) cleanly onto BayCoast’s merchant account.',
        ]),
    ], [
      ['Triple · Synthesis', 'Based on Tariff Guide Section 7, will NorthWind approve the $310 perishable transit-delay spoilage claim?', ['No, because BayCoast shipped on Thursday May 9 instead of Monday–Wednesday BEFORE 4:00 P.M.', 'Yes, because 3 cm EPS liners and labels satisfied all rules cleanly', 'No, because gel ice packs expired before Monday morning', 'Yes, because Seattle to Denver routes bypass weekday cutoffs'], 0, 'ตอบ No, because BayCoast shipped on Thursday May 9... (เงื่อนไขข้อ 3 บังคับส่งเฉพาะวันจันทร์–พุธก่อน 4:00 P.M. แต่ BayCoast ดันมาส่งวันพฤหัสที่ 9 พ.ค. จึงติดค้างสุดสัปดาห์และเคลมประกันไม่ได้!)'],
      ['Triple · Detail', 'Which TWO of the three mandatory perishable conditions DID BayCoast satisfy properly?', ['Thickness of 3 cm insulated EPS foam liners AND clear "PERISHABLE — KEEP COOL" outer labels', 'Shipping Monday morning AND gel pack labels cleanly', 'Wednesday cutoff AND weekend Denver delivery vans', 'Airport express boarding AND Sunday cooling holds'], 0, 'ตอบ Thickness of 3 cm insulated EPS liners AND "PERISHABLE — KEEP COOL" outer labels (Waybill ยืนยัน ✓ สองข้อนี้ แต่ผิดข้อ 3 วันส่ง!)'],
      ['Triple · Inference', 'Why does Tariff Guide Section 7 strictly restrict perishable shipments to Monday–Wednesday?', ['So deliveries arrive before weekend depot shutdowns slow sorting', 'Denver airports close cleanly Mondays–Wednesdays', 'Foam liners melt inside Thursday summer sun', 'Seafood markets close every Thursday'], 0, 'ตอบ So deliveries arrive before weekend depot shutdowns... (so parcels clear transit before weekend depot pauses!)'],
      ['Triple · Detail', 'What exact dollar compensation did Chef Nora Sato request?', ['$310', '$215', '$140', '$400'], 0, 'ตอบ $310 ($310 fillet wholesale value)'],
      ['Triple · Detail', 'At what clock time did BayCoast drop Waybill #NW-8891 off at the Seattle Depot on May 9?', ['2:15 P.M.', '4:00 P.M.', '9:00 A.M.', '5:13 P.M.'], 0, 'ตอบ 2:15 P.M. (Waybill #NW-8891 Dropped Off: Thursday, May 9 · 2:15 P.M.)'],
    ]),

    // ══════════════════ SET 15 (Q147–Q200: 54 Qs) ══════════════════
    p7(15, 'm15-s1', [
      doc('memo', 'HR Notice', [['To', 'Regional Office Staff'], ['From', 'Sustainability Lead'], ['Date', 'April 12']],
        [
          'Old empty ink toner bottles and dead desktop rechargeable mouse batteries sit inside blue E-Waste Drop Bins beside Floor 2 Elevators rather than brown breakroom landfill cans cleanly.',
          'Custodial teams ship sealed E-Waste tubs cleanly to municipal mineral recyclers on the last Friday of every month.',
        ]),
    ], [
      ['Single · Detail', 'Where should staff place used printer toner cartridges?', ['In the blue E-Waste Drop Bins by Floor 2 Elevators', 'In brown breakroom landfill cans cleanly', 'Inside monthly custodial desk drawers', 'At Reception mail trays'], 0, 'ตอบ In the blue E-Waste Drop Bins by Floor 2 Elevators'],
      ['Single · Timing', 'How often do custodial staff dispatch sealed E-Waste tubs for recycling?', ['Once monthly on the final Friday', 'Every Monday morning cleanly', 'Quarterly before budget close', 'Daily after 5:00 P.M.'], 0, 'ตอบ Once monthly on the final Friday (on the last Friday of every month)'],
    ]),

    p7(15, 'm15-s2', [
      doc('ad', 'Sunset Ferry Dining Cruise — Twilight Jazz Friday', [['Board', 'Pier 2 · Departs 6:30 P.M. Sharp']],
        [
          'Enjoy three calm evening hours cruising past illuminated coastal lighthouses aboard Harbor Princess while savoring roasted wild salmon buffet platters and live brass jazz quartet sets!',
          'Tickets cost $65 per adult ($45 children under 12); free valet ramp parking opens smoothly at Pier 2 Garage when showing boarding QR passes.',
        ]),
    ], [
      ['Single · Detail', 'At what time does the Friday Twilight Jazz cruise end?', ['At 9:30 P.M.', 'At 6:30 P.M.', 'At 8:00 P.M.', 'At 10:30 P.M.'], 0, 'ตอบ At 9:30 P.M. (ออก 6:30 P.M. + ใช้เวลา 3 ชม. = 9:30 P.M.)'],
      ['Single · Detail', 'What benefit can ticket holders claim at Pier 2 Garage?', ['Free valet parking upon presenting boarding QR codes', 'Complimentary child buffet upgrades', 'Discounted lighthouse museum entries', 'Reserved waterfront cabanas'], 0, 'ตอบ Free valet parking upon presenting boarding QR codes'],
    ]),

    p7(15, 'm15-s3', [
      doc('chat', 'Lab Equipment Support Chat', [['Channel', '#chem-bench'], ['Date', 'July 19']],
        [
          chat([
            ['Dr. Clara Lin', '10:15 A.M.', 'Quick heads up—Analytical Scale #2 on Bench C suddenly keeps jumping +/- 4 mg whenever rooftop vents cycle on cleanly! Anyone bump glass wind shields loose?'],
            ['Samira Osei', '10:18 A.M.', 'Checking glass wind shield tracks now cleanly—no cracks anywhere! Look at the spirit bubble level under rear frame though: left brass thumb-foot loosened slightly!'],
            ['Dr. Clara Lin', '10:21 A.M.', 'Aha, let me twist that left rear brass leveling foot back until the green bubble sits dead center inside the target circle cleanly!'],
            ['Samira Osei', '10:24 A.M.', 'Then click Calibration Mode once using our 100g steel check weight before logging morning pharmaceutical sample jars smoothly cleanly!'],
          ]),
        ]),
    ], [
      ['Single · Cause', 'What caused Analytical Scale #2 to fluctuate slightly during morning vents?', ['One brass leveling foot underneath the frame had loosened cleanly', 'Glass wind shields shattered along Bench C tracks', 'Morning pharmaceutical jars exceeded capacity cleanly', 'Air-conditioning vents broke cleanly overhead'], 0, 'ตอบ One brass leveling foot underneath had loosened... (left brass thumb-foot loosened slightly!)'],
      ['Single · Action', 'What should Dr. Clara Lin run right after centering the leveling bubble?', ['A zero/span check using a 100-gram steel weight', 'Swap glass wind shield tracks cleanly', 'Replace rooftop vent motors', 'Restart laboratory building power'], 0, 'ตอบ A zero/span check using a 100-gram steel weight (click Calibration Mode once using our 100g steel check weight)'],
      ['Single · Timing', 'Around what time did Clara identify the cause cleanly?', ['10:21 A.M.', '10:15 A.M.', '10:18 A.M.', '10:24 A.M.'], 0, 'ตอบ 10:21 A.M. (10:18 Samira พบจุดเสีย -> 10:21 Clara รับทราบและลงมือขันปรับ)'],
    ]),

    p7(15, 'm15-s4', [
      doc('table', 'NorthPort Industrial Laundry — Commercial Uniform Linen Rates', [['Terms', 'Weekly Van Pickup & Folded Return']],
        [
          tbl(
            ['Garment Category', 'Minimum Bundle / Week', 'Per Piece Clean + Press', 'Heavy Grease Enzyme Add-On'],
            [
              ['Kitchen Chef Coats', '20 coats', '$2.40', '+$0.60 / coat'],
              ['Cotton Bistro Aprons', '40 aprons', '$1.10', '+$0.30 / apron'],
              ['Medical Scrub Sets', '30 sets', '$2.85', 'Included cleanly ($0 extra)'],
            ]),
          'Zero contract lock-in fees—pause weekly truck stops anytime before Friday noon ahead of holidays!',
        ]),
    ], [
      ['Single · Detail', 'Which uniform item includes heavy stain enzyme treatment cleanly at zero extra add-on charge?', ['Medical Scrub Sets', 'Kitchen Chef Coats', 'Cotton Bistro Aprons', 'All three items charge extra'], 0, 'ตอบ Medical Scrub Sets (Included cleanly $0 extra)'],
      ['Single · Math', 'How much would weekly cleaning + heavy grease enzyme add-on cost cleanly for 20 Kitchen Chef Coats?', ['$60.00', '$48.00', '$56.00', '$12.00'], 0, 'ตอบ $60.00 (($2.40 + $0.60) × 20 = $3.00 × 20 = $60.00)'],
      ['Single · Detail', 'By when should clients notify NorthPort Laundry before holiday route pauses?', ['Before Friday noon', 'After weekend van returns cleanly', 'Thirty days ahead of booking', 'Every Monday at 8:00 A.M.'], 0, 'ตอบ Before Friday noon (before Friday noon ahead of holidays!)'],
    ]),

    p7(15, 'm15-s5', [
      doc('review', 'Verified Buyer Review — TimberEdge Acoustic Felt Pinboard Panels', [['Buyer', 'Grace Park · Architecture Lead']],
        [
          'Review: "Mounted six 120×60 cm forest moss felt sheets cleanly across our hallway critique wall in thirty minutes flat cleanly using included removable mounting gel strips! Noticeably hushed clattering lunchroom echoes down corridor stairs cleanly immediately! Minor tip for buyers: heavy metal tacks slip out softly unless using long 12mm steel pushpins firmly across soft felt seams."',
          'Maker Reply: "Super helpful tip, Grace! We just swapped sample pin blisters inside every carton onto reinforced 14mm wide-head brass pushpins cleanly starting this week—feel free to grab complimentary packs anytime via orders@timberedge.co!"',
        ]),
    ], [
      ['Single · Benefit', 'Besides displaying corridor work cleanly, what acoustic effect did Grace notice?', ['The panels noticeably quieted nearby lunchroom hallway echoes cleanly', 'Mounting gel stripped paint cleanly off brick walls', 'Metal pushpins clicked silently into concrete', 'Office lunch hours ran quieter cleanly'], 0, 'ตอบ The panels noticeably quieted nearby lunchroom hallway echoes'],
      ['Single · Detail', 'How were the six acoustic panels attached smoothly onto the hallway wall?', ['With supplied removable adhesive gel strips', 'By drilling heavy steel floor brackets', 'Using 12mm brass pushpins cleanly', 'Resting panels directly onto office tables'], 0, 'ตอบ With supplied removable adhesive gel strips (using included removable mounting gel strips)'],
      ['Single · Detail', 'What hardware improvement did TimberEdge adopt following buyer feedback?', ['Included stronger 14mm wide-head brass pushpins inside boxes', 'Tripled felt thickness onto four centimeters', 'Shipped wooden pine border trims free', 'Replaced gel strips cleanly with permanent epoxy'], 0, 'ตอบ Included stronger 14mm wide-head brass pushpins...'],
    ]),

    p7(15, 'm15-s6', [
      doc('article', 'Boutique Ski Lodges Switch Plastic Bottle Minibars for Corridor Hydration Wall Spigots', [['Location', 'Innsbruck Alpine Notes']],
        [
          'Mountain ski resorts routinely truck tens of thousands of single-serve plastic mineral water bottles miles up steep hairpin alpine switchbacks cleanly weekly simply to restock guest nightstand trays.',
          'Four boutique inns near Innsbruck swapped minibar water bottles cleanly out for crisp refrigerated glacial sparkling & still hydration taps nestled beside floor ice stations along hallways—pairing rooms cleanly with handsome reusable brushed steel carafes guests happily carry straight onto morning gondola slopes, trimming disposable guest room plastic over 88 percent yearly cleanly.',
        ]),
    ], [
      ['Single · Problem', 'Why was supplying bottled minibar water expensive and wasteful for mountain hotels?', ['Trucking heavy single-use plastic water crates up steep mountain roads happened weekly', 'Guests complained glass water bottles froze in hallways cleanly', 'Innsbruck pipelines lacked filtered tap drinking water', 'Steel carafes shattered aboard ski gondolas'], 0, 'ตอบ Trucking heavy single-use plastic... (truck tens of thousands of plastic bottles miles up steep switchbacks cleanly weekly)'],
      ['Single · Detail', 'What complimentary container is provided inside rooms cleanly for guests to refill?', ['Reusable brushed steel water carafes', 'Disposable cardboard waxed cartons', 'Glass insulated espresso tumblers', 'Plastic locker jugs cleanly'], 0, 'ตอบ Reusable brushed steel water carafes'],
      ['Single · Vocab', 'The word "trimming" in paragraph 2 is closest in meaning to ___.', ['reducing', 'expanding', 'sorting', 'postponing'], 0, 'ตอบ reducing (trimming disposable guest room plastic over 88 percent = ลดปริมาณขยะพลาสติกกว่า 88%)'],
    ]),

    p7(15, 'm15-s7', [
      doc('ad', 'Careers — Retail Store Assistant Manager (Harbor Gear Outpost)', [['Schedule', 'Full-Time · Includes Saturday Shifts']],
        [
          'Lead energetic floor teams cleanly inside our flagship waterfront outdoor shop stocking technical rain jackets, dry duffel packs, and camping stoves! [1] You will schedule fifteen floor associates smoothly across morning/afternoon rushes, coach clear warranty consultation habits, and reconcile nightly cash registers accurately.',
          'What Makes You Shine:',
          lst([
            'Two+ years specialty retail shift supervisor experience cleanly handling POS exchanges',
            'Sincere enthusiasm guiding hikers cleanly choosing waterproof outerwear layers',
            'Calm organized precision unpacking seasonal garment cartons early weekday mornings',
          ]),
          '[2] Generous 45% employee outdoor gear discounts, transit cards, health plans, and bi-annual profit shares apply! [3] Drop off CV personally inside 18 Wharf Road OR upload smoothly to careers.harborgear.com by June 21. [4]',
        ]),
    ], [
      ['Single · Detail', 'How large a staff roster will the Assistant Manager help coordinate?', ['Fifteen floor associates', 'Two store supervisors', 'Eighteen delivery drivers', 'Forty-five warehouse clerks'], 0, 'ตอบ Fifteen floor associates (schedule fifteen floor associates smoothly)'],
      ['Single · NOT', 'Which benefit is NOT listed in Harbor Gear’s job ad?', ['Company vehicle fuel allowances cleanly', 'Up to 45% staff merchandise discount', 'Public commuter transit cards', 'Semi-annual company profit sharing'], 0, 'ตอบ Company vehicle fuel allowances cleanly (ไม่ได้ระบุเรื่องค่าน้ำมันรถบริษัท)'],
      ['Single · Detail', 'How may candidates apply besides uploading resumes online cleanly?', ['Delivering CVs in person at 18 Wharf Road', 'Mailing sealed shoebox portfolios cleanly', 'Calling POS register extension desks directly', 'Applying only at Saturday camping booths'], 0, 'ตอบ Delivering CVs in person at 18 Wharf Road (Drop off CV personally inside 18 Wharf Road OR upload)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Familiarity operating cloud inventory scanner handhelds helps immensely during seasonal resets."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจากหัวข้อคุณสมบัติ What Makes You Shine เพื่อบอกความถนัดซอฟต์แวร์เพิ่มเติม ก่อนเข้าสู่สวัสดิการ)'],
    ]),

    p7(15, 'm15-s8', [
      doc('memo', 'Central Civic Garage — Electric Scooter Overnight Battery Policy', [['To', 'Tenant Building Employers'], ['From', 'Property Fire Risk']],
        [
          'Due to heightened indoor lithium-ion battery fire risks inside enclosed stairwells, personal fold-up electric scooters and e-bike battery tubes may NO LONGER enter upper elevator lobbies or under-desk power outlets cleanly starting August 1.',
          'Storage Solutions:',
          lst([
            'Park scooters strictly inside the dedicated Ground-Level Ventilated Bike Pavilion cleanly outside North Courtyard Exit.',
            'Security monitors free UL-certified low-current charging bays cleanly equipped with fire-suppression sprinkler grids.',
            'Tenants leaving e-scooters chained along indoor fire stairwells face immediate security lock removal cleanly.',
          ]),
        ]),
    ], [
      ['Single · Detail', 'Where are tenants required to keep electric scooters starting August 1?', ['Inside the Ground-Level Ventilated Bike Pavilion outdoors by North Courtyard', 'Under personal suite office desks cleanly', 'Inside passenger lobby coat closets', 'Along upper floor fire stairwells'], 0, 'ตอบ Inside the Ground-Level Ventilated Bike Pavilion... (strictly inside Ground-Level Ventilated Bike Pavilion outside North Courtyard Exit)'],
      ['Single · Cause', 'Why were under-desk office charging plugs prohibited for scooter batteries?', ['Indoor lithium battery fires inside enclosed offices and stairwells pose safety hazards', 'Electric power outlets lack ground adapter pins', 'Scooter wheel mud ruins corridor marble cleanly', 'Property elevators cap floor weights sharply'], 0, 'ตอบ Indoor lithium battery fires... (heightened indoor lithium-ion battery fire risks inside enclosed stairwells)'],
      ['Single · Safety', 'What happens cleanly to scooters found locked inside fire stairwells?', ['Security officers cut locks and remove blocked units promptly cleanly', 'Reception adds $50 monthly meter charges', 'Scooters charge safely inside Pavilion overnight', 'Building fire alarms sound automatically'], 0, 'ตอบ Security officers cut locks... (face immediate security lock removal cleanly)'],
      ['Single · Detail', 'Does using the Pavilion charging lockers carry any tenant cost cleanly?', ['No, charging bays inside the Pavilion are free', 'Yes, $15 per monthly swipe key', 'Only visitors pay $5 hourly cleanly', 'Employers reimburse half annually'], 0, 'ตอบ No, charging bays inside the Pavilion are free (free UL-certified low-current charging bays)'],
    ]),

    p7(15, 'm15-s9', [
      doc('article', 'Quiet Electric Tug Boats Help Busy Sea Harbors Cut Diesel Dock Noise', [['By', 'Victor Alvarez'], ['Magazine', 'Maritime Infrastructure']],
        [
          'Container mega-ships gliding slowly inside narrow metropolitan port slips rely heavily on high-horsepower twin harbor tugboats spinning thick propellers at max throttle for forty intense minutes—generating deep throbbing low-frequency exhaust rumble across waterfront apartments well past midnight cleanly. [1] Recently, Port of Auckland deployed the Pacific’s first full-sized 70-ton-pull zero-emission battery electric harbor tugboat named Sparky cleanly across deep shipping berths.',
          'Packed neatly below waterlines with massive recyclable lithium-iron phosphate cell banks totaling 2.8 megawatt-hours cleanly, Sparky glides out cleanly nearly silently alongside visiting cargo ships, exerting instant peak torque smoothly at zero idling fuel waste while floating silently waiting beside pilot boats cleanly. [2]',
          '"Conventional diesel harbor tugs burn roughly 70 percent of daily gas literally just sitting stationary idling beside channel buoys waiting for delayed freighters cleanly," notes harbor captain Nadia Cho. [3] Returning cleanly back onto Pier 9 between ship berths lets dual megawatt shore cables top Sparky back from empty to full charge cleanly inside barely two hours between scheduled afternoon tides.',
          'Three neighboring Australian cargo ports placed joint engineering inquiries cleanly after reviewing Sparky’s quiet debut performance logs cleanly last quarter. [4]',
        ]),
    ], [
      ['Single · Problem', 'What major inefficiency affects standard diesel harbor tugs besides exhaust noise?', ['They burn roughly 70 percent of daily fuel simply idling stationary waiting for ships', 'Electric harbor piers ban diesel tugs past midnight cleanly', 'Mechanical ropes fail under 70-ton pull ratings', 'Mega-ships glide smoothly unaided cleanly'], 0, 'ตอบ They burn roughly 70 percent of daily fuel simply idling... (burn roughly 70 percent of daily gas literally just sitting stationary idling)'],
      ['Single · Process', 'How long does it take Pier 9 shore plugs cleanly to recharge Sparky’s batteries back to full cleanly?', ['Roughly two hours', 'Forty intense minutes cleanly', 'Twelve overnight hours cleanly', 'Seventy minutes per berth'], 0, 'ตอบ Roughly two hours (top Sparky back from empty to full charge cleanly inside barely two hours)'],
      ['Single · Advantage', 'How do battery engines assist captains actively docking cargo vessels?', ['Instant peak turning force arrives cleanly without fuel-wasting idle pauses', 'Underwater sonar pilots mega-ships automatically cleanly', 'Diesel propellers boost electric charge safely en route', 'Waterfront apartments connect cleanly onto harbor power cables'], 0, 'ตอบ Instant peak turning force arrives cleanly... (exerting instant peak torque smoothly at zero idling fuel waste)'],
      ['Single · Vocab', 'The word "exerting" in paragraph 2 is closest in meaning to ___.', ['applying', 'blocking', 'repairing', 'saving'], 0, 'ตอบ applying (exerting instant peak torque = ส่งแรงบิดสูงสุดออกใช้งานได้ทันที)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Crew members aboard report clear conversation smoothly across bridge intercoms without shouting above deafening engine noise cleanly."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจากประโยคความเงียบของเรือไฟฟ้าที่แล่นเคียงข้างเรือสินค้า อธิบายบรรยากาศบนสะพานเดินเรือของลูกเรือที่ไม่ต้องตะโกนแข่งเสียงเครื่อง)'],
    ]),

    p7(15, 'm15-d1', [
      doc('webpage', 'Cedar Creek Conference Lodge — Group Catering Menus', [['Venue', 'Main Pavilion Banquets']],
        [
          tbl(
            ['Buffet Option', 'Items Included', 'Rate (15–39 Guests)', 'Rate (40+ Guests)'],
            [
              ['Morning Bakers Tray', 'Croissants, fruit salad, yogurt jars, dark roast urns', '$19 / guest', '$16 / guest'],
              ['Harvest Grain Lunch', 'Herb chicken, roasted beet quinoa bowls, lemonade', '$34 / guest', '$29 / guest'],
              ['Chef Gala Plated', '3-course wild salmon or truffle risotto dinner + tea', '$62 / guest', '$54 / guest'],
            ]),
          'Setup linen napkins + china plates INCLUDED cleanly! Optional gluten-free pastry tray add-on (+$45 flat per tray cleanly serving 10 guests).',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'events@cedarcreeklodge.com'], ['From', 'Dr. Priya Menon (BioMed Research Group)'], ['Date', 'September 10'], ['Subject', 'October 18 Symposium Meal Booking — 45 Scientists']],
        [
          'Hello Banquet Team,',
          'Hosting 45 regional biomedical researchers cleanly inside Main Pavilion all day Friday, October 18! We want scheduling BOTH Morning Bakers Trays cleanly at 8:15 A.M. ahead of morning sessions PLUS Harvest Grain Lunch cleanly at noon for ALL 45 guests cleanly (dinner falls outdoors independently downtown!).',
          'Also, since four scientists strictly avoid wheat gluten, please toss ONE optional gluten-free pastry tray (+$45 flat!) cleanly alongside Morning Bakers Trays so nobody misses sweet snacks! Confirm total consolidated meal invoice cleanly before Finance clears purchase cards.',
          'Warmly,\nDr. Priya Menon',
        ]),
    ], [
      ['Double · Math', 'Calculate BioMed Research Group’s exact TOTAL bill for breakfast, lunch, AND the gluten-free add-on tray cleanly:', ['$2,070', '$2,385', '$2,025', '$1,695'], 0, 'ตอบ $2,070 (45 คนอยู่ในเกณฑ์ 40+ Guests! เช้า 45×$16=$720 + เที่ยง 45×$29=$1,305 + ถาด Gluten-Free +$45 = $2,070! ระวังอย่าไปคูณเรท 15–39 คน!)'],
      ['Double · Synthesis', 'Why does BioMed pay ONLY $29 per guest cleanly for lunch rather than $34?', ['Their group includes 45 attendees cleanly exceeding the 40-guest bulk threshold', 'Booking BOTH breakfast and lunch unlocks $5 lunch discounts', 'Research institutes qualify cleanly for educator subsidies', 'Wheat-free menus lower base plate costs cleanly'], 0, 'ตอบ Their group includes 45 attendees exceeding the 40-guest threshold (ตารางระบุ Rate 40+ Guests = $29/guest)'],
      ['Double · Detail', 'Which meal option is BioMed Research Group SKIPPING on October 18?', ['Chef Gala Plated dinner', 'Morning Bakers Tray breakfast', 'Harvest Grain Lunch', 'Gluten-free pastry tray'], 0, 'ตอบ Chef Gala Plated dinner (dinner falls outdoors independently downtown!)'],
      ['Double · Detail', 'Are linen table napkins and ceramic plates billed separately above quoted buffet totals?', ['No, linen napkins and china plates are automatically included', 'Yes, $45 tray fees cover china rentals', 'Only Chef Gala Plated dinners include china cleanly', 'Guests use disposable biodegradable trays'], 0, 'ตอบ No, linen napkins and china plates are included (Setup linen napkins + china plates INCLUDED cleanly!)'],
      ['Double · Detail', 'At what morning hour will Morning Bakers Trays be served cleanly?', ['8:15 A.M.', '12:00 P.M.', '9:00 A.M.', '4:30 P.M.'], 0, 'ตอบ 8:15 A.M. (อีเมลระบุ Morning Bakers Trays cleanly at 8:15 A.M.)'],
    ]),

    p7(15, 'm15-d2', [
      doc('notice', 'Pacific Bike Works — Annual Service Protection Plan Policy', [['Plan Cost', '$89 / Year · Covers 1 Registered Serial Frame']],
        [
          lst([
            'Includes 2 FREE seasonal precision tune-ups cleanly per membership year ($70 regular value per visit!).',
            'Flat tire tube patches or rim spoke truing appointments qualify cleanly for Priority 24-Hour Express Bench Turnaround instead of standard 4-day waitlists.',
            'Plan EXCLUDES accidental vehicle crash frame replacements AND worn tire tread rubber replacements (discounted 15% cleanly on replacement tires bought in-store instead!).',
          ]),
        ]),
      doc('email', 'E-mail Message',
        [['To', 'service@pacificbikeworks.com'], ['From', 'Benny Cruz'], ['Date', 'August 14'], ['Subject', 'Appointment #PBW-304 — Front Wheel Spoke + New Rear Tire']],
        [
          'Hi Mechanics Crew,',
          'Loving my Annual Service Protection Plan cleanly since purchasing my gravel commuter bike back in March! Yesterday morning hitting a deep downtown pothole slightly bent two front wheel spokes cleanly AND inspecting rear tire treads smoothly shows cloth cords starting cleanly to peek out after 3,500 commute kilometers!',
          'Dropping the bike cleanly at Front Desk tonight around 5:00 P.M. so you can cleanly true that bent front wheel under Express 24-Hour Bench Service AND install one brand-new 700×38c puncture-resistant rear gravel tire cleanly ($60 shelf price minus member benefit cleanly right?). Confirm I collect cleanly smoothly tomorrow Friday around 5:00 P.M.?',
          'Cheers,\nBenny Cruz',
        ]),
    ], [
      ['Double · Synthesis', 'How much will Benny Cruz owe at checkout specifically for his brand-new $60 shelf-price rear gravel tire?', ['$51.00', '$60.00', '$0 (Covered Free)', '$89.00'], 0, 'ตอบ $51.00 (แผนไม่แจกยางใหม่ฟรี แต่ลด 15% สำหรับยางใหม่ในร้าน! $60 - 15%($9) = $51.00!)'],
      ['Double · Synthesis', 'Why does Benny expect collecting his bike cleanly on Friday at 5:00 P.M. (within 24 hours) instead of waiting 4 days?', ['His Protection Plan grants Priority 24-Hour Express Bench speed cleanly on rim spoke truing', 'Buying new rear tires bypasses standard shop queues', 'August appointments finish overnight automatically', 'March bike purchases include free express tickets'], 0, 'ตอบ His Protection Plan grants Priority 24-Hour Express Bench speed on spoke truing...'],
      ['Double · Inference', 'If a cyclist visits strictly twice annually ONLY for routine seasonal precision tune-ups WITHOUT buying extra parts, how much does buying the $89 Plan cleanly SAVE vs paying individually?', ['$51 saved ($140 regular value - $89 plan)', '$19 saved cleanly', '$70 saved cleanly', 'Zero savings ($89 equals regular cost)'], 0, 'ตอบ $51 saved ($70 × 2 visits = $140 - $89 แผนรายปี = ประหยัด $51)'],
      ['Double · Detail', 'Which incident caused Benny’s front wheel spokes to go slightly out of alignment?', ['Striking a deep downtown road pothole', 'Riding 3,500 kilometers over rough gravel', 'A car collision at a traffic light', 'Improper March shop assembly'], 0, 'ตอบ Striking a deep downtown road pothole (hitting a deep downtown pothole slightly bent two spokes)'],
      ['Double · NOT', 'What item is strictly EXCLUDED from automatic free coverage under the $89 Protection Plan?', ['Replacing worn rubber tire treads and crash-damaged frames', 'Two precision tune-up appointments annually', 'Express 24-hour flat tire patch queues', 'Rim spoke truing labor'], 0, 'ตอบ Replacing worn rubber tire treads... (Plan EXCLUDES accidental crash frames AND worn tire tread replacements)'],
    ]),

    p7(15, 'm15-t1', [
      doc('ad', 'CloudVault Business Backup — Yearly Office Tier Matrix', [['Guarantee', '99.99% Uptime SLA']],
        [
          tbl(
            ['Tier Plan', 'Included Users', 'Encrypted Storage Pool', 'Annual Prepay Rate', 'Extra User Seat Add-On'],
            [
              ['Starter Studio', '5 seats', '2 TB', '$420 / yr', '$70 / user / yr'],
              ['Growth Team', '15 seats', '10 TB', '$960 / yr', '$55 / user / yr'],
              ['Enterprise Vault', '40 seats', '50 TB', '$2,200 / yr', '$45 / user / yr'],
            ]),
          'Optional HIPAA / Legal Audit Log Retention Add-On: +$180/year cleanly flat across ANY plan.',
        ]),
      doc('memo', 'IT Budgeting Brief — ClearLaw Attorneys', [['From', 'IT Administrator Sam Ortiz'], ['To', 'Managing Partner Grace Wu']],
        [
          'Our 18 attorneys plus 2 legal paralegals (20 total staff seats!) currently store nearly 6.5 terabytes of active court discovery exhibits locally cleanly. Upgrading onto CloudVault Growth Team cleanly (15 seats + 5 extra user seats!) provides full 10 TB cleanly for under $1,500—vastly cheaper than jumping straight onto Enterprise Vault cleanly at $2,200! Plus adding legal audit logs satisfies state bar rules.',
        ]),
      doc('invoice', 'CloudVault Annual Subscription #CV-7811',
        [['Customer', 'ClearLaw Attorneys'], ['Period', 'Jan 1 – Dec 31']],
        [
          'Base Plan: Growth Team (15 Users + 10 TB Storage Pool) = $960.00.',
          'Add-On Seats: 5 × Extra User Seats ($55 each) = $275.00 · Legal Audit Log Retention Add-On: $180.00.',
          'Total Annual Prepay Charged: $1,415.00.',
        ]),
    ], [
      ['Triple · Synthesis', 'How much total annual spend did ClearLaw Attorneys SAVE cleanly by adding 5 seats onto Growth Team (WITH Legal Audit Log included) compared with upgrading cleanly to Enterprise Vault WITH Legal Audit Log?', ['$965 / yr', '$785 / yr', '$1,240 / yr', '$275 / yr'], 0, 'ตอบ $965 / yr (ClearLaw จ่ายจริงรวมหมด $1,415; ถ้าเอา Enterprise Vault + Audit Log = $2,200 + $180 = $2,380 -> $2,380 - $1,415 = ประหยัดไป $965/ปี!)'],
      ['Triple · Inference', 'Why did Starter Studio fail to suit ClearLaw even if extra seats were stacked cheaply cleanly?', ['Starter Studio’s 2 TB storage cap cannot hold ClearLaw’s 6.5 TB legal case files (AND 20 seats on Starter costs $1,470 base > Growth)', 'Starter Studio blocks HIPAA/Legal Audit Log modules cleanly', 'Only Enterprise permits legal attorneys cleanly', 'Paralegals require separate 50 TB pools cleanly'], 0, 'ตอบ Starter Studio’s 2 TB storage cap cannot hold 6.5 TB files... (ไฟล์บริษัทมีตั้ง 6.5 TB เกิน 2 TB ของ Starter และขนาด 20 คนแพงกว่า Growth ด้วย)'],
      ['Triple · Math', 'Verify the exact dollar subtotal of Base Plan + Extra Seats ONLY (BEFORE Legal Audit Log Add-On) on ClearLaw’s invoice:', ['$1,235.00', '$960.00', '$1,415.00', '$1,310.00'], 0, 'ตอบ $1,235.00 ($960 Base + 5 × $55 ($275) = $1,235; หรือ $1,415 - $180 = $1,235)'],
      ['Triple · Detail', 'How much spare empty storage headroom remains inside ClearLaw’s 10 TB pool cleanly right now?', ['Around 3.5 TB remaining cleanly', 'Around 1.5 TB remaining cleanly', 'Zero GB left cleanly', 'Over 43.5 TB remaining cleanly'], 0, 'ตอบ Around 3.5 TB remaining cleanly (ความจุแผน 10 TB - ข้อมูลที่มีอยู่ 6.5 TB = เหลือ 3.5 TB)'],
      ['Triple · Detail', 'Why was the $180 Legal Audit Log feature added cleanly?', ['To fulfill state bar compliance standards cleanly', 'To unlock extra backup seats smoothly', 'To double annual uptime SLA promises', 'Starter plans missed cloud encryption'], 0, 'ตอบ To fulfill state bar compliance standards cleanly (adding legal audit logs satisfies state bar rules)'],
    ]),

    p7(15, 'm15-t2', [
      doc('article', 'Midtown Riverwalk Summer Pops Series Opens Saturday Free Concessions Zone', [['Venue', 'Riverfront Bowl · Saturdays in June']],
        [
          'Pack cozy low lawn picnic chairs neatly cleanly every June Saturday evening along Riverfront Bowl! Neighborhood artisan food kiosks open at 5:30 P.M. ahead of 7:30 P.M. orchestral twilight shows cleanly under zero-waste reusable cup rules ($2 refundable cup deposit cleanly at beverage tents!).',
        ]),
      doc('table', 'June Saturday Evening Symphony Programs (Gates Unlock 5:30 P.M.)', null, [
        tbl(
          ['Saturday Date', 'Concert Program', 'Guest Soloist', 'Intermission Drink Tent Host'],
          [
            ['June 8', 'Cinema Classics Under Stars', 'V. Lin (Violin)', 'Harbor Ginger Soda'],
            ['June 15', 'Brass & Maritime Suites', 'M. Brooks (Trumpet)', 'OakRoast Iced Espresso'],
            ['June 22', 'Broadway Summer Overtures', 'E. Diaz & R. Lee (Vocals)', 'River Citrus Kombucha'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'volunteers@riverwalkpops.org'], ['From', 'Nadia Haddad'], ['Date', 'June 4'], ['Subject', 'Volunteer Drink Tent Duty — June 22 Show']],
        [
          'Hello Outreach Crew,',
          'Count me right back cleanly this month helping at your $2 reusable cup return & beverage tents cleanly! Unfortunately traveling to Montreal keeps me out cleanly on Saturday June 8, PLUS my sister visits cleanly Saturday June 15—yet I remain completely FREE cleanly Saturday evening June 22!',
          'Super thrilled hearing E. Diaz & R. Lee belt Broadway tunes cleanly during second halves once cup rushes wind cleanly down! Confirm whether green volunteer aprons pass out near East Ticket Gate 1 around 5:00 P.M. before concession food gates open at 5:30 P.M.?',
          'Cheers,\nNadia Haddad',
        ]),
    ], [
      ['Triple · Synthesis', 'Which beverage vendor will Nadia Haddad work alongside during intermission cleanly on June 22?', ['River Citrus Kombucha', 'Harbor Ginger Soda', 'OakRoast Iced Espresso', 'Downtown Lemonade Co.'], 0, 'ตอบ River Citrus Kombucha (ตารางแถว June 22 Broadway Summer Overtures -> Intermission Drink Tent Host: River Citrus Kombucha)'],
      ['Triple · Synthesis', 'Why does Nadia plan collecting her volunteer apron right around 5:00 P.M. June 22?', ['So volunteers check in cleanly thirty minutes before food kiosks and gates open at 5:30 P.M.', 'Broadway vocal rehearsals run strictly at 5:00 P.M.', 'Cup deposit refunds close sharply at 5:30 P.M.', 'East Gate buses depart cleanly at 5:15 P.M.'], 0, 'ตอบ So volunteers check in cleanly thirty minutes before... (before concession food gates open at 5:30 P.M.)'],
      ['Triple · Detail', 'Why can Nadia NOT volunteer cleanly during the June 8 or June 15 performances?', ['Out-of-town travel in Montreal cleanly and an out-of-state family visit overlap those dates', 'Brass concerts skip intermission cup tents', 'Rain forecasts canceled early June dates', 'Lawn chair rules limit June seats cleanly'], 0, 'ตอบ Out-of-town travel in Montreal cleanly and an out-of-state family visit... (traveling to Montreal June 8 + sister visits June 15)'],
      ['Triple · Detail', 'How does Riverfront Bowl handle plastic beverage cup litter cleanly?', ['Guests pay $2 refundable deposits on reusable cups at tents', 'Glass tumblers ship straight from violin sponsors', 'Concerts ban food and drinks completely indoors', 'Volunteers pack personal mugs from home'], 0, 'ตอบ Guests pay $2 refundable deposits on reusable cups...'],
      ['Triple · Detail', 'At what hour does live symphony music actually start cleanly on Saturday evenings?', ['7:30 P.M.', '5:30 P.M.', '5:00 P.M.', '8:30 P.M.'], 0, 'ตอบ 7:30 P.M. (ahead of 7:30 P.M. orchestral twilight shows)'],
    ]),

    p7(15, 'm15-t3', [
      doc('ad', 'NorthWind Printers — Corporate Toner Recycling Rebates', [['Eligibility', 'Valid Only on Original Sealed NW Cartridges']],
        [
          lst([
            'Ship back 10+ empty genuine NorthWind laser toner shells cleanly together inside prepaid drop cartons to earn $4 account rebate credit per toner toward fresh office cartridges!',
            'Non-genuine third-party refilled clones receive $0 credit AND forfeit prepaid carton label reimbursement ($18 shipping penalty deducted cleanly per mixed batch!).',
            'Drop stamped return cartons cleanly at ANY CourierWay Locker rather than regular postal mailboxes.',
          ]),
        ]),
      doc('invoice', 'Return Intake Inspection Report #NWR-402',
        [['Account', 'BrightCode Legal Services'], ['Received', 'November 12 · 14 Cartridges Total']],
        [
          'Shell Audit Count: 11 × Genuine NorthWind #NW-85X Empty Shells (Verified ✓) + 3 × Generic Third-Party Refilled Clones (Rejected ✕).',
          'Rebate Earned: 11 × $4.00 = +$44.00 · Mixed-Batch Third-Party Deduction: -$18.00 · Net Account Credit Applied: +$26.00.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'supplies@brightcodelegal.com'], ['From', 'David Kim (Office Assistant)'], ['Date', 'November 13'], ['Subject', 'Quick Lesson on Report #NWR-402 Toner Credits']],
        [
          'Hi Finance Team,',
          'Checked our November toner rebate statement (#NWR-402) just now! Great catching $26 net credits cleanly off our upcoming ink order—HOWEVER notice we accidentally tossed three cheap generic black toner shells picked cleanly off an emergency supply cabinet cleanly beside our eleven genuine NorthWind ones, triggering an automatic $18 penalty subtraction!',
          'Already taped bright orange signs above our Copy Room Blue Bin reading "GENUINE NORTHWIND SHELLS ONLY" cleanly so December batches collect full $4 credit per cartridge cleanly without mixed-batch penalties!',
          'Best,\nDavid Kim',
        ]),
    ], [
      ['Triple · Synthesis', 'Why was $18 deducted from BrightCode’s expected $44 genuine rebate on Report #NWR-402?', ['Three third-party clone cartridges inside the shipment triggered the $18 mixed-batch shipping penalty', 'Eleven cartridges sat short of minimum return box sizes', 'CourierWay lockers charge $18 pickup fees per batch', 'BrightCode mailed boxes via regular post rather than lockers'], 0, 'ตอบ Three third-party clone cartridges triggered the $18 penalty (เงื่อนไขระบุส่งปนปลอมหักค่าขนส่ง $18 ต่อกล่อง และในกล่องมีของปลอมปนอยู่ 3 ตลับ!)'],
      ['Triple · Math', 'Verify how much HIGHER BrightCode’s net account credit WOULD have been if staff had excluded those 3 generic shells before mailing:', ['$44.00 (a $18.00 gain cleanly over $26.00)', '$56.00', '$32.00', '$62.00'], 0, 'ตอบ $44.00 (11 ตลับแท้ × $4 = $44 เต็มโดยไม่โดนหักค่าปรับ $18!)'],
      ['Triple · Detail', 'Where did BrightCode’s staff drop off the return carton according to program instructions?', ['At a CourierWay Locker location', 'Inside regular postal mailboxes', 'At NorthWind warehouse loading docks cleanly', 'Inside office supply stores cleanly'], 0, 'ตอบ At a CourierWay Locker location (นโยบายข้อ 3: Drop stamped return cartons cleanly at ANY CourierWay Locker)'],
      ['Triple · Action', 'What preventive fix did David Kim implement inside the Copy Room cleanly on November 13?', ['Posted bright orange labels restricting the Blue Bin to genuine NorthWind toners only', 'Banned laser printer usage cleanly in December', 'Switched vendor accounts entirely onto generic brands', 'Canceled CourierWay office pickups cleanly'], 0, 'ตอบ Posted bright orange labels... (taped bright orange signs above our Copy Room Blue Bin reading "GENUINE NORTHWIND SHELLS ONLY")'],
      ['Triple · Detail', 'How many total cartridges arrived inside Report #NWR-402?', ['14 cartridges total (11 genuine + 3 third-party)', '10 cartridges total', '11 cartridges total', '18 cartridges total'], 0, 'ตอบ 14 cartridges total (Received: 14 Cartridges Total = 11 + 3)'],
    ]),
  ];
})();

if (typeof module !== 'undefined') module.exports = { TOEIC_MOCK_VOL3: globalThis.TOEIC_MOCK_VOLS[3] };

