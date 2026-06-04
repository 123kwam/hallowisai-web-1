export const site = {
  name: "HallowisAI",
  tagline: "Intelligent systems that scale your business",
  description:
    "HallowisAI is an AI agency building intelligent lead generation, custom software, cloud infrastructure, and business automation systems for ambitious companies.",
  email: "kwame.sark7@hallowisai.com",
  links: {
    calendly: "https://calendly.com/kwame-sark7-hallowisai/pre-podcast-call",
    podcast: "https://youtube.com/@tapintowisdom?si=81pXNj_wdFmQ-Wl7",
    linkedin: "https://linkedin.com/in/kwame-afirim-sakyi-11b297201",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Podcast", href: "#podcast" },
    { label: "About", href: "#about" },
  ],
} as const;

export const services = [
  {
    id: "lead-generation",
    title: "Lead Generation",
    description:
      "AI-driven pipelines that find, qualify, and warm your ideal customers — so your sales team only ever talks to people ready to buy.",
    points: [
      "Intent-based prospecting & enrichment",
      "Automated outreach sequences",
      "Predictive lead scoring",
    ],
    gradientFrom: "#3b82f6",
    gradientTo: "#22d3ee",
  },
  {
    id: "software-development",
    title: "Software Development",
    description:
      "Custom web and AI applications engineered for performance, built with modern stacks and shipped fast without cutting corners.",
    points: [
      "Full-stack web & mobile apps",
      "AI features & LLM integrations",
      "API design & systems architecture",
    ],
    gradientFrom: "#06b6d4",
    gradientTo: "#3b82f6",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "Resilient, secure, and cost-efficient cloud infrastructure with automated delivery so you ship with confidence at any scale.",
    points: [
      "CI/CD pipelines & IaC",
      "Cloud migration & optimization",
      "Monitoring, security & uptime",
    ],
    gradientFrom: "#0ea5e9",
    gradientTo: "#22d3ee",
  },
  {
    id: "business-automation",
    title: "Business Systems & Automation",
    description:
      "We connect your tools and automate the busywork — turning manual operations into self-running systems that compound over time.",
    points: [
      "Workflow & process automation",
      "Internal tools & dashboards",
      "CRM, data & integration ops",
    ],
    gradientFrom: "#2563eb",
    gradientTo: "#38bdf8",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We start with a discovery call to understand your goals, bottlenecks, and the outcomes that actually move your business.",
  },
  {
    step: "02",
    title: "Architect",
    description:
      "We map a clear, pragmatic solution — the right systems, the right stack, and a roadmap scoped to deliver value fast.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Our team builds in tight iterations with continuous feedback, so you see working software early and often.",
  },
  {
    step: "04",
    title: "Scale",
    description:
      "We deploy, monitor, and optimize — then expand what works, compounding results as your business grows.",
  },
] as const;
