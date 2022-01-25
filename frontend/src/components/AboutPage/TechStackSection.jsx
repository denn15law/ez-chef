import React from "react";
import { Typography, Grid, Card, CardContent } from "@mui/material";

export default function AboutStack() {
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
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: 715,
              textAlign: "center",
              ":hover": {
                boxShadow: 20,
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1, fontSize: 18, marginBottom: -1.5 }}>
              <p>
                <strong>Front End:</strong> React, Material UI
              </p>
              <p>
                <strong>Back End:</strong> Mongo DB, Express, Node
              </p>
              <p>
                <strong>APIs:</strong> Spoonacular API, Twilio API
              </p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
