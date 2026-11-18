// TOEFL iBT (2026 Redesign) 4-Skill Mock Exams (TOEFL_SETS_1: Sets 1–5).
const TOEFL_SETS_1 = [
  {
    "set": 1,
    "reading": {
      "stage1": {
        "cloze": {
          "title": "Cooling Down Concrete Cities",
          "intro": "Cities consistently record higher air temperatures than surrounding rural landscapes during both day and night.",
          "segments": [
            "This phenomenon, known as the urban heat island effect, occurs largely because dark asphalt roads and concrete roofs ",
            {
              "pre": "ab",
              "ans": "sorb",
              "hint": "v. ดูดซับ"
            },
            " incoming solar radiation rather than bouncing it back into space. Unlike natural forests or fields, dense city centers contain limited ",
            {
              "pre": "veg",
              "ans": "etation",
              "hint": "n. พืชพรรณ"
            },
            " to provide shade or cool the air through moisture evaporation. Furthermore, heavy traffic and building air-conditioning units ",
            {
              "pre": "rel",
              "ans": "ease",
              "hint": "v. ปล่อยออกมา"
            },
            " steady streams of waste heat directly into narrow street corridors. Elevated nighttime temperatures are especially ",
            {
              "pre": "har",
              "ans": "mful",
              "hint": "adj. เป็นอันตราย"
            },
            " because residents cannot recover from daytime thermal stress while sleeping. In response, municipal planners are testing ",
            {
              "pre": "pra",
              "ans": "ctical",
              "hint": "adj. ที่นำไปใช้ได้จริง"
            },
            " interventions to lower neighborhood heat loads. Painting flat commercial rooftops with bright white coatings helps ",
            {
              "pre": "ref",
              "ans": "lect",
              "hint": "v. สะท้อน"
            },
            " sunlight before heat enters upper apartments. Some districts have also replaced solid pavement with ",
            {
              "pre": "por",
              "ans": "ous",
              "hint": "adj. มีรูพรุน"
            },
            " materials that hold rainwater and cool sidewalks as moisture dries. Planting drought-tolerant street trees ",
            {
              "pre": "cre",
              "ans": "ates",
              "hint": "v. สร้าง"
            },
            " continuous shaded walkways for commuters and pedestrians. Combined with energy-efficient building codes, these strategies can ",
            {
              "pre": "red",
              "ans": "uce",
              "hint": "v. ลดลง"
            },
            " peak summer electricity demand and protect vulnerable populations during severe heat ",
            {
              "pre": "wav",
              "ans": "es",
              "hint": "n. (พหูพจน์) คลื่นความร้อน"
            },
            "."
          ],
          "why": "1) absorb (v.) ดูดซับ ใช้กับ solar radiation ตรงข้ามกับ bouncing it back; 2) vegetation (n.) พืชพรรณ สอดคล้องกับ natural forests และ provide shade; 3) release (v.) ปล่อย ใช้กับ waste heat จากการจราจรและเครื่องปรับอากาศ; 4) harmful (adj.) เป็นอันตราย สอดคล้องกับความเครียดจากความร้อนยามค่ำคืน; 5) practical (adj.) ที่ทำได้จริง ขยาย interventions; 6) reflect (v.) สะท้อนแสงอาทิตย์ ใช้กับหลังคาสีขาว; 7) porous (adj.) มีรูพรุน สามารถอุ้มน้ำฝนได้; 8) creates (v. เอกพจน์) ตามหลังประธาน gerund Planting drought-tolerant street trees; 9) reduce (v.) ลดความต้องการใช้ไฟฟ้าสูงสุด; 10) waves (n. พหูพจน์) เข้าคู่ heat waves."
        },
        "daily": [
          {
            "kind": "Campus Safety Notice",
            "title": "Chemistry Lab Safety Protocol Update",
            "text": "All students enrolled in Chemistry 204 must review our updated safety guidelines before Monday's synthesis session. Indirect-vent chemical splash goggles and buttoned cotton lab coats are required whenever any benchtop work is underway, even if your own team has already finished handling reagents. Volatile organic solvents must be poured exclusively inside certified fume hoods with the glass sash lowered below the green calibration marker. Please transfer used solvent mixtures into labeled high-density waste carboys rather than pouring residues down laboratory sinks. Closed-toe leather shoes are mandatory; canvas sneakers and sandals will result in immediate dismissal from the lab.",
            "qs": [
              {
                "q": "When must students wear chemical splash goggles in Chemistry 204?",
                "choices": [
                  "Only while pouring volatile solvents into waste carboys",
                  "Whenever any laboratory benchtop work is taking place in the room",
                  "Only until their own team completes its assigned experiment",
                  "When the fume hood glass sash is raised above the green marker"
                ],
                "ans": 1,
                "why": "ข้อ B ถูกเพราะประกาศระบุให้สวมแว่นนิรภัยและเสื้อกาวน์ตลอดเวลาที่มีการทำงานบนโต๊ะทดลองในห้อง แม้กลุ่มของตนเองจะใช้สารเคมีเสร็จแล้วก็ตาม (ข้อ C จึงผิด)"
              },
              {
                "q": "What will happen to a student who arrives wearing canvas sneakers?",
                "choices": [
                  "They will be required to leave the laboratory immediately.",
                  "They will be asked to remain inside the fume hood area.",
                  "They must borrow protective overshoes from the stockroom.",
                  "They may observe benchtop work without handling reagents."
                ],
                "ans": 0,
                "why": "ข้อ A ถูกเพราะประกาศระบุชัดเจนว่ารองเท้าผ้าใบ (canvas sneakers) และรองเท้าแตะจะทำให้ถูกให้ออกจากห้องแล็บทันที (immediate dismissal)"
              }
            ]
          },
          {
            "kind": "Advising Email",
            "title": "Spring Course Advising Appointments",
            "text": "Dear Biology and Chemistry Majors, Spring registration opens on November 12, and all undergraduates carry an advising hold until their course plan is approved. Please reserve a twenty-minute slot through the Campus Advising Portal no later than Friday, November 6. Before arriving at Science Hall 118, upload a draft degree audit and list two backup electives in case your preferred lab sections reach capacity. Students planning to enroll in independent research credits must also attach a signed permission slip from their faculty supervisor. Walk-in questions will only be answered for urgent schedule errors once priority booking closes.",
            "qs": [
              {
                "q": "Why should students list two backup electives before their advising meeting?",
                "choices": [
                  "To qualify for independent research credits with a faculty supervisor",
                  "To replace the requirement of uploading a draft degree audit",
                  "To have alternatives ready if first-choice lab sections fill up",
                  "To avoid receiving an advising hold after November 12"
                ],
                "ans": 2,
                "why": "ข้อ C ถูกเพราะอีเมลแนะนำให้เตรียมวิชาเลือกสำรอง 2 วิชา เผื่อกรณีกลุ่มเรียนแล็บที่ต้องการเต็ม (reach capacity)"
              },
              {
                "q": "Who must bring an additional signed document to the appointment?",
                "choices": [
                  "Students seeking walk-in help for schedule errors",
                  "Undergraduates whose advising hold was already lifted",
                  "First-year majors registering before November 6",
                  "Students intending to take independent research credits"
                ],
                "ans": 3,
                "why": "ข้อ D ถูกเพราะผู้ที่จะลงทะเบียนหน่วยกิตวิจัยอิสระ (independent research credits) ต้องแนบใบอนุญาตที่มีลายเซ็นอาจารย์ที่ปรึกษางานวิจัยด้วย"
              }
            ]
          }
        ],
        "academic": {
          "subject": "Marine Biology",
          "title": "How Deep-Sea Organisms Generate Living Light",
          "paragraphs": [
            "Below two hundred meters in the open ocean, sunlight fades into near-total darkness, yet this twilight realm pulses with living light. Bioluminescence—the biochemical production of visible light by living organisms—has evolved independently dozens of times across marine lineages ranging from microscopic dinoflagellates to predatory anglerfish. The reaction depends on a light-emitting substrate called luciferin, an enzyme known as luciferase, and dissolved oxygen. When luciferase catalyzes the oxidation of luciferin, energy is released almost entirely as cold blue-green photons rather than wasted heat, an efficiency exceeding ninety percent.",
            "In open waters lacking physical hiding places, marine animals employ light for survival in remarkably contrasting ways. Many midwater shrimp and lanternfish practice counterillumination: rows of downward-facing photophores emit a faint blue glow matched precisely to the intensity of sunlight filtering from above, effectively erasing the animal's dark silhouette when viewed by predators swimming underneath. Conversely, certain deep-sea squids eject luminous clouds when startled, temporarily blinding attackers while the squid darts away into darkness.",
            "Not every luminescent organism synthesizes its own light-producing chemicals. Several reef and deep-water fishes cultivate specialized colonies of bioluminescent bacteria inside dedicated pouches beneath their eyes or along their bellies. In this mutualistic arrangement, the host supplies warm shelter and nutrients, while the bacterial glow assists the fish in locating nocturnal prey and signaling mates."
          ],
          "qs": [
            {
              "q": "What is the main topic of the passage?",
              "choices": [
                "The chemical mechanisms and ecological roles of light production in marine life",
                "Why sunlight cannot penetrate deeper than two hundred meters in open oceans",
                "Methods used by marine biologists to measure bacterial populations in deep fish",
                "Differences between predatory anglerfish and herbivorous plankton in shallow reefs"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะบทความครอบคลุมทั้งกลไกทางชีวเคมีของแสงชีวภาพ (ย่อหน้า 1) และหน้าที่ทางนิเวศวิทยาในการเอาชีวิตรอดและการพึ่งพาแบคทีเรีย (ย่อหน้า 2–3)"
            },
            {
              "q": "According to paragraph 1, why is marine bioluminescence described as highly efficient?",
              "choices": [
                "It requires very little dissolved oxygen compared with cellular respiration.",
                "It converts nearly all reaction energy into light without generating excess heat.",
                "It relies on a single enzyme shared by every marine species.",
                "It operates continuously using stored energy from surface sunlight."
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะย่อหน้า 1 ระบุว่าพลังงานเกือบทั้งหมดถูกปล่อยเป็นโฟตอนแสงเย็นสีฟ้าเขียวมากกว่าความร้อนที่สูญเปล่า โดยมีประสิทธิภาพเกิน 90%"
            },
            {
              "q": "The word \"erasing\" in paragraph 2 is closest in meaning to",
              "choices": [
                "magnifying",
                "memorizing",
                "eliminating",
                "imitating"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะ erasing ในบริบทนี้หมายถึงการลบหรือทำให้เงาดำหายไปจากสายตาผู้ล่า ซึ่งใกล้เคียงที่สุดกับ eliminating (กำจัด/ลบเลือน)"
            },
            {
              "q": "What can be inferred about fish that host bioluminescent bacteria in paragraph 3?",
              "choices": [
                "They must consume large numbers of dinoflagellates every night to stay lit.",
                "They would lose their glow if deprived of their symbiotic bacterial colonies.",
                "They produce brighter red light than organisms using luciferin alone.",
                "They only live in depths shallower than two hundred meters."
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะย่อหน้า 3 ระบุว่าไม่ใช่สัตว์ทุกชนิดที่สังเคราะห์สารเรืองแสงเองได้ ปลาเหล่านี้ต้องอาศัยแบคทีเรียในถุงเฉพาะ ดังนั้นหากขาดแบคทีเรียดังกล่าวก็จะสูญเสียแสง"
            },
            {
              "q": "Why does the author mention \"deep-sea squids\" in paragraph 2?",
              "choices": [
                "To prove that squids rely on bacterial pouches rather than luciferin",
                "To contrast high-heat chemical reactions with cold blue-green photons",
                "To explain why predators avoid hunting in the twilight zone",
                "To illustrate a defensive use of light that differs from camouflage"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะคำว่า Conversely เชื่อมตัวอย่างหมึกที่พ่นหมอกแสงเพื่อทำให้ผู้ล่าตาพร่าชั่วคราว ซึ่งเป็นการใช้แสงป้องกันตัวในแบบที่ต่างจากการพรางตัว (camouflage)"
            }
          ]
        }
      },
      "stage2a": {
        "cloze": {
          "title": "Safe Soldering in the Electronics Workshop",
          "intro": "Students entering the electronics prototyping lab must follow strict safety procedures before powering any workbench.",
          "segments": [
            "First, always inspect power cords and soldering irons for ",
            {
              "pre": "dam",
              "ans": "aged",
              "hint": "adj. ที่ชำรุดเสียหาย"
            },
            " insulation before plugging equipment into wall outlets. Place the hot iron securely inside its weighted ",
            {
              "pre": "met",
              "ans": "al",
              "hint": "adj. ทำจากโลหะ"
            },
            " stand whenever you pause to adjust tiny circuit components. Because melting rosin flux produces irritating ",
            {
              "pre": "vap",
              "ans": "ors",
              "hint": "n. (พหูพจน์) ไอระเหย"
            },
            ", switch on the desktop extractor fan and position its intake nozzle near your project. Wearing clear ",
            {
              "pre": "saf",
              "ans": "ety",
              "hint": "n. ความปลอดภัย (safety glasses)"
            },
            " glasses protects your eyes from unexpected droplets of molten solder or clipped wire ends. Keep flammable ",
            {
              "pre": "sol",
              "ans": "vents",
              "hint": "n. (พหูพจน์) ตัวทำละลาย"
            },
            " and paper notebooks well away from heated tips. Never touch integrated circuits immediately after soldering, since ",
            {
              "pre": "exc",
              "ans": "ess",
              "hint": "adj. ส่วนเกิน"
            },
            " thermal energy can burn fingers or ruin delicate pins. When cleaning the brass sponge, work gently to ",
            {
              "pre": "pre",
              "ans": "vent",
              "hint": "v. ป้องกัน"
            },
            " metal splashes across the table. Before stepping away, verify that the heating station is completely ",
            {
              "pre": "tur",
              "ans": "ned",
              "hint": "v. (ช่อง 3) ถูกปิด"
            },
            " off and cooled. Finally, wash your hands thoroughly with soap to remove trace ",
            {
              "pre": "res",
              "ans": "idue",
              "hint": "n. สารตกค้าง"
            },
            " from solder alloys, and return all shared tools to the labeled wall ",
            {
              "pre": "cab",
              "ans": "inet",
              "hint": "n. ตู้เก็บอุปกรณ์"
            },
            "."
          ],
          "why": "1) damaged (adj.) เสียหาย ขยาย insulation (ฉนวนหุ้มสายไฟ); 2) metal (adj./n.) โลหะ ใช้กับ weighted metal stand; 3) vapors (n. พหูพจน์) ไอระเหยที่เกิดจากการหลอมฟลักซ์; 4) safety (n. ในคำประสม safety glasses) แว่นตานิรภัย; 5) solvents (n. พหูพจน์) ตัวทำละลายที่ไวไฟ; 6) excess (adj.) ส่วนเกิน ขยาย thermal energy; 7) prevent (v.) ป้องกันการกระเด็นของโลหะ; 8) turned (v. ช่อง 3 ใน passive is turned off) ถูกปิดสวิตช์; 9) residue (n.) คราบสารตกค้าง; 10) cabinet (n.) ตู้เก็บเครื่องมือ."
        },
        "daily": [
          {
            "kind": "Facility Bulletin",
            "title": "Campus Microgrid Maintenance Window",
            "text": "Campus Facilities will perform annual diagnostics on the North Residence solar microgrid this Saturday from 7:00 a.m. to 11:00 a.m. During testing, engineers will isolate the rooftop arrays and lithium battery bank from the municipal grid to verify automatic backup switching. Expect two brief thirty-second power interruptions around 7:15 a.m. and 10:45 a.m. While hallway emergency lighting and elevators will remain operational, residents should save coursework early and unplug sensitive desktop computers or laboratory chargers beforehand. Heating and hot water systems will continue running normally on natural gas reserves.",
            "qs": [
              {
                "q": "Why are engineers testing the North Residence microgrid on Saturday?",
                "choices": [
                  "To repair broken rooftop solar panels damaged by a storm",
                  "To replace the natural gas water heaters with electric units",
                  "To confirm that automatic backup switching works properly",
                  "To connect a second residence hall to the municipal grid"
                ],
                "ans": 2,
                "why": "ข้อ C ถูกเพราะประกาศระบุว่าวิศวกรจะแยกแผงโซลาร์และแบตเตอรี่ออกจากระบบไฟหลักเพื่อตรวจสอบระบบสลับไฟสำรองอัตโนมัติ (automatic backup switching)"
              },
              {
                "q": "What are students advised to do before 7:00 a.m.?",
                "choices": [
                  "Save computer work and disconnect sensitive electronics",
                  "Avoid using residence hall elevators until 11:00 a.m.",
                  "Relocate laboratory chargers to the central campus library",
                  "Shut down hallway lighting switches on every floor"
                ],
                "ans": 0,
                "why": "ข้อ A ถูกเพราะประกาศเตือนให้นักศึกษาบันทึกงานเรียนล่วงหน้าและถอดปลั๊กคอมพิวเตอร์ตั้งโต๊ะหรือเครื่องชาร์จที่ไวต่อไฟกระชาก (ข้อ B ผิดเพราะลิฟต์ยังใช้งานได้)"
              },
              {
                "q": "Which building service will experience NO interruption during the maintenance window?",
                "choices": [
                  "Bedroom wall outlets at 7:15 a.m.",
                  "Unplugged desktop chargers",
                  "Rooftop solar battery charging",
                  "Hot water and building heating"
                ],
                "ans": 3,
                "why": "ข้อ D ถูกเพราะประโยคสุดท้ายระบุว่า Heating and hot water systems จะทำงานต่อตามปกติด้วยระบบก๊าซธรรมชาติสำรอง"
              }
            ]
          }
        ],
        "academic": {
          "subject": "Environmental Engineering",
          "title": "Community Microgrids for Resilient Power",
          "paragraphs": [
            "Conventional electrical grids deliver power across hundreds of kilometers of overhead lines from centralized power plants. Although this model achieves impressive economies of scale, a single damaged transmission tower during an ice storm or heatwave can leave an entire region without electricity. To protect critical facilities such as hospitals, water treatment stations, and university laboratories, engineers increasingly deploy local microgrids.",
            "A microgrid is a compact energy network combining distributed generation—typically rooftop solar arrays, wind turbines, or small gas generators—with battery storage and automated control software. Under normal conditions, the microgrid stays synchronized with the wider utility grid, importing extra electricity when demand spikes or exporting surplus solar power at midday. Whenever an external outage occurs, high-speed switches disconnect the microgrid within milliseconds, a process known as islanding. Operating independently, the local controller balances solar generation and battery output to keep essential circuits energized until utility lines are repaired.",
            "Beyond reliability, microgrids reduce energy wasted as heat during long-distance transmission. Generating electricity near the buildings that consume it also allows campuses to capture waste heat from backup turbines to warm nearby dormitories."
          ],
          "qs": [
            {
              "q": "What is a major vulnerability of conventional centralized power grids mentioned in paragraph 1?",
              "choices": [
                "They cannot use rooftop solar panels during midday peaks.",
                "Damage to a single distant line can trigger widespread regional blackouts.",
                "They waste more electricity on water treatment than on hospitals.",
                "They require too much automated control software to operate safely."
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะย่อหน้า 1 อธิบายว่าสายส่งระยะไกลทำให้เสาส่งที่เสียหายเพียงต้นเดียวอาจทำให้ทั้งภูมิภาคไฟดับได้"
            },
            {
              "q": "According to paragraph 2, what happens when a microgrid performs \"islanding\"?",
              "choices": [
                "It exports surplus solar power to distant cities at midday.",
                "It shuts down all university laboratories until utility crews arrive.",
                "It permanently replaces batteries with small gas turbines.",
                "It separates from the main utility grid to run independently on local power."
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะย่อหน้า 2 ระบุว่า islanding คือการที่สวิตช์ความเร็วสูงตัดการเชื่อมต่อไมโครกริดออกจากระบบไฟหลักภายในไม่กี่มิลลิวินาทีเพื่อจ่ายไฟภายในเอง"
            },
            {
              "q": "The word \"surplus\" in paragraph 2 is closest in meaning to",
              "choices": [
                "excess",
                "stored",
                "expensive",
                "emergency"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะ surplus หมายถึงส่วนเกินหรือไฟฟ้าที่ผลิตได้เกินความต้องการใช้ในตอนกลางวัน ซึ่งตรงกับ excess"
            },
            {
              "q": "What additional benefit of microgrids is discussed in paragraph 3?",
              "choices": [
                "They eliminate the need for dormitory heating during summer.",
                "They completely prevent transmission towers from icing over.",
                "They cut transmission losses and allow waste heat reuse.",
                "They cost less to build than conventional centralized power plants."
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะย่อหน้า 3 ระบุสองประโยชน์เพิ่มเติม คือ ลดการสูญเสียพลังงานเป็นความร้อนระหว่างส่งทางไกล และนำความร้อนเหลือทิ้งจากกังหันมาใช้อุ่นหอพักใกล้เคียง"
            },
            {
              "q": "Why does the author mention \"hospitals, water treatment stations, and university laboratories\" in paragraph 1?",
              "choices": [
                "To compare their electricity bills with residential neighborhoods",
                "To give examples of vital sites that cannot tolerate prolonged power loss",
                "To argue that centralized utilities ignore industrial customers",
                "To show which buildings generate the most solar energy"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะผู้เขียนยกตัวอย่างสถานที่สำคัญเหล่านี้เพื่อชี้ให้เห็นว่าเหตุใดวิศวกรจึงต้องติดตั้งไมโครกริดเพื่อคุ้มครองระบบโครงสร้างพื้นฐานที่ไม่สามารถปล่อยให้ไฟดับได้"
            }
          ]
        }
      },
      "stage2b": {
        "cloze": {
          "title": "Bioluminescent Signaling in Ocean Ecosystems",
          "intro": "Beneath the sunlit surface layer of the open ocean, chemical light emission serves as a primary mode of ecological communication.",
          "segments": [
            "Because ambient light diminishes exponentially with depth, visual signals at five hundred meters must ",
            {
              "pre": "pen",
              "ans": "etrate",
              "hint": "v. ทะลุผ่าน"
            },
            " cold, clear water across substantial distances. Consequently, most deep-sea organisms emit narrow ",
            {
              "pre": "wav",
              "ans": "elengths",
              "hint": "n. (พหูพจน์) ความยาวคลื่น"
            },
            " centered in the blue spectrum, which travels farthest without scattering. A rare exception occurs among loosejaw dragonfishes, whose ",
            {
              "pre": "spec",
              "ans": "ialized",
              "hint": "adj. เฉพาะทาง"
            },
            " suborbital organs emit far-red pulses invisible to nearly all potential prey. This private channel confers a decisive ",
            {
              "pre": "for",
              "ans": "aging",
              "hint": "n./adj. การหาอาหาร"
            },
            " advantage, illuminating crustacean targets before they detect an approaching predator. Yet optical signaling also carries ",
            {
              "pre": "met",
              "ans": "abolic",
              "hint": "adj. เกี่ยวกับกระบวนการเผาผลาญ"
            },
            " costs and predation risks, since bright flashes can attract unintended larger hunters. To minimize exposure, certain planktonic copepods ",
            {
              "pre": "reg",
              "ans": "ulate",
              "hint": "v. ควบคุม/ปรับ"
            },
            " flash duration precisely, releasing luminous bursts only when water turbulence signals imminent contact. Meanwhile, symbiotic bacteria inside squid light organs rely on ",
            {
              "pre": "den",
              "ans": "sity",
              "hint": "n. ความหนาแน่น"
            },
            "-dependent chemical cues known as quorum sensing before activating luciferase genes. By postponing light synthesis until bacterial populations reach a high ",
            {
              "pre": "thr",
              "ans": "eshold",
              "hint": "n. ขีดระดับ/เกณฑ์ขั้นต่ำ"
            },
            ", microbes conserve energy when dispersed freely in seawater. Together, these finely tuned ",
            {
              "pre": "ada",
              "ans": "ptations",
              "hint": "n. (พหูพจน์) การปรับตัว"
            },
            " demonstrate how physics and natural selection jointly shape underwater optical ",
            {
              "pre": "sig",
              "ans": "naling",
              "hint": "n. การส่งสัญญาณ"
            },
            "."
          ],
          "why": "1) penetrate (v.) ทะลุผ่านน้ำทะเลในระยะไกล; 2) wavelengths (n. พหูพจน์) ความยาวคลื่นแสงสีน้ำเงิน; 3) specialized (adj.) ที่พัฒนาเฉพาะทาง ขยาย suborbital organs; 4) foraging (adj./n.) การล่า/หาอาหาร (foraging advantage); 5) metabolic (adj.) เกี่ยวกับเมแทบอลิซึมหรือการใช้พลังงาน; 6) regulate (v.) ควบคุมระยะเวลาการกะพริบแสง; 7) density (n.) density-dependent cues ความหนาแน่นประชากรแบคทีเรีย; 8) threshold (n.) เกณฑ์ขั้นต่ำที่เริ่มกระตุ้นยีน; 9) adaptations (n. พหูพจน์) การปรับตัวทางวิวัฒนาการหลายรูปแบบ; 10) signaling (n.) การส่งสัญญาณทางแสงใต้น้ำ."
        },
        "daily": [
          {
            "kind": "Policy Memo",
            "title": "Updated Hazardous Chemical & Lithium Battery Storage",
            "text": "Effective December 1, Environmental Health and Safety (EHS) is revising storage rules across Engineering and Chemistry labs. Oxidizing acids and flammable solvents must never share secondary containment trays; each class requires separate color-coded ventilated cabinets. Additionally, research groups testing prototype lithium-ion battery packs for microgrid projects must store damaged or swelling cells inside vermiculite-lined steel drums rather than standard plastic totes. Principal investigators are responsible for signing weekly cabinet inspection logs, and any unmarked reagent bottles discovered during quarterly EHS audits will be confiscated for immediate disposal at the department's expense.",
            "qs": [
              {
                "q": "What is the main purpose of this policy memo?",
                "choices": [
                  "To announce stricter segregation and containment rules for lab hazards",
                  "To schedule quarterly EHS training seminars for engineering freshmen",
                  "To prohibit research groups from testing lithium-ion battery prototypes",
                  "To move all chemistry cabinets into the engineering building"
                ],
                "ans": 0,
                "why": "ข้อ A ถูกเพราะบันทึกแจ้งการปรับกฎการจัดเก็บสารเคมี (แยกกรดออกซิไดซ์กับตัวทำละลายไวไฟ) และแบตเตอรี่ลิเธียมไอออนที่เสียหายให้ปลอดภัยยิ่งขึ้น"
              },
              {
                "q": "How must labs store swollen or damaged lithium-ion battery cells starting December 1?",
                "choices": [
                  "In color-coded plastic totes beside flammable solvents",
                  "Inside standard ventilated chemical fume hoods",
                  "Inside steel drums lined with vermiculite",
                  "In temporary outdoor sheds monitored by EHS auditors"
                ],
                "ans": 2,
                "why": "ข้อ C ถูกเพราะประกาศระบุให้เก็บเซลล์แบตเตอรี่ที่เสียหายหรือบวมไว้ในถังเหล็กบุด้วยเวอร์มิคูไลต์ (vermiculite-lined steel drums) แทนกล่องพลาสติกทั่วไป"
              },
              {
                "q": "What consequence applies if unmarked reagent bottles are found during a quarterly audit?",
                "choices": [
                  "The principal investigator loses access to microgrid batteries.",
                  "EHS removes them for disposal and bills the department.",
                  "Weekly inspection logs are suspended for the rest of the term.",
                  "Students must label them immediately during the audit."
                ],
                "ans": 1,
                "why": "ข้อ B ถูกเพราะประโยคสุดท้ายระบุว่าขวดสารที่ไม่มีฉลากจะถูกยึดไปกำจัดทันทีโดยภาควิชาเป็นผู้รับผิดชอบค่าใช้จ่าย (at the department's expense)"
              }
            ]
          }
        ],
        "academic": {
          "subject": "Urban Climatology",
          "title": "Mitigating Urban Heat Islands Through Surface Albedo",
          "paragraphs": [
            "Urban heat islands arise not merely from dark horizontal surfaces, but from complex three-dimensional geometry. In dense business districts, tall buildings form deep 'street canyons' that trap outgoing longwave infrared radiation and restrict cooling winds. Simultaneously, concrete and brick possess high thermal inertia, absorbing solar energy throughout midday and releasing it gradually after sunset. Consequently, minimum nocturnal temperatures in megacities often exceed surrounding rural baselines by three to five degrees Celsius.",
            "Raising urban albedo—the fraction of incoming sunlight a surface reflects—offers an attractive passive countermeasure. Field studies demonstrate that high-albedo elastomeric roof coatings can reduce rooftop surface temperatures by twenty degrees and cut building cooling electricity by fifteen percent in warm regions. Yet climatologists caution against treating reflective materials as a universal panacea. In high-latitude cities with long, frigid winters, white roofs reflect beneficial winter sunlight, slightly increasing seasonal heating fuel demand—a phenomenon researchers term the 'heating penalty.'",
            "Furthermore, bright high-albedo pavements applied indiscriminately along narrow pedestrian canyons can bounce ultraviolet and visible glare onto adjacent brick facades and passersby, inadvertently elevating mean radiant heat exposure at street level. Optimal urban cooling therefore pairs selective high-albedo roofs in sunny climates with shaded vegetated canopies at ground level."
          ],
          "qs": [
            {
              "q": "According to paragraph 1, how does high thermal inertia in concrete contribute to urban heat islands?",
              "choices": [
                "It accelerates cooling winds through narrow street canyons.",
                "It blocks longwave infrared radiation from entering upper floors.",
                "It prevents nearby rural farmland from absorbing midday sunlight.",
                "It stores daytime heat and radiates it slowly during the night."
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะย่อหน้า 1 อธิบายว่าคอนกรีตและอิฐมี thermal inertia สูง จึงดูดซับพลังงานแสงอาทิตย์ตอนกลางวันและค่อยๆ คายความร้อนออกหลังพระอาทิตย์ตก ทำให้อุณหภูมิต่ำสุดตอนกลางคืนสูงขึ้น"
            },
            {
              "q": "What is the \"heating penalty\" described in paragraph 2?",
              "choices": [
                "Higher winter heating demand caused when reflective roofs bounce away winter sunlight",
                "Fines imposed on building owners who refuse to apply elastomeric coatings",
                "A fifteen percent rise in summer air-conditioning costs in dark-roofed cities",
                "Rapid deterioration of white roof paint during freezing temperatures"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะย่อหน้า 2 ระบุว่าในเมืองละติจูดสูงที่มีฤดูหนาวยาวนาน หลังคาสีขาวจะสะท้อนแสงแดดที่มีประโยชน์ในฤดูหนาว ทำให้ต้องใช้เชื้อเพลิงทำความร้อนเพิ่มขึ้นเล็กน้อย"
            },
            {
              "q": "The word \"indiscriminately\" in paragraph 3 is closest in meaning to",
              "choices": [
                "temporarily",
                "without careful selection",
                "inexpensively",
                "without legal permission"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะ indiscriminately หมายถึงการนำไปใช้อย่างไม่เลือกพื้นที่หรือขาดการพิจารณาบริบทเฉพาะจุด ซึ่งตรงกับ without careful selection"
            },
            {
              "q": "What can be inferred from paragraph 3 about cooling pedestrian walkways in dense cities?",
              "choices": [
                "Elastomeric coatings work better on sidewalks than on rooftops.",
                "Brick facades absorb less sunlight when surrounded by white asphalt.",
                "Tree shade is safer than bright pavements in narrow pedestrian corridors.",
                "Mean radiant heat drops automatically wherever street albedo rises."
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะย่อหน้า 3 ชี้ว่าทางเท้าสะท้อนแสงสูงอาจสะท้อนแสงจ้าและความร้อนใส่คนเดินและผนังตึก ดังนั้นการจับคู่หลังคาสะท้อนแสงกับการปลูกต้นไม้ให้ร่มเงาระดับพื้นดินจึงเหมาะสมกว่า"
            },
            {
              "q": "Why does the author mention \"elastomeric roof coatings\" in paragraph 2?",
              "choices": [
                "To prove that cooling measures always eliminate the heating penalty",
                "To criticize commercial builders for ignoring street canyon winds",
                "To argue that winter electricity demand exceeds summer demand",
                "To provide concrete evidence of albedo's benefits before noting its limits"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะผู้เขียนยกตัวเลขประสิทธิภาพของสารเคลือบหลังคาสีขาวก่อน เพื่อแสดงข้อดีเชิงประจักษ์ แล้วจึงตามด้วยคำว่า Yet เพื่อชี้ข้อจำกัดในเมืองหนาว"
            }
          ]
        }
      }
    },
    "listening": {
      "stage1": {
        "responses": [
          {
            "prompt": "Did you remember to book your advising appointment before the portal closed last night?",
            "q": "Choose the best response.",
            "speaker": "f",
            "accent": "us",
            "choices": [
              "I printed the biology syllabus right after the lecture ended.",
              "The library closes at midnight during final exam week.",
              "Yes, I grabbed the very last morning slot on Thursday.",
              "No, I prefer studying in the quiet wing on the third floor."
            ],
            "ans": 2,
            "why": "ข้อ C ถูกเพราะตอบตรงคำถาม Did you remember to book... โดยยืนยันว่าได้จองเวลาช่วงเช้าวันพฤหัสบดีรอบสุดท้ายไว้ทันพอดี ส่วนข้ออื่นพูดถึงเรื่องอื่นไม่ตรงประเด็น"
          },
          {
            "prompt": "Why is the chemistry stockroom handing out extra splash goggles this afternoon?",
            "q": "Choose the best response.",
            "speaker": "m",
            "accent": "uk",
            "choices": [
              "A large organic synthesis section starts in an hour, and half the freshmen forgot theirs.",
              "Yes, I returned my goggles to the bin near the exit.",
              "The stockroom closes early on Fridays for inventory checks.",
              "Because the safety shower in Room 204 was tested yesterday."
            ],
            "ans": 0,
            "why": "ข้อ A ถูกเพราะตอบเหตุผลของคำถาม Why อย่างสมเหตุสมผล (มีกลุ่มแล็บใหญ่กำลังจะเริ่มและนักศึกษาปีหนึ่งลืมนำแว่นมา) ข้อ B ตอบ Yes กับคำถาม Wh-"
          },
          {
            "prompt": "Could you check the microgrid monitor to see whether the solar array is still charging the battery bank?",
            "q": "Choose the best response.",
            "speaker": "m",
            "accent": "ca",
            "choices": [
              "The bus stops outside the engineering annex every ten minutes.",
              "Sure, I can submit the battery budget report next semester.",
              "It rained all morning, so I brought an extra umbrella.",
              "Give me a second—the dashboard says it's exporting forty kilowatts right now."
            ],
            "ans": 3,
            "why": "ข้อ D ถูกเพราะตอบรับคำขอให้ช่วยดูหน้าจอมอนิเตอร์และรายงานค่าที่ปรากฏบนแดชบอร์ดทันที ส่วนข้ออื่นเป็นตัวลวงที่ใช้คำซ้ำ (battery, bus)"
          },
          {
            "prompt": "Isn't the brick plaza noticeably hotter than the shaded lawn beside the pond?",
            "q": "Choose the best response.",
            "speaker": "f",
            "accent": "us",
            "choices": [
              "Yes, I checked out two ecology books from the reserve desk.",
              "Definitely—the bricks soak up afternoon sun like a giant radiator.",
              "The campus pond was drained for maintenance last autumn.",
              "Actually, my advisor recommended taking climatology next spring."
            ],
            "ans": 1,
            "why": "ข้อ B ถูกเพราะตอบรับเชิงเห็นด้วยกับคำถามเชิงเปรียบเทียบอุณหภูมิของลานอิฐกับสนามหญ้าใต้ร่มเงา พร้อมอธิบายเหตุผลอย่างเป็นธรรมชาติ"
          }
        ],
        "conversation": {
          "title": "Rescheduling an Academic Advising Slot",
          "lines": [
            {
              "role": "Advisor",
              "acc": "ca",
              "sex": "f",
              "text": "Good morning, Daniel. Come on in—you mentioned on the phone that your advising hold is blocking registration?"
            },
            {
              "role": "Student",
              "acc": "us",
              "sex": "m",
              "text": "Yes, thanks for squeezing me in, Dr. Patel. My original Tuesday slot overlaps with a mandatory Chemistry 204 practical exam."
            },
            {
              "role": "Advisor",
              "acc": "ca",
              "sex": "f",
              "text": "Oh, I see—those lab practicals cannot be moved. Did you bring your updated degree audit and next semester's draft schedule?"
            },
            {
              "role": "Student",
              "acc": "us",
              "sex": "m",
              "text": "I did, right here. The tricky part is that the Environmental Sensors lab meets at the exact same hour as my required statistics seminar."
            },
            {
              "role": "Advisor",
              "acc": "ca",
              "sex": "f",
              "text": "Let's check the department spreadsheet. Good news—Statistics opened a second afternoon section yesterday because of high enrollment."
            },
            {
              "role": "Student",
              "acc": "us",
              "sex": "m",
              "text": "That solves everything! Can I swap into that afternoon section as soon as my hold is cleared?"
            },
            {
              "role": "Advisor",
              "acc": "ca",
              "sex": "f",
              "text": "Wait until noon when the portal refreshes your clearance, then add the afternoon section right away before seats fill up."
            }
          ],
          "qs": [
            {
              "q": "Why did Daniel need to reschedule his original advising appointment?",
              "choices": [
                "It conflicted with a required chemistry practical exam.",
                "He forgot to print his degree audit before Tuesday.",
                "His statistics professor canceled the Tuesday seminar.",
                "The online advising portal was offline for maintenance."
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะ Daniel บอกว่าเวลาเดิมวันอังคารชนกับการสอบปฏิบัติ (practical exam) วิชา Chemistry 204 ซึ่งเลื่อนไม่ได้"
            },
            {
              "q": "How is the time conflict between Daniel's two spring courses resolved?",
              "choices": [
                "He decides to postpone the Environmental Sensors lab until summer.",
                "Dr. Patel waives his statistics requirement for the major.",
                "The Chemistry department moves its lab practical to the afternoon.",
                "He plans to join a newly added afternoon statistics section."
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะอาจารย์ที่ปรึกษาเช็กตารางแล้วพบว่าภาควิชาสถิติเพิ่งเปิดกลุ่มเรียนช่วงบ่ายเพิ่มอีกหนึ่งกลุ่มเมื่อวานนี้"
            },
            {
              "q": "What does Dr. Patel advise Daniel to do next?",
              "choices": [
                "Wait for an email confirmation from the chemistry instructor.",
                "Return to her office on Tuesday with a new checklist.",
                "Register for the afternoon section after noon when the hold clears.",
                "Contact the registrar to request an extra seat in morning statistics."
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะ Dr. Patel บอกให้รอถึงเที่ยงเมื่อระบบอัปเดตปลดล็อก hold แล้วรีบลงทะเบียนกลุ่มช่วงบ่ายทันที"
            }
          ]
        },
        "announcement": {
          "title": "Chemistry Wing Fume Hood Inspection",
          "speaker": "m",
          "accent": "us",
          "lines": [
            "Attention all laboratory assistants and undergraduate researchers in the Science Hall Chemistry Wing.",
            "Certified ventilation technicians will calibrate every fume hood across Labs 3B through 3E tomorrow morning between 8:00 and 10:30.",
            "Please pause all wet chemical reactions prior to 7:45 a.m. and transfer open reagent flasks into locked safety cabinets.",
            "Work may resume as soon as inspectors place green verification tags on the hood frames."
          ],
          "qs": [
            {
              "q": "What is the purpose of the technicians' visit tomorrow morning?",
              "choices": [
                "To replace broken glass sashes in every student workbench",
                "To test and adjust airflow calibration on chemistry fume hoods",
                "To inspect student safety goggles inside Labs 3B through 3E",
                "To remove outdated reagent flasks from locked cabinets"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะประกาศแจ้งว่าช่างผู้เชี่ยวชาญจะเข้ามาปรับเทียบ (calibrate) ตู้ดูดควันในห้องแล็บ 3B–3E"
            },
            {
              "q": "What must researchers do before 7:45 a.m.?",
              "choices": [
                "Lock open chemical containers inside safety cabinets",
                "Place green verification tags on all fume hood frames",
                "Complete wet chemical reactions while technicians monitor airflow",
                "Move experiments from Lab 3B into Lab 3E"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะประกาศสั่งให้หยุดปฏิกิริยาเคมีและเก็บขวดสารที่เปิดอยู่เข้าตู้เซฟตี้นิรภัยก่อน 7:45 น. (ข้อ B ผิดเพราะช่างจะเป็นผู้ติดป้ายเขียว)"
            },
            {
              "q": "How will students know it is safe to restart experiments?",
              "choices": [
                "Ventilation fans will shut off across the wing.",
                "An email will be sent promptly at 10:30 a.m.",
                "Green tags will appear on the fume hood frames.",
                "The laboratory doors will automatically unlock."
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะประโยคสุดท้ายระบุว่าเริ่มทำงานต่อได้ทันทีที่ผู้ตรวจสอบติดป้ายรับรองสีเขียว (green verification tags) บนโครงตู้ดูดควัน"
            }
          ]
        },
        "talk": {
          "subject": "Marine Biology",
          "title": "Symbiotic Bioluminescence in the Hawaiian Bobtail Squid",
          "speaker": "f",
          "accent": "uk",
          "lines": [
            "Today let's examine one of the clearest examples of symbiosis in marine biology: the partnership between the Hawaiian bobtail squid and the bacterium Vibrio fischeri.",
            "This thumb-sized squid hides buried in shallow coastal sand throughout daylight hours and emerges at night to hunt small shrimp near the surface.",
            "Because moonlight shining downward would cast a dark shadow onto the sandy seafloor, predators cruising below could easily spot the squid's outline.",
            "To eliminate that telltale shadow, the squid houses dense colonies of glowing Vibrio bacteria inside a specialized light organ on its underside.",
            "Remarkably, the squid adjusts shutter-like ink sacs around the organ so its downward glow precisely matches the brightness of moonlight above.",
            "At dawn, right before burrowing back into the sand, the squid expels roughly ninety-five percent of its bacteria into the surrounding seawater.",
            "During the daytime rest, the remaining five percent multiply rapidly inside the nutrient-rich organ, restoring full illumination by dusk while seeding nearby waters for newly hatched squids."
          ],
          "qs": [
            {
              "q": "What is the main focus of the lecture?",
              "choices": [
                "How Hawaiian bobtail squids hunt shrimp in deep ocean trenches",
                "Why Vibrio fischeri bacteria survive better in sand than in open water",
                "How seasonal changes in moonlight alter squid migration patterns",
                "How a squid uses symbiotic bacteria for nocturnal camouflage"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะอาจารย์อธิบายความสัมพันธ์แบบพึ่งพาอาศัยกันระหว่างหมึก bobtail กับแบคทีเรีย Vibrio fischeri เพื่อใช้เรืองแสงพรางเงาตอนกลางคืน"
            },
            {
              "q": "Why does the squid control the light organ with shutter-like ink sacs?",
              "choices": [
                "To attract small shrimp directly toward its tentacles",
                "To match the intensity of downward moonlight and erase its shadow",
                "To block harmful ultraviolet sunlight while resting in shallow sand",
                "To prevent predators from smelling the nutrient-rich light organ"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะหมึกปรับม่านถุงหมึกเพื่อควบคุมความสว่างของแสงให้พอดีกับแสงจันทร์ที่ส่องลงมา จะได้ไม่เกิดเงาดำให้ผู้ล่าด้านล่างสังเกตเห็น"
            },
            {
              "q": "What happens to the bacterial colony each morning at dawn?",
              "choices": [
                "Nearly all of the bacteria are released back into the ocean.",
                "The entire colony dies when the squid buries itself in sand.",
                "The bacteria switch from blue light to invisible infrared light.",
                "Newly hatched squids transfer bacteria directly to adult squids."
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะอาจารย์ระบุว่าตอนรุ่งเช้า หมึกจะขับแบคทีเรียประมาณ 95% ออกสู่ทะเล (expels roughly ninety-five percent)"
            },
            {
              "q": "According to the lecturer, what are two results of venting bacteria at dawn?",
              "choices": [
                "It cools the squid's body and attracts adult mates.",
                "It removes waste ink and blinds nearby predatory fish.",
                "It prepares a fresh evening batch and supplies bacteria for young squids.",
                "It stops shrimp from hiding under coastal sand during daytime."
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะ 5% ที่เหลือจะเพิ่มจำนวนใหม่ให้สว่างเต็มที่ตอนพลบค่ำ และแบคทีเรียที่ถูกปล่อยออกไปจะกระจายในน้ำเพื่อให้ลูกหมึกที่เพิ่งฟักสามารถรับเข้าไปอาศัยได้"
            }
          ]
        }
      },
      "stage2a": {
        "responses": [
          {
            "prompt": "Have you completed the online electronics safety quiz so you can check out a soldering kit?",
            "q": "Choose the best response.",
            "speaker": "m",
            "accent": "uk",
            "choices": [
              "Yes, I finished it last night—my completion badge is right here on my phone.",
              "The robotics team meets in the basement every Wednesday evening.",
              "No, I usually buy my notebooks at the campus bookstore.",
              "Actually, the multimeter battery needs to be replaced soon."
            ],
            "ans": 0,
            "why": "ข้อ A ถูกเพราะตอบรับคำถามเรื่องการทำแบบทดสอบความปลอดภัยออนไลน์พร้อมยื่นหลักฐานให้ดูทันที"
          },
          {
            "prompt": "Why did facilities install wooden shade canopies over the south campus bus stop?",
            "q": "Choose the best response.",
            "speaker": "f",
            "accent": "ca",
            "choices": [
              "Bus passes are discounted for students living off campus.",
              "The south gate closes for paving every August.",
              "Summer pavement temperatures there were reaching nearly fifty degrees Celsius.",
              "Yes, I prefer walking under the maple trees along Main Street."
            ],
            "ans": 2,
            "why": "ข้อ C ถูกเพราะให้เหตุผลเชิงอุณหภูมิพื้นผิวหน้าร้อนที่สูงมาก สอดคล้องกับคำถาม Why ที่ถามถึงการติดตั้งหลังคากันแดด"
          },
          {
            "prompt": "Should I upload my draft degree audit before I walk into the advising office?",
            "q": "Choose the best response.",
            "speaker": "f",
            "accent": "us",
            "choices": [
              "The audit report lists every course required for graduation.",
              "Yes, uploading it early gives your advisor time to check your credits beforehand.",
              "No, the advising office moved to the second floor last month.",
              "I already spoke to my chemistry professor after lab."
            ],
            "ans": 1,
            "why": "ข้อ B ถูกเพราะตอบคำถาม Should I... โดยแนะนำให้ส่งล่วงหน้าเพื่อให้อาจารย์ที่ปรึกษาตรวจหน่วยกิตไว้ก่อน"
          }
        ],
        "conversation": {
          "title": "Checking Out a Soldering Kit in the Electronics Lab",
          "lines": [
            {
              "role": "Lab Technician",
              "acc": "uk",
              "sex": "m",
              "text": "Hi there! Welcome to the Prototyping Workshop. Are you picking up a soldering kit for your sensor project?"
            },
            {
              "role": "Student",
              "acc": "us",
              "sex": "f",
              "text": "Yes, please. It's my first time working here, so I already passed the online bench safety orientation."
            },
            {
              "role": "Lab Technician",
              "acc": "uk",
              "sex": "m",
              "text": "Great, I see your name cleared in the system. Here's your kit with lead-free solder and a temperature-controlled iron."
            },
            {
              "role": "Student",
              "acc": "us",
              "sex": "f",
              "text": "Thanks! Is there anything special I should watch out for at Station 4?"
            },
            {
              "role": "Lab Technician",
              "acc": "uk",
              "sex": "m",
              "text": "Make sure you clip the grounding strap to your wrist before handling those microchips, and switch on the fume extractor fan."
            },
            {
              "role": "Student",
              "acc": "us",
              "sex": "f",
              "text": "Got it—grounding strap on, fume extractor running. What time do I need to return the kit?"
            },
            {
              "role": "Lab Technician",
              "acc": "uk",
              "sex": "m",
              "text": "Please unplug the iron by 4:45 so it cools down completely before we lock the tool locker at 5:00."
            }
          ],
          "qs": [
            {
              "q": "Why was the student eligible to borrow a soldering kit right away?",
              "choices": [
                "She had worked at Station 4 during the previous semester.",
                "Her engineering professor signed a special tool waiver.",
                "She brought her own lead-free solder from home.",
                "She had already completed the online safety orientation."
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะนักศึกษาบอกว่าเธอผ่านแบบทดสอบความปลอดภัยออนไลน์ (online bench safety orientation) แล้ว และช่างเทคนิคก็เห็นชื่อผ่านเกณฑ์ในระบบ"
            },
            {
              "q": "Which safety steps does the technician remind the student to follow at Station 4?",
              "choices": [
                "Wear chemical aprons and lower the glass fume sash",
                "Attach a wrist grounding strap and turn on the fume extractor",
                "Test the wall outlet voltage with a digital multimeter",
                "Place heated microchips inside a steel storage bin"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะช่างเทคนิคย้ำให้ใส่สายรัดข้อมือป้องกันไฟฟ้าสถิต (grounding strap) และเปิดพัดลมดูดควัน (fume extractor)"
            },
            {
              "q": "Why must the student unplug the iron by 4:45?",
              "choices": [
                "So it has time to cool before the tool locker closes at 5:00",
                "Because building electricity switches to the microgrid at 5:00",
                "So the next class can calibrate the iron for lead-free solder",
                "Because the fume extractor shuts off automatically at 4:45"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะต้องถอดปลั๊กตอน 4:45 น. เพื่อให้หัวแร้งเย็นลงทันก่อนปิดตู้เก็บอุปกรณ์เวลา 5:00 น."
            }
          ]
        },
        "announcement": {
          "title": "Student Advising Walk-In Hours Extended",
          "speaker": "f",
          "accent": "us",
          "lines": [
            "Undergraduate Advising in Science Hall will extend walk-in drop-in hours all week ahead of Friday's add-drop deadline.",
            "Advisors will be available from 9:00 a.m. until 6:00 p.m. daily for quick fifteen-minute schedule reviews and prerequisite checks.",
            "Please bring your laptop with your degree worksheet already open to keep the line moving smoothly.",
            "Students needing long-term graduation planning should still book a full half-hour appointment for next week."
          ],
          "qs": [
            {
              "q": "Why is the advising office extending its drop-in hours this week?",
              "choices": [
                "To handle high demand before the course add-drop deadline",
                "To help seniors apply for summer laboratory internships",
                "To compensate for canceled appointments earlier in the month",
                "To review graduation theses with faculty supervisors"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะขยายเวลาชั่วโมง walk-in ตลอดสัปดาห์เพื่อรองรับช่วงก่อนถึงกำหนดเส้นตายเพิ่ม-ถอนวิชา (add-drop deadline) วันศุกร์"
            },
            {
              "q": "Who is asked to schedule a full thirty-minute appointment next week instead?",
              "choices": [
                "Students experiencing portal login errors",
                "First-year students needing prerequisite overrides",
                "Anyone wishing to discuss long-term graduation planning",
                "Students who forget to bring a laptop"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะประกาศระบุให้ผู้ที่ต้องการวางแผนการเรียนระยะยาวจนจบการศึกษา (long-term graduation planning) จองคิวเต็ม 30 นาทีในสัปดาห์หน้า"
            }
          ]
        },
        "talk": {
          "subject": "Urban Planning",
          "title": "Cooling Neighborhoods with Urban Tree Canopies",
          "speaker": "m",
          "accent": "ca",
          "lines": [
            "When cities look for affordable ways to fight extreme summer heat, expanding the urban tree canopy consistently ranks among the most effective tools.",
            "Mature trees cool streets through two distinct mechanisms working at the same time.",
            "First, broad leaf canopies intercept solar radiation before it ever reaches dark asphalt roads or concrete sidewalks, keeping pavement surfaces up to fifteen degrees cooler.",
            "Second, trees draw moisture from the soil and release water vapor through microscopic pores in their leaves, a natural cooling process called transpiration.",
            "Unlike mechanical air conditioners, which cool indoor rooms only by pumping hot exhaust into the street outside, transpiring trees genuinely remove heat energy from the surrounding air.",
            "However, urban foresters cannot simply plant any fast-growing tree along busy avenues.",
            "Because city sidewalks have compacted soil, salt runoff, and intense reflected heat, planners must select drought-tolerant native species with deep roots that won't buckle underground utility lines or crack pavements."
          ],
          "qs": [
            {
              "q": "What are the two ways trees cool city streets according to the speaker?",
              "choices": [
                "Shading dark surfaces and releasing water vapor through leaves",
                "Increasing wind speed and reflecting heat into upper apartments",
                "Absorbing carbon dioxide and cooling indoor air conditioners",
                "Blocking winter storms and warming underground utility lines"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะอาจารย์อธิบายสองกลไก ได้แก่ การบังแสงแดดไม่ให้ตกกระทบพื้นถนน/ทางเท้า และการคายน้ำ (transpiration) ผ่านใบ"
            },
            {
              "q": "How does tree transpiration differ from mechanical air conditioning?",
              "choices": [
                "Transpiration works best inside closed buildings rather than outdoors.",
                "Air conditioners cool rooms faster without using electricity.",
                "Trees cool ambient air instead of dumping waste heat outdoors.",
                "Transpiration raises street humidity without lowering temperatures."
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะเครื่องปรับอากาศพ่นความร้อนทิ้งออกสู่ถนนภายนอก แต่ต้นไม้ที่คายน้ำจะดึงพลังงานความร้อนออกจากอากาศรอบข้างจริงๆ"
            },
            {
              "q": "Why must urban planners choose tree species carefully for city sidewalks?",
              "choices": [
                "Native trees grow too slowly to provide shade within ten years.",
                "Fast-growing trees attract insects that damage nearby buildings.",
                "Most trees cannot survive without daily watering from fire hydrants.",
                "Sidewalk soil is compacted and roots can damage pipes or pavement."
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะทางเท้าในเมืองมีดินอัดแน่น น้ำเค็มไหลผ่าน และความร้อนสะท้อนสูง จึงต้องเลือกพันธุ์ไม้พื้นเมืองทนแล้งที่รากลึกลงล่างไม่ดันท่อสาธารณูปโภคหรือทำทางเท้าแตกร้าว"
            },
            {
              "q": "What does the speaker recommend when selecting street trees?",
              "choices": [
                "Using shallow-rooted non-native trees with broad trunks",
                "Planting drought-tolerant native species with deep root systems",
                "Removing paved sidewalks entirely before planting saplings",
                "Installing metal roofs instead of planting trees on busy roads"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะประโยคสุดท้ายแนะนำให้เลือกใช้พันธุ์ไม้พื้นเมืองที่ทนแล้งและมีระบบรากลึก (drought-tolerant native species with deep roots)"
            }
          ]
        }
      },
      "stage2b": {
        "responses": [
          {
            "prompt": "Did the microgrid inverter keep lab voltage steady when the utility breaker tripped during yesterday's simulation?",
            "q": "Choose the best response.",
            "speaker": "f",
            "accent": "uk",
            "choices": [
              "Yes, the library roof holds more solar panels than the chemistry wing.",
              "Remarkably steady—frequency dipped for less than twenty milliseconds before stabilizing.",
              "No, the advising office closed early because of the thunderstorm.",
              "I prefer working with analog voltmeters when teaching introductory labs."
            ],
            "ans": 1,
            "why": "ข้อ B ถูกเพราะตอบตรงคำถามเรื่องเสถียรภาพของแรงดันและความถี่ไฟฟ้าขณะจำลองสถานการณ์ไฟดับด้วยข้อมูลทางเทคนิคที่สอดคล้อง"
          },
          {
            "prompt": "Why are the oceanography researchers scheduling their bioluminescent plankton sampling after midnight?",
            "q": "Choose the best response.",
            "speaker": "m",
            "accent": "us",
            "choices": [
              "Boat fuel costs less after the harbor gates close.",
              "Most coastal shrimp migrate toward deep trenches at noon.",
              "The lab supervisor requires splash goggles on every research vessel.",
              "Vertical migrators rise near the surface then, and minimal moonlight makes flashes detectable."
            ],
            "ans": 3,
            "why": "ข้อ D ถูกเพราะอธิบายเหตุผลเชิงนิเวศวิทยา (แพลงก์ตอนอพยพขึ้นสู่ผิวน้ำตอนกลางคืนและแสงน้อยทำให้ตรวจจับแสงเรืองชีวภาพได้ชัด)"
          },
          {
            "prompt": "Can an undergraduate waive the circuits prerequisite if they already completed an electronics internship?",
            "q": "Choose the best response.",
            "speaker": "m",
            "accent": "ca",
            "choices": [
              "The prerequisite course has three lab sections this fall.",
              "No, the electronics stockroom does not lend tools over winter break.",
              "Only if the department chair reviews your employer evaluation and approves a formal petition.",
              "Yes, the soldering workshop opens at eight o'clock sharp."
            ],
            "ans": 2,
            "why": "ข้อ C ถูกเพราะตอบเงื่อนไขการขอยกเว้นวิชาพื้นฐาน (prerequisite waiver) ได้ชัดเจนและเป็นจริงตามระบบวิชาการ"
          }
        ],
        "conversation": {
          "title": "Reviewing Capstone Microgrid Load Data with an Advisor",
          "lines": [
            {
              "role": "Engineering Advisor",
              "acc": "uk",
              "sex": "f",
              "text": "Come in, Liam. I reviewed the evening discharge curves from your campus microgrid capstone simulation—your battery sizing looks solid."
            },
            {
              "role": "Senior Student",
              "acc": "ca",
              "sex": "m",
              "text": "Thanks, Professor Lin! Though I noticed a sharp demand spike around 6:00 p.m. when both the dorm kitchens and chiller pumps turn on."
            },
            {
              "role": "Engineering Advisor",
              "acc": "uk",
              "sex": "f",
              "text": "Good catch. If you discharge the lithium bank too aggressively at six, you risk dropping below reserve margins before morning solar kicks in."
            },
            {
              "role": "Senior Student",
              "acc": "ca",
              "sex": "m",
              "text": "Could we program smart relays to pre-cool the building chilled-water tanks at 2:00 p.m., when solar generation peaks?"
            },
            {
              "role": "Engineering Advisor",
              "acc": "uk",
              "sex": "f",
              "text": "Yes—thermal energy storage would flatten that evening curve nicely. Before running hardware tests on the bench next week, did EHS inspect your high-voltage enclosure?"
            },
            {
              "role": "Senior Student",
              "acc": "ca",
              "sex": "m",
              "text": "Not yet; their safety officer is coming Tuesday at ten to verify our insulated matting and emergency disconnect switch."
            },
            {
              "role": "Engineering Advisor",
              "acc": "uk",
              "sex": "f",
              "text": "Perfect. Send me the signed clearance sheet once that passes, and let's also confirm your spring elective swap before advising closes Friday."
            }
          ],
          "qs": [
            {
              "q": "What problem did Liam observe in his 6:00 p.m. microgrid simulation data?",
              "choices": [
                "Solar panels stopped generating electricity by 2:00 p.m.",
                "A sudden surge in evening demand could deplete battery reserves overnight.",
                "Chiller pumps failed to respond to automated smart relays.",
                "The lithium battery bank overheated inside the high-voltage enclosure."
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะ Liam พบช่วงใช้ไฟพุ่งสูงตอน 6 โมงเย็น และอาจารย์เตือนว่าหากคายประจุแบตเตอรี่หนักเกินไปตอนนั้น พลังงานสำรองอาจไม่พอถึงเช้า"
            },
            {
              "q": "How do Liam and Professor Lin plan to reduce the evening electricity spike?",
              "choices": [
                "By doubling the size of the lithium battery bank",
                "By disconnecting dormitory kitchens during peak hours",
                "By using surplus afternoon solar power to pre-cool water tanks",
                "By switching the entire campus back to the municipal utility grid"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะ Liam เสนอใช้รีเลย์อัจฉริยะทำความเย็นในถังน้ำเย็นล่วงหน้าตอนบ่าย 2 โมงช่วงที่โซลาร์ผลิตไฟสูงสุด เพื่อช่วยลดภาระช่วงเย็น"
            },
            {
              "q": "What must happen before Liam conducts hardware tests on the electronics bench?",
              "choices": [
                "The campus microgrid must run an overnight islanding trial.",
                "He must finish swapping his spring elective on the advising portal.",
                "Professor Lin has to recalibrate the dorm kitchen meters.",
                "An EHS officer must inspect and sign off on his high-voltage safety setup."
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะอาจารย์ย้ำให้ส่งใบรับรองที่ลงนามหลังเจ้าหน้าที่ความปลอดภัย EHS ตรวจแผ่นฉนวนและสวิตช์ตัดไฟฉุกเฉินในวันอังคารเสียก่อน"
            }
          ]
        },
        "announcement": {
          "title": "Mandatory High-Voltage Electronics Bench Clearance",
          "speaker": "m",
          "accent": "us",
          "lines": [
            "Attention senior design teams operating power-electronics benches above forty-eight volts DC in Engineering Lab 410.",
            "Effective immediately, no student may energize a high-voltage test rig alone; a trained safety partner must remain within visual range at all times.",
            "Verify that dielectric rubber floor mats lie flat beneath your workstation and test the red wall-mounted emergency shutoff button prior to each session.",
            "Teams skipping the two-person buddy check will forfeit after-hours swipe access for the remainder of the term."
          ],
          "qs": [
            {
              "q": "Which rule applies to students working with equipment exceeding forty-eight volts DC?",
              "choices": [
                "A trained partner must be present and able to see the workspace.",
                "Work may only be conducted during morning hours with an instructor.",
                "Rubber mats must be removed before testing the emergency button.",
                "Power supplies must be moved out of Engineering Lab 410."
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะประกาศห้ามจ่ายไฟทำงานคนเดียว ต้องมีคู่บัดดี้ที่ผ่านการอบรมอยู่ในระยะสายตาตลอดเวลา"
            },
            {
              "q": "What penalty faces a team that ignores the buddy-system requirement?",
              "choices": [
                "Their project budget will be reduced by EHS.",
                "They will lose after-hours card access to the lab for the rest of the term.",
                "They must retake the freshman soldering safety quiz.",
                "Their emergency shutoff switches will be locked."
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะประโยคสุดท้ายระบุว่าทีมที่ไม่ทำตามระบบบัดดี้จะถูกเพิกถอนสิทธิ์แตะบัตรเข้าห้องแล็บนอกเวลาทำการ (forfeit after-hours swipe access) ตลอดเทอม"
            }
          ]
        },
        "talk": {
          "subject": "Energy Systems",
          "title": "How Microgrid Inverters Stabilize Frequency During Grid Outages",
          "speaker": "f",
          "accent": "us",
          "lines": [
            "When an extreme summer heatwave knocks out regional transmission lines, a campus microgrid has only fractions of a second to transition seamlessly into islanded operation.",
            "Behind that rapid transition lies an important distinction between two classes of power electronics: grid-following and grid-forming inverters.",
            "Most standard rooftop solar systems rely on grid-following inverters, which act like musicians listening carefully to an orchestra conductor.",
            "They lock onto the voltage waveform and sixty-hertz frequency dictated by massive spinning generators on the main utility grid, then inject current in step.",
            "Consequently, if the utility grid fails, a purely grid-following inverter has no conductor left to track and must shut down immediately for safety.",
            "Grid-forming inverters, by contrast, operate like independent conductors that establish their own stable voltage and frequency reference.",
            "Coupled with fast-responding lithium batteries, advanced software mimics the physical momentum—or synthetic inertia—of heavy steam turbines, absorbing sudden motor start-ups without destabilizing sensitive lab instruments.",
            "As cities add more renewable microgrids to withstand summer grid strain, grid-forming controls are becoming indispensable for keeping critical campuses online."
          ],
          "qs": [
            {
              "q": "Why does the professor compare a grid-following inverter to a musician in an orchestra?",
              "choices": [
                "To show that solar inverters require regular manual tuning by technicians",
                "To illustrate why multiple inverters often interfere with one another",
                "To explain how it synchronizes with an existing external signal to inject power",
                "To argue that utility power plants operate more quietly than battery banks"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะเปรียบเทียบให้เห็นภาพว่า grid-following inverter ต้องฟังสัญญาณรูปคลื่นแรงดันและความถี่ 60 Hz จากระบบหลักเสมือนนักดนตรีฟังวาทยกร"
            },
            {
              "q": "What happens to a standard grid-following solar inverter during a utility blackout?",
              "choices": [
                "It switches automatically to synthetic inertia mode within seconds.",
                "It draws extra current from nearby campus laboratory instruments.",
                "It boosts frequency above sixty hertz to compensate for lost lines.",
                "It turns off immediately because it loses its reference signal."
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะเมื่อกริดหลักล่ม ไม่มีสัญญาณอ้างอิงให้ติดตาม grid-following inverter จึงต้องปิดตัวเองทันทีเพื่อความปลอดภัย"
            },
            {
              "q": "What role does \"synthetic inertia\" play in a grid-forming microgrid?",
              "choices": [
                "It absorbs sudden load spikes so local voltage and frequency remain steady.",
                "It slows down spinning steam turbines at centralized coal plants.",
                "It disconnects residential buildings when heatwaves raise A/C demand.",
                "It stores excess solar heat inside battery enclosures."
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะซอฟต์แวร์จำลองความเฉื่อย (synthetic inertia) ร่วมกับแบตเตอรี่ที่ตอบสนองไว ช่วยซับแรงกระชากเมื่อมอเตอร์สตาร์ตไม่ให้เครื่องมือแล็บได้รับผลกระทบ"
            },
            {
              "q": "What overall conclusion does the lecturer draw at the end of the talk?",
              "choices": [
                "Extreme heatwaves make solar generation less reliable than overhead wires.",
                "Spinning steam turbines will eventually replace lithium battery storage.",
                "Grid-following inverters should be banned on all university rooftops.",
                "Grid-forming controls are essential as cities rely more on renewable microgrids."
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะประโยคสรุปชี้ว่าเมื่อเมืองพึ่งพาไมโครกริดพลังงานหมุนเวียนมากขึ้นเพื่อรับมือคลื่นความร้อน ระบบควบคุมแบบ grid-forming จึงกลายเป็นสิ่งจำเป็นอย่างยิ่ง"
            }
          ]
        }
      }
    },
    "writing": {
      "build": [
        {
          "cue": "Did you finish checking the urban heat map before class?",
          "prefix": "Yes, I ",
          "chunks": [
            "three",
            "temperatures",
            "neighborhoods",
            "across",
            "compared",
            "the",
            "city",
            "surface"
          ],
          "ans": "Yes, I compared the surface temperatures across three city neighborhoods.",
          "suffix": ".",
          "why": "โครงสร้าง Subject + Verb + Object + Prepositional phrase: I compared [the surface temperatures] [across three city neighborhoods]."
        },
        {
          "cue": "Why did the lab supervisor stop the distillation?",
          "prefix": "She noticed ",
          "chunks": [
            "become",
            "tube",
            "had",
            "that",
            "cooling",
            "loose",
            "the",
            "water"
          ],
          "ans": "She noticed that the cooling water tube had become loose.",
          "suffix": ".",
          "why": "ประโยคกรรมที่ขึ้นด้วย that-clause และใช้ Past Perfect (had become loose) เพื่อบอกเหตุการณ์ที่เกิดก่อนที่หัวหน้าแล็บจะสังเกตเห็น"
        },
        {
          "cue": "Can I register for organic chemistry tomorrow morning?",
          "prefix": "You cannot ",
          "chunks": [
            "academic",
            "registration",
            "until",
            "the",
            "enroll",
            "your",
            "hold",
            "advisor",
            "lifts"
          ],
          "ans": "You cannot enroll until your academic advisor lifts the registration hold.",
          "suffix": ".",
          "why": "ใช้โครงสร้าง cannot + V1 + until + S + V (enroll until your academic advisor lifts the registration hold)"
        },
        {
          "cue": "Where should we place the campus microgrid batteries?",
          "prefix": "The engineers suggested ",
          "chunks": [
            "ventilated",
            "utility",
            "installing",
            "room",
            "inside",
            "them",
            "a"
          ],
          "ans": "The engineers suggested installing them inside a ventilated utility room.",
          "suffix": ".",
          "why": "คำกริยา suggest ตามด้วย V-ing (installing them) ตามด้วยบุพบทบอกสถานที่ inside a ventilated utility room"
        },
        {
          "cue": "Do you know how deep-sea lanternfish hide from predators below them?",
          "prefix": "I read ",
          "chunks": [
            "match",
            "lights",
            "above",
            "sunlight",
            "their",
            "that",
            "the",
            "dim",
            "belly"
          ],
          "ans": "I read that their belly lights match the dim sunlight above.",
          "suffix": ".",
          "why": "noun clause หลัง read that: their belly lights (ประธานพหูพจน์) + match (กริยาพหูพจน์) + the dim sunlight above"
        },
        {
          "cue": "Who verified the grounding straps on the electronics benches?",
          "prefix": "Could you ask ",
          "chunks": [
            "passed",
            "technician",
            "every",
            "whether",
            "the",
            "inspection",
            "workbench"
          ],
          "ans": "Could you ask the technician whether every workbench passed inspection?",
          "suffix": "?",
          "why": "คำถามซ้อน (embedded question) ใช้ ask + someone + whether + S + V (whether every workbench passed inspection) โดยเรียงแบบประโยคบอกเล่า"
        },
        {
          "cue": "What helped reduce the afternoon heat inside the courtyard?",
          "prefix": "Planting ",
          "chunks": [
            "significantly",
            "pavement",
            "lowered",
            "trees",
            "the",
            "temperature",
            "shade",
            "broad"
          ],
          "ans": "Planting broad shade trees lowered the pavement temperature significantly.",
          "alts": [
            "Planting broad shade trees significantly lowered the pavement temperature."
          ],
          "suffix": ".",
          "why": "ประธาน Gerund (Planting broad shade trees) ตามด้วยกริยา lowered + กรรม the pavement temperature + คำวิเศษณ์ significantly (วางหน้าหรือท้ายกริยาก็ได้)"
        },
        {
          "cue": "When will the solar microgrid switch back to normal utility power?",
          "prefix": "Do you know ",
          "chunks": [
            "standard",
            "crew",
            "restore",
            "will",
            "the",
            "when",
            "grid",
            "maintenance",
            "power"
          ],
          "ans": "Do you know when the maintenance crew will restore standard grid power?",
          "suffix": "?",
          "why": "embedded question หลัง Do you know ใช้คำเชื่อม when + ประธาน (the maintenance crew) + will restore (ห้ามสลับ will หน้าประธาน)"
        },
        {
          "cue": "Did the student forget to label the chemical waste bottle?",
          "prefix": "No, she ",
          "chunks": [
            "date",
            "compound",
            "and",
            "the",
            "wrote",
            "clearly",
            "today's",
            "name"
          ],
          "ans": "No, she wrote the compound name and today's date clearly.",
          "alts": [
            "No, she wrote today's date and the compound name clearly."
          ],
          "suffix": ".",
          "why": "กริยา wrote + กรรมคู่ (the compound name and today's date) + คำวิเศษณ์ clearly ขยายท้ายประโยค"
        },
        {
          "cue": "Why do cities experience warmer nights than nearby farmland?",
          "prefix": "Because dark ",
          "chunks": [
            "sunset",
            "daytime",
            "slowly",
            "stored",
            "buildings",
            "heat",
            "after",
            "release"
          ],
          "ans": "Because dark buildings release stored daytime heat slowly after sunset.",
          "suffix": ".",
          "why": "ลำดับคำในประโยคเหตุผล: dark buildings (ประธาน) + release (กริยา) + stored daytime heat (กรรม) + slowly after sunset (ส่วนขยาย)"
        }
      ],
      "email": {
        "title": "Requesting an Urgent Advising Appointment",
        "situation": "Spring course registration closes tomorrow at 5:00 p.m., and you still have an advising hold on your student account. All regular twenty-minute advising slots on the portal are booked, and your required afternoon physics lab overlaps with your advisor's open drop-in hours. Write an email to your academic advisor, Dr. Elena Vance.",
        "bullets": [
          "Explain why you could not attend regular drop-in hours and why the request is urgent",
          "Request a brief alternative meeting or virtual check-in before registration closes",
          "Mention the specific advising materials you have already prepared for review"
        ],
        "model": "Subject: Urgent Advising Hold Clearance Before Registration Deadline\n\nDear Dr. Vance,\n\nI hope your week is going well. I am writing because spring registration closes tomorrow at 5:00 p.m., and my account still carries an advising hold. All standard portal slots are full, and my mandatory physics laboratory runs continuously during your afternoon drop-in window.\n\nWould you have ten minutes tomorrow morning—either in person before 10:30 a.m. or via a quick video call—to review my plan and clear the hold? To save time, I have attached my updated degree audit, my primary schedule, and two backup science electives in case sections fill.\n\nThank you very much for your help.\n\nBest regards,\nJordan Lee\nStudent ID: 408921",
        "notes": "กลยุทธ์: ตอบครบทั้ง 3 ประเด็นอย่างสุภาพ กระชับ และเป็นมืออาชีพ (ความยาว ~115 คำ): 1) ระบุเหตุผลเร่งด่วน (เส้นตายพรุ่งนี้ 17:00 น.) และเหตุที่เข้า drop-in ไม่ได้ (ชนแล็บฟิสิกส์); 2) เสนอทางเลือกที่ทำได้จริงและเกรงใจเวลาอาจารย์ (10 นาทีช่วงเช้าหรือวิดีโอคอล); 3) แสดงความพร้อมด้วยการแนบ degree audit ตารางเรียนหลัก และวิชาเลือกสำรองครบถ้วน."
      },
      "discussion": {
        "topic": "Campus Microgrids vs. Urban Cooling Investments",
        "profPrompt": "Universities face tight sustainability budgets while preparing for hotter summers and extreme storms. If your campus can fund only one major initiative this year, should it invest in a solar-battery microgrid to maintain uninterrupted electricity, or expand urban cooling projects such as shaded tree corridors and cool roofs? Why?",
        "posts": [
          {
            "name": "Maya",
            "text": "I strongly support funding a campus microgrid first. A single regional blackout can ruin months of biology experiments inside cold storage freezers and shut down medical clinics. Solar-battery backup protects vital research infrastructure while steadily cutting fossil fuel emissions year-round."
          },
          {
            "name": "Liam",
            "text": "While backup power matters, planting shade trees and coating roofs with reflective paint helps students immediately every day. Tree canopies lower outdoor pavement heat during walks between classes and reduce building air-conditioning demand so much that our existing electrical grid becomes less strained."
          }
        ],
        "model": "Although Maya makes a strong point about protecting sensitive laboratory freezers during outages, I agree more with Liam that urban cooling investments should take priority this year. Extreme heat affects every student and staff member daily across the entire campus, not only during occasional grid failures. By installing reflective roof coatings and planting drought-tolerant shade trees along sunny walkways, a university immediately lowers peak afternoon cooling loads inside classrooms and dormitories. In fact, reducing daytime air-conditioning demand directly tackles the root cause of summer electrical grid strain, making blackouts far less likely in the first place. Moreover, shade canopies and porous sidewalks are faster and less expensive to deploy within one fiscal year, freeing future budgets to add smaller, properly sized microgrids later.",
        "notes": "โครงสร้างแนะนำ (~132 คำ): 1) เปิดประเด็นโดยอ้างอิงเพื่อนทั้งสองคนอย่างสมเหตุสมผล (รับรู้จุดเด่นของ Maya เรื่องแล็บ แต่เห็นด้วยกับ Liam มากกว่า); 2) เสริมเหตุผลใหม่ที่ต่างจาก Liam (ความร้อนกระทบทุกคนทุกวัน และการลดโหลดแอร์ช่วยลดต้นเหตุของไฟดับได้โดยตรง); 3) ปิดท้ายด้วยมุมมองด้านงบประมาณและระยะเวลาติดตั้งที่สอดคล้องกับโจทย์ที่ตั้งไว้ว่าต้องเลือกโครงการในปีเดียว."
      }
    },
    "speaking": {
      "repeat": [
        {
          "text": "Always wear splash goggles in the lab.",
          "accent": "us",
          "sex": "f"
        },
        {
          "text": "Dark asphalt roads trap heat long after sunset.",
          "accent": "uk",
          "sex": "m"
        },
        {
          "text": "Our campus microgrid stores surplus solar energy in lithium batteries.",
          "accent": "ca",
          "sex": "f"
        },
        {
          "text": "Deep-sea lanternfish use bioluminescent light to erase their dark shadows underwater.",
          "accent": "us",
          "sex": "m"
        },
        {
          "text": "Please upload your updated degree audit before attending Friday's morning academic advising appointment online.",
          "accent": "uk",
          "sex": "f"
        }
      ],
      "interview": {
        "topic": "Managing Academic Schedules and Campus Safety Habits",
        "intro": "Welcome! Today I'd like to ask you a few connected questions about how you organize your semester schedule and handle practical safety routines in busy campus spaces.",
        "questions": [
          {
            "q": "How do you usually plan your weekly classes, lab hours, and study time at the start of a semester?",
            "model": "At the beginning of each term, I block all fixed lectures and laboratory sessions on a digital calendar first. Then I schedule consistent two-hour study blocks right after difficult science classes while the material is still fresh. I also set automatic reminders two weeks before registration deadlines so I never miss advising appointments. Having everything visible in one place keeps my weekdays balanced and prevents last-minute cramming before exams.",
            "tips": "ตอบเป็นลำดับขั้นตอนชัดๆ (first -> then -> also) พร้อมยกเหตุผลว่าช่วยลดความเครียดก่อนสอบอย่างไร (ประมาณ 35–45 วินาที)"
          },
          {
            "q": "What do you do when an unexpected schedule conflict occurs between two important commitments?",
            "model": "Whenever a conflict pops up, I check which commitment has stricter rules first. For example, last semester a mandatory chemistry lab overlapped with an advising meeting. Because lab exams cannot be moved easily, I contacted my advisor immediately, explained the situation politely, and requested a brief early-morning slot instead. Communicating early and offering two alternative times usually solves schedule conflicts smoothly without forcing anyone to rush.",
            "tips": "เล่าตัวอย่างจริงหรือสถานการณ์สมมติที่ชัดเจน (Conflict -> Priority check -> Early communication) ใช้คำเชื่อมเช่น Whenever, For example, Because"
          },
          {
            "q": "Why do you think students sometimes skip routine safety steps in campus workshops or laboratories?",
            "model": "I think students mainly skip safety steps when they feel rushed or overly confident after doing a task several times. When a project deadline is close, putting on goggles or turning on a fume extractor can feel like an unnecessary delay. However, even a minor chemical splash or hot soldering iron can cause a serious injury in seconds. Keeping protective gear right at the entrance makes good habits automatic.",
            "tips": "ระบุสาเหตุ 2 ข้อ (รีบเร่ง/ชะล่าใจ) แล้วเชื่อมกลับถึงผลกระทบและวิธีแก้สั้นๆ เพื่อให้คำตอบมีน้ำหนัก"
          },
          {
            "q": "What practical advice would you give new students about staying organized and safe during their first year?",
            "model": "My top piece of advice is to prepare early rather than waiting until deadlines or lab sessions begin. Before meeting an advisor, draft a backup list of courses so you stay calm if popular sections fill up. Similarly, inspect safety equipment and read lab protocols the night before class instead of skimming them at the door. Small daily habits protect both your grades and your well-being throughout college.",
            "tips": "เชื่อมโยงทั้งสองธีม (การจัดตาราง + ความปลอดภัย) เข้าด้วยกันในคำแนะนำเดียว ปิดท้ายด้วยประโยคสรุปที่คมชัด"
          }
        ]
      }
    },
    "theme": "How Deep-Sea Organisms Generate Living Light & Symbiotic Bioluminescence in the Hawaiian Bobtail Squid"
  },
  {
    "set": 2,
    "reading": {
      "stage1": {
        "cloze": {
          "title": "Wildflower Strips and Native Pollinators",
          "intro": "Across agricultural regions, declining wildflower diversity has placed intense pressure on native bee and butterfly populations.",
          "segments": [
            "Over the past century, expanding crop fields and manicured lawns have eliminated many natural ",
            {
              "pre": "hab",
              "ans": "itats",
              "hint": "n. (พหูพจน์) ถิ่นที่อยู่อาศัย"
            },
            " where wild insects once nested and foraged. Even when blossoms remain nearby, windborne ",
            {
              "pre": "pes",
              "ans": "ticides",
              "hint": "n. (พหูพจน์) สารกำจัดศัตรูพืช"
            },
            " drifting from sprayed fields can disorient foraging bees and weaken entire colonies. Unlike commercial honeybees managed in portable hives, hundreds of native bee species ",
            {
              "pre": "dep",
              "ans": "end",
              "hint": "v. พึ่งพา/ขึ้นอยู่กับ"
            },
            " on specific local plants for pollen and nectar. When a single wildflower species disappears from a meadow, specialized pollinators may ",
            {
              "pre": "sta",
              "ans": "rve",
              "hint": "v. อดตาย"
            },
            " despite abundant grass or non-native ornamental shrubs. To reverse this troubling ",
            {
              "pre": "dec",
              "ans": "line",
              "hint": "n. การลดลง"
            },
            ", ecologists encourage landowners to sow narrow strips of native perennials along field edges. Because different species ",
            {
              "pre": "blo",
              "ans": "om",
              "hint": "v. ออกดอก/บาน"
            },
            " sequentially from early spring through late autumn, diverse mixes ensure continuous food supplies. These colorful corridors also ",
            {
              "pre": "att",
              "ans": "ract",
              "hint": "v. ดึงดูด"
            },
            " beneficial beetles and hoverflies that naturally control crop pests. Within three years, restored wildflower borders often ",
            {
              "pre": "boo",
              "ans": "st",
              "hint": "v. เพิ่ม/ส่งเสริม"
            },
            " fruit and vegetable harvests on surrounding farms. Equally important, leaving patches of bare soil undisturbed ",
            {
              "pre": "pro",
              "ans": "vides",
              "hint": "v. (เอกพจน์) จัดหา/เอื้อให้"
            },
            " safe underground tunnels for solitary female bees to lay eggs and survive harsh ",
            {
              "pre": "win",
              "ans": "ters",
              "hint": "n. (พหูพจน์) ฤดูหนาว"
            },
            "."
          ],
          "why": "1) habitats (n. พหูพจน์) ถิ่นที่อยู่ ตามหลัง many natural; 2) pesticides (n. พหูพจน์) สารกำจัดศัตรูพืช ที่ลอยมากับลมจากแปลงเกษตร; 3) depend (v.) เข้าคู่ depend on (พึ่งพา); 4) starve (v.) อดตายเมื่อขาดดอกไม้เฉพาะถิ่น; 5) decline (n.) การลดลงของประชากรแมลงผสมเกสร; 6) bloom (v.) ออกดอกต่อเนื่องตั้งแต่ฤดูใบไม้ผลิถึงฤดูใบไม้ร่วง; 7) attract (v.) ดึงดูดแมลงที่มีประโยชน์; 8) boost (v.) เพิ่มผลผลิตผักและผลไม้; 9) provides (v. เอกพจน์) ตามหลังประธาน Gerund leaving patches...; 10) winters (n. พหูพจน์) ใช้คู่กับ harsh โดยไม่มี article."
        },
        "daily": [
          {
            "kind": "Residence Hall Notice",
            "title": "Autumn Dormitory Room Selection & Quiet Hours",
            "text": "University Housing Services will open online room selection for returning undergraduates on March 18. Students wishing to share a two-person suite must link their confirmation codes inside the Housing Portal twenty-four hours before their assigned lottery window begins; unpaired applicants may choose only single beds. Please also note our revised quiet-hours policy taking effect across all residence halls next semester. Quiet hours will begin at 10:00 p.m. Sunday through Thursday, while designated Quiet-Study Wings will enforce continuous low-noise standards around the clock.",
            "qs": [
              {
                "q": "What must two students do to reserve a shared suite together?",
                "choices": [
                  "Request a quiet-study wing assignment from Housing Services",
                  "Wait until their lottery window closes to pick single beds",
                  "Connect their confirmation codes online a full day before their lottery slot",
                  "Submit separate paper applications on March 18"
                ],
                "ans": 2,
                "why": "ข้อ C ถูกเพราะประกาศระบุว่าผู้ที่ต้องการอยู่ห้องชุดร่วมกันต้องเชื่อมต่อ confirmation codes ในระบบ Housing Portal ล่วงหน้า 24 ชั่วโมงก่อนช่วงเวลาสุ่มสิทธิ์ (lottery window)"
              },
              {
                "q": "How do Quiet-Study Wings differ from standard residence halls?",
                "choices": [
                  "Quiet rules start at 10:00 p.m. on weekdays only.",
                  "Low-noise regulations apply continuously at all hours.",
                  "Returning undergraduates are not allowed to select them.",
                  "Students may only live there in single bedrooms."
                ],
                "ans": 1,
                "why": "ข้อ B ถูกเพราะประโยคสุดท้ายระบุว่า Quiet-Study Wings บังคับใช้มาตรฐานเสียงเบาตลอด 24 ชั่วโมง (around the clock) ต่างจากหอทั่วไปที่เริ่ม 4 ทุ่ม"
              }
            ]
          },
          {
            "kind": "Museum Exhibit Flyer",
            "title": "Special Exhibition: Ink, Iron, and Movable Type",
            "text": "Visit the University History Museum's new West Gallery exhibition, Ink, Iron, and Movable Type, running through May 25. The centerpiece is a full-scale working replica of a fifteenth-century European wooden screw press, surrounded by hand-cast metal letters and rare early printed pamphlets from the library vault. Every Friday at 3:00 p.m., master printer Thomas Mercer demonstrates ink rolling and sheet pressing—free souvenir broadsheets are limited to the first twenty attendees. Admission is free with a valid student ID, though flash photography is prohibited inside the gallery.",
            "qs": [
              {
                "q": "How can a visitor receive a free printed souvenir sheet?",
                "choices": [
                  "By arriving early among the first twenty guests at Friday's 3:00 p.m. demonstration",
                  "By presenting a valid student ID at the West Gallery entrance any afternoon",
                  "By donating rare pamphlets to the University History Museum vault",
                  "By submitting a photograph of the wooden screw press replica"
                ],
                "ans": 0,
                "why": "ข้อ A ถูกเพราะใบปลิวระบุว่ากระดาษพิมพ์ที่ระลึกแจกฟรีเฉพาะผู้เข้าร่วมสาธิตวันศุกร์ เวลา 15:00 น. 20 คนแรกเท่านั้น"
              },
              {
                "q": "What is NOT permitted inside the West Gallery exhibition?",
                "choices": [
                  "Attending the Friday printing demonstration",
                  "Entering without paying an admission fee",
                  "Viewing rare pamphlets from the library vault",
                  "Taking photographs using a camera flash"
                ],
                "ans": 3,
                "why": "ข้อ D ถูกเพราะประโยคสุดท้ายห้ามใช้แฟลชถ่ายภาพ (flash photography is prohibited) ภายในห้องจัดแสดง"
              }
            ]
          }
        ],
        "academic": {
          "subject": "Book History",
          "title": "The Economic Impact of Gutenberg's Movable Type",
          "paragraphs": [
            "Before the mid-fifteenth century, European books were copied laboriously by hand onto expensive calfskin parchment, meaning a single Bible could occupy a skilled scribe for more than a year. When Johannes Gutenberg assembled his printing workshop in Mainz around 1450, he did not invent woodblock printing itself, which had thrived in East Asia for centuries. Rather, he integrated several mechanical refinements—most notably an adjustable hand mold capable of casting thousands of durable metal letters from a precise alloy of lead, tin, and antimony.",
            "Equally decisive was Gutenberg's formulation of an oil-based ink blended from linseed oil and soot. Conventional water-based inks beaded unevenly off smooth metal type and smudged damp rag paper, whereas oily ink coated raised metal surfaces crisply and dried rapidly under pressure. Combined with a modified wooden screw press derived from Rhineland winemaking, a team of pressmen could produce several hundred crisp sheets daily.",
            "The economic consequences unfolded with astonishing speed. Within fifty years, printing workshops operated in over two hundred European towns, slashing book prices by roughly eighty percent. As affordable editions in everyday vernacular languages replaced costly Latin manuscripts, university students, merchants, and artisans gained unprecedented access to shared knowledge."
          ],
          "qs": [
            {
              "q": "What is the primary purpose of the passage?",
              "choices": [
                "To compare European calfskin parchment with East Asian paper mills",
                "To argue that Rhineland winemakers invented the first metal type",
                "To explain why Latin remained the dominant language of European artisans",
                "To examine the technical innovations behind Gutenberg's press and its economic effects"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะบทความอธิบายนวัตกรรมทางเทคนิค (แม่พิมพ์ตัวอักษรโลหะผสม หมึกน้ำมัน แท่นพิมพ์เกลียว) ในย่อหน้า 1–2 และผลกระทบทางเศรษฐกิจและการเข้าถึงหนังสือในย่อหน้า 3"
            },
            {
              "q": "Why did Gutenberg formulate an oil-based ink instead of using water-based ink?",
              "choices": [
                "Water-based ink required expensive calfskin parchment to dry.",
                "Water-based ink failed to coat metal type evenly and smeared paper.",
                "Oil-based ink prevented metal alloys from melting inside the hand mold.",
                "Oil-based ink cost eighty percent less to manufacture than soot."
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะย่อหน้า 2 ระบุว่าหมึกฐานน้ำจับตัวเป็นหยดไม่สม่ำเสมอบนตัวพิมพ์โลหะเรียบและเลอะกระดาษ (beaded unevenly ... and smudged)"
            },
            {
              "q": "The word \"slashing\" in paragraph 3 is closest in meaning to",
              "choices": [
                "sharply reducing",
                "carefully recording",
                "steadily taxing",
                "gradually doubling"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะ slashing ในบริบท slashing book prices by roughly eighty percent หมายถึงการลดราคาลงอย่างฮวบฮาบ (sharply reducing)"
            },
            {
              "q": "According to paragraph 1, what was Gutenberg's key technical contribution?",
              "choices": [
                "Carving single-piece wooden blocks for religious texts",
                "Replacing metal letters with durable Rhineland oak blocks",
                "Creating an adjustable mold to cast uniform metal alloy letters",
                "Teaching scribes to copy manuscripts faster on parchment"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะย่อหน้า 1 เน้นว่ากูเทนเบิร์กไม่ได้คิดค้นการพิมพ์บล็อกไม้ แต่พัฒนาแม่พิมพ์มือปรับขนาดได้สำหรับหล่อตัวอักษรโลหะผสมจำนวนมาก"
            },
            {
              "q": "What can be inferred from paragraph 3 about literacy after 1450?",
              "choices": [
                "Only wealthy university professors could afford vernacular books.",
                "Broader groups beyond scholars began reading thanks to cheaper local-language books.",
                "Latin manuscripts completely vanished from European towns within ten years.",
                "Merchants avoided printed books because they preferred handwritten copies."
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะย่อหน้า 3 ชี้ว่าเมื่อหนังสือภาษาท้องถิ่นราคาย่อมเยาเข้ามาแทนต้นฉบับภาษาละตินราคาแพง นักศึกษา พ่อค้า และช่างฝีมือก็เข้าถึงความรู้ได้อย่างกว้างขวาง"
            }
          ]
        }
      },
      "stage2a": {
        "cloze": {
          "title": "Designing Passive Solar Campus Buildings",
          "intro": "Modern sustainable architects reduce building energy use by working with local sunlight and wind patterns rather than relying solely on mechanical systems.",
          "segments": [
            "In temperate climates, passive solar classrooms feature large windows facing south to capture warm winter ",
            {
              "pre": "sun",
              "ans": "light",
              "hint": "n. แสงแดด"
            },
            " throughout the day. Above those windows, carefully calculated roof overhangs cast ",
            {
              "pre": "sha",
              "ans": "de",
              "hint": "n. ร่มเงา"
            },
            " during hot summer afternoons when the sun sits high overhead. Inside the building, thick concrete floors and stone walls act as thermal mass, slowly ",
            {
              "pre": "sto",
              "ans": "ring",
              "hint": "v. (V-ing) กักเก็บ"
            },
            " daytime warmth and releasing it steadily after sunset. To cool rooms naturally without running noisy fans, designers align operable ",
            {
              "pre": "ven",
              "ans": "ts",
              "hint": "n. (พหูพจน์) ช่องระบายอากาศ"
            },
            " on opposite walls to encourage fresh cross-breezes. High ceiling skylights allow rising warm air to ",
            {
              "pre": "esc",
              "ans": "ape",
              "hint": "v. ระบายออก"
            },
            " outdoors while pulling cooler shaded air through lower floor openings. Tight exterior insulation and triple-pane glass minimize unwanted ",
            {
              "pre": "ene",
              "ans": "rgy",
              "hint": "n. พลังงาน (energy loss)"
            },
            " loss during freezing January nights. Architects also select locally harvested ",
            {
              "pre": "tim",
              "ans": "ber",
              "hint": "n. ไม้แปรรูป"
            },
            " and recycled steel beams to lower the carbon footprint of construction itself. Roof gardens planted with hardy sedum absorb heavy ",
            {
              "pre": "sto",
              "ans": "rm",
              "hint": "n. พายุ/ฝน (stormwater)"
            },
            " runoff before it overwhelms city drains. Meanwhile, light-colored courtyard paving keeps outdoor study areas ",
            {
              "pre": "com",
              "ans": "fortable",
              "hint": "adj. สบาย/น่าอยู่"
            },
            " between classes. By pairing simple orientation choices with durable materials, universities trim utility bills while creating brighter learning ",
            {
              "pre": "spa",
              "ans": "ces",
              "hint": "n. (พหูพจน์) พื้นที่"
            },
            "."
          ],
          "why": "1) sunlight (n.) แสงแดดฤดูหนาวที่เข้าทางหน้าต่างทิศใต้; 2) shade (n.) ร่มเงาจากชายคายื่นในช่วงบ่ายฤดูร้อน; 3) storing (v. เติม -ing) คู่กับ releasing ในโครงสร้างคู่ขนาน; 4) vents (n. พหูพจน์) ช่องระบายอากาศแบบเปิดปิดได้ที่อยู่ผนังตรงข้ามกัน; 5) escape (v.) ระบายอากาศร้อนขึ้นด้านบนออกสู่ภายนอก; 6) energy (n.) เข้าคู่ energy loss (การสูญเสียพลังงาน); 7) timber (n.) ไม้แปรรูปที่จัดหาในท้องถิ่น; 8) storm (n.) ใช้คู่กับ runoff (น้ำฝนไหลบ่า); 9) comfortable (adj.) สบาย/น่าอยู่ ขยาย outdoor study areas; 10) spaces (n. พหูพจน์) พื้นที่การเรียนรู้ (learning spaces)."
        },
        "daily": [
          {
            "kind": "Museum Email",
            "title": "Volunteer Docent Orientation at the Botanical Gallery",
            "text": "Thank you for signing up as a student docent for the University Natural History Museum's new Pollinator Pavilion! Our mandatory orientation meets this Thursday from 4:00 to 5:30 p.m. in Gallery Room 102. Curators will introduce the preserved wildflower specimens, demonstrate safe handling of pinned bee collections, and review accessible wayfinding routes for school groups. Volunteers must choose two recurring three-hour weekend shifts each month using the shared calendar handed out at orientation. Light refreshments will be served afterward beside the courtyard.",
            "qs": [
              {
                "q": "What is the main purpose of Thursday's meeting in Gallery Room 102?",
                "choices": [
                  "To assign weekend shifts to school group teachers",
                  "To train new student volunteers for the Pollinator Pavilion",
                  "To collect wildflower seeds from the museum courtyard",
                  "To celebrate the closing of the preserved bee exhibit"
                ],
                "ans": 1,
                "why": "ข้อ B ถูกเพราะอีเมลแจ้งกำหนดการปฐมนิเทศภาคบังคับ (mandatory orientation) สำหรับนักศึกษาอาสาสมัครนำชมนิทรรศการ Pollinator Pavilion"
              },
              {
                "q": "Which of the following is NOT mentioned as part of the orientation session?",
                "choices": [
                  "Inspecting preserved wildflower specimens",
                  "Practicing safe handling of bee specimens",
                  "Reviewing accessible pathways for visiting groups",
                  "Leading a live outdoor wildflower planting tour"
                ],
                "ans": 3,
                "why": "ข้อ D ถูกเพราะในอีเมลพูดถึงตัวอย่างดอกไม้แห้ง การจับตัวอย่างผึ้งอย่างปลอดภัย และเส้นทางสำหรับผู้มาเยือน แต่ไม่ได้พูดถึงการพาทัวร์ปลูกดอกไม้กลางแจ้ง"
              },
              {
                "q": "How much time must volunteers commit each month?",
                "choices": [
                  "One ninety-minute Thursday workshop",
                  "Three hours every single Saturday",
                  "Two three-hour weekend shifts",
                  "Twelve hours spread across weekday afternoons"
                ],
                "ans": 2,
                "why": "ข้อ C ถูกเพราะอีเมลระบุว่าอาสาสมัครต้องเลือกกะวันหยุดสุดสัปดาห์กะละ 3 ชั่วโมง จำนวน 2 กะต่อเดือน"
              }
            ]
          }
        ],
        "academic": {
          "subject": "Ecology",
          "title": "How Native Wildflower Meadows Support Solitary Bees",
          "paragraphs": [
            "When people picture bees, they usually imagine social honeybees living by the thousands inside wooden hives. In fact, nearly ninety percent of the world's twenty thousand bee species lead solitary lives. A single female mason or leafcutter bee builds her own nest inside hollow plant stems or sunlit earthen banks, packs each chamber with pollen and nectar, lays an egg, and seals the tunnel without cooperative hive workers to help her.",
            "Because solitary bees fly only short distances—often less than three hundred meters from their nests—they are acutely sensitive to gaps in floral availability. If a meadow contains only clover that blooms for three weeks in June, resident solitary species emerge during April or August with nothing to eat. Ecologists therefore design restoration seed mixes with staggered flowering calendars: early spring pussy willows feed emerging queens, summer coneflowers nourish active foragers, and late-autumn asters sustain insects preparing for winter dormancy.",
            "Wildflower diversity matters equally for nutritional quality. Just as humans need varied diets, pollen from different plant families supplies distinct amino acids and lipids essential for larval growth. Preserving undisturbed strips of native flowers beside farmland thus provides solitary pollinators with both continuous meals and safe nesting sanctuaries."
          ],
          "qs": [
            {
              "q": "What does paragraph 1 emphasize about most bee species worldwide?",
              "choices": [
                "They live independently rather than in large cooperative colonies.",
                "They depend on wooden hives built by commercial beekeepers.",
                "They fly farther from their nests than social honeybees.",
                "They collect nectar solely during late summer months."
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะย่อหน้า 1 ระบุว่าเกือบ 90% ของผึ้งทั่วโลกใช้ชีวิตแบบสันโดษ (solitary lives) สร้างรังและเลี้ยงตัวอ่อนเองโดยไม่มีผึ้งงานในรังใหญ่ช่วย"
            },
            {
              "q": "Why do restoration ecologists use seed mixes with \"staggered flowering calendars\"?",
              "choices": [
                "To prevent clover from crowding out hollow plant stems",
                "To force solitary bees to forage farther than three hundred meters",
                "To ensure continuous nectar and pollen from spring until late autumn",
                "To protect earthen nesting banks from winter rain"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะผึ้งสันโดษบินได้ไม่ไกล หากดอกไม้บานพร้อมกันแค่ช่วงสั้นๆ ผึ้งที่ออกหาอาหารเดือนอื่นจะอดอาหาร จึงต้องผสมพันธุ์ไม้ที่ทยอยผลิดอกตลอดสามฤดู"
            },
            {
              "q": "The word \"acutely\" in paragraph 2 is closest in meaning to",
              "choices": [
                "briefly",
                "intensely",
                "rarely",
                "slowly"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะ acutely sensitive หมายถึงอ่อนไหวอย่างมาก/อย่างรุนแรง ซึ่งตรงกับ intensely"
            },
            {
              "q": "What can be inferred about a field planted with only a single flower species?",
              "choices": [
                "It supplies every amino acid and lipid required by bee larvae.",
                "It attracts more mason bees than a diverse meadow.",
                "It eliminates the need for sunlit earthen nesting banks.",
                "It leaves pollinators vulnerable to starvation outside that bloom window."
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะย่อหน้า 2 และ 3 ชี้ว่าดอกไม้ชนิดเดียวบานเพียงไม่กี่สัปดาห์และอาจขาดสารอาหารครบถ้วน ทำให้ผึ้งเสี่ยงอดอาหารนอกช่วงบาน"
            },
            {
              "q": "Why does the author compare bee nutrition to human diets in paragraph 3?",
              "choices": [
                "To illustrate why pollinators need pollen from multiple plant families",
                "To argue that honeybees produce healthier honey than solitary bees",
                "To show that farmland crops lack lipids for human consumption",
                "To explain why asters bloom later in the year than coneflowers"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะผู้เขียนเปรียบเทียบกับอาหารที่หลากหลายของมนุษย์เพื่ออธิบายว่าเกสรจากพืชต่างวงศ์ให้กรดอะมิโนและไขมันต่างชนิดกันที่จำเป็นต่อตัวอ่อนผึ้ง"
            }
          ]
        }
      },
      "stage2b": {
        "cloze": {
          "title": "Standardization Through Early Print Culture",
          "intro": "Before mechanical printing transformed European scholarship, scribal copying introduced inevitable variations into nearly every surviving manuscript.",
          "segments": [
            "Because weary copyists routinely omitted lines, altered spelling, or inserted personal marginal notes, two manuscripts of the same treatise seldom ",
            {
              "pre": "mat",
              "ans": "ched",
              "hint": "v. (อดีต) ตรงกัน/เข้ากัน"
            },
            " word for word. By contrast, movable metal type enabled workshops to lock thousands of identical pages into rigid frames, achieving unprecedented textual ",
            {
              "pre": "uni",
              "ans": "formity",
              "hint": "n. ความสม่ำเสมอเป็นมาตรฐาน"
            },
            " across hundreds of distributed copies. Scholars working in distant cities could finally cite identical page numbers, diagrams, and ",
            {
              "pre": "tab",
              "ans": "les",
              "hint": "n. (พหูพจน์) ตารางข้อมูล"
            },
            " without fearing silent transcription errors. When printers did spot factual mistakes midway through a run, they issued printed ",
            {
              "pre": "cor",
              "ans": "rections",
              "hint": "n. (พหูพจน์) รายการแก้ไขคำผิด"
            },
            " inviting readers to annotate lingering flaws rather than letting errors multiply unchecked. Standardization also reshaped European ",
            {
              "pre": "ver",
              "ans": "nacular",
              "hint": "adj. ภาษาถิ่น/ภาษาท้องถิ่น"
            },
            " languages, as regional publishers favored widely understood spellings and grammar to maximize commercial reach. Meanwhile, intricate woodcut illustrations ",
            {
              "pre": "pre",
              "ans": "served",
              "hint": "v. (อดีต) รักษา/คงไว้"
            },
            " botanical specimens and architectural blueprints far more faithfully than hand-drawn copies could sustain. Yet rapid print ",
            {
              "pre": "cir",
              "ans": "culation",
              "hint": "n. การหมุนเวียนเผยแพร่"
            },
            " posed acute challenges for universities and royal authorities accustomed to supervising rare monastic libraries. Ideas once confined to small circles ",
            {
              "pre": "acc",
              "ans": "elerated",
              "hint": "v. (อดีต) เร่งความเร็ว"
            },
            " across borders within months, fueling vigorous scientific debate. Ultimately, early ",
            {
              "pre": "typ",
              "ans": "ography",
              "hint": "n. ศิลปะการพิมพ์ตัวอักษร"
            },
            " did not merely speed up book production; it restructured how evidence was verified and ",
            {
              "pre": "deb",
              "ans": "ated",
              "hint": "v. (ช่อง 3) ถูกถกเถียง"
            },
            " across continents."
          ],
          "why": "1) matched (v. ช่อง 2) ตรงกันคำต่อคำ; 2) uniformity (n.) ความเป็นหนึ่งเดียว/มาตรฐานเดียวกัน across hundreds of copies; 3) tables (n. พหูพจน์) ตารางข้อมูล คู่กับ page numbers และ diagrams; 4) corrections (n. พหูพจน์) ใบแก้คำผิดที่พิมพ์แทรกในเล่ม; 5) vernacular (adj.) ภาษาท้องถิ่น ขยาย languages; 6) preserved (v. ช่อง 2) คงความแม่นยำของภาพประกอบทางพฤกษศาสตร์และสถาปัตยกรรม; 7) circulation (n.) การแพร่กระจาย/หมุนเวียนของสิ่งพิมพ์; 8) accelerated (v. ช่อง 2) แพร่ขยายอย่างรวดเร็วข้ามพรมแดน; 9) typography (n.) ศาสตร์การเรียงพิมพ์; 10) debated (v. ช่อง 3 ใน passive was verified and debated) ถูกอภิปรายถกเถียง."
        },
        "daily": [
          {
            "kind": "Housing & Sustainability Memo",
            "title": "Green Renovation of Cedar Hall & Resident Relocation",
            "text": "During winter break, University Housing will retrofit Cedar Hall as part of our campus net-zero carbon initiative. Contractors will install triple-glazed acoustic windows, heat-recovery ventilation ducts, and cross-laminated timber partition panels across floors two through four. Because construction teams require unobstructed hallway access beginning December 19, Cedar Hall residents staying on campus over winter recess will relocate temporarily to Birch Annex at no extra housing charge and receive a seventy-five-dollar dining credit. All personal belongings inside Cedar bedrooms must be boxed away from window ledges before noon on December 18.",
            "qs": [
              {
                "q": "What is the primary goal of the winter break work in Cedar Hall?",
                "choices": [
                  "To expand dining facilities on floors two through four",
                  "To demolish Cedar Hall and build Birch Annex",
                  "To upgrade the dormitory for lower carbon and energy use",
                  "To install new outdoor museum exhibits beside the dorm"
                ],
                "ans": 2,
                "why": "ข้อ C ถูกเพราะบันทึกแจ้งการปรับปรุงหอพัก Cedar Hall ด้วยหน้าต่างสามชั้น ระบบระบายอากาศกู้คืนความร้อน และผนังไม้ CLT ภายใต้โครงการ net-zero carbon"
              },
              {
                "q": "What compensation will Cedar Hall students receive if they stay on campus over winter break?",
                "choices": [
                  "Free temporary rooms in Birch Annex plus a seventy-five-dollar dining credit",
                  "Reduced spring tuition and complimentary moving boxes",
                  "Priority selection during March's online room lottery",
                  "Permanent relocation to single bedrooms in Birch Annex"
                ],
                "ans": 0,
                "why": "ข้อ A ถูกเพราะนักศึกษาที่อยู่ช่วงปิดเทอมฤดูหนาวจะได้ย้ายไปพักที่ Birch Annex ชั่วคราวโดยไม่เสียค่าหอเพิ่ม และได้รับเครดิตค่าอาหาร 75 ดอลลาร์"
              },
              {
                "q": "What must ALL Cedar Hall residents complete before noon on December 18?",
                "choices": [
                  "Return their Birch Annex room keys to Housing Services",
                  "Move personal items out of Cedar Hall completely",
                  "Disconnect heat-recovery ventilation panels inside closets",
                  "Pack items and clear them away from bedroom window areas"
                ],
                "ans": 3,
                "why": "ข้อ D ถูกเพราะประโยคสุดท้ายกำหนดให้นักศึกษาเก็บของลงกล่องและย้ายให้พ้นขอบหน้าต่าง (boxed away from window ledges) ก่อนเที่ยงวันที่ 18 ธันวาคม"
              }
            ]
          }
        ],
        "academic": {
          "subject": "Sustainable Architecture",
          "title": "Cross-Laminated Timber and Embodied Carbon in Urban Buildings",
          "paragraphs": [
            "For decades, sustainable architecture focused predominantly on operational carbon—the emissions generated by heating, cooling, and lighting a building once occupied. As power grids decarbonize and heat pumps improve efficiency, however, attention has shifted toward embodied carbon: the greenhouse gases released while extracting, manufacturing, and transporting structural materials. Producing Portland cement and virgin structural steel alone accounts for roughly fifteen percent of global carbon emissions, prompting architects to reconsider wood for mid- and high-rise urban construction.",
            "At the center of this shift is cross-laminated timber (CLT), an engineered composite fabricated by gluing kiln-dried softwood boards together in alternating perpendicular layers under intense hydraulic pressure. Because perpendicular grain orientations counteract wood's natural tendency to warp or split along a single axis, thick CLT panels achieve strength-to-weight ratios rivaling reinforced concrete while weighing roughly one-fifth as much. Critically, timber sequesters atmospheric carbon absorbed during tree growth, turning structural frames into long-term carbon sinks rather than emission sources.",
            "Contrary to popular intuition, massive CLT beams resist structural collapse during fires predictably: their outer millimeters form an insulating char layer that shields the load-bearing core underneath. Nevertheless, mass timber imposes strict design constraints. Prolonged water exposure from faulty plumbing or humid construction sites can trigger fungal decay, requiring rigorous vapor-barrier detailing and rapid on-site enclosure."
          ],
          "qs": [
            {
              "q": "Why has sustainable architecture recently focused more attention on embodied carbon?",
              "choices": [
                "Heat pumps now produce more emissions than steel foundries.",
                "As building operations grow cleaner, material manufacturing emissions stand out.",
                "Portland cement is becoming too scarce for low-rise residential construction.",
                "Operational lighting costs have risen above fifteen percent of global emissions."
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะย่อหน้า 1 อธิบายว่าเมื่อระบบพลังงานสะอาดขึ้นและอาคารประหยัดพลังงานในการใช้งานมากขึ้น (operational carbon ลดลง) สัดส่วนคาร์บอนจากการผลิตวัสดุ (embodied carbon) อย่างซีเมนต์และเหล็กจึงกลายเป็นจุดสนใจหลัก"
            },
            {
              "q": "How does cross-laminated timber achieve structural stability superior to ordinary lumber?",
              "choices": [
                "By coating softwood planks with liquid Portland cement",
                "By aligning every board grain strictly in one vertical direction",
                "By soaking kiln-dried boards in water before hydraulic pressing",
                "By bonding alternating wood layers at right angles under pressure"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะย่อหน้า 2 ระบุว่านำไม้เนื้ออ่อนอบแห้งมาติดกาวซ้อนชั้นสลับแนวตั้งฉาก (alternating perpendicular layers) ภายใต้แรงอัดไฮดรอลิก เพื่อลดการบิดงอหรือแตก"
            },
            {
              "q": "The word \"sequesters\" in paragraph 2 is closest in meaning to",
              "choices": [
                "releases",
                "measures",
                "traps and stores",
                "gradually replaces"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะ sequesters atmospheric carbon หมายถึงการกักเก็บคาร์บอนจากชั้นบรรยากาศไว้ในเนื้อไม้ในระยะยาว (traps and stores)"
            },
            {
              "q": "What can be inferred about constructing a CLT building in a rainy coastal climate?",
              "choices": [
                "Builders must seal and protect exposed wood panels promptly from moisture.",
                "CLT frames will weigh five times more than concrete due to humidity.",
                "Outer char layers will protect CLT walls from fungal decay automatically.",
                "Plumbing pipes cannot be installed inside perpendicular timber panels."
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะย่อหน้า 3 เตือนว่าการสัมผัสความชื้นเป็นเวลานานทำให้เกิดเชื้อราผุกร่อนได้ จึงต้องมีระบบป้องกันไอน้ำและปิดคลุมโครงสร้างหน้างานอย่างรวดเร็ว (rapid on-site enclosure)"
            },
            {
              "q": "Why does the author discuss the \"insulating char layer\" in paragraph 3?",
              "choices": [
                "To prove that CLT costs less to insure than structural steel",
                "To address a common misconception about mass timber's fire safety",
                "To explain why CLT requires thicker concrete foundations",
                "To show how kiln-dried wood prevents plumbing leaks"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะประโยคเริ่มต้นด้วย Contrary to popular intuition... เพื่อหักล้างความเชื่อทั่วไปที่คิดว่าไม้ติดไฟแล้วพังง่าย โดยอธิบายว่าชั้นถ่านที่ไหม้ผิวนอกจะช่วยห่อหุ้มแกนรับน้ำหนักด้านในไว้"
            }
          ]
        }
      }
    },
    "listening": {
      "stage1": {
        "responses": [
          {
            "prompt": "Excuse me, could you tell me where the Rare Books and Early Printing exhibit moved during gallery repairs?",
            "q": "Choose the best response.",
            "speaker": "f",
            "accent": "ca",
            "choices": [
              "The history department meets on Tuesdays at four o'clock.",
              "Yes, the two manuscript cases were relocated to the main Atrium near the café.",
              "Admission is free if you bring a student parking permit.",
              "I finished reading that biography in the library basement yesterday."
            ],
            "ans": 1,
            "why": "ข้อ B ถูกเพราะตอบคำถามบอกตำแหน่งใหม่ของตู้จัดแสดงหนังสือหายาก (main Atrium near the café) ได้ชัดเจนตรงประเด็น"
          },
          {
            "prompt": "Why haven't you paired your roommate confirmation code in the housing portal yet?",
            "q": "Choose the best response.",
            "speaker": "m",
            "accent": "us",
            "choices": [
              "The quiet-study wing has triple-glazed windows facing south.",
              "Yes, I moved my luggage out before noon on Friday.",
              "Actually, the housing lottery doesn't start until March 18.",
              "Sam isn't sure whether he's transferring to a co-op placement next fall."
            ],
            "ans": 3,
            "why": "ข้อ D ถูกเพราะตอบเหตุผลที่ยังไม่เชื่อมต่อรหัสยืนยันรูมเมตว่า Sam ยังไม่แน่ใจเรื่องการไปฝึกงานสหกิจ (co-op placement) ในเทอมหน้า"
          },
          {
            "prompt": "Do you mind handing me that packet of native coneflower seeds for the campus garden border?",
            "q": "Choose the best response.",
            "speaker": "f",
            "accent": "uk",
            "choices": [
              "Not at all—here you go, along with the hand trowel.",
              "No, I haven't visited the botanical museum exhibit this week.",
              "The honeybee hives were relocated behind the greenhouse.",
              "Sure, I can email the housing office after lunch."
            ],
            "ans": 0,
            "why": "ข้อ A ถูกเพราะ Do you mind...? ตอบรับด้วย Not at all เพื่อยินดีส่งซองเมล็ดดอกไม้ให้พร้อมพลั่วเล็ก"
          },
          {
            "prompt": "How does this green roof keep rainwater out of the downtown storm drains?",
            "q": "Choose the best response.",
            "speaker": "m",
            "accent": "us",
            "choices": [
              "The architect graduated from our university ten years ago.",
              "Yes, solar panels cover half of the west dormitory roof.",
              "Deep layers of porous soil and hardy plants soak up showers like a sponge.",
              "Students aren't permitted on the fourth-floor terrace after dark."
            ],
            "ans": 2,
            "why": "ข้อ C ถูกเพราะตอบคำถามเชิงกลไก (How does...) โดยอธิบายว่าชั้นดินพรุนและพืชทนทานบนหลังคาดูดซับน้ำฝนไว้เหมือนฟองน้ำ"
          }
        ],
        "conversation": {
          "title": "Switching Dormitory Rooms for the Spring Semester",
          "lines": [
            {
              "role": "Housing Coordinator",
              "acc": "us",
              "sex": "m",
              "text": "Hi Nora, please have a seat. I saw your online ticket asking about a room transfer out of Maple Hall?"
            },
            {
              "role": "Student",
              "acc": "uk",
              "sex": "f",
              "text": "Thanks for meeting with me, Mr. Ortiz. My current room sits right beside the stairwell and loading dock, so delivery trucks wake me up at 5:30 a.m."
            },
            {
              "role": "Housing Coordinator",
              "acc": "us",
              "sex": "m",
              "text": "Oh, that's rough, especially with early morning classes. Let me check which quieter rooms are open for spring."
            },
            {
              "role": "Student",
              "acc": "uk",
              "sex": "f",
              "text": "I was hoping for a single room in the Quiet-Study Wing on the third floor of Cedar Hall, if anything opened up."
            },
            {
              "role": "Housing Coordinator",
              "acc": "us",
              "sex": "m",
              "text": "One corner single in that wing just became vacant yesterday because a student left for study abroad!"
            },
            {
              "role": "Student",
              "acc": "uk",
              "sex": "f",
              "text": "Really? That would be amazing. Do I need to pay a transfer fee or submit extra paperwork?"
            },
            {
              "role": "Housing Coordinator",
              "acc": "us",
              "sex": "m",
              "text": "No fee for a noise-related transfer—just sign the digital switch form I'm emailing you before Friday at four, and pick up your new key next Monday."
            }
          ],
          "qs": [
            {
              "q": "Why does Nora want to move out of her current room in Maple Hall?",
              "choices": [
                "Her roommate is leaving for a study-abroad program.",
                "Her heating radiator stopped working during winter.",
                "Early-morning delivery trucks near the stairwell disturb her sleep.",
                "She wants a shared two-person suite closer to the library."
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะ Nora เล่าว่าห้องอยู่ติดบันไดและจุดขนถ่ายสินค้า ทำให้รถส่งของตอนตีห้าครึ่งปลุกเธอตื่นเป็นประจำ"
            },
            {
              "q": "Why is a single room available in Cedar Hall's Quiet-Study Wing?",
              "choices": [
                "Another resident went abroad for the semester.",
                "Students moved out before green roof renovations began.",
                "The university added a new third floor over winter break.",
                "Quiet-Study Wings always hold extra rooms for spring transfers."
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะ Mr. Ortiz แจ้งว่ามีห้องเดี่ยวตรงมุมว่างขึ้นเมื่อวานเนื่องจากนักศึกษาคนเดิมไปเรียนแลกเปลี่ยนต่างประเทศ (study abroad)"
            },
            {
              "q": "What must Nora do to finalize her room switch?",
              "choices": [
                "Pay a transfer deposit at the Housing Services desk",
                "Wait for confirmation from her Maple Hall floor advisor",
                "Move her belongings into Cedar Hall before Friday at four",
                "Sign an emailed switch form by Friday at 4:00 p.m."
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะ Mr. Ortiz บอกว่าไม่มีค่าธรรมเนียม เพียงแค่เซ็นแบบฟอร์มย้ายห้องแบบดิจิทัลที่ส่งให้ทางอีเมลก่อนวันศุกร์เวลา 16:00 น. แล้วค่อยมารับกุญแจวันจันทร์หน้า"
            }
          ]
        },
        "announcement": {
          "title": "Museum Gallery Conservation Closure",
          "speaker": "f",
          "accent": "ca",
          "lines": [
            "Welcome to the University History Museum.",
            "Please note that Gallery 2B, housing our fifteenth-century printed editions, is temporarily closed this week while engineers recalibrate humidity controls.",
            "To ensure visitors can still enjoy the exhibition, our curators moved two featured display cases—including Gutenberg's metal type samples—into the Central Atrium.",
            "Gallery 2B will reopen with regular weekday hours next Tuesday morning at ten."
          ],
          "qs": [
            {
              "q": "Why is Gallery 2B closed this week?",
              "choices": [
                "Curators are photographing medieval manuscripts for a website.",
                "The wooden printing press replica is being repaired.",
                "Student docents are holding orientation inside the gallery.",
                "Technicians are adjusting the room's humidity regulation system."
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะประกาศระบุว่า Gallery 2B ปิดชั่วคราวเพื่อให้วิศวกรปรับเทียบระบบควบคุมความชื้น (recalibrate humidity controls)"
            },
            {
              "q": "Where can visitors currently view Gutenberg's metal type samples?",
              "choices": [
                "Inside the library rare-book vault",
                "In the Central Atrium display cases",
                "At the West Gallery reception desk",
                "Inside the outdoor museum courtyard"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะภัณฑารักษ์ย้ายตู้จัดแสดงเด่น 2 ตู้ รวมทั้งตัวอย่างตัวพิมพ์โลหะของกูเทนเบิร์ก มาตั้งไว้ที่ Central Atrium"
            },
            {
              "q": "When will Gallery 2B reopen to visitors?",
              "choices": [
                "Next Tuesday at 10:00 a.m.",
                "This Friday at 3:00 p.m.",
                "Tomorrow morning at nine",
                "At the start of next semester"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะประโยคสุดท้ายระบุว่าจะเปิดทำการอีกครั้งในเช้าวันอังคารหน้า เวลา 10:00 น."
            }
          ]
        },
        "talk": {
          "subject": "Ecology",
          "title": "Why Phenological Mismatch Threatens Native Pollinators",
          "speaker": "m",
          "accent": "uk",
          "lines": [
            "In our last lecture we looked at habitat loss; today let's examine a subtler threat to wild pollinators called phenological mismatch.",
            "Phenology simply refers to the seasonal timing of recurring biological events, such as when spring wildflowers open or when dormant bees emerge from underground nests.",
            "Ideally, those two calendars remain tightly synchronized across generations.",
            "Here is the problem: plants and insects often rely on slightly different environmental cues to wake up after winter.",
            "Many early-blooming meadow flowers respond directly to rising air temperatures, so an unusually warm March coaxes blossoms open two weeks ahead of schedule.",
            "Ground-nesting solitary bees, however, sit insulated beneath cool soil and may cue more strongly on day length or deeper soil warmth, emerging on their traditional April timetable.",
            "By the time female bees dig out to collect protein-rich pollen for their larvae, peak wildflower bloom has already faded.",
            "Conversely, late-blooming plants that open before pollinators arrive suffer dramatically lower seed production, showing how climate shifts can disrupt mutualisms even in protected meadows."
          ],
          "qs": [
            {
              "q": "What does the speaker mean by \"phenological mismatch\"?",
              "choices": [
                "Bees migrating to urban areas because farmland soils are too dry",
                "A breakdown in timing between when flowers bloom and when pollinators emerge",
                "Non-native honeybees competing with solitary bees for nesting cavities",
                "Wildflowers failing to grow after severe late-autumn frosts"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะอาจารย์อธิบายว่า phenology คือจังหวะเวลาทางชีวภาพตามฤดูกาล และ mismatch คือการที่เวลาบานของดอกไม้กับเวลาฟักออกหาอาหารของผึ้งไม่สอดคล้องกัน"
            },
            {
              "q": "Why do wildflowers and ground-nesting bees react differently to a warm March?",
              "choices": [
                "Flowers absorb rainwater faster than underground bee cocoons.",
                "Bees avoid emerging until farmers stop spraying spring crops.",
                "Plants cue on air warmth, while soil-insulated bees cue on day length or deeper soil temperature.",
                "Wildflower seeds require at least fourteen hours of daylight to open."
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะดอกไม้ตอบสนองต่ออุณหภูมิอากาศที่อุ่นขึ้นเร็ว ส่วนผึ้งที่อยู่ใต้ดินลึกอาศัยความยาวกลางวันหรืออุณหภูมิดินลึกเป็นสัญญาณ จึงยังออกตามกำหนดเดือนเมษายน"
            },
            {
              "q": "What happens to solitary bees when they emerge after peak wildflower bloom?",
              "choices": [
                "They return underground until the next spring.",
                "They switch to feeding exclusively on tree bark.",
                "They build larger cooperative hives with honeybees.",
                "They struggle to gather enough pollen for their young."
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะเมื่อผึ้งตัวเมียขุดดินออกมาตอนดอกไม้ร่วงโรยไปแล้ว ก็จะขาดเกสรที่อุดมด้วยโปรตีนสำหรับตัวอ่อน"
            },
            {
              "q": "What point does the speaker make about protected meadows at the end of the talk?",
              "choices": [
                "Even preserved habitats are vulnerable to climate-driven timing disruptions.",
                "Protected meadows prevent air temperatures from warming in March.",
                "Human gardeners must pollinate every wildflower by hand each spring.",
                "Seed production automatically doubles when flowers bloom two weeks early."
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะประโยคสุดท้ายระบุว่าแม้ในทุ่งหญ้าอนุรักษ์ การเปลี่ยนแปลงภูมิอากาศก็ยังรบกวนความสัมพันธ์แบบพึ่งพาอาศัยกันและทำให้เมล็ดพันธุ์ลดลงได้"
            }
          ]
        }
      },
      "stage2a": {
        "responses": [
          {
            "prompt": "Do you know what time Friday's wooden printing press demonstration begins in the West Gallery?",
            "q": "Choose the best response.",
            "speaker": "m",
            "accent": "us",
            "choices": [
              "It starts promptly at three o'clock, though you should arrive early for a souvenir sheet.",
              "Yes, I bought two textbooks at the campus bookstore yesterday.",
              "The library vault keeps rare books on the second basement level.",
              "No, flash photography isn't allowed near the fragile parchments."
            ],
            "ans": 0,
            "why": "ข้อ A ถูกเพราะตอบเวลาเริ่มงานสาธิตแท่นพิมพ์อย่างตรงประเด็นพร้อมคำแนะนำให้ไปก่อนเวลาเล็กน้อย"
          },
          {
            "prompt": "Why does the new residence hall collect rooftop rainwater inside underground cisterns?",
            "q": "Choose the best response.",
            "speaker": "f",
            "accent": "ca",
            "choices": [
              "Students use the roof lounge for astronomy club meetings.",
              "I already turned in my housing lottery preference form.",
              "They filter and reuse it to flush building toilets and irrigate the pollinator garden.",
              "Actually, wooden beams weigh far less than steel columns."
            ],
            "ans": 2,
            "why": "ข้อ C ถูกเพราะอธิบายวัตถุประสงค์ของการเก็บน้ำฝนใต้ดินในอาคารยั่งยืน (นำมากรองใช้ชักโครกและรดน้ำสวนแมลงผสมเกสร)"
          },
          {
            "prompt": "Where can student volunteers pick up extra wildflower seed packets for Saturday's planting?",
            "q": "Choose the best response.",
            "speaker": "m",
            "accent": "uk",
            "choices": [
              "Native asters usually bloom throughout September and October.",
              "Check the wooden crate beside the Science Library garden gate—our coordinator left fifty bags there.",
              "Yes, the botanical gallery opens at ten o'clock on Saturdays.",
              "I prefer working indoors when temperatures drop below freezing."
            ],
            "ans": 1,
            "why": "ข้อ B ถูกเพราะบอกพิกัดที่ชัดเจนในการไปรับซองเมล็ดดอกไม้ป่าสำหรับกิจกรรมปลูกต้นไม้วันเสาร์"
          }
        ],
        "conversation": {
          "title": "Booking a Class Visit to the Rare Print Exhibit",
          "lines": [
            {
              "role": "Museum Educator",
              "acc": "us",
              "sex": "f",
              "text": "University History Museum, Education Desk—this is Clara speaking. How can I help?"
            },
            {
              "role": "Teaching Assistant",
              "acc": "ca",
              "sex": "m",
              "text": "Hi Clara, I'm David, a teaching assistant for European History. We'd love to bring twenty-five undergraduates to see the early printing exhibit next Wednesday morning."
            },
            {
              "role": "Museum Educator",
              "acc": "us",
              "sex": "f",
              "text": "Wonderful! Our 10:30 a.m. Wednesday workshop slot is still open. Does your professor want a brief press demonstration too?"
            },
            {
              "role": "Teaching Assistant",
              "acc": "ca",
              "sex": "m",
              "text": "Yes, please—students are studying how Gutenberg's oil ink worked compared to manuscript ink."
            },
            {
              "role": "Museum Educator",
              "acc": "us",
              "sex": "f",
              "text": "Great, I'll schedule a fifteen-minute ink-and-type demo for you. Just remind everyone to leave backpacks in the entrance lockers and keep camera flashes off."
            },
            {
              "role": "Teaching Assistant",
              "acc": "ca",
              "sex": "m",
              "text": "Will do. Is there a short reading guide we could share beforehand so they know what to look for?"
            },
            {
              "role": "Museum Educator",
              "acc": "us",
              "sex": "f",
              "text": "Sure! I'll email you a two-page exhibit PDF today that covers the metal alloy letters and watermarked rag paper."
            }
          ],
          "qs": [
            {
              "q": "Why does David call the Museum Education Desk?",
              "choices": [
                "To borrow Gutenberg's metal letters for a classroom lecture",
                "To volunteer as a student docent on Friday afternoons",
                "To ask why the museum closed Gallery 2B for repairs",
                "To arrange a morning class tour of the early printing exhibit"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะ David โทรมาจองรอบพานักศึกษาปริญญาตรี 25 คนมาชมนิทรรศการการพิมพ์ยุคแรกในเช้าวันพุธหน้า"
            },
            {
              "q": "What rules must David's students follow when visiting the gallery?",
              "choices": [
                "Store backpacks in lobby lockers and avoid using flash photography",
                "Wear cotton gloves while touching wooden press screws",
                "Bring printed copies of the watermark guide inside the vault",
                "Pay a reduced group admission fee at the entrance"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะ Clara ขอให้เตือนนักศึกษาฝากเป้ไว้ในล็อกเกอร์ทางเข้าและห้ามเปิดแฟลชถ่ายภาพ"
            },
            {
              "q": "What will Clara send David later today?",
              "choices": [
                "A permission slip for university housing residents",
                "A map of nearby campus coffee shops",
                "A two-page PDF reading guide about the exhibit",
                "Free souvenir broadsheets printed on Wednesday"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะ Clara ตกลงจะส่งไฟล์ PDF คู่มืออ่านล่วงหน้าความยาว 2 หน้าเกี่ยวกับตัวพิมพ์โลหะผสมและกระดาษมีลายน้ำให้วันนี้"
            }
          ]
        },
        "announcement": {
          "title": "Campus Pollinator Garden Planting Day",
          "speaker": "m",
          "accent": "us",
          "lines": [
            "Join the Campus Sustainability Club this Saturday from 9:00 a.m. to noon for our annual Pollinator Meadow Planting Day.",
            "Volunteers will meet behind the Science Library to replace the patchy turf strip with native milkweed, purple coneflower, and autumn aster plugs.",
            "All gardening gloves, hand trowels, and reusable water stations will be provided on site—just wear sturdy closed-toe shoes and sun protection.",
            "Every participant will also take home a free packet of balcony-friendly wildflower seeds."
          ],
          "qs": [
            {
              "q": "What will volunteers do behind the Science Library on Saturday?",
              "choices": [
                "Install wooden honeybee hives near the library doors",
                "Plant native wildflowers to replace a patchy stretch of grass",
                "Measure afternoon soil temperatures across campus roofs",
                "Clear dead trees damaged during winter storms"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะประกาศเชิญอาสาสมัครมาเปลี่ยนแถบสนามหญ้าแหว่งหลังหอสมุดวิทยาศาสตร์ด้วยการปลูกต้น milkweed, coneflower และ aster พื้นเมือง"
            },
            {
              "q": "What are volunteers asked to bring or wear themselves?",
              "choices": [
                "Their own gardening gloves and hand trowels",
                "Plastic water bottles from the cafeteria",
                "Empty flower pots from their dormitories",
                "Sturdy closed-toe shoes and sun protection"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะถุงมือ พลั่ว และจุดเติมน้ำทางผู้จัดเตรียมไว้ให้แล้ว แค่ขอให้ใส่รองเท้าปิดหัวที่แข็งแรงและอุปกรณ์กันแดดมาเอง"
            }
          ]
        },
        "talk": {
          "subject": "Architecture",
          "title": "Passive Cooling Strategies in Historic Courtyard Houses",
          "speaker": "f",
          "accent": "uk",
          "lines": [
            "Long before electric air conditioning existed, builders in hot, arid regions designed homes that stayed surprisingly cool without mechanical power.",
            "A classic example is the traditional courtyard house found across the Mediterranean and Middle East.",
            "Rather than presenting large glass windows to blazing afternoon streets, these buildings turn inward around a shaded central courtyard.",
            "During the night, cool desert air settles into the open courtyard, washing over thick stone or mud-brick walls and draining away heat stored from the day.",
            "After sunrise, narrow roof overhangs and neighboring buildings shade the courtyard floor, trapping that pool of cool air for hours.",
            "Many builders also placed a small stone fountain in the courtyard center; as dry breezes brushed across the water, evaporation chilled the incoming air naturally.",
            "Meanwhile, tall windcatchers rising above the roofline acted like thermal chimneys, pulling warm indoor air upward and drawing cooler courtyard air through every room.",
            "Today, contemporary green architects still adapt these low-energy spatial layouts to lower air-conditioning demand across hot urban campuses."
          ],
          "qs": [
            {
              "q": "How do thick stone or mud-brick walls help keep historic courtyard houses comfortable?",
              "choices": [
                "They reflect afternoon street sunlight back toward neighboring roofs.",
                "They release daytime heat at night while absorbing nighttime coolness.",
                "They block cool desert air from entering the central courtyard.",
                "They channel rainwater directly from fountains into indoor rooms."
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะตอนกลางคืนอากาศเย็นจะพัดผ่านผนังหนาและระบายความร้อนที่สะสมไว้ตอนกลางวันออก ทำให้ผนังและลานบ้านเย็นลงรับเช้าวันใหม่"
            },
            {
              "q": "What cooling role did a small courtyard fountain serve?",
              "choices": [
                "It lowered air temperatures through natural water evaporation.",
                "It powered mechanical windcatchers along the outer street.",
                "It heated indoor rooms during cold winter evenings.",
                "It kept dust from settling on upper roof overhangs."
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะเมื่อลมแห้งพัดผ่านผิวน้ำพุ การระเหยของน้ำ (evaporation) ช่วยทำให้อากาศที่พัดเข้าบ้านเย็นลงตามธรรมชาติ"
            },
            {
              "q": "How did rooftop windcatchers move air through the house?",
              "choices": [
                "They pushed hot street air downward into basement storerooms.",
                "They directed sunlight onto shaded courtyard floors.",
                "They sealed upper rooms tightly against morning breezes.",
                "They vented warm indoor air upward so cooler courtyard air flowed inside."
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะปล่องดักลม (windcatchers) ทำหน้าที่เสมือนปล่องระบายความร้อนที่ดูดอากาศร้อนภายในอาคารขึ้นด้านบน จึงดึงอากาศเย็นจากลานกลางบ้านเข้ามาแทนที่"
            },
            {
              "q": "Why does the speaker discuss historic courtyard houses?",
              "choices": [
                "To argue that modern buildings should abandon windows altogether",
                "To compare mud-brick durability with modern structural steel",
                "To explain why Mediterranean architecture resists earthquake damage",
                "To illustrate effective passive cooling principles used before air conditioning"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะอาจารย์ยกตัวอย่างบ้านแบบมีลานกลางแจ้งเพื่ออธิบายหลักการทำความเย็นแบบพึ่งพาธรรมชาติ (passive cooling) ที่ใช้ได้ผลก่อนยุคเครื่องปรับอากาศ"
            }
          ]
        }
      },
      "stage2b": {
        "responses": [
          {
            "prompt": "Did the Cedar Hall energy audit reveal where most winter heat loss occurs?",
            "q": "Choose the best response.",
            "speaker": "m",
            "accent": "ca",
            "choices": [
              "Yes, the museum relocated two rare print display cases to the Atrium.",
              "No, I usually walk through the botanical meadow on my way to class.",
              "Thermal cameras showed nearly forty percent escaping around unsealed window frames.",
              "Actually, the housing portal opens for room selection on March 18."
            ],
            "ans": 2,
            "why": "ข้อ C ถูกเพราะตอบผลตรวจการสูญเสียพลังงานของหอพัก Cedar Hall ได้ตรงประเด็นด้วยข้อมูลจากกล้องถ่ายภาพความร้อน"
          },
          {
            "prompt": "How can museum conservators tell which paper mill supplied the sheets for an early printed Bible?",
            "q": "Choose the best response.",
            "speaker": "f",
            "accent": "us",
            "choices": [
              "By placing water-based ink droplets along the outer binding margins.",
              "By shining low-heat light behind each sheet to inspect the mill's embedded watermark.",
              "Yes, Gutenberg's workshop operated near Mainz around 1450.",
              "Because cross-laminated timber panels resist warping better than solid oak."
            ],
            "ans": 1,
            "why": "ข้อ B ถูกเพราะตอบวิธีการทางอนุรักษ์พิพิธภัณฑ์ในการส่องไฟตรวจลายน้ำ (watermark) ที่ฝังอยู่ในกระดาษผ้าลินินเพื่อสืบค้นโรงผลิตกระดาษ"
          },
          {
            "prompt": "Why did your pollinator transect survey record fewer solitary bees along the west fence this week?",
            "q": "Choose the best response.",
            "speaker": "f",
            "accent": "uk",
            "choices": [
              "The science library courtyard stays shaded until late afternoon.",
              "Yes, I packed my belongings away from the Cedar Hall windows.",
              "Each volunteer docent works two weekend shifts every month.",
              "Facilities accidentally mowed the flowering clover strip before we finished counting."
            ],
            "ans": 3,
            "why": "ข้อ D ถูกเพราะให้เหตุผลเชิงภาคสนามที่สมจริงว่าเจ้าหน้าที่ตัดหญ้าตัดแถบดอกโคลเวอร์ที่กำลังบานออกไปก่อนนับเสร็จ"
          }
        ],
        "conversation": {
          "title": "Evaluating Bamboo vs. Mass Timber for the Student Union Annex",
          "lines": [
            {
              "role": "Architecture Professor",
              "acc": "ca",
              "sex": "m",
              "text": "Have a seat, Maya. Let's look over your embodied-carbon comparison for the new Student Union Annex."
            },
            {
              "role": "Graduate Researcher",
              "acc": "us",
              "sex": "f",
              "text": "Thanks, Professor Cho. When I compared engineered bamboo with regional cross-laminated spruce timber, the manufacturing numbers surprised me."
            },
            {
              "role": "Architecture Professor",
              "acc": "ca",
              "sex": "m",
              "text": "Oh? Most students assume bamboo wins automatically because it regenerates so rapidly."
            },
            {
              "role": "Graduate Researcher",
              "acc": "us",
              "sex": "f",
              "text": "At the harvest stage, yes—but shipping laminated bamboo beams ten thousand kilometers by container freight wiped out half its carbon advantage."
            },
            {
              "role": "Architecture Professor",
              "acc": "ca",
              "sex": "m",
              "text": "Transport emissions really shift the life-cycle math. What about fire-code certification for the four-story atrium?"
            },
            {
              "role": "Graduate Researcher",
              "acc": "us",
              "sex": "f",
              "text": "Regional CLT already carries pre-approved two-hour char ratings in our municipal building code, whereas structural bamboo would trigger months of custom testing."
            },
            {
              "role": "Architecture Professor",
              "acc": "ca",
              "sex": "m",
              "text": "Solid analysis. Include those freight-distance curves in Friday's design brief—they make the local timber recommendation unmistakable."
            }
          ],
          "qs": [
            {
              "q": "What surprised Maya when comparing engineered bamboo with regional timber?",
              "choices": [
                "Bamboo grows more slowly than northern spruce trees.",
                "Long-distance ocean shipping erased much of bamboo's carbon savings.",
                "Cross-laminated spruce requires twice as much glue as bamboo.",
                "Bamboo beams weighed five times more than reinforced concrete."
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะ Maya พบว่าการขนส่งคานไม้ไผ่ข้ามทวีประยะทาง 10,000 กิโลเมตรทางเรือทำให้ข้อได้เปรียบด้านคาร์บอนหายไปครึ่งหนึ่ง"
            },
            {
              "q": "Why does regional CLT have a regulatory advantage over structural bamboo for this project?",
              "choices": [
                "It avoids extra municipal fire-testing delays because it is already pre-approved.",
                "It requires thinner protective vapor barriers in humid weather.",
                "It is exempt from all municipal moisture inspections.",
                "It allows builders to skip adding sprinklers inside the four-story atrium."
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะ CLT ท้องถิ่นมีค่ามาตรฐานทนไฟ 2 ชั่วโมงที่เทศบาลรับรองไว้ล่วงหน้าแล้ว ส่วนไม้ไผ่โครงสร้างต้องรอทดสอบพิเศษนานหลายเดือน"
            },
            {
              "q": "What does Professor Cho ask Maya to include in Friday's design brief?",
              "choices": [
                "A revised operational heating estimate for Cedar Hall",
                "Water-absorption test data for mud-brick courtyard walls",
                "Shipping-distance carbon data supporting local CLT selection",
                "Architectural drawings replacing the atrium with steel beams"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะอาจารย์แนะนำให้นำกราฟคาร์บอนจากระยะทางขนส่ง (freight-distance curves) ใส่ลงในเอกสารสรุปวันศุกร์เพื่อสนับสนุนการเลือกใช้ไม้ CLT ในท้องถิ่น"
            }
          ]
        },
        "announcement": {
          "title": "Extended Hours for Dormitory Sustainability Audits",
          "speaker": "f",
          "accent": "uk",
          "lines": [
            "Attention North Campus dormitory residents: student energy auditors from the Sustainable Architecture Lab will inspect common-area windows and hallway radiator valves next Tuesday and Wednesday.",
            "Because teams are testing nighttime heat-retention efficiency using infrared cameras, audits will run from 6:00 p.m. until 10:00 p.m.",
            "Auditors will remain strictly in corridors, lounges, and stairwells and will not enter private student bedrooms.",
            "Please keep lounge drapes pulled open during those evening hours so cameras can scan window seals accurately."
          ],
          "qs": [
            {
              "q": "Why are the dormitory sustainability audits taking place during evening hours?",
              "choices": [
                "Infrared cameras evaluate nighttime heat loss more accurately then.",
                "Private bedrooms are vacant between six and ten at night.",
                "Heating radiator valves are shut off before six o'clock.",
                "Daytime museum tours keep architecture students busy."
              ],
              "ans": 0,
              "why": "ข้อ A ถูกเพราะทีมตรวจประเมินประสิทธิภาพการเก็บกักความร้อนตอนกลางคืนด้วยกล้องอินฟราเรด จึงต้องทำช่วง 18:00–22:00 น."
            },
            {
              "q": "What are residents asked to do during Tuesday and Wednesday evenings?",
              "choices": [
                "Leave their private bedroom doors unlocked for valve checks",
                "Turn off all hallway radiators prior to 6:00 p.m.",
                "Keep shared lounge curtains open so window seals can be scanned",
                "Vacate common lounges until auditors leave North Campus"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะประกาศขอให้เปิดม่านในห้องนั่งเล่นรวม (keep lounge drapes pulled open) ไว้เพื่อไม่ให้บังแนวกล้องสแกนขอบหน้าต่าง"
            }
          ]
        },
        "talk": {
          "subject": "History of Technology",
          "title": "How Early Printers Solved the Type-Casting and Ink Bottleneck",
          "speaker": "m",
          "accent": "us",
          "lines": [
            "Historians often summarize Gutenberg's breakthrough in three words—movable metal type—yet Korean artisans had already cast bronze movable characters in the thirteenth century.",
            "What made fifteenth-century European printing scale into a continental industry within decades was not merely movable letters, but how Gutenberg engineered three interdependent bottlenecks simultaneously.",
            "First, an alphabet of twenty-six letters lent itself to rapid mechanical casting, provided every tiny piece shared an identical height.",
            "If an 'e' sat half a millimeter taller than an 'a,' the platen crushed the taller letter while leaving its neighbor faint and illegible.",
            "Gutenberg's adjustable hand mold solved this cleanly: a two-part brass matrix let a craftsman swap letter widths in seconds—narrow for an 'i,' wide for an 'm'—while casting every character to uniform height from a fast-cooling lead-tin-antimony alloy that expanded slightly as it solidified, capturing razor-sharp edges.",
            "Second, water-soluble manuscript ink rolled off slick metal faces, so Gutenberg borrowed varnish-making techniques from Flemish oil painters, boiling linseed oil with soot into a tacky paste that gripped metal cleanly.",
            "Finally, by adapting Rhineland grape screw presses with a sliding bed, printers exerted crisp, even downward pressure without tearing damp linen sheets."
          ],
          "qs": [
            {
              "q": "What was the main problem if cast metal letters varied slightly in height?",
              "choices": [
                "Antimony separated from lead and tin during heating.",
                "The letters could not fit inside the adjustable brass hand mold.",
                "Taller letters received too much pressure while shorter ones printed faintly.",
                "Linen paper tore before absorbing oil-based Flemish paint."
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะอาจารย์อธิบายว่าหากตัว 'e' สูงกว่า 'a' เพียงครึ่งมิลลิเมตร แผ่นกดพิมพ์จะกดทับตัวที่สูงจนเกินไปและปล่อยให้ตัวที่เตี้ยกว่าพิมพ์ติดจางจนอ่านไม่ออก"
            },
            {
              "q": "Why did Gutenberg include antimony in his type-metal alloy?",
              "choices": [
                "It lowered the melting temperature below boiling water.",
                "It prevented oil-based soot ink from staining the brass matrix.",
                "It made the ink dry slower on damp rag sheets.",
                "It caused the cooling alloy to expand slightly for crisp letter edges."
              ],
              "ans": 3,
              "why": "ข้อ D ถูกเพราะโลหะผสมตะกั่ว-ดีบุก-พลวงขยายตัวเล็กน้อยขณะแข็งตัว (expanded slightly as it solidified) ทำให้ได้ขอบตัวอักษรที่คมกริบ"
            },
            {
              "q": "From which craft did Gutenberg adapt his sticky printing ink?",
              "choices": [
                "Rhineland winemaking",
                "Flemish oil painting",
                "Korean bronze casting",
                "Monastic calligraphy"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกเพราะอาจารย์ระบุว่ากูเทนเบิร์กยืมเทคนิคการทำวาร์นิชจากจิตรกรสีน้ำมันชาวเฟลมิช (Flemish oil painters) มาต้มน้ำมันลินสีดผสมเขม่าควัน"
            },
            {
              "q": "What is the lecturer's main argument about Gutenberg's achievement?",
              "choices": [
                "Movable type was invented for the first time in fifteenth-century Mainz.",
                "European printers copied Korean bronze molds without altering them.",
                "Solving casting, ink adhesion, and press mechanics together enabled rapid industrial scaling.",
                "Alphabetical scripts required larger screw presses than character-based scripts."
              ],
              "ans": 2,
              "why": "ข้อ C ถูกเพราะจุดสำคัญตลอดการบรรยายคือความสำเร็จไม่ได้อยู่ที่ตัวพิมพ์เคลื่อนที่ได้เพียงอย่างเดียว แต่อยู่ที่การแก้คอขวดทั้ง 3 จุดพร้อมกัน (การหล่อสูงเท่ากัน หมึกติดโลหะ และแท่นกดเกลียว)"
            }
          ]
        }
      }
    },
    "writing": {
      "build": [
        {
          "cue": "Did the museum extend hours for the early printing press exhibit?",
          "prefix": "Yes, it ",
          "chunks": [
            "on",
            "evenings",
            "until",
            "now",
            "eight",
            "stays",
            "Thursday",
            "open"
          ],
          "ans": "Yes, it now stays open until eight on Thursday evenings.",
          "suffix": ".",
          "why": "คำวิเศษณ์บอกเวลาปัจจุบัน (now) วางหน้ากริยา stays open ตามด้วยช่วงเวลา until eight on Thursday evenings"
        },
        {
          "cue": "Why did the campus gardeners replace the lawn near the library?",
          "prefix": "They planted ",
          "chunks": [
            "solitary",
            "populations",
            "declining",
            "support",
            "bee",
            "wildflowers",
            "to",
            "native"
          ],
          "ans": "They planted native wildflowers to support declining solitary bee populations.",
          "suffix": ".",
          "why": "กริยา planted + กรรม native wildflowers + to-infinitive บอกจุดประสงค์ (to support declining solitary bee populations)"
        },
        {
          "cue": "Can I switch to a quieter room on the third floor next semester?",
          "prefix": "You should ",
          "chunks": [
            "transfer",
            "afternoon",
            "submit",
            "before",
            "housing",
            "Friday",
            "form",
            "your"
          ],
          "ans": "You should submit your housing transfer form before Friday afternoon.",
          "suffix": ".",
          "why": "โครงสร้าง should + V1 (submit) + กรรมนามประสม (your housing transfer form) + เวลา (before Friday afternoon)"
        },
        {
          "cue": "How do passive solar classrooms stay warm during sunny winter afternoons?",
          "prefix": "Thick stone ",
          "chunks": [
            "release",
            "overnight",
            "sunlight",
            "absorb",
            "and",
            "slowly",
            "walls",
            "heat"
          ],
          "ans": "Thick stone walls absorb sunlight and release heat slowly overnight.",
          "suffix": ".",
          "why": "ประธาน Thick stone walls + กริยาคู่เชื่อมด้วย and: absorb sunlight and release heat slowly overnight"
        },
        {
          "cue": "Why could Gutenberg cast thousands of identical metal letters quickly?",
          "prefix": "He invented ",
          "chunks": [
            "evenly",
            "that",
            "hand",
            "shaped",
            "letter",
            "an",
            "each",
            "adjustable",
            "mold"
          ],
          "ans": "He invented an adjustable hand mold that shaped each letter evenly.",
          "suffix": ".",
          "why": "นามวลี (an adjustable hand mold) ขยายด้วย relative clause (that shaped each letter evenly)"
        },
        {
          "cue": "Are visitors allowed to photograph the fragile medieval books inside Gallery B?",
          "prefix": "Could you check ",
          "chunks": [
            "near",
            "banned",
            "photography",
            "whether",
            "cases",
            "flash",
            "those",
            "is"
          ],
          "ans": "Could you check whether flash photography is banned near those cases?",
          "suffix": "?",
          "why": "คำถามซ้อน (embedded yes/no question) ใช้ whether + ประธาน (flash photography) + is banned near those cases"
        },
        {
          "cue": "When do native carpenter bees emerge from their winter nests?",
          "prefix": "I wonder ",
          "chunks": [
            "earlier",
            "springs",
            "to",
            "warmer",
            "cause",
            "whether",
            "emerge",
            "them"
          ],
          "ans": "I wonder whether warmer springs cause them to emerge earlier.",
          "suffix": ".",
          "why": "ประโยคตามหลัง I wonder whether ใช้รูปแบบบอกเล่า: warmer springs + cause + them + to emerge earlier"
        },
        {
          "cue": "What made cross-laminated timber attractive for the new dormitory?",
          "prefix": "The architects ",
          "chunks": [
            "its",
            "throughout",
            "stores",
            "it",
            "chose",
            "timber",
            "carbon",
            "because",
            "lifespan"
          ],
          "ans": "The architects chose timber because it stores carbon throughout its lifespan.",
          "suffix": ".",
          "why": "ประโยคหลัก The architects chose timber เชื่อมเหตุผลด้วย because it stores carbon throughout its lifespan"
        },
        {
          "cue": "Did the housing office fix the leaking radiator in your room?",
          "prefix": "No, maintenance ",
          "chunks": [
            "Tuesday",
            "valve",
            "the",
            "won't",
            "morning",
            "replace",
            "until",
            "broken",
            "next"
          ],
          "ans": "No, maintenance won't replace the broken valve until next Tuesday morning.",
          "suffix": ".",
          "why": "โครงสร้างปฏิเสธ won't + V1 (replace) + กรรม (the broken valve) + until next Tuesday morning"
        },
        {
          "cue": "Why do early printed books look more uniform than handwritten manuscripts?",
          "prefix": "Metal type ",
          "chunks": [
            "errors",
            "page",
            "fewer",
            "every",
            "reproduce",
            "with",
            "printers",
            "to",
            "allowed"
          ],
          "ans": "Metal type allowed printers to reproduce every page with fewer errors.",
          "suffix": ".",
          "why": "โครงสร้าง allow + object + to-infinitive: allowed printers to reproduce every page with fewer errors"
        }
      ],
      "email": {
        "title": "Requesting a Quiet Dormitory Room Transfer & Heating Repair",
        "situation": "You live on the first floor of Pine Residence Hall directly above an early-morning delivery dock, which disrupts your sleep and study schedule. In addition, the heating radiator valve in your current bedroom has been leaking steam since Monday. Write an email to the University Housing Office.",
        "bullets": [
          "Describe both the ongoing loading-dock noise and the malfunctioning radiator valve clearly",
          "Request a transfer to an open single room in a Quiet-Study Wing for next term",
          "Mention your flexible moving schedule and confirm that your housing ID is attached"
        ],
        "model": "Subject: Quiet-Wing Transfer Request and Room 108 Radiator Repair\n\nDear University Housing Team,\n\nI am writing to report two ongoing concerns in Pine Hall Room 108. First, delivery trucks unloading outside my first-floor window every morning at 5:30 a.m. make continuous sleep difficult. Second, my bedroom radiator valve has been leaking loud steam since Monday, leaving the room uncomfortably warm.\n\nWhile maintenance repairs the radiator, could I please transfer to an open single room in a Quiet-Study Wing for next semester? My exam schedule is flexible, so I can relocate any afternoon next week. I have attached a copy of my student housing ID for verification.\n\nThank you for your assistance.\n\nSincerely,\nNora Chen",
        "notes": "กลยุทธ์: แบ่งย่อหน้าชัดตามประเด็น (~114 คำ): 1) ระบุปัญหาทั้งสองเรื่องพร้อมเลขห้องและเวลาที่เกิดเหตุอย่างชัดเจน (เสียงรถส่งของ 5:30 น. และวาล์วฮีตเตอร์รั่วตั้งแต่วันจันทร์); 2) ขอโอนย้ายไปห้องเดี่ยวใน Quiet-Study Wing เทอมหน้าอย่างสุภาพ; 3) แจ้งความยืดหยุ่นเรื่องเวลาย้ายและแนบไฟล์บัตรประจำตัวผู้พักอาศัยครบถ้วน."
      },
      "discussion": {
        "topic": "Restoring Campus Lawns into Native Wildflower Meadows",
        "profPrompt": "Many universities spend substantial water and fuel maintaining closely mowed grass lawns across their grounds. Some campus planners propose converting ornamental campus lawns into native wildflower meadows to combat pollinator decline, even though tall wild plants may look less tidy during late autumn. Do you think universities should replace traditional lawns with wildflower meadows? Explain your view.",
        "posts": [
          {
            "name": "Noah",
            "text": "Universities should convert nearly all decorative lawns into native meadows. Mowing grass wastes fuel and leaves solitary bees without nectar. Installing clear museum-style interpretive signs explaining how each wildflower supports local ecosystems turns perceived 'messiness' into an engaging outdoor science exhibit."
          },
          {
            "name": "Priya",
            "text": "Supporting pollinators is vital, yet students still need flat grassy quads for outdoor studying, club fairs, and intramural sports. Rather than replacing every lawn, campuses should plant broad wildflower borders along building edges and walkways while keeping central green fields open for daily campus life."
          }
        ],
        "model": "I strongly support Priya's balanced approach over converting every grassy field on campus. While Noah rightly notes that ornamental lawns offer little nectar for native bees and educational signs can foster appreciation, campus spaces must also serve daily student needs. Central quads host graduation ceremonies, informal study picnics, and recreation that require durable, walkable turf. A practical compromise is replacing unused perimeter strips, steep slopes, and sunny building borders with staggered-blooming native wildflowers. Ecological research shows that continuous flowering corridors provide solitary bees with steady pollen from spring through autumn while connecting larger parks nearby. At the same time, universities cut weekly mowing costs and water use substantially without sacrificing shared recreational lawns in the heart of campus.",
        "notes": "โครงสร้างแนะนำ (~130 คำ): 1) อ้างอิงความเห็นทั้ง Priya และ Noah อย่างให้เกียรติก่อนเลือกจุดยืนแบบสมดุล; 2) เพิ่มเหตุผลเชิงรูปธรรมว่าพื้นที่ขอบอาคารและทางลาดเหมาะแก่การปลูกดอกไม้ป่าเชื่อมต่อกันเป็น corridor เพื่อผึ้งสันโดษได้โดยไม่เสียพื้นที่กิจกรรมกลางแจ้งของนักศึกษา; 3) ปิดท้ายด้วยผลประโยชน์ด้านงบประมาณการตัดหญ้าและการใช้น้ำที่ลดลง."
      }
    },
    "speaking": {
      "repeat": [
        {
          "text": "Flash photography is prohibited inside gallery rooms.",
          "accent": "ca",
          "sex": "f"
        },
        {
          "text": "Native wildflower strips supply pollen throughout three growing seasons.",
          "accent": "us",
          "sex": "m"
        },
        {
          "text": "Quiet-study dormitory wings enforce continuous low-noise standards around the clock.",
          "accent": "uk",
          "sex": "f"
        },
        {
          "text": "Cross-laminated timber buildings store atmospheric carbon while cutting heavy steel construction emissions.",
          "accent": "us",
          "sex": "m"
        },
        {
          "text": "Gutenberg's adjustable hand mold allowed early workshops to cast thousands of uniform metal letters.",
          "accent": "ca",
          "sex": "f"
        }
      ],
      "interview": {
        "topic": "Sustainable Campus Living and Cultural Spaces",
        "intro": "Hello! In this short interview, I'd like to hear your thoughts on university living spaces, campus green areas, and cultural exhibits like campus museums.",
        "questions": [
          {
            "q": "What physical features make a campus dormitory or study building most comfortable for you?",
            "model": "For me, natural daylight and reliable acoustic quiet matter most. When a study room has large south-facing windows and fresh ventilation, I feel alert without needing harsh overhead lights. At the same time, good sound insulation is essential in dormitories so street traffic or hallway footsteps don't break my focus before morning exams. Comfortable temperature control and durable natural materials like wood also make long study evenings much calmer.",
            "tips": "โฟกัส 2–3 คุณสมบัติหลักที่เชื่อมโยงกันได้ (แสงธรรมชาติ + ความเงียบ/ฉนวนเสียง + การระบายอากาศ) พร้อมเหตุผลที่เกี่ยวกับการเรียนจริง"
          },
          {
            "q": "How do campus gardens, trees, or wildflower areas affect your daily mood between classes?",
            "model": "Walking past flowering gardens and shaded trees noticeably lowers my stress on busy days. After sitting through two-hour lectures indoors, seeing colorful native wildflowers, butterflies, and bees gives my mind an immediate reset. Even five minutes on a shaded bench under mature trees helps me return to my afternoon classes feeling refreshed and ready to concentrate. Green spaces also bring different students together naturally outdoors.",
            "tips": "อธิบายความรู้สึกเปลี่ยนผ่านจากห้องเรียนสู่นอกอาคาร (contrast: indoors -> green space) และผลลัพธ์ต่อสมาธิ/อารมณ์"
          },
          {
            "q": "Do you think university museums and special exhibits benefit students outside history or art majors?",
            "model": "Definitely, because seeing real physical artifacts turns abstract ideas into memorable stories. Last semester, for instance, an engineering friend visited a printing press exhibit expecting to stay ten minutes, yet ended up studying how metal alloys and screw mechanics revolutionized publishing. Free campus exhibits spark unexpected curiosity across disciplines and give busy students an inspiring break right near their classrooms.",
            "tips": "ตอบรับชัดเจน (Definitely) แล้วยกตัวอย่างข้ามสาขา (เช่น นักศึกษาวิศวกรรมดูแท่นพิมพ์) เพื่อสนับสนุนข้อโต้แย้งอย่างมีชีวิตชีวา"
          },
          {
            "q": "If your university renovated one older campus building sustainably, what single improvement would you prioritize?",
            "model": "I would prioritize upgrading old single-pane windows and sealing leaky building frames first. Many older campus halls waste huge amounts of heating and cooling energy simply through drafty windows. Installing triple-glazed windows paired with shaded exterior overhangs cuts electricity demand immediately, reduces outside street noise for students studying inside, and makes indoor classrooms far more comfortable year-round without requiring flashy new construction.",
            "tips": "เลือกการปรับปรุงที่ชัดเจนเพียง 1 อย่างตามโจทย์ (what single improvement) แล้วแจกแจงผลพลอยได้ 2–3 ด้าน (ประหยัดพลังงาน + กันเสียง + ความสบาย)"
          }
        ]
      }
    },
    "theme": "The Economic Impact of Gutenberg's Movable Type & Why Phenological Mismatch Threatens Native Pollinators"
  },
  {
    "set": 3,
    "theme": "Underground Aquifers & Hydrology, Viking Astronomical Navigation, Research Library Rare Archives & Campus Recreation",
    "reading": {
      "stage1": {
        "cloze": {
          "title": "Managed Aquifer Recharge in Thirsty Cities",
          "intro": "Rapidly growing metropolitan areas increasingly rely on subterranean water reserves when seasonal rivers run dry.",
          "segments": [
            "However, prolonged ",
            {
              "pre": "ext",
              "ans": "raction",
              "hint": "n. การสูบ/ดึงน้ำบาดาลขึ้นมา"
            },
            " from underground aquifers can permanently ",
            {
              "pre": "com",
              "ans": "press",
              "hint": "v. บีบอัด"
            },
            " porous clay layers and ",
            {
              "pre": "red",
              "ans": "uce",
              "hint": "v. ลดลง"
            },
            " future storage capacity. To ",
            {
              "pre": "cou",
              "ans": "nter",
              "hint": "v. ต้าน/รับมือ"
            },
            " this subsidence, hydrologists divert treated ",
            {
              "pre": "sto",
              "ans": "rmwater",
              "hint": "n. น้ำฝนไหลบ่า"
            },
            " into shallow spreading basins where ",
            {
              "pre": "gra",
              "ans": "vity",
              "hint": "n. แรงโน้มถ่วง"
            },
            " pulls liquid slowly through sandy ",
            {
              "pre": "sed",
              "ans": "iments",
              "hint": "n. ตะกอน"
            },
            ". As water percolates downward, ",
            {
              "pre": "nat",
              "ans": "ural",
              "hint": "adj. ตามธรรมชาติ"
            },
            " soil microbes break down ",
            {
              "pre": "dis",
              "ans": "solved",
              "hint": "adj. ที่ละลายอยู่"
            },
            " organic pollutants before the ",
            {
              "pre": "fil",
              "ans": "tered",
              "hint": "adj. ที่ผ่านการกรองแล้ว"
            },
            " supply reaches deep municipal wells."
          ],
          "why": "1) extraction (การสูบดึงน้ำ) เป็นคำนามหลังคุณศัพท์ prolonged; 2) compress (บีบอัด) กริยาช่อง 1 หลัง can; 3) reduce (ลดลง) เชื่อมด้วย and คู่กับ compress; 4) counter (รับมือ/ต้าน) หลัง To แสดงวัตถุประสงค์; 5) stormwater (น้ำฝนไหลบ่า) เป็นกรรมของ divert treated; 6) gravity (แรงโน้มถ่วง) เป็นประธานของกริยา pulls; 7) sediments (ตะกอน) พหูพจน์ตามลักษณะชั้นทราย; 8) natural (ตามธรรมชาติ) ขยาย soil microbes; 9) dissolved (ที่ละลายอยู่) ขยาย organic pollutants; 10) filtered (ที่ผ่านการกรองแล้ว) ขยาย supply หลังน้ำซึมผ่านชั้นดิน"
        },
        "daily": [
          {
            "kind": "Campus Notice",
            "title": "Northside Recreation Center · Semester Pass Activation",
            "text": "All full-time undergraduates receive baseline fitness-floor and indoor-track access automatically with a valid student ID. However, entry to the climbing wall, Olympic lap pool, and group cycling studios requires activating the Extended Recreation Pass ($35 per semester) through the Student Portal before Friday, September 12. Students who register by 5:00 p.m. on Friday also receive two complimentary guest vouchers valid during off-peak weekday hours (6:00 a.m.–3:00 p.m.). Equipment lockers may be rented monthly at the front desk, though overnight storage in day-use cubbies is strictly prohibited.",
            "qs": [
              {
                "q": "Which facility is included without purchasing the Extended Recreation Pass?",
                "choices": [
                  "The indoor running track",
                  "The Olympic lap pool",
                  "The climbing wall",
                  "The group cycling studio"
                ],
                "ans": 0,
                "why": "ข้อ A ถูกต้อง — ประกาศระบุว่านักศึกษาได้รับสิทธิ์พื้นฐาน (baseline access) ในส่วนฟิตเนสและลู่วิ่งในร่มโดยอัตโนมัติ ส่วนสระว่ายน้ำ หน้าผาจำลอง และสตูดิโอปั่นจักรยานต้องซื้อบัตรเสริม"
              },
              {
                "q": "When may a student's complimentary guest voucher be used?",
                "choices": [
                  "On Saturday afternoons after 3:00 p.m.",
                  "At any time once the locker fee is paid",
                  "Only during weekday morning and early afternoon hours",
                  "Throughout the entire semester including weekends"
                ],
                "ans": 2,
                "why": "ข้อ C ถูกต้อง — บัตรแขกใช้ได้เฉพาะช่วงเวลาคนน้อยในวันธรรมดา (off-peak weekday hours: 6:00 a.m.–3:00 p.m.) เท่านั้น"
              }
            ]
          },
          {
            "kind": "Email",
            "title": "Confirmation: Rare Archives Reading Room Appointment",
            "text": "Dear Maya,\nYour request to consult Box 14 of the 1894 Great Plains Hydrographic Survey has been approved for Tuesday, October 8, from 1:30 p.m. to 4:00 p.m. in the Sterling Rare Archives Reading Room (Floor 4). Please leave backpacks, coats, and beverage containers in the free hallway lockers before checking in. Only laptops, phones on silent mode, and wooden pencils are permitted at research tables; ink pens and highlighters are prohibited. Because our archival staff retrieves materials from climate-controlled vaults at 11:00 a.m. and 2:00 p.m., late requests cannot be pulled until the next retrieval window.",
            "qs": [
              {
                "q": "What item is Maya allowed to bring to the research table?",
                "choices": [
                  "A capped bottle of water",
                  "A wooden pencil and a laptop",
                  "A yellow highlighter for notes",
                  "A small canvas backpack"
                ],
                "ans": 1,
                "why": "ข้อ B ถูกต้อง — อีเมลระบุชัดว่านำเข้าโต๊ะค้นคว้าได้เฉพาะแล็ปท็อป โทรศัพท์ปิดเสียง และดินสอไม้ (wooden pencils) ส่วนน้ำดื่ม ปากกาเน้นข้อความ และกระเป๋าต้องเก็บในล็อกเกอร์"
              },
              {
                "q": "Why does the email mention the 11:00 a.m. and 2:00 p.m. schedule?",
                "choices": [
                  "To warn that the reading room closes at those hours",
                  "To announce when staff clean the climate-controlled vaults",
                  "To show when Maya must return her hallway locker key",
                  "To explain when requested boxes are brought up from storage"
                ],
                "ans": 3,
                "why": "ข้อ D ถูกต้อง — เจ้าหน้าที่ดึงกล่องเอกสารจากห้องเก็บควบคุมอุณหภูมิตามรอบเวลา 11:00 น. และ 14:00 น. หากขอไม่ทันรอบต้องรอช่วงถัดไป"
              }
            ]
          }
        ],
        "academic": {
          "subject": "Hydrogeology",
          "title": "The Ogallala Aquifer: Ancient Water Under Modern Farms",
          "paragraphs": [
            "Stretching beneath eight states in the central United States, the Ogallala Aquifer is one of the largest subterranean freshwater formations on Earth. Unlike shallow alluvial deposits that refill quickly after heavy spring rains, the Ogallala consists largely of fossil water deposited by melting Rocky Mountain glaciers thousands of years ago. Today, thick layers of low-permeability clay and semi-arid surface evaporation limit natural replenishment across much of the High Plains to less than an inch per year.",
            "Despite this slow recharge rate, high-capacity diesel and electric pumps introduced in the mid-twentieth century enabled farmers to irrigate millions of acres of corn, wheat, and cotton. Agricultural output soared, turning dry grasslands into an economic powerhouse, yet extraction soon outpaced replenishment by an order of magnitude. In parts of western Kansas and Texas, water tables have dropped more than forty meters since 1950.",
            "Because pumping deeper water requires exponentially more energy, many communities now face a dual crisis of rising costs and shrinking well yields. In response, some irrigation districts have adopted voluntary pumping quotas paired with soil-moisture sensors and drought-tolerant crop rotations. While these conservation strategies cannot restore prehistoric water levels within human lifetimes, early monitoring shows they can flatten the decline curve and extend the aquifer's productive span by decades."
          ],
          "qs": [
            {
              "q": "What is the main topic of the passage?",
              "choices": [
                "How Rocky Mountain glaciers shaped the Great Plains",
                "How heavy pumping threatens a slowly recharging aquifer",
                "Why cotton and corn need more water than wheat",
                "How diesel pumps replaced electric motors on farms"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — บทความสรุปภาพรวมตั้งแต่ลักษณะน้ำโบราณที่เติมกลับช้า การสูบใช้จนระดับน้ำลดฮวบ และแนวทางอนุรักษ์ของชุมชน"
            },
            {
              "q": "Why does the author compare the Ogallala Aquifer to shallow alluvial deposits in paragraph 1?",
              "choices": [
                "To illustrate how rapidly rainwater refills most underground rock",
                "To prove that shallow deposits contain cleaner drinking water",
                "To emphasize that the Ogallala cannot recover quickly from heavy pumping",
                "To explain why surface evaporation affects Rocky Mountain glaciers"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — ผู้เขียนเทียบกับชั้นตะกอนตื้นที่เติมน้ำเร็วหลังฝนตกเพื่อเน้นย้ำว่า Ogallala เติมกลับช้ามาก (ไม่ถึง 1 นิ้วต่อปี) จึงฟื้นฟูหลังสูบหนักได้ยาก"
            },
            {
              "q": "The phrase \"outpaced replenishment\" in paragraph 2 is closest in meaning to",
              "choices": [
                "occurred more slowly than natural refilling",
                "measured the depth of agricultural wells",
                "improved the quality of surface runoff",
                "exceeded the rate at which water returned"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — outpace แปลว่า เร็วกว่าหรือล้ำหน้า ดังนั้น outpaced replenishment หมายถึงอัตราการสูบใช้น้ำเกินกว่าอัตราที่น้ำเติมกลับตามธรรมชาติ"
            },
            {
              "q": "According to paragraph 3, what is one limitation of current conservation strategies?",
              "choices": [
                "They slow depletion without rapidly restoring ancient volume",
                "Soil-moisture sensors fail in low-permeability clay soils",
                "Farmers refuse drought-tolerant crops without subsidies",
                "Rising energy costs block voluntary quotas in Kansas"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — ย่อหน้า 3 ระบุว่ามาตรการอนุรักษ์ไม่สามารถคืนระดับน้ำยุคก่อนประวัติศาสตร์ได้ในช่วงชีวิตคน แต่ช่วยชะลอความเสื่อมและยืดอายุการใช้งานได้หลายทศวรรษ"
            },
            {
              "q": "What can be inferred about farms relying on deeper wells today?",
              "choices": [
                "They harvest more irrigated acres than in 1950",
                "They receive fresh glacial meltwater each spring",
                "Their pumping energy costs have climbed substantially",
                "They no longer need soil-moisture monitoring tools"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — อนุมานได้จากย่อหน้า 3 ที่ระบุว่าการสูบน้ำจากระดับลึกกว่าเดิมต้องใช้พลังงานเพิ่มขึ้นแบบทวีคูณ (exponentially more energy) ส่งผลให้ต้นทุนพลังงานสูงขึ้นมาก"
            }
          ]
        }
      },
      "stage2a": {
        "cloze": {
          "title": "Calcite Crystals and Norse Sea Navigation",
          "intro": "Medieval Icelandic sagas mention a mysterious sunstone that guided Norse sailors even when thick clouds hid the sun.",
          "segments": [
            "Modern optical experiments ",
            {
              "pre": "sug",
              "ans": "gest",
              "hint": "v. บ่งชี้/เสนอแนะ"
            },
            " that this navigational ",
            {
              "pre": "to",
              "ans": "ol",
              "hint": "n. เครื่องมือ"
            },
            " was likely a ",
            {
              "pre": "tra",
              "ans": "nsparent",
              "hint": "adj. โปร่งใส"
            },
            " crystal of Iceland ",
            {
              "pre": "sp",
              "ans": "ar",
              "hint": "n. แร่แคลไซต์ใส (Iceland spar)"
            },
            ". Because sunlight scatters ",
            {
              "pre": "ac",
              "ans": "ross",
              "hint": "prep. ทั่ว/ข้าม"
            },
            " atmospheric molecules, the ",
            {
              "pre": "li",
              "ans": "ght",
              "hint": "n. แสง"
            },
            " becomes polarized in ",
            {
              "pre": "con",
              "ans": "centric",
              "hint": "adj. ที่มีจุดศูนย์กลางร่วมกัน"
            },
            " rings centered ",
            {
              "pre": "ar",
              "ans": "ound",
              "hint": "prep. รอบ ๆ"
            },
            " the sun. By ",
            {
              "pre": "rot",
              "ans": "ating",
              "hint": "v. การหมุน (gerund)"
            },
            " an Iceland spar crystal overhead, a skilled navigator could ",
            {
              "pre": "lo",
              "ans": "cate",
              "hint": "v. ระบุตำแหน่ง"
            },
            " the hidden sun's direction within a few degrees."
          ],
          "why": "1) suggest (บ่งชี้) กริยาพหูพจน์ตาม experiments; 2) tool (เครื่องมือ) ขยายโดย navigational; 3) transparent (โปร่งใส) ขยาย crystal; 4) spar (Iceland spar = แร่แคลไซต์ใส); 5) across (ทั่ว) ใช้กับ atmospheric molecules; 6) light (แสง) เป็นประธานของ becomes polarized; 7) concentric (เป็นวงซ้อนร่วมศูนย์กลาง) ขยาย rings; 8) around (รอบ ๆ) บุพบทหลัง centered; 9) rotating (การหมุน) เป็น gerund หลังบุพบท By; 10) locate (ระบุตำแหน่ง) กริยาช่อง 1 หลัง could"
        },
        "daily": [
          {
            "kind": "Service Flyer",
            "title": "Campus Rec Outdoor Adventure · Weekend Gear Checkout",
            "text": "Planning a river trip or autumn hike? Campus Rec Pass holders may check out camping stoves, two-person tents, trekking poles, and inflatable kayaks from the Adventure Outpost behind the Aquatic Center. Reservations open online every Monday at 8:00 a.m. for the upcoming weekend. Gear pickup runs Thursday 1:00 p.m.–6:00 p.m. and Friday 10:00 a.m.–4:00 p.m. All equipment must be rinsed, dried, and returned by Monday at noon; muddy tents or late items incur a $15 cleaning or late fee per day. A $25 refundable credit-card hold is placed at pickup.",
            "qs": [
              {
                "q": "Who is eligible to rent equipment from the Adventure Outpost?",
                "choices": [
                  "Any community resident with a credit card",
                  "Students who hold a Campus Rec Pass",
                  "Only members of the Varsity Rowing Club",
                  "Students enrolled in Outdoor Leadership courses"
                ],
                "ans": 1,
                "why": "ข้อ B ถูกต้อง — ใบปลิวระบุชัดว่าผู้ถือบัตร Campus Rec Pass (Campus Rec Pass holders) มีสิทธิ์ยืมอุปกรณ์เดินป่าและพายเรือ"
              },
              {
                "q": "When can reserved weekend equipment be picked up?",
                "choices": [
                  "Monday morning starting at 8:00 a.m.",
                  "Saturday morning before 10:00 a.m.",
                  "Thursday afternoon or Friday",
                  "Any weekday evening until 8:00 p.m."
                ],
                "ans": 2,
                "why": "ข้อ C ถูกต้อง — ระบบจองเปิดวันจันทร์ 8:00 น. แต่เวลารับอุปกรณ์ (Gear pickup) คือวันพฤหัสบดี 13:00–18:00 น. และวันศุกร์ 10:00–16:00 น."
              },
              {
                "q": "How can a student avoid paying the $15 extra charge?",
                "choices": [
                  "By booking a kayak instead of a tent",
                  "By leaving a cash deposit instead of a card",
                  "By picking up items on Friday morning",
                  "By returning clean, dry gear before Monday noon"
                ],
                "ans": 3,
                "why": "ข้อ D ถูกต้อง — ค่าธรรมเนียม $15 เก็บเมื่อคืนเต็นท์เปื้อนโคลนหรือส่งคืนช้ากว่าเที่ยงวันจันทร์ ดังนั้นต้องล้าง ตากให้แห้ง และคืนตรงเวลา"
              }
            ]
          }
        ],
        "academic": {
          "subject": "Maritime History",
          "title": "Bearing Dials and Wayfinding in Norse Atlantic Voyages",
          "paragraphs": [
            "Between roughly 800 and 1050 CE, Norse seafarers regularly crossed over two thousand kilometers of open North Atlantic ocean between Norway, Iceland, and Greenland without magnetic compasses. Instead of relying on a single instrument, navigators combined environmental observation with simple wooden sighting devices. By tracking seabird flight paths, coastal cloud reflections, wave swell direction, and ocean water color, experienced crews could detect distant islands long before mountains rose above the horizon.",
            "A wooden artifact excavated in southern Greenland in 1948 added an important clue to Norse celestial techniques. The fragmented oak disk, roughly seven centimeters wide, bears carved notches along its rim and a central hole likely meant for a vertical pin, or gnomon. Experimental archaeologists found that when held level at sea, the gnomon casts a shadow tip across a hyperbolic curve etched on the disk's flat face.",
            "Because the shadow path shifts with the sun's seasonal altitude and the ship's latitude, a navigator using the appropriate seasonal curve could determine whether the vessel had drifted north or south of its intended parallel. While wooden bearing dials required clear horizons at noon or sunset, pairing them with dead reckoning and bird sightings gave Norse mariners a reliable, redundant navigation toolkit."
          ],
          "qs": [
            {
              "q": "What is the main purpose of the passage?",
              "choices": [
                "To show how Norse crews navigated using natural cues and sun dials",
                "To argue that Norse vessels sailed faster than modern ships",
                "To explain why Greenland cooled sharply after 1050 CE",
                "To compare magnetic compasses crafted in Norway and Iceland"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — บทความอธิบายวิธีการเดินเรือของชาวนอร์สที่ผสานการสังเกตธรรมชาติกับจานเทียบเงาอาทิตย์ (bearing dial) โดยไม่ต้องพึ่งเข็มทิศแม่เหล็ก"
            },
            {
              "q": "According to paragraph 1, how could Norse sailors sense nearby land before seeing it?",
              "choices": [
                "By measuring deep-water salinity with carved oak rods",
                "By listening to waves echoing off cliffs at night",
                "By tracking schools of migrating Atlantic salmon",
                "By watching seabirds, clouds, waves, and water color"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — ย่อหน้า 1 ระบุชัดว่าลูกเรือสังเกตเส้นทางบินของนกทะเล แสงสะท้อนเมฆชายฝั่ง ทิศทางคลื่น และสีน้ำทะเล"
            },
            {
              "q": "In paragraph 2, the word \"excavated\" is closest in meaning to",
              "choices": [
                "repaired",
                "dug up",
                "carved",
                "sold"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — excavated ในบริบทโบราณคดีหมายถึง ขุดค้นพบ (dug up)"
            },
            {
              "q": "What does the carved curve on the Greenland oak disk help a navigator detect?",
              "choices": [
                "North-south drift away from the target latitude",
                "The exact depth of shallow underwater reefs",
                "How many days remain before winter storms hit",
                "The local speed of the surface ocean current"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — ย่อหน้า 3 ระบุว่าปลายเงาที่ตกบนเส้นโค้งช่วยบอกได้ว่าเรือลอยเบี่ยงไปทางเหนือหรือใต้จากเส้นละติจูดเป้าหมายหรือไม่"
            },
            {
              "q": "Why does the author describe the Norse navigation toolkit as \"redundant\" in paragraph 3?",
              "choices": [
                "To criticize Norse sailors for carrying unnecessary wooden gear",
                "To imply that bird sightings always gave incorrect directions",
                "To note that mariners had backup methods when one cue failed",
                "To suggest the Greenland disk was copied from earlier maps"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — ในทางเทคนิค redundant หมายถึงมีระบบสำรองหลายทางคู่กัน ทำให้เมื่อท้องฟ้าปิดหรือใช้วิธีหนึ่งไม่ได้ก็ยังใช้ข้อมูลอื่นทดแทนได้"
            }
          ]
        }
      },
      "stage2b": {
        "cloze": {
          "title": "Preserving Medieval Iron-Gall Ink Manuscripts",
          "intro": "Many medieval charters held in university rare archives were written with iron-gall ink prepared from oak galls and ferrous sulfate.",
          "segments": [
            "Over centuries, uncombined ",
            {
              "pre": "ac",
              "ans": "ids",
              "hint": "n. กรด (พหูพจน์)"
            },
            " and free iron ",
            {
              "pre": "io",
              "ans": "ns",
              "hint": "n. ไอออน (พหูพจน์)"
            },
            " catalyze oxidative decay ",
            {
              "pre": "th",
              "ans": "at",
              "hint": "pron. ซึ่ง (relative pronoun)"
            },
            " literally eats through ",
            {
              "pre": "the",
              "ans": "ir",
              "hint": "pron. ของพวกมัน (อ้างถึง charters)"
            },
            " parchment or rag-paper ",
            {
              "pre": "sub",
              "ans": "strate",
              "hint": "n. วัสดุรองรับ/พื้นผิว"
            },
            ". Because fluctuations in ",
            {
              "pre": "amb",
              "ans": "ient",
              "hint": "adj. โดยรอบ"
            },
            " humidity cause animal-skin ",
            {
              "pre": "vel",
              "ans": "lum",
              "hint": "n. กระดาษหนังสัตว์ชั้นดี"
            },
            " to swell and ",
            {
              "pre": "con",
              "ans": "tract",
              "hint": "v. หดตัว"
            },
            ", brittle ink lines ",
            {
              "pre": "oft",
              "ans": "en",
              "hint": "adv. บ่อยครั้ง"
            },
            " fracture along folded ",
            {
              "pre": "cre",
              "ans": "ases",
              "hint": "n. รอยพับ"
            },
            " unless housed in tightly buffered, anoxic exhibition enclosures."
          ],
          "why": "1) acids (กรดพหูพจน์) จับคู่กับ free iron ions หลัง uncombined; 2) ions (ไอออนพหูพจน์) คู่กับกริยาพหูพจน์ catalyze; 3) that เชื่อมคำขยาย oxidative decay; 4) their อ้างถึง Many medieval charters (พหูพจน์); 5) substrate (วัสดุรองรับ) ต่อจาก parchment or rag-paper; 6) ambient (สภาพแวดล้อมโดยรอบ) ขยาย humidity; 7) vellum (แผ่นหนังสัตว์เขียนหนังสือ) เป็นกรรมของ cause; 8) contract (หดตัว) คู่ตรงข้ามกับ swell หลัง and; 9) often (บ่อยครั้ง) ขยายกริยา fracture; 10) creases (รอยพับ) หลัง folded"
        },
        "daily": [
          {
            "kind": "Policy Memo",
            "title": "Special Collections · Digital Surrogate & Handling Protocol",
            "text": "To minimize mechanical stress on pre-1800 bindings, items classified as Fragile Tier A may no longer be paged to the general reading room once a 600-dpi IIIF digital surrogate exists in the online catalog. Scholars requiring physical inspection for watermark microscopy, paper-fiber dating, or ultraviolet pigment analysis must submit a written justification signed by a department chair at least ten business days prior to travel. Approved physical consultations are capped at 90 minutes per day inside the Monitored Conservation Bay and disallow flash photography or weighted book snakes on flaking pigments.",
            "qs": [
              {
                "q": "Under what condition is a Tier A fragile book automatically withheld from normal reading-room paging?",
                "choices": [
                  "When it was published after 1800",
                  "When the researcher lacks a university alumni card",
                  "When another scholar has requested microfilm copies",
                  "When a high-resolution digital scan is already available online"
                ],
                "ans": 3,
                "why": "ข้อ D ถูกต้อง — บันทึกนโยบายระบุว่าเมื่อมีสำเนาดิจิทัลความละเอียด 600-dpi IIIF ในแค็ตตาล็อกแล้ว เอกสาร Fragile Tier A จะงดเบิกเข้าห้องอ่านทั่วไป"
              },
              {
                "q": "Which research activity qualifies for an exception to examine the physical object?",
                "choices": [
                  "Inspecting watermarks or UV pigment fluorescence under supervision",
                  "Transcribing printed chapters that are difficult to read on a screen",
                  "Checking footnote citations for a first-year essay",
                  "Taking flash photographs for a public classroom slide deck"
                ],
                "ans": 0,
                "why": "ข้อ A ถูกต้อง — ข้อยกเว้นให้ตรวจวัตถุจริงครอบคลุมงานวิเคราะห์เชิงกายภาพ เช่น ลายน้ำ (watermark microscopy) อายุเส้นใยกระดาษ หรือการวิเคราะห์รงควัตถุด้วยแสง UV และห้ามถ่ายภาพเปิดแฟลช"
              },
              {
                "q": "What must an applicant obtain before submitting a physical-inspection exception request?",
                "choices": [
                  "A $100 refundable deposit from the Conservation Bay",
                  "Approval from at least two fellow graduate students",
                  "Written endorsement from an academic department chair",
                  "Permission to remove the manuscript from the campus"
                ],
                "ans": 2,
                "why": "ข้อ C ถูกต้อง — ผู้ขอตรวจเอกสารจริงต้องยื่นคำชี้แจงที่มีลายเซ็นรับรองจากหัวหน้าภาควิชา (signed by a department chair) ล่วงหน้าอย่างน้อย 10 วันทำการ"
              }
            ]
          }
        ],
        "academic": {
          "subject": "Archaeometry & Optics",
          "title": "Twilight Polarimetry and the Viking Sunstone Hypothesis",
          "paragraphs": [
            "While medieval sagas refer poetically to the sólarsteinn, or sunstone, historians long debated whether the device represented literary folklore or genuine maritime technology. Because no calcite crystal has yet been recovered from a confirmed Viking shipwreck, critics argued that thick North Atlantic fog would scatter sunlight so chaotically as to render polarization patterns unreadable. To test this objection empirically, atmospheric physicists conducted thousands of sky-polarimetry measurements across Greenland and Hungary under varying cloud decks.",
            "Their results complicated both skepticism and overly simple claims of infallibility. Under completely unbroken, optically thick stratus clouds, linear polarization dropped below human visual thresholds, making bare-eye crystal navigation unreliable. Yet beneath partly overcast skies and during twilight—when the sun sits slightly below the horizon—polarized bands remained surprisingly coherent, especially along an arc ninety degrees away from the solar azimuth.",
            "Crucially, researchers noted that a crystal alone does not yield absolute compass bearings; rather, it allows a mariner to estimate the sun's hidden azimuth and elevation, which must then be cross-checked against a sun-compass shadow disk or known seasonal daylight arcs. Far from acting as a magic standalone compass, the sunstone appears to have functioned best as a twilight calibrator bridging brief gaps in traditional solar sightings."
          ],
          "qs": [
            {
              "q": "Why were some historians initially skeptical of the Viking sunstone hypothesis?",
              "choices": [
                "Iceland spar crystals stayed unknown in Europe until 1600",
                "Sagas claimed the stone worked only at midnight in winter",
                "Viking vessels could not haul heavy stone gear offshore",
                "No shipwrecks hold calcite stones and fog scatters light"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — ย่อหน้า 1 ระบุ 2 เหตุผลหลักของฝ่ายตั้งข้อสงสัย คือยังไม่พบแร่แคลไซต์ในซากเรือไวกิงที่ยืนยันได้ และหมอกทะเลเหนืออาจทำให้แสงกระเจิงจนอ่านโพลาไรซ์ไม่ได้"
            },
            {
              "q": "What did the sky-polarimetry experiments in Greenland and Hungary reveal?",
              "choices": [
                "Polarized skylight vanishes whenever any cloud deck forms",
                "Polarization persists in twilight and thin clouds, not thick stratus",
                "Human eyes detect polarized rings better without crystals",
                "Calcite crystals work best underneath solid storm clouds"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — ย่อหน้า 2 พบว่าใต้เมฆทึบสนิทความแม่นยำต่ำกว่าขีดสายตา แต่ช่วงพลบค่ำและเมฆบางส่วนแถบโพลาไรซ์ยังชัดเจนจนใช้เทียบทิศได้"
            },
            {
              "q": "In paragraph 2, the word \"coherent\" is closest in meaning to",
              "choices": [
                "organized and consistent",
                "dangerously bright",
                "briefly invisible",
                "artificially colored"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — ในบริบทฟิสิกส์เชิงแสง coherent หมายถึง มีระเบียบ สม่ำเสมอ และจับรูปแบบทิศทางได้ชัดเจน"
            },
            {
              "q": "According to paragraph 3, why could a sunstone NOT act as a standalone magnetic compass?",
              "choices": [
                "It turns cloudy after exposure to Atlantic salt spray",
                "It tracks geomagnetic poles instead of solar angles",
                "It functions only at noon under clear summer skies",
                "Its solar cue still needs cross-checking with shadow disks"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — ย่อหน้า 3 อธิบายว่าผลึกช่วยประเมินมุมทิศและความสูงของดวงอาทิตย์ที่ซ่อนอยู่เท่านั้น ยังต้องนำไปเทียบกับจานเงาอาทิตย์หรือแนวแสงตามฤดูกาลอีกขั้น"
            },
            {
              "q": "Which best describes the author's overall view of the sunstone's role?",
              "choices": [
                "It was purely symbolic jewelry worn by Norse captains",
                "It replaced all traditional dead-reckoning methods by 900 CE",
                "It served as a complementary calibration aid rather than an all-weather substitute",
                "It was abandoned because Hungarian skies differed from Atlantic weather"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — ผู้เขียนสรุปในตอนท้ายว่า sunstone น่าจะทำหน้าที่เป็นตัวช่วยปรับเทียบช่วงพลบค่ำเสริมจากวิธีดั้งเดิม ไม่ใช่เข็มทิศวิเศษที่ใช้ได้ทุกสภาพอากาศ"
            }
          ]
        }
      }
    },
    "listening": {
      "stage1": {
        "responses": [
          {
            "q": "Choose the best response.",
            "prompt": "Excuse me, does my basic student ID let me reserve a lane in the Olympic lap pool?",
            "speaker": "m",
            "accent": "us",
            "choices": [
              "No, pool lanes require the Extended Pass, which activates online.",
              "Yes, the outdoor track closes at nine o'clock on rainy Saturdays.",
              "No, you can leave your wet goggles inside any overnight locker.",
              "I swam twenty laps before my morning hydrology lecture."
            ],
            "ans": 0,
            "why": "ข้อ A ถูกต้อง — ตอบตรงคำถาม Yes/No พร้อมอธิบายเงื่อนไขว่าต้องเปิดใช้ Extended Pass ออนไลน์ก่อนจองเลนสระว่ายน้ำ"
          },
          {
            "q": "Choose the best response.",
            "prompt": "Where should I store my backpack before entering the Rare Archives Reading Room?",
            "speaker": "f",
            "accent": "uk",
            "choices": [
              "Rare manuscripts stay in acid-free boxes on the basement shelf.",
              "Yes, ink pens are allowed as long as you keep the cap closed.",
              "Reading room appointments usually last about two hours.",
              "Use one of the free lockers right outside the glass doors."
            ],
            "ans": 3,
            "why": "ข้อ D ถูกต้อง — ตอบคำถาม 'Where' โดยชี้จุดเก็บกระเป๋าที่ล็อกเกอร์หน้าประตูกระจกอย่างชัดเจน"
          },
          {
            "q": "Choose the best response.",
            "prompt": "Did the hydrology professor reschedule our aquifer field trip because of today's storm?",
            "speaker": "m",
            "accent": "ca",
            "choices": [
              "The rainfall gauge measured thirty millimeters overnight.",
              "Yes, she moved it to next Wednesday so the banks can dry.",
              "Sure, I can lend you my waterproof boots for Saturday.",
              "Aquifers store groundwater deep inside fractured limestone."
            ],
            "ans": 1,
            "why": "ข้อ B ถูกต้อง — ตอบตรงคำถามพร้อมแจ้งกำหนดวันใหม่ (วันพุธหน้า) และเหตุผลด้านความปลอดภัยริมตลิ่ง"
          },
          {
            "q": "Choose the best response.",
            "prompt": "Could you help me pull the 1912 groundwater maps before the afternoon vault retrieval closes?",
            "speaker": "f",
            "accent": "us",
            "choices": [
              "I prefer reading digital novels rather than printed surveys.",
              "The recreation center closes early during winter break.",
              "Sure—let's submit the call slip before the two o'clock pull.",
              "Actually, the library café just ran out of herbal tea."
            ],
            "ans": 2,
            "why": "ข้อ C ถูกต้อง — ตอบรับคำขอความช่วยเหลือได้อย่างเป็นธรรมชาติและสอดคล้องกับรอบเบิกเอกสารเวลาบ่ายสองโมง"
          }
        ],
        "conversation": {
          "title": "Upgrading a Campus Recreation Pass for Climbing & Swim Clinics",
          "lines": [
            {
              "role": "Student",
              "acc": "us",
              "sex": "f",
              "text": "Hi, I tried booking a beginner belay lesson on the Rec app, and it blocked my checkout."
            },
            {
              "role": "Staff",
              "acc": "ca",
              "sex": "m",
              "text": "Let me check your account. Oh, you've only got the baseline gym and track access active right now."
            },
            {
              "role": "Student",
              "acc": "us",
              "sex": "f",
              "text": "Wait—if I pay the thirty-five-dollar upgrade today, does that automatically register me for Thursday's climbing clinic?"
            },
            {
              "role": "Staff",
              "acc": "ca",
              "sex": "m",
              "text": "Not automatically. Once the pass clears, you still have to claim a spot in the clinic roster and upload the signed safety waiver."
            },
            {
              "role": "Student",
              "acc": "us",
              "sex": "f",
              "text": "Got it. Does the pass also cover rental climbing shoes, or is that separate?"
            },
            {
              "role": "Staff",
              "acc": "ca",
              "sex": "m",
              "text": "Harness and chalk bag are free with the pass, and shoes are three dollars per session—unless you sign up for the four-week clinic series, which waives shoe fees."
            },
            {
              "role": "Student",
              "acc": "us",
              "sex": "f",
              "text": "Oh, nice! I'll upgrade on my phone right here and pick the four-week track."
            }
          ],
          "qs": [
            {
              "q": "Why was the student unable to book the belay lesson in the app?",
              "choices": [
                "Her account lacks the required Extended Pass upgrade",
                "The Thursday clinic already reached full capacity",
                "She forgot to upload her campus medical card",
                "The climbing wall is closed for routine safety work"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — เจ้าหน้าที่เช็กบัญชีแล้วพบว่าเธอยังมีเพียงสิทธิ์พื้นฐาน จึงยังขาด Extended Pass สำหรับจองหน้าผาจำลอง"
            },
            {
              "q": "What extra step must the student complete after upgrading her pass?",
              "choices": [
                "Schedule an in-person swim test with the aquatic director",
                "Wait five business days for a new plastic ID card",
                "Purchase her own harness and chalk bag at the bookstore",
                "Enroll in the clinic roster and upload a signed safety waiver"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — หลังชำระค่าอัปเกรดบัตรแล้ว ต้องกดลงทะเบียนเข้าคลาสและอัปโหลดใบสละสิทธิ์ความปลอดภัย (signed safety waiver) ด้วยตนเอง"
            },
            {
              "q": "How can the student avoid paying the $3 shoe rental fee each visit?",
              "choices": [
                "By bringing two guest vouchers on weekdays",
                "By registering for the four-week clinic series",
                "By arriving before 3:00 p.m. during off-peak hours",
                "By volunteering as a student equipment attendant"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — เจ้าหน้าที่แจ้งว่าหากสมัครคอร์สต่อเนื่อง 4 สัปดาห์ (four-week clinic series) จะได้รับการยกเว้นค่าเช่ารองเท้าปีนผา"
            }
          ]
        },
        "announcement": {
          "title": "Research Library · Rare Book Vault HVAC Maintenance Notice",
          "speaker": "f",
          "accent": "uk",
          "lines": [
            "Attention library visitors: this Friday, October 18, facilities engineers will service the humidity regulators inside our Rare Book Vault from 8:00 a.m. until 1:00 p.m.",
            "During that five-hour window, physical retrieval from the vault will be paused, although the fourth-floor Reading Room will remain open for previously paged boxes.",
            "If you need microfilm reels normally housed next door, temporary readers have been relocated to Seminar Room 202 on the second floor.",
            "Regular vault pulls will resume promptly at the 2:00 p.m. cycle."
          ],
          "qs": [
            {
              "q": "Why will vault retrievals be paused on Friday morning?",
              "choices": [
                "Staff are digitizing all nineteenth-century maps",
                "A guest symposium is occupying the fourth floor",
                "Engineers are servicing the humidity control system",
                "Water damage forced an emergency closure of the vault"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — วิศวกรอาคารเข้าซ่อมบำรุงเครื่องควบคุมความชื้น (humidity regulators) ภายในห้องเก็บหนังสือหายากตั้งแต่ 8:00–13:00 น."
            },
            {
              "q": "What can researchers still do on the fourth floor between 8:00 a.m. and 1:00 p.m.?",
              "choices": [
                "Consult materials that were already pulled before Friday",
                "Request new rare boxes at the desk for immediate delivery",
                "Use microfilm machines relocated from the second floor",
                "Tour the climate-controlled vault with facilities staff"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — ห้องอ่านชั้น 4 ยังเปิดตามปกติสำหรับผู้ที่เบิกกล่องเอกสารเตรียมไว้ล่วงหน้าแล้ว (previously paged boxes)"
            },
            {
              "q": "Where should visitors go to read microfilm on Friday morning?",
              "choices": [
                "The fourth-floor Rare Book Vault lobby",
                "The Campus Recreation study lounge",
                "The main basement circulation desk",
                "Seminar Room 202 on the second floor"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — เครื่องอ่านไมโครฟิล์มชั่วคราวย้ายไปตั้งที่ Seminar Room 202 บนชั้น 2"
            }
          ]
        },
        "talk": {
          "subject": "Hydrology",
          "title": "Karst Aquifers and Subterranean Conduits",
          "speaker": "m",
          "accent": "us",
          "lines": [
            "Most people picture an aquifer as a massive underground lake, yet hydrologists know that rock geometry governs everything about how groundwater moves.",
            "In sandy aquifers, water creeps slowly through microscopic spaces between grains, often traveling only a few meters per year.",
            "Karst aquifers, by contrast, form in soluble bedrock such as limestone and dolomite.",
            "As rainwater absorbs carbon dioxide from the atmosphere and soil, it becomes mildly acidic and gradually dissolves fractures in the carbonate rock.",
            "Over thousands of years, narrow cracks widen into open conduits and caves where water can surge kilometers in a single day.",
            "That speed creates a serious environmental vulnerability: unlike fine sand that traps bacteria and filters contaminants naturally, open karst channels shoot surface runoff straight into municipal springs with almost zero filtration.",
            "When overlying cave ceilings eventually weaken, sudden sinkholes can also open above rapidly draining conduits."
          ],
          "qs": [
            {
              "q": "What common misconception does the speaker address at the beginning of the talk?",
              "choices": [
                "That limestone dissolves faster than river sand",
                "That aquifers are typically open underground lakes",
                "That groundwater never reaches municipal wells",
                "That rainwater lacks dissolved carbon dioxide"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — ผู้บรรยายเปิดประเด็นว่าคนทั่วไปมักเข้าใจผิดว่าชั้นน้ำบาดาลคือทะเลสาบเปิดขนาดใหญ่ใต้ดิน ทั้งที่จริงโครงสร้างหินกำหนดการไหล"
            },
            {
              "q": "How do conduits form inside karst aquifers?",
              "choices": [
                "Fast rivers freeze and shatter solid granite riverbeds",
                "Deep farm pumps blast wide tunnels through dry clay",
                "Mildly acidic rain slowly widens cracks in soluble rock",
                "Soil bacteria consume quartz grains beneath deep caves"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — น้ำฝนที่ละลายก๊าซ CO2 จากอากาศและดินจะมีสภาพเป็นกรดอ่อน ๆ และกัดเซาะรอยแตกในหินปูนที่ละลายน้ำได้จนกว้างเป็นโพรง"
            },
            {
              "q": "Why are karst aquifers more easily polluted than sandy aquifers?",
              "choices": [
                "Open conduits move runoff rapidly without natural grain filtration",
                "Limestone releases toxic salts when exposed to oxygen",
                "Sinkholes prevent cities from monitoring spring water",
                "Water in sandy aquifers never mixes with rainfall"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — โพรงเปิดในหินปูนส่งน้ำผิวดินไหลพุ่งสู่ตาน้ำประปาอย่างรวดเร็วโดยแทบไม่ผ่านการกรองตามธรรมชาติเหมือนชั้นทรายละเอียด"
            },
            {
              "q": "What secondary hazard does the speaker associate with karst aquifers?",
              "choices": [
                "Permanent saltwater intrusion along mountain ridges",
                "Complete evaporation of deep cave streams in winter",
                "Rapid clogging of sandy filters by tree roots",
                "Sudden collapse of weakened ground forming sinkholes"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — ตอนท้ายระบุถึงอันตรายจากหลุมยุบ (sinkholes) เมื่อเพดานถ้ำด้านบนอ่อนแอลงเหนือโพรงน้ำที่ระบายเร็ว"
            }
          ]
        }
      },
      "stage2a": {
        "responses": [
          {
            "q": "Choose the best response.",
            "prompt": "Should I wear white cotton gloves while turning pages in that 1880 hydrology atlas?",
            "speaker": "f",
            "accent": "us",
            "choices": [
              "Yes, the atlas lists every river bridge built after 1920.",
              "You can check out the atlas for two weeks with your ID.",
              "Actually, clean dry hands are safer than gloves on old paper.",
              "Cotton gloves are sold at the Campus Recreation desk."
            ],
            "ans": 2,
            "why": "ข้อ C ถูกต้อง — ตามมาตรฐานหอจดหมายเหตุ มือที่ล้างสะอาดและแห้งปลอดภัยกว่าถุงมือผ้าฝ้ายเพราะถุงมือลดประสาทสัมผัสและเกี่ยวกระดาษเปราะขาดง่าย"
          },
          {
            "q": "Choose the best response.",
            "prompt": "Are we supposed to bring our own water-sampling bottles to the groundwater lab tomorrow?",
            "speaker": "m",
            "accent": "uk",
            "choices": [
              "No, the lab tech already sterilized glass vials for every team.",
              "Water tables usually rise slightly during late autumn.",
              "Yes, the hydrology quiz covers three permeability chapters.",
              "We met near the front entrance of the library yesterday."
            ],
            "ans": 0,
            "why": "ข้อ A ถูกต้อง — ตอบคำถาม Yes/No ได้ตรงประเด็นและแจ้งว่าเจ้าหน้าที่แล็บเตรียมขวดแก้วปลอดเชื้อไว้ให้ทุกกลุ่มแล้ว"
          },
          {
            "q": "Choose the best response.",
            "prompt": "Wait, how much does it cost to bring a non-student friend into the Campus Rec pool on Saturday?",
            "speaker": "f",
            "accent": "ca",
            "choices": [
              "The Olympic lap pool lanes are twenty-five meters long.",
              "He already finished his rare book archival orientation.",
              "Free guest vouchers expire at the end of spring break.",
              "Guest day passes cost twelve dollars at the front check-in desk."
            ],
            "ans": 3,
            "why": "ข้อ D ถูกต้อง — ตอบราคาบัตรรายวันสำหรับบุคคลภายนอก ($12) และจุดชำระเงินเช็กอินที่เคาน์เตอร์หน้าได้ตรงคำถาม"
          }
        ],
        "conversation": {
          "title": "Consulting 19th-Century Survey Maps in Rare Archives",
          "lines": [
            {
              "role": "Archivist",
              "acc": "uk",
              "sex": "f",
              "text": "Good afternoon. Are you picking up the 1894 Great Plains survey folio?"
            },
            {
              "role": "Student",
              "acc": "us",
              "sex": "m",
              "text": "Yes, I'm comparing historical spring locations for my senior hydrology thesis. Wow, these fold-out maps are huge."
            },
            {
              "role": "Archivist",
              "acc": "uk",
              "sex": "f",
              "text": "They are! Keep the map flat on this foam cradle and don't pull past the linen hinge. Have you set up your camera yet?"
            },
            {
              "role": "Student",
              "acc": "us",
              "sex": "m",
              "text": "I brought my phone, though I noticed a sign banning flash. Can I photograph two plates to trace in GIS later?"
            },
            {
              "role": "Archivist",
              "acc": "uk",
              "sex": "f",
              "text": "Non-flash photos for personal research are completely fine. Just fill in this blue reference slip with the map numbers before snapping."
            },
            {
              "role": "Student",
              "acc": "us",
              "sex": "m",
              "text": "Thanks—and if I need to examine the companion field notebooks tomorrow, should I submit another call slip before closing?"
            }
          ],
          "qs": [
            {
              "q": "Why is the student examining the 1894 survey maps?",
              "choices": [
                "To verify Viking coastal landmarks for a history class",
                "To compare historical spring locations for his hydrology thesis",
                "To repair torn linen hinges as a library volunteer",
                "To prepare an exhibition catalog for the Campus Rec Center"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — นักศึกษาบอกชัดเจนว่ากำลังเปรียบเทียบตำแหน่งตาน้ำในอดีตเพื่อใช้เขียนวิทยานิพนธ์ระดับปริญญาตรีด้านอุทกวิทยา"
            },
            {
              "q": "What condition must the student follow to photograph the map plates?",
              "choices": [
                "Use a tripod provided by the reading room",
                "Pay a per-image reproduction fee at the circulation desk",
                "Turn off the flash and record the map numbers on a blue slip",
                "Wait until the archivist flattens the fold-out with glass weights"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — เจ้าหน้าที่อนุญาตให้ถ่ายภาพโดยไม่ใช้แฟลชเพื่อการค้นคว้าส่วนตัว แต่ต้องกรอกหมายเลขแผนที่ลงในใบอ้างอิงสีฟ้าก่อน"
            },
            {
              "q": "What does the archivist caution the student about when handling the fold-out maps?",
              "choices": [
                "Avoid straining the linen hinge and keep the map on the foam cradle",
                "Never touch the ink legends even with clean hands",
                "Fold each plate tightly back into Box 14 after five minutes",
                "Keep laptops at least two meters away from the cradle"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — เจ้าหน้าที่เตือนให้วางแผนที่ราบบนแท่นโฟม (foam cradle) และอย่าดึงตึงเกินแนวบานพับผ้าลินิน (linen hinge)"
            }
          ]
        },
        "announcement": {
          "title": "Campus Recreation · Indoor Track Resurfacing & Studio Overflow",
          "speaker": "m",
          "accent": "us",
          "lines": [
            "Heads up, runners and Campus Rec Pass holders: starting Monday, November 4, our upper indoor running track will close for three days of rubber resurfacing.",
            "During this brief maintenance window, Cardio Studio B on the main floor will open as a drop-in overflow zone with twenty additional treadmills and rowing machines.",
            "Group spin classes normally scheduled in Studio B at 5:30 p.m. will shift one door over to Multipurpose Room C.",
            "The indoor track will reopen Thursday morning at 6:00 a.m. with fresh lane markings."
          ],
          "qs": [
            {
              "q": "How long will the upper indoor running track be closed?",
              "choices": [
                "One full semester",
                "Two weeks",
                "Only Monday morning",
                "Three days"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — ประกาศแจ้งว่าลู่วิ่งในร่มชั้นบนจะปิดปรับปรุงพื้นยาง 3 วัน (ตั้งแต่จันทร์ที่ 4 พฤศจิกายน และเปิดเช้าวันพฤหัสบดี)"
            },
            {
              "q": "What change affects the 5:30 p.m. group spin classes during resurfacing?",
              "choices": [
                "They are canceled until Thursday morning",
                "They are moving next door to Multipurpose Room C",
                "They require an extra $15 outdoor pass",
                "They will use rowing machines instead of bicycles"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — คลาสปั่นจักรยานตอน 17:30 น. ย้ายไปห้อง Multipurpose Room C ข้าง ๆ เพื่อเปิด Studio B เป็นโซนเครื่องวิ่งเสริม"
            }
          ]
        },
        "talk": {
          "subject": "Maritime Archaeology",
          "title": "Flexible Oak Hulls: The Engineering of Viking Knarr Ships",
          "speaker": "f",
          "accent": "ca",
          "lines": [
            "When people imagine Viking ships, they usually picture sleek, narrow longships built for swift coastal raids.",
            "Yet Norse expansion across the North Atlantic depended far more heavily on a wider, deeper cargo vessel called the knarr.",
            "Unlike Mediterranean shipwrights who fastened planks edge-to-edge onto a rigid internal skeleton, Norse builders used clinker construction, overlapping thin split-oak strakes and riveting them together with iron nails.",
            "Because oak logs were split radially with wedges along the natural wood grain rather than sawn crosswise, every plank retained continuous fibers and remarkable tensile strength.",
            "Even better, builders lashed the hull planks loosely to curved inner ribs with spruce roots instead of rigid pegs.",
            "That elasticity allowed a loaded knarr to twist and flex slightly with towering Atlantic swells rather than snapping under rigid stress.",
            "Together with a broad wool square sail and a deep keel, this flexible hull carried livestock, timber, and families reliably between Norway and Greenland."
          ],
          "qs": [
            {
              "q": "How did a knarr differ from a typical Viking longship?",
              "choices": [
                "It was constructed entirely from imported cedar rather than oak",
                "It relied exclusively on oars instead of carrying a sail",
                "It had a wider, deeper hull designed for hauling cargo across open ocean",
                "It used Mediterranean edge-to-edge rigid framing"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — ผู้บรรยายเปรียบเทียบว่าขณะที่เรือรบ longship เพรียวบาง เรือ knarr มีลำตัวกว้างและลึกกว่าเพื่อบรรทุกสินค้าข้ามมหาสมุทรเปิด"
            },
            {
              "q": "Why did Norse shipwrights split oak logs radially instead of sawing them across the grain?",
              "choices": [
                "To preserve continuous wood fibers for greater strength",
                "To reduce the total iron nails required on the keel",
                "To make the planks thicker than Mediterranean ribs",
                "To eliminate the need for spruce-root lashings"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — การผ่าซุงโอ๊กตามแนวเสี้ยนไม้ (radially along the natural wood grain) ช่วยรักษาเส้นใยไม้ให้ต่อเนื่อง เพิ่มความต้านทานแรงดึง"
            },
            {
              "q": "What advantage did lashing hull planks loosely with spruce roots provide at sea?",
              "choices": [
                "It kept seawater from leaking through iron rivet holes",
                "It enabled sailors to disassemble the ship on sandy beaches",
                "It doubled the top rowing speed in calm fjords",
                "It allowed the hull to flex with heavy waves without breaking"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — การผูกรัดด้วยรากสนแบบหลวมให้ความยืดหยุ่น (elasticity) ตัวเรือจึงบิดตัวตามคลื่นใหญ่ได้โดยไม่แตกหัก"
            },
            {
              "q": "Why does the speaker mention Mediterranean shipwrights in the talk?",
              "choices": [
                "To argue that Norse builders copied Roman harbor designs",
                "To contrast rigid frame-first assembly with flexible clinker planking",
                "To show that spruce trees grew poorly in southern Europe",
                "To prove that wool sails were invented in the Mediterranean"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — ยกตัวอย่างช่างต่อเรือเมดิเตอร์เรเนียนเพื่อชี้ความต่างระหว่างโครงสร้างแบบแข็งเกร็งกับเทคนิคซ้อนแผ่นไม้แบบยืดหยุ่นของชาวนอร์ส"
            }
          ]
        }
      },
      "stage2b": {
        "responses": [
          {
            "q": "Choose the best response.",
            "prompt": "Why did Piezometer 4 drop twice as fast as the shallow monitoring well two hundred meters east?",
            "speaker": "m",
            "accent": "us",
            "choices": [
              "Piezometers are usually painted yellow to stay visible in grass.",
              "It taps a sand lens linked to the pump, unlike the east well.",
              "Yes, we recorded the water temperature every Tuesday morning.",
              "The university library stores surveys inside climate vaults."
            ],
            "ans": 1,
            "why": "ข้อ B ถูกต้อง — อธิบายสาเหตุทางอุทกธรณีวิทยาที่ตอบคำถาม 'Why' ได้ครบถ้วน: บ่อ Piezometer 4 เจาะลงชั้นทรายที่เชื่อมถึงปั๊มน้ำ ขณะที่บ่อตะวันออกไม่เชื่อมถึง"
          },
          {
            "q": "Choose the best response.",
            "prompt": "Since the archive digitized this 1850 diary, can I reprint its illustrations freely in my commercial book?",
            "speaker": "f",
            "accent": "uk",
            "choices": [
              "The microfilm machine sits upstairs next to the printers.",
              "Diaries written in pencil fade slower than iron-gall letters.",
              "Reading room hallway lockers automatically reset at six.",
              "Not automatically—you still must file a permissions request."
            ],
            "ans": 3,
            "why": "ข้อ D ถูกต้อง — แยกแยะเรื่องการถือครองวัตถุกับลิขสิทธิ์ตีพิมพ์เชิงพาณิชย์ได้อย่างแม่นยำและแนะนำให้ยื่นแบบฟอร์มขออนุญาต"
          },
          {
            "q": "Choose the best response.",
            "prompt": "Wait—if I cancel my climbing-wall slot forty minutes before start time, will I lose a strike on my Rec pass?",
            "speaker": "m",
            "accent": "ca",
            "choices": [
              "Climbing harnesses are sanitized after every group workshop.",
              "The outdoor gear center opens on Thursday afternoons.",
              "Yes, canceling inside two hours counts as a late no-show strike.",
              "Forty minutes is usually enough to finish three boulder routes."
            ],
            "ans": 2,
            "why": "ข้อ C ถูกต้อง — ตอบคำถามนโยบายการยกเลิกกระชั้นชิด (ภายใน 2 ชั่วโมงนับเป็น no-show strike) ได้ตรงประเด็น"
          }
        ],
        "conversation": {
          "title": "Diagnosing Anomalous Piezometer Drawdown Readings",
          "lines": [
            {
              "role": "TA",
              "acc": "ca",
              "sex": "m",
              "text": "Maya, look at your contour plot from the West Valley observation wells—Well 7 lags two days behind Well 6 when the irrigation pump kicks on."
            },
            {
              "role": "Student",
              "acc": "us",
              "sex": "f",
              "text": "Right, I thought a transducer clogged, so I flushed the screen, but the curve stayed sluggish."
            },
            {
              "role": "TA",
              "acc": "ca",
              "sex": "m",
              "text": "Check the borehole log at twelve meters. See that silty clay lens? Well 7 sits beneath a leaky aquitard, so pressure changes diffuse slowly downward."
            },
            {
              "role": "Student",
              "acc": "us",
              "sex": "f",
              "text": "Oh! So the lag isn't a sensor artifact—it actually measures vertical hydraulic resistance across the confining bed."
            },
            {
              "role": "TA",
              "acc": "ca",
              "sex": "m",
              "text": "Exactly. Before you run the radial-flow model, switch from the confined Theis equation to a leaky-aquifer Hantush curve."
            },
            {
              "role": "Student",
              "acc": "us",
              "sex": "f",
              "text": "That makes way more sense—my early Theis fit kept overestimating storativity because it ignored leakage from above."
            },
            {
              "role": "TA",
              "acc": "ca",
              "sex": "m",
              "text": "Good catch. Flag that model shift in your methods section so Dr. Patel sees why you dropped the single-layer assumption."
            }
          ],
          "qs": [
            {
              "q": "What initially caused the student to flush Well 7's screen?",
              "choices": [
                "She suspected a clogged sensor explained the delayed drawdown response",
                "She noticed salty sediment clouding her laboratory samples",
                "The TA warned her that algae was blocking the pump intake",
                "Dr. Patel required weekly maintenance on every piezometer"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — นักศึกษาเล่าว่าตอนแรกสงสัยว่าตัวเซนเซอร์ (transducer) อุดตัน จึงล้างตะแกรงกรองของบ่อ"
            },
            {
              "q": "What actually accounts for the two-day lag in Well 7?",
              "choices": [
                "The irrigation pump operates only during evening off-peak hours",
                "Well 7 sits closer to a fast-flowing karst cavern",
                "The borehole depth was misrecorded in the 1990 survey",
                "A leaky silty-clay aquitard slows vertical pressure transmission"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — บันทึกชั้นดิน (borehole log) แสดงชั้นดินเหนียวปนทรายแป้งที่น้ำซึมผ่านช้า (leaky aquitard) อยู่เหนือบ่อ ทำให้ความดันลดลงช้ากว่าบ่ออื่น"
            },
            {
              "q": "Why does the TA recommend switching to the Hantush curve?",
              "choices": [
                "It skips the need to record depth measurements",
                "It automatically removes atmospheric pressure noise",
                "It accounts for vertical leakage across semi-confining layers",
                "It assumes all valley aquifers are completely impermeable"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — สมการ Theis สมมติว่าชั้นหินกักเก็บปิดสนิท แต่ Hantush curve คำนวณรวมการรั่วซึมในแนวดิ่งผ่านชั้นกึ่งกักเก็บ (semi-confining layer) ได้"
            }
          ]
        },
        "announcement": {
          "title": "University Rare Archives · Multispectral Imaging Symposium",
          "speaker": "f",
          "accent": "us",
          "lines": [
            "Next Thursday at 4:00 p.m., the Rare Archives Conservation Lab invites faculty and students to a live demonstration of multispectral imaging on medieval palimpsests.",
            "Because parchment was costly, medieval scribes occasionally scraped off older treatises and wrote new texts on top, leaving faint chemical traces of the erased ink.",
            "By illuminating pages across narrow ultraviolet and infrared wavelengths, our new camera system recovers erased geometric diagrams without touching the fragile vellum.",
            "Seating in Vault Annex 4B is limited to twenty-eight guests; reserve a pass via the library calendar by Tuesday noon."
          ],
          "qs": [
            {
              "q": "What makes a manuscript a \"palimpsest\" as described in the announcement?",
              "choices": [
                "It has an outer cover bound in carved oak boards",
                "Its original ink was scraped away so the parchment could be reused",
                "It was written exclusively in bright red mineral pigments",
                "Its pages were damaged by seawater on a medieval voyage"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — ประกาศอธิบายว่าเนื่องจากกระดาษหนังมีราคาแพง อาลักษณ์จึงขูดหมึกเดิมออกแล้วเขียนทับลงไปใหม่บนแผ่นเดิม ทำให้เกิดร่องรอยเคมีซ้อนอยู่"
            },
            {
              "q": "What key benefit of multispectral imaging is highlighted?",
              "choices": [
                "It reveals erased content non-invasively using specific light wavelengths",
                "It removes iron-gall acid permanently from the paper fibers",
                "It binds loose parchment sheets without glue or thread",
                "It prints 3D replicas of medieval book clasps for classroom use"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — ระบบถ่ายภาพหลายช่วงคลื่น (UV และอินฟราเรด) กู้คืนแผนภาพเรขาคณิตที่ถูกลบได้โดยไม่ต้องสัมผัสแผ่นหนังที่บอบบาง"
            }
          ]
        },
        "talk": {
          "subject": "Geophysics & Navigation",
          "title": "Geomagnetic Drift and High-Latitude Celestial Recalibration",
          "speaker": "m",
          "accent": "uk",
          "lines": [
            "Whenever historians evaluate pre-compass maritime navigation, they must keep a crucial geophysical wrinkle in mind: Earth's magnetic field never sits still.",
            "Magnetic declination—the angle between true geographic north and compass north—shifts continuously as molten iron churns inside Earth's outer core, and those swings grow steepest at high latitudes near Greenland.",
            "Interestingly, medieval Norse mariners sailed before magnetic compasses reached northern Europe around 1200 CE, sparing them early declination confusion yet posing a different calibration puzzle.",
            "During long midsummer days above sixty degrees north, stars remain washed out in endless twilight, while low Arctic fog routinely hides the sun's disc.",
            "In such conditions, relying purely on dead reckoning—estimating speed and rudder drift by eye—accumulates large latitudinal errors within forty-eight hours whenever cross-currents shift.",
            "Combining a polarized calcite crystal to constrain the solar azimuth with a seasonal gnomon shadow dial allowed captains to reset their latitude track during brief twilight breaks.",
            "Even a single clear bearing every two days cut cumulative drift dramatically, keeping heavy cargo hulls aligned with narrow Icelandic fjords.",
            "This interplay between sky physics and wooden instruments explains how sustained transatlantic voyages remained feasible centuries before modern sextants."
          ],
          "qs": [
            {
              "q": "Why does magnetic declination fluctuate most dramatically near Greenland?",
              "choices": [
                "Thick glacial ice reflects solar wind away from the Atlantic",
                "Iron rivets on wooden ships deflect nearby compass needles",
                "High latitudes lie close to shifting poles driven by outer-core iron flow",
                "Icelandic basalt cliffs absorb atmospheric polarization"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — มุมเบี่ยงแม่เหล็กเกิดจากการไหลเวียนของเหล็กหลอมเหลวในแกนโลกชั้นนอก และความแปรปรวนนี้ชันที่สุดในละติจูดสูงใกล้กรีนแลนด์"
            },
            {
              "q": "What navigation problem occurred during northern midsummer voyages even without compasses?",
              "choices": [
                "Oak planks dried out and shrank under continuous sunlight",
                "Seabirds migrated south before June, leaving no coastal clues",
                "Solar noon lasted less than five minutes at sixty degrees north",
                "Bright midnight twilight hid stars while coastal fog obscured the sun"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — ช่วงกลางฤดูร้อนเหนือ 60 องศาเหนือ ท้องฟ้าสว่างพลบค่ำตลอดคืนจนมองไม่เห็นดาว ส่วนหมอกอาร์กติกก็บดบังดวงอาทิตย์"
            },
            {
              "q": "Why did dead reckoning alone become unreliable after roughly two days at sea?",
              "choices": [
                "Wooden bearing dials warped in humid cabins",
                "Unseen ocean cross-currents compounded small speed and heading errors",
                "Calcite crystals lost polarization sensitivity overnight",
                "Sailors forgot seasonal daylight tables during storms"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — เมื่อกระแสน้ำขวาง (cross-currents) เปลี่ยนทิศ การกะระยะและความเร็วด้วยสายตาอย่างเดียวจะสะสมความคลาดเคลื่อนของละติจูดสูงภายใน 48 ชั่วโมง"
            },
            {
              "q": "What conclusion does the speaker draw about combined Norse techniques?",
              "choices": [
                "Occasional celestial resets kept ships aligned well enough for reliable open-ocean routes",
                "Norse sailors invented magnetic compasses long before 1200 CE",
                "Dead reckoning worked better than gnomon dials in clear winter skies",
                "Voyages between Norway and Greenland succeeded purely by luck"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — สรุปท้ายเลกเชอร์ว่าการปรับเทียบตำแหน่งด้วยแสงท้องฟ้าแม้เพียงสองวันครั้งช่วยลดการลอยหลงทิศจนเดินเรือข้ามแอตแลนติกได้อย่างสม่ำเสมอ"
            }
          ]
        }
      }
    },
    "writing": {
      "build": [
        {
          "cue": "A classmate asks when the Rare Archives Reading Room opens on Fridays.",
          "prefix": "Do you know ",
          "chunks": [
            "reading room",
            "when",
            "on Fridays",
            "the rare",
            "opens",
            "archives"
          ],
          "ans": "Do you know when the rare archives reading room opens on Fridays?",
          "alts": [],
          "suffix": "?",
          "why": "คำถามซ้อน (embedded question) หลัง Do you know ใช้ลำดับคำแบบประโยคบอกเล่า: when + ประธาน (the rare archives reading room) + กริยา (opens)"
        },
        {
          "cue": "Explain how rainwater reaches deep limestone aquifers.",
          "prefix": "",
          "chunks": [
            "dissolves",
            "limestone",
            "mildly",
            "through",
            "rainwater",
            "fractures",
            "acidic"
          ],
          "ans": "Mildly acidic rainwater dissolves through limestone fractures.",
          "alts": [],
          "suffix": ".",
          "why": "เรียงนามวลีประธาน (Mildly acidic rainwater) + กริยา (dissolves) + วลีบุพบท (through limestone fractures)"
        },
        {
          "cue": "State why Campus Rec prohibits overnight storage in day cubbies.",
          "prefix": "Staff empty ",
          "chunks": [
            "to save",
            "every night",
            "for morning visitors",
            "daytime cubbies",
            "space"
          ],
          "ans": "Staff empty daytime cubbies every night to save space for morning visitors.",
          "alts": [],
          "suffix": ".",
          "why": "โครงสร้างบอกวัตถุประสงค์: กริยา + กรรม + เวลา (empty daytime cubbies every night) + to save space for morning visitors"
        },
        {
          "cue": "Report why the hydrologist questioned the piezometer data.",
          "prefix": "She noticed ",
          "chunks": [
            "confined clay",
            "that",
            "lagged behind",
            "beneath",
            "the well"
          ],
          "ans": "She noticed that the well beneath confined clay lagged behind.",
          "alts": [],
          "suffix": ".",
          "why": "อนุประโยคกรรมหลัง noticed เริ่มด้วย that + ประธานขยายด้วยบุพบทวลี (the well beneath confined clay) + กริยา (lagged behind)"
        },
        {
          "cue": "Ask the recreation desk whether climbing shoes are included in the clinic fee.",
          "prefix": "Could you tell me ",
          "chunks": [
            "climbing shoes",
            "included",
            "whether",
            "are",
            "in",
            "the clinic fee"
          ],
          "ans": "Could you tell me whether climbing shoes are included in the clinic fee?",
          "alts": [],
          "suffix": "?",
          "why": "คำถาม Yes/No แบบสุภาพใช้ whether + ประธาน (climbing shoes) + กริยาช่วยและกริยา (are included) + วลี (in the clinic fee)"
        },
        {
          "cue": "Describe how Viking navigators detected hidden sunlight through clouds.",
          "prefix": "",
          "chunks": [
            "rotated",
            "overcast skies",
            "calcite crystals",
            "sailors",
            "polarized",
            "beneath"
          ],
          "ans": "Sailors rotated calcite crystals beneath polarized overcast skies.",
          "alts": [
            "Beneath polarized overcast skies sailors rotated calcite crystals."
          ],
          "suffix": ".",
          "why": "ประโยคบอกเล่า: ประธาน (Sailors) + กริยา (rotated) + กรรม (calcite crystals) + สถานที่ (beneath polarized overcast skies)"
        },
        {
          "cue": "Explain why medieval manuscripts require strict humidity control.",
          "prefix": "Sudden moisture shifts ",
          "chunks": [
            "to",
            "and crack",
            "parchment",
            "fragile",
            "cause",
            "swell"
          ],
          "ans": "Sudden moisture shifts cause fragile parchment to swell and crack.",
          "alts": [],
          "suffix": ".",
          "why": "โครงสร้าง cause + กรรม (fragile parchment) + to + กริยาช่อง 1 (swell and crack)"
        },
        {
          "cue": "Tell a research partner why the vault box was delayed.",
          "prefix": "",
          "chunks": [
            "for",
            "the request",
            "too late",
            "was submitted",
            "the morning",
            "pull"
          ],
          "ans": "The request was submitted too late for the morning pull.",
          "alts": [],
          "suffix": ".",
          "why": "รูป Passive Voice (was submitted) + ส่วนขยาย too late for + นามวลี (the morning pull)"
        },
        {
          "cue": "Emphasize how rarely fossil water in the Ogallala Aquifer refills.",
          "prefix": "Never ",
          "chunks": [
            "quickly",
            "can",
            "deep",
            "recharge",
            "such",
            "aquifers"
          ],
          "ans": "Never can such deep aquifers recharge quickly.",
          "alts": [],
          "suffix": ".",
          "why": "การกลับรูปคำกริยา (negative inversion) เมื่อขึ้นต้นด้วย Never: Never + กริยาช่วย (can) + ประธาน (such deep aquifers) + กริยาแท้ (recharge) + กริยาวิเศษณ์ (quickly)"
        },
        {
          "cue": "Summarize what multispectral cameras reveal on scraped medieval pages.",
          "prefix": "",
          "chunks": [
            "erased parchment",
            "reveal",
            "ultraviolet",
            "hidden diagrams",
            "lamps",
            "on"
          ],
          "ans": "Ultraviolet lamps reveal hidden diagrams on erased parchment.",
          "alts": [],
          "suffix": ".",
          "why": "โครงสร้างประโยคบอกเล่า: ประธาน (Ultraviolet lamps) + กริยา (reveal) + กรรมและสถานที่ (hidden diagrams on erased parchment)"
        }
      ],
      "email": {
        "title": "Requesting Extended Access to Rare Hydrological Survey Maps",
        "situation": "You are a senior hydrology student writing to Dr. Eleanor Vance, Head of Special Collections. Your capstone thesis compares 1890s aquifer spring maps with modern groundwater levels, and you just learned that Box 14 will leave campus next week for a six-month museum loan. Write an email to Dr. Vance.",
        "bullets": [
          "Explain why you need to consult Box 14 before it ships for the exhibit loan.",
          "Request permission to take non-flash reference photographs for GIS mapping.",
          "Propose two specific afternoon times this week for a monitored session."
        ],
        "model": "Dear Dr. Vance,\n\nI am a senior hydrology major completing my capstone thesis on historical High Plains spring depletion. I recently learned that Box 14 from the 1894 Hydrographic Survey will be transferred off-campus next week for an exhibit loan, and finishing my comparison requires verifying two fold-out plates inside that box.\n\nBecause the thesis submission deadline falls before the maps return, would it be possible to schedule one final consultation this week? Additionally, I would like to request permission to take non-flash phone photographs strictly for personal GIS coordinate tracing.\n\nI am available either Wednesday or Thursday between 1:30 p.m. and 4:00 p.m., and I will happily complete any required reference forms beforehand.\n\nSincerely,\nMaya Lin",
        "notes": "• โครงสร้างครบทั้ง 3 ประเด็น: ย่อหน้า 1 แจ้งเหตุผลเร่งด่วน (กล่องกำลังจะถูกยืมไปจัดแสดงและต้องใช้ข้อมูลทำวิทยานิพนธ์), ย่อหน้า 2 ขอสิทธิ์ถ่ายภาพแบบไม่เปิดแฟลชสำหรับงาน GIS, ย่อหน้า 3 เสนอช่วงเวลาบ่าย 2 วัน (พุธ/พฤหัสบดี 13:30–16:00 น.) ที่ตรงกับรอบเบิกเอกสารของห้องสมุด\n• ระดับภาษาสุภาพทางการ (would it be possible to..., strictly for personal GIS coordinate tracing) เหมาะกับการติดต่อหัวหน้าหอจดหมายเหตุ"
      },
      "discussion": {
        "topic": "Campus Recreation Funding: Universal Student Fee vs. Optional Tiered Passes",
        "profPrompt": "Next week our university finance committee will review how campus recreation facilities are funded. Currently, all students pay a small mandatory athletics fee for basic gym access, while an optional Extended Pass ($35) funds the climbing wall, pool, and clinics. Should the university fold all facilities into one higher mandatory fee, or keep optional add-on passes?",
        "posts": [
          {
            "name": "Daniel",
            "text": "I favor keeping the optional Extended Pass. Many commuters and graduate students never use the climbing wall or lap pool, so charging everyone more feels unfair. A tiered system keeps baseline gym costs low while letting frequent climbers and swimmers pay only for what they use."
          },
          {
            "name": "Sofia",
            "text": "Making the Extended Pass universal would actually boost campus wellness. Even a $35 barrier stops some students from trying swim clinics or group fitness during stressful midterms. If everyone already pays through one fee, students feel encouraged to explore healthier habits."
          }
        ],
        "model": "While Sofia makes a fair point that upfront fees can discourage students from trying new activities, I agree with Daniel that keeping an optional Extended Pass is the more equitable approach. On a campus with many working students and off-campus commuters, mandatory fees raise tuition bills for people whose schedules leave little time for specialized amenities like the climbing wall or lap pool.\n\nHowever, the university could address Sofia's concern without charging every student more by offering free trial weekends at the start of each semester and waiving the $35 pass fee for students receiving financial aid. For instance, letting every student try two climbing or swim clinics free in September would remove the hesitation to experiment while still protecting budget-conscious students from higher compulsory charges.",
        "notes": "• เคล็ดลับคะแนนเต็ม (Academic Discussion): ย่อหน้าแรกอ้างอิงชื่อเพื่อนร่วมชั้นทั้งสองคน (While Sofia makes a fair point..., I agree with Daniel...) พร้อมเหตุผลใหม่เรื่องนักศึกษาที่ทำงานและเดินทางไป-กลับ\n• ย่อหน้าที่สองเสนอทางออกเชิงปฏิบัติ (free trial weekends + fee waiver for financial aid) ช่วยเชื่อมข้อดีของทั้งสองฝ่าย ทำให้บทความมีน้ำหนักและคำศัพท์วิชาการชัดเจน (equitable, amenities, compulsory charges)"
      }
    },
    "speaking": {
      "repeat": [
        {
          "text": "Please store backpacks in hallway lockers first.",
          "accent": "us",
          "sex": "f"
        },
        {
          "text": "Basic student IDs exclude the pool and climbing wall.",
          "accent": "uk",
          "sex": "m"
        },
        {
          "text": "Limestone aquifers filter pollution poorly because water moves through wide conduits.",
          "accent": "ca",
          "sex": "f"
        },
        {
          "text": "Medieval navigators combined crystal polarimetry with wooden shadow dials during cloudy twilight voyages.",
          "accent": "us",
          "sex": "m"
        },
        {
          "text": "Although artificial recharge basins slow groundwater decline, they cannot quickly restore prehistoric water tables.",
          "accent": "uk",
          "sex": "f"
        }
      ],
      "interview": {
        "topic": "Campus Study Spaces, Facilities & Research Habits",
        "intro": "Hello! Today I'd like to ask you four connected questions about how you use university facilities, study environments, and archival or digital research tools. Let's begin.",
        "questions": [
          {
            "q": "Do you prefer studying in quiet archival spaces like a rare-book reading room, or in busier common areas? Why?",
            "model": "Honestly, I work much better in quiet, structured rooms like a silent reading room, especially when I'm writing papers or analyzing dense data. In busy campus cafés, constant chatter and espresso machines keep pulling my attention away every few minutes. When everyone around me is silently reading, it creates positive peer pressure that keeps me focused for two hours straight. Of course, for group projects I still use active lounges so we can brainstorm out loud, but for deep individual concentration, quiet libraries win every time.",
            "tips": "ตอบฟันธงให้ชัดในประโยคแรก (I work much better in...) แล้วให้เหตุผลเทียบ 2 สภาพแวดล้อม + ยกข้อยกเว้นสั้น ๆ (group projects) จะได้เนื้อหาครบพอดี 40–45 วินาที"
          },
          {
            "q": "How important are campus recreation facilities, such as pools or climbing gyms, for managing academic stress?",
            "model": "I think accessible recreation facilities are essential rather than just an extra luxury. During exam weeks, sitting in front of a screen all day makes it hard to sleep and think clearly. Having an indoor track or lap pool right on campus lets students burn off tension in forty-five minutes without wasting time commuting to an off-campus gym. Personally, taking a quick evening swim resets my energy far better than drinking another cup of coffee, and I usually return to my desk much sharper afterward.",
            "tips": "ใช้คำเชื่อมแสดงจุดยืนชัดเจน (essential rather than an extra luxury) พร้อมตัวอย่างส่วนตัวสั้น ๆ เรื่องการว่ายน้ำช่วยรีเซ็ตสมาธิ"
          },
          {
            "q": "Should university libraries replace rare physical books and maps with high-resolution digital scans, or preserve access to originals?",
            "model": "Digital scans are fantastic for everyday convenience because thousands of students can inspect a nineteenth-century map from home at midnight without damaging the paper. Still, I don't think scans should completely replace access to the originals. Researchers studying paper fibers, watermarks, or faded inks still need to examine physical artifacts directly under supervised conditions. The smartest policy is using digital surrogates for routine reading while keeping carefully monitored appointments available for specialized material research.",
            "tips": "โครงสร้างบาลานซ์สองมุมมอง (ข้อดีของไฟล์สแกนดิจิทัล + ข้อจำกัดสำหรับงานวิจัยเชิงวัตถุ) แล้วสรุปทางสายกลางที่สอดคล้องกับบทเรียนในชุดข้อสอบ"
          },
          {
            "q": "When a campus service requires advance booking or extra rules—like lab appointments or gym passes—how do you stay organized?",
            "model": "Whenever facilities require reservation windows or strict rules, I rely on calendar alerts combined with a weekly checklist every Sunday night. For example, if a lab slot or climbing clinic opens Monday morning, I set a reminder fifteen minutes ahead so I don't miss limited spots. I also double-check item restrictions, like bringing a pencil instead of a pen, the evening before. Taking five minutes to plan upfront prevents frustrating last-minute surprises when I arrive at the door.",
            "tips": "ตอบเป็นขั้นตอนปฏิบัติที่ชัดเจน (weekly checklist + calendar alerts + night-before check) พร้อมคำเชื่อมบอกลำดับเวลา (For example, I also, Taking five minutes...)"
          }
        ]
      }
    }
  },
  {
    "set": 4,
    "theme": "Bioluminescent Fungi & Forest Mycelium, Roman Hydraulic Concrete Chemistry, Internship Career Fair & Shuttle Alerts",
    "reading": {
      "stage1": {
        "cloze": {
          "title": "Why Some Woodland Mushrooms Glow in the Dark",
          "intro": "Along damp subtropical forest floors, certain decaying logs emit an eerie green glow visible long after sunset.",
          "segments": [
            "This biological ",
            {
              "pre": "la",
              "ans": "ntern",
              "hint": "n. ตะเกียง/แสงสว่าง"
            },
            " comes from saprotrophic ",
            {
              "pre": "fu",
              "ans": "ngi",
              "hint": "n. เห็ดรา (พหูพจน์)"
            },
            " whose cells convert a precursor ",
            {
              "pre": "mo",
              "ans": "lecule",
              "hint": "n. โมเลกุล"
            },
            " into light-emitting luciferin. By placing ",
            {
              "pre": "pl",
              "ans": "astic",
              "hint": "adj. พลาสติก"
            },
            " mushroom models illuminated with ",
            {
              "pre": "ma",
              "ans": "tching",
              "hint": "adj. ที่ตรงกัน/เข้ากัน"
            },
            " green LEDs among real logs, ",
            {
              "pre": "bi",
              "ans": "ologists",
              "hint": "n. นักชีววิทยา (พหูพจน์)"
            },
            " tested why glowing evolved. Nocturnal ",
            {
              "pre": "be",
              "ans": "etles",
              "hint": "n. ด้วง (พหูพจน์)"
            },
            ", flies, and wasps visited lit ",
            {
              "pre": "dec",
              "ans": "oys",
              "hint": "n. หุ่นล่อ (พหูพจน์)"
            },
            " far more often than unlit ",
            {
              "pre": "co",
              "ans": "ntrols",
              "hint": "n. กลุ่มควบคุม (พหูพจน์)"
            },
            ". As insects brush against gills, they ",
            {
              "pre": "ca",
              "ans": "rry",
              "hint": "v. พัดพา/นำไป"
            },
            " sticky spores to fresh deadwood across the shaded canopy."
          ],
          "why": "1) lantern (ตะเกียง) เป็นคำนามหลัง biological อ้างถึงแสงเรืองของเห็ด; 2) fungi (เห็ดราพหูพจน์) สอดคล้องกับ whose cells; 3) molecule (โมเลกุล) ต่อจาก precursor; 4) plastic (พลาสติก) ขยาย mushroom models; 5) matching (ที่สี/ความสว่างตรงกัน) ขยาย green LEDs; 6) biologists (นักชีววิทยาพหูพจน์) เป็นประธานของ tested; 7) beetles (ด้วง) จับคู่กับ flies, and wasps; 8) decoys (หุ่นจำลองล่อแมลง) เป็นกรรมของ visited; 9) controls (ชุดทดลองควบคุมที่ไม่ติดไฟ) คู่เทียบกับ lit decoys; 10) carry (พา/ขนส่ง) กริยาช่อง 1 ตามประธานพหูพจน์ they"
        },
        "daily": [
          {
            "kind": "Event Guide",
            "title": "Spring Internship Career Fair · Student Entry & Booth Map",
            "text": "Welcome to the Annual STEM & Humanities Internship Fair in Grand Hall A (12:00 p.m.–5:00 p.m.). Priority early admission from 12:00 p.m. to 1:00 p.m. is reserved for seniors and juniors who uploaded a digital resume via CareerConnect by Tuesday night; general doors open at 1:00 p.m. Color-coded aisle signs divide booths into Environmental Science (Green), Civil Engineering (Blue), and Policy & Media (Gold). Instead of paper handouts, most recruiters scan each student's badge QR code directly, though keeping five printed resumes for smaller startups is wise. Free professional headshots run upstairs in Balcony Room 2B until 4:15 p.m.",
            "qs": [
              {
                "q": "Who can enter Grand Hall A at 12:00 p.m.?",
                "choices": [
                  "First-year students carrying five printed resumes",
                  "Any graduate waiting at the Balcony Room 2B photo booth",
                  "Students arriving after general registration closes at 1:00 p.m.",
                  "Juniors and seniors who submitted a resume online by Tuesday"
                ],
                "ans": 3,
                "why": "ข้อ D ถูกต้อง — สิทธิ์เข้างานรอบแรกเวลา 12:00–13:00 น. สงวนไว้สำหรับนักศึกษาชั้นปี 3–4 (juniors and seniors) ที่อัปโหลดเรซูเม่ผ่านระบบ CareerConnect ภายในคืนวันอังคาร"
              },
              {
                "q": "Why does the guide suggest bringing five printed copies of a resume anyway?",
                "choices": [
                  "CareerConnect deletes uploaded files after 1:00 p.m.",
                  "Smaller startup booths may not use the QR badge scanner",
                  "A printed resume is required to take a free headshot",
                  "Civil Engineering booths ban electronic badge scans"
                ],
                "ans": 1,
                "why": "ข้อ B ถูกต้อง — แม้บริษัทส่วนใหญ่จะสแกน QR บนป้ายชื่อ แต่ไกด์แนะนำให้พกฉบับพิมพ์ไว้ 5 ชุดเผื่อบริษัทสตาร์ทอัพขนาดเล็กที่ไม่ได้ใช้ระบบสแกน"
              }
            ]
          },
          {
            "kind": "Transit Alert",
            "title": "Campus Transit · North Loop Shuttle Detour (Oct 21–24)",
            "text": "Effective Monday at 6:30 a.m. through Thursday evening, emergency water-main repairs will close North Loop Drive between Science Hall and Engineering Quad. North Loop Shuttles (Routes 2A and 2B) will bypass Engineering Quad completely and turn east onto Oak Avenue instead. Riders bound for the Materials Lab or Career Fair Pavilion should board at the temporary Oak Avenue Shelter outside Botany Greenhouse. Peak daytime headway remains twelve minutes, though commuters should budget an extra six minutes for detour traffic lights. The Night SafeRide van continues regular door-to-door pickups after 8:00 p.m.",
            "qs": [
              {
                "q": "Which bus stop is temporarily skipped by Routes 2A and 2B?",
                "choices": [
                  "Engineering Quad",
                  "Botany Greenhouse",
                  "Science Hall",
                  "Oak Avenue Shelter"
                ],
                "ans": 0,
                "why": "ข้อ A ถูกต้อง — ประกาศแจ้งว่ารถเวียนสาย 2A และ 2B จะวิ่งข้ามป้าย Engineering Quad (bypass Engineering Quad completely) ชั่วคราวระหว่างซ่อมท่อน้ำ"
              },
              {
                "q": "How does the detour affect riders headed to the Career Fair Pavilion?",
                "choices": [
                  "They must wait for the Night SafeRide van after 8:00 p.m.",
                  "Shuttle intervals will stretch from twelve minutes to thirty minutes",
                  "They should allow roughly six extra minutes and use the Oak Avenue stop",
                  "Route 2B will terminate early outside Science Hall"
                ],
                "ans": 2,
                "why": "ข้อ C ถูกต้อง — ผู้โดยสารต้องไปขึ้นที่จุดจอดชั่วคราว Oak Avenue Shelter และเผื่อเวลาเพิ่มราว 6 นาทีเนื่องจากสัญญาณไฟจราจรบนเส้นทางเบี่ยง"
              }
            ]
          }
        ],
        "academic": {
          "subject": "Forest Ecology",
          "title": "Mycorrhizal Networks and Subterranean Nutrient Trading",
          "paragraphs": [
            "Beneath the leaf litter of temperate forests lies a dense web of microscopic fungal threads called hyphae. Rather than functioning purely as decomposers, over eighty percent of land plants form symbiotic partnerships known as mycorrhizae with specialized soil fungi. Because fungal hyphae are far finer than plant root hairs, they penetrate tight mineral pores and mobilize phosphorus and nitrogen that trees struggle to extract alone.",
            "In return for scarce soil nutrients, host trees pump up to twenty percent of the sugars produced during canopy photosynthesis downward to their fungal partners. When hyphae link adjacent roots—even across different tree species—researchers sometimes detect trace carbon isotopes moving from sunlit mature trees toward shaded saplings growing in dim understories. Early media reports popularized these links as benevolent forest cooperatives that deliberately rescue struggling seedlings.",
            "More recent physiological studies urge caution against overly anthropomorphic metaphors. Isotope-tracing experiments show that carbon transfer rarely meets a sapling's full growth demand and often reflects source-sink concentration gradients or fungal self-interest. Fungi preferentially route phosphorus toward vigorous hosts capable of supplying abundant sugars, while hoarding nutrients when light-starved seedlings offer little carbon payback. Understanding mycorrhizal webs as dynamic biological markets rather than selfless charities yields clearer predictions of how forests withstand drought and selective logging."
          ],
          "qs": [
            {
              "q": "According to paragraph 1, why are fungal hyphae more effective than tree roots at gathering phosphorus?",
              "choices": [
                "They perform photosynthesis faster than green leaves",
                "They break down fallen bark only during winter droughts",
                "They eliminate nitrogen before it reaches tree trunks",
                "Fine threads reach tiny pores inaccessible to roots"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — ย่อหน้า 1 ระบุว่าเส้นใยรา (hyphae) มีขนาดเล็กกว่าขนรากพืชมาก จึงซอนไซเข้าสู่ช่องแร่ธาตุแคบ ๆ ในดินและดึงฟอสฟอรัสออกมาได้ดีกว่า"
            },
            {
              "q": "Why does the author mention \"trace carbon isotopes\" in paragraph 2?",
              "choices": [
                "To explain the experimental evidence showing carbon moving between linked trees",
                "To demonstrate that mature trees block sunlight from reaching saplings",
                "To prove that soil bacteria consume twenty percent of forest sugars",
                "To argue that different tree species cannot share the same fungal species"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — นักวิจัยตรวจพบไอโซโทปคาร์บอนปริมาณเล็กน้อยเคลื่อนจากต้นใหญ่กลางแดดไปสู่ต้นอ่อนในร่มเงา ซึ่งเป็นหลักฐานการเชื่อมโยงผ่านเส้นใยรา"
            },
            {
              "q": "In paragraph 3, the word \"anthropomorphic\" is closest in meaning to",
              "choices": [
                "mathematically impossible to measure underground",
                "scientifically proven through long-term logging",
                "attributing human motives to non-human organisms",
                "geographically limited to temperate pine forests"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — anthropomorphic หมายถึงการตีความสิ่งที่ไม่ใช่มนุษย์ด้วยอารมณ์หรือเจตนาแบบมนุษย์ (เช่น เรียกป่าว่าเป็นสหกรณ์ผู้ใจบุญที่จงใจช่วยเหลือต้นอ่อน)"
            },
            {
              "q": "According to paragraph 3, how do mycorrhizal fungi often behave when a shaded sapling supplies little sugar?",
              "choices": [
                "They double the amount of phosphorus routed to the struggling sapling",
                "They withhold nutrients and favor healthier hosts delivering more carbon",
                "They detach permanently from all mature canopy trees",
                "They stop absorbing soil nitrogen until autumn leaf fall"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — ย่อหน้า 3 ระบุว่าเชื้อราทำงานคล้ายตลาดชีวภาพ คือส่งฟอสฟอรัสให้ต้นไม้ที่แข็งแรงและจ่ายน้ำตาลตอบแทนได้มาก ส่วนต้นอ่อนที่ให้อาหารน้อยมักถูกกักเก็บสารอาหารไว้"
            },
            {
              "q": "What is the author's main conclusion in the passage?",
              "choices": [
                "Selective logging rarely alters soil fungal diversity",
                "Most temperate trees thrive without mycorrhizal fungi",
                "Saplings gain nearly all annual growth from fungal carbon",
                "Market-based models predict forest resilience more accurately"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — สรุปย่อหน้าสุดท้ายชี้ว่าการมองเครือข่ายเชื้อราเป็นตลาดแลกเปลี่ยนทรัพยากรเชิงพลวัตช่วยให้คาดการณ์การรับมือภัยแล้งและการตัดไม้ได้แม่นยำกว่านิทานเปรียบเทียบ"
            }
          ]
        }
      },
      "stage2a": {
        "cloze": {
          "title": "Volcanic Ash in Ancient Roman Harbor Concrete",
          "intro": "Two thousand years after Roman engineers poured concrete piers into Mediterranean harbors, many seawalls remain remarkably intact.",
          "segments": [
            "Unlike modern Portland cement, which often ",
            {
              "pre": "cra",
              "ans": "cks",
              "hint": "v. แตก/ร้าว"
            },
            " within decades of saltwater ",
            {
              "pre": "exp",
              "ans": "osure",
              "hint": "n. การสัมผัส/เผชิญ"
            },
            ", Roman marine concrete grew ",
            {
              "pre": "str",
              "ans": "onger",
              "hint": "adj. แข็งแรงขึ้น (ขั้นกว่า)"
            },
            " underwater. The secret lay in ",
            {
              "pre": "mi",
              "ans": "xing",
              "hint": "v. การผสม (gerund)"
            },
            " slaked lime with porous ",
            {
              "pre": "vol",
              "ans": "canic",
              "hint": "adj. เกี่ยวกับภูเขาไฟ"
            },
            " ash quarried near Mount Vesuvius, a ",
            {
              "pre": "ma",
              "ans": "terial",
              "hint": "n. วัสดุ"
            },
            " called pozzolana. When submerged in ",
            {
              "pre": "co",
              "ans": "astal",
              "hint": "adj. ชายฝั่งทะเล"
            },
            " waves, seawater reacted chemically with ",
            {
              "pre": "th",
              "ans": "ese",
              "hint": "pron./det. เหล่านี้"
            },
            " volcanic grains to bind loose ",
            {
              "pre": "ag",
              "ans": "gregate",
              "hint": "n. หินกรวดผสมคอนกรีต"
            },
            " into a durable, interlocking mineral ",
            {
              "pre": "ma",
              "ans": "trix",
              "hint": "n. โครงข่ายเนื้อประสาน"
            },
            "."
          ],
          "why": "1) cracks (แตกร้าว) กริยาเอกพจน์ตาม Portland cement; 2) exposure (การสัมผัส) หลัง saltwater; 3) stronger (แข็งแรงยิ่งขึ้น) หลัง linking verb grew; 4) mixing (การผสม) เป็น gerund หลังบุพบท in; 5) volcanic (เกี่ยวกับภูเขาไฟ) ขยาย ash; 6) material (วัสดุ) ขยายความว่าเรียกว่า pozzolana; 7) coastal (ชายฝั่ง) ขยาย waves; 8) these (เหล่านี้) ชี้ถึง volcanic grains พหูพจน์; 9) aggregate (หิน/กรวดผสมคอนกรีต) เป็นกรรมของ bind; 10) matrix (เนื้อประสาน/โครงสร้างแร่) หลัง mineral"
        },
        "daily": [
          {
            "kind": "Campus Notice",
            "title": "Career Center · Pre-Fair Resume Clinic & Mock Interviews",
            "text": "Need last-minute polish before Thursday's Internship Career Fair? The Career Center is hosting 20-minute drop-in resume critiques and elevator-pitch drills all day Wednesday from 9:00 a.m. to 7:00 p.m. No advance appointment is needed during daytime hours, though students seeking virtual feedback between 5:00 p.m. and 7:00 p.m. must join the online queue via CareerConnect starting at 4:30 p.m. Bring a printed draft or tablet copy along with two target internship descriptions so advisors can tailor your bullet points.",
            "qs": [
              {
                "q": "How does the evening session (5:00 p.m.–7:00 p.m.) differ from earlier clinic hours?",
                "choices": [
                  "Students join an online queue at 4:30 p.m. for video review",
                  "Evening clinics last forty minutes instead of twenty minutes",
                  "Only graduate students may book slots after five o'clock",
                  "Printed resumes are prohibited during evening reviews"
                ],
                "ans": 0,
                "why": "ข้อ A ถูกต้อง — ช่วงกลางวันเดินเข้าไปรับคำปรึกษาได้โดยไม่ต้องนัด แต่รอบค่ำ 17:00–19:00 น. เป็นแบบออนไลน์และต้องเข้าคิวบน CareerConnect ตั้งแต่ 16:30 น."
              },
              {
                "q": "Why should students bring two target internship descriptions to the clinic?",
                "choices": [
                  "To prove they already received an interview invite",
                  "To register early for priority entry at Grand Hall A",
                  "So advisors can tailor resume bullets to target roles",
                  "To check whether their shuttle bus route is detoured"
                ],
                "ans": 2,
                "why": "ข้อ C ถูกต้อง — ประกาศระบุให้นำคำอธิบายงานฝึกงานเป้าหมายมาด้วยเพื่อให้อาจารย์แนะแนวช่วยปรับจุดเด่นในเรซูเม่ให้ตรงกับตำแหน่ง (tailor your bullet points)"
              },
              {
                "q": "When can a student join the online queue for Wednesday evening?",
                "choices": [
                  "At 9:00 a.m. sharp",
                  "Beginning at 4:30 p.m.",
                  "Only after Thursday's fair ends",
                  "Anytime on Tuesday night"
                ],
                "ans": 1,
                "why": "ข้อ B ถูกต้อง — ระบบคิวออนไลน์สำหรับรอบค่ำเปิดรับลงชื่อตั้งแต่เวลา 16:30 น. (starting at 4:30 p.m.)"
              }
            ]
          }
        ],
        "academic": {
          "subject": "Mycology",
          "title": "Wood-Decay Fungi and Forest Carbon Recycling",
          "paragraphs": [
            "Every autumn, fallen trunks and branches lock massive amounts of carbon inside tough wooden cell walls built from cellulose and lignin. While bacteria easily break down soft leaf tissue, most microbes lack the specialized enzymes required to dismantle lignin's rigid, irregular ring structures. Without wood-decay fungi, temperate woodlands would rapidly bury themselves under undecayed timber.",
            "Mycologists group major wood-rotting fungi into two broad strategies: brown rot and white rot. Brown-rot species secrete small reactive molecules that slice through pale cellulose fibers, leaving behind crumbly, rust-colored blocks of modified lignin that persist in forest soil for centuries as sponge-like humus. By contrast, white-rot fungi—including several bioluminescent species—produce oxidative enzymes capable of breaking apart both dark lignin and pale cellulose simultaneously, turning deadwood soft and stringy.",
            "Interestingly, chemical studies show that the exact oxidative pathway white-rot fungi use to strip lignin overlaps with the molecular cycle behind fungal glow. As glowing mycelia colonize moist logs, their enzymatic breakdown releases locked nitrogen and minerals back into the topsoil, preparing fertile seedbeds for future generations of seedlings."
          ],
          "qs": [
            {
              "q": "Why can most forest bacteria NOT decompose fallen tree trunks quickly?",
              "choices": [
                "Fallen trunks lack enough moisture for bacterial division",
                "Tree bark blocks sunlight required by soil bacteria",
                "Bacteria feed exclusively on living mycorrhizal roots",
                "They lack the enzymes needed to break down tough lignin structures"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — ย่อหน้า 1 ระบุว่าจุลินทรีย์ส่วนใหญ่ขาดเอนไซม์เฉพาะทางที่จะย่อยโครงสร้างวงแหวนอันแข็งแกร่งของลิกนิน (lignin)"
            },
            {
              "q": "How does white-rot decay visibly differ from brown-rot decay?",
              "choices": [
                "White-rot fungi digest both lignin and cellulose, leaving soft stringy wood",
                "White-rot fungi create crumbly rust-colored blocks that last centuries",
                "Brown-rot fungi only grow on living leaves before autumn",
                "Brown-rot species emit bright green light along bark edges"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — ย่อหน้า 2 อธิบายว่า white-rot ย่อยได้ทั้งลิกนินสีเข้มและเซลลูโลสสีอ่อน ทำให้ไม้ผุเปื่อยนุ่มเป็นเส้น ต่างจาก brown-rot ที่เหลือลิกนินเป็นก้อนสีสนิมร่วน ๆ"
            },
            {
              "q": "In paragraph 2, the word \"persist\" is closest in meaning to",
              "choices": [
                "evaporate during rainfall",
                "remain intact over time",
                "travel upstream in rivers",
                "glow brightly at midnight"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — persist in forest soil for centuries หมายถึง คงอยู่ต่อเนื่องในดินป่าได้นานหลายศตวรรษ (remain intact over time)"
            },
            {
              "q": "Why does the passage link certain bioluminescent fungi with white-rot chemistry?",
              "choices": [
                "Bioluminescent light kills competing brown-rot microbes",
                "Lignin absorbs green glow to speed up tree seedling roots",
                "Lignin breakdown shares steps with the glowing reaction",
                "Glowing mushrooms avoid colonizing moist fallen timber"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — ย่อหน้า 3 ระบุว่าปฏิกิริยาออกซิเดชันที่รา white-rot ใช้สลายลิกนินมีกลไกคาบเกี่ยวกับวงจรโมเลกุลที่ทำให้เห็ดเรืองแสง"
            },
            {
              "q": "What ecological benefit results from mycelia breaking down fallen logs?",
              "choices": [
                "Forest fires burn more slowly across damp humus",
                "Adult trees stop needing underground mycorrhizal fungi",
                "Insects stop laying eggs inside shaded timber",
                "Trapped minerals and nitrogen return to topsoil for young plants"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — ประโยคสุดท้ายอธิบายว่าการย่อยไม้ผุปลดปล่อยไนโตรเจนและแร่ธาตุที่ถูกกักไว้กลับสู่หน้าดิน สร้างแหล่งอาหารให้ต้นกล้ารุ่นถัดไป"
            }
          ]
        }
      },
      "stage2b": {
        "cloze": {
          "title": "Hot-Mixing Quicklime and Self-Healing Roman Mortar",
          "intro": "For decades, researchers assumed white millimeter-scale calcium flecks inside ancient Roman walls simply resulted from sloppy mixing.",
          "segments": [
            "High-resolution spectroscopy recently overturned ",
            {
              "pre": "th",
              "ans": "at",
              "hint": "det. นั้น (ชี้เฉพาะ assumption ก่อนหน้า)"
            },
            " long-standing assumption. When Roman ",
            {
              "pre": "ma",
              "ans": "sons",
              "hint": "n. ช่างก่ออิฐ/ก่อปูน (พหูพจน์)"
            },
            " blended dry quicklime directly ",
            {
              "pre": "wi",
              "ans": "th",
              "hint": "prep. กับ"
            },
            " volcanic ash before adding ",
            {
              "pre": "wa",
              "ans": "ter",
              "hint": "n. น้ำ"
            },
            ", the exothermic reaction generated ",
            {
              "pre": "hi",
              "ans": "gh",
              "hint": "adj. สูง"
            },
            " internal temperatures—a ",
            {
              "pre": "tech",
              "ans": "nique",
              "hint": "n. เทคนิค/วิธีการ"
            },
            " termed hot mixing. Rapid heating trapped ",
            {
              "pre": "re",
              "ans": "active",
              "hint": "adj. ที่ไวต่อปฏิกิริยา"
            },
            " calcium-rich clasts throughout the ",
            {
              "pre": "ha",
              "ans": "rdened",
              "hint": "adj. ที่แข็งตัวแล้ว"
            },
            " mortar. Whenever rainwater later ",
            {
              "pre": "se",
              "ans": "eped",
              "hint": "v. ซึมผ่าน (อดีต)"
            },
            " into microscopic hairline cracks, dissolved lime ",
            {
              "pre": "re",
              "ans": "filled",
              "hint": "v. เติมกลับเข้าไปใหม่ (อดีต)"
            },
            " the fractures with fresh calcite crystals."
          ],
          "why": "1) that ชี้กลับไปยังสมมติฐานที่กล่าวไว้ในประโยคแรก; 2) masons (ช่างก่อปูนพหูพจน์) เป็นประธานของ blended; 3) with (กับ) ใช้หลัง blended ... directly; 4) water (น้ำ) ปฏิกิริยาคายความร้อนเมื่อเติมน้ำลงในปูนขาว; 5) high (สูง) ขยาย internal temperatures; 6) technique (เทคนิค/วิธีการ) อธิบายคำว่า hot mixing; 7) reactive (พร้อมทำปฏิกิริยา) ขยาย calcium-rich clasts; 8) hardened (ที่แข็งตัวแล้ว) ขยาย mortar; 9) seeped (ซึมเข้าไป) กริยาช่อง 2 คู่กับ refilled; 10) refilled (อุดเติมใหม่) อธิบายกลไกการซ่อมตัวเองของรอยร้าว"
        },
        "daily": [
          {
            "kind": "Operations Memo",
            "title": "Career Fair Logistics · Express Bus Staging & Paratransit Access",
            "text": "Due to forty visiting corporate recruiters arriving in Grand Hall A on Thursday, East Circle Drive will close to private vehicles from 7:00 a.m. until 6:30 p.m. Off-campus commuters using the Park-and-Ride Lot must board the dedicated Fair Express Coach every eight minutes rather than standard Route 2A, which remains detoured around the Engineering water-main trench. ADA-accessible paratransit vans will pick up passengers at the West Plaza Curb Cut on demand via the Campus Transit app and deliver directly to the Hall A South Ramp; elevator maintenance inside North Wing will not affect fair access.",
            "qs": [
              {
                "q": "How should students driving from the Park-and-Ride Lot reach Grand Hall A on Thursday?",
                "choices": [
                  "Park along East Circle Drive near the recruiter buses",
                  "Board Route 2A directly outside the Engineering trench",
                  "Take the dedicated Fair Express Coach departing every eight minutes",
                  "Walk through the closed North Wing elevator corridor"
                ],
                "ans": 2,
                "why": "ข้อ C ถูกต้อง — บันทึกปฏิบัติการระบุว่าผู้เดินทางจากลานจอด Park-and-Ride ต้องขึ้นรถ Fair Express Coach ที่ออกทุก 8 นาที เพราะ East Circle Drive ปิดและสาย 2A วิ่งอ้อม"
              },
              {
                "q": "What service is coordinated through the Campus Transit app at the West Plaza Curb Cut?",
                "choices": [
                  "On-demand ADA paratransit vans serving the Hall A South Ramp",
                  "Advance resume uploads for early 12:00 p.m. fair admission",
                  "Parking permits for visiting corporate recruiters",
                  "Hourly shuttle alerts about North Wing elevator repairs"
                ],
                "ans": 0,
                "why": "ข้อ A ถูกต้อง — แอป Campus Transit ใช้เรียกรถตู้สำหรับผู้ต้องการความช่วยเหลือด้านการเคลื่อนไหว (ADA paratransit vans) ที่จุด West Plaza Curb Cut ไปส่งยังทางลาดฝั่งใต้ของ Hall A"
              },
              {
                "q": "What does the memo reassure visitors about the North Wing elevator repair?",
                "choices": [
                  "Repairs will finish before 7:00 a.m. on Thursday",
                  "Recruiters have relocated booths out of Grand Hall A",
                  "Private cars may drop passengers off at the North Wing",
                  "It will not obstruct entry to the Internship Career Fair"
                ],
                "ans": 3,
                "why": "ข้อ D ถูกต้อง — ประโยคสุดท้ายระบุชัดเจนว่าการซ่อมบำรุงลิฟต์ใน North Wing จะไม่กระทบต่อการเข้าถึงพื้นที่จัดงาน Career Fair"
              }
            ]
          }
        ],
        "academic": {
          "subject": "Materials Chemistry",
          "title": "Aluminosilicate Tobermorite Growth in Roman Marine Concrete",
          "paragraphs": [
            "Modern reinforced concrete relies on steel rebar to carry tensile loads, yet coastal saltwater slowly penetrates tiny pores, rusts the embedded steel, and expands internally until concrete slabs spall apart within fifty years. By contrast, unreinforced Roman breakwaters submerged since the first century BCE show virtually zero structural disintegration. Recent X-ray micro-diffraction of drill cores from Portus and Cosa reveals that Roman marine mortar did not merely resist seawater—it used seawater as a chemical reactant.",
            "When alkaline lime and volcanic pozzolan ash met infiltrating brine, pore fluids dissolved aluminum and silicon ions from glassy volcanic scoria, precipitating needle-like crystals of aluminum-substituted tobermorite (Al-tobermorite) alongside a zeolite mineral called phillipsite. In industrial cement kilns, synthesizing Al-tobermorite ordinarily demands temperatures exceeding several hundred degrees Celsius; inside Roman seawalls, however, sluggish seawater circulation sustained mild exothermic warmth and alkaline pH long enough for interlocking crystal plates to weave across micro-fractures.",
            "Because these fibrous aluminosilicates flex slightly under wave impact, they arrest crack propagation rather than shattering like brittle modern paste. Civil engineers are now testing low-clinker marine mixes patterned on Roman pozzolans—not because ancient builders understood crystal chemistry, but because lowering kiln temperatures while extending seawall lifespans could slash coastal infrastructure carbon emissions."
          ],
          "qs": [
            {
              "q": "Why does modern reinforced coastal concrete frequently fail within half a century?",
              "choices": [
                "Volcanic ash dissolves rapidly inside Portland cement",
                "Saltwater rusts steel rebar, cracking concrete from within",
                "Phillipsite crystals expand too fast inside heated kilns",
                "Ocean waves erode unreinforced aggregate in ten years"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — ย่อหน้า 1 ระบุว่าน้ำเค็มซึมผ่านรูพรุนเข้าไปกัดกร่อนเหล็กเสริม (steel rebar) จนเป็นสนิมและขยายตัวดันเนื้อคอนกรีตให้แตกร่อนจากภายใน"
            },
            {
              "q": "What surprised researchers about Al-tobermorite crystals inside Roman seawall cores?",
              "choices": [
                "They sealed pores before any ocean water could enter",
                "They were quarried directly from mines outside Italy",
                "They replaced limestone completely in the Roman mix",
                "They formed in cool seawater without intense kiln heat"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — ย่อหน้า 2 ชี้ว่าปกติการสังเคราะห์ Al-tobermorite ในอุตสาหกรรมต้องใช้เตาเผาร้อนหลายร้อยองศา แต่ในกำแพงกันคลื่นโรมันแร่นี้เติบโตขึ้นได้จากปฏิกิริยาช้า ๆ กับน้ำทะเล"
            },
            {
              "q": "In paragraph 3, the word \"arrest\" is closest in meaning to",
              "choices": [
                "halt or stop",
                "accelerate",
                "measure",
                "conceal"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — arrest crack propagation แปลว่า ยับยั้งหรือหยุดยั้งการลุกลามของรอยร้าว (halt or stop)"
            },
            {
              "q": "How do Al-tobermorite and phillipsite strengthen ancient marine concrete mechanically?",
              "choices": [
                "They coat seawalls in an impermeable plastic barrier",
                "They convert sea salts into corrosion-proof steel rods",
                "Interlocking crystal plates halt cracks under wave impact",
                "They neutralize alkaline fluids before mortar sets"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — ย่อหน้า 2–3 อธิบายว่าผลึกเส้นใยแร่อะลูมิโนซิลิเกตสานตัวประสานข้ามรอยแตกขนาดเล็กและยืดหยุ่นรับแรงคลื่นได้ จึงหยุดการแตกหักลุกลาม"
            },
            {
              "q": "Why does the author mention modern civil engineers at the end of the passage?",
              "choices": [
                "To claim Roman builders used X-ray diffraction tools",
                "To show how Roman mixes can cut marine carbon emissions",
                "To explain why rebar stays essential in inland bridges",
                "To show volcanic scoria costs more than Portland clinker"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — ย่อหน้าสุดท้ายเน้นการประยุกต์ใช้ในวิศวกรรมสมัยใหม่เพื่อลดอุณหภูมิเผาปูน (ลดการปล่อยคาร์บอน) และเพิ่มอายุการใช้งานโครงสร้างชายฝั่ง"
            }
          ]
        }
      }
    },
    "listening": {
      "stage1": {
        "responses": [
          {
            "q": "Choose the best response.",
            "prompt": "Do I need to print twenty paper resumes before heading to Grand Hall A?",
            "speaker": "f",
            "accent": "us",
            "choices": [
              "Grand Hall A sits right across from Botany Greenhouse.",
              "Not really—most recruiters scan badge QR codes instead.",
              "Yes, the shuttle detours past Oak Avenue until Thursday.",
              "I updated my internship portfolio after lunch yesterday."
            ],
            "ans": 1,
            "why": "ข้อ B ถูกต้อง — ตอบคำถาม Yes/No พร้อมให้ข้อมูลจริงจากงาน Career Fair ว่าส่วนมากใช้สแกน QR บนป้ายชื่อแทนการยื่นกระดาษจำนวนมาก"
          },
          {
            "q": "Choose the best response.",
            "prompt": "Hey, why isn't Route 2A stopping in front of Engineering Quad this morning?",
            "speaker": "m",
            "accent": "ca",
            "choices": [
              "A water-main repair closed that block, so board at Oak Avenue.",
              "Career fair priority doors open for juniors at twelve noon.",
              "No, the Night SafeRide van operates until two in the morning.",
              "Roman builders mixed volcanic ash sourced near Vesuvius."
            ],
            "ans": 0,
            "why": "ข้อ A ถูกต้อง — ตอบคำถาม 'Why' เรื่องการงดจอดป้าย Engineering Quad พร้อมบอกจุดขึ้นรถชั่วคราวที่ Oak Avenue"
          },
          {
            "q": "Choose the best response.",
            "prompt": "Should we leave the fluorescent ceiling lights on while photographing the glowing mycelium plates?",
            "speaker": "f",
            "accent": "uk",
            "choices": [
              "Yes, nocturnal beetles disperse spores across tree bark.",
              "The mycology textbook stays on reserve inside the library.",
              "Mycelial threads trade soil phosphorus for plant sugars.",
              "No, turn them off because fungal glow is extremely faint."
            ],
            "ans": 3,
            "why": "ข้อ D ถูกต้อง — ตอบตรงคำถามพร้อมเหตุผลทางเทคนิคว่าแสงเรืองของราอ่อนมาก จึงต้องปิดไฟให้มืดก่อนถ่ายภาพ"
          },
          {
            "q": "Choose the best response.",
            "prompt": "Should I email a thank-you note to the civil engineering recruiter tonight or wait until next Monday?",
            "speaker": "m",
            "accent": "us",
            "choices": [
              "She handed out color-coded booth maps at the entrance.",
              "Wait until water-main repairs finish outside Science Hall.",
              "Write tonight while your coastal materials chat stays fresh.",
              "Civil engineers soak mortar cubes inside saltwater tanks."
            ],
            "ans": 2,
            "why": "ข้อ C ถูกต้อง — ให้คำแนะนำเรื่องจังหวะส่งอีเมลขอบคุณหลังงาน Career Fair ได้อย่างเหมาะสมและสอดคล้องกับสถานการณ์"
          }
        ],
        "conversation": {
          "title": "Prepping a 30-Second Career Fair Pitch Before the Detoured Shuttle",
          "lines": [
            {
              "role": "Student",
              "acc": "us",
              "sex": "m",
              "text": "Ms. Cho, thanks for squeezing in a quick pitch check before the Career Fair opens!"
            },
            {
              "role": "Advisor",
              "acc": "uk",
              "sex": "f",
              "text": "Happy to help, Leo. Tell me—which booths are at the top of your list today?"
            },
            {
              "role": "Student",
              "acc": "us",
              "sex": "m",
              "text": "Mostly Blue Aisle civil engineering firms, especially HarborTech, since I spent last semester testing volcanic-ash mortar."
            },
            {
              "role": "Advisor",
              "acc": "uk",
              "sex": "f",
              "text": "Great hook! Lead directly with that saltwater durability project in your opening twenty seconds instead of reciting your whole GPA and coursework."
            },
            {
              "role": "Student",
              "acc": "us",
              "sex": "m",
              "text": "Got it. Also, should I pull up my lab graphs on a tablet, or just describe the findings?"
            },
            {
              "role": "Advisor",
              "acc": "uk",
              "sex": "f",
              "text": "Save one clear before-and-after photo locally on your phone in case Hall A Wi-Fi lags. And leave five minutes early—Route 2A is detouring past Oak Avenue."
            },
            {
              "role": "Student",
              "acc": "us",
              "sex": "m",
              "text": "Oh, good catch! Let me download that image offline right now before walking out."
            }
          ],
          "qs": [
            {
              "q": "What advice does the advisor give Leo about opening his 30-second pitch?",
              "choices": [
                "Begin by listing every civil engineering course he completed",
                "Ask recruiters to compare Portland cement with steel rebar",
                "Hand over his printed transcript before introducing himself",
                "Start immediately with his volcanic-ash saltwater mortar project"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — อาจารย์แนะแนวแนะนำให้เปิดบทสนทนาด้วยโปรเจกต์ทดสอบมอร์ตาร์เถ้าภูเขาไฟในน้ำเค็มทันที แทนการไล่ท่องเกรดเฉลี่ยหรือรายวิชา"
            },
            {
              "q": "Why does the advisor recommend saving a lab image locally on Leo's phone?",
              "choices": [
                "Tablet screens are not permitted inside Blue Aisle booths",
                "Wireless internet inside Grand Hall A can be slow during the fair",
                "Recruiters refuse to scan QR codes without offline images",
                "CareerConnect deletes uploaded portfolios after noon"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — อาจารย์เตือนให้เซฟภาพไว้ในเครื่องแบบออฟไลน์เผื่อสัญญาณ Wi-Fi ในฮอลล์ติดขัดเมื่อคนเยอะ"
            },
            {
              "q": "Why does the advisor tell Leo to leave five minutes early?",
              "choices": [
                "Route 2A is currently running on a detour near Oak Avenue",
                "Priority admission for juniors closes at 12:15 p.m.",
                "Balcony Room 2B stops taking headshots at 1:00 p.m.",
                "Startups pack up their printed booths before the afternoon"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — รถเวียนสาย 2A วิ่งอ้อมผ่าน Oak Avenue เนื่องจากซ่อมท่อน้ำ จึงต้องเผื่อเวลาเดินทางเพิ่ม"
            }
          ]
        },
        "announcement": {
          "title": "Campus Transit · Evening Express Suspension & Bike-Share Credit",
          "speaker": "f",
          "accent": "ca",
          "lines": [
            "Attention evening commuters: today only, Express Route 4 will pause service between 4:30 p.m. and 7:00 p.m. while charter coaches clear out from the Career Fair.",
            "Riders traveling between Main Quad and West Residence Halls may board Route 2B at the Oak Avenue Shelter or transfer free onto municipal Bus 18.",
            "In addition, Campus Transit has activated a free two-hour bike-share promo code—FAIRRIDE—valid until midnight in the campus mobility app.",
            "Regular Express Route 4 headways resume at 7:00 p.m."
          ],
          "qs": [
            {
              "q": "Why is Express Route 4 paused between 4:30 p.m. and 7:00 p.m. today?",
              "choices": [
                "Oak Avenue Shelter is undergoing electrical repairs",
                "Drivers are attending an evening transit safety workshop",
                "Recruiter charter buses are departing after the Career Fair",
                "Heavy rain flooded the West Residence Hall roundabout"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — ประกาศแจ้งว่ารถด่วนสาย 4 หยุดวิ่งชั่วคราวช่วง 16:30–19:00 น. เฉพาะวันนี้ เพื่อให้รถบัสของบริษัทที่มาร่วมงาน Career Fair ทยอยออกจากพื้นที่"
            },
            {
              "q": "What alternative transit option carries no extra fare for students?",
              "choices": [
                "Transferring to city Bus 18 or using the FAIRRIDE bike-share code",
                "Booking a private taxi through CareerConnect",
                "Boarding Express Route 4 at Engineering Quad",
                "Using the Night SafeRide van at 4:45 p.m."
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — นักศึกษาสามารถต่อรถเมล์เทศบาลสาย 18 ฟรี หรือใช้โค้ด FAIRRIDE ปั่นจักรยานเช่าฟรี 2 ชั่วโมงได้ถึงเที่ยงคืน"
            },
            {
              "q": "When will Express Route 4 return to its normal schedule?",
              "choices": [
                "Tomorrow at 6:30 a.m.",
                "Immediately after midnight",
                "On Thursday afternoon",
                "At 7:00 p.m. tonight"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — ประโยคสุดท้ายระบุชัดว่ารอบรถปกติของ Express Route 4 จะกลับมาให้บริการเวลา 19:00 น."
            }
          ]
        },
        "talk": {
          "subject": "Mycology",
          "title": "The Enzymatic Glow of Neonothopanus Mushrooms",
          "speaker": "m",
          "accent": "uk",
          "lines": [
            "Out of roughly one hundred thousand described fungal species, only slightly more than one hundred emit visible light—a phenomenon biologists call fungal bioluminescence.",
            "For years, scientists wondered whether mushrooms relied on the same chemistry as fireflies, yet genetic sequencing revealed an entirely distinct pathway built around a plant-like compound named hispidin.",
            "Inside glowing fungi, one enzyme converts hispidin into fungal luciferin, and a second enzyme, luciferase, oxidizes that molecule to release a steady 530-nanometer green glow.",
            "Unlike fireflies that flash sharply to attract mates, glowing mushrooms shine continuously day and night—or at least follow a gentle circadian rhythm peaking after dusk.",
            "Field experiments in Brazilian forests showed that glowing caps attract nocturnal beetles and flies, which brush against the gills and disperse spores through dense, windless forest understories.",
            "However, non-reproductive mycelia buried underground also glow, even where insects rarely reach them.",
            "That puzzle leads some biochemists to propose that bioluminescence may also serve as an ancient antioxidant valve, safely burning off excess reactive oxygen during wood decay."
          ],
          "qs": [
            {
              "q": "How does fungal bioluminescence differ chemically from firefly light?",
              "choices": [
                "Fungi emit bright red flashes while fireflies glow continuously green",
                "Fungi synthesize luciferin from hispidin through an independent enzymatic pathway",
                "Mushrooms require external sunlight during the night to glow",
                "Fungal cells borrow luciferase genes from soil beetles"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — เลกเชอร์อธิบายว่าลำดับพันธุกรรมชี้ว่าเห็ดใช้เส้นทางเคมีคนละแบบกับหิ่งห้อย โดยเปลี่ยนสาร hispidin ให้เป็น luciferin แล้วออกซิไดซ์ด้วย luciferase"
            },
            {
              "q": "Why is attracting insects especially useful for mushrooms growing low in a dense forest?",
              "choices": [
                "Beetles carry volcanic minerals straight into tree roots",
                "Flies eat competing brown-rot bacteria off mushroom caps",
                "Nocturnal wasps supply extra sugars for photosynthesis",
                "Calm air beneath the canopy limits wind-based spore dispersal"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — ใต้เรือนยอดป่าที่หนาทึบและอับลม (windless understories) ลมพัดสปอร์ไปได้ไม่ไกล การล่อแมลงกลางคืนจึงช่วยกระจายสปอร์ได้ดีกว่า"
            },
            {
              "q": "What evidence suggests insect attraction may NOT be the only reason fungi glow?",
              "choices": [
                "Subterranean mycelium threads also glow where few flying insects visit",
                "Glowing caps fade completely before dusk in Brazilian forests",
                "Only ten percent of mushrooms contain hispidin enzymes",
                "Beetles avoid green light near 530 nanometers"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — เส้นใยรา (mycelia) ที่ฝังอยู่ใต้ดินซึ่งแมลงเข้าไม่ถึงก็ยังเรืองแสง จึงเกิดสมมติฐานว่าเป็นกลไกเสริมในการขจัดออกซิเจนส่วนเกิน"
            },
            {
              "q": "What alternative function do biochemists propose for glowing underground mycelia?",
              "choices": [
                "Warming frozen soil around shallow sapling roots",
                "Signaling tree roots to stop sending sugar downward",
                "Dissipating excess reactive oxygen produced during wood breakdown",
                "Attracting earthworms to dig deeper drainage tunnels"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — นักชีวเคมีบางกลุ่มเสนอว่าปฏิกิริยาเรืองแสงอาจทำหน้าที่คล้ายวาล์วต้านอนุมูลอิสระ ช่วยระบายออกซิเจนที่ไวต่อปฏิกิริยาส่วนเกินระหว่างย่อยไม้"
            }
          ]
        }
      },
      "stage2a": {
        "responses": [
          {
            "q": "Choose the best response.",
            "prompt": "Is professional business attire mandatory to enter the Internship Career Fair?",
            "speaker": "f",
            "accent": "us",
            "choices": [
              "Business casual works fine—just wear comfortable shoes.",
              "Priority admission opens at noon for juniors and seniors.",
              "Print your resume before boarding the Oak Avenue bus.",
              "Balcony Room 2B is upstairs right beside the elevators."
            ],
            "ans": 0,
            "why": "ข้อ A ถูกต้อง — ตอบคำถาม Yes/No เรื่องการแต่งกายงาน Career Fair อย่างเป็นธรรมชาติและกระชับ"
          },
          {
            "q": "Choose the best response.",
            "prompt": "Does the campus detour on North Loop Drive also cancel Saturday morning shuttles?",
            "speaker": "m",
            "accent": "uk",
            "choices": [
              "Peak daytime intervals leave every twelve minutes.",
              "The Fair Express Bus serves only the Park-and-Ride Lot.",
              "Yes, Night SafeRide vans begin pickups after eight.",
              "No, crews finish Thursday night, so Saturday runs normally."
            ],
            "ans": 3,
            "why": "ข้อ D ถูกต้อง — ตอบคำถาม Yes/No เรื่องตารางรถวันเสาร์ตรงตามกำหนดเสร็จสิ้นงานซ่อมในคืนวันพฤหัสบดี"
          },
          {
            "q": "Choose the best response.",
            "prompt": "Where should we store these saltwater-cured mortar cylinders once we finish weighing them?",
            "speaker": "f",
            "accent": "ca",
            "choices": [
              "Roman builders mixed lime with ash from Naples.",
              "Set them on the labeled blue rack beside the press.",
              "Seawater usually corrodes steel inside coastal piers.",
              "We already uploaded our summary to CareerConnect."
            ],
            "ans": 1,
            "why": "ข้อ B ถูกต้อง — ตอบคำถาม 'Where' ชี้ตำแหน่งวางตัวอย่างบนชั้นสีฟ้าข้างเครื่องอัดได้ชัดเจน"
          }
        ],
        "conversation": {
          "title": "Comparing Roman Pozzolan Mortar vs. Portland Cement in Lab",
          "lines": [
            {
              "role": "Student A",
              "acc": "us",
              "sex": "f",
              "text": "Hey Sam, did you pull our thirty-day saltwater mortar cubes out of the brine tank yet?"
            },
            {
              "role": "Student B",
              "acc": "uk",
              "sex": "m",
              "text": "Just finished drying them! Look at the edges—the standard Portland cube already has tiny flaking corners."
            },
            {
              "role": "Student A",
              "acc": "us",
              "sex": "f",
              "text": "Really? What about the pozzolan-lime batch we hot-mixed last month?"
            },
            {
              "role": "Student B",
              "acc": "uk",
              "sex": "m",
              "text": "Barely a scratch—actually, its compression reading came out eight percent higher than the freshwater control!"
            },
            {
              "role": "Student A",
              "acc": "us",
              "sex": "f",
              "text": "Whoa, saltwater actually strengthened it! Let's slice a thin section for the microscope to check whether crystal needles filled the pores."
            },
            {
              "role": "Student B",
              "acc": "uk",
              "sex": "m",
              "text": "Good idea. Let's label both samples carefully and book the petrographic saw before the afternoon lab section arrives."
            }
          ],
          "qs": [
            {
              "q": "What happened to the standard Portland cement cube after thirty days in saltwater?",
              "choices": [
                "Its compressive strength rose by eight percent",
                "It dissolved completely inside the brine tank",
                "Its corners began flaking slightly",
                "It formed bright white crystals across every face"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — นักศึกษา B รายงานว่าตัวอย่างปูนซีเมนต์ปอร์ตแลนด์มาตรฐานเริ่มมีรอยกะเทาะเล็ก ๆ ตามมุม (tiny flaking corners)"
            },
            {
              "q": "What surprised the students about the hot-mixed pozzolan-lime sample?",
              "choices": [
                "It tested stronger after brine soaking than the freshwater control",
                "It failed to harden even after thirty days of drying",
                "It weighed half as much as the standard Portland cube",
                "It turned rust-colored like brown-rot forest soil"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — ค่าความต้านแรงอัดของตัวอย่างผสมเถ้าภูเขาไฟที่แช่น้ำเค็มสูงกว่าชุดควบคุมที่แช่น้ำจืดถึง 8%"
            },
            {
              "q": "Why do the students decide to slice a thin section for the microscope?",
              "choices": [
                "To remove rust spots left by embedded steel bars",
                "To see whether newly grown crystal needles sealed internal pores",
                "To check if saltwater washed away all volcanic ash",
                "To prepare three extra cubes for the Career Fair booth"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — ทั้งคู่ต้องการส่องกล้องจุลทรรศน์ดูภาคตัดขวางว่ามีผลึกเข็มแร่เติบโตขึ้นอุดช่องว่าง (pores) ภายในเนื้อปูนจริงหรือไม่"
            }
          ]
        },
        "announcement": {
          "title": "Career Fair Update · STEM Employer Panel Room Change",
          "speaker": "m",
          "accent": "us",
          "lines": [
            "May I have your attention inside Grand Hall A: our 2:30 p.m. STEM Internship Panel with HarborTech and BioForest Labs has outgrown Seminar Room B.",
            "The panel will now meet upstairs in Auditorium 204, where overflow seating is available for one hundred students.",
            "Meanwhile, recruiters collecting live interview sign-ups ask all candidates to scan the QR waitlist poster outside each booth rather than lining up in the central fire aisle.",
            "Thank you for keeping aisles clear while navigating the fair."
          ],
          "qs": [
            {
              "q": "Why was the 2:30 p.m. STEM Internship Panel moved to Auditorium 204?",
              "choices": [
                "Recruiters from HarborTech were delayed by the shuttle detour",
                "Projectors inside Seminar Room B stopped working",
                "Grand Hall A needs to close early for charter buses",
                "More students wanted to attend than Seminar Room B could hold"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — ประกาศระบุว่างานเสวนา 'has outgrown Seminar Room B' จึงย้ายขึ้นไปที่ Auditorium 204 ที่จุคนได้มากขึ้น"
            },
            {
              "q": "What should students do instead of standing in lines in the central fire aisle?",
              "choices": [
                "Wait inside Balcony Room 2B until recruiters call their name",
                "Email printed resumes directly to Auditorium 204",
                "Scan the QR code poster outside booths to join the interview waitlist",
                "Return tomorrow morning for the virtual Career Center queue"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — ผู้จัดขอให้ผู้สมัครสแกนโปสเตอร์ QR waitlist หน้าบูธแทนการยืนต่อแถวขวางทางเดินหนีไฟตรงกลาง"
            }
          ]
        },
        "talk": {
          "subject": "Ancient Engineering",
          "title": "Building Underwater Breakwaters at Caesarea Maritima",
          "speaker": "f",
          "accent": "ca",
          "lines": [
            "When King Herod commissioned a deep-water harbor at Caesarea Maritima around 22 BCE, Roman engineers faced a coastline lacking any natural protective bay.",
            "To shelter merchant grain ships from violent winter swells, they had to build massive concrete breakwaters directly out into open Mediterranean waters.",
            "Underwater excavations reveal an ingenious construction sequence using huge double-walled wooden frames, called caissons, built on shore from imported European fir and spruce.",
            "Crews towed each empty box-like frame into position offshore, weighted its hollow double walls with pozzolanic mortar until it sank smoothly onto the seabed, and then packed the wide central cavity underwater.",
            "Rather than letting waves wash away wet cement, engineers lowered baskets of stiff lime-and-pozzolana mix straight through water to the bottom.",
            "Because pozzolanic chemistry hardens even when submerged, those monolithic piers fused into solid artificial reefs within weeks.",
            "Submerged remnants of the wooden timber frames and intact concrete blocks still rest on the seafloor over two millennia later."
          ],
          "qs": [
            {
              "q": "Why was constructing a harbor at Caesarea Maritima particularly challenging?",
              "choices": [
                "European fir timber could not float in salty water",
                "The exposed coastline had no natural sheltered bay",
                "Local rivers carried too much silt into the shipyard",
                "Winter waves froze around wooden caisson walls"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — ย่อหน้าแรกของเลกเชอร์ระบุว่าชายฝั่งบริเวณนี้ไม่มีอ่าวธรรมชาติช่วยกำบังคลื่น (lacking any natural protective bay)"
            },
            {
              "q": "How did engineers sink the empty wooden caissons onto the exact seabed spot?",
              "choices": [
                "They towed them offshore and poured mortar into their hollow double walls",
                "They filled the boxes with dry beach sand before towing",
                "They nailed iron anchors from harbor piers onto the seabed",
                "They waited for low winter tides to drain the coastline"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — ช่างลากโครงไม้สองชั้นออกไปกลางทะเล แล้วเทปูนมอร์ตาร์ลงในผนังกลวงคู่จนหนักและค่อย ๆ จมลงสู่ก้นทะเลอย่างมั่นคง"
            },
            {
              "q": "Why didn't ocean water prevent the poured concrete inside the caissons from setting?",
              "choices": [
                "Canvas tarps kept all seawater out of the wooden frame",
                "Divers heated the surrounding water with charcoal braziers",
                "The central cavity was filled purely with carved limestone slabs",
                "Pozzolanic lime mixtures react chemically and harden even underwater"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — คุณสมบัติของปูนผสมเถ้าภูเขาไฟ (hydraulic/pozzolanic chemistry) สามารถทำปฏิกิริยาและแข็งตัวได้แม้จมอยู่ใต้น้ำ"
            },
            {
              "q": "What evidence confirms today how those ancient piers were built?",
              "choices": [
                "Intact grain ships remain moored beside the original lighthouse",
                "Inscriptions inside Herod's palace list exact mortar recipes",
                "Submerged timber frames and concrete blocks still survive on the seafloor",
                "Modern ports in Italy use identical spruce caissons"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — การขุดค้นใต้น้ำพบซากกรอบไม้และแท่งคอนกรีตขนาดยักษ์ที่ยังคงสภาพอยู่บนพื้นทะเลมากว่า 2,000 ปี"
            }
          ]
        }
      },
      "stage2b": {
        "responses": [
          {
            "q": "Choose the best response.",
            "prompt": "Why did the wood-decay enzyme assay spike on Tuesday even though temperature stayed steady?",
            "speaker": "m",
            "accent": "us",
            "choices": [
              "White-rot fungi digest both cellulose and dark lignin.",
              "Humidity jumped overnight, triggering higher fungal respiration.",
              "Yes, we gathered those oak logs behind Botany Hall.",
              "Shuttle Route 2B skips Engineering Quad until Thursday."
            ],
            "ans": 1,
            "why": "ข้อ B ถูกต้อง — ตอบคำถาม 'Why' ได้ตรงจุดโดยชี้ตัวแปรความชื้นที่พุ่งขึ้นเป็นตัวกระตุ้นการหายใจของเส้นใยรา"
          },
          {
            "q": "Choose the best response.",
            "prompt": "Since Route 2A is detouring past Oak Avenue, are shuttles still running every twelve minutes?",
            "speaker": "f",
            "accent": "ca",
            "choices": [
              "The Park-and-Ride Fair Express leaves every eight minutes.",
              "Please scan your student badge at the main career desk.",
              "Departures stay twelve minutes apart, just six minutes slower.",
              "Night SafeRide vans accept ride requests until midnight."
            ],
            "ans": 2,
            "why": "ข้อ C ถูกต้อง — แยกแยะระหว่าง 'ความถี่ในการปล่อยรถ' (ทุก 12 นาทีเท่าเดิม) กับ 'ระยะเวลาเดินทางรวม' (ช้าลง 6 นาที) ได้แม่นยำ"
          },
          {
            "q": "Choose the best response.",
            "prompt": "Does HarborTech's rotational internship let undergraduates test coastal materials in the field?",
            "speaker": "m",
            "accent": "uk",
            "choices": [
              "Yes—interns split time between our concrete lab and harbor piers.",
              "We ask applicants to submit transcripts via CareerConnect.",
              "The STEM panel moved upstairs to Auditorium 204.",
              "Actually, Roman harbors used European spruce frames."
            ],
            "ans": 0,
            "why": "ข้อ A ถูกต้อง — ตอบคำถาม Yes/No พร้อมอธิบายโปรแกรมหมุนเวียนทั้งในห้องแล็บคอนกรีตและหน้างานท่าเรือชายฝั่ง"
          }
        ],
        "conversation": {
          "title": "Analyzing Circadian Luminescence vs. Humidity in Mycena Mycelia",
          "lines": [
            {
              "role": "Grad Researcher",
              "acc": "uk",
              "sex": "f",
              "text": "Tariq, look closely at the twenty-four-hour luminometer trace from our Mycena agar dishes."
            },
            {
              "role": "Undergrad",
              "acc": "us",
              "sex": "m",
              "text": "Whoa—photon counts nearly tripled around 9:00 p.m. and dipped back down after 6:00 a.m., even inside the pitch-black incubator!"
            },
            {
              "role": "Grad Researcher",
              "acc": "uk",
              "sex": "f",
              "text": "Right, which rules out immediate light cues—wait, did the building AC drop temperature when campus switched to night setback?"
            },
            {
              "role": "Undergrad",
              "acc": "us",
              "sex": "m",
              "text": "I cross-checked the probe log: chamber temperature held within point-two degrees, and relative humidity stayed locked at ninety-two percent."
            },
            {
              "role": "Grad Researcher",
              "acc": "uk",
              "sex": "f",
              "text": "Awesome control! That means the cycle is genuinely circadian—driven by an internal clock rather than room temperature or humidity swings."
            },
            {
              "role": "Undergrad",
              "acc": "us",
              "sex": "m",
              "text": "Makes evolutionary sense too: why waste luciferin energy glowing at noon when nocturnal beetles aren't foraging?"
            },
            {
              "role": "Grad Researcher",
              "acc": "uk",
              "sex": "f",
              "text": "Exactly. Next, let's test whether fruiting caps and buried mycelia share that same circadian amplitude."
            }
          ],
          "qs": [
            {
              "q": "What did the students observe inside the dark incubator between 9:00 p.m. and 6:00 a.m.?",
              "choices": [
                "The agar dishes stopped glowing completely after midnight",
                "Chamber temperature dropped sharply during night AC setback",
                "Beetles inside the dish began dispersing spores near dawn",
                "Fungal light output surged at night and fell toward morning without light cues"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — กราฟ luminometer แสดงจำนวนโฟตอนพุ่งขึ้นเกือบสามเท่าช่วง 21:00 น. และลดลงหลัง 6:00 น. ทั้งที่อยู่ในตู้ฟักมืดสนิท"
            },
            {
              "q": "Why did the graduate researcher ask about the building's night AC setback?",
              "choices": [
                "To check whether an external temperature dip caused the nighttime glow spike",
                "To explain why the incubator lost humidity overnight",
                "To decide when to harvest the Mycena fruiting caps",
                "To calibrate the luminometer sensor before morning classes"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — เธอต้องการตรวจสอบตัวแปรกวน (confounding factor) ว่าแสงที่พุ่งตอนกลางคืนเกิดจากแอร์อาคารเย็นลงหรือไม่ ก่อนสรุปว่าเป็นนาฬิกาชีวภาพ"
            },
            {
              "q": "What adaptive advantage does Tariq suggest for an internal circadian glow cycle?",
              "choices": [
                "It protects surface mycelia from drying out in daytime winds",
                "It conserves energy during daylight when nocturnal spore-carrying insects are inactive",
                "It speeds up cellulose breakdown only during morning hours",
                "It keeps competing white-rot fungi away from dark agar plates"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — Tariq ชี้ว่าช่วยประหยัดพลังงานการสังเคราะห์ luciferin ในตอนกลางวันที่ด้วงหากินกลางคืนยังไม่ออกหากิน"
            }
          ]
        },
        "announcement": {
          "title": "Campus Facilities & Transit · Electric Shuttle Charging Hub Update",
          "speaker": "f",
          "accent": "us",
          "lines": [
            "Campus Transit and Facilities Planning announce that installation of our high-capacity inductive charging pads at West Depot begins next Monday morning.",
            "While trenching proceeds along West Depot Lane, electric articulated buses on Route 1 will stage at Staggered Zone B beside the Recreation Center instead of the main transit plaza.",
            "Real-time arrival estimates in the Campus Transit app already reflect the temporary departure bays, and printed maps are posted at every shelter.",
            "Once activated next month, the inductive pads will let buses top up batteries during three-minute layovers without leaving mid-day routes."
          ],
          "qs": [
            {
              "q": "How will electric Route 1 buses adjust during West Depot charging-pad construction?",
              "choices": [
                "They will suspend daytime service for one full month",
                "They will switch back to diesel coaches on Oak Avenue",
                "They will depart from Staggered Zone B beside the Recreation Center",
                "They will pick up riders exclusively inside the Park-and-Ride Lot"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — ระหว่างขุดวางแท่นชาร์จ รถบัสไฟฟ้าสาย 1 จะย้ายจุดจอดตั้งต้นไปที่ Staggered Zone B ข้างศูนย์นันทนาการ"
            },
            {
              "q": "What operational benefit will the new inductive pads provide once active?",
              "choices": [
                "Commuters can charge personal electric bicycles at transit shelters",
                "Buses can recharge briefly between trips without interrupting daytime schedules",
                "Route headways will slow to allow thirty-minute battery swaps",
                "Charter buses from career fairs can park permanently at West Depot"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — แท่นชาร์จเหนี่ยวนำจะช่วยให้รถบัสเติมไฟระหว่างจอดพัก 3 นาทีได้โดยไม่ต้องถอนรถออกจากเส้นทางระหว่างวัน"
            }
          ]
        },
        "talk": {
          "subject": "Materials Chemistry",
          "title": "Hydrothermal-Like Mineral Reinforcement in Roman Seawalls",
          "speaker": "m",
          "accent": "ca",
          "lines": [
            "When materials chemists examine two-thousand-year-old harbor cores from Italy, the central paradox isn't simply why Roman concrete survived, but how seawater actually improved it.",
            "In conventional Portland cement, chloride ions from ocean brine diffuse past calcium-silicate-hydrate gel, depassivate protective coatings on steel rebar, and trigger expansive rusting.",
            "Ancient Roman maritime piers contained zero steel; instead, their strength hinged on chemistry driven by volcanic tephra from the Campanian volcanic arc.",
            "Using synchrotron X-ray micro-diffraction, researchers mapped pore-scale reactions inside Roman piers and compared them to natural geothermal systems.",
            "As alkaline lime dissolved glassy volcanic pumice in saltwater, migrating fluids precipitated platy crystals of aluminum-substituted tobermorite alongside porous zeolite minerals, chiefly phillipsite.",
            "Notice the twist: in nature, Al-tobermorite ordinarily crystallizes inside hot submarine volcanic vents, yet Roman piers grew those same mineral plates at cool ambient Mediterranean temperatures.",
            "As decades passed, slow dissolution of residual lime kept feeding crystal growth inside micro-cracks, effectively sealing leaks before wave pressure could wedge blocks apart.",
            "Recreating this seawater-assisted curing without modern Portland clinker could reduce marine construction emissions by more than half."
          ],
          "qs": [
            {
              "q": "What contrast does the speaker highlight between modern reinforced piers and Roman harbor concrete?",
              "choices": [
                "Portland cement dissolves only in freshwater river dams",
                "Modern mixes contain excess ash compared with Roman piers",
                "Roman builders coated steel rods in phillipsite minerals",
                "Brine corrodes modern rebar but strengthens Roman mortar"
              ],
              "ans": 3,
              "why": "ข้อ D ถูกต้อง — ไอออนคลอไรด์ในน้ำทะเลกัดกร่อนเหล็กเสริมในคอนกรีตสมัยใหม่ให้เกิดสนิมดันแตก แต่ในคอนกรีตโรมันที่ไม่มีเหล็ก น้ำทะเลกลับกระตุ้นปฏิกิริยาสร้างผลึกแร่เสริมความแข็งแรง"
            },
            {
              "q": "Why does the speaker compare Roman piers to submarine volcanic vents?",
              "choices": [
                "Both environments produce Al-tobermorite crystals despite huge temperature differences",
                "Roman masons mined volcanic pumice directly from underwater ocean vents",
                "Submarine vents supply hot lime needed by modern cement kilns",
                "Both systems suffer rapid erosion from acidic ocean currents"
              ],
              "ans": 0,
              "why": "ข้อ A ถูกต้อง — ในธรรมชาติ Al-tobermorite มักเกิดในปล่องภูเขาไฟใต้ทะเลที่ร้อนจัด แต่คอนกรีตโรมันกลับสร้างผลึกชนิดเดียวกันได้ที่อุณหภูมิน้ำทะเลปกติ"
            },
            {
              "q": "How did residual lime contribute to the piers' longevity over decades?",
              "choices": [
                "It coated outer wooden caissons to block marine wood-boring worms",
                "It lowered seawater pH around harbor ships",
                "It dissolved gradually to nourish fresh crystal growth inside hairline fractures",
                "It prevented phillipsite zeolites from forming inside pores"
              ],
              "ans": 2,
              "why": "ข้อ C ถูกต้อง — ปูนขาวที่เหลือค่อย ๆ ละลายป้อนปฏิกิริยาให้ผลึกแร่งอกตัวปิดรอยร้าวขนาดเล็กก่อนแรงคลื่นจะขยายรอยแตกให้พังทลาย"
            },
            {
              "q": "What modern engineering motivation is noted at the conclusion of the talk?",
              "choices": [
                "Synchrotron scanning can replace physical harbor checks",
                "Seawater-cured pozzolans could halve marine building emissions",
                "Portland clinker should be banned from inland bridges",
                "Zeolites cost far less to quarry than Campanian pumice"
              ],
              "ans": 1,
              "why": "ข้อ B ถูกต้อง — สรุปท้ายเลกเชอร์ว่าการพัฒนาปูนทนน้ำทะเลเลียนแบบโรมันโดยลด clinker อาจช่วยลดการปล่อยคาร์บอนในการก่อสร้างทางทะเลได้กว่าครึ่ง"
            }
          ]
        }
      }
    },
    "writing": {
      "build": [
        {
          "cue": "Ask a transit attendant where the detoured shuttle picks up passengers today.",
          "prefix": "Could you tell me ",
          "chunks": [
            "picks up",
            "where",
            "passengers",
            "the detoured",
            "today",
            "shuttle"
          ],
          "ans": "Could you tell me where the detoured shuttle picks up passengers today?",
          "alts": [],
          "suffix": "?",
          "why": "คำถามซ้อนหลัง Could you tell me ใช้ลำดับคำแบบบอกเล่า: where + ประธาน (the detoured shuttle) + กริยาวลี (picks up) + กรรมและเวลา"
        },
        {
          "cue": "Explain why glowing woodland mushrooms attract nocturnal beetles.",
          "prefix": "",
          "chunks": [
            "spores",
            "nocturnal",
            "bright green",
            "carry",
            "lure",
            "beetles",
            "caps",
            "that"
          ],
          "ans": "Bright green caps lure nocturnal beetles that carry spores.",
          "alts": [],
          "suffix": ".",
          "why": "ประโยคหลัก (Bright green caps lure nocturnal beetles) ขยายด้วยอนุประโยคคุณศัพท์ (that carry spores)"
        },
        {
          "cue": "Advise a friend when juniors may enter the Internship Career Fair early.",
          "prefix": "Students who uploaded ",
          "chunks": [
            "enter",
            "resumes",
            "noon",
            "at",
            "can",
            "early",
            "on Tuesday"
          ],
          "ans": "Students who uploaded resumes on Tuesday can enter early at noon.",
          "alts": [],
          "suffix": ".",
          "why": "ขยายส่วนต้น (Students who uploaded resumes on Tuesday) แล้วตามด้วยกริยาช่วย can enter early at noon"
        },
        {
          "cue": "Describe how reactive lime heals cracks in Roman mortar.",
          "prefix": "",
          "chunks": [
            "fresh",
            "narrow",
            "forms",
            "calcite",
            "inside",
            "quicklime",
            "crystals",
            "cracks"
          ],
          "ans": "Quicklime forms fresh calcite crystals inside narrow cracks.",
          "alts": [],
          "suffix": ".",
          "why": "โครงสร้างบอกเล่า: ประธาน (Quicklime) + กริยา (forms) + นามวลีกรรม (fresh calcite crystals) + บุพบทวลีบอกสถานที่ (inside narrow cracks)"
        },
        {
          "cue": "Clarify why the campus shuttle takes longer during the water-main repair.",
          "prefix": "Please allow ",
          "chunks": [
            "traffic",
            "extra",
            "six",
            "minutes",
            "because of",
            "detour"
          ],
          "ans": "Please allow six extra minutes because of detour traffic.",
          "alts": [],
          "suffix": ".",
          "why": "ประโยคคำสั่งสุภาพ: Please allow + เวลา (six extra minutes) + เหตุผล (because of detour traffic)"
        },
        {
          "cue": "Report what isotope tracing showed about shaded forest saplings.",
          "prefix": "Experiments revealed ",
          "chunks": [
            "from",
            "saplings",
            "carbon",
            "mature",
            "that",
            "trees",
            "received"
          ],
          "ans": "Experiments revealed that saplings received carbon from mature trees.",
          "alts": [],
          "suffix": ".",
          "why": "อนุประโยคกรรมหลัง revealed เริ่มด้วย that + ประธาน (saplings) + กริยา (received) + กรรมและบุพบทวลี (carbon from mature trees)"
        },
        {
          "cue": "Ask a career advisor whether startups still accept printed resumes.",
          "prefix": "Do you know ",
          "chunks": [
            "resumes",
            "startups",
            "whether",
            "printed",
            "prefer",
            "smaller"
          ],
          "ans": "Do you know whether smaller startups prefer printed resumes?",
          "alts": [],
          "suffix": "?",
          "why": "คำถามซ้อน Yes/No ใช้ whether + นามวลีประธาน (smaller startups) + กริยา (prefer) + กรรม (printed resumes)"
        },
        {
          "cue": "Explain how Roman builders sank wooden frames at Caesarea Maritima.",
          "prefix": "",
          "chunks": [
            "wooden",
            "with",
            "builders",
            "sank",
            "heavy",
            "frames",
            "mortar"
          ],
          "ans": "Builders sank wooden frames with heavy mortar.",
          "alts": [],
          "suffix": ".",
          "why": "ประโยคบอกเล่า: ประธาน (Builders) + กริยาอดีต (sank) + กรรม (wooden frames) + วิธีดำเนินการ (with heavy mortar)"
        },
        {
          "cue": "State why glowing mushrooms release maximum light at night.",
          "prefix": "Only after sunset ",
          "chunks": [
            "glow",
            "fungal",
            "brightness",
            "do",
            "reach",
            "peak",
            "mycelia"
          ],
          "ans": "Only after sunset do fungal mycelia reach peak glow brightness.",
          "alts": [],
          "suffix": ".",
          "why": "โครงสร้างการกลับรูปกริยา (inversion) เมื่อขึ้นต้นด้วย Only after + เวลา: Only after sunset + do + ประธานพหูพจน์ (fungal mycelia) + กริยาช่อง 1 (reach peak glow brightness)"
        },
        {
          "cue": "Summarize how inductive charging pads will help campus buses stay on schedule.",
          "prefix": "",
          "chunks": [
            "during",
            "electric",
            "between",
            "buses",
            "recharge",
            "brief",
            "trips",
            "layovers"
          ],
          "ans": "Electric buses recharge between trips during brief layovers.",
          "alts": [
            "Electric buses recharge during brief layovers between trips."
          ],
          "suffix": ".",
          "why": "โครงสร้างประโยคบอกเล่า: ประธาน (Electric buses) + กริยา (recharge) + วลีบอกเวลา (between trips during brief layovers)"
        }
      ],
      "email": {
        "title": "Following Up After the Internship Career Fair",
        "situation": "You are an environmental civil engineering junior who spoke briefly with Elena Ortiz, a coastal materials engineer at HarborTech, during today's Internship Career Fair. Because your detoured campus shuttle arrived early, you had to leave right after she scanned your badge QR code and asked to see your saltwater mortar test report. Write a follow-up email to Ms. Ortiz.",
        "bullets": [
          "Thank Ms. Ortiz for discussing HarborTech's coastal concrete internship at Booth 14.",
          "Share your saltwater pozzolan mortar lab summary as she requested.",
          "Propose a brief 15-minute video chat next week to discuss the rotational track."
        ],
        "model": "Dear Ms. Ortiz,\n\nThank you very much for speaking with me at Booth 14 during today's Internship Career Fair about HarborTech's summer coastal engineering internship. I apologize for rushing away before finishing our conversation, as my detoured campus shuttle departed earlier than expected.\n\nAs you requested, I have attached my thirty-day saltwater compression summary comparing hot-mixed volcanic-ash mortar against standard Portland cement controls. Working on Roman-inspired marine mixes this semester made me especially excited about your harbor pier restoration projects.\n\nWould you have fifteen minutes next Tuesday or Thursday afternoon for a brief video chat about the rotational lab-to-field track? Thank you again for your time and consideration.\n\nBest regards,\nLeo Park",
        "notes": "• ครอบคลุมครบ 3 เป้าหมาย: ย่อหน้า 1 ขอบคุณและเชื่อมบริบทที่คุยค้างที่บูธ 14 พร้อมอธิบายอย่างสุภาพเรื่องต้องรีบขึ้นรถชัตเทิล, ย่อหน้า 2 แนบสรุปผลทดสอบปูนเถ้าภูเขาไฟในน้ำเค็มตามที่ผู้สัมภาษณ์ขอ, ย่อหน้า 3 เสนอวัน-เวลาสำหรับคุยออนไลน์ 15 นาทีในสัปดาห์หน้า\n• วลีสำคัญที่ใช้ได้ดีในอีเมลสมัครงาน: As you requested, I have attached..., Would you have fifteen minutes next... for a brief video chat..."
      },
      "discussion": {
        "topic": "Should Universities Require an Applied Internship Before Graduation?",
        "profPrompt": "Career fairs and employer panels continue growing across our campus, and several faculty members have proposed making at least one off-campus internship or applied industry project mandatory for undergraduate graduation. Should universities require hands-on internships for every student, or keep them optional alongside traditional coursework?",
        "posts": [
          {
            "name": "Priya",
            "text": "Making internships mandatory would ensure every student graduates with practical communication skills and real workplace experience before entering a competitive job market. Without a requirement, many students wait until their final semester to network with recruiters or build a portfolio."
          },
          {
            "name": "Lucas",
            "text": "While internships are valuable, requiring one overlooks students who work part-time retail jobs to pay tuition or commute long distances on public transit. Unpaid or scarce internships could delay graduation for low-income students unless departments guarantee paid placements."
          }
        ],
        "model": "While Priya highlights an important truth about how practical internships sharpen workplace readiness, I side with Lucas that making off-campus internships a strict graduation requirement creates unintended barriers. Not every academic field offers abundant summer placements, and commuters or students supporting themselves cannot always relocate or sacrifice paid hours for unpaid industry roles.\n\nInstead of imposing a blanket mandate, universities can capture the benefits Priya describes by pairing optional internships with credit-bearing applied lab capstones directly on campus. For instance, a biology student analyzing local forest soil fungi or an engineering junior testing marine mortar mixes with partner firms still builds a real portfolio while keeping flexible class hours. Expanding funded micro-internships would motivate participation equitably without penalizing students facing financial or transit constraints.",
        "notes": "• โครงสร้างชัดเจน: ย่อหน้าแรกยอมรับมุมมองของ Priya แล้วสนับสนุนประเด็นความเท่าเทียมของ Lucas พร้อมเหตุผลด้านตลาดงานแต่ละสาขาและข้อจำกัดค่าครองชีพ/การเดินทาง\n• ย่อหน้าที่สองเสนอทางเลือกที่สร้างสรรค์ (credit-bearing applied lab capstones + funded micro-internships) พร้อมยกตัวอย่างจากธีมชุดที่ 4 ช่วยให้เหตุผลหนักแน่นและเป็นรูปธรรม"
      }
    },
    "speaking": {
      "repeat": [
        {
          "text": "North Loop shuttles are detouring past Oak Avenue.",
          "accent": "us",
          "sex": "m"
        },
        {
          "text": "Early fair entry opens at noon for registered juniors.",
          "accent": "ca",
          "sex": "f"
        },
        {
          "text": "Fungal mycelia trade soil phosphorus for carbohydrates produced by forest trees.",
          "accent": "uk",
          "sex": "m"
        },
        {
          "text": "Volcanic ash inside Roman seawalls reacted with saltwater to heal hairline cracks.",
          "accent": "us",
          "sex": "f"
        },
        {
          "text": "Although career fair recruiters scan digital badges, bringing five printed resumes helps at small startups.",
          "accent": "ca",
          "sex": "m"
        }
      ],
      "interview": {
        "topic": "Career Preparation, Campus Transit & Nature-Inspired Innovation",
        "intro": "Welcome! I'm going to ask you four connected questions about preparing for internships, commuting around campus, and how research on natural or historical systems shapes modern problem-solving.",
        "questions": [
          {
            "q": "When preparing for a busy campus career fair, what do you think helps a student stand out most to recruiters?",
            "model": "I think preparing one concrete story about a real project helps far more than memorizing a generic elevator pitch. Recruiters talk to dozens of students with similar coursework, so sharing a specific obstacle you solved—like troubleshooting a lab test or organizing a team deadline—makes your conversation memorable. I also like researching three target companies beforehand so I can ask thoughtful questions about their current projects rather than just handing over my resume and asking whether they are hiring.",
            "tips": "เปรียบเทียบวิธีที่คนทั่วไปทำ (generic elevator pitch) กับวิธีที่โดดเด่นกว่า (one concrete project story + researching target companies) จะได้คำตอบที่มีน้ำหนักทันที"
          },
          {
            "q": "How do temporary shuttle detours or public transit delays affect your daily student routine, and how do you adapt?",
            "model": "Sudden route detours definitely add stress on mornings when I have lab quizzes or tight back-to-back classes. Whenever campus transit posts a construction alert, I immediately check the live tracking app the night before and shift my alarm fifteen minutes earlier. On pleasant days, I sometimes switch to campus bike-share stations so I'm not stuck in detour traffic lights. Having a simple backup route keeps one closed street from derailing my entire morning schedule.",
            "tips": "เล่าเป็นลำดับเหตุ-ผลและวิธีแก้ปัญหาจริง (เช็กแอปแจ้งเตือนล่วงหน้า + เผื่อเวลา 15 นาที + ใช้จักรยานเป็นแผนสำรอง)"
          },
          {
            "q": "Scientists often study forest fungi or two-thousand-year-old Roman concrete to solve modern problems. Why is looking back at nature or ancient engineering valuable today?",
            "model": "Nature and ancient builders spent centuries solving durability and resource-efficiency problems without modern energy-heavy factories. For instance, ancient Roman harbor concrete healed cracks naturally using volcanic ash and seawater, whereas modern cement emits huge amounts of carbon dioxide during manufacturing. Similarly, studying how forest fungi recycle tough wood fibers can inspire cleaner waste treatment. Studying those time-tested designs gives modern engineers sustainable shortcuts they might overlook if they only tested brand-new synthetic chemicals.",
            "tips": "ยกตัวอย่างคู่ที่เจาะจง (Roman volcanic-ash concrete กับ forest fungi recycling) เชื่อมกับประเด็นความยั่งยืนและลดพลังงาน จะฟังดูลึกซึ้งและตรงธีมมาก"
          },
          {
            "q": "If you could choose an internship that focuses mainly on field data collection or laboratory analysis, which would you pick and why?",
            "model": "I would choose a balanced track that starts in the field, though if I had to pick one focus, I'd lean toward laboratory analysis. I genuinely enjoy collecting real samples outdoors, yet the exciting puzzle happens inside the lab when you examine why a concrete core resisted saltwater or why fungal glow peaked overnight. Testing hypotheses under controlled instruments lets you uncover hidden mechanisms that aren't visible to the naked eye and turn raw field observations into useful engineering designs.",
            "tips": "เลือกจุดยืนชัดในประโยคแรก (I'd lean toward laboratory analysis) ยอมรับข้อดีของอีกฝั่งสั้น ๆ แล้วให้เหตุผลเจาะจงพร้อมตัวอย่างรูปธรรม"
          }
        ]
      }
    }
  },
  {
    "set": 5,
    "title": "Set 5 · Hydrothermal Vents, Choice Architecture & Campus Sustainability",
    "reading": {
      "stage1": {
        "cloze": {
          "title": "Chemosynthesis at Deep-Sea Vents",
          "intro": "Read the passage below and type the missing letters to complete each unfinished word.",
          "segments": [
            "Nearly half a century ago, marine geologists exploring the Galápagos Rift discovered thriving animal communities clustered around superheated ocean-floor springs. Unlike surface ecosystems that ",
            {
              "pre": "dep",
              "ans": "end"
            },
            " on sunlight for energy, vent organisms rely on chemosynthesis. Specialized bacteria ",
            {
              "pre": "oxi",
              "ans": "dize"
            },
            " hydrogen sulfide escaping from rocky ",
            {
              "pre": "fis",
              "ans": "sures"
            },
            " and use the released chemical energy to ",
            {
              "pre": "prod",
              "ans": "uce"
            },
            " organic nutrients. These microbes form the ",
            {
              "pre": "found",
              "ans": "ation"
            },
            " of a dense food web that supports blind shrimp, clams, and giant tube worms. Remarkably, adult tube worms lack mouths and depend entirely on microbes living ",
            {
              "pre": "ins",
              "ans": "ide"
            },
            " their tissues. Although surrounding ocean water ",
            {
              "pre": "rem",
              "ans": "ains"
            },
            " near freezing, fluids ",
            {
              "pre": "erup",
              "ans": "ting"
            },
            " from mineral chimneys can exceed three hundred degrees Celsius. Crushing hydrostatic ",
            {
              "pre": "pres",
              "ans": "sure"
            },
            " at depths below two thousand meters prevents this superheated water from ",
            {
              "pre": "boi",
              "ans": "ling"
            },
            "."
          ],
          "why": "1) depend (พึ่งพา — ใช้คู่กับ on)\n2) oxidize (ทำปฏิกิริยาออกซิเดชัน — กริยาของแบคทีเรียที่ใช้ไฮโดรเจนซัลไฟด์)\n3) fissures (รอยแยกบนเปลือกโลกใต้ทะเล — พหูพจน์หลัง rocky)\n4) produce (ผลิต — ใช้พลังงานเคมีผลิตสารอาหารอินทรีย์)\n5) foundation (รากฐาน — the foundation of a dense food web)\n6) inside (ภายใน — จุลินทรีย์อาศัยอยู่ภายในเนื้อเยื่อของหนอนท่อ)\n7) remains (ยังคงอยู่ — กริยาเอกพจน์ตาม ocean water)\n8) erupting (ที่พุ่งออกมา — participle ขยาย fluids)\n9) pressure (ความดัน — hydrostatic pressure = ความดันอุทกสถิต)\n10) boiling (เดือด — prevents water from boiling ตามหลังบุพบท from)"
        },
        "daily": [
          {
            "kind": "notice",
            "title": "Residence Life Notice · Kitchenette Composting Rules",
            "text": "CAMPUS SUSTAINABILITY OFFICE — RESIDENCE HALL COMPOSTING UPDATE\nEffective Monday, October 12\n\nGreen organics carts are now installed inside every residence hall kitchenette on floors 2 through 6. Please place fruit and vegetable scraps, coffee grounds, tea bags (staples removed), and unlined paper towels inside the green cart.\n\nDO NOT add plastic utensils, foil wrappers, dairy liquids, or takeout containers labeled 'compostable'—our municipal facility lacks the high-heat industrial digesters needed to break down bioplastics, so any bioplastic item causes the entire bin to be rejected as trash.\n\nStudent Eco-Reps empty carts nightly at 9:00 P.M. Report missing liners or odors via the Facilities QR code inside the elevator lobby.",
            "qs": [
              {
                "tag": "Daily · Detail",
                "q": "Why should students avoid placing 'compostable' takeout containers in the green carts?",
                "choices": [
                  "The local processing facility cannot break down bioplastics.",
                  "Eco-Reps only collect plastics on Friday evenings.",
                  "Takeout containers attract insects before 9:00 P.M.",
                  "The containers are too large to fit through the cart lids."
                ],
                "ans": 0,
                "why": "ตอบ \"The local processing facility cannot break down bioplastics.\" เพราะประกาศระบุชัดว่า municipal facility lacks the high-heat industrial digesters needed to break down bioplastics (โรงกำจัดของเมืองไม่มีเครื่องย่อยความร้อนสูงสำหรับพลาสติกชีวภาพ) จึงทำให้ทั้งถังถูกคัดทิ้งเป็นขยะทั่วไป"
              },
              {
                "tag": "Daily · Detail",
                "q": "What should a resident do if a kitchenette cart smells bad?",
                "choices": [
                  "Move the cart to the elevator lobby before 9:00 P.M.",
                  "Scan the QR code posted in the elevator lobby to notify Facilities.",
                  "Contact a municipal inspector by email.",
                  "Wash the cart with soap and place a plastic liner inside."
                ],
                "ans": 1,
                "why": "ตอบ \"Scan the QR code posted in the elevator lobby to notify Facilities.\" เพราะบรรทัดสุดท้ายบอกว่า Report missing liners or odors via the Facilities QR code inside the elevator lobby (แจ้งปัญหากลิ่นหรือถุงรองถังหมดผ่าน QR code ของฝ่ายอาคารสถานที่ในโถงลิฟต์)"
              }
            ]
          },
          {
            "kind": "email",
            "title": "E-mail · Behavioral Decision Lab Study Invitation",
            "text": "From: Prof. Nadia Chen, Behavioral Decision Lab <decisionlab@northbridge.edu>\nTo: Undergraduate Participant Pool\nSubject: 25-Minute Decision-Making Study — Room 314, Social Sciences Building\n\nDear Students,\n\nOur lab is recruiting participants aged 18 and older for a short computer-based study examining how menu layout and price framing affect meal selections. Sessions take approximately 25 minutes and run Tuesday through Thursday from 10:00 A.M. to 4:00 P.M.\n\nParticipants will receive a $12 campus dining voucher upon completion—or, if enrolled in PSY 101, may choose 1.0 research credit instead (not both). Please avoid eating a heavy meal within one hour before your slot, as mild appetite consistency helps keep responses comparable across participants. Sign up via the Sona portal at least 12 hours in advance.",
            "qs": [
              {
                "tag": "Daily · Negative Detail",
                "q": "Which of the following is NOT true about participating in the study?",
                "choices": [
                  "Volunteers must be at least eighteen years old.",
                  "Registration must be submitted at least half a day ahead.",
                  "PSY 101 students can receive both a dining voucher and course credit.",
                  "The task involves viewing food menu arrangements on a computer."
                ],
                "ans": 2,
                "why": "ตอบ \"PSY 101 students can receive both a dining voucher and course credit.\" เพราะอีเมลระบุว่าได้รับ $12 voucher OR 1.0 research credit (not both) จึงไม่สามารถรับทั้งสองอย่างพร้อมกันได้"
              },
              {
                "tag": "Daily · Purpose",
                "q": "Why does Professor Chen ask participants not to eat a heavy meal right before arriving?",
                "choices": [
                  "Free snacks will be served inside Room 314.",
                  "Students are required to taste test new cafeteria dishes.",
                  "Food odors interfere with the computer equipment in the lab.",
                  "Similar hunger levels help make the experimental data more consistent."
                ],
                "ans": 3,
                "why": "ตอบ \"Similar hunger levels help make the experimental data more consistent.\" เพราะอีเมลอธิบายว่า mild appetite consistency helps keep responses comparable across participants (ช่วยให้ระดับความหิวใกล้เคียงกันเพื่อเปรียบเทียบผลได้แม่นยำ)"
              }
            ]
          }
        ],
        "academic": {
          "title": "How Default Options Shape Everyday Choices",
          "topic": "Behavioral Economics",
          "paragraphs": [
            "Traditional economic theory assumes that individuals make decisions by carefully weighing all available information and selecting whatever outcome maximizes long-term personal benefit. Yet decades of behavioral research demonstrate that human judgment rarely operates with such cool precision. Instead, people frequently rely on mental shortcuts, especially when choices are complex, unfamiliar, or emotionally taxing. Because attention is scarce, the exact way options are arranged—a concept behavioral economists Richard Thaler and Cass Sunstein termed 'choice architecture'—exerts a surprisingly strong influence over final outcomes.",
            "One of the most powerful tools in choice architecture is the default rule, which determines what happens if a person takes no active step. In a landmark 2003 study, psychologists Eric Johnson and Daniel Goldstein compared organ-donation consent rates across European nations with similar cultural backgrounds. Countries requiring citizens to actively check a box to enroll often saw consent rates below 20 percent, whereas neighboring countries where individuals were automatically registered unless they opted out routinely exceeded 85 percent. Importantly, both policies preserved complete freedom of choice; only the path of least resistance differed.",
            "Researchers attribute this striking gap to a combination of cognitive inertia, implied endorsement, and loss aversion. First, filling out forms imposes modest mental and time costs—known as 'friction'—that encourage procrastination. Second, people often interpret a pre-selected option as a sensible recommendation from policymakers or experts. Finally, once an individual views the default state as the status quo, switching away from it can feel like giving up a secure baseline, making inaction psychologically comfortable.",
            "Similar patterns appear in workplace retirement savings and university sustainability initiatives. When large employers switched 401(k) retirement plans from opt-in to automatic enrollment, participation among newly hired workers jumped dramatically, particularly among younger and lower-income employees. Critics nevertheless caution that choice architects must act transparently: poorly chosen defaults can steer people into sub-optimal commitments, such as high-fee subscriptions, when opt-out procedures are hidden or overly burdensome."
          ],
          "notes": "คำศัพท์สำคัญ:\n• choice architecture = การออกแบบบริบท/ลำดับตัวเลือกเพื่อชี้นำการตัดสินใจโดยไม่บังคับ\n• default rule = กติกาค่าเริ่มต้น (สิ่งที่จะเกิดขึ้นหากผู้ใช้ไม่กดเปลี่ยน)\n• friction = อุปสรรคเล็กๆ น้อยๆ ด้านเวลา/ขั้นตอนที่ทำให้คนผัดวันประกันพรุ่ง\n• implied endorsement = การตีความว่าตัวเลือกตั้งต้นคือคำแนะนำที่น่าเชื่อถือจากผู้เชี่ยวชาญ",
          "tips": "ข้อสอบ TOEFL 2026 มักถามความหมายคำศัพท์ในบริบท (เช่น friction, endorsement) และถามเหตุผลที่ผู้เขียนยกตัวอย่างประเทศในยุโรปหรือแผนเกษียณ 401(k) — ให้จับคู่ 'กลไกทางจิตวิทยา' กับ 'ตัวอย่างจริง' ให้แม่นยำ",
          "qs": [
            {
              "tag": "Academic · Main Idea",
              "q": "What is the main point of the passage?",
              "choices": [
                "People make purely rational economic calculations when given enough time.",
                "The structure and default settings of choices strongly affect what people decide.",
                "European organ-donation laws are stricter than workplace retirement regulations.",
                "Mental shortcuts prevent individuals from understanding subscription fees."
              ],
              "ans": 1,
              "why": "ตอบ \"The structure and default settings of choices strongly affect what people decide.\" เพราะทั้งบทความอธิบายว่าการจัดวางตัวเลือก (choice architecture) และค่าเริ่มต้น (default rule) ส่งผลอย่างมากต่อการตัดสินใจจริงของมนุษย์"
            },
            {
              "tag": "Academic · Detail",
              "q": "According to paragraph 2, what did Johnson and Goldstein's 2003 study show?",
              "choices": [
                "Cultural differences fully explain why organ-donation rates vary in Europe.",
                "Most citizens refuse to donate organs when asked directly on government forms.",
                "Consent rates were vastly higher in countries using an opt-out default system.",
                "Removing opt-out forms eliminated freedom of choice for citizens."
              ],
              "ans": 2,
              "why": "ตอบ \"Consent rates were vastly higher in countries using an opt-out default system.\" เพราะย่อหน้า 2 ระบุว่าประเทศที่ลงทะเบียนให้อัตโนมัติเว้นแต่จะขอยกเลิก (opt out) มีอัตราความยินยอมสูงกว่า 85% เทียบกับไม่ถึง 20% ในระบบที่ต้องติ๊กสมัครเอง"
            },
            {
              "tag": "Academic · Vocabulary",
              "q": "The word 'friction' in paragraph 3 is closest in meaning to",
              "choices": [
                "inconvenient effort",
                "mechanical heat",
                "social disagreement",
                "legal restriction"
              ],
              "ans": 0,
              "why": "ตอบ inconvenient effort (ความยุ่งยาก/ภาระเล็กน้อยด้านเวลาและความคิด) เพราะข้อความนิยามว่า modest mental and time costs ที่ชวนให้ผัดวันประกันพรุ่ง"
            },
            {
              "tag": "Academic · Negative Detail",
              "q": "Which of the following is NOT mentioned in paragraph 3 as a reason people stick with defaults?",
              "choices": [
                "Completing paperwork requires effort and encourages delay.",
                "People assume the preset choice reflects expert guidance.",
                "Leaving the baseline option can feel like losing something familiar.",
                "Governments impose financial penalties on people who switch options."
              ],
              "ans": 3,
              "why": "ตอบ \"Governments impose financial penalties on people who switch options.\" เพราะย่อหน้า 3 พูดถึง cognitive inertia/friction, implied endorsement และ loss aversion แต่ไม่ได้พูดถึงค่าปรับจากรัฐบาล"
            },
            {
              "tag": "Academic · Rhetorical Purpose",
              "q": "Why does the author mention 'high-fee subscriptions' in paragraph 4?",
              "choices": [
                "To illustrate how hidden or difficult opt-out defaults can disadvantage consumers",
                "To compare retirement savings plans unfavorably with consumer memberships",
                "To argue that automatic enrollment should be banned from workplaces",
                "To show that younger employees spend too much on digital services"
              ],
              "ans": 0,
              "why": "ตอบ \"To illustrate how hidden or difficult opt-out defaults can disadvantage consumers\" เพราะผู้เขียนยกตัวอย่าง high-fee subscriptions เพื่อเตือนว่าหากขั้นตอนการยกเลิกถูกซ่อนหรือยุ่งยาก ค่าเริ่มต้นที่ออกแบบไม่ดีอาจเอาเปรียบผู้บริโภคได้"
            }
          ]
        }
      },
      "stage2a": {
        "cloze": {
          "title": "Sorting Waste in University Residence Halls",
          "intro": "Complete the 10 unfinished words in this campus sustainability report.",
          "segments": [
            "Each autumn, thousands of students move into campus dormitories and generate surprising amounts of daily packaging and leftover food. To reduce landfill waste, the housing office recently ",
            {
              "pre": "plac",
              "ans": "ed"
            },
            " color-coded compost and recycling bins inside every floor ",
            {
              "pre": "lou",
              "ans": "nge"
            },
            ". Green bins ",
            {
              "pre": "coll",
              "ans": "ect"
            },
            " fruit peels, coffee grounds, and soiled paper napkins that can be ",
            {
              "pre": "turn",
              "ans": "ed"
            },
            " into rich soil. However, even a ",
            {
              "pre": "sin",
              "ans": "gle"
            },
            " plastic bottle tossed into the compost bin can ",
            {
              "pre": "spo",
              "ans": "il"
            },
            " an entire batch of organic material. For that ",
            {
              "pre": "rea",
              "ans": "son"
            },
            ", student volunteers post clear ",
            {
              "pre": "pict",
              "ans": "ures"
            },
            " above each container to help residents sort items ",
            {
              "pre": "corr",
              "ans": "ectly"
            },
            ". When dorm residents follow these simple ",
            {
              "pre": "guid",
              "ans": "elines"
            },
            ", campus dining gardens receive free nutrient-rich fertilizer every spring."
          ],
          "why": "1) placed (วางไว้ — รูปอดีตหลังคำว่า recently)\n2) lounge (ห้องนั่งเล่นส่วนกลางประจำชั้น — floor lounge)\n3) collect (รวบรวม — ถังสีเขียวใช้รวบรวมเศษอาหาร)\n4) turned (ถูกแปรรูป — be turned into rich soil)\n5) single (แม้เพียงชิ้นเดียว — a single plastic bottle)\n6) spoil (ทำให้เสียทั้งล็อต — spoil an entire batch)\n7) reason (เหตุผล — for that reason)\n8) pictures (รูปภาพประกอบ — clear pictures above each container)\n9) correctly (อย่างถูกต้อง — กริยาวิเศษณ์ขยาย sort items)\n10) guidelines (แนวทางปฏิบัติ — follow these simple guidelines)"
        },
        "daily": [
          {
            "kind": "chat",
            "title": "Group Chat · Cedar Hall Eco-Reps",
            "text": "[Cedar Hall Eco-Reps · Friday, 4:15 P.M.]\n\nTariq (4:15 P.M.): Hey everyone—Facilities just weighed this week's compost bins. Floors 2 and 3 had zero plastic contamination, but Floor 4 had three greasy pizza boxes stuffed into the blue recycling chute.\nMei (4:18 P.M.): Oh no! People still think all cardboard goes in blue recycling. Wait—can greasy pizza boxes go in the green compost cart instead?\nTariq (4:20 P.M.): Yes! If the lid is clean, tear off the top half for blue paper recycling, and rip up the greasy bottom half for green compost. Just remove any little plastic pizza-saver tripod first!\nSam (4:23 P.M.): I'll tape a quick two-step diagram onto the Floor 4 trash closet door tonight before dinner. Also, reminder that Sunday's zero-waste mug swap starts at 2:00 P.M. in the main courtyard—rain location is Cedar Lobby.",
            "qs": [
              {
                "tag": "Daily · Detail",
                "q": "What mistake occurred on Floor 4 this week?",
                "choices": [
                  "Students threw clean paper into the green compost cart.",
                  "Greasy pizza boxes were placed inside the blue recycling chute.",
                  "Someone removed the sorting diagrams from the trash closet door.",
                  "Compost carts were left outside in the courtyard."
                ],
                "ans": 1,
                "why": "ตอบ \"Greasy pizza boxes were placed inside the blue recycling chute.\" เพราะ Tariq แจ้งว่า Floor 4 had three greasy pizza boxes stuffed into the blue recycling chute"
              },
              {
                "tag": "Daily · Procedure",
                "q": "According to Tariq, what should residents do with a pizza box that has a clean lid and a greasy bottom?",
                "choices": [
                  "Put the whole box into regular landfill trash.",
                  "Wash the grease off before recycling the whole box.",
                  "Recycle the clean lid in blue and compost the greasy bottom in green.",
                  "Leave the plastic tripod inside the green compost cart."
                ],
                "ans": 2,
                "why": "ตอบ \"Recycle the clean lid in blue and compost the greasy bottom in green.\" เพราะ Tariq อธิบายว่าให้ฉีกฝาที่สะอาดทิ้งถังฟ้า (blue paper recycling) และฉีกฐานที่เปื้อนน้ำมันทิ้งถังปุ๋ยหมักสีเขียว (green compost) โดยเอาชิ้นพลาสติกเล็กๆ ออกก่อน"
              },
              {
                "tag": "Daily · Detail",
                "q": "Where will Sunday's mug swap take place if the weather is wet?",
                "choices": [
                  "In the Floor 4 kitchenette",
                  "Inside the Facilities office",
                  "Behind the dining hall",
                  "In Cedar Lobby"
                ],
                "ans": 3,
                "why": "ตอบ In Cedar Lobby เพราะ Sam ระบุว่า rain location is Cedar Lobby (สถานที่สำรองหากฝนตกคือโถงอาคาร Cedar)"
              }
            ]
          }
        ],
        "academic": {
          "title": "Life Around Black Smokers on the Ocean Floor",
          "topic": "Marine Biology",
          "paragraphs": [
            "Before 1977, biologists believed that every complex ecosystem on Earth depended directly or indirectly on sunlight. Without solar energy, plants and algae could not perform photosynthesis, so animals living on the dark abyssal ocean floor were assumed to survive solely on scraps of dead matter drifting down from sunlit surface waters. That view changed forever when scientists aboard the deep-diving submersible Alvin discovered towering mineral chimneys along the Galápagos Rift at depths exceeding two thousand five hundred meters.",
            "These underwater chimneys, nicknamed 'black smokers,' form near volcanic zones where tectonic plates pull apart. Cold seawater seeps deep into cracks in the basaltic seafloor and gets heated by molten rock below. As the superheated water rises back toward the surface, it dissolves sulfur, iron, copper, and zinc from surrounding stone. When the hot, mineral-rich jet bursts into near-freezing ocean water, those dissolved metals rapidly solidify into dark, chimney-like towers that can grow several meters taller each year.",
            "Surrounding the vents, researchers found astonishingly dense colonies of shrimp, white crabs, clams, and two-meter-long giant tube worms known as Riftia pachyptila. Because light never reaches these depths, no green plants live there. Instead, specialized microbes use chemical energy locked inside hydrogen sulfide gas—a compound toxic to most surface creatures—to turn carbon dioxide into sugars, a process called chemosynthesis.",
            "Giant tube worms demonstrate an extraordinary partnership with these microbes. Adult worms possess bright red feathery plumes that absorb both oxygen from seawater and hydrogen sulfide from vent fluids. Specialized blood proteins bind both chemicals safely and carry them to an internal organ packed with billions of symbiotic bacteria. In return for shelter and raw materials, the bacteria supply all the food the worm needs to grow rapidly in one of Earth's harshest environments."
          ],
          "notes": "ประเด็นหลักของบทความ:\n• ก่อนปี 1977 นักชีววิทยาเชื่อว่าสิ่งมีชีวิตทุกชนิดต้องพึ่งพาแสงอาทิตย์และห่วงโซ่อาหารจากผิวน้ำ\n• Black smokers เกิดจากน้ำทะเลเย็นซึมลงรอยแตกเปลือกโลก ถูกความร้อนใต้พิภพต้มจนละลายแร่ธาตุแล้วพุ่งกลับออกมาตกตะกอนเป็นปล่องสีดำ\n• หนอนท่อ Riftia pachyptila อาศัยแบบพึ่งพากับแบคทีเรียในอวัยวะภายใน โดยใช้ขนแดงดูดทั้งออกซิเจนและก๊าซไฮโดรเจนซัลไฟด์มาเลี้ยงแบคทีเรีย",
          "tips": "ในด่าน Stage 2A บทความจะมีโครงสร้างเหตุและผลชัดเจน จดโน้ตลำดับขั้นตอนการเกิด Black smoker และบทบาทของอวัยวะแต่ละส่วนของหนอนท่อ จะช่วยตอบคำถามรายละเอียดได้เร็วมาก",
          "qs": [
            {
              "tag": "Academic · Contrast",
              "q": "Before 1977, how did biologists think deep-sea floor animals obtained their food?",
              "choices": [
                "By absorbing dissolved metals from volcanic stone",
                "From bits of organic matter sinking down from surface waters",
                "By hunting glowing fish near underwater mountains",
                "Through photosynthesis using faint moonlight"
              ],
              "ans": 1,
              "why": "ตอบ \"From bits of organic matter sinking down from surface waters\" เพราะย่อหน้า 1 ระบุว่าก่อนปี 1977 เชื่อกันว่าสัตว์ก้นสมุทรอยู่รอดได้จาก scraps of dead matter drifting down from sunlit surface waters (ซากอินทรีย์ที่ตกลงมาจากผิวน้ำ)"
            },
            {
              "tag": "Academic · Process",
              "q": "According to paragraph 2, why do black smokers look like dark towers?",
              "choices": [
                "Volcanic lava cools instantly on contact with coral reefs.",
                "Dead tube worms harden into dark shells around the vents.",
                "Hot dissolved minerals turn solid when they hit icy seawater.",
                "Coal deposits wash out of deep ocean trenches."
              ],
              "ans": 2,
              "why": "ตอบ \"Hot dissolved minerals turn solid when they hit icy seawater.\" เพราะย่อหน้า 2 อธิบายว่าเมื่อน้ำร้อนจัดที่มีแร่ธาตุละลายอยู่พุ่งออกมาปะทะน้ำทะเลเย็นจัด แร่โลหะจะตกตะกอนแข็งตัวอย่างรวดเร็ว (rapidly solidify) เป็นปล่องสีดำ"
            },
            {
              "tag": "Academic · Vocabulary",
              "q": "The word 'symbiotic' in paragraph 4 is closest in meaning to",
              "choices": [
                "mutually beneficial",
                "fast-moving",
                "unexpectedly harmful",
                "temporary"
              ],
              "ans": 0,
              "why": "ตอบ mutually beneficial (เกื้อกูลกันทั้งสองฝ่าย) เพราะประโยคถัดไปอธิบายว่าหนอนท่อให้ที่พักพิงและสารตั้งต้น ส่วนแบคทีเรียผลิตอาหารทั้งหมดให้หนอน"
            },
            {
              "tag": "Academic · Detail",
              "q": "What is the role of the giant tube worm's bright red plumes?",
              "choices": [
                "They frighten away deep-sea crabs and blind shrimp.",
                "They collect both oxygen and hydrogen sulfide from the water.",
                "They capture tiny pieces of dead plants drifting overhead.",
                "They release heat to cool down the inside of the worm's tube."
              ],
              "ans": 1,
              "why": "ตอบ \"They collect both oxygen and hydrogen sulfide from the water.\" เพราะย่อหน้า 4 ระบุชัดว่า bright red feathery plumes that absorb both oxygen from seawater and hydrogen sulfide from vent fluids"
            },
            {
              "tag": "Academic · Inference",
              "q": "What can be inferred about hydrogen sulfide from the passage?",
              "choices": [
                "It is normally poisonous to surface organisms, yet vent bacteria depend on it.",
                "It is found only inside the shells of deep-sea clams.",
                "It prevents iron and copper from dissolving in hot water.",
                "It turns seawater blue around the Galápagos Rift."
              ],
              "ans": 0,
              "why": "ตอบ \"It is normally poisonous to surface organisms, yet vent bacteria depend on it.\" เพราะย่อหน้า 3 เรียกไฮโดรเจนซัลไฟด์ว่า a compound toxic to most surface creatures แต่แบคทีเรียใต้ทะเลลึกกลับใช้มันสร้างน้ำตาลผ่าน chemosynthesis"
            }
          ]
        }
      },
      "stage2b": {
        "cloze": {
          "title": "Hyperbolic Discounting and Consumer Inertia",
          "intro": "Complete the 10 unfinished words in this behavioral economics passage.",
          "segments": [
            "Classical economic models assume that individuals evaluate future costs and benefits at a constant exponential rate over time. Empirical studies in behavioral economics, however, ",
            {
              "pre": "demons",
              "ans": "trate"
            },
            " that people heavily overweight immediate gratification relative to ",
            {
              "pre": "del",
              "ans": "ayed"
            },
            " rewards. This cognitive ",
            {
              "pre": "tend",
              "ans": "ency"
            },
            ", known as present bias, explains why consumers repeatedly ",
            {
              "pre": "post",
              "ans": "pone"
            },
            " enrolling in retirement savings plans even when employers offer ",
            {
              "pre": "gene",
              "ans": "rous"
            },
            " matching contributions. Because signing up requires minor upfront ",
            {
              "pre": "eff",
              "ans": "ort"
            },
            " while the financial payoff lies decades ahead, procrastination ",
            {
              "pre": "rout",
              "ans": "inely"
            },
            " overrides long-term intentions. Switching a plan from opt-in to automatic enrollment ",
            {
              "pre": "elimin",
              "ans": "ates"
            },
            " that initial friction without ",
            {
              "pre": "restr",
              "ans": "icting"
            },
            " anyone's freedom to opt out, illustrating how subtle institutional ",
            {
              "pre": "des",
              "ans": "ign"
            },
            " shapes financial outcomes."
          ],
          "why": "1) demonstrate (แสดงให้เห็น — กริยาของ Empirical studies)\n2) delayed (ที่ล่าช้าออกไป — ตรงข้ามกับ immediate gratification)\n3) tendency (แนวโน้มทางความคิด — This cognitive tendency)\n4) postpone (เลื่อนออกไป — repeatedly postpone enrolling)\n5) generous (เอื้อเฟื้อ/ให้มาก — generous matching contributions)\n6) effort (ความพยายาม — minor upfront effort)\n7) routinely (เป็นประจำ — กริยาวิเศษณ์ขยาย overrides)\n8) eliminates (ขจัดออกไป — กริยาเอกพจน์ตาม Switching a plan...)\n9) restricting (จำกัด — without restricting anyone's freedom)\n10) design (การออกแบบเชิงสถาบัน — subtle institutional design)"
        },
        "daily": [
          {
            "kind": "memo",
            "title": "Internal Memo · Phase II Zero-Waste Quad Audit",
            "text": "MEMORANDUM — UNIVERSITY OPERATIONS & SUSTAINABILITY\nTo: Residence Hall Directors & Dining Managers\nFrom: Elena Alvarez, Director of Zero-Waste Initiatives\nSubject: Phase II Compost Metrics & Tipping-Fee Reallocation\n\nDuring the autumn audit, North Quad achieved a 68% organic diversion rate—well above the 55% baseline—largely due to pairing compact counter-top caddies with side-by-side triple bins in floor pantries. West Quad, by contrast, posted 39% diversion because compost carts remained stationed outside behind loading bays.\n\nConsequently, tipping fees saved from reduced landfill tonnage ($14,200 across both quads) will fund two measures in Spring: (1) retrofitting West Quad pantries with indoor triple-bin stations, and (2) launching a dorm-level rebate returning 25% of net waste-hauling savings toward resident hall activity budgets whenever quarterly contamination stays under 8%. Quads exceeding 15% contamination will pause the rebate until a peer-audit recheck passes.",
            "qs": [
              {
                "tag": "Daily · Cause & Effect",
                "q": "Why did West Quad record a substantially lower organic diversion rate than North Quad?",
                "choices": [
                  "West Quad residents generated far less food waste per student.",
                  "Facilities stopped picking up West Quad carts during the autumn audit.",
                  "Its compost containers were inconveniently located outdoors behind loading bays.",
                  "West Quad dining halls banned counter-top food caddies."
                ],
                "ans": 2,
                "why": "ตอบ \"Its compost containers were inconveniently located outdoors behind loading bays.\" เพราะบันทึกชี้ว่า West Quad ทำได้เพียง 39% เพราะถังปุ๋ยหมักยังตั้งอยู่นอกอาคารด้านหลังจุดขนถ่ายสินค้า (remained stationed outside behind loading bays) ต่างจาก North Quad ที่มีถัง 3 ช่องวางเคียงกันในห้องครัวเล็ก"
              },
              {
                "tag": "Daily · Policy Condition",
                "q": "Under the new Spring incentive program, what must a residence hall achieve to receive activity budget rebates?",
                "choices": [
                  "Maintain an organic diversion rate above 85% every month",
                  "Contribute $14,200 toward pantry renovations",
                  "Eliminate landfill hauling costs entirely",
                  "Hold quarterly contamination below 8%"
                ],
                "ans": 3,
                "why": "ตอบ \"Hold quarterly contamination below 8%\" เพราะโครงการกำหนดชัดเจนว่าจะคืนเงินส่วนประหยัด 25% ให้หอพัก whenever quarterly contamination stays under 8%"
              },
              {
                "tag": "Daily · Inference",
                "q": "What does the $14,200 figure represent in the memo?",
                "choices": [
                  "The total cost of purchasing triple-bin stations for North Quad",
                  "A penalty charged to West Quad for high contamination",
                  "Money saved by sending less trash to landfills during the audit",
                  "The annual stipend paid to Student Eco-Reps across campus"
                ],
                "ans": 2,
                "why": "ตอบ \"Money saved by sending less trash to landfills during the audit\" เพราะ tipping fees saved from reduced landfill tonnage ($14,200) หมายถึงค่าธรรมเนียมทิ้งขยะฝังกลบที่ประหยัดได้จากการลดปริมาณขยะลงหลุมฝังกลบ"
              }
            ]
          }
        ],
        "academic": {
          "title": "Subsea Vent Geochemistry and Hypotheses for the Origin of Life",
          "topic": "Geobiology & Astrobiology",
          "paragraphs": [
            "Although volcanic black smokers dominated early hypotheses regarding the emergence of terrestrial life, geochemists have increasingly turned their attention toward a fundamentally different class of seafloor springs: alkaline hydrothermal vents. Discovered in 2000 at the Mid-Atlantic Ridge's Lost City field, these vents are driven not by direct magmatic eruption, but by serpentinization—a slow exothermic chemical reaction between seawater and magnesium-rich mantle rocks exposed along tectonic faults. Rather than spewing scorching, acidic black plumes, Lost City chimneys discharge milder, highly alkaline fluids rich in dissolved hydrogen and methane.",
            "This contrast in fluid chemistry carries profound implications for prebiotic synthesis. Black smokers emit violently turbulent jets exceeding 350 degrees Celsius, an environment arguably too destructive to sustain fragile proto-metabolic molecules for long. Alkaline vents, by comparison, generate gentle temperatures between 40 and 90 degrees Celsius inside porous, honeycomb-like carbonate towers. Because these microscopic mineral pores concentrate organic precursors against iron-sulfur catalytic surfaces, they function analogously to primitive reaction chambers.",
            "Crucially, alkaline vent systems naturally produce an electrochemical gradient remarkably reminiscent of modern cellular bioenergetics. Whereas today's cells pump protons outward across lipid membranes to drive adenosine triphosphate (ATP) synthesis, early alkaline vents mixed basic, hydroxide-rich interior fluids (pH 9 to 11) with mildly acidic ancient ocean water (pH 5 to 6) enriched in dissolved carbon dioxide. Proponents such as Nick Lane and William Martin argue that thin inorganic mineral walls separating these two fluids supplied a ready-made proton motive force capable of reducing carbon dioxide into simple organic acids.",
            "Skeptics nevertheless raise substantial hurdles for the submarine-vent model. Critics note that mineral pores are considerably leakier than evolved biological membranes and question whether key steps—particularly RNA polymerization, which normally requires wet-dry cycling to expel water—could unfold reliably under continuous immersion. Ongoing laboratory flow-reactor experiments therefore seek to test whether fluctuating mineral precipitates or lipid coatings within vent pores could overcome these thermodynamic bottlenecks."
          ],
          "notes": "ความแตกต่างระหว่างปล่อง 2 ชนิด (ออกสอบบ่อยใน Stage 2B):\n• Black smokers: ร้อนจัด (>350°C), เป็นกรด, ขับเคลื่อนด้วยแมกมา → ปั่นป่วนเกินไปสำหรับโมเลกุลเปราะบาง\n• Alkaline vents (Lost City): อุ่นกว่า (40–90°C), เป็นด่าง (pH 9–11), เกิดจากปฏิกิริยา serpentinization → มีรูพรุนคาร์บอเนตทำหน้าที่คล้ายห้องปฏิกิริยาดึกดำบรรพ์\n• จุดแข็ง: สร้างความต่างศักย์โปรตอน (proton motive force) จากการแยกของเหลวด่างกับมหาสมุทรดึกดำบรรพ์ที่เป็นกรดอ่อนๆ\n• ข้อโต้แย้ง: ผนังแร่รั่วไหลง่าย และการสร้างสาย RNA มักต้องการวัฏจักรเปียก-แห้ง (wet-dry cycling)",
          "tips": "ในด่าน Stage 2B ตัวเลือกหลอกจะสลับคุณสมบัติของ Black smokers กับ Alkaline vents หรือกล่าวเกินจริงว่านักวิทยาศาสตร์ 'พิสูจน์ได้แล้วทั้งหมด' — จับคำเชื่อมแสดงความระมัดระวัง เช่น arguably, skeptics, seek to test ให้แม่น",
          "qs": [
            {
              "tag": "Academic · Contrast",
              "q": "According to paragraph 1, how do Lost City vents differ from volcanic black smokers?",
              "choices": [
                "They are powered by rock-water reactions rather than molten magma.",
                "They release fluids that are hotter and far more acidic.",
                "They exist only in shallow coastal lagoons rather than mid-ocean ridges.",
                "They fail to produce dissolved hydrogen or methane."
              ],
              "ans": 0,
              "why": "ตอบ \"They are powered by rock-water reactions rather than molten magma.\" เพราะย่อหน้า 1 อธิบายว่า Lost City เกิดจากปฏิกิริยา serpentinization ระหว่างน้ำทะเลกับหินแมนเทิล (driven not by direct magmatic eruption, but by serpentinization) และปล่อยของเหลวที่อุ่นกว่าและเป็นด่าง"
            },
            {
              "tag": "Academic · Analogy",
              "q": "Why does the author compare microscopic pores in alkaline chimneys to 'primitive reaction chambers' in paragraph 2?",
              "choices": [
                "They prevent cold seawater from entering the rocky seafloor.",
                "They trap and concentrate simple molecules next to mineral catalysts.",
                "They protect ancient microbes from volcanic eruptions.",
                "They generate electrical sparks at temperatures above 350 degrees."
              ],
              "ans": 1,
              "why": "ตอบ \"They trap and concentrate simple molecules next to mineral catalysts.\" เพราะย่อหน้า 2 ระบุว่า microscopic mineral pores concentrate organic precursors against iron-sulfur catalytic surfaces จึงเปรียบเสมือนห้องทำปฏิกิริยาดึกดำบรรพ์"
            },
            {
              "tag": "Academic · Mechanism",
              "q": "In paragraph 3, what created the proposed 'proton motive force' in ancient alkaline vents?",
              "choices": [
                "Sunlight penetrating shallow tropical seas",
                "Carbon dioxide bubbling up from molten tectonic plates",
                "Modern lipid membranes evolving inside iron chimneys",
                "The boundary between alkaline vent fluids and slightly acidic ocean water"
              ],
              "ans": 3,
              "why": "ตอบ \"The boundary between alkaline vent fluids and slightly acidic ocean water\" เพราะย่อหน้า 3 ชี้ว่าผนังแร่บางๆ ที่คั่นระหว่างของเหลวด่าง (pH 9–11) กับน้ำทะเลโบราณที่เป็นกรดอ่อนๆ (pH 5–6) ก่อให้เกิดแรงขับเคลื่อนโปรตอนตามธรรมชาติ"
            },
            {
              "tag": "Academic · Challenge",
              "q": "Which of the following is mentioned in paragraph 4 as a major criticism of the alkaline-vent hypothesis?",
              "choices": [
                "Ancient oceans lacked sufficient dissolved carbon dioxide.",
                "Laboratory flow reactors cannot simulate 90-degree water temperatures.",
                "Permanent underwater immersion conflicts with reactions requiring wet-dry cycles.",
                "Serpentinization consumes all available iron-sulfur catalysts."
              ],
              "ans": 2,
              "why": "ตอบ \"Permanent underwater immersion conflicts with reactions requiring wet-dry cycles.\" เพราะย่อหน้า 4 ระบุว่า RNA polymerization ปกติต้องการ wet-dry cycling เพื่อกำจัดน้ำออก จึงเกิดข้อกังขาว่าจะเกิดขึ้นได้อย่างเสถียรใต้น้ำตลอดเวลา (continuous immersion) หรือไม่"
            },
            {
              "tag": "Academic · Attitude",
              "q": "Which statement best reflects the author's overall stance toward the alkaline-vent origin-of-life hypothesis?",
              "choices": [
                "It offers compelling geochemical advantages over black smokers, though key experimental questions remain unresolved.",
                "It has been conclusively disproven because mineral walls are too porous.",
                "It is less plausible than black smokers for producing early metabolic molecules.",
                "It demonstrates that lipid membranes evolved prior to any organic acids."
              ],
              "ans": 0,
              "why": "ตอบ \"It offers compelling geochemical advantages over black smokers, though key experimental questions remain unresolved.\" เพราะผู้เขียนนำเสนอข้อได้เปรียบทั้งด้านอุณหภูมิ รูพรุน และความต่างศักย์โปรตอน ขณะเดียวกันก็ให้พื้นที่แก่ข้อโต้แย้งและการทดลองที่ยังต้องทดสอบต่อในย่อหน้าสุดท้าย"
            }
          ]
        }
      }
    },
    "listening": {
      "stage1": {
        "responses": [
          {
            "speaker": "f",
            "prompt": "Excuse me, could you tell me whether the campus compost drop-off kiosk stays open past six on Fridays?",
            "choices": [
              "I took the recycling survey earlier this morning.",
              "It locks at five-thirty, actually, though the outdoor bin beside the dining hall is open anytime.",
              "Yes, the cafeteria stopped serving hot soup an hour ago.",
              "You'll need to bring your own stainless-steel water bottle."
            ],
            "ans": 1,
            "why": "ตอบ \"It locks at five-thirty, actually, though the outdoor bin beside the dining hall is open anytime.\" เพราะคำถามถามเวลาเปิด-ปิดของจุดรับปุ๋ยหมักวันศุกร์ ตัวเลือกนี้ตอบตรงประเด็นว่าปิดเวลา 17:30 น. พร้อมแนะนำถังกลางแจ้งที่ใช้ได้ตลอดเวลา",
            "q": "Choose the best response.",
            "accent": "us"
          },
          {
            "speaker": "m",
            "prompt": "Didn't Professor Lin say the behavioral economics reading response was pushed back to Wednesday?",
            "choices": [
              "We always choose the cheaper meal plan before midterms.",
              "No, I haven't read the chapter about hydrothermal vents either.",
              "Right, the auditorium seats about two hundred students.",
              "She moved the quiz to Friday, not the reading response—that's still due tonight."
            ],
            "ans": 3,
            "why": "ตอบ \"She moved the quiz to Friday, not the reading response—that's still due tonight.\" เพราะช่วยแก้ความเข้าใจผิดอย่างตรงจุดว่าอาจารย์เลื่อนเฉพาะควิซไปวันศุกร์ ส่วนงานเขียนตอบบทอ่านยังส่งคืนนี้ตามเดิม",
            "q": "Choose the best response.",
            "accent": "us"
          },
          {
            "speaker": "f",
            "prompt": "Would you mind covering my shift at the dorm waste-audit table for twenty minutes while I grab my lab coat?",
            "choices": [
              "The science building was renovated two summers ago.",
              "Not at all—just show me where the tally sheet is before you head out.",
              "I'm afraid I already threw my plastic cup in the trash.",
              "Twenty minutes isn't long enough to finish the lecture."
            ],
            "ans": 1,
            "why": "ตอบ \"Not at all—just show me where the tally sheet is before you head out.\" เพราะ 'Not at all' เป็นการตอบรับคำขอ 'Would you mind...' อย่างเป็นธรรมชาติ พร้อมถามหาใบจดคะแนนก่อนเพื่อนออกไป",
            "q": "Choose the best response.",
            "accent": "uk"
          },
          {
            "speaker": "m",
            "prompt": "Why don't we test our survey layout on ten classmates before emailing it to the whole residence hall?",
            "choices": [
              "We sent the final report to the housing director last Tuesday.",
              "Sure, ten people fit easily around the dining hall tables.",
              "Good call—catching confusing wording early will save us plenty of headaches later.",
              "Because the economics exam covers chapters four through seven."
            ],
            "ans": 2,
            "why": "ตอบ \"Good call—catching confusing wording early will save us plenty of headaches later.\" เพราะเห็นด้วยกับข้อเสนอให้ทดลองแบบสอบถามกลุ่มเล็กก่อน (pilot test) เพื่อเก็บข้อผิดพลาดเรื่องถ้อยคำตั้งแต่เนิ่นๆ",
            "q": "Choose the best response.",
            "accent": "us"
          }
        ],
        "conversation": {
          "title": "Conversation · Fixing Compost Contamination in Maple Hall",
          "lines": [
            {
              "role": "Student (Noah)",
              "acc": "us",
              "sex": "m",
              "text": "Hi Maya, do you have a minute? I'm the floor rep for third-floor Maple Hall, and we keep getting warning tags on our kitchen compost bin."
            },
            {
              "role": "Sustainability Coordinator (Maya)",
              "acc": "us",
              "sex": "f",
              "text": "Come on in, Noah. Yeah, I saw Maple Three on this week's facilities log. What's ending up in there?"
            },
            {
              "role": "Student (Noah)",
              "acc": "us",
              "sex": "m",
              "text": "Mostly coffee cup lids and those shiny foil-lined snack bags. I reminded everyone at our floor meeting last Sunday, and people nodded, yet the exact same trash showed up Monday morning."
            },
            {
              "role": "Sustainability Coordinator (Maya)",
              "acc": "us",
              "sex": "f",
              "text": "Honestly, lectures rarely stick when someone's rushing out the door with a cup in one hand. Tell me where the bins sit right now."
            },
            {
              "role": "Student (Noah)",
              "acc": "us",
              "sex": "m",
              "text": "Well, the green compost bin is tucked right inside the kitchenette doorway, while the regular trash can is way over on the far side by the sink."
            },
            {
              "role": "Sustainability Coordinator (Maya)",
              "acc": "us",
              "sex": "f",
              "text": "Aha—there's your culprit. People default to whichever bin is closest to their hand. First, pair all three bins—compost, recycling, and landfill—side by side right next to the door so nobody walks past the green bin just to save five steps."
            },
            {
              "role": "Student (Noah)",
              "acc": "us",
              "sex": "m",
              "text": "That makes total sense. Should I also print out a detailed list of acceptable items?"
            },
            {
              "role": "Sustainability Coordinator (Maya)",
              "acc": "us",
              "sex": "f",
              "text": "Skip long paragraphs—use our photo plaques with three 'Yes' photos and three big red-X photos, mounted at eye level directly above the lids. Also, swap the wide open lid for a smaller circular slot on the compost bin; adding even a tiny pause makes people look down for half a second."
            }
          ],
          "notes": "คำศัพท์/สำนวนจากบทสนทนา:\n• warning tags = ป้ายเตือนเรื่องสิ่งปนเปื้อนในถัง\n• culprit = ต้นตอของปัญหา\n• pair bins side by side = วางถังแยกขยะทั้ง 3 ประเภทเรียงติดกัน (หลัก choice architecture)\n• photo plaques = ป้ายภาพถ่ายขนาดใหญ่ระดับสายตา",
          "tips": "ฟังจุดเปลี่ยนของบทสนทนาเมื่อ Maya ถามเรื่อง 'ตำแหน่งวางถัง' (Tell me where the bins sit) เพราะมักเป็นคำตอบของทั้งสาเหตุและแนวทางแก้ไข",
          "qs": [
            {
              "tag": "Listening · Problem",
              "q": "Why did Noah visit Maya's office?",
              "choices": [
                "To request additional trash bags for Maple Hall's kitchenettes",
                "To complain that custodial staff were skipping third-floor pickups",
                "To volunteer as a facilities inspector for other residence halls",
                "To figure out how to stop residents from putting wrong items in the compost bin"
              ],
              "ans": 3,
              "why": "ตอบ \"To figure out how to stop residents from putting wrong items in the compost bin\" เพราะ Noah บอกว่าชั้น 3 ของ Maple Hall ได้รับป้ายเตือนเรื่องขยะปนเปื้อนในถังปุ๋ยหมักซ้ำๆ แม้จะเตือนในที่ประชุมแล้วก็ตาม"
            },
            {
              "tag": "Listening · Cause",
              "q": "According to Maya, what is the main reason residents have been contaminating the green bin?",
              "choices": [
                "The green bin stands closer to the doorway than the regular trash bin.",
                "Students want to protest the campus coffee shop's lid policy.",
                "There are no recycling containers anywhere in Maple Hall.",
                "The current signs are printed in fonts that are too small to read."
              ],
              "ans": 0,
              "why": "ตอบ \"The green bin stands closer to the doorway than the regular trash bin.\" เพราะ Maya ชี้ว่า 'there's your culprit' ทันทีที่รู้ว่าถังสีเขียวอยู่ใกล้ประตูส่วนถังขยะทั่วไปอยู่อีกฝั่งไกลออกไป คนจึงมักทิ้งลงถังที่ใกล้มือที่สุด"
            },
            {
              "tag": "Listening · Recommendation",
              "q": "What change does Maya suggest for the compost bin's lid?",
              "choices": [
                "Keep the lid locked except during meal hours.",
                "Label the lid with a written paragraph explaining municipal fees.",
                "Replace the wide opening with a smaller round slot.",
                "Remove the lid completely so Eco-Reps can inspect inside easily."
              ],
              "ans": 2,
              "why": "ตอบ \"Replace the wide opening with a smaller round slot.\" เพราะท้ายบทสนทนา Maya แนะนำให้เปลี่ยนฝาเปิดกว้างเป็นช่องวงกลมเล็กลง (smaller circular slot) เพื่อบังคับให้คนชะงักมองครึ่งวินาทีก่อนทิ้ง"
            }
          ]
        },
        "announcement": {
          "title": "Announcement · Deep-Sea ROV Video Showcase",
          "speaker": "m",
          "voice": "uk_f",
          "lines": [
            "Attention, science and engineering students: this Thursday evening at seven o'clock, the Marine Science Department will host a live remote showcase from the research vessel Falkor in Science Hall Auditorium 101.",
            "Chief oceanographer Dr. Victor Alvarez will stream high-definition footage captured by a remotely operated vehicle diving three thousand meters along an active hydrothermal vent field.",
            "Visitors will see glowing mineral spires, dense clusters of blind vent shrimp, and robotic arms collecting pressurized water samples in real time.",
            "Admission is free with a university ID, though seating is first come, first served. Doors open at six-thirty, and light refreshments—served in reusable glassware, please note—will be available in the atrium beforehand."
          ],
          "notes": "ประกาศสั้นแบบ Stage 1 มี 4 ประโยค: เวลา-สถานที่ (พฤหัส 19:00 น., ห้อง 101) → เนื้อหา (สตรีมภาพสดจากเรือวิจัยและหุ่นยนต์ ROV ที่ความลึก 3,000 เมตร) → เงื่อนไขเข้าชม (ฟรีเมื่อแสดงบัตร นศ., มาก่อนได้ก่อน, เปิดประตู 18:30 น.)",
          "tips": "ระวังตัวเลขและเวลาในประกาศ เช่น 7:00 P.M. (เวลาเริ่มงาน) เทียบกับ 6:30 P.M. (เวลาเปิดประตู) และข้อกำหนดเรื่องต้องแสดงบัตรนักศึกษา",
          "qs": [
            {
              "tag": "Listening · Purpose",
              "q": "What is the main purpose of the announcement?",
              "choices": [
                "To recruit student divers for an ocean expedition",
                "To invite students to a live-streamed deep-sea exploration event",
                "To announce a room change for Thursday's biology exam",
                "To ask for volunteers to operate robotic cameras on campus"
              ],
              "ans": 1,
              "why": "ตอบ \"To invite students to a live-streamed deep-sea exploration event\" เพราะประกาศเชิญชวนนักศึกษาเข้าชมการถ่ายทอดสดภาพใต้ทะเลลึกจากเรือวิจัยในวันพฤหัสบดี"
            },
            {
              "tag": "Listening · Detail",
              "q": "What will the remotely operated vehicle do during the broadcast?",
              "choices": [
                "Drill into coastal coral reefs",
                "Measure surface wave speeds",
                "Release tagged sea turtles near the shore",
                "Gather deep-water samples using robotic arms"
              ],
              "ans": 3,
              "why": "ตอบ \"Gather deep-water samples using robotic arms\" เพราะประกาศระบุว่าผู้ชมจะได้เห็น robotic arms collecting pressurized water samples in real time"
            },
            {
              "tag": "Listening · Detail",
              "q": "What should attendees know about entering the auditorium?",
              "choices": [
                "Doors open thirty minutes before the seven o'clock presentation.",
                "They must reserve seats online before Wednesday.",
                "They need to pay a small fee for refreshments.",
                "Only marine biology majors may sit in the front rows."
              ],
              "ans": 0,
              "why": "ตอบ \"Doors open thirty minutes before the seven o'clock presentation.\" เพราะงานเริ่ม 7:00 P.M. และประตูเปิดเวลา 6:30 P.M. (30 นาทีล่วงหน้า) โดยใช้บัตรนักศึกษาและไม่เสียค่าใช้จ่าย"
            }
          ],
          "accent": "us"
        },
        "talk": {
          "title": "Lecture · Cafeteria Choice Architecture and Nudge Ethics",
          "speaker": "f",
          "voice": "us_m2",
          "lines": [
            "Welcome back, everyone. Last week we examined classical utility models, where people weigh every cost and benefit rationally. Today let's look at what happens when we step into a real university dining hall at twelve-fifteen on a Tuesday.",
            "Imagine a cafeteria manager who wants students to eat more fresh fruit and fewer sugary snacks, without banning desserts or raising prices. Under traditional economics, you might hand out nutrition pamphlets. Under behavioral economics, you redesign the serving line itself—what Richard Thaler and Cass Sunstein call choice architecture.",
            "Notice what happens when you move fruit bowls to eye level right beside the cash register, while placing pastries on a lower back shelf. Nothing is forbidden! Any student who truly wants a brownie can still walk two steps and grab one. Yet numerous school and workplace trials show fruit selection climbs noticeably simply because visibility and immediate reach—what we term salience—guide hurried decisions.",
            "Now, why does such a tiny tweak work? Because during a busy lunch rush, people operate largely on automatic 'System 1' habits rather than slow, analytical 'System 2' deliberation. Placing healthy items first exploits that quick mental shortcut constructively.",
            "Hold on—let's pause here and address an important criticism. Doesn't nudging people quietly count as manipulation? Thaler and Sunstein defend what they call 'libertarian paternalism' using two guardrails: transparency and low-cost opt-out.",
            "First, the arrangement shouldn't hide options or deceive anyone; if asked, the manager can openly explain why fruit sits up front. Second, choosing the alternative must remain effortless. When a cafeteria hides prices or makes vegetarian options hard to find just to boost profits on soda, that crosses the line from helpful nudge into deceptive 'sludge.'",
            "For Friday's seminar, ask yourselves: where do you spot benign choice architecture on our campus, and where does design drift toward unfair manipulation?"
          ],
          "notes": "โครงสร้างเลกเชอร์:\n1. เกริ่นความต่างระหว่างทฤษฎีเศรษฐศาสตร์ดั้งเดิม vs ความจริงในโรงอาหาร\n2. นิยาม Choice Architecture & Salience (วางผลไม้ระดับสายตาใกล้แคชเชียร์)\n3. เหตุผลทางจิตวิทยา: ช่วงเร่งรีบคนใช้ระบบคิดอัตโนมัติ System 1\n4. ประเด็นจริยธรรม: Libertarian paternalism ต้องโปร่งใส (transparency) และเปลี่ยนทางเลือกได้ง่าย (low-cost opt-out) มิฉะนั้นจะกลายเป็น sludge",
          "tips": "เวลาอาจารย์พูดว่า 'Hold on—let's pause here and address an important criticism' มักมีคำถามเกี่ยวกับ 'ข้อโต้แย้ง' หรือ 'เจตนาในการยกตัวอย่าง' ตามมาเสมอ",
          "qs": [
            {
              "tag": "Listening · Main Idea",
              "q": "What is the lecture mainly about?",
              "choices": [
                "How university cafeterias calculate seasonal food budgets",
                "How physical arrangement guides everyday choices and when that influence is ethical",
                "Why nutrition pamphlets fail to change eating habits among older adults",
                "How cash registers track student purchases using System 2 thinking"
              ],
              "ans": 1,
              "why": "ตอบ \"How physical arrangement guides everyday choices and when that influence is ethical\" เพราะเลกเชอร์อธิบายทั้งกลไกของ choice architecture ในโรงอาหาร และหลักเกณฑ์ด้านจริยธรรมว่าเมื่อใดถือเป็น nudge ที่ยอมรับได้ vs การบงการ"
            },
            {
              "tag": "Listening · Mechanism",
              "q": "Why does placing fruit at eye level near the register increase fruit purchases?",
              "choices": [
                "Students assume eye-level items are offered at a discount.",
                "It forces students to buy fruit before receiving desserts.",
                "Hurried diners make fast habitual decisions shaped by what is visible and convenient.",
                "Pastries placed on lower shelves stay warm for a shorter time."
              ],
              "ans": 2,
              "why": "ตอบ \"Hurried diners make fast habitual decisions shaped by what is visible and convenient.\" เพราะอาจารย์อธิบายว่าช่วงพักเที่ยงที่เร่งรีบ คนใช้ระบบคิดอัตโนมัติ System 1 จึงเลือกสิ่งที่เห็นชัดและหยิบง่าย (salience)"
            },
            {
              "tag": "Listening · Detail",
              "q": "According to the professor, what two conditions help ensure a nudge remains ethical?",
              "choices": [
                "Higher taxes on unhealthy items and weekly student voting",
                "Removing profit incentives from all campus food vendors",
                "Written consent forms and strict calorie labeling",
                "Openness about the setup and easy access to alternative options"
              ],
              "ans": 3,
              "why": "ตอบ \"Openness about the setup and easy access to alternative options\" เพราะอาจารย์ระบุ 2 หลักประกันคือ transparency (ความโปร่งใส ไม่อำพราง) และ low-cost opt-out (ยังเลือกตัวเลือกอื่นได้ง่าย)"
            },
            {
              "tag": "Listening · Inference",
              "q": "What would the professor most likely classify as 'sludge'?",
              "choices": [
                "Burying an inexpensive lunch special on a hidden menu page to steer diners toward pricier combos",
                "Putting water bottles beside salad bars",
                "Posting nutrition posters beside residence hall elevators",
                "Offering smaller dessert plates without changing food prices"
              ],
              "ans": 0,
              "why": "ตอบ \"Burying an inexpensive lunch special on a hidden menu page to steer diners toward pricier combos\" เพราะอาจารย์ยกตัวอย่างว่าเมื่อร้านซ่อนราคาหรือทำให้ตัวเลือกที่คุ้มค่าหาเจอยากเพื่อกอบโกยกำไร นั่นคือ deceptive 'sludge'"
            }
          ],
          "accent": "us"
        }
      },
      "stage2a": {
        "responses": [
          {
            "speaker": "f",
            "prompt": "Should I rinse out this glass jar before dropping it in the blue recycling bin?",
            "choices": [
              "No, the dining hall closes at eight tonight.",
              "I returned my library book to the front desk yesterday.",
              "Glass jars are usually manufactured at high temperatures.",
              "Yes, a quick rinse keeps leftover sauce from ruining the clean paper beside it."
            ],
            "ans": 3,
            "why": "ตอบ \"Yes, a quick rinse keeps leftover sauce from ruining the clean paper beside it.\" เพราะตอบคำถาม yes/no เรื่องการล้างขวดแก้วก่อนทิ้งรีไซเคิล พร้อมเหตุผลเรื่องป้องกันเศษอาหารปนเปื้อนกระดาษ",
            "q": "Choose the best response.",
            "accent": "us"
          },
          {
            "speaker": "m",
            "prompt": "I missed the marine biology lecture on hydrothermal vents—did the professor post the slides yet?",
            "choices": [
              "Hydrothermal vents are located deep under the ocean.",
              "They're already up in the Week 5 folder, plus a short diagram of tube worms.",
              "I'm majoring in civil engineering, not chemistry.",
              "We usually go to the beach after final exams."
            ],
            "ans": 1,
            "why": "ตอบ \"They're already up in the Week 5 folder, plus a short diagram of tube worms.\" เพราะตอบตรงคำถามว่าอาจารย์อัปโหลดสไลด์หรือยัง โดยบอกพิกัดโฟลเดอร์ Week 5 และสื่อเสริม",
            "q": "Choose the best response.",
            "accent": "us"
          },
          {
            "speaker": "f",
            "prompt": "Can we reserve the quiet study pod on the third floor for our group project?",
            "choices": [
              "Quiet zones only allow solo reading, so let's book one of the glass team rooms on Floor 2 instead.",
              "Yes, I bought a new notebook from the campus bookstore.",
              "The third floor has larger windows facing the quad.",
              "Our group presentation needs at least five bar charts."
            ],
            "ans": 0,
            "why": "ตอบ \"Quiet zones only allow solo reading, so let's book one of the glass team rooms on Floor 2 instead.\" เพราะปฏิเสธอย่างมีเหตุผลว่าโซนเงียบใช้ได้เฉพาะอ่านคนเดียว และเสนอห้องกลุ่มชั้น 2 แทน",
            "q": "Choose the best response.",
            "accent": "us"
          }
        ],
        "conversation": {
          "title": "Conversation · Comparing a Psychology Study and Dorm Points",
          "lines": [
            {
              "role": "Liam",
              "acc": "us",
              "sex": "m",
              "text": "Hey Chloe, how did that behavioral economics computer experiment go this morning?"
            },
            {
              "role": "Chloe",
              "acc": "us",
              "sex": "f",
              "text": "Pretty interesting, actually! It was super short—just twenty minutes choosing between lunch combos on a mock campus app."
            },
            {
              "role": "Liam",
              "acc": "us",
              "sex": "m",
              "text": "Did they ask you why you picked certain dishes?"
            },
            {
              "role": "Chloe",
              "acc": "us",
              "sex": "f",
              "text": "Not until the very end. Half of us saw a tiny green leaf icon next to low-carbon meals and had those meals pre-checked as the 'daily special,' while the other half saw a plain alphabetical list."
            },
            {
              "role": "Liam",
              "acc": "us",
              "sex": "m",
              "text": "Wait—that sounds just like what the housing team is trying for our Dorm Green Challenge next month!"
            },
            {
              "role": "Chloe",
              "acc": "us",
              "sex": "f",
              "text": "Oh right, the energy and compost points contest? Are they changing defaults too?"
            },
            {
              "role": "Liam",
              "acc": "us",
              "sex": "m",
              "text": "Kind of! Instead of making students sign up one by one to receive weekly water-usage comparisons, every floor gets the summary automatically unless someone unsubscribes—and it compares your floor to the most efficient floor in the building."
            },
            {
              "role": "Chloe",
              "acc": "us",
              "sex": "f",
              "text": "Smart! Seeing how neighbors are doing usually motivates people way more than a plain sticker on the wall."
            }
          ],
          "notes": "คำศัพท์ง่ายที่ใช้บ่อย: mock campus app (แอปจำลอง), pre-checked (ติ๊กเลือกไว้ล่วงหน้า), unsubscribe (กดยกเลิกการรับข้อมูล), social comparison (การเปรียบเทียบกับเพื่อนบ้าน/ชั้นอื่น)",
          "tips": "แยกให้ชัดว่าโปรเจกต์ของ Chloe (ทดลองเมนูอาหารในแล็บ) ต่างจากโครงการของ Liam (เทียบคะแนนประหยัดน้ำและปุ๋ยหมักระหว่างชั้นในหอพัก) อย่างไร",
          "qs": [
            {
              "tag": "Listening · Detail",
              "q": "What did half the participants see in the behavioral economics experiment Chloe joined?",
              "choices": [
                "Lower prices on vegetarian dishes",
                "Videos explaining how food is composted on campus",
                "Pre-selected meals marked with a small green leaf icon",
                "Calorie warnings printed in red letters"
              ],
              "ans": 2,
              "why": "ตอบ \"Pre-selected meals marked with a small green leaf icon\" เพราะ Chloe เล่าว่าครึ่งหนึ่งของอาสาสมัครเห็นไอคอนใบไม้สีเขียวและตัวเลือกถูกติ๊กไว้ล่วงหน้าเป็น 'daily special'"
            },
            {
              "tag": "Listening · Detail",
              "q": "How will the Dorm Green Challenge send weekly water-usage summaries?",
              "choices": [
                "Only to students who fill out a sign-up card at orientation",
                "By posting paper charts inside every shower stall",
                "Through a smartphone game developed by the psychology lab",
                "Automatically to every floor unless residents choose to opt out"
              ],
              "ans": 3,
              "why": "ตอบ \"Automatically to every floor unless residents choose to opt out\" เพราะ Liam อธิบายว่าทุกชั้นจะได้รับสรุปอัตโนมัติ (automatically unless someone unsubscribes) แทนที่จะต้องลงทะเบียนทีละคน"
            },
            {
              "tag": "Listening · Attitude",
              "q": "Why does Chloe say the floor comparison idea is 'Smart'?",
              "choices": [
                "It saves printing paper compared with wall posters.",
                "Seeing how nearby floors perform encourages students more than simple signs.",
                "It lets residents win free lunch vouchers from the dining hall.",
                "It requires students to calculate their own utility bills."
              ],
              "ans": 1,
              "why": "ตอบ \"Seeing how nearby floors perform encourages students more than simple signs.\" เพราะประโยคสุดท้าย Chloe พูดตรงๆ ว่า Seeing how neighbors are doing usually motivates people way more than a plain sticker"
            }
          ]
        },
        "announcement": {
          "title": "Announcement · Move-Out Recycling and Compost Stations",
          "speaker": "m",
          "voice": "ca_f",
          "lines": [
            "Good morning, residents! As final exams wrap up next week, Residence Life will set up temporary Move-Out Sustainability Stations outside the north entrance of every dormitory from May 14 through May 18.",
            "Before tossing unwanted room items into regular dumpsters, please sort unopened dry groceries into the Campus Food Pantry crates, and place clean lamps, fans, or storage bins onto the donation tables for incoming fall students.",
            "Also, remember to empty all mini-fridge leftovers into the labeled green compost totes rather than sealing spoiled food inside plastic trash bags. Volunteers will be on hand daily from nine to five to help sort items."
          ],
          "notes": "ประกาศปลายภาคเรียน (Move-Out): 14–18 พ.ค. หน้าประตูทิศเหนือของทุกหอ แบ่งเป็น 3 จุด: อาหารแห้งที่ยังไม่แกะ → Food Pantry, ของใช้สภาพดี → โต๊ะบริจาคให้นักศึกษาใหม่, ของเหลือในตู้เย็น → ถังปุ๋ยหมักสีเขียว",
          "tips": "Stage 2A ประกาศสั้นและถามตรงจุด ฟังแยกแยะว่าสิ่งของแต่ละชนิดต้องวางที่จุดไหน",
          "qs": [
            {
              "tag": "Listening · Detail",
              "q": "Where should students put clean fans and storage bins they no longer want?",
              "choices": [
                "Inside the regular hallway dumpsters",
                "Inside the green compost totes",
                "On the donation tables for next year's students",
                "At the Campus Food Pantry warehouse"
              ],
              "ans": 2,
              "why": "ตอบ \"On the donation tables for next year's students\" เพราะประกาศระบุให้วางโคมไฟ พัดลม หรือกล่องเก็บของที่สะอาดไว้บน donation tables for incoming fall students"
            },
            {
              "tag": "Listening · Detail",
              "q": "What are students asked to do with leftover food from mini-fridges?",
              "choices": [
                "Empty it into the green compost totes",
                "Pour it directly into the Campus Food Pantry crates",
                "Seal it tightly inside black plastic trash bags",
                "Bring it to the housing office before five o'clock"
              ],
              "ans": 0,
              "why": "ตอบ \"Empty it into the green compost totes\" เพราะประกาศย้ำให้เทอาหารที่เหลือในตู้เย็นเล็กลงใน labeled green compost totes แทนการมัดใส่ถุงพลาสติก"
            }
          ],
          "accent": "us"
        },
        "talk": {
          "title": "Lecture · How Giant Tube Worms Survive Without Sunlight",
          "speaker": "f",
          "voice": "us_f",
          "lines": [
            "Today we're taking a closer look at one of the strangest animals in marine biology: the giant hydrothermal vent tube worm, Riftia pachyptila. Imagine an animal that grows up to two meters long in total darkness, right beside boiling hot mineral chimneys—and yet has no mouth, no gut, and no way to swallow food.",
            "When researchers first hauled a giant tube worm up to a ship in the late 1970s, they were baffled. How could a creature this big survive without eating? The breakthrough came when scientists sliced open a spongy organ inside the worm's body called the trophosome.",
            "Under the microscope, that tissue wasn't just worm cells—it was packed tight with billions of sulfur-oxidizing bacteria. In fact, bacteria make up roughly half of the worm's body weight! You can think of the worm as a living greenhouse, except instead of sunlight, it supplies its indoor garden with chemicals.",
            "Specifically, the worm extends its bright red gill plume out into the ocean water. That red color comes from hemoglobin—similar to the molecule in your own blood—but the worm's hemoglobin has a special trick. Unlike human hemoglobin, which gets poisoned by hydrogen sulfide, the tube worm's hemoglobin binds both oxygen and hydrogen sulfide at the same time.",
            "The worm's bloodstream then delivers both gases safely down to the trophosome. There, the bacteria combine hydrogen sulfide, oxygen, and carbon dioxide to manufacture sugars that feed both themselves and the host worm.",
            "That partnership allows tube worms to grow incredibly fast—sometimes more than eighty centimeters in a single year—making them some of the fastest-growing marine invertebrates on the planet."
          ],
          "notes": "ศัพท์ชีววิทยาทางทะเล:\n• trophosome = อวัยวะเนื้อเยื่อฟองน้ำภายในลำตัวหนอนท่อที่บรรจุแบคทีเรียไว้หลายพันล้านตัว\n• gill plume = พู่เหงือกสีแดงสดที่ยื่นออกมานอกท่อเพื่อดูดซับก๊าซ\n• hemoglobin = โปรตีนลำเลียงก๊าซในเลือด (ของหนอนท่อจับได้ทั้ง O2 และ H2S พร้อมกันโดยไม่เป็นพิษ)",
          "tips": "สังเกตการเปรียบเทียบ (Analogy) ที่อาจารย์ใช้ เช่น 'living greenhouse' หรือ 'unlike human hemoglobin' เพราะข้อสอบมักออกคำถามว่าผู้พูดเปรียบเทียบเพื่ออธิบายอะไร",
          "qs": [
            {
              "tag": "Listening · Main Idea",
              "q": "What puzzle about giant tube worms did scientists solve in the late 1970s?",
              "choices": [
                "Why their outer shells change color near hot water",
                "How they grow so large despite having no mouth or digestive system",
                "How they swim away when underwater volcanoes erupt",
                "Why fish refuse to eat them along the seafloor"
              ],
              "ans": 1,
              "why": "ตอบ \"How they grow so large despite having no mouth or digestive system\" เพราะอาจารย์เปิดเรื่องด้วยปริศนาว่าสัตว์ยาว 2 เมตรที่ไม่มีปากและลำไส้ (no mouth, no gut) อยู่รอดได้อย่างไร คำตอบคือการพึ่งพาแบคทีเรียใน trophosome"
            },
            {
              "tag": "Listening · Analogy",
              "q": "Why does the professor compare the tube worm to a 'living greenhouse'?",
              "choices": [
                "Because the worm warms up freezing seawater inside its white tube",
                "Because green algae grow along the outside of the worm's gill plume",
                "Because the worm shelters microbes inside its body and supplies what they need to make food",
                "Because the worm can survive only near warm tropical reefs"
              ],
              "ans": 2,
              "why": "ตอบ \"Because the worm shelters microbes inside its body and supplies what they need to make food\" เพราะอาจารย์เปรียบว่าหนอนท่อเป็นเหมือนเรือนกระจกที่มีชีวิตซึ่งโอบอุ้มแบคทีเรียไว้ข้างในและส่งสารเคมีเข้าไปให้แบคทีเรียผลิตอาหาร"
            },
            {
              "tag": "Listening · Comparison",
              "q": "How is the tube worm's hemoglobin different from human hemoglobin?",
              "choices": [
                "It carries both oxygen and hydrogen sulfide safely instead of being poisoned by sulfide.",
                "It turns bright blue whenever the worm pulls back inside its tube.",
                "It breaks down carbon dioxide into iron minerals.",
                "It circulates only inside the worm's outer shell rather than its organs."
              ],
              "ans": 0,
              "why": "ตอบ \"It carries both oxygen and hydrogen sulfide safely instead of being poisoned by sulfide.\" เพราะอาจารย์เทียบชัดว่าฮีโมโกลบินมนุษย์จะถูกไฮโดรเจนซัลไฟด์ทำลายเป็นพิษ แต่ของหนอนท่อจับได้ทั้ง O2 และ H2S พร้อมกันอย่างปลอดภัย"
            },
            {
              "tag": "Listening · Detail",
              "q": "What does the professor say about the growth rate of giant tube worms?",
              "choices": [
                "They stop growing once bacteria enter the trophosome.",
                "They take decades to grow just a few centimeters.",
                "They grow faster in cold surface tanks than near vents.",
                "They rank among the fastest-growing invertebrates in the ocean."
              ],
              "ans": 3,
              "why": "ตอบ \"They rank among the fastest-growing invertebrates in the ocean.\" เพราะประโยคท้ายระบุว่าโตได้กว่า 80 ซม. ต่อปี ทำให้เป็นหนึ่งในสัตว์ไม่มีกระดูกสันหลังทางทะเลที่โตเร็วที่สุด (fastest-growing marine invertebrates)"
            }
          ],
          "accent": "us"
        }
      },
      "stage2b": {
        "responses": [
          {
            "speaker": "m",
            "prompt": "Isn't the behavioral nudge project supposed to double dorm composting rates within two weeks?",
            "choices": [
              "Even strong field nudges rarely double behavior overnight—a ten-percent drop in contamination would already be a solid win.",
              "The dormitories were repainted during winter break.",
              "No, I decided to take calculus instead of economics next term.",
              "Compost bins are usually painted green to stand out."
            ],
            "ans": 0,
            "why": "ตอบ \"Even strong field nudges rarely double behavior overnight—a ten-percent drop in contamination would already be a solid win.\" เพราะเป็นการแก้ความคาดหวังที่สูงเกินจริงอย่างสุภาพ (ใน Stage 2B มักเจอคำถามเชิงค้านหรือประเมินความเป็นจริง) โดยชี้ว่าแม้ลดการปนเปื้อนได้ 10% ก็ถือว่าน่าพอใจแล้ว",
            "q": "Choose the best response.",
            "accent": "uk"
          },
          {
            "speaker": "f",
            "prompt": "Could the lab really replicate those organ-donation findings if we ran the survey in an opt-in student club?",
            "choices": [
              "The auditorium has plenty of outlets near the back wall.",
              "Probably not cleanly—club volunteers already self-select, so baseline motivation would skew the default effect.",
              "Yes, I donated my spare textbooks to the campus swap last month.",
              "Our lab closes right after the professor finishes grading."
            ],
            "ans": 1,
            "why": "ตอบ \"Probably not cleanly—club volunteers already self-select, so baseline motivation would skew the default effect.\" เพราะวิเคราะห์ข้อจำกัดด้านระเบียบวิธีวิจัยได้อย่างเฉียบคม (อาสาสมัครชมรมมีความโน้มเอียงในตัวเอง หรือ self-selection bias จึงทำให้ผลไม่สะอาด)",
            "q": "Choose the best response.",
            "accent": "us"
          },
          {
            "speaker": "m",
            "prompt": "Wait—if we spend the whole sustainability rebate on metal signage, won't we have nothing left for the kitchen caddies?",
            "choices": [
              "The kitchen opens at seven every weekday morning.",
              "Metal signs reflect more light than wooden boards.",
              "We should split the allocation or get laminated plaques for now so both needs stay covered.",
              "I left my reusable mug inside the seminar room."
            ],
            "ans": 2,
            "why": "ตอบ \"We should split the allocation or get laminated plaques for now so both needs stay covered.\" เพราะตอบรับข้อกังวลเรื่องงบประมาณด้วยทางออกเชิงประนีประนอม (แบ่งงบหรือใช้ป้ายเคลือบแข็งแทนชั่วคราวเพื่อให้งบพอสำหรับถังเล็กในครัวด้วย)",
            "q": "Choose the best response.",
            "accent": "ca"
          }
        ],
        "conversation": {
          "title": "Conversation · Troubleshooting AUV Sensors Near a Vent Plume",
          "lines": [
            {
              "role": "Grad Student (Devon)",
              "acc": "us",
              "sex": "m",
              "text": "Dr. Patel, do you have a second to look at yesterday's autonomous underwater vehicle telemetry from the Juan de Fuca Ridge?"
            },
            {
              "role": "Professor (Dr. Patel)",
              "acc": "uk",
              "sex": "f",
              "text": "Sure, pull it up. Did the AUV finish its grid pass above the sulfide mound?"
            },
            {
              "role": "Grad Student (Devon)",
              "acc": "us",
              "sex": "m",
              "text": "Mostly, yes—but look at the dissolved-methane sensor trace between passes four and six. The readings spike sharply, then flatline at zero for twelve minutes before recovering."
            },
            {
              "role": "Professor (Dr. Patel)",
              "acc": "uk",
              "sex": "f",
              "text": "Hmm. A sudden drop to dead zero right inside an active plume doesn't sound like genuine ocean chemistry. Did the vehicle hit a pocket of sediment and clog the intake membrane?"
            },
            {
              "role": "Grad Student (Devon)",
              "acc": "us",
              "sex": "m",
              "text": "That was my first thought, too, especially since turbidity jumped right beforehand. Except our optical backscatter log stayed low the entire time—no mud cloud at all."
            },
            {
              "role": "Professor (Dr. Patel)",
              "acc": "uk",
              "sex": "f",
              "text": "Wait—look at the internal temperature trace alongside it. Every time the vehicle crossed above two degrees ambient, the sensor voltage sagged. You're not looking at clogged plumbing; the battery bus dropped slightly under peak thruster load fighting cross-currents, triggering an automatic low-voltage sensor reset."
            },
            {
              "role": "Grad Student (Devon)",
              "acc": "us",
              "sex": "m",
              "text": "Oh! That explains why it recovered cleanly after exactly twelve minutes once the cross-current eased. Should I discard passes four through six from our plume map?"
            },
            {
              "role": "Professor (Dr. Patel)",
              "acc": "uk",
              "sex": "f",
              "text": "Definitely flag and exclude those methane points, though keep the temperature and depth passes—those run on an independent power rail. Before tonight's dive, update the AUV mission script to stagger thruster ramps and log voltage diagnostics at ten-second intervals."
            }
          ],
          "notes": "ศัพท์เชิงเทคนิค/วิจัย:\n• telemetry = ข้อมูลโทรมาตรที่ส่งจากยานสำรวจ\n• flatline at zero = ค่ากราฟนิ่งเป็นศูนย์\n• turbidity / optical backscatter = ความขุ่นของน้ำ (ใช้เช็กว่ามีตะกอนโคลนอุดตันหรือไม่)\n• independent power rail = วงจรจ่ายไฟแยกอิสระ (ทำให้ข้อมูลอุณหภูมิและความลึกยังเชื่อถือได้)",
          "tips": "Stage 2B มักหลอกด้วยสมมติฐานแรกของผู้พูด (Devon คิดว่าเซนเซอร์อุดตันจากโคลน) แต่คำตอบที่ถูกต้องอยู่ที่การหักล้างและข้อสรุปใหม่ของอาจารย์ (แรงดันไฟตกจากใบพัดต้านกระแสน้ำ)",
          "qs": [
            {
              "tag": "Listening · Diagnosis",
              "q": "Why does Dr. Patel rule out sediment clogging as the cause of the zero readings?",
              "choices": [
                "Sediment cannot affect dissolved-methane membranes underwater.",
                "The methane sensor had already been replaced before pass four.",
                "The AUV hovered too high above the ridge to stir up sediment.",
                "The optical backscatter log showed no spike in suspended mud."
              ],
              "ans": 3,
              "why": "ตอบ \"The optical backscatter log showed no spike in suspended mud.\" เพราะ Devon รายงานว่าค่า optical backscatter log ต่ำตลอดเวลา แสดงว่าไม่มีกลุ่มโคลนขุ่น (no mud cloud at all) จึงไม่ใช่ปัญหาตะกอนอุดตัน"
            },
            {
              "tag": "Listening · Cause",
              "q": "What actually caused the methane sensor to flatline during passes four through six?",
              "choices": [
                "Ambient water temperatures exceeded the instrument's melting point.",
                "Heavy thruster power draw during cross-currents caused a voltage reset.",
                "A sulfide chimney bumped the AUV's intake valve.",
                "Data logging was accidentally paused by the mission script."
              ],
              "ans": 1,
              "why": "ตอบ \"Heavy thruster power draw during cross-currents caused a voltage reset.\" เพราะ Dr. Patel ชี้ว่าเมื่อใบพัด (thruster) ใช้ไฟสูงสุดเพื่อต้านกระแสน้ำ แรงดันไฟแบตเตอรี่ตกจึงเกิด low-voltage sensor reset อัตโนมัติ"
            },
            {
              "tag": "Listening · Action",
              "q": "What does Dr. Patel instruct Devon to do with the data from passes four through six?",
              "choices": [
                "Delete the entire dive record and rerun the grid manually",
                "Average the zero readings with nearby passes to smooth the map",
                "Exclude the faulty methane data while retaining temperature and depth measurements",
                "Recalibrate the methane trace using the optical backscatter numbers"
              ],
              "ans": 2,
              "why": "ตอบ \"Exclude the faulty methane data while retaining temperature and depth measurements\" เพราะ Dr. Patel สั่งให้ตัดเฉพาะค่ามีเทนช่วงนั้นออก แต่เก็บข้อมูลอุณหภูมิและความลึกไว้เพราะใช้สายจ่ายไฟแยกอิสระ (independent power rail)"
            }
          ]
        },
        "announcement": {
          "title": "Announcement · Behavioral Science Pre-Registration Workshop",
          "speaker": "m",
          "voice": "us_f",
          "lines": [
            "Attention, graduate students and honors thesis writers in Economics, Psychology, and Public Policy: next Wednesday's Research Methods Brown Bag will focus on pre-registration and effect-size realism in choice-architecture trials.",
            "Because small-sample pilot studies often overstate behavioral effects, all Behavioral Science Lab projects beginning this spring must upload hypotheses, sample-size targets, and exclusion rules to the Open Science registry prior to collecting data.",
            "Bring a draft protocol if you would like peer feedback; pizza is provided only for attendees who RSVP by noon Monday."
          ],
          "notes": "ประกาศเชิงวิชาการ (Stage 2B): เน้นนโยบายใหม่ของแล็บ — งานวิจัยใหม่ตั้งแต่เทอมสปริงต้องลงทะเบียนสมมติฐาน (pre-registration), ขนาดตัวอย่าง และเกณฑ์คัดข้อมูลออกก่อนเริ่มเก็บข้อมูลเพื่อป้องกันผลเกินจริง",
          "tips": "สังเกตคำว่า only ในตอนท้ายประกาศ: อาหารฟรีเฉพาะผู้ที่ลงทะเบียน RSVP ภายในเที่ยงวันจันทร์เท่านั้น",
          "qs": [
            {
              "tag": "Listening · Policy",
              "q": "Under the lab's new policy, what must researchers submit before collecting participant data?",
              "choices": [
                "Signed funding approval from an outside journal editor",
                "Video recordings of participant instructions",
                "Complete statistical results from an earlier pilot group",
                "A public record of hypotheses, target sample sizes, and data-exclusion rules"
              ],
              "ans": 3,
              "why": "ตอบ \"A public record of hypotheses, target sample sizes, and data-exclusion rules\" เพราะประกาศระบุให้ upload hypotheses, sample-size targets, and exclusion rules ลงใน Open Science registry ก่อนเริ่มเก็บข้อมูล"
            },
            {
              "tag": "Listening · Detail",
              "q": "What condition applies to receiving lunch at Wednesday's workshop?",
              "choices": [
                "Students must register by Monday at midday.",
                "Attendees must present a finished honors thesis.",
                "Only graduate students from Economics are eligible.",
                "Participants must bring a printed Open Science certificate."
              ],
              "ans": 0,
              "why": "ตอบ \"Students must register by Monday at midday.\" เพราะท้ายประกาศระบุว่า pizza is provided only for attendees who RSVP by noon Monday"
            }
          ],
          "accent": "us"
        },
        "talk": {
          "title": "Seminar · Why Nudges Shrink at Scale and Backfire Under Heterogeneity",
          "speaker": "f",
          "voice": "uk_m",
          "lines": [
            "In our previous session we applauded default rules and salience cues for nudging decisions cleanly. Today, let's complicate that picture. Why do interventions that produce dazzling gains in university journals often look remarkably modest when governments roll them out across millions of households?",
            "Consider a landmark 2022 meta-analysis by Stefano DellaVigna and Elizabeth Linos. They compared two huge bodies of nudge trials: roughly two hundred studies published in academic journals, versus more than a hundred large-scale field experiments run quietly by government 'nudge units'—whether they worked or not.",
            "In published academic papers, the average behavioral nudge shifted take-up rates by nearly nine percentage points. Inside government nudge units, however, the average impact dropped to roughly 1.4 percentage points! Now, that doesn't mean nudges are useless—a 1.4-point shift across ten million taxpayers at pennies per letter is still enormously cost-effective.",
            "Yet why the stark gap? Two culprits stand out. First, publication bias: academic journals preferentially publish dramatic successes, leaving null results tucked in file drawers, whereas government units catalog everything. Second, at massive scale, messages get diluted across audiences with wildly different baseline constraints.",
            "That brings us to preference heterogeneity—and a phenomenon called psychological reactance. Suppose a utility company mails every home a green smiley face if they use less electricity than neighbors, or a warning note if they use more. What happens to households that already conserve aggressively? Seeing they sit well below average, some actually relax and increase consumption—a boomerang effect!",
            "Likewise, if an automatic savings default locks low-liquidity workers into putting away six percent of pay when they actually need cash for rent, the default doesn't help them; it pushes them into expensive overdraft debt. In short, good choice architecture isn't one-size-fits-all—it requires auditing heterogeneity, measuring net welfare, and stripping away hidden sludge before nudging."
          ],
          "notes": "แก่นสำคัญของสัมมนา (Stage 2B):\n• DellaVigna & Linos (2022): งานวิจัยที่ตีพิมพ์ในวารสารได้ผลเฉลี่ย ~8.7–9% แต่เมื่อหน่วยงานรัฐทดลองจริงขนาดใหญ่ได้ผลเฉลี่ย ~1.4%\n• เหตุผล 2 ข้อ: 1) Publication bias (วารสารชอบตีพิมพ์แต่ผลสำเร็จ) 2) การขยายสเกลเจอผู้คนหลากหลายกลุ่ม\n• Boomerang effect & Heterogeneity: คนที่ประหยัดไฟอยู่แล้วอาจใช้ไฟเพิ่มเมื่อเห็นเทียบค่าเฉลี่ย และพนักงานที่ขาดสภาพคล่องอาจเดือดร้อนหากถูกหักเงินออมอัตโนมัติ",
          "tips": "คำถาม Stage 2B จะเจาะ 'นัยสำคัญ' (nuance) เช่น แม้ผลจะลดเหลือ 1.4% แต่อาจารย์ก็ยังย้ำว่าคุ้มทุนในสเกลใหญ่ ไม่ได้บอกว่า nudge ไร้ประโยชน์เสียทีเดียว",
          "qs": [
            {
              "tag": "Listening · Contrast",
              "q": "What key difference did DellaVigna and Linos find between published academic studies and government nudge-unit trials?",
              "choices": [
                "Government trials had zero measurable effect on citizen behavior.",
                "Published academic studies reported average effects several times larger than government field trials.",
                "Academic studies cost significantly more money per participant to administer.",
                "Government units refused to test default rules on tax filings."
              ],
              "ans": 1,
              "why": "ตอบ \"Published academic studies reported average effects several times larger than government field trials.\" เพราะอาจารย์เปรียบเทียบว่างานวิชาการที่ตีพิมพ์ได้ผลเฉลี่ยเกือบ 9 percentage points ส่วนงานของหน่วยงานรัฐได้เฉลี่ยราว 1.4 percentage points"
            },
            {
              "tag": "Listening · Attitude",
              "q": "Why does the professor mention 'pennies per letter' when discussing the 1.4 percentage-point effect?",
              "choices": [
                "To argue that postal nudges should replace digital reminders",
                "To show why government agencies spend too much on printing",
                "To emphasize that even small percentage shifts remain worthwhile at huge scale",
                "To criticize researchers for ignoring inflation costs"
              ],
              "ans": 2,
              "why": "ตอบ \"To emphasize that even small percentage shifts remain worthwhile at huge scale\" เพราะอาจารย์พูดต่อว่านั่นไม่ได้แปลว่าไร้ประโยชน์ (doesn't mean nudges are useless) เพราะแม้ขยับ 1.4% ในคนสิบล้านคนด้วยต้นทุนแค่ไม่กี่เพนนี ก็ยังคุ้มค่ามาก"
            },
            {
              "tag": "Listening · Example",
              "q": "What illustrates the 'boomerang effect' in the professor's electricity-bill example?",
              "choices": [
                "Neighbors stop reading utility mail altogether.",
                "Residents switch from gas heating to electric appliances.",
                "Utility companies charge higher rates to homes with smiley icons.",
                "Households that already use very little energy end up increasing consumption after seeing peer comparisons."
              ],
              "ans": 3,
              "why": "ตอบ \"Households that already use very little energy end up increasing consumption after seeing peer comparisons.\" เพราะอาจารย์ยกตัวอย่างบ้านที่ประหยัดมากอยู่แล้ว พอเห็นว่าตนใช้ไฟต่ำกว่าค่าเฉลี่ยมากกลับผ่อนคลายและใช้ไฟเพิ่มขึ้น"
            },
            {
              "tag": "Listening · Inference",
              "q": "Why might a uniform six-percent automatic savings default harm low-liquidity workers?",
              "choices": [
                "It can reduce cash needed for immediate bills and push them into costly debt.",
                "It prevents them from understanding bank statements.",
                "Employers reduce hourly wages to pay for matching funds.",
                "Low-income workers are legally barred from opting out."
              ],
              "ans": 0,
              "why": "ตอบ \"It can reduce cash needed for immediate bills and push them into costly debt.\" เพราะอาจารย์อธิบายว่าผู้ที่ขาดสภาพคล่องทางการเงินและจำเป็นต้องใช้เงินจ่ายค่าเช่าบ้านอาจถูกบีบให้ไปก่อหนี้เบิกเงินเกินบัญชี (overdraft debt) ที่มีดอกเบี้ยแพง"
            }
          ],
          "accent": "us"
        }
      }
    },
    "writing": {
      "build": [
        {
          "cue": "A visitor asks a marine biologist about the submersible that first discovered hydrothermal vents.",
          "prefix": "Could you tell me",
          "chunks": [
            "found",
            "vents",
            "which",
            "those",
            "submersible",
            "first"
          ],
          "suffix": "?",
          "ans": "Could you tell me which submersible first found those vents?",
          "alts": [
            "Could you tell me which submersible found those vents first?"
          ],
          "why": "คำถามซ้อน (Indirect question): หลัง 'Could you tell me' ใช้รูปประโยคบอกเล่า 'which submersible + first found + those vents' (ไม่สลับกริยาช่วย did)"
        },
        {
          "cue": "Explain how giant tube worms obtain nutrients without mouths.",
          "prefix": "Adult tube worms",
          "chunks": [
            "on",
            "depend",
            "living",
            "bacteria",
            "their",
            "inside",
            "tissues"
          ],
          "suffix": ".",
          "ans": "Adult tube worms depend on bacteria living inside their tissues.",
          "why": "โครงสร้าง: ประธาน (Adult tube worms) + กริยา (depend on) + กรรม (bacteria) + ส่วนขยายแบบ participle phrase (living inside their tissues)"
        },
        {
          "cue": "Ask a dorm coordinator why greasy pizza boxes ruin blue recycling bales.",
          "prefix": "Do you know",
          "chunks": [
            "pizza",
            "why",
            "greasy",
            "boxes",
            "spoil",
            "recycling",
            "clean",
            "paper"
          ],
          "suffix": "?",
          "ans": "Do you know why greasy pizza boxes spoil clean paper recycling?",
          "why": "คำถามซ้อนหลัง 'Do you know': เรียง why + ประธาน (greasy pizza boxes) + กริยา (spoil) + กรรม (clean paper recycling)"
        },
        {
          "cue": "State what behavioral research revealed about retirement plan enrollment.",
          "prefix": "Studies show that",
          "chunks": [
            "enrollment",
            "automatic",
            "participation",
            "sharply",
            "rates",
            "boosts"
          ],
          "suffix": ".",
          "ans": "Studies show that automatic enrollment boosts participation rates sharply.",
          "alts": [
            "Studies show that automatic enrollment sharply boosts participation rates."
          ],
          "why": "โครงสร้าง: ประธาน (automatic enrollment) + กริยา (boosts) + กรรม (participation rates) + กริยาวิเศษณ์ (sharply)"
        },
        {
          "cue": "Describe what prevents superheated vent water from boiling at extreme ocean depths.",
          "prefix": "",
          "chunks": [
            "Crushing",
            "prevents",
            "from",
            "heated",
            "pressure",
            "boiling",
            "water"
          ],
          "suffix": ".",
          "ans": "Crushing pressure prevents heated water from boiling.",
          "why": "โครงสร้าง prevent + กรรม + from + V-ing: Crushing pressure (ประธาน) + prevents + heated water + from boiling"
        },
        {
          "cue": "A student asks how to report a missing liner inside a dorm compost cart.",
          "prefix": "I was wondering",
          "chunks": [
            "report",
            "we",
            "should",
            "where",
            "missing",
            "liners"
          ],
          "suffix": ".",
          "ans": "I was wondering where we should report missing liners.",
          "why": "Indirect question หลัง 'I was wondering': เรียง where + ประธาน (we) + กริยาช่วย (should) + กริยาแท้ (report) + กรรม (missing liners) และจบด้วยจุด (.)"
        },
        {
          "cue": "Explain why pairing trash and compost bins side by side reduces waste errors.",
          "prefix": "Putting bins together",
          "chunks": [
            "makes",
            "waste",
            "easier",
            "sorting",
            "much",
            "for",
            "residents"
          ],
          "suffix": ".",
          "ans": "Putting bins together makes sorting waste much easier for residents.",
          "why": "โครงสร้าง make + กรรม (sorting waste) + คำคุณศัพท์เปรียบเทียบ (much easier) + for residents"
        },
        {
          "cue": "Point out a potential drawback of poorly designed opt-out defaults.",
          "prefix": "Critics warn that",
          "chunks": [
            "hidden",
            "defaults",
            "consumers",
            "trap",
            "can",
            "into",
            "unwanted",
            "fees"
          ],
          "suffix": ".",
          "ans": "Critics warn that hidden defaults can trap consumers into unwanted fees.",
          "why": "กริยาช่วย modal (can) + กริยาช่อง 1 (trap) + กรรม (consumers) + into + นามวลี (unwanted fees)"
        },
        {
          "cue": "Describe what researchers observed when alkaline fluids met ancient acidic seas.",
          "prefix": "Mineral walls",
          "chunks": [
            "separated",
            "basic",
            "from",
            "fluids",
            "surrounding",
            "acidic",
            "water"
          ],
          "suffix": ".",
          "ans": "Mineral walls separated basic fluids from surrounding acidic water.",
          "why": "กริยา separate A from B: separated + basic fluids + from + surrounding acidic water"
        },
        {
          "cue": "Ask an economics professor whether nudges work equally well for everyone.",
          "prefix": "Could you explain",
          "chunks": [
            "produce",
            "why",
            "smaller",
            "nudges",
            "effects",
            "sometimes",
            "at",
            "scale"
          ],
          "suffix": "?",
          "ans": "Could you explain why nudges sometimes produce smaller effects at scale?",
          "alts": [
            "Could you explain why nudges produce smaller effects at scale sometimes?"
          ],
          "why": "คำถามซ้อนหลัง 'Could you explain': why + ประธาน (nudges) + กริยาวิเศษณ์ความถี่ (sometimes) + กริยา (produce) + กรรม (smaller effects) + วลีขยาย (at scale)"
        }
      ],
      "email": {
        "title": "Write an E-mail · Solving Compost Contamination in Cedar Hall",
        "situation": "You are a resident living on the third floor of Cedar Hall. Over the past month, students have repeatedly dropped plastic coffee lids and greasy foil wrappers into your floor's green compost bin, causing Facilities to leave warning tags and haul the food scraps to the landfill instead. Write an email to Ms. Elena Alvarez, Director of Residence Life Sustainability, addressing all three points below.",
        "bullets": [
          "Describe the specific contamination problem occurring in the third-floor kitchenette.",
          "Explain one physical change to the bin layout or lids that could nudge residents to sort more accurately.",
          "Offer to help run a brief educational effort with floor residents next week."
        ],
        "model": "Subject: Proposal to Reduce Compost Contamination on Cedar Hall Floor 3\n\nDear Ms. Alvarez,\n\nI am writing as a third-floor resident in Cedar Hall regarding repeated contamination in our kitchenette's green compost cart. During morning rush hours, students frequently drop plastic coffee lids and foil snack wrappers into the green bin, which has forced Facilities to reject the entire batch as landfill waste.\n\nPart of the issue seems to be layout: the compost bin currently sits right beside the doorway, while the landfill container stands across the room by the sink. If Facilities could place the compost, recycling, and landfill bins side by side next to the exit and add a smaller circular slot lid on the compost cart, residents would naturally pause and choose the right bin.\n\nIn addition, I would be happy to team up with our floor Eco-Rep during next Tuesday's floor study break to hang clear photo signs above the lids and answer sorting questions. Please let me know if those adjustments sound feasible.\n\nSincerely,\nJordan Kim\nCedar Hall, Room 318",
        "notes": "โครงสร้างของคำตอบระดับ Band 6.0:\n• Subject ชัดเจน ระบุอาคารและชั้นตั้งแต่ต้น\n• ย่อหน้าที่ 1 เก็บ Bullet 1 ครบ: ระบุประเภทขยะปนเปื้อน (ฝาแก้วพลาสติก/ซองฟอยล์) และผลกระทบ (ถูกทิ้งรวมเป็นขยะฝังกลบ)\n• ย่อหน้าที่ 2 เก็บ Bullet 2 ครบ: ชี้ปัญหาตำแหน่งวางถัง และเสนอแก้ด้วยการวาง 3 ถังคู่กัน + เปลี่ยนฝาเป็นช่องกลมเล็กเพื่อลดความเผลอ\n• ย่อหน้าที่ 3 เก็บ Bullet 3 ครบ: อาสาร่วมมือกับ Eco-Rep ติดป้ายภาพและช่วยตอบคำถามวันอังคารหน้า พร้อมคำลงท้ายสุภาพ",
        "tips": "เคล็ดลับ TOEFL 2026 Write an Email:\n• 1 ย่อหน้าต่อ 1 Bullet จะช่วยให้ผู้ตรวจเช็กครบทุกประเด็นได้ทันที\n• ใช้น้ำเสียงกึ่งทางการที่สุภาพแต่กระชับ (เช่น I am writing regarding..., Part of the issue seems to be..., I would be happy to...)\n• รักษาความยาวราว 110–145 คำ ให้เหลือเวลาทวนตัวสะกดและรูปกริยา 1 นาที"
      },
      "discussion": {
        "topic": "Automatic Green Defaults vs. Voluntary Opt-In Campus Programs",
        "profPrompt": "In our behavioral economics seminar this week, we examined how default settings shape everyday habits. Next fall, the university is considering automatically enrolling all dining-plan students in a $5-per-semester reusable container and compost expansion fee—meaning students would pay unless they opt out online during the first two weeks. Should universities adopt opt-out defaults for sustainability programs like this, or stick strictly to voluntary opt-in sign-ups? Why?",
        "posts": [
          {
            "name": "Elena",
            "text": "I support the automatic opt-out default. Most students genuinely care about reducing single-use plastic, yet busy freshmen rarely hunt down optional sign-up links during orientation week. As long as the opt-out button takes ten seconds and is clearly emailed to everyone, automatic enrollment respects freedom of choice while generating dependable funding for campus composting."
          },
          {
            "name": "Marcus",
            "text": "Automatic fees feel deceptive, even for a good cause. First-year students already juggle hundreds of emails, so many might miss the deadline and pay $5 unintentionally. If a program truly benefits students, administrators should earn participation transparently through an easy opt-in option at meal-plan checkout rather than relying on student distraction."
          }
        ],
        "model": "While Marcus raises a fair concern about students overlooking orientation emails, I agree with Elena that a transparent opt-out default is far more effective for building campus-wide sustainability—provided the university enforces strict fairness guardrails. Voluntary opt-in programs consistently suffer from participation bottlenecks: even students who strongly endorse composting postpone clicking an extra registration form during move-in week. However, to address Marcus's worry about accidental charges, the dining office should avoid hiding the opt-out link inside dense paperwork. Instead, students could choose between 'keep' or 'opt out' on one mandatory, clearly labeled checkout screen before final billing—an approach behavioral economists call 'active choice.' Pairing a gentle default or active prompt with zero-friction cancellation secures steady infrastructure funding for compost stations without exploiting anyone's inattention.",
        "notes": "จุดเด่นของคำตอบระดับ Band 6.0:\n• เชื่อมโยงทั้งสองความเห็น: ยอมรับข้อกังวลของ Marcus (อาจพลาดอีเมล) และเห็นด้วยกับ Elena (แก้ปัญหาคนผลัดวันช่วงเปิดเทอม)\n• เพิ่มมุมมองใหม่ที่ลึกขึ้น: เสนอแนวคิด 'active choice' (หน้าจอบังคับเลือกที่โปร่งใสก่อนตัดยอด) เพื่อแก้ข้อเสียของทั้งสองระบบ\n• ใช้คำศัพท์ตรงประเด็น: guardrails, participation bottlenecks, zero-friction cancellation",
        "tips": "เคล็ดลับ Write for an Academic Discussion (10 นาที):\n• อ้างอิงชื่อเพื่อนร่วมชั้นทั้ง 2 คนอย่างเป็นธรรมชาติ (เช่น While Marcus raises a fair concern..., I agree with Elena that...)\n• อย่าสรุปความเห็นเพื่อนเฉยๆ ต้องใส่ 'เหตุผลใหม่' หรือ 'เงื่อนไขแก้จุดอ่อน' ของตัวเองเข้าไปด้วย\n• ตั้งเป้า 115–150 คำ ใช้โครงสร้าง While A..., I believe B... + เหตุผล/ตัวอย่าง 1 ข้อ"
      }
    },
    "speaking": {
      "repeat": [
        {
          "text": "Please rinse glass bottles before placing them inside the blue bin.",
          "accent": "us",
          "sex": "f"
        },
        {
          "text": "Our new compost carts sit right beside the main dining entrance.",
          "accent": "us",
          "sex": "f"
        },
        {
          "text": "Volunteers empty the kitchenette containers every evening at nine o'clock sharp.",
          "accent": "us",
          "sex": "f"
        },
        {
          "text": "Although bioplastic cups look recyclable, our local facility cannot process them safely.",
          "accent": "us",
          "sex": "f"
        },
        {
          "text": "Pairing landfill, recycling, and compost bins side by side has reduced sorting mistakes by half.",
          "accent": "us",
          "sex": "f"
        }
      ],
      "interview": {
        "topic": "Everyday Sustainability and Behavioral Habits on Campus",
        "notes": "รูปแบบข้อสอบ TOEFL 2026 Take an Interview:\n• มี 4 คำถามต่อเนื่อง ไม่มีเวลาเตรียมตัว (ต้องตอบทันทีข้อละ ~45 วินาที)\n• ระดับความซับซ้อนไล่จาก: ประสบการณ์ส่วนตัว (Q1) → อุปสรรค/พฤติกรรมจริง (Q2) → การเปรียบเทียบวิธีแก้ (Q3) → ผลกระทบระยะยาว/นโยบาย (Q4)",
        "tips": "ใช้สูตรตอบ 3 ขั้นภายใน 45 วินาที: 1) ตอบตรงคำถามในประโยคแรก 2) ยกตัวอย่างเฉพาะเจาะจง 1 เรื่อง 3) สรุปเหตุผลหรือผลลัพธ์สั้นๆ 1 ประโยค",
        "questions": [
          {
            "q": "Tell me about one small habit you practice at home, school, or work to reduce waste or save resources.",
            "model": "One simple habit I've stuck with over the past two years is carrying a lightweight folding tote and a stainless-steel mug inside my backpack every day. Before that, I used to grab disposable paper coffee cups and plastic bags whenever I stopped by the campus cafe between classes, simply because they were handed to me automatically. Keeping my own mug clipped to my bag made the sustainable option just as effortless as taking a paper cup—and most campus cafes even take fifty cents off my drink, so it turned into a quick daily routine.",
            "notes": "Q1 วัดความคล่องแคล่วในเรื่องใกล้ตัว (Personal Habit) ใช้ past-to-present contrast ('Before that, I used to...') ทำให้คำตอบมีมิติและเป็นธรรมชาติ",
            "tips": "เลือกนิสัยที่เล็กแต่เล่าภาพชัด เช่น พกแก้วน้ำ/แยกขยะ/ปิดไฟ ดีกว่าพูดกว้างๆ ว่า 'ช่วยลดโลกร้อน' โดยไม่มีตัวอย่าง"
          },
          {
            "q": "In your daily routine, what sometimes makes it difficult to make the environmentally friendly choice even when you want to?",
            "model": "For me, the biggest barrier is definitely rushed timing paired with unclear labeling. For example, when I only have five minutes between lectures and walk up to a set of trash cans with faded text instructions, I often hesitate over whether a shiny soup lid counts as paper or coated plastic. When you're in a hurry, even thirty seconds of confusion makes it tempting to just drop the item into regular landfill trash rather than risk contaminating the recycling bin.",
            "notes": "Q2 เชื่อมโยงจากพฤติกรรมส่วนตัวไปสู่ปัญหาเชิงบริบท (time pressure + unclear labeling) ซึ่งสะท้อนคอนเซปต์ friction ในบทเรียนได้อย่างเป็นธรรมชาติ",
            "tips": "ใช้คำเชื่อมบอกเหตุ-ผลแบบภาษาพูด: 'For me, the biggest barrier is...', 'For example, when I only have five minutes...'"
          },
          {
            "q": "If a dormitory wants students to sort compost and recycling accurately, is it better to charge fines for mistakes or redesign the bins and signs? Why?",
            "model": "I strongly believe redesigning the bins and signs works much better than charging fines. First, in a shared dorm kitchenette, it's almost impossible to prove which resident threw the wrong wrapper into the compost cart, so punishing a whole floor feels unfair and creates resentment. By contrast, placing all three bins right next to each other with large color photos of real campus wrappers removes the guesswork right at the moment people are throwing things away. When the right choice takes zero extra thought, compliance rises naturally.",
            "notes": "Q3 เป็นคำถามเปรียบเทียบ (Compare & Contrast) ระหว่าง 'ค่าปรับ' กับ 'การออกแบบถัง/ป้าย' คำตอบที่ดีให้เหตุผลทั้งจุดอ่อนของค่าปรับ (ระบุตัวผู้ทำผิดยาก) และจุดแข็งของการออกแบบ",
            "tips": "ฟันธงฝั่งที่เลือกตั้งแต่ประโยคแรก ('I strongly believe...') แล้ววางเหตุผลแบบ 'First...' และ 'By contrast...'"
          },
          {
            "q": "Do you think habits formed through simple campus nudges, like better bin placement or reusable defaults, stay with people after they graduate?",
            "model": "I think they carry over partially, though maybe not automatically in every situation. On one hand, four years of seeing clear compost sorting stations trains your eye—you start noticing plastic contamination and carrying reusable bottles out of sheer muscle memory. On the other hand, once graduates move into apartments without curbside composting, convenience disappears again. Still, students who experienced well-designed campus systems often become the adults who ask their landlords or workplaces to set up similar sorting stations.",
            "notes": "Q4 ระดับ C1–C2 วัดการคิดเชิงสมดุล (Balanced evaluation) มีทั้งด้านที่ติดตัวไป ('On one hand...') และข้อจำกัดเมื่อบริบทเปลี่ยน ('On the other hand...') พร้อมข้อสรุปเชิงบวก",
            "tips": "อย่าตอบแค่ 'Yes, 100%' สำหรับคำถามปลายเปิดข้อ 4 การตอบแบบมีเงื่อนไข ('partially, because... On one hand... On the other hand...') แสดงระดับภาษาและการคิดวิเคราะห์ที่สูงกว่ามาก"
          }
        ]
      }
    },
    "theme": "How Default Options Shape Everyday Choices & Lecture · Cafeteria Choice Architecture and Nudge Ethics"
  }
];
if (typeof module !== 'undefined') module.exports = { TOEFL_SETS_1 };
