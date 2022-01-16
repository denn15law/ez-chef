const mongoose = require("mongoose");

const Schema = mongoose.Schema;

<<<<<<< HEAD
//Create Schema for Recipe
=======
//Create Schema for User
>>>>>>> main
const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
<<<<<<< HEAD
    required: true,
=======
>>>>>>> main
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
