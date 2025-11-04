import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, Shield, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || (
      !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches
    );
    setDark(isDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold">
            <Shield className="h-6 w-6 text-teal-600" aria-hidden="true" />
            <span>Arif Asyam Atsaruddin</span>
          </a>

          <nav className="hidden md:flex items-center space-x-1" aria-label="Primary">
            <NavLink href="#summary">Summary</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#certs">Certificates</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label={dark ? 'Activate light mode' : 'Activate dark mode'}
              onClick={() => setDark(!dark)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <a
              href="https://www.linkedin.com/in/arif-asyam-atsaruddin-b7692a246/"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-teal-600 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 px-3 py-2 text-sm font-medium transition"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>

            <button
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800">
          <div className="px-4 py-3 grid gap-2">
            <NavLink href="#summary">Summary</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#certs">Certificates</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <div className="mt-2 flex flex-col gap-2 text-slate-600 dark:text-slate-300">
              <a href="tel:+6289682259036" className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/>+62 896-8225-9036</a>
              <a href="mailto:arif.asyam.atsaruddin@gmail.com" className="inline-flex items-center gap-2"><Mail className="h-4 w-4"/>Email</a>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4"/>Jakarta, Indonesia</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
