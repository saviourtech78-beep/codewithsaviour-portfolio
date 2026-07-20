import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "exp-01",
    company: "Independent / CodeWithSaviour",
    role: "Principal Software Engineer",
    type: "Freelance",
    location: "Remote",
    startDate: "2023",
    endDate: "Present",
    description:
      "Partnering with startups and product teams to design, build, and ship premium web products — from landing systems to full-stack platforms.",
    achievements: [
      "Delivered 20+ production launches with measurable conversion and performance gains",
      "Established reusable Next.js architectures that cut delivery time by ~40%",
      "Mentored junior engineers on frontend systems and accessibility",
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "Vercel", "Framer Motion"],
  },
  {
    id: "exp-02",
    company: "Northline Labs",
    role: "Senior Frontend Engineer",
    type: "Full-time",
    location: "Remote",
    startDate: "2021",
    endDate: "2023",
    description:
      "Owned the customer-facing product surface for a B2B analytics platform used by distributed ops teams.",
    achievements: [
      "Led migration from pages router to App Router without SEO regression",
      "Improved LCP by 52% through image strategy and streaming UI",
      "Built the design system that unified marketing and product UI",
    ],
    technologies: ["React", "Next.js", "GraphQL", "Tailwind CSS", "Jest"],
  },
  {
    id: "exp-03",
    company: "Pixelforge Studio",
    role: "Full-Stack Developer",
    type: "Contract",
    location: "Hybrid",
    startDate: "2019",
    endDate: "2021",
    description:
      "Shipped client websites, dashboards, and internal tools for agencies and early-stage founders.",
    achievements: [
      "Built e-commerce experiences processing six-figure monthly volume",
      "Automated deployment pipelines that reduced release friction",
      "Introduced TypeScript across greenfield client projects",
    ],
    technologies: ["Node.js", "React", "PostgreSQL", "Docker", "AWS"],
  },
];
