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
    bookCall: "Book a Free Discovery Call",
    exploreServices: "See What We Build",
  },
  hero: {
    eyebrow: "AI Agency · Build · Automate · Scale",
    line1: "We Build AI Systems",
    accent: "That Run",
    line3: "While You Sleep.",
    subcopy:
      "Most teams lose hours every week to work a system should be doing. HallowisAI turns your lead generation, software, and operations into self-running infrastructure — so growth doesn’t depend on you being online.",
    scroll: "Scroll",
  },
  showcase: {
    eyebrow: "The work",
    headingA: "From idea to a system that",
    accent: "runs your business",
    support:
      "This is what a HallowisAI system looks like 90 days in — leads qualified automatically, work running on its own, and hours handed back to your team.",
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
    headingA: "Everything you need to scale",
    accent: "without hiring",
    subcopy:
      "Every engagement is senior-led and built around one question: what will actually move your revenue? Pick one capability or combine them into a full system.",
    items: [
      {
        id: "lead-generation",
        title: "Lead Generation",
        description:
          "AI pipelines that find, qualify, and warm your ideal customers — so your sales team only ever talks to people ready to buy.",
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
          "Custom web and AI applications engineered for performance, built with modern stacks and shipped fast, without the agency runaround.",
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
          "Resilient, secure, and cost-efficient cloud infrastructure with automated delivery — so you ship with confidence at any scale, and sleep through the 3am alerts.",
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
          "We connect your tools and kill the busywork — turning manual operations into systems that compound while you focus on growth.",
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
    support:
      "Most clients see their first working system inside the first few weeks — not months.",
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
    connect: "Connect on LinkedIn",
    quote:
      "The best businesses don’t just adopt AI — they build systems around it. We help you do exactly that, end to end.",
    name: "Kwame Sakyi",
    role: "Founder & CEO, HallowisAI",
    partner: {
      eyebrow: "Our partner",
      name: "Hasaan Waseem",
      role: "Founder & CEO, AMZU Consulting",
      tag: "Technology Implementation Partner",
      cta: "View profile",
    },
    location: {
      eyebrow: "Where we work",
      pre: "Based in",
      city: "Amsterdam",
      post: ", building everywhere",
      body: "We’re an AI agency rooted in Amsterdam, serving clients across the Netherlands and beyond. Senior people, real ownership, and a bias for shipping — wherever your business is.",
    },
  },
  ctaSection: {
    headingA: "Let’s build the system that",
    accent: "scales you",
    body: "Book a free discovery call. We’ll map your biggest opportunity and show you exactly what an AI-powered system would look like for your business.",
    reassure:
      "No pitch, no pressure — just a clear map of your biggest opportunity and what it’d take to build it. The call is free and takes 30 minutes.",
  },
  footer: {
    tagline:
      "Intelligent systems that scale your business — lead generation, software, cloud, and automation.",
    location: "Amsterdam · Netherlands",
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
    bookCall: "Plan een gratis kennismakingsgesprek",
    exploreServices: "Bekijk wat we bouwen",
  },
  hero: {
    eyebrow: "AI-bureau · Bouwen · Automatiseren · Schalen",
    line1: "Wij Bouwen AI-systemen",
    accent: "Die Werken",
    line3: "Terwijl Jij Slaapt.",
    subcopy:
      "De meeste teams verliezen elke week uren aan werk dat een systeem zou moeten doen. HallowisAI verandert je leadgeneratie, software en operatie in zelfsturende infrastructuur — zodat groei niet afhangt van of jij online bent.",
    scroll: "Scroll",
  },
  showcase: {
    eyebrow: "Het werk",
    headingA: "Van idee tot een systeem dat",
    accent: "je bedrijf runt",
    support:
      "Zo ziet een HallowisAI-systeem eruit na 90 dagen — leads automatisch gekwalificeerd, werk dat zichzelf draait en uren teruggegeven aan je team.",
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
    headingA: "Alles wat je nodig hebt om te groeien",
    accent: "zonder aan te nemen",
    subcopy:
      "Elk traject wordt geleid door seniors en draait om één vraag: wat laat je omzet écht groeien? Kies één dienst of combineer ze tot een volledig systeem.",
    items: [
      {
        id: "lead-generation",
        title: "Leadgeneratie",
        description:
          "AI-pijplijnen die je ideale klanten vinden, kwalificeren en opwarmen — zodat je salesteam alleen spreekt met mensen die klaar zijn om te kopen.",
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
          "Maatwerk web- en AI-applicaties, gebouwd voor prestaties met moderne stacks en snel opgeleverd, zonder het gedoe van een bureau.",
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
          "Veerkrachtige, veilige en kostenefficiënte cloudinfrastructuur met geautomatiseerde delivery — zodat je met vertrouwen op elke schaal oplevert en doorslaapt tijdens de meldingen om 3 uur ’s nachts.",
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
          "We koppelen je tools en maken korte metten met het routinewerk — zo worden handmatige processen systemen die renderen terwijl jij je op groei richt.",
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
    support:
      "De meeste klanten zien hun eerste werkende systeem binnen enkele weken — geen maanden.",
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
    connect: "Verbind op LinkedIn",
    quote:
      "De beste bedrijven adopteren niet zomaar AI — ze bouwen er systemen omheen. Wij helpen je precies dat te doen, end-to-end.",
    name: "Kwame Sakyi",
    role: "Oprichter & CEO, HallowisAI",
    partner: {
      eyebrow: "Onze partner",
      name: "Hasaan Waseem",
      role: "Oprichter & CEO, AMZU Consulting",
      tag: "Technologie-implementatiepartner",
      cta: "Bekijk profiel",
    },
    location: {
      eyebrow: "Waar we werken",
      pre: "Gevestigd in",
      city: "Amsterdam",
      post: ", actief overal",
      body: "We zijn een AI-bureau met onze basis in Amsterdam en bedienen klanten in heel Nederland en daarbuiten. Senior mensen, echt eigenaarschap en een drang om te leveren — waar je bedrijf ook zit.",
    },
  },
  ctaSection: {
    headingA: "Laten we het systeem bouwen dat",
    accent: "jou laat groeien",
    body: "Plan een gratis kennismakingsgesprek. We brengen je grootste kans in kaart en laten precies zien hoe een AI-gedreven systeem er voor jouw bedrijf uitziet.",
    reassure:
      "Geen pitch, geen druk — gewoon een helder overzicht van je grootste kans en wat er nodig is om het te bouwen. Het gesprek is gratis en duurt 30 minuten.",
  },
  footer: {
    tagline:
      "Intelligente systemen die je bedrijf laten groeien — leadgeneratie, software, cloud en automatisering.",
    location: "Amsterdam · Nederland",
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
    bookCall: "Reserva una llamada gratuita",
    exploreServices: "Mira lo que construimos",
  },
  hero: {
    eyebrow: "Agencia de IA · Construir · Automatizar · Escalar",
    line1: "Creamos Sistemas de IA",
    accent: "Que Trabajan",
    line3: "Mientras Duermes.",
    subcopy:
      "La mayoría de los equipos pierden horas cada semana en trabajo que debería hacer un sistema. HallowisAI convierte tu generación de leads, software y operaciones en infraestructura autónoma — para que el crecimiento no dependa de que estés conectado.",
    scroll: "Scroll",
  },
  showcase: {
    eyebrow: "El trabajo",
    headingA: "De una idea a un sistema que",
    accent: "gestiona tu negocio",
    support:
      "Así se ve un sistema de HallowisAI a los 90 días — leads calificados automáticamente, trabajo que se ejecuta solo y horas devueltas a tu equipo.",
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
    headingA: "Todo lo que necesitas para escalar",
    accent: "sin contratar",
    subcopy:
      "Cada proyecto está liderado por seniors y gira en torno a una pregunta: ¿qué hará crecer realmente tus ingresos? Elige una capacidad o combínalas en un sistema completo.",
    items: [
      {
        id: "lead-generation",
        title: "Generación de Leads",
        description:
          "Pipelines de IA que encuentran, califican y preparan a tus clientes ideales — para que tu equipo de ventas solo hable con personas listas para comprar.",
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
          "Aplicaciones web y de IA a medida, diseñadas para el rendimiento, construidas con stacks modernos y entregadas rápido, sin las vueltas de una agencia.",
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
          "Infraestructura en la nube resiliente, segura y rentable con entrega automatizada — para que despliegues con confianza a cualquier escala y duermas durante las alertas de las 3 de la mañana.",
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
          "Conectamos tus herramientas y eliminamos el trabajo repetitivo — convirtiendo operaciones manuales en sistemas que rinden mientras tú te enfocas en crecer.",
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
    support:
      "La mayoría de los clientes ven su primer sistema funcionando en las primeras semanas — no meses.",
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
    connect: "Conecta en LinkedIn",
    quote:
      "Las mejores empresas no solo adoptan la IA — construyen sistemas a su alrededor. Te ayudamos a hacer exactamente eso, de principio a fin.",
    name: "Kwame Sakyi",
    role: "Fundador y CEO, HallowisAI",
    partner: {
      eyebrow: "Nuestro socio",
      name: "Hasaan Waseem",
      role: "Fundador y CEO, AMZU Consulting",
      tag: "Socio de Implementación Tecnológica",
      cta: "Ver perfil",
    },
    location: {
      eyebrow: "Dónde trabajamos",
      pre: "Con base en",
      city: "Amsterdam",
      post: ", construyendo en todas partes",
      body: "Somos una agencia de IA con raíces en Amsterdam, al servicio de clientes en los Países Bajos y más allá. Gente senior, propiedad real y una clara orientación a entregar — donde sea que esté tu negocio.",
    },
  },
  ctaSection: {
    headingA: "Construyamos el sistema que",
    accent: "te hace crecer",
    body: "Reserva una llamada de descubrimiento gratuita. Trazaremos tu mayor oportunidad y te mostraremos exactamente cómo sería un sistema impulsado por IA para tu negocio.",
    reassure:
      "Sin pitch, sin presión — solo un mapa claro de tu mayor oportunidad y lo que costaría construirla. La llamada es gratis y dura 30 minutos.",
  },
  footer: {
    tagline:
      "Sistemas inteligentes que hacen crecer tu negocio — generación de leads, software, cloud y automatización.",
    location: "Amsterdam · Países Bajos",
    rights: "Todos los derechos reservados.",
  },
};

export const dictionaries = { en, nl, es };

export type Locale = keyof typeof dictionaries;

export const locales: Locale[] = ["en", "nl", "es"];
