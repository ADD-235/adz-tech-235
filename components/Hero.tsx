"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, Palette, Bot } from "lucide-react";
import Logo from "./Logo";

const words = ["développement web", "design graphique", "intelligence artificielle", "formation informatique"];

const chips = [
  { Icon: Code2, label: "Web", pos: "left-2 top-2", d: 4 },
  { Icon: Palette, label: "Design", pos: "right-0 top-20", d: 5 },
  { Icon: Bot, label: "IA", pos: "bottom-2 left-10", d: 6 },
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-28 md:pt-36">
      <motion.div
        className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Logo size={44} />
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-gold">Spécialistes en</p>
          <div className="relative h-7 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={i}
                initial={{ y: 22, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -22, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute left-0 text-lg font-semibold text-white/90"
              >
                {words[i]}
              </motion.span>
            </AnimatePresence>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Donnons vie à vos idées grâce au <span className="text-gold">numérique.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/75 sm:text-lg">
            Nous concevons des solutions digitales modernes pour accompagner les particuliers, entrepreneurs et entreprises dans leur transformation numérique.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/#contact" className="glow-gold inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-navy transition hover:brightness-110 active:scale-95">
              Demander un devis <ArrowRight size={18} />
            </Link>
            <Link href="/#services" className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-semibold transition hover:border-gold hover:text-gold active:scale-95">
              Découvrir nos services
            </Link>
          </div>
        </motion.div>

        <div className="relative mx-auto h-72 w-full max-w-sm" aria-hidden="true">
          <motion.div
            className="absolute inset-6 rounded-full border border-dashed border-gold/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="glow-gold absolute inset-0 m-auto flex h-48 w-48 items-center justify-center"
            animate={{ scale: [1, 1.07, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
<Image src="/logo/logo.png" alt="ADZ-tech Digital Solutions" width={220} height={220} priority className="rounded-3xl" />
          </motion.div>
          {chips.map(({ Icon, label, pos, d }) => (
            <motion.div
              key={label}
              className={`absolute ${pos} flex items-center gap-2 rounded-2xl border border-gold/30 bg-ink/90 px-4 py-2.5 text-sm font-semibold text-gold shadow-lg`}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: d, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon size={18} /> {label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
