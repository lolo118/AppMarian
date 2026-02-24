
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  // Las imágenes deben estar en la carpeta public/images/
  const images = [
    "images/hero.jpg",
    "images/gallery-1.jpg",
    "images/gallery-2.jpg",
    "images/gallery-3.jpg",
    "images/gallery-4.jpg",
    "images/gallery-5.jpg",
    "images/about.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-black">
      {/* Background Images Layer */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-50' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`Mariano Witte - Acción ${index + 1}`}
            className="h-full w-full object-cover object-center"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2000&auto=format&fit=crop`;
            }}
          />
        </div>
      ))}
      
      {/* Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <h2 className="text-lime-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">Mariano Witte</h2>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-6 leading-[1.1]">
            Elevá tu juego al <br />
            <span className="text-lime-400 drop-shadow-[0_0_20px_rgba(163,230,53,0.4)]">Siguiente Nivel</span>
          </h1>
          <p className="text-xl leading-8 text-slate-300 mb-10 max-w-xl">
            Metodología profesional de alto rendimiento para que alcances tu mejor versión en la cancha. ¡Reservá tu clase hoy!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="inline-block rounded-xl bg-lime-500 px-8 py-4 text-center text-lg font-bold text-black shadow-lg shadow-lime-500/40 hover:bg-lime-400 hover:-translate-y-1 transition-all duration-300">
              Reservá tu Clase
            </a>
            <a href="#pricing" className="inline-block rounded-xl border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-center text-lg font-bold text-white hover:bg-white/10 transition-all">
              Conocé mis Programas
            </a>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              index === currentImageIndex ? 'w-8 bg-lime-500' : 'w-2 bg-white/30'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
