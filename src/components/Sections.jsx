import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2, Shield, Server, Code, Database, Globe } from 'lucide-react';
import CertificationsGrid from './CertificationsGrid.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function Sections() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* SUMMARY */}
      <motion.section
        id="summary"
        className="py-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <h2 className="text-sm font-bold tracking-widest text-teal-600 dark:text-teal-400">SUMMARY</h2>
        <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
          I'm a 20-year-old Computer Engineering and Network Specialist with 2 years of experience in networking, cybersecurity, and server management. I have strong communication skills and a solid history of completing technical projects. For the past year, I've worked as a Security Engineer, handling SIEM deployment, integrating various security devices or servers using both native tools and APIs, and normalizing raw logs for better threat detection. I'm known for being reliable, adaptable, and eager to keep learning and improving.
        </p>
      </motion.section>

      {/* EXPERIENCE (Improved timeline + clearer structure) */}
      <motion.section
        id="experience"
        className="py-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        aria-label="Professional experience timeline"
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">EXPERIENCE</h2>
        <div className="mt-8 relative">
          {/* timeline rail - only visible on md+ for better readability on mobile */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" aria-hidden />
          <div className="space-y-10">
            {/* Defenxor */}
            <ExperienceItem
              side="left"
              role="Security Engineer"
              company="Defenxor (PT Defender Nusa Semesta)"
              location="South Jakarta, Jakarta, Indonesia · On-site"
              period="May 2024 – Present"
              bullets={[
                'Designed SIEM architecture and monitoring to cover critical security activities across environments.',
                'Integrated security devices (Firewall, Antivirus, IPS/IDS) and SaaS/security platforms (Office 365, Microsoft Defender, CrowdStrike) via Syslog and APIs.',
                'Normalized and enriched raw logs to improve correlation, detections, and alert fidelity.',
                'Operationalized Wazuh HIDS: installation, agent onboarding, troubleshooting, SIEM integration, and incident-driven log analysis/correlation.',
              ]}
              stack={[
                'SIEM', 'Syslog', 'API', 'Wazuh', 'Windows/Linux', 'Defender', 'CrowdStrike',
              ]}
            />
            {/* AirNav */}
            <ExperienceItem
              side="right"
              role="Application Developer (Intern)"
              company="AirNav Indonesia"
              location="Yogyakarta, Indonesia"
              period="Nov 2023 – Apr 2024"
              bullets={[
                'Developed a Python-based Teleprinter application to ingest AFTN messages and forward to operators and AMSC with reliability safeguards.',
              ]}
              stack={[ 'Python', 'Sockets', 'Linux' ]}
            />
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

      {/* CERTIFICATIONS */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <CertificationsGrid />
      </motion.div>

      {/* SKILLS (Improved: categorized + proficiency) */}
      <SkillsSection />

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

function ExperienceItem({ side = 'left', role, company, location, period, bullets = [], stack = [] }) {
  const alignLeft = side === 'left';
  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-8">
      {/* Meta */}
      <div className={`pl-8 md:pl-0 ${alignLeft ? 'md:text-right' : ''}`}>
        <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 px-3 py-1 text-xs font-medium">
          <Calendar className="h-3.5 w-3.5" aria-hidden />
          {period}
        </span>
        <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <MapPin className="h-4 w-4" aria-hidden /> {location}
        </p>
      </div>

      {/* Card */}
      <article className={`mt-4 md:mt-0 p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm ${alignLeft ? '' : ''}`}>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white inline-flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-teal-600 dark:text-teal-400" aria-hidden /> {role}
        </h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 inline-flex items-center gap-2">
          <Building2 className="h-4 w-4" aria-hidden /> {company}
        </p>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        {stack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
            {stack.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2.5 py-1 text-xs"
              >
                <Shield className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" aria-hidden /> {chip}
              </span>
            ))}
          </div>
        )}
      </article>
    </div>
  );
}

function SkillsSection() {
  const categories = [
    {
      name: 'Security & SIEM',
      icon: <Shield className="h-4 w-4" aria-hidden />,
      items: [
        { name: 'SIEM (design, onboarding, rules)', level: 5 },
        { name: 'Log normalization/correlation', level: 5 },
        { name: 'Wazuh (HIDS) operations', level: 4 },
        { name: 'Detection engineering', level: 4 },
      ],
    },
    {
      name: 'Platforms & Systems',
      icon: <Server className="h-4 w-4" aria-hidden />,
      items: [
        { name: 'Windows / Linux', level: 4 },
        { name: 'Elastic Stack basics', level: 3 },
        { name: 'Microsoft Defender', level: 4 },
        { name: 'CrowdStrike (integration)', level: 3 },
      ],
    },
    {
      name: 'Dev & Automation',
      icon: <Code className="h-4 w-4" aria-hidden />,
      items: [
        { name: 'Python (scripting)', level: 3 },
        { name: 'API integration', level: 4 },
        { name: 'Syslog pipelines', level: 4 },
      ],
    },
    {
      name: 'Networking & Cloud',
      icon: <Globe className="h-4 w-4" aria-hidden />,
      items: [
        { name: 'Networking fundamentals', level: 4 },
        { name: 'Kubernetes (basics)', level: 2 },
      ],
    },
    {
      name: 'Data',
      icon: <Database className="h-4 w-4" aria-hidden />,
      items: [
        { name: 'Data parsing/enrichment', level: 4 },
      ],
    },
  ];

  return (
    <motion.section id="skills" className="py-10" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">SKILLS</h2>
      <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <div key={cat.name} className="rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-5">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold">
              {cat.icon}
              <span>{cat.name}</span>
            </div>
            <ul className="mt-4 space-y-3">
              {cat.items.map((it) => (
                <li key={it.name} className="group">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700 dark:text-slate-300">{it.name}</span>
                    <span className="sr-only">Proficiency {it.level} of 5</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden" aria-hidden>
                    <div
                      className="h-full rounded-full bg-teal-500 transition-all duration-500 ease-out group-hover:bg-teal-400"
                      style={{ width: `${(it.level / 5) * 100}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
