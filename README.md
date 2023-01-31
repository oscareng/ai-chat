# AI Chat GPT-3
Access deployed application [here](https://ai-chat-tau.vercel.app/)
# Known Issues
-API requests are buggy and oftentimes fail due to request overload. Currently working on handling test cases.
-Updated UI currently in development

### Components

- Next.js
- OpenAI API (REST endpoint)
- API Routes (Edge runtime)

#### Set up environment variables

Rename [`.env.example`](.env.example) to `.env.local`:

```bash
cp .env.example .env.local
```

then, update `OPENAI_API_KEY` with your [OpenAI](https://beta.openai.com/account/api-keys) secret key.

Next, run Next.js in development mode:

```bash
npm install
npm run dev

# or

yarn
yarn dev
```

The app should be up and running at http://localhost:3000.

