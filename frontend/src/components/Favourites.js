import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
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

const Favourites = ({ user }) => {
  const [myFavs, setMyFavs] = useState([]);

  const getData = () => {
    console.log("iamuser", user);
    axios
      .get(`http://localhost:8000/favourites/${user}`)
      .then(function (response) {
        setMyFavs(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteFavourite = (id) => {
    const url = `http://localhost:8000/favourites/${user}/${id}`;
    axios
      .delete(url)
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
      <CssBaseline />
      <Paper style={styles.paperContainer}>
        <Grid container spacing={4}>
          <Box
            component="main"
            sx={{
              p: 5,
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}>
            <Typography variant="h5">My Favourite Recipes</Typography>
            <Grid
              container
              p={5}
              spacing={{ xs: 2, md: 7 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              direction="row"
              justifyContent="center"
              alignItems="center">
              {myFavs.length ? (
                myFavs.map((recip) => {
                  let url = "";
                  if (recip.favourite_recipeID.length < 10) {
                    url += `http://localhost:3000/search/${recip.favourite_recipeID}`;
                  } else {
                    url += `http://localhost:3000/myRecipes/${recip.favourite_recipeID}`;
                  }
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
                          <Link href={url}>{recip.favourite_title}</Link>
                        </CardContent>
                        <CardMedia
                          key={recip.favourite_recipeID}
                          component="img"
                          src={recip.favourite_image}
                          alt="recipe"
                          style={{ height: 250, width: 250 }}
                        />
                        <CardActions>
                          <Button
                            onClick={() => {
                              deleteFavourite(recip.favourite_recipeID);
                            }}
                            size="small">
                            Delete
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })
              ) : (
                <Typography variant="h5">Add a Favourite Recipe</Typography>
              )}
            </Grid>
          </Box>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Favourites;
