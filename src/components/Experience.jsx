import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#07090e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <span>CAREER JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Where I've Worked
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl">
            My professional background across commercial web development, digital platforms, and enterprise software training.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Experience Timeline Cards */}
        <div className="relative pl-0 md:pl-6 space-y-8 before:absolute before:inset-0 before:left-0 md:before:left-3 before:w-[2px] before:bg-gradient-to-b before:from-sky-500 before:via-indigo-500 before:to-transparent before:hidden md:before:block">
          {experienceData.map((exp, index) => {
            const isCurrent = exp.id === 'exp-1';

            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline Node Dot for Desktop */}
                <div className="hidden md:flex absolute -left-[31px] top-6 w-6 h-6 rounded-full bg-[#090d16] border-2 border-indigo-400 items-center justify-center shadow-md shadow-indigo-500/30 group-hover:scale-125 transition-transform duration-200">
                  <div className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-sky-400 animate-pulse' : 'bg-indigo-400'}`} />
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl bg-[#090d16] border border-white/[0.08] hover:border-indigo-500/30 p-6 sm:p-8 transition-all duration-300 shadow-xl shadow-black/20 hover:-translate-y-0.5">
                  
                  {/* Top Bar: Role & Duration */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                          {exp.role}
                        </h3>
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            Current Role
                          </span>
                        )}
                        {exp.projectAssignment && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                            Project: {exp.projectAssignment}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-slate-300 font-semibold text-base mt-1">
                        <Building2 className="w-4 h-4 text-sky-400 shrink-0" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs text-slate-400">
                      <div className="inline-flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-md border border-white/[0.06]">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-md border border-white/[0.06]">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Highlights / Responsibilities */}
                  {exp.highlights && (
                    <div className="mb-6 space-y-2">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                        Key Responsibilities & Focus:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {exp.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies Tags */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono text-slate-400 mr-2">Technologies:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 text-sky-300 border border-sky-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
