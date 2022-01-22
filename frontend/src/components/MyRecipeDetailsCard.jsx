import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  ButtonGroup,
  CardMedia,
  ClickAwayListener,
  CssBaseline,
  Grid,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const MyRecipeDetailsCard = ({ user }) => {
  const [details, setDetails] = useState({});
  const [serving, setServing] = useState(1);
  const [servingRatio, setServingRatio] = useState(1);
  const [isFav, setIsFav] = useState(false);
  const [isGroceries, setIsGroceries] = useState(false);
  const [addFav, setAddFav] = useState(false);
  const [addGroceries, setAddGroceries] = useState(false);

  let url = window.location.pathname;
  const id = url.split("/myRecipes/")[1];
  const navigate = useNavigate();

  const handleTooltipClose = () => {
    setAddFav(false);
    // setAddGroceries(false);
  };

  const handleTooltipOpen = () => {
    setAddFav(true);
    // setAddGroceries(true);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/recipes/recipeDetails/${user}/${id}`)
      .then(function (response) {
        setDetails(response.data[0]);
        console.log("response", response.data[0]);
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
          // alert("Added!");
        })
        .then(() => setIsFav(true))
        .catch((err) => deleteFavourite());
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
          // alert("Added!");
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
    const url = `http://localhost:8000/favourites/${user}/${details._id}`;
    axios
      .delete(url)
      .then(function (response) {
        // alert("This recipe has been removed from your favourites!");
      })
      .then(() => {
        setIsFav(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteGroceryList = (id) => {
    const url = `http://localhost:8000/groceries/${user}/${details._id}`;
    axios
      .delete(url)
      .then(function (response) {
        // alert("This recipe has been removed from your grocery list!");
      })
      .then(() => {
        setIsGroceries(false);
      })
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
        }}>
        <Typography
          component="h1"
          variant="h4"
          sx={{ p: 1, fontWeight: "bold" }}>
          {details.title}
        </Typography>
        <Grid sx={{ p: 2 }}>
          <CardMedia
            component="img"
            src={details.image_url}
            alt="recipe"
            style={{ height: 400, width: 500 }}
          />
        </Grid>
        <ButtonGroup>
          <Button
            onClick={() => {
              onClickEdit(details._id);
            }}>
            <EditIcon />
          </Button>
          <Button onClick={onClickFavourite}>
            {isFav ? (
              <ClickAwayListener onClickAway={handleTooltipClose}>
                <Tooltip
                  title="Added to Favourites"
                  onClose={handleTooltipClose}
                  open={addFav}>
                  <StarIcon onClick={handleTooltipOpen} />
                </Tooltip>
              </ClickAwayListener>
            ) : (
              <ClickAwayListener onClickAway={handleTooltipClose}>
                <Tooltip
                  title="Removed from Favourites"
                  onClose={handleTooltipClose}
                  open={addFav}>
                  <StarBorderIcon onClick={handleTooltipOpen} />
                </Tooltip>
              </ClickAwayListener>
            )}
          </Button>
          <Button onClick={onClickGrocery}>
            {isGroceries ? (
              // <ClickAwayListener onClickAway={handleTooltipClose}>
              //   <Tooltip
              //     title="Added to your Grocery List"
              //     onClose={handleTooltipClose}
              //     open={addGroceries}>
              <ShoppingCartIcon
              // onClick={handleTooltipOpen}
              />
            ) : (
              //   </Tooltip>
              // </ClickAwayListener>
              // <ClickAwayListener onClickAway={handleTooltipClose}>
              //   <Tooltip
              //     title="Added to your Grocery List"
              //     onClose={handleTooltipClose}
              //     open={addGroceries}>
              <AddShoppingCartIcon
              // onClickAway={handleTooltipOpen}
              />
              //   </Tooltip>
              // </ClickAwayListener>
            )}
          </Button>
        </ButtonGroup>
        <Grid sx={{ p: 2 }}>
          <Typography fontWeight="bold" variant="h6">
            Recipe Ingredients
          </Typography>
          <Grid sx={{ p: 2, textAlign: "left" }}>
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
            }}>
            <Typography>
              Current Servings: {details.serving_size * servingRatio}
            </Typography>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}>
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
              }}>
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
    </Grid>
  );
};

export default MyRecipeDetailsCard;
