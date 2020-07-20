import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteList from "../components/FavoriteList";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { UserContext } from "../utils/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    margin: "0 auto",
  },
  heading: {
    textAlign: "center",
  },
}));

export default function Favorites() {
  const classes = useStyles();
  const [results, setResults] = useState([]);
  const [userState, setUserState] = useContext(UserContext);

  function loadFavorites() {
    console.log("user id is ", userState);
    API.getFavoriteByUserID(userState.id)
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
      <Grid container justify="center" className={classes.root}>
        <FavoriteList
          results={results}
          handleRemoveFromFavorites={handleRemoveFromFavorites}
        />
      </Grid>
    </>
  );
}
