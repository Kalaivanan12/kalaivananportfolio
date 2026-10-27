import React from 'react';
import { Code2, Cpu, Sparkles, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    Code2: Code2,
    Cpu: Cpu,
    Sparkles: Sparkles
  };

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#07090e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {aboutData.heading}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Narrative & Key Highlights */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            {aboutData.paragraphs.map((p, idx) => (
              <p key={idx} className="text-slate-300/90">
                {p}
              </p>
            ))}

            {/* Quick Context Card */}
            <div className="mt-6 sm:mt-8 p-3.5 sm:p-5 rounded-2xl bg-[#090d16] border border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Education</div>
                  <div className="text-white font-semibold truncate">M.Sc. Computer Science</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Base Location</div>
                  <div className="text-white font-semibold truncate">Cuddalore, Tamil Nadu, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Pillar Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            {aboutData.pillars.map((pillar) => {
              const IconComponent = iconMap[pillar.iconName] || Sparkles;
              return (
                <div
                  key={pillar.id}
                  className="group p-4 sm:p-6 rounded-2xl bg-[#090d16] border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 shadow-lg shadow-black/20 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:text-white transition-all duration-300 shrink-0">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
