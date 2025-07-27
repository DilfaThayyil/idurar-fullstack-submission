
---

````markdown
# Idurar Fullstack Submission

> A full-stack application setup integrating an ERP/CRM system with a modern Next.js CRUD interface, a Nest.js/Python AI service, Dockerized deployments, and GitHub Actions CI/CD pipeline.

---

## 📁 Repository Structure

```bash
idurar-fullstack-submission/
├── idurar-erp-crm/             
├── idurar-nextjs-crud/          
    ├── integration-api/    
├── .github/
│   └── workflows/
│       └── ci.yml          
├── docker-compose.yml       
└── README.md                
````

---

## 🧩 Project Overview

### 🔷 `idurar-erp-crm/`

A full ERP/CRM system based on Express.js and React. This is the core application forked from [`SMACAcademy/idurar-erp-crm`](https://github.com/SMACAcademy/idurar-erp-crm) and extended with features, bug fixes, and AI summary generation.

### 🟢 `idurar-nextjs-crud/`

A modern **Next.js 15** application for managing projects with full CRUD operations, integrated with MongoDB, Dockerized, and deployable via CI/CD. Features:

* Project listing, creation, edit, deletion
* Pagination & filtering
* Responsive UI

### 🔶 `integration-api/`

A microservice API built with **Nest.js** that:

* Accepts text input
* Integrates with **Gemini AI** (Google) to summarize invoice notes or queries
* Exposes `/integration/reports/summary` endpoint

---

## 🚀 Prerequisites

| Tool           | Version                |
| -------------- | ---------------------- |
| Node.js        | `>=18.x`               |
| Docker         | `>=20.x`               |
| Docker Compose | `>=2.x`                |
| MongoDB        | Local or MongoDB Atlas |
| Gemini API     | Optional for AI        |

---

## 🔐 Environment Variables

Add these to `.env` files in respective folders.

### Common variables:

```env
# MongoDB
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<db>

# AI Integration
GEMINI_API_KEY=your_gemini_api_key

# JWT
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

# Next.js
NEXT_PUBLIC_URL=http://localhost:3000
NODE_ENV=development
PORT=3000
```

---

## 🐳 Docker & Service Setup

### 🔧 Run all apps together (monorepo)

```bash
docker-compose up --build
```

### 📦 Individual builds

#### 1️⃣ Original App (ERP/CRM)

```bash
cd idurar-erp-crm
docker-compose up --build
```

#### 2️⃣ Next.js CRUD App

```bash
cd idurar-nextjs-crud
docker-compose up --build
```

#### 3️⃣ Nest.js API

```bash
cd integration-api
docker-compose up --build
```

---

## 🧪 Testing

### Next.js or Nest.js:

```bash
# Unit tests
npm run test
```

---

## 🌐 Example Requests (API)

### 🔹 CRUD Project

```bash
GET    /api/projects?page=1&limit=10
POST   /api/projects         { "title": "AI Project", ... }
PUT    /api/projects/:id     { "title": "Updated" }
DELETE /api/projects/:id
```

### 🔸 AI Summary (Gemini)

```bash
POST /integration/reports/summary
Body: { "notes": "This invoice includes project setup and planning..." }
```

Use Postman or cURL to test.

---

## ⚙️ CI/CD Pipeline (GitHub Actions)

* Triggers on pull request and push to `main`
* Steps:

  * `npm ci` / `npm install`
  * Lint (`eslint`)
  * Run tests
  * Build Docker image
  * Optionally push to DockerHub or GCR

Workflow file: `.github/workflows/ci.yml`

---

## ☁️ Deployment

### DockerHub:

```bash
# Build
docker build -t yourname/project-crud .

# Push
docker push yourname/project-crud
```

---

## 🎥 Video Demonstration

[📺 Click to Watch (Unlisted YouTube)](https://youtu.be/un3sRsQYtok)

Includes:

* CRUD UI demo
* AI integration
* Docker containers running
* GitHub Actions CI/CD workflow in action

---

## 🙌 Credits

* Forked from [`SMACAcademy/idurar-erp-crm`](https://github.com/SMACAcademy/idurar-erp-crm)
* Developed by: [Dilfa Thayyil](https://github.com/dilfathayyil)

```
