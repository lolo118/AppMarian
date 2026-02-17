
import { LessonType, TrainerInfo } from './types';

export const TRAINER_INFO: TrainerInfo = {
  name: "Mariano Witte",
  bio: "Profesor de alto rendimiento especializado en técnica de competición, corrección de golpes y táctica avanzada. Entrenamientos personalizados adaptados a tu nivel.",
  specialties: ["Técnica de Smash", "Táctica de Competición", "Defensa de Paredes", "Voleas de Definición"],
  experience: "12+ Años",
  achievements: ["Entrenador Certificado APA", "Ex Jugador Profesional", "Especialista en Menores y Adultos"]
};

export const LESSON_TYPES: LessonType[] = [
  {
    id: 'individual',
    title: 'Clase Individual',
    description: 'Entrenamiento 1 a 1 enfocado exclusivamente en corregir tu técnica y potenciar tus virtudes.',
    duration: '60 min',
    price: 65,
    icon: '👤'
  },
  {
    id: 'duo',
    title: 'Clase en Pareja',
    description: 'Mejorá la química con tu compañero. Trabajo de transiciones, bloqueos y jugadas preparadas.',
    duration: '90 min',
    price: 45,
    icon: '👥'
  },
  {
    id: 'group',
    title: 'Clínica Grupal',
    description: 'Entrenamiento dinámico para 4 jugadores. Situaciones reales de partido y corrección grupal.',
    duration: '90 min',
    price: 30,
    icon: '🎾'
  },
  {
    id: 'kids',
    title: 'Escuelita de Menores',
    description: 'Clases formativas para chicos. Aprendizaje mediante el juego y desarrollo de coordinación.',
    duration: '60 min',
    price: 25,
    icon: '👦'
  }
];

export const AVAILABLE_TIMES = [
  "08:00", "09:30", "11:00", "14:00", "15:30", "17:00", "18:30", "20:00"
];

export const VENUES = [
  "PadelManía SGO",
  "Otro Club (A coordinar)"
];
