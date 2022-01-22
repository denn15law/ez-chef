const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Create Schema for Favourite Recipe

const GroceryListSchema = new Schema({
  user: {
    type: String,
    required: true,
  },

  grocery_list_title: {
    type: String,
    required: true,
  },

  ingredients: {
    type: Array,
    required: true,
  },

  grocery_list_recipeID: {
    type: String,
    required: true,
  },
});

const GroceryList = mongoose.model("GroceryList", GroceryListSchema);
module.exports = GroceryList;
