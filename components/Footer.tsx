
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 py-16 border-t border-white/5 relative overflow-hidden">
      {/* Foto real de Mariano de espalda con su nombre */}
      <div className="absolute right-0 bottom-0 w-1/4 h-full opacity-10 pointer-events-none hidden lg:block">
        <img 
          src="/images/branding.jpg" 
          className="w-full h-full object-cover object-left grayscale" 
          alt="Mariano Witte Branding"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/5 pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-lime-500 rounded flex items-center justify-center text-black font-bold">W</div>
              <span className="text-xl font-bold text-white">Witte<span className="text-lime-400">PadelPro</span></span>
            </div>
            <p className="max-w-md text-slate-500">
              Formación profesional de pádel con enfoque en la técnica y la mentalidad competitiva. Elevá tu juego en Santiago del Estero.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Explorar</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-lime-400 transition-colors">Sobre Mariano</a></li>
              <li><a href="#lessons" className="hover:text-lime-400 transition-colors">Clases</a></li>
              <li><a href="#booking" className="hover:text-lime-400 transition-colors">Reservar Turno</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contacto</h4>
            <p className="text-slate-500 mb-2 font-bold text-white uppercase tracking-tighter">Mariano Witte</p>
            <p className="text-slate-500 mb-4 italic">Santiago del Estero, Argentina</p>
            <div className="flex gap-4">
              <div className="px-4 py-2 border border-white/10 rounded-full text-xs font-bold text-lime-400">#WittePadelPro</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
          <p>© 2024 Witte Padel Pro • Todos los derechos reservados</p>
          <p>Potenciando el Pádel Argentino</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
