import React from "react";
import { Container, AppBar, Typography } from "@mui/material";
import NewRecipeForm from "./NewRecipeForm";

const NewRecipe = () => {
  return (
    <Container>
      <AppBar position="static" color="inherit">
        <Typography variant="h4" align="center">
          ADD NEW RECIPE
        </Typography>
      </AppBar>
      <NewRecipeForm />
    </Container>
  );
};

export default NewRecipe;
