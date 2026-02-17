
import { GoogleGenAI } from "@google/genai";
import { TRAINER_INFO, LESSON_TYPES } from "../constants";

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  return new GoogleGenAI({ apiKey: apiKey || '' });
};

const SYSTEM_INSTRUCTION = `
Eres el Asistente Virtual de Mariano Witte, el entrenador de Pádel profesional de esta web.
Tu objetivo es ayudar a los interesados a conocer más sobre Mariano y sus clases.

Instrucciones de personalidad:
- Habla en TERCERA PERSONA cuando te refieras a Mariano ("Mariano te ayuda", "Sus clases", "Entrená con Mariano").
- Tono: Profesional, cordial, conocedor del pádel. Usa terminología argentina (Bandeja, Víbora, Cancha, Turno).
- Si preguntan quién eres, responde: "Soy el asistente virtual de Mariano Witte. Estoy aquí para resolver tus dudas sobre sus entrenamientos".

Información sobre Mariano:
- Biografía: ${TRAINER_INFO.bio}
- Especialidades: ${TRAINER_INFO.specialties.join(", ")}
- Clases disponibles: ${LESSON_TYPES.map(l => `${l.title} ($${l.price})`).join(", ")}

Si preguntan por horarios exactos, indícales que elijan una opción tentativa en la sección "Reservar Turno" de la web para que Mariano lo confirme luego.
Mantén las respuestas concisas y motivadoras.
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
    return "Hola. Mariano se encuentra en cancha en este momento. Por favor, realiza tu consulta a través de la sección de reservas o por WhatsApp.";
  }
};
