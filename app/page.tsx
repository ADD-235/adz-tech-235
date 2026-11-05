import { site } from "@/lib/site";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="font-display text-3xl font-bold text-gold sm:text-5xl">{site.name}</h1>
      <p className="max-w-md text-white/80">{site.slogan}</p>
    </main>
  );
}
