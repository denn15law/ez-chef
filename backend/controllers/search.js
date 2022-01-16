const { default: axios } = require("axios");

const searchFunc = (req, res) => {
  const search = req.params.searched;
  axios
    .get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=57b6ceeea9a94f1aa777d648ec7b8d82&query=${search}&number=20`
    )
    .then(function (response) {
      // handle success
      res.send(response.data.results);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

const recipeDetails = (req, res) => {
  const recipeID = req.params.recipeID;
  console.log("i am id", recipeID);
  axios
    .get(
      `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=57b6ceeea9a94f1aa777d648ec7b8d82&query=includeNutrition=false`
    )
    .then(function (response) {
      // res.render(RecipeDetails, response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

module.exports = {
  searchFunc,
  recipeDetails,
};
