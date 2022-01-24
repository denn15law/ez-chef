const { default: axios } = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const searchFunc = (req, res) => {
  const search = req.params.searched;
  axios
    .get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.apiKey}&query=${search}&number=50`
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

//Display recipe details for api recipes//
const recipeDetails = (req, res) => {
  const recipeID = req.params.id;
  axios
    .get(
      `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${process.env.apiKey}&query=includeNutrition=false`
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
