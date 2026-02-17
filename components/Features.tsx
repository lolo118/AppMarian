
import React from 'react';
import { TRAINER_INFO } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1610411322123-0189a6977465?q=80&w=800&auto=format&fit=crop" 
                alt="Carlos Méndez en acción" 
                className="rounded-3xl shadow-2xl z-10 relative grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-lime-500/20 rounded-3xl -z-10 hidden sm:block border border-lime-500/30"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-white/10 rounded-3xl -translate-x-4 -translate-y-4 -z-20"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-lime-500 font-bold tracking-wider uppercase text-sm mb-2">Tu Entrenador</h2>
            <h3 className="text-4xl font-extrabold text-white mb-6">{TRAINER_INFO.name}</h3>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed italic">
              "{TRAINER_INFO.bio}"
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {TRAINER_INFO.specialties.map((spec, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 text-lime-500">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium text-slate-300">{spec}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex gap-10 border-t border-white/5 pt-10">
              <div>
                <p className="text-3xl font-extrabold text-white">15+</p>
                <p className="text-slate-500 text-sm">Años de Exp.</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">500+</p>
                <p className="text-slate-500 text-sm">Alumnos Activos</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">Elite</p>
                <p className="text-slate-500 text-sm">Ranking WPT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
