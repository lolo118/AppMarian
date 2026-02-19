
import React from 'react';
import { TRAINER_INFO } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative group">
              <img 
                src="images/about.jpg" 
                alt="Mariano Witte en acción" 
                className="rounded-3xl shadow-2xl z-10 relative transition-all duration-500 border border-white/5"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1610411322123-0189a6977465?q=80&w=1000";
                }}
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-lime-500/20 rounded-3xl -z-10 hidden sm:block border border-lime-500/30 group-hover:bg-lime-500/30 transition-colors"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-lime-500 font-bold tracking-wider uppercase text-sm mb-2">Conoceme</h2>
            <h3 className="text-5xl font-extrabold text-white mb-6 leading-tight">Sobre Mí</h3>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-light">
              {TRAINER_INFO.bio}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {TRAINER_INFO.specialties.map((spec, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-lime-500/30 transition-colors">
                  <div className="w-8 h-8 bg-lime-500/10 rounded-lg flex items-center justify-center text-lime-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="font-semibold text-slate-200 text-sm">{spec}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-12 border-t border-white/10 pt-10">
              <div>
                <p className="text-4xl font-black text-white">15+</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">Años Exp.</p>
              </div>
              <div>
                <p className="text-4xl font-black text-lime-400">PRO</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">Nivel Juego</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white">SGO</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">Ubicación</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
