const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const db = require("../config/keys").mongoURI;

//Require models
const Recipe = require("../models/Recipe");

mongoose
  .connect(db)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err.message));

// Recipe.collection.drop(() => console.log("Recipe Dropped"));

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
