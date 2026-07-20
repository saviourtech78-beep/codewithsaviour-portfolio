import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "outline" | "success" | "glow";
  }
>(({ className, variant = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        variant === "default" && "bg-white/5 text-muted-foreground",
        variant === "outline" && "border border-white/10 text-muted-foreground",
        variant === "success" && "border border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
        variant === "glow" &&
          "border border-electric/30 bg-electric/10 text-blue-200 shadow-[0_0_24px_-8px_var(--glow-blue)]",
        className,
      )}
      {...props}
    />
  );
});
Badge.displayName = "Badge";

export { Badge };
