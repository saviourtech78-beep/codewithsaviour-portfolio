import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-cyan">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The route you requested doesn&apos;t exist — or it shipped to another dimension.
      </p>
      <Button asChild variant="electric" size="lg" className="mt-8">
        <Link href="/">Back home</Link>
      </Button>
    </div>
  );
}
