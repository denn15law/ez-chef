import { Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";

export default function IngredientList(props) {
  const { myGroceryList } = props;

  const [myIngredientsArray, setIngredientsArray] = useState([]);

  let ingredientsArray = [];

  const getIngredients = () => {
    for (let recipe of myGroceryList) {
      for (let ingredient of recipe.ingredients) {
        ingredientsArray.push(ingredient);
      }
    }
    console.log(ingredientsArray);
    setIngredientsArray(ingredientsArray);
  };

  useEffect(() => {
    getIngredients();
  }, [myGroceryList]);

  return (
    <div classname="ingredients-list-container">
      {myGroceryList.length ? (
        <div>
          <Box display="flex" justifyContent="center" flexDirection="column">
            <Typography variant="h4">Ingredient List</Typography>
            {myIngredientsArray.map((groceryItem, index) => {
              return (
                <Typography
                  key={index}
                >{`${groceryItem.quantity} ${groceryItem.unit} of ${groceryItem.name}`}</Typography>
              );
            })}
          </Box>
        </div>
      ) : null}
    </div>
  );
}
