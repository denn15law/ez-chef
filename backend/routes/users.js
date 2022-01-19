const express = require("express");
const router = express.Router();
const User = require("../models/User");

const {
  getAllUsers,
  getUserById,
  getUserCreatedRecipes,
  addRecipeToUser,
  getUserFavourites,
  addFavouriteToUser,
} = require("../controllers/users");
const { route } = require("express/lib/application");

//Route: /users
router.get("/", getAllUsers);
router.get("/:id", getUserById);

//Routes for user recipes
router.get("/:user_id/recipes", getUserCreatedRecipes);
router.post("/:user_id/:recipe_id", addRecipeToUser);
router.get("/:user_id/favourites", getUserFavourites);
router.post("/:user_id/:favourite_id", addFavouriteToUser);

module.exports = router;
