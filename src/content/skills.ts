/** Technologies by group. Group names are translated in the dictionaries (`expertise.groups`). */
export const skills = {
  ai: [
    "Agentic AI",
    "RAG",
    "Vector databases",
    "MCP",
    "Claude API",
    "Python",
    "Pandas",
    "NumPy",
    "TensorFlow",
    "Streamlit",
    "Power BI",
  ],
  backend: [
    "C# / .NET",
    "ASP.NET Core",
    "FastAPI",
    "Django",
    "Java",
    "Spring Boot",
    "Node.js",
    "NestJS",
    "Go",
    "Prisma",
  ],
  frontend: ["TypeScript", "React", "Next.js", "Angular", "Tailwind CSS"],
  data: ["PostgreSQL", "SQL Server", "Oracle 19c / PL-SQL", "Redis", "RabbitMQ"],
  devops: [
    "Docker",
    "GitHub Actions",
    "Jenkins",
    "Kubernetes / Helm",
    "Azure",
    "AWS",
    "Linux",
    "Windows Server",
  ],
  platforms: ["Odoo", "Moodle", "Sage FRP 1000", "Keycloak"],
} as const;

export type SkillGroup = keyof typeof skills;
