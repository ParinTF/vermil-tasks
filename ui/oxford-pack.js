// Oxford 3000 Word Library (2,983 unique headwords across CEFR A1-B2 with part-of-speech tags).
// Card tuple: [word, thaiMeaning, exampleSentence, pos]
const OXFORD_PACKS = [
  {
    "id": "ox-a1-1",
    "label": "A1 Words · 1 (a–box)",
    "deck": "Oxford · A1 · 1",
    "cards": [
      [
        "a",
        "คำนำหน้านามไม่ชี้เฉพาะ, หนึ่ง, อันหนึ่ง",
        "She bought a fresh loaf of bread.",
        "art."
      ],
      [
        "about",
        "adv. ประมาณ, เกือบ; prep. เกี่ยวกับ, รอบๆ; adj. กำลังจะ, ตื่นตัว",
        "We talked about our summer travel plans.",
        "adv., prep., adj."
      ],
      [
        "above",
        "adv. ข้างบน, ด้านบน; prep. เหนือ, สูงกว่า",
        "A small lamp hangs above the desk.",
        "adv., prep."
      ],
      [
        "across",
        "adv. ข้ามไป, อีกฝั่ง; prep. ข้าม, ทั่วทั้ง",
        "They walked slowly across the old bridge.",
        "adv., prep."
      ],
      [
        "action",
        "การกระทำ, ฉากต่อสู้, การดำเนินการ",
        "We need quick action to fix this.",
        "n."
      ],
      [
        "activity",
        "กิจกรรม, การเคลื่อนไหว",
        "Swimming is my favourite weekend activity.",
        "n."
      ],
      [
        "actor",
        "นักแสดงชาย, นักแสดง",
        "That young actor won a big award.",
        "n."
      ],
      [
        "actress",
        "นักแสดงหญิง",
        "She became a famous movie actress.",
        "n."
      ],
      [
        "add",
        "เพิ่ม, บวก, เติม",
        "Please add some sugar to my tea.",
        "v."
      ],
      [
        "address",
        "n. ที่อยู่; v. จ่าหน้าซอง, กล่าวถึง",
        "Write your home address on this card.",
        "n., v."
      ],
      [
        "adult",
        "n. ผู้ใหญ่; adj. โตเต็มวัย, สำหรับผู้ใหญ่",
        "Each adult ticket costs ten dollars today.",
        "n., adj."
      ],
      [
        "advice",
        "คำแนะนำ, ข้อเสนอแนะ",
        "My teacher gave me some helpful advice.",
        "n."
      ],
      [
        "afraid",
        "กลัว, เกรง, ตกใจ",
        "Little children are often afraid of thunder.",
        "adj."
      ],
      [
        "after",
        "prep. หลัง, ถัดจาก; adv. ภายหลัง, หลังจากนั้น; conj. หลังจากที่",
        "Let's have coffee after the meeting.",
        "prep., adv., conj."
      ],
      [
        "afternoon",
        "ตอนบ่าย, ช่วงบ่าย",
        "We play tennis together every Friday afternoon.",
        "n."
      ],
      [
        "again",
        "อีกครั้ง, อีกที",
        "Please say your phone number again slowly.",
        "adv."
      ],
      [
        "age",
        "n. อายุ, ยุคสมัย; v. แก่ตัวลง, บ่ม",
        "Children start primary school at age six.",
        "n., v."
      ],
      [
        "ago",
        "ผ่านมาแล้ว, ที่แล้ว",
        "He moved to Bangkok three years ago.",
        "adv."
      ],
      [
        "agree",
        "เห็นด้วย, ตกลง, ยอมรับ",
        "Both sisters agree with the new plan.",
        "v."
      ],
      [
        "air",
        "อากาศ, บรรยากาศ",
        "Open the window for some fresh air.",
        "n."
      ],
      [
        "airport",
        "สนามบิน, ท่าอากาศยาน",
        "Our taxi arrived at the airport early.",
        "n."
      ],
      [
        "all",
        "det. ทั้งหมด, ทุก; pron. ทั้งหมด, ทุกคน; adv. ทั้งหมด, อย่างสิ้นเชิง",
        "All students must bring their notebooks tomorrow.",
        "det., pron., adv."
      ],
      [
        "also",
        "ด้วย, เช่นกัน, นอกจากนี้",
        "She speaks French and also knows Japanese.",
        "adv."
      ],
      [
        "always",
        "เสมอ, ตลอดเวลา",
        "My father always wakes up before sunrise.",
        "adv."
      ],
      [
        "amazing",
        "น่าทึ่ง, มหัศจรรย์, ยอดเยี่ยม",
        "We saw an amazing sunset by the sea.",
        "adj."
      ],
      [
        "an",
        "คำนำหน้านามไม่ชี้เฉพาะ, หนึ่ง, อันหนึ่ง",
        "He eats an orange after lunch every day.",
        "art."
      ],
      [
        "and",
        "และ, กับ",
        "I bought some milk and warm bread.",
        "conj."
      ],
      [
        "angry",
        "โกรธ, โมโห",
        "Our neighbour looked angry about the noise.",
        "adj."
      ],
      [
        "animal",
        "สัตว์",
        "Every wild animal needs food and water.",
        "n."
      ],
      [
        "another",
        "det. อีกอันหนึ่ง, อื่น; pron. อีกอัน, อีกคน",
        "Would you like another cup of tea?",
        "det., pron."
      ],
      [
        "answer",
        "n. คำตอบ; v. ตอบ, รับสาย",
        "Nobody knew the answer to that question.",
        "n., v."
      ],
      [
        "any",
        "det. ใดๆ, บ้าง; pron. อันใดก็ตาม, บ้าง; adv. เลย, บ้าง",
        "Do you have any questions about homework?",
        "det., pron., adv."
      ],
      [
        "anyone",
        "ใครก็ตาม, ใครบางคน, ใครสักคน",
        "Did anyone call while I was out?",
        "pron."
      ],
      [
        "anything",
        "อะไรก็ตาม, อะไรบางอย่าง, อะไรสักอย่าง",
        "You can order anything from the menu.",
        "pron."
      ],
      [
        "apartment",
        "อพาร์ตเมนต์, ห้องชุด",
        "They rent a bright apartment near work.",
        "n."
      ],
      [
        "apple",
        "แอปเปิล",
        "She put a red apple in her bag.",
        "n."
      ],
      [
        "April",
        "เดือนเมษายน",
        "Thai New Year takes place in April.",
        "n."
      ],
      [
        "area",
        "พื้นที่, บริเวณ, พื้นที่ตาราง",
        "This quiet area has many green parks.",
        "n."
      ],
      [
        "arm",
        "แขน",
        "She hurt her left arm playing tennis.",
        "n."
      ],
      [
        "around",
        "adv. รอบๆ, ประมาณ; prep. รอบ, แถวๆ",
        "Many nice cafes opened around the station.",
        "adv., prep."
      ],
      [
        "arrive",
        "มาถึง, ไปถึง",
        "Our morning train will arrive at nine.",
        "v."
      ],
      [
        "art",
        "ศิลปะ, งานศิลปะ",
        "She enjoys modern art at the museum.",
        "n."
      ],
      [
        "article",
        "บทความ, สิ่งของ",
        "I read an interesting article about sleep.",
        "n."
      ],
      [
        "artist",
        "ศิลปิน, จิตรกร",
        "A local artist painted this colourful wall.",
        "n."
      ],
      [
        "as",
        "prep. ในฐานะ, อย่างเช่น; adv. เท่ากัน; conj. ขณะที่, เพราะว่า, ตามที่",
        "She works as a nurse at night.",
        "prep., adv., conj."
      ],
      [
        "ask",
        "ถาม, ขอร้อง, ชวน",
        "Ask the driver where the bus stops.",
        "v."
      ],
      [
        "at",
        "ที่, ตอน, เมื่อ",
        "Meet me at the front gate at six.",
        "prep."
      ],
      [
        "August",
        "เดือนสิงหาคม",
        "Schools usually reopen after summer in August.",
        "n."
      ],
      [
        "aunt",
        "ป้า, น้าสาว, อาหญิง",
        "My aunt baked a lemon cake yesterday.",
        "n."
      ],
      [
        "autumn",
        "ฤดูใบไม้ร่วง",
        "Tree leaves turn bright orange in autumn.",
        "n."
      ],
      [
        "away",
        "ห่างออกไป, ไม่อยู่, ไปไกล",
        "Keep hot drinks away from small children.",
        "adv."
      ],
      [
        "baby",
        "ทารก, เด็กอ่อน",
        "The sleeping baby smiled in his crib.",
        "n."
      ],
      [
        "back",
        "adv. กลับ, ข้างหลัง; n. หลัง, ด้านหลัง; adj. ด้านหลัง, ย้อนหลัง; v. ถอยหลัง, สนับสนุน",
        "Please come back home before dark tonight.",
        "adv., n., adj., v."
      ],
      [
        "bad",
        "เลว, แย่, ไม่ดี, เสีย",
        "Eating too much sugar is bad for your teeth.",
        "adj."
      ],
      [
        "bag",
        "กระเป๋า, ถุง",
        "She packed warm clothes into one bag.",
        "n."
      ],
      [
        "ball",
        "ลูกบอล",
        "The boys kicked the ball across the yard.",
        "n."
      ],
      [
        "banana",
        "กล้วย",
        "A ripe banana makes a sweet snack.",
        "n."
      ],
      [
        "band",
        "วงดนตรี, แถบ, สายรัด",
        "Her brother plays drums in a band.",
        "n."
      ],
      [
        "bank",
        "ธนาคาร, ริมฝั่ง, ตลิ่ง",
        "I need to visit the bank today.",
        "n."
      ],
      [
        "bar",
        "n. บาร์, แท่ง, ลูกกรง; v. ขวางกั้น, ห้ามเข้า",
        "They met friends at a hotel bar.",
        "n., v."
      ],
      [
        "bath",
        "การอาบน้ำ, อ่างอาบน้ำ",
        "He takes a warm bath before bed.",
        "n."
      ],
      [
        "bathroom",
        "ห้องน้ำ",
        "The bathroom is down the hall on the left.",
        "n."
      ],
      [
        "be",
        "aux. v. เป็น, กำลัง, ถูก; v. เป็น, อยู่, คือ",
        "Be careful on those wet stairs outside.",
        "aux. v., v."
      ],
      [
        "beach",
        "ชายหาด",
        "We walked barefoot along the sandy beach.",
        "n."
      ],
      [
        "beautiful",
        "สวย, งดงาม",
        "Look at that beautiful garden behind the house.",
        "adj."
      ],
      [
        "because",
        "เพราะว่า, เนื่องจาก",
        "We stayed indoors because it rained heavily.",
        "conj."
      ],
      [
        "because of",
        "เพราะ, เนื่องจาก",
        "The flight was delayed because of thick fog.",
        "prep."
      ],
      [
        "become",
        "กลายเป็น, มาเป็น",
        "She hopes to become a good doctor.",
        "v."
      ],
      [
        "bed",
        "เตียง, เตียงนอน",
        "Go to bed early before your exam.",
        "n."
      ],
      [
        "bedroom",
        "ห้องนอน",
        "My bedroom window faces the quiet street.",
        "n."
      ],
      [
        "beer",
        "เบียร์",
        "He ordered a cold glass of beer.",
        "n."
      ],
      [
        "before",
        "prep. ก่อน, หน้า; adv. มาก่อน, ก่อนหน้านี้; conj. ก่อนที่จะ",
        "Wash your hands well before eating dinner.",
        "prep., adv., conj."
      ],
      [
        "begin",
        "เริ่ม, เริ่มต้น",
        "Let's begin the lesson on page five.",
        "v."
      ],
      [
        "beginning",
        "จุดเริ่มต้น, ตอนต้น",
        "The beginning of the film was exciting.",
        "n."
      ],
      [
        "behind",
        "adv. ข้างหลัง, ตามหลัง; prep. หลัง, ด้านหลัง",
        "A yellow bike was parked behind the shop.",
        "adv., prep."
      ],
      [
        "believe",
        "เชื่อ, เชื่อถือ",
        "I believe your story is completely true.",
        "v."
      ],
      [
        "below",
        "adv. ข้างล่าง, ด้านล่าง; prep. ต่ำกว่า, ใต้",
        "Write your full name below the line.",
        "adv., prep."
      ],
      [
        "best",
        "adj. ดีที่สุด; adv. ดีที่สุด, มากที่สุด; n. สิ่งที่ดีที่สุด",
        "This bakery makes the best bread in town.",
        "adj., adv., n."
      ],
      [
        "better",
        "adj. ดีกว่า; adv. ดีกว่าเดิม, มากขึ้น; n. สิ่งที่ดีกว่า",
        "My sore throat feels much better today.",
        "adj., adv., n."
      ],
      [
        "between",
        "prep. ระหว่าง; adv. ในระหว่าง, คั่นกลาง",
        "The cafe sits between two big shops.",
        "prep., adv."
      ],
      [
        "bicycle",
        "รถจักรยาน",
        "She rides her blue bicycle to school.",
        "n."
      ],
      [
        "big",
        "ใหญ่, โต",
        "They moved into a big wooden house.",
        "adj."
      ],
      [
        "bike",
        "จักรยาน, รถจักรยานยนต์",
        "Lock your bike outside the library door.",
        "n."
      ],
      [
        "bill",
        "n. ใบแจ้งหนี้, ธนบัตร, จะงอยปาก; v. เรียกเก็บเงิน",
        "Could we have the bill, please?",
        "n., v."
      ],
      [
        "bird",
        "นก",
        "A small bird sang on the branch.",
        "n."
      ],
      [
        "birthday",
        "วันเกิด",
        "Happy birthday to my dearest best friend!",
        "n."
      ],
      [
        "black",
        "adj. สีดำ, มืด; n. สีดำ",
        "He always wears a clean black jacket.",
        "adj., n."
      ],
      [
        "blog",
        "บล็อก, เว็บบล็อก",
        "She writes a travel blog every week.",
        "n."
      ],
      [
        "blonde",
        "ผมสีบลอนด์, สีทองอ่อน",
        "The girl with blonde hair smiled warmly.",
        "adj."
      ],
      [
        "blue",
        "adj. สีฟ้า, สีน้ำเงิน, เศร้า; n. สีฟ้า, สีน้ำเงิน",
        "The clear sky looked bright blue today.",
        "adj., n."
      ],
      [
        "boat",
        "เรือ",
        "We crossed the river in a boat.",
        "n."
      ],
      [
        "body",
        "ร่างกาย, ลำตัว",
        "Regular exercise keeps your body strong.",
        "n."
      ],
      [
        "book",
        "n. หนังสือ; v. จอง, ลงทะเบียน",
        "I borrowed a thick book from the library.",
        "n., v."
      ],
      [
        "boot",
        "รองเท้าบูต, ท้ายรถ",
        "He found his missing left boot outside.",
        "n."
      ],
      [
        "bored",
        "เบื่อ, รู้สึกเบื่อ",
        "The children grew bored during the wait.",
        "adj."
      ],
      [
        "boring",
        "น่าเบื่อ",
        "Nobody wanted to watch that boring movie.",
        "adj."
      ],
      [
        "born",
        "เกิด, คลอด",
        "My younger sister was born in May.",
        "v."
      ],
      [
        "both",
        "det. ทั้งสอง; pron. ทั้งคู่, ทั้งสองอย่าง",
        "Both brothers work at the same hospital.",
        "det., pron."
      ],
      [
        "bottle",
        "ขวด",
        "Bring a water bottle for the hike.",
        "n."
      ],
      [
        "box",
        "กล่อง",
        "We packed old photos inside a box.",
        "n."
      ]
    ]
  },
  {
    "id": "ox-a1-2",
    "label": "A1 Words · 2 (boy–desk)",
    "deck": "Oxford · A1 · 2",
    "cards": [
      [
        "boy",
        "เด็กชาย, เด็กผู้ชาย",
        "A young boy fed the hungry ducks.",
        "n."
      ],
      [
        "boyfriend",
        "แฟนหนุ่ม, คนรักชาย",
        "She cooked dinner for her boyfriend last night.",
        "n."
      ],
      [
        "bread",
        "ขนมปัง",
        "Warm bread smells wonderful in the morning.",
        "n."
      ],
      [
        "break",
        "n. ช่วงพัก, รอยแตก; v. ทำแตก, พัง, พักผ่อน",
        "Let's take a short coffee break.",
        "n., v."
      ],
      [
        "breakfast",
        "อาหารเช้า",
        "I eat eggs and toast for breakfast.",
        "n."
      ],
      [
        "bring",
        "นำมา, พามา",
        "Please bring your passport to the counter.",
        "v."
      ],
      [
        "brother",
        "พี่ชาย, น้องชาย",
        "My older brother lives near the beach.",
        "n."
      ],
      [
        "brown",
        "adj. สีน้ำตาล; n. สีน้ำตาล",
        "A brown dog slept under the table.",
        "adj., n."
      ],
      [
        "build",
        "สร้าง, ก่อสร้าง",
        "They plan to build a wooden bridge.",
        "v."
      ],
      [
        "building",
        "อาคาร, ตึก",
        "That tall building has twenty modern offices.",
        "n."
      ],
      [
        "bus",
        "รถโดยสารประจำทาง, รถบัส",
        "We missed the last bus home yesterday.",
        "n."
      ],
      [
        "business",
        "ธุรกิจ, กิจการ, ธุระ",
        "Her family runs a small flower business.",
        "n."
      ],
      [
        "busy",
        "ยุ่ง, ไม่ว่าง, พลุกพล่าน",
        "The downtown market gets busy on Saturdays.",
        "adj."
      ],
      [
        "but",
        "conj. แต่, ทว่า; prep. ยกเว้น, นอกจาก",
        "I wanted to stay, but time ran out.",
        "conj., prep."
      ],
      [
        "butter",
        "เนย",
        "Spread soft butter onto the hot toast.",
        "n."
      ],
      [
        "buy",
        "ซื้อ",
        "Where did you buy those nice shoes?",
        "v."
      ],
      [
        "by",
        "prep. โดย, ข้างๆ, ภายในเวลา; adv. ผ่านไป, อยู่ใกล้ๆ",
        "She goes to work by train every day.",
        "prep., adv."
      ],
      [
        "bye",
        "ลาก่อน, บ๊ายบาย",
        "Bye, see you again tomorrow morning!",
        "excl."
      ],
      [
        "cafe",
        "ร้านกาแฟ, คาเฟ่",
        "Let's meet at the corner cafe.",
        "n."
      ],
      [
        "cake",
        "เค้ก, ขนมเค้ก",
        "She baked a sweet chocolate birthday cake.",
        "n."
      ],
      [
        "call",
        "n. การโทรศัพท์, เสียงเรียก; v. โทรหา, เรียก, ตั้งชื่อ",
        "Please call me when you get home.",
        "n., v."
      ],
      [
        "camera",
        "กล้องถ่ายรูป, กล้อง",
        "Pack your camera for our mountain trip.",
        "n."
      ],
      [
        "can",
        "modal v. สามารถ, ได้; n. กระป๋อง",
        "Can you help me carry this box?",
        "modal v., n."
      ],
      [
        "cannot",
        "ไม่สามารถ, ไม่ได้",
        "I cannot open this jar without help.",
        "modal v."
      ],
      [
        "capital",
        "adj. ตัวพิมพ์ใหญ่, สำคัญยิ่ง; n. เมืองหลวง, เงินทุน",
        "Bangkok is the busy capital of Thailand.",
        "adj., n."
      ],
      [
        "car",
        "รถยนต์",
        "My uncle drives a silver electric car.",
        "n."
      ],
      [
        "card",
        "บัตร, การ์ด, ไพ่",
        "He paid for lunch by credit card.",
        "n."
      ],
      [
        "career",
        "อาชีพ, เส้นทางอาชีพ",
        "She started a teaching career last year.",
        "n."
      ],
      [
        "carrot",
        "แคร์รอต, หัวแคร์รอต",
        "Add a sliced carrot to the vegetable soup.",
        "n."
      ],
      [
        "carry",
        "ถือ, แบก, พกพา",
        "Help me carry these heavy shopping bags.",
        "v."
      ],
      [
        "cat",
        "แมว",
        "Our lazy cat naps on the sofa.",
        "n."
      ],
      [
        "cent",
        "เซนต์, หน่วยเงินย่อย",
        "This shiny coin is worth one cent.",
        "n."
      ],
      [
        "centre",
        "n. ศูนย์กลาง, ใจกลาง; v. รวมศูนย์, จัดให้อยู่ตรงกลาง",
        "The old clock stands in the city centre.",
        "n., v."
      ],
      [
        "century",
        "ศตวรรษ, รอบร้อยปี",
        "This stone temple is a century old.",
        "n."
      ],
      [
        "chair",
        "n. เก้าอี้, ประธาน; v. เป็นประธานการประชุม",
        "Please pull up a chair and sit down.",
        "n., v."
      ],
      [
        "change",
        "n. การเปลี่ยนแปลง, เงินทอน; v. เปลี่ยน, แลกเงิน",
        "You can change your wet shoes right now.",
        "n., v."
      ],
      [
        "chart",
        "n. แผนภูมิ, ตาราง; v. ทำแผนภูมิ, บันทึกเป็นกราฟ",
        "Look at the sales chart on the screen.",
        "n., v."
      ],
      [
        "cheap",
        "adj. ราคาถูก; adv. ในราคาถูก",
        "Fresh vegetables are cheap at this market.",
        "adj., adv."
      ],
      [
        "check",
        "v. ตรวจสอบ, เช็ก; n. การตรวจสอบ, ใบเสร็จ",
        "Always check the weather before you hike.",
        "v., n."
      ],
      [
        "cheese",
        "เนยแข็ง, ชีส",
        "Would you like extra cheese on your pasta?",
        "n."
      ],
      [
        "chicken",
        "ไก่, เนื้อไก่",
        "We ordered grilled chicken with steamed rice.",
        "n."
      ],
      [
        "child",
        "เด็ก, ลูก",
        "Every child needs plenty of sleep every night.",
        "n."
      ],
      [
        "chocolate",
        "ช็อกโกแลต",
        "She gave me a bar of dark chocolate.",
        "n."
      ],
      [
        "choose",
        "เลือก, ตัดสินใจเลือก",
        "You can choose any seat you like.",
        "v."
      ],
      [
        "cinema",
        "โรงภาพยนตร์",
        "They went to the cinema on Friday.",
        "n."
      ],
      [
        "city",
        "เมือง, นคร",
        "Public buses connect every corner of the city.",
        "n."
      ],
      [
        "class",
        "ชั้นเรียน, คาบเรียน, ระดับชั้น",
        "Our English class starts at nine sharp.",
        "n."
      ],
      [
        "classroom",
        "ห้องเรียน",
        "The teacher unlocked the classroom before eight.",
        "n."
      ],
      [
        "clean",
        "adj. สะอาด; v. ทำความสะอาด",
        "Please keep your kitchen counter clean every day.",
        "adj., v."
      ],
      [
        "climb",
        "v. ปีน, ไต่; n. การปีนป่าย, ทางขึ้น",
        "Strong hikers climb that rocky hill easily.",
        "v., n."
      ],
      [
        "clock",
        "นาฬิกา, นาฬิกาตั้งโต๊ะหรือแขวน",
        "The wall clock struck twelve at noon.",
        "n."
      ],
      [
        "close",
        "v. ปิด; adj. ใกล้ชิด, สนิท; adv. ใกล้ๆ; n. จุดจบ, ตอนท้าย",
        "Remember to close the front door at night.",
        "v., adj., adv., n."
      ],
      [
        "clothes",
        "เสื้อผ้า",
        "Fold your clean clothes on the bed.",
        "n."
      ],
      [
        "club",
        "สโมสร, ชมรม, คลับ",
        "She joined a local running club yesterday.",
        "n."
      ],
      [
        "coat",
        "เสื้อโค้ต, เสื้อคลุม",
        "Wear a warm coat in cold weather.",
        "n."
      ],
      [
        "coffee",
        "กาแฟ",
        "I drink black coffee every single morning.",
        "n."
      ],
      [
        "cold",
        "adj. เย็น, หนาว; n. ความหนาวเย็น, โรคหวัด",
        "The mountain air felt cold at dawn.",
        "adj., n."
      ],
      [
        "college",
        "วิทยาลัย, มหาวิทยาลัย",
        "Her son studies music at a local college.",
        "n."
      ],
      [
        "colour",
        "สี, สีสัน",
        "Blue is my favourite colour for shirts.",
        "n."
      ],
      [
        "come",
        "มา, เดินทางมา",
        "Come inside before the rain starts falling.",
        "v."
      ],
      [
        "common",
        "ธรรมดา, ทั่วไป, พบได้บ่อย",
        "Headaches are a very common health problem.",
        "adj."
      ],
      [
        "company",
        "บริษัท, เพื่อนร่วมทาง",
        "She works for a software company downtown.",
        "n."
      ],
      [
        "compare",
        "เปรียบเทียบ",
        "Compare both prices before buying a laptop.",
        "v."
      ],
      [
        "complete",
        "adj. สมบูรณ์, ครบถ้วน; v. ทำให้เสร็จสมบูรณ์",
        "Please complete this short form with a pen.",
        "adj., v."
      ],
      [
        "computer",
        "คอมพิวเตอร์",
        "My old computer runs slowly these days.",
        "n."
      ],
      [
        "concert",
        "คอนเสิร์ต, การแสดงดนตรี",
        "We bought tickets for a jazz concert.",
        "n."
      ],
      [
        "conversation",
        "การสนทนา, บทสนทนา",
        "They had a friendly conversation over tea.",
        "n."
      ],
      [
        "cook",
        "v. ทำอาหาร, ปรุงอาหาร; n. พ่อครัว, แม่ครัว",
        "My dad likes to cook Thai food.",
        "v., n."
      ],
      [
        "cooking",
        "การทำอาหาร, การปรุงอาหาร",
        "She enjoys cooking dinner for her family.",
        "n."
      ],
      [
        "cool",
        "adj. เย็นสบาย, เจ๋ง, สุขุม; v. ทำให้เย็นลง",
        "Evening winds feel cool near the river.",
        "adj., v."
      ],
      [
        "correct",
        "adj. ถูกต้อง; v. แก้ไขให้ถูกต้อง",
        "Check if your home address is correct.",
        "adj., v."
      ],
      [
        "cost",
        "n. ราคา, ค่าใช้จ่าย; v. มีราคา, ทำให้เสียค่าใช้จ่าย",
        "New winter shoes often cost a lot.",
        "n., v."
      ],
      [
        "could",
        "สามารถ, อาจจะ, ขออนุญาต",
        "Could you pass me the salt, please?",
        "modal v."
      ],
      [
        "country",
        "ประเทศ, ชนบท",
        "Japan is a clean and safe country.",
        "n."
      ],
      [
        "course",
        "หลักสูตร, คอร์สเรียน, จานอาหาร",
        "I joined a short drawing course online.",
        "n."
      ],
      [
        "cousin",
        "ลูกพี่ลูกน้อง",
        "My cousin lives in Chiang Mai now.",
        "n."
      ],
      [
        "cow",
        "วัว, แม่วัว",
        "A brown cow ate grass in the field.",
        "n."
      ],
      [
        "cream",
        "n. ครีม, หัวกะทิหรือมันนม; adj. สีครีม, ผสมครีม",
        "She put fresh cream on the strawberries.",
        "n., adj."
      ],
      [
        "create",
        "สร้าง, สร้างสรรค์, ก่อให้เกิด",
        "Good teachers create a friendly classroom atmosphere.",
        "v."
      ],
      [
        "culture",
        "วัฒนธรรม",
        "We learned about local culture during travel.",
        "n."
      ],
      [
        "cup",
        "ถ้วย, แก้วมีหู",
        "Pour hot tea into that white cup.",
        "n."
      ],
      [
        "customer",
        "ลูกค้า",
        "Every customer receives a warm smile here.",
        "n."
      ],
      [
        "cut",
        "v. ตัด, หั่น, ลดลง; n. รอยบาด, การตัดลด",
        "Use a sharp knife to cut the bread.",
        "v., n."
      ],
      [
        "dad",
        "พ่อ, คุณพ่อ",
        "My dad drives me to school daily.",
        "n."
      ],
      [
        "dance",
        "n. การเต้นรำ, งานเต้นรำ; v. เต้นรำ",
        "They love to dance to lively music.",
        "n., v."
      ],
      [
        "dancer",
        "นักเต้น, นางรำ",
        "That young dancer moves with great grace.",
        "n."
      ],
      [
        "dancing",
        "การเต้นรำ",
        "Ballroom dancing keeps my grandparents very happy.",
        "n."
      ],
      [
        "dangerous",
        "อันตราย, น่ากลัว",
        "Ice makes the mountain road quite dangerous.",
        "adj."
      ],
      [
        "dark",
        "adj. มืด, สีเข้ม; n. ความมืด",
        "Turn on the lamp before it gets dark.",
        "adj., n."
      ],
      [
        "date",
        "n. วันที่, การนัดเดต, อินทผลัม; v. ออกเดต, ลงวันที่",
        "What is the exact date of graduation?",
        "n., v."
      ],
      [
        "daughter",
        "ลูกสาว",
        "Their eldest daughter studies medicine in London.",
        "n."
      ],
      [
        "day",
        "วัน, กลางวัน",
        "Today is a bright and sunny day.",
        "n."
      ],
      [
        "dear",
        "adj. ที่รัก, แพง; excl. ตายจริง, โอ้โห",
        "Dear Mom, thank you for your kindness.",
        "adj., excl."
      ],
      [
        "December",
        "เดือนธันวาคม",
        "Cold nights arrive across Thailand in December.",
        "n."
      ],
      [
        "decide",
        "ตัดสินใจ, กำหนด",
        "We need to decide where to eat lunch.",
        "v."
      ],
      [
        "delicious",
        "อร่อย, รสเลิศ",
        "Your homemade mango pie tastes truly delicious.",
        "adj."
      ],
      [
        "describe",
        "บรรยาย, อธิบายลักษณะ",
        "Can you describe the man you saw?",
        "v."
      ],
      [
        "description",
        "คำบรรยาย, รายละเอียดลักษณะ",
        "Write a clear description of your lost bag.",
        "n."
      ],
      [
        "design",
        "n. การออกแบบ, ลวดลาย; v. ออกแบบ",
        "That modern lamp has a simple design.",
        "n., v."
      ],
      [
        "desk",
        "โต๊ะทำงาน, โต๊ะเรียน",
        "Keep your study desk clean and tidy.",
        "n."
      ]
    ]
  },
  {
    "id": "ox-a1-3",
    "label": "A1 Words · 3 (detail–foot)",
    "deck": "Oxford · A1 · 3",
    "cards": [
      [
        "detail",
        "n. รายละเอียด; v. แจกแจงรายละเอียด",
        "Read every small detail on the ticket.",
        "n., v."
      ],
      [
        "dialogue",
        "บทสนทนา, การเจรจา",
        "Practice this short dialogue with your partner.",
        "n."
      ],
      [
        "dictionary",
        "พจนานุกรม",
        "Look up new words in a dictionary.",
        "n."
      ],
      [
        "die",
        "ตาย, ดับ",
        "Garden flowers die without enough water.",
        "v."
      ],
      [
        "diet",
        "อาหารการกิน, การควบคุมอาหาร",
        "A healthy diet includes fruit and vegetables.",
        "n."
      ],
      [
        "difference",
        "ความแตกต่าง",
        "Can you tell the difference between them?",
        "n."
      ],
      [
        "different",
        "แตกต่าง, ต่างกัน",
        "We live in two very different cities.",
        "adj."
      ],
      [
        "difficult",
        "ยาก, ลำบาก",
        "This math puzzle looks quite difficult today.",
        "adj."
      ],
      [
        "dinner",
        "อาหารเย็น, มื้อค่ำ",
        "Our whole family eats dinner at seven.",
        "n."
      ],
      [
        "dirty",
        "สกปรก, เปื้อน",
        "Take off those dirty boots before entering.",
        "adj."
      ],
      [
        "discuss",
        "หารือ, อภิปราย, พูดคุย",
        "Let us discuss the holiday plan tonight.",
        "v."
      ],
      [
        "dish",
        "จาน, อาหารจานหนึ่ง",
        "This spicy curry is my favourite dish.",
        "n."
      ],
      [
        "do",
        "aux. v. ใช้ช่วยตั้งคำถามหรือปฏิเสธ; v. ทำ, ปฏิบัติ",
        "Always do your homework before watching television.",
        "aux. v., v."
      ],
      [
        "doctor",
        "หมอ, แพทย์",
        "See a doctor if your fever continues.",
        "n."
      ],
      [
        "dog",
        "สุนัข, หมา",
        "A friendly dog wagged its tail happily.",
        "n."
      ],
      [
        "dollar",
        "ดอลลาร์, เงินดอลลาร์",
        "This small notebook costs just one dollar.",
        "n."
      ],
      [
        "door",
        "ประตู",
        "Please lock the back door at night.",
        "n."
      ],
      [
        "down",
        "adv. ลง, ข้างล่าง; prep. ลงตาม, ไปตาม",
        "Walk slowly down the wet wooden stairs.",
        "adv., prep."
      ],
      [
        "downstairs",
        "adv. ที่ชั้นล่าง, ลงไปชั้นล่าง; adj. อยู่ชั้นล่าง",
        "Dinner is ready on the table downstairs.",
        "adv., adj."
      ],
      [
        "draw",
        "วาดรูป, ลาก, ถอน",
        "Children love to draw animals with crayons.",
        "v."
      ],
      [
        "dress",
        "n. ชุดกระโปรง, เสื้อผ้า; v. แต่งตัว, สวมเสื้อผ้า",
        "She wore a yellow dress for spring.",
        "n., v."
      ],
      [
        "drink",
        "n. เครื่องดื่ม; v. ดื่ม",
        "Drink plenty of clean water after running.",
        "n., v."
      ],
      [
        "drive",
        "v. ขับรถ, ขับเคลื่อน; n. การขับรถ, แรงผลักดัน",
        "Never drive fast during heavy evening rain.",
        "v., n."
      ],
      [
        "driver",
        "คนขับรถ",
        "The bus driver greeted everyone with smiles.",
        "n."
      ],
      [
        "during",
        "ระหว่าง, ในช่วง",
        "Please silence phones during the live show.",
        "prep."
      ],
      [
        "each",
        "adv. ต่อคน, ต่อชิ้น; det. แต่ละ; pron. แต่ละคน, แต่ละอัน",
        "Each student receives a fresh workbook today.",
        "adv., det., pron."
      ],
      [
        "ear",
        "หู",
        "He whispered a secret into my ear.",
        "n."
      ],
      [
        "early",
        "adj. เช้า, ก่อนเวลา, ต้นๆ; adv. แต่เช้า, ล่วงหน้า",
        "We caught an early train to work.",
        "adj., adv."
      ],
      [
        "east",
        "adj. ทางทิศตะวันออก; adv. ไปทางทิศตะวันออก; n. ทิศตะวันออก",
        "The bright sun rises in the east.",
        "adj., adv., n."
      ],
      [
        "easy",
        "ง่าย, สะดวกสบาย",
        "This easy recipe takes only ten minutes.",
        "adj."
      ],
      [
        "eat",
        "กิน, รับประทาน",
        "We usually eat fresh fruit after dinner.",
        "v."
      ],
      [
        "egg",
        "ไข่",
        "Fry one egg with toast for breakfast.",
        "n."
      ],
      [
        "eight",
        "แปด",
        "The bakery opens at eight every morning.",
        "num."
      ],
      [
        "eighteen",
        "สิบแปด",
        "He learned to drive at age eighteen.",
        "num."
      ],
      [
        "eighty",
        "แปดสิบ",
        "My grandfather stays healthy at age eighty.",
        "num."
      ],
      [
        "elephant",
        "ช้าง",
        "A huge elephant drank water beside trees.",
        "n."
      ],
      [
        "eleven",
        "สิบเอ็ด",
        "Our soccer team has eleven strong players.",
        "num."
      ],
      [
        "else",
        "อื่น, นอกเหนือจากนี้, มิฉะนั้น",
        "Would anyone else like another warm cookie?",
        "adv."
      ],
      [
        "email",
        "n. อีเมล, จดหมายอิเล็กทรอนิกส์; v. ส่งอีเมล",
        "Send me an email with your notes.",
        "n., v."
      ],
      [
        "end",
        "n. จุดจบ, ปลาย, ตอนท้าย; v. จบ, สิ้นสุด",
        "Wait until the end of the movie.",
        "n., v."
      ],
      [
        "enjoy",
        "สนุกกับ, เพลิดเพลิน, ชอบ",
        "I really enjoy quiet walks after dinner.",
        "v."
      ],
      [
        "enough",
        "adv. เพียงพอ, พอสมควร; det. เพียงพอ; pron. จำนวนที่เพียงพอ",
        "Do we have enough chairs for everyone?",
        "adv., det., pron."
      ],
      [
        "euro",
        "ยูโร, สกุลเงินยูโร",
        "A cup of espresso costs one euro.",
        "n."
      ],
      [
        "even",
        "adv. แม้แต่, ยิ่งขึ้น; adj. เรียบเสมอ, เป็นเลขคู่",
        "Even small babies laugh at funny faces.",
        "adv., adj."
      ],
      [
        "evening",
        "ตอนเย็น, ช่วงค่ำ",
        "We often watch movies on Friday evening.",
        "n."
      ],
      [
        "event",
        "เหตุการณ์, งานกิจกรรม",
        "The charity run was a joyful event.",
        "n."
      ],
      [
        "ever",
        "เคย, ตลอดมา",
        "Have you ever visited northern Thailand?",
        "adv."
      ],
      [
        "every",
        "ทุก, ทุกๆ",
        "Check your bag before leaving every room.",
        "det."
      ],
      [
        "everybody",
        "ทุกคน, ทุกๆ คน",
        "Everybody clapped loudly after the final song.",
        "pron."
      ],
      [
        "everyone",
        "ทุกคน, ทุกๆ คน",
        "Is everyone ready for the group photo?",
        "pron."
      ],
      [
        "everything",
        "ทุกสิ่งทุกอย่าง",
        "She packed everything neatly into one suitcase.",
        "pron."
      ],
      [
        "exam",
        "การสอบ, ข้อสอบ",
        "Good luck with your science exam tomorrow!",
        "n."
      ],
      [
        "example",
        "ตัวอย่าง",
        "Give me a simple example of that.",
        "n."
      ],
      [
        "excited",
        "ตื่นเต้น, รู้สึกตื่นเต้น",
        "The kids feel excited about camping tomorrow.",
        "adj."
      ],
      [
        "exciting",
        "น่าตื่นเต้น",
        "That basketball match had an exciting finish.",
        "adj."
      ],
      [
        "exercise",
        "n. การออกกำลังกาย, แบบฝึกหัด; v. ออกกำลังกาย, ฝึกฝน",
        "Morning exercise gives you energy all day.",
        "n., v."
      ],
      [
        "expensive",
        "แพง, ราคาสูง",
        "Fresh berries are quite expensive this season.",
        "adj."
      ],
      [
        "explain",
        "อธิบาย, ชี้แจง",
        "Please explain this rule one more time.",
        "v."
      ],
      [
        "extra",
        "adj. เพิ่มเติม, พิเศษ; adv. เป็นพิเศษ, มากขึ้น; n. สิ่งเพิ่มเติม",
        "Bring an extra jacket for cool evenings.",
        "adj., adv., n."
      ],
      [
        "eye",
        "ตา, ดวงตา",
        "Dust blew into her left eye outside.",
        "n."
      ],
      [
        "face",
        "n. ใบหน้า, ด้านหน้า; v. เผชิญหน้า, หันหน้าไปทาง",
        "Wash your face with cool water first.",
        "n., v."
      ],
      [
        "fact",
        "ข้อเท็จจริง, ความจริง",
        "In fact, the museum closes on Mondays.",
        "n."
      ],
      [
        "fall",
        "v. ตก, ล้ม, ลดลง; n. การตกลงมา, ฤดูใบไม้ร่วง",
        "Be careful not to fall on the ice.",
        "v., n."
      ],
      [
        "false",
        "เท็จ, ผิด, ปลอม",
        "Mark whether each test statement is false.",
        "adj."
      ],
      [
        "family",
        "adj. เกี่ยวกับครอบครัว, สำหรับครอบครัว; n. ครอบครัว",
        "My family gathers together every New Year.",
        "adj., n."
      ],
      [
        "famous",
        "มีชื่อเสียง, โด่งดัง",
        "This town is famous for sweet noodles.",
        "adj."
      ],
      [
        "fantastic",
        "ยอดเยี่ยม, วิเศษมาก",
        "You did a fantastic job on stage!",
        "adj."
      ],
      [
        "far",
        "adv. ไกล, มาก; adj. ไกล, ห่างไกล",
        "How far is the station from here?",
        "adv., adj."
      ],
      [
        "farm",
        "n. ฟาร์ม, ไร่นา; v. ทำฟาร์ม, เพาะปลูก",
        "We visited an organic apple farm yesterday.",
        "n., v."
      ],
      [
        "farmer",
        "ชาวนา, เกษตรกร",
        "The local farmer sells fresh corn daily.",
        "n."
      ],
      [
        "fast",
        "adj. เร็ว, ว่องไว; adv. อย่างรวดเร็ว",
        "That fast train reaches downtown in minutes.",
        "adj., adv."
      ],
      [
        "fat",
        "adj. อ้วน, หนา; n. ไขมัน",
        "Our sleepy cat has grown quite fat lately.",
        "adj., n."
      ],
      [
        "father",
        "พ่อ, บิดา",
        "My father taught me how to swim.",
        "n."
      ],
      [
        "favourite",
        "adj. ที่ชื่นชอบ, โปรดปราน; n. สิ่งที่ชอบที่สุด, คนโปรด",
        "Green tea ice cream is my favourite.",
        "adj., n."
      ],
      [
        "February",
        "เดือนกุมภาพันธ์",
        "February is the shortest month every year.",
        "n."
      ],
      [
        "feel",
        "v. รู้สึก, สัมผัส; n. ความรู้สึก, ผิวสัมผัส",
        "I feel much happier after talking outside.",
        "v., n."
      ],
      [
        "feeling",
        "ความรู้สึก, อารมณ์",
        "He had a strange feeling about tomorrow.",
        "n."
      ],
      [
        "festival",
        "เทศกาล, งานรื่นเริง",
        "Lanterns lit the night during the festival.",
        "n."
      ],
      [
        "few",
        "adj. น้อย, สองสาม; det. ไม่กี่, สองสาม; pron. จำนวนน้อย, ไม่กี่คน",
        "Only a few shops stay open late.",
        "adj., det., pron."
      ],
      [
        "fifteen",
        "สิบห้า",
        "The train leaves in fifteen minutes sharp.",
        "num."
      ],
      [
        "fifth",
        "ที่ห้า, ลำดับที่ห้า",
        "Her office sits on the fifth floor.",
        "ord."
      ],
      [
        "fifty",
        "ห้าสิบ",
        "That simple scarf costs fifty dollars today.",
        "num."
      ],
      [
        "fill",
        "เติม, กรอก, ทำให้เต็ม",
        "Fill the water bottle before we leave.",
        "v."
      ],
      [
        "film",
        "n. ภาพยนตร์, ฟิล์ม; v. ถ่ายทำภาพยนตร์",
        "We watched a funny old film tonight.",
        "n., v."
      ],
      [
        "final",
        "adj. สุดท้าย, ท้ายสุด; n. รอบชิงชนะเลิศ, การสอบปลายภาค",
        "Read the final chapter before Friday's class.",
        "adj., n."
      ],
      [
        "find",
        "ค้นหา, พบ, เจอ",
        "Did you find your lost car keys?",
        "v."
      ],
      [
        "fine",
        "สบายดี, ดี, ละเอียด",
        "The weather looks sunny and fine today.",
        "adj."
      ],
      [
        "finish",
        "v. เสร็จสิ้น, จบ; n. จุดจบ, ตอนท้าย",
        "Finish your dinner before eating sweet cake.",
        "v., n."
      ],
      [
        "fire",
        "n. ไฟ, อัคคีภัย; v. ยิง, ไล่ออก",
        "Campers sat around a warm wood fire.",
        "n., v."
      ],
      [
        "first",
        "adv. ก่อน, เป็นอันดับแรก; det. แรก, ที่หนึ่ง; ord. ลำดับที่หนึ่ง; n. ครั้งแรก, สิ่งแรก",
        "First wash your hands, then prepare food.",
        "adv., det., ord., n."
      ],
      [
        "fish",
        "n. ปลา, เนื้อปลา; v. ตกปลา, จับปลา",
        "A silver fish jumped above the water.",
        "n., v."
      ],
      [
        "five",
        "ห้า",
        "Give me five minutes to get ready.",
        "num."
      ],
      [
        "flat",
        "n. ห้องชุด, แฟลต; adj. แบน, ราบเรียบ",
        "They rent a sunny flat near work.",
        "n., adj."
      ],
      [
        "flight",
        "เที่ยวบิน, การบิน",
        "Our morning flight landed smoothly on time.",
        "n."
      ],
      [
        "floor",
        "พื้น, ชั้นของอาคาร",
        "Do not leave wet towels on the floor.",
        "n."
      ],
      [
        "flower",
        "ดอกไม้",
        "A bright yellow flower bloomed this morning.",
        "n."
      ],
      [
        "fly",
        "v. บิน, นั่งเครื่องบิน; n. แมลงวัน",
        "Wild birds fly south before winter arrives.",
        "v., n."
      ],
      [
        "follow",
        "ติดตาม, ทำตาม, เดินตาม",
        "Follow this quiet path to the lake.",
        "v."
      ],
      [
        "food",
        "อาหาร",
        "Thai street food smells wonderful at dusk.",
        "n."
      ],
      [
        "foot",
        "เท้า, ปลายล่าง",
        "He hurt his left foot during practice.",
        "n."
      ]
    ]
  },
  {
    "id": "ox-a1-4",
    "label": "A1 Words · 4 (football–introduce)",
    "deck": "Oxford · A1 · 4",
    "cards": [
      [
        "football",
        "ฟุตบอล",
        "Students play football on the grassy field.",
        "n."
      ],
      [
        "for",
        "สำหรับ, เพื่อ, เป็นเวลา",
        "I bought fresh flowers for my mother.",
        "prep."
      ],
      [
        "forget",
        "ลืม",
        "Never forget to carry your house key.",
        "v."
      ],
      [
        "form",
        "n. แบบฟอร์ม, รูปแบบ; v. ก่อตัว, สร้างขึ้น",
        "Please sign this short paper form first.",
        "n., v."
      ],
      [
        "forty",
        "สี่สิบ",
        "About forty guests joined the dinner party.",
        "num."
      ],
      [
        "four",
        "สี่",
        "The wooden table has four strong legs.",
        "num."
      ],
      [
        "fourteen",
        "สิบสี่",
        "She turns fourteen years old next Tuesday.",
        "num."
      ],
      [
        "fourth",
        "ที่สี่, ลำดับที่สี่",
        "Turn left at the fourth traffic light.",
        "ord."
      ],
      [
        "free",
        "adj. ฟรี, อิสระ, ว่าง; adv. โดยไม่เสียเงิน, อย่างอิสระ; v. ปล่อยให้เป็นอิสระ",
        "Museum entry is free on Sunday mornings.",
        "adj., adv., v."
      ],
      [
        "Friday",
        "วันศุกร์",
        "We always order pizza every Friday night.",
        "n."
      ],
      [
        "friend",
        "เพื่อน",
        "My best friend lives across the street.",
        "n."
      ],
      [
        "friendly",
        "เป็นมิตร, อัธยาศัยดี",
        "The new neighbours seem warm and friendly.",
        "adj."
      ],
      [
        "from",
        "จาก, ตั้งแต่",
        "This sweet honey comes from northern hills.",
        "prep."
      ],
      [
        "front",
        "adj. ด้านหน้า, ข้างหน้า; n. ด้านหน้า, แนวหน้า",
        "Wait for me near the front door.",
        "adj., n."
      ],
      [
        "fruit",
        "ผลไม้",
        "Buy some fresh seasonal fruit for dessert.",
        "n."
      ],
      [
        "full",
        "เต็ม, อิ่ม",
        "My water glass is already quite full.",
        "adj."
      ],
      [
        "fun",
        "n. ความสนุกสนาน; adj. สนุก, เพลิดเพลิน",
        "Playing board games together was great fun.",
        "n., adj."
      ],
      [
        "funny",
        "ตลก, ขบขัน, แปลก",
        "She told a funny story at lunch.",
        "adj."
      ],
      [
        "future",
        "n. อนาคต; adj. ในอนาคต",
        "We talked about plans for the future.",
        "n., adj."
      ],
      [
        "game",
        "เกม, การแข่งขัน",
        "Our school won the final basketball game.",
        "n."
      ],
      [
        "garden",
        "สวน, สวนดอกไม้",
        "Red roses grow nicely in our garden.",
        "n."
      ],
      [
        "geography",
        "ภูมิศาสตร์",
        "We studied world maps in geography class.",
        "n."
      ],
      [
        "get",
        "ได้รับ, ไปถึง, กลายเป็น",
        "Did you get my text message earlier?",
        "v."
      ],
      [
        "girl",
        "เด็กหญิง, เด็กผู้หญิง, หญิงสาว",
        "The young girl painted a sunny picture.",
        "n."
      ],
      [
        "girlfriend",
        "แฟนสาว, คนรักหญิง",
        "He bought pink roses for his girlfriend.",
        "n."
      ],
      [
        "give",
        "ให้, มอบให้",
        "Please give this letter to your teacher.",
        "v."
      ],
      [
        "glass",
        "แก้วน้ำ, กระจก",
        "Pour cold orange juice into this glass.",
        "n."
      ],
      [
        "go",
        "v. ไป, เดินทาง; n. ตาเล่น, ความพยายาม",
        "Let us go for a walk outside.",
        "v., n."
      ],
      [
        "good",
        "adj. ดี, เก่ง; n. ความดี, ประโยชน์",
        "You made a very good choice today.",
        "adj., n."
      ],
      [
        "goodbye",
        "excl. ลาก่อน; n. คำอำลา, การบอกลา",
        "Everyone waved goodbye as the train left.",
        "excl., n."
      ],
      [
        "grandfather",
        "ปู่, ตา",
        "My grandfather tells wonderful childhood stories every night.",
        "n."
      ],
      [
        "grandmother",
        "ย่า, ยาย",
        "Her grandmother knits warm sweaters every winter.",
        "n."
      ],
      [
        "grandparent",
        "ปู่ย่าตายาย",
        "Every grandparent loves seeing family on holidays.",
        "n."
      ],
      [
        "great",
        "ยอดเยี่ยม, ดีมาก, ยิ่งใหญ่",
        "We had a great time at dinner.",
        "adj."
      ],
      [
        "green",
        "adj. สีเขียว, สดใหม่; n. สีเขียว, สนามหญ้า",
        "Fresh green leaves cover every tall tree.",
        "adj., n."
      ],
      [
        "grey",
        "adj. สีเทา, ครึ้ม; n. สีเทา",
        "Heavy grey clouds brought cool afternoon rain.",
        "adj., n."
      ],
      [
        "group",
        "กลุ่ม, พวก, คณะ",
        "Our study group meets every Wednesday evening.",
        "n."
      ],
      [
        "grow",
        "เติบโต, ปลูก, เพิ่มขึ้น",
        "Tomato plants grow fast in warm sun.",
        "v."
      ],
      [
        "guess",
        "n. การเดา; v. เดา, คาดเดา",
        "Can you guess what is inside here?",
        "n., v."
      ],
      [
        "guitar",
        "กีตาร์",
        "He plays acoustic guitar around the campfire.",
        "n."
      ],
      [
        "gym",
        "โรงยิม, สถานออกกำลังกาย",
        "She goes to the local gym weekly.",
        "n."
      ],
      [
        "hair",
        "ผม, ขน",
        "Brush your wet hair gently after showering.",
        "n."
      ],
      [
        "half",
        "det. ครึ่งหนึ่ง; n. ครึ่ง, ซีก; pron. ครึ่งหนึ่ง; adv. ครึ่งหนึ่ง, เกือบครึ่ง",
        "Cut the sweet orange right in half.",
        "det., n., pron., adv."
      ],
      [
        "hand",
        "n. มือ, เข็มนาฬิกา; v. ส่งให้, ยื่นให้",
        "Raise your hand before asking a question.",
        "n., v."
      ],
      [
        "happen",
        "เกิดขึ้น",
        "Good surprises often happen when you smile.",
        "v."
      ],
      [
        "happy",
        "มีความสุข, ยินดี",
        "The children looked happy playing outside today.",
        "adj."
      ],
      [
        "hard",
        "adj. แข็ง, ยาก, หนัก; adv. อย่างหนัก, อย่างตั้งใจ",
        "She worked hard to finish her project.",
        "adj., adv."
      ],
      [
        "hat",
        "หมวก",
        "Wear a wide hat in the bright sun.",
        "n."
      ],
      [
        "hate",
        "v. เกลียด, ไม่ชอบอย่างยิ่ง; n. ความเกลียดชัง",
        "I really hate waiting in the rain.",
        "v., n."
      ],
      [
        "have",
        "v. มี, กิน, ดื่ม; aux. v. ใช้บอกเหตุการณ์ที่ทำแล้ว",
        "We have fresh coffee in the kitchen.",
        "v., aux. v."
      ],
      [
        "have to",
        "ต้อง, จำเป็นต้อง",
        "I have to buy milk before dinner.",
        "modal v."
      ],
      [
        "he",
        "เขา, ท่าน",
        "He rides a bike to work daily.",
        "pron."
      ],
      [
        "head",
        "n. ศีรษะ, หัวหน้า; v. มุ่งหน้าไป, นำหน้า",
        "Put this warm cap on your head.",
        "n., v."
      ],
      [
        "health",
        "สุขภาพ",
        "Good sleep is important for your health.",
        "n."
      ],
      [
        "healthy",
        "แข็งแรง, ดีต่อสุขภาพ",
        "Eat healthy meals with plenty of greens.",
        "adj."
      ],
      [
        "hear",
        "ได้ยิน, รับฟัง",
        "Can you hear birds singing outside now?",
        "v."
      ],
      [
        "hello",
        "excl. สวัสดี; n. คำทักทายว่าสวัสดี",
        "Hello, how are you feeling this morning?",
        "excl., n."
      ],
      [
        "help",
        "n. ความช่วยเหลือ; v. ช่วย, ช่วยเหลือ",
        "Could you help me lift this box?",
        "n., v."
      ],
      [
        "her",
        "det. ของเธอ, ของหล่อน; pron. เธอ, หล่อน",
        "Give her this warm cup of tea.",
        "det., pron."
      ],
      [
        "here",
        "ที่นี่, ตรงนี้",
        "Please wait right here for five minutes.",
        "adv."
      ],
      [
        "hey",
        "เฮ้, นี่",
        "Hey, you dropped your red umbrella there!",
        "excl."
      ],
      [
        "hi",
        "หวัดดี, สวัสดี",
        "Hi, welcome to our small corner bakery!",
        "excl."
      ],
      [
        "high",
        "adj. สูง; adv. สูงขึ้น, ระดับสูง; n. ระดับสูงสุด",
        "The snowy mountain looks very high today.",
        "adj., adv., n."
      ],
      [
        "him",
        "เขา",
        "Please tell him dinner starts at seven.",
        "pron."
      ],
      [
        "his",
        "det. ของเขา; pron. ของเขา",
        "He left his blue umbrella at home.",
        "det., pron."
      ],
      [
        "history",
        "ประวัติศาสตร์, ประวัติ",
        "We learned local history at the museum.",
        "n."
      ],
      [
        "hobby",
        "งานอดิเรก",
        "Baking sweet bread is her favourite hobby.",
        "n."
      ],
      [
        "holiday",
        "วันหยุด, วันพักร้อน",
        "Our family plans a holiday near Phuket.",
        "n."
      ],
      [
        "home",
        "adv. ที่บ้าน, กลับบ้าน; n. บ้าน, ที่อยู่อาศัย; adj. เกี่ยวกับบ้าน, ในประเทศ",
        "What time are you coming home tonight?",
        "adv., n., adj."
      ],
      [
        "homework",
        "การบ้าน",
        "Finish your math homework before dinner tonight.",
        "n."
      ],
      [
        "hope",
        "v. หวัง, คาดหวัง; n. ความหวัง",
        "I hope the weather stays sunny tomorrow.",
        "v., n."
      ],
      [
        "horse",
        "ม้า",
        "A white horse ran across the field.",
        "n."
      ],
      [
        "hospital",
        "โรงพยาบาล",
        "Her sister works at a city hospital.",
        "n."
      ],
      [
        "hot",
        "ร้อน, เผ็ด",
        "Careful, this bowl of soup is hot!",
        "adj."
      ],
      [
        "hotel",
        "โรงแรม",
        "They booked a quiet hotel near town.",
        "n."
      ],
      [
        "hour",
        "ชั่วโมง",
        "The bus ride takes roughly one hour.",
        "n."
      ],
      [
        "house",
        "n. บ้าน, อาคาร; v. จัดหาที่พักให้, เก็บไว้",
        "They painted their wooden house light blue.",
        "n., v."
      ],
      [
        "how",
        "อย่างไร, แค่ไหน",
        "How do you make this iced tea?",
        "adv."
      ],
      [
        "however",
        "adv. ไม่ว่าจะอย่างไร, มากเพียงใด; conj. อย่างไรก็ตาม, แต่ทว่า",
        "The box looked small; however, it was heavy.",
        "adv., conj."
      ],
      [
        "hundred",
        "หนึ่งร้อย, ร้อย",
        "About one hundred people joined the marathon.",
        "num."
      ],
      [
        "hungry",
        "หิว, หิวโหย",
        "I always feel hungry after swimming practice.",
        "adj."
      ],
      [
        "husband",
        "สามี",
        "Her husband cooks wonderful pasta every Sunday.",
        "n."
      ],
      [
        "I",
        "ฉัน, ผม, ดิฉัน",
        "I always drink warm water after waking up.",
        "pron."
      ],
      [
        "ice",
        "น้ำแข็ง",
        "Add some ice to my lemon juice.",
        "n."
      ],
      [
        "ice cream",
        "ไอศกรีม",
        "Children love eating cold vanilla ice cream.",
        "n."
      ],
      [
        "idea",
        "ความคิด, ไอเดีย",
        "That sounds like a really smart idea!",
        "n."
      ],
      [
        "if",
        "ถ้า, หาก, ว่า",
        "Bring a jacket if it gets windy.",
        "conj."
      ],
      [
        "imagine",
        "จินตนาการ, นึกภาพ",
        "Imagine living in a quiet forest cabin.",
        "v."
      ],
      [
        "important",
        "สำคัญ",
        "Drinking clean water daily is very important.",
        "adj."
      ],
      [
        "improve",
        "ปรับปรุง, พัฒนาให้ดีขึ้น",
        "Reading daily helps improve your English vocabulary.",
        "v."
      ],
      [
        "in",
        "adv. ข้างใน, เข้ามาข้างใน; prep. ใน, ภายใน",
        "Put your clean notebooks in the bag.",
        "adv., prep."
      ],
      [
        "include",
        "รวมถึง, นับรวม",
        "Does the room price include morning breakfast?",
        "v."
      ],
      [
        "information",
        "ข้อมูล, ข่าวสาร",
        "Ask the desk for helpful tourist information.",
        "n."
      ],
      [
        "interest",
        "n. ความสนใจ, ดอกเบี้ย; v. ทำให้สนใจ",
        "He showed great interest in astronomy books.",
        "n., v."
      ],
      [
        "interested",
        "สนใจ, รู้สึกสนใจ",
        "Are you interested in learning Chinese cooking?",
        "adj."
      ],
      [
        "interesting",
        "น่าสนใจ",
        "We watched an interesting film about oceans.",
        "adj."
      ],
      [
        "internet",
        "อินเทอร์เน็ต",
        "Check the train timetable on the internet.",
        "n."
      ],
      [
        "interview",
        "n. การสัมภาษณ์; v. สัมภาษณ์",
        "She felt calm before her job interview.",
        "n., v."
      ],
      [
        "into",
        "เข้าไปใน, สู่วง, กลายเป็น",
        "Pour the warm milk into the bowl.",
        "prep."
      ],
      [
        "introduce",
        "แนะนำให้รู้จัก, นำเสนอ",
        "Let me introduce my friend from Japan.",
        "v."
      ]
    ]
  },
  {
    "id": "ox-a1-5",
    "label": "A1 Words · 5 (island–museum)",
    "deck": "Oxford · A1 · 5",
    "cards": [
      [
        "island",
        "เกาะ",
        "We took a boat to the island.",
        "n."
      ],
      [
        "it",
        "มัน, สิ่งนั้น",
        "It rained softly throughout the whole afternoon.",
        "pron."
      ],
      [
        "its",
        "ของมัน",
        "The little bird built its nest high.",
        "det."
      ],
      [
        "jacket",
        "เสื้อแจ็กเก็ต, เสื้อคลุมตัวสั้น",
        "Zip up your jacket against the wind.",
        "n."
      ],
      [
        "January",
        "เดือนมกราคม",
        "Cool morning breezes often arrive in January.",
        "n."
      ],
      [
        "jeans",
        "กางเกงยีนส์",
        "He wears comfortable blue jeans on weekends.",
        "n."
      ],
      [
        "job",
        "งาน, อาชีพ",
        "She found a great job near home.",
        "n."
      ],
      [
        "join",
        "เข้าร่วม, ต่อเข้าด้วยกัน",
        "Would you like to join us tonight?",
        "v."
      ],
      [
        "journey",
        "การเดินทาง",
        "We had a safe journey through mountains.",
        "n."
      ],
      [
        "juice",
        "น้ำผลไม้",
        "Fresh orange juice tastes sweet without sugar.",
        "n."
      ],
      [
        "July",
        "เดือนกรกฎาคม",
        "Heavy monsoon rains often fall in July.",
        "n."
      ],
      [
        "June",
        "เดือนมิถุนายน",
        "Our summer camp starts early in June.",
        "n."
      ],
      [
        "just",
        "เพิ่งจะ, แค่, พอดี",
        "I just finished reading that short book.",
        "adv."
      ],
      [
        "keep",
        "เก็บไว้, รักษา, ทำต่อไป",
        "Please keep your receipt inside your wallet.",
        "v."
      ],
      [
        "key",
        "adj. สำคัญยิ่ง, หลัก; n. กุญแจ, แป้นพิมพ์, คีย์; v. พิมพ์ป้อนข้อมูล",
        "Check that you have your house key.",
        "adj., n., v."
      ],
      [
        "kilometre",
        "กิโลเมตร",
        "The village is one kilometre away.",
        "n."
      ],
      [
        "kind",
        "n. ชนิด, ประเภท; adj. ใจดี, เมตตา",
        "Thank you for being so very kind.",
        "n., adj."
      ],
      [
        "kitchen",
        "ห้องครัว",
        "Someone is baking bread in the kitchen.",
        "n."
      ],
      [
        "know",
        "รู้, รู้จัก",
        "Do you know where the station is?",
        "v."
      ],
      [
        "land",
        "n. ผืนดิน, ประเทศ; v. ลงจอด, ขึ้นฝั่ง",
        "Our plane will land in twenty minutes.",
        "n., v."
      ],
      [
        "language",
        "ภาษา",
        "Learning a new language takes daily practice.",
        "n."
      ],
      [
        "large",
        "ใหญ่, กว้างใหญ่",
        "They ordered a large pizza to share.",
        "adj."
      ],
      [
        "last",
        "det. สุดท้าย, ที่ผ่านมา; adv. ครั้งสุดท้าย; n. สุดท้าย, ท้ายสุด; v. คงอยู่, ใช้เวลา",
        "We visited Chiang Mai last winter holiday.",
        "det., adv., n., v."
      ],
      [
        "late",
        "adj. สาย, ล่าช้า, ดึก; adv. สาย, ช้า, ดึก",
        "Hurry up so we are not late.",
        "adj., adv."
      ],
      [
        "later",
        "adv. ภายหลัง, ต่อมา; adj. ทีหลัง, ยุคหลัง",
        "I will call you back a bit later.",
        "adv., adj."
      ],
      [
        "laugh",
        "n. เสียงหัวเราะ, การหัวเราะ; v. หัวเราะ",
        "Good friends always make each other laugh.",
        "n., v."
      ],
      [
        "learn",
        "เรียนรู้, ศึกษา",
        "Children learn new songs very quickly indeed.",
        "v."
      ],
      [
        "leave",
        "v. ออกจาก, ทิ้งไว้; n. วันลา, การลางาน",
        "What time does your bus leave tomorrow?",
        "v., n."
      ],
      [
        "left",
        "adj. ด้านซ้าย; adv. ทางซ้าย; n. ด้านซ้าย, ฝ่ายซ้าย",
        "Turn left right after the old bank.",
        "adj., adv., n."
      ],
      [
        "leg",
        "ขา",
        "My right leg feels tired after jogging.",
        "n."
      ],
      [
        "lesson",
        "บทเรียน, คาบเรียน",
        "Today we start lesson four in class.",
        "n."
      ],
      [
        "let",
        "อนุญาต, ปล่อยให้",
        "Please let the cat come inside now.",
        "v."
      ],
      [
        "letter",
        "จดหมาย, ตัวอักษร",
        "She wrote a thank-you letter to Grandma.",
        "n."
      ],
      [
        "library",
        "ห้องสมุด",
        "Study quietly inside the public library room.",
        "n."
      ],
      [
        "lie",
        "v. นอนลง, โกหก, ตั้งอยู่; n. คำโกหก",
        "Never lie to people who trust you.",
        "v., n."
      ],
      [
        "life",
        "ชีวิต",
        "Living near nature makes life feel peaceful.",
        "n."
      ],
      [
        "light",
        "adj. เบา, สีอ่อน, สว่าง; n. แสงสว่าง, โคมไฟ; v. จุดไฟ, ส่องสว่าง",
        "Carry this light plastic bag for me.",
        "adj., n., v."
      ],
      [
        "like",
        "prep. เหมือนกับ, เช่น; v. ชอบ; n. สิ่งที่ชอบ",
        "Do you like spicy Thai papaya salad?",
        "prep., v., n."
      ],
      [
        "line",
        "n. เส้น, แถว, สายโทรศัพท์; v. เรียงแถว, บุรองด้านใน",
        "Please wait in a straight line outside.",
        "n., v."
      ],
      [
        "lion",
        "สิงโต",
        "A big lion rested beneath shady trees.",
        "n."
      ],
      [
        "list",
        "n. รายการ, รายชื่อ; v. จดรายการ, จัดลำดับ",
        "Make a shopping list before leaving home.",
        "n., v."
      ],
      [
        "listen",
        "ฟัง, ตั้งใจฟัง",
        "Listen closely while the tour guide speaks.",
        "v."
      ],
      [
        "little",
        "adj. เล็ก, น้อย; det. เล็กน้อย; pron. จำนวนเล็กน้อย; adv. เล็กน้อย, แทบไม่",
        "Give the plants a little water daily.",
        "adj., det., pron., adv."
      ],
      [
        "live",
        "v. อาศัยอยู่, มีชีวิตอยู่; adj. มีชีวิต, ถ่ายทอดสด; adv. แบบสดๆ",
        "My grandparents live in a quiet village.",
        "v., adj., adv."
      ],
      [
        "local",
        "adj. ท้องถิ่น, พื้นเมือง; n. คนท้องถิ่น",
        "Buy fresh mangoes at the local market.",
        "adj., n."
      ],
      [
        "long",
        "adj. ยาว, นาน; adv. เป็นเวลานาน",
        "How long does this ferry ride take?",
        "adj., adv."
      ],
      [
        "look",
        "v. มอง, ดู, ดูเหมือน; n. การมอง, รูปลักษณ์",
        "Look at the bright rainbow above trees!",
        "v., n."
      ],
      [
        "lose",
        "ทำหาย, แพ้, สูญเสีย",
        "Hold your ticket tight so you never lose it.",
        "v."
      ],
      [
        "lot",
        "adv. มาก, บ่อยมาก; det. จำนวนมาก; pron. จำนวนมาก, ทั้งหมด",
        "Thanks a lot for carrying my bag.",
        "adv., det., pron."
      ],
      [
        "love",
        "n. ความรัก; v. รัก, ชอบมาก",
        "I love spending quiet Sundays at home.",
        "n., v."
      ],
      [
        "lunch",
        "อาหารกลางวัน, มื้อเที่ยง",
        "Let us eat noodle soup for lunch.",
        "n."
      ],
      [
        "machine",
        "เครื่องจักร, เครื่องใช้ไฟฟ้า",
        "Put dirty clothes inside the washing machine.",
        "n."
      ],
      [
        "magazine",
        "นิตยสาร",
        "She read a cooking magazine on the flight.",
        "n."
      ],
      [
        "main",
        "หลัก, สำคัญที่สุด",
        "The main entrance opens onto Market Street.",
        "adj."
      ],
      [
        "make",
        "v. ทำ, สร้าง, ทำให้; n. ยี่ห้อ, รุ่น",
        "Let me make some hot tea now.",
        "v., n."
      ],
      [
        "man",
        "ผู้ชาย, มนุษย์",
        "A polite man held the heavy door.",
        "n."
      ],
      [
        "many",
        "det. มาก, หลาย; pron. จำนวนมาก, หลายคน",
        "How many notebooks do you need today?",
        "det., pron."
      ],
      [
        "map",
        "n. แผนที่; v. ทำแผนที่, วางผัง",
        "Check the subway map before buying tickets.",
        "n., v."
      ],
      [
        "March",
        "เดือนมีนาคม",
        "Hot summer weather usually starts in March.",
        "n."
      ],
      [
        "market",
        "n. ตลาด; v. ทำการตลาด, เสนอขาย",
        "We buy fresh vegetables at the market.",
        "n., v."
      ],
      [
        "married",
        "แต่งงานแล้ว, สมรส",
        "My older cousin got married last year.",
        "adj."
      ],
      [
        "match",
        "n. การแข่งขัน, ไม้ขีดไฟ, คู่ที่เข้ากัน; v. จับคู่, เข้ากัน",
        "We watched the football match at home.",
        "n., v."
      ],
      [
        "May",
        "เดือนพฤษภาคม",
        "The rainy season often begins in May.",
        "n."
      ],
      [
        "maybe",
        "บางที, อาจจะ",
        "Maybe we can visit the zoo tomorrow.",
        "adv."
      ],
      [
        "me",
        "ฉัน, ผม, ดิฉัน",
        "Pass me the black pen over there.",
        "pron."
      ],
      [
        "meal",
        "มื้ออาหาร",
        "Sharing a warm meal brings people closer.",
        "n."
      ],
      [
        "mean",
        "หมายถึง, ตั้งใจ, ใจร้าย",
        "What does this new Thai word mean?",
        "v."
      ],
      [
        "meaning",
        "ความหมาย",
        "Check the exact meaning in your dictionary.",
        "n."
      ],
      [
        "meat",
        "เนื้อสัตว์",
        "Does this noodle dish contain any meat?",
        "n."
      ],
      [
        "meet",
        "พบ, เจอ, ประชุม",
        "Let us meet outside the library gate.",
        "v."
      ],
      [
        "meeting",
        "การประชุม, การนัดพบ",
        "Our weekly team meeting starts at ten.",
        "n."
      ],
      [
        "member",
        "สมาชิก",
        "Every club member gets a free shirt.",
        "n."
      ],
      [
        "menu",
        "เมนู, รายการอาหาร",
        "Ask the waiter for an English menu.",
        "n."
      ],
      [
        "message",
        "ข้อความ, สาร",
        "Leave a voice message after the tone.",
        "n."
      ],
      [
        "metre",
        "เมตร",
        "The garden wall stands one metre high.",
        "n."
      ],
      [
        "midnight",
        "เที่ยงคืน",
        "Everyone went to sleep before midnight yesterday.",
        "n."
      ],
      [
        "mile",
        "ไมล์",
        "The bakery is just one mile away.",
        "n."
      ],
      [
        "milk",
        "นม, น้ำนม",
        "Pour fresh milk over your morning cereal.",
        "n."
      ],
      [
        "million",
        "หนึ่งล้าน, ล้าน",
        "Over ten million people live in Bangkok.",
        "num."
      ],
      [
        "minute",
        "นาที",
        "Wait one minute while I grab my coat.",
        "n."
      ],
      [
        "miss",
        "พลาด, คิดถึง",
        "Run fast or you will miss the bus.",
        "v."
      ],
      [
        "mistake",
        "n. ความผิดพลาด; v. เข้าใจผิด, จำผิด",
        "Everyone makes a small mistake while learning.",
        "n., v."
      ],
      [
        "model",
        "n. แบบจำลอง, นางแบบ, รุ่น; v. เป็นแบบ, สร้างแบบจำลอง",
        "He built a tiny wooden ship model.",
        "n., v."
      ],
      [
        "modern",
        "ทันสมัย, สมัยใหม่",
        "That modern building has huge glass windows.",
        "adj."
      ],
      [
        "moment",
        "ชั่วขณะ, ครู่หนึ่ง",
        "Wait a moment before crossing the road.",
        "n."
      ],
      [
        "Monday",
        "วันจันทร์",
        "Our English class starts every Monday morning.",
        "n."
      ],
      [
        "money",
        "เงิน",
        "Save some money from your monthly pay.",
        "n."
      ],
      [
        "month",
        "เดือน",
        "We pay house rent once a month.",
        "n."
      ],
      [
        "more",
        "adv. มากขึ้น, อีก; det. มากกว่า, เพิ่มขึ้น; pron. จำนวนมากกว่า",
        "Would you like some more hot rice?",
        "adv., det., pron."
      ],
      [
        "morning",
        "ตอนเช้า, ช่วงเช้า",
        "Fresh coffee smells wonderful every cool morning.",
        "n."
      ],
      [
        "most",
        "adv. มากที่สุด; det. ส่วนใหญ่, มากที่สุด; pron. ส่วนใหญ่, คนส่วนใหญ่",
        "Most shops close before ten at night.",
        "adv., det., pron."
      ],
      [
        "mother",
        "แม่, มารดา",
        "My mother grows sweet basil in pots.",
        "n."
      ],
      [
        "mountain",
        "ภูเขา",
        "Snow covered the top of that mountain.",
        "n."
      ],
      [
        "mouse",
        "หนู, เมาส์คอมพิวเตอร์",
        "A tiny grey mouse ran behind the boxes.",
        "n."
      ],
      [
        "mouth",
        "ปาก",
        "Close your mouth while chewing your food.",
        "n."
      ],
      [
        "move",
        "v. เคลื่อนไหว, ย้าย; n. การเคลื่อนไหว, การย้าย",
        "Help me move this table near the window.",
        "v., n."
      ],
      [
        "movie",
        "ภาพยนตร์, หนัง",
        "Let us watch a comedy movie tonight.",
        "n."
      ],
      [
        "much",
        "adv. มาก; det. มาก, จำนวนมาก; pron. จำนวนมาก",
        "Thank you very much for your help!",
        "adv., det., pron."
      ],
      [
        "mum",
        "แม่",
        "My mum makes delicious soup every Sunday.",
        "n."
      ],
      [
        "museum",
        "พิพิธภัณฑ์",
        "We visited the national museum on Saturday.",
        "n."
      ]
    ]
  },
  {
    "id": "ox-a1-6",
    "label": "A1 Words · 6 (music–point)",
    "deck": "Oxford · A1 · 6",
    "cards": [
      [
        "music",
        "ดนตรี, เพลง",
        "She listens to calm music while studying.",
        "n."
      ],
      [
        "must",
        "ต้อง, คงจะ",
        "You must wear a helmet on a bike.",
        "modal v."
      ],
      [
        "my",
        "ของฉัน",
        "I left my keys on the kitchen table.",
        "det."
      ],
      [
        "name",
        "n. ชื่อ; v. ตั้งชื่อ, ระบุชื่อ",
        "Please write your full name on the form.",
        "n., v."
      ],
      [
        "natural",
        "ตามธรรมชาติ, เป็นธรรมชาติ",
        "This soap is made from natural ingredients.",
        "adj."
      ],
      [
        "near",
        "adj. ใกล้; adv. ใกล้ๆ; prep. ใกล้กับ",
        "Is there a pharmacy near the train station?",
        "adj., adv., prep."
      ],
      [
        "need",
        "v. ต้องการ, จำเป็นต้อง; n. ความต้องการ, ความจำเป็น; modal v. จำเป็นต้อง",
        "I need some quiet time to finish work.",
        "v., n., modal v."
      ],
      [
        "negative",
        "adj. เชิงลบ, ปฏิเสธ; n. คำปฏิเสธ, ข้อเสีย",
        "Try not to focus on negative thoughts.",
        "adj., n."
      ],
      [
        "neighbour",
        "เพื่อนบ้าน",
        "Our neighbour kindly watered our plants all week.",
        "n."
      ],
      [
        "never",
        "ไม่เคย",
        "I have never seen snow in real life.",
        "adv."
      ],
      [
        "new",
        "ใหม่",
        "He bought a new bicycle for his commute.",
        "adj."
      ],
      [
        "news",
        "ข่าว, ข่าวสาร",
        "Have you heard the good news this morning?",
        "n."
      ],
      [
        "newspaper",
        "หนังสือพิมพ์",
        "My father reads the newspaper with his coffee.",
        "n."
      ],
      [
        "next",
        "adj. ถัดไป, หน้า; adv. ต่อไป, ถัดมา; n. คนถัดไป, สิ่งถัดไป",
        "Our next meeting will start at ten.",
        "adj., adv., n."
      ],
      [
        "next to",
        "ถัดจาก, ข้างๆ",
        "The bakery is right next to the bank.",
        "prep."
      ],
      [
        "nice",
        "ดี, น่ารัก, น่าพอใจ",
        "It is really nice to see you again.",
        "adj."
      ],
      [
        "night",
        "กลางคืน, คืน",
        "We walked along the quiet beach at night.",
        "n."
      ],
      [
        "nine",
        "เก้า",
        "The library opens at nine every morning.",
        "num."
      ],
      [
        "nineteen",
        "สิบเก้า",
        "Her younger brother turns nineteen next month.",
        "num."
      ],
      [
        "ninety",
        "เก้าสิบ",
        "My grandfather turns ninety years old this summer.",
        "num."
      ],
      [
        "no",
        "det. ไม่มี, ไม่; excl. ไม่, ไม่ใช่",
        "There is no milk left in the fridge.",
        "det., excl."
      ],
      [
        "no one",
        "ไม่มีใคร",
        "No one answered the door when I knocked.",
        "pron."
      ],
      [
        "nobody",
        "ไม่มีใคร",
        "Nobody knew the answer to that riddle.",
        "pron."
      ],
      [
        "north",
        "adj. ทางเหนือ; adv. ไปทางเหนือ; n. ทิศเหนือ",
        "Cold winds blow down from the north.",
        "adj., adv., n."
      ],
      [
        "nose",
        "จมูก",
        "She rubbed her cold nose in the wind.",
        "n."
      ],
      [
        "not",
        "ไม่",
        "I am not ready to leave the house.",
        "adv."
      ],
      [
        "note",
        "n. บันทึกย่อ, ธนบัตร; v. จดบันทึก, สังเกต",
        "She left a short note on my desk.",
        "n., v."
      ],
      [
        "nothing",
        "ไม่มีอะไร",
        "There is nothing inside this cardboard box.",
        "pron."
      ],
      [
        "November",
        "เดือนพฤศจิกายน",
        "The weather usually gets cooler here in November.",
        "n."
      ],
      [
        "now",
        "adv. ตอนนี้, เดี๋ยวนี้; conj. ในเมื่อ, เนื่องจากตอนนี้",
        "We should head home right now before dark.",
        "adv., conj."
      ],
      [
        "number",
        "n. ตัวเลข, จำนวน, หมายเลข; v. ใส่หมายเลข, นับจำนวน",
        "Please write your phone number at the bottom.",
        "n., v."
      ],
      [
        "nurse",
        "พยาบาล",
        "The nurse checked my temperature with a smile.",
        "n."
      ],
      [
        "o'clock",
        "นาฬิกา, โมง",
        "Let us meet at three o'clock outside.",
        "adv."
      ],
      [
        "object",
        "n. วัตถุ, สิ่งของ, กรรม; v. คัดค้าน, ไม่เห็นด้วย",
        "A small shiny object lay on the floor.",
        "n., v."
      ],
      [
        "October",
        "เดือนตุลาคม",
        "School starts its second term in October.",
        "n."
      ],
      [
        "of",
        "ของ, แห่ง, เกี่ยวกับ",
        "A cup of hot tea sounds wonderful now.",
        "prep."
      ],
      [
        "off",
        "adv. ออกไป, ปิด; prep. ออกจาก, พ้นจาก",
        "Please turn off the lights before leaving.",
        "adv., prep."
      ],
      [
        "office",
        "สำนักงาน, ที่ทำงาน",
        "She arrives at her office before eight.",
        "n."
      ],
      [
        "often",
        "บ่อยๆ, เป็นประจำ",
        "We often cook dinner together on Friday nights.",
        "adv."
      ],
      [
        "oh",
        "โอ้, อ้าว",
        "Oh, I forgot to bring my umbrella today!",
        "excl."
      ],
      [
        "OK",
        "adj. ดี, พอใช้ได้, ตกลง; adv. อย่างดี, ได้; excl. ตกลง, ได้เลย",
        "Everything looks OK, so we can start.",
        "adj., adv., excl."
      ],
      [
        "old",
        "แก่, เก่า, อายุ",
        "That old wooden bridge still looks very strong.",
        "adj."
      ],
      [
        "on",
        "adv. ต่อ, เปิดอยู่; prep. บน, ในวัน, เกี่ยวกับ",
        "Put the fresh fruit on the plate.",
        "adv., prep."
      ],
      [
        "once",
        "adv. ครั้งหนึ่ง, เคย; conj. ทันทีที่, เมื่อ",
        "I visit my hometown once every year.",
        "adv., conj."
      ],
      [
        "one",
        "det. หนึ่ง, อันหนึ่ง; num. หนึ่ง; pron. หนึ่งอัน, คนหนึ่ง",
        "Only one seat remained near the window.",
        "det., num., pron."
      ],
      [
        "onion",
        "หัวหอม, หอมใหญ่",
        "Chop one small onion for the soup.",
        "n."
      ],
      [
        "online",
        "adj. ออนไลน์; adv. ทางออนไลน์, ผ่านอินเทอร์เน็ต",
        "You can order fresh groceries online anytime.",
        "adj., adv."
      ],
      [
        "only",
        "adj. เพียงหนึ่งเดียว, เท่านั้น; adv. เท่านั้น, แค่",
        "She was the only person in the room.",
        "adj., adv."
      ],
      [
        "open",
        "adj. เปิด, เปิดกว้าง; v. เปิด",
        "Please open the window for fresh air.",
        "adj., v."
      ],
      [
        "opinion",
        "ความคิดเห็น, ความเห็น",
        "Everyone shared an honest opinion during the talk.",
        "n."
      ],
      [
        "opposite",
        "adj. ตรงข้าม; adv. ฝั่งตรงข้าม; n. สิ่งตรงข้าม; prep. ตรงข้ามกับ",
        "The cafe sits opposite the city park.",
        "adj., adv., n., prep."
      ],
      [
        "or",
        "หรือ, มิฉะนั้น",
        "Would you prefer coffee or green tea?",
        "conj."
      ],
      [
        "orange",
        "adj. สีส้ม; n. ส้ม, สีส้ม",
        "She peeled a sweet orange after lunch.",
        "adj., n."
      ],
      [
        "order",
        "n. คำสั่ง, ลำดับ, การสั่งซื้อ; v. สั่ง, สั่งซื้อ, จัดเรียง",
        "Ready to order some lunch from the menu?",
        "n., v."
      ],
      [
        "other",
        "adj. อื่น, อีก; pron. อีกอัน, คนอื่น",
        "My other shoes are in the closet.",
        "adj., pron."
      ],
      [
        "our",
        "ของเรา",
        "Our flight leaves early tomorrow morning.",
        "det."
      ],
      [
        "out",
        "adv. ข้างนอก, ออกไป, หมด; prep. ออกจาก",
        "Let us go out for dinner tonight.",
        "adv., prep."
      ],
      [
        "outside",
        "adv. ข้างนอก; adj. ภายนอก; n. ด้านนอก; prep. นอก, ข้างนอก",
        "The children are playing outside in the yard.",
        "adv., adj., n., prep."
      ],
      [
        "over",
        "adv. เหนือ, จบลง, ข้ามไป; prep. เหนือ, ตลอด, เกิน",
        "A small bird flew over the tall wall.",
        "adv., prep."
      ],
      [
        "own",
        "adj. ของตัวเอง; pron. ของตนเอง; v. เป็นเจ้าของ",
        "She wants to own a small bookshop.",
        "adj., pron., v."
      ],
      [
        "page",
        "หน้ากระดาษ, หน้าเว็บ",
        "Please turn to page twelve in your book.",
        "n."
      ],
      [
        "paint",
        "n. สีทา; v. ทาสี, วาดภาพสี",
        "We plan to paint the bedroom walls blue.",
        "n., v."
      ],
      [
        "painting",
        "ภาพวาด, การวาดภาพ, การทาสี",
        "That colourful painting hangs above the sofa.",
        "n."
      ],
      [
        "pair",
        "คู่",
        "I need a new pair of running shoes.",
        "n."
      ],
      [
        "paper",
        "กระดาษ, หนังสือพิมพ์, เอกสาร",
        "Do you have a sheet of blank paper?",
        "n."
      ],
      [
        "paragraph",
        "ย่อหน้า",
        "Read the first paragraph carefully before answering.",
        "n."
      ],
      [
        "parent",
        "พ่อแม่, ผู้ปกครอง",
        "Every parent wants their child to stay healthy.",
        "n."
      ],
      [
        "park",
        "n. สวนสาธารณะ; v. จอดรถ",
        "You can park your car behind the building.",
        "n., v."
      ],
      [
        "part",
        "ส่วน, บทบาท, อะไหล่",
        "That funny part made the whole room laugh.",
        "n."
      ],
      [
        "partner",
        "คู่หู, หุ้นส่วน, คู่ชีวิต",
        "Find a partner to practise this dialogue with.",
        "n."
      ],
      [
        "party",
        "งานเลี้ยง, พรรคการเมือง, ฝ่าย",
        "Are you coming to Sara's birthday party?",
        "n."
      ],
      [
        "passport",
        "หนังสือเดินทาง, พาสปอร์ต",
        "Check your passport before heading to the airport.",
        "n."
      ],
      [
        "past",
        "adj. ที่ผ่านมา, อดีต; n. อดีต; prep. ผ่าน, เลย; adv. ผ่านไป",
        "In the past, people wrote letters by hand.",
        "adj., n., prep., adv."
      ],
      [
        "pay",
        "v. จ่าย, ชำระเงิน; n. ค่าจ้าง, เงินเดือน",
        "Can I pay by card at this counter?",
        "v., n."
      ],
      [
        "pen",
        "ปากกา",
        "Could I borrow your blue pen for a second?",
        "n."
      ],
      [
        "pencil",
        "ดินสอ",
        "Draw the outline lightly with a sharp pencil.",
        "n."
      ],
      [
        "people",
        "ผู้คน, ประชาชน",
        "Many people enjoy walking here in the evening.",
        "n."
      ],
      [
        "pepper",
        "พริกไทย, พริกหยวก",
        "Add a pinch of black pepper to the dish.",
        "n."
      ],
      [
        "perfect",
        "สมบูรณ์แบบ, ยอดเยี่ยม",
        "Today is a perfect day for a picnic.",
        "adj."
      ],
      [
        "period",
        "ช่วงเวลา, คาบเรียน, ยุคสมัย",
        "That was a busy period at our office.",
        "n."
      ],
      [
        "person",
        "บุคคล, คน",
        "He is a very kind and helpful person.",
        "n."
      ],
      [
        "personal",
        "ส่วนตัว, ส่วนบุคคล",
        "Never share your personal passwords with strangers.",
        "adj."
      ],
      [
        "phone",
        "n. โทรศัพท์; v. โทรศัพท์หา",
        "My phone battery ran out before lunch.",
        "n., v."
      ],
      [
        "photo",
        "รูปถ่าย, ภาพถ่าย",
        "Let us take a quick photo together here.",
        "n."
      ],
      [
        "photograph",
        "n. ภาพถ่าย; v. ถ่ายภาพ",
        "She framed an old photograph of her grandparents.",
        "n., v."
      ],
      [
        "phrase",
        "วลี, สำนวน",
        "Learn this useful phrase before your trip abroad.",
        "n."
      ],
      [
        "piano",
        "เปียโน",
        "He learned to play the piano as a child.",
        "n."
      ],
      [
        "picture",
        "n. รูปภาพ, ภาพยนตร์; v. นึกภาพ, วาดภาพ",
        "The child drew a bright picture of a house.",
        "n., v."
      ],
      [
        "piece",
        "ชิ้น, แผ่น, ท่อน",
        "Would you like another piece of chocolate cake?",
        "n."
      ],
      [
        "pig",
        "หมู",
        "The pink pig slept peacefully in the barn.",
        "n."
      ],
      [
        "pink",
        "adj. สีชมพู; n. สีชมพู",
        "She chose a pale pink ribbon for the gift.",
        "adj., n."
      ],
      [
        "pizza",
        "พิซซ่า",
        "We ordered a large cheese pizza for dinner.",
        "n."
      ],
      [
        "place",
        "n. สถานที่, ตำแหน่ง; v. วาง, จัดวาง",
        "This quiet cafe is my favourite place to read.",
        "n., v."
      ],
      [
        "plan",
        "n. แผนการ, ผัง; v. วางแผน",
        "Let us discuss our weekend plan over dinner.",
        "n., v."
      ],
      [
        "plane",
        "เครื่องบิน, ระนาบ",
        "Our plane landed smoothly despite the heavy rain.",
        "n."
      ],
      [
        "plant",
        "n. พืช, ต้นไม้, โรงงาน; v. ปลูก",
        "Water the green plant near the sunny window.",
        "n., v."
      ],
      [
        "play",
        "n. การเล่น, ละครเวที; v. เล่น, แสดง",
        "The kids love to play soccer after school.",
        "n., v."
      ],
      [
        "player",
        "ผู้เล่น, นักกีฬา, เครื่องเล่น",
        "Every player shook hands after the final match.",
        "n."
      ],
      [
        "please",
        "excl. กรุณา, ได้โปรด; v. ทำให้พอใจ",
        "Could you please pass the salt over here?",
        "excl., v."
      ],
      [
        "point",
        "n. จุด, ประเด็น, คะแนน; v. ชี้, ชี้แนะ",
        "You raised a very good point just now.",
        "n., v."
      ]
    ]
  },
  {
    "id": "ox-a1-7",
    "label": "A1 Words · 7 (police–skirt)",
    "deck": "Oxford · A1 · 7",
    "cards": [
      [
        "police",
        "ตำรวจ",
        "The police directed traffic around the roadworks.",
        "n."
      ],
      [
        "pool",
        "สระน้ำ, สระว่ายน้ำ, กองรวม",
        "The hotel has a clean pool on the roof.",
        "n."
      ],
      [
        "poor",
        "ยากจน, น่าสงสาร, แย่",
        "The poor dog looked hungry in the rain.",
        "adj."
      ],
      [
        "popular",
        "เป็นที่นิยม, แพร่หลาย",
        "That noodle shop is very popular with students.",
        "adj."
      ],
      [
        "positive",
        "adj. เชิงบวก, มั่นใจ, แน่นอน; n. ผลบวก, ข้อดี",
        "She always keeps a positive attitude at work.",
        "adj., n."
      ],
      [
        "possible",
        "เป็นไปได้",
        "Please reply as soon as possible today.",
        "adj."
      ],
      [
        "post",
        "n. ไปรษณีย์, โพสต์, เสา; v. ส่งไปรษณีย์, โพสต์",
        "Did you see his funny post this morning?",
        "n., v."
      ],
      [
        "potato",
        "มันฝรั่ง",
        "Bake the potato until it feels soft inside.",
        "n."
      ],
      [
        "pound",
        "เงินปอนด์, หน่วยน้ำหนักปอนด์",
        "This loaf of bread costs just one pound.",
        "n."
      ],
      [
        "practice",
        "การฝึกฝน, การปฏิบัติ",
        "Daily speaking practice will improve your confidence.",
        "n."
      ],
      [
        "practise",
        "ฝึกฝน, ซ้อม",
        "I try to practise English words every morning.",
        "v."
      ],
      [
        "prefer",
        "ชอบมากกว่า, เลือกมากกว่า",
        "I prefer walking to taking the crowded bus.",
        "v."
      ],
      [
        "prepare",
        "เตรียม, จัดเตรียม",
        "We need to prepare lunch before noon.",
        "v."
      ],
      [
        "present",
        "adj. ปัจจุบัน, อยู่ ณ ที่นี้; n. ของขวัญ, ปัจจุบัน; v. นำเสนอ, มอบให้",
        "She wrapped a small present for her friend.",
        "adj., n., v."
      ],
      [
        "pretty",
        "adj. น่ารัก, สวยงาม; adv. ค่อนข้าง",
        "The garden looks pretty with all those flowers.",
        "adj., adv."
      ],
      [
        "price",
        "n. ราคา; v. ตั้งราคา, ประเมินราคา",
        "Check the price tag before going to pay.",
        "n., v."
      ],
      [
        "probably",
        "น่าจะ, บางที",
        "It will probably rain later this afternoon.",
        "adv."
      ],
      [
        "problem",
        "ปัญหา, โจทย์",
        "Let me know if you have any problem.",
        "n."
      ],
      [
        "product",
        "ผลิตภัณฑ์, สินค้า, ผลลัพธ์",
        "This new product saves time in the kitchen.",
        "n."
      ],
      [
        "programme",
        "รายการ, โครงการ, โปรแกรม",
        "My parents watch that cooking programme every night.",
        "n."
      ],
      [
        "project",
        "n. โครงการ, งานวิจัย; v. ฉายภาพ, คาดการณ์",
        "Our team finished the design project on time.",
        "n., v."
      ],
      [
        "purple",
        "adj. สีม่วง; n. สีม่วง",
        "He wore a bright purple tie to work.",
        "adj., n."
      ],
      [
        "put",
        "วาง, ใส่, เก็บ",
        "Please put the clean dishes in the cupboard.",
        "v."
      ],
      [
        "quarter",
        "หนึ่งในสี่, สิบห้านาที, ย่าน",
        "Wait a quarter of an hour for me.",
        "n."
      ],
      [
        "question",
        "n. คำถาม, ข้อสงสัย; v. ซักถาม, ตั้งข้อสงสัย",
        "Raise your hand if you have a question.",
        "n., v."
      ],
      [
        "quick",
        "เร็ว, รวดเร็ว, ฉับไว",
        "Let us grab a quick bite before class.",
        "adj."
      ],
      [
        "quickly",
        "อย่างรวดเร็ว",
        "She packed her bag quickly and ran outside.",
        "adv."
      ],
      [
        "quiet",
        "เงียบ, สงบ",
        "The reading room is always clean and quiet.",
        "adj."
      ],
      [
        "quite",
        "ค่อนข้าง, ทีเดียว",
        "The soup tasted quite good despite being simple.",
        "adv."
      ],
      [
        "radio",
        "วิทยุ",
        "Dad listens to the radio while driving.",
        "n."
      ],
      [
        "rain",
        "n. ฝน; v. ฝนตก",
        "Bring an umbrella because heavy rain is coming.",
        "n., v."
      ],
      [
        "read",
        "อ่าน",
        "I like to read a chapter before bed.",
        "v."
      ],
      [
        "reader",
        "ผู้อ่าน, นักอ่าน",
        "She has been an avid reader since childhood.",
        "n."
      ],
      [
        "reading",
        "การอ่าน, หนังสืออ่าน",
        "Quiet reading helps me relax after work.",
        "n."
      ],
      [
        "ready",
        "พร้อม",
        "Dinner is ready on the dining table now.",
        "adj."
      ],
      [
        "real",
        "จริง, ของแท้",
        "Are those flowers real or made of silk?",
        "adj."
      ],
      [
        "really",
        "จริงๆ, อย่างมาก",
        "I really enjoyed meeting your family yesterday.",
        "adv."
      ],
      [
        "reason",
        "เหตุผล, สาเหตุ",
        "There is a good reason for this delay.",
        "n."
      ],
      [
        "red",
        "adj. สีแดง; n. สีแดง",
        "Stop the car when the light turns red.",
        "adj., n."
      ],
      [
        "relax",
        "ผ่อนคลาย, พักผ่อน",
        "Take a warm bath to relax your muscles.",
        "v."
      ],
      [
        "remember",
        "จำได้, นึกออก, ระลึกถึง",
        "I cannot remember where I parked the car.",
        "v."
      ],
      [
        "repeat",
        "v. พูดซ้ำ, ทำซ้ำ; n. การทำซ้ำ, รายการซ้ำ",
        "Could you please repeat your email address slowly?",
        "v., n."
      ],
      [
        "report",
        "n. รายงาน; v. รายงาน, แจ้งความ",
        "He wrote a clear report for his manager.",
        "n., v."
      ],
      [
        "restaurant",
        "ร้านอาหาร, ภัตตาคาร",
        "That Thai restaurant serves great food at noon.",
        "n."
      ],
      [
        "result",
        "n. ผลลัพธ์, ผลการสอบ; v. ส่งผล, เกิดจาก",
        "Everyone waited nervously for the final test result.",
        "n., v."
      ],
      [
        "return",
        "n. การกลับมา, การส่งคืน; v. กลับ, ส่งคืน",
        "Please return the library books by Friday.",
        "n., v."
      ],
      [
        "rice",
        "ข้าว",
        "Steamed jasmine rice goes well with spicy curry.",
        "n."
      ],
      [
        "rich",
        "ร่ำรวย, อุดมสมบูรณ์, เข้มข้น",
        "Oranges are rich in vitamin C and fibre.",
        "adj."
      ],
      [
        "ride",
        "v. ขี่, โดยสาร; n. การขี่, การนั่งรถ",
        "She likes to ride her bike to work.",
        "v., n."
      ],
      [
        "right",
        "adj. ถูกต้อง, ด้านขวา; adv. อย่างถูกต้อง, ทางขวา, ทันที; n. ด้านขวา, สิทธิ",
        "Turn right at the traffic light ahead.",
        "adj., adv., n."
      ],
      [
        "river",
        "แม่น้ำ",
        "Small boats sailed slowly down the wide river.",
        "n."
      ],
      [
        "road",
        "ถนน, เส้นทาง",
        "Look both ways before crossing the busy road.",
        "n."
      ],
      [
        "room",
        "ห้อง, พื้นที่ว่าง",
        "This bright room has a lovely garden view.",
        "n."
      ],
      [
        "routine",
        "n. กิจวัตรประจำวัน; adj. ตามปกติ, ประจำ",
        "Morning exercise is part of my daily routine.",
        "n., adj."
      ],
      [
        "rule",
        "n. กฎ, ระเบียบ; v. ปกครอง, ตัดสิน",
        "Every player must follow the basic safety rule.",
        "n., v."
      ],
      [
        "run",
        "v. วิ่ง, ดำเนินกิจการ, ไหล; n. การวิ่ง",
        "I go for a short run every morning.",
        "v., n."
      ],
      [
        "sad",
        "เศร้า, เสียใจ",
        "The ending of that film made everyone sad.",
        "adj."
      ],
      [
        "salad",
        "สลัด",
        "She made a fresh green salad for lunch.",
        "n."
      ],
      [
        "salt",
        "เกลือ",
        "Do not add too much salt to soup.",
        "n."
      ],
      [
        "same",
        "adj. เหมือนกัน, เดียวกัน; adv. แบบเดียวกัน; pron. สิ่งเดียวกัน",
        "Both sisters go to the same high school.",
        "adj., adv., pron."
      ],
      [
        "sandwich",
        "แซนด์วิช",
        "He packed a cheese sandwich for the trip.",
        "n."
      ],
      [
        "Saturday",
        "วันเสาร์",
        "The farmers market opens early every Saturday.",
        "n."
      ],
      [
        "say",
        "พูด, กล่าว, บอก",
        "What did the teacher say about our homework?",
        "v."
      ],
      [
        "school",
        "โรงเรียน",
        "Children walk to school together along this street.",
        "n."
      ],
      [
        "science",
        "วิทยาศาสตร์",
        "Science helps us understand how the world works.",
        "n."
      ],
      [
        "scientist",
        "นักวิทยาศาสตร์",
        "The scientist studied the stars through a telescope.",
        "n."
      ],
      [
        "sea",
        "ทะเล",
        "We could hear the waves from the sea.",
        "n."
      ],
      [
        "second",
        "det. ที่สอง; n. วินาที; ord. ลำดับที่สอง; adv. เป็นอันดับสอง",
        "Her office is on the second floor.",
        "det., n., ord., adv."
      ],
      [
        "section",
        "ส่วน, แผนก, ตอน",
        "Read the sports section of the paper first.",
        "n."
      ],
      [
        "see",
        "เห็น, พบ, เข้าใจ",
        "I can see the mountains from my balcony.",
        "v."
      ],
      [
        "sell",
        "ขาย",
        "They sell fresh fruit at the corner stall.",
        "v."
      ],
      [
        "send",
        "ส่ง",
        "Please send me the document before five.",
        "v."
      ],
      [
        "sentence",
        "n. ประโยค, คำพิพากษา; v. ตัดสินลงโทษ",
        "Write one clear sentence using this new word.",
        "n., v."
      ],
      [
        "September",
        "เดือนกันยายน",
        "Leaves start turning yellow in late September.",
        "n."
      ],
      [
        "seven",
        "เจ็ด",
        "My alarm rings at seven every weekday morning.",
        "num."
      ],
      [
        "seventeen",
        "สิบเจ็ด",
        "There are seventeen students in our art class.",
        "num."
      ],
      [
        "seventy",
        "เจ็ดสิบ",
        "The train travelled at seventy miles per hour.",
        "num."
      ],
      [
        "share",
        "v. แบ่งปัน, ใช้ร่วมกัน; n. ส่วนแบ่ง, หุ้น",
        "Let us share this plate of dumplings together.",
        "v., n."
      ],
      [
        "she",
        "เธอ, หล่อน",
        "She smiled warmly when she opened the door.",
        "pron."
      ],
      [
        "sheep",
        "แกะ",
        "White sheep were grazing quietly on the hill.",
        "n."
      ],
      [
        "shirt",
        "เสื้อเชิ้ต",
        "He ironed his white shirt before the interview.",
        "n."
      ],
      [
        "shoe",
        "รองเท้า",
        "One brown shoe is missing from the rack.",
        "n."
      ],
      [
        "shop",
        "n. ร้านค้า; v. ซื้อของ, จับจ่าย",
        "That little shop sells handmade bread and jam.",
        "n., v."
      ],
      [
        "shopping",
        "การซื้อของ, ของที่ซื้อมา",
        "We did our weekly shopping on Sunday morning.",
        "n."
      ],
      [
        "short",
        "สั้น, เตี้ย",
        "It is a short walk from here downtown.",
        "adj."
      ],
      [
        "should",
        "ควร, น่าจะ",
        "You should drink plenty of water in summer.",
        "modal v."
      ],
      [
        "show",
        "n. การแสดง, รายการ; v. แสดง, ชี้ให้ดู",
        "Please show your ticket at the entrance gate.",
        "n., v."
      ],
      [
        "shower",
        "ฝักบัว, การอาบน้ำ, ฝนโปรย",
        "I always take a quick shower after jogging.",
        "n."
      ],
      [
        "sick",
        "ป่วย, ไม่สบาย, คลื่นไส้",
        "Stay home and rest if you feel sick.",
        "adj."
      ],
      [
        "similar",
        "คล้ายกัน, คล้ายคลึง",
        "Our jackets look quite similar from a distance.",
        "adj."
      ],
      [
        "sing",
        "ร้องเพลง",
        "The birds sing outside my window every dawn.",
        "v."
      ],
      [
        "singer",
        "นักร้อง",
        "The singer thanked the crowd after the concert.",
        "n."
      ],
      [
        "sister",
        "พี่สาว, น้องสาว",
        "My older sister teaches math at a school.",
        "n."
      ],
      [
        "sit",
        "นั่ง",
        "Come sit next to me by the fire.",
        "v."
      ],
      [
        "situation",
        "สถานการณ์, สภาพการณ์",
        "Stay calm and think through the situation clearly.",
        "n."
      ],
      [
        "six",
        "หก",
        "We usually eat dinner around six in winter.",
        "num."
      ],
      [
        "sixteen",
        "สิบหก",
        "Our building has sixteen apartments on four floors.",
        "num."
      ],
      [
        "sixty",
        "หกสิบ",
        "There are sixty minutes in every single hour.",
        "num."
      ],
      [
        "skill",
        "ทักษะ, ความชำนาญ",
        "Cooking is a useful skill for everyone.",
        "n."
      ],
      [
        "skirt",
        "กระโปรง",
        "She bought a dark blue skirt for work.",
        "n."
      ]
    ]
  },
  {
    "id": "ox-a1-8",
    "label": "A1 Words · 8 (sleep–together)",
    "deck": "Oxford · A1 · 8",
    "cards": [
      [
        "sleep",
        "v. นอนหลับ; n. การนอนหลับ",
        "Most adults need seven hours of sleep nightly.",
        "v., n."
      ],
      [
        "slow",
        "adj. ช้า; v. ชะลอ, ทำให้ช้าลง",
        "The morning train is quite slow today.",
        "adj., v."
      ],
      [
        "small",
        "เล็ก, น้อย",
        "They live in a small house near town.",
        "adj."
      ],
      [
        "snake",
        "งู",
        "A green snake slid quickly into the grass.",
        "n."
      ],
      [
        "snow",
        "n. หิมะ; v. หิมะตก",
        "Soft white snow covered the rooftops overnight.",
        "n., v."
      ],
      [
        "so",
        "adv. มาก, เช่นนั้น; conj. ดังนั้น, เพื่อที่จะ",
        "It got dark early, so we walked home.",
        "adv., conj."
      ],
      [
        "some",
        "det. บ้าง, บางส่วน, จำนวนหนึ่ง; pron. บางคน, บางส่วน",
        "Would you like some water with your meal?",
        "det., pron."
      ],
      [
        "somebody",
        "ใครบางคน",
        "Somebody left a blue umbrella by the door.",
        "pron."
      ],
      [
        "someone",
        "ใครบางคน",
        "Someone called for you while you were out.",
        "pron."
      ],
      [
        "something",
        "บางสิ่งบางอย่าง",
        "I want to eat something warm and spicy.",
        "pron."
      ],
      [
        "sometimes",
        "บางครั้ง, บางเวลา",
        "We sometimes go cycling along the river path.",
        "adv."
      ],
      [
        "son",
        "ลูกชาย",
        "Their young son loves building wooden toy trains.",
        "n."
      ],
      [
        "song",
        "เพลง",
        "Everyone sang along to the final cheerful song.",
        "n."
      ],
      [
        "soon",
        "เร็วๆ นี้, อีกไม่นาน",
        "The bus should arrive here very soon.",
        "adv."
      ],
      [
        "sorry",
        "adj. เสียใจ, ขอโทษ; excl. ขอโทษ, เสียใจด้วย",
        "I am really sorry for arriving so late.",
        "adj., excl."
      ],
      [
        "sound",
        "n. เสียง; v. ฟังดู, ส่งเสียง",
        "Your idea does sound very practical to me.",
        "n., v."
      ],
      [
        "soup",
        "ซุป, แกงจืด",
        "Hot chicken soup feels comforting on cold days.",
        "n."
      ],
      [
        "south",
        "adj. ทางใต้; adv. ไปทางใต้; n. ทิศใต้",
        "Birds often fly south before winter arrives.",
        "adj., adv., n."
      ],
      [
        "space",
        "พื้นที่, ช่องว่าง, อวกาศ",
        "Is there enough space for another chair here?",
        "n."
      ],
      [
        "speak",
        "พูด, สนทนา",
        "Can anyone here speak Japanese or Korean?",
        "v."
      ],
      [
        "special",
        "พิเศษ, เฉพาะ",
        "We saved this cake for a special occasion.",
        "adj."
      ],
      [
        "spell",
        "สะกดคำ",
        "How do you spell your family name?",
        "v."
      ],
      [
        "spelling",
        "การสะกดคำ, ตัวสะกด",
        "Always check your spelling before sending an email.",
        "n."
      ],
      [
        "spend",
        "ใช้จ่าย, ใช้เวลา",
        "I love to spend Sunday mornings reading quietly.",
        "v."
      ],
      [
        "sport",
        "กีฬา",
        "Swimming is my favourite sport in hot weather.",
        "n."
      ],
      [
        "spring",
        "n. ฤดูใบไม้ผลิ, สปริง, น้ำพุ; v. กระโดด, เด้ง",
        "Trees blossom with bright flowers every spring.",
        "n., v."
      ],
      [
        "stand",
        "v. ยืน, ทนได้; n. แผงขายของ, จุดยืน",
        "Please stand behind the yellow line while waiting.",
        "v., n."
      ],
      [
        "star",
        "n. ดาว, ดารา; v. แสดงนำ, ทำเครื่องหมายดาว",
        "One bright star shone clearly in the sky.",
        "n., v."
      ],
      [
        "start",
        "v. เริ่ม, เริ่มต้น; n. จุดเริ่มต้น, การเริ่มต้น",
        "The concert will start at eight tonight.",
        "v., n."
      ],
      [
        "statement",
        "คำแถลง, ข้อความ, รายการเดินบัญชี",
        "Read each statement carefully and mark true or false.",
        "n."
      ],
      [
        "station",
        "สถานี",
        "Meet me outside the main train station entrance.",
        "n."
      ],
      [
        "stay",
        "v. อยู่, พักอาศัย; n. การพักอยู่",
        "We will stay at a small hotel downtown.",
        "v., n."
      ],
      [
        "still",
        "adv. ยังคง, ยัง; adj. นิ่ง, สงบ",
        "Are you still working on that long report?",
        "adv., adj."
      ],
      [
        "stop",
        "n. ป้ายจอด, การหยุด; v. หยุด, เลิก",
        "The bus stop is right across the street.",
        "n., v."
      ],
      [
        "story",
        "เรื่องราว, นิทาน, ข่าว",
        "Grandpa told us an exciting story before bed.",
        "n."
      ],
      [
        "street",
        "ถนน",
        "Our new office is on a quiet street.",
        "n."
      ],
      [
        "strong",
        "แข็งแรง, เข้มแข็ง, เข้มข้น",
        "She prefers strong black coffee in the morning.",
        "adj."
      ],
      [
        "student",
        "นักเรียน, นักศึกษา",
        "Every student received a free notebook on Monday.",
        "n."
      ],
      [
        "study",
        "n. การเรียน, การศึกษา, ห้องทำงาน; v. เรียน, ศึกษา",
        "I need to study hard for tomorrow's exam.",
        "n., v."
      ],
      [
        "style",
        "สไตล์, รูปแบบ, แนวทาง",
        "I really admire her simple and neat style.",
        "n."
      ],
      [
        "subject",
        "n. วิชา, หัวข้อ, ประธาน; adj. อยู่ภายใต้, มีแนวโน้ม",
        "History was always my favourite subject at school.",
        "n., adj."
      ],
      [
        "success",
        "ความสำเร็จ",
        "Hard work and patience often bring great success.",
        "n."
      ],
      [
        "sugar",
        "น้ำตาล",
        "Would you like sugar in your iced tea?",
        "n."
      ],
      [
        "summer",
        "ฤดูร้อน",
        "We usually travel to the coast every summer.",
        "n."
      ],
      [
        "sun",
        "ดวงอาทิตย์, แสงแดด",
        "The warm sun felt wonderful on my face.",
        "n."
      ],
      [
        "Sunday",
        "วันอาทิตย์",
        "Our whole family eats lunch together on Sunday.",
        "n."
      ],
      [
        "sunny",
        "มีแดดจัด, แจ่มใส",
        "It looks bright and sunny outside this morning.",
        "adj."
      ],
      [
        "supermarket",
        "ซูเปอร์มาร์เก็ต",
        "I stopped by the supermarket for fresh milk.",
        "n."
      ],
      [
        "sure",
        "adj. แน่ใจ, มั่นใจ; adv. แน่นอน, ได้เลย",
        "Are you sure we locked the front door?",
        "adj., adv."
      ],
      [
        "sweater",
        "เสื้อกันหนาวไหมพรม",
        "Put on a thick sweater before going outside.",
        "n."
      ],
      [
        "swim",
        "v. ว่ายน้ำ; n. การว่ายน้ำ",
        "Let us swim for thirty minutes before breakfast.",
        "v., n."
      ],
      [
        "swimming",
        "การว่ายน้ำ, กีฬาว่ายน้ำ",
        "Regular swimming is gentle on your knees.",
        "n."
      ],
      [
        "T-shirt",
        "เสื้อยืด",
        "He wore a clean white T-shirt under his jacket.",
        "n."
      ],
      [
        "table",
        "โต๊ะ, ตาราง",
        "Set the warm bowls down on the table.",
        "n."
      ],
      [
        "take",
        "เอา, พา, หยิบ, ใช้เวลา",
        "Take an umbrella just in case it rains.",
        "v."
      ],
      [
        "talk",
        "v. พูดคุย, สนทนา; n. การพูดคุย, การบรรยาย",
        "We need to talk about next week's schedule.",
        "v., n."
      ],
      [
        "tall",
        "สูง",
        "That tall tree gives shade to the house.",
        "adj."
      ],
      [
        "taxi",
        "รถแท็กซี่",
        "We took a taxi because we were late.",
        "n."
      ],
      [
        "tea",
        "ชา, น้ำชา",
        "She enjoys a cup of hot jasmine tea.",
        "n."
      ],
      [
        "teach",
        "สอน",
        "Can you teach me how to bake bread?",
        "v."
      ],
      [
        "teacher",
        "ครู, อาจารย์",
        "Our English teacher explained the rule very clearly.",
        "n."
      ],
      [
        "team",
        "ทีม, คณะทำงาน",
        "Our team won the regional match last night.",
        "n."
      ],
      [
        "teenager",
        "วัยรุ่น",
        "Every teenager wants a bit more independence sometimes.",
        "n."
      ],
      [
        "telephone",
        "n. โทรศัพท์; v. โทรศัพท์หา",
        "The office telephone rang three times this morning.",
        "n., v."
      ],
      [
        "television",
        "โทรทัศน์",
        "Turn down the television so I can study.",
        "n."
      ],
      [
        "tell",
        "บอก, เล่า",
        "Please tell me when the train arrives.",
        "v."
      ],
      [
        "ten",
        "สิบ",
        "The shop closes in just ten minutes.",
        "num."
      ],
      [
        "tennis",
        "เทนนิส",
        "They play tennis at the club every Tuesday.",
        "n."
      ],
      [
        "terrible",
        "แย่มาก, น่ากลัว, ร้ายแรง",
        "I had a terrible headache all afternoon yesterday.",
        "adj."
      ],
      [
        "test",
        "n. การทดสอบ, ข้อสอบ; v. ทดสอบ",
        "We have a short vocabulary test on Friday.",
        "n., v."
      ],
      [
        "text",
        "n. ข้อความ, ตัวบท; v. ส่งข้อความ",
        "Send me a text when you get home.",
        "n., v."
      ],
      [
        "than",
        "conj. กว่า; prep. กว่า, เมื่อเทียบกับ",
        "This jacket is warmer than my old coat.",
        "conj., prep."
      ],
      [
        "thank",
        "ขอบคุณ",
        "I must thank my neighbour for the help.",
        "v."
      ],
      [
        "thanks",
        "excl. ขอบคุณ; n. คำขอบคุณ",
        "Thanks so much for carrying those heavy bags.",
        "excl., n."
      ],
      [
        "that",
        "conj. ว่า, ที่; det. นั้น, โน้น; pron. สิ่งนั้น, ที่; adv. ขนาดนั้น",
        "I think that blue coat looks great on you.",
        "conj., det., pron., adv."
      ],
      [
        "the",
        "คำนำหน้านามชี้เฉพาะ",
        "Close the front door gently behind you.",
        "art."
      ],
      [
        "theatre",
        "โรงละคร, โรงภาพยนตร์",
        "We booked two front seats at the theatre.",
        "n."
      ],
      [
        "their",
        "ของพวกเขา",
        "Students left their backpacks near the gym door.",
        "det."
      ],
      [
        "them",
        "พวกเขา",
        "I invited them to join us for lunch.",
        "pron."
      ],
      [
        "then",
        "จากนั้น, แล้วก็, ตอนนั้น",
        "Wash the apples first, then slice them thinly.",
        "adv."
      ],
      [
        "there",
        "ที่นั่น, ตรงนั้น, มี",
        "Put the box over there on the shelf.",
        "adv."
      ],
      [
        "they",
        "พวกเขา",
        "They arrived early to help set up chairs.",
        "pron."
      ],
      [
        "thing",
        "สิ่งของ, เรื่อง, อย่าง",
        "Packing light is the best thing when travelling.",
        "n."
      ],
      [
        "think",
        "คิด, เชื่อ, รู้สึก",
        "What do you think about this new plan?",
        "v."
      ],
      [
        "third",
        "ord. ลำดับที่สาม; n. หนึ่งในสาม, วันที่สาม",
        "Our apartment is on the third floor.",
        "ord., n."
      ],
      [
        "thirsty",
        "กระหายน้ำ, หิวน้ำ",
        "I felt really thirsty after that long run.",
        "adj."
      ],
      [
        "thirteen",
        "สิบสาม",
        "Her cousin turned thirteen years old last week.",
        "num."
      ],
      [
        "thirty",
        "สามสิบ",
        "The oven needs thirty minutes to bake bread.",
        "num."
      ],
      [
        "this",
        "det. นี้; pron. สิ่งนี้, อันนี้; adv. ขนาดนี้",
        "This fresh bread smells amazing right now.",
        "det., pron., adv."
      ],
      [
        "thousand",
        "หนึ่งพัน, พัน",
        "Over a thousand runners joined the charity race.",
        "num."
      ],
      [
        "three",
        "สาม",
        "She bought three ripe mangoes at the market.",
        "num."
      ],
      [
        "through",
        "adv. ทะลุ, ตลอด, เสร็จสิ้น; prep. ผ่าน, ทะลุ, ตลอด",
        "A cool breeze blew through the open window.",
        "adv., prep."
      ],
      [
        "Thursday",
        "วันพฤหัสบดี",
        "Our weekly team meeting takes place every Thursday.",
        "n."
      ],
      [
        "ticket",
        "ตั๋ว, บัตร, ใบสั่ง",
        "Keep your train ticket until you exit.",
        "n."
      ],
      [
        "time",
        "n. เวลา, ครั้ง, ช่วงเวลา; v. จับเวลา, กำหนดเวลา",
        "What time does the next bus leave?",
        "n., v."
      ],
      [
        "tired",
        "เหนื่อย, อ่อนเพลีย, เบื่อหน่าย",
        "You look tired after working all day long.",
        "adj."
      ],
      [
        "title",
        "n. ชื่อเรื่อง, ตำแหน่ง, คำนำหน้า; v. ตั้งชื่อเรื่อง",
        "Do you remember the title of that novel?",
        "n., v."
      ],
      [
        "to",
        "inf. marker เพื่อ, ที่จะ; prep. ถึง, ไปยัง, ต่อ",
        "She likes to walk to the market.",
        "inf. marker, prep."
      ],
      [
        "today",
        "adv. วันนี้; n. วันนี้, ปัจจุบัน",
        "It feels much warmer outside today than yesterday.",
        "adv., n."
      ],
      [
        "together",
        "ด้วยกัน, ร่วมกัน",
        "Let us cook a nice meal together tonight.",
        "adv."
      ]
    ]
  },
  {
    "id": "ox-a1-9",
    "label": "A1 Words · 9 (toilet–yourself)",
    "deck": "Oxford · A1 · 9",
    "cards": [
      [
        "toilet",
        "ห้องน้ำ, โถส้วม",
        "Excuse me, where is the nearest public toilet?",
        "n."
      ],
      [
        "tomato",
        "มะเขือเทศ",
        "Slice one ripe tomato for the cheese sandwich.",
        "n."
      ],
      [
        "tomorrow",
        "adv. พรุ่งนี้; n. วันพรุ่งนี้",
        "We will visit the city museum tomorrow morning.",
        "adv., n."
      ],
      [
        "tonight",
        "adv. คืนนี้; n. คืนนี้",
        "Are you staying at home tonight or going out?",
        "adv., n."
      ],
      [
        "too",
        "ด้วย, เกินไป, มากเกินไป",
        "This hot tea is still too sweet for me.",
        "adv."
      ],
      [
        "tooth",
        "ฟัน",
        "One back tooth hurts when I chew ice.",
        "n."
      ],
      [
        "topic",
        "หัวข้อ, ประเด็น",
        "Choose an interesting topic for your short speech.",
        "n."
      ],
      [
        "tourist",
        "นักท่องเที่ยว",
        "A friendly tourist asked me for street directions.",
        "n."
      ],
      [
        "town",
        "เมือง, ตัวเมือง",
        "They moved to a peaceful coastal town.",
        "n."
      ],
      [
        "traffic",
        "การจราจร",
        "Heavy traffic slowed down our morning commute.",
        "n."
      ],
      [
        "train",
        "n. รถไฟ; v. ฝึกฝน, อบรม",
        "The express train leaves from platform three.",
        "n., v."
      ],
      [
        "travel",
        "n. การเดินทาง; v. เดินทาง, ท่องเที่ยว",
        "She loves to travel during the winter holidays.",
        "n., v."
      ],
      [
        "tree",
        "ต้นไม้",
        "An old mango tree grows beside the gate.",
        "n."
      ],
      [
        "trip",
        "n. การเดินทาง, ทริป; v. สะดุด",
        "We planned a weekend trip to the mountains.",
        "n., v."
      ],
      [
        "trousers",
        "กางเกงขายาว",
        "He wore neat grey trousers to the meeting.",
        "n."
      ],
      [
        "true",
        "จริง, แท้จริง, ถูกต้อง",
        "Is it true that the library closes early?",
        "adj."
      ],
      [
        "try",
        "v. พยายาม, ลอง; n. ความพยายาม, การลอง",
        "Let us try that new noodle place nearby.",
        "v., n."
      ],
      [
        "Tuesday",
        "วันอังคาร",
        "My piano lesson takes place every Tuesday afternoon.",
        "n."
      ],
      [
        "turn",
        "n. รอบ, การเลี้ยว, การเปลี่ยน; v. เลี้ยว, หมุน, กลายเป็น",
        "Wait for your turn at the ticket counter.",
        "n., v."
      ],
      [
        "TV",
        "โทรทัศน์, ทีวี",
        "Do not watch TV late on school nights.",
        "n."
      ],
      [
        "twelve",
        "สิบสอง",
        "A clock strikes twelve at noon and midnight.",
        "num."
      ],
      [
        "twenty",
        "ยี่สิบ",
        "There are twenty chairs inside the small classroom.",
        "num."
      ],
      [
        "twice",
        "สองครั้ง",
        "Brush your teeth at least twice every day.",
        "adv."
      ],
      [
        "two",
        "สอง",
        "Two cups of iced coffee, please.",
        "num."
      ],
      [
        "type",
        "n. ชนิด, ประเภท; v. พิมพ์ดีด, พิมพ์ข้อความ",
        "What type of music do you listen to?",
        "n., v."
      ],
      [
        "umbrella",
        "ร่ม",
        "Carry a folding umbrella during the rainy season.",
        "n."
      ],
      [
        "uncle",
        "ลุง, อาผู้ชาย, น้าผู้ชาย",
        "My uncle grows fresh vegetables in his garden.",
        "n."
      ],
      [
        "under",
        "adv. ข้างใต้, ต่ำกว่า; prep. ใต้, ภายใต้, น้อยกว่า",
        "The cat is sleeping under the wooden table.",
        "adv., prep."
      ],
      [
        "understand",
        "เข้าใจ",
        "I did not understand the last question clearly.",
        "v."
      ],
      [
        "university",
        "มหาวิทยาลัย",
        "Her brother studies engineering at a local university.",
        "n."
      ],
      [
        "until",
        "conj. จนกระทั่ง, กว่าที่; prep. จนถึง",
        "Stay inside until the heavy storm passes.",
        "conj., prep."
      ],
      [
        "up",
        "adv. ขึ้น, ข้างบน, ตื่น; prep. ขึ้นไปตาม",
        "Stand up and stretch your arms gently.",
        "adv., prep."
      ],
      [
        "upstairs",
        "adv. ขึ้นไปชั้นบน, อยู่ชั้นบน; adj. ชั้นบน",
        "My bedroom is upstairs at the end.",
        "adv., adj."
      ],
      [
        "us",
        "พวกเรา",
        "Join us for coffee after the class ends.",
        "pron."
      ],
      [
        "use",
        "v. ใช้, ใช้งาน; n. การใช้, ประโยชน์",
        "You can use this map to find stations.",
        "v., n."
      ],
      [
        "useful",
        "มีประโยชน์, ใช้งานได้จริง",
        "This pocket dictionary is very useful for learners.",
        "adj."
      ],
      [
        "usually",
        "โดยปกติ, มักจะ",
        "I usually drink a glass of water first.",
        "adv."
      ],
      [
        "vacation",
        "วันหยุดพักร้อน, การลาพักผ่อน",
        "Where are you going for your summer vacation?",
        "n."
      ],
      [
        "vegetable",
        "ผัก",
        "Eat at least one green vegetable every day.",
        "n."
      ],
      [
        "very",
        "adv. มาก, อย่างยิ่ง; adj. แท้จริง, เดียวกัน",
        "The street was very quiet early this morning.",
        "adv., adj."
      ],
      [
        "video",
        "วิดีโอ",
        "She sent a short video of her puppy.",
        "n."
      ],
      [
        "village",
        "หมู่บ้าน",
        "That quiet village sits beside a clear stream.",
        "n."
      ],
      [
        "visit",
        "n. การเยี่ยมเยียน, การไปเที่ยว; v. เยี่ยม, ไปเที่ยวชม",
        "We plan to visit our grandparents next Sunday.",
        "n., v."
      ],
      [
        "visitor",
        "ผู้มาเยือน, แขก, นักท่องเที่ยว",
        "Every visitor must sign in at reception first.",
        "n."
      ],
      [
        "wait",
        "v. รอ, คอย; n. การรอคอย",
        "Please wait here until I call your name.",
        "v., n."
      ],
      [
        "waiter",
        "พนักงานเสิร์ฟชาย",
        "The waiter brought fresh water to our table.",
        "n."
      ],
      [
        "wake",
        "ตื่น, ปลุก",
        "Try not to wake the baby right now.",
        "v."
      ],
      [
        "walk",
        "n. การเดิน, ทางเดิน; v. เดิน",
        "Let us walk along the river after dinner.",
        "n., v."
      ],
      [
        "wall",
        "กำแพง, ผนัง",
        "She hung a round clock on the wall.",
        "n."
      ],
      [
        "want",
        "ต้องการ, อยาก",
        "Do you want anything else from the shop?",
        "v."
      ],
      [
        "warm",
        "adj. อบอุ่น, อุ่น; v. อุ่น, ทำให้อุ่น",
        "Wear a warm scarf in the chilly wind.",
        "adj., v."
      ],
      [
        "wash",
        "v. ล้าง, ซัก; n. การล้าง, การซัก",
        "Always wash your hands before cooking a meal.",
        "v., n."
      ],
      [
        "watch",
        "n. นาฬิกาข้อมือ, การเฝ้าดู; v. ดู, เฝ้าดู",
        "Let us watch the sunset from the hill.",
        "n., v."
      ],
      [
        "water",
        "n. น้ำ; v. รดน้ำ",
        "Drink cool water when the weather feels hot.",
        "n., v."
      ],
      [
        "way",
        "n. ทาง, วิธีการ, ทิศทาง; adv. มาก, ไกล",
        "Could you show me the way to gate five?",
        "n., adv."
      ],
      [
        "we",
        "พวกเรา",
        "We always clean the kitchen right after cooking.",
        "pron."
      ],
      [
        "wear",
        "สวมใส่, ใส่",
        "People wear light cotton clothes in hot weather.",
        "v."
      ],
      [
        "weather",
        "สภาพอากาศ, อากาศ",
        "Check the weather forecast before leaving for camp.",
        "n."
      ],
      [
        "website",
        "เว็บไซต์",
        "You can check the timetable on their website.",
        "n."
      ],
      [
        "Wednesday",
        "วันพุธ",
        "The library stays open late every Wednesday evening.",
        "n."
      ],
      [
        "week",
        "สัปดาห์, อาทิตย์",
        "I will fly to Chiang Mai next week.",
        "n."
      ],
      [
        "weekend",
        "สุดสัปดาห์",
        "Have a relaxing weekend with your family!",
        "n."
      ],
      [
        "welcome",
        "adj. เป็นที่ต้อนรับ, ยินดี; excl. ยินดีต้อนรับ; v. ต้อนรับ; n. การต้อนรับ",
        "You are always welcome to visit our home.",
        "adj., excl., v., n."
      ],
      [
        "well",
        "adj. สบายดี, แข็งแรง; adv. อย่างดี, ดี; excl. เอ่อ, เอาล่ะ",
        "She speaks both Thai and English very well.",
        "adj., adv., excl."
      ],
      [
        "west",
        "adj. ทางตะวันตก; adv. ไปทางตะวันตก; n. ทิศตะวันตก",
        "The sun slowly sets in the far west.",
        "adj., adv., n."
      ],
      [
        "what",
        "det. อะไร, แบบไหน; pron. อะไร, สิ่งที่",
        "What kind of tea would you like now?",
        "det., pron."
      ],
      [
        "when",
        "adv. เมื่อไร; conj. เมื่อ, ตอนที่; pron. ตอนไหน",
        "Call me when you reach the bus stop.",
        "adv., conj., pron."
      ],
      [
        "where",
        "adv. ที่ไหน; conj. ที่ซึ่ง, ในที่ที่",
        "Where did you buy that lovely ceramic mug?",
        "adv., conj."
      ],
      [
        "which",
        "det. อันไหน, สิ่งไหน; pron. อันไหน, ซึ่ง",
        "Which jacket fits you better for the trip?",
        "det., pron."
      ],
      [
        "white",
        "adj. สีขาว; n. สีขาว, ไข่ขาว",
        "Fresh white clouds floated across the blue sky.",
        "adj., n."
      ],
      [
        "who",
        "ใคร, ผู้ที่",
        "Who left these red flowers on my desk?",
        "pron."
      ],
      [
        "why",
        "ทำไม, เหตุใด",
        "Why is the front gate still open today?",
        "adv."
      ],
      [
        "wife",
        "ภรรยา",
        "He bought fresh roses for his wife today.",
        "n."
      ],
      [
        "will",
        "modal v. จะ; n. ความมุ่งมั่น, พินัยกรรม",
        "I will call you back in ten minutes.",
        "modal v., n."
      ],
      [
        "win",
        "v. ชนะ, ได้รับ; n. ชัยชนะ",
        "Both teams played hard to win the trophy.",
        "v., n."
      ],
      [
        "window",
        "หน้าต่าง",
        "Open the window to let fresh air inside.",
        "n."
      ],
      [
        "wine",
        "ไวน์, เหล้าองุ่น",
        "They served red wine with the roasted meat.",
        "n."
      ],
      [
        "winter",
        "ฤดูหนาว",
        "Days grow much shorter during cold winter months.",
        "n."
      ],
      [
        "with",
        "กับ, ด้วย, พร้อมกับ",
        "She walked home with her best friend today.",
        "prep."
      ],
      [
        "without",
        "โดยปราศจาก, ไม่มี",
        "Never drive in heavy rain without headlights on.",
        "prep."
      ],
      [
        "woman",
        "ผู้หญิง, สตรี",
        "A kind woman helped me carry the stroller.",
        "n."
      ],
      [
        "wonderful",
        "ยอดเยี่ยม, วิเศษ, น่าทึ่ง",
        "We had a wonderful dinner by the lake.",
        "adj."
      ],
      [
        "word",
        "คำ, คำพูด",
        "Look up any unfamiliar word in the dictionary.",
        "n."
      ],
      [
        "work",
        "n. งาน, การทำงาน, ผลงาน; v. ทำงาน, ใช้ได้ผล",
        "My brother starts work at nine every morning.",
        "n., v."
      ],
      [
        "worker",
        "คนงาน, พนักงาน, ผู้ปฏิบัติงาน",
        "Every factory worker wears safety gloves on duty.",
        "n."
      ],
      [
        "world",
        "โลก, ชาวโลก",
        "She dreams of travelling around the whole world.",
        "n."
      ],
      [
        "would",
        "จะ, อยากจะ, เคย",
        "Would you like another cup of hot tea?",
        "modal v."
      ],
      [
        "write",
        "เขียน",
        "Remember to write your name at the top.",
        "v."
      ],
      [
        "writer",
        "นักเขียน, ผู้แต่ง",
        "The famous writer signed books for her fans.",
        "n."
      ],
      [
        "writing",
        "การเขียน, งานเขียน, ลายมือ",
        "His neat writing is very easy to read.",
        "n."
      ],
      [
        "wrong",
        "adj. ผิด, ไม่ถูกต้อง; adv. อย่างผิดพลาด; n. สิ่งผิด, ความผิด",
        "Sorry, I dialled the wrong phone number.",
        "adj., adv., n."
      ],
      [
        "yeah",
        "ใช่, เออ, จ้า",
        "Yeah, I would love to join for lunch!",
        "excl."
      ],
      [
        "year",
        "ปี",
        "Last year we planted ten trees behind school.",
        "n."
      ],
      [
        "yellow",
        "adj. สีเหลือง; n. สีเหลือง",
        "Bright yellow sunflowers turned toward the morning sun.",
        "adj., n."
      ],
      [
        "yes",
        "ใช่, ครับ, ค่ะ",
        "Yes, please leave the parcel by the door.",
        "excl."
      ],
      [
        "yesterday",
        "adv. เมื่อวานนี้; n. เมื่อวาน",
        "I met an old classmate yesterday at noon.",
        "adv., n."
      ],
      [
        "you",
        "คุณ, พวกคุณ",
        "You can leave your coat on that chair.",
        "pron."
      ],
      [
        "young",
        "adj. อายุน้อย, หนุ่มสาว, อ่อนวัย; n. คนหนุ่มสาว, ลูกสัตว์",
        "Young children learn new songs remarkably fast.",
        "adj., n."
      ],
      [
        "your",
        "ของคุณ, ของพวกคุณ",
        "Do not forget your keys on the counter.",
        "det."
      ],
      [
        "yourself",
        "ตัวคุณเอง",
        "Take good care of yourself during cold weather.",
        "pron."
      ]
    ]
  },
  {
    "id": "ox-a2-1",
    "label": "A2 Words · 1 (ability–camp)",
    "deck": "Oxford · A2 · 1",
    "cards": [
      [
        "ability",
        "ความสามารถ",
        "She has a natural ability to learn languages.",
        "n."
      ],
      [
        "able",
        "สามารถ, มีความสามารถ",
        "Will you be able to join us Friday?",
        "adj."
      ],
      [
        "abroad",
        "ในต่างประเทศ, ไปต่างประเทศ",
        "He plans to study abroad for two years.",
        "adv."
      ],
      [
        "accept",
        "ยอมรับ, รับไว้",
        "We happily accept credit cards at this counter.",
        "v."
      ],
      [
        "accident",
        "อุบัติเหตุ, ความบังเอิญ",
        "I spilled coffee on my shirt by accident.",
        "n."
      ],
      [
        "according to",
        "ตามที่, ตามคำกล่าวของ, ตามข้อมูลของ",
        "According to the forecast, tomorrow will stay sunny.",
        "prep."
      ],
      [
        "achieve",
        "บรรลุ, ทำได้สำเร็จ",
        "With steady effort, you can achieve your goal.",
        "v."
      ],
      [
        "act",
        "v. กระทำ, แสดงละคร, ทำหน้าที่; n. การกระทำ, องก์ละคร, กฎหมาย",
        "We must act quickly to fix this leak.",
        "v., n."
      ],
      [
        "active",
        "กระฉับกระเฉง, คล่องแคล่ว, มีส่วนร่วม",
        "My grandfather stays active by walking every morning.",
        "adj."
      ],
      [
        "actually",
        "ความจริงแล้ว, ที่จริง",
        "I actually prefer staying home on rainy weekends.",
        "adv."
      ],
      [
        "advantage",
        "ข้อได้เปรียบ, ข้อดี, ประโยชน์",
        "Living near the subway is a big advantage.",
        "n."
      ],
      [
        "adventure",
        "การผจญภัย",
        "Hiking across the island felt like an adventure.",
        "n."
      ],
      [
        "advertise",
        "โฆษณา, ประกาศรับสมัคร",
        "Small shops often advertise new offers online.",
        "v."
      ],
      [
        "advertisement",
        "โฆษณา, ประกาศ",
        "I saw an advertisement for the concert yesterday.",
        "n."
      ],
      [
        "advertising",
        "การโฆษณา, ธุรกิจโฆษณา",
        "She works for a creative advertising agency downtown.",
        "n."
      ],
      [
        "affect",
        "ส่งผลกระทบต่อ, มีผลต่อ",
        "Poor sleep can easily affect your daily mood.",
        "v."
      ],
      [
        "against",
        "ต่อต้าน, พิง, แข่งกับ",
        "Do not lean your wet umbrella against walls.",
        "prep."
      ],
      [
        "ah",
        "อ๋อ, อ้า, อ๊ะ",
        "Ah, now I finally see what you meant!",
        "excl."
      ],
      [
        "airline",
        "สายการบิน",
        "That airline offers direct flights to Tokyo daily.",
        "n."
      ],
      [
        "alive",
        "มีชีวิตอยู่, สดชื่นมีชีวิตชีวา",
        "Fresh water keeps those cut flowers alive longer.",
        "adj."
      ],
      [
        "all right",
        "adj. สบายดี, เรียบร้อย, ใช้ได้; adv. ดี, เรียบร้อย; excl. ตกลง, เอาล่ะ",
        "Are you feeling all right after that fall?",
        "adj., adv., excl."
      ],
      [
        "allow",
        "อนุญาต, ยอมให้",
        "This park does not allow dogs without leashes.",
        "v."
      ],
      [
        "almost",
        "เกือบ, เกือบจะ",
        "It is almost midnight, so let us sleep.",
        "adv."
      ],
      [
        "alone",
        "adj. คนเดียว, ลำพัง; adv. ตามลำพัง, เพียงลำพัง",
        "She likes walking home alone after quiet evenings.",
        "adj., adv."
      ],
      [
        "along",
        "adv. ไปด้วย, ข้างหน้า; prep. ตามแนว, เลียบไปตาม",
        "We strolled along the sandy beach at sunset.",
        "adv., prep."
      ],
      [
        "already",
        "แล้ว, เรียบร้อยแล้ว",
        "Have you already finished reading that thick book?",
        "adv."
      ],
      [
        "alternative",
        "n. ทางเลือก; adj. ทางเลือก, ทดแทน",
        "Cycling is a healthy alternative to driving daily.",
        "n., adj."
      ],
      [
        "although",
        "แม้ว่า, ถึงแม้ว่า",
        "Although it rained hard, we still went walking.",
        "conj."
      ],
      [
        "among",
        "ท่ามกลาง, ในหมู่, ระหว่าง",
        "She found her lost ring among old papers.",
        "prep."
      ],
      [
        "amount",
        "n. จำนวน, ปริมาณ; v. รวมเป็น, เทียบเท่า",
        "Add only a small amount of chili sauce.",
        "n., v."
      ],
      [
        "ancient",
        "โบราณ, เก่าแก่มาก",
        "Tourists explored the ancient temple ruins at dawn.",
        "adj."
      ],
      [
        "ankle",
        "ข้อเท้า",
        "He twisted his left ankle while playing basketball.",
        "n."
      ],
      [
        "any more",
        "อีกต่อไป",
        "That bakery does not sell croissants any more.",
        "adv."
      ],
      [
        "anybody",
        "ใครสักคน, ใครก็ตาม, ใครๆ",
        "Did anybody see where I put my glasses?",
        "pron."
      ],
      [
        "anyway",
        "อย่างไรก็ตาม, ยังไงก็เถอะ",
        "It was cloudy, but we went hiking anyway.",
        "adv."
      ],
      [
        "anywhere",
        "adv. ที่ไหนก็ตาม, ทุกหนแห่ง; pron. ที่ใดก็ได้",
        "I cannot find my black wallet anywhere today.",
        "adv., pron."
      ],
      [
        "app",
        "แอปพลิเคชัน, แอป",
        "This weather app sends alerts before heavy rain.",
        "n."
      ],
      [
        "appear",
        "ปรากฏ, ดูเหมือน",
        "Stars begin to appear once dusk settles down.",
        "v."
      ],
      [
        "appearance",
        "รูปลักษณ์ภายนอก, การปรากฏตัว",
        "Never judge people solely by their outward appearance.",
        "n."
      ],
      [
        "apply",
        "สมัคร, ประยุกต์ใช้, ทา",
        "She decided to apply for the design job.",
        "v."
      ],
      [
        "architect",
        "สถาปนิก",
        "The architect drew clear plans for the library.",
        "n."
      ],
      [
        "architecture",
        "สถาปัตยกรรม",
        "This old city is famous for wooden architecture.",
        "n."
      ],
      [
        "argue",
        "โต้เถียง, โต้แย้ง, ให้เหตุผล",
        "Brothers sometimes argue over small things at home.",
        "v."
      ],
      [
        "argument",
        "การโต้เถียง, ข้อโต้แย้ง, เหตุผล",
        "She made a strong argument for flexible hours.",
        "n."
      ],
      [
        "army",
        "กองทัพ, กองทัพบก",
        "The army helped rescue villagers after the flood.",
        "n."
      ],
      [
        "arrange",
        "จัดเตรียม, จัดวาง, นัดหมาย",
        "Let me arrange a meeting for Tuesday morning.",
        "v."
      ],
      [
        "arrangement",
        "การจัดเตรียม, การนัดหมาย, ข้อตกลง",
        "That flower arrangement brightens up the whole hall.",
        "n."
      ],
      [
        "asleep",
        "หลับอยู่, ง่วงหลับ",
        "The tired kitten fell asleep on my lap.",
        "adj."
      ],
      [
        "assistant",
        "adj. ผู้ช่วย, รอง; n. ผู้ช่วย, พนักงานขาย",
        "Ask the shop assistant if you need sizes.",
        "adj., n."
      ],
      [
        "athlete",
        "นักกีฬา",
        "Every athlete trained hard before the national games.",
        "n."
      ],
      [
        "attack",
        "n. การโจมตี, อาการกำเริบ; v. โจมตี, จู่โจม",
        "The defenders stopped every attack near the goal.",
        "n., v."
      ],
      [
        "attend",
        "เข้าร่วม, เข้าเรียน, ดูแลเอาใจใส่",
        "Over fifty guests will attend the evening ceremony.",
        "v."
      ],
      [
        "attention",
        "excl. ระวัง, โปรดฟัง; n. ความสนใจ, ความเอาใจใส่",
        "Pay close attention while crossing busy city streets.",
        "excl., n."
      ],
      [
        "attractive",
        "มีเสน่ห์, น่าดึงดูด, สวยงาม",
        "That cafe has a very attractive garden patio.",
        "adj."
      ],
      [
        "audience",
        "ผู้ชม, ผู้ฟัง",
        "The audience clapped loudly when the play ended.",
        "n."
      ],
      [
        "audio",
        "adj. เกี่ยวกับเสียง; n. เสียง, ระบบเสียง",
        "Check the audio cable before starting the call.",
        "adj., n."
      ],
      [
        "author",
        "ผู้เขียน, นักเขียน",
        "The author spoke warmly about her latest novel.",
        "n."
      ],
      [
        "available",
        "ว่าง, พร้อมใช้งาน, มีจำหน่าย",
        "Are any window seats still available for tonight?",
        "adj."
      ],
      [
        "average",
        "adj. เฉลี่ย, ปานกลาง; n. ค่าเฉลี่ย; v. เฉลี่ย",
        "The average rainfall here drops sharply in winter.",
        "adj., n., v."
      ],
      [
        "avoid",
        "หลีกเลี่ยง",
        "Take the side road to avoid heavy traffic.",
        "v."
      ],
      [
        "award",
        "n. รางวัล; v. มอบรางวัล, ตัดสินให้",
        "Our school won an award for clean recycling.",
        "n., v."
      ],
      [
        "awful",
        "แย่มาก, น่ากลัว, น่ารังเกียจ",
        "What an awful smell came from that bin!",
        "adj."
      ],
      [
        "background",
        "พื้นหลัง, ภูมิหลัง, ประวัติ",
        "You can hear soft music in the background.",
        "n."
      ],
      [
        "badly",
        "อย่างแย่, อย่างรุนแรง, มาก",
        "Our garden badly needs rain after two dry weeks.",
        "adv."
      ],
      [
        "baseball",
        "กีฬาเบสบอล, ลูกเบสบอล",
        "Kids played baseball in the park until dusk.",
        "n."
      ],
      [
        "based",
        "ตั้งอยู่ที่, อิงจาก",
        "This gripping movie is based on true events.",
        "adj."
      ],
      [
        "basketball",
        "กีฬาบาสเกตบอล, ลูกบาสเกตบอล",
        "We play basketball at the school court Fridays.",
        "n."
      ],
      [
        "bean",
        "ถั่ว, เมล็ดกาแฟ",
        "Every coffee bean is roasted until dark brown.",
        "n."
      ],
      [
        "bear",
        "n. หมี; v. ทน, แบกรับ, ให้กำเนิด",
        "A large brown bear walked across the path.",
        "n., v."
      ],
      [
        "beef",
        "เนื้อวัว",
        "Cook the sliced beef with garlic and basil.",
        "n."
      ],
      [
        "behave",
        "ประพฤติ, ปฏิบัติตัว",
        "Please behave politely when visiting your aunt's house.",
        "v."
      ],
      [
        "behaviour",
        "พฤติกรรม, ความประพฤติ",
        "Good behaviour in class earns praise from teachers.",
        "n."
      ],
      [
        "belong",
        "เป็นของ, สังกัด, เข้าพวก",
        "Does this blue scarf belong to anybody here?",
        "v."
      ],
      [
        "belt",
        "เข็มขัด, สายพาน",
        "Fasten your seat belt before the plane moves.",
        "n."
      ],
      [
        "benefit",
        "n. ประโยชน์, สวัสดิการ; v. ได้รับประโยชน์, เป็นประโยชน์",
        "Daily walking brings a huge benefit to health.",
        "n., v."
      ],
      [
        "billion",
        "หนึ่งพันล้าน",
        "Over eight billion people share this planet today.",
        "num."
      ],
      [
        "bin",
        "ถังขยะ, ถังเก็บของ",
        "Drop your empty paper cup into the bin.",
        "n."
      ],
      [
        "biology",
        "ชีววิทยา",
        "Biology explains how plants turn sunlight into food.",
        "n."
      ],
      [
        "birth",
        "การเกิด, กำเนิด",
        "The whole family celebrated the baby's safe birth.",
        "n."
      ],
      [
        "biscuit",
        "บิสกิต, ขนมปังกรอบ",
        "Would you like a crunchy biscuit with tea?",
        "n."
      ],
      [
        "bit",
        "ชิ้นเล็กๆ, นิดหน่อย",
        "I feel a bit sleepy after that lunch.",
        "n."
      ],
      [
        "blood",
        "เลือด, โลหิต",
        "The nurse took a quick blood sample today.",
        "n."
      ],
      [
        "blow",
        "พัด, เป่า",
        "Make a wish and blow out the candles!",
        "v."
      ],
      [
        "board",
        "n. กระดาน, แผ่นไม้, คณะกรรมการ; v. ขึ้นเรือ, ขึ้นเครื่องบิน",
        "Write today's date clearly on the white board.",
        "n., v."
      ],
      [
        "boil",
        "ต้ม, เดือด",
        "Let the water boil before adding the noodles.",
        "v."
      ],
      [
        "bone",
        "กระดูก, ก้างปลา",
        "The puppy chewed on a big rubber bone.",
        "n."
      ],
      [
        "borrow",
        "ขอยืม",
        "May I borrow your dictionary for five minutes?",
        "v."
      ],
      [
        "boss",
        "เจ้านาย, หัวหน้า",
        "My boss thanked everyone for finishing on time.",
        "n."
      ],
      [
        "bottom",
        "adj. ล่างสุด, ด้านล่าง; n. ก้น, ด้านล่าง",
        "Sign your full name at the bottom line.",
        "adj., n."
      ],
      [
        "bowl",
        "ชาม, ถ้วย",
        "Pour the hot soup into a deep bowl.",
        "n."
      ],
      [
        "brain",
        "สมอง",
        "Puzzles help keep your brain sharp every day.",
        "n."
      ],
      [
        "bridge",
        "สะพาน",
        "We walked across the wooden bridge at sunset.",
        "n."
      ],
      [
        "bright",
        "สว่าง, สดใส, ฉลาด",
        "Sunflowers look cheerful in the bright morning light.",
        "adj."
      ],
      [
        "brilliant",
        "ยอดเยี่ยม, ฉลาดหลักแหลม, สุกใส",
        "That was a brilliant idea for saving time!",
        "adj."
      ],
      [
        "broken",
        "แตก, หัก, เสีย",
        "Be careful not to touch that broken glass.",
        "adj."
      ],
      [
        "brush",
        "n. แปรง, พู่กัน; v. แปรง, ปัด",
        "Always brush your teeth gently before going to bed.",
        "n., v."
      ],
      [
        "burn",
        "v. เผา, ไหม้, ลวก; n. แผลไฟไหม้, รอยไหม้",
        "Be careful not to burn your fingers on the pan.",
        "v., n."
      ],
      [
        "businessman",
        "นักธุรกิจ, นักธุรกิจชาย",
        "The businessman flew to Tokyo for a meeting.",
        "n."
      ],
      [
        "button",
        "กระดุม, ปุ่มกด",
        "Press the green button to start the machine.",
        "n."
      ],
      [
        "camp",
        "n. ค่ายพักแรม, แคมป์; v. ตั้งแคมป์, พักแรมกลางแจ้ง",
        "We plan to camp near the lake this weekend.",
        "n., v."
      ]
    ]
  },
  {
    "id": "ox-a2-2",
    "label": "A2 Words · 2 (camping–differently)",
    "deck": "Oxford · A2 · 2",
    "cards": [
      [
        "camping",
        "การตั้งแคมป์, การพักแรมกลางแจ้ง",
        "Our family goes camping in the mountains every summer.",
        "n."
      ],
      [
        "care",
        "n. ความห่วงใย, การดูแล, ความระมัดระวัง; v. ใส่ใจ, ห่วงใย, ดูแล",
        "Parents always care deeply about their children.",
        "n., v."
      ],
      [
        "careful",
        "ระมัดระวัง, รอบคอบ",
        "Please be careful when you cross this busy street.",
        "adj."
      ],
      [
        "carefully",
        "อย่างระมัดระวัง, อย่างรอบคอบ",
        "She read the contract carefully before signing it.",
        "adv."
      ],
      [
        "carpet",
        "พรม, พรมปูพื้น",
        "My cat loves sleeping on the warm carpet.",
        "n."
      ],
      [
        "cartoon",
        "การ์ตูน, ภาพล้อเลียน",
        "The children watch a funny cartoon every morning.",
        "n."
      ],
      [
        "case",
        "กรณี, กล่องใส่ของ, คดีความ",
        "Take an umbrella just in case it rains.",
        "n."
      ],
      [
        "cash",
        "เงินสด",
        "Do you want to pay by card or cash?",
        "n."
      ],
      [
        "castle",
        "ปราสาท",
        "They visited an old stone castle on the hill.",
        "n."
      ],
      [
        "catch",
        "v. จับ, ขึ้นรถให้ทัน, ติดเชื้อ; n. การจับ, การรับลูก",
        "I ran fast to catch the morning train.",
        "v., n."
      ],
      [
        "cause",
        "n. สาเหตุ, ต้นเหตุ; v. ก่อให้เกิด, ทำให้เกิด",
        "Heavy rain can cause flooding on low roads.",
        "n., v."
      ],
      [
        "celebrate",
        "เฉลิมฉลอง, ฉลอง",
        "We will celebrate your birthday with a nice dinner.",
        "v."
      ],
      [
        "celebrity",
        "คนดัง, ผู้มีชื่อเสียง",
        "Many fans waited outside to see the celebrity.",
        "n."
      ],
      [
        "certain",
        "แน่ใจ, แน่นอน, บางอย่าง",
        "Are you certain that we locked the front door?",
        "adj."
      ],
      [
        "certainly",
        "อย่างแน่นอน, แน่ทีเดียว",
        "I will certainly help you finish this project.",
        "adv."
      ],
      [
        "chance",
        "โอกาส, ความเป็นไปได้, ความบังเอิญ",
        "This job is a great chance to learn more.",
        "n."
      ],
      [
        "character",
        "ตัวละคร, บุคลิกลักษณะ, ตัวอักษร",
        "The main character in this book is very kind.",
        "n."
      ],
      [
        "charity",
        "การกุศล, องค์กรการกุศล",
        "She donates money to a local animal charity.",
        "n."
      ],
      [
        "chat",
        "n. การพูดคุย, การแชต; v. พูดคุยเล่น, สนทนา",
        "Let us meet for coffee and have a chat.",
        "n., v."
      ],
      [
        "chef",
        "พ่อครัว, เชฟ, หัวหน้าพ่อครัว",
        "The chef prepared a fresh seafood dish for us.",
        "n."
      ],
      [
        "chemistry",
        "วิชาเคมี, เคมี",
        "Tom enjoys studying chemistry in the school lab.",
        "n."
      ],
      [
        "chip",
        "มันฝรั่งทอดกรอบ, ชิปคอมพิวเตอร์, รอยบิ่น",
        "My phone stopped working because a chip broke.",
        "n."
      ],
      [
        "choice",
        "ทางเลือก, การตัดสินใจเลือก",
        "You made a very smart choice for your career.",
        "n."
      ],
      [
        "church",
        "โบสถ์, คริสตจักร",
        "The old church stands in the town centre.",
        "n."
      ],
      [
        "cigarette",
        "บุหรี่",
        "Smoking even one cigarette inside the building is banned.",
        "n."
      ],
      [
        "circle",
        "n. วงกลม, กลุ่ม; v. วนเป็นวง, วงกลมล้อมรอบ",
        "The children sat in a large circle together.",
        "n., v."
      ],
      [
        "classical",
        "คลาสสิก, ดั้งเดิม, แบบแผนโบราณ",
        "She listens to classical music while studying at night.",
        "adj."
      ],
      [
        "clear",
        "adj. ชัดเจน, ใส, โปร่ง; v. เก็บกวาด, ทำให้โล่ง",
        "The water in this mountain river is very clear.",
        "adj., v."
      ],
      [
        "clearly",
        "อย่างชัดเจน, แจ่มแจ้ง",
        "Please speak slowly and clearly on the phone.",
        "adv."
      ],
      [
        "clever",
        "ฉลาด, หลักแหลม, มีไหวพริบ",
        "That clever dog knows how to open the gate.",
        "adj."
      ],
      [
        "climate",
        "ภูมิอากาศ, สภาพอากาศโดยรวม",
        "This region has a warm climate all year round.",
        "n."
      ],
      [
        "closed",
        "ปิดอยู่, ไม่เปิดให้บริการ",
        "All the banks in town are closed on Sunday.",
        "adj."
      ],
      [
        "clothing",
        "เสื้อผ้า, เครื่องแต่งกาย",
        "Pack warm clothing before you travel to the north.",
        "n."
      ],
      [
        "cloud",
        "ก้อนเมฆ, เมฆ",
        "A dark cloud hid the sun behind the hills.",
        "n."
      ],
      [
        "coach",
        "n. โค้ช, ผู้ฝึกสอน, รถโค้ช; v. ฝึกสอน, สอนแนะ",
        "Our football coach wants us to practice harder.",
        "n., v."
      ],
      [
        "coast",
        "ชายฝั่ง, ฝั่งทะเล",
        "They drove along the sunny coast for hours.",
        "n."
      ],
      [
        "code",
        "รหัส, รหัสผ่าน, กฎเกณฑ์",
        "Enter the secret code to open the front door.",
        "n."
      ],
      [
        "colleague",
        "เพื่อนร่วมงาน",
        "I had lunch with a friendly colleague today.",
        "n."
      ],
      [
        "collect",
        "สะสม, เก็บรวบรวม, ไปรับ",
        "My brother likes to collect old postage stamps.",
        "v."
      ],
      [
        "column",
        "เสา, คอลัมน์, แนวตั้ง",
        "Write your answers in the right column only.",
        "n."
      ],
      [
        "comedy",
        "เรื่องตลก, ละครตลก, ภาพยนตร์ตลก",
        "We watched a light comedy to relax after work.",
        "n."
      ],
      [
        "comfortable",
        "สะดวกสบาย, สบายกาย, สบายใจ",
        "These new running shoes feel soft and comfortable.",
        "adj."
      ],
      [
        "comment",
        "n. ความคิดเห็น, คำวิจารณ์; v. แสดงความคิดเห็น, วิจารณ์",
        "Did anyone leave a comment on your photo?",
        "n., v."
      ],
      [
        "communicate",
        "สื่อสาร, ติดต่อสื่อสาร",
        "We communicate by email during the busy work week.",
        "v."
      ],
      [
        "community",
        "ชุมชน, สังคม",
        "Everyone in our small community knows each other.",
        "n."
      ],
      [
        "compete",
        "แข่งขัน, ชิงชัย",
        "Athletes from many countries compete in these games.",
        "v."
      ],
      [
        "competition",
        "การแข่งขัน, การประกวด",
        "She won first prize in the singing competition.",
        "n."
      ],
      [
        "complain",
        "บ่น, ร้องเรียน",
        "Customers often complain when the service is too slow.",
        "v."
      ],
      [
        "completely",
        "อย่างสิ้นเชิง, โดยสมบูรณ์, ทั้งหมด",
        "I completely forgot to buy milk on my way home.",
        "adv."
      ],
      [
        "condition",
        "สภาพ, เงื่อนไข, อาการ",
        "The used car is still in very good condition.",
        "n."
      ],
      [
        "conference",
        "การประชุมใหญ่, การประชุมวิชาการ",
        "Doctors from across the country attended the medical conference.",
        "n."
      ],
      [
        "connect",
        "เชื่อมต่อ, ติดต่อ, เชื่อมโยง",
        "Can you connect your phone to the office wireless network?",
        "v."
      ],
      [
        "connected",
        "ที่เชื่อมต่อกัน, ที่เกี่ยวข้องกัน",
        "Make sure the printer is connected to the power.",
        "adj."
      ],
      [
        "consider",
        "พิจารณา, ไตร่ตรอง, มองว่า",
        "Please consider my idea before you make a decision.",
        "v."
      ],
      [
        "contain",
        "บรรจุ, ประกอบด้วย, มีอยู่ข้างใน",
        "This bottle does not contain any added sugar.",
        "v."
      ],
      [
        "context",
        "บริบท, สภาพแวดล้อม, เนื้อความแวดล้อม",
        "Try to guess new words from the sentence context.",
        "n."
      ],
      [
        "continent",
        "ทวีป",
        "Asia is the largest continent in the world.",
        "n."
      ],
      [
        "continue",
        "ทำต่อไป, ดำเนินต่อ, ต่อเนื่อง",
        "We will continue the meeting after a short break.",
        "v."
      ],
      [
        "control",
        "n. การควบคุม, ปุ่มควบคุม; v. ควบคุม, บังคับ",
        "The pilot kept full control of the plane.",
        "n., v."
      ],
      [
        "cooker",
        "เตาทำอาหาร, หม้อหุงต้ม",
        "She bought a new gas cooker for her kitchen.",
        "n."
      ],
      [
        "copy",
        "n. สำเนา, ฉบับ; v. คัดลอก, ทำซ้ำ, ลอกเลียน",
        "Please send me a copy of your passport.",
        "n., v."
      ],
      [
        "corner",
        "มุม, หัวมุมถนน",
        "There is a small coffee shop on the corner.",
        "n."
      ],
      [
        "correctly",
        "อย่างถูกต้อง",
        "He spelled every difficult word correctly on the test.",
        "adv."
      ],
      [
        "count",
        "v. นับ, นับจำนวน, สำคัญ; n. การนับ, จำนวนรวม",
        "Count the money twice before putting it away.",
        "v., n."
      ],
      [
        "couple",
        "คู่รัก, สองสามอย่าง, คู่",
        "The happy couple walked slowly along the beach.",
        "n."
      ],
      [
        "cover",
        "v. ปิด, คลุม, ครอบคลุม; n. ฝาปิด, หน้าปก, ผ้าคลุม",
        "Cover the pot with a lid while boiling water.",
        "v., n."
      ],
      [
        "crazy",
        "บ้า, เสียสติ, คลั่งไคล้",
        "That sounds like a crazy idea, yet it works.",
        "adj."
      ],
      [
        "creative",
        "สร้างสรรค์, มีความคิดสร้างสรรค์",
        "She always finds creative ways to solve hard problems.",
        "adj."
      ],
      [
        "credit",
        "n. เครดิต, สินเชื่อ, ความน่าเชื่อถือ; v. เชื่อ, ให้เครดิต, โอนเงินเข้าบัญชี",
        "You can pay with a credit card at checkout.",
        "n., v."
      ],
      [
        "crime",
        "อาชญากรรม, ความผิดทางอาญา",
        "Police work hard to reduce crime in the city.",
        "n."
      ],
      [
        "criminal",
        "n. อาชญากร, ผู้ร้าย; adj. เกี่ยวกับอาชญากรรม, ผิดกฎหมาย",
        "The police caught the dangerous criminal last night.",
        "n., adj."
      ],
      [
        "cross",
        "n. กากบาท, ไม้กางเขน; v. ข้าม, ตัดผ่าน, ขีดฆ่า",
        "Look both ways before you cross the road.",
        "n., v."
      ],
      [
        "crowd",
        "ฝูงชน, กลุ่มคนจำนวนมาก",
        "A huge crowd gathered in front of the stage.",
        "n."
      ],
      [
        "crowded",
        "แออัด, เต็มไปด้วยผู้คน",
        "The subway train is always crowded during rush hour.",
        "adj."
      ],
      [
        "cry",
        "v. ร้องไห้, ตะโกน; n. เสียงร้อง, การร้องไห้",
        "The tired baby began to cry for milk.",
        "v., n."
      ],
      [
        "cupboard",
        "ตู้เก็บของ, ตู้กับข้าว",
        "Clean plates are stored inside the kitchen cupboard.",
        "n."
      ],
      [
        "curly",
        "หยิก, หยักศก, เป็นลอน",
        "Her little sister has bright eyes and curly hair.",
        "adj."
      ],
      [
        "cycle",
        "n. วงจร, รอบ, จักรยาน; v. ขี่จักรยาน, หมุนเวียน",
        "I cycle to work every morning in good weather.",
        "n., v."
      ],
      [
        "daily",
        "adj. ประจำวัน, รายวัน; adv. ทุกวัน, เป็นประจำทุกวัน",
        "Drinking enough water should be part of daily life.",
        "adj., adv."
      ],
      [
        "danger",
        "อันตราย, ภยันตราย",
        "That warning sign alerts hikers to the danger ahead.",
        "n."
      ],
      [
        "data",
        "ข้อมูล",
        "We collected enough data to support our main report.",
        "n."
      ],
      [
        "dead",
        "ตายแล้ว, เสียชีวิต, หมดพลังงาน",
        "My phone battery is completely dead right now.",
        "adj."
      ],
      [
        "deal",
        "v. จัดการ, แจกไพ่, ค้าขาย; n. ข้อตกลง, การซื้อขาย",
        "How do you deal with stress at work?",
        "v., n."
      ],
      [
        "death",
        "ความตาย, การเสียชีวิต",
        "Everyone was shocked by the sudden news of his death.",
        "n."
      ],
      [
        "decision",
        "การตัดสินใจ",
        "Moving to another city was a difficult decision.",
        "n."
      ],
      [
        "deep",
        "adj. ลึก, เข้ม, ลึกซึ้ง; adv. ลึกลงไป, เข้าไปลึก",
        "Take a deep breath and try to stay calm.",
        "adj., adv."
      ],
      [
        "definitely",
        "อย่างแน่นอน, แน่นอนที่สุด",
        "I will definitely come to your party on Friday.",
        "adv."
      ],
      [
        "degree",
        "องศา, ระดับ, ปริญญา",
        "She earned a university degree in computer science.",
        "n."
      ],
      [
        "dentist",
        "ทันตแพทย์, หมอฟัน",
        "I have an appointment with the dentist tomorrow afternoon.",
        "n."
      ],
      [
        "department",
        "แผนก, ฝ่าย, กระทรวง",
        "She works in the sales department of our company.",
        "n."
      ],
      [
        "depend",
        "ขึ้นอยู่กับ, พึ่งพา",
        "Our weekend picnic will depend on the weather.",
        "v."
      ],
      [
        "desert",
        "n. ทะเลทราย; v. ทอดทิ้ง, ละทิ้ง, หนีทัพ",
        "Camels can walk across a hot desert for days.",
        "n., v."
      ],
      [
        "designer",
        "นักออกแบบ",
        "The fashion designer showed her new collection in Paris.",
        "n."
      ],
      [
        "dessert",
        "ของหวาน, ขนมหวาน",
        "We ordered ice cream for dessert after dinner.",
        "n."
      ],
      [
        "destroy",
        "ทำลาย, พังทลาย",
        "A big fire can quickly destroy an entire forest.",
        "v."
      ],
      [
        "detective",
        "นักสืบ",
        "The smart detective found a hidden clue near the door.",
        "n."
      ],
      [
        "develop",
        "พัฒนา, เติบโต, ก่อตัวขึ้น",
        "Reading daily helps children develop strong language skills.",
        "v."
      ],
      [
        "device",
        "อุปกรณ์, เครื่องมือ",
        "This small device tracks how many steps you walk.",
        "n."
      ],
      [
        "diary",
        "สมุดบันทึกประจำวัน, ไดอารี",
        "She writes about her feelings in a diary every night.",
        "n."
      ],
      [
        "differently",
        "อย่างแตกต่าง, ต่างออกไป",
        "Each person thinks and solves problems slightly differently.",
        "adv."
      ]
    ]
  },
  {
    "id": "ox-a2-3",
    "label": "A2 Words · 3 (digital–frog)",
    "deck": "Oxford · A2 · 3",
    "cards": [
      [
        "digital",
        "ดิจิทัล, เชิงตัวเลข, อิเล็กทรอนิกส์",
        "Many readers now prefer digital books over paper ones.",
        "adj."
      ],
      [
        "direct",
        "adj. ตรง, โดยตรง; adv. โดยตรง, ไม่แวะพัก; v. กำกับ, ชี้นำ, บอกทาง",
        "Is there a direct flight from Bangkok to London?",
        "adj., adv., v."
      ],
      [
        "direction",
        "ทิศทาง, คำแนะนำ, การกำกับ",
        "We walked in the wrong direction for ten minutes.",
        "n."
      ],
      [
        "director",
        "ผู้กำกับ, ผู้อำนวยการ, กรรมการ",
        "The film director thanked the whole crew on stage.",
        "n."
      ],
      [
        "disagree",
        "ไม่เห็นด้วย, ขัดแย้ง",
        "Good friends can disagree politely without getting angry.",
        "v."
      ],
      [
        "disappear",
        "หายไป, อันตรธาน",
        "The dark clouds began to disappear after noon.",
        "v."
      ],
      [
        "disaster",
        "ภัยพิบัติ, หายนะ",
        "The earthquake was a terrible disaster for the town.",
        "n."
      ],
      [
        "discover",
        "ค้นพบ, พบโดยบังเอิญ",
        "Scientists hope to discover new medicines in the ocean.",
        "v."
      ],
      [
        "discovery",
        "การค้นพบ, สิ่งที่ค้นพบ",
        "That fossil discovery changed how we understand ancient life.",
        "n."
      ],
      [
        "discussion",
        "การอภิปราย, การสนทนา, การหารือ",
        "We had a helpful discussion about the class project.",
        "n."
      ],
      [
        "disease",
        "โรค, ความเจ็บป่วย",
        "Clean drinking water helps stop the spread of disease.",
        "n."
      ],
      [
        "distance",
        "ระยะทาง, ระยะห่าง",
        "What is the distance between your house and school?",
        "n."
      ],
      [
        "divorced",
        "หย่าร้างแล้ว",
        "His parents got divorced when he was ten.",
        "adj."
      ],
      [
        "document",
        "n. เอกสาร; v. บันทึกเป็นหลักฐาน, จดบันทึก",
        "Please sign this document and return it by Friday.",
        "n., v."
      ],
      [
        "double",
        "adj. สองเท่า, คู่; det. สองเท่าของ; pron. จำนวนสองเท่า; v. เพิ่มเป็นสองเท่า; adv. เป็นสองเท่า",
        "We booked a double room at a quiet hotel.",
        "adj., det., pron., v., adv."
      ],
      [
        "download",
        "n. ไฟล์ที่ดาวน์โหลด, การดาวน์โหลด; v. ดาวน์โหลด",
        "Click this link to download the free map.",
        "n., v."
      ],
      [
        "drama",
        "ละคร, บทละคร, เหตุการณ์ตื่นเต้น",
        "She enjoys acting in the school drama club.",
        "n."
      ],
      [
        "drawing",
        "ภาพวาด, การวาดภาพ",
        "Look at this lovely pencil drawing of a horse.",
        "n."
      ],
      [
        "dream",
        "n. ความฝัน, ความใฝ่ฝัน; v. ฝัน, ใฝ่ฝัน",
        "My dream is to open a small bakery someday.",
        "n., v."
      ],
      [
        "driving",
        "การขับรถ, การขับขี่",
        "Careful driving keeps everyone safe on wet roads.",
        "n."
      ],
      [
        "drop",
        "v. ทำตก, ลดลง, หยด; n. หยด, การลดลง",
        "Be careful not to drop those heavy glass bowls.",
        "v., n."
      ],
      [
        "drug",
        "ยา, ยาเสพติด",
        "This new drug helps patients recover much faster.",
        "n."
      ],
      [
        "dry",
        "adj. แห้ง, แล้ง; v. ทำให้แห้ง, เช็ดให้แห้ง",
        "Leave your wet coat outside until it gets dry.",
        "adj., v."
      ],
      [
        "earn",
        "หาเงิน, ได้รับค่าตอบแทน, สมควรได้รับ",
        "She works hard to earn extra money each month.",
        "v."
      ],
      [
        "earth",
        "โลก, พื้นดิน, ดิน",
        "The moon moves slowly around the earth.",
        "n."
      ],
      [
        "easily",
        "อย่างง่ายดาย, โดยง่าย",
        "You can easily find the museum near the station.",
        "adv."
      ],
      [
        "education",
        "การศึกษา, การอบรมสั่งสอน",
        "Good education gives young people better chances in life.",
        "n."
      ],
      [
        "effect",
        "ผลกระทบ, ผลลัพธ์, อิทธิพล",
        "Lack of sleep has a bad effect on focus.",
        "n."
      ],
      [
        "either",
        "adv. ด้วยเช่นกัน, เหมือนกัน; det. อย่างใดอย่างหนึ่ง, ทั้งสองฝั่ง; pron. อันใดอันหนึ่ง",
        "You can choose either seat by the window.",
        "adv., det., pron."
      ],
      [
        "electric",
        "ที่ใช้ไฟฟ้า, เกี่ยวกับไฟฟ้า",
        "More people are buying electric cars this year.",
        "adj."
      ],
      [
        "electrical",
        "เกี่ยวกับไฟฟ้า, ทางไฟฟ้า",
        "Call a trained worker for any electrical repair.",
        "adj."
      ],
      [
        "electricity",
        "กระแสไฟฟ้า, ไฟฟ้า",
        "The storm cut off our electricity for three hours.",
        "n."
      ],
      [
        "electronic",
        "อิเล็กทรอนิกส์, ที่ทำงานด้วยวงจรไฟฟ้า",
        "Please turn off all electronic devices before takeoff.",
        "adj."
      ],
      [
        "employ",
        "จ้างงาน, ว่าจ้าง, ใช้",
        "Local factories employ hundreds of workers from nearby towns.",
        "v."
      ],
      [
        "employee",
        "ลูกจ้าง, พนักงาน",
        "Every new employee receives training on the first day.",
        "n."
      ],
      [
        "employer",
        "นายจ้าง, ผู้ว่าจ้าง",
        "A fair employer listens to feedback from the staff.",
        "n."
      ],
      [
        "empty",
        "adj. ว่างเปล่า, ไม่มีคน; v. เทออก, ทำให้ว่าง",
        "The big stadium was completely empty after the match.",
        "adj., v."
      ],
      [
        "ending",
        "ตอนจบ, จุดจบ, คำลงท้าย",
        "Everyone smiled at the happy ending of the film.",
        "n."
      ],
      [
        "energy",
        "พลังงาน, พละกำลัง, ความกระตือรือร้น",
        "Solar panels turn sunlight into clean energy.",
        "n."
      ],
      [
        "engine",
        "เครื่องยนต์, หัวรถจักร",
        "The mechanic checked the car engine before our trip.",
        "n."
      ],
      [
        "engineer",
        "วิศวกร, ช่างเครื่อง",
        "Her sister works as a civil engineer in Singapore.",
        "n."
      ],
      [
        "enormous",
        "ใหญ่โตมาก, มหึมา",
        "An enormous whale swam right past our small boat.",
        "adj."
      ],
      [
        "enter",
        "เข้าไป, กรอกข้อมูล, เข้าร่วม",
        "Please knock softly before you enter the office.",
        "v."
      ],
      [
        "environment",
        "สิ่งแวดล้อม, สภาพแวดล้อม",
        "Recycling paper and glass helps protect our environment.",
        "n."
      ],
      [
        "equipment",
        "อุปกรณ์, เครื่องมือเครื่องใช้",
        "The gym bought new fitness equipment last month.",
        "n."
      ],
      [
        "error",
        "ข้อผิดพลาด, ความผิดพลาด",
        "Check your form again to fix any spelling error.",
        "n."
      ],
      [
        "especially",
        "โดยเฉพาะ, โดยเฉพาะอย่างยิ่ง",
        "I love fresh fruit, especially sweet mangoes in summer.",
        "adv."
      ],
      [
        "essay",
        "เรียงความ, บทความ",
        "Students must write a short essay about their hometown.",
        "n."
      ],
      [
        "everyday",
        "ประจำวัน, ธรรมดา, ในชีวิตประจำวัน",
        "This dictionary explains useful words for everyday life.",
        "adj."
      ],
      [
        "everywhere",
        "ทุกหนทุกแห่ง, ทุกที่",
        "I looked everywhere for my keys this morning.",
        "adv."
      ],
      [
        "evidence",
        "หลักฐาน, พยานหลักฐาน",
        "Police searched the room for any clear evidence.",
        "n."
      ],
      [
        "exact",
        "แม่นยำ, ตรงเป๊ะ, แน่นอน",
        "Do you remember the exact time the train left?",
        "adj."
      ],
      [
        "exactly",
        "อย่างแม่นยำ, ตรงเป๊ะ, ถูกต้องทีเดียว",
        "That is exactly what I wanted to tell you.",
        "adv."
      ],
      [
        "excellent",
        "ยอดเยี่ยม, ดีเลิศ",
        "The food at that small restaurant was excellent.",
        "adj."
      ],
      [
        "except",
        "prep. ยกเว้น, นอกจาก; conj. เว้นแต่ว่า, นอกจากว่า",
        "The shop is open every day except Monday.",
        "prep., conj."
      ],
      [
        "exist",
        "มีอยู่, ดำรงอยู่, อาศัยอยู่",
        "Do rare white tigers still exist in the wild?",
        "v."
      ],
      [
        "expect",
        "คาดหวัง, คาดว่า, รอคอย",
        "We expect the package to arrive by tomorrow noon.",
        "v."
      ],
      [
        "experience",
        "n. ประสบการณ์; v. ประสบ, เผชิญกับ",
        "Teaching abroad was a wonderful experience for her.",
        "n., v."
      ],
      [
        "experiment",
        "n. การทดลอง; v. ทดลอง",
        "Our science class did an exciting experiment today.",
        "n., v."
      ],
      [
        "expert",
        "adj. เชี่ยวชาญ, ชำนาญ; n. ผู้เชี่ยวชาญ",
        "Ask an expert before fixing an old antique watch.",
        "adj., n."
      ],
      [
        "explanation",
        "คำอธิบาย, การอธิบาย",
        "The teacher gave a clear explanation of the rule.",
        "n."
      ],
      [
        "express",
        "แสดงออก, สื่อความรู้สึก",
        "Words cannot fully express how grateful I feel today.",
        "v."
      ],
      [
        "expression",
        "การแสดงออก, สีหน้า, สำนวน",
        "She had a surprised expression on her face.",
        "n."
      ],
      [
        "extreme",
        "adj. สุดขีด, รุนแรงมาก; n. ขั้นสุดขีด, สภาพสุดโต่ง",
        "Mountain climbers must prepare for extreme cold weather.",
        "adj., n."
      ],
      [
        "extremely",
        "อย่างยิ่ง, สุดขีด, มากที่สุด",
        "The street market was extremely busy last night.",
        "adv."
      ],
      [
        "factor",
        "ปัจจัย, ตัวประกอบ, องค์ประกอบ",
        "Cost is an important factor when choosing housing.",
        "n."
      ],
      [
        "factory",
        "โรงงาน",
        "Her father worked in a shoe factory nearby.",
        "n."
      ],
      [
        "fail",
        "ล้มเหลว, สอบตก, ไม่สำเร็จ",
        "Do not give up even if you fail once.",
        "v."
      ],
      [
        "fair",
        "ยุติธรรม, พอใช้ได้, ผิวขาว",
        "The teacher gave a fair score to every student.",
        "adj."
      ],
      [
        "fan",
        "พัดลม, แฟนคลับ, ผู้ชื่นชอบ",
        "Turn on the fan because the room feels warm.",
        "n."
      ],
      [
        "farming",
        "การทำฟาร์ม, เกษตรกรรม",
        "Organic farming takes careful planning and hard work.",
        "n."
      ],
      [
        "fashion",
        "แฟชั่น, สมัยนิยม",
        "Bright summer colours are back in fashion now.",
        "n."
      ],
      [
        "fear",
        "n. ความกลัว; v. กลัว, เกรงกลัว",
        "Many children have a strong fear of the dark.",
        "n., v."
      ],
      [
        "feature",
        "n. ลักษณะเด่น, คุณสมบัติ; v. นำเสนอ, มีบทบาทเด่น",
        "The best feature of this phone is battery life.",
        "n., v."
      ],
      [
        "feed",
        "v. ให้อาหาร, ป้อน; n. อาหารสัตว์, ฟีดข่าว",
        "Remember to feed the dog before you leave.",
        "v., n."
      ],
      [
        "female",
        "adj. เพศหญิง, เพศเมีย; n. ผู้หญิง, สัตว์เพศเมีย",
        "The zoo welcomed a healthy female panda yesterday.",
        "adj., n."
      ],
      [
        "fiction",
        "นิยาย, เรื่องแต่ง",
        "She prefers reading science fiction before going to bed.",
        "n."
      ],
      [
        "field",
        "ทุ่ง, สนาม, สาขาวิชา",
        "Cows were eating green grass in the field.",
        "n."
      ],
      [
        "fight",
        "n. การต่อสู้, การทะเลาะ; v. ต่อสู้, ทะเลาะ",
        "Two stray cats started a noisy fight outside.",
        "n., v."
      ],
      [
        "figure",
        "n. ตัวเลข, รูปร่าง, บุคคลสำคัญ; v. คิดคำนวณ, เข้าใจ",
        "Can you check the final sales figure again?",
        "n., v."
      ],
      [
        "finally",
        "ในที่สุด, ท้ายที่สุด",
        "After a long delay, the train finally arrived.",
        "adv."
      ],
      [
        "finger",
        "นิ้วมือ",
        "He cut his finger while slicing fresh tomatoes.",
        "n."
      ],
      [
        "firstly",
        "ประการแรก, อย่างแรก",
        "Firstly, thank you all for coming here today.",
        "adv."
      ],
      [
        "fishing",
        "การตกปลา, การประมง",
        "My grandfather goes fishing at the river on Sundays.",
        "n."
      ],
      [
        "fit",
        "adj. แข็งแรง, พอดี, เหมาะสม; v. พอดีกับ, สวมใส่ได้, ติดตั้ง",
        "Running every morning helps me stay healthy and fit.",
        "adj., v."
      ],
      [
        "fix",
        "v. ซ่อมแซม, แก้ไข, ยึดติด; n. การแก้ไข, ทางออกชั่วคราว",
        "Can you help me fix this broken kitchen chair?",
        "v., n."
      ],
      [
        "flu",
        "ไข้หวัดใหญ่",
        "Half the office stayed home with the flu.",
        "n."
      ],
      [
        "flying",
        "adj. ที่บินได้, รวดเร็ว; n. การบิน",
        "Some people feel nervous about flying on planes.",
        "adj., n."
      ],
      [
        "focus",
        "n. จุดสนใจ, ความคมชัด; v. จดจ่อ, มุ่งความสนใจ",
        "Turn off notifications so you can focus on work.",
        "n., v."
      ],
      [
        "following",
        "adj. ถัดไป, ดังต่อไปนี้; n. กลุ่มผู้ติดตาม; prep. หลังจาก, ตามหลัง",
        "Answer the following questions in your notebook carefully.",
        "adj., n., prep."
      ],
      [
        "foreign",
        "ต่างประเทศ, ต่างชาติ, แปลกปลอม",
        "Learning a foreign language opens many new doors.",
        "adj."
      ],
      [
        "forest",
        "ป่า, ป่าไม้",
        "We walked along a quiet path through the forest.",
        "n."
      ],
      [
        "fork",
        "ส้อม, ทางแยก",
        "Please put a clean knife and fork beside every plate.",
        "n."
      ],
      [
        "formal",
        "เป็นทางการ, สุภาพเรียบร้อย",
        "Wear formal clothes for the job interview tomorrow.",
        "adj."
      ],
      [
        "fortunately",
        "โชคดีที่, อย่างโชคดี",
        "Fortunately, nobody got hurt in the small accident.",
        "adv."
      ],
      [
        "forward",
        "adv. ไปข้างหน้า, ล่วงหน้า; adj. ด้านหน้า, ก้าวหน้า",
        "Take two steps forward and stand near the door.",
        "adv., adj."
      ],
      [
        "fresh",
        "สด, ใหม่, สดชื่น",
        "I buy fresh vegetables from the morning market.",
        "adj."
      ],
      [
        "fridge",
        "ตู้เย็น",
        "Put the cold milk back inside the fridge.",
        "n."
      ],
      [
        "frog",
        "กบ",
        "A small green frog jumped into the pond.",
        "n."
      ]
    ]
  },
  {
    "id": "ox-a2-4",
    "label": "A2 Words · 4 (furniture–lead)",
    "deck": "Oxford · A2 · 4",
    "cards": [
      [
        "furniture",
        "เฟอร์นิเจอร์, เครื่องเรือน",
        "They bought simple wooden furniture for their new flat.",
        "n."
      ],
      [
        "further",
        "adj. ไกลกว่า, เพิ่มเติม; adv. ต่อไปอีก, ไกลออกไปอีก",
        "Call our support desk if you need further details.",
        "adj., adv."
      ],
      [
        "gallery",
        "หอศิลป์, ห้องแสดงภาพ",
        "We visited a modern art gallery downtown yesterday.",
        "n."
      ],
      [
        "gap",
        "ช่องว่าง, ช่วงห่าง, ความแตกต่าง",
        "Mind the wide gap between the train and platform.",
        "n."
      ],
      [
        "gas",
        "แก๊ส, ก๊าซ, น้ำมันเบนซิน",
        "Check that the gas stove is off before sleeping.",
        "n."
      ],
      [
        "gate",
        "ประตูรั้ว, ประตูทางออก",
        "Passengers should wait near boarding gate twelve now.",
        "n."
      ],
      [
        "general",
        "ทั่วไป, โดยรวม, สามัญ",
        "This book gives a general idea of world history.",
        "adj."
      ],
      [
        "gift",
        "ของขวัญ, พรสวรรค์",
        "She wrapped the birthday gift in bright red paper.",
        "n."
      ],
      [
        "goal",
        "เป้าหมาย, ประตูฟุตบอล",
        "Our team scored the winning goal in extra time.",
        "n."
      ],
      [
        "god",
        "เทพเจ้า, พระเจ้า",
        "Ancient Greeks built stone temples for each god.",
        "n."
      ],
      [
        "gold",
        "adj. ทำจากทอง, สีทอง; n. ทองคำ, เหรียญทอง",
        "The athlete proudly wore her new gold medal.",
        "adj., n."
      ],
      [
        "golf",
        "กีฬากอล์ฟ, กอล์ฟ",
        "My uncle plays golf with friends every Sunday morning.",
        "n."
      ],
      [
        "government",
        "รัฐบาล",
        "The government plans to build more public parks.",
        "n."
      ],
      [
        "grass",
        "หญ้า, สนามหญ้า",
        "Please keep off the fresh green grass here.",
        "n."
      ],
      [
        "greet",
        "ทักทาย, ต้อนรับ",
        "Shop staff always smile and greet every customer warmly.",
        "v."
      ],
      [
        "ground",
        "พื้นดิน, พื้น, สนาม",
        "Autumn leaves covered the wet ground after the storm.",
        "n."
      ],
      [
        "guest",
        "แขก, ผู้มาเยือน, ผู้เข้าพัก",
        "Every hotel guest gets free breakfast until ten.",
        "n."
      ],
      [
        "guide",
        "n. มัคคุเทศก์, คู่มือ; v. นำทาง, ชี้แนะ",
        "Our local guide showed us around the old temple.",
        "n., v."
      ],
      [
        "gun",
        "ปืน",
        "The security guard at the bank carried a gun.",
        "n."
      ],
      [
        "guy",
        "ผู้ชาย, หมอนั่น, พวกเรา",
        "That friendly guy next door helped carry my bags.",
        "n."
      ],
      [
        "habit",
        "นิสัย, ความเคยชิน",
        "Brushing your teeth before sleep is a good habit.",
        "n."
      ],
      [
        "hall",
        "ห้องโถง, หอประชุม, โถงทางเดิน",
        "Students waited in the main hall before the exam.",
        "n."
      ],
      [
        "happily",
        "อย่างมีความสุข, อย่างยินดี",
        "The children played happily in the garden all afternoon.",
        "adv."
      ],
      [
        "headache",
        "อาการปวดหัว, ปวดศีรษะ",
        "I took some rest because I had a headache.",
        "n."
      ],
      [
        "heart",
        "หัวใจ, ใจกลาง, จิตใจ",
        "Regular walking is very good for your heart.",
        "n."
      ],
      [
        "heat",
        "n. ความร้อน, อากาศร้อน; v. ทำให้ร้อน, อุ่น",
        "Heat the soup gently for five minutes before serving.",
        "n., v."
      ],
      [
        "heavy",
        "หนัก, รุนแรง, หนาแน่น",
        "This suitcase feels too heavy for one person.",
        "adj."
      ],
      [
        "height",
        "ความสูง, ระดับความสูง",
        "Write your weight and height on the health form.",
        "n."
      ],
      [
        "helpful",
        "ที่เป็นประโยชน์, ชอบช่วยเหลือ",
        "The station staff were very helpful with our luggage.",
        "adj."
      ],
      [
        "hero",
        "วีรบุรุษ, ฮีโร่, พระเอก",
        "The brave firefighter became a hero in our town.",
        "n."
      ],
      [
        "hers",
        "ของหล่อน, ของเธอ",
        "My jacket is grey, and the red one is hers.",
        "pron."
      ],
      [
        "herself",
        "ตัวหล่อนเอง, ด้วยตัวเอง",
        "She taught herself how to bake sourdough bread.",
        "pron."
      ],
      [
        "hide",
        "ซ่อน, ปิดบัง, หลบซ่อน",
        "Where did the cat hide my other sock?",
        "v."
      ],
      [
        "hike",
        "n. การเดินป่า, การเดินระยะไกล; v. เดินป่า, เดินเขา",
        "We went for a long hike up the hill.",
        "n., v."
      ],
      [
        "hill",
        "เนินเขา",
        "There is a small white house atop the hill.",
        "n."
      ],
      [
        "himself",
        "ตัวเขาเอง, ด้วยตนเอง",
        "Tom fixed the leaking kitchen tap all by himself.",
        "pron."
      ],
      [
        "hit",
        "n. การตี, การชน, เพลงฮิต; v. ตี, ชน, กระทบ",
        "Watch your head so you do not hit the shelf.",
        "n., v."
      ],
      [
        "hockey",
        "กีฬาฮอกกี้, ฮอกกี้",
        "Ice hockey is a very popular sport in Canada.",
        "n."
      ],
      [
        "hold",
        "v. ถือ, จับ, จัดงาน; n. การจับ, การถือ",
        "Please hold the door open for a moment.",
        "v., n."
      ],
      [
        "hole",
        "รู, หลุม, โพรง",
        "There is a small hole in my left sock.",
        "n."
      ],
      [
        "huge",
        "ใหญ่โตมาก, มหึมา",
        "They built a huge shopping mall near the station.",
        "adj."
      ],
      [
        "human",
        "adj. เกี่ยวกับมนุษย์, ของคน; n. มนุษย์, คน",
        "Every human needs clean water, food, and safe shelter.",
        "adj., n."
      ],
      [
        "hurt",
        "adj. บาดเจ็บ, เจ็บใจ; v. ทำให้เจ็บ, เจ็บ, ทำร้ายจิตใจ; n. ความเจ็บปวด, การบาดเจ็บ",
        "Does your ankle still hurt when you walk?",
        "adj., v., n."
      ],
      [
        "ideal",
        "adj. ในอุดมคติ, เหมาะสมที่สุด; n. อุดมคติ, แบบอย่างที่ดีที่สุด",
        "This sunny weather is ideal for a picnic.",
        "adj., n."
      ],
      [
        "identify",
        "ระบุตัวตน, จำแนก, ชี้ชัด",
        "Can you identify the caller from this voice clip?",
        "v."
      ],
      [
        "ill",
        "ป่วย, ไม่สบาย",
        "She felt ill yesterday, so she stayed in bed.",
        "adj."
      ],
      [
        "illness",
        "ความเจ็บป่วย, โรคภัย",
        "He missed a week of school because of illness.",
        "n."
      ],
      [
        "image",
        "รูปภาพ, ภาพลักษณ์",
        "That clear image looks great on the front page.",
        "n."
      ],
      [
        "immediately",
        "ทันที, โดยทันที",
        "Call an ambulance immediately if anyone stops breathing.",
        "adv."
      ],
      [
        "impossible",
        "เป็นไปไม่ได้",
        "It is impossible to finish this huge task tonight.",
        "adj."
      ],
      [
        "included",
        "ที่รวมอยู่ด้วย",
        "Breakfast and airport pickup are included in the price.",
        "adj."
      ],
      [
        "including",
        "รวมถึง, รวมทั้ง",
        "Six people attended the meeting, including the manager.",
        "prep."
      ],
      [
        "increase",
        "n. การเพิ่มขึ้น; v. เพิ่มขึ้น, เพิ่มพูน",
        "Train ticket prices will increase slightly next month.",
        "n., v."
      ],
      [
        "incredible",
        "เหลือเชื่อ, มหัศจรรย์, ยอดเยี่ยมมาก",
        "The view from the mountain peak looked incredible.",
        "adj."
      ],
      [
        "independent",
        "เป็นอิสระ, พึ่งพาตนเองได้",
        "She became financially independent after starting her own shop.",
        "adj."
      ],
      [
        "individual",
        "adj. แต่ละบุคคล, เฉพาะตัว; n. บุคคล, เอกชน",
        "Each individual student receives a personal study plan.",
        "adj., n."
      ],
      [
        "industry",
        "อุตสาหกรรม, ความขยัน",
        "The tourism industry brings many visitors to this island.",
        "n."
      ],
      [
        "informal",
        "ไม่เป็นทางการ, เป็นกันเอง",
        "We had an informal chat over lunch at noon.",
        "adj."
      ],
      [
        "injury",
        "อาการบาดเจ็บ, บาดแผล",
        "A knee injury kept him out of the final match.",
        "n."
      ],
      [
        "insect",
        "แมลง",
        "A tiny green insect landed on my notebook page.",
        "n."
      ],
      [
        "inside",
        "adj. ด้านใน, ภายใน; adv. ข้างใน, เข้าข้างใน; n. ด้านใน, ภายใน; prep. ใน, ข้างใน",
        "Let us wait inside the cafe until rain stops.",
        "adj., adv., n., prep."
      ],
      [
        "instead",
        "แทน, แทนที่",
        "We ran out of tea, so drink coffee instead.",
        "adv."
      ],
      [
        "instead of",
        "แทนที่, แทนที่จะ",
        "Take the stairs instead of using the elevator today.",
        "prep."
      ],
      [
        "instruction",
        "คำสั่ง, คำแนะนำวิธีใช้, การสอน",
        "Read every instruction on the box before cooking.",
        "n."
      ],
      [
        "instructor",
        "ผู้สอน, ครูฝึก",
        "My driving instructor was calm and very patient.",
        "n."
      ],
      [
        "instrument",
        "เครื่องดนตรี, เครื่องมือ",
        "Which musical instrument would you like to learn?",
        "n."
      ],
      [
        "intelligent",
        "ฉลาด, เฉลียวฉลาด, มีไหวพริบ",
        "Dolphins are intelligent animals that learn tricks fast.",
        "adj."
      ],
      [
        "international",
        "นานาชาติ, ระหว่างประเทศ",
        "Bangkok has a large international airport outside the city.",
        "adj."
      ],
      [
        "introduction",
        "การแนะนำ, บทนำ, การนำเข้ามา",
        "Write a short introduction at the top of page one.",
        "n."
      ],
      [
        "invent",
        "ประดิษฐ์, คิดค้น, แต่งเรื่อง",
        "Who helped invent the first practical light bulb?",
        "v."
      ],
      [
        "invention",
        "สิ่งประดิษฐ์, การคิดค้น",
        "The smartphone became the biggest invention of its decade.",
        "n."
      ],
      [
        "invitation",
        "คำเชิญ, บัตรเชิญ",
        "Thank you for your kind invitation to dinner.",
        "n."
      ],
      [
        "invite",
        "เชิญ, ชวน",
        "Did you invite your cousins to the wedding?",
        "v."
      ],
      [
        "involve",
        "เกี่ยวข้องกับ, มีส่วนร่วม, ต้องใช้",
        "Does your new job involve much overseas travel?",
        "v."
      ],
      [
        "item",
        "สิ่งของ, รายการ, ชิ้น",
        "Check each item on the shopping list carefully.",
        "n."
      ],
      [
        "itself",
        "ตัวมันเอง, โดยตัวมันเอง",
        "The automatic door closes by itself after ten seconds.",
        "pron."
      ],
      [
        "jam",
        "แยมผลไม้, การจราจรติดขัด",
        "I spread sweet strawberry jam on warm toast.",
        "n."
      ],
      [
        "jazz",
        "ดนตรีแจ๊ส, เพลงแจ๊ส",
        "A live jazz band plays here every Friday night.",
        "n."
      ],
      [
        "jewellery",
        "เครื่องประดับ, อัญมณี",
        "She keeps her gold jewellery in a locked drawer.",
        "n."
      ],
      [
        "joke",
        "n. เรื่องตลก, มุกตลก; v. พูดเล่น, ล้อเล่น",
        "Everyone laughed loudly at his funny joke.",
        "n., v."
      ],
      [
        "journalist",
        "นักข่าว, ผู้สื่อข่าว",
        "The journalist interviewed local shop owners after the flood.",
        "n."
      ],
      [
        "jump",
        "n. การกระโดด; v. กระโดด, พุ่งขึ้น",
        "Can your dog jump over that low wooden fence?",
        "n., v."
      ],
      [
        "kid",
        "เด็ก, ลูกแพะ",
        "When I was a kid, I loved riding bikes.",
        "n."
      ],
      [
        "kill",
        "ฆ่า, สังหาร, ทำให้ตาย",
        "Cold winter frost can kill delicate garden plants.",
        "v."
      ],
      [
        "king",
        "พระราชา, กษัตริย์",
        "The young king lived in a grand stone palace.",
        "n."
      ],
      [
        "knee",
        "หัวเข่า, เข่า",
        "He hurt his right knee while playing basketball.",
        "n."
      ],
      [
        "knife",
        "มีด",
        "Use a sharp knife when cutting fresh bread.",
        "n."
      ],
      [
        "knock",
        "v. เคาะ, ชน; n. เสียงเคาะ, การกระแทก",
        "Please knock on the door before entering.",
        "v., n."
      ],
      [
        "knowledge",
        "ความรู้, ความรอบรู้",
        "She has deep knowledge of local plant species.",
        "n."
      ],
      [
        "lab",
        "ห้องปฏิบัติการ, ห้องแล็บ",
        "Students wear safety glasses inside the science lab.",
        "n."
      ],
      [
        "lady",
        "สุภาพสตรี, ผู้หญิง",
        "An older lady offered me her seat on the bus.",
        "n."
      ],
      [
        "lake",
        "ทะเลสาบ",
        "We rented a small boat on the calm lake.",
        "n."
      ],
      [
        "lamp",
        "โคมไฟ, ตะเกียง",
        "Turn on the desk lamp before reading at night.",
        "n."
      ],
      [
        "laptop",
        "คอมพิวเตอร์พกพา, แล็ปท็อป",
        "I carry my laptop to the cafe for work.",
        "n."
      ],
      [
        "laughter",
        "เสียงหัวเราะ, การหัวเราะ",
        "Warm laughter filled the room during family dinner.",
        "n."
      ],
      [
        "law",
        "กฎหมาย, กฎเกณฑ์",
        "By law, every driver must wear a seat belt.",
        "n."
      ],
      [
        "lawyer",
        "ทนายความ, นักกฎหมาย",
        "She hired a lawyer to review the rental agreement.",
        "n."
      ],
      [
        "lazy",
        "ขี้เกียจ, เฉื่อยชา",
        "Feeling lazy on a rainy Sunday afternoon is normal.",
        "adj."
      ],
      [
        "lead",
        "v. นำ, พาไป, เป็นผู้นำ; n. ตำแหน่งนำ, สายจูง, ตะกั่ว",
        "Good leaders lead by example rather than words.",
        "v., n."
      ]
    ]
  },
  {
    "id": "ox-a2-5",
    "label": "A2 Words · 5 (leader–patient)",
    "deck": "Oxford · A2 · 5",
    "cards": [
      [
        "leader",
        "ผู้นำ, หัวหน้า",
        "The team leader organized tasks clearly for everyone.",
        "n."
      ],
      [
        "learning",
        "การเรียนรู้, องค์ความรู้",
        "Online courses make lifelong learning much easier today.",
        "n."
      ],
      [
        "least",
        "adv. น้อยที่สุด; det. น้อยที่สุด; pron. จำนวนน้อยที่สุด, อย่างน้อยที่สุด",
        "At least twenty people joined the morning walk.",
        "adv., det., pron."
      ],
      [
        "lecture",
        "n. การบรรยาย, คำเทศนา; v. บรรยาย, สั่งสอน",
        "The morning history lecture lasted nearly two hours.",
        "n., v."
      ],
      [
        "lemon",
        "เลมอน, มะนาวฝรั่ง",
        "Squeeze fresh lemon juice over the grilled fish.",
        "n."
      ],
      [
        "lend",
        "ให้ยืม, ให้กู้",
        "Could you lend me a pen for five minutes?",
        "v."
      ],
      [
        "less",
        "adv. น้อยลง, น้อยกว่า; det. น้อยกว่า, มีจำนวนน้อยกว่า; pron. จำนวนที่น้อยกว่า",
        "Try to eat less sugar and more fresh fruit.",
        "adv., det., pron."
      ],
      [
        "level",
        "n. ระดับ, ชั้น; adj. ราบเรียบ, เสมอกัน; v. ปรับให้เรียบ, ทำให้เท่ากัน",
        "Water level in the river rose after heavy rain.",
        "n., adj., v."
      ],
      [
        "lifestyle",
        "วิถีชีวิต, รูปแบบการใช้ชีวิต",
        "Moving to the coast gave them a calmer lifestyle.",
        "n."
      ],
      [
        "lift",
        "n. ลิฟต์, การยก, การติดรถ; v. ยกขึ้น, ชูขึ้น",
        "Take the lift to the fifth floor office.",
        "n., v."
      ],
      [
        "likely",
        "เป็นไปได้, มีแนวโน้มว่า, น่าจะ",
        "Rain is very likely later this evening, so stay dry.",
        "adj."
      ],
      [
        "link",
        "n. ลิงก์, จุดเชื่อมโยง, ห่วงโซ่; v. เชื่อมโยง, เชื่อมต่อ",
        "Send me the link to that article when ready.",
        "n., v."
      ],
      [
        "listener",
        "ผู้ฟัง, คนฟัง",
        "A good listener pays close attention without interrupting.",
        "n."
      ],
      [
        "lock",
        "n. แม่กุญแจ, ตัวล็อก; v. ล็อก, ปิดตาย",
        "Always lock the back door before leaving home.",
        "n., v."
      ],
      [
        "lorry",
        "รถบรรทุก",
        "A large delivery lorry blocked the narrow street.",
        "n."
      ],
      [
        "lost",
        "หลงทาง, สูญหาย, สับสน",
        "Ask that police officer if we look lost.",
        "adj."
      ],
      [
        "loud",
        "adj. เสียงดัง, อึกทึก; adv. อย่างดัง",
        "Please turn down that loud music right now.",
        "adj., adv."
      ],
      [
        "loudly",
        "อย่างเสียงดัง",
        "The fans cheered loudly when their team scored.",
        "adv."
      ],
      [
        "lovely",
        "น่ารัก, สวยงาม, น่ายินดี",
        "Thank you for such a lovely dinner tonight.",
        "adj."
      ],
      [
        "low",
        "adj. ต่ำ, น้อย, เตี้ย; adv. ในระดับต่ำ; n. ระดับต่ำสุด",
        "My phone battery is getting very low now.",
        "adj., adv., n."
      ],
      [
        "luck",
        "โชค, โชคลาภ",
        "Good luck with your driving test this morning!",
        "n."
      ],
      [
        "lucky",
        "โชคดี",
        "We were lucky to catch the last train.",
        "adj."
      ],
      [
        "mail",
        "n. ไปรษณีย์, จดหมาย; v. ส่งทางไปรษณีย์",
        "Did any letters arrive in the morning mail?",
        "n., v."
      ],
      [
        "major",
        "สำคัญ, ใหญ่, หลัก",
        "Traffic is a major problem in big cities.",
        "adj."
      ],
      [
        "male",
        "adj. เพศชาย, เพศผู้; n. ผู้ชาย, สัตว์เพศผู้",
        "Male lions usually have thick hair around their necks.",
        "adj., n."
      ],
      [
        "manage",
        "จัดการ, บริหาร, ทำได้สำเร็จ",
        "How do you manage both study and work?",
        "v."
      ],
      [
        "manager",
        "ผู้จัดการ",
        "Ask the store manager if you want a refund.",
        "n."
      ],
      [
        "manner",
        "มารยาท, ท่าทาง, วิธีการ",
        "He greeted all the guests in a polite manner.",
        "n."
      ],
      [
        "mark",
        "n. รอย, เครื่องหมาย, คะแนน; v. ทำเครื่องหมาย, ตรวจให้คะแนน",
        "Leave a small mark beside the right answer.",
        "n., v."
      ],
      [
        "marry",
        "แต่งงาน, สมรส",
        "They plan to marry in a quiet garden ceremony.",
        "v."
      ],
      [
        "material",
        "n. วัสดุ, เนื้อผ้า, ข้อมูล; adj. เกี่ยวกับวัตถุ, สำคัญ",
        "Cotton is a soft natural material for summer shirts.",
        "n., adj."
      ],
      [
        "mathematics",
        "คณิตศาสตร์, วิชาคณิตศาสตร์",
        "She wants to study mathematics at university next year.",
        "n."
      ],
      [
        "maths",
        "วิชาคณิตศาสตร์, คณิต",
        "Our maths homework took less than twenty minutes.",
        "n."
      ],
      [
        "matter",
        "n. เรื่อง, สสาร, ปัญหา; v. สำคัญ, มีความหมาย",
        "Small daily choices really matter over a long time.",
        "n., v."
      ],
      [
        "may",
        "อาจจะ, ขออนุญาต",
        "It may rain later, so take your umbrella.",
        "modal v."
      ],
      [
        "media",
        "สื่อ, สื่อมวลชน",
        "Local media reported the road opening early this morning.",
        "n."
      ],
      [
        "medical",
        "ทางการแพทย์, เกี่ยวกับการแพทย์",
        "You should ask for medical advice before taking pills.",
        "adj."
      ],
      [
        "medicine",
        "ยา, วิชาแพทยศาสตร์",
        "Take this medicine twice a day after meals.",
        "n."
      ],
      [
        "memory",
        "ความทรงจำ, ความจำ, หน่วยความจำ",
        "That summer trip left a warm memory for everyone.",
        "n."
      ],
      [
        "mention",
        "v. กล่าวถึง, เอ่ยถึง; n. การกล่าวถึง",
        "Did she mention what time the bus leaves?",
        "v., n."
      ],
      [
        "metal",
        "โลหะ, เหล็ก",
        "This heavy lunch box is made of shiny metal.",
        "n."
      ],
      [
        "method",
        "วิธีการ, วิธี, ระเบียบวิธี",
        "Try this simple method to remember new English words.",
        "n."
      ],
      [
        "middle",
        "adj. ตรงกลาง, ระดับกลาง; n. ตรงกลาง, ช่วงกลาง",
        "Put the flower vase right in the middle.",
        "adj., n."
      ],
      [
        "might",
        "อาจจะ, คงจะ",
        "We might visit Chiang Mai during the winter holiday.",
        "modal v."
      ],
      [
        "mind",
        "n. จิตใจ, ความคิด, สติปัญญา; v. รังเกียจ, ใส่ใจ",
        "Would you mind opening the window a little bit?",
        "n., v."
      ],
      [
        "mine",
        "pron. ของฉัน; n. เหมืองแร่, ทุ่นระเบิด",
        "Your bag is black, and the blue one is mine.",
        "pron., n."
      ],
      [
        "mirror",
        "กระจกเงา, กระจก",
        "He checked his hair in the bathroom mirror.",
        "n."
      ],
      [
        "missing",
        "ที่หายไป, สูญหาย, ขาดหายไป",
        "One key is missing from my silver key ring.",
        "adj."
      ],
      [
        "mobile",
        "adj. เคลื่อนที่ได้, พกพาได้; n. โทรศัพท์มือถือ",
        "Please switch your mobile phone to silent mode.",
        "adj., n."
      ],
      [
        "monkey",
        "ลิง",
        "A cheeky monkey stole a banana from the basket.",
        "n."
      ],
      [
        "moon",
        "ดวงจันทร์, พระจันทร์",
        "The bright full moon shone above the quiet sea.",
        "n."
      ],
      [
        "mostly",
        "ส่วนใหญ่, โดยมาก",
        "This small bookshop sells mostly travel guides and maps.",
        "adv."
      ],
      [
        "motorcycle",
        "รถจักรยานยนต์, มอเตอร์ไซค์",
        "Always wear a strong helmet when riding a motorcycle.",
        "n."
      ],
      [
        "movement",
        "การเคลื่อนไหว, การขยับ, ขบวนการ",
        "The sensor detects any slight movement near the gate.",
        "n."
      ],
      [
        "musical",
        "adj. เกี่ยวกับดนตรี, ไพเราะ; n. ละครเพลง",
        "We bought tickets for a famous musical tonight.",
        "adj., n."
      ],
      [
        "musician",
        "นักดนตรี",
        "The street musician played soft guitar melodies all evening.",
        "n."
      ],
      [
        "myself",
        "ตัวฉันเอง, ด้วยตัวเอง",
        "I cooked this whole curry dinner all by myself.",
        "pron."
      ],
      [
        "narrow",
        "adj. แคบ, คับแคบ; v. แคบลง, ทำให้แคบ",
        "Drive slowly through the narrow lanes in old town.",
        "adj., v."
      ],
      [
        "national",
        "adj. แห่งชาติ, ประจำชาติ; n. พลเมืองของประเทศ",
        "Monday is a national holiday across the whole country.",
        "adj., n."
      ],
      [
        "nature",
        "ธรรมชาติ, ลักษณะนิสัย",
        "Spending quiet time in nature helps reduce daily stress.",
        "n."
      ],
      [
        "nearly",
        "เกือบ, เกือบจะ",
        "Hurry up because the movie is nearly starting.",
        "adv."
      ],
      [
        "necessary",
        "จำเป็น, สำคัญ",
        "Warm winter boots are necessary for walking in snow.",
        "adj."
      ],
      [
        "neck",
        "คอ, ลำคอ",
        "She tied a warm wool scarf around her neck.",
        "n."
      ],
      [
        "neither",
        "det. ไม่ทั้งสองอย่าง; pron. ไม่มีอันใดเลยทั้งสอง; adv. ไม่เช่นกัน",
        "Neither option works well for our morning schedule.",
        "det., pron., adv."
      ],
      [
        "nervous",
        "ประหม่า, กังวล, ตื่นเต้น",
        "He felt nervous right before giving his first speech.",
        "adj."
      ],
      [
        "network",
        "เครือข่าย, ระบบเชื่อมโยง",
        "Our office built a fast network across all floors.",
        "n."
      ],
      [
        "noise",
        "เสียง, เสียงดังรบกวน",
        "Loud traffic noise outside kept me awake all night.",
        "n."
      ],
      [
        "noisy",
        "เสียงดัง, อึกทึก, หนวกหู",
        "This cafe gets too noisy during the lunch rush.",
        "adj."
      ],
      [
        "none",
        "ไม่มีเลย, ไม่สักคน",
        "None of the fresh cakes remained by closing time.",
        "pron."
      ],
      [
        "normal",
        "adj. ปกติ, ธรรมดา; n. ภาวะปกติ, มาตรฐาน",
        "Traffic returned to normal after the morning parade ended.",
        "adj., n."
      ],
      [
        "normally",
        "โดยปกติ, ตามปกติ",
        "I normally wake up around six on work days.",
        "adv."
      ],
      [
        "notice",
        "n. ประกาศ, ป้ายแจ้ง, การสังเกต; v. สังเกตเห็น",
        "Did you notice the new bakery down the street?",
        "n., v."
      ],
      [
        "novel",
        "นวนิยาย, นิยาย",
        "She finished reading a thick mystery novel last week.",
        "n."
      ],
      [
        "nowhere",
        "ไม่มีที่ไหนเลย, ไม่ไปไหน",
        "The town was full, so we had nowhere to stay.",
        "adv."
      ],
      [
        "nut",
        "ถั่วเปลือกแข็ง, นอต",
        "I found a strange metal nut under my bike.",
        "n."
      ],
      [
        "ocean",
        "มหาสมุทร",
        "Huge cargo ships sail across the wide ocean daily.",
        "n."
      ],
      [
        "offer",
        "n. ข้อเสนอ; v. เสนอ, มอบให้",
        "Thank you for your kind offer to drive us.",
        "n., v."
      ],
      [
        "officer",
        "เจ้าหน้าที่, ตำรวจ, นายทหาร",
        "A helpful customs officer checked our travel bags quickly.",
        "n."
      ],
      [
        "oil",
        "น้ำมัน, น้ำมันพืช",
        "Heat two spoons of olive oil in the pan.",
        "n."
      ],
      [
        "onto",
        "ลงบน, ขึ้นไปบน, สู่",
        "The cat jumped lightly onto the warm kitchen table.",
        "prep."
      ],
      [
        "opportunity",
        "โอกาส",
        "Working abroad gave him a wonderful opportunity to grow.",
        "n."
      ],
      [
        "option",
        "ตัวเลือก, ทางเลือก",
        "Taking the express train is our fastest option today.",
        "n."
      ],
      [
        "ordinary",
        "ธรรมดา, ทั่วไป, ปกติ",
        "It looked like an ordinary stone until we cleaned it.",
        "adj."
      ],
      [
        "organization",
        "องค์กร, หน่วยงาน, การจัดระเบียบ",
        "She volunteers for a local animal rescue organization.",
        "n."
      ],
      [
        "organize",
        "จัดเตรียม, จัดระเบียบ, จัดตั้ง",
        "Let us organize a farewell lunch for our colleague.",
        "v."
      ],
      [
        "original",
        "adj. ดั้งเดิม, ต้นฉบับ, สร้างสรรค์; n. ต้นฉบับ",
        "Keep the original receipt in case you exchange shoes.",
        "adj., n."
      ],
      [
        "ourselves",
        "ตัวเราเอง, พวกเราเอง",
        "We painted the whole living room all by ourselves.",
        "pron."
      ],
      [
        "oven",
        "เตาอบ",
        "Take the hot bread out of the oven carefully.",
        "n."
      ],
      [
        "owner",
        "เจ้าของ",
        "The friendly shop owner always greets regular customers.",
        "n."
      ],
      [
        "pack",
        "v. เก็บของลงกระเป๋า, บรรจุ; n. ห่อ, แพ็ก, ฝูง",
        "Do not forget to pack your charger tonight.",
        "v., n."
      ],
      [
        "pain",
        "ความเจ็บปวด, อาการปวด",
        "Rest your leg if you feel any sharp pain.",
        "n."
      ],
      [
        "painter",
        "จิตรกร, ช่างทาสี",
        "The street painter drew fast portraits near the river.",
        "n."
      ],
      [
        "palace",
        "พระราชวัง, วัง",
        "Tourists lined up early to visit the grand palace.",
        "n."
      ],
      [
        "pants",
        "กางเกง, กางเกงขายาว",
        "These grey cotton pants feel cool in hot weather.",
        "n."
      ],
      [
        "parking",
        "การจอดรถ, ที่จอดรถ",
        "Free parking is available right behind the town hall.",
        "n."
      ],
      [
        "particular",
        "เฉพาะเจาะจง, เป็นพิเศษ, จู้จี้",
        "Is there any particular colour you prefer for shirts?",
        "adj."
      ],
      [
        "pass",
        "v. ผ่าน, สอบผ่าน, ส่งให้; n. บัตรผ่าน, ช่องทาง",
        "Please pass the salt shaker across the dinner table.",
        "v., n."
      ],
      [
        "passenger",
        "ผู้โดยสาร",
        "Every passenger must show a ticket before boarding.",
        "n."
      ],
      [
        "patient",
        "n. คนไข้, ผู้ป่วย; adj. อดทน, ใจเย็น",
        "The nurse smiled kindly at every waiting patient.",
        "n., adj."
      ]
    ]
  },
  {
    "id": "ox-a2-6",
    "label": "A2 Words · 6 (pattern–roof)",
    "deck": "Oxford · A2 · 6",
    "cards": [
      [
        "pattern",
        "ลวดลาย, แบบแผน, รูปแบบ",
        "I love the blue flower pattern on that teacup.",
        "n."
      ],
      [
        "peace",
        "สันติภาพ, ความสงบสุข",
        "Everyone around the world hopes for lasting peace.",
        "n."
      ],
      [
        "penny",
        "เหรียญเพนนี, เงินจำนวนน้อยมาก",
        "I found a shiny old penny under the sofa.",
        "n."
      ],
      [
        "per",
        "ต่อ, ต่อหนึ่งหน่วย",
        "Museum tickets cost ten dollars per adult visitor.",
        "prep."
      ],
      [
        "per cent",
        "adj. ร้อยละ, เปอร์เซ็นต์; adv. ร้อยละ, ต่อร้อย; n. เปอร์เซ็นต์, ร้อยละ",
        "Nearly ninety per cent of guests arrived on time.",
        "adj., adv., n."
      ],
      [
        "perform",
        "แสดง, ปฏิบัติ, ทำงาน",
        "Our school choir will perform on stage tonight.",
        "v."
      ],
      [
        "perhaps",
        "บางที, อาจจะ",
        "Perhaps we should call before driving over there.",
        "adv."
      ],
      [
        "permission",
        "การอนุญาต, คำอนุญาต",
        "Ask your teacher for permission before leaving class early.",
        "n."
      ],
      [
        "personality",
        "บุคลิกภาพ, นิสัยใจคอ",
        "Her warm personality makes new coworkers feel welcome.",
        "n."
      ],
      [
        "pet",
        "สัตว์เลี้ยง",
        "Our building allows one small pet in each flat.",
        "n."
      ],
      [
        "petrol",
        "น้ำมันเบนซิน, น้ำมันเชื้อเพลิง",
        "We stopped to buy petrol before entering the highway.",
        "n."
      ],
      [
        "physical",
        "ทางกาย, ทางกายภาพ, เกี่ยวกับร่างกาย",
        "Daily exercise improves both mental and physical health.",
        "adj."
      ],
      [
        "physics",
        "วิชาฟิสิกส์, ฟิสิกส์",
        "He enjoys studying physics because he loves space.",
        "n."
      ],
      [
        "pick",
        "v. เลือก, เก็บ, เด็ด; n. การเลือก, ตัวเลือก",
        "You can pick whichever seat looks most comfortable.",
        "v., n."
      ],
      [
        "pilot",
        "นักบิน",
        "The experienced pilot landed the plane smoothly in rain.",
        "n."
      ],
      [
        "planet",
        "ดาวเคราะห์",
        "Mars is often called the red planet in books.",
        "n."
      ],
      [
        "plastic",
        "adj. ทำจากพลาสติก; n. พลาสติก",
        "Bring a cloth bag instead of taking plastic ones.",
        "adj., n."
      ],
      [
        "plate",
        "จาน, แผ่นโลหะ",
        "Please put the warm bread on a clean plate.",
        "n."
      ],
      [
        "platform",
        "ชานชาลา, แท่นยกสูง, แพลตฟอร์ม",
        "The express train leaves from platform four shortly.",
        "n."
      ],
      [
        "pleased",
        "ยินดี, พอใจ, ดีใจ",
        "We were very pleased to hear your good news.",
        "adj."
      ],
      [
        "pocket",
        "กระเป๋าเสื้อ, กระเป๋ากางเกง",
        "I keep my house keys inside my jacket pocket.",
        "n."
      ],
      [
        "polite",
        "สุภาพ, มีมารยาท",
        "It is polite to say thank you to drivers.",
        "adj."
      ],
      [
        "pollution",
        "มลพิษ, มลภาวะ",
        "Using public buses helps reduce air pollution in cities.",
        "n."
      ],
      [
        "pop",
        "adj. แนวป๊อป, ยอดนิยม; n. เพลงป๊อป, เสียงดังป๊อป",
        "Her favourite pop singer will perform in Bangkok soon.",
        "adj., n."
      ],
      [
        "population",
        "ประชากร, จำนวนประชากร",
        "The town population grew quickly after the railway opened.",
        "n."
      ],
      [
        "position",
        "n. ตำแหน่ง, ท่าทาง, จุดยืน; v. จัดวางตำแหน่ง",
        "She applied for a marketing position at that company.",
        "n., v."
      ],
      [
        "possession",
        "ทรัพย์สิน, สิ่งของที่เป็นเจ้าของ, การครอบครอง",
        "That old watch was his most treasured possession.",
        "n."
      ],
      [
        "possibility",
        "ความเป็นไปได้, โอกาส",
        "There is a real possibility of heavy rain tonight.",
        "n."
      ],
      [
        "poster",
        "โปสเตอร์, ใบปิด",
        "He hung a bright movie poster on his wall.",
        "n."
      ],
      [
        "power",
        "n. พลัง, อำนาจ, พลังงานไฟฟ้า; v. ขับเคลื่อน, จ่ายไฟ",
        "Wind turbines generate electric power for nearby homes.",
        "n., v."
      ],
      [
        "predict",
        "ทำนาย, คาดการณ์",
        "Weather apps try to predict rain hours in advance.",
        "v."
      ],
      [
        "president",
        "ประธานาธิบดี, ประธาน",
        "The company president thanked everyone at the annual dinner.",
        "n."
      ],
      [
        "prevent",
        "ป้องกัน, ขัดขวาง",
        "Washing hands often helps prevent common winter colds.",
        "v."
      ],
      [
        "print",
        "v. พิมพ์, ตีพิมพ์; n. ตัวพิมพ์, รอยพิมพ์",
        "Can you print two copies of this train ticket?",
        "v., n."
      ],
      [
        "printer",
        "เครื่องพิมพ์, ช่างพิมพ์",
        "Our office printer ran out of black ink today.",
        "n."
      ],
      [
        "prison",
        "เรือนจำ, คุก",
        "The thief spent three years in prison for robbery.",
        "n."
      ],
      [
        "prize",
        "รางวัล",
        "Her painting won first prize at the art show.",
        "n."
      ],
      [
        "process",
        "n. กระบวนการ, ขั้นตอน; v. ดำเนินการ, แปรรูป, ประมวลผล",
        "Applying for a passport is a quick online process.",
        "n., v."
      ],
      [
        "produce",
        "v. ผลิต, ก่อให้เกิด; n. ผลผลิตทางการเกษตร",
        "Local farms produce fresh milk, cheese, and sweet berries.",
        "v., n."
      ],
      [
        "professional",
        "adj. มืออาชีพ, เป็นทางการ; n. ผู้เชี่ยวชาญ, มืออาชีพ",
        "Ask a professional electrician to check those old wires.",
        "adj., n."
      ],
      [
        "professor",
        "ศาสตราจารย์, อาจารย์มหาวิทยาลัย",
        "Our history professor explains complex ideas very clearly.",
        "n."
      ],
      [
        "profile",
        "ประวัติส่วนตัว, ข้อมูลผู้ใช้, ด้านข้าง",
        "Update your online profile before applying for jobs.",
        "n."
      ],
      [
        "program",
        "n. โปรแกรม, รายการ, แผนงาน; v. เขียนโปรแกรม, ตั้งโปรแกรม",
        "This free program helps students check their spelling easily.",
        "n., v."
      ],
      [
        "progress",
        "n. ความก้าวหน้า, ความคืบหน้า; v. ก้าวหน้า, พัฒนา",
        "You have made great progress in speaking Thai.",
        "n., v."
      ],
      [
        "promise",
        "n. คำสัญญา; v. สัญญา, รับปาก",
        "Never make a promise that you cannot easily keep.",
        "n., v."
      ],
      [
        "pronounce",
        "ออกเสียง, ประกาศ",
        "How do you pronounce the name of this street?",
        "v."
      ],
      [
        "protect",
        "ปกป้อง, คุ้มครอง, ป้องกัน",
        "Wear dark sunglasses to protect your eyes outdoors.",
        "v."
      ],
      [
        "provide",
        "จัดหาให้, มอบให้, สนับสนุน",
        "The hotel will provide fresh towels every single morning.",
        "v."
      ],
      [
        "pub",
        "ผับ, ร้านเหล้าแบบอังกฤษ",
        "Friends met at a cozy village pub on Friday.",
        "n."
      ],
      [
        "public",
        "adj. สาธารณะ, ของส่วนรวม; n. สาธารณชน, ประชาชน",
        "The public library stays open until nine on weekdays.",
        "adj., n."
      ],
      [
        "publish",
        "ตีพิมพ์, เผยแพร่, จัดพิมพ์",
        "She plans to publish her first cookbook next autumn.",
        "v."
      ],
      [
        "pull",
        "v. ดึง, ลาก; n. แรงดึง, การดึง",
        "Pull the glass door towards you to open it.",
        "v., n."
      ],
      [
        "purpose",
        "จุดประสงค์, เป้าหมาย",
        "What is the main purpose of your business trip?",
        "n."
      ],
      [
        "push",
        "v. ผลัก, ดัน, กด; n. แรงผลัก, การผลักดัน",
        "Please push the shopping cart back near the entrance.",
        "v., n."
      ],
      [
        "quality",
        "คุณภาพ, คุณสมบัติ",
        "These leather boots cost more because of high quality.",
        "n."
      ],
      [
        "quantity",
        "ปริมาณ, จำนวน",
        "Add a small quantity of sea salt while cooking.",
        "n."
      ],
      [
        "queen",
        "พระราชินี, ราชินี",
        "The queen waved warmly to crowds from the balcony.",
        "n."
      ],
      [
        "quietly",
        "อย่างเงียบเชียบ, เบาเสียง",
        "Please close the door quietly while she sleeps.",
        "adv."
      ],
      [
        "race",
        "n. การแข่งขัน, เชื้อชาติ; v. แข่งความเร็ว, รีบเร่ง",
        "Hundreds of runners joined the big city race.",
        "n., v."
      ],
      [
        "railway",
        "ทางรถไฟ, ระบบรถไฟ",
        "The new railway connects two busy coastal towns quickly.",
        "n."
      ],
      [
        "raise",
        "ยกขึ้น, เพิ่มขึ้น, เลี้ยงดู",
        "Raise your hand if you have any question.",
        "v."
      ],
      [
        "rate",
        "n. อัตรา, ราคา, ระดับ; v. ให้คะแนน, ประเมินค่า",
        "How many stars would you rate this quiet hotel?",
        "n., v."
      ],
      [
        "rather",
        "ค่อนข้าง, คิดดูแล้ว, มากกว่าที่จะ",
        "The soup tastes rather salty, so drink more water.",
        "adv."
      ],
      [
        "reach",
        "v. ไปถึง, เอื้อมถึง, ติดต่อได้; n. ระยะเอื้อมถึง",
        "We should reach the airport before seven tonight.",
        "v., n."
      ],
      [
        "react",
        "มีปฏิกิริยา, ตอบสนอง",
        "How did your parents react to the good news?",
        "v."
      ],
      [
        "realize",
        "ตระหนัก, รู้ตัว, เข้าใจขึ้น",
        "I did not realize how late it already was.",
        "v."
      ],
      [
        "receive",
        "ได้รับ, ต้อนรับ",
        "Did you receive my email about tomorrow morning?",
        "v."
      ],
      [
        "recent",
        "ล่าสุด, เมื่อไม่นานมานี้, ที่ผ่านมาไม่นาน",
        "Recent rain helped fill all the dry farm ponds.",
        "adj."
      ],
      [
        "recently",
        "เมื่อเร็ว ๆ นี้, เมื่อไม่นานมานี้",
        "A new coffee shop opened recently near our street.",
        "adv."
      ],
      [
        "reception",
        "แผนกต้อนรับ, การต้อนรับ, สัญญาณรับ",
        "Leave your room key at the front reception desk.",
        "n."
      ],
      [
        "recipe",
        "สูตรอาหาร, วิธีทำอาหาร",
        "My grandmother shared her secret recipe for mango salad.",
        "n."
      ],
      [
        "recognize",
        "จำได้, ยอมรับ, ตระหนัก",
        "I almost did not recognize him with short hair.",
        "v."
      ],
      [
        "recommend",
        "แนะนำ",
        "Which dish on this menu would you recommend today?",
        "v."
      ],
      [
        "record",
        "n. บันทึก, สถิติ, แผ่นเสียง; v. บันทึกเสียง, จดบันทึก",
        "Press the red button to record a voice message.",
        "n., v."
      ],
      [
        "recording",
        "การบันทึกเสียง, สิ่งที่บันทึกไว้",
        "Listen to the short recording again before answering.",
        "n."
      ],
      [
        "recycle",
        "นำกลับมาใช้ใหม่, รีไซเคิล",
        "Always rinse glass jars before you recycle them.",
        "v."
      ],
      [
        "reduce",
        "ลด, ลดลง, ลดทอน",
        "Cycling to work helps reduce daily travel costs.",
        "v."
      ],
      [
        "refer",
        "อ้างถึง, หมายถึง, ส่งตัวไป",
        "These page numbers refer to the grammar guide.",
        "v."
      ],
      [
        "refuse",
        "ปฏิเสธ, ไม่ยอมรับ",
        "He had to refuse the offer due to time.",
        "v."
      ],
      [
        "region",
        "ภูมิภาค, เขต, แถบ",
        "Northern tea grows well in this cool mountain region.",
        "n."
      ],
      [
        "regular",
        "สม่ำเสมอ, เป็นประจำ, ปกติ",
        "Regular sleep keeps your energy steady all day.",
        "adj."
      ],
      [
        "relationship",
        "ความสัมพันธ์, สายสัมพันธ์",
        "Trust is the base of every strong relationship.",
        "n."
      ],
      [
        "remove",
        "เอาออก, ถอดออก, ขจัด",
        "Please remove your wet shoes at the front door.",
        "v."
      ],
      [
        "repair",
        "v. ซ่อมแซม, แก้ไข; n. การซ่อมแซม",
        "They need a plumber to repair the broken pipe.",
        "v., n."
      ],
      [
        "replace",
        "แทนที่, เปลี่ยนอันใหม่",
        "It is time to replace those old worn tires.",
        "v."
      ],
      [
        "reply",
        "n. คำตอบ, การตอบกลับ; v. ตอบกลับ, ตอบ",
        "I am still waiting for a reply from support.",
        "n., v."
      ],
      [
        "reporter",
        "นักข่าว, ผู้รายงานข่าว",
        "The TV reporter stood outside during the heavy storm.",
        "n."
      ],
      [
        "request",
        "n. คำขอ, การร้องขอ; v. ขอร้อง, แจ้งขอ",
        "Submit your leave request two weeks before traveling.",
        "n., v."
      ],
      [
        "research",
        "n. งานวิจัย, การค้นคว้า; v. วิจัย, ค้นคว้า",
        "Students do careful research before writing their final paper.",
        "n., v."
      ],
      [
        "researcher",
        "นักวิจัย, ผู้ค้นคว้า",
        "The young researcher tested fifty water samples this week.",
        "n."
      ],
      [
        "respond",
        "ตอบสนอง, ตอบกลับ",
        "Please respond to this invitation by Friday afternoon.",
        "v."
      ],
      [
        "response",
        "คำตอบ, การตอบกลับ, ปฏิกิริยา",
        "We got a quick response from the customer team.",
        "n."
      ],
      [
        "rest",
        "n. การพักผ่อน, ส่วนที่เหลือ; v. พักผ่อน, วางพิง",
        "Sit down and rest after your long walk.",
        "n., v."
      ],
      [
        "review",
        "n. บทวิจารณ์, การทบทวน; v. ทบทวน, วิจารณ์",
        "Let us review our notes together before the test.",
        "n., v."
      ],
      [
        "ring",
        "n. แหวน, วงกลม, เสียงกริ่ง; v. โทรศัพท์หา, ส่งเสียงดังกังวาน",
        "She wore a simple silver ring on her finger.",
        "n., v."
      ],
      [
        "rise",
        "v. ขึ้น, สูงขึ้น, เพิ่มขึ้น; n. การเพิ่มขึ้น, การขึ้นเงินเดือน",
        "The warm sun began to rise behind the hills.",
        "v., n."
      ],
      [
        "rock",
        "ก้อนหิน, หิน, ดนตรีร็อก",
        "A smooth flat rock sat beside the clear stream.",
        "n."
      ],
      [
        "role",
        "บทบาท, หน้าที่",
        "Music plays an important role in my daily life.",
        "n."
      ],
      [
        "roof",
        "หลังคา",
        "Rain was tapping loudly on the tin roof.",
        "n."
      ]
    ]
  },
  {
    "id": "ox-a2-7",
    "label": "A2 Words · 7 (round–successful)",
    "deck": "Oxford · A2 · 7",
    "cards": [
      [
        "round",
        "adj. กลม, โค้งมน; adv. รอบๆ, อ้อม; prep. รอบ, อ้อม; n. รอบ, ยก",
        "We sat around a round table for dinner.",
        "adj., adv., prep., n."
      ],
      [
        "route",
        "เส้นทาง, ทางเดิน",
        "This scenic route takes us straight to the coast.",
        "n."
      ],
      [
        "rubbish",
        "ขยะ, เรื่องไร้สาระ",
        "Please put the rubbish outside before the truck arrives.",
        "n."
      ],
      [
        "rude",
        "หยาบคาย, เสียมารยาท",
        "It is rude to interrupt someone while they speak.",
        "adj."
      ],
      [
        "runner",
        "นักวิ่ง, ผู้เข้าแข่งขันวิ่ง",
        "The tired runner crossed the finish line first.",
        "n."
      ],
      [
        "running",
        "การวิ่ง, กีฬาวิ่ง",
        "I go running in the park every morning.",
        "n."
      ],
      [
        "sadly",
        "อย่างน่าเศร้า, น่าเสียดาย",
        "Sadly, the outdoor concert was cancelled because of rain.",
        "adv."
      ],
      [
        "safe",
        "ปลอดภัย, มั่นคง",
        "Make sure the front door is locked and safe.",
        "adj."
      ],
      [
        "sail",
        "v. ล่องเรือ, แล่นเรือ; n. ใบเรือ, การล่องเรือ",
        "They plan to sail across the bay tomorrow.",
        "v., n."
      ],
      [
        "sailing",
        "การล่องเรือใบ, กีฬาเรือใบ",
        "My uncle loves going sailing during the summer.",
        "n."
      ],
      [
        "salary",
        "เงินเดือน, ค่าจ้างรายเดือน",
        "Her new job offers a much higher monthly salary.",
        "n."
      ],
      [
        "sale",
        "การขาย, การลดราคา",
        "That winter jacket is on sale until Friday.",
        "n."
      ],
      [
        "sauce",
        "ซอส, น้ำราด",
        "Add a little tomato sauce to the warm pasta.",
        "n."
      ],
      [
        "save",
        "ประหยัด, ช่วยชีวิต, บันทึก",
        "Remember to save your work before closing the laptop.",
        "v."
      ],
      [
        "scared",
        "กลัว, ตกใจกลัว",
        "The little puppy looked scared during the loud thunderstorm.",
        "adj."
      ],
      [
        "scary",
        "น่ากลัว, ชวนขนลุก",
        "We watched a really scary movie late last night.",
        "adj."
      ],
      [
        "scene",
        "ฉาก, สถานที่เกิดเหตุ, ทิวทัศน์",
        "The opening scene of the film took place outdoors.",
        "n."
      ],
      [
        "schedule",
        "n. ตารางเวลา, กำหนดการ; v. กำหนดเวลา, นัดหมาย",
        "Let me check my schedule for next Tuesday.",
        "n., v."
      ],
      [
        "score",
        "n. คะแนน, ผลคะแนน; v. ทำคะแนน, ให้คะแนน",
        "Our team managed to score two goals early.",
        "n., v."
      ],
      [
        "screen",
        "n. หน้าจอ, ฉากกั้น; v. คัดกรอง, ฉายภาพยนตร์",
        "Keep your phone screen clean with a soft cloth.",
        "n., v."
      ],
      [
        "search",
        "n. การค้นหา; v. ค้นหา, ตรวจค้น",
        "Let us search online for a cheaper train ticket.",
        "n., v."
      ],
      [
        "season",
        "ฤดู, ฤดูกาล",
        "Autumn is my favorite season because the air cools.",
        "n."
      ],
      [
        "seat",
        "n. ที่นั่ง, เก้าอี้; v. จัดให้นั่ง, นั่งได้จำนวน",
        "Is this window seat next to you still free?",
        "n., v."
      ],
      [
        "secondly",
        "ประการที่สอง, อย่างที่สอง",
        "Secondly, we need to check the budget before buying.",
        "adv."
      ],
      [
        "secret",
        "adj. ลับ, เป็นความลับ; n. ความลับ, เคล็ดลับ",
        "Please keep our surprise party a complete secret.",
        "adj., n."
      ],
      [
        "secretary",
        "เลขานุการ",
        "The secretary scheduled three meetings for Monday morning.",
        "n."
      ],
      [
        "seem",
        "ดูเหมือนว่า, ท่าทางจะ",
        "You seem much happier after getting some good sleep.",
        "link. v."
      ],
      [
        "sense",
        "n. ความรู้สึก, ประสาทสัมผัส, เหตุผล; v. รู้สึกได้, สัมผัสได้",
        "That explanation makes a lot of sense to me.",
        "n., v."
      ],
      [
        "separate",
        "adj. แยกกัน, ต่างหาก; v. แยกออกจากกัน, แบ่งแยก",
        "Please keep the clean shirts in a separate bag.",
        "adj., v."
      ],
      [
        "series",
        "ซีรีส์, ชุด, ลำดับต่อเนื่อง",
        "I stayed up watching a new crime series.",
        "n."
      ],
      [
        "serious",
        "จริงจัง, ร้ายแรง, เคร่งขรึม",
        "Smoking causes serious health problems over many years.",
        "adj."
      ],
      [
        "serve",
        "เสิร์ฟ, ให้บริการ, รับใช้",
        "They serve hot breakfast until eleven every morning.",
        "v."
      ],
      [
        "service",
        "การบริการ, บริการ",
        "The customer service at this hotel is wonderful.",
        "n."
      ],
      [
        "several",
        "det. หลาย, สองสาม; pron. หลายสิ่ง, หลายคน",
        "I have visited that island several times already.",
        "det., pron."
      ],
      [
        "shake",
        "v. เขย่า, สั่น; n. การเขย่า, เครื่องดื่มปั่น",
        "Remember to shake the orange juice bottle well first.",
        "v., n."
      ],
      [
        "shall",
        "จะ, ควรจะ",
        "Shall we meet outside the train station at noon?",
        "modal v."
      ],
      [
        "shape",
        "n. รูปร่าง, รูปทรง; v. ปั้นแต่ง, กำหนดทิศทาง",
        "The baker cut the dough into a star shape.",
        "n., v."
      ],
      [
        "sheet",
        "แผ่น, ผ้าปูที่นอน, กระดาษแผ่น",
        "Write your full name at the top of the sheet.",
        "n."
      ],
      [
        "ship",
        "n. เรือใหญ่, เรือเดินสมุทร; v. ขนส่งทางเรือ, จัดส่ง",
        "The cargo ship arrived at the port early.",
        "n., v."
      ],
      [
        "shoulder",
        "ไหล่, บ่า",
        "He carried his heavy backpack over one shoulder.",
        "n."
      ],
      [
        "shout",
        "n. เสียงตะโกน; v. ตะโกน, ร้องเรียก",
        "Do not shout inside the quiet public library.",
        "n., v."
      ],
      [
        "shut",
        "adj. ที่ปิดอยู่; v. ปิด, หยุดทำการ",
        "Please shut the window before the rain blows in.",
        "adj., v."
      ],
      [
        "side",
        "ด้าน, ข้าง, ฝ่าย",
        "Our office sits on the quiet side of town.",
        "n."
      ],
      [
        "sign",
        "n. ป้าย, สัญญาณ, เครื่องหมาย; v. ลงชื่อ, เซ็นชื่อ",
        "Please sign your name on the bottom line.",
        "n., v."
      ],
      [
        "silver",
        "adj. สีเงิน, ทำด้วยเงิน; n. แร่เงิน, สีเงิน",
        "She wears a delicate silver ring every day.",
        "adj., n."
      ],
      [
        "simple",
        "เรียบง่าย, ง่ายดาย, ไม่ซับซ้อน",
        "Follow these simple steps to set up your account.",
        "adj."
      ],
      [
        "since",
        "conj. ตั้งแต่, เพราะว่า; prep. ตั้งแต่; adv. ตั้งแต่นั้นมา",
        "We have been close friends since primary school.",
        "conj., prep., adv."
      ],
      [
        "singing",
        "การร้องเพลง, เสียงร้องเพลง",
        "Her joyful singing filled the small room with warmth.",
        "n."
      ],
      [
        "single",
        "adj. เดี่ยว, โสด, เพียงอันเดียว; n. เพลงซิงเกิล, คนโสด",
        "I booked a single room for two nights.",
        "adj., n."
      ],
      [
        "sir",
        "ท่าน, คุณผู้ชาย",
        "Excuse me, sir, you dropped your leather wallet.",
        "n."
      ],
      [
        "site",
        "สถานที่, ที่ตั้ง, เว็บไซต์",
        "The new museum will open on this historic site.",
        "n."
      ],
      [
        "size",
        "ขนาด, ไซส์",
        "Do you have these running shoes in my size?",
        "n."
      ],
      [
        "ski",
        "adj. เกี่ยวกับสกี; n. ไม้สกี; v. เล่นสกี",
        "My cousins love to ski in Japan every winter.",
        "adj., n., v."
      ],
      [
        "skiing",
        "กีฬาเล่นสกี, การเล่นสกี",
        "We went skiing in the snowy mountains last December.",
        "n."
      ],
      [
        "skin",
        "ผิวหนัง, เปลือก",
        "Wear sunscreen to protect your skin from harsh sunburn.",
        "n."
      ],
      [
        "sky",
        "ท้องฟ้า",
        "Look at the bright stars across the night sky.",
        "n."
      ],
      [
        "slowly",
        "อย่างช้าๆ, ค่อยๆ",
        "Walk slowly because the wet floor is quite slippery.",
        "adv."
      ],
      [
        "smartphone",
        "สมาร์ตโฟน, โทรศัพท์มือถืออัจฉริยะ",
        "Almost everyone uses a smartphone to check daily messages.",
        "n."
      ],
      [
        "smell",
        "n. กลิ่น; v. ได้กลิ่น, ดม, ส่งกลิ่น",
        "I love the fresh smell of roasted morning coffee.",
        "n., v."
      ],
      [
        "smile",
        "n. รอยยิ้ม; v. ยิ้ม",
        "A warm smile helps new guests feel welcome.",
        "n., v."
      ],
      [
        "smoke",
        "n. ควัน; v. สูบบุหรี่, ปล่อยควัน",
        "Thick grey smoke rose from the distant campfire.",
        "n., v."
      ],
      [
        "smoking",
        "การสูบบุหรี่",
        "Smoking is strictly forbidden inside the train station.",
        "n."
      ],
      [
        "soap",
        "สบู่",
        "Wash your hands thoroughly with warm water and soap.",
        "n."
      ],
      [
        "soccer",
        "กีฬาฟุตบอล",
        "The boys play soccer in the field after school.",
        "n."
      ],
      [
        "social",
        "เกี่ยวกับสังคม, ชอบเข้าสังคม",
        "Volunteering is a great way to build social skills.",
        "adj."
      ],
      [
        "society",
        "สังคม, สมาคม, ชมรม",
        "Modern society relies heavily on fast digital communication.",
        "n."
      ],
      [
        "sock",
        "ถุงเท้า",
        "One clean sock is always missing from my drawer.",
        "n."
      ],
      [
        "soft",
        "นุ่ม, อ่อนโยน, เบา",
        "This new cotton pillow feels wonderfully soft and cool.",
        "adj."
      ],
      [
        "soldier",
        "ทหาร",
        "The brave soldier returned home safely to his family.",
        "n."
      ],
      [
        "solution",
        "วิธีแก้ปัญหา, ทางออก, สารละลาย",
        "We finally found a simple solution to the bug.",
        "n."
      ],
      [
        "solve",
        "แก้ปัญหา, คลี่คลาย",
        "Can you help me solve this tricky math puzzle?",
        "v."
      ],
      [
        "somewhere",
        "adv. ที่ไหนสักแห่ง; pron. สถานที่สักแห่ง",
        "I left my house keys somewhere on the table.",
        "adv., pron."
      ],
      [
        "sort",
        "n. ชนิด, ประเภท; v. จัดเรียง, คัดแยก",
        "Let us sort these old books into neat piles.",
        "n., v."
      ],
      [
        "source",
        "แหล่งที่มา, ต้นกำเนิด",
        "Fresh fruit is a great source of daily energy.",
        "n."
      ],
      [
        "speaker",
        "ผู้พูด, ลำโพง",
        "The guest speaker gave an inspiring talk on design.",
        "n."
      ],
      [
        "specific",
        "เฉพาะเจาะจง, ชัดเจน, แน่นอน",
        "Do you have a specific time in mind tomorrow?",
        "adj."
      ],
      [
        "speech",
        "คำปราศรัย, สุนทรพจน์, การพูด",
        "She practiced her graduation speech in front of friends.",
        "n."
      ],
      [
        "speed",
        "n. ความเร็ว, อัตราเร็ว; v. ขับเร็วเกินกำหนด, เร่งความเร็ว",
        "The train slowed its speed near the city bridge.",
        "n., v."
      ],
      [
        "spider",
        "แมงมุม",
        "A tiny spider spun a web near the porch.",
        "n."
      ],
      [
        "spoon",
        "ช้อน",
        "Use a clean wooden spoon to stir the soup.",
        "n."
      ],
      [
        "square",
        "adj. รูปสี่เหลี่ยมจัตุรัส, ตรงมุมฉาก; n. รูปสี่เหลี่ยมจัตุรัส, จัตุรัส",
        "Tourists gathered in the sunny town square at noon.",
        "adj., n."
      ],
      [
        "stage",
        "n. เวที, ขั้นตอน, ระยะ; v. จัดแสดง, จัดฉาก",
        "The young band walked onto the brightly lit stage.",
        "n., v."
      ],
      [
        "stair",
        "ขั้นบันได",
        "Be careful stepping onto that loose wooden stair.",
        "n."
      ],
      [
        "stamp",
        "แสตมป์, ดวงตราไปรษณียากร, ตราประทับ",
        "Stick a postage stamp on the envelope corner.",
        "n."
      ],
      [
        "state",
        "n. รัฐ, สภาพ, สถานะ; adj. ของรัฐ, เป็นทางการ; v. กล่าว, ระบุ",
        "Please state your full name clearly on this form.",
        "n., adj., v."
      ],
      [
        "steal",
        "ขโมย, ลักทรัพย์",
        "Someone tried to steal a bicycle outside the shop.",
        "v."
      ],
      [
        "step",
        "n. ก้าว, ขั้นตอน, ขั้นบันได; v. ก้าวเดิน, เหยียบ",
        "Watch your step when getting off the moving bus.",
        "n., v."
      ],
      [
        "stomach",
        "ท้อง, กระเพาะอาหาร",
        "My stomach always feels full after eating noodle soup.",
        "n."
      ],
      [
        "stone",
        "หิน, ก้อนหิน",
        "The garden wall is built from rough grey stone.",
        "n."
      ],
      [
        "store",
        "n. ร้านค้า, คลังสินค้า; v. เก็บรักษา, สะสม",
        "I stopped by the grocery store on my way home.",
        "n., v."
      ],
      [
        "storm",
        "พายุ, มรสุม",
        "A sudden summer storm knocked down two small trees.",
        "n."
      ],
      [
        "straight",
        "adj. ตรง, ซื่อตรง; adv. ตรงไป, โดยตรง",
        "Walk straight down this street to reach the bank.",
        "adj., adv."
      ],
      [
        "strange",
        "แปลก, ประหลาด, ไม่คุ้นเคย",
        "I heard a strange knocking sound outside my window.",
        "adj."
      ],
      [
        "strategy",
        "กลยุทธ์, ยุทธวิธี, แผนการ",
        "A clear study strategy helps reduce exam stress.",
        "n."
      ],
      [
        "stress",
        "n. ความเครียด, แรงกดดัน, การเน้น; v. เน้นย้ำ, ทำให้เครียด",
        "Daily walks help me manage work stress much better.",
        "n., v."
      ],
      [
        "structure",
        "n. โครงสร้าง, สิ่งก่อสร้าง; v. จัดโครงสร้าง, จัดระบบ",
        "The wooden bridge has a surprisingly strong structure.",
        "n., v."
      ],
      [
        "stupid",
        "โง่, ไร้สติ, ไม่ฉลาด",
        "Leaving the umbrella at home was a stupid mistake.",
        "adj."
      ],
      [
        "succeed",
        "ประสบความสำเร็จ, สืบตำแหน่ง",
        "With steady practice, you will surely succeed in time.",
        "v."
      ],
      [
        "successful",
        "ที่ประสบความสำเร็จ, รุ่งเรือง",
        "She runs a very successful bakery in town.",
        "adj."
      ]
    ]
  },
  {
    "id": "ox-a2-8",
    "label": "A2 Words · 8 (such–zero)",
    "deck": "Oxford · A2 · 8",
    "cards": [
      [
        "such",
        "det. เช่นนั้น, อย่างนั้น, มากขนาดนั้น; pron. สิ่งเช่นนั้น, คนเช่นนั้น",
        "We had such a wonderful time at the beach.",
        "det., pron."
      ],
      [
        "suddenly",
        "อย่างกะทันหัน, ทันใดนั้น",
        "The bright lights suddenly went out during dinner.",
        "adv."
      ],
      [
        "suggest",
        "แนะนำ, เสนอแนะ",
        "I suggest taking the early train to avoid crowds.",
        "v."
      ],
      [
        "suggestion",
        "คำแนะนำ, ข้อเสนอแนะ",
        "Thank you for that helpful suggestion about the menu.",
        "n."
      ],
      [
        "suit",
        "n. ชุดสูท, คดีความ; v. เหมาะสมกับ, เข้ากัน",
        "That dark blue suit looks really sharp on you.",
        "n., v."
      ],
      [
        "support",
        "n. การสนับสนุน, ความช่วยเหลือ; v. สนับสนุน, ช่วยเหลือ, ค้ำจุน",
        "True friends always support each other through hard times.",
        "n., v."
      ],
      [
        "suppose",
        "สมมติว่า, คาดว่า, คิดว่า",
        "I suppose we should bring umbrellas just in case.",
        "v."
      ],
      [
        "surprise",
        "n. ความประหลาดใจ, เรื่องประหลาดใจ; v. ทำให้ประหลาดใจ",
        "Her unexpected visit was a lovely surprise for everyone.",
        "n., v."
      ],
      [
        "surprised",
        "รู้สึกประหลาดใจ, แปลกใจ",
        "Everyone looked surprised when the shy boy sang loudly.",
        "adj."
      ],
      [
        "surprising",
        "น่าประหลาดใจ, น่าแปลกใจ",
        "It is surprising how quickly the little plants grew.",
        "adj."
      ],
      [
        "survey",
        "n. การสำรวจ, แบบสอบถาม; v. สำรวจ, ตรวจตรา",
        "The shop sent a short customer survey by email.",
        "n., v."
      ],
      [
        "sweet",
        "adj. หวาน, อ่อนหวาน, น่ารัก; n. ขนมหวาน, ลูกอม",
        "These ripe strawberries taste wonderfully sweet and fresh.",
        "adj., n."
      ],
      [
        "symbol",
        "สัญลักษณ์, เครื่องหมาย",
        "The white dove is a well-known symbol of peace.",
        "n."
      ],
      [
        "system",
        "ระบบ, ระเบียบวิธี",
        "Our school built a faster online library system.",
        "n."
      ],
      [
        "tablet",
        "แท็บเล็ต, ยาเม็ด",
        "He reads the morning news on his tablet daily.",
        "n."
      ],
      [
        "target",
        "n. เป้าหมาย, เป้า; v. ตั้งเป้า, มุ่งเป้าไปที่",
        "Our sales team reached its monthly target early.",
        "n., v."
      ],
      [
        "task",
        "งาน, ภารกิจ, หน้าที่",
        "Finishing this report is my main task today.",
        "n."
      ],
      [
        "taste",
        "n. รสชาติ, รสนิยม; v. ชิม, มีรสชาติ",
        "Taste the soup before adding any more salt.",
        "n., v."
      ],
      [
        "teaching",
        "การสอน, วิชาชีพครู, คำสอน",
        "Teaching young children takes patience and creative energy.",
        "n."
      ],
      [
        "technology",
        "เทคโนโลยี, วิทยาการ",
        "Modern technology makes working from home much easier.",
        "n."
      ],
      [
        "teenage",
        "วัยรุ่น, เกี่ยวกับวัยรุ่น",
        "My teenage cousin spends hours practicing the electric guitar.",
        "adj."
      ],
      [
        "temperature",
        "อุณหภูมิ, ไข้",
        "The temperature drops noticeably after sunset in November.",
        "n."
      ],
      [
        "term",
        "n. ภาคเรียน, คำศัพท์, ระยะเวลา; v. เรียกว่า, ขนานนาม",
        "Our spring term starts on the first of March.",
        "n., v."
      ],
      [
        "themselves",
        "ตัวพวกเขาเอง, ด้วยตนเอง",
        "The kids cooked a simple breakfast by themselves.",
        "pron."
      ],
      [
        "thick",
        "หนา, ข้น, ทึบ",
        "Wear a thick wool coat outside because it snows.",
        "adj."
      ],
      [
        "thief",
        "ขโมย, โจร",
        "Police caught the bicycle thief near the subway station.",
        "n."
      ],
      [
        "thin",
        "บาง, ผอม, เจือจาง",
        "Cut the cold butter into thin slices first.",
        "adj."
      ],
      [
        "thinking",
        "ความคิด, การคิด",
        "Clear thinking helps when you solve difficult problems.",
        "n."
      ],
      [
        "thought",
        "ความคิด, แนวคิด, การไตร่ตรอง",
        "Have you given any thought to next summer yet?",
        "n."
      ],
      [
        "throw",
        "ขว้าง, โยน, ทิ้ง",
        "Please throw those empty bottles into the recycling bin.",
        "v."
      ],
      [
        "tidy",
        "adj. เป็นระเบียบ, เรียบร้อย; v. จัดให้เรียบร้อย, เก็บกวาด",
        "Keep your study desk tidy so you work faster.",
        "adj., v."
      ],
      [
        "tie",
        "n. เนกไท, สายผูก, ผลเสมอ; v. ผูก, มัด, เสมอกัน",
        "Can you teach me how to tie a tie?",
        "n., v."
      ],
      [
        "tip",
        "n. เคล็ดลับ, ทิป, ปลาย; v. ให้ทิป, เอียง",
        "Thank you for the helpful tip about saving time.",
        "n., v."
      ],
      [
        "tool",
        "เครื่องมือ, อุปกรณ์",
        "A sharp knife is an essential kitchen tool.",
        "n."
      ],
      [
        "top",
        "adj. สูงสุด, ยอดเยี่ยม; n. ยอด, ด้านบน, เสื้อท่อนบน",
        "Wait for me near the top of the stairs.",
        "adj., n."
      ],
      [
        "touch",
        "v. แตะ, สัมผัส, กระทบใจ; n. การสัมผัส, การติดต่อ",
        "Do not touch the wet paint on the bench.",
        "v., n."
      ],
      [
        "tour",
        "n. การท่องเที่ยว, ทัวร์; v. ท่องเที่ยว, เยี่ยมชม",
        "We joined a guided walking tour around old Bangkok.",
        "n., v."
      ],
      [
        "tourism",
        "การท่องเที่ยว, อุตสาหกรรมท่องเที่ยว",
        "Coastal towns depend heavily on summer tourism for income.",
        "n."
      ],
      [
        "towards",
        "มุ่งหน้าสู่, ไปทาง, ต่อ",
        "The hungry cat walked slowly towards its food bowl.",
        "prep."
      ],
      [
        "towel",
        "ผ้าเช็ดตัว, ผ้าเช็ดหน้า",
        "Grab a clean dry towel from the bathroom shelf.",
        "n."
      ],
      [
        "tower",
        "หอคอย, อาคารสูง",
        "We climbed the stone tower for a city view.",
        "n."
      ],
      [
        "toy",
        "adj. ที่เป็นของเล่น; n. ของเล่น",
        "The little boy left his toy train outside.",
        "adj., n."
      ],
      [
        "track",
        "n. รางรถไฟ, ลู่วิ่ง, ร่องรอย; v. ติดตาม, แกะรอย",
        "You can track your package online using this code.",
        "n., v."
      ],
      [
        "tradition",
        "ประเพณี, ธรรมเนียมปฏิบัติ",
        "Eating together on Sunday is our favourite family tradition.",
        "n."
      ],
      [
        "traditional",
        "แบบดั้งเดิม, ตามประเพณี",
        "They served traditional Thai desserts after the wedding dinner.",
        "adj."
      ],
      [
        "trainer",
        "ผู้ฝึกสอน, ครูฝึก, รองเท้าผ้าใบ",
        "My gym trainer showed me safer stretching exercises.",
        "n."
      ],
      [
        "training",
        "การฝึกอบรม, การฝึกซ้อม",
        "New staff receive two weeks of practical training first.",
        "n."
      ],
      [
        "transport",
        "n. การขนส่ง, ยานพาหนะ; v. ขนส่ง, ลำเลียง",
        "Public transport saves commuters money and time every day.",
        "n., v."
      ],
      [
        "traveller",
        "นักเดินทาง, ผู้โดยสาร",
        "The tired traveller checked into a quiet airport hotel.",
        "n."
      ],
      [
        "trouble",
        "n. ปัญหา, ความเดือดร้อน, ความลำบาก; v. รบกวน, ทำให้กังวล",
        "Sorry to trouble you, could you pass the salt?",
        "n., v."
      ],
      [
        "truck",
        "รถบรรทุก",
        "A delivery truck parked right outside our office gate.",
        "n."
      ],
      [
        "twin",
        "adj. ที่เป็นฝาแฝด, คู่กัน; n. ฝาแฝด",
        "My twin brother and I share the same smile.",
        "adj., n."
      ],
      [
        "typical",
        "เป็นแบบฉบับ, ทั่วไป, ปกติ",
        "Rainy afternoons are quite typical during September here.",
        "adj."
      ],
      [
        "underground",
        "adj. ใต้ดิน, ลับ; adv. ใต้ดิน, อย่างลับๆ",
        "We took the underground train to avoid heavy traffic.",
        "adj., adv."
      ],
      [
        "understanding",
        "ความเข้าใจ, ความเห็นอกเห็นใจ",
        "Thank you for your patience and kind understanding today.",
        "n."
      ],
      [
        "unfortunately",
        "โชคร้ายที่, น่าเสียดายที่",
        "Unfortunately, the museum closes early on winter Mondays.",
        "adv."
      ],
      [
        "unhappy",
        "ไม่มีความสุข, เศร้าใจ, ไม่พอใจ",
        "Customers felt unhappy about the sudden price increase.",
        "adj."
      ],
      [
        "uniform",
        "เครื่องแบบ, ชุดนักเรียน",
        "Every student wears a neat blue school uniform.",
        "n."
      ],
      [
        "unit",
        "หน่วย, หน่วยงาน, บทเรียน",
        "Let us review the vocabulary from unit four together.",
        "n."
      ],
      [
        "united",
        "รวมกันเป็นหนึ่ง, เป็นเอกภาพ, สามัคคี",
        "The neighborhood stayed united to clean up the park.",
        "adj."
      ],
      [
        "unusual",
        "ผิดปกติ, แปลกใหม่, ไม่ธรรมดา",
        "Snow in April is very unusual in this region.",
        "adj."
      ],
      [
        "used to",
        "modal v. เคยทำในอดีต; adj. คุ้นเคย, ชิน",
        "My grandfather used to walk five miles to school.",
        "modal v., adj."
      ],
      [
        "user",
        "ผู้ใช้งาน, ผู้ใช้",
        "Each registered user gets a personal password and profile.",
        "n."
      ],
      [
        "usual",
        "ตามปกติ, ประจำ, ธรรมดา",
        "I ordered my usual iced coffee with less sugar.",
        "adj."
      ],
      [
        "valley",
        "หุบเขา",
        "A peaceful green river flows through the mountain valley.",
        "n."
      ],
      [
        "van",
        "รถตู้, รถบรรทุกเล็ก",
        "They rented a white van to move their furniture.",
        "n."
      ],
      [
        "variety",
        "ความหลากหลาย, นานาชนิด",
        "This small market sells a wide variety of fruit.",
        "n."
      ],
      [
        "vehicle",
        "ยานพาหนะ, รถ",
        "Drivers must inspect every company vehicle before long trips.",
        "n."
      ],
      [
        "view",
        "n. ทิวทัศน์, มุมมอง, ความเห็น; v. มองดู, พิจารณา",
        "Our hotel balcony had a stunning view of the mountains.",
        "n., v."
      ],
      [
        "virus",
        "ไวรัส, เชื้อไวรัส",
        "Wash your hands often to stop spreading the virus.",
        "n."
      ],
      [
        "voice",
        "เสียง, น้ำเสียง, สิทธิ์ออกเสียง",
        "She has a calm, warm voice on the radio.",
        "n."
      ],
      [
        "war",
        "สงคราม, การสู้รบ",
        "History books teach us the real cost of war.",
        "n."
      ],
      [
        "washing",
        "การซักผ้า, ผ้าที่ซัก, การล้าง",
        "Help me hang the wet washing outside to dry.",
        "n."
      ],
      [
        "wave",
        "n. คลื่น, การโบกมือ; v. โบกมือ, โบกสะบัด",
        "Watch the tall ocean wave crash against the rocks.",
        "n., v."
      ],
      [
        "weak",
        "อ่อนแอ, อ่อน, จืดจาง",
        "This morning tea tastes a bit too weak today.",
        "adj."
      ],
      [
        "web",
        "เว็บ, เครือข่ายอินเทอร์เน็ต, ใยแมงมุม",
        "You can search reliable travel tips on the web.",
        "n."
      ],
      [
        "wedding",
        "งานแต่งงาน, พิธีสมรส",
        "They invited eighty close friends to their beach wedding.",
        "n."
      ],
      [
        "weight",
        "น้ำหนัก, ความหนัก",
        "Check your suitcase weight before leaving for the airport.",
        "n."
      ],
      [
        "wet",
        "เปียก, ชื้น, มีฝนตก",
        "Leave your wet umbrella by the front door please.",
        "adj."
      ],
      [
        "wheel",
        "ล้อ, พวงมาลัย",
        "Check the air pressure in every bicycle wheel first.",
        "n."
      ],
      [
        "while",
        "conj. ในขณะที่, แม้ว่า; n. ช่วงเวลาหนึ่ง, ครู่หนึ่ง",
        "Listen to calm music while you wash the dishes.",
        "conj., n."
      ],
      [
        "whole",
        "adj. ทั้งหมด, ทั้งชิ้น; n. ทั้งหมด, ส่วนรวม",
        "He ate the whole pizza by himself after work.",
        "adj., n."
      ],
      [
        "whose",
        "det. ของใคร, ซึ่งมี; pron. ของใคร",
        "Whose black backpack is sitting under my desk?",
        "det., pron."
      ],
      [
        "wide",
        "กว้าง, กว้างขวาง",
        "This old stone bridge is wide enough for bicycles.",
        "adj."
      ],
      [
        "wild",
        "ป่า, ดุร้าย, ไร้การควบคุม",
        "We spotted wild deer near the forest trail today.",
        "adj."
      ],
      [
        "wind",
        "n. ลม, กระแสลม; v. ม้วน, พัน, ไขลาน",
        "A cold wind blew across the sandy beach tonight.",
        "n., v."
      ],
      [
        "winner",
        "ผู้ชนะ, ผู้ได้รับรางวัล",
        "The contest winner received a brand-new digital camera.",
        "n."
      ],
      [
        "wish",
        "n. ความปรารถนา, คำอวยพร; v. ปรารถนา, อวยพร",
        "Close your eyes and make a quiet birthday wish.",
        "n., v."
      ],
      [
        "wood",
        "ไม้, เนื้อไม้, ป่าเล็กๆ",
        "This sturdy kitchen table is made of oak wood.",
        "n."
      ],
      [
        "wooden",
        "ที่ทำจากไม้, แข็งทื่อ",
        "She stirred the hot stew with a wooden spoon.",
        "adj."
      ],
      [
        "working",
        "ที่ทำงานอยู่, เกี่ยวกับการทำงาน, ใช้การได้",
        "Working parents often appreciate flexible hours during busy weeks.",
        "adj."
      ],
      [
        "worried",
        "กังวลใจ, เป็นห่วง, กลุ้มใจ",
        "Parents always feel worried when children come home late.",
        "adj."
      ],
      [
        "worry",
        "v. กังวล, เป็นห่วง; n. ความกังวล, เรื่องน่าห่วง",
        "Do not worry about tomorrow, just rest well tonight.",
        "v., n."
      ],
      [
        "worse",
        "adj. แย่ลง, เลวร้ายกว่า; adv. แย่กว่า; n. สิ่งที่แย่กว่า",
        "Heavy afternoon traffic gets much worse when it rains.",
        "adj., adv., n."
      ],
      [
        "worst",
        "adj. แย่ที่สุด, เลวร้ายที่สุด; adv. แย่ที่สุด; n. สิ่งที่แย่ที่สุด",
        "Monday morning is the worst time to drive downtown.",
        "adj., adv., n."
      ],
      [
        "wow",
        "ว้าว, โอ้โห",
        "Wow, that sunset over the ocean looks truly amazing!",
        "excl."
      ],
      [
        "yet",
        "adv. ยัง, จนถึงตอนนี้; conj. แต่ว่า, ถึงอย่างนั้น",
        "Have you finished reading that long novel yet?",
        "adv., conj."
      ],
      [
        "yours",
        "ของคุณ",
        "Is this blue umbrella mine or is it yours?",
        "pron."
      ],
      [
        "zero",
        "ศูนย์, จำนวนศูนย์",
        "Water freezes into solid ice at zero degrees Celsius.",
        "num."
      ]
    ]
  },
  {
    "id": "ox-b1-1",
    "label": "B1 Words · 1 (absolutely–chemical)",
    "deck": "Oxford · B1 · 1",
    "cards": [
      [
        "absolutely",
        "อย่างแน่นอน, โดยสิ้นเชิง, จริงๆ",
        "You are absolutely right about needing a longer break.",
        "adv."
      ],
      [
        "academic",
        "adj. เกี่ยวกับวิชาการ, ด้านการศึกษา; n. นักวิชาการ, อาจารย์มหาวิทยาลัย",
        "She achieved strong academic results throughout high school.",
        "adj., n."
      ],
      [
        "access",
        "n. การเข้าถึง, ทางเข้า; v. เข้าถึง, เข้าใช้งาน",
        "Students have free access to the online library.",
        "n., v."
      ],
      [
        "accommodation",
        "ที่พัก, ที่อยู่อาศัย",
        "We booked affordable accommodation near the central train station.",
        "n."
      ],
      [
        "account",
        "n. บัญชี, บัญชีผู้ใช้, เรื่องเล่า; v. อธิบายสาเหตุ, คิดเป็นสัดส่วน",
        "Please check your bank account balance before paying.",
        "n., v."
      ],
      [
        "achievement",
        "ความสำเร็จ, ผลงานที่ทำได้",
        "Finishing her first marathon felt like a huge achievement.",
        "n."
      ],
      [
        "ad",
        "โฆษณา, ประกาศโฆษณา",
        "I saw a funny ad for sneakers on television.",
        "n."
      ],
      [
        "addition",
        "การเพิ่มเติม, ส่วนเสริม, การบวก",
        "The sunny patio is a lovely addition to our house.",
        "n."
      ],
      [
        "admire",
        "ชื่นชม, นับถือ",
        "I truly admire how calmly she handles busy days.",
        "v."
      ],
      [
        "admit",
        "ยอมรับ, สารภาพ, อนุญาตให้เข้า",
        "He had to admit that he forgot the appointment.",
        "v."
      ],
      [
        "advanced",
        "ขั้นสูง, ก้าวหน้า, ทันสมัย",
        "She joined an advanced English writing class this semester.",
        "adj."
      ],
      [
        "advise",
        "แนะนำ, ให้คำปรึกษา",
        "Doctors advise drinking plenty of water during hot weather.",
        "v."
      ],
      [
        "afford",
        "สามารถจ่ายได้, มีกำลังซื้อ",
        "We cannot afford a brand-new car right now.",
        "v."
      ],
      [
        "aged",
        "ที่มีอายุ, สูงอายุ",
        "This creative art camp welcomes children aged six to ten.",
        "adj."
      ],
      [
        "agent",
        "ตัวแทน, นายหน้า, เจ้าหน้าที่",
        "Our travel agent found much cheaper return flights today.",
        "n."
      ],
      [
        "agreement",
        "ข้อตกลง, สัญญา, ความเห็นพ้อง",
        "Both teams signed a written agreement before starting work.",
        "n."
      ],
      [
        "ahead",
        "ข้างหน้า, ล่วงหน้า",
        "Look straight ahead when riding your bike in traffic.",
        "adv."
      ],
      [
        "AI",
        "ปัญญาประดิษฐ์",
        "Many companies use AI tools to sort customer emails.",
        "n."
      ],
      [
        "aim",
        "n. เป้าหมาย, จุดมุ่งหมาย; v. ตั้งเป้า, เล็ง",
        "Our main aim is finishing the report before Friday.",
        "n., v."
      ],
      [
        "alarm",
        "n. นาฬิกาปลุก, สัญญาณเตือนภัย, ความตื่นตกใจ; v. ทำให้ตกใจ",
        "I set my phone alarm for six every morning.",
        "n., v."
      ],
      [
        "album",
        "อัลบั้มรูป, อัลบั้มเพลง",
        "The band released a wonderful new album last month.",
        "n."
      ],
      [
        "alcohol",
        "แอลกอฮอล์, เครื่องดื่มมึนเมา",
        "Please avoid drinking alcohol before driving home tonight.",
        "n."
      ],
      [
        "alcoholic",
        "ที่มีแอลกอฮอล์, ผสมสุรา",
        "This restaurant menu lists fresh juices and alcoholic drinks.",
        "adj."
      ],
      [
        "amazed",
        "รู้สึกทึ่ง, ประหลาดใจมาก",
        "Everyone felt amazed by the magician's final card trick.",
        "adj."
      ],
      [
        "ambition",
        "ความทะเยอทะยาน, ความมุ่งมั่น, ความใฝ่ฝัน",
        "Her lifelong ambition is to open a small bakery.",
        "n."
      ],
      [
        "ambitious",
        "ทะเยอทะยาน, มุ่งมั่น, ยิ่งใหญ่",
        "That young designer has an ambitious plan for growth.",
        "adj."
      ],
      [
        "analyse",
        "วิเคราะห์, ตรวจสอบอย่างละเอียด",
        "Scientists carefully analyse water samples from the local river.",
        "v."
      ],
      [
        "analysis",
        "การวิเคราะห์, ผลวิเคราะห์",
        "Our team shared a clear analysis of monthly sales.",
        "n."
      ],
      [
        "announce",
        "ประกาศ, แจ้งให้ทราบ",
        "The principal will announce the contest winners at noon.",
        "v."
      ],
      [
        "announcement",
        "ประกาศ, คำแถลง",
        "Listen carefully to the boarding announcement at the gate.",
        "n."
      ],
      [
        "annoy",
        "รบกวน, ทำให้รำคาญใจ",
        "Loud phone calls on quiet trains really annoy passengers.",
        "v."
      ],
      [
        "annoyed",
        "รู้สึกรำคาญ, หงุดหงิด",
        "She looked annoyed when the bus arrived twenty minutes late.",
        "adj."
      ],
      [
        "annoying",
        "น่ารำคาญ, กวนใจ",
        "That constant clicking noise is getting very annoying now.",
        "adj."
      ],
      [
        "apart",
        "ห่างกัน, แยกออกจากกัน, ต่างหาก",
        "Our two family homes are only ten minutes apart.",
        "adv."
      ],
      [
        "apologize",
        "ขอโทษ, กล่าวคำขออภัย",
        "I must apologize for missing your phone call earlier.",
        "v."
      ],
      [
        "application",
        "ใบสมัคร, การสมัคร, แอปพลิเคชัน",
        "Submit your job application online before Monday afternoon.",
        "n."
      ],
      [
        "appointment",
        "การนัดหมาย, เวลานัด",
        "I have a dental appointment at three tomorrow afternoon.",
        "n."
      ],
      [
        "appreciate",
        "ซาบซึ้งใจ, เห็นคุณค่า, ขอบคุณ",
        "I really appreciate your kind help with moving boxes.",
        "v."
      ],
      [
        "approximately",
        "โดยประมาณ, ราวๆ",
        "The flight to Chiang Mai takes approximately one hour.",
        "adv."
      ],
      [
        "arrest",
        "n. การจับกุม; v. จับกุม, ควบคุมตัว",
        "Police had to arrest the driver after the crash.",
        "n., v."
      ],
      [
        "arrival",
        "การมาถึง, การเดินทางมาถึง",
        "Check the arrival screen for your friend's flight number.",
        "n."
      ],
      [
        "assignment",
        "งานที่ได้รับมอบหมาย, การบ้าน",
        "I stayed late finishing my history assignment last night.",
        "n."
      ],
      [
        "assist",
        "ช่วยเหลือ, อำนวยความสะดวก",
        "Staff members are happy to assist elderly passengers onboard.",
        "v."
      ],
      [
        "atmosphere",
        "บรรยากาศ, ชั้นบรรยากาศ",
        "Warm lighting gives this small restaurant a cozy atmosphere.",
        "n."
      ],
      [
        "attach",
        "แนบ, ติด, ผูกติด",
        "Please attach your updated resume to the email.",
        "v."
      ],
      [
        "attitude",
        "ทัศนคติ, ท่าที",
        "A positive attitude makes teamwork much smoother for everyone.",
        "n."
      ],
      [
        "attract",
        "ดึงดูด, ชักจูงความสนใจ",
        "Colorful flowers always attract honeybees to the garden.",
        "v."
      ],
      [
        "attraction",
        "สถานที่ท่องเที่ยว, สิ่งดึงดูดใจ, แรงดึงดูด",
        "The night market is a popular tourist attraction here.",
        "n."
      ],
      [
        "authority",
        "อำนาจหน้าที่, เจ้าหน้าที่, หน่วยงานรัฐ",
        "The local transit authority opened three new bus routes.",
        "n."
      ],
      [
        "aware",
        "ตระหนัก, รู้ตัว, รับรู้",
        "Are you aware of the schedule change this Friday?",
        "adj."
      ],
      [
        "backwards",
        "ถอยหลัง, ย้อนกลับ, กลับด้าน",
        "Be careful if you try walking backwards down stairs.",
        "adv."
      ],
      [
        "bake",
        "อบขนม, อบ",
        "Let us bake fresh banana bread this rainy Sunday.",
        "v."
      ],
      [
        "balance",
        "n. ความสมดุล, ยอดเงินคงเหลือ; v. รักษาสมดุล, ถ่วงดุล",
        "Try to balance busy work hours with proper rest.",
        "n., v."
      ],
      [
        "ban",
        "n. คำสั่งห้าม, การแบน; v. สั่งห้าม, ห้าม",
        "Many cities ban thin plastic bags at grocery stores.",
        "n., v."
      ],
      [
        "base",
        "n. ฐาน, พื้นฐาน, ที่ตั้งหลัก; v. อาศัยพื้นฐานจาก, ตั้งฐาน",
        "The lamp has a heavy metal base for stability.",
        "n., v."
      ],
      [
        "basic",
        "พื้นฐาน, ขั้นต้น, จำเป็น",
        "Learn these basic cooking skills before trying complex recipes.",
        "adj."
      ],
      [
        "basis",
        "พื้นฐาน, หลักการ, เกณฑ์",
        "Trust forms the basis of every strong working relationship.",
        "n."
      ],
      [
        "battery",
        "แบตเตอรี่, ถ่านไฟฉาย",
        "My phone battery always drains quickly during cold weather.",
        "n."
      ],
      [
        "battle",
        "n. การต่อสู้, สมรภูมิ; v. ต่อสู้, ฟันฝ่า",
        "Doctors help patients battle serious infections with modern medicine.",
        "n., v."
      ],
      [
        "beat",
        "v. เอาชนะ, ตี, เต้นเป็นจังหวะ; n. จังหวะ, การตี",
        "Our school team managed to beat the defending champions.",
        "v., n."
      ],
      [
        "beauty",
        "ความงาม, ความสวยงาม",
        "Visitors come to admire the natural beauty of waterfalls.",
        "n."
      ],
      [
        "bee",
        "ผึ้ง",
        "A fuzzy yellow bee landed softly on the sunflower.",
        "n."
      ],
      [
        "belief",
        "ความเชื่อ, ความศรัทธา",
        "Respecting every cultural belief helps people live peacefully together.",
        "n."
      ],
      [
        "bell",
        "ระฆัง, กระดิ่ง, กริ่ง",
        "Ring the small brass bell on the hotel desk.",
        "n."
      ],
      [
        "bend",
        "n. ทางโค้ง, การงอ; v. ก้มลง, ดัดงอ, โค้ง",
        "Bend your knees slightly when lifting any heavy box.",
        "n., v."
      ],
      [
        "bite",
        "n. การกัด, คำหนึ่ง; v. กัด, ขบ",
        "Watch out, that grumpy street dog might bite!",
        "n., v."
      ],
      [
        "block",
        "n. ช่วงตึก, แท่ง, ก้อน; v. ขวางกั้น, ปิดกั้น",
        "A fallen tree managed to block the narrow lane.",
        "n., v."
      ],
      [
        "bomb",
        "n. ระเบิด; v. ทิ้งระเบิด",
        "Experts safely cleared an old bomb found near construction.",
        "n., v."
      ],
      [
        "border",
        "n. พรมแดน, ชายแดน, ขอบ; v. มีพรมแดนติดกับ, ขอบ",
        "Show your passport before crossing the northern border today.",
        "n., v."
      ],
      [
        "bother",
        "รบกวน, ทำให้รำคาญ, เสียเวลา",
        "Do not bother cooking tonight because I brought dinner.",
        "v."
      ],
      [
        "branch",
        "สาขา, กิ่งไม้, แขนง",
        "Our bank opened a new local branch near home.",
        "n."
      ],
      [
        "brand",
        "n. ยี่ห้อ, แบรนด์; v. ตีตรา, สร้างภาพลักษณ์แบรนด์",
        "Which coffee brand do you usually buy for home?",
        "n., v."
      ],
      [
        "brave",
        "กล้าหาญ, ไม่เกรงกลัว",
        "The brave firefighter carried two kittens from the house.",
        "adj."
      ],
      [
        "breathe",
        "หายใจ",
        "Step outside to breathe some cool fresh mountain air.",
        "v."
      ],
      [
        "breathing",
        "การหายใจ, ลมหายใจ",
        "Slow, steady breathing helps calm your nerves before speaking.",
        "n."
      ],
      [
        "bride",
        "เจ้าสาว",
        "The smiling bride carried a bouquet of white roses.",
        "n."
      ],
      [
        "bubble",
        "ฟองอากาศ, ฟองสบู่",
        "A giant soap bubble floated gently across the yard.",
        "n."
      ],
      [
        "bury",
        "ฝัง, กลบ",
        "Dogs love to bury spare bones in soft dirt.",
        "v."
      ],
      [
        "calm",
        "adj. สงบ, ใจเย็น; n. ความสงบ; v. ทำให้สงบ",
        "Try to stay calm and take three slow breaths.",
        "adj., n., v."
      ],
      [
        "campaign",
        "n. การรณรงค์, แคมเปญ; v. รณรงค์, หาเสียง",
        "Students launched a green campaign to recycle more paper.",
        "n., v."
      ],
      [
        "campus",
        "วิทยาเขต, บริเวณมหาวิทยาลัย",
        "Cycling is the fastest way around our large campus.",
        "n."
      ],
      [
        "candidate",
        "ผู้สมัคร, ผู้เข้าคัดเลือก",
        "Each job candidate had a short interview this morning.",
        "n."
      ],
      [
        "cap",
        "หมวกแก๊ป, ฝาครอบ",
        "Wear a cotton baseball cap to shade your eyes.",
        "n."
      ],
      [
        "captain",
        "กัปตัน, หัวหน้าทีม",
        "The team captain shook hands with the opposing players.",
        "n."
      ],
      [
        "careless",
        "ประมาท, สะเพร่า, ไม่ระมัดระวัง",
        "A careless spelling mistake ruined the neat presentation slide.",
        "adj."
      ],
      [
        "category",
        "หมวดหมู่, ประเภท",
        "Select the right expense category before saving the receipt.",
        "n."
      ],
      [
        "ceiling",
        "เพดาน",
        "We hung a bright paper lantern from the ceiling.",
        "n."
      ],
      [
        "celebration",
        "การเฉลิมฉลอง, งานฉลอง",
        "Our whole family joined the New Year dinner celebration.",
        "n."
      ],
      [
        "central",
        "ส่วนกลาง, ศูนย์กลาง, สำคัญที่สุด",
        "Meet me outside the central exit at two sharp.",
        "adj."
      ],
      [
        "ceremony",
        "พิธี, พิธีการ",
        "The outdoor graduation ceremony begins promptly at nine o'clock.",
        "n."
      ],
      [
        "chain",
        "n. โซ่, เครือร้านค้า, ลำดับต่อเนื่อง; v. ล่ามโซ่",
        "This local coffee chain has twelve shops in town.",
        "n., v."
      ],
      [
        "challenge",
        "n. ความท้าทาย, อุปสรรค; v. ท้าทาย, โต้แย้ง",
        "Learning Thai tones can be a fun language challenge.",
        "n., v."
      ],
      [
        "champion",
        "ผู้ชนะเลิศ, แชมป์, ผู้สนับสนุน",
        "She became the national swimming champion at age nineteen.",
        "n."
      ],
      [
        "channel",
        "ช่องโทรทัศน์, ช่องทาง, ช่องแคบ",
        "Switch to the news channel for the weather report.",
        "n."
      ],
      [
        "chapter",
        "บทในหนังสือ, ช่วงสำคัญ",
        "I always read one quiet chapter before falling asleep.",
        "n."
      ],
      [
        "charge",
        "n. ค่าบริการ, ข้อกล่าวหา, หน้าที่ดูแล; v. คิดเงิน, ชาร์จไฟ, กล่าวหา",
        "How much do they charge for weekend parking here?",
        "n., v."
      ],
      [
        "cheat",
        "n. คนขี้โกง; v. โกง, นอกใจ",
        "Good players follow the rules and never try to cheat.",
        "n., v."
      ],
      [
        "cheerful",
        "ร่าเริง, สดใส, เบิกบาน",
        "Her cheerful greeting brightened everyone's rainy Monday morning.",
        "adj."
      ],
      [
        "chemical",
        "adj. ทางเคมี, เกี่ยวกับสารเคมี; n. สารเคมี",
        "Keep every household chemical away from young children.",
        "adj., n."
      ]
    ]
  },
  {
    "id": "ox-b1-2",
    "label": "B1 Words · 2 (chest–election)",
    "deck": "Oxford · B1 · 2",
    "cards": [
      [
        "chest",
        "หน้าอก, หีบ, ลิ้นชักเก็บของ",
        "He felt a dull ache in his upper chest.",
        "n."
      ],
      [
        "childhood",
        "วัยเด็ก, ช่วงชีวิตตอนเด็ก",
        "I spent my happy childhood near a quiet beach.",
        "n."
      ],
      [
        "claim",
        "n. ข้อเรียกร้อง, การอ้างสิทธิ์; v. อ้าง, เรียกร้องสิทธิ์",
        "She plans to claim her lost bag at reception.",
        "n., v."
      ],
      [
        "clause",
        "อนุประโยค, ข้อความในสัญญา",
        "Read every contract clause carefully before signing your name.",
        "n."
      ],
      [
        "click",
        "n. เสียงคลิก, การคลิกเมาส์; v. คลิก, ส่งเสียงคลิก",
        "Double click the blue button to download your ticket.",
        "n., v."
      ],
      [
        "client",
        "ลูกค้า, ผู้ว่าจ้าง",
        "Our design team met a new client this morning.",
        "n."
      ],
      [
        "cloth",
        "ผ้า, ผืนผ้า, ผ้าเช็ด",
        "Wipe the wooden counter with a clean damp cloth.",
        "n."
      ],
      [
        "clue",
        "เบาะแส, ร่องรอย, คำใบ้",
        "This tiny footprint gives detectives an important new clue.",
        "n."
      ],
      [
        "coal",
        "ถ่านหิน",
        "Many countries are replacing dirty coal with solar power.",
        "n."
      ],
      [
        "coin",
        "เหรียญ, เงินเหรียญ",
        "I found a shiny silver coin on the sidewalk.",
        "n."
      ],
      [
        "collection",
        "คอลเลกชัน, ของสะสม, การรวบรวม",
        "My aunt owns a large collection of vintage postcards.",
        "n."
      ],
      [
        "coloured",
        "ที่มีสี, ระบายสี, มีสีสัน",
        "She wrapped the gift in brightly coloured paper.",
        "adj."
      ],
      [
        "combine",
        "รวมเข้าด้วยกัน, ผสมผสาน",
        "Combine the warm flour and sugar in one bowl.",
        "v."
      ],
      [
        "commercial",
        "adj. เกี่ยวกับการค้า, เชิงพาณิชย์; n. โฆษณาทางทีวีหรือวิทยุ",
        "That busy street is the city's main commercial district.",
        "adj., n."
      ],
      [
        "commit",
        "กระทำความผิด, ผูกมัด, มุ่งมั่นอุทิศตน",
        "Do not commit to extra shifts when you feel tired.",
        "v."
      ],
      [
        "communication",
        "การสื่อสาร, การติดต่อ",
        "Clear communication helps small teams finish projects without stress.",
        "n."
      ],
      [
        "comparison",
        "การเปรียบเทียบ",
        "Let us make a quick price comparison before ordering.",
        "n."
      ],
      [
        "competitive",
        "ที่มีการแข่งขันสูง, ชอบแข่งขัน, แข่งขันได้",
        "The job market for junior designers feels quite competitive.",
        "adj."
      ],
      [
        "competitor",
        "คู่แข่ง, ผู้เข้าแข่งขัน",
        "Our biggest competitor lowered their prices by ten percent.",
        "n."
      ],
      [
        "complaint",
        "คำร้องเรียน, การบ่น, ข้อร้องทุกข์",
        "The manager politely answered every customer complaint yesterday.",
        "n."
      ],
      [
        "complex",
        "adj. ซับซ้อน, ยุ่งยาก; n. อาคารชุด, ปมทางใจ",
        "This math problem looks complex at first glance.",
        "adj., n."
      ],
      [
        "concentrate",
        "มีสมาธิ, จดจ่อ, รวมศูนย์",
        "Turn off your television to concentrate on studying tonight.",
        "v."
      ],
      [
        "conclude",
        "สรุป, ลงความเห็น, สิ้นสุด",
        "The speakers will conclude the workshop with open questions.",
        "v."
      ],
      [
        "conclusion",
        "ข้อสรุป, ตอนจบ",
        "We reached the same conclusion after checking all the numbers.",
        "n."
      ],
      [
        "confident",
        "มั่นใจ, เชื่อมั่น",
        "Practice aloud so you feel confident during your speech.",
        "adj."
      ],
      [
        "confirm",
        "ยืนยัน, รับรอง",
        "Please email us to confirm your hotel booking tomorrow.",
        "v."
      ],
      [
        "confuse",
        "ทำให้สับสน, ปะปน",
        "Do not confuse those two similar street names downtown.",
        "v."
      ],
      [
        "confused",
        "สับสน, งุนงง",
        "Tourists often look confused by the unmarked subway exits.",
        "adj."
      ],
      [
        "connection",
        "การเชื่อมต่อ, ความเชื่อมโยง, ความสัมพันธ์",
        "The train connection at the central station is quick.",
        "n."
      ],
      [
        "consequence",
        "ผลที่ตามมา, ผลลัพธ์",
        "Skipping sleep every night has a serious health consequence.",
        "n."
      ],
      [
        "consist",
        "ประกอบด้วย",
        "A healthy lunch should consist of vegetables and protein.",
        "v."
      ],
      [
        "consume",
        "บริโภค, ใช้สอย, เผาผลาญ",
        "Older refrigerators consume much more electricity than newer ones.",
        "v."
      ],
      [
        "consumer",
        "ผู้บริโภค, ผู้ซื้อ",
        "Every smart consumer compares product quality before paying.",
        "n."
      ],
      [
        "contact",
        "n. การติดต่อ, ผู้ติดต่อ; v. ติดต่อ, สัมผัส",
        "Feel free to contact me anytime by email tomorrow.",
        "n., v."
      ],
      [
        "container",
        "ภาชนะบรรจุ, ตู้คอนเทนเนอร์",
        "Store leftover rice inside an airtight plastic container.",
        "n."
      ],
      [
        "content",
        "เนื้อหา, สิ่งที่บรรจุอยู่ข้างใน",
        "Check the content of your parcel before signing here.",
        "n."
      ],
      [
        "continuous",
        "ต่อเนื่อง, ไม่ขาดสาย",
        "The continuous rain kept everyone indoors all weekend long.",
        "adj."
      ],
      [
        "contrast",
        "n. ความแตกต่าง, ความตัดกัน; v. เปรียบเทียบให้เห็นความต่าง",
        "The white snow creates a sharp contrast against dark pines.",
        "n., v."
      ],
      [
        "convenient",
        "สะดวกสบาย, เหมาะเจาะ",
        "Living beside a subway station is super convenient daily.",
        "adj."
      ],
      [
        "convince",
        "โน้มน้าวใจ, ทำให้เชื่อ",
        "She tried to convince her parents to adopt kittens.",
        "v."
      ],
      [
        "costume",
        "ชุดแต่งกาย, ชุดการแสดง, ชุดแฟนซี",
        "He wore a funny pirate costume to the party.",
        "n."
      ],
      [
        "cottage",
        "กระท่อม, บ้านพักหลังเล็กในชนบท",
        "They rented a cozy stone cottage beside the lake.",
        "n."
      ],
      [
        "cotton",
        "ฝ้าย, ผ้าฝ้าย",
        "Light cotton shirts feel cool during humid summer afternoons.",
        "n."
      ],
      [
        "countryside",
        "ชนบท, ต่างจังหวัด",
        "We cycled through the peaceful green countryside on Sunday.",
        "n."
      ],
      [
        "court",
        "ศาล, สนามกีฬา, ลาน",
        "They booked an indoor tennis court for Friday evening.",
        "n."
      ],
      [
        "covered",
        "ที่ถูกปกคลุม, มีหลังคาคลุม",
        "The quiet mountain road was covered in fresh snow.",
        "adj."
      ],
      [
        "cruel",
        "โหดร้าย, ใจร้าย, ทารุณ",
        "It is cruel to leave pets outside in storms.",
        "adj."
      ],
      [
        "cultural",
        "ทางวัฒนธรรม, เกี่ยวกับวัฒนธรรม",
        "Chiang Mai hosts many colorful cultural festivals each autumn.",
        "adj."
      ],
      [
        "currency",
        "สกุลเงิน, เงินตรา",
        "Exchange some local currency before leaving the airport terminal.",
        "n."
      ],
      [
        "current",
        "adj. ปัจจุบัน, ที่ใช้อยู่ตอนนี้; n. กระแสน้ำ, กระแสไฟฟ้า",
        "Our current office address is printed on this card.",
        "adj., n."
      ],
      [
        "currently",
        "ในปัจจุบัน, ตอนนี้, ขณะนี้",
        "My older brother is currently working abroad in Tokyo.",
        "adv."
      ],
      [
        "curtain",
        "ผ้าม่าน, ม่าน",
        "Draw the bedroom curtain to block the morning sunlight.",
        "n."
      ],
      [
        "custom",
        "ประเพณี, ขนบธรรมเนียม, ศุลกากร",
        "Removing shoes indoors is a polite local custom here.",
        "n."
      ],
      [
        "damage",
        "n. ความเสียหาย; v. ทำความเสียหาย, ทำให้ชำรุด",
        "Strong winds can damage weak roofs during tropical storms.",
        "n., v."
      ],
      [
        "decade",
        "ทศวรรษ, รอบสิบปี",
        "City life has changed rapidly over the past decade.",
        "n."
      ],
      [
        "decorate",
        "ตกแต่ง, ประดับประดา",
        "Let us decorate the living room with string lights.",
        "v."
      ],
      [
        "define",
        "นิยาม, ให้คำจำกัดความ, กำหนดขอบเขต",
        "How would you define true happiness in one sentence?",
        "v."
      ],
      [
        "definite",
        "แน่นอน, ชัดเจน, ตายตัว",
        "Let us set a definite date for our picnic.",
        "adj."
      ],
      [
        "definition",
        "คำนิยาม, ความหมาย, ความคมชัด",
        "Look up the exact definition in a learner dictionary.",
        "n."
      ],
      [
        "deliver",
        "ส่งของ, จัดส่ง, กล่าวปราศรัย",
        "The courier will deliver your package before four o'clock.",
        "v."
      ],
      [
        "departure",
        "การออกเดินทาง, เที่ยวออก",
        "Arrive two hours before your international flight departure time.",
        "n."
      ],
      [
        "despite",
        "แม้ว่า, ทั้งๆ ที่",
        "We enjoyed our afternoon walk despite the light drizzle.",
        "prep."
      ],
      [
        "destination",
        "จุดหมายปลายทาง, ปลายทาง",
        "Krabi is a favorite holiday destination for ocean lovers.",
        "n."
      ],
      [
        "determine",
        "กำหนด, ตัดสินใจ, ระบุให้แน่ชัด",
        "Blood tests help doctors determine the exact cause quickly.",
        "v."
      ],
      [
        "determined",
        "มุ่งมั่น, แน่วแน่, ตั้งใจจริง",
        "She felt determined to finish the race without stopping.",
        "adj."
      ],
      [
        "development",
        "การพัฒนา, ความก้าวหน้า, โครงการพัฒนา",
        "Regular reading supports healthy language development in young kids.",
        "n."
      ],
      [
        "diagram",
        "แผนภาพ, ไดอะแกรม",
        "This clear diagram shows how the cooling system works.",
        "n."
      ],
      [
        "diamond",
        "เพชร, รูปข้าวหลามตัด",
        "A tiny diamond sparkled quietly on her silver ring.",
        "n."
      ],
      [
        "difficulty",
        "ความยากลำบาก, อุปสรรค, ปัญหา",
        "He climbed the steep hill without any real difficulty.",
        "n."
      ],
      [
        "directly",
        "โดยตรง, ตรงไป, ทันที",
        "The express bus goes directly to the main terminal.",
        "adv."
      ],
      [
        "dirt",
        "ฝุ่นดิน, สิ่งสกปรก, คราบสกปรก",
        "Wipe the wet dirt off your boots before entering.",
        "n."
      ],
      [
        "disadvantage",
        "ข้อเสีย, ความเสียเปรียบ",
        "High rent is the main disadvantage of living downtown.",
        "n."
      ],
      [
        "disappointed",
        "ผิดหวัง, เสียใจ",
        "Fans felt disappointed when the rain stopped the match.",
        "adj."
      ],
      [
        "disappointing",
        "น่าผิดหวัง, ทำให้ผิดหวัง",
        "The cold soup was a disappointing start to dinner.",
        "adj."
      ],
      [
        "discount",
        "n. ส่วนลด; v. ลดราคา, ไม่นำมาพิจารณา",
        "Students get a ten percent discount at this bookstore.",
        "n., v."
      ],
      [
        "dislike",
        "n. ความไม่ชอบ; v. ไม่ชอบ, เกลียด",
        "Why do so many young kids dislike eating broccoli?",
        "n., v."
      ],
      [
        "divide",
        "v. แบ่ง, หาร, แยก; n. เส้นแบ่ง, ความแตกแยก",
        "Let us divide the dinner bill evenly among four friends.",
        "v., n."
      ],
      [
        "documentary",
        "สารคดี",
        "We watched an amazing wildlife documentary about ocean whales.",
        "n."
      ],
      [
        "donate",
        "บริจาค, สละให้",
        "Many neighbors donate warm winter clothes to local shelters.",
        "v."
      ],
      [
        "doubt",
        "n. ความสงสัย, ข้อกังขา; v. สงสัย, ไม่แน่ใจ",
        "I doubt the bus will arrive early in traffic.",
        "n., v."
      ],
      [
        "dressed",
        "แต่งตัวแล้ว, สวมใส่เสื้อผ้า",
        "Get dressed quickly because the school van is outside.",
        "adj."
      ],
      [
        "drum",
        "กลอง, ถังทรงกระบอก",
        "My little nephew loves banging on his wooden drum.",
        "n."
      ],
      [
        "drunk",
        "เมา, มึนเมาสุรา",
        "Never get into a car with a drunk driver.",
        "adj."
      ],
      [
        "due",
        "ครบกำหนด, ที่คาดว่าจะมาถึง, เนื่องมาจาก",
        "The monthly electricity bill is due by Friday afternoon.",
        "adj."
      ],
      [
        "dust",
        "ฝุ่น, ละอองฝุ่น",
        "Wipe the grey dust off the bookshelf this afternoon.",
        "n."
      ],
      [
        "duty",
        "หน้าที่, ความรับผิดชอบ, ภาษีอากร",
        "It is every citizen's duty to protect shared parks.",
        "n."
      ],
      [
        "earthquake",
        "แผ่นดินไหว",
        "Everyone ran outside safely when the mild earthquake hit.",
        "n."
      ],
      [
        "eastern",
        "ทางตะวันออก, เกี่ยวกับตะวันออก",
        "The eastern sky turned bright pink before sunrise today.",
        "adj."
      ],
      [
        "economic",
        "ทางเศรษฐกิจ, เกี่ยวกับเศรษฐกิจ",
        "Tourism brings steady economic growth to many coastal towns.",
        "adj."
      ],
      [
        "economy",
        "เศรษฐกิจ, การประหยัด",
        "Small local businesses help keep the neighborhood economy strong.",
        "n."
      ],
      [
        "edge",
        "ขอบ, ริม, ด้านคม",
        "Do not leave your glass near the table edge.",
        "n."
      ],
      [
        "editor",
        "บรรณาธิการ, ผู้แก้ไขตัดต่อ",
        "The magazine editor checked every article for grammar errors.",
        "n."
      ],
      [
        "educate",
        "ให้การศึกษา, อบรมสั่งสอน",
        "Public libraries help educate people of all ages freely.",
        "v."
      ],
      [
        "educated",
        "มีการศึกษา, ได้รับการอบรม",
        "She is a kind and highly educated family doctor.",
        "adj."
      ],
      [
        "educational",
        "ทางการศึกษา, ที่ให้ความรู้",
        "This museum offers fun educational games for school groups.",
        "adj."
      ],
      [
        "effective",
        "มีประสิทธิภาพ, ได้ผลดี",
        "Taking brief study breaks is a very effective habit.",
        "adj."
      ],
      [
        "effectively",
        "อย่างมีประสิทธิภาพ, อย่างได้ผล",
        "Good managers communicate clearly and listen effectively to staff.",
        "adv."
      ],
      [
        "effort",
        "ความพยายาม, ความทุ่มเท",
        "Cooking homemade meals takes effort, yet tastes much better.",
        "n."
      ],
      [
        "election",
        "การเลือกตั้ง",
        "Citizens lined up early to vote in the election.",
        "n."
      ]
    ]
  },
  {
    "id": "ox-b1-3",
    "label": "B1 Words · 3 (element–horrible)",
    "deck": "Oxford · B1 · 3",
    "cards": [
      [
        "element",
        "องค์ประกอบ, ธาตุ, ส่วนสำคัญ",
        "Honesty is an essential element of any lasting friendship.",
        "n."
      ],
      [
        "embarrassed",
        "รู้สึกอาย, เขินอาย, ขายหน้า",
        "He felt embarrassed after spilling coffee on his shirt.",
        "adj."
      ],
      [
        "embarrassing",
        "น่าอาย, ชวนเขิน, ขายหน้า",
        "Forgetting my neighbor's name was such an embarrassing moment.",
        "adj."
      ],
      [
        "emergency",
        "เหตุฉุกเฉิน, ภาวะฉุกเฉิน",
        "Keep the hospital emergency number saved in your phone.",
        "n."
      ],
      [
        "emotion",
        "อารมณ์, ความรู้สึก",
        "Music often expresses deep emotion better than spoken words.",
        "n."
      ],
      [
        "employment",
        "การจ้างงาน, การมีงานทำ, งาน",
        "The new factory created steady employment for local residents.",
        "n."
      ],
      [
        "encourage",
        "สนับสนุน, ให้กำลังใจ, กระตุ้น",
        "Good teachers always encourage students to ask honest questions.",
        "v."
      ],
      [
        "enemy",
        "ศัตรู, คู่ปรปักษ์",
        "Bad weather was the outdoor festival's worst enemy today.",
        "n."
      ],
      [
        "engaged",
        "หมั้นหมาย, ยุ่งอยู่, มีส่วนร่วม",
        "My older sister got engaged to her partner yesterday.",
        "adj."
      ],
      [
        "engineering",
        "วิศวกรรมศาสตร์, งานวิศวกรรม",
        "She plans to study civil engineering at university soon.",
        "n."
      ],
      [
        "entertain",
        "ให้ความบันเทิง, สร้างความเพลิดเพลิน, รับรองแขก",
        "Picture books easily entertain young children on long flights.",
        "v."
      ],
      [
        "entertainment",
        "ความบันเทิง, การแสดงบันเทิง",
        "The town square offers free weekend entertainment every summer.",
        "n."
      ],
      [
        "entrance",
        "ทางเข้า, การเข้ามา, สิทธิ์เข้าเรียน",
        "Wait for me outside the main museum entrance please.",
        "n."
      ],
      [
        "entry",
        "การเข้า, รายการที่บันทึก, ผลงานที่ส่งเข้าประกวด",
        "Write today's date above your first diary entry please.",
        "n."
      ],
      [
        "environmental",
        "เกี่ยวกับสิ่งแวดล้อม",
        "Planting neighborhood trees supports local environmental protection efforts.",
        "adj."
      ],
      [
        "episode",
        "ตอน, เหตุการณ์หนึ่ง",
        "Let us watch one more episode before bedtime tonight.",
        "n."
      ],
      [
        "equal",
        "adj. เท่ากัน, เสมอภาค; v. เท่ากับ; n. ผู้ที่ทัดเทียมกัน",
        "Cut the chocolate cake into four equal pieces please.",
        "adj., v., n."
      ],
      [
        "equally",
        "อย่างเท่าเทียมกัน, พอๆ กัน",
        "Parents should share household chores equally at home.",
        "adv."
      ],
      [
        "escape",
        "n. การหลบหนี, ทางหนี; v. หนี, รอดพ้น",
        "The clever cat managed to escape through the window.",
        "n., v."
      ],
      [
        "essential",
        "จำเป็นอย่างยิ่ง, สำคัญยิ่ง, ขาดไม่ได้",
        "Drinking clean water daily is essential for good health.",
        "adj."
      ],
      [
        "eventually",
        "ในที่สุด, สุดท้ายแล้ว",
        "After several rainy days, the warm sunshine eventually returned.",
        "adv."
      ],
      [
        "examine",
        "ตรวจสอบ, พิจารณา, ตรวจร่างกาย",
        "The vet will carefully examine our puppy's sore paw.",
        "v."
      ],
      [
        "exchange",
        "n. การแลกเปลี่ยน, อัตราแลกเปลี่ยน; v. แลกเปลี่ยน",
        "Can I exchange this medium shirt for a large?",
        "n., v."
      ],
      [
        "excitement",
        "ความตื่นเต้น, ความคึกคัก",
        "Kids waited in joyful excitement for the parade start.",
        "n."
      ],
      [
        "exhibition",
        "นิทรรศการ, งานแสดงสินค้าหรือศิลปะ",
        "We visited a photography exhibition at the city gallery.",
        "n."
      ],
      [
        "expand",
        "ขยาย, ขยายตัว, เพิ่มเติม",
        "The bakery plans to expand into a larger shop.",
        "v."
      ],
      [
        "expected",
        "ที่คาดไว้, ตามที่คาดหมาย",
        "The train arrived right at the expected morning time.",
        "adj."
      ],
      [
        "expedition",
        "การเดินทางสำรวจ, คณะสำรวจ",
        "Researchers joined an arctic expedition to study melting ice.",
        "n."
      ],
      [
        "experienced",
        "มีประสบการณ์, ชำนาญ",
        "An experienced mechanic fixed the noisy car engine quickly.",
        "adj."
      ],
      [
        "explode",
        "ระเบิด, ปะทุขึ้น",
        "Overheated spray cans can suddenly explode near open flames.",
        "v."
      ],
      [
        "explore",
        "สำรวจ, ค้นหา, ศึกษาค้นคว้า",
        "Let us explore the narrow old streets on foot.",
        "v."
      ],
      [
        "explosion",
        "การระเบิด, เสียงระเบิด",
        "Everyone heard a loud explosion near the old quarry.",
        "n."
      ],
      [
        "export",
        "n. การส่งออก, สินค้าส่งออก; v. ส่งออก",
        "Many local farms export fresh mangoes to neighboring countries.",
        "n., v."
      ],
      [
        "fairly",
        "ค่อนข้าง, อย่างยุติธรรม",
        "The final math exam was fairly easy this year.",
        "adv."
      ],
      [
        "familiar",
        "คุ้นเคย, คุ้นหน้าคุ้นตา, รู้จักดี",
        "That cheerful piano tune sounds very familiar to me.",
        "adj."
      ],
      [
        "fancy",
        "adj. หรูหรา, ประณีต, มีระดับ; v. นึกชอบ, อยากได้",
        "Let us dress up for a fancy dinner tonight.",
        "adj., v."
      ],
      [
        "fascinating",
        "น่าหลงใหล, น่าสนใจมาก",
        "This museum book tells fascinating stories about ancient sailors.",
        "adj."
      ],
      [
        "fashionable",
        "ทันสมัย, นำสมัย, เป็นที่นิยม",
        "That small street is full of fashionable clothing boutiques.",
        "adj."
      ],
      [
        "fasten",
        "รัด, ติดกระดุม, ผูกให้แน่น",
        "Please fasten your seat belt before the plane leaves.",
        "v."
      ],
      [
        "favour",
        "n. ความช่วยเหลือ, ความโปรดปราน; v. สนับสนุน, ชื่นชอบมากกว่า",
        "Could you do me a small favour this afternoon?",
        "n., v."
      ],
      [
        "fence",
        "รั้ว",
        "My neighbor painted his wooden garden fence crisp white.",
        "n."
      ],
      [
        "fighting",
        "การต่อสู้, การทะเลาะวิวาท",
        "The referee stepped in quickly to stop the fighting.",
        "n."
      ],
      [
        "file",
        "n. แฟ้ม, ไฟล์ข้อมูล; v. จัดเก็บเข้าแฟ้ม, ยื่นเรื่อง",
        "Save your finished essay as a clean PDF file.",
        "n., v."
      ],
      [
        "financial",
        "ทางการเงิน, เกี่ยวกับการเงิน",
        "Keep track of monthly bills for better financial planning.",
        "adj."
      ],
      [
        "fitness",
        "ความฟิต, สุขภาพแข็งแรง, สมรรถภาพร่างกาย",
        "Daily cycling improves your heart health and overall fitness.",
        "n."
      ],
      [
        "fixed",
        "คงที่, แน่นอน, ถูกซ่อมแล้ว",
        "Our home internet plan has a fixed monthly price.",
        "adj."
      ],
      [
        "flag",
        "ธง, เครื่องหมายบอกจุด",
        "A bright national flag waved above the school building.",
        "n."
      ],
      [
        "flood",
        "n. น้ำท่วม, อุทกภัย; v. ท่วม, ไหลบ่าเข้ามา",
        "Heavy monsoon rains often flood low roads in October.",
        "n., v."
      ],
      [
        "flour",
        "แป้งทำขนม, แป้งสาลี",
        "Mix two cups of white flour with warm milk.",
        "n."
      ],
      [
        "flow",
        "n. การไหล, กระแส; v. ไหล, หลั่งไหล",
        "Watch the clear mountain water flow over smooth stones.",
        "n., v."
      ],
      [
        "fold",
        "v. พับ, กอดอก; n. รอยพับ, ชั้น",
        "Please help me fold the clean laundry after lunch.",
        "v., n."
      ],
      [
        "folk",
        "adj. พื้นบ้าน, ชาวบ้าน; n. ผู้คน, ดนตรีพื้นบ้าน",
        "My grandfather loves listening to quiet folk songs nightly.",
        "adj., n."
      ],
      [
        "force",
        "n. กำลัง, แรง, กองกำลัง; v. บังคับ, ฝืน",
        "Never force a stuck key inside an old lock.",
        "n., v."
      ],
      [
        "forever",
        "ตลอดไป, ชั่วนิรันดร์",
        "Good memories from that summer trip will last forever.",
        "adv."
      ],
      [
        "frame",
        "n. กรอบรูป, โครงสร้าง; v. ใส่กรอบ, วางกรอบ",
        "We bought a wooden frame for our family photo.",
        "n., v."
      ],
      [
        "freeze",
        "แช่แข็ง, กลายเป็นน้ำแข็ง, แข็งตัว",
        "Water pipes can freeze overnight when winter temperatures plunge.",
        "v."
      ],
      [
        "frequently",
        "บ่อยครั้ง, เป็นประจำ",
        "I frequently take the ferry across the river home.",
        "adv."
      ],
      [
        "friendship",
        "มิตรภาพ, ความเป็นเพื่อน",
        "Their close friendship started back in high school art.",
        "n."
      ],
      [
        "frighten",
        "ทำให้ตกใจกลัว, ขู่ให้กลัว",
        "Sudden loud thunder can frighten small puppies at night.",
        "v."
      ],
      [
        "frightened",
        "รู้สึกกลัว, ตกใจ",
        "The frightened bird flew quickly up into the branches.",
        "adj."
      ],
      [
        "frightening",
        "น่ากลัว, น่าตกใจ",
        "Walking alone in thick fog can feel quite frightening.",
        "adj."
      ],
      [
        "frozen",
        "แช่แข็ง, ที่กลายเป็นน้ำแข็ง, หนาวจัด",
        "Keep frozen peas in the freezer until dinner time.",
        "adj."
      ],
      [
        "fry",
        "ทอด, ผัดในกระทะ",
        "Heat one spoon of oil to fry two eggs.",
        "v."
      ],
      [
        "fuel",
        "n. เชื้อเพลิง, น้ำมัน; v. เติมเชื้อเพลิง, กระตุ้น",
        "Check the fuel gauge before driving onto the highway.",
        "n., v."
      ],
      [
        "function",
        "n. หน้าที่, การทำงาน, ฟังก์ชัน; v. ทำงาน, ใช้การได้",
        "Does this old coffee machine still function properly today?",
        "n., v."
      ],
      [
        "fur",
        "ขนสัตว์",
        "Our cat has thick white fur around her neck.",
        "n."
      ],
      [
        "garage",
        "โรงรถ, อู่ซ่อมรถ",
        "Park your bicycle inside the dry garage before dark.",
        "n."
      ],
      [
        "gather",
        "รวบรวม, รวมตัวกัน, เก็บเกี่ยว",
        "Let us gather around the campfire after dinner tonight.",
        "v."
      ],
      [
        "generally",
        "โดยทั่วไป, ส่วนใหญ่, มักจะ",
        "People here are generally friendly and eager to help.",
        "adv."
      ],
      [
        "generation",
        "รุ่นคน, ยุคสมัย, การผลิต",
        "Every new generation learns different tools and daily habits.",
        "n."
      ],
      [
        "generous",
        "ใจกว้าง, เอื้อเฟื้อเผื่อแผ่, มีน้ำใจ",
        "Thank you for your generous gift on my birthday.",
        "adj."
      ],
      [
        "gentle",
        "อ่อนโยน, สุภาพ, เบามือ",
        "Use a gentle soap when washing your newborn's clothes.",
        "adj."
      ],
      [
        "ghost",
        "ผี, วิญญาณ",
        "Kids told silly ghost stories around the dark tent.",
        "n."
      ],
      [
        "giant",
        "adj. มหึมา, ใหญ่โตมาก; n. ยักษ์",
        "A giant oak tree shades the entire school playground.",
        "adj., n."
      ],
      [
        "glad",
        "ดีใจ, ยินดี, พอใจ",
        "I am so glad you arrived home safely tonight.",
        "adj."
      ],
      [
        "global",
        "ทั่วโลก, ระดับโลก, สากล",
        "Climate change is a serious global challenge for everyone.",
        "adj."
      ],
      [
        "glove",
        "ถุงมือ",
        "I dropped my right leather glove on the subway.",
        "n."
      ],
      [
        "goods",
        "สินค้า, ข้าวของ",
        "This neighborhood store sells fresh baked goods every morning.",
        "n."
      ],
      [
        "grade",
        "n. เกรด, ระดับชั้น, คะแนน; v. ให้คะแนน, จัดระดับ",
        "She studied hard and earned a high math grade.",
        "n., v."
      ],
      [
        "graduate",
        "n. ผู้สำเร็จการศึกษา, บัณฑิต; v. สำเร็จการศึกษา, เรียนจบ",
        "He will graduate from nursing college next spring.",
        "n., v."
      ],
      [
        "grain",
        "เมล็ดพืช, ธัญพืช, เสี้ยนไม้",
        "Brown rice is a healthy whole grain for dinner.",
        "n."
      ],
      [
        "grateful",
        "ซาบซึ้งใจ, รู้สึกขอบคุณ",
        "I feel deeply grateful for my family's constant support.",
        "adj."
      ],
      [
        "growth",
        "การเติบโต, การขยายตัว",
        "Sunlight and water are essential for healthy plant growth.",
        "n."
      ],
      [
        "guard",
        "n. ยาม, ผู้รักษาความปลอดภัย, การป้องกัน; v. เฝ้ายาม, ป้องกัน",
        "The friendly security guard greeted visitors at the gate.",
        "n., v."
      ],
      [
        "guilty",
        "รู้สึกผิด, มีความผิด",
        "I felt slightly guilty after eating the last cookie.",
        "adj."
      ],
      [
        "hang",
        "แขวน, ห้อย, ตาก",
        "Hang your wet coat on the wooden wall hook.",
        "v."
      ],
      [
        "happiness",
        "ความสุข, ความเบิกบานใจ",
        "Simple daily walks bring calm happiness to my morning.",
        "n."
      ],
      [
        "hardly",
        "แทบจะไม่",
        "I could hardly hear your voice over the rain.",
        "adv."
      ],
      [
        "headline",
        "พาดหัวข่าว, หัวข้อข่าว",
        "The morning newspaper headline announced lower train ticket prices.",
        "n."
      ],
      [
        "heating",
        "ระบบทำความร้อน, การทำความร้อน",
        "Turn on the room heating because tonight feels freezing.",
        "n."
      ],
      [
        "heavily",
        "อย่างหนัก, มาก",
        "It rained heavily for two hours before the concert.",
        "adv."
      ],
      [
        "helicopter",
        "เฮลิคอปเตอร์",
        "A rescue helicopter landed safely on the mountain field.",
        "n."
      ],
      [
        "highlight",
        "n. จุดเด่น, ไฮไลต์; v. เน้นย้ำ, ทำให้โดดเด่น",
        "Seeing the golden sunrise was our trip's biggest highlight.",
        "n., v."
      ],
      [
        "highly",
        "อย่างสูง, มาก, อย่างยิ่ง",
        "Our neighbors highly recommend this small Italian pasta shop.",
        "adv."
      ],
      [
        "hire",
        "v. จ้างงาน, เช่า; n. การจ้าง, การเช่า",
        "We plan to hire two bikes near the beach.",
        "v., n."
      ],
      [
        "historic",
        "ที่มีความสำคัญทางประวัติศาสตร์, เก่าแก่",
        "We toured a historic stone temple beside the river.",
        "adj."
      ],
      [
        "historical",
        "ทางประวัติศาสตร์, อิงประวัติศาสตร์",
        "She enjoys reading historical novels set in ancient Rome.",
        "adj."
      ],
      [
        "honest",
        "ซื่อสัตย์, จริงใจ, ตรงไปตรงมา",
        "Please give me an honest opinion about my drawing.",
        "adj."
      ],
      [
        "horrible",
        "แย่มาก, น่ากลัว, น่ารังเกียจ",
        "Leaving wet towels in bags creates a horrible smell.",
        "adj."
      ]
    ]
  },
  {
    "id": "ox-b1-4",
    "label": "B1 Words · 4 (horror–nuclear)",
    "deck": "Oxford · B1 · 4",
    "cards": [
      [
        "horror",
        "ความสยดสยอง, ความน่ากลัว",
        "I never watch scary horror movies right before sleeping.",
        "n."
      ],
      [
        "host",
        "n. เจ้าภาพ, พิธีกร, เจ้าบ้าน; v. เป็นเจ้าภาพ, จัดงาน",
        "Our friendly host welcomed every guest at the door.",
        "n., v."
      ],
      [
        "hunt",
        "v. ล่าสัตว์, ตามหา; n. การล่าสัตว์, การค้นหา",
        "Lions usually hunt together in the dark for food.",
        "v., n."
      ],
      [
        "hurricane",
        "พายุเฮอริเคน, พายุหมุนเขตร้อน",
        "The coastal town prepared early for the approaching hurricane.",
        "n."
      ],
      [
        "hurry",
        "n. ความเร่งรีบ; v. รีบเร่ง, เร่ง",
        "There is no need to hurry since we arrived early.",
        "n., v."
      ],
      [
        "identity",
        "อัตลักษณ์, ตัวตน, เอกลักษณ์",
        "Show your passport to prove your identity at check-in.",
        "n."
      ],
      [
        "ignore",
        "เพิกเฉย, เมิน, ไม่สนใจ",
        "Please do not ignore the safety warning on that machine.",
        "v."
      ],
      [
        "illegal",
        "ผิดกฎหมาย, นอกกฎหมาย",
        "Parking in front of a fire hydrant is illegal.",
        "adj."
      ],
      [
        "imaginary",
        "ในจินตนาการ, ที่สมมติขึ้น",
        "Young children often invent an imaginary friend to play with.",
        "adj."
      ],
      [
        "immediate",
        "ทันทีทันใด, เร่งด่วน, ใกล้ชิด",
        "The injured patient needed immediate medical care.",
        "adj."
      ],
      [
        "immigrant",
        "ผู้อพยพย้ายถิ่นฐาน",
        "My grandfather came to this city as a young immigrant.",
        "n."
      ],
      [
        "impact",
        "n. ผลกระทบ, แรงกระแทก; v. ส่งผลกระทบ, กระทบ",
        "Plastic waste has a huge impact on ocean wildlife.",
        "n., v."
      ],
      [
        "import",
        "n. สินค้านำเข้า, การนำเข้า; v. นำเข้า",
        "Local supermarkets import fresh berries during the winter.",
        "n., v."
      ],
      [
        "importance",
        "ความสำคัญ",
        "Our teacher explained the importance of sleeping eight hours.",
        "n."
      ],
      [
        "impression",
        "ความประทับใจ, ความรู้สึกที่มีต่อ, รอยประทับ",
        "A warm smile makes a great first impression.",
        "n."
      ],
      [
        "impressive",
        "น่าประทับใจ, ยอดเยี่ยม",
        "Her speech at the graduation ceremony was truly impressive.",
        "adj."
      ],
      [
        "improvement",
        "การปรับปรุง, ความก้าวหน้า, การดีขึ้น",
        "Daily practice brought a clear improvement in his English.",
        "n."
      ],
      [
        "incredibly",
        "อย่างไม่น่าเชื่อ, อย่างเหลือเชื่อ, มากเหลือเกิน",
        "This homemade mango ice cream tastes incredibly fresh.",
        "adv."
      ],
      [
        "indeed",
        "อย่างแท้จริง, จริงๆ แล้ว, แน่นอน",
        "The mountain trail was indeed steeper than we expected.",
        "adv."
      ],
      [
        "indicate",
        "บ่งชี้, แสดงให้เห็น, ชี้บอก",
        "Dark clouds usually indicate that heavy rain is coming.",
        "v."
      ],
      [
        "indirect",
        "ทางอ้อม, อ้อมค้อม",
        "His indirect answer left everyone unsure about the plan.",
        "adj."
      ],
      [
        "indoor",
        "ในร่ม, ภายในอาคาร",
        "They built a large indoor pool for rainy days.",
        "adj."
      ],
      [
        "indoors",
        "ภายในอาคาร, ในบ้าน, ในร่ม",
        "The kids stayed indoors while the storm passed.",
        "adv."
      ],
      [
        "influence",
        "n. อิทธิพล, อำนาจชักจูง; v. มีอิทธิพลต่อ, ชักจูง",
        "Good friends can have a positive influence on you.",
        "n., v."
      ],
      [
        "ingredient",
        "ส่วนผสม, วัตถุดิบ",
        "Garlic is the key ingredient in this pasta sauce.",
        "n."
      ],
      [
        "injure",
        "ทำให้บาดเจ็บ, ทำร้าย",
        "Heavy lifting without warming up can injure your back.",
        "v."
      ],
      [
        "injured",
        "ที่ได้รับบาดเจ็บ",
        "Medics helped the injured runner off the track.",
        "adj."
      ],
      [
        "innocent",
        "บริสุทธิ์, ไร้เดียงสา, ไม่มีความผิด",
        "The court proved that the accused man was innocent.",
        "adj."
      ],
      [
        "intelligence",
        "ความฉลาด, สติปัญญา, ข่าวกรอง",
        "Dolphins are famous for their high intelligence.",
        "n."
      ],
      [
        "intend",
        "ตั้งใจ, เจตนา, หมายมั่น",
        "I intend to finish reading this novel tonight.",
        "v."
      ],
      [
        "intention",
        "ความตั้งใจ, เจตนา",
        "She made a clear intention to save more money.",
        "n."
      ],
      [
        "invest",
        "ลงทุน, ทุ่มเทเวลา",
        "Many young professionals invest part of their monthly salary.",
        "v."
      ],
      [
        "investigate",
        "สืบสวน, สอบสวน, ตรวจสอบ",
        "Police arrived quickly to investigate the street accident.",
        "v."
      ],
      [
        "involved",
        "ที่เกี่ยวข้อง, ที่มีส่วนร่วม, ซับซ้อน",
        "Every student involved in the play rehearsed after school.",
        "adj."
      ],
      [
        "iron",
        "n. เหล็ก, เตารีด; v. รีดผ้า",
        "I need to iron my white shirt before work.",
        "n., v."
      ],
      [
        "issue",
        "n. ประเด็นปัญหา, ฉบับ; v. ออกประกาศ, แจกจ่าย",
        "Traffic noise is a major issue in this neighborhood.",
        "n., v."
      ],
      [
        "IT",
        "เทคโนโลยีสารสนเทศ, ไอที",
        "Call the IT help desk if your laptop freezes.",
        "n."
      ],
      [
        "journal",
        "วารสาร, บันทึกประจำวัน",
        "She writes her thoughts in a private journal every night.",
        "n."
      ],
      [
        "judge",
        "n. ผู้พิพากษา, กรรมการตัดสิน; v. ตัดสิน, ประเมิน",
        "Do not judge a person solely by their clothes.",
        "n., v."
      ],
      [
        "keen",
        "กระตือรือร้น, ชื่นชอบมาก, เฉียบแหลม",
        "Tom is very keen on learning Japanese cooking.",
        "adj."
      ],
      [
        "keyboard",
        "แป้นพิมพ์, คีย์บอร์ด",
        "This wireless keyboard feels quiet and comfortable to type on.",
        "n."
      ],
      [
        "kick",
        "n. การเตะ, แรงกระตุ้น; v. เตะ",
        "He gave the soccer ball a strong kick toward goal.",
        "n., v."
      ],
      [
        "killing",
        "การฆ่า, การสังหาร",
        "The detective investigated a mysterious killing near the harbor.",
        "n."
      ],
      [
        "kiss",
        "n. จูบ, การจูบ; v. จูบ",
        "The mother gave her sleeping baby a gentle kiss.",
        "n., v."
      ],
      [
        "label",
        "n. ฉลาก, ป้ายชื่อ; v. ติดฉลาก, ตราหน้า",
        "Read the washing label before putting that sweater in water.",
        "n., v."
      ],
      [
        "laboratory",
        "ห้องปฏิบัติการ, ห้องทดลอง",
        "Students tested water samples in the school science laboratory.",
        "n."
      ],
      [
        "lack",
        "n. การขาดแคลน, ความบกพร่อง; v. ขาด, ขาดแคลน",
        "A lack of sleep makes it hard to focus.",
        "n., v."
      ],
      [
        "latest",
        "adj. ล่าสุด, ใหม่ที่สุด; n. ข่าวล่าสุด, รุ่นล่าสุด",
        "Have you heard the latest weather report for tonight?",
        "adj., n."
      ],
      [
        "lay",
        "วาง, วางลง, วางไข่",
        "Please lay the clean towels neatly on the bed.",
        "v."
      ],
      [
        "layer",
        "ชั้น, แผ่นชั้น",
        "Spread a thin layer of butter over warm toast.",
        "n."
      ],
      [
        "leading",
        "ชั้นนำ, ที่เป็นผู้นำ, สำคัญที่สุด",
        "She works for a leading software company in Bangkok.",
        "adj."
      ],
      [
        "leaf",
        "ใบไม้, แผ่นบาง",
        "A bright yellow leaf floated slowly onto the grass.",
        "n."
      ],
      [
        "leather",
        "หนังสัตว์, เครื่องหนัง",
        "These brown leather boots last for many years.",
        "n."
      ],
      [
        "legal",
        "ถูกกฎหมาย, เกี่ยวกับกฎหมาย",
        "You should ask for legal advice before signing contracts.",
        "adj."
      ],
      [
        "leisure",
        "เวลาว่าง, การพักผ่อนหย่อนใจ",
        "Reading novels is my favorite way to spend leisure time.",
        "n."
      ],
      [
        "length",
        "ความยาว, ระยะเวลา",
        "Measure the exact length of the table before buying.",
        "n."
      ],
      [
        "limit",
        "n. ขีดจำกัด, เขตแดน; v. จำกัด",
        "There is a strict speed limit near the elementary school.",
        "n., v."
      ],
      [
        "lip",
        "ริมฝีปาก, ขอบ",
        "Apply some balm if your bottom lip feels dry.",
        "n."
      ],
      [
        "liquid",
        "adj. ที่เป็นของเหลว; n. ของเหลว",
        "Keep all bottles of liquid soap out of reach.",
        "adj., n."
      ],
      [
        "literature",
        "วรรณกรรม, เอกสารวิชาการ",
        "He studied modern Thai literature at the university.",
        "n."
      ],
      [
        "living",
        "adj. ที่มีชีวิตอยู่, เกี่ยวกับการดำรงชีวิต; n. การเลี้ยงชีพ, รายได้",
        "She earns a good living as a freelance illustrator.",
        "adj., n."
      ],
      [
        "locate",
        "ระบุตำแหน่ง, ค้นหาตำแหน่ง, ตั้งอยู่",
        "Can you locate our hotel on this city map?",
        "v."
      ],
      [
        "located",
        "ที่ตั้งอยู่",
        "The new bakery is located right beside the train station.",
        "adj."
      ],
      [
        "location",
        "สถานที่, ตำแหน่งที่ตั้ง",
        "This quiet beach is an ideal location for a wedding.",
        "n."
      ],
      [
        "lonely",
        "เหงา, โดดเดี่ยว, เปลี่ยว",
        "Moving to a new city alone felt lonely at first.",
        "adj."
      ],
      [
        "loss",
        "การสูญเสีย, ความพ่ายแพ้, การขาดทุน",
        "The small shop suffered a heavy financial loss last year.",
        "n."
      ],
      [
        "luxury",
        "adj. หรูหรา, ฟุ่มเฟือย; n. ความหรูหรา, สินค้าฟุ่มเฟือย",
        "Staying at a five-star resort is a rare luxury.",
        "adj., n."
      ],
      [
        "mad",
        "โกรธจัด, บ้า, คลั่งไคล้",
        "My sister was mad at me for borrowing her jacket.",
        "adj."
      ],
      [
        "magic",
        "adj. วิเศษ, มีเวทมนตร์; n. เวทมนตร์, มายากล, เสน่ห์",
        "The magician amazed everyone with a clever magic trick.",
        "adj., n."
      ],
      [
        "mainly",
        "โดยส่วนใหญ่, เป็นหลัก",
        "Our weekend trip was mainly about resting by the lake.",
        "adv."
      ],
      [
        "mall",
        "ห้างสรรพสินค้า, ศูนย์การค้า",
        "Let us meet at the shopping mall around noon.",
        "n."
      ],
      [
        "management",
        "การจัดการ, การบริหาร, ฝ่ายบริหาร",
        "Effective time management helps reduce stress at work.",
        "n."
      ],
      [
        "marketing",
        "การตลาด, การส่งเสริมการขาย",
        "The marketing team launched a funny video ad yesterday.",
        "n."
      ],
      [
        "marriage",
        "การแต่งงาน, ชีวิตสมรส",
        "They celebrated ten happy years of marriage in Chiang Mai.",
        "n."
      ],
      [
        "meanwhile",
        "ในขณะเดียวกัน, ระหว่างนั้น",
        "Meanwhile, our neighbors planted bright flowers along the fence.",
        "adv."
      ],
      [
        "measure",
        "n. มาตรการ, หน่วยวัด; v. วัดขนาด, ประเมิน",
        "Use a ruler to measure the width of that frame.",
        "n., v."
      ],
      [
        "medium",
        "adj. ขนาดกลาง, ปานกลาง; n. สื่อ, ตัวกลาง",
        "I would like a medium iced coffee with less sugar.",
        "adj., n."
      ],
      [
        "mental",
        "ทางจิตใจ, เกี่ยวกับสมอง, ทางความคิด",
        "Daily walks in the park improve your mental health.",
        "adj."
      ],
      [
        "mess",
        "ความยุ่งเหยิง, สภาพเลอะเทอะ",
        "Please clean up the mess on the kitchen counter.",
        "n."
      ],
      [
        "mild",
        "อ่อนโยน, ไม่รุนแรง, อากาศอบอุ่นสบาย",
        "I prefer mild curry instead of very spicy food.",
        "adj."
      ],
      [
        "mix",
        "n. ส่วนผสม; v. ผสม, คลุกเคล้า, เข้ากับผู้อื่น",
        "Mix the flour and eggs together in a large bowl.",
        "n., v."
      ],
      [
        "mixture",
        "ส่วนผสม, ของผสม",
        "Bake the cake mixture for thirty minutes until golden.",
        "n."
      ],
      [
        "mood",
        "อารมณ์, บรรยากาศ",
        "Good music can instantly lift a bad morning mood.",
        "n."
      ],
      [
        "mud",
        "โคลน, ดินเลน",
        "His white sneakers were covered in mud after hiking.",
        "n."
      ],
      [
        "murder",
        "n. การฆาตกรรม; v. ฆาตกรรม, ฆ่า",
        "The mystery novel starts with a strange murder in winter.",
        "n., v."
      ],
      [
        "muscle",
        "กล้ามเนื้อ, พละกำลัง",
        "Stretching after running prevents sore leg muscle pain.",
        "n."
      ],
      [
        "mystery",
        "ความลึกลับ, ปริศนา",
        "How the keys vanished from the table remains a mystery.",
        "n."
      ],
      [
        "nail",
        "เล็บ, ตะปู",
        "Hammer one more nail to hold the wooden shelf.",
        "n."
      ],
      [
        "narrative",
        "adj. ที่เล่าเรื่อง, เชิงบรรยาย; n. เรื่องเล่า, การเล่าเรื่อง",
        "The documentary uses a strong personal narrative to engage viewers.",
        "adj., n."
      ],
      [
        "nation",
        "ประเทศ, ชาติ",
        "People across the entire nation watched the final match.",
        "n."
      ],
      [
        "native",
        "adj. โดยกำเนิด, พื้นเมือง; n. ชาวพื้นเมือง, คนท้องถิ่น",
        "Mango trees are native to warm tropical regions.",
        "adj., n."
      ],
      [
        "naturally",
        "โดยธรรมชาติ, อย่างเป็นธรรมชาติ, แน่นอนอยู่แล้ว",
        "She speaks calmly and smiles naturally in front of cameras.",
        "adv."
      ],
      [
        "necessarily",
        "อย่างจำเป็น, เสมอไป",
        "Expensive items are not necessarily better than affordable ones.",
        "adv."
      ],
      [
        "needle",
        "เข็มเย็บผ้า, เข็มฉีดยา, เข็มทิศ",
        "Thread the sewing needle carefully before fixing the button.",
        "n."
      ],
      [
        "neighbourhood",
        "ย่าน, ละแวกบ้าน, ชุมชนใกล้เคียง",
        "Our quiet neighbourhood has two parks and a cozy bakery.",
        "n."
      ],
      [
        "net",
        "ตาข่าย, แห, เครือข่าย",
        "The fisherman repaired his torn fishing net on the dock.",
        "n."
      ],
      [
        "nor",
        "adv. ก็ไม่เช่นกัน; conj. และไม่, หรือไม่",
        "She neither called nor replied to my message yesterday.",
        "adv., conj."
      ],
      [
        "northern",
        "ทางทิศเหนือ, เกี่ยวกับภาคเหนือ",
        "Northern Thailand enjoys cool foggy mornings in December.",
        "adj."
      ],
      [
        "nuclear",
        "นิวเคลียร์, เกี่ยวกับนิวเคลียส",
        "Engineers discussed safer ways to store nuclear energy.",
        "adj."
      ]
    ]
  },
  {
    "id": "ox-b1-5",
    "label": "B1 Words · 5 (obvious–rare)",
    "deck": "Oxford · B1 · 5",
    "cards": [
      [
        "obvious",
        "ชัดเจน, เห็นได้ชัด",
        "The answer to the riddle became obvious after one hint.",
        "adj."
      ],
      [
        "obviously",
        "อย่างเห็นได้ชัด, แน่นอน",
        "She was obviously thrilled to receive the scholarship letter.",
        "adv."
      ],
      [
        "occasion",
        "โอกาสพิเศษ, วาระ, ครั้ง",
        "We saved this sweet cake for a special occasion.",
        "n."
      ],
      [
        "occur",
        "เกิดขึ้น, ปรากฏขึ้นในความคิด",
        "Power outages sometimes occur during heavy summer storms.",
        "v."
      ],
      [
        "odd",
        "แปลกประหลาด, เป็นเลขคี่, เศษเหลือ",
        "He wore two odd socks by mistake this morning.",
        "adj."
      ],
      [
        "official",
        "adj. เป็นทางการ; n. เจ้าหน้าที่, ข้าราชการ",
        "Wait for the official announcement before booking your flight.",
        "adj., n."
      ],
      [
        "old-fashioned",
        "ล้าสมัย, โบราณ, แบบดั้งเดิม",
        "My grandma still uses an old-fashioned rotary telephone.",
        "adj."
      ],
      [
        "operation",
        "การผ่าตัด, การปฏิบัติการ, การดำเนินงาน",
        "The knee operation went smoothly and he recovered fast.",
        "n."
      ],
      [
        "organized",
        "ที่เป็นระเบียบ, มีการจัดการที่ดี",
        "Keep your notes organized so exam review is easier.",
        "adj."
      ],
      [
        "organizer",
        "ผู้จัดงาน, กล่องจัดระเบียบ",
        "Thank the event organizer for planning such a smooth conference.",
        "n."
      ],
      [
        "originally",
        "แต่เดิม, ในตอนแรก, ดั้งเดิม",
        "This old stone building was originally a train station.",
        "adv."
      ],
      [
        "ought",
        "ควรจะ, น่าจะ",
        "You ought to wear a helmet when riding a motorbike.",
        "modal v."
      ],
      [
        "ours",
        "ของพวกเรา",
        "That blue umbrella beside the entrance is ours.",
        "pron."
      ],
      [
        "outdoor",
        "กลางแจ้ง, นอกอาคาร",
        "We bought new wooden chairs for our outdoor patio.",
        "adj."
      ],
      [
        "outdoors",
        "กลางแจ้ง, นอกบ้าน",
        "Children love playing outdoors when the weather is sunny.",
        "adv."
      ],
      [
        "package",
        "n. พัสดุ, กล่องห่อ, แพ็กเกจ; v. บรรจุหีบห่อ",
        "A delivery driver left a large package at our gate.",
        "n., v."
      ],
      [
        "painful",
        "เจ็บปวด, ที่สร้างความปวดใจ",
        "Walking on a twisted ankle can be quite painful.",
        "adj."
      ],
      [
        "pale",
        "ซีด, จาง, อ่อน",
        "You look quite pale today after skipping breakfast.",
        "adj."
      ],
      [
        "pan",
        "กระทะ",
        "Heat a drop of oil in a nonstick pan.",
        "n."
      ],
      [
        "participate",
        "เข้าร่วม, มีส่วนร่วม",
        "All employees are invited to participate in Friday's workshop.",
        "v."
      ],
      [
        "particularly",
        "โดยเฉพาะอย่างยิ่ง, เป็นพิเศษ",
        "The soup tasted particularly delicious with fresh lime juice.",
        "adv."
      ],
      [
        "passion",
        "ความหลงใหล, ความรักอันแรงกล้า",
        "Her passion for painting shows in every bright canvas.",
        "n."
      ],
      [
        "path",
        "เส้นทาง, ทางเดิน, แนวทาง",
        "Follow the narrow stone path down to the waterfall.",
        "n."
      ],
      [
        "payment",
        "การชำระเงิน, เงินที่จ่าย",
        "You can make your payment by card or cash.",
        "n."
      ],
      [
        "peaceful",
        "สงบสุข, เงียบสงบ, สันติ",
        "We enjoyed a peaceful morning beside the misty lake.",
        "adj."
      ],
      [
        "percentage",
        "ร้อยละ, อัตราส่วนร้อยละ",
        "A high percentage of students passed the final exam.",
        "n."
      ],
      [
        "perfectly",
        "อย่างสมบูรณ์แบบ, อย่างดีเยี่ยม",
        "This vintage jacket fits me perfectly across the shoulders.",
        "adv."
      ],
      [
        "performance",
        "การแสดง, ผลงาน, ประสิทธิภาพ",
        "The orchestra gave an unforgettable performance last night.",
        "n."
      ],
      [
        "personally",
        "โดยส่วนตัว, ด้วยตนเอง",
        "Personally, I prefer drinking hot green tea without sugar.",
        "adv."
      ],
      [
        "persuade",
        "ชักชวน, โน้มน้าวใจ, เกลี้ยกล่อม",
        "He tried to persuade his friend to join the hike.",
        "v."
      ],
      [
        "photographer",
        "ช่างภาพ",
        "The wedding photographer captured every joyful moment naturally.",
        "n."
      ],
      [
        "photography",
        "การถ่ายภาพ, ศิลปะการถ่ายภาพ",
        "She took a weekend class in street photography.",
        "n."
      ],
      [
        "pin",
        "n. เข็มหมุด, เข็มกลัด, รหัสผ่าน; v. กลัด, ตรึงไว้",
        "Use a small pin to attach your name badge.",
        "n., v."
      ],
      [
        "pipe",
        "ท่อ, ท่อน้ำ, ไปป์",
        "A plumber came quickly to fix the leaking water pipe.",
        "n."
      ],
      [
        "planning",
        "การวางแผน, การจัดเตรียม",
        "Careful planning makes any family vacation much smoother.",
        "n."
      ],
      [
        "pleasant",
        "น่ารื่นรมย์, สบาย, เป็นกันเอง",
        "We had a pleasant chat over afternoon tea.",
        "adj."
      ],
      [
        "pleasure",
        "ความยินดี, ความสุขใจ, ความเพลิดเพลิน",
        "It is always a pleasure to work with your team.",
        "n."
      ],
      [
        "plenty",
        "จำนวนมาก, มากมาย, เหลือเฟือ",
        "Take some cake because there is plenty left.",
        "pron."
      ],
      [
        "plot",
        "n. โครงเรื่อง, แปลงที่ดิน, แผนสมคบคิด; v. วางแผนลับ, กำหนดจุด",
        "The movie has a clever plot with a surprise ending.",
        "n., v."
      ],
      [
        "plus",
        "prep. บวก, รวมกับ; adj. เป็นบวก, เกินกว่า; conj. นอกจากนี้, แถมยัง; n. เครื่องหมายบวก, ข้อดี",
        "Two plus three equals five in simple arithmetic.",
        "prep., adj., conj., n."
      ],
      [
        "podcast",
        "พอดแคสต์, รายการเสียงออนไลน์",
        "I listen to a daily English podcast during my commute.",
        "n."
      ],
      [
        "poem",
        "บทกวี, กลอน",
        "She wrote a short poem about rain in October.",
        "n."
      ],
      [
        "poet",
        "กวี, นักแต่งกลอน",
        "The local poet read three new verses on stage.",
        "n."
      ],
      [
        "poetry",
        "บทกวี, กวีนิพนธ์",
        "He fell in love with classical poetry in high school.",
        "n."
      ],
      [
        "poison",
        "n. ยาพิษ, สารพิษ; v. วางยาพิษ, ทำให้เป็นพิษ",
        "Keep rat poison locked away from curious pets.",
        "n., v."
      ],
      [
        "poisonous",
        "ที่มีพิษ, เป็นพิษ",
        "Never eat wild mushrooms unless you know none are poisonous.",
        "adj."
      ],
      [
        "policy",
        "นโยบาย, กรมธรรม์ประกันภัย",
        "The store has a generous thirty-day return policy.",
        "n."
      ],
      [
        "political",
        "ทางการเมือง, เกี่ยวกับการเมือง",
        "They had a polite discussion about recent political news.",
        "adj."
      ],
      [
        "politician",
        "นักการเมือง",
        "The young politician promised better public buses for commuters.",
        "n."
      ],
      [
        "politics",
        "การเมือง, เรื่องการเมือง",
        "We rarely talk about politics at the dinner table.",
        "n."
      ],
      [
        "port",
        "ท่าเรือ, พอร์ตเชื่อมต่อ",
        "Cargo ships unload fresh fruit at the busy port.",
        "n."
      ],
      [
        "portrait",
        "ภาพเหมือน, ภาพบุคคล",
        "An artist painted a detailed portrait of the king.",
        "n."
      ],
      [
        "possibly",
        "อาจจะ, เป็นไปได้, อย่างเต็มความสามารถ",
        "Could you possibly lend me a pen for a minute?",
        "adv."
      ],
      [
        "pot",
        "หม้อ, กระถางต้นไม้",
        "Plant the basil seeds in a sunny clay pot.",
        "n."
      ],
      [
        "pour",
        "เท, ริน, ไหลเทลงมา",
        "Could you pour some cold water into my glass?",
        "v."
      ],
      [
        "poverty",
        "ความยากจน, ความขัดสน",
        "Education programs help lift families out of poverty.",
        "n."
      ],
      [
        "powder",
        "ผง, แป้งฝุ่น",
        "Dissolve one spoon of cocoa powder in hot milk.",
        "n."
      ],
      [
        "powerful",
        "ทรงพลัง, มีอำนาจมาก, แข็งแกร่ง",
        "A powerful telescope reveals distant stars clearly.",
        "adj."
      ],
      [
        "practical",
        "ใช้ได้จริง, เชิงปฏิบัติ, มีประโยชน์",
        "Bring practical walking shoes for the temple tour.",
        "adj."
      ],
      [
        "pray",
        "สวดมนต์, อธิษฐาน, ภาวนา",
        "Many travelers pray for safe journeys before flying.",
        "v."
      ],
      [
        "prayer",
        "คำอธิษฐาน, การสวดมนต์",
        "She said a quiet prayer before entering the exam room.",
        "n."
      ],
      [
        "prediction",
        "การทำนาย, การคาดการณ์",
        "His prediction about the match score turned out right.",
        "n."
      ],
      [
        "prepared",
        "ที่เตรียมพร้อมแล้ว, เต็มใจ",
        "Pack an umbrella so you are prepared for rain.",
        "adj."
      ],
      [
        "presentation",
        "การนำเสนอ, การมอบรางวัล",
        "Her clear slide presentation impressed the whole client team.",
        "n."
      ],
      [
        "press",
        "n. สื่อมวลชน, แท่นพิมพ์, การกด; v. กด, รีดผ้า, คะยั้นคะยอ",
        "Press the green button once to start the washer.",
        "n., v."
      ],
      [
        "pressure",
        "ความกดดัน, แรงดัน, ความดัน",
        "Athletes stay calm even under heavy pressure.",
        "n."
      ],
      [
        "pretend",
        "แกล้งทำ, เสแสร้ง, สมมติ",
        "Let us pretend we are astronauts exploring Mars.",
        "v."
      ],
      [
        "previous",
        "ก่อนหน้า, ที่ผ่านมา",
        "Check our previous email for the meeting room number.",
        "adj."
      ],
      [
        "previously",
        "ก่อนหน้านี้, แต่เดิม",
        "She had previously worked at a bank in Chiang Rai.",
        "adv."
      ],
      [
        "priest",
        "บาทหลวง, นักบวช, พระ",
        "The village priest greeted everyone warmly after the service.",
        "n."
      ],
      [
        "primary",
        "หลัก, สำคัญที่สุด, ประถมศึกษา",
        "Safety is our primary concern during this bus trip.",
        "adj."
      ],
      [
        "prince",
        "เจ้าชาย",
        "The young prince rode a white horse across the bridge.",
        "n."
      ],
      [
        "princess",
        "เจ้าหญิง",
        "The young princess wore a silver crown on stage.",
        "n."
      ],
      [
        "printing",
        "การพิมพ์, งานพิมพ์",
        "Modern color printing makes picture books bright and clear.",
        "n."
      ],
      [
        "prisoner",
        "นักโทษ, เชลย",
        "The guard checked every cell to count each prisoner.",
        "n."
      ],
      [
        "private",
        "ส่วนตัว, เอกชน, ลับเฉพาะ",
        "Let us discuss this sensitive matter in a private room.",
        "adj."
      ],
      [
        "producer",
        "ผู้ผลิต, ผู้อำนวยการสร้าง",
        "Thailand is a major producer of sweet tropical fruit.",
        "n."
      ],
      [
        "production",
        "การผลิต, ผลผลิต, การจัดแสดง",
        "Factory production increased quickly after installing new machines.",
        "n."
      ],
      [
        "profession",
        "อาชีพ, วิชาชีพ",
        "Teaching has always been a respected profession worldwide.",
        "n."
      ],
      [
        "profit",
        "กำไร, ผลประโยชน์",
        "The little cafe earned a modest profit last month.",
        "n."
      ],
      [
        "promote",
        "ส่งเสริม, เลื่อนตำแหน่ง, ประชาสัมพันธ์",
        "Healthy snacks help promote good energy throughout the workday.",
        "v."
      ],
      [
        "proper",
        "เหมาะสม, ถูกต้อง, แท้จริง",
        "Wear proper hiking boots before climbing the muddy mountain.",
        "adj."
      ],
      [
        "properly",
        "อย่างเหมาะสม, อย่างถูกต้อง, อย่างเรียบร้อย",
        "Make sure the fridge door closes properly every night.",
        "adv."
      ],
      [
        "property",
        "ทรัพย์สิน, อสังหาริมทรัพย์, คุณสมบัติ",
        "This house and garden are private family property.",
        "n."
      ],
      [
        "protest",
        "n. การประท้วง, การคัดค้าน; v. ประท้วง, คัดค้าน",
        "Citizens joined a peaceful protest against higher bus fares.",
        "n., v."
      ],
      [
        "proud",
        "ภาคภูมิใจ, ภูมิใจ, หยิ่งทะนง",
        "Her parents felt proud watching her receive the diploma.",
        "adj."
      ],
      [
        "prove",
        "พิสูจน์, แสดงให้เห็นว่าจริง",
        "These old photos prove that he visited Paris in 1995.",
        "v."
      ],
      [
        "punish",
        "ลงโทษ",
        "Fair teachers never punish the whole class for one mistake.",
        "v."
      ],
      [
        "punishment",
        "การลงโทษ, โทษ",
        "Cleaning the yard was his punishment for coming home late.",
        "n."
      ],
      [
        "qualification",
        "คุณสมบัติ, วุฒิการศึกษา, ใบรับรอง",
        "This nursing role requires a valid medical qualification.",
        "n."
      ],
      [
        "qualified",
        "ที่มีคุณสมบัติครบถ้วน, มีคุณวุฒิ",
        "Only qualified lifeguards may watch over the deep pool.",
        "adj."
      ],
      [
        "qualify",
        "มีคุณสมบัติ, ผ่านเกณฑ์, เข้ารอบ",
        "Our school team worked hard to qualify for the finals.",
        "v."
      ],
      [
        "queue",
        "n. แถวคอย, คิว; v. เข้าแถวรอ",
        "We stood in a long queue outside the noodle stall.",
        "n., v."
      ],
      [
        "quit",
        "ลาออก, เลิกทำ, หยุด",
        "He decided to quit smoking for his family's health.",
        "v."
      ],
      [
        "quotation",
        "คำพูดที่ยกมาอ้าง, ใบเสนอราคา",
        "Please request a written quotation before hiring the painter.",
        "n."
      ],
      [
        "quote",
        "n. คำอ้างอิง, ใบเสนอราคา; v. อ้างอิงคำพูด, เสนอราคา",
        "She opened her speech with a famous quote by Einstein.",
        "n., v."
      ],
      [
        "racing",
        "การแข่งความเร็ว, การแข่งรถ",
        "My uncle loves watching motorcycle racing on Sunday afternoons.",
        "n."
      ],
      [
        "range",
        "n. ช่วง, ขอบเขต, เทือกเขา; v. มีขอบเขตตั้งแต่, จัดเรียง",
        "The shop sells bags in a wide range of colors.",
        "n., v."
      ],
      [
        "rare",
        "หายาก, ไม่ค่อยเกิดขึ้น, สุกแบบกึ่งดิบ",
        "Seeing a wild hornbill here is a rare treat.",
        "adj."
      ]
    ]
  },
  {
    "id": "ox-b1-6",
    "label": "B1 Words · 6 (rarely–stick)",
    "deck": "Oxford · B1 · 6",
    "cards": [
      [
        "rarely",
        "ไม่ค่อยจะ, นานๆ ครั้ง",
        "It rarely snows in this warm southern coastal town.",
        "adv."
      ],
      [
        "reaction",
        "ปฏิกิริยา, การตอบสนอง",
        "What was your boss's reaction to the new schedule?",
        "n."
      ],
      [
        "reality",
        "ความเป็นจริง, ความจริง",
        "His dream of opening a bookstore finally became reality.",
        "n."
      ],
      [
        "receipt",
        "ใบเสร็จรับเงิน",
        "Keep your receipt in case you want an exchange.",
        "n."
      ],
      [
        "recommendation",
        "คำแนะนำ, การแนะนำ",
        "Thanks for the great restaurant recommendation near our hotel.",
        "n."
      ],
      [
        "reference",
        "การอ้างอิง, แหล่งอ้างอิง, จดหมายรับรอง",
        "My former manager offered to write a job reference.",
        "n."
      ],
      [
        "reflect",
        "สะท้อน, ไตร่ตรอง, สะท้อนให้เห็น",
        "Clean mirrors reflect bright morning sunlight into the bedroom.",
        "v."
      ],
      [
        "regularly",
        "อย่างสม่ำเสมอ, เป็นประจำ",
        "Brush and floss your teeth regularly after meals.",
        "adv."
      ],
      [
        "reject",
        "ปฏิเสธ, ไม่ยอมรับ, คัดทิ้ง",
        "Why did the committee reject such a practical proposal?",
        "v."
      ],
      [
        "relate",
        "เชื่อมโยง, เข้าใจความรู้สึก, เล่าเรื่อง",
        "Many readers can easily relate to this story's main character.",
        "v."
      ],
      [
        "related",
        "ที่เกี่ยวข้องกัน, ที่เกี่ยวดองกัน",
        "Lack of exercise and back pain are often related.",
        "adj."
      ],
      [
        "relation",
        "ความสัมพันธ์, ญาติ",
        "Every relation gathered at grandma's house for Songkran.",
        "n."
      ],
      [
        "relative",
        "adj. ที่สัมพันธ์กัน, โดยเปรียบเทียบ; n. ญาติพี่น้อง",
        "A distant relative sent us sweet mangoes from Rayong.",
        "adj., n."
      ],
      [
        "relaxed",
        "ผ่อนคลาย, สบายใจ",
        "Everyone felt calm and relaxed after the warm bath.",
        "adj."
      ],
      [
        "relaxing",
        "ที่ทำให้ผ่อนคลาย, สบาย",
        "Listening to gentle guitar music feels very relaxing.",
        "adj."
      ],
      [
        "release",
        "n. การปล่อยตัว, การวางจำหน่าย; v. ปล่อย, เผยแพร่, วางจำหน่าย",
        "The band will release their new album next Friday.",
        "n., v."
      ],
      [
        "reliable",
        "เชื่อถือได้, ไว้วางใจได้",
        "She is a reliable colleague who always meets deadlines.",
        "adj."
      ],
      [
        "religion",
        "ศาสนา, ความเชื่อทางศาสนา",
        "Respecting every religion helps build a peaceful community.",
        "n."
      ],
      [
        "religious",
        "ทางศาสนา, เคร่งศาสนา",
        "The town holds a colorful religious festival each autumn.",
        "adj."
      ],
      [
        "remain",
        "ยังคงอยู่, เหลืออยู่",
        "Please remain seated until the train stops completely.",
        "v."
      ],
      [
        "remind",
        "เตือนความจำ, ทำให้ระลึกถึง",
        "Remind me to buy fresh milk on the way home.",
        "v."
      ],
      [
        "remote",
        "ห่างไกล, เปลี่ยว, รีโมตควบคุม",
        "They stayed in a remote cabin without phone signal.",
        "adj."
      ],
      [
        "renewable",
        "ที่หมุนเวียนนำกลับมาใช้ใหม่ได้",
        "Solar and wind power are clean renewable energy sources.",
        "adj."
      ],
      [
        "rent",
        "n. ค่าเช่า; v. เช่า, ให้เช่า",
        "Monthly rent for this small studio includes fast internet.",
        "n., v."
      ],
      [
        "repeated",
        "ซ้ำแล้วซ้ำเล่า, หลายครั้ง",
        "Despite repeated reminders, he forgot his umbrella again.",
        "adj."
      ],
      [
        "represent",
        "เป็นตัวแทน, แสดงถึง, สื่อความหมาย",
        "Three top athletes will represent Thailand at the games.",
        "v."
      ],
      [
        "require",
        "ต้องการ, จำเป็นต้องมี, กำหนดให้",
        "Most apartment rentals require a two-month security deposit.",
        "v."
      ],
      [
        "reservation",
        "การจองล่วงหน้า, ข้อกังขา",
        "I made a dinner reservation for four at seven.",
        "n."
      ],
      [
        "resource",
        "ทรัพยากร, แหล่งข้อมูล",
        "Clean freshwater is a precious natural resource everywhere.",
        "n."
      ],
      [
        "respect",
        "n. ความเคารพ, แง่มุม; v. เคารพ, นับถือ",
        "Always respect local customs when visiting another country.",
        "n., v."
      ],
      [
        "responsibility",
        "ความรับผิดชอบ, หน้าที่",
        "Feeding the dog every morning is my younger brother's responsibility.",
        "n."
      ],
      [
        "responsible",
        "ที่มีความรับผิดชอบ, ซึ่งเป็นสาเหตุของ",
        "Who is responsible for locking the office after six?",
        "adj."
      ],
      [
        "retire",
        "เกษียณอายุ, ถอยกลับ",
        "My father plans to retire at age sixty-two.",
        "v."
      ],
      [
        "retired",
        "ที่เกษียณอายุแล้ว",
        "Our retired neighbor tends a lovely orchid garden daily.",
        "adj."
      ],
      [
        "revise",
        "ทบทวนบทเรียน, แก้ไขปรับปรุง",
        "Students should revise their essay notes before Friday's quiz.",
        "v."
      ],
      [
        "risk",
        "n. ความเสี่ยง; v. เสี่ยง, ยอมเสี่ยง",
        "Wearing a seatbelt lowers your risk of serious injury.",
        "n., v."
      ],
      [
        "robot",
        "หุ่นยนต์",
        "A small cleaning robot sweeps our living room floor.",
        "n."
      ],
      [
        "roll",
        "n. ม้วน, ขนมปังก้อนกลม, รายชื่อ; v. กลิ้ง, ม้วน",
        "Watch the wooden ball roll gently across the floor.",
        "n., v."
      ],
      [
        "romantic",
        "โรแมนติก, อ่อนหวาน, เพ้อฝัน",
        "They shared a romantic dinner beside the quiet river.",
        "adj."
      ],
      [
        "rope",
        "เชือก",
        "Tie the heavy wooden boxes down with strong rope.",
        "n."
      ],
      [
        "rough",
        "ขรุขระ, หยาบ, คร่าวๆ",
        "The old stone road felt rough beneath our bicycles.",
        "adj."
      ],
      [
        "row",
        "แถว, แนวเรียง, การทะเลาะวิวาท",
        "We booked four seats in the front cinema row.",
        "n."
      ],
      [
        "royal",
        "เกี่ยวกับราชวงศ์, ของพระมหากษัตริย์, โอ่อ่า",
        "Visitors toured the historic royal palace on Sunday morning.",
        "adj."
      ],
      [
        "rugby",
        "รักบี้, กีฬารักบี้",
        "Our school rugby team won the regional match yesterday.",
        "n."
      ],
      [
        "safety",
        "ความปลอดภัย",
        "Lifeguards check pool safety equipment every single morning.",
        "n."
      ],
      [
        "sailor",
        "กะลาสี, ทหารเรือ, นักเดินเรือ",
        "The experienced sailor steered the boat through high waves.",
        "n."
      ],
      [
        "sample",
        "n. ตัวอย่าง; v. ลองชิม, สุ่มตัวอย่าง",
        "The bakery offered a free cheese sample to customers.",
        "n., v."
      ],
      [
        "sand",
        "ทราย",
        "Warm white sand stuck between our toes on vacation.",
        "n."
      ],
      [
        "scan",
        "สแกน, กวาดสายตาอ่าน, ตรวจจับ",
        "Please scan the printed ticket at the train gate.",
        "v."
      ],
      [
        "scientific",
        "ทางวิทยาศาสตร์, มีหลักการ",
        "The museum displays amazing scientific inventions for kids.",
        "adj."
      ],
      [
        "script",
        "บทภาพยนตร์, บทพูด, ตัวเขียน",
        "Actors read the new movie script together around a table.",
        "n."
      ],
      [
        "secondary",
        "ระดับมัธยมศึกษา, รองลงมา, สำรอง",
        "She teaches chemistry at a nearby secondary school.",
        "adj."
      ],
      [
        "security",
        "ความปลอดภัย, การรักษาความปลอดภัย, หลักประกัน",
        "Airport security checks every carry-on bag carefully.",
        "n."
      ],
      [
        "seed",
        "เมล็ดพันธุ์, เมล็ด",
        "Plant each sunflower seed two inches below the soil.",
        "n."
      ],
      [
        "sensible",
        "มีเหตุผล, รู้จักคิด, เหมาะสม",
        "Taking a warm coat to the mountains is sensible.",
        "adj."
      ],
      [
        "seriously",
        "อย่างจริงจัง, อย่างรุนแรง, เอาจริงเอาจัง",
        "Think seriously before quitting a steady full-time job.",
        "adv."
      ],
      [
        "servant",
        "คนรับใช้, ข้ารับใช้",
        "The loyal servant worked in the manor for thirty years.",
        "n."
      ],
      [
        "set",
        "n. ชุด, กลุ่ม, ฉาก; v. ตั้งค่า, จัดวาง, พระอาทิตย์ตก",
        "She bought a matching set of ceramic coffee mugs.",
        "n., v."
      ],
      [
        "setting",
        "ฉาก, สภาพแวดล้อม, การตั้งค่า",
        "This lakeside village is a peaceful setting for novels.",
        "n."
      ],
      [
        "sex",
        "เพศ, เพศสัมพันธ์",
        "Please select your age and sex on the form.",
        "n."
      ],
      [
        "sexual",
        "เกี่ยวกับเพศ, ทางเพศ",
        "The local clinic provides free advice on sexual health.",
        "adj."
      ],
      [
        "sharp",
        "คม, แหลม, เฉียบแหลม",
        "Use a sharp knife when slicing fresh ripe tomatoes.",
        "adj."
      ],
      [
        "shelf",
        "ชั้นวางของ, หิ้ง",
        "Put the heavy dictionaries back on the bottom shelf.",
        "n."
      ],
      [
        "shell",
        "เปลือกหอย, เปลือกแข็ง, กระดอง",
        "We found a pink sea shell along the shoreline.",
        "n."
      ],
      [
        "shift",
        "n. กะการทำงาน, การเปลี่ยนแปลง; v. เลื่อน, เปลี่ยนย้าย",
        "My brother works the night shift at a hospital.",
        "n., v."
      ],
      [
        "shine",
        "ส่องแสง, เปล่งประกาย, ขัดเงา",
        "Morning sunlight began to shine through the bedroom curtains.",
        "v."
      ],
      [
        "shiny",
        "มันวาว, เงางาม, เปล่งปลั่ง",
        "He polished his black shoes until they looked shiny.",
        "adj."
      ],
      [
        "shoot",
        "ยิง, ถ่ายทำ, พุ่งออก",
        "Film crews will shoot two scenes in Old Town.",
        "v."
      ],
      [
        "shy",
        "ขี้อาย, เหนียมอาย",
        "The shy kitten hid quietly behind the living-room sofa.",
        "adj."
      ],
      [
        "sight",
        "การมองเห็น, ภาพที่เห็น, สถานที่น่าชม",
        "Red roses blooming by the gate were a lovely sight.",
        "n."
      ],
      [
        "signal",
        "n. สัญญาณ; v. ส่งสัญญาณ, แสดงท่าที",
        "Check the traffic signal before crossing the busy road.",
        "n., v."
      ],
      [
        "silent",
        "เงียบสงัด, นิ่งเงียบ, ไม่พูด",
        "Keep your phone silent during the classical piano concert.",
        "adj."
      ],
      [
        "silly",
        "โง่เขลา, ไร้สาระ, ขบขัน",
        "We laughed together at my dog's silly hat.",
        "adj."
      ],
      [
        "similarity",
        "ความคล้ายคลึงกัน, ส่วนที่เหมือนกัน",
        "Notice the striking similarity between the two twin sisters.",
        "n."
      ],
      [
        "similarly",
        "ในทำนองเดียวกัน, อย่างคล้ายคลึงกัน",
        "Both jackets fit well and are similarly priced.",
        "adv."
      ],
      [
        "simply",
        "อย่างเรียบง่าย, เพียงแค่, จริงๆ",
        "Simply press the silver button to open the lid.",
        "adv."
      ],
      [
        "sink",
        "จม, จมลง, ลดระดับลง",
        "Heavy iron coins sink quickly to the pool bottom.",
        "v."
      ],
      [
        "slice",
        "n. ชิ้นบาง, แผ่น; v. หั่นเป็นแผ่น, เฉือน",
        "Would you like another slice of warm apple pie?",
        "n., v."
      ],
      [
        "slightly",
        "เล็กน้อย, นิดหน่อย",
        "Today feels slightly cooler than yesterday afternoon.",
        "adv."
      ],
      [
        "smart",
        "ฉลาด, ทันสมัย, แต่งตัวภูมิฐาน",
        "Wearing a dark blazer looks smart for an interview.",
        "adj."
      ],
      [
        "smooth",
        "เรียบลื่น, ราบรื่น, นุ่มนวล",
        "Blend the cold fruit until the yogurt turns smooth.",
        "adj."
      ],
      [
        "software",
        "ซอฟต์แวร์, โปรแกรมคอมพิวเตอร์",
        "Remember to update your antivirus software before downloading files.",
        "n."
      ],
      [
        "soil",
        "ดิน, ผืนดิน",
        "Rich dark soil helps garden herbs grow quickly.",
        "n."
      ],
      [
        "solid",
        "adj. แข็ง, แน่นหนา, เชื่อถือได้; n. ของแข็ง",
        "Water freezes into solid ice below zero degrees.",
        "adj., n."
      ],
      [
        "southern",
        "ทางทิศใต้, เกี่ยวกับภาคใต้",
        "Southern islands attract divers with clear turquoise water.",
        "adj."
      ],
      [
        "specifically",
        "โดยเฉพาะเจาะจง, อย่างเจาะจง",
        "This lightweight tent is designed specifically for solo campers.",
        "adv."
      ],
      [
        "spending",
        "การใช้จ่าย, งบประมาณที่ใช้",
        "Track your weekly spending to save for summer travel.",
        "n."
      ],
      [
        "spicy",
        "เผ็ด, มีรสเครื่องเทศจัด",
        "Thai green curry can be wonderfully fragrant and spicy.",
        "adj."
      ],
      [
        "spirit",
        "จิตวิญญาณ, กำลังใจ, ความมุ่งมั่น",
        "Despite losing, the players kept a positive team spirit.",
        "n."
      ],
      [
        "spoken",
        "ที่พูดออกมา, ภาษาพูด",
        "Daily conversation practice builds confidence in spoken English.",
        "adj."
      ],
      [
        "spot",
        "n. จุด, ตำแหน่ง, สิว; v. สังเกตเห็น, มองเห็น",
        "Can you spot our red tent in this photo?",
        "n., v."
      ],
      [
        "spread",
        "v. แพร่กระจาย, ทา, กางออก; n. การแพร่กระจาย, ขอบเขต",
        "Spread soft strawberry jam evenly over your toast.",
        "v., n."
      ],
      [
        "stadium",
        "สนามกีฬาขนาดใหญ่",
        "Forty thousand fans cheered inside the packed football stadium.",
        "n."
      ],
      [
        "staff",
        "พนักงาน, เจ้าหน้าที่, บุคลากร",
        "The hotel staff greeted tired guests with cold towels.",
        "n."
      ],
      [
        "standard",
        "adj. ที่เป็นมาตรฐาน, ทั่วไป; n. มาตรฐาน, เกณฑ์",
        "Airbags are a standard safety feature in modern cars.",
        "adj., n."
      ],
      [
        "statistic",
        "ข้อมูลสถิติ, ตัวเลขสถิติ",
        "One surprising statistic showed more people cycling to work.",
        "n."
      ],
      [
        "statue",
        "รูปปั้น, อนุสาวรีย์",
        "Tourists took photos beside the bronze lion statue.",
        "n."
      ],
      [
        "stick",
        "n. กิ่งไม้, แท่งไม้; v. ติดกาว, ปัก, ทนอยู่",
        "My dog loves chasing a wooden stick in the park.",
        "n., v."
      ]
    ]
  },
  {
    "id": "ox-b1-7",
    "label": "B1 Words · 7 (stranger–youth)",
    "deck": "Oxford · B1 · 7",
    "cards": [
      [
        "stranger",
        "คนแปลกหน้า",
        "A kind stranger returned my dropped wallet on the bus.",
        "n."
      ],
      [
        "strength",
        "พละกำลัง, ความแข็งแรง, จุดแข็ง",
        "It takes real inner strength to forgive old mistakes.",
        "n."
      ],
      [
        "string",
        "เชือกเส้นเล็ก, สายดนตรี, ชุดเรียงต่อกัน",
        "Tie the paper parcel neatly with brown string.",
        "n."
      ],
      [
        "strongly",
        "อย่างมาก, อย่างหนักแน่น, อย่างแรง",
        "Doctors strongly recommend drinking enough water every day.",
        "adv."
      ],
      [
        "studio",
        "ห้องทำงานศิลปะ, ห้องอัดเสียง, ห้องพักขนาดกะทัดรัด",
        "She painted large oil landscapes inside her bright studio.",
        "n."
      ],
      [
        "stuff",
        "n. สิ่งของ, ข้าวของ; v. ยัดใส่, อัดแน่น",
        "Pack all your camping stuff before Friday evening.",
        "n., v."
      ],
      [
        "substance",
        "สสาร, สารเคมี, แก่นสาร",
        "Clean the table if any sticky substance spills.",
        "n."
      ],
      [
        "successfully",
        "อย่างสำเร็จ, ลุล่วงไปด้วยดี",
        "She successfully completed her first half marathon last Sunday.",
        "adv."
      ],
      [
        "sudden",
        "กะทันหัน, ฉับพลัน",
        "A sudden rainstorm forced everyone inside the cafe.",
        "adj."
      ],
      [
        "suffer",
        "ทุกข์ทรมาน, ประสบเคราะห์, ได้รับผลเสีย",
        "Many commuters suffer from back pain after long drives.",
        "v."
      ],
      [
        "suitable",
        "เหมาะสม, คู่ควร",
        "This quiet trail is suitable for beginner hikers.",
        "adj."
      ],
      [
        "summarize",
        "สรุปความ, ย่อความ",
        "Please summarize the long report into three bullet points.",
        "v."
      ],
      [
        "summary",
        "บทสรุป, เรื่องย่อ",
        "Read the short summary at the end of chapter one.",
        "n."
      ],
      [
        "supply",
        "n. เสบียง, ปริมาณสินค้า, การจัดหา; v. จัดหา, ส่งมอบ",
        "Our local farm can supply fresh eggs every morning.",
        "n., v."
      ],
      [
        "supporter",
        "ผู้สนับสนุน, แฟนกีฬา",
        "Every loyal supporter wore blue scarves to the match.",
        "n."
      ],
      [
        "surely",
        "อย่างแน่นอน, คงต้องเป็นเช่นนั้น",
        "With steady effort, your English will surely improve soon.",
        "adv."
      ],
      [
        "surface",
        "พื้นผิว, ผิวหน้า",
        "Wipe the smooth glass surface with a dry cloth.",
        "n."
      ],
      [
        "survive",
        "รอดชีวิต, อยู่รอด, ผ่านพ้นวิกฤต",
        "Desert plants survive for months with very little rain.",
        "v."
      ],
      [
        "switch",
        "v. สลับ, เปลี่ยน, เปิดปิด; n. สวิตช์, การเปลี่ยน",
        "Switch off the hallway lights before going to sleep.",
        "v., n."
      ],
      [
        "symptom",
        "อาการของโรค, สัญญาณบ่งชี้",
        "A dry cough is a common symptom of colds.",
        "n."
      ],
      [
        "tail",
        "หาง, ส่วนท้าย",
        "The happy puppy wagged its fluffy tail at dinner.",
        "n."
      ],
      [
        "talent",
        "พรสวรรค์, ความสามารถพิเศษ",
        "Her natural talent for piano amazed every music teacher.",
        "n."
      ],
      [
        "talented",
        "ที่มีพรสวรรค์, เก่งกาจ",
        "A talented young chef opened a cozy cafe downtown.",
        "adj."
      ],
      [
        "tax",
        "n. ภาษี; v. เก็บภาษี, สร้างภาระหนัก",
        "Sales tax is already included on this price tag.",
        "n., v."
      ],
      [
        "technical",
        "ทางเทคนิค, เฉพาะทาง",
        "Call technical support if the printer jams again.",
        "adj."
      ],
      [
        "technique",
        "เทคนิค, วิธีการ, กลวิธี",
        "This simple cooking technique keeps grilled fish juicy.",
        "n."
      ],
      [
        "tend",
        "มีแนวโน้มจะ, มักจะ, ดูแล",
        "People tend to eat less during very hot afternoons.",
        "v."
      ],
      [
        "tent",
        "เต็นท์, กระโจม",
        "We pitched our green tent beside the pine trees.",
        "n."
      ],
      [
        "theirs",
        "ของพวกเขา",
        "Our seats are downstairs and theirs are upstairs.",
        "pron."
      ],
      [
        "theme",
        "แก่นเรื่อง, หัวข้อหลัก, แนวคิดหลัก",
        "Friendship is the central theme of this charming film.",
        "n."
      ],
      [
        "theory",
        "ทฤษฎี, ข้อสันนิษฐาน",
        "In theory, taking the express train saves thirty minutes.",
        "n."
      ],
      [
        "therefore",
        "ดังนั้น, เพราะฉะนั้น",
        "Heavy rain flooded the roads, and therefore buses ran late.",
        "adv."
      ],
      [
        "though",
        "adv. อย่างไรก็ตาม, ถึงอย่างนั้น; conj. ถึงแม้ว่า, แม้ว่า",
        "The walk was tiring, though the mountain view felt rewarding.",
        "adv., conj."
      ],
      [
        "throat",
        "ลำคอ, คอหอย",
        "Hot honey tea soothed her sore throat before bedtime.",
        "n."
      ],
      [
        "throughout",
        "adv. ตลอดทั้งงาน, ทั่วทุกแห่ง; prep. ตลอดทั่ว, ตลอดช่วง",
        "People cheered warmly throughout the colorful parade.",
        "adv., prep."
      ],
      [
        "tight",
        "แน่น, คับ, เข้มงวด",
        "These new running shoes feel slightly tight at first.",
        "adj."
      ],
      [
        "till",
        "conj. จนกระทั่ง, จนถึงเมื่อ; prep. จนถึง",
        "Wait right inside the lobby till the rain stops.",
        "conj., prep."
      ],
      [
        "tin",
        "ดีบุก, กระป๋องโลหะ, กล่องเหล็ก",
        "Grandma kept butter cookies inside a blue tin.",
        "n."
      ],
      [
        "tiny",
        "จิ๋ว, เล็กมาก, นิดเดียว",
        "A tiny green frog sat on the wet leaf.",
        "adj."
      ],
      [
        "toe",
        "นิ้วเท้า",
        "Ouch, I accidentally kicked the chair with my little toe!",
        "n."
      ],
      [
        "tongue",
        "ลิ้น, ภาษา",
        "Be careful not to burn your tongue on hot soup.",
        "n."
      ],
      [
        "total",
        "adj. ทั้งหมด, โดยรวม; n. ยอดรวม, ผลรวม",
        "What is the total cost of these three books?",
        "adj., n."
      ],
      [
        "totally",
        "อย่างสิ้นเชิง, โดยทั้งหมด, จริงๆ",
        "I totally forgot to bring my umbrella this morning.",
        "adv."
      ],
      [
        "trade",
        "n. การค้า, อาชีพช่าง; v. ค้าขาย, แลกเปลี่ยน",
        "Spices and silk shaped ancient global sea trade.",
        "n., v."
      ],
      [
        "translate",
        "แปล, แปลความหมาย",
        "Can you translate this Thai recipe into English?",
        "v."
      ],
      [
        "translation",
        "การแปล, บทแปล",
        "The English translation of this poem reads very smoothly.",
        "n."
      ],
      [
        "treat",
        "ปฏิบัติต่อ, รักษา, เลี้ยงดู",
        "Good doctors treat every patient with kindness and respect.",
        "v."
      ],
      [
        "treatment",
        "การรักษาพยาบาล, การปฏิบัติต่อ",
        "Early medical treatment helps patients recover much faster.",
        "n."
      ],
      [
        "trend",
        "แนวโน้ม, กระแสนิยม",
        "Wearing linen shirts is a huge summer fashion trend.",
        "n."
      ],
      [
        "trick",
        "n. กลอุบาย, มายากล, เคล็ดลับ; v. หลอกลวง, หลอก",
        "My brother taught our clever dog a new trick.",
        "n., v."
      ],
      [
        "truth",
        "ความจริง, ข้อเท็จจริง",
        "Always tell the truth even when it feels awkward.",
        "n."
      ],
      [
        "tube",
        "หลอด, ท่อ, รถไฟใต้ดิน",
        "Squeeze a tiny drop of toothpaste from the tube.",
        "n."
      ],
      [
        "typically",
        "โดยทั่วไป, ตามปกติ, มักจะ",
        "Buses typically arrive every fifteen minutes during rush hour.",
        "adv."
      ],
      [
        "tyre",
        "ยางรถยนต์, ยางล้อ",
        "Dad checked the air pressure in each car tyre.",
        "n."
      ],
      [
        "ugly",
        "น่าเกลียด, อัปลักษณ์, เลวร้าย",
        "That ugly concrete wall looks prettier covered in ivy.",
        "adj."
      ],
      [
        "unable",
        "ไม่สามารถ, ไร้ความสามารถ",
        "Sorry, I am unable to attend Thursday's lunch meeting.",
        "adj."
      ],
      [
        "uncomfortable",
        "ไม่สบายตัว, อึดอัดใจ",
        "These narrow wooden seats get uncomfortable after two hours.",
        "adj."
      ],
      [
        "underwear",
        "ชุดชั้นใน, กางเกงใน",
        "Pack extra socks and clean underwear for the trip.",
        "n."
      ],
      [
        "unemployed",
        "ว่างงาน, ตกงาน",
        "Free job training helps unemployed workers find new roles.",
        "adj."
      ],
      [
        "unemployment",
        "การว่างงาน, อัตราการว่างงาน",
        "New factory openings helped lower local unemployment this year.",
        "n."
      ],
      [
        "unfair",
        "ไม่ยุติธรรม, ไม่เป็นธรรม",
        "Punishing the whole class for one noise felt unfair.",
        "adj."
      ],
      [
        "union",
        "สหภาพแรงงาน, สมาคม, การรวมตัว",
        "Workers joined a labor union to request safer hours.",
        "n."
      ],
      [
        "unless",
        "เว้นแต่ว่า, นอกจากว่า, ถ้าไม่",
        "We will picnic outside unless rain starts before noon.",
        "conj."
      ],
      [
        "unlike",
        "ไม่เหมือน, แตกต่างจาก",
        "Unlike his quiet twin, Mark loves speaking on stage.",
        "prep."
      ],
      [
        "unlikely",
        "ไม่น่าจะเกิดขึ้น, ไม่น่าเป็นไปได้",
        "With clear blue skies, heavy rain looks quite unlikely.",
        "adj."
      ],
      [
        "unnecessary",
        "ไม่จำเป็น, เกินความจำเป็น",
        "Avoid printing unnecessary emails to save office paper.",
        "adj."
      ],
      [
        "unpleasant",
        "ไม่น่ารื่นรมย์, น่ารังเกียจ, แย่",
        "A strange unpleasant smell came from the broken fridge.",
        "adj."
      ],
      [
        "update",
        "n. ข้อมูลล่าสุด, การอัปเดต; v. ปรับปรุงให้ทันสมัย, แจ้งความคืบหน้า",
        "Please update the delivery address on your account today.",
        "n., v."
      ],
      [
        "upset",
        "adj. เสียใจ, อารมณ์เสีย, ปั่นป่วน; v. ทำให้เสียใจ, ทำหกคว่ำ",
        "Do not feel upset about missing one quiz question.",
        "adj., v."
      ],
      [
        "used",
        "มือสอง, ที่ใช้แล้ว, ที่เคยชิน",
        "She bought a clean used bicycle for daily commuting.",
        "adj."
      ],
      [
        "valuable",
        "มีค่า, ล้ำค่า, มีประโยชน์มาก",
        "Thank you for sharing such valuable career advice today.",
        "adj."
      ],
      [
        "value",
        "n. คุณค่า, มูลค่า; v. ให้คุณค่า, ประเมินราคา",
        "Honest friendships carry far more value than expensive gifts.",
        "n., v."
      ],
      [
        "various",
        "หลากหลาย, ต่างๆ นานา",
        "The street market sells various fresh fruits every morning.",
        "adj."
      ],
      [
        "version",
        "ฉบับ, รุ่น, รูปแบบ",
        "Download the newest version of this app for speed.",
        "n."
      ],
      [
        "victim",
        "เหยื่อ, ผู้เคราะห์ร้าย",
        "The police interviewed the robbery victim outside the bank.",
        "n."
      ],
      [
        "viewer",
        "ผู้ชม, ผู้ดู",
        "Every television viewer laughed at the clever commercial.",
        "n."
      ],
      [
        "violent",
        "รุนแรง, โหดร้าย",
        "A violent thunderstorm knocked down branches across our street.",
        "adj."
      ],
      [
        "volunteer",
        "n. อาสาสมัคร; v. อาสาสมัคร, เสนอตัวช่วย",
        "Local students volunteer at the animal shelter every Saturday.",
        "n., v."
      ],
      [
        "vote",
        "n. คะแนนเสียง, การลงคะแนน; v. ลงคะแนน, ออกเสียง",
        "Every adult citizen has the right to vote peacefully.",
        "n., v."
      ],
      [
        "warn",
        "เตือน, ตักเตือน",
        "Lifeguards warn swimmers whenever strong ocean waves roll in.",
        "v."
      ],
      [
        "warning",
        "คำเตือน, สัญญาณเตือน",
        "The weather app sent an early storm warning today.",
        "n."
      ],
      [
        "waste",
        "adj. ที่ไม่ใช้แล้ว, สูญเปล่า; n. ของเสีย, ขยะ, การสิ้นเปลือง; v. ใช้จ่ายอย่างสิ้นเปลือง, เสียเปล่า",
        "Do not waste fresh drinking water while brushing teeth.",
        "adj., n., v."
      ],
      [
        "weapon",
        "อาวุธ",
        "The movie hero carried no gun or sharp weapon.",
        "n."
      ],
      [
        "weigh",
        "ชั่งน้ำหนัก, มีน้ำหนัก, ไตร่ตรอง",
        "Weigh your suitcase at home before leaving for check-in.",
        "v."
      ],
      [
        "western",
        "ทางทิศตะวันตก, แบบตะวันตก",
        "Golden clouds lit up the western sky at sunset.",
        "adj."
      ],
      [
        "whatever",
        "det. ไม่ว่าสิ่งใดก็ตาม; pron. อะไรก็ตาม, สิ่งใดก็ตาม",
        "Order whatever soup looks tastiest on tonight's menu.",
        "det., pron."
      ],
      [
        "whenever",
        "เมื่อใดก็ตาม, ทุกครั้งที่",
        "Call my phone whenever you arrive at the station.",
        "conj."
      ],
      [
        "whether",
        "หรือไม่, ว่าใช่หรือไม่",
        "Ask the clerk whether the museum opens on Mondays.",
        "conj."
      ],
      [
        "Wi-Fi",
        "ไวไฟ, อินเทอร์เน็ตไร้สาย",
        "Does this cozy coffee shop offer free Wi-Fi?",
        "n."
      ],
      [
        "wing",
        "ปีก, ฝ่าย, ปีกอาคาร",
        "The injured bird slowly healed its broken right wing.",
        "n."
      ],
      [
        "within",
        "ภายใน, ภายในระยะเวลา, ภายในขอบเขต",
        "We will deliver your parcel within three business days.",
        "prep."
      ],
      [
        "wonder",
        "n. ความอัศจรรย์, ความสงสัย; v. สงสัย, อยากรู้, ประหลาดใจ",
        "I often wonder how birds navigate across vast oceans.",
        "n., v."
      ],
      [
        "wool",
        "ขนสัตว์, ผ้าขนสัตว์",
        "This soft wool scarf keeps my neck warm outdoors.",
        "n."
      ],
      [
        "worldwide",
        "adj. ทั่วโลก; adv. ไปทั่วโลก",
        "That catchy pop song became famous worldwide overnight.",
        "adj., adv."
      ],
      [
        "worth",
        "adj. คุ้มค่า, มีมูลค่า; n. มูลค่า, คุณค่า",
        "Visiting the night market is definitely worth your time.",
        "adj., n."
      ],
      [
        "written",
        "ที่เป็นลายลักษณ์อักษร, ที่เขียนขึ้น",
        "Ask the landlord for a written receipt after paying.",
        "adj."
      ],
      [
        "yard",
        "สนามหญ้า, ลานบ้าน, หลา",
        "The kids chased butterflies across the sunny back yard.",
        "n."
      ],
      [
        "youth",
        "วัยหนุ่มสาว, เยาวชน, คนหนุ่มสาว",
        "Community sports centers keep local youth active and healthy.",
        "n."
      ]
    ]
  },
  {
    "id": "ox-b2-1",
    "label": "B2 Words · 1 (abandon–concerned)",
    "deck": "Oxford · B2 · 1",
    "cards": [
      [
        "abandon",
        "ละทิ้ง, ทอดทิ้ง, ยกเลิกกลางคัน",
        "Never abandon a pet along the side of roads.",
        "v."
      ],
      [
        "absolute",
        "สมบูรณ์, แท้จริง, เด็ดขาด",
        "I have absolute trust in my sister's honest judgment.",
        "adj."
      ],
      [
        "acceptable",
        "ที่ยอมรับได้, พอใช้ได้",
        "Sending late work without telling your manager is not acceptable.",
        "adj."
      ],
      [
        "accompany",
        "ร่วมเดินทาง, ไปเป็นเพื่อน, บรรเลงคลอ",
        "Will you accompany me to the dentist this afternoon?",
        "v."
      ],
      [
        "accurate",
        "แม่นยำ, ถูกต้องตรงตามจริง",
        "Check the weather forecast for an accurate weekend temperature.",
        "adj."
      ],
      [
        "accuse",
        "กล่าวหา, ใส่ร้าย",
        "Never accuse someone of stealing without clear proof.",
        "v."
      ],
      [
        "acknowledge",
        "ยอมรับความจริง, รับทราบ, แสดงความขอบคุณ",
        "She smiled to acknowledge her friend across the room.",
        "v."
      ],
      [
        "acquire",
        "ได้รับมา, ซื้อกิจการ, เรียนรู้จนได้มา",
        "Good internships help graduates acquire practical office skills.",
        "v."
      ],
      [
        "actual",
        "แท้จริง, ที่เกิดขึ้นจริง",
        "The actual travel time took longer than the map showed.",
        "adj."
      ],
      [
        "adapt",
        "ปรับตัว, ดัดแปลง, ปรับให้เข้ากับ",
        "Young plants quickly adapt to brighter spots near windows.",
        "v."
      ],
      [
        "additional",
        "เพิ่มเติม, เสริม",
        "Bring an additional sweater because mountain nights get chilly.",
        "adj."
      ],
      [
        "administration",
        "การบริหารงาน, คณะผู้บริหาร, รัฐบาล",
        "The school administration announced longer library hours during exams.",
        "n."
      ],
      [
        "adopt",
        "รับเลี้ยงเป็นบุตรบุญธรรม, นำมาใช้, ยอมรับ",
        "They decided to adopt a rescue puppy this spring.",
        "v."
      ],
      [
        "advance",
        "adj. ล่วงหน้า, ขั้นสูง; n. ความก้าวหน้า, เงินล่วงหน้า; v. ก้าวหน้า, เลื่อนขั้น, รุกคืบ",
        "Book ferry tickets in advance during holiday weekends.",
        "adj., n., v."
      ],
      [
        "affair",
        "กิจธุระ, เรื่องราว, ความสัมพันธ์ลับ",
        "Managing personal finances is strictly your own private affair.",
        "n."
      ],
      [
        "afterwards",
        "หลังจากนั้น, ภายหลัง",
        "We watched a comedy film and grabbed noodles afterwards.",
        "adv."
      ],
      [
        "agency",
        "สำนักงานตัวแทน, หน่วยงาน",
        "A local travel agency arranged our island ferry passes.",
        "n."
      ],
      [
        "agenda",
        "วาระการประชุม, แผนการซ่อนเร้น",
        "Budget review is the first item on today's agenda.",
        "n."
      ],
      [
        "aggressive",
        "ก้าวร้าว, ดุร้าย, รุกหนัก",
        "Stay calm when dealing with an aggressive street dog.",
        "adj."
      ],
      [
        "aid",
        "n. ความช่วยเหลือ, อุปกรณ์ช่วย; v. ช่วยเหลือ, สนับสนุน",
        "Volunteers rushed emergency food aid to flooded villages.",
        "n., v."
      ],
      [
        "aircraft",
        "อากาศยาน, เครื่องบิน",
        "Technicians inspect every aircraft carefully before passengers board.",
        "n."
      ],
      [
        "alter",
        "เปลี่ยนแปลง, แก้ไข, ตัดแก้เสื้อผ้า",
        "Could the tailor alter these trousers to fit better?",
        "v."
      ],
      [
        "anger",
        "ความโกรธ, ความโมโห",
        "Take three deep breaths to calm sudden anger down.",
        "n."
      ],
      [
        "angle",
        "มุม, แง่มุม, มุมมอง",
        "Try shooting the portrait from a slightly higher angle.",
        "n."
      ],
      [
        "anniversary",
        "วันครบรอบ",
        "My parents celebrated their silver wedding anniversary last week.",
        "n."
      ],
      [
        "annual",
        "ประจำปี, รายปี",
        "Our company holds an annual charity run every November.",
        "adj."
      ],
      [
        "anxious",
        "วิตกกังวล, เป็นห่วง, กระตือรือร้น",
        "Many students feel anxious right before final exam results.",
        "adj."
      ],
      [
        "apparent",
        "เห็นได้ชัด, ชัดเจน, ที่ดูเหมือนว่า",
        "Her relief was apparent the moment she heard good news.",
        "adj."
      ],
      [
        "apparently",
        "ดูเหมือนว่า, เห็นได้ชัดว่า, ตามที่ได้ยินมา",
        "Apparently, the small corner bakery closes early on Sundays.",
        "adv."
      ],
      [
        "appeal",
        "n. คำอุทธรณ์, เสน่ห์ดึงดูด, คำร้องขอ; v. อุทธรณ์, ดึงดูดใจ, วิงวอน",
        "Bright street markets hold strong appeal for food lovers.",
        "n., v."
      ],
      [
        "approach",
        "n. แนวทาง, วิธีการ, การเข้าใกล้; v. เข้าใกล้, ติดต่อเจรจา",
        "Try a calmer approach when discussing tricky family topics.",
        "n., v."
      ],
      [
        "appropriate",
        "เหมาะสม, สมควร",
        "Wear appropriate shoes before walking across wet marble floors.",
        "adj."
      ],
      [
        "approval",
        "การอนุมัติ, ความเห็นชอบ, การยอมรับ",
        "Wait for manager approval before ordering new office chairs.",
        "n."
      ],
      [
        "approve",
        "อนุมัติ, เห็นด้วย, พอใจ",
        "Did the city council approve the new bike lane?",
        "v."
      ],
      [
        "arise",
        "เกิดขึ้น, ผุดขึ้น, ลุกขึ้น",
        "Unexpected delays often arise during heavy holiday traffic.",
        "v."
      ],
      [
        "armed",
        "ที่ติดอาวุธ, ที่มีข้อมูลพร้อม",
        "Armed security officers guarded the jewelry exhibit closely.",
        "adj."
      ],
      [
        "arms",
        "อาวุธ, ยุทโธปกรณ์",
        "Several nations signed a treaty to limit nuclear arms.",
        "n."
      ],
      [
        "artificial",
        "เทียม, ประดิษฐ์ขึ้น, ไม่เป็นธรรมชาติ",
        "Fresh orange juice tastes better without artificial sweet flavor.",
        "adj."
      ],
      [
        "artistic",
        "ทางศิลปะ, มีหัวศิลปะ",
        "Her artistic talent shines through every handmade ceramic bowl.",
        "adj."
      ],
      [
        "ashamed",
        "ละอายใจ, อับอาย",
        "Never feel ashamed of asking questions while learning.",
        "adj."
      ],
      [
        "aspect",
        "แง่มุม, ด้าน, ลักษณะ",
        "Packing light is my favorite aspect of solo travel.",
        "n."
      ],
      [
        "assess",
        "ประเมิน, ตีราคา, ตรวจสอบ",
        "Teachers use short quizzes to assess student progress weekly.",
        "v."
      ],
      [
        "assessment",
        "การประเมินผล, การตีราคา",
        "Complete the online safety assessment before entering the lab.",
        "n."
      ],
      [
        "associate",
        "เชื่อมโยง, คบค้าสมาคม, มีส่วนเกี่ยวข้อง",
        "People often associate warm cinnamon smells with cozy winters.",
        "v."
      ],
      [
        "associated",
        "ที่เกี่ยวข้องกัน, ที่เชื่อมโยงกัน",
        "Review all fees associated with opening a savings account.",
        "adj."
      ],
      [
        "association",
        "สมาคม, ความเชื่อมโยง, การคบหา",
        "Our neighborhood association organizes monthly street cleanups.",
        "n."
      ],
      [
        "assume",
        "สันนิษฐาน, คิดเอาเอง, รับตำแหน่ง",
        "Do not assume everyone checked the email before noon.",
        "v."
      ],
      [
        "attempt",
        "n. ความพยายาม; v. พยายาม, ลงมือทำ",
        "She passed her driving test on the first attempt.",
        "n., v."
      ],
      [
        "bacteria",
        "แบคทีเรีย, เชื้อจุลินทรีย์",
        "Wash your hands with soap to remove harmful bacteria.",
        "n."
      ],
      [
        "barrier",
        "สิ่งกีดขวาง, อุปสรรค, รั้วกั้น",
        "Language need not become a barrier to warm friendships.",
        "n."
      ],
      [
        "basically",
        "โดยพื้นฐานแล้ว, จริงๆ แล้ว, พูดง่ายๆ",
        "Basically, this quick recipe needs only four pantry items.",
        "adv."
      ],
      [
        "beg",
        "ขอร้องอย่างน่าสงสาร, อ้อนวอน, ขอทาน",
        "Our dog likes to beg politely beside dinner chairs.",
        "v."
      ],
      [
        "being",
        "สิ่งมีชีวิต, การมีอยู่, ตัวตน",
        "Every human being deserves clean water and fair respect.",
        "n."
      ],
      [
        "bent",
        "ที่โค้งงอ, ที่คดเคี้ยว, ที่มุ่งมั่น",
        "He straightened the bent metal wire with pliers.",
        "adj."
      ],
      [
        "bet",
        "n. การพนัน, เงินเดิมพัน; v. พนัน, มั่นใจได้เลย",
        "I bet our neighbors forgot to water their plants.",
        "n., v."
      ],
      [
        "beyond",
        "adv. ไกลออกไป, เกินกว่านั้น; prep. พ้นจาก, เหนือกว่า, เกินกว่า",
        "The hiking trail continues far beyond that wooden bridge.",
        "adv., prep."
      ],
      [
        "bitter",
        "ขม, ขมขื่น, หนาวเหน็บ",
        "Dark chocolate tastes slightly bitter without extra sugar.",
        "adj."
      ],
      [
        "blame",
        "n. ความผิด, การตำหนิ; v. ตำหนิ, โทษ",
        "Do not blame yourself for yesterday's sudden traffic jam.",
        "n., v."
      ],
      [
        "blind",
        "ตาบอด, มองไม่เห็นความจริง",
        "Trained guide dogs help blind travelers cross streets safely.",
        "adj."
      ],
      [
        "bond",
        "สายใย, ความผูกพัน, พันธบัตร",
        "Cooking together builds a strong bond among siblings.",
        "n."
      ],
      [
        "breast",
        "หน้าอก, เต้านม, อกสัตว์ปีก",
        "She grilled chicken breast with garlic and fresh herbs.",
        "n."
      ],
      [
        "breath",
        "ลมหายใจ, การหายใจ",
        "Step outside for a deep breath of cool air.",
        "n."
      ],
      [
        "brief",
        "สั้นๆ, กระชับ, ชั่วครู่",
        "The manager held a brief ten-minute meeting before opening.",
        "adj."
      ],
      [
        "broad",
        "กว้าง, กว้างขวาง, ชัดเจน",
        "The hotel sits along a broad avenue lined with trees.",
        "adj."
      ],
      [
        "broadcast",
        "n. รายการออกอากาศ; v. ออกอากาศ, กระจายเสียง",
        "Radio stations broadcast live traffic updates every fifteen minutes.",
        "n., v."
      ],
      [
        "budget",
        "งบประมาณ, แผนการใช้เงิน",
        "Stick to a monthly budget to save more money.",
        "n."
      ],
      [
        "bullet",
        "กระสุนปืน, สัญลักษณ์หัวข้อย่อย",
        "Use short bullet points to keep your slides clear.",
        "n."
      ],
      [
        "bunch",
        "ช่อ, พวง, กลุ่มคน",
        "He brought a bright bunch of yellow sunflowers home.",
        "n."
      ],
      [
        "bush",
        "พุ่มไม้, ป่าละเมาะ",
        "A small sparrow hopped inside the green rose bush.",
        "n."
      ],
      [
        "cable",
        "สายเคเบิล, สายไฟ, เคเบิลทีวี",
        "Plug the black power cable firmly into the outlet.",
        "n."
      ],
      [
        "calculate",
        "คำนวณ, คาดการณ์",
        "Let us calculate how much paint this wall needs.",
        "v."
      ],
      [
        "cancel",
        "ยกเลิก, เพิกถอน",
        "Should we cancel our outdoor picnic if storms hit?",
        "v."
      ],
      [
        "cancer",
        "โรคมะเร็ง",
        "Regular health screenings help detect early skin cancer.",
        "n."
      ],
      [
        "capable",
        "มีความสามารถ, เก่ง, ทำได้",
        "She is fully capable of leading the design project.",
        "adj."
      ],
      [
        "capacity",
        "ความจุ, ปริมาณรองรับ, ความสามารถ",
        "This meeting room has a seating capacity of twenty.",
        "n."
      ],
      [
        "capture",
        "n. การจับกุม, การบันทึกภาพ; v. จับกุม, ยึด, บันทึกภาพ",
        "Good photographers capture genuine laughter in natural daylight.",
        "n., v."
      ],
      [
        "cast",
        "n. คณะนักแสดง, เฝือก; v. คัดเลือกนักแสดง, โยน, หล่อแบบ",
        "The entire film cast waved warmly at the premiere.",
        "n., v."
      ],
      [
        "cell",
        "เซลล์, ห้องขัง, ห้องเล็ก",
        "Students observed a green leaf cell under the microscope.",
        "n."
      ],
      [
        "characteristic",
        "adj. ที่เป็นเอกลักษณ์, เฉพาะตัว; n. ลักษณะเฉพาะ, คุณสมบัติ",
        "Patience is a key characteristic of great teachers.",
        "adj., n."
      ],
      [
        "chief",
        "adj. หลัก, สำคัญที่สุด; n. หัวหน้า, ผู้นำ",
        "Traffic safety is our chief priority for school buses.",
        "adj., n."
      ],
      [
        "circumstance",
        "สถานการณ์, เหตุการณ์, สภาพแวดล้อม",
        "Under no circumstance should you share your bank password.",
        "n."
      ],
      [
        "cite",
        "อ้างอิง, ยกมากล่าวถึง, เรียกตัว",
        "Always cite reliable sources at the end of essays.",
        "v."
      ],
      [
        "citizen",
        "พลเมือง, ประชาชน, ชาวเมือง",
        "Every citizen can vote in national elections at eighteen.",
        "n."
      ],
      [
        "civil",
        "เกี่ยวกับพลเมือง, ทางแพ่ง, สุภาพ",
        "Volunteers learn civil rights laws before helping local families.",
        "adj."
      ],
      [
        "classic",
        "adj. คลาสสิก, ยอดเยี่ยมตลอดกาล; n. ผลงานคลาสสิก, เรื่องยอดนิยม",
        "This classic adventure novel remains popular with young readers.",
        "adj., n."
      ],
      [
        "closely",
        "อย่างใกล้ชิด, อย่างละเอียด",
        "Watch the chef closely while she folds the dumplings.",
        "adv."
      ],
      [
        "collapse",
        "n. การพังทลาย, การล่มสลาย; v. พังทลาย, ทรุดตัว, เป็นลม",
        "Old wooden roofs can collapse under heavy wet snow.",
        "n., v."
      ],
      [
        "combination",
        "การผสมผสาน, การรวมกัน, รหัสปลดล็อก",
        "Lemon and honey make a soothing hot tea combination.",
        "n."
      ],
      [
        "comfort",
        "n. ความสบาย, การปลอบโยน; v. ปลอบใจ, ให้กำลังใจ",
        "A warm bowl of soup brings instant comfort indoors.",
        "n., v."
      ],
      [
        "command",
        "n. คำสั่ง, การควบคุม; v. สั่งการ, บัญชาการ, ได้รับการยอมรับ",
        "The trained dog obeyed every quiet hand command.",
        "n., v."
      ],
      [
        "commission",
        "n. คณะกรรมการ, ค่านายหน้า, ค่าตอบแทน; v. ว่าจ้างให้สร้าง, แต่งตั้ง",
        "Real estate agents earn commission on each home sale.",
        "n., v."
      ],
      [
        "commitment",
        "ความมุ่งมั่น, คำมั่นสัญญา, พันธะ",
        "Learning a language takes daily commitment and curiosity.",
        "n."
      ],
      [
        "committee",
        "คณะกรรมการ, คณะทำงาน",
        "The festival committee meets every Tuesday to plan booths.",
        "n."
      ],
      [
        "commonly",
        "โดยทั่วไป, มักจะ, เป็นประจำ",
        "Ginger is commonly used in Asian soups and stir-fries.",
        "adv."
      ],
      [
        "complicated",
        "ซับซ้อน, ยุ่งยาก, เข้าใจยาก",
        "This tax form looks far too complicated for beginners.",
        "adj."
      ],
      [
        "component",
        "ส่วนประกอบ, ชิ้นส่วน, องค์ประกอบ",
        "Each small metal component fits neatly inside the watch.",
        "n."
      ],
      [
        "concentration",
        "สมาธิ, ความเข้มข้น, การรวมตัว",
        "Soft background noise can break your concentration while reading.",
        "n."
      ],
      [
        "concept",
        "แนวคิด, มโนทัศน์, หลักการ",
        "The artist explained the simple concept behind her sculpture.",
        "n."
      ],
      [
        "concern",
        "n. ความกังวล, ข้อห่วงใย, เรื่องที่เกี่ยวข้อง; v. ทำให้กังวล, เกี่ยวข้องกับ",
        "Rising food prices remain a shared concern for families.",
        "n., v."
      ],
      [
        "concerned",
        "ที่กังวล, ที่ห่วงใย, ที่เกี่ยวข้อง",
        "Concerned neighbors called the city about the broken streetlight.",
        "adj."
      ]
    ]
  },
  {
    "id": "ox-b2-2",
    "label": "B2 Words · 2 (conduct–enthusiasm)",
    "deck": "Oxford · B2 · 2",
    "cards": [
      [
        "conduct",
        "n. ความประพฤติ, การดำเนินงาน; v. ดำเนินการ, ควบคุมวง, นำทาง",
        "Researchers will conduct a quick survey among commuters tomorrow.",
        "n., v."
      ],
      [
        "confidence",
        "ความมั่นใจ, ความเชื่อมั่น, ความไว้วางใจ",
        "Daily speaking practice builds steady confidence in English.",
        "n."
      ],
      [
        "conflict",
        "n. ความขัดแย้ง, การปะทะ; v. ขัดแย้งกัน, ไม่สอดคล้องกัน",
        "Calm listening helps resolve conflict among coworkers.",
        "n., v."
      ],
      [
        "confusing",
        "ชวนสับสน, น่างง, ไม่ชัดเจน",
        "These downtown road signs look really confusing at night.",
        "adj."
      ],
      [
        "conscious",
        "มีสติ, รู้ตัว, ตระหนักรู้",
        "Stay conscious of your posture while sitting at desks.",
        "adj."
      ],
      [
        "conservative",
        "adj. อนุรักษนิยม, ไม่ชอบเปลี่ยนแปลง; n. ผู้อนุรักษนิยม",
        "My grandfather holds conservative views on family traditions.",
        "adj., n."
      ],
      [
        "consideration",
        "การพิจารณา, ความคำนึงถึง, ความเกรงใจ",
        "After careful consideration, we decided to accept the offer.",
        "n."
      ],
      [
        "consistent",
        "สม่ำเสมอ, คงเส้นคงวา, สอดคล้องกัน",
        "She maintains a consistent study schedule every week.",
        "adj."
      ],
      [
        "constant",
        "คงที่, ต่อเนื่อง, ไม่เปลี่ยนแปลง",
        "The machine operates at a constant temperature all day.",
        "adj."
      ],
      [
        "constantly",
        "อย่างต่อเนื่อง, อยู่เสมอ, ตลอดเวลา",
        "Technology is constantly changing the way we communicate.",
        "adv."
      ],
      [
        "construct",
        "สร้าง, ก่อสร้าง, ประกอบขึ้น",
        "They plan to construct a new bridge across the river.",
        "v."
      ],
      [
        "construction",
        "การก่อสร้าง, สิ่งก่อสร้าง",
        "The construction of the subway station took three years.",
        "n."
      ],
      [
        "contemporary",
        "ร่วมสมัย, สมัยใหม่, ในยุคเดียวกัน",
        "The gallery features contemporary art from young local painters.",
        "adj."
      ],
      [
        "contest",
        "n. การแข่งขัน, การประกวด; v. แข่งขัน, โต้แย้ง",
        "She won first prize in the national writing contest.",
        "n., v."
      ],
      [
        "contract",
        "n. สัญญา, ข้อตกลง; v. ทำสัญญา, หดตัว",
        "Please read every page before signing the employment contract.",
        "n., v."
      ],
      [
        "contribute",
        "มีส่วนร่วม, บริจาค, ช่วยเหลือ",
        "Everyone in the team will contribute to the final report.",
        "v."
      ],
      [
        "contribution",
        "การมีส่วนร่วม, เงินบริจาค, ผลงานช่วยเหลือ",
        "Thank you for your generous contribution to our charity.",
        "n."
      ],
      [
        "convert",
        "แปลง, เปลี่ยนสภาพ, เปลี่ยนความเชื่อ",
        "This tool can convert miles into kilometers quickly.",
        "v."
      ],
      [
        "convinced",
        "มั่นใจ, เชื่อมั่นอย่างยิ่ง",
        "I am convinced that honesty is always the best policy.",
        "adj."
      ],
      [
        "core",
        "adj. หลัก, สำคัญที่สุด; n. แก่น, แกนกลาง, ใจกลาง",
        "Good communication is a core skill for any manager.",
        "adj., n."
      ],
      [
        "corporate",
        "เกี่ยวกับบริษัท, ขององค์กร",
        "She works in the corporate headquarters downtown.",
        "adj."
      ],
      [
        "council",
        "สภา, คณะกรรมการบริหาร",
        "The city council approved the budget for new parks.",
        "n."
      ],
      [
        "county",
        "เขตการปกครอง, มณฑล",
        "Our town has the largest library in the county.",
        "n."
      ],
      [
        "courage",
        "ความกล้าหาญ, ความใจเด็ด",
        "It takes real courage to admit when you are wrong.",
        "n."
      ],
      [
        "crash",
        "n. อุบัติเหตุชน, เสียงดังสนั่น, ระบบล่ม; v. ชน, พุ่งชน, ล่ม",
        "Nobody was hurt in the minor car crash yesterday.",
        "n., v."
      ],
      [
        "creation",
        "การสร้างสรรค์, สิ่งที่สร้างขึ้น",
        "The creation of new jobs helped the local economy.",
        "n."
      ],
      [
        "creature",
        "สิ่งมีชีวิต, สัตว์",
        "Every living creature needs clean water to survive.",
        "n."
      ],
      [
        "crew",
        "ลูกเรือ, ทีมงาน, คณะผู้ปฏิบัติงาน",
        "The flight crew welcomed passengers warmly onto the plane.",
        "n."
      ],
      [
        "crisis",
        "วิกฤตการณ์, ช่วงหัวเลี้ยวหัวต่อ",
        "The company managed to survive the financial crisis.",
        "n."
      ],
      [
        "criterion",
        "เกณฑ์, บรรทัดฐาน, หลักตัดสิน",
        "Experience is the main criterion for selecting new staff.",
        "n."
      ],
      [
        "critic",
        "นักวิจารณ์, ผู้ตำหนิติเตียน",
        "The film critic praised the young actor's performance.",
        "n."
      ],
      [
        "critical",
        "วิกฤต, สำคัญอย่างยิ่ง, เชิงวิจารณ์",
        "Water plays a critical role in keeping crops alive.",
        "adj."
      ],
      [
        "criticism",
        "คำวิจารณ์, การวิพากษ์วิจารณ์, การตำหนิ",
        "Constructive criticism can help you improve your work.",
        "n."
      ],
      [
        "criticize",
        "วิจารณ์, ตำหนิ, ติเตียน",
        "It is easy to criticize others without offering solutions.",
        "v."
      ],
      [
        "crop",
        "พืชผล, ผลผลิตทางการเกษตร",
        "Heavy rain ruined the rice crop this season.",
        "n."
      ],
      [
        "crucial",
        "สำคัญยิ่ง, จำเป็นอย่างยิ่ง, ชี้ขาด",
        "Getting enough sleep is crucial for good health.",
        "adj."
      ],
      [
        "cure",
        "n. ยารักษา, วิธีรักษา, การหายป่วย; v. รักษาให้หาย, แก้ไข",
        "Scientists are still searching for a cure for the disease.",
        "n., v."
      ],
      [
        "curve",
        "n. เส้นโค้ง, ทางโค้ง; v. โค้ง, ดัดให้โค้ง",
        "Slow down before driving into that sharp curve.",
        "n., v."
      ],
      [
        "curved",
        "โค้ง, ที่โค้งงอ",
        "The new monitor has a wide curved screen.",
        "adj."
      ],
      [
        "debate",
        "n. การโต้วาที, การถกเถียง; v. ถกเถียง, อภิปราย",
        "Students held a lively debate about school uniforms.",
        "n., v."
      ],
      [
        "debt",
        "หนี้สิน, บุญคุณ",
        "He worked two jobs to pay off his debt.",
        "n."
      ],
      [
        "decent",
        "เหมาะสม, ดีพอสมควร, สุภาพเรียบร้อย",
        "We found a decent hotel near the train station.",
        "adj."
      ],
      [
        "declare",
        "ประกาศ, แถลงอย่างเป็นทางการ, สำแดง",
        "Travelers must declare expensive items at customs.",
        "v."
      ],
      [
        "decline",
        "n. การลดลง, ความเสื่อมถอย; v. ปฏิเสธอย่างสุภาพ, ลดลง",
        "I must politely decline your invitation to dinner.",
        "n., v."
      ],
      [
        "decoration",
        "การตกแต่ง, เครื่องประดับตกแต่ง",
        "They hung colorful paper lanterns as party decoration.",
        "n."
      ],
      [
        "decrease",
        "n. การลดลง, จำนวนที่ลดลง; v. ลดลง, ทำให้ลดลง",
        "Sales showed a slight decrease during the rainy season.",
        "n., v."
      ],
      [
        "deeply",
        "อย่างลึกซึ้ง, อย่างมาก, อย่างสุดซึ้ง",
        "She felt deeply grateful for her friend's help.",
        "adv."
      ],
      [
        "defeat",
        "n. ความพ่ายแพ้; v. เอาชนะ, ทำให้พ่ายแพ้",
        "Our team suffered a painful defeat in the final match.",
        "n., v."
      ],
      [
        "defence",
        "การป้องกัน, การแก้ต่าง, กองกำลังป้องกัน",
        "The goalkeeper made a brilliant save in defence.",
        "n."
      ],
      [
        "defend",
        "ป้องกัน, ปกป้อง, แก้ต่าง",
        "Soldiers are trained to defend their country.",
        "v."
      ],
      [
        "delay",
        "n. ความล่าช้า, การเลื่อนเวลา; v. เลื่อน, ชะลอ, ทำให้ล่าช้า",
        "Bad weather caused a two-hour delay at the airport.",
        "n., v."
      ],
      [
        "deliberate",
        "จงใจ, ตั้งใจ, รอบคอบ",
        "Investigators believe the fire was a deliberate act.",
        "adj."
      ],
      [
        "deliberately",
        "อย่างจงใจ, โดยเจตนา, อย่างรอบคอบ",
        "He deliberately left his phone at home to rest.",
        "adv."
      ],
      [
        "delight",
        "n. ความยินดี, ความปีติ, สิ่งที่สร้างความสุข; v. ทำให้ยินดี, ทำให้พอใจ",
        "The children laughed with pure delight at the magic show.",
        "n., v."
      ],
      [
        "delighted",
        "ยินดีมาก, ดีใจ, ปลื้มใจ",
        "We are delighted to hear about your promotion.",
        "adj."
      ],
      [
        "delivery",
        "การจัดส่ง, การส่งของ, การคลอดบุตร",
        "Expect your package delivery tomorrow afternoon.",
        "n."
      ],
      [
        "demand",
        "n. ความต้องการ, คำเรียกร้อง; v. เรียกร้อง, ต้องการอย่างยิ่ง",
        "There is high demand for fresh organic vegetables.",
        "n., v."
      ],
      [
        "demonstrate",
        "สาธิต, แสดงให้เห็น, เดินขบวนประท้วง",
        "Let me demonstrate how this coffee machine works.",
        "v."
      ],
      [
        "deny",
        "ปฏิเสธ, ไม่ยอมรับ",
        "The suspect continued to deny taking the money.",
        "v."
      ],
      [
        "depressed",
        "ซึมเศร้า, หดหู่, ซบเซา",
        "He felt depressed after losing his job.",
        "adj."
      ],
      [
        "depressing",
        "น่าหดหู่, น่าเศร้าใจ",
        "Watching the evening news can be quite depressing.",
        "adj."
      ],
      [
        "depth",
        "ความลึก, ความลึกซึ้ง",
        "The swimming pool has a maximum depth of two meters.",
        "n."
      ],
      [
        "deserve",
        "สมควรได้รับ, คู่ควรกับ",
        "After working all week, you deserve a quiet weekend.",
        "v."
      ],
      [
        "desire",
        "n. ความปรารถนา, ความต้องการ; v. ปรารถนา, ต้องการอย่างยิ่ง",
        "She has a strong desire to learn new languages.",
        "n., v."
      ],
      [
        "desperate",
        "สิ้นหวัง, กระหายอย่างยิ่ง, ทำทุกวิถีทาง",
        "They were desperate for water after walking in the heat.",
        "adj."
      ],
      [
        "detailed",
        "ละเอียด, ครบถ้วน, มีรายละเอียดมาก",
        "The teacher gave detailed feedback on every essay.",
        "adj."
      ],
      [
        "detect",
        "ตรวจพบ, จับได้, สังเกตเห็น",
        "Smoke sensors can detect a fire within seconds.",
        "v."
      ],
      [
        "dig",
        "ขุด, ขุดค้น, แซะ",
        "Our dog loves to dig holes in the garden.",
        "v."
      ],
      [
        "discipline",
        "ระเบียบวินัย, การฝึกฝน, สาขาวิชา",
        "Learning a musical instrument takes time and discipline.",
        "n."
      ],
      [
        "dishonest",
        "ไม่ซื่อสัตย์, คดโกง",
        "Cheating on an exam is completely dishonest.",
        "adj."
      ],
      [
        "dismiss",
        "ไล่ออก, ปัดตก, เลิกสนใจ",
        "Do not dismiss his idea before hearing the full plan.",
        "v."
      ],
      [
        "display",
        "n. การจัดแสดง, หน้าจอแสดงผล; v. จัดแสดง, แสดงให้เห็น",
        "The bakery put fresh cakes on display near the window.",
        "n., v."
      ],
      [
        "distribute",
        "แจกจ่าย, กระจาย, จัดจำหน่าย",
        "Volunteers will distribute food and blankets to the villagers.",
        "v."
      ],
      [
        "distribution",
        "การแจกจ่าย, การกระจายสินค้า",
        "The company improved its distribution network across the country.",
        "n."
      ],
      [
        "district",
        "เขต, อำเภอ, ย่าน",
        "Our office is located in the central business district.",
        "n."
      ],
      [
        "division",
        "การแบ่งแยก, แผนก, การหาร",
        "She leads the marketing division at our firm.",
        "n."
      ],
      [
        "domestic",
        "ภายในประเทศ, ในบ้าน, เชื่อง",
        "Domestic flights depart from the first terminal.",
        "adj."
      ],
      [
        "dominate",
        "ครอบงำ, มีอิทธิพลเหนือ, ครองตำแหน่งเด่น",
        "Tall skyscrapers dominate the city skyline.",
        "v."
      ],
      [
        "downwards",
        "ลงข้างล่าง, มุ่งลงต่ำ",
        "Prices have started to move downwards this month.",
        "adv."
      ],
      [
        "dozen",
        "det. สิบสอง, หนึ่งโหล; n. โหล, จำนวนสิบสอง",
        "Please buy a dozen fresh eggs from the market.",
        "det., n."
      ],
      [
        "draft",
        "n. ฉบับร่าง, ลมโกรก; v. ร่าง, เกณฑ์",
        "I wrote a rough draft of the email this morning.",
        "n., v."
      ],
      [
        "drag",
        "ลาก, ดึง, ยืดเยื้อ",
        "Help me drag this heavy suitcase upstairs.",
        "v."
      ],
      [
        "dramatic",
        "น่าตื่นเต้น, รุนแรงฉับพลัน, เกี่ยวกับละคร",
        "There was a dramatic drop in temperature last night.",
        "adj."
      ],
      [
        "edit",
        "แก้ไข, ตรวจแก้, ตัดต่อ",
        "Remember to edit your article before publishing it online.",
        "v."
      ],
      [
        "edition",
        "ฉบับพิมพ์, รุ่น, ครั้งที่พิมพ์",
        "This dictionary is the latest edition with new words.",
        "n."
      ],
      [
        "efficient",
        "มีประสิทธิภาพ, ประหยัดเวลาและพลังงาน",
        "LED bulbs are much more efficient than older lamps.",
        "adj."
      ],
      [
        "elderly",
        "สูงอายุ, ชรา",
        "Please offer your seat to elderly passengers on the bus.",
        "adj."
      ],
      [
        "elect",
        "เลือกตั้ง, คัดเลือก",
        "Citizens will elect a new mayor next Sunday.",
        "v."
      ],
      [
        "elsewhere",
        "ที่อื่น, แห่งอื่น",
        "The cafe was full, so we ate elsewhere.",
        "adv."
      ],
      [
        "emerge",
        "ปรากฏขึ้น, โผล่ออกมา, เผยออกมา",
        "The sun began to emerge from behind dark clouds.",
        "v."
      ],
      [
        "emotional",
        "ทางอารมณ์, ซาบซึ้งใจ, อ่อนไหวง่าย",
        "Saying goodbye at the airport was an emotional moment.",
        "adj."
      ],
      [
        "emphasis",
        "การเน้นย้ำ, ความสำคัญเป็นพิเศษ",
        "Our school puts strong emphasis on reading and writing.",
        "n."
      ],
      [
        "emphasize",
        "เน้นย้ำ, ชี้ให้เห็นความสำคัญ",
        "The coach wanted to emphasize teamwork over individual scores.",
        "v."
      ],
      [
        "enable",
        "ทำให้สามารถ, เปิดโอกาสให้, เปิดใช้งาน",
        "This app will enable you to track daily expenses.",
        "v."
      ],
      [
        "encounter",
        "n. การพบเจอโดยบังเอิญ, การเผชิญหน้า; v. พบเจอ, เผชิญ",
        "We may encounter heavy traffic on the highway.",
        "n., v."
      ],
      [
        "engage",
        "มีส่วนร่วม, ดึงดูดความสนใจ, จ้างงาน",
        "Good teachers know how to engage every student.",
        "v."
      ],
      [
        "enhance",
        "ปรับปรุงให้ดีขึ้น, ส่งเสริม, เพิ่มพูน",
        "Fresh herbs can greatly enhance the flavor of soup.",
        "v."
      ],
      [
        "enquiry",
        "การสอบถาม, การไต่ถาม, การสอบสวน",
        "Thank you for your enquiry about our summer courses.",
        "n."
      ],
      [
        "ensure",
        "รับรอง, ทำให้แน่ใจ, ตรวจสอบให้มั่นใจ",
        "Lock the front door to ensure everyone stays safe.",
        "v."
      ],
      [
        "enthusiasm",
        "ความกระตือรือร้น, ความสนใจอย่างแรงกล้า",
        "Her enthusiasm for cooking inspired the whole family.",
        "n."
      ]
    ]
  },
  {
    "id": "ox-b2-3",
    "label": "B2 Words · 3 (enthusiastic–instance)",
    "deck": "Oxford · B2 · 3",
    "cards": [
      [
        "enthusiastic",
        "กระตือรือร้น, ตื่นเต้นสนใจ",
        "The audience gave an enthusiastic applause at the end.",
        "adj."
      ],
      [
        "entire",
        "ทั้งหมด, ทั้งสิ้น, เต็มทั้งชุด",
        "He spent the entire afternoon cleaning the garage.",
        "adj."
      ],
      [
        "entirely",
        "โดยสิ้นเชิง, ทั้งหมด, อย่างสมบูรณ์",
        "That decision is entirely up to you.",
        "adv."
      ],
      [
        "establish",
        "ก่อตั้ง, สถาปนา, พิสูจน์ให้แน่ชัด",
        "They plan to establish a community library this year.",
        "v."
      ],
      [
        "estate",
        "ที่ดินและทรัพย์สิน, อสังหาริมทรัพย์, มรดก",
        "She works as a real estate agent in Bangkok.",
        "n."
      ],
      [
        "estimate",
        "n. การประมาณการ, ราคาประเมิน; v. ประมาณ, กะ, คาดคะเน",
        "Can you estimate how long the repair will take?",
        "n., v."
      ],
      [
        "ethical",
        "มีจริยธรรม, ตามหลักศีลธรรม",
        "Doctors follow strict ethical rules to protect patient privacy.",
        "adj."
      ],
      [
        "evaluate",
        "ประเมินผล, ตัดสินคุณค่า",
        "Managers evaluate staff performance twice a year.",
        "v."
      ],
      [
        "evil",
        "adj. ชั่วร้าย, เลวทราม; n. ความชั่วร้าย, สิ่งเลวร้าย",
        "The fairy tale tells of a battle against evil.",
        "adj., n."
      ],
      [
        "examination",
        "การตรวจสอบ, การตรวจร่างกาย, การสอบ",
        "The doctor performed a quick physical examination.",
        "n."
      ],
      [
        "excuse",
        "n. ข้อแก้ตัว, ข้ออ้าง; v. ให้อภัย, ขออนุญาต, ยกเว้นให้",
        "Traffic is not a good excuse for arriving late.",
        "n., v."
      ],
      [
        "executive",
        "adj. เกี่ยวกับการบริหาร, ระดับผู้บริหาร; n. ผู้บริหาร, ฝ่ายบริหาร",
        "She became a senior executive at age thirty-five.",
        "adj., n."
      ],
      [
        "existence",
        "การมีอยู่, การดำรงอยู่, ชีวิตความเป็นอยู่",
        "Many people still doubt the existence of aliens.",
        "n."
      ],
      [
        "expectation",
        "ความคาดหวัง, การคาดการณ์",
        "The movie was much better than my expectation.",
        "n."
      ],
      [
        "expense",
        "ค่าใช้จ่าย, รายจ่าย, ความสิ้นเปลือง",
        "Buying a car is a huge expense for students.",
        "n."
      ],
      [
        "exploration",
        "การสำรวจ, การค้นคว้า",
        "Space exploration has led to many useful inventions.",
        "n."
      ],
      [
        "expose",
        "เปิดเผย, เปิดโปง, ทำให้สัมผัสกับ",
        "Do not expose wooden furniture to direct sunlight.",
        "v."
      ],
      [
        "extend",
        "ขยาย, ต่ออายุ, ยื่นออกไป",
        "We decided to extend our vacation by two days.",
        "v."
      ],
      [
        "extent",
        "ขอบเขต, ระดับ, ขนาด",
        "We did not realize the full extent of the damage.",
        "n."
      ],
      [
        "external",
        "ภายนอก, จากภายนอก",
        "Store your photos on an external hard drive.",
        "adj."
      ],
      [
        "extraordinary",
        "พิเศษผิดธรรมดา, น่าทึ่ง, ยอดเยี่ยมมาก",
        "The young pianist has an extraordinary talent for music.",
        "adj."
      ],
      [
        "facility",
        "สิ่งอำนวยความสะดวก, สถานที่เฉพาะทาง, ความคล่องแคล่ว",
        "This sports facility includes a pool and a gym.",
        "n."
      ],
      [
        "failure",
        "ความล้มเหลว, การขัดข้อง, การละเลย",
        "Fear of failure should never stop you from trying.",
        "n."
      ],
      [
        "faith",
        "ความศรัทธา, ความเชื่อมั่น, ศาสนา",
        "I have complete faith in my teammates.",
        "n."
      ],
      [
        "fault",
        "ความผิดพลาด, ข้อบกพร่อง, ความรับผิดชอบในความผิด",
        "The broken window was not your fault.",
        "n."
      ],
      [
        "feather",
        "ขนนก",
        "I found a bright blue feather on the trail.",
        "n."
      ],
      [
        "fee",
        "ค่าธรรมเนียม, ค่าบริการ, ค่าเล่าเรียน",
        "The museum charges a small entry fee for adults.",
        "n."
      ],
      [
        "feedback",
        "ข้อเสนอแนะ, ความคิดเห็นสะท้อนกลับ",
        "Customer feedback helps us improve our service.",
        "n."
      ],
      [
        "fellow",
        "ที่เป็นเพื่อนร่วมงาน, ที่อยู่ในกลุ่มเดียวกัน",
        "Be polite to your fellow passengers on the train.",
        "adj."
      ],
      [
        "finance",
        "n. การเงิน, เงินทุน; v. จัดหาเงินทุนให้, ออกเงินให้",
        "She plans to study finance at university.",
        "n., v."
      ],
      [
        "finding",
        "ผลการค้นพบ, ข้อสรุปจากการวิจัย",
        "Each finding in the report is backed by clear data.",
        "n."
      ],
      [
        "firm",
        "บริษัท, ห้างหุ้นส่วน",
        "He joined a well-known law firm after graduating.",
        "n."
      ],
      [
        "flame",
        "เปลวไฟ, เปลวเพลิง",
        "A small candle flame lit up the dark room.",
        "n."
      ],
      [
        "flash",
        "n. แสงวาบ, แฟลชถ่ายรูป, ชั่วพริบตา; v. ส่องแสงวาบ, แวบผ่าน",
        "Please turn off your camera flash inside the museum.",
        "n., v."
      ],
      [
        "flexible",
        "ยืดหยุ่น, ปรับตัวได้ง่าย, ดัดงอได้",
        "Our company offers flexible working hours for parents.",
        "adj."
      ],
      [
        "float",
        "ลอย, ล่องลอย",
        "Empty plastic bottles float easily on water.",
        "v."
      ],
      [
        "folding",
        "ที่พับเก็บได้",
        "We brought two folding chairs for the picnic.",
        "adj."
      ],
      [
        "forgive",
        "ให้อภัย, ยกโทษให้",
        "Please forgive me for forgetting your birthday.",
        "v."
      ],
      [
        "former",
        "ก่อนหน้า, อดีต, แรก",
        "Our former teacher still visits us every year.",
        "adj."
      ],
      [
        "fortune",
        "โชคชะตา, โชคลาภ, ทรัพย์สมบัติมหาศาล",
        "Repairing that old car will cost a small fortune.",
        "n."
      ],
      [
        "found",
        "ก่อตั้ง, สถาปนา",
        "Two sisters decided to found a bakery in Chiang Mai.",
        "v."
      ],
      [
        "freedom",
        "อิสรภาพ, เสรีภาพ",
        "Everyone values the freedom to express their opinions.",
        "n."
      ],
      [
        "frequency",
        "ความถี่, ความบ่อย",
        "Bus frequency increases during the morning rush hour.",
        "n."
      ],
      [
        "fully",
        "อย่างเต็มที่, อย่างสมบูรณ์, ทั้งหมด",
        "Wait until the paint is fully dry before touching it.",
        "adv."
      ],
      [
        "fund",
        "n. กองทุน, เงินทุน; v. ให้เงินทุน, สนับสนุนเงิน",
        "Local businesses helped fund the new youth sports center.",
        "n., v."
      ],
      [
        "fundamental",
        "ขั้นพื้นฐาน, สำคัญที่สุด, แก่นแท้",
        "Reading and math are fundamental skills for every child.",
        "adj."
      ],
      [
        "funding",
        "เงินทุนสนับสนุน, การจัดหาเงินทุน",
        "The research project received government funding for three years.",
        "n."
      ],
      [
        "furthermore",
        "นอกจากนี้, ยิ่งไปกว่านั้น",
        "The hotel is clean, and furthermore, it is affordable.",
        "adv."
      ],
      [
        "gain",
        "n. ผลประโยชน์, การเพิ่มขึ้น; v. ได้รับ, เพิ่มขึ้น, ประสบผล",
        "Working abroad helps you gain valuable life experience.",
        "n., v."
      ],
      [
        "gang",
        "แก๊ง, กลุ่มคน, พวก",
        "Police broke up a gang of bike thieves.",
        "n."
      ],
      [
        "gender",
        "เพศ, เพศสภาพ",
        "The survey asks for your age and gender.",
        "n."
      ],
      [
        "generate",
        "สร้าง, ก่อให้เกิด, ผลิตกระแสไฟฟ้า",
        "Solar panels generate clean electricity from sunlight.",
        "v."
      ],
      [
        "genre",
        "ประเภท, แนว, หมวดหมู่ศิลปะ",
        "Mystery is my favorite genre of fiction.",
        "n."
      ],
      [
        "govern",
        "ปกครอง, บริหาร, ควบคุม",
        "Strict rules govern how personal data may be used.",
        "v."
      ],
      [
        "grab",
        "คว้า, จับฉวย, รีบหยิบ",
        "Let me grab my coat before we leave.",
        "v."
      ],
      [
        "gradually",
        "อย่างค่อยเป็นค่อยไป, ทีละน้อย",
        "The sky gradually turned orange as the sun set.",
        "adv."
      ],
      [
        "grand",
        "ยิ่งใหญ่, สง่างาม, หรูหรา",
        "Guests walked through the grand entrance of the palace.",
        "adj."
      ],
      [
        "grant",
        "n. เงินทุนช่วยเหลือ, การอนุญาต; v. อนุญาต, มอบให้, ยินยอม",
        "She won a research grant to study marine biology.",
        "n., v."
      ],
      [
        "guarantee",
        "n. การรับประกัน, ใบรับประกัน; v. รับประกัน, รับรอง",
        "This washing machine comes with a two-year guarantee.",
        "n., v."
      ],
      [
        "handle",
        "n. ด้ามจับ, หูจับ, มือจับ; v. จัดการ, รับมือ, จับต้อง",
        "Stay calm so you can handle the problem well.",
        "n., v."
      ],
      [
        "harm",
        "n. อันตราย, ความเสียหาย, ผลร้าย; v. ทำร้าย, ก่ออันตราย",
        "Too much sugar can cause serious harm to your teeth.",
        "n., v."
      ],
      [
        "harmful",
        "เป็นอันตราย, มีพิษภัย, ก่อความเสียหาย",
        "Loud noise can be harmful to your hearing.",
        "adj."
      ],
      [
        "hearing",
        "การได้ยิน, การไต่สวน, การรับฟังความเห็น",
        "Loud music at concerts can damage your hearing.",
        "n."
      ],
      [
        "heaven",
        "สวรรค์, ท้องฟ้า",
        "Lying on a quiet beach felt like heaven.",
        "n."
      ],
      [
        "heel",
        "ส้นเท้า, ส้นรองเท้า",
        "My left heel hurts after walking in new shoes.",
        "n."
      ],
      [
        "hell",
        "นรก, สถานการณ์ที่เลวร้ายมาก",
        "Moving house in the pouring rain was pure hell.",
        "n."
      ],
      [
        "hesitate",
        "ลังเล, รีรอ, ไม่กล้าตัดสินใจ",
        "Please do not hesitate to call if you need help.",
        "v."
      ],
      [
        "hollow",
        "กลวง, โบ๋, ไร้ความจริงใจ",
        "Squirrels often hide nuts inside a hollow tree trunk.",
        "adj."
      ],
      [
        "holy",
        "ศักดิ์สิทธิ์, อันเป็นที่เคารพบูชา",
        "Pilgrims travel far to visit the holy temple.",
        "adj."
      ],
      [
        "honour",
        "n. เกียรติยศ, ความนับถือ; v. ให้เกียรติ, เคารพยกย่อง",
        "It is a great honour to accept this award.",
        "n., v."
      ],
      [
        "household",
        "ครัวเรือน, ครอบครัวในบ้านเดียวกัน",
        "Every household in the village separates plastic waste.",
        "n."
      ],
      [
        "housing",
        "ที่อยู่อาศัย, เคหะ",
        "Affordable housing is a top concern in big cities.",
        "n."
      ],
      [
        "humorous",
        "ตลกขบขัน, มีอารมณ์ขัน",
        "He wrote a humorous story about his camping trip.",
        "adj."
      ],
      [
        "humour",
        "อารมณ์ขัน, ความตลกขบขัน",
        "Her wonderful sense of humour brightens every meeting.",
        "n."
      ],
      [
        "hunting",
        "การล่าสัตว์, การออกตามหา",
        "Deer hunting is strictly banned in this national park.",
        "n."
      ],
      [
        "illustrate",
        "วาดภาพประกอบ, อธิบายด้วยตัวอย่าง",
        "Charts help illustrate the main point of your talk.",
        "v."
      ],
      [
        "illustration",
        "ภาพประกอบ, ตัวอย่างอธิบาย",
        "Every chapter begins with a charming watercolor illustration.",
        "n."
      ],
      [
        "imagination",
        "จินตนาการ, ความคิดสร้างสรรค์",
        "Children use their imagination when playing with simple toys.",
        "n."
      ],
      [
        "impatient",
        "ใจร้อน, ไม่อดทน, หงุดหงิดรอไม่ได้",
        "Drivers grew impatient while waiting in the long queue.",
        "adj."
      ],
      [
        "imply",
        "บอกเป็นนัย, มีความหมายโดยนัย",
        "Silence does not always imply that someone agrees.",
        "v."
      ],
      [
        "impose",
        "บังคับใช้, กำหนดให้ปฏิบัติ, รบกวน",
        "The city decided to impose fines on illegal parking.",
        "v."
      ],
      [
        "impress",
        "ทำให้ประทับใจ, ตรึงใจ",
        "She dressed neatly to impress the interview panel.",
        "v."
      ],
      [
        "impressed",
        "ประทับใจ, รู้สึกทึ่ง",
        "Everyone was impressed by how quickly he solved it.",
        "adj."
      ],
      [
        "inch",
        "หน่วยวัดความยาวหนึ่งนิ้ว, นิดเดียว",
        "Cut the ribbon one inch longer than the box.",
        "n."
      ],
      [
        "incident",
        "เหตุการณ์, อุบัติเหตุ, เรื่องที่เกิดขึ้น",
        "Police are investigating a minor incident near the station.",
        "n."
      ],
      [
        "income",
        "รายได้, เงินได้",
        "Many families rely on tourism as their main income.",
        "n."
      ],
      [
        "increasingly",
        "มากยิ่งขึ้นเรื่อยๆ, เพิ่มขึ้นตามลำดับ",
        "Remote work has become increasingly popular in recent years.",
        "adv."
      ],
      [
        "industrial",
        "เกี่ยวกับอุตสาหกรรม, เชิงอุตสาหกรรม",
        "The new factory sits in an industrial zone.",
        "adj."
      ],
      [
        "infection",
        "การติดเชื้อ, โรคติดเชื้อ",
        "Wash the cut carefully to prevent a skin infection.",
        "n."
      ],
      [
        "inform",
        "แจ้งให้ทราบ, บอกกล่าว, รายงาน",
        "Please inform us if your address changes.",
        "v."
      ],
      [
        "initial",
        "เริ่มต้น, ขั้นแรก, เบื้องต้น",
        "My initial impression of the town was very positive.",
        "adj."
      ],
      [
        "initially",
        "ในตอนแรก, เบื้องต้น, เดิมที",
        "Initially, I found the new software hard to use.",
        "adv."
      ],
      [
        "initiative",
        "ความคิดริเริ่ม, โครงการริเริ่ม",
        "Students launched a green initiative to reduce plastic waste.",
        "n."
      ],
      [
        "inner",
        "ภายใน, ด้านใน, อยู่ในจิตใจ",
        "Meditation helps many people find inner peace.",
        "adj."
      ],
      [
        "inquiry",
        "การสอบถาม, การไต่สวน, การสืบสวน",
        "We received an inquiry about booking the meeting room.",
        "n."
      ],
      [
        "insight",
        "ความเข้าใจอย่างลึกซึ้ง, ข้อมูลเชิงลึก",
        "Her talk offered real insight into customer habits.",
        "n."
      ],
      [
        "insist",
        "ยืนกราน, ยืนยันหนักแน่น, คะยั้นคะยอ",
        "I insist on paying for lunch today.",
        "v."
      ],
      [
        "inspire",
        "สร้างแรงบันดาลใจ, กระตุ้นให้เกิดความคิด",
        "Great coaches inspire players to believe in themselves.",
        "v."
      ],
      [
        "install",
        "ติดตั้ง, ลงโปรแกรม",
        "A technician will install our new air conditioner tomorrow.",
        "v."
      ],
      [
        "instance",
        "ตัวอย่าง, กรณี, เหตุการณ์เฉพาะครั้ง",
        "This is the second instance of delay this week.",
        "n."
      ]
    ]
  },
  {
    "id": "ox-b2-4",
    "label": "B2 Words · 4 (institute–phase)",
    "deck": "Oxford · B2 · 4",
    "cards": [
      [
        "institute",
        "สถาบัน, องค์กรเฉพาะทาง",
        "She teaches design at a local art institute.",
        "n."
      ],
      [
        "institution",
        "สถาบัน, องค์กรสำคัญ, ขนบธรรมเนียม",
        "Public trust keeps every democratic institution strong.",
        "n."
      ],
      [
        "insurance",
        "การประกันภัย, ประกันชีวิต, เงินประกัน",
        "Always buy travel insurance before flying abroad.",
        "n."
      ],
      [
        "intended",
        "ที่ตั้งใจไว้, ที่มุ่งหมายไว้",
        "The joke did not have the intended effect.",
        "adj."
      ],
      [
        "intense",
        "รุนแรง, เข้มข้น, จริงจังมาก",
        "Athletes go through intense training before the Olympics.",
        "adj."
      ],
      [
        "internal",
        "ภายใน, ภายในองค์กร, ภายในร่างกาย",
        "The company shared an internal memo with all staff.",
        "adj."
      ],
      [
        "interpret",
        "ตีความ, แปลความหมาย, แปลเป็นคำพูด",
        "Different readers may interpret the poem in different ways.",
        "v."
      ],
      [
        "interrupt",
        "ขัดจังหวะ, พูดแทรก, หยุดชะงัก",
        "Please do not interrupt while someone else is speaking.",
        "v."
      ],
      [
        "investigation",
        "การสืบสวน, การตรวจสอบค้นคว้า",
        "Police launched a full investigation into the theft.",
        "n."
      ],
      [
        "investment",
        "การลงทุน, เงินลงทุน",
        "Buying solar panels is a smart long-term investment.",
        "n."
      ],
      [
        "joy",
        "ความสุข, ความปีติยินดี",
        "Seeing old friends again brings me great joy.",
        "n."
      ],
      [
        "judgement",
        "การตัดสินใจ, วิจารณญาณ, คำพิพากษา",
        "Trust your own judgement when choosing a career.",
        "n."
      ],
      [
        "junior",
        "ระดับต้น, ตำแหน่งรอง, อายุน้อยกว่า",
        "He started as a junior designer five years ago.",
        "adj."
      ],
      [
        "justice",
        "ความยุติธรรม, กระบวนการยุติธรรม",
        "The victim's family demanded fair treatment and justice.",
        "n."
      ],
      [
        "justify",
        "ให้เหตุผลสนับสนุน, พิสูจน์ความถูกต้อง",
        "How can you justify spending so much on shoes?",
        "v."
      ],
      [
        "labour",
        "แรงงาน, การใช้แรงงาน, การเจ็บครรภ์คลอด",
        "Building the stone wall required hard physical labour.",
        "n."
      ],
      [
        "landscape",
        "ภูมิทัศน์, ทิวทัศน์, ภาพวาดทิวทัศน์",
        "Mountains and green valleys create a stunning landscape.",
        "n."
      ],
      [
        "largely",
        "ส่วนใหญ่, เป็นส่วนมาก, โดยหลัก",
        "The event's success was largely due to volunteers.",
        "adv."
      ],
      [
        "launch",
        "n. การเปิดตัว, การปล่อยจรวด; v. เปิดตัว, ปล่อยออกสู่ตลาด, ริเริ่ม",
        "The company will launch its new phone next month.",
        "n., v."
      ],
      [
        "leadership",
        "ภาวะผู้นำ, คณะผู้นำ",
        "Strong leadership helped the team survive hard times.",
        "n."
      ],
      [
        "league",
        "ลีกกีฬา, สมาพันธ์, ระดับเดียวกัน",
        "Our local football club plays in the top league.",
        "n."
      ],
      [
        "lean",
        "เอน, พิง, โน้มตัว",
        "Do not lean against the freshly painted wall.",
        "v."
      ],
      [
        "licence",
        "ใบอนุญาต, ใบขับขี่",
        "You need a valid driving licence to rent cars.",
        "n."
      ],
      [
        "limited",
        "จำกัด, มีอยู่น้อย, ไม่มาก",
        "Hurry up because tickets are available in limited numbers.",
        "adj."
      ],
      [
        "lively",
        "มีชีวิตชีวา, คึกคัก, ร่าเริง",
        "The night market is always lively on weekends.",
        "adj."
      ],
      [
        "load",
        "n. น้ำหนักบรรทุก, ภาระ; v. บรรทุก, ใส่ข้อมูล, โหลด",
        "Help me load these heavy boxes into the truck.",
        "n., v."
      ],
      [
        "loan",
        "เงินกู้, สินเชื่อ, การให้ยืม",
        "She took out a bank loan to start her shop.",
        "n."
      ],
      [
        "logical",
        "มีเหตุผล, ตามหลักตรรกะ",
        "Taking the train is the most logical choice today.",
        "adj."
      ],
      [
        "long-term",
        "adj. ระยะยาว; adv. ในระยะยาว",
        "Regular savings help build long-term financial security.",
        "adj., adv."
      ],
      [
        "loose",
        "หลวม, ไม่แน่น, หลุดลุ่ย",
        "One button on my shirt feels quite loose.",
        "adj."
      ],
      [
        "lord",
        "ขุนนาง, เจ้านาย, พระผู้เป็นเจ้า",
        "The old castle once belonged to a wealthy lord.",
        "n."
      ],
      [
        "lower",
        "ลดต่ำลง, หย่อนลง, ทำให้ลดลง",
        "Please lower your voice while inside the library.",
        "v."
      ],
      [
        "lung",
        "ปอด",
        "Doctors checked his heart and left lung carefully.",
        "n."
      ],
      [
        "maintain",
        "รักษาระดับ, บำรุงรักษา, ยืนยัน",
        "Drink plenty of water to maintain good energy.",
        "v."
      ],
      [
        "majority",
        "คนส่วนใหญ่, เสียงข้างมาก",
        "The vast majority of students voted for the trip.",
        "n."
      ],
      [
        "mass",
        "adj. จำนวนมาก, เป็นวงกว้าง; n. มวล, ก้อน, กลุ่มคนจำนวนมาก",
        "Social media quickly spreads news to a mass audience.",
        "adj., n."
      ],
      [
        "massive",
        "ใหญ่โตมโหฬาร, มหาศาล, หนักมาก",
        "A massive tree fell across the road last night.",
        "adj."
      ],
      [
        "master",
        "n. ผู้เชี่ยวชาญ, เจ้านาย, ปริญญาโท; v. เชี่ยวชาญ, ควบคุมให้ได้",
        "It takes years of practice to master a language.",
        "n., v."
      ],
      [
        "matching",
        "ที่เข้าชุดกัน, ที่เหมือนกัน",
        "The twins wore matching blue jackets to school.",
        "adj."
      ],
      [
        "maximum",
        "adj. สูงสุด, มากที่สุด; n. ค่าสูงสุด, ขีดสุด",
        "The elevator holds a maximum weight of eight hundred kilos.",
        "adj., n."
      ],
      [
        "means",
        "วิธีการ, ช่องทาง, ทุนทรัพย์",
        "Public buses are an affordable means of transport.",
        "n."
      ],
      [
        "measurement",
        "การวัด, ขนาดที่วัดได้, หน่วยวัด",
        "Take an accurate measurement before cutting the wood.",
        "n."
      ],
      [
        "melt",
        "ละลาย, หลอมละลาย, ใจอ่อน",
        "Ice cream starts to melt quickly in hot weather.",
        "v."
      ],
      [
        "military",
        "adj. เกี่ยวกับทหาร, ทางทหาร; n. กองทัพ, ฝ่ายทหาร",
        "Rescuers received help from local military helicopters.",
        "adj., n."
      ],
      [
        "mineral",
        "แร่ธาตุ, สารแร่",
        "Calcium is an essential mineral for strong bones.",
        "n."
      ],
      [
        "minimum",
        "adj. ต่ำสุด, น้อยที่สุด; n. ค่าต่ำสุด, จำนวนน้อยที่สุด",
        "You need a minimum score of seventy to pass.",
        "adj., n."
      ],
      [
        "minister",
        "รัฐมนตรี, นักบวช",
        "The health minister announced a new vaccination campaign.",
        "n."
      ],
      [
        "minor",
        "เล็กน้อย, ไม่ร้ายแรง, รอง",
        "She suffered only minor bruises in the fall.",
        "adj."
      ],
      [
        "minority",
        "ชนกลุ่มน้อย, ส่วนน้อย, เสียงข้างน้อย",
        "Only a small minority of voters opposed the plan.",
        "n."
      ],
      [
        "mission",
        "ภารกิจ, พันธกิจ, คณะผู้แทน",
        "Our main mission is to deliver aid safely.",
        "n."
      ],
      [
        "mixed",
        "ผสม, ปนเป, ทั้งดีและไม่ดี",
        "The new film received mixed reviews from audiences.",
        "adj."
      ],
      [
        "modify",
        "ดัดแปลง, ปรับเปลี่ยน, แก้ไขเล็กน้อย",
        "We may need to modify the schedule next week.",
        "v."
      ],
      [
        "monitor",
        "n. จอภาพ, เครื่องติดตามผล, ผู้เฝ้าสังเกต; v. เฝ้าสังเกต, ติดตามตรวจสอบ",
        "Nurses closely monitor the patient's heart rate.",
        "n., v."
      ],
      [
        "moral",
        "adj. ทางศีลธรรม, มีคุณธรรม; n. คติสอนใจ, ศีลธรรม",
        "Every fable teaches a clear moral lesson.",
        "adj., n."
      ],
      [
        "motor",
        "adj. ที่ใช้มอเตอร์, เกี่ยวกับการเคลื่อนไหว; n. มอเตอร์, เครื่องยนต์",
        "The quiet electric motor powers the ceiling fan.",
        "adj., n."
      ],
      [
        "mount",
        "ติดตั้งบนแท่น, เพิ่มสูงขึ้น, ขี่ขึ้นหลัง",
        "We used brackets to mount the TV on the wall.",
        "v."
      ],
      [
        "multiple",
        "หลากหลาย, หลายอย่าง, หลายเท่า",
        "You can pay using multiple payment methods here.",
        "adj."
      ],
      [
        "multiply",
        "คูณ, เพิ่มทวีคูณ, ขยายพันธุ์",
        "If you multiply six by seven, you get forty-two.",
        "v."
      ],
      [
        "mysterious",
        "ลึกลับ, น่าพิศวง, เป็นปริศนา",
        "A mysterious light appeared over the lake last night.",
        "adj."
      ],
      [
        "neat",
        "เรียบร้อย, เป็นระเบียบ, สะอาดตา",
        "Keep your desk neat so you can focus better.",
        "adj."
      ],
      [
        "nerve",
        "เส้นประสาท, ความกล้า, ความตื่นเต้นประหม่า",
        "Damage to a nerve in the arm caused pain.",
        "n."
      ],
      [
        "nevertheless",
        "อย่างไรก็ตาม, ถึงกระนั้นก็ตาม",
        "The hike was tiring; nevertheless, the view was worthwhile.",
        "adv."
      ],
      [
        "nightmare",
        "ฝันร้าย, เหตุการณ์เลวร้าย",
        "Losing my passport at the airport was a nightmare.",
        "n."
      ],
      [
        "notion",
        "แนวคิด, ความคิด, ความเชื่อ",
        "She rejected the notion that money buys happiness.",
        "n."
      ],
      [
        "numerous",
        "มากมาย, นับไม่ถ้วน, หลายครั้ง",
        "We received numerous calls about the lost dog.",
        "adj."
      ],
      [
        "obey",
        "เชื่อฟัง, ปฏิบัติตาม",
        "All drivers must obey the speed limit.",
        "v."
      ],
      [
        "objective",
        "adj. เป็นกลาง, ปราศจากอคติ; n. วัตถุประสงค์, เป้าหมาย",
        "Our main objective is to finish before Friday.",
        "adj., n."
      ],
      [
        "obligation",
        "ภาระผูกพัน, หน้าที่, ข้อบังคับ",
        "Parents have a legal obligation to care for children.",
        "n."
      ],
      [
        "observation",
        "การสังเกต, ข้อสังเกต, การเฝ้าดู",
        "Careful observation helps scientists spot small changes.",
        "n."
      ],
      [
        "observe",
        "สังเกตการณ์, เฝ้าดู, ปฏิบัติตาม",
        "Students went outside to observe the solar eclipse.",
        "v."
      ],
      [
        "obtain",
        "ได้รับ, หามาได้, ขอรับ",
        "You must obtain a permit before filming here.",
        "v."
      ],
      [
        "occasionally",
        "เป็นครั้งคราว, นานๆ ครั้ง, บางโอกาส",
        "We occasionally eat dinner at that Thai restaurant.",
        "adv."
      ],
      [
        "offence",
        "ความผิดทางกฎหมาย, การทำให้ขุ่นเคือง, ฝ่ายรุก",
        "Driving without a seatbelt is a traffic offence.",
        "n."
      ],
      [
        "offend",
        "ทำให้ขุ่นเคือง, ล่วงเกิน, ทำผิด",
        "I did not mean to offend anyone with my joke.",
        "v."
      ],
      [
        "offensive",
        "หยาบคาย, น่ารังเกียจ, เกี่ยวกับการโจมตี",
        "The website quickly removes offensive comments from users.",
        "adj."
      ],
      [
        "opening",
        "ช่องเปิด, การเปิดงาน, ตำแหน่งว่าง",
        "There is a job opening in our sales team.",
        "n."
      ],
      [
        "operate",
        "ปฏิบัติงาน, ใช้งานเครื่องจักร, ผ่าตัด",
        "Read the manual before trying to operate this saw.",
        "v."
      ],
      [
        "opponent",
        "คู่แข่ง, คู่ต่อสู้, ฝ่ายค้าน",
        "She shook hands with her opponent after the match.",
        "n."
      ],
      [
        "oppose",
        "คัดค้าน, ต่อต้าน, ไม่เห็นด้วย",
        "Many residents strongly oppose building a noisy highway nearby.",
        "v."
      ],
      [
        "opposed",
        "ที่คัดค้าน, ที่ตรงกันข้าม",
        "Most voters are opposed to raising local taxes.",
        "adj."
      ],
      [
        "opposition",
        "การคัดค้าน, ฝ่ายค้าน, คู่แข่ง",
        "The new parking fee faced strong public opposition.",
        "n."
      ],
      [
        "organ",
        "อวัยวะ, องค์กร, ออร์แกนดนตรี",
        "The heart is the hardest-working organ in your body.",
        "n."
      ],
      [
        "origin",
        "ต้นกำเนิด, จุดเริ่มต้น, เชื้อชาติ",
        "Historians traced the origin of this dish to southern China.",
        "n."
      ],
      [
        "otherwise",
        "มิฉะนั้น, นอกจากนั้น, ในอีกทางหนึ่ง",
        "Leave now, otherwise you will miss the last train.",
        "adv."
      ],
      [
        "outcome",
        "ผลลัพธ์, ผลที่ตามมา",
        "Everyone waited nervously for the outcome of the election.",
        "n."
      ],
      [
        "outer",
        "ด้านนอก, ชั้นนอก, ห่างจากศูนย์กลาง",
        "Peel off the dry outer skin of the onion.",
        "adj."
      ],
      [
        "outline",
        "n. โครงร่าง, เส้นรอบรูป, เค้าโครง; v. ร่างเค้าโครง, สรุปใจความ",
        "Always prepare a brief outline before writing your essay.",
        "n., v."
      ],
      [
        "overall",
        "adj. โดยรวม, ทั้งหมด; adv. โดยรวมแล้ว, โดยทั่วไป",
        "Overall, our family trip to Japan went very smoothly.",
        "adj., adv."
      ],
      [
        "owe",
        "เป็นหนี้, ติดค้าง, สำนึกในบุญคุณ",
        "I still owe my sister fifty baht for coffee.",
        "v."
      ],
      [
        "pace",
        "n. จังหวะความเร็ว, ก้าวเดิน; v. เดินกลับไปกลับมา, กำหนดจังหวะ",
        "Walk at a steady pace so you don't get tired.",
        "n., v."
      ],
      [
        "panel",
        "คณะผู้เชี่ยวชาญ, แผ่นไม้หรือกระจก, แผงควบคุม",
        "A panel of three judges picked the winning photo.",
        "n."
      ],
      [
        "parliament",
        "รัฐสภา, สภาผู้แทน",
        "Members of parliament debated the new education bill.",
        "n."
      ],
      [
        "participant",
        "ผู้เข้าร่วม, ผู้มีส่วนร่วม",
        "Every participant received a certificate at the end.",
        "n."
      ],
      [
        "partly",
        "บางส่วน, ส่วนหนึ่ง",
        "The delay was partly caused by heavy morning fog.",
        "adv."
      ],
      [
        "passage",
        "ทางเดิน, บทความตอนหนึ่ง, การเดินทางผ่าน",
        "Read the short passage below and answer two questions.",
        "n."
      ],
      [
        "pension",
        "เงินบำนาญ, เบี้ยยังชีพผู้สูงอายุ",
        "She receives a monthly pension after retiring from teaching.",
        "n."
      ],
      [
        "permanent",
        "ถาวร, ประจำ, ไม่เปลี่ยนแปลง",
        "He finally got a permanent job at the hospital.",
        "adj."
      ],
      [
        "permit",
        "n. ใบอนุญาต; v. อนุญาต, ยินยอมให้",
        "You need a parking permit to leave cars here.",
        "n., v."
      ],
      [
        "perspective",
        "มุมมอง, ทัศนคติ, การเขียนภาพแบบทัศนียภาพ",
        "Living abroad gave him a fresh perspective on life.",
        "n."
      ],
      [
        "phase",
        "ระยะ, ช่วงเวลา, ขั้นตอน",
        "The first phase of the project starts next Monday.",
        "n."
      ]
    ]
  },
  {
    "id": "ox-b2-5",
    "label": "B2 Words · 5 (phenomenon–shot)",
    "deck": "Oxford · B2 · 5",
    "cards": [
      [
        "phenomenon",
        "ปรากฏการณ์, สิ่งมหัศจรรย์",
        "Northern lights are a breathtaking natural phenomenon.",
        "n."
      ],
      [
        "philosophy",
        "ปรัชญา, หลักการดำเนินชีวิต",
        "Her life philosophy is to stay kind and curious.",
        "n."
      ],
      [
        "pile",
        "n. กอง, ตั้ง; v. กองสุม, ทับถม, กรูกัน",
        "A tall pile of unread books sat beside his bed.",
        "n., v."
      ],
      [
        "pitch",
        "สนามกีฬา, ระดับเสียงสูงต่ำ, การนำเสนอขายงาน",
        "Players ran onto the muddy football pitch.",
        "n."
      ],
      [
        "plain",
        "เรียบง่าย, ธรรมดา, ชัดเจน",
        "He prefers plain yogurt with fresh sliced fruit.",
        "adj."
      ],
      [
        "pointed",
        "ปลายแหลม, แหลมคม, ตรงประเด็น",
        "Be careful with the pointed tip of those scissors.",
        "adj."
      ],
      [
        "popularity",
        "ความนิยม, ชื่อเสียงเป็นที่ชื่นชอบ",
        "Street food has grown in popularity among tourists.",
        "n."
      ],
      [
        "pose",
        "วางท่าถ่ายรูป, ตั้งประเด็น, ก่อให้เกิด",
        "Tourists love to pose in front of the temple.",
        "v."
      ],
      [
        "possess",
        "ครอบครอง, เป็นเจ้าของ, มีคุณสมบัติ",
        "Great leaders often possess patience and clear vision.",
        "v."
      ],
      [
        "potential",
        "adj. ที่เป็นไปได้, ที่มีศักยภาพ; n. ศักยภาพ, ความเป็นไปได้",
        "Every child has the potential to learn and grow.",
        "adj., n."
      ],
      [
        "praise",
        "n. คำชมเชย, การยกย่อง; v. ชมเชย, สรรเสริญ",
        "The manager was quick to praise the team's effort.",
        "n., v."
      ],
      [
        "pregnant",
        "ตั้งครรภ์, ท้อง",
        "My sister is six months pregnant with her first baby.",
        "adj."
      ],
      [
        "preparation",
        "การเตรียมตัว, การจัดเตรียม",
        "Good preparation helps reduce stress before an exam.",
        "n."
      ],
      [
        "presence",
        "การปรากฏตัว, การมีอยู่, บุคลิกภาพน่าเกรงขาม",
        "Your presence at the wedding meant everything to us.",
        "n."
      ],
      [
        "preserve",
        "อนุรักษ์, รักษาไว้, ถนอมอาหาร",
        "Salt has long been used to preserve fish and meat.",
        "v."
      ],
      [
        "prime",
        "สำคัญที่สุด, ชั้นดี, หลัก",
        "The cafe sits in a prime location near the beach.",
        "adj."
      ],
      [
        "principle",
        "หลักการ, กฎเกณฑ์, ศีลธรรมประจำใจ",
        "I refuse to lie as a matter of principle.",
        "n."
      ],
      [
        "priority",
        "ลำดับความสำคัญ, สิ่งสำคัญอันดับแรก",
        "Safety is always our top priority at work.",
        "n."
      ],
      [
        "privacy",
        "ความเป็นส่วนตัว, การอยู่ตามลำพัง",
        "Close the curtains if you want a little privacy.",
        "n."
      ],
      [
        "procedure",
        "ขั้นตอน, ระเบียบปฏิบัติ, การผ่าตัด",
        "Please follow the standard safety procedure during the drill.",
        "n."
      ],
      [
        "proof",
        "หลักฐานพิสูจน์, ข้อพิสูจน์",
        "You must show proof of identity at the gate.",
        "n."
      ],
      [
        "proposal",
        "ข้อเสนอ, โครงร่างเสนอโครงการ, การขอแต่งงาน",
        "The board liked our proposal for flexible Fridays.",
        "n."
      ],
      [
        "propose",
        "เสนอ, เสนอชื่อ, ขอแต่งงาน",
        "I would like to propose a simpler plan.",
        "v."
      ],
      [
        "prospect",
        "โอกาสในอนาคต, แนวโน้ม, ความคาดหวัง",
        "She felt excited about the prospect of living abroad.",
        "n."
      ],
      [
        "protection",
        "การคุ้มครอง, การป้องกัน, สิ่งป้องกัน",
        "Wear sunscreen for daily protection against strong sunlight.",
        "n."
      ],
      [
        "psychologist",
        "นักจิตวิทยา",
        "She spoke to a psychologist about managing work stress.",
        "n."
      ],
      [
        "psychology",
        "จิตวิทยา, สภาพจิตใจ",
        "He is studying child psychology at university.",
        "n."
      ],
      [
        "publication",
        "การตีพิมพ์, สิ่งพิมพ์, หนังสือที่ออกเผยแพร่",
        "The magazine stopped print publication last month.",
        "n."
      ],
      [
        "pupil",
        "นักเรียน, รูม่านตา",
        "Every pupil in the class received a workbook.",
        "n."
      ],
      [
        "purchase",
        "n. การซื้อ, สิ่งที่ซื้อมา; v. ซื้อ, จัดซื้อ",
        "Keep the receipt as proof of your purchase.",
        "n., v."
      ],
      [
        "pure",
        "บริสุทธิ์, แท้, ล้วนๆ",
        "This bottle contains pure honey with no added sugar.",
        "adj."
      ],
      [
        "pursue",
        "ไล่ตาม, มุ่งมั่นทำตาม, ศึกษาต่อ",
        "She moved to London to pursue a career in fashion.",
        "v."
      ],
      [
        "rank",
        "n. อันดับ, ยศตำแหน่ง; v. จัดอันดับ, อยู่ในอันดับ",
        "He earned the highest rank in the military academy.",
        "n., v."
      ],
      [
        "rapid",
        "รวดเร็ว, ฉับไว",
        "The city saw rapid growth over the past decade.",
        "adj."
      ],
      [
        "rapidly",
        "อย่างรวดเร็ว, อย่างฉับไว",
        "Online shopping grew rapidly during the past few years.",
        "adv."
      ],
      [
        "raw",
        "ดิบ, ยังไม่แปรรูป, แสบถลอก",
        "Raw carrots make a crunchy and healthy afternoon snack.",
        "adj."
      ],
      [
        "realistic",
        "สมจริง, เป็นไปได้จริง, มองตามความเป็นจริง",
        "Set realistic goals so you do not burn out.",
        "adj."
      ],
      [
        "reasonable",
        "มีเหตุผล, สมเหตุสมผล, ราคาย่อมเยา",
        "The repair shop charged a very reasonable price.",
        "adj."
      ],
      [
        "recall",
        "นึกออก, จำได้, เรียกคืนสินค้า",
        "I cannot recall where I left my keys.",
        "v."
      ],
      [
        "recover",
        "ฟื้นตัว, หายป่วย, กู้คืน",
        "Take plenty of rest to recover from your cold.",
        "v."
      ],
      [
        "reduction",
        "การลดลง, ส่วนลด",
        "Switching to LED lights led to a big reduction in bills.",
        "n."
      ],
      [
        "regard",
        "n. ความเคารพนับถือ, ความคำนึงถึง; v. มองว่า, ถือว่า, พิจารณา",
        "Many colleagues regard her as an inspiring mentor.",
        "n., v."
      ],
      [
        "regional",
        "ระดับภูมิภาค, ประจำท้องถิ่น",
        "Each regional office adapts the menu for local tastes.",
        "adj."
      ],
      [
        "register",
        "n. ทะเบียน, บัญชีรายชื่อ, น้ำเสียง; v. ลงทะเบียน, จดทะเบียน, แสดงให้เห็น",
        "Please register online before Friday to reserve a seat.",
        "n., v."
      ],
      [
        "regret",
        "n. ความเสียใจ, ความเสียดาย; v. เสียใจ, เสียดาย",
        "I never regret spending extra time with my family.",
        "n., v."
      ],
      [
        "regulation",
        "กฎระเบียบ, ข้อบังคับ, การควบคุม",
        "A strict safety regulation applies to every rider.",
        "n."
      ],
      [
        "relatively",
        "ค่อนข้าง, โดยเปรียบเทียบ",
        "The exam was relatively easy compared with last year.",
        "adv."
      ],
      [
        "relevant",
        "ที่เกี่ยวข้อง, ตรงประเด็น, เหมาะสม",
        "Only include relevant experience on your resume.",
        "adj."
      ],
      [
        "relief",
        "ความโล่งใจ, การบรรเทาทุกข์, การลดหย่อน",
        "What a relief to hear that everyone arrived safely!",
        "n."
      ],
      [
        "rely",
        "พึ่งพา, ไว้วางใจ, อาศัย",
        "Many island villages rely on solar power.",
        "v."
      ],
      [
        "remark",
        "n. คำพูด, ข้อสังเกต; v. กล่าว, ตั้งข้อสังเกต",
        "His kind remark made everyone at the table smile.",
        "n., v."
      ],
      [
        "representative",
        "adj. ที่เป็นตัวแทน, ที่สะท้อนกลุ่มตัวอย่าง; n. ตัวแทน, ผู้แทน",
        "Speak with a customer service representative about your refund.",
        "adj., n."
      ],
      [
        "reputation",
        "ชื่อเสียง, กิตติศัพท์",
        "This bakery has a great reputation for fresh bread.",
        "n."
      ],
      [
        "requirement",
        "ข้อกำหนด, คุณสมบัติที่ต้องการ, สิ่งจำเป็น",
        "A passport is a basic requirement for international travel.",
        "n."
      ],
      [
        "rescue",
        "n. การช่วยเหลือ, การกู้ภัย; v. ช่วยชีวิต, กู้ภัย",
        "Firefighters arrived quickly to rescue the trapped kitten.",
        "n., v."
      ],
      [
        "reserve",
        "n. ของสำรอง, เขตอนุรักษ์, ความสงวนท่าที; v. จอง, สำรองไว้",
        "Should we reserve a table for dinner tonight?",
        "n., v."
      ],
      [
        "resident",
        "adj. ที่อาศัยอยู่ประจำ; n. ผู้อยู่อาศัย, ชาวบ้าน",
        "Every local resident received a free recycling bin.",
        "adj., n."
      ],
      [
        "resist",
        "ต่อต้าน, ห้ามใจ, ทนทานต่อ",
        "I could not resist buying another warm croissant.",
        "v."
      ],
      [
        "resolve",
        "แก้ไขปัญหา, คลี่คลาย, ตั้งใจแน่วแน่",
        "Both sides met today to resolve the disagreement.",
        "v."
      ],
      [
        "resort",
        "สถานตากอากาศ, ที่พักตากอากาศ, ทางออกสุดท้าย",
        "They spent three relaxing nights at a beach resort.",
        "n."
      ],
      [
        "retain",
        "เก็บรักษาไว้, คงไว้, จดจำไว้",
        "Clay soil helps plants retain moisture longer.",
        "v."
      ],
      [
        "reveal",
        "เปิดเผย, เผยให้เห็น",
        "Do not reveal the surprise party before Saturday.",
        "v."
      ],
      [
        "revolution",
        "การปฏิวัติ, การเปลี่ยนแปลงครั้งใหญ่, การหมุนรอบ",
        "Smartphones brought a quiet revolution in daily communication.",
        "n."
      ],
      [
        "reward",
        "n. รางวัล, ค่าตอบแทน, ผลตอบแทน; v. ให้รางวัล, ตอบแทน",
        "The owner offered a cash reward for the lost ring.",
        "n., v."
      ],
      [
        "rhythm",
        "จังหวะ, ท่วงทำนอง",
        "The crowd clapped along to the steady drum rhythm.",
        "n."
      ],
      [
        "rid",
        "กำจัด, ขจัด, ทำให้พ้นจาก",
        "It is hard to rid the garden of weeds.",
        "v."
      ],
      [
        "root",
        "รากไม้, ต้นตอ, รากเหง้า",
        "Poor sleep is often the root of daytime tiredness.",
        "n."
      ],
      [
        "rub",
        "ถู, ขัด, นวดคลึง",
        "Try not to rub your eyes when they itch.",
        "v."
      ],
      [
        "rubber",
        "adj. ที่ทำจากยาง; n. ยาง, ยางลบ",
        "Wear rubber gloves while washing dishes with strong soap.",
        "adj., n."
      ],
      [
        "rural",
        "ในชนบท, บ้านนอก, เกี่ยวกับท้องถิ่นห่างไกล",
        "Medical clinics are badly needed in rural villages.",
        "adj."
      ],
      [
        "rush",
        "n. ความเร่งรีบ, ช่วงเวลาเร่งด่วน; v. เร่งรีบ, พุ่งไปอย่างเร็ว",
        "Take your time; there is no need to rush.",
        "n., v."
      ],
      [
        "satellite",
        "ดาวเทียม, ดวงจันทร์บริวาร",
        "Weather maps rely on images from an orbiting satellite.",
        "n."
      ],
      [
        "satisfied",
        "พอใจ, พึงพอใจ",
        "Most guests felt satisfied with the hotel breakfast.",
        "adj."
      ],
      [
        "satisfy",
        "ทำให้พอใจ, ตอบสนองความต้องการ, ผ่านเงื่อนไข",
        "A warm bowl of soup will satisfy your hunger.",
        "v."
      ],
      [
        "saving",
        "การประหยัด, เงินออม, การช่วยชีวิต",
        "Using public transit leads to a big saving on fuel.",
        "n."
      ],
      [
        "scale",
        "ขนาด, มาตราส่วน, เครื่องชั่ง",
        "Check the scale on the map before planning distances.",
        "n."
      ],
      [
        "scheme",
        "แผนการ, โครงการ, แผนร้าย",
        "The town started a bike-sharing scheme for commuters.",
        "n."
      ],
      [
        "scream",
        "n. เสียงกรีดร้อง; v. กรีดร้อง, ตะโกนเสียงแหลม",
        "A loud scream echoed from the roller coaster.",
        "n., v."
      ],
      [
        "sector",
        "ภาคส่วน, ภาคธุรกิจ, เขตพื้นที่",
        "The tourism sector employs thousands of local workers.",
        "n."
      ],
      [
        "secure",
        "adj. ปลอดภัย, มั่นคง; v. ทำให้ปลอดภัย, ผูกให้แน่น, ได้มา",
        "Make sure the garden gate is secure before leaving.",
        "adj., v."
      ],
      [
        "seek",
        "ค้นหา, แสวงหา, ขอความช่วยเหลือ",
        "Hikers should seek shelter quickly during a thunderstorm.",
        "v."
      ],
      [
        "select",
        "เลือก, คัดสรร",
        "Please select your preferred seat on the screen.",
        "v."
      ],
      [
        "selection",
        "การคัดเลือก, ของที่คัดสรรไว้, ตัวเลือกหลากหลาย",
        "This cafe offers a wide selection of herbal teas.",
        "n."
      ],
      [
        "self",
        "ตัวตน, ตนเอง",
        "Writing a journal helps you understand your inner self.",
        "n."
      ],
      [
        "senior",
        "อาวุโส, ระดับสูง, สูงวัย",
        "She was promoted to senior editor last month.",
        "adj."
      ],
      [
        "sensitive",
        "อ่อนไหว, ละเอียดอ่อน, ไวต่อสิ่งเร้า",
        "Choose a gentle soap if you have sensitive skin.",
        "adj."
      ],
      [
        "sequence",
        "ลำดับ, ความต่อเนื่อง, ฉากต่อเนื่อง",
        "Follow the steps in the exact sequence shown below.",
        "n."
      ],
      [
        "session",
        "ช่วงเวลาทำกิจกรรม, คาบเรียน, การประชุม",
        "Our yoga session starts at seven every morning.",
        "n."
      ],
      [
        "settle",
        "ตั้งรกราก, ยุติข้อพิพาท, สงบลง",
        "Wait for the dust to settle before opening windows.",
        "v."
      ],
      [
        "severe",
        "รุนแรง, สาหัส, เข้มงวด",
        "Flights were cancelled due to severe winter storms.",
        "adj."
      ],
      [
        "shade",
        "ร่มเงา, เฉดสี, โป๊ะโคมไฟ",
        "Let us sit in the shade under that big tree.",
        "n."
      ],
      [
        "shadow",
        "เงา, ความมืดสลัว",
        "Late afternoon sun cast a long shadow across the yard.",
        "n."
      ],
      [
        "shallow",
        "ตื้น, ผิวเผิน",
        "Young children can play safely in the shallow pool.",
        "adj."
      ],
      [
        "shame",
        "ความอับอาย, เรื่องน่าเสียดาย",
        "What a shame that it rained during your picnic!",
        "n."
      ],
      [
        "shelter",
        "n. ที่พักพิง, ที่หลบภัย; v. หลบภัย, ให้ที่พักพิง",
        "We ran into a doorway to shelter from rain.",
        "n., v."
      ],
      [
        "shock",
        "n. ความตกใจอย่างแรง, อาการตกใจสุดขีด, ไฟฟ้าดูด; v. ทำให้ตกใจ, ทำให้สะเทือนใจ",
        "The sudden price increase came as a big shock.",
        "n., v."
      ],
      [
        "shocked",
        "ตกใจมาก, ตะลึง, สะเทือนใจ",
        "Neighbors were shocked to hear the news.",
        "adj."
      ],
      [
        "shooting",
        "การยิงปืน, เหตุยิงกัน, การถ่ายทำภาพยนตร์",
        "The shooting of the movie took place in Chiang Mai.",
        "n."
      ],
      [
        "shot",
        "การยิง, ภาพถ่าย, โอกาสลอง",
        "The photographer captured a great shot of the sunset.",
        "n."
      ]
    ]
  },
  {
    "id": "ox-b2-6",
    "label": "B2 Words · 6 (significant–zone)",
    "deck": "Oxford · B2 · 6",
    "cards": [
      [
        "significant",
        "สำคัญ, มีนัยสำคัญ, มากพอสมควร",
        "Eating more vegetables brings significant health benefits.",
        "adj."
      ],
      [
        "significantly",
        "อย่างมีนัยสำคัญ, อย่างเห็นได้ชัด, มากทีเดียว",
        "Fuel prices dropped significantly over the past month.",
        "adv."
      ],
      [
        "silence",
        "ความเงียบ, ความสงบเงียบ",
        "Complete silence filled the hall as the play began.",
        "n."
      ],
      [
        "silk",
        "ผ้าไหม, เส้นไหม",
        "Thailand is famous worldwide for handwoven silk.",
        "n."
      ],
      [
        "sincere",
        "จริงใจ, ใจจริง, ซื่อสัตย์",
        "Please accept my sincere apologies for the mistake.",
        "adj."
      ],
      [
        "slide",
        "n. กระดานลื่น, ภาพสไลด์, การลื่นไถล; v. ลื่นไถล, เลื่อน",
        "Children lined up to go down the park slide.",
        "n., v."
      ],
      [
        "slight",
        "เล็กน้อย, บางเบา, นิดหน่อย",
        "There is a slight chance of rain later today.",
        "adj."
      ],
      [
        "slip",
        "ลื่นไถล, หลุดมือ, แอบยื่น",
        "Be careful not to slip on the wet tiles.",
        "v."
      ],
      [
        "slope",
        "n. ทางลาด, ความลาดชัน, เนินเขา; v. ลาดเอียง, เทเอียง",
        "The house stands on a gentle green slope.",
        "n., v."
      ],
      [
        "solar",
        "เกี่ยวกับดวงอาทิตย์, พลังงานแสงอาทิตย์",
        "Our roof now has twelve new solar panels.",
        "adj."
      ],
      [
        "somewhat",
        "ค่อนข้าง, อยู่บ้าง, ในระดับหนึ่ง",
        "The movie was somewhat longer than I expected.",
        "adv."
      ],
      [
        "soul",
        "จิตวิญญาณ, จิตใจ, แก่นแท้",
        "Listening to music always feeds my soul.",
        "n."
      ],
      [
        "specialist",
        "adj. เฉพาะทาง; n. ผู้เชี่ยวชาญเฉพาะทาง",
        "The doctor referred me to a skin specialist.",
        "adj., n."
      ],
      [
        "species",
        "สายพันธุ์, ชนิดของสิ่งมีชีวิต",
        "Many rare bird species live in this forest.",
        "n."
      ],
      [
        "spiritual",
        "ทางจิตวิญญาณ, ทางจิตใจ, เกี่ยวกับศาสนา",
        "Many visitors seek spiritual calm at mountain temples.",
        "adj."
      ],
      [
        "split",
        "n. รอยแยก, การแบ่งแยก; v. แยกออก, แบ่งปัน, แตกออก",
        "Let us split the restaurant bill evenly.",
        "n., v."
      ],
      [
        "sponsor",
        "n. ผู้สนับสนุน, เจ้าภาพออกเงิน; v. สนับสนุนเงินทุน, เป็นเจ้าภาพ",
        "Local cafes helped sponsor the school charity run.",
        "n., v."
      ],
      [
        "stable",
        "มั่นคง, เสถียร, สม่ำเสมอ",
        "Make sure the ladder feels stable before climbing up.",
        "adj."
      ],
      [
        "stare",
        "จ้องมอง, จ้องเขม็ง",
        "It is impolite to stare at strangers.",
        "v."
      ],
      [
        "status",
        "สถานะ, ฐานะทางสังคม, สถานการณ์ปัจจุบัน",
        "You can check your order status online anytime.",
        "n."
      ],
      [
        "steady",
        "มั่นคง, สม่ำเสมอ, นิ่ง",
        "Hold the camera steady while taking the photo.",
        "adj."
      ],
      [
        "steel",
        "เหล็กกล้า",
        "Modern bridges are built from strong steel beams.",
        "n."
      ],
      [
        "steep",
        "สูงชัน, ลาดชันมาก, แพงเกินไป",
        "The hikers climbed a steep path up the hill.",
        "adj."
      ],
      [
        "sticky",
        "เหนียว, เหนียวหนึบ, ยุ่งยาก",
        "My hands got sticky after eating sweet mango.",
        "adj."
      ],
      [
        "stock",
        "สินค้าคงคลัง, หุ้น, น้ำซุปต้มกระดูก",
        "Sorry, that shoe size is currently out of stock.",
        "n."
      ],
      [
        "stream",
        "ลำธาร, กระแส, สายน้ำ",
        "Cold clear water flowed down the mountain stream.",
        "n."
      ],
      [
        "stretch",
        "n. การยืดเหยียด, ช่วงระยะ; v. ยืด, เหยียดตัว, ขยายออก",
        "Remember to stretch your legs after a long flight.",
        "n., v."
      ],
      [
        "strict",
        "เข้มงวด, เคร่งครัด, แน่นอนตายตัว",
        "Our library has a strict rule against loud talking.",
        "adj."
      ],
      [
        "strike",
        "n. การนัดหยุดงาน, การโจมตี, การตี; v. ตี, กระทบ, นัดหยุดงาน",
        "Bus drivers held a one-day strike over pay.",
        "n., v."
      ],
      [
        "struggle",
        "n. การดิ้นรน, ความยากลำบาก, การต่อสู้; v. ดิ้นรน, ต่อสู้, พยายามอย่างหนัก",
        "Many small shops struggle to compete with giant malls.",
        "n., v."
      ],
      [
        "submit",
        "ส่งมอบ, ยื่นเสนอ, ยอมจำนน",
        "Please submit your application form before Friday afternoon.",
        "v."
      ],
      [
        "sum",
        "n. ผลรวม, จำนวนเงิน; v. รวมยอด, สรุปความ",
        "She paid a large sum of money for repairs.",
        "n., v."
      ],
      [
        "surgery",
        "การผ่าตัด, ศัลยกรรม, คลินิกแพทย์",
        "He recovered quickly after minor knee surgery.",
        "n."
      ],
      [
        "surround",
        "ล้อมรอบ, ห้อมล้อม",
        "Tall pine trees surround the quiet wooden cabin.",
        "v."
      ],
      [
        "surrounding",
        "โดยรอบ, แวดล้อม, ใกล้เคียง",
        "Flooding affected the town and all surrounding villages.",
        "adj."
      ],
      [
        "suspect",
        "n. ผู้ต้องสงสัย; v. สงสัย, คาดว่า",
        "Police questioned the main suspect for three hours.",
        "n., v."
      ],
      [
        "swear",
        "สาบาน, สบถ, พูดคำหยาบ",
        "Try not to swear when you drop something heavy.",
        "v."
      ],
      [
        "sweep",
        "กวาด, พัดพา, กวาดล้าง",
        "I sweep the kitchen floor every evening.",
        "v."
      ],
      [
        "sympathy",
        "ความเห็นใจ, ความสงสาร, การแสดงความเสียใจ",
        "We sent flowers to show sympathy for their loss.",
        "n."
      ],
      [
        "tale",
        "นิทาน, เรื่องเล่า",
        "Grandma told us a funny tale before bedtime.",
        "n."
      ],
      [
        "tank",
        "ถังเก็บน้ำหรือน้ำมัน, ตู้ปลา, รถถัง",
        "Let us stop to fill up the gas tank.",
        "n."
      ],
      [
        "tear",
        "n. น้ำตา, รอยฉีกขาด; v. ฉีก, ขาด, พุ่งออกไป",
        "Be gentle so you do not tear the wrapping paper.",
        "n., v."
      ],
      [
        "temporary",
        "ชั่วคราว, ไม่ถาวร",
        "She found a temporary job for the summer holidays.",
        "adj."
      ],
      [
        "therapy",
        "การบำบัด, การรักษาโรค",
        "Physical therapy helped him walk comfortably again.",
        "n."
      ],
      [
        "threat",
        "ภัยคุกคาม, คำขู่",
        "Plastic pollution poses a serious threat to sea turtles.",
        "n."
      ],
      [
        "threaten",
        "ข่มขู่, คุกคาม, ทำท่าว่าจะเกิด",
        "Dark clouds threaten to ruin our outdoor picnic.",
        "v."
      ],
      [
        "thus",
        "ดังนั้น, ด้วยเหตุนี้, เช่นนี้",
        "The bridge closed; thus, buses took a longer route.",
        "adv."
      ],
      [
        "tone",
        "น้ำเสียง, ระดับสี, เสียงสัญญาณ",
        "Her calm tone helped relax the nervous patient.",
        "n."
      ],
      [
        "tough",
        "ยากลำบาก, เหนียว, อดทนแข็งแกร่ง",
        "Choosing between two good job offers is tough.",
        "adj."
      ],
      [
        "transfer",
        "n. การโอน, การย้าย, การต่อรถ; v. โอน, ย้าย, ถ่ายโอน",
        "You can transfer the money directly from your phone.",
        "n., v."
      ],
      [
        "transform",
        "เปลี่ยนแปลงโฉม, แปลงสภาพ, ปฏิรูป",
        "Fresh paint can completely transform a dull room.",
        "v."
      ],
      [
        "transition",
        "การเปลี่ยนผ่าน, ช่วงเปลี่ยนถ่าย",
        "The transition from school to work takes time.",
        "n."
      ],
      [
        "trial",
        "การพิจารณาคดี, การทดลองใช้, บททดสอบ",
        "This streaming app offers a free seven-day trial.",
        "n."
      ],
      [
        "tropical",
        "เขตร้อน, เกี่ยวกับเมืองร้อน",
        "Mangoes and pineapples thrive in a tropical climate.",
        "adj."
      ],
      [
        "truly",
        "อย่างแท้จริง, จริงๆ",
        "I am truly grateful for everything you have done.",
        "adv."
      ],
      [
        "trust",
        "n. ความไว้วางใจ, ความเชื่อใจ; v. ไว้ใจ, เชื่อใจ",
        "Good friendships are built on honesty and trust.",
        "n., v."
      ],
      [
        "tune",
        "ทำนองเพลง, บทเพลง",
        "He whistled a cheerful tune while walking home.",
        "n."
      ],
      [
        "tunnel",
        "อุโมงค์, โพรงใต้ดิน",
        "The train passed through a long mountain tunnel.",
        "n."
      ],
      [
        "ultimately",
        "ในที่สุด, ท้ายที่สุด, โดยพื้นฐานแล้ว",
        "Ultimately, you are responsible for your own choices.",
        "adv."
      ],
      [
        "unconscious",
        "หมดสติ, ไม่รู้ตัว, ใต้จิตสำนึก",
        "The runner fell and lay unconscious for a minute.",
        "adj."
      ],
      [
        "unexpected",
        "ไม่คาดคิด, กะทันหัน, ผิดคาด",
        "An unexpected rainstorm soaked everyone at the park.",
        "adj."
      ],
      [
        "unique",
        "เป็นเอกลักษณ์, ไม่เหมือนใคร, หนึ่งเดียว",
        "Every handmade ceramic mug has a unique pattern.",
        "adj."
      ],
      [
        "universe",
        "จักรวาล, เอกภพ",
        "Astronomers study distant galaxies across the universe.",
        "n."
      ],
      [
        "unknown",
        "ไม่เป็นที่รู้จัก, ไม่ทราบแน่ชัด, นิรนาม",
        "The painting was created by an unknown artist.",
        "adj."
      ],
      [
        "upon",
        "บน, เมื่อ, ตาม",
        "Success often depends upon hard work and patience.",
        "prep."
      ],
      [
        "upper",
        "ด้านบน, ชั้นบน, ระดับสูงกว่า",
        "Store winter blankets on the upper shelf.",
        "adj."
      ],
      [
        "upwards",
        "ขึ้นข้างบน, สูงขึ้น, มากกว่าขึ้นไป",
        "Look upwards to see the colorful fireworks tonight.",
        "adv."
      ],
      [
        "urban",
        "ในเมือง, เกี่ยวกับเขตเมือง",
        "Public parks bring welcome greenery to urban areas.",
        "adj."
      ],
      [
        "urge",
        "กระตุ้น, เร่งเร้า, วิงวอน",
        "Doctors urge people to drink water in hot weather.",
        "v."
      ],
      [
        "vaccine",
        "วัคซีน",
        "Getting an annual flu vaccine protects vulnerable people.",
        "n."
      ],
      [
        "vary",
        "แตกต่างกันไป, แปรผัน, เปลี่ยนแปลง",
        "Hotel prices vary greatly depending on the season.",
        "v."
      ],
      [
        "vast",
        "กว้างใหญ่ไพศาล, มหาศาล",
        "A vast desert stretches across the southern border.",
        "adj."
      ],
      [
        "venue",
        "สถานที่จัดงาน, ที่ตั้ง",
        "They booked a riverside venue for the wedding.",
        "n."
      ],
      [
        "via",
        "ผ่านทาง, โดยผ่าน",
        "We flew to London via Singapore last summer.",
        "prep."
      ],
      [
        "victory",
        "ชัยชนะ, ความมีชัย",
        "Fans celebrated the team's victory late into the night.",
        "n."
      ],
      [
        "violence",
        "ความรุนแรง, การใช้กำลัง",
        "The movie contains very little violence or bad language.",
        "n."
      ],
      [
        "virtual",
        "เสมือนจริง, ทางอินเทอร์เน็ต, แทบจะเหมือน",
        "We attended a virtual tour of the museum.",
        "adj."
      ],
      [
        "vision",
        "การมองเห็น, สายตา, วิสัยทัศน์",
        "Regular eye checks help protect your vision.",
        "n."
      ],
      [
        "visual",
        "เกี่ยวกับการมองเห็น, ทางสายตา, ที่เห็นเป็นภาพ",
        "Slides add helpful visual interest to any presentation.",
        "adj."
      ],
      [
        "vital",
        "สำคัญยิ่ง, จำเป็นต่อชีวิต",
        "Clean drinking water is vital for every community.",
        "adj."
      ],
      [
        "vitamin",
        "วิตามิน",
        "Fresh oranges are packed with vitamin C.",
        "n."
      ],
      [
        "volume",
        "ระดับเสียง, ปริมาณ, ปริมาตร",
        "Please turn down the TV volume after midnight.",
        "n."
      ],
      [
        "wage",
        "ค่าจ้าง, ค่าแรง",
        "Workers asked for a fair minimum daily wage.",
        "n."
      ],
      [
        "weakness",
        "จุดอ่อน, ความอ่อนแอ",
        "Chocolate cake has always been my biggest weakness.",
        "n."
      ],
      [
        "wealth",
        "ความมั่งคั่ง, ทรัพย์สมบัติ, ความอุดมสมบูรณ์",
        "Good health is worth far more than great wealth.",
        "n."
      ],
      [
        "wealthy",
        "มั่งคั่ง, ร่ำรวย",
        "A wealthy donor paid for the new hospital wing.",
        "adj."
      ],
      [
        "well-being",
        "ความเป็นอยู่ที่ดี, สุขภาวะ",
        "Daily walks improve both physical and mental well-being.",
        "n."
      ],
      [
        "whereas",
        "ในขณะที่, ทั้งที่, ส่วน",
        "I prefer hot tea, whereas my brother loves iced coffee.",
        "conj."
      ],
      [
        "wherever",
        "ไม่ว่าที่ใดก็ตาม, ทุกหนทุกแห่งที่",
        "Take a reusable bottle wherever you travel.",
        "conj."
      ],
      [
        "whom",
        "ผู้ซึ่ง, ผู้ที่, ใคร",
        "The colleague whom I called earlier replied right away.",
        "pron."
      ],
      [
        "widely",
        "อย่างกว้างขวาง, อย่างแพร่หลาย",
        "English is widely spoken across tourist areas.",
        "adv."
      ],
      [
        "wildlife",
        "สัตว์ป่าและพืชป่า, สัตว์ป่า",
        "The national park protects native wildlife and forests.",
        "n."
      ],
      [
        "willing",
        "เต็มใจ, ยินดี, พร้อมที่จะ",
        "Are you willing to help us move on Saturday?",
        "adj."
      ],
      [
        "wire",
        "สายไฟ, ลวด",
        "Check the power wire if the lamp won't turn on.",
        "n."
      ],
      [
        "wise",
        "ฉลาด, รอบคอบ, มีปัญญา",
        "Saving part of every paycheck is a wise habit.",
        "adj."
      ],
      [
        "witness",
        "n. พยาน, ผู้เห็นเหตุการณ์; v. เห็นเหตุการณ์, เป็นพยาน",
        "One witness saw the blue car speed away.",
        "n., v."
      ],
      [
        "wound",
        "n. บาดแผล, ความเจ็บช้ำทางใจ; v. ทำให้บาดเจ็บ, ทำร้ายจิตใจ",
        "The nurse cleaned and bandaged the deep wound.",
        "n., v."
      ],
      [
        "wrap",
        "ห่อ, พัน, คลุม",
        "Let us wrap the birthday gift in colorful paper.",
        "v."
      ],
      [
        "zone",
        "เขต, บริเวณ, พื้นที่เฉพาะ",
        "Do not park inside the school drop-off zone.",
        "n."
      ]
    ]
  }
];
if (typeof module !== 'undefined') module.exports = { OXFORD_PACKS };
