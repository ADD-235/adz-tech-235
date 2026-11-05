import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import ScrollUI from "@/components/ScrollUI";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Trainings from "@/components/Trainings";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <ScrollUI />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Reveal><About /></Reveal>
        <Services />
        <Reveal><Portfolio /></Reveal>
        <Reveal><Trainings /></Reveal>
        <Reveal><Pricing /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
