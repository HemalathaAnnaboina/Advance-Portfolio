/**
 * Centralized Portfolio Data for Hemalatha Annaboina
 * AI Engineer & Full Stack Developer
 * All personal information, projects, certifications, achievements, and links are stored here.
 */

export const personalInfo = {
  name: "Hemalatha Annaboina",
  initials: "HA",
  mainHeadline: "AI Engineer & Full Stack Developer",
  supportingHeadline: "Building Intelligent Applications with Full-Stack Development and AI.",
  roleTitles: [
    "AI Engineer",
    "Full Stack Developer",
    "Java Developer",
    "AI Agent Architect"
  ],
  bio: "AI Engineer and Full Stack Developer skilled in Java, JavaScript, React.js, and SQL, specializing in building intelligent web applications, Retrieval-Augmented Generation (RAG) pipelines, and autonomous AI agents. Passionate about marrying robust software architecture with practical, modern Artificial Intelligence.",
  aboutDetailed: [
    "I am a Computer Science and Engineering student at KKR & KSR Institute of Technology and Sciences, Vinjanampadu (Class of 2027), focused on building production-ready software systems and intelligent AI solutions.",
    "My development toolkit bridges core full-stack foundations—Java, JavaScript, React.js, and SQL—with practical Generative AI capabilities, including Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Agentic AI architectures, and prompt engineering.",
    "From creating autonomous voice admissions agents with grounded institutional memory to developing healthcare management applications and AI-driven email dispatchers, I emphasize clean architecture, security, and recruiter-ready reliability."
  ],
  educationSummary: "B.Tech CSE @ KKR & KSR Institute of Technology and Sciences (CGPA: 8.9/10, 2023–Present)",
  location: "Andhra Pradesh, India",
  email: "annaboinashema2005@gmail.com",
  altEmail: "annaboinahemalatha@gmail.com",
  avatar: "/avatar.png",
  resumePath: "/resume.pdf",
  socials: {
    github: "https://github.com/HemalathaAnnaboina",
    linkedin: "https://www.linkedin.com/in/hemalatha-annaboina-015947306/",
    leetcode: "https://leetcode.com/u/HemalathaAnnaboina/",
    credly: "https://www.credly.com/badges/b19a1fad-c299-4528-9b43-385da7158f73/public_url"
  },
  // Developer Community & Learning resources
  communityLinks: [
    {
      title: "Telugu Java Coders",
      platform: "Instagram",
      url: "https://www.instagram.com/telugu_javacoders/?hl=en",
      description: "Developer Community & Learning resource sharing Java tutorials, coding concepts, and programming tips.",
      icon: "Instagram"
    }
  ],
  status: "Open to AI Engineering & Full Stack Roles",
  experience: [
    {
      title: "Virtual Intern – Python Full Stack Development",
      company: "Infosys Springboard",
      type: "Virtual Internship",
      period: "June 2026 – August 2026",
      technologies: ["Python", "HTML", "CSS", "JavaScript", "SQL", "REST APIs"],
      description:
        "Completed a virtual internship focused on Python full-stack development, including web development fundamentals, database operations, REST APIs, CRUD functionality, debugging, and version control."
    }
  ]
};

export const developer = personalInfo;

