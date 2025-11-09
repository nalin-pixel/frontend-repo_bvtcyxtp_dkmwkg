import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function EnhancedHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const offsetX = (e.clientX - cx) / rect.width;
    const offsetY = (e.clientY - cy) / rect.height;
    const title = ref.current.querySelector('[data-hero-title]');
    if (title) {
      title.style.transform = `translate3d(${offsetX * 16}px, ${offsetY * 12}px, 0)`;
    }
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    const title = ref.current.querySelector('[data-hero-title]');
    if (title) {
      title.style.transform = 'translate3d(0,0,0)';
    }
  };

  return (
    <section id="home" ref={ref} className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/GAomjSvthYZG1LLN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative z-10 h-full flex items-center"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1
              data-hero-title
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(14,165,233,0.25)]"
            >
              Crafting interactive 3D experiences for the web
            </h1>
            <p className="mt-4 text-white/80 max-w-xl">
              Web experiences with real-time 3D, motion, and accessibility first. Move your cursor and scroll to explore.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="#projects"
                className="inline-flex items-center rounded-md bg-teal-500/90 hover:bg-teal-400 text-black font-medium px-4 py-2 shadow-lg shadow-teal-500/20"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-md bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2 border border-white/10"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black" />
    </section>
  );
}
