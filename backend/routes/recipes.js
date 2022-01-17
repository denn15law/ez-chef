const express = require("express");
const router = express.Router();
const {
  getRecipes,
  createRecipe,
  findRecipeById,
  deleteRecipeById,
} = require("../controllers/recipes");

//Route: /recipes
router.get("/", getRecipes);
router.post("/", createRecipe);
router.get("/:id", findRecipeById);
router.delete("/:id", deleteRecipeById);

module.exports = router;
