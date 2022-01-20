import React from "react";
import { Box, CssBaseline, Grid, Paper } from "@mui/material";
import EditRecipeForm from "./EditRecipeForm";
import Image from "../docs/new-recipe-background.jpg";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  },
};

const EditRecipe = (props) => {
  const { user } = props;

  let url = window.location.pathname;
  const recipeID = url.split(`/edit/${user}/`)[1];

  return (
    <Grid>
      <CssBaseline />
      <Paper style={styles.paperContainer}>
        <Grid container spacing={4}>
          <Box
            component="main"
            sx={{
              p: 5,
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <EditRecipeForm user={user} recipeID={recipeID} />
          </Box>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default EditRecipe;
