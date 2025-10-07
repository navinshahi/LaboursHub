# LaboursHub
Find trusted labours in your city
<h2>About this project</h2>
<h3>Overview</h3>
Labour Hub is a web platform that connects labor professionals with users seeking their services. The application allows laborers to register, manage their profiles, and be discoverable by users in the same city. Users can register, log in, search for available laborers in their area, and contact them for work opportunities.

<hr>

<h3>Key Features</h3>

<h4>1. Labour Registration & Login:</h4> Labor professionals can register, log in, and update their profile details like name, skills, experience, and city.

<h4>2. User Registration & Login:</h4> Normal users can create accounts, browse available laborers, and view profiles based on their selected city.

<h4>3. Profile Management:</h4> Each registered user or laborer can update their personal details and profile picture.

<h4>4. City-Based Search:</h4> Users can easily search and view laborers located within their city.

<h4>5. Secure Authentication:</h4> Implemented JWT (JSON Web Token) for secure login and access control between frontend and backend.

<h4>6. Responsive Interface:</h4> Frontend designed with React.js for an interactive and mobile-friendly experience.

<hr>


<h3>Technology Stack</h3>
<h4>1. Frontend</h4>

<b>Framework:</b> React.js

<b>UI Design:</b> Bootstrap & CSS

<b>API Integration:</b> Axios used for communication with the backend REST APIs

<h4>2. Backend</h4>

<b>Framework:</b> Spring Boot

<b>Security:</b> JWT Authentication for token-based login protection

<b>Database:</b> MySQL for persistent data storage

<b>ORM:</b> Spring Data JPA for database operations

<b>REST APIs:</b> Developed various endpoints for registration, authentication, profile management, and data retrieval

<hr>

<h3>System Architecture</h3>
<h4>1. Frontend (React):</h4>
Handles user interaction, routing between pages, and communicates with backend APIs using Axios.

<h4>2. Backend (Spring Boot):</h4>
Manages authentication, authorization, data validation, and API responses.

<h4>3. Database (MySQL):</h4>
Stores user and labor profiles, credentials, and application data.
<hr>
<h3>API Integration Flow</h3>

The React frontend sends user actions (login, registration, search requests) via REST API calls.

The Spring Boot backend validates requests and generates JWT tokens for authenticated sessions.

Protected endpoints require a valid JWT token in the request headers.

MySQL stores all user and labor data, managed through JPA repositories.
<hr>
<h3>Future Enhancements</h3>
1. Implement geolocation-based search instead of manual city input.

2. Add user reviews and ratings for labor professionals.

3. Enable direct messaging or chat between users and labors.

4. Deploy on cloud platforms (e.g., AWS, Azure) for production use.

<hr>

<h2>Screenshots:-</h2>
<img align="right" src="Screenshots/Screenshot (278).png" width="100%" height="100%">
<img align="right" src="Screenshots/Screenshot (279).png" width="100%" height="100%">
<img align="right" src="Screenshots/Screenshot (280).png" width="100%" height="100%">
<img align="right" src="Screenshots/Screenshot (281).png" width="100%" height="100%">
<img align="right" src="Screenshots/Screenshot (282).png" width="100%" height="100%">
<img align="right" src="Screenshots/Screenshot (283).png" width="100%" height="100%">
<img align="right" src="Screenshots/Screenshot (284).png" width="100%" height="100%">
<img align="right" src="Screenshots/Screenshot (285).png" width="100%" height="100%">
<img align="right" src="Screenshots/Screenshot (286).png" width="100%" height="100%">
<img align="right" src="Screenshots/Screenshot (287).png" width="100%" height="100%">
<img align="right" src="Screenshots/Screenshot (288).png" width="100%" height="100%">
