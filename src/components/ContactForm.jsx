import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const mailto = `mailto:arif@example.com?subject=${encodeURIComponent('Portfolio Contact from ' + form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 bg-white dark:bg-neutral-900">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">Contact</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">Have a project or role in mind? Let’s connect.</p>
        <form
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            window.location.href = mailto;
          }}
        >
          <input
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            required
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Tell me about your needs"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="md:col-span-2 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="md:col-span-2 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-500">
              Send message
            </button>
            {sent && (
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Opening your email client…</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
