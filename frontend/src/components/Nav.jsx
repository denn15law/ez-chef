import React from "react";
import Logout from "./Logout";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { Link } from "react-router-dom";
import Image from "../docs/logo.png";

const Nav = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <Grid display sx={{ display: "flex" }}>
          <Link to="/search">
            <SearchIcon sx={{ width: 30, height: 30 }} />
          </Link>
        </Grid>
        <Grid sx={{ display: "flex", flexDirection: "row" }}>
          <img src={Image} alt="logo" height={35} />
        </Grid>
        <Grid>
          <Tooltip title="Your Pages">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
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
              <ListItem>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <Link to="/">
                  <ListItemText primary="Home" />
                </Link>
              </ListItem>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {user && (
                <ListItem>
                  <ListItemIcon>
                    <MenuBookIcon />
                  </ListItemIcon>
                  <Link to="/myrecipes">
                    <ListItemText primary="My Recipes" />
                  </Link>
                </ListItem>
              )}
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {user && (
                <ListItem>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <Link to="/new">
                    <ListItemText primary="Add New Recipe" />
                  </Link>
                </ListItem>
              )}
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {user && (
                <ListItem>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <Link to="/favourites">
                    <ListItemText primary="Favourite Recipes" />
                  </Link>
                </ListItem>
              )}
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {user && (
                <ListItem>
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <Link to="/grocerylist">
                    <ListItemText primary="My Grocery List" />
                  </Link>
                </ListItem>
              )}
            </MenuItem>
            <MenuItem onClick={handleClose}>{user && <Logout />}</MenuItem>
          </Menu>
        </Grid>
      </Box>
    </AppBar>
  );
};

export default Nav;
