import React from "react";
import axios from "axios";
import {
  Button,
  ButtonGroup,
  Box,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
  CardContent,
  Link,
  CardActions,
  Card,
} from "@mui/material";

const RecipesList = ({ myGroceryList, user }) => {
  const deleteGroceryList = (id) => {
    const url = `http://localhost:8000/groceries/${user}/${id}`;
    axios
      .delete(url)
      .then(function (response) {
        window.location.reload();
        console.log("response from delete", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Grid>
      <CssBaseline />
      <Grid
        container
        p={2}
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Typography variant="h5">List of Recipes</Typography>
        <Grid
          container
          p={2}
          spacing={{ xs: 2, md: 7 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center">
          {myGroceryList.length ? (
            myGroceryList.map((groceryList) => {
              let url = "";
              if (groceryList.grocery_list_recipeID.length <= 10) {
                url += `http://localhost:3000/search/${groceryList.grocery_list_recipeID}`;
              } else {
                url += `http://localhost:3000/myRecipes/${groceryList.grocery_list_recipeID}`;
              }
              return (
                <Grid item key={groceryList.grocery_list_recipeID}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Link href={url}>{groceryList.grocery_list_title}</Link>
                    </CardContent>
                    <CardActions>
                      <Button
                        color="error"
                        onClick={() => {
                          deleteGroceryList(groceryList.grocery_list_recipeID);
                        }}>
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
          ) : (
            <h3>You do not have any recipes in your grocery list!</h3>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RecipesList;
