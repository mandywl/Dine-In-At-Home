import React, { useState, useEffect } from "react";
import API from "../utils/API";
import RecipesList from "../components/RecipesList";
import Grid from "@material-ui/core/Grid";

export default function Home(props) {
  const [results, setResults] = useState([]);
  const [favorite, setFavorite] = useState([]);

  function loadFavorites() {
    API.getFavorites()
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setFavorite(res.data);
      })
      .catch((err) => console.log(err));
  }

  const getRecipes = () => {
    API.getRecipes()
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRecipes();
    loadFavorites();
  }, []);

  return (
    <>
      <Grid container>
        <RecipesList results={results} />
      </Grid>
    </>
  );
}
