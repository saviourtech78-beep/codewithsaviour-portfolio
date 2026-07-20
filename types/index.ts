export type NavItem = {
  title: string;
  href: string;
  external?: boolean;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "email" | "calendar";
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  coverImage: string;
  gallery: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
  year: string;
  role: string;
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  challenges: string[];
  lessons: string[];
  techStack: string[];
  metrics: ProjectMetric[];
  impact: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Cloud"
  | "AI"
  | "DevOps"
  | "Tools"
  | "Languages";

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  level: number;
  years: number;
  projects: number;
  description: string;
  color: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  type: "Full-time" | "Contract" | "Freelance" | "Open Source";
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
  featured?: boolean;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  category: string;
  featured: boolean;
  coverImage?: string;
  published: boolean;
};

export type TimelineItem = {
  id: string;
  year: string;
  title: string;
  description: string;
};

export type FunFact = {
  id: string;
  label: string;
  value: string;
};

export type CoreValue = {
  id: string;
  title: string;
  description: string;
};
