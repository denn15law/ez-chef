const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();

const { searchFunc, recipeDetails } = require("../controllers/search");

router.get("/results/:searched", searchFunc);
router.get("/details/:id", recipeDetails);

module.exports = router;
