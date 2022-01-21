import { useState, useEffect } from "react";
import axios from "axios";
import { Box, CssBaseline, Grid, Paper, Typography } from "@mui/material";
import RecipesList from "./RecipesList";
import IngredientsList from "./IngredientsList";
import Image from "../docs/user-pages-background.jpg";

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

const GroceryList = ({ user }) => {
  const [myGroceryList, setMyGroceryList] = useState([]);

  const getData = () => {
    axios
      .get(`http://localhost:8000/groceries/${user}`)
      .then(function (response) {
        setMyGroceryList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
            }}>
            <Typography textAlign="center" variant="h5" fontWeight="bold">
              My Grocery List
            </Typography>
            <Grid
              container
              p={2}
              direction="row"
              justifyContent="space-evenly"
              alignItems="top">
              <RecipesList myGroceryList={myGroceryList} user={user} />
              <IngredientsList myGroceryList={myGroceryList} />
            </Grid>
          </Box>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default GroceryList;
