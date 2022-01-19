import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
  // Outlet,
  // Navigate,
  // useLocation,
} from "react-router-dom";
import Index from "./Index";
import Nav from "./Nav";
import MyRecipes from "./MyRecipes";
import Favourites from "./Favourites";
import GroceryList from "./GroceryList";
import Register from "./Register";
import Login from "./Login";
import SearchForm from "./SearchForm";
import RecipeDetails from "./RecipeDetails";
import NewRecipe from "./NewRecipe";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Nav user={user} />
        <div className="main">
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/search" element={<SearchForm />}></Route>
            <Route
              path="/search/id/:recipeID"
              element={<RecipeDetails user={user} />}
            ></Route>

            <Route
              path="/myrecipes"
              element={user ? <MyRecipes user={user} /> : <Index />}
            ></Route>
            <Route
              path="/new"
              element={user ? <NewRecipe user={user} /> : <Index />}
            ></Route>
            <Route
              path="/favourites"
              element={user ? <Favourites user={user} /> : <Index />}
            ></Route>
            <Route
              path="/grocerylist"
              element={user ? <GroceryList user={user} /> : <Index />}
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
