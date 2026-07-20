"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const [index, setIndex] = React.useState(0);
  const active = testimonials[index];

  const prev = () =>
    setIndex((value) => (value === 0 ? testimonials.length - 1 : value - 1));
  const next = () =>
    setIndex((value) => (value === testimonials.length - 1 ? 0 : value + 1));

  React.useEffect(() => {
    const timer = window.setInterval(next, 7000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-premium section-padding">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by people who ship."
            description="Words from founders, product leaders, and engineering partners."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-12 lg:p-16">
            <Quote className="absolute right-8 top-8 size-16 text-electric/20" aria-hidden />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
              >
                <blockquote className="max-w-4xl font-display text-2xl font-medium leading-snug text-white sm:text-3xl lg:text-4xl">
                  “{active.quote}”
                </blockquote>
                <footer className="mt-10">
                  <p className="text-base font-medium text-white">{active.author}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {active.role}, {active.company}
                  </p>
                </footer>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="size-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight className="size-4" />
              </Button>
              <div className="ml-4 flex gap-2" role="tablist" aria-label="Testimonials">
                {testimonials.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-selected={i === index}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-8 bg-electric" : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
