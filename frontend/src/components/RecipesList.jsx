import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

export default function RecipesList(props) {
  const { myGroceryList, user } = props;

  const deleteGroceryList = (id) => {
    const url = `http://localhost:8000/groceries/${user}/${id}`;
    axios
      .delete(url)
      .then(function (response) {
        window.location.reload();
        console.log("response from delete", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="recipe-list-container">
      {myGroceryList.length ? (
        myGroceryList.map((groceryList) => {
          let url = "";
          if (groceryList.grocery_list_recipeID.length <= 10) {
            url += `http://localhost:3000/search/${groceryList.grocery_list_recipeID}`;
          } else {
            url += `http://localhost:3000/myRecipes/${groceryList.grocery_list_recipeID}`;
          }

          return (
            <div
              className="grocery-list"
              key={groceryList.grocery_list_recipeID}
            >
              <div className="grocery-list-recipes">
                <a href={url}>
                  <h2 className="grocery-list-recipe-title">
                    {groceryList.grocery_list_title}
                  </h2>
                </a>
                <div
                  className="delete-favourite"
                  key={groceryList.grocery_list_recipeID}
                >
                  <button
                    className="delete-favourite"
                    onClick={() => {
                      deleteGroceryList(groceryList.grocery_list_recipeID);
                    }}
                  >
                    <b>
                      Delete {groceryList.grocery_list_title} from Grocery List
                    </b>
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h3>You do not have any recipes in your grocery list!</h3>
      )}
    </div>
  );
}
