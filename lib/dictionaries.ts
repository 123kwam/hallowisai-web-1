// All translatable copy for the site, keyed by locale.
// Structural data that does not translate (links, gradient colors, icon keys)
// stays in lib/site.ts; everything a visitor reads lives here.

const en = {
  navItems: [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#podcast", label: "Podcast" },
    { href: "#about", label: "About" },
  ],
  actions: {
    getStarted: "Get Started",
    bookCall: "Book a discovery call",
    exploreServices: "Explore services",
  },
  hero: {
    eyebrow: "AI Agency · Build · Automate · Scale",
    line1: "We Engineer",
    accent: "Intelligent",
    line3: "Systems.",
    subcopy:
      "HallowisAI turns lead generation, software, cloud, and automation into self-running infrastructure — the kind of system your competitors cannot ignore.",
    scroll: "Scroll",
  },
  showcase: {
    eyebrow: "The work",
    headingA: "From idea to a system that",
    accent: "runs your business",
    dashboard: {
      title: "HallowisAI · Control Room",
      kpis: [
        { label: "Qualified leads", value: "1,284" },
        { label: "Automations live", value: "37" },
        { label: "Uptime", value: "99.98%" },
        { label: "Hours saved / wk", value: "210" },
      ],
      pipeline: "Pipeline performance",
      delta: "+18.2% this month",
    },
  },
  services: {
    eyebrow: "What we do",
    headingA: "Four ways we",
    accent: "move you forward",
    subcopy:
      "Every engagement is senior-led and outcome-driven. Pick one capability or combine them into an end-to-end system.",
    items: [
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
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    headingA: "A clear path from",
    accent: "call to scale",
    steps: [
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
    ],
  },
  podcast: {
    eyebrow: "The Podcast",
    titleA: "Tap Into",
    accent: "Wisdom",
    body: "Conversations on building with AI, scaling businesses, and the systems thinking behind growth. New episodes on YouTube — practical insight you can apply the same day.",
    watch: "Watch on YouTube",
  },
  about: {
    eyebrow: "About",
    headingA: "Built by operators who",
    accent: "ship",
    p1: "HallowisAI is a focused AI agency. We don’t hand you a deck and disappear — we architect, build, and run the systems alongside you. Senior people, real ownership, measurable outcomes.",
    p2: "Led by Kwame Sakyi, the team blends engineering depth with a relentless focus on the metrics that matter to your business.",
    connect: "Connect with our CEO",
    quote:
      "The best businesses don’t just adopt AI — they build systems around it. We help you do exactly that, end to end.",
    name: "Kwame Sakyi",
    role: "Founder & CEO, HallowisAI",
  },
  ctaSection: {
    headingA: "Let’s build the system that",
    accent: "scales you",
    body: "Book a free discovery call. We’ll map your biggest opportunity and show you exactly what an AI-powered system would look like for your business.",
  },
  footer: {
    tagline:
      "Intelligent systems that scale your business — lead generation, software, cloud, and automation.",
    rights: "All rights reserved.",
  },
};

export type Dictionary = typeof en;

const nl: Dictionary = {
  navItems: [
    { href: "#services", label: "Diensten" },
    { href: "#process", label: "Proces" },
    { href: "#podcast", label: "Podcast" },
    { href: "#about", label: "Over ons" },
  ],
  actions: {
    getStarted: "Aan de slag",
    bookCall: "Plan een kennismakingsgesprek",
    exploreServices: "Bekijk diensten",
  },
  hero: {
    eyebrow: "AI-bureau · Bouwen · Automatiseren · Schalen",
    line1: "Wij Bouwen",
    accent: "Intelligente",
    line3: "Systemen.",
    subcopy:
      "HallowisAI maakt van leadgeneratie, software, cloud en automatisering een zelfsturende infrastructuur — het soort systeem dat je concurrenten niet kunnen negeren.",
    scroll: "Scroll",
  },
  showcase: {
    eyebrow: "Het werk",
    headingA: "Van idee tot een systeem dat",
    accent: "je bedrijf runt",
    dashboard: {
      title: "HallowisAI · Controlekamer",
      kpis: [
        { label: "Gekwalificeerde leads", value: "1.284" },
        { label: "Actieve automatiseringen", value: "37" },
        { label: "Uptime", value: "99,98%" },
        { label: "Uren bespaard / wk", value: "210" },
      ],
      pipeline: "Pijplijnprestaties",
      delta: "+18,2% deze maand",
    },
  },
  services: {
    eyebrow: "Wat we doen",
    headingA: "Vier manieren waarop we",
    accent: "je vooruithelpen",
    subcopy:
      "Elk traject wordt geleid door seniors en is gericht op resultaat. Kies één dienst of combineer ze tot een end-to-end systeem.",
    items: [
      {
        id: "lead-generation",
        title: "Leadgeneratie",
        description:
          "AI-gedreven pijplijnen die je ideale klanten vinden, kwalificeren en opwarmen — zodat je salesteam alleen spreekt met mensen die klaar zijn om te kopen.",
        points: [
          "Intentiegerichte prospecting & verrijking",
          "Geautomatiseerde outreach-sequenties",
          "Voorspellende leadscoring",
        ],
      },
      {
        id: "software-development",
        title: "Softwareontwikkeling",
        description:
          "Maatwerk web- en AI-applicaties, gebouwd voor prestaties met moderne stacks en snel opgeleverd zonder concessies.",
        points: [
          "Full-stack web- & mobiele apps",
          "AI-functies & LLM-integraties",
          "API-ontwerp & systeemarchitectuur",
        ],
      },
      {
        id: "cloud-devops",
        title: "Cloud & DevOps",
        description:
          "Veerkrachtige, veilige en kostenefficiënte cloudinfrastructuur met geautomatiseerde delivery, zodat je met vertrouwen op elke schaal oplevert.",
        points: [
          "CI/CD-pijplijnen & IaC",
          "Cloudmigratie & -optimalisatie",
          "Monitoring, security & uptime",
        ],
      },
      {
        id: "business-automation",
        title: "Bedrijfssystemen & Automatisering",
        description:
          "We koppelen je tools en automatiseren het routinewerk — zo worden handmatige processen zelfsturende systemen die in de tijd renderen.",
        points: [
          "Workflow- & procesautomatisering",
          "Interne tools & dashboards",
          "CRM, data & integratie-ops",
        ],
      },
    ],
  },
  process: {
    eyebrow: "Hoe we werken",
    headingA: "Een helder pad van",
    accent: "gesprek tot groei",
    steps: [
      {
        step: "01",
        title: "Ontdekken",
        description:
          "We beginnen met een kennismakingsgesprek om je doelen, knelpunten en de resultaten die je bedrijf echt vooruithelpen te begrijpen.",
      },
      {
        step: "02",
        title: "Ontwerpen",
        description:
          "We schetsen een heldere, pragmatische oplossing — de juiste systemen, de juiste stack en een roadmap die snel waarde levert.",
      },
      {
        step: "03",
        title: "Bouwen",
        description:
          "Ons team bouwt in korte iteraties met continue feedback, zodat je vroeg en vaak werkende software ziet.",
      },
      {
        step: "04",
        title: "Schalen",
        description:
          "We deployen, monitoren en optimaliseren — daarna schalen we wat werkt en bouwen we resultaten op naarmate je groeit.",
      },
    ],
  },
  podcast: {
    eyebrow: "De Podcast",
    titleA: "Tap Into",
    accent: "Wisdom",
    body: "Gesprekken over bouwen met AI, het schalen van bedrijven en het systeemdenken achter groei. Nieuwe afleveringen op YouTube — praktische inzichten die je dezelfde dag toepast.",
    watch: "Bekijk op YouTube",
  },
  about: {
    eyebrow: "Over ons",
    headingA: "Gebouwd door doeners die",
    accent: "leveren",
    p1: "HallowisAI is een gefocust AI-bureau. We overhandigen je geen presentatie om vervolgens te verdwijnen — we ontwerpen, bouwen en draaien de systemen samen met jou. Senior mensen, echt eigenaarschap, meetbare resultaten.",
    p2: "Onder leiding van Kwame Sakyi combineert het team technische diepgang met een niet-aflatende focus op de cijfers die voor jouw bedrijf tellen.",
    connect: "Maak kennis met onze CEO",
    quote:
      "De beste bedrijven adopteren niet zomaar AI — ze bouwen er systemen omheen. Wij helpen je precies dat te doen, end-to-end.",
    name: "Kwame Sakyi",
    role: "Oprichter & CEO, HallowisAI",
  },
  ctaSection: {
    headingA: "Laten we het systeem bouwen dat",
    accent: "jou laat groeien",
    body: "Plan een gratis kennismakingsgesprek. We brengen je grootste kans in kaart en laten precies zien hoe een AI-gedreven systeem er voor jouw bedrijf uitziet.",
  },
  footer: {
    tagline:
      "Intelligente systemen die je bedrijf laten groeien — leadgeneratie, software, cloud en automatisering.",
    rights: "Alle rechten voorbehouden.",
  },
};

const es: Dictionary = {
  navItems: [
    { href: "#services", label: "Servicios" },
    { href: "#process", label: "Proceso" },
    { href: "#podcast", label: "Podcast" },
    { href: "#about", label: "Nosotros" },
  ],
  actions: {
    getStarted: "Empezar",
    bookCall: "Reserva una llamada",
    exploreServices: "Ver servicios",
  },
  hero: {
    eyebrow: "Agencia de IA · Construir · Automatizar · Escalar",
    line1: "Creamos",
    accent: "Sistemas",
    line3: "Inteligentes.",
    subcopy:
      "HallowisAI convierte la generación de leads, el software, la nube y la automatización en infraestructura autónoma — el tipo de sistema que tus competidores no pueden ignorar.",
    scroll: "Scroll",
  },
  showcase: {
    eyebrow: "El trabajo",
    headingA: "De una idea a un sistema que",
    accent: "gestiona tu negocio",
    dashboard: {
      title: "HallowisAI · Centro de Control",
      kpis: [
        { label: "Leads calificados", value: "1.284" },
        { label: "Automatizaciones activas", value: "37" },
        { label: "Disponibilidad", value: "99,98%" },
        { label: "Horas ahorradas / sem", value: "210" },
      ],
      pipeline: "Rendimiento del pipeline",
      delta: "+18,2% este mes",
    },
  },
  services: {
    eyebrow: "Qué hacemos",
    headingA: "Cuatro formas en que te",
    accent: "hacemos avanzar",
    subcopy:
      "Cada proyecto está liderado por seniors y orientado a resultados. Elige una capacidad o combínalas en un sistema integral.",
    items: [
      {
        id: "lead-generation",
        title: "Generación de Leads",
        description:
          "Pipelines impulsados por IA que encuentran, califican y preparan a tus clientes ideales — para que tu equipo de ventas solo hable con personas listas para comprar.",
        points: [
          "Prospección y enriquecimiento por intención",
          "Secuencias de contacto automatizadas",
          "Puntuación predictiva de leads",
        ],
      },
      {
        id: "software-development",
        title: "Desarrollo de Software",
        description:
          "Aplicaciones web y de IA a medida, diseñadas para el rendimiento, construidas con stacks modernos y entregadas rápido sin atajos.",
        points: [
          "Apps web y móviles full-stack",
          "Funciones de IA e integraciones LLM",
          "Diseño de APIs y arquitectura de sistemas",
        ],
      },
      {
        id: "cloud-devops",
        title: "Cloud y DevOps",
        description:
          "Infraestructura en la nube resiliente, segura y rentable con entrega automatizada para que despliegues con confianza a cualquier escala.",
        points: [
          "Pipelines CI/CD e IaC",
          "Migración y optimización de la nube",
          "Monitorización, seguridad y disponibilidad",
        ],
      },
      {
        id: "business-automation",
        title: "Sistemas de Negocio y Automatización",
        description:
          "Conectamos tus herramientas y automatizamos el trabajo repetitivo — convirtiendo operaciones manuales en sistemas autónomos que rinden con el tiempo.",
        points: [
          "Automatización de flujos y procesos",
          "Herramientas internas y dashboards",
          "CRM, datos y operaciones de integración",
        ],
      },
    ],
  },
  process: {
    eyebrow: "Cómo trabajamos",
    headingA: "Un camino claro de la",
    accent: "llamada a la escala",
    steps: [
      {
        step: "01",
        title: "Descubrir",
        description:
          "Empezamos con una llamada de descubrimiento para entender tus objetivos, cuellos de botella y los resultados que realmente impulsan tu negocio.",
      },
      {
        step: "02",
        title: "Diseñar",
        description:
          "Trazamos una solución clara y pragmática — los sistemas adecuados, el stack adecuado y una hoja de ruta pensada para entregar valor rápido.",
      },
      {
        step: "03",
        title: "Construir",
        description:
          "Nuestro equipo construye en iteraciones cortas con feedback continuo, para que veas software funcionando pronto y a menudo.",
      },
      {
        step: "04",
        title: "Escalar",
        description:
          "Desplegamos, monitorizamos y optimizamos — luego ampliamos lo que funciona, multiplicando resultados a medida que creces.",
      },
    ],
  },
  podcast: {
    eyebrow: "El Podcast",
    titleA: "Tap Into",
    accent: "Wisdom",
    body: "Conversaciones sobre construir con IA, escalar negocios y el pensamiento sistémico detrás del crecimiento. Nuevos episodios en YouTube — ideas prácticas que puedes aplicar el mismo día.",
    watch: "Ver en YouTube",
  },
  about: {
    eyebrow: "Nosotros",
    headingA: "Hecho por gente que",
    accent: "entrega",
    p1: "HallowisAI es una agencia de IA enfocada. No te entregamos una presentación y desaparecemos — diseñamos, construimos y operamos los sistemas junto a ti. Gente senior, propiedad real, resultados medibles.",
    p2: "Dirigido por Kwame Sakyi, el equipo combina profundidad técnica con un enfoque implacable en las métricas que importan a tu negocio.",
    connect: "Conecta con nuestro CEO",
    quote:
      "Las mejores empresas no solo adoptan la IA — construyen sistemas a su alrededor. Te ayudamos a hacer exactamente eso, de principio a fin.",
    name: "Kwame Sakyi",
    role: "Fundador y CEO, HallowisAI",
  },
  ctaSection: {
    headingA: "Construyamos el sistema que",
    accent: "te hace crecer",
    body: "Reserva una llamada de descubrimiento gratuita. Trazaremos tu mayor oportunidad y te mostraremos exactamente cómo sería un sistema impulsado por IA para tu negocio.",
  },
  footer: {
    tagline:
      "Sistemas inteligentes que hacen crecer tu negocio — generación de leads, software, cloud y automatización.",
    rights: "Todos los derechos reservados.",
  },
};

export const dictionaries = { en, nl, es };

export type Locale = keyof typeof dictionaries;

export const locales: Locale[] = ["en", "nl", "es"];
