import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function ThreeShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const [glow, setGlow] = useState({ x: 0, y: 0, o: 0 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [activeTab, setActiveTab] = useState('Overview');

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setGlow({ x: e.clientX - rect.left, y: e.clientY - rect.top, o: 1 });
    setTilt({ ry: (px - 0.5) * 6, rx: (0.5 - py) * 6 });
  };

  const onLeave = () => {
    setGlow((g) => ({ ...g, o: 0 }));
    setTilt({ rx: 0, ry: 0 });
  };

  const tabs = ['Overview', 'Tech', 'Role'];
  const tabCopy = {
    Overview:
      'A responsive 3D credit-card experience with tilt-on-cursor and ambient glow. It demonstrates real-time rendering with a modern fintech vibe.',
    Tech:
      'Built with React, Tailwind, Framer Motion for scroll/tilt, and Spline for the 3D asset. Smooth transforms and GPU-accelerated effects throughout.',
    Role:
      'End-to-end: scene integration, interaction design, performance tuning, and accessibility-minded overlays that never block the canvas.',
  };

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Featured Work</h2>
          <p className="text-white/70 mt-2 max-w-2xl">A focused 3D card scene with pointer tilt, glow, and gentle scroll parallax.</p>
        </div>

        <div className="mb-5 flex flex-wrap items-center gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 ${
                activeTab === t
                  ? 'bg-teal-500/90 text-black border-teal-400'
                  : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
              }`}
              aria-pressed={activeTab === t}
            >
              {t}
            </button>
          ))}
        </div>
        <p className="mb-6 text-white/80 max-w-3xl">{tabCopy[activeTab]}</p>

        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
          style={{ perspective: 1000 }}
        >
          <motion.div
            style={{ y, rotateX: tilt.rx, rotateY: tilt.ry }}
            className="relative h-[520px]"
          >
            <Spline scene="https://prod.spline.design/gL1OurO-6gihUrEW/scene.splinecode" style={{ width: '100%', height: '100%' }} />

            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(240px 240px at ${glow.x}px ${glow.y}px, rgba(56,189,248,0.18), transparent 60%)`,
                opacity: glow.o,
                transition: 'opacity 300ms ease',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
