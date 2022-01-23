import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import Image from "../../docs/pasta.jpg";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    height: "100%",
  },
};

const Register = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "/register";
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid container direction="row" spacing={1}>
      <CssBaseline />
      <Grid md={7}>
        <Paper style={styles.paperContainer}></Paper>
      </Grid>
      <Grid xs={12} md={5}>
        <Grid container spacing={4} marginTop={8}>
          <Box
            component="main"
            sx={{
              p: 5,
              flexGrow: 1,
              height: "92.5vh",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                p: 5,
                marginTop: 10,
                marginRight: -4,
                flexGrow: 1,
              }}
            >
              <Typography textAlign="center" variant="h5" fontWeight="bold">
                Sign up for an Account
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                  p: 2,
                  margin: "auto",
                  maxWidth: 500,
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="first_name"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      value={data.first_name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="last_name"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      autoFocus
                      value={data.last_name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="email"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      type="email"
                      autoComplete="email"
                      value={data.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="password"
                      required
                      fullWidth
                      id="password"
                      label="Password"
                      type="password"
                      autoComplete="new-password"
                      value={data.password}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid xs={7.5}>
        <Paper style={styles.paperContainer}></Paper>
      </Grid>
    </Grid>
  );
};

export default Register;
