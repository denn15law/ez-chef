const express = require("express");
const router = express.Router();

const { getUserGroceryItems } = require("../controllers/groceryList");

router.get("/:user_id", getUserGroceryItems);

module.exports = router;
