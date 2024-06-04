import { HarmBlockThreshold, HarmCategory, VertexAI } from '@google-cloud/vertexai';

const project = process.env.GOOGLE_PROJECT_ID || '';
const location = process.env.GOOGLE_LOCATION || 'asia-east-2';
const model = process.env.GOOGLE_MODEL || 'gemini-1.5.-pro-latest';

const vertexAi = new VertexAI({ project, location });
export const generativeModel = vertexAi.getGenerativeModel({
    model,
    generationConfig: {
        candidateCount: 1,
        maxOutputTokens: 1024,
        temperature: 0,
        topP: 0.5,
        topK: 10,
    },
    safetySettings: [
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        }
    ],
});
