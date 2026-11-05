import { services } from "@/lib/data";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold">Nos services</h2>
        <p className="mt-3 max-w-2xl text-white/70">Quatre domaines d&apos;expertise pour concrétiser vos projets.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.id} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
