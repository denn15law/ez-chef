const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Create Schema for Favourite Recipe

const FavouriteSchema = new Schema({
  favourite_title: {
    type: String,
    required: true,
  },

  favourite_image: {
    type: String,
  },

  favourite_recipeID: {
    type: String,
    required: true,
    unique: true,
  },
});

const Favourite = mongoose.model("Favourite", FavouriteSchema);
module.exports = Favourite;
