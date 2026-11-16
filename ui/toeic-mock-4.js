// TOEIC Reading Part 7 Volume 4 (Sets 16-20: 70 Passage Groups = 270 Questions).
globalThis.TOEIC_MOCK_VOLS = globalThis.TOEIC_MOCK_VOLS || {};
globalThis.TOEIC_MOCK_VOLS[4] = (() => {
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
    // ══════════════════ SET 16 (Q147–Q200: 54 Qs) ══════════════════
    p7(16, 'm16-s1', [
      doc('memo', 'IT Operations Alert', [['To', 'Floor 4 Finance Staff'], ['From', 'Help Desk'], ['Date', 'July 3']],
        [
          'Tax calculation servers reboot overnight Thursday between 11:30 P.M. and 1:00 A.M. to install July state sales-rate updates cleanly.',
          'Please log out of Payroll Portal completely before exiting Floor 4 Thursday afternoon so open spreadsheets do not stall automated cloud patches.',
        ]),
    ], [
      ['Single · Purpose', 'Why will tax calculation servers restart late Thursday night?', ['To apply updated July state sales-tax rates', 'Because spreadsheets stalled Wednesday systems', 'Floor 4 power plugs are being replaced', 'Help Desk requires overnight maintenance monthly'], 0, 'ตอบ To apply updated July state sales-tax rates (install July state sales-rate updates)'],
      ['Single · Action', 'What should Floor 4 employees do prior to leaving Thursday afternoon?', ['Sign completely out of the Payroll Portal', 'Back up keyboards onto external drives', 'Leave laptops powered on overnight', 'Notify Help Desk after 1:00 A.M.'], 0, 'ตอบ Sign completely out of the Payroll Portal (log out of Payroll Portal completely)'],
    ]),

    p7(16, 'm16-s2', [
      doc('ad', 'Cedar Grove Farmers Market — Autumn Berry Jam Class', [['When', 'Saturday, Sept 21 · 10:00 A.M.–Noon']],
        [
          'Learn hot-water bath canning safely with Chef Rosa Patel! Admission ($42) supplies organic blackberries, sugar jars, stainless funnels, plus TWO finished glass jam jars to carry straight home afterward.',
          'Space seats strictly twelve home cooks comfortably inside Garden Kitchen 1.',
        ]),
    ], [
      ['Single · Detail', 'What items do workshop guests bring home after the two-hour session?', ['Two sealed jars of blackberry jam they canned', 'Free stainless cooking funnels', 'Organic sugar bags cleanly', 'A $42 garden gift voucher'], 0, 'ตอบ Two sealed jars of blackberry jam they canned (TWO finished glass jam jars to carry straight home)'],
      ['Single · Detail', 'How many students are permitted in Garden Kitchen 1 per session?', ['At most twelve cooks', 'Up to twenty-one visitors', 'Six cooking teams', 'Forty market shoppers'], 0, 'ตอบ At most twelve cooks (Space seats strictly twelve home cooks comfortably)'],
    ]),

    p7(16, 'm16-s3', [
      doc('chat', 'Event Catering Team Chat', [['Channel', '#banquet-prep'], ['Date', 'October 12']],
        [
          chat([
            ['Owen Kim', '3:05 P.M.', 'Pulling insulated beverage cambros out onto Van 3 for tonight’s museum gala—only spotted one bundle of bamboo stirrers inside Crate B instead of three packs!'],
            ['Mia Morales', '3:09 P.M.', 'Checking Pantry Shelf 4 quickly cleanly... Yep, two sealed bags of bamboo sticks fell tucked behind linen napkins cleanly!'],
            ['Owen Kim', '3:12 P.M.', 'Lifesaver! Grabbing them right now cleanly so Van 3 rolls out by 3:30 P.M. before downtown rush traffic hits smoothly!'],
            ['Mia Morales', '3:15 P.M.', 'Great—remember locking green latch pins firmly on hot soup cambros before hitting River Bridge turns cleanly!'],
          ]),
        ]),
    ], [
      ['Single · Problem', 'What supply shortage did Owen notice inside Van 3 crates at 3:05 P.M.?', ['Only one pack of bamboo coffee stirrers had been packed instead of three', 'Hot soup insulated cambros stayed empty', 'Museum linen napkins fell behind Shelf 4', 'Van 3 drivers arrived past 3:30 P.M.'], 0, 'ตอบ Only one pack of bamboo coffee stirrers... (spotted one bundle instead of three packs!)'],
      ['Single · Detail', 'Where did Mia find the missing bamboo stirrer bags?', ['Behind stacks of linen napkins on Pantry Shelf 4', 'Under hot soup pots beside Van 3', 'Inside museum banquet storage crates', 'Next to River Bridge toll booths cleanly'], 0, 'ตอบ Behind stacks of linen napkins... (Pantry Shelf 4 tucked behind linen napkins)'],
      ['Single · Safety', 'Why does Mia advise locking green latch pins firmly?', ['To stop hot soup containers spilling during sharp turns cleanly', 'Museum security docks verify latch pins at doors', 'Bamboo stirrers pack inside green bins', 'Van 3 departs ahead of downtown rain'], 0, 'ตอบ To stop hot soup containers spilling... (locking pins firmly on hot soup cambros before hitting River Bridge turns)'],
    ]),

    p7(16, 'm16-s4', [
      doc('table', 'Pacific Boatyards — Dry Storage & Bottom Paint Rates', [['Yard', 'Bay Harbor Marine · Rates per Meter Boat Length']],
        [
          tbl(
            ['Service Option', 'Under 8m Hull', '8m – 11m Hull', 'Over 11m Hull'],
            [
              ['Monthly Dry Rack Storage', '$180', '$245', '$320'],
              ['Pressure Wash & Zinc Check', '$110', '$145', '$190'],
              ['Anti-Fouling Copper Paint Coat', '$520', '$690', '$920'],
            ]),
          'Prepay 12 months Dry Rack Storage cleanly upfront to receive TWO free monthly Pressure Wash sessions cleanly ($0 labor)!',
        ]),
    ], [
      ['Single · Detail', 'How much does applying an Anti-Fouling Copper Paint Coat cost for a 9.5-meter sailboat hull?', ['$690', '$520', '$920', '$245'], 0, 'ตอบ $690 (9.5m อยู่ในช่วง 8m–11m Hull -> $690)'],
      ['Single · Math', 'What would an 8-meter boat owner save over one year by paying for Pressure Wash & Zinc checks cleanly TWICE via the 12-month Dry Storage prepay bonus?', ['$290 saved', '$220 saved', '$145 saved', '$380 saved'], 0, 'ตอบ $290 saved (เรือ 8m อยู่ในกลุ่ม 8m–11m -> Pressure Wash ครั้งละ $145 × 2 ครั้งฟรี = ประหยัด $290!)'],
      ['Single · Detail', 'How are Bay Harbor Marine yard fees determined cleanly across boats?', ['According to hull vessel length bracket', 'By engine horsepower weight cleanly', 'Per passenger cabin count', 'By seasonal marina tide heights'], 0, 'ตอบ According to hull vessel length bracket (Rates per Meter Boat Length)'],
    ]),

    p7(16, 'm16-s5', [
      doc('letter', 'Customer Loyalty Note', [['From', 'GreenLeaf Pharmacy'], ['To', 'Registered Mail-Order Patients'], ['Date', 'June 4']],
        [
          'Dear Valued Patient,',
          'Summer afternoon mailbox heat occasionally climbs above forty degrees Celsius across sunlit front porches! Beginning June 15, any insulin vials or probiotics ordered cleanly via Home Delivery ship neatly inside silver thermal foil mailers packed cleanly beside recycled cold-gel brick inserts at zero extra shipping fee.',
          'Look out for bright blue sticker arrows reminding drivers cleanly to leave chilled cartons cleanly inside shaded side-porch spots instead of sunny curb drop boxes cleanly.',
        ]),
    ], [
      ['Single · Cause', 'Why is GreenLeaf upgrading shipping packaging starting June 15?', ['High summer outdoor heat risks spoiling temperature-sensitive deliveries', 'Postal boxes ran short of silver cardboard tape', 'Delivery drivers lost shaded side-porch keys', 'Insulin vials require glass courier bottles'], 0, 'ตอบ High summer outdoor heat risks spoiling... (mailbox heat climbs above 40°C risking insulin/probiotics)'],
      ['Single · Cost', 'Do patients pay higher delivery charges cleanly for the insulated gel-pack mailers?', ['No, upgrades ship at zero extra cost to patients', 'Yes, $4 seasonal cold packaging applies cleanly', 'Only probiotic deliveries waive fees', 'Patients return empty ice bricks cleanly first'], 0, 'ตอบ No, upgrades ship at zero extra cost... (at zero extra shipping fee)'],
      ['Single · Detail', 'How will bright blue envelope stickers assist delivery drivers?', ['Directing drivers to set shaded parcels away from sunny porches', 'Signaling urgent refrigerated returns', 'Notifying clinics when patients relocate', 'Confirming medical card expiration dates'], 0, 'ตอบ Directing drivers to set shaded parcels away from sun (leave chilled cartons inside shaded side-porch spots)'],
    ]),

    p7(16, 'm16-s6', [
      doc('article', 'Regional Airports Swap Noisy Diesel Belt Loaders for Quiet Battery Conveyors', [['Source', 'AeroOps Weekly']],
        [
          'Standing directly beneath roaring turbofan boarding stairs cleanly often exposes ramp baggage handlers simultaneously to deafening generator exhaust beside auxiliary belt trucks waiting patiently between passenger flights.',
          'Midtown Regional Airport cleanly swapped fourteen diesel suitcase conveyor loaders out neatly onto rechargeable lithium electric drive ramps this spring cleanly—slashing apron exhaust particle fumes cleanly by 80 percent while lowering ground-crew hearing fatigue measurably cleanly across early dawn baggage rush gates.',
        ]),
    ], [
      ['Single · Detail', 'What diesel airport ground machine did Midtown Regional Airport replace?', ['Suitcase conveyor belt loaders cleanly', 'Snowplow de-icing trucks cleanly', 'Catering lift galley vans', 'Runway radar inspection cars'], 0, 'ตอบ Suitcase conveyor belt loaders cleanly (swapped fourteen diesel suitcase conveyor loaders onto battery ramps)'],
      ['Single · Benefit', 'What dual advantage did workers experience immediately cleanly from electric loaders?', ['Sharply reduced exhaust fumes and quieter hearing comfort cleanly', 'Twice as many passenger flights hourly', 'Zero morning ramp baggage checks needed', 'Warm winter cabin temperatures aboard flights'], 0, 'ตอบ Sharply reduced exhaust fumes and quieter hearing comfort... (slashing exhaust fumes 80% + lowering hearing fatigue)'],
      ['Single · Vocab', 'The word "measurably" in paragraph 2 is closest in meaning to ___.', ['noticeably', 'secretly', 'randomly', 'rarely'], 0, 'ตอบ noticeably (lowering fatigue measurably = ลดลงอย่างชัดเจนวัดผลได้)'],
    ]),

    p7(16, 'm16-s7', [
      doc('ad', 'Careers — Customer Billing Specialist (ClearWater Cloud Utility)', [['Location', 'Portland Downtown · Hybrid (3 Days In-Office)']],
        [
          'Join ClearWater helping regional municipal water districts move smoothly away from confusing paper postcard billing onto intuitive automated digital portal bills! [1] You will review batch municipal meter import CSV checks daily, answer friendly customer phone tariff balance questions, and adjust occasional pro-rated move-out utility invoices accurately.',
          'Core Criteria:',
          lst([
            '18+ months customer billing, retail finance desk, or utility call-center support work',
            'Calm empathy walking elderly ratepayers cleanly step-by-step through payment settings',
            'Precision balancing decimal figures inside spreadsheets cleanly without transposition typos',
          ]),
          '[2] Enjoy $58,000 salary, paid parental leave, commuter passes, and cozy Friday summer afternoons off early cleanly. [3] Apply smoothly through clearwatercloud.io/careers submitting a short paragraph describing a billing puzzle you fixed nicely. [4]',
        ]),
    ], [
      ['Single · Detail', 'Which office arrangement describes this Portland position?', ['Hybrid schedule working in-office three days weekly cleanly', 'Fully remote from home five days cleanly', 'Evening call-center weekend shifts only', '100% regional field meter driving'], 0, 'ตอบ Hybrid schedule working in-office three days... (Portland Downtown · Hybrid 3 Days In-Office)'],
      ['Single · Requirement', 'What must applicants send besides standard resume text?', ['A brief note describing how they resolved a billing issue', 'Official municipal water engineering licenses', 'Spreadsheet macro source code clips cleanly', 'Letters from two utility directors'], 0, 'ตอบ A brief note describing how they resolved... (short paragraph describing a billing puzzle you fixed nicely)'],
      ['Single · Detail', 'Who receives occasional phone guidance from this specialist cleanly?', ['Water utility bill customers needing setup help cleanly', 'Field meter mechanics calibrating mains', 'Software engineers maintaining tax servers', 'Hardware kiosk vendors cleanly'], 0, 'ตอบ Water utility bill customers... (walking elderly ratepayers cleanly step-by-step through payment settings)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Familiarity navigating Zendesk or Stripe invoice refund panels provides an advantage cleanly."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจาก Core Criteria เพื่อเพิ่มความถนัดซอฟต์แวร์บิลลิ่ง ก่อนเข้าสู่ค่าตอบแทนสวัสดิการ)'],
    ]),

    p7(16, 'm16-s8', [
      doc('memo', 'Harbor Fitness Club — Cold Plunge & Steam Room Etiquette Rules', [['Effective', 'Immediately Across Floors 2 & 3']],
        [
          'Keeping spa pools crystal clear and serene relies smoothly on every member observing shared hygiene customs:',
          lst([
            'Shower thoroughly cleanly using warm soap BEFORE stepping inside cedar dry saunas OR tiled ice-plunge tubs—especially after sweaty spin classes cleanly.',
            'Sit atop thick cotton bath towels cleanly inside cedar wooden benches (bare swim skin traps perspiration oils into soft wood planks).',
            'Leave smartphones, smart speakers, and camera watches strictly inside changing locker fobs—silence keeps relaxation genuine!',
          ]),
        ]),
    ], [
      ['Single · Detail', 'Why are guests asked to place thick cotton towels cleanly on sauna planks before sitting?', ['To prevent skin sweat from soaking into porous cedar wood', 'Cedar benches overheat metal smartphone clips', 'Wet floor tiles slide cleanly under bare feet', 'Locker doors require wrapped cotton towels'], 0, 'ตอบ To prevent skin sweat from soaking into wood... (bare swim skin traps perspiration oils into soft wood planks)'],
      ['Single · Detail', 'What rule applies immediately before entering the cold plunge pool after cycling classes?', ['Members must soap and rinse off thoroughly under warm showers first', 'Wait fifteen calm minutes inside lobbies', 'Switch off digital wristband alarms beforehand', 'Wear thick rubber slippers underwater'], 0, 'ตอบ Members must soap and rinse off thoroughly... (Shower thoroughly using warm soap BEFORE stepping inside)'],
      ['Single · Prohibited', 'Which personal item may NOT enter the steam and sauna rooms cleanly?', ['Smartphones or audio speakers', 'Clean dry bath towels cleanly', 'Locker fob plastic straps', 'Clear water bottles'], 0, 'ตอบ Smartphones or audio speakers (Leave smartphones, smart speakers, and camera watches inside locker)'],
      ['Single · Vocab', 'The word "serene" in the opening sentence means ___.', ['calm and peaceful', 'hot and humid', 'crowded loudly', 'newly tiled'], 0, 'ตอบ calm and peaceful (สงบผ่อนคลาย)'],
    ]),

    p7(16, 'm16-s9', [
      doc('article', 'Modular Prefabricated Wooden Clinics Cut Rural Healthcare Construction Times by Half', [['By', 'Priya Rao'], ['Publication', 'Architectural Business Digest']],
        [
          'Isolated northern farming townships frequently wait two tedious winter seasons merely watching concrete foundation trucks crawl across thawed rural backroads before new primary medical examination clinics ever open sterile reception sliding doors cleanly. [1] Unpredictable wet spring mud and scarce licensed regional plumbers stall small concrete builds endlessly while residents drive two hours cleanly to urban urgent-care lobbies.',
          'Vancouver builder TimberMed is rewriting rural healthcare timelines neatly by assembling crisp waterproof exam suites entirely indoors inside climate-controlled factory assembly lines cleanly ahead of truck transport. [2] Each crane-ready timber module arrives cleanly already wired neatly for X-ray copper shielding, recessed overhead LED task grids, and slip-resistant vinyl flooring installed smoothly before stepping onto flat concrete piers cleanly.',
          '"Setting twelve modular examination boxes onto rural rock piers cleanly over three crisp Tuesday–Thursday crane mornings slashed total building wait durations from twenty months down to barely eleven weeks," celebrates community clinic director Dr. Alan Sato. [3] Insulated triple-pane corner glazing keeps January minus-twenty prairie gusts effortlessly warm inside using barely a fraction of conventional concrete-block furnace gas.',
          'Four provincial health networks recently signed standing framework contracts ordering nine additional factory-finished rural dental & diagnostics pods cleanly before next autumn. [4]',
        ]),
    ], [
      ['Single · Problem', 'Why did conventional concrete clinic builds take nearly two years in remote rural regions?', ['Wet mud roads, short thaw windows, and scarce rural tradespeople slowed on-site builds', 'Hospital staff delayed X-ray equipment orders cleanly', 'Timber supplies failed cold weather insulation tests', 'Residents preferred driving two hours to urban hospitals cleanly'], 0, 'ตอบ Wet mud roads, short thaw windows, and scarce rural tradespeople... (concrete foundation trucks crawl across thawed backroads ... spring mud and scarce licensed plumbers stall builds)'],
      ['Single · Process', 'Where are plumbing, X-ray copper walls, and vinyl floors installed under TimberMed’s approach?', ['Inside climate-controlled Vancouver assembly factories prior to trucking cleanly', 'After cranes bolt bare roofs cleanly on site cleanly', 'Strictly by visiting clinic dentists before autumn', 'Locally by urban urgent-care crews'], 0, 'ตอบ Inside climate-controlled Vancouver assembly factories... (assembled cleanly indoors ahead of truck transport with X-ray shielding, LEDs, and flooring already finished)'],
      ['Single · Benefit', 'Besides cutting construction times from 20 months down to 11 weeks, what ongoing efficiency feature helps clinics cleanly during freezing winters?', ['Triple-pane insulated timber enclosures consume far less heating furnace fuel', 'Rock piers warm floors electrically overnight', 'Sliding factory doors lock cold wind outside plazas', 'Concrete floors generate solar electricity cleanly'], 0, 'ตอบ Triple-pane insulated timber enclosures... (Insulated triple-pane corner glazing keeps minus-twenty gusts warm using barely a fraction of concrete furnace gas)'],
      ['Single · Vocab', 'The word "tedious" in paragraph 1 is closest in meaning to ___.', ['wearisomely slow', 'remarkably affordable', 'quietly peaceful', 'cleverly compact'], 0, 'ตอบ wearisomely slow (two tedious winter seasons = นานยืดยื้อน่าเบื่อ)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Because skilled electricians finish intricate wiring safely indoors at benches rather than freezing atop outdoor ladders cleanly, build inspection pass rates hit near perfection."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจากประโยคอธิบายโรงงานประกอบเดินสายไฟและพื้นพร้อมส่งจากโรงงาน -> บอกเหตุผลว่าทำไมทำในโรงงานถึงคุณภาพงานดีกว่าทำตากหนาวข้างนอก)'],
    ]),

    p7(16, 'm16-d1', [
      doc('ad', 'SilverLine Photography Lab — Museum-Grade Portfolio Print Editions', [['Ship From', 'Denver Color Lab']],
        [
          tbl(
            ['Print Medium', 'Size 30×40 cm', 'Size 50×70 cm', 'Aluminum Rear Hanging Rail'],
            [
              ['Archival Matte Cotton Paper', '$28', '$54', 'N/A (Sheet print only)'],
              ['Mounted Acrylic Glass Face', '$68', '$125', '+$22 installed'],
              ['Brushed Dibond Aluminum Panel', '$58', '$108', 'Included ($0)'],
            ]),
          'Use voucher STUDIO15 on orders totaling 4+ mounted prints (Acrylic OR Dibond) to enjoy 15% off cleanly!',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'orders@silverlinephoto.com'], ['From', 'Nora Vance (Vance Gallery)'], ['Date', 'August 14'], ['Subject', 'Lobby Exhibition Order — Six 50×70 cm Aluminum Panels']],
        [
          'Hi Color Lab,',
          'Curating six dramatic black-and-white bridge photographs cleanly inside a bright sunlit corporate building lobby cleanly! Because afternoon sunlight flashes bright reflections across shiny acrylic glass panes AND we need instant rear cleat rails ready straight out of wooden crates cleanly without custom shop framing delays, Brushed Dibond Aluminum Panels at 50 × 70 cm hit the nail cleanly on the head!',
          'Applying STUDIO15 cleanly across SIX matching 50×70 cm Brushed Dibond Aluminum Panels—confirm total price including built-in rear aluminum rails cleanly before mailing print proofs!',
          'Best,\nNora Vance',
        ]),
    ], [
      ['Double · Math', 'Calculate Nora Vance’s exact TOTAL order cost for ALL 6 Brushed Dibond 50×70 cm panels AFTER code STUDIO15 applies cleanly:', ['$550.80', '$648.00', '$663.00', '$459.00'], 0, 'ตอบ $550.80 (6 แผ่น × $108 = $648 และ Dibond แถมรางแขวนฟรี $0! สั่ง 6 แผ่นเข้าเกณฑ์ 4+ mounted prints ลด 15% ($97.20) = $550.80!)'],
      ['Double · Synthesis', 'Why did Nora reject Mounted Acrylic Glass Face panels cleanly for the sunlit corporate lobby?', ['Glassy acrylic creates bright reflections under sun glare AND adds $22 per hanging rail', 'Acrylic glass fails to qualify cleanly for STUDIO15 cleanly', 'Vance Gallery only hangs black matte paper cleanly', 'Aluminum prints cut delivery wait by two weeks'], 0, 'ตอบ Glassy acrylic creates bright reflections... (sunlight flashes bright reflections across acrylic glass panes AND Dibond includes rear rail cleanly $0)'],
      ['Double · Detail', 'Which option qualifies cleanly for code STUDIO15?', ['Mounted prints (Acrylic or Dibond totaling 4+ items)', 'Archival Matte Cotton Paper sheets totaling 4+', 'Single oversized 50×70 cm panels cleanly', 'Only custom studio proof mailers cleanly'], 0, 'ตอบ Mounted prints (orders totaling 4+ mounted prints Acrylic OR Dibond)'],
      ['Double · Inference', 'How much total WOULD hanging rails ALONE have added cleanly onto 6 frames if Nora HAD bought 6 Mounted Acrylic prints instead?', ['$132', '$22', '$0 (Included)', '$648'], 0, 'ตอบ $132 (Acrylic คิดค่าติดรางแขวน +$22/แผ่น × 6 = $132)'],
      ['Double · Detail', 'What artwork imagery is Vance Gallery displaying inside the corporate lobby?', ['Black-and-white photographs of bridges', 'Colorful modern oil landscapes cleanly', 'Archival timber architectural blueprints', 'Abstract neon digital posters cleanly'], 0, 'ตอบ Black-and-white photographs of bridges'],
    ]),

    p7(16, 'm16-d2', [
      doc('memo', 'Harbor City Ferry Co. — Group School Excursion Booking Policy', [['Contact', 'groups@harborferry.org']],
        [
          lst([
            'School groups of 15+ students qualify cleanly for flat $6 youth round-trip tickets (instead of standard $11 child fare!).',
            'Every 10 paying youth tickets automatically unlocks ONE complimentary adult chaperone teacher boarding pass cleanly ($0!). Additional adults pay standard $14 group chaperone rate cleanly.',
            'Boxed classroom lunches eat strictly out across Upper Fresh-Air Sun Decks cleanly—lower carpeted cabins prohibit messy crumbs.',
          ]),
        ]),
      doc('email', 'E-mail Message',
        [['To', 'groups@harborferry.org'], ['From', 'Ms. Laura Gomez (Oakwood Elementary Grade 5)'], ['Date', 'May 3'], ['Subject', 'Field Trip May 22 — 32 Students + 5 Teachers']],
        [
          'Hello Group Bookings Desk,',
          'Planning a coastal science field excursion cleanly across Harbor Island cleanly on Wednesday, May 22 cleanly for 32 fifth-graders accompanied cleanly by FIVE teachers/parent chaperones (37 passengers total)!',
          'Checking math cleanly before typing our school purchase order: since we bring 32 paying youths cleanly, I understand three chaperone teachers board completely free cleanly while our extra two chaperones pay the $14 group adult ticket cleanly! Also reminding students politely that peanut-butter lunches eat strictly cleanly out atop Upper Fresh-Air Sun Decks cleanly rather than carpets below!',
          'Warmly,\nLaura Gomez',
        ]),
    ], [
      ['Double · Synthesis', 'Calculate the EXACT total ferry ticket cost for ALL 37 excursion passengers cleanly (32 students + 5 teachers/chaperones):', ['$220', '$192', '$248', '$262'], 0, 'ตอบ $220 (นักเรียน 32 คน >= 15 ได้เรท $6 -> 32×$6 = $192! ทุกๆ 10 คนฟรีผู้ใหญ่ 1 คน -> 32 คนได้ฟรีครู 3 ท่าน เหลือผู้ใหญ่จ่ายเงินอีก 2 ท่าน × $14 = $28 -> รวม $192 + $28 = $220!)'],
      ['Double · Synthesis', 'How did Ms. Gomez correctly calculate her complimentary adult tickets?', ['32 students ÷ 10 rounds down strictly to 3 free chaperone passes cleanly', 'Every 5 teachers includes three free passes cleanly', 'Fifth-grade trips receive unlimited complimentary guides', 'Wednesday sailings grant all five chaperones free passes cleanly'], 0, 'ตอบ 32 students ÷ 10 rounds down strictly to 3 free passes (Every 10 paying youth -> 1 free adult; 30 students = 3 คนฟรี)'],
      ['Double · Detail', 'Where must the fifth-grade class eat their packed lunches cleanly?', ['Outdoors on the Upper Fresh-Air Sun Deck', 'Downstairs along lower carpeted benches', 'At Pier Harbor cafeteria desks', 'Strictly upon landing across Harbor Island'], 0, 'ตอบ Outdoors on the Upper Fresh-Air Sun Deck'],
      ['Double · Inference', 'How much LESS do 32 students pay combined cleanly compared to buying individual standard $11 child tickets cleanly ($352)?', ['$160 saved on youth tickets', '$96 saved on youth tickets', '$192 saved cleanly', '$220 saved cleanly'], 0, 'ตอบ $160 saved on youth tickets ($11-$6 = $5/คน × 32 = $160)'],
      ['Double · Detail', 'Why does Laura note Wednesday, May 22 specifically?', ['It is the planned departure date for her coastal science excursion', 'Carpeted cabins undergo cleaning May 22 cleanly', 'Child fares jump to $14 after May 22', 'School invoices expire on May 22'], 0, 'ตอบ It is the planned departure date...'],
    ]),

    p7(16, 'm16-t1', [
      doc('ad', 'Apex Soundproofing — Studio Glass Door Acoustic Kits', [['Delivery', 'Free Regional Courier on Orders $150+']],
        [
          tbl(
            ['Seal Kit Product', 'Door Fit Size', 'Noise Reduction', 'Kit Price', 'Adhesive Type'],
            [
              ['DoorSweep Pro', 'Bottom Gap Only (Up to 100 cm)', '-10 dB', '$42', 'Screw-On Aluminum Track'],
              ['Perimeter Foam Set', '3-Side Door Frame Wrap', '-14 dB', '$58', 'Industrial Peel & Stick Tape'],
              ['Complete Acoustic Bundle', '4-Side Frame + Heavy Auto Sweep', '-22 dB', '$115', 'Bolt Track + Peel Seal'],
            ]),
          'Buy 2+ Complete Acoustic Bundles cleanly together cleanly and take $20 off TOTAL order!',
        ]),
      doc('memo', 'Facilities Improvement Plan — NorthLaw Downtown Suites', [['From', 'Office Coordinator Ben Kwon'], ['Date', 'September 3']],
        [
          'Client mediation rooms #1 and #2 leak distracting hallway printer buzz right under hollow office door bottoms AND along loose vertical jamb cracks cleanly! Rather than patching bottom sweeps alone—which leaves side door edges whispering loudly—ordering TWO Complete Acoustic Bundles seals BOTH doors cleanly all four sides with -22 dB hush cleanly AND saves $20 neatly cleanly!',
        ]),
      doc('invoice', 'Apex Soundproofing Receipt #AS-3310',
        [['Buyer', 'NorthLaw Downtown Suites'], ['Date', 'September 3']],
        [
          'Items Ordered: 2 × Complete Acoustic Bundle ($230 list) · Multi-Bundle Promotion (-$20).',
          'Courier Ground Delivery: Free ($0 · Over $150 Threshold). Total Charged: $210.00.',
        ]),
    ], [
      ['Triple · Synthesis', 'Why did Ben Kwon pick Complete Acoustic Bundles instead of DoorSweep Pro bottom sweeps?', ['Hallway sound also escaped along vertical door frame edges requiring full 4-side sealing', 'Bottom sweeps fail on doors under 100 cm cleanly', 'Perimeter Foam sets lack screw aluminum tracks cleanly', 'DoorSweep orders exclude regional courier delivery'], 0, 'ตอบ Hallway sound also escaped along vertical door frame edges... (leaks under door bottoms AND along loose vertical jamb cracks -> 4-Side Complete Bundle saves $20 too!)'],
      ['Triple · Math', 'Compare net savings: how much MORE or LESS did 2 Complete Acoustic Bundles cost cleanly ($210) vs buying 2 DoorSweeps + 2 Perimeter Foam Sets separately cleanly (2×$42 + 2×$58)?', ['Buying 2 Complete Bundles ($210) costs $10 more than separate kits ($200) while providing a stronger -22 dB automated heavy seal!', 'Complete Bundles cost $20 less than separate pieces ($230)', 'Both cost identical exact $210 cleanly', 'Separate pieces qualify for $20 off bundle promotions too'], 0, 'ตอบ Buying 2 Complete Bundles ($210) costs $10 more... (แยกซื้อ (42+58)×2 = $200 ส่วน Complete Bundles 230-20 = $210 แพงกว่า $10 แต่กันเสียงดีกว่าถึง -22 dB!)'],
      ['Triple · Inference', 'Why did NorthLaw receive FREE regional courier shipping on Receipt #AS-3310?', ['Their net $210 order exceeded the $150 free shipping minimum', 'Acoustic bundles ship free cleanly unconditionally', 'Ben Kwon picked up parcels cleanly in Denver', 'Downtown law suites hold tax exemption shipping accounts'], 0, 'ตอบ Their net $210 order exceeded $150... (Free Regional Courier on Orders $150+)'],
      ['Triple · Detail', 'Which two doors at NorthLaw are getting acoustic treatment?', ['Client mediation rooms #1 and #2', 'Hallway printer closets cleanly', 'Main downtown lobby turnstiles cleanly', 'Executive suite balconies cleanly'], 0, 'ตอบ Client mediation rooms #1 and #2'],
      ['Triple · Detail', 'What installation method secures Complete Acoustic Bundles smoothly onto frames?', ['A combination of bolt aluminum track and peel-seal adhesive', 'Heavy steel hinges welded to jambs cleanly', 'Magnetic silicone strips cleanly alone', 'Wooden shim screws without adhesives'], 0, 'ตอบ A combination of bolt aluminum track and peel-seal adhesive (ตารางระบุ Bolt Track + Peel Seal)'],
    ]),

    p7(16, 'm16-t2', [
      doc('article', 'Pacific Green Ferry Adds Express Weekend Bike Island Shuttle', [['Runs', 'Saturdays & Sundays · May–Oct']],
        [
          'Cyclists wanting scenic coastal trail loops across Cedar Island cleanly without hauling bike racks onboard passenger cars now board Express Pier 2 Catamaran #F-80 cleanly Saturdays and Sundays! Boarding ramps load up to forty bicycles vertically safely along lower bow cabins—book Bike Slot tags online ahead cleanly ($4 bike tag atop standard $14 ferry seat).',
        ]),
      doc('table', 'Weekend Express Cedar Island Timetable (Pier 2 <-> Cedar Cove)', null, [
        tbl(
          ['Sailing', 'Pier 2 Depart', 'Cedar Cove Arrive', 'Bike Slots Left (Sat June 8)', 'Return Ferry Leaves Cedar Cove'],
          [
            ['Morning Loop', '8:00 A.M.', '8:45 A.M.', '14 slots open', '12:30 P.M. / 3:15 P.M. / 6:00 P.M.'],
            ['Midday Sun', '10:30 A.M.', '11:15 A.M.', 'Sold Out (0 open)', '3:15 P.M. / 6:00 P.M.'],
            ['Afternoon Sail', '1:15 P.M.', '2:00 P.M.', '22 slots open', '6:00 P.M. Final Boat'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'tickets@pacificferry.org'], ['From', 'Dr. Leo Chen'], ['Date', 'June 5'], ['Subject', 'Group Bike Passes — Saturday June 8 Morning Trip']],
        [
          'Hi Ticket Crew,',
          'Six of us from our hospital cycling group plan riding across Cedar Island smoothly this Saturday June 8 for a five-hour coastal loop ride! Glancing at open Bike Slots cleanly on Saturday’s timetable, Midday Sun (10:30 A.M.) sits cleanly at 0 slots left anyway, so Morning Loop (8:00 A.M.) works brilliantly letting us ride casually all morning and catch the 3:15 P.M. return catamaran calmly after coastal fish tacos!',
          'Purchasing cleanly six adult passenger tickets PLUS six $4 Bike Slot tags cleanly inside portal now—confirm riders push bikes straight up Pier 2 lower cabin ramps around 7:40 A.M.?',
          'Cheers,\nLeo Chen',
        ]),
    ], [
      ['Triple · Math', 'How much total will Leo Chen spend booking ALL SIX round-trip passenger tickets WITH six bicycle space tags?', ['$108', '$84', '$24', '$114'], 0, 'ตอบ $108 (6 คน × ($14 ค่าโดยสาร + $4 ค่าแท็กจักรยาน = $18/คน) = $108!)'],
      ['Triple · Synthesis', 'How much total riding time on Cedar Island does catching the 8:00 A.M. boat out and 3:15 P.M. boat back cleanly allow Leo’s group?', ['Six hours and 30 minutes (8:45 A.M. arrival to 3:15 P.M. departure)', 'Three hours and 45 minutes cleanly', 'Seven hours and 15 minutes cleanly', 'Four hours exactly cleanly'], 0, 'ตอบ Six hours and 30 minutes (เรือถึงเกาะ 8:45 A.M. -> กลับรอบ 3:15 P.M. = 6 ชม. 30 นาที)'],
      ['Triple · Detail', 'Why could Leo’s group NOT choose the 10:30 A.M. Midday Sun crossing cleanly even if they wanted to sleep later?', ['Zero bicycle slots remain open for Saturday, June 8', 'Cedar Cove docks close strictly at noon cleanly', 'Bike tags cost double cleanly on midday runs', 'Return boats skip afternoon ferries cleanly'], 0, 'ตอบ Zero bicycle slots remain open... (ตารางระบุ Midday Sun Bike Slots Left: Sold Out 0 open)'],
      ['Triple · Detail', 'How many bike slots remain open on Morning Loop cleanly BEFORE Leo checks out 6 tags?', ['14 open slots (leaving 8 afterward cleanly!)', '40 open slots cleanly', '22 open slots cleanly', 'Zero open slots'], 0, 'ตอบ 14 open slots (ตาราง Morning Loop: 14 slots open -> จอง 6 เหลือ 8)'],
      ['Triple · Detail', 'What time does the final Saturday return boat leave Cedar Cove?', ['6:00 P.M.', '3:15 P.M.', '2:00 P.M.', '12:30 P.M.'], 0, 'ตอบ 6:00 P.M. (6:00 P.M. Final Boat)'],
    ]),

    p7(16, 'm16-t3', [
      doc('memo', 'Northstar Robotics — Software License Reimbursement Rules', [['Department', 'Software Tools Admin']],
        [
          'Engineers requesting commercial desktop tool licenses SHOULD check Internal IT License Pools cleanly FIRST before charging personal credit cards! Pre-purchased corporate floating seats apply free at $0 department cost whenever available. If IT Pools report empty seats, pre-approved external credit card subscriptions clear expense checks strictly for ANNUAL plans (month-to-month bills get rejected!).',
        ]),
      doc('table', 'IT Floating Seat Availability Dashboard (Oct 14)', null, [
        tbl(
          ['Tool Application', 'Owned Corporate Pool Seats', 'Assigned Today', 'Open Free Seats?'],
          [
            ['SolidCAD Pro 3D', '25 seats', '25 / 25 Used', '0 Available (Waitlist)'],
            ['CodeTrace Debugger', '40 seats', '31 / 40 Used', '9 Available (Instant Free!)'],
            ['VectorPlot Illustrate', '10 seats', '10 / 10 Used', '0 Available (Buy External Allowed)'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'it-licenses@northstarrobotics.com'], ['From', 'Hannah Park (UI Documentation)'], ['Date', 'October 14'], ['Subject', 'VectorPlot Monthly Billing vs CodeTrace Request']],
        [
          'Hi IT Admins,',
          'Updating user handbook schematics for next month cleanly requires BOTH CodeTrace Debugger AND VectorPlot Illustrate cleanly! Checking today’s Oct 14 dashboard neatly showed 9 open corporate CodeTrace seats cleanly—already clicked Grab Seat so CodeTrace runs at $0! Since VectorPlot sits completely full at 10/10 though, my manager signed off on purchasing an external seat directly cleanly today.',
          'Quick accounting check before clicking Buy cleanly: VectorPlot’s site sells $22/mo monthly billing OR $210 annual prepay—I MUST pick the $210 annual plan so Finance approves expense payback right cleanly?',
          'Thanks!\nHannah Park',
        ]),
    ], [
      ['Triple · Synthesis', 'Why does Hannah Park select the $210 annual VectorPlot subscription rather than the $22/mo monthly plan cleanly?', ['Corporate expense policy explicitly rejects month-to-month software reimbursements', 'Annual plans grant nine free IT floating seats automatically cleanly', 'VectorPlot bans monthly billing cleanly for robotics firms cleanly', 'Handbook schematics require twelve-month licenses strictly'], 0, 'ตอบ Corporate expense policy explicitly rejects month-to-month... (กติการะบุชัดเจน clears strictly for ANNUAL plans, month-to-month bills get rejected!)'],
      ['Triple · Synthesis', 'Why did Hannah pay $0 personally cleanly for CodeTrace Debugger?', ['Nine corporate floating seats sat unused inside IT License Pools', 'UI Documentation exempts debugging licenses cleanly', 'Manager approval waived monthly charges cleanly', 'Oct 14 promoted free developer licenses cleanly'], 0, 'ตอบ Nine corporate floating seats sat unused... (ตารางระบุ CodeTrace: 9 Available Instant Free!)'],
      ['Triple · Detail', 'How many corporate SolidCAD Pro 3D licenses currently remain unassigned cleanly as of October 14?', ['Zero seats available', 'Nine seats available cleanly', 'Ten seats available', 'Twenty-five seats available'], 0, 'ตอบ Zero seats available (25/25 Used · 0 Available Waitlist)'],
      ['Triple · Math', 'Besides guaranteeing HR reimbursement approval, how much cheaper is the $210 Annual plan over 12 full months compared to paying $22/month for 12 months ($264)?', ['$54 cheaper per year', '$22 cheaper per year', '$48 cheaper cleanly', '$10 cheaper cleanly'], 0, 'ตอบ $54 cheaper per year ($22 × 12 = $264 เทียบรายปี $210 -> ประหยัด $54/ปี)'],
      ['Triple · Detail', 'For which upcoming project does Hannah need both applications?', ['Updating user handbook schematics', 'Debugging manufacturing robot motors cleanly', 'Auditing October annual accounting taxes', 'Setting up CodeTrace waitlists'], 0, 'ตอบ Updating user handbook schematics'],
    ]),

    // ══════════════════ SET 17 (Q147–Q200: 54 Qs) ══════════════════
    p7(17, 'm17-s1', [
      doc('email', 'E-mail Message',
        [['To', 'All Warehouse Team Members'], ['From', 'Safety Supervisor Sam Ortiz'], ['Date', 'February 5'], ['Subject', 'Dock Ice Melt Salt Bins']],
        [
          'Subfreezing overnight sleet coats concrete rear truck aprons smoothly every February morning cleanly! Please sprinkle eco-safe magnesium salt pellets from bright green bins tucked cleanly beside Exit Door 4 onto icy step aprons prior to opening loading roll-doors at 6:30 A.M.',
          'Avoid dumping gritty rock sand cleanly near dock seals, as sharp pebbles lodge tightly inside electric roll-door tracks cleanly.',
        ]),
    ], [
      ['Single · Detail', 'Why does Sam ask workers NOT to spread coarse sand on dock ramps cleanly?', ['Sand grains get trapped inside electric door roller tracks', 'Sand melts ice slower than green paint pellets', 'Warehouse trucks require dry bare pavement tires cleanly', 'Magnesium suppliers prohibit mixed sand'], 0, 'ตอบ Sand grains get trapped inside... (sharp pebbles lodge tightly inside electric roll-door tracks)'],
      ['Single · Detail', 'Where are the magnesium salt storage containers positioned?', ['Inside bright green bins next to Exit Door 4', 'Outside morning truck cab seats cleanly', 'Under electrical roll-door switch boxes', 'Along rear pavement loading gates'], 0, 'ตอบ Inside bright green bins next to Exit Door 4'],
    ]),

    p7(17, 'm17-s2', [
      doc('notice', 'Community Park Advisory — Lakeside Amphitheater', [['Effective', 'June 1 – August 31']],
        [
          'Evening outdoor twilight film screenings run every Friday at 8:30 P.M. across Lakeside Meadow FREE to all residents!',
          'Low folding sling chairs sit upfront near screen risers cleanly, while taller camp chairs and picnic umbrellas position politely behind White Flag Line B cleanly so everyone sees crisp subtitles comfortably.',
        ]),
    ], [
      ['Single · Cause', 'Why are high-back camp chairs directed behind White Flag Line B cleanly?', ['So tall chairs do not block screen views for guests seated forward cleanly', 'Low sling chairs belong exclusively to Friday sponsors', 'Grass sprinklers wet areas strictly ahead of Line B', 'White flags mark outdoor movie sound zones'], 0, 'ตอบ So tall chairs do not block screen views... (behind White Flag Line B cleanly so everyone sees crisp subtitles comfortably)'],
      ['Single · Detail', 'How much does Friday twilight movie admission cost neighborhood attendees cleanly?', ['Nothing (Free entry)', '$5 per folding chair', '$8 twilight pass', 'Donations upon exit cleanly'], 0, 'ตอบ Nothing (FREE to all residents!)'],
    ]),

    p7(17, 'm17-s3', [
      doc('chat', 'Lab Purchasing Chat', [['Channel', '#chem-orders'], ['Date', 'October 2']],
        [
          chat([
            ['Dr. Anita Rao', '10:05 A.M.', 'Checking glass amber reagent bottle stock cleanly before Monday undergrad chem labs—inventory app shows ONLY 18 clean 500ml jars sitting inside Cabinet 3 cleanly! Need 30 total.'],
            ['Benny Chen', '10:09 A.M.', 'Did ClearLab Scientific ship backorder Box #440 yesterday cleanly? Remember we placed a 24-jar order way back September 24!'],
            ['Dr. Anita Rao', '10:12 A.M.', 'Checking Central Receiving dock spreadsheet right now—Wait: signed in at Lobby Bay 2 at 8:40 A.M. TODAY cleanly under Student Worker Marco!'],
            ['Benny Chen', '10:15 A.M.', 'Woohoo cleanly! Walking down onto Lobby Bay 2 with a rolling cart right now before Monday labs cleanly so we sit smoothly at 42 clean jars!'],
          ]),
        ]),
    ], [
      ['Single · Math', 'Verify Benny’s math cleanly (42 total jars) once he wheels Box #440 upstairs cleanly:', ['18 existing jars in Cabinet 3 + 24 newly delivered jars = 42 total', '30 existing jars + 12 delivered = 42', '24 existing jars + 18 delivered = 42', '440 cartons minus 18 broken jars = 42'], 0, 'ตอบ 18 existing jars + 24 newly delivered = 42 total (เดิมมี 18 ขวด + ลังสั่งเพิ่มวันที่ 24 ก.ย. อีก 24 ขวด = 42 ขวด เกินพอสำหรับ 30 ขวด!)'],
      ['Single · Detail', 'Who accepted the missing glass bottle carton cleanly at 8:40 A.M.?', ['Student worker Marco at Lobby Bay 2', 'Dr. Anita Rao inside Cabinet 3', 'ClearLab truck couriers cleanly', 'Undergrad chemistry students cleanly'], 0, 'ตอบ Student worker Marco at Lobby Bay 2'],
      ['Single · Intent', 'What is Benny doing immediately after 10:15 A.M.?', ['Wheeling a rolling cart to Lobby Bay 2 to collect Box #440 cleanly', 'Ordering 12 more amber bottles online', 'Canceling Monday undergraduate chem labs', 'Checking spreadsheets at Central Receiving'], 0, 'ตอบ Wheeling a rolling cart to Lobby Bay 2... (Walking down onto Lobby Bay 2 with a rolling cart right now)'],
    ]),

    p7(17, 'm17-s4', [
      doc('table', 'Harbor Cargo Vans — Daily Commercial Self-Drive Rental Rates', [['Requirements', 'Valid Driver License + Return Same Fuel Gauge']],
        [
          tbl(
            ['Van Class', 'Cargo Bed Length', 'Base Day Rate (Incl. 100 km)', 'Extra Km Rate', 'Folding Steel Ramp Included?'],
            [
              ['CityCompact EV', '2.1 meters', '$68', '$0.28 / km', 'No (+$12 optional)'],
              ['CargoPro Mid', '3.0 meters', '$92', '$0.35 / km', 'Yes ($0)'],
              ['BoxLift Tailgate', '4.2 meters', '$138', '$0.42 / km', 'Electric Rear Lift ($0)'],
            ]),
          'Return vans after 6:00 P.M. cleanly using 24-hour yellow key-drop chute beside Office Door 1!',
        ]),
    ], [
      ['Single · Math', 'How much would renting a CityCompact EV WITH the optional steel ramp for ONE day AND driving 150 km total cost cleanly?', ['$94.00', '$80.00', '$68.00', '$110.00'], 0, 'ตอบ $94.00 ($68 ค่าเช่ารวม 100 km + $12 ค่าเช่าทางลาดเหล็ก + เกิน 50 km × $0.28 = $14 -> รวม $68+$12+$14 = $94.00!)'],
      ['Single · Detail', 'Which rental vehicle accommodates 3.5-meter wooden lumber boards easily inside closed doors?', ['BoxLift Tailgate (4.2 meters)', 'CargoPro Mid (3.0 meters)', 'CityCompact EV (2.1 meters)', 'Standard commuter sedans'], 0, 'ตอบ BoxLift Tailgate (กระดานยาว 3.5 เมตร มีแค่ BoxLift Tailgate ยาว 4.2 เมตรที่ใส่พอดี!)'],
      ['Single · Detail', 'How do drivers return keys cleanly if unloading finishes past 7:30 P.M.?', ['Drop keys through the yellow drop box beside Office Door 1', 'Wait until morning 8:00 A.M. opening bell', 'Leave fobs atop front cargo dashboards', 'Mail copies via city courier locks'], 0, 'ตอบ Drop keys through the yellow drop box... (24-hour yellow key-drop chute beside Office Door 1)'],
    ]),

    p7(17, 'm17-s5', [
      doc('letter', 'Client Account Welcome Letter', [['From', 'Nordic Fiber Broadband'], ['To', 'Small Business Office #BF-902'], ['Date', 'August 1']],
        [
          'Welcome onto Nordic Fiber Business 1-Gigabit Service cleanly! Your glass optical modem sits mounted smoothly inside Utility Closet 1, pairing clean Ethernet runs out onto Desk Switch Hubs cleanly with guaranteed 99.95% monthly uptime!',
          'Note carefully: if accidental power strips bump dark inside Utility Closet 1 cleanly, never yank thin yellow fiber-glass jumper patch wires cleanly out of green wall sockets—bending brittle glass cores sharply past 3 cm angles breaks laser light! Instead tap ONLY the white ON/OFF rocker button nicely at right.',
        ]),
    ], [
      ['Single · Safety', 'What warning does Nordic Fiber highlight regarding the thin yellow fiber wall wires?', ['Bending glass fibers tightly or pulling them loose snaps internal glass light strands cleanly', 'Yellow cords carry high-voltage electrical wall currents', 'Green sockets unlock strictly during 99.95% maintenance hours', 'Paper office power strips melt optical wall trays cleanly'], 0, 'ตอบ Bending glass fibers tightly... (never yank yellow wires cleanly — bending brittle glass cores sharply breaks laser light!)'],
      ['Single · Action', 'How should office staff safely reset the fiber box cleanly after a power flicker?', ['Flip only the white ON/OFF toggle switch on the side', 'Unplug yellow optical cords from green ports first', 'Reboot desk switch hubs across main corridors', 'Call Utility Closet repair crews immediately cleanly'], 0, 'ตอบ Flip only the white ON/OFF toggle switch... (tap ONLY white ON/OFF rocker button nicely at right)'],
      ['Single · Detail', 'Where is the building’s optical modem box currently installed?', ['Inside Utility Closet 1', 'Beneath Office Reception Switch Hub', 'Beside Entrance Glass Turnstiles', 'Outside Basement Parking'], 0, 'ตอบ Inside Utility Closet 1'],
    ]),

    p7(17, 'm17-s6', [
      doc('article', 'Smart Shelf Sensors Notify Grocers Instantly Before Dairy Milk Nears Expiration Dates', [['Journal', 'Modern Retail Tech']],
        [
          'Supermarket night stockers traditionally squint manually past dusty glass cartons stamping shiny clearance markdown stickers strictly whenever bored morning managers guess yogurt jars sit dangerously near Tuesday throwaway windows.',
          'Nordic chain FreshGrid tested battery-free e-paper dynamic shelf price strips cleanly paired straight into automated backroom invoice batch logs across twenty stores. Whenever remaining shelf-life drops within 48 crisp hours cleanly, digital shelf labels quietly tick retail milk tags down 30 percent cleanly automatically while flashing clear discount QR colors directly toward budget-savvy afternoon grocery shoppers.',
        ]),
    ], [
      ['Single · Process', 'What triggers automatic 30% price drops cleanly on FreshGrid’s electronic yogurt shelf tags?', ['Batch database dates approaching within 48 hours of expiration cleanly', 'Night stockers scanning paper discount coupons manually', 'Morning store managers noticing dusty glass jars cleanly', 'Shoppers tapping QR discounts at afternoon checkouts'], 0, 'ตอบ Batch database dates approaching within 48 hours... (Whenever remaining shelf-life drops within 48 crisp hours cleanly)'],
      ['Single · Benefit', 'Why did shoppers spot late-afternoon bargains faster under FreshGrid’s system?', ['E-paper tags shift display colors digitally to highlight expiring goods cleanly', 'Loud intercom bells announce dairy sales hourly cleanly', 'Bakery staff hand clearance paper vouchers beside doors cleanly', 'Yogurt moves cleanly onto checkout register belts'], 0, 'ตอบ E-paper tags shift display colors... (flashing clear discount QR colors directly toward budget-savvy afternoon shoppers)'],
      ['Single · Vocab', 'The phrase "squint manually past" in paragraph 1 is closest in meaning to ___.', ['check awkwardly by eye one by one', 'replace broken glass jars', 'photograph digital receipts', 'stack dairy trays nightly'], 0, 'ตอบ check awkwardly by eye one by one (จ้องเพ่งอ่านวันที่บนขวดด้วยตาเปล่าทีละใบ)'],
    ]),

    p7(17, 'm17-s7', [
      doc('ad', 'Now Hiring — Architectural Wood Joinery Technician (CraftForm Studios)', [['Workshop', 'Grand Rapids Factory (Day Shift 7:00 A.M.–3:30 P.M.)']],
        [
          'Join veteran craftspeople building scalloped solid-walnut hotel reception bars and custom oak curved library stair rails cleanly! [1] You will lay smooth maple veneers across curved vacuum presses, calibrate precise CNC dowel mortises cleanly, and hand-rub hardwax matte finishes before wrapping finished reception units safely for nationwide museum freight.',
          'Ideal Profile:',
          lst([
            'Three+ years cabinetmaking, fine architectural millwork, or finish carpentry cleanly',
            'Fluency reading complex architectural Shop Elevation section drawings smoothly',
            'Steadfast pride checking quarter-millimeter tight veneer miters without messy putty',
          ]),
          '[2] Expect $32–$38/hr pay, clean climate air-filtered dust bays, tool allowance ($600/yr), and early 3:30 P.M. afternoon sign-offs cleanly! [3] Email concise resume plus three bench joinery photos calmly cleanly to builds@craftform.io mentioning Walnut Lead. [4]',
        ]),
    ], [
      ['Single · Detail', 'Which industrial safety comfort is mentioned inside the Grand Rapids workshop?', ['Air-filtered dust control systems inside climate bays cleanly', 'Automated museum shipping ramps cleanly', 'Complimentary hotel carpentry classes weekly cleanly', 'Overtime weekend millwork shifts cleanly'], 0, 'ตอบ Air-filtered dust control systems... (clean climate air-filtered dust bays)'],
      ['Single · Requirement', 'What sample files must candidates send along with their resume?', ['Three photographs showing fine personal woodwork joints cleanly', 'Handwritten letters from hotel reception architects cleanly', 'Architectural blueprint elevation posters cleanly mailed', 'Receipts for personal shop tools cleanly'], 0, 'ตอบ Three photographs showing fine personal woodwork joints... (three bench joinery photos)'],
      ['Single · Detail', 'What annual tool purchase perk is included cleanly in employee compensation?', ['$600 yearly hardware allowance', 'Free walnut hotel bars cleanly', '30% museum freight rebates cleanly', 'Lifetime CNC software licenses cleanly'], 0, 'ตอบ $600 yearly hardware allowance (tool allowance $600/yr)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Comfort programming 3-axis CNC router toolpaths brings helpful flexibility cleanly across custom lobby batches."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจาก Ideal Profile ทันที เพื่อเสริมทักษะการควบคุมเครื่อง CNC Router ก่อนเข้าสู่เงินเดือน/สวัสดิการ)'],
    ]),

    p7(17, 'm17-s8', [
      doc('memo', 'Harbor Botanical Expo — Florist Vendor Refrigeration & Unloading Guide', [['Coordinator', 'Expo Booth Ops']],
        [
          'Keeping delicate summer cut peonies fresh cleanly across three busy public exhibition days requires smooth dock cold-chain flow:',
          lst([
            'Drive cold refrigerated vans straight up onto East Hall Dock 1 cleanly BEFORE 7:45 A.M. daily (gates shut sharply ahead of 9:00 A.M. pedestrian traffic!).',
            'Roll extra backup bucket blooms straight into Shared Walk-In Cooler Vault C cleanly—write BOTH Company Name AND Booth Number cleanly using thick blue grease pencils on every black bucket rim!',
            'Loose fallen green foliage stems sweep neatly into marked green Yard Compost Bins beside Corridor 3 rather than regular trash bags cleanly.',
          ]),
        ]),
    ], [
      ['Single · Timing', 'By when must florist delivery vans clear East Hall Dock 1 each morning cleanly?', ['Before 7:45 A.M.', 'Promptly at 9:00 A.M.', 'Anytime before noon cleanly', 'Midnight cleanly'], 0, 'ตอบ Before 7:45 A.M. (cleanly BEFORE 7:45 A.M. daily; gates shut sharply ahead of 9:00 A.M. pedestrian traffic)'],
      ['Single · Detail', 'What must vendors label along bucket rims inside Shared Cooler Vault C?', ['Both company name and assigned booth code cleanly', 'Flower origin country and stem prices cleanly', 'Refrigerator temperatures in Celsius cleanly', 'Departure van plate codes cleanly'], 0, 'ตอบ Both company name and assigned booth code... (write BOTH Company Name AND Booth Number cleanly using thick blue grease pencils)'],
      ['Single · Disposal', 'Where should clipped plant leaves and green stems go?', ['Into green Yard Compost Bins alongside Corridor 3 cleanly', 'Directly down Dock 1 metal drains cleanly', 'Inside black refrigerated flower buckets cleanly', 'Alongside regular booth garbage sacks cleanly'], 0, 'ตอบ Into green Yard Compost Bins alongside Corridor 3 cleanly'],
      ['Single · Cause', 'Why do delivery dock access doors close cleanly before 9:00 A.M.?', ['To keep heavy moving trucks separated from arriving foot visitors cleanly', 'Refrigeration coolers freeze solid at 9:00 A.M.', 'Grease pencil labels require quiet hall hours cleanly', 'Public compost yards lock at 8:30 A.M. cleanly'], 0, 'ตอบ To keep heavy moving trucks separated from arriving foot visitors...'],
    ]),

    p7(17, 'm17-s9', [
      doc('article', 'Autonomous Rail Shuttles Move Quiet Cargo Between Seaside Docks & Inland Parks', [['By', 'Mia Reyes'], ['Issue', 'Maritime Engineering Digest']],
        [
          'Congested interstate freeway ramps outside sprawling ocean container ports routinely idle thousands of grumpy diesel highway truckers burning hours waiting strictly to pull single ocean cargo tins ten miles inland onto cross-dock sorting parks. [1] Exhaust fumes settle heavily across adjacent coastal neighborhoods while narrow dock gates choke traffic queues well down main commuter arterials cleanly.',
          'Port of Rotterdam engineers partnered smoothly with suburban industrial parks this winter testing dedicated solar-charged electric rail pods shuttling container frames noiselessly across retired waterfront freight spurs cleanly. [2] Rather than waiting on sluggish 100-car traditional freight locomotives assembling overnight trains cleanly, self-driving twin-container rail gliders roll straight away cleanly within four minutes of ship crane drops.',
          '"Each unmanned shuttle runs cleanly quietly between harbor crane tracks and inland logistics sorting gates smoothly twenty hours daily cleanly, slicing regional drayage highway trailer congestion down 35 percent cleanly along Avenue West," cheers logistics planner Erik Lindqvist. [3] Compact automated battery dock shoes recharge packs cleanly inside eighteen minutes while cranes exchange fresh empty container tubs silently overhead cleanly.',
          'Two Mediterranean sea terminals recently dispatched planning delegations studying Rotterdam’s twin-container spur layout cleanly for summer adoption cleanly. [4]',
        ]),
    ], [
      ['Single · Problem', 'Why were diesel trucks worsening coastal traffic around sea ports cleanly?', ['Idling drivers waited hours in long dock queues strictly to haul boxes ten miles inland', 'Electric cranes ran slower than old highway locomotives cleanly', 'Interstate bridges closed cleanly for weekend rail trains cleanly', 'Inland parks lacked enough loading doors cleanly'], 0, 'ตอบ Idling drivers waited hours in long dock queues... (burn hours waiting strictly to pull single tins ten miles inland -> choke traffic queues)'],
      ['Single · Contrast', 'How do Rotterdam’s self-driving electric pods outperform traditional 100-car freight trains cleanly?', ['Individual twin-container pods depart within minutes instead of waiting hours assembling huge trains cleanly', 'Autonomous diesel locomotives drive across residential city streets', 'Traditional trains lack automated overhead crane hooks cleanly', 'Electric pods carry 100 heavy shipping boxes together'], 0, 'ตอบ Individual twin-container pods depart within minutes... (Rather than waiting on sluggish 100-car trains, pods roll straight away within four minutes!)'],
      ['Single · Detail', 'When do the autonomous battery shuttles cleanly top back up electric power packs?', ['During rapid eighteen-minute battery shoe stops while overhead cranes swap tubs cleanly', 'Strictly overnight across four inactive hours cleanly', 'Continuously via overhead electric tram cables cleanly', 'At coastal diesel generator stations'], 0, 'ตอบ During rapid eighteen-minute battery shoe stops... (recharge inside 18 minutes while cranes exchange tubs overhead)'],
      ['Single · Vocab', 'The word "choke" in paragraph 1 is closest in meaning to ___.', ['block heavily', 'speed gently', 'filter cleanly', 'divide evenly'], 0, 'ตอบ block heavily (narrow dock gates choke traffic queues = ทำให้รถติดขัดอัดแน่นขวางทางจราจร)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Because retired waterfront tracks ran along separated green corridors cleanly away from public avenues cleanly, zero noisy highway crossings interrupt suburban neighborhoods cleanly."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจากประโยคนำรางเก่าที่ไม่ได้ใช้งานเลียบท่าเรือมาใช้วิ่งรถไฟขนส่งเงียบๆ โดยไม่รบกวนชุมชนถนนหลัก)'],
    ]),

    p7(17, 'm17-d1', [
      doc('webpage', 'Pacific Tech Bootcamp — Corporate Python & Data Engineering Workshops', [['Delivery', 'Live Remote Zoom OR On-Site Campus']],
        [
          tbl(
            ['Training Track', 'Length', 'Cohort Fee (Up to 10 Staff)', 'Additional Seat Over 10'],
            [
              ['Spreadsheet Automation 101', '1 Day (6 hrs)', '$1,600', '+$140 / staff'],
              ['Python Data Pipelines', '2 Days (12 hrs)', '$2,900', '+$230 / staff'],
              ['SQL & Cloud BI Dashboards', '2 Days (12 hrs)', '$2,700', '+$210 / staff'],
            ]),
          'Printed Reference Guidebooks mail FREE when booking 2+ weeks early! On-site instructor travel adds flat $450 outside Seattle.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'corporate@pacifictechboot.com'], ['From', 'Rachel Alvarez (Finance Ops · Portland HQ)'], ['Date', 'October 2'], ['Subject', 'Training Request — November 12–13 Cohort']],
        [
          'Hello Corporate Training Desk,',
          'Looking eagerly toward elevating our regional Portland accounting analysts smoothly onto clean automated reporting pipelines! Planning ONE live two-day workshop specifically on Python Data Pipelines Tuesday & Wednesday November 12–13 cleanly for TWELVE finance analysts cleanly (12 total attendees!).',
          'To skip incurring that extra $450 instructor out-of-town flight/hotel charge to Portland cleanly, let us run the full 2-day workshop neatly live via Remote Zoom! Also booking cleanly over five weeks ahead today on Oct 2 ensures our 12 printed reference guidebooks ship FREE to Floor 6 cleanly right?',
          'Warm regards,\nRachel Alvarez',
        ]),
    ], [
      ['Double · Math', 'Calculate the EXACT total fee Pacific Tech Bootcamp will invoice Finance Ops for 12 staff taking Python Data Pipelines over Remote Zoom cleanly:', ['$3,360', '$2,900', '$3,810', '$3,130'], 0, 'ตอบ $3,360 (10 คนแรกเหมาจ่าย $2,900 + อีก 2 คนเกิน × $230 = $460 -> รวม $3,360; สอนผ่าน Zoom ฟรีค่าเดินทาง $0!)'],
      ['Double · Synthesis', 'Why does Finance Ops owe $0 for instructor travel despite being located cleanly outside Seattle in Portland?', ['Rachel chose Remote Zoom delivery cleanly avoiding instructor on-site flight charges', 'Booking over two weeks early waives out-of-town travel fees cleanly', 'Cohorts over ten staff waive travel cleanly', 'Portland offices qualify cleanly inside Seattle city borders cleanly'], 0, 'ตอบ Rachel chose Remote Zoom delivery cleanly... (เพื่อเลี่ยงค่าเดินทาง $450 outside Seattle จึงเลือกเรียนแบบ Live Remote Zoom!)'],
      ['Double · Synthesis', 'Will the 12 analysts receive free printed reference guidebooks cleanly ahead of November 12?', ['Yes, booking October 2 cleanly beats the 2-week early cutoff by over three weeks', 'No, Remote Zoom tracks strictly mail digital PDF files cleanly', 'Only cohorts buying SQL & Cloud BI dashboards earn printed guides', 'Additional seats over ten owe shipping stamps cleanly'], 0, 'ตอบ Yes, booking October 2 beats the 2-week early cutoff... (จอง Oct 2 ก่อนงาน Nov 12 ตั้ง 5+ สัปดาห์ เกินเกณฑ์ 2+ weeks early!)'],
      ['Double · Detail', 'How many total training hours does the Python Data Pipelines track include?', ['12 hours spread across two days', '6 hours across one day', '24 hours across four days', '10 hours cleanly'], 0, 'ตอบ 12 hours spread across two days'],
      ['Double · Detail', 'How much LESS would 12 staff have spent cleanly if Rachel had opted for SQL & Cloud BI Dashboards instead over Zoom?', ['$240 less ($3,120 vs $3,360)', '$200 less ($3,160 vs $3,360)', '$450 less cleanly', '$100 less'], 0, 'ตอบ $240 less (SQL 12 คน = $2,700 + 2×$210 = $3,120 เทียบ Python $3,360 -> ต่างกัน $240!)'],
    ]),

    p7(17, 'm17-d2', [
      doc('notice', 'Greenfield Community Pool — Private Swim Lane & Birthday Poolside Rules', [['Booking Desk', 'Pool Check-In Counter 1']],
        [
          lst([
            'Party Cabana Terrace (seats 25 cleanly) reserves cleanly Saturday or Sunday afternoons 1:30–4:30 P.M. cleanly ($140 rental covers 15 youth admission wristbands + shaded picnic tables cleanly!).',
            'Additional swimmers cleanly above 15 guests cost $7 per extra wrist band neatly payable cleanly upon check-in.',
            'NO homemade glass bowls or birthday candles allowed cleanly—electric flameless LED cake toppers welcome alongside packaged pizzas!',
          ]),
        ]),
      doc('email', 'E-mail Message',
        [['To', 'parties@greenfieldpool.org'], ['From', 'Benny Patel'], ['Date', 'July 8'], ['Subject', 'Sunday July 21 Party Confirmation — 19 Young Swimmers']],
        [
          'Hello Pool Team,',
          'Booked our son’s 10th birthday Party Cabana Terrace nicely for Sunday afternoon, July 21 (1:30–4:30 P.M.)! Final RSVP confirmations cleanly came back today showing 19 excited swimmers cleanly rather than 15—I will gladly pick up all four extra swimmer wristbands ($7 each cleanly) at Check-In Counter 1 cleanly when arriving at 1:15 P.M. Sunday!',
          'We ordered sealed hot cardboard pizza boxes cleanly AND swapped birthday candles neatly onto safe glowing plastic LED number lights cleanly as required cleanly! Checking briefly—do supervising non-swimming parents sitting calmly in terrace shade need wristbands cleanly?',
          'Thanks!\nBenny Patel',
        ]),
    ], [
      ['Double · Math', 'How much total WILL Benny Patel end up spending together cleanly on Terrace rental ($140 paid) PLUS the 4 extra youth swimmer wristbands?', ['$168', '$140', '$133', '$175'], 0, 'ตอบ $168 (แพ็กเกจ $140 รวม 15 คน + เกินอีก 4 คน (19-15=4) × $7 = $28 -> รวม $168!)'],
      ['Double · Detail', 'How did Benny comply beforehand cleanly with pool fire and breakage safety rules?', ['Bringing sealed pizzas and swapping real wax candles for battery LED number lights cleanly', 'Signing parent waiver forms inside Check-In Counter 1 cleanly', 'Leaving all shaded picnic tables empty cleanly', 'Limiting swimmers to 15 strictly inside lanes'], 0, 'ตอบ Bringing sealed pizzas and swapping candles for safe glowing LED lights... (กฎห้ามชามแก้วและเทียนจริง อนุญาตพิซซ่ากล่องและไฟ LED)'],
      ['Double · Detail', 'At what clock hour does Benny plan arriving Sunday afternoon?', ['At 1:15 P.M.', 'At 1:30 P.M.', 'At 4:30 P.M.', 'At 10:00 A.M.'], 0, 'ตอบ At 1:15 P.M. (when arriving at 1:15 P.M. Sunday!)'],
      ['Double · Inference', 'Why does Benny double-check rules at the end of his message?', ['To verify whether non-swimming supervising parents require admission wristbands cleanly', 'To transfer party hours cleanly onto Saturday July 20', 'To obtain extra glass pizza trays cleanly', 'To cancel four RSVP slots cleanly'], 0, 'ตอบ To verify whether non-swimming parents require wristbands cleanly'],
      ['Double · Detail', 'What is the maximum seated capacity of the shaded Party Cabana Terrace?', ['25 people cleanly', '15 people cleanly', '19 people cleanly', '30 people cleanly'], 0, 'ตอบ 25 people cleanly (Party Cabana Terrace seats 25 cleanly)'],
    ]),

    p7(17, 'm17-t1', [
      doc('ad', 'Apex Workwear Direct — Embroidered Chef Jackets & Apron Deals', [['Factory', 'Custom Stitch Lab · Ohio']],
        [
          tbl(
            ['Garment Style', 'Fabric', '1–11 Units', '12+ Units', 'Custom Left-Chest Logo Stitch'],
            [
              ['Classic Double-Breast Coat', '65/35 Twill Blend', '$34', '$27', '+$6 / coat'],
              ['CoolMesh Executive Coat', 'Organic Cotton Vent', '$48', '$39', '+$6 / coat'],
              ['Cross-Back Linen Apron', 'Heavy Canvas', '$24', '$19', '+$5 / apron'],
            ]),
          'Free Digitizing Thread Logo Setup ($40 value waived FREE cleanly on orders hitting $400+ merchandise total!).',
        ]),
      doc('chat', 'Kitchen Opening Team Chat', [['Between', 'Chef Rosa & Manager Kevin'], ['Date', 'March 14']],
        [
          chat([
            ['Chef Rosa', '11:05 A.M.', 'Ordering crisp uniforms cleanly ahead of Grand Opening next month! Let us get TWELVE Classic Double-Breast Coats cleanly WITH our custom Bistro leaf emblem stitched on left chests PLUS EIGHT Cross-Back Linen Aprons WITH stitched logos too neatly cleanly!'],
            ['Manager Kevin', '11:10 A.M.', 'Wait—ordering 12 coats unlocks that sweet $27 coat bulk discount cleanly, though notice 8 aprons sits strictly below 12 units cleanly so aprons calculate cleanly at standard $24 each! Checking subtotal: coats + aprons tops $500 easily cleanly so our $40 logo digitizing fee drops straight to ZERO cleanly! Ordering right now cleanly!'],
          ]),
        ]),
      doc('invoice', 'Apex Workwear Order #AW-5509',
        [['Buyer', 'Bistro Fern Downtown'], ['Date', 'March 14']],
        [
          '12 × Classic Double-Breast Coats ($27 bulk = $324) + 12 × Chest Logo Stitch ($72) = $396.',
          '8 × Cross-Back Linen Aprons ($24 retail = $192) + 8 × Logo Stitch ($40) = $232.',
          'Digitizing Setup Fee: $0.00 (Waived over $400 cleanly) · Total Paid: $628.00.',
        ]),
    ], [
      ['Triple · Synthesis', 'Why did Cross-Back Linen Aprons charge $24 per piece on Order #AW-5509 cleanly rather than $19?', ['Bistro Fern ordered only 8 aprons, falling short of the 12+ bulk threshold', 'Logo stitching forces regular $24 rates cleanly', 'Ohio stitch labs exclude bulk discounts on canvas aprons cleanly', 'Double-Breast Coats took all available discount caps cleanly'], 0, 'ตอบ Bistro Fern ordered only 8 aprons... (12+ Units ถึงจะได้ราคา $19 แต่สั่งแค่ 8 ผืนจึงคิดเรท 1–11 คือ $24!)'],
      ['Triple · Synthesis', 'Verify why the $40 Logo Digitizing Thread Setup Fee was waived cleanly to $0.00:', ['Total merchandise ($396 coats/stitch + $232 aprons/stitch = $628 cleanly) surpassed the $400 minimum', '12+ Double-Breast Coats waive setup automatically cleanly', 'March orders never incur digitizing costs cleanly', 'Manager Kevin supplied pre-digitized stitch tapes cleanly'], 0, 'ตอบ Total merchandise surpassed $400... ($628 > $400 ตามเงื่อนไข waived FREE on orders hitting $400+ merchandise total!)'],
      ['Triple · Math', 'Calculate the exact TOTAL price for 12 Cross-Back Linen Aprons WITH 12 Custom Logo Stitches:', ['$288', '$228', '$348', '$232'], 0, 'ตอบ $288 ($19 ค่าผ้ากันเปื้อน 12+ ตัว + $5 ค่าปัก = $24/ตัว × 12 = $288)'],
      ['Triple · Detail', 'Which fabric is used cleanly for the Classic Double-Breast Coat?', ['A 65/35 twill blend cleanly', 'Heavy woven canvas cleanly', 'Organic vented linen cotton cleanly', 'Nylon mesh cleanly'], 0, 'ตอบ A 65/35 twill blend cleanly (ตารางแถว Classic Double-Breast Coat -> 65/35 Twill Blend)'],
      ['Triple · Detail', 'What custom embroidered artwork appears cleanly on the left chests?', ['A Bistro leaf emblem', 'Chefs’ initials cleanly', 'Restaurant opening year cleanly', 'Golden geometric stripes cleanly'], 0, 'ตอบ A Bistro leaf emblem (our custom Bistro leaf emblem stitched on left chests)'],
    ]),

    p7(17, 'm17-t2', [
      doc('article', 'Westside Music Festival Adds Free Evening Bike Valet & Rain Poncho Booths', [['Dates', 'July 19–21 · Cedar Meadow Park']],
        [
          'Enjoy thirty indie folk and brass bands smoothly across three open-air hillside stages cleanly during Cedar Meadow Summer Sounds July 19–21! Shuttle loops roll straight out of Union Train Hub every ten minutes cleanly—wristbands allow re-entry until 9:00 P.M.',
        ]),
      doc('table', 'Friday July 19 Evening Headliner Schedule (Wristband Gates Open 4:00 P.M.)', null, [
        tbl(
          ['Stage Name', 'Time', 'Performer Group', 'Genre Focus', 'Rain Backup Canopy?'],
          [
            ['Oak Hill Stage', '6:30–7:45 P.M.', 'Riverfolk Acoustic Trio', 'Acoustic Strings', 'No (Open grass lawn)'],
            ['Cedar Shell', '7:30–8:45 P.M.', 'BlueWave Brass Collective', 'New Orleans Brass', 'Yes (Covered wood shell)'],
            ['Meadow Tent', '8:15–9:30 P.M.', 'The Timberline Strings', 'Electric Cello Pop', 'Yes (Enclosed big-top)'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'hello@cedarsoundsfest.org'], ['From', 'Sofia Sato'], ['Date', 'July 17'], ['Subject', 'Friday Accessibility + Rain Weather Question']],
        [
          'Hi Festival Team,',
          'Bringing my visiting grandparents smoothly out Friday night July 19 cleanly for The Timberline Strings at 8:15 P.M. inside Meadow Tent cleanly! Notice weather forecasts show passing light evening showers right around 8:00 P.M. cleanly—super grateful Meadow Tent features an enclosed big-top roof!',
          'Quick logistics question: if we drive earlier calmly around 6:15 P.M. checking out part of Riverfolk Acoustic Trio cleanly BEFORE moving under cover cleanly at 8:00 P.M., where near Oak Hill Stage can seniors sit calmly on cushioned accessible risers cleanly?',
          'Warmly,\nSofia Sato',
        ]),
    ], [
      ['Triple · Synthesis', 'Why does Sofia NOT worry about 8:00 P.M. showers ruining The Timberline Strings set?', ['Meadow Tent performs underneath an enclosed big-top roof', 'Oak Hill Stage distributes free heavy umbrellas', 'Rain cancels outdoor evening bands after 8:00 P.M.', 'Shuttle loops move concerts inside Union Train Hub'], 0, 'ตอบ Meadow Tent performs underneath an enclosed big-top roof (ตารางระบุ Rain Backup Canopy: Yes Enclosed big-top)'],
      ['Triple · Synthesis', 'Which stage overlaps for fifteen minutes with Cedar Shell’s opening AND lacks a rain backup canopy?', ['Oak Hill Stage', 'Cedar Shell', 'Meadow Tent', 'Union Train Hub'], 0, 'ตอบ Oak Hill Stage (สิ้นสุด 7:45 P.M. ทับซ้อน 15 นาทีกับช่วงเริ่ม 7:30 P.M. ของ Cedar Shell และไม่มีหลังคากันฝน)'],
      ['Triple · Detail', 'Up to what clock time can ticket wristbands permit leaving and re-entering the park?', ['Until 9:00 P.M.', 'Until 4:00 P.M.', 'Until 7:45 P.M.', 'All night continuously'], 0, 'ตอบ Until 9:00 P.M. (wristbands allow re-entry until 9:00 P.M.)'],
      ['Triple · Detail', 'At what time do shuttle buses run from Union Train Hub?', ['Every 10 minutes cleanly', 'Once hourly on Fridays', 'Strictly 6:30 P.M. onward cleanly', 'Every thirty minutes'], 0, 'ตอบ Every 10 minutes cleanly (roll straight out of Union Train Hub every ten minutes)'],
      ['Triple · Detail', 'What time does Sofia’s preferred evening show with The Timberline Strings finish?', ['9:30 P.M.', '8:45 P.M.', '7:45 P.M.', '8:15 P.M.'], 0, 'ตอบ 9:30 P.M. (8:15–9:30 P.M.)'],
    ]),

    p7(17, 'm17-t3', [
      doc('memo', 'Evergreen Consulting — International Travel Rail vs Flight Expense Rule', [['Effective', 'January 1']],
        [
          'For intra-European business routes under 450 kilometers where direct high-speed electric rail reaches city centers cleanly under 4.5 hours, employees MUST choose First-Class Quiet Rail carriages rather than regional short-haul flights cleanly (enabling quiet laptop spreadsheet work continuously en route!). Flights remain reimbursable solely when total direct rail transit climbs above 4.5 hours cleanly or routes cross major open water!',
        ]),
      doc('table', 'European Project Office Transit Comparison Sheet', null, [
        tbl(
          ['City Pair Route', 'Distance', 'Direct Express Rail Time', '1st-Class Rail Fare', 'Direct Regional Airfare'],
          [
            ['Paris <-> Brussels', '310 km', '1 hr 25 mins', '€115', '€165 (plus airport taxi €50)'],
            ['Amsterdam <-> Frankfurt', '430 km', '3 hrs 55 mins', '€145', '€210 (plus airport taxi €45)'],
            ['Berlin <-> Zurich', '840 km', '8 hrs 20 mins', '€220', '€195 (1 hr 25m flight)'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'travel@evergreenconsult.eu'], ['From', 'Martin Diaz (Senior Analyst)'], ['Date', 'April 19'], ['Subject', 'Travel Expense Approval — Next Week Client Visits']],
        [
          'Hi Finance Team,',
          'Booking next Tuesday’s multi-city engineering roadshow cleanly right now! First I ride smoothly from Amsterdam straight to Frankfurt Tuesday morning cleanly for afternoon bank audits, and then fly cleanly Tuesday late night from Frankfurt straight onward onto a Wednesday Berlin–Zurich project kickoff meeting cleanly!',
          'Checking Policy compliance cleanly before tapping corporate card buy buttons: clearly Amsterdam–Frankfurt sits comfortably under BOTH 450 km AND 4.5 hrs cleanly so First-Class Rail (€145) complies 100%, whereas Wednesday’s Berlin <-> Zurich leg easily crosses 8 hours by rail cleanly so taking the €195 regional plane cleanly meets rules smoothly right?',
          'Best,\nMartin Diaz',
        ]),
    ], [
      ['Triple · Synthesis', 'Why is Martin’s plan to ride 1st-Class Rail (€145) Amsterdam->Frankfurt AND fly Berlin->Zurich (€195) 100% compliant with January 1 Policy?', ['Amsterdam–Frankfurt is under 450 km / 4.5 hrs requiring rail, whereas Berlin–Zurich runs 8 hrs 20 mins (>4.5 hrs), allowing flights cleanly', 'Every analyst traveling multi-city trips skips rail mandates automatically cleanly', 'Only Paris–Brussels requires high-speed trains cleanly', 'Regional airfare sits below €200 on every German route cleanly'], 0, 'ตอบ Amsterdam–Frankfurt is under 450 km / 4.5 hrs requiring rail, whereas Berlin–Zurich runs 8h 20m (>4.5 hrs) allowing flights cleanly!'],
      ['Triple · Math', 'Calculate exact total ticket savings on Martin’s Amsterdam -> Frankfurt leg ALONE by riding 1st-Class Rail (€145) instead of taking the flight + airport taxi (€210 + €45):', ['€110 saved', '€65 saved cleanly', '€45 saved cleanly', '€90 saved'], 0, 'ตอบ €110 saved (€210 ตั๋วเครื่องบิน + €45 แท็กซี่สนามบิน = €255 ลบ ค่ารถไฟ €145 = ประหยัด €110!)'],
      ['Triple · Detail', 'Why does corporate travel policy prefer First-Class Quiet Rail on trips under 4.5 hours?', ['Quiet seats let staff work continuously on laptops into city centers', 'Airport taxis charge higher corporate VAT cleanly', 'Trains hold heavier display suitcases cleanly free', 'European airlines suspended Tuesday afternoon flights cleanly'], 0, 'ตอบ Quiet seats let staff work continuously... (enabling quiet laptop spreadsheet work continuously en route!)'],
      ['Triple · Inference', 'Which listed route saves €100 cleanly when combining flight ticket plus airport taxi vs 1st-Class rail?', ['Paris <-> Brussels (€215 flight+taxi vs €115 rail = €100 saved)', 'Berlin <-> Zurich (€195 vs €220)', 'Amsterdam <-> Frankfurt (€255 vs €145 = €110)', 'None save €100 exactly cleanly'], 0, 'ตอบ Paris <-> Brussels (€165+€50 = €215 เทียบ €115 = ประหยัด €100!)'],
      ['Triple · Detail', 'When is Martin’s Berlin -> Zurich project kickoff scheduled?', ['Wednesday', 'Tuesday morning cleanly', 'April 19 cleanly', 'Thursday afternoon'], 0, 'ตอบ Wednesday (Wednesday Berlin–Zurich project kickoff meeting)'],
    ]),

    // ══════════════════ SET 18 (Q147–Q200: 54 Qs) ══════════════════
    p7(18, 'm18-s1', [
      doc('memo', 'HR Benefits Reminder', [['To', 'Full-Time Employees'], ['From', 'Payroll & Benefits'], ['Date', 'November 4']],
        [
          'Open enrollment windows for selecting next year’s healthcare dental tiers close strictly at 6:00 P.M. Wednesday, November 20.',
          'Employees happy retaining identical current plan tiers do NOT need to re-submit portal forms—existing coverage rolls over automatically cleanly January 1.',
        ]),
    ], [
      ['Single · Detail', 'What happens cleanly if an employee does NOT submit new forms before November 20?', ['Their existing health and dental selections stay active automatically', 'Healthcare coverage expires cleanly January 1', 'Payroll switches workers onto basic plans', 'Employees owe late registration fees'], 0, 'ตอบ Their existing health and dental selections stay active automatically (existing coverage rolls over automatically January 1)'],
      ['Single · Detail', 'At what hour does the enrollment portal close cleanly on November 20?', ['6:00 P.M.', 'Midnight', '5:00 P.M.', '8:00 A.M.'], 0, 'ตอบ 6:00 P.M. (close strictly at 6:00 P.M. Wednesday, November 20)'],
    ]),

    p7(18, 'm18-s2', [
      doc('notice', 'Oakwood Municipal Zoo — Dusk Photography Pass', [['Schedule', 'Wednesdays · 5:30–8:00 P.M.']],
        [
          'Avoid weekday family strollers cleanly! Every Wednesday evening from May through August, photographers carrying heavy zoom tripods enter South Aviary Walk early after daytime crowds exit cleanly ($18 photographer pass).',
          'Silently switch camera shutter sound modes ON quiet electronic—loud camera flash bulbs remain strictly forbidden near nocturnal owls.',
        ]),
    ], [
      ['Single · Detail', 'Which gear is permitted on Wednesday evening Dusk Passes despite being restricted earlier?', ['Heavy camera zoom tripods', 'Bright flash light strobes', 'Electric scooter carts', 'Loud mechanical shutter chimes'], 0, 'ตอบ Heavy camera zoom tripods (photographers carrying heavy zoom tripods enter smoothly)'],
      ['Single · Safety', 'What rule protects nocturnal owls inside South Aviary Walk?', ['Camera flash bulbs are completely banned and shutters stay quiet', 'Visitors enter strictly in pairs cleanly', 'Gates shut earlier than 5:30 P.M.', 'Pass fees triple cleanly after sunset'], 0, 'ตอบ Camera flash bulbs are completely banned... (switch shutter sound quiet electronic — flash bulbs remain strictly forbidden)'],
    ]),

    p7(18, 'm18-s3', [
      doc('chat', 'Store Merchandising Chat', [['Channel', '#bakery-counter'], ['Date', 'April 9']],
        [
          chat([
            ['Kenji Patel', '7:30 A.M.', 'Morning team! Just unpacked pastry display Case 2, though printed price cards for the new Pistachio Croissants never arrived inside Courier Envelope B.'],
            ['Laura Kim', '7:33 A.M.', 'Oh no! Did Marketing drop editable PDF shelf tag cards neatly inside our shared StoreDrive Design folder?'],
            ['Kenji Patel', '7:36 A.M.', 'Checking StoreDrive right now... Yes!! Folder "Spring_Menu_Cards" has exact match cardstock layout!'],
            ['Laura Kim', '7:39 A.M.', 'Print two sheets straight onto thick cream cardstock sitting cleanly inside Drawer 1 behind Manager Desk—doors unlock at 8:00 A.M.!'],
          ]),
        ]),
    ], [
      ['Single · Problem', 'What item was missing from Courier Envelope B this morning?', ['Display price cards for Pistachio Croissants', 'Fresh baked croissants cleanly', 'Cream cardstock sheets', 'Manager Desk spare keys'], 0, 'ตอบ Display price cards for Pistachio Croissants (printed price cards never arrived inside Envelope B)'],
      ['Single · Solution', 'Where did Kenji locate the needed price card artwork?', ['In a folder called Spring_Menu_Cards on StoreDrive', 'Inside Drawer 1 behind Manager Desk', 'Beneath Case 2 cooling shelves', 'Via Courier Envelope A'], 0, 'ตอบ In a folder called Spring_Menu_Cards on StoreDrive'],
      ['Single · Timing', 'How much time remained before shop doors unlocked when Laura sent her final note?', ['Twenty-one minutes', 'Thirty minutes', 'One full hour', 'Five minutes cleanly'], 0, 'ตอบ Twenty-one minutes (ข้อความส่งเวลา 7:39 A.M. และร้านเปิด 8:00 A.M. = เหลือ 21 นาที!)'],
    ]),

    p7(18, 'm18-s4', [
      doc('table', 'Bayview Charter Coaches — Regional Group Bus Quotes', [['Includes', 'Licensed Coach Driver + Fuel + Highway Tolls']],
        [
          tbl(
            ['Bus Model', 'Max Passenger Seats', '4-Hour Local Loop', 'Full 10-Hour Day Charter', 'Wheelchair Lift Equipped?'],
            [
              ['ShuttleVan 18', '18 seats', '$420', '$860', 'Yes'],
              ['MidCoach 32', '32 seats', '$640', '$1,290', 'No'],
              ['TourLiner 50', '50 seats', '$910', '$1,780', 'Yes'],
            ]),
          'Out-of-city overnight hotel allowance for driver adds flat $145/night on multi-day charters cleanly.',
        ]),
    ], [
      ['Single · Detail', 'Which coach accommodates a 26-person museum group needing a wheelchair accessibility lift smoothly?', ['TourLiner 50', 'MidCoach 32', 'ShuttleVan 18', 'All three coaches'], 0, 'ตอบ TourLiner 50 (26 คนเกิน ShuttleVan 18 และ MidCoach 32 ไม่มีลิฟต์รถเข็น -> ต้องเลือก TourLiner 50!)'],
      ['Single · Math', 'How much would a 2-day (1 overnight stay, Full 10-Hour Day Rate × 2) company retreat on ShuttleVan 18 total including the driver hotel charge?', ['$1,865', '$1,720', '$1,005', '$1,575'], 0, 'ตอบ $1,865 (ค่าเช่ารถ 2 วัน × $860 = $1,720 + ค่าที่พักคนขับ 1 คืน $145 = $1,865!)'],
      ['Single · Detail', 'Which cost is already bundled cleanly into base bus charter rates?', ['Fuel and regional highway road tolls', 'Overnight driver hotel stays cleanly', 'Museum passenger parking passes', 'Extra onboard coffee bars cleanly'], 0, 'ตอบ Fuel and regional highway road tolls (Includes Licensed Coach Driver + Fuel + Highway Tolls)'],
    ]),

    p7(18, 'm18-s5', [
      doc('letter', 'Client Service Follow-Up', [['To', 'Ms. Nora Diaz'], ['From', 'ClearLab Scientific Glassware'], ['Date', 'September 9']],
        [
          'Dear Ms. Diaz,',
          'Thank you for reporting hairline neck fractures noticed along two 2-liter Erlenmeyer borosilicate flasks shipped inside Invoice #CL-408 last Friday. We immediately logged replacement dispatch #CL-408R arriving at your campus loading bay Tuesday afternoon free of charge.',
          'Rather than mailing sharp broken laboratory glass back cleanly—putting postal clerks cleanly at risk cleanly—please sweep shattered fragments cleanly inside your campus sharps disposal bin after taking one quick phone picture for insurance files!',
        ]),
    ], [
      ['Single · Detail', 'What problem happened with Ms. Diaz’s Friday glassware order?', ['Two 2-liter laboratory flasks arrived with cracked glass necks', 'Invoice #CL-408 missed arriving Tuesday cleanly', 'Campus sharps bins ran full cleanly', 'Courier couriers cut fingers unloading crates'], 0, 'ตอบ Two 2-liter laboratory flasks arrived with cracked glass necks (hairline neck fractures noticed along two flasks)'],
      ['Single · Cause', 'Why does ClearLab tell Ms. Diaz NOT to mail broken flasks back cleanly?', ['Broken glass inside return mail puts postal workers at injury risk', 'Campus postal fees exceed $100 per flask cleanly', 'Insurance covers strictly plastic labware returns', 'Shipping cartons ran out Friday cleanly'], 0, 'ตอบ Broken glass inside return mail puts postal workers at injury risk (putting postal clerks cleanly at risk)'],
      ['Single · Requirement', 'What step does ClearLab ask Ms. Diaz to take before discarding broken glass?', ['Take one photograph for insurance documentation', 'Remove barcode stickers off broken rims cleanly', 'Deliver fragments to Loading Bay C', 'Pay replacement dispatch fees beforehand'], 0, 'ตอบ Take one photograph for insurance documentation'],
    ]),

    p7(18, 'm18-s6', [
      doc('article', 'Boutique Ski Jackets Test Plant-Based Insulation Derived Cleanly From Milkweed Pods', [['Publication', 'Outdoor Material Notes']],
        [
          'Wild waterfowl goose down warms subzero alpine parkas superbly cleanly while remaining ultra-packable, though damp sleet quickly clumps untreated bird feathers flat while drawing steady animal-welfare scrutiny across European apparel halls.',
          'Montreal outerwear innovator BorealWeave debuted midweight winter commuter shells stuffed entirely with hollow buoyant North American milkweed seed floss cleanly collected by prairie farming cooperatives. Independent thermal lab scores confirmed milkweed silk clusters match mid-tier synthetic puff coats cleanly at half wet moisture soak-in cleanly while paying prairie growers healthy seasonal fallow-field revenue.',
        ]),
    ], [
      ['Single · Detail', 'Why does BorealWeave’s milkweed plant fiber help prairie farming cooperatives?', ['It generates seasonal side income from harvesting fallow prairie fields', 'Wild geese nest cleanly inside milkweed pods', 'Machinery manufacturers cut synthetic nylon prices cleanly', 'Outerwear jackets ship free across Montreal cleanly'], 0, 'ตอบ It generates seasonal side income... (paying prairie growers healthy seasonal fallow-field revenue)'],
      ['Single · Contrast', 'How does milkweed floss compare with traditional untreated bird down cleanly in damp winter weather?', ['It absorbs roughly half as much damp water smoothly keeping loft', 'It weighs three times heavier dry cleanly', 'It melts cleanly above minus ten degrees', 'Waterfowl down lasts indefinitely wet cleanly'], 0, 'ตอบ It absorbs roughly half as much damp water... (at half wet moisture soak-in cleanly)'],
      ['Single · Vocab', 'The word "scrutiny" in paragraph 1 is closest in meaning to ___.', ['critical examination', 'enthusiastic praise', 'quiet concealment', 'budget approval'], 0, 'ตอบ critical examination (animal-welfare scrutiny = การตรวจสอบวิพากษ์อย่างเข้มงวดด้านสวัสดิภาพสัตว์)'],
    ]),

    p7(18, 'm18-s7', [
      doc('ad', 'Job Opening — Corporate Pantry & Hospitality Coordinator', [['Firm', 'Halcyon Fintech HQ · Floor 10']],
        [
          'Create welcoming energizing breakroom kitchens cleanly supporting 180 fintech product engineers downtown! [1] You will curate healthy rotating snack deliveries cleanly with three local wholesale bakeries, calibrate automatic espresso bean machines nightly, and tidy stocked glass conference water pitchers ahead of client pitch calls.',
          'Ideal Strengths:',
          lst([
            'One+ year high-touch boutique cafe service, hotel pantry ops, or executive office reception',
            'Warm pride anticipating tea/coffee stock replenishment BEFORE jars look bare cleanly',
            'Ability hoisting 15 kg wholesale sparkling water cartons effortlessly smoothly onto stock dollies',
          ]),
          '[2] Competitive salary ($52,000), transit checks, Friday early release at 3:00 P.M., and free lunch daily! [3] Email CV smoothly to talent@halcyonfintech.com quoting Lounge Role. [4]',
        ]),
    ], [
      ['Single · Detail', 'Which daily morning check is part of the coordinator’s work cleanly?', ['Keeping espresso bars stocked and arranging clean conference water bottles cleanly', 'Coding fintech payroll spreadsheet software', 'Delivering pastries outside to downtown cafes', 'Auditing corporate tax receipts cleanly'], 0, 'ตอบ Keeping espresso bars stocked... (curate snack deliveries, calibrate espresso machines, and tidy conference water pitchers)'],
      ['Single · Requirement', 'How much prior hospitality or office reception experience is asked cleanly?', ['At least one year cleanly', 'Strictly five years minimum cleanly', 'Three months culinary baking internships', 'Two hotel accounting degrees'], 0, 'ตอบ At least one year cleanly (One+ year high-touch boutique cafe service...)'],
      ['Single · Benefit', 'What schedule perk takes place every Friday cleanly?', ['Finishing the workday cleanly early at 3:00 P.M.', 'Working remotely cleanly every Friday afternoon', 'Double pay rates after noon cleanly', 'Closed kitchen breakrooms cleanly'], 0, 'ตอบ Finishing the workday cleanly early at 3:00 P.M. (Friday early release at 3:00 P.M.)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Knowledge tracking snack budget invoices neatly inside Excel spreadsheets also helps nicely."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจาก Ideal Strengths เพื่อเสริมทักษะจัดการงบประมาณใน Excel ก่อนเข้าสู่เงินเดือนสวัสดิการ)'],
    ]),

    p7(18, 'm18-s8', [
      doc('memo', 'City Public Boat Marina — Hurricane Storm Mooring Readiness Policy', [['To', 'Slip Lease Holders'], ['From', 'Harbor Master Desk']],
        [
          'Following coastal gale warnings issued cleanly by Marine Weather Stations 48+ hours ahead of storm surges, boat slip tenants MUST execute standard double-line storm mooring checks promptly cleanly before wind gusts reach 35 knots:',
          lst([
            'Double ALL primary nylon dock cleats cleanly using 16mm chafe-wrapped spring lines.',
            'Roll canvas bimini roofs and loose patio deck chairs safely DOWN INSIDE locked boat cabins—flying canvas acts like runaway sails tearing cleats cleanly off timber piers!',
            'Check automated bilge float switches cleanly by lifting floats manually 5 seconds confirming pump drain flow cleanly.',
          ]),
        ]),
    ], [
      ['Single · Action', 'Why must boat owners detach and store loose deck chairs and canvas tops inside locked cabins?', ['High storm wind catches exposed canvas like sails tearing wooden pier cleats', 'Sunlight damages marine fabric during rainstorms cleanly', 'Bilge pumps draw too much cabin battery power', 'Harbor guards borrow folding chairs smoothly'], 0, 'ตอบ High storm wind catches exposed canvas like sails... (flying canvas acts like runaway sails tearing cleats cleanly off piers)'],
      ['Single · Detail', 'How should boat owners test whether automated bilge drainage pumps function cleanly?', ['Manually lift the float switch for five seconds checking water flow', 'Fill hull cabins cleanly using marina hoses', 'Twist green power plugs cleanly inside Slip Desk', 'Wait until storm waves hit 35 knots cleanly'], 0, 'ตอบ Manually lift the float switch... (by lifting floats manually 5 seconds confirming pump drain flow)'],
      ['Single · Timing', 'When does Harbor Master require storm mooring completion?', ['Promptly after gale warnings ahead of 35-knot gusts arriving', 'Only after winds reach 50 knots cleanly', 'Every Monday morning regardless cleanly', 'Strictly after rainstorms pass marina slips'], 0, 'ตอบ Promptly after gale warnings ahead of 35-knot gusts arriving'],
      ['Single · Material', 'Which thickness nylon safety spring line is mandated cleanly?', ['Sixteen millimeters with chafe guards', 'Five centimeters braided chain', 'Ten millimeters bare steel', 'Standard plastic clothesline'], 0, 'ตอบ Sixteen millimeters with chafe guards (16mm chafe-wrapped spring lines)'],
    ]),

    p7(18, 'm18-s9', [
      doc('article', 'Acoustic Wooden Ceiling Baffles Rescue Echoing Converted Brick Factory Offices', [['By', 'Samir Chen'], ['Journal', 'Interior Workplace Tech']],
        [
          'Software startups adore leasing sunny century-old brick textile warehouses boasting soaring four-meter timber ceilings cleanly—until 80 open-plan engineers start chatting over Friday pizza simultaneously and concrete floors bounce harsh speech reflections sharply like indoor swimming pool halls. [1] Hanging ugly flat white fiberglass hospital drop-tiles hides majestic old wooden beams completely cleanly out of sight cleanly.',
          'Acoustic workshop AcouTimber engineered narrow slotted vertical maple fin baffles hung neatly cleanly between exposed iron roof girders cleanly using slim stainless aircraft cables cleanly. [2] Packed discreetly along upper hidden pine ribs lies dense recycled cotton batting engineered specifically to swallow annoying mid-frequency human vocal clatter without dulling bright industrial warehouse architecture.',
          '"Speech comprehension scores across open lunch pods jumped remarkably cleanly after hanging sixty ceiling blades without obscuring one inch of our century-old brick brickwork," confirms studio manager Leo Morales. [3] Quick-snap tension hooks meant contractors clipped rows smoothly into ceiling timbers cleanly across one Saturday afternoon with zero drilling mess.',
          'Three architectural restoration firms in Chicago already added slotted acoustic maple blades cleanly into autumn loft remodel packages cleanly. [4]',
        ]),
    ], [
      ['Single · Problem', 'Why did employees struggle concentrating inside renovated open-plan brick warehouse offices?', ['Hard exposed brick, glass, and concrete bounced human speech loudly like pools', 'Four-meter timber roofs blocked sunlight cleanly', 'Fiberglass drop-tiles fell loose cleanly off beams cleanly', 'Airports hovered closely above downtown roofs'], 0, 'ตอบ Hard exposed brick, glass, and concrete bounced human speech... (concrete floors bounce harsh speech reflections sharply like indoor swimming pool halls)'],
      ['Single · Design', 'How does AcouTimber preserve the historic industrial ceiling aesthetic while cutting echoes cleanly?', ['Narrow vertical maple fins hang smoothly between old beams leaving brick exposed', 'Heavy thick carpet pads replace wooden beams completely', 'Fiberglass hospital panels paint brick colors cleanly', 'Acoustic windows close cleanly off skylights cleanly'], 0, 'ตอบ Narrow vertical maple fins hang smoothly... (slotted vertical maple fin baffles hung neatly between iron roof girders without obscuring brickwork)'],
      ['Single · Material', 'What hidden material tucked inside upper timber ribs absorbs vocal frequencies?', ['Dense recycled cotton padding', 'Foamed plastic PVC plates cleanly', 'Hollow copper resonant tubes cleanly', 'Mineral wool powder cleanly'], 0, 'ตอบ Dense recycled cotton padding (dense recycled cotton batting engineered specifically to swallow mid-frequency vocal clatter)'],
      ['Single · Vocab', 'The word "soaring" in paragraph 1 is closest in meaning to ___.', ['very tall and lofty', 'slowly sinking', 'noisily rattling', 'darkly shaded'], 0, 'ตอบ very tall and lofty (soaring four-meter ceilings = เพดานสูงโปร่งโอ่อ่า)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Workers could hold quiet two-person design chats five meters cleanly apart without leaning across noisy monitors cleanly."', ['[3]', '[1]', '[2]', '[4]'], 0, 'ตอบ [3] (ขยายผลต่อทันทีหลังจากค่าความชัดเจนของเสียงพูด Speech comprehension scores พุ่งขึ้นหลังติดแผ่นซับเสียง 60 แผ่น)'],
    ]),

    p7(18, 'm18-d1', [
      doc('ad', 'ClearScan Archival Studio — Bulk Photo & Slide Digitizing Tiers', [['Lab', 'Mail-In or Local Drop Desk 1']],
        [
          tbl(
            ['Package Tier', 'Max Loose Prints / Slides', 'Optical DPI Resolution', 'Included Storage Drive', 'Flat Rate'],
            [
              ['Shoebox Essentials', '400 prints', '300 DPI JPEG', 'Secure Cloud Download Link (30 Days)', '$89'],
              ['Heritage Pro Pack', '1,000 prints', '600 DPI Archival TIFF+JPEG', '32 GB Engraved USB Stick + Cloud', '$195'],
              ['Heirloom Master Vault', '2,500 prints', '1,200 DPI Color Restored', '128 GB USB Stick + Linen Keepsake Box', '$410'],
            ]),
          'Add 35mm Plastic Cardboard Carousel Slides cleanly (+$0.35 each) neatly at same resolution cleanly!',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'hello@clearscanarchival.com'], ['From', 'Anita Ortiz'], ['Date', 'June 12'], ['Subject', 'Order Check — 820 Family Prints + 100 Carousel Slides']],
        [
          'Hi Archival Crew,',
          'Cleaning out Grandma’s cedar closet nicely turned up roughly 820 glossy photo prints spanning 1965–1995 PLUS ONE circular tray holding 100 crisp 35mm cardboard Kodak slides cleanly! Because 820 photos clearly tops Shoebox Essentials’ 400-print ceiling, I selected your Heritage Pro Pack cleanly ($195—plus love getting both sharp 600 DPI archival TIFF copies AND that engraved 32 GB USB stick cleanly!).',
          'Checking total quote cleanly when bundling those 100 cardboard carousel slides cleanly alongside the Heritage Pro Pack before dropping my padded box off cleanly Saturday morning?',
          'Warmly,\nAnita Ortiz',
        ]),
    ], [
      ['Double · Math', 'Calculate the EXACT total fee Anita Ortiz owes for Heritage Pro Pack ($195) PLUS 100 Carousel Slides cleanly at +$0.35/slide:', ['$230', '$195', '$124', '$445'], 0, 'ตอบ $230 (แพ็กเกจ Heritage Pro $195 + สไลด์ 100 แผ่น × $0.35 = $35 -> รวม $230!)'],
      ['Double · Synthesis', 'Why did Anita select Heritage Pro Pack cleanly over Shoebox Essentials cleanly?', ['Her 820 photo prints exceed Shoebox’s 400-print limit (plus Heritage adds 600 DPI TIFF files + a 32 GB USB stick cleanly!)', 'Shoebox Essentials bans glossy 1970s prints', 'Carousel slides apply strictly to Heritage tiers cleanly', '30-day cloud download links cost extra cleanly'], 0, 'ตอบ Her 820 photo prints exceed Shoebox’s 400-print limit...'],
      ['Double · Detail', 'Does Anita receive physical hardware storing her scanned images under Heritage Pro Pack?', ['Yes, an engraved 32 GB USB flash drive alongside cloud download links cleanly', 'No, solely 30-day cloud link access', 'Yes, a linen keepsake box with a 128 GB stick cleanly', 'Only printed duplicate negatives cleanly'], 0, 'ตอบ Yes, an engraved 32 GB USB flash drive...'],
      ['Double · Inference', 'How much print room capacity sits STILL SPARE inside Heritage Pro’s 1,000-print quota cleanly after Anita loads 820 paper prints?', ['180 print slots spare cleanly', 'Zero print slots spare', '400 print slots spare', '1,680 print slots spare'], 0, 'ตอบ 180 print slots spare cleanly (1,000 - 820 = 180!)'],
      ['Double · Detail', 'When does Anita intend handing her collection cleanly to ClearScan’s drop desk?', ['Saturday morning', 'June 12 evening', 'Next Wednesday', 'In thirty days'], 0, 'ตอบ Saturday morning (dropping my padded box off cleanly Saturday morning)'],
    ]),

    p7(18, 'm18-d2', [
      doc('notice', 'City Downtown Parking Authority — Meter Holiday & Permit Rules', [['Zone', 'Districts A & B']],
        [
          lst([
            'Street curb meters enforce paid coins/app ticks strictly Mondays through Saturdays cleanly 8:00 A.M.–7:00 P.M. (Sundays + listed National Civic Holidays sit completely FREE!).',
            'Commercial Blue Curb Loading Zones reserve strictly 20-minute hazard-flasher parcel drops cleanly 7:00 A.M.–Noon weekdays (passenger cars ticketing $65 fines immediately cleanly!).',
            'Green Electric Charging Bays enforce 3-hour max plugs cleanly—exceeding 3 hours post-charge adds $15 hourly overtime fines automatically smoothly.',
          ]),
        ]),
      doc('email', 'E-mail Message',
        [['To', 'appeals@cityparkingauth.gov'], ['From', 'Benny Cho'], ['Date', 'Monday, October 14'], ['Subject', 'Ticket #PM-8049 Issued Friday Oct 11 at Elm Street']],
        [
          'Dear Review Desk,',
          'Received a surprise $65 yellow paper citation cleanly tucked under my sedan wiper blades at 10:15 A.M. Friday October 11 while grabbing urgent dry-cleaning bags cleanly across Elm Street! Looking back cleanly, I clearly stayed parked strictly 12 minutes with hazard blinkers flashing—HOWEVER just realized curb paint directly under my front tire reads BLUE COMMERCIAL LOADING ONLY!',
          'Wait—since my standard personal commuter sedan is NOT a registered commercial box delivery van cleanly, I guess Blue Commercial Zone strictly covers registered delivery freight cleanly making that $65 ticket valid right? Confirming before clicking Pay Online today rather than dragging out futile appeals cleanly!',
          'Respectfully,\nBenny Cho',
        ]),
    ], [
      ['Double · Synthesis', 'Based on City Parking Rules, why is Benny’s $65 citation cleanly justified despite staying only 12 minutes cleanly with flashers?', ['Blue Commercial Loading Zones prohibit personal passenger sedans altogether regardless of hazard flashers', 'Parking enforcement tickets every street stay exceeding 10 minutes Fridays cleanly', 'Green Electric Bays require charging cords cleanly', 'October 11 lacked paid app meter ticks cleanly'], 0, 'ตอบ Blue Commercial Loading Zones prohibit personal passenger sedans altogether (กฎระบุ passenger cars ticketing $65 fines immediately cleanly!)'],
      ['Double · Detail', 'Why does Benny write directly to the Parking Authority instead of ignoring the $65 slip?', ['To double-check rule validity before paying online cleanly today', 'To argue Elm Street curbs showed white Sunday markings cleanly', 'To demand full $15 electric bay overtime refunds cleanly', 'To verify October 14 National Holiday exemptions'], 0, 'ตอบ To double-check rule validity before paying... (Confirming before clicking Pay Online cleanly today rather than futile appeals)'],
      ['Double · Detail', 'When can private non-commercial drivers park along regular street meters for free cleanly all day?', ['On Sundays and designated National Civic Holidays', 'Every weekday past 5:00 P.M.', 'Saturday mornings before 10:00 A.M.', 'Whenever hazard flashers blink cleanly'], 0, 'ตอบ On Sundays and designated National Civic Holidays'],
      ['Double · Math', 'If an electric car owner accidentally left their fully charged SUV plugged inside a Green EV bay for 5 hours cleanly (2 hours past the 3-hour limit), what extra overtime fine would apply?', ['$30', '$65', '$15', '$45'], 0, 'ตอบ $30 (เกินลิมิต 3 ชม. มา 2 ชั่วโมง × $15/ชม. = $30!)'],
      ['Double · Detail', 'At what exact clock hour was Benny’s sedan cited on Elm Street?', ['At 10:15 A.M. Friday, October 11', 'At 12:00 P.M. Monday, October 14', 'At 7:00 A.M. Sunday', 'At 8:00 P.M. cleanly'], 0, 'ตอบ At 10:15 A.M. Friday, October 11'],
    ]),

    p7(18, 'm18-t1', [
      doc('ad', 'SunGrid Portable Power Stations — Home & Field Sale', [['Specs', 'LiFePO4 Safe Long-Life Cells']],
        [
          tbl(
            ['Station Model', 'Battery Energy', 'Continuous AC Output', 'Weight', 'Price', 'AC Wall Rapid Charge Time'],
            [
              ['VoltCube 600', '614 Wh', '600 W', '7.1 kg', '$440', '1.8 hrs'],
              ['VoltMax 1500', '1,536 Wh', '1,800 W', '16.8 kg', '$980', '1.5 hrs'],
              ['VoltPro 3000', '3,072 Wh', '3,000 W', '31.5 kg', '$1,890', '2.2 hrs'],
            ]),
          'Add Rolling Heavy-Duty Steel Cart Handle Kit (+$75 — fits ONLY VoltMax 1500 cleanly) OR Waterproof Dust Jacket (+$45 — fits ALL models!). Coupon SUNSAVE10 cuts 10% cleanly off TOTAL cart over $1,000!',
        ]),
      doc('chat', 'Film Documentary Location Chat', [['Thread', '#desert-shoot'], ['Date', 'May 3']],
        [
          chat([
            ['Director Grace', '2:10 P.M.', 'Need silent battery backup cleanly out at our dry lakebed documentary camp running our 1,100W portable induction kettle + camera charger cleanly! VoltCube 600 shuts off cleanly under a 1,100W kettle obviously—let us get VoltMax 1500 cleanly PLUS add that $75 Rolling Steel Cart Handle AND $45 Waterproof Dust Jacket cleanly against dry desert sand cleanly!'],
            ['Sound Lead Tomas', '2:15 P.M.', 'Sweet! Wait—VoltMax + Cart Handle + Dust Jacket pushes cart clean over $1,000 cleanly so coupon SUNSAVE10 knocks 10% off the ENTIRE bundle right away!'],
          ]),
        ]),
      doc('invoice', 'SunGrid Receipt #SG-4120',
        [['Customer', 'RedRock Film Collective'], ['Date', 'May 3']],
        [
          'Items: 1 × VoltMax 1500 ($980) + 1 × Rolling Cart Kit ($75) + 1 × Waterproof Dust Jacket ($45).',
          'Subtotal: $1,100.00 · Coupon SUNSAVE10 (-10%): -$110.00 · Net Charged: $990.00.',
        ]),
    ], [
      ['Triple · Synthesis', 'Why could Director Grace NOT rely on the lighter $440 VoltCube 600 cleanly for the desert film camp?', ['Her 1,100W induction kettle exceeds VoltCube’s 600W continuous AC limit cleanly', 'VoltCube 600 lacks dust jackets cleanly', 'VoltCube requires solar chargers instead of wall plugs', 'Film crews banned batteries weighing under 10 kg cleanly'], 0, 'ตอบ Her 1,100W induction kettle exceeds VoltCube’s 600W limit (กาต้มน้ำกินไฟ 1,100W มากเกินกำลังรับต่อเนื่อง 600W ของรุ่นเล็ก)'],
      ['Triple · Math', 'Compare total net spend: how much LESS did RedRock pay buying ALL 3 items WITH SUNSAVE10 ($990) vs buying VoltMax 1500 ALONE ($980) WITHOUT accessories/coupon cleanly?', ['They got BOTH the $75 Steel Cart AND $45 Dust Jacket cleanly for JUST $10 net extra overall ($990 vs $980!)', 'They actually spent $110 extra', 'It cost $1,100 cleanly after tax', 'They saved $980 altogether'], 0, 'ตอบ They got BOTH accessories for just $10 net extra ($990 เทียบราคาเครื่องเดี่ยวไม่ใช้โค้ด $980 = จ่ายเพิ่มแค่ $10 ได้ทั้งรถเข็น $75 + ผ้าคลุม $45 เพราะทะลุเกณฑ์ลด 10%!)'],
      ['Triple · Detail', 'Which battery station recharges fastest back to 100% cleanly from an AC wall outlet?', ['VoltMax 1500 (1.5 hours)', 'VoltCube 600 (1.8 hours)', 'VoltPro 3000 (2.2 hours)', 'All three take 2 hours exactly cleanly'], 0, 'ตอบ VoltMax 1500 (1.5 hrs เร็วสุดในตาราง)'],
      ['Triple · Detail', 'Why does the rolling handle cart ONLY match Director Grace’s selected VoltMax 1500 model?', ['The store listing specifies the Rolling Steel Cart fits solely VoltMax 1500 cleanly', 'VoltPro 3000 already includes wheels cleanly', 'Desert winds break smaller handles cleanly', 'VoltCube skips dust covers'], 0, 'ตอบ The store listing specifies the Rolling Steel Cart fits solely VoltMax 1500'],
      ['Triple · Detail', 'What outdoor hazard motivated adding the $45 Waterproof Dust Jacket?', ['Blowing sand across the dry lakebed filming camp', 'Monsoon coastal storms in Seattle cleanly', 'Kitchen water spills near reception desks', 'Airport tarmac freight loading'], 0, 'ตอบ Blowing sand across the dry lakebed filming camp (against dry desert sand cleanly!)'],
    ]),

    p7(18, 'm18-t2', [
      doc('article', 'Westport Downtown Streetcar Loops Free Every Third Thursday Evening', [['Program', 'Art & Dine Nights · May–Sept']],
        [
          'Skip crowded valet parking queues cleanly every Third Thursday evening from 5:00 P.M. until 10:30 P.M.! Bright green Harbor Loop Streetcars carry passengers completely free cleanly across fourteen Market Street museum galleries and waterfront dining plazas.',
        ]),
      doc('table', 'Third Thursday Gallery Walk Special Events (July 18 Schedule)', null, [
        tbl(
          ['Stop / Gallery', 'Featured Show', 'Artist Talk Hour', 'Refreshments'],
          [
            ['Stop 2 · Cedar Gallery', 'Botanical Copper Etchings', '6:15–7:00 P.M.', 'Chilled Hibiscus Tea'],
            ['Stop 5 · Harbor Glassworks', 'Kiln-Cast Ocean Bowls', '7:00–7:45 P.M.', 'Sparkling Lemon Cider'],
            ['Stop 9 · Atrium Textiles', 'Natural Indigo Silk Looms', '7:30–8:15 P.M.', 'Oat Shortbread Cookies'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'sarah.chen@pacificarch.com'], ['From', 'Tomás Vega'], ['Date', 'Wednesday, July 17'], ['Subject', 'Plan for Tomorrow’s Third Thursday Streetcar Night']],
        [
          'Hey Sarah!',
          'Confirming tomorrow night’s Third Thursday plan cleanly! Let us meet right beside Market Station Stop 2 at 6:10 P.M. cleanly so we catch the full Botanical Copper Etchings artist talk smoothly until 7:00 P.M.! Then hop on the green streetcar down toward Stop 9 Atrium Textiles cleanly by 7:25 P.M. cleanly in time for Indigo Silk Looms at 7:30 P.M. cleanly—skipping Harbor Glassworks’ 7:00 P.M. talk since talks overlap directly cleanly!',
          'Best part: zero parking validation tickets needed cleanly riding the free evening loop back cleanly at 9:30 P.M. before service concludes!',
          'See you tomorrow,\nTomás',
        ]),
    ], [
      ['Triple · Synthesis', 'Why are Tomás and Sarah skipping Harbor Glassworks’ 7:00 P.M. artist talk on July 18?', ['Its 7:00–7:45 P.M. window overlaps directly with leaving Cedar Gallery at 7:00 P.M. and catching Indigo Looms at 7:30 P.M.', 'Harbor Glassworks stays closed cleanly on July 18 cleanly', 'Sparkling Lemon Cider sold out early cleanly', 'Green streetcars skip Stop 5 completely cleanly'], 0, 'ตอบ Its 7:00–7:45 P.M. window overlaps... (ทอล์ค Stop 2 จบ 7:00 P.M. แล้ว Stop 9 เริ่ม 7:30 P.M. ทำให้เวลา Stop 5 (7:00–7:45) ชนเต็มๆ!)'],
      ['Triple · Synthesis', 'At what clock hour does the complimentary green streetcar stop running Thursday night, giving them ample buffer cleanly after riding back at 9:30 P.M.?', ['10:30 P.M.', '8:15 P.M.', '9:00 P.M.', '7:45 P.M.'], 0, 'ตอบ 10:30 P.M. (free cleanly until 10:30 P.M. จึงยังเหลือเวลาอีก 1 ชั่วโมงหลังขึ้นรถรอบ 9:30 P.M.!)'],
      ['Triple · Detail', 'Which complimentary refreshments will be served at Stop 2 and Stop 9?', ['Chilled Hibiscus Tea and Oat Shortbread Cookies', 'Sparkling Lemon Cider and Oat Cookies', 'Espresso shots and fruit scones', 'Sparkling water only cleanly'], 0, 'ตอบ Chilled Hibiscus Tea and Oat Shortbread Cookies (ตาราง Stop 2 และ Stop 9)'],
      ['Triple · Detail', 'On what exact calendar day did Tomás send his email?', ['Wednesday, July 17', 'Thursday, July 18', 'Tuesday, July 16', 'May 1'], 0, 'ตอบ Wednesday, July 17'],
      ['Triple · Inference', 'Why did Tomás say "zero parking validation tickets needed"?', ['Streetcars operate free along the loop so they avoid paid evening valet parking', 'Gallery parking garages abolished meters cleanly daily', 'Market Station gives free all-night passes cleanly Fridays', 'Silk Loom tickets include curb parking'], 0, 'ตอบ Streetcars operate free... (Hop on free green loop streetcars without driving cars into busy valet garages)'],
    ]),

    p7(18, 'm18-t3', [
      doc('memo', 'Evergreen Catering — Reusable Crate Return Deposit Policy', [['Applies To', 'All Corporate Meal Deliveries']],
        [
          lst([
            'Hot grain trays and porcelain dinner plates arrive cleanly packed inside heavy gray insulated HDPE Crates carrying a refundable $40 per-crate asset deposit logged seamlessly onto initial client invoices.',
            'Leave rinsed empty gray crates stacked beside Reception Lobby BEFORE 10:00 A.M. the following morning cleanly for automated $40 courier refund credit upon driver pickup scan.',
            'Crates missing latches or returned past 48 hours post-event forfeit deposits cleanly to cover lost fleet container inventory!',
          ]),
        ]),
      doc('invoice', 'Evergreen Delivery Slip #EG-704',
        [['Client', 'NorthLight Design Conference'], ['Delivered', 'Thursday, May 16 · 11:45 A.M.']],
        [
          'Items: 35 × Mediterranean Lunch Box Kits packed inside 4 × Gray Insulated HDPE Crates.',
          'Meal Subtotal: $980.00 · Refundable Crate Deposit Charged (4 × $40): $160.00 · Total Paid: $1,140.00.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'dispatch@evergreencatering.com'], ['From', 'Kevin Tan (NorthLight Ops)'], ['Date', 'Friday, May 17 · 8:30 A.M.'], ['Subject', '4 Empty Crates Ready by Reception Lobby']],
        [
          'Morning Evergreen Crew!',
          'Yesterday’s grain bowls received non-stop compliments cleanly from every conference visitor! Writing neatly at 8:30 A.M. right now to confirm all FOUR empty rinsed gray HDPE crates—with all snap latches cleanly intact!—sit stacked nicely beside our ground-floor Reception Lobby cleanly ready well ahead of your 10:00 A.M. morning pickup sweep!',
          'Please credit that full $160 asset deposit smoothly back onto our corporate VISA card once your driver scans crate barcodes cleanly.',
          'Appreciatively,\nKevin Tan',
        ]),
    ], [
      ['Triple · Synthesis', 'Will NorthLight receive its full $160 refundable crate deposit back cleanly?', ['Yes—all 4 undamaged crates were rinsed and staged cleanly at 8:30 A.M. ahead of the 10:00 A.M. pickup cutoff cleanly', 'No—May 17 misses the 48-hour threshold cleanly', 'Only $120 refunds because one crate holds plates cleanly', 'Yes, provided NorthLight orders another $980 lunch cleanly'], 0, 'ตอบ Yes—all 4 undamaged crates were rinsed and staged cleanly at 8:30 A.M. ahead of 10:00 A.M. cutoff (พร้อมตัวล็อกครบถ้วน)'],
      ['Triple · Math', 'Verify Kevin’s final NET catering expense cleanly AFTER that $160 deposit refunds back onto their VISA:', ['$980.00', '$1,140.00', '$940.00', '$820.00'], 0, 'ตอบ $980.00 (จ่ายตอนแรก $1,140 หักคืนมัดจำ 4 ลัง × $40 ($160) = ค่าอาหารสุทธิจริง $980.00!)'],
      ['Triple · Math', 'What was the unit price paid per individual Mediterranean Lunch Box Kit ($980 ÷ 35 boxes)?', ['$28.00 / lunch', '$32.57 / lunch', '$40.00 / lunch', '$25.00 / lunch'], 0, 'ตอบ $28.00 / lunch ($980 ÷ 35 กล่อง = $28.00/กล่อง)'],
      ['Triple · Inference', 'When WOULD NorthLight forfeit its $160 asset deposit entirely cleanly according to policy?', ['If crates stayed sitting unreturned past Saturday afternoon May 18 (48 hrs) or suffered broken latches cleanly', 'If lunches arrived 15 minutes early at 11:30 A.M.', 'If Reception failed rinsing sauce cups prior to May 17', 'If VISA cards paid deposits cleanly instead of checks'], 0, 'ตอบ If crates stayed unreturned past 48 hours or suffered broken latches...'],
      ['Triple · Detail', 'Where did Kevin Tan leave the empty rinsed gray crates cleanly Friday morning?', ['Beside the ground-floor Reception Lobby', 'At Evergreen kitchen loading dock cleanly', 'Inside Floor 5 conference rooms cleanly', 'Along exterior loading ramp alleys cleanly'], 0, 'ตอบ Beside the ground-floor Reception Lobby'],
    ]),

    // ══════════════════ SET 19 (Q147–Q200: 54 Qs) ══════════════════
    p7(19, 'm19-s1', [
      doc('memo', 'Staff Bulletin', [['To', 'Regional Service Technicians'], ['From', 'Fleet Safety Desk'], ['Date', 'January 18']],
        [
          'Portable lithium vehicle tire jump-starters packed neatly behind service van driver seats require recharging monthly neatly up to 90%+, as bitter winter frost drains neglected power packs quickly below cranking thresholds cleanly.',
          'Plug units cleanly onto Office Bay 1 USB benches every first Monday morning cleanly.',
        ]),
    ], [
      ['Single · Cause', 'Why must jump-starter battery packs charge monthly cleanly during winter?', ['Subfreezing winter temperatures steadily sap stored battery cranking power cleanly', 'Office Bay 1 switches electricity strictly to Mondays cleanly', 'Service van driver seats damage USB cords cleanly', 'Batteries stop working entirely past 90% charge cleanly'], 0, 'ตอบ Subfreezing winter temperatures steadily sap cranking power... (winter frost drains neglected packs quickly below cranking thresholds)'],
      ['Single · Detail', 'When and where should staff recharge portable jump-starters cleanly?', ['First Monday mornings at Office Bay 1 USB benches', 'Every Friday afternoon cleanly inside vans', 'Whenever service drivers report flat tires', 'Inside personal home garages daily cleanly'], 0, 'ตอบ First Monday mornings at Office Bay 1 USB benches'],
    ]),

    p7(19, 'm19-s2', [
      doc('ad', 'Grandview Neighborhood Laundry — Express Wash-Dry-Fold Drop-Off', [['Location', '14 Elm Avenue']],
        [
          'Too swamped cleanly mid-week finishing spreadsheets cleanly to sort mountain laundry piles? Drop cloth hamper bags across our counter before 9:00 A.M. weekdays cleanly and pick up neatly folded lavender-scented stacks cleanly after 5:00 P.M. same day cleanly for $1.75/pound (10 lb minimum cleanly)!',
        ]),
    ], [
      ['Single · Detail', 'What condition unlocks same-day 5:00 P.M. pickup cleanly?', ['Dropping off laundry bags before 9:00 A.M. on weekdays', 'Paying double $1.75/pound express surcharges', 'Bringing personal lavender fabric softeners cleanly', 'Exceeding twenty pounds strictly cleanly'], 0, 'ตอบ Dropping off laundry bags before 9:00 A.M. on weekdays'],
      ['Single · Math', 'What is the minimum base payment for a small 8-pound drop-off load?', ['$17.50', '$14.00', '$10.00', '$21.00'], 0, 'ตอบ $17.50 (ติดขั้นต่ำ 10 lb minimum cleanly × $1.75 = $17.50!)'],
    ]),

    p7(19, 'm19-s3', [
      doc('chat', 'Design Conference Planning Chat', [['Channel', '#keynote-stage'], ['Date', 'September 16']],
        [
          chat([
            ['Rachel Brooks', '1:10 P.M.', 'Checking auditorium projector HDMI inputs ahead of 2:00 P.M. panel slides cleanly—Guest Speaker Mia Sato’s slim Ultrabook only carries tiny USB-C slots, zero regular HDMI ports cleanly!'],
            ['Marcus Hale', '1:14 P.M.', 'Aha! Every conference speaker eventually forgets dongles cleanly—checked Speaker Tech Pouch #3 in Podium Drawer yet cleanly?'],
            ['Rachel Brooks', '1:17 P.M.', 'Checking Podium Drawer now cleanly... Found USB-C-to-HDMI aluminum dongle neatly sealed inside Tech Pouch #3—plugged in and mirrors sharp crisp 4K slides instantly cleanly!'],
            ['Marcus Hale', '1:20 P.M.', 'Awesome relief cleanly! Tuck spare green masking tape beside USB plug cleanly so bumping feet never shakes video cords mid-talk cleanly!'],
          ]),
        ]),
    ], [
      ['Single · Problem', 'Why could Mia Sato’s laptop NOT plug directly straight into the auditorium HDMI projector cord?', ['Her slim Ultrabook features solely USB-C ports and lacks a standard HDMI port', 'Podium Drawer cables ran out smoothly before noon cleanly', 'Auditorium projectors accept strictly wireless PDF streams cleanly', '4K slides crashed cleanly during testing cleanly'], 0, 'ตอบ Her slim Ultrabook features solely USB-C ports...'],
      ['Single · Solution', 'Where did Rachel locate the needed adapter dongle cleanly?', ['Inside Tech Pouch #3 inside Podium Drawer cleanly', 'In Mia Sato’s luggage bag cleanly', 'At Building IT Desk 2 cleanly', 'Next to green masking tape dispensers cleanly'], 0, 'ตอบ Inside Tech Pouch #3 inside Podium Drawer cleanly'],
      ['Single · Action', 'Why does Marcus advise adding green masking tape around the laptop cord connection?', ['Prevent accidental foot kicks cleanly unplugging presentation video mid-panel cleanly', 'Label speaker cables clearly for Tech Pouch #3 returns', 'Fix loose 4K screen resolution pixels cleanly', 'Calm loud acoustic microphone feedback cleanly'], 0, 'ตอบ Prevent accidental foot kicks unplugging... (so bumping feet never shakes video cords mid-talk cleanly)'],
    ]),

    p7(19, 'm19-s4', [
      doc('table', 'NorthPort City Museum — Annual Membership Tiers', [['Benefits', 'Valid 12 Months From Purchase Date']],
        [
          tbl(
            ['Tier Level', 'Annual Fee', 'Unlimited Adults Covered', 'Free Guest Passes / Visit', 'Special Exhibition Previews'],
            [
              ['Solo Scholar', '$55', '1 named cardholder', '0 (Guests 20% off)', 'Member Morning Access'],
              ['Duo Companion', '$88', '2 named adults (OR 1 adult + 1 guest)', '1 per visit cleanly', 'Member Morning + 1st Look Night'],
              ['Patron Family', '$135', '2 named adults + all youths <18', '2 per visit cleanly', 'All Previews + Curator Gala Invite'],
            ]),
          'All tiers save 15% cleanly across Museum Design Gift Shop books & mugs cleanly year-round!',
        ]),
    ], [
      ['Single · Detail', 'Which membership tier allows ONE named solo cardholder to bring ONE rotating friend FREE on every trip cleanly?', ['Duo Companion ($88)', 'Solo Scholar ($55)', 'Patron Family ($135)', 'Museum Gift Shop card'], 0, 'ตอบ Duo Companion (ตารางระบุ OR 1 adult + 1 guest · Free Guest Passes: 1 per visit cleanly)'],
      ['Single · Benefit', 'Which privilege applies evenly cleanly across ALL three membership levels?', ['Fifteen percent discount inside the Museum Gift Shop', 'Complimentary guest entry passes cleanly', 'Evening Curator Gala dinner invites', 'Unlimited youths under age eighteen'], 0, 'ตอบ Fifteen percent discount inside the Museum Gift Shop'],
      ['Single · Detail', 'What special perk distinguishes Patron Family passes besides family youth admission?', ['Complimentary invitations cleanly to Curator Gala events cleanly and two free guests', 'Discounts above 30% on architectural mugs', 'Lifetime multi-year membership extensions cleanly', 'Private evening after-hours tours cleanly'], 0, 'ตอบ Complimentary invitations to Curator Gala...'],
    ]),

    p7(19, 'm19-s5', [
      doc('review', 'Verified Buyer Review — BreezeQuiet HEPA Air Purifier M6', [['Buyer', 'Kenji Takahashi · Studio Owner']],
        [
          'Review: "Clears pine pollen and dusty street smoke smoothly inside our 45-square-meter graphic studio in barely fifteen quiet minutes cleanly! Sleep mode drops blue panel LEDs completely black AND drops fan noise quietly below soft rustling tree leaves—zero midnight buzz! Note for buyers: rear magnetic dust pre-filter screens grab pet hair well cleanly, though wait—rinse outer foam vacuumed weekly neatly rather than submerging inner pleated HEPA paper drums cleanly in water!"',
          'Brand Team Reply: "Spot-on filter care reminder neatly, Kenji! Vacuuming outer foam nets boosts paper HEPA filter drum life safely cleanly out to twelve full months—remember replacement pleated barrels rest stocked cleanly across retail partners!"',
        ]),
    ], [
      ['Single · Praise', 'Why does Kenji appreciate Sleep mode inside his studio/apartment cleanly?', ['Panel lights black out completely and fan noise turns whisper-quiet cleanly', 'Auto timers shut HEPA turbines down automatically at midnight cleanly', 'Pollen sensors run double speed silently at night cleanly', 'Rear magnetic screens eject gathered pet dust automatically cleanly'], 0, 'ตอบ Panel lights black out completely and fan noise turns whisper-quiet'],
      ['Single · Care Rule', 'What warning did Kenji share regarding cleaning internal filters?', ['Never wash pleated paper HEPA cores directly with water—vacuum outer foam nets gently instead cleanly', 'Replace inner drums every Monday cleanly', 'Soak magnetic dust screens weekly cleanly inside hot bleach cleanly', 'Unplug purifier panels cleanly before wiping outer foam'], 0, 'ตอบ Never wash pleated paper HEPA cores with water... (rather than submerging inner pleated HEPA paper drums in water!)'],
      ['Single · Detail', 'How long does an inner HEPA drum generally last when outer pre-filters get vacuumed smoothly weekly?', ['Up to twelve full months cleanly', 'Barely fifteen minutes cleanly', 'Six months strictly cleanly', 'Two years guaranteed'], 0, 'ตอบ Up to twelve full months cleanly (out to twelve full months cleanly)'],
    ]),

    p7(19, 'm19-s6', [
      doc('article', 'Small Commercial Vineyards Turn Pruned Winter Grapevine Wood Cleanly Into Eco Briquettes', [['Region', 'Loire Valley Commerce']],
        [
          'Every frosty January, European wine estates trim millions of woody bare vineyard canes along terraced hillside rows cleanly—traditionally burning smoky damp brush piles outdoors in noisy roadside fires throughout wet February mornings cleanly.',
          'Recently, thirty cooperative vineyards in western France pooled mobile high-pressure wood-chipping bailers cleanly turning trimmed winter canes cleanly into dense aromatic smoking & grilling hardwood briquettes snapped eagerly upward smoothly across urban steakhouse charcoal grills, cutting agricultural smoke complaints cleanly nearly to zero while earning extra winter coop cash.',
        ]),
    ], [
      ['Single · Problem', 'What messy seasonal habit were European vineyards trying to eliminate?', ['Burning smoky damp winter vine branch heaps along open rural roadsides cleanly', 'Ordering steakhouse briquettes from overseas logging firms cleanly', 'Leaving dead wood canes tangled across harvest tractor tracks cleanly', 'Hiring urban grill cooks during frosty January weeks cleanly'], 0, 'ตอบ Burning smoky damp winter vine branch heaps... (traditionally burning smoky damp brush piles outdoors)'],
      ['Single · Customer', 'Who eagerly purchases the finished aromatic briquettes?', ['Urban steakhouse and restaurant charcoal kitchens cleanly', 'Rooftop residential solar gardeners cleanly', 'Paper tissue mills cleanly', 'Municipal asphalt crews cleanly'], 0, 'ตอบ Urban steakhouse and restaurant charcoal kitchens... (snapped eagerly smoothly across urban steakhouse charcoal grills)'],
      ['Single · Vocab', 'The phrasing "snapped eagerly upward" in paragraph 2 suggests urban restaurants ___ the briquettes.', ['bought them quickly in high demand', 'split heavy packages cleanly in half', 'rejected damp smoky charcoal piles', 'stored boxes past February winter'], 0, 'ตอบ bought them quickly in high demand (ขายดีมากจนร้านอาหารแย่งกันซื้อไปใช้)'],
    ]),

    p7(19, 'm19-s7', [
      doc('ad', 'Careers — Customer Sustainability Analyst (EcoMetric SaaS)', [['Location', 'Boston · Hybrid (2 Days In-Office)']],
        [
          'Empower regional bakery chains, freight shippers, and fashion brands cleanly tracking carbon fuel cuts across supply dashboards smoothly! [1] As Customer Sustainability Analyst, you will verify utility electric kWh invoices cleanly inside client data sheets cleanly, highlight anomalous warehouse gas spikes nicely in quarterly PDF client reviews, and advise clients cleanly setting realistic 2030 waste targets.',
          'What Helps You Thrive:',
          lst([
            'Bachelor degree in Environmental Science, Industrial Engineering, Data Analytics, or Business Finance',
            'Crisp mastery transforming messy Excel utility sheets smoothly via SQL or formulas cleanly',
            'Empathetic communication distilling metrics calmly into plain non-jargon action bullets cleanly',
          ]),
          '[2] Benefits cover $72,000–$82,000 pay, commuter rail check, zero-cost climate conference trips, and 4 weeks PTO cleanly! [3] Apply quickly emailing PDF CV plus a 3-sentence summary explaining why data quality matters calmly cleanly to jobs@ecometric.io mentioning Boston Analyst. [4]',
        ]),
    ], [
      ['Single · Detail', 'Which daily task belongs cleanly to the Customer Sustainability Analyst role?', ['Verifying utility invoices cleanly and authoring client quarterly progress reviews cleanly', 'Driving eco-freight delivery vans around Boston cleanly', 'Repairing warehouse gas furnace meters cleanly on site cleanly', 'Selling SaaS licenses cleanly at trade expos'], 0, 'ตอบ Verifying utility invoices... (verify utility kWh invoices, highlight spikes in quarterly client reviews)'],
      ['Single · Requirement', 'Besides emailing a standard CV PDF, what must applicants write smoothly?', ['Three sentences calmly stating why accurate clean data matters cleanly', 'A ten-page academic climate research thesis', 'Complete Boston commuter rail pass receipts cleanly', 'SQL code snippets solving warehouse electricity'], 0, 'ตอบ Three sentences cleanly stating why clean data matters... (3-sentence summary explaining why data quality matters)'],
      ['Single · Detail', 'How frequently do team members work physically inside Boston offices?', ['Two days per week cleanly', 'Every Monday through Friday cleanly', '100% remotely across states cleanly', 'Once quarterly cleanly'], 0, 'ตอบ Two days per week cleanly (Boston · Hybrid 2 Days In-Office)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does this sentence best fit? "Prior hands-on exposure to GHG Protocol Scope 1–3 carbon tracking terminology gives a helpful boost cleanly."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจาก What Helps You Thrive เพื่อเพิ่มความรู้เฉพาะทางคาร์บอนก่อนเข้าสู่เงินเดือน/สวัสดิการ)'],
    ]),

    p7(19, 'm19-s8', [
      doc('memo', 'Harbor Community Arts — Darkroom Chemical Safety & Sink Cleanup Guide', [['Room', 'Basement Photo Studio Room B4']],
        [
          'Silver-gelatin black-and-white darkroom printers smoothly share communal chemical baths cleanly throughout open evening hours cleanly:',
          lst([
            'Mix strictly approved odorless citric-acid Stop Bath liquids—glacial acetic acid concentrates stay barred due to basement ventilation limits cleanly.',
            'Pour exhausted silver-rich Fixer solutions ONLY into sealed Black Recovery Jugs labeled Silver Waste cleanly beneath Drying Sink 2 (NEVER dump down municipal floor drains!).',
            'Wipe stainless developing tongs cleanly before setting tongs cleanly inside dry green racks cleanly so developer trails never contaminate neighboring fixer baths!',
          ]),
        ]),
    ], [
      ['Single · Safety', 'Why are concentrated glacial acetic acid stop baths prohibited cleanly inside Room B4?', ['Indoor basement airflow limits require gentler odorless citric-acid alternatives cleanly', 'Acetic acid stains stainless tongs bright orange cleanly', 'Black Recovery Jugs dissolve under acetic solutions cleanly', 'Silver paper develops cleanly only inside plain cold water'], 0, 'ตอบ Indoor basement airflow limits... (barred due to basement ventilation limits cleanly)'],
      ['Single · Detail', 'How must members safely dispose of used photographic Fixer chemicals cleanly?', ['Pour used liquids strictly into Black Recovery Jugs under Drying Sink 2', 'Flush thoroughly cleanly down hallway bathroom pipes', 'Evaporate spent liquids openly cleanly atop Drying Rack shelves', 'Return full glass bottles cleanly to Reception Lobby'], 0, 'ตอบ Pour used liquids strictly into Black Recovery Jugs under Drying Sink 2'],
      ['Single · Purpose', 'Why does the guide warn printers to wipe developing tongs cleanly before resting them safely?', ['To keep developer droplets cleanly out of neighboring chemical fixer trays cleanly', 'Wet aluminum tongs slip off green shelves cleanly', 'Cotton dry paper wipes cleanly absorb silver waste', 'Developer evaporates cleanly inside two minutes'], 0, 'ตอบ To keep developer droplets cleanly out... (so developer trails never contaminate neighboring fixer baths!)'],
      ['Single · Detail', 'Where is the communal darkroom studio positioned inside the building?', ['In Basement Room B4', 'Next to Floor 2 Drying Racks', 'Behind Lobby Sink 1', 'Inside Rooftop Studio'], 0, 'ตอบ In Basement Room B4'],
    ]),

    p7(19, 'm19-s9', [
      doc('article', 'High-Speed Paper Straw Makers Swap Soggy Glues cleanly for Heat-Sealed Plant Resin', [['By', 'Owen Diaz'], ['Section', 'Food Packaging Today']],
        [
          'Shoppers sipping thick iced berry smoothies cleanly through budget café paper straws dread watching wet cardboard rims peel apart mushily cleanly ten short minutes cleanly after leaving espresso counters. [1] Early paper-straw extruders glued three thin pulp spirals cleanly together using water-soluble starch pastes that swiftly dissolved right upon dipping inside cold acidic lemon or yogurt smoothies.',
          'Packaging machinery builder EcoTube cleanly tackled crumbling paper tubes recently across Austin cafés cleanly by replacing wet starch glues cleanly completely with ultrathin bio-wax plant resin pressed securely cleanly via heated brass curling dies cleanly at 160°C. [2] Heat-sealing melts natural palm-free plant wax cleanly across microscopic pulp crevices cleanly without needing synthetic plastic polymer coats inside.',
          '"Testing iced lemonades steadily over five continuous hours cleanly showed zero unraveling layers cleanly while holding full backyard compostability cleanly after tossing cleanly," cheers regional smoothie chain buyer Priya Brooks. High-speed laser cutters trim batches silently cleanly at 900 tubes hourly per line without messy dripping glue pans stopping morning cleanup shifts cleanly. [3]',
          'Three national coffee chains ordered two million custom forest-green heat-sealed tubes cleanly ahead of warmer May cold-drink launches cleanly next quarter. [4]',
        ]),
    ], [
      ['Single · Problem', 'Why did early paper smoothie straws soften and unravel quickly inside cold beverages?', ['Their spiral paper layers used water-soluble starch pastes that broke down cleanly in liquids', 'Thick iced smoothies freeze paper tubes solid cleanly', 'Laser cutters split micro gaps cleanly along upper rims', 'Cold espresso melts synthetic polymer straw rims'], 0, 'ตอบ Their spiral paper layers used water-soluble starch pastes... (glued spirals cleanly together using water-soluble starch pastes that swiftly dissolved cleanly)'],
      ['Single · Solution', 'How does EcoTube bind spiral pulp sheets cleanly without wet starch paste cleanly?', ['Pressing ultrathin bio-wax plant resin safely through 160°C heated brass rollers', 'Dipping paper tubes cleanly inside melted waterproof PVC plastic linings', 'Twisting four extra cardboard sheets tightly without seals', 'Freezing cardboard spirals cleanly overnight at Austin cafes'], 0, 'ตอบ Pressing ultrathin bio-wax plant resin safely... (bio-wax plant resin pressed securely cleanly via heated brass curling dies cleanly at 160°C)'],
      ['Single · Result', 'How long did EcoTube straws withstand icy acidic drinks intact during testing cleanly?', ['At least five full hours cleanly', 'Barely ten short minutes cleanly', 'Ninety minutes steadily cleanly', 'Twenty-four hours cleanly'], 0, 'ตอบ At least five full hours cleanly (steadily over five continuous hours cleanly showed zero unraveling layers)'],
      ['Single · Vocab', 'The word "unraveling" in paragraph 3 is closest in meaning to ___.', ['coming undone cleanly apart', 'freezing solidly cleanly', 'bending brightly yellow', 'changing berry taste cleanly'], 0, 'ตอบ coming undone cleanly apart (unraveling layers = เกลียวกระดาษคลี่เปื่อยหลุดออกจากกัน)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Staff simply sweep clean dry dust flakes off machine beds nightly rather than chiseling dried starch crust cleanly out of rollers."', ['[3]', '[1]', '[2]', '[4]'], 0, 'ตอบ [3] (วางต่อจากประโยคการตัดหลอดโดยไม่มีถาดกาวหยดเลอะเทอะตอนล้างเครื่องพอดี!)'],
    ]),

    p7(19, 'm19-d1', [
      doc('ad', 'ClearView Modular Booths — Trade Show Floor Rental Packages', [['Service', 'Harborview Convention Center Official Vendor']],
        [
          tbl(
            ['Booth Footprint', 'Backdrop Style', 'Included Furniture', '4-Day Rental Rate', 'Early Order (-15% Before Sept 1)'],
            [
              ['Inline 3m × 3m', '3m Tension Fabric Graphic Wall', '1 High Counter + 2 Stools', '$880', '$748'],
              ['Corner 6m × 3m', 'L-Shape Dual Graphic Wall + LED Bars', '1 Meeting Table + 4 Chairs + Counter', '$1,640', '$1,394'],
              ['Island 6m × 6m', '4-Sided Walkaround Hanging Tower', '2 Lounge Sofas + 2 Counters', '$2,980', '$2,533'],
            ]),
          'Add 55" 4K Display Monitor mounted neatly onto Backdrop Wall (+$240 flat for whole 4-day event!). Note: Early -15% discount applies strictly to booth packages (excludes monitor add-ons cleanly!).',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'expos@clearviewbooths.com'], ['From', 'Ben Patel (NorthWind Robotics)'], ['Date', 'August 24'], ['Subject', 'Order Check — October Autumn Expo Corner Booth']],
        [
          'Hi Expo Crew,',
          'Excited showcasing our sleek robotic delivery grippers at October’s Harborview Expo cleanly! Choosing the L-Shape Corner 6m × 3m booth cleanly gives open walkway visibility from TWO intersection aisles cleanly AND includes seating for private wholesale partner meetings!',
          'Adding ONE mounted 55" 4K Display Monitor onto our graphic wall nicely cleanly so buyers watch slow-motion gripper demo reels nonstop! Locking in this entire reservation smoothly today August 24 cleanly ahead of September 1 secures our Early Order Corner Package + Monitor smoothly—confirm our total itemized charge neatly ($1,634?) before accounting wires EFT cleanly!',
          'Best,\nBen Patel',
        ]),
    ], [
      ['Double · Math', 'Verify Ben Patel’s exact itemized invoice calculation cleanly ($1,634):', ['$1,394 Early Order Corner Package + $240 Monitor Add-On = $1,634 cleanly', '$1,640 Standard Corner Package minus 15% monitor promo = $1,634 cleanly', '$748 Inline Booth + $886 double LED tower cleanly', '$1,640 Corner Package alone cleanly minus $6'], 0, 'ตอบ $1,394 Early Order Corner Package + $240 Monitor = $1,634 (จองวันที่ Aug 24 ก่อน Sept 1 จึงได้ราคา Early Corner $1,394 ส่วนจอมอนิเตอร์ $240 ไม่รวมลด 15% -> $1,394 + $240 = $1,634 เป๊ะ!)'],
      ['Double · Synthesis', 'Why does NorthWind Robotics prefer Corner 6m × 3m cleanly over Inline 3m × 3m?', ['Corner layout attracts foot traffic along two aisles AND comes with table seating cleanly', 'Inline booths prohibit adding 55" 4K demo monitors cleanly', 'Island booths ban robotic hardware demos cleanly', 'Corner packages include two free lounge sofas'], 0, 'ตอบ Corner layout attracts foot traffic along two aisles AND includes seating...'],
      ['Double · Synthesis', 'How much total did booking August 24 rather than waiting until September 5 cleanly SAVE Ben’s team?', ['$246 saved', '$240 saved', '$132 saved', '$447 saved'], 0, 'ตอบ $246 saved ($1,640 - $1,394 = ประหยัด $246 ส่วนค่าจอ $240 ราคาเท่าเดิม!)'],
      ['Double · Detail', 'Which discount rule explains why the 55" 4K Monitor remained flat at $240 rather than dropping 15% cleanly to $204?', ['Early -15% savings exclude optional monitor add-ons cleanly', 'Hardware monitors carry 10-day late charges cleanly', 'LED walls cost extra on L-shape structures cleanly', 'August 24 misses monitor cutoffs cleanly'], 0, 'ตอบ Early -15% savings exclude optional monitor add-ons... (Note: excludes monitor add-ons cleanly!)'],
      ['Double · Detail', 'How many chairs come standard inside the Corner 6m × 3m furniture kit?', ['Four chairs around one meeting table cleanly', 'Two high stools only', 'Two lounge sofas cleanly', 'Six conference benches cleanly'], 0, 'ตอบ Four chairs around one meeting table (ตาราง: 1 Meeting Table + 4 Chairs + Counter)'],
    ]),

    p7(19, 'm19-d2', [
      doc('notice', 'Oakridge Municipal Art Museum — Group Audio Guide & Volunteer Docent Policy', [['Bookings', 'tours@oakridgemuseum.org']],
        [
          lst([
            'Private docent-led 60-minute small-group gallery tours (10–25 adults) MUST submit requests cleanly 14+ days ahead ($90 flat tour guide honorarium plus standard $12/guest museum entry tickets!).',
            'Self-guided headphone audio handsets rent individually at Audio Desk 1 cleanly ($5/handset or FREE cleanly with Student IDs cleanly!) without prior group bookings.',
            'Large canvas tour totes larger than 40 cm MUST check free cleanly into Lobby Cloakroom cleanly prior to entering Impressionist Wing 2.',
          ]),
        ]),
      doc('email', 'E-mail Message',
        [['To', 'tours@oakridgemuseum.org'], ['From', 'Prof. Claire Kim (Metro Art College)'], ['Date', 'October 2'], ['Subject', 'October 24 University Class Visit — 22 Art Undergrads']],
        [
          'Hello Museum Desk,',
          'Bringing 22 senior undergraduate art history students cleanly on Thursday morning, October 24! Rather than booking a private 60-minute volunteer docent speaker cleanly—since I already lead interactive architectural sketch discussions smoothly myself inside galleries!—my 22 students will simply pick up 22 self-guided headphone audio handsets neatly at Audio Desk 1 upon paying student entry passes cleanly!',
          'Double-checking total Audio Desk handset fees: since all 22 students present active college photo Student ID cards clearly at Desk 1 cleanly, ALL 22 headphone audio sets rent completely $0 FREE cleanly right? Also reminding students carrying tall canvas art sketchbags above 40 cm neatly to check bags cleanly at Lobby Cloakroom before stepping inside Impressionist Wing 2 cleanly!',
          'Warmly,\nProf. Claire Kim',
        ]),
    ], [
      ['Double · Synthesis', 'Verify Prof. Claire Kim’s audio handset rental charge for her 22 college students at Audio Desk 1 cleanly:', ['$0 (Free upon displaying valid Student IDs)', '$110 ($5 × 22 students cleanly)', '$90 flat honorarium cleanly', '$264 total cleanly'], 0, 'ตอบ $0 (นโยบายข้อ 2: FREE cleanly with Student IDs!)'],
      ['Double · Detail', 'Why does Prof. Kim NOT owe the $90 docent tour honorarium cleanly?', ['She leads the class tour herself rather than hiring a museum volunteer docent', 'Audio Desk 1 waives docent charges cleanly for college groups over 20', 'October 24 falls within fourteen days cleanly', 'Art undergraduate passes exclude guide payments cleanly'], 0, 'ตอบ She leads the class tour herself... (skipping private volunteer docent since she leads sketch discussions smoothly herself!)'],
      ['Double · Math', 'How much total did Prof. Claire Kim’s 22 students SAVE altogether on audio handset fees cleanly by presenting Student IDs instead of paying standard $5 rates?', ['$110 saved ($5 × 22 handsets)', '$90 saved cleanly', '$22 saved cleanly', '$264 saved'], 0, 'ตอบ $110 saved (ประหยัดค่าหูฟังคนละ $5 × 22 คน = $110!)'],
      ['Double · Detail', 'Which bags must students leave inside Lobby Cloakroom cleanly before entering Impressionist Wing 2?', ['Oversized canvas art sketch totes longer than 40 cm', 'Any small pocket cellphones and sketchbooks neatly', 'Audio Desk headphones cleanly', 'Plastic Student ID badges'], 0, 'ตอบ Oversized canvas art sketch totes longer than 40 cm'],
      ['Double · Inference', 'If Prof. Kim HAD instead asked cleanly on October 15 for a private docent tour on October 24, what policy problem would arise?', ['Requests made less than 14 days early fail the minimum advance notice rule cleanly', 'Groups over 20 exceed docent tour caps cleanly', 'Docents operate strictly Saturdays cleanly', 'Audio Desk handsets close during docent hours cleanly'], 0, 'ตอบ Requests made less than 14 days early fail... (Oct 15 ถึง Oct 24 = แค่ 9 วัน ไม่ครบขั้นต่ำ 14+ days ahead!)'],
    ]),

    p7(19, 'm19-t1', [
      doc('ad', 'Harbor Coffee Supply — Commercial Espresso Machine Service Plans', [['Coverage', 'Registered Cafe Serials Only']],
        [
          tbl(
            ['Service Plan Tier', 'Preventive Tune-Ups / Yr', 'Emergency Callout Dispatch SLA', 'Boiler Gasket & Pump Seals Included?', 'Monthly Plan Fee'],
            [
              ['Bronze Basics', '1 per year', '48 Business Hours', 'No (Parts billed extra)', '$55 / mo'],
              ['Silver Cafe Core', '2 per year', 'Same-Day (Under 6 hrs)', 'Yes (Free normal wear gaskets!)', '$95 / mo'],
              ['Gold Roastery Max', '4 per year (Quarterly)', 'Under 3 hrs (Incl. Sundays!)', 'Yes + Free Backup Loaner Unit!', '$165 / mo'],
            ]),
          'Note: Plans carry 12-month minimum billing cleanly (pay annually upfront cleanly to enjoy 1 month FREE = 11× monthly fee cleanly!).',
        ]),
      doc('chat', 'Bakery Cafe Owner Chat', [['Channel', '#equipment-care'], ['Date', 'August 1']],
        [
          chat([
            ['Leo Morales', '8:20 A.M.', 'Signing up our busy Sunday brunch espresso bar onto Harbor Coffee’s service plan today cleanly! Remember last autumn when our pump gasket cracked cleanly on a busy Sunday brunch morning cleanly—waiting 48 hours crippled Sunday espresso orders badly! Gold Roastery Max gives UNDER 3-hour Sunday emergency response PLUS loaner backup machines cleanly AND includes free gasket swaps!'],
            ['Maya Chen', '8:25 A.M.', 'Definitely go Gold Roastery Max cleanly AND prepay the full year upfront today so we pay strictly 11 months cleanly instead of 12! That drops annual care cleanly under $1,850 easily cleanly!'],
          ]),
        ]),
      doc('invoice', 'Harbor Coffee Service Agreement #HCS-902',
        [['Account', 'Maple Street Brunch Cafe'], ['Effective', 'August 1 – July 31']],
        [
          'Selected Plan: Gold Roastery Max ($165/mo) · Billing Option: Annual Upfront Prepay (11 Months Charged + 1 Month Free).',
          'Total Annual Plan Billed: $1,815.00 · Serial Registered: Dual-Group BaristaPro #BP-4129.',
        ]),
    ], [
      ['Triple · Synthesis', 'Why did Leo reject Bronze Basics AND Silver Cafe Core cleanly for Maple Street Brunch Cafe?', ['Bronze delays response 48 hrs without gasket parts, while only Gold includes Sunday <3 hr calls AND free backup loaners cleanly', 'Silver Cafe Core covers strictly home espresso toys cleanly', 'Bronze Basics prohibits annual prepayment discounts cleanly', 'Gold Roastery requires only one tune-up yearly cleanly'], 0, 'ตอบ Bronze delays response 48 hrs without parts, while only Gold includes Sunday <3 hr emergency dispatch AND backup loaners cleanly'],
      ['Triple · Math', 'Verify the exact dollar savings Maple Street earned cleanly by paying Gold Roastery Max annually upfront ($1,815) vs paying $165 monthly across 12 months ($1,980):', ['$165 saved cleanly (1 free month)', '$95 saved cleanly', '$1,815 saved cleanly', '$330 saved cleanly'], 0, 'ตอบ $165 saved cleanly (ประหยัดค่าบริการฟรี 1 เดือน = $165!)'],
      ['Triple · Inference', 'Under Gold Roastery Max, how many scheduled preventive technician tune-ups will Dual-Group BaristaPro #BP-4129 receive cleanly across the year August 1 – July 31?', ['Four quarterly visits', 'Two visits cleanly', 'One yearly visit cleanly', 'Twelve monthly visits cleanly'], 0, 'ตอบ Four quarterly visits (ตารางระบุ Gold -> Preventive Tune-Ups / Yr: 4 per year Quarterly)'],
      ['Triple · Detail', 'Which worn component failure previously hurt Sunday sales at Maple Street Brunch Cafe?', ['A cracked internal water pump gasket cleanly', 'A missing stainless coffee portafilter cleanly', 'Burned-out lobby display neon lights cleanly', 'Expired annual prepay invoices cleanly'], 0, 'ตอบ A cracked internal water pump gasket cleanly (when our pump gasket cracked cleanly on a Sunday brunch morning)'],
      ['Triple · Detail', 'What happens under Gold Roastery Max if a Sunday boiler leak cleanly cannot be fixed smoothly on site within hours cleanly?', ['Harbor Coffee supplies a complimentary backup loaner espresso machine cleanly', 'Customers get store coffee vouchers cleanly', 'Bronze basic engineers join Monday morning', 'Cafe owners forfeit annual prepay discounts cleanly'], 0, 'ตอบ Harbor Coffee supplies a complimentary backup loaner espresso machine'],
    ]),

    p7(19, 'm19-t2', [
      doc('article', 'Midtown Tech Hub Hosts Free Autumn Career & Robotics Fair', [['Date', 'Wednesday, Oct 16 · Noon–6:00 P.M.']],
        [
          'Over twenty autonomous warehouse robotics teams, cloud infrastructure firms, and surgical med-tech engineers host open demo booths inside Harbor Atrium Wednesday October 16! Upload single-page PDF resumes ahead onto FairPortal QR profiles to skip lobby registration paper desks cleanly.',
        ]),
      doc('table', 'Panel Stage Spotlight Schedule (Hall C Auditorium)', null, [
        tbl(
          ['Time Slot', 'Panel Topic', 'Lead Speaker', 'Company', 'Reserved Seating Needed?'],
          [
            ['1:00–1:45 P.M.', 'Breaking Into Warehouse Automation Careers', 'Elena Gomez', 'ApexBotics', 'No (Open walk-in chairs)'],
            ['2:30–3:15 P.M.', 'Firmware Testing Inside Medical Wearables', 'Dr. Kevin Wu', 'PulseCore Labs', 'Yes (Badge QR Check)'],
            ['4:00–4:45 P.M.', 'Live Robotics Salary & Portfolio Critique', 'Sarah Sato', 'Northstar Talent', 'Yes (Badge QR Check)'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'fairdesk@midtowntechhub.org'], ['From', 'Marcus Hall (Senior Electrical Undergrad)'], ['Date', 'October 10'], ['Subject', 'Oct 16 Reserved Seat Request for Hall C Panels']],
        [
          'Hi Fair Desk,',
          'Uploaded my 1-page PDF resume smoothly onto FairPortal just now cleanly ahead of Wednesday October 16! Because my afternoon college robotics lab runs late until 2:10 P.M. cleanly across town, arriving cleanly right around 2:35 P.M. means missing Elena Gomez’s opening warehouse panel neatly AND stepping slightly into Dr. Kevin Wu’s 2:30 P.M. talk!',
          'Please lock my reserved QR seat cleanly ONLY onto Sarah Sato’s 4:00 P.M. Live Portfolio Critique so someone else arriving cleanly ahead of 2:30 P.M. claims Dr. Wu’s medical wearables chair smoothly!',
          'Appreciatively,\nMarcus Hall',
        ]),
    ], [
      ['Triple · Synthesis', 'Which scheduled Hall C panel IS Marcus Hall reserving ahead cleanly for October 16?', ['Sarah Sato’s 4:00 P.M. Live Robotics Salary & Portfolio Critique', 'Elena Gomez’s 1:00 P.M. Warehouse Automation panel', 'Dr. Kevin Wu’s 2:30 P.M. Medical Wearables talk cleanly', 'FairPortal morning registration check'], 0, 'ตอบ Sarah Sato’s 4:00 P.M. Live Robotics Salary & Portfolio Critique'],
      ['Triple · Detail', 'Why does Marcus skip reserving Dr. Kevin Wu’s 2:30 P.M. medical wearables talk cleanly despite needing QR reservations cleanly?', ['His college lab ends at 2:10 P.M. making him miss the 2:30 P.M. start cleanly', 'Dr. Kevin Wu teaches strictly non-electrical candidates cleanly', 'Reserved chairs sold out cleanly on October 10', 'Badge QR checks disable after 2:35 P.M. cleanly'], 0, 'ตอบ His college lab ends at 2:10 P.M. making him miss 2:30 P.M. (arriving ~2:35 P.M. จึงสละที่ให้คนอื่นมาทัน 2:30!)'],
      ['Triple · Detail', 'Which Hall C speaker panel does NOT require scanning QR seat reservations beforehand?', ['Elena Gomez’s 1:00 P.M. talk', 'Dr. Kevin Wu’s 2:30 P.M. talk', 'Sarah Sato’s 4:00 P.M. panel cleanly', 'None skip reservations cleanly'], 0, 'ตอบ Elena Gomez’s 1:00 P.M. talk (ตารางระบุ Open walk-in chairs)'],
      ['Triple · Benefit', 'Why did Marcus upload his resume PDF onto FairPortal beforehand?', ['To bypass lobby registration desk paper queues upon arrival cleanly', 'So Sarah Sato mails printed salary critiques October 10', 'Uploading grants priority medical lab admissions cleanly', 'Atrium gates block students lacking resumes cleanly'], 0, 'ตอบ To bypass lobby registration desk paper queues (skip lobby registration paper desks cleanly)'],
      ['Triple · Detail', 'What is Marcus Hall’s college academic focus cleanly?', ['Senior electrical engineering undergraduate', 'Hospital surgical management', 'Marketing journalism', 'Software billing law cleanly'], 0, 'ตอบ Senior electrical engineering undergraduate (หัวเมล Senior Electrical Undergrad)'],
    ]),

    p7(19, 'm19-t3', [
      doc('notice', 'Alpine Courier Express — Fragile Ceramic Insurance & Claim Time Rules', [['Claims Desk', 'claims@alpinecourier.eu']],
        [
          lst([
            'Shipments carrying Declared Value Fragile Insurance ($5 per $100 value) require DOUBLE-CORRUGATED outer cartons + 5 cm bubble padding surrounding every ceramic edge.',
            'Recipients spotting transit breakage MUST retain original carton box + inner packing foam AND log web photo claim # within 72 HOURS of delivery timestamp!',
            'Throwing broken packing boxes out BEFORE inspector photos clear claims AUTOMATICALLY VOIDS insurance coverage cleanly!',
          ]),
        ]),
      doc('invoice', 'Alpine Courier Waybill #AC-6102',
        [['Shipper', 'Nordic Pottery Studio -> Buyer: Cafe Blue, Munich'], ['Delivered', 'Tuesday, November 5 · 11:00 A.M.']],
        [
          'Contents: 12 × Handmade Ceramic Ramen Bowls (Declared Retail Insurance Value: $300 · Paid Fragile Fee: $15).',
          'Outer Spec Checked at Dispatch: Double-Corrugated Box + 5 cm Bubble Padding ✓.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'claims@alpinecourier.eu'], ['From', 'Cafe Blue Kitchen Manager (Tomas Klein)'], ['Date', 'Wednesday, November 6 · 9:30 A.M.'], ['Subject', 'Breakage Claim — 4 Cracked Bowls Inside #AC-6102']],
        [
          'Dear Claims Officers,',
          'Unpacking Waybill #AC-6102 neatly cleanly this morning showed eight intact ramen bowls though FOUR cracked completely across glazed rims despite thick 5 cm bubble wraps cleanly! Good thing our kitchen apprentice stopped neatly BEFORE tossing wet ripped boxes cleanly—I photographed ALL four fractured bowls sitting INSIDE original double-corrugated cartons alongside every piece of bubble padding intact right beside Kitchen Sink 2 cleanly!',
          'Uploaded five clear photos cleanly inside web form just now within barely 23 hours of Tuesday morning delivery—please credit $100 pro-rated insured replacement refund ($25/bowl × 4 bowls cleanly) onto Studio shipper account smoothly!',
          'Regards,\nTomas Klein',
        ]),
    ], [
      ['Triple · Synthesis', 'Will Alpine Courier likely honor the $100 ceramic breakage insurance payout on Waybill #AC-6102?', ['Yes—insurance was paid ($15), packaging met 5 cm bubble specs, claims filed inside 72 hrs (~23 hrs), AND original boxes/foam stayed preserved cleanly', 'No—claims filed past 11:00 A.M. Wednesday exceed 24-hour deadlines cleanly', 'No—only total 12-bowl shatterings qualify rather than partial breakage cleanly', 'Only if Tomas ships all four broken bowls straight back to Munich depot cleanly'], 0, 'ตอบ Yes—every single rule was met (ทำประกัน $15, กล่อง+กันกระแทกครบ ✓, เคลมภายใน 23 ชม. < 72 ชม., และเก็บกล่อง/โฟมเดิมไว้ถ่ายรูปครบไม่ทิ้ง!)'],
      ['Triple · Math', 'Confirm how the shipper calculated the $15 fragile coverage fee on Waybill #AC-6102 ($300 Declared Value):', ['$5 × 3 ($300 ÷ $100) = $15 cleanly', '$15 flat charge per ceramic box cleanly', '$1.25 per ramen bowl cleanly', '5% tax surcharge cleanly'], 0, 'ตอบ $5 × 3 ($300 ÷ $100) = $15 (นโยบายคิด $5 ต่อมูลค่าประกัน $100 -> $300 = $15!)'],
      ['Triple · Detail', 'Why is Tomas grateful his kitchen apprentice stopped before tossing shipping boxes?', ['Throwing original cartons/padding away before claim review automatically voids insurance cleanly', 'Nordic Pottery collects empty double-corrugated boxes Fridays cleanly', 'Cafe Blue lacked dumpster access Wednesdays cleanly', 'Sink 2 trash bins overflowed Tuesday morning cleanly'], 0, 'ตอบ Throwing original cartons/padding away automatically voids coverage cleanly'],
      ['Triple · Math', 'Verify the per-bowl unit insured valuation cleanly ($300 ÷ 12 bowls):', ['$25.00 per bowl', '$15.00 per bowl', '$30.00 per bowl', '$12.50 per bowl'], 0, 'ตอบ $25.00 per bowl ($300 ÷ 12 ใบ = $25/ใบ -> เสียหาย 4 ใบ = $100 ตรงเป๊ะ!)'],
      ['Triple · Timing', 'When is the ABSOLUTE latest 72-hour deadline Cafe Blue could have submitted #AC-6102 photos after Tuesday, Nov 5 at 11:00 A.M. delivery?', ['Friday, November 8 at 11:00 A.M.', 'Wednesday, November 6 at 11:00 A.M.', 'Thursday, November 7 at 11:00 A.M.', 'Monday, November 11 at noon'], 0, 'ตอบ Friday, November 8 at 11:00 A.M. (5 พ.ย. 11:00 + 72 ชม. = 8 พ.ย. 11:00 น.)'],
    ]),

    // ══════════════════ SET 20 (Q147–Q200: 54 Qs) ══════════════════
    p7(20, 'm20-s1', [
      doc('memo', 'Corporate Notice', [['To', 'Downtown Office Drivers'], ['From', 'Property Ops'], ['Date', 'July 14']],
        [
          'Parking gate ticket arms inside Basement Level B1 close smoothly for pressure washing Thursday night from 10:00 P.M. until 4:00 A.M. Friday.',
          'Late-night software deploy engineers should pull vehicles cleanly straight out of North Alley Gate 2 before leaving midnight shifts cleanly.',
        ]),
    ], [
      ['Single · Detail', 'Why are Level B1 parking barriers shut late Thursday night?', ['Crews are pressure washing basement floors cleanly', 'North Alley Gate 2 installs new key fobs', 'Software teams closed Basement Level B1 permanently', 'Electrical lines require winter heaters cleanly'], 0, 'ตอบ Crews are pressure washing basement floors (close smoothly for pressure washing Thursday night)'],
      ['Single · Detail', 'How should late engineers exit if leaving after 10:00 P.M. Thursday?', ['Drive cleanly out through North Alley Gate 2', 'Wait inside Basement B1 until 4:00 A.M. Friday', 'Park overnight across West Elm meters cleanly', 'Dial Floor 1 cleaners to open Gate 1'], 0, 'ตอบ Drive cleanly out through North Alley Gate 2'],
    ]),

    p7(20, 'm20-s2', [
      doc('ad', 'Cedar Grove Botanical Pottery Fair — Weekend Garden Clearance', [['When', 'Sat–Sun · May 18–19 · 9:00 A.M.–4:00 P.M.']],
        [
          'Spruce up balcony patios cleanly! Take 30% off ALL glazed frost-proof ceramic herb troughs, bamboo trellis poles, and terracotta watering pots across Greenhouse Yard 2 strictly this weekend only!',
          'Bring empty clean cardboard carry crates OR borrow our complimentary wooden rolling garden wagons cleanly across Yard Checkouts cleanly.',
        ]),
    ], [
      ['Single · Detail', 'Which items are reduced by 30 percent during May 18–19?', ['Frost-proof ceramic troughs, bamboo poles, and terracotta pots', 'Greenhouse fresh vegetable seedlings cleanly', 'Wooden rolling garden wagons cleanly', 'Plastic storage crates cleanly'], 0, 'ตอบ Frost-proof ceramic troughs, bamboo poles, and terracotta pots'],
      ['Single · Detail', 'How can shoppers haul bulky ceramic planters out to parked cars cleanly?', ['Borrow complimentary rolling wooden garden wagons on site', 'Pay $5 cardboard carton fees at Yard Checkouts', 'Request same-day Sunday freight courier delivery', 'Reserve parking inside Greenhouse Yard 2'], 0, 'ตอบ Borrow complimentary rolling wooden garden wagons on site'],
    ]),

    p7(20, 'm20-s3', [
      doc('chat', 'Design Workshop Team Chat', [['Channel', '#display-shop'], ['Date', 'August 11']],
        [
          chat([
            ['Anita Diaz', '9:15 A.M.', 'Urgent fix check cleanly at Pier Trade Booth #22: bright LED wall light ribbon along top sign bar flickers dimly cleanly whenever visitors plug laptops into Outlet 2!'],
            ['Samir Patel', '9:19 A.M.', 'Aha! That booth extension strip sits capped at 600W total cleanly—laptop chargers + LED ribbon pull cleanly together slightly above surge breaker tripping limits!'],
            ['Anita Diaz', '9:22 A.M.', 'Makes total sense! Should I drop a spare independent heavy AC power cord neatly across onto rear Pillar Socket 4 specifically for visitor demos cleanly?'],
            ['Samir Patel', '9:25 A.M.', 'Exact right call! Keep Pillar Socket 4 dedicated strictly to guest laptops so LED logo bars glow crystal bright nonstop cleanly!'],
          ]),
        ]),
    ], [
      ['Single · Cause', 'Why did the LED logo banner flicker whenever visitors used Outlet 2?', ['Drawing both displays and laptop bricks overloaded that single power strip cleanly', 'Pier Trade Pillar Socket 4 tripped main power cleanly', 'LED bulbs arrived defective out of packaging cartons', 'Booth visitors accidentally kicked light switches cleanly'], 0, 'ตอบ Drawing both displays and laptop bricks overloaded that strip (extension strip sits capped at 600W -> drawing slightly above limits)'],
      ['Single · Solution', 'How does Anita stop LED banners from flickering cleanly?', ['Routing visitor laptops onto separate Pillar Socket 4 via an extra cord cleanly', 'Removing half of LED strip lights safely cleanly', 'Banning guest laptops strictly around Booth #22', 'Borrowing backup batteries cleanly before noon'], 0, 'ตอบ Routing visitor laptops onto separate Pillar Socket 4...'],
      ['Single · Detail', 'Around what time did the conversation resolve cleanly?', ['At 9:25 A.M.', 'At 9:15 A.M.', 'At 9:19 A.M.', 'At 10:00 A.M.'], 0, 'ตอบ At 9:25 A.M. (ข้อความสุดท้ายจาก Samir Patel ระบุเวลา 9:25 A.M.)'],
    ]),

    p7(20, 'm20-s4', [
      doc('table', 'Pacific Tech Labs — Prototyping Laser Cut & 3D Print Rates', [['Walk-In Counter', 'Mon–Fri · 9:00 A.M.–6:00 P.M.']],
        [
          tbl(
            ['Fabrication Tool', 'Build Envelope', 'Material Basis', 'Hourly Machine Rate', 'Student Discount'],
            [
              ['Epilog CO2 Laser Cutter', '90 × 60 cm', '3mm Birch / Clear Acrylic', '$28 / hr', '25% off cleanly'],
              ['Prusa Resin SLA Tank', '21 × 18 × 25 cm', 'Tough Matte Photopolymer', '$14 / hr', '25% off cleanly'],
              ['Waterjet Aluminum Mill', '120 × 120 cm', '3mm 6061 Alloy Plate', '$56 / hr', 'None (Standard Rate)'],
            ]),
          'Setup Calibration Check Fee ($10 flat per uploaded file cleanly; WAIVED $0 cleanly when buying 3+ consecutive hours on same session!).',
        ]),
    ], [
      ['Single · Math', 'How much total would an architecture STUDENT pay for 2 hours on the Epilog CO2 Laser Cutter cleanly INCLUDING the Setup Calibration Check Fee?', ['$52', '$66', '$42', '$56'], 0, 'ตอบ $52 (ค่าเครื่อง $28 × 2 ชม. = $56 ลดนักเรียน 25% ($14) = $42 + ค่า Setup Fee $10 เพราะยังไม่ถึง 3 ชม. = $52!)'],
      ['Single · Detail', 'Which fabrication machine does NOT grant the 25% student rate reduction cleanly?', ['Waterjet Aluminum Mill', 'Epilog CO2 Laser Cutter', 'Prusa Resin SLA Tank', 'All exclude students'], 0, 'ตอบ Waterjet Aluminum Mill (Student Discount: None Standard Rate)'],
      ['Single · Condition', 'How can makers avoid paying the $10 file setup calibration check fee cleanly?', ['Book three or more continuous hours in one reservation cleanly', 'Bring personal 3mm acrylic plates cleanly', 'Order jobs before 9:00 A.M. Mondays', 'Use Resin SLA tanks solely cleanly'], 0, 'ตอบ Book three or more continuous hours... (WAIVED $0 cleanly when buying 3+ consecutive hours on same session!)'],
    ]),

    p7(20, 'm20-s5', [
      doc('letter', 'Client Partnership Update', [['To', 'All Wholesale Tea Retailers'], ['From', 'MountainMist Botanicals'], ['Date', 'September 18']],
        [
          'Dear Valued Stockists,',
          'Thank you kindly for displaying crisp seasonal chamomile and roasted oolong tins across sixty specialty café shelves cleanly all spring! Responding smoothly to feedback requesting lighter bulk refill tubs alongside pretty retail gift tins cleanly, our packing line unveils 1-kilogram resealable kraft zip pouches October 1—shaving your cafe espresso bar per-cup loose tea expenses cleanly by 22 percent cleanly while trimming bulky metal tin disposal cleanly.',
          'Order cleanly inside our Wholesale Web Store starting Tuesday morning cleanly using usual net-30 invoices!',
        ]),
    ], [
      ['Single · Purpose', 'What new packaging product launches October 1 for wholesale cafes cleanly?', ['Large 1-kilogram resealable kraft bulk tea pouches cleanly', 'Miniature metal souvenir espresso tins cleanly', 'Ready-to-drink chilled glass oolong bottles cleanly', 'Single-cup paper tea filters cleanly'], 0, 'ตอบ Large 1-kilogram resealable kraft bulk tea pouches (unveils 1-kilogram resealable kraft zip pouches Oct 1)'],
      ['Single · Benefit', 'Why will switching bars onto 1 kg bags help cafe operators cleanly?', ['It lowers per-cup tea costs 22 percent AND avoids tossing empty gift metal tins cleanly', 'Waiters skip net-30 monthly wholesale invoicing cleanly', 'Kraft pouches double café shelf retail pricing cleanly', 'Chamomile tins stay fresh cleanly past five years'], 0, 'ตอบ It lowers per-cup tea costs 22 percent... (shaving expenses by 22% while trimming bulky metal tin disposal)'],
      ['Single · Timing', 'When can retail buyers start purchasing the new 1 kg pouches?', ['Starting Tuesday morning (October 1)', 'Immediately cleanly September 18 cleanly', 'After spring seasonal promotions end', 'Only via phone orders cleanly'], 0, 'ตอบ Starting Tuesday morning (October 1) (unveils October 1 -> Tuesday morning)'],
    ]),

    p7(20, 'm20-s6', [
      doc('article', 'Boutique Hotel Laundries Cleanly Recapture Hot Washer Water Energy to Heat Incoming Pools', [['Journal', 'Hospitality Operations Review']],
        [
          'Busy downtown conference hotels scrub hundreds of snowy cotton bedsheets hourly inside steam tunnels—customarily dumping piping-hot 65°C soapy wash rinse straight down municipal sewer grates while burning hefty natural gas boilers heating ice-cold underground city mains cleanly from 10°C up to wash temperatures again cleanly.',
          'Grandview Suites in Zurich linked brass spiral heat-exchanger drums neatly between dirty drain pipes and cold clean incoming water supplies this spring cleanly, pre-warming icy intake pipes smoothly to 48°C completely free BEFORE gas boilers even ignite—slashing monthly hotel laundry gas consumption sharply cleanly by 52 percent without changing crisp linen sanitation.',
        ]),
    ], [
      ['Single · Problem', 'What expensive heat inefficiency did traditional hotel laundries previously experience cleanly?', ['Hot 65°C drain water wasted directly into city sewers while boilers heated freezing water anew cleanly', 'Cotton bedsheets shrank sharply inside 48°C wash cycles cleanly', 'Zurich city water mains froze completely inside basements cleanly', 'Natural gas utility companies capped steam boiler hours'], 0, 'ตอบ Hot 65°C drain water wasted directly into sewers... (dumping hot 65°C rinse down grates while burning gas heating cold mains cleanly)'],
      ['Single · Process', 'How do the new brass heat-exchanger coils save fuel cleanly without dirty water touching fresh linens?', ['Warm outgoing drain energy pre-warms clean incoming water across sealed spiral coils cleanly before boilers fire cleanly', 'Dirty soap gets chemically distilled into freshwater tanks cleanly', 'Brass tubes spin dryers faster cleanly reducing damp spins', 'Hotel pools pump hot chlorinated water cleanly into basements'], 0, 'ตอบ Warm outgoing drain energy pre-warms clean incoming water... (heat-exchanger drums between dirty drain and cold clean supply pre-warming incoming water cleanly to 48°C)'],
      ['Single · Vocab', 'The word "customarily" in paragraph 1 is closest in meaning to ___.', ['habitually / typically', 'rarely cleanly', 'accidentally', 'secretly'], 0, 'ตอบ habitually / typically (โดยปกติธรรมดาที่ผ่านมา)'],
    ]),

    p7(20, 'm20-s7', [
      doc('ad', 'Careers — Retail Ecommerce Merchandiser (Lumen Home Goods)', [['Office', 'Hybrid Seattle (Tue–Thu On-Site)']],
        [
          'Shape inspiring curated seasonal storefront landing pages cleanly featuring Scandinavian linen napkins, speckled ceramic dinnerware, and matte table lamps cleanly! [1] You will launch clean weekly promotional collection banners cleanly, monitor checkout conversion drop-offs closely cleanly via analytics charts, and organize studio lifestyle photoshoots seamlessly with prop stylists cleanly.',
          'Required Experience:',
          lst([
            'Two+ years merchandising e-commerce home decor, kitchenware, or boutique apparel catalogs',
            'Hands-on comfort testing A/B landing banner copy inside Shopify or Magento storefronts cleanly',
            'Sharp visual alignment pairing warm color palettes cleanly alongside clear unit dimensions cleanly',
          ]),
          '[2] Expect $66,000 salary, 40% store employee discount, transit stipend, and three paid volunteer days! [3] Send resume + link cleanly to one seasonal merchandising deck cleanly via jobs@lumenhome.com mentioning E-Com Lead. [4]',
        ]),
    ], [
      ['Single · Detail', 'Which three weekdays require physical attendance cleanly inside Lumen’s Seattle office?', ['Tuesday, Wednesday, and Thursday', 'Monday, Wednesday, and Friday', 'Tuesday through Saturday', 'Wednesday through Sunday cleanly'], 0, 'ตอบ Tuesday, Wednesday, and Thursday (Tue–Thu On-Site)'],
      ['Single · Detail', 'What task does the Merchandiser coordinate cleanly alongside prop stylists?', ['Organizing lifestyle product photography sessions cleanly', 'Shipping fragile speckled bowls cleanly from warehouses cleanly', 'Accounting monthly Shopify merchant card reconciliations cleanly', 'Installing matte wall lamps cleanly downtown'], 0, 'ตอบ Organizing lifestyle product photography sessions... (organize studio lifestyle photoshoots seamlessly with prop stylists)'],
      ['Single · Requirement', 'Which e-commerce platform familiarity is specifically mentioned?', ['Shopify or Magento storefronts', 'Oracle ERP logistics strictly cleanly', 'QuickBooks Online ledgers', 'AutoCAD architectural blueprints'], 0, 'ตอบ Shopify or Magento storefronts'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Familiarity tracking page heatmaps cleanly inside GA4 brings strong analytical speed cleanly."', ['[2]', '[1]', '[3]', '[4]'], 0, 'ตอบ [2] (ต่อจาก Required Experience เพื่อเพิ่มความถนัดเครื่องมือวิเคราะห์ GA4 ก่อนเข้าสู่ค่าตอบแทนสวัสดิการ)'],
    ]),

    p7(20, 'm20-s8', [
      doc('memo', 'Public Civic Library — Summer Book Sale Donation Sorting Rules', [['To', 'Weekend Sorting Volunteers'], ['From', 'Friends of Library Board']],
        [
          'Our popular Annual Patio Used Book Fair draws crowds cleanly Saturday May 25! Sort generous community cardboard book boxes calmly smoothly inside Basement Annex Room 2 cleanly using exact sorting shelves:',
          lst([
            'Place clean crisp novels, travel field guides, and cookbooks free cleanly of torn damp pages straight onto Green Price Carts cleanly.',
            'Reject mildewed basements books, highlighted torn workbooks, AND obsolete 1990s software encyclopedias neatly cleanly straight into Curb Pulp Recycling Dumpsters (never stack unsellable scraps on patio tables!).',
            'Separate rare local maritime history hardcovers published BEFORE 1970 gently into Blue Collector Crate B cleanly for pricing checks by Chief Archivist Tom Lee!',
          ]),
        ]),
    ], [
      ['Single · Detail', 'Where should volunteers place clean undamaged contemporary travel guidebooks cleanly?', ['Directly onto Green Price Carts cleanly', 'Inside Blue Collector Crate B', 'Into Curb Pulp Recycling Dumpsters', 'Atop Patio Checkouts cleanly'], 0, 'ตอบ Directly onto Green Price Carts cleanly (novels, travel field guides, and cookbooks straight onto Green Price Carts)'],
      ['Single · Safety / Hygiene', 'Which type of donated materials MUST go cleanly into Pulp Recycling Dumpsters instead of sale tables?', ['Mildewed books, marked-up workbooks, and outdated computer guides', 'Every travel guide over five years old cleanly', 'Paperback mysteries published neatly cleanly last summer cleanly', 'Clean cookbooks with minor cover scratches cleanly'], 0, 'ตอบ Mildewed books, marked-up workbooks, and outdated computer guides'],
      ['Single · Detail', 'Why do rare pre-1970 maritime history books separate into Blue Collector Crate B cleanly?', ['So Chief Archivist Tom Lee can evaluate their specialized collector pricing', 'To lock rare maritime maps permanently away cleanly from sale', 'Patio wind gusts damage delicate pre-1970 paper cleanly', 'Volunteers price blue crates cleanly at $1 flat'], 0, 'ตอบ So Chief Archivist Tom Lee can evaluate their pricing...'],
      ['Single · Timing', 'When does the public book fair open cleanly?', ['Saturday, May 25', 'Every Sunday afternoon', 'Tuesday next month cleanly', 'Immediately inside Basement Room 2'], 0, 'ตอบ Saturday, May 25'],
    ]),

    p7(20, 'm20-s9', [
      doc('article', 'Lightweight Bio-Resin Composite Truck Trailers Boost Payload Capacity Smoothly', [['By', 'Elena Rossi'], ['Magazine', 'Interstate Fleet Economics']],
        [
          'Heavy riveted steel corrugated semi-trailers weigh nearly seven empty tons cleanly before drivers stack even one wooden apple crate behind rear swing doors cleanly—forcing regional beverage bottlers to dispatch partially filled trucks along mountain interstate weigh-stations simply to stay cleanly under federal axle weight limits cleanly. [1] Hauling pointless trailer tare iron quietly burns millions of wasted highway diesel gallons yearly cleanly across North America.',
          'Transport fabricator AeroBox is shaking highway freight weights cleanly by bonding continuous glass-reinforced polypropylene honeycomb wall sheets over sleek recycled aluminum rail sills smoothly with industrial structural adhesives cleanly. [2] Cutting 1,350 empty deadweight kilograms straight cleanly off a standard 16-meter refrigerated van lets sparkling-water distributors stack three EXTRA full wooden pallets cleanly onto EVERY SINGLE trip cleanly without tipping bridge scales!',
          '"Switching twenty coastal shuttle trailers neatly over onto composite honeycomb frames cleanly cut roughly one in seven highway semi trips cleanly off Route 5 completely," celebrates beverage logistics chief Marco Vance. [3] Seamless smooth interior wall faces wipe hospital-clean in half usual high-pressure hose time cleanly since zero popped steel rivets snag mop heads.',
          'Three West Coast dairy fleets already inked multi-quarter replacement leases converting twenty-five aging aluminum vans cleanly by autumn. [4]',
        ]),
    ], [
      ['Single · Problem', 'Why did beverage companies previously dispatch half-full steel semi-trailers cleanly despite open floor space?', ['Heavy empty steel trailer mass pushed loaded weights rapidly near legal federal highway axle caps cleanly', 'Mountain bridges banned steel corrugated boxes entirely cleanly', 'Refrigerated doors restricted taller apple wooden pallets cleanly', 'Aluminum sills broke sharply along Route 5 cleanly'], 0, 'ตอบ Heavy empty steel trailer mass pushed loaded weights... (empty trailers weigh 7 tons -> forced partial fills to stay under legal axle limits cleanly!)'],
      ['Single · Math / Impact', 'How much extra pallet cargo capacity does shedding 1,350 kg of empty trailer frame unlock per trip cleanly?', ['Three extra loaded wooden pallets per trip cleanly', 'One extra wooden pallet cleanly', 'Seven extra tons cleanly', 'Twenty extra dairy tankers cleanly'], 0, 'ตอบ Three extra loaded wooden pallets per trip (stack three EXTRA full wooden pallets onto EVERY trip!)'],
      ['Single · Hygiene Benefit', 'What cleaning advantage did crews notice inside the composite honeycomb interiors?', ['Rivet-free flat smooth walls clean twice as fast without catching mops cleanly', 'Polypropylene walls repel cold milk frost completely cleanly', 'Structural glue neutralizes odors cleanly', 'Water nozzles turn off automatically cleanly'], 0, 'ตอบ Rivet-free flat smooth walls clean twice as fast... (wipe clean in half usual time cleanly since zero popped rivets snag mop heads)'],
      ['Single · Vocab', 'The word "tare" in paragraph 1 ("pointless trailer tare iron") means ___.', ['empty unladen vehicle weight', 'shiny protective exterior paint', 'expired metal registration tax', 'rusted highway brake pads'], 0, 'ตอบ empty unladen vehicle weight (น้ำหนักตัวถัง/รถเปล่าก่อนบรรทุกสินค้า)'],
      ['Single · Insertion', 'In which position [1], [2], [3], or [4] does the following sentence best fit? "Fewer total trucks on the road immediately lowered driver overtime bills alongside cutting exhaust cleanly."', ['[3]', '[1]', '[2]', '[4]'], 0, 'ตอบ [3] (ขยายผลต่อทันทีหลังจากลดเที่ยวรถบรรทุกลง 1 ใน 7 เที่ยวบน Route 5 ตามคำพูด Marco Vance!)'],
    ]),

    p7(20, 'm20-d1', [
      doc('webpage', 'Pacific PrintWorks — Annual Company Desk Calendar Bundles', [['Cutoff', 'Ships Worldwide within 5 Business Days']],
        [
          tbl(
            ['Calendar Style', 'Dimensions', 'Minimum 50 pcs', '100–249 pcs', '250+ pcs'],
            [
              ['Wire-O Desk Tent', '21 × 15 cm', '$4.40 / ea', '$3.60 / ea', '$2.90 / ea'],
              ['Wall Coil Planner', '30 × 42 cm', '$6.20 / ea', '$5.10 / ea', '$4.20 / ea'],
              ['Hardcover Pocket Diary', '14 × 21 cm', '$8.50 / ea', '$7.20 / ea', '$5.90 / ea'],
            ]),
          'Add Gold Metallic Cover Foil Stamp (+$0.45 per piece cleanly). Orders placed BEFORE October 31 receive FREE individual Kraft Gift Mailer Sleeves ($0.50 value/ea)!',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'orders@pacificprintworks.com'], ['From', 'Sarah Takahashi (NorthStar Consulting · HR)'], ['Date', 'October 22'], ['Subject', 'Client Holiday Gifts — 150 Hardcover Pocket Diaries']],
        [
          'Hello Print Team,',
          'Ordering annual appreciation holiday diaries early cleanly for our 150 active enterprise clients! Selecting cleanly 150 × Hardcover Pocket Diary cleanly in forest navy linen PLUS adding Gold Metallic Cover Foil Stamping cleanly on front cloth (+$0.45/ea cleanly) so NorthStar logos gleam nicely!',
          'Checking invoice notes cleanly ahead of wire payment: placing this 150-piece order nicely cleanly on October 22 automatically includes 150 complimentary Kraft Gift Mailer Sleeves right cleanly—confirm total exact invoice charge cleanly before Monday!',
          'Warm regards,\nSarah Takahashi',
        ]),
    ], [
      ['Double · Math', 'Calculate NorthStar Consulting’s EXACT total cost for 150 Hardcover Pocket Diaries WITH Gold Metallic Foil Stamping AND Mailer Sleeves on October 22 cleanly:', ['$1,147.50', '$1,080.00', '$1,222.50', '$1,342.50'], 0, 'ตอบ $1,147.50 (150 เล่มอยู่ในเรท 100–249 pcs = $7.20/เล่ม + แสตมป์ทอง +$0.45/เล่ม = $7.65 × 150 = $1,147.50; ซอง Kraft ฟรี $0 เพราะสั่ง 22 ต.ค. ก่อน 31 ต.ค.!)'],
      ['Double · Synthesis', 'Why does Sarah pay $0 extra for all 150 Kraft Gift Mailer Sleeves ($75 value)?', ['She placed her order on October 22 cleanly ahead of the October 31 promotion cutoff', 'Hardcover Pocket Diaries include free Kraft boxes year-round cleanly', 'Orders above 100 units always get complimentary gift wrapping cleanly', 'Gold Foil stamping includes Kraft envelopes automatically cleanly'], 0, 'ตอบ She placed her order on October 22 ahead of the October 31 cutoff'],
      ['Double · Inference', 'How much total WOULD Sarah save per diary cleanly on base book pricing ALONE if client lists doubled cleanly from 150 up to 250 copies ($5.90 vs $7.20)?', ['$1.30 saved per piece', '$0.45 saved per piece', '$2.60 saved per piece', '$0.90 saved per piece'], 0, 'ตอบ $1.30 saved per piece ($7.20 - $5.90 = $1.30 ต่อเล่ม)'],
      ['Double · Detail', 'Which calendar item was NOT selected cleanly by NorthStar Consulting?', ['Wire-O Desk Tents and Wall Coil Planners', 'Gold Metallic Cover Foil Stamping', 'Forest navy linen pocket books', 'Kraft Gift Mailer Sleeves'], 0, 'ตอบ Wire-O Desk Tents and Wall Coil Planners'],
      ['Double · Detail', 'Within how many business days do ordered calendar sets normally dispatch?', ['Within five business days cleanly', 'Ten business days cleanly', 'Immediately on October 31', 'Twenty-four hours cleanly'], 0, 'ตอบ Within five business days cleanly'],
    ]),

    p7(20, 'm20-d2', [
      doc('memo', 'Evergreen Botanical Gardens — Wedding Portrait Photo Permit Rules', [['Office', 'Visitor Services · Desk B']],
        [
          lst([
            'Informal cell-phone tourist snapshots NEVER require fee permits anywhere on Garden grass paths.',
            'Staged posed wedding/engagement shoots carrying formal gown trains OR external lighting reflectors REQUIRE Advance Photo Permits ($95 for 2-hour block · covers up to 6 people total inside party + photographers!).',
            'Rain Backup Indoor Conservatory bookings MUST reserve separately ($140/hr) 7+ days cleanly beforehand—permits stay strictly non-refundable though transfer smoothly ONCE onto a later date cleanly inside 90 days cleanly!',
          ]),
        ]),
      doc('email', 'E-mail Message',
        [['To', 'events@evergreengardens.org'], ['From', 'Kevin Morales (Photographer)'], ['Date', 'Monday, May 6'], ['Subject', 'Photo Permit #EG-882 Rain Date Shift — Saturday May 11']],
        [
          'Hi Garden Events Team,',
          'I purchased a $95 standard 2-hour Outdoor Photo Permit (#EG-882) cleanly for 4 people (engaged couple, stylist, plus myself!) cleanly set this Saturday afternoon May 11! Sadly weekend coastal storm models now call for soaking torrential Saturday downpours cleanly all afternoon—since today Monday sits barely five days ahead cleanly outside your 7-day Indoor Conservatory reservation window anyway, could we trigger our ONE free 90-day date shift onto sunny Sunday, May 19 cleanly at exact identical 2:00 P.M. afternoon slot instead?',
          'Appreciate confirming permit #EG-882 transfers cleanly free without repaying $95!',
          'Best,\nKevin Morales',
        ]),
    ], [
      ['Double · Synthesis', 'Why can Kevin Morales NOT book the Indoor Conservatory rain backup room today (Monday May 6) for Saturday May 11?', ['Five days falls short of the mandatory 7+ day advance booking rule cleanly', 'Indoor Conservatory bans wedding photographers cleanly on Saturdays', 'His $95 permit omits engaged couples cleanly', 'Storm forecasts reserve rooms exclusively cleanly for 10+ guests'], 0, 'ตอบ Five days falls short of the mandatory 7+ day rule (May 6 ถึง May 11 แค่ 5 วัน น้อยกว่าเกณฑ์ 7+ days beforehand!)'],
      ['Double · Synthesis', 'Will Kevin’s request to move Permit #EG-882 onto Sunday, May 19 be honored cleanly without extra permit fees?', ['Yes—permits allow ONE complimentary transfer inside 90 days cleanly', 'No—Saturday bookings forbid shifting onto Sundays cleanly', 'Only if he pays another $95 outdoor photographer renewal cleanly', 'Only once rainy Saturday arrives cleanly'], 0, 'ตอบ Yes—permits allow ONE complimentary transfer inside 90 days cleanly (May 11 -> May 19 ห่างกันแค่ 8 วัน อยู่ในเกณฑ์ 90 วันและเป็นการย้ายครั้งแรก!)'],
      ['Double · Detail', 'How many people total are attending Kevin’s photography session cleanly?', ['Four people cleanly (within the 6-person permit cap!)', 'Two people cleanly', 'Six photographers cleanly', 'Eight bridal guests cleanly'], 0, 'ตอบ Four people cleanly (engaged couple + stylist + photographer = 4 คน)'],
      ['Double · Inference', 'When do visitors NOT pay any photo permit fee cleanly at Evergreen Gardens?', ['Taking casual personal snapshots on smartphones cleanly', 'Bringing three external umbrella flash stands cleanly', 'Shooting two-hour formal wedding gown portraits cleanly', 'Reserving Indoor Conservatory backup halls'], 0, 'ตอบ Taking casual personal snapshots on smartphones'],
      ['Double · Detail', 'What weather problem prompted Kevin’s schedule shift email?', ['Forecasts calling for heavy Saturday afternoon rain downpours', 'Garden grass path repairs cleanly', 'Stylist scheduling conflicts cleanly', 'Spring pollen allergies cleanly'], 0, 'ตอบ Forecasts calling for heavy Saturday afternoon rain downpours'],
    ]),

    p7(20, 'm20-t1', [
      doc('ad', 'NovaTech Office Acoustics — Carpeted Mobile Partition Dividers', [['Shipping', 'Free Assembly Inside Metro Area on $800+']],
        [
          tbl(
            ['Divider Panel Model', 'Width × Height', 'Acoustic Rating', 'Freestanding Steel Wheels?', 'Unit Price'],
            [
              ['SoloScreen 120', '120 × 165 cm', 'NRC 0.70', 'No (Flat weighted feet)', '$210'],
              ['RollingWall 160', '160 × 180 cm', 'NRC 0.85 (Higher)', 'Yes (Lockable casters)', '$320'],
              ['Whiteboard Panel 160', '160 × 180 cm', 'NRC 0.65 (1-Side Dry Erase)', 'Yes (Lockable casters)', '$370'],
            ]),
          'Use coupon QUIETOFFICE10 for 10% off when ordering 4+ panels of ANY mix!',
        ]),
      doc('chat', 'Workplace Facilities Chat', [['Channel', '#office-floor-5'], ['Date', 'June 3']],
        [
          chat([
            ['Rachel Sato', '2:15 P.M.', 'Grouping sales account reps together cleanly near Window 4—we need movable floor screens cleanly that wheel out smoothly whenever town-hall all-hands seats double monthly, PLUS ONE dry-erase screen neatly so reps sketch sales pipeline funnels right beside team pods!'],
            ['Ben Alvarez', '2:19 P.M.', 'Smart combo! Let us skip static weighted feet on SoloScreen 120 completely cleanly—order THREE RollingWall 160 acoustic casters + ONE Whiteboard Panel 160 (4 mobile panels total!) so QUIETOFFICE10 saves 10% cleanly right across everything AND clears $800 neatly for FREE metro assembly!'],
          ]),
        ]),
      doc('invoice', 'NovaTech Invoice #NT-508',
        [['Customer', 'CrestCloud Analytics'], ['Date', 'June 3']],
        [
          'Items: 3 × RollingWall 160 ($960) + 1 × Whiteboard Panel 160 ($370).',
          'Subtotal: $1,330.00 · Coupon QUIETOFFICE10 (-10%): -$133.00 · Metro Assembly Fee: $0.00 · Net Charged: $1,197.00.',
        ]),
    ], [
      ['Triple · Synthesis', 'Why did Ben reject ordering SoloScreen 120 cleanly for Floor 5 sales pods?', ['Its flat stationary feet lack rolling wheels needed to move walls before monthly town halls cleanly', 'SoloScreen 120 offers zero acoustic noise dampening cleanly', 'QUIETOFFICE10 excludes SoloScreen panels cleanly', 'Panels shorter than 180 cm fall over cleanly'], 0, 'ตอบ Its flat stationary feet lack rolling wheels needed... (need screens that wheel out cleanly before town halls -> SoloScreen 120: No Flat weighted feet!)'],
      ['Triple · Math', 'How much total did CrestCloud SAVE via code QUIETOFFICE10 on Invoice #NT-508?', ['$133.00', '$119.70', '$96.00', '$210.00'], 0, 'ตอบ $133.00 (10% ของยอด $1,330.00 = $133.00 เหลือสุทธิ $1,197.00!)'],
      ['Triple · Synthesis', 'Verify why Metro Assembly arrived FREE ($0.00) cleanly alongside all four panels:', ['Net total $1,197 easily cleared the $800 free metro assembly minimum', 'Whiteboard Panel 160 installs free automatically cleanly', 'June promotions waive assembly fees cleanly across cities', 'CrestCloud picked panels directly up cleanly at NovaTech warehouses'], 0, 'ตอบ Net total $1,197 easily cleared $800... (Free Assembly Inside Metro Area on $800+)'],
      ['Triple · Detail', 'Which single purchased panel carries slightly lower acoustic absorption (NRC 0.65) in exchange for writing utility?', ['Whiteboard Panel 160 (1-Side Dry Erase)', 'RollingWall 160', 'SoloScreen 120', 'All panels hold identical 0.85 ratings'], 0, 'ตอบ Whiteboard Panel 160 (ตารางระบุ NRC 0.65 vs RollingWall 0.85)'],
      ['Triple · Inference', 'Why did CrestCloud include ONE Whiteboard Panel 160 specifically in its order?', ['So sales reps can draw weekly pipeline diagrams right inside their team bay cleanly', 'So town hall projectors reflect slides cleanly on panels', 'Whiteboards weigh lighter when wheeling across Floor 5 cleanly', 'Stacking four RollingWall panels exceeds fire codes cleanly'], 0, 'ตอบ So sales reps can draw pipeline funnels right inside their bay...'],
    ]),

    p7(20, 'm20-t2', [
      doc('article', 'Pacific Green Harbor Trail Opens New Commuter Ferry Connector Bridge', [['Opened', 'April 15']],
        [
          'Walking commuters exiting Harbor Train Terminal cleanly save twenty sidewalk blocks weekly starting April 15 cleanly via sleek glass TimberSpan Footbridge linking Platform B directly across Ship Canal straight into Ferry Pier 3 concourses cleanly! Covered awnings stay lit cleanly until 11:30 P.M.',
        ]),
      doc('table', 'Weekday Express Canal Ferry Crossings (Leaving Ferry Pier 3 -> Tech Island)', null, [
        tbl(
          ['Vessel Run', 'Pier 3 Depart', 'Tech Island Arrive', 'Bike Spaces?', 'Transfer Note'],
          [
            ['Ferry 10', '7:40 A.M.', '7:55 A.M.', 'Yes (20 racks)', 'Meets 7:28 A.M. Train cleanly'],
            ['Ferry 12', '8:20 A.M.', '8:35 A.M.', 'Yes (20 racks)', 'Meets 8:08 A.M. Train cleanly'],
            ['Ferry 14', '9:00 A.M.', '9:15 A.M.', 'Foot Passengers Only', 'Express commuter boat cleanly'],
          ]),
      ]),
      doc('email', 'E-mail Message',
        [['To', 'commute@clearlab.org'], ['From', 'Dr. Kevin Patel (Tech Island Campus)'], ['Date', 'April 18'], ['Subject', 'New Footbridge Shortcut & 8:08 A.M. Train Tip cleanly!']],
        [
          'Hi Tech Island Lab Team,',
          'I just tried out our brand-new TimberSpan Footbridge smoothly this morning! Rolling off the 8:08 A.M. Express Train onto Platform B cleanly got me across Ship Canal cleanly onto Ferry Pier 3 boarding ramp in literally FOUR minutes cleanly—still sipping hot train espresso safely aboard Ferry 12 departing at 8:20 A.M. cleanly and walking into Tech Island Lab cleanly ahead of 8:45 A.M. morning briefing cleanly!',
          'Quick bicycle warning for summer cyclists cleanly though: remember Ferry 14 leaving late at 9:00 A.M. takes FOOT riders strictly cleanly rather than cargo bicycles, so riding mornings requires making either Ferry 10 OR Ferry 12 cleanly!',
          'Best,\nKevin Patel',
        ]),
    ], [
      ['Triple · Synthesis', 'Using Dr. Kevin Patel’s exact morning route on April 18, how many minutes passed between his 8:08 A.M. train arrival and his arrival on Tech Island?', ['Twenty-seven minutes cleanly (8:08 A.M. to 8:35 A.M.)', 'Twelve minutes cleanly', 'Fifteen minutes cleanly', 'Four minutes cleanly'], 0, 'ตอบ Twenty-seven minutes cleanly (รถไฟเข้า 8:08 A.M. -> ต่อเรือ Ferry 12 ถึงเกาะ Tech Island 8:35 A.M. = 27 นาที!)'],
      ['Triple · Synthesis', 'Why does Kevin specifically warn bike-commuting colleagues against planning on the 9:00 A.M. Ferry 14?', ['Ferry 14 accommodates foot passengers ONLY with zero bicycle racks', 'TimberSpan Footbridge bans cycling across Ship Canal after 9:00 A.M.', 'Tech Island Campus locks gates after 9:15 A.M. cleanly', 'Train platforms close cleanly at 8:45 A.M.'], 0, 'ตอบ Ferry 14 accommodates foot passengers ONLY... (ตาราง Ferry 14 -> Bike Spaces?: Foot Passengers Only)'],
      ['Triple · Detail', 'How fast did walking across the new TimberSpan Footbridge take Kevin from Platform B to Ferry Pier 3?', ['Four minutes cleanly', 'Fifteen minutes cleanly', 'Twenty minutes cleanly', 'Twelve minutes cleanly'], 0, 'ตอบ Four minutes cleanly (in literally FOUR minutes cleanly)'],
      ['Triple · Detail', 'How long cleanly is the water ferry boat ride itself aboard Ferry 12?', ['Fifteen minutes (8:20 A.M. to 8:35 A.M.)', 'Twenty minutes', 'Twelve minutes', 'Ten minutes cleanly'], 0, 'ตอบ Fifteen minutes (8:20 -> 8:35 = 15 นาที)'],
      ['Triple · Detail', 'Up to what clock hour do covered footbridge awnings stay illuminated cleanly nightly?', ['11:30 P.M.', '9:15 A.M.', '10:00 P.M.', '8:45 P.M.'], 0, 'ตอบ 11:30 P.M. (Covered awnings stay lit cleanly until 11:30 P.M.)'],
    ]),

    p7(20, 'm20-t3', [
      doc('notice', 'ClearView Residential Towers — Freight Elevator Move-In Deposit & Window Policy', [['Office', 'Management Desk Room 101']],
        [
          lst([
            'Residents booking weekday Freight Elevator P4 move-in blocks (3-hour exclusive slot · 9:00 A.M.–Noon OR 1:00–4:00 P.M. cleanly!) leave one refundable $200 security check cleanly at Room 101 beforehand.',
            'Full $200 returns immediately upon clean lobby pad inspection once movers exit without scuffing painted walls OR leaving empty mattress boxes cleanly in alleys cleanly.',
            'Weekend Saturday moves incur one NON-REFUNDABLE $120 Overtime Building Guard surcharge cleanly ON TOP OF refundable $200 deposits!',
          ]),
        ]),
      doc('invoice', 'ClearView Management Deposit Receipt #CM-119',
        [['Resident', 'Nora Chen (Moving Into Apt #904)'], ['Booked Move Slot', 'Saturday, May 18 · 1:00–4:00 P.M.']],
        [
          'Payments Collected May 10: $200 Refundable Elevator Wall Security Check + $120 Non-Refundable Saturday Guard Surcharge.',
          'Total Collected Upfront: $320.00 · Status: Freight P4 Locked Exclusive for Apt #904 May 18 Afternoon.',
        ]),
      doc('chat', 'Move-Out Inspection Chat', [['Between', 'Nora Chen & Superintendent Ben'], ['Date', 'Saturday, May 18 · 4:10 P.M.']],
        [
          chat([
            ['Nora Chen', '4:10 P.M.', 'Just wrapped unpacking neatly inside Apt #904 ahead of 4:00 P.M.! Movers protected elevator steel rails properly AND hauled every folded cardboard sofa crate cleanly straight away inside their box truck!'],
            ['Supt. Ben', '4:15 P.M.', 'Walked cleanly through Freight Elevator P4 and ground loading hall just now—zero wall scuffs AND spotless empty loading bay! Dropping straight by Apt #904 smoothly right now cleanly handing your full $200 security check back intact nicely! Keep reminder receipts for Tuesday finance logs cleanly though—Saturday $120 overtime guard fee remains non-refundable cleanly as posted!'],
          ]),
        ]),
    ], [
      ['Triple · Synthesis', 'How much total money does Nora Chen ACTUALLY get back cleanly at 4:15 P.M. after passing wall inspection cleanly?', ['$200 (the refundable wall security deposit cleanly; the $120 guard fee stays non-refundable)', '$320 completely cleanly', '$120 strictly cleanly', '$0 (Weekend moves forfeit all deposits cleanly)'], 0, 'ตอบ $200 (เช็กประกันลิฟต์ $200 ได้คืนครบเมื่อไม่มีรอยขีดข่วนและไม่ทิ้งขยะ ส่วนค่าจ้าง รปภ. วันเสาร์ $120 เป็นแบบ non-refundable)'],
      ['Triple · Math', 'Verify Nora’s final net NON-REFUNDABLE expense paid cleanly specifically for moving in on Saturday instead of scheduling a weekday move cleanly:', ['$120 net non-refundable cost', '$200 net cost', '$320 net cost', '$0 cost cleanly'], 0, 'ตอบ $120 net non-refundable cost (ถ้าเลือกย้ายวันธรรมดา จันทร์–ศุกร์ จะไม่เสียค่า รปภ. $120 นี้!)'],
      ['Triple · Detail', 'Why could Nora keep her full $200 damage check cleanly intact?', ['Walls stayed free of scuffs AND her movers took all cardboard boxes cleanly instead of leaving scraps in alleys', 'Saturday overtime surcharges convert into damage insurance', 'Superintendent Ben waived inspections neatly at 4:00 P.M.', 'Apt #904 sits on Ground Floor Lobby cleanly'], 0, 'ตอบ Walls stayed free of scuffs AND movers took all boxes cleanly...'],
      ['Triple · Inference', 'When WOULD ClearView have charged Nora strictly $200 upfront refundable check with $0 guard surcharge?', ['Had she booked Freight Elevator P4 during a Monday–Friday 9:00–Noon or 1:00–4:00 P.M. slot cleanly', 'Had she moved into Apt #101 cleanly', 'Had boxes arrived without mattresses cleanly', 'Only before May 10 cleanly'], 0, 'ตอบ Had she booked Freight Elevator P4 during a Monday–Friday slot cleanly'],
      ['Triple · Detail', 'How long cleanly did Nora’s exclusive Freight Elevator P4 booking window last?', ['Three hours (1:00–4:00 P.M.)', 'Four hours cleanly', 'Two hours cleanly', 'Six hours cleanly'], 0, 'ตอบ Three hours (1:00–4:00 P.M. = 3 ชั่วโมง)'],
    ]),
  ];
})();

if (typeof module !== 'undefined') module.exports = { TOEIC_MOCK_VOL4: globalThis.TOEIC_MOCK_VOLS[4] };

