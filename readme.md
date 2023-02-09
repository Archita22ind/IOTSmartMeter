# IoT Dashboard for various connected devices & smart meters.

This project was part of our CMPE 281 final project at San jose State University.

Project Objectives:

1. Setting up an IoT simulator (we used AWS IoT simulator)
2. This simulator later feeds data to the nodejs server which later feeds that into mongodb database, both of which are hosted on different EC2 instances.
3. A user Interface which supports viewing the devices the user has running and their various utilization metrics.
4. Control and Configure those devices
5. Device Management
6. A billing section, which estimates the bill based on utilization

# Tech Stack.

## Front End

For front end we used React.js framework as the ui has many areas where maintaining the state of the application is essential and to facilitate micro interactions to help enhance user experience.

## Back End

1. Node.js server to handle API calls and database connectivity
2. Mongodb to store device data from IoT simulator
3. mySQL db to store user and device related information

## Getting Started with the Github repository-

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

You will need Node.js installed on your machine.

To install Node.js on Mac:

`brew install nodejs`

To install Node.js on Linux:

`brew install nodejs`

## Installing

Clone the contents of the Git repository to your local:

Go into the dashboard_server directory and run the following command:

`npm install`

Go into the dashboard-react directory and run the following command:

`npm install`

To run the Backend, go into the dashboard_server directory and run the following command:

`node index.js`
or
`nodemon index.js`

To run the Frontend, go into the dashboard-react directory and run the following command:

`npm start`

Note: currently the SQL database is not connected via the file: /dashboard_server/util/database.js
