import type { Dictionary } from "../types";

const fr: Dictionary = {
  meta: {
    title: "Moise Diarra — Ingénieur logiciel · IA agentique & générative",
    description:
      "Ingénieur logiciel avec plus de 6 ans d’expérience dans les systèmes d’entreprise et les applications propulsées par l’IA : agents IA, RAG, intégration de LLM, Clean Architecture, .NET, Python et React.",
    ogAlt: "Moise Diarra, ingénieur logiciel spécialisé en IA agentique et générative",
  },

  nav: {
    home: "Moise Diarra — accueil",
    main: "Navigation principale",
    skip: "Aller au contenu",
    language: "Langue",
    theme: "Basculer entre thème clair et sombre",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    cv: "CV",
    about: "À propos",
    expertise: "Expertise",
    projects: "Projets",
    experience: "Parcours",
    contact: "Contact",
  },

  hero: {
    eyebrow: "Ingénieur logiciel · IA agentique & générative",
    titleLead: "Je conçois des",
    titleAccent: "agents IA",
    titleTail: "et les logiciels fiables qui les entourent.",
    intro:
      "Plus de 6 ans à livrer des applications d’entreprise pour des bureaux de crédit, des banques, des ONG et des entreprises en Afrique. Aujourd’hui, je me concentre sur les produits propulsés par les LLM : des agents qui utilisent des outils, du RAG sur les données de l’entreprise, et l’architecture propre qui les rend fiables en production.",
    location: "Basé à Accra, Ghana · Je travaille en français et en anglais",
    ctaProjects: "Voir mes projets",
    ctaContact: "Me contacter",
    ctaCv: "Télécharger le CV",
    ctaAsk: "Interroger mon assistant IA",
    stats: [
      { value: "6+", label: "années à livrer des logiciels en production" },
      { value: "Master", label: "Génie logiciel, mention Très Bien" },
      { value: "FR · EN", label: "parfaitement bilingue" },
    ],
    trace: {
      label: "agent.run(tâche)",
      caption: "Ma façon de concevoir un agent : des étapes courtes et observables, avec des outils et des vérifications.",
      steps: [
        { kind: "task", text: "Répondre à un client à partir de la doc interne" },
        { kind: "plan", text: "chercher → raisonner → agir → vérifier" },
        { kind: "tool", text: "search_knowledge_base(query)", result: "6 passages" },
        { kind: "tool", text: "query_database(sql)", result: "42 lignes" },
        { kind: "check", text: "chaque affirmation appuyée par une source", result: "ok" },
        { kind: "done", text: "réponse + citations" },
      ],
    },
  },

  about: {
    eyebrow: "À propos",
    title: "Un ingénieur qui livre, du besoin jusqu’à la production.",
    paragraphs: [
      "Je suis Moise Diarra, ingénieur logiciel basé à Accra, au Ghana. Depuis six ans, je conçois et livre des applications métier pour des bureaux de crédit, des banques, des opérateurs télécoms, des hôtels, un centre de recherche médicale et des ONG internationales — au Mali, au Ghana et pour des clients à l’étranger.",
      "Je suis aujourd’hui développeur logiciel senior chez XDS DATA Ghana, où je construis les systèmes d’un bureau de crédit : facturation, workflows d’approbation, une API portail utilisée par les banques et les institutions financières, et la paie. Je les conçois selon la Clean Architecture, en monolithes modulaires organisés en vertical slices, pour que les règles métier restent indépendantes des frameworks et que chaque fonctionnalité reste testable.",
      "Mon axe principal est désormais l’IA générative et agentique : des applications LLM qui récupèrent le bon contexte, appellent des outils pour agir sur de vrais systèmes, et sont déployées avec la même rigueur que n’importe quel service en production. J’enseigne aussi : j’ai formé des professionnels et des étudiants au développement logiciel, aux ERP et aux systèmes d’information.",
    ],
    facts: [
      { label: "Basé à", value: "Accra, Ghana" },
      { label: "Actuellement", value: "Développeur logiciel senior, XDS DATA Ghana" },
      { label: "Formation", value: "Master en génie logiciel — mention Très Bien" },
      { label: "Langues", value: "Français, anglais, bambara" },
    ],
  },

  expertise: {
    eyebrow: "Expertise",
    title: "Ce que j’apporte à une équipe",
    intro:
      "Une fonctionnalité IA ne vaut que par le système qui la porte. Je travaille sur les deux : les modèles et l’ingénierie logicielle qui les entoure.",
    areas: [
      {
        title: "IA agentique",
        text: "Des agents qui planifient, appellent des outils et vérifient leur travail — avec des garde-fous et une validation humaine là où c’est important.",
        points: [
          "Tool use & function calling",
          "Model Context Protocol (MCP)",
          "Workflows multi-étapes avec garde-fous",
          "Ingénierie assistée par l’IA avec Claude Code",
        ],
      },
      {
        title: "IA générative & RAG",
        text: "Des fonctionnalités LLM ancrées dans vos propres données, diffusées en streaming dans de vrais produits et évaluées avant leur mise en production.",
        points: [
          "Retrieval-augmented generation (RAG)",
          "Embeddings & bases vectorielles",
          "Chatbots & assistants",
          "Prompting, tokenisation & évaluation",
        ],
      },
      {
        title: "Architecture logicielle",
        text: "Des systèmes d’entreprise conçus pour durer, documentés par des décisions d’architecture (ADR) et protégés par des tests d’architecture.",
        points: [
          "Clean Architecture",
          "Monolithe modulaire & vertical slices",
          "Domain-Driven Design & CQRS",
          "API REST & microservices",
        ],
      },
      {
        title: "Full-stack & DevOps",
        text: "Une livraison de bout en bout sur quatre écosystèmes, déployée avec des conteneurs et des pipelines CI/CD.",
        points: [
          "C# .NET · Python · Java · Go",
          "React · Next.js · Angular",
          "PostgreSQL · SQL Server · Oracle",
          "Docker · GitHub Actions · Jenkins · Azure · AWS",
        ],
      },
    ],
    stackTitle: "Stack technique",
    groups: {
      ai: "IA & données",
      backend: "Backend",
      frontend: "Frontend",
      data: "Bases de données & messaging",
      devops: "DevOps & cloud",
      platforms: "ERP & plateformes",
    },
  },

  projects: {
    eyebrow: "Projets",
    title: "Réalisations choisies",
    intro:
      "Des systèmes que j’ai conçus et développés, des fonctionnalités IA aux plateformes financières. Plusieurs ont été réalisés pour des employeurs et des clients : leur code n’est donc pas public.",
    featured: "À la une",
    source: "Code source",
    demo: "Démo en ligne",
    status: {
      live: "En ligne",
      completed: "Terminé",
      inProgress: "En cours",
      demo: "Démo",
      course: "Cours",
    },
    items: {
      "ai-portfolio-assistant": {
        title: "Assistant IA du portfolio",
        summary:
          "L’assistant de ce site. Les visiteurs l’interrogent sur mon parcours et obtiennent des réponses fondées uniquement sur mon profil vérifié, en streaming, en français ou en anglais.",
        highlights: [
          "Connaissances construites à partir du contenu du site — une seule source de vérité",
          "Streaming des tokens d’une route Next.js vers un panneau de chat React",
          "Garde-fous : validation des entrées, limitation du débit, aucun fait inventé, refus hors sujet",
        ],
      },
      "digital-wallet": {
        title: "Plateforme de portefeuille électronique",
        summary:
          "API de portefeuille électronique reposant sur un grand livre en partie double, en ajout seul : dépôts, retraits et transferts atomiques et idempotents, avec notifications en temps réel.",
        highlights: [
          "Authentification JWT avec rotation et révocation des refresh tokens, RBAC",
          "Transactional outbox → RabbitMQ → notifications WebSocket",
          "Métriques Prometheus, traces OpenTelemetry, couverture de tests ≥ 90 %",
        ],
      },
      "sentinel-bureau": {
        title: "Sentinel Bureau — cours d’architecture",
        summary:
          "Un cours en 13 modules pour les développeurs .NET qui évoluent vers l’architecture : un même système de bureau de crédit, d’une application en couches naïve jusqu’à un monolithe modulaire aux frontières DDD imposées.",
        highlights: [
          "Un vrai domaine : collecte des données, résolution d’identité, scoring, litiges, facturation",
          "Frontières des modules garanties par des tests d’architecture",
          "Des ADR et des calculs de capacité derrière chaque choix",
        ],
      },
      "diarradev-hr": {
        title: "DiarradevHR — RH & paie",
        summary:
          "Système RH et paie conçu comme un monolithe modulaire, avec authentification unique, un schéma de base de données par module et un stockage sécurisé des documents.",
        highlights: [
          "Tests d’architecture : aucun module ni aucune vertical slice ne dépend d’un autre",
          "Connexion Keycloak (Authorization Code + PKCE) et permissions par politiques",
          "Logs, traces et health checks dans le tableau de bord .NET Aspire",
        ],
      },
      "enquiry-api": {
        title: "API de reporting des consultations d’un bureau de crédit",
        summary:
          "API de reporting sur des millions de consultations : volumes de recherche par abonné et répartition par période, statut et source.",
        highlights: [
          "ADR : SQL Server indexé + Dapper plutôt qu’Elasticsearch, décidé en mesurant les données réelles",
          "Agrégats en lecture seule conçus autour des index existants",
          "Volontairement simple tant que la complexité ne justifie pas plus de structure",
        ],
      },
      taskflow: {
        title: "TaskFlow — gestion de projets d’équipe",
        summary:
          "Gestion de projets en Kanban avec affectations, échéances et notifications en direct, plus une vue manager : qui travaille sur quoi, ce qui est en retard, qui est surchargé.",
        highlights: [
          "Mises à jour du tableau en temps réel via WebSocket (STOMP)",
          "Frontières Spring Modulith et migrations Flyway",
          "Testé avec JUnit, Testcontainers, Vitest et Playwright",
        ],
      },
      vpms: {
        title: "Système de gestion des badges visiteurs",
        summary:
          "Tout le cycle de vie du visiteur : enregistrement en libre-service sur borne, pré-inscription sur rendez-vous, reconnaissance des visiteurs récurrents et back-office d’administration.",
        highlights: [
          "Des clés d’idempotence rendent l’enregistrement sur borne sûr en cas de nouvel essai",
          "Rapports PDF, notifications e-mail et API versionnée",
          "Rôles et permissions fins",
        ],
      },
      "hope-and-love": {
        title: "Hope and Love — site bilingue",
        summary:
          "Site bilingue français / anglais pour une organisation humanitaire, avec détection automatique de la langue et référencement dans les deux langues.",
        highlights: [
          "Langue choisie selon la dernière visite, puis les préférences du navigateur",
          "Métadonnées, sitemap et aperçus de partage par langue",
          "Contenu modifiable depuis de simples fichiers de dictionnaire",
        ],
      },
      "lumora-bank": {
        title: "Lumora Bank — démo bancaire",
        summary:
          "Une démo de banque pour les présentations clients : site public et application de banque en ligne avec graphiques, virements, gestion des cartes et export CSV.",
        highlights: [
          "Simulateurs d’épargne et de prêt interactifs",
          "État bancaire simulé dans le navigateur — fonctionne hors ligne",
          "Adaptable à l’identité d’un nouveau client en quelques minutes",
        ],
      },
    },
  },

  experience: {
    eyebrow: "Parcours",
    title: "Mon parcours professionnel",
    items: [
      {
        role: "Développeur logiciel senior",
        company: "XDS DATA Ghana Ltd.",
        location: "Accra, Ghana",
        period: "Août 2025 – aujourd’hui",
        points: [
          "Conception, développement et maintenance des systèmes d’un bureau de crédit et de services de données : facturation, workflows d’approbation, API portail utilisée par les banques et les institutions financières, paie de l’entreprise.",
          "Architecture des applications selon la Clean Architecture, en monolithes modulaires organisés en vertical slices : logique métier indépendante des frameworks, chaque fonctionnalité testable isolément.",
          "Mise en place et exploitation de pipelines CI/CD avec GitHub Actions, Jenkins et Docker ; accompagnement des déploiements cloud.",
          "Collaboration avec des équipes pluridisciplinaires sur l’architecture, les revues de code et le support en production.",
        ],
        tags: ["C# / .NET", "Clean Architecture", "PostgreSQL", "SQL Server", "Docker", "CI/CD"],
      },
      {
        role: "Ingénieur logiciel & data scientist",
        company: "DIARRADEV (activité indépendante)",
        location: "Bamako, Mali",
        period: "2021 – 2024",
        points: [
          "Livraison d’applications métier complètes pour des clients : gestion scolaire (ASP.NET Core + React), gestion des ressources humaines (Django + React), e-commerce (Spring Boot + Angular) et paie (.NET Core + Angular).",
          "Création de tableaux de bord d’analyse de données et de solutions de reporting avec Python et Streamlit.",
        ],
        tags: [".NET", "Django", "Spring Boot", "React", "Angular", "Streamlit"],
      },
      {
        role: "Responsable informatique & développeur",
        company: "ACREMAC SARL — Africa Credit Management Assurances & Consulting",
        period: "2023 – 2024",
        points: ["Gestion de l’infrastructure informatique de l’entreprise et développement des applications métier internes."],
      },
      {
        role: "Formateur expert en informatique (missions sous contrat)",
        company: "SOFRECO France & CSA · Université ESC-MALI",
        period: "2020 – 2024",
        points: [
          "Animation de programmes de formation professionnelle en informatique, dont des cours universitaires sur les ERP et la digitalisation des systèmes d’information (Odoo).",
        ],
      },
      {
        role: "Analyste parcours client & responsable time-to-market",
        company: "Orange Mali",
        location: "Bamako, Mali",
        period: "Juil. – déc. 2021",
        points: ["Analyse des données de parcours client et pilotage du time-to-market des produits télécoms."],
      },
      {
        role: "Analyste programmeur pays",
        company: "1SIMPLE1 (entreprise canadienne)",
        location: "Mali",
        period: "Août 2019 – déc. 2020",
        points: ["Analyste programmeur basé au Mali pour une société canadienne : développement et support de solutions logicielles à distance."],
      },
      {
        role: "Responsable informatique",
        company: "CRLD — Centre de Recherche et de Lutte contre la Drépanocytose",
        location: "Bamako, Mali",
        period: "Févr. – août 2019",
        points: ["Gestion des systèmes et de l’infrastructure informatiques d’un centre national de recherche médicale."],
      },
      {
        role: "Assistant informatique",
        company: "Software and Services Group",
        location: "Bamako, Mali",
        period: "Août 2017 – mars 2019",
        points: [
          "Mise en œuvre et support de l’ERP Sage FRP 1000 à l’hôtel Radisson Blu ; formation des utilisateurs et rédaction des procédures d’installation.",
        ],
      },
    ],
    earlierTitle: "Auparavant (2012 – 2017)",
    earlier:
      "Développeur d’applications web stagiaire chez PSI Mali (ONG américaine) · Responsable du département informatique chez Les Étoiles d’Or SARL (Bénin) · Administration de bases de données SQL Server chez RMCR / World Vision · Enseignant en informatique pour le programme PRCDE · Stage en systèmes d’information chez CFAO Technologies.",
    educationTitle: "Formation",
    degrees: [
      {
        degree: "Master en génie logiciel",
        school: "ISPATEC, Mali",
        period: "2023 – 2025",
        note: "Mention Très Bien",
      },
      {
        degree: "Licence en génie logiciel",
        school: "TechnoLAB ISTA, Mali",
        period: "2013",
      },
    ],
    trainingTitle: "Formation continue (sélection)",
    training: [
      "Claude Code for Professional Developers — Code with Mosh, 2026",
      "Build AI-Powered Apps — Code with Mosh, 2026",
      "IA générative : RAG, agents IA, chatbots & MCP",
      "Fondements de l’intelligence artificielle — Project Management Institute, 2025",
      "Cours CompTIA Security+ (SY0-701) — Udemy, 2026",
      "ITIL 4 Foundations · gouvernance des SI COBIT — Alison, 2026",
      "Formation AWS Solutions Architect – Associate — Udemy, 2024",
      "ISO 19011 auditeur principal — Alison, 2024 · Gestion des risques ISO 27001 — LinkedIn Learning, 2022",
      "Conception d’architectures Big Data — CentraleSupélec, 2020",
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Construisons quelque chose d’utile.",
    text: "Vous recrutez pour un poste en IA ou en ingénierie logicielle, ou vous avez un projet ? Écrivez-moi, en français ou en anglais.",
    email: "M’écrire",
    copy: "Copier l’adresse",
    copied: "Copiée",
    cv: "Télécharger mon CV",
    location: "Accra, Ghana (GMT)",
    languages: "Français · English",
  },

  assistant: {
    launcher: "Demander à mon IA",
    title: "L’assistant IA de Moise",
    subtitle: "Répond à partir de son profil vérifié · propulsé par Claude",
    greeting:
      "Bonjour ! Je peux répondre à vos questions sur le parcours, les compétences et les projets de Moise. Que souhaitez-vous savoir ?",
    suggestionsLabel: "Questions suggérées",
    suggestions: [
      "Quelle est son expérience avec les agents IA ?",
      "Quel projet montre le mieux ses compétences en architecture ?",
      "Avec quelles technologies travaille-t-il ?",
      "Comment le contacter ?",
    ],
    placeholder: "Posez une question…",
    send: "Envoyer",
    close: "Fermer l’assistant",
    reset: "Nouvelle conversation",
    thinking: "Réflexion…",
    error: "Une erreur est survenue. Veuillez réessayer.",
    rateLimited: "Trop de questions en peu de temps — réessayez dans quelques minutes.",
    noAnswer: "Je ne peux pas répondre à cette question. Vous pouvez écrire directement à Moise : moisepr@gmail.com.",
    disclaimer: "Les réponses de l’IA peuvent contenir des erreurs — confirmez les points importants avec Moise.",
  },

  footer: {
    builtWith: "Conçu et développé avec Next.js, TypeScript et Claude.",
    rights: "Tous droits réservés.",
    backToTop: "Retour en haut",
  },
};

export default fr;
