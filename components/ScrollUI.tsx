"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollUI() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <>
      <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gold" />
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Remonter en haut"
          className="fixed bottom-4 left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-navy shadow-lg active:scale-95"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
