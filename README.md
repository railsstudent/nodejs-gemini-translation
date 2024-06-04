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