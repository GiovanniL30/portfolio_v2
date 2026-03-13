import type { Project } from "../@types/fileSystem";
import suitliferImage from "../assets/images/suitelifer.png";
import cca_landing from "../assets/images/cca_landing.png";
import ptV1 from "../assets/images/portfolio_v1.png";
import aeiluminate from "../assets/images/aeiluminate.webp";

export const personalGithubLink = "https://github.com/GiovanniL30";
export const linkedInLink = "https://www.linkedin.com/in/giovanni-leo-4774ab255/";

export const skills = {
  frontend: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Zustand", "Vite"],
  backend: ["Node.js", "Express", "Prisma", "PostgreSQL", "REST API", "Prisma ORM"],
  backend_services: [
    "AWS (simple stuffs)",
    {
      google: ["GDrive Integration", "GSheets Integration", "App Script", "GCP (simple stuffs)"],
    },
    "Slack Bot",
    "Appwrite",
    "Supabase",
    "Firebase",
  ],
  tools: ["Git", "VS Code", "Figma", "ESLint", "Prettier", "Postman"],
  ai_tools: ["Github Copilot", "ChatGPT"],
};

export const featuredProjects: Project[] = [
  {
    badge: ["React", "Tailwind", "Express", "Prisma", "MySql", "Devops"],

    title: "Tseksuite - Test Management System",
    info: {
      year: "2026",
    },
    description:
      "Internal job application and content management system built for a FullSuite. It allows applicants to submit their information easily while the company can manage content and showcase its culture, helping to create a strong employer brand for future employees.",
  },
  {
    badge: ["React", "Tailwind", "Express", "Prisma", "MySql", "Devops"],
    images: [suitliferImage],
    title: "Suitelifer",
    info: {
      year: "2026",
      liveUrl: "https://www.suitelifer.com/",
    },
    description:
      "Internal job application and content management system built for a FullSuite. It allows applicants to submit their information easily while the company can manage content and showcase its culture, helping to create a strong employer brand for future employees.",
  },
  {
    badge: ["API", "Prisma ORM", "Express JS", "Postman"],
    title: "Employee Request Filing Portal API",
    info: {
      year: "2026",
      liveUrl: "https://forked-suitelifer-filing-server.vercel.app/",
    },
    description:
      "This is a integrated API that replaces the old system they currently used and developed better and bug free API backend integrated with the main Suitelifer portal",
  },
  {
    badge: ["React", "Tailwind", "Express", "Prisma", "MySql", "Appwrite", "Capstone Project"],
    title: "Ticketing System for the Center for Culture and the Arts",
    images: [cca_landing],
    info: {
      year: "2025",
      liveUrl: "https://slu-cca.vercel.app/login",
      githubUrl: "https://github.com/orgs/Dormmates/repositories",
    },
    description:
      "Leading the development of a role-based ticket monitoring system for managing shows, schedules, ticket distribution, and audience records. The system supports digital ticket generation, seat mapping, and automated sales reporting. Following an iterative approach, our team regularly collaborates with stakeholders to gather feedback and ensure the system aligns with operational workflows.",
  },
  {
    badge: ["React", "Tailwind", "Portfolio"],
    title: "Personal Portfolio (v1)",
    images: [ptV1],
    info: {
      year: "2025",
      liveUrl: "https://giovannileo.onrender.com",
      githubUrl: "https://github.com/GiovanniL30/portfolio",
    },
    description:
      "This is my personal website portfolio, where I showcase my skills and capabilities as a developer. This is the website you are visiting now, designed to highlight my passion for programming and the projects I've worked on. Here, you’ll find a collection of my work, from front-end development with ReactJS to back-end development with Node.js and MySQL. I'm continuously learning and evolving as a developer, and this portfolio reflects my growth and dedication to building high-quality, accessible web applications.",
  },
  {
    badge: ["Express", "React", "MySql", "Appwrite", "School Project"],
    title: "School Project Social Media Website",
    images: [aeiluminate],
    info: {
      year: "2024",
      githubUrl: "http://github.com/GiovanniL30/aeiluminate-alumni",
    },
    description:
      "Social Media Website for our Website Technologies subject . This platform is designed for school alumni to reconnect and engage with one another. Alumni can post photos, create albums, and share memories, as well as send private messages to stay in touch. It also allows users to post and discover events, such as reunions or social gatherings, and share job listings to support career development within the alumni network.",
  },
];

export const extraProjects: Project[] = [
  {
    badge: ["Node Js", "React", "Challenge", "Personal Project"],
    title: "E-commerce Website",
    info: {
      year: "2023",
      githubUrl: "https://github.com/GiovanniL30/TechWonder",
    },
    description:
      "Implemented the Figma design found on community page and added simple functionalities like viewing products , adding products to cart, etc...",
  },
  {
    badge: ["React", "Challenge", "Personal Project"],
    title: "Tech Wonder E-commerce",
    info: {
      year: "2023",
      liveUrl: "https://techwonder.onrender.com/",
      githubUrl: "https://github.com/GiovanniL30/TechWonder",
    },
    description: "Simple E-commerce website for viewing and adding items to the cart",
  },
];
