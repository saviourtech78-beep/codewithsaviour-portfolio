"use client";

import * as React from "react";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Mail, FileDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/brand-icons";
import { cn } from "@/lib/utils";

const services = [
  { id: "01", label: "Frontend Systems" },
  { id: "02", label: "Next.js Architecture" },
  { id: "03", label: "Full-Stack Products" },
  { id: "04", label: "Performance & SEO" },
];

const floatingSnippets = [
  { id: 1, code: " cons page = await render()", x: "8%", y: "22%", rotate: -6 },
  { id: 2, code: "edge.cache({ revalidate: 60 })", x: "78%", y: "18%", rotate: 4 },
  { id: 3, code: "motion.div whileInView", x: "72%", y: "68%", rotate: -3 },
];

export function HeroSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const glowBackground = useMotionTemplate`radial-gradient(650px circle at ${springX}px ${springY}px, rgba(59,130,246,0.18), transparent 55%)`;

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden pt-24 lg:pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="container-premium section-padding">
        <div className="noise-overlay relative overflow-hidden rounded-[2rem] border border-white/8 bg-[#0a0a0a] sm:rounded-[2.5rem] lg:rounded-[3rem]">
          <motion.div
            className="pointer-events-none absolute inset-0 z-0"
            style={{ background: glowBackground }}
          />

          {/* Ambient orbs */}
          <div className="pointer-events-none absolute -left-24 top-10 size-[420px] rounded-full bg-electric/20 blur-[120px]" />
          <div className="pointer-events-none absolute -right-16 bottom-0 size-[380px] rounded-full bg-violet/20 blur-[110px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/3 size-[520px] -translate-x-1/2 rounded-full bg-cyan/10 blur-[130px]" />

          {/* Floating code snippets */}
          {floatingSnippets.map((snippet) => (
            <motion.div
              key={snippet.id}
              className="pointer-events-none absolute z-[2] hidden rounded-2xl border border-white/10 bg-black/50 px-4 py-3 font-mono text-[11px] text-cyan/80 backdrop-blur-md lg:block"
              style={{ left: snippet.x, top: snippet.y, rotate: snippet.rotate }}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5 + snippet.id,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {snippet.code}
            </motion.div>
          ))}

          <div className="relative z-10 grid gap-10 px-6 pb-10 pt-10 sm:px-10 sm:pb-12 sm:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-14 lg:pb-14 lg:pt-16 xl:px-16">
            <div className="flex flex-col justify-between">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Badge variant="success" className="mb-8">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                    </span>
                    {siteConfig.author.availability}
                  </Badge>
                </motion.div>

                <motion.p
                  className="mb-4 text-sm tracking-wide text-zinc-400"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                >
                  {siteConfig.name}
                </motion.p>

                <motion.h1
                  id="hero-heading"
                  className="font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem]"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  Building Digital
                  <br />
                  Experiences
                  <br />
                  <span className="text-gradient-blue">That Matter.</span>
                </motion.h1>

                <motion.p
                  className="mt-6 max-w-md text-base leading-relaxed text-zinc-400 sm:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.18 }}
                >
                  Elite Next.js & full-stack engineering for teams who refuse to
                  ship ordinary. Powered by systems thinking, editorial craft,
                  and production discipline.
                </motion.p>
              </div>

              <motion.div
                className="mt-10 flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                <MagneticButton>
                  <Button asChild variant="default" size="lg" className="gap-3 pr-2">
                    <Link href="/#projects">
                      View Projects
                      <span className="flex size-8 items-center justify-center rounded-full bg-electric text-white">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button asChild variant="electric" size="lg">
                    <Link href="/#contact">Hire Me</Link>
                  </Button>
                </MagneticButton>
                <Button asChild variant="outline" size="lg">
                  <a href={siteConfig.author.resume} download>
                    <FileDown className="size-4" />
                    Resume
                  </a>
                </Button>
              </motion.div>

              <motion.div
                className="mt-6 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {[
                  {
                    href: siteConfig.links.github,
                    icon: GitHubIcon,
                    label: "GitHub",
                  },
                  {
                    href: siteConfig.links.linkedin,
                    icon: LinkedInIcon,
                    label: "LinkedIn",
                  },
                  {
                    href: `mailto:${siteConfig.links.email}`,
                    icon: Mail,
                    label: "Email",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Email" ? undefined : "_blank"}
                    rel={item.label === "Email" ? undefined : "noreferrer"}
                    aria-label={item.label}
                    className="flex size-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-white/25 hover:text-white"
                  >
                    <item.icon className="size-4" />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Portrait / visual column */}
            <motion.div
              className="relative flex min-h-[420px] items-end justify-center lg:min-h-[560px]"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              <div className="absolute inset-x-6 bottom-10 top-8 rounded-full bg-gradient-to-br from-electric/50 via-violet/40 to-cyan/30 blur-2xl sm:inset-x-10" />
              <div className="absolute inset-x-[18%] top-[12%] aspect-square rounded-full bg-gradient-to-b from-white/20 via-electric/30 to-transparent blur-xl" />

              <div className="relative z-10 flex h-full w-full max-w-md flex-col justify-end">
                <div
                  className={cn(
                    "relative mx-auto aspect-[3/4] w-full max-w-[360px] overflow-hidden rounded-[2rem]",
                    "bg-gradient-to-b from-zinc-800/80 via-zinc-900 to-black",
                    "border border-white/10 shadow-[0_40px_120px_-40px_rgba(59,130,246,0.55)]",
                  )}
                >
                  {/* Abstract engineer portrait mark */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.12),transparent_55%)]" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                    <div className="mb-6 flex size-28 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm sm:size-32">
                      <span className="font-display text-4xl font-semibold text-white sm:text-5xl">
                        CS
                      </span>
                    </div>
                    <p className="font-display text-2xl font-semibold text-white">
                      {siteConfig.author.name}
                    </p>
                    <p className="mt-2 text-sm text-zinc-400">
                      {siteConfig.author.role}
                    </p>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan">
                      Powered by Next.js
                    </p>
                    <p className="mt-1 text-sm text-zinc-300">
                      Frontend specialist · Full-stack builder
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute right-2 top-8 hidden max-w-[200px] rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-md lg:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-sm font-medium text-white">
                  Great software should feel inevitable.
                </p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  Invisible complexity. Visible craft. Measurable outcomes.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Service strip */}
          <div className="relative z-10 grid grid-cols-2 gap-px border-t border-white/8 bg-white/5 sm:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-[#0a0a0a] px-5 py-6 sm:px-6 sm:py-7"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.08 }}
              >
                <p className="mb-2 font-mono text-xs text-electric">{service.id}</p>
                <p className="text-sm font-medium text-zinc-200 sm:text-base">
                  {service.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
