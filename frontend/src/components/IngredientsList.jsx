import React, { useState, useEffect } from "react";
import { Box, Card, CssBaseline, Grid, Paper, Typography } from "@mui/material";

const IngredientList = ({ myGroceryList }) => {
  const [myIngredientsArray, setIngredientsArray] = useState([]);

  let ingredientsArray = [];

  const getIngredients = () => {
    for (let recipe of myGroceryList) {
      for (let ingredient of recipe.ingredients) {
        ingredientsArray.push(ingredient);
      }
    }
    console.log(ingredientsArray);
    setIngredientsArray(ingredientsArray);
  };

  useEffect(() => {
    getIngredients();
  }, [myGroceryList]);

  return (
    <Grid>
      <CssBaseline />
      <Grid
        container
        p={2}
        width="40vw"
        direction="column"
        justifyContent="center"
        alignItems="center">
        <Typography variant="h5">List of Ingredients</Typography>
        <Box
          container
          p={2}
          direction="column"
          justifyContent="center"
          alignItems="center">
          {myGroceryList.length ? (
            <Grid
              p={2}
              direction="column"
              justifyContent="center"
              alignItems="center"
              backgroundColor="white">
              {myIngredientsArray.map((groceryItem, index) => {
                return (
                  <Typography key={index}>{`${groceryItem.name}`}</Typography>
                );
              })}
            </Grid>
          ) : null}
        </Box>
      </Grid>
    </Grid>
  );
};

export default IngredientList;
