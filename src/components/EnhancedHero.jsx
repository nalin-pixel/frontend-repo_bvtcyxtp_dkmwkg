import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function EnhancedHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Scroll transforms
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const titleOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  // Mouse parallax state (no glitchy buttons by avoiding global listeners)
  const pos = useRef({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    pos.current = { x, y };
    // We don't force re-render; use CSS transform based on inline style
    if (ref.current) {
      const dx = (x - 0.5) * 20; // max 20px shift
      const dy = (y - 0.5) * 20;
      const title = ref.current.querySelector('[data-hero-title]');
      if (title) title.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    }
  };

  return (
    <section id="home" ref={ref} onMouseMove={handleMouseMove} className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/GAomjSvthYZG1LLN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* Subtle radial gradient highlight, doesn't block interaction */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:pt-36 pb-24">
        <motion.h1
          data-hero-title
          style={{ y: titleY, opacity: titleOpacity }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm will-change-transform"
        >
          Building modern, interactive experiences
        </motion.h1>
        <p className="mt-4 max-w-2xl text-white/80">
          3D‑driven, motion‑first interfaces with performance and accessibility in mind.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium shadow hover:shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-white/30 bg-white/10 text-white px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
