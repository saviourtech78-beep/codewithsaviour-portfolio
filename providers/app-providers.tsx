"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LoadingScreen } from "@/features/loading/loading-screen";
import { CursorGlow } from "@/components/layout/cursor-glow";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { FloatingDock } from "@/components/layout/floating-dock";
import { AnalyticsScripts } from "@/components/layout/analytics-scripts";
import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      {children}
      <FloatingDock />
      <AnalyticsScripts />
      <Analytics />
      <SpeedInsights />
    </SmoothScrollProvider>
  );
}
