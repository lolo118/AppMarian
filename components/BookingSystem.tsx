
import React, { useState, useEffect } from 'react';
import { LESSON_TYPES, AVAILABLE_TIMES } from '../constants';

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
    partners: [] as PersonData[],
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

  const nextStep = () => {
    setStep(prev => Math.min(prev + 1, 5));
    window.scrollTo({ top: document.getElementById('booking')?.offsetTop ? document.getElementById('booking')!.offsetTop - 80 : 0, behavior: 'smooth' });
  };
  
  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: document.getElementById('booking')?.offsetTop ? document.getElementById('booking')!.offsetTop - 80 : 0, behavior: 'smooth' });
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
    const lessonTitle = LESSON_TYPES.find(l => l.id === formData.lessonId)?.title;
    
    let infoStr = `🎾 *NUEVA CONSULTA DE CLASE*\n\n`;
    infoStr += `🏆 *Tipo de Clase:* ${lessonTitle}\n\n`;
    infoStr += `👤 *SOLICITANTE PRINCIPAL:*\n`;
    infoStr += `- Nombre: ${formData.name}\n`;
    infoStr += `- Edad: ${formData.age}\n`;
    infoStr += `- Nivel: ${formData.level}\n`;
    infoStr += `- Posición: ${formData.side}\n`;
    infoStr += `- Objetivo: ${formData.objective}\n`;
    infoStr += `- Lesiones: ${formData.injuries || 'Ninguna'}\n`;

    if (formData.partners.length > 0) {
      formData.partners.forEach((p, i) => {
        infoStr += `\n👥 *ACOMPAÑANTE ${i + 1}:*\n`;
        infoStr += `- Nombre: ${p.name || 'Sin nombre'}\n`;
        infoStr += `- Edad: ${p.age || '?'}\n`;
        infoStr += `- Nivel: ${p.level}\n`;
        infoStr += `- Posición: ${p.side}\n`;
        infoStr += `- Objetivo: ${p.objective}\n`;
        infoStr += `- Lesiones: ${p.injuries || 'Ninguna'}\n`;
      });
    }

    infoStr += `\n⏰ *HORARIOS TENTATIVOS:* ${formData.selectedTimes.join(", ")}\n`;
    infoStr += `\n_Envi