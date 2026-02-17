
import { LessonType, TrainerInfo } from './types';

export const TRAINER_INFO: TrainerInfo = {
  name: "Carlos 'La Pared' Méndez",
  bio: "Ex jugador del circuito profesional con más de 15 años de experiencia. Especialista en táctica avanzada y transiciones defensivas.",
  specialties: ["Voleas Técnicas", "Estrategia de Juego", "Perfeccionamiento de Bandeja", "Juego de Pies"],
  experience: "15+ Años",
  achievements: ["Top 50 Ranking WPT (2018)", "Entrenador de Élite Certificado", "Ganador de 5 Opens Regionales"]
};

export const LESSON_TYPES: LessonType[] = [
  {
    id: 'individual',
    title: 'Entrenamiento Individual',
    description: 'Sesión personalizada enfocada exclusivamente en tu técnica y puntos débiles.',
    duration: '60 min',
    price: 65,
    icon: '👤'
  },
  {
    id: 'duo',
    title: 'Sesión en Pareja',
    description: 'Ideal para compañeros habituales. Mejora la sincronización y jugadas tácticas.',
    duration: '90 min',
    price: 45,
    icon: '👥'
  },
  {
    id: 'group',
    title: 'Clínica Grupal',
    description: 'Entrenamiento de alta intensidad con 4 jugadores. Simulación de partido real.',
    duration: '90 min',
    price: 30,
    icon: '🎾'
  },
  {
    id: 'kids',
    title: 'Academia Junior',
    description: 'Sesiones divertidas para niños de 6 a 14 años para aprender lo fundamental.',
    duration: '60 min',
    price: 25,
    icon: '👦'
  }
];

export const AVAILABLE_TIMES = [
  "08:00", "09:30", "11:00", "14:00", "15:30", "17:00", "18:30", "20:00"
];
