const express = require("express");
const router = express.Router();
const User = require("../models/User");

const {
  getAllUsers,
  getUserById,
  addRecipeToUser,
  getUserCreatedRecipes,
} = require("../controllers/users");

//Route: /users
router.get("/", getAllUsers);
router.get("/:id", getUserById);


//Routes for user recipes
router.get("/:user_id/recipes", getUserCreatedRecipes);
router.post("/:user_id/:recipe_id", addRecipeToUser);

module.exports = router;
