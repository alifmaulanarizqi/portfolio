export type Experience = {
  company: string;
  role: string;
  type: string;
  period: string;
  start: string;
  end: string;
  bullets: string[];
};

export type Project = {
  number: string;
  title: string;
  org: string;
  year: string;
  description: string;
  tags: string[];
  mock: "pos" | "superapp" | "lms" | "farmer" | "scheduler";
  theme: "light" | "dark";
  images?: string[];
  imageAspect?: string;
};

export const profile = {
  name: "Alif Maulana Rizqi",
  initials: "AMR",
  title: "Tech Lead / Mobile Developer",
  location: "Indramayu, West Java",
  email: "alifmaulana312@gmail.com",
  phone: "+62 813-2130-3346",
  phoneRaw: "+6281321303346",
  linkedin: "https://www.linkedin.com/in/alif-maulana-rizqi/",
  linkedinHandle: "alif-maulana-rizqi",
  github: "https://github.com/alifmaulanarizqi",
  githubHandle: "alifmaulanarizqi",
  tagline:
    "Shipping robust mobile architectures and containerized deployments while leading teams toward engineering excellence.",
  summary:
    "Tech Lead and Mobile Developer with hands-on experience spanning Android (Kotlin), Flutter, and full-stack deployments. I design robust mobile architectures, run code reviews, and mentor engineers on tech selection. Additionally, I manage containerized web deployments (frontend, backend, database) using Docker and maintain high-reliability staging and production systems.",
  pullQuote:
    "Clean code is just the start; true engineering is building software that lasts and a team that grows.",
} as const;

export const stats: { label: string; value: string }[] = [
  { label: "YRS EXPERIENCE", value: "2+" },
  { label: "GPA", value: "3.88" },
  { label: "HONORS", value: "CUM LAUDE" },
];

export const marqueeItems: string[] = [
  "Flutter",
  "Kotlin",
  "Jetpack Compose",
  "Bloc",
  "MVVM",
  "Clean Architecture",
  "Room DB",
  "Firebase",
  "Retrofit",
  "Dio",
  "WebSocket",
  "REST API",
  "Docker",
  "Deployment",
  "★",
];

export const experiences: Experience[] = [
  {
    company: "PT AIG Nusa Hub",
    role: "Tech Lead",
    type: "Full-Time",
    period: "Jul 2026 — Present",
    start: "2026",
    end: "now",
    bullets: [
      "Leading and mentoring the developer team to build and scale web and mobile applications.",
      "Orchestrating and deploying containerized web applications (frontend, backend, database) using Docker.",
      "Maintaining deployments and staging/production systems for reliability and uptime.",
      "Conducting code reviews and providing strategic guidance to team members on technology selection.",
      "Continuing hands-on mobile application development to ship high-quality features.",
    ],
  },
  {
    company: "PT AIG Nusa Hub",
    role: "Android Developer",
    type: "Full-Time",
    period: "Dec 2025 — Jul 2026",
    start: "2025",
    end: "2026",
    bullets: [
      "Building a POS application in Kotlin with Jetpack Compose and MVVM clean architecture.",
      "Implemented offline mode with Room Database so the app keeps running without the network.",
      "Embedded the company web portal via WebView and integrated REST APIs end-to-end.",
      "Authoring reusable UI components and shared modules for the team.",
    ],
  },
  {
    company: "Synapsis.id",
    role: "Mobile Engineer",
    type: "Full-Time",
    period: "Apr 2024 — Aug 2025",
    start: "2024",
    end: "2025",
    bullets: [
      "Shipped a Flutter superapp with Bloc and clean architecture as the foundation.",
      "Built real-time chat over WebSocket and push notifications with Firebase Messaging.",
      "Wrote integration tests against QA cases and released through internal app distribution.",
      "Owned API integration end-to-end and partnered with the team to keep the app stable.",
    ],
  },
  {
    company: "Synapsis.id",
    role: "Mobile Engineer",
    type: "Internship",
    period: "Apr 2023 — Aug 2023",
    start: "2023",
    end: "2023",
    bullets: [
      "Built a Learning Management System app in Flutter with Bloc state management.",
      "Created a library of reusable components and customised a video-player package to fit product needs.",
      "Integrated the API, debugged crashes, and stabilised the app alongside the wider team.",
    ],
  },
  {
    company: "Badan Sistem Informasi UII",
    role: "Mobile Developer",
    type: "Internship",
    period: "Sep 2022 — Apr 2023",
    start: "2022",
    end: "2023",
    bullets: [
      "Shipped a Flutter scheduling feature with appointment-driven push notifications.",
      "Integrated student class schedules into the mobile app end-to-end.",
      "Spoke at an internal Tech Talk on push-notification implementation.",
    ],
  },
];

