Vahan Bazaar –  A Bike Marketplace Platform - Project Submission

Problem Statement
Problem Chosen: A platform to buy, sell, compare bikes, view showrooms, and contact sellers.
Reason: Helps students and professionals make better bike purchase decisions with verified information.

Solution Overview:
Approach: Web platform using React (frontend), Express (backend), SQLite (database).
Key Modules:
1. New Bikes Listing
2. Used Bikes Listing
3. Showrooms Directory
4. Comparison Module
5. Contact Form

System Architecture:
Workflow: User → React Frontend → Express Backend → SQLite DB

Data Flow:
1. User requests page.
2. React fetches data from backend API.
3. Backend queries SQLite DB.
4. JSON response → React displays UI.

Technology Stack:
Frontend: React.js + CSS
Backend: Node.js + Express.js
Database: SQLite
Libraries: Axios, React Router, SQLite3


Algorithms & Models:
Algorithm: SQL filtering + React comparison logic.
Reason: Lightweight, fast, and sufficient for current scope.
ML extension possible: Recommendations in future.

Data Handling:
Data Sources: Predefined dataset in SQLite.
Preprocessing: Cleaned mileage, price fields.
Storage: SQLite DB → Express API → React frontend.

Implementation Plan:
1. Setup environment (React + Express + SQLite).
2. Core module development (bikes, showrooms, compare, contact).
3. Integration & Testing.
4. Deployment-ready build.

Performance & Validation:
Metrics: API response time, UI load speed, correctness of comparisons.
Testing: Backend unit testing + frontend manual testing.

Deployment & Scalability:
Deployment: Backend (Render/Heroku), Frontend (Netlify/Vercel).
Scalability: Switch SQLite → MySQL/Postgres, add ML recommendations.

Conclusion:
Vahan Bazaar simplifies bike discovery and decision making.
Future work: Personalized recommendations using ML.
