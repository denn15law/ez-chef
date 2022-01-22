const { default: axios } = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const searchFunc = (req, res) => {
  const search = req.params.searched;
  axios
    .get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.apiKey}&query=${search}&number=20`
    )
    .then((response) => {
      // handle success
      res.send(response.data.results);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

const recipeDetails = (req, res) => {
  const recipeID = req.params.id;
  axios
    .get(
      `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${process.env.apiKey}&query=includeNutrition=false`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  searchFunc,
  recipeDetails,
};
