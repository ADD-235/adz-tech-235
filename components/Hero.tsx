"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-28 md:pt-36">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Logo size={44} />
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Donnons vie à vos idées grâce au <span className="text-gold">numérique.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/75 sm:text-lg">
            Nous concevons des solutions digitales modernes pour accompagner les particuliers, entrepreneurs et entreprises dans leur transformation numérique.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-navy">
              Demander un devis <ArrowRight size={18} />
            </Link>
            <Link href="/#services" className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 font-semibold">
              Découvrir nos services
            </Link>
          </div>
        </motion.div>
        <div className="rounded-3xl border border-white/10 bg-ink/80 p-5" aria-hidden="true">
          <div className="grid grid-cols-3 gap-3">
            {["Web", "Design", "IA"].map((t) => (
              <div key={t} className="rounded-xl border border-gold/30 bg-navy/60 py-6 text-center text-sm font-semibold text-gold">{t}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
