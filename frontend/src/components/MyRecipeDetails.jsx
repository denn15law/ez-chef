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
    width: "100vw",
    height: "100vh",
  },
};

const MyRecipeDetails = ({ user }) => {
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
            }}>
            <MyRecipeDetailsCard user={user} />
          </Box>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default MyRecipeDetails;
