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
        <Hero photoUrl="https://cdn.discordapp.com/attachments/936449675924500602/1435205596914651146/WhatsApp_Image_2025-11-04_at_10.52.35_dc88893d.jpg?ex=690b1edf&is=6909cd5f&hm=49b29794bfcaa75a0e1c5f72c210cbf4f184e8bcb85cf73fe7f6f9ba15fe8688&" />
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
