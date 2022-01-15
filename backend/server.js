const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//Require Routes
const recipesRoutes = require("./routes/recipes");

//Set up .env
const dotenv = require("dotenv");

//Initialize express server
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

// Database config
const db = require("./config/keys").mongoURI;

//Use Routes
app.use("/recipes", recipesRoutes);

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server started on port ${port}!`));
