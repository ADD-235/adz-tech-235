import { values } from "@/lib/data";

export default function About() {
  return (
    <section id="a-propos" className="bg-ink/40 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold">À propos</h2>
        <p className="mt-4 max-w-3xl text-white/75">
          ADZ-tech Digital Solutions est une agence spécialisée dans le développement web, le design graphique, les solutions numériques et la formation informatique. Nous accompagnons les particuliers, entrepreneurs et petites et moyennes entreprises dans leur transformation numérique grâce à des solutions modernes, accessibles et adaptées à leurs besoins.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-navy p-5">
            <h3 className="font-semibold text-gold">Notre mission</h3>
            <p className="mt-2 text-sm text-white/75">Accompagner chacun dans ses projets digitaux avec des solutions modernes, accessibles et adaptées.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-navy p-5">
            <h3 className="font-semibold text-gold">Notre vision</h3>
            <p className="mt-2 text-sm text-white/75">Rendre les solutions numériques accessibles aux particuliers et aux entreprises, en commençant par le Tchad et en développant progressivement notre présence à l&apos;international.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-navy p-5">
            <h3 className="font-semibold text-gold">Notre engagement</h3>
            <p className="mt-2 text-sm text-white/75">Comprendre vos besoins, proposer des solutions adaptées et vous accompagner vers des résultats concrets.</p>
          </div>
        </div>
        <h3 className="mt-10 font-display text-xl font-bold">Nos valeurs</h3>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-gold/20 p-4">
              <p className="font-semibold text-gold">{v.title}</p>
              <p className="mt-1 text-sm text-white/70">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
