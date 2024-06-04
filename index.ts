import { generativeModel } from './model';

async function main() {
    const samples = [
        'Good morning',
        'Hello, how are you today?',
        'How much does 3 apples and 4 oranges cost?'
    ]

    const language = {
        source: 'en',
        target: 'zh-Hant',
    }

    const arrTranslations: Record<string, string>[] = [];

    for (let str of samples) {
        const generatedContents = await generativeModel.generateContent({
            systemInstruction: `You are a translation expert that can translate between source and target languages.
                Return the source and translation only.  If you dont know the translation,  then return 
                "UNKNOWN TRANSLATION".
                Do not include the source language code and the source text in the response.
                The response is target_language_code:translation\n
            `,
            contents: [
                {
                    role: 'user',
                    parts: [{ text: `${language.source}:${str} ${language.target}:` }],
                }
            ],
        });

        const candidates = generatedContents.response.candidates || [];
        for (const candidate of candidates) {
            const translations: Record<string, string> = {
                [language.source]: str
            };

            (candidate.content.parts || []).forEach((part) => {
                console.log('part', part);
                const lines = (part.text || '').split('\n')
                    .filter((line) => line !== '')
                    .filter((line) => line.trim());
                lines.forEach((line) => {
                    const [targetLanguage, text] = line.split(':');    
                    translations[targetLanguage] = text.trim()
                })
            });

            arrTranslations.push(translations);
        }
    }

    console.log(arrTranslations);
}

main();
