
import React, { useState } from 'react';
import { LESSON_TYPES, AVAILABLE_TIMES, VENUES } from '../constants';

const BookingSystem: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState(LESSON_TYPES[0].id);
  const [selectedVenue, setSelectedVenue] = useState(VENUES[0]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus('loading');
    setTimeout(() => {
      setBookingStatus('success');
      setTimeout(() => setBookingStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Reservar un turno con Mariano
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Seleccione el tipo de entrenamiento, lugar y horario de su preferencia. Mariano se pondrá en contacto por WhatsApp para confirmar la disponibilidad de cancha.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/5">
                <div className="w-12 h-12 bg-lime-500/10 rounded-full flex items-center justify-center text-lime-500 text-xl">📍</div>
                <div>
                  <h4 className="font-bold text-white">Flexibilidad de Lugar</h4>
                  <p className="text-sm text-slate-500">Entrenamientos en PadelManía o en el club que usted elija coordinando previamente.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/5">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 text-xl">★</div>
                <div>
                  <h4 className="font-bold text-white">Análisis de Video</h4>
                  <p className="text-sm text-slate-500">Mariano utiliza tecnología de video para analizar y corregir posturas durante la sesión.</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-lime-500/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>
            <div className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-400 mb-2">Tipo de Clase</label>
                  <select 
                    value={selectedLesson}
                    onChange={(e) => setSelectedLesson(e.target.value)}
                    className="w-full bg-slate-800 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all appearance-none"
                    required
                  >
                    {LESSON_TYPES.map(l => (
                      <option key={l.id} value={l.id} className="bg-slate-900">{l.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-400 mb-2">Club Sugerido</label>
                  <select 
                    value={selectedVenue}
                    onChange={(e) => setSelectedVenue(e.target.value)}
                    className="w-full bg-slate-800 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all appearance-none"
                    required
                  >
                    {VENUES.map(v => (
                      <option key={v} value={v} className="bg-slate-900">{v}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-2">Fecha Tentativa</label>
                <input 
                  type="date" 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-slate-800 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all [color-scheme:dark]"
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-2">Horarios Disponibles</label>
                <div className="grid grid-cols-4 gap-2">
                  {AVAILABLE_TIMES.map(time => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-1 rounded-lg text-xs font-bold border transition-all ${
                        selectedTime === time 
                          ? 'bg-lime-500 border-lime-500 text-black shadow-[0_0_15px_rgba(163,230,53,0.3)]' 
                          : 'bg-slate-800 border-white/10 text-slate-400 hover:border-lime-500/50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {bookingStatus === 'success' ? (
                <div className="bg-lime-500/10 text-lime-400 p-4 rounded-xl text-center font-bold border border-lime-500/20 animate-pulse">
                  Solicitud enviada. Recibirá un WhatsApp en breve.
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={bookingStatus === 'loading'}
                  className="w-full bg-lime-500 text-black py-4 rounded-xl font-extrabold text-lg hover:bg-lime-400 disabled:opacity-50 transition-all shadow-lg shadow-lime-500/20"
                >
                  {bookingStatus === 'loading' ? 'Procesando...' : 'Solicitar Turno'}
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
