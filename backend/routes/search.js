const express = require("express");
const router = express.Router();

const { searchFunc } = require("../controllers/search");
router.get(
  "/:searched",
  searchFunc
  // searchFunc
  // axios
  //   .get(
  //     `https://api.spoonacular.com/recipes/complexSearch?apiKey=509c30240911425fa631c29ca02b8e8c&query=${searched}&number=20`
  //   )
  //   .then(function (response) {
  //     // handle success
  //     console.log("api called");
  //     res.send(response.data.results);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   });
);

module.exports = router;
