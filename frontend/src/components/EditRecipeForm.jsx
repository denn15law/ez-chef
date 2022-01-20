import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Avatar,
  Button,
  ButtonGroup,
  Box,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import {
  useForm,
  useFieldArray,
  Controller,
  setValue,
  formState,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";

const EditRecipeForm = (props) => {
  const navigate = useNavigate();

  const { user, recipeID } = props;

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/recipes/edit/${user}/${recipeID}`)
      .then((res) => {
        setRecipe(res.data[0]);
        console.log("res.data", res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { control, handleSubmit, reset, setValue, formState } = useForm({
    defaultValues: {
      title: "",
      instructions: "",
      serving_size: "",
      image_url: "",
      ingredients: [
        {
          name: "",
          quantity: "",
          unit: "",
        },
      ],
    },
  });

  useEffect(() => {
    reset(recipe);
  }, [recipe]);

  console.log("recipetitle", recipe.title);

  const {
    fields: ingredientsFields,
    append,
    remove,
  } = useFieldArray({
    name: "ingredients",
    control,
  });

  const renderIngredientForm = () => {
    append({ name: "", quantity: "", unit: "" });
  };

  const editRecipe = (data) => {
    console.log("data data data", data);
    axios
      .put(`/recipes/edit/${user}/${recipeID}`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate("/myrecipes");
  };

  return (
    <Grid>
      <CssBaseline />
      <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
        <Box
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "centre",
            justifyContent: "centre",
          }}
        >
          <Typography component="h1" variant="h5">
            Edit Recipe
          </Typography>
          <form onSubmit={handleSubmit(editRecipe)}>
            <Box
              sx={{
                p: 2,
                margin: "auto",
                maxWidth: 500,
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "centre",
                justifyContent: "centre",
              }}
            >
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Title"
                    variant="standard"
                    style={{ marginBottom: 10 }}
                    {...field}
                  />
                )}
              />
              <Controller
                name="image_url"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Image URL"
                    variant="standard"
                    {...field}
                    style={{ marginBottom: 30 }}
                  />
                )}
              />
              <Typography variant="h6" style={{ marginBottom: 8 }}>
                List of Ingredients
              </Typography>
              {ingredientsFields.map((item, i) => (
                <Box display="flex" sx={{ marginBottom: 1 }}>
                  <Controller
                    name={`ingredients.${i}.quantity`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        InputProps={{ inputProps: { min: 0 } }}
                        type="number"
                        label="Qty"
                        variant="standard"
                        style={{ width: 50 }}
                        {...field}
                      />
                    )}
                  />

                  <Controller
                    name={`ingredients.${i}.unit`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label="Unit"
                        variant="standard"
                        style={{ width: 100 }}
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name={`ingredients.${i}.name`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        label="Ingredient"
                        variant="standard"
                        style={{ width: 250 }}
                        {...field}
                      />
                    )}
                  />
                  <Button
                    onClick={renderIngredientForm}
                    style={{ display: "flex", alignItems: "flex-end" }}
                  >
                    Add
                  </Button>
                  <Button
                    color="error"
                    onClick={() => remove(i)}
                    style={{ display: "flex", alignItems: "flex-end" }}
                  >
                    Delete
                  </Button>
                </Box>
              ))}

              <Controller
                name="instructions"
                control={control}
                render={({ field }) => (
                  <TextField
                    style={{ marginTop: 10, marginBottom: 10 }}
                    label="Recipe Instructions:"
                    id="standard-multiline-static"
                    multiline
                    rows={4}
                    {...field}
                  />
                )}
              />
              <Controller
                name="serving_size"
                control={control}
                render={({ field }) => (
                  <TextField
                    type="number"
                    InputProps={{ inputProps: { min: 1 } }}
                    label="Serving Size"
                    variant="standard"
                    {...field}
                    style={{ marginBottom: 10 }}
                  />
                )}
              />
            </Box>
            <ButtonGroup>
              <Button type="submit" color="success">
                Edit
              </Button>
            </ButtonGroup>
          </form>
        </Box>
      </Paper>
    </Grid>
  );
};

export default EditRecipeForm;
