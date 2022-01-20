import { useState, useEffect } from "react";
import axios from "axios";
import RecipesList from "./RecipesList";
import IngredientsList from "./IngredientsList";

const GroceryList = (props) => {
  const [myGroceryList, setMyGroceryList] = useState([]);

  const { user } = props;

  const getData = () => {
    axios
      .get(`http://localhost:8000/groceries/${user}`)
      .then(function (response) {
        setMyGroceryList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // const {user} = props

  // const [ingredients, getIngredients] = useState([])
  // const [recipes, getRecipes] = useState([])

  // const getIngredientsFromDatabase = () => {
  //   axios.get(`/groceries/ingredients/${user}`)
  //     .then((res) => {
  //       const allIngredients = res.data
  //       //add ingredients
  //       getIngredients(allIngredients)
  //     })
  //     .catch((err) => {
  //       console.log(err.message)
  //     })
  // }

  // const getRecipesFromDatabase = () => {
  //   axios.get(`/groceries/recipes/${user}`)
  //     .then((res) => {
  //       const allRecipes = res.data
  //       getRecipes(allRecipes)
  //     }).catch(err => console.log(err.message))
  // }

  // useEffect(() => {
  //   getIngredientsFromDatabase();
  //   getRecipesFromDatabase();
  // }, [])

  return (
    <div className="grocery-list-page">
      <h1>My Grocery List</h1>
      <RecipesList myGroceryList={myGroceryList} user={user} />
      <IngredientsList myGroceryList={myGroceryList} />
    </div>
  );
};

export default GroceryList;
