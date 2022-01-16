import React from "react";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Index from "./Index";
import Nav from "./Nav";
import MyRecipes from "./MyRecipes";
import New from "./New";
import Favourites from "./Favourites";
import GroceryList from "./GroceryList";
import Register from "./Register";
import Login from "./Login";
import SearchForm from "./SearchForm";
import RecipeDetails from "./RecipeDetails";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div className="main">
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/myrecipes" element={<MyRecipes />}></Route>
            <Route path="/new" element={<New />}></Route>
            <Route path="/favourites" element={<Favourites />}></Route>
            <Route path="/grocerylist" element={<GroceryList />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/search" element={<SearchForm />}></Route>
            <Route
              exact
              path="/search/id/:recipeID"
              element={<RecipeDetails />}
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
