import React, { useState } from "react";
import Logout from "./Logout";
import {
  AppBar,
  Avatar,
  Box,
  Grid,
  IconButton,
  InputBase,
  ListItem,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import Image from "../docs/logo.png";

const Nav = ({ user }) => {
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleChange(e) {
    setSearch(e.target.value);
  }

  const replaceString = (str) => {
    return str.replaceAll(" ", "+").replaceAll(",", "+");
  };

  const showSearch = () => {
    navigate(`/search/results/${replaceString(search)}`);
  };

  const navigateHome = () => {
    navigate("/");
  };

  const navigateAbout = () => {
    navigate("/about");
  };

  const navigateMyRecipes = () => {
    navigate("/myrecipes");
  };

  const navigateNew = () => {
    navigate("/new");
  };

  const navigateFavourites = () => {
    navigate("/favourites");
  };

  const navigateGroceryList = () => {
    navigate("/grocerylist");
  };

  const navigateRegister = () => {
    navigate("/register");
  };

  const navigateLogin = () => {
    navigate("login");
  };

  return (
    <AppBar position="fixed" style={{ background: "#F5F5F5" }}>
      <Box
        sx={{
          p: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
        }}>
        <Grid sx={{ marginLeft: 2, display: "flex", flexDirection: "row" }}>
          <img src={Image} alt="logo" height={35} onClick={navigateHome} />
        </Grid>
        <Grid sx={{ display: "flex", flexDirection: "row" }}>
          <Grid sx={{ display: "flex", flexDirection: "row" }}>
            <Grid sx={{ display: "flex", flexDirection: "row" }}>
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  width: 160,
                }}
                placeholder="Search for Recipes"
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
            </Grid>
          </Grid>
          <Tooltip title="Your Pages">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2, marginRight: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}>
              <Avatar sx={{ width: 35, height: 35 }}>
                <PersonIcon />
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
            <MenuItem onClick={handleClose}>
              <ListItem onClick={navigateHome}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <Typography>Home</Typography>
              </ListItem>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItem onClick={navigateAbout}>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <Typography>About Us</Typography>
              </ListItem>
            </MenuItem>
            {user && (
              <MenuItem onClick={handleClose}>
                <ListItem onClick={navigateMyRecipes}>
                  <ListItemIcon>
                    <MenuBookIcon />
                  </ListItemIcon>
                  <Typography>My Recipes</Typography>
                </ListItem>
              </MenuItem>
            )}
            {user && (
              <MenuItem onClick={handleClose}>
                <ListItem onClick={navigateNew}>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <Typography>Add New Recipe</Typography>
                </ListItem>
              </MenuItem>
            )}
            {user && (
              <MenuItem onClick={handleClose}>
                <ListItem onClick={navigateFavourites}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <Typography>My Favourites</Typography>
                </ListItem>
              </MenuItem>
            )}
            {user && (
              <MenuItem onClick={handleClose}>
                <ListItem onClick={navigateGroceryList}>
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <Typography>My Grocery List</Typography>
                </ListItem>
              </MenuItem>
            )}
            {!user && (
              <MenuItem onClick={handleClose}>
                <ListItem onClick={navigateRegister}>
                  <ListItemIcon>
                    <ArticleIcon />
                  </ListItemIcon>
                  <Typography>Register</Typography>
                </ListItem>
              </MenuItem>
            )}
            {!user && (
              <MenuItem onClick={handleClose}>
                <ListItem onClick={navigateLogin}>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <Typography>Login</Typography>
                </ListItem>
              </MenuItem>
            )}
            {user && (
              <MenuItem onClick={handleClose}>
                <Logout />
              </MenuItem>
            )}
          </Menu>
        </Grid>
      </Box>
    </AppBar>
  );
};

export default Nav;
