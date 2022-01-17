const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();

const { searchFunc, recipeDetails } = require("../controllers/search");
router.get("/:searched", searchFunc);
router.get("/id/:recipeID", recipeDetails);

module.exports = router;
