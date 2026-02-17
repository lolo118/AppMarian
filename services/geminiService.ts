
import { GoogleGenAI } from "@google/genai";
import { TRAINER_INFO, LESSON_TYPES } from "../constants";

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY no configurada.");
  }
  return new GoogleGenAI({ apiKey: apiKey || '' });
};

const SYSTEM_INSTRUCTION = `
Eres el Asistente de IA para el entrenador de Pádel Mariano Witte en Santiago del Estero, Argentina.
Tu objetivo es ayudar a los usuarios a aprender sobre pádel, responder preguntas técnicas y animarlos a reservar una clase.

Información de Mariano:
- Nombre: ${TRAINER_INFO.name}
- Biografía: ${TRAINER_INFO.bio}
- Especialidades: ${TRAINER_INFO.specialties.join(", ")}
- Experiencia: ${TRAINER_INFO.experience}

Tipos de Clases:
${LESSON_TYPES.map(l => `- ${l.title}: ${l.description} ($${l.price}/${l.duration})`).join("\n")}

Tono: Motivador, profesional, conocedor del deporte. Habla con terminología argentina (Clase, Cancha, Turno, Bandeja, Víbora).
Si preguntan por horarios exactos, diles que inicien la reserva en la sección "Reservar Turno" de la web para ver la disponibilidad real.
Mantén las respuestas concisas.
`;

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const ai = getAIClient();
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    const response = await chat.sendMessage({ message: userMessage });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hola! Mariano está en cancha ahora. Por favor consultá horarios en la sección de reserva o contactalo por WhatsApp.";
  }
};
