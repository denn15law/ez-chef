import {
  Button,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import axios from "axios";
import { useForm, useFieldArray, Controller, setValue } from "react-hook-form";

const useStyles = makeStyles({
    serving_size: {
    width: "30px"
  }
})

const NewRecipeForm = (props) => {

  // const classes = useStyles()
  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      title: "",
      instructions: "",
      serving_size: '',
      image_url: "",
      ingredients: [
        {
          name: "",
          quantity: '',
          unit: ''
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
    append({ name: "", quantity: "", unit:"" });
  };

  const onSubmit = (data) => {
    const URL = "/recipes";

    console.log(data);
    axios
    .post(URL, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" justifyContent="center" mt={2} >
        <Box display="flex" flexDirection="column" width={500}>
          <Controller
            name="title"
            control={control}
            render={({field}) => 
              <TextField 
                label="Title" variant="outlined" {...field}/>
          }/>
            <Typography variant="h6">List of Ingredients</Typography>
            {ingredientsFields.map((item, i) => (
              <Box display="flex">
                <Controller
                  name={`ingredients.${i}.quantity`}
                  control={control}
                  render={({field}) => 
                  <TextField 
                    type="number"
                    label="Quantity" variant="outlined" {...field}/>}
                />    
                <Controller
                  name={`ingredients.${i}.unit`}
                  control={control}
                  render={({field}) => 
                  <TextField 
                    label="Unit" variant="outlined" {...field}/>}
                />  
                <Controller
                  name={`ingredients.${i}.name`}
                  control={control}
                  render={({field}) => 
                  <TextField 
                    label="Ingredient" variant="outlined" {...field}/>}
                />            
                <Button variant="contained" color="error" onClick={() => remove(i)}>Delete</Button>
              </Box>
            ))}
            <Button variant="contained" onClick={renderIngredientForm}>Add Ingredient</Button>
          <Controller
            name="instructions"
            control={control}
            render={({field}) => 
            <TextField
            label="Recipe Instructions:"
            id="outlined-multiline-static"
            multiline
              rows={4}
              {...field}
            />}
          />
          <Controller
            name="serving_size"
            control={control}
            render={({field}) => 
              <TextField 
                type="number" 
                label="Serving Size" variant="outlined" {...field}/>
            }/>
          <Controller
            name="image_url"
            control={control}
            render={({field}) => 
              <TextField 
                label="Image Url" variant="outlined" {...field}/>
          }/>
          <Button
            type="submit"
            variant="contained"
            color="success"
          >Submit</Button>
          <Button
            variant="contained"
            onClick={() => reset()}
          >
            Reset
          </Button>

        </Box>
      </Box>
    </form>
  );
};

export default NewRecipeForm;
