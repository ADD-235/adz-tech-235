const items = ["Sites web", "Applications", "Tableaux de bord", "Logos", "Affiches", "Intelligence artificielle", "Formations"];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-ink/40 py-4" aria-hidden="true">
      <div className="marquee flex w-max whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-gold/80">
        {row.map((t, i) => (
          <span key={i} className="pr-10">✦ {t}</span>
        ))}
      </div>
    </div>
  );
}
