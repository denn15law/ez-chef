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
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setSearch(e.target.value);
  }
  const replaceString = (str) => {
    return str.replaceAll(" ", "+").replaceAll(",", "+");
  };
  const showSearch = () => {
    navigate(`/search/results/${replaceString(search)}`);
  };

  return (
    <Grid>
      <CssBaseline />
      <Paper style={styles.paperContainer}>
        <Grid container spacing={4}>
          <Box
            component="main"
            sx={{
              p: 1,
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}>
            <Grid
              sx={{
                p: 20,
                flexGrow: 1,
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <Typography variant="h4" style={{ fontWeight: "bold" }}>
                Search For Recipes
              </Typography>
              <Paper
                component="form"
                sx={{
                  marginTop: 5,
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 600,
                }}>
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
                  aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Grid>
          </Box>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SearchForm;
