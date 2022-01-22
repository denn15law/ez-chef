const express = require("express");
const router = express.Router();

const {
  getGroceryListRecipes,
  addGroceryListFromMyRecipes,
  addGroceryListFromApi,
  deleteGroceryListById,
} = require("../controllers/groceryList");

//Route: /favourites
router.get("/:user/", getGroceryListRecipes);
router.post("/api/:user/:id", addGroceryListFromApi);
router.post("/myRecipes/:user/:id", addGroceryListFromMyRecipes);
router.delete("/:user/:id", deleteGroceryListById);

module.exports = router;
