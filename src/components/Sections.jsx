import { motion } from 'framer-motion';
import CertificationsGrid from './CertificationsGrid.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Sections() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* SUMMARY */}
      <motion.section id="summary" className="py-10" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-sm font-bold tracking-widest text-teal-600 dark:text-teal-400">SUMMARY</h2>
        <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
          I'm a 20-year-old Computer Engineering and Network Specialist with 2 years of experience in networking, cybersecurity, and server management. I have strong communication skills and a solid history of completing technical projects. For the past year, I've worked as a Security Engineer, handling SIEM deployment, integrating various security devices or servers using both native tools and APIs, and normalizing raw logs for better threat detection. I'm known for being reliable, adaptable, and eager to keep learning and improving.
        </p>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section id="experience" className="py-10" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">EXPERIENCE</h2>
        <div className="mt-8 relative">
          <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" aria-hidden />
          <div className="space-y-10">
            {/* Defenxor */}
            <div className="relative md:grid md:grid-cols-2 md:gap-8">
              <div className="pl-8 md:pl-0 md:text-right">
                <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 px-3 py-1 text-xs font-medium">May 2024 – Present</div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">South Jakarta, Jakarta, Indonesia · On-site</p>
              </div>
              <div className="mt-4 md:mt-0 p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Security Engineer — Defenxor (PT Defender Nusa Semesta)</h3>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                  <li>Built a SIEM design to monitor security-related activities across the environment.</li>
                  <li>Integrated security devices (Firewall, Antivirus, IPS/IDS) and cloud security/apps (Office365, Microsoft Defender, CrowdStrike) to SIEM via Syslog and API.</li>
                  <li>Performed log normalization and correlation for improved threat detection and alerts.</li>
                  <li>Managed HIDS (Host Intrusion Detection System) using Wazuh, including installation, troubleshooting, integration with SIEM, and performing log analysis and incident correlation.</li>
                </ul>
              </div>
            </div>
            {/* AirNav */}
            <div className="relative md:grid md:grid-cols-2 md:gap-8">
              <div className="pl-8 md:pl-0 md:text-right">
                <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 px-3 py-1 text-xs font-medium">Nov 2023 – Apr 2024</div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Yogyakarta, Indonesia</p>
              </div>
              <div className="mt-4 md:mt-0 p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Application Developer (Intern) — AirNav Indonesia</h3>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                  <li>Developed a Python Teleprinter Application to receive AFTN (Aeronautical Fixed Telecommunication Network) messages, forward to operators and AMSC.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* EDUCATION */}
      <motion.section id="education" className="py-10" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">EDUCATION</h2>
        <div className="mt-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-5">
          <p className="text-slate-900 dark:text-white font-semibold">Computer and Network Engineering, Telkom Malang Vocational High School</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">Student</p>
        </div>
      </motion.section>

      {/* CERTS */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <CertificationsGrid />
      </motion.div>

      {/* SKILLS */}
      <motion.section id="skills" className="py-10" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">SKILLS</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            'Security Operations', 'SIEM', 'Log Normalization', 'Networking', 'Kubernetes', 'Python', 'Syslog', 'API Integration', 'Elastic Stack', 'SIEM deployment', 'SIEM connectors',
          ].map((s) => (
            <span key={s} className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3 py-1 text-sm">
              <span className="flex -space-x-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-600"/>
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500"/>
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400"/>
              </span>
              {s}
            </span>
          ))}
        </div>
      </motion.section>

      {/* HIGHLIGHTS */}
      <motion.section id="highlights" className="py-10" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">HIGHLIGHTS</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {[
            { title: 'SIEM Implementation', desc: 'Designed SIEM for enterprise, device integrations, alerting.' },
            { title: 'AFTN Teleprinter App', desc: 'Python app for AFTN message ingestion & forwarding.' },
          ].map((h) => (
            <article key={h.title} className="rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 dark:text-white">{h.title}</h3>
              <p className="mt-1 text-slate-600 dark:text-slate-300 text-sm">{h.desc}</p>
            </article>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
