
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/5 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-lime-500 rounded flex items-center justify-center text-black font-bold">P</div>
              <span className="text-xl font-bold text-white">PadelPro<span className="text-lime-400">Elite</span></span>
            </div>
            <p className="max-w-md text-slate-500">
              El destino definitivo para entrenamiento de pádel. Eleva tu técnica, estrategia y rendimiento general con programas de élite diseñados para todos los niveles.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-lime-400 transition-colors">Sobre Carlos</a></li>
              <li><a href="#lessons" className="hover:text-lime-400 transition-colors">Programas</a></li>
              <li><a href="#pricing" className="hover:text-lime-400 transition-colors">Precios</a></li>
              <li><a href="#booking" className="hover:text-lime-400 transition-colors">Reservar</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Ubicación y Horarios</h4>
            <p className="text-slate-500 mb-4">Padel Center Central, Pista 7<br />Sunny Vale, CA 94085</p>
            <p className="text-sm">Lun - Vie: 08:00 - 22:00<br />Sáb - Dom: 09:00 - 20:00</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© 2024 PadelPro Elite Hub. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
