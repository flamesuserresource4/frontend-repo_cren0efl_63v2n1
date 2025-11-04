import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CertificationsGrid from './components/CertificationsGrid';
import ContactForm from './components/ContactForm';
import { Briefcase, GraduationCap, Shield, Star } from 'lucide-react';

function SkillTag({ label, level = 4 }) {
  return (
    <div className="flex items-center justify-between rounded-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-sm text-slate-700 dark:text-slate-200">
      <span>{label}</span>
      <div aria-label={`Proficiency ${level} out of 5`} className="ml-3 flex gap-1">
        {[1,2,3,4,5].map((i) => (
          <span key={i} className={`h-2 w-2 rounded-full ${i <= level ? 'bg-teal-600' : 'bg-slate-300 dark:bg-slate-600'}`} />
        ))}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="h-6 w-6 text-teal-600" />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">EXPERIENCE</h2>
      </div>
      <div className="relative pl-6 sm:pl-10">
        <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" aria-hidden="true" />

        <div className="relative mb-8">
          <div className="absolute -left-[7px] sm:-left-2 top-1.5 h-3 w-3 rounded-full bg-teal-600 ring-4 ring-white dark:ring-slate-900" />
          <article className="rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-semibold text-slate-900 dark:text-white">Security Engineer — Defenxor (PT Defender Nusa Semesta)</h3>
              <span className="text-sm text-slate-600 dark:text-slate-300">May 2024 – Present · South Jakarta, Jakarta, Indonesia · On-site</span>
            </div>
            <ul className="mt-3 list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-2">
              <li>Built a SIEM design to monitor security-related activities across the environment.</li>
              <li>Integrated security devices (Firewall, Antivirus, IPS/IDS) and cloud security/apps (Office365, Microsoft Defender, CrowdStrike) to SIEM via Syslog and API.</li>
              <li>Performed log normalization and correlation for improved threat detection and alerts.</li>
              <li>Managed HIDS (Host Intrusion Detection System) using Wazuh, including installation, troubleshooting, integration with SIEM, and performing log analysis and incident correlation.</li>
            </ul>
          </article>
        </div>

        <div className="relative">
          <div className="absolute -left-[7px] sm:-left-2 top-1.5 h-3 w-3 rounded-full bg-teal-600 ring-4 ring-white dark:ring-slate-900" />
          <article className="rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-semibold text-slate-900 dark:text-white">Application Developer (Intern) — AirNav Indonesia</h3>
              <span className="text-sm text-slate-600 dark:text-slate-300">Nov 2023 – Apr 2024 · Yogyakarta, Indonesia</span>
            </div>
            <ul className="mt-3 list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-2">
              <li>Developed a Python Teleprinter Application to receive AFTN (Aeronautical Fixed Telecommunication Network) messages, forward to operators and AMSC.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center gap-3 mb-4">
        <GraduationCap className="h-6 w-6 text-teal-600" />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">EDUCATION</h2>
      </div>
      <div className="rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <p className="font-semibold text-slate-900 dark:text-white">Computer and Network Engineering, Telkom Malang Vocational High School — Student</p>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    ['Security Operations', 5],
    ['SIEM', 5],
    ['Log Normalization', 5],
    ['Networking', 4],
    ['Kubernetes', 4],
    ['Python', 4],
    ['Syslog', 5],
    ['API Integration', 4],
    ['Elastic Stack', 4],
    ['SIEM deployment', 5],
    ['SIEM connectors', 4],
  ];
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center gap-3 mb-4">
        <Shield className="h-6 w-6 text-teal-600" />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">SKILLS</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {skills.map(([label, level]) => (
          <SkillTag key={label} label={label} level={level} />
        ))}
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section id="highlights" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center gap-3 mb-4">
        <Star className="h-6 w-6 text-teal-600" />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">HIGHLIGHTS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <article className="rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900 dark:text-white">SIEM Implementation</h3>
          <p className="mt-2 text-slate-700 dark:text-slate-300">Designed SIEM for enterprise, device integrations, alerting.</p>
        </article>
        <article className="rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900 dark:text-white">AFTN Teleprinter App</h3>
          <p className="mt-2 text-slate-700 dark:text-slate-300">Python app for AFTN message ingestion & forwarding.</p>
        </article>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 dark:text-slate-300">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p>© {year} Arif Asyam Atsaruddin — Jakarta, Indonesia</p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:arif.asyam.atsaruddin@gmail.com" className="hover:text-teal-600">Email</a>
            <a href="tel:+6289682259036" className="hover:text-teal-600">Phone</a>
            <a href="https://www.linkedin.com/in/arif-asyam-atsaruddin-b7692a246/" target="_blank" rel="noreferrer" className="hover:text-teal-600">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    document.title = 'Arif Asyam Atsaruddin — Security Engineer | Portfolio';
    const meta = document.querySelector('meta[name="description"]');
    const description = "Security Engineer focused on SIEM deployment, integrations, and log normalization. Based in Jakarta, Indonesia.";
    if (meta) meta.setAttribute('content', description);
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = description;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-teal-600 text-white px-3 py-2 rounded">Skip to content</a>
      <Header />
      <main id="content">
        <Hero />
        <Experience />
        <Education />
        <CertificationsGrid />
        <Skills />
        <Highlights />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
