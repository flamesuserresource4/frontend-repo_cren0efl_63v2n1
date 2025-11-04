import { useState } from 'react';
import { Phone, Mail, Download, Linkedin } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const mailto = `mailto:arif.asyam.atsaruddin@gmail.com?subject=${encodeURIComponent('Portfolio Contact from ' + form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`;

  return (
    <section id="contact" className="mt-2 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-950/40">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-8 bg-white dark:bg-slate-900/60 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Let's talk about security</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Have a project or role in mind? Reach out via the form or directly.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <form
              className="md:col-span-2 grid grid-cols-1 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                window.location.href = mailto;
              }}
              aria-label="Contact form"
            >
              <label className="sr-only" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <label className="sr-only" htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Tell me about your needs"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <div className="flex items-center gap-3">
                <button type="submit" className="inline-flex items-center rounded-md bg-teal-600 text-white px-4 py-2 text-sm font-medium hover:bg-teal-700 transition">
                  Send message
                </button>
                {sent && (
                  <span className="text-sm text-slate-600 dark:text-slate-400">Opening your email client…</span>
                )}
              </div>
            </form>

            <aside className="md:col-span-1 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-4">
              <h3 className="font-semibold text-slate-900 dark:text-white">Contact & Links</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> <a href="tel:+6289682259036" className="hover:underline">+62 896-8225-9036</a></li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> <a href="mailto:arif.asyam.atsaruddin@gmail.com" className="hover:underline">arif.asyam.atsaruddin@gmail.com</a></li>
                <li className="flex items-center gap-2"><Linkedin className="h-4 w-4"/> <a href="https://www.linkedin.com/in/arif-asyam-atsaruddin-b7692a246/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
              </ul>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="/resume/arif-asyam-atsaruddin-resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <Download className="h-4 w-4"/> Download CV
                </a>
                <a
                  href="mailto:arif.asyam.atsaruddin@gmail.com"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  Email me
                </a>
              </div>
            </aside>
          </div>
        </div>

        <footer className="mt-10 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>
            <p>© {new Date().getFullYear()} Arif Asyam Atsaruddin — Jakarta, Indonesia</p>
            <p className="mt-1">Phone: <a className="hover:underline" href="tel:+6289682259036">+62 896-8225-9036</a> · Email: <a className="hover:underline" href="mailto:arif.asyam.atsaruddin@gmail.com">arif.asyam.atsaruddin@gmail.com</a></p>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/arif-asyam-atsaruddin-b7692a246/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-teal-600 hover:bg-teal-700 text-white px-3 py-1.5">
              <Linkedin className="h-4 w-4"/> LinkedIn
            </a>
            <a href="#home" className="text-slate-700 dark:text-slate-300 hover:underline">Back to top</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
