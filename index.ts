import { generativeModel } from './model';

const source = 'en';
const target = process.env.TARGET || 'ja';

async function main() {
    const samples = [
        'Good morning',
        'Hello, how are you today?',
        'How much does 3 apples, 5 pineapples and 4 oranges cost?',
        'My favorite hobby is riding bicycle.',
    ]

    const arrTranslations: Record<string, string>[] = [];

    for (let str of samples) {
        const generatedContents = await generativeModel.generateContent({
            systemInstruction: `You are a translation expert that can translate between source and target languages.
                If you dont know the translation, then return "UNKNOWN TRANSLATION".
                For numbers, please use words to represent instead of the arabic values.
                The response is target_language_code|translation.
            `,
            contents: [
                {
                    role: 'user',
                    parts: [{ text: `${source}:${str} ${target}:` }],
                }
            ],
        });

        const candidates = generatedContents.response.candidates || [];
        for (const candidate of candidates) {
            const translations: Record<string, string> = {
                [source]: str
            };

            (candidate.content.parts || []).forEach((part) => {
                console.log('part', part);
                const line = (part.text || '').trim();
                const [targetLanguage, text = ''] = line.split('|');    
                translations[targetLanguage] = text;
            });

            arrTranslations.push(translations);
        }
    }

    console.log(arrTranslations);
}

main();