export const highlightCards = [
  {
    id: "academics",
    title: "Academic Excellence",
    badge: "CGPA 8.9 / 10",
    description: "Consistent high academic performance in Computer Science & Engineering at KKR & KSR Institute of Technology and Sciences.",
    icon: "GraduationCap",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "fullstack",
    title: "Full Stack Engineering",
    badge: "Java, React & SQL",
    description: "Building responsive web applications combining Java, React.js, SQL, and clean REST APIs.",
    icon: "Layers",
    color: "from-violet-500 to-purple-500"
  },
  {
    id: "ai",
    title: "AI & Generative Systems",
    badge: "LLMs, RAG & Agents",
    description: "Specializing in Retrieval-Augmented Generation, autonomous AI Agents, conversation memory, and prompt engineering.",
    icon: "Sparkles",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: "cloud",
    title: "AWS Certified",
    badge: "Cloud Practitioner",
    description: "Official AWS Certified Cloud Practitioner with demonstrated expertise in AWS EC2, VPC, security, and cloud architecture.",
    icon: "Cloud",
    color: "from-amber-500 to-orange-500"
  }
];

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Java", desc: "Object-Oriented Programming, Collections, Concurrency, Core Logic" },
      { name: "Python", desc: "AI pipelines, FastAPI, Scripting, Data Processing, Automation" },
      { name: "JavaScript", desc: "ES6+, Modern Asynchronous Programming, DOM, Web APIs" }
    ]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "HTML", desc: "Semantic structure, SEO Best Practices, Web Accessibility (a11y)" },
      { name: "CSS", desc: "Responsive Design, Flexbox, CSS Grid, Modern Layouts & Animations" },
      { name: "React.js", desc: "Component Architecture, Hooks, State Management, Vite, SPA Routing" }
    ]
  },
  {
    category: "Backend Development",
    icon: "Server",
    skills: [
      { name: "FastAPI", desc: "High-performance asynchronous Python REST APIs, Pydantic validation" }
    ]
  },
  {
    category: "Database",
    icon: "Database",
    skills: [
      { name: "SQL", desc: "Relational schema design, Normalization, CRUD Operations, Complex Queries" }
    ]
  },
  {
    category: "AI & Generative AI",
    icon: "BrainCircuit",
    skills: [
      { name: "LLMs", desc: "Integration with OpenAI, Claude, Gemini & open-source language models" },
      { name: "RAG", desc: "Retrieval-Augmented Generation, Semantic Chunking, Vector Embeddings" },
      { name: "Agentic AI", desc: "Autonomous workflows, Multi-agent orchestration, Task planning" },
      { name: "AI Agents", desc: "Tool use, state management, conversational memory & decision loops" },
      { name: "Prompt Engineering", desc: "Few-shot prompting, guardrails, structured JSON outputs, system instructions" }
    ]
  },
  {
    category: "Cloud and Tools",
    icon: "Wrench",
    skills: [
      { name: "AWS EC2", desc: "Virtual server configuration, compute instances, security groups" },
      { name: "AWS VPC", desc: "Virtual private cloud networking, subnets, routing, and access control" },
      { name: "Git", desc: "Version control, branching workflows, commits, and collaborative tracking" },
      { name: "GitHub Actions", desc: "CI/CD automation, build pipelines, automated testing workflows" },
      { name: "REST APIs", desc: "Stateless HTTP design, JSON contracts, endpoint security, status codes" }
    ]
  }
];

