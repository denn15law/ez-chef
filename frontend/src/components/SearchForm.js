import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  function handleChange(e) {
    setSearch(e.target.value);
  }
  const replaceString = (str) => {
    return str.replaceAll(" ", "+").replaceAll(",", "+");
  };
  const showSearch = () => {
    navigate(`/search/results/${replaceString(search)}`);
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
        <button onClick={showSearch}>
          Search Recipe
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
