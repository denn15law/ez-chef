const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Create Schema for Favourite Recipe

const FavouriteSchema = new Schema({
  favourite_recipeID: {
    type: Number,
    required: true,
  },
});

const Favourite = mongoose.model("Favourite", FavouriteSchema);
module.exports = Favourite;
