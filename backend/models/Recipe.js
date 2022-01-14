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
  instruction: {
    type: String,
    required: true,
  },
  serving_size: {
    type: Number,
    required: true,
  },
  ingredients: [{ name: String, measurement: Number }],
});

module.exports = Recipe = mongoose.model("recipe", RecipeSchema);
