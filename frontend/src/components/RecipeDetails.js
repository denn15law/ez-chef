import * as React from "react";
import axios from "axios";
import { useState } from "react";

const RecipeDetails = () => {
  const [details, setDetails] = useState({});
  let url = window.location.pathname;
  const id = url.split("/search/id/")[1];

  React.useEffect(() => {
    axios
      .get(`http://localhost:8000/search/id/${id}`)
      .then(function (response) {
        setDetails(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <h1>{details.title}</h1>
      <img src={details.image}></img>
      <p>
        {details.instructions
          ? details.instructions
              .replaceAll("<li>", "")
              .replaceAll("</li>", "")
              .replaceAll("<ol>", "")
              .replaceAll("</ol>", "")
          : null}
      </p>
    </div>
  );
};

export default RecipeDetails;
