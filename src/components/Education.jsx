import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, MapPin } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#07090e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <span>QUALIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Academic Background
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl">
            My formal computer science degrees, foundational coursework, and academic milestones.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <div
              key={edu.id}
              className="group rounded-3xl bg-[#090d16] border border-white/[0.08] hover:border-sky-500/30 p-6 sm:p-8 transition-all duration-300 shadow-xl shadow-black/20 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sky-500/10 to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500/15 via-indigo-500/15 to-purple-500/15 border border-sky-500/25 flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:text-white transition-all duration-300">
                  <GraduationCap className="w-7 h-7" />
                </div>

                <div className="flex flex-col items-end">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/15 text-sky-300 border border-sky-500/30">
                    GPA: {edu.gpa}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 mt-1">
                    {edu.level}
                  </span>
                </div>
              </div>

              {/* Degree Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                {edu.degree}
              </h3>

              {/* Institution */}
              <div className="text-slate-300 font-medium text-sm sm:text-base mb-4 flex items-center gap-1.5">
                <span>{edu.institution}</span>
              </div>

              {/* Duration & Timeline */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/[0.06] text-xs text-slate-400 font-mono mb-6">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                <span>{edu.duration}</span>
              </div>

              {/* Key Study Areas */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                  <span>Key Coursework & Focus:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {edu.keyAreas.map((area, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs bg-slate-900/90 text-slate-300 border border-white/[0.06]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
