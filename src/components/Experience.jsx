export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">Experience</h2>
      <div className="mt-8 space-y-8">
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Security Engineer — Defenxor</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">2023 — Present</p>
            </div>
            <div className="text-sm text-indigo-600 dark:text-indigo-400">Jakarta, Indonesia</div>
          </div>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Designed SIEM architecture and data onboarding strategies across multi-environment deployments.</li>
            <li>Integrated diverse data sources and performed log normalization to improve correlation fidelity.</li>
            <li>Built detection rules and dashboards for threat hunting and incident response.</li>
            <li>Managed HIDS (Host Intrusion Detection System) using Wazuh, including installation, troubleshooting, integration with SIEM, and performing log analysis and incident correlation.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
