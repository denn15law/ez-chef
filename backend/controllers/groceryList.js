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
      Recipe.find(find_param).then((recipe) => {
        const listOfIngredients = [];
        recipe.forEach((element) => {
          console.log(element);
          element.ingredients.forEach((ingredient) => {
            listOfIngredients.push(ingredient);
          });
        });
        res.json(listOfIngredients);
      });
    })
    .catch((err) => res.status(404).json(err.message));
};

module.exports = {
  getUserGroceryItems,
};
