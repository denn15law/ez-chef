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
import { useNavigate } from "react-router-dom";

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

const MyRecipes = ({ user }) => {
  const [myRecipes, setMyRecipes] = useState([]);

  const navigate = useNavigate();

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

  const editRecipe = (id) => {
    navigate(`/edit/${user}/${id}`);
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
            <Typography variant="h5" fontWeight="bold">
              My Recipes
            </Typography>
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
                          <Link href={url}>{recip.title}</Link>
                        </CardContent>
                        <CardMedia
                          key={recip._id}
                          component="img"
                          src={recip.image_url}
                          alt="recipe"
                          style={{ height: 250, width: 250 }}
                        />
                        <CardActions>
                          <Button
                            onClick={() => {
                              editRecipe(recip._id);
                            }}
                            size="small">
                            Edit
                          </Button>
                          <Button
                            color="error"
                            onClick={() => {
                              deleteRecipe(recip._id);
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
                    <Button href="/new" variant="contained" size="small">
                      Create New Recipes
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

export default MyRecipes;
