import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
  },
}));

export default function Favourites() {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.heading} color="textPrimary" variant="h2">
        Favorites
      </Typography>
    </>
  );
}
