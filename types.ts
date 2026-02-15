
export interface LessonType {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  icon: string;
}

export interface Booking {
  id: string;
  userId: string;
  lessonId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface TrainerInfo {
  name: string;
  bio: string;
  specialties: string[];
  experience: string;
  achievements: string[];
}
