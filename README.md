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

```bash
git clone https://github.com/yourusername/project-tpl.git
cd project-tpl
npm install
```

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
