# vite.config.js

```js
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
```

# uploadstadiums.js

```js
// Replace Firebase setup with Supabase setup
const { createClient } = require("@supabase/supabase-js")

const supabaseUrl = "https://fqvhmolcuyoxomwmhydw.supabase.co" // Replace with your Supabase project URL
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxdmhtb2xjdXlveG9td21oeWR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MTIzNDksImV4cCI6MjA0MTQ4ODM0OX0.yhI-E6eydUiX9PYou_3jcCdyGq0V1rb1UX42DXBR8tw" // Replace with your Supabase API key

const supabase = createClient(supabaseUrl, supabaseKey)

async function uploadData() {
  const stadiumData = require("./stadiums.json") // Path to your JSON file

  for (let item of stadiumData) {
    let response = await supabase
      .from("stadiums")
      .insert([
        { name: item.name, country: item.country, isLicensed: item.isLicensed },
      ])

    if (response.error) {
      console.error("Error uploading data: ", response.error.message)
    } else {
      console.log("Stadium data uploaded successfully for", item.name)
    }
  }
}

uploadData()
```

# tailwind.config.js

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        "electric-blue": "#2B32B2",
        "neon-purple": "#6E0DD0",
        "cosmic-orange": "#FF5C00",
        "galactic-white": "#FFFFFF",
        "space-black": "#000000",
        "starlight-yellow": "#F9D423",
      },
      fontFamily: {
        sans: ["Your Sans Serif Font", "sans-serif"],
        heading: ["Your Bold Sans Serif Font", "sans-serif"],
      },
      boxShadow: {
        custom:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      borderRadius: {
        custom: "10px",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
    },
  },
  plugins: [],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Adjust the glob pattern to match the file structure of your project
  ],
}
```

# README.md

```md
# Thunderbolts Premier League (TPL)

The **Thunderbolts Premier League (TPL)** is an interactive web application for cricket enthusiasts. Inspired by the FIFA Ultimate Team Web App, TPL allows users to manage custom cricket teams, participate in tournaments, engage in player trades through a dynamic transfer market, and bid on exclusive players in auctions.

This document provides an overview of the project, key features, technologies used, and development setup.

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Directory Structure](#directory-structure)
- [Development Guidelines](#development-guidelines)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Thunderbolts Premier League is a cricket-themed web application that provides users with the tools to:

- Manage custom teams
- Participate in tournaments
- Trade player cards in a dynamic transfer market
- Bid in real-time auctions for rare player cards
- View real-time leaderboards and match results

The platform is built for scalability, security, and an engaging user experience, optimized for both desktop and mobile devices.

## Key Features

- **User Authentication**: Secure login and registration via Supabase.
- **Team Management**: Create and manage custom cricket teams.
- **Match Posting**: Users can post match results, verified by opponents with OCR technology for scorecard processing.
- **Transfer Market**: Buy and sell player cards with real-time updates.
- **Auction System**: Bid on rare player cards in real-time.
- **Leaderboards and Stats**: Track user and team performance in real-time.
- **Responsive UI**: Tailored for both desktop and mobile, using Tailwind CSS and shadcn components.
- **In-App Currency and Wallet**: Earn and manage in-app currency for transactions.

## Technology Stack

### Frontend

- **Vue.js 3** with Composition API
- **Tailwind CSS** for styling
- **shadcn** for UI components
- **Vite** as the build tool

### Backend

- **Express.js** for server-side logic
- **Supabase** for authentication, real-time database, and storage

### Additional Technologies

- **OCR (Optical Character Recognition)** for scorecard processing
- **WebSockets** for real-time updates (via socket.io)

## Setup and Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16+)
- **npm** (v7+)

### Installation

Clone the repository and install dependencies:

\`\`\`bash
git clone https://github.com/yourusername/project-tpl.git
cd project-tpl
npm install
\`\`\`

## Environment Variables

Create a .env file in the root directory and add the following environment variables:

makefile
Copy code
VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_KEY=<your-supabase-key>

### Scripts

The following npm scripts are available:

npm run dev: Start the development server using Vite
npm run build: Build the application for production
npm run preview: Preview the production build
npm run lint: Run ESLint for code quality checks

### Directory Structure

bash
Copy code
.
├── public/ # Static assets
├── src/ # Source files
│ ├── components/ # Vue.js components
│ ├── views/ # Vue.js views (pages)
│ ├── store/ # Pinia store for state management
│ ├── api/ # Axios API service files
│ ├── assets/ # Static assets (images, etc.)
│ └── App.vue # Main Vue app component
├── vite.config.js # Vite configuration file
├── tailwind.config.js # Tailwind CSS configuration
├── package.json # Project metadata and dependencies
└── .env # Environment variables

### Development Guidelines

Follow Vue Style Guide and ensure proper use of the Composition API.
Modularize components for reusability.
Use shadcn components for consistent UI.
Code must be formatted using ESLint and Prettier.
Write unit tests using Jest and Vue Test Utils for all components.

### Testing

We use Jest for unit testing and Cypress for end-to-end testing. Run tests using:

bash
Copy code
npm run test

### Contributing

We welcome contributions from the community. Please follow the Contributing Guidelines when submitting pull requests.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
```

# postcss.config.js

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

# package.json

````json
{
  "name": "project-tpl",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "preinstall": "npx npm-force-resolutions",
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview",
    "lint": "eslint src"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.45.3",
    "autoprefixer": "^10.4.16",
    "axios": "^1.6.2",
    "core-js": "^3.33.3",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "ejs": "^3.1.9",
    "express": "^4.19.2",
    "pinia": "^2.2.2",
    "postcss": "^8.4.45",
    "tailwindcss": "^3.3.5",
    "uuid": "^9.0.1",
    "vue": "^3.3.9",
    "vue-router": "^4.2.5"
  },
  "devDependencies": {
    "@babel/core": "^7.23.5",
    "@babel/eslint-parser": "^7.23.3",
    "@babel/preset-env": "^7.25.4",
    "@vitejs/plugin-vue": "^5.1.3",
    "@vue/cli-plugin-babel": "^5.0.8",
    "eslint": "^8.54.0",
    "eslint-plugin-vue": "^9.19.2",
    "vite": "^5.4.3"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": ["plugin:vue/vue3-essential", "eslint:recommended"],
    "parserOptions": {
      "parser": "@babel/eslint-parser"
    },
    "rules": {}
  },
  "browserslist": ["> 1%", "last 2 versions", "not dead", "not ie 11"],
  "description": "```\r npm install\r ```",
  "main": "babel.config.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/khagga926/project-tpl.git"
  },
  "keywords": ["tpl"],
  "author": "shah",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/khagga926/project-tpl/issues"
  },
  "homepage": "https://github.com/khagga926/project-tpl#readme"
}
````

# jsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "baseUrl": "./",
    "moduleResolution": "node",
    "paths": {
      "@/*": ["src/*"]
    },
    "lib": ["esnext", "dom", "dom.iterable", "scripthost"]
  }
}
```

# index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
    <title>Thunderbolts Premier League</title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but Thunderbolts Premier League doesn't work properly
        without JavaScript enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- Vite will inject built files automatically -->
    <script type="module" src="/src/main.js"></script>
    <!-- Load the Vue app -->
  </body>
</html>
```

# babel.config.js

```js
module.exports = {
  presets: ["@babel/preset-env"],
}
```

# .gitignore

```
# System files
.DS_Store

# Dependency directories
node_modules
/dist

# Local environment variable files
.env
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Firebase credentials
tpl-platform-4079e-firebase-adminsdk-xi77l-2ff4dd728e.json

```

# .gitattributes

```
* text=auto
```

# .eslintrc.js

```js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
}
```

# .cursorignore

```
# Add directories or file patterns to ignore during indexing (e.g. foo/ or *.csv)

```

# .aidigestignore

```
docs
```

# src\main.js

```js
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./styles/global.css"

const app = createApp(App)
app.use(router)
app.mount("#app")
```

# src\App.vue

```vue
<template>
  <div class="min-h-screen bg-spaceBlack">
    <MainNavbar />
    <router-view />
  </div>
</template>

<script setup>
import MainNavbar from "./components/MainNavbar.vue"
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
```

# public\favicon.ico

This is a binary file of the type: Binary

# src\views\TransfersPage.vue

```vue
<template>
  <div>
    <!-- Your component content here -->
  </div>
</template>

<script setup>
// Your component logic here
</script>

<style scoped>
/* Your component styles here */
</style>
```

# src\views\ToursPage.vue

```vue
<template>
  <div>
    <!-- Your component's template goes here -->
  </div>
</template>

<script setup>
// Your component's options go here
</script>

<style scoped>
/* Your component's styles go here */
</style>
```

# src\views\TournamentsPage.vue

```vue
<template>
  <div>
    <h1>Tournaments Page</h1>
    <!-- Add your content here -->
  </div>
</template>

<script setup>
// Add your component logic here
</script>

<style scoped>
/* Add your component styles here */
</style>
```

# src\views\TeamsPage.vue

```vue
<style>
@import "../styles/global.css";
</style>
```

# src\views\RulesPage.vue

