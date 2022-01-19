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
      return Recipe.find(find_param);
    })
    .then((recipes) => {
      const listOfIngredients = [];
      recipes.forEach((element) => {
        // console.log(element);
        element.ingredients.forEach((ingredient) => {
          listOfIngredients.push(ingredient);
        });
      });
      res.json(listOfIngredients);
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

const deleteRecipeFromGroceryList = (req, res) => {
  const user_id = req.params.user_id;
  const recipe_id = req.params.recipe_id;

  Recipe.findById(recipe_id)
    .then((recipe) => {
      return User.findByIdAndUpdate(
        user_id,
        { $pull: { groceryList_recipes: recipe._id } },
        { new: true, upsert: true },
        (err, managerParent) => {
          if (err) throw err;
          console.log(managerParent);
        }
      );
    })
    .then((updatedUser) => {
      console.log("Deleted Recipe from Grocery List");
      res.json(updatedUser);
    })
    .catch((err) => res.json(err.message));
};

// const addRecipeToUser = (req, res) => {
//   const user_id = req.params.user_id;
//   const recipe_id = req.params.recipe_id;

//   Recipe.findById(recipe_id)
//     .then((recipe) => {
//       return User.findByIdAndUpdate(
//         user_id,
//         { $push: { groceryList_recipes: recipe._id } },
//         { new: true, upsert: true },
//         function (err, managerparent) {
//           if (err) throw err;
//           console.log(managerparent);
//         }
//       );
//     })
//     .then((updatedUser) => {
//       res.json(updatedUser);
//     })
//     .catch((err) => res.json(err));
// };

module.exports = {
  getUserGroceryItems,
  getUserGroceryRecipes,
  deleteRecipeFromGroceryList,
};
