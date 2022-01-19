const mongoose = require("mongoose");
const Recipe = require("./Recipe");

const Schema = mongoose.Schema;

//Create Schema for User

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  recipes_created: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
  groceryList_recipes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
  favourited_recipes: [{ type: Schema.Types.ObjectId, ref: "Favourite" }],
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
