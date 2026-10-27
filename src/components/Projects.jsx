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
  Smartphone,
  ShoppingBag,
  Lock,
  Globe,
  Palette,
  Sparkles,
  Leaf,
  GraduationCap,
  Building2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { projectsData, motherTerasaColleges } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCollegesNetwork, setShowCollegesNetwork] = useState(false);
  const [collegeFilter, setCollegeFilter] = useState('All');

  const filteredColleges = collegeFilter === 'All'
    ? motherTerasaColleges
    : motherTerasaColleges.filter(c => c.category === collegeFilter);

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t border-white/[0.06] bg-[#07090e]">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sky-600/5 rounded-full blur-[120px] pointer-events-none" />

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
            Detailed breakdown of applied software solutions, live e-commerce platforms, and hands-on contributions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projectsData.map((project) => {
            const isMotherTerasa = project.id === 'mother-terasa-institutions';
            const isPebblezapp = project.id === 'pebblezapp';
            const isSamudhra = project.id === 'samudhra-herbs';

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-[#090d16] border border-white/[0.08] hover:border-emerald-500/30 overflow-hidden shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left/Top: Interactive Browser / Platform Mockup */}
                  <div className="lg:col-span-7 p-6 sm:p-8 bg-gradient-to-br from-[#0c121e] to-[#080d14] border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col justify-between">
                    
                    {/* Mockup Header / Browser Frame */}
                    <div className="w-full rounded-2xl bg-[#080c14] border border-white/10 shadow-xl overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f1624] border-b border-white/[0.08]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          <span className="ml-2 text-[11px] font-mono text-slate-400 flex items-center gap-1.5 truncate">
                            {isMotherTerasa ? (
                              <>
                                <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                <span className="text-slate-300 truncate">https://motherterasakalvi.com/</span>
                              </>
                            ) : isPebblezapp ? (
                              <>
                                <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                <span className="text-slate-300 truncate">https://www.pebblezapp.com/</span>
                              </>
                            ) : isSamudhra ? (
                              <>
                                <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                <span className="text-slate-300 truncate">https://samudhraherbs.com/</span>
                              </>
                            ) : (
                              <>
                                <Sprout className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                <span className="truncate">e-farming-portal.local/crops</span>
                              </>
                            )}
                          </span>
                        </div>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded shrink-0 ${
                          project.isLive 
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1' 
                            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        }`}>
                          {isMotherTerasa ? (
                            <>
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              <span>15 Campuses Live</span>
                            </>
                          ) : project.isLive ? (
                            <>
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              <span>Live Storefront</span>
                            </>
                          ) : (
                            'Mockup Representation'
                          )}
                        </span>
                      </div>

                      {/* Mockup Content */}
                      {isMotherTerasa ? (
                        /* Mother Teresa Group of Institutions Network Mockup */
                        <div className="p-4 sm:p-5 space-y-4 font-sans">
                          {/* Institutional Brand Header */}
                          <div className="p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-sky-500/15 via-indigo-500/10 to-purple-500/10 border border-sky-500/20 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white p-1 border border-white/20 flex items-center justify-center shrink-0 shadow-md">
                                <img 
                                  src="/mother-terasa-logo.png" 
                                  alt="Mother Teresa Logo" 
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<span class="text-indigo-900 font-extrabold text-xs">MT</span>';
                                  }}
                                />
                              </div>
                              <div>
                                <div className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2 flex-wrap">
                                  <span>Mother Teresa Group of Institutions</span>
                                  <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono">
                                    15 Campuses
                                  </span>
                                </div>
                                <div className="text-[11px] text-slate-400">
                                  Approved by AICTE, PCI, INC, TNDALU • Illupur, Pudukkottai
                                </div>
                              </div>
                            </div>
                            <span className="hidden sm:inline-block text-[10px] font-mono bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 px-2.5 py-1 rounded-lg">
                              24+ Years of Educational Trust
                            </span>
                          </div>

                          {/* Metric Widgets (3 columns) */}
                          <div className="grid grid-cols-3 gap-2 sm:gap-3">
                            <div className="bg-slate-900/90 border border-white/[0.06] p-2.5 sm:p-3 rounded-xl">
                              <div className="text-[10px] sm:text-xs text-slate-400">Institutions</div>
                              <div className="text-xs sm:text-sm font-bold text-sky-300 mt-0.5">15 College Sites</div>
                            </div>
                            <div className="bg-slate-900/90 border border-white/[0.06] p-2.5 sm:p-3 rounded-xl">
                              <div className="text-[10px] sm:text-xs text-slate-400">Education Hub</div>
                              <div className="text-xs sm:text-sm font-bold text-white mt-0.5">Higher Studies</div>
                            </div>
                            <div className="bg-slate-900/90 border border-white/[0.06] p-2.5 sm:p-3 rounded-xl">
                              <div className="text-[10px] sm:text-xs text-slate-400">Deployment</div>
                              <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5">Multi-Domain Live</div>
                            </div>
                          </div>

                          {/* Institutional Network Highlights UI */}
                          <div className="bg-slate-900/60 border border-white/[0.06] rounded-xl p-3">
                            <div className="flex items-center justify-between text-xs font-semibold text-slate-300 pb-2 border-b border-white/[0.06]">
                              <span className="flex items-center gap-1.5">
                                <Building2 className="w-3.5 h-3.5 text-sky-400" />
                                <span>Connected Institutional Portals</span>
                              </span>
                              <span className="text-sky-400 text-[11px] font-mono">
                                Direct Campus Links
                              </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2.5">
                              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2 truncate">
                                  <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0" />
                                  <span className="font-medium text-slate-200 truncate">Engineering College</span>
                                </div>
                                <span className="text-slate-400 font-mono text-[10px] shrink-0 ml-1">mtcet.in</span>
                              </div>
                              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2 truncate">
                                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                                  <span className="font-medium text-slate-200 truncate">College of Agriculture</span>
                                </div>
                                <span className="text-slate-400 font-mono text-[10px] shrink-0 ml-1">agricollege.com</span>
                              </div>
                              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2 truncate">
                                  <span className="w-2 h-2 rounded-full bg-pink-400 shrink-0" />
                                  <span className="font-medium text-slate-200 truncate">College of Nursing</span>
                                </div>
                                <span className="text-slate-400 font-mono text-[10px] shrink-0 ml-1">nursing.domain</span>
                              </div>
                              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2 truncate">
                                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                                  <span className="font-medium text-slate-200 truncate">Law College</span>
                                </div>
                                <span className="text-slate-400 font-mono text-[10px] shrink-0 ml-1">law.domain</span>
                              </div>
                            </div>
                          </div>

                          {/* Technical Stack Architecture Pills */}
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 font-mono">
                            <span className="flex items-center gap-1 text-slate-400 truncate">
                              <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" /> Gateway: motherterasakalvi.com
                            </span>
                            <span className="text-sky-300 shrink-0">15 Campuses Linked</span>
                          </div>
                        </div>
                      ) : isPebblezapp ? (
                        /* Pebblezapp E-Commerce Storefront Mockup */
                        <div className="p-4 sm:p-5 space-y-4 font-sans">
                          {/* Store Brand Bar */}
                          <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 border border-pink-500/20 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-300 font-bold text-xs">
                                PZ
                              </div>
                              <div>
                                <div className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                                  <span>Pebblezapp</span>
                                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono">Zoho Commerce</span>
                                </div>
                                <div className="text-[11px] text-slate-400">Statue Painting Kits & DIY Art</div>
                              </div>
                            </div>
                            <span className="hidden sm:inline-block text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2 py-0.5 rounded">
                              COD Available Across India
                            </span>
                          </div>

                          {/* Metric Widgets */}
                          <div className="grid grid-cols-3 gap-2 sm:gap-3">
                            <div className="bg-slate-900/90 border border-white/[0.06] p-2.5 sm:p-3 rounded-xl">
                              <div className="text-[10px] sm:text-xs text-slate-400">Platform</div>
                              <div className="text-xs sm:text-sm font-bold text-amber-300 mt-0.5">Zoho Commerce</div>
                            </div>
                            <div className="bg-slate-900/90 border border-white/[0.06] p-2.5 sm:p-3 rounded-xl">
                              <div className="text-[10px] sm:text-xs text-slate-400">Category</div>
                              <div className="text-xs sm:text-sm font-bold text-white mt-0.5">DIY Art & Kits</div>
                            </div>
                            <div className="bg-slate-900/90 border border-white/[0.06] p-2.5 sm:p-3 rounded-xl">
                              <div className="text-[10px] sm:text-xs text-slate-400">Deployment</div>
                              <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5">Live Production</div>
                            </div>
                          </div>

                          {/* Sample Catalog Products UI */}
                          <div className="bg-slate-900/60 border border-white/[0.06] rounded-xl p-3">
                            <div className="flex items-center justify-between text-xs font-semibold text-slate-300 pb-2 border-b border-white/[0.06]">
                              <span>Featured Store Collections</span>
                              <span className="text-sky-400 text-[11px] flex items-center gap-1">
                                <ShoppingBag className="w-3 h-3" /> Live Products
                              </span>
                            </div>
                            <div className="space-y-2 mt-2">
                              <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                                <div className="flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-pink-400" />
                                  <span className="font-medium text-slate-200">DIY Statue Painting Kits (Kids & Adults)</span>
                                </div>
                                <span className="text-emerald-400 font-mono text-[11px]">In Stock</span>
                              </div>
                              <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                                <div className="flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                                  <span className="font-medium text-slate-200">Creative Activity & Hobby Craft Sets</span>
                                </div>
                                <span className="text-emerald-400 font-mono text-[11px]">In Stock</span>
                              </div>
                            </div>
                          </div>

                          {/* Technical Stack Pills */}
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 font-mono">
                            <span className="flex items-center gap-1 text-slate-400">
                              <Globe className="w-3.5 h-3.5 text-sky-400" /> Active Storefront: pebblezapp.com
                            </span>
                            <span className="text-amber-300">Zoho Commerce Store</span>
                          </div>
                        </div>
                      ) : isSamudhra ? (
                        /* Samudhra Herbs WooCommerce Storefront Mockup */
                        <div className="p-4 sm:p-5 space-y-4 font-sans">
                          {/* Store Brand Bar */}
                          <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-green-500/10 border border-emerald-500/25 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300">
                                <Leaf className="w-4 h-4 text-emerald-400" />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                                  <span>Samudhra Herbs</span>
                                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono">WooCommerce</span>
                                </div>
                                <div className="text-[11px] text-slate-400">Natural & Authentic Herbal Care</div>
                              </div>
                            </div>
                            <span className="hidden sm:inline-block text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2 py-0.5 rounded">
                              Hair • Skin • Healthcare
                            </span>
                          </div>

                          {/* Metric Widgets */}
                          <div className="grid grid-cols-3 gap-2 sm:gap-3">
                            <div className="bg-slate-900/90 border border-white/[0.06] p-2.5 sm:p-3 rounded-xl">
                              <div className="text-[10px] sm:text-xs text-slate-400">Platform</div>
                              <div className="text-xs sm:text-sm font-bold text-emerald-300 mt-0.5">WooCommerce</div>
                            </div>
                            <div className="bg-slate-900/90 border border-white/[0.06] p-2.5 sm:p-3 rounded-xl">
                              <div className="text-[10px] sm:text-xs text-slate-400">Category</div>
                              <div className="text-xs sm:text-sm font-bold text-white mt-0.5">Herbal Care</div>
                            </div>
                            <div className="bg-slate-900/90 border border-white/[0.06] p-2.5 sm:p-3 rounded-xl">
                              <div className="text-[10px] sm:text-xs text-slate-400">Deployment</div>
                              <div className="text-xs sm:text-sm font-bold text-teal-400 mt-0.5">Live Production</div>
                            </div>
                          </div>

                          {/* Sample Catalog Products UI */}
                          <div className="bg-slate-900/60 border border-white/[0.06] rounded-xl p-3">
                            <div className="flex items-center justify-between text-xs font-semibold text-slate-300 pb-2 border-b border-white/[0.06]">
                              <span>Featured Herbal Collections</span>
                              <span className="text-emerald-400 text-[11px] flex items-center gap-1">
                                <ShoppingBag className="w-3 h-3" /> Live Storefront
                              </span>
                            </div>
                            <div className="space-y-2 mt-2">
                              <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                                <div className="flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                  <span className="font-medium text-slate-200">Herbal Haircare Solutions & Oils</span>
                                </div>
                                <span className="text-emerald-400 font-mono text-[11px]">In Stock</span>
                              </div>
                              <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                                <div className="flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-teal-400" />
                                  <span className="font-medium text-slate-200">Natural Skincare & Wellness Formulations</span>
                                </div>
                                <span className="text-emerald-400 font-mono text-[11px]">In Stock</span>
                              </div>
                            </div>
                          </div>

                          {/* Technical Stack Pills */}
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 font-mono">
                            <span className="flex items-center gap-1 text-slate-400">
                              <Globe className="w-3.5 h-3.5 text-emerald-400" /> Active Storefront: samudhraherbs.com
                            </span>
                            <span className="text-teal-300">WordPress CMS</span>
                          </div>
                        </div>
                      ) : (
                        /* E-Farming Agriculture Dashboard Mockup */
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
                      )}
                    </div>

                    {/* Architecture / Timeline Tag */}
                    <div className="mt-4 text-[11px] text-slate-400 flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${project.isLive ? 'bg-emerald-400' : 'bg-sky-400'}`} />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  {/* Right/Bottom: Project Details & Actions */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      {/* Category, Platform & Year Tags */}
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {project.category}
                        </span>
                        {project.platform && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono">
                            {project.platform}
                          </span>
                        )}
                        <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {project.year}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 flex items-center gap-2">
                        <span>{project.title}</span>
                        {project.isLive && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Live
                          </span>
                        )}
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
                          Core Modules & Highlights:
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
                    <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3 flex-wrap">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-sky-600 hover:from-emerald-400 hover:via-teal-500 hover:to-sky-500 shadow-md shadow-emerald-600/25 hover:shadow-emerald-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                        >
                          <span>
                            {project.id === 'mother-terasa-institutions'
                              ? 'Visit Main Website'
                              : project.id === 'samudhra-herbs'
                              ? 'View Live Project'
                              : 'Visit Live Website'}
                          </span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}

                      {isMotherTerasa && (
                        <button
                          onClick={() => setShowCollegesNetwork(!showCollegesNetwork)}
                          className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                            showCollegesNetwork
                              ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25 hover:bg-sky-400'
                              : 'text-sky-300 hover:text-white bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 hover:border-sky-500/50'
                          }`}
                        >
                          <Building2 className="w-4 h-4" />
                          <span>{showCollegesNetwork ? 'Hide College Websites' : 'Explore College Websites (15)'}</span>
                          {showCollegesNetwork ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      )}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                          project.liveUrl
                            ? 'text-slate-300 hover:text-white bg-slate-900 border border-white/10 hover:border-white/20'
                            : 'text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-indigo-600/25'
                        }`}
                      >
                        <span>View Project Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      {!project.liveUrl && (
                        <span className="text-[11px] text-slate-500 italic">
                          Academic repository archive
                        </span>
                      )}
                    </div>

                  </div>

                </div>

                {/* Expandable Explore College Websites Section */}
                {isMotherTerasa && showCollegesNetwork && (
                  <div className="p-6 sm:p-8 bg-[#0b101c] border-t border-white/[0.08] animate-fadeIn">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-sky-500/15 text-sky-300 text-[11px] font-mono mb-1.5">
                          <GraduationCap className="w-3.5 h-3.5" />
                          <span>INSTITUTIONAL CAMPUS DIRECTORY</span>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                          Explore All 15 College Websites
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-400 mt-1">
                          Specialized college portals across healthcare, engineering, agriculture, law, and education. Click any card to visit the official live site.
                        </p>
                      </div>

                      <button
                        onClick={() => setShowCollegesNetwork(false)}
                        className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white bg-slate-900 border border-white/10 hover:border-white/20 transition-all shrink-0"
                      >
                        <span>Hide Directory</span>
                        <ChevronUp className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Category Filter Chips */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {[
                        'All',
                        'Medical & Healthcare',
                        'Engineering & Tech',
                        'Arts, Law & Education',
                        'Agriculture, Sports & School'
                      ].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setCollegeFilter(cat)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                            collegeFilter === cat
                              ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-indigo-500/20'
                              : 'bg-slate-900/90 text-slate-400 hover:text-white border border-white/[0.08] hover:border-white/20'
                          }`}
                        >
                          {cat} {cat === 'All' ? `(${motherTerasaColleges.length})` : `(${motherTerasaColleges.filter(c => c.category === cat).length})`}
                        </button>
                      ))}
                    </div>

                    {/* Colleges Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredColleges.map((college) => (
                        <a
                          key={college.id}
                          href={college.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group p-4 rounded-2xl bg-[#080d17] border border-white/[0.06] hover:border-sky-500/40 hover:bg-[#0c1322] shadow-lg hover:shadow-sky-500/5 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${college.badgeColor}`}>
                                {college.category}
                              </span>
                              <div className="w-6 h-6 rounded-md bg-white/[0.04] flex items-center justify-center text-slate-400 group-hover:text-sky-400 group-hover:bg-sky-500/10 transition-colors">
                                <ExternalLink className="w-3.5 h-3.5" />
                              </div>
                            </div>

                            <div className="text-[11px] font-mono text-slate-400 mb-0.5">Mother Terasa</div>
                            <h5 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-1">
                              {college.name}
                            </h5>
                            <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                              {college.description}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px]">
                            <span className="font-mono text-slate-400 group-hover:text-slate-300 truncate max-w-[170px]">
                              {college.link.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                            </span>
                            <span className="inline-flex items-center gap-1 text-sky-400 font-medium group-hover:translate-x-0.5 transition-transform text-[11px]">
                              <span>Visit Site</span>
                              <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>{selectedProject.title}</span>
                  {selectedProject.isLive && (
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                      Live
                    </span>
                  )}
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

              {selectedProject.id === 'mother-terasa-institutions' && (
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>15 Connected College Websites Directory</span>
                    <span className="text-sky-400 font-mono text-[10px]">Verified Live Portals</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
                    {motherTerasaColleges.map((c) => (
                      <a
                        key={c.id}
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-white/[0.06] hover:border-sky-500/30 text-xs text-slate-200 group transition-colors"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <GraduationCap className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span className="truncate group-hover:text-sky-300">{c.name}</span>
                        </div>
                        <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-sky-400 shrink-0 ml-1" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2 border-t border-white/[0.06] text-xs text-slate-400 flex items-center justify-between flex-wrap gap-2">
                <span>Duration / Type: <strong className="text-slate-200">{selectedProject.duration}</strong></span>
                {selectedProject.liveUrl && (
                  <span className="text-sky-400">Domain: {selectedProject.liveUrl}</span>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-[#0f1422] border-t border-white/[0.08] flex items-center justify-between gap-3">
              {selectedProject.liveUrl ? (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
                >
                  <span>
                    {selectedProject.id === 'mother-terasa-institutions'
                      ? 'Visit Main Website'
                      : selectedProject.id === 'samudhra-herbs'
                      ? 'View Live Project'
                      : 'Visit Live Website'}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : <div />}

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
