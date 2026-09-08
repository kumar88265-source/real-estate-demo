'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  PhoneCall, 
  Download, 
  CheckCircle2, 
  SlidersHorizontal, 
  Sparkles, 
  X, 
  Send 
} from 'lucide-react';
import { PROPERTIES } from './data/properties';

export default function Home() {
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedBudget, setSelectedBudget] = useState('All');

  const [activeModalProperty, setActiveModalProperty] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((item) => {
      const matchCity = selectedCity === 'All' || item.city === selectedCity;
      const matchType = selectedType === 'All' || item.type === selectedType;
      const matchBudget = selectedBudget === 'All' || item.priceRange === selectedBudget;
      return matchCity && matchType && matchBudget;
    });
  }, [selectedCity, selectedType, selectedBudget]);

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitted(true);
    const message = encodeURIComponent(
      `Hello, I am interested in *${activeModalProperty?.title}* (${activeModalProperty?.location}).\nName: ${formData.name}\nPhone: ${formData.phone}`
    );
    const whatsappUrl = `https://wa.me/919999999999?text=${message}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setActiveModalProperty(null);
      setIsSubmitted(false);
      setFormData({ name: '', phone: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#07080B] text-slate-100 selection:bg-amber-500 selection:text-black">
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-[32rem] h-[32rem] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-white/5 bg-[#08090C]/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-200 flex items-center justify-center text-black font-extrabold text-xl shadow-lg shadow-amber-500/20">
              E
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider text-white">ELITE<span className="text-amber-400">ACRES</span></span>
              <span className="hidden sm:inline-block ml-2 text-[10px] tracking-widest text-slate-400 uppercase border-l border-white/15 pl-2 font-mono">
                NCR Corridors
              </span>
            </div>
          </div>

          <a 
            href="tel:+919999999999" 
            className="flex items-center gap-2 text-sm text-slate-300 hover:text-white border border-white/10 px-4 py-2 rounded-full glass-panel hover:border-amber-400/40 transition duration-300"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline font-medium">+91 9999 000 000</span>
            <span className="sm:hidden font-medium">Call</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" /> High-Growth Investment Corridors
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Curated Luxury & <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              Plotted Developments
            </span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg mb-10">
            Exclusive handpicked inventory in Gurugram, Kharkhoda IMT, and top NCR corridors.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="glass-panel p-4 md:p-6 rounded-3xl shadow-2xl max-w-4xl mx-auto text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" /> Location / Market
              </label>
              <select 
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-[#121622] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="All">All Micro-Markets</option>
                <option value="Gurugram">Gurugram (Golf Course / Dwarka Exp.)</option>
                <option value="Kharkhoda">Kharkhoda (IMT Growth Corridor)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-amber-400" /> Property Segment
              </label>
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-[#121622] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="All">All Property Types</option>
                <option value="Plotted Development">Plotted Developments</option>
                <option value="Apartment">Luxury Apartments</option>
                <option value="Luxury Floor">Independent Luxury Floors</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" /> Budget Bracket
              </label>
              <select 
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full bg-[#121622] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="All">Any Budget</option>
                <option value="under-2cr">Under ₹ 2.00 Cr</option>
                <option value="2cr-5cr">₹ 2.00 Cr - ₹ 5.00 Cr</option>
                <option value="above-5cr">Ultra-Luxury (₹ 5.00 Cr+)</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white tracking-tight">Available Projects</h2>
          <p className="text-slate-400 text-sm">Showing {filteredProperties.length} verified listings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProperties.map((prop) => (
              <motion.div
                key={prop.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col group hover:border-amber-400/40 transition duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={prop.image} 
                    alt={prop.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-black/30" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-amber-300 border border-amber-400/20">
                      {prop.type}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <p className="text-amber-400 font-bold text-xl">{prop.price}</p>
                    <p className="text-xs text-slate-300">{prop.size}</p>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                      {prop.developer}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition">
                      {prop.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      {prop.location}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {prop.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] bg-white/5 border border-white/5 px-2.5 py-1 rounded-md text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => setActiveModalProperty(prop)}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold py-3 px-4 rounded-xl text-sm transition duration-300 shadow-lg shadow-amber-500/10 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    Get Brochure & Price Sheet
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeModalProperty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-panel relative w-full max-w-md p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl bg-[#0e111a]"
            >
              <button 
                onClick={() => setActiveModalProperty(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-xl font-bold text-white mb-2">Redirecting to WhatsApp...</h3>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-1">
                      Direct WhatsApp Access
                    </span>
                    <h3 className="text-xl font-bold text-white">Project Brochure Request</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Get full payment plan for <span className="text-white font-medium">{activeModalProperty.title}</span>.
                    </p>
                  </div>

                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs text-slate-300 block mb-1 font-medium">Your Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#161a29] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-slate-300 block mb-1 font-medium">WhatsApp Number</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#161a29] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold py-3.5 rounded-xl text-sm transition duration-300 shadow-lg shadow-emerald-500/20 mt-6 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Get PDF on WhatsApp
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
