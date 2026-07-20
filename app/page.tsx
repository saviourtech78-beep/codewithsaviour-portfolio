import { HeroSection } from "@/features/hero/hero-section";
import { BrandsStrip } from "@/features/about/brands-strip";
import { AboutSection } from "@/features/about/about-section";
import { TechStackSection } from "@/features/tech-stack/tech-stack-section";
import { ProjectsSection } from "@/features/projects/projects-section";
import { ExperienceSection } from "@/features/experience/experience-section";
import { ServicesSection } from "@/features/services/services-section";
import { SkillsSection } from "@/features/skills/skills-section";
import { GitHubSection } from "@/features/github/github-section";
import { TestimonialsSection } from "@/features/testimonials/testimonials-section";
import { BlogPreviewSection } from "@/features/blog/blog-preview-section";
import { FAQSection } from "@/features/faq/faq-section";
import { ContactSection } from "@/features/contact/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandsStrip />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ExperienceSection />
      <ServicesSection />
      <SkillsSection />
      <GitHubSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