```vue
<template>
  <div class="min-h-screen bg-space-black p-8">
    <div class="container mx-auto">
      <div
        class="bg-gradient-to-r from-neon-purple to-electric-blue p-4 rounded-lg shadow-xl"
      >
        <h2 class="text-4xl text-galactic-white font-bold mb-4">
          Playing Rules
        </h2>
        <div
          v-for="(rules, category) in categorizedRules"
          :key="category"
          class="mb-4 p-4 bg-space-black bg-opacity-80 rounded-lg"
        >
          <h3 class="text-2xl text-starlight-yellow font-semibold mb-2">
            {{ category }}
          </h3>
          <ul>
            <li
              v-for="rule in rules"
              :key="rule"
              class="text-galactic-white text-lg mb-1"
            >
              {{ rule }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
const categorizedRules = ref({
  "Team Composition and Match Settings": [
    "Team Name: TPL (Mixed Cards)",
    "Match Format: T20",
    "Rounds: Each team will play 3 rounds.",
    "Difficulty Level: Legend (Hardest)",
    "Ground Selection: Any official ground may be chosen.",
    "Skill Normalization: Not applicable.",
    "Timer: Disabled during gameplay.",
  ],
  "In-Game Rules": [
    "Batting Restrictions: Players are allowed one sweep, scoop, advance, or movement per over. After the 6th over, no sweeps to pace or spin are allowed if there is no slip present.",
    "Ball Types: Each over must include three colored balls, with a maximum of two red balls.",
    "Bowling Quotas: A maximum of 8 overs of spin is allowed, with a minimum of 4 overs. Fast bowlers (RF/LF) are limited to 2 per squad.",
    "Over Restrictions: Each over may include one defensive play and one run. Pure batsmen are prohibited from bowling. Batsmen must not step outside the off stump.",
    "Fielding Setup: A 5-4 fielding setup is required. Fielders at short mid-off/on and short cover/leg are prohibited. The chip shot is banned.",
    "Slip Fielders: Rules regarding slip fielders after six overs for pace and spin bowlers.",
  ],
  "Bowling Actions and All-Rounders": [
    "Three genuine bowlers are compulsory in every playing XI.",
    "Each bowler must have a unique bowling action; no two bowlers in the playing XI can have the same style.",
    "Fast-medium and medium bowlers can bowl a combined maximum of 12 overs.",
    "All-Rounders: A maximum of 4 all-rounders are allowed in the playing XI.",
  ],
  "Technical Issues and Glitches": [
    "In the event of glitches, such as invisible balls or markers not appearing, save and exit the match to continue. If the issue persists, the match should be discontinued.",
  ],
  "Specific Player Restrictions": [
    "Refrain from using actions of S. Afridi, Bumrah, Malinga, Harbhajan if playing with Cards only.",
  ],
})
</script>

<style scoped>
.v-toolbar {
  border-radius: 4px 4px 0 0;
}

.v-expansion-panel-header {
  font-size: 1.1rem;
  font-weight: bold;
}

.v-expansion-panel-content {
  font-size: 0.95rem;
  background-color: var(--light-background);
}

.title {
  margin-bottom: 20px;
  color: #0047ab; /* Electric Blue */
  font-size: 2em;
  font-family: "Montserrat", sans-serif;
}

.rules-container {
  max-width: 800px;
  margin: auto;
  background-color: #ffffff; /* Galactic White */
}

.v-expansion-panel-header {
  background-color: #0047ab; /* Electric Blue */
  color: #ffffff; /* Galactic White */
}

.v-expansion-panel-content {
  background-color: #ffffff; /* Galactic White */
  color: #000000; /* Space Black */
}

.v-chip {
  margin-bottom: 10px;
  background-color: #7d3c98; /* Neon Purple */
  color: #ffffff; /* Galactic White */
}

/* Custom colors to match the theme */
.primary {
  background-color: var(--electric-blue);
}

/* Global style overrides */
:root {
  --electric-blue: #0047ab;
  --light-background: #f5f5f5;
}
</style>
```

# src\views\RegisterPage.vue

```vue
<template>
  <div class="register-page-container">
    <h1 class="register-header">Create Your Account</h1>
    <form class="register-form">
      <input
        type="email"
        class="register-input"
        placeholder="Email"
        v-model="email"
      />
      <input
        type="password"
        class="register-input"
        placeholder="Password"
        v-model="password"
      />
      <button type="submit" class="register-button">Sign Up</button>
      <p v-if="error" class="register-error">{{ error }}</p>
    </form>
    <p class="register-footer">
      Already have an account?
      <a href="/login" class="register-link">Login here</a>
    </p>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "RegisterPage",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    }
  },
  methods: {
    async handleRegistration() {
      try {
        await axios.post("/api/register", {
          email: this.email,
          password: this.password,
        })
        this.$router.push("/login")
      } catch (e) {
        this.error = e.response?.data?.message || e.message
      }
    },
    async socialLogin(provider) {
      // Logic for social login
      window.location.href = `/api/auth/${provider}`
    },
  },
}
</script>

<!-- Scoped styles are removed to leverage global.css -->
```

# src\views\PitchRandomizer.vue

