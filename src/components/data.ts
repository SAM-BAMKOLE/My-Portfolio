import phosConsults from "@/assets/phos-consults.png";
import dgnravepay from "@/assets/dgnravepay.jpg";
import capitalConsults from "@/assets/capital-consults.png";
import storefront from "@/assets/storefront.png";
import wedding from "@/assets/wedding.png";
import urlShortener from "@/assets/url-shortener.png";

const projectImages = {
  phosConsults,
  dgnravepay,
  capitalConsults,
  storefront,
  wedding,
  urlShortener,
};

// Personal Information Types
export const portfolioData = {
  personal_info: {
    name: "Samuel Olagoroye",
    professional_title:
      "Fullstack Developer | Next.js, Vue.js, Django, Laravel",
    location: "Ibadan, Oyo State, Nigeria",
    contact: {
      phone: "+234-913-411-5254",
      email: "olagoroyesamuel77@gmail.com",
    },
    links: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/samuel-olagoroye-bamicole",
      },
      {
        platform: "Portfolio",
        url: "/samuel-olagoroye-cv.pdf",
      },
      {
        platform: "GitHub",
        url: "https://github.com/SAM-BAMKOLE",
      },
    ],
  },
  professional_summary: [
    `Samuel Olagoroye is a highly dedicated Full-Stack Developer and Lead IT Manager with over 4 years of professional experience in designing, developing, and deploying high-performance, end-to-end web applications. My robust technical expertise spans modern frontend mastery with React.js, Next.js, and Vue.js, coupled with strong backend skills in Node.js/Express.js, PHP/Laravel, and Python/Django (Dummy), enabling the creation of scalable and secure digital products. I excel in translating complex business requirements into seamless, user-centric interfaces using Tailwind CSS for rapid responsive design and advanced data handling via React Query and integrated RESTful APIs.`,
    `My professional experience is marked by impactful, measurable results: I led the development of a full-stack client acquisition system at PHOS CONSULTS that streamlined service delivery and successfully boosted lead generation by 40% through optimized user flows and AI-powered features. Furthermore, I engineered and deployed two high-fidelity, secure interfaces for high-stakes fintech applications using Vue.js and Laravel, demonstrating my commitment to enterprise-grade code quality. My deep understanding of infrastructure management allowed me to resolve critical cPanel deployment errors, guaranteeing 100% operational uptime. I am committed to leveraging my full-stack proficiency to deliver clear, impactful technological solutions that drive business growth.`,
  ],
  technical_skills: {
    frontend_frameworks: [
      "React.js",
      "Next.js",
      "Vue.js",
      "React Router (Remix)",
      "Tanstack",
    ],
    languages: ["Python", "Javascript", "Typescript", "Nodejs", "Bun", "PHP"],
    styling: [
      "Tailwind CSS",
      "DaisuyUI",
      "ShadCN",
      "Responsive Design (Media Queries)",
    ],
    state_management_data: [
      "React Query / TanStack Query",
      "Redux / Redux Toolkit",
      "Pinia - Vue",
      "Zustand",
      "Context API",
    ],
    backend_tools: [
      "Node.js",
      "ExpressJS",
      "HonoJS",
      "PHP",
      "Supabase",
      "Docker",
      "Laravel",
      "Django",
      "Firebase",
      "Prisma",
      "Redis",
      "MongoDB",
      "Postgres",
      "MySQL",
      "AWS",
    ],
    tools_devops: [
      "CI/CD",
      "Git / GitHub",
      "Contentful CMS",
      "CPanel",
      "Vercel / Netlify",
      "Performance Optimization (Web Vitals)",
      "Cloud Computing",
      "ML/AI",
    ],
  },
  work_experience: [
    {
      company: "PHOS CONSULTS",
      role: "Fullstack Web Developer & Lead IT Manager",
      duration: "Apr. 2023 – Present (2+ years)",
      location: "Ibadan, Oyo State, Nigeria",
      details: [
        "Led the design and development of scalable, user-centric frontends using **React.js** and managed dynamic content with **Contentful CMS**.",
        "Engineered key features that successfully **boosted lead generation by 40%** through intuitive booking forms and optimized user flows.",
        "Managed supporting technical infrastructure, including a secure **PHP backend** for submissions, ensuring high system reliability and uptime.",
        "Oversaw IT strategy and provided technical direction, ensuring technology solutions were effective and scalable.",
      ],
    },
    {
      company: "Next Switch",
      role: "Frontend Web Developer (SIWES Internship)",
      duration: "Aug. 2025 – Sept. 2025 (2 months)",
      location: "Ibadan, Oyo State, Nigeria",
      details: [
        "Developed and deployed highly **responsive** and secure user interfaces for fintech applications (MyRiteWallet, Dgnravepay) using **Vue.js** and **Tailwind CSS**.",
        "Implemented integration points between the frontend and **Laravel** back-end for handling transactions and user data.",
        "Successfully resolved critical **cPanel deployment issues**, demonstrating practical full-stack deployment and problem-solving skills.",
        "Provided mentorship to students in foundational web technologies like **HTML** and **Node.js**.",
      ],
    },
    {
      company: "SaverTech Limited",
      role: "Software Developer (Internship)",
      duration: "Aug. 2024 – Sept. 2024 (2 months)",
      location: "Ibadan, Oyo State, Nigeria",
      details: [
        "Gained hands-on experience in cross-platform mobile application development using **Flutter**.",
        "Practiced integration techniques with backend services, focusing on **PHP** technologies and API connectivity.",
      ],
    },
  ],
  portfolio_projects: [
    {
      title: "Phos Consults",
      technologies: [
        "React Js",
        "React Query",
        "TailwindCss",
        "Contentful CMS",
        "Standard meta / SEO tools",
      ],
      description:
        "A consulting / business solutions website presenting services, portfolios, and corporate information in a clean, professional layout.",
      live_link: "https://phosconsults.com/",
      image: projectImages.phosConsults,
    },
    {
      title: "Fintech: Payment Platform - Dgnravepay",
      technologies: ["Laravel", "TailwindCSS", "MySQL", "GIT/Github", "CI/CD"],
      description:
        "A financial tech front-end offering banking, payments, loans and wallet services. The site is sleek and responsive, combining interactive components with promotional content to showcase the product offering.",
      github_link: null,
      live_link: "https://dgnravepay.com",
      image: projectImages.dgnravepay,
    },
    {
      title: "Capital Consult HQ",
      technologies: [
        "Static / JAMstack",
        "Wordpress",
        "Standard SEO / meta tools",
      ],
      description:
        "A digital solutions and training company site, showcasing offerings and thought leadership in clean sections and with modern styling.",
      live_link: "https://capitalconsulthq.com/",
      image: projectImages.capitalConsults,
    },
    {
      title: "Ifeheni25 Wedding Event",
      technologies: [
        "VueJs",
        "Static generation ",
        "Tailwind",
        "DaisyUI",
        "Typescript",
        "Deployed on Netlify",
      ],
      description:
        "A static website for a wedding event, holding wedding details, couple details and payment options for event funding",
      live_link: "https://ifeheni25.netlify.app/",
      github_link: "https://github.com/SAM-BAMKOLE/ifeheni25",
      image: projectImages.wedding,
    },
    {
      title: "URL Shortener / Bitly Clone",
      technologies: [
        "React Router (Remix)",
        "Vercel deployment",
        "Static / serverless routes",
        "Typescript",
        "MySQL",
      ],
      description:
        "A demo / project site built with React Router (Remix), combining dynamic routing, static generation and advanced Analytics for URL Shortening like tinyurl, bitly, e.t.c.",
      live_link: "https://shortly-amber-zeta.vercel.app/",
      github_link: "https://github.com/SAM-BAMKOLE/shortly",
      image: projectImages.urlShortener,
    },
    {
      title: "Next.js Full Storefront with Admin",
      technologies: [
        "Next.js / React",
        "Firebase (Auth & Firestore DB)",
        "Vercel deployment",
        "Typescript",
        "TailwindCss",
      ],
      description:
        "A full storefront demo showing product listing, detail pages, and eCommerce flows, likely backed by headless APIs and powered by Next.js features.",
      live_link: "https://nextjs-full-storefront.vercel.app/",
      github_link: "https://github.com/SAM-BAMKOLE/nextjs-studio-storefront",
      image: projectImages.storefront,
    },
  ],
  education: [
    {
      institution: "Federal University Oye Ekiti",
      degree: "Bachelor of Applied Science (BASc)",
      field: "Computer and Information Sciences and Support Services",
      duration: "October 2022 – January 2026 (Expected)",
    },
  ],
  certifications: [],
};
