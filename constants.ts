
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
    title: 'Clase Individual',
    description: 'Te entreno 1 a 1 enfocándome exclusivamente en corregir tu técnica y potenciar tus virtudes naturales.',
    duration: '60 min',
    price: 65,
    icon: '👤'
  },
  {
    id: 'duo',
    title: 'Clase en Pareja',
    description: 'Vení con tu compañero/a. Mejoramos la química, transiciones, bloqueos y jugadas preparadas de equipo.',
    duration: '90 min',
    price: 45,
    icon: '👥'
  },
  {
    id: 'group',
    title: 'Clínica Grupal',
    description: 'Entrenamiento dinámico para 4 jugadores max. Trabajamos situaciones reales de partido y corrección grupal.',
    duration: '90 min',
    price: 30,
    icon: '🎾'
  }
];

export const AVAILABLE_TIMES = [
  "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"
];

export const VENUES = [
  "PadelManía SGO",
  "Tu Club (A coordinar)"
];
