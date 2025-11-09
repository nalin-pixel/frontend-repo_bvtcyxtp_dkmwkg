import { motion } from 'framer-motion';
import { Code, Globe, Sparkles } from 'lucide-react';

const items = [
  {
    title: 'Immersive Product Showcase',
    desc: 'A WebGL-powered product explorer with smooth camera paths and physics-based interactions.',
    icon: Sparkles,
    link: '#',
    tags: ['Three.js', 'Spline', 'Framer Motion'],
  },
  {
    title: 'Creative Dev Blog',
    desc: 'A performant blog with MDX, code highlighting, and animated article previews.',
    icon: Code,
    link: '#',
    tags: ['Next.js', 'MDX', 'SEO'],
  },
  {
    title: 'Real-time Dashboard',
    desc: 'A live data dashboard with websockets, charts, and micro-interactions.',
    icon: Globe,
    link: '#',
    tags: ['FastAPI', 'WebSockets', 'Charts'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 -z-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_10%,rgba(99,102,241,0.25)_0%,transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
          <p className="mt-3 text-white/70">A few highlights that blend aesthetics, interactivity, and solid engineering.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.link}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-tr from-indigo-500/10 via-fuchsia-500/10 to-cyan-400/10" />
              <div className="flex items-start justify-between">
                <div className="p-2 rounded-lg bg-white/10 border border-white/20 text-white">
                  <item.icon size={18} />
                </div>
                <span className="text-xs text-white/60">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
