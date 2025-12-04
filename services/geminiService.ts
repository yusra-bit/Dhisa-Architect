import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client
const ai = new GoogleGenAI({ apiKey });

export const getDesignAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, I cannot provide advice right now because the API key is missing.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `You are "Dhisa AI", a senior design consultant for Dhisa Architects. 
        Your tone is professional, sophisticated, yet accessible. 
        Provide concise, actionable architectural and interior design advice. 
        If asked about the firm, mention we specialize in modern sustainable residential and commercial projects.
        Keep responses under 100 words unless detailed technical advice is requested.`,
      }
    });

    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting to my design knowledge base right now. Please try again later.";
  }
};