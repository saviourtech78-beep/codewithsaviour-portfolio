"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/content/projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { GitHubIcon } from "@/components/shared/brand-icons";
import { cn } from "@/lib/utils";

const mediaAccents = [
  "from-electric/40 via-violet/25 to-transparent",
  "from-cyan/35 via-electric/20 to-transparent",
  "from-violet/40 via-cyan/15 to-transparent",
];

export function ProjectsSection() {
  const projects = getFeaturedProjects();

  return (
    <section
      id="projects"
      className="relative py-16 lg:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="container-premium section-padding">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Selected work that shipped."
              description="Each engagement is a showcase — problem, architecture, craft, and measurable impact."
            />
            <p className="hidden text-xs text-muted-foreground lg:block lg:pb-1">
              Drag to explore →
            </p>
          </div>
        </Reveal>
      </div>

      <div
        className="mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 sm:gap-3.5 sm:px-8 lg:px-12 xl:px-20"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "group relative w-[min(72vw,280px)] shrink-0 snap-start overflow-hidden",
              "rounded-2xl border border-white/[0.07] bg-[#0c0c0c]",
              "transition-[border-color,transform,box-shadow] duration-300",
              "hover:-translate-y-0.5 hover:border-white/15",
              "hover:shadow-[0_16px_48px_-24px_rgba(59,130,246,0.5)]",
            )}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="relative block aspect-[16/9] overflow-hidden"
              aria-label={`${project.title} case study`}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-105",
                  mediaAccents[index % mediaAccents.length],
                )}
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.16),transparent_55%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/50 to-transparent" />

              <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/45 px-2 py-0.5 font-mono text-[9px] tracking-wide text-cyan backdrop-blur-md">
                {project.id} · {project.year}
              </span>

              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                <h3 className="font-display text-base font-semibold tracking-tight text-white">
                  {project.title}
                </h3>
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="size-3" />
                </span>
              </div>
            </Link>

            <div className="space-y-2.5 px-3 pb-3 pt-2.5">
              <p className="line-clamp-2 text-[11px] leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-white/[0.06] bg-white/[0.03] px-1.5 py-px text-[9px] text-zinc-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 border-t border-white/[0.06] pt-2">
                {project.metrics.slice(0, 2).map((metric, i) => (
                  <React.Fragment key={metric.label}>
                    {i > 0 ? (
                      <span className="h-2.5 w-px bg-white/10" aria-hidden />
                    ) : null}
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-xs font-semibold text-white">
                        {metric.value}
                      </p>
                      <p className="truncate text-[8px] uppercase tracking-[0.12em] text-zinc-500">
                        {metric.label}
                      </p>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex h-7 flex-1 items-center justify-center gap-1 rounded-full bg-white text-[10px] font-medium text-black transition-colors hover:bg-white/90"
                >
                  Case Study
                  <ArrowUpRight className="size-2.5" />
                </Link>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="inline-flex size-7 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-white/25 hover:text-white"
                  >
                    <ExternalLink className="size-3" />
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="inline-flex size-7 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-white/25 hover:text-white"
                  >
                    <GitHubIcon className="size-3" />
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
