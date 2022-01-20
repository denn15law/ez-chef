import { useState, useEffect } from "react";
import axios from "axios";
import RecipesList from "./RecipesList";
import IngredientsList from "./IngredientsList";

const GroceryList = ({ user }) => {
  const [myGroceryList, setMyGroceryList] = useState([]);

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

  return (
    <div className="grocery-list-page">
      <h1>My Grocery List</h1>
      <RecipesList myGroceryList={myGroceryList} user={user} />
      <IngredientsList myGroceryList={myGroceryList} />
    </div>
  );
};

export default GroceryList;
