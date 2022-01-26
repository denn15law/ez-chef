import React from "react";
import { Card, CardMedia } from "@mui/material";

const AboutCard = ({ Image }) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 200,
          width: 200,

          ":hover": {
            boxShadow: 20,
          },
        }}
      >
        <CardMedia
          key={1}
          component="img"
          src={Image}
          alt="teamimage"
          // overflow="auto"
          style={{ height: 150, width: 150 }}
        />
      </Card>
    </>
  );
};

export default AboutCard;
