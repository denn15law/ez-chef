import React from "react";
import { Box, CssBaseline, Grid, Paper } from "@mui/material";
import EditRecipeForm from "./EditRecipeForm";
import Image from "../../docs/breakfast2.jpeg";
import { styled } from "@mui/system";

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

const SideImage = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

const EditRecipe = (props) => {
  const { user } = props;

  let url = window.location.pathname;
  const recipeID = url.split(`/edit/${user}/`)[1];

  return (
    <Grid container direction="row" spacing={1}>
      <CssBaseline />

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
            <EditRecipeForm user={user} recipeID={recipeID} />
          </Box>
        </Grid>
      </Grid>
      <Grid item md={7}>
        <SideImage>
          <Paper style={styles.paperContainer}></Paper>
        </SideImage>
      </Grid>
    </Grid>
  );
};

export default EditRecipe;
