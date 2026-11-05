function Frame({ title, tall, children }: { title: string; tall?: boolean; children: React.ReactNode }) {
  return (
    <div className={`${tall ? "h-80" : "h-52"} bg-gradient-to-br from-ink to-navy p-3`} aria-hidden="true">
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-white/15 bg-navy/90 text-[10px] leading-tight">
        <div className="flex items-center gap-1 border-b border-white/10 px-2 py-1.5">
          <i className="h-1.5 w-1.5 rounded-full bg-white/30" />
          <i className="h-1.5 w-1.5 rounded-full bg-white/30" />
          <i className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="ml-2 truncate text-white/50">{title}</span>
          <span className="ml-auto rounded bg-gold/20 px-1.5 py-0.5 text-[8px] font-bold text-gold">DÉMO</span>
        </div>
        <div className="flex flex-1 flex-col gap-2 overflow-hidden p-2">{children}</div>
      </div>
    </div>
  );
}

export default function Mockup({ kind, tall }: { kind: string; tall?: boolean }) {
  if (kind === "site")
    return (
      <Frame title="maison-exemple.com" tall={tall}>
        <div className="flex items-center justify-between">
          <b className="text-gold">Maison Exemple</b>
          <span className="text-white/50">Accueil · Services · Contact</span>
        </div>
        <div className="rounded bg-gold/20 p-3">
          <p className="text-sm font-bold text-white">Votre activité, en ligne</p>
          <p className="mt-1 text-white/70">Présentez vos services simplement.</p>
          <span className="mt-2 inline-block rounded-full bg-gold px-3 py-1 font-bold text-navy">Nous contacter</span>
        </div>
        <div className="grid flex-1 grid-cols-3 gap-1.5">
          {["Conseil", "Création", "Suivi"].map((t) => (
            <div key={t} className="flex items-center justify-center rounded bg-white/10 text-white/80">{t}</div>
          ))}
        </div>
      </Frame>
    );
  if (kind === "shop")
    return (
      <Frame title="boutique-demo.com" tall={tall}>
        <div className="flex items-center justify-between">
          <b className="text-gold">Boutique Démo</b>
          <span className="rounded-full bg-white/10 px-2 py-0.5">Panier (2)</span>
        </div>
        <div className="grid flex-1 grid-cols-3 gap-1.5">
          {[["Article A", "5 000"], ["Article B", "8 500"], ["Article C", "12 000"]].map(([n, p]) => (
            <div key={n} className="flex flex-col gap-1 rounded bg-white/5 p-1.5">
              <span className="flex-1 rounded bg-white/10" />
              <span className="text-white/80">{n}</span>
              <span className="font-bold text-gold">{p} FCFA</span>
              <span className="rounded bg-gold py-0.5 text-center font-bold text-navy">Ajouter</span>
            </div>
          ))}
        </div>
      </Frame>
    );
  if (kind === "app")
    return (
      <Frame title="suivi-commandes (app)" tall={tall}>
        <div className="flex flex-1 gap-2">
          <div className="flex w-1/4 flex-col gap-1.5 text-white/70">
            <span className="rounded bg-gold px-1.5 py-1 font-bold text-navy">Commandes</span>
            <span className="px-1.5 py-1">Clients</span>
            <span className="px-1.5 py-1">Stock</span>
          </div>
          <div className="flex flex-1 flex-col gap-1.5">
            {[["#001", "Livrée", "bg-green-400/30 text-green-200"], ["#002", "En cours", "bg-gold/30 text-gold"], ["#003", "En attente", "bg-white/15 text-white/70"], ["#004", "En cours", "bg-gold/30 text-gold"]].map(([n, s, c]) => (
              <div key={n} className="flex flex-1 items-center justify-between rounded bg-white/10 px-2">
                <span className="text-white/90">Commande {n}</span>
                <span className={`rounded-full px-2 py-0.5 ${c}`}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </Frame>
    );
  if (kind === "dash")
    return (
      <Frame title="tableau-de-bord" tall={tall}>
        <div className="grid grid-cols-3 gap-1.5">
          {[["Ventes", "1 250"], ["Clients", "342"], ["Taux", "68 %"]].map(([a, b]) => (
            <div key={a} className="rounded bg-white/10 p-1.5">
              <p className="text-white/60">{a}</p>
              <p className="text-sm font-bold text-gold">{b}</p>
            </div>
          ))}
        </div>
        <p className="text-white/60">Ventes par mois (données fictives)</p>
        <div className="flex flex-1 items-end gap-1.5">
          {[40, 65, 50, 85, 60, 95, 75].map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} className="flex-1 rounded-t bg-gold/80" />
          ))}
        </div>
      </Frame>
    );
  if (kind === "logo")
    return (
      <Frame title="identité-visuelle" tall={tall}>
        <div className="flex flex-1 flex-col items-center justify-center gap-1">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-lg font-black text-navy">NM</span>
          <b className="text-sm tracking-widest text-white">NOM DE MARQUE</b>
          <span className="text-white/50">Slogan de la marque</span>
        </div>
        <div className="flex justify-center gap-1.5">
          {["bg-gold", "bg-navy border border-white/30", "bg-white", "bg-ink"].map((c, i) => (
            <span key={i} className={`h-4 w-4 rounded-full ${c}`} />
          ))}
        </div>
      </Frame>
    );
  return (
    <Frame title="affiche-evenement" tall={tall}>
      <div className="flex flex-1 justify-center">
        <div className="flex h-full w-32 flex-col justify-between rounded bg-gradient-to-b from-gold to-gold/40 p-2 text-navy">
          <b className="text-[9px] uppercase tracking-widest">Grand événement</b>
          <b className="text-center text-sm leading-tight">VOTRE<br />ÉVÉNEMENT</b>
          <div>
            <p className="font-bold">12 · 10 · 2026</p>
            <p>N&apos;Djamena · Entrée libre</p>
          </div>
        </div>
      </div>
    </Frame>
  );
}
