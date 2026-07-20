"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/content/projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/shared/brand-icons";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const projects = getFeaturedProjects();
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="container-premium section-padding">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Selected work that shipped."
              description="Each engagement is a showcase — problem, architecture, craft, and measurable impact."
            />
            <p className="text-sm text-muted-foreground lg:pb-2">
              Scroll horizontally to explore →
            </p>
          </div>
        </Reveal>
      </div>

      <div
        ref={scrollerRef}
        className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 sm:px-8 lg:px-12 xl:px-20"
        style={{ scrollbarWidth: "thin" }}
      >
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={cn(
              "group relative w-[min(88vw,520px)] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-white/8 bg-surface",
              "transition-transform duration-500 hover:-translate-y-1",
            )}
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-gradient-to-br from-electric/30 via-violet/20 to-cyan/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-mono text-xs text-cyan">
                  {project.id} · {project.year}
                </p>
                <h3 className="mt-2 font-display text-3xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="space-y-5 p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {project.metrics.slice(0, 3).map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl bg-white/5 px-3 py-3 text-center"
                  >
                    <p className="font-display text-lg font-semibold text-white">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild variant="default" size="sm" className="gap-2">
                  <Link href={`/projects/${project.slug}`}>
                    Case Study
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </Button>
                {project.liveUrl ? (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  </Button>
                ) : null}
                {project.githubUrl ? (
                  <Button asChild variant="ghost" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <GitHubIcon className="size-3.5" />
                      GitHub
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>

            <span className="sr-only">Project {index + 1}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
