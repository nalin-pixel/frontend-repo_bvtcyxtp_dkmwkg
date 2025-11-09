import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight">My Portfolio</a>

        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded px-1"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-white/90 p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70">
          <ul className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block w-full text-left text-white/90 hover:text-white py-2"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
