# 🎬 NetflixGPT — AI-Powered Movie Discovery

> **NetflixGPT** — a React + Redux web app that combines TMDB (movie metadata) with OpenAI GPT to deliver conversational, personalized movie discovery and recommendations. Built as a showcase project with clean architecture, documented code, and production-ready deployment.

---

## 📌 Badges
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)  
![React](https://img.shields.io/badge/React-18.2-blue.svg)  
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple.svg)  
![TMDB](https://img.shields.io/badge/TMDB-API-orange.svg)  
![OpenAI](https://img.shields.io/badge/OpenAI-GPT-green.svg)  
![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-blueviolet.svg)

---

# 📑 Table of Contents
1. [Overview](#overview)  
2. [Resume One-liner](#resume-one-liner)  
3. [Tech Stack](#tech-stack)  
4. [System Design & Flow](#system-design--flow)  
5. [Architecture](#architecture)  
6. [Key Components](#key-components)  
7. [API & Env Setup](#api--env-setup)  
8. [Prompt Design](#prompt-design)  
9. [Quickstart](#quickstart)  
10. [Testing](#testing)  
11. [Deployment](#deployment)  
12. [Performance & Security](#performance--security)  
13. [Future Roadmap](#future-roadmap)  
14. [Interview Talking Points](#interview-talking-points)  
15. [Screenshots](#screenshots)  
16. [Contributing](#contributing)  
17. [License](#license)  
18. [Acknowledgements](#acknowledgements)

---

## 🎯 Overview
NetflixGPT combines real streaming metadata from **TMDB** with **OpenAI GPT** to provide natural-language movie discovery and recommendations.  

Users can:
- 🔍 Search for movies  
- 💬 Chat with GPT to get personalized recommendations  
- 🎥 Watch trailers & view details  
- ❤️ Save favorites (optional with Firebase)  


---

## ⚙️ Tech Stack
- **Frontend:** React (Vite)  
- **State Management:** Redux Toolkit  
- **APIs:** TMDB API, OpenAI GPT API  
- **Styling:** Tailwind CSS  
- **Auth/DB (optional):** Firebase Auth & Firestore  
- **Deployment:** Vercel / Firebase Hosting  
- **Tooling:** ESLint, Prettier, Jest  

---

## 🏗 System Design & Flow
1. **User input** → Search/Chat  
2. **TMDB fetch** → metadata for candidate movies  
3. **Ranking** → by popularity, rating, release date  
4. **GPT prompt** → enrich results with explanations & recommendations  
5. **UI render** → Posters, trailers, reasons to watch, save options  
6. **Persistence** → Favorites saved with Firebase (optional)  
7. **Caching** → Redux store + localStorage  

---

## 📂 Architecture

/src
/api
tmdb.js
openai.js
/app
store.js
/features
/movies
moviesSlice.js
MoviesList.jsx
MovieCard.jsx
/recommendations
recSlice.js
Recommender.jsx
/auth (optional)
authSlice.js
/components
Header.jsx
SearchBar.jsx
ChatBox.jsx
TrailerModal.jsx
/utils
promptTemplates.js
App.jsx
index.jsx
.env



---

## 🧩 Key Components
- **SearchBar.jsx** → Search movies via TMDB  
- **MovieCard.jsx** → Show poster, details, GPT explanation  
- **ChatBox.jsx** → Conversational interface with GPT  
- **moviesSlice.js** → Manage TMDB search state  
- **recSlice.js** → Manage GPT responses  

---

export function movieRecommendationPrompt(userQuery, candidates) {
  return `
User asked: "${userQuery}"

Candidates:
${candidates.map(m => `- ${m.title} (${m.release_date}) — ${m.overview}`).join("\n")}

Task:
1. Rank top 5 matches, explain briefly.
2. Suggest 3 extra related movies.
3. Keep response concise and friendly.
`;
}


🚀 Quickstart
```
git clone https://github.com/<your-username>/NetflixGPT.git
cd NetflixGPT
npm install
```

---
```
npm run dev
```
---
```
npm run build

```
---

```
npm run test
```
---
