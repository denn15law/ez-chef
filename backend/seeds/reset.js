const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
//Connect to Local
const db = require("../config/keys").mongoLocal;

//Connect to Cloud
// const db = require("../config/keys").mongoCloud;

//Require models
const Recipe = require("../models/Recipe");
const User = require("../models/User");
const Favourite = require("../models/Favourite");

mongoose
  .connect(db)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => console.log(err.message));

Recipe.collection.drop(() => console.log("Recipe Dropped"));
User.collection.drop(() => console.log("User Dropped"));
Favourite.collection.drop(() => console.log("Favourite Dropped"));

// mongoose.disconnect(db);
