import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./RecipeDetails.css";

const MyRecipeDetails = (props) => {
  const [details, setDetails] = useState({});
  const [serving, setServing] = useState(1);
  const [servingRatio, setServingRatio] = useState(1);
  let url = window.location.pathname;
  const id = url.split("/myRecipes/")[1];

  const navigate = useNavigate();

  const { user } = props;

  useEffect(() => {
    console.log("I am my recipeID", id);
    axios
      .get(`http://localhost:8000/recipes/recipeDetails/${user}/${id}`)
      .then(function (response) {
        setDetails(response.data[0]);
        console.log("response", response.data[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    setServing(details.serving_size);
  }, [details.serving_size]);

  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  const onClickFavourite = () => {
    if (user) {
      const URL = `http://localhost:8000/favourites/myRecipes/${user}/${details._id}`;
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

  const onClickGrocery = () => {
    axios
      // .post(`/users/${user}/grocery/${details._id}`)
      .post(`/groceries/add/${user}/${details._id}`)
      .then((res) => {
        console.log(res);
        navigate("/groceryList");
      })
      .catch((err) => console.log(err));
  };
  const onClickConvert = () => {
    setServingRatio(serving / details.serving_size);
  };

  return (
    <div className="recipe-details-container">
      <div className="recipe-details">
        <h1 className="recipe-title">{details.title}</h1>
        <div className="recipe-details-image">
          <img className="recipe-details-image" src={details.image_url}></img>
        </div>

        <div className="recipe-actions">
          <button className="favorite-recipe" onClick={onClickFavourite}>
            Add to Favourites
          </button>
          <button id="add-grocery" onClick={onClickGrocery}>
            Add to Grocery List
          </button>
        </div>
        <div className="recipe-content">
          <div className="recipe-ingredients">
            <h2 className="recipe-ingredients">Recipe Ingredients</h2>
            <ul>
              {Object.values(details).length > 0
                ? details.ingredients.map((ing) => {
                    return (
                      <li key={ing.id}>
                        {ing.quantity * servingRatio} {ing.unit} {ing.name}
                      </li>
                    );
                  })
                : null}
            </ul>
            <h3 className="current-servings">
              <div>Current Servings: {details.serving_size * servingRatio}</div>
              <div>Convert Servings: </div>
              <div>
                <TextField
                  type="number"
                  value={serving}
                  onChange={(e) => setServing(e.target.value)}
                  InputProps={{ inputProps: { min: 1 } }}
                  label="Servings"
                  variant="standard"
                />
                <Button onClick={onClickConvert}>Convert</Button>
              </div>
            </h3>
          </div>
          <div className="recipe-instructions">
            <h2 className="cooking-instructions">Cooking Instructions</h2>
            <ol type="1">
              {Object.values(details).length ? (
                removeTags(details.instructions)
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
              ) : (
                <p>You do not have instructions</p>
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRecipeDetails;
