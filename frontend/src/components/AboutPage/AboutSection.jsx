import React from "react";
import { Typography, Grid, Card, CardContent } from "@mui/material";

export default function AboutSection() {
  return (
    <>
      <Typography textAlign="center" variant="h4">
        Our Story
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
            <CardContent sx={{ flexGrow: 1, marginBottom: -2.5 }}>
              <p>
                Two years into the COVID-19 pandemic, developers Jeewon Lee,
                Dennis Law, and Kyle Liang had had enough of being cooped up at
                home and constantly eating instant ramen and leftover pizza.
                Like so many others, they wanted to improve their cooking skills
                but didn't know where to start. Meet EZ Chef, cooking made easy.
                EZ Chef is your new chef mate who can help you develop your
                cooking skills by providing recipe ideas and cooking
                instructions, set you up with a grocery list, and even convert
                serving sizes based on how much food you want to make. Once you
                are confident enough, you can even create your own recipes in EZ
                Chef so that you can come back to that same delicious meal
                whenever you want to. EZ Chef is perfect for anybody wishing to
                improve their cooking skills, avid meal prep fanatics, new
                aspiring chefs, and those who wish to cook for themselves and
                need a convenient serving size converter. Start cooking today!
              </p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
