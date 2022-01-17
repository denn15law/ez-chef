const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//Require Routes
const recipesRoutes = require("./routes/recipes");
const usersRoutes = require("./routes/users");
const searchRoutes = require("./routes/search");
//Set up .env
const dotenv = require("dotenv");

//Initialize express server
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

// Database config to Connect to local
// const db = require("./config/keys").mongoLocal;
//Connect to Cloud
const db = require("./config/keys").mongoCloud;

//Use Routes
app.use("/recipes", recipesRoutes);
app.use("/users", usersRoutes);
app.use("/search", searchRoutes);

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server started on port ${port}!`));
