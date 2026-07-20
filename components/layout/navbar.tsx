"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();
  const lastY = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastY.current;
    setScrolled(latest > 24);
    setHidden(latest > 120 && diff > 0);
    lastY.current = latest;
  });

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "glass border-b border-white/5" : "bg-transparent",
      )}
      animate={{ y: hidden && !open ? -100 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-premium section-padding flex h-16 items-center justify-between lg:h-20">
        <Link
          href="/#home"
          className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl"
          aria-label={`${siteConfig.name} home`}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <MagneticButton>
            <Button asChild variant="default" size="lg" className="gap-3 pr-2">
              <Link href="/#contact">
                Get in touch
                <span className="flex size-8 items-center justify-center rounded-full bg-electric text-white">
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </Button>
          </MagneticButton>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-white/5 lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="section-padding flex flex-col gap-1 py-6" aria-label="Mobile">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 text-lg text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <Button asChild variant="electric" size="lg" className="mt-4">
            <Link href="/#contact" onClick={() => setOpen(false)}>
              Get in touch
            </Link>
          </Button>
        </nav>
      </div>
    </motion.header>
  );
}
