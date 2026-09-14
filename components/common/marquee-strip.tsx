type MarqueeStripProps = {
  items: readonly string[];
};

export function MarqueeStrip({ items }: MarqueeStripProps) {
  const loop = [...items, ...items];

  return (
    <div className="px-6">
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-border bg-secondary py-4">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-4 motion-safe:hidden">
          {items.map((item) => (
            <li
              key={item}
              className="font-display text-sm font-medium tracking-wide text-muted-foreground uppercase"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="hidden w-max gap-8 motion-safe:flex motion-safe:animate-marquee">
          {loop.map((item, index) => (
            <p
              key={`${item}-${index}`}
              className="flex items-center gap-8 font-display text-sm font-medium tracking-wide text-muted-foreground uppercase"
              aria-hidden={index >= items.length}
            >
              {item}
              <span className="text-primary" aria-hidden="true">
                ✦
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
