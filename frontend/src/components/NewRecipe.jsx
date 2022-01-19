import React from "react";
import { Box, Paper } from "@mui/material";
import NewRecipeForm from "./NewRecipeForm";
import Image from "../docs/background-image.jpg";

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
    <Paper style={styles.paperContainer}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}>
        <NewRecipeForm user={user} />
      </Box>
    </Paper>
  );
};

export default NewRecipe;
