import { GoogleGenAI, Type } from "@google/genai";
import { OptimizerResponse } from '../types';

export const optimizeSequence = async (proteinSequence: string): Promise<OptimizerResponse> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // Use a faster model for straightforward optimization tasks
  const modelName = 'gemini-3-flash-preview';

  const prompt = `
    You are an expert bioinformatician specializing in synthetic biology and E. coli protein expression.
    
    Task: Convert the following protein amino acid sequence into a DNA coding sequence optimized for high expression in Escherichia coli (E. coli K12).
    
    Rules:
    1. Use the most optimal codons for E. coli (Codon Adaptation Index optimization).
    2. Avoid rare codons (like AGG, AGA, CGA, CTA, ATA, CCC) unless necessary for secondary structure or slowing translation (but assume high expression is the goal here).
    3. Remove any whitespace or special characters from the input before processing.
    4. Provide a brief explanation of the optimization strategy used (e.g., GC content adjustment, avoiding repeats).
    5. Return the result in structured JSON.

    Input Protein Sequence:
    ${proteinSequence}
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            dnaSequence: {
              type: Type.STRING,
              description: "The optimized DNA sequence consisting of A, T, C, G."
            },
            explanation: {
              type: Type.STRING,
              description: "A concise summary (in Chinese) of the optimization strategy."
            }
          },
          required: ["dnaSequence", "explanation"]
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    
    if (!result.dnaSequence) {
        throw new Error("Failed to generate sequence");
    }

    return {
      dnaSequence: result.dnaSequence,
      explanation: result.explanation
    };

  } catch (error) {
    console.error("Gemini Optimization Error:", error);
    throw new Error("Optimization failed. Please check your network or API key.");
  }
};
