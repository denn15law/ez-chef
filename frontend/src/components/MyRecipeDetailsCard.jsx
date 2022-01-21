import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  ButtonGroup,
  CardMedia,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-alert";

const MyRecipeDetailsCard = ({ user }) => {
  const [details, setDetails] = useState({});
  const [serving, setServing] = useState(1);
  const [servingRatio, setServingRatio] = useState(1);
  let url = window.location.pathname;
  const id = url.split("/myRecipes/")[1];
  const navigate = useNavigate();

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

  const onClickEdit = (id) => {
    navigate(`/edit/${user}/${id}`);
  };

  const onClickFavourite = () => {
    if (user) {
      const URL = `http://localhost:8000/favourites/myRecipes/${user}/${details._id}`;
      axios
        .post(URL, details)
        .then((res) => {
          alert("Added!");
        })
        .catch((err) =>
          alert("This recipe has already been added to your favourites!")
        );
    } else {
      navigate("/login");
    }
  };

  const onClickConvert = () => {
    setServingRatio(serving / details.serving_size);
  };

  const onClickGrocery = () => {
    if (user) {
      axios
        .post(
          `http://localhost:8000/groceries/myRecipes/${user}/${details._id}`,
          details
        )
        .then((res) => {
          alert("Added!");
        })
        .catch((err) => {
          alert("This recipe has already been added to your grocery list!");
        });
    } else {
      navigate("/login");
    }
  };

  return (
    <Grid>
      <CssBaseline />
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 600,
          flexGrow: 1,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{ p: 1, fontWeight: "bold" }}
          >
            {details.title}
          </Typography>
          <Grid sx={{ p: 2 }}>
            <CardMedia
              component="img"
              src={details.image_url}
              alt="recipe"
              style={{ height: 400, width: 750 }}
            />
          </Grid>
          <ButtonGroup>
            <Button
              onClick={() => {
                onClickEdit(details._id);
              }}
            >
              <EditIcon />
            </Button>
            <Button onClick={onClickFavourite}>
              <StarIcon />
            </Button>
            <Button onClick={onClickGrocery}>
              <AddShoppingCartIcon />
            </Button>
          </ButtonGroup>
          <Grid sx={{ p: 2 }}>
            <Typography fontWeight="bold" variant="h6">
              Recipe Ingredients
            </Typography>
            <Grid sx={{ p: 2 }}>
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
            <Grid
              sx={{
                p: 1,
              }}
            >
              <Typography>
                Current Servings: {details.serving_size * servingRatio}
              </Typography>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography>Convert Servings: </Typography>
                <TextField
                  style={{
                    width: 70,
                    marginTop: 5,
                    marginLeft: 10,
                    marginRight: 5,
                  }}
                  size="small"
                  type="number"
                  value={serving}
                  onChange={(e) => setServing(e.target.value)}
                  InputProps={{
                    inputProps: { min: 1, style: { textAlign: "center" } },
                  }}
                />
                <Button size="small" onClick={onClickConvert}>
                  Convert
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sx={{ p: 1 }}>
            <Typography fontWeight="bold" variant="h6">
              Cooking Instructions
            </Typography>
            <ol type="1">
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  textAlign: "left",
                }}
              >
                {Object.values(details).length ? (
                  removeTags(details.instructions)
                    .split(".")
                    .slice(0, -1)
                    .map((each) => {
                      return (
                        <li
                          key={removeTags(details.instructions)
                            .split(".")
                            .indexOf(each)}
                        >
                          {each + "."}
                        </li>
                      );
                    })
                ) : (
                  <Typography>You do not have instructions</Typography>
                )}
              </Grid>
            </ol>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

export default MyRecipeDetailsCard;
