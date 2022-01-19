import * as React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RecipeDetails.css";

const RecipeDetails = (props) => {
  const [details, setDetails] = useState({});
  let url = window.location.pathname;
  const id = url.split("/search/id/")[1];

  const navigate = useNavigate();

  const { user } = props;

  React.useEffect(() => {
    axios
      .get(`http://localhost:8000/search/id/${id}`)
      .then(function (response) {
        setDetails(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [id]);

  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  const onClickFavourite = () => {
    if (user) {
      const URL = `http://localhost:8000/favourites/${user}`;
      axios
        .post(URL, details)
        .then((res) => {
          console.log(res);
          navigate("/favourites");
        })
        .catch((err) => console.log(err));
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="recipe-details">
      <h1 className="recipe-title">{details.title}</h1>
      <div className="recipe-details-image">
        <img clasName="recipe-details-image" src={details.image}></img>
      </div>

      <div className="recipe-actions">
        <button className="favorite-recipe" onClick={onClickFavourite}>
          Add to Favourites
        </button>
        <button id="add-grocery">Add to Grocery List</button>
      </div>
      <div className="recipe-content">
        <div className="recipe-ingredients">
          <h2 className="recipe-ingredients">Recipe Ingredients</h2>
          <ul>
            {Object.values(details).length > 0
              ? details.extendedIngredients.map((ing) => {
                  return (
                    <li key={ing.id}>
                      {ing.amount} {ing.unit} {ing.name}
                    </li>
                  );
                })
              : null}
          </ul>
          <h3 className="current-servings">
            Current Servings: {details.servings}
          </h3>
        </div>
        <div className="recipe-instructions">
          <h2 className="cooking-instructions">Cooking Instructions</h2>
          <ol type="1">
            {Object.values(details).length
              ? removeTags(details.instructions)
                  .split(".")
                  .slice(0, -1)
                  .map((each) => {
                    return (
                      <li
                        key={removeTags(details.instructions)
                          .split(".")
                          .indexOf(each)}
                      >
                        {each}
                      </li>
                    );
                  })
              : null}
            {/* {details.instructions
            ? details.instructions
                .replaceAll("<li>", "")
                .replaceAll("</li>", "")
                .replaceAll("<ol>", "")
                .replaceAll("</ol>", "")
            : null} */}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
