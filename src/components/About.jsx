import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 p-[2px]">
              <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center border border-white/10">
                <User size={64} className="text-white/70" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-white/80">
              I’m a front-end developer focused on building lively, accessible interfaces. I enjoy fusing playful 3D with clean UI patterns and robust engineering principles.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-white/80">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span> 3D & WebGL Experiments</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span> React, Next.js, Vite</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span> Animations & Motion Design</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> API & Realtime UX</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
