import Navbar from './components/Navbar';
import EnhancedHero from './components/EnhancedHero';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import ThreeShowcase from './components/ThreeShowcase';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <EnhancedHero />
        <ThreeShowcase />
        <Projects />
        <Certificates />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="text-xs text-white/50">
            Built with React, Tailwind, Framer Motion, and Spline.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
