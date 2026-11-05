"use client";
import { useState } from "react";
import { projects, categories } from "@/lib/data2";

export default function Portfolio() {
  const [cat, setCat] = useState<string>("Tous");
  const list = projects.filter((p) => cat === "Tous" || p.cat === cat);
  return (
    <section id="realisations" className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold">Réalisations</h2>
        <p className="mt-3 max-w-2xl text-white/70">Projets de démonstration illustrant notre savoir-faire. Ce ne sont pas des réalisations clients.</p>
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filtrer les réalisations">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm transition active:scale-95 ${cat === c ? "border-gold bg-gold text-navy font-semibold" : "border-white/20 text-white/80 hover:border-gold"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.id} className="overflow-hidden rounded-3xl border border-white/10 bg-ink/70">
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-gold/25 to-navy text-center text-sm font-semibold text-gold">{p.cat}<br />Aperçu démo</div>
              <div className="p-5">
                <span className="rounded-full bg-gold/15 px-3 py-1 text-xs text-gold">Projet de démonstration</span>
                <h3 className="mt-3 font-display text-lg font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <p className="mt-3 text-xs text-white/55">{p.tech.join(" · ")}</p>
                <a href={`/?service=web&projet=${encodeURIComponent(p.name)}#contact`} className="mt-4 inline-block rounded-full border border-gold px-5 py-2 text-sm font-semibold text-gold transition hover:bg-gold hover:text-navy">Discuter d&apos;un projet similaire</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
