import { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Download } from 'lucide-react';

export default function Hero({ photoUrl }) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-12 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">Arif Asyam Atsaruddin</h1>
          <p className="mt-3 text-xl text-teal-600 dark:text-teal-400 font-semibold">Security Engineer</p>
          <div className="mt-4 flex flex-col gap-1 text-slate-700 dark:text-slate-300" aria-label="Contact information">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4"/> +62 896-8225-9036</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> arif.asyam.atsaruddin@gmail.com</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Jakarta, Indonesia</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/arif-asyam-atsaruddin-b7692a246/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-teal-600 text-white px-4 py-2 text-sm font-medium hover:bg-teal-700 transition"
            >
              <Linkedin className="h-4 w-4"/> LinkedIn
            </a>
            <a
              href="/resume/arif-asyam-atsaruddin-resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition"
            >
              <Download className="h-4 w-4"/> Download Resume
            </a>
            <a
              href="mailto:arif.asyam.atsaruddin@gmail.com"
              className="inline-flex items-center rounded-md border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              Contact / Email
            </a>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 shadow-inner overflow-hidden">
          {imgOk ? (
            <img
              src={photoUrl}
              alt="Portrait of Arif Asyam Atsaruddin"
              className="w-full h-full object-cover"
              onError={() => setImgOk(false)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="h-32 w-32 md:h-40 md:w-40 rounded-full bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-4xl md:text-5xl font-semibold text-teal-600 dark:text-teal-300">
                AA
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
