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
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-alert";
import { textAlign } from "@mui/system";

const RecipeDetails = ({ user }) => {
  const [details, setDetails] = useState({});
  const [serving, setServing] = useState(1);
  const [servingRatio, setServingRatio] = useState(1);
  const [isFav, setIsFav] = useState(false);
  const [isGroceries, setIsGroceries] = useState(false);

  let url = window.location.pathname;
  const id = url.split("/search/")[1];
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/search/details/${id}`)
      .then(function (response) {
        setDetails(response.data);
        console.log("response", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/favourites/check/${user}/${id}`)
      .then((response) => {
        if (response.data) {
          console.log("response.data here", response.data);
          setIsFav(true);
        } else {
          setIsFav(false);
        }
      })
      .catch((error) => {
        setIsFav(false);
      });
  }, [user]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/groceries/check/${user}/${id}`)
      .then((response) => {
        if (response.data) {
          console.log("response.data here", response.data);
          setIsGroceries(true);
        } else {
          setIsGroceries(false);
          console.log("no response");
        }
      })
      .catch((error) => {
        setIsGroceries(false);
        console.log("error when checking groceries");
      });
  }, [user]);

  useEffect(() => {
    setServing(details.servings);
  }, [details.servings]);

  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  const onClickFavourite = () => {
    if (user) {
      const URL = `http://localhost:8000/favourites/api/${user}/${details.id}`;
      axios
        .post(URL, details)
        .then((res) => {
          alert("Added!");
        })
        .then(() => setIsFav(true))
        .catch((err) => deleteFavourite());
    } else {
      navigate("/login");
    }
  };

  const onClickConvert = () => {
    setServingRatio(serving / details.servings);
  };

  const onClickGrocery = () => {
    if (user) {
      axios
        .post(
          `http://localhost:8000/groceries/api/${user}/${details.id}`,
          details
        )
        .then((res) => {
          alert("Added!");
        })
        .then(() => setIsGroceries(true))
        .catch((err) => {
          deleteGroceryList();
        });
    } else {
      navigate("/login");
    }
  };

  const deleteFavourite = () => {
    const url = `http://localhost:8000/favourites/${user}/${details.id}`;
    axios
      .delete(url)
      .then(function (response) {
        alert("This recipe has been removed from your favourites!");
      })
      .then(() => {
        setIsFav(false);
      })

      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteGroceryList = () => {
    const url = `http://localhost:8000/groceries/${user}/${details.id}`;
    axios
      .delete(url)
      .then(function (response) {
        alert("This recipe has been removed from your grocery list!");
      })
      .then(() => setIsGroceries(false))
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Grid>
      <CssBaseline />
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
          marginRight: -5.5,
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{ p: 1, fontWeight: "bold" }}
        >
          {details.title}
        </Typography>
        <Grid sx={{ p: 2 }}>
          <CardMedia
            component="img"
            src={details.image}
            alt="recipe"
            style={{ height: 400, width: 500 }}
          />
        </Grid>
        <ButtonGroup>
          <Button onClick={onClickFavourite}>
            {isFav ? <StarIcon /> : <StarBorderIcon />}
          </Button>
          <Button onClick={onClickGrocery}>
            {isGroceries ? <ShoppingCartIcon /> : <AddShoppingCartIcon />}
          </Button>
        </ButtonGroup>
        <Grid sx={{ p: 2 }}>
          <Typography fontWeight="bold" variant="h6">
            Recipe Ingredients
          </Typography>
          <Grid sx={{ p: 2, textAlign: "left" }}>
            {Object.values(details).length > 0
              ? details.extendedIngredients.map((ing) => {
                  return (
                    <li key={ing.id}>
                      {ing.amount * servingRatio} {ing.unit} {ing.name}
                    </li>
                  );
                })
              : null}
          </Grid>
          <Grid
            x={{
              p: 1,
            }}
          >
            <Typography>
              Current Servings: {details.servings * servingRatio}
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
        <Grid sx={{ p: 5 }}>
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
              {Object.values(details).length
                ? removeTags(details.instructions)
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
                : null}
            </Grid>
          </ol>
        </Grid>
      </Box>
    </Grid>
  );
};

export default RecipeDetails;
