import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <h3>Nav Bar</h3>
      <ul className="nav-links">
        <Link to="/">
          <li>Home Page</li>
        </Link>
        <Link to="/myrecipes">
          <li>My Recipes</li>
        </Link>
        <Link to="/new">
          <li>Add New Recipe</li>
        </Link>
        <Link to="/favourites">
          <li>My Favourites</li>
        </Link>
        <Link to="/grocerylist">
          <li>Grocery List</li>
        </Link>
        <Link to="/register">
          <li>Register</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
