const express = require("express");
const router = express.Router();

const {
  getUserGroceryItems,
  getUserGroceryRecipes,
  deleteRecipeFromGroceryList,
} = require("../controllers/groceryList");

router.get("/ingredients/:user_id", getUserGroceryItems);
router.get("/recipes/:user_id", getUserGroceryRecipes);

router.delete("/recipes/:user_id/:recipe_id", deleteRecipeFromGroceryList);

module.exports = router;
