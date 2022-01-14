const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
dotenv.config();

// Routers
const indexRouter = require("./routes/index");

// Database config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

app.use("/", indexRouter);

app.listen(port, () => console.log(`Server started on port ${port}!`));
