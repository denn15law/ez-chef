import * as React from "react";
import { useState } from "react";
import axios from "axios";
import "./Favourites.css";

const Favourites = (props) => {
  const [myFavs, setMyFavs] = useState([]);
  const { user } = props;
  const getData = () => {
    console.log("iamuser", user);
    axios
      .get(`http://localhost:8000/favourites/${user}`)
      .then(function (response) {
        setMyFavs(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  const deleteFavourite = (id) => {
    const URL = `http://localhost:8000/favourites/${user}/${id}`;
    axios
      .delete(URL)
      .then(function (response) {
        getData();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="favourite-recipes-page">
      <h1>My Favourite Recipes</h1>
      {myFavs.length ? (
        myFavs.map((recip) => {
          const url = `http://localhost:3000/search/id/${recip.favourite_recipeID}`;
          return (
            <div className="favourite-recipe" key={recip.favourite_recipeID}>
              <div className="favourite-recipe-image">
                <img
                  className="favourite-recipe-image"
                  src={recip.favourite_image}
                ></img>
              </div>
              <div className="favourite-recipe-content">
                <a href={url}>
                  <h2 className="recipe-favourite-title">
                    {recip.favourite_title}
                  </h2>
                </a>
                <div
                  className="delete-favourite"
                  key={recip.favourite_recipeID}
                >
                  <button
                    className="delete-favourite"
                    onClick={() => {
                      deleteFavourite(recip.favourite_recipeID);
                    }}
                  >
                    <b>Delete {recip.favourite_title} from Favourites</b>
                  </button>
                </div>
              </div>
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
