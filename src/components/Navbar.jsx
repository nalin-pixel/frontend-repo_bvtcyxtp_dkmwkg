import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ResumeButton from './ResumeButton';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-white font-semibold tracking-tight">
            <span className="text-teal-300">/</span>Portfolio
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded px-1"
              >
                {item.label}
              </a>
            ))}
            <ResumeButton />
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-md px-3 py-2 text-white/90 hover:text-white bg-white/5 hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3">
                <ResumeButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
