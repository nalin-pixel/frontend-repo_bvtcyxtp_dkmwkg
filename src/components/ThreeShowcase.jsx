import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function ThreeShowcase() {
  return (
    <section className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40"
            style={{ height: 420 }}
          >
            <Spline scene="https://prod.spline.design/gL1OurO-6gihUrEW/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Fintech 3D Hero</h2>
            <p className="mt-3 text-white/70 max-w-prose">
              A glittering credit card spinning above an obsidian ripple sets a modern, corporate tone. Subtle gradients and soft lighting keep the focus on clarity and polish.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-white/80">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span> Non-blocking overlays for interaction</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span> Fully responsive canvas</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span> Performance-friendly defaults</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Elegant gradients and motion</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
