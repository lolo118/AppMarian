
import React from 'react';
import { LessonType } from '../types';

interface Props {
  lesson: LessonType;
}

const LessonCard: React.FC<Props> = ({ lesson }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="text-4xl mb-6">{lesson.icon}</div>
      <h3 className="text-2xl font-bold text-slate-900 mb-2">{lesson.title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed">
        {lesson.description}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-slate-400 font-medium">{lesson.duration}</span>
        <span className="text-2xl font-bold text-lime-600">${lesson.price}</span>
      </div>
    </div>
  );
};

export default LessonCard;
