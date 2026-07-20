import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProjectBySlug, projects } from "@/content/projects";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/shared/brand-icons";
import { siteConfig } from "@/config/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} · ${siteConfig.name}`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="pb-24 pt-28 lg:pb-32 lg:pt-32">
      <div className="container-premium section-padding">
        <Button asChild variant="ghost" size="sm" className="mb-10 -ml-2">
          <Link href="/#projects">
            <ArrowLeft className="size-4" />
            All projects
          </Link>
        </Button>

        <p className="eyebrow mb-4">
          {project.id} · {project.year} · {project.role}
        </p>
        <h1 className="headline-lg max-w-4xl text-white">{project.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          {project.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <Button asChild variant="electric" size="lg">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live Demo
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          ) : null}
          {project.githubUrl ? (
            <Button asChild variant="outline" size="lg">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <GitHubIcon className="size-4" />
                GitHub
              </a>
            </Button>
          ) : null}
        </div>

        <div className="mt-14 aspect-[21/9] overflow-hidden rounded-[2rem] border border-white/8 bg-gradient-to-br from-electric/30 via-violet/20 to-cyan/10" />

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {[
            { title: "Problem", body: project.problem },
            { title: "Solution", body: project.solution },
            { title: "Architecture", body: project.architecture },
          ].map((block) => (
            <div key={block.title} className="rounded-3xl border border-white/8 bg-surface p-6">
              <h2 className="text-sm uppercase tracking-[0.18em] text-cyan">
                {block.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                {block.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <section>
            <h2 className="font-display text-2xl font-semibold text-white">
              Features
            </h2>
            <ul className="mt-5 space-y-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-zinc-300">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-electric" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-white">
              Challenges
            </h2>
            <ul className="mt-5 space-y-3">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-3 text-sm text-zinc-300">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet" />
                  {challenge}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-white">
            Impact & Metrics
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">{project.impact}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/8 bg-surface px-6 py-8 text-center"
              >
                <p className="font-display text-3xl font-semibold text-white">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-white">
            Lessons Learned
          </h2>
          <ul className="mt-5 space-y-3">
            {project.lessons.map((lesson) => (
              <li key={lesson} className="text-sm leading-relaxed text-zinc-300">
                · {lesson}
              </li>
            ))}
          </ul>
        </section>

        {project.testimonial ? (
          <blockquote className="mt-14 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
            <p className="font-display text-2xl font-medium text-white sm:text-3xl">
              “{project.testimonial.quote}”
            </p>
            <footer className="mt-6 text-sm text-muted-foreground">
              {project.testimonial.author} · {project.testimonial.role}
            </footer>
          </blockquote>
        ) : null}

        <div className="mt-14 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
