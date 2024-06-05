# nodejs-gemini-translation

Use Vertex AI to call Gemini 1.5 Pro latest model to perform translation

## Authenticate Google Cloud Credential for local development 

```bash
gcloud auth application-default login
```

## Create environment file
-  Copy .env.example to .env
-  Update GOOGLE_PROJECT_ID to Google Cloud Project
-  Update GOOGLE_LOCATION to Google Cloud Project
-  Update GOOGLE_MODEL to a model found in Vertex AI Model Garden

## Add sample strings to perform translation

Add texts to sample array

```typescript
const samples = [
    'Good morning',
    'Hello, how are you today?',
    'How much does 3 apples and 4 oranges cost?'
]
```

and the results are 

```json
[
    {
        "en": "Good morning",
        "es": "Buenos Dias"
    },
    {
        "en": "Hello, how are you today?",
        "es": "Hola, ¿cómo estás hoy?"
    },
    {
        "en": "How much does 3 apples and 4 oranges cost?",
        "es": "¿Cuánto cuestan tres manzanas, cinco piñas y cuatro naranjas?"
    }
]
```

## Update target language code

Change the TARGET environment variable in the "start script" of package.json

```bash
    "scripts": {
        "start": "TARGET=<target language code> node -r ts-node/register --env-file=.env index.ts"
    }
```

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
https://cloud.google.com/vertex-ai/generative-ai/docs/quotas