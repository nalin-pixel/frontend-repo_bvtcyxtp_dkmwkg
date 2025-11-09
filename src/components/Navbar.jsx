import { useState } from 'react';
import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 text-white">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400">
              <Rocket size={18} className="text-white" />
            </div>
            <span className="font-semibold tracking-tight">My Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#contact"
              className="px-3 py-2 text-sm rounded-md bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-black font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition"
            >
              Let’s talk
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              {open ? (
                <path fillRule="evenodd" d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 011.414 1.414L13.414 10.586l4.361 4.361a1 1 0 01-1.414 1.414L12 12l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z"/>
              ) : (
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z"/>
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="#contact" className="flex-1 text-center px-3 py-2 text-sm rounded-md bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-black font-semibold">
                  Let’s talk
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
