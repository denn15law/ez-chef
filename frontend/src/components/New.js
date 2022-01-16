import {
  Button,
  Input,
  Box,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useForm, useFieldArray } from "react-hook-form";

const New = (props) => {
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      title: "",
      instructions: "",
      serving_size: 1,
      image_url: "",
      ingredients: [
        {
          name: "Ingredient 1",
          measurement: "20 Bands",
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
    append({ name: "", measurement: "" });
  };

  const onSubmit = (data) => {
    const URL = "/recipes";

    console.log(data);
    axios
      .post(URL, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" justifyContent="center">
        <Box display="flex" flexDirection="column" width={500}>
          <InputLabel htmlFor="title">Title of Recipe:</InputLabel>
          <Input
            {...register("title")}
            id="title"
            name="title"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <InputLabel htmlFor="instructions">Instructions:</InputLabel>
          <TextField
            {...register("instructions")}
            control={control}
            id="outlined-multiline-static"
            multiline
            rows={4}
            defaultValue="Enter Recipe Instructions"
            render={({ field }) => <TextField {...field} />}
          />
          {/* <Input
            name="instructions"
            control={control}
            render={({ field }) => <Input {...field} />}
          /> */}
          <Input
            {...register("serving_size")}
            name="serving_size"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <Input
            {...register("image_url")}
            name="image_url"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <Typography variant="h6">List of Ingredients</Typography>

          {ingredientsFields.map((item, i) => (
            <Box display="flex">
              <Input
                name={`ingredients.${i}.name`}
                {...register(`ingredients.${i}.name`)}
                control={control}
                render={({ field }) => {
                  <Input {...field} />;
                }}
              />
              <button onClick={() => remove(i)}>delete</button>
            </Box>
          ))}
          <Button onClick={renderIngredientForm}>Add Ingredient</Button>
          <input type="submit" />
        </Box>
      </Box>
    </form>
  );
};

export default New;
