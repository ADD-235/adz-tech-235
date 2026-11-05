import { Mail, MapPin, Phone, Facebook } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import ContactForm from "./ContactForm";

export default function Contact() {
  const wa = whatsappLink("Bonjour ADZ-tech, je souhaite un devis.");
  return (
    <section id="contact" className="px-4 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold">Contact</h2>
          <p className="mt-3 text-white/70">Parlez-nous de votre projet : devis, service ou inscription à une formation.</p>
          <ul className="mt-6 space-y-3 text-white/85">
            <li className="flex gap-3"><MapPin className="text-gold" size={20} />{site.location}</li>
            {site.email && <li className="flex gap-3"><Mail className="text-gold" size={20} /><a className="break-all hover:text-gold" href={`mailto:${site.email}`}>{site.email}</a></li>}
            {site.phone && <li className="flex gap-3"><Phone className="text-gold" size={20} /><a className="hover:text-gold" href={`tel:${site.phone}`}>{site.phone}</a></li>}
            {site.facebook && <li className="flex gap-3"><Facebook className="text-gold" size={20} /><a className="hover:text-gold" href={site.facebook} target="_blank" rel="noopener noreferrer">Notre page Facebook</a></li>}
          </ul>
          {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white active:scale-95">Écrire sur WhatsApp</a>}
        </div>
        <div className="rounded-3xl border border-white/10 bg-ink/70 p-6"><h3 className="font-display text-xl font-bold">Demander un devis</h3><ContactForm /></div>
      </div>
    </section>
  );
}
