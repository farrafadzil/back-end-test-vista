## Overview 
This is the backend API for the Fullstack Technical Test project.
Built using Node.js, Express.js, TypeScript, and Prisma ORM.

---
## Features
- Manage companies (Add, View)
- Manage services (Add, View)
- RESTful API endpoints
- MySQL database integration
- Error handling & validation

---
## Tech Stack
- Runtime: Node.js
- Framework: Express.js
- Language: TypeScript
- ORM: Prisma
- Database: MySQL (XAMPP)

---
## Installation & Setup

## 1. Clone the repository
git clone https://github.com/farrafadzil/back-end-test-vista.git

## 2. Configure environment variables
- a .env file:
  DATABASE_URL="mysql://root:@localhost:3306/company_service_db"
- Replace with your MySQL and make sure the database exists.

## 3. Set up the database
npx prisma migrate dev --name init
npx prisma generate

## 4. Start the server
npm start

