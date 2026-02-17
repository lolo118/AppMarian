
import { LessonType, TrainerInfo } from './types';

export const TRAINER_INFO: TrainerInfo = {
  name: "Mariano Witte",
  bio: "Mariano Witte es un profesor de alto rendimiento especializado en técnica de competición. Su enfoque se centra en la corrección precisa de golpes y el desarrollo de táctica avanzada para que los jugadores logren su mejor versión en la cancha.",
  specialties: ["Técnica de Smash", "Táctica de Competición", "Defensa de Paredes", "Voleas de Definición"],
  experience: "12+ Años",
  achievements: ["Entrenador Certificado APA", "Ex Jugador Profesional", "Especialista en Menores y Adultos"]
};

export const LESSON_TYPES: LessonType[] = [
  {
    id: 'individual',
    title: 'Clase Individual',
    description: 'Entrenamiento 1 a 1 enfocado exclusivamente en corregir la técnica y potenciar las virtudes naturales del jugador.',
    duration: '60 min',
    price: 65,
    icon: '👤'
  },
  {
    id: 'duo',
    title: 'Clase en Pareja',
    description: 'Mejora de la química, transiciones, bloqueos y jugadas preparadas para parejas de competición.',
    duration: '90 min',
    price: 45,
    icon: '👥'
  },
  {
    id: 'group',
    title: 'Clínica Grupal',
    description: 'Entrenamiento dinámico para 4 jugadores. Trabajo en situaciones reales de partido y corrección grupal.',
    duration: '90 min',
    price: 30,
    icon: '🎾'
  },
  {
    id: 'kids',
    title: 'Escuelita de Menores',
    description: 'Formación de los más chicos mediante el juego, desarrollando su coordinación y amor por el deporte.',
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
  "Tu Club (A coordinar)"
];
