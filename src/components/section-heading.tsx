export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
        <span>{index}</span>
        <span aria-hidden className="h-px w-8 bg-accent/40" />
        <span>{eyebrow}</span>
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted text-pretty">{intro}</p>}
    </div>
  );
}
