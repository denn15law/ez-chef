const express = require("express");
const router = express.Router();

const {
  getUserGroceryItems,
  getUserGroceryRecipes,
} = require("../controllers/groceryList");

router.get("/ingredients/:user_id", getUserGroceryItems);
router.get("/recipes/:user_id", getUserGroceryRecipes);

module.exports = router;
