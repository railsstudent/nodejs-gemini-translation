# nodejs-gemini-translation

Use Vertex AI to call Gemini 1.5 Pro latest model to perform translation

## Authenticate Google Cloud Credential for local development 

```bash
gcloud auth application-default login
```

## Add sample strings to perform translation

Add texts to sample array

```typescript
const samples = [
    'Good morning',
    'Hello, how are you today?',
    'How much does 3 apples and 4 oranges cost?'
]
```
##

## Update target language code

Change the language code in the target property of language

```typescript
    const language = {
        source: 'en',
        target: 'zh-Hant',
    }
```
##

## Run the application
```bash
pnpm start
```

## Revoke Authenticate Google Cloud Credential

```bash
gcloud auth application-default revoke
```

## Resources

- Supported languages: https://cloud.google.com/translate/docs/languages#neural_machine_translation_model

- Tutorial: https://cloud.google.com/vertex-ai/generative-ai/docs/translate/translate-text#tt-api

- Quota and usage: 
https://cloud.google.com/vertex-ai/generative-ai/docs/translate/translate-text#tt-apihttps://cloud.google.com/vertex-ai/generative-ai/docs/translate/translate-text#tt-api