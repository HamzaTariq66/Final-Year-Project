// app.js

const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");
var bodyParser = require("body-parser");

// routes
const users = require("./routes/api/users");
const contacts = require("./routes/api/contacts");

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.get("/", (req, res) => res.send("Hello world!"));

// use Routes
app.use("/api/users", users);
app.use("/api/contacts", contacts);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
