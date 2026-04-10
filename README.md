# Task Manager Frontend

## Overview

This is the frontend of a Task Manager application built using React and TypeScript. It interacts with a REST API backend to perform CRUD operations on tasks.

The application allows users to:

* View all tasks
* Add a new task
* Mark tasks as completed
* Delete tasks

---

## Tech Stack

* React (Vite + TypeScript)
* Tailwind CSS

---

## Features

* Display list of tasks from backend
* Add new tasks using a form
* Mark tasks as completed
* Delete tasks
* Loading state handling
* Error handling with toast notifications
* Clean and modular component structure

---

## Project Structure

```bash id="kclz4f"
src/
 ├── components/
 │    ├── TaskForm.tsx
 │    ├── TaskList.tsx
 │    ├── TaskItem.tsx
 │    ├── Loader.tsx
 │    └── ErrorToast.tsx
 │
 ├── hooks/
 │    └── useTasks.ts
 │
 ├── services/
 │    └── taskApi.ts
 │
 ├── types/
 │    └── task.ts
 │
 ├── App.tsx
 └── main.tsx
```

---

## Setup Instructions

### 1. Install dependencies

```bash id="v5z7hm"
npm install
```

---

## Environment Configuration

Create a `.env` file in the root of the frontend project:

### Local Development

```env id="yjxg8r"
VITE_API_URL=http://localhost:5000
```

### Production / Deployment

```env id="n7i1y8"
VITE_API_URL=https://your-backend-url
```

---

## Run the Application

```bash id="nv3d3c"
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

## Notes

* The frontend relies on a backend API for all task operations.
* Environment variables are used to switch between local and deployed backend.
* The UI is intentionally kept simple to focus on functionality and structure.

---

## Author

Rohit Sawant
