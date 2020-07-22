import React, { useState, useContext, useEffect } from "react";
import API from "../utils/API";
import { UserContext } from "../utils/UserContext";
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
  const [, setUserState] = useContext(UserContext);

  const getRecipes = () => {
    API.getRecipes()
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    API.isLoggedIn()
      .then((res) => {
        console.log("res is", res.data);
        setUserState({
          authenticated: true,
          name: res.data.name,
          email: res.data.email,
          id: res.data._id,
        });
      })
      .catch((err) => console.log(err));
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
