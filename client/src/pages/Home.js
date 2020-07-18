import React, { useState, useEffect } from "react";
import API from "../utils/API";
import RecipesList from "../components/RecipesList";
import Grid from "@material-ui/core/Grid";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";

export default function Home(props) {
  const [results, setResults] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [added, setAdded] = useState(false);

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

  // const handleAddToFavorites = (
  //   title,
  //   description,
  //   ingrediates,
  //   thumbnail,
  //   method,
  //   recipeID
  // ) => {
  //   console.log("addtofavorites");
  //   API.addFavorite({
  //     title: title,
  //     description: description,
  //     ingrediates: ingrediates,
  //     thumbnail: thumbnail,
  //     method: method,
  //     recipeID: recipeID,
  //   }).then((data) => setAdded(true));
  // };

  // const renderme = () => {
  //   console.log("render me");
  // };

  // const handleDeleteFavorites = () => {
  //   setAdded(false);
  //   //getFavorites();
  // };

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
