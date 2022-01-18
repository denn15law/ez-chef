const express = require("express");
const router = express.Router();

const { getAllGroceryListItems } = require("../controllers/groceryList");

router.get("/", getAllGroceryListItems);

module.exports = router;
