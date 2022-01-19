import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import Image from "../docs/homepage-background.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

const theme = createTheme();

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper style={styles.paperContainer}>
        <Grid container spacing={4}>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}>
            WELCOME
          </Box>
        </Grid>
      </Paper>
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: "flex" }}>
              <CardContent sx={{ flex: 1 }}>
                {" "}
                <Typography component="h2" variant="h5">
                  HELLO HELLO
                </Typography>
              </CardContent>
              <CardMedia />
            </Card>
          </CardActionArea>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: "flex" }}>
              <CardContent sx={{ flex: 1 }}>
                {" "}
                <Typography component="h2" variant="h5">
                  HI HI
                </Typography>
              </CardContent>
              <CardMedia />
            </Card>
          </CardActionArea>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Index;
