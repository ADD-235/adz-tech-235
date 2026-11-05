"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Palette, Bot, GraduationCap, Check } from "lucide-react";

const icons = { code: Code2, palette: Palette, bot: Bot, formation: GraduationCap };

type Props = {
  id: string;
  icon: keyof typeof icons;
  title: string;
  desc: string;
  items: readonly string[];
  perks: readonly string[];
};

export default function ServiceCard({ id, icon, title, desc, items, perks }: Props) {
  const Icon = icons[icon];
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col rounded-3xl border border-white/10 bg-ink/70 p-6 transition hover:-translate-y-1 hover:border-gold/60"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold"><Icon size={26} /></span>
      <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
      <ul className="mt-4 space-y-1.5 text-sm text-white/85">
        {items.map((i) => (
          <li key={i} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-gold" />{i}</li>
        ))}
      </ul>
      <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-gold">Avantages</p>
      <p className="mt-1 text-sm text-white/70">{perks.join(" · ")}</p>
      <Link href={`/?service=${id}#contact`} className="mt-6 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-navy transition hover:brightness-110 active:scale-95">
        Demander ce service
      </Link>
    </motion.article>
  );
}
