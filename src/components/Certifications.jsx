import React from 'react';
import { Award, FileCheck2, Code, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const iconMap = {
    Award: Award,
    FileCheck2: FileCheck2,
    Code: Code
  };

  return (
    <section id="certifications" className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#07090e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Certifications & Learning
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl">
            Verified workshops, programming certificates, and industry assessments enhancing my professional development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert) => {
            const IconComponent = iconMap[cert.iconName] || Award;

            return (
              <div
                key={cert.id}
                className="group rounded-2xl bg-[#090d16] border border-white/[0.08] hover:border-amber-500/30 p-6 sm:p-7 transition-all duration-300 shadow-xl shadow-black/20 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 group-hover:text-amber-300 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-white/[0.06] text-slate-400">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-200 transition-colors mb-1.5">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-mono text-sky-400 mb-3">
                    {cert.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Credential Completed</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
