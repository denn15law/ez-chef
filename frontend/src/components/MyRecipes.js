import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import MyRecipeCardExample from "./MyRecipeCardExample";
// import "./Favourites.css";

const theme = createTheme();

const MyRecipes = ({ user }) => {
  const [myRecipes, setMyRecipes] = useState([]);

  const getData = () => {
    axios
      .get(`http://localhost:8000/recipes/${user}`)
      .then(function (response) {
        setMyRecipes(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteRecipe = (id) => {
    const URL = `http://localhost:8000/recipes/${user}/${id}`;
    axios
      .delete(URL)
      .then(function (response) {
        getData();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Grid>
      <Typography variant="h5">My Recipes</Typography>
      <Grid
        container
        p={5}
        spacing={{ xs: 2, md: 7 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center">
        {myRecipes.length ? (
          myRecipes.map((recip) => {
            const url = `http://localhost:3000/myRecipes/${recip._id}`;
            return (
              <Grid item key={recip}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Link to={url}>{recip.title}</Link>
                  </CardContent>
                  <CardMedia
                    key={recip._id}
                    component="img"
                    className="favourite-recipe-image"
                    src={recip.image_url}
                    alt="recipe"
                  />
                  <CardActions>
                    <Button
                      onClick={() => {
                        deleteRecipe(recip._id);
                      }}
                      className="delete-favourite"
                      size="small">
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })
        ) : (
          <Typography variant="h5">Add a Recipe</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default MyRecipes;