export const projects = [
  {
    id: "ai-voice-admission-agent",
    title: "AI Voice Admission Agent",
    subtitle: "Multilingual Voice Assistant with College-Specific RAG & Counselor Handoff",
    category: "AI & Generative AI",
    github: "https://github.com/HemalathaAnnaboina/ai-voice-admission-agent",
    demo: null,
    image: "/projects/voice-admission.jpg",
    technologies: ["React.js", "Python", "FastAPI", "Telugu & English RAG", "LLMs", "Lead Qualification", "Conversation Memory", "Counselor Handoff"],
    featured: true,
    summary: "A voice-based admissions assistant engineered with college-specific Retrieval-Augmented Generation (RAG) and LLM integration to handle prospective student inquiries with high accuracy, conversational memory, lead qualification, and counselor handoff.",
    highlights: [
      "College-Specific RAG: Accurately answers questions strictly grounded in college prospectus documents and curriculum guides with zero hallucinations.",
      "Multilingual Voice Dialog: Real-time speech interaction supporting Telugu, Teluglish, and English via Speech-to-Text and Text-to-Speech pipelines.",
      "Autonomous Lead Qualification: Classifies inquiries into HOT, WARM, and COLD leads based on user intent and profile readiness.",
      "Conversation Memory & Counselor Handoff: Retains multi-turn conversation context and automatically schedules callbacks with human admissions counselors for ungrounded queries."
    ],
    architecture: "Web Speech STT -> FastAPI Router -> College Document Chunking & Vector RAG -> LLM Dialog Orchestrator -> Voice Synthesis & Counselor Handoff Queue."
  },
  {
    id: "hospital-management-system",
    title: "Hospital Management System",
    subtitle: "Healthcare Operations Platform with RBAC & Scheduling Workflows",
    category: "Full Stack Development",
    github: "https://github.com/HemalathaAnnaboina/Hospital-Management-System",
    demo: null,
    image: "/assets/hospital-management-system.png",
    technologies: ["Java", "React.js", "SQL", "REST APIs", "Role-Based Access Control"],
    featured: true,
    summary: "A full-stack hospital management web application developed using Java, React.js, SQL, and REST APIs, designed for patient administration, appointment scheduling, and role-based access control.",
    highlights: [
      "Role-Based Access Control (RBAC): Differentiated access privileges for Administrators, Doctors, Receptionists, and Patients.",
      "Double-Booking Prevention Algorithm: Backend appointment uniqueness verification preventing scheduling collisions across concurrent users.",
      "Relational Database Architecture: Normalized SQL schema managing medical records, doctor schedules, patient histories, and clinical workflows.",
      "Secure RESTful APIs: Stateless Java backend controllers handling CRUD operations, data validations, and secure transactions."
    ],
    architecture: "React.js Frontend -> Axios API Clients -> Java REST Controllers -> Data Access Layer -> Relational SQL Database."
  },
  {
    id: "aws-cost-optimizer",
    title: "AWS Cost Optimizer",
    subtitle: "Cloud Cost Monitoring Dashboard Concept & Optimization Recommendations",
    category: "Cloud & Automation",
    github: null,
    demo: null,
    image: "/projects/aws-cost.png",
    technologies: ["React", "TypeScript", "AWS concepts", "n8n"],
    featured: true,
    summary: "Built a dashboard concept for monitoring AWS resource costs and identifying potential cost-saving opportunities. Includes resource-cost analysis, optimization recommendations, and approval/rollback workflow concepts.",
    demoMetrics: [
      { label: "Resources", value: "42 Analyzed" },
      { label: "Monthly Cost", value: "$12,480 (Demo)" },
      { label: "Potential Savings", value: "$3,240 (26%)" },
      { label: "Opportunities", value: "17 Identified" }
    ],
    highlights: [
      "Resource-Cost Analysis: Concept dashboard visualizing simulated cloud resource spending across compute, storage, and networking.",
      "Optimization Recommendations: Identifies idle compute, over-provisioned storage, and unattached volumes with potential savings.",
      "Approval & Rollback Workflow: Outlines structured change review gates and safe reversible execution concepts.",
      "Demo Project Metrics: 42 resources analyzed, $12,480 monthly cost, $3,240 potential savings (26%), and 17 optimization opportunities (demo/concept figures)."
    ],
    architecture: "React & TypeScript Dashboard -> Resource Analysis Pipeline -> n8n Workflow Concepts -> Optimization State Management."
  },
  {
    id: "ai-email-assistant",
    title: "AI Email Assistant",
    subtitle: "AI-Powered Email Drafting, Interactive In-Browser Review & SMTP Delivery",
    category: "AI & Generative AI",
    github: "https://github.com/HemalathaAnnaboina/Email_Assistent",
    demo: "https://emailassistent-rysa5c3au3pwj2mxoljbkn.streamlit.app/",
    image: "/assets/ai-email-assistant.png",
    technologies: ["Python", "Streamlit", "NVIDIA NIM API", "Gmail SMTP"],
    featured: true,
    summary: "An AI-powered email assistant that generates email drafts from user prompts and lets users review and edit the draft before sending it.",
    highlights: [
      "Prompt-Driven Drafting: Generates structured, professional email drafts tailored to tone and recipient context using NVIDIA NIM API.",
      "Interactive Review & Editing: Lets users review, adjust, and edit drafts in-browser before confirming delivery.",
      "Automated Gmail SMTP Delivery: Direct email dispatch pipeline integrated with secure Gmail SMTP authentication.",
      "Live Deployed Application: Operational web application hosted on Streamlit Cloud with live interactive testing."
    ],
    architecture: "Streamlit UI -> NVIDIA NIM API Inference -> Interactive In-Browser Editor -> Gmail SMTP Dispatcher."
  }
];

export const achievements = [
  {
    id: "sync-ai-codestorm-2025",
    title: "Second Prize — SYNC AI CODESTORM 2025",
    award: "2nd Prize",
    badge: "2nd Prize",
    category: "Web Development",
    event: "College Hackathon",
    year: "2025",
    image: null,
    description: "Won 2nd Prize in the Web Development category at a college hackathon in 2025.",
    statusText: "2nd Prize — College Hackathon",
    proofUrl: null
  },
  {
    id: "qutam-valley-participant",
    title: "Qutam Valley State Leave — Participant",
    organization: null,
    year: null,
    badge: "Participant",
    category: "Activities & Participation",
    image: null,
    description: "Official event and program participation. Details can be updated as needed.",
    statusText: "Activities & Participation",
    proofUrl: null
  }
];

