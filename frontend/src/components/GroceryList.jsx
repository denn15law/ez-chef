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
    overflow: "hidden",
    height: "100%",
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
    <Grid container direction="row" spacing={1}>
      <CssBaseline />
      <Grid xs={8.25}>
        <Paper style={styles.paperContainer}></Paper>
      </Grid>
      <Grid xs={3.75}>
        <Grid container spacing={4} marginTop={8} marginLeft={0}>
          <Box
            component="main"
            sx={{
              paddingTop: 8,
              flexWrap: "wrap",
              minHeight: "100vh",
              overflow: "hidden",
              alignContent: "center",
              justifyContent: "center",
            }}>
            <Typography textAlign="center" variant="h4" fontWeight="bold">
              My Grocery List
              {myGroceryList.length ? null : (
                <h6>There are no recipes in your grocery list!</h6>
              )}
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
      </Grid>
    </Grid>
  );
};

export default GroceryList;
