// ============================================================================
// 🔗 ECLECTICA 2K26 II - EVENT GOOGLE FORM LINKS CONFIGURATION
// 
// Paste your actual Google Form link for each specific event below:
// ============================================================================
export const EVENT_FORM_LINKS = {
  "ideavya": "https://forms.gle/dtXUEeyFknHhxSQe7",
  "tech-quiz": "https://docs.google.com/forms/d/e/1FAIpQLSeFOkbr8Io4Cei_AIEPzZXq3ji3mlIrILjTvJ-0SSNigfcfoQ/viewform?usp=publish-editor",
  "layotrix": "https://docs.google.com/forms/d/e/1FAIpQLSdwzDJ_ghOrKp9--lIHzfts4OtbDiNkRQbIxArDjaavdwvSuA/viewform?usp=dialog",
  "project-expo": "https://forms.gle/7NPPkAmEBFW9FmkW9",
  "nexcircuit": "https://docs.google.com/forms/d/e/1FAIpQLSfHr8ZZ2eg1qvFfHPMeVWbF3KF2AyHV_J5bwW7b4ZGpjFnNmQ/viewform?usp=publish-editor",
  "bug-hunters": "https://docs.google.com/forms/d/e/1FAIpQLSfzVQGbB67zyFK_aBzm32dAqYPYhN9ntpSBNodGR5KGSuD1Nw/viewform?usp=header",
  "poster-presentation": "https://docs.google.com/forms/d/e/1FAIpQLSfy2_VmJNytwn_vmszZXA8t78S_6hNdNl8iELQngKyQ8qLU0g/viewform?usp=header",
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
  contactEmail: "revanthreddy5126@gmail.com",
  contactPhone: "+91 79815 76818 / +91 91132 65514  / +91 81252 46476  / +91 95024 43406",
};

