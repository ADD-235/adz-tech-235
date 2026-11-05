import { trainings } from "@/lib/data2";

export default function Trainings() {
  return (
    <section id="formations" className="bg-ink/40 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold">Formations</h2>
        <p className="mt-3 max-w-2xl text-white/70">Durées indicatives à confirmer lors de l&apos;inscription.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {trainings.map((t) => (
            <article key={t.id} className="flex flex-col rounded-3xl border border-white/10 bg-navy p-6">
              <h3 className="font-display text-xl font-bold text-gold">{t.title}</h3>
              <p className="mt-2 text-sm text-white/75"><b>Objectif :</b> {t.goals}</p>
              <p className="mt-3 text-sm font-semibold">Programme</p>
              <ul className="mt-1 list-disc pl-5 text-sm text-white/75">{t.program.map((x) => <li key={x}>{x}</li>)}</ul>
              <p className="mt-3 text-sm text-white/75"><b>Durée :</b> {t.duration}</p>
              <p className="text-sm text-white/75"><b>Niveau requis :</b> {t.level}</p>
              <p className="text-sm text-white/75"><b>Inscription :</b> via le formulaire ci-dessous ou WhatsApp.</p>
              <a href={`/?type=formation&formation=${t.id}#contact`} className="mt-5 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-navy transition hover:brightness-110 active:scale-95">S&apos;inscrire à une formation</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
