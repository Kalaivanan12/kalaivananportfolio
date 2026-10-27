import React from 'react';
import { Bot, Sparkles, TrendingUp, Code2, Cpu, CheckCircle } from 'lucide-react';
import { aiSkillsData } from '../data/portfolioData';

export default function AiSkills() {
  const iconMap = {
    Bot: Bot,
    Sparkles: Sparkles,
    TrendingUp: TrendingUp,
    Code2: Code2
  };

  return (
    <section id="ai-skills" className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#07090e]/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>AI & DIGITAL MARKETING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            AI & Digital Marketing Skills
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl">
            Leveraging modern artificial intelligence tools, prompt engineering, and digital marketing strategies to build accelerated, high-impact web solutions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiSkillsData.map((category) => {
            const IconComponent = iconMap[category.iconName] || Bot;

            return (
              <div
                key={category.id}
                className={`group rounded-2xl bg-[#090d16] border transition-all duration-300 p-6 sm:p-7 shadow-xl shadow-black/20 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between ${category.accentClass}`}
              >
                {/* Subtle top card glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-bl-full pointer-events-none" />

                <div>
                  {/* Card Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500/15 via-indigo-500/15 to-purple-500/15 border border-white/10 flex items-center justify-center text-sky-300 group-hover:scale-110 group-hover:text-white transition-all duration-300 shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                        {category.category}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tags List */}
                  <div className="flex flex-wrap gap-2 pt-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 text-slate-200 border border-white/[0.08] hover:border-white/20 hover:text-white transition-all duration-200"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${category.dotClass}`} />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-3.5 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{category.skills.length} core competencies</span>
                  <span className="text-slate-400 group-hover:text-sky-400 transition-colors flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-sky-400" />
                    <span>Applied Skill</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
