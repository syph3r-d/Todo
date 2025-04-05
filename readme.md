# 🧩 Fullstack Web App (Frontend + Backend)

This project is a fullstack web application containing both a **Node.js backend** (`API`) and a **frontend** app (`APP`)—both managed within a single repository. The app is containerized using Docker for easy development and deployment.

## 🗂️ Project Structure

```
/api

    ├── controllers
    ├── models
    ├── routes
    ├── utils
    ├── tests
    ├── package.json

/app
    ├── public
    ├── src
    │   ├── components
    │   ├── pages
    │   ├── services
    │   └── styles
    ├── tests
    ├── package.json
    └── Dockerfile

docker-compose.yml
dockerfile.api
dockerfile.app
README.md
```

---

## 🚀 Features

- RESTful API built with Node.js (inside `API`)
- Frontend web app (inside `APP`)
- PostgreSQL integration
- Runs fully containerized using Docker
- Includes migration and seed support for the backend

---

## 🐳 Getting Started with Docker

### 1. 📦 Prerequisites

Make sure you have the following installed:

- [Docker](https://www.docker.com/)
- `.env` file for backend inside the `API/` folder
- `.env` file for the frontend inside the `APP` folder
- `.env` file for the docker in the root folder

### 2. 🛠️ Build & Run

```
docker-compose up --build
```

This will:

- Build the frontend and backend
- Run database migrations and seed scripts
- Start the backend server
- Serve the frontend app

### 3. 🌐 Accessing the App

- Frontend: http://localhost:3001
- Backend (API): http://localhost:3000

## 🧪 Scripts

### Backend (API/package.json)

- npm run run:migrations – Run DB migrations
- npm run run:seeds – Seed the database
- npm run build – Build backend code
- npm start – Start the backend server

### Frontend (APP/package.json)

- npm run build – Build frontend
- npm run dev – Start frontend app (dev mode)
