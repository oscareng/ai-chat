# ChatGPT Clone

![ChatGPT](https://i.postimg.cc/vTGmgmn4/Capture.png)
<br>
<p id="table-of-contents"><p>

# Table of Contents

- [Installation](#installation)
- [Tech Stack](#tech-stack)
- [Live Site](#live-site)

# Installation

`**Note**`: This app requires API key from <a href="https://openai.com/api/" >OPENAI</a>, <a href="https://console.cloud.google.com/" >Google OAuth Client ID and Client Secret</a> and <a href="https://firebase.google.com/" >Firebase Service Account Key</a>

### 1. Download Node.js and `npm` (follow instructions [here](https://nodejs.org/en/))

### 2. Git clone and cd into the repo folder:

```bash
https://github.com/sumitKcs/ai-chat.git && cd chatgpt-clone
```

### 3. Install all dependencies

```bash
npm install
```

### 4. In root directory of the project files, create a `.env.local` file

```bash
.env.local
```

### 5. In the `.env.local` file, create following environment variables:

```
GOOGLE_ID=YOUR_GOOGLE_OAUTH_ID
GOOGLE_SECRET=YOUR_GOOGLE_OAUTH_SECRET_KEY
NEXTAUTH_SECRET=ANY_RANDOM_LONG_ALPHANUMERIC_STRING
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
FIREBASE_SERVICE_ACCOUNT_KEY=YOUR_FIREBASE_SERVICE_ACCOUNT_KEY

```

### 3. Run the server

```bash
npm start
#for deployed version

npm run dev
#for deployed version
```

### 4. Access the project in your browser at [`localhost:1302`](http://localhost:1302)

<br>

<p id="tech-stack"></p>

## Tech Stack

- [Next.js 13](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://console.firebase.google.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com)

<br>
