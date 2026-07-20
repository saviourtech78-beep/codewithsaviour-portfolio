import type { BlogPost, CoreValue, FunFact, TimelineItem } from "@/types";

export const aboutContent = {
  eyebrow: "About Me",
  headline: "Engineering with taste. Shipping with intent.",
  story: [
    "I'm CodeWithSaviour — a software engineer who treats interfaces like products and codebases like craft.",
    "I specialize in Next.js systems where performance, accessibility, and brand expression coexist. From first sketch to production deploy, I obsess over the details users feel and the architecture teams inherit.",
    "My mission is simple: build digital experiences that matter — experiences that convert, scale, and stay beautiful under pressure.",
  ],
  mission:
    "Help ambitious teams ship software that feels inevitable — fast, elegant, and engineered for the long game.",
  vision:
    "A web where technical excellence and emotional design are not tradeoffs, but the default.",
};

export const timeline: TimelineItem[] = [
  {
    id: "tl-01",
    year: "2018",
    title: "First production ship",
    description: "Built and launched my first client product — and got hooked on the craft.",
  },
  {
    id: "tl-02",
    year: "2021",
    title: "Senior frontend focus",
    description: "Led customer-facing surfaces and design systems for a B2B analytics platform.",
  },
  {
    id: "tl-03",
    year: "2023",
    title: "Independent practice",
    description: "Started CodeWithSaviour to partner directly with founders and product teams.",
  },
  {
    id: "tl-04",
    year: "2025",
    title: "Systems at scale",
    description: "Shipping AI-native products, commerce engines, and Awwwards-caliber portfolios.",
  },
];

export const coreValues: CoreValue[] = [
  {
    id: "cv-01",
    title: "Clarity",
    description: "Interfaces should feel obvious. Architecture should feel inevitable.",
  },
  {
    id: "cv-02",
    title: "Craft",
    description: "Motion, typography, and performance are not polish — they are product.",
  },
  {
    id: "cv-03",
    title: "Ownership",
    description: "I ship outcomes, not tickets. From idea to production, end to end.",
  },
  {
    id: "cv-04",
    title: "Leverage",
    description: "Systems beat heroics. Reusable foundations compound forever.",
  },
];

export const funFacts: FunFact[] = [
  { id: "ff-01", label: "Projects shipped", value: "50+" },
  { id: "ff-02", label: "Avg Lighthouse", value: "95+" },
  { id: "ff-03", label: "Cups of coffee", value: "∞" },
  { id: "ff-04", label: "Preferred deploy", value: "Vercel" },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "nextjs-app-router-patterns",
    title: "App Router Patterns That Actually Scale",
    description:
      "Composition strategies for Server Components, Server Actions, and maintainable folder architecture.",
    date: "2025-11-12",
    readingTime: "8 min",
    tags: ["Next.js", "Architecture"],
    category: "Engineering",
    featured: true,
    published: true,
  },
  {
    slug: "motion-that-earns-its-place",
    title: "Motion That Earns Its Place",
    description:
      "How to design interactions that feel premium without sacrificing performance or accessibility.",
    date: "2025-09-03",
    readingTime: "6 min",
    tags: ["Motion", "UX"],
    category: "Design",
    featured: true,
    published: true,
  },
  {
    slug: "typescript-boundaries",
    title: "TypeScript Boundaries Across the Stack",
    description:
      "Sharing Zod schemas between client, server, and APIs to eliminate an entire class of bugs.",
    date: "2025-06-18",
    readingTime: "7 min",
    tags: ["TypeScript", "Zod"],
    category: "Engineering",
    featured: false,
    published: true,
  },
];
