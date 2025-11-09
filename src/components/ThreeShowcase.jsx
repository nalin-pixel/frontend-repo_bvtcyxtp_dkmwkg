import { useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ThreeShowcase() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start center', 'end center'] });

  // Scroll parallax for the canvas card
  const yCanvas = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  // Mouse tilt for the canvas card
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ w: 1, h: 1 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setSize({ w: rect.width, h: rect.height });
  };

  const relX = (mouse.x - size.w / 2) / (size.w / 2 || 1);
  const relY = (mouse.y - size.h / 2) / (size.h / 2 || 1);

  return (
    <section ref={sectionRef} className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* 3D Card: uses a different Spline (credit card ripple) than the hero to avoid repetition */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            onMouseMove={handleMouseMove}
            className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40"
            style={{ height: 460 }}
          >
            <motion.div style={{ y: yCanvas, rotateX: relY * 4, rotateY: -relX * 4, transformStyle: 'preserve-3d' }} className="absolute inset-0 will-change-transform">
              <Spline scene="https://prod.spline.design/gL1OurO-6gihUrEW/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            {/* Cursor glow highlight */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: 'radial-gradient(200px 200px at ' + mouse.x + 'px ' + mouse.y + 'px, rgba(99,102,241,0.12), transparent 60%)',
              }}
            />
          </motion.div>

          {/* Text column with scroll-coupled motion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ y: yText, opacity: opacityText }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Tactile fintech canvas</h2>
            <p className="mt-3 text-white/70 max-w-prose">
              The finance-themed object floats over a liquid ripple. Move your cursor to gently tilt the scene and reveal a soft glow. As you scroll, the composition subtly shifts to guide attention.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-white/80">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span> Cursor tilt + glow feedback</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span> Scroll-linked parallax</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span> Non-blocking overlays</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Responsive and performant</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-3 rounded-md bg-white text-black font-semibold shadow-lg hover:shadow-xl transition"
              >
                Get in touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-3 rounded-md bg-transparent ring-1 ring-white/30 text-white hover:bg-white/10 transition"
              >
                View more work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
