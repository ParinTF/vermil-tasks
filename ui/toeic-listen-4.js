// Volume 4 of TOEIC Listening Mock Exams (Sets 16-20, 270 tracks = 500 Qs)
globalThis.TOEIC_LISTEN_VOLS = globalThis.TOEIC_LISTEN_VOLS || {};
globalThis.TOEIC_LISTEN_VOLS[4] = (() => {
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
    // ==================== SET 16 ====================
    // Themes: Commercial Real Estate Leasing, Office Property Management, Architectural Acoustic Retrofit
    p1(16, 'l16-p1-1', 'us_m', [
      'Two colleagues are unrolling an architectural floor plan across a conference table.',
      'Builders are demolishing a glass partition inside a corner suite.',
      'A leasing agent is locking the street-level entrance with a brass key.',
      'Stacks of acoustic ceiling tiles are blocking a sunlit hallway.',
    ], 0, 'ตอบ Two colleagues are unrolling an architectural floor plan across a conference table. (คนสองคนกำลังกางแบบแปลนพื้นอาคารลงบนโต๊ะประชุม)'),
    p1(16, 'l16-p1-2', 'uk_f', [
      'A technician is kneeling beside a radiator to tighten brass valves.',
      'Workers are hanging felt acoustic panels onto a conference room wall.',
      'Moving boxes have been piled in front of a freight elevator.',
      'A receptionist is wiping fingerprints off a curved marble counter.',
    ], 1, 'ตอบ Workers are hanging felt acoustic panels onto a conference room wall. (ช่างกำลังติดตั้งแผ่นสักหลาดซับเสียงเข้ากับผนังห้องประชุม)'),
    p1(16, 'l16-p1-3', 'au_m', [
      'Pedestrians are waiting beneath an umbrella outside a brick bank.',
      'Window washers are descending along the upper facade of a tower.',
      'Revolving glass doors sit between stone planters at an office plaza entrance.',
      'Delivery vans have parked sideways across a paved courtyard.',
    ], 2, 'ตอบ Revolving glass doors sit between stone planters at an office plaza entrance. (ประตูหมุนกระจกตั้งอยู่ระหว่างกระถางหินประดับตรงทางเข้าอาคารสำนักงาน)'),
    p1(16, 'l16-p1-4', 'ca_f', [
      'An inspector is testing air ducts while standing on a stepladder.',
      'Carpenters are sawing wooden trim along an uncarpeted lobby floor.',
      'Tenant mailboxes are overflowing onto a polished tile walkway.',
      'Several empty office chairs are tucked neatly beneath a long glass table.',
    ], 3, 'ตอบ Several empty office chairs are tucked neatly beneath a long glass table. (เก้าอี้สำนักงานเปล่าหลายตัวถูกเลื่อนเก็บไว้ใต้โต๊ะกระจกยาวในห้องประชุม)'),
    p1(16, 'l16-p1-5', 'us_f2', [
      'A property manager is handing a security badge to a visitor at a desk.',
      'A maintenance worker is adjusting a wall-mounted thermostat dial.',
      'Electricians are coiled beside exposed ceiling conduits.',
      'Two brokers are shaking hands in front of a vacant storefront.',
    ], 1, 'ตอบ A maintenance worker is adjusting a wall-mounted thermostat dial. (เจ้าหน้าที่ซ่อมบำรุงกำลังปรับปุ่มควบคุมอุณหภูมิที่ติดอยู่บนผนัง)'),
    p1(16, 'l16-p1-6', 'uk_m', [
      'Vacant cubicles stretch across an open floor lined with tall windows.',
      'Office clerks are sorting lease binders inside a windowless basement.',
      'A janitor is mopping damp footprints near a revolving exit.',
      'Heavy steel beams are being hoisted onto a flat rooftop.',
    ], 0, 'ตอบ Vacant cubicles stretch across an open floor lined with tall windows. (คอกทำงานว่างหลายแถวทอดยาวตลอดชั้นสำนักงานที่มีหน้าต่างสูงรอบด้าน)'),

    // Set 16 Part 2 (25 Qs)
    p2(16, 'l16-p2-1', 'uk_f', 'us_m', 'When does the new architectural firm move into Suite 810?', ['Next Monday, once the carpets are steam-cleaned.', 'Across from the main passenger elevators.', 'They specialize in urban museum renovations.'], 0, 'ตอบ Next Monday, once the carpets are steam-cleaned. (ถามกำหนดเวลาย้ายเข้า When ตอบวันจันทร์หน้าหลังซักพรมเสร็จ)'),
    p2(16, 'l16-p2-2', 'us_m2', 'au_f', 'Who holds the master key for the rooftop chiller room?', ['Try checking with Marcus at Building Security.', 'Only during summer afternoon peak hours.', 'Yes, the cooling unit runs remarkably quietly.'], 0, 'ตอบ Try checking with Marcus at Building Security. (ถามบุคคล Who ตอบให้ลองติดต่อ Marcus ที่ฝ่ายรักษาความปลอดภัยอาคาร)'),
    p2(16, 'l16-p2-3', 'ca_f', 'uk_m', 'Where should contractors drop off the mineral wool insulation?', ['At Loading Bay Two before ten o’clock.', 'Because acoustic reverberation exceeded safety limits.', 'Fourteen thick pallets in total.'], 0, 'ตอบ At Loading Bay Two before ten o’clock. (ถามสถานที่นำส่งของ Where ตอบที่ท่าขนถ่ายสินค้าหมายเลข 2)'),
    p2(16, 'l16-p2-4', 'au_m', 'us_f', 'Would you rather tour the fourth-floor corner office or the mezzanine loft?', ['The corner office—we really need natural daylight.', 'Yes, the current tenant renewed for three years.', 'About thirty-two dollars per square foot.'], 0, 'ตอบ The corner office—we really need natural daylight. (คำถามเลือก A or B ตอบเลือกห้องมุมเพราะต้องการแสงธรรมชาติ)'),
    p2(16, 'l16-p2-5', 'us_f', 'ca_m', 'Why are soundproof baffles being hung above the reception atrium?', ['To dampen echoes before Monday’s tenant open house.', 'Down the corridor past the mailroom.', 'Our leasing director already reviewed the draft.'], 0, 'ตอบ To dampen echoes before Monday’s tenant open house. (ถามเหตุผล Why ตอบเพื่อลดเสียงสะท้อนก่อนงานเปิดบ้านวันจันทร์)'),
    p2(16, 'l16-p2-6', 'uk_m', 'us_f2', 'Hasn’t the landlord countersigned our commercial lease addendum yet?', ['He’s out of town, so Legal expects it Thursday.', 'No, I usually park on the lower deck.', 'Because the conference chairs matched the carpet.'], 0, 'ตอบ He’s out of town, so Legal expects it Thursday. (ถามปฏิเสธ Hasn’t... ตอบข้อเท็จจริงว่าเจ้าของตึกไม่อยู่ ฝ่ายกฎหมายคาดว่าจะได้วันพฤหัส)'),
    p2(16, 'l16-p2-7', 'us_m', 'uk_f2', 'How many decibels did the double-glazed windows reduce street noise by?', ['Roughly eighteen decibels during rush hour.', 'Around six o’clock every evening.', 'Directly overlooking Pine Street Plaza.'], 0, 'ตอบ Roughly eighteen decibels during rush hour. (ถามปริมาณที่ลดลง How many ตอบประมาณ 18 เดซิเบล)'),
    p2(16, 'l16-p2-8', 'uk_f2', 'au_m', 'Could you unlock the vacant showroom so the broker can measure wall lengths?', ['I’m heading to a fire drill, but Maya has the spare fob.', 'Yes, the carpet tiles come in slate gray.', 'By twelve feet along the eastern wall.'], 0, 'ตอบ I’m heading to a fire drill, but Maya has the spare fob. (ตอบเลี่ยงคำขอพร้อมทางออกว่ากำลังไปซ้อมหนีไฟ แต่ Maya มีคีย์การ์ดสำรอง)'),
    p2(16, 'l16-p2-9', 'ca_m', 'us_f', 'The hallway motion lights near Suite 304 stay on all night.', ['I’ll submit an electrical work order to Facilities right now.', 'No, the stairwell exits toward East Avenue.', 'About fifteen minutes per floor.'], 0, 'ตอบ I’ll submit an electrical work order to Facilities right now. (ประโยคบอกเล่าแจ้งปัญหาอุปกรณ์อาคาร -> อาสาแจ้งใบสั่งซ่อมให้ฝ่ายอาคารทันที)'),
    p2(16, 'l16-p2-10', 'us_f2', 'uk_m', 'Which acoustic contractor submitted the most detailed retrofit timeline?', ['SoundWeave Studio included a full weekend phasing chart.', 'Yes, studio panels absorb low-frequency hums.', 'Between two and five every weekday.'], 0, 'ตอบ SoundWeave Studio included a full weekend phasing chart. (ถามเลือกผู้รับเหมา Which ตอบบริษัท SoundWeave Studio)'),
    p2(16, 'l16-p2-11', 'au_f', 'us_m2', 'How long will the freight elevator stay offline for cable inspection?', ['At least until three P.M., according to the notice.', 'Every six months without exception.', 'Mostly heavy office filing cabinets.'], 0, 'ตอบ At least until three P.M., according to the notice. (ถามระยะเวลา How long ตอบอย่างน้อยถึงบ่ายสามโมงตามประกาศ)'),
    p2(16, 'l16-p2-12', 'uk_m', 'ca_f', 'Should I list the tenant improvement allowance under utilities or capital fit-out?', ['Put it under capital fit-out—Finance prefers that line.', 'In the downtown brokerage branch.', 'Yes, thirty-five tenants renewed early.'], 0, 'ตอบ Put it under capital fit-out—Finance prefers that line. (ถามทางเลือกการจัดหมวดบัญชี ตอบให้ลงในหมวด capital fit-out)'),
    p2(16, 'l16-p2-13', 'us_m', 'au_f', 'Where did our leasing assistant store the signed parking permits?', ['Inside the gray binder beside the front security console.', 'Because visitor spaces fill up before nine.', 'They expire at the end of December.'], 0, 'ตอบ Inside the gray binder beside the front security console. (ถามตำแหน่งเก็บของ Where ตอบอยู่ในแฟ้มสีเทาข้างเคาน์เตอร์ รปภ.)'),
    p2(16, 'l16-p2-14', 'uk_f', 'us_m', 'Why don’t we schedule the acoustic sweep after business hours?', ['That avoids disrupting law firm calls on the fifth floor.', 'No, the vacuum cleaner cord isn’t long enough.', 'On Tuesday morning around ten.'], 0, 'ตอบ That avoids disrupting law firm calls on the fifth floor. (เสนอแนะนัดตรวจวัดเสียงหลังเวลาทำการ -> เห็นด้วยพร้อมเหตุผลว่าไม่รบกวนการโทรของบริษัทกฎหมาย)'),
    p2(16, 'l16-p2-15', 'us_m2', 'ca_f', 'Aren’t you walking the prospective retail client through Ground Unit B today?', ['No, Priya took over that tour when my train got delayed.', 'Three storefronts away from the subway entrance.', 'The glass facade looks remarkably modern.'], 0, 'ตอบ No, Priya took over that tour when my train got delayed. (ถามเชิงยืนยัน Aren’t you... ตอบว่าไม่ได้ไปเพราะรถไฟช้า Priya เลยรับช่วงพาชมแทน)'),
    p2(16, 'l16-p2-16', 'ca_m', 'uk_f', 'What is the minimum lease term on the newly renovated twelfth floor?', ['Landlords are asking for at least five years.', 'Overlooking the harbor suspension bridge.', 'Yes, all twelve floors passed fire safety checks.'], 0, 'ตอบ Landlords are asking for at least five years. (ถามเงื่อนไขระยะสัญญาขั้นต่ำ ตอบเจ้าของอาคารขออย่างน้อย 5 ปี)'),
    p2(16, 'l16-p2-17', 'us_f', 'au_m', 'How much is the monthly common-area maintenance charge per tenant?', ['Check the rider on Page Four—rates vary by square footage.', 'Yes, janitors polish the marble lobby nightly.', 'At the corner property management office.'], 0, 'ตอบ Check the rider on Page Four—rates vary by square footage. (ถามค่าบำรุงรักษาส่วนกลาง ตอบเลี่ยงอย่างเป็นธรรมชาติให้ดูเอกสารแนบท้ายหน้า 4 เพราะคิดตามพื้นที่)'),
    p2(16, 'l16-p2-18', 'uk_m', 'us_f2', 'Did the sound-masking speakers near the open desks calibrate properly?', ['Almost—technicians are fine-tuning the corner zones now.', 'About twice every fiscal quarter.', 'No, I prefer noise-canceling headphones at lunch.'], 0, 'ตอบ Almost—technicians are fine-tuning the corner zones now. (ถามว่าปรับเทียบลำโพงกลบเสียงเรียบร้อยไหม ตอบเกือบเสร็จแล้ว ช่างกำลังปรับแต่งจุดมุมอยู่)'),
    p2(16, 'l16-p2-19', 'us_f2', 'uk_m', 'Our anchor tenant asked to add twenty bike racks inside the basement garage.', ['Great—there’s plenty of unused wall space near Pillar G.', 'Yes, my bicycle tire went flat yesterday.', 'Try stacking the folded blueprints vertically.'], 0, 'ตอบ Great—there’s plenty of unused wall space near Pillar G. (บอกเล่าเรื่องผู้เช่ารายใหญ่ขอเพิ่มที่จอดจักรยาน -> ตอบรับเชิงบวกว่ามีพื้นที่ว่างตรงเสา G)'),
    p2(16, 'l16-p2-20', 'au_m', 'ca_f', 'The glass door closer in Lobby West slams shut too loudly, doesn’t it?', ['It really does—I’ll have an engineer tighten the hydraulic screw.', 'Across from the streetcar stop on Fifth.', 'We ordered tinted panes last autumn.'], 0, 'ตอบ It really does—I’ll have an engineer tighten the hydraulic screw. (คำถามปลายเปิด Tag question แสดงความเห็นว่าประตูปิดเสียงดัง -> เห็นด้วยและจะให้ช่างมาปรับสกรู)'),
    p2(16, 'l16-p2-21', 'uk_f', 'us_m', 'Do you know if visitors still need printed ID badges at Security?', ['Yes, everyone has to scan one at the turnstiles.', 'I met the building architect last Friday.', 'Only four parking spaces remain unclaimed.'], 0, 'ตอบ Yes, everyone has to scan one at the turnstiles. (ถามระเบียบผู้มาติดต่อ Do you know if... ตอบต้องใช้บัตรสแกนที่ประตูหมุนทุกคน)'),
    p2(16, 'l16-p2-22', 'us_m', 'uk_f2', 'What time is the contractor bid walk-through for the lobby ceiling baffles?', ['At eleven A.M. sharp beside the security desk.', 'To lower hallway reverberation below forty-five decibels.', 'Roughly six acoustic suppliers are invited.'], 0, 'ตอบ At eleven A.M. sharp beside the security desk. (ถามเวลา What time ตอบสิบเอ็ดโมงตรงที่โต๊ะ รปภ.)'),
    p2(16, 'l16-p2-23', 'ca_f', 'au_m', 'Would you like me to email the revised occupancy schedule to the fire marshal?', ['Yes, please—and copy our head of maintenance.', 'No, the conference room holds twenty people.', 'Inside the waterproof blueprint tube.'], 0, 'ตอบ Yes, please—and copy our head of maintenance. (ข้อเสนอความช่วยเหลือ Would you like me to... ตอบรับพร้อมขอให้ส่งสำเนาถึงหัวหน้าฝ่ายซ่อมบำรุงด้วย)'),
    p2(16, 'l16-p2-24', 'us_f', 'ca_m', 'Have the new acoustic glass partitions arrived at the warehouse yet?', ['Half the shipment cleared customs, and the rest ships tomorrow.', 'Because frosted glass provides extra privacy.', 'Usually around three hundred pounds each.'], 0, 'ตอบ Half the shipment cleared customs, and the rest ships tomorrow. (ถามสถานะการมาถึงของฉากกั้นกระจกกันเสียง ตอบมาถึงครึ่งหนึ่งแล้ว ส่วนที่เหลือส่งพรุ่งนี้)'),
    p2(16, 'l16-p2-25', 'uk_m', 'us_f', 'Whose contractor truck is blocking the fire lane by Loading Dock One?', ['That belongs to the glazing crew—I’ll tell them to move it.', 'Yes, the fire alarm test takes ten minutes.', 'Put those ceiling brackets near the corner pillar.'], 0, 'ตอบ That belongs to the glazing crew—I’ll tell them to move it. (ถามเจ้าของรถที่ขวางทางหนีไฟ Whose ตอบเป็นของทีมช่างกระจก เดี๋ยวจะไปบอกให้เลื่อน)'),

    // Set 16 Part 3 (13 Conversations × 3 Qs = 39 Qs; 3-speaker Convs at 3 & 8; Graphics at 11, 12, 13)
    p3(16, 'l16-p3-1', [
      ['Woman', 'us_f', 'Hi, Ken. I just walked through the empty seventh-floor suite with the prospective accounting firm, and they love the river view.'],
      ['Man', 'uk_m', 'That’s encouraging! Are they ready to sign a standard seven-year lease at thirty-eight dollars a square foot?'],
      ['Woman', 'us_f', 'Almost, though their managing partner wants us to fund new glass partitions along the south wall before December move-in.'],
      ['Man', 'uk_m', 'Let’s ask our tenant-improvement estimator to price out those partitions first so we know if the deal still clears our margin target.'],
    ], null, [
      ['Part 3 · Topic', 'What leasing matter are the colleagues discussing?', ['Terms for leasing an office floor to an accounting firm', 'Repainting the reception area on the seventh floor', 'Relocating an engineering team to a riverside building', 'Replacing broken exterior glass panels after a storm'], 0, 'ตอบ Terms for leasing an office floor to an accounting firm (คุยเรื่องเงื่อนไขเช่าพื้นที่ชั้น 7 ให้บริษัทบัญชี)'],
      ['Part 3 · Detail', 'What modification did the prospective client request?', ['Installing glass partitions along one side of the suite', 'Lowering the monthly rent below thirty-eight dollars', 'Shortening the standard lease to three years', 'Adding private restrooms near the river view'], 0, 'ตอบ Installing glass partitions along one side of the suite (ผู้เช่าขอให้ติดตั้งฉากกั้นกระจกตามแนวผนังด้านใต้ก่อนย้ายเข้า)'],
      ['Part 3 · Action', 'What does the man suggest doing next?', ['Obtaining a cost estimate for the requested construction', 'Sending a signed seven-year contract this afternoon', 'Showing the accounting partner a cheaper vacant floor', 'Canceling December renovation schedules'], 0, 'ตอบ Obtaining a cost estimate for the requested construction (ผู้ชายเสนอให้ฝ่ายประเมินราคาตีราคางานกั้นกระจกก่อนเพื่อดูความคุ้มค่า)'],
    ]),

    p3(16, 'l16-p3-2', [
      ['Man', 'ca_m', 'Excuse me, Ms. Delgado, are you the building property manager? Our dental office is right above the basement print shop, and the press vibration keeps rattling our reception counter.'],
      ['Woman', 'au_f', 'Oh, I’m sorry about that, Dr. Cho. They just installed a heavier binding machine on Monday morning, and I hadn’t realized it carries upward through the concrete slab.'],
      ['Man', 'ca_m', 'It gets loudest around two o’clock when we see afternoon patients.'],
      ['Woman', 'au_f', 'I’ll inspect their floor mounts right after lunch and order thick rubber isolation pads for beneath the press feet.'],
    ], null, [
      ['Part 3 · Problem', 'Why did the man visit the property manager?', ['Vibration from downstairs equipment is disturbing his clinic', 'Construction crews blocked access to the basement shop', 'Water leaked through the reception ceiling on Monday', 'Elevator doors near his floor rattle loudly at two o’clock'], 0, 'ตอบ Vibration from downstairs equipment is disturbing his clinic (แรงสั่นสะเทือนจากเครื่องจักรร้านพิมพ์ชั้นล่างทำให้เคาน์เตอร์คลินิกสั่น)'],
      ['Part 3 · Detail', 'What caused the issue to start on Monday?', ['A heavier binding machine was placed into service', 'Dental staff shifted the reception counter', 'Concrete ceiling beams cracked over the weekend', 'Basement printing hours moved to afternoon slots'], 0, 'ตอบ A heavier binding machine was placed into service (ร้านพิมพ์เพิ่งติดตั้งเครื่องเข้าเล่มที่หนักขึ้นเมื่อวันจันทร์)'],
      ['Part 3 · Action', 'What will the woman do to resolve the problem?', ['Arrange for rubber vibration-dampening pads under the machine', 'Relocate Dr. Cho’s reception desk to another wing', 'Restrict print shop operations until evening hours', 'Replace the concrete flooring beneath the clinic'], 0, 'ตอบ Arrange for rubber vibration-dampening pads under the machine (ผู้หญิงจะไปตรวจฐานเครื่องและสั่งแผ่นยางกันสั่นมารองใต้ขาเครื่องพิมพ์)'],
    ]),

    p3(16, 'l16-p3-3', [
      ['Woman1', 'uk_f', 'Thanks for meeting on site, both of you. Now that the law firm’s open floor has thirty-four workstations, speech carries from one end of the room to the other.'],
      ['Man', 'us_m2', 'I measured an empty room reverberation of nearly one point four seconds—way too lively for confidential client calls.'],
      ['Woman2', 'ca_f', 'We can suspend perforated timber-look baffles between the light tracks without touching the sprinkler heads. That keeps the loft aesthetic intact.'],
      ['Man', 'us_m2', 'Smart approach. Pair those ceiling baffles with acoustic felt dividers on the desks, and we’ll cut speech carry by more than half.'],
      ['Woman1', 'uk_f', 'Perfect—let’s reserve the freight elevator for Saturday morning so the crew can finish before attorneys return Monday.'],
    ], null, [
      ['Part 3 · Problem', 'What issue is affecting the law firm’s open workspace?', ['Conversations travel too easily across the office', 'Sprinkler heads hang too low near ceiling light tracks', 'Thirty-four desks lack proper electrical outlets', 'Heavy street traffic echoes through open windows'], 0, 'ตอบ Conversations travel too easily across the office (เสียงพูดจากโต๊ะทำงานแพร่กระจายข้ามห้องได้ง่ายเกินไปจนกระทบความลับลูกค้า)'],
      ['Part 3 · Proposal', 'What solution does the second woman recommend?', ['Hanging decorative sound-absorbing baffles between ceiling lights', 'Replacing wooden desks with enclosed glass cubicles', 'Removing sprinkler lines to raise ceiling height', 'Installing white-noise speakers inside the elevator'], 0, 'ตอบ Hanging decorative sound-absorbing baffles between ceiling lights (ผู้หญิงคนที่สองแนะนำให้แขวนแผ่นซับเสียงลายไม้เจาะรูระหว่างรางไฟเพดาน)'],
      ['Part 3 · Detail', 'When will the installation crew likely perform the work?', ['On Saturday morning', 'On Monday morning', 'Tonight after five', 'Next Friday afternoon'], 0, 'ตอบ On Saturday morning (จะจองลิฟต์ขนของเช้าวันเสาร์เพื่อให้ทีมงานติดตั้งเสร็จก่อนทนายกลับมาทำงานวันจันทร์)'],
    ]),

    p3(16, 'l16-p3-4', [
      ['Man', 'au_m', 'Hi, Tessa—do you have a minute to review the Common Area Maintenance ledger for Alder Plaza?'],
      ['Woman', 'us_f2', 'Sure, bring it over. Wait—why did snow-clearing expenses jump forty percent in July? That makes no sense.'],
      ['Man', 'au_m', 'Look closely at the vendor line—our billing clerk accidentally coded summer landscape irrigation repairs under the winter plowing account number.'],
      ['Woman', 'us_f2', 'Aha, good eye! Catching that before we mail third-quarter tenant reconciliations saves us a flood of angry emails.'],
    ], null, [
      ['Part 3 · Problem', 'What error did the speakers identify on the expense ledger?', ['Summer grounds work was posted under a winter maintenance code', 'Tenants were double-billed for third-quarter plaza irrigation', 'Landscaping contractors overcharged by forty percent in July', 'Billing notices were mailed to the wrong Plaza address'], 0, 'ตอบ Summer grounds work was posted under a winter maintenance code (พนักงานลงรหัสบัญชีงานซ่อมระบบรดน้ำฤดูร้อนผิดไปอยู่ในบัญชีงานกวาดหิมะ)'],
      ['Part 3 · Meaning', 'What does the woman imply when she says, "Catching that before we mail third-quarter tenant reconciliations saves us a flood of angry emails"?', ['Tenants would have challenged an obvious billing mistake', 'Third-quarter emails are scheduled to go out next July', 'Tenants asked for winter snow removal invoices early', 'Irrigation repairs should be covered entirely by clerks'], 0, 'ตอบ Tenants would have challenged an obvious billing mistake (การแก้ไขก่อนส่งใบสรุปค่าใช้จ่ายไตรมาส 3 ช่วยเลี่ยงไม่ให้ผู้เช่าทักท้วงเรื่องรายการผิดปกติ)'],
      ['Part 3 · Detail', 'Which property is being reviewed in the ledger?', ['Alder Plaza', 'Pine View Tower', 'Harbor Street Annex', 'Riverfront Mall'], 0, 'ตอบ Alder Plaza (ผู้ชายระบุชัดเจนว่าตรวจสอบบัญชีค่าส่วนกลางของ Alder Plaza)'],
    ]),

    p3(16, 'l16-p3-5', [
      ['Woman', 'uk_f2', 'Good morning, AcousticLab. Did our custom door-seal kit pass the decibel test inside Studio C?'],
      ['Man', 'us_m', 'It blocked voice frequencies well, though low bass from the corridor HVAC duct still slips underneath the threshold.'],
      ['Woman', 'uk_f2', 'Did your installer mount the automatic drop-down sweep flush with the tile floor?'],
      ['Man', 'us_m', 'Actually, the stone threshold slopes slightly toward the hall, leaving a three-millimeter gap on the latch side. We’ll need a beveled aluminum sill strip to seal it tight.'],
    ], null, [
      ['Part 3 · Topic', 'What is the conversation mainly about?', ['Troubleshooting sound leakage beneath a studio doorway', 'Replacing noisy corridor air-conditioning compressors', 'Ordering new marble tiles for Studio C hallways', 'Canceling an acoustic test scheduled for this morning'], 0, 'ตอบ Troubleshooting sound leakage beneath a studio doorway (หารือปัญหาเสียงลอดใต้ขอบประตู Studio C หลังทดสอบระดับเสียง)'],
      ['Part 3 · Cause', 'Why is low-frequency noise still entering the studio?', ['An uneven threshold leaves a narrow gap under the door sweep', 'The HVAC duct inside Studio C lacks wall insulation', 'Technicians installed the wrong door-seal width', 'Corridor latches fail to shut completely'], 0, 'ตอบ An uneven threshold leaves a narrow gap under the door sweep (ธรณีประตูหินเอียงเล็กน้อยทำให้เกิดช่องว่าง 3 มิลลิเมตรตรงฝั่งกลอนประตู)'],
      ['Part 3 · Detail', 'What extra component is needed to fix the leak?', ['An angled aluminum threshold strip', 'A thicker wooden studio door', 'A second corridor air-duct baffle', 'Waterproof floor adhesive'], 0, 'ตอบ An angled aluminum threshold strip (ต้องติดแผ่นธรณีประตูอะลูมิเนียมแบบเอียง beveled sill strip เพื่อปิดช่องว่างให้สนิท)'],
    ]),

    p3(16, 'l16-p3-6', [
      ['Man', 'ca_m', 'Sophie, the glass delivery truck for Suite 1200 just pulled into the alley, and the driver says nobody is at the loading dock.'],
      ['Woman', 'us_f', 'Oh no—Security moved dock supervisor Ray over to Lobby East while the front turnstile scanner is being swapped out!'],
      ['Man', 'ca_m', 'The driver only has a twenty-minute parking window before city enforcement tickets the alley.'],
      ['Woman', 'us_f', 'I’ll grab the freight elevator keycard from my desk and go sign for the crates myself right now.'],
    ], null, [
      ['Part 3 · Problem', 'Why is the delivery driver unable to unload crates?', ['The regular loading dock attendant was temporarily reassigned', 'Alley parking bays are closed for city roadwork', 'Freight elevator keycards stopped working this morning', 'Suite 1200 canceled its glass partition order'], 0, 'ตอบ The regular loading dock attendant was temporarily reassigned (เจ้าหน้าที่คุมท่าขนถ่ายถูกย้ายไปช่วยหน้าล็อบบี้ชั่วคราว)'],
      ['Part 3 · Detail', 'How long can the truck wait in the alley without risking a fine?', ['Twenty minutes', 'Ten minutes', 'Thirty minutes', 'One hour'], 0, 'ตอบ Twenty minutes (คนขับมีเวลาจอดในตรอกได้แค่ 20 นาทีก่อนโดนใบสั่ง)'],
      ['Part 3 · Action', 'What will the woman do immediately?', ['Go down to accept the shipment using her freight keycard', 'Ask Ray to leave the front turnstile unattended', 'Tell the driver to return tomorrow afternoon', 'Call city enforcement for a temporary loading permit'], 0, 'ตอบ Go down to accept the shipment using her freight keycard (ผู้หญิงจะหยิบคีย์การ์ดลิฟต์ขนของลงไปเซ็นรับของด้วยตัวเองทันที)'],
    ]),

    p3(16, 'l16-p3-7', [
      ['Woman', 'au_f', 'Have you looked at the energy audit report for our midtown office building? Heating costs spiked last quarter despite milder weather.'],
      ['Man', 'uk_m', 'I read the executive summary. Turns out several exterior window gaskets on the north facade have shrunk after fifteen winters.'],
      ['Woman', 'au_f', 'Replacing gaskets across all twelve stories sounds costly. Do we have to shut down tenant offices during work?'],
      ['Man', 'uk_m', 'Actually, the glazing contractor can reseal them from outside swing-stages, so tenants keep working undisturbed inside.'],
    ], null, [
      ['Part 3 · Cause', 'What explained the unexpected rise in building heating costs?', ['Aged window seals on one side of the building let heat escape', 'North-facing tenants ran space heaters continuously', 'The audit contractor miscalculated mild winter tariffs', 'Boiler thermostats stayed locked on high all quarter'], 0, 'ตอบ Aged window seals on one side of the building let heat escape (ยางขอบหน้าต่างด้านทิศเหนือหดตัวเสื่อมสภาพตามอายุ 15 ปี ทำให้ความร้อนรั่วไหล)'],
      ['Part 3 · Detail', 'How many stories does the midtown office building have?', ['Twelve', 'Fifteen', 'Fourteen', 'Ten'], 0, 'ตอบ Twelve (ผู้หญิงพูดถึงการเปลี่ยนยางทั้ง 12 ชั้น — all twelve stories)'],
      ['Part 3 · Detail', 'Why will office tenants experience minimal disruption during repairs?', ['Technicians will perform the resealing work from exterior platforms', 'Repairs will happen exclusively during summer holiday weeks', 'Glazing crews will only treat vacant ground-floor suites', 'Windows will be replaced from interior hallways overnight'], 0, 'ตอบ Technicians will perform the resealing work from exterior platforms (ช่างสามารถซ่อมซีลจากนั่งร้านแขวนภายนอกอาคารได้โดยไม่รบกวนผู้เช่าด้านใน)'],
    ]),

    p3(16, 'l16-p3-8', [
      ['Man1', 'us_m', 'Okay team, Horizon Biotech is hiring forty new lab analysts next month, and they need all forty access badges printed before orientation Monday.'],
      ['Woman', 'uk_f', 'Our desktop card printer can handle forty blanks in under an hour, provided HR sends verified headshots by Thursday noon.'],
      ['Man2', 'au_m', 'Remember they also requested after-hours elevator clearance to Floor 9 only—not the basement server vault.'],
      ['Man1', 'us_m', 'Good reminder, Tariq. I’ll set up the Floor 9 access profile in the security portal this afternoon so badges only need encoding once.'],
    ], null, [
      ['Part 3 · Detail', 'How many new security badges need to be produced?', ['Forty', 'Nine', 'Fourteen', 'Twenty'], 0, 'ตอบ Forty (บริษัท Horizon Biotech รับพนักงานใหม่ 40 คนและต้องทำบัตรให้ครบทั้ง 40 ใบ)'],
      ['Part 3 · Requirement', 'What must happen before the woman can print the cards?', ['Human resources must supply approved employee photos by Thursday midday', 'Tenants must submit basement server access clearances', 'A new card printer must be delivered from Security', 'Orientation must be postponed past Monday'], 0, 'ตอบ Human resources must supply approved employee photos by Thursday midday (ฝ่าย HR ต้องส่งไฟล์รูปถ่ายที่ยืนยันแล้วมาก่อนเที่ยงวันพฤหัส)'],
      ['Part 3 · Action', 'What will the first man do later today?', ['Configure restricted Floor 9 elevator permissions in the system', 'Photograph forty visiting biotech analysts personally', 'Print sample parking passes for Horizon Biotech guests', 'Unlock basement server doors for Monday’s orientation'], 0, 'ตอบ Configure restricted Floor 9 elevator permissions in the system (ผู้ชายคนแรกจะตั้งค่าสิทธิ์ลิฟต์เฉพาะชั้น 9 ในระบบรักษาความปลอดภัยบ่ายนี้)'],
    ]),

    p3(16, 'l16-p3-9', [
      ['Woman', 'ca_f', 'Hi, Owen! Are we still shooting exterior photographs of the renovated Maple Street Atrium at five-thirty this evening?'],
      ['Man', 'us_m2', 'I’d love to, since sunset lights up the lobby glass warmly, but weather radar shows thick overcast clouds rolling in around five.'],
      ['Woman', 'ca_f', 'Should we push the outdoor shoot to tomorrow twilight and capture the interior acoustic lounge first?'],
      ['Man', 'us_m2', 'Yes—let’s photograph the lounge ceiling baffles and conference pods today under architectural lighting, then grab the facade tomorrow when skies clear.'],
    ], null, [
      ['Part 3 · Problem', 'Why do the speakers decide to postpone the exterior photo shoot?', ['Approaching cloud cover will spoil the evening lighting', 'Maple Street Atrium glass panels are still being washed', 'Renovation scaffolding remains mounted outside the lobby', 'The photographer double-booked another real estate tour'], 0, 'ตอบ Approaching cloud cover will spoil the evening lighting (เรดาร์พยากรณ์ว่ามีเมฆครึ้มหนาเข้ามาตอน 5 โมงเย็น ทำให้แสงเย็นไม่สวย)'],
      ['Part 3 · Detail', 'What will the speakers photograph today instead?', ['Interior lounge features and meeting pods', 'Sunrise reflections on Maple Street sidewalks', 'Basement parking bays and bike lockers', 'Empty suites awaiting acoustic carpets'], 0, 'ตอบ Interior lounge features and meeting pods (เปลี่ยนมาถ่ายภาพโถงเลานจ์ภายใน แผ่นซับเสียงเพดาน และห้องประชุมย่อยแทน)'],
      ['Part 3 · Detail', 'When do they plan to capture the building’s exterior?', ['Tomorrow evening', 'At noon today', 'Early Friday morning', 'Next Monday afternoon'], 0, 'ตอบ Tomorrow evening (เลื่อนการถ่ายภาพด้านนอกอาคารไปเป็นช่วงโพล้เพล้พรุ่งนี้เมื่อฟ้าเปิด)'],
    ]),

    p3(16, 'l16-p3-10', [
      ['Man', 'uk_m', 'Hannah, have you checked the sublease inquiry from BrightPath Tutoring? They want a six-month pop-up classroom on our ground floor.'],
      ['Woman', 'us_f2', 'Wait—our building master lease prohibits tutoring foot traffic after six P.M. unless classes stay inside sound-rated rooms.'],
      ['Man', 'uk_m', 'Right, and Ground Unit C only has standard drywall separating it from the insurance brokerage next door.'],
      ['Woman', 'us_f2', 'Let’s offer them Second Floor Suite 208 instead—it already has double-stud acoustic walls from the previous radio studio tenant.'],
    ], null, [
      ['Part 3 · Reason', 'Why is Ground Unit C unsuitable for BrightPath Tutoring?', ['Its standard walls would not adequately block evening class noise', 'Ground-floor leases require at least a five-year commitment', 'The insurance brokerage next door plans to expand into Unit C', 'Tutoring students are barred from using ground entrances'], 0, 'ตอบ Its standard walls would not adequately block evening class noise (ห้อง Unit C มีแค่ผนังยิปซัมธรรมดา ไม่กันเสียงตามเงื่อนไขสัญญาหลักสำหรับการสอนหลังหกโมงเย็น)'],
      ['Part 3 · Detail', 'What feature makes Suite 208 a better match?', ['Pre-existing soundproofed walls built for a former radio studio', 'Direct street access beside an underground transit line', 'Extra storage lockers for heavy classroom textbooks', 'Lower heating rates than ground-floor retail space'], 0, 'ตอบ Pre-existing soundproofed walls built for a former radio studio (ห้อง 208 มีผนังกันเสียงสองชั้นเดิมจากผู้เช่าสถานีวิทยุรายเก่าอยู่แล้ว)'],
      ['Part 3 · Detail', 'How long does the prospective tenant wish to sublease the space?', ['Six months', 'Two years', 'Three months', 'One week'], 0, 'ตอบ Six months (ผู้สนใจติดต่อขอเช่าช่วงระยะเวลา 6 เดือน)'],
    ]),

    // Set 16 Part 3 Graphics (Convs 11, 12, 13)
    p3(16, 'l16-p3-11', [
      ['Man', 'au_m', 'Looking at the HarborPoint Tower availability sheet, my design agency has eighteen staff and we definitely need direct balcony access.'],
      ['Woman', 'us_f', 'Good news and bad news—Suite 604 just went under signed contract twenty minutes ago, so it’s off the board.'],
      ['Man', 'au_m', 'Oh, too bad about the budget option. What about the larger one—does our monthly rent cap of nine thousand five hundred still cover it?'],
      ['Woman', 'us_f', 'Wait—if you sign a five-year term today, the owner knocks six hundred dollars off the listed monthly rate, bringing it just under your cap!'],
    ], doc('table', 'HarborPoint Tower — Available Commercial Suites (Floor 6)', [['Updated', 'Tuesday 9:00 A.M.']], [
      tbl(
        ['Suite', 'Capacity', 'Monthly Rent', 'Key Feature'],
        [
          ['Suite 601', '14 Desks', '$7,800', 'Interior Courtyard View'],
          ['Suite 604', '20 Desks', '$8,900', 'Private South Balcony'],
          ['Suite 607', '24 Desks', '$9,900', 'Wraparound Terrace Balcony'],
          ['Suite 610', '30 Desks', '$12,400', 'Executive Boardroom Wing'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which suite will the man’s design agency likely lease?', ['Suite 607', 'Suite 604', 'Suite 601', 'Suite 610'], 0, 'ตอบ Suite 607 (Suite 604 ถูกเช่าไปแล้วเมื่อ 20 นาทีก่อน และ Suite 601 จุได้ไม่พอ 18 คน จึงเหลือ Suite 607 ที่มีระเบียงและจุได้ 24 ที่นั่ง)'],
      ['Part 3 · Graphic', 'How much would the agency pay per month with the five-year discount?', ['$9,300', '$9,900', '$8,900', '$8,300'], 0, 'ตอบ $9,300 (ราคาตามตารางของ Suite 607 คือ $9,900 หักส่วนลดสัญญาราย 5 ปี $600 เหลือ $9,300)'],
      ['Part 3 · Detail', 'Why was Suite 604 removed from consideration?', ['Another tenant signed a contract for it earlier that morning', 'It failed to accommodate eighteen agency staff desks', 'Its private south balcony lacked exterior safety railings', 'Monthly utilities pushed its total above ten thousand dollars'], 0, 'ตอบ Another tenant signed a contract for it earlier that morning (Suite 604 เพิ่งมีผู้เช่ารายอื่นเซ็นสัญญาไปเมื่อ 20 นาทีก่อน)'],
    ]),

    p3(16, 'l16-p3-12', [
      ['Woman', 'uk_f', 'Let’s review the Floor 3 Acoustic Retrofit Layout before we send the purchase order to SoundWeave.'],
      ['Man', 'ca_m', 'Wait—facilities just routed a new chilled-water pipe straight across Zone C’s ceiling, so suspended felt baffles won’t fit at that height anymore.'],
      ['Woman', 'uk_f', 'Really? That open lunch table right below Zone C gets awfully noisy at noon. What can we substitute there?'],
      ['Man', 'ca_m', 'We’ll swap Zone C to low-profile wall absorbers along the perimeter brick and move the extra ceiling baffles into Zone A’s boardroom!'],
    ], doc('floorplan', 'Bayside Annex — Floor 3 Acoustic Retrofit Zone Map', [['Target', 'Reduce Midday Echo']], [
      box('Zone Specifications & Planned Materials', [
        'Zone A · North Boardroom — Perforated Oak Wall Slats (Planned)',
        'Zone B · Quiet Focus Pods — Double-Glazed Frameless Glass Doors',
        'Zone C · Central Break Lounge — Suspended Acoustic Felt Baffles',
        'Zone D · Reception Entry — Heavy Wool Carpet Runner & Door Sweep',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which area cannot receive its originally planned treatment?', ['Central Break Lounge', 'North Boardroom', 'Quiet Focus Pods', 'Reception Entry'], 0, 'ตอบ Central Break Lounge (Zone C คือ Central Break Lounge มีท่อน้ำเย็นเดินผ่านเพดานใหม่เลยแขวนแผ่นซับเสียงแบบเดิมไม่ได้)'],
      ['Part 3 · Reason', 'Why must the installation plan be modified?', ['Newly routed overhead piping blocks suspended baffle clearance', 'Central Break Lounge tables are being relocated to Floor 2', 'SoundWeave ran out of acoustic wool carpet runners', 'Reception Entry doors already meet building decibel targets'], 0, 'ตอบ Newly routed overhead piping blocks suspended baffle clearance (มีท่อน้ำเย็นติดตั้งใหม่พาดผ่านเพดาน Zone C ทำให้ไม่มีระยะแขวนแผ่น)'],
      ['Part 3 · Action', 'Where will the unassigned suspended baffles now be installed?', ['In Zone A’s boardroom', 'Inside Quiet Focus Pods', 'Above Reception Entry desks', 'Along basement service corridors'], 0, 'ตอบ In Zone A’s boardroom (ผู้ชายบอกว่าจะย้ายแผ่นซับเสียงเพดานส่วนเกินไปติดที่ห้องประชุมใน Zone A แทน)'],
    ]),

    p3(16, 'l16-p3-13', [
      ['Man', 'us_m2', 'Hi, Ms. Cho. Our brokerage needs to move sixteen modular workstations up to Suite 900 this weekend, and our movers take about four hours.'],
      ['Woman', 'au_f', 'Sure—Saturday evening was wide open until five minutes ago, when the building painters locked down the freight lift from four to ten P.M.'],
      ['Man', 'us_m2', 'Ugh, Saturday afternoon won’t finish in time either. Looks like we’ll have to reserve the early Sunday window so we clear out by noon.'],
      ['Woman', 'au_f', 'Smart call. Since you’re moving sixteen desks, don’t forget the mandatory protective lobby pads—that adds a flat fee on top of the hourly charge.'],
    ], doc('table', 'Meridian Property Management — Weekend Freight Lift Schedule', [['Minimum', '4-Hour Booking Block']], [
      tbl(
        ['Time Window', 'Hourly Lift Rate', 'Protective Lobby Pads', 'Availability'],
        [
          ['Saturday 8:00 A.M.–12:00 P.M.', '$95 / hr', '$60 Flat Fee', 'Booked (Law Firm)'],
          ['Saturday 12:00 P.M.–4:00 P.M.', '$110 / hr', '$60 Flat Fee', 'Open'],
          ['Saturday 4:00 P.M.–10:00 P.M.', '$130 / hr', '$60 Flat Fee', 'Held (Painters)'],
          ['Sunday 8:00 A.M.–12:00 P.M.', '$140 / hr', '$60 Flat Fee', 'Open'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which weekend window will the man reserve?', ['Sunday 8:00 A.M.–12:00 P.M.', 'Saturday 4:00 P.M.–10:00 P.M.', 'Saturday 8:00 A.M.–12:00 P.M.', 'Saturday 12:00 P.M.–4:00 P.M.'], 0, 'ตอบ Sunday 8:00 A.M.–12:00 P.M. (วันเสาร์เช้าเต็ม เย็นช่างทาสีจองไปแล้ว ส่วนช่วงบ่ายผู้ชายบอกว่าไม่ทัน จึงเลือกช่วงเช้าวันอาทิตย์)'],
      ['Part 3 · Graphic', 'What will the total four-hour charge be including the protective pads?', ['$620', '$560', '$580', '$500'], 0, 'ตอบ $620 (รอบเช้าวันอาทิตย์ $140 x 4 ชั่วโมง = $560 บวกค่าแผ่นกันกระแทกล็อบบี้อีก $60 รวมเป็น $620)'],
      ['Part 3 · Detail', 'How many modular workstations is the brokerage relocating?', ['Sixteen', 'Twenty', 'Twelve', 'Four'], 0, 'ตอบ Sixteen (ผู้ชายระบุว่าจะย้ายโต๊ะทำงานแบบโมดูลาร์จำนวน 16 ชุด)'],
    ]),

    // Set 16 Part 4 (10 Talks × 3 Qs = 30 Qs; Talks 8-10 include Graphics)
    p4(16, 'l16-p4-1', 'the following recorded telephone message', 'uk_f',
      'Thank you for calling Crestline Commercial Realty. Our downtown leasing showroom is closed this Wednesday morning while our brokers attend the annual regional zoning summit. Normal suite tours resume at one-thirty P.M. today. If you are an existing office tenant reporting an urgent roof leak or elevator fault, please press three to reach our twenty-four-hour facilities dispatch team. Otherwise, leave your company name, suite preference, and callback number after the tone.',
      null, [
        ['Part 4 · Reason', 'Why is the Crestline Commercial Realty showroom closed on Wednesday morning?', ['Brokers are attending a regional zoning conference', 'Showroom elevators are undergoing safety repairs', 'Staff are inspecting water leaks on the roof', 'Tour appointments moved to an online portal'], 0, 'ตอบ Brokers are attending a regional zoning conference (นายหน้าอสังหาฯ เข้าร่วมการประชุมด้านผังเมืองประจำปี)'],
        ['Part 4 · Detail', 'When will regular office suite tours resume?', ['At 1:30 P.M. Wednesday', 'At 9:00 A.M. Thursday', 'At 3:00 P.M. Wednesday', 'Immediately after the summit'], 0, 'ตอบ At 1:30 P.M. Wednesday (จะกลับมาเปิดให้เข้าชมห้องสำนักงานตามปกติเวลา 13:30 น. วันนี้)'],
        ['Part 4 · Action', 'What should a tenant with an urgent maintenance problem do?', ['Press three to contact twenty-four-hour dispatch', 'Leave a suite preference after the tone', 'Visit the downtown showroom at one-thirty', 'Call regional zoning officials directly'], 0, 'ตอบ Press three to contact twenty-four-hour dispatch (กดหมายเลข 3 เพื่อติดต่อทีมซ่อมบำรุงฉุกเฉิน 24 ชั่วโมง)'],
      ]),

    p4(16, 'l16-p4-2', 'the following building management announcement', 'us_m',
      'Attention, all tenants of Northgate Commerce Center. To complete mandatory backup generator testing, building management will switch off main corridor electrical circuits for fifteen minutes this Saturday morning at six A.M. Emergency stairwell lighting and security card readers will continue running normally on battery reserves. Please power down desktop computers and server racks before leaving Friday evening, and check the lobby digital notice board if your floor requires temporary refrigerator extension cords.',
      null, [
        ['Part 4 · Purpose', 'What is the main purpose of this announcement?', ['To notify tenants about a brief Saturday power shutdown for testing', 'To warn staff about broken security card readers in stairwells', 'To advertise new server rack leasing rooms in Northgate Center', 'To explain updated Friday evening building closing hours'], 0, 'ตอบ To notify tenants about a brief Saturday power shutdown for testing (แจ้งผู้เช่าเรื่องการตัดไฟชั่วคราว 15 นาทีเช้าวันเสาร์เพื่อทดสอบเครื่องปั่นไฟสำรอง)'],
        ['Part 4 · Detail', 'What systems will remain powered during the fifteen-minute shutdown?', ['Emergency stairwell lights and card-access readers', 'Main corridor lighting and passenger elevators', 'Office desktop computers and kitchen appliances', 'Lobby digital notice boards and server racks'], 0, 'ตอบ Emergency stairwell lights and card-access readers (ไฟฉุกเฉินบันไดหนีไฟและเครื่องอ่านบัตรเข้าออกจะยังทำงานด้วยแบตเตอรี่สำรอง)'],
        ['Part 4 · Action', 'What are tenants advised to do before leaving on Friday?', ['Shut down desktop workstations and servers', 'Unplug all lobby digital notice screens', 'Borrow generator cables from the lobby guard', 'Leave stairwell doors propped open overnight'], 0, 'ตอบ Shut down desktop workstations and servers (แนะนำให้ปิดเครื่องคอมพิวเตอร์และตู้เซิร์ฟเวอร์ก่อนกลับเย็นวันศุกร์)'],
      ]),

    p4(16, 'l16-p4-3', 'the following contractor briefing', 'au_m',
      'Morning, everyone. Before we begin hanging acoustic wall panels inside the fourth-floor law library, please pay close attention to our dust-containment rules. All aluminum track drilling must use HEPA vacuum attachments because this firm stores archival tax records along the eastern bookshelves. Do not prop open the glass entry doors, and remember every scrap of mineral wool must go inside sealed green disposal bags before our noon break.',
      null, [
        ['Part 4 · Audience', 'Who is most likely listening to this briefing?', ['Technicians installing soundproofing materials', 'Archival tax clerks working for a law firm', 'Building janitors cleaning hallway carpets', 'HVAC mechanics repairing rooftop ducts'], 0, 'ตอบ Technicians installing soundproofing materials (ช่างติดตั้งแผงซับเสียงที่กำลังเตรียมเจาะรางอะลูมิเนียมและเก็บเศษใยหิน)'],
        ['Part 4 · Reason', 'Why must workers use specialized vacuum attachments when drilling?', ['To keep dust off archival files stored on nearby shelves', 'To reduce drilling noise inside third-floor offices', 'To protect green disposal bags from tearing easily', 'To meet fire codes along the glass entry doors'], 0, 'ตอบ To keep dust off archival files stored on nearby shelves (เพื่อป้องกันฝุ่นเกาะเอกสารภาษีสำคัญที่เก็บไว้ตามชั้นหนังสือฝั่งตะวันออก)'],
        ['Part 4 · Rule', 'What must happen before the crew takes lunch at noon?', ['Leftover insulation scraps must be sealed in green bags', 'Glass entry doors must be removed for hallway access', 'All fourth-floor bookshelves must be emptied completely', 'Wall panels must be painted white to match trim'], 0, 'ตอบ Leftover insulation scraps must be sealed in green bags (ต้องเก็บเศษฉนวนใยหินใส่ถุงสีเขียวปิดผนึกให้เรียบร้อยก่อนพักเที่ยง)'],
      ]),

    p4(16, 'l16-p4-4', 'the following radio business report', 'ca_f',
      'This is Maya Lin with Marketplace Metro. Downtown commercial vacancy rates dropped two full percentage points this quarter, largely because midsize technology firms are leasing renovated pre-war warehouse floors instead of glass high-rises. Brokers attribute that surge to lower property taxes plus upgraded acoustic ceilings that eliminate echoes across exposed brick interiors. Still, suburban business parks report sluggish demand as hybrid teams prioritize commuter rail proximity.',
      null, [
        ['Part 4 · Topic', 'What trend does the reporter highlight in this broadcast?', ['Tech companies favoring refurbished brick buildings over glass towers', 'Suburban office parks cutting rents to attract commuters', 'Rising property taxes pushing brokers outside downtown zones', 'Tech teams switching back to fully remote work arrangements'], 0, 'ตอบ Tech companies favoring refurbished brick buildings over glass towers (บริษัทเทคโนโลยีหันมาเช่าอาคารโกดังอิฐเก่าที่ปรับปรุงใหม่แทนตึกกระจกสูง)'],
        ['Part 4 · Detail', 'How much did downtown office vacancy fall during the quarter?', ['Two percentage points', 'Four percentage points', 'Ten percentage points', 'One half percent'], 0, 'ตอบ Two percentage points (อัตราพื้นที่ว่างในตัวเมืองลดลง 2 จุดเปอร์เซ็นต์ในไตรมาสนี้)'],
        ['Part 4 · Detail', 'Why are suburban business parks experiencing slower leasing?', ['Hybrid employees prefer locations near commuter train lines', 'Pre-war suburban warehouses lack exposed brick ceilings', 'Acoustic renovations doubled suburban monthly rents', 'Transit authorities suspended bus routes to downtown'], 0, 'ตอบ Hybrid employees prefer locations near commuter train lines (พนักงานแบบไฮบริดให้ความสำคัญกับการเดินทางใกล้รถไฟชานเมืองมากกว่า)'],
      ]),

    p4(16, 'l16-p4-5', 'the following tenant orientation talk', 'us_f',
      'Welcome to Harborview Business Tower! My name is Claire, your tenant relations coordinator. Before I hand over your keycards, take note of two building amenities on the lower concourse. First, the secured bicycle locker room requires a one-time ten-dollar registration sticker from Security Desk A. Second, conference pods beside the garden atrium are complimentary for all leaseholders up to four hours monthly—just reserve slots through our tenant portal.',
      null, [
        ['Part 4 · Audience', 'Who is this building orientation intended for?', ['Employees of a company newly moving into the building', 'Property security officers starting a morning shift', 'Architects inspecting lower concourse garden pods', 'Courier drivers seeking bicycle parking stickers'], 0, 'ตอบ Employees of a company newly moving into the building (ผู้เช่าหรือพนักงานบริษัทที่เพิ่งย้ายเข้ามาประจำอาคารใหม่และกำลังมารับคีย์การ์ด)'],
        ['Part 4 · Detail', 'What is required to use the basement bicycle room?', ['Purchasing a ten-dollar registration sticker at Security Desk A', 'Booking four-hour parking slots online each week', 'Checking in daily with the tenant relations coordinator', 'Paying a monthly amenity surcharge on the corporate lease'], 0, 'ตอบ Purchasing a ten-dollar registration sticker at Security Desk A (ต้องติดสติกเกอร์ลงทะเบียนแบบครั้งเดียวราคา $10 จากโต๊ะ รปภ. A)'],
        ['Part 4 · Detail', 'How long can tenants reserve atrium conference pods free each month?', ['Up to four hours', 'Up to ten hours', 'Two hours per week', 'One full afternoon'], 0, 'ตอบ Up to four hours (ผู้เช่าจองห้องประชุมกระจกข้างสวนได้ฟรีสูงสุดเดือนละ 4 ชั่วโมง)'],
      ]),

    p4(16, 'l16-p4-6', 'the following speaker introduction', 'uk_m',
      'Please join me in welcoming tonight’s keynote speaker, acoustic engineer Dr. Samuel Cho. Over the past fifteen years, Dr. Cho has redesigned auditoriums and open-plan corporate headquarters across four continents, turning noisy glass lobbies into calm workspaces. Just last spring, his book on timber sound diffusers won the Civic Architecture Medal. Tonight, he will share practical, low-cost ways older buildings can improve speech privacy without tearing down existing walls.',
      null, [
        ['Part 4 · Detail', 'What honor did Dr. Samuel Cho receive last spring?', ['An architectural award for his book on wooden acoustic diffusers', 'A lifetime grant to construct four corporate headquarters', 'Top prize in a European open-plan lobby competition', 'Recognition for demolishing historic glass auditoriums'], 0, 'ตอบ An architectural award for his book on wooden acoustic diffusers (หนังสือเรื่องตัวกระจายเสียงไม้ได้รับรางวัล Civic Architecture Medal เมื่อฤดูใบไม้ผลิที่แล้ว)'],
        ['Part 4 · Topic', 'What will Dr. Cho discuss during tonight’s talk?', ['Affordable acoustic upgrades for existing office structures', 'Building brand-new auditoriums with curved timber roofs', 'Preventing structural cracks in historic brick walls', 'Hiring international engineering consultants for lobbies'], 0, 'ตอบ Affordable acoustic upgrades for existing office structures (วิธีปรับปรุงความเป็นส่วนตัวทางเสียงแบบประหยัดในอาคารเก่าโดยไม่ต้องทุบผนัง)'],
        ['Part 4 · Detail', 'How many years of experience does the speaker mention for Dr. Cho?', ['Fifteen years', 'Four years', 'Ten years', 'Twenty years'], 0, 'ตอบ Fifteen years (ผู้แนะนำกล่าวว่าเขามีประสบการณ์ออกแบบมาตลอด 15 ปีที่ผ่านมา)'],
      ]),

    p4(16, 'l16-p4-7', 'the following voicemail message', 'ca_m',
      'Hi Nora, this is David from SoundShield Acoustics calling at eleven-fifteen Tuesday. Our crew finished measuring the ceiling grid in your eighth-floor call center, and good news—those existing steel runners can support our standard felt baffles without extra bracing, saving your team roughly four thousand dollars! However, we noticed two sprinkler heads sit close to the north wall, so please email me the building’s sprinkler map before Friday so we finalize baffle spacing.',
      null, [
        ['Part 4 · Purpose', 'Why is David calling Nora?', ['To report site measurement savings and request a building drawing', 'To schedule an eighth-floor acoustic measurement for Friday', 'To ask for four thousand dollars to reinforce ceiling runners', 'To cancel the call center felt baffle order'], 0, 'ตอบ To report site measurement savings and request a building drawing (โทรแจ้งข่าวดีเรื่องประหยัดงบโครงเพดานและขอแบบแปลนระบบดับเพลิง)'],
        ['Part 4 · Benefit', 'Why will Nora’s company save approximately four thousand dollars?', ['Existing ceiling framing does not require added structural support', 'Two north-wall sprinkler heads will be removed free of charge', 'SoundShield discounted standard felt baffles for eighth-floor suites', 'Measuring took half the time originally billed'], 0, 'ตอบ Existing ceiling framing does not require added structural support (โครงเหล็กเพดานเดิมรับน้ำหนักแผ่นซับเสียงได้เลย ไม่ต้องเสริมเหล็กเพิ่ม)'],
        ['Part 4 · Action', 'What does David need Nora to send by Friday?', ['A layout diagram showing sprinkler locations', 'Signed payment approval for four thousand dollars', 'Revised call center desk schedules', 'Permission to move north-wall light fixtures'], 0, 'ตอบ A layout diagram showing sprinkler locations (ขอให้ส่งผังตำแหน่งหัวฉีดน้ำดับเพลิงมาให้ทางอีเมลก่อนวันศุกร์)'],
      ]),

    // Set 16 Part 4 Graphics (Talks 8, 9, 10)
    p4(16, 'l16-p4-8', 'the following facilities team briefing and inspection schedule', 'us_f2',
      'Listen up, facilities crew—let’s adjust this afternoon’s quarterly HVAC filter and thermostat inspection sheet before you head up the elevators. First, thank you to Carlos for knocking out Suite 210 ahead of schedule this morning. Unfortunately, our vendor still hasn’t shipped the specialty HEPA filters needed for the basement print studio, so skip that room completely today. Instead, have Carlos pick up Suite 640 right after lunch while Maria covers the fifth-floor lab.',
      doc('table', 'CrestView Office Park — Q4 HVAC Inspection Roster', [['Building', 'North Wing']], [
        tbl(
          ['Floor / Unit', 'Inspector', 'Filter Spec', 'Scheduled Time'],
          [
            ['Suite 210 (Law Firm)', 'Carlos', 'Standard MERV-13', '9:00 A.M. (Done)'],
            ['Suite 505 (Lab)', 'Maria', 'Carbon Pleated', '1:30 P.M.'],
            ['Suite 640 (Design)', 'Unassigned', 'Standard MERV-13', '2:30 P.M.'],
            ['Basement Print Studio', 'Carlos', 'Specialty HEPA', '3:30 P.M.'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which scheduled inspection is being postponed today?', ['Basement Print Studio', 'Suite 210', 'Suite 505', 'Suite 640'], 0, 'ตอบ Basement Print Studio (แผ่นกรอง HEPA เฉพาะทางของห้องพิมพ์ชั้นใต้ดินยังส่งมาไม่ถึง จึงต้องข้ามห้องนี้ไปก่อน)'],
        ['Part 4 · Graphic', 'Which location will Carlos now inspect at 2:30 P.M.?', ['Suite 640', 'Suite 505', 'Basement Print Studio', 'Suite 210'], 0, 'ตอบ Suite 640 (หัวหน้างานมอบหมายให้ Carlos ไปตรวจ Suite 640 ที่เดิมยังไม่ระบุผู้ตรวจตอน 14:30 น. แทน)'],
        ['Part 4 · Detail', 'Who is assigned to check the Carbon Pleated filter in Suite 505?', ['Maria', 'Carlos', 'The facilities director', 'An outside HEPA vendor'], 0, 'ตอบ Maria (ตามตารางระบุ Maria เป็นผู้ตรวจ Suite 505 เวลา 13:30 น.)'],
      ]),

    p4(16, 'l16-p4-9', 'the following procurement update and material list', 'uk_f2',
      'Hi procurement team, quick update on the Civic Plaza Tower conference wing acoustic upgrade. As listed on our vendor board, we originally aimed for the highest STC rating under three hundred dollars per panel. However, our municipal fire inspector just emailed—the compressed foam backing on Panel B failed the vertical smoke-spread requirement, making it ineligible for public hallways. Please place Friday’s bulk purchase for the highest-rated compliant choice remaining under our budget cap.',
      doc('list', 'Civic Plaza Tower — Acoustic Wall Panel Options', [['Budget Cap', '$300 / Panel Max']], [
        lst([
          'Panel A · Standard Fabric Wrap — STC 44 Rating — $220 / Panel (Fire Class A)',
          'Panel B · High-Density Foam Core — STC 51 Rating — $275 / Panel (Smoke Test Pending)',
          'Panel C · Perforated Mineral Wool — STC 49 Rating — $290 / Panel (Fire Class A)',
          'Panel D · Architectural Walnut Rib — STC 52 Rating — $365 / Panel (Fire Class A)',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which acoustic panel should the procurement team order?', ['Panel C', 'Panel B', 'Panel D', 'Panel A'], 0, 'ตอบ Panel C (Panel B ไม่ผ่านการทดสอบควันไฟ ส่วน Panel D ราคา $365 เกินงบ $300 ดังนั้น Panel C ที่ได้ค่า STC 49 ราคา $290 และผ่านไฟคลาส A จึงดีที่สุด)'],
        ['Part 4 · Reason', 'Why was Panel B eliminated from consideration?', ['It did not pass the fire inspector’s smoke safety test', 'Its per-panel price exceeded the three-hundred-dollar limit', 'Suppliers ran out of fabric wrap inventory until next month', 'Its STC rating fell below hallway speech privacy standards'], 0, 'ตอบ It did not pass the fire inspector’s smoke safety test (ไส้โฟมของ Panel B ไม่ผ่านเกณฑ์การลามควันแนวตั้งของเจ้าหน้าที่ดับเพลิง)'],
        ['Part 4 · Detail', 'When will the bulk purchase order be submitted?', ['This Friday', 'Next Monday', 'Immediately today', 'After next month’s audit'], 0, 'ตอบ This Friday (ผู้พูดสั่งให้ยื่นคำสั่งซื้อล็อตใหญ่ในวันศุกร์นี้)'],
      ]),

    p4(16, 'l16-p4-10', 'the following loading dock schedule announcement', 'ca_m',
      'Attention Rivergate Center tenant coordinators—please note one change to Thursday afternoon’s Loading Bay B freight elevator board. Because the architectural glass delivery for the tenth-floor law suite hit highway traffic outside Springfield, that shipment will slide back two hours into the late afternoon slot. Consequently, Acme Office Furniture moves forward to take the newly opened one-thirty slot, giving their desk installers two extra hours to assemble cubicles before five.',
      doc('schedule', 'Rivergate Center — Freight Elevator Reservations', [['Date', 'Thursday, November 14']], [
        box('Loading Bay B · Afternoon Reservations', [
          '12:00 P.M. – 1:30 P.M. | Metro Catering (Board Lunch Supplies)',
          '1:30 P.M. – 3:30 P.M. | Apex Glazing (Suite 1000 Glass Partitions)',
          '3:30 P.M. – 5:30 P.M. | Acme Office Furniture (Floor 4 Desks)',
          '5:30 P.M. – 7:00 P.M. | GreenClean Janitorial (Floor Polisher Delivery)',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which company will now use the 1:30 P.M. to 3:30 P.M. slot?', ['Acme Office Furniture', 'Apex Glazing', 'Metro Catering', 'GreenClean Janitorial'], 0, 'ตอบ Acme Office Furniture (Apex Glazing รถติดต้องเลื่อนออกไป 2 ชั่วโมง ทำให้ Acme Office Furniture ขยับขึ้นมาใช้ช่วงเวลา 13:30–15:30 น. แทน)'],
        ['Part 4 · Cause', 'Why was Apex Glazing delayed?', ['Their delivery truck encountered highway congestion', 'Loading Bay B gates required midday hinge repairs', 'Suite 1000 revised the glass partition measurements', 'Board lunch supplies ran thirty minutes overdue'], 0, 'ตอบ Their delivery truck encountered highway congestion (รถขนกระจกเจอจราจรติดขัดบนทางหลวงนอกเมือง Springfield)'],
        ['Part 4 · Detail', 'What benefit does Acme Office Furniture gain from the schedule swap?', ['Additional afternoon hours to complete cubicle assembly', 'Discounted Thursday freight elevator fees', 'Direct elevator access to the tenth-floor law suite', 'Priority parking outside Loading Bay A'], 0, 'ตอบ Additional afternoon hours to complete cubicle assembly (ช่วยให้ทีมช่างมีเวลาประกอบคอกทำงานเพิ่มอีกสองชั่วโมงก่อนห้าโมงเย็น)'],
      ]),

    // ==================== SET 17 ====================
    // Themes: Greenhouse Hydroponics, Regional Farmers Market Logistics, Cold-Storage Harvest Co-op
    p1(17, 'l17-p1-1', 'uk_f', [
      'Rows of leafy greens grow inside vertical channels beneath glass roof panels.',
      'Farmhands are plowing mud along an open hillside field.',
      'Plastic watering cans are stacked sideways behind a wooden barn.',
      'Shoppers are carrying woven baskets down a shaded garden path.',
    ], 0, 'ตอบ Rows of leafy greens grow inside vertical channels beneath glass roof panels. (ผักใบเขียวปลูกเรียงรายในรางแนวตั้งภายในเรือนกระจกหลังคาใส)'),
    p1(17, 'l17-p1-2', 'us_m', [
      'A vendor is unfolding a striped awning above a quiet sidewalk.',
      'A market worker is stacking wooden crates of red apples under a canvas tent.',
      'Drivers are backing delivery vans onto a wet asphalt driveway.',
      'Customers are lining up beside a refrigerated cheese counter.',
    ], 1, 'ตอบ A market worker is stacking wooden crates of red apples under a canvas tent. (พ่อค้าตลาดนัดกำลังจัดเรียงลังไม้ใส่แอปเปิลแดงใต้เต็นท์ผ้าใบ)'),
    p1(17, 'l17-p1-3', 'au_f', [
      'Two mechanics are repairing a forklift tire outside a warehouse gate.',
      'Empty plastic trays are tumbling down an outdoor loading ramp.',
      'A worker in an insulated jacket is checking a clipboard inside a cold-storage room.',
      'Cargo pallets are being lifted onto a container ship by a tall crane.',
    ], 2, 'ตอบ A worker in an insulated jacket is checking a clipboard inside a cold-storage room. (พนักงานสวมเสื้อกันหนาวบุนวมกำลังเช็กใบรายการบนคลิปบอร์ดในห้องเย็น)'),
    p1(17, 'l17-p1-4', 'ca_m', [
      'A florist is trimming rose stems beside a sink full of water.',
      'A truck driver is fastening cargo straps across parked farm tractors.',
      'Customers are paying for fresh herbs at an outdoor wooden stall.',
      'A technician is inspecting gauges mounted beside a greenhouse nutrient tank.',
    ], 3, 'ตอบ A technician is inspecting gauges mounted beside a greenhouse nutrient tank. (ช่างเทคนิคกำลังตรวจดูเกจวัดข้างถังผสมสารละลายธาตุอาหารในโรงเรือน)'),
    p1(17, 'l17-p1-5', 'us_f2', [
      'Empty wooden stalls line an open cobblestone square before morning customers arrive.',
      'Crowds of diners are seated around outdoor picnic tables at noon.',
      'Street sweepers are spraying foam onto stone market steps.',
      'Produce vans are parked bumper to bumper inside an indoor garage.',
    ], 0, 'ตอบ Empty wooden stalls line an open cobblestone square before morning customers arrive. (แผงไม้ขายของเปล่าๆ เรียงแถวบนลานหินกรวดก่อนลูกค้าเช้ามาถึง)'),
    p1(17, 'l17-p1-6', 'uk_m', [
      'Several tractors are idling beside a grain silo at dusk.',
      'Wheeled produce carts are parked along a covered co-op loading platform.',
      'Workers are painting white stripes across a paved parking lot.',
      'Boxes of bottled juice are arranged on stainless supermarket shelves.',
    ], 1, 'ตอบ Wheeled produce carts are parked along a covered co-op loading platform. (รถเข็นใส่ผลผลิตแบบมีล้อจอดเรียงอยู่บนชานชาลาขนถ่ายสินค้าที่มีหลังคาคลุม)'),

    // Set 17 Part 2 (25 Qs)
    p2(17, 'l17-p2-1', 'us_m', 'uk_f', 'Where should the refrigerated berry van park during morning setup?', ['Along the West Curb beside Stall Twelve.', 'Because berries bruise easily in direct sun.', 'Just twenty crates of strawberries today.'], 0, 'ตอบ Along the West Curb beside Stall Twelve. (ถามสถานที่จอดรถห้องเย็น Where ตอบริมขอบถนนฝั่งตะวันตกข้างแผงที่ 12)'),
    p2(17, 'l17-p2-2', 'au_f', 'us_m2', 'Who monitors the hydroponic pH sensors over the weekend?', ['Elena takes the Saturday shift, and Omar covers Sunday.', 'Between five point eight and six point two.', 'Inside the plastic cabinet behind Bay Four.'], 0, 'ตอบ Elena takes the Saturday shift, and Omar covers Sunday. (ถามผู้รับผิดชอบ Who ตอบ Elena ดูแลวันเสาร์ ส่วน Omar ดูวันอาทิตย์)'),
    p2(17, 'l17-p2-3', 'ca_m', 'us_f2', 'When does the Saturday regional farmers market open to shoppers?', ['At seven-thirty sharp, though vendors unload at six.', 'Across from the municipal train station plaza.', 'Yes, rain tarps are included in the booth fee.'], 0, 'ตอบ At seven-thirty sharp, though vendors unload at six. (ถามเวลาเปิดตลาด When ตอบเจ็ดโมงครึ่งตรง แต่ร้านค้าเริ่มลงของหกโมง)'),
    p2(17, 'l17-p2-4', 'uk_f2', 'au_m', 'Should we store the harvested carrots in Cold Vault A or Vault C?', ['Vault C—it holds the higher humidity carrots need.', 'Every Tuesday and Friday morning.', 'Roughly four hundred pounds per wooden bin.'], 0, 'ตอบ Vault C—it holds the higher humidity carrots need. (ถามเลือกห้องเก็บผัก Vault A or C ตอบเลือก Vault C เพราะความชื้นสูงกว่าเหมาะกับแครอท)'),
    p2(17, 'l17-p2-5', 'us_f', 'ca_m', 'Why did our lettuce yields drop inside Greenhouse Bay Two?', ['One overhead circulation fan jammed earlier this week.', 'Pack them in vented cardboard cartons, please.', 'They tasted remarkably crisp in yesterday’s salad.'], 0, 'ตอบ One overhead circulation fan jammed earlier this week. (ถามเหตุผลที่ผลผลิตลดลง Why ตอบพัดลมระบายอากาศด้านบนขัดข้องเมื่อต้นสัปดาห์)'),
    p2(17, 'l17-p2-6', 'uk_m', 'us_f', 'Didn’t the harvest co-op vote to switch to collapsible produce crates?', ['They approved the trial, so crates arrive next month.', 'Yes, the co-op office closes at four.', 'On the lower pallet beside the loading dock.'], 0, 'ตอบ They approved the trial, so crates arrive next month. (ถามเชิงปฏิเสธ Didn’t... ตอบว่ามีมติอนุมัติทดลองใช้แล้ว ลังพับจะมาถึงเดือนหน้า)'),
    p2(17, 'l17-p2-7', 'us_m2', 'uk_f', 'How many vendor canopies fit along the shaded fountain row?', ['Twelve standard ten-by-ten tents fit comfortably.', 'Only during May through October.', 'Two hundred dollars for a seasonal pass.'], 0, 'ตอบ Twelve standard ten-by-ten tents fit comfortably. (ถามจำนวนเต็นท์ How many ตอบจุได้ 12 เต็นท์มาตรฐาน)'),
    p2(17, 'l17-p2-8', 'ca_f', 'au_m', 'Could you calibrate the dissolved-oxygen meter before we mix Bay One’s tank?', ['Sure—let me grab the calibration buffer solution from the shelf.', 'No, basil plants prefer warm afternoon light.', 'Usually twice every harvest cycle.'], 0, 'ตอบ Sure—let me grab the calibration buffer solution from the shelf. (คำขอให้ช่วยคาลิเบรตเครื่องวัด ตอบรับทันทีว่าจะไปหยิบน้ำยามาปรับค่า)'),
    p2(17, 'l17-p2-9', 'au_m', 'us_f2', 'The seal on Cold Room Three’s sliding door looks frosted over again.', ['Let’s flag that for the refrigeration tech before ice builds up.', 'Right next to the herb washing sink.', 'No, those pallets are bound for Downtown Grocers.'], 0, 'ตอบ Let’s flag that for the refrigeration tech before ice builds up. (บอกเล่าปัญหาซีลประตูห้องเย็นเป็นน้ำแข็ง -> เสนอให้รีบแจ้งช่างทำความเย็น)'),
    p2(17, 'l17-p2-10', 'us_f2', 'ca_m', 'Which regional farm supplies our co-op with heirloom tomatoes?', ['CedarHill Organics delivers twice weekly from Oak Valley.', 'At three dollars a pound wholesale.', 'Yes, the greenhouse roof vents automatically.'], 0, 'ตอบ CedarHill Organics delivers twice weekly from Oak Valley. (ถามชื่อฟาร์มผู้ส่งวัตถุดิบ Which ตอบ CedarHill Organics)'),
    p2(17, 'l17-p2-11', 'uk_m', 'au_f', 'How long can cut butterhead lettuce stay chilled before regional delivery?', ['Up to five days if kept right at two degrees Celsius.', 'In thirty-pound waxed boxes.', 'Every Thursday evening before midnight.'], 0, 'ตอบ Up to five days if kept right at two degrees Celsius. (ถามระยะเวลาเก็บได้นานแค่ไหน How long ตอบได้นานสุด 5 วันหากคุมอุณหภูมิ 2 องศา)'),
    p2(17, 'l17-p2-12', 'us_m', 'uk_f2', 'Do you want the greenhouse shading screens closed automatically at noon or manually?', ['Set them on the light-sensor timer so they respond to clouds.', 'Outside near the rainwater cistern.', 'Yes, afternoon temperatures stayed mild.'], 0, 'ตอบ Set them on the light-sensor timer so they respond to clouds. (ถามทางเลือกปิดม่านพรางแสง ตอบให้ตั้งเวลาตามเซนเซอร์แสงอัตโนมัติ)'),
    p2(17, 'l17-p2-13', 'ca_f', 'us_m2', 'Where are the laminated booth permits for new Saturday market vendors?', ['Inside the blue accordion folder on the check-in table.', 'Because health inspectors check displays at eight.', 'Roughly forty farms registered this season.'], 0, 'ตอบ Inside the blue accordion folder on the check-in table. (ถามหาใบอนุญาตแผงตลาด Where ตอบอยู่ในแฟ้มสีน้ำเงินบนโต๊ะลงทะเบียน)'),
    p2(17, 'l17-p2-14', 'au_f', 'uk_m', 'Why don’t we consolidate Tuesday’s grocery drop-offs onto one refrigerated truck?', ['Good idea—we’ll cut fuel bills nearly in half.', 'No, the orchard gate locks at dusk.', 'Around twelve miles south of Highway 9.'], 0, 'ตอบ Good idea—we’ll cut fuel bills nearly in half. (เสนอแนะรวมเที่ยวรถห้องเย็นวันอังคาร -> เห็นด้วยเพราะช่วยประหยัดค่าน้ำมันเกือบครึ่ง)'),
    p2(17, 'l17-p2-15', 'us_m2', 'ca_f', 'Aren’t you driving the cold-storage forklift for the morning potato packout?', ['No, I’m training the new dock clerk on invoice scanning today.', 'Four pallets of red potatoes arrived before dawn.', 'Check the thermometer outside Vault B.'], 0, 'ตอบ No, I’m training the new dock clerk on invoice scanning today. (ถามเชิงปฏิเสธ Aren’t you... ตอบว่าไม่ได้ขับเพราะต้องเทรนพนักงานใหม่สแกนใบแจ้งหนี้)'),
    p2(17, 'l17-p2-16', 'uk_f', 'us_m', 'What is the co-op’s per-pallet weekly fee for cold-vault storage?', ['Twenty-eight dollars for members, or thirty-five for guest growers.', 'Directly across from the regional rail depot.', 'Yes, insulated boots are kept in the locker hallway.'], 0, 'ตอบ Twenty-eight dollars for members, or thirty-five for guest growers. (ถามอัตราค่าฝากพาเลตในห้องเย็น ตอบ $28 สำหรับสมาชิก และ $35 สำหรับบุคคลทั่วไป)'),
    p2(17, 'l17-p2-17', 'ca_m', 'au_f', 'How often do the hydroponic water chillers require filter rinsing?', ['Ask Jordan—he maintains the pump schedule for every bay.', 'Yes, chilled water prevents root rot effectively.', 'About two hundred gallons per hour.'], 0, 'ตอบ Ask Jordan—he maintains the pump schedule for every bay. (ถามความถี่การล้างไส้กรอง How often ตอบเลี่ยงอย่างเป็นธรรมชาติให้ถาม Jordan ผู้ดูแลตารางปั๊มน้ำ)'),
    p2(17, 'l17-p2-18', 'us_f', 'uk_m', 'Did the city approve our farmers market request to extend onto Maple Lane?', ['They signed off for summer Sundays, starting in June.', 'Every third Saturday of the month.', 'No, we ran out of paper produce bags.'], 0, 'ตอบ They signed off for summer Sundays, starting in June. (ถามว่าเทศบาลอนุมัติขยายพื้นที่ตลาดหรือยัง ตอบอนุมัติสำหรับวันอาทิตย์ช่วงฤดูร้อนแล้ว)'),
    p2(17, 'l17-p2-19', 'uk_f2', 'us_m2', 'Our greenhouse basil crops sold out twice before ten A.M. at Saturday’s market.', ['Sounds like we ought to double the flats we harvest next Friday.', 'Yes, the market entrance faces South Park.', 'Try stacking the empty watering trays upside down.'], 0, 'ตอบ Sounds like we ought to double the flats we harvest next Friday. (บอกเล่าเรื่องโหระพาขายหมดเร็วมาก -> เสนอว่าศุกร์หน้าควรเก็บเกี่ยวเพิ่มเป็นสองเท่า)'),
    p2(17, 'l17-p2-20', 'au_m', 'ca_f', 'Those plastic harvest bins lock together neatly on pallets, don’t they?', ['They sure do—and they sanitize in half the time wood takes.', 'Over in Loading Bay Two until midday.', 'We planted four varieties of cherry tomatoes.'], 0, 'ตอบ They sure do—and they sanitize in half the time wood takes. (คำถาม Tag question ชมลังพลาสติก -> เห็นด้วยพร้อมเสริมว่าล้างฆ่าเชื้อเร็วกว่าลังไม้เท่าตัว)'),
    p2(17, 'l17-p2-21', 'us_m', 'uk_f', 'Do you know whether the co-op packs ice packs inside wholesale herb orders?', ['Only when outside temperatures top twenty-five degrees.', 'I picked up a crate of rosemary yesterday.', 'On the top tier of the greenhouse rack.'], 0, 'ตอบ Only when outside temperatures top twenty-five degrees. (ถามขั้นตอนการแพ็กเจลเย็น ตอบใส่เฉพาะวันที่อุณหภูมิภายนอกเกิน 25 องศา)'),
    p2(17, 'l17-p2-22', 'ca_f', 'au_m', 'What time does the refrigerated courier collect samples for restaurant chefs?', ['Usually around ten-fifteen, right after packing finishes.', 'To guarantee same-day kitchen prep across town.', 'About eight sample boxes of microgreens.'], 0, 'ตอบ Usually around ten-fifteen, right after packing finishes. (ถามเวลา What time ตอบประมาณ 10:15 น. หลังแพ็กเสร็จ)'),
    p2(17, 'l17-p2-23', 'uk_m', 'us_f2', 'Would you like a hand weighing those forty-pound squash bins?', ['Yes, thanks—grab the other handle so we don’t strain our backs.', 'No, the market scale sits by the front tent.', 'Two dollars cheaper than last month’s rate.'], 0, 'ตอบ Yes, thanks—grab the other handle so we don’t strain our backs. (เสนอตัวช่วยยกลังฟักทอง ตอบรับอย่างยินดีพร้อมบอกให้ช่วยจับอีกฝั่ง)'),
    p2(17, 'l17-p2-24', 'us_f2', 'ca_m', 'Have the new digital temperature loggers arrived for Vault D?', ['Not yet—the supplier expects delivery tomorrow morning.', 'Because cool air settles along the concrete floor.', 'Every fifteen minutes throughout the night.'], 0, 'ตอบ Not yet—the supplier expects delivery tomorrow morning. (ถามสถานะเครื่องวัดอุณหภูมิใหม่ ตอบยังมาไม่ถึง ซัพพลายเออร์คาดว่าส่งพรุ่งนี้เช้า)'),
    p2(17, 'l17-p2-25', 'au_f', 'us_m', 'Whose insulated delivery van is blocking the co-op’s cold-dock ramp?', ['That’s Leo’s—he’s just inside signing his route manifest.', 'Yes, the dock freezer stays at minus four.', 'Leave the extra crates beside the scale.'], 0, 'ตอบ That’s Leo’s—he’s just inside signing his route manifest. (ถามเจ้าของรถที่จอดขวางทางลาด Whose ตอบรถของ Leo เขากำลังเซ็นใบงานอยู่ข้างใน)'),

    // Set 17 Part 3 (13 Conversations × 3 Qs = 39 Qs; 3-speaker Convs at 4 & 9; Graphics at 11, 12, 13)
    p3(17, 'l17-p3-1', [
      ['Man', 'us_m', 'Hey Priya, the LED light timer in Hydroponic Bay Three keeps resetting back to midnight every time power flickers.'],
      ['Woman', 'uk_f', 'Oh no—if the spinach seedlings miss two hours of morning light, our Friday supermarket harvest will run undersized!'],
      ['Man', 'us_m', 'Can we swap in the spare digital controller from Bay Six until an electrician installs a battery backup?'],
      ['Woman', 'uk_f', 'Good idea, since Bay Six is empty for deep cleaning anyway. Grab it now, and I’ll log a service request for the surge protector.'],
    ], null, [
      ['Part 3 · Problem', 'What issue is occurring in Hydroponic Bay Three?', ['A light timer loses its settings after brief power fluctuations', 'Spinach seedlings are wilting from excessive midday heat', 'An irrigation pump stopped running before Friday’s harvest', 'Bay Six lighting fixtures burned out during cleaning'], 0, 'ตอบ A light timer loses its settings after brief power fluctuations (ตัวตั้งเวลาไฟ LED รีเซ็ตตัวเองทุกครั้งที่ไฟกระตุก)'],
      ['Part 3 · Consequence', 'Why does the woman worry about losing two hours of morning light?', ['Friday’s spinach crop may fail to reach full market size', 'Supermarket buyers will cancel next month’s contract', 'Water chillers in Bay Three could overheat', 'Electricians charge overtime rates for Friday work'], 0, 'ตอบ Friday’s spinach crop may fail to reach full market size (ผักโขมอาจโตไม่ทันขนาดส่งซูเปอร์มาร์เก็ตวันศุกร์)'],
      ['Part 3 · Action', 'What will the woman do to address the power glitch?', ['Submit a maintenance ticket for backup surge equipment', 'Move spinach trays over into Hydroponic Bay Six', 'Adjust the digital timer inside Bay Three personally', 'Notify Friday grocery buyers about a harvest delay'], 0, 'ตอบ Submit a maintenance ticket for backup surge equipment (ผู้หญิงจะส่งคำร้องซ่อมบำรุงเพื่อติดอุปกรณ์กันไฟกระชาก/แบตสำรอง)'],
    ]),

    p3(17, 'l17-p3-2', [
      ['Woman', 'au_f', 'Hi, Mr. Bennett—thanks for setting up your peach stand early. Just a heads-up, though: we’ve had two noise complaints about gas generators along this shaded aisle.'],
      ['Man', 'ca_m', 'Ah, I only brought the small generator to keep my cider slush machine chilled! Where am I allowed to plug in instead?'],
      ['Woman', 'au_f', 'We actually added four weatherproof twenty-amp outlets right behind the brick bandstand last week. Let’s move your canopy over one slot to Booth Nine so your cord reaches.'],
      ['Man', 'ca_m', 'That works great—honestly, I’d much rather skip hauling gasoline canisters every Saturday morning anyway.'],
    ], null, [
      ['Part 3 · Problem', 'Why did the market coordinator approach Mr. Bennett?', ['His portable generator was creating disruptive noise for neighbors', 'His peach tent blocked access to the brick bandstand', 'Cider machines require an extra health permit on Saturdays', 'His stall opened later than the market’s morning deadline'], 0, 'ตอบ His portable generator was creating disruptive noise for neighbors (มีคนร้องเรียนเสียงดังจากเครื่องปั่นไฟเบนซินในซอยร่มไม้)'],
      ['Part 3 · Proposal', 'What solution does the woman offer?', ['Shifting his booth next to newly installed outdoor electrical outlets', 'Turning off his cider slush machine until noon', 'Purchasing a battery-powered canopy heater from the co-op', 'Moving his peach stand into an indoor storage shed'], 0, 'ตอบ Shifting his booth next to newly installed outdoor electrical outlets (ย้ายแผงไปตำแหน่ง Booth Nine หลังเวทีอิฐที่มีปลั๊กไฟกันน้ำติดใหม่)'],
      ['Part 3 · Inference', 'How does the man feel about moving to Booth Nine?', ['Relieved to avoid carrying fuel containers each week', 'Concerned about losing foot traffic near the entrance', 'Frustrated by paying for twenty-amp outlet upgrades', 'Worried his extension cords are too short to reach'], 0, 'ตอบ Relieved to avoid carrying fuel containers each week (ดีใจที่ไม่ต้องแบกแกลลอนน้ำมันมาทุกเช้าวันเสาร์อีกต่อไป)'],
    ]),

    p3(17, 'l17-p3-3', [
      ['Man', 'uk_m', 'Nina, did the regional restaurant group call back about our winter microgreen standing order?'],
      ['Woman', 'us_f', 'Yes—Chef Alvarez wants twelve extra trays of red radish shoots every Thursday starting next week, plus double cilantro.'],
      ['Man', 'uk_m', 'Awesome! Wait—does our cold-pack courier still have van capacity on Thursdays after dropping at Harbor Market?'],
      ['Woman', 'us_f', 'I checked with dispatch—there’s room if we stack the herb flats in shorter vented totes instead of deep crates.'],
    ], null, [
      ['Part 3 · Detail', 'What did Chef Alvarez request for next week?', ['Increased weekly deliveries of microgreens and cilantro', 'Early Tuesday shipping instead of Thursday runs', 'Samples of winter kale from Harbor Market', 'Full-size lettuce heads rather than radish shoots'], 0, 'ตอบ Increased weekly deliveries of microgreens and cilantro (ขอเพิ่มถาดยอดอ่อนหัวไชเท้าแดงอีก 12 ถาด และผักชีเพิ่มเป็นสองเท่าทุกวันพฤหัส)'],
      ['Part 3 · Requirement', 'How can the farm fit the extra order into Thursday’s courier van?', ['By packing herbs into lower-profile vented containers', 'By canceling Harbor Market’s morning flower drop-off', 'By renting an additional refrigerated trailer on Thursdays', 'By trimming stem lengths before leaving the greenhouse'], 0, 'ตอบ By packing herbs into lower-profile vented containers (จัดเรียงสมุนไพรลงลังแบบเตี้ยที่มีช่องระบายอากาศแทนลังทรงลึก)'],
      ['Part 3 · Detail', 'Which stop does the courier visit before serving the restaurant group?', ['Harbor Market', 'Valley Co-op', 'Downtown Bistro', 'Oakridge Depot'], 0, 'ตอบ Harbor Market (ผู้ชายถามว่ามีพื้นที่เหลือหลังจากส่งของที่ Harbor Market แล้วหรือไม่)'],
    ]),

    p3(17, 'l17-p3-4', [
      ['Woman1', 'ca_f', 'Hold on, everyone—Vault B’s temperature alarm just pinged my phone! It climbed from two degrees up to seven in twenty minutes.'],
      ['Man', 'us_m2', 'Wait, we’ve got eighty pallets of fresh raspberries waiting inside Vault B for tomorrow’s dawn truck! Could someone have propped the roll-up door open?'],
      ['Woman2', 'au_f', 'I just checked the dock door—it’s shut tight, and the compressor fan outside sounds silent. Probably a tripped thermal breaker.'],
      ['Woman1', 'ca_f', 'Sam, call our emergency refrigeration mechanic right away. Meanwhile, let’s shift the raspberry pallets across the hall into Vault A while it’s only half full!'],
    ], null, [
      ['Part 3 · Problem', 'What triggered the mobile alert during the conversation?', ['Temperature inside a berry cold room rose unexpectedly', 'Roll-up loading doors failed to lock after hours', 'Eighty pallets of berries arrived ahead of schedule', 'A refrigeration truck broke down outside Vault A'], 0, 'ตอบ Temperature inside a berry cold room rose unexpectedly (อุณหภูมิในห้องเย็น Vault B พุ่งขึ้นจาก 2 เป็น 7 องศาอย่างรวดเร็ว)'],
      ['Part 3 · Cause', 'What does the second woman think caused the malfunction?', ['A tripped electrical breaker shutting off the compressor fan', 'Workers forgetting to close the roll-up loading door', 'Overpacked raspberry pallets blocking cold air vents', 'Warm outdoor humidity entering through roof cracks'], 0, 'ตอบ A tripped electrical breaker shutting off the compressor fan (เธอตรวจประตูแล้วว่าปิดสนิท แต่พัดลมคอมเพรสเซอร์เงียบ คาดว่าเบรกเกอร์ตัด)'],
      ['Part 3 · Action', 'What will the staff do to protect the raspberries immediately?', ['Move the pallets into a partially vacant neighboring vault', 'Load the fruit straight onto tomorrow’s delivery truck early', 'Spray chilled water over the crates inside Vault B', 'Reset the thermal breaker without calling a technician'], 0, 'ตอบ Move the pallets into a partially vacant neighboring vault (ย้ายพาเลตราซเบอร์รีข้ามโถงไปเก็บในห้อง Vault A ที่ยังว่างอยู่ครึ่งหนึ่งก่อน)'],
    ]),

    p3(17, 'l17-p3-5', [
      ['Man', 'au_m', 'Good morning, Riverbend Farmers Market. Can I help you unload those wooden apple crates?'],
      ['Woman', 'us_f2', 'Thanks, that’d be great—actually, we’re running behind because the fog on Route 19 slowed our flatbed trailer to thirty miles an hour.'],
      ['Man', 'au_m', 'No problem, just watch the wet grass along Stall Sixteen; yesterday’s thunderstorm left that corner pretty muddy.'],
      ['Woman', 'us_f2', 'Got it. Should I lay down our rubber mats before wheeling the hand truck across?'],
      ['Man', 'au_m', 'Definitely—I’ve got two spare wooden boards by the info booth if you need extra traction too.'],
    ], null, [
      ['Part 3 · Detail', 'Why did the woman arrive late to set up her apple stand?', ['Dense highway fog forced her to drive slowly', 'Thunderstorms closed Route 19 until morning', 'Her flatbed trailer ran into loading dock delays', 'She stopped to pick up rubber mats along the way'], 0, 'ตอบ Dense highway fog forced her to drive slowly (หมอกหนาบนถนน Route 19 ทำให้ต้องขับรถช้าลง)'],
      ['Part 3 · Problem', 'What hazard does the man warn her about near Stall Sixteen?', ['Muddy ground left behind by recent heavy rain', 'Narrow parking curbs blocking flatbed trailers', 'Slippery cobblestone stairs near the market entry', 'Missing tent stakes along the western aisle'], 0, 'ตอบ Muddy ground left behind by recent heavy rain (ฝนตกหนักเมื่อวานทำให้พื้นหญ้าตรงแผง 16 เปียกแฉะเป็นโคลน)'],
      ['Part 3 · Offer', 'What does the man offer to lend her?', ['Spare wooden planks from the information booth', 'A powered hand truck for heavy crates', 'Dry canvas tarps to shield apple displays', 'An alternate stall further from the grass'], 0, 'ตอบ Spare wooden planks from the information booth (เสนอให้ยืมแผ่นไม้สำรองที่บูธข้อมูลมาปูเพิ่มการยึดเกาะ)'],
    ]),

    p3(17, 'l17-p3-6', [
      ['Woman', 'uk_f2', 'Kevin, look at the nutrient monitor for Tower Group Four—electrical conductivity jumped from one point eight to two point six overnight.'],
      ['Man', 'ca_m', 'Yikes, that’s way too concentrated for delicate baby kale! Did the automated fertilizer injector stick open again?'],
      ['Woman', 'uk_f2', 'Looks like it. I flushed clean well water into the mixing sump ten minutes ago, so readings are already sliding back down.'],
      ['Man', 'ca_m', 'Good catch. I’ll dismantle the injector valve this afternoon and swap in a fresh gasket so it doesn’t burn roots over the weekend.'],
    ], null, [
      ['Part 3 · Topic', 'What are the speakers inspecting?', ['Fertilizer concentration levels in a hydroponic system', 'Broken water pumps outside Tower Group Four', 'Root rot affecting outdoor baby kale fields', 'Electricity bills for greenhouse sump heaters'], 0, 'ตอบ Fertilizer concentration levels in a hydroponic system (กำลังตรวจสอบค่าความเข้มข้นปุ๋ย/การนำไฟฟ้าในระบบไฮโดรโปนิกส์ที่สูงเกินไป)'],
      ['Part 3 · Action', 'What did the woman already do ten minutes ago?', ['Diluted the mixing tank with fresh water', 'Replaced the stuck injector valve gasket', 'Harvested baby kale ahead of schedule', 'Shut down power to Tower Group Four'], 0, 'ตอบ Diluted the mixing tank with fresh water (ผู้หญิงเติมน้ำสะอาดจากบ่อพักลงไปเจือจางในถังผสมแล้ว)'],
      ['Part 3 · Action', 'What will the man do later today?', ['Take apart the injector valve and fit a new seal', 'Order stronger liquid fertilizer for winter crops', 'Monitor conductivity numbers throughout the weekend', 'Move baby kale seedlings to another tower'], 0, 'ตอบ Take apart the injector valve and fit a new seal (ผู้ชายจะถอดวาล์วจ่ายปุ๋ยและเปลี่ยนปะเก็นใหม่ช่วงบ่ายนี้)'],
    ]),

    p3(17, 'l17-p3-7', [
      ['Man', 'us_m', 'Wait—why are there twenty bins of sweet corn sitting by Cold Room Two without lot barcode stickers?'],
      ['Woman', 'au_f', 'Oh! Maple Ridge Farm dropped those off around five A.M. before our receiving clerk clocked in, and their driver only left a paper weigh-slip.'],
      ['Man', 'us_m', 'If those ears aren’t hydro-cooled and tagged within two hours of arrival, the sugars start converting to starch fast.'],
      ['Woman', 'au_f', 'I’ll print twenty co-op barcode labels right now while you roll the bins into the pre-cooling shower bay.'],
    ], null, [
      ['Part 3 · Problem', 'What issue did the man notice at the cold-storage facility?', ['Incoming corn bins lacked barcode tracking labels', 'Maple Ridge Farm delivered twenty fewer bins than ordered', 'The pre-cooling bay ran out of cold water overnight', 'Receiving clerks misplaced a paper weigh-slip'], 0, 'ตอบ Incoming corn bins lacked barcode tracking labels (ลังข้าวโพดหวาน 20 ถังที่ส่งมาแต่เช้ามืดยังไม่มีสติกเกอร์บาร์โค้ดล็อตสินค้า)'],
      ['Part 3 · Reason', 'Why is immediate cooling urgent for the sweet corn?', ['Delays rapidly reduce the crop’s natural sweetness', 'Cold Room Two locks automatically after two hours', 'Barcode adhesive fails to stick onto warm plastic bins', 'Maple Ridge drivers need empty bins returned before noon'], 0, 'ตอบ Delays rapidly reduce the crop’s natural sweetness (หากไม่รีบลดความร้อนภายใน 2 ชั่วโมง น้ำตาลในข้าวโพดจะเปลี่ยนเป็นแป้งทำให้เสียความหวาน)'],
      ['Part 3 · Action', 'What will the woman prepare right away for the corn bins?', ['Generate the missing barcode tags for the shipment', 'Drive over to Maple Ridge Farm to verify the slip', 'Wheel the uncooled crates into the shower bay', 'Wait until the receiving clerk reports for work'], 0, 'ตอบ Generate the missing barcode tags for the shipment (ผู้หญิงจะรีบพิมพ์ฉลากบาร์โค้ด 20 แผ่นให้ทันที)'],
    ]),

    p3(17, 'l17-p3-8', [
      ['Woman', 'uk_f', 'Thanks for squeezing in this call, Ben. Our Saturday Market Association wants twenty extra reusable canvas totes ready for next weekend’s strawberry festival.'],
      ['Man', 'us_m2', 'I’d love to fill that order, though our screen-printing ink takes forty-eight hours to cure fully—and Monday is a bank holiday.'],
      ['Woman', 'uk_f', 'Wait—could you skip printing the date below our market logo? That lets us reuse any leftover totes all summer long, and saves a screen setup!'],
      ['Man', 'us_m2', 'Actually, dropping the date screen cuts prep by half a day—so yes, I can guarantee delivery by Thursday afternoon.'],
    ], null, [
      ['Part 3 · Topic', 'Why is the woman calling Ben?', ['To order custom market bags in time for an upcoming festival', 'To return damaged canvas totes from last Saturday', 'To rent screen-printing booths for strawberry growers', 'To cancel holiday advertising banners for the market'], 0, 'ตอบ To order custom market bags in time for an upcoming festival (สั่งทำกระเป๋าผ้าแคนวาสพิมพ์โลโก้ 20 ใบสำหรับเทศกาลสตรอว์เบอร์รีสุดสัปดาห์หน้า)'],
      ['Part 3 · Obstacle', 'What initially threatened the delivery deadline?', ['Ink drying requirements combined with a Monday holiday', 'Shortage of heavy cotton canvas material', 'Strawberry growers changing the festival date', 'Extra shipping delays to Saturday market offices'], 0, 'ตอบ Ink drying requirements combined with a Monday holiday (หมึกสกรีนต้องใช้เวลาบ่ม 48 ชั่วโมงและติดวันหยุดธนาคารวันจันทร์)'],
      ['Part 3 · Detail', 'What adjustment helps ensure the bags arrive by Thursday?', ['Removing the event date from the printed artwork', 'Reducing the total order from twenty bags to ten', 'Picking up the unprinted totes on Monday morning', 'Using single-color stickers instead of fabric ink'], 0, 'ตอบ Removing the event date from the printed artwork (ตัดตัวหนังสือวันที่ออกจากแบบสกรีน ช่วยลดขั้นตอนเตรียมบล็อกสกรีนลงครึ่งวัน)'],
    ]),

    p3(17, 'l17-p3-9', [
      ['Man1', 'uk_m', 'Listen up, everyone—the county highway crew just closed Cedar Creek Bridge for emergency girder checks, blocking our normal north route to Valley Market.'],
      ['Woman', 'us_f', 'Oh no! My refrigerated truck holds forty cases of organic yogurt and fresh kale—taking the mountain bypass adds thirty-five minutes!'],
      ['Man2', 'ca_m', 'Wait—you can skip the mountain bypass by cutting east along River Road and crossing at Old Mill Ferry. The ferry barge fits commercial box trucks up to twelve tons.'],
      ['Woman', 'us_f', 'My truck weighs nine tons loaded! When does the first morning ferry push off?'],
      ['Man2', 'ca_m', 'At five-forty-five A.M., and co-op dispatch already called the ferry dock so our harvest vans board first.'],
    ], null, [
      ['Part 3 · Problem', 'Why must co-op drivers change their route to Valley Market?', ['Bridge inspections closed their usual northern highway crossing', 'Heavy snow blocked the mountain bypass road', 'Forty cases of yogurt spilled on Cedar Creek Bridge', 'Old Mill Ferry suspended weekend service'], 0, 'ตอบ Bridge inspections closed their usual northern highway crossing (สะพาน Cedar Creek ถูกปิดเพื่อตรวจสอบคานเหล็กฉุกเฉิน)'],
      ['Part 3 · Detail', 'Why can the woman’s refrigerated truck safely use Old Mill Ferry?', ['Its loaded weight sits below the barge’s twelve-ton limit', 'Co-op members receive free ferry passes after six A.M.', 'Empty yogurt crates weigh far less than leafy greens', 'Mountain roads prohibit commercial box vans'], 0, 'ตอบ Its loaded weight sits below the barge’s twelve-ton limit (รถของเธอหนักรวม 9 ตัน ซึ่งน้อยกว่าขีดจำกัด 12 ตันของเรือข้ามฟาก)'],
      ['Part 3 · Detail', 'What advantage has co-op dispatch arranged at the ferry?', ['Priority boarding access for co-op harvest trucks', 'Discounted dawn bridge tolls for dairy haulers', 'Extra refrigeration power outlets on the barge', 'Later morning market opening times for late vans'], 0, 'ตอบ Priority boarding access for co-op harvest trucks (ฝ่ายจัดส่งโทรประสานท่าเรือให้รถของสหกรณ์ได้ขึ้นเรือเป็นกลุ่มแรกตอน 05:45 น.)'],
    ]),

    p3(17, 'l17-p3-10', [
      ['Woman', 'au_f', 'Dr. Park, I noticed tiny white aphids clustered under the pepper leaves in Hydroponic House Five—should we spray organic soap tonight?'],
      ['Man', 'us_m2', 'Hold off on spraying! Our restaurant buyers inspect leaves closely for soap residue, and we pick sweet peppers in four days.'],
      ['Woman', 'au_f', 'What can we use safely right before harvest instead?'],
      ['Man', 'us_m2', 'We keep refrigerated vials of beneficial ladybugs in the lab cooler—release two bottles along Row Three right at dusk when vents close.'],
    ], null, [
      ['Part 3 · Proposal', 'Why does Dr. Park advise against spraying organic soap?', ['Visible spray residue could worry buyers right before harvest', 'Soap sprays damage hydroponic watering tubes', 'Pepper leaves burn easily under evening greenhouse lights', 'Aphids inside House Five resist liquid soap solutions'], 0, 'ตอบ Visible spray residue could worry buyers right before harvest (เหลือเวลาอีกแค่ 4 วันจะเก็บเกี่ยวพริกหวานและลูกค้าเช็กคราบตกค้างบนใบอย่างเข้มงวด)'],
      ['Part 3 · Detail', 'How does the man recommend controlling the pests?', ['Releasing predatory insects kept in cold lab storage', 'Raising greenhouse vent temperatures overnight', 'Harvesting House Five sweet peppers four days early', 'Washing pepper leaves manually after picking'], 0, 'ตอบ Releasing predatory insects kept in cold lab storage (ให้ปล่อยแมลงเต่าทองกำจัดศัตรูพืชที่แช่เย็นไว้ในห้องแล็บ)'],
      ['Part 3 · Detail', 'When should the woman apply the recommended treatment?', ['At dusk once greenhouse vents shut', 'During bright midday hours', 'Four days after harvesting the crop', 'Right after rinsing Row Three leaves'], 0, 'ตอบ At dusk once greenhouse vents shut (ให้ปล่อยช่วงพลบค่ำตอนปิดช่องระบายอากาศของโรงเรือน)'],
    ]),

    // Set 17 Part 3 Graphics (Convs 11, 12, 13)
    p3(17, 'l17-p3-11', [
      ['Woman', 'us_f', 'Hi Mark, Oakridge Grocers just asked for four hundred twenty kilograms of hydroponic greens for Thursday’s promotion. Looking at our Bay Harvest Forecast, can Bay B cover that alone?'],
      ['Man', 'uk_m', 'Wait—check my morning note: technicians had to replace torn shade-cloth above Bay B yesterday, which set growth back, so Bay B will only yield three hundred kilograms this week.'],
      ['Woman', 'us_f', 'Oh, thanks for catching that! What if we combine Bay B’s three hundred with the surplus from the neighboring spinach bay?'],
      ['Man', 'uk_m', 'Hold on—Bay C is organic arugula, whereas Bay A has baby spinach! Look at Bay A’s forecast: if we pull its extra buffer above our standing café orders, we still have one hundred fifty kilos spare—plenty to hit four-twenty!'],
    ], doc('table', 'ValleyGreens Hydroponic Co-op — Weekly Bay Harvest Forecast', [['Week', 'Oct 14–18']], [
      tbl(
        ['Greenhouse Bay', 'Crop Variety', 'Original Yield Est.', 'Standing Orders'],
        [
          ['Bay A', 'Baby Spinach', '350 kg', '200 kg (Cafés)'],
          ['Bay B', 'Butterhead Lettuce', '450 kg', '0 kg (Open Promo)'],
          ['Bay C', 'Organic Arugula', '280 kg', '260 kg (Grocers)'],
          ['Bay D', 'Sweet Basil', '190 kg', '190 kg (Fully Committed)'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Why can Bay B no longer fill the 420-kilogram promotion on its own?', ['Shade-cloth repairs lowered its actual weekly harvest to 300 kg', 'Standing café contracts claimed 200 kg from Bay B', 'Butterhead lettuce failed quality inspections this week', 'Bay B crops are reserved exclusively for organic grocers'], 0, 'ตอบ Shade-cloth repairs lowered its actual weekly harvest to 300 kg (การซ่อมตาข่ายพรางแสงทำให้ผลผลิตจริงของ Bay B ลดลงจาก 450 เหลือ 300 กิโลกรัม)'],
      ['Part 3 · Graphic', 'Which crop will be added from Bay A to make up the shortfall?', ['Baby Spinach', 'Organic Arugula', 'Sweet Basil', 'Butterhead Lettuce'], 0, 'ตอบ Baby Spinach (Bay A คือ Baby Spinach ซึ่งมีส่วนเกินเหลือ 150 กก. หลังหักออร์เดอร์ร้านกาแฟ 200 กก. จาก 350 กก.)'],
      ['Part 3 · Detail', 'When is Oakridge Grocers running its produce promotion?', ['This Thursday', 'Next Monday', 'Yesterday morning', 'This Saturday'], 0, 'ตอบ This Thursday (ผู้หญิงระบุว่าลูกค้าต้องการผักสำหรับโปรโมชันวันพฤหัสบดี)'],
    ]),

    p3(17, 'l17-p3-12', [
      ['Man', 'ca_m', 'Morning! I’m driving the refrigerated flower truck for Birchwood Blooms—this Oakwood Market flyer tells vendors to unload through North Gate before seven A.M.'],
      ['Woman', 'au_f', 'Glad you stopped to ask! City crews repaved North Gate Lane yesterday, and the fresh asphalt isn’t rated for heavy refrigerated vans until Monday.'],
      ['Man', 'ca_m', 'Where should I pull in instead so I stay close to my shaded stall in Row Two?'],
      ['Woman', 'au_f', 'Follow Market Street around to East Alley—it connects straight behind Row Two, and bollards open until seven-fifteen.'],
    ], doc('map', 'Oakwood Saturday Farmers Market — Vendor Unloading Directory', [['Window', '5:30 A.M.–7:15 A.M.']], [
      box('Entry Gates & Assigned Stall Rows', [
        'North Gate · Compact Cars & Light Trailers (Row One Produce)',
        'East Alley · Bollard Access (Row Two Shaded Florists & Herbs)',
        'South Plaza · Walk-In Carts Only (Row Three Artisan Bakers)',
        'West Curb · Refrigerated Box Trucks (Row Four Dairy & Meat)',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which entry point will the flower truck driver use today?', ['East Alley', 'North Gate', 'South Plaza', 'West Curb'], 0, 'ตอบ East Alley (ประตู North Gate เพิ่งลาดยางใหม่ห้ามรถตู้ห้องเย็นหนักเข้า จึงให้วนไปเข้าทาง East Alley ซึ่งเชื่อมตรงกับ Row Two ร้านดอกไม้)'],
      ['Part 3 · Reason', 'Why is North Gate restricted for the man’s vehicle?', ['Newly poured road pavement cannot yet support heavy vans', 'Artisan bakers are unloading carts across North Gate Lane', 'Safety bollards near North Gate failed to retract at five-thirty', 'East Alley offers shorter walking distance to Row Four dairy'], 0, 'ตอบ Newly poured road pavement cannot yet support heavy vans (ถนนตรง North Gate เพิ่งปูยางมะตอยใหม่เมื่อวาน ยังรับน้ำหนักรถห้องเย็นไม่ไหวจนถึงวันจันทร์)'],
      ['Part 3 · Detail', 'Until what time do the access bollards remain lowered?', ['7:15 A.M.', '7:00 A.M.', '5:30 A.M.', '8:00 A.M.'], 0, 'ตอบ 7:15 A.M. (ทั้งผู้หญิงและแผนที่ระบุว่าเสากั้นเปิดให้รถเข้าได้ถึง 07:15 น.)'],
    ]),

    p3(17, 'l17-p3-13', [
      ['Woman', 'us_f2', 'Hi Sam, our garlic farm joined the cold co-op last month, and we need to store four pallets of cured bulbs for one full week starting Monday.'],
      ['Man', 'uk_m', 'Welcome aboard! Remember cured garlic bulbs need crisp dry storage—high humidity makes them sprout right in the mesh bags!'],
      ['Woman', 'us_f2', 'Oh, good tip! Let’s definitely pick the dry-air vault on your rate chart, then. How much do four pallets come to for members?'],
      ['Man', 'uk_m', 'Let’s see—four pallets at the member weekly rate, plus the optional digital moisture check gives you real-time phone alerts if air shifts.'],
    ], doc('table', 'SunBelt Cold-Storage Co-op — Weekly Vault Rates', [['Billing', 'Per Pallet / Week']], [
      tbl(
        ['Vault Room', 'Temp / Humidity Spec', 'Member Rate', 'Non-Member Rate'],
        [
          ['Vault 1 · Root Crop', '1°C · 95% High Humidity', '$26', '$34'],
          ['Vault 2 · Dry Allium', '0°C · 60% Dry Air', '$30', '$39'],
          ['Vault 3 · Stone Fruit', '2°C · 90% Moist Air', '$28', '$36'],
          ['Vault 4 · Deep Freeze', '-18°C · Blast Chilled', '$42', '$52'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which vault best suits the woman’s cured garlic shipment?', ['Vault 2 · Dry Allium', 'Vault 1 · Root Crop', 'Vault 3 · Stone Fruit', 'Vault 4 · Deep Freeze'], 0, 'ตอบ Vault 2 · Dry Allium (กระเทียมที่บ่มแล้วต้องการอากาศแห้งเพื่อไม่ให้งอก จึงต้องเลือก Vault 2 ที่ความชื้นต่ำ 60% Dry Air)'],
      ['Part 3 · Graphic', 'How much will storing four pallets cost the farm for one week at the member rate?', ['$120', '$156', '$104', '$112'], 0, 'ตอบ $120 (ค่าบริการสมาชิกของ Vault 2 คือ $30 ต่อพาเลต x 4 พาเลต = $120)'],
      ['Part 3 · Reason', 'Why should the grower avoid high-humidity rooms?', ['Excess moisture causes stored garlic bulbs to sprout prematurely', 'High humidity freezes mesh shipping sacks onto concrete floors', 'Root crop rooms cost more than dry allium vaults', 'Moisture sensors disconnect above ninety percent humidity'], 0, 'ตอบ Excess moisture causes stored garlic bulbs to sprout prematurely (ความชื้นสูงจะทำให้หัวกระเทียมงอกในถุงตาข่าย)'],
    ]),

    // Set 17 Part 4 (10 Talks × 3 Qs = 30 Qs; Talks 8-10 include Graphics)
    p4(17, 'l17-p4-1', 'the following recorded telephone message', 'uk_f',
      'You have reached the Meadowbrook Regional Farmers Market vendor hotline. Saturday’s market runs rain or shine from eight A.M. to one P.M. at Civic Square. Please remember all pop-up canopies must carry twenty-pound leg weights on every corner—unweighted tents will not pass our seven-thirty morning safety check. If you need to report an overnight truck breakdown before six A.M., press two to reach Market Manager Tessa Morales. For seasonal booth invoices, call back Tuesday after ten.',
      null, [
        ['Part 4 · Rule', 'What equipment requirement must all market vendors follow?', ['Attaching twenty-pound anchors to each tent corner', 'Removing pop-up canopies whenever rain is forecast', 'Unloading refrigerated vans after eight A.M.', 'Submitting safety forms at Civic Square on Tuesdays'], 0, 'ตอบ Attaching twenty-pound anchors to each tent corner (ทุกมุมของเต็นท์ขายของต้องถ่วงน้ำหนักจุดละ 20 ปอนด์ ไม่งั้นจะไม่ผ่านการตรวจความปลอดภัย)'],
        ['Part 4 · Detail', 'When is the market open to weekend customers?', ['From 8:00 A.M. to 1:00 P.M.', 'From 6:00 A.M. to 10:00 A.M.', 'From 7:30 A.M. to 1:00 P.M.', 'Tuesdays after 10:00 A.M.'], 0, 'ตอบ From 8:00 A.M. to 1:00 P.M. (ตลาดเปิดขายให้ลูกค้าวันเสาร์เวลา 08:00–13:00 น.)'],
        ['Part 4 · Action', 'Why might a caller press button two?', ['To alert the manager about a delivery truck failure before dawn', 'To pay a seasonal booth fee over the telephone', 'To request spare tent weights for Civic Square', 'To reserve an extra produce stall for next Saturday'], 0, 'ตอบ To alert the manager about a delivery truck failure before dawn (กด 2 เพื่อแจ้งผู้จัดการตลาดกรณีรถส่งของเสียก่อนหกโมงเช้า)'],
      ]),

    p4(17, 'l17-p4-2', 'the following facility tour introduction', 'us_m',
      'Welcome to NorthStar Vertical Hydroponics, everyone! Before stepping through the air-lock curtain into our leafy-greens growing hall, please slip on the blue shoe covers from the bin beside you. Keeping outdoor soil out protects our closed-loop nutrient pipes from fungal spores. Inside, you’ll see twelve-foot herb towers illuminated by pink full-spectrum LEDs—which use forty percent less electricity than traditional glass greenhouses while harvesting crisp basil year-round.',
      null, [
        ['Part 4 · Action', 'What must visitors do before entering the growing hall?', ['Put on disposable blue shoe coverings', 'Turn off personal camera flashlights', 'Wash hands inside the nutrient pump room', 'Leave bags outside the air-lock bench'], 0, 'ตอบ Put on disposable blue shoe coverings (ให้สวมถุงคลุมรองเท้าสีฟ้าก่อนผ่านม่านอากาศเข้าโรงเรือน)'],
        ['Part 4 · Reason', 'Why does the facility restrict outdoor soil inside the hall?', ['To keep fungal contaminants away from shared water pipes', 'To prevent white floor tiles from staining near doorways', 'To protect pink LED fixtures from dry dust clouds', 'To satisfy local market organic certification rules'], 0, 'ตอบ To keep fungal contaminants away from shared water pipes (ป้องกันเชื้อราจากดินภายนอกปนเปื้อนเข้าสู่ระบบท่อสารอาหารแบบปิด)'],
        ['Part 4 · Benefit', 'What advantage of the facility’s LED lighting does the speaker mention?', ['Significant savings in electrical power consumption', 'Faster root growth than full-spectrum sunlight', 'Automatic cooling of twelve-foot herb towers', 'Forty percent higher basil seed germination'], 0, 'ตอบ Significant savings in electrical power consumption (หลอด LED ใช้ไฟฟ้าน้อยกว่าโรงเรือนกระจกแบบดั้งเดิมถึง 40%)'],
      ]),

    p4(17, 'l17-p4-3', 'the following cold-storage shift briefing', 'au_m',
      'Evening, night-pack crew. Before we start loading tomorrow’s coastal supermarket trailers, take note of two changes in Cold Bay Four. First, our new thermal pallet blankets sit stacked next to Scale B—wrap every pallet of chilled berries before wheeling it onto the open platform. Second, the magnetic door seal alarm now sounds after ninety seconds instead of three minutes, so always tap the yellow wall release button once your forklift clears the doorway.',
      null, [
        ['Part 4 · Audience', 'Who is this cold-bay briefing meant for?', ['Warehouse workers loading refrigerated evening shipments', 'Coastal supermarket buyers inspecting berry pallets', 'Refrigeration technicians replacing Scale B sensors', 'Truck drivers waiting outside Cold Bay Four'], 0, 'ตอบ Warehouse workers loading refrigerated evening shipments (พนักงานกะดึกที่กำลังแพ็กและขึ้นสินค้าขึ้นรถห้องเย็น)'],
        ['Part 4 · Detail', 'Where are the new thermal pallet blankets stored?', ['Beside Scale B', 'Inside Cold Bay Four trailers', 'Near the yellow release switch', 'Along the open loading platform'], 0, 'ตอบ Beside Scale B (ผ้าห่มคลุมกันความร้อนวางซ้อนอยู่ข้างเครื่องชั่ง Scale B)'],
        ['Part 4 · Rule', 'What changed about the doorway alarm system?', ['It now triggers twice as quickly when left open', 'It automatically closes heavy dock shutters', 'It moved from the forklift path to Scale B', 'It sounds continuously while trucks are backing in'], 0, 'ตอบ It now triggers twice as quickly when left open (เสียงเตือนประตูเปิดค้างดังเร็วขึ้นเป็น 90 วินาที จากเดิม 3 นาที)'],
      ]),

    p4(17, 'l17-p4-4', 'the following radio agriculture report', 'ca_f',
      'This is Daniel Cho on FarmLine Radio. Fresh produce prices across northern cities stayed remarkably steady this January, thanks to a twelve percent expansion in regional indoor hydroponic acreage. Because automated greenhouses sit within forty miles of city distribution hubs, grocers avoided winter fuel surcharges normally added to long-haul southern produce trucks. Next month, three county farm co-ops plan to share one central blast-chilling plant to further trim morning spoilage.',
      null, [
        ['Part 4 · Cause', 'Why did winter vegetable prices remain stable in northern cities?', ['Expanded local greenhouse production reduced distant trucking costs', 'Fuel surcharges fell twelve percent across southern highways', 'Northern grocers stocked frozen greens throughout January', 'Co-ops cut retail margins at city distribution hubs'], 0, 'ตอบ Expanded local greenhouse production reduced distant trucking costs (พื้นที่ปลูกไฮโดรโปนิกส์ในท้องถิ่นเพิ่มขึ้น 12% และอยู่ใกล้เมือง ทำให้เลี่ยงค่าขนส่งทางไกลฤดูหนาว)'],
        ['Part 4 · Detail', 'How close are most automated greenhouses to urban distribution hubs?', ['Within forty miles', 'Within twelve miles', 'Over three hundred miles', 'Along northern city piers'], 0, 'ตอบ Within forty miles (โรงเรือนอัตโนมัติตั้งอยู่ห่างจากศูนย์กระจายสินค้าในเมืองไม่เกิน 40 ไมล์)'],
        ['Part 4 · Detail', 'What joint project will three county co-ops launch next month?', ['Operating a shared blast-chilling facility', 'Opening a downtown hydroponic market', 'Purchasing electric southern freight trucks', 'Expanding January acreage by twelve percent'], 0, 'ตอบ Operating a shared blast-chilling facility (สหกรณ์สามแห่งจะร่วมกันใช้โรงลดอุณหภูมิฉับพลันกลางเพื่อลดการเน่าเสีย)'],
      ]),

    p4(17, 'l17-p4-5', 'the following market public announcement', 'us_f2',
      'Good morning, Oakwood Farmers Market visitors! Over the next twenty minutes, Chef Nadia Grant will host a complimentary summer salsa demonstration right beside the Fountain Gazebo—stop by for free tasting cups and printed herb-growing cards. Also, remember our Market Token Booth by North Gate lets shoppers trade unused credit receipts for five-dollar wooden tokens accepted at every produce, cheese, and bakery stand across the square.',
      null, [
        ['Part 4 · Offer', 'What can visitors enjoy near the Fountain Gazebo?', ['A live cooking demonstration with free samples', 'Complimentary wooden shopping tokens', 'Discounted fresh herbs and bakery loaves', 'Guided walks to North Gate gardens'], 0, 'ตอบ A live cooking demonstration with free samples (มีการสาธิตทำซัลซ่าโดยเชฟ Nadia พร้อมถ้วยชิมฟรีและแจกการ์ดวิธีปลูกสมุนไพร)'],
        ['Part 4 · Detail', 'Where can shoppers obtain five-dollar wooden market tokens?', ['At the booth located near North Gate', 'Directly from Chef Nadia Grant’s table', 'Inside the bakery stand beside the square', 'At any participating cheese stall'], 0, 'ตอบ At the booth located near North Gate (ที่บูธแลกเหรียญ Market Token ข้างประตู North Gate)'],
        ['Part 4 · Detail', 'How long will the cooking demonstration last?', ['About twenty minutes', 'Until one o’clock', 'All Saturday morning', 'Thirty-five minutes'], 0, 'ตอบ About twenty minutes (ระบุว่า over the next twenty minutes)'],
      ]),

    p4(17, 'l17-p4-6', 'the following voicemail message', 'uk_m',
      'Hi Rachel, this is Tom calling from Valley Refrigerated Dispatch at five-forty A.M. Heavy morning fog delayed our ferry crossing out of South Island by forty minutes, so driver Marcus won’t hit your cold-storage dock until seven-fifteen. His trailer still holds crisp two-degree air—I verified the cab readout twice. Please ask your receiving clerk to hold Loading Door Three open slightly late so those early greenhouse strawberries get unloaded straight into Vault A.',
      null, [
        ['Part 4 · Reason', 'Why is driver Marcus arriving later than scheduled?', ['Poor coastal visibility slowed down a ferry trip', 'Trailer cooling units needed morning recalibration', 'South Island greenhouse picking finished late', 'Loading Door Three had a truck blocking access'], 0, 'ตอบ Poor coastal visibility slowed down a ferry trip (หมอกหนาตอนเช้าทำให้เรือเฟอร์รีจาก South Island ล่าช้าไป 40 นาที)'],
        ['Part 4 · Detail', 'What temperature did Tom confirm inside the delivery trailer?', ['Two degrees', 'Forty degrees', 'Fifteen degrees', 'Zero degrees'], 0, 'ตอบ Two degrees (Tom ยืนยันว่าหน้าจอในรถแจ้งอุณหภูมิเย็นคงที่อยู่ที่ 2 องศา)'],
        ['Part 4 · Action', 'What does Tom ask Rachel to arrange with her receiving clerk?', ['Keep Loading Door Three available until 7:15 A.M.', 'Send empty plastic crates back to South Island', 'Store strawberries inside Vault B instead', 'Meet Marcus at the ferry dock before seven'], 0, 'ตอบ Keep Loading Door Three available until 7:15 A.M. (ขอให้พนักงานรับของช่วยเปิดประตูขนถ่ายหมายเลข 3 รอจนถึง 07:15 น.)'],
      ]),

    p4(17, 'l17-p4-7', 'the following co-op meeting speech', 'us_f',
      'Thank you all for attending our HarvestShare Co-op autumn assembly. Last season, twenty-six member farms saved nearly nineteen thousand dollars by splitting bulk seed and cold-carton orders together. Tonight, I’m thrilled to announce our board approved funding for a shared mobile vacuum-cooler trailer. Starting next April, growers in distant western valleys can chill leafy crops right beside their fields before making the forty-mile drive here.',
      null, [
        ['Part 4 · Detail', 'How did co-op members save nearly nineteen thousand dollars last season?', ['By pooling purchases of seeds and shipping boxes', 'By charging rental fees for cold-storage pallets', 'By transporting crops forty miles on shared trains', 'By growing exclusively indoor leafy greens'], 0, 'ตอบ By pooling purchases of seeds and shipping boxes (สมาชิก 26 ฟาร์มรวมกันสั่งซื้อเมล็ดพันธุ์และกล่องกระดาษล็อตใหญ่ร่วมกัน)'],
        ['Part 4 · Topic', 'What new equipment did the co-op board just approve?', ['A portable field cooling unit on wheels', 'Twenty-six automated hydroponic trays', 'A larger cold warehouse in western valleys', 'Solar panels for autumn farm assemblies'], 0, 'ตอบ A portable field cooling unit on wheels (อนุมัติงบซื้อรถพ่วงลดความร้อนระบบสุญญากาศแบบเคลื่อนที่ mobile vacuum-cooler trailer)'],
        ['Part 4 · Detail', 'When will the new equipment enter service?', ['Next April', 'This autumn', 'Next Monday', 'Within forty days'], 0, 'ตอบ Next April (จะเริ่มให้บริการได้ตั้งแต่เดือนเมษายนปีหน้า)'],
      ]),

    // Set 17 Part 4 Graphics (Talks 8, 9, 10)
    p4(17, 'l17-p4-8', 'the following greenhouse operations briefing and calibration log', 'ca_m',
      'Team, before we kick off morning watering across the Leafy Greens Wing, check the Nutrient Tank Calibration Log from six A.M. Remember our hydroponic target sits strictly between five point eight and six point two pH so roots absorb calcium properly. Three of our four tanks landed right inside tolerance, though one drifted high overnight after a limestone filter rinse. Please send Omar to dose that single off-target tank with diluted citric acid immediately before eight o’clock pumps start.',
      doc('table', 'GreenLoop Hydroponics — Nutrient Tank Calibration Log', [['Section', 'Leafy Greens Wing']], [
        tbl(
          ['Tank ID', 'Crop Line', '6:00 A.M. pH', 'Water Temp'],
          [
            ['Tank 101', 'Romaine Hearts', '5.9 pH', '19°C'],
            ['Tank 102', 'Red Oak Lettuce', '6.1 pH', '18°C'],
            ['Tank 103', 'Curly Kale', '6.7 pH', '19°C'],
            ['Tank 104', 'Genovese Basil', '5.8 pH', '20°C'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which nutrient tank must Omar adjust immediately?', ['Tank 103', 'Tank 101', 'Tank 102', 'Tank 104'], 0, 'ตอบ Tank 103 (เกณฑ์เป้าหมายคือ 5.8–6.2 pH แต่ Tank 103 พุ่งไปที่ 6.7 pH จึงต้องให้ Omar รีบปรับลดค่า)'],
        ['Part 4 · Cause', 'What likely pushed the tank reading above target overnight?', ['Residual effects from cleaning a limestone filter', 'Warm water temperatures exceeding twenty degrees', 'Pumps turning on ahead of the eight A.M. schedule', 'Extra calcium mixed into Romaine Heart tanks'], 0, 'ตอบ Residual effects from cleaning a limestone filter (ค่าพุ่งขึ้นหลังการล้างไส้กรองหินปูนเมื่อคืน)'],
        ['Part 4 · Detail', 'What substance will be added to bring the pH back into range?', ['Diluted citric acid', 'Liquid limestone', 'Calcium powder', 'Chilled well water'], 0, 'ตอบ Diluted citric acid (ผู้พูดสั่งให้เติมกรดซิตริกเจือจางเพื่อลดค่า pH ลง)'],
      ]),

    p4(17, 'l17-p4-9', 'the following vendor logistics update and route list', 'au_f',
      'Attention Saturday market haulers—please look closely at today’s County Market route sheet before pulling onto Civic Plaza. Five minutes ago, municipal water crews closed Elm Alley indefinitely to repair a burst street valve. That blocks our regular truck route into the cold meat and cheese booths! Consequently, every refrigerated vendor assigned to Elm Alley must detour two blocks west onto Cedar Ramp, where volunteer marshals are holding cones clear until seven-fifteen.',
      doc('list', 'County Farmers Market — Saturday Truck Route & Stall Map', [['Date', 'May 18']], [
        lst([
          'Main Gate Drive · Orchard Fruit & Honey Vendors (Rows A–B)',
          'Elm Alley Entry · Refrigerated Meat, Cheese & Yogurt Trucks (Row C)',
          'South Terrace Lane · Cut Flowers & Potted Herbs (Row D)',
          'Cedar Ramp · Artisan Breads & Overflow Service Bay (Row E)',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which group of vendors is directly affected by the alley closure?', ['Meat, cheese, and yogurt sellers', 'Orchard fruit and honey vendors', 'Cut flower and herb growers', 'Artisan bread bakers in Row E'], 0, 'ตอบ Meat, cheese, and yogurt sellers (ถนน Elm Alley ที่ถูกปิดเป็นทางเข้าของรถห้องเย็นขายเนื้อ ชีส และโยเกิร์ต ใน Row C)'],
        ['Part 4 · Graphic', 'Which entrance should affected refrigerated vans use instead?', ['Cedar Ramp', 'Main Gate Drive', 'South Terrace Lane', 'Civic Plaza Walk'], 0, 'ตอบ Cedar Ramp (ให้เลี่ยงไปเข้าทาง Cedar Ramp ที่อยู่ถัดไปสองช่วงตึกทางตะวันตกแทน)'],
        ['Part 4 · Reason', 'Why did municipal workers close Elm Alley?', ['To fix a broken water pipe valve beneath the street', 'To repave overflow stalls along Row E', 'To clear morning delivery cones for volunteer marshals', 'To install extra power boxes behind Row C'], 0, 'ตอบ To fix a broken water pipe valve beneath the street (เจ้าหน้าที่ประปาปิดซ่อมวาล์วท่อน้ำที่แตกใต้ถนน)'],
      ]),

    p4(17, 'l17-p4-10', 'the following co-op dispatch announcement and schedule', 'uk_f2',
      'Morning dispatch team—let’s review today’s Reefer Dispatch Schedule before drivers back into loading bays. Good news from Westside Market: they doubled their weekly bagged carrot request from six hundred to twelve hundred pounds! Because that bumps Van 204 well over its axle rating, move those extra Westside bags onto the larger truck at Dock Five, and let Bay Four take Eastside’s light salad run instead. Keep every pallet temperature logged below three degrees.',
      doc('table', 'HarvestShare Cold Co-op — Morning Reefer Dispatch Schedule', [['Route', 'Tuesday Grocery Loop']], [
        tbl(
          ['Vehicle / Bay', 'Assigned Buyer', 'Cargo Load', 'Departure'],
          [
            ['Van 204 (Bay 2)', 'Westside Market', '600 lbs Carrots', '6:30 A.M.'],
            ['Truck 510 (Bay 5)', 'Harbor Grocers', '1,800 lbs Apples', '6:45 A.M.'],
            ['Truck 402 (Bay 4)', 'Metro Bistro Group', '1,100 lbs Potatoes', '7:00 A.M.'],
            ['Van 108 (Bay 1)', 'Eastside Deli', '450 lbs Mixed Salad', '7:15 A.M.'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which truck will now deliver Westside Market’s enlarged carrot order?', ['Truck 510 at Bay 5', 'Van 204 at Bay 2', 'Van 108 at Bay 1', 'Truck 402 at Bay 4'], 0, 'ตอบ Truck 510 at Bay 5 (Westside สั่งแครอทเพิ่มเท่าตัวเป็น 1,200 ปอนด์เกินน้ำหนัก Van 204 จึงย้ายไปขึ้นรถบรรทุกใหญ่กว่าที่ Dock/Bay Five คือ Truck 510)'],
        ['Part 4 · Graphic', 'What load is moving over to Bay Four?', ['Eastside Deli’s salad delivery', 'Harbor Grocers’ apple pallets', 'Metro Bistro’s potato bags', 'Westside Market’s extra carrots'], 0, 'ตอบ Eastside Deli’s salad delivery (ให้รถที่ Bay Four รับออร์เดอร์สลัดน้ำหนักเบาของ Eastside แทน)'],
        ['Part 4 · Detail', 'What maximum pallet temperature must drivers maintain on logs?', ['Three degrees', 'Six degrees', 'Four degrees', 'Ten degrees'], 0, 'ตอบ Three degrees (ย้ำให้บันทึกอุณหภูมิทุกพาเลตให้อยู่ต่ำกว่า 3 องศา)'],
      ]),

    // ==================== SET 18 ====================
    // Themes: SaaS Cloud Infrastructure, Enterprise Cybersecurity Audits, Mobile Helpdesk Integration
    p1(18, 'l18-p1-1', 'us_m2', [
      'A systems engineer is inspecting indicator lights inside an open server cabinet.',
      'Technicians are unloading cardboard computer boxes at a freight entrance.',
      'Office workers are connecting power cords underneath a conference table.',
      'A repair clerk is wiping dust off a row of desktop printers.',
    ], 0, 'ตอบ A systems engineer is inspecting indicator lights inside an open server cabinet. (วิศวกรระบบกำลังตรวจดูไฟสถานะภายในตู้เซิร์ฟเวอร์ที่เปิดอยู่)'),
    p1(18, 'l18-p1-2', 'uk_f2', [
      'Two analysts are pointing at charts displayed across side-by-side monitors.',
      'A programmer is locking a laptop inside a metal security locker.',
      'Employees are standing in line outside a company tech-support counter.',
      'A woman is plugging a projector cable into a wall socket.',
    ], 0, 'ตอบ Two analysts are pointing at charts displayed across side-by-side monitors. (นักวิเคราะห์สองคนกำลังชี้ดูกราฟที่แสดงอยู่บนหน้าจอคอมพิวเตอร์คู่กัน)'),

    p1(18, 'l18-p1-3', 'au_m', [
      'Workers are replacing overhead ceiling tiles above a helpdesk bay.',
      'Delivery couriers are unloading laptop carts near a lobby staircase.',
      'A support specialist wearing a headset is typing at a standing desk.',
      'Two visitors are inserting security badges into a reception scanner.',
    ], 2, 'ตอบ A support specialist wearing a headset is typing at a standing desk. (เจ้าหน้าที่ฝ่ายช่วยเหลือสวมหูฟังกำลังพิมพ์คีย์บอร์ดที่โต๊ะทำงานแบบยืน)'),
    p1(18, 'l18-p1-4', 'ca_f', [
      'An administrator is unlocking a frosted glass door with a keycard.',
      'Several keyboards are stacked inside a plastic recycling bin.',
      'Clients are sitting across from a teller at a downtown bank.',
      'A wall-mounted card reader glows beside a secure data-room entrance.',
    ], 3, 'ตอบ A wall-mounted card reader glows beside a secure data-room entrance. (เครื่องอ่านบัตรติดผนังมีไฟส่องสว่างอยู่ข้างประตูทางเข้าห้องข้อมูล)'),
    p1(18, 'l18-p1-5', 'us_f', [
      'A developer holds a smartphone beside an open laptop on a wooden desk.',
      'Technicians are pulling fiber cables through an underground conduit.',
      'Office chairs are pushed against a whiteboard covered in diagrams.',
      'A security guard is checking visitor notebooks at an entry booth.',
    ], 0, 'ตอบ A developer holds a smartphone beside an open laptop on a wooden desk. (นักพัฒนาซอฟต์แวร์ถือสมาร์ตโฟนอยู่ข้างโน้ตบุ๊กที่เปิดวางบนโต๊ะไม้)'),
    p1(18, 'l18-p1-6', 'uk_m', [
      'Engineers are testing backup batteries beneath a raised floor.',
      'Closed laptops and paper coffee cups rest along a quiet meeting table.',
      'Staff members are gathering around a wall screen during a presentation.',
      'A technician is labeling Ethernet cables with yellow tape.',
    ], 1, 'ตอบ Closed laptops and paper coffee cups rest along a quiet meeting table. (โน้ตบุ๊กที่พับปิดแล้วและแก้วกาแฟกระดาษวางอยู่บนโต๊ะประชุมที่ไม่มีคน)'),

    // Set 18 Part 2 (25 Qs)
    p2(18, 'l18-p2-1', 'uk_f', 'us_m2', 'Where are the encrypted cloud backup keys stored?', ['Inside the hardware vault on the third floor.', 'Every night at two A.M. automatically.', 'Yes, we upgraded our storage tier last quarter.'], 0, 'ตอบ Inside the hardware vault on the third floor. (ถามสถานที่เก็บกุญแจเข้ารหัส Where ตอบอยู่ในตู้นิรภัยฮาร์ดแวร์ชั้น 3)'),
    p2(18, 'l18-p2-2', 'us_m', 'au_f', 'Who signed off on the annual penetration test findings?', ['Our chief information security officer reviewed them yesterday.', 'Roughly thirty-six enterprise cloud tenants.', 'Until Friday afternoon at four-thirty.'], 0, 'ตอบ Our chief information security officer reviewed them yesterday. (ถามผู้ลงนามรับรองผล Who ตอบหัวหน้าฝ่ายความปลอดภัยสารสนเทศตรวจรับรองเมื่อวาน)'),
    p2(18, 'l18-p2-3', 'ca_f', 'uk_m', 'When is the mobile helpdesk SDK scheduled to push live?', ['Right after QA finishes tablet regression checks Thursday.', 'Via our Frankfurt cloud failover region.', 'Because support tickets rose eighteen percent.'], 0, 'ตอบ Right after QA finishes tablet regression checks Thursday. (ถามกำหนดการปล่อยระบบ When ตอบหลังทีม QA ทดสอบบนแท็บเล็ตเสร็จวันพฤหัส)'),
    p2(18, 'l18-p2-4', 'au_m', 'us_f2', 'Should we migrate staging databases to Oregon or Virginia first?', ['Virginia makes sense—our primary billing API runs there.', 'Twice every billing cycle.', 'No, staging data contains zero real customer records.'], 0, 'ตอบ Virginia makes sense—our primary billing API runs there. (ถามทางเลือกระหว่าง Oregon หรือ Virginia ตอบเลือก Virginia เพราะ API หลักอยู่ที่นั่น)'),
    p2(18, 'l18-p2-5', 'us_f', 'ca_m', 'Why did two-factor authentication prompts spike for remote sales staff?', ['An expired certificate reset their mobile tokens overnight.', 'Through the side entrance near IT Support.', 'Just thirty-two extra seat licenses.'], 0, 'ตอบ An expired certificate reset their mobile tokens overnight. (ถามสาเหตุ Why ตอบใบรับรองความปลอดภัยหมดอายุเมื่อคืนทำให้โทเคนบนมือถือรีเซ็ต)'),
    p2(18, 'l18-p2-6', 'uk_m', 'us_f', 'Hasn’t the external audit firm submitted its compliance report yet?', ['They requested one more firewall log before finalizing.', 'No, I usually work from the Toronto office.', 'Around forty megabytes per encrypted archive.'], 0, 'ตอบ They requested one more firewall log before finalizing. (ถามเชิงปฏิเสธ Hasn’t... ตอบว่ายัง เพราะขอไฟล์บันทึกไฟร์วอลล์เพิ่มอีกชุดก่อนสรุป)'),
    p2(18, 'l18-p2-7', 'us_m2', 'uk_f2', 'How many inactive contractor accounts were flagged during the audit?', ['Seventeen accounts hadn’t rotated passwords in ninety days.', 'Every third Monday of the month.', 'At the downtown cloud operations center.'], 0, 'ตอบ Seventeen accounts hadn’t rotated passwords in ninety days. (ถามจำนวนบัญชีผู้รับเหมา How many ตอบตรวจพบ 17 บัญชี)'),
    p2(18, 'l18-p2-8', 'uk_f2', 'au_m', 'Could you approve my temporary sandbox admin request before lunch?', ['I’ll review your ticket as soon as this security call ends.', 'Yes, the mobile app uses dark mode automatically.', 'For seventy-two hours maximum.'], 0, 'ตอบ I’ll review your ticket as soon as this security call ends. (คำขออนุมัติสิทธิ์ชั่วคราว ตอบรับว่าจะตรวจใบคำร้องให้ทันทีที่คุยสายความปลอดภัยจบ)'),
    p2(18, 'l18-p2-9', 'ca_m', 'us_f2', 'Helpdesk ticket attachments keep timing out on slower cellular connections.', ['Let’s ask Engineering to compress screenshots before uploading.', 'On the fourth-floor support desk.', 'No, customers rated chat speed highly last week.'], 0, 'ตอบ Let’s ask Engineering to compress screenshots before uploading. (บอกเล่าปัญหาอัปโหลดไฟล์แนบช้า -> เสนอให้วิศวกรบีบอัดภาพหน้าจอก่อนส่ง)'),
    p2(18, 'l18-p2-10', 'us_f2', 'uk_m', 'Which cloud vendor gave us the strongest uptime guarantee?', ['StrataHost promised ninety-nine point nine-nine percent.', 'Between midnight and two A.M.', 'Yes, multi-region replication prevents data loss.'], 0, 'ตอบ StrataHost promised ninety-nine point nine-nine percent. (ถามเลือกผู้ให้บริการ Which ตอบ StrataHost ให้การันตีสูงถึง 99.99%)'),
    p2(18, 'l18-p2-11', 'au_f', 'us_m', 'How long does automated server snapshot restoration usually take?', ['Under twelve minutes for standard retail databases.', 'Every Sunday evening.', 'Mostly customer order history tables.'], 0, 'ตอบ Under twelve minutes for standard retail databases. (ถามระยะเวลา How long ตอบไม่เกิน 12 นาที)'),
    p2(18, 'l18-p2-12', 'uk_m', 'ca_f', 'Would you like error alerts sent to Slack or straight to your pager app?', ['Send high-severity warnings to the pager app so I never miss them.', 'In the Dublin backup cluster.', 'Yes, three engineers are on call tonight.'], 0, 'ตอบ Send high-severity warnings to the pager app so I never miss them. (ถามทางเลือกแจ้งเตือน Slack หรือ pager app ตอบให้ส่งระดับรุนแรงไปที่ pager app)'),
    p2(18, 'l18-p2-13', 'us_m', 'au_f', 'Where can support agents find the updated mobile troubleshooting script?', ['Pinned at the top of the internal HelpDesk wiki.', 'Because mobile sign-ups doubled in October.', 'Roughly two pages long with screenshots.'], 0, 'ตอบ Pinned at the top of the internal HelpDesk wiki. (ถามหาตำแหน่งคู่มือ Where ตอบปักหมุดอยู่ด้านบนสุดของวิกิฝ่ายช่วยเหลือ)'),
    p2(18, 'l18-p2-14', 'uk_f', 'us_m2', 'Why don’t we automate password expiry reminders inside the mobile portal?', ['Smart move—that’ll cut routine reset calls significantly.', 'No, my badge expired last Tuesday.', 'Inside the server room cooling aisle.'], 0, 'ตอบ Smart move—that’ll cut routine reset calls significantly. (เสนอแนะทำแจ้งเตือนรหัสผ่านอัตโนมัติ -> เห็นด้วยเพราะช่วยลดสายโทรขอรีเซ็ตได้มาก)'),
    p2(18, 'l18-p2-15', 'us_m2', 'ca_f', 'Aren’t you presenting the SOC-2 compliance checklist to Finance today?', ['Actually, Hannah took my slot while I patch the payment API.', 'Every enterprise client requires annual audits.', 'In Conference Room 5B upstairs.'], 0, 'ตอบ Actually, Hannah took my slot while I patch the payment API. (ถามเชิงยืนยัน Aren’t you... ตอบว่า Hannah นำเสนอแทนระหว่างตนแก้แพตช์ระบบชำระเงิน)'),
    p2(18, 'l18-p2-16', 'ca_m', 'uk_f2', 'What is our average first-response time on mobile live chat this month?', ['Right around ninety seconds—well inside our three-minute SLA.', 'Ask the reception team downstairs.', 'Yes, agents handle two chats simultaneously.'], 0, 'ตอบ Right around ninety seconds—well inside our three-minute SLA. (ถามค่าเวลาเฉลี่ยตอบกลับ ตอบประมาณ 90 วินาที เร็วกว่าเกณฑ์ SLA 3 นาที)'),
    p2(18, 'l18-p2-17', 'us_f', 'au_m', 'How much did last month’s unscheduled cloud container usage cost extra?', ['Finance hasn’t closed the cloud invoice yet—ask Maya after three.', 'Yes, staging clusters shut down automatically at night.', 'Across four European data centers.'], 0, 'ตอบ Finance hasn’t closed the cloud invoice yet—ask Maya after three. (ถามยอดค่าใช้จ่ายส่วนเกิน ตอบเลี่ยงอย่างสุภาพว่าบัญชียังไม่ปิดยอด ให้ถาม Maya หลังบ่ายสาม)'),
    p2(18, 'l18-p2-18', 'uk_m', 'us_f2', 'Did the regional disaster-recovery failover drill run smoothly last night?', ['Database traffic shifted seamlessly in forty seconds, though one alert lagged.', 'Usually once every six months.', 'No, I left my laptop charger in the taxi.'], 0, 'ตอบ Database traffic shifted seamlessly in forty seconds, though one alert lagged. (ถามการซ้อมย้ายระบบสำรองเมื่อคืน ตอบฐานข้อมูลสลับได้ใน 40 วินาที แต่มีแจ้งเตือนหนึ่งตัวหน่วงเล็กน้อย)'),

    p2(18, 'l18-p2-19', 'us_f2', 'uk_m', 'Our mobile app update already reduced support phone volume by twenty percent.', ['That’s huge—in-app FAQ cards are finally paying off!', 'Yes, the charger fits USB-C laptops too.', 'Try rebooting the backup router upstairs.'], 0, 'ตอบ That’s huge—in-app FAQ cards are finally paying off! (บอกเล่าข่าวดีเรื่องการอัปเดตแอปช่วยลดสายโทรเข้า -> ตอบรับเชิงบวก)'),
    p2(18, 'l18-p2-20', 'au_m', 'ca_f', 'Our enterprise cloud billing dashboard updates once every hour, doesn’t it?', ['Actually, cost graphs refresh every fifteen minutes now.', 'Across three availability zones.', 'I prefer exporting reports as PDF files.'], 0, 'ตอบ Actually, cost graphs refresh every fifteen minutes now. (คำถาม Tag question ยืนยันความถี่อัปเดต -> แก้ข้อมูลเล็กน้อยว่าปัจจุบันอัปเดตทุก 15 นาที)'),
    p2(18, 'l18-p2-21', 'uk_f', 'us_m', 'Do you know if legacy client accounts require single sign-on by April?', ['Yes, unencrypted logins shut off automatically on April first.', 'I attended the cybersecurity workshop in Chicago.', 'Only three technical writers joined the call.'], 0, 'ตอบ Yes, unencrypted logins shut off automatically on April first. (ถามนโยบาย SSO ของบัญชีลูกค้าเก่า ตอบต้องใช้ตั้งแต่ 1 เมษายน)'),
    p2(18, 'l18-p2-22', 'us_m', 'ca_f', 'What time does our security audit kickoff call with CrestAudit begin?', ['At nine-fifteen Eastern, right after daily standup.', 'To verify firewall permissions on staging servers.', 'About twelve compliance engineers worldwide.'], 0, 'ตอบ At nine-fifteen Eastern, right after daily standup. (ถามเวลา What time ตอบ 09:15 น. ตามเวลาฝั่งตะวันออก)'),
    p2(18, 'l18-p2-23', 'ca_f', 'au_m', 'Can you share screen logs from the mobile helpdesk crash before four?', ['Sure—I’ll attach the crash trace to your Jira ticket right now.', 'No, the conference monitor uses HDMI.', 'Inside the server rack on Row Two.'], 0, 'ตอบ Sure—I’ll attach the crash trace to your Jira ticket right now. (คำขอให้ส่งไฟล์บันทึกหน้าจอที่แอปค้าง ตอบรับทันทีว่าจะแนบลงตั๋ว Jira ให้)'),
    p2(18, 'l18-p2-24', 'us_f', 'uk_m', 'Have the new multi-region load balancers been stress-tested yet?', ['Engineering ran a fifty-thousand-user simulation this morning.', 'Because peak traffic hits around nine P.M.', 'Nearly double last year’s cloud budget.'], 0, 'ตอบ Engineering ran a fifty-thousand-user simulation this morning. (ถามสถานะการทดสอบ load balancer ตอบวิศวกรจำลองทราฟฟิก 50,000 คนแล้วเมื่อเช้า)'),
    p2(18, 'l18-p2-25', 'uk_m', 'us_f2', 'Whose security hardware token is still plugged into the training room terminal?', ['Looks like Daniel’s—he ran demos there before lunch.', 'Yes, hardware tokens require a six-digit PIN.', 'Store unused cables inside Drawer C.'], 0, 'ตอบ Looks like Daniel’s—he ran demos there before lunch. (ถามเจ้าของอุปกรณ์โทเคน Whose ตอบน่าจะเป็นของ Daniel เพราะเพิ่งทำเดโมก่อนเที่ยง)'),

    // Set 18 Part 3 (13 Conversations × 3 Qs = 39 Qs; 3-speaker Convs at 3, 8, 10; Graphics at 11, 12, 13)
    p3(18, 'l18-p3-1', [
      ['Woman', 'us_f', 'Hey, Kevin—did you spot why our monthly cloud storage bill jumped twenty-two hundred dollars in September?'],
      ['Man', 'uk_m', 'Yeah, I dug into the container logs this morning. A test script left temporary video snapshots running in our staging cluster for three full weeks!'],
      ['Woman', 'us_f', 'Ouch—at least it wasn’t production traffic. Have you terminated those unused snapshots already?'],
      ['Man', 'uk_m', 'Cleared them out at nine, and I’m adding an automated lifecycle rule so staging files purge automatically after forty-eight hours.'],
    ], null, [
      ['Part 3 · Cause', 'What caused the company’s cloud bill to increase unexpectedly?', ['Forgotten test snapshots remained active in a staging environment', 'Production customer video traffic spiked in September', 'Cloud providers raised monthly container rates by twenty percent', 'Engineers migrated extra billing databases without approval'], 0, 'ตอบ Forgotten test snapshots remained active in a staging environment (สคริปต์ทดสอบทิ้งไฟล์สแนปช็อตวิดีโอค้างไว้ในคลัสเตอร์จำลองนาน 3 สัปดาห์)'],
      ['Part 3 · Detail', 'How much extra did the storage bill cost in September?', ['Twenty-two hundred dollars', 'Forty-eight hundred dollars', 'Three hundred dollars', 'Nine hundred dollars'], 0, 'ตอบ Twenty-two hundred dollars (ผู้หญิงระบุว่าค่าพื้นที่จัดเก็บพุ่งขึ้น 2,200 ดอลลาร์ในเดือนกันยายน)'],
      ['Part 3 · Action', 'What preventive step is the man taking next?', ['Setting up automatic deletion for staging files after two days', 'Moving staging tests onto local office laptops', 'Disabling container logs across production clusters', 'Requesting a billing refund from the cloud vendor'], 0, 'ตอบ Setting up automatic deletion for staging files after two days (ผู้ชายกำลังตั้งกฎลบไฟล์ทดสอบอัตโนมัติทุก 48 ชั่วโมง)'],
    ]),

    p3(18, 'l18-p3-2', [
      ['Man', 'ca_m', 'Ms. Rivera, thanks for reviewing our preliminary SOC-2 cybersecurity audit packet. Are we close to clearing every control?'],
      ['Woman', 'au_f', 'Almost there—twenty-three controls look solid, though I still need timestamped evidence showing rotated keys for six retired contractor accounts.'],
      ['Man', 'ca_m', 'Wait—I thought IT deactivated those six contractors back in June!'],
      ['Woman', 'au_f', 'Their email logins are disabled, yes, but their API access tokens still show active status in the authentication log. Revoke those keys today and export the PDF confirmation for me.'],
    ], null, [
      ['Part 3 · Problem', 'What gap did the cybersecurity auditor identify?', ['Former contractor API tokens remained active despite disabled emails', 'Twenty-three SOC-2 control forms lacked manager signatures', 'Current staff skipped quarterly password-rotation reminders', 'June authentication logs were accidentally deleted by IT'], 0, 'ตอบ Former contractor API tokens remained active despite disabled emails (แม้ปิดอีเมลผู้รับเหมาเก่า 6 รายแล้ว แต่โทเคน API ยังมีสถานะใช้งานได้อยู่)'],
      ['Part 3 · Detail', 'How many contractor accounts require key revocation?', ['Six', 'Twenty-three', 'Nine', 'Twelve'], 0, 'ตอบ Six (ผู้หญิงระบุจำนวน six retired contractor accounts)'],
      ['Part 3 · Action', 'What must the man send to Ms. Rivera after revoking the keys?', ['An exported PDF record confirming the change', 'Updated contractor email onboarding forms', 'Complete firewall rules from last June', 'Quarterly billing approvals for the audit firm'], 0, 'ตอบ An exported PDF record confirming the change (ให้ส่งออกหลักฐานการเพิกถอนโทเคนเป็นไฟล์ PDF มาให้เธอ)'],
    ]),

    p3(18, 'l18-p3-3', [
      ['Woman1', 'uk_f2', 'Thanks for hopping on, both of you. Support supervisors say customers using our mobile helpdesk app can’t upload error screenshots anymore.'],
      ['Man', 'us_m', 'Let’s narrow it down—is the upload failure happening across every device or mostly older operating systems?'],
      ['Woman2', 'ca_f', 'Our crash metrics point straight to tablet builds running version eleven or older. Yesterday’s SDK patch requested higher camera permissions than older tablets support.'],
      ['Man', 'us_m', 'Aha, that makes sense! I can add a conditional check so older tablets only request photo-library access instead of live camera permissions.'],
      ['Woman1', 'uk_f2', 'Great—ship that hotfix to beta testing by four P.M., and I’ll alert Tier-One agents to offer email workarounds meanwhile.'],
    ], null, [
      ['Part 3 · Topic', 'What bug are the software specialists diagnosing?', ['Mobile users failing to attach screenshots inside support chats', 'Helpdesk agents losing live video connections on tablets', 'Beta testing dashboards crashing on desktop browsers', 'Tier-One support emails bouncing from customer accounts'], 0, 'ตอบ Mobile users failing to attach screenshots inside support chats (ผู้ใช้แอปฝ่ายช่วยเหลือบนมือถือส่งภาพหน้าจอประกอบคำร้องไม่ได้)'],
      ['Part 3 · Cause', 'Why did the failure begin after yesterday’s SDK update?', ['New permission settings conflicted with older tablet software', 'Camera lenses on older tablets lacked photo-library storage', 'Helpdesk servers blocked screenshot files over four megabytes', 'Beta testers forgot to enable notification permissions'], 0, 'ตอบ New permission settings conflicted with older tablet software (แพตช์ SDK เมื่อวานขอสิทธิ์กล้องขั้นสูงเกินที่แท็บเล็ตรุ่นเก่าจะรองรับ)'],
      ['Part 3 · Action', 'What will the first woman instruct support agents to do temporarily?', ['Provide customers with an email option for sending screenshots', 'Ask callers to update their tablet operating systems immediately', 'Close open mobile helpdesk tickets until four P.M.', 'Route tablet users straight to beta engineering leads'], 0, 'ตอบ Provide customers with an email option for sending screenshots (แจ้งพนักงานช่วยเหลือให้แนะนำลูกค้าส่งภาพทางอีเมลไปพลางก่อน)'],
    ]),

    p3(18, 'l18-p3-4', [
      ['Man', 'uk_m', 'Welcome to CloudCare SaaS, Dr. Patel. Did your regional hospital legal team finish reviewing our enterprise subscription contract?'],
      ['Woman', 'us_f2', 'They liked the pricing, though our medical privacy board requires patient support records to stay strictly inside Canadian data centers.'],
      ['Man', 'uk_m', 'No issue at all—our Toronto and Montreal clusters run completely isolated from United States nodes, with written residency guarantees right inside Exhibit C.'],
      ['Woman', 'us_f2', 'Excellent! Email me a highlighted copy of Exhibit C so our board chair can sign off at Thursday’s meeting.'],
    ], null, [
      ['Part 3 · Requirement', 'What legal condition must the hospital satisfy before signing?', ['Patient support data must remain stored exclusively within Canada', 'CloudCare must lower its annual hospital seat pricing', 'Support records must mirror across both United States and Canadian nodes', 'Legal teams must inspect Montreal server hardware personally'], 0, 'ตอบ Patient support data must remain stored exclusively within Canada (คณะกรรมการความเป็นส่วนตัวของโรงพยาบาลกำหนดให้ข้อมูลอยู่เฉพาะในศูนย์ข้อมูลแคนาดา)'],
      ['Part 3 · Detail', 'Where is the data-residency commitment documented?', ['Inside Exhibit C of the subscription agreement', 'In the hospital board’s Thursday meeting minutes', 'On CloudCare’s public monthly pricing webpage', 'Within annual cybersecurity audit letters'], 0, 'ตอบ Inside Exhibit C of the subscription agreement (ผู้ชายระบุว่ามีคำรับรองเป็นลายลักษณ์อักษรอยู่ในเอกสารแนบ Exhibit C)'],
      ['Part 3 · Action', 'What will the man send Dr. Patel after this conversation?', ['A marked copy of Exhibit C for the board chair', 'Trial login badges for Toronto data centers', 'A revised annual pricing quote for hospital nurses', 'Encrypted backups of Thursday’s meeting'], 0, 'ตอบ A marked copy of Exhibit C for the board chair (ส่งสำเนา Exhibit C ที่ไฮไลต์ข้อความสำคัญให้ทางอีเมล)'],
    ]),

    p3(18, 'l18-p3-5', [
      ['Woman', 'au_f', 'Hi, IT Helpdesk—this is Hannah calling from the Denver airport. I swapped into a new work phone last night, and now my corporate cloud dashboard keeps rejecting my login.'],
      ['Man', 'ca_m', 'Sounds like your multi-factor authenticator app didn’t transfer its security seed over from your old handset, Hannah.'],
      ['Woman', 'au_f', 'Exactly! I’ve got a client demo in forty minutes and can’t open our presentation workspace.'],
      ['Man', 'ca_m', 'Don’t worry—once you verify your employee badge number and supervisor’s name, I’ll issue a twelve-hour bypass code so you can pair your new phone right after the demo.'],
    ], null, [
      ['Part 3 · Problem', 'Why is Hannah unable to access her corporate cloud dashboard?', ['Her multi-factor login token did not move to her replacement phone', 'Airport Wi-Fi blocked access to the presentation workspace', 'Her corporate password expired overnight while traveling', 'Her old handset was lost before saving client slides'], 0, 'ตอบ Her multi-factor login token did not move to her replacement phone (เปลี่ยนโทรศัพท์เครื่องใหม่เมื่อคืนแล้วแอปยืนยันตัวตนไม่โอนรหัสตามมาด้วย)'],
      ['Part 3 · Detail', 'Where is Hannah calling from?', ['An airport in Denver', 'A client’s conference room', 'Her home office desk', 'The IT Helpdesk counter'], 0, 'ตอบ An airport in Denver (เธอระบุว่าโทรมาจากสนามบิน Denver และมีพรีเซนต์ในอีก 40 นาที)'],
      ['Part 3 · Solution', 'How will the technician restore her access quickly?', ['By generating a temporary twelve-hour login bypass code', 'By resetting her supervisor’s corporate account password', 'By shipping a physical hardware key to Denver', 'By emailing her presentation files to a personal account'], 0, 'ตอบ By generating a temporary twelve-hour login bypass code (ออกรหัสผ่านชั่วคราวแบบใช้ได้ 12 ชั่วโมงให้หลังยืนยันตัวตน)'],
    ]),

    p3(18, 'l18-p3-6', [
      ['Man', 'us_m2', 'Maya, are we ready to shift our primary customer billing cluster onto the upgraded cloud database engine this Sunday?'],
      ['Woman', 'uk_f', 'Almost—rehearsal tests worked great, except migrating three billion transaction rows takes nearly twenty-five minutes of read-only mode.'],
      ['Man', 'us_m2', 'Twenty-five minutes! Would international European shoppers hit checkout errors during that window?'],
      ['Woman', 'uk_f', 'Not if we schedule the cutover at three A.M. Eastern Sunday, when combined global checkout volume averages under four requests per minute—and queue mobile receipts briefly until sync finishes.'],
    ], null, [
      ['Part 3 · Topic', 'What upcoming technical operation are the speakers planning?', ['Upgrading a live customer billing database on cloud servers', 'Repairing weekend checkout errors for European shoppers', 'Deleting three billion outdated transaction records', 'Launching a new mobile receipt generator'], 0, 'ตอบ Upgrading a live customer billing database on cloud servers (วางแผนย้ายระบบฐานข้อมูลบิลลูกค้าขึ้นเอนจินคลาวด์รุ่นใหม่วันอาทิตย์)'],
      ['Part 3 · Obstacle', 'What limitation occurs during the twenty-five-minute migration?', ['Database records stay temporarily locked against new writes', 'European shoppers cannot load product catalogs', 'Mobile receipt queues automatically cancel pending orders', 'Cloud servers shut down completely every Sunday at three A.M.'], 0, 'ตอบ Database records stay temporarily locked against new writes (ระบบต้องอยู่ในโหมดอ่านอย่างเดียว read-only นานราว 25 นาที)'],
      ['Part 3 · Strategy', 'Why does the woman recommend running the switch at 3:00 A.M. Eastern?', ['Global purchasing traffic drops to its lowest rate then', 'Cloud billing vendors waive Sunday maintenance surcharges', 'European banks suspend card verification at that hour', 'Engineers finish rehearsing migration scripts by midnight'], 0, 'ตอบ Global purchasing traffic drops to its lowest rate then (ช่วงตีสามวันอาทิตย์มีคำสั่งซื้อทั่วโลกต่ำมาก เฉลี่ยไม่ถึง 4 ครั้งต่อนาที)'],
    ]),

    p3(18, 'l18-p3-7', [
      ['Woman', 'ca_f', 'Hi, Raj—did you see the email from NorthPeak Security? They want firewall port 8443 opened across our production gateway for their automated vulnerability scanner.'],
      ['Man', 'au_m', 'Hold on—opening port 8443 to the entire public internet fails our own compliance policy!'],
      ['Woman', 'ca_f', 'Right, that’s why I flagged it before touching the firewall rules. Should we reject the scanner request altogether?'],
      ['Man', 'au_m', 'No, tell NorthPeak to send us their two static scanner IP addresses, and I’ll restrict port 8443 exclusively to those whitelisted sources for seventy-two hours.'],
    ], null, [
      ['Part 3 · Problem', 'Why did the woman hesitate to fulfill NorthPeak Security’s email request?', ['Opening a firewall port broadly violates company security standards', 'Automated scanners previously crashed the production gateway', 'NorthPeak Security missed the deadline for firewall requests', 'Port 8443 is already reserved for mobile helpdesk chats'], 0, 'ตอบ Opening a firewall port broadly violates company security standards (การเปิดพอร์ต 8443 สู่สาธารณะทั้งหมดผิดนโยบายความปลอดภัยของบริษัท)'],
      ['Part 3 · Solution', 'How does Raj propose handling the vulnerability scan safely?', ['Allowing access solely from two specific IP addresses temporarily', 'Running the automated scanner offline on local backups', 'Moving production gateways behind a new cloud vendor', 'Asking NorthPeak Security to scan without firewall ports'], 0, 'ตอบ Allowing access solely from two specific IP addresses temporarily (ให้ขอเลข IP คงที่ของเครื่องสแกน 2 ตัวมาเปิดอนุญาตเฉพาะเจาะจงแค่ 72 ชั่วโมง)'],
      ['Part 3 · Detail', 'How long will the temporary firewall exception remain active?', ['Seventy-two hours', 'Twenty-four hours', 'Forty-eight hours', 'One full week'], 0, 'ตอบ Seventy-two hours (ผู้ชายระบุระยะเวลาจำกัดไว้ที่ 72 ชั่วโมง)'],
    ]),

    p3(18, 'l18-p3-8', [
      ['Man1', 'uk_m', 'Good morning, support ops. Since integrating our mobile helpdesk app with the main CRM portal, urgent bug tickets keep landing in the general billing inbox.'],
      ['Woman', 'us_f', 'Wait—why would crash reports route to Billing? Our routing script checks for the keyword "charge" or "payment" first, doesn’t it?'],
      ['Man2', 'au_m', 'Aha! Look at the mobile error template: users reporting battery drain wrote "won’t hold a charge," and the script matched the word "charge" straight to Billing!'],
      ['Woman', 'us_f', 'Oh, classic keyword clash! Let’s have mobile tickets send structured category IDs instead of relying on free-text word scans.'],
    ], null, [
      ['Part 3 · Problem', 'What issue is happening with integrated mobile support tickets?', ['Technical bug reports are being sent to the wrong department', 'Billing customers are unable to submit mobile crash forms', 'The main CRM portal rejects incoming mobile attachments', 'Support ops agents lost access to the billing inbox'], 0, 'ตอบ Technical bug reports are being sent to the wrong department (รายงานบั๊กทางเทคนิคถูกส่งไปเข้ากล่องรับเรื่องฝ่ายการเงิน/บิลแทน)'],
      ['Part 3 · Cause', 'What caused the automated routing error?', ['A billing keyword accidentally matched phrases about battery charging', 'Mobile app developers swapped the CRM inbox addresses', 'Battery drain complaints exceeded daily ticket limits', 'Support supervisors disabled category filters during updates'], 0, 'ตอบ A billing keyword accidentally matched phrases about battery charging (คำว่า charge จากประโยคเรื่องแบตเตอรี่ไปตรงกับคีย์เวิร์ดฝ่ายการเงิน)'],
      ['Part 3 · Action', 'How will the team fix ticket routing?', ['Switching from word matching to explicit category codes', 'Removing battery complaints from mobile support menus', 'Assigning billing clerks to answer technical tickets', 'Disabling automated routing scripts in the CRM portal'], 0, 'ตอบ Switching from word matching to explicit category codes (เปลี่ยนให้แอปมือถือส่งรหัสหมวดหมู่ category ID ชัดเจนแทนการสแกนคำจากข้อความ)'],
    ]),

    p3(18, 'l18-p3-9', [
      ['Woman', 'us_f2', 'Leo, customer feedback shows users feel confused when our mobile helpdesk displays error code E-409 during login checks.'],
      ['Man', 'ca_m', 'Right—E-409 means a session token expired while the app sat idle, yet people assume their account was hacked or deleted!'],
      ['Woman', 'us_f2', 'Can you rewrite that prompt in plain English and add a single "Refresh Session" button underneath?'],
      ['Man', 'ca_m', 'Easy fix—I’ll update the wording today and tuck the technical code quietly inside the expandable troubleshooting link for agents.'],
    ], null, [
      ['Part 3 · Problem', 'Why are mobile users alarmed by error code E-409?', ['They mistakenly think their account suffered a breach or deletion', 'The code locks them out of support chats permanently', 'The refresh button freezes idle smartphones', 'Agents fail to recognize technical session codes'], 0, 'ตอบ They mistakenly think their account suffered a breach or deletion (ลูกค้าเข้าใจผิดว่าบัญชีถูกแฮกหรือถูกลบเมื่อเห็นรหัส E-409)'],
      ['Part 3 · Proposal', 'What two improvements does the woman request?', ['Clear everyday wording and a quick session-refresh button', 'Automatic account deletion and email password resets', 'Larger error numbers and live phone callbacks', 'Removing timeout limits on idle mobile sessions'], 0, 'ตอบ Clear everyday wording and a quick session-refresh button (ขอให้เขียนข้อความเป็นภาษาเข้าใจง่ายและเพิ่มปุ่ม Refresh Session ด้านล่าง)'],
      ['Part 3 · Detail', 'Where will the technical code E-409 still remain visible?', ['Inside a secondary help link intended for support staff', 'Across the top banner of every login screen', 'Inside automated security breach emails', 'Nowhere inside the updated mobile application'], 0, 'ตอบ Inside a secondary help link intended for support staff (ซ่อนรหัสไว้ในลิงก์รายละเอียดเพิ่มเติมสำหรับเจ้าหน้าที่ช่วยเหลือดู)'],
    ]),

    p3(18, 'l18-p3-10', [
      ['Man1', 'us_m', 'Hi Nora and Liam—let’s finalize logistics for next Tuesday’s phishing-awareness debrief with our regional sales directors.'],
      ['Woman', 'uk_f2', 'Our latest test simulation showed fourteen percent of reps clicked the fake courier invoice link, mostly on mobile phones between client visits.'],
      ['Man2', 'ca_m', 'Right, tiny phone screens hide full sender domains! We should build a three-slide visual guide showing how to tap-and-hold links on smartphones to preview real URLs.'],
      ['Man1', 'us_m', 'Love that practical demo. Send me those slides by Friday morning so I load them into the compliance portal before Tuesday’s call.'],
    ], null, [
      ['Part 3 · Topic', 'What are the three colleagues preparing for Tuesday?', ['A follow-up security training session for sales managers', 'A new mobile courier tracking app for traveling reps', 'An audit of regional sales expense invoices', 'A software upgrade blocking mobile email access'], 0, 'ตอบ A follow-up security training session for sales managers (เตรียมสรุปผลการทดสอบฟิชชิงและอบรมผู้อำนวยการฝ่ายขายวันอังคารหน้า)'],
      ['Part 3 · Detail', 'Why did many sales representatives fall for the simulated link?', ['Compact smartphone displays conceal suspicious domain names', 'Fake courier invoices looked identical to payroll bonuses', 'Mobile compliance portals failed to warn traveling staff', 'Sales directors clicked links from desktop monitors'], 0, 'ตอบ Compact smartphone displays conceal suspicious domain names (หน้าจอมือถือขนาดเล็กซ่อนชื่อโดเมนเต็มของผู้ส่ง ทำให้กดพลาดระหว่างเดินทาง)'],
      ['Part 3 · Action', 'What should Liam deliver by Friday morning?', ['Three instructional slides on inspecting smartphone web links', 'A list of fourteen sales reps who missed recent meetings', 'Updated courier delivery schedules for regional offices', 'Final test scores from Tuesday’s compliance portal'], 0, 'ตอบ Three instructional slides on inspecting smartphone web links (ให้ส่งสไลด์ 3 แผ่นสอนวิธีดู URL จริงบนมือถือภายในเช้าวันศุกร์)'],
    ]),

    // Set 18 Part 3 Graphics (Convs 11, 12, 13)
    p3(18, 'l18-p3-11', [
      ['Woman', 'uk_f', 'Alert, Sam—our EU-West cloud cluster just hit ninety-two percent memory load, and automatic updates scheduled maintenance there for four P.M.! We need to shift incoming client traffic now.'],
      ['Man', 'us_m2', 'Checking the regional status board... Look at EU-North: it has plenty of spare headroom, though our German banking clients require EU-strict compliance!'],
      ['Woman', 'uk_f', 'Good catch! Both Central and North meet EU-strict rules, so let’s compare response latency—Central responds slightly faster right now and sits comfortably at forty-eight percent load.'],
      ['Man', 'us_m2', 'Agreed. Switching the traffic router over to EU-Central immediately!'],
    ], doc('table', 'CloudScale Enterprise — Regional Server Cluster Status', [['Snapshot', 'Friday 2:00 P.M. UTC']], [
      tbl(
        ['Cluster Region', 'Current Load', 'Avg. Latency', 'Compliance Tier'],
        [
          ['EU-West (Dublin)', '92% (Alert)', '18 ms', 'EU-Strict'],
          ['EU-Central (Frankfurt)', '48% (Normal)', '22 ms', 'EU-Strict'],
          ['EU-North (Stockholm)', '35% (Normal)', '31 ms', 'EU-Strict'],
          ['US-East (Virginia)', '41% (Normal)', '86 ms', 'US-FedRAMP'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which cluster will receive the redirected client traffic?', ['EU-Central (Frankfurt)', 'EU-North (Stockholm)', 'US-East (Virginia)', 'EU-West (Dublin)'], 0, 'ตอบ EU-Central (Frankfurt) (ต้องคงมาตรฐาน EU-Strict จึงตัด US-East ออก และระหว่าง Central กับ North ฝ่ายหญิงเลือก Central ที่โหลด 48% และความหน่วงต่ำกว่าคือ 22 ms)'],
      ['Part 3 · Graphic', 'Why did the speakers decide against US-East (Virginia) despite its 41% load?', ['Banking clients require European data compliance rules', 'Its average latency exceeds one hundred milliseconds', 'Planned maintenance begins there at four P.M.', 'Traffic routers cannot reach North American servers'], 0, 'ตอบ Banking clients require European data compliance rules (ลูกค้าธนาคารเยอรมันกำหนดมาตรฐาน EU-Strict ซึ่ง US-East เป็น US-FedRAMP)'],
      ['Part 3 · Detail', 'When is maintenance scheduled for the overloaded Dublin cluster?', ['At 4:00 P.M.', 'At 2:00 P.M.', 'Tomorrow morning', 'In twenty-two minutes'], 0, 'ตอบ At 4:00 P.M. (ผู้หญิงระบุว่ากำหนดการซ่อมบำรุงอัตโนมัติของ EU-West คือเวลา 16:00 น.)'],
    ]),

    p3(18, 'l18-p3-12', [
      ['Man', 'ca_m', 'Hi Elena, our external audit sign-off happens tomorrow at five P.M. Let’s check our Open Security Findings list.'],
      ['Woman', 'au_f', 'Great news first—Networking pushed the database firewall patch last night, and I just uploaded the clean scan report, so Finding Two is completely closed!'],
      ['Man', 'ca_m', 'Awesome! What’s still blocking full approval before tomorrow’s deadline?'],
      ['Woman', 'au_f', 'Only one Critical-rated item remains open: Finance still has twelve laptops running unencrypted backup drives. Let’s walk over to the controller’s desk right now so IT can run BitLocker encryption before five.'],
    ], doc('list', 'ShieldCore Audit — Open Security Findings Board', [['Audit Window', 'Q3 SOC-2 Review']], [
      lst([
        'Finding 1 · Critical — 12 Finance Laptops Missing Full-Disk Encryption',
        'Finding 2 · High — Staging Database Port Exposed to Internal Subnet',
        'Finding 3 · Medium — Guest Wi-Fi Portal Missing 24-Hour Session Timeout',
        'Finding 4 · Low — Server Room Visitor Logbook Missing Date Column',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which item must the speakers resolve immediately before tomorrow’s deadline?', ['Finding 1', 'Finding 2', 'Finding 3', 'Finding 4'], 0, 'ตอบ Finding 1 (Finding 2 แก้แล้วเมื่อคืน จึงเหลือรายการระดับ Critical เพียงข้อเดียวคือ Finding 1 เรื่องแล็ปท็อปฝ่ายการเงิน 12 เครื่องยังไม่เข้ารหัส)'],
      ['Part 3 · Detail', 'What happened to Finding 2 prior to this conversation?', ['IT staff patched the firewall and filed verification proof', 'Auditors downgraded it from Critical to Medium priority', 'Guest Wi-Fi users forced a temporary subnet reset', 'Finance directors postponed the staging database scan'], 0, 'ตอบ IT staff patched the firewall and filed verification proof (ทีมเครือข่ายอัปเดตแพตช์ไฟร์วอลล์ฐานข้อมูลเมื่อคืนและอัปโหลดรายงานยืนยันแล้ว)'],
      ['Part 3 · Action', 'What will the speakers do immediately to resolve Finding 1?', ['Visit the finance controller to arrange immediate disk encryption', 'Update the server room paper visitor logbook', 'Ask auditors to postpone Friday’s five P.M. deadline', 'Disable guest Wi-Fi timeouts across regional branches'], 0, 'ตอบ Visit the finance controller to arrange immediate disk encryption (เดินไปหาหัวหน้าบัญชีทันทีเพื่อให้ฝ่าย IT เข้ารหัส BitLocker ให้เสร็จทันกำหนด)'],
    ]),

    p3(18, 'l18-p3-13', [
      ['Woman', 'us_f', 'Hi—this is Claire from NorthBay Logistics. Our mobile warehouse drivers just hit a checkout payment outage inside the SwiftDesk app, and I’m checking your Escalation SLA sheet.'],
      ['Man', 'uk_m', 'Oh, sorry to hear that, Claire! Wait—looking at your account record, NorthBay renewed onto our Platinum Enterprise tier on Tuesday, though your printed PDF still lists your older Gold chart.'],
      ['Woman', 'us_f', 'Really? That’s fantastic—so instead of waiting two hours under Gold, how fast does a Severity-One outage connect on our new tier?'],
      ['Man', 'uk_m', 'Fifteen minutes flat, and I’m paging our on-call payments engineer right now while keeping you on the line!'],
    ], doc('table', 'SwiftDesk Mobile SDK — Support Escalation SLA Chart', [['Account', 'Legacy Gold Reference']], [
      tbl(
        ['Severity Level', 'Issue Example', 'Gold Tier Response', 'Platinum Tier Response'],
        [
          ['Severity 1 · Critical', 'Live Payment / Login Outage', '2 Hours', '15 Minutes'],
          ['Severity 2 · High', 'Image Upload Failure', '6 Hours', '1 Hour'],
          ['Severity 3 · Medium', 'Slow Search Filtering', '1 Business Day', '4 Hours'],
          ['Severity 4 · Low', 'Minor Label Typo', '3 Business Days', '1 Business Day'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Under the company’s updated tier, how quickly should a live payment outage receive a response?', ['Within 15 minutes', 'Within 2 hours', 'Within 1 hour', 'Within 4 hours'], 0, 'ตอบ Within 15 minutes (ลูกค้าอัปเกรดเป็น Platinum แล้วเมื่อวันอังคาร และปัญหา payment outage คือ Severity 1 ซึ่งตอบสนองใน 15 นาที)'],
      ['Part 3 · Detail', 'Why was the woman initially expecting a longer wait?', ['She was referencing an outdated Gold-tier chart', 'Platinum Enterprise renewals take one week to activate', 'Payment outages count as Severity 2 issues on weekends', 'NorthBay Logistics had not signed its Tuesday contract'], 0, 'ตอบ She was referencing an outdated Gold-tier chart (ไฟล์ PDF เดิมของเธอยังแสดงสิทธิ์ระดับ Gold แบบเก่า)'],
      ['Part 3 · Action', 'What is the support representative doing while speaking with Claire?', ['Alerting an on-call payments specialist immediately', 'Emailing an updated Platinum SLA spreadsheet', 'Restarting NorthBay warehouse mobile scanners', 'Transferring her call to enterprise account billing'], 0, 'ตอบ Alerting an on-call payments specialist immediately (กำลังเรียกวิศวกรฝ่ายระบบชำระเงินที่เข้าเวรให้ทราบทันทีขณะถือสายอยู่)'],
    ]),

    // Set 18 Part 4 (10 Talks × 3 Qs = 30 Qs; Talks 8-10 include Graphics)
    p4(18, 'l18-p4-1', 'the following recorded telephone announcement', 'uk_f2',
      'Thank you for calling CloudPulse Enterprise Support. Our main API gateway is undergoing scheduled security certificate rotation until four-thirty A.M. Eastern, so automated webhook retries may experience slight delays. Standard cloud dashboards and mobile helpdesk ticket portals remain completely online. If you are experiencing a Severity-One production outage right now, press one to bridge directly to our twenty-four-hour incident commander, or check live updates at status dot cloudpulse dot net.',
      null, [
        ['Part 4 · Purpose', 'What maintenance work is taking place until 4:30 A.M. Eastern?', ['Security certificate rotation on the primary API gateway', 'A full shutdown of mobile helpdesk portals', 'Replacement of main cloud billing dashboards', 'Emergency repairs to twenty-four-hour incident phone lines'], 0, 'ตอบ Security certificate rotation on the primary API gateway (กำลังผลัดเปลี่ยนใบรับรองความปลอดภัยของเกตเวย์ API หลัก)'],
        ['Part 4 · Detail', 'Which service may face minor delays during the update?', ['Automated webhook retry calls', 'Standard web cloud dashboards', 'Mobile helpdesk login screens', 'Live status webpage updates'], 0, 'ตอบ Automated webhook retry calls (ระบุว่า automated webhook retries อาจล่าช้าเล็กน้อย)'],
        ['Part 4 · Action', 'What should a customer with a Severity-One outage do?', ['Press one to speak with an incident commander', 'Wait until four-thirty A.M. Eastern to reconnect', 'Send an email to the mobile support portal', 'Submit a certificate renewal form online'], 0, 'ตอบ Press one to speak with an incident commander (กดหมายเลข 1 เพื่อเชื่อมสายตรงถึงหัวหน้าเวรรับมือเหตุฉุกเฉินทันที)'],
      ]),

    p4(18, 'l18-p4-2', 'the following cybersecurity briefing', 'us_m',
      'Good morning, department heads. Our external auditors arrive in exactly ten days to review our annual enterprise cybersecurity controls. Remember that last year’s sole minor deduction occurred because three shared contractor spreadsheets lacked password expiration logs. This year, every single team must export active user lists from their cloud folders and submit signed quarterly access attestations to Compliance by Friday at noon—no exceptions.',
      null, [
        ['Part 4 · Audience', 'Who is the speaker addressing in this briefing?', ['Managers overseeing company departments', 'External cybersecurity audit consultants', 'Newly hired IT helpdesk trainees', 'Temporary software contractors'], 0, 'ตอบ Managers overseeing company departments (กล่าวทักทายว่า Good morning, department heads)'],
        ['Part 4 · Detail', 'What caused a deduction during last year’s audit?', ['Missing password expiration records on shared contractor sheets', 'Late access attestations submitted on Friday afternoon', 'Unencrypted cloud folders across Compliance offices', 'Outdated mobile helpdesk authentication apps'], 0, 'ตอบ Missing password expiration records on shared contractor sheets (ข้อบกพร่องเล็กน้อยปีก่อนคือสเปรดชีตของผู้รับเหมา 3 ไฟล์ไม่มีบันทึกวันหมดอายุรหัสผ่าน)'],
        ['Part 4 · Action', 'What must teams submit to Compliance by Friday noon?', ['Exported user rosters and signed access reviews', 'New password expiration schedules for contractors', 'Receipts from external cybersecurity auditors', 'Shared spreadsheets covering annual software costs'], 0, 'ตอบ Exported user rosters and signed access reviews (ให้ส่งออกรายชื่อผู้ใช้งานจากโฟลเดอร์คลาวด์พร้อมเอกสารรับรองสิทธิ์ที่ลงนามแล้วภายในเที่ยงวันศุกร์)'],
      ]),

    p4(18, 'l18-p4-3', 'the following product launch presentation', 'au_f',
      'Welcome to our quarterly product demo! Today I’m excited to introduce OneTap Diagnostics inside our HelpLink mobile SDK. Previously, when remote field workers hit a sync error, support agents spent twenty minutes asking them to read tiny app version numbers over noisy phone calls. Now, tapping "Send Diagnostics" bundles device logs, network latency, and cache status straight onto the support ticket in under three seconds—cutting average resolution time by thirty-five percent.',
      null, [
        ['Part 4 · Topic', 'What new software feature is the speaker introducing?', ['A single-tap diagnostic bundle inside a mobile support tool', 'Noise-canceling phone lines for remote field agents', 'Automated app-version upgrades across client phones', 'A twenty-minute live training video inside HelpLink'], 0, 'ตอบ A single-tap diagnostic bundle inside a mobile support tool (เปิดตัวฟีเจอร์ OneTap Diagnostics ที่ส่งข้อมูลดีบักเข้าตั๋วช่วยเหลือในคลิกเดียว)'],
        ['Part 4 · Problem', 'What challenge did support agents previously face during troubleshooting?', ['Asking users to read version details aloud over loud calls', 'Waiting three hours for network latency tests to finish', 'Losing mobile cache logs during quarterly updates', 'Rebuilding HelpLink tickets manually from paper forms'], 0, 'ตอบ Asking users to read version details aloud over loud calls (เดิมพนักงานต้องคอยถามเลขเวอร์ชันแอปตัวเล็กๆ ผ่านสายโทรศัพท์ที่มีเสียงรบกวนนานถึง 20 นาที)'],
        ['Part 4 · Benefit', 'How much faster are tickets resolved using the new feature?', ['Thirty-five percent faster', 'Twenty percent faster', 'Fifty percent faster', 'Three times faster'], 0, 'ตอบ Thirty-five percent faster (ช่วยลดเวลาเฉลี่ยในการแก้ไขปัญหาลงได้ 35%)'],
      ]),

    p4(18, 'l18-p4-4', 'the following voicemail message', 'ca_m',
      'Hi Marcus, this is Priya calling from StrataCloud Solutions Engineering at two-twenty Wednesday. I just activated your company’s isolated sandbox tenant so your security team can test single sign-on integration ahead of next month’s enterprise rollout. Check your encrypted inbox for the temporary admin token—note that the token auto-expires in forty-eight hours. Ping me once your engineers finish mapping roles so we can schedule Monday’s load check.',
      null, [
        ['Part 4 · Purpose', 'Why is Priya leaving this voicemail for Marcus?', ['To confirm activation of a test cloud environment for SSO trials', 'To postpone next month’s enterprise rollout until Monday', 'To troubleshoot a failed admin token sent earlier Wednesday', 'To invite Marcus’s engineers to a StrataCloud job interview'], 0, 'ตอบ To confirm activation of a test cloud environment for SSO trials (แจ้งว่าเปิดระบบทดสอบ sandbox tenant สำหรับทดลองเชื่อมต่อ SSO ให้เรียบร้อยแล้ว)'],
        ['Part 4 · Detail', 'Where did Priya send the temporary administrator token?', ['To Marcus’s encrypted email inbox', 'Via text message to the security team', 'Inside the sandbox portal login banner', 'Through an automated helpdesk ticket'], 0, 'ตอบ To Marcus’s encrypted email inbox (ส่งโทเคนแอดมินชั่วคราวไปในกล่องข้อความอีเมลเข้ารหัสแล้ว)'],
        ['Part 4 · Detail', 'When will the temporary admin token stop working?', ['After forty-eight hours', 'At two-twenty Wednesday', 'After Monday’s load test', 'At the end of next month'], 0, 'ตอบ After forty-eight hours (โทเคนจะหมดอายุอัตโนมัติใน 48 ชั่วโมง)'],
      ]),

    p4(18, 'l18-p4-5', 'the following internal IT briefing', 'us_f',
      'Attention traveling consultants—starting Monday, our zero-trust Wi-Fi certificate rollout becomes mandatory across all regional offices and client-site VPN tunnels. If your laptop hasn’t pulled the new security profile automatically during morning boot, open the Self-Service Hub icon in your taskbar and click "Renew Device Cert." Taking two minutes today prevents sudden conference-room disconnects when legacy guest wireless certificates expire at midnight Sunday.',
      null, [
        ['Part 4 · Audience', 'Who needs to verify their laptop security profile before Sunday?', ['Consultants who travel between offices and client locations', 'Network technicians maintaining conference-room routers', 'External clients connecting to guest wireless networks', 'Helpdesk specialists installing taskbar icons'], 0, 'ตอบ Consultants who travel between offices and client locations (กลุ่มที่ปรึกษาที่เดินทางทำงานตามสาขาและไซต์ลูกค้า)'],
        ['Part 4 · Action', 'How should employees install the profile if automatic updates fail?', ['Use the Self-Service Hub button from the taskbar', 'Restart their conference-room Wi-Fi routers at midnight', 'Submit an urgent helpdesk ticket before Monday morning', 'Connect through legacy guest wireless accounts'], 0, 'ตอบ Use the Self-Service Hub button from the taskbar (เปิดไอคอน Self-Service Hub บนทาสก์บาร์แล้วกด Renew Device Cert)'],
        ['Part 4 · Consequence', 'What happens at midnight Sunday to un-updated laptops?', ['Old guest wireless certificates expire and may cut connections', 'All Self-Service Hub applications lock for maintenance', 'Regional VPN tunnels double internet browsing speeds', 'Taskbar security icons disappear automatically'], 0, 'ตอบ Old guest wireless certificates expire and may cut connections (ใบรับรองเก่าหมดอายุเที่ยงคืนวันอาทิตย์ อาจทำให้หลุดการเชื่อมต่อกลางห้องประชุม)'],
      ]),

    p4(18, 'l18-p4-6', 'the following employee training session', 'uk_m',
      'Welcome to Module Three of our Mobile Helpdesk Onboarding! Before you start handling live screen-sharing sessions with enterprise customers, remember our strict privacy consent workflow. Agents can never initiate remote screen viewing without first pushing the customer consent banner directly inside the chat window. Furthermore, sensitive payroll or banking fields remain automatically blurred on your agent monitor—never ask callers to read masked digits aloud.',
      null, [
        ['Part 4 · Topic', 'What rule is the trainer emphasizing during this session?', ['Mandatory customer consent and privacy during remote mobile support', 'Faster keyboard shortcuts for closing Module Three tickets', 'Troubleshooting blurred display settings on agent monitors', 'Collecting banking digits verbally during payroll calls'], 0, 'ตอบ Mandatory customer consent and privacy during remote mobile support (ย้ำขั้นตอนการขอความยินยอมและความเป็นส่วนตัวก่อนแชร์หน้าจอมือถือลูกค้า)'],
        ['Part 4 · Rule', 'What must happen before an agent can view a customer’s screen?', ['The agent must send an in-chat permission prompt for approval', 'Customers must turn off payroll and banking apps manually', 'Supervisors must join live mobile screen-sharing calls', 'Agents must verify masked digits over voice calls'], 0, 'ตอบ The agent must send an in-chat permission prompt for approval (ต้องส่งแบนเนอร์ขอความยินยอมให้ลูกค้ากดอนุญาตในหน้าต่างแชตก่อนเสมอ)'],
        ['Part 4 · Detail', 'Why are banking fields invisible on the support agent’s monitor?', ['Built-in software masking blurs confidential numbers automatically', 'Enterprise customers disable monitor sharing on Module Three', 'Mobile cameras automatically pause during financial chats', 'Older smartphones hide payroll sections by default'], 0, 'ตอบ Built-in software masking blurs confidential numbers automatically (ระบบช่วยเบลอช่องข้อมูลเงินเดือนหรือธนาคารบนหน้าจอพนักงานโดยอัตโนมัติ)'],
      ]),

    p4(18, 'l18-p4-7', 'the following speaker introduction', 'us_f2',
      'Please give a warm welcome to our closing summit speaker, Nadia Hassan, Vice President of Cloud Resilience at HarborNet. Six years ago, Nadia engineered a multi-cloud disaster recovery framework that kept emergency dispatch hospitals online throughout severe Atlantic power outages. Her practical manual on ransomware rollback drills has now been translated into nine languages. Today she will demonstrate how midsize teams run realistic recovery tests in under an hour.',
      null, [
        ['Part 4 · Detail', 'What achievement from six years ago is credited to Nadia Hassan?', ['Designing backup cloud infrastructure that protected hospital systems', 'Translating ransomware recovery guides into nine languages', 'Managing HarborNet’s regional mobile helpdesk centers', 'Leading Atlantic storm repair crews for local utilities'], 0, 'ตอบ Designing backup cloud infrastructure that protected hospital systems (ออกแบบระบบกู้คืนภัยพิบัติมัลติคลาวด์ที่ช่วยให้ระบบโรงพยาบาลไม่ล่มช่วงไฟดับใหญ่)'],
        ['Part 4 · Detail', 'Into how many languages has Nadia’s manual been translated?', ['Nine', 'Six', 'Four', 'Twelve'], 0, 'ตอบ Nine (คู่มือด้าน ransomware rollback ของเธอถูกแปลไปแล้วถึง 9 ภาษา)'],
        ['Part 4 · Topic', 'What will Nadia demonstrate in today’s talk?', ['How smaller engineering teams can execute quick recovery drills', 'How hospitals replace multi-cloud storage with local disks', 'How to translate enterprise security guides efficiently', 'How to negotiate lower cloud resilience contracts'], 0, 'ตอบ How smaller engineering teams can execute quick recovery drills (สาธิตวิธีที่ทีมขนาดกลางสามารถทดสอบกู้คืนระบบเสมือนจริงให้เสร็จภายในไม่ถึง 1 ชั่วโมง)'],
      ]),

    // Set 18 Part 4 Graphics (Talks 8, 9, 10)
    p4(18, 'l18-p4-8', 'the following account review and billing table', 'uk_f',
      'Hi NorthStar Retail finance team—let’s walk through your October SaaS Subscription & Storage Overage Report together. Notice your core CRM seats and Helpdesk licenses landed right on budget. However, look at the huge jump on line three: Media Asset Cloud jumped five thousand dollars over cap after your holiday photography team uploaded raw uncompressed video files! Moving those inactive raw shoots into cold archive tier tomorrow cuts next month’s overage charge by eighty percent.',
      doc('table', 'StrataCloud — October SaaS & Storage Overage Summary', [['Account', 'NorthStar Retail']], [
        tbl(
          ['Module Line', 'Included Quota', 'October Usage', 'Overage Charge'],
          [
            ['Core CRM Seats', '250 Users', '242 Users', '$0'],
            ['Mobile Helpdesk SDK', '50,000 Tickets', '47,200 Tickets', '$0'],
            ['Media Asset Cloud', '5 TB Hot Storage', '15 TB Hot Storage', '$5,000'],
            ['Audit Log Retention', '12 Months', '12 Months', '$0'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which module caused NorthStar Retail’s $5,000 overage?', ['Media Asset Cloud', 'Core CRM Seats', 'Mobile Helpdesk SDK', 'Audit Log Retention'], 0, 'ตอบ Media Asset Cloud (ตามตาราง Media Asset Cloud ใช้พื้นที่ไป 15 TB เกินโควตา 5 TB จึงถูกคิดค่าบริการส่วนเกิน $5,000)'],
        ['Part 4 · Cause', 'Why did storage consumption spike so dramatically in October?', ['Uncompressed holiday video files were saved in standard hot storage', 'Mobile support ticket volume exceeded fifty thousand uploads', 'Eight extra CRM user licenses were added unexpectedly', 'Audit logs retained fifteen months of raw video streams'], 0, 'ตอบ Uncompressed holiday video files were saved in standard hot storage (ทีมถ่ายภาพอัปโหลดไฟล์วิดีโอดิบที่ไม่บีบอัดลงพื้นที่จัดเก็บความเร็วสูง)'],
        ['Part 4 · Recommendation', 'What change will lower next month’s excess storage cost by 80 percent?', ['Transferring unused raw video clips into cold archive storage', 'Deleting five terabytes of active mobile helpdesk tickets', 'Reducing Core CRM Seats from 250 down to 200', 'Shortening audit log retention from twelve to six months'], 0, 'ตอบ Transferring unused raw video clips into cold archive storage (ย้ายไฟล์วิดีโอดิบที่ไม่ได้ใช้งานไปยังระดับ cold archive ในวันพรุ่งนี้)'],
      ]),

    p4(18, 'l18-p4-9', 'the following compliance briefing and readiness board', 'ca_f',
      'Quick status check before our external security assessors arrive at nine A.M. Monday! Reviewing the Pre-Assessment Readiness Board, I’m thrilled to confirm Engineering, Operations, and Human Resources all cleared both background checks and MFA hardware tests before yesterday’s cutoff. One red flag remains, though: Marketing contractors still haven’t turned in signed laptop encryption attestations! Maria, please stay with Marketing’s coordinator this afternoon until every single attestation hits our folder.',
      doc('checklist', 'Enterprise Audit — Pre-Assessment Readiness Board', [['Arrival', 'Monday 9:00 A.M.']], [
        box('Department Sign-Off Status', [
          'Engineering · MFA Hardware + Encryption Logs — Complete (Verified)',
          'Operations · MFA Hardware + Encryption Logs — Complete (Verified)',
          'Human Resources · MFA Hardware + Encryption Logs — Complete (Verified)',
          'Marketing · Contractor Laptop Encryption Attestations — Pending Sign-Off',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which department still has an incomplete audit requirement?', ['Marketing', 'Engineering', 'Operations', 'Human Resources'], 0, 'ตอบ Marketing (กระดานสถานะระบุเฉพาะ Marketing ที่ยัง Pending Sign-Off เรื่องเอกสารยืนยันการเข้ารหัสแล็ปท็อปผู้รับเหมา)'],
        ['Part 4 · Detail', 'When do the external security auditors arrive?', ['Monday at 9:00 A.M.', 'Friday afternoon', 'Yesterday at noon', 'Next Tuesday morning'], 0, 'ตอบ Monday at 9:00 A.M. (ทั้งคำพูดและหัวเอกสารระบุเวลาที่ผู้ตรวจสอบจะมาถึงคือวันจันทร์ 09:00 น.)'],
        ['Part 4 · Action', 'What is Maria instructed to do this afternoon?', ['Follow up directly with Marketing until all forms are uploaded', 'Verify Engineering’s MFA hardware tokens one more time', 'Reschedule Monday’s nine A.M. assessor walkthrough', 'Encrypt Operations contractor laptops personally'], 0, 'ตอบ Follow up directly with Marketing until all forms are uploaded (ให้ Maria อยู่ประกบผู้ประสานงานฝ่ายการตลาดบ่ายนี้จนกว่าจะส่งเอกสารครบ)'],
      ]),

    p4(18, 'l18-p4-10', 'the following support metrics briefing and chart', 'au_m',
      'Good morning, HelpLink Mobile support leads. Let’s look at Week Two numbers following our new mobile integration launch. Email, web forms, and voice callbacks all comfortably beat their SLA targets! However, notice In-App Live Chat jumped well past our three-minute response ceiling on Saturday night—mostly because an unexpected login token bug triggered hundreds of simultaneous chat requests while only two agents worked the night shift. Starting Monday, we’re adding a third weekend night agent.',
      doc('table', 'HelpLink Mobile — Helpdesk Channel Response Report', [['Period', 'Post-Integration Week 2']], [
        tbl(
          ['Support Channel', 'Target SLA', 'Actual Avg. Wait', 'Satisfaction'],
          [
            ['Email Tickets', 'Under 4 Hours', '2.1 Hours', '94%'],
            ['Web Support Forms', 'Under 2 Hours', '55 Minutes', '92%'],
            ['In-App Live Chat', 'Under 3 Minutes', '6.8 Minutes', '78%'],
            ['Scheduled Voice Callbacks', 'Under 15 Minutes', '9 Minutes', '95%'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which support channel missed its target response time?', ['In-App Live Chat', 'Email Tickets', 'Web Support Forms', 'Scheduled Voice Callbacks'], 0, 'ตอบ In-App Live Chat (เป้าหมายกำหนดไว้ต่ำกว่า 3 นาที แต่ค่าเฉลี่ยจริงพุ่งไปถึง 6.8 นาที)'],
        ['Part 4 · Cause', 'What triggered the surge in Saturday night chat requests?', ['A login token malfunction affected many mobile users at once', 'Scheduled voice callbacks went offline over the weekend', 'Email tickets automatically converted into live mobile chats', 'Two agents canceled their Saturday night shifts unexpectedly'], 0, 'ตอบ A login token malfunction affected many mobile users at once (บั๊กโทเคนล็อกอินคืนวันเสาร์ทำให้ผู้ใช้ทักแชตเข้ามาพร้อมกันหลายร้อยราย)'],
        ['Part 4 · Action', 'What staffing adjustment takes effect next week?', ['Assigning an additional agent to the weekend evening shift', 'Moving two web-form agents into weekday email queues', 'Extending the live-chat response target to seven minutes', 'Disabling in-app chat during Saturday night hours'], 0, 'ตอบ Assigning an additional agent to the weekend evening shift (เริ่มวันจันทร์หน้าจะเพิ่มพนักงานกะดึกช่วงสุดสัปดาห์เป็นคนที่ 3)'],
      ]),

    // ==================== SET 19 ====================
    // Themes: Aquatic/Tennis Sports Complex, Fitness Club Membership Renewal, Stadium Facility Ops
    p1(19, 'l19-p1-1', 'uk_f', [
      'Floating lane dividers stretch across an indoor swimming pool.',
      'Swimmers are diving together off starting blocks during a race.',
      'Lifeguards are folding white towels on a wooden bench.',
      'Maintenance workers are draining water from an outdoor fountain.',
    ], 0, 'ตอบ Floating lane dividers stretch across an indoor swimming pool. (ทุ่นแบ่งเลนลอยพาดยาวตลอดสระว่ายน้ำในร่ม โดยไม่มีคนว่ายในภาพ)'),
    p1(19, 'l19-p1-2', 'us_m', [
      'Spectators are climbing concrete steps inside a crowded arena.',
      'Two players are rallying across a tennis court enclosed by chain-link fencing.',
      'A coach is painting white boundary lines onto a grass field.',
      'Several tennis rackets are leaning upright inside a locker room.',
    ], 1, 'ตอบ Two players are rallying across a tennis court enclosed by chain-link fencing. (ผู้เล่นสองคนกำลังตีโต้ลูกเทนนิสในสนามที่มีรั้วตาข่ายล้อมรอบ)'),
    p1(19, 'l19-p1-3', 'au_f', [
      'Gym members are stretching on foam mats beside large mirrors.',
      'A trainer is wiping sweat off a row of treadmills.',
      'A receptionist is handing a plastic membership card across a front counter.',
      'Visitors are carrying duffel bags down an outdoor staircase.',
    ], 2, 'ตอบ A receptionist is handing a plastic membership card across a front counter. (พนักงานต้อนรับกำลังยื่นบัตรสมาชิกพลาสติกข้ามเคาน์เตอร์ด้านหน้า)'),
    p1(19, 'l19-p1-4', 'ca_m', [
      'Soccer players are warming up around midfield cones.',
      'Security guards are unlocking turnstile gates before a match.',
      'Workers are replacing burnt-out bulbs on a tall stadium light tower.',
      'A groundskeeper is guiding turf maintenance machinery across a striped athletic field.',
    ], 3, 'ตอบ A groundskeeper is guiding turf maintenance machinery across a striped athletic field. (เจ้าหน้าที่ดูแลสนามกำลังบังคับเครื่องตัด/บำรุงรักษาหญ้าบนสนามกีฬา)'),
    p1(19, 'l19-p1-5', 'us_f2', [
      'Stationary spin bicycles face a mirrored wall inside an empty studio.',
      'Cyclists are riding single file along a paved park trail.',
      'Technicians are assembling weight benches near a glass doorway.',
      'Towels have been draped over the handlebars of parked bicycles.',
    ], 0, 'ตอบ Stationary spin bicycles face a mirrored wall inside an empty studio. (จักรยานปั่นออกกำลังกายหลายคันตั้งหันหน้าเข้าหากระจกในสตูดิโอที่ว่างอยู่)'),
    p1(19, 'l19-p1-6', 'uk_m', [
      'Ushers are handing out printed programs beside a ticket booth.',
      'Empty tiered seating rises behind a running track and digital scoreboard.',
      'Fans are cheering beneath a covered pavilion during rainfall.',
      'Concession workers are stacking cardboard drink trays near an exit.',
    ], 1, 'ตอบ Empty tiered seating rises behind a running track and digital scoreboard. (อัฒจันทร์ที่นั่งแบบขั้นบันไดที่ยังว่างเปล่าตั้งเรียงขึ้นไปด้านหลังลู่วิ่งและป้ายคะแนน)'),

    // Set 19 Part 2 (25 Qs)
    p2(19, 'l19-p2-1', 'us_m2', 'uk_f', 'Where do club members pick up complimentary locker padlocks?', ['At the towel counter right beside the pool doors.', 'Usually before seven o’clock on weekday mornings.', 'Yes, annual renewals include free towel service.'], 0, 'ตอบ At the towel counter right beside the pool doors. (ถามสถานที่รับแม่กุญแจล็อกเกอร์ Where ตอบที่เคาน์เตอร์ผ้าเช็ดตัวข้างประตูสระว่ายน้ำ)'),
    p2(19, 'l19-p2-2', 'uk_m', 'au_f', 'Who coaches the intermediate morning tennis clinic on Saturdays?', ['Coach Ramirez leads that group on Courts One and Two.', 'Only during dry summer months.', 'Fifteen dollars per drop-in session.'], 0, 'ตอบ Coach Ramirez leads that group on Courts One and Two. (ถามผู้สอน Who ตอบโค้ช Ramirez สอนกลุ่มนั้นที่คอร์ต 1 และ 2)'),
    p2(19, 'l19-p2-3', 'ca_f', 'us_m', 'When does our stadium’s early-bird season ticket renewal window close?', ['At midnight this Friday—after that, standard rates apply.', 'Along the lower west concourse gate.', 'Because seating sections were renumbered last spring.'], 0, 'ตอบ At midnight this Friday—after that, standard rates apply. (ถามกำหนดปิดรับต่ออายุตั๋ว Early-bird When ตอบเที่ยงคืนวันศุกร์นี้)'),
    p2(19, 'l19-p2-4', 'au_m', 'uk_f2', 'Would you like to book the indoor clay court or an outdoor hard court?', ['Let’s play indoors—dark rain clouds are rolling in fast.', 'No, I strung my racket yesterday evening.', 'Every Tuesday and Thursday at six.'], 0, 'ตอบ Let’s play indoors—dark rain clouds are rolling in fast. (คำถามเลือกสนามในร่มหรือกลางแจ้ง ตอบเลือกในร่มเพราะเมฆฝนกำลังตั้งเค้า)'),
    p2(19, 'l19-p2-5', 'us_f', 'ca_m', 'Why was the stadium’s main scoreboard switched off during practice?', ['Technicians are replacing two faulty LED driver panels.', 'Behind the north end-zone goalpost.', 'Just forty-five minutes before kickoff.'], 0, 'ตอบ Technicians are replacing two faulty LED driver panels. (ถามเหตุผลที่ปิดป้ายคะแนน Why ตอบช่างกำลังเปลี่ยนแผงควบคุม LED ที่เสียสองตัว)'),
    p2(19, 'l19-p2-6', 'uk_f2', 'us_m2', 'Hasn’t the city aquatic inspector checked our pool filtration gauges yet?', ['He came by at eight and cleared all three lap tanks.', 'No, I rarely swim in the therapy lane.', 'Around twenty-seven degrees Celsius.'], 0, 'ตอบ He came by at eight and cleared all three lap tanks. (ถามเชิงปฏิเสธ Hasn’t... ตอบว่ามาตรวจตอนแปดโมงและผ่านมาตรฐานครบทั้ง 3 สระแล้ว)'),
    p2(19, 'l19-p2-7', 'us_m', 'uk_f', 'How many guest passes come with a Gold Fitness renewal package?', ['Six complimentary passes usable any day of the week.', 'Inside the laminated member folder.', 'Nearly twenty minutes on the rowing machine.'], 0, 'ตอบ Six complimentary passes usable any day of the week. (ถามจำนวนบัตรเชิญเพื่อน How many ตอบได้ 6 ใบใช้ได้ทุกวัน)'),
    p2(19, 'l19-p2-8', 'ca_m', 'au_f', 'Could you turn on the floodlights over Tennis Courts Five and Six?', ['Sure—the master switch panel sits behind the pro shop desk.', 'Yes, court resurfacing starts next October.', 'For two doubles matches in a row.'], 0, 'ตอบ Sure—the master switch panel sits behind the pro shop desk. (คำขอให้เปิดไฟสปอตไลต์สนามเทนนิส ตอบตกลงพร้อมบอกตำแหน่งแผงสวิตช์)'),
    p2(19, 'l19-p2-9', 'au_f', 'us_m', 'The turnstile barcode reader at Stadium Gate C isn’t scanning mobile tickets.', ['I’ll radio Tech Ops to swap in a spare scanner immediately.', 'Around forty thousand fans attended last weekend.', 'No, parking lot shuttles drop off at Gate A.'], 0, 'ตอบ I’ll radio Tech Ops to swap in a spare scanner immediately. (บอกเล่าปัญหาเครื่องสแกนตั๋วไม่ทำงาน -> เสนอตัววิทยุแจ้งทีมเทคนิคมาเปลี่ยนเครื่องสำรองทันที)'),
    p2(19, 'l19-p2-10', 'us_f2', 'uk_m', 'Which membership plan lets members freeze billing while traveling abroad?', ['Both the Platinum and Annual Family tiers include three freeze months.', 'Every first Monday of the quarter.', 'Yes, travel receipts must show departure dates.'], 0, 'ตอบ Both the Platinum and Annual Family tiers include three freeze months. (ถามเลือกแพ็กเกจสมาชิกที่พักการเรียกเก็บเงินได้ Which ตอบแพ็กเกจ Platinum และ Annual Family)'),
    p2(19, 'l19-p2-11', 'uk_m', 'ca_f', 'How long does it take groundskeeper crews to roll out the concert turf cover?', ['Usually around four hours with six staff working.', 'Across the entire south football field.', 'Mostly protective interlocking plastic tiles.'], 0, 'ตอบ Usually around four hours with six staff working. (ถามระยะเวลาปูแผ่นคลุมหญ้าสนามกีฬา How long ตอบประมาณ 4 ชั่วโมงด้วยทีมงาน 6 คน)'),
    p2(19, 'l19-p2-12', 'us_m', 'uk_f2', 'Should we schedule annual swim-lane rope replacement in May or September?', ['September works better—summer swim camps pack the pool in May.', 'By the shallow diving platform.', 'Yes, nylon lane cables stretched out badly.'], 0, 'ตอบ September works better—summer swim camps pack the pool in May. (ถามทางเลือกระหว่างเดือนพฤษภาคมหรือกันยายน ตอบกันยายนดีกว่าเพราะพฤษภาคมมีค่ายว่ายน้ำแน่น)'),
    p2(19, 'l19-p2-13', 'ca_f', 'au_m', 'Where did Maintenance store the spare stadium concession cash drawers?', ['Locked inside the Operations vault beside Gate Two.', 'Because Saturday’s doubleheader draws huge crowds.', 'Roughly thirty beverage stands open at five.'], 0, 'ตอบ Locked inside the Operations vault beside Gate Two. (ถามหาที่เก็บลิ้นชักเก็บเงินสำรอง Where ตอบล็อกไว้ในห้องนิรภัยฝ่ายปฏิบัติการข้างประตู 2)'),
    p2(19, 'l19-p2-14', 'au_m', 'us_f', 'Why don’t we offer a discounted yoga pass to returning tennis members?', ['That’s a clever way to boost morning studio attendance.', 'No, my gym locker sits near the sauna.', 'On Saturday afternoon around two.'], 0, 'ตอบ That’s a clever way to boost morning studio attendance. (เสนอแนะโปรโมชันพ่วงคลาสโยคะ -> เห็นด้วยว่าช่วยเพิ่มยอดคนเข้าสตูดิโอช่วงเช้า)'),
    p2(19, 'l19-p2-15', 'us_f', 'uk_m', 'Aren’t you leading the stadium emergency evacuation drill this afternoon?', ['No, Fire Marshal Patel took lead while I oversee vendor load-in.', 'Twelve exit staircases circle the upper bowl.', 'Right after the championship trophy ceremony.'], 0, 'ตอบ No, Fire Marshal Patel took lead while I oversee vendor load-in. (ถามเชิงปฏิเสธ Aren’t you... ตอบว่าไม่ได้นำซ้อม เพราะ Patel รับหน้าที่แทนส่วนตนดูร้านค้าเข้าพื้นที่)'),
    p2(19, 'l19-p2-16', 'uk_f', 'ca_m', 'What is the initiation fee if a former gym member rejoins within thirty days?', ['We waive the initiation fee completely for thirty-day returns.', 'Down the hall past the rowing studios.', 'Yes, personal training sessions last fifty minutes.'], 0, 'ตอบ We waive the initiation fee completely for thirty-day returns. (ถามค่าธรรมเนียมแรกเข้ากรณีต่ออายุภายใน 30 วัน ตอบยกเว้นให้ทั้งหมด)'),
    p2(19, 'l19-p2-17', 'ca_m', 'us_f2', 'How much will repairing the cracked concrete step in Section 114 cost?', ['Facilities is still waiting on two contractor bids this week.', 'Yes, handrail bolts came loose over winter.', 'Just behind the home team dugout.'], 0, 'ตอบ Facilities is still waiting on two contractor bids this week. (ถามราคาซ่อมขั้นบันได How much ตอบเลี่ยงอย่างเป็นธรรมชาติว่าฝ่ายอาคารยังรอใบเสนอราคา 2 เจ้า)'),
    p2(19, 'l19-p2-18', 'us_m2', 'au_f', 'Did the new aquatic center dehumidifier cut condensation along the glass walls?', ['Noticeably—the windows stayed crystal clear even during swim meets.', 'Every Tuesday before eight A.M.', 'No, swim caps are sold at the vending kiosk.'], 0, 'ตอบ Noticeably—the windows stayed crystal clear even during swim meets. (ถามว่าเครื่องลดความชื้นช่วยลดไอน้ำเกาะกระจกได้ไหม ตอบเห็นผลชัดเจน กระจกใสตลอดการแข่ง)'),
    p2(19, 'l19-p2-19', 'uk_f2', 'us_m', 'Two corporate fitness accounts already renewed for an extra twenty-four months.', ['Fantastic—that locks in steady revenue heading into winter.', 'Yes, spin bikes are wiped down after class.', 'Check the thermostat outside Squash Court Three.'], 0, 'ตอบ Fantastic—that locks in steady revenue heading into winter. (บอกเล่าข่าวดีลูกค้าองค์กรต่อสัญญา 24 เดือน -> ตอบรับยินดีที่สร้างรายได้มั่นคงรับฤดูหนาว)'),
    p2(19, 'l19-p2-20', 'au_f', 'ca_m', 'Saturday’s junior tennis tournament wraps up before the evening concert, doesn’t it?', ['Yes, the final trophy presentation ends at four-thirty sharp.', 'Beside the shaded spectator bleachers.', 'We painted fresh white baselines last Thursday.'], 0, 'ตอบ Yes, the final trophy presentation ends at four-thirty sharp. (คำถาม Tag question ตรวจสอบเวลาจบการแข่ง -> ยืนยันว่าจบ 16:30 น. ตรง)'),
    p2(19, 'l19-p2-21', 'uk_m', 'us_f', 'Do you know if stadium shuttle buses run after ten P.M. on match nights?', ['They run for a full hour after the final whistle blows.', 'I parked near the north practice field.', 'Only twenty-five fans boarded the early bus.'], 0, 'ตอบ They run for a full hour after the final whistle blows. (ถามเวลาวิ่งรถรับส่งหลังสี่ทุ่ม ตอบวิ่งต่ออีก 1 ชั่วโมงเต็มหลังจบเกม)'),
    p2(19, 'l19-p2-22', 'us_f2', 'uk_m', 'What time does the fitness club’s hydro-cycling class start tomorrow morning?', ['At six-thirty A.M. in the shallow therapy pool.', 'To strengthen knee joints without high impact.', 'Twelve waterproof bikes are reserved already.'], 0, 'ตอบ At six-thirty A.M. in the shallow therapy pool. (ถามเวลาเริ่มคลาส What time ตอบ 06:30 น. ในสระน้ำตื้น)'),
    p2(19, 'l19-p2-23', 'ca_m', 'au_f', 'Would you like me to print updated renewal brochures for the front lobby rack?', ['Yes, please—print two hundred copies showing the fall rate chart.', 'No, the lobby carpet dries within two hours.', 'Inside the stadium press box upstairs.'], 0, 'ตอบ Yes, please—print two hundred copies showing the fall rate chart. (เสนอพิมพ์โบรชัวร์ต่ออายุสมาชิกใหม่ -> ตอบรับและระบุจำนวน 200 ฉบับ)'),
    p2(19, 'l19-p2-24', 'us_m', 'uk_f2', 'Have the replacement tennis net cables arrived from the supplier yet?', ['Maintenance unpacked six steel cables at the loading dock this morning.', 'Because players keep tightening center straps too hard.', 'Along Courts Seven through Ten.'], 0, 'ตอบ Maintenance unpacked six steel cables at the loading dock this morning. (ถามสถานะสายเคเบิลตาข่ายเทนนิส ตอบฝ่ายซ่อมบำรุงแกะกล่อง 6 เส้นที่ท่าส่งของเมื่อเช้าแล้ว)'),
    p2(19, 'l19-p2-25', 'uk_f', 'ca_m', 'Whose gym bag was left sitting beside the spin studio entrance?', ['Probably Elena’s—she stayed late talking to the cycling instructor.', 'Yes, spin shoes clip right into the pedals.', 'Place lost water bottles inside the green bin.'], 0, 'ตอบ Probably Elena’s—she stayed late talking to the cycling instructor. (ถามเจ้าของกระเป๋ายิม Whose ตอบน่าจะเป็นของ Elena เพราะอยู่คุยกับครูฝึกหลังเลิกคลาส)'),

    // Set 19 Part 3 (13 Conversations × 3 Qs = 39 Qs; 3-speaker Convs at 3 & 8; Graphics at 11, 12, 13)
    p3(19, 'l19-p3-1', [
      ['Woman', 'us_f', 'Good morning! My fitness membership expires next Sunday, and I’d like to renew—though I’m shifting my workouts to mornings now instead of evenings.'],
      ['Man', 'uk_m', 'Welcome back, Ms. Sato! Actually, switching from All-Day Access to our Morning Flex plan cuts twenty-five dollars off your monthly dues while keeping full pool access until two P.M.'],
      ['Woman', 'us_f', 'Oh, I had no idea there was an early-day discount! Does Morning Flex still include weekend tennis court reservations?'],
      ['Man', 'uk_m', 'Wait—weekend courts fall under full-tier perks, though you can add standalone weekend court credits anytime at eight dollars an hour.'],
    ], null, [
      ['Part 3 · Topic', 'What does Ms. Sato want to do at the fitness club?', ['Adjust and renew her expiring gym membership plan', 'Cancel her evening swimming lessons immediately', 'Reserve an indoor tennis court for next Sunday', 'Upgrade to an unlimited corporate family pass'], 0, 'ตอบ Adjust and renew her expiring gym membership plan (ต้องการต่ออายุสมาชิกที่กำลังหมดอายุและปรับแผนให้เข้ากับเวลาเล่นช่วงเช้า)'],
      ['Part 3 · Detail', 'How much less per month does the Morning Flex plan cost?', ['Twenty-five dollars', 'Eight dollars', 'Two dollars', 'Fifteen dollars'], 0, 'ตอบ Twenty-five dollars (ช่วยประหยัดค่ารายเดือนลง $25 เมื่อเทียบกับแบบ All-Day Access)'],
      ['Part 3 · Limitation', 'What restriction applies to the Morning Flex plan?', ['Weekend tennis reservations cost an extra hourly fee', 'Swimming pool entry ends at noon daily', 'Members cannot attend morning spin classes', 'Switching plans requires a thirty-day waiting period'], 0, 'ตอบ Weekend tennis reservations cost an extra hourly fee (คอร์ตเทนนิสวันหยุดสุดสัปดาห์ไม่อยู่ในแผนนี้ ต้องจ่ายเพิ่มชั่วโมงละ $8)'],
    ]),

    p3(19, 'l19-p3-2', [
      ['Man', 'ca_m', 'Hi, Brenda—I just walked Tennis Courts Four and Five with the resurfacing contractor, and those hairline cracks near the baseline run deeper than we hoped.'],
      ['Woman', 'au_f', 'Uh-oh. Can they still fill and repaint both courts inside our three-day weekday window next week?'],
      ['Man', 'ca_m', 'Court Five finishes easily by Wednesday evening, but Court Four needs an extra fiberglass mesh patch that takes forty-eight hours to cure before paint goes on.'],
      ['Woman', 'au_f', 'Okay—let’s notify Thursday’s league captains right away so they shift Court Four’s doubles matches over onto Courts Seven and Eight.'],
    ], null, [
      ['Part 3 · Problem', 'What issue did the inspection on Courts Four and Five reveal?', ['Baseline surface fractures are worse than initially expected', 'Paint on both courts peeled after recent heavy rain', 'Resurfacing contractors double-booked next week’s repair dates', 'League captains refused to play on Courts Seven and Eight'], 0, 'ตอบ Baseline surface fractures are worse than initially expected (รอยร้าวเล็กๆ ตรงเส้นท้ายคอร์ต 4 และ 5 ลึกกว่าที่คาดไว้)'],
      ['Part 3 · Detail', 'Why will Court Four take longer to reopen?', ['An added fiberglass repair layer needs two days to dry', 'Contractors ran out of green acrylic court paint', 'Thursday’s league matches blocked Wednesday maintenance', 'Workers must replace underground drainage pipes first'], 0, 'ตอบ An added fiberglass repair layer needs two days to dry (ต้องปะตาข่ายไฟเบอร์กลาสเพิ่มและรอแห้ง 48 ชั่วโมงก่อนทาสี)'],
      ['Part 3 · Action', 'What will Brenda arrange for Thursday’s tennis players?', ['Moving scheduled doubles games to alternate courts', 'Canceling the city league tournament until next month', 'Opening Court Five for practice sessions only', 'Issuing rain vouchers to affected league captains'], 0, 'ตอบ Moving scheduled doubles games to alternate courts (รีบแจ้งหัวหน้าทีมลีกวันพฤหัสให้ย้ายแมตช์คู่จากคอร์ต 4 ไปแข่งที่คอร์ต 7 และ 8 แทน)'],
    ]),

    p3(19, 'l19-p3-3', [
      ['Woman1', 'uk_f2', 'Thanks for meeting poolside, team. Several morning lap swimmers mentioned a stronger chlorine smell inside Natatorium B since yesterday.'],
      ['Man', 'us_m', 'Wait—I checked our automated water chemistry log at six A.M., and free chlorine levels look totally normal at two parts per million!'],
      ['Woman2', 'ca_f', 'Aha! Let me check the ceiling air-handler dampers up on the catwalk—if fresh outdoor intake air dropped overnight, harmless chloramines linger right over the water surface.'],
      ['Man', 'us_m', 'Good thought, Priya! Let’s check that damper belt together right now before the high-school swim team arrives for afternoon practice.'],
    ], null, [
      ['Part 3 · Problem', 'What complaint did morning swimmers report in Natatorium B?', ['Noticeably stronger chemical odor inside the pool room', 'Cold pool water temperatures during six A.M. lap sessions', 'Automated chlorine pumps turning off before practice', 'Drafty ceiling vents blowing cold air across pool decks'], 0, 'ตอบ Noticeably stronger chemical odor inside the pool room (ผู้มาว่ายน้ำตอนเช้าบ่นว่าได้กลิ่นคลอรีนแรงผิดปกติในอาคารสระ Natatorium B)'],
      ['Part 3 · Cause', 'What does the second woman suspect is causing the odor?', ['Reduced outside fresh air circulation through ceiling vents', 'Excessive liquid chlorine pumped into the pool overnight', 'Dirty filtration screens beneath the diving platform', 'High-school swim gear stored near intake ducts'], 0, 'ตอบ Reduced outside fresh air circulation through ceiling vents (สงสัยว่าช่องรับอากาศบริสุทธิ์จากภายนอกบนเพดานเปิดน้อยลง ทำให้กลิ่นสะสมเหนือผิวน้ำ)'],
      ['Part 3 · Detail', 'Who is expected to use the facility later in the day?', ['A high-school swimming squad', 'Maintenance damper inspectors', 'An adult water-aerobics club', 'Regional diving judges'], 0, 'ตอบ A high-school swimming squad (ทีมว่ายน้ำโรงเรียนมัธยมจะมาซ้อมช่วงบ่าย)'],
    ]),

    p3(19, 'l19-p3-4', [
      ['Man', 'au_m', 'Excuse me, are you running Stadium Concessions? The beverage stand outside Gate Six just tripped its main breaker twice while testing our frozen lemonade blenders!'],
      ['Woman', 'us_f2', 'Oh no—Saturday’s soccer match kicks off in three hours! Did your staff plug both high-wattage blenders and the pretzel warmer onto the same wall strip?'],
      ['Man', 'au_m', 'Yes, that’s the only outlet box behind our counter.'],
      ['Woman', 'us_f2', 'Wait—there’s a dedicated twenty-amp floor receptacle three feet right of your ice bin. Let’s move the pretzel warmer over there so the circuits balance safely.'],
    ], null, [
      ['Part 3 · Problem', 'Why did power keep shutting off at the Gate Six stand?', ['Multiple heavy appliances overloaded one shared electrical strip', 'Rainwater leaked into the stadium floor receptacle', 'Ice bins blocked air vents behind the pretzel warmer', 'Concession contractors wired the wrong breaker rating'], 0, 'ตอบ Multiple heavy appliances overloaded one shared electrical strip (เสียบเครื่องปั่นน้ำมะนาวกำลังไฟสูงสองเครื่องพ่วงกับเครื่องอุ่นเพรทเซลบนรางไฟเดียวกัน)'],
      ['Part 3 · Detail', 'When does Saturday’s soccer game begin?', ['In three hours', 'In thirty minutes', 'At six o’clock', 'Tomorrow afternoon'], 0, 'ตอบ In three hours (ผู้หญิงบอกว่าจะเริ่มแข่งในอีก 3 ชั่วโมง)'],
      ['Part 3 · Solution', 'How will the speakers fix the electrical issue?', ['By plugging the warmer into a separate nearby floor outlet', 'By removing one frozen lemonade machine before kickoff', 'By relocating the beverage stand away from Gate Six', 'By replacing the main stadium circuit panel'], 0, 'ตอบ By plugging the warmer into a separate nearby floor outlet (ย้ายปลั๊กเครื่องอุ่นเพรทเซลไปเสียบเต้ารับบนพื้นแยกอีกวงจรข้างถังน้ำแข็ง)'],
    ]),

    p3(19, 'l19-p3-5', [
      ['Woman', 'ca_f', 'Hi, Coach Dan—I’m scheduled for my quarterly fitness assessment tomorrow at noon, but I tweaked my right wrist moving boxes yesterday.'],
      ['Man', 'us_m2', 'Good thing you called ahead, Maya! Upper-body strength testing would put unnecessary stress on that wrist right now.'],
      ['Woman', 'ca_f', 'Should I skip the club completely for two weeks, or is there something safe I can still do tomorrow?'],
      ['Man', 'us_m2', 'Definitely come in—let’s switch your noon slot to a gentle warm-water leg walk and mobility session inside our heated therapy pool instead!'],
    ], null, [
      ['Part 3 · Reason', 'Why is Maya contacting her personal trainer?', ['She hurt her wrist before tomorrow’s physical assessment', 'She wants to freeze her quarterly gym membership', 'She needs advice on lifting heavy moving boxes safely', 'She forgot what time her noon workout starts'], 0, 'ตอบ She hurt her wrist before tomorrow’s physical assessment (ข้อมือขวาเคล็ดจากการยกกล่องเมื่อวานก่อนวันประเมินสมรรถภาพพรุ่งนี้)'],
      ['Part 3 · Meaning', 'What does Coach Dan mean when he says, "Good thing you called ahead"?', ['Reporting the injury early lets him adapt the workout safely', 'Maya avoided a late-cancellation fee by calling at noon', 'He can now give her noon appointment to another client', 'Her quarterly fitness review can wait two full months'], 0, 'ตอบ Reporting the injury early lets him adapt the workout safely (ดีแล้วที่โทรบอกล่วงหน้า จะได้ไม่ต้องทดสอบแรงแขนให้เจ็บเพิ่มและปรับโปรแกรมได้ทัน)'],
      ['Part 3 · Proposal', 'What alternative workout does Coach Dan suggest for tomorrow?', ['Low-impact mobility exercises inside a warm pool', 'Light stationary spin cycling upstairs', 'Upper-body stretching in the therapy lobby', 'Skipping gym visits for fourteen days'], 0, 'ตอบ Low-impact mobility exercises inside a warm pool (สลับมาเดินในสระน้ำอุ่นบำบัดและฝึกการเคลื่อนไหวที่ไม่กระทบข้อมือแทน)'],
    ]),

    p3(19, 'l19-p3-6', [
      ['Man', 'uk_m', 'Rachel, our September gym membership renewal rate dipped to seventy-four percent—down four points from last autumn.'],
      ['Woman', 'us_f', 'I noticed that too. Several members told the front desk that rival downtown studios are waving big sixty-day sign-up bonuses.'],
      ['Man', 'uk_m', 'Matching cash discounts eats straight into our margins, though. What could we offer existing members who renew sixty days early instead?'],
      ['Woman', 'us_f', 'How about two free indoor tennis court hours plus a complimentary three-month private locker? Those perks feel generous yet barely cost us anything!'],
    ], null, [
      ['Part 3 · Problem', 'What trend are the fitness club managers analyzing?', ['A slight drop in the percentage of members renewing plans', 'Higher operating expenses for indoor tennis courts', 'Declining locker rental sales since last autumn', 'Increased competition for front-desk reception staff'], 0, 'ตอบ A slight drop in the percentage of members renewing plans (อัตราการต่ออายุสมาชิกเดือนกันยายนลดลงเหลือ 74% ลดลงจากฤดูใบไม้ร่วงปีก่อน 4 จุด)'],
      ['Part 3 · Detail', 'Why does the man hesitate to offer cash discounts?', ['Price cuts directly shrink the club’s profit margins', 'Competing downtown studios match every cash promotion', 'Billing software cannot process sixty-day early discounts', 'Existing members prefer free towels over cash rebates'], 0, 'ตอบ Price cuts directly shrink the club’s profit margins (การลดราคาเงินสดกระทบกำไรของคลับโดยตรง)'],
      ['Part 3 · Proposal', 'What renewal incentive does Rachel suggest?', ['Complimentary court time and temporary locker use', 'Discounted quarterly fees for downtown transfers', 'Free sixty-day guest memberships for coworkers', 'Upgraded locker room towels during autumn months'], 0, 'ตอบ Complimentary court time and temporary locker use (เสนอให้ชั่วโมงเล่นเทนนิสในร่มฟรี 2 ชั่วโมงบวกสิทธิ์ใช้ตู้ล็อกเกอร์ส่วนตัวฟรี 3 เดือน)'],
    ]),

    p3(19, 'l19-p3-7', [
      ['Woman', 'au_f', 'Testing, testing—Carlos, are you hearing a crackling hum over the stadium public-address speakers from the press box?'],
      ['Man', 'uk_m', 'Loud and clear, unfortunately! Whenever a field security guard keys their handheld radio near Gate Four, our wireless announcer mic picks up static.'],
      ['Woman', 'au_f', 'Can we switch the field announcer microphone over to an alternate wireless frequency channel?'],
      ['Man', 'uk_m', 'Better yet—let’s plug in our backup hardwired XLR cable straight into the midfield booth so zero radio chatter bleeds through during halftime awards.'],
    ], null, [
      ['Part 3 · Problem', 'What is disrupting the stadium’s public-address audio?', ['Interference from nearby security staff radios', 'Broken amplifier speakers above Gate Four', 'Loose microphone batteries inside the press box', 'Loud crowd noise bleeding into midfield booths'], 0, 'ตอบ Interference from nearby security staff radios (วิทยุสื่อสารของ รปภ. ใกล้ประตู 4 รบกวนคลื่นไมโครโฟนไร้สายของโฆษก)'],
      ['Part 3 · Proposal', 'How does Carlos decide to solve the audio interference?', ['Using a physical wired microphone connection instead', 'Asking security guards to switch off radios at halftime', 'Moving the press box equipment farther from Gate Four', 'Replacing wireless handheld radios with megaphones'], 0, 'ตอบ Using a physical wired microphone connection instead (เปลี่ยนมาเสียบสายเคเบิล XLR แบบมีสายตรงเข้าบูธกลางสนามเพื่อตัดปัญหาสัญญาณแทรก)'],
      ['Part 3 · Detail', 'What upcoming stadium segment do they want to protect from static?', ['Halftime award presentations', 'Pre-game national anthem singing', 'Gate Four ticket announcements', 'Post-match coach interviews'], 0, 'ตอบ Halftime award presentations (เน้นไม่ให้มีเสียงรบกวนระหว่างพิธีมอบรางวัลช่วงพักครึ่ง)'],
    ]),

    p3(19, 'l19-p3-8', [
      ['Man1', 'ca_m', 'Look at the north soccer penalty box, folks—two inches of standing water collected there after last night’s downpour, and sixty-five hundred fans arrive tonight!'],
      ['Woman', 'us_f2', 'Wait—is the underground French drain clogged beneath the north goalpost, or did grass thatch seal the surface?'],
      ['Man2', 'au_m', 'I checked the catch basin outside Track Lane One—water is flowing freely through the pipe! That means the surface turf just compacted after Sunday’s youth clinic.'],
      ['Man1', 'ca_m', 'Okay, Tom, bring out the solid-tine aerator tractor now while I call ticketing to hold Gate opening by fifteen minutes if needed for turf rolling.'],
    ], null, [
      ['Part 3 · Problem', 'What issue is affecting the stadium athletic field before tonight’s match?', ['Rainwater has pooled in one section of the grass turf', 'Drainage pipes beneath Track Lane One cracked overnight', 'Sixty-five hundred spectators arrived before gates opened', 'Youth clinic equipment damaged the north goalpost'], 0, 'ตอบ Rainwater has pooled in one section of the grass turf (น้ำฝนขังสูงสองนิ้วตรงกรอบเขตโทษฝั่งเหนือหลังฝนตกหนักเมื่อคืน)'],
      ['Part 3 · Cause', 'What does the second man conclude caused the drainage slowdown?', ['Dense soil surface compaction from heavy foot traffic', 'Blocked catch basins along Track Lane One', 'Broken underground pipes beneath the goalpost', 'Excessive watering prior to Sunday’s youth clinic'], 0, 'ตอบ Dense soil surface compaction from heavy foot traffic (ท่อระบายน้ำยังไหลดีอยู่ แสดงว่าหน้าดินและหญ้าอัดตัวแน่นหลังกิจกรรมเยาวชนวันอาทิตย์)'],
      ['Part 3 · Action', 'What will the first man instruct Tom to do immediately?', ['Operate turf-aeration equipment to help water drain', 'Pump standing water directly onto Track Lane One', 'Delay ticket gate opening by sixty full minutes', 'Reschedule tonight’s match for Sunday afternoon'], 0, 'ตอบ Operate turf-aeration equipment to help water drain (ให้ Tom นำรถเจาะระบายอากาศหน้าดินมาทำงานทันที)'],
    ]),

    p3(19, 'l19-p3-9', [
      ['Woman', 'uk_f', 'Wait—Marcus, hold off unloading those white chemical drums beside the aquatic filter room!'],
      ['Man', 'us_m', 'Huh? Your Thursday purchase order requested twelve drums of pool treatment for Oakridge Complex, right?'],
      ['Woman', 'uk_f', 'Yes, twelve drums of liquid chlorine! Look at the blue labels on your pallet—your warehouse packed sodium carbonate pH-increaser by mistake.'],
      ['Man', 'us_m', 'Whoa, good thing you spotted those blue labels before we dumped them into the surge tank! I’ll call dispatch now to swap this pallet before noon.'],
    ], null, [
      ['Part 3 · Problem', 'Why did the woman stop Marcus from unloading the shipment?', ['The supplier delivered the wrong pool chemical', 'Twelve chemical drums leaked inside the truck', 'The aquatic filter room lacked storage space', 'Oakridge Complex canceled Thursday’s order'], 0, 'ตอบ The supplier delivered the wrong pool chemical (โกดังส่งสารเคมีผิดชนิด เป็นสารเพิ่มค่า pH ฉลากสีฟ้าแทนคลอรีนเหลวที่สั่ง)'],
      ['Part 3 · Detail', 'How did the woman recognize the delivery error?', ['By noticing blue chemical labels on the pallet drums', 'By testing water samples inside the surge tank', 'By checking invoice prices at the front desk', 'By counting fewer than twelve drums on the truck'], 0, 'ตอบ By noticing blue chemical labels on the pallet drums (สังเกตเห็นฉลากสีฟ้าบนถังเคมีบนพาเลต)'],
      ['Part 3 · Action', 'What will Marcus do by midday?', ['Arrange with dispatch to exchange the incorrect pallet', 'Leave the sodium carbonate drums inside the filter room', 'Drive back to check Thursday’s paper purchase order', 'Pour the delivered drums slowly into the surge tank'], 0, 'ตอบ Arrange with dispatch to exchange the incorrect pallet (จะโทรแจ้งฝ่ายจัดส่งให้เปลี่ยนพาเลตที่ถูกต้องก่อนเที่ยง)'],
    ]),

    p3(19, 'l19-p3-10', [
      ['Man', 'au_m', 'Hannah, championship ticket sales just crossed thirty-eight thousand for Sunday’s match—five thousand more than last month’s semifinal!'],
      ['Woman', 'ca_f', 'Awesome news, though our West Metro Park-and-Ride lot usually maxes out at thirty-three thousand fans. Should we request two extra loop buses?'],
      ['Man', 'au_m', 'Yes! Call Metro Transit’s charter desk and add two articulated coaches running every eight minutes from the Downtown Garage overflow lot.'],
      ['Woman', 'ca_f', 'Will do—I’ll also update our stadium mobile app banner so drivers head straight toward Downtown Garage instead of circling West Metro.'],
    ], null, [
      ['Part 3 · Cause', 'Why do the speakers need extra shuttle capacity on Sunday?', ['Higher-than-usual ticket sales will overflow main parking lots', 'Two Metro Transit loop buses broke down during semifinals', 'Downtown Garage closed for weekend construction', 'West Metro Park-and-Ride reduced its Sunday hours'], 0, 'ตอบ Higher-than-usual ticket sales will overflow main parking lots (ยอดขายตั๋วนัดชิงพุ่งถึง 38,000 ใบ เกินความจุลานจอด West Metro ที่รองรับได้แค่ 33,000 คน)'],
      ['Part 3 · Detail', 'How frequently will the added Downtown Garage buses run?', ['Every eight minutes', 'Every five minutes', 'Every fifteen minutes', 'Every half hour'], 0, 'ตอบ Every eight minutes (ผู้ชายบอกให้จัดรถพ่วงเสริมวิ่งทุก 8 นาที)'],
      ['Part 3 · Action', 'How will Hannah inform incoming drivers about the overflow lot?', ['By posting an alert banner inside the venue’s mobile app', 'By stationing extra police officers at West Metro gates', 'By mailing printed parking passes to ticket buyers', 'By playing radio announcements during the semifinal'], 0, 'ตอบ By posting an alert banner inside the venue’s mobile app (จะอัปเดตแบนเนอร์บนแอปมือถือของสนามเพื่อแจ้งคนขับให้มุ่งหน้าไป Downtown Garage เลย)'],
    ]),

    // Set 19 Part 3 Graphics (Convs 11, 12, 13)
    p3(19, 'l19-p3-11', [
      ['Woman', 'us_f2', 'Hi! I’m renewing my fitness membership today, and I definitely play indoor tennis every week plus take unlimited group spin classes.'],
      ['Man', 'uk_m', 'Let’s compare our four renewal tiers together! Notice Standard Fitness covers group classes, though tennis court bookings require at least the Active Court tier.'],
      ['Woman', 'us_f2', 'Okay, great! Oh—one more thing: my company sends me overseas for two months every winter, so I need to freeze billing while I’m gone.'],
      ['Man', 'uk_m', 'Aha—that’s the decisive perk! Active Court doesn’t include travel freezes, whereas All-Access Gold lets you pause up to three months free—and signing before month-end saves ten percent off the annual total.'],
    ], doc('table', 'Crestwood Sports Complex — Club Membership Renewal Tiers', [['Promo', '10% Off Annual Prepay']], [
      tbl(
        ['Membership Tier', 'Annual Rate', 'Group Spin & Pool', 'Tennis Courts', 'Billing Freeze'],
        [
          ['Basic Gym', '$540 / yr', 'Gym Floor Only', 'Pay-Per-Hour', 'None'],
          ['Standard Fitness', '$780 / yr', 'Unlimited Included', 'Pay-Per-Hour', 'None'],
          ['Active Court', '$960 / yr', 'Unlimited Included', '4 Hours / Month', 'None'],
          ['All-Access Gold', '$1,200 / yr', 'Unlimited Included', 'Unlimited Booking', 'Up to 3 Months'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which tier meets all of the woman’s requirements?', ['All-Access Gold', 'Active Court', 'Standard Fitness', 'Basic Gym'], 0, 'ตอบ All-Access Gold (ผู้หญิงต้องการทั้งคลาสสปิน คอร์ตเทนนิสในร่ม และสิทธิ์พักบิลตอนไปต่างประเทศ 2 เดือน ซึ่งมีเฉพาะ All-Access Gold เท่านั้น)'],
      ['Part 3 · Graphic', 'How much will she pay for the year with the month-end prepay discount?', ['$1,080', '$1,200', '$960', '$864'], 0, 'ตอบ $1,080 (ราคาเต็มรายปีของ All-Access Gold คือ $1,200 หักส่วนลด 10% หรือ $120 เหลือ $1,080)'],
      ['Part 3 · Detail', 'Why does the woman need a billing freeze option?', ['She travels internationally for work during winter months', 'Outdoor tennis courts close during two snowy months', 'She plans to share her pass with a visiting colleague', 'Group spin classes go on hiatus every winter'], 0, 'ตอบ She travels internationally for work during winter months (บริษัทส่งเธอไปทำงานต่างประเทศ 2 เดือนทุกฤดูหนาว)'],
    ]),

    p3(19, 'l19-p3-12', [
      ['Man', 'au_m', 'Urgent ops update, Carla! Mechanics just locked down Gate B escalators for emergency brake inspection an hour before doors open for tonight’s match.'],
      ['Woman', 'ca_f', 'Oh no—Gate B leads straight toward the East Concourse souvenir kiosk! Are we routing upper-deck ticket holders up the Gate C ramps instead?'],
      ['Man', 'au_m', 'Exactly—and since zero foot traffic will pass Gate B tonight, let’s wheel that portable jersey cart over to the sunny space right outside Gate A’s main turnstiles so sales don’t drop!'],
      ['Woman', 'ca_f', 'Smart move! I’ll send two ushers down to wheel the cart across before five-thirty.'],
    ], doc('floorplan', 'Metro Stadium — Event Night Gate & Kiosk Assignments', [['Match', 'Saturday Cup · Gates Open 6:00 P.M.']], [
      box('Lower Concourse Entry Map', [
        'Gate A · Main Plaza Turnstiles — Open Broad Courtyard (Food Trucks)',
        'Gate B · East Escalator Tower — Portable Team Jersey Cart',
        'Gate C · South Pedestrian Ramps — Upper-Deck Ticket Express Entry',
        'Gate D · West Tunnel Entry — VIP Lounge & Media Credentials',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which gate’s portable booth is being moved tonight?', ['Gate B', 'Gate A', 'Gate C', 'Gate D'], 0, 'ตอบ Gate B (บันไดเลื่อนฝั่ง Gate B ถูกปิดตรวจเบรกฉุกเฉิน จึงไม่มีคนเดินผ่านบูธขายเสื้อทีมแบบเข็นตรง Gate B)'],
      ['Part 3 · Graphic', 'Where will the portable jersey cart be relocated before fans arrive?', ['Outside Gate A’s main plaza turnstiles', 'Along Gate C’s upper pedestrian ramps', 'Beside Gate D’s VIP media tunnel', 'Inside the Gate B escalator landing'], 0, 'ตอบ Outside Gate A’s main plaza turnstiles (ผู้ชายเสนอให้เข็นรถขายเสื้อไปวางตรงพื้นที่โล่งหน้าประตู Gate A แทน)'],
      ['Part 3 · Detail', 'At what time do stadium entry gates officially open for tonight’s match?', ['6:00 P.M.', '5:30 P.M.', '5:00 P.M.', '7:00 P.M.'], 0, 'ตอบ 6:00 P.M. (หัวแผนที่ระบุ Gates Open 6:00 P.M. และผู้ชายพูดล่วงหน้า 1 ชั่วโมงก่อนเปิดประตู)'],
    ]),

    p3(19, 'l19-p3-13', [
      ['Woman', 'uk_f2', 'Hi, I booked Tennis Court Two for our Friday six P.M. doubles match, and my friend just noticed the overhead light pole flickering from the café window!'],
      ['Man', 'us_m', 'Oh, thanks for reporting that! Let me check our Friday Grid—yeah, an electrician just tagged Court Two offline from five-thirty onward to swap its ballast.'],
      ['Woman', 'uk_f2', 'Uh-oh! We need a hard court at six sharp—grass hurts my partner’s knees, and seven-thirty is too late for us.'],
      ['Man', 'us_m', 'Don’t worry—look at Court Four: it’s open right at six, features the exact same cushioned hard surface, and I’ll waive the indoor lighting upgrade difference!'],
    ], doc('table', 'Bayview Aquatic & Tennis — Friday Evening Court Schedule', [['Date', 'Friday, October 18']], [
      tbl(
        ['Court', 'Surface & Setting', '6:00 P.M.–7:30 P.M.', '7:30 P.M.–9:00 P.M.'],
        [
          ['Court 1', 'Outdoor Hard Court', 'Booked (Clinic)', 'Open'],
          ['Court 2', 'Outdoor Hard Court', 'Booked (Caller)', 'Booked (League)'],
          ['Court 3', 'Outdoor Synthetic Grass', 'Open', 'Open'],
          ['Court 4', 'Indoor Hard Court', 'Open', 'Booked (Lessons)'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Why will the speakers reject Court 3 despite its 6:00 P.M. availability?', ['Its synthetic grass surface is unsuitable for one player’s knees', 'It is reserved for a tennis clinic until seven-thirty', 'Its overhead light pole requires a ballast replacement', 'Court 3 charges double indoor lighting upgrade fees'], 0, 'ตอบ Its synthetic grass surface is unsuitable for one player’s knees (Court 3 เป็นพื้นหญ้าสังเคราะห์ ซึ่งผู้หญิงบอกว่าหญ้าทำให้เพื่อนเจ็บเข่า)'],
      ['Part 3 · Graphic', 'Which court will the woman’s doubles group play on at 6:00 P.M.?', ['Court 4', 'Court 1', 'Court 2', 'Court 3'], 0, 'ตอบ Court 4 (Court 1 เต็มตอน 18:00 น. Court 2 ซ่อมไฟ Court 3 เป็นพื้นหญ้า จึงเหลือ Court 4 ที่เป็นพื้นฮาร์ดคอร์ตและว่างเวลา 18:00 น.)'],
      ['Part 3 · Detail', 'What courtesy does the booking clerk offer the caller?', ['Waiving any extra cost for indoor court lighting', 'Extending their match past seven-thirty P.M.', 'Giving them complimentary café beverages', 'Reassigning league players to Court One'], 0, 'ตอบ Waiving any extra cost for indoor court lighting (พนักงานยกเว้นส่วนต่างค่าไฟสนามในร่มให้ฟรี)'],
    ]),

    // Set 19 Part 4 (10 Talks × 3 Qs = 30 Qs; Talks 8-10 include Graphics)
    p4(19, 'l19-p4-1', 'the following recorded membership message', 'us_f',
      'Thank you for calling HarborFit Athletic Club’s Member Services line. Fall annual renewal discounts end this Saturday at six P.M. Current members renewing online before Saturday save fifty dollars and receive three complimentary personal-training checkups. Corporate wellness enrollees should enter partner code FITBIZ at checkout to lock in employer matching rates. To freeze an active pass for medical leave or check lost locker items, stay on the line for our front desk.',
      null, [
        ['Part 4 · Detail', 'What bonus do members earn by renewing online before Saturday evening?', ['A fifty-dollar price cut and three free trainer checkups', 'A complimentary thirty-day medical leave extension', 'Free corporate fitness gear from the front desk', 'Employer matching fees on single-month passes'], 0, 'ตอบ A fifty-dollar price cut and three free trainer checkups (ลดราคา $50 และแถมตรวจประเมินกับเทรนเนอร์ส่วนตัวฟรี 3 ครั้ง)'],
        ['Part 4 · Action', 'How should corporate wellness members apply employer discounts online?', ['By typing the promotional code FITBIZ at payment', 'By calling HarborFit front desk attendants before six P.M.', 'By presenting paper company badges at locker rooms', 'By requesting manual refunds after Saturday’s deadline'], 0, 'ตอบ By typing the promotional code FITBIZ at payment (ให้กรอกรหัส FITBIZ ในขั้นตอนชำระเงินออนไลน์)'],
        ['Part 4 · Action', 'Why should callers stay on the line instead of hanging up?', ['To pause an account for health reasons or ask about lost property', 'To schedule three personal-training checkups immediately', 'To request online renewal extensions past Saturday', 'To register new corporate partners with HarborFit'], 0, 'ตอบ To pause an account for health reasons or ask about lost property (ถือสายรอเจ้าหน้าที่เพื่อพักสิทธิ์กรณีลาป่วยหรือสอบถามของหายในล็อกเกอร์)'],
      ]),

    p4(19, 'l19-p4-2', 'the following stadium public announcement', 'uk_m',
      'Welcome to Riverfront Stadium for tonight’s championship match! Before heading through the concourse turnstiles, please verify that all personal bags meet our clear-plastic policy—solid backpacks must be checked at Locker Tent B beside North Plaza. Remember all concession booths inside the bowl operate strictly cashless using cards or mobile tap. Finally, cyclists arriving early may leave bikes free at our guarded bike corral right under Gate Three.',
      null, [
        ['Part 4 · Rule', 'What must spectators with solid backpacks do before entering the turnstiles?', ['Store them at Locker Tent B near North Plaza', 'Empty personal items into clear concession bags', 'Leave backpacks locked inside Gate Three bike corrals', 'Enter through special screening booths inside the bowl'], 0, 'ตอบ Store them at Locker Tent B near North Plaza (กระเป๋าเป้ทึบต้องนำไปฝากที่เต็นท์ล็อกเกอร์ B ข้างลานฝั่งเหนือ)'],
        ['Part 4 · Detail', 'How can fans purchase snacks and drinks inside the stadium?', ['Using debit cards, credit cards, or mobile wallets', 'Paying cash at concession windows beside Gate Three', 'Redeeming printed stadium tokens from Locker Tent B', 'Ordering exclusively through mobile app delivery'], 0, 'ตอบ Using debit cards, credit cards, or mobile wallets (ร้านอาหารในสนามไม่รับเงินสด รับเฉพาะบัตรหรือแตะจ่ายผ่านมือถือ)'],
        ['Part 4 · Offer', 'What free service is available near Gate Three?', ['Staffed parking storage for bicycles', 'Clear plastic tote bags for visitors', 'Complimentary mobile phone charging lockers', 'Shuttle carts to North Plaza stands'], 0, 'ตอบ Staffed parking storage for bicycles (มีจุดรับฝากจักรยานที่มีเจ้าหน้าที่ดูแลฟรีใต้ประตู Gate Three)'],
      ]),

    p4(19, 'l19-p4-3', 'the following aquatic staff briefing', 'ca_f',
      'Morning, lifeguard team! Tonight at five P.M., we host the Regional Junior Swim Invitational, which switches our Olympic pool from recreational lanes to eight competition lanes. Right after adult lap hours close at three-thirty, pair up to pull the wide blue lane lines and clip in electronic touchpads at the north bulkhead. Remember—first-aid oxygen tanks moved yesterday from Cabinet Two into the Supervisor Alcove behind the timing desk.',
      null, [
        ['Part 4 · Purpose', 'Why are lifeguards reconfiguring the pool at 3:30 P.M.?', ['To set up eight competitive lanes for an evening swim meet', 'To drain shallow recreational lanes for bulkhead cleaning', 'To test electronic touchpads before adult lap classes', 'To clear deck space for regional first-aid drills'], 0, 'ตอบ To set up eight competitive lanes for an evening swim meet (เตรียมปรับสระจากเลนว่ายออกกำลังกายเป็น 8 เลนแข่งขันสำหรับรายการเยาวชนเย็นนี้)'],
        ['Part 4 · Detail', 'Where should electronic touchpads be attached?', ['Along the north bulkhead wall', 'Beside Cabinet Two storage shelves', 'Behind the central timing desk', 'At the south recreational entrance'], 0, 'ตอบ Along the north bulkhead wall (ติดตั้งแผ่นสัมผัสจับเวลาอิเล็กทรอนิกส์ตรงผนังกั้นฝั่งเหนือ north bulkhead)'],
        ['Part 4 · Detail', 'What equipment changed location yesterday?', ['Emergency oxygen tanks', 'Wide blue lane lines', 'Recreational timing clocks', 'Junior meet scoreboards'], 0, 'ตอบ Emergency oxygen tanks (ถังออกซิเจนปฐมพยาบาลย้ายจากตู้ Cabinet Two ไปยังซอกห้องหัวหน้าเวรหลังโต๊ะจับเวลาแล้ว)'],
      ]),

    p4(19, 'l19-p4-4', 'the following sports clinic introduction', 'au_m',
      'Good morning, tennis members, and welcome to our annual Baseline Strategy Clinic! It is my privilege to introduce today’s guest instructor, former doubles finalist Elena Novak. For the past eight years, Elena has directed high-performance footwork camps across Melbourne and Toronto, helping club amateurs shave unforced errors in half. After this morning’s court drills, she will host a thirty-minute racket-string tension Q&A inside the clubhouse lounge.',
      null, [
        ['Part 4 · Detail', 'What has Elena Novak specialized in over the past eight years?', ['Running advanced tennis footwork training programs', 'Manufacturing custom amateur tennis rackets', 'Managing clubhouse dining lounges in Toronto', 'Refereeing international doubles finals in Melbourne'], 0, 'ตอบ Running advanced tennis footwork training programs (คุมแคมป์ฝึกฟุตเวิร์กสมรรถนะสูงในเมลเบิร์นและโตรอนโตมา 8 ปี)'],
        ['Part 4 · Topic', 'What happens inside the clubhouse lounge after court drills?', ['An interactive session covering racket string tension', 'Autograph signings for Melbourne camp graduates', 'Lunch receptions for tournament finalists', 'Video replays of morning baseline matches'], 0, 'ตอบ An interactive session covering racket string tension (ช่วงถาม-ตอบ 30 นาทีเรื่องความตึงเอ็นไม้เทนนิสในเลานจ์)'],
        ['Part 4 · Detail', 'How long will the lounge Q&A session last?', ['Thirty minutes', 'Forty-five minutes', 'One hour', 'Eight minutes'], 0, 'ตอบ Thirty minutes (ระบุชัดว่า a thirty-minute racket-string tension Q&A)'],
      ]),

    p4(19, 'l19-p4-5', 'the following stadium operations briefing', 'us_m2',
      'Alright, grounds crew—yesterday’s sold-out outdoor rock concert wrapped smoothly, and our soccer club plays here Friday night! That leaves us just forty-eight hours to lift all twelve thousand interlocking plastic turf tiles before mower blades touch grass. Stack tiles onto green wooden pallets along Sideline East—never dump them beside Gate Two—so forklift drivers haul stacks directly to Yard Storage while we aerate the midfield.',
      null, [
        ['Part 4 · Audience', 'Who is the speaker briefing about post-concert cleanup?', ['Stadium field maintenance workers', 'Concert stage lighting technicians', 'Visiting soccer team managers', 'Forklift rental contractors'], 0, 'ตอบ Stadium field maintenance workers (หัวหน้าสั่งงานทีมดูแลสนามให้รื้อแผ่นปูคลุมหญ้าหลังคอนเสิร์ตและเตรียมสนามฟุตบอล)'],
        ['Part 4 · Detail', 'Why is there a forty-eight-hour deadline on the cleanup?', ['A soccer match is scheduled at the venue on Friday evening', 'Concert organizers need the tiles shipped back before noon', 'Mower contractors leave for another stadium Thursday night', 'Heavy rain forecasts threaten Yard Storage pallets'], 0, 'ตอบ A soccer match is scheduled at the venue on Friday evening (ทีมฟุตบอลจะใช้สนามแข่งคืนวันศุกร์ จึงต้องรีบเก็บแผ่นปูหญ้า 12,000 แผ่นออกใน 48 ชั่วโมง)'],
        ['Part 4 · Rule', 'Where must workers pile the removed plastic tiles?', ['Onto green pallets positioned along Sideline East', 'Outside Gate Two beside delivery vans', 'Directly onto midfield grass strips', 'Inside Yard Storage containers manually'], 0, 'ตอบ Onto green pallets positioned along Sideline East (วางซ้อนบนพาเลตไม้สีเขียวตามแนว Sideline East ห้ามวางข้าง Gate Two)'],
      ]),

    p4(19, 'l19-p4-6', 'the following commercial radio spot', 'us_f2',
      'Ready to shake up your autumn fitness routine? Join Crestline Aquatic & Athletic Club during our Member Bring-a-Friend Weekend this Saturday and Sunday! Current members may invite two guests free all weekend to sample our newly heated saltwater lap pool, clay tennis bubbles, and brand-new hydro-spin studio. Plus, any friend who signs up for a twelve-month pass this weekend skips our ninety-dollar enrollment charge while earning their host a free month!',
      null, [
        ['Part 4 · Offer', 'What can guests try at Crestline Club this weekend without paying?', ['Swimming, indoor tennis courts, and water cycling sessions', 'Complimentary ninety-dollar personal training sessions', 'Private twelve-month tennis coaching lessons', 'Discounted weekday childcare passes'], 0, 'ตอบ Swimming, indoor tennis courts, and water cycling sessions (ผู้มาเยือนทดลองใช้สระว่ายน้ำเค็มอุ่น สนามเทนนิสดินเผาในโดม และสตูดิโอปั่นจักรยานในน้ำได้ฟรี)'],
        ['Part 4 · Detail', 'How many friends may each current member bring?', ['Up to two guests', 'Only one guest', 'Three family members', 'Unlimited coworkers'], 0, 'ตอบ Up to two guests (สมาชิก 1 คนเชิญเพื่อนมาได้ฟรี 2 คนตลอดสุดสัปดาห์)'],
        ['Part 4 · Benefit', 'What reward does a host member receive if their invited guest joins for a year?', ['One complimentary month added to their membership', 'A ninety-dollar cash voucher at the club café', 'Free tennis court lighting all autumn', 'Priority access to hydro-spin bicycles'], 0, 'ตอบ One complimentary month added to their membership (ถ้าเพื่อนสมัครสมาชิกรายปี สมาชิกผู้ชวนจะได้สิทธิ์เล่นฟรีเพิ่มอีก 1 เดือน)'],
      ]),

    p4(19, 'l19-p4-7', 'the following voicemail message', 'uk_f2',
      'Hi David, this is Sam calling from Apex Scoreboard Systems at three-ten Tuesday. Good news—our diagnostic board arrived early from Toronto, and technician Luis already swapped out the fried controller card behind your stadium’s south end-zone display! Every pixel row tested bright under afternoon sunlight. However, we noticed weathered sealant along the top cabinet hatch, so please authorize our ninety-dollar silicone resealing ticket before Friday’s rain arrives.',
      null, [
        ['Part 4 · Purpose', 'Why did Sam leave a voicemail for David?', ['To report a completed repair and request approval for weatherproofing', 'To warn that south scoreboard panels failed afternoon sunlight tests', 'To reschedule Luis’s arrival from Toronto until Tuesday afternoon', 'To invoice David for shipping an express diagnostic board'], 0, 'ตอบ To report a completed repair and request approval for weatherproofing (แจ้งข่าวว่าเปลี่ยนบอร์ดควบคุมป้ายคะแนนเสร็จแล้ว และขออนุมัติงบซิลิโคนกันฝนก่อนวันศุกร์)'],
        ['Part 4 · Detail', 'What issue did the technician discover on the scoreboard cabinet?', ['Worn waterproofing sealant around the upper access hatch', 'Burnt pixel rows along the southern display corner', 'Loose electrical wiring arriving from Toronto', 'Broken cooling fans inside the south end-zone wall'], 0, 'ตอบ Worn waterproofing sealant around the upper access hatch (พบยาแนวกันน้ำบริเวณฝาปิดด้านบนตู้เสื่อมสภาพ)'],
        ['Part 4 · Detail', 'How much will the suggested resealing maintenance cost?', ['Ninety dollars', 'Three hundred ten dollars', 'Fifty dollars', 'One hundred ninety dollars'], 0, 'ตอบ Ninety dollars (ขออนุมัติใบงานซีลซิลิโคนราคา $90 ก่อนฝนตกวันศุกร์)'],
      ]),

    // Set 19 Part 4 Graphics (Talks 8, 9, 10)
    p4(19, 'l19-p4-8', 'the following staff briefing and membership chart', 'ca_m',
      'Quick huddle for our front-desk advisors before morning rush! Look closely at the updated Renewal & Retention Chart taped beside Register One. Management revised one item overnight: because studio laundry expenses surged, the Classic Month-to-Month tier no longer includes complimentary bath towels—make sure renewing clients know towel service costs three dollars per visit unless they pick a longer commitment. Remember, only our top annual package includes guest passes.',
      doc('table', 'Apex Fitness Club — Membership Renewal Incentives', [['Effective', 'October 1']], [
        tbl(
          ['Renewal Package', 'Monthly Rate', 'Towel Service', 'Guest Passes', 'Freeze Limit'],
          [
            ['Classic Month-to-Month', '$79 / mo', 'Included (Legacy)', '0 Passes', 'None'],
            ['Six-Month Commit', '$69 / mo', 'Included', '0 Passes', '1 Month'],
            ['Annual Flex', '$59 / mo', 'Included', '0 Passes', '2 Months'],
            ['Annual Premier', '$74 / mo', 'Included', '4 Passes / Yr', '3 Months'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which printed perk is no longer valid on the Classic Month-to-Month plan?', ['Free bath towel service', 'Monthly fee of seventy-nine dollars', 'Zero complimentary guest passes', 'No billing freeze allowance'], 0, 'ตอบ Free bath towel service (ผู้จัดการปรับแก้เมื่อคืนให้แบบ Classic รายเดือนไม่รวมผ้าเช็ดตัวฟรีแล้ว ต้องจ่ายครั้งละ $3)'],
        ['Part 4 · Graphic', 'Which renewal option provides complimentary guest passes?', ['Annual Premier', 'Annual Flex', 'Six-Month Commit', 'Classic Month-to-Month'], 0, 'ตอบ Annual Premier (จากตารางมีเพียง Annual Premier เท่านั้นที่ได้รับบัตรเชิญเพื่อน 4 ใบต่อปี)'],
        ['Part 4 · Reason', 'Why did management remove the towel perk from the shortest plan?', ['Rising costs of operating the club’s studio laundry', 'Shortage of clean bath towels near Register One', 'Complaints from Annual Premier guests over locker crowding', 'Low renewal rates on six-month commitments'], 0, 'ตอบ Rising costs of operating the club’s studio laundry (ค่าใช้จ่ายซักอบรีดผ้าของสตูดิโอพุ่งสูงขึ้น)'],
      ]),

    p4(19, 'l19-p4-9', 'the following operations huddle and inspection checklist', 'uk_f',
      'Ten minutes until gates open, stadium crew—let’s scan our Pre-Match Readiness Board before fans hit the turnstiles! Thank you to Electrical for wrapping up concourse lighting checks on time, and concessions passed health swabs ten minutes ago. However, look at item four: West Medical Tent still needs two backup automated defibrillators delivered from Security! Carlos, run those units over by golf cart right now so every zone clears before kickoff.',
      doc('list', 'Grandstand Stadium — Pre-Match Inspection Checklist', [['Kickoff', 'Saturday 6:00 P.M.']], [
        lst([
          '1. Concourse Lighting & Emergency Exit Signs — Verified Complete',
          '2. North & South Beverage Stand Health Swabs — Verified Complete',
          '3. Turnstile Ticket Scanner Calibration — Verified Complete',
          '4. West Medical Tent Backup Defibrillators — Pending Delivery',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which checklist item remains incomplete?', ['Item 4 · West Medical Tent Backup Defibrillators', 'Item 1 · Concourse Lighting & Exit Signs', 'Item 2 · Beverage Stand Health Swabs', 'Item 3 · Turnstile Ticket Scanners'], 0, 'ตอบ Item 4 · West Medical Tent Backup Defibrillators (รายการที่ 4 ยังขึ้นสถานะ Pending Delivery คือรอส่งเครื่องกระตุกหัวใจไฟฟ้าสำรอง)'],
        ['Part 4 · Action', 'How will Carlos transport the missing medical units?', ['By driving a stadium golf cart', 'By pushing a rolling concessions crate', 'By carrying them through West turnstiles', 'By coordinating with external ambulance crews'], 0, 'ตอบ By driving a stadium golf cart (หัวหน้าสั่งให้ Carlos ขับรถกอล์ฟนำอุปกรณ์ไปส่งทันที)'],
        ['Part 4 · Detail', 'How long ago did the food and beverage stands pass inspection?', ['Ten minutes ago', 'One hour ago', 'At six P.M.', 'Last Saturday'], 0, 'ตอบ Ten minutes ago (ผู้พูดระบุว่าบูธอาหารและเครื่องดื่มผ่านการตรวจความสะอาดเมื่อ 10 นาทีที่ผ่านมา)'],
      ]),

    p4(19, 'l19-p4-10', 'the following facility log briefing and table', 'us_m',
      'Morning, aquatics supervisors—please review the six A.M. Pool Heating & Filtration Log before opening locker doors. Most zones look right inside standard ranges. However, look closely at Zone C: a sticking steam valve overnight dropped water two degrees below our thirty-two-degree therapeutic spec! Until plumbers swap that valve at ten A.M., cancel the eight o’clock senior aqua-stretch class and offer attendees free lap passes inside the warm-up pool next door instead.',
      doc('table', 'Lakeside Aquatic Center — 6:00 A.M. Pool Chemistry & Temp Log', [['Date', 'Thursday Morning']], [
        tbl(
          ['Pool Zone', 'Target Temp', '6:00 A.M. Reading', 'Chlorine (ppm)'],
          [
            ['Zone A · Competition 50m', '26.5°C', '26.6°C', '2.0 ppm'],
            ['Zone B · Recreational Warm-Up', '28.5°C', '28.4°C', '2.2 ppm'],
            ['Zone C · Hydro-Therapy Tank', '32.0°C', '30.0°C', '2.4 ppm'],
            ['Zone D · Diving Well', '27.0°C', '27.1°C', '1.9 ppm'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. Which pool zone dropped below its target temperature?', ['Zone C · Hydro-Therapy Tank', 'Zone A · Competition 50m', 'Zone B · Recreational Warm-Up', 'Zone D · Diving Well'], 0, 'ตอบ Zone C · Hydro-Therapy Tank (ค่าเป้าหมายคือ 32.0°C แต่วัดจริงตอน 6 โมงเช้าได้แค่ 30.0°C ต่ำกว่าเกณฑ์ 2 องศา)'],
        ['Part 4 · Graphic', 'Where will displaced 8:00 A.M. aqua-stretch participants be invited to swim instead?', ['In Zone B · Recreational Warm-Up', 'In Zone D · Diving Well', 'In Zone A · Competition 50m', 'Inside outdoor patio spas'], 0, 'ตอบ In Zone B · Recreational Warm-Up (ผู้พูดให้มอบบัตรว่ายน้ำฟรีใน warm-up pool ที่อยู่ติดกันคือ Zone B แทน)'],
        ['Part 4 · Detail', 'When are plumbers expected to replace the faulty steam valve?', ['At 10:00 A.M.', 'At 8:00 A.M.', 'At 6:00 A.M.', 'Tomorrow afternoon'], 0, 'ตอบ At 10:00 A.M. (ช่างประปาจะเข้ามาเปลี่ยนวาล์วไอน้ำที่ค้างในเวลา 10:00 น.)'],
      ]),

    // ==================== SET 20 ====================
    // Themes: Ocean Container Port Customs, Air Cargo Terminal Sorting, International Freight Brokerage
    p1(20, 'l20-p1-1', 'us_m', [
      'Overhead gantry cranes are lifting stacked cargo containers beside a moored ship.',
      'Tugboats are towing a passenger ferry beneath a steel suspension bridge.',
      'Dockworkers are painting white hull numbers along an empty concrete pier.',
      'Forklifts are unloading cardboard luggage carts beside a railway station.',
    ], 0, 'ตอบ Overhead gantry cranes are lifting stacked cargo containers beside a moored ship. (เครนโครงขนาดใหญ่ริมท่าเรือกำลังยกตู้คอนเทนเนอร์ข้างเรือสินค้าที่จอดเทียบท่า)'),
    p1(20, 'l20-p1-2', 'uk_f', [
      'Pilots are walking across an open tarmac toward parked cargo aircraft.',
      'Netted freight pallets are resting along stainless roller conveyors inside a sorting bay.',
      'Customs clerks are stamping paper passports at an airport terminal desk.',
      'Maintenance crews are sweeping snow off a lighted cargo runway.',
    ], 1, 'ตอบ Netted freight pallets are resting along stainless roller conveyors inside a sorting bay. (พาเลตสินค้าที่คลุมตาข่ายวางอยู่บนสายพานลูกกลิ้งสเตนเลสในโรงคัดแยกสินค้าทางอากาศ)'),
    p1(20, 'l20-p1-3', 'au_m', [
      'A truck driver is fastening rubber chains across rear trailer tires.',
      'Warehouse cleaners are mopping around wooden shipping pallets.',
      'A customs inspector is holding a digital tablet beside an open shipping container.',
      'Two dock clerks are carrying steel ladders through a security gate.',
    ], 2, 'ตอบ A customs inspector is holding a digital tablet beside an open shipping container. (เจ้าหน้าที่ศุลกากรกำลังถือแท็บเล็ตตรวจดูข้างตู้คอนเทนเนอร์ที่เปิดอยู่)'),
    p1(20, 'l20-p1-4', 'ca_f', [
      'Delivery vans are reversing into narrow downtown alleys.',
      'Heavy cranes are hoisting tractor trailers onto a barge.',
      'Workers are installing digital toll signs above an empty highway.',
      'Commercial freight trucks are queued beneath numbered port entry lanes.',
    ], 3, 'ตอบ Commercial freight trucks are queued beneath numbered port entry lanes. (รถบรรทุกขนส่งสินค้าจอดเรียงแถวรอใต้ป้ายช่องตรวจเลขที่หน้าด่านท่าเรือ)'),
    p1(20, 'l20-p1-5', 'us_f2', [
      'A warehouse packer is securing a wooden export crate with metal strapping.',
      'An inspector is weighing sealed envelopes on a small counter scale.',
      'Forklift operators are stacking plastic drums onto an outdoor rack.',
      'Couriers are sorting express mailbags behind a glass partition.',
    ], 0, 'ตอบ A warehouse packer is securing a wooden export crate with metal strapping. (พนักงานโกดังกำลังใช้เครื่องรัดสายรัดเหล็กปิดลังไม้สำหรับส่งออก)'),
    p1(20, 'l20-p1-6', 'uk_m', [
      'Freight agents are boarding a shuttle bus outside Terminal Three.',
      'Logistics coordinators work at dual monitors beneath a wall-mounted global route map.',
      'Customs officers are locking filing cabinets inside a narrow archive.',
      'Ship captains are reviewing harbor depth charts on a wooden pier.',
    ], 1, 'ตอบ Logistics coordinators work at dual monitors beneath a wall-mounted global route map. (เจ้าหน้าที่ประสานงานขนส่งทำงานหน้าจอคู่ใต้แผนที่เส้นทางโลกบนผนัง)'),

    // Set 20 Part 2 (25 Qs)
    p2(20, 'l20-p2-1', 'uk_f2', 'us_m', 'Where should drivers drop off cleared customs release forms?', ['At Window Four inside the Port Annex.', 'Because marine vessels docked three hours early.', 'Roughly forty-two containers per barge.'], 0, 'ตอบ At Window Four inside the Port Annex. (ถามสถานที่ส่งเอกสารปล่อยสินค้า Where ตอบที่ช่องบริการ 4 ในอาคาร Port Annex)'),
    p2(20, 'l20-p2-2', 'us_m2', 'au_f', 'Who verified the harmonized tariff codes on our Rotterdam shipment?', ['Sonia from Customs Compliance signed off this morning.', 'Before the afternoon air cargo cutoff.', 'Yes, textile duties rose two percent in April.'], 0, 'ตอบ Sonia from Customs Compliance signed off this morning. (ถามผู้ตรวจสอบรหัสพิกัดศุลกากร Who ตอบ Sonia จากฝ่ายศุลกากรเซ็นรับรองเมื่อเช้า)'),
    p2(20, 'l20-p2-3', 'ca_m', 'uk_f', 'When does the night air-cargo sortation belt shut down for calibration?', ['Right after the five A.M. Zurich freighter finishes loading.', 'Along Concourse East beside Bay Nine.', 'Twelve hundred express parcels per hour.'], 0, 'ตอบ Right after the five A.M. Zurich freighter finishes loading. (ถามกำหนดเวลาปิดสายพานคัดแยก When ตอบหลังโหลดเครื่องบินขนส่งเที่ยวซูริกตอนตีห้าเสร็จ)'),
    p2(20, 'l20-p2-4', 'au_m', 'us_f', 'Should we book sea consolidation or priority air charter for the trade show samples?', ['Go with air charter—the Munich expo opens in just five days.', 'No, wooden crates meet international pest standards.', 'At Pier Seven near the cold dock.'], 0, 'ตอบ Go with air charter—the Munich expo opens in just five days. (ถามทางเลือกขนส่งทางเรือหรือเครื่องบินเหมาลำ ตอบเครื่องบินเพราะงานแสดงสินค้าเปิดใน 5 วัน)'),
    p2(20, 'l20-p2-5', 'us_f2', 'ca_m', 'Why was Container 409 flagged for secondary X-ray screening?', ['Its declared net weight didn’t match the gate scale reading.', 'Straight through Bonded Gate Twelve.', 'Every Tuesday and Thursday afternoon.'], 0, 'ตอบ Its declared net weight didn’t match the gate scale reading. (ถามเหตุผลที่ตู้ถูกเรียกเอกซเรย์ซ้ำ Why ตอบน้ำหนักที่สำแดงไม่ตรงกับเครื่องชั่งหน้าด่าน)'),
    p2(20, 'l20-p2-6', 'uk_m', 'au_f', 'Hasn’t our freight broker emailed the amended bill of lading yet?', ['He’s waiting on the exporter’s stamp before releasing it.', 'No, I usually take the harbor commuter ferry.', 'Under two hundred kilograms per air pallet.'], 0, 'ตอบ He’s waiting on the exporter’s stamp before releasing it. (ถามเชิงปฏิเสธ Hasn’t... ตอบว่ายังเพราะรอตราประทับจากผู้ส่งออก)'),
    p2(20, 'l20-p2-7', 'us_m', 'uk_f2', 'How many free storage days does Pier Three allow before demurrage starts?', ['Four calendar days starting from vessel discharge.', 'Only for refrigerated medical containers.', 'Around ninety dollars per empty chassis.'], 0, 'ตอบ Four calendar days starting from vessel discharge. (ถามจำนวนวันฝากฟรี How many ตอบ 4 วันปฏิทินนับจากวันยกตู้ขึ้นฝั่ง)'),
    p2(20, 'l20-p2-8', 'ca_f', 'au_m', 'Could you double-check the dry-ice weight limit on the Singapore air waybill?', ['Sure—let me pull up the carrier’s dangerous-goods manual right now.', 'Yes, dry ice cools chilled seafood effectively.', 'At Hangar B beside the runway fence.'], 0, 'ตอบ Sure—let me pull up the carrier’s dangerous-goods manual right now. (คำขอให้เช็กเพดานน้ำหนักน้ำแข็งแห้ง ตอบรับทันทีว่าจะเปิดคู่มือสายการบินดูให้)'),
    p2(20, 'l20-p2-9', 'au_f', 'us_m2', 'The barcode diverter arm on Sort Line Three missed several oversized boxes.', ['I’ll call Ramp Maintenance to realign the optical sensor.', 'About sixty tons of courier freight tonight.', 'No, customs sealed those crates in Busan.'], 0, 'ตอบ I’ll call Ramp Maintenance to realign the optical sensor. (บอกเล่าปัญหาแขนคัดแยกบาร์โค้ดพลาดกล่องใหญ่ -> อาสาโทรเรียกช่างปรับเซนเซอร์)'),
    p2(20, 'l20-p2-10', 'us_f', 'uk_m', 'Which ocean carrier quoted the fastest transit from Busan to Seattle?', ['PacificStar Line offered twelve days direct with zero transshipment.', 'On the bottom row of the shipping invoice.', 'Yes, port congestion eased noticeably last week.'], 0, 'ตอบ PacificStar Line offered twelve days direct with zero transshipment. (ถามเลือกสายเรือที่เร็วที่สุด Which ตอบสายเรือ PacificStar Line)'),
    p2(20, 'l20-p2-11', 'uk_m', 'ca_f', 'How long does bonded warehouse customs inspection usually take?', ['Typically twenty-four hours once commercial invoices match.', 'Inside Terminal Two adjacent to Customs Desk B.', 'Mostly automotive brake parts and valves.'], 0, 'ตอบ Typically twenty-four hours once commercial invoices match. (ถามระยะเวลาตรวจปล่อยสินค้าทัณฑ์บน How long ตอบปกติ 24 ชั่วโมง)'),
    p2(20, 'l20-p2-12', 'us_m2', 'uk_f', 'Do you want the exporter’s certificate of origin sent digitally or via courier?', ['Upload the certified PDF—customs accepts electronic seals now.', 'Between three and five every afternoon.', 'Yes, tariffs depend on country of manufacture.'], 0, 'ตอบ Upload the certified PDF—customs accepts electronic seals now. (ถามทางเลือกส่งเอกสารดิจิทัลหรือแมสเซนเจอร์ ตอบให้อัปโหลด PDF รับรองเพราะศุลกากรรับแบบอิเล็กทรอนิกส์แล้ว)'),
    p2(20, 'l20-p2-13', 'ca_m', 'us_f2', 'Where did Dispatch file the chassis interchange receipts from Gate Seven?', ['Inside the yellow tray next to the freight brokerage terminal.', 'Because two container cranes paused during high winds.', 'Almost thirty trucks cleared inspection before noon.'], 0, 'ตอบ Inside the yellow tray next to the freight brokerage terminal. (ถามหาตำแหน่งเก็บใบรับมอบโครงรถลากตู้ Where ตอบอยู่ในถาดสีเหลืองข้างเครื่องลูกข่าย)'),
    p2(20, 'l20-p2-14', 'au_m', 'uk_f2', 'Why don’t we consolidate our three small textile air shipments onto one pallet?', ['Smart idea—that drops the per-kilogram airline rate right away.', 'No, wool garments pack tightly inside cartons.', 'Around midnight at Cargo Gate Four.'], 0, 'ตอบ Smart idea—that drops the per-kilogram airline rate right away. (เสนอแนะรวมส่งสินค้าทางอากาศเป็นพาเลตเดียว -> เห็นด้วยเพราะลดค่าขนส่งต่อกิโลกรัมทันที)'),
    p2(20, 'l20-p2-15', 'us_f', 'ca_m', 'Aren’t you meeting the harbor customs broker at Terminal Five this morning?', ['Actually, Kenji went down while I handle the Osaka air freight claim.', 'Every inbound container displays an aluminum bolt seal.', 'Right beside the deepwater gantry pier.'], 0, 'ตอบ Actually, Kenji went down while I handle the Osaka air freight claim. (ถามเชิงปฏิเสธ Aren’t you... ตอบว่า Kenji ลงไปพบแทนระหว่างตนทำเรื่องเคลมสินค้าทางอากาศโอซากา)'),
    p2(20, 'l20-p2-16', 'uk_f', 'au_m', 'What is the maximum height allowed on standard cargo aircraft lower-deck pallets?', ['Sixty-four inches including the wooden skid underneath.', 'Check with the marine dock supervisor on Pier Two.', 'Yes, widebody freighters carry larger main-deck units.'], 0, 'ตอบ Sixty-four inches including the wooden skid underneath. (ถามความสูงสูงสุดของพาเลตใต้ท้องเครื่อง ตอบ 64 นิ้วรวมฐานไม้)'),
    p2(20, 'l20-p2-17', 'ca_f', 'us_m', 'How much is the port’s after-hours chassis detention charge?', ['Check the latest terminal tariff sheet—rates changed on Monday.', 'Yes, empty trailers return through Gate Nine.', 'Roughly twelve nautical miles offshore.'], 0, 'ตอบ Check the latest terminal tariff sheet—rates changed on Monday. (ถามค่าปรับจอดโครงรถนอกเวลา How much ตอบเลี่ยงอย่างเป็นธรรมชาติให้เช็กตารางค่าธรรมเนียมใหม่เพราะเพิ่งปรับวันจันทร์)'),
    p2(20, 'l20-p2-18', 'us_m', 'uk_m', 'Did the priority courier parcel clear Tokyo airport customs before noon?', ['Yes, our local agent messaged that release went through at eleven-twenty.', 'Usually three flights daily from Narita.', 'No, I misplaced my customs broker badge earlier.'], 0, 'ตอบ Yes, our local agent messaged that release went through at eleven-twenty. (ถามว่าพัสดุผ่านด่านโตเกียวก่อนเที่ยงไหม ตอบผ่านแล้วเมื่อ 11:20 น.)'),
    p2(20, 'l20-p2-19', 'uk_f2', 'us_f2', 'Port trucking appointments cut gate wait times down to twelve minutes last week.', ['What a relief—our drivers used to idle over an hour there!', 'Yes, container seals come in bright orange plastic.', 'Leave spare shipping manifests beside Printer Two.'], 0, 'ตอบ What a relief—our drivers used to idle over an hour there! (บอกเล่าเรื่องระบบนัดเวลาเข้าท่าเรือช่วยลดเวลารอคิว -> ตอบรับโล่งใจเพราะเดิมต้องรอนานกว่าชั่วโมง)'),
    p2(20, 'l20-p2-20', 'au_f', 'ca_m', 'Our freight insurance policy covers marine theft from warehouse to final port, doesn’t it?', ['Actually, warehouse-to-warehouse protection requires the extended rider.', 'At Berth Eleven beside the grain terminal.', 'We insured twelve pallets of medical monitors.'], 0, 'ตอบ Actually, warehouse-to-warehouse protection requires the extended rider. (คำถาม Tag question ตรวจสอบความคุ้มครองประกัน -> แก้ความเข้าใจว่าต้องซื้อเอกสารแนบท้ายเพิ่มเติม)'),
    p2(20, 'l20-p2-21', 'uk_m', 'us_m2', 'Do you know if bonded air cargo flights require tamper-evident tape on every seam?', ['Yes, security regulations mandate sealed tape along all box flaps.', 'I booked space on Tuesday’s midnight freighter.', 'Only three shippers requested chilled storage.'], 0, 'ตอบ Yes, security regulations mandate sealed tape along all box flaps. (ถามกฎการติดเทปกันแกะสินค้าทัณฑ์บนทางอากาศ ตอบกฎบังคับให้ติดทุกแนวฝาปิดกล่อง)'),
    p2(20, 'l20-p2-22', 'us_f2', 'au_m', 'What time does the automated customs electronic manifest portal lock for Friday departures?', ['Exactly four hours prior to scheduled takeoff.', 'To prevent undeclared lithium batteries aboard aircraft.', 'Over two hundred global freight forwarders.'], 0, 'ตอบ Exactly four hours prior to scheduled takeoff. (ถามเวลาปิดระบบส่งใบสำแดงอิเล็กทรอนิกส์ What time ตอบ 4 ชั่วโมงก่อนเครื่องออกพอดี)'),
    p2(20, 'l20-p2-23', 'ca_m', 'uk_f', 'Would you like me to translate the packing list into Spanish before the Valencia vessel sails?', ['Yes, please—customs clears translated manifests much faster.', 'No, the ocean freighter departs from Berth Four.', 'Twenty metric tons of stainless fittings.'], 0, 'ตอบ Yes, please—customs clears translated manifests much faster. (เสนอแปลใบรายการบรรจุภัณฑ์เป็นภาษาสเปน -> ตอบตกลงเพราะช่วยปล่อยของเร็วขึ้น)'),
    p2(20, 'l20-p2-24', 'us_m2', 'ca_f', 'Have the empty forty-foot refrigerated containers been washed for tomorrow’s seafood load?', ['Cleaning crews finished sterilizing all eight units half an hour ago.', 'Because shrimp shipments require minus twenty degrees.', 'Near West Dock Gate Three.'], 0, 'ตอบ Cleaning crews finished sterilizing all eight units half an hour ago. (ถามความพร้อมตู้เย็นเปล่า 40 ฟุต ตอบทีมล้างฆ่าเชื้อเสร็จทั้ง 8 ตู้เมื่อครึ่งชั่วโมงก่อน)'),
    p2(20, 'l20-p2-25', 'uk_f', 'us_f', 'Whose freight brokerage license number belongs on this customs power-of-attorney form?', ['Use Carla’s senior license number—she oversees all European imports.', 'Yes, customs powers of attorney renew every three years.', 'File signed clearance packets inside Cabinet Six.'], 0, 'ตอบ Use Carla’s senior license number—she oversees all European imports. (ถามว่าต้องใช้เลขใบอนุญาตนายหน้าของใคร Whose ตอบใช้ของ Carla เพราะดูแลการนำเข้ายุโรป)'),

    // Set 20 Part 3 (13 Conversations × 3 Qs = 39 Qs; 3-speaker Convs at 3, 8, 10; Graphics at 11, 12, 13)
    p3(20, 'l20-p3-1', [
      ['Woman', 'us_f', 'Hi, Ken—Customs at Terminal Four just placed an inspection hold on our client’s container of wireless earbuds from Shenzhen.'],
      ['Man', 'uk_m', 'Wait, why? We submitted the commercial invoice and packing list three days before the ship arrived!'],
      ['Woman', 'us_f', 'True, though the factory listed the wrong harmonized tariff code—they wrote "plastic audio cables" instead of "rechargeable wireless headsets," which triggers an automatic battery review.'],
      ['Man', 'uk_m', 'Ugh, that explains it. I’ll file a tariff amendment with the Shenzhen shipper’s battery safety sheet right now so Customs releases the box before storage fees kick in.'],
    ], null, [
      ['Part 3 · Problem', 'Why did Terminal Four customs place a hold on the shipment?', ['The exporter entered an inaccurate product tariff classification', 'Commercial invoices were submitted three days after docking', 'Rechargeable earbuds leaked battery acid inside the container', 'Shipping crews forgot to include a packing list'], 0, 'ตอบ The exporter entered an inaccurate product tariff classification (โรงงานระบุรหัสพิกัดศุลกากรผิดเป็นสายสัญญาณพลาสติกแทนหูฟังไร้สายที่มีแบตเตอรี่)'],
      ['Part 3 · Detail', 'What goods are actually inside the delayed container?', ['Wireless earbuds', 'Plastic audio cables', 'Replacement battery chargers', 'Terminal scanner components'], 0, 'ตอบ Wireless earbuds (สินค้าจริงคือหูฟังไร้สาย wireless earbuds จากเซินเจิ้น)'],
      ['Part 3 · Action', 'What will Ken attach when filing the customs correction?', ['A battery safety document from the manufacturer', 'A new terminal four storage fee waiver', 'Photographs of wireless earbud packaging', 'Signed unloading receipts from Shenzhen'], 0, 'ตอบ A battery safety document from the manufacturer (จะแนบเอกสารความปลอดภัยแบตเตอรี่ของผู้ผลิตไปพร้อมคำร้องขอแก้ไขพิกัด)'],
    ]),

    p3(20, 'l20-p3-2', [
      ['Man', 'ca_m', 'Maya, urgent ramp alert—Flight 418 to Chicago just swapped from a widebody jet down to a narrowbody freighter because of a hydraulic valve fault!'],
      ['Woman', 'au_f', 'Wait—that affects our refrigerated orchid pallets! A narrowbody belly can’t accept tall LD-3 containers, only low-profile bulk boxes.'],
      ['Man', 'ca_m', 'Right, and those fresh flowers spoil fast if they sit on the tarmac waiting until tomorrow’s flight.'],
      ['Woman', 'au_f', 'Let’s pull the orchid cartons out of the LD-3 container right now and transfer them onto two shorter bulk trays so they still depart tonight on Flight 418.'],
    ], null, [
      ['Part 3 · Cause', 'Why did Flight 418 switch to a smaller aircraft?', ['A hydraulic repair forced an equipment change', 'Refrigerated orchid pallets weighed too little for widebodies', 'Chicago airport restricted widebody cargo arrivals tonight', 'Tall LD-3 containers sold out at the cargo terminal'], 0, 'ตอบ A hydraulic repair forced an equipment change (เครื่องบินลำตัวกว้างมีปัญหาเกี่ยวกับวาล์วไฮดรอลิก จึงต้องเปลี่ยนเป็นเครื่องลำตัวแคบ)'],
      ['Part 3 · Problem', 'Why can the orchid pallets not be loaded onto the new aircraft as packed?', ['The taller containers will not fit inside a narrowbody cargo hold', 'Fresh flowers are banned aboard narrowbody passenger planes', 'Tarmac tractors cannot lift refrigerated pallets safely', 'Bulk cargo holds lack cooling vents for tropical plants'], 0, 'ตอบ The taller containers will not fit inside a narrowbody cargo hold (ใต้ท้องเครื่องลำตัวแคบไม่รองรับตู้ LD-3 ทรงสูง)'],
      ['Part 3 · Action', 'What will the speakers do so the flowers still leave tonight?', ['Repack the flower boxes onto lower-height cargo trays', 'Hold the orchids in cool storage until tomorrow’s widebody', 'Book an express truck directly to Chicago overnight', 'Request hydraulic mechanics finish repairs before departure'], 0, 'ตอบ Repack the flower boxes onto lower-height cargo trays (รีบย้ายกล่องดอกกล้วยไม้ออกจากตู้สูงมาใส่ถาดเตี้ยเพื่อให้ทันขึ้น Flight 418 คืนนี้)'],
    ]),

    p3(20, 'l20-p3-3', [
      ['Woman1', 'uk_f2', 'Good morning, both of you. Vessel Harbor Queen finally cleared customs at Berth Six, which means our client’s twelve auto-parts containers need pickup by five P.M. before port demurrage fees start!'],
      ['Man', 'us_m2', 'Hold on—our usual drayage carrier only has eight empty flatbed chassis available this morning because two ships docked together at Terminal West.'],
      ['Woman2', 'ca_f', 'Wait—I checked the port’s shared pool bulletin ten minutes ago. Metro Container Leasing has five spare chassis parked idle right inside Yard C!'],
      ['Woman1', 'uk_f2', 'Awesome detective work, Priya! Book four of those Yard C chassis immediately, and have our dispatcher lock noon gate appointments for all twelve loads.'],
    ], null, [
      ['Part 3 · Urgency', 'Why must all twelve auto-parts containers leave Berth Six by 5:00 P.M.?', ['To avoid incurring daily port storage penalties', 'To make space for a second vessel docking at noon', 'Because Terminal West gates lock permanently at five', 'Because auto-parts factories shut down assembly lines tonight'], 0, 'ตอบ To avoid incurring daily port storage penalties (ต้องรับตู้ออกก่อนห้าโมงเย็นเพื่อเลี่ยงค่าปรับตู้ค้างท่า demurrage fees)'],
      ['Part 3 · Obstacle', 'What shortage threatened the pickup schedule?', ['Not enough trailer chassis were free from the regular carrier', 'Customs delayed clearing twelve containers at Berth Six', 'Metro Container Leasing closed Yard C for maintenance', 'Noon terminal gate slots were fully booked'], 0, 'ตอบ Not enough trailer chassis were free from the regular carrier (ผู้ขนส่งประจำมีหางลากว่างแค่ 8 คันไม่พอสำหรับ 12 ตู้)'],
      ['Part 3 · Solution', 'How did Priya help solve the equipment gap?', ['By locating spare chassis available at a nearby leasing yard', 'By scheduling night gate appointments after five P.M.', 'By diverting four containers onto coastal freight trains', 'By borrowing chassis from ships docked at Terminal West'], 0, 'ตอบ By locating spare chassis available at a nearby leasing yard (ดูประกาศพบว่า Metro Container Leasing มีหางลากว่าง 5 คันใน Yard C)'],
    ]),

    p3(20, 'l20-p3-4', [
      ['Man', 'uk_m', 'Elena, stop X-ray Belt Three—look at the dark dense rectangle inside Carton 78 on the monitor!'],
      ['Woman', 'us_f2', 'Whoa, that looks exactly like a spare lithium power bank, yet the shipper’s air waybill declares "cotton office uniforms only"!'],
      ['Man', 'uk_m', 'Undeclared lithium batteries in standard air mail are a major cabin fire hazard. Should I open the carton here or call dangerous-goods security?'],
      ['Woman', 'us_f2', 'Don’t cut the tape yourself—move Belt Three onto the quarantine spur, tag Carton 78 red, and alert Hazardous Compliance to inspect and notify the sender.'],
    ], null, [
      ['Part 3 · Problem', 'What suspicious discrepancy did the X-ray operator spot?', ['An undeclared electronic battery appeared inside a clothing box', 'Cotton uniforms exceeded air mail carton weight limits', 'X-ray Belt Three stopped scanning dark rectangles properly', 'Hazardous Compliance forgot to label Carton 78'], 0, 'ตอบ An undeclared electronic battery appeared inside a clothing box (ภาพเอกซเรย์เห็นก้อนแบตเตอรี่ลิเทียมในกล่องที่สำแดงว่าเป็นชุดยูนิฟอร์มผ้าฝ้ายอย่างเดียว)'],
      ['Part 3 · Reason', 'Why is the discrepancy considered serious for air transport?', ['Unlisted lithium cells pose an aviation fire risk', 'Cotton office clothing attracts moisture inside cargo holds', 'Quarantine spurs block afternoon air mail sorting', 'Red luggage tags trigger customs tax penalties'], 0, 'ตอบ Unlisted lithium cells pose an aviation fire risk (แบตเตอรี่ลิเทียมที่ไม่ได้สำแดงเป็นอันตรายเสี่ยงไฟไหม้บนเครื่องบิน)'],
      ['Part 3 · Action', 'What should the man do with Carton 78 next?', ['Isolate it on a side belt with a red tag for specialist review', 'Open the sealed carton immediately to remove the battery', 'Load it onto standard ocean containers instead', 'Return the box directly to the clothing shipper'], 0, 'ตอบ Isolate it on a side belt with a red tag for specialist review (ย้ายไปรางกักกัน ติดแท็กสีแดง และแจ้งทีมวัตถุอันตรายมาตรวจ)'],
    ]),

    p3(20, 'l20-p3-5', [
      ['Woman', 'au_f', 'Hi, Daniel—our medical device firm is shipping three prototype diagnostic analyzers to the Berlin health trade fair opening May eighteenth. Can ocean consolidation get them there cheaply?'],
      ['Man', 'us_m', 'Normally yes, Ms. Brooks, though ocean transit plus port customs clearance averages thirty-two days—and May eighteenth is less than three weeks away!'],
      ['Woman', 'au_f', 'Oh dear—if our booth opens empty on opening morning, we’ll lose half our European hospital leads.'],
      ['Man', 'us_m', 'Here’s a smart middle path: send one demo analyzer by priority air freight for opening day, and ship the two spare units and heavy display cabinets via shared ocean container!'],
    ], null, [
      ['Part 3 · Problem', 'Why is ocean shipping unsuitable for the entire medical equipment shipment?', ['Sea transit will not arrive before the Berlin fair begins', 'Ocean containers cannot carry fragile diagnostic prototypes', 'Berlin customs prohibits medical imports in May', 'Shared sea freight costs more than priority air shipments'], 0, 'ตอบ Sea transit will not arrive before the Berlin fair begins (ขนส่งทางเรือใช้เวลาเฉลี่ย 32 วัน แต่งานแฟร์ที่เบอร์ลินจะเปิดในไม่ถึง 3 สัปดาห์)'],
      ['Part 3 · Proposal', 'What split-shipping solution does Daniel recommend?', ['Flying one demonstration machine while sending heavier items by sea', 'Renting European hospital analyzers directly inside Berlin', 'Shipping all three units via express air freight charter', 'Postponing the company’s trade show booth opening by two weeks'], 0, 'ตอบ Flying one demonstration machine while sending heavier items by sea (ส่งเครื่องสาธิต 1 เครื่องทางอากาศให้ทันวันเปิดงาน ส่วนเครื่องสำรองและตู้โชว์ส่งทางเรือเพื่อประหยัดงบ)'],
      ['Part 3 · Detail', 'Where is the upcoming health trade fair taking place?', ['Berlin', 'London', 'Frankfurt', 'Zurich'], 0, 'ตอบ Berlin (ผู้หญิงระบุชัดเจนว่าไปงาน Berlin health trade fair วันที่ 18 พฤษภาคม)'],
    ]),

    p3(20, 'l20-p3-6', [
      ['Man', 'ca_m', 'Wait—why is our bonded truck still sitting outside Customs Gate Nine? Our driver arrived at eight A.M. sharp!'],
      ['Woman', 'uk_f', 'Customs officers rejected the printed commercial invoice—notice the exporter signed it digitally with a typed font instead of an ink stamp or verified e-signature!'],
      ['Man', 'ca_m', 'Seriously? Can the supplier in Milan email a stamped scanned PDF before Gate Nine shifts at noon?'],
      ['Woman', 'uk_f', 'I already rang Milan—their export manager is stamping and uploading it to the customs portal within fifteen minutes so our truck clears before lunch.'],
    ], null, [
      ['Part 3 · Problem', 'Why was the truck held at Customs Gate Nine?', ['An invoice lacked an acceptable official signature or stamp', 'The driver missed the eight A.M. terminal entry cutoff', 'Bonded warehouse parking bays were full until noon', 'Export goods from Milan failed physical container inspection'], 0, 'ตอบ An invoice lacked an acceptable official signature or stamp (ใบกำกับสินค้ามีแค่ลายเซ็นพิมพ์เป็นฟอนต์ ไม่มีตราประทับหมึกหรือลายเซ็นดิจิทัลที่ยืนยันตัวตน)'],
      ['Part 3 · Detail', 'Where did the shipment originate?', ['Milan', 'Madrid', 'Munich', 'Marseille'], 0, 'ตอบ Milan (ผู้หญิงโทรประสานผู้จัดการส่งออกที่เมืองมิลานแล้ว)'],
      ['Part 3 · Detail', 'When is the corrected invoice expected to reach the customs portal?', ['Within fifteen minutes', 'After twelve noon', 'Tomorrow morning', 'In three hours'], 0, 'ตอบ Within fifteen minutes (ผู้จัดการฝ่ายส่งออกที่มิลานกำลังประทับตราและอัปโหลดเข้าพอร์ทัลภายใน 15 นาที)'],
    ]),

    p3(20, 'l20-p3-7', [
      ['Woman', 'us_f2', 'Hey Tariq, automated barcode scans on Sort Line North just dropped below seventy percent accuracy—boxes are bouncing straight into the manual kickout lane!'],
      ['Man', 'au_m', 'Whoa, no wonder the manual pile grew huge! Let me look under the overhead scanner bridge... aha, sticky label backing paper got wrapped across the laser lens!'],
      ['Woman', 'us_f2', 'Oh, probably off a torn express envelope! Can you wipe the lens during our ten-minute break or do we stop Line North now?'],
      ['Man', 'au_m', 'Stopping Line North for ninety seconds right now saves us sorting four hundred stray packages by hand later!'],
    ], null, [
      ['Part 3 · Problem', 'What issue is slowing down packages on Sort Line North?', ['A blocked overhead scanner is diverting parcels to manual review', 'Express envelopes are tearing open along conveyor rollers', 'Workers left four hundred boxes stacked across the break area', 'Sorting accuracy dropped after software calibration failed'], 0, 'ตอบ A blocked overhead scanner is diverting parcels to manual review (หัวอ่านบาร์โค้ดด้านบนมีกระดาษรองสติกเกอร์ติดบังเลนส์ ทำให้ระบบส่งกล่องไปกองคัดแยกมือเยอะมาก)'],
      ['Part 3 · Cause', 'What physically obstructed the overhead scanner?', ['Peeling backing paper from a shipping label', 'Dust accumulated during overnight shift work', 'A jammed mechanical diverter arm', 'Misaligned steel conveyor guide rails'], 0, 'ตอบ Peeling backing paper from a shipping label (กระดาษกาวด้านหลังฉลากที่หลุดไปพันปิดหน้าเลนส์เลเซอร์)'],
      ['Part 3 · Decision', 'What does Tariq decide to do about the belt?', ['Pause the conveyor briefly right away to clean the lens', 'Wait until the scheduled ten-minute shift break', 'Keep running Line North while four clerks sort manually', 'Route express envelopes onto a slower cargo line'], 0, 'ตอบ Pause the conveyor briefly right away to clean the lens (เลือกหยุดสายพานแค่ 90 วินาทีเดี๋ยวนี้เพื่อเช็ดเลนส์ ดีกว่าต้องมาคัดมือตั้ง 400 กล่อง)'],
    ]),

    p3(20, 'l20-p3-8', [
      ['Man1', 'uk_m', 'Listen up, team—our temperature-controlled container of Belgian chocolates arrived three days late after coastal gales closed Antwerp Harbor.'],
      ['Woman', 'us_f', 'Did the container’s plug-in refrigeration unit stay powered continuously aboard the ship while waiting offshore?'],
      ['Man2', 'ca_m', 'Good question—I pulled the digital logger strip at Pier Four. Air stayed steady between thirteen and fourteen degrees the whole voyage, though the exterior seal door shows minor salt spray.'],
      ['Man1', 'uk_m', 'Great news on the internal logger! Let’s wipe down the door frame before opening, then have our cold-chain surveyor sample two cartons for bloom before releasing to grocery buyers.'],
    ], null, [
      ['Part 3 · Cause', 'Why did the container ship arrive three days behind schedule?', ['Severe coastal storms shut down the departure harbor', 'Refrigeration repairs delayed loading at Pier Four', 'Belgian customs audited cold-chain logger records', 'Grocery buyers requested delayed delivery dates'], 0, 'ตอบ Severe coastal storms shut down the departure harbor (พายุลมแรงชายฝั่งทำให้ท่าเรือ Antwerp ปิดชั่วคราว)'],
      ['Part 3 · Detail', 'What did the digital temperature strip confirm?', ['Cargo cooling remained within safe limits throughout the delay', 'Refrigeration power dropped off briefly offshore', 'Salt water entered the inner chocolate cartons', 'Temperatures rose above twenty degrees during transit'], 0, 'ตอบ Cargo cooling remained within safe limits throughout the delay (ข้อมูลบันทึกดิจิทัลยืนยันว่าอุณหภูมิคงที่ 13–14 องศาตลอดการเดินทาง)'],
      ['Part 3 · Action', 'What final step will happen before grocery buyers receive the cargo?', ['A cold-chain inspector will test sample cartons for quality', 'Workers will transfer chocolates into fresh wooden crates', 'Customs officers will replace the salt-sprayed door seal', 'The freight team will discount late-arriving pallets'], 0, 'ตอบ A cold-chain inspector will test sample cartons for quality (ให้ผู้ตรวจคุมความเย็นสุ่มตรวจคุณภาพช็อกโกแลตสองกล่องก่อนส่งให้ซูเปอร์มาร์เก็ต)'],
    ]),

    p3(20, 'l20-p3-9', [
      ['Woman', 'uk_f2', 'Hi Sam—thanks for calling back from GlobalFreight Brokerage. My apparel brand needs weekly forty-foot containers out of Ho Chi Minh City through December.'],
      ['Man', 'us_m', 'Happy to lock those in early, Ms. Lin! Peak holiday ocean surcharges kick in October fifteenth, jumping spot rates almost six hundred dollars per container.'],
      ['Woman', 'uk_f2', 'Ouch! If we sign a twelve-week fixed allocation contract before October fifth, can you guarantee our current base rate?'],
      ['Man', 'us_m', 'Yes—plus committing to three containers weekly waives our usual documentation filing fee across every sailing.'],
    ], null, [
      ['Part 3 · Topic', 'What are Ms. Lin and the freight broker negotiating?', ['A fixed multi-month ocean container shipping agreement', 'Customs clearance refunds for Ho Chi Minh City clothing', 'Priority air freight rates for December holiday gowns', 'Reducing spot surcharges after October fifteenth'], 0, 'ตอบ A fixed multi-month ocean container shipping agreement (เจรจาทำสัญญาจองตู้คอนเทนเนอร์รายสัปดาห์ระยะยาว 12 สัปดาห์ล่วงหน้าจนถึงธันวาคม)'],
      ['Part 3 · Reason', 'Why is Ms. Lin eager to sign before October 5?', ['To lock in current rates before seasonal shipping fees jump', 'To obtain extra forty-foot containers for autumn sales', 'Because GlobalFreight Brokerage closes spot bookings in October', 'To comply with new apparel import tariffs'], 0, 'ตอบ To lock in current rates before seasonal shipping fees jump (ค่าธรรมเนียมช่วงพีควันหยุดจะปรับขึ้นเกือบ $600 ต่อตู้ตั้งแต่วันที่ 15 ตุลาคม)'],
      ['Part 3 · Benefit', 'What additional savings does a weekly three-container commitment earn?', ['Waived paperwork filing charges on every voyage', 'Six hundred dollars off holiday spot prices', 'Free inland trucking from destination ports', 'Complimentary marine theft coverage'], 0, 'ตอบ Waived paperwork filing charges on every voyage (ยกเว้นค่าธรรมเนียมยื่นเอกสาร documentation filing fee ให้ทุกเที่ยวเรือ)'],
    ]),

    p3(20, 'l20-p3-10', [
      ['Man1', 'au_m', 'Heads-up, terminal duty desk—Cargo Flight 92 from Singapore just touched down early with forty insulated crates of live ornamental fish!'],
      ['Woman', 'us_f', 'Ooh, live aquatic cargo gets strict ninety-minute tarmac clearance! Has our customs veterinarian checked the health certificates already?'],
      ['Man2', 'uk_m', 'Yes—Dr. Patel reviewed the electronic Singapore certs twenty minutes ago and cleared Gate Four release pending one visual tank check.'],
      ['Man1', 'au_m', 'Perfect! Send the enclosed heated van straight to Stand 14 right now so those crates never sit out in the cold morning breeze.'],
    ], null, [
      ['Part 3 · Detail', 'Why does the incoming Singapore cargo require rapid handling?', ['Live ornamental fish must clear the airfield within ninety minutes', 'Cargo Flight 92 landed behind its scheduled connection window', 'Gate Four customs offices close in twenty minutes', 'Insulated fish crates lack oxygen filters aboard planes'], 0, 'ตอบ Live ornamental fish must clear the airfield within ninety minutes (ปลาสวยงามมีชีวิตมีกฎต้องตรวจปล่อยจากลานบินภายใน 90 นาทีอย่างเคร่งครัด)'],
      ['Part 3 · Detail', 'What has Dr. Patel already completed?', ['Pre-checking the shipment’s digital health paperwork', 'Inspecting fish tanks personally at Stand 14', 'Loading forty crates onto a heated terminal van', 'Extending the tarmac clearance window to two hours'], 0, 'ตอบ Pre-checking the shipment’s digital health paperwork (สัตวแพทย์ด่านตรวจใบรับรองสุขภาพอิเล็กทรอนิกส์ล่วงหน้าแล้วเมื่อ 20 นาทีก่อน)'],
      ['Part 3 · Action', 'Why is an enclosed heated van being dispatched to Stand 14?', ['To shield the live aquatic crates from chilly outdoor air', 'To transport Dr. Patel quickly across the runway tarmac', 'To return empty insulated boxes to Flight 92', 'To deliver spare airport clearance documents'], 0, 'ตอบ To shield the live aquatic crates from chilly outdoor air (เพื่อป้องกันไม่ให้ลังปลาสวยงามตากลมอากาศเย็นยามเช้าบนลานจอด)'],
    ]),

    // Set 20 Part 3 Graphics (Convs 11, 12, 13)
    p3(20, 'l20-p3-11', [
      ['Man', 'us_m2', 'Hi, Ms. Chen—let’s check our PacificGate Port Tracker to see when your medical glassware containers can leave Pier 7.'],
      ['Woman', 'ca_f', 'Great—we’re shipping under vessel SeaHorizon, right? Last night’s alert showed an agricultural wood-pallet hold on us.'],
      ['Man', 'us_m2', 'Wait—refreshing the live feed right now: Customs just cleared SeaHorizon thirty minutes ago after verifying the heat-treatment stamp!'],
      ['Woman', 'ca_f', 'Wonderful! If we get our three free calendar storage days starting from discharge today, Tuesday, what’s our very last day to haul containers without paying storage penalties?'],
    ], doc('table', 'PacificGate Port — Pier 7 Container & Hold Tracker', [['Terminal', 'Deepwater Berth 7']], [
      tbl(
        ['Vessel Name', 'Discharge Date', 'Inspection Status', 'Free Storage Window'],
        [
          ['MV PacificDawn', 'Monday, Nov 11', 'Cleared · Ready', '3 Calendar Days (Ends Thu)'],
          ['MV SeaHorizon', 'Tuesday, Nov 12', 'Agricultural Hold (Updating)', '3 Calendar Days'],
          ['MV CoralWave', 'Tuesday, Nov 12', 'X-Ray Screening Hold', '4 Calendar Days'],
          ['MV HorizonStar', 'Wednesday, Nov 13', 'Pending Berth Arrival', '3 Calendar Days'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Which vessel’s cargo belongs to Ms. Chen’s medical glassware firm?', ['MV SeaHorizon', 'MV PacificDawn', 'MV CoralWave', 'MV HorizonStar'], 0, 'ตอบ MV SeaHorizon (ผู้หญิงถามยืนยันชื่อเรือ SeaHorizon ที่มีแจ้งเตือนกักตรวจพาเลตไม้เมื่อคืน)'],
      ['Part 3 · Graphic', 'Counting the three-day free window from discharge on Tuesday, Nov 12, when is the final penalty-free pickup day?', ['Friday, Nov 15', 'Thursday, Nov 14', 'Wednesday, Nov 13', 'Saturday, Nov 16'], 0, 'ตอบ Friday, Nov 15 (ตัวอย่างเรือวันจันทร์สิ้นสุดพฤหัส บวก 3 วันปฏิทิน ดังนั้นเรือวันอังคารที่ 12 พ.ย. จึงรับฟรีได้ถึงวันศุกร์ที่ 15 พ.ย.)'],
      ['Part 3 · Detail', 'Why did customs lift the agricultural hold thirty minutes ago?', ['Inspectors confirmed the wooden pallets carried valid heat-treatment marks', 'Ms. Chen submitted new commercial invoices for medical glassware', 'Port workers transferred the glassware onto clean plastic skids', 'Storage penalties forced automatic morning clearance'], 0, 'ตอบ Inspectors confirmed the wooden pallets carried valid heat-treatment marks (เจ้าหน้าที่ตรวจสอบตราประทับการอบความร้อนพาเลตไม้ถูกต้องแล้วจึงปล่อยผ่าน)'],
    ]),

    p3(20, 'l20-p3-12', [
      ['Woman', 'uk_f', 'Attention SkyHub night shift! Scale calibration just failed on Express Chute Two, so technicians locked down that line until three A.M.'],
      ['Man', 'au_m', 'Wait—we’ve got eighty chilled vaccine totes arriving on Flight 704 that normally feed straight down Express Chute Two!'],
      ['Woman', 'uk_f', 'Check the Hangar B Sortation Map: Chute One handles heavy machinery only, whereas Chute Three handles refrigerated pharmaceuticals directly into the tarmac cooler!'],
      ['Man', 'au_m', 'Perfect—I’ll redirect the Flight 704 tug driver to unload straight onto Chute Three right now.'],
    ], doc('map', 'SkyHub Air Cargo — Night Sortation Conveyor Zones', [['Shift', '11:00 P.M.–5:00 A.M.']], [
      box('Terminal Hangar B Conveyor Chutes', [
        'Chute 1 · Heavy Industrial Crate Line (No Cold Storage Link)',
        'Chute 2 · Express Pharma & Priority Bio-Totes (Automated Weigh Scale)',
        'Chute 3 · Backup Perishable & Medical Cooler Link (Manual Weigh Pad)',
        'Chute 4 · Oversized Machinery & Livestock Ramp (Exterior Gate)',
      ]),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Where will the Flight 704 vaccine totes be routed tonight?', ['Chute 3', 'Chute 1', 'Chute 2', 'Chute 4'], 0, 'ตอบ Chute 3 (Chute 2 เครื่องชั่งเสียจนถึงตี 3 จึงเปลี่ยนไปใช้ Chute 3 ที่เชื่อมห้องเย็นการแพทย์ได้เช่นกัน)'],
      ['Part 3 · Reason', 'Why is Chute 2 temporarily unusable?', ['Its automated weighing equipment malfunctioned', 'Flight 704 vaccines exceeded belt temperature limits', 'Technicians are cleaning heavy industrial grease off Chute 2', 'Exterior gates beside Chute 2 locked at eleven P.M.'], 0, 'ตอบ Its automated weighing equipment malfunctioned (ระบบปรับเทียบเครื่องชั่งน้ำหนักอัตโนมัติของ Chute 2 ขัดข้อง)'],
      ['Part 3 · Detail', 'How many vaccine totes are arriving aboard Flight 704?', ['Eighty', 'Forty', 'Twenty', 'Seventy'], 0, 'ตอบ Eighty (ผู้ชายระบุว่ามีกล่องวัคซีนแช่เย็นจำนวน 80 ใบ — eighty chilled vaccine totes)'],
    ]),

    p3(20, 'l20-p3-13', [
      ['Man', 'ca_m', 'Hi Nora—my optical lens factory needs to move a 420-kilogram crate from Busan to Los Angeles quickly, and our freight budget caps strictly at two thousand eight hundred dollars.'],
      ['Woman', 'us_f2', 'Looking at our Meridian Brokerage options—first cross out Sea-Air Hybrid via Seattle, because port dredging there closed barge transfers through next Wednesday!'],
      ['Man', 'ca_m', 'Good thing you told me! Express Air Direct blows right past our budget cap too, unfortunately.'],
      ['Woman', 'us_f2', 'In that case, Economy Deferred Air delivers in under a week while staying comfortably beneath your two-thousand-eight-hundred limit—let’s lock in space on tomorrow’s freighter!'],
    ], doc('table', 'Meridian Freight Brokerage — Busan to Los Angeles Options (420 kg)', [['Quote Basis', 'Door-to-Port All-In']], [
      tbl(
        ['Shipping Tier', 'Estimated Transit', 'Total Quote (420 kg)', 'Route Notes'],
        [
          ['Express Air Direct', '2 Days', '$3,650', 'Nonstop Widebody Freighter'],
          ['Economy Deferred Air', '5 Days', '$2,590', '1-Stop Cargo Hub Transfer'],
          ['Sea-Air Hybrid (Seattle)', '11 Days', '$1,980', 'Fast Feeder + Rail / Air'],
          ['Standard Ocean LCL', '21 Days', '$840', 'Consolidated Container'],
        ]
      ),
    ]), [
      ['Part 3 · Graphic', 'Look at the graphic. Why is the Sea-Air Hybrid option unavailable for this shipment?', ['Harbor dredging paused Seattle barge transfers temporarily', 'Its eleven-day transit violates air cargo rules for glass lenses', 'A 420-kilogram crate exceeds feeder rail weight limits', 'Its $1,980 quote excludes customs brokerage fees'], 0, 'ตอบ Harbor dredging paused Seattle barge transfers temporarily (การขุดลอกร่องน้ำที่ซีแอตเทิลทำให้ปิดถ่ายลำเรือบาร์จจนถึงพุธหน้า)'],
      ['Part 3 · Graphic', 'Which shipping tier will the optical factory book?', ['Economy Deferred Air ($2,590)', 'Express Air Direct ($3,650)', 'Sea-Air Hybrid ($1,980)', 'Standard Ocean LCL ($840)'], 0, 'ตอบ Economy Deferred Air ($2,590) (Express เกินงบ $2,800 และ Sea-Air ปิดซ่อมร่องน้ำ จึงเลือก Economy Deferred Air ที่เร็ว 5 วันและอยู่ในงบ)'],
      ['Part 3 · Detail', 'When does the chosen cargo flight depart?', ['Tomorrow', 'Next Wednesday', 'In five days', 'Tonight'], 0, 'ตอบ Tomorrow (ผู้หญิงสรุปว่าให้จองพื้นที่บนเครื่องบินขนส่งสินค้าเที่ยววันพรุ่งนี้)'],
    ]),

    // Set 20 Part 4 (10 Talks × 3 Qs = 30 Qs; Talks 8-10 include Graphics)
    p4(20, 'l20-p4-1', 'the following recorded port dispatch announcement', 'us_m',
      'Attention commercial drayage drivers calling PacificPort Authority. Effective six A.M. Wednesday, Inbound Truck Lane Four is closed for forty-eight hours while concrete sensors are replaced. All container pickups scheduled at Terminal East must pull into Lane Two using your smartphone QR appointment pass—printed paper passes will no longer open automated barrier arms. For empty container return slots or chassis yard inquiries, press five for port operations dispatch.',
      null, [
        ['Part 4 · Purpose', 'What change takes effect at PacificPort Authority on Wednesday morning?', ['Inbound Truck Lane Four closes temporarily for sensor work', 'Printed paper passes replace mobile QR gate codes', 'Terminal East shuts down all empty container returns', 'Concrete barriers remove automated entry gates'], 0, 'ตอบ Inbound Truck Lane Four closes temporarily for sensor work (ช่องรถบรรทุกขาเข้าหมายเลข 4 ปิดซ่อมบำรุงเซนเซอร์พื้นคอนกรีต 48 ชั่วโมง)'],
        ['Part 4 · Rule', 'What must drivers show at Lane Two to raise the entry gate?', ['An electronic QR pass on a smartphone', 'A printed paper pickup confirmation slip', 'A chassis yard inspection card', 'Manual approval from Terminal East staff'], 0, 'ตอบ An electronic QR pass on a smartphone (ต้องใช้รหัส QR นัดหมายบนสมาร์ตโฟนเท่านั้น ระบบไม่รับใบกระดาษแล้ว)'],
        ['Part 4 · Action', 'Why would a caller press button five?', ['To ask about returning empty containers or trailer chassis', 'To report broken sensors along Inbound Lane Four', 'To print replacement smartphone QR gate passes', 'To delay Terminal East pickups by forty-eight hours'], 0, 'ตอบ To ask about returning empty containers or trailer chassis (กด 5 เพื่อสอบถามช่องคืนตู้เปล่าหรือลานหางลาก)'],
      ]),

    p4(20, 'l20-p4-2', 'the following cargo crew shift briefing', 'uk_f',
      'Evening, air-terminal sort team! Tonight’s widebody flight to Frankfurt carries twelve pallets of hospital MRI calibration magnets, so pay extra attention to our magnetic-shielded cargo placards. Before loading Unit Load Device Seven onto the scale, confirm green compass-safe stickers appear on all four corners—unshielded magnets interfere with cockpit navigation instruments! Also keep heavy steel machinery boxes on lower floor positions so aircraft weight balance stays exact.',
      null, [
        ['Part 4 · Audience', 'Who is listening to this safety briefing?', ['Cargo handlers loading an international freighter', 'Hospital technicians calibrating MRI scanners', 'Flight pilots checking cockpit navigation meters', 'Customs officers inspecting Frankfurt imports'], 0, 'ตอบ Cargo handlers loading an international freighter (ทีมคัดแยกและโหลดสินค้าขึ้นเครื่องบินขนส่งไปแฟรงก์เฟิร์ต)'],
        ['Part 4 · Reason', 'Why must workers verify green compass-safe labels on every corner?', ['Unshielded magnets can disrupt aircraft navigation gear', 'Customs authorities in Frankfurt reject unstickered crates', 'Green stickers indicate pallets passed scale calibration', 'MRI magnets overheat without exterior foil shields'], 0, 'ตอบ Unshielded magnets can disrupt aircraft navigation gear (แม่เหล็กที่ไม่หุ้มฉนวนกันสนามแม่เหล็กอาจรบกวนอุปกรณ์นำร่องในห้องนักบิน)'],
        ['Part 4 · Rule', 'Where should heavy machinery crates be positioned aboard the aircraft?', ['On lower cargo deck positions', 'Inside Unit Load Device Seven', 'Adjacent to cockpit bulkheads', 'Behind passenger luggage carts'], 0, 'ตอบ On lower cargo deck positions (ให้วางกล่องเครื่องจักรหนักไว้ตำแหน่งพื้นล่างเพื่อรักษาสมดุลน้ำหนักเครื่องบิน)'],
      ]),

    p4(20, 'l20-p4-3', 'the following freight webinar excerpt', 'ca_m',
      'Welcome to GlobalBridge Brokerage’s quarterly trade clinic! Today let’s clarify one costly mistake importers keep making under FOB port contracts. Under Free On Board terms, the overseas factory handles export customs and loading onto the ocean ship, meaning legal cargo risk passes straight to you the instant that container clears the ship’s rail! Never skip buying independent marine transit insurance assuming the factory’s policy still protects ocean crossings.',
      null, [
        ['Part 4 · Topic', 'What misunderstanding does the speaker clarify for importers?', ['Who bears shipping risk during ocean crossings under FOB terms', 'How overseas factories file export customs clearances', 'Why container vessels refuse independent marine insurance', 'When freight brokers adjust quarterly port tariffs'], 0, 'ตอบ Who bears shipping risk during ocean crossings under FOB terms (ชี้แจงความเข้าใจผิดเรื่องจุดโอนความรับผิดชอบความเสี่ยงสินค้าในสัญญา FOB)'],
        ['Part 4 · Detail', 'When does risk transfer to the buyer under Free On Board agreements?', ['As soon as cargo is loaded onto the ocean vessel', 'Once containers clear destination customs gates', 'Before the factory packs goods for port trucking', 'Only after independent marine insurers sign policies'], 0, 'ตอบ As soon as cargo is loaded onto the ocean vessel (ความรับผิดชอบทางกฎหมายโอนมายังผู้ซื้อทันทีที่ตู้คอนเทนเนอร์ถูกยกขึ้นพาดกราบเรือ)'],
        ['Part 4 · Recommendation', 'What should importing companies avoid neglecting?', ['Purchasing their own ocean transit insurance coverage', 'Asking overseas factories to arrange local unloading', 'Paying port customs fees before ships depart', 'Verifying container weights at departure docks'], 0, 'ตอบ Purchasing their own ocean transit insurance coverage (แนะนำว่าอย่าละเลยการซื้อประกันภัยขนส่งทางเรือเองโดยคิดว่าประกันของผู้ผลิตยังคุ้มครอง)'],
      ]),

    p4(20, 'l20-p4-4', 'the following voicemail message', 'au_f',
      'Hi Marcus, this is Rachel at CrestLine Customs Brokerage calling at eleven-thirty Thursday. Your company’s refrigerated shipment of Swiss pharmaceutical vials just docked at Pier Two, and electronic customs clearance looks ready except for one missing page—the original chamber-of-commerce certificate of origin. Please email a crisp color scan to our compliance desk before three P.M. sharp so inspectors release your pallets before weekend port surcharges begin.',
      null, [
        ['Part 4 · Purpose', 'Why is Rachel calling Marcus?', ['To request a missing origin document needed to clear imported medicine', 'To report delayed arrival of a vessel carrying Swiss vials', 'To confirm weekend port surcharges were waived at Pier Two', 'To notify Marcus that refrigerated pallets already left the pier'], 0, 'ตอบ To request a missing origin document needed to clear imported medicine (ขอเอกสารรับรองแหล่งกำเนิดสินค้าตัวจริงที่ยังขาดอยู่เพื่อทำเรื่องปล่อยยาจากศุลกากร)'],
        ['Part 4 · Action', 'What should Marcus send before 3:00 P.M.?', ['A color digital scan of the certificate of origin', 'The paper customs clearance receipt from Switzerland', 'Payment for weekend Pier Two cold storage fees', 'Temperature logs covering the ocean voyage'], 0, 'ตอบ A color digital scan of the certificate of origin (ให้ส่งไฟล์สแกนสีของใบรับรองแหล่งกำเนิดสินค้าไปยังแผนกกำกับดูแลก่อนบ่ายสามตรง)'],
        ['Part 4 · Consequence', 'What happens if the shipment misses today’s afternoon release?', ['The company will face extra weekend terminal fees', 'Pharmaceutical vials will be returned to Switzerland', 'Pier Two inspectors will destroy uncertified pallets', 'Customs brokers will double Monday service rates'], 0, 'ตอบ The company will face extra weekend terminal fees (หากปล่อยไม่ทันก่อนบ่ายสามจะต้องเสียค่าธรรมเนียมท่าเรือช่วงสุดสัปดาห์)'],
      ]),

    p4(20, 'l20-p4-5', 'the following customs inspector orientation', 'uk_m',
      'Welcome aboard Harbor Customs Team, new inspection officers! Before shadowing senior agents along Berth Nine this afternoon, remember our strict bolt-seal verification protocol. Always photograph the steel container seal number alongside the vessel manifest BEFORE snapping it open with bolt cutters. Should any seal digit fail to match, stop immediately, place yellow tamper tape across the door hasp, and summon your terminal supervisor before touching cargo.',
      null, [
        ['Part 4 · Audience', 'Who is the speaker training?', ['Newly hired port customs inspection officers', 'Container vessel captains docking at Berth Nine', 'Truck drivers transporting bonded harbor goods', 'Manufacturing workers attaching steel bolt seals'], 0, 'ตอบ Newly hired port customs inspection officers (กำลังปฐมนิเทศเจ้าหน้าที่ตรวจสอบศุลกากรที่เข้าใหม่)'],
        ['Part 4 · Rule', 'What must officers do prior to cutting a steel container seal?', ['Photograph the seal ID next to the shipping manifest', 'Attach yellow tamper tape along both container doors', 'Notify the vessel captain at Berth Nine', 'Weigh the container cargo against manifest totals'], 0, 'ตอบ Photograph the seal ID next to the shipping manifest (ต้องถ่ายภาพเลขซีลเหล็กคู่กับใบสำแดงสินค้าก่อนใช้คีมตัดซีลเสมอ)'],
        ['Part 4 · Action', 'What should an officer do if a seal number differs from paperwork?', ['Seal the doors with yellow tape and alert a supervisor', 'Open the container carefully to count internal cartons', 'Ask the truck driver to sign a discrepancy note', 'Replace the mismatched bolt with a standard padlock'], 0, 'ตอบ Seal the doors with yellow tape and alert a supervisor (หยุดทันที ติดเทปสีเหลืองขวางสลักประตู และเรียกหัวหน้าเวรมาดูห้ามแตะต้องสินค้า)'],
      ]),

    p4(20, 'l20-p4-6', 'the following cargo terminal announcement', 'us_f',
      'Attention all AeroSort Terminal hangar personnel. Starting at two P.M. sharp, facility safety engineers will conduct a twenty-minute fire-door drop test across Bay Five sorting conveyors. Please pause conveyor lines leading into Bay Five five minutes beforehand so incoming express parcels do not jam against lowered steel shutters. Adjacent loading gates at Bays Four and Six will stay completely open throughout the drill.',
      null, [
        ['Part 4 · Purpose', 'What is the purpose of this terminal announcement?', ['To warn sorting staff to halt Bay Five belts ahead of a safety test', 'To announce an unexpected power outage across AeroSort hangars', 'To relocate express flights from Bay Five to Bay Four', 'To instruct crews on resetting jammed steel shutters'], 0, 'ตอบ To warn sorting staff to halt Bay Five belts ahead of a safety test (เตือนพนักงานให้หยุดสายพานเข้าสู่ Bay Five ล่วงหน้าก่อนทดสอบประตูกันไฟ 20 นาทีตอนบ่ายสอง)'],
        ['Part 4 · Detail', 'When should workers stop conveyors feeding into Bay Five?', ['At 1:55 P.M.', 'At 2:00 P.M.', 'At 2:20 P.M.', 'At 1:40 P.M.'], 0, 'ตอบ At 1:55 P.M. (การทดสอบเริ่ม 14:00 น. และสั่งให้หยุดสายพานล่วงหน้า 5 นาที = 13:55 น.)'],
        ['Part 4 · Detail', 'Which nearby bays remain unaffected during the test?', ['Bays Four and Six', 'Bays Two and Five', 'Bays One and Three', 'All exterior tarmac bays'], 0, 'ตอบ Bays Four and Six (ประกาศระบุว่าประตูโหลดข้างเคียงที่ Bay Four และ Bay Six ยังเปิดใช้งานได้ตามปกติ)'],
      ]),

    p4(20, 'l20-p4-7', 'the following conference speaker introduction', 'ca_f',
      'Please join me in welcoming tonight’s Global Logistics Forum keynote speaker, Henrik Lindholm, Chief Operations Director at Nordic Maritime Freight. Over the past fourteen years, Henrik redesigned automated customs data exchanges linking thirty-two European and Asian deepwater ports, slashing average ship dwell times by nearly thirty hours per call! Tonight, he will share how small freight brokerages can adopt affordable digital pre-clearance workflows.',
      null, [
        ['Part 4 · Detail', 'What major achievement is credited to Henrik Lindholm?', ['Creating automated port data links that shortened vessel wait times', 'Operating thirty-two container ships across Asia and Europe', 'Writing European maritime laws for small freight brokerages', 'Designing deeper dock berths for Nordic container terminals'], 0, 'ตอบ Creating automated port data links that shortened vessel wait times (วางระบบแลกเปลี่ยนข้อมูลศุลกากรอัตโนมัติเชื่อมท่าเรือ 32 แห่ง ช่วยลดเวลาจอดรอได้เกือบ 30 ชั่วโมง)'],
        ['Part 4 · Detail', 'How many ports were connected through Henrik’s customs network?', ['Thirty-two', 'Fourteen', 'Thirty', 'Twenty'], 0, 'ตอบ Thirty-two (ระบุจำนวน thirty-two European and Asian deepwater ports)'],
        ['Part 4 · Topic', 'What will Henrik discuss during his presentation tonight?', ['Cost-effective digital customs preparation for smaller brokers', 'Reducing fuel consumption across Nordic container vessels', 'Expanding Asian deepwater ports over the next fourteen years', 'Hiring maritime operations directors for European hubs'], 0, 'ตอบ Cost-effective digital customs preparation for smaller brokers (แนะนำวิธีที่บริษัทนายหน้าขนาดเล็กสามารถนำระบบตรวจปล่อยล่วงหน้าแบบดิจิทัลราคาประหยัดมาใช้)'],
      ]),

    // Set 20 Part 4 Graphics (Talks 8, 9, 10)
    p4(20, 'l20-p4-8', 'the following customs billing update and fee table', 'uk_f2',
      'Hi team, quick accounting note regarding Harbor Customs Office inspection charges on Container 882. Looking at our West Terminal Fee Schedule, you noticed we budgeted for the standard X-ray drive-through scan yesterday. Unfortunately, inspectors spotted unlabeled solvent cans behind the spare tires, escalating the hold straight to a Level Three Physical Devanning check! Remember, physical devanning includes the entire unloading labor rate rather than replacing the initial X-ray fee—please adjust client billing accordingly.',
      doc('table', 'Harbor Customs Office — West Terminal Inspection Fees', [['Port', 'West Container Terminal']], [
        tbl(
          ['Inspection Level', 'Procedure Description', 'Terminal Fee', 'Typical Delay'],
          [
            ['Level 1 · Document Audit', 'Electronic Manifest Verification', '$95', '2–4 Hours'],
            ['Level 2 · X-Ray Drive-Through', 'Non-Intrusive Scanner Gate', '$260', '6 Hours'],
            ['Level 3 · Physical Devanning', 'Full Container Unload & Inspection', '$980', '2–3 Days'],
            ['Level 4 · Lab Hazard Sample', 'Chemical Purity & Hazmat Assay', '$1,450', '5 Days'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. What triggered the upgrade from Level 2 to Level 3 inspection?', ['Inspectors detected unmarked chemical cans hidden inside the container', 'Electronic manifest verification failed within two hours', 'X-ray drive-through gates experienced a six-hour maintenance delay', 'Clients requested priority lab hazard purity testing'], 0, 'ตอบ Inspectors detected unmarked chemical cans hidden inside the container (เจ้าหน้าที่พบกระป๋องตัวทำละลายที่ไม่ติดฉลากซ่อนอยู่หลังยางอะไหล่)'],
        ['Part 4 · Graphic', 'How much total customs inspection charge must the client now be billed for Level 2 plus Level 3?', ['$1,240', '$980', '$260', '$1,545'], 0, 'ตอบ $1,240 (Level 3 ไม่ได้มาแทนค่าเอกซเรย์เดิม แต่คิดรวมกัน คือ $260 ของ Level 2 + $980 ของ Level 3 = $1,240)'],
        ['Part 4 · Detail', 'How long does a Level 3 inspection typically delay container release?', ['Two to three days', 'Six hours', 'Five days', 'Two to four hours'], 0, 'ตอบ Two to three days (ตารางระบุ Typical Delay ของ Level 3 คือ 2–3 วัน)'],
      ]),

    p4(20, 'l20-p4-9', 'the following air terminal cutoff notice and list', 'au_m',
      'Attention international freight forwarders using Cargo Concourse East! Because airport paving crews are resurfacing Taxiway Alpha nightly all this month, widebody aircraft departure gates shifted ten minutes farther down the tarmac. Consequently, effective tonight, the cut-off time for Perishable Fresh Produce moves forty-five minutes earlier to nine P.M. sharp, giving ramp tractors extra towing time. All other freight classes retain their printed cut-off hours unchanged.',
      doc('list', 'AeroSort Terminal — International Freight Cut-Off Schedule', [['Hub', 'Cargo Concourse East']], [
        lst([
          'Express Courier Parcels (Under 30 kg) — Final Tender: 10:30 P.M.',
          'Perishable Fresh Produce & Cut Flowers — Final Tender: 9:45 P.M.',
          'Pharmaceutical Cold-Chain Totes — Final Tender: 9:15 P.M.',
          'General Industrial Machinery Crates — Final Tender: 8:00 P.M.',
        ]),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. What is the new final tender cut-off time for Perishable Fresh Produce?', ['9:00 P.M.', '9:45 P.M.', '9:15 P.M.', '10:30 P.M.'], 0, 'ตอบ 9:00 P.M. (เวลาเดิมในรายการคือ 9:45 P.M. และประกาศขยับเร็วขึ้น 45 นาทีเป็น 9:00 P.M. ตรง)'],
        ['Part 4 · Cause', 'Why did Cargo Concourse East move the perishable cut-off earlier?', ['Runway paving lengthened tractor towing routes to widebody gates', 'Pharmaceutical cold-chain totes filled available space', 'Customs inspectors shortened evening produce checks', 'Express courier parcels doubled night flight volume'], 0, 'ตอบ Runway paving lengthened tractor towing routes to widebody gates (งานลาดยาง Taxiway Alpha ทำให้ต้องใช้รถลากสินค้าไปหลุมจอดไกลขึ้น 10 นาที)'],
        ['Part 4 · Detail', 'Which cargo category has the earliest printed cut-off at 8:00 P.M.?', ['General Industrial Machinery Crates', 'Pharmaceutical Cold-Chain Totes', 'Express Courier Parcels', 'Perishable Fresh Produce'], 0, 'ตอบ General Industrial Machinery Crates (รายการสุดท้ายระบุ 8:00 P.M. และหมวดอื่นไม่เปลี่ยนแปลง)'],
      ]),

    p4(20, 'l20-p4-10', 'the following brokerage schedule update and table', 'us_m2',
      'Hi Maya, this is Tom at GlobalBridge Brokerage with an update on your weekly Busan-to-Long Beach electronics shipments. Check our Consolidation Sailing Table—notice Tuesday’s vessel Oceanic Express hit rough North Pacific swells, pushing its Long Beach arrival back two full days to November twentieth! Because your inland rail link to Dallas cannot wait past November nineteenth, let’s shift your three pallets forward onto Thursday’s faster Golden Dragon sailing, which still beats your Dallas train connection by one full day.',
      doc('table', 'GlobalBridge Brokerage — Busan to Long Beach Consolidation', [['Cargo', '3 Pallets Consumer Electronics']], [
        tbl(
          ['Sailing Code / Vessel', 'Busan Departure', 'Scheduled Port Arrival', 'Transit Speed'],
          [
            ['GB-401 · MV Oceanic Express', 'Tuesday, Nov 5', 'Monday, Nov 18', '13 Days'],
            ['GB-402 · MV Golden Dragon', 'Thursday, Nov 7', 'Monday, Nov 18', '11 Days'],
            ['GB-403 · MV Pacific Trader', 'Saturday, Nov 9', 'Friday, Nov 22', '13 Days'],
            ['GB-404 · MV Harbor Bridge', 'Monday, Nov 11', 'Monday, Nov 25', '14 Days'],
          ]
        ),
      ]), [
        ['Part 4 · Graphic', 'Look at the graphic. When is MV Oceanic Express now expected to arrive in Long Beach?', ['Wednesday, Nov 20', 'Monday, Nov 18', 'Tuesday, Nov 19', 'Friday, Nov 22'], 0, 'ตอบ Wednesday, Nov 20 (กำหนดเดิมคือจันทร์ที่ 18 พ.ย. แต่คลื่นลมแรงทำให้ล่าช้าไป 2 วันเต็ม เป็นวันที่ 20 พ.ย.)'],
        ['Part 4 · Graphic', 'Which sailing code will Tom use so the cargo catches the Dallas train?', ['GB-402 · MV Golden Dragon', 'GB-401 · MV Oceanic Express', 'GB-403 · MV Pacific Trader', 'GB-404 · MV Harbor Bridge'], 0, 'ตอบ GB-402 · MV Golden Dragon (เรือเร็ว 11 วันออกวันพฤหัสที่ 7 พ.ย. แต่ยังเข้าท่าจันทร์ที่ 18 พ.ย. ทันรถไฟไปดัลลัสวันที่ 19 พ.ย.)'],
        ['Part 4 · Detail', 'What is the final inland destination for Maya’s electronics?', ['Dallas', 'Busan', 'Long Beach', 'Seattle'], 0, 'ตอบ Dallas (รถไฟขนส่งภายในประเทศจะต่อไปยังเมือง Dallas)'],
      ]),
  ];
})();
if (typeof module !== 'undefined') module.exports = { TOEIC_LISTEN_VOL4: globalThis.TOEIC_LISTEN_VOLS[4] };
