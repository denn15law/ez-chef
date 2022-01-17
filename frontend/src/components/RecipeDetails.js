import * as React from "react";
import axios from "axios";
import { useState } from "react";

const RecipeDetails = () => {
  const [details, setDetails] = useState({});
  let url = window.location.pathname;
  const id = url.split("/search/id/")[1];

  React.useEffect(() => {
    axios
      .get(`http://localhost:8000/search/id/${id}`)
      .then(function (response) {
        console.log("iamdata", response.data);
        setDetails(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <h1>{details.title}</h1>
      <img src={details.image}></img>
      <div id="recipe-ingredients">
        <h3>Recipe Ingredients:</h3>
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
      </div>
      <div id="recipe-instructions">
        <h3>Cooking Instructions:</h3>
        <ol type="1">
          {Object.values(details).length
            ? details.instructions
                .replaceAll("<li>", "")
                .replaceAll("</li>", "")
                .replaceAll("<ol>", "")
                .replaceAll("</ol>", "")
                .replaceAll("<p>", "")
                .replaceAll("</p>", "")
                .replaceAll("<b>", "")
                .replaceAll("</b>", "")
                .split(".")
                .slice(0, -1)
                .map((each) => {
                  return (
                    <li
                      key={details.instructions
                        .replaceAll("<li>", "")
                        .replaceAll("</li>", "")
                        .replaceAll("<ol>", "")
                        .replaceAll("</ol>", "")
                        .replaceAll("<p>", "")
                        .replaceAll("</p>", "")
                        .replaceAll("<b>", "")
                        .replaceAll("</b>", "")
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
  );
};

export default RecipeDetails;
