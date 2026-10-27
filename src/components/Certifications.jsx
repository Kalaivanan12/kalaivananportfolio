import React from 'react';
import { 
  Award, 
  FileCheck2, 
  Code, 
  ShieldCheck, 
  CheckCircle2, 
  GraduationCap, 
  Building2, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Layers 
} from 'lucide-react';
import { mernCertification, certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const iconMap = {
    Award: Award,
    FileCheck2: FileCheck2,
    Code: Code
  };

  const getTechBadgeStyle = (tech) => {
    switch (tech) {
      case 'MongoDB':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:border-emerald-500/50';
      case 'Express.js':
        return 'bg-slate-800 text-slate-200 border-slate-700 hover:border-slate-500';
      case 'React.js':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:border-cyan-500/50';
      case 'Node.js':
        return 'bg-green-500/10 text-green-300 border-green-500/30 hover:border-green-500/50';
      case 'JavaScript':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/30 hover:border-amber-500/50';
      case 'Full Stack Web Development':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/30 hover:border-purple-500/50';
      default:
        return 'bg-slate-900 text-slate-300 border-white/[0.08]';
    }
  };

  return (
    <section id="certifications" className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#07090e]">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CERTIFICATIONS & LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Certifications & Learning
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Professional training programs, full-stack specialization, and industry-recognized credentials that validate my web development expertise.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Featured Flagship Certification: Full Stack MERN at Nschool Academy */}
        <div className="mb-14">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0c1322] via-[#090d16] to-[#100e24] border border-cyan-500/30 hover:border-cyan-400/50 p-6 sm:p-9 lg:p-10 transition-all duration-300 shadow-2xl shadow-cyan-950/20 group">
            {/* Ambient Corner Flare */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

            <div className="relative z-10">
              {/* Header Strip */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shadow-lg shadow-cyan-500/10 group-hover:scale-105 group-hover:text-cyan-200 transition-all duration-300 shrink-0">
                    <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono uppercase tracking-wider mb-1">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span>{mernCertification.type}</span>
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      {mernCertification.statusBadge}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono self-start sm:self-auto">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Credential Completed</span>
                </div>
              </div>

              {/* Course Name Title */}
              <div className="my-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight group-hover:text-cyan-100 transition-colors">
                  {mernCertification.courseName}
                </h3>
              </div>

              {/* Key Meta Information Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {/* Training Institute */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-white/[0.08] hover:border-cyan-500/30 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-400">Training Institute</div>
                    <div className="text-xs sm:text-sm font-bold text-white">{mernCertification.institute}</div>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-white/[0.08] hover:border-purple-500/30 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-400">Duration</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-200 flex items-center gap-1.5 flex-wrap">
                      <span>{mernCertification.duration}</span>
                      <span className="text-[11px] font-mono text-slate-400">({mernCertification.durationFormat})</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-white/[0.08] hover:border-rose-500/30 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-400">Location</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-200">{mernCertification.location}</div>
                  </div>
                </div>
              </div>

              {/* Course Overview Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {mernCertification.description}
              </p>

              {/* Core Competencies Grid */}
              <div className="mb-7">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Core Engineering Competencies:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {mernCertification.keyCompetencies.map((comp, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-white/[0.04] text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Badges Section */}
              <div className="pt-6 border-t border-white/[0.08]">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Verified Technology Stack:</span>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {mernCertification.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-medium border shadow-sm transition-all duration-200 hover:scale-105 ${getTechBadgeStyle(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Additional Verified Certifications Sub-grid */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm sm:text-base font-bold text-slate-300 uppercase font-mono tracking-wider">
              Additional Verified Credentials & Workshops
            </h3>
          </div>

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

                    <h4 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors mb-1.5">
                      {cert.title}
                    </h4>

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

      </div>
    </section>
  );
}
