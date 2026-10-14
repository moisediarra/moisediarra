/** "MD" mark used in the header, footer and icons. */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`grid place-items-center rounded-lg bg-fg font-mono text-[0.7rem] font-semibold tracking-tight text-bg ${className}`}
    >
      MD
    </span>
  );
}
