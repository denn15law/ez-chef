import React from "react";
import { Box, CssBaseline, Grid, Paper } from "@mui/material";
import Image from "../../docs/background-option1.jpg";
import { styled } from "@mui/system";
import AboutSection from "./AboutSection";
import TeamSection from "./TeamSection";
import TechStackSection from "./TechStackSection";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  },
};

const SideImage = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

const About = () => {
  return (
    <Grid container direction="row">
      <CssBaseline />
      <Grid item md={5}>
        <SideImage>
          <Paper style={styles.paperContainer}></Paper>
        </SideImage>
      </Grid>
      <Grid item xs={12} md={7}>
        <Grid container marginTop={8} spacing={4}>
          <Box
            component="main"
            sx={{
              paddingTop: 5,
              paddingLeft: 4.5,
              flexGrow: 1,
              height: "92.5vh",
              overflow: "auto",
            }}
          >
            <AboutSection />
            <TeamSection />
            <TechStackSection />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
