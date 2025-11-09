import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_60%_at_50%_100%,rgba(236,72,153,0.18)_0%,transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Let’s build something fun</h2>
          <p className="mt-3 text-white/70">Got an idea or just want to say hi? Drop a message.</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/70 mb-1">Name</label>
              <input className="w-full rounded-md bg-black/60 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-xs text-white/70 mb-1">Email</label>
              <input type="email" className="w-full rounded-md bg-black/60 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40" placeholder="you@email.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs text-white/70 mb-1">Message</label>
              <textarea rows={5} className="w-full rounded-md bg-black/60 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40" placeholder="What are we building?" />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between text-white/70 text-sm">
            <p className="inline-flex items-center gap-2"><Mail size={16} /> I usually reply within a day.</p>
            <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-black font-semibold shadow-lg hover:shadow-xl">
              <Send size={16} /> Send
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
