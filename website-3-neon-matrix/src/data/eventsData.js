// ============================================================================
// 🔗 ECLECTICA 2K26 II - EVENT GOOGLE FORM LINKS CONFIGURATION
// 
// Paste your actual Google Form link for each specific event below:
// ============================================================================
export const EVENT_FORM_LINKS = {
  "ideavya": "https://forms.gle/dtXUEeyFknHhxSQe7",
  "tech-quiz": "https://docs.google.com/forms/d/e/1FAIpQLSeFOkbr8Io4Cei_AIEPzZXq3ji3mlIrILjTvJ-0SSNigfcfoQ/viewform?usp=publish-editor",
  "layotrix": "https://docs.google.com/forms/d/e/1FAIpQLSdwzDJ_ghOrKp9--lIHzfts4OtbDiNkRQbIxArDjaavdwvSuA/viewform?usp=dialog",
  "project-expo": "https://docs.google.com/forms/d/e/PASTE_YOUR_PROJECT_EXPO_GOOGLE_FORM_LINK_HERE/viewform",
  "nexcircuit": "https://docs.google.com/forms/d/e/1FAIpQLSfHr8ZZ2eg1qvFfHPMeVWbF3KF2AyHV_J5bwW7b4ZGpjFnNmQ/viewform?usp=publish-editor",
  "pi-storm": "https://docs.google.com/forms/d/e/PASTE_YOUR_PI_STORM_GOOGLE_FORM_LINK_HERE/viewform",
  "bug-hunters": "https://docs.google.com/forms/d/e/PASTE_YOUR_BUG_HUNTERS_GOOGLE_FORM_LINK_HERE/viewform",
  "poster-presentation": "https://docs.google.com/forms/d/e/PASTE_YOUR_POSTER_PRESENTATION_GOOGLE_FORM_LINK_HERE/viewform",
  "debate": "https://docs.google.com/forms/d/e/1FAIpQLScV5Pe7lyzIQfbV2YxiTBHZdqbI1eixDnQBxdS1pEnofUHsYQ/viewform?usp=header",
};

export const FEST_INFO = {
  name: "ECLECTICA 2K26 II",
  edition: "National Level Technical Symposium (Edition II)",
  institution: "MITS Deemed to be University",
  department: "Department of Electronics & Communication Engineering",
  motto: "EXPLORE • CREATE • INNOVATE",
  tagline: "Unleashing Engineering Brilliance in Electronics & Communication",
  date: "NOVEMBER 11 & 12, 2026",
  venue: "ECE Department Seminar Hall & Advanced Laboratories, MITS Campus",
  contactEmail: "eclectica2k26@mits.ac.in",
  contactPhone: "+91 98765 43210 / +91 91234 56789",
};

