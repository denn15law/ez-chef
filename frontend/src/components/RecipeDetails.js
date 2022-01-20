import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, TextField, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import "./RecipeDetails.css";

const RecipeDetails = (props) => {
  const [details, setDetails] = useState({});
  const [serving, setServing] = useState(1);
  const [servingRatio, setServingRatio] = useState(1);
  // const [errorMessage, setErrorMessage] = useState(null);
  let url = window.location.pathname;
  const id = url.split("/search/")[1];
  const navigate = useNavigate();

  const { user } = props;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/search/details/${id}`)
      .then(function (response) {
        setDetails(response.data);
        console.log("response", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    setServing(details.servings);
  }, [details.servings]);

  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  const onClickFavourite = () => {
    if (user) {
      const URL = `http://localhost:8000/favourites/api/${user}/${details.id}`;
      axios
        .post(URL, details)
        .then((res) => {
          alert("Added!");
        })
        .catch((err) => {
          alert("This recipe has already been added to your favourites.");
          console.log(err);
        });
    } else {
      navigate("/login");
    }
  };

  const onClickConvert = () => {
    setServingRatio(serving / details.servings);
  };

  const onClickGrocery = () => {
    if (user) {
      axios
        .post(
          `http://localhost:8000/groceries/api/${user}/${details.id}`,
          details
        )
        .then((res) => {
          console.log(res);
          alert("Added!");
        })
        .catch((err) => {
          alert("This recipe has already been added to your grocery list.");
          console.log(err);
        });
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="recipe-details-container">
      <div className="recipe-details">
        <h1 className="recipe-title">{details.title}</h1>
        <div className="recipe-details-image">
          <img clasName="recipe-details-image" src={details.image}></img>
        </div>

        <div className="recipe-actions">
          <Button
            onClick={onClickFavourite}
            style={{ display: "flex", alignItems: "flex-end" }}
          >
            Add Recipe To Favourites
          </Button>
          <Button
            onClick={onClickGrocery}
            style={{ display: "flex", alignItems: "flex-end" }}
          >
            Add To Grocery List
          </Button>
        </div>
        <div className="recipe-content">
          <div className="recipe-ingredients">
            <h2 className="recipe-ingredients">Recipe Ingredients</h2>
            <ul>
              {Object.values(details).length > 0
                ? details.extendedIngredients.map((ing) => {
                    return (
                      <li key={ing.id}>
                        {ing.amount * servingRatio} {ing.unit} {ing.name}
                      </li>
                    );
                  })
                : null}
            </ul>
            <h3 className="current-servings">
              <div>Current Servings: {details.servings * servingRatio}</div>
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
              {Object.values(details).length
                ? removeTags(details.instructions)
                    .split(".")
                    .slice(0, -1)
                    .map((each) => {
                      return (
                        <li
                          key={removeTags(details.instructions)
                            .split(".")
                            .indexOf(each)}>
                          {each + "."}
                        </li>
                      );
                    })
                : null}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
