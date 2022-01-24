const Recipe = require("../models/Recipe");
const Favourite = require("../models/Favourite");
const GroceryList = require("../models/GroceryList");

//Get recipes belong to user to display on My Recipes//
const getRecipes = (req, res) => {
  const user = req.params.user;
  Recipe.find({ user: user, user_created: true })
    .sort({ title: 1 })
    .then((recipe) => res.json(recipe))
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

//Get recipe information to pre-fill the edit form//
const getRecipeDetailsEdit = (req, res) => {
  const user = req.params.user;
  const recipeID = req.params.id;
  Recipe.find({ user: user, _id: recipeID })
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
    user_created: true,
  });
  console.log(newRecipe);
  newRecipe
    .save()
    .then((response) => console.log(`-----${req.session.id}-----`))
    .catch((err) => console.log(err.message));
};

const deleteRecipeById = (req, res) => {
  Recipe.deleteOne({ _id: req.params.id, user: req.params.user })
    .then(() => {
      return Favourite.deleteOne({
        favourite_recipeID: req.params.id,
        user: req.params.user,
      });
    })
    .then(() => {
      return GroceryList.deleteOne({
        grocery_list_recipeID: req.params.id,
        user: req.params.user,
      });
    })
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
};

const getRecipeDetails = (req, res) => {
  const recipeID = req.params.id;
  const user = req.params.user;

  Recipe.find({ user: user, _id: recipeID })
    .then((recipe) => res.json(recipe))
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const editRecipeDetails = (req, res) => {
  const recipeID = req.params.id;
  const user = req.params.user;

  Recipe.updateOne(
    { user: user, _id: recipeID },
    {
      $set: {
        title: req.body.title,
        image_url: req.body.image_url,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        serving_size: req.body.serving_size,
      },
    }
  )
    .then((response) => console.log(response))
    .catch((err) => console.log(err.message));
};

module.exports = {
  getRecipes,
  getRecipeDetailsEdit,
  createRecipe,
  deleteRecipeById,
  getRecipeDetails,
  editRecipeDetails,
};
