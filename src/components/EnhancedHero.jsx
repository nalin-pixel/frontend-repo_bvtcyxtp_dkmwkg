import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function EnhancedHero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full flex items-center">
      <div className="absolute inset-0">
        {/* Updated Spline scene per instructions */}
        <Spline scene="https://prod.spline.design/gL1OurO-6gihUrEW/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* non-blocking overlays for contrast */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.8)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-white/10 text-white/80 ring-1 ring-white/20 mb-4">
              Fintech • 3D • Futuristic
            </p>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Building sleek, interactive experiences for the modern web
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              I craft performance-first UIs and immersive 3D visuals—combining clean design with delightful motion.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-3 rounded-md bg-white text-black font-semibold shadow-lg hover:shadow-xl transition">View Projects</a>
              <a href="#certificates" className="px-5 py-3 rounded-md bg-transparent ring-1 ring-white/30 text-white hover:bg-white/10 transition">Certificates</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
