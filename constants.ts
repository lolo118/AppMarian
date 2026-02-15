
import { LessonType, TrainerInfo } from './types';

export const TRAINER_INFO: TrainerInfo = {
  name: "Carlos 'The Wall' Mendez",
  bio: "Former professional tour player with over 15 years of coaching experience. Specializing in advanced tactical positioning and defensive transitions.",
  specialties: ["Technical Volleys", "Game Strategy", "Bandeja Perfection", "Footwork Conditioning"],
  experience: "15+ Years",
  achievements: ["Top 50 WPT Rank (2018)", "National Certified Elite Coach", "Winner of 5 Regional Opens"]
};

export const LESSON_TYPES: LessonType[] = [
  {
    id: 'individual',
    title: 'Individual Training',
    description: 'One-on-one session focused exclusively on your technique and weaknesses.',
    duration: '60 min',
    price: 65,
    icon: '👤'
  },
  {
    id: 'duo',
    title: 'Duo Session',
    description: 'Perfect for regular partners. Improve your synchronization and tactical plays together.',
    duration: '90 min',
    price: 45,
    icon: '👥'
  },
  {
    id: 'group',
    title: 'Group Clinic',
    description: 'High-intensity drills with 4 players. Great for competitive match play simulation.',
    duration: '90 min',
    price: 30,
    icon: '🎾'
  },
  {
    id: 'kids',
    title: 'Junior Academy',
    description: 'Fun-filled sessions for children aged 6-14 to learn the fundamentals.',
    duration: '60 min',
    price: 25,
    icon: '👦'
  }
];

export const AVAILABLE_TIMES = [
  "08:00", "09:30", "11:00", "14:00", "15:30", "17:00", "18:30", "20:00"
];
