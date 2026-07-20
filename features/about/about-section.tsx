import { aboutContent, coreValues, funFacts, timeline } from "@/content/about";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32" aria-labelledby="about-heading">
      <div className="container-premium section-padding">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow={aboutContent.eyebrow}
              title={aboutContent.headline}
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {aboutContent.story.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6 rounded-[2rem] border border-white/8 bg-surface/80 p-8 lg:p-10">
              <div>
                <p className="eyebrow mb-3">Mission</p>
                <p className="text-lg leading-relaxed text-zinc-200">
                  {aboutContent.mission}
                </p>
              </div>
              <div className="h-px bg-white/8" />
              <div>
                <p className="eyebrow mb-3">Vision</p>
                <p className="text-lg leading-relaxed text-zinc-200">
                  {aboutContent.vision}
                </p>
              </div>
              <Button asChild variant="electric" size="lg" className="mt-2">
                <Link href="/#contact">Get in touch</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {funFacts.map((fact, index) => (
            <Reveal key={fact.id} delay={index * 0.05}>
              <div className="rounded-3xl border border-white/8 bg-surface px-6 py-8">
                <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  {fact.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{fact.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-6">Timeline</p>
            <ol className="space-y-8 border-l border-white/10 pl-6">
              {timeline.map((item) => (
                <li key={item.id} className="relative">
                  <span className="absolute -left-[1.91rem] top-1.5 size-3 rounded-full bg-electric shadow-[0_0_16px_var(--glow-blue)]" />
                  <p className="font-mono text-xs text-cyan">{item.year}</p>
                  <h3 className="mt-1 text-lg font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow mb-6">Core Values</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {coreValues.map((value) => (
                <div
                  key={value.id}
                  className="rounded-3xl border border-white/8 bg-surface/60 p-6 transition-colors hover:border-white/15"
                >
                  <h3 className="text-lg font-medium text-white">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
