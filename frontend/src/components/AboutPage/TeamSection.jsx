import React from "react";
import { Typography, Grid } from "@mui/material";
import AboutCard from "./AboutCard";

export default function TeamSection() {
  return (
    <>
      <Typography textAlign="center" variant="h4" paddingTop={4}>
        Our Team
      </Typography>
      <Grid
        container
        p={2}
        spacing={{ xs: 2, md: 7 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item key={1}>
          <AboutCard
            aboutName="Jeewon Lee"
            aboutImage="https://sixhungryfeet.com/wp-content/uploads/2020/06/Vegetarian-Pad-Thai-2.jpg"
          />
        </Grid>
        <Grid item key={2}>
          <AboutCard
            aboutName="Dennis Law"
            aboutImage="https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg"
          />
        </Grid>
        <Grid item key={3}>
          <AboutCard
            aboutName="Kyle Liang"
            aboutImage="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F19%252F2018%252F04%252F23%252F1804-what-is-sushi-grade-fish-2000.jpg&q=85"
          />
        </Grid>
      </Grid>
    </>
  );
}
