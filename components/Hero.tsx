
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-black">
      {/* Imagen real de Mariano (Foto 1) */}
      <img
        src="/images/hero.jpg"
        alt="Mariano Witte en acción"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center opacity-70"
      />
      
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
            </span>
            Cupos Disponibles - 2024
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-6 leading-[1.1]">
            Entrená con <br />
            <span className="text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.3)]">Mariano Witte</span>
          </h1>
          <p className="text-xl leading-8 text-slate-300 mb-10 max-w-lg">
            Llevá tu padel al siguiente nivel con una metodología profesional de alto rendimiento en Santiago del Estero.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="inline-block rounded-xl bg-lime-500 px-8 py-4 text-center text-lg font-bold text-black shadow-lg shadow-lime-500/40 hover:bg-lime-400 hover:-translate-y-1 transition-all duration-300">
              Reservar mi Clase
            </a>
            <a href="#lessons" className="inline-block rounded-xl border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-center text-lg font-bold text-white hover:bg-white/10 transition-all">
              Ver Programas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
