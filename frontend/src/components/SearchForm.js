import * as React from "react";
import { useState } from "react";
import axios from "axios";
import "./SearchForm.css";

<link
  rel="stylesheet"
  href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
  integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
  crossorigin="anonymous"
/>;

const SearchForm = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }
  const replaceString = (str) => {
    return str.replaceAll(" ", "+").replaceAll(",", "+");
  };
  const getSearch = () => {
    axios
      .get(`http://localhost:8000/search/${replaceString(search)}`)
      .then(function (response) {
        // handle success
        setSearched(replaceString(search));
        setRecipeData(response.data);
        setSearch("");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div>
      <div class="search">
        <h1 className="Search-Form">Recipe Search</h1>
        <input
          id="mainInput"
          class="searchTerm"
          type="text"
          placeholder="Enter Ingredients or Keywords"
          value={search}
          onChange={handleChange}
          size="40"
        />
        <button onClick={getSearch}>
          Search Recipe
          <i class="fa fa-search"></i>
        </button>
      </div>
      {recipeData.length ? (
        <h4>
          Now displaying recipes containing:{" "}
          {searched.replaceAll("++", "+").replaceAll("+", ", ")}
        </h4>
      ) : null}

      <div className="recipe-results">
        {recipeData.length
          ? recipeData
              .sort((a, b) =>
                a.title.toLowerCase().localeCompare(b.title.toLowerCase())
              )
              .map((recip) => {
                const url = `http://localhost:3000/search/${recip.id}`;
                return (
                  <div className="recipe-card" key={recip.id}>
                    <a href={url}>
                      <h2>{recip.title}</h2>
                    </a>
                    <img src={recip.image}></img>
                  </div>
                );
              })
          : null}
      </div>
    </div>
  );
};

export default SearchForm;
