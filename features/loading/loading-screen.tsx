"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";

const lines = [
  "> initializing workspace...",
  "> compiling design tokens...",
  "> hydrating interactions...",
  "> optimizing edge bundles...",
  "> ready.",
];

export function LoadingScreen() {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [lineIndex, setLineIndex] = React.useState(0);

  React.useEffect(() => {
    if (reduceMotion) {
      setVisible(false);
      return;
    }

    const progressTimer = window.setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          window.clearInterval(progressTimer);
          return 100;
        }
        return value + Math.random() * 12 + 4;
      });
    }, 120);

    const lineTimer = window.setInterval(() => {
      setLineIndex((value) => Math.min(value + 1, lines.length - 1));
    }, 380);

    return () => {
      window.clearInterval(progressTimer);
      window.clearInterval(lineTimer);
    };
  }, [reduceMotion]);

  React.useEffect(() => {
    if (progress < 100) return;
    const timeout = window.setTimeout(() => setVisible(false), 420);
    return () => window.clearTimeout(timeout);
  }, [progress]);

  React.useEffect(() => {
    document.body.style.overflow = visible && !reduceMotion ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible, reduceMotion]);

  return (
    <AnimatePresence>
      {visible && !reduceMotion ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden={!visible}
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)]" />
          <div className="relative z-10 w-full max-w-md px-6">
            <motion.p
              className="font-display text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {siteConfig.name}
            </motion.p>
            <div className="mt-10 space-y-2 font-mono text-xs text-cyan/80 sm:text-sm">
              {lines.slice(0, lineIndex + 1).map((line) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
            <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-electric via-cyan to-violet"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <p className="mt-3 text-center font-mono text-xs text-zinc-500">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