export const EVENTS = [
  {
    id: "ideavya",
    image: "/event-ideavya.png",
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
    image: "/event-tech-quiz.jpg",
    title: "TECH QUIZ",
    subtitle: "Battle of Circuits, Signals & Logic",
    category: "Technical",
    badge: "Core Technical",
    eceSymbol: "⎍ [CLK/LOGIC]",
    schematicType: "Oscillator & Logic",
    tagline: "Answer MCQs, apply your technical knowledge, and race the clock in rapid fire — test your ECE brilliance!",
    teamSize: "Individual",
    roundsCount: 3,
    icon: "HelpCircle",
    formUrl: EVENT_FORM_LINKS["tech-quiz"],
    overview: "Join us for ECE Fest 2026 — ECLECTICA-2K26-II! Tech Quiz is a 3-round technical challenge that tests your MCQ knowledge, problem-solving ability, and rapid-fire recall. Open to MITS and external college students.",
    rounds: [
      {
        roundNumber: "Round 1",
        title: "Tech MCQ's",
        description: "Answer multiple-choice technical questions covering ECE fundamentals, circuits, components, and logical reasoning concepts.",
        duration: "Timed",
        scoring: "Score-based elimination; top teams advance"
      },
      {
        roundNumber: "Round 2",
        title: "Think and Apply",
        description: "Understand the given problem and apply your technical knowledge to solve it. Tests analytical thinking and practical ECE application.",
        duration: "Timed",
        scoring: "Accuracy and problem-solving depth"
      },
      {
        roundNumber: "Round 3",
        title: "Rapid Fire",
        description: "Answer questions quickly and correctly within the given time. Fast recall and precision win the round!",
        duration: "Timed",
        scoring: "Speed + accuracy; highest correct answers wins"
      }
    ],
    rules: [
      "Individual participation only.",
      "Open to students from MITS and other recognized colleges and educational institutions.",
      "Registration Fee — Internal: ₹50 per head | External: ₹100 per participant.",
      "Mobile phones, smart watches, and electronic gadgets are strictly prohibited during the quiz.",
      "The decision of the Quiz Masters and faculty coordinators is final and binding."
    ],
    perks: ["Exciting Cash Prizes", "Merit Certificates", "Participation Certificates for all"]
  },
  {
    id: "layotrix",
    image: "/event-layotrix.png",
    title: "LAYOTRIX",
    subtitle: "PCB Design Challenge — Think it. Design it. Bring the circuit to life!",
    category: "Hardware",
    badge: "Circuit CAD",
    eceSymbol: "⏚ [PCB TRACE]",
    schematicType: "PCB Layout & Altium",
    tagline: "Identify circuit components and design a full PCB layout using Altium Designer or KiCad!",
    teamSize: "1 - 2 Members",
    roundsCount: 2,
    icon: "Cpu",
    formUrl: EVENT_FORM_LINKS["layotrix"],
    overview: "LAYOTRIX 2026 challenges participants to step into the world of circuits and PCB design! Identify the components behind a circuit and turn a given circuit into a PCB design using industry-standard design tools. Held on Nov 11 & 12 at MITS Campus, Madanapalle.",
    rounds: [
      {
        roundNumber: "Round 1",
        title: "Circuit Component Challenge",
        description: "Each team will be given a circuit name. Identify and list all the components required to build it — test your component knowledge and circuit intuition.",
        duration: "Timed",
        scoring: "Completeness and accuracy of component list"
      },
      {
        roundNumber: "Round 2",
        title: "PCB Design Challenge",
        description: "Each team will be given a circuit to design using a PCB design tool such as Altium Designer or KiCad. Route traces, place components, and produce a clean board layout.",
        duration: "Timed",
        scoring: "DRC errors, trace routing quality, layout neatness"
      }
    ],
    rules: [
      "Team size: 1 or 2 members per team.",
      "Registration Fee — Internals: ₹50 per head | Externals: ₹100 per head.",
      "Open to students from MITS and other recognized colleges and educational institutions.",
      "Auto-routers are strictly prohibited; all routing must be performed manually.",
      "Gerber files or native project files must be submitted before the time runs out.",
      "Personal laptops with pre-installed Altium Designer or KiCad are allowed."
    ],
    perks: ["Cash Prizes for Top Teams", "Design Excellence Certificates", "Industrial Tool Endorsement"]
  },
  {
    id: "project-expo",
    image: "/event-project-expo.jpg",
    title: "PROJECT EXPO",
    subtitle: "Innovation & Prototype Showcase",
    category: "Innovation",
    badge: "Hardware & IoT",
    eceSymbol: "📡 [TX/RX / IoT]",
    schematicType: "Embedded Prototype",
    tagline: "Showcase your project, demonstrate its working, and impress judges in a live on-spot exhibition!",
    teamSize: "1 - 3 Members",
    roundsCount: 1,
    icon: "Sparkles",
    formUrl: EVENT_FORM_LINKS["project-expo"],
    overview: "PROJECT EXPO 2026 is a live on-spot project exhibition where all registered teams directly present and demonstrate their projects to judges and audience. Winners are selected based on innovation, creativity, practical application, presentation, and overall project impact. Interdisciplinary teams encouraged.",
    rounds: [
      {
        roundNumber: "Single Round",
        title: "Project Expo — On-Spot Exhibition",
        description: "All registered teams directly participate in the expo. Each team presents and demonstrates their project to judges and audience, explains its uniqueness, demonstrates working (if applicable), and answers judge questions.",
        duration: "All-Day Exhibition",
        scoring: "Innovation, Creativity, Practical Application, Presentation & Overall Impact"
      }
    ],
    rules: [
      "Team size: 1 to 3 members. Interdisciplinary participation encouraged (students from at least two departments).",
      "Registration Fee — Internal: ₹150 per team | External: ₹300 per team.",
      "Open to students from MITS and other recognized colleges and educational institutions.",
      "Each team should include students from at least two different academic departments or disciplines.",
      "All teams must present and demonstrate their project; judges will ask questions.",
      "Plagiarized or commercially pre-fabricated kits without custom engineering will be disqualified."
    ],
    perks: ["Grand Cash Awards", "Best Innovation Trophy", "Incubation & Mentorship Support"]
  },
  {
    id: "nexcircuit",
    image: "/event-nexcircuit.jpg",
    title: "NEXCIRCUIT",
    subtitle: "Electronics Knowledge & Circuit Debugging Championship",
    category: "Circuits",
    badge: "Hands-on Lab",
    eceSymbol: "⚡ [R-L-C & OHM]",
    schematicType: "Breadboard & Multimeter",
    tagline: "Test ECE fundamentals, identify components, and debug circuits in 3 exciting technical rounds!",
    teamSize: "Individual",
    roundsCount: 3,
    icon: "Zap",
    formUrl: EVENT_FORM_LINKS["nexcircuit"],
    overview: "NEXCIRCUITS is an exciting technical event designed to test students' fundamental electronics knowledge, component identification skills, and practical circuit troubleshooting abilities. Get ready to explore electronics, identify components, solve circuit challenges, and demonstrate your technical skills!",
    rounds: [
      {
        roundNumber: "Round 1",
        title: "Technical Quiz",
        description: "Test your basic knowledge and technical concepts. Answer questions based on electronic circuits, components, fundamental ECE concepts, and basic logical reasoning.",
        duration: "Timed",
        scoring: "Score-based elimination; top participants advance"
      },
      {
        roundNumber: "Round 2",
        title: "Component Identification",
        description: "Identify various electronic components. Understand their symbols, functions, and applications. Test your practical knowledge of electronic components.",
        duration: "Timed",
        scoring: "Speed & accuracy of identification"
      },
      {
        roundNumber: "Round 3",
        title: "Circuit Debugging",
        description: "Identify and fix faults in given circuits. Apply your practical electronics knowledge to troubleshoot and restore correct circuit operation.",
        duration: "Timed",
        scoring: "Accuracy of fault identification and correction"
      }
    ],
    rules: [
      "Individual participation only.",
      "Open to students from MITS and other recognized colleges; Cash prizes for winners.",
      "Event Dates: 11 & 12 November 2026, Venue: MITS Campus, Madanapalle.",
      "No electronic aids or mobile phones permitted during rounds.",
      "Judge's decision on circuit evaluation is final."
    ],
    perks: ["Win Exciting Cash Prizes", "Circuit Champion Certificate", "Merit Recognition"]
  },
  {
    id: "bug-hunters",
    image: "/event-bug-hunters.jpg",
    title: "BUG HUNTERS",
    subtitle: "Code • Debug • Conquer",
    category: "Coding",
    badge: "Software & Logic",
    eceSymbol: "0xFE [DEBUG]",
    schematicType: "Firmware & Compiler",
    tagline: "Crack C programming MCQs, debug faulty code, and solve the mystery challenge in 3 fierce rounds!",
    teamSize: "Individual",
    roundsCount: 3,
    icon: "ShieldCheck",
    formUrl: EVENT_FORM_LINKS["bug-hunters"],
    overview: "BUG HUNTERS is an exciting technical event designed to challenge your C programming knowledge, logical thinking, debugging skills, and problem-solving abilities. Get ready to explore the world of coding, identify tricky programs, and prove your programming skills. Event Date: 12 November 2026, 10:00 AM onwards at MITS Campus.",
    rounds: [
      {
        roundNumber: "Round 1",
        title: "Code Quiz",
        description: "A 15-question multiple-choice quiz based on C programming, progressing from easy to difficult. Test your knowledge of programming fundamentals, operators, loops, code outputs, and tricky concepts.",
        duration: "Timed",
        scoring: "Score-based elimination; top participants advance"
      },
      {
        roundNumber: "Round 2",
        title: "Debug the Code",
        description: "Identify errors, correct faulty C programs, and produce the expected output. Test your debugging skills, accuracy, and logical reasoning on intentionally buggy code snippets.",
        duration: "Timed",
        scoring: "Number of correctly debugged programs within time"
      },
      {
        roundNumber: "Round 3",
        title: "Mystery Challenge",
        description: "Enter the final challenge with interesting and tricky programming problems. Apply your coding knowledge, logical thinking, and problem-solving skills to crack the mystery.",
        duration: "Timed",
        scoring: "Accuracy and speed of solutions"
      }
    ],
    rules: [
      "Individual participation only.",
      "Registration Fee: ₹50 per participant.",
      "Event focuses on C programming language across all rounds.",
      "No internet access, AI tools, or external aids permitted during rounds.",
      "Venue: MITS Deemed to be University Campus, Madanapalle — Organised by Dept of ECE.",
      "Any malpractice will lead to immediate disqualification."
    ],
    perks: ["Cash Prizes for Winners", "Master Debugger Certificate", "Department Merit Recognition"]
  },
  {
    id: "poster-presentation",
    image: "/event-poster-presentation.jpg",
    title: "POSTER PRESENTATION",
    subtitle: "Come. Present. Innovate. Inspire.",
    category: "Research",
    badge: "Ideation",
    eceSymbol: "⚛ [RESEARCH/VLSI]",
    schematicType: "Scholarly Symposium",
    tagline: "Present one original poster on Electronics, Communication, Technology or Science and defend it before a jury!",
    teamSize: "1 - 2 Members",
    roundsCount: 1,
    icon: "FileText",
    formUrl: EVENT_FORM_LINKS["poster-presentation"],
    overview: "POSTER PRESENTATION 2026 invites teams to present one original poster related to Electronics, Communication, Technology, Science, Innovation, or an interdisciplinary topic. Content must clearly explain the problem, proposed solution/idea, methodology, applications, and outcomes. Event Dates: 11 & 12 November 2026, MITS Campus.",
    rounds: [
      {
        roundNumber: "Single Round",
        title: "Poster Exhibition & Jury Evaluation",
        description: "Teams present their original poster to the jury panel. Each team can present only one poster. The content should explain the problem, proposed solution, methodology, applications, and outcomes clearly.",
        duration: "Allotted time per team",
        scoring: "Content clarity, originality, methodology, visual design & jury Q&A"
      }
    ],
    rules: [
      "Team size: 1 to 2 members per team.",
      "Registration Fee — Internals: ₹50 per head | Externals: ₹100 per head.",
      "Each team can present one original poster only; multiple submissions are not allowed.",
      "Poster topic must be related to Electronics, Communication, Technology, Science, Innovation, or an interdisciplinary subject.",
      "The poster must be original work; plagiarized or copied content may lead to disqualification.",
      "Participants must bring/present their poster according to the specified format and guidelines.",
      "Participants must carry their college ID card. Participants retain ownership of their original ideas."
    ],
    perks: ["Best Research Paper Award", "Cash Prizes for Top Presentations", "Certificate for all participants"]
  },
  {
    id: "debate",
    image: "/event-debate.jpg",
    title: "DEBATE",
    subtitle: "Battle of Eloquence & Technical Rhetoric",
    category: "Literary",
    badge: "Oratory",
    tagline: "Argue, rebut, and persuade — a dynamic debate on technology and society open to all students!",
    eceSymbol: "🎙 [SIGNAL RHETORIC]",
    schematicType: "Contemporary Clash",
    teamSize: "1 - 3 Members",
    roundsCount: 2,
    icon: "Users",
    formUrl: EVENT_FORM_LINKS["debate"],
    overview: "DEBATE COMPETITION tests your critical thinking, argumentative agility, and persuasive speaking on contentious themes surrounding emerging technology, AI ethics, automation, and societal impacts. Open to MITS and external college students. Event Dates: 10 & 11 November 2026, MITS Campus.",
    rounds: [
      {
        roundNumber: "Round 1",
        title: "Prepared Debate",
        description: "Teams prepare researched arguments and deliver structured affirmative or negative opening speeches on a topic announced in advance.",
        duration: "Timed per speaker + Rebuttal",
        scoring: "Argument structure, factual backing, presentation fluency"
      },
      {
        roundNumber: "Round 2",
        title: "Extempore Debate (Finale)",
        description: "The topic is announced on the spot. Teams receive preparation time to organize their thoughts before the final debate begins.",
        duration: "Prep Time + Debate per pair",
        scoring: "Spontaneous rhetoric, counter-argument sharpness, poise and logic"
      }
    ],
    rules: [
      "Team size: 1 to 3 participants per team.",
      "Registration Fee — MITS Students: ₹50 per head | Students from Other Colleges: ₹100 per head.",
      "Open to students from MITS and other recognized colleges and educational institutions.",
      "No personal attacks, abusive language, or unparliamentary speech allowed.",
      "Adherence to the time bell is strictly monitored; marks deducted for exceeding time.",
      "Jury verdict on argumentative eloquence and logic is decisive and final."
    ],
    perks: ["Best Orator Rolling Trophy", "Cash Prizes for Winning & Runner-up Teams", "Certificate of Honor"]
  }
];
