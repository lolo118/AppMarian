
import React from 'react';
import { LessonType } from '../types';

interface Props {
  lesson: LessonType;
}

const LessonCard: React.FC<Props> = ({ lesson }) => {
  const handleSelect = () => {
    const event = new CustomEvent('selectLesson', { detail: { lessonId: lesson.id } });
    window.dispatchEvent(event);
    
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      onClick={handleSelect}
      className="bg-slate-900 p-8 rounded-3xl shadow-sm border border-white/5 hover:border-lime-500/50 hover:shadow-[0_0_30px_rgba(163,230,53,0.1)] hover:-translate-y-2 transition-all duration-300 group cursor-pointer h-full flex flex-col"
    >
      <div className="text-4xl mb-6 bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
        {lesson.icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{lesson.title}</h3>
      <p className="text-slate-400 mb-6 leading-relaxed text-sm">
        {lesson.description}
      </p>
      <div className="flex items-center justify-between mt-auto border-t border-white/5 pt-6">
        <span className="text-slate-500 font-medium text-xs">{lesson.duration}</span>
        <div className="flex flex-col items-end">
          <span className="text-xl font-black text-lime-400">${lesson.price.toLocaleString('es-AR')}</span>
          <span className="text-[9px] text-lime-500/70 uppercase font-bold tracking-widest mt-0.5">Cancha Incluida</span>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
