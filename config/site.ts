export const siteConfig = {
  name: "CodeWithSaviour",
  title: "CodeWithSaviour | Building Digital Experiences That Matter",
  description:
    "Elite software engineer specializing in Next.js, frontend systems, and full-stack product engineering. Building digital experiences that matter.",
  tagline: "Building Digital Experiences That Matter.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://codewithsaviour.com",
  ogImage: "/assets/images/og.png",
  links: {
    github: "https://github.com/codewithsaviour",
    linkedin: "https://linkedin.com/in/codewithsaviour",
    twitter: "https://x.com/codewithsaviour",
    email: "nukpezahsaviour@gmail.com",
    calendly: "https://calendly.com/codewithsaviour",
  },
  author: {
    name: "Saviour",
    fullName: "CodeWithSaviour",
    role: "Software Engineer · Next.js Specialist",
    location: "Remote · Worldwide",
    availability: "Available for select projects",
    resume: "/assets/resume.pdf",
  },
  nav: [
    { title: "Home", href: "/#home" },
    { title: "About", href: "/#about" },
    { title: "Projects", href: "/#projects" },
    { title: "Experience", href: "/#experience" },
    { title: "Services", href: "/#services" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/#contact" },
  ],
  keywords: [
    "CodeWithSaviour",
    "Next.js Developer",
    "Frontend Engineer",
    "Full Stack Developer",
    "React Developer",
    "TypeScript",
    "Software Engineer Portfolio",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
