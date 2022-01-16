const Recipe = require("../models/Recipe");

const getRecipes = (req, res) => {
  Recipe.find()
    .then((recipe) => res.json(recipe))
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const createRecipe = (req, res) => {
  console.log("calling req.body", req.body);
  const newRecipe = new Recipe({
    title: req.body.title,
    image_url: req.body.image_url,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    serving_size: req.body.serving_size,
  });
  newRecipe
    .save()
    .then((response) => res.json(response))
    .catch((err) => console.log(err.message));
};

const findRecipeById = (req, res) => {
  Recipe.findById(req.params.id)
    .then((recipe) => res.json(recipe))
    .catch((err) => res.status(404).json({ message: err.message }));
};

const deleteRecipeById = (req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
};

module.exports = {
  getRecipes,
  createRecipe,
  findRecipeById,
  deleteRecipeById,
};
