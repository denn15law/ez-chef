import { Button, Input, Box } from "@mui/material";
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

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const URL = "http://localhost:8000/recipes";
  //   const body = recipe;
  //   axios
  //     .post(URL, body)
  //     .then((resp) => {
  //       console.log(resp);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // render a list of ingredients
  // when a user changes the name of an ignredient,  a callback function is valled that passes in the new name and the index of the ingredient we're modifying
  // const handleIngredientNameChange = (newName, ingredientIndex) => {
  //   const ingredients = [...recipe.ingredients];
  //   const ingredientToEdit = ingredients[ingredientIndex];
  //   ingredients[ingredientIndex] = {
  //     ...ingredientToEdit,
  //     name: newName,
  //   };
  //   const newRecipe = {
  //     ...recipe,
  //     ingredients,
  //   };
  //   setRecipe(newRecipe);
  // };

  // https://www.npmjs.com/package/react-hook-form

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
          <Input
            {...register("title")}
            name="title"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <Input
            {...register("instruction")}
            name="instruction"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
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
          <h1>Ingredients</h1>

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
