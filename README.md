# Image Gallery

### This is an image gallery app that uses MongoDB, Express, AngularJS, node.js, and Webpack.

### Directions to run locally
1. Download the files
2. Set up database
  - [Download MongoDB](https://www.mongodb.com/download-center#community)
  - Start the database `mongod --dbpath [path to your MongoDB folder here]`
3. Set up the server
  - `cd server` and `npm install`
  - Start the server `npm start` (in a new terminal window)
4. Set up the frontend
  - New terminal window and `cd app`
  - `npm install` and `npm run build`
  - Navigate to `localhost:8080` in a web browser

### Defaults
- Server runs on `localhost:3000`
- Frontend runs on `localhost:8080`
- All form fields are required

### Tests
`cd app` and `npm run test`
