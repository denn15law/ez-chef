const express = require("express");
const router = express.Router();

const {
  getGroceryListRecipes,
  addGroceryListFromMyRecipes,
  addGroceryListFromApi,
  deleteGroceryListById,
} = require("../controllers/groceryList2");

// router.get("/ingredients/:user_id", getUserGroceryItems);
// router.get("/recipes/:user_id", getUserGroceryRecipes);
// // add recipe to grocery list
// router.post("/add/:user_id/:recipe_id", addRecipeToGroceries);
// router.delete("/recipes/:user_id/:recipe_id", deleteRecipeFromGroceryList);
// // router.get("/test/:user_id/:recipe_id", addRecipeToGroceries);

//Route: /favourites
router.get("/:user/", getGroceryListRecipes);
router.post("/api/:user/:id", addGroceryListFromApi);
router.post("/myRecipes/:user/:id", addGroceryListFromMyRecipes);
router.delete("/:user/:id", deleteGroceryListById);

module.exports = router;
