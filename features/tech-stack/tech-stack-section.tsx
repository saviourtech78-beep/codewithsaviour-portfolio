"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skills, skillCategories } from "@/content/skills";
import type { SkillCategory } from "@/types";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

export function TechStackSection() {
  const [active, setActive] = React.useState<SkillCategory | "All">("All");
  const [expanded, setExpanded] = React.useState<string | null>("nextjs");

  const filtered =
    active === "All" ? skills : skills.filter((skill) => skill.category === active);

  return (
    <section id="tech" className="relative py-24 lg:py-32" aria-labelledby="tech-heading">
      <div className="container-premium section-padding">
        <Reveal>
          <SectionHeading
            eyebrow="Tech Stack"
            title="Tools I use to ship with precision."
            description="Interactive inventory of languages, frameworks, and platforms — filtered by domain, expanded by curiosity."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="mt-10 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Skill categories"
          >
            {(["All", ...skillCategories] as const).map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active === category}
                onClick={() => setActive(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors",
                  active === category
                    ? "border-electric/50 bg-electric/15 text-white"
                    : "border-white/10 text-zinc-400 hover:border-white/20 hover:text-white",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, index) => {
              const isOpen = expanded === skill.id;
              return (
                <motion.button
                  key={skill.id}
                  layout
                  type="button"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => setExpanded(isOpen ? null : skill.id)}
                  className={cn(
                    "rounded-[1.75rem] border p-6 text-left transition-colors",
                    isOpen
                      ? "border-electric/40 bg-electric/10"
                      : "border-white/8 bg-surface hover:border-white/15",
                  )}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-cyan">
                        {skill.category}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                        {skill.name}
                      </h3>
                    </div>
                    <span className="font-mono text-sm text-electric">{skill.level}%</span>
                  </div>

                  <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-electric to-cyan"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>

                  <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
                    <span>{skill.years} yrs</span>
                    <span>{skill.projects} projects</span>
                  </div>

                  <AnimatePresence>
                    {isOpen ? (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 text-sm leading-relaxed text-zinc-300"
                      >
                        {skill.description}
                      </motion.p>
                    ) : null}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
