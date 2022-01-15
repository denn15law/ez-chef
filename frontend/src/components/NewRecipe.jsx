import React from "react";
import RecipeForm from "./RecipeForm";
import { Container, AppBar, Typography } from "@mui/material";

const NewRecipe = () => {
  return (
    <Container>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          NEW RECIPE
        </Typography>
      </AppBar>
      <RecipeForm />
    </Container>
  );
};

export default NewRecipe;