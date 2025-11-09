import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'Front-End Web Developer Nanodegree',
    issuer: 'Udacity',
    year: '2023',
    link: '#',
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    year: '2022',
    link: '#',
  },
  {
    title: 'Three.js Journey (3D on the Web)',
    issuer: 'Bruno Simon',
    year: '2024',
    link: '#',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2024',
    link: '#',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-24">
      {/* glow background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(34,197,94,0.12)_0%,transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Certificates</h2>
          <p className="mt-3 text-white/70">Selected credentials that reflect my focus on modern front‑end, 3D, and cloud skills.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-emerald-400/10 via-indigo-400/10 to-fuchsia-400/10" />
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-white/10 border border-white/10 text-white/90">
                  <Award size={16} />
                  <span className="text-xs">{c.year}</span>
                </div>
                <span className="text-[11px] text-white/60">#{(i + 1).toString().padStart(2, '0')}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-white leading-tight">{c.title}</h3>
              <p className="mt-1 text-sm text-white/70">{c.issuer}</p>
              <div className="mt-4">
                <a
                  href={c.link}
                  className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition"
                >
                  <ExternalLink size={16} /> View Credential
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
