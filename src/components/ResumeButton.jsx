import { Download } from 'lucide-react';

export default function ResumeButton({ variant = 'primary' }) {
  const downloadResume = () => {
    const content = `Resume\n\nName: Your Name\nRole: Frontend / Creative Developer\nLocation: City, Country\nEmail: hello@example.com\nWebsite: https://example.com\n\nSummary\nPassionate developer crafting interactive 3D experiences with a focus on performance and accessibility.\n\nSkills\n- React, TypeScript, Tailwind CSS\n- Framer Motion, Spline, Three.js\n- FastAPI, REST, WebSockets\n\nExperience\n- Company — Role (YYYY–YYYY)\n  Highlights: Built immersive product visualizers and design systems.\n\nEducation\n- Degree — University\n`;

    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Resume.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const base = 'inline-flex items-center gap-2 rounded-md font-medium px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400';
  const styles = variant === 'secondary'
    ? 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
    : 'bg-teal-500/90 hover:bg-teal-400 text-black shadow-lg shadow-teal-500/20';

  return (
    <button onClick={downloadResume} className={`${base} ${styles}`}>
      <Download size={16} />
      Resume
    </button>
  );
}
