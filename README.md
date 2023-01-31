# AI Chat GPT-3
Access deployed application [here](https://ai-chat-tau.vercel.app/)

### Known Issues
-API requests are buggy and oftentimes fail due to request overload. Currently working on handling test cases.  
-Updated UI currently in development  
-Researching finetuning and semantic search capabilities for further use cases 

#### Set up environment variables

Create file named .env.local in root directory

```bash
cp .env.example .env.local
```

then, update `OPENAI_API_KEY` with your [OpenAI secret key](https://beta.openai.com/account/api-keys).

Next, run Next.js in development mode:

```bash
npm install
npm run dev

# or

yarn
yarn dev
```

The app should be up and running at http://localhost:3000.

