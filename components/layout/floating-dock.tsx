"use client";

import Link from "next/link";
import { Briefcase, Home, Mail, Sparkles, User } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/#home", label: "Home", icon: Home },
  { href: "/#about", label: "About", icon: User },
  { href: "/#projects", label: "Projects", icon: Briefcase },
  { href: "/#services", label: "Services", icon: Sparkles },
  { href: "/#contact", label: "Contact", icon: Mail },
];

export function FloatingDock() {
  return (
    <nav
      aria-label="Quick navigation"
      className={cn(
        "fixed bottom-6 left-1/2 z-50 hidden -translate-x-1/2 md:block",
        "rounded-full border border-white/10 bg-black/70 p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl",
      )}
    >
      <ul className="flex items-center gap-1">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-label={item.label}
              className="flex size-11 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <item.icon className="size-4" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
