# 🎬 Book My Ticket – Backend

A backend system for a movie seat booking platform built with **Node.js, Express, and PostgreSQL**.

## 🚀 Features

* 🔐 JWT Authentication (Access + Refresh Tokens)
* 🛡️ Protected routes
* 🎟️ Seat booking system
* ⚡ Concurrency-safe booking using **transactions + FOR UPDATE**
* 🧱 Clean modular architecture

## 🧠 Tech Stack

* Node.js, Express
* PostgreSQL
* JWT, bcrypt

## 📁 Structure

```
src/
├── app.js
├── common/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   └── utils/
│       ├── api-error.js
│       └── api-response.js
├── modules/
│   ├── auth/
│   │   ├── auth.controller.js
│   │   ├── auth.routes.js
│   │   └── auth.service.js
│   └── seats/
│       ├── seats.controller.js
│       ├── seats.routes.js
│       └── seats.service.js
```

## ⚙️ Setup

```bash
git clone <repo>
cd Book my ticket
npm install
node src/app.js
```

Create `.env`:

```
ACCESS_TOKEN_SECRET=random_string
REFRESH_TOKEN_SECRET=random_string
DB_USER=postgres
DB_PASSWORD=your_password_here
DB_NAME=your_DB_name
```

---

## 🔐 APIs

### Auth

* `POST /register`
* `POST /login`
* `POST /refresh`

### Seats

* `GET /seats`
* `PUT /:id/:name` (Protected)

**Header:**

```
Authorization: Bearer <accessToken>
```
