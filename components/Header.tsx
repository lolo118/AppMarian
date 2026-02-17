
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-lime-500 rounded-lg flex items-center justify-center text-black font-bold text-xl shadow-[0_0_15px_rgba(132,204,22,0.4)]">
              W
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Witte<span className="text-lime-400">PadelPro</span></span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-slate-400 hover:text-lime-400 font-medium transition-colors">Mariano</a>
            <a href="#lessons" className="text-slate-400 hover:text-lime-400 font-medium transition-colors">Clases</a>
            <a href="#pricing" className="text-slate-400 hover:text-lime-400 font-medium transition-colors">Packs</a>
            <a href="#booking" className="bg-lime-500 text-black px-5 py-2 rounded-full font-bold hover:bg-lime-400 transition-all shadow-[0_0_10px_rgba(132,204,22,0.3)]">Reservar Turno</a>
          </nav>
          <div className="md:hidden">
            <button className="text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
