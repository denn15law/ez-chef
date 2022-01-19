const express = require("express");
const router = express.Router();
const {
  getRecipes,
  createRecipe,
  deleteRecipeById,
  getRecipeDetails,
} = require("../controllers/recipes");

//Route: /recipes
router.get("/:user", getRecipes);
router.get("/recipeDetails/:user/:id", getRecipeDetails);
router.post("/:user", createRecipe);
router.delete("/:user/:id", deleteRecipeById);

module.exports = router;
