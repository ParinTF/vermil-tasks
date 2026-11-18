// Oxford Phrase List (750 common idioms, phrasal verbs, and natural collocations across A1-C1).
// Card tuple: [phrase, thaiMeaning, exampleSentence, pos]
const OXFORD_PHRASE_PACKS = [
  {
    "id": "oxp-a1-1",
    "label": "Phrase A1 · 1 (a few–go to work)",
    "deck": "Oxford Phrases · A1 · 1",
    "cards": [
      [
        "a few",
        "ไม่กี่, สองสาม, เล็กน้อย",
        "I only need a few minutes to finish.",
        "phr."
      ],
      [
        "a good idea",
        "ความคิดที่ดี, ไอเดียดี",
        "Taking a short break sounds like a good idea.",
        "phr."
      ],
      [
        "a little",
        "เล็กน้อย, นิดหน่อย, บ้าง",
        "Can you speak a little slower, please?",
        "phr."
      ],
      [
        "a lot",
        "มาก, เยอะ, บ่อยมาก",
        "Thanks a lot for helping me move today.",
        "phr."
      ],
      [
        "a lot of sth",
        "จำนวนมาก, เยอะแยะ",
        "She drinks a lot of water every morning.",
        "phr."
      ],
      [
        "a period of time",
        "ช่วงเวลาหนึ่ง, ระยะเวลาหนึ่ง",
        "They lived in Chiang Mai for a period of time.",
        "phr."
      ],
      [
        "agree with sb",
        "เห็นด้วยกับ, คิดตรงกันกับ",
        "I completely agree with my sister about that movie.",
        "phr."
      ],
      [
        "all day",
        "ทั้งวัน, ตลอดทั้งวัน",
        "It has been raining heavily all day.",
        "phr."
      ],
      [
        "all over the world",
        "ทั่วโลก, ไปทั่วทุกมุมโลก",
        "People drink coffee all over the world.",
        "phr."
      ],
      [
        "anything else",
        "อย่างอื่นอีกไหม, อะไรอีกไหม",
        "Would you like to order anything else tonight?",
        "phr."
      ],
      [
        "around the world",
        "รอบโลก, ทั่วโลก",
        "She dreams of traveling around the world someday.",
        "phr."
      ],
      [
        "arrive at...",
        "มาถึงสถานที่, เดินทางถึงจุดหมาย",
        "We arrived at the train station just in time.",
        "phr."
      ],
      [
        "arrive in...",
        "มาถึงเมืองหรือประเทศ, เดินทางถึง",
        "Our plane will arrive in Tokyo tonight.",
        "phr."
      ],
      [
        "ask for sth",
        "ขอ, ร้องขอ, สั่ง",
        "Do not be shy to ask for help.",
        "phr."
      ],
      [
        "at home",
        "อยู่ที่บ้าน, ที่บ้าน",
        "My parents are usually at home on Sundays.",
        "phr."
      ],
      [
        "at school",
        "อยู่ที่โรงเรียน, ที่โรงเรียน",
        "The kids are still at school right now.",
        "phr."
      ],
      [
        "at the beginning of sth",
        "ตอนเริ่มต้นของ, ช่วงต้นของ",
        "Everyone felt nervous at the beginning of the trip.",
        "phr."
      ],
      [
        "at the end",
        "ในตอนท้าย, ตอนจบ",
        "The crowd cheered loudly at the end.",
        "phr."
      ],
      [
        "at the end of sth",
        "ตอนท้ายของ, ช่วงสิ้นสุดของ",
        "We get paid at the end of every month.",
        "phr."
      ],
      [
        "at the moment",
        "ตอนนี้, ในขณะนี้, ช่วงนี้",
        "Sorry, she is busy on a call at the moment.",
        "phr."
      ],
      [
        "at the same time",
        "ในเวลาเดียวกัน, พร้อมกัน, ในขณะเดียวกัน",
        "We both arrived at the door at the same time.",
        "phr."
      ],
      [
        "at the weekend",
        "ช่วงสุดสัปดาห์, วันเสาร์อาทิตย์",
        "What do you usually do at the weekend?",
        "phr."
      ],
      [
        "at university",
        "ที่มหาวิทยาลัย, ช่วงเรียนมหาลัย",
        "He studied engineering at university in Bangkok.",
        "phr."
      ],
      [
        "at work",
        "อยู่ที่ทำงาน, กำลังทำงาน",
        "I left my charger on my desk at work.",
        "phr."
      ],
      [
        "away from sb/sth",
        "ห่างจาก, ไกลจาก, ออกจาก",
        "Keep hot drinks away from small children.",
        "phr."
      ],
      [
        "bad for sb/sth",
        "ไม่ดีต่อ, เป็นผลเสียต่อ, อันตรายต่อ",
        "Too much sugar is bad for your teeth.",
        "phr."
      ],
      [
        "bad news",
        "ข่าวร้าย, ข่าวไม่ดี",
        "I hate to bring you bad news this morning.",
        "phr."
      ],
      [
        "bad thing",
        "เรื่องไม่ดี, สิ่งแย่",
        "Making mistakes is not always a bad thing.",
        "phr."
      ],
      [
        "be going to do sth",
        "กำลังจะทำ, ตั้งใจจะทำ",
        "We are going to cook dinner together tonight.",
        "phr."
      ],
      [
        "because of",
        "เพราะว่า, เนื่องจาก",
        "The outdoor match was cancelled because of heavy rain.",
        "phr."
      ],
      [
        "begin with sth",
        "เริ่มต้นด้วย, ขึ้นต้นด้วย",
        "Let's begin with a quick stretching exercise.",
        "phr."
      ],
      [
        "best friend",
        "เพื่อนสนิท, เพื่อนซี้, เพื่อนรัก",
        "Mia has been my best friend since primary school.",
        "phr."
      ],
      [
        "black and white",
        "ขาวดำ, ภาพขาวดำ",
        "My grandfather keeps old black and white photos.",
        "phr."
      ],
      [
        "car park",
        "ลานจอดรถ, ที่จอดรถ",
        "There is a huge car park behind the mall.",
        "phr."
      ],
      [
        "cell phone",
        "โทรศัพท์มือถือ, มือถือ",
        "Please turn off your cell phone during the show.",
        "phr."
      ],
      [
        "city centre",
        "ใจกลางเมือง, ย่านกลางเมือง",
        "Parking is hard to find in the city centre.",
        "phr."
      ],
      [
        "come from...",
        "มาจาก, มีถิ่นกำเนิดจาก",
        "Where does this kind of cheese come from?",
        "phr. v."
      ],
      [
        "come into sth",
        "เดินเข้ามาใน, เข้ามาใน",
        "Please come into the kitchen and sit down.",
        "phr."
      ],
      [
        "differences between A and B",
        "ความแตกต่างระหว่างสองสิ่ง, ข้อต่างกันระหว่างสิ่งของ",
        "Notice the differences between British and American spelling.",
        "phr."
      ],
      [
        "difficult for sb",
        "ยากสำหรับ, ลำบากสำหรับ",
        "Waking up early is always difficult for me.",
        "phr."
      ],
      [
        "each other",
        "ซึ่งกันและกัน, กันและกัน",
        "Good neighbours always help each other out.",
        "phr."
      ],
      [
        "end in sth",
        "ลงท้ายด้วย, จบลงด้วย",
        "I hope the movie does not end in tears.",
        "phr. v."
      ],
      [
        "every day",
        "ทุกวัน, เป็นประจำทุกวัน",
        "I walk my dog in the park every day.",
        "phr."
      ],
      [
        "excuse me",
        "ขอโทษนะครับ, ขอทางหน่อย, ขออนุญาตถาม",
        "Excuse me, could you tell me the way out?",
        "phr."
      ],
      [
        "family member",
        "สมาชิกในครอบครัว, คนในบ้าน",
        "Every family member brought a dish to the party.",
        "phr."
      ],
      [
        "find out",
        "รู้ความจริง, สืบรู้, ค้นพบ",
        "I need to find out when the train leaves.",
        "phr. v."
      ],
      [
        "for a long time",
        "เป็นเวลานาน, นานแล้ว",
        "We waited for the bus for a long time.",
        "phr."
      ],
      [
        "for a moment",
        "สักครู่หนึ่ง, ชั่วครู่, แป๊บหนึ่ง",
        "Wait here for a moment while I grab my keys.",
        "phr."
      ],
      [
        "for example",
        "ตัวอย่างเช่น, ยกตัวอย่างเช่น",
        "I love tropical fruits, for example mangoes and pineapples.",
        "phr."
      ],
      [
        "for lunch",
        "สำหรับมื้อกลางวัน, เป็นอาหารเที่ยง",
        "What did you have for lunch today?",
        "phr."
      ],
      [
        "for many years",
        "เป็นเวลาหลายปี, มาหลายปีแล้ว",
        "They have lived on this street for many years.",
        "phr."
      ],
      [
        "for the first time",
        "เป็นครั้งแรก",
        "She saw real snow for the first time yesterday.",
        "phr."
      ],
      [
        "get home",
        "กลับถึงบ้าน, มาถึงบ้าน",
        "Call me as soon as you get home.",
        "phr."
      ],
      [
        "get married",
        "แต่งงาน",
        "My cousin plans to get married next June.",
        "phr."
      ],
      [
        "get off",
        "ลงจากรถ, ลงจากยานพาหนะ",
        "Remember to get off at the next bus stop.",
        "phr. v."
      ],
      [
        "get on",
        "ขึ้นรถ, ขึ้นยานพาหนะ",
        "Hurry up and get on the train now.",
        "phr. v."
      ],
      [
        "get ready",
        "เตรียมตัวให้พร้อม, แต่งตัวเตรียมพร้อม",
        "Give me ten minutes to get ready for dinner.",
        "phr."
      ],
      [
        "get there",
        "ไปถึงที่นั่น, เดินทางไปถึง",
        "How long does it take to get there?",
        "phr."
      ],
      [
        "get to...",
        "ไปถึง, มาถึง",
        "I usually get to the office before nine.",
        "phr."
      ],
      [
        "get up",
        "ตื่นนอน, ลุกขึ้น",
        "What time do you get up on weekdays?",
        "phr. v."
      ],
      [
        "go back",
        "กลับไป, ย้อนกลับไป",
        "I forgot my wallet, so let's go back.",
        "phr. v."
      ],
      [
        "go home",
        "กลับบ้าน",
        "It is getting late, so I should go home.",
        "phr."
      ],
      [
        "go into sth",
        "เข้าไปใน, เดินเข้าไปใน",
        "She watched him go into the bakery.",
        "phr."
      ],
      [
        "go out",
        "ออกไปข้างนอก, ออกไปเที่ยว, ดับลง",
        "Do you want to go out for coffee tonight?",
        "phr. v."
      ],
      [
        "go to bed",
        "เข้านอน",
        "You look tired, so you should go to bed.",
        "phr."
      ],
      [
        "go to school",
        "ไปโรงเรียน",
        "Children in this village go to school by bike.",
        "phr."
      ],
      [
        "go to work",
        "ไปทำงาน",
        "He takes the subway to go to work daily.",
        "phr."
      ]
    ]
  },
  {
    "id": "oxp-a1-2",
    "label": "Phrase A1 · 2 (good at sth–on Monday)",
    "deck": "Oxford Phrases · A1 · 2",
    "cards": [
      [
        "good at sth",
        "เก่งเรื่อง, ถนัดเรื่อง",
        "Sam is really good at fixing old computers.",
        "phr."
      ],
      [
        "good for sb/sth",
        "ดีต่อ, มีประโยชน์ต่อ",
        "Morning walks are very good for your health.",
        "phr."
      ],
      [
        "Good morning",
        "สวัสดีตอนเช้า, อรุณสวัสดิ์",
        "Good morning, did you sleep well last night?",
        "phr."
      ],
      [
        "good news",
        "ข่าวดี",
        "I finally have some good news to share.",
        "phr."
      ],
      [
        "good thing",
        "เรื่องดี, สิ่งที่ดี, โชคดี",
        "Regular exercise is a good thing for everyone.",
        "phr."
      ],
      [
        "grow up",
        "เติบโตขึ้น, โตเป็นผู้ใหญ่",
        "Where did you grow up as a child?",
        "phr. v."
      ],
      [
        "Guess what...",
        "ทายสิว่าอะไร, รู้ไหมว่ามีอะไร",
        "Guess what, I just got the job!",
        "phr."
      ],
      [
        "half an hour",
        "ครึ่งชั่วโมง",
        "Dinner will be ready in half an hour.",
        "phr."
      ],
      [
        "hard work",
        "งานหนัก, ความทุ่มเทขยัน",
        "Success comes from patience and hard work.",
        "phr."
      ],
      [
        "have fun",
        "สนุกสนาน, เที่ยวให้สนุก",
        "Have fun at the concert with your friends!",
        "phr."
      ],
      [
        "have got",
        "มี, ครอบครอง",
        "We have got plenty of snacks for everyone.",
        "phr."
      ],
      [
        "have time",
        "มีเวลา, ว่าง",
        "Do you have time for a quick chat?",
        "phr."
      ],
      [
        "he or she",
        "เขาหรือเธอ",
        "Tell each student what he or she should bring.",
        "phr."
      ],
      [
        "high school",
        "โรงเรียนมัธยมปลาย, มัธยมปลาย",
        "We met during our last year of high school.",
        "phr."
      ],
      [
        "his or her",
        "ของเขาหรือของเธอ",
        "Every visitor must wear his or her badge.",
        "phr."
      ],
      [
        "How about...?",
        "แล้ว...ล่ะ, เอา...ดีไหม",
        "How about ordering pizza for dinner tonight?",
        "phr."
      ],
      [
        "How are you?",
        "สบายดีไหม, เป็นอย่างไรบ้าง",
        "Good morning, everyone, how are you?",
        "phr."
      ],
      [
        "How long...?",
        "นานแค่ไหน, ยาวแค่ไหน",
        "How long will the train ride take?",
        "phr."
      ],
      [
        "How many...?",
        "จำนวนกี่..., เยอะแค่ไหน",
        "How many cups of coffee do you drink daily?",
        "phr."
      ],
      [
        "How much...?",
        "ราคาเท่าไร, ปริมาณมากแค่ไหน",
        "How much does this leather jacket cost?",
        "phr."
      ],
      [
        "How often...?",
        "บ่อยแค่ไหน",
        "How often do you visit your grandparents?",
        "phr."
      ],
      [
        "I'm sorry",
        "ขอโทษนะ, เสียใจด้วยนะ",
        "I'm sorry for keeping you waiting outside.",
        "phr."
      ],
      [
        "important for sb/sth",
        "สำคัญสำหรับ, จำเป็นต่อ",
        "Clean drinking water is important for everyone.",
        "phr."
      ],
      [
        "in April",
        "ในเดือนเมษายน",
        "Cherry blossoms usually bloom here in April.",
        "phr."
      ],
      [
        "in bed",
        "อยู่บนเตียง, นอนอยู่บนเตียง, นอนป่วย",
        "It is Sunday, so I am staying in bed.",
        "phr."
      ],
      [
        "in class",
        "ในห้องเรียน, ตอนเรียน",
        "Please keep your phones silent while in class.",
        "phr."
      ],
      [
        "in fact",
        "อันที่จริง, ความจริงแล้ว",
        "She looks quiet, but in fact she talks a lot.",
        "phr."
      ],
      [
        "in front of",
        "ข้างหน้า, ต่อหน้า",
        "A delivery van parked right in front of our gate.",
        "phr."
      ],
      [
        "in my opinion",
        "ในความคิดของฉัน, ในความเห็นส่วนตัว",
        "In my opinion, the homemade pasta tastes much better.",
        "phr."
      ],
      [
        "in school",
        "กำลังเรียนอยู่, อยู่ในโรงเรียน",
        "He made lifelong friends while he was in school.",
        "phr."
      ],
      [
        "in space",
        "ในอวกาศ, บนอวกาศ",
        "Astronauts can float easily when they work in space.",
        "phr."
      ],
      [
        "in summer",
        "ในฤดูร้อน, ช่วงหน้าร้อน",
        "The days are much longer here in summer.",
        "phr."
      ],
      [
        "in the centre",
        "ตรงกลาง, ใจกลาง",
        "They placed a big fountain right in the centre.",
        "phr."
      ],
      [
        "in the country",
        "ในชนบท, นอกเมือง, บ้านนอก",
        "My grandparents live on a quiet farm in the country.",
        "phr."
      ],
      [
        "in the future",
        "ในอนาคต, วันข้างหน้า",
        "I hope to open my own bakery in the future.",
        "phr."
      ],
      [
        "in the morning",
        "ในตอนเช้า, ช่วงเช้า",
        "I always drink black coffee in the morning.",
        "phr."
      ],
      [
        "in the north",
        "ทางภาคเหนือ, ทางทิศเหนือ",
        "The winters are much colder in the north.",
        "phr."
      ],
      [
        "in the past",
        "ในอดีต, เมื่อก่อน",
        "People wrote letters by hand more often in the past.",
        "phr."
      ],
      [
        "in the street",
        "บนถนน, กลางถนน, ริมถนน",
        "Kids were playing football in the street after school.",
        "phr."
      ],
      [
        "in the summer",
        "ในช่วงฤดูร้อน, ตอนหน้าร้อน",
        "We always rent a cabin by the lake in the summer.",
        "phr."
      ],
      [
        "in town",
        "ในเมือง, อยู่ในตัวเมือง",
        "Are you staying in town for the holidays?",
        "phr."
      ],
      [
        "It is important to do sth",
        "เป็นเรื่องสำคัญที่จะทำ, สำคัญมากที่จะต้อง",
        "It is important to stretch before going for a run.",
        "phr."
      ],
      [
        "It takes ...",
        "ใช้เวลา, ต้องใช้เวลาหรือสิ่งของ",
        "It takes twenty minutes to walk to the station.",
        "phr."
      ],
      [
        "kind of sb/sth",
        "ชนิดของ, ประเภทของ",
        "What kind of music do you listen to?",
        "phr."
      ],
      [
        "know how",
        "รู้วิธี, ทำเป็น",
        "Do you know how to swim safely?",
        "phr."
      ],
      [
        "last time",
        "ครั้งที่แล้ว, คราวก่อน",
        "Last time we met, you had shorter hair.",
        "phr."
      ],
      [
        "last year",
        "ปีที่แล้ว, เมื่อปีก่อน",
        "We traveled to Chiang Rai together last year.",
        "phr."
      ],
      [
        "learn how to do sth",
        "เรียนรู้วิธีทำ, หัดทำ",
        "I want to learn how to bake sourdough bread.",
        "phr."
      ],
      [
        "listen to sb/sth",
        "ฟัง, ตั้งใจฟัง",
        "She loves to listen to podcasts while cooking.",
        "phr."
      ],
      [
        "live with sb",
        "อาศัยอยู่กับ, อยู่บ้านเดียวกับ",
        "Do you live with your family or alone?",
        "phr."
      ],
      [
        "living room",
        "ห้องนั่งเล่น, ห้องรับแขก",
        "Everyone gathered in the living room to watch movies.",
        "phr."
      ],
      [
        "look at sb/sth",
        "มองดู, หันไปดู",
        "Look at those dark clouds over the hills.",
        "phr."
      ],
      [
        "look for sb/sth",
        "มองหา, ตามหา",
        "Help me look for my missing car keys.",
        "phr."
      ],
      [
        "look like sb/sth",
        "ดูเหมือน, หน้าตาคล้าย",
        "You really look like your older brother.",
        "phr."
      ],
      [
        "lots of...",
        "มากมาย, เยอะแยะ",
        "There are lots of fresh vegetables at the market.",
        "phr."
      ],
      [
        "millions of...",
        "หลายล้าน, เป็นล้านๆ",
        "Millions of tourists visit this beach every year.",
        "phr."
      ],
      [
        "mobile phone",
        "โทรศัพท์มือถือ, มือถือ",
        "I forgot my mobile phone on the kitchen table.",
        "phr."
      ],
      [
        "more than...",
        "มากกว่า, เกินกว่า",
        "More than fifty guests came to the wedding.",
        "phr."
      ],
      [
        "next time",
        "คราวหน้า, ครั้งต่อไป",
        "Bring a warm jacket next time you visit.",
        "phr."
      ],
      [
        "next year",
        "ปีหน้า",
        "My brother is starting college next year.",
        "phr."
      ],
      [
        "No problem",
        "ไม่มีปัญหา, ไม่เป็นไรเลย, ยินดีเลย",
        "No problem, I can send you the file tonight.",
        "phr."
      ],
      [
        "of course",
        "แน่นอน, แน่ล่ะ, ได้เลย",
        "Of course you can borrow my umbrella today.",
        "idiom"
      ],
      [
        "Oh no!",
        "โอ้ ไม่นะ, แย่แล้ว",
        "Oh no, I left my house keys inside!",
        "phr."
      ],
      [
        "Oh yes",
        "อ้อ ใช่เลย, จริงด้วย",
        "Oh yes, now I remember where we met.",
        "phr."
      ],
      [
        "on holiday",
        "ไปเที่ยวพักร้อน, อยู่ในวันหยุดพักผ่อน",
        "Our manager is away on holiday until Monday.",
        "phr."
      ],
      [
        "on Monday",
        "ในวันจันทร์",
        "The new museum opens to visitors on Monday.",
        "phr."
      ]
    ]
  },
  {
    "id": "oxp-a1-3",
    "label": "Phrase A1 · 3 (on television–You're welcome)",
    "deck": "Oxford Phrases · A1 · 3",
    "cards": [
      [
        "on television",
        "ทางโทรทัศน์, ออกโทรทัศน์",
        "I saw a great nature documentary on television.",
        "phr."
      ],
      [
        "on the beach",
        "บนชายหาด, ริมทะเล",
        "The children built a huge sandcastle on the beach.",
        "phr."
      ],
      [
        "on the floor",
        "บนพื้น, บนพื้นห้อง",
        "Please do not leave wet clothes on the floor.",
        "phr."
      ],
      [
        "on the internet",
        "บนอินเทอร์เน็ต, ทางออนไลน์",
        "You can check the train schedule on the internet.",
        "phr."
      ],
      [
        "on the left",
        "ทางซ้ายมือ, ด้านซ้าย",
        "The post office is right there on the left.",
        "phr."
      ],
      [
        "on the phone",
        "กำลังคุยโทรศัพท์, ทางโทรศัพท์",
        "Hold on, my mom is on the phone.",
        "phr."
      ],
      [
        "on TV",
        "ทางทีวี, ออกทีวี",
        "Is there anything good on TV tonight?",
        "phr."
      ],
      [
        "once a...",
        "หนึ่งครั้งต่อช่วงเวลา, ...ละครั้ง",
        "I visit my dentist for a checkup once a year.",
        "phr."
      ],
      [
        "one day",
        "วันหนึ่ง, สักวันหนึ่ง",
        "I hope to write a novel one day.",
        "phr."
      ],
      [
        "out of sth",
        "ออกจาก, ข้างนอก, หมดแล้ว",
        "She took a warm scarf out of her bag.",
        "phr."
      ],
      [
        "over there",
        "ตรงนั้น, ทางโน้น",
        "Look at that bright red car parked over there.",
        "phr."
      ],
      [
        "pay for sth",
        "จ่ายเงินค่า, จ่ายสำหรับ",
        "Let me pay for our coffee this morning.",
        "phr."
      ],
      [
        "phone call",
        "การโทรหา, สายโทรศัพท์",
        "I received an important phone call during lunch.",
        "phr."
      ],
      [
        "phone number",
        "เบอร์โทรศัพท์, หมายเลขโทรศัพท์",
        "Could you give me your new phone number?",
        "phr."
      ],
      [
        "plan for sth",
        "วางแผนสำหรับ, แผนการเพื่อ",
        "We need a clear plan for the weekend trip.",
        "phr."
      ],
      [
        "play with sb/sth",
        "เล่นกับ, หยอกล้อกับ",
        "The puppy loves to play with its yellow ball.",
        "phr."
      ],
      [
        "post office",
        "ที่ทำการไปรษณีย์, ไปรษณีย์",
        "I need to drop this package at the post office.",
        "phr."
      ],
      [
        "pretty good",
        "ค่อนข้างดี, ดีทีเดียว, ไม่เลวเลย",
        "My Spanish is getting pretty good these days.",
        "phr."
      ],
      [
        "really enjoy",
        "ชอบมาก, สนุกกับ...มาก",
        "I really enjoy reading quiet books on rainy days.",
        "phr."
      ],
      [
        "really good",
        "ดีมาก, เก่งมาก, อร่อยมาก",
        "This street food stall makes really good noodles.",
        "phr."
      ],
      [
        "really like",
        "ชอบมาก, ถูกใจมาก",
        "I really like the color of your new jacket.",
        "phr."
      ],
      [
        "right now",
        "เดี๋ยวนี้, ตอนนี้เลย, ขณะนี้",
        "I am a little busy right now.",
        "phr."
      ],
      [
        "See you",
        "ไว้เจอกันนะ, แล้วเจอกัน",
        "Thanks for lunch today, see you tomorrow!",
        "phr."
      ],
      [
        "sit down",
        "นั่งลง",
        "Please come in and sit down over here.",
        "phr. v."
      ],
      [
        "someone else",
        "คนอื่น, ใครอีกคน",
        "Maybe someone else can help you lift that box.",
        "phr."
      ],
      [
        "speak to sb",
        "พูดคุยกับ, คุยกับ",
        "Can I speak to the store manager, please?",
        "phr."
      ],
      [
        "spend time",
        "ใช้เวลา",
        "I love to spend time with my family.",
        "phr."
      ],
      [
        "stand up",
        "ยืนขึ้น, ลุกขึ้นยืน",
        "Everyone stood up when the speaker walked in.",
        "phr. v."
      ],
      [
        "stay in",
        "อยู่บ้าน, ไม่ออกไปข้างนอก",
        "It is freezing outside, so let's stay in tonight.",
        "phr. v."
      ],
      [
        "such as",
        "เช่น, อย่างเช่น",
        "Try eating healthy snacks such as nuts and fruit.",
        "phr."
      ],
      [
        "swimming pool",
        "สระว่ายน้ำ",
        "The hotel has a big outdoor swimming pool.",
        "phr."
      ],
      [
        "talk about sb/sth",
        "พูดคุยเกี่ยวกับ, คุยเรื่อง",
        "We always talk about travel plans over dinner.",
        "phr."
      ],
      [
        "Thank you",
        "ขอบคุณ, ขอบคุณมาก",
        "Thank you for carrying these heavy bags upstairs.",
        "phr."
      ],
      [
        "that day",
        "วันนั้น, ในวันนั้น",
        "I still remember how sunny it was that day.",
        "phr."
      ],
      [
        "the 20th century",
        "ศตวรรษที่ 20, ยุคศตวรรษที่ยี่สิบ",
        "Air travel changed the world in the 20th century.",
        "phr."
      ],
      [
        "the next day",
        "วันถัดมา, วันรุ่งขึ้น",
        "We arrived late and explored the town the next day.",
        "phr."
      ],
      [
        "there is",
        "มี, มีอยู่",
        "There is a great bakery around the corner.",
        "phr."
      ],
      [
        "think about sb/sth",
        "คิดถึง, ครุ่นคิดเกี่ยวกับ, พิจารณา",
        "Take your time to think about the job offer.",
        "phr."
      ],
      [
        "think of sb/sth",
        "นึกถึง, คิดออก, รู้สึกต่อ",
        "I just cannot think of a good excuse.",
        "phr."
      ],
      [
        "This is...",
        "นี่คือ, ขอแนะนำให้รู้จัก, นี่พูดสายอยู่",
        "This is my younger brother, Leo.",
        "phr."
      ],
      [
        "this kind of...",
        "แบบนี้, ชนิดนี้, ประเภทนี้",
        "I really enjoy reading this kind of book.",
        "phr."
      ],
      [
        "this morning",
        "เช้านี้, เมื่อเช้านี้",
        "I woke up super early this morning.",
        "phr."
      ],
      [
        "this time",
        "ครั้งนี้, คราวนี้, เวลานี้",
        "I promise to be on time this time.",
        "phr."
      ],
      [
        "this year",
        "ปีนี้",
        "Our team has won every game this year.",
        "phr."
      ],
      [
        "thousands of...",
        "หลายพัน, เป็นพันๆ",
        "Thousands of fans waited outside the stadium.",
        "phr."
      ],
      [
        "too long",
        "นานเกินไป, ยาวเกินไป",
        "Do not stay in the hot sun too long.",
        "phr."
      ],
      [
        "too much",
        "มากเกินไป, เยอะเกินไป",
        "You put too much salt in this soup.",
        "phr."
      ],
      [
        "town centre",
        "ใจกลางเมือง, ย่านกลางเมือง",
        "The farmers market is in the town centre.",
        "phr."
      ],
      [
        "TV show",
        "รายการทีวี, รายการโทรทัศน์",
        "What is your favorite TV show right now?",
        "phr."
      ],
      [
        "wait for sb/sth",
        "รอ, คอย",
        "Let's wait for the rain to stop first.",
        "phr."
      ],
      [
        "wake up",
        "ตื่นนอน, ปลุกให้ตื่น",
        "I usually wake up before my alarm rings.",
        "phr. v."
      ],
      [
        "welcome to sth",
        "ยินดีต้อนรับสู่",
        "Welcome to our new coffee shop in town!",
        "phr."
      ],
      [
        "What about...?",
        "แล้ว...ล่ะ, เป็นไงถ้า...",
        "What about meeting at the cafe tomorrow morning?",
        "phr."
      ],
      [
        "work as sth",
        "ทำงานเป็น, มีอาชีพเป็น",
        "She used to work as a tour guide.",
        "phr."
      ],
      [
        "work for sb/sth",
        "ทำงานให้กับ, ทำงานให้องค์กร",
        "My cousin works for a local radio station.",
        "phr."
      ],
      [
        "work hard",
        "ทำงานหนัก, ขยันขันแข็ง, ตั้งใจ",
        "They work hard every day to support their family.",
        "phr."
      ],
      [
        "work together",
        "ทำงานร่วมกัน, ร่วมมือกัน",
        "Our class has to work together on this project.",
        "phr."
      ],
      [
        "work with sb",
        "ทำงานร่วมกับ",
        "I really like working with creative people.",
        "phr."
      ],
      [
        "would like",
        "อยากได้, ต้องการอย่างสุภาพ",
        "I would like to book a table for two.",
        "phr."
      ],
      [
        "Would you like...?",
        "คุณต้องการ...ไหม, รับ...ไหม",
        "Would you like some extra ice in your drink?",
        "phr."
      ],
      [
        "X hours a day",
        "วันละ...ชั่วโมง, ...ชั่วโมงต่อวัน",
        "He practices playing the guitar two hours a day.",
        "phr."
      ],
      [
        "X times a...",
        "...ครั้งต่อช่วงเวลา, ...ครั้งต่อสัปดาห์หรือเดือน",
        "We clean the kitchen floor three times a week.",
        "phr."
      ],
      [
        "X years ago",
        "เมื่อ...ปีก่อน, เมื่อ...ปีที่แล้ว",
        "My parents bought this house ten years ago.",
        "phr."
      ],
      [
        "X years later",
        "...ปีต่อมา, อีก...ปีให้หลัง",
        "Five years later, she opened her own clinic.",
        "phr."
      ],
      [
        "X years old",
        "อายุ...ปี, มีอายุ...ขวบ",
        "My little brother turns eight years old today.",
        "phr."
      ],
      [
        "You're welcome",
        "ด้วยความยินดี, ไม่เป็นไรเลย",
        "You're welcome, let me know if you need more.",
        "phr."
      ]
    ]
  },
  {
    "id": "oxp-a2-1",
    "label": "Phrase A2 · 1 (a bit–I don't care)",
    "deck": "Oxford Phrases · A2 · 1",
    "cards": [
      [
        "a bit",
        "นิดหน่อย, นิดนึง, ค่อนข้าง",
        "It feels a bit chilly in here tonight.",
        "phr."
      ],
      [
        "a couple of sth",
        "สองสาม, สักสองอย่าง, ไม่กี่",
        "We only have a couple of days left.",
        "phr."
      ],
      [
        "a long time ago",
        "นานมาแล้ว, เมื่อนานมาแล้ว",
        "That old bridge was built a long time ago.",
        "phr."
      ],
      [
        "a long way",
        "ไกลมาก, ระยะทางไกล",
        "The train station is a long way from here.",
        "phr."
      ],
      [
        "a number of sth",
        "จำนวนหนึ่ง, หลายอย่าง",
        "A number of students joined the art club today.",
        "phr."
      ],
      [
        "able to do sth",
        "สามารถทำได้, ทำไหว",
        "Will you be able to join us tomorrow?",
        "phr."
      ],
      [
        "add to sth",
        "เพิ่มเข้าไปใน, ทำให้มากขึ้น",
        "The loud traffic only added to my headache.",
        "phr. v."
      ],
      [
        "again and again",
        "ซ้ำแล้วซ้ำเล่า, ครั้งแล้วครั้งเล่า",
        "She read the same message again and again.",
        "idiom"
      ],
      [
        "all about...",
        "ทั้งหมดเกี่ยวกับ, รู้เรื่อง...ดี",
        "Tell me all about your trip to Kyoto!",
        "phr."
      ],
      [
        "all kinds of...",
        "สารพัดชนิด, ทุกประเภท, หลากหลายแบบ",
        "This market sells all kinds of street food.",
        "phr."
      ],
      [
        "all over...",
        "ทั่วทั้ง, เต็มไปหมดบน",
        "The puppy left muddy prints all over the floor.",
        "phr."
      ],
      [
        "all sorts of...",
        "สารพัดอย่าง, หลากหลายแบบ",
        "We talked about all sorts of interesting topics.",
        "phr."
      ],
      [
        "all the time",
        "ตลอดเวลา, อยู่เรื่อย, เสมอ",
        "My dog follows me around the house all the time.",
        "phr."
      ],
      [
        "apply for sth",
        "สมัคร, ยื่นขอ",
        "I plan to apply for a summer internship.",
        "phr."
      ],
      [
        "art gallery",
        "หอศิลป์, แกลเลอรีศิลปะ",
        "Let's visit the new art gallery downtown today.",
        "phr."
      ],
      [
        "as a result",
        "ด้วยเหตุนี้, ส่งผลให้, ผลก็คือ",
        "He missed the bus, and as a result arrived late.",
        "phr."
      ],
      [
        "as part of sth",
        "เป็นส่วนหนึ่งของ, ในฐานะส่วนหนึ่ง",
        "We did a group dance as part of the festival.",
        "phr."
      ],
      [
        "as soon as",
        "ทันทีที่, พอ...ก็",
        "Text me as soon as you land safely.",
        "phr."
      ],
      [
        "as well",
        "ด้วย, เช่นกัน, เหมือนกัน",
        "We ordered fries and two milkshakes as well.",
        "phr."
      ],
      [
        "at first",
        "ตอนแรก, ในช่วงแรก, ทีแรก",
        "Learning to drive felt scary at first.",
        "phr."
      ],
      [
        "at least",
        "อย่างน้อย, อย่างน้อยก็",
        "Drink at least eight glasses of water daily.",
        "phr."
      ],
      [
        "at the age of...",
        "ตอนอายุ, เมื่ออายุได้",
        "Mozart started writing music at the age of five.",
        "phr."
      ],
      [
        "at the start of sth",
        "ตอนเริ่มต้นของ, ในช่วงแรกของ",
        "Everyone got a map at the start of the tour.",
        "phr."
      ],
      [
        "at the time",
        "ในตอนนั้น, ช่วงเวลานั้น",
        "I was living in Chiang Mai at the time.",
        "phr."
      ],
      [
        "at the time of sth",
        "ในช่วงเวลาที่เกิด, ตอนที่เกิด",
        "She was only ten at the time of the move.",
        "phr."
      ],
      [
        "at the top",
        "อยู่ด้านบนสุด, บนยอด, หัวแถว",
        "Write your full name at the top of the page.",
        "phr."
      ],
      [
        "based on sth",
        "อ้างอิงจาก, สร้างจากเรื่องจริงของ, มีพื้นฐานจาก",
        "This movie is based on a true story.",
        "phr."
      ],
      [
        "be allowed to do sth",
        "ได้รับอนุญาตให้ทำ",
        "Pets are not allowed to enter this restaurant.",
        "phr."
      ],
      [
        "be made of sth",
        "ทำมาจาก, ผลิตจากวัสดุ",
        "These handmade bowls are made of local clay.",
        "phr."
      ],
      [
        "believe in sb/sth",
        "เชื่อมั่นใน, เชื่อเรื่อง, ศรัทธาใน",
        "I really believe in your ability to succeed.",
        "phr. v."
      ],
      [
        "belong to sb",
        "เป็นของ, เป็นสมบัติของ",
        "Does this blue umbrella belong to anyone here?",
        "phr. v."
      ],
      [
        "belong to sth",
        "เป็นสมาชิกของ, สังกัดอยู่กับ",
        "Both whales and dolphins belong to the mammal group.",
        "phr. v."
      ],
      [
        "by the end of sth",
        "ภายในสิ้น..., กว่าจะถึงตอนจบของ",
        "I hope to finish this book by the end of July.",
        "phr."
      ],
      [
        "care about sth",
        "ใส่ใจ, ห่วงใย, แคร์เรื่อง",
        "Many young people care about protecting the environment.",
        "phr."
      ],
      [
        "carry on",
        "ทำต่อไป, ดำเนินต่อ",
        "Sorry to interrupt you, please carry on speaking.",
        "phr. v."
      ],
      [
        "carry sth out",
        "ดำเนินการ, ปฏิบัติตาม, ทดลองทำ",
        "Scientists will carry out tests on the water.",
        "phr. v."
      ],
      [
        "check in",
        "เช็กอิน, ลงทะเบียนเข้าพักหรือขึ้นเครื่อง",
        "We need to check in at the hotel desk.",
        "phr. v."
      ],
      [
        "check out",
        "เช็กเอาต์, ออกจากที่พัก, ลองดูหน่อย",
        "Guests must check out before eleven in the morning.",
        "phr. v."
      ],
      [
        "climate change",
        "การเปลี่ยนแปลงสภาพภูมิอากาศ, ภาวะโลกร้อน",
        "Climate change is affecting farmers around the world.",
        "phr."
      ],
      [
        "close to sb/sth",
        "ใกล้กับ, สนิทสนมกับ",
        "Our apartment is very close to the metro station.",
        "phr."
      ],
      [
        "come back",
        "กลับมา",
        "When will your parents come back from Phuket?",
        "phr. v."
      ],
      [
        "Come on!",
        "เร็วเข้า, เอาน่า, จริงดิ",
        "Come on, we are going to miss the bus!",
        "idiom"
      ],
      [
        "connected to sth",
        "เชื่อมต่อกับ, ต่อเข้ากับ",
        "Is your laptop connected to the office network?",
        "phr."
      ],
      [
        "connected with sb/sth",
        "เกี่ยวข้องกับ, เชื่อมโยงกับ",
        "His stress is closely connected with his heavy workload.",
        "phr."
      ],
      [
        "credit card",
        "บัตรเครดิต",
        "Can I pay for the tickets by credit card?",
        "phr."
      ],
      [
        "deal with sb",
        "รับมือกับคน, ติดต่อประสานงานกับ",
        "Receptionists deal with angry customers very calmly.",
        "phr. v."
      ],
      [
        "deal with sth",
        "จัดการกับ, แก้ปัญหา, เกี่ยวข้องกับ",
        "How do you deal with stress before exams?",
        "phr. v."
      ],
      [
        "depend on sb/sth",
        "พึ่งพา, พึ่งพิง, ไว้ใจได้",
        "You can always depend on your close friends.",
        "phr. v."
      ],
      [
        "depend on sth",
        "ขึ้นอยู่กับ, แล้วแต่",
        "The ticket price will depend on the season.",
        "phr. v."
      ],
      [
        "do well",
        "ทำได้ดี, ประสบความสำเร็จ, ก้าวหน้า",
        "She worked hard and did well on her test.",
        "phr."
      ],
      [
        "each one",
        "แต่ละอัน, แต่ละคน",
        "Try these cookies because each one tastes different.",
        "phr."
      ],
      [
        "end with sth",
        "จบลงด้วย, ปิดท้ายด้วย",
        "The concert will end with a huge fireworks show.",
        "phr."
      ],
      [
        "even more...",
        "ยิ่งมากขึ้น, มากกว่าเดิมอีก",
        "With practice, painting becomes even more fun.",
        "phr."
      ],
      [
        "everyone else",
        "คนอื่นทุกคน, คนที่เหลือทั้งหมด",
        "Everyone else has already left the meeting room.",
        "phr."
      ],
      [
        "except for",
        "ยกเว้น, นอกจาก",
        "The house was completely silent except for the clock.",
        "phr."
      ],
      [
        "fall in love",
        "ตกหลุมรัก",
        "They met in Paris and fell in love.",
        "idiom"
      ],
      [
        "fall off",
        "ร่วงลงมา, ตกลงมาจาก, ลดลง",
        "Be careful not to fall off that tall ladder.",
        "phr. v."
      ],
      [
        "far away",
        "ห่างไกล, ไกลออกไป",
        "My sister lives in a town far away.",
        "phr."
      ],
      [
        "feel good",
        "รู้สึกดี, สบายใจ, รู้สึกสดชื่น",
        "A hot shower always makes me feel good.",
        "phr."
      ],
      [
        "feel like sth",
        "รู้สึกอยากได้, รู้สึกเหมือน",
        "I feel like a cold mango smoothie right now.",
        "phr."
      ],
      [
        "fill sth in",
        "กรอกข้อมูล, เติมลงในช่อง",
        "Please fill this application form in with black ink.",
        "phr. v."
      ],
      [
        "find it difficult to do sth",
        "รู้สึกว่าทำได้ยาก, พบว่ายากที่จะทำ",
        "Many beginners find it difficult to pronounce new words.",
        "phr."
      ],
      [
        "first of all",
        "อย่างแรกเลย, ก่อนอื่นใด",
        "First of all, let me thank everyone for coming.",
        "phr."
      ],
      [
        "focus on sb/sth",
        "มุ่งความสนใจไปที่, โฟกัสที่, ตั้งใจกับ",
        "Turn off notifications so you can focus on studying.",
        "phr."
      ],
      [
        "followed by sb/sth",
        "ตามมาด้วย, ถัดจากนั้นคือ",
        "We had soup, followed by grilled salmon and rice.",
        "phr."
      ],
      [
        "for the rest of sth",
        "ตลอดช่วงที่เหลือของ",
        "She stayed indoors for the rest of the afternoon.",
        "phr."
      ],
      [
        "for this reason",
        "ด้วยเหตุนี้, ด้วยเหตุผลนี้",
        "The cafe closed early, and for this reason we went home.",
        "phr."
      ],
      [
        "get back",
        "กลับมา, ได้กลับคืนมา",
        "Let me know when you get back from work.",
        "phr. v."
      ],
      [
        "get better",
        "ดีขึ้น, อาการทุเลา, เก่งขึ้น",
        "I hope your sore throat gets better soon.",
        "phr."
      ],
      [
        "get lost",
        "หลงทาง",
        "Keep your phone charged so you do not get lost.",
        "phr."
      ],
      [
        "get out",
        "ออกไปข้างนอก, ออกมาจากข้างใน",
        "Let's get out of the house and walk.",
        "phr. v."
      ],
      [
        "give sth up",
        "เลิกทำ, เลิกนิสัย, ยอมสละ",
        "He decided to give up sweet snacks last month.",
        "phr. v."
      ],
      [
        "give up",
        "ยอมแพ้, ถอดใจ",
        "Never give up even when a task feels hard.",
        "phr. v."
      ],
      [
        "go and...",
        "ไปทำ..., ไป...กัน",
        "Let's go and buy some fresh fruit.",
        "phr."
      ],
      [
        "go away",
        "จากไป, ออกไปเที่ยวพักผ่อน, หายไป",
        "Take this medicine and the headache will go away.",
        "phr. v."
      ],
      [
        "go down",
        "ลดลง, ตกลง, ลงไป",
        "Gas prices finally started to go down this month.",
        "phr. v."
      ],
      [
        "go down sth",
        "เดินลงตาม, ลงไปตาม",
        "Walk carefully as you go down the stairs.",
        "phr."
      ],
      [
        "go for sth",
        "ออกไปทำกิจกรรม, ออกไปเดินเล่นหรือกินดื่ม",
        "Why don't we go for a walk after lunch?",
        "phr."
      ],
      [
        "go up",
        "เพิ่มขึ้น, สูงขึ้น, เดินขึ้นไป",
        "Rent in the city keeps going up every year.",
        "phr. v."
      ],
      [
        "good luck",
        "โชคดีนะ, ขอให้โชคดี",
        "Good luck with your driving test tomorrow morning!",
        "phr."
      ],
      [
        "happen to sb/sth",
        "เกิดขึ้นกับ",
        "Nobody knows what happened to my old bicycle.",
        "phr."
      ],
      [
        "happy with sb/sth",
        "พอใจกับ, แฮปปี้กับ, มีความสุขกับ",
        "Are you happy with your new haircut?",
        "phr."
      ],
      [
        "have a look",
        "ขอดูหน่อย, ลองดู, ชำเลืองดู",
        "Come here and have a look at this photo.",
        "phr."
      ],
      [
        "have got to",
        "ต้อง, จำเป็นต้อง",
        "I have got to catch the seven o'clock train.",
        "phr."
      ],
      [
        "Have you ever...?",
        "คุณเคย...บ้างไหม",
        "Have you ever tried spicy Thai papaya salad?",
        "phr."
      ],
      [
        "health problems",
        "ปัญหาสุขภาพ, โรคภัยไข้เจ็บ",
        "Lack of sleep can lead to serious health problems.",
        "phr."
      ],
      [
        "hear about sb/sth",
        "ได้ข่าวเกี่ยวกับ, ได้ยินเรื่องราวของ",
        "Did you hear about the new cafe next door?",
        "phr."
      ],
      [
        "I don't care",
        "ฉันไม่สน, ช่างมันเถอะ, ไม่แคร์",
        "I don't care which movie we watch tonight.",
        "phr."
      ]
    ]
  },
  {
    "id": "oxp-a2-2",
    "label": "Phrase A2 · 2 (I guess–write sth down)",
    "deck": "Oxford Phrases · A2 · 2",
    "cards": [
      [
        "I guess",
        "ฉันเดาว่า, คิดว่านะ, คงงั้นมั้ง",
        "I guess we should order food instead of cooking.",
        "phr."
      ],
      [
        "I mean",
        "หมายถึงว่า, คือแบบว่า, ที่จริงแล้ว",
        "He is nice, I mean, a little shy sometimes.",
        "phr."
      ],
      [
        "I think so",
        "ฉันคิดว่าใช่, คิดว่าอย่างนั้นนะ",
        "Yes, I think so, because the store opens at nine.",
        "phr."
      ],
      [
        "I'm afraid...",
        "เกรงว่า..., ขอโทษด้วยนะแต่...",
        "I'm afraid there are no window seats left.",
        "phr."
      ],
      [
        "if necessary",
        "ถ้าจำเป็น, หากจำเป็น",
        "Please call me at night if necessary.",
        "phr."
      ],
      [
        "if you want to",
        "ถ้าคุณต้องการ, ถ้าอยากทำก็ทำเลย",
        "You can leave early today if you want to.",
        "phr."
      ],
      [
        "in business",
        "ในการทำธุรกิจ, ในวงการธุรกิจ",
        "Her family has been in business for thirty years.",
        "phr."
      ],
      [
        "in danger",
        "ตกอยู่ในอันตราย, เสี่ยงอันตราย",
        "Many sea turtles are now in danger.",
        "phr."
      ],
      [
        "in history",
        "ในประวัติศาสตร์, ตลอดกาล",
        "That match was one of the greatest in history.",
        "phr."
      ],
      [
        "in hospital",
        "นอนโรงพยาบาล, รักษาตัวในโรงพยาบาล",
        "My uncle spent three nights in hospital last month.",
        "phr."
      ],
      [
        "in love",
        "ตกหลุมรัก, มีความรัก",
        "You can tell from their smiles they are in love.",
        "idiom"
      ],
      [
        "in prison",
        "อยู่ในคุก, ติดคุก, ถูกจำคุก",
        "The thief spent two years in prison.",
        "phr."
      ],
      [
        "in some cases",
        "ในบางกรณี, บางครั้ง",
        "In some cases, you may need a written note.",
        "phr."
      ],
      [
        "in the air",
        "กลางอากาศ, ลอยอยู่ในอากาศ",
        "She tossed the beach ball high in the air.",
        "phr."
      ],
      [
        "in the end",
        "ในที่สุด, ท้ายที่สุด, ลงเอยว่า",
        "We waited an hour and went home in the end.",
        "phr."
      ],
      [
        "in the middle",
        "อยู่ตรงกลาง, กลางคัน",
        "There is a huge oak tree in the middle.",
        "phr."
      ],
      [
        "in the same way",
        "ในทำนองเดียวกัน, ด้วยวิธีเดียวกัน",
        "Cook the second pancake in the same way.",
        "phr."
      ],
      [
        "in this way",
        "ด้วยวิธีนี้, แบบนี้",
        "In this way, we save both time and money.",
        "phr."
      ],
      [
        "instead of",
        "แทนที่จะ, แทนที่",
        "Let's drink herbal tea instead of sweet soda.",
        "phr."
      ],
      [
        "it depends",
        "แล้วแต่กรณี, ขึ้นอยู่กับสถานการณ์",
        "It depends on the weather whether we drive there.",
        "phr."
      ],
      [
        "lead to sth",
        "นำไปสู่, ส่งผลให้เกิด",
        "Too much stress can lead to poor sleep.",
        "phr."
      ],
      [
        "less than...",
        "น้อยกว่า, ไม่ถึง",
        "We cleaned the garage in less than an hour.",
        "phr."
      ],
      [
        "let me know",
        "บอกฉันด้วยนะ, แจ้งให้รู้ด้วย",
        "Please let me know when you arrive safely.",
        "phr."
      ],
      [
        "Let me...",
        "ให้ฉัน..., ขอฉัน...หน่อยนะ",
        "Let me carry that heavy suitcase for you.",
        "phr."
      ],
      [
        "look after sb/sth/yourself",
        "ดูแล, เอาใจใส่, รักษา",
        "Could you look after my plants this weekend?",
        "phr. v."
      ],
      [
        "look back at sth",
        "มองย้อนกลับไปที่, หวนคิดถึง",
        "I smile whenever I look back at old photos.",
        "phr. v."
      ],
      [
        "look sth up",
        "ค้นหาข้อมูล, เปิดหาคำ",
        "If you do not know a word, look it up.",
        "phr. v."
      ],
      [
        "make a mistake",
        "ทำผิดพลาด, พลาดพลั้ง",
        "Do not worry if you make a mistake.",
        "phr."
      ],
      [
        "make money",
        "หาเงิน, ทำเงิน, สร้างรายได้",
        "She started selling handmade candles to make money.",
        "phr."
      ],
      [
        "make sense",
        "สมเหตุสมผล, เข้าใจได้, มีเหตุผล",
        "Your explanation makes sense to me now.",
        "idiom"
      ],
      [
        "make sure",
        "ทำให้แน่ใจ, เช็กให้ชัวร์",
        "Make sure you lock the back door before sleeping.",
        "idiom"
      ],
      [
        "much better",
        "ดีขึ้นมาก, ดีกว่าเยอะ",
        "My cold feels much better after resting today.",
        "phr."
      ],
      [
        "no way",
        "ไม่มีทาง, เป็นไปไม่ได้, ไม่เอาเด็ดขาด",
        "No way, did you really win the concert tickets?",
        "idiom"
      ],
      [
        "not at all",
        "ไม่เลยสักนิด, ไม่เป็นไรเลย, ด้วยความยินดี",
        "I am not tired at all after that hike.",
        "idiom"
      ],
      [
        "Oh dear",
        "ตายจริง, โอ้โห, แย่จัง",
        "Oh dear, I forgot to bring my umbrella again.",
        "phr."
      ],
      [
        "Oh well",
        "ช่างเถอะ, เอาเถอะ, ช่างมันแล้วกัน",
        "Oh well, we can always try again next week.",
        "phr."
      ],
      [
        "old friend",
        "เพื่อนเก่า, เพื่อนสมัยก่อน",
        "I bumped into an old friend at the market.",
        "phr."
      ],
      [
        "on earth",
        "บนโลกใบนี้, บนพื้นโลก",
        "The cheetah is the fastest land animal on earth.",
        "phr."
      ],
      [
        "on the ground",
        "บนพื้นดิน, บนพื้น",
        "Snow stayed on the ground until late April.",
        "phr."
      ],
      [
        "on the other side",
        "อีกฝั่งหนึ่ง, อีกด้านหนึ่ง",
        "Our hotel is on the other side of the river.",
        "phr."
      ],
      [
        "on the wall",
        "บนผนัง, บนกำแพง",
        "We hung a colorful painting on the wall.",
        "phr."
      ],
      [
        "on time",
        "ตรงเวลา, ทันเวลาพอดี",
        "Thankfully, the morning train arrived right on time.",
        "phr."
      ],
      [
        "on top of sth/sb",
        "อยู่ด้านบนของ, บนสุดของ",
        "I left your keys on top of the fridge.",
        "phr."
      ],
      [
        "one or two",
        "หนึ่งหรือสอง, สักนิดหน่อย, สองสาม",
        "I only need one or two apples for this pie.",
        "phr."
      ],
      [
        "ordinary people",
        "คนธรรมดา, ประชาชนทั่วไป",
        "The film tells a warm story about ordinary people.",
        "phr."
      ],
      [
        "pay attention",
        "ตั้งใจฟัง, ให้ความสนใจ, ระมัดระวัง",
        "Please pay attention while the guide explains the rules.",
        "phr."
      ],
      [
        "per hour",
        "ต่อชั่วโมง",
        "She earns twenty dollars per hour tutoring math.",
        "phr."
      ],
      [
        "pick sb/sth up",
        "หยิบขึ้นมา, ไปรับคน, ซื้อติดมือ",
        "Can you pick me up from work at six?",
        "phr. v."
      ],
      [
        "police officer",
        "เจ้าหน้าที่ตำรวจ, ตำรวจ",
        "A friendly police officer helped us find the street.",
        "phr."
      ],
      [
        "police station",
        "สถานีตำรวจ, โรงพัก",
        "They reported the lost passport at the police station.",
        "phr."
      ],
      [
        "public transport",
        "ระบบขนส่งสาธารณะ, รถโดยสารสาธารณะ",
        "Taking public transport is much cheaper than driving.",
        "phr."
      ],
      [
        "put sth on",
        "สวมใส่, เปิดเครื่อง, ทาครีม",
        "Put your warm coat on before going outside.",
        "phr. v."
      ],
      [
        "quite a lot",
        "ค่อนข้างมาก, เยอะพอสมควร",
        "It rained quite a lot during our beach holiday.",
        "phr."
      ],
      [
        "reasons why",
        "เหตุผลที่ว่าทำไม, สาเหตุที่",
        "There are many reasons why people love morning walks.",
        "phr."
      ],
      [
        "refer to sb/sth",
        "อ้างถึง, พูดถึง, หมายถึง",
        "In her speech, she referred to her childhood home.",
        "phr. v."
      ],
      [
        "report on sth",
        "รายงานข่าวเกี่ยวกับ, ทำรายงานเรื่อง",
        "The journalist was sent to report on the festival.",
        "phr."
      ],
      [
        "respond to sth/sb",
        "ตอบกลับ, ตอบสนองต่อ",
        "She did not respond to my text message yet.",
        "phr."
      ],
      [
        "save money",
        "เก็บเงิน, ประหยัดเงิน, ออมเงิน",
        "Cooking at home helps you save money every month.",
        "phr."
      ],
      [
        "science fiction",
        "นิยายวิทยาศาสตร์, หนังไซไฟ",
        "He loves reading classic science fiction novels at night.",
        "phr."
      ],
      [
        "search for sth/sb",
        "ค้นหา, ตามหา",
        "We spent an hour searching for a parking spot.",
        "phr."
      ],
      [
        "so that...",
        "เพื่อที่จะ, เพื่อว่า",
        "I set two alarms so that I wake up early.",
        "phr."
      ],
      [
        "solution to sth",
        "ทางออกของ, วิธีแก้ปัญหา",
        "We finally found a simple solution to the problem.",
        "phr."
      ],
      [
        "sort of sth",
        "ชนิดของ, ประเภทของ",
        "What sort of dessert would you like tonight?",
        "phr."
      ],
      [
        "sound like sb/sth",
        "ฟังดูเหมือน, น้ำเสียงคล้าย, ฟังดูเข้าท่า",
        "You sound like your father when you laugh.",
        "phr."
      ],
      [
        "start with sb/sth",
        "เริ่มต้นด้วย, เริ่มจาก",
        "Let's start with a warm cup of green tea.",
        "phr."
      ],
      [
        "such a/an...",
        "ช่างเป็น...เหลือเกิน, มากขนาดนั้น",
        "We had such a wonderful time at the beach.",
        "phr."
      ],
      [
        "take care of sb/sth/yourself",
        "ดูแล, เอาใจใส่, รักษา",
        "Please take care of yourself while traveling alone.",
        "idiom"
      ],
      [
        "take off",
        "เครื่องบินขึ้น, ออกตัว, พุ่งทะยาน",
        "Our plane will take off in ten minutes.",
        "phr. v."
      ],
      [
        "take part",
        "มีส่วนร่วม, เข้าร่วม",
        "Over fifty runners will take part this Sunday.",
        "idiom"
      ],
      [
        "take place",
        "เกิดขึ้น, จัดขึ้น",
        "The music festival will take place next Friday.",
        "idiom"
      ],
      [
        "take sth off",
        "ถอดออก, ถอดเสื้อผ้าหรือรองเท้า",
        "Please take your muddy boots off outside.",
        "phr. v."
      ],
      [
        "the best thing",
        "สิ่งที่ดีที่สุด, เรื่องที่ดีที่สุด",
        "Rest is the best thing when you feel sick.",
        "phr."
      ],
      [
        "the first thing",
        "สิ่งแรก, อย่างแรก",
        "Checking messages is the first thing I do daily.",
        "phr."
      ],
      [
        "the following...",
        "ดังต่อไปนี้, ถัดไปนี้",
        "Please answer the following questions on the form.",
        "phr."
      ],
      [
        "the important thing",
        "สิ่งสำคัญ, ประเด็นสำคัญ",
        "The important thing is that everyone arrived safely.",
        "phr."
      ],
      [
        "the other side of sth",
        "อีกฝั่งหนึ่งของ, อีกด้านของ",
        "A small bakery sits on the other side of the street.",
        "phr."
      ],
      [
        "the rest of sth",
        "ส่วนที่เหลือของ, ที่เหลือทั้งหมด",
        "Save the rest of the cake for tomorrow.",
        "phr."
      ],
      [
        "these days",
        "ทุกวันนี้, ช่วงนี้, สมัยนี้",
        "Everyone shops on their phones these days.",
        "phr."
      ],
      [
        "they say...",
        "เขาว่ากันว่า, มีคนพูดกันว่า",
        "They say breakfast is the most important meal.",
        "phr."
      ],
      [
        "throw sth away",
        "ทิ้งขยะ, โยนทิ้ง, ทิ้งขว้าง",
        "Do not throw those glass jars away yet.",
        "phr. v."
      ],
      [
        "turn sth off",
        "ปิดเครื่อง, ปิดไฟ, ปิดน้ำ",
        "Remember to turn the kitchen lights off first.",
        "phr. v."
      ],
      [
        "turn sth on",
        "เปิดเครื่อง, เปิดไฟ, เปิดน้ำ",
        "Please turn the fan on because it feels warm.",
        "phr. v."
      ],
      [
        "up and down",
        "ขึ้นๆ ลงๆ, เดินไปเดินมา",
        "The excited dog jumped up and down happily.",
        "phr."
      ],
      [
        "Why not...?",
        "ทำไมไม่...ล่ะ, เอาสิ, ทำไมจะไม่ได้",
        "Why not take the scenic train home today?",
        "phr."
      ],
      [
        "work out",
        "ออกกำลังกาย, ได้ผลดี, คิดคำนวณออก",
        "I try to work out before going to work.",
        "phr. v."
      ],
      [
        "worried about sb/sth",
        "กังวลเกี่ยวกับ, เป็นห่วง",
        "She looked worried about her upcoming math exam.",
        "phr."
      ],
      [
        "would love to do sth",
        "อยากทำ...มาก, ยินดีมากที่จะ",
        "We would love to visit your new house.",
        "phr."
      ],
      [
        "write sth down",
        "จดบันทึก, เขียนลงไป",
        "Wait, let me write your email address down.",
        "phr. v."
      ]
    ]
  },
  {
    "id": "oxp-b1-1",
    "label": "Phrase B1 · 1 (a bit more–in particular)",
    "deck": "Oxford Phrases · B1 · 1",
    "cards": [
      [
        "a bit more",
        "อีกนิดหน่อย, อีกเล็กน้อย, เพิ่มขึ้นอีกหน่อย",
        "Could you give me a bit more time to decide?",
        "phr."
      ],
      [
        "a bit of sth",
        "เล็กน้อย, นิดหน่อย, บางส่วน",
        "Adding a bit of lemon juice brightens up the soup.",
        "phr."
      ],
      [
        "a great deal",
        "อย่างมาก, จำนวนมาก, มากมาย",
        "She spent a great deal of money on house repairs.",
        "phr."
      ],
      [
        "a kind of...",
        "ชนิดหนึ่ง, ประเภทหนึ่ง, คล้ายกับ",
        "Jazz is a kind of music with strong rhythmic freedom.",
        "phr."
      ],
      [
        "a little bit",
        "นิดหน่อย, เล็กน้อย, นิดเดียว",
        "I felt a little bit nervous before my job interview.",
        "phr."
      ],
      [
        "a little more",
        "อีกนิดหน่อย, อีกเล็กน้อย",
        "Wait a little more before pouring sauce over the pasta.",
        "phr."
      ],
      [
        "a lot more",
        "อีกมาก, มากกว่าเดิมเยอะ, ขึ้นอีกมาก",
        "This new laptop runs a lot more smoothly than before.",
        "phr."
      ],
      [
        "a range of sth",
        "หลากหลาย, หลายแบบ, ช่วงของบางสิ่ง",
        "The clinic offers a range of free health screening services.",
        "phr."
      ],
      [
        "a variety of sth",
        "หลากหลายชนิด, นานาชนิด, หลายประเภท",
        "Our local market sells a variety of fresh tropical fruits.",
        "phr."
      ],
      [
        "access to sth",
        "สิทธิ์ในการเข้าถึง, การเข้าใช้, โอกาสได้รับ",
        "Every student needs reliable access to high-speed internet at home.",
        "phr."
      ],
      [
        "after all",
        "ท้ายที่สุดแล้ว, ทั้งที่จริงแล้ว, ก็นะ",
        "We didn't go camping after all because the storm hit.",
        "phr."
      ],
      [
        "aim to do sth",
        "ตั้งใจจะทำ, มุ่งหวังจะ, ตั้งเป้าไว้ว่า",
        "Our volunteers aim to plant two hundred trees this weekend.",
        "phr."
      ],
      [
        "along with sb/sth",
        "พร้อมกับ, ร่วมกับ, ไปด้วยกันกับ",
        "She brought her younger brother along with two close friends.",
        "phr."
      ],
      [
        "alternative to sth",
        "ทางเลือกแทน, ตัวเลือกอื่นสำหรับ",
        "Cycling is a healthy alternative to driving in heavy traffic.",
        "phr."
      ],
      [
        "and so on",
        "และอื่นๆ อีกมากมาย, เป็นต้น, อะไรทำนองนั้น",
        "Pack warm clothes, sturdy boots, wool socks, and so on.",
        "phr."
      ],
      [
        "apart from",
        "นอกจาก, นอกเหนือจาก, ยกเว้น",
        "Apart from a minor delay, our flight went very smoothly.",
        "phr."
      ],
      [
        "as if...",
        "ราวกับว่า, เหมือนกับว่า",
        "He acts as if he already owns the entire company.",
        "phr."
      ],
      [
        "as much as",
        "มากเท่ากับ, พอๆ กับ, ถึงแม้ว่า",
        "I enjoyed the movie just as much as my kids.",
        "phr."
      ],
      [
        "as soon as possible",
        "โดยเร็วที่สุดเท่าที่จะทำได้, เร็วที่สุด",
        "Please send me the signed contract as soon as possible.",
        "phr."
      ],
      [
        "at last",
        "ในที่สุด, เสียที",
        "After three months of waiting, my passport arrived at last.",
        "phr."
      ],
      [
        "at risk",
        "ตกอยู่ในความเสี่ยง, มีความเสี่ยง, สุ่มเสี่ยง",
        "Thousands of coastal homes remain at risk during severe storms.",
        "phr."
      ],
      [
        "at times",
        "เป็นบางครั้ง, ในบางเวลา, บางคราว",
        "Working from home can feel quite lonely at times.",
        "phr."
      ],
      [
        "attached to sb/sth",
        "ผูกพันกับ, แนบติดอยู่กับ, เกาะติดอยู่กับ",
        "Little Leo became deeply attached to his rescued street puppy.",
        "phr."
      ],
      [
        "be about to do sth",
        "กำลังจะทำ, จวนจะ, กำลังจะลงมือ",
        "Grab your coat, because the movie is about to start.",
        "phr."
      ],
      [
        "be going on",
        "กำลังเกิดขึ้น, ดำเนินอยู่, เป็นไปอยู่",
        "What on earth is going on in the hallway outside?",
        "phr. v."
      ],
      [
        "be known as sb/sth",
        "เป็นที่รู้จักในนาม, ได้รับฉายาว่า, รู้จักกันในชื่อ",
        "Bangkok is widely known as a vibrant street food capital.",
        "phr."
      ],
      [
        "be supposed to do sth",
        "ควรจะทำ, มีหน้าที่ต้องทำ, ถูกคาดหมายให้",
        "We are supposed to submit our tax forms before Friday.",
        "phr."
      ],
      [
        "benefit from sth",
        "ได้รับประโยชน์จาก, ได้ผลดีจาก",
        "Older adults can benefit greatly from gentle daily stretching exercises.",
        "phr."
      ],
      [
        "break up",
        "เลิกรา, แยกทางกัน, ปิดภาคเรียน",
        "Sam and Nina decided to break up after five years.",
        "phr. v."
      ],
      [
        "by the time (that)...",
        "เมื่อถึงเวลาที่, กว่าจะถึงตอนที่",
        "By the time we arrived, the concert had already begun.",
        "phr."
      ],
      [
        "can't afford sth",
        "ไม่มีเงินพอจ่าย, สู้ราคาไม่ไหว, ไม่มีเวลาพอ",
        "Most young couples simply can't afford downtown apartment rents today.",
        "phr."
      ],
      [
        "care for sb",
        "ดูแลเอาใจใส่, ห่วงใย, รักใคร่",
        "Her eldest daughter stayed home to care for her grandmother.",
        "phr. v."
      ],
      [
        "caused by sth",
        "เกิดจาก, มีสาเหตุมาจาก, เนื่องมาจาก",
        "The sudden power outage was caused by a fallen tree.",
        "phr."
      ],
      [
        "check sb/sth out",
        "ลองไปดู, ตรวจสอบดู, จ่ายเงินออกจากโรงแรม",
        "You should check that new rooftop bakery out this Sunday.",
        "phr. v."
      ],
      [
        "choose to do sth",
        "เลือกที่จะทำ, ตัดสินใจทำ",
        "Many remote workers choose to live in quieter coastal towns.",
        "phr."
      ],
      [
        "clean up",
        "เก็บกวาดทำความสะอาด, จัดการให้เรียบร้อย",
        "Everyone stayed behind to clean up after the birthday party.",
        "phr. v."
      ],
      [
        "click on sth",
        "คลิกที่, กดเลือกที่",
        "Click on the blue button to download your boarding pass.",
        "phr."
      ],
      [
        "come up with sth",
        "คิดหาออกมาได้, เสนอไอเดีย, หาทางออกได้",
        "Our design team needs to come up with fresh ideas.",
        "phr. v."
      ],
      [
        "compared with sth",
        "เมื่อเทียบกับ, เปรียบเทียบกับ",
        "Living costs here are fairly low compared with major capitals.",
        "phr."
      ],
      [
        "concentrate on sth",
        "จดจ่ออยู่กับ, มีสมาธิกับ, มุ่งเน้นไปที่",
        "Turn off your phone so you can concentrate on studying.",
        "phr."
      ],
      [
        "consist of sb/sth",
        "ประกอบด้วย, มีส่วนประกอบคือ",
        "The tasting menu consists of five seasonal courses and tea.",
        "phr. v."
      ],
      [
        "decide on sth",
        "ตัดสินใจเลือก, ตกลงใจเอา",
        "Have you decided on a wedding venue for next spring?",
        "phr. v."
      ],
      [
        "depending on",
        "ขึ้นอยู่กับ, แล้วแต่, ตามแต่",
        "Ticket prices vary widely depending on the travel season.",
        "phr."
      ],
      [
        "developing countries",
        "ประเทศกำลังพัฒนา",
        "Clean drinking water remains a priority in many developing countries.",
        "phr."
      ],
      [
        "due to sb/sth",
        "เนื่องจาก, เพราะ, ด้วยสาเหตุจาก",
        "Our morning flight was delayed due to thick coastal fog.",
        "phr."
      ],
      [
        "economic growth",
        "การเติบโตทางเศรษฐกิจ, การขยายตัวทางเศรษฐกิจ",
        "Strong tourism helped drive steady economic growth across the region.",
        "phr."
      ],
      [
        "end up",
        "ลงเอยด้วยการ, จบลงที่, สุดท้ายกลายเป็น",
        "We got lost downtown and ended up taking a taxi.",
        "phr. v."
      ],
      [
        "even if",
        "ถึงแม้ว่า, ต่อให้, แม้ว่า",
        "We are going hiking tomorrow even if it rains lightly.",
        "phr."
      ],
      [
        "even though",
        "ทั้งๆ ที่, แม้ว่า",
        "He kept smiling warmly even though he felt completely exhausted.",
        "phr."
      ],
      [
        "exactly the same",
        "เหมือนกันเป๊ะ, เหมือนกันทุกประการ",
        "Our two suitcases looked exactly the same at baggage claim.",
        "phr."
      ],
      [
        "experience in sth",
        "ประสบการณ์ด้าน, ความชำนาญใน",
        "The hospital wants nurses with experience in emergency care.",
        "phr."
      ],
      [
        "fail to do sth",
        "ล้มเหลวในการทำ, ไม่สามารถทำได้, ละเลยไม่ทำ",
        "The brake warning light failed to turn off after repairs.",
        "phr."
      ],
      [
        "fall asleep",
        "ผล็อยหลับไป, นอนหลับไป",
        "He was so tired that he fell asleep during dinner.",
        "phr."
      ],
      [
        "far more",
        "มากกว่ามาก, ยิ่งกว่าเดิมมาก",
        "This second draft sounds far more convincing than the first.",
        "phr."
      ],
      [
        "far too",
        "มากเกินไป, เกินไปมาก",
        "You added far too much salt to that tomato soup.",
        "phr."
      ],
      [
        "fed up",
        "เบื่อหน่ายเต็มทน, เอือมระอา, เหลืออด",
        "I am completely fed up with waiting in slow traffic.",
        "idiom"
      ],
      [
        "for a while",
        "สักพักหนึ่ง, ชั่วระยะหนึ่ง, สักครู่",
        "Let us sit under the shade and rest for a while.",
        "phr."
      ],
      [
        "for free",
        "ฟรี, โดยไม่เสียค่าใช้จ่าย, ให้เปล่า",
        "Children under six can enter the science museum for free.",
        "phr."
      ],
      [
        "for instance",
        "ยกตัวอย่างเช่น, ตัวอย่างเช่น",
        "Many fruits, for instance mangoes and papayas, grow well here.",
        "phr."
      ],
      [
        "for life",
        "ตลอดชีวิต, ชั่วชีวิต",
        "That childhood trip left us as best friends for life.",
        "phr."
      ],
      [
        "for long",
        "เป็นเวลานาน, นาน",
        "Don't stay out in the freezing winter wind for long.",
        "phr."
      ],
      [
        "for some time",
        "เป็นระยะเวลาหนึ่ง, มาระยะหนึ่งแล้ว",
        "We have been planning this family reunion for some time.",
        "phr."
      ],
      [
        "get on with sb",
        "เข้ากันได้ดีกับ, ลงรอยกับ, ผูกมิตรกับ",
        "Do you get on with your new roommates at college?",
        "phr. v."
      ],
      [
        "get to know sb",
        "ทำความรู้จักกับ, ค่อยๆ รู้จัก",
        "It takes a few months to truly get to know someone.",
        "phr."
      ],
      [
        "get used to sth",
        "เริ่มเคยชินกับ, ปรับตัวเข้ากับ, คุ้นเคยกับ",
        "It took weeks to get used to waking up early.",
        "phr."
      ],
      [
        "global warming",
        "ภาวะโลกร้อน",
        "Melting glaciers are clear warning signs of accelerating global warming.",
        "phr."
      ],
      [
        "go ahead",
        "เชิญเลย, ลงมือทำเลย, เดินหน้าต่อ",
        "Go ahead and order dessert while I park the car.",
        "phr. v."
      ],
      [
        "go wrong",
        "เกิดข้อผิดพลาด, ผิดแผน, พังเสียหาย",
        "Something must have gone wrong with the printer connection again.",
        "idiom"
      ],
      [
        "growth in sth",
        "การเพิ่มขึ้นของ, การขยายตัวใน",
        "Analysts noticed steady growth in online grocery orders this year.",
        "phr."
      ],
      [
        "have no idea",
        "ไม่รู้เรื่องเลย, นึกไม่ออกเลย, ไม่มีข้อมูลเลย",
        "I honestly have no idea where I left my keys.",
        "idiom"
      ],
      [
        "have sth in common",
        "มีสิ่งที่เหมือนกัน, มีจุดร่วมกัน",
        "Though raised far apart, they have many interests in common.",
        "idiom"
      ],
      [
        "hear of sb/sth",
        "เคยได้ยินชื่อ, รู้ข่าวคราวของ",
        "Have you ever heard of that tiny island near Phuket?",
        "phr. v."
      ],
      [
        "heart disease",
        "โรคหัวใจ",
        "Regular brisk walking lowers your long-term risk of heart disease.",
        "phr."
      ],
      [
        "high street",
        "ย่านการค้าหลัก, ถนนสายช็อปปิ้งประจำเมือง",
        "Several independent bookstores reopened along the high street this spring.",
        "phr."
      ],
      [
        "higher education",
        "การศึกษาระดับอุดมศึกษา, ระดับมหาวิทยาลัย",
        "More scholarships help low-income students afford higher education today.",
        "phr."
      ],
      [
        "I wonder if...",
        "ฉันสงสัยว่า, ไม่ทราบว่าพอจะ, อยากรู้ว่า",
        "I wonder if we could move our meeting to Tuesday.",
        "phr."
      ],
      [
        "If I were you",
        "ถ้าฉันเป็นคุณ, หากเป็นฉัน",
        "If I were you, I would double-check the flight schedule.",
        "phr."
      ],
      [
        "in a way that...",
        "ในลักษณะที่, ในแบบที่ทำให้",
        "Try to phrase feedback in a way that encourages people.",
        "phr."
      ],
      [
        "in addition",
        "นอกจากนี้, ยิ่งไปกว่านั้น, เพิ่มเติม",
        "The apartment includes free parking and, in addition, gym access.",
        "phr."
      ],
      [
        "in case...",
        "เผื่อว่า, ในกรณีที่, เผื่อไว้ก่อน",
        "Pack a light folding umbrella in case it rains later.",
        "phr."
      ],
      [
        "in charge of sb/sth",
        "รับผิดชอบดูแล, มีอำนาจควบคุม, เป็นหัวหน้า",
        "Maya is in charge of training all new summer interns.",
        "phr."
      ],
      [
        "in contrast",
        "ในทางตรงกันข้าม, เมื่อเปรียบเทียบกันแล้ว",
        "Last winter was mild; in contrast, this January feels freezing.",
        "phr."
      ],
      [
        "in favour of sb/sth",
        "เห็นด้วยกับ, สนับสนุน, เข้าข้าง",
        "Most council members voted in favour of building more parks.",
        "phr."
      ],
      [
        "in general",
        "โดยทั่วไป, โดยรวมแล้ว, ส่วนใหญ่",
        "In general, mornings are much quieter than busy weekday afternoons.",
        "phr."
      ],
      [
        "in order of sth",
        "เรียงตามลำดับของ, จัดเรียงตาม",
        "Please arrange the student folders in order of last name.",
        "phr."
      ],
      [
        "in order to do sth",
        "เพื่อที่จะทำ, โดยมีจุดประสงค์เพื่อ",
        "We left an hour early in order to beat traffic.",
        "phr."
      ],
      [
        "in other words",
        "กล่าวอีกนัยหนึ่งคือ, พูดง่ายๆ ก็คือ, อีกความหมายหนึ่ง",
        "Sales dropped sharply; in other words, we missed our target.",
        "phr."
      ],
      [
        "in particular",
        "โดยเฉพาะอย่างยิ่ง, เป็นพิเศษ",
        "I love spicy Thai soups, in particular classic tom yum.",
        "phr."
      ]
    ]
  },
  {
    "id": "oxp-b1-2",
    "label": "Phrase B1 · 2 (in public–you see)",
    "deck": "Oxford Phrases · B1 · 2",
    "cards": [
      [
        "in public",
        "ในที่สาธารณะ, ต่อหน้าคนอื่น, อย่างเปิดเผย",
        "She felt shy about singing her original songs in public.",
        "phr."
      ],
      [
        "in recent years",
        "ในช่วงหลายปีที่ผ่านมา, ไม่กี่ปีมานี้",
        "Solar panels have become much cheaper in recent years.",
        "phr."
      ],
      [
        "in response to sth",
        "เพื่อตอบสนองต่อ, เพื่อรับมือกับ, ตอบกลับ",
        "The store extended evening hours in response to customer requests.",
        "phr."
      ],
      [
        "in terms of sth",
        "ในแง่ของ, ในด้านของ, เมื่อพูดถึงเรื่อง",
        "In terms of battery life, this phone easily wins.",
        "phr."
      ],
      [
        "in the case of sth",
        "ในกรณีของ, สำหรับเรื่อง",
        "In the case of severe weather, outdoor classes move indoors.",
        "phr."
      ],
      [
        "in the form of sb/sth",
        "ในรูปแบบของ, ในลักษณะที่เป็น",
        "Bonus rewards will arrive in the form of gift vouchers.",
        "phr."
      ],
      [
        "in the way (that)...",
        "ในแบบที่, ในลักษณะเดียวกับที่",
        "Nothing changed in the way that travelers book flights today.",
        "phr."
      ],
      [
        "in this case",
        "ในกรณีนี้, ถ้าเป็นแบบนี้",
        "In this case, waiting another week seems like the safest choice.",
        "phr."
      ],
      [
        "in time",
        "ทันเวลาพอดี, เมื่อเวลาผ่านไป, ในไม่ช้า",
        "We reached the station just in time for our train.",
        "phr."
      ],
      [
        "in touch",
        "ติดต่อกันอยู่, พูดคุยกัน, รับรู้ข่าวสาร",
        "Let us stay in touch even after graduation next month.",
        "idiom"
      ],
      [
        "leave sb/sth out",
        "ตัดออก, ละเว้นไม่ใส่, ทิ้งไว้นอกกลุ่ม",
        "Don't leave your contact phone number out on forms.",
        "phr. v."
      ],
      [
        "likely to do sth",
        "มีแนวโน้มที่จะ, น่าจะ, คงจะ",
        "Prices are likely to rise again before the holiday season.",
        "phr."
      ],
      [
        "look forward to sth",
        "ตั้งตารอคอย, รอคอยอย่างใจจดใจจ่อ",
        "I really look forward to seeing my cousins next week.",
        "phr. v."
      ],
      [
        "look out",
        "ระวัง, ระมัดระวังอันตราย",
        "Look out, there is broken glass near the back door!",
        "phr. v."
      ],
      [
        "make a difference",
        "สร้างความเปลี่ยนแปลง, ส่งผลดี, มีความหมายสำคัญ",
        "Even small daily donations can make a real difference locally.",
        "idiom"
      ],
      [
        "make sth up",
        "กุเรื่องขึ้นมา, แต่งเรื่อง, ชดเชยให้",
        "Did you actually see that deer, or make it up?",
        "phr. v."
      ],
      [
        "manage to do sth",
        "ทำจนสำเร็จได้, พยายามจนทำได้",
        "Despite the heavy snow, they managed to reach the cabin.",
        "phr."
      ],
      [
        "mean to do sth",
        "ตั้งใจจะทำ, เจตนาจะทำ",
        "Sorry I forgot to call; I really meant to earlier.",
        "phr."
      ],
      [
        "more and more",
        "มากขึ้นเรื่อยๆ, ยิ่งวันยิ่งมากขึ้น",
        "More and more neighbors are riding bicycles to the station.",
        "phr."
      ],
      [
        "move on",
        "ก้าวต่อไป, เดินหน้าต่อ, เปลี่ยนเรื่อง",
        "After finishing that topic, let's move on to the budget.",
        "phr. v."
      ],
      [
        "no longer",
        "ไม่อีกต่อไปแล้ว, เลิกเป็นแล้ว",
        "That old corner cafe is no longer open on Mondays.",
        "phr."
      ],
      [
        "no more than...",
        "ไม่เกินไปกว่า, เพียงแค่, เท่านั้นเอง",
        "Each passenger may carry no more than one small suitcase.",
        "phr."
      ],
      [
        "not even",
        "ไม่แม้กระทั่ง, แม้แต่นิดเดียวก็ยังไม่, ไม่เลยสักนิด",
        "He did not even check his phone all afternoon today.",
        "phr."
      ],
      [
        "not necessarily",
        "ไม่จำเป็นเสมอไป, ไม่แน่ว่าจะต้อง",
        "An expensive restaurant is not necessarily better than street stalls.",
        "phr."
      ],
      [
        "not only",
        "ไม่เพียงแต่, ไม่ใช่แค่",
        "She not only speaks Japanese fluently, she also writes well.",
        "phr."
      ],
      [
        "on a regular basis",
        "เป็นประจำ, อย่างสม่ำเสมอ",
        "We back up all company files on a regular basis.",
        "phr."
      ],
      [
        "on my own",
        "ด้วยตัวคนเดียว, ตามลำพัง, ด้วยตัวเอง",
        "I finally assembled the entire bookshelf completely on my own.",
        "idiom"
      ],
      [
        "on the other hand",
        "ในทางกลับกัน, อีกด้านหนึ่ง, แต่อีกแง่หนึ่ง",
        "The flat is small; on the other hand, rent is cheap.",
        "idiom"
      ],
      [
        "on the street",
        "บนท้องถนน, ข้างถนน, เร่ร่อนไร้บ้าน",
        "Street musicians played jazz on the street outside the station.",
        "phr."
      ],
      [
        "on the way",
        "กำลังเดินทางมา, ระหว่างทาง, กำลังจะมาถึง",
        "Stay right there, because our delivery pizza is on the way.",
        "phr."
      ],
      [
        "or something",
        "หรืออะไรทำนองนั้น, หรืออะไรสักอย่าง",
        "Would you like iced tea, sparkling water, or something cold?",
        "phr."
      ],
      [
        "or two",
        "สักหนึ่งหรือสอง, นิดหน่อย, ไม่กี่",
        "Wait here for a minute or two while I check.",
        "phr."
      ],
      [
        "ought to",
        "ควรจะ, น่าจะ",
        "You ought to apologize before the small misunderstanding grows worse.",
        "phr."
      ],
      [
        "out there",
        "ข้างนอกนั้น, ในโลกกว้าง, ที่มีอยู่ทั่วไป",
        "There are plenty of great remote jobs out there now.",
        "idiom"
      ],
      [
        "over the years",
        "ตลอดหลายปีที่ผ่านมา, นานวันเข้า",
        "Our quiet village has grown much busier over the years.",
        "phr."
      ],
      [
        "over time",
        "เมื่อเวลาผ่านไป, ตามกาลเวลา, นานๆ ไป",
        "Good friendships usually grow deeper and stronger over time.",
        "phr."
      ],
      [
        "participate in sth",
        "เข้าร่วมใน, มีส่วนร่วมกับ",
        "Over three hundred runners will participate in Sunday's charity race.",
        "phr."
      ],
      [
        "point of view",
        "มุมมอง, ทัศนคติ, ความคิดเห็น",
        "Try looking at the problem from your customer's point of view.",
        "phr."
      ],
      [
        "point out",
        "ชี้ให้เห็น, ทักท้วง, ชี้แจง",
        "The editor quickly pointed out two spelling mistakes on page one.",
        "phr. v."
      ],
      [
        "prepared to do sth",
        "เต็มใจที่จะทำ, พร้อมที่จะทำ",
        "Are you prepared to relocate abroad for a two-year project?",
        "phr."
      ],
      [
        "primary school",
        "โรงเรียนประถมศึกษา, ชั้นประถม",
        "My daughter started learning English in primary school last year.",
        "phr."
      ],
      [
        "prime minister",
        "นายกรัฐมนตรี",
        "The prime minister announced a new budget plan this morning.",
        "phr."
      ],
      [
        "put sth up",
        "ติดป้ายหรือรูป, ขึ้นราคา, ก่อสร้างหรือกางขึ้น",
        "Volunteers helped put colorful posters up across the campus.",
        "phr. v."
      ],
      [
        "quite a...",
        "ค่อนข้างจะ, น่าทึ่งพอสมควร, ไม่ธรรมดาเลย",
        "Building that wooden boat alone was quite a huge challenge.",
        "phr."
      ],
      [
        "raise money",
        "ระดมทุน, เรี่ยไรเงิน, หาเงินบริจาค",
        "Our neighborhood bake sale helped raise money for stray dogs.",
        "phr."
      ],
      [
        "rather than",
        "มากกว่าที่จะ, แทนที่จะ",
        "Let us take the morning train rather than driving downtown.",
        "phr."
      ],
      [
        "reaction to sth",
        "ปฏิกิริยาตอบสนองต่อ, ท่าทีที่มีต่อ",
        "Fans had a strongly positive reaction to the trailer release.",
        "phr."
      ],
      [
        "relate to sth/sb",
        "เชื่อมโยงกับ, เข้าใจความรู้สึกของ, เกี่ยวข้องกับ",
        "Many young readers easily relate to the main character's struggles.",
        "phr. v."
      ],
      [
        "related to sth/sb",
        "เกี่ยวข้องกับ, สัมพันธ์กับ, เป็นญาติกับ",
        "Frequent headaches are often closely related to poor sleep habits.",
        "phr."
      ],
      [
        "respect for sb/sth",
        "ความเคารพต่อ, การให้เกียรติ",
        "Great teachers earn genuine respect for their patience and fairness.",
        "phr."
      ],
      [
        "result in sth",
        "ส่งผลให้เกิด, นำไปสู่, ทำให้เกิด",
        "Skipping regular maintenance can result in costly engine damage later.",
        "phr."
      ],
      [
        "rise in sth",
        "การเพิ่มขึ้นของ, อัตราที่สูงขึ้นของ",
        "Cities saw a sharp rise in bicycle commuting last summer.",
        "phr."
      ],
      [
        "run out",
        "หมดลง, หมดอายุ, สิ้นสุดลง",
        "Hurry and print the tickets before our ink runs out.",
        "phr. v."
      ],
      [
        "run out of sth",
        "ใช้จนหมด, ขาดแคลน, ไม่มีเหลือแล้ว",
        "We ran out of coffee beans right before breakfast.",
        "phr. v."
      ],
      [
        "search engine",
        "เครื่องมือค้นหาข้อมูลทางอินเทอร์เน็ต, เว็บค้นหา",
        "Most shoppers use a search engine to compare laptop prices.",
        "phr."
      ],
      [
        "secondary school",
        "โรงเรียนมัธยมศึกษา, ชั้นมัธยม",
        "Students choose their science electives upon entering secondary school.",
        "phr."
      ],
      [
        "set sth up",
        "จัดตั้ง, ติดตั้ง, วางระบบ",
        "He helped me set my new wireless printer up cleanly.",
        "phr. v."
      ],
      [
        "slow down",
        "ชะลอความเร็ว, ลดลง, พักผ่อนให้ช้าลง",
        "Drivers must slow down whenever they pass a school zone.",
        "phr. v."
      ],
      [
        "so far",
        "จนถึงตอนนี้, มาจนถึงปัจจุบัน",
        "So far, our team has won every single home match.",
        "idiom"
      ],
      [
        "some kind of...",
        "อะไรสักอย่าง, ชนิดใดชนิดหนึ่ง",
        "That loud buzzing sounds like some kind of broken fan.",
        "phr."
      ],
      [
        "succeed in doing sth",
        "ทำได้สำเร็จ, ประสบความสำเร็จในการทำ",
        "After three attempts, Maya finally succeeded in passing the exam.",
        "phr."
      ],
      [
        "suffer from sth",
        "ทรมานจาก, เจ็บป่วยด้วย, ประสบปัญหาจาก",
        "Millions of office workers suffer from mild lower back pain.",
        "phr."
      ],
      [
        "sure to do sth",
        "มั่นใจได้เลยว่าจะ, แน่นอนว่าจะ",
        "With her strong experience, Maya is sure to get hired.",
        "phr."
      ],
      [
        "take sth up",
        "ตอบรับข้อเสนอ, หยิบยกมาทำต่อ, เริ่มทำกิจกรรม",
        "Let us take this important budget question up tomorrow morning.",
        "phr. v."
      ],
      [
        "take sth/sb on",
        "รับหน้าที่หรือรับงาน, รับเข้าทำงาน, สู้กับ",
        "Our small studio cannot take another major project on now.",
        "phr. v."
      ],
      [
        "take up sth",
        "ใช้เวลา, กินเนื้อที่, กินพื้นที่",
        "This bulky oak wardrobe takes up half the guest bedroom.",
        "phr. v."
      ],
      [
        "tell the truth",
        "พูดความจริง, บอกตามตรง",
        "To tell the truth, I completely forgot about Tuesday's meeting.",
        "phr."
      ],
      [
        "tend to do sth",
        "มักจะ, มีแนวโน้มที่จะ",
        "Cats tend to sleep much longer during cold rainy afternoons.",
        "phr."
      ],
      [
        "thanks to sb/sth",
        "ต้องขอบคุณ, ด้วยความช่วยเหลือของ, เพราะ",
        "Thanks to your quick warning, nobody stepped on the glass.",
        "phr."
      ],
      [
        "that's it",
        "แค่นี้แหละ, ใช่เลย, จบลงแค่นี้",
        "Press the green switch once, and that's it, you're done!",
        "idiom"
      ],
      [
        "the case",
        "ความจริง, กรณีที่เป็นจริง, เช่นนั้น",
        "People think coffee dehydrates you, though that isn't the case.",
        "idiom"
      ],
      [
        "the fact that...",
        "ข้อเท็จจริงที่ว่า, ความจริงที่ว่า",
        "Despite the fact that it poured, everyone stayed cheerful outside.",
        "phr."
      ],
      [
        "those who...",
        "บรรดาผู้ที่, คนที่",
        "Scholarships will support those who show strong community leadership.",
        "phr."
      ],
      [
        "to do with sb/sth",
        "เกี่ยวข้องกับ, เป็นเรื่องของ",
        "His grumpy mood probably has something to do with exhaustion.",
        "idiom"
      ],
      [
        "together with",
        "ร่วมกับ, พร้อมด้วย, ควบคู่ไปกับ",
        "Please submit your resume together with two signed reference letters.",
        "phr."
      ],
      [
        "too bad",
        "น่าเสียดายจัง, แย่จัง, น่าเสียใจ",
        "It is too bad the outdoor concert got rained out.",
        "idiom"
      ],
      [
        "try and...",
        "ลองทำดู, พยายามที่จะ",
        "Please try and finish those safety checks before noon today.",
        "phr."
      ],
      [
        "turn out",
        "ปรากฏว่า, กลายเป็นว่า, ผลลัพธ์ออกมาเป็น",
        "The spicy curry turned out much tastier than I expected.",
        "phr. v."
      ],
      [
        "turn sth up",
        "เร่งเสียงให้ดังขึ้น, เพิ่มความแรงหรือความร้อน",
        "Could you turn the radio volume up for this song?",
        "phr. v."
      ],
      [
        "unable to do sth",
        "ไม่สามารถทำได้, ไม่อาจทำได้",
        "Because of a sprained ankle, Dan was unable to hike.",
        "phr."
      ],
      [
        "up to sth",
        "กำลังแอบทำบางอย่าง, รับมือไหว, มากถึงระดับ",
        "I wonder what those noisy kids are up to now.",
        "phr."
      ],
      [
        "way of life",
        "วิถีชีวิต, รูปแบบการดำเนินชีวิต",
        "Moving to a small farm completely changed their way of life.",
        "phr."
      ],
      [
        "well known",
        "เป็นที่รู้จักดี, มีชื่อเสียงโด่งดัง",
        "That seaside bakery is well known for its warm croissants.",
        "phr."
      ],
      [
        "work on sth",
        "ทุ่มเททำ, พัฒนาปรับปรุง, ทำงานเกี่ยวกับ",
        "I need to work on my pronunciation before the presentation.",
        "phr. v."
      ],
      [
        "work sth out",
        "คิดคำนวณออก, หาทางแก้ได้, ทำความเข้าใจได้",
        "Give us five minutes to work the seating plan out.",
        "phr. v."
      ],
      [
        "wrong with sb/sth",
        "ผิดปกติกับ, มีปัญหากับ",
        "Something seems wrong with the air conditioner in room four.",
        "phr."
      ],
      [
        "you see",
        "คุณเข้าใจไหม, ก็อย่างที่รู้กัน, ที่จริงแล้วคือ",
        "I cannot leave early today; you see, my boss called.",
        "idiom"
      ]
    ]
  },
  {
    "id": "oxp-b2-1",
    "label": "Phrase B2 · 1 (a bit of a...–go through sth)",
    "deck": "Oxford Phrases · B2 · 1",
    "cards": [
      [
        "a bit of a...",
        "ค่อนข้างจะเป็น, ออกจะเป็นอยู่บ้าง, ตัวปัญหาเล็กน้อย",
        "Driving downtown on Friday becomes a bit of a nightmare.",
        "idiom"
      ],
      [
        "a means of sth",
        "วิธีการ, ช่องทางในการ, เครื่องมือสำหรับ",
        "Public buses provide an affordable means of daily city transport.",
        "phr."
      ],
      [
        "account for sth",
        "คิดเป็นสัดส่วน, อธิบายสาเหตุของ, ชี้แจงที่มา",
        "Online purchases now account for nearly half of retail sales.",
        "phr. v."
      ],
      [
        "accused of sth",
        "ถูกกล่าวหาว่า, ตกเป็นผู้ต้องสงสัยใน",
        "The former manager was accused of leaking private client data.",
        "phr."
      ],
      [
        "act as sth",
        "ทำหน้าที่เป็น, ปฏิบัติตัวเสมือน, มีบทบาทเป็น",
        "Thick trees around the house act as a natural windbreak.",
        "phr."
      ],
      [
        "aimed at doing sth",
        "มุ่งเป้าเพื่อจะทำ, มีวัตถุประสงค์ในการทำ",
        "This campaign is aimed at reducing plastic waste in schools.",
        "phr."
      ],
      [
        "aimed at sb",
        "มุ่งเน้นไปที่กลุ่มคน, ออกแบบมาเพื่อ, พุ่งเป้าไปที่",
        "These beginner workshops are aimed at adults changing careers.",
        "phr."
      ],
      [
        "all the way",
        "ตลอดเส้นทาง, จนสุดทาง, อย่างเต็มที่",
        "Our loyal fans cheered loudly all the way to victory.",
        "idiom"
      ],
      [
        "appeal to sb",
        "ดึงดูดใจ, เป็นที่ถูกใจ, ขอร้องต่อ",
        "Bright packaging usually appeals to younger shoppers in grocery stores.",
        "phr."
      ],
      [
        "apply to sb/sth",
        "บังคับใช้กับ, เกี่ยวข้องกับ, ใช้ได้กับ",
        "The new parking fee rules apply to all weekend visitors.",
        "phr."
      ],
      [
        "as a whole",
        "โดยรวมทั้งหมด, ในภาพรวม",
        "Taken as a whole, the new policy has worked well.",
        "phr."
      ],
      [
        "as far as I am concerned",
        "ในความคิดของฉัน, สำหรับฉันแล้ว, เท่าที่ฉันเห็น",
        "As far as I am concerned, honesty matters most here.",
        "phr."
      ],
      [
        "as follows...",
        "ดังต่อไปนี้, มีรายละเอียดดังนี้",
        "Our three main priorities for next quarter are as follows.",
        "phr."
      ],
      [
        "as for sb/sth",
        "ส่วนเรื่องของ, สำหรับ, ในส่วนของ",
        "As for dinner tonight, let us order warm Thai noodles.",
        "phr."
      ],
      [
        "as long as...",
        "ตราบใดที่, ขอเพียงแค่, โดยมีเงื่อนไขว่า",
        "You can borrow my camera as long as you're careful.",
        "phr."
      ],
      [
        "as though...",
        "ราวกับว่า, ดูเหมือนกับว่า",
        "She spoke softly as though she were guarding a secret.",
        "phr."
      ],
      [
        "associated with sth",
        "เกี่ยวข้องกับ, เชื่อมโยงกับ, มักมาคู่กับ",
        "High stress levels are often associated with chronic sleep loss.",
        "phr."
      ],
      [
        "at once",
        "ในทันทีทันใด, พร้อมกันในคราวเดียว",
        "When the fire alarm rang, everyone left the building at once.",
        "phr."
      ],
      [
        "at present",
        "ในขณะนี้, ในปัจจุบัน, ตอนนี้",
        "At present, only three engineers work on the night shift.",
        "phr."
      ],
      [
        "at some point",
        "สักวันหนึ่ง, ในจุดใดจุดหนึ่ง, สักช่วงเวลาหนึ่ง",
        "Every young traveler runs into unexpected delays at some point.",
        "phr."
      ],
      [
        "at the end of the day",
        "ท้ายที่สุดแล้ว, เมื่อพิจารณาถึงที่สุด, สรุปแล้ว",
        "At the end of the day, your health comes first.",
        "idiom"
      ],
      [
        "at this point",
        "ณ จุดนี้, ในตอนนี้, ถึงขั้นนี้แล้ว",
        "At this point, changing the venue would cost too much.",
        "phr."
      ],
      [
        "at this stage",
        "ในขั้นตอนนี้, ในระยะนี้",
        "At this stage, we only have rough estimates for costs.",
        "phr."
      ],
      [
        "awareness of sth",
        "ความตระหนักรู้เรื่อง, การรับรู้เกี่ยวกับ",
        "Community classes helped raise awareness of recycling across the town.",
        "phr."
      ],
      [
        "back sb/sth up",
        "สนับสนุนให้ท้าย, ยืนยันคำพูด, สำรองข้อมูล",
        "Make sure you back important photos up before updating software.",
        "phr. v."
      ],
      [
        "be charged with sth",
        "ถูกตั้งข้อหา, ได้รับมอบหมายหน้าที่",
        "Two suspects were officially charged with theft after the investigation.",
        "phr."
      ],
      [
        "be derived from sth",
        "มีที่มาจาก, สกัดได้จาก, พัฒนามาจาก",
        "Many modern English words are derived from ancient Latin roots.",
        "phr."
      ],
      [
        "be expected to do sth",
        "ถูกคาดหวังให้ทำ, คาดว่าจะ, มีกำหนดว่าจะ",
        "Heavy monsoon rain is expected to arrive later this evening.",
        "phr."
      ],
      [
        "be known to do sth",
        "เป็นที่รู้กันว่ามักจะ, เคยมีประวัติว่าทำ",
        "Wild bears are known to visit camp kitchens at night.",
        "phr."
      ],
      [
        "be made up of sth",
        "ประกอบไปด้วย, มีสมาชิกคือ",
        "The review panel is made up of five senior doctors.",
        "phr."
      ],
      [
        "be surrounded by sb/sth",
        "ถูกล้อมรอบด้วย, รายล้อมไปด้วย",
        "Our quiet wooden cabin was surrounded by tall pine trees.",
        "phr."
      ],
      [
        "be to blame",
        "เป็นต้นเหตุ, เป็นฝ่ายผิด, ต้องรับผิดชอบ",
        "Careless wiring was ultimately to blame for the warehouse fire.",
        "idiom"
      ],
      [
        "both sides",
        "ทั้งสองฝ่าย, ทั้งสองด้าน",
        "Both sides agreed to pause negotiations until Monday morning.",
        "phr."
      ],
      [
        "bound to do sth",
        "ย่อมจะต้อง, แน่นอนว่าจะ, หลีกเลี่ยงไม่ได้ที่จะ",
        "Practice every day, and your speaking is bound to improve.",
        "phr."
      ],
      [
        "bring sb up",
        "เลี้ยงดูจนเติบโต, อบรมสั่งสอน",
        "Her grandparents worked hard to bring three grandchildren up together.",
        "phr. v."
      ],
      [
        "by now",
        "ป่านนี้แล้ว, จนถึงตอนนี้",
        "The morning parcel should have reached your office by now.",
        "phr."
      ],
      [
        "call for sth",
        "เรียกร้องต้องการ, จำเป็นต้องใช้, เหมาะแก่การ",
        "Solving this urgent water shortage calls for immediate city action.",
        "phr. v."
      ],
      [
        "case study",
        "กรณีศึกษา",
        "Our professor shared a fascinating case study on urban farming.",
        "phr."
      ],
      [
        "come across sb/sth",
        "บังเอิญพบเจอ, พบเข้าโดยบังเอิญ",
        "I came across an old childhood photo while cleaning drawers.",
        "phr. v."
      ],
      [
        "come true",
        "กลายเป็นความจริง, สมหวังดั่งตั้งใจ",
        "Opening her own neighborhood bakery made a lifelong dream come true.",
        "idiom"
      ],
      [
        "concerned about sth",
        "กังวลใจเกี่ยวกับ, เป็นห่วงเรื่อง",
        "Many local parents are concerned about speeding cars near schools.",
        "phr."
      ],
      [
        "concerned with sth",
        "เกี่ยวข้องกับเรื่อง, มุ่งเน้นในเรื่อง, ใส่ใจเรื่อง",
        "This biology chapter is mainly concerned with marine food chains.",
        "phr."
      ],
      [
        "confidence in sb/sth",
        "ความเชื่อมั่นใน, ความไว้วางใจใน",
        "Voters gradually lost confidence in the committee's spending promises.",
        "phr."
      ],
      [
        "contribute to sth",
        "มีส่วนทำให้เกิด, บริจาคสมทบ, ส่งเสริมให้เกิด",
        "Lack of sunlight can contribute to lower energy during winter.",
        "phr."
      ],
      [
        "control over sb/sth",
        "อำนาจควบคุมเหนือ, การกำกับดูแล",
        "Managers should give teams more control over their daily schedules.",
        "phr."
      ],
      [
        "cope with sth",
        "รับมือกับ, จัดการกับความยากลำบาก, สู้ไหว",
        "Deep breathing exercises help nurses cope with busy hospital shifts.",
        "phr."
      ],
      [
        "decline in sth",
        "การลดลงของ, ความถดถอยใน",
        "Researchers recorded a steep decline in downtown bus ridership.",
        "phr."
      ],
      [
        "dependent on sb/sth",
        "ขึ้นอยู่กับ, พึ่งพาอาศัย",
        "Many coastal villages remain heavily dependent on seasonal fishing income.",
        "phr."
      ],
      [
        "despite the fact that...",
        "ทั้งๆ ที่ความจริงแล้ว, แม้ว่าข้อเท็จจริงคือ",
        "She ran the marathon despite the fact that it poured.",
        "phr."
      ],
      [
        "draw attention to sb/sth",
        "ดึงดูดความสนใจมาที่, ชี้ให้ผู้คนหันมามอง",
        "The mural helped draw attention to endangered river wildlife nearby.",
        "phr."
      ],
      [
        "engage in sth",
        "เข้าร่วมทำ, มีส่วนร่วมใน, ทำกิจกรรม",
        "Local teens regularly engage in weekend beach cleanup projects.",
        "phr. v."
      ],
      [
        "engaged in sth",
        "กำลังง่วนอยู่กับ, มีส่วนร่วมอย่างจริงจังใน",
        "Both teams remained deeply engaged in designing the electric prototype.",
        "phr."
      ],
      [
        "ever since",
        "นับตั้งแต่นั้นเป็นต้นมา, ตลอดมาตั้งแต่",
        "He moved to Lisbon in 2019 and stayed ever since.",
        "phr."
      ],
      [
        "exposure to sth",
        "การสัมผัสกับ, การได้รับ, การเปิดรับ",
        "Too much exposure to loud noise can gradually harm hearing.",
        "phr."
      ],
      [
        "far from sth",
        "ห่างไกลจาก, ไม่เลยสักนิด, แทบจะตรงกันข้ามกับ",
        "The renovation is far from complete despite months of work.",
        "phr."
      ],
      [
        "figure sb/sth out",
        "คิดหาคำตอบได้, เข้าใจนิสัย, แก้ปริศนาออก",
        "It took us an hour to figure the riddle out.",
        "phr. v."
      ],
      [
        "find yourself doing sth",
        "มารู้ตัวอีกทีก็กำลังทำ, พบว่าตัวเองกำลัง",
        "I often find myself humming that catchy radio jingle unconsciously.",
        "phr."
      ],
      [
        "get in",
        "มาถึง, เข้าไปข้างใน, ถูกรับเลือก",
        "What time did your late evening flight finally get in?",
        "phr. v."
      ],
      [
        "get over sb/sth",
        "ทำใจได้, ฟื้นตัวจาก, ก้าวผ่านไปได้",
        "It took several weeks for him to get over the flu.",
        "phr. v."
      ],
      [
        "get rid of sb/sth",
        "กำจัดทิ้งไป, ขจัดออกไป, ไล่ให้พ้น",
        "We need to get rid of these broken plastic chairs.",
        "idiom"
      ],
      [
        "go off",
        "เสียงดังขึ้น, อาหารเน่าเสีย, ระเบิดขึ้น",
        "My morning alarm went off ten minutes early by mistake.",
        "phr. v."
      ],
      [
        "go on to do sth",
        "ทำสิ่งต่อไป, ก้าวไปสู่การทำ",
        "After graduating in chemistry, she went on to study law.",
        "phr. v."
      ],
      [
        "go through sth",
        "เผชิญกับความยากลำบาก, ตรวจทานอย่างละเอียด, ผ่านช่วงเวลา",
        "Our family went through a tough winter after the storm.",
        "phr. v."
      ]
    ]
  },
  {
    "id": "oxp-b2-2",
    "label": "Phrase B2 · 2 (had better–would rather...)",
    "deck": "Oxford Phrases · B2 · 2",
    "cards": [
      [
        "had better",
        "ควรจะ, น่าจะรีบทำดีกว่า",
        "We had better leave now before the afternoon rush starts.",
        "phr."
      ],
      [
        "hang on",
        "รอสักครู่, ถือสายรอ, เกาะไว้แน่นๆ",
        "Hang on a second while I grab my umbrella downstairs.",
        "phr. v."
      ],
      [
        "human being",
        "มนุษย์, คนเรา",
        "Every human being deserves clean water and safe shelter daily.",
        "phr."
      ],
      [
        "human rights",
        "สิทธิมนุษยชน",
        "Independent lawyers work tirelessly to protect basic human rights worldwide.",
        "phr."
      ],
      [
        "I have to say...",
        "ฉันต้องบอกเลยว่า, ขอพูดตามตรงว่า",
        "I have to say, this homemade mango cheesecake tastes amazing.",
        "phr."
      ],
      [
        "I would say...",
        "ฉันคิดว่า, ในความเห็นฉันน่าจะ",
        "I would say around forty people attended the outdoor workshop.",
        "phr."
      ],
      [
        "if only...",
        "ถ้าเพียงแต่, หากว่าได้แบบนั้นก็คงดี, น่าเสียดายที่",
        "If only I had packed a warmer coat for Edinburgh!",
        "phr."
      ],
      [
        "in action",
        "กำลังปฏิบัติงานจริง, กำลังแสดงฝีมือ, ขณะใช้งานจริง",
        "Visitors watched the skilled glassblowers in action at the studio.",
        "phr."
      ],
      [
        "in advance",
        "ล่วงหน้า, ก่อนกำหนด",
        "Remember to book ferry tickets at least two weeks in advance.",
        "phr."
      ],
      [
        "in an attempt to do sth",
        "ด้วยความพยายามที่จะทำ, เพื่อหวังจะ",
        "Shops lowered prices in an attempt to attract weekend shoppers.",
        "phr."
      ],
      [
        "in part",
        "ในบางส่วน, ส่วนหนึ่งเป็นเพราะ",
        "The delay was caused in part by heavy morning fog.",
        "phr."
      ],
      [
        "in place",
        "เข้าที่เข้าทาง, พร้อมใช้งานแล้ว, ถูกกำหนดไว้แล้ว",
        "Strict safety guidelines are already in place before opening day.",
        "idiom"
      ],
      [
        "in relation to sb/sth",
        "เกี่ยวกับ, เมื่อเทียบกับ, ในความสัมพันธ์กับ",
        "New rules in relation to drone flights start next month.",
        "phr."
      ],
      [
        "in spite of sth",
        "ทั้งๆ ที่, ถึงแม้ว่าจะมี, แม้จะต้องเจอ",
        "They kept hiking uphill in spite of the cold drizzle.",
        "phr."
      ],
      [
        "in the first place",
        "ตั้งแต่แรกเริ่ม, ประการแรกเลย, แต่เดิม",
        "Why did we buy such a noisy printer in the first place?",
        "idiom"
      ],
      [
        "in the near future",
        "ในอนาคตอันใกล้นี้, เร็วๆ นี้",
        "Engineers plan to launch the updated app in the near future.",
        "phr."
      ],
      [
        "in turn",
        "ตามลำดับผลัดเปลี่ยนกัน, ในทางกลับกันก็ส่งผลให้",
        "Lower interest rates boosted borrowing, which in turn raised spending.",
        "idiom"
      ],
      [
        "investment in sth",
        "การลงทุนใน, เงินลงทุนด้าน",
        "Public investment in fast rail networks benefits rural commuters greatly.",
        "phr."
      ],
      [
        "loads of sb/sth",
        "เยอะแยะมากมาย, เพียบ",
        "We still have loads of fresh strawberries left for pie.",
        "phr."
      ],
      [
        "mental health",
        "สุขภาพจิต",
        "Getting regular sleep plays a huge role in mental health.",
        "phr."
      ],
      [
        "more or less",
        "ไม่มากก็น้อย, โดยประมาณ, แทบจะทั้งหมด",
        "The kitchen remodeling project is more or less finished now.",
        "idiom"
      ],
      [
        "no doubt",
        "อย่างไม่ต้องสงสัย, คงจะแน่นอน, แน่ๆ",
        "You will no doubt hear from our hiring manager tomorrow.",
        "phr."
      ],
      [
        "no matter...",
        "ไม่ว่าอย่างไรก็ตาม, ไม่ว่าจะแบบไหนก็ตาม",
        "No matter how hard it rains, the mail still arrives.",
        "phr."
      ],
      [
        "nothing but",
        "มีแต่เพียง, ไม่ใช่อะไรอื่นนอกจาก, ล้วนแต่",
        "During that stormy week, we heard nothing but howling wind.",
        "phr."
      ],
      [
        "on board",
        "อยู่บนเรือหรือเครื่องบิน, เข้าร่วมสนับสนุนด้วย",
        "Once every department is on board, we can start immediately.",
        "idiom"
      ],
      [
        "on the basis of sth",
        "บนพื้นฐานของ, โดยยึดตามหลักฐานหรือเกณฑ์ของ",
        "Grants are awarded strictly on the basis of financial need.",
        "phr."
      ],
      [
        "on the one hand",
        "ในด้านหนึ่ง, แง่หนึ่งก็",
        "On the one hand, living downtown saves valuable commuting time.",
        "idiom"
      ],
      [
        "once again",
        "อีกครั้งหนึ่ง, ซ้ำอีกครั้ง",
        "Our local soccer team won the regional trophy once again.",
        "phr."
      ],
      [
        "one another",
        "ซึ่งกันและกัน, กันและกัน",
        "Good teammates always support one another during stressful deadlines.",
        "phr."
      ],
      [
        "opposed to sth",
        "ต่อต้าน, ไม่เห็นด้วยกับ, ตรงข้ามกับ",
        "Many local residents remain strongly opposed to building a highway.",
        "phr."
      ],
      [
        "or so",
        "ประมาณ, ราวๆ",
        "Expect the paint to dry in an hour or so.",
        "phr."
      ],
      [
        "other than",
        "นอกเหนือจาก, ยกเว้น, นอกจาก",
        "I have no plans this Sunday other than reading peacefully.",
        "phr."
      ],
      [
        "potential for sth",
        "ศักยภาพในการ, โอกาสที่จะเกิด",
        "Solar farms hold enormous potential for clean rural energy production.",
        "phr."
      ],
      [
        "pretty much",
        "เกือบจะทั้งหมด, แทบจะ, ค่อนข้างจะแน่นอน",
        "Everything inside the moving truck is pretty much packed now.",
        "idiom"
      ],
      [
        "prior to",
        "ก่อนหน้า, ล่วงหน้าก่อน",
        "Passengers must switch off portable devices prior to takeoff.",
        "phr."
      ],
      [
        "prove to be sth",
        "พิสูจน์ให้เห็นว่าเป็น, ปรากฏภายหลังว่าเป็น",
        "That cheap umbrella proved to be surprisingly sturdy in wind.",
        "phr."
      ],
      [
        "put sth forward",
        "เสนอชื่อหรือแนวคิด, เลื่อนเวลาให้เร็วขึ้น",
        "Sarah put a practical cost-saving proposal forward during our meeting.",
        "phr. v."
      ],
      [
        "put sth together",
        "ประกอบเข้าด้วยกัน, รวบรวมจัดทำ",
        "Let us put a clear training schedule together before Friday.",
        "phr. v."
      ],
      [
        "quality of life",
        "คุณภาพชีวิต",
        "Safe bike lanes dramatically improve overall quality of life locally.",
        "phr."
      ],
      [
        "ranging from",
        "มีตั้งแต่, แตกต่างกันตั้งแต่, ครอบคลุมตั้งแต่",
        "The shop sells snacks ranging from spicy nuts to pastries.",
        "phr."
      ],
      [
        "regarded as sth",
        "ได้รับการยกย่องว่าเป็น, ถือกันว่าเป็น",
        "That historic bridge is widely regarded as an engineering marvel.",
        "phr."
      ],
      [
        "relevant to sb/sth",
        "เกี่ยวข้องโดยตรงกับ, สอดคล้องกับประเด็น",
        "Keep your interview answers concise and relevant to the job.",
        "phr."
      ],
      [
        "rely on sb/sth",
        "พึ่งพาอาศัย, ไว้วางใจเชื่อถือ",
        "Small island towns rely heavily on ferries for fresh groceries.",
        "phr. v."
      ],
      [
        "role model",
        "แบบอย่างที่ดี, ต้นแบบ",
        "Her older sister served as an inspiring role model growing up.",
        "phr."
      ],
      [
        "set out",
        "ออกเดินทาง, เริ่มต้นลงมือทำ, วางแผนตั้งใจ",
        "They set out at dawn before the desert heat rose.",
        "phr. v."
      ],
      [
        "short of sth",
        "ขาดแคลน, ไม่พอ, เกือบจะ",
        "We are running short of printer paper in the office.",
        "phr."
      ],
      [
        "so as to do sth",
        "เพื่อที่จะได้ทำ, โดยมีเป้าหมายเพื่อ",
        "He whispered quietly so as to avoid waking the baby.",
        "phr."
      ],
      [
        "something like...",
        "ประมาณว่า, คล้ายๆ กับ, ราวๆ",
        "The repair bill will probably cost something like two hundred dollars.",
        "phr."
      ],
      [
        "sort sb/sth/yourself out",
        "จัดระเบียบให้เรียบร้อย, จัดการแก้ไขปัญหา, สงบสติอารมณ์",
        "Take the weekend to sort your messy closet out properly.",
        "phr. v."
      ],
      [
        "stick to sth",
        "ยึดมั่นทำตาม, ทำอย่างต่อเนื่องไม่เปลี่ยนใจ",
        "If we stick to our budget, we can travel abroad.",
        "phr. v."
      ],
      [
        "subject to sth",
        "ขึ้นอยู่กับเงื่อนไข, มีโอกาสได้รับผลกระทบจาก, ต้องอยู่ภายใต้",
        "Outdoor ferry departures remain subject to sudden winter weather changes.",
        "phr."
      ],
      [
        "sum up",
        "สรุปความ, กล่าวโดยสรุป",
        "Let me quickly sum up our main points before closing.",
        "phr. v."
      ],
      [
        "take advantage of sb/sth",
        "ฉวยโอกาสใช้ประโยชน์จาก, เอาเปรียบ, ใช้โอกาสนี้ให้คุ้ม",
        "Take advantage of the sunny weather and eat lunch outside.",
        "idiom"
      ],
      [
        "take over",
        "เข้ามารับช่วงต่อ, เข้าควบคุมกิจการ, ยึดครอง",
        "Our regional manager will take over while Sam is away.",
        "phr. v."
      ],
      [
        "take sth into account",
        "คำนึงถึง, นำมาพิจารณาประกอบ",
        "Travel planners must take seasonal rain into account before booking.",
        "idiom"
      ],
      [
        "that is",
        "นั่นก็คือ, กล่าวคือ, หมายความว่า",
        "The store closes at five, that is, in twenty minutes.",
        "phr."
      ],
      [
        "the vast majority of sth",
        "คนหรือสิ่งส่วนใหญ่, ร้อยละเกือบทั้งหมด",
        "The vast majority of commuters preferred the express subway line.",
        "phr."
      ],
      [
        "turn into sth",
        "กลายเป็น, แปรเปลี่ยนเป็น",
        "A tiny leak slowly turned into a major roof repair.",
        "phr. v."
      ],
      [
        "up to sb",
        "ขึ้นอยู่กับการตัดสินใจของ, แล้วแต่คนนั้น",
        "Whether we watch a comedy tonight is entirely up to you.",
        "idiom"
      ],
      [
        "when it comes to sth",
        "เมื่อพูดถึงเรื่อง, พอเป็นเรื่องของ",
        "When it comes to baking bread, patience matters most.",
        "idiom"
      ],
      [
        "whether or not...",
        "ไม่ว่าจะหรือไม่ก็ตาม",
        "We are launching the app whether or not investors join.",
        "phr."
      ],
      [
        "would rather...",
        "อยากจะทำมากกว่า, ขอเลือกทำแบบนี้ดีกว่า",
        "I would rather walk twenty minutes than wait in traffic.",
        "phr."
      ]
    ]
  },
  {
    "id": "oxp-c1-1",
    "label": "Phrase C1 · 1 (above all–with the exception of sb/sth)",
    "deck": "Oxford Phrases · C1 · 1",
    "cards": [
      [
        "above all",
        "เหนือสิ่งอื่นใด, สำคัญที่สุดคือ",
        "Above all, always verify wire transfers by phone first.",
        "phr."
      ],
      [
        "all but",
        "เกือบจะทั้งหมด, แทบจะ, ยกเว้นเพียง",
        "The historic theater was all but destroyed by last year's fire.",
        "phr."
      ],
      [
        "all the more",
        "มากยิ่งขึ้นไปอีก, ยิ่งเพิ่มความสำคัญขึ้นอีก",
        "Having limited time makes every training session all the more valuable.",
        "phr."
      ],
      [
        "as far as sb/sth is concerned",
        "ในส่วนของ, สำหรับเรื่องของ, เท่าที่เกี่ยวข้องกับ",
        "As far as safety is concerned, no shortcuts are allowed.",
        "phr."
      ],
      [
        "as of...",
        "นับตั้งแต่วันที่, เริ่มมีผลตั้งแต่",
        "As of next Monday, the library will stay open later.",
        "phr."
      ],
      [
        "as opposed to",
        "ซึ่งต่างจาก, แทนที่จะเป็น, ตรงข้ามกับ",
        "We chose cotton fabric as opposed to cheaper synthetic blends.",
        "phr."
      ],
      [
        "as such",
        "ในฐานะเช่นนั้น, ในความหมายโดยตรงเสียทีเดียว, ดังนั้นจึง",
        "It wasn't a disaster as such, just an expensive delay.",
        "phr."
      ],
      [
        "as to",
        "เกี่ยวกับเรื่อง, ส่วนเรื่องที่ว่า",
        "There is still some confusion as to who pays shipping.",
        "phr."
      ],
      [
        "at the expense of sb/sth",
        "โดยแลกมากับความเสียหายของ, บนความเดือดร้อนของ, โดยเสียสละสิ่งอื่น",
        "Do not chase higher profits at the expense of worker safety.",
        "idiom"
      ],
      [
        "at the hands of sb",
        "ด้วยน้ำมือของ, จากการกระทำของ",
        "The defending champions suffered a shocking defeat at the hands of rookies.",
        "idiom"
      ],
      [
        "back and forth",
        "ไปๆ มาๆ, ย้อนกลับไปกลับมา, โต้ตอบกันไปมา",
        "Emails went back and forth for weeks before anyone agreed.",
        "idiom"
      ],
      [
        "be attributed to sb",
        "เชื่อกันว่าเป็นผลงานของ, ระบุว่าเป็นคำกล่าวของ, เกิดจากฝีมือของ",
        "That famous anonymous painting was later attributed to a Dutch master.",
        "phr."
      ],
      [
        "be entitled to sth",
        "มีสิทธิ์โดยชอบธรรมที่จะได้รับ, มีสิทธิ์ใน",
        "Full-time employees are entitled to three weeks of paid leave.",
        "phr."
      ],
      [
        "be found to do sth",
        "ถูกตรวจพบว่า, มีผลการศึกษาชี้ว่า",
        "Green tea was found to contain helpful antioxidants in trials.",
        "phr."
      ],
      [
        "be meant to do sth",
        "ถูกออกแบบมาเพื่อ, มีหน้าที่ต้องทำ, ควรจะเป็น",
        "These waterproof hiking boots are meant to last for years.",
        "phr."
      ],
      [
        "be reported to be sth",
        "มีรายงานว่าเป็น, มีข่าวระบุว่า",
        "The rare ancient coin is reported to be worth millions.",
        "phr."
      ],
      [
        "be said to be sth",
        "เล่าลือกันว่าเป็น, ว่ากันว่าเป็น",
        "That mountain spring is said to be the purest locally.",
        "phr."
      ],
      [
        "bear sb/sth in mind",
        "จดจำเอาไว้ให้ดี, คำนึงถึงเสมอ, นึกเผื่อไว้",
        "Please bear our tight delivery deadline in mind when quoting.",
        "idiom"
      ],
      [
        "bring sth about",
        "ก่อให้เกิด, นำมาซึ่งความเปลี่ยนแปลง, ทำให้เกิดขึ้น",
        "Consistent public pressure helped bring those vital reforms about.",
        "phr. v."
      ],
      [
        "bring sth up",
        "หยิบยกประเด็นขึ้นมาพูด, เอ่ยถึงขึ้นมา",
        "Someone should bring the parking issue up at tomorrow's meeting.",
        "phr. v."
      ],
      [
        "by means of sth",
        "โดยอาศัยวิธีการของ, ด้วยการใช้เครื่องมือ",
        "Rescue crews reached the flooded village by means of inflatable boats.",
        "phr."
      ],
      [
        "by no means",
        "ไม่เลยแม้แต่น้อย, ไม่มีทาง, ไม่ใช่เรื่องง่ายเลย",
        "Passing the bar exam on first try is by no means easy.",
        "idiom"
      ],
      [
        "call on sb",
        "เรียกร้องขอให้ช่วย, แวะไปเยี่ยมเยียน, เรียกให้ตอบ",
        "Doctors called on lawmakers to fund stronger rural clinics nationwide.",
        "phr. v."
      ],
      [
        "consistent with sth",
        "สอดคล้องกับ, ตรงกันกับ, ไม่ขัดแย้งกับ",
        "His witness statement remained completely consistent with the security footage.",
        "phr."
      ],
      [
        "dedicated to sth",
        "อุทิศตนเพื่อ, มุ่งมั่นทุ่มเทให้, จัดทำขึ้นเพื่อ",
        "She spent decades dedicated to preserving endangered coastal wetlands.",
        "phr."
      ],
      [
        "deprive sb/sth of sth",
        "พรากบางสิ่งไปจาก, ทำให้ขาดแคลน, กีดกันไม่ให้ได้รับ",
        "Heavy shade from tall towers deprived nearby gardens of sunlight.",
        "phr. v."
      ],
      [
        "dispose of sb/sth",
        "กำจัดทิ้ง, ทิ้งอย่างถูกวิธี, จัดการให้พ้นทาง",
        "Hospitals must safely dispose of used needles in sealed bins.",
        "phr. v."
      ],
      [
        "follow sth up",
        "ติดตามผลต่อ, สานต่อให้จบ, สอบถามความคืบหน้า",
        "Always follow your job interview up with a polite email.",
        "phr. v."
      ],
      [
        "for that matter",
        "อันที่จริงในเรื่องนั้นด้วย, และเช่นเดียวกันกับเรื่องนั้น",
        "I never liked horror movies, or thrillers for that matter.",
        "idiom"
      ],
      [
        "for the benefit of sb",
        "เพื่อผลประโยชน์ของ, เพื่อความเข้าใจของ",
        "Let me repeat the rules for the benefit of newcomers.",
        "phr."
      ],
      [
        "for the sake of sb/sth",
        "เพื่อเห็นแก่, เพื่อผลดีต่อ",
        "Let us drop this argument for the sake of peace.",
        "idiom"
      ],
      [
        "get away with sth",
        "ทำผิดแล้วรอดตัวไปได้, หนีความผิดพ้น",
        "No company should get away with dumping toxic chemicals illegally.",
        "phr. v."
      ],
      [
        "given that...",
        "เมื่อพิจารณาว่า, เนื่องจากข้อเท็จจริงที่ว่า",
        "Given that flights sold out, we booked the overnight train.",
        "phr."
      ],
      [
        "have nothing to do with sb/sth",
        "ไม่มีส่วนเกี่ยวข้องใดๆ กับ, ไม่ใช่เรื่องของ",
        "That billing error has nothing to do with our department.",
        "idiom"
      ],
      [
        "have sb/sth in mind",
        "นึกถึงอยู่ในใจ, หมายตาไว้, วางแผนไว้",
        "Do you already have a specific restaurant in mind tonight?",
        "idiom"
      ],
      [
        "in a position to do sth",
        "อยู่ในฐานะที่พร้อมจะทำ, มีกำลังพอที่จะทำ",
        "After saving for years, they are in a position to invest.",
        "phr."
      ],
      [
        "in accordance with sth",
        "ตามระเบียบข้อบังคับของ, โดยสอดคล้องกับ",
        "All building materials were tested in accordance with fire codes.",
        "phr."
      ],
      [
        "in any case",
        "ไม่ว่าอย่างไรก็ตาม, ยังไงก็ตามที, ถึงกระนั้นก็ดี",
        "Traffic looks unpredictable, so in any case, leave twenty minutes early.",
        "idiom"
      ],
      [
        "in conjunction with sb/sth",
        "ร่วมมือกันกับ, ควบคู่กันไปกับ",
        "The museum organized this exhibit in conjunction with local schools.",
        "phr."
      ],
      [
        "in connection with sb/sth",
        "เกี่ยวข้องกับคดีหรือเรื่อง, สืบเนื่องจาก",
        "Police questioned two witnesses in connection with the midnight burglary.",
        "phr."
      ],
      [
        "in effect",
        "ในทางปฏิบัติจริง, มีผลบังคับใช้อยู่, แท้จริงแล้ว",
        "Those stricter baggage fees are already in effect across Europe.",
        "idiom"
      ],
      [
        "in full",
        "อย่างครบถ้วนเต็มจำนวน, ทั้งหมดโดยไม่ตัดทอน",
        "Customers must pay the remaining balance in full before delivery.",
        "phr."
      ],
      [
        "in line with sth",
        "สอดคล้องเป็นไปตาม, ในแนวทางเดียวกับ",
        "Annual staff bonuses rose roughly in line with living costs.",
        "idiom"
      ],
      [
        "in practice",
        "ในทางปฏิบัติจริง, ตามความเป็นจริง",
        "The idea sounds simple, yet in practice takes careful coordination.",
        "phr."
      ],
      [
        "in respect of sth",
        "ในส่วนที่เกี่ยวกับ, ว่าด้วยเรื่อง",
        "Claims in respect of damaged luggage require original baggage receipts.",
        "phr."
      ],
      [
        "in such a way (that)...",
        "ในลักษณะที่ทำให้, ในแบบซึ่งส่งผลให้",
        "He phrased the criticism in such a way that nobody panicked.",
        "phr."
      ],
      [
        "in the absence of sb/sth",
        "ในยามที่ขาดแคลนหรือไม่มี, เมื่ออีกฝ่ายไม่อยู่",
        "In the absence of clear evidence, judges dismissed the charges.",
        "phr."
      ],
      [
        "in the course of...",
        "ในระหว่างช่วงเวลาของ, ตลอดระยะเวลาที่",
        "They uncovered three forgotten letters in the course of renovations.",
        "phr."
      ],
      [
        "in the event of sth",
        "ในกรณีที่เกิด, หากเกิดเหตุการณ์",
        "In the event of an earthquake, stay away from windows.",
        "phr."
      ],
      [
        "in the face of sth",
        "แม้ต้องเผชิญหน้ากับ, ท่ามกลางอุปสรรคของ",
        "She remained remarkably calm in the face of fierce criticism.",
        "idiom"
      ],
      [
        "in the hands of sb",
        "อยู่ในความดูแลของ, อยู่ในกำมือหรืออำนาจของ",
        "Our startup's future now rests in the hands of regulators.",
        "idiom"
      ],
      [
        "in the light of sth",
        "เมื่อพิจารณาจากข้อมูลใหม่, สืบเนื่องจาก, เมื่อคำนึงถึง",
        "In the light of recent data, doctors updated vaccine advice.",
        "idiom"
      ],
      [
        "in the meantime",
        "ในระหว่างนี้, ในช่วงที่รอคอย",
        "Our mechanic arrives at three; in the meantime, grab coffee.",
        "idiom"
      ],
      [
        "in the midst of sth",
        "ท่ามกลางสถานการณ์, ในช่วงกลางของ",
        "We arrived in Lisbon right in the midst of festival season.",
        "idiom"
      ],
      [
        "in the presence of sb",
        "ต่อหน้าพยานหรือบุคคล, ขณะที่มีคนอยู่ด้วย",
        "Important legal wills are usually signed in the presence of witnesses.",
        "phr."
      ],
      [
        "in the wake of sb/sth",
        "สืบเนื่องจากเหตุการณ์, ตามมาติดๆ หลังเกิด",
        "Flight cancellations surged in the wake of the winter storm.",
        "idiom"
      ],
      [
        "involvement in sth",
        "การเข้าไปมีส่วนร่วมใน, ความเกี่ยวข้องกับ",
        "He denied any direct involvement in the leaked report scandal.",
        "phr."
      ],
      [
        "let alone",
        "ไม่ต้องพูดถึงเลยว่า, นับประสาอะไรกับ, อย่าว่าแต่",
        "I barely have time for lunch, let alone a vacation.",
        "idiom"
      ],
      [
        "little more than...",
        "แทบจะไม่ต่างอะไรจาก, เป็นเพียงแค่, ไม่เกินไปกว่า",
        "Their spacious loft felt little more than a concrete box.",
        "phr."
      ],
      [
        "live on sth",
        "กินอยู่ประทังชีวิตด้วย, พึ่งพาเงินหรืออาหารจาก",
        "How did the stranded hikers live on berries for days?",
        "phr. v."
      ],
      [
        "may well",
        "มีความเป็นไปได้สูงที่จะ, อาจจะเป็นไปได้มากว่า",
        "That sudden drop in pressure may well signal incoming storms.",
        "phr."
      ],
      [
        "not to mention",
        "ยังไม่นับรวมถึง, นอกเหนือจากนั้นยังมี, ไม่ต้องพูดถึง",
        "The cabin has panoramic views, not to mention private trails.",
        "idiom"
      ],
      [
        "nothing like",
        "ไม่เหมือนเลยแม้แต่น้อย, ไม่มีอะไรดีเทียบเท่า, ห่างไกลจาก",
        "There is nothing like warm soup on a chilly evening.",
        "idiom"
      ],
      [
        "on behalf of sb",
        "ในนามของ, เป็นตัวแทนของ",
        "Let me accept this community award on behalf of everyone.",
        "phr."
      ],
      [
        "on the part of sb",
        "จากฝั่งของ, ในส่วนของ",
        "Rebuilding trust required genuine patience on the part of leadership.",
        "phr."
      ],
      [
        "over the course of...",
        "ตลอดช่วงระยะเวลาของ, ในระหว่างช่วงที่",
        "Her spoken fluency improved noticeably over the course of autumn.",
        "phr."
      ],
      [
        "put it",
        "ใช้คำพูดอธิบายว่า, กล่าวในลักษณะว่า, สรุปคำพูดว่า",
        "To put it bluntly, our old website looks outdated today.",
        "idiom"
      ],
      [
        "seek to do sth",
        "พยายามที่จะทำ, มุ่งเสาะหาทางที่จะ",
        "New regulations seek to limit hidden fees on airline tickets.",
        "phr."
      ],
      [
        "set to do sth",
        "มีกำหนดที่จะ, เตรียมพร้อมที่จะ, มีแนวโน้มว่าจะ",
        "Electric ferry services are set to launch here next spring.",
        "phr."
      ],
      [
        "the extent to which...",
        "ระดับขอบเขตที่, มากน้อยเพียงใดที่",
        "Few realize the extent to which sleep shapes daily focus.",
        "phr."
      ],
      [
        "to date",
        "จนถึงปัจจุบันนี้, นับจนถึงวันนี้",
        "This remains her bestselling historical novel published to date.",
        "idiom"
      ],
      [
        "up against sth",
        "กำลังเผชิญหน้ากับอุปสรรค, ต้องสู้กับคู่แข่งที่หิน",
        "Our small bakery is up against massive supermarket chains nearby.",
        "idiom"
      ],
      [
        "with regard to sb/sth",
        "ในส่วนที่เกี่ยวกับ, เกี่ยวกับเรื่อง",
        "Please contact human resources with regard to health insurance changes.",
        "phr."
      ],
      [
        "with respect to sth",
        "ในประเด็นเรื่อง, เมื่อกล่าวถึงด้าน, เกี่ยวกับ",
        "Rules differ slightly with respect to part-time student work permits.",
        "phr."
      ],
      [
        "with the exception of sb/sth",
        "ยกเว้นเพียงแค่, เว้นเสียแต่เพียง",
        "All staff attended the retreat with the exception of Ken.",
        "phr."
      ]
    ]
  }
];
if (typeof module !== 'undefined') module.exports = { OXFORD_PHRASE_PACKS };
