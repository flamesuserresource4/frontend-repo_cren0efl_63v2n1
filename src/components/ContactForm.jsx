import { Send, Phone, Mail } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Let's talk about security</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Have an opportunity or project in mind? Send a message.</p>
          <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={(e)=>e.preventDefault()} aria-label="Contact form">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
              <input id="name" name="name" type="text" required className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
              <textarea id="message" name="message" rows={4} required className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div className="sm:col-span-2 flex flex-wrap gap-3">
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 font-semibold">
                <Send className="h-4 w-4"/> Send
              </button>
              <a href="/resume/arif-asyam-atsaruddin-resume.pdf" download className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">Download CV</a>
              <a href="mailto:arif.asyam.atsaruddin@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"><Mail className="h-4 w-4"/> Email</a>
              <a href="tel:+6289682259036" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"><Phone className="h-4 w-4"/> Call</a>
            </div>
          </form>
        </div>
        <aside className="rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900 dark:text-white">Direct</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-700 dark:text-slate-300">
            <a href="mailto:arif.asyam.atsaruddin@gmail.com" className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-teal-600"/> arif.asyam.atsaruddin@gmail.com</a>
            <a href="tel:+6289682259036" className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-teal-600"/> +62 896-8225-9036</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
