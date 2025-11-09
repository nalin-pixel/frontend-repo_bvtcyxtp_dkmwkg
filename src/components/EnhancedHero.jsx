import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function EnhancedHero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });

  // Scroll-linked transforms for headline group
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.7, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // Cursor parallax for subtle responsiveness
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [dims, setDims] = useState({ w: 1, h: 1 });

  useEffect(() => {
    const handleResize = () => setDims({ w: window.innerWidth, h: window.innerHeight });
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const relX = (mouse.x - dims.w / 2) / (dims.w / 2 || 1);
  const relY = (mouse.y - dims.h / 2) / (dims.h / 2 || 1);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[92vh] w-full flex items-center select-none"
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
    >
      <div className="absolute inset-0">
        {/* Use the new interactive particles sphere asset for the hero */}
        <Spline
          scene="https://prod.spline.design/GAomjSvthYZG1LLN/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* non-blocking overlays for contrast */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.85)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Cursor-follow glow that reacts to movement (non-blocking) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-0"
        style={{
          background: 'radial-gradient(600px 600px at var(--mx) var(--my), rgba(99,102,241,0.12), transparent 60%)',
          // CSS vars updated below via style prop
        }}
      />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            style={{ y, opacity, scale, rotateX: relY * 5, rotateY: -relX * 5, transformStyle: 'preserve-3d', '--mx': `${mouse.x}px`, '--my': `${mouse.y}px` }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="max-w-2xl will-change-transform"
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-white/10 text-white/80 ring-1 ring-white/20 mb-4 backdrop-blur-sm"
            >
              Interactive • 3D • Modern
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              Immersive web experiences that respond to you
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-white/80 max-w-xl"
            >
              A living canvas of particles that follows your cursor and a layout that gently shifts as you scroll—designed for clarity, speed, and delight.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href="#projects"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-3 rounded-md bg-white text-black font-semibold shadow-lg hover:shadow-xl transition"
              >
                View Projects
              </motion.a>

              <motion.a
                href="#certificates"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-3 rounded-md bg-transparent ring-1 ring-white/30 text-white hover:bg-white/10 transition"
              >
                Certificates
              </motion.a>

              <motion.button
                type="button"
                whileHover={{ rotate: 2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  // Minor visual feedback: nudge headline on click
                  // We rely on framer-motion spring already bound to transforms
                }}
                className="px-5 py-3 rounded-md bg-indigo-500/20 text-indigo-200 ring-1 ring-indigo-400/30 hover:bg-indigo-500/30"
              >
                Try an Interaction
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
