"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    setEnabled(media.matches && !reduceMotion);

    const onChange = () => setEnabled(media.matches && !reduceMotion);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [reduceMotion]);

  React.useEffect(() => {
    if (!enabled) return;
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/15 blur-3xl mix-blend-screen md:block"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 120, damping: 30, mass: 0.2 }}
      aria-hidden
    />
  );
}
