
import React from 'react';
import { TRAINER_INFO } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop" 
                alt="Trainer Action Shot" 
                className="rounded-3xl shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-lime-500 rounded-3xl -z-10 hidden sm:block"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-slate-200 rounded-3xl -translate-x-4 -translate-y-4 -z-20"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-lime-600 font-bold tracking-wider uppercase text-sm mb-2">Meet Your Coach</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">{TRAINER_INFO.name}</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed italic">
              "{TRAINER_INFO.bio}"
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {TRAINER_INFO.specialties.map((spec, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 text-lime-500">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium text-slate-700">{spec}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex gap-10">
              <div>
                <p className="text-3xl font-extrabold text-slate-900">15+</p>
                <p className="text-slate-500 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900">500+</p>
                <p className="text-slate-500 text-sm">Active Students</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900">Elite</p>
                <p className="text-slate-500 text-sm">WPT Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
