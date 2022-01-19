import * as React from "react";
import { useState } from "react";
import axios from "axios";
import "./Favourites.css";

const MyRecipes = (props) => {
  const [myRecipes, setMyRecipes] = useState([]);
  const { user } = props;

  const getData = () => {
    axios
      .get(`http://localhost:8000/recipes/${user}`)
      .then(function (response) {
        setMyRecipes(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  const deleteRecipe = (id) => {
    const URL = `http://localhost:8000/recipes/${user}/${id}`;
    axios
      .delete(URL)
      .then(function (response) {
        getData();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>My Recipes</h1>
      {myRecipes.length ? (
        myRecipes.map((recip) => {
          const url = `http://localhost:3000/myRecipes/${recip._id}`;
          return (
            <div className="favourite-recipe" key={recip._id}>
              <div className="favourite-recipe-image">
                <img
                  className="favourite-recipe-image"
                  src={recip.image_url}
                ></img>
              </div>
              <div className="favourite-recipe-content">
                <a href={url}>
                  <h2 className="recipe-favourite-title">{recip.title}</h2>
                </a>
                <div className="delete-favourite" key={recip._id}>
                  <button
                    className="delete-favourite"
                    onClick={() => {
                      deleteRecipe(recip._id);
                    }}
                  >
                    <b>Delete {recip.title} from My Recipes</b>
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h3>You do not have any recipes!</h3>
      )}
    </div>
  );
};

export default MyRecipes;
