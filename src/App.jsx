import Navbar from './components/Navbar';
import EnhancedHero from './components/EnhancedHero';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-white selection:bg-teal-300/30">
      <Navbar />

      <main className="pt-16">
        <EnhancedHero />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <footer className="py-10 text-center text-sm text-white/60">
        <p>
          Built with React, Tailwind, Framer Motion, and Spline. Interact with the scenes using your mouse and scroll.
        </p>
      </footer>
    </div>
  );
}
