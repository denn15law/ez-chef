const express = require("express");
const router = express.Router();
const {
  getRecipes,
  createRecipe,
  deleteRecipeById,
} = require("../controllers/recipes");

//Route: /recipes
router.get("/", getRecipes);
router.post("/:user", createRecipe);
router.delete("/:user/:id", deleteRecipeById);

module.exports = router;
