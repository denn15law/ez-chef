import React from "react";
import { Box, CssBaseline, Grid, Paper, Sizing } from "@mui/material";
import NewRecipeForm from "./NewRecipeForm";
import Image from "../../docs/breakfast.jpg";

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
      <Grid item md={7}>
        <Paper style={styles.paperContainer}></Paper>
      </Grid>
      <Grid item xs={12} md={5}>
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
    </Grid>
  );
};

export default NewRecipe;
