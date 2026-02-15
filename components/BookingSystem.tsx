
import React, { useState } from 'react';
import { LESSON_TYPES, AVAILABLE_TIMES } from '../constants';

const BookingSystem: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState(LESSON_TYPES[0].id);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setBookingStatus('success');
      setTimeout(() => setBookingStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Book Your Next Session
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Select your preferred training type, date, and time. We will confirm your session within 2 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center text-lime-600 text-xl">✓</div>
                <div>
                  <h4 className="font-semibold text-slate-900">Guaranteed Availability</h4>
                  <p className="text-sm text-slate-500">Regular slots updated daily based on court availability.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl">★</div>
                <div>
                  <h4 className="font-semibold text-slate-900">Equipment Included</h4>
                  <p className="text-sm text-slate-500">Premium rackets and balls provided if needed.</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Training Type</label>
                <select 
                  value={selectedLesson}
                  onChange={(e) => setSelectedLesson(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all"
                  required
                >
                  {LESSON_TYPES.map(l => (
                    <option key={l.id} value={l.id}>{l.title} - ${l.price}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Date</label>
                <input 
                  type="date" 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all"
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Available Times</label>
                <div className="grid grid-cols-3 gap-2">
                  {AVAILABLE_TIMES.map(time => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium border transition-all ${
                        selectedTime === time 
                          ? 'bg-lime-500 border-lime-500 text-white shadow-md' 
                          : 'bg-white border-slate-200 text-slate-600 hover:border-lime-500'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {bookingStatus === 'success' ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-xl text-center font-medium animate-pulse">
                  Session Requested Successfully! Check your email.
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={bookingStatus === 'loading'}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 disabled:opacity-50 transition-all shadow-lg"
                >
                  {bookingStatus === 'loading' ? 'Processing...' : 'Confirm Request'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSystem;
