// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morganLogger = require("morgan");

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(morganLogger("dev"));
app.use(express.static("public"));
app.use(express.json())

// ROUTES
// Start defining your routes here:

// START THE SERVER
// Make your Express server listen on port 5005:
const port = 5005;
app.listen(port, () => console.log("The server is istening to port : ", port));
