import * as React from "react";
import { useState } from "react";
import axios from "axios";

const Favourites = (props) => {
  const [recipeData, setRecipeData] = useState([]);
  return (
    <div>
      <h1>Favourites Page</h1>
      {recipeData.length ? (
        recipeData.map((recip) => {
          const url = `http://localhost:3000/search/id/${recip.id}`;
          return (
            <div className="recipe" key={recip.id}>
              <a href={url}>{recip.title}</a>
              <h1>{recip.title}</h1>
              <img src={recip.image}></img>
            </div>
          );
        })
      ) : (
        <h3>You do not have any favourite recipes!</h3>
      )}
    </div>
  );
};

export default Favourites;
