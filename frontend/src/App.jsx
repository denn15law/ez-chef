import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Index from "./components/Index";
import Nav from "./components/NavBar/Nav";
import MyRecipes from "./components/MyRecipesPage/MyRecipes";
import Favourites from "./components/FavourtiesPage/Favourites";
import GroceryList from "./components/GroceryListPage/GroceryList";
import Register from "./components/AccountPages/Register";
import Login from "./components/AccountPages/Login";
import SearchForm from "./components/SearchPage/SearchForm";
import RecipeDetails from "./components/RecipeDetailPages/RecipeDetails";
import NewRecipe from "./components/NewRecipePage/NewRecipe";
import MyRecipeDetails from "./components/RecipeDetailPages/MyRecipeDetails";
import SearchResults from "./components/SearchPage/SearchResults";
import EditRecipe from "./components/EditRecipePage/EditRecipe";
import About from "./components/AboutPage/About";

const theme = createTheme({
  typography: {
    fontFamily: ["JetBrains Mono", "sans-serif"].join(","),
  },
});

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      console.log(foundUser);
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
                element={<SearchResults />}
              ></Route>
              <Route
                path="/search/:recipeID"
                element={<RecipeDetails user={user} />}
              ></Route>

              <Route
                path="/myrecipes"
                element={user ? <MyRecipes user={user} /> : <Index />}
              ></Route>
              <Route
                path="/myrecipes/:recipeID"
                element={user ? <MyRecipeDetails user={user} /> : <Index />}
              ></Route>
              <Route
                path="/new"
                element={user ? <NewRecipe user={user} /> : <Index />}
              ></Route>
              <Route
                path="/edit/:user/:recipeID"
                element={user ? <EditRecipe user={user} /> : <Index />}
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
    </ThemeProvider>
  );
};

export default App;
