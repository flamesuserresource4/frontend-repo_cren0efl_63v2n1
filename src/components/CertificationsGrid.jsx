import { Award, FileDown, ExternalLink } from 'lucide-react';

const CERTS = [
  { title: 'Data Analysis Kibana', issuer: 'Elastic', date: 'Issued Aug 2025', id: 'C136032', pdf: '/certs/data-analysis-kibana.pdf' },
  { title: 'Kubernetes Basics', issuer: 'Elastic', date: 'Issued Aug 2025', id: 'C129172', pdf: '/certs/kubernetes-basics.pdf' },
  { title: 'Elastic Observability Engineer', issuer: 'Elastic', date: 'Issued Jul 2025', id: 'C132737', pdf: '/certs/elastic-observability-engineer.pdf' },
  { title: 'Elasticsearch Engineer', issuer: 'Elastic', date: 'Issued Jun 2025', id: 'C128038', pdf: '/certs/elasticsearch-engineer.pdf' },
  { title: 'Developer intern', issuer: 'AirNav Indonesia', date: 'Issued May 2024', pdf: '/certs/developer-intern-airnav.pdf' },
  { title: 'Networking Essentials', issuer: 'Cisco Networking Academy', date: 'Issued Nov 2023', pdf: '/certs/networking-essentials.pdf' },
  { title: 'IT Specialist: CyberSecurity', issuer: 'Pearson VUE', date: 'Issued Oct 2023', pdf: '/certs/it-specialist-cybersecurity.pdf' },
  { title: 'IoT Fundamentals: Connecting Things', issuer: 'Cisco', date: 'Issued Sep 2023', pdf: '/certs/iot-fundamentals-connecting-things.pdf' },
  { title: 'CyberOps Associate', issuer: 'Cisco', date: 'Issued Jul 2023', pdf: '/certs/cyberops-associate.pdf' },
  { title: 'Telkom Digiup Junior Web Developer', issuer: 'Telkom Indonesia', date: 'Issued Mar 2023 (Expires Mar 2026)', pdf: '/certs/telkom-digiup-junior-web-developer.pdf' },
];

export default function CertificationsGrid() {
  return (
    <section id="certs" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center gap-3 mb-6">
        <Award className="h-6 w-6 text-teal-600" />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">CERTIFICATES & LICENSES</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTS.map((c) => (
          <article key={c.title} className="rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-slate-900 dark:text-white">{c.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{c.issuer}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{c.date}{c.id ? ` — Credential ID ${c.id}` : ''}</p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={c.pdf}
                download
                className="inline-flex items-center gap-2 rounded-md bg-teal-600 hover:bg-teal-700 text-white px-3 py-1.5 text-sm font-medium"
              >
                <FileDown className="h-4 w-4"/> Download PDF
              </a>
              <a
                href={c.pdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-1.5 text-sm"
              >
                <ExternalLink className="h-4 w-4"/> View
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
