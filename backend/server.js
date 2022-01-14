const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(bodyParser.json());

// Database config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server started on port ${port}!`));
