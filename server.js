const express = require("express");

const routes = require("./config/routes");

// Set up the app
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// require mongoose
require("./config/mongo");

// Use routes defined in config/routes.js
app.use("/", routes);

// Start the server
app.listen(7500, () => {
  console.log("Server started on port 7500");
});
