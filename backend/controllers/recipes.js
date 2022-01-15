const Recipe = require("../models/Recipe");

const getRecipes = (req, res) => {
  Recipe.find()
    .then((recipe) => res.json(recipe))
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const createRecipe = (req, res) => {
  const newRecipe = new Recipe({
    title: req.body.title,
    ingredients: req.body.ingredients,
  });
};

module.exports = {
  getRecipes,
  createRecipe,
};
