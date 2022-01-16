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
    axios
      .get(`http://localhost:8000/search/${search}`)
      .then(function (response) {
        // handle success
        setSearched(search);
        setRecipeData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  // const getDet = (id) => {
  //   axios
  //     .get(`http://localhost:8000/search/id/${id}`)
  //     .then(function (response) {
  //       // handle success
  //       console.log("frontend", JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // };

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
            const url = `http://localhost:3000/search/id/${recip.id}`;
            return (
              <div className="recipe" key={recip.id}>
                <a href={url}>{recip.title}</a>
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
