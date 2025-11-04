import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';
import ContactForm from './components/ContactForm.jsx';

export default function App() {
  useEffect(() => {
    const title = 'Arif Asyam Atsaruddin — Security Engineer | Portfolio';
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "Portfolio of Arif Asyam Atsaruddin, Security Engineer based in Jakarta specializing in SIEM deployment, log normalization, networking, and cybersecurity.";
    if (meta) meta.setAttribute('content', content);
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 selection:bg-teal-200/60 dark:selection:bg-teal-600/30">
      <Header />
      <main>
        <Hero photoUrl="https://cdn.discordapp.com/attachments/936449675924500602/1435205596914651146/WhatsApp_Image_2025-11-04_at_10.52.35_dc88893d.jpg?ex=690b1edf&is=6909cd5f&hm=49b29794bfcaa75a0e1c5f72c210cbf4f184e8bcb85cf73fe7f6f9ba15fe8688&" />
        <Sections />
        <ContactForm />
      </main>
    </div>
  );
}
