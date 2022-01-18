import * as React from "react";
import { useState } from "react";
import axios from "axios";

const Favourites = (props) => {
  const [myFavs, setMyFavs] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:8000/favourites")
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
    const URL = `http://localhost:8000/favourites/${id}`;
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
    <div>
      <h1>Favourites Page</h1>
      {myFavs.length ? (
        myFavs.map((recip) => {
          const url = `http://localhost:3000/search/id/${recip.favourite_recipeID}`;
          return (
            <div className="recipe" key={recip.favourite_recipeID}>
              <a href={url}>
                <h2>{recip.favourite_title}</h2>
              </a>
              <img src={recip.favourite_image}></img>
              <div className="delete-favourite" key={recip.favourite_recipeID}>
                <button
                  onClick={() => {
                    deleteFavourite(recip.favourite_recipeID);
                  }}
                >
                  Delete {recip.favourite_title} from Favourites
                </button>
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
