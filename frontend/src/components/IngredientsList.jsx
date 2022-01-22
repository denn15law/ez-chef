import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CssBaseline,
  Grid,
  Paper,
  Typography,
  Button,
  ButtonGroup,
  TextField,
} from "@mui/material";
import axios from "axios";

const IngredientList = ({ myGroceryList }) => {
  const [myIngredientsArray, setIngredientsArray] = useState([]);
  const [phone, setPhone] = useState("");

  let ingredientsArray = [];

  const getIngredients = () => {
    for (let recipe of myGroceryList) {
      for (let ingredient of recipe.ingredients) {
        ingredientsArray.push(ingredient);
      }
    }
    setIngredientsArray(ingredientsArray);
  };

  useEffect(() => {
    getIngredients();
  }, [myGroceryList]);

  const textGroceries = () => {
    let message = "Here is your grocery list from EZ Chef. Happy Shopping! \n";
    myIngredientsArray.map((ingredient, index) => {
      message += `\n${ingredient.name
        .charAt(0)
        .toUpperCase()}${ingredient.name.slice(1)}, `;
    });

    message = message.slice(0, -2);

    const send = {
      message: message,
      phone: phone,
    };
    console.log("send", send);
    axios
      .put("http://localhost:8000/twilio", send)
      .then((res) => {
        console.log("text sent", res);
        setPhone("");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <Grid>
      <CssBaseline />
      <Grid
        container
        p={2}
        width="40vw"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {myGroceryList.length ? (
          <Typography variant="h5" fontWeight="bold">
            List of Ingredients
          </Typography>
        ) : null}

        <Box
          container
          p={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {myGroceryList.length ? (
            <Grid
              p={2}
              direction="column"
              justifyContent="center"
              alignItems="center"
              backgroundColor="white"
            >
              {myIngredientsArray.map((groceryItem, index) => {
                return (
                  <Typography key={index}>{`${groceryItem.name}`}</Typography>
                );
              })}
            </Grid>
          ) : null}

          <TextField
            id="outlined-basic"
            label="My Phone Number"
            variant="outlined"
            onChange={handleChange}
          />
          <Button variant="outlined" onClick={textGroceries}>
            Text Me My Groceries
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default IngredientList;
