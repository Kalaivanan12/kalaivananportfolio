import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import AiSkills from './components/AiSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Publication from './components/Publication';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090e] text-[#f1f5f9] font-sans selection:bg-indigo-500/30 selection:text-indigo-200 relative">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main>
        <Hero />
        <About />
        <Skills />
        <AiSkills />
        <Experience />
        <Projects />
        <Education />
        <Publication />
        <Certifications />
        <Contact />
      </main>

      {/* Footer & Back to top button */}
      <Footer />
      <BackToTop />
    </div>
  );
}
