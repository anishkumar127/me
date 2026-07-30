export type ProjectCategory = "Cubic Logics" | "Freelancing" | "Personal";

export type Project = {
  id: string;
  name: string;
  category: ProjectCategory;
  status: "Active" | "Completed";
  period?: string;
  tech: string[];
  description: string;
  url?: string;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    id: "helpdesk-spfx",
    name: "Helpdesk 365 (SPFx)",
    category: "Cubic Logics",
    status: "Active",
    period: "Mar 2023 – Present",
    tech: ["React.js", "Redux", "SharePoint", "SPFx", "Fluent UI"],
    description:
      "Built the complete Helpdesk 365 solution in SharePoint using SPFx — custom webparts, Fluent UI components, and Redux state management for ticket management workflows.",
  },
  {
    id: "helpdesk-multitenant",
    name: "Helpdesk 365 Multi-Tenant",
    category: "Cubic Logics",
    status: "Active",
    period: "Jan 2025 – Present",
    tech: ["Next.js", "SharePoint", "PostgreSQL"],
    description:
      "Multi-tenant Helpdesk 365 for Google and GCP tenants — Next.js frontend integrated with SharePoint backend, supporting isolated tenant configurations.",
  },
  {
    id: "helpdesk-hono",
    name: "Helpdesk 365 (Hono API)",
    category: "Cubic Logics",
    status: "Active",
    tech: ["Next.js", "Hono", "PostgreSQL"],
    description:
      "Alternative Helpdesk 365 stack using Next.js with Hono API layer and PostgreSQL for data persistence and improved performance.",
  },
  {
    id: "civic-375",
    name: "Civic 375 (Multi-Tenant)",
    category: "Cubic Logics",
    status: "Active",
    period: "Sep 2023 – Present",
    tech: ["Next.js", "Redux", "SharePoint", "SPFx"],
    description:
      "Multi-tenant civic management application with SharePoint integration — handles tenant isolation, role-based access, and civic service workflows.",
  },
  {
    id: "mail-tracker",
    name: "Mail Tracker",
    category: "Cubic Logics",
    status: "Completed",
    period: "Oct 2024 – Nov 2024",
    tech: ["Fastify.js", "PostgreSQL"],
    description:
      "Email tracking system with Fastify.js REST API and PostgreSQL — tracks email delivery, opens, and engagement metrics.",
  },
  {
    id: "logs-module",
    name: "Logs Module (npm packages)",
    category: "Cubic Logics",
    status: "Active",
    tech: ["SharePoint SPFx", "Node.js"],
    description:
      "Published reusable logger npm packages for structured logging across SPFx webparts and Node.js services.",
  },
  {
    id: "vendor-reconciliation",
    name: "Vendor Reconciliation",
    category: "Freelancing",
    status: "Active",
    tech: ["MongoDB", "Express.js", "AWS"],
    url: "https://vendor-reconciliation-forked.vercel.app/",
    description:
      "Complex backend for vendor reconciliation at Finsensor AI — automated matching, discrepancy detection, and financial data processing with full AWS deployment.",
  },
  {
    id: "schedule-iii",
    name: "Schedule III",
    category: "Freelancing",
    status: "Active",
    tech: ["Express.js", "MongoDB", "AWS"],
    url: "https://schedule-iii.finsensor.ai/",
    description:
      "Schedule III financial reporting tool at Finsensor AI — complex backend for regulatory compliance data, with frontend deployment and UI guidance.",
  },
  {
    id: "fixed-assets",
    name: "Fixed Assets Tool",
    category: "Freelancing",
    status: "Active",
    tech: ["PostgreSQL", "Fastify.js", "AWS"],
    url: "https://fixed-assets-tool-frontend.vercel.app/",
    description:
      "Fixed asset tracking and management — complete backend with PostgreSQL and Fastify, frontend integration, and AWS deployment.",
  },
  {
    id: "hrms",
    name: "HRMS Application",
    category: "Freelancing",
    status: "Active",
    tech: ["PostgreSQL", "Fastify.js", "AWS", "Hostinger"],
    description:
      "Human Resource Management System — employee records, attendance, and payroll modules. Deployed on AWS and Hostinger.",
  },
  {
    id: "fpa-tools",
    name: "FP&A Financial Tools",
    category: "Freelancing",
    status: "Active",
    tech: ["Node.js", "PostgreSQL", "MongoDB"],
    description:
      "Financial Planning & Analysis suite for enterprise clients — trial balance, related party transactions, lease management, manual entries, adjustments, and Excel report generation.",
  },
  {
    id: "other-freelance",
    name: "Other Freelancing Projects",
    category: "Freelancing",
    status: "Active",
    tech: ["React", "Node.js", "AWS"],
    description:
      "Additional client projects including financial data management tools and enterprise web applications.",
  },
  {
    id: "weavify",
    name: "Weavify UI Library",
    category: "Personal",
    status: "Active",
    tech: ["React", "MUI", "Tailwind CSS"],
    description:
      "Reusable React UI component library built with Material-UI and Tailwind CSS to accelerate development and ensure design consistency across projects.",
  },
  {
    id: "personal-saas",
    name: "Personal SaaS Products",
    category: "Personal",
    status: "Active",
    tech: [
      "Vite",
      "React",
      "Fastify.js",
      "PostgreSQL",
      "AWS",
      "React Native Expo",
    ],
    description:
      "Independently building full-stack web applications and mobile apps (React Native Expo) — handling UI design, backend, database, and cloud deployment solo.",
  },
];

export const cubicProjects = projects.filter((p) => p.category === "Cubic Logics");
export const freelanceProjects = projects.filter(
  (p) => p.category === "Freelancing",
);
export const personalProjects = projects.filter((p) => p.category === "Personal");
