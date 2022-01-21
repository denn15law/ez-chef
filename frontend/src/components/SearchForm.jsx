import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
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

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setSearch(e.target.value);
  }
  const replaceString = (str) => {
    return str.replaceAll(" ", "+").replaceAll(",", "+");
  };
  const showSearch = (e) => {
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
          marginTop={8}
          sx={{
            p: 2,
            flexGrow: 1,
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="main"
            sx={{
              p: 5,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              Search For Recipes
            </Typography>
            <Paper
              component="form"
              sx={{
                marginTop: 2,
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 600,
                ":hover": {
                  boxShadow: 20,
                },
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter Ingredients or Keywords"
                inputProps={{ "aria-label": "search google maps" }}
                value={search}
                onChange={handleChange}
              />
              <IconButton
                onClick={showSearch}
                sx={{ p: "10px" }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SearchForm;
