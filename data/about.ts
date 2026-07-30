export const about = {
  intro: `Full Stack Developer with 3+ years of experience, previously at Cubic Logics (apps365.com). I build end-to-end web applications — from SharePoint SPFx webparts and multi-tenant SaaS platforms to complex Node.js backends with MongoDB and PostgreSQL, deployed on AWS. I take ownership across frontend, backend, database design, and deployment.`,

  easterEgg:
    "Passionate about leveraging modern web technologies to solve complex problems and deliver exceptional user experiences.",

  whatIDo: [
    "Multi-tenant SaaS apps with Next.js, SharePoint, and PostgreSQL",
    "SharePoint Framework (SPFx) webparts and Fluent UI interfaces",
    "High-performance APIs with Fastify.js, Express.js, and Hono",
    "Financial and enterprise tools — FP&A, trial balance, vendor reconciliation, asset tracking",
    "Full deployment pipelines on AWS, Azure DevOps, and Hostinger",
  ],

  strengths: [
    "End-to-end ownership: UI design, backend architecture, DB schema, and cloud deployment",
    "Hybrid stack: MERN + SharePoint/SPFx — enterprise and modern web in one skillset",
    "Complex backend development: multi-tenant logic, financial data processing, report generation",
    "Published npm packages (logger modules) and built own UI library (Weavify)",
    "Building personal products solo — web (Vite + React + Fastify + PostgreSQL + AWS) and mobile (React Native Expo)",
  ],

  achievements: [
    "Built Helpdesk 365 across 3 architectures: SPFx/SharePoint, multi-tenant Next.js + SharePoint (Google/GCP), and Next.js + Hono + PostgreSQL",
    "Delivered Civic 375 multi-tenant application with SharePoint integration",
    "Shipped production freelancing tools at Finsensor AI (Vendor Reconciliation, Schedule III) with complex MongoDB backends on AWS",
    "Independently developed and deployed HRMS, Fixed Assets Tool, and FP&A financial tools",
    "Created Weavify — reusable React UI component library (MUI + Tailwind CSS)",
  ],

  skills: {
    Languages: ["JavaScript", "TypeScript", "Java", "Python"],
    Frontend: [
      "React.js",
      "Next.js",
      "React Native",
      "React Native Expo",
      "Redux",
      "zustand",
      "SPFx",
      "Fluent UI",
      "Ant Design",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SCSS",
    ],
    Backend: ["Node.js", "Express.js", "Fastify.js", "Hono"],
    Databases: ["MongoDB", "PostgreSQL", "SharePoint", "Drizzle ORM"],
    "DevOps & Tools": [
      "Git",
      "GitHub",
      "Docker",
      "AWS",
      "Azure DevOps",
      "Hostinger",
    ],
    Practices: ["DevOps", "Design Patterns", "zod"],
  },
} as const;
