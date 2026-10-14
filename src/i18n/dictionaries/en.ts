import type { Dictionary } from "../types";

const en: Dictionary = {
  meta: {
    title: "Moise Diarra — Software Engineer · Agentic & Generative AI",
    description:
      "Software engineer with 6+ years of experience building enterprise systems and AI-powered applications: AI agents, RAG, LLM integrations, Clean Architecture, .NET, Python and React.",
    ogAlt: "Moise Diarra, Software Engineer specialised in agentic and generative AI",
  },

  nav: {
    home: "Moise Diarra — home",
    main: "Main navigation",
    skip: "Skip to content",
    language: "Language",
    theme: "Toggle light / dark theme",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    cv: "Résumé",
    about: "About",
    expertise: "Expertise",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },

  hero: {
    eyebrow: "Software Engineer · Agentic & Generative AI",
    titleLead: "I build",
    titleAccent: "AI agents",
    titleTail: "and the reliable software around them.",
    intro:
      "6+ years delivering enterprise applications for credit bureaus, banks, NGOs and businesses across Africa. Today I focus on LLM-powered products: agents that use tools, RAG over company data, and the clean architecture that keeps them dependable in production.",
    location: "Based in Accra, Ghana · Working in English & French",
    ctaProjects: "See my work",
    ctaContact: "Get in touch",
    ctaCv: "Download CV",
    ctaAsk: "Ask my AI assistant",
    stats: [
      { value: "6+", label: "years building production software" },
      { value: "MSc", label: "Software Engineering, Highest Honors" },
      { value: "EN · FR", label: "fully bilingual" },
    ],
    trace: {
      label: "agent.run(task)",
      caption: "How I design agents: small, observable steps, with tools and checks.",
      steps: [
        { kind: "task", text: "Answer a client question from internal docs" },
        { kind: "plan", text: "retrieve → reason → act → verify" },
        { kind: "tool", text: "search_knowledge_base(query)", result: "6 passages" },
        { kind: "tool", text: "query_database(sql)", result: "42 rows" },
        { kind: "check", text: "every claim grounded in a source", result: "pass" },
        { kind: "done", text: "answer + citations" },
      ],
    },
  },

  about: {
    eyebrow: "About",
    title: "An engineer who ships, from requirements to production.",
    paragraphs: [
      "I’m Moise Diarra, a software engineer based in Accra, Ghana. Over the past six years I have designed and delivered business applications for credit bureaus, banks, telecoms, hotels, a medical research centre and international NGOs — in Mali, in Ghana and for clients abroad.",
      "Today I’m a Senior Software Developer at XDS DATA Ghana, where I build the systems behind a credit bureau: billing, approval workflows, a portal API used by banks and financial institutions, and payroll. I design them with Clean Architecture, as modular monoliths organised in vertical slices, so business rules stay independent of frameworks and every feature remains testable.",
      "My focus now is generative and agentic AI: LLM applications that retrieve the right context, call tools to act on real systems, and are deployed with the same rigour as any other production service. I also teach — I have trained professionals and university students in software development, ERP and information systems.",
    ],
    facts: [
      { label: "Based in", value: "Accra, Ghana" },
      { label: "Currently", value: "Senior Software Developer, XDS DATA Ghana" },
      { label: "Education", value: "MSc Software Engineering — Highest Honors" },
      { label: "Languages", value: "English, French, Bambara" },
    ],
  },

  expertise: {
    eyebrow: "Expertise",
    title: "What I bring to a team",
    intro:
      "AI features are only as good as the system that carries them. I work across both: the models and the software engineering around them.",
    areas: [
      {
        title: "Agentic AI",
        text: "Agents that plan, call tools and verify their work — with guardrails, and a human in the loop where it matters.",
        points: [
          "Tool use & function calling",
          "Model Context Protocol (MCP)",
          "Multi-step workflows with guardrails",
          "AI-assisted engineering with Claude Code",
        ],
      },
      {
        title: "Generative AI & RAG",
        text: "LLM features grounded in your own data, streamed into real products and evaluated before they ship.",
        points: [
          "Retrieval-augmented generation",
          "Embeddings & vector databases",
          "Chatbots & assistants",
          "Prompting, tokenization & evaluation",
        ],
      },
      {
        title: "Software architecture",
        text: "Enterprise systems built to last, documented with decision records and protected by architecture tests.",
        points: [
          "Clean Architecture",
          "Modular monolith & vertical slices",
          "Domain-Driven Design & CQRS",
          "REST APIs & microservices",
        ],
      },
      {
        title: "Full-stack & DevOps",
        text: "End-to-end delivery across four ecosystems, shipped with containers and CI/CD pipelines.",
        points: [
          "C# .NET · Python · Java · Go",
          "React · Next.js · Angular",
          "PostgreSQL · SQL Server · Oracle",
          "Docker · GitHub Actions · Jenkins · Azure · AWS",
        ],
      },
    ],
    stackTitle: "Tech stack",
    groups: {
      ai: "AI & data",
      backend: "Backend",
      frontend: "Frontend",
      data: "Databases & messaging",
      devops: "DevOps & cloud",
      platforms: "ERP & platforms",
    },
  },

  projects: {
    eyebrow: "Projects",
    title: "Selected work",
    intro:
      "Systems I have designed and built, from AI features to financial platforms. Several were built for employers and clients, so their code is not public.",
    featured: "Featured",
    source: "Source code",
    demo: "Live demo",
    status: {
      live: "Live",
      completed: "Completed",
      inProgress: "In progress",
      demo: "Demo",
      course: "Course",
    },
    items: {
      "ai-portfolio-assistant": {
        title: "AI portfolio assistant",
        summary:
          "The assistant on this site. Visitors ask about my experience and get answers grounded only in my verified profile, streamed in real time, in English or French.",
        highlights: [
          "Knowledge built from the site’s own content — one source of truth, no drift",
          "Token streaming from a Next.js route handler to a React chat panel",
          "Guardrails: input validation, rate limiting, no invented facts, off-topic refusal",
        ],
      },
      "digital-wallet": {
        title: "Digital Wallet Platform",
        summary:
          "Electronic wallet API backed by an append-only double-entry ledger: deposits, withdrawals and atomic, idempotent transfers with real-time notifications.",
        highlights: [
          "JWT auth with refresh-token rotation, revocation and RBAC",
          "Transactional outbox → RabbitMQ → WebSocket notifications",
          "Prometheus metrics, OpenTelemetry tracing, ≥ 90% test coverage",
        ],
      },
      "sentinel-bureau": {
        title: "Sentinel Bureau — architecture course",
        summary:
          "A 13-module course for .NET developers moving into architect roles: one credit-bureau system, evolved from a naive layered app into a modular monolith with enforced DDD boundaries.",
        highlights: [
          "A real domain: data submission, identity resolution, scoring, disputes, billing",
          "Module boundaries enforced by architecture tests",
          "Decision records and capacity arithmetic behind every choice",
        ],
      },
      "diarradev-hr": {
        title: "DiarradevHR — HR & payroll",
        summary:
          "HR and payroll system built as a modular monolith, with single sign-on, a database schema per module and secure document storage.",
        highlights: [
          "Architecture tests: no module or vertical slice depends on another",
          "Keycloak login (Authorization Code + PKCE) and policy-based permissions",
          "Logs, traces and health checks in the .NET Aspire dashboard",
        ],
      },
      "enquiry-api": {
        title: "Credit-bureau enquiry reporting API",
        summary:
          "Reporting API over millions of credit-bureau enquiries: subscriber search volumes and breakdowns by period, status and source.",
        highlights: [
          "Decision record: indexed SQL Server + Dapper instead of Elasticsearch, based on measuring the real data",
          "Read-only aggregates designed around existing indexes",
          "Kept deliberately simple until complexity earns more structure",
        ],
      },
      taskflow: {
        title: "TaskFlow — team project management",
        summary:
          "Kanban project management with assignments, deadlines and live notifications, plus a manager view: who works on what, what is overdue, who is overloaded.",
        highlights: [
          "Real-time board updates over WebSocket (STOMP)",
          "Spring Modulith boundaries and Flyway migrations",
          "Tested with JUnit, Testcontainers, Vitest and Playwright",
        ],
      },
      vpms: {
        title: "Visitor Pass Management System",
        summary:
          "The full visitor lifecycle: self-service kiosk check-in, appointment pre-registration, returning-visitor recognition and an admin back office.",
        highlights: [
          "Idempotency keys make kiosk check-ins safe to retry",
          "PDF reports, e-mail notifications and a versioned API",
          "Fine-grained roles and permissions",
        ],
      },
      "hope-and-love": {
        title: "Hope and Love — bilingual website",
        summary:
          "Bilingual French / English website for a humanitarian organisation, with automatic language detection and SEO in both languages.",
        highlights: [
          "Language chosen from the last visit, then the browser’s preferences",
          "Per-language metadata, sitemap and social previews",
          "Content edited from simple dictionary files",
        ],
      },
      "lumora-bank": {
        title: "Lumora Bank — banking demo",
        summary:
          "A bank demo for client presentations: public website plus an online-banking app with charts, transfers, card controls and CSV export.",
        highlights: [
          "Interactive savings and loan calculators",
          "Banking state simulated in the browser — works offline",
          "Rebranded for a new client in minutes",
        ],
      },
    },
  },

  experience: {
    eyebrow: "Experience",
    title: "Where I’ve worked",
    items: [
      {
        role: "Senior Software Developer",
        company: "XDS DATA Ghana Ltd.",
        location: "Accra, Ghana",
        period: "Aug 2025 – Present",
        points: [
          "Design, build and maintain the systems behind credit-bureau and data-services operations: billing, approval workflows, a portal API used by banks and financial institutions, and company payroll.",
          "Architect applications with Clean Architecture, as modular monoliths organised in vertical slices — business logic independent of frameworks, every feature testable on its own.",
          "Build and run CI/CD pipelines with GitHub Actions, Jenkins and Docker; support cloud deployments.",
          "Work with cross-functional teams on system architecture, code reviews and production support.",
        ],
        tags: ["C# / .NET", "Clean Architecture", "PostgreSQL", "SQL Server", "Docker", "CI/CD"],
      },
      {
        role: "Software Engineer & Data Scientist",
        company: "DIARRADEV (independent practice)",
        location: "Bamako, Mali",
        period: "2021 – 2024",
        points: [
          "Delivered complete business applications for clients: school management (ASP.NET Core + React), HR management (Django + React), e-commerce (Spring Boot + Angular) and payroll (.NET Core + Angular).",
          "Built data-analysis dashboards and reporting solutions with Python and Streamlit.",
        ],
        tags: [".NET", "Django", "Spring Boot", "React", "Angular", "Streamlit"],
      },
      {
        role: "IT Manager & Developer",
        company: "ACREMAC SARL — Africa Credit Management Assurances & Consulting",
        period: "2023 – 2024",
        points: ["Managed the company’s IT infrastructure and developed internal business applications."],
      },
      {
        role: "IT Expert Trainer (contract engagements)",
        company: "SOFRECO France & CSA · ESC-MALI University",
        period: "2020 – 2024",
        points: [
          "Delivered professional IT training programmes, including university-level courses on ERP and information-systems digitalisation (Odoo).",
        ],
      },
      {
        role: "Customer Journey Analyst & Time-to-Market Manager",
        company: "Orange Mali",
        location: "Bamako, Mali",
        period: "Jul – Dec 2021",
        points: ["Analysed customer-journey data and managed time-to-market for telecom products."],
      },
      {
        role: "Country Programmer Analyst",
        company: "1SIMPLE1 (Canadian company)",
        location: "Mali",
        period: "Aug 2019 – Dec 2020",
        points: ["In-country programmer analyst for a Canadian firm, developing and supporting software solutions remotely."],
      },
      {
        role: "IT Manager",
        company: "CRLD — Centre for Research and Fight against Sickle Cell Disease",
        location: "Bamako, Mali",
        period: "Feb – Aug 2019",
        points: ["Managed IT systems and infrastructure for a national medical research centre."],
      },
      {
        role: "IT Assistant",
        company: "Software and Services Group",
        location: "Bamako, Mali",
        period: "Aug 2017 – Mar 2019",
        points: [
          "Implemented and supported the Sage FRP 1000 ERP at the Radisson Blu Hotel; trained users and wrote installation procedures.",
        ],
      },
    ],
    earlierTitle: "Earlier (2012 – 2017)",
    earlier:
      "Web application developer intern at PSI Mali (US NGO) · Head of IT at Les Étoiles d’Or SARL (Benin) · SQL Server database management at RMCR / World Vision · IT lecturer for the PRCDE graduate programme · Information-systems intern at CFAO Technologies.",
    educationTitle: "Education",
    degrees: [
      {
        degree: "Master’s degree, Software Engineering",
        school: "ISPATEC, Mali",
        period: "2023 – 2025",
        note: "Graduated with Highest Honors",
      },
      {
        degree: "Bachelor’s degree, Software Engineering",
        school: "TechnoLAB ISTA, Mali",
        period: "2013",
      },
    ],
    trainingTitle: "Selected training",
    training: [
      "Claude Code for Professional Developers — Code with Mosh, 2026",
      "Build AI-Powered Apps — Code with Mosh, 2026",
      "Generative AI: RAG, AI agents, chatbots & MCP",
      "Foundations of Artificial Intelligence — Project Management Institute, 2025",
      "CompTIA Security+ (SY0-701) course — Udemy, 2026",
      "ITIL 4 Foundations · COBIT IT governance — Alison, 2026",
      "AWS Solutions Architect – Associate training — Udemy, 2024",
      "ISO 19011 Lead Auditor — Alison, 2024 · ISO 27001 risk management — LinkedIn Learning, 2022",
      "Big Data architecture design — CentraleSupélec, 2020",
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Let’s build something useful.",
    text: "Hiring for an AI or software engineering role, or have a project in mind? Write to me in English or French.",
    email: "Email me",
    copy: "Copy address",
    copied: "Copied",
    cv: "Download my CV",
    location: "Accra, Ghana (GMT)",
    languages: "English · Français",
  },

  assistant: {
    launcher: "Ask my AI",
    title: "Moise’s AI assistant",
    subtitle: "Answers from his verified profile · powered by Claude",
    greeting:
      "Hi! I can answer questions about Moise’s experience, skills and projects. What would you like to know?",
    suggestionsLabel: "Suggested questions",
    suggestions: [
      "What is his experience with AI agents?",
      "Which project best shows his architecture skills?",
      "What tech stack does he work with?",
      "How can I contact him?",
    ],
    placeholder: "Ask a question…",
    send: "Send",
    close: "Close assistant",
    reset: "New conversation",
    thinking: "Thinking…",
    error: "Something went wrong. Please try again.",
    rateLimited: "Too many questions in a short time — please try again in a few minutes.",
    noAnswer: "I can’t answer that one. You can email Moise directly at moisepr@gmail.com.",
    disclaimer: "AI answers can contain mistakes — confirm important details with Moise.",
  },

  footer: {
    builtWith: "Designed and built with Next.js, TypeScript and Claude.",
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
};

export default en;
