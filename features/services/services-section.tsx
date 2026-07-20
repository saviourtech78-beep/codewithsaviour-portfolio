import type { ComponentType } from "react";
import {
  Layout,
  Sparkles,
  Server,
  Workflow,
  Zap,
  Search,
  MessageSquare,
  ShoppingCart,
  Briefcase,
  Building2,
  BarChart3,
  Code2,
  Boxes,
} from "lucide-react";
import { services } from "@/content/services";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  layout: Layout,
  next: Code2,
  api: Boxes,
  server: Server,
  sparkles: Sparkles,
  chart: BarChart3,
  briefcase: Briefcase,
  building: Building2,
  cart: ShoppingCart,
  workflow: Workflow,
  zap: Zap,
  search: Search,
  message: MessageSquare,
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div className="container-premium section-padding">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Capabilities for ambitious teams."
            description="From first pixel to production edge — engagement models that match how serious products actually ship."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Layout;
            return (
              <Reveal key={service.id} delay={(index % 3) * 0.05}>
                <article className="group h-full rounded-[1.75rem] border border-white/8 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric/30 hover:bg-electric/5 sm:p-7">
                  <div className="mb-5 flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan transition-colors group-hover:border-electric/40 group-hover:text-white">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-1.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="text-xs text-zinc-400">
                        · {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
