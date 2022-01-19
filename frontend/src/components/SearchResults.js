import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./SearchForm.css";
import { useNavigate } from "react-router-dom";

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
  let url = window.location.pathname;
  const results = url.split("/search/results/")[1];
  console.log("results", results);
  const navigate = useNavigate();

  function handleChange(e) {
    setSearch(e.target.value);
    replaceString(search);
  }

  const replaceString = (search) => {
    return search.replaceAll(" ", "+").replaceAll(",", "+");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/search/results/${results}`)
      .then(function (response) {
        console.log("response.data hello", response.data);
        // handle success
        setSearched(results);
        setRecipeData(response.data);
        setSearch("");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [results]);

  const reloadSearch = () => {
    console.log("results are here", results);
    console.log("search is here", search);
    navigate(`/search/results/${search}`);
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
        <button onClick={reloadSearch}>
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
