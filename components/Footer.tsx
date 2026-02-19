
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 py-16 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/5 pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-lime-500 rounded flex items-center justify-center text-black font-bold">W</div>
              <span className="text-xl font-bold text-white">Mariano<span className="text-lime-400">Witte</span></span>
            </div>
            <p className="max-w-md text-slate-500 text-sm">
              Profesor de Pádel - Alto Rendimiento. Mi formación profesional está enfocada en tu técnica avanzada y mentalidad ganadora. Entrená conmigo en Santiago del Estero.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Navegación</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="hover:text-lime-400 transition-colors">Sobre Mí</a></li>
              <li><a href="#lessons" className="hover:text-lime-400 transition-colors">Mis Clases</a></li>
              <li><a href="#pricing" className="hover:text-lime-400 transition-colors">Packs y Precios</a></li>
              <li><a href="#booking" className="hover:text-lime-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contacto Directo</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <span className="text-lime-500 font-bold">📱</span>
                <a href="https://wa.me/5493855864210" className="hover:text-lime-400">+54 9 385 586-4210</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-lime-500 font-bold">📍</span>
                <span>Santiago del Estero, Argentina</span>
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <div className="px-4 py-2 border border-white/10 rounded-full text-[10px] font-bold text-lime-400 uppercase tracking-widest">#WittePadelPro</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
          <p>© 2024 Witte Padel Pro • Mi Sitio Oficial</p>
          <p>Potenciando tu juego en cada clase</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
