import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import ContactForm from './components/ContactForm.jsx';

export default function App() {
  useEffect(() => {
    document.title = 'Arif Asyam Atsaruddin — Security Engineer';
    const meta = document.querySelector('meta[name="description"]');
    const content =
      'Portfolio of Arif Asyam Atsaruddin — Security Engineer specializing in SIEM, networking, cloud, and detection engineering.';
    if (meta) meta.setAttribute('content', content);
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Header />
      <main>
        <Hero photoUrl="https://imgur.com/a/efZQ8Ch" />
        <Experience />
        <ContactForm />
      </main>
      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-600 dark:text-neutral-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Arif Asyam Atsaruddin</span>
          <a href="#home" className="hover:text-neutral-900 dark:hover:text-neutral-200">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
