# School Management API

## Overview
This project implements a set of APIs for managing school data. The system allows users to add new schools to the database and retrieve a list of schools sorted by proximity to a user-specified location. 

The API is built using Node.js, Express.js, and MySQL.

## Features
- **Add a new school**: Allows users to add a new school with its details such as name, address, latitude, and longitude.
- **List schools by proximity**: Returns a list of schools sorted by proximity to a given latitude and longitude.

## Requirements
- Node.js
- MySQL
- Postman or any other API testing tool (e.g., Insomnia)

## Getting Started

### 1. Clone the Repository
To get started, first clone the repository:

```bash
git clone <your-repository-url>

2. Install Dependencies
Navigate to the project folder and install all required dependencies:
cd school-management-api
npm install

3. Setup the Database
Create a MySQL database and a table named schools. You can use the following SQL query:
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);

Update your database credentials in the .env file:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your-password
DB_NAME=school_management

4. Run the Application
After setting up the database and configuring the environment variables, you can start the server:
npm run dev
The server will be running on http://localhost:3000.

5. API Endpoints
Add School
•	URL: POST /api/schools/add
•	Request Body:
json
CopyEdit
{
  "name": "St. Xavier School",
  "address": "Mumbai, India",
  "latitude": 19.0760,
  "longitude": 72.8777
}
•	Response:
o	Success: 201 Created
o	Error: 400 Bad Request (if validation fails)
List Schools by Proximity
•	URL: GET /api/schools/nearby?latitude=19.0&longitude=72.8
•	Query Parameters:
o	latitude: User's latitude (e.g., 19.0)
o	longitude: User's longitude (e.g., 72.8)
•	Response:
o	A list of schools sorted by proximity to the provided latitude and longitude.
6. Testing with Postman
You can test your API endpoints using Postman or Insomnia.
Add School:
•	Method: POST
•	URL: http://localhost:3000/api/schools/add
•	Body (JSON):
json
CopyEdit
{
  "name": "St. Xavier School",
  "address": "Mumbai, India",
  "latitude": 19.0760,
  "longitude": 72.8777
}
List Schools by Proximity:
•	Method: GET
•	URL: http://localhost:3000/api/schools/nearby?latitude=19.0&longitude=72.8
7. Deployment
Hosting on Railway:
You can deploy your app on Railway for free. Follow these steps:
1.	Go to Railway and sign in.
2.	Create a new project and deploy from GitHub.
3.	Add the MySQL plugin to your Railway project.
4.	Update the .env file with your Railway MySQL credentials.
5.	Push your code to GitHub and Railway will automatically deploy it.
Your app will be hosted with a URL that you can use for testing.
8. Postman Collection
You can download the Postman collection for this API from the link below:
Download Postman Collection
9. GitHub Repository
You can view the source code for this project on GitHub:


