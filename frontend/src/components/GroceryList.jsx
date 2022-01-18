import { Typography } from "@mui/material";
import {useState, useEffect} from "react";
import axios from 'axios'
import IngredientList from "./IngredientList";
import RecipeList from "./RecipeList";

const GroceryList = (props) => {

  const {user} = props

  const [ingredients, getIngredients] = useState([])
  const [recipes, getRecipes] = useState([])
  
  const getIngredientsFromDatabase = () => {
    axios.get('/groceries')
      .then((res) => {
        const allIngredients = res.data
        //add ingredients
        getIngredients(allIngredients)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  const getRecipesFromDatabase = () => {
    axios.get('/recipes')
      .then((res) => {
        const allRecipes = res.data
        getRecipes(allRecipes)
      }).catch(err => console.log(err.message))
  }
  
  useEffect(() => {
    getIngredientsFromDatabase();
    getRecipesFromDatabase();
  }, [])

  console.log(user)

  return (
    <>
      <Typography variant="h3" mb={3}>My Grocery List </Typography>
      <RecipeList recipes={recipes}/>
      <IngredientList ingredients={ingredients}/>
    </>
  );
};

export default GroceryList;
