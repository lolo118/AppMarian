
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-lime-500 rounded flex items-center justify-center text-white font-bold">P</div>
              <span className="text-xl font-bold text-white">PadelPro<span className="text-lime-400">Hub</span></span>
            </div>
            <p className="max-w-md text-slate-400">
              The ultimate destination for Padel coaching. Elevate your technique, strategy, and overall performance with elite training programs designed for every level.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-lime-400 transition-colors">About Carlos</a></li>
              <li><a href="#lessons" className="hover:text-lime-400 transition-colors">Training Programs</a></li>
              <li><a href="#pricing" className="hover:text-lime-400 transition-colors">Pricing Plans</a></li>
              <li><a href="#booking" className="hover:text-lime-400 transition-colors">Book a Session</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Location & Hours</h4>
            <p className="text-slate-400 mb-4">Padel Center Central, Court 7<br />Sunny Vale, CA 94085</p>
            <p className="text-sm">Mon - Fri: 08:00 - 22:00<br />Sat - Sun: 09:00 - 20:00</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 PadelPro Trainer Hub. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
