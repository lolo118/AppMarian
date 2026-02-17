
import React from 'react';

const images = [
  { url: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8', title: 'Intensidad en cancha' }, // Reemplazar con foto 2
  { url: 'https://images.unsplash.com/photo-1626224580139-f9c316719574', title: 'Técnica de golpe' }, // Reemplazar con foto 3
  { url: 'https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c', title: 'Preparación física' }, // Reemplazar con foto 4
  { url: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8', title: 'Enfoque total' }, // Reemplazar con foto 5
];

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-lime-500 font-bold tracking-wider uppercase text-sm mb-2">Galería</h2>
            <h3 className="text-4xl font-extrabold text-white">Mariano en Acción</h3>
          </div>
          <p className="hidden md:block text-slate-500 max-w-xs text-right text-sm">
            Imágenes reales de entrenamientos y partidos de competición.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden rounded-2xl group transition-all duration-500 ${
                idx === 0 || idx === 3 ? 'md:col-span-1' : 'md:col-span-1'
              }`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full min-h-[300px] object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-sm">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
