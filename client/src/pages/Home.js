import React, { useState, useEffect } from "react";
import API from "../utils/API";
import RecipesList from "../components/RecipesList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    margin: "0 auto",
  },
}));

export default function Home(props) {
  const classes = useStyles();
  const [results, setResults] = useState([]);

  const getRecipes = () => {
    API.getRecipes()
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      <Grid container justify="center" className={classes.root}>
        <RecipesList results={results} />
      </Grid>
    </>
  );
}
