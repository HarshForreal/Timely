# Timely - Event Scheduler App ⏰

Timely is a full-stack event scheduling application that allows users to create, manage, and view upcoming events in a sleek calendar interface.

## 🚀 Features

- Interactive calendar view
- Event creation and management
- User authentication and profiles
- Reminders and notifications
- Mobile-responsive design

## 🛠️ Tech Stack

- **Frontend**: React + Vite + TailwindCSS + Redux Toolkit
- **Backend**: Node.js + Express.js
- **Database**: MongoDB
- **ORM**: Prisma
- **Auth**: JWT

## 🔧 Setup Instructions

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install
```

### Configure Environment

Create a `.env` file in the `backend/` directory:

```
PORT=5000
DATABASE_URL="your_mongodb_connection_uri"
JWT_SECRET="your_jwt_secret"
```

### Initialize Prisma

```bash
# Initialize Prisma
npx prisma init

# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Start the server
npm run dev
```

### Frontend Setup

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install
```

### Configure Frontend Environment

Create a `.env` file in the `frontend/` directory:

```
VITE_API_URL=http://localhost:5000/api
```

### Start Development Server

```bash
# Start the frontend
npm run dev
```

## ✅ You're all set!

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000

## 📝 Development Guidelines

### Git Branching Strategy

Always create specific branches for your work:

- **Feature branches**: `feat/feature_name`
  ```bash
  git checkout -b feat/calendar-view
  ```

- **Bug fix branches**: `fix/bug_name`
  ```bash
  git checkout -b fix/event-overlap-issue
  ```

- **Documentation branches**: `docs/documentation_name`
  ```bash
  git checkout -b docs/api-endpoints
  ```

### Commit Message Conventions

Format your commit messages for clarity:

- **New features**: 
  ```bash
  git commit -m "[FEAT]: Add drag-and-drop for events"
  ```

- **Bug fixes**: 
  ```bash
  git commit -m "[FIX]: Resolve date calculation error"
  ```

- **Work in progress**: 
  ```bash
  git commit -m "[WIP]: Begin implementing notification system"
  ```

- **Documentation updates**: 
  ```bash
  git commit -m "[DOCS]: Update API documentation"
  ```

- **Refactoring**: 
  ```bash
  git commit -m "[REFACTOR]: Improve state management"
  ```

Made with ☕ & ❤️