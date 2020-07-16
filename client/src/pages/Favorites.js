import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import API from "../utils/API";
import RecipesList from "../components/RecipesList";

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
  },
}));

export default function Favourites(props) {
  const classes = useStyles();
  const [favorites, setFavorites] = useState([]);

  const getFavorites = () => {
    API.getFavorites()
      .then((res) => setFavorites(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
      <Typography className={classes.heading} color="textPrimary" variant="h2">
        Favorites
      </Typography>
      <Grid container>
        {favorites.map((favorite) => {
          return (
            <RecipesList
              recipes={favorites}
              recipe={favorite}
              favoriteID={favorite._id}
              id={favorite.recipeID}
            />
          );
        })}
      </Grid>
    </>
  );
}