```vue
<template>
  <div class="min-h-screen bg-space-black p-8 text-galactic-white">
    <div class="container mx-auto space-y-6">
      <div
        class="bg-gradient-to-r from-neon-purple via-electric-blue to-neon-purple p-6 rounded-xl shadow-lg"
      >
        <h2 class="text-3xl font-bold mb-4">Generate Pitch Conditions</h2>
        <div
          v-if="generatedPitch"
          class="p-4 bg-space-black bg-opacity-80 rounded-xl"
        >
          <div class="grid grid-cols-1 gap-4">
            <div>
              <span
                class="px-6 py-3 justified-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >Stadium:
              </span>
              <span
                class="text-xs font-bold text-galactic-white uppercase tracking-wider"
                >{{ generatedPitch.stadium }}</span
              >
            </div>
            <div>
              <span
                class="px-6 py-3 justified-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >Pitch Type:
              </span>
              <span
                class="text-xs font-bold text-galactic-white uppercase tracking-wider"
                >{{ generatedPitch.pitchType }}</span
              >
            </div>
            <div>
              <span
                class="px-6 py-3 justified-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >Cracks:
              </span>
              <span
                class="text-xs font-bold text-galactic-white uppercase tracking-wider"
                >{{ generatedPitch.cracks }}</span
              >
            </div>
            <div>
              <span
                class="px-6 py-3 justified-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >Hardness:
              </span>
              <span
                class="text-xs font-bold text-galactic-white uppercase tracking-wider"
                >{{ generatedPitch.hardness }}</span
              >
            </div>
            <div>
              <span
                class="px-6 py-3 justified-center text-s font-bold text-galactic-white uppercase"
                >Pitch Day:
              </span>
              <span
                class="text-xs font-bold text-galactic-white uppercase tracking-wider"
                >{{ generatedPitch.pitchDay }}</span
              >
            </div>
            <div>
              <span
                class="px-6 py-3 justified-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >Pitch ID:
              </span>
              <span
                class="text-xs font-bold text-galactic-white uppercase tracking-wider"
                >{{ generatedPitch.id || "N/A" }}</span
              >
            </div>
            <div>
              <span
                class="px-6 py-3 justified-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >Country:
              </span>
              <span
                class="text-xs font-bold text-galactic-white uppercase tracking-wider"
                >{{ generatedPitch.country }}</span
              >
            </div>
            <div>
              <span
                class="px-6 py-3 justified-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >License Status:
              </span>
              <span
                class="text-xs font-bold text-galactic-white uppercase tracking-wider"
                >{{
                  generatedPitch.isLicensed ? "Licensed" : "Unlicensed"
                }}</span
              >
            </div>
          </div>
          <button
            class="mt-4 bg-cosmic-orange text-galactic-white font-bold py-2 px-4 rounded hover:bg-starlight-yellow transition duration-300"
            @click="copyToClipboard(generatedPitch)"
          >
            Copy Current Pitch
          </button>
        </div>
        <button
          class="mt-4 text-galactic-white font-bold py-2 px-4 rounded bg-electric-blue hover:bg-neon-purple transition duration-300"
          @click="generatePitch"
        >
          Generate New Pitch
        </button>
        <div v-if="error" class="mt-4 text-red-500">{{ error }}</div>
      </div>
      <div
        class="bg-gradient-to-r from-neon-purple via-electric-blue to-neon-purple p-6 rounded-xl shadow-lg"
      >
        <h3 class="text-3xl font-bold text-galactic-white mb-4">Pitch Log</h3>
        <div
          class="overflow-x-auto bg-space-black bg-opacity-80 rounded-xl p-4"
        >
          <table class="min-w-full divide-y divide-galactic-white">
            <thead class="bg-space-black">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >
                  Stadium
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >
                  Pitch Type
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >
                  Cracks
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >
                  Hardness
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >
                  Pitch Day
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >
                  Time/Date
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >
                  Country
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >
                  License Status
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-s font-bold text-galactic-white uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-space-black divide-y divide-galactic-white">
              <tr v-for="(entry, index) in logEntries" :key="index">
                <td class="px-6 py-4 whitespace-nowrap">{{ index + 1 }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ entry.stadium }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ entry.pitchType }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">{{ entry.cracks }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ entry.hardness }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ entry.pitchDay }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ entry.timestamp }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">{{ entry.country }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ entry.isLicensed ? "Licensed" : "Unlicensed" }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <button
                    class="bg-cosmic-orange text-white font-bold py-1 px-3 rounded hover:bg-starlight-yellow transition duration-300"
                    @click="copyToClipboard(entry)"
                  >
                    Copy
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "PitchRandomizer",
  data() {
    return {
      pitchId: 0,
      generatedPitch: null,
      logEntries: [],
      error: "",
    }
  },
  methods: {
    async generatePitch() {
      try {
        this.error = ""
        const response = await axios.get(
          "http://localhost:3000/api/pitch-randomizer"
        )
        const pitchData = {
          ...response.data,
          timestamp: new Date().toLocaleString(),
        }
        this.generatedPitch = pitchData
        this.logEntries.unshift(pitchData)
        this.pitchId++
      } catch (err) {
        this.error = `Failed to load pitch data: ${
          err.message || "Server error"
        }`
      }
    },
    copyToClipboard(pitch) {
      if (!pitch) {
        this.error = "No pitch data available to copy."
        return
      }
      const pitchText = `ID: ${pitch.id}\nStadium: ${pitch.stadium}\nCountry: ${
        pitch.country
      }\nLicense Status: ${
        pitch.isLicensed ? "Licensed" : "Unlicensed"
      }\nPitch Type: ${pitch.pitchType}\nCracks: ${pitch.cracks}\nHardness: ${
        pitch.hardness
      }\nPitch Day: ${pitch.pitchDay}\nTimestamp: ${pitch.timestamp}`
      navigator.clipboard.writeText(pitchText).catch((err) => {
        this.error = "Failed to copy pitch conditions: " + err.message
      })
    },
  },
}
</script>

<style scoped>
/* Add your scoped styles here if needed */
</style>
```

# src\views\NotFound.vue

