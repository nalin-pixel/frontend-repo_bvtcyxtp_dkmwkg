export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s work together</h2>
        <p className="mt-3 text-white/80">Have a project in mind? Reach out and I’ll respond soon.</p>
        <a
          href="mailto:hello@example.com"
          className="inline-flex mt-8 items-center rounded-md bg-white text-black px-5 py-2.5 text-sm font-medium shadow hover:shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
