import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setUser({ ...user, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "/login";
    await axios
      .post(url, user)
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 18,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in to Your Account
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={user.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={user.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Link href="/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
