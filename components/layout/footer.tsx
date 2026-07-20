import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#050505]">
      <div className="container-premium section-padding py-20 lg:py-28">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">Let&apos;s build</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Ready to create something{" "}
              <span className="text-gradient-blue">unforgettable?</span>
            </h2>
          </div>
          <Button asChild variant="electric" size="xl" className="w-fit gap-3">
            <Link href="/#contact">
              Start a project
              <ArrowUpRight className="size-5" />
            </Link>
          </Button>
        </div>

        <div className="mt-20 grid gap-10 border-t border-white/5 pt-12 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-semibold text-white">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium text-white">Navigate</p>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium text-white">Connect</p>
            <ul className="space-y-2">
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-white"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-white"
                >
                  {siteConfig.links.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.author.resume}
                  className="text-sm text-muted-foreground transition-colors hover:text-white"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/5 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs tracking-wider uppercase">
            Crafted with Next.js · TypeScript · Intention
          </p>
        </div>
      </div>
    </footer>
  );
}
