import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import navbarList from "./navbarList";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Nav = (props) => {
  const { user } = props;
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ background: "#cb997e" }}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={toggleOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon color="primary" />
          </IconButton>
          <Typography
            color="#000000"
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            EZ Chef
          </Typography>
          <Divider>
            {user && <LogoutButton />}
            {!user && <LoginButton />}
          </Divider>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          backgroundColor: "#b7b7a4",
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{
            backgroundColor: "#b7b7a4",
          }}
        >
          <IconButton onClick={toggleOpen}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            backgroundColor: "#b7b7a4",
            height: "100%",
          }}
        >
          <ListItem
            sx={{
              "&:hover": {
                backgroundColor: "#6b705c",
              },
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link
              to="/"
              onClick={toggleOpen}
              style={{ textDecoration: "none" }}
            >
              <ListItemText
                primary="Home"
                sx={{
                  color: "white",
                }}
              />
            </Link>
          </ListItem>
          {user &&
            navbarList.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#6b705c",
                    },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <Link
                    to={item.path}
                    onClick={toggleOpen}
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemText
                      primary={item.desc}
                      sx={{
                        color: "white",
                      }}
                    />
                  </Link>
                </ListItem>
              );
            })}
          <ListItem
            sx={{
              "&:hover": {
                backgroundColor: "#6b705c",
              },
            }}
          >
            <ListItemIcon>
              <BrunchDiningIcon />
            </ListItemIcon>
            <Link
              to="/about"
              onClick={toggleOpen}
              style={{ textDecoration: "none" }}
            >
              <ListItemText
                primary="About Us"
                sx={{
                  color: "white",
                }}
              />
            </Link>
          </ListItem>
          {!user && (
            <>
              <ListItem
                sx={{
                  "&:hover": {
                    backgroundColor: "#6b705c",
                  },
                }}
              >
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <Link
                  to="/register"
                  onClick={toggleOpen}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemText
                    primary="Sign Up"
                    sx={{
                      color: "white",
                    }}
                  />
                </Link>
              </ListItem>
              <ListItem
                sx={{
                  "&:hover": {
                    backgroundColor: "#6b705c",
                  },
                }}
              >
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <Link
                  to="/login"
                  onClick={toggleOpen}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemText
                    primary="Login"
                    sx={{
                      color: "white",
                    }}
                  />
                </Link>
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </Box>
  );
};

export default Nav;
