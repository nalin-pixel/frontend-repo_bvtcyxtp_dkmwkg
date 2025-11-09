import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function ThreeShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const cy = (e.clientY - rect.top - rect.height / 2) / rect.height;
    const tiltX = cy * -6;
    const tiltY = cx * 6;
    const card = ref.current.querySelector('[data-tilt]');
    if (card) card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    const glow = ref.current.querySelector('[data-glow]');
    if (glow) glow.style.background = `radial-gradient(600px circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, rgba(255,255,255,0.12), transparent 40%)`;
  };

  const resetTilt = () => {
    const card = ref.current?.querySelector('[data-tilt]');
    if (card) card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section id="projects" ref={ref} onMouseMove={handleMouseMove} onMouseLeave={resetTilt} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Interactive Scene</h2>
            <p className="mt-3 text-white/80">
              A separate 3D composition demonstrates ripple and tilt interactions, distinct from the hero.
            </p>
            <ul className="mt-6 space-y-2 text-white/70 list-disc list-inside">
              <li>Smooth scroll parallax</li>
              <li>Mouse‑driven tilt with soft glow</li>
              <li>Optimized to avoid input glitches</li>
            </ul>
          </div>
          <motion.div style={{ y, opacity }} className="md:w-1/2 relative">
            <div data-tilt className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur will-change-transform transition-transform duration-150 ease-out">
              <div className="absolute inset-0 pointer-events-none" data-glow />
              <div className="h-[360px] md:h-[420px]">
                <Spline scene="https://prod.spline.design/gL1OurO-6gihUrEW/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
