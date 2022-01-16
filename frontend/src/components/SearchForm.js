import React, { useState } from "react";
import axios from "axios";

const SearchForm = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(
      e.target.value
        .replaceAll(",", "+")
        .replaceAll(", ", "+")
        .replaceAll(" ", "")
    );
  }

  const getSearch = () => {
    console.log(search);
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=509c30240911425fa631c29ca02b8e8c&query=${search}&number=20`
      )
      .then(function (response) {
        // handle success
        console.log(response.data);
        setRecipeData(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    document.getElementById("mainInput").value = "";
  };

  return (
    <div>
      <h1 className="Search-Form">Recipe Search</h1>
      <input
        id="mainInput"
        type="text"
        placeholder="Enter Ingredients or Keywords"
        onChange={handleChange}
      />
      <button onClick={getSearch}>Search Recipe</button>
      <h4>Now displaying recipes containing: {search.replaceAll("+", ", ")}</h4>
      {recipeData.length
        ? recipeData.map((recip) => {
            return (
              <div className="recipe" key={recip.id}>
                <h1>{recip.title}</h1>
                <img src={recip.image}></img>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default SearchForm;
