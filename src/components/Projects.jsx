import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  Database, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  X, 
  Sprout, 
  ArrowRight,
  Code2,
  Server,
  Smartphone
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#07090e]">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <span>SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Selected Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl">
            Detailed breakdown of applied software solutions, architecture designs, and hands-on contributions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#090d16] border border-white/[0.08] hover:border-emerald-500/30 overflow-hidden shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Left/Top: Custom CSS Agriculture/E-Commerce Dashboard Mockup */}
                <div className="lg:col-span-7 p-6 sm:p-8 bg-gradient-to-br from-[#0c121e] to-[#080d14] border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col justify-between">
                  
                  {/* Mockup Header / Browser Frame */}
                  <div className="w-full rounded-2xl bg-[#080c14] border border-white/10 shadow-xl overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f1624] border-b border-white/[0.08]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 text-[11px] font-mono text-slate-400 flex items-center gap-1">
                          <Sprout className="w-3.5 h-3.5 text-emerald-400" />
                          <span>e-farming-portal.local/crops</span>
                        </span>
                      </div>
                      <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
                        Mockup Representation
                      </span>
                    </div>

                    {/* Mockup Dashboard Content */}
                    <div className="p-4 sm:p-5 space-y-4 font-sans">
                      {/* Metric Widgets */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        <div className="bg-slate-900/90 border border-white/[0.06] p-2.5 sm:p-3 rounded-xl">
                          <div className="text-[10px] sm:text-xs text-slate-400">Direct Farmers</div>
                          <div className="text-sm sm:text-base font-bold text-white mt-0.5">Verified Hub</div>
                        </div>
                        <div className="bg-slate-900/90 border border-white/[0.06] p-2.5 sm:p-3 rounded-xl">
                          <div className="text-[10px] sm:text-xs text-slate-400">Crop Listings</div>
                          <div className="text-sm sm:text-base font-bold text-emerald-400 mt-0.5">Direct Pricing</div>
                        </div>
                        <div className="bg-slate-900/90 border border-white/[0.06] p-2.5 sm:p-3 rounded-xl">
                          <div className="text-[10px] sm:text-xs text-slate-400">Transactions</div>
                          <div className="text-sm sm:text-base font-bold text-sky-400 mt-0.5">Integrated DB</div>
                        </div>
                      </div>

                      {/* Sample Crop Listing UI */}
                      <div className="bg-slate-900/60 border border-white/[0.06] rounded-xl p-3">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-300 pb-2 border-b border-white/[0.06]">
                          <span>Active Market Inventory</span>
                          <span className="text-emerald-400 text-[11px]">Real-time Valuation</span>
                        </div>
                        <div className="space-y-2 mt-2">
                          <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-400" />
                              <span className="font-medium text-slate-200">Organic Basmati Paddy</span>
                            </div>
                            <span className="text-slate-400 font-mono">₹2,450 / Quintal</span>
                          </div>
                          <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-amber-400" />
                              <span className="font-medium text-slate-200">Fresh Turmeric (Grade A)</span>
                            </div>
                            <span className="text-slate-400 font-mono">₹6,800 / Quintal</span>
                          </div>
                        </div>
                      </div>

                      {/* Technical Stack Architecture Pills */}
                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 font-mono">
                        <span className="flex items-center gap-1 text-slate-400">
                          <Database className="w-3.5 h-3.5 text-purple-400" /> MySQL Engine Connected
                        </span>
                        <span className="text-sky-400">Java MVC Backend</span>
                      </div>
                    </div>
                  </div>

                  {/* Architecture Disclaimer */}
                  <div className="mt-4 text-[11px] text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Academic Project Completed in 2024 (6-Month Implementation)</span>
                  </div>
                </div>

                {/* Right/Bottom: Project Details & Actions */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    {/* Category & Year Tag */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {project.category}
                      </span>
                      <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>

                    {/* Contribution Snapshot */}
                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-white/[0.08] mb-5">
                      <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider font-mono mb-1">
                        My Direct Contribution:
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {project.myContribution}
                      </p>
                    </div>

                    {/* Key Features Preview */}
                    <div className="space-y-1.5 mb-6">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Core Functional Modules:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {project.keyFeatures.slice(0, 4).map((feat, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 text-slate-300 border border-white/[0.08]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-indigo-600/25 transition-all duration-200"
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <span className="text-[11px] text-slate-500 italic">
                      Academic repository archive
                    </span>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Future Projects Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-[#090d16]/80 border border-white/[0.06] text-center max-w-xl mx-auto">
          <div className="text-xs font-mono text-sky-400 font-semibold uppercase mb-1">Extensible Showcase</div>
          <p className="text-xs text-slate-400">
            More commercial & client projects from my work at Cipher Mutex will be added as public release permissions are authorized.
          </p>
        </div>

      </div>

      {/* In-depth Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div 
            className="w-full max-w-2xl bg-[#090d16] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#0f1422] border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  {selectedProject.category} • {selectedProject.year}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed">
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Overview</h4>
                <p>{selectedProject.fullDescription}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">My Contribution</h4>
                <div className="p-4 rounded-xl bg-slate-900 border border-white/[0.08] text-slate-200">
                  {selectedProject.myContribution}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">All Implemented Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.keyFeatures.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 bg-slate-900/60 p-2 rounded-lg border border-white/[0.04]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Architecture & Stack</h4>
                <div className="space-y-2">
                  {selectedProject.architectureHighlights.map((arch, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-white/[0.06] text-xs">
                      <span className="text-slate-400 font-medium">{arch.label}:</span>
                      <span className="text-sky-300 font-mono mt-0.5 sm:mt-0">{arch.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-white/[0.06] text-xs text-slate-400">
                Duration: <strong className="text-slate-200">{selectedProject.duration}</strong>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-[#0f1422] border-t border-white/[0.08] flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
