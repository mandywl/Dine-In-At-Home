import React, { useState, useEffect } from "react";
import API from "../utils/API";
import RecipesList from "../components/RecipesList";
import Grid from "@material-ui/core/Grid";

export default function Recipes(props) {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    API.getRecipes()
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      <Grid container>
        {recipes.map((recipe) => {
          return (
            <RecipesList recipes={recipes} recipe={recipe} id={recipe._id} />
          );
        })}
      </Grid>
    </>
  );
}
