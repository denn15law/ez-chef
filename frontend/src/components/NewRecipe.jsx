import React from "react";
import { Box, CssBaseline, Grid, Paper } from "@mui/material";
import NewRecipeForm from "./NewRecipeForm";
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

const NewRecipe = (props) => {
  const { user } = props;
  return (
    <Grid>
      <CssBaseline />
      <Paper style={styles.paperContainer}>
        <Grid container marginTop={8} spacing={4}>
          <Box
            component="main"
            sx={{
              p: 5,
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
            }}>
            <NewRecipeForm user={user} />
          </Box>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default NewRecipe;
