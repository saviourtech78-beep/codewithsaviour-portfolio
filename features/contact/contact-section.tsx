"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(20, "Tell me a bit more about the project"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="container-premium section-padding">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something worth remembering."
              description="Share context about your product, timeline, and goals. I'll respond within 1–2 business days."
            />
            <div className="mt-10 space-y-4 text-sm text-muted-foreground">
              <p>
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="text-white transition-colors hover:text-cyan"
                >
                  {siteConfig.links.email}
                </a>
              </p>
              <p>
                Book a call:{" "}
                <a
                  href={siteConfig.links.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transition-colors hover:text-cyan"
                >
                  Calendly
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-[2rem] border border-white/8 bg-surface p-6 sm:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" autoComplete="name" {...register("name")} />
                  {errors.name ? (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
                  ) : null}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                  />
                  {errors.email ? (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
                  ) : null}
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" autoComplete="organization" {...register("company")} />
                </div>
                <div>
                  <Label htmlFor="budget">Budget range</Label>
                  <Input id="budget" placeholder="$5k – $25k+" {...register("budget")} />
                </div>
              </div>
              <div className="mt-5">
                <Label htmlFor="message">Project details</Label>
                <Textarea
                  id="message"
                  placeholder="What are we building? Timeline? Success looks like..."
                  {...register("message")}
                />
                {errors.message ? (
                  <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
                ) : null}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button type="submit" variant="electric" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send message"
                  )}
                </Button>
                {status === "success" ? (
                  <p className="flex items-center gap-2 text-sm text-emerald-300">
                    <CheckCircle2 className="size-4" />
                    Message sent. Talk soon.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="text-sm text-red-400">
                    Something went wrong. Email me directly instead.
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
