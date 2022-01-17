import * as React from "react";
import { useState } from "react";
import axios from "axios";

const Favourites = (props) => {
  const [recipeData, setRecipeData] = useState([]);
  const [myFavs, setMyFavs] = useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:8000/favourites")
      .then(function (response) {
        console.log("iamdata", response.data);
        setMyFavs(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Favourites Page</h1>
      {myFavs.length ? (
        myFavs.map((recip) => {
          const url = `http://localhost:3000/search/id/${recip.favourite_recipeID}`;
          return (
            <div className="recipe" key={recip.favourite_recipeID}>
              <a href={url}>{recip.favourite_title}</a>
              <h1>{recip.favourite_title}</h1>
              <img src={recip.favourite_image}></img>
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
