
import { GoogleGenAI } from "@google/genai";
import { TRAINER_INFO, LESSON_TYPES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
Eres el Asistente de IA para el entrenador de Pádel Carlos Méndez.
Tu objetivo es ayudar a los usuarios a aprender sobre pádel, responder preguntas sobre la metodología de Carlos y animarlos a reservar una sesión.

Información de Carlos:
- Nombre: ${TRAINER_INFO.name}
- Biografía: ${TRAINER_INFO.bio}
- Especialidades: ${TRAINER_INFO.specialties.join(", ")}
- Logros: ${TRAINER_INFO.achievements.join(", ")}

Tipos de Clases:
${LESSON_TYPES.map(l => `- ${l.title}: ${l.description} ($${l.price}/${l.duration})`).join("\n")}

Sé motivador, profesional y con un tono deportivo. Si preguntan por horarios, diles que usen el calendario de reservas en la sección "Reservar" de la web.
Responde preguntas técnicas sobre pádel con consejos de experto sobre Bandejas, Víboras y posicionamiento.
Mantén las respuestas concisas pero útiles. Responde siempre en español.
`;

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
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
    return "Estoy teniendo un pequeño problema con la conexión a la pista. ¡Por favor, inténtalo de nuevo en un momento!";
  }
};
