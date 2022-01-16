const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
//Connect to Local
// const db = require("../config/keys").mongoLocal;

//Connect to Cloud
const db = require("../config/keys").mongoCloud;

//Require models
const Recipe = require("../models/Recipe");
const User = require("../models/User");

mongoose
  .connect(db)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err.message));

// Recipe.collection.drop(() => console.log("Recipe Dropped"));
// User.collection.drop(() => console.log("User Dropped"));

let recipe = new Recipe({
  title: "fried rice",
  instructions: "Fry the rice",
  serving_size: 1,
  image_url: "https://i.imgur.com/VYIC6pb.jpeg",
  ingredients: [{ name: "rice", measurement: 1 }],
});
recipe
  .save()
  .then((res) => {
    console.log(res);
    mongoose.disconnect(db);
  })
  .catch((err) => console.log(err));

let user = new User({
  first_name: "Jeewon",
  last_name: "Lee",
  email: "example@example.com",
  password: "password",
});

user
  .save()
  .then((res) => {
    console.log(res);
    mongoose.disconnect(db);
  })
  .catch((err) => console.log(err));
