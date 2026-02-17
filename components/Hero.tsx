
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2000&auto=format&fit=crop"
        alt="Cancha de Padel"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-30 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6 leading-tight">
            Elevá tu juego con <span className="text-lime-400 drop-shadow-[0_0_8px_rgba(163,230,53,0.5)]">Mariano Witte</span>
          </h1>
          <p className="text-lg leading-8 text-slate-400 mb-10">
            Clases personalizadas de alto rendimiento. Perfeccioná tu técnica y táctica en las mejores canchas de la región. Entrenamientos adaptados a todos los niveles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="inline-block rounded-xl bg-lime-500 px-8 py-4 text-center text-lg font-bold text-black shadow-lg shadow-lime-500/20 hover:bg-lime-400 transition-all">
              Reservar mi Clase
            </a>
            <a href="#lessons" className="inline-block rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 text-center text-lg font-bold text-white hover:bg-white/10 transition-all">
              Ver Programas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
