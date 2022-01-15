const express = require("express");
const router = express.Router();
const { getRecipes, createRecipe } = require("../controllers/recipes");

//Recipe Model
const Recipe = require("../models/Recipe");

//Route: /recipes
router.get("/", getRecipes);
router.post("/", createRecipe);

module.exports = router;
