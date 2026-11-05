import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy px-4 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-white/65">{site.slogan}</p>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-sm">
          {site.nav.map((n) => (
            <li key={n.href}><Link href={n.href} className="text-white/75 hover:text-gold">{n.label}</Link></li>
          ))}
        </ul>
        <ul className="space-y-2 text-sm text-white/75">
          <li className="flex gap-2"><MapPin size={16} className="mt-0.5 text-gold" />{site.location}</li>
          {site.email && <li className="flex gap-2"><Mail size={16} className="mt-0.5 text-gold" /><a href={`mailto:${site.email}`} className="break-all hover:text-gold">{site.email}</a></li>}
          {site.phone && <li className="flex gap-2"><Phone size={16} className="mt-0.5 text-gold" /><a href={`tel:${site.phone}`} className="hover:text-gold">{site.phone}</a></li>}
        </ul>
      </div>
      <p className="mt-8 text-center text-xs text-white/45">© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
    </footer>
  );
}
