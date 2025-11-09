export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Let’s build something</h2>
          <p className="text-white/70 mt-2 max-w-2xl">Have an idea that would shine with 3D, motion, and polish? I’d love to hear from you.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center rounded-md bg-teal-500/90 hover:bg-teal-400 text-black font-medium px-4 py-2 shadow-lg shadow-teal-500/20"
            >
              Email me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-md bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2 border border-white/10"
            >
              See projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
