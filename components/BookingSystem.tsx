
import React, { useState, useEffect } from 'react';
import { LESSON_TYPES, AVAILABLE_TIMES } from '../constants';

const BookingSystem: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    lessonId: 'individual',
    partners: [] as { name: string, age: string }[],
    level: 'Desde 0',
    side: 'Derecha',
    objective: 'Competitivo',
    injuries: '',
    selectedTimes: [] as string[]
  });

  useEffect(() => {
    const handleExternalSelect = (e: any) => {
      const selectedId = e.detail.lessonId;
      updatePartnerCount(selectedId);
      setStep(1);
    };

    window.addEventListener('selectLesson', handleExternalSelect);
    return () => window.removeEventListener('selectLesson', handleExternalSelect);
  }, [formData.partners]);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const toggleTime = (time: string) => {
    setFormData(prev => ({
      ...prev,
      selectedTimes: prev.selectedTimes.includes(time) 
        ? prev.selectedTimes.filter(t => t !== time) 
        : [...prev.selectedTimes, time]
    }));
  };

  const handlePartnerChange = (index: number, field: 'name' | 'age', value: string) => {
    const newPartners = [...formData.partners];
    newPartners[index] = { ...newPartners[index], [field]: value };
    setFormData({ ...formData, partners: newPartners });
  };

  const updatePartnerCount = (type: string) => {
    let count = 0;
    if (type === 'duo') count = 1;
    if (type === 'trio') count = 2;
    if (type === 'group') count = 3;
    
    const partners = Array(count).fill(0).map((_, i) => formData.partners[i] || { name: '', age: '' });
    setFormData(prev => ({ ...prev, lessonId: type, partners }));
  };

  const sendToWhatsApp = () => {
    const phoneNumber = "5493855864210";
    const lessonTitle = LESSON_TYPES.find(l => l.id === formData.lessonId)?.title;
    
    let partnersInfo = "";
    if (formData.partners.length > 0) {
      partnersInfo = "\n👥 Acompañantes:\n" + formData.partners.map((p, i) => `${i+1}. ${p.name || 'Sin nombre'} (${p.age || '?'} años)`).join("\n");
    }

    const message = encodeURIComponent(
      `🎾 *NUEVA CONSULTA DE CLASE*\n\n` +
      `👤 *Alumno:* ${formData.name} (${formData.age} años)\n` +
      `🏆 *Clase:* ${lessonTitle}${partnersInfo}\n\n` +
      `📊 *Nivel:* ${formData.level}\n` +
      `↔️ *Posición:* ${formData.side}\n` +
      `🎯 *Objetivo:* ${formData.objective}\n` +
      `⚠️ *Lesiones:* ${formData.injuries || 'Ninguna'}\n\n` +
      `⏰ *Horarios tentativos:* ${formData.selectedTimes.join(", ")}\n\n` +
      `_Enviado desde la web oficial de Mariano Witte_`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Empezá a entrenar conmigo
          </h2>
          <p className="text-slate-400">
            Completá este breve formulario para coordinar tu primera clase.
          </p>
        </div>

        <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
            <div 
              className="h-full bg-lime-500 transition-all duration-500" 
              style={{ width: `${(step / 5) * 100}%` }}
            ></div>
          </div>

          <div className="mt-4">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-xl font-bold text-white mb-6">Contame sobre vos</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Nombre completo</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-lime-500 outline-none"
                      placeholder="Ej: Juan Perez"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Edad</label>
                    <input 
                      type="number" 
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-lime-500 outline-none"
                      placeholder="Ej: 28"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-xl font-bold text-white mb-6">¿Qué tipo de clase buscás?</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
                  {LESSON_TYPES.map(lesson => (
                    <button
                      key={lesson.id}
                      onClick={() => updatePartnerCount(lesson.id)}
                      className={`p-3 rounded-xl border transition-all text-center flex flex-col items-center justify-center ${
                        formData.lessonId === lesson.id 
                        ? 'border-lime-500 bg-lime-500/10 text-lime-400' 
                        : 'border-white/10 bg-slate-800 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <div className="text-xl mb-1">{lesson.icon}</div>
                      <div className="font-bold text-[10px] uppercase tracking-tighter leading-tight">{lesson.title}</div>
                    </button>
                  ))}
                </div>
                
                {formData.partners.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <p className="text-sm font-bold text-slate-400">Datos de tus compañeros:</p>
                    <div className="max-h-48 overflow-y-auto pr-2 space-y-3">
                      {formData.partners.map((partner, idx) => (
                        <div key={idx} className="grid grid-cols-2 gap-3">
                          <input 
                            placeholder={`Nombre Acompañante ${idx + 1}`}
                            value={partner.name}
                            onChange={(e) => handlePartnerChange(idx, 'name', e.target.value)}
                            className="bg-slate-800 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:ring-1 focus:ring-lime-500 outline-none"
                          />
                          <input 
                            type="number"
                            placeholder="Edad"
                            value={partner.age}
                            onChange={(e) => handlePartnerChange(idx, 'age', e.target.value)}
                            className="bg-slate-800 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:ring-1 focus:ring-lime-500 outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-xl font-bold text-white mb-6">Tu experiencia</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-3">¿Cuál es tu nivel actual?</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Desde 0', 'Principiante', 'Intermedio', 'Avanzado'].map(lvl => (
                        <button
                          key={lvl}
                          onClick={() => setFormData({...formData, level: lvl})}
                          className={`py-2 px-4 rounded-lg border text-sm font-semibold transition-all ${
                            formData.level === lvl ? 'bg-lime-500 border-lime-500 text-black shadow-lg shadow-lime-500/20' : 'border-white/10 bg-slate-800 text-slate-400 hover:border-white/20'
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-3">¿En qué posición jugás?</label>
                    <div className="flex gap-2">
                      {['Derecha', 'Revés', 'Ambos'].map(side => (
                        <button
                          key={side}
                          onClick={() => setFormData({...formData, side: side})}
                          className={`flex-1 py-2 px-4 rounded-lg border text-sm font-semibold transition-all ${
                            formData.side === side ? 'bg-lime-500 border-lime-500 text-black shadow-lg shadow-lime-500/20' : 'border-white/10 bg-slate-800 text-slate-400 hover:border-white/20'
                          }`}
                        >
                          {side}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-xl font-bold text-white mb-6">Objetivos y Salud</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Tu objetivo principal</label>
                    <select 
                      value={formData.objective}
                      onChange={(e) => setFormData({...formData, objective: e.target.value})}
                      className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-lime-500"
                    >
                      <option value="Competitivo">Mejorar para competir (Torneos)</option>
                      <option value="Recreativo">Social y recreativo</option>
                      <option value="Fisico">Mejorar estado físico</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">¿Alguna lesión o condición física?</label>
                    <textarea 
                      value={formData.injuries}
                      onChange={(e) => setFormData({...formData, injuries: e.target.value})}
                      className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white h-24 outline-none resize-none focus:ring-2 focus:ring-lime-500"
                      placeholder="Ej: Dolor recurrente en hombro derecho..."
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-xl font-bold text-white mb-2">¿En qué horarios podés entrenar?</h3>
                <p className="text-xs text-slate-500 mb-6 italic">Franja disponible: 07:00 a 15:00. La última clase inicia a las 14:00.</p>
                <div className="grid grid-cols-4 gap-2">
                  {AVAILABLE_TIMES.map(time => (
                    <button
                      key={time}
                      onClick={() => toggleTime(time)}
                      className={`py-2 rounded-lg border text-[10px] font-bold transition-all ${
                        formData.selectedTimes.includes(time) 
                        ? 'bg-lime-500 border-lime-500 text-black shadow-lg shadow-lime-500/20' 
                        : 'border-white/10 bg-slate-800 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      {time} HS
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-10 flex justify-between gap-4">
            {step > 1 && (
              <button 
                onClick={prevStep}
                className="px-6 py-3 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all"
              >
                Anterior
              </button>
            )}
            {step < 5 ? (
              <button 
                onClick={nextStep}
                disabled={step === 1 && !formData.name}
                className="flex-1 bg-white text-black py-3 rounded-xl font-bold hover:bg-slate-200 disabled:opacity-50 transition-all"
              >
                Siguiente
              </button>
            ) : (
              <button 
                onClick={sendToWhatsApp}
                disabled={formData.selectedTimes.length === 0}
                className="flex-1 bg-lime-500 text-black py-3 rounded-xl font-extrabold hover:bg-lime-400 disabled:opacity-50 transition-all shadow-lg shadow-lime-500/20"
              >
                Finalizar y Enviar WhatsApp
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSystem;
