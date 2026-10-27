import React from 'react';
import { ArrowDown, FileDown, Mail, Sparkles, Terminal, Code2, Database, Layout, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.35] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-sky-600/15 via-indigo-600/15 to-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/80 border border-sky-500/25 text-slate-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm shadow-sky-950 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-semibold tracking-wide text-sky-300 truncate">
                {personalInfo.statusBadge}
              </span>
            </div>

            {/* Main Title Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 sm:mb-6 break-words">
              Building{' '}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Digital Experiences
              </span>{' '}
              That Make an Impact.
            </h1>

            {/* Personal Introduction */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-6 sm:mb-8">
              Hi, I'm <strong className="text-white font-semibold">Kalaivanan K</strong>, a Web Developer passionate about building responsive websites, interactive user interfaces, and practical digital solutions.
            </p>

            {/* CTA Buttons & Resume Download */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-8">
              <button
                onClick={() => handleScrollTo('#projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:via-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 animate-bounce shrink-0" />
              </button>

              <button
                onClick={() => handleScrollTo('#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-white/10 hover:border-white/20 shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Get In Touch</span>
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Kalaivanan_K_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-slate-400 hover:text-white group transition-colors duration-200"
                title="Download Kalaivanan K Resume (PDF)"
              >
                <FileDown className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors shrink-0" />
                <span className="underline decoration-slate-600 underline-offset-4 group-hover:decoration-indigo-400">Download Resume</span>
              </a>
            </div>

            {/* Quick Micro-Info Pills */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 border-t border-white/[0.08] text-xs text-slate-400 w-full">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
                <span>Location: <strong className="text-slate-300 font-medium">Cuddalore, TN, India</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
                <span>Specialization: <strong className="text-slate-300 font-medium">Web & Frontend</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>Status: <strong className="text-slate-300 font-medium">{personalInfo.availabilityText}</strong></span>
              </div>
            </div>

          </div>

          {/* Right Column: Code Editor Visual with Tech Labels & KK Monogram */}
          <div className="lg:col-span-5 relative flex justify-center w-full min-w-0">
            
            {/* Outer Wrapper with soft glow */}
            <div className="w-full max-w-lg relative min-w-0">
              
              {/* Decorative Tech Pills floating */}
              <div className="absolute -top-4 -left-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0d121f]/95 border border-sky-500/30 text-sky-300 text-xs font-mono shadow-xl backdrop-blur-md">
                <Code2 className="w-3.5 h-3.5 text-sky-400" />
                <span>React.js</span>
              </div>

              <div className="absolute -bottom-4 -left-3 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0d121f]/95 border border-amber-500/30 text-amber-300 text-xs font-mono shadow-xl backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>JavaScript</span>
              </div>

              <div className="absolute -top-3 -right-3 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0d121f]/95 border border-purple-500/30 text-purple-300 text-xs font-mono shadow-xl backdrop-blur-md">
                <Database className="w-3.5 h-3.5 text-purple-400" />
                <span>MySQL</span>
              </div>

              <div className="absolute -bottom-3 -right-3 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0d121f]/95 border border-indigo-500/30 text-indigo-300 text-xs font-mono shadow-xl backdrop-blur-md">
                <Layout className="w-3.5 h-3.5 text-indigo-400" />
                <span>WordPress</span>
              </div>

              {/* Code Editor Mockup Card */}
              <div className="w-full rounded-2xl bg-[#090d16] border border-white/[0.1] shadow-2xl overflow-hidden relative">
                
                {/* Editor Header Bar with Traffic Lights */}
                <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 bg-[#0f1422] border-b border-white/[0.08]">
                  <div className="flex items-center gap-1.5 sm:gap-2 truncate">
                    <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500/80 inline-block shrink-0" />
                    <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500/80 inline-block shrink-0" />
                    <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-500/80 inline-block shrink-0" />
                    <span className="ml-2 sm:ml-3 text-[11px] sm:text-xs font-mono text-slate-400 flex items-center gap-1.5 truncate">
                      <Terminal className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span className="truncate">developerProfile.js</span>
                    </span>
                  </div>

                  {/* KK Initials Badge */}
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-[10px] sm:text-[11px] font-bold text-white tracking-wider shadow-inner shrink-0">
                    KK
                  </div>
                </div>

                {/* Editor Code Body */}
                <div className="p-3.5 sm:p-5 font-mono text-[11px] sm:text-xs md:text-sm leading-relaxed overflow-x-auto text-slate-300">
                  <div className="text-slate-500">// Welcome to my developer portfolio</div>
                  <div className="mt-1">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-sky-300">developer</span> = {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">'{personalInfo.name}'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">role:</span>{' '}
                    <span className="text-emerald-300">'Web Developer'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">education:</span>{' '}
                    <span className="text-emerald-300">'M.Sc. Computer Science'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">location:</span>{' '}
                    <span className="text-emerald-300">'Cuddalore, India'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">coreSkills:</span> [
                  </div>
                  <div className="pl-8 text-sky-300">
                    <span className="text-amber-300">'React.js'</span>,{' '}
                    <span className="text-amber-300">'JavaScript'</span>,{' '}
                    <span className="text-amber-300">'HTML/CSS'</span>,
                  </div>
                  <div className="pl-8 text-sky-300">
                    <span className="text-amber-300">'WordPress'</span>,{' '}
                    <span className="text-amber-300">'Zoho Commerce'</span>,{' '}
                    <span className="text-amber-300">'MySQL'</span>
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-slate-400">focus:</span>{' '}
                    <span className="text-sky-300">'High-performance responsive web interfaces'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">openToOpportunities:</span>{' '}
                    <span className="text-emerald-400 font-semibold">true</span>
                  </div>
                  <div>{'};'}</div>
                  
                  <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 text-sky-400/80">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Ready to collaborate</span>
                    </span>
                    <span className="text-slate-500 font-mono">UTF-8</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
