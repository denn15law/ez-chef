const { default: axios } = require("axios");
const GroceryList = require("../models/GroceryList");
const dotenv = require("dotenv");
dotenv.config();

const getGroceryListRecipes = (req, res) => {
  const user = req.params.user;
  GroceryList.find({ user: user })
    .sort({ grocery_list_title: 1 })
    .then((groceryList) => res.json(groceryList))
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

//Checks whether the recipe already exists in groceries//
const checkGroceries = (req, res) => {
  user = req.params.user;
  recipeID = req.params.id;

  GroceryList.findOne({ grocery_list_recipeID: recipeID, user: user })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => console.log(err));
};

const addGroceryListFromMyRecipes = (req, res) => {
  const user = req.params.user;
  const recipeID = req.params.id;

  GroceryList.findOne({ grocery_list_recipeID: recipeID, user: user }).then(
    (response) => {
      if (!response) {
        const newGroceryList = new GroceryList({
          user: user,
          grocery_list_title: req.body.title,
          grocery_list_recipeID: req.body._id,
          ingredients: req.body.ingredients,
        });
        newGroceryList
          .save()
          .then((response) => {
            res.json(response);
          })
          .catch((err) => console.log(err));
      } else {
        res.status(400).send("Bad Request");
      }
    }
  );
};

const addGroceryListFromApi = (req, res) => {
  const user = req.params.user;
  const recipeID = req.params.id;

  GroceryList.findOne({ grocery_list_recipeID: recipeID, user: user }).then(
    (response) => {
      if (!response) {
        axios
          .get(
            `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${process.env.apiKey}&query=includeNutrition=false`
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
            const newGroceryList = new GroceryList({
              user: user,
              grocery_list_title: req.body.title,
              grocery_list_recipeID: req.body.id,
              ingredients: ingredients,
            });
            newGroceryList
              .save()
              .then((response) => {
                res.json(response);
              })
              .catch((err) => console.log(err));
          });
      } else {
        res.status(400).send("Bad Request");
      }
    }
  );
};

const deleteGroceryListById = (req, res) => {
  const user = req.params.user;

  GroceryList.deleteOne({ grocery_list_recipeID: req.params.id, user: user })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getGroceryListRecipes,
  addGroceryListFromMyRecipes,
  addGroceryListFromApi,
  deleteGroceryListById,
  checkGroceries,
};