```vue
<template>
  <div>
    <h1>404 Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
  </div>
</template>
```

# src\views\MarketPage.vue

```vue
<template>
  <div
    class="app-container bg-space-black text-galactic-white min-h-screen p-4"
  >
    <h1 class="text-4xl font-bold text-electric-blue mb-6">Market Page</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Objectives card -->
      <div class="card bg-neon-purple p-4 rounded-lg">
        <h2 class="card-title text-2xl font-semibold mb-2">Objectives</h2>
        <p class="card-subtitle text-starlight-yellow">
          Season 2 Act II: It's the Season
        </p>
        <p class="card-time-left text-cosmic-orange mt-2">
          13 Days 21 Hours Left
        </p>
        <p class="card-description mt-2">
          Check back daily to discover new Objectives for the opportunity to
          earn rewards.
        </p>
      </div>

      <!-- Add more cards here -->
    </div>
  </div>
</template>

<script setup>
// Composition API logic goes here, if needed

// Any reactive data, computed properties, or methods can be defined directly here
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

/* You can add any additional styles here */
</style>
```

# src\views\LoginPage.vue

```vue
<template>
  <div class="flex items-center justify-center min-h-screen bg-space-black p-4">
    <div class="w-full max-w-md form-container">
      <h1 class="form-title">Login to TPL</h1>
      <form @submit.prevent="handleLogin" class="space-y-6 mt-4">
        <div class="input-field">
          <label for="email" class="input-label">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="input-box"
            required
            autofocus
          />
        </div>
        <div class="input-field">
          <label for="password" class="input-label">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="input-box"
            required
          />
        </div>
        <button type="submit" class="btn-primary w-full">Login</button>
        <p v-if="error" class="error-message">{{ error }}</p>
      </form>
      <div class="text-center text-galactic-white mt-4">
        <a href="#" class="link-hover">Forgot Password?</a><br />
        New to TPL? <a href="/register" class="link-hover">Sign Up</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const error = ref("")
const router = useRouter()

const handleLogin = async () => {
  try {
    await axios.post("/api/login", {
      email: email.value,
      password: password.value,
    })
    router.push("/some-success-route")
  } catch (err) {
    error.value = err.response?.data?.message || "Login failed"
  }
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
```

# src\views\HomePage.vue

```vue
<template>
  <div
    class="min-h-screen bg-space-black flex flex-col items-center justify-center text-galactic-white"
  >
    <h1 class="text-6xl font-heading mb-6 text-electric-blue">
      Welcome to TPL
    </h1>
    <p class="text-xl mb-6">The premier destination for cricket enthusiasts.</p>
    <div
      class="animate-spin rounded-full h-32 w-32 border-t-4 border-cosmic-orange"
    ></div>
    <div class="text-center mt-4">
      <h3 class="text-6xl font-bold text-cosmic-orange glow">Coming Soon...</h3>
    </div>
  </div>
</template>

<script setup>
// Composition API logic goes here, if needed

// Any reactive data, computed properties, or methods can be defined directly here
</script>

<style>
@import "../styles/global.css";
/* Additional custom styles if needed */
</style>
```

# src\views\ContactPage.vue

```vue
<style>
@import "../styles/global.css";
</style>
```

# src\views\AuctionPage.vue

```vue
<template>
  <div>
    <h1>Auction Page</h1>
    <!-- Add your content here -->
  </div>
</template>

<script>
export default {
  name: "AuctionPage",
  // Add your component logic here
}
</script>

<style scoped>
/* Add your component styles here */
</style>
```

# src\views\AboutPage.vue

```vue
<style>
@import "../styles/global.css";
</style>
```

# src\utils\supabase.js

```js
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseAnonKey = process.env.VITE_SUPABASE_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Supabase URL or Anon Key is missing. Please check your .env file."
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

# src\utils\index.js

```js
const { v4: uuidv4 } = require("uuid")

