import React from "react";
import { Box, CssBaseline, Grid, Paper } from "@mui/material";
import RecipeDetailsCard from "./RecipeDetailsCard";
import Image from "../../docs/new-recipe-background.jpg";

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

const RecipeDetails = ({ user }) => {
  return (
    <Grid container direction="row" spacing={1}>
      <CssBaseline />
      <Grid item md={7}>
        <Paper style={styles.paperContainer}></Paper>
      </Grid>
      <Grid item xs={12} md={5}>
        <Grid container marginTop={8} spacing={4}>
          <Box
            component="main"
            sx={{
              p: 5,
              flexGrow: 1,
              height: "92.5vh",
              width: "100%",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <RecipeDetailsCard user={user} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RecipeDetails;
