import { ExternalLink } from 'lucide-react';

export default function Certificates() {
  const items = [
    {
      title: 'Frontend Web Development',
      org: 'Meta (Coursera)',
      year: '2024',
      verify: 'https://coursera.org',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      org: 'freeCodeCamp',
      year: '2023',
      verify: 'https://freecodecamp.org/certification',
    },
    {
      title: 'Responsive Web Design',
      org: 'freeCodeCamp',
      year: '2022',
      verify: 'https://freecodecamp.org/certification',
    },
  ];

  return (
    <section id="certificates" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Certificates</h2>
          <p className="text-white/70 mt-2 max-w-2xl">Some of the learning milestones that shaped my craft. Each card includes a verification link.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c) => (
            <article key={c.title} className="group relative rounded-xl border border-white/10 bg-white/5 p-5 overflow-hidden">
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{
                background: 'radial-gradient(500px 220px at 0% 0%, rgba(56,189,248,0.15), transparent 60%)',
              }} />
              <h3 className="text-white font-medium">{c.title}</h3>
              <p className="text-white/70 text-sm mt-1">{c.org}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex w-fit rounded-md bg-white/10 px-2 py-1 text-xs text-white/70">{c.year}</span>
                <a
                  href={c.verify}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-teal-300 hover:text-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded px-1"
                >
                  Verify <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
