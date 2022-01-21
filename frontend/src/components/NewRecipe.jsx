import React from "react";
import { Box, CssBaseline, Grid, Paper, Sizing } from "@mui/material";
import NewRecipeForm from "./NewRecipeForm";
import Image from "../docs/breakfast.jpg";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    height: "100%",
  },
};

const NewRecipe = (props) => {
  const { user } = props;
  return (
    <Grid container direction="row" spacing={1}>
      <CssBaseline />
      <Grid xs={4.5}>
        <Grid container spacing={4} marginTop={8}>
          <Box
            component="main"
            sx={{
              p: 5,
              flexGrow: 1,
              height: "92.5vh",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <NewRecipeForm user={user} />
          </Box>
        </Grid>
      </Grid>
      <Grid xs={7.5}>
        <Paper style={styles.paperContainer}></Paper>
      </Grid>
    </Grid>
  );
};

export default NewRecipe;
