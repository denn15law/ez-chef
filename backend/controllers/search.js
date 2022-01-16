const { default: axios } = require("axios");

const searchFunc = (req, res) => {
  const search = req.params.searched;
  axios
    .get(
      `https://api.spoonacular.com/recipes/complexSearch?${process.env.apiKey}&query=${search}&number=20`
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
      `https://api.spoonacular.com/recipes/${recipeID}/information?${process.env.apiKey}&query=includeNutrition=false`
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
