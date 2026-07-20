import { experience } from "@/content/experience";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 lg:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="container-premium section-padding">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where the craft was forged."
            description="A timeline of roles, freelancing, and outcomes — not just titles."
          />
        </Reveal>

        <div className="mt-14 space-y-6">
          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06}>
              <article className="grid gap-6 rounded-[2rem] border border-white/8 bg-surface/70 p-6 transition-colors hover:border-white/15 sm:p-8 lg:grid-cols-[220px_1fr]">
                <div>
                  <p className="font-mono text-xs text-cyan">
                    {item.startDate} — {item.endDate}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{item.type}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.location}</p>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-base text-zinc-300">{item.company}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {item.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-3 text-sm text-zinc-300"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-electric" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
