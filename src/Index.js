const express = require("express");
const app = express();

// home route
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

// about route
app.get("/about", (req, res) => {
  res.send("This is About Page");
});

// server start
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});