import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import API from "../utils/API";
import RecipesList from "../components/RecipesList";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    margin: "0 auto",
    minHeight: "calc(100vh - 200px)",
  },
}));

export default function Home(props) {
  const classNames = useStyles();
  const [results, setResults] = useState([]);
  useEffect(() => {
    API.getRecipes()
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Grid container justify="center" className={classNames.root}>
        <RecipesList results={results} />
      </Grid>
    </>
  );
}
