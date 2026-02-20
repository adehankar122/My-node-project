const express = require("express");

const mysql = require("mysql2");

const app = express();
app.use(express.json());


const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydatabase",
  port: 3307
});

// home route
app.get("/", (req, res) => {
  res.send("Hello Express!");
});



app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.error("DB Error:", err);
    }
    res.json(result);
  });
});


// server start
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
