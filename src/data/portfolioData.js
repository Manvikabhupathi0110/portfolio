export const portfolioData = {
  personal: {
    name: "Manvika Bhupathi",
    officialName: "Bhupathi Manvika",
    role: "Computer Science Undergraduate & Aspiring Software Engineer",
    subRoles: [
      "Aspiring Software Engineer",
      "Full-Stack Web Developer",
      "Android App Developer",
      "AI & Computer Vision Enthusiast"
    ],
    bio: "Computer Science and Engineering undergraduate at Rajiv Gandhi University of Knowledge Technologies (RGUKT) - Basar. Passionate about architecting practical, user-friendly solutions through modern full-stack web systems, native Android applications, and applied computer vision. Actively seeking Software Engineering & App Development internships to build impactful software.",
    location: "Telangana, India",
    email: "manvikabhupathi@gmail.com",
    avatar: "/passphoto.jpeg",
    resumeUrl: "/api/resume",
    stats: [
      { label: "B.Tech CGPA", value: "9.4" },
      { label: "PUC CGPA", value: "9.89" },
      { label: "Projects Completed", value: "6+" },
      { label: "Industry Internships", value: "1" },
      { label: "Hackathons", value: "3+" }
    ]
  },

  socialLinks: {
    github: {
      name: "GitHub",
      url: "https://github.com/Manvikabhupathi0110",
      username: "Manvikabhupathi0110"
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/manvika-bhupathi-386997316/",
      username: "manvika-bhupathi"
    },
    leetcode: {
      name: "LeetCode",
      url: "https://leetcode.com/u/BhupathiManvika/",
      username: "BhupathiManvika"
    },
    geeksforgeeks: {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/profile/manvikabhupathi",
      username: "manvikabhupathi"
    },
    email: {
      name: "Email",
      url: "mailto:manvikabhupathi@gmail.com",
      address: "manvikabhupathi@gmail.com"
    }
  },

  education: [
    {
      institution: "Rajiv Gandhi University of Knowledge Technologies (RGUKT)",
      campus: "Basar, Telangana",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      duration: "2024 - 2028 (Expected)",
      grade: "CGPA: 9.4 / 10",
      status: "Currently Pursuing (3rd Year)",
      highlights: [
        "Consistent academic excellence with a current 9.4 CGPA in core engineering coursework.",
        "Deep foundation in Data Structures & Algorithms, Object-Oriented Programming, and Database Systems.",
        "Active contributor in collegiate hackathons including Smart India Hackathon internal selections."
      ]
    },
    {
      institution: "Rajiv Gandhi University of Knowledge Technologies (RGUKT)",
      campus: "Basar, Telangana",
      degree: "Pre University Course (PUC)",
      field: "Mathematics, Physics, Chemistry (MPC)",
      duration: "2022 - 2024",
      grade: "CGPA: 9.89 / 10",
      status: "Completed",
      highlights: [
        "Ranked among the top percentile with a near-perfect 9.89 CGPA.",
        "Developed strong mathematical rigor and analytical reasoning foundational to algorithm design."
      ]
    },
    {
      institution: "Telangana State Model School",
      campus: "Armoor, Telangana",
      degree: "Secondary School Certificate (10th Board)",
      field: "General Academics",
      duration: "2021 - 2022",
      grade: "CGPA: 10.0 / 10",
      status: "Completed",
      highlights: [
        "Secured a perfect 10.0 CGPA on state board examinations."
      ]
    }
  ],

  experience: [
    {
      role: "App Development Intern",
      company: "ApexPlanet Software Pvt. Ltd.",
      type: "Internship (Virtual / Online)",
      duration: "21 May, 2026 - 04 July, 2026",
      credentialId: "APSPL2635382",
      certificateUrl: "/api/certificate",
      verificationUrl: "https://www.apexplanet.in",
      verified: true,
      technologies: ["Android Studio", "Kotlin", "Firebase", "Material Design", "Git"],
      responsibilities: [
        "Designed and implemented the core application architecture for SparkFix, an on-demand repair and maintenance Android app.",
        "Integrated Firebase Realtime Database and Cloud Authentication for real-time service tracking and user management.",
        "Conducted end-to-end testing, UI optimizations, and debugging to ensure smooth performance across Android devices.",
        "Collaborated with project mentors and followed software development lifecycle (SDLC) best practices."
      ]
    },
    {
      role: "Innovation Program Participant",
      company: "Scaler School YIIC 2.0",
      type: "Innovation Fellowship",
      duration: "Feb 2025 - June 2025",
      verified: true,
      technologies: ["Applied AI", "Product Ideation", "Entrepreneurship", "Rapid Prototyping"],
      responsibilities: [
        "Participated in weekly intensive sprint tracks focusing on AI integration, startup dynamics, and tech product design.",
        "Collaborated on practical, technology-driven problem solving and pitch presentations.",
        "Gained direct exposure to agile product iterations and market validation strategies."
      ]
    }
  ],

  projects: [
    {
      id: "naaridhan",
      title: "NaariDhan",
      subtitle: "AI Financial Empowerment Platform",
      category: "Web & AI",
      badge: "Featured Live",
      featured: true,
      summary: "An interactive AI-powered financial empowerment web application dedicated to women's financial inclusion, personal budgeting, and intelligent micro-savings tracking.",
      problem: "Women often lack accessible, intuitive tools tailored to personal financial planning, smart budgeting, and self-paced financial literacy.",
      solution: "Engineered a responsive web platform that provides interactive savings calculators, personalized budget categorizations, and goal tracking with an empowering, accessible UI.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Local Storage", "Netlify"],
      liveUrl: "https://splendid-tulumba-b1865e.netlify.app/",
      githubUrl: "https://github.com/Manvikabhupathi0110/NaariDhan",
      keyFeatures: [
        "AI-assisted micro-savings and emergency fund calculator",
        "Dynamic expense distribution charts and budgeting goals",
        "Mobile-first responsive design with warm, accessible typography",
        "Deployed and verified live on Netlify"
      ]
    },
    {
      id: "stegoshield",
      title: "StegoShield",
      subtitle: "Secure Image Steganography System",
      category: "Security",
      badge: "Featured Live",
      featured: true,
      summary: "A cryptographic security application that embeds confidential encrypted messages within image pixels using Least Significant Bit (LSB) encoding and AES-256 encryption.",
      problem: "Traditional plaintext communications transmitted across open networks are vulnerable to unauthorized eavesdropping, tampering, and interception.",
      solution: "Created a dual-layered privacy suite where messages are first cryptographically encrypted with AES and subsequently concealed inside standard image containers with zero visible loss of quality.",
      technologies: ["Python", "LSB Steganography", "AES Encryption", "HTML5", "CSS3", "JavaScript", "Vercel"],
      liveUrl: "https://stegoshield-nine.vercel.app/",
      githubUrl: "https://github.com/Manvikabhupathi0110/StegoShield",
      keyFeatures: [
        "AES symmetric encryption combined with pixel-level LSB steganography",
        "Secure admin-gated message extraction and verification workflow",
        "Steganalysis resistance ensuring indistinguishable cover images",
        "Live web deployment on Vercel"
      ]
    },
    {
      id: "kreedai",
      title: "KreedAI",
      subtitle: "AI-Based Sports Assessment System",
      category: "Web & AI",
      badge: "SIH Top 45 Teams",
      featured: true,
      summary: "A computer vision platform developed for the Smart India Hackathon that analyzes athletic movements and form in real-time using pose estimation.",
      problem: "Aspiring athletes often lack affordable access to professional biomechanical coaching to correct posture defects and optimize athletic output.",
      solution: "Developed an automated assessment pipeline utilizing OpenCV and MediaPipe to map body landmarks from video feeds, computing real-time joint angles and posture deviations.",
      technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "Pose Estimation"],
      liveUrl: null,
      githubUrl: "https://github.com/Manvikabhupathi0110",
      hackathon: "Smart India Hackathon (SIH) - Top 45 Teams in College Internal Round",
      keyFeatures: [
        "33-point real-time skeletal landmark detection via MediaPipe",
        "Mathematical angle computation for posture validation and form error warnings",
        "Selected in Top 45 teams among competitive student engineering submissions in SIH internal hackathon"
      ]
    },
    {
      id: "sparkfix",
      title: "SparkFix",
      subtitle: "On-Demand Repair & Maintenance Android App",
      category: "Mobile",
      badge: "Industry Project",
      featured: true,
      summary: "A native Android application built during the ApexPlanet internship that connects homeowners with certified technicians for domestic repair and maintenance services.",
      problem: "Scheduling domestic appliance repairs and electrical maintenance is often fragmented, lacking transparent pricing and reliable service confirmation.",
      solution: "Built a native Android client backed by Firebase providing category discovery, seamless booking forms, real-time technician status, and service history.",
      technologies: ["Android Studio", "Kotlin", "Firebase Realtime DB", "Cloud Auth", "Material Design"],
      liveUrl: null,
      githubUrl: "https://github.com/Manvikabhupathi0110/sparkfix",
      context: "Engineered during Internship at ApexPlanet Software Pvt. Ltd.",
      keyFeatures: [
        "Service catalog with instant cost estimators and technician booking",
        "Real-time booking lifecycle management using Firebase",
        "Material UI tailored for responsiveness across modern Android screen densities",
        "Built in Kotlin following clean architecture principles"
      ]
    },
    {
      id: "hostel-system",
      title: "Hostel Maintenance System",
      subtitle: "Residence Hall Issue Ticketing Portal",
      category: "Web & AI",
      badge: "Archive",
      featured: false,
      summary: "A web-based complaint logging and maintenance ticketing portal for student campus residences.",
      problem: "Manual paper-based complaint logs in campus hostels cause communication delays between students and facility technicians.",
      solution: "Created an online dashboard allowing students to submit maintenance tickets with room details and severity tracking.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Local State"],
      liveUrl: null,
      githubUrl: "https://github.com/Manvikabhupathi0110/hostel-maintenance-system",
      keyFeatures: [
        "Ticket submission with priority levels and room tracking",
        "Clean tabular dashboard for maintenance staff review"
      ]
    },
    {
      id: "airfare-index",
      title: "AirFareIndex",
      subtitle: "Flight Pricing Trend & Aviation Data Analyzer",
      category: "Data Science",
      badge: "Archive",
      featured: false,
      summary: "An analytical dashboard and script suite tracking flight fare trends and aviation statistics using aviation APIs and data parsing.",
      problem: "Volatile flight ticket pricing makes finding cost-effective travel timing difficult without structured historical fare data.",
      solution: "Constructed data pipelines integrating aviation APIs to analyze fare variances across booking windows.",
      technologies: ["Python", "Pandas", "HTML5", "Aviation APIs"],
      liveUrl: null,
      githubUrl: "https://github.com/Manvikabhupathi0110/AirFareIndex",
      keyFeatures: [
        "Aviation API integration and fare price trend analytics",
        "Tabular data structuring using Python data processing libraries"
      ]
    }
  ],

  skills: {
    languages: [
      { name: "Python", level: "Proficient", icon: "Code", projects: ["KreedAI", "StegoShield", "AirFareIndex"] },
      { name: "Java", level: "Proficient", icon: "FileCode", projects: ["Academic Core", "Coursera Java"] },
      { name: "JavaScript (ES6+)", level: "Proficient", icon: "Braces", projects: ["NaariDhan", "Hostel System", "Portfolio"] },
      { name: "Kotlin", level: "Practicing", icon: "Smartphone", projects: ["SparkFix Android App"] },
      { name: "SQL", level: "Proficient", icon: "Database", projects: ["MySQL", "HackerRank SQL"] },
      { name: "HTML5 & CSS3", level: "Proficient", icon: "Layout", projects: ["All Web Projects"] }
    ],
    frontend: [
      { name: "React", level: "Proficient", desc: "Component architecture, hooks, state management" },
      { name: "Tailwind CSS", level: "Proficient", desc: "Responsive utility styling, dark mode, animations" },
      { name: "Responsive UI/UX", level: "Proficient", desc: "Mobile-first layouts, accessibility, micro-interactions" },
      { name: "Vite", level: "Proficient", desc: "Fast build tooling and modern frontend bundling" }
    ],
    backendAndDatabases: [
      { name: "Node.js & Express", level: "Practicing", desc: "REST API endpoints, middleware, static serving" },
      { name: "Firebase", level: "Proficient", desc: "Cloud Authentication, Realtime Database for mobile apps" },
      { name: "MySQL", level: "Proficient", desc: "Relational schema design, queries, normalization" },
      { name: "RESTful APIs", level: "Practicing", desc: "Client-server architecture, JSON payload handling" }
    ],
    aiAndDataScience: [
      { name: "OpenCV", level: "Practicing", desc: "Image manipulation, video frame processing" },
      { name: "MediaPipe", level: "Practicing", desc: "Real-time 33-point skeletal pose estimation" },
      { name: "NumPy & Pandas", level: "Practicing", desc: "Data structures, array operations, tabular analysis" },
      { name: "Matplotlib", level: "Practicing", desc: "Data visualization and charting" },
      { name: "Scikit-Learn", level: "Exploring", desc: "Foundational machine learning algorithms" }
    ],
    toolsAndCloud: [
      { name: "Git & GitHub", level: "Proficient", desc: "Version control, branches, PRs, repository management" },
      { name: "VS Code & Eclipse", level: "Proficient", desc: "Primary IDEs for web, Java, and Python engineering" },
      { name: "Android Studio", level: "Proficient", desc: "Native Android emulation, Gradle builds, SDK tools" },
      { name: "Jupyter Notebook", level: "Proficient", desc: "Exploratory data analysis and ML prototyping" },
      { name: "Netlify & Vercel", level: "Proficient", desc: "Continuous deployment for production web apps" },
      { name: "Render", level: "Proficient", desc: "Full-stack web service and containerized deployment" }
    ]
  },

  certifications: [
    {
      title: "Internship Program: App Development",
      issuer: "ApexPlanet Software Pvt Ltd",
      date: "July 2026",
      credentialId: "APSPL2635382",
      verificationUrl: "https://www.apexplanet.in",
      certificateUrl: "/api/certificate",
      verified: true,
      category: "Industry Experience",
      skills: "Android Studio, Kotlin, Firebase, Mobile App Lifecycle"
    },
    {
      title: "YIIC 2.0 - Innovation Program",
      issuer: "Scaler School of Technology",
      date: "June 2025",
      credentialId: "Scaler-YIIC-2.0",
      verificationUrl: "https://www.linkedin.com/in/manvika-bhupathi-386997316/",
      verified: true,
      category: "Innovation & AI",
      skills: "Applied AI, Startup Ideation, Product Development, Rapid Prototyping"
    },
    {
      title: "Python 101 for Data Science",
      issuer: "Cognitive Class / IBM Developer Skills Network",
      date: "2024",
      credentialId: "IBM-CC-PY101",
      verificationUrl: "https://www.linkedin.com/posts/manvika-bhupathi-386997316_cognitiveclasses-ibm-python101fordatascience-share-7217143245493952512-0wtM/",
      verified: true,
      category: "Data Science & AI",
      skills: "Python Fundamentals, Data Analysis, Data Structures"
    },
    {
      title: "Java Programming",
      issuer: "Coursera",
      date: "2024",
      credentialId: "Coursera-Java",
      verificationUrl: "https://www.coursera.org",
      verified: true,
      category: "Core Computer Science",
      skills: "Object-Oriented Programming, Java Core, Problem Solving"
    },
    {
      title: "Python (Beginner)",
      issuer: "Coursera",
      date: "2024",
      credentialId: "Coursera-Python",
      verificationUrl: "https://www.coursera.org",
      verified: true,
      category: "Programming",
      skills: "Python Syntax, Control Flow, Functions, Scripting"
    },
    {
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "2024",
      credentialId: "HackerRank-SQL-Basic",
      verificationUrl: "https://www.hackerrank.com",
      verified: true,
      category: "Databases",
      skills: "Relational Queries, Filtering, Aggregations, Joins"
    }
  ],

  achievements: [
    {
      title: "Smart India Hackathon (SIH) Internal Finalist",
      organization: "RGUKT Basar / AICTE",
      date: "2024",
      type: "Competition",
      rank: "Top 45 Teams",
      description: "Selected in the Top 45 teams out of hundreds of participants at RGUKT Basar for the KreedAI sports biomechanics assessment project."
    },
    {
      title: "Megathon 2025 Participant",
      organization: "E-Cell Technical Hackathon",
      date: "2025",
      type: "Hackathon",
      rank: "Participant",
      description: "Collaborated in an intensive hackathon environment designing innovative tech solutions under tight deadlines."
    },
    {
      title: "Convergence 2k26 Participant",
      organization: "Annual National Technical Symposium",
      date: "2026",
      type: "Symposium",
      rank: "Participant",
      description: "Engaged in campus-wide technical demonstrations and competitive technical events."
    }
  ]
};
