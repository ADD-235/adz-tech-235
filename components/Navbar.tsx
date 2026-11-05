"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-navy/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4" aria-label="Navigation principale">
        <Link href="/" aria-label="Accueil ADZ-tech"><Logo /></Link>
        <ul className="hidden items-center gap-6 md:flex">
          {site.nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="text-sm text-white/80 transition hover:text-gold">{n.label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/#contact" className="hidden rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy transition hover:brightness-110 md:inline-block">
          Demander un devis
        </Link>
        <button
          className="rounded-lg p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-navy px-4 pb-5 md:hidden">
          <ul className="flex flex-col">
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="block border-b border-white/5 py-3 text-white/90 active:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/#contact" onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-gold py-3 text-center font-semibold text-navy">
            Demander un devis
          </Link>
        </div>
      )}
    </header>
  );
}
