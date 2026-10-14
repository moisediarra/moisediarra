import type { ProjectId, ProjectStatus } from "@/content/projects";
import type { SkillGroup } from "@/content/skills";

export type SectionId = "about" | "expertise" | "projects" | "experience" | "contact";

type Heading = { eyebrow: string; title: string };

export interface Dictionary {
  meta: { title: string; description: string; ogAlt: string };

  nav: Record<SectionId, string> & {
    home: string;
    main: string;
    skip: string;
    language: string;
    theme: string;
    openMenu: string;
    closeMenu: string;
    cv: string;
  };

  hero: {
    eyebrow: string;
    /** The title is split so the accent words can be styled. */
    titleLead: string;
    titleAccent: string;
    titleTail: string;
    intro: string;
    location: string;
    ctaProjects: string;
    ctaContact: string;
    ctaCv: string;
    ctaAsk: string;
    stats: { value: string; label: string }[];
    trace: {
      label: string;
      caption: string;
      steps: { kind: "task" | "plan" | "tool" | "check" | "done"; text: string; result?: string }[];
    };
  };

  about: Heading & {
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };

  expertise: Heading & {
    intro: string;
    areas: { title: string; text: string; points: string[] }[];
    stackTitle: string;
    groups: Record<SkillGroup, string>;
  };

  projects: Heading & {
    intro: string;
    featured: string;
    source: string;
    demo: string;
    status: Record<ProjectStatus, string>;
    items: Record<ProjectId, { title: string; summary: string; highlights: string[] }>;
  };

  experience: Heading & {
    items: {
      role: string;
      company: string;
      location?: string;
      period: string;
      points: string[];
      tags?: string[];
    }[];
    earlierTitle: string;
    earlier: string;
    educationTitle: string;
    degrees: { degree: string; school: string; period: string; note?: string }[];
    trainingTitle: string;
    training: string[];
  };

  contact: Heading & {
    text: string;
    email: string;
    copy: string;
    copied: string;
    cv: string;
    location: string;
    languages: string;
  };

  assistant: {
    launcher: string;
    title: string;
    subtitle: string;
    greeting: string;
    suggestionsLabel: string;
    suggestions: string[];
    placeholder: string;
    send: string;
    close: string;
    reset: string;
    thinking: string;
    error: string;
    rateLimited: string;
    noAnswer: string;
    disclaimer: string;
  };

  footer: { builtWith: string; rights: string; backToTop: string };
}
