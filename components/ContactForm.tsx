"use client";
import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site";

const types = ["Développement web", "Design graphique", "Intelligence artificielle", "Formation informatique", "Autre"];
const map: Record<string, string> = { web: types[0], design: types[1], ia: types[2], formation: types[3] };

export default function ContactForm() {
  const [f, setF] = useState({ nom: "", email: "", whatsapp: "", type: types[0], budget: "", message: "" });
  const [err, setErr] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "ok" | "fail">("idle");

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const s = p.get("service");
    const t = p.get("type");
    const projet = p.get("projet");
    const offre = p.get("offre");
    setF((o) => ({
      ...o,
      type: s && map[s] ? map[s] : t === "formation" ? types[3] : o.type,
      message: [projet && `Projet similaire à : ${projet}`, offre && `Offre souhaitée : ${offre}`, p.get("formation") && `Formation : ${p.get("formation")}`].filter(Boolean).join("\n"),
    }));
  }, []);

  function validate() {
    const e: Record<string, string> = {};
    if (f.nom.trim().length < 2) e.nom = "Entrez votre nom complet.";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Adresse e-mail invalide.";
    if (!/^\+?[0-9 ]{8,15}$/.test(f.whatsapp)) e.whatsapp = "Numéro WhatsApp invalide.";
    if (f.message.trim().length < 10) e.message = "Décrivez votre projet (10 caractères minimum).";
    setErr(e);
    return Object.keys(e).length === 0;
  }

  function submit() {
    if (!validate()) { setStatus("fail"); return; }
    const text = `Bonjour ADZ-tech,\nNom : ${f.nom}\nE-mail : ${f.email}\nWhatsApp : ${f.whatsapp}\nService : ${f.type}\nBudget : ${f.budget || "non précisé"}\nProjet : ${f.message}`;
    const link = whatsappLink(text);
    if (!link) { setStatus("fail"); return; }
    window.open(link, "_blank", "noopener,noreferrer");
    setStatus("ok");
  }

  const input = "w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-gold";
  return (
    <div className="mt-8 space-y-4">
      {(["nom", "email", "whatsapp"] as const).map((k) => (
        <div key={k}>
          <label htmlFor={k} className="mb-1 block text-sm text-white/80">{k === "nom" ? "Nom complet" : k === "email" ? "Adresse e-mail" : "Numéro WhatsApp"}</label>
          <input id={k} className={input} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} inputMode={k === "whatsapp" ? "tel" : undefined} autoComplete={k === "nom" ? "name" : k === "email" ? "email" : "tel"} aria-invalid={!!err[k]} />
          {err[k] && <p className="mt-1 text-sm text-red-300">{err[k]}</p>}
        </div>
      ))}
      <div>
        <label htmlFor="type" className="mb-1 block text-sm text-white/80">Type de service</label>
        <select id="type" className={input} value={f.type} onChange={(e) => setF({ ...f, type: e.target.value })}>{types.map((t) => <option key={t}>{t}</option>)}</select>
      </div>
      <div>
        <label htmlFor="budget" className="mb-1 block text-sm text-white/80">Budget indicatif (facultatif)</label>
        <input id="budget" className={input} value={f.budget} onChange={(e) => setF({ ...f, budget: e.target.value })} />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-white/80">Description du projet</label>
        <textarea id="message" rows={5} className={input} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} aria-invalid={!!err.message} />
        {err.message && <p className="mt-1 text-sm text-red-300">{err.message}</p>}
      </div>
      <button onClick={submit} className="w-full rounded-full bg-gold py-3.5 font-semibold text-navy transition hover:brightness-110 active:scale-95">Envoyer via WhatsApp</button>
      <p role="status" aria-live="polite" className="text-sm">
        {status === "ok" && <span className="text-green-300">WhatsApp s&apos;est ouvert avec votre demande. Appuyez sur « Envoyer » dans WhatsApp pour la transmettre.</span>}
        {status === "fail" && <span className="text-red-300">Envoi impossible : vérifiez les champs ci-dessus ou contactez-nous directement.</span>}
      </p>
    </div>
  );
}
