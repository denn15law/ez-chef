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
const Favourite = require("../models/Favourite");

mongoose
  .connect(db)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err.message));

Recipe.collection.drop(() => console.log("Recipe Dropped"));
User.collection.drop(() => console.log("User Dropped"));
Favourite.collection.drop(() => console.log("Favourite Dropped"));

let recipe = new Recipe({
  title: "fried rice",
  instructions: "Fry the rice",
  serving_size: 1,
  image_url: "https://i.imgur.com/VYIC6pb.jpeg",
  ingredients: [{ name: "rice", quantity: 1, unit: "cup" }],
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

let favourite1 = new Favourite({
  favourite_title: "Apple Crumble",
  favourite_image: "https://spoonacular.com/recipeImages/632522-556x370.jpg",
  favourite_recipeID: 632501,
});

let favourite2 = new Favourite({
  favourite_title: "Apple Pie Smoothie",
  favourite_image: "https://spoonacular.com/recipeImages/632575-556x370.jpg",
  favourite_recipeID: 632575,
});

favourite1
  .save()
  .then((res) => {
    console.log(res);
    mongoose.disconnect(db);
  })
  .catch((err) => console.log(err));

favourite2
  .save()
  .then((res) => {
    console.log(res);
    mongoose.disconnect(db);
  })
  .catch((err) => console.log(err));
