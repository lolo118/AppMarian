
import { LessonType, TrainerInfo } from './types';

export const TRAINER_INFO: TrainerInfo = {
  name: "Mariano Witte",
  bio: "Soy Mariano Witte, profesor de alto rendimiento especializado en técnica de competición. Mi enfoque se centra en la corrección precisa de golpes y el desarrollo de táctica avanzada. Mi objetivo es potenciar tus habilidades y darte las herramientas para que compitas con confianza y estrategia.",
  specialties: [],
  experience: "15+ Años",
  achievements: ["Ex Jugador Profesional", "Especialista en Menores y Adultos"]
};

export const LESSON_TYPES: LessonType[] = [
  {
    id: 'individual',
    title: 'Clase Individual',
    description: 'Entrenamiento 1 a 1 enfocado exclusivamente en tu técnica.',
    duration: '60 min',
    price: 20000,
    icon: '👤'
  },
  {
    id: 'duo',
    title: 'Clase Dupla',
    description: 'Vení con tu compañero/a para mejorar la química y las jugadas preparadas.',
    duration: '90 min',
    price: 28000,
    icon: '👥'
  },
  {
    id: 'trio',
    title: 'Clase Trío',
    description: 'Entrenamiento dinámico ideal para rotaciones tácticas y corrección grupal.',
    duration: '90 min',
    price: 38000,
    icon: '👪'
  },
  {
    id: 'group',
    title: 'Clínica 4 Personas',
    description: 'Simulaciones de partido y situaciones reales de juego para una mejora colectiva.',
    duration: '90 min',
    price: 48000,
    icon: '🎾'
  }
];

export const PACKS = [
  { id: 'pack-inicio', name: 'Pack Inicio', sessions: 4, discount: '5%', basePrice: 20000, finalPrice: 76000 },
  { id: 'progreso-pro', name: 'Progreso Pro', sessions: 8, discount: '10%', basePrice: 20000, finalPrice: 144000 },
  { id: 'elite-performance', name: 'Elite Performance', sessions: 12, discount: '15%', basePrice: 20000, finalPrice: 204000 },
  { id: 'intensivo', name: 'Entrenamiento Intensivo', sessions: 8, discount: '13%', basePrice: 20000, finalPrice: 139000, isSpecial: true }
];

export const AVAILABLE_TIMES = [
  "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00"
];

export const VENUES = [
  "PadelManía SGO",
  "Tu Club (A coordinar)"
];
