import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Download, FileDown, User } from 'lucide-react';

function Avatar() {
  // Fallback avatar with initials
  return (
    <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-gradient-to-br from-teal-500 to-blue-700 text-white flex items-center justify-center shadow-lg ring-4 ring-white/60 dark:ring-slate-800">
      <User className="h-12 w-12 opacity-90" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-14 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.25fr_.75fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 px-3 py-1 text-xs font-medium ring-1 ring-teal-200 dark:ring-teal-800">
              <span>Security Engineer</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Arif Asyam Atsaruddin
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl">
              Security Engineer focused on SIEM design, log normalization, and scalable integrations across modern security stacks.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-teal-600"/>+62 896-8225-9036</span>
              <a href="mailto:arif.asyam.atsaruddin@gmail.com" className="inline-flex items-center gap-2 hover:text-teal-600"><Mail className="h-4 w-4 text-teal-600"/>arif.asyam.atsaruddin@gmail.com</a>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-teal-600"/>Jakarta, Indonesia</span>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/resume/arif-asyam-atsaruddin-resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 font-semibold shadow-sm transition"
              >
                <Download className="h-4 w-4"/> Download Resume
              </a>
              <a
                href="mailto:arif.asyam.atsaruddin@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 px-4 py-2 font-medium transition"
              >
                <Mail className="h-4 w-4"/> Contact / Email
              </a>
              <a
                href="https://www.linkedin.com/in/arif-asyam-atsaruddin-b7692a246/"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-teal-600 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 px-4 py-2 font-medium transition"
              >
                <Linkedin className="h-4 w-4"/> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center md:justify-end"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>

      {/* Summary */}
      <div id="summary" className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-10">
        <div className="rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
          <h2 className="text-sm font-semibold tracking-widest text-teal-600">SUMMARY</h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
            I'm a 20-year-old Computer Engineering and Network Specialist with 2 years of experience in networking, cybersecurity, and server management. I have strong communication skills and a solid history of completing technical projects. For the past year, I've worked as a Security Engineer, handling SIEM deployment, integrating various security devices or servers using both native tools and APIs, and normalizing raw logs for better threat detection. I'm known for being reliable, adaptable, and eager to keep learning and improving.
          </p>
        </div>
      </div>
    </section>
  );
}
