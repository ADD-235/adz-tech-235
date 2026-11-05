import { offers } from "@/lib/data2";

export default function Pricing() {
  return (
    <section id="tarifs" className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold">Tarifs</h2>
        <p className="mt-3 max-w-2xl text-white/70">Chaque projet est unique : nous établissons un devis adapté à vos besoins.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {offers.map((o) => (
            <article key={o.name} className="flex flex-col rounded-3xl border border-white/10 bg-ink/70 p-6">
              <h3 className="font-display text-xl font-bold text-gold">{o.name}</h3>
              <p className="mt-1 text-sm text-white/70">{o.for}</p>
              <p className="mt-4 text-2xl font-bold">Sur devis</p>
              <ul className="mt-4 flex-1 list-disc space-y-1 pl-5 text-sm text-white/80">{o.items.map((i) => <li key={i}>{i}</li>)}</ul>
              <a href={`/?offre=${o.name}#contact`} className="mt-6 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-navy transition hover:brightness-110 active:scale-95">Demander un devis</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
