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

export default function Signup() {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.heading} color="textPrimary" variant="h2">
        Sign Up
      </Typography>
    </>
  );
}
