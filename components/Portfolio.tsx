"use client";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { categories } from "@/lib/data2";
import { projects, type Project } from "@/lib/projects";
import Mockup from "./Mockup";

export default function Portfolio() {
  const [cat, setCat] = useState<string>("Tous");
  const [open, setOpen] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const list = projects.filter((p) => cat === "Tous" || p.cat === cat);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.scrollLeft = 0;
    const phone = window.matchMedia("(max-width: 767px)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!phone.matches || calm.matches) return;
    let pos = 0, dir = 1, last = performance.now(), paused = false, visible = true;
    let raf = 0, timer: number | undefined;
    const pause = () => { paused = true; window.clearTimeout(timer); };
    const resume = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => { pos = el.scrollLeft; paused = false; }, 2500);
    };
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(el);
    const tick = (t: number) => {
      const dt = t - last;
      last = t;
      if (!paused && visible) {
        const max = el.scrollWidth - el.clientWidth;
        pos += dir * 0.04 * dt;
        if (pos >= max) { pos = max; dir = -1; }
        else if (pos <= 0) { pos = 0; dir = 1; }
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume, { passive: true });
    el.addEventListener("touchcancel", resume, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
      io.disconnect();
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
      el.removeEventListener("touchcancel", resume);
    };
  }, [cat]);

  const link = (p: Project) =>
    `/?service=${p.kind === "logo" || p.kind === "poster" ? "design" : "web"}&projet=${encodeURIComponent(p.name)}#contact`;

  return (
    <section id="realisations" className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold">Réalisations</h2>
        <p className="mt-3 max-w-2xl text-white/70">Maquettes de démonstration aux données fictives, illustrant notre savoir-faire. Ce ne sont pas des réalisations clients.</p>
        <div className="no-scrollbar mt-6 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filtrer les réalisations">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm transition active:scale-95 ${cat === c ? "border-gold bg-gold font-semibold text-navy" : "border-white/20 text-white/80 hover:border-gold"}`}>
              {c}
            </button>
          ))}
        </div>
        <div ref={ref} className="no-scrollbar mt-6 flex gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.id} className="w-[78%] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-ink/70 transition hover:-translate-y-1 hover:border-gold/60 md:w-auto">
              <button onClick={() => setOpen(p)} className="block w-full text-left" aria-label={`Voir l'aperçu : ${p.name}`}>
                <Mockup kind={p.kind} />
              </button>
              <div className="p-5">
                <span className="rounded-full bg-gold/15 px-3 py-1 text-xs text-gold">Projet de démonstration</span>
                <h3 className="mt-3 font-display text-lg font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <ul className="mt-3 list-disc space-y-0.5 pl-5 text-sm text-white/80">
                  {p.points.map((x) => <li key={x}>{x}</li>)}
                </ul>
                <p className="mt-3 text-xs text-white/55">{p.tech.join(" · ")}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button onClick={() => setOpen(p)} className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy active:scale-95">Voir l&apos;aperçu</button>
                  <a href={link(p)} className="rounded-full border border-gold px-5 py-2 text-sm font-semibold text-gold transition hover:bg-gold hover:text-navy">Projet similaire</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {open && (
        <div role="dialog" aria-modal="true" aria-label={open.name} onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4">
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg overflow-hidden rounded-3xl border border-gold/40 bg-navy">
            <div className="flex items-center justify-between px-5 pt-4">
              <h3 className="font-display text-lg font-bold">{open.name}</h3>
              <button onClick={() => setOpen(null)} aria-label="Fermer" className="rounded-full p-2 text-white/80 hover:text-gold"><X size={22} /></button>
            </div>
            <Mockup kind={open.kind} tall />
            <div className="p-5">
              <p className="text-sm text-white/75">{open.desc}</p>
              <p className="mt-2 text-xs text-white/50">Maquette de démonstration, données fictives.</p>
              <a href={link(open)} onClick={() => setOpen(null)} className="mt-4 block rounded-full bg-gold py-3 text-center font-semibold text-navy">Discuter d&apos;un projet similaire</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
