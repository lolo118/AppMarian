
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import LessonCard from './components/LessonCard';
import BookingSystem from './components/BookingSystem';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import { LESSON_TYPES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        <Features />

        <section id="lessons" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-lime-600 font-bold tracking-wider uppercase text-sm mb-2">Our Programs</h2>
            <h3 className="text-4xl font-extrabold text-slate-900">Tailored Training for Every Player</h3>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Choose from our diverse range of training sessions designed to push your boundaries and refine your skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {LESSON_TYPES.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </section>

        <section id="pricing" className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-lime-500/10 -skew-x-12 translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Training Packages</h2>
                <p className="text-slate-400 text-lg mb-8">Save more by booking multiple sessions in advance. Our membership plans provide the best value for serious enthusiasts.</p>
                
                <div className="space-y-4">
                  {[
                    { name: 'Starter Pack', sessions: 5, discount: '10%' },
                    { name: 'Pro Progress', sessions: 10, discount: '20%' },
                    { name: 'Elite Performance', sessions: 20, discount: '30%' }
                  ].map((pkg, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex justify-between items-center">
                      <div>
                        <p className="font-bold text-xl">{pkg.name}</p>
                        <p className="text-slate-400 text-sm">{pkg.sessions} Sessions Included</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lime-400 font-bold">{pkg.discount} OFF</p>
                        <p className="text-xs text-slate-500 italic">Total Value</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white text-slate-900 p-10 rounded-3xl shadow-2xl relative">
                <div className="absolute -top-4 -right-4 bg-lime-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">Most Popular</div>
                <h3 className="text-2xl font-bold mb-2">Monthly Elite Membership</h3>
                <p className="text-slate-500 mb-8">For players committed to continuous improvement.</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-extrabold">$249</span>
                  <span className="text-slate-500">/month</span>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex gap-3 items-center">
                    <span className="text-lime-500">✓</span>
                    <span>4 Individual Private Sessions</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="text-lime-500">✓</span>
                    <span>Unlimited Group Clinics</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="text-lime-500">✓</span>
                    <span>Video Analysis of Match Play</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="text-lime-500">✓</span>
                    <span>Priority Booking Access</span>
                  </li>
                </ul>
                <a href="#booking" className="block w-full text-center bg-lime-500 text-white py-4 rounded-xl font-bold hover:bg-lime-600 transition-all shadow-lg shadow-lime-500/20">
                  Join the Academy
                </a>
              </div>
            </div>
          </div>
        </section>

        <BookingSystem />
      </main>

      <Footer />
      
      {/* Floating AI Assistant */}
      <AIChat />
    </div>
  );
};

export default App;
