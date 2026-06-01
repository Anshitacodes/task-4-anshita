# project4-frontend-backend-integration
# Student Management System

## Project Overview

This project is a simple Full Stack Student Management System developed as part of Project 4: Frontend & Backend Integration.

The application demonstrates communication between a frontend user interface and a backend API using asynchronous requests. Users can view, add, and delete student records through a web interface.

## Features

* Display student data from backend API
* Add new students dynamically
* Delete existing students
* Frontend and backend integration
* REST API communication using Fetch API
* Asynchronous operations using Async/Await
* Error handling for failed requests
* Dynamic UI updates without page refresh

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* CORS

## Project Structure

```text
decode/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│
└── frontend/
    ├── index.html
    ├── style.css
    ├── script.js
│
└── README.md
```

## API Endpoints

### Get All Students

```http
GET /api/students
```

Response:

```json
[
  {
    "id": 1,
    "name": "Anshita",
    "course": "BCA"
  }
]
```

### Add Student

```http
POST /api/students
```

Request Body:

```json
{
  "name": "John",
  "course": "BCA"
}
```

### Delete Student

```http
DELETE /api/students/:id
```

## Installation and Setup

### 1. Clone Repository

```bash
git clone <repository-url>
```

### 2. Navigate to Backend Folder

```bash
cd backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Backend Server

```bash
node server.js
```

Server will run on:

```text
http://localhost:5000
```

### 5. Run Frontend

Open the frontend folder and launch index.html using Live Server in VS Code.

Frontend will run on:

```text
http://localhost:5500
```

## Application Workflow

1. User opens the frontend application.
2. Frontend sends a GET request to the backend API.
3. Backend returns student data in JSON format.
4. Frontend dynamically displays student information.
5. User can add a student using the form.
6. Frontend sends a POST request to the backend.
7. Backend stores the new student and returns a response.
8. User can delete a student.
9. Frontend sends a DELETE request to the backend.
10. UI updates automatically after each operation.

## Learning Outcomes

* Understanding REST APIs
* Frontend and Backend Integration
* Working with JSON Data
* Using Fetch API
* Implementing Async/Await
* Error Handling
* Dynamic DOM Manipulation
* Full Stack Application Development

## Author

Anshita

TYBCA
KJ Somaiya School of Basic and Applied Sciences
Somaiya Vidyavihar University
