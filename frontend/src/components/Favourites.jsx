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
import Image from "../docs/burger.jpeg";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
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
        <Grid container marginTop={8} spacing={4}>
          <Box
            component="main"
            sx={{
              p: 5,
              flexGrow: 1,
              height: "95vh",
              overflow: "auto",
            }}>
            <Typography textAlign="center" variant="h4" fontWeight="bold">
              My Favourite Recipes
            </Typography>
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
                          ":hover": {
                            boxShadow: 20,
                          },
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
                            color="error"
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
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  style={{
                    textAlign: "center",
                  }}>
                  <Box
                    sx={{
                      p: 10,
                      flexGrow: 1,
                      height: "100vh",
                      overflow: "auto",
                    }}>
                    <Button href="/search" variant="contained" size="small">
                      Search For Recipes
                    </Button>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Box>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Favourites;
