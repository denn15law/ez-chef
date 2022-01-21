import React from "react";
import { Box, CssBaseline, Grid, Paper } from "@mui/material";
import MyRecipeDetailsCard from "./MyRecipeDetailsCard";
import Image from "../docs/new-recipe-background.jpg";

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

const MyRecipeDetails = ({ user }) => {
  return (
    <Grid container direction="row" spacing={1} width="100%">
      <CssBaseline />
      <Grid xs={6.5}>
        <Paper style={styles.paperContainer}></Paper>
      </Grid>
      <Grid xs={5.5}>
        <Grid container marginTop={8} spacing={4}>
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
            <MyRecipeDetailsCard user={user} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyRecipeDetails;
