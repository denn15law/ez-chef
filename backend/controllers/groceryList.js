//Required Models
const Recipe = require("../models/Recipe");
const User = require("../models/User");
const axios = require("axios");

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

const addRecipeToGroceries = (req, res) => {
  const user_id = req.params.user_id;
  const recipe_id = req.params.recipe_id;

  //if recipe is user created
  if (recipe_id.length > 7) {
    Recipe.findById(recipe_id)
      .then((recipe) => {
        return User.findByIdAndUpdate(
          user_id,
          { $push: { groceryList_recipes: recipe._id } },
          { new: true, upsert: true },
          function (err, managerparent) {
            if (err) throw err;
            console.log(managerparent);
          }
        );
      })
      .then((updatedUser) => {
        res.json(updatedUser);
      })
      .catch((err) => res.json(err.message));
  } else {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${recipe_id}/information?apiKey=${process.env.apiKey}&query=includeNutrition=false`
      )
      .then((response) => {
        const recipeDetails = response.data;
        const ingredients = recipeDetails.extendedIngredients.map(
          (ingredient) => {
            return {
              name: ingredient.name,
              quantity: ingredient.amount,
              unit: ingredient.unit,
            };
          }
        );

        return Recipe.create({
          user: user_id,
          title: recipeDetails.title,
          image_url: recipeDetails.image,
          serving_size: recipeDetails.servings,
          instructions: recipeDetails.instructions,
          ingredients: ingredients,
          user_created: false,
        })
          .then((newRecipe) => {
            return User.findByIdAndUpdate(
              user_id,
              { $push: { groceryList_recipes: newRecipe._id } },
              { new: true, upsert: true },
              function (err, managerparent) {
                if (err) throw err;
                console.log(managerparent);
              }
            );
          })
          .then((updatedUser) => {
            res.json(updatedUser);
          })
          .catch((err) => res.json(err.message));
      });
  }
};

module.exports = {
  getUserGroceryItems,
  getUserGroceryRecipes,
  deleteRecipeFromGroceryList,
  addRecipeToGroceries,
};
