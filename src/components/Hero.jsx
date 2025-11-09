import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_60%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-white/10 text-white/80 ring-1 ring-white/20 mb-4">
            Tech • Interactive • Modern
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Hi, I’m <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="mt-4 text-lg text-white/80">
            A creative developer crafting playful, high-performance experiences with 3D, WebGL, and delightful interactions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-md bg-white text-black font-semibold shadow-lg hover:shadow-xl transition">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-md bg-transparent ring-1 ring-white/30 text-white hover:bg-white/10 transition">Contact Me</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
