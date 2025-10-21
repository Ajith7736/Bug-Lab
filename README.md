# Bug-Lab

[![Live Demo](https://img.shields.io/badge/live_demo-click_here-blue)](https://part-time-connect.vercel.app)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[![Repo Card](https://github-readme-stats.vercel.app/api/pin/?username=Ajith7736&repo=Bug-Lab&theme=default)](https://github.com/Ajith7736/Bug-Lab)



---

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Screenshots](#screenshots)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Environment Variables](#environment-variables)  
  - [Running Locally](#running-locally)  
- [Folder Structure](#folder-structure)  
- [Usage](#usage)  
- [Roadmap / Future Enhancements](#roadmap)  
- [Contributing](#contributing)  
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

---

## About

Bug-Lab is a web application built mainly for those who are starting their journey in bug bounty and finding web vulnerabilities.This web app is built with Nextjs , Node js , MongoDB Database.There are 5 different vulnarability labs like SQL Injection , NOSQL Injection , Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF) implemented in this app.So the beginners can easily understand it and exploit the vulnerabilities. 

---

## Features

Here are some of the things this app can do:

- User authentication using NextAuth.js allowing users to sign in with google , github , twitter.
- User can select any lab and solve the lab by exploiting it.
- When user completes a lab he/she gains points.
- Leaderboard page to show users with most points.
- Secure Rest APIs using Next API routes.
- Responsive and minimal UI designs.

---

## Teach Stack

- **Frontend** : React.js, Next.js, Tailwind CSS.
- **Backend** : Node.js, Next.js.
- **Database** : MongoDB.
- **Authentication** : NextAuth.js.
- **Hosting / Deployment** : Vercel.

---

## Screenshots

### HomePage

<img width="1890" height="891" alt="Buglab-1" src="https://github.com/user-attachments/assets/63f85bfb-56ea-4d52-b8b1-c218e74eac19" />

### Labs

<img width="1892" height="871" alt="Buglab-2" src="https://github.com/user-attachments/assets/544a821c-6304-4f45-bd39-df3af0239017" />

<img width="1852" height="823" alt="Buglab-4" src="https://github.com/user-attachments/assets/3628c185-b8d2-48d9-968d-35f0cfca0a80" />

### Leaderboard

<img width="1908" height="877" alt="Buglab-3" src="https://github.com/user-attachments/assets/510f0cba-39bd-4b92-ab00-8809bbc2967b" />

---

## Getting Started

### Prerequisites

Make sure you have:

- Node.js (version 20+)
- npm
- MongoDB connection ( local or cloud )

  ### Installation

  !. Clone the repo:
  
  ```bash
  git clone https://github.com/Ajith7736/Bug-Lab.git
  cd Bug-Lab

 ### Environment Variables

 To run this project, you will need to add the following environment variables  
to your `.env` file in the `backend` folder:

- `MONGO_URI` → MongoDB connection string   
- `GITHUB_ID` → Github API Key ID
- `GITHUB_SECRET` → Github API Key SECRET
- `GOOGLE_CLIENT_ID` → Google API Key ID
- `GOOGLE_CLIENT_ID` → Google API Key ID
- `NEXTAUTH_SECRET` → Some random string key made using openssl
- `NEXTAUTH_URL` → URL string
- `TWITTER_CLIENT_ID` → Twitter API Key ID 
- `TWITTER_CLIENT_SECRET` → Twitter API Key SECRET

## 🖥️ Running Locally

Follow these steps to run the project on your machine:  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Ajith7736/part-time-connect.git
   cd part-time-connect```

2. **Install Dependencies** 

   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   - create an .env file in the backend folder.
   - Add the above mentioned env variables.

4. **Start the localhost**

   ```bash
   npm run dev
   ```
   This will run backend on port 3000

---
