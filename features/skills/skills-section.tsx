"use client";

import { motion } from "framer-motion";
import { skills } from "@/content/skills";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

function ProgressRing({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative size-28">
        <svg className="size-full -rotate-90" viewBox="0 0 100 100" aria-hidden>
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="8"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="url(#skillGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display text-lg font-semibold text-white">
          {value}%
        </span>
      </div>
      <p className="mt-3 text-sm text-zinc-300">{label}</p>
    </div>
  );
}

export function SkillsSection() {
  const topSkills = [...skills].sort((a, b) => b.level - a.level).slice(0, 6);

  return (
    <section id="skills" className="relative py-24 lg:py-32" aria-labelledby="skills-heading">
      <div className="container-premium section-padding">
        <Reveal>
          <SectionHeading
            eyebrow="Skills Visualization"
            title="Depth where it counts."
            description="A snapshot of fluency across the stack — measured by shipped work, not buzzwords."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {topSkills.map((skill) => (
              <ProgressRing key={skill.id} value={skill.level} label={skill.name} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
