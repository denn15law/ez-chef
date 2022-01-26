import React from "react";
import { Typography, Grid } from "@mui/material";
import TechStackCard from "./TechStackCard";

export default function TeamSection() {
  return (
    <>
      <Typography textAlign="center" variant="h4" paddingTop={4}>
        Our Tech Stack
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
          <TechStackCard Image="https://hearmecheer.com/wp-content/uploads/2021/03/1000px-React-icon.svg.png" />
        </Grid>
        <Grid item key={2}>
          <TechStackCard Image="https://mui.com/static/logo.png" />
        </Grid>
        <Grid item key={3}>
          <TechStackCard Image="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" />
        </Grid>
        <Grid item key={4}>
          <TechStackCard Image="https://www.bairesdev.com/wp-content/uploads/2021/07/Expressjs.svg" />
        </Grid>
        <Grid item key={5}>
          <TechStackCard Image="https://images-na.ssl-images-amazon.com/images/I/510uF1kS8LL.png" />
        </Grid>
        <Grid item key={6}>
          <TechStackCard Image="https://www.bizahoy.com/resource/wp-content/uploads/sites/2/2019/04/Twilio-Logo-1.png" />
        </Grid>
      </Grid>
    </>
  );
}
