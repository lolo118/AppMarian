
import { GoogleGenAI } from "@google/genai";
import { TRAINER_INFO, LESSON_TYPES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Padel Coach Carlos Mendez.
Your goal is to help users learn about Padel, answer questions about Carlos's training methodology, and encourage them to book a session.

Carlos's Info:
- Name: ${TRAINER_INFO.name}
- Bio: ${TRAINER_INFO.bio}
- Specialties: ${TRAINER_INFO.specialties.join(", ")}
- Achievements: ${TRAINER_INFO.achievements.join(", ")}

Lesson Types:
${LESSON_TYPES.map(l => `- ${l.title}: ${l.description} ($${l.price}/${l.duration})`).join("\n")}

Be encouraging, professional, and sporty. If users ask about scheduling, tell them they can use the booking calendar in the "Book Now" section of the website. 
Answer technical Padel questions with expert advice on Bandejas, Viboras, and positioning.
Keep responses concise but helpful.
`;

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    // We only send the latest message for simplicity in this specific flow
    const response = await chat.sendMessage({ message: userMessage });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting to the court right now. Please try again in a moment!";
  }
};
