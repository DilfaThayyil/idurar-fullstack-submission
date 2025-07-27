# Idurar Fullstack Submission

## Overview

- `idurar-erp-crm/`: Forked ERP/CRM project
- `nest_module/`: API Integration Module (implemented inside idurar-erp-crm)
- `idurar-nextjs-crud/`: Custom Next.js CRUD app

## Prerequisites

- Node.js v20+
- Docker & Docker Compose
- MongoDB Atlas or local

## Environment Variables

Create `.env` file in `nextjs_crud_app/` with:

MONGO_URI=<your_mongodb_uri>
ACCESS_TOKEN_SECRET=...
REFRESH_TOKEN_SECRET=...
NEXT_PUBLIC_URL=...


## Running the App

```bash
docker-compose up --build
```

Then go to: http://localhost:3001