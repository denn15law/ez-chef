import React from "react";
import axios from "axios";
import {
  Button,
  ButtonGroup,
  Box,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const NewRecipeForm = ({ user }) => {
  const navigate = useNavigate();

  const { control, handleSubmit, reset } = useForm({
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

  const onSubmit = (data) => {
    const URL = `/recipes/${user}`;
    console.log(data);
    axios
      .post(URL, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    reset();
    navigate("/myrecipes");
  };

  return (
    <Grid>
      <CssBaseline />
      <Box
        sx={{
          p: 2,
          marginRight: -3,
          flexGrow: 1,
        }}
      >
        <Typography textAlign="center" variant="h4">
          Add a New Recipe
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 525,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
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
            <Typography variant="h5" style={{ marginBottom: 8 }}>
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
                      InputProps={{ inputProps: { min: 0, step: 0.05 } }}
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
          <ButtonGroup
            sx={{
              display: "flex",
              alignItem: "center",
              justifyContent: "center",
            }}
          >
            <Button type="submit" color="success">
              Submit
            </Button>
            <Button onClick={() => reset()}>Reset</Button>
          </ButtonGroup>
        </form>
      </Box>
    </Grid>
  );
};

export default NewRecipeForm;
