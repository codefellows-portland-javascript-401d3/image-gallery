### TO RUN LOCALLY

- SETUP THE REPOSITORY
  - Download the repository locally
  - Navigate to the root project folder via terminal, (likely `cd Downloads/image-gallery` if it downloaded to your Downloads folder)
  - Run `npm install` to install the necessary dependencies


- SETUP THE DATABASE
  - If you already have mongo installed, open a new terminal instance and run `mongod --dbpath [path to MongoDB folder]` via terminal.
  - If you don't already have it installed, open a new terminal instance and download [MongoDB](https://www.mongodb.com/download-center#community) in your root user folder and rename the folder to "mongodb" (remove the version number and such), then run `npm run database` to spin up the database


- SETUP THE SERVER
  - open a new terminal instance and run `cd server` and `npm run server` to spin up the server


- SETUP THE FRONT END
  - open a new terminal instance and run `cd ..` if it shows that you're in the server directory, if not, you can skip this step
  - in that same window, run `cd app`, `npm run build`, once that's done building the content for the browser run `npm start` to spin up the front end.
  - navigate to `localhost:8080` in a web browser


- OTHER USEFUL TIDBITS
  - The server and the front end are both running on `localhost:8080` unless another port has been specified by the environment.
  - All form fields are required though no front-end validation exists currently.

<!-- ### TO RUN VIA POSTMAN -->

<!-- ### TESTS -->
