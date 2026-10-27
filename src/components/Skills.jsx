import React from 'react';
import { 
  Layout, 
  Database, 
  ShoppingBag, 
  Terminal, 
  TrendingUp, 
  CheckCircle,
  Code2
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const categoryIconMap = {
    Layout: Layout,
    Database: Database,
    ShoppingBag: ShoppingBag,
    Terminal: Terminal,
    TrendingUp: TrendingUp
  };

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#07090e]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <span>TOOLKIT & EXPERTISE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My Technical Toolkit
          </h2>
          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl">
            A comprehensive overview of frontend technologies, backend languages, databases, CMS platforms, and developer tooling I use.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((cat, index) => {
            const IconComponent = categoryIconMap[cat.iconName] || Code2;
            const isLarge = index === 0; // Highlight Frontend as primary

            return (
              <div
                key={cat.category}
                className={`group rounded-2xl bg-[#090d16] border border-white/[0.08] p-4 sm:p-6 transition-all duration-300 hover:border-sky-500/30 hover:shadow-xl hover:shadow-sky-500/5 flex flex-col justify-between ${
                  isLarge ? 'md:col-span-2 lg:col-span-1 border-sky-500/20 shadow-sm shadow-sky-500/10' : ''
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-sky-500/15 via-indigo-500/15 to-purple-500/15 border border-white/10 flex items-center justify-center text-sky-400 group-hover:text-white group-hover:scale-105 transition-all duration-300 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors truncate">
                        {cat.category}
                      </h3>
                      <span className="text-xs text-slate-400 block line-clamp-1">
                        {cat.description}
                      </span>
                    </div>
                  </div>

                  {/* Skills Tags Grid */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all duration-200 ${
                          skill.highlight
                            ? 'bg-slate-800/80 text-sky-200 border border-sky-500/25 hover:border-sky-400/50 hover:bg-slate-800'
                            : 'bg-slate-900/90 text-slate-300 border border-white/[0.06] hover:border-white/20 hover:text-white'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${skill.highlight ? 'bg-sky-400' : 'bg-slate-500'}`} />
                        <span className="break-words">{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Indicator */}
                <div className="mt-5 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[10px] sm:text-[11px] text-slate-500 font-mono">
                  <span>{cat.skills.length} competencies</span>
                  <span className="text-slate-400 group-hover:text-sky-400 transition-colors">Verified Details</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
