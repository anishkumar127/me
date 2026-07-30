export type ProjectCategory =
  | "Cubic Logics"
  | "Freelancing"
  | "Personal"
  | "Learning";

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
    id: "helpdesk-365",
    name: "Helpdesk 365",
    category: "Cubic Logics",
    status: "Completed",
    period: "Mar 2023 – Feb 2026",
    tech: [
      "React.js",
      "Redux",
      "Next.js",
      "SharePoint",
      "SPFx",
      "Fluent UI",
      "Microsoft Teams",
      "Hono",
      "PostgreSQL",
      "Azure DevOps",
    ],
    url: "https://marketplace.microsoft.com/en-us/product/office/wa200004972?tab=overview",
    description:
      "Flagship Microsoft Marketplace ticketing product (4.9★, 311+ ratings) by Apps 365 & HR365 for SharePoint and Microsoft Teams. IT, HR, and Finance helpdesk with AI-powered automation, knowledge base, SLA management, and M365 ecosystem integration.",
    highlights: [
      "Core SPFx webparts and Teams tabs — dashboards, automation rules, approval workflows, Kanban view, and mail tracker",
      "Add-ons package on Marketplace — CSAT surveys, chatbot, ticket archival, MS Forms integration, and multi-language support",
      "Architecture variants: multi-tenant (Next.js + SharePoint + PostgreSQL on GCP), and Next.js + Hono API + PostgreSQL stack",
      "Microsoft 365 Certified App — GCC/GCC High compliant, Zero Trust security within M365",
    ],
  },
  {
    id: "civic-365-spfx",
    name: "Civic 365 (SharePoint / Microsoft Teams)",
    category: "Cubic Logics",
    status: "Completed",
    period: "Sep 2023 – Feb 2026",
    tech: [
      "React.js",
      "Redux",
      "SharePoint",
      "SPFx",
      "Fluent UI",
      "Microsoft Teams",
      "Azure",
    ],
    url: "https://marketplace.microsoft.com/en-us/product/WA200006430",
    description:
      "Development on Civic 365 — a Microsoft Marketplace 311 CRM citizen experience platform by Apps 365 & HR365 for SharePoint and Teams. Manages citizen service requests with knowledge base, omni-channel portal, call centre integration, Esri mapping, and automated routing with SLA escalation.",
    highlights: [
      "SPFx webparts deployable on SharePoint pages, Teams tabs, and Teams personal app",
      "311 CRM workflows — duplicate management, two-way resident communication, and dynamic reporting",
      "Microsoft Partner solution — zero-trust security with data kept within client's M365/Azure cloud",
    ],
  },
  {
    id: "civic-365-multitenant",
    name: "Civic 365 (Multi-Tenant)",
    category: "Cubic Logics",
    status: "Completed",
    period: "Sep 2023 – Feb 2026",
    tech: ["Next.js", "Redux", "SharePoint", "SPFx"],
    url: "https://civic365.ca/",
    description:
      "Multi-tenant Civic 365 platform with SharePoint integration — handles tenant isolation, role-based access, and civic service workflows for government and local authorities.",
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
    status: "Completed",
    period: "Mar 2023 – Feb 2026",
    tech: ["SharePoint SPFx", "Node.js"],
    description:
      "Published reusable logger npm packages for structured logging across SPFx webparts and Node.js services.",
  },
  {
    id: "finsoeasy360",
    name: "FinSoEasy360 (Schedule III / Statutory Reporting)",
    category: "Freelancing",
    status: "Active",
    tech: [
      "Express.js",
      "MongoDB",
      "AWS",
      "React",
      "Excel Export",
      "Schedule III",
    ],
    url: "https://www.finsoeasy360.finsensor.ai/",
    description:
      "Financial reporting software at Finsensor AI for generating Schedule III–compliant Balance Sheet, P&L, and Cash Flow statements — with real-time consolidation, manual entry workflows, notes-to-accounts management, and Excel export.",
    highlights: [
      "Complex backend for multi-unit consolidation, segment-wise reporting, and audit trails",
      "Frontend deployment, UI guidance, and collaborative reviewer workflows",
    ],
  },
  {
    id: "rptsoeasy360",
    name: "RPTsoEasy360 (Related Party Transactions)",
    category: "Freelancing",
    status: "Active",
    tech: ["Express.js", "MongoDB", "AWS", "React", "Schedule III"],
    url: "https://www.finsoeasy360.finsensor.ai/",
    description:
      "Related party transaction tool at Finsensor AI — automates identification and elimination of intercompany and related party transactions across units, subsidiaries, joint ventures, and associates for accurate, compliant, and efficient consolidated financial statements.",
    highlights: [
      "Backend for RPT mapping, intercompany eliminations, and consolidation adjustments",
      "Supports regulatory compliance for related party disclosures under Companies Act and Ind AS",
    ],
  },
  {
    id: "reconsoeasy360",
    name: "ReconSoEasy360 (Vendor Reconciliation)",
    category: "Freelancing",
    status: "Active",
    tech: ["MongoDB", "Express.js", "AWS", "React"],
    url: "https://vendor-reconciliation-forked.vercel.app/",
    description:
      "Vendor reconciliation software at Finsensor AI — automatically match vendor statements against ledger records, identify discrepancies with detailed reasons for mismatches, and generate instant reconciliation reports so books reflect the true financial position.",
    highlights: [
      "Complex backend for automated matching, variance detection, and financial data processing",
      "Full AWS deployment with real-time reporting dashboards",
    ],
  },
  {
    id: "famsoeasy360",
    name: "FAMsoEasy360 (Fixed Assets)",
    category: "Freelancing",
    status: "Active",
    tech: ["PostgreSQL", "Fastify.js", "AWS", "React", "Schedule III"],
    url: "https://farsoeasy360.vercel.app/",
    description:
      "Fixed asset management software at Finsensor AI — effortlessly manage and verify physical assets with Schedule III–compliant fixed asset schedules under the Companies Act 2013. Track acquisitions, depreciation, disposals, and asset-wise registers with accurate reporting aligned to audit and regulatory requirements.",
    highlights: [
      "Complete backend with PostgreSQL and Fastify — asset lifecycle, depreciation, and roll-forward schedules",
      "Frontend integration and AWS deployment",
    ],
  },
  {
    id: "omssoeasy360",
    name: "OMSSoEasy360 (HRMS)",
    category: "Freelancing",
    status: "Active",
    tech: ["PostgreSQL", "Fastify.js", "AWS", "Hostinger", "React"],
    url: "https://omssoeasy360.vercel.app/",
    description:
      "Human Capital Management software at Finsensor AI — employee records, attendance, payroll, and HR workflows. Deployed on AWS and Hostinger.",
  },
  {
    id: "fpa-tools",
    name: "FP&A Financial Tools",
    category: "Freelancing",
    status: "Active",
    tech: ["Node.js", "PostgreSQL", "MongoDB"],
    description:
      "Financial Planning & Analysis suite for enterprise clients — trial balance, lease management, manual entries, adjustments, and Excel report generation.",
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
    id: "personal-saas",
    name: "Personal HR SaaS (Multi-Organization)",
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
      "Solo-built HR platform preparing for market launch — multi-organization SaaS with employee directory, leave management, timesheets, payroll, performance management, employee onboarding, and recruitment management. Full web app plus React Native mobile app, end to end.",
    highlights: [
      "Multi-tenant architecture — separate orgs, roles, and data isolation",
      "Web (Vite + React + Fastify + PostgreSQL) and mobile (React Native Expo)",
      "Solo development: UI/UX, backend APIs, database design, and AWS deployment",
    ],
  },
  {
    id: "hrms-spfx",
    name: "HRMS (SharePoint SPFx)",
    category: "Personal",
    status: "Completed",
    tech: ["SharePoint", "SPFx", "React.js", "Fluent UI", "TypeScript"],
    description:
      "Human Resource Management System built on SharePoint using SPFx — custom webparts for employee records, attendance tracking, and HR workflows within the SharePoint ecosystem.",
  },
  {
    id: "weavify",
    name: "Weavify UI Library",
    category: "Personal",
    status: "Active",
    tech: ["React", "MUI", "Tailwind CSS"],
    url: "https://www.npmjs.com/package/weavify",
    description:
      "Reusable React UI component library built with Material-UI and Tailwind CSS to accelerate development and ensure design consistency across projects.",
  },
  {
    id: "water-reminder",
    name: "Water Reminder Extension",
    category: "Learning",
    status: "Completed",
    tech: ["Chrome Extension", "JavaScript", "HTML", "CSS"],
    url: "https://github.com/anishkumar127/water-reminder-extension",
    description:
      "Chrome extension that sends periodic reminders to drink water — built as a fun side project to learn browser extension APIs and background scripts.",
  },
  {
    id: "password-manager",
    name: "Password Manager",
    category: "Learning",
    status: "Completed",
    tech: ["React Native", "JavaScript", "AsyncStorage"],
    url: "https://github.com/anishkumar127/password-manager",
    description:
      "Mobile password manager app built with React Native — stores credentials securely on device, built as a learning project to explore mobile app development.",
  },
];

export const cubicProjects = projects.filter((p) => p.category === "Cubic Logics");
export const freelanceProjects = projects.filter(
  (p) => p.category === "Freelancing",
);
export const personalProjects = projects.filter((p) => p.category === "Personal");
export const learningProjects = projects.filter((p) => p.category === "Learning");

export const projectTabs = [
  { id: "cubic", label: "Cubic Logics", category: "Cubic Logics" as const },
  { id: "freelancing", label: "Freelancing", category: "Freelancing" as const },
  { id: "personal", label: "Personal", category: "Personal" as const },
  { id: "fun", label: "Fun / Learning", category: "Learning" as const },
] as const;

export type ProjectTabId = (typeof projectTabs)[number]["id"];

export function getAllTech(): string[] {
  const techSet = new Set<string>();
  for (const project of projects) {
    for (const t of project.tech) {
      techSet.add(t);
    }
  }
  return Array.from(techSet).sort();
}
