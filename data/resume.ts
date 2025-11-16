export interface PersonalInfo {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github?: string;
  tagline: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  period?: string;
  details?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface ProjectImage {
  src: string;
  caption?: string;
  description?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  image?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  details?: string;
  link?: string;
  github?: string;
  banner?: string;
  images?: ProjectImage[];
  features?: ProjectFeature[];
  overview?: string;
  highlights?: string[];
  category?: string;
  status?: string;
}

export interface SoftSkill {
  name: string;
}

export interface Language {
  name: string;
  level: string;
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Ahmad Alhukail",
  location: "Riyadh, Saudi Arabia",
  phone: "(+966) 554406560",
  email: "ahmad.yasarg@gmail.com",
  linkedin: "https://www.linkedin.com/in/ahmad-alhukail-359342283/",
  github: "https://github.com/AhmadXDev",
  tagline: "IT Student & AI-Driven Developer passionate about building intelligent solutions",
};

// Profile Summary
export const profileSummary: string =
  "Dedicated IT student at Imam University, passionate about artificial intelligence, cloud computing, data analytics, and cybersecurity. Experienced in AI-assisted software, Web, and mobile development using React, Flutter, React Native, and Electron. Skilled at integrating AI tools like GitHub Copilot, Cursor, and ChatGPT into development workflows to enhance productivity and research outcomes. Strong leadership, documentation, and problem-solving abilities, with a focus on innovation and practical AI application in real-world environments.";

// Education
export const education: Education = {
  institution: "Imam Mohammad Ibn Saud Islamic University",
  degree: "Bachelor of Information Technology",
  period: "2022 – 2026",
  location: "Riyadh, Saudi Arabia",
  gpa: "4.39 / 5 (Expected 4.5 before training)",
};

// Certifications
export const certifications: Certification[] = [
  {
    name: "Flutter Bootcamp",
    issuer: "Imam University (Ejad Club)",
    period: "December 2024",
    details: "Completed a 3-week Flutter training program (52 hours) focused on mobile app development",
  },
];

// Skills
export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "C#", "JavaScript", "PHP", "SQL", "Dart", "GDScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "React Native", "Flutter", "Node.js", "Electron"],
  },
  {
    category: "Development Tools & Platforms",
    items: [
      "VS Code",
      "GitHub",
      "GitHub Desktop",
      "Docker",
      "N8N",
      "Azure",
      "Android Studio",
      "Oracle VM",
      "Postman",
    ],
  },
  {
    category: "Design & Productivity Tools",
    items: ["Figma", "Notion", "Obsidian", "Coda", "Word", "Excel", "PowerPoint", "OneNote"],
  },
  {
    category: "Databases",
    items: ["Supabase", "Firebase", "MySQL"],
  },
  {
    category: "Artificial Intelligence (AI)",
    items: [
      "GitHub Copilot",
      "Cursor AI",
      "ChatGPT",
      "AI API Integration",
      "MCP configuration",
      "Prompt Engineering",
    ],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "TailwindCSS"],
  },
  {
    category: "Operating Systems & Shells",
    items: ["Windows", "Linux", "Kali Linux", "PowerShell", "CMD", "Bash"],
  },
  {
    category: "Game Development",
    items: ["Godot Engine (GDScript)", "Unity (C#)"],
  },
];

// Work Experience
export const workExperience: WorkExperience[] = [
  {
    title: "Innovation, Research & Development (IRD) Team Member",
    company: "Hasib Company",
    location: "Riyadh, Saudi Arabia",
    period: "Jul 2025 – Present",
    description:
      "Collaborating with the IRD team to enhance productivity through AI-driven solutions and process optimization.",
    achievements: [
      "Designed and implemented a documentation system integrated with GitHub and Obsidian, enabling automatic synchronization, free version control, and AI accessibility within the same repository.",
      "Built a React Native mobile app prototype connected to company APIs, demonstrating AI-assisted code generation and automation using GitHub, GitHub Copilot, and Cursor.",
      "Designed workflows to transform legacy Excel documentation into AI-readable formats, enhancing accessibility for development tools.",
    ],
  },
];

