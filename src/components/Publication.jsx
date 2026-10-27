import React from 'react';
import { BookMarked, Calendar, ShieldCheck, Cloud, KeyRound, Database, FileText, Sparkles, Mail } from 'lucide-react';
import { publicationData, personalInfo } from '../data/portfolioData';

export default function Publication() {
  const handleContactForPaper = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="publication" className="py-16 sm:py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#07090e]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <span>ACADEMIC RESEARCH</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Research & Publication
          </h2>
          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl">
            Applied computer science research exploring cloud storage efficiency, user access control, and cryptographic deduplication.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Publication Showcase Card */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#090d16] border border-white/[0.08] hover:border-indigo-500/30 p-4 sm:p-7 lg:p-10 transition-all duration-300 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Top Gradient Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500" />

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 sm:gap-8">
            
            {/* Main Details */}
            <div className="space-y-4 sm:space-y-5 max-w-3xl">
              
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-mono font-bold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  {publicationData.type}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md bg-slate-900 border border-white/[0.06] text-[11px] sm:text-xs text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>{publicationData.date}</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                "{publicationData.title}"
              </h3>

              <div className="text-[11px] sm:text-xs font-mono text-slate-400 flex items-center gap-2 flex-wrap">
                <span>Author: <strong className="text-white font-medium">{personalInfo.name}</strong></span>
                <span className="hidden sm:inline">•</span>
                <span className="text-sky-400">Postgraduate Research Work</span>
              </div>

              <p className="text-slate-300/90 text-xs sm:text-sm lg:text-base leading-relaxed">
                {publicationData.description}
              </p>

              {/* Research Insights */}
              <div className="p-3.5 sm:p-5 rounded-2xl bg-slate-900/90 border border-white/[0.06] space-y-2">
                <div className="text-[11px] sm:text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider">
                  Core Architectural Investigations:
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  {publicationData.abstractHighlights.map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Topics Badges */}
              <div>
                <div className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 sm:mb-2.5">
                  Research Topics & Domains:
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {publicationData.keyTopics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium bg-slate-900 text-sky-300 border border-white/[0.08]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Card / Inquiry Widget */}
            <div className="w-full lg:w-80 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0c1220] to-[#090d16] border border-white/[0.08] flex flex-col justify-between shrink-0">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3.5 sm:mb-4">
                  <BookMarked className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1.5">
                  Research Presentation
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-5 sm:mb-6">
                  Presented as part of the M.Sc. Computer Science postgraduate research curriculum focusing on secure cloud storage architectures.
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-white/[0.06]">
                <button
                  onClick={handleContactForPaper}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Inquire Regarding Paper</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
