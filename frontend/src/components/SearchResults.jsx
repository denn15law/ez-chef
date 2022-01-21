import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  IconButton,
  InputBase,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import Image from "../docs/background-option2.jpg";

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

const SearchForm = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState("");
  const navigate = useNavigate();

  let url = window.location.pathname;
  const results = url.split("/search/results/")[1];

  function handleChange(e) {
    setSearch(e.target.value);
  }

  const replaceString = (search) => {
    return search.replaceAll(" ", "+").replaceAll(",", "+");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/search/results/${results}`)
      .then(function (response) {
        console.log("response.data hello", response.data);
        // handle success
        setSearched(results);
        setRecipeData(response.data);
        setSearch("");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [results]);

  const reloadSearch = () => {
    navigate(`/search/results/${replaceString(search)}`);
  };

  return (
    <Grid>
      <CssBaseline />
      <Paper style={styles.paperContainer}>
        <Grid
          container
          marginTop={8}
          spacing={4}
          sx={{
            p: 5,
            flexGrow: 1,
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Typography variant="h5" fontWeight="bold">
            Search Results
          </Typography>
          <Grid p={5}>
            {recipeData.length ? (
              <Typography variant="h8" fontWeight="bold">
                Now displaying recipes containing:{" "}
                {searched.replaceAll("++", "+").replaceAll("+", ", ")}
              </Typography>
            ) : null}
          </Grid>
          <Box
            component="main"
            sx={{
              p: 3,
              flexGrow: 1,
              height: "65vh",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Grid
              container
              p={5}
              spacing={{ xs: 2, md: 8 }}
              columns={{ xs: 4, sm: 8, md: 16 }}
              direction="row"
              justifyContent="center"
              alignItems="center">
              {recipeData.length
                ? recipeData
                    .sort((a, b) =>
                      a.title.toLowerCase().localeCompare(b.title.toLowerCase())
                    )
                    .map((recip) => {
                      const url = `http://localhost:3000/search/${recip.id}`;
                      return (
                        <Grid item xs={12} sm={12} md={4} lg={4}>
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
                              key={recip.id}
                              component="img"
                              src={recip.image}
                              alt="recipe"
                              style={{ height: 250, width: 250 }}
                            />
                          </Card>
                        </Grid>
                      );
                    })
                : null}
            </Grid>
          </Box>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SearchForm;
