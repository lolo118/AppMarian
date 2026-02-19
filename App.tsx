
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import LessonCard from './components/LessonCard';
import BookingSystem from './components/BookingSystem';
import WhatsAppBubble from './components/WhatsAppBubble';
import Footer from './components/Footer';
import { LESSON_TYPES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-lime-500 selection:text-black">
      <Header />
      
      <main>
        <Hero />
        
        <Features />

        <section id="lessons" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-lime-500 font-bold tracking-wider uppercase text-sm mb-2">Entrenamientos</h2>
            <h3 className="text-4xl font-extrabold text-white">Clases a tu Medida</h3>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Elegí el formato que mejor se adapte a tu nivel y objetivos. Trabajamos técnica, táctica y físico en cada turno conmigo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LESSON_TYPES.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </section>

        <section id="pricing" className="py-24 bg-black text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-lime-500/5 -skew-x-12 translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Mis Packs de Clases</h2>
                <p className="text-slate-400 text-lg mb-8">Congelá el precio y asegurá tu progreso reservando packs mensuales conmigo. La constancia es lo que te hará subir de categoría.</p>
                
                <div className="space-y-4">
                  {[
                    { name: 'Pack Inicio', sessions: 4, discount: '10%' },
                    { name: 'Progreso Pro', sessions: 8, discount: '20%' },
                    { name: 'Elite Performance', sessions: 12, discount: '30%' }
                  ].map((pkg, i) => (
                    <div key={i} className="bg-slate-900 border border-white/5 p-6 rounded-2xl flex justify-between items-center hover:border-lime-500/30 transition-colors group">
                      <div>
                        <p className="font-bold text-xl group-hover:text-lime-400 transition-colors">{pkg.name}</p>
                        <p className="text-slate-500 text-sm">{pkg.sessions} Clases Incluidas</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lime-400 font-bold">{pkg.discount} OFF</p>
                        <p className="text-[10px] text-slate-600 uppercase tracking-tighter italic">Promo</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-900 text-white p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-lime-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -top-4 -right-4 bg-lime-500 text-black px-4 py-1 rounded-full text-sm font-extrabold shadow-lg z-20">Recomendado</div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Entrenamiento Intensivo</h3>
                  <p className="text-slate-400 mb-8">Ideal si buscás competir fuerte en los torneos locales.</p>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-extrabold text-lime-400">$18000</span>
                    <span className="text-slate-500">/mes</span>
                  </div>
                  <ul className="space-y-4 mb-10">
                    <li className="flex gap-3 items-center text-slate-300">
                      <span className="text-lime-500 font-bold">✓</span>
                      <span>2 Clases por Semana</span>
                    </li>
                    <li className="flex gap-3 items-center text-slate-300">
                      <span className="text-lime-500 font-bold">✓</span>
                      <span>Análisis de video (provisto por alumno de torneos previos)</span>
                    </li>
                    <li className="flex gap-3 items-center text-slate-300">
                      <span className="text-lime-500 font-bold">✓</span>
                      <span>Prioridad en Mis Reservas</span>
                    </li>
                  </ul>
                  <a href="#booking" className="block w-full text-center bg-lime-500 text-black py-4 rounded-xl font-extrabold hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20">
                    Consultame Disponibilidad
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BookingSystem />
      </main>

      <Footer />
      
      <WhatsAppBubble />
    </div>
  );
};

export default App;