export const certifications = [
  {
    id: "aws-cloud-practitioner",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "March 7, 2026",
    expiryDate: "March 7, 2029",
    score: "Verified Examination Pass",
    credentialId: "CLF-C02",
    image: "/assets/aws-certified-cloud-practitioner.png",
    verifyUrl: "https://www.credly.com/badges/b19a1fad-c299-4528-9b43-385da7158f73/public_url",
    status: "Active & Verified",
    type: "badge",
    description: "Official AWS accreditation validating comprehensive knowledge of AWS Cloud architecture, AWS EC2 compute, AWS VPC networking, cloud security, compliance, and billing models."
  },
  {
    id: "certified-llm-security-professional",
    name: "Certified LLM Security Professional (CLLMSP)",
    issuer: "Red Team Leaders",
    credential: "Certified LLM Security Professional (CLLMSP)",
    issueDate: "September 5, 2026",
    expiryDate: null,
    score: "Certified",
    credentialId: "CLLMSP",
    image: "/assets/certified-llm-security-professional.jpg",
    verifyUrl: "https://courses.redteamleaders.com/exam-completion/50f0d7b549fb534e",
    status: "Active & Verified",
    type: "image",
    description: "Specialized security certification validating expertise in LLM vulnerability assessment, prompt injection defenses, adversarial attack mitigations, and defensive AI system engineering."
  }
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    username: "HemalathaAnnaboina",
    url: "https://leetcode.com/u/HemalathaAnnaboina/",
    focus: "Data Structures & Algorithms (Java & Python)",
    solvedCount: "~150+",
    solvedLabel: "Approx. 150 Problems Solved",
    icon: "LeetCode",
    color: "#FFA116",
    description: "Active practice on LeetCode solving algorithmic challenges across arrays, strings, trees, graphs, and dynamic programming in Java and Python."
  },
  {
    platform: "GitHub",
    username: "HemalathaAnnaboina",
    url: "https://github.com/HemalathaAnnaboina",
    focus: "Full-Stack Development, AI Voice Agents & RAG Systems",
    solvedCount: "Featured Repositories",
    solvedLabel: "Active Open-Source Builder",
    featuredRepos: [
      {
        name: "ai-voice-admission-agent",
        desc: "Autonomous voice admissions agent with college-specific RAG",
        url: "https://github.com/HemalathaAnnaboina/ai-voice-admission-agent"
      },
      {
        name: "Hospital-Management-System",
        desc: "Full-stack healthcare platform in Java, React & SQL",
        url: "https://github.com/HemalathaAnnaboina/Hospital-Management-System"
      },
      {
        name: "Email_Assistent",
        desc: "AI email assistant with Streamlit & SMTP dispatch",
        url: "https://github.com/HemalathaAnnaboina/Email_Assistent"
      }
    ],
    icon: "GitHub",
    color: "#8B5CF6",
    description: "Public repositories showcasing full-stack applications, intelligent AI pipelines, and clean architectural patterns."
  }
];

export const educationList = [
  {
    degree: "B.Tech — Computer Science and Engineering",
    institution: "KKR & KSR Institute of Technology and Sciences, Vinjanampadu",
    location: "Andhra Pradesh, India",
    period: "September 2023 – Present",
    score: "CGPA: 8.9/10",
    highlights: [
      "Specializing in Software Development, Full-Stack Architecture, and Artificial Intelligence.",
      "Hands-on building of intelligent applications combining Java, React.js, SQL, LLMs, and RAG.",
      "Consistently strong academic performance maintaining an 8.9/10 CGPA."
    ]
  },
  {
    degree: "Intermediate — MPC",
    institution: "St. Joseph Junior College for Girls, Nallapadu",
    location: "Andhra Pradesh, India",
    period: "2021 – 2023",
    score: "Percentage: 96.6%",
    highlights: [
      "Core focus on Mathematics, Physics, and Chemistry.",
      "Achieved outstanding academic distinction with 96.6% in the Andhra Pradesh State Board examinations."
    ]
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "S.K.B.P.M.C High School, Guntur",
    location: "Andhra Pradesh, India",
    period: "2021",
    score: "Percentage: 96%",
    highlights: [
      "Rigorous foundation in mathematics, logical reasoning, and sciences.",
      "Graduated with 96% academic honors."
    ]
  }
];

export const experienceList = personalInfo.experience;
