export default function Certificates() {
  const items = [
    { title: 'Google UX Design', issuer: 'Coursera', year: '2023' },
    { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon', year: '2022' },
    { title: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2021' },
    { title: 'Frontend Developer Career Path', issuer: 'Scrimba', year: '2021' },
  ];

  return (
    <section id="certificates" className="relative py-24 md:py-32 bg-gradient-to-b from-black via-black to-zinc-900">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Certificates</h2>
        <p className="mt-2 text-white/80">Highlighted credentials and coursework.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c) => (
            <div key={c.title} className="group relative rounded-xl border border-white/10 bg-white/5 p-5 overflow-hidden">
              <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
              <h3 className="text-white font-semibold">{c.title}</h3>
              <p className="text-white/70 text-sm mt-1">{c.issuer} • {c.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
