import { useState } from 'react';

export default function Hero({ photoUrl }) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-12 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Arif Asyam Atsaruddin
          </h1>
          <p className="mt-3 text-lg text-indigo-600 dark:text-indigo-400 font-medium">Security Engineer • Network & Cloud</p>
          <p id="summary" className="mt-5 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Security engineer with 2 years of experience in networking, security operations, and cloud. Passionate about SIEM design, log normalization, and building resilient detection pipelines.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/resume/arif-asyam-atsaruddin-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 shadow-inner overflow-hidden">
          {imgOk ? (
            <img
              src={photoUrl}
              alt="Portrait of Arif Asyam Atsaruddin"
              className="w-full h-full object-cover"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="h-32 w-32 md:h-40 md:w-40 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-4xl md:text-5xl font-semibold text-indigo-600 dark:text-indigo-300">
                AA
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