export const projects: Project[] = [
  {
    number: "01",
    title: "Arunahub",
    org: "PT AIG Nusa Hub",
    year: "2025 — present",
    description:
      "A modern point-of-sale app for retail operators — built in Kotlin with Jetpack Compose and MVVM, with offline-first sync via Room Database and REST APIs.",
    tags: ["Kotlin", "Compose", "MVVM", "Room", "Offline", "WebView"],
    mock: "pos",
    theme: "light",
    images: [
      "/projects/pos-1.png",
      "/projects/pos-2.png",
      "/projects/pos-3.png",
      "/projects/pos-4.png",
    ],
  },
  {
    number: "02",
    title: "Employee Self Service",
    org: "Synapsis.id",
    year: "2024 — 2025",
    description:
      "Internal HR app for employee workflows — built Timeoff (Cuti) and Business Travel Request features end-to-end across applicant and approver POVs, covering full lifecycles from submission and approval to ticket booking, rescheduling, and refund.",
    tags: ["Flutter", "Bloc", "Firebase", "Clean Arch", "REST API"],
    mock: "superapp",
    theme: "light",
    images: [
      "/projects/ess-1.png",
      "/projects/ess-2.png",
      "/projects/ess-3.png",
      "/projects/ess-4.png",
    ],
    imageAspect: "423/809",
  },
  {
    number: "03",
    title: "Learning Management System",
    org: "Synapsis.id · Internship",
    year: "2023",
    description:
      "Employee training app with a custom-tuned video player — disabled forward seeking and marked videos as watched at a 90% threshold by modifying an existing Flutter package, plus shipped achievements, modules, and course APIs.",
    tags: ["Flutter", "Bloc", "Custom Player", "REST API"],
    mock: "lms",
    theme: "dark",
    images: [
      "/projects/lms-1.png",
      "/projects/lms-2.png",
      "/projects/lms-3.png",
      "/projects/lms-4.png",
    ],
  },
  {
    number: "04",
    title: "Farmer Nusantara",
    org: "Bangkit · Capstone",
    year: "2022",
    description:
      "An Android app that helps farmers identify plant diseases by integrating a TensorFlow ML model with a Kotlin client built on MVVM.",
    tags: ["Kotlin", "MVVM", "TFLite", "Android"],
    mock: "farmer",
    theme: "dark",
    images: [
      "/projects/farmer-1.png",
      "/projects/farmer-2.png",
      "/projects/farmer-3.png",
    ],
  },
  {
    number: "05",
    title: "I'm UII",
    org: "Badan Sistem Informasi UII",
    year: "2022 — 2023",
    description:
      "Campus companion app for UII students — built the schedule feature end-to-end on both mobile and backend, with invite flows, reminder push notifications, and integration with each student's course schedule.",
    tags: ["Flutter", "Lumen", "Firebase", "Push Notif"],
    mock: "scheduler",
    theme: "light",
    images: [
      "/projects/imuii-1.png",
      "/projects/imuii-3.png",
      "/projects/imuii-2.png",
    ],
  },
];

export const skillGroups: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Dart", "Kotlin", "PHP"],
  },
  {
    group: "Frameworks & Tools",
    items: ["Flutter", "Jetpack Compose", "Laravel", "Android Studio", "VS Code"],
  },
  {
    group: "Architecture & State",
    items: ["Clean Architecture", "MVVM", "MVC", "Bloc", "Flow", "LiveData"],
  },
  {
    group: "Data & Networking",
    items: [
      "Room",
      "Firebase",
      "SQLite",
      "MySQL",
      "Retrofit",
      "OkHttp",
      "Dio",
      "REST API",
    ],
  },
  {
    group: "Testing & VCS",
    items: ["Integration Test", "Automated UI Test", "Git", "GitLab", "GitHub"],
  },
];

export const education: {
  school: string;
  degree: string;
  period: string;
  notes: string[];
}[] = [
  {
    school: "Islamic University of Indonesia",
    degree: "Bachelor's Degree, Informatics — GPA 3.88 / 4",
    period: "Sep 2019 — Sep 2023",
    notes: [
      "Graduated with Cum Laude predicate.",
      "Best Work — Fundamentals of Application Development & Web-Based Application Development, Informatics Expo 2020 Vol. 1 & Vol. 2.",
    ],
  },
  {
    school: "Bangkit Academy — by Google, GoTo & Traveloka",
    degree: "Mobile Development Cohort",
    period: "Feb 2022 — Jul 2022",
    notes: [
      "Studied Android development with Kotlin and the MVVM architecture.",
      "Capstone: Farmer Nusantara — an AI-assisted plant-disease identification app.",
      "Presented final project results in English.",
    ],
  },
];

export const sections: { id: string; index: string; title: string }[] = [
  { id: "about", index: "02", title: "About" },
  { id: "experience", index: "03", title: "Experience" },
  { id: "work", index: "04", title: "Work" },
  { id: "skills", index: "05", title: "Toolkit" },
  { id: "education", index: "06", title: "Education" },
  { id: "contact", index: "07", title: "Contact" },
];
