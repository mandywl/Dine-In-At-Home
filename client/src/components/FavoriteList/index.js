import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import SavedRecipe from "../SavedRecipe/";

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
  },
}));

export default function FavoriteList(props) {
  const classes = useStyles();
  return (
    <>
      {props.results.length ? (
        <Grid container>
          {props.results.map((favorite) => (
            <SavedRecipe
              favorite={favorite}
              id={favorite._id}
              key={favorite._id}
              handleRemoveFromFavorites={props.handleRemoveFromFavorites}
            />
          ))}
        </Grid>
      ) : (
        <Typography
          className={classes.heading}
          color="textPrimary"
          variant="h6"
        >
          Your favorites list is empty!
        </Typography>
      )}
    </>
  );
}
