const Recipe = require("../models/Recipe");

const getRecipes = (req, res) => {
  // const user = req.params.user;
  Recipe.find()
    .sort({ title: 1 })
    .then((recipe) => res.json(recipe))
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const createRecipe = (req, res) => {
  const newRecipe = new Recipe({
    user: req.params.user,
    title: req.body.title,
    image_url: req.body.image_url,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    serving_size: req.body.serving_size,
  });
  console.log(newRecipe);
  newRecipe
    .save()
    .then((response) => console.log(`-----${req.session.id}-----`))
    .catch((err) => console.log(err.message));
};

const deleteRecipeById = (req, res) => {
  Recipe.deleteOne({ _id: req.params.id, user: req.params.user })
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
};

module.exports = {
  getRecipes,
  createRecipe,
  deleteRecipeById,
};
