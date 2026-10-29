import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const storedTheme = localStorage.getItem('portfolio-theme');
      return storedTheme ? storedTheme : 'dark';
    } catch (e) {
      return 'dark';
    }
  });

  useEffect(() => {
    try {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('portfolio-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('portfolio-theme', 'light');
      }
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
