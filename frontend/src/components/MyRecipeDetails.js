import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
// import "./RecipeDetails.css";

const MyRecipeDetails = (props) => {
  const [details, setDetails] = useState({});
  const [serving, setServing] = useState(1);
  const [servingRatio, setServingRatio] = useState(1);
  let url = window.location.pathname;
  const id = url.split("/myRecipes/")[1];

  const navigate = useNavigate();

  const { user } = props;

  useEffect(() => {
    console.log("I am my recipeID", id);
    axios
      .get(`http://localhost:8000/recipes/recipeDetails/${user}/${id}`)
      .then(function (response) {
        setDetails(response.data[0]);
        console.log("response", response.data[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    setServing(details.serving_size);
  }, [details.serving_size]);

  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  const onClickFavourite = () => {
    if (user) {
      const URL = `http://localhost:8000/favourites/myRecipes/${user}/${details._id}`;
      axios
        .post(URL, details)
        .then((res) => {
          console.log(res);
          navigate("/favourites");
        })
        .catch((err) => console.log(err));
    } else {
      navigate("/login");
    }
  };

  const onClickGrocery = () => {
    axios
      .post(`/groceries/add/${user}/${details._id}`)
      .then((res) => {
        console.log(res);
        navigate("/groceryList");
      })
      .catch((err) => console.log(err));
  };
  const onClickConvert = () => {
    setServingRatio(serving / details.serving_size);
  };

  return (
    <Grid>
      <CssBaseline />
      <Paper sx={{ p: 2, margin: "auto", maxWidth: 700, flexGrow: 1 }}>
        {/* <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}> */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Typography component="h1" variant="h5" p={1}>
            {details.title}
          </Typography>
          <Grid sx={{ p: 2 }}>
            <CardMedia
              component="img"
              src={details.image_url}
              alt="recipe"
              style={{ height: 250, width: 250 }}
            />
          </Grid>
          <ButtonGroup>
            <Button onClick={onClickFavourite}>Add to Favourites</Button>
            <Button onClick={onClickGrocery}>Add to Grocery List</Button>
          </ButtonGroup>
          <Grid sx={{ p: 2 }}>
            <Typography component="h2" variant="h5">
              Recipe Ingredients
            </Typography>
            <Grid>
              {Object.values(details).length > 0
                ? details.ingredients.map((ing) => {
                    return (
                      <li key={ing.id}>
                        {ing.quantity * servingRatio} {ing.unit} {ing.name}
                      </li>
                    );
                  })
                : null}
            </Grid>
            <Grid>
              <Typography>
                Current Servings: {details.serving_size * servingRatio}
              </Typography>
              <Typography>Convert Servings: </Typography>
              <Grid>
                <TextField
                  type="number"
                  value={serving}
                  onChange={(e) => setServing(e.target.value)}
                  InputProps={{ inputProps: { min: 1 } }}
                  label="Servings"
                  variant="standard"
                />
                <Button onClick={onClickConvert}>Convert</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="h5">Cooking Instructions</Typography>
            <ol type="1">
              {Object.values(details).length ? (
                removeTags(details.instructions)
                  .split(".")
                  .slice(0, -1)
                  .map((each) => {
                    return (
                      <li
                        key={removeTags(details.instructions)
                          .split(".")
                          .indexOf(each)}>
                        {each}
                      </li>
                    );
                  })
              ) : (
                <p>You do not have instructions</p>
              )}
            </ol>
          </Grid>
        </Box>
        {/* </Card> */}
      </Paper>
    </Grid>
  );
};

export default MyRecipeDetails;
