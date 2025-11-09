import Navbar from './components/Navbar';
import EnhancedHero from './components/EnhancedHero';
import ThreeShowcase from './components/ThreeShowcase';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <EnhancedHero />
        <ThreeShowcase />
        <Certificates />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} • Built with React, Tailwind, Framer Motion, and Spline
      </footer>
    </div>
  );
}

export default App;
