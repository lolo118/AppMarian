
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1610411322123-0189a6977465?q=80&w=2000&auto=format&fit=crop"
        alt="Padel Court Background"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-40"
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
            Master the Court with <span className="text-lime-400">Pro Guidance</span>
          </h1>
          <p className="text-lg leading-8 text-slate-300 mb-10">
            Elevate your Padel game with personalized coaching from Carlos Mendez. Whether you are a beginner or looking to break into the professional ranks, we have the training program for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="inline-block rounded-xl bg-lime-500 px-8 py-4 text-center text-lg font-semibold text-white shadow-lg shadow-lime-500/30 hover:bg-lime-400 transition-all">
              Schedule Your Session
            </a>
            <a href="#lessons" className="inline-block rounded-xl bg-white/10 backdrop-blur-md px-8 py-4 text-center text-lg font-semibold text-white hover:bg-white/20 transition-all">
              View Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
