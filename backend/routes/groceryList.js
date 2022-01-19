const express = require("express");
const router = express.Router();

const {
  getUserGroceryItems,
  getUserGroceryRecipes,
  deleteRecipeFromGroceryList,
  addRecipeToGroceries,
} = require("../controllers/groceryList");

router.get("/ingredients/:user_id", getUserGroceryItems);
router.get("/recipes/:user_id", getUserGroceryRecipes);

// add recipe to grocery list
router.post("/add/:user_id/:recipe_id", addRecipeToGroceries);

router.delete("/recipes/:user_id/:recipe_id", deleteRecipeFromGroceryList);

// router.get("/test/:user_id/:recipe_id", addRecipeToGroceries);

module.exports = router;
