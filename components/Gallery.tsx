
import React from 'react';

const galleryImages = [
  { url: '/images/gallery-1.jpg', title: 'Lectura de juego' },
  { url: '/images/gallery-2.jpg', title: 'Técnica de bandeja' },
  { url: '/images/gallery-3.jpg', title: 'Desplazamiento' },
  { url: '/images/gallery-4.jpg', title: 'Análisis táctico' },
  { url: '/images/gallery-5.jpg', title: 'Preparación física' },
];

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-lime-500 font-bold tracking-wider uppercase text-sm mb-2">En Cancha</h2>
            <h3 className="text-4xl font-extrabold text-white">Mariano en Acción</h3>
          </div>
          <p className="hidden md:block text-slate-500 max-w-xs text-right text-sm italic">
            "La técnica es el pilar, la táctica es la diferencia."
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {galleryImages.map((img, idx) => (
            <div 
              key={idx} 
              className="relative overflow-hidden rounded-2xl group transition-all duration-500 aspect-[3/4]"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold text-xs uppercase tracking-widest">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
