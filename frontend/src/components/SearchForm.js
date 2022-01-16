import * as React from "react";
import { useState } from "react";
import axios from "axios";

const SearchForm = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState("");
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
      .get(`http://localhost:8000/search/${search}`)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    // document.getElementById("mainInput").value = "";
  };

  return (
    <div>
      <h1 className="Search-Form">Recipe Search</h1>
      <input
        id="mainInput"
        type="text"
        placeholder="Enter Ingredients or Keywords"
        onChange={handleChange}
        size="40"
      />
      <button onClick={getSearch}>Search Recipe</button>
      {recipeData.length ? (
        <h4>Now displaying recipes containing: {searched}</h4>
      ) : null}

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

// <input
//         id="mainInput"
//         type="text"
//         placeholder="Enter Ingredients or Keywords"
//         onChange={handleChange}
//       />
