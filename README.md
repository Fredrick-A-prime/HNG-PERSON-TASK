Person API
The Person API is a simple RESTful API that allows you to perform CRUD (Create, Read, Update, Delete) operations on a "person" resource. This README provides step-by-step instructions on setting up, running, and using the API.

# Simple REST API for Managing Persons

This is a simple REST API for managing persons using Node.js, Express.js, and MongoDB. It allows you to perform CRUD (Create, Read, Update, Delete) operations on person records.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm (Node Package Manager) installed on your machine.
- MongoDB server installed and running locally or on a remote server.

## Installation

1. Clone this repository to your local machine:
   git clone <repository-url>
2. Install npm package manager
3. Install the necessary dependencies (express, mongoose, body-parser, Validator, nodemon)
4. Set up the server
5. open the props file and add the connection string to your mongodb database
6. run the server with npm run dev


## API Endpoints
The API provides the following endpoints for CRUD operations:

POST /api - Create a new person:
To create a new person, send a POST request to /api with a JSON request body eg {
    "Name": "Mark Essen"
}
GET /api/user_id - Fetch details of a person by name.
PUT /api/user_id - Update details of an existing person by query.
DELETE /api/user_id - Remove a person by query.

## Documentation
For detailed information on how to use the API, refer to the https://api.postman.com/collections/26809218-5d4d14f1-acab-441e-a3dd-2fd2fa268d14?access_key=PMAT-01HA981T19F87694HMP22VA4W8. It includes standard request/response formats, sample usage, known limitations, and setup instructions.