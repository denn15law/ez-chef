import { useEffect, useState } from "react";
import axios from "axios";

const defaultState = {
  ingredients: [],
  recepies: [],
};

const useApplicationData = () => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3000/api/recipe"),
      axios.get("http://localhost:3000/api/ingredients"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        ingredients: all[1].data,
      }));
    });
  }, []);

  const submitIngredient = (ingredient) => {
    axios
      .post("http://localhost:3000/api/ingredients", ingredient)
      .then((res) => {
        setState((prev) => ({
          ...prev,
          ingredients: [...prev.ingredients, ingredient],
        }));
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };
  return { submitIngredient, state, deleteIngredient, setState };
};

export default useApplicationData;
