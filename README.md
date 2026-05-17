#Toll Plaza Management System

Project Overview

This project is a Toll Plaza Management System built using:
Frontend: Angular
Backend: Node.js + Express

The application allows users to manage toll plaza operations through a web-based interface.


Project Structure:
Toll_plaza_app/
│
├── frontend/     # Angular frontend application
└── backend/      # Node.js + Express backend server


Prerequisites
Before running the project locally, make sure the following software is installed:

* Node.js (Latest LTS version recommended)
* npm (Comes with Node.js)
* Angular CLI

Install Angular CLI globally using:
Terminal
npm install -g @angular/cli



How to Run the Backend Server

Step 1: Navigate to Backend Folder
in terminal:
  cd Toll_plaza_app/backend
  or
  if in Toll_plaza_app/ cd backend


Step 2: Install Dependencies
  npm install


Step 3: Start the Backend Server
If your main server file is `server.js`, 
run:
  node server.js

If you are using another file name, replace accordingly.

Backend Server URL

By default, the backend usually runs on:
  http://localhost:3000


How to Run the Frontend Client

Step 1: Open a New Terminal
Navigate to the frontend folder:
in terminal:
  cd Toll_plaza_app/frontend


Step 2: Install Dependencies
  npm install


Step 3: Start the Angular Application
  npm start
or
  ng serve


Frontend URL
The Angular application will usually run on:
  http://localhost:4200



Backend Dependencies
The backend uses the following main packages:
* express
* cors

Install them manually if required:
  npm install express cors


Troubleshooting

Port Already in Use
If port 4200 or 3000 is already being used:
* Stop the existing process
* Or change the port number
Example:
  ng serve --port 4300


# Notes

* Make sure both frontend and backend servers are running simultaneously.
* The frontend communicates with the backend API using HTTP requests.
* Ensure CORS is enabled in the backend server.

# Author

Developed as a Toll Plaza Management Application project as an assignment.