// Projects
export const projects: Project[] = [
  {
    title: "StudyPilot - AI-Powered Study Tracker",
    description:
      "University capstone project — a web and mobile application to help students track their study performance and progress.",
    technologies: ["React", "React Native", "Supabase", "AI Integration"],
    details:
      "Integrated AI to analyze study habits, predict performance, and notify students about exam readiness based on data. Designed user experience to promote motivation and accountability among students.",
  },
  {
    title: "College Tracker - Desktop Productivity App",
    description: "Time-tracking program using Electron to help students manage and record study sessions locally.",
    technologies: ["Electron", "JavaScript", "Node.js"],
    details:
      "Inspired the concept behind the StudyPilot project and demonstrated early innovation in productivity-focused software.",
  },
  {
    title: "ReadMyLib - Flutter App for Speech Assistance",
    description:
      "Mobile app that interprets lip movements and converts them into audible speech for users with disabilities using AI-based APIs.",
    technologies: ["Flutter", "Dart", "AI APIs", "Camera Integration", "Speech Synthesis"],
    details: "Integrated real-time camera data and speech synthesis APIs.",
  },
  {
    title: "Hasib Mobile - React Native Prototype",
    description:
      "Prototype mobile app using React Native to connect with the company's ERP system API and demonstrate AI-assisted development.",
    technologies: ["React Native", "JavaScript", "API Integration", "AI-Assisted Development"],
  },
  {
    title: "Flacardy — Flutter Learning App",
    description: "Flashcard app that generates cards using AI APIs based on custom user topics.",
    technologies: ["Flutter", "Dart", "AI APIs", "SQLite", "State Management"],
    category: "Mobile App",
    status: "Completed",
    banner: "/projects/Flacardy/banner.png",
    overview: "A comprehensive flashcard application built with Flutter that helps users study effectively using spaced repetition. Features AI-powered card generation and a sophisticated evaluation algorithm to optimize learning.",
    highlights: [
      "AI-powered flashcard generation from any topic",
      "Spaced repetition algorithm for optimal learning",
      "Nested folder organization system",
      "Local SQLite database for offline functionality",
      "Clean, intuitive material design UI"
    ],
    features: [
      {
        title: "Smart Organization",
        description: "Create unlimited nested folders and pockets to organize your study materials. Perfect for managing multiple subjects and topics.",
        image: "/projects/Flacardy/1_folder_page.png"
      },
      {
        title: "Pocket Management",
        description: "Each pocket contains flashcards for a specific topic. View statistics, generate AI cards, or create custom cards manually.",
        image: "/projects/Flacardy/2_pocket_page.png"
      },
      {
        title: "Easy Card Management",
        description: "Edit, delete, or organize your flashcards with an intuitive interface. Bulk operations make managing large card sets effortless.",
        image: "/projects/Flacardy/3_manage_cards_page.png"
      },
      {
        title: "Engaging Study Experience",
        description: "Study with beautiful card flip animations. The spaced repetition algorithm shows cards at the optimal time for maximum retention.",
        image: "/projects/Flacardy/4_study_cards_page.png"
      },
      {
        title: "Smart Evaluation System",
        description: "Rate each card as Again, Hard, Good, or Easy. The algorithm adjusts review intervals based on your performance to optimize learning.",
        image: "/projects/Flacardy/5_study_cards_page.png"
      },
      {
        title: "Progress Tracking",
        description: "Celebrate your achievements! Track your progress and see when you've mastered all due cards in a pocket.",
        image: "/projects/Flacardy/6_study_cards_page.png"
      }
    ],
    images: [
      {
        src: "/projects/Flacardy/1_folder_page.png",
        caption: "Folder Organization",
        description: "Hierarchical folder structure for organizing study materials"
      },
      {
        src: "/projects/Flacardy/2_pocket_page.png",
        caption: "Pocket Details",
        description: "Pocket overview with AI generation and manual card creation options"
      },
      {
        src: "/projects/Flacardy/3_manage_cards_page.png",
        caption: "Card Management",
        description: "Edit and organize flashcards with ease"
      },
      {
        src: "/projects/Flacardy/4_study_cards_page.png",
        caption: "Study Interface",
        description: "Clean study interface with flip animations"
      },
      {
        src: "/projects/Flacardy/5_study_cards_page.png",
        caption: "Evaluation System",
        description: "Four-level evaluation system for spaced repetition"
      },
      {
        src: "/projects/Flacardy/6_study_cards_page.png",
        caption: "Completion Celebration",
        description: "Motivational feedback when all cards are mastered"
      }
    ]
  },
  {
    title: "Revenith (Game)",
    description:
      "Independent game prototype in Godot using GDScript to explore interactive storytelling and game logic.",
    technologies: ["Godot Engine", "GDScript", "Game Development"],
  },
];

// Soft Skills
export const softSkills: SoftSkill[] = [
  { name: "Problem Solving" },
  { name: "Teamwork & Collaboration" },
  { name: "Analytical Thinking" },
  { name: "Time Management" },
  { name: "Research & Innovation" },
  { name: "Leadership" },
  { name: "Adaptability" },
  { name: "Documentation" },
];

// Languages
export const languages: Language[] = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Advanced" },
];


