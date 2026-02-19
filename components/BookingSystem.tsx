
import React, { useState, useEffect } from 'react';
import { LESSON_TYPES, AVAILABLE_TIMES, PACKS } from '../constants';

interface PersonData {
  name: string;
  age: string;
  level: string;
  side: string;
  objective: string;
  injuries: string;
}

const BookingSystem: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    level: 'Desde 0',
    side: 'Derecha',
    objective: 'Competitivo',
    injuries: '',
    lessonId: 'individual',
    packId: '' as string,
    partners: [] as PersonData[],
    selectedTimes: [] as string[]
  });

  useEffect(() => {
    const handleLessonSelect = (e: any) => {
      const selectedId = e.detail.lessonId;
      updatePartnerCount(selectedId);
      setFormData(prev => ({ ...prev, packId: '' }));
      setStep(1);
    };

    const handlePackSelect = (e: any) => {
      const selectedPackId = e.detail.packId;
      setFormData(prev => ({ ...prev, lessonId: 'individual', packId: selectedPackId }));
      updatePartnerCount('individual');
      setStep(1);
    };

    window.addEventListener('selectLesson', handleLessonSelect);
    window.addEventListener('selectPack', handlePackSelect);
    
    return () => {
      window.removeEventListener('selectLesson', handleLessonSelect);
      window.removeEventListener('selectPack', handlePackSelect);
    };
  }, []);

  const scrollToTop = () => {
    const section = document.getElementById('booking');
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const nextStep = () => {
    setStep(prev => Math.min(prev + 1, 5));
    scrollToTop();
  };
  
  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
    scrollToTop();
  };

  const toggleTime = (time: string) => {
    setFormData(prev => ({
      ...prev,
      selectedTimes: prev.selectedTimes.includes(time) 
        ? prev.selectedTimes.filter(t => t !== time) 
        : [...prev.selectedTimes, time]
    }));
  };

  const handlePartnerChange = (index: number, field: keyof PersonData, value: string) => {
    const newPartners = [...formData.partners];
    newPartners[index] = { ...newPartners[index], [field]: value };
    setFormData({ ...formData, partners: newPartners });
  };

  const updatePartnerCount = (type: string) => {
    let count = 0;
    if (type === 'duo') count = 1;
    if (type === 'trio') count = 2;
    if (type === 'group') count = 3;
    
    const partners = Array(count).fill(0).map((_, i) => formData.partners[i] || { 
      name: '', 
      age: '', 
      level: 'Desde 0', 
      side: 'Derecha', 
      objective: 'Competitivo', 
      injuries: '' 
    });
    setFormData(prev => ({ ...prev, lessonId: type, partners }));
  };

  const sendToWhatsApp = () => {
    const phoneNumber = "5493855864210";
    const lesson = LESSON_TYPES.find(l => l.id === formData.lessonId);
    const pack = PACKS.find(p => p.id === formData.packId);
    
    let msg = `🎾 *NUEVA CONSULTA DE CLASE*\n\n`;
    
    if (pack) {
      msg += `🏆 *Pack Elegido:* ${pack.name}\n`;
      msg += `💰 *Costo Total:* $${pack.finalPrice.toLocaleString('es-AR')}\n`;
      msg += `📊 *Beneficio:* ${pack.discount} OFF\n\n`;
    } else {
      msg += `🏆 *Clase:* ${lesson?.title}\n`;
      msg += `💰 *Costo:* $${lesson?.price.toLocaleString('es-AR')}\n\n`;
    }
    
    msg += `👤 *ALUMNO PRINCIPAL:*\n`;
    msg += `- Nombre: ${formData.name}\n`;
    msg += `- Edad: ${formData.age} años\n`;
    msg += `- Nivel: ${formData.level}\n`;
    msg += `- Lado: ${formData.side}\n`;
    msg += `- Objetivo: ${formData.objective}\n`;
    msg += `- Lesiones: ${formData.injuries || 'Ninguna'}\n`;

    if (formData.partners.length > 0) {
      formData.partners.forEach((p, i) => {
        msg += `\n👥 *ACOMPAÑANTE ${i + 1}:*\n`;
        msg += `- Nombre: ${p.name || 'Sin nombre'}\n`;
        msg += `- Edad: ${p.age || '?'} años\n`;
        msg += `- Nivel: ${p.level}\n`;
        msg += `- Lado: ${p.side}\n`;
        msg += `- Objetivo: ${p.objective}\n`;
        msg += `- Lesiones: ${p.injuries || 'Ninguna'}\n`;
      });
    }

    msg += `\n⏰ *HORARIOS:* ${formData.selectedTimes.join(", ")}\n`;
    msg += `\n_Enviado desde WittePadelPro.com_`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Empezá tu entrenamiento
          </h2>
          <p className="text-slate-400">Completá el formulario y coordinamos tu primera sesión.</p>
        </div>

        <div className="bg-slate-900 border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
            <div className="h-full bg-lime-500 transition-all duration-300" style={{ width: `${(step / 5) * 100}%` }}></div>
          </div>

          <div className="mt-4">
            {step === 1 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Paso 1: Tus datos personales</h3>
                {formData.packId && (
                  <div className="mb-6 p-4 bg-lime-500/10 border border-lime-500/30 rounded-xl flex justify-between items-center">
                    <span className="text-lime-400 font-bold text-sm">Seleccionaste: {PACKS.find(p => p.id === formData.packId)?.name}</span>
                    <button onClick={() => setFormData({...formData, packId: ''})} className="text-[10px] text-slate-500 hover:text-white underline uppercase">Cambiar</button>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Nombre Completo</label>
                    <input 
                      type="text" value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-lime-500 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Edad</label>
                    <input 
                      type="number" value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-lime-500 outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Paso 2: Formato y Acompañantes</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
                  {LESSON_TYPES.map(l => (
                    <button
                      key={l.id} onClick={() => { updatePartnerCount(l.id); setFormData(prev => ({ ...prev, packId: '' })); }}
                      className={`p-3 rounded-xl border text-center transition-all ${formData.lessonId === l.id && !formData.packId ? 'border-lime-500 bg-lime-500/10 text-lime-400' : 'border-white/10 bg-slate-800 text-slate-400'}`}
                    >
                      <div className="text-xl">{l.icon}</div>
                      <div className="text-[10px] font-bold uppercase mt-1">{l.title}</div>
                    </button>
                  ))}
                </div>

                {formData.packId && (
                   <div className="mb-8 p-4 bg-slate-800 border border-lime-500/30 rounded-xl">
                      <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Pack Seleccionado</p>
                      <p className="text-lime-400 font-bold">{PACKS.find(p => p.id === formData.packId)?.name} (${PACKS.find(p => p.id === formData.packId)?.finalPrice.toLocaleString('es-AR')})</p>
                   </div>
                )}

                {formData.partners.length > 0 && (
                  <div className="space-y-8 pt-6 border-t border-white/5 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {formData.partners.map((p, idx) => (
                      <div key={idx} className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 space-y-4">
                        <p className="font-bold text-lime-500 text-sm">Perfil Acompañante {idx + 1}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input 
                            placeholder="Nombre" value={p.name}
                            onChange={(e) => handlePartnerChange(idx, 'name', e.target.value)}
                            className="bg-slate-900 border border-white/10 rounded-xl px-4 py-2 text-sm text-white"
                          />
                          <input 
                            placeholder="Edad" type="number" value={p.age}
                            onChange={(e) => handlePartnerChange(idx, 'age', e.target.value)}
                            className="bg-slate-900 border border-white/10 rounded-xl px-4 py-2 text-sm text-white"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <select 
                            value={p.level} onChange={(e) => handlePartnerChange(idx, 'level', e.target.value)}
                            className="bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                          >
                            <option>Desde 0</option><option>Principiante</option><option>Intermedio</option><option>Avanzado</option>
                          </select>
                          <select 
                            value={p.side} onChange={(e) => handlePartnerChange(idx, 'side', e.target.value)}
                            className="bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white"
                          >
                            <option>Derecha</option><option>Revés</option><option>Ambos</option>
                          </select>
                        </div>
                        <textarea 
                          placeholder="Lesiones o dolencias..." value={p.injuries}
                          onChange={(e) => handlePartnerChange(idx, 'injuries', e.target.value)}
                          className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white h-16 resize-none"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Paso 3: Perfil Técnico</h3>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-400">¿Cuál es tu nivel?</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Desde 0', 'Principiante', 'Intermedio', 'Avanzado'].map(lvl => (
                        <button key={lvl} onClick={() => setFormData({...formData, level: lvl})} className={`py-3 rounded-xl border text-sm font-bold ${formData.level === lvl ? 'bg-lime-500 border-lime-500 text-black' : 'border-white/10 bg-slate-800 text-slate-400'}`}>{lvl}</button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-400">¿Lado de preferencia?</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Derecha', 'Revés', 'Ambos'].map(side => (
                        <button key={side} onClick={() => setFormData({...formData, side: side})} className={`py-3 rounded-xl border text-sm font-bold ${formData.side === side ? 'bg-lime-500 border-lime-500 text-black' : 'border-white/10 bg-slate-800 text-slate-400'}`}>{side}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Paso 4: Objetivos y Salud</h3>
                <div className="space-y-4">
                  <select 
                    value={formData.objective} onChange={(e) => setFormData({...formData, objective: e.target.value})}
                    className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white"
                  >
                    <option value="Competitivo">Entrenar para Torneos</option>
                    <option value="Recreativo">Social y Recreativo</option>
                    <option value="Fisico">Mejorar Estado Físico</option>
                  </select>
                  <textarea 
                    placeholder="Contame si tenés alguna lesión o molestia física..." value={formData.injuries}
                    onChange={(e) => setFormData({...formData, injuries: e.target.value})}
                    className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white h-32 resize-none"
                  />
                </div>
              </div>
            )}

            {step === 5 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Paso 5: Horarios Tentativos</h3>
                <p className="text-xs text-slate-500 mb-6 italic">Seleccioná los turnos en los que podrías asistir (07:00 a 14:00).</p>
                <div className="grid grid-cols-4 gap-2">
                  {AVAILABLE_TIMES.map(t => (
                    <button key={t} onClick={() => toggleTime(t)} className={`py-3 rounded-xl border text-xs font-bold ${formData.selectedTimes.includes(t) ? 'bg-lime-500 border-lime-500 text-black shadow-lg shadow-lime-500/20' : 'border-white/10 bg-slate-800 text-slate-400'}`}>{t} HS</button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-10 flex gap-4">
            {step > 1 && (
              <button onClick={prevStep} className="px-6 py-3 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors">Volver</button>
            )}
            {step < 5 ? (
              <button onClick={nextStep} disabled={step === 1 && !formData.name} className="flex-1 bg-white text-black py-3 rounded-xl font-bold hover:bg-slate-200 disabled:opacity-30 transition-all">Siguiente Paso</button>
            ) : (
              <button onClick={sendToWhatsApp} disabled={formData.selectedTimes.length === 0} className="flex-1 bg-lime-500 text-black py-3 rounded-xl font-black hover:bg-lime-400 shadow-lg shadow-lime-500/20 transition-all">Enviar a WhatsApp</button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSystem;
