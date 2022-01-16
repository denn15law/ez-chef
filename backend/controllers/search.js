const { default: axios } = require("axios");

const searchFunc = (req, res) => {
  const search = req.params.searched;
  axios
    .get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=d50d1ea32e0e4f338050036501789998&query=${search}&number=20`
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
  console.log("I am recipeID", recipeID);
  axios
    .get(
      `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=d50d1ea32e0e4f338050036501789998&query=includeNutrition=false`
    )
    .then(function (response) {
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
