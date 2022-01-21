import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
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
import MyRecipeDetails from "./MyRecipeDetails";
import SearchResults from "./SearchResults";
import EditRecipe from "./EditRecipe";
import About from "./About";

const theme = createTheme({
  typography: {
    fontFamily: ["Special Elite", "sans-serif"].join(","),
  },
});

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
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Nav user={user} />
          <div className="main">
            <Routes>
              <Route path="/" element={<Index />}></Route>
              <Route path="/about" element={<About user={user} />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/search" element={<SearchForm />}></Route>
              <Route
                path="/search/results/:search"
                element={<SearchResults />}></Route>
              <Route
                path="/search/:recipeID"
                element={<RecipeDetails user={user} />}></Route>

              <Route
                path="/myrecipes"
                element={user ? <MyRecipes user={user} /> : <Index />}></Route>
              <Route
                path="/myrecipes/:recipeID"
                element={
                  user ? <MyRecipeDetails user={user} /> : <Index />
                }></Route>
              <Route
                path="/new"
                element={user ? <NewRecipe user={user} /> : <Index />}></Route>
              <Route
                path="/edit/:user/:recipeID"
                element={user ? <EditRecipe user={user} /> : <Index />}></Route>
              <Route
                path="/favourites"
                element={user ? <Favourites user={user} /> : <Index />}></Route>
              <Route
                path="/grocerylist"
                element={
                  user ? <GroceryList user={user} /> : <Index />
                }></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
