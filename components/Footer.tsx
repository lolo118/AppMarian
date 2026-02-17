
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/5 pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-lime-500 rounded flex items-center justify-center text-black font-bold">W</div>
              <span className="text-xl font-bold text-white">Witte<span className="text-lime-400">PadelPro</span></span>
            </div>
            <p className="max-w-md text-slate-500">
              Entrenamiento integral de pádel en Santiago del Estero. Clases adaptadas para todos los niveles y edades.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Explorar</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-lime-400 transition-colors">Sobre Mariano</a></li>
              <li><a href="#lessons" className="hover:text-lime-400 transition-colors">Clases</a></li>
              <li><a href="#pricing" className="hover:text-lime-400 transition-colors">Packs Mensuales</a></li>
              <li><a href="#booking" className="hover:text-lime-400 transition-colors">Reservar Turno</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contacto</h4>
            <p className="text-slate-500 mb-2">Mariano Witte</p>
            <p className="text-slate-500 mb-4">Santiago del Estero, Argentina</p>
            <p className="text-sm text-lime-400 font-bold">Consultas por WhatsApp las 24hs</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© 2024 Witte Padel Pro. Elevando tu nivel de juego.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
