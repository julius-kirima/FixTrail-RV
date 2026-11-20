# FixTrail — Shared-Facility Repair Tracking System

FixTrail is a React-based Single Page Application for reporting, tracking, and managing faults in shared facilities such as computer labs, offices, and learning spaces.

## Project Requirements

The project meets the following requirements:

### 1. Landing Page

FixTrail includes a landing page that introduces the system and provides navigation to the main features.

### 2. At Least 3 Routes Including a Dynamic Route

The application uses React Router and includes:

- `/` — Landing page
- `/admin` — Admin Dashboard
- `/track/:referenceNumber` — Track a specific fault report using a dynamic route

### 3. At Least 5 Reusable Components

The application is organized into reusable React components, including:

- `Header`
- `Hero`
- `ReportFault`
- `AdminDashboard`
- `TrackReport`

### 4. At Least 3 Event Handlers

The application uses multiple React event handlers:

- `onChange` — Handles controlled form inputs
- `onSubmit` — Handles fault report submission
- `onClick` — Handles actions such as refreshing and deleting reports

### 5. Controlled Form

The fault-report form is controlled using React `useState`.

The form values are stored in `formData` and updated through the `onChange` event handler.

### 6. At Least 3 React Hooks

The project uses:

- `useState` — Manages form data, reports, loading states, and errors
- `useEffect` — Loads reports from the API
- `useContext` — Accesses shared application context

### 7. API Requests

FixTrail communicates with the REST API using the Fetch API.

Implemented requests include:

- `GET` — Retrieve fault reports
- `POST` — Submit a new fault report
- `PATCH` — Update a report status
- `DELETE` — Delete a fault report

### 8. Responsive Design

The application uses Bootstrap responsive classes and custom CSS to provide a responsive interface across different screen sizes.

## Main Features

### Report a Fault

Users can submit:

- Full Name
- Fault Title
- Category
- Location or Equipment ID
- Fault Description

Each submitted report receives a unique reference number.

### Track a Fault Report

Users can use their reference number to view the submitted report and its current repair status.

### Admin Dashboard

Administrators can:

- View submitted reports
- View the total number of reports
- Update report status
- Delete reports
- Refresh the report list

## Technologies Used

- React
- Vite
- React Router
- JavaScript
- Bootstrap
- CSS
- JSON Server
- Fetch API

## API

The application uses a REST API to store and manage fault reports.

The deployed API is hosted separately from the React frontend.

## Project Structure

```text
src/
├── components/
│   ├── About.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Home.jsx
│   ├── HowItWorks.jsx
│   ├── ReportFault.jsx
│   ├── TrackProgress.jsx
│   └── WhyChooseFixTrail.jsx
├── context/
│   └── AppContext.jsx
├── pages/
│   ├── AdminDashboard.jsx
│   ├── LandingPage.jsx
│   └── TrackReport.jsx
├── routes/
│   └── AppRoutes.jsx
├── api.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Project Purpose

FixTrail addresses the problem of shared-facility faults being reported verbally or through separate messages without a central tracking system.

The system provides a simple way to submit, track, and manage repair reports.