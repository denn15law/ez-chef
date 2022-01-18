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
  ingredients: [{ name: String, quantity: Number, unit: String }],
});

const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;
