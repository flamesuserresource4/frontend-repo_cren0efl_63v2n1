import { useEffect, useState } from 'react';
import { Moon, Sun, Mail, Github, Linkedin } from 'lucide-react';

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
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/60 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Arif Asyam Atsaruddin
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#summary" className="hover:text-neutral-900 dark:hover:text-white">Summary</a>
          <a href="#experience" className="hover:text-neutral-900 dark:hover:text-white">Experience</a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white">Contact</a>
          <a href="/resume/arif-asyam-atsaruddin-resume.pdf" className="hover:text-neutral-900 dark:hover:text-white" target="_blank" rel="noreferrer">Resume</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="mailto:arif@example.com" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Email">
            <Mail className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="GitHub">
            <Github className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
          </a>
          <button
            onClick={() => setDark((d) => !d)}
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-neutral-700" />}
          </button>
        </div>
      </div>
    </header>
  );
}
