const express = require("express");
const router = express.Router();

//Recipe Model
const Recipe = require("../../models/Recipe");

//GET /api/recipes
router.get("/", (req, res) => {
  Recipe.find()
    .sort({ title: -1 })
    .then((recipes) => res.json(recipes));
});

module.exports = router;
