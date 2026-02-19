
import { LessonType, TrainerInfo } from './types';

export const TRAINER_INFO: TrainerInfo = {
  name: "Mariano Witte",
  bio: "Soy profesor de alto rendimiento especializado en técnica de competición. Mi enfoque se centra en la corrección precisa de golpes y el desarrollo de táctica avanzada para que logres tu mejor versión en la cancha.",
  specialties: ["Mi técnica de Smash", "Táctica de Competición", "Defensa de Paredes", "Voleas de Definición"],
  experience: "15+ Años",
  achievements: ["Ex Jugador Profesional", "Especialista en Menores y Adultos"]
};

export const LESSON_TYPES: LessonType[] = [
  {
    id: 'individual',
    title: 'Clase 1 Persona',
    description: 'Entrenamiento 1 a 1 enfocado exclusivamente en tu técnica. Incluye cancha.',
    duration: '60 min',
    price: 20000,
    icon: '👤'
  },
  {
    id: 'duo',
    title: 'Clase 2 Personas',
    description: 'Vení con tu compañero/a. Mejoramos la química y jugadas preparadas. Incluye cancha.',
    duration: '90 min',
    price: 28000,
    icon: '👥'
  },
  {
    id: 'trio',
    title: 'Clase 3 Personas',
    description: 'Entrenamiento dinámico para tres jugadores. Ideal para rotaciones tácticas. Incluye cancha.',
    duration: '90 min',
    price: 38000,
    icon: '👪'
  },
  {
    id: 'group',
    title: 'Clínica 4 Personas',
    description: 'Entrenamiento para 4 jugadores. Situaciones reales de partido y corrección grupal. Incluye cancha.',
    duration: '90 min',
    price: 48000,
    icon: '🎾'
  }
];

export const AVAILABLE_TIMES = [
  "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00"
];

export const VENUES = [
  "PadelManía SGO",
  "Tu Club (A coordinar)"
];
