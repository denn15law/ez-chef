const express = require("express");
const router = express.Router();
const {
  getRecipes,
  createRecipe,
  deleteRecipeById,
  getRecipeDetails,
  editRecipeDetails,
  getRecipeDetailsEdit,
} = require("../controllers/recipes");

//Route: /recipes
router.get("/:user", getRecipes);
router.get("/recipeDetails/:user/:id", getRecipeDetails);
router.post("/:user", createRecipe);
router.delete("/:user/:id", deleteRecipeById);
router.put("/edit/:user/:id", editRecipeDetails);
router.get("/edit/:user/:id", getRecipeDetailsEdit);
module.exports = router;
