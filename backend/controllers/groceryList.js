//Required Models
const Recipe = require("../models/Recipe");
const User = require("../models/User");

const getUserGroceryItems = (req, res) => {
  const user_id = req.params.user_id;
  User.findById(user_id)
    .then((user) => {
      const recipe_id_list = user.groceryList_recipes;
      find_param = {
        _id: { $in: recipe_id_list },
      };
      Recipe.find(find_param).then((recipes) => {
        const listOfIngredients = [];
        recipes.forEach((element) => {
          // console.log(element);
          element.ingredients.forEach((ingredient) => {
            listOfIngredients.push(ingredient);
          });
        });
        res.json(listOfIngredients);
      });
    })
    .catch((err) => res.status(404).json(err.message));
};

const getUserGroceryRecipes = (req, res) => {
  const user_id = req.params.user_id;
  User.findById(user_id)
    .then((user) => {
      find_param = {
        _id: { $in: user.groceryList_recipes },
      };
      return Recipe.find(find_param);
    })
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => res.json(err.message));
};

module.exports = {
  getUserGroceryItems,
  getUserGroceryRecipes,
};
