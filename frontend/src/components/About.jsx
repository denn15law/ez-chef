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
import Image from "../docs/background-option1.jpg";

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

const About = ({ user }) => {
  //   const [Teams, setTeams] = useState([]);

  //   const teams = [
  //     { name: "Jeewon Lee" },
  //     { name: "Dennis Law" },
  //     { name: "Kyle Liang" },
  //   ];

  //   useEffect(() => {
  //     setTeams(teams);
  //   }, [teams]);

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
            <Typography variant="h5">About EZ Chef</Typography>
            <Grid
              container
              p={2}
              spacing={{ xs: 2, md: 7 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              direction="row"
              justifyContent="center"
              alignItems="center">
              <Grid item key={1}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: 715,
                    height: 300,
                    textAlign: "left",
                    paddingTop: 2,
                    paddingLeft: 1,
                    paddingRight: 1,
                  }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <p>
                      Two years into the COVID-19 pandemic, developers Jeewon
                      Lee, Dennis Law, and Kyle Liang had had enough of being
                      cooped up at home and constantly eating instant ramen and
                      leftover pizza. Like so many others, they wanted to
                      improve their cooking skills but didn't know where to
                      start. Meet EZ Chef, cooking made easy. EZ Chef is your
                      new chef mate who can help you develop your cooking skills
                      by providing recipe ideas and cooking instructions, set
                      you up with a grocery list, and even convert serving sizes
                      based on how much food you want to make. Once you are
                      confident enough, you can even create your own recipes in
                      EZ Chef so that you can come back to that same delicious
                      meal whenever you want to. EZ Chef is perfect for anybody
                      wishing to improve their cooking skills, avid meal prep
                      fanatics, new aspiring chefs, and those who wish to cook
                      for themselves and need a convenient serving size
                      converter. Start cooking today!
                    </p>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Typography variant="h5">Our Team</Typography>
            <Grid
              container
              p={5}
              spacing={{ xs: 2, md: 7 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              direction="row"
              justifyContent="center"
              alignItems="center">
              <Grid item key={1}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 220,
                  }}>
                  <CardMedia
                    key={1}
                    component="img"
                    src="https://sixhungryfeet.com/wp-content/uploads/2020/06/Vegetarian-Pad-Thai-2.jpg"
                    alt="teamimage"
                    style={{ height: 170, width: 200 }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 30,
                    }}>
                    <h4>Jeewon Lee</h4>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key={2}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 220,
                  }}>
                  <CardMedia
                    key={2}
                    component="img"
                    src="https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg"
                    alt="teamimage"
                    style={{ height: 170, width: 200 }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 30,
                    }}>
                    <h4>Dennis Law</h4>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key={3}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 220,
                  }}>
                  <CardMedia
                    key={3}
                    component="img"
                    src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F19%252F2018%252F04%252F23%252F1804-what-is-sushi-grade-fish-2000.jpg&q=85"
                    alt="teamimage"
                    style={{ height: 170, width: 200 }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 30,
                    }}>
                    <h4>Kyle Liang</h4>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default About;
