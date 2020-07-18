import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteList from "../components/FavoriteList";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
  },
}));

export default function Favorites() {
  const classes = useStyles();
  const [results, setResults] = useState([]);

  function loadFavorites() {
    API.getFavorites()
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setResults(res.data);
      })
      .catch((err) => console.log(err));
  }

  const handleRemoveFromFavorites = (id) => {
    API.deleteFavorite(id).then((data) => {
      loadFavorites();
    });
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <>
      <Typography className={classes.heading} color="textPrimary" variant="h2">
        Favorites
      </Typography>
      {/* <Grid container> */}
      <FavoriteList
        results={results}
        handleRemoveFromFavorites={handleRemoveFromFavorites}
      />
      {/* </Grid> */}
    </>
  );
}
