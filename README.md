# Manvika Bhupathi — Personal Portfolio Website

A premium, modern, responsive full-stack personal portfolio website representing **Manvika Bhupathi**, Computer Science Engineering undergraduate at RGUKT Basar and Aspiring Software Engineer.

Designed with inspiration from top modern developer portfolios, featuring a sleek dark-mode-first aesthetic with Electric Blue and Royal Purple gradients, glassmorphism cards, verified project links, and a Node.js Express backend configured for one-click **Render** deployment.

---

## 🌟 Key Features

* **Design & Aesthetics:** Dark Mode by default with instant toggle to Light Mode (state persisted in `localStorage`), glassmorphism cards, ambient animated glow blobs, and responsive layout across mobile, tablet, and desktop.
* **Verified Project Showcase:**
  * **NaariDhan:** AI Financial Empowerment Web App ([Live on Netlify](https://splendid-tulumba-b1865e.netlify.app/))
  * **StegoShield:** Secure Image Steganography System ([Live on Vercel](https://stegoshield-nine.vercel.app/))
  * **KreedAI:** AI Sports Assessment System (Smart India Hackathon Internal Round Top 45 Teams)
  * **SparkFix:** On-Demand Maintenance & Repair Android App (Kotlin, Android Studio, Firebase)
  * **Project Archive:** Hostel Maintenance System & AirFareIndex
* **Verified Experience & Credentials:**
  * **ApexPlanet Software Pvt. Ltd.:** App Development Internship (Certificate ID: `APSPL2635382`)
  * **Scaler School YIIC 2.0:** Innovation Program Participant
  * **Cognitive Class / IBM:** Python 101 for Data Science
  * **Coursera:** Java & Python Programming
  * **HackerRank:** SQL (Basic)
* **Authenticated Developer Footprint:** Direct verified links to GitHub, LinkedIn, LeetCode, and GeeksforGeeks.
* **Full-Stack Backend:**
  * `POST /api/contact`: Working API form submission endpoint with input validation and feedback.
  * `GET /api/health`: Uptime monitoring endpoint for Render health checks.
  * `GET /api/resume`: Direct PDF resume download endpoint (`manvikabhupathi.pdf`).
  * `GET /api/certificate`: Direct internship completion certificate viewer (`Certificate_APSPL2635382.pdf`).

---

## 🛠️ Technology Stack

* **Frontend:** React 18, Vite, Tailwind CSS, Lucide React Icons
* **Backend:** Node.js, Express.js, CORS
* **Styling:** Tailwind CSS with custom Glassmorphism and CSS keyframe animations
* **Deployment Target:** Render (Web Service or Static Site)

---

## 🚀 Getting Started Locally

### Prerequisites
* Node.js (v18 or higher)
* npm (v9 or higher)

### 1. Installation
Clone the repository or navigate to the project directory:
```bash
cd manvika-portfolio
npm install
```

### 2. Development Mode
To run the Vite frontend development server:
```bash
npm run dev
```
The site will run at `http://localhost:3000`.

To run the backend API server concurrently:
```bash
npm run server
```
The backend API will run at `http://localhost:5000`.

### 3. Production Build & Run
To compile the production bundle and launch the full-stack server:
```bash
# Build the React SPA
npm run build

# Start the Node.js Express server
npm start
```
Open `http://localhost:5000` in your browser.

---

## 🌐 Deploying to Render (render.com)

This repository includes a pre-configured `render.yaml` blueprint.

### Method 1: Automatic Blueprint Deploy (Recommended)
1. Push this project folder to a repository on your GitHub account (`https://github.com/Manvikabhupathi0110/portfolio`).
2. Log in to [Render](https://dashboard.render.com/).
3. Click **New +** → **Blueprints**.
4. Connect your GitHub repository. Render will automatically detect `render.yaml` and configure the service.
5. Click **Apply**. Render will automatically run `npm install && npm run build` and launch `node server/server.js`.

### Method 2: Manual Web Service Deploy
1. In the Render Dashboard, click **New +** → **Web Service**.
2. Connect your GitHub repository.
3. Configure settings:
   * **Name:** `manvika-portfolio`
   * **Environment:** `Node`
   * **Build Command:** `npm install && npm run build`
   * **Start Command:** `node server/server.js`
   * **Health Check Path:** `/api/health`
4. Click **Create Web Service**. Your portfolio will be live at `https://<your-service-name>.onrender.com`!

---

## 📝 How to Update Information in the Future

All portfolio information is centralized in a single data file:
`src/data/portfolioData.js`

To update your projects, work experience, certifications, or skills:
1. Open `src/data/portfolioData.js`.
2. Add or edit entries in the appropriate arrays (`projects`, `certifications`, `experience`, `skills`).
3. Save the file and run `npm run build` (or push changes to GitHub if auto-deploy is enabled on Render).
