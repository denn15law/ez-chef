import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveOut,
  Sticky,
} from "react-scroll-motion";

import TypeWriterEffect from "react-typewriter-effect";
import Image from "../docs/homepage-background.jpg";
import Image1 from "../docs/search-recipes.png";
import Image2 from "../docs/recipe-details.png";
import Image3 from "../docs/add-recipe.png";
import Image4 from "../docs/my-recipes.png";
import Image5 from "../docs/my-favourites.png";
import Image6 from "../docs/my-grocerylist.png";
import ImageLogin from "../docs/login.png";
import ImagePersonal from "../docs/personalContent.png";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "101.7vw",
    height: "93vh",
  },
};

const Index = () => {
  return (
    <Grid>
      <CssBaseline />
      <Grid container marginTop={8} spacing={4}>
        <ScrollContainer>
          <ScrollPage page={0}>
            <Paper style={styles.paperContainer}>
              <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <Grid
                  sx={{
                    flexGrow: 1,
                    overflow: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "80vw",
                  }}>
                  <div
                    style={{
                      background: "grey",
                      opacity: 0.9,
                      borderRadius: "3px",
                      // paddingTop: "3px",
                      // paddingBottom: "3px",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                    }}>
                    <TypeWriterEffect
                      // p={10}
                      color="white"
                      textStyle={{
                        color: "white",
                        fontWeight: "500",
                        fontSize: "3rem",
                      }}
                      startDelay={1000}
                      cursorColor="black"
                      multiText={[
                        "Hey there! Welcome to EZ Chef!",
                        "Scroll down to see all the features!",
                      ]}
                      multiTextDelay={1000}
                      typeSpeed={50}
                    />
                  </div>
                </Grid>
              </Animator>
            </Paper>
          </ScrollPage>
          <ScrollPage page={1}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <Grid sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="h3">
                  Easily search for recipes by typing in keywords or
                  ingredients!
                </Typography>
              </Grid>
            </Animator>
          </ScrollPage>
          <ScrollPage page={2}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <Grid display="flex" flexDirection="row">
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 5,
                  }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5">Search Recipes </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    src={Image1}
                    style={{ width: 540, height: 285 }}
                  />
                </Card>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 5,
                  }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5">Recipe Details </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    src={Image2}
                    style={{ width: 540, height: 285 }}
                  />
                </Card>
              </Grid>
            </Animator>
          </ScrollPage>
          <ScrollPage page={3}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <Grid sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="h3">
                  Register and Log in for personal content!
                </Typography>
              </Grid>
            </Animator>
          </ScrollPage>
          <ScrollPage page={4}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <Grid
                display="flex"
                flexDirection="row"
                justifyContent="space-around">
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 5,
                  }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5">
                      Register and Login to your Account
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    src={ImageLogin}
                    style={{ width: 540, height: 285 }}
                  />
                </Card>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 5,
                  }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5">
                      View your Personal Content
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    src={ImagePersonal}
                    style={{ width: 540, height: 285 }}
                  />
                </Card>
              </Grid>
            </Animator>
          </ScrollPage>
          <ScrollPage page={5}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <Grid sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="h3">
                  Create and save your own recipes!
                </Typography>
              </Grid>
            </Animator>
          </ScrollPage>
          <ScrollPage page={6}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <Grid
                display="flex"
                flexDirection="row"
                justifyContent="space-around">
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 5,
                  }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5">Create Recipes </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    src={Image3}
                    style={{ width: 540, height: 285 }}
                  />
                </Card>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 5,
                  }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5">View Your Recipes</Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    src={Image4}
                    style={{ width: 540, height: 285 }}
                  />
                </Card>
              </Grid>
            </Animator>
          </ScrollPage>
          <ScrollPage page={7}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <Grid sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="h3">
                  Add any recipe to your favourites or grocery list!
                </Typography>
              </Grid>
            </Animator>
          </ScrollPage>
          <ScrollPage page={8}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <Grid
                display="flex"
                flexDirection="row"
                justifyContent="space-around">
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 5,
                  }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5">My Favourite Recipes</Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    src={Image5}
                    style={{ width: 540, height: 285 }}
                  />
                </Card>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 5,
                  }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5">My Grocery List</Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    src={Image6}
                    style={{ width: 540, height: 285 }}
                  />
                </Card>
              </Grid>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </Grid>
    </Grid>
  );
};

export default Index;