export const EVENTS = [
  {
    id: "ideavya",
    title: "IDEAVYA 2026",
    subtitle: "Your Idea · Your Innovation",
    category: "Innovation",
    badge: "Ideathon",
    eceSymbol: "💡 [IDEA/INNOV]",
    schematicType: "Innovation & Entrepreneurship",
    tagline: "Identify real-world challenges and build original, feasible solutions — then pitch to win ₹12,500 in prizes!",
    teamSize: "2 - 4 Members",
    roundsCount: 4,
    icon: "Lightbulb",
    formUrl: EVENT_FORM_LINKS["ideavya"],
    overview: "IDEAVYA 2026 is a student-driven innovation competition organised by MITS in collaboration with PathVision Innovations Pvt. Ltd. Unlike conventional competitions with predefined problem statements, Ideathon empowers students to independently identify problems, explore existing solutions, and propose innovative approaches with meaningful societal, technological, or industrial impact. The event features a total cash prize pool of ₹12,500 and an Innovation Bootcamp & Idea Showcase.",
    rounds: [
      {
        roundNumber: "Level 1",
        title: "Idea Submission",
        description: "Participants submit their original ideas outlining the problem identified, proposed solution, degree of innovation, practical feasibility, and expected societal / technological / industrial impact. All teams begin here.",
        duration: "Online Submission Phase",
        scoring: "Quality, originality, and potential of proposed ideas"
      },
      {
        roundNumber: "Level 2",
        title: "Top 20 Teams Shortlisted",
        description: "Twenty teams are shortlisted based on evaluation of submitted ideas. Shortlisted teams are notified and advance to the Semi-Finale pitching stage held at the MITS Campus.",
        duration: "Evaluation & Notification Phase",
        scoring: "Idea quality, real-world relevance, and innovation depth"
      },
      {
        roundNumber: "Level 3 – Semi-Finale",
        title: "Closed-Room Pitching (Top 12 Teams)",
        description: "Twelve teams present their innovations in a closed-room pitching session before an expert evaluation panel. Teams should clearly articulate the problem, solution, and potential impact through structured presentations.",
        duration: "10 Min Pitch + 5 Min Q&A per team",
        scoring: "Innovation depth, feasibility, presentation clarity, and expert panel assessment"
      },
      {
        roundNumber: "Level 4 – Grand Finale",
        title: "On-Stage Grand Finale (Top 6 Teams)",
        description: "Six finalist teams compete through on-stage presentations before judges and a live audience. Teams defend their ideas, demonstrate any models or prototypes at exhibition stalls, and compete for the Best Audience-Loved Idea award through live audience polling.",
        duration: "15 Min On-Stage + Audience Poll",
        scoring: "Judge scores + live audience polling for Best Audience-Loved Idea award"
      }
    ],
    rules: [
      "Team size: 2 to 4 members (multidisciplinary teams encouraged).",
      "Ideas must be original — plagiarism or recycled prior submissions will lead to disqualification.",
      "Problem identification and solution must be independently developed by the team.",
      "Models, prototypes, or concept demonstrations are welcomed but not mandatory.",
      "The event also features an Innovation Bootcamp & Idea Showcase open to all participating teams.",
      "Audience polling determines the 'Best Audience-Loved Idea' prize (₹2,500) independently.",
      "Decision of the expert evaluation panel is final in all judging matters."
    ],
    perks: [
      "🥇 First Prize: ₹6,000",
      "🥈 Second Prize: ₹4,000",
      "🏆 Best Audience-Loved Idea: ₹2,500 (via live audience poll)",
      "Innovation Bootcamp & Idea Showcase participation",
      "Certificates for all participants",
      "Mentorship & entrepreneurial development opportunities"
    ]
  },
  {
    id: "tech-quiz",
    title: "TECH QUIZ",
    subtitle: "Battle of Circuits, Signals & Logic",
    category: "Technical",
    badge: "Core Technical",
    eceSymbol: "⎍ [CLK/LOGIC]",
    schematicType: "Oscillator & Logic",
    tagline: "Test your electronics acumen across written, oral, and high-voltage buzzer rounds!",
    teamSize: "2 - 3 Members",
    roundsCount: 3,
    icon: "HelpCircle",
    formUrl: EVENT_FORM_LINKS["tech-quiz"],
    overview: "Tech Quiz tests your comprehensive fundamentals in Analog & Digital Electronics, Signals, Microprocessors, Communication Systems, and latest engineering trends through 3 escalating rounds.",
    rounds: [
      {
        roundNumber: "1st Round",
        title: "Written Quiz",
        description: "A fast-paced pen-and-paper elimination round with 30 MCQs covering circuit theory, digital logic, semiconductor physics, and electronic components.",
        duration: "30 Minutes",
        scoring: "+1 for correct, negative marking for select advanced sections"
      },
      {
        roundNumber: "2nd Round",
        title: "Oral Quiz",
        description: "Qualified teams will face domain-specific conceptual questions in front of the judging panel. Tests quick recall and deep technical comprehension.",
        duration: "20 Minutes",
        scoring: "Direct point award, passed questions to next team with half score"
      },
      {
        roundNumber: "3rd Round",
        title: "Buzzer Quiz (Grand Finale)",
        description: "The ultimate showdown! For the final teams, an intense buzzer round is conducted. Teams that buzz in first and answer correctly for maximum questions are declared the winners.",
        duration: "25 Minutes",
        scoring: "Fastest buzzers win the points; penalty for incorrect answers"
      }
    ],
    rules: [
      "Each team must consist of 2 to 3 registered student members.",
      "Mobile phones, smart watches, and electronic gadgets are strictly prohibited.",
      "In Round 3 (Buzzer round), pressing the buzzer without being recognized will void the turn.",
      "Ties in the final round will be resolved with a sudden-death tiebreaker question.",
      "The decision of the Quiz Masters and faculty coordinators is final and binding."
    ],
    perks: ["1st & 2nd Cash Prizes", "Merit Certificates", "Participation Certificates for all"]
  },
  {
    id: "layotrix",
    title: "LAYOTRIX",
    subtitle: "Schematic to PCB Layout Challenge",
    category: "Hardware",
    badge: "Circuit CAD",
    eceSymbol: "⏚ [PCB TRACE]",
    schematicType: "PCB Layout & Altium",
    tagline: "Identify required components from circuit names and route professional PCBs in Altium or KiCad!",
    teamSize: "1 - 2 Members",
    roundsCount: 2,
    icon: "Cpu",
    formUrl: EVENT_FORM_LINKS["layotrix"],
    overview: "LAYOTRIX is the flagship PCB CAD design contest evaluating circuit design intuition, bill-of-materials analysis, and rapid board layout using industry-standard tools.",
    rounds: [
      {
        roundNumber: "1st Round",
        title: "Component Requisition Challenge",
        description: "Participants will be provided with a circuit name/spec. They must accurately determine and list all electrical components, IC packages, values, and ratings needed to construct that circuit.",
        duration: "25 Minutes",
        scoring: "Points based on completeness, accuracy of component specifications, and tolerances"
      },
      {
        roundNumber: "2nd Round",
        title: "PCB CAD Layout & Routing",
        description: "Qualifying participants receive a complete circuit schematic. They must capture the schematic and build the PCB layout in CAD software like Altium Designer or KiCad.",
        duration: "60 Minutes",
        scoring: "Evaluated on Design Rule Check (DRC) zero-errors, trace width, ground plane layout, and neatness"
      }
    ],
    rules: [
      "Open to individual participants or teams of up to 2 members.",
      "CAD software provided: KiCad / Altium Designer on campus lab workstations (personal laptops also allowed with pre-installed CAD).",
      "Auto-routers are strictly prohibited; routing must be performed manually.",
      "Zero DRC errors and efficient copper area utilization receive highest weightage.",
      "Gerber files or native design project files must be submitted before the clock runs out."
    ],
    perks: ["Cash Prizes for Top 2 Teams", "Design Excellence Certificates", "Industrial Tool Endorsement"]
  },
  {
    id: "project-expo",
    title: "PROJECT EXPO",
    subtitle: "Innovation & Prototype Showcase",
    category: "Innovation",
    badge: "Hardware & IoT",
    eceSymbol: "📡 [TX/RX / IoT]",
    schematicType: "Embedded Prototype",
    tagline: "Showcase your working engineering projects, hardware models, and IoT innovations to expert judges!",
    teamSize: "2 - 4 Members",
    roundsCount: 1,
    icon: "Sparkles",
    formUrl: EVENT_FORM_LINKS["project-expo"],
    overview: "The premier platform for undergraduate engineers to display their working innovations across Embedded Systems, IoT, Robotics, VLSI, AI on Edge, Wireless Comm, and Green Energy.",
    rounds: [
      {
        roundNumber: "Main Round",
        title: "Live Demonstration & Viva",
        description: "Teams showcase their working prototypes to visitors and the expert academic/industry jury panel followed by an in-depth Q&A.",
        duration: "All-Day Display + 10 Min Jury Evaluation",
        scoring: "Innovation (30%), Technical Complexity (30%), Practical Viability (20%), Presentation (20%)"
      }
    ],
    rules: [
      "Team size: 2 to 4 members per project.",
      "A working prototype or physical hardware setup is mandatory.",
      "Teams must bring their own laptops, microcontrollers, and specialized equipment; standard 230V AC power outlets will be provided.",
      "A technical poster/banner (A1 or flex) explaining the architecture and problem statement is highly recommended.",
      "Plagiarized or pre-fabricated commercial kits without custom engineering will be disqualified."
    ],
    perks: ["Grand Cash Awards", "Best Innovation Trophy", "Incubation & Mentorship Support"]
  },
  {
    id: "nexcircuit",
    title: "NEXCIRCUIT",
    subtitle: "The 4-Stage Circuit Master Championship",
    category: "Circuits",
    badge: "Hands-on Lab",
    eceSymbol: "⚡ [R-L-C & OHM]",
    schematicType: "Breadboard & Multimeter",
    tagline: "From visual component recognition & Ohm's law mastery to hands-on breadboard assembly!",
    teamSize: "2 Members",
    roundsCount: 4,
    icon: "Zap",
    formUrl: EVENT_FORM_LINKS["nexcircuit"],
    overview: "A thrilling four-round elimination marathon designed to find the sharpest hands-on electronics technicians who can think fast and wire accurately under pressure.",
    rounds: [
      {
        roundNumber: "1st Round",
        title: "Visual Component Identification",
        description: "Identify physical electronic components, ICs, sensors, passives, and active elements shown via high-resolution photos and real specimens.",
        duration: "15 Minutes",
        scoring: "Speed & accuracy identification matrix"
      },
      {
        roundNumber: "2nd Round",
        title: "Symbol Matching",
        description: "Match identified components with their IEEE/IEC standard schematic circuit symbols within the time limit.",
        duration: "15 Minutes",
        scoring: "Timed matching puzzle test"
      },
      {
        roundNumber: "3rd Round",
        title: "Voltage, Current & Ohm's Law",
        description: "Solve rapid numerical problems and theoretical questions regarding Voltage, Current, Resistance, Ohm's Law, KVL, KCL, and equivalent circuits.",
        duration: "20 Minutes",
        scoring: "Exact numerical accuracy and unit conversions"
      },
      {
        roundNumber: "4th Round",
        title: "Breadboard Circuit Assembly",
        description: "Finalists receive a target circuit diagram and a component kit. They must construct the circuit on a breadboard and demonstrate expected output on an oscilloscope/multimeter.",
        duration: "35 Minutes",
        scoring: "Fastest correct functional output with clean wire routing"
      }
    ],
    rules: [
      "Teams must consist of exactly 2 members.",
      "Breadboards, wires, and electronic kits will be provided at the lab desk.",
      "Components damaged due to reverse polarity or exceeding ratings will incur penalty deductions.",
      "Multimeter verification will be checked live by the laboratory faculty in charge.",
      "Ties resolved based on completion time in Round 4."
    ],
    perks: ["Circuit Wizard Winner Shield", "Cash Prize & Merit Certificate", "Kit Giveaways"]
  },
  {
    id: "pi-storm",
    title: "PI-STORM",
    subtitle: "Raspberry Pi Rapid Prototyping Hack",
    category: "Embedded Systems",
    badge: "SBC Hackathon",
    eceSymbol: "𝝅 [GPIO & ARM]",
    schematicType: "Raspberry Pi & Python",
    tagline: "Tackle a surprise problem statement using Raspberry Pi, build a prototype, and pitch your solution!",
    teamSize: "2 - 3 Members",
    roundsCount: 1,
    icon: "Terminal",
    formUrl: EVENT_FORM_LINKS["pi-storm"],
    overview: "PI-STORM is a high-intensity embedded challenge. An unrevealed real-world problem statement will be given on the spot. Teams prototype a working solution utilizing Raspberry Pi.",
    rounds: [
      {
        roundNumber: "Single Stage Hack",
        title: "Rapid Prototyping & Pitch",
        description: "Teams receive the problem statement at the start of the session. They have 2.5 hours to code (Python/C), interface GPIOs, configure sensors/displays, and pitch their working solution.",
        duration: "2.5 Hours",
        scoring: "Problem-solving ingenuity (30%), GPIO & hardware interfacing (30%), Code structure (20%), Viva & demo (20%)"
      }
    ],
    rules: [
      "Team of 2 to 3 members.",
      "Participants are encouraged to bring their Raspberry Pi board (Pi 3 / 4 / 5 or Zero), micro-SD card with OS, and preferred sensors. Limited lab boards available on prior request.",
      "Use of open-source Python libraries (RPi.GPIO, gpiozero, OpenCV, Flask, etc.) is permitted.",
      "Both hardware connection and software execution must be demonstrated live to the judges.",
      "Judges' decision regarding prototype grading will be absolute."
    ],
    perks: ["Best Hacker Cash Prize", "Certificate of Technical Excellence", "Exclusive Raspberry Pi Swag"]
  },
  {
    id: "bug-hunters",
    title: "BUG HUNTERS",
    subtitle: "Multi-Language Code & Debug Hunt",
    category: "Coding",
    badge: "Software & Logic",
    eceSymbol: "0xFE [DEBUG]",
    schematicType: "Firmware & Compiler",
    tagline: "MCQs, rapid-fire oral technical questions, and live code debugging across C, C++, Java, Python & SQL!",
    teamSize: "1 - 2 Members",
    roundsCount: 3,
    icon: "ShieldCheck",
    formUrl: EVENT_FORM_LINKS["bug-hunters"],
    overview: "Do you have an eagle eye for runtime errors, memory leaks, and syntax pitfalls? Put your programming mettle to the test across 5 major software languages.",
    rounds: [
      {
        roundNumber: "1st Round",
        title: "Coding MCQs",
        description: "Written / computer-based test covering code output prediction, pointer arithmetic, memory allocation, and algorithmic time complexity.",
        duration: "30 Minutes",
        scoring: "Score-based ranking; top 50% advance"
      },
      {
        roundNumber: "2nd Round",
        title: "Polyglot Oral Round",
        description: "Rapid-fire viva questions fired by judges spanning C, C++, Java, Python, and SQL queries. Fast technical answering is crucial.",
        duration: "20 Minutes",
        scoring: "Points awarded per prompt; passes allowed with penalty"
      },
      {
        roundNumber: "3rd Round",
        title: "Live Code Debugging",
        description: "Participants are given intentionally corrupted code snippets with compile, logic, and runtime errors. You must fix the bugs and ensure all test cases pass.",
        duration: "40 Minutes",
        scoring: "Ranked by number of successfully executed test cases and time of submission"
      }
    ],
    rules: [
      "Teams of 1 or 2 members.",
      "Programming stacks tested: C, C++, Java, Python, and SQL.",
      "Strict prohibition of internet browsing, ChatGPT, Copilot, or external assistance during Round 3.",
      "Standard IDEs (VS Code, CodeBlocks, PyCharm, Eclipse) will be provided on lab systems.",
      "Any malpractice will lead to immediate disqualification."
    ],
    perks: ["Master Debugger Trophy", "Cash Awards", "Department Merit Certificate"]
  },
  {
    id: "poster-presentation",
    title: "POSTER PRESENTATION",
    subtitle: "Research, Concept & Real-World Solutions",
    category: "Research",
    badge: "Ideation",
    eceSymbol: "⚛ [RESEARCH/VLSI]",
    schematicType: "Scholarly Symposium",
    tagline: "Showcase your research papers, innovative concepts, and creative solutions to real-world problems!",
    teamSize: "1 - 3 Members",
    roundsCount: 1,
    icon: "FileText",
    formUrl: EVENT_FORM_LINKS["poster-presentation"],
    overview: "Showcase your ideas, research, and creativity through an engaging technical poster. Present your research papers, innovative concepts, technical projects, or engineered solutions to pressing real-world challenges.",
    rounds: [
      {
        roundNumber: "Presentation & Defense",
        title: "Poster Exhibition & Jury Q&A",
        description: "Teams mount their posters on assigned display boards. Each team receives 5 minutes to deliver an executive pitch to the jury panel followed by 3 minutes of technical defense.",
        duration: "5 Mins Pitch + 3 Mins Q&A",
        scoring: "Originality of concept (25%), Technical depth (25%), Poster visual aesthetics & clarity (25%), Oral defense (25%)"
      }
    ],
    rules: [
      "Open to solo presenters or teams of up to 3 members.",
      "Recommended poster dimensions: Standard A1 or A2 sheet (landscape or portrait).",
      "Poster must contain: Title, Authors, Abstract, Methodology / Circuit Diagram, Results / Graphs, and Conclusion.",
      "All text should be legible from a distance of 1.5 meters.",
      "Plagiarized papers without proper citations will not be evaluated."
    ],
    perks: ["Best Research Paper Award", "Cash Prizes for Top 2 Presentations", "Conference Publication Recommendation"]
  },
  {
    id: "debate",
    title: "DEBATE",
    subtitle: "Battle of Eloquence & Technical Rhetoric",
    category: "Literary",
    badge: "Oratory",
    tagline: "Prepared opening arguments followed by high-pressure extempore clashes of intellect!",
    eceSymbol: "🎙 [SIGNAL RHETORIC]",
    schematicType: "Contemporary Clash",
    teamSize: "2 Members",
    roundsCount: 2,
    icon: "Users",
    formUrl: EVENT_FORM_LINKS["debate"],
    overview: "Debate evaluates critical thinking, argumentative agility, and persuasive speaking on contentious themes surrounding emerging technology, AI ethics, automation, and societal impacts.",
    rounds: [
      {
        roundNumber: "1st Round",
        title: "Prepared Debate",
        description: "The topic is announced in advance on the symposium portal. Teams prepare researched arguments and deliver structured affirmative or negative opening speeches.",
        duration: "4 Minutes per speaker + 2 Min Rebuttal",
        scoring: "Argument structure, factual backing, presentation fluency"
      },
      {
        roundNumber: "2nd Round",
        title: "Extempore Debate (Finale)",
        description: "The topic is announced on the spot. Finalist teams receive 10-15 minutes of preparation time to discuss, organize their thoughts, and prepare their counter-arguments before the debate begins.",
        duration: "10-15 Min Prep + 5 Min Debate per pair",
        scoring: "Spontaneous rhetoric, counter-argument sharpness, poise and logic"
      }
    ],
    rules: [
      "Each team consists of 2 members (affirmative & negative representation).",
      "In Round 2, strictly 10 to 15 minutes preparation time is provided after topic announcement.",
      "No personal attacks, abusive language, or unparliamentary speech allowed.",
      "Adherence to the time bell is strictly monitored; marks deducted for exceeding time.",
      "Jury verdict on argumentative eloquence and logic is decisive."
    ],
    perks: ["Best Orator Rolling Trophy", "Cash Prizes for Winning & Runner-up Teams", "Certificate of Honor"]
  }
];
