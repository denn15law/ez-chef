const express = require("express");
const router = express.Router();

const {
  getGroceryListRecipes,
  addGroceryListFromMyRecipes,
  addGroceryListFromApi,
  deleteGroceryListById,
  checkGroceries,
} = require("../controllers/groceryList");

//Route: /groceries
router.get("/:user/", getGroceryListRecipes);
router.get("/check/:user/:id", checkGroceries);
router.post("/api/:user/:id", addGroceryListFromApi);
router.post("/myRecipes/:user/:id", addGroceryListFromMyRecipes);
router.delete("/:user/:id", deleteGroceryListById);

module.exports = router;
