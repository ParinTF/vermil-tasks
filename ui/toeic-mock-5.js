// TOEIC Reading Part 7 Volume 5 (Sets 21-25: 70 Passage Groups = 270 Questions).
globalThis.TOEIC_MOCK_VOLS = globalThis.TOEIC_MOCK_VOLS || {};
globalThis.TOEIC_MOCK_VOLS[5] = (() => {
  const doc = (kind, title, meta, blocks) => ({ kind, title,...(meta? { meta }: {}), blocks });
  const tbl = (headers, rows) => ({ type:'table', headers, rows });
  const lst = (items) => ({ type:'list', items });
  const chat = (msgs) => ({ type:'chat', msgs });
  const p7 = (set, id, docs, questions) => ({
    set,
    id,
    docs,
    questions: questions.map(([tag, q, choices, ans, why]) => ({ tag, q, choices, ans, why })),
  });

  return [
    // ══════════════════ SET 21 (Q147–Q200: 54 Qs) ══════════════════
    p7(21,'m21-s1', [
      doc('memo','Operations Notice', [['To','Regional Store Assistants'], ['From','Inventory Audit Desk'], ['Date','October 7']],
        [
          'Physical handheld barcode count scanners require sitting neatly inside green Wall Cradle Bank 2 overnight starting Tuesday so automated Wi-Fi inventory sync patches download before dawn shifts.',
          'Scanners left lying loose atop breakroom counters miss battery charges and display stale shelf counts Wednesday.',
        ]),
    ], [
      ['Single · Purpose','Why must handheld barcode scanners sit inside Wall Cradle Bank 2 overnight?', ['So devices recharge and install Wi-Fi inventory sync updates before morning','Breakroom counters lack Wi-Fi routers','Managers lock breakrooms at dusk','Old scanners require battery replacements Tuesday'], 0,'ตอบ So devices recharge and install updates... (automated Wi-Fi sync patches download before dawn shifts)'],
      ['Single · Inference','What happens if staff forget putting a scanner back in its cradle Tuesday night?', ['The scanner loses charge and shows outdated shelf counts Wednesday','Breakroom clerks receive overtime pay','Auditors cancel morning store checks','Shelf counts reset automatically to zero'], 0,'ตอบ The scanner loses charge and shows outdated counts...'],
    ]),

    p7(21,'m21-s2', [
      doc('ad','Harbor Pottery Guild — Holiday Ceramic Ornament Sale', [['Location','Pier 2 Glass Gallery · Nov 23–24']],
        [
          'Discover hand-glazed stoneware coffee mugs, botanical bud vases, and sculpted ceramic bells crafted by eighteen resident potters from 9:00 A.M. to 5:00 P.M. this Saturday and Sunday.',
          'Spend $75 or more at any single receipt table to pick a complimentary cotton tote bag while supplies last.',
        ]),
    ], [
      ['Single · Detail','How do shoppers earn a free cotton tote bag during the fair?', ['Spending at least $75 in a single purchase','Visiting Glass Gallery before 10:00 A.M.','Buying exclusively coffee mugs from resident potters','Bringing reusable boxes from home'], 0,'ตอบ Spending at least $75 in a single purchase'],
      ['Single · Detail','How many artists are participating in the Pier 2 sale?', ['Eighteen potters','Twenty-three potters','Twelve jewelers','Two sculptors'], 0,'ตอบ Eighteen potters (eighteen resident potters)'],
    ]),

    p7(21,'m21-s3', [
      doc('chat','Lab Engineering Messages', [['Channel','#optic-bench'], ['Date','August 19']],
        [
          chat([
            ['Anita Diaz','10:04 A.M.','Just mounted the new 50mm lens housing onto Camera Rig B inside Tunnel 1, yet calibration test grids look blurry on monitor 2!'],
            ['Samir Patel','10:07 A.M.','Check lens collar filter threads —did someone leave a thick green protective shipping cap film inside the rear bayonet ring?'],
            ['Anita Diaz','10:10 A.M.','Oh man... peeled back the matte lens mount—zero film left there, though the focusing lock knob sits slightly crooked off index mark zero!'],
            ['Samir Patel','10:13 A.M.','Loosen that brass hex screw beside focus ring zero, snap it back squarely on detent notch 1, and snap test frame #2 right now!'],
          ]),
        ]),
    ], [
      ['Single · Cause','What caused test photos on Camera Rig B to appear out of focus?', ['The focus lock screw sat misaligned slightly away from index notch 1','Green shipping wrap blocked rear lens glass','Monitor 2 video cables disconnected inside Tunnel 1','The 50mm lens suffered a cracked glass collar'], 0,'ตอบ The focus lock screw sat misaligned... (focusing lock knob sits slightly crooked off index mark zero)'],
      ['Single · Detail','How does Samir advise Anita to fix the blurred focus?', ['Loosen the brass hex screw and align the ring back onto notch 1','Swap onto Monitor 1 inside Tunnel 2','Order a fresh protective optical rear film','Mail the 50mm housing back to factory'], 0,'ตอบ Loosen the brass hex screw and align the ring...'],
      ['Single · Inference','Did a plastic protective film actually cause the problem?', ['No—checking the rear mount showed zero film left inside','Yes—matte green film smeared the lens glass','Only monitor screens kept protective plastic on','Samir peeled green film off beforehand'], 0,'ตอบ No—checking the rear mount showed zero film left inside'],
    ]),

    p7(21,'m21-s4', [
      doc('table','Metro Moving & Packing — Reusable Hard Plastic Crate Rentals', [['Delivery','Free Curb Drop & Pickup Within City Limits']],
        [
          tbl(
            ['Bundle Pack','62-Liter Crush-Proof Crates','Rolling Steel Dollies','1-Week Rental','Extra Week Fee'],
            [
              ['Studio Apartment','20 crates','1 dolly','$48','+$18 / wk'],
              ['2-Bedroom Move','40 crates','2 dollies','$84','+$30 / wk'],
              ['Small Office (15 Desks)','65 crates','3 dollies','$135','+$45 / wk'],
            ]),
          'Stackable tamper-tie zip seals + peelable corner label strips included free with every bundle!',
        ]),
    ], [
      ['Single · Math','How much total rent does a homeowner pay for keeping the 2-Bedroom Move pack for THREE full weeks altogether?', ['$144','$84','$114','$252'], 0,'ตอบ $144 (สัปดาห์แรก $84 + เพิ่มอีก 2 สัปดาห์ × $30 = $60 -> รวม $144!)'],
      ['Single · Detail','What equipment besides plastic bins is bundled inside the Studio Apartment tier?', ['One rolling steel dolly, zip seals, and corner labels','Two steel dollies and tape guns','Cardboard divider pads for sixty files','Three dolly locks for office desks'], 0,'ตอบ One rolling steel dolly, zip seals, and corner labels'],
      ['Single · Benefit','Does moving within city boundaries add delivery courier charges for crate drop-off or pickup?', ['No, both curb drop-off and return pickup are free','Yes, $18 applies for city curb drops','Only 65-crate office tiers deliver free','Customers return stacked bins at downtown depots'], 0,'ตอบ No, both curb drop-off and return pickup are free'],
    ]),

    p7(21,'m21-s5', [
      doc('letter','Notice of Fee Update', [['To','Annual Locker Tenants'], ['From','Civic Fitness Club'], ['Date','June 1']],
        [
          'Dear Valued Club Members,',
          'Thank you kindly for exercising with Civic Fitness Club across another energetic spring! Starting August 1, dedicated private garment storage locker rentals adjust modestly from $14 monthly up to $17 monthly —our very first rate revision since 2020—reflecting expanded overnight UV shoe sanitization fans and daily eucalyptus shower refills installed last month.',
          'Prefer switching back onto complimentary day-use digital PIN stalls instead? Stop smoothly past Reception Desk 1 prior to July 20 so billing resets at $0!',
        ]),
    ], [
      ['Single · Purpose','Why is Civic Fitness Club writing to members renting personal storage lockers?', ['To give advance notice of a $3 monthly locker fee increase starting August 1','To remind athletes to empty day-use digital PIN stalls nightly','To cancel overnight shower sanitization programs','To introduce $17 club gym admission fees'], 0,'ตอบ To give advance notice of a $3 monthly locker fee increase... ($14 -> $17 จากพัดลมฆ่าเชื้อรองเท้าและเติมสบู่ยูคาลิปตัส)'],
      ['Single · Detail','When must locker renters notify Reception if they prefer canceling paid rentals before higher rates apply?', ['Before July 20','On August 1','Anytime in 2020','Within 48 hours of June 1'], 0,'ตอบ Before July 20 (prior to July 20 so billing resets at $0!)'],
      ['Single · Detail','What free alternative storage option exists for members who drop dedicated paid lockers?', ['Complimentary single-day digital PIN lockers','Hallway coat racks near Reception Desk','Basement bicycle storage racks','Free monthly private lockers with shampoo'], 0,'ตอบ Complimentary single-day digital PIN lockers'],
    ]),

    p7(21,'m21-s6', [
      doc('article','Smart Hydroponic Shipping Containers Supply Crisp Restaurant Salad Greens Downtown', [['Source','Urban Ag Business']],
        [
          'Fine dining chefs downtown routinely complain that field-grown butterhead lettuce trucks across 1,500 desert miles in waxed cardboard before arriving bruised inside damp kitchen walk-ins five days after harvest.',
          'Midtown food co-op SproutBox slotted two insulated steel cargo containers atop an idle surface parking deck beside Market Street, wiring full-spectrum red-blue LED grow banks above tiered nutrient water gutters. Harvesting crispy basil and baby kale minutes before dinner rushes lets neighborhood bistros plate vibrant salads within hours of snipping while shrinking delivery mileage literally to sidewalk distance.',
        ]),
    ], [
      ['Single · Problem','What issue did chefs face with field-grown restaurant lettuce before SproutBox launched?', ['Long truck hauls left delicate greens bruised and days old upon arrival','Market Street restaurants lacked refrigerated walk-ins','Red-blue indoor lights faded butterhead lettuce taste','Parking lots banned wholesale delivery trucks'], 0,'ตอบ Long truck hauls left delicate greens bruised... (trucks 1,500 miles... arriving bruised five days after harvest)'],
      ['Single · Location','Where did SproutBox install its hydroponic farming shipping containers?', ['On top of an unused downtown parking deck on Market Street','Inside rural desert greenhouse farms','In restaurant basement walk-in chillers','Beside harbor seafood boat docks'], 0,'ตอบ On top of an unused downtown parking deck... (atop an idle surface parking deck beside Market Street)'],
      ['Single · Vocab','The word "shrinking" in paragraph 2 is closest in meaning to ___.', ['dramatically reducing','stretching widely','harvesting hastily','weighing carefully'], 0,'ตอบ dramatically reducing (shrinking delivery mileage literally to sidewalk distance)'],
    ]),

    p7(21,'m21-s7', [
      doc('ad','Careers — Customer Billing Success Coordinator (BeaconSaaS)', [['City','Austin Downtown · Hybrid (Tue–Wed In-Office)']],
        [
          'Help boutique dental practices and veterinary offices glide onto automated mobile patient invoice reminders! [1] You will lead upbeat 30-minute video kickoff calls explaining payment link setups, inspect Stripe bank payout verification forms, and resolve occasional merchant card routing flags smoothly.',
          'Your Strengths:',
          lst([
            '1+ year customer support, bank teller service, or small-business onboarding roles',
            'Warm clarity translating billing jargon gently for busy non-technical clinic nurses',
            'Organized precision tagging customer follow-ups accurately inside CRM ticket queues',
          ]),
          '[2] Benefits pair $56,000 pay, 100% covered medical + optical coverage, commuter stipends, and 18 vacation days! [3] Email CV smoothly to talent@beaconsaas.io attaching one brief note sharing a customer app you love using daily! [4]',
        ]),
    ], [
      ['Single · Detail','Which office days require physical attendance in Austin?', ['Tuesdays and Wednesdays','Mondays through Fridays','Strictly Fridays only','No in-office days required'], 0,'ตอบ Tuesdays and Wednesdays (Hybrid · Tue–Wed In-Office)'],
      ['Single · Detail','Besides standard resume history, what must candidates attach when emailing BeaconSaaS?', ['A short note explaining a favorite everyday customer app','References from two veterinary dental clinics','Screenshots of personal bank payout forms','Sample CRM spreadsheet tables'], 0,'ตอบ A short note explaining a favorite everyday app... (one brief note sharing a customer app you love using daily)'],
      ['Single · Task','Who does this role frequently guide via 30-minute video calls?', ['Medical clinic staff such as dental and veterinary office coordinators','SaaS software backend programmers','Austin bank credit underwriters','Remote marketing graphic illustrators'], 0,'ตอบ Medical clinic staff... (boutique dental practices and veterinary offices / clinic nurses)'],
      ['Single · Insertion','In which position [1], [2], [3], or [4] does the following sentence best fit? "Experience tracking tickets neatly inside Intercom or HubSpot CRM gives candidates a helpful edge."', ['[2]','[1]','[3]','[4]'], 0,'ตอบ [2] (ต่อจาก Your Strengths เพื่อเสริมประสบการณ์เครื่องมือ CRM ก่อนกล่าวถึงค่าตอบแทนและสวัสดิการ)'],
    ]),

    p7(21,'m21-s8', [
      doc('memo','Harbor Community Arts Center — Kiln Glaze Safety & Firing Guidelines', [['Studio','Basement Ceramics Room B2']],
        [
          'Members shaping stoneware vases and dinnerware share electric computer kilns twice weekly:',
          lst([
            'Wipe wet glaze drips completely CLEAN off bottom clay foot rims using damp yellow sponges—bare glazed bottoms fuse permanently onto expensive silicon-carbide kiln shelves ($18 repair fee per chipped shelf!).',
            'Verify clay boxes carry strictly labeled Cone 6 Mid-Fire Stoneware stamps; low-fire Cone 06 earthenware clay melts smoothly inside high-heat shelves!',
            'Wait until kiln digital probes cool below 45°C before technicians unlock heavy steel lid latches.',
          ]),
        ]),
    ], [
      ['Single · Cause','Why does the guide demand wiping glaze drips completely off pot bottom rims before firing?', ['Melted glaze glues pots permanently onto expensive firing shelves, chipping surfaces','Yellow sponges darken light stoneware clay color','Low-fire earthenware bowls shatter at 45°C','Kiln lid latches stick near wet ceramic edges'], 0,'ตอบ Melted glaze glues pots permanently onto shelves... (bare glazed bottoms fuse permanently onto expensive kiln shelves)'],
      ['Single · Detail','What clay firing specification is strictly allowed inside Room B2 kilns?', ['Cone 6 mid-fire stoneware clay','Low-fire Cone 06 earthenware','Air-dry polymer hobby clay','Porcelain porcelain tiles without stamps'], 0,'ตอบ Cone 6 mid-fire stoneware clay'],
      ['Single · Penalty','How much is charged if careless bottom glazing damages a silicon-carbide kiln shelf?', ['$18 per chipped shelf','$45 deposit fee','$6 replacement charge','Thirty days studio suspension'], 0,'ตอบ $18 per chipped shelf ($18 repair fee per chipped shelf!)'],
      ['Single · Condition','When can technicians open locked kiln lids safely?', ['Once digital internal thermometer probes drop below 45°C','Immediately once firing timers chime midnight','Every Monday and Thursday at noon','Twenty minutes after sponges dry rims'], 0,'ตอบ Once digital internal thermometer probes drop below 45°C'],
    ]),

    p7(21,'m21-s9', [
      doc('article','Refurbished Commercial Office Chairs Help Enterprises Cut Fit-Out Carbon Footprints', [['By','Devon Alvarez'], ['Magazine','Workplace Sustainability']],
        [
          'Whenever mid-size tech tenants downsize urban leases or move downtown towers, thousands of five-year-old ergonomic mesh task chairs originally built out of die-cast aluminum frames wind up trucked straight into municipal scrap shredders simply because bright fabric seat cushions look scuffed along front edges. [1] Smelting virgin metal frames and molding fresh glass-filled plastic shells generates heavy factory manufacturing emissions per new office desk.',
          'Circular furniture specialists at ReSeat Studio built a commercial assembly loop restoring classic twelve-year-guaranteed ergonomic fleet chairs back up to crisp factory-fresh spec across thirty regional cities. [2] Skilled upholstery crews strip torn seat cloth clean away, steam-wash breathable nylon mesh backs, swap worn gas pneumatic height cylinders in four minutes, and ship certified reconditioned seating fleets neatly onto growing companies at half original showroom pricing.',
          '"Choosing 140 remanufactured aluminum-base mesh chairs saved our new architecture office $52,000 while keeping four tons of healthy steel frames out of scrap yards," notes studio operations head Marcus Reyes. [3] Independent ergonomics auditors verify identical ten-year structural frame warranties across every refurbished batch.',
          'Twelve commercial office developers now bundle certified remanufactured chair allocations into starter turnkey tenant move-in leases. [4]',
        ]),
    ], [
      ['Single · Problem','Why were sturdy metal-frame ergonomic chairs routinely scrapped despite intact aluminum frames?', ['Superficial cloth cushion scuffs led tenants moving offices to discard whole chairs','Pneumatic cylinders broke irreparably within two months','Aluminum office frames corrode inside city air','Municipal scrap shredders paid higher metal bonuses'], 0,'ตอบ Superficial cloth cushion scuffs led tenants to discard whole chairs... (wind up in shredders simply because fabric seat cushions look scuffed)'],
      ['Single · Detail','What worn mechanical part does ReSeat Studio regularly replace alongside fresh seat fabric?', ['Gas pneumatic height adjustment cylinders','Glass-filled aluminum metal armrests only','Steel skyscraper corridor elevators','Die-cast desk wheels from scrap yards'], 0,'ตอบ Gas pneumatic height adjustment cylinders (swap worn gas pneumatic height cylinders in four minutes)'],
      ['Single · Benefit','What dual financial and warranty reassurance convinced Marcus Reyes’s firm to order 140 restored chairs?', ['Fifty-percent lower pricing paired with verified ten-year structural frame guarantees','Monthly flexible rental options','Free custom color screen printing per desk','Instant next-day bicycle messenger delivery'], 0,'ตอบ Fifty-percent lower pricing paired with ten-year guarantees (at half showroom pricing + ten-year structural frame warranties)'],
      ['Single · Vocab','The word "virgin" in paragraph 1 is closest in meaning to ___.', ['newly mined and unrecycled','slightly worn','heavily painted','economically built'], 0,'ตอบ newly mined and unrecycled (virgin metal frames = โลหะบริสุทธิ์ที่ถลุงใหม่จากแร่ดิบ ไม่ใช่ของรีไซเคิล)'],
      ['Single · Insertion','In which position [1], [2], [3], or [4] does the following sentence best fit? "Fresh wool-blend stain-resistant seat cushions clip tightly onto old aluminum seat pans using recycled fasteners."', ['[2]','[1]','[3]','[4]'], 0,'ตอบ [2] (ต่อจากประโยคแนะนำโรงงานปรับสภาพเก้าอี้ของ ReSeat ก่อนเล่าขั้นตอนถอดหุ้มเบาะและเปลี่ยนโช้ก)'],
    ]),

    p7(21,'m21-d1', [
      doc('ad','BrightPath Workshops — Executive Writing & Presentation Clinics', [['Location','Midtown Business Forum']],
        [
          tbl(
            ['Clinic Workshop','Date','Hours','Regular Seat Fee','Team 3+ Rate / Seat'],
            [
              ['Crisp Executive Memos','Thurs Nov 14','9:00 A.M.–1:00 P.M.','$195','$160'],
              ['Persuasive Financial Slides','Fri Nov 15','1:00–5:00 P.M.','$210','$175'],
              ['High-Stakes Q&A Delivery','Sat Nov 16','10:00 A.M.–3:00 P.M.','$240','$195'],
            ]),
          'Printed laminated cheat-cards AND gourmet sandwich lunch boxes come INCLUDED across ALL workshops!',
        ]),
      doc('email','E-mail Message',
        [['To','training@brightpathforum.org'], ['From','Hannah Park (CrestBank Ops)'], ['Date','October 28'], ['Subject','Registration for 4 Credit Analysts — Nov 15']],
        [
          'Hello Workshop Team,',
          'Registering FOUR junior credit analysts neatly onto your Friday afternoon Persuasive Financial Slides workshop (Nov 15 · 1:00–5:00 P.M.) so quarterly board chart decks tighten smoothly ahead of December audits! Since we register four seats simultaneously under ONE corporate card, our Team 3+ Rate drops per-seat cost nicely down to $175!',
          'Quick dietary notice: analyst Tom Chen maintains a strict shellfish allergy—confirm sandwich box trays steer clear of shrimp wraps!',
          'Best,\nHannah Park',
        ]),
    ], [
      ['Double · Math','Calculate CrestBank’s EXACT total charge for 4 analysts attending Persuasive Financial Slides on Nov 15:', ['$700','$840','$640','$780'], 0,'ตอบ $700 (4 คน >= Team 3+ Rate ของ Persuasive Slides คือ $175/คน × 4 = $700!)'],
      ['Double · Detail','Why does Hannah Park NOT need to buy separate catering packages for afternoon seminar participants?', ['Gourmet sandwich lunches are already included inside workshop tuition','All analysts bring lunch prior to 1:00 P.M.','Forum cafeterias offer free Friday buffets','Seafood allergy excludes afternoon meal packages'], 0,'ตอบ Gourmet sandwich lunches are already included... (gourmet sandwich lunch boxes come INCLUDED across ALL workshops!)'],
      ['Double · Math','How much total did CrestBank SAVE altogether by enrolling 4 analysts together instead of registering 4 individual regular seats ($210 each)?', ['$140 saved ($35 × 4 seats)','$105 saved','$70 saved','$175 saved'], 0,'ตอบ $140 saved ($210 - $175 = $35 ต่อคน × 4 = $140!)'],
      ['Double · Detail','Which workshop runs longest (five full hours)?', ['High-Stakes Q&A Delivery (Saturday, Nov 16)','Crisp Executive Memos','Persuasive Financial Slides','All sessions run identically for 4 hours'], 0,'ตอบ High-Stakes Q&A Delivery (10:00 A.M.–3:00 P.M. = 5 ชม. ส่วนอีกสองอันแค่ 4 ชม.)'],
      ['Double · Detail','What special medical request did Hannah submit for analyst Tom Chen?', ['Avoiding shrimp or shellfish ingredients inside lunch boxes','Reserving front-row chart seats','Receiving vegetarian tea instead of sandwiches','Attending Thursday Nov 14 morning instead'], 0,'ตอบ Avoiding shrimp or shellfish ingredients... (strict shellfish allergy -> steer clear of shrimp wraps!)'],
    ]),

    p7(21,'m21-d2', [
      doc('notice','Oakridge Municipal Golf & Tennis Center — Rain Check & Cancel Terms', [['Facility','East Creek Parkland']],
        [
          lst([
            'Prepaid Outdoor Tennis Courts canceling 24+ hours BEFORE scheduled court hours receive automatic 100% digital Wallet Credit back.',
            'Cancel notices submitted UNDER 24 hours forfeit court rental fees—UNLESS Park Rangers officially close wet clay surfaces due to heavy rain puddles or active lightning alerts!',
            'Rain Check credits expire strictly 90 days post-issue date.',
          ]),
        ]),
      doc('email','E-mail Message',
        [['To','courts@oakridgeparks.org'], ['From','Victor Sato'], ['Date','Sunday, June 9 · 11:15 A.M.'], ['Subject','Wet Clay Rain Check for Court #4 (Today 10:00 A.M.)']],
        [
          'Hi Park Front Desk,',
          'I booked Outdoor Clay Court #4 for $32 this morning Sunday, June 9 at 10:00 A.M.–11:00 A.M.! However, brisk morning downpours soaked East Creek completely starting 9:40 A.M. so Park Ranger Tom locked all Clay Court Padlocks shut and hung yellow "COURTS CLOSED — PUDDLES" signs at 9:50 A.M.!',
          'Even though weather struck neatly right before 10:00 A.M. inside the 24-hour window, official Ranger wet-court closures qualify automatically for a full $32 digital Wallet Rain Check credit smoothly right? Hoping to rebook sunny Court #4 next weekend!',
          'Best,\nVictor Sato',
        ]),
    ], [
      ['Double · Synthesis','Will Victor Sato receive his full $32 credit back into his digital park wallet?', ['Yes—official Park Ranger wet-court closures qualify for Rain Check credits even under 24 hours notice','No—canceling 20 minutes ahead misses the 24-hour threshold','Only indoor basketball passes earn digital wallet credits','Yes, provided Rain Checks redeem before Monday noon'], 0,'ตอบ Yes—official Park Ranger wet-court closures qualify... (นโยบายยกเว้นให้เมื่อ UNLESS Park Rangers officially close wet clay surfaces due to rain puddles!)'],
      ['Double · Detail','How long does Victor have to spend his $32 Wallet Rain Check credit before expiration?', ['Within 90 calendar days of June 9','Strictly within 24 hours','Anytime over two full years','Strictly before June 30'], 0,'ตอบ Within 90 calendar days of June 9 (expire strictly 90 days post-issue date)'],
      ['Double · Detail','Why were Court #4 gates physically locked at 9:50 A.M.?', ['Standing rainwater soaked clay surfaces after 9:40 A.M. downpours','Victor canceled his reservation late Saturday night','Court lights burned out overnight','Ranger Tom scheduled Sunday lawn mowing'], 0,'ตอบ Standing rainwater soaked clay surfaces...'],
      ['Double · Inference','What would have happened if Victor had cancelled sunny Court #4 at 9:50 A.M. strictly because he slept in late?', ['The $32 fee would have been forfeited without credit','Digital wallet credits would restore 50%','Park Rangers would reassign Court #4 Tuesday','Lightning rules grant free swaps automatically'], 0,'ตอบ The $32 fee would have been forfeited... (Cancel under 24 hours without rain closure forfeits rental fees!)'],
      ['Double · Detail','What did Victor originally pay to book Clay Court #4 for one hour?', ['$32','$24','$90','$16'], 0,'ตอบ $32 ($32 this morning Sunday June 9)'],
    ]),

    p7(21,'m21-t1', [
      doc('ad','ClearBrew Coffee Supply — Cafe Brewer Hardware Clearance', [['Promo','Ends May 31']],
        [
          tbl(
            ['Machine Name','Batch Carafe Output','Water Line Plumbing?','Price','Thermal Carafe Bonus'],
            [
              ['PourMini Single 1L','1.0 Liter (5 cups)','Pour-over Manual Reservoir','$185','1 Glass Carafe Included'],
              ['BatchPro Dual 2.2L','2 × 2.2 Liters','Direct 3/8" Cold Water Line','$640','2 Stainless Airpots ($0)'],
              ['MegaBrew 5L Urn','5.0 Liters','Direct 3/8" Cold Water Line','$890','2 Urn Liners Free'],
            ]),
          'Buy any Direct-Plumbed Brewer ($640+) AND receive 1 FREE Inline Water Scale Filter Cartridge ($65 value!) when adding promo code CLEANLINE!',
        ]),
      doc('chat','Restaurant Coffee Station Planning Chat', [['Channel','#cafe-prep'], ['Date','May 19']],
        [
          chat([
            ['Nora Reyes','1:20 P.M.','We need an automated commercial drip brewer right behind Cafe Register 2 hooked straight onto our cold filtered sink manifold so morning openers never haul heavy water pitchers! PourMini lacks direct line plumbing, while MegaBrew 5L sits way too tall beneath upper pastry cupboards! Grab BatchPro Dual 2.2L + remember punching code CLEANLINE for that free $65 water filter cartridge!'],
            ['Ben Alvarez','1:25 P.M.','Awesome! Checked invoice totals: BatchPro Dual includes TWO stainless insulated airpots right inside box, AND code CLEANLINE zeroed out the $65 filter automatically! Arrives Wednesday May 24!'],
          ]),
        ]),
      doc('invoice','ClearBrew Invoice #CBR-8041',
        [['Customer','Oakwood Bistro Cafe'], ['Date','May 19']],
        [
          '1 × BatchPro Dual 2.2L Brewer (Incl. 2 × Stainless Airpots) = $640.00.',
          '1 × Inline Water Scale Filter Cartridge (Promo Code CLEANLINE) = $0.00.',
          'Delivery Courier: $0.00 · Total Paid: $640.00 · Expected Delivery: May 24.',
        ]),
    ], [
      ['Triple · Synthesis','Why did Oakwood Bistro reject BOTH PourMini Single 1L AND MegaBrew 5L Urn?', ['PourMini requires manual water pouring while MegaBrew sits too tall beneath cafe cupboards','Only BatchPro Dual includes free stainless carafes/airpots','Code CLEANLINE applies exclusively to BatchPro Dual models','PourMini consumes hot boiler pressure lines'], 0,'ตอบ PourMini requires manual water pouring while MegaBrew sits too tall beneath cupboards (Nora ชี้แจงชัดเจนทั้งสองรุ่นในแชต!)'],
      ['Triple · Detail','Why did Nora apply promo code CLEANLINE at checkout?', ['To add a complimentary $65 Inline Water Scale Filter Cartridge onto their $640 brewer','To claim two stainless insulated airpots free','To discount BatchPro Dual down by $65','To expedite shipping smoothly onto May 24'], 0,'ตอบ To add a complimentary $65 Inline Water Scale Filter Cartridge...'],
      ['Triple · Inference','Which customer benefit WOULD have failed if Nora had ordered PourMini Single 1L ($185) using CLEANLINE?', ['CLEANLINE applies solely to Direct-Plumbed Brewers costing $640+, excluding manual pour-over units','Glass carafes break easily without scale filter cartridges','PourMini uses 3/8" copper cold water valves','Filter sizes shrink under 1.0 liter output'], 0,'ตอบ CLEANLINE applies solely to Direct-Plumbed Brewers $640+ (Excluding PourMini manual reservoir)'],
      ['Triple · Detail','What bonus containers arrive packed inside BatchPro Dual 2.2L boxes at no extra cost?', ['Two stainless insulated airpots','Two urn replacement liners','One 1-liter glass carafe','Backup copper manifold valves'], 0,'ตอบ Two stainless insulated airpots'],
      ['Triple · Detail','When is Invoice #CBR-8041 scheduled to arrive at Oakwood Bistro?', ['May 24','May 19','May 31','June 1'], 0,'ตอบ May 24 (Arrives Wednesday May 24 / Expected Delivery: May 24)'],
    ]),

    p7(21,'m21-t2', [
      doc('article','Pacific Green Building Summit Announces Floor 4 Innovation Demos', [['Date','October 25 · Downtown Civic Hall']],
        [
          'Architects and sustainable builders gather October 25 across Civic Hall exploring net-zero timber facades, solar glass skylights, and bio-foam wall insulation! Pre-registered ticket badge holders join 20-minute hands-on supplier Bench Demos free.',
        ]),
      doc('table','October 25 Afternoon Hands-On Bench Demo Slots (Floor 4 Mezzanine)', null, [
        tbl(
          ['Booth Time','Company Host','Material Demonstrated','Safety Note','Spots Left'],
          [
            ['1:15–1:35 P.M.','Helios Glazing','Electrochromic Solar Windows','No gloves needed','8 open'],
            ['2:00–2:20 P.M.','BioWall Insulation','Sprayed Wood-Fiber Cavity Foam','Goggles Provided Onsite','Sold Out'],
            ['3:00–3:20 P.M.','TimberJoin Corp.','Reversible Birch Cam-Lock Beams','Closed-Toe Shoes Required','5 open'],
          ]),
      ]),
      doc('email','E-mail Message',
        [['To','demos@pacificgreensummit.org'], ['From','Elena Kwon (Architect)'], ['Date','October 18'], ['Subject','Oct 25 Mezzanine Demo Booking Check']],
        [
          'Hello Events Team,',
          'Attending Pacific Green Building Summit all afternoon October 25! I noticed BioWall Insulation’s 2:00 P.M. sprayed foam slot already sits Sold Out! Fortunately TimberJoin Corp.’s 3:00 P.M. reversible cam-lock wood beams fit my apartment retrofit projects EVEN BETTER —AND luckily I am wearing sturdy leather boots all day meeting closed-toe floor safety rules neatly!',
          'Please sign me into TimberJoin Corp.’s 3:00–3:20 P.M. Bench Demo slot, plus let me know whether Helios Glazing’s 1:15 P.M. Electrochromic Windows demo sits adjacent across Mezzanine Row B too!',
          'Warmly,\nElena Kwon',
        ]),
    ], [
      ['Triple · Synthesis','Which scheduled demonstration IS Elena booking officially for 3:00 P.M. October 25?', ['TimberJoin Corp.’s Reversible Birch Cam-Lock Beams demo','Helios Glazing’s Electrochromic Windows','BioWall Insulation’s Wood-Fiber Foam demo','Keynote timber facade speech'], 0,'ตอบ TimberJoin Corp.’s Reversible Birch Cam-Lock Beams demo (Please sign me smoothly into TimberJoin’s 3:00–3:20 P.M. slot)'],
      ['Triple · Detail','Why does Elena mention wearing sturdy leather boots on October 25?', ['TimberJoin’s demonstration specifically requires wearing closed-toe shoes','Floor 4 stairs enforce outdoor hiking boots','Rain leaks across Mezzanine glass skylights','Helios Glazing distributes leather glove pairs'], 0,'ตอบ TimberJoin’s demonstration specifically requires wearing closed-toe shoes (Safety Note: Closed-Toe Shoes Required)'],
      ['Triple · Detail','Why could Elena NOT reserve a bench seat for BioWall Insulation at 2:00 P.M.?', ['All participant spaces were already full (Sold Out)','She forgot bringing personal safety goggles','Spray foam demonstrations shifted onto Floor 1','Her architecture train lands strictly at 2:30 P.M.'], 0,'ตอบ All participant spaces were already full (ตารางระบุ Sold Out)'],
      ['Triple · Inference','How many spots remain at TimberJoin Corp. right AFTER Elena reserves her single ticket?', ['Four spots open','Five spots open','Seven spots open','Zero spots open'], 0,'ตอบ Four spots open (เดิมมี 5 open - จองของ Elena 1 ที่ = เหลือ 4 ที่!)'],
      ['Triple · Detail','Does Helios Glazing’s 1:15 P.M. solar window bench demo demand wearing special protective shoes or goggles?', ['No special safety gear rules—no gloves or special footwear are noted','Yes, dark welding helmets','Closed-toe boots strictly','Insulated foil gloves required'], 0,'ตอบ No special safety gear rules (No gloves needed)'],
    ]),

    p7(21,'m21-t3', [
      doc('memo','Apex Manufacturing — Tuition Assistance Scholarship Policy', [['To','Regular Full-Time Factory & Office Staff'], ['From','HR Training Desk']],
        [
          'Staff completing six continuous employment months qualify for 75% tuition payback (capped at $1,200/calendar year!) strictly toward college vocational certificates OR welding/CAD evening courses directly strengthening workplace technical roles—provided grades finish smoothly at "B" (or numeric 80%+) or higher!',
        ]),
      doc('table','Spring Evening Course Catalog (Westside Technical Institute)', null, [
        tbl(
          ['Course Code','Course Name','Tuition Fee','Target Job Alignment'],
          [
            ['ENG-104','Blueprint Reading & CNC Metric Tolerances','$800','Assembly Technicians / Machinist Leads'],
            ['WLD-202','TIG Stainless Steel Tube Welding','$1,100','Sheet Fabrication Welders'],
            ['MUS-110','Jazz Acoustic Guitar Ensemble','$400','Community Enrichment (Non-Vocational)'],
          ]),
      ]),
      doc('email','E-mail Message',
        [['To','training@apexmfg.com'], ['From','David Morales (Machinist Lead · Hired 2 Years Ago)'], ['Date','June 4'], ['Subject','Spring ENG-104 Tuition Payback Request']],
        [
          'Hi HR Training,',
          'Wrapped up Westside Technical Institute’s Spring ENG-104 Blueprint Reading & CNC Metric Tolerances class last Thursday scoring a crisp 92% final grade (Transcript PDF + Paid $800 Tuition Receipt attached neatly below!).',
          'Checking math calmly before payroll processes next Friday: since I joined Apex full time two years ago clearly beyond 6 months AND scored well over 80%, does Apex reimburse neatly 75% of that $800 tuition ($600!) leaving $600 remaining inside my $1,200 annual training cap for autumn CNC programming classes?',
          'Best,\nDavid Morales',
        ]),
    ], [
      ['Triple · Synthesis','Will HR Training approve David Morales’s $600 reimbursement request?', ['Yes—2 years tenure exceeds 6 months, ENG-104 aligns with machinist work, 92% exceeds the 80% grade floor, AND $600 sits below $1,200 annual caps','No—machinist leads must pick WLD-202 strictly','Only 50% tuition pays toward CNC metrics','Spring courses miss payroll cutoffs smoothly'], 0,'ตอบ Yes—every criterion fits (อายุงาน 2 ปี >= 6 เดือน, วิชา CNC ตรงสายงาน Machinist Lead, เกรด 92% >= 80%, เบิก 75% ของ $800 = $600 <= เพดาน $1,200!)'],
      ['Triple · Inference','How much total annual tuition cap WOULD David still have left later this year IF he took ENG-104 ($600 reimbursed) AND later enrolled into an autumn $1,000 CAD programming course?', ['$600 remaining ($1,200 cap - $600 spring payback, paying 75% of $800 out of remaining balance capped at $600 instead of $750!)','$1,200 remaining','$800 remaining','$0 left altogether'], 0,'ตอบ $600 remaining (งบทั้งปี $1,200 เบิกไปแล้ว $600 จึงเหลืออีก $600!)'],
      ['Triple · Inference','Which course from Westside Technical Institute’s catalog would HR REJECT regardless of scoring 100%?', ['MUS-110 Jazz Acoustic Guitar Ensemble (non-vocational community enrichment)','WLD-202 TIG Stainless Tube Welding','ENG-104 Blueprint Reading & CNC','Any spring evening class'], 0,'ตอบ MUS-110 Jazz Acoustic Guitar Ensemble (วิชาสันทนาการทั่วไป ไม่ตรงสายงานเทคนิคในโรงงาน!)'],
      ['Triple · Detail','How much out-of-pocket net expense did David pay himself ($800 minus $600 reimbursed) for ENG-104?', ['$200 out of pocket','$400 out of pocket','$600 out of pocket','$80 out of pocket'], 0,'ตอบ $200 out of pocket ($800 จ่ายจริง ลบคืนจากบริษัท 75%($600) = ออกเองสุทธิแค่ $200!)'],
      ['Triple · Detail','What grade floor must staff hit to unlock Apex tuition payback?', ['A grade of B or numeric score of 80%+','Numeric score of 70%','Pass/Fail certificate without scores','95% valedictorian honors'], 0,'ตอบ A grade of B or numeric score of 80%+'],
    ]),

    // ══════════════════ SET 22 (Q147–Q200: 54 Qs) ══════════════════
    p7(22,'m22-s1', [
      doc('memo','Building Access Notice', [['To','Floor 3 & 4 Staff'], ['From','Tower Security'], ['Date','May 15']],
        [
          'Contractors upgrading emergency stairwell speaker chimes test alarm tones silently Friday morning between 7:30 A.M. and 8:15 A.M. across East Stairwell A only.',
          'Please recognize brief chime tones during that 45-minute test window are strictly routine audio tests requiring zero desk evacuations.',
        ]),
    ], [
      ['Single · Purpose','Why did Tower Security alert Floor 3 and 4 staff beforehand?', ['Prevent workers from mistaking morning loudspeaker chime tests for real emergencies','East Stairwell A doors remain sealed all week','Employees must evacuate desks Friday at 7:30 A.M.','Fire marshals require afternoon desk audits'], 0,'ตอบ Prevent workers from mistaking loudspeaker tests for real emergencies...'],
      ['Single · Detail','How long does Friday morning’s speaker check last?', ['45 minutes','Two hours','Thirty minutes','All morning until noon'], 0,'ตอบ 45 minutes (7:30 A.M. to 8:15 A.M. = 45 นาที)'],
    ]),

    p7(22,'m22-s2', [
      doc('ad','GreenBasket Farm Stand — Seasonal Strawberry U-Pick Weekends', [['Open','Sat–Sun · 7:30 A.M.–2:00 P.M.']],
        [
          'Step into sun-ripened heirloom berry rows just twenty minutes east off Route 8! Borrow reusable wooden pint harvest crates free near North Barn Check-In —pay strictly $4.25/pound weighed upon checkout (bring clean personal shopping tote bags to skip $0.25 paper checkout cartons!).',
        ]),
    ], [
      ['Single · Detail','What should visitors pack along to save paying $0.25 at farm checkout?', ['Personal shopping tote bags','Wooden harvest pint crates','Blank plastic scales','Paper receipt coupons'], 0,'ตอบ Personal shopping tote bags'],
      ['Single · Timing','When does U-Pick picking conclude on Saturdays and Sundays?', ['At 2:00 P.M.','At 5:00 P.M.','At 7:30 A.M.','At noon'], 0,'ตอบ At 2:00 P.M. (ตารางเวลาเปิดปิดวันเสาร์–อาทิตย์ระบุช่วงเก็บผลไม้ U-Pick ตั้งแต่ 07:30–14:00 น.)'],
    ]),

    p7(22,'m22-s3', [
      doc('chat','Bakery Cafe Prep Chat', [['Channel','#weekend-catering'], ['Date','June 22']],
        [
          chat([
            ['Leo Diaz','6:40 A.M.','Packaging up forty sesame breakfast bagels + herb cream cheese tubs neatly for Midtown Law Firm’s 8:00 A.M. board drop! Noticed plastic serving tongs ran entirely out inside Pantry Shelf 1!'],
            ['Mia Tanaka','6:44 A.M.','Whoa! Check Dishwasher Drying Rack B right behind Coffee Maker 2—twenty black stainless serving tongs sanitized overnight sit sparkling dry!'],
            ['Leo Diaz','6:47 A.M.','Spot on —grabbing four steel tongs AND tucking clean parchment dividers snugly over onion bagels so sesame bags never smell strongly of onion!'],
            ['Mia Tanaka','6:50 A.M.','Clever touch! Van leaves promptly at 7:20 A.M. so bagels land hot ahead of 8:00 A.M. attorneys!'],
          ]),
        ]),
    ], [
      ['Single · Problem','What missing catering tool did Leo spot at 6:40 A.M.?', ['Serving tongs for handling bagels','Herb cream cheese plastic tubs','Forty sesame breakfast bagels','Clean wooden parchment trays'], 0,'ตอบ Serving tongs... (plastic serving tongs ran entirely out inside Pantry Shelf 1)'],
      ['Single · Solution','Where did Mia tell Leo to pick up clean stainless tongs instead?', ['On Dishwasher Drying Rack B behind Coffee Maker 2','Inside Delivery Van glove compartments','At Midtown Law Firm kitchen','Along Pantry Shelf 1 cartons'], 0,'ตอบ On Dishwasher Drying Rack B behind Coffee Maker 2'],
      ['Single · Detail','Why does Leo tuck extra parchment papers between different bagel types?', ['Keep strong onion flavors from transferring onto mild sesame bagels','Warm bagels stay toasted until noon','Steel tongs clip onto parchment paper','Legal meetings mandate parchment wrappers'], 0,'ตอบ Keep strong onion flavors from transferring... (so sesame bags never smell strongly of onion!)'],
    ]),

    p7(22,'m22-s4', [
      doc('table','ClearPrint Banners — Outdoor Mesh & Vinyl Sign Specs', [['Lead Time','4 Business Days Standard']],
        [
          tbl(
            ['Banner Type','Size','Wind Slits / Breathable Mesh?','Unit Price','Brass Corner Grommets Included?'],
            [
              ['Solid Vinyl Standard','120 × 240 cm','No (Indoor / Calm Walls)','$54','Yes (Every 60 cm)'],
              ['WindMesh Fence Screen','120 × 240 cm','Yes (Micro-perforated 30% air pass)','$68','Yes (Every 45 cm)'],
              ['Heavy Double-Sided Street','90 × 180 cm','Light pole bracket hem','$92','Sewn Pole Pockets'],
            ]),
          'Quantity Discount: Order 10+ matching banners to save 15% automatically off printed totals!',
        ]),
    ], [
      ['Single · Detail','Which banner suits hanging along a breezy open construction site metal chain fence without ripping in gusts?', ['WindMesh Fence Screen','Solid Vinyl Standard','Heavy Double-Sided Street','Sewn Pole Pocket Indoor'], 0,'ตอบ WindMesh Fence Screen (ตาราง: Micro-perforated 30% air pass สำหรับลมผ่าน)'],
      ['Single · Math','How much total would ordering 10 WindMesh Fence Screen banners cost AFTER automatic 15% bulk savings?', ['$578.00','$680.00','$540.00','$612.00'], 0,'ตอบ $578.00 (10 ผืน × $68 = $680 -> ลด 15% ($102) = $578.00!)'],
      ['Single · Detail','Which banner attaches via sewn pockets instead of brass edge grommet holes?', ['Heavy Double-Sided Street','Solid Vinyl Standard','WindMesh Fence Screen','All three use grommets'], 0,'ตอบ Heavy Double-Sided Street (Sewn Pole Pockets)'],
    ]),

    p7(22,'m22-s5', [
      doc('review','Online Customer Feedback — ClearRest Bamboo Ergonomic Monitor Stand', [['Buyer','Sarah Kim · Verified Order']],
        [
          'Review: "Sturdy solid laminated bamboo shelf lifted my heavy 32-inch wide screen up eleven crisp centimeters freeing keyboard + notebook space underneath easily! Felt pads taped under legs slid softly across glass desks neatly! Minor heads-up: rear metal cable slot holes fit flat laptop power bricks ONLY horizontally sideways rather than pulling straight vertically up through small 3 cm cutouts."',
          'Maker Reply: "Really appreciate your sizing note, Sarah! Our next revision batch doubles rear pass-through slots smoothly to 6 cm wide oval holes so chunky power connectors slip straight upright effortless anytime!"',
        ]),
    ], [
      ['Single · Benefit','What desk improvement did Sarah achieve using the monitor stand?', ['Gained tidy open storage space underneath for keyboards and notebooks','Lowered her 32-inch screen comfortably downward smoothly','Routed vertical power bricks straight smoothly through 6 cm openings','Protected bamboo trays against wet mugs'], 0,'ตอบ Gained tidy open storage space... (lifted screen 11 cm freeing keyboard + notebook space underneath!)'],
      ['Single · Critique','What minor flaw did Sarah note about rear cable management openings?', ['Small 3 cm slots prevented bulky adapter bricks passing straight vertically','Glass desk pads peeled off bamboo legs','Wood shelves bowed noticeably under heavy screens','Felt leg strips smelled strongly of glue'], 0,'ตอบ Small 3 cm slots prevented bulky adapter bricks...'],
      ['Single · Action','How is ClearRest modifying upcoming manufacturing batches in response?', ['Widening rear cable openings out onto 6 cm ovals','Adding wireless USB charging pads onto legs','Switching wooden frames onto powder-coated aluminum','Lowering shelf heights down six centimeters'], 0,'ตอบ Widening rear cable openings out onto 6 cm ovals'],
    ]),

    p7(22,'m22-s6', [
      doc('article','Grocery Bakeries Install Compact Flour Mills Grinding Whole Grain Fresh Daily', [['Publication','Artisan Food Retailing']],
        [
          'Traditional stone-milled whole wheat flours spoil rapidly within three sunny weeks once delicate wheat germ oils crush open against warm steel rollers—forcing nationwide industrial flour packers to sift nutritious wheat germ hulls neatly completely out beforehand strictly so white bags survive nine-month supermarket shelf stays.',
          'Progressive neighborhood bakeries across Copenhagen recently wheeled neat countertop Austrian granite stone mills right beside retail loaf displays, grinding bright golden organic hard wheat berries strictly hours ahead of morning dough mixing so loaves preserve sweet nutty aromas alongside natural grain fiber without synthetic shelf chemicals.',
        ]),
    ], [
      ['Single · Problem','Why do large commercial mills routinely remove natural wheat germ from retail flour bags?', ['Natural grain oils quickly spoil flour within weeks on long store shelves','Austrian granite stones jam around commercial wheat hulls','Bakers prefer plain tasteless loaves','Steel rollers crack wooden shipping boxes'], 0,'ตอบ Natural grain oils quickly spoil flour... (spoil rapidly within three weeks -> force industrial packers to sift germ out so bags survive 9 months)'],
      ['Single · Practice','When do Copenhagen boutique bakers mill whole wheat berries into baking flour?', ['Barely hours ahead of mixing fresh daily dough','Nine months prior inside suburban depots','Strictly once every three winter weeks','Immediately after customers buy baked loaves'], 0,'ตอบ Barely hours ahead of mixing fresh daily dough'],
      ['Single · Vocab','The word "preserve" in paragraph 2 is closest in meaning to ___.', ['retain','remove','package cheaply','grind softly'], 0,'ตอบ retain (preserve sweet nutty aromas = รักษาคงกลิ่นหอมไว้)'],
    ]),

    p7(22,'m22-s7', [
      doc('ad','Job Opening — Field Solar Inverter Technician (Horizon Renewables)', [['Territory','Greater Sacramento Regional Vans']],
        [
          'Join experienced commercial rooftop solar crews diagnosing string inverter diagnostics across shopping plazas, school gyms, and cold storage depots! [1] You will swap faulty string fuse boxes smoothly safely, test panel array DC voltage curves using handheld thermal cameras, and submit neat mobile service sign-offs before returning vans home daily.',
          'Credentials Desired:',
          lst([
            'State Electrical Apprentice or Journeyman license in good standing',
            'Comfort navigating single-story flat commercial warehouse ladders calmly safely in sunny outdoor summers',
            'Clean Sacramento regional driving record operating high-roof Sprinter vans',
          ]),
          '[2] Earn $36–$44/hr base pay, full family healthcare, van commuting home privileges, and zero weekend shift schedules! [3] Email CV smoothly to recruiting@horizonrenew.com referencing Sac Tech. [4]',
        ]),
    ], [
      ['Single · Detail','Which equipment helps technicians inspect live panel voltage performance?', ['Handheld thermal inspection cameras','Commercial roofing cranes','School gym ladders only','Gasoline back-up generators'], 0,'ตอบ Handheld thermal inspection cameras (test array curves using handheld thermal cameras)'],
      ['Single · Perks','What transportation privilege is highlighted inside benefits?', ['Permission commuting directly home inside company work vans','Private hybrid car loan vouchers','Free weekend flight miles smoothly','No regional driving required'], 0,'ตอบ Permission commuting directly home inside company vans (van commuting home privileges)'],
      ['Single · Detail','Are evening or weekend callouts scheduled in this role?', ['No—weekends stay strictly off schedules','Yes, Saturday mall checks rotate monthly','Sunday morning inspections add bonus hourly stipends','Only during summer rainstorms'], 0,'ตอบ No—weekends stay strictly off schedules (zero weekend shift schedules!)'],
      ['Single · Insertion','In which position [1], [2], [3], or [4] does the following sentence best fit? "NABCEP PV installation certification adds strong starting pay negotiation leverage."', ['[2]','[1]','[3]','[4]'], 0,'ตอบ [2] (ต่อจาก Credentials Desired ทันที เพื่อเสริมใบรับรองสายโซลาร์เซลล์ ก่อนเข้าสู่ค่าจ้าง/สวัสดิการ)'],
    ]),

    p7(22,'m22-s8', [
      doc('memo','Corporate Conference Rooms — Hybrid Video Wall & Cleanup Checklist', [['Applies To','All HQ Suites Floor 2–8']],
        [
          'Shared Zoom video-conferencing rooms serve back-to-back client teams hourly throughout weekdays —kindly follow five tidy wrap-up habits before shutting doors:',
          lst([
            'Erase whiteboard dry-ink sketches EXCEPT boards tagged explicitly "DO NOT ERASE — PROJECT HOLD" in green magnet strips.',
            'Unplug personal HDMI presentation adapters calmly leaving conference table power cords tucked smoothly back inside recessed table wells.',
            'Reset overhead tabletop camera presets back onto "Wide Room Default" by tapping Desk Console Button 1 so afternoon presenters never stare tightly onto empty wall corners!',
          ]),
        ]),
    ], [
      ['Single · Exception','When should employees leave dry-erase writing UNTOUCHED on conference room whiteboards?', ['Whenever marked explicitly with green "DO NOT ERASE" magnetic banners','During consecutive client presentations before lunch','Every Monday morning weekly project huddles','Whenever Desk Console Button 1 blinks amber'], 0,'ตอบ Whenever marked explicitly with green "DO NOT ERASE" magnetic banners...'],
      ['Single · Action','Why does Desk Console Button 1 need pressing calmly upon exiting?', ['It centers wall cameras smoothly back to wide room view for incoming meetings','It dims tabletop HDMI cords for battery saving','It alerts Floor custodial crews to sweep rooms','It erases dry-ink glass boards electronically'], 0,'ตอบ It centers wall cameras back to wide room view... (reset camera presets back onto "Wide Room Default")'],
      ['Single · Detail','Where should table power adapters be neatly tucked prior to stepping outside?', ['Inside flush recessed conference table cord boxes','Under guest chairs beside doors','Directly onto whiteboard tray rails','Carried safely back onto employees’ personal desks'], 0,'ตอบ Inside flush recessed table cord boxes (tucked smoothly back inside recessed table wells)'],
      ['Single · Frequency','How often do teams rotate inside these shared Floor 2–8 rooms?', ['Hourly continuously throughout workweek days','Strictly once each morning','Only Tuesdays and Thursdays','Monthly for executive board reviews'], 0,'ตอบ Hourly continuously throughout workweek days'],
    ]),

    p7(22,'m22-s9', [
      doc('article','Small Downtown Printers Turn Coffee Shop Chaff Waste Cleanly Into Luxury Gift Cards', [['By','Tomás Alvarez'], ['Journal','Circular Design Monthly']],
        [
          'Commercial specialty coffee roasteries blow away crisp papery golden silverskin husks off roasting beans nightly inside cyclone metal drums—routinely bagging tons of lightweight dry brown coffee chaff straight into municipal compost transfer bins simply because fine flakes scatter clumsily across industrial floors. [1] At the same time, sustainable greeting-card publishers seek distinctive textured cardstock alternatives moving away from bright bleach virgin wood fiber.',
          'Paper craft innovator BeanPulp paired with six downtown Portland espresso roasters this spring testing twenty-percent roasted coffee husk pulp blended smoothly alongside unbleached cotton linter scrap inside century-old Hollander beater vats. [2] Pressing slurry smoothly onto felt wool rollers yields tactile warm speckled oatmeal paper carrying subtle organic cocoa-fleck textures free from synthetic dyes or harsh whitening bleaches.',
          '"Boutique tea houses and museum gift counters snatched up our first fifty thousand espresso-chaff thank-you stationery boxes almost instantaneously," shares press founder Nadia Kim. [3] Recycling dry local roaster husks right across river bridges saved forty tons of commercial pine pulp while slitting coffee roaster waste disposal pickups sharply in half.',
          'Print studios across Seattle and Vancouver already contracted BeanPulp bulk reams neatly preparing autumn sustainable hotel stationery lines. [4]',
        ]),
    ], [
      ['Single · Problem','What waste material do specialty coffee roasteries normally discard in high volumes nightly?', ['Dry flaky golden coffee silverskin husks blown off beans during roasting','Burned cardboard shipping pallet wraps','Soaked espresso portafilter sludge pucks','Broken stainless steel cyclone drums'], 0,'ตอบ Dry flaky golden coffee silverskin husks... (blow away papery golden silverskin husks / chaff straight into compost bins)'],
      ['Single · Aesthetic Feature','What distinctive visual trait characterizes finished BeanPulp greeting cards without extra chemical dyes?', ['Warm tactile natural oatmeal speckled textures dotted with cocoa-like husk flecks','Bright glossy neon white coated surfaces','Perfumed strong dark espresso scents lasting years','Metallic silver embossed rims'], 0,'ตอบ Warm tactile natural oatmeal speckled textures... (tactile warm speckled oatmeal paper carrying subtle organic flecks free from synthetic dyes)'],
      ['Single · Benefit','What dual environmental upside did Portland espresso roasters gain from partnering alongside BeanPulp?', ['Cut truck disposal hauls in half while replacing forty tons of pine tree pulp','Doubled coffee roast prices inside museum shops','Eliminated hotel guest stationery deliveries','Cleared river bridge traffic congestion completely'], 0,'ตอบ Cut truck disposal hauls in half while replacing pine tree pulp'],
      ['Single · Vocab','The phrasing "snatched up" in paragraph 3 implies buyers ___ the stationery.', ['eagerly purchased stock very fast','critiqued rough speckled paper textures','delayed museum holiday reorders','disposed of excess unsold boxes'], 0,'ตอบ eagerly purchased stock very fast (รีบเหมาซื้อหมดเกลี้ยงอย่างรวดเร็ว!)'],
      ['Single · Insertion','In which position [1], [2], [3], or [4] does the following sentence best fit? "Fountain pen ink dries crisply along matte fibers smoothly without feathering."', ['[2]','[1]','[3]','[4]'], 0,'ตอบ [2] (ต่อจากประโยคการรีดแผ่นกระดาษผสมเยื่อคอตตอนได้ผิวสัมผัสพิเศษ -> ขยายคุณสมบัติการเขียนหมึกจริงที่ไม่ซึมเลอะก่อนเล่าเสียงตอบรับตลาด)'],
    ]),

    p7(22,'m22-d1', [
      doc('webpage','Pacific Language Academy — Corporate Evening Conversation Terms', [['Schedule','8-Week Spring Sessions · Meets Twice Weekly (Mon/Wed OR Tue/Thu)']],
        [
          tbl(
            ['Format Option','Group Cap','Total Class Hours','Tuition / Student','Digital Textbook PDF Included?'],
            [
              ['Small Group Workshop','Max 6 learners','24 hrs (1.5 hr × 16 classes)','$420','Yes ($0)'],
              ['Semi-Private Pair','2 learners strictly','24 hrs','$680 / ea','Yes ($0)'],
              ['Solo Executive Tutor','1-on-1 custom','20 hrs flexible schedule','$1,350','Yes + Printed Workbook'],
            ]),
          'Register 3+ colleagues from identical companies onto ANY Small Group cohort together for -$40 corporate referral discount per colleague!',
        ]),
      doc('email','E-mail Message',
        [['To','admissions@pacificlanguage.edu'], ['From','Martin Ortiz (ClearView Shipping · HR)'], ['Date','March 18'], ['Subject','Spring Corporate Spanish Group — 4 Employees']],
        [
          'Hi Admissions Coordinator,',
          'Enrolling FOUR international customs coordinators from ClearView Shipping into your Small Group Business Spanish cohort starting next month! Because our freight warehouse schedules mandatory all-staff safety huddles Tuesdays at 5:30 P.M., ALL FOUR colleagues MUST join your Monday/Wednesday evening schedule rather than Tue/Thu.',
          'Checking billing totals ahead of corporate VISA checkout: enrolling 4 colleagues simultaneously inside Small Group Workshop grants -$40 corporate discount per person ($380 each -> $1,520 total!) right?',
          'Warm regards,\nMartin Ortiz',
        ]),
    ], [
      ['Double · Detail','Why does ClearView Shipping mandate its employees join Monday/Wednesday evenings rather than Tue/Thu?', ['Weekly Tuesday afternoon safety huddles overlap with Tue/Thu evening classes','Printed textbooks ship strictly Mondays','Small Group Workshops suspend classes every Thursday','Cargo freight docks shut Mondays'], 0,'ตอบ Weekly Tuesday afternoon safety huddles overlap...'],
      ['Double · Math','Verify total tuition savings earned by registering 4 employees via the corporate referral deal instead of individual $420 tuitions:', ['$160 total savings ($40 × 4 colleagues -> paying $1,520 instead of $1,680)','$40 total savings','$260 savings','$120 savings'], 0,'ตอบ $160 total savings ($40 × 4 คน = ประหยัด $160 จ่ายจริง $1,520 แทน $1,680!)'],
      ['Double · Detail','Under Small Group Workshop rules, how many MORE outside learners might still join ClearView’s 4-person Monday/Wednesday class before hitting class caps?', ['Up to two more learners (max cap 6)','Zero seats left','Four more learners','One more pair'], 0,'ตอบ Up to two more learners (Small Group max 6 - 4 คนของ ClearView = ว่างอีก 2 ที่!)'],
      ['Double · Detail','Which format tier provides BOTH flexible scheduling AND a physical printed workbook?', ['Solo Executive Tutor','Semi-Private Pair','Small Group Workshop','None supply physical printed workbooks'], 0,'ตอบ Solo Executive Tutor (Yes + Printed Workbook)'],
      ['Double · Detail','How many total instructional classes make up the 8-week Small Group schedule?', ['Sixteen classes (twice weekly across eight weeks)','Eight classes','Twenty-four classes','Ten classes'], 0,'ตอบ Sixteen classes (1.5 hr × 16 classes)'],
    ]),

    p7(22,'m22-d2', [
      doc('memo','Harbor Hospital Medical Center — Visitor Masking & Outpatient Gift Delivery Rules', [['Issued','Infection Control Desk']],
        [
          lst([
            'General public visitor lobbies operate mask-optional—EXCEPT Oncology Wing Floor 5 and Newborn ICU Floor 6, where crisp surgical blue masks remain strictly mandatory at nurses’ entry desks!',
            'Courier flower bouquets and latex party balloons MAY NOT enter Respiratory Wards Floor 4 OR ICU Floor 6 (real cut blooms carry damp soil microbes while latex triggers severe respiratory allergies—bright paper origami crafts or fruit gift baskets deliver smoothly via Lobby Desk 1!).',
          ]),
        ]),
      doc('email','E-mail Message',
        [['To','info@harborhospital.org'], ['From','Hannah Diaz'], ['Date','October 22'], ['Subject','Visiting Grandfather in Room 512 + Delivering Sunflowers']],
        [
          'Hello Visitor Help Desk,',
          'Stopping in smoothly tomorrow afternoon around 2:00 P.M. visiting my grandfather recovering inside Room 512 (Oncology Floor 5!). Just read through floor posting rules carefully beforehand so nobody causes hiccups at Desk 1:',
          'Since Floor 5 sits inside Oncology Ward, I already understand picking up a free surgical mask right outside Floor 5 nurses’ stations is required! Good thing checking gifts too—I had ordered bright mixed daisies & helium latex balloons! Does oncology Room 512 permit fresh flower vases since restriction lists strictly named Floor 4 Respiratory & Floor 6 Newborn ICU, OR should I swap flowers safely onto cheerful sealed seasonal citrus fruit baskets anyway?',
          'Thank you!\nHannah Diaz',
        ]),
    ], [
      ['Double · Synthesis','Based strictly on the hospital policy bullets, what MUST Hannah Diaz wear when visiting Room 512?', ['A clean surgical blue mask collected at Floor 5 nursing entry stations','Cotton gloves and sterilized coats','Strict floor-optional zero masks needed','Origami guest tags'], 0,'ตอบ A clean surgical blue mask collected at Floor 5... (Room 512 อยู่ Floor 5 Oncology Wing ที่บังคับสวมหน้ากากอนามัยสีฟ้า)'],
      ['Double · Synthesis','According strictly to written Infection Control guidelines, which wards explicitly forbid flower bouquets & latex balloons?', ['Respiratory Floor 4 and Newborn ICU Floor 6 ONLY (though Hannah generously considers swapping to citrus fruit!)','Oncology Wing Floor 5 exclusively','Every single floor inside Harbor Hospital','Main Lobby Desk 1 waiting zones'], 0,'ตอบ Respiratory Floor 4 and Newborn ICU Floor 6 ONLY (กฎระบุชัดเฉพาะ Floor 4 และ Floor 6)'],
      ['Double · Detail','Why does the hospital prohibit latex balloons and wet cut bouquets inside ICU and Respiratory units?', ['Floral damp microbes AND rubber latex particles pose infection or allergy dangers to sensitive lungs','Elevator doorways crush giant floating balloon bouquets','Nursing desks lack extra water vase pitchers','Fruit baskets keep hospital rooms humming silently'], 0,'ตอบ Floral damp microbes AND rubber latex pose risks...'],
      ['Double · Detail','What recommended gift options clear ALL restricted ICU or Respiratory floors safely?', ['Paper origami displays or sealed fruit baskets delivered via Lobby Desk 1','Dry rose petals and vinyl foil pillows','Outdoor pine plants in soil pots','Latex balloons filled safely indoors'], 0,'ตอบ Paper origami displays or sealed fruit baskets'],
      ['Double · Detail','When is Hannah Diaz planning to arrive tomorrow afternoon?', ['At 2:00 P.M.','At 5:12 P.M.','At 10:00 A.M.','At 4:00 P.M.'], 0,'ตอบ At 2:00 P.M. (ข้อความและอีเมลระบุว่า Hannah จะเดินทางมาเยี่ยมตอนบ่ายสองโมง (2:00 P.M.))'],
    ]),

    p7(22,'m22-t1', [
      doc('ad','ProTech Ergonomics — Dual Monitor Arms & Desk Cable Kits', [['Promo','Bulk Office Upgrade Deals']],
        [
          tbl(
            ['Item','Weight Support / Arm','VESA Mount','1–9 Units','10+ Units'],
            [
              ['GasSpring Single Arm M1','2–9 kg (Up to 32")','75×75 / 100×100','$72','$58'],
              ['GasSpring Dual Pro M2','2–9 kg × 2 screens','75×75 / 100×100','$128','$102'],
              ['Under-Desk Steel Tray C1','Holds 2 power strips','Screws under lip','$32','$24'],
            ]),
          'Free Courier Parcel Delivery orders $500+! (Otherwise $35 commercial freight fee).',
        ]),
      doc('memo','IT Workstation Refresh Request — ClearFinance Team', [['From','IT Support Lead Sam Park'], ['Date','September 10']],
        [
          'Twelve new financial risk analysts join Floor 4 next Monday, each running TWO side-by-side 27-inch monitors (5.5 kg per screen!). Rather than assembling 24 clumsy single arms across desk edges, buying TWELVE GasSpring Dual Pro M2 arms keeps desk clamps ultra clean AND unlocks 10+ bulk $102 pricing! Also grab TWELVE Under-Desk Steel Trays C1 ($24 bulk!) so dangling surge cords vanish neatly completely out!',
        ]),
      doc('invoice','ProTech Order Summary #PT-610',
        [['Buyer','ClearFinance Corp.'], ['Date','September 10']],
        [
          '12 × GasSpring Dual Pro M2 Arms ($102 bulk = $1,224) + 12 × Under-Desk Steel Trays ($24 bulk = $288).',
          'Commercial Delivery Courier: $0.00 (Free Over $500). Total Paid: $1,512.00.',
        ]),
    ], [
      ['Triple · Math','Calculate exact TOTAL dollar savings ClearFinance captured across BOTH items thanks to hitting 10+ Bulk Pricing instead of 1–9 unit rates:', ['$408 saved altogether','$312 saved','$96 saved','$500 saved'], 0,'ตอบ $408 saved altogether (Dual Pro ประหยัด $128-$102 = $26 × 12 = $312 + Steel Tray ประหยัด $32-$24 = $8 × 12 = $96 -> รวมประหยัด $408!)'],
      ['Triple · Synthesis','Confirm whether ClearFinance’s 27-inch monitors (5.5 kg each!) fit safely within GasSpring Dual Pro M2 load specifications:', ['Yes—2–9 kg per arm easily supports 5.5 kg screens','No—each Dual Pro arm shares 9 kg total across BOTH monitors','Only if screens weigh strictly under 5.0 kg','Only VESA 100×100 single arms match 5.5 kg displays'], 0,'ตอบ Yes—2–9 kg per arm supports 5.5 kg screens (2–9 kg × 2 screens = ข้างละ 2–9 kg รับจอละ 5.5 kg ได้สบาย!)'],
      ['Triple · Synthesis','Compare total spend: did buying 12 Dual Pro M2 arms ($1,224) save money OVER buying 24 Single Arm M1 units at 10+ bulk pricing (24 × $58)?', ['Yes—$1,224 costs $168 LESS than 24 single arms ($1,392) while clamping tidier!','No—24 single arms ($1,392) cost less than $1,224','Both cost exact identical sums','Single arms fail under 27-inch screens'], 0,'ตอบ Yes—$1,224 costs $168 LESS than 24 single arms ($1,392 - $1,224 = ประหยัดเพิ่มอีก $168 แถมโต๊ะโล่งกว่าด้วย!)'],
      ['Triple · Detail','Why was ClearFinance charged $0.00 for courier parcel shipping?', ['Invoice subtotal ($1,512) cleared the $500+ free delivery tier','12+ Steel Trays ship free independently','Floor 4 corporate parks waive delivery costs','September 10 promoted zero-shipping discounts'], 0,'ตอบ Invoice subtotal ($1,512) cleared $500+ minimum'],
      ['Triple · Detail','Why did Sam Park add Under-Desk Steel Trays C1 onto the order?', ['Hide bulky dangling surge strips beneath tabletops','Clamp extra 27-inch monitors onto trays','Double warranty periods for dual arms','Protect glass desk finishes'], 0,'ตอบ Hide bulky dangling surge strips beneath tabletops'],
    ]),

    p7(22,'m22-t2', [
      doc('article','Pacific Green Building Co-op Opens Free Energy Tool Lending Desk', [['Branch','Westside Community Tool Hub']],
        [
          'Homeowners drafting winter insulation weatherproofing plans often abandon energy audits rather than spending $400 buying single-weekend infrared heat-leak wall cameras! Beginning April 1, utility patrons presenting municipal water bills borrow pro diagnostic meters FREE for crisp 72-hour weekend spans!',
        ]),
      doc('table','Energy Audit Lending Locker Stock — Westside Tool Hub (Apr 12)', null, [
        tbl(
          ['Tool Item','Deposit Hold (Refunded On Return)','Loan Window','Units Available Today','Reserved Waitlist?'],
          [
            ['FLIR Phone Thermal Camera','$80 Credit Card Hold','72 Hours','3 Open Units','No wait'],
            ['Kilowatt Plug Power Meter','$20 Credit Card Hold','7 Days','5 Open Units','No wait'],
            ['Blower-Door Window Leak Fan','$150 Credit Card Hold','48 Hours','0 (All Out)','3 Ahead (Next Open Apr 18)'],
          ]),
      ]),
      doc('email','E-mail Message',
        [['To','tools@pacificgreenhub.org'], ['From','Rosa Diaz'], ['Date','Friday, April 12 · 9:15 A.M.'], ['Subject','Weekend Insulation Leak Check Loan Request']],
        [
          'Hello Tool Desk!',
          'Brought yesterday’s municipal water bill in my commuter bag today hoping to spot freezing air drafts whistling tightly behind older living room wooden baseboards this weekend calmly! Seeing Blower-Door Fans sit out on 3-person waitlists until April 18 anyway, checking out ONE FLIR Phone Thermal Camera + ONE Kilowatt Plug Power Meter together tonight smoothly checks cold wall gaps AND old basement chest-freezer wattage simultaneously!',
          'Confirming my credit card places ONLY $100 refundable hold ($0 rental charges!) upon sliding onto Desk B at 5:30 P.M. tonight—plus returning the thermal camera strictly Monday April 15 BEFORE 5:30 P.M. keeps zero late deductions right?',
          'Cheers,\nRosa Diaz',
        ]),
    ], [
      ['Triple · Synthesis','Calculate BOTH return deadlines Rosa MUST keep track of separately for her TWO checked-out items if checked out Friday April 12 at 5:30 P.M.:', ['Thermal Camera due Monday Apr 15 (72 hrs); Plug Power Meter due Friday Apr 19 (7 days)','Both return strictly Monday April 15 before noon','Thermal Camera due Sunday Apr 14; Fan Apr 18','Both keep freely until April 19'], 0,'ตอบ Thermal Camera due Monday Apr 15 (72 ชม.) AND Plug Power Meter due Friday Apr 19 (7 วัน)!'],
      ['Triple · Math','Verify Rosa Diaz’s refundable credit card security hold total ($100) for checking out BOTH tools together:', ['$80 Thermal Camera hold + $20 Plug Power Meter hold = $100 refunded upon safe return','$150 Blower Fan hold minus $50 credit','$100 per week flat energy audit rental charge','$80 total hold waiving power meters'], 0,'ตอบ $80 Thermal hold + $20 Power Meter hold = $100 refunded upon safe return'],
      ['Triple · Detail','Why does Rosa skip requesting the Blower-Door Window Leak Fan today?', ['Zero units remain in stock until April 18 with three people waiting ahead','Blower-Door fans cost $150 non-refundable weekend fees','Older wooden basements break fan seals','Her water bill lacks fan eligibility'], 0,'ตอบ Zero units remain in stock until April 18 with three people waiting...'],
      ['Triple · Detail','What verification document does Rosa pack neatly inside her commuter bag to prove borrowing eligibility?', ['Yesterday’s municipal water utility bill','Three hardware store freezer receipts','Contractor thermal safety licenses','Smartphone infrared license passes'], 0,'ตอบ Yesterday’s municipal water utility bill'],
      ['Triple · Detail','How does Rosa plan to use the Kilowatt Plug Power Meter this weekend?', ['Measure electricity wattage consumed by an old basement chest freezer','Detect cold air whistling behind living room walls','Measure municipal water heater temperatures','Check Desk B waitlists'], 0,'ตอบ Measure electricity wattage consumed by an old basement chest freezer'],
    ]),

    p7(22,'m22-t3', [
      doc('notice','Oakridge Municipal Tennis Academy — Youth Summer Camp Cancellation Policy', [['Office','Parks Recreation Desk']],
        [
          lst([
            'Weekly youth morning tennis clinics ($185 / 5-day week) lock registrations smoothly 14+ calendar days BEFORE camp Monday.',
            'Cancel requests emailed 14+ days PRIOR to Week Start refund 100% OR switch free to open alternate weeks!',
            'Late cancellations received between 4–13 days PRIOR forfeit a $45 spot hold fee (refunding $140 OR switching alternate weeks for just a $15 schedule shift fee!). Less than 72 hours yields $0 refund unless medical clinic notes certify illness.',
          ]),
        ]),
      doc('invoice','Camp Registration Confirmation #OKC-3302',
        [['Parent','Kevin Patel · Camper: Leo Patel (Age 11)'], ['Registered Week','Week 3: Monday, July 15 – Friday, July 19 · Total Paid: $185.00']],
        [
          'Class: Intermediate Youth Tennis (9:00 A.M.–Noon daily) · Registered Cleanly April 10.',
        ]),
      doc('email','E-mail Message',
        [['To','parks@oakridgerec.org'], ['From','Kevin Patel'], ['Date','Friday, July 5'], ['Subject','Switching Week 3 Registration #OKC-3302 -> Week 5 (July 29)']],
        [
          'Hello Parks Recreation Team,',
          'An unexpected grandparents’ reunion trip just came up spanning July 15–19! Looking at calendar countdowns right today Friday, July 5 ahead of Monday, July 15 Week 3 start (10 calendar days ahead!), we sit inside that middle 4–13 day change window rather than full free 14-day cancellation!',
          'Rather than absorbing a $45 cancellation loss, could we smoothly shift Leo into Week 5 (July 29 – Aug 2 where spaces show open!) paying ONLY the smaller $15 schedule transfer charge?',
          'Thanks so much!\nKevin Patel',
        ]),
    ], [
      ['Triple · Synthesis','Confirm how much EXTRA net fee Kevin Patel will owe to shift Leo from Week 3 onto Week 5 on July 5:', ['$15 schedule transfer fee (saving $30 vs canceling outright!)','$45 spot forfeiture charge','$0 (Free transfer since 10 days beats 72 hrs)','$185 duplicate tuition'], 0,'ตอบ $15 schedule transfer fee (ส่ง 5 ก.ค. ก่อนเริ่มแคมป์ 15 ก.ค. = ล่วงหน้า 10 วัน -> อยู่ในช่วง 4–13 วัน ย้ายสัปดาห์เสียแค่ $15 แทนที่จะยกเลิกโดนหัก $45!)'],
      ['Triple · Math','Verify Kevin Patel’s EXACT refund amount IF he had opted instead on July 5 to CANCEL Week 3 completely WITHOUT moving into Week 5:', ['$140 refund ($185 paid minus $45 spot hold fee)','$185 full refund','$170 refund','$0 refund'], 0,'ตอบ $140 refund ($185 จ่ายไว้ - $45 ค่าธรรมเนียมยกเลิกในช่วง 4–13 วัน = คืน $140!)'],
      ['Triple · Detail','Why does Kevin fall outside the completely free 100% refund/transfer tier on July 5?', ['Ten days prior sits shorter than the mandatory 14+ calendar day advance cutoff','Camp #OKC-3302 prohibits transfers after June 30','Intermediate Tennis clinics exclude Week 5','Medical notes apply strictly on Friday shifts'], 0,'ตอบ Ten days prior sits shorter than the mandatory 14+ day cutoff...'],
      ['Triple · Inference','When WOULD Parks Recreation waive fees completely or require a physician’s certificate?', ['For full refunds canceled <72 hours before camp Monday due strictly to illness','Whenever grandparents schedule summer family trips','Strictly for children aged 11','When paying with municipal credit accounts'], 0,'ตอบ For full refunds canceled <72 hours due to illness... (Less than 72 hours yields $0 refund unless medical clinic notes certify illness)'],
      ['Triple · Detail','What daily schedule hours run during Youth Summer Tennis clinics?', ['Morning sessions from 9:00 A.M. to Noon','Afternoons 1:00–4:00 P.M.','Full-day 8:00 A.M.–5:00 P.M.','Strictly weekends'], 0,'ตอบ Morning sessions from 9:00 A.M. to Noon'],
    ]),

    // ==================== SET 23 ====================
    p7(23, 'm23-s1', [
      doc('chat', 'Text Message Chain · PetalCraft Florist', null, [
        chat([
          ['Nadia Lin', '08:14 A.M.', 'Dan, did you finish loading the white hydrangea arches into Cooler Van #3?'],
          ['Dan Brooks', '08:17 A.M.', 'Just wrapped the ribbons now. Van #2’s alternator warning light came on, so I transferred all fourteen buckets into Van #4 instead.'],
          ['Nadia Lin', '08:20 A.M.', 'Smart move. Also, Glasshouse Events just texted a new delivery gate code: press #4820* at the South Elm alley keypad instead of the main lobby doors.'],
          ['Dan Brooks', '08:23 A.M.', 'Got it (#4820* at South Elm). Pulling out onto Fifth Avenue right now—traffic looks clear until the bridge.'],
        ]),
      ]),
    ], [
      ['Single · Detail', 'Why did Dan switch from Cooler Van #2 to Van #4?', ['A warning indicator appeared for the alternator', 'Van #2 lacked space for fourteen flower buckets', 'Nadia ordered Van #2 reserved for another client', 'The refrigeration unit inside Van #2 failed overnight'], 0, 'ตอบ A warning indicator appeared for the alternator (ไฟเตือนไดชาร์จบนรถตู้ #2 ติดขึ้นมาเลยย้ายของไปรถ #4)'],
      ['Single · Detail', 'Where should Dan enter upon reaching Glasshouse Events?', ['At the South Elm alley gate using code #4820*', 'Through the main customer lobby entrance', 'At the Fifth Avenue loading platform', 'Beside the north courtyard pergola'], 0, 'ตอบ At the South Elm alley gate using code #4820* (มีรหัสประตูส่งของใหม่ทางซอย South Elm คือกด #4820*)'],
    ]),

    p7(23, 'm23-s2', [
      doc('memo', 'INTERNAL FACILITY NOTICE',
        [['To', 'All Campus Staff'], ['From', 'Parking & Fleet Operations'], ['Subject', 'Level P2 EV Charging Stalls (B1–B8)']],
        [
          'Following installation of eight dual-port Level 2 chargers in Parking Level P2 (stalls B1 through B8), employees may reserve a four-hour charging window per workday by tapping their company security badge on the pedestal reader.',
          'Once a vehicle’s battery reaches 100% or the four-hour limit expires, drivers receive an automated mobile alert and must vacate the bay within 20 minutes. Remaining plugged in past that grace window triggers a $15 idle overstay fee deducted automatically from monthly payroll.',
        ]),
    ], [
      ['Single · Detail', 'How do employees activate a Level P2 electric vehicle charger?', ['By scanning their workplace security badge at the charger', 'By reserving a slot through the reception front desk', 'By inserting a prepaid garage token into stall B1', 'By registering their license plate with Fleet Operations weekly'], 0, 'ตอบ By scanning their workplace security badge at the charger (แตะบัตรพนักงานที่แท่นชาร์จก่อนเสียบสาย)'],
      ['Single · Consequence', 'What occurs if a driver leaves a car connected 30 minutes after receiving an expiration alert?', ['A $15 overstay penalty is taken from payroll', 'The vehicle security badge is deactivated for one week', 'Fleet staff move the car to a visitor street lot', 'Electrical power shuts off permanently for that stall'], 0, 'ตอบ A $15 overstay penalty is taken from payroll (เลยช่วงผ่อนผัน 20 นาทีจะถูกหักค่าปรับจอดแช่ $15 จากเงินเดือน)'],
    ]),

    p7(23, 'm23-s3', [
      doc('review', 'HarborTool Depot — Online Customer Review & Owner Reply', null, [
        '★ ★ ★ ★ ★ — Reviewed by Craig Dawson (Wet Masonry Tile Saw Rental)',
        'I needed to trim twenty porcelain foyer tiles Saturday morning and rented the 10-inch ProWet Saw at HarborTool Depot. Staff pre-filled the recirculating water tray and walked me through leveling the sliding table. When I returned the unit Sunday afternoon, they honored the single-day 24-hour rate across the full weekend because the shop closes Sundays—huge help! Just note that heavy diamond blade wear over 2 mm adds an extra $18 fee.',
        'Owner Response (Hannah Ortiz, Store Manager): Glad the weekend policy helped finish your foyer on time, Craig! Our standard Saturday morning pickups aren’t due back until 8:00 A.M. Monday without an additional day’s rental.',
      ]),
    ], [
      ['Single · Detail', 'Why did Craig pay for only one rental day despite keeping the saw from Saturday morning until Sunday?', ['The store applies a single-day charge across weekends because it is closed Sunday', 'He brought his own diamond cutting blade from home', 'Store manager Hannah Ortiz offered a first-time coupon', 'Porcelain tile projects qualify for a nonprofit discount'], 0, 'ตอบ The store applies a single-day charge across weekends because it is closed Sunday (ร้านปิดวันอาทิตย์ เลยคิดค่าเช่าวันเสาร์เช้าถึงจันทร์เช้าเป็นเรต 1 วัน)'],
      ['Single · Detail', 'What extra charge can apply to wet tile saw rentals?', ['An $18 fee if blade wear exceeds 2 millimeters', 'A $15 cleaning deposit for unemptied water trays', 'A surcharge for Saturday afternoon pickups', 'A replacement cost for damaged sliding tables'], 0, 'ตอบ An $18 fee if blade wear exceeds 2 millimeters (ถ้าใบตัดเพชรสึกเกิน 2 มม. จะคิดเพิ่ม $18)'],
      ['Single · Detail', 'According to Hannah Ortiz, by what time must Saturday weekend pickups normally be returned?', ['Monday at 8:00 A.M.', 'Saturday at 6:00 P.M.', 'Sunday at 12:00 P.M.', 'Tuesday at 9:00 A.M.'], 0, 'ตอบ Monday at 8:00 A.M. (Hannah ระบุว่าต้องคืนไม่เกินวันจันทร์เวลา 8:00 น.)'],
    ]),

    p7(23, 'm23-s4', [
      doc('memo', 'IT SECURITY ADVISORY',
        [['To', 'Corporate Staff'], ['From', 'Information Security Team'], ['Subject', 'Mandatory Browser Extension Sweep — This Friday']],
        [
          'During routine network logging this week, IT detected several unauthorized browser extensions—primarily free third-party PDF converters and coupon injectors—attempting to transmit clipboard data outside the company domain.',
          'At 7:00 P.M. this Friday, automated policy enforcement will disable all browser add-ons NOT listed on the pre-approved Whitelist (currently PasswordVault Pro, GrammarCheck Enterprise, and DevInspector). Employees whose daily duties depend on a specialized accessibility or design plug-in may submit an exemption ticket on Intranet Portal -> IT Helpdesk by Thursday noon.',
        ]),
    ], [
      ['Single · Reason', 'Why is the Information Security Team blocking unapproved browser extensions?', ['Several unauthorized tools attempted to send clipboard contents externally', 'The extensions caused high memory usage on conference room laptops', 'Vendor licensing agreements expired at the end of last month', 'Staff members installed competing password managers simultaneously'], 0, 'ตอบ Several unauthorized tools attempted to send clipboard contents externally (พบส่วนขยายส่งข้อมูล clipboard ออกนอกเครือข่ายบริษัท)'],
      ['Single · Detail', 'Which tool will remain active automatically after Friday at 7:00 P.M.?', ['GrammarCheck Enterprise', 'FreePDF QuickConvert', 'CouponHunter Bar', 'ClipShare Utility'], 0, 'ตอบ GrammarCheck Enterprise (อยู่ในรายชื่อ Whitelist ที่อนุญาตล่วงหน้าพร้อม PasswordVault Pro และ DevInspector)'],
      ['Single · Detail', 'How can an employee request to keep a specialized design extension?', ['By filing an IT Helpdesk exemption ticket by Thursday at noon', 'By emailing a copy of the software receipt to Accounting', 'By disabling automatic updates in browser settings', 'By contacting the external plug-in vendor for verification'], 0, 'ตอบ By filing an IT Helpdesk exemption ticket by Thursday at noon (ยื่นคำขอยกเว้นผ่าน Intranet Portal -> IT Helpdesk ก่อนเที่ยงวันพฤหัสฯ)'],
    ]),

    p7(23, 'm23-s5', [
      doc('ad', 'CAREER OPPORTUNITY · OceanPulse Instruments', null, [
        'Position: Marine Acoustics Calibration Technician (Full-Time — Astoria Bayfront Facility)',
        'OceanPulse Instruments manufactures deep-sea sonar transducers used on commercial research vessels. We are seeking a detail-oriented Calibration Technician to inspect waterproof cables, verify frequency output inside our 40-foot freshwater test tank, and log sensor tolerance sheets.',
        'Workload split: roughly 80% inside our climate-controlled bayfront lab and 20% aboard harbor test launches on Astoria Bay (life jackets and foul-weather gear provided).',
        'Required: Two-year technical diploma in electronics or marine engineering; familiarity with oscilloscopes and digital multimeters. Forklift certification is helpful for moving crate pallets but NOT required upon hire (paid training arranged during Month 1). Apply by uploading your resume and a sample lab calibration report at oceanpulse.io/careers.',
      ]),
    ], [
      ['Single · Detail', 'Where will the technician spend the majority of working hours?', ['Inside the indoor bayfront calibration laboratory', 'Aboard ocean research vessels far offshore', 'Inside shipping warehouses operating forklifts', 'At client marinas across neighboring states'], 0, 'ตอบ Inside the indoor bayfront calibration laboratory (สัดส่วน 80% ทำงานในห้องแล็บควบคุมอุณหภูมิริมอ่าว)'],
      ['Single · Inference', 'What is true about forklift certification for applicants?', ['Candidates without it may still be hired and trained afterward', 'It must be completed prior to attending the first interview', 'Only maritime captains are required to hold that credential', 'Certified forklift operators receive a 20% higher starting bonus'], 0, 'ตอบ Candidates without it may still be hired and trained afterward (ไม่บังคับตอนสมัคร เพราะบริษัทจัดอบรมให้ในเดือนแรก)'],
      ['Single · Detail', 'In addition to a resume, what must applicants submit on oceanpulse.io/careers?', ['An example laboratory calibration report', 'Reference letters from two previous vessel captains', 'Proof of commercial boating licensure', 'A scanned copy of their marine engineering transcript'], 0, 'ตอบ An example laboratory calibration report (ต้องแนบตัวอย่างรายงานการสอบเทียบแล็บไปด้วย)'],
    ]),

    p7(23, 'm23-s6', [
      doc('notice', 'VOLUNTARY SAFETY NOTICE — AromaHome Milk Frother (Model MF-22)', null, [
        'In cooperation with national consumer product regulators, AromaHome Appliances is issuing a replacement notice limited strictly to Model MF-22 Stainless Frothers carrying production batch codes L2408 through L2411 stamped in black ink underneath the power base ring.',
        'Issue: Internal moisture around the magnetic whisk spindle may overheat the motor base during repeated high-heat cycles.',
        'Remedy: Register your unit serial number at aromahome.com/mf22 to receive a redesigned waterproof whisk-motor lid shipped free within 5 business days—no original store receipt required. Customers preferring a full cash refund instead of the upgraded lid may return intact units directly to the original retail store with proof of purchase.',
      ]),
    ], [
      ['Single · Detail', 'How can an owner check whether their Model MF-22 frother falls under this safety notice?', ['By checking the batch code printed under the power base ring', 'By weighing the detachable stainless steel pitcher lid', 'By scanning the store barcode printed on the instruction manual', 'By testing whether the whisk spins during cold-foam settings'], 0, 'ตอบ By checking the batch code printed under the power base ring (ดูรหัสล็อต L2408–L2411 ที่ปั๊มใต้ฐานจ่ายไฟ)'],
      ['Single · Inference', 'When is a customer REQUIRED to provide an original sales receipt?', ['When requesting a full refund from the retail store', 'When registering online for a replacement waterproof lid', 'When checking whether batch L2409 is affected', 'When disposing of damaged magnetic whisk blades'], 0, 'ตอบ When requesting a full refund from the retail store (ขอเปลี่ยนฝาใหม่ทางเว็บไม่ต้องใช้ใบเสร็จ แต่ถ้าขอคืนเงินที่ร้านต้องมีหลักฐานการซื้อ)'],
      ['Single · Detail', 'What safety hazard prompted the notice?', ['Water seepage near the spindle can overheat the motor base', 'Glass milk pitchers may crack under rapid chilling', 'Detachable power cords contain frayed insulation', 'Magnetic lids occasionally unlock while pouring foam'], 0, 'ตอบ Water seepage near the spindle can overheat the motor base (ความชื้นรอบแกนปั่นอาจทำให้ฐานมอเตอร์ร้อนเกิน)'],
    ]),

    p7(23, 'm23-s7', [
      doc('article', 'Harbor Streetcar Rolls Out Optical Tap Gates Ahead of Summer Rush', null, [
        'BAYSIDE CHRONICLE — Commuters boarding the Pier 4 Streetcar line encountered sleek glass optical gates for the first time Monday morning as MetroTransit began phasing out open honor-system boarding along the busy waterfront corridor.',
        '[1] Sensors above each turnstile scan NFC transit cards, smartphone wallets, and paper QR day-passes in under half a second before swinging the clear acrylic barriers open. [2] Transit officials project the upgraded checkpoints will curb uncollected fares by roughly $420,000 annually while feeding real-time passenger counts to dispatchers.',
        'Recognizing that older riders and infrequent tourists may hesitate at unfamiliar readers, MetroTransit stationed green-vested Customer Ambassadors beside every ticket kiosk for the initial six weeks. [3] Senior citizens holding legacy magnetic-stripe passes can also continue tapping older sidewalk validators until October 31 without purchasing replacement cards. [4]',
      ]),
    ], [
      ['Single · Purpose', 'What is the main topic of the article?', ['New automated fare gates installed along a waterfront transit line', 'Budget cuts affecting summer weekend streetcar frequencies', 'Construction delays at the Pier 4 underground rail terminal', 'Rising ticket prices for smartphone transit wallet users'], 0, 'ตอบ New automated fare gates installed along a waterfront transit line (รถรางสายท่าเรือติดตั้งประตูกั้นสแกนบัตรอัตโนมัติแทนระบบเปิดโล่ง)'],
      ['Single · Detail', 'In addition to speeding entry, how do the optical gates assist MetroTransit dispatchers?', ['By supplying live passenger volume figures', 'By charging smartphone batteries near ticket kiosks', 'By issuing automatic refunds for late streetcars', 'By sorting tourist QR codes from commuter passes'], 0, 'ตอบ By supplying live passenger volume figures (ส่งข้อมูลจำนวนผู้โดยสารแบบเรียลไทม์ให้ศูนย์ควบคุม)'],
      ['Single · Detail', 'Until when may senior passengers keep using older magnetic-stripe cards?', ['October 31', 'Monday morning', 'For six weeks after purchase', 'All through December'], 0, 'ตอบ October 31 (ผู้สูงอายุใช้บัตรแถบแม่เหล็กเดิมกับเครื่องอ่านเดิมได้ถึง 31 ตุลาคม)'],
      ['Single · Insertion', 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n"These volunteers offer step-by-step demonstrations and hand out printed route maps upon request."', ['[1]', '[2]', '[3]', '[4]'], 2, 'ตอบ [3] (These volunteers อ้างถึง Customer Ambassadors ที่เพิ่งกล่าวถึงในประโยคก่อนหน้า [3] พอดี ก่อนที่จะเปลี่ยนเรื่องไปผู้สูงอายุในประโยคถัดไป)'],
    ]),

    p7(23, 'm23-s8', [
      doc('memo', 'EMPLOYEE RELOCATION STIPEND GUIDELINES — CedarPeak Financial',
        [['Section', '4.2 Moving & Housing Allowance'], ['Effective', 'January 1']],
        [
          '[1] Full-time employees asked to transfer to a regional office located more than 80 kilometers from their current residence qualify for CedarPeak’s two-part relocation allowance. [2] Rather than archiving moving van fuel receipts, relocating staff receive a fixed $2,500 lump-sum transit payment on their first paycheck following assignment confirmation.',
          'In addition, HR reimburses temporary furnished apartment rent for up to 45 days and covers actual lease-break fees billed by a prior landlord when documented by an official property management invoice. [3] Refundable residential security deposits and private pet-boarding charges remain the employee’s responsibility. [4] Claims must be uploaded to WorkDay Expense within 60 days of the official transfer date.',
        ]),
    ], [
      ['Single · Detail', 'Who qualifies for CedarPeak’s two-part relocation allowance?', ['Full-time staff moving to an office over 80 kilometers away', 'Part-time contractors changing teams within the same building', 'Remote employees relocating for personal preference', 'New interns renting apartments near corporate headquarters'], 0, 'ตอบ Full-time staff moving to an office over 80 kilometers away (พนักงานประจำที่ย้ายไปสาขาห่างจากเดิมเกิน 80 กม.)'],
      ['Single · Inference', 'What is true about the $2,500 moving transit payment?', ['Employees do not need to submit receipts to receive it', 'It is paid only after temporary housing leases end', 'Managers deduct fuel expenses from it before payday', 'It covers refundable landlord security deposits'], 0, 'ตอบ Employees do not need to submit receipts to receive it (ระบุว่าไม่ต้องเก็บใบเสร็จค่าน้ำมันรถย้ายของ รับเป็นเงินเหมาจ่าย $2,500 เลย)'],
      ['Single · NOT', 'Which expense is NOT reimbursed under Section 4.2?', ['Pet-boarding costs during relocation', 'Temporary furnished housing for 30 days', 'Verified lease-break charges from a former landlord', 'The flat $2,500 relocation transit allowance'], 0, 'ตอบ Pet-boarding costs during relocation (ค่าประกันความเสียหายห้องพักที่ขอคืนได้ และค่าฝากสัตว์เลี้ยงเบิกไม่ได้)'],
      ['Single · Insertion', 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n"A copy of the signed termination notice showing the exact penalty balance must accompany this claim."', ['[1]', '[2]', '[3]', '[4]'], 2, 'ตอบ [3] (อ้างถึง this claim และ exact penalty balance ของ lease-break fees ในประโยคก่อนหน้า [3] พอดี)'],
    ]),

    p7(23, 'm23-s9', [
      doc('chat', 'Team Messaging Channel — BoothPrep #ExpoWest', null, [
        chat([
          ['Maya Verma (Events)', '09:05 A.M.', 'Good morning team! Crate #3 with our espresso grinder display arrived safely at Hall B Booth 412, but Freight Control is still holding Crate #2 because the forklift weight sticker faded in the rain.'],
          ['Kenji Sato (Design)', '09:09 A.M.', 'I can print a fresh manifest sheet from the exhibitor kiosk near Gate C. More urgently, look at the overhead vinyl header banner—our printer spelled "Roastery" with two S’s ("Roassery")!'],
          ['Elena Cruz (Ops)', '09:12 A.M.', 'Checking with Cornerstone Sign Shop now—they are only three blocks away and have a spare laminated PVC panel they can heat-press over that typo by 1:30 P.M. for $95.'],
          ['Samir Patel (IT)', '09:16 A.M.', 'Meanwhile, our badge tablet connects to Wi-Fi fine, though the portable thermal printer refuses to pair over Bluetooth. Does anyone have a USB-C backup cable in their backpack?'],
          ['Maya Verma (Events)', '09:19 A.M.', 'Go ahead on the $95 PVC patch, Elena—Expo doors open at 4:00 P.M., and Kenji’s manifest will clear Crate #2 first. Samir, I packed two braided USB-C leads inside the red tool pouch under Counter A.'],
        ]),
      ]),
    ], [
      ['Single · Detail', 'Why is Freight Control delaying delivery of Crate #2?', ['Rain damaged the forklift weight label on the crate', 'The booth fee for Space 412 has not cleared yet', 'Exhibitor badges have not been printed at Gate C', 'The grinder inside Crate #2 exceeded Hall B height limits'], 0, 'ตอบ Rain damaged the forklift weight label on the crate (สติกเกอร์น้ำหนักรถยกเลือนจากฝน ทำให้ฝ่ายขนส่งกักลัง #2 ไว้)'],
      ['Single · Detail', 'How will Cornerstone Sign Shop fix the mistake on the vinyl header banner?', ['By heat-pressing a laminated patch over the misspelled word', 'By shipping an entirely new banner from another city overnight', 'By repainting the vinyl letters manually inside Hall B', 'By lowering the banner behind Counter A during opening night'], 0, 'ตอบ By heat-pressing a laminated patch over the misspelled word (อัดแผ่น PVC เคลือบทับคำที่สะกดผิดเสร็จภายในบ่ายโมงครึ่ง)'],
      ['Single · Inference', 'When will the expo doors open to attendees?', ['At 4:00 P.M.', 'At 9:05 A.M.', 'At 1:30 P.M.', 'The next morning'], 0, 'ตอบ At 4:00 P.M. (Maya ระบุว่าประตูงานเปิดตอน 16:00 น.)'],
      ['Single · Detail', 'Where can Samir find a spare cable for the thermal printer?', ['Inside a red pouch stored underneath Counter A', 'At the exhibitor kiosk near Gate C', 'Packed inside Crate #3 with the espresso grinder', 'At Cornerstone Sign Shop three blocks away'], 0, 'ตอบ Inside a red pouch stored underneath Counter A (Maya เก็บสาย USB-C สองเส้นไว้ในกระเป๋าเครื่องมือสีแดงใต้เคาน์เตอร์ A)'],
      ['Single · Intention', 'What does Maya indicate when she writes, "Go ahead on the $95 PVC patch, Elena"?', ['She approves paying $95 immediately because time before opening is tight', 'She expects Cornerstone Sign Shop to waive the repair charge later', 'She wants Elena to wait until Crate #2 reaches Booth 412', 'She prefers postponing booth assembly until tomorrow morning'], 0, 'ตอบ She approves paying $95 immediately because time before opening is tight (Maya อนุมัติให้ซ่อมด่วน $95 ทันทีเพราะงานจะเปิดเวลา 16:00 น.)'],
    ]),

    p7(23, 'm23-d1', [
      doc('ad', 'Grandview Terrace Hotel — Private Ballroom Packages', null, [
        tbl(
          ['Tier / Feature', 'Pearl Package (Up to 80 Guests)', 'Horizon Package (81–160 Guests)'],
          [
            ['Base Venue Rental', '$2,400 (5 Hours)', '$3,800 (5 Hours)'],
            ['Audio-Visual Tech', '$350 Optional Fee', 'Included Free ($0)'],
            ['Table Linens & Chairs', 'Ivory Polyester Included', 'Ivory or Navy Satin Included'],
            ['Mon–Thu Weekday Rate', '15% Off Base Rental', '15% Off Base Rental'],
          ]
        ),
        'All catering must be booked through Grandview Kitchen. Floral centerpieces are arranged independently by clients.',
      ]),
      doc('email', 'E-mail Inquiry',
        [['To', 'events@grandviewterrace.com'], ['From', 'Rachel Kim, Apex Logistics'], ['Subject', '20th Anniversary Dinner — Tuesday, October 14']],
        [
          'Dear Events Team,',
          'Apex Logistics is planning our 20th Anniversary Appreciation Dinner for 115 staff members on Tuesday evening, October 14 (6:00 P.M.–11:00 P.M.). We will play a 15-minute retrospective video and need full microphone and projector technician support.',
          'Please confirm our discounted base ballroom rate after weekday pricing applies, along with any extra technician charges. We have already contracted Maple Florist separately to deliver center vases at 4:30 P.M.',
          'Best regards,\nRachel Kim',
        ]),
    ], [
      ['Double · Synthesis', 'Which ballroom tier fits Apex Logistics’ guest count of 115 attendees?', ['Horizon Package', 'Pearl Package', 'Both tiers fit equally', 'Neither package allows 115 guests'], 0, 'ตอบ Horizon Package (115 คน อยู่ในช่วง 81–160 Guests ของ Horizon Package)'],
      ['Double · Math', 'What will Apex Logistics pay for base ballroom rental after the Mon–Thu discount?', ['$3,230', '$3,800', '$2,040', '$3,580'], 0, 'ตอบ $3,230 (วันอังคาร 14 ต.ค. ได้ส่วนลด Weekday 15% จากราคาปกติ $3,800 -> 3,800 × 0.85 = $3,230)'],
      ['Double · Synthesis', 'How much extra will Apex Logistics owe for Audio-Visual technician support?', ['$0 (already included free)', '$350 flat fee', '$150 weekday surcharge', '$570 combined tech charge'], 0, 'ตอบ $0 (Horizon Package รวม Audio-Visual Tech ให้ฟรีอยู่แล้ว)'],
      ['Double · Detail', 'Which linen option is unavailable under the Pearl Package but offered under Horizon?', ['Navy satin table linens', 'Ivory polyester cloths', 'White folding banquet chairs', 'Monogrammed cocktail napkins'], 0, 'ตอบ Navy satin table linens (ตารางระบุว่า Pearl ให้เฉพาะ Ivory Polyester ส่วน Horizon เลือก Ivory หรือ Navy Satin ได้)'],
      ['Double · Detail', 'Why does Rachel Kim mention Maple Florist in her e-mail?', ['To inform the hotel when an outside florist will arrive to drop off centerpieces', 'To ask the hotel kitchen to invoice flowers on the main bill', 'To request a 15% florist partner discount on Horizon rental', 'To check whether floral deliveries qualify for Monday rates'], 0, 'ตอบ To inform the hotel when an outside florist will arrive to drop off centerpieces (แจ้งเวลาช่างดอกไม้ภายนอกจะมาส่งแจกัน 16:30 น. ตามกฎที่ลูกค้าจัดดอกไม้เอง)'],
    ]),

    p7(23, 'm23-d2', [
      doc('invoice', 'ClearStitch Apparel Co. — Invoice #INV-7741',
        [['Client', 'Lakeside Marathon Committee'], ['Submitted', 'April 2 (Standard 14-Day Turnaround)'], ['Delivered', 'April 16']],
        [
          tbl(
            ['Item Description', 'Ordered Qty', 'Unit Price', 'Billed Total'],
            [
              ['DryFit Runner Tee — Size M', '60', '$11.00', '$660.00'],
              ['DryFit Runner Tee — Size L', '50', '$11.00', '$550.00'],
              ['DryFit Runner Tee — Size XL', '40', '$11.00', '$440.00'],
              ['Rush 3-Day Embroidery Fee', '1', '$120.00', '$120.00'],
            ]
          ),
          'Total Invoice Charged: $1,770.00. Packing slips must be verified within 5 business days of delivery for quantity adjustments.',
        ]),
      doc('email', 'E-mail Message',
        [['To', 'billing@clearstitchapparel.com'], ['From', 'Tomás Vega, Lakeside Marathon'], ['Date', 'April 18'], ['Subject', 'Invoice #INV-7741 Corrections Needed']],
        [
          'Hello ClearStitch Billing Team,',
          'Thank you for delivering our volunteer shirts safely on April 16 ahead of Saturday’s race. Our team just finished counting every box this morning and noticed two billing issues on Invoice #INV-7741:',
          'First, although we were billed for 40 Size XL tees ($440.00), Box #4 held only 32 Size XL shirts—8 shirts short. Second, we submitted finalized artwork on April 2 for the standard 14-day schedule (arriving April 16), yet a $120.00 Rush Embroidery Fee was mistakenly added.',
          'Because race morning is just two days away, please skip shipping the missing 8 XL shirts and instead deduct both the 8 unreceived shirts and the mistaken rush surcharge from our balance.',
        ]),
    ], [
      ['Double · Math', 'According to Tomás Vega’s count, how many Size XL tees were actually inside Box #4?', ['32 shirts', '40 shirts', '50 shirts', '8 shirts'], 0, 'ตอบ 32 shirts (บิลคิดมา 40 ตัว แต่นับจริงขาดไป 8 ตัว เหลือ 32 ตัว)'],
      ['Double · Reason', 'Why should the $120.00 rush fee be removed from Invoice #INV-7741?', ['The order followed the full 14-day standard production timeline', 'Embroidery on Size M tees qualifies as complimentary', 'The delivery arrived three days past the promised April 13 date', 'Race volunteer orders over 100 shirts are exempt from setup fees'], 0, 'ตอบ The order followed the full 14-day standard production timeline (ส่งไฟล์วันที่ 2 เม.ย. และรับของ 16 เม.ย. ครบ 14 วันมาตรฐาน ไม่ใช่งานด่วน 3 วัน)'],
      ['Double · Math', 'What corrected total should ClearStitch Apparel bill after applying both deductions requested by Tomás?', ['$1,562.00', '$1,650.00', '$1,682.00', '$1,442.00'], 0, 'ตอบ $1,562.00 (เดิม $1,770.00 ลบค่าเสื้อ XL ขาด 8 ตัว × $11 = $88 และค่า Rush $120 = ลดรวม $208 -> เหลือ $1,562.00)'],
      ['Double · Detail', 'Why does Tomás decline having the 8 missing Size XL shirts mailed afterward?', ['The marathon takes place in two days and late shirts would arrive too late', 'Volunteers mostly requested Medium and Large shirts instead', 'Another print shop already produced spare XL uniforms locally', 'ClearStitch requires a 14-day minimum turnaround for small reorders'], 0, 'ตอบ The marathon takes place in two days and late shirts would arrive too late (งานวิ่งจะเริ่มในอีก 2 วัน ไม่ทันใช้แล้วจึงขอหักยอดเงินแทน)'],
      ['Double · Inference', 'Did Tomás report the discrepancy within ClearStitch’s required inspection period?', ['Yes—two days after the April 16 delivery beats the 5-business-day deadline', 'No—the April 18 email missed the April 16 cutoff date', 'Only partially, because artwork changes must be flagged before billing', 'Unable to tell because no packing slip was signed'], 0, 'ตอบ Yes—two days after the April 16 delivery beats the 5-business-day deadline (ส่งของ 16 เม.ย. แจ้งปัญหา 18 เม.ย. อยู่ในเกณฑ์ 5 วันทำการ)'],
    ]),

    p7(23, 'm23-t1', [
      doc('notice', 'Bayside History Museum — Spring Twilight Lecture Calendar', null, [
        tbl(
          ['Date', 'Speaker & Topic', 'Scheduled Room', 'Member Ticket / Guest Limit'],
          [
            ['Thu, May 8 · 7:00 P.M.', 'Dr. Lena Cho — Steamboats of 1910', 'Auditorium B (120 seats)', 'Member Free; up to 2 Guests ($14 each)'],
            ['Thu, May 15 · 7:00 P.M.', 'Prof. Owen Hart — Glassmaking Guilds', 'Auditorium B (120 seats)', 'Member Free; up to 2 Guests ($14 each)'],
            ['Thu, May 22 · 7:00 P.M.', 'Aris Thorne — Coastal Lighthouse Design', 'West Wing Gallery', 'Member + 1 Guest Free; Extra $18'],
          ]
        ),
      ]),
      doc('memo', 'MEMBER PORTAL UPDATE — VENUE & PARKING NOTICE',
        [['Posted', 'Monday, May 12'], ['Applicable Event', 'May 15 Twilight Lecture (Prof. Owen Hart)']],
        [
          'Because reservations for Prof. Owen Hart’s May 15 lecture surpassed Auditorium B’s 120-seat fire capacity, the presentation is relocated upstairs to Grand Hall A (300 seats). Doors open at 6:30 P.M.',
          'Also note that Harbor Street Garage closes at 6:00 P.M. Thursdays for electrical repaving; bring your parking stub to the Atrium Desk for free 4-hour validation at Elm Civic Lot across First Avenue instead.',
        ]),
      doc('email', 'E-mail Confirmation Request',
        [['To', 'members@baysidehistory.org'], ['From', 'Gloria Bennett (Patron Member #419)'], ['Date', 'May 13'], ['Subject', 'Seats for May 15 Twilight Talk']],
        [
          'Hello Membership Desk,',
          'I would like to reserve seating for myself plus my two visiting cousins from Portland for Prof. Hart’s lecture this Thursday evening, May 15.',
          'Since my cousin drives a tall van, we plan to park at Elm Civic Lot rather than a covered ramp—please confirm how validation works after 6:00 P.M. and charge the guest ticket balance to my card on file.',
        ]),
    ], [
      ['Triple · Synthesis', 'Where will Gloria Bennett and her cousins sit for the May 15 lecture?', ['Grand Hall A', 'Auditorium B', 'West Wing Gallery', 'Atrium Mezzanine'], 0, 'ตอบ Grand Hall A (ประกาศเมื่อ 12 พ.ค. ย้ายการบรรยายวันที่ 15 พ.ค. ของ Prof. Owen Hart จาก Auditorium B ไปที่ Grand Hall A เพราะคนจองเกิน 120 ที่นั่ง)'],
      ['Triple · Math', 'How much should Membership Desk charge Gloria Bennett’s card for May 15 guest admission?', ['$28 (two guests at $14 each; member seat free)', '$14 (one free guest plus one paid guest)', '$36 (two guests at $18 each)', '$42 (three tickets at $14 each)'], 0, 'ตอบ $28 (วันที่ 15 พ.ค. สมาชิกฟรี และพาแขกได้ไม่เกิน 2 คน คนละ $14 -> 2 × $14 = $28)'],
      ['Triple · Synthesis', 'How does the parking change affect Gloria’s cousin’s van on May 15?', ['Elm Civic Lot is the validated option recommended in the May 12 notice', 'Harbor Street Garage will stay open until 10:00 P.M. for lecture guests', 'First Avenue meters require cash coins after 6:30 P.M.', 'Only West Wing Gallery visitors receive Atrium Desk validation'], 0, 'ตอบ Elm Civic Lot is the validated option recommended in the May 12 notice (สอดคล้องกับประกาศวันที่ 12 พ.ค. ให้เอาบัตรจอดรถมาสแตมป์ฟรี 4 ชม. ที่ Atrium Desk เพื่อใช้กับ Elm Civic Lot แทน Harbor Street Garage)'],
      ['Triple · Detail', 'Why was Prof. Hart’s talk moved out of Auditorium B?', ['Ticket sign-ups exceeded its 120-person seating limit', 'Acoustic renovations closed Auditorium B all May', 'Prof. Hart requested wider slide screens upstairs', 'Harbor Street Garage repaving blocked the lower exit'], 0, 'ตอบ Ticket sign-ups exceeded its 120-person seating limit (ยอดจองเกินความจุ 120 ที่นั่งตามกฎหมายอัคคีภัย)'],
      ['Triple · Detail', 'On which date does a member’s first guest attend at no charge?', ['May 22', 'May 8', 'May 15', 'May 12'], 0, 'ตอบ May 22 (ตารางวันที่ 22 พ.ค. ระบุว่า Member + 1 Guest Free)'],
    ]),

    p7(23, 'm23-t2', [
      doc('notice', 'ArcticFlow Commercial Cooling — Service Plan Comparison', null, [
        tbl(
          ['Plan Feature', 'Silver Care ($90/mo)', 'Gold Priority ($165/mo)'],
          [
            ['Emergency Callout Fee (Bus. Hrs)', '$85 Dispatch Fee', '$0 Waived'],
            ['After-Hours / Weekend Surcharge', '+$110 Surcharge', '+$40 Reduced Surcharge'],
            ['Replacement Parts Discount', '10% Off List Price', '25% Off List Price'],
          ]
        ),
        'Standard business hours run Mon–Fri 8:00 A.M.–5:00 P.M. Emergency calls placed outside these hours incur the After-Hours Surcharge.',
      ]),
      doc('invoice', 'FIELD WORK ORDER SUMMARY #WO-902',
        [['Account', 'Harvest Table Bistro (Plan: Silver Care)'], ['Callout Logged', 'Sunday, June 2 · 11:20 A.M.'], ['Technician', 'G. Morales']],
        [
          lst([
            'Equipment: Walk-In Produce Cooler #1 — Replaced faulty digital evaporator thermostat sensor (List Price: $200.00).',
            'Labor: 1 hour troubleshooting and sensor calibration included under Service Plan coverage.',
            'Line Charges Pending Billing Office Review: Emergency Callout Fee + Sunday Surcharge + Thermostat Sensor.',
          ]),
        ]),
      doc('email', 'E-mail Message',
        [['To', 'contracts@arcticflow.com'], ['From', 'Mona Alverez, Harvest Table Bistro'], ['Date', 'Monday, June 3'], ['Subject', 'Upgrade to Gold Priority & Work Order #WO-902']],
        [
          'Hi ArcticFlow Team,',
          'Thank you for sending G. Morales promptly yesterday morning when our produce cooler warmed up! I understand #WO-902 falls under our existing Silver Care contract since Sunday occurred prior to any upgrade.',
          'Please finalize #WO-902 billing with our correct Silver Care parts discount so I can settle it cleanly by ACH, and enroll Harvest Table Bistro in the Gold Priority plan effective July 1 to keep weekend surcharges lower ahead of peak summer heat.',
        ]),
    ], [
      ['Triple · Math', 'What will the discounted replacement thermostat sensor cost under Work Order #WO-902?', ['$180.00', '$150.00', '$200.00', '$175.00'], 0, 'ตอบ $180.00 (Work Order ยังอยู่ใต้ Silver Care ซึ่งลดค่าอะไหล่ 10% จากราคาป้าย $200 -> จ่าย $180)'],
      ['Triple · Synthesis', 'Calculate Harvest Table Bistro’s FULL total for Work Order #WO-902 (Callout + After-Hours Surcharge + Sensor):', ['$375.00 ($85 callout + $110 surcharge + $180 sensor)', '$220.00 ($0 callout + $40 surcharge + $180 sensor)', '$395.00 ($85 callout + $110 surcharge + $200 sensor)', '$265.00 ($85 callout + $0 surcharge + $180 sensor)'], 0, 'ตอบ $375.00 (Silver Care คิด Callout $85 + วันอาทิตย์นอกเวลาทำการ +$110 + ค่าเซ็นเซอร์ลด 10% $180 = $375.00)'],
      ['Triple · Detail', 'When will the bistro’s switch to the Gold Priority plan take effect?', ['July 1', 'Sunday, June 2', 'Monday, June 3', 'Immediately before #WO-902 is billed'], 0, 'ตอบ July 1 (Mona ขอเปลี่ยนเป็นแผน Gold Priority โดยมีผลวันที่ 1 กรกฎาคม)'],
      ['Triple · Detail', 'Why did ArcticFlow not bill extra hourly labor on #WO-902?', ['Troubleshooting labor is included under the monthly service plan', 'G. Morales spent under 15 minutes calibrating the unit', 'Thermal sensor faults carry a free manufacturer warranty', 'Silver Care waives labor charges strictly on Sundays'], 0, 'ตอบ Troubleshooting labor is included under the monthly service plan (ใบงานระบุว่าค่าแรงตรวจเช็ก 1 ชม. รวมในแผนบริการแล้ว)'],
      ['Triple · Inference', 'Why does Mona want to upgrade from Silver Care to Gold Priority?', ['To avoid dispatch callout fees and lower weekend repair surcharges during summer', 'To waive the monthly fee completely during peak July produce deliveries', 'To receive retroactive 25% rebates on Sunday’s sensor invoice', 'To extend Monday–Friday business hours until 9:00 P.M.'], 0, 'ตอบ To avoid dispatch callout fees and lower weekend repair surcharges during summer (เพื่อลดภาระค่าใช้จ่ายซ่อมฉุกเฉินช่วงสุดสัปดาห์ในหน้าร้อน)'],
    ]),

    p7(23, 'm23-t3', [
      doc('notice', 'Valley County Library System — Mobile Bookmobile Route Schedule', null, [
        tbl(
          ['Day', 'Scheduled Stop', 'Arrival–Departure', 'Main Service Offered'],
          [
            ['Tue', 'Oakwood Senior Center', '10:00 A.M.–12:30 P.M.', 'Large-Print Loans & Drop Box'],
            ['Thu', 'Elm Park Community Lawn', '1:30 P.M.–4:30 P.M.', 'Children’s Story Hour & Hold Pickup'],
            ['Sat', 'Civic Plaza Farmers Market', '9:00 A.M.–1:00 P.M.', 'Full Collection & Hold Pickup'],
          ]
        ),
        'Standard Policy: Unclaimed reserved Hold items are held aboard the Bookmobile for 7 calendar days before returning to the Central Branch shelves.',
      ]),
      doc('memo', 'SERVICE DISRUPTION BULLETIN',
        [['Issued', 'Wednesday Evening, August 6'], ['Notice', 'Severe Windstorm Closure — Elm Park']],
        [
          'Municipal forestry crews closed Elm Park through Friday morning to clear fallen pine limbs following Wednesday’s storm. Consequently, Thursday’s (August 7) Elm Park Bookmobile stop is CANCELED.',
          'Hold bins originally slated for Elm Park pickup on August 7 will automatically transfer to this Saturday’s (August 9) Civic Plaza stop AND receive a special 48-hour hold expiration extension through Wednesday, August 13 at Central Branch.',
        ]),
      doc('email', 'Driver Route Log & Branch Reply',
        [['To', 'circulation@valleylib.org'], ['From', 'Barry Kowalski, Bookmobile Driver'], ['Date', 'Saturday, August 9 · 1:25 P.M.'], ['Subject', 'Post-Market Hold Bin Report']],
        [
          'Hi Circulation Team,',
          'Saturday’s Civic Plaza stop wrapped up smoothly—19 of the 23 shifted Elm Park Hold patrons stopped by today to collect their books!',
          'The remaining 4 unclaimed Elm Park bundles (#H-402, #H-409, #H-414, #H-421) remain locked inside Tote C aboard the van and will be unloaded onto the Central Branch Hold Shelf Monday morning so patrons can grab them anytime through the extended deadline.',
        ]),
    ], [
      ['Triple · Detail', 'Why was the August 7 stop at Elm Park canceled?', ['Park paths were closed for storm-damaged tree removal', 'Mechanical repairs sidelined the Bookmobile van', 'Civic Plaza Farmers Market booked the mobile library exclusively', 'Librarians attended a Thursday regional cataloging workshop'], 0, 'ตอบ Park paths were closed for storm-damaged tree removal (เทศบาลปิดสวน Elm Park เพื่อเคลียร์กิ่งสนที่หักโค่นจากพายุลมแรง)'],
      ['Triple · Math', 'How many reserved Elm Park patrons claimed their books during Saturday’s Civic Plaza stop?', ['19 patrons', '23 patrons', '4 patrons', '15 patrons'], 0, 'ตอบ 19 patrons (Barry รายงานว่าจากผู้จอง 23 ราย มาชดเชยรับที่ Civic Plaza วันเสาร์ไปแล้ว 19 ราย)'],
      ['Triple · Synthesis', 'Until what date can the owners of bundles #H-402 through #H-421 still collect their reserved books?', ['Wednesday, August 13', 'Thursday, August 7', 'Saturday, August 9', 'Monday, August 11'], 0, 'ตอบ Wednesday, August 13 (ประกาศระบุว่าขยายเวลาจองเพิ่มพิเศษ 48 ชม. ให้ไปรับที่สาขากลางได้ถึงพุธที่ 13 ส.ค.)'],
      ['Triple · Detail', 'Where will the four remaining unclaimed bundles be available starting Monday morning?', ['On the Hold Shelf inside the Central Branch', 'Back aboard the van at Oakwood Senior Center', 'Re-parked outside Elm Park Community Lawn', 'Stored permanently inside Civic Plaza Security Booth'], 0, 'ตอบ On the Hold Shelf inside the Central Branch (Barry ระบุว่าจะขนลงชั้น Hold Shelf ที่ Central Branch เช้าวันจันทร์)'],
      ['Triple · Detail', 'What regular service takes place on Tuesdays at Oakwood Senior Center?', ['Lending large-print books and collecting returns', 'Hosting children’s outdoor reading groups', 'Issuing driver license library cards', 'Selling discounted surplus paperbacks'], 0, 'ตอบ Lending large-print books and collecting returns (ตารางวันอังคารให้บริการหนังสือตัวอักษรขนาดใหญ่ Large-Print และกล่องคืนหนังสือ)'],
    ]),

    // ==================== SET 24 ====================
    p7(24, 'm24-s1', [
      doc('ad', 'STONEWARE STUDIO OUTLET — SATURDAY ONE-DAY CLEARANCE', null, [
        'Overstocked Discontinued Subway & Hex Ceramic Tiles — 40% OFF Marked Warehouse Prices! This Saturday Only (8:00 A.M.–4:00 P.M.) at Dock 3, North Industrial Way.',
        'Discontinued matte sky-blue and slate-gray cartons must leave in full pallet blocks (minimum 10 boxes per transaction). Forklift pallet loading into pickup beds or box trucks is complimentary. All clearance outlet purchases are strictly final—no exchanges or credit returns accepted.',
      ]),
    ], [
      ['Single · Detail', 'What requirement applies to customers purchasing discontinued tiles during Saturday’s sale?', ['They must purchase at least 10 boxes per order', 'They must reserve pallet slots online by Friday evening', 'They must rent an approved commercial box truck', 'They must pay an additional forklift loading surcharge'], 0, 'ตอบ They must purchase at least 10 boxes per order (โฆษณากำหนดยอดขั้นต่ำ 10 กล่องต่อบิล)'],
      ['Single · Detail', 'What limitation governs returns on clearance items?', ['Purchased outlet boxes cannot be returned or exchanged', 'Returns incur a 40% warehouse restocking deduction', 'Store credit vouchers expire seven days after pickup', 'Boxes opened prior to installation lose refund eligibility'], 0, 'ตอบ Purchased outlet boxes cannot be returned or exchanged (ระบุว่า All clearance outlet purchases are strictly final)'],
    ]),

    p7(24, 'm24-s2', [
      doc('memo', 'BUILDING OPERATIONS ALERT',
        [['To', 'All Commerce Tower Tenants'], ['Date', 'Tuesday Morning'], ['Subject', 'Wednesday Rooftop Chiller Crane Lift — East Alley Closure']],
        [
          'Between 6:00 A.M. and 11:30 A.M. tomorrow (Wednesday), heavy mobile cranes will occupy the entire East Service Alley to hoist replacement HVAC chiller coils onto the 18th-floor mechanical roof.',
          'Courier delivery vans and shredding trucks must divert to North Receiving Bay 2 during those hours. Covered pedestrian sidewalks along Main Plaza remain safely open, though cyclists should walk bikes past caution cones near the lobby awning.',
        ]),
    ], [
      ['Single · Purpose', 'Why is East Service Alley closed on Wednesday morning?', ['A crane needs clearance to lift heating/cooling units onto the roof', 'Utility crews are repaving underground fiber lines behind the tower', 'Tenants are relocating modular office furniture down the freight ramp', 'Emergency generators are undergoing six-hour acoustic inspections'], 0, 'ตอบ A crane needs clearance to lift heating/cooling units onto the roof (รถเครนขนาดใหญ่จะยกคอยล์เครื่องทำความเย็น HVAC ขึ้นดาดฟ้าชั้น 18)'],
      ['Single · Detail', 'Where should commercial parcel vans unload before 11:30 A.M. Wednesday?', ['North Receiving Bay 2', 'Main Plaza pedestrian awning', 'East Service Alley dock', 'Eighteenth-floor freight lift'], 0, 'ตอบ North Receiving Bay 2 (รถส่งของต้องเบี่ยงไปที่ North Receiving Bay 2 ชั่วคราว)'],
    ]),

    p7(24, 'm24-s3', [
      doc('memo', 'SUSTAINABILITY UPDATE — QUARTER 3',
        [['To', 'All MetroLabs Employees'], ['From', 'Green Workspace Taskforce'], ['Subject', 'Pantry Composting & Zero-Waste Audit']],
        [
          'Thanks to everyone who joined last quarter’s cafeteria waste sort! Our latest weigh-in showed 62% of breakroom trash was diverted away from landfill—moving steadily toward our annual 75% goal.',
          'Starting Monday, plastic coffee stirrers disappear from all kitchen counters in favor of biodegradable birch paddles. New color-coded green Organics Bins will also stand beside every Floor 3 coffee brewer specifically for used paper grounds filters and fruit peels; please keep waxy sandwich wrappers out of green bins, as commercial composters reject coated paper.',
        ]),
    ], [
      ['Single · Detail', 'What waste-diversion percentage did MetroLabs achieve last quarter?', ['62 percent', '75 percent', '30 percent', '100 percent'], 0, 'ตอบ 62 percent (ผลชั่งน้ำหนักรอบล่าสุดแยกขยะได้ 62% เข้าใกล้เป้าหมายรายปี 75%)'],
      ['Single · Detail', 'Which item should NOT be placed inside the new green Organics Bins on Floor 3?', ['Waxy coated sandwich wrappers', 'Used coffee grounds filters', 'Apple cores and banana peels', 'Biodegradable birch coffee stirrers'], 0, 'ตอบ Waxy coated sandwich wrappers (ห้ามทิ้งกระดาษห่อแซนด์วิชเคลือบไขลงถังเขียว เพราะโรงปุ๋ยหมักไม่รับกระดาษเคลือบ)'],
      ['Single · Detail', 'What breakroom supply is being discontinued next Monday?', ['Disposable plastic coffee stirrers', 'Paper coffee filters', 'Single-serve creamer packets', 'Reusable ceramic breakroom mugs'], 0, 'ตอบ Disposable plastic coffee stirrers (งดใช้ไม้คนกาแฟพลาสติก เปลี่ยนเป็นไม้เบิร์ชย่อยสลายได้แทน)'],
    ]),

    p7(24, 'm24-s4', [
      doc('notice', 'Alpine Scenic Rail — Roll-On Bicycle Car Policy FAQ', null, [
        lst([
          'Overhead Rack Limits: Standard road and gravel bicycles hanging from ceiling wheel hooks must weigh NO MORE than 25 kilograms. Heavy commuter electric bikes above 25 kg must book Floor Clamps #1–#4 instead.',
          'Lithium Batteries: All riders traveling with removable e-bike batteries must detach the battery pack prior to boarding and carry it inside a padded lap bag—never locked inside overhead bicycle storage frames.',
          'Pass Changes: Bike Car reservation passes ($12) may be rescheduled without fee up to 24 hours before scheduled rail departure; cancellations or missed trains inside 24 hours are nonrefundable.',
        ]),
      ]),
    ], [
      ['Single · Detail', 'How must riders stow a 29-kilogram electric bicycle aboard the train?', ['Reserve one of Floor Clamps #1 through #4', 'Hang it carefully from a reinforced ceiling wheel hook', 'Check it inside a cardboard box in the baggage caboose', 'Disassemble both wheels under standard passenger seats'], 0, 'ตอบ Reserve one of Floor Clamps #1 through #4 (จักรยานที่หนักเกิน 25 กก. ห้ามแขวนราวบน ต้องจอง Floor Clamps #1–#4)'],
      ['Single · Detail', 'What safety rule governs lithium e-bike batteries during rail travel?', ['Batteries must be detached and kept with the passenger in a padded bag', 'Batteries must remain locked to frame mounts inside the bike car', 'Spare chargers must be surrendered to ticket conductors until arrival', 'Batteries under 50% capacity do not need to be detached'], 0, 'ตอบ Batteries must be detached and kept with the passenger in a padded bag (ต้องถอดแบตฯ ใส่กระเป๋าบุนวมถือไว้ที่ตัวผู้โดยสาร ห้ามทิ้งคารถจักรยาน)'],
      ['Single · Inference', 'Under what circumstance will Alpine Scenic Rail allow a free date switch on a $12 bike pass?', ['When changed more than 24 hours before train departure', 'Whenever heavy rain affects mountain trail access', 'If a passenger upgrades to a Floor Clamp onboard', 'Within 2 hours after a missed scenic connection'], 0, 'ตอบ When changed more than 24 hours before train departure (เลื่อนวันฟรีได้หากแจ้งล่วงหน้าอย่างน้อย 24 ชั่วโมงก่อนรถไฟออก)'],
    ]),

    p7(24, 'm24-s5', [
      doc('notice', 'PRESS RELEASE — Solstice Battery Opens 40-MW Rural Grid Hub', null, [
        'SUNRIDGE VALLEY — Clean-energy developer Solstice Battery Corp. formally energized its 40-megawatt utility substation along Highway 9 Tuesday, marking the county’s largest standalone lithium-iron-phosphate (LFP) storage bank.',
        'Previously, summer afternoons forced regional growers to kick on noisy diesel backup pumps whenever midday electric loads overwhelmed aging feeder lines serving irrigated orchards. Now, excess midday solar energy stored overnight at the Sunridge hub dispatches seamlessly across three local co-op circuits in milliseconds, cutting seasonal farm diesel usage by an estimated 380,000 liters per harvest.',
      ]),
    ], [
      ['Single · Purpose', 'What is the main announcement in the press release?', ['Commissioning of a 40-megawatt grid-scale battery storage station', 'Construction of new solar greenhouses along Highway 9', 'Statewide bans on farm diesel irrigation tractors', 'Acquisition of three rural power co-ops by Solstice Battery'], 0, 'ตอบ Commissioning of a 40-megawatt grid-scale battery storage station (Solstice Battery เปิดเดินเครื่องสถานีแบตเตอรี่ LFP ขนาด 40 เมกะวัตต์)'],
      ['Single · Detail', 'Why did orchard farmers formerly rely on diesel backup pumps in summer?', ['Afternoon electrical demand strained older distribution power lines', 'Midday sunshine reduced river pumping water levels', 'Solar panel inverters required manual diesel priming', 'Rural power co-ops suspended daytime agricultural service'], 0, 'ตอบ Afternoon electrical demand strained older distribution power lines (ช่วงบ่ายหน้าร้อนโหลดไฟฟ้าสูงเกินขีดจำกัดของสายส่งเดิม)'],
      ['Single · Detail', 'What measurable annual benefit is projected for local agriculture?', ['Nearly 380,000 liters less diesel burned per harvest', 'Double the county orchard acreage connected by rail', 'Forty percent lower winter greenhouse heating rates', 'Zero irrigation electricity fees for co-op members'], 0, 'ตอบ Nearly 380,000 liters less diesel burned per harvest (ลดการใช้น้ำมันดีเซลของเกษตรกรได้ราว 380,000 ลิตรต่อฤดูเก็บเกี่ยว)'],
    ]),

    p7(24, 'm24-s6', [
      doc('letter', 'StrideFit Custom Orthotics — 60-Day Fit & Gait Guarantee',
        [['Patient', 'Claire Dawson'], ['Lab Order', '#SF-8824']],
        [
          'Dear Claire,',
          'Enclosed are your 3D-milled carbon-flex running insoles tailored from last week’s pressure-plate scan. Because foot muscles adapt gradually to new arch geometry, wear them for 1–2 hours daily during Week 1 before running longer distances.',
          'Please DO NOT trim insole edges with household scissors before completing a 14-day break-in period, as altering the heel cup early voids free remilling coverage. Should any pressure spot persist past two weeks, drop into our Thursday Walk-In Heat-Molding Clinic (2:00 P.M.–6:00 P.M.) for complimentary arch contouring anytime within 60 days of delivery.',
        ]),
    ], [
      ['Single · Advice', 'How does StrideFit suggest Claire start using her new insoles?', ['Gradually for one to two hours per day across the first week', 'Full marathon distances starting on Day 1', 'Only during Thursday clinic treadmill tests', 'After trimming the heel cup width immediately at home'], 0, 'ตอบ Gradually for one to two hours per day across the first week (แนะนำให้ใส่ปรับเท้าวันละ 1–2 ชั่วโมงในช่วงสัปดาห์แรก)'],
      ['Single · Warning', 'What action would void Claire’s free lab remilling warranty?', ['Cutting the insoles with scissors during the first 14 days', 'Attending a Thursday walk-in molding clinic past Day 30', 'Running outdoors on paved surfaces before Week 2', 'Returning insoles inside the original cardboard mailer'], 0, 'ตอบ Cutting the insoles with scissors during the first 14 days (ห้ามตัดแต่งขอบด้วยกรรไกรก่อนพ้นช่วงปรับตัว 14 วัน มิฉะนั้นจะเสียสิทธิ์หล่อแก้ฟรี)'],
      ['Single · Detail', 'When can Claire receive free on-site heat-molding adjustments?', ['Thursday afternoons between 2:00 P.M. and 6:00 P.M.', 'Monday mornings by paid orthopedic referral only', 'Any weekday within 14 days of payment', 'Saturday mornings prior to marathon packet pickup'], 0, 'ตอบ Thursday afternoons between 2:00 P.M. and 6:00 P.M. (คลินิกปรับความร้อนแบบ walk-in เปิดฟรีทุกบ่ายวันพฤหัสฯ เวลา 14:00–18:00 น.)'],
    ]),

    p7(24, 'm24-s7', [
      doc('article', 'Cellular Tags Rescue Perishable Flower Cargo From Tarmac Delays', null, [
        'AMSTERDAM LOGISTICS REVIEW — A single uncooled afternoon on a summer airport tarmac can wilt $80,000 worth of greenhouse cut tulips before auction buyers ever open the cargo lid.',
        '[1] To close that blind spot, NordicBloom Air Cargo now slips credit-card-sized cellular telemetry tags directly inside three floral cartons per pallet. [2] Unlike passive USB data loggers that reveal spoilage only days later after customs inspection, live cellular sensors ping temperature and humidity alerts to dispatch screens every ten minutes.',
        'Last Thursday, a freight transfer in Frankfurt stalled three hours due to ramp storms, pushing internal box temperatures toward 11°C. [3] Operations coordinators immediately diverted the pallet into a refrigerated terminal vault, preserving 98% of the stems for Friday morning’s floral market. [4]',
      ]),
    ], [
      ['Single · Purpose', 'What problem do NordicBloom’s new cellular tags solve?', ['Detecting dangerous heat spikes during airport freight waits in real time', 'Speeding customs paperwork signatures for tulip bulbs', 'Automating mist watering inside sealed greenhouse trucks', 'Tracking retail flower prices across European auction halls'], 0, 'ตอบ Detecting dangerous heat spikes during airport freight waits in real time (ช่วยแจ้งเตือนอุณหภูมิและความชื้นแบบเรียลไทม์ระหว่างรอถ่ายลำบนลานจอด)'],
      ['Single · Detail', 'How do the new tags differ from older passive USB data loggers?', ['They transmit updates every 10 minutes instead of waiting until unloading', 'They require manual customs inspection before powering on', 'They refrigerate individual cartons using miniature batteries', 'They attach externally to aircraft fuselage doors'], 0, 'ตอบ They transmit updates every 10 minutes instead of waiting until unloading (รุ่นเก่าต้องรอเปิดตู้ปลายทางถึงเห็นข้อมูล แต่รุ่นใหม่ส่งสัญญาณทุก 10 นาที)'],
      ['Single · Detail', 'What saved 98% of last Thursday’s tulip shipment in Frankfurt?', ['Moving the cargo into cold storage as soon as heat alerts appeared', 'Chartering an unscheduled express jet back to Amsterdam', 'Spraying chilly water directly across airport tarmac ramps', 'Replacing wilted stems at Friday’s wholesale auction'], 0, 'ตอบ Moving the cargo into cold storage as soon as heat alerts appeared (ศูนย์ควบคุมเห็นแจ้งเตือน 11°C เลยรีบย้ายพาเลตเข้าห้องเย็นปลายทางทันที)'],
      ['Single · Insertion', 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n"Before the cargo warmed any further, those automated pings triggered a red warning banner at Amsterdam headquarters."', ['[1]', '[2]', '[3]', '[4]'], 2, 'ตอบ [3] (ประโยคนี้อธิบายผลทันทีหลังจากอุณหภูมิในแฟรงก์เฟิร์ตพุ่งไป 11°C ก่อนที่จะกล่าวถึงการย้ายเข้าห้องเย็นในประโยค [3])'],
    ]),

    p7(24, 'm24-s8', [
      doc('memo', 'HARBOR OYSTER REEF RESTORATION — VOLUNTEER BRIEFING #14',
        [['Site', 'Low-Tide Mudflat Zone C'], ['Saturday Shift', '7:30 A.M.–11:00 A.M.']],
        [
          '[1] Thank you for joining Saturday’s coastal reef-building workday! Because muddy estuary footing becomes slippery when hauling cured shell bags, all volunteers must wear closed-toe rubber boots and keep individual mesh bags under 15 kilograms.',
          'Before wading beyond the timber marker posts, team captains hold a mandatory 10-minute tide-table safety check on shore. [2] Working teams then anchor woven wire habitats into silt benches right at peak slack low tide so young oyster larvae can attach securely during incoming currents. [3] Crucially, our restoration uses uncoated mild galvanized wire rather than heavy stainless mesh. [4] Within three years, tidal salt gradually rusts away the thin frame wire, leaving an entirely natural stone reef behind.',
        ]),
    ], [
      ['Single · Detail', 'Why are volunteers asked to limit shell bags to under 15 kilograms?', ['Mudflat footing becomes slick while carrying heavy loads', 'Woven wire habitats collapse under heavier gravel weight', 'Estuary permits prohibit motorized wheelbarrow carts', 'Young oyster larvae prefer shallower bag layers'], 0, 'ตอบ Mudflat footing becomes slick while carrying heavy loads (พื้นเลนช่วงน้ำลงลื่นมาก จึงจำกัดน้ำหนักถุงเปลือกหอยไม่ให้เกิน 15 กก.)'],
      ['Single · Detail', 'What happens immediately before teams enter the water beyond timber posts?', ['Leaders review tidal schedules during a 10-minute shore briefing', 'Rubber boots are sanitized with freshwater hoses', 'Volunteers weigh each wire cage on digital dock scales', 'Oyster larvae jars are distributed along the seawall'], 0, 'ตอบ Leaders review tidal schedules during a 10-minute shore briefing (ต้องฟังบรีฟตารางน้ำขึ้นน้ำลง 10 นาทีบนฝั่งก่อนลุยน้ำ)'],
      ['Single · Inference', 'Why does the project intentionally avoid stainless steel wire?', ['Mild wire is meant to corrode safely away once oysters fuse together', 'Stainless cages reflect sunlight and deter larvae attachment', 'Municipal budgets reserve stainless metal strictly for pier pilings', 'Stainless fasteners sink too rapidly into deep estuary mud'], 0, 'ตอบ Mild wire is meant to corrode safely away once oysters fuse together (จงใจใช้ลวดเหล็กบางให้ค่อยๆ ผุสลายไปใน 3 ปี เหลือแต่แนวปะการังหอยธรรมชาติ)'],
      ['Single · Insertion', 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n"Each wire habitat holds up to forty cured oyster bags lashed firmly with biodegradable hemp cord."', ['[1]', '[2]', '[3]', '[4]'], 2, 'ตอบ [3] (Each wire habitat ขยายความ woven wire habitats ที่เพิ่งปักลงพื้นเลนในประโยคก่อนหน้า [3] ก่อนจะอธิบายวัสดุของตาข่ายในประโยคถัดไป)'],
    ]),

    p7(24, 'm24-s9', [
      doc('chat', 'Engineering QA Channel — #checkout-hotfix', null, [
        chat([
          ['Maya Tan (QA Lead)', '02:14 P.M.', 'Hold all releases—automated staging checks just flagged a 1-cent tax rounding mismatch on Japanese Yen orders using coupon codes.'],
          ['Leo Park (Backend)', '02:17 P.M.', 'Checking the pricing commit pushed at noon. I see a float multiplication inside applyCoupon() instead of integer minor units.'],
          ['Nadia Okafor (Product)', '02:20 P.M.', 'Black Friday promotional emails go out to 40,000 subscribers tomorrow at 8:00 A.M. How fast can we patch and verify this?'],
          ['Leo Park (Backend)', '02:23 P.M.', 'I can restore yesterday’s integer helper in fifteen minutes, or write a brand-new currency formatter table that takes until 7:00 P.M.'],
          ['Maya Tan (QA Lead)', '02:26 P.M.', 'Let’s freeze the staging branch right after Leo restores yesterday’s helper—zero experimental refactors tonight. Once CI tests pass, Nadia can sign off at 4:00 P.M.'],
        ]),
      ]),
    ], [
      ['Single · Problem', 'What software defect paused the release at 2:14 P.M.?', ['Promotional orders in Japanese Yen miscalculated tax by one unit', 'Coupon codes failed to apply for international email subscribers', 'Staging servers timed out during morning checkout tests', 'Email campaign drafts displayed outdated pricing tables'], 0, 'ตอบ Promotional orders in Japanese Yen miscalculated tax by one unit (พบข้อผิดพลาดการปัดเศษภาษีสกุลเงินเยนเมื่อใช้คูปอง)'],
      ['Single · Detail', 'When will promotional emails reach 40,000 customers?', ['Tomorrow at 8:00 A.M.', 'Today at 2:14 P.M.', 'Today at 4:00 P.M.', 'Tonight at 7:00 P.M.'], 0, 'ตอบ Tomorrow at 8:00 A.M. (Nadia แจ้งว่าอีเมลโปรโมชันจะส่งตอน 8:00 น. พรุ่งนี้)'],
      ['Single · Detail', 'Which fix will Leo Park implement first?', ['Restoring the working integer function from the prior day', 'Writing a new currency formatter table by 7:00 P.M.', 'Disabling coupon codes temporarily on Japanese Yen orders', 'Removing tax calculation checks from automated staging tests'], 0, 'ตอบ Restoring the working integer function from the prior day (Maya สั่งให้ย้อนใช้ฟังก์ชันจำนวนเต็มของเมื่อวานทันที ไม่รื้อโค้ดใหม่คืนนี้)'],
      ['Single · Intention', 'What does Maya mean when she writes, "zero experimental refactors tonight"?', ['Developers should avoid risky code changes so close to the promotion', 'Automated tests will skip experimental payment gateways tonight', 'Engineers may work overtime only on currency formatting tables', 'QA reviewers have finished testing all Black Friday coupon features'], 0, 'ตอบ Developers should avoid risky code changes so close to the promotion (หลีกเลี่ยงการแก้โค้ดใหญ่ที่เสี่ยงพังก่อนแคมเปญวันพรุ่งนี้)'],
      ['Single · Inference', 'Who holds final approval once automated tests turn green around 4:00 P.M.?', ['Nadia Okafor', 'Leo Park', 'Billing Support', 'Email Operations'], 0, 'ตอบ Nadia Okafor (Maya ระบุว่าเมื่อ CI ผ่านแล้วให้ Nadia จากฝ่าย Product เป็นผู้เซ็นอนุมัติตอน 16:00 น.)'],
    ]),

    p7(24, 'm24-d1', [
      doc('ad', 'QuietPod Studio — Acoustic Office Booth Catalog', null, [
        tbl(
          ['Model', 'Seating Capacity', 'Standard Boxed Width', 'Unit Price (Bundle 3+: 10% Off)'],
          [
            ['Solo Nook S1', '1 Person', '95 cm (Fits standard lifts)', '$4,200'],
            ['Duo Call D2', '2 People', '118 cm (Requires wide freight door)', '$6,800'],
            ['Huddle Pod H4', '4 People', '132 cm (Needs Flat-Pack Kit: +$350/unit)', '$11,000'],
          ]
        ),
        'Bundle Discount: Ordering ANY mix of 3 or more booths qualifies every booth on the purchase order for a 10% hardware discount (Flat-Pack assembly kit fees excluded from percentage discounts).',
      ]),
      doc('email', 'E-mail Order Request',
        [['To', 'sales@quietpodstudio.com'], ['From', 'Evan Cho, HarborView Architects'], ['Subject', 'Order Quote — Floor 7 Renovation']],
        [
          'Dear QuietPod Sales,',
          'We are refitting our 7th-floor studio and would like a formal invoice for TWO Solo Nook S1 units plus ONE Huddle Pod H4 booth.',
          'Please note our historic building elevator doorway measures exactly 100 cm wide, so include the knock-down Flat-Pack delivery kit where needed so technicians can carry panels smoothly upstairs.',
        ]),
    ], [
      ['Double · Detail', 'Which booths require special flat-pack assembly because of HarborView’s 100 cm elevator door?', ['The Huddle Pod H4 only (Solo Nook S1 is 95 cm wide and fits)', 'All three booths ordered for Floor 7', 'Solo Nook S1 units only', 'None of the models exceed 100 cm'], 0, 'ตอบ The Huddle Pod H4 only (ประตูลิฟต์กว้าง 100 ซม.: Solo Nook S1 กว้าง 95 ซม. เข้าได้พอดี แต่ Huddle Pod H4 กว้าง 132 ซม. จึงต้องซื้อชุด Flat-Pack +$350)'],
      ['Double · Synthesis', 'Does HarborView Architects qualify for the 10% multi-unit hardware discount?', ['Yes—ordering 2 Solo Nook S1 booths plus 1 Huddle Pod H4 totals 3 booths', 'No—the 10% discount applies only to three identical booth models', 'Only on the two Solo Nook S1 booths', 'Only if Duo Call D2 models are added'], 0, 'ตอบ Yes—ordering 2 Solo Nook S1 booths plus 1 Huddle Pod H4 totals 3 booths (เงื่อนไขระบุคละรุ่นได้ ขอเพียงรวม 3 ตู้ขึ้นไป)'],
      ['Double · Math', 'Calculate HarborView’s discounted HARDWARE subtotal (before the Flat-Pack kit charge):', ['$17,460', '$19,400', '$17,810', '$15,660'], 0, 'ตอบ $17,460 (ราคาเต็ม 2 × $4,200 + $11,000 = $19,400 หักส่วนลด 10% = $17,460)'],
      ['Double · Math', 'What FINAL total invoice amount should QuietPod bill including the required Flat-Pack kit?', ['$17,810', '$17,775', '$18,160', '$17,460'], 0, 'ตอบ $17,810 (ค่าตู้หลังลด $17,460 + ชุด Flat-Pack ของ H4 ราคาเต็ม $350 ซึ่งไม่ร่วมส่วนลด = $17,810)'],
      ['Double · Detail', 'Which booth has a 118 cm standard width and comfortably seats two workers?', ['Duo Call D2', 'Solo Nook S1', 'Huddle Pod H4', 'QuietPod Studio Kit'], 0, 'ตอบ Duo Call D2 (ตารางระบุว่า Duo Call D2 จุ 2 คน กว้าง 118 ซม.)'],
    ]),

    p7(24, 'm24-d2', [
      doc('notice', 'Northbridge University Extension — Supply Chain Certificate Requirements', null, [
        'To earn the Professional Certificate in Sustainable Logistics before Spring Commencement (May 18), candidates must pass 4 required core courses plus 2 elective seminars (6 courses total) with grades of B or higher:',
        lst([
          'Core (4 Required): LOG-101 Freight Economics, LOG-104 Cold-Chain Storage, LOG-108 Business Ethics, LOG-112 Demand Forecasting.',
          'Electives (Pick Any 2): LOG-203 Port Automation (Spring evenings), LOG-207 Rail Routing (Summer online only), LOG-210 Customs Compliance (Spring mornings).',
          'Transfer Credits: Up to ONE comparable accredited graduate course may waive an equivalent core requirement if approved prior to April 1.',
        ]),
      ]),
      doc('email', 'Advisor E-mail',
        [['To', 'tanya.okafor@alum.northbridge.edu'], ['From', 'Prof. Mark Lin, Program Director'], ['Date', 'February 19'], ['Subject', 'Spring Graduation Audit — Certificate Progress']],
        [
          'Hi Tanya,',
          'Great news reviewing your transcript ahead of Spring registration! The curriculum committee officially approved your prior MBA Ethics seminar transfer, waiving LOG-108 permanently from your core checklist. You also already passed LOG-101, LOG-104, and LOG-112 last autumn.',
          'That leaves ONLY your two elective credits to finish before the May 18 commencement ceremony. Because LOG-207 won’t run until July, enroll immediately in both LOG-203 and LOG-210 this Spring term so you cross the finish line cleanly.',
        ]),
    ], [
      ['Double · Synthesis', 'How many total courses has Tanya already satisfied toward the 6-course certificate?', ['Four courses (3 completed cores plus 1 approved Ethics waiver)', 'Two courses only', 'Five courses including Port Automation', 'All six required courses'], 0, 'ตอบ Four courses (เธอผ่าน LOG-101, 104, 112 แล้ว 3 วิชา + ได้โอนหน่วยกิตยกเว้น LOG-108 อีก 1 วิชา = 4 จาก 6 วิชา)'],
      ['Double · Reason', 'Why should Tanya NOT choose LOG-207 Rail Routing to graduate on May 18?', ['LOG-207 is offered only in July during the Summer term', 'LOG-207 requires an on-campus freight warehouse internship', 'Transfer students are excluded from online rail engineering courses', 'LOG-207 clashes directly with morning Customs Compliance sessions'], 0, 'ตอบ LOG-207 is offered only in July during the Summer term (วิชา LOG-207 เปิดเฉพาะเทอมฤดูร้อนเดือน ก.ค. ไม่ทันพิธีรับรอง 18 พ.ค.)'],
      ['Double · Detail', 'Which two courses must Tanya enroll in this Spring term?', ['LOG-203 Port Automation and LOG-210 Customs Compliance', 'LOG-108 Business Ethics and LOG-203 Port Automation', 'LOG-112 Demand Forecasting and LOG-207 Rail Routing', 'LOG-104 Cold-Chain Storage and LOG-210 Customs Compliance'], 0, 'ตอบ LOG-203 Port Automation and LOG-210 Customs Compliance (เหลือวิชาเลือก 2 ตัวที่เปิดภาคฤดูใบไม้ผลิพอดี)'],
      ['Double · Detail', 'What minimum course grade is necessary to count toward the certificate?', ['B or better', 'C or higher', 'Pass/Fail credit only', 'A-minus average'], 0, 'ตอบ B or better (ข้อกำหนดระบุต้องได้เกรด B ขึ้นไปทุกวิชา)'],
      ['Double · Detail', 'By what deadline must transfer waiver applications be approved?', ['April 1', 'February 19', 'May 18', 'July 1'], 0, 'ตอบ April 1 (ต้องได้รับอนุมัติโอนหน่วยกิตก่อนวันที่ 1 เมษายน)'],
    ]),

    p7(24, 'm24-t1', [
      doc('notice', 'Lumina Artisan Bakery — Wholesale Butter Croissant Price Schedule', null, [
        tbl(
          ['Weekly Carton Volume (24 pastries/carton)', 'Price Per Carton', 'Sunday Delivery Fee'],
          [
            ['Tier A: 10–39 Cartons / Week', '$38.00 / carton', '$25.00 Sunday Surcharge'],
            ['Tier B: 40–59 Cartons / Week', '$34.00 / carton', '$25.00 Sunday Surcharge'],
            ['Tier C: 60+ Cartons / Week', '$30.00 / carton', 'Free Sunday Delivery ($0)'],
          ]
        ),
        'Schedule rule: Tier discounts automatically adjust on Sunday invoices based on combined Monday–Sunday weekly carton totals.',
      ]),
      doc('form', 'STANDING WEEKLY ORDER — HarborBean Café Group (3 Locations)',
        [['Account', '#HBC-19'], ['Current Mon–Sat Schedule', '48 Cartons total across weekdays (8 cartons/day × 6 days)']],
        [
          lst([
            'Previous Sunday Order: None (Closed Sunday until this weekend).',
            'Billing Note: Cold-cultured Normandy butter batches require 48-hour dough lamination advance notice for weekend bumps.',
          ]),
        ]),
      doc('email', 'Wholesale Order Modification',
        [['To', 'wholesale@luminabakery.com'], ['From', 'Owen Diaz, HarborBean Purchasing'], ['Date', 'Thursday Morning'], ['Subject', 'Adding Sunday Service — Account #HBC-19']],
        [
          'Hi Lumina Baking Team,',
          'Starting this Sunday (providing 72 hours’ notice), all three HarborBean cafés will open Sunday brunch hours! Please add 16 Croissant Cartons for Sunday morning delivery onto our standing 48-carton Mon–Sat schedule.',
          'Since our combined weekly total climbs to 64 cartons, please confirm both our new per-carton rate across this week’s statement and that Sunday delivery charges drop to zero.',
        ]),
    ], [
      ['Triple · Synthesis', 'Which pricing tier did HarborBean Café Group belong to BEFORE adding Sunday service?', ['Tier B ($34.00 per carton)', 'Tier A ($38.00 per carton)', 'Tier C ($30.00 per carton)', 'Custom Non-Listed Tier'], 0, 'ตอบ Tier B (เดิมสั่งจันทร์–เสาร์รวม 48 ลัง อยู่ในช่วง 40–59 ลัง/สัปดาห์ = Tier B)'],
      ['Triple · Synthesis', 'After adding 16 cartons on Sunday, how much will EACH carton cost across that week’s 64-carton total?', ['$30.00 per carton', '$34.00 per carton', '$38.00 per carton', '$32.00 per carton'], 0, 'ตอบ $30.00 per carton (รวมเป็น 48 + 16 = 64 ลัง ข้ามเกณฑ์ 60+ ลังเข้า Tier C ลดเหลือลังละ $30.00)'],
      ['Triple · Math', 'Calculate HarborBean’s TOTAL wholesale bill for that 64-carton week (including Sunday delivery):', ['$1,920.00 (64 × $30 + $0 Sunday delivery)', '$1,945.00 (64 × $30 + $25 Sunday delivery)', '$2,176.00 (64 × $34 + $0 Sunday delivery)', '$2,201.00 (64 × $34 + $25 Sunday delivery)'], 0, 'ตอบ $1,920.00 (64 × $30 = $1,920 และระดับ Tier C ฟรีค่าส่งวันอาทิตย์ $0)'],
      ['Triple · Detail', 'Why does Owen mention providing 72 hours’ notice on Thursday morning?', ['It meets the 48-hour lamination lead time needed for cold-cultured dough', 'Sunday wholesale invoices double for requests under 72 hours', 'Lumina Bakery shuts down weekday ovens after Thursday noon', 'HarborBean requires written board permission three days before brunch'], 0, 'ตอบ It meets the 48-hour lamination lead time needed for cold-cultured dough (แบบฟอร์มระบุต้องแจ้งล่วงหน้า 48 ชม. สำหรับยอดเพิ่มสุดสัปดาห์)'],
      ['Triple · Inference', 'How much total fee did HarborBean avoid on Sunday delivery specifically by crossing from Tier B into Tier C?', ['$25.00', '$34.00', '$64.00', '$16.00'], 0, 'ตอบ $25.00 (ตารางระบุว่า Tier A/B เสียค่าส่งวันอาทิตย์ $25 ส่วน Tier C 60+ ลังฟรี)'],
    ]),

    p7(24, 'm24-t2', [
      doc('notice', 'Rivergate Documentary Film Festival — Pass Benefits', null, [
        tbl(
          ['Pass Tier', 'Included Screenings', 'Priority Seating Cutoff', 'Opening Gala Mixer'],
          [
            ['Cinephile Weekend ($95)', 'Up to 6 Films', 'General Line Only', 'Not Included'],
            ['Director All-Access ($185)', 'Unlimited Films', 'Priority Door closes 15 min pre-curtain', 'Included Free'],
          ]
        ),
        'Important: Priority Door lanes hold seats strictly until 15 minutes before listed showtime; any remaining Priority seats release to Standby ticket holders thereafter.',
      ]),
      doc('memo', 'FESTIVAL SCREENING VENUE UPDATE',
        [['Posted', 'Friday 11:00 A.M.'], ['Affected Title', 'Saturday 7:30 P.M. Screening — "Harbor Light"']],
        [
          'Due to DCP projector lamp calibration issues at Bijou Screen 2, Saturday’s 7:30 P.M. premiere of "Harbor Light" has moved two blocks north to Grand Palace Main Hall. All existing pass reservations remain valid.',
          'Please also note Q&A director remarks will run 20 minutes extra after closing credits.',
        ]),
      doc('email', 'Passholder Group Itinerary E-mail',
        [['To', 'rachel.cho@mail.org; sam.patel@mail.org'], ['From', 'Nolan Reyes'], ['Date', 'Friday 4:30 P.M.'], ['Subject', 'Tomorrow Night’s Festival Plan']],
        [
          'Hey Rachel & Sam,',
          'I picked up all three Director All-Access badges at Will Call today! For tomorrow’s 7:30 P.M. "Harbor Light" premiere, let’s meet outside our updated theater at 7:05 P.M. sharp so we walk straight through the Priority Door before our guaranteed window shuts.',
          'Afterward, let’s stick around for the extended Q&A and still make it over to the Opening Gala Mixer at 10:15 P.M.!',
        ]),
    ], [
      ['Triple · Synthesis', 'Where should Nolan, Rachel, and Sam meet at 7:05 P.M. Saturday?', ['Grand Palace Main Hall', 'Bijou Screen 2', 'Festival Will Call Desk', 'Cinephile General Gate'], 0, 'ตอบ Grand Palace Main Hall (ประกาศวันศุกร์ 11:00 น. ย้ายเรื่อง Harbor Light รอบ 19:30 น. จาก Bijou Screen 2 ไป Grand Palace Main Hall)'],
      ['Triple · Detail', 'Why was the Saturday evening screening of "Harbor Light" moved to another venue?', ['A digital cinema projector lamp required calibration at Bijou Screen 2', 'Standby ticket lines exceeded fire seating limits', 'Director Q&A audio speakers failed Thursday night', 'Grand Palace Main Hall hosted the earlier Opening Gala Mixer'], 0, 'ตอบ A digital cinema projector lamp required calibration at Bijou Screen 2 (เกิดปัญหาปรับตั้งหลอดไฟเครื่องฉาย DCP ที่ Bijou Screen 2)'],
      ['Triple · Synthesis', 'Why does Nolan insist on arriving by 7:05 P.M. for a 7:30 P.M. show?', ['Their Director Priority entrance closes at 7:15 P.M. (15 minutes before showtime)', 'Badges are distributed only outside theater doors at 7:05 P.M.', 'The Opening Gala Mixer awards door prizes at 7:10 P.M.', 'Extended Q&A remarks begin fifteen minutes before the film rolls'], 0, 'ตอบ Their Director Priority entrance closes at 7:15 P.M. (เลนเข้าชมพิเศษ Priority Door ปิดรับก่อนเวลาฉาย 15 นาที คือ 19:15 น.)'],
      ['Triple · Detail', 'Which perk do Nolan’s badges grant that Cinephile Weekend holders must skip?', ['Admission to the Opening Gala Mixer', 'Priority Standby line seating five minutes prior', 'Unlimited popcorn refills at Grand Palace Main Hall', 'Reserving guest passes without an access fee'], 0, 'ตอบ Admission to the Opening Gala Mixer (ตารางระบุว่าบัตร Director All-Access รวมบัตรเข้า Opening Gala Mixer ฟรี ส่วน Weekend ไม่รวม)'],
      ['Triple · Detail', 'How long will the post-film director Q&A run beyond the credits?', ['Twenty minutes extra', 'Fifteen minutes', 'Ten minutes', 'Until 10:15 P.M.'], 0, 'ตอบ Twenty minutes extra (ประกาศระบุว่า Q&A หลังจบเครดิตจะใช้เวลาเพิ่ม 20 นาที)'],
    ]),

    p7(24, 'm24-t3', [
      doc('notice', 'SunCrest Solar — Residential Carport & Net-Metering Policy Summary', null, [
        lst([
          'Rollover Credits: Monthly surplus solar kWh exported to CrestGrid Utility roll forward automatically at 1-to-1 kilowatt credits across billing cycles through February.',
          'Annual Cash-Out: Each March, accumulated unused solar balances above 100 kWh settle automatically at wholesale $0.045 per kWh via check or bill credit.',
          'Battery Compatibility Warning: Adding third-party DC backup batteries disqualifies accounts installed before 2023 from retaining Legacy Tier-1 1-to-1 utility rollover rates (switching accounts immediately onto Tier-2 50% export credits).',
        ]),
      ]),
      doc('invoice', 'CRESTGRID UTILITY ANNUAL SUMMARY — Account #CG-5510 (Hannah Sato)',
        [['System Installed', 'November 2021 (Legacy Tier-1)'], ['March Settlement Statement', 'Accumulated Surplus: 1,100 Unused kWh']],
        [
          tbl(
            ['Line Item', 'Quantity', 'Rate', 'Credit'],
            [
              ['March Annual Cash-Out Settlement', '1,000 kWh (Balance > 100 kWh)', '$0.045 / kWh', '$45.00 Check Issued'],
              ['Carried Reserve Buffer (Floor)', '100 kWh retained', 'Non-cash kWh bank', 'Remains in Account'],
            ]
          ),
        ]),
      doc('email', 'E-mail Inquiry',
        [['To', 'advisors@suncrestsolar.com'], ['From', 'Hannah Sato (#CG-5510)'], ['Subject', 'Adding Garage Battery Backup This Spring?']],
        [
          'Hi SunCrest Team,',
          'Thank you for helping verify my March utility summary! That $45.00 check just cleared nicely. Before committing $6,400 toward a third-party lithium garage battery unit next month, I want to double-check our 2021 system rules.',
          'Would wiring an aftermarket battery bank keep my current 1-to-1 monthly credit rollover intact, or drop me into a lower utility export bracket? Also, why did CrestGrid hold back 100 kWh on the March settlement table?',
        ]),
    ], [
      ['Triple · Synthesis', 'What will happen to Hannah Sato’s utility export rate if she installs a third-party battery next month?', ['She will lose Legacy Tier-1 1-to-1 rates and shift to Tier-2 50% credits', 'She will earn double wholesale cash-out rates in March', 'CrestGrid will disconnect her 2021 solar carport from the grid', 'She will retain Tier-1 status because her system dates from 2021'], 0, 'ตอบ She will lose Legacy Tier-1 1-to-1 rates and shift to Tier-2 50% credits (ระบบเธอติดตั้งปี 2021 ซึ่งก่อนปี 2023 หากติดแบตฯ นอกค่ายจะหลุดจาก Tier-1 ไป Tier-2 ทันที)'],
      ['Triple · Detail', 'Why did CrestGrid pay out only 1,000 kWh out of Hannah’s 1,100 unused kWh in March?', ['Only surplus balances above a 100 kWh minimum floor cash out', 'Ten percent went toward mandatory municipal grid fees', 'Battery testing consumed 100 kWh during February outages', 'Tier-1 systems cap annual payments strictly at $45.00'], 0, 'ตอบ Only surplus balances above a 100 kWh minimum floor cash out (นโยบายระบุจ่ายเป็นเงินสดเฉพาะส่วนที่เกิน 100 kWh จึงหักสำรองไว้ 100 kWh เหลือคิดเงิน 1,000 kWh)'],
      ['Triple · Math', 'If Hannah loses Tier-1 status and generates 800 surplus monthly kWh next June, how many export kWh credits would she earn under Tier-2?', ['400 kWh credits (50% Tier-2 export rate)', '800 kWh credits', '100 kWh credits', '700 kWh credits'], 0, 'ตอบ 400 kWh credits (นโยบายระบุว่า Tier-2 ได้เครดิตส่งออกแค่ 50% -> 50% ของ 800 = 400 kWh)'],
      ['Triple · Detail', 'How was Hannah’s $45.00 March settlement delivered?', ['By a mailed or issued check for $45.00', 'Through an automated garage battery rebate', 'Deducted from her $6,400 hardware deposit', 'Converted back into February carport usage'], 0, 'ตอบ By a mailed or issued check for $45.00 (ใบสรุประบุว่า $45.00 Check Issued และเธอก็บอกว่าเช็กขึ้นเงินแล้ว)'],
      ['Triple · Detail', 'In which month does CrestGrid settle unused surplus balances exceeding 100 kWh?', ['March', 'February', 'November', 'June'], 0, 'ตอบ March (สรุปรายปีและจ่ายคืนส่วนเกินทำทุกเดือนมีนาคม)'],
    ]),

    // ==================== SET 25 ====================
    p7(25, 'm25-s1', [
      doc('chat', 'Text Message Chain · SavorySpoon Catering', null, [
        chat([
          ['Tessa Brooks', '10:35 A.M.', 'Jorge, did our prep kitchen pack forty gel fuel cans inside the steel chafing crates for the City Library luncheon?'],
          ['Jorge Ortiz', '10:39 A.M.', 'I checked Crate 1 and Crate 2 at Loading Dock A—only stainless water pans and ladles are inside. Zero fuel tins.'],
          ['Tessa Brooks', '10:42 A.M.', 'Stop by Annex Storeroom Door B before leaving the block. Spare heating cans sit on Shelf 4 in labeled blue totes.'],
          ['Jorge Ortiz', '10:46 A.M.', 'Grabbing two blue totes from Shelf 4 now—count checks out at forty-eight cans, more than enough until 3:00 P.M.'],
        ]),
      ]),
    ], [
      ['Single · Problem', 'What items were missing when Jorge inspected the chafing crates at Loading Dock A?', ['Gel fuel cans needed for food warmers', 'Stainless steel water pans and soup ladles', 'Serving trays reserved for library tables', 'Spare keycards for Annex Storeroom Door B'], 0, 'ตอบ Gel fuel cans needed for food warmers (เปิดลัง #1 และ #2 เจอแค่ถาดน้ำกับทัพพี แต่ไม่มีกระป๋องเชื้อเพลิงอุ่นอาหาร)'],
      ['Single · Detail', 'Where did Jorge collect replacement heating supplies?', ['From Shelf 4 inside Annex Storeroom Door B', 'At the City Library front reception office', 'Beside Loading Dock A fuel racks', 'From the SavorySpoon main delivery truck'], 0, 'ตอบ From Shelf 4 inside Annex Storeroom Door B (Tessa บอกให้แวะหยิบลังสีน้ำเงินบนชั้น 4 ของห้องเก็บของเสริม Door B)'],
    ]),

    p7(25, 'm25-s2', [
      doc('memo', 'BUILDING MANAGEMENT NOTICE',
        [['To', 'All Tenants — Commerce Square'], ['From', 'Facility Engineering'], ['Subject', 'West Freight Lift #2 Scheduled Inspection — Wednesday']],
        [
          'Technicians from Horizon Elevator will replace steel hoist cables in West Freight Lift #2 this Wednesday from 7:00 A.M. to 1:00 P.M. During that six-hour service window, heavy crate dollies and commercial pallet jacks cannot access upper suites.',
          'Please hold oversized furniture or paper-pallet deliveries until 1:15 P.M. Out of concern for carpeted lobbies and door jambs, building security prohibits rolling hand trucks inside East Passenger Elevators at all hours.',
        ]),
    ], [
      ['Single · Purpose', 'What is the main topic of the notice?', ['A six-hour morning outage affecting freight elevator deliveries', 'Carpet replacement work inside East Passenger Elevators', 'Security badge upgrades required for delivery drivers', 'Permanent limits on upper-suite paper storage deliveries'], 0, 'ตอบ A six-hour morning outage affecting freight elevator deliveries (ลิฟต์ขนของ West Freight Lift #2 ปิดตรวจซ่อมวันพุธ 07:00–13:00 น.)'],
      ['Single · Detail', 'Why may tenants not move pallet carts through East Passenger Elevators instead?', ['Building security bans cargo dollies inside passenger lifts to protect interiors', 'East Passenger Elevators remain shut down until 1:15 P.M.', 'Horizon Elevator technicians are inspecting East Lift cables concurrently', 'East Lobby doors are too narrow for commercial delivery trucks'], 0, 'ตอบ Building security bans cargo dollies inside passenger lifts to protect interiors (ฝ่ายอาคารห้ามนำรถเข็นของเข้าลิฟต์โดยสารทุกเวลา เพื่อป้องกันพรมและกรอบประตู)'],
    ]),

    p7(25, 'm25-s3', [
      doc('review', 'RapidCycle Garage — Customer Review & Shop Reply', null, [
        '★ ★ ★ ★ ☆ — Posted by Derek Patel (Gravel Bike Hydraulic Brake Bleed)',
        'Stopped in Tuesday evening because my rear disc brake lever pulled straight to the handlebar before Thursday’s charity ride. Mechanic Zoe flushed old fluid, replaced worn resin pads, and aligned the rotor caliper in thirty-five minutes! The $45 bleed rate was fair, though adding $22 extra for fresh brake pads slightly surprised me since the service chalkboard outside only listed $45.',
        'Owner Reply (Zoe Morales, Head Mechanic): Thanks for riding with us, Derek! We added clearer pricing brackets below the sidewalk A-frame sign this morning showing pads separately. Don’t forget our 48-hour mineral oil bleed guarantee plus complimentary cable-housing lubrication on every brake tune-up.',
      ]),
    ], [
      ['Single · Detail', 'Why did Derek visit RapidCycle Garage on Tuesday evening?', ['His rear hydraulic brake lever lost pressure and touched the handlebar', 'His bike chain snapped during an outdoor training ride', 'He wanted complimentary tire sealant added before Thursday', 'A sideframe chalkboard advertised half-price brake pad swaps'], 0, 'ตอบ His rear hydraulic brake lever lost pressure and touched the handlebar (ก้านเบรกหลังหลวมกำสุดถึงแฮนด์ ก่อนปั่นงานการกุศลวันพฤหัสฯ)'],
      ['Single · Criticism', 'What aspect of his repair bill surprised Derek?', ['Separate pad replacement charges ($22) were not obvious on the outdoor sign', 'Flushing hydraulic fluid took longer than the promised forty minutes', 'Warranty terms excluded charity bicycle ride wear', 'Cable-housing lubrication cost extra beyond $45'], 0, 'ตอบ Separate pad replacement charges ($22) were not obvious on the outdoor sign (ป้ายกระดานหน้าร้านเขียนแค่ $45 เลยแปลกใจที่โดนคิดค่าผ้าเบรกแยกอีก $22)'],
      ['Single · Detail', 'How did Zoe respond to Derek’s feedback about the price sign?', ['She added pad cost lines beneath the sidewalk board this morning', 'She issued a $22 cash rebate for Tuesday’s repair', 'She extended the fluid guarantee from 48 hours to one year', 'She removed brake service pricing from the outdoor chalkboard'], 0, 'ตอบ She added pad cost lines beneath the sidewalk board this morning (Zoe เพิ่มรายละเอียดค่าผ้าเบรกบนป้ายหน้าร้านแล้วในเช้าวันนี้)'],
    ]),

    p7(25, 'm25-s4', [
      doc('memo', 'ACCOUNTING POLICY UPDATE — TRAVEL & MILEAGE',
        [['Effective Date', 'October 1'], ['Applies To', 'Field Auditors & Regional Sales Reps']],
        [
          'To reflect updated regional fuel benchmarks, personal vehicle business mileage reimburses at $0.68 per kilometer beginning October 1 (up from $0.62). Submit digital odometer logs showing starting and ending trip addresses via TravelPortal before month-end.',
          'Bridge and highway tolls qualify for 100% reimbursement when crisp itemized receipts are attached within 14 calendar days of travel. Note that daily home-to-assigned-office commuting remains excluded from business mileage reimbursement.',
        ]),
    ], [
      ['Single · Detail', 'What new per-kilometer mileage rate begins on October 1?', ['$0.68 per kilometer', '$0.62 per kilometer', '$1.00 per kilometer', '$0.14 per kilometer'], 0, 'ตอบ $0.68 per kilometer (ปรับเพิ่มจาก $0.62 เป็น $0.68 ต่อกิโลเมตร เริ่ม 1 ต.ค.)'],
      ['Single · Condition', 'What must employees provide to get highway bridge tolls reimbursed?', ['Readable itemized receipts uploaded within 14 days of the trip', 'Written pre-approval signed by Regional Sales managers', 'Photo verification of fuel pump totals taken before leaving town', 'Quarterly odometer summaries mailed directly to Accounting'], 0, 'ตอบ Readable itemized receipts uploaded within 14 days of the trip (แนบใบเสร็จรายการค่าทางด่วนที่ชัดเจนภายใน 14 วันนับจากวันเดินทาง)'],
      ['Single · Exclusion', 'Which vehicle trip does company mileage policy refuse to pay?', ['Regular travel between an employee’s home and main office', 'Cross-town client visits between regional sales branches', 'Detours across tolled bridges by field auditors', 'Monthly customer site audits exceeding 100 kilometers'], 0, 'ตอบ Regular travel between an employee’s home and main office (การเดินทางไป-กลับประจำวันระหว่างบ้านกับออฟฟิศต้นสังกัดเบิกไม่ได้)'],
    ]),

    p7(25, 'm25-s5', [
      doc('ad', 'POSITION ANNOUNCEMENT — Heritage Maritime Pavilion', null, [
        'Title: Bilingual Curatorial Research Assistant (9-Month Contract — Full-Time)',
        'Our coastal museum recently acquired 140 leather-bound Portuguese merchant shipping ledgers dating from 1842 to 1889. We seek a research assistant fluent in written Portuguese and English to index cargo manifests, transcribe ship captains’ marginalia, and tag port routes inside our public online archive.',
        'Qualifications: Master’s student or graduate in History, Archival Studies, or Iberian Linguistics. Careful handling training—including museum-approved nitrile archival glove certification—is completed paid on-site during Orientation Week. Submit CV and a two-paragraph sample English translation from any 19th-century historical excerpt at heritagemaritime.org/jobs.',
      ]),
    ], [
      ['Single · Purpose', 'What main task will the hired assistant carry out for nine months?', ['Translating and indexing historic Portuguese cargo ship ledgers into an archive', 'Guiding school tours aboard restored 19th-century wooden sailing vessels', 'Negotiating shipping contracts with maritime freight museum donors', 'Restoring torn book bindings inside an offsite conservation warehouse'], 0, 'ตอบ Translating and indexing historic Portuguese cargo ship ledgers into an archive (แปลและจัดทำดัชนีสมุดบันทึกเดินเรือภาษาโปรตุเกสปี 1842–1889 เข้าระบบออนไลน์)'],
      ['Single · Inference', 'What is true about archival glove certification?', ['Staff earn it during paid orientation rather than holding it beforehand', 'Applicants must attach an existing certificate to their CV', 'Only external preservation contractors wear nitrile gloves', 'Volunteer docents receive priority over paid contract researchers'], 0, 'ตอบ Staff earn it during paid orientation rather than holding it beforehand (ระบุว่ามีอบรมและรับรองให้แบบได้ค่าจ้างในสัปดาห์ปฐมนิเทศ)'],
      ['Single · Detail', 'Besides a curriculum vitae, what must candidates send when applying?', ['A short two-paragraph translation sample from a historical text', 'Letters of recommendation from two maritime curators', 'Copies of college transcripts in Iberian linguistics', 'Audio recordings demonstrating spoken Portuguese fluency'], 0, 'ตอบ A short two-paragraph translation sample from a historical text (ส่ง CV พร้อมตัวอย่างงานแปลภาษาอังกฤษ 2 ย่อหน้า)'],
    ]),

    p7(25, 'm25-s6', [
      doc('notice', 'PRESS RELEASE — AquaPure Launches Low-Energy Desalination Plant', null, [
        'PORT MORROW — Municipal water engineers flipped the intake valves Tuesday on a modular brackish-water treatment station engineered by AquaPure Tech.',
        'Unlike coastal mega-plants boiling millions of liters of seawater, AquaPure’s compact unit taps lightly salty inland aquifers beneath Port Morrow using rotary ceramic pressure-exchange tubes. Early flow metering confirms 32% lower electrical draw per thousand liters than reverse-osmosis trailers previously leased by the city, supplying sweet irrigation water straight to four municipal seedling greenhouses.',
      ]),
    ], [
      ['Single · Detail', 'Where does the new AquaPure unit draw its raw water supply?', ['From slightly salty underground inland aquifers', 'Directly from deep offshore ocean intakes', 'From treated rainwater collected off greenhouse roofs', 'From leased municipal reverse-osmosis tankers'], 0, 'ตอบ From slightly salty underground inland aquifers (สูบน้ำกร่อยใต้ดินจากชั้นน้ำบาดาลในแผ่นดินของ Port Morrow)'],
      ['Single · Detail', 'How much less electricity does the AquaPure station consume compared to previously leased trailers?', ['32 percent less per thousand liters', '40 percent less per greenhouse harvest', 'Half the peak summer diesel output', 'Exactly 10 percent lower grid demand'], 0, 'ตอบ 32 percent less per thousand liters (ใช้ไฟฟ้าน้อยลง 32% ต่อน้ำหนึ่งพันลิตรเทียบกับระบบเช่าเดิม)'],
      ['Single · Detail', 'Where is the freshly treated water currently routed?', ['To four city-run plant seedling greenhouses', 'To residential drinking fountains across downtown schools', 'To commercial textile dye factories along Highway 4', 'To harbor cooling towers for coastal power turbines'], 0, 'ตอบ To four city-run plant seedling greenhouses (ส่งน้ำจืดไปยังเรือนเพาะชำกล้าไม้ของเทศบาลทั้ง 4 แห่ง)'],
    ]),

    p7(25, 'm25-s7', [
      doc('article', 'Smart Cold-Food Lockers Ease Lobby Parcel Pileups in Apartment Towers', null, [
        'URBAN PROPERTY JOURNAL — Five years ago, towering piles of crushed cardboard boxes blocked building foyers every December; now meal-kit crates and chilled grocery bags pose an equally perishable headache for concierge desks.',
        '[1] Responding to resident complaints about souring milk cartons left near warm mailroom radiators, residential manager ClearView Towers retrofitted twelve apartment lobbies with dual-zone chilled parcel lockers kept steadily at 3°C. [2] Delivery drivers tap a single-use courier code on the kiosk screen to unlock an empty refrigerated bay without waiting for front-desk signatures.',
        '[3] Residents immediately receive a smartphone QR badge and have 72 hours to collect chilled groceries before sanitation staff clear uncollected perishables. [4] Across six buildings surveyed since spring, damaged-food reimbursement claims fell 81% while evening concierge overtime dropped nearly in half.',
      ]),
    ], [
      ['Single · Problem', 'Why did ClearView Towers replace open mailroom tables with dual-zone lockers?', ['Perishable grocery deliveries spoiled while sitting near warm lobbies', 'Postal couriers refused to carry cardboard boxes past front concierges', 'Evening security desks could no longer log tracking signatures manually', 'Dry parcel thieves routinely bypassed residential smartphone locks'], 0, 'ตอบ Perishable grocery deliveries spoiled while sitting near warm lobbies (นมและของสดจากชุดอาหารเดลิเวอรีเสียเมื่อวางทิ้งไว้ข้างหม้อน้ำล็อบบี้)'],
      ['Single · Detail', 'How long may a resident leave a chilled food delivery inside a locker before cleanup?', ['Seventy-two hours', 'Twelve hours', 'Twenty-four hours', 'Until December'], 0, 'ตอบ Seventy-two hours (มีเวลา 72 ชม. ในการลงมารับ ก่อนเจ้าหน้าที่สุขาภิบาลจะเคลียร์ของสดค้างตู้)'],
      ['Single · Benefit', 'What measurable result followed installation across six surveyed buildings?', ['Reimbursement claims for spoiled items fell 81 percent', 'Parcel deliveries doubled during December holidays', 'Residents stopped ordering chilled meal kits online', 'Lobby radiator electricity bills declined by half'], 0, 'ตอบ Reimbursement claims for spoiled items fell 81 percent (คำร้องเคลมอาหารเสียหายลดลงถึง 81% และลดโอทีพนักงานต้อนรับเกือบครึ่ง)'],
      ['Single · Insertion', 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n"As soon as the heavy insulated compartment clicks shut, automated billing sensors log the drop-off time."', ['[1]', '[2]', '[3]', '[4]'], 2, 'ตอบ [3] (อ้างถึงเหตุการณ์ต่อเนื่องทันทีหลังพนักงานส่งของปิดตู้แช่เย็นที่กล่าวในประโยคก่อนหน้า [3] ก่อนจะส่ง QR ให้ลูกบ้านมารับภายใน 72 ชม.)'],
    ]),

    p7(25, 'm25-s8', [
      doc('memo', 'OPTICS LAB BULLETIN — SUMMER HIGH-SCHOOL FELLOWSHIPS',
        [['Program Window', 'June 16 – August 8 (8 Weeks)'], ['Audience', 'Engineering Department Mentors']],
        [
          '[1] Applications closed Friday for NorthStar Photonics’ annual Summer Science Fellowship, placing twelve local high-school seniors alongside senior optical engineers inside Assembly Bay 3. [2] Students work 30 hours weekly assembling laser mirrors and earn a biweekly $750 educational stipend distributed every second Friday.',
          '[3] Each mentor commits four scheduled coaching hours weekly to review experimental notebooks and safety checklists. [4] Concluding the program on August 8, mentors and visiting university faculty vote anonymously to award two $1,500 college book scholarships based on the students’ final Symposium Poster Showcases.',
        ]),
    ], [
      ['Single · Detail', 'How often do summer student fellows receive their $750 stipend?', ['Every two weeks on Fridays', 'Once at the end of August 8', 'Weekly upon finishing thirty lab hours', 'Monthly after notebook reviews'], 0, 'ตอบ Every two weeks on Fridays (ระบุว่าจ่ายทุก 2 สัปดาห์ = biweekly ในวันศุกร์เว้นศุกร์)'],
      ['Single · Detail', 'How many weekly hours must mentor engineers spend coaching their students?', ['Four hours', 'Thirty hours', 'Eight hours', 'Twelve hours'], 0, 'ตอบ Four hours (วิศวกรพี่เลี้ยงต้องจัดเวลาสอนและตรวจสมุดบันทึกสัปดาห์ละ 4 ชั่วโมง)'],
      ['Single · Inference', 'How are recipients selected for the two $1,500 book scholarships?', ['Engineers and guest academics cast anonymous ballots after final poster talks', 'Human Resources picks the students logging the earliest Friday arrival times', 'Students vote among peers inside Assembly Bay 3 on June 16', 'Top scores on initial optical safety checklists decide winners automatically'], 0, 'ตอบ Engineers and guest academics cast anonymous ballots after final poster talks (พี่เลี้ยงและอาจารย์รับเชิญลงคะแนนแบบลับหลังดูโปสเตอร์ผลงานวันที่ 8 ส.ค.)'],
      ['Single · Insertion', 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n"Direct-deposit tax forms must be uploaded by June 10 so payroll clears the opening payment cycle."', ['[1]', '[2]', '[3]', '[4]'], 2, 'ตอบ [3] (อ้างถึงขั้นตอนการจ่ายค่าตอบแทน stipend รอบแรก ต่อเนื่องจากประโยคเรื่อง biweekly $750 stipend ในตำแหน่ง [3] ก่อนขึ้นเรื่องภาระงานของพี่เลี้ยงในประโยคถัดไป)'],
    ]),

    p7(25, 'm25-s9', [
      doc('chat', 'Team Messaging Channel · #annual-impact-report', null, [
        chat([
          ['Nina Park (Editorial)', '01:05 P.M.', 'Print shop just confirmed our preferred 100% recycled linen cover stock is back-ordered until June 22—which breaks our June 10 shareholder mailing cutoff.'],
          ['Leo Morales (Design)', '01:08 P.M.', 'Their warehouse has plenty of matte uncoated Silver Birch 120-lb cover right now, and it takes forest-green soy ink wonderfully. Should I swap paper specs?'],
          ['Hannah Cho (Ops)', '01:12 P.M.', 'Wait on final pagination for Section 3: Busan Packaging Plant still has not uploaded October–December municipal water meter totals into the sustainability portal.'],
          ['Omar Al-Mansoor (Busan)', '01:16 P.M.', 'Logging in right now! Utility metering billed Q4 late due to municipal sensor swaps, so I just uploaded the verified CSV ledger (`busan_q4_water.csv`).'],
          ['Nina Park (Editorial)', '01:20 P.M.', 'Received Omar’s CSV! Leo, switch us to Silver Birch cover stock AND skip the custom gold foil cover embossing this year so bindery signs off by Wednesday afternoon.'],
        ]),
      ]),
    ], [
      ['Single · Problem', 'Why can the team NOT use its preferred recycled linen cover stock?', ['Warehouse inventory will not restock in time for the June 10 mailing deadline', 'Forest-green soy ink smears badly across linen cover fibers', 'Print shop managers discontinued matte recycled papers in May', 'Gold foil stamping plates crack uncoated recycled covers'], 0, 'ตอบ Warehouse inventory will not restock in time for the June 10 mailing deadline (กระดาษลินินค้างสต็อกถึง 22 มิ.ย. ไม่ทันกำหนดส่ง 10 มิ.ย.)'],
      ['Single · Detail', 'Why were fourth-quarter water figures from Busan delayed?', ['City utility meter upgrades postponed official billing statements', 'The sustainability portal deleted October CSV sheets accidentally', 'Omar waited for print specifications before reading local sensors', 'Greenhouse consumption totals overlapped with Q3 audits'], 0, 'ตอบ City utility meter upgrades postponed official billing statements (เทศบาลเปลี่ยนเซ็นเซอร์มิเตอร์น้ำ ทำให้บิลไตรมาส 4 ออกช้า)'],
      ['Single · Detail', 'What document did Omar upload at 1:16 P.M.?', ['Verified quarterly water meter records (`busan_q4_water.csv`)', 'Updated foil die-stamp blueprints for Leo’s bindery team', 'A quote for Silver Birch 120-lb uncoated paper covers', 'Shareholder mailing labels for Section 3 distribution'], 0, 'ตอบ Verified quarterly water meter records (`busan_q4_water.csv`) (อัปโหลดไฟล์ CSV ข้อมูลน้ำไตรมาส 4 ที่ตรวจสอบแล้วเข้าพอร์ทัล)'],
      ['Single · Intention', 'What does Nina mean when she writes, "skip the custom gold foil cover embossing this year"?', ['Drop decorative cover finishing to ensure the book finishes binding by Wednesday', 'Ask shareholders to pay extra fees for limited-edition foil prints', 'Delay embossed cover printing until recycled linen stock arrives June 22', 'Apply gold embossing exclusively to Busan plant summary pages'], 0, 'ตอบ Drop decorative cover finishing to ensure the book finishes binding by Wednesday (ตัดขั้นตอนปั๊มฟอยล์ทองออกเพื่อให้งานเข้าเล่มเสร็จทันเย็นวันพุธ)'],
      ['Single · Detail', 'Which alternative cover material did Leo propose?', ['Silver Birch matte uncoated cardstock', 'Recycled blue cotton archival paper', 'Glossy coated poster board', 'Laminated plastic spiral binding'], 0, 'ตอบ Silver Birch matte uncoated cardstock (Leo เสนอใช้กระดาษ Silver Birch 120-lb ที่มีสต็อกพร้อมและซึมซับหมึกถั่วเหลืองสีเขียวได้ดี)'],
    ]),

    p7(25, 'm25-d1', [
      doc('ad', 'MedTech West Expo — Exhibitor Sponsorship Packages', null, [
        tbl(
          ['Tier', 'Floor Footprint', 'Standard Price', 'Early-Bird Price (Paid by Mar 15)', 'Corner Booth Add-On'],
          [
            ['Silver Booth', '3m × 3m (9 sqm)', '$3,200', '$2,800', '+$450 (2-Side Aisle Access)'],
            ['Gold Pavilion', '6m × 3m (18 sqm)', '$5,600', '$4,950', 'Included Free ($0)'],
          ]
        ),
        'Print Deadline: Vector exhibition logos (.SVG or .EPS) due by April 10 for overhead aisle banner printing.',
      ]),
      doc('email', 'Exhibitor Reservation E-mail',
        [['To', 'exhibitors@medtechwest.org'], ['From', 'Claire Brooks, VeloDiagnostics'], ['Date', 'March 11'], ['Subject', 'Exhibitor Space Invoice Request']],
        [
          'Hello MedTech West Sales,',
          'VeloDiagnostics would like to exhibit again this May in a single 3m × 3m Silver Booth facing two open walkways (please include the Corner Booth open-aisle upgrade).',
          'Because we are ready to pay today via corporate credit card on March 11, please issue a single early-bird invoice showing our qualifying discounted booth total. Our marketing designer will email our .EPS logo next week ahead of your April deadline.',
        ]),
    ], [
      ['Double · Synthesis', 'Does VeloDiagnostics qualify for early-bird pricing?', ['Yes—the March 11 email precedes the March 15 deadline', 'No—Silver Corner upgrades exclude early-bird savings', 'Only if the company switches to a Gold Pavilion booth', 'Only if logos arrive before March 15 as well'], 0, 'ตอบ Yes—the March 11 email precedes the March 15 deadline (Claire ขอชำระวันที่ 11 มี.ค. ทันกำหนด Early-Bird วันที่ 15 มี.ค.)'],
      ['Double · Math', 'Calculate VeloDiagnostics’ EXACT early-bird Silver invoice total WITH the Corner Booth Add-On:', ['$3,250 ($2,800 booth + $450 corner add-on)', '$3,650 ($3,200 booth + $450 corner add-on)', '$2,800 ($2,800 booth; corner waived)', '$4,950 (Gold Pavilion early-bird)'], 0, 'ตอบ $3,250 (ราคา Early-Bird Silver $2,800 + ค่าอัปเกรดบูธหัวมุม 2 ด้าน $450 = $3,250)'],
      ['Double · Detail', 'Why does Gold Pavilion list "$0" for the Corner Booth Add-On?', ['Two-side aisle positioning comes built into Gold Pavilion fees', 'Gold booths sit exclusively along rear perimeter walls', 'Corner access is prohibited on 6m × 3m pavilions', 'Sponsors must request corner access only after April 10'], 0, 'ตอบ Two-side aisle positioning comes built into Gold Pavilion fees (ตารางระบุว่าแพ็กเกจ Gold รวมมุมเปิด 2 ด้านให้ฟรีแล้ว)'],
      ['Double · Detail', 'What graphic file formats are accepted for overhead banner printing?', ['.SVG or .EPS vector files', 'High-resolution .JPG photos only', 'Microsoft Word header templates', 'Scanned physical booth brochures'], 0, 'ตอบ .SVG or .EPS vector files (ข้อกำหนดระบุต้องส่งไฟล์โลโก้แบบ Vector นามสกุล .SVG หรือ .EPS ภายใน 10 เม.ย.)'],
      ['Double · Inference', 'When will VeloDiagnostics submit its overhead aisle banner artwork?', ['Before April 10, sometime next week', 'Attached directly inside the March 11 inquiry', 'At booth setup check-in on opening day', 'After May expo doors close'], 0, 'ตอบ Before April 10, sometime next week (Claire แจ้งว่าดีไซเนอร์จะส่งไฟล์ .EPS สัปดาห์หน้าซึ่งทันเดดไลน์ 10 เม.ย.)'],
    ]),

    p7(25, 'm25-d2', [
      doc('notice', 'Zenith Brew Systems — Model ZG-500 Grinder 2-Year Limited Warranty', null, [
        lst([
          'Covered Components: Drive motor windings, stainless chassis switches, and thermal overload circuit breakers carry 24-month replacement protection from original purchase date.',
          'Consumables Excluded: Flat steel or ceramic grinding burrs naturally dull during commercial roasting cycles and qualify as excluded wear items ($95 spare pair shipped separately).',
          'Factory Repair Returns: Valid hardware claims within 24 months receive a prepaid UPS Return Shipping Label emailed within 1 business day.',
        ]),
      ]),
      doc('email', 'Warranty Repair Claim E-mail',
        [['To', 'warranty@zenithbrew.com'], ['From', 'Kenji Watanabe, Roost Espresso Bar'], ['Date', 'July 14'], ['Subject', 'Motor Cutoff Issue — Unit Purchased Oct 2024']],
        [
          'Hello Zenith Support,',
          'Nine months ago in October 2024, we purchased a Zenith Model ZG-500 grinder (Serial #ZG-4410, invoice attached). Starting yesterday morning, our hopper motor cuts power completely halfway through busy morning batches even when cool, suggesting a defective thermal overload breaker switch.',
          'While our steel grinding burrs still slice espresso evenly after light morning use, could you email us a prepaid shipping label so your factory bench team can swap the faulty breaker switch? Please also include pricing if we decide to toss a spare $95 burr set onto a separate invoice.',
        ]),
    ], [
      ['Double · Synthesis', 'Is Kenji Watanabe’s thermal overload switch defect eligible for free warranty service?', ['Yes—the grinder is only nine months old inside its 24-month window', 'No—thermal cutoff failures apply strictly to ceramic burr upgrades', 'Only after paying a return diagnostic bench fee', 'No—warranty coverage applies solely to residential buyers'], 0, 'ตอบ Yes—the grinder is only nine months old inside its 24-month window (ซื้อเมื่อ ต.ค. 2024 ผ่านมาเพียง 9 เดือน ยังอยู่ในประกัน 24 เดือน และสวิตช์ตัดความร้อนเป็นชิ้นส่วนที่รับประกัน)'],
      ['Double · Detail', 'Why does Zenith NOT replace dull grinding burrs for free under this policy?', ['Grinding burrs count as normal consumable wear parts excluded from coverage', 'Zenith stopped stocking replacement steel burrs after October 2024', 'Warranty rules cover electronics only during the initial six months', 'Espresso shops must clean burrs daily with compressed air'], 0, 'ตอบ Grinding burrs count as normal consumable wear parts excluded from coverage (ใบมีดบดจัดเป็นชิ้นส่วนสึกหรอตามการใช้งาน ไม่รวมในประกัน)'],
      ['Double · Inference', 'What will Kenji receive via email within one business day after submitting a valid warranty claim?', ['A prepaid UPS shipping label for factory return', 'A free spare pair of ceramic espresso burrs', 'Refund cash matching the October 2024 invoice total', 'Instructions to swap electrical wiring inside the cafe'], 0, 'ตอบ A prepaid UPS shipping label for factory return (นโยบายระบุจะส่งป้ายส่งคืน UPS แบบชำระเงินล่วงหน้าให้ใน 1 วันทำการ)'],
      ['Double · Detail', 'How long has Roost Espresso Bar owned grinder Serial #ZG-4410?', ['About nine months', 'Two full years', 'Six weeks', 'Three business days'], 0, 'ตอบ About nine months (Kenji ระบุว่าซื้อเมื่อเก้าเดือนก่อนในเดือนตุลาคม 2024)'],
      ['Double · Detail', 'What does Kenji ask Zenith Support to send alongside his repair confirmation?', ['Separate pricing to order an optional spare burr set', 'Two new hopper lids for morning batch sorting', 'Extended thermal calibration certificates for baristas', 'Local Seattle repair shop phone numbers'], 0, 'ตอบ Separate pricing to order an optional spare burr set (สอบถามราคาหากอยากสั่งชุดใบมีดสำรอง $95 แยกอีกบิลไปด้วยเลย)'],
    ]),

    p7(25, 'm25-t1', [
      doc('notice', 'WorkHub Coworking Center — Meeting Suite Rental Tariffs', null, [
        tbl(
          ['Suite Name', 'Capacity', 'Member Rate / Hr', 'Non-Member Rate / Hr'],
          [
            ['Cedar Boardroom', '16 People', '$55 / hr', '$85 / hr'],
            ['Willow Executive Suite', '22 People', '$75 / hr', '$115 / hr'],
            ['Birch Huddle Room', '8 People', '$35 / hr', '$55 / hr'],
          ]
        ),
        'Optional Refreshments: Executive sandwich platters and coffee carafes add a flat $140 catering service charge per booking.',
      ]),
      doc('memo', 'BUILDING RENOVATION SCHEDULE ALERT',
        [['Posted', 'Monday, September 1'], ['Area Affected', 'Cedar Boardroom — Floor 4']],
        [
          'Contractors are installing new sound-dampening wool acoustic wall panels inside Cedar Boardroom September 8–10, closing that suite temporarily.',
          'Any WorkHub Members holding confirmed Cedar bookings during September 8–10 will automatically step up at zero extra hourly cost into the larger Willow Executive Suite (honoring their original Cedar Member hourly rate!).',
        ]),
      doc('email', 'Booking Confirmation & Adjustment E-mail',
        [['To', 'bookings@workhubcenter.com'], ['From', 'David Klein, Klein & Associates (Active Member)'], ['Date', 'September 2'], ['Subject', 'Tuesday September 9 Client Workshop']],
        [
          'Hello WorkHub Front Desk,',
          'We previously confirmed Cedar Boardroom for six continuous hours (9:00 A.M.–3:00 P.M.) next Tuesday, September 9, along with the optional sandwich and coffee catering tray.',
          'Since yesterday’s renovation alert closed Cedar for wall tiling, please confirm our complimentary shift over to Willow Executive Suite under that protected member rate so I can text the room number to fifteen attending partners.',
        ]),
    ], [
      ['Triple · Synthesis', 'Which meeting space will David Klein’s workshop use on Tuesday, September 9?', ['Willow Executive Suite', 'Cedar Boardroom', 'Birch Huddle Room', 'Central Coworking Lounge'], 0, 'ตอบ Willow Executive Suite (Cedar ปิดปรับปรุง 8–10 ก.ย. สมาชิกที่จองไว้จึงได้อัปเกรดฟรีไปห้อง Willow Executive Suite)'],
      ['Triple · Synthesis', 'What HOURLY room rate will David pay during his six-hour reservation on September 9?', ['$55 per hour (protected Cedar Member rate)', '$75 per hour (standard Willow Member rate)', '$85 per hour (Cedar Non-Member rate)', '$115 per hour (Willow Non-Member rate)'], 0, 'ตอบ $55 per hour (ประกาศวันที่ 1 ก.ย. ระบุว่าสมาชิกที่จอง Cedar ช่วง 8–10 ก.ย. จะย้ายไปห้อง Willow โดยคิดเรตเดิมของ Cedar คือ $55/ชม.)'],
      ['Triple · Math', 'Calculate David Klein’s TOTAL invoice for the six-hour meeting INCLUDING the requested coffee and sandwich tray:', ['$470 ($330 room + $140 catering)', '$590 ($450 room + $140 catering)', '$330 ($55 × 6 hrs, catering free)', '$650 ($510 room + $140 catering)'], 0, 'ตอบ $470 (ค่าห้อง 6 ชม. × $55 = $330 + ค่าจัดเลี้ยงเหมาจ่าย $140 = $470)'],
      ['Triple · Detail', 'Why did WorkHub Coworking Center close Cedar Boardroom during September 8–10?', ['Acoustic wool wall panels are being installed inside the room', 'Water damage damaged Floor 4 boardroom carpets', 'Client workshops over sixteen people require double fire exits', 'Audio projector wiring failed inspection'], 0, 'ตอบ Acoustic wool wall panels are being installed inside the room (ติดแผ่นบุผนังซับเสียงขนสัตว์กันเสียงสะท้อนในห้อง Cedar)'],
      ['Triple · Inference', 'Will fifteen partners fit inside the upgraded Willow Executive Suite?', ['Yes—Willow comfortably seats up to 22 people', 'No—Willow holds at most 8 guests', 'Only if Birch Huddle Room overflow partitions open', 'Only half the attendees may stay past lunch'], 0, 'ตอบ Yes—Willow comfortably seats up to 22 people (ห้อง Willow จุได้ถึง 22 คน รองรับผู้ร่วมงาน 15 คนได้สบาย)'],
    ]),

    p7(25, 'm25-t2', [
      doc('notice', 'BrightCoat Manufacturing — Q3 Respirator Fit-Testing Schedule', null, [
        'OSHA workplace regulations require every Paint Booth & Solvent Mixing technician to pass annual Respirator Cartridge Fit Testing by Friday, July 18 at 6:00 P.M.',
        tbl(
          ['Session Option', 'Day & Time Window', 'Location', 'Notes'],
          [
            ['Session A (Morning)', 'Thu, July 17 · 8:00–9:30 A.M.', 'Nurse Station B', 'No clean-shave issues permitted'],
            ['Session B (Afternoon)', 'Fri, July 18 · 1:00–2:30 P.M.', 'Nurse Station B', 'Max 6 workers per session'],
            ['Session C (Makeup)', 'Fri, July 18 · 5:00–5:45 P.M.', 'Nurse Station B', 'For second-shift staff only'],
          ]
        ),
      ]),
      doc('form', 'HR TRAINING COMPLIANCE AUDIT SHEET — Paint & Solvent Unit (As of Wed, July 16)',
        [['Auditor', 'R. Gomez, EHS Specialist'], ['Status Cutoff', 'July 16 · 4:00 P.M.']],
        [
          tbl(
            ['Technician', 'Shift Assignment', 'Last Fit Test Passed', '2025 Status'],
            [
              ['M. Bennett', 'Day Shift (6 A.M.–2:30 P.M.)', 'May 12, 2025', 'Current / Compliant'],
              ['K. Takahashi', 'Day Shift (6 A.M.–2:30 P.M.)', 'July 10, 2024', 'EXPIRING — Action Needed'],
              ['D. Rivera', 'Second Shift (3 P.M.–11 P.M.)', 'June 28, 2024', 'OVERDUE — Action Needed'],
              ['P. Nordin', 'Day Shift (6 A.M.–2:30 P.M.)', 'April 3, 2025', 'Current / Compliant'],
            ]
          ),
        ]),
      doc('email', 'Plant Supervisor Follow-up E-mail',
        [['To', 'ehs-compliance@brightcoat.com'], ['From', 'Gary Lin, Finishing Floor Supervisor'], ['Date', 'Thursday, July 17 · 10:15 A.M.'], ['Subject', 'Final Two Technicians Scheduled for Friday']],
        [
          'Hi R. Gomez,',
          'K. Takahashi missed Session A this morning because our Day Shift spray line needed emergency color matching, so I have booked K. Takahashi straight into Session B (Friday 1:00 P.M.) before Day Shift punches out.',
          'Meanwhile, Second-Shift technician D. Rivera does not arrive until 3:00 P.M. tomorrow—could HR place D. Rivera directly into Friday’s 5:00 P.M. Session C slot so all four Paint Unit workers stand 100% compliant ahead of Monday’s federal OSHA walk-through?',
        ]),
    ], [
      ['Triple · Synthesis', 'Which two workers still needed current Respirator Fit Testing as of Wednesday, July 16?', ['K. Takahashi and D. Rivera', 'M. Bennett and P. Nordin', 'M. Bennett and K. Takahashi', 'D. Rivera and P. Nordin'], 0, 'ตอบ K. Takahashi and D. Rivera (ตาราง HR ระบุว่าคู่นี้สถานะ EXPIRING / OVERDUE ส่วน M. Bennett และ P. Nordin ผ่านปี 2025 แล้ว)'],
      ['Triple · Reason', 'Why did K. Takahashi skip Thursday morning’s Session A slot?', ['Emergency color matching work required attention on the Day Shift spray line', 'Session A reached its maximum capacity of six workers', 'Second-shift workers are prohibited from morning nurse appointments', 'Nurse Station B ran out of fresh respirator test cartridges'], 0, 'ตอบ Emergency color matching work required attention on the Day Shift spray line (Gary แจ้งว่าติดงานเทียบสีด่วนในไลน์พ่นกะเช้า)'],
      ['Triple · Synthesis', 'Which Friday testing session did Supervisor Gary Lin assign to K. Takahashi?', ['Session B (1:00–2:30 P.M.)', 'Session A (8:00–9:30 A.M.)', 'Session C (5:00–5:45 P.M.)', 'Monday morning special session'], 0, 'ตอบ Session B (1:00–2:30 P.M.) (จองให้ K. Takahashi เข้า Session B วันศุกร์บ่ายโมง ก่อนกะเช้าเลิกงาน 14:30 น.)'],
      ['Triple · Synthesis', 'Why is Session C appropriate for D. Rivera?', ['D. Rivera works Second Shift starting at 3:00 P.M. and Session C specifically serves second-shift staff at 5:00 P.M.', 'Session C accommodates facial hair exceptions unavailable earlier', 'D. Rivera missed Session B while assisting Gary Lin on Floor 2', 'Session C waives annual OSHA testing fees for overdue workers'], 0, 'ตอบ D. Rivera works Second Shift starting at 3:00 P.M. and Session C specifically serves second-shift staff at 5:00 P.M. (D. Rivera เข้ากะบ่าย 3 โมงตรงกับรอบซ่อม 17:00 น. สำหรับพนักงานกะสองพอดี)'],
      ['Triple · Inference', 'When will external federal OSHA inspectors tour the BrightCoat factory?', ['Monday (after the Friday 6:00 P.M. compliance cutoff)', 'Wednesday, July 16 at 4:00 P.M.', 'Thursday, July 17 at 8:00 A.M.', 'Friday, July 18 at 1:00 P.M.'], 0, 'ตอบ Monday (Gary ระบุชัดว่าต้องครบ 100% ก่อนผู้ตรวจของ OSHA จะมาเดินตรวจวันจันทร์)'],
    ]),

    p7(25, 'm25-t3', [
      doc('notice', 'Oakridge Conservatory — Weekend Botanical Craft Workshops', null, [
        tbl(
          ['Class Title', 'Session Date & Time', 'Tuition + Glass Kit Fee', 'Cancellation Refund Policy'],
          [
            ['Stained-Glass Fern Terrarium', 'Saturday, May 24 · 1:00–4:00 P.M.', '$110 ($80 tuition + $30 glass kit)', '100% Refund >= 7 days prior'],
            ['Cedar Bonsai Wiring Basics', 'Saturday, May 31 · 10:00 A.M.–1:00 P.M.', '$95 ($65 tuition + $30 pot/wire)', '100% Refund >= 7 days prior'],
          ]
        ),
        'Late Withdrawals: Cancellations received 2–6 days prior refund tuition ONLY (keeping the $30 pre-cut materials fee, though participants may pick up their kit at the Gift Desk). Under 48 hours yields $0 refund.',
      ]),
      doc('invoice', 'CONSERVATORY ENROLLMENT RECEIPT #CR-518',
        [['Student', 'Sandra Cho'], ['Workshop', 'Stained-Glass Fern Terrarium (May 24 · 1:00–4:00 P.M.)'], ['Paid May 5', '$110.00 (Credit Card ending 8421)']],
        [
          'Pre-cut copper-foiled glass panels are ordered by instructors exactly five days before class.',
        ]),
      doc('email', 'E-mail Cancellation Request',
        [['To', 'workshops@oakridgeconservatory.org'], ['From', 'Sandra Cho'], ['Date', 'Thursday, May 15 · 9:10 A.M.'], ['Subject', 'Canceling Receipt #CR-518 (May 24 Terrarium)']],
        [
          'Hello Conservatory Workshops,',
          'I just learned my sister scheduled a surprise family brunch next weekend, so sadly I need to drop out of the Stained-Glass Fern Terrarium workshop set for Saturday, May 24.',
          'Checking my calendar today (May 15—nine days ahead of May 24!), could you refund my May 5 card payment completely back onto card 8421, rather than keeping any glass kit fee?',
        ]),
    ], [
      ['Triple · Synthesis', 'How many days before the May 24 workshop did Sandra Cho send her cancellation e-mail?', ['Nine days before class', 'Five days before class', 'Two days before class', 'Six days before class'], 0, 'ตอบ Nine days before class (เวิร์กช็อป 24 พ.ค. แต่ Sandra ส่งอีเมลยกเลิกวันที่ 15 พ.ค. = ล่วงหน้า 9 วัน)'],
      ['Triple · Math', 'How much total refund should Oakridge Conservatory credit back to Sandra’s card ending 8421?', ['$110.00 (100% full refund including tuition and glass kit)', '$80.00 (tuition only; keeping $30 materials fee)', '$30.00 (materials credit only)', '$0.00 (past 48-hour cutoff)'], 0, 'ตอบ $110.00 (ยกเลิกล่วงหน้า 9 วัน มากกว่าเกณฑ์ 7 วันขึ้นไป จึงได้คืนเต็ม 100% ทั้ง $80 + $30 = $110.00)'],
      ['Triple · Inference', 'Why did instructors NOT lose money cutting glass panels for Sandra’s May 24 spot yet?', ['Glass panels are ordered five days pre-class—four days after Sandra emailed', 'Copper-foiled kits belong to Cedar Bonsai wiring supplies instead', 'Sandra paid cash rather than reserving Gift Desk materials', 'Conservatory instructors recycle unopened kits year-round automatically'], 0, 'ตอบ Glass panels are ordered five days pre-class—four days after Sandra emailed (ผู้สอนสั่งตัดกระจกล่วงหน้า 5 วัน แต่ Sandra ยกเลิกล่วงหน้าถึง 9 วัน จึงยังไม่ถูกสั่งตัด)'],
      ['Triple · Detail', 'When would a workshop student keep only the physical kit without a cash materials refund?', ['When canceling between 2 and 6 days before the session', 'When registering fewer than 48 hours pre-class', 'When paying with corporate credit cards after May 5', 'When switching from Terrarium onto Cedar Bonsai Wiring'], 0, 'ตอบ When canceling between 2 and 6 days before the session (ยกเลิกล่วงหน้า 2–6 วัน คืนแค่ค่าเรียน $80 ไม่คืนค่าอุปกรณ์ $30 แต่รับชุดอุปกรณ์ไปได้)'],
      ['Triple · Detail', 'What workshop takes place the following Saturday morning on May 31?', ['Cedar Bonsai Wiring Basics', 'Stained-Glass Fern Terrarium', 'Herbarium Glass Mounting', 'Orchid Repotting Seminar'], 0, 'ตอบ Cedar Bonsai Wiring Basics (ตารางระบุว่าวันเสาร์ 31 พ.ค. เวลา 10:00–13:00 น. คือคลาส Cedar Bonsai Wiring Basics)'],
    ]),
  ];
})();
if (typeof module !== 'undefined') module.exports = { TOEIC_MOCK_VOL5: globalThis.TOEIC_MOCK_VOLS[5] };



