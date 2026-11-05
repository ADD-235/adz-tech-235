import Link from "next/link";
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <p className="font-display text-6xl font-bold text-gold">404</p>
      <p className="text-white/80">Cette page n&apos;existe pas.</p>
      <Link href="/" className="rounded-full bg-gold px-6 py-3 font-semibold text-navy">Retour à l&apos;accueil</Link>
    </main>
  );
}
