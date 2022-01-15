const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Create Schema for Recipe
const RecipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
  },
  instructions: {
    type: String,
    required: true,
  },
  serving_size: {
    type: Number,
    required: true,
  },
  ingredients: [{ name: String, measurement: Number }],
});

const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;
