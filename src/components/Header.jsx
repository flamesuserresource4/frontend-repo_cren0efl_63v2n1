import { useEffect, useState } from 'react';
import { Moon, Sun, Mail, Linkedin } from 'lucide-react';

export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored ? stored === 'dark' : prefersDark;
    setDark(initial);
    document.documentElement.classList.toggle('dark', initial);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          Arif Asyam Atsaruddin
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
          <a href="#summary" className="hover:text-slate-900 dark:hover:text-white">Summary</a>
          <a href="#experience" className="hover:text-slate-900 dark:hover:text-white">Experience</a>
          <a href="#education" className="hover:text-slate-900 dark:hover:text-white">Education</a>
          <a href="#certs" className="hover:text-slate-900 dark:hover:text-white">Certifications</a>
          <a href="#skills" className="hover:text-slate-900 dark:hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
          <a href="/resume/arif-asyam-atsaruddin-resume.pdf" className="hover:text-slate-900 dark:hover:text-white" target="_blank" rel="noreferrer">Resume</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="mailto:arif.asyam.atsaruddin@gmail.com"
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Email"
          >
            <Mail className="h-5 w-5 text-slate-700 dark:text-slate-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/arif-asyam-atsaruddin-b7692a246/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-slate-700 dark:text-slate-200" />
          </a>
          <button
            onClick={() => setDark((d) => !d)}
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-slate-700" />}
          </button>
        </div>
      </div>
    </header>
  );
}
