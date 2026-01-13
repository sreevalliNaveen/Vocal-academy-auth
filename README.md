# Vocal Music Academy – React Auth & Authorization App

## App Overview

This is a React single-page application (SPA) built to demonstrate **authentication, authorization, and protected routing** in a realistic way.

The app represents a **Classical Vocal Music Academy** with different users:

* Public visitors
* Students
* Admins
* Director

Each user sees different pages based on who they are and what they are allowed to do.

The focus of this project is good logic, correct React patterns, and interview-ready architecture ,not ui polish.

---

## Roles & Permissions

The app uses role-based + permission-based authorization.

### Roles

* **DIRECTOR** – full access
* **ADMIN** – manages users and academy data
* **STUDENT** – limited access
* **PUBLIC** – no login required

### Permissions

Instead of checking roles everywhere, the app defines permissions like:

* View admin dashboard
* Manage users
* Approve admissions

Each role is mapped to a set of permissions in one central file.

This makes the system:

* Easy to scale
* Easy to explain in interviews
* Easy to maintain

---

## Authentication Flow

1. User logs in using a dummy login page
2. App generates a **mock JWT token** and user info
3. Token and user data are stored in **localStorage**
4. On page refresh, auth state is restored from localStorage
5. User stays logged in until logout

There is no real backend — authentication is simulated to focus on frontend logic.

---

## Route Protection Strategy

The app uses a custom **ProtectedRoute** component.

### What it checks

1. Is the user logged in?
2. Does the user have the required permission?

### Behavior

* Not logged in → redirect to `/login`
* Logged in but unauthorized → redirect to `/unauthorized`
* Authorized → allow access

Protected routes also support:

* Nested routes
* Page refresh without losing access

---

## API Simulation

The app simulates APIs using:

* Dummy async functions
* `setTimeout` to mimic network delay
* Token checks before returning data

This helps demonstrate:

* Loading states
* Error handling
* How JWT tokens are usually sent and validated

---

## Performance Decisions

The app includes basic performance optimizations:

* **React.memo** – prevents unnecessary re-renders
* **useCallback** – stabilizes function references
* **Lazy loading** – admin pages load only when needed

These optimizations are applied only where they make sense, not blindly.

---

## Why This Project Matters

This project was built to:

* Practice real-world React patterns
* Understand auth deeply, not just copy code
* Be able to clearly explain decisions in interviews

Every feature in this app is intentional and explainable.

---

## Tech Stack

* React
* React Router
* Context API
* JavaScript (ES6+)

---

## How to Run

```bash
npm install
npm start
```

---

This project is meant for **learning, interviews, and portfolio demonstration**, not production deployment.
