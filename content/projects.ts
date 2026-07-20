import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "01",
    slug: "nexus-commerce",
    title: "Nexus Commerce",
    subtitle: "Headless commerce platform for high-growth brands",
    description:
      "A blisteringly fast headless storefront with real-time inventory, edge caching, and conversion-focused UX.",
    longDescription:
      "Nexus Commerce is a production-grade commerce engine built for brands that outgrow templates. It combines Next.js App Router, edge rendering, and a modular design system to deliver sub-second storefront experiences.",
    coverImage: "/assets/images/projects/nexus-cover.svg",
    gallery: [
      "/assets/images/projects/nexus-1.svg",
      "/assets/images/projects/nexus-2.svg",
      "/assets/images/projects/nexus-3.svg",
    ],
    liveUrl: "https://nexus.example.com",
    githubUrl: "https://github.com/codewithsaviour/nexus-commerce",
    featured: true,
    year: "2025",
    role: "Lead Frontend Engineer",
    problem:
      "Legacy Magento storefronts were slow, brittle, and impossible to iterate on without long release cycles.",
    solution:
      "Rebuilt the storefront as a composable Next.js application with ISR, edge middleware, and a typed commerce SDK.",
    architecture:
      "Next.js 15 · App Router · Server Actions · Redis cache · Stripe · Supabase · Cloudflare CDN",
    features: [
      "Edge-rendered product pages",
      "Optimistic cart mutations",
      "AI-assisted product search",
      "A/B testing framework",
      "Admin analytics dashboard",
    ],
    challenges: [
      "Migrating SEO equity without downtime",
      "Real-time inventory consistency across regions",
      "Keeping Core Web Vitals green at peak traffic",
    ],
    lessons: [
      "Partial prerendering dramatically reduces TTFB for catalog pages",
      "Typed SDKs prevent entire classes of checkout bugs",
      "Design systems accelerate both engineering and brand consistency",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "Redis"],
    metrics: [
      { label: "Lighthouse", value: "98" },
      { label: "Conversion ↑", value: "+34%" },
      { label: "TTFB", value: "120ms" },
    ],
    impact: "Helped the brand process 2.4× more checkout volume during peak season with zero downtime.",
    testimonial: {
      quote: "Saviour didn't just ship a storefront — he rebuilt how we think about product velocity.",
      author: "Amelia Hart",
      role: "VP Product, Nexus",
    },
  },
  {
    id: "02",
    slug: "aurora-dashboard",
    title: "Aurora Dashboard",
    subtitle: "Real-time operations console for distributed teams",
    description:
      "A dense-but-elegant analytics dashboard with streaming metrics, role-based access, and cinematic data viz.",
    longDescription:
      "Aurora turns noisy operational data into calm decision surfaces. Built for founders and operators who need clarity under pressure.",
    coverImage: "/assets/images/projects/aurora-cover.svg",
    gallery: [
      "/assets/images/projects/aurora-1.svg",
      "/assets/images/projects/aurora-2.svg",
    ],
    liveUrl: "https://aurora.example.com",
    githubUrl: "https://github.com/codewithsaviour/aurora-dashboard",
    featured: true,
    year: "2025",
    role: "Full-Stack Engineer",
    problem: "Teams were drowning in fragmented tools and delayed reporting.",
    solution:
      "Unified metrics into a single Next.js dashboard with live WebSocket feeds and permission-aware views.",
    architecture: "Next.js · tRPC · PostgreSQL · Prisma · WebSockets · Recharts",
    features: [
      "Live metric streams",
      "Customizable widget grid",
      "Role-based workspaces",
      "Exportable reports",
    ],
    challenges: [
      "Rendering thousands of data points without jank",
      "Securing multi-tenant access patterns",
    ],
    lessons: [
      "Virtualization is non-negotiable for dense tables",
      "Calm UI beats flashy charts when stakes are high",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "tRPC", "Framer Motion"],
    metrics: [
      { label: "Decision time ↓", value: "-41%" },
      { label: "Active teams", value: "120+" },
      { label: "Uptime", value: "99.98%" },
    ],
    impact: "Became the daily operating system for 120+ product and growth teams.",
  },
  {
    id: "03",
    slug: "signal-ai",
    title: "Signal AI",
    subtitle: "AI workspace for product research synthesis",
    description:
      "An AI-native research OS that turns interviews, tickets, and notes into actionable product signals.",
    longDescription:
      "Signal AI helps product teams find patterns humans miss — with transparent citations and human-in-the-loop workflows.",
    coverImage: "/assets/images/projects/signal-cover.svg",
    gallery: ["/assets/images/projects/signal-1.svg"],
    liveUrl: "https://signal.example.com",
    githubUrl: "https://github.com/codewithsaviour/signal-ai",
    featured: true,
    year: "2024",
    role: "Founding Engineer",
    problem: "Research insights were trapped in docs and never reached roadmap decisions.",
    solution:
      "Built ingestion pipelines, embeddings, and a cinematic UI for exploring themes across sources.",
    architecture: "Next.js · OpenAI · Supabase Vector · LangChain · Vercel AI SDK",
    features: [
      "Multi-source ingestion",
      "Semantic theme clustering",
      "Cited answer generation",
      "Shareable insight boards",
    ],
    challenges: [
      "Hallucination control with grounded citations",
      "Latency for long-context retrieval",
    ],
    lessons: [
      "Streaming UI makes AI feel alive",
      "Trust is a UX problem as much as a model problem",
    ],
    techStack: ["Next.js", "OpenAI", "Supabase", "Vercel AI SDK", "Zod"],
    metrics: [
      { label: "Research hours saved", value: "18h/wk" },
      { label: "Insight accuracy", value: "94%" },
    ],
    impact: "Compressed weeks of synthesis into hours while keeping every claim auditable.",
  },
  {
    id: "04",
    slug: "folio-engine",
    title: "Folio Engine",
    subtitle: "Design-system-driven portfolio framework",
    description:
      "A modular portfolio kit for engineers who want Awwwards-level craft without reinventing every interaction.",
    longDescription:
      "Folio Engine packages motion primitives, content schemas, and SEO scaffolding into a production-ready portfolio system.",
    coverImage: "/assets/images/projects/folio-cover.svg",
    gallery: ["/assets/images/projects/folio-1.svg"],
    githubUrl: "https://github.com/codewithsaviour/folio-engine",
    featured: false,
    year: "2024",
    role: "Creator",
    problem: "Most developer portfolios look templated and fail to communicate engineering taste.",
    solution:
      "Open-sourced a composition system with editorial layouts, motion recipes, and typed content.",
    architecture: "Next.js · Framer Motion · MDX · Tailwind · shadcn/ui",
    features: ["Content schemas", "Motion recipes", "SEO presets", "Theme tokens"],
    challenges: ["Balancing customization with opinionated defaults"],
    lessons: ["Great portfolios are systems, not pages"],
    techStack: ["Next.js", "Framer Motion", "MDX", "Tailwind CSS"],
    metrics: [
      { label: "GitHub stars", value: "1.2k" },
      { label: "Forks", value: "180" },
    ],
    impact: "Adopted by hundreds of engineers shipping distinctive personal sites.",
  },
];

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
