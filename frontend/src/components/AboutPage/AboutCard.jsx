import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const AboutCard = ({ aboutName, aboutImage }) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 220,
          ":hover": {
            boxShadow: 20,
          },
        }}
      >
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 30,
          }}
        >
          <Typography variant="h6">{aboutName}</Typography>
        </CardContent>
        <CardMedia
          key={1}
          component="img"
          src={aboutImage}
          alt="teamimage"
          style={{ height: 170, width: 200 }}
        />
      </Card>
    </>
  );
};

export default AboutCard;
