const brands = [
  { name: "Nexus Labs", mark: "N" },
  { name: "Aurora Ops", mark: "A" },
  { name: "Signal AI", mark: "S" },
  { name: "Folio Collective", mark: "F" },
];

export function BrandsStrip() {
  return (
    <section
      className="border-b border-white/5 py-12 lg:py-16"
      aria-label="Trusted brands"
    >
      <div className="container-premium section-padding flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-xs text-sm text-muted-foreground">
          Trusted by brands I&apos;ve helped shape
        </p>
        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-10">
          {brands.map((brand) => (
            <li key={brand.name} className="flex items-center gap-3 text-zinc-400">
              <span className="flex size-9 items-center justify-center rounded-full border border-white/10 font-display text-sm text-white">
                {brand.mark}
              </span>
              <span className="text-sm font-medium tracking-wide">{brand.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