function generateUUID() {
  return uuidv4()
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function getRandomStadium(stadiums) {
  return getRandomElement(stadiums)
}

function getRandomPitchType() {
  const pitchTypes = [
    "Standard",
    "Grassy",
    "Grassy/Dry",
    "Grassy/Dusty",
    "Dry",
    "Dusty",
  ]
  return getRandomElement(pitchTypes)
}

function getRandomCracks() {
  const cracks = ["None", "Light", "Heavy"]
  return getRandomElement(cracks)
}

function getRandomHardness() {
  const hardness = ["Hard", "Medium", "Soft"]
  return getRandomElement(hardness)
}

function getRandomPitchDay() {
  return Math.floor(Math.random() * 2) + 1
}

module.exports = {
  generateUUID,
  getRandomElement,
  getRandomStadium,
  getRandomPitchType,
  getRandomCracks,
  getRandomHardness,
  getRandomPitchDay,
}
```

# src\styles\global.css

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

/* Define custom color variables */
:root {
  --electric-blue: #0047ab;
  --neon-purple: #7d3c98;
  --cosmic-orange: #ffa500;
  --galactic-white: #ffffff;
  --space-black: #000000;
  --starlight-yellow: #ffd700;
}

@layer base {
  h1 {
    @apply text-electric-blue font-bold;
    font-family: "Exo 2", sans-serif;
  }

  p {
    text-color: var(--space-black);
    font-family: "Roboto", sans-serif;
  }

  a {
    @apply text-starlight-yellow hover:text-cosmic-orange;
    transition: color 0.3s;
  }

  body {
    @apply bg-galactic-white text-space-black;
    font-family: "Roboto", sans-serif;
  }

  /* More base styles */
}

@layer components {
  /* MainNavbar Styles */
  .navbar {
    background-color: var(--electric-blue);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1.5rem;
  }

  .navbar-brand {
    font-size: 1.25rem; /* Adjust size as needed */
    color: var(--galactic-white);
    font-weight: bold;
  }

  .navbar-nav {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  .navbar-link {
    display: inline-block;
    margin: 0 0.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    color: var(--galactic-white);
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;
  }

  .navbar-link:hover {
    background-color: var(--neon-purple);
    color: var(--galactic-white);
  }

  /* AuctionPage Styles */
  .auction-container {
    background-color: var(--galactic-white);
    color: var(--space-black);
  }
  .auction-item {
    border: 1px solid var(--neon-purple);
    padding: 1rem;
    margin-bottom: 1rem;
  }

  /* HomePage Styles */
  .home-container {
    background-color: var(--galactic-white);
    color: var(--space-black);
  }
  .home-banner {
    background-color: var(--neon-purple);
    color: var(--galactic-white);
    padding: 2rem;
    text-align: center;
  }

  /* LoginPage Styles */
  .login-container {
    background-color: var(--galactic-white);
    color: var(--space-black);
  }
  .login-form {
    max-width: 400px;
    margin: auto;
  }
  .login-input {
    border: 1px solid var(--electric-blue);
  }

  /* MarketPage Styles */
  .market-container {
    background-color: var(--galactic-white);
    color: var(--space-black);
  }
  .market-item {
    border-bottom: 1px solid var(--neon-purple);
    padding: 1rem;
  }

  /* PitchRandomizer Styles */
  .pitch-container {
    background-color: var(--galactic-white);
    color: var(--space-black);
  }
  .pitch-details {
    border: 1px solid var(--cosmic-orange);
    padding: 1rem;
  }

  /* RegisterPage Styles */
  .register-container {
    background-color: var(--galactic-white);
    color: var(--space-black);
  }
  .register-form {
    max-width: 400px;
    margin: auto;
  }
  .register-input {
    border: 1px solid var(--starlight-yellow);
  }

  /* RulesPage Styles */
  .rules-container {
    background-color: var(--galactic-white);
    color: var(--space-black);
  }
  .rule-item {
    border-bottom: 1px solid var(--neon-purple);
    padding: 1rem;
  }

  /* TournamentsPage Styles */
  .tournaments-container {
    background-color: var(--galactic-white);
    color: var(--space-black);
  }
  .tournament-item {
    border: 1px solid var(--electric-blue);
    padding: 1rem;
  }

  /* ToursPage Styles */
  .tours-container {
    background-color: var(--galactic-white);
    color: var(--space-black);
  }
  .tour-item {
    border: 1px solid var(--cosmic-orange);
    padding: 1rem;
  }

  /* TransfersPage Styles */
  .transfers-container {
    background-color: var(--galactic-white);
    color: var(--space-black);
  }
  .transfer-item {
    border: 1px solid var(--starlight-yellow);
    padding: 1rem;
  }
}

/* Gradient Backgrounds */
.bg-gradient-to-r {
  background-image: linear-gradient(
    to right,
    var(--electric-blue),
    var(--neon-purple)
  );
}

.hover\:bg-gradient-to-r:hover {
  background-image: linear-gradient(
    to right,
    var(--neon-purple),
    var(--electric-blue)
  );
}

.input-label {
  @apply text-galactic-white font-medium;
}

.input-box {
  @apply bg-space-black text-galactic-white border border-neon-purple rounded-md px-4 py-2 outline-none focus:border-electric-blue;
}

.btn-primary {
  @apply bg-electric-blue text-galactic-white font-bold py-2 px-4 rounded hover:bg-neon-purple focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-opacity-50;
}

.form-container {
  @apply bg-galactic-white rounded-lg shadow-xl p-8;
}

.form-title {
  @apply text-3xl font-bold text-center text-electric-blue;
}

.link-hover {
  @apply text-starlight-yellow hover:text-cosmic-orange;
}

.error-message {
  @apply text-red-500 text-center mt-2;
}

/* Utility Classes */
@layer utilities {
  .bg-primary {
    background-color: var(--electric-blue);
  }

  .bg-secondary {
    background-color: var(--neon-purple);
  }

  /* More utilities */
}
```

# src\services\auth.js

```js
import { supabase } from "../lib/supabaseClient"

// src/services/auth.js

export const authService = {
  async register(email, password) {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) throw error
    return user
  },

  async login(email, password) {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
    return user
  },

  async logout() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  async resetPassword(email) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email)
    if (error) throw error
    return data
  },

  async getCurrentUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    return user
  },
}
```

# src\server\server.js

```js
const express = require("express")
const cors = require("cors")
const router = require("./routes")
const { supabase } = require("./utils/supabase")

// Initialize Express app
const app = express()
const port = process.env.PORT || 3000

// CORS Configuration
app.use(cors({ origin: "http://localhost:5173", optionsSuccessStatus: 200 }))

// Use router
app.use("/api", router)

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

module.exports = { supabase }
```

# src\server\routes.js

```js
const express = require("express")
const { supabase } = require("./server")
const {
  getRandomStadium,
  getRandomPitchType,
  getRandomCracks,
  getRandomHardness,
  getRandomPitchDay,
} = require("../utils")

const router = express.Router()

// Fetch stadiums from Supabase
router.get("/stadiums", async (req, res) => {
  try {
    const { data: stadiums, error } = await supabase
      .from("stadiums")
      .select("name, country, isLicensed")

    if (error) throw error

    res.json(stadiums)
  } catch (error) {
    console.error("Error fetching stadiums:", error)
    res.status(500).send("Internal Server Error")
  }
})

// Pitch randomizer
router.get("/pitch-randomizer", async (req, res) => {
  try {
    const { data: stadiums, error } = await supabase
      .from("stadiums")
      .select("name, country, isLicensed")

    if (error) throw error

    const stadiumDetails = stadiums.map(({ name, country, isLicensed }) => ({
      name,
      country,
      isLicensed,
    }))
    const randomStadium = getRandomStadium(stadiumDetails)
    const randomPitch = {
      stadium: randomStadium.name,
      country: randomStadium.country,
      isLicensed: randomStadium.isLicensed,
      pitchType: getRandomPitchType(),
      cracks: getRandomCracks(),
      hardness: getRandomHardness(),
      pitchDay: getRandomPitchDay(),
    }

    res.json(randomPitch)
  } catch (error) {
    console.error("Error in pitch randomizer:", error)
    res.status(500).send("Internal Server Error")
  }
})

module.exports = router
```

# src\router\index.js

```js
import { createRouter, createWebHistory } from "vue-router"
import HomePage from "../views/HomePage.vue"
import AuctionPage from "../views/AuctionPage.vue"
import TournamentsPage from "../views/TournamentsPage.vue"
import RulesPage from "../views/RulesPage.vue"
import PitchRandomizer from "../views/PitchRandomizer.vue"
import LoginPage from "../views/LoginPage.vue"
import RegisterPage from "../views/RegisterPage.vue"
import MarketPage from "../views/MarketPage.vue"
import ToursPage from "../views/ToursPage.vue"
import TransfersPage from "../views/TransfersPage.vue"

const routes = [
  { path: "/", component: HomePage },
  { path: "/auction", component: AuctionPage },
  { path: "/tournaments", component: TournamentsPage },
  { path: "/rules", component: RulesPage },
  { path: "/pitch-randomizer", component: PitchRandomizer },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/market", component: MarketPage },
  { path: "/tours", component: ToursPage },
  { path: "/transfers", component: TransfersPage },
  // Add additional routes as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
```

# src\components\MainNavbar.vue

```vue
<template>
  <nav class="navbar flex items-center justify-between shadow-lg px-4 py-2">
    <div class="navbar-brand text-galactic-white font-bold text-xl">
      <a href="/">TPL League</a>
    </div>
    <ul class="navbar-nav flex items-center">
      <!-- List of Navigation Links -->
      <li><a href="/" class="navbar-link">Home</a></li>
      <li><a href="/auction" class="navbar-link">Auction</a></li>
      <li><a href="/tournaments" class="navbar-link">Tournaments</a></li>
      <li><a href="/rules" class="navbar-link">Rules</a></li>
      <li>
        <a href="/pitch-randomizer" class="navbar-link">Pitch Randomizer</a>
      </li>
      <li><a href="/market" class="navbar-link">Market</a></li>
      <li><a href="/tours" class="navbar-link">Tours</a></li>
      <li><a href="/transfers" class="navbar-link">Transfers</a></li>
      <li><a href="/login" class="navbar-link">Login</a></li>
      <li><a href="/register" class="navbar-link">Register</a></li>
      <!-- Additional Links as needed -->
    </ul>
  </nav>
</template>

<script>
import { ref } from "vue"

export default {
  name: "MainNavbar",
  setup() {
    const showModal = ref(false)

    return {
      showModal,
    }
  },
}
</script>

<style>
.glow {
  text-shadow: 0 0 8px #ff5c00;
}
</style>
```

# src\assets\logo.png

This is a binary file of the type: Image

# src\server\utils\supabase.js

```js
// src/supabase.js
const { createClient } = require("@supabase/supabase-js")
const dotenv = require("dotenv")

dotenv.config({ path: "../../../.env" })

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase URL or Key is missing. Please check your .env file.")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = { supabase }
```

# src\server\config\stadiums.json

```json
[
  {
    "name": "Melbourne Cricket Ground",
    "country": "Australia",
    "isLicensed": true
  },
  {
    "name": "Sydney Cricket Ground",
    "country": "Australia",
    "isLicensed": true
  },
  {
    "name": "Adelaide Oval",
    "country": "Australia",
    "isLicensed": true
  },
  {
    "name": "Blundstone Arena",
    "country": "Australia",
    "isLicensed": false
  },
  {
    "name": "Perth Stadium",
    "country": "Australia",
    "isLicensed": true
  },
  {
    "name": "Allan Border Field",
    "country": "Australia",
    "isLicensed": true
  },
  {
    "name": "Coffs Harbour",
    "country": "Australia",
    "isLicensed": false
  },
  {
    "name": "Docklands Stadium",
    "country": "Australia",
    "isLicensed": false
  },
  {
    "name": "Lord's Cricket Ground",
    "country": "England",
    "isLicensed": true
  },
  {
    "name": "Kia Oval",
    "country": "England",
    "isLicensed": false
  },
  {
    "name": "Emirates Old Trafford",
    "country": "England",
    "isLicensed": false
  },
  {
    "name": "Edgbaston Cricket Ground",
    "country": "England",
    "isLicensed": true
  },
  {
    "name": "Trent Bridge",
    "country": "England",
    "isLicensed": true
  },
  {
    "name": "Headingley",
    "country": "England",
    "isLicensed": true
  },
  {
    "name": "Ageas Bowl",
    "country": "England",
    "isLicensed": false
  },
  {
    "name": "Sophia Gardens",
    "country": "England",
    "isLicensed": false
  },
  {
    "name": "Kennington Oval",
    "country": "England",
    "isLicensed": false
  },
  {
    "name": "Bristol County Ground",
    "country": "England",
    "isLicensed": false
  },
  {
    "name": "The Gabba",
    "country": "Australia",
    "isLicensed": true
  },
  {
    "name": "Junction Oval",
    "country": "Australia",
    "isLicensed": true
  },
  {
    "name": "Karen Rolton Oval",
    "country": "Australia",
    "isLicensed": true
  },
  {
    "name": "Manuka Oval",
    "country": "Australia",
    "isLicensed": true
  },
  {
    "name": "North Sydney Oval",
    "country": "Australia",
    "isLicensed": false
  },
  {
    "name": "Sydney Showgrounds",
    "country": "Australia",
    "isLicensed": false
  },
  {
    "name": "The WACA",
    "country": "Australia",
    "isLicensed": false
  },
  {
    "name": "Great Barrier Reef Arena",
    "country": "Australia",
    "isLicensed": false
  },
  {
    "name": "GMHBA Stadium",
    "country": "Australia",
    "isLicensed": false
  },
  {
    "name": "UTAS Stadium",
    "country": "Australia",
    "isLicensed": false
  },
  {
    "name": "Delhi Park",
    "country": "India",
    "isLicensed": false
  },
  {
    "name": "Kolkata Park",
    "country": "India",
    "isLicensed": false
  },
  {
    "name": "Arun Jaitley Stadium",
    "country": "India",
    "isLicensed": false
  },
  {
    "name": "Rajiv Gandhi International Stadium",
    "country": "India",
    "isLicensed": false
  },
  {
    "name": "Sawai Mansingh Stadium",
    "country": "India",
    "isLicensed": false
  },
  {
    "name": "Eden Gardens",
    "country": "India",
    "isLicensed": true
  },
  {
    "name": "BRSABV Ekana Stadium",
    "country": "India",
    "isLicensed": true
  },
  {
    "name": "Narendra Modi Stadium",
    "country": "India",
    "isLicensed": true
  },
  {
    "name": "Inderjit Singh Bindra Stadium",
    "country": "India",
    "isLicensed": true
  },
  {
    "name": "Wankhede Stadium",
    "country": "India",
    "isLicensed": true
  },
  {
    "name": "Wankhede Stadium",
    "country": "India",
    "isLicensed": true
  },
  {
    "name": "Brian Lara Stadium",
    "country": "West Indies",
    "isLicensed": true
  },
  {
    "name": "Daren Sammy Cricket Ground",
    "country": "West Indies",
    "isLicensed": true
  },
  {
    "name": "Kensington Oval",
    "country": "West Indies",
    "isLicensed": true
  },
  {
    "name": "Providence Stadium",
    "country": "West Indies",
    "isLicensed": false
  },
  {
    "name": "Queen's Park Oval",
    "country": "West Indies",
    "isLicensed": true
  },
  {
    "name": "Sabina Park",
    "country": "West Indies",
    "isLicensed": true
  },
  {
    "name": "Auckland Oval",
    "country": "Others",
    "isLicensed": false
  },
  {
    "name": "Capetown Stadium",
    "country": "Others",
    "isLicensed": false
  },
  {
    "name": "Colombo Park Oval",
    "country": "Others",
    "isLicensed": false
  },
  {
    "name": "Dhaka Stadium",
    "country": "Others",
    "isLicensed": false
  },
  {
    "name": "Dubai Cricket Ground",
    "country": "Others",
    "isLicensed": false
  },
  {
    "name": "Durban Fields",
    "country": "Others",
    "isLicensed": false
  },
  {
    "name": "Lahore Cricket Club",
    "country": "Others",
    "isLicensed": false
  },
  {
    "name": "Wellington Park",
    "country": "Others",
    "isLicensed": false
  }
]
```
