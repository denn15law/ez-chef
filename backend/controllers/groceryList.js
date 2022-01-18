//Required Models
const Recipe = require("../models/Recipe");

const getAllGroceryListItems = (req, res) => {
  Recipe.find()
    .then((recipe) => {
      const listOfIngredients = [];
      recipe.forEach((element) => {
        console.log(element);
        element.ingredients.forEach((ingredient) => {
          listOfIngredients.push(ingredient);
        });
      });
      res.json(listOfIngredients);
    })
    .catch((err) => res.status(404).json(err.message));
};

module.exports = {
  getAllGroceryListItems,
};
