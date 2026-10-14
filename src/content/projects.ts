/**
 * Language-independent project data. Titles, summaries and highlights live in the
 * dictionaries (src/i18n/dictionaries/*.ts) under `projects.items.<id>`.
 *
 * To add a project: add an entry here, then its texts in BOTH dictionaries.
 * Links left empty are hidden.
 */
export const projects = [
  {
    id: "ai-portfolio-assistant",
    featured: true,
    status: "live",
    stack: ["Next.js 16", "TypeScript", "Claude API", "Streaming", "Tailwind CSS"],
    links: { source: "https://github.com/moisediarra/moisediarra", demo: "" },
  },
  {
    id: "digital-wallet",
    status: "completed",
    stack: ["Python", "FastAPI", "SQLAlchemy 2", "PostgreSQL", "Redis", "RabbitMQ", "Kubernetes / Helm"],
    links: { source: "", demo: "" },
  },
  {
    id: "sentinel-bureau",
    status: "course",
    stack: [".NET 10", "C# 14", "ASP.NET Core", "PostgreSQL", "EF Core + Dapper", "Redis", "Testcontainers"],
    links: { source: "", demo: "" },
  },
  {
    id: "diarradev-hr",
    status: "inProgress",
    stack: [".NET 10", "Aspire", "Angular", "Keycloak", "PostgreSQL"],
    links: { source: "", demo: "" },
  },
  {
    id: "enquiry-api",
    stack: ["C#", "ASP.NET Core", "Dapper", "SQL Server"],
    links: { source: "", demo: "" },
  },
  {
    id: "taskflow",
    stack: ["Java 21", "Spring Boot 4", "PostgreSQL", "WebSocket", "React 19", "TanStack Query", "Tailwind CSS"],
    links: { source: "https://github.com/moisediarra/TaskFlow", demo: "" },
  },
  {
    id: "vpms",
    stack: ["ASP.NET Core 10", "EF Core", "PostgreSQL", "React 19", "TypeScript", "Docker"],
    links: { source: "", demo: "" },
  },
  {
    id: "hope-and-love",
    status: "live",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Vercel"],
    links: { source: "https://github.com/moisediarra/hopeandlove", demo: "https://hopeandlove.vercel.app" },
  },
  {
    id: "lumora-bank",
    status: "demo",
    stack: ["React 19", "TypeScript", "Vite", "Recharts"],
    links: { source: "https://github.com/moisediarra/LumoraBank", demo: "https://lumora-bank.vercel.app" },
  },
] as const satisfies readonly Project[];

export type ProjectStatus = "live" | "completed" | "inProgress" | "demo" | "course";

type Project = {
  id: string;
  featured?: boolean;
  status?: ProjectStatus;
  stack: readonly string[];
  links: { source: string; demo: string };
};

export type ProjectId = (typeof projects)[number]["id"];
