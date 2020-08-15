import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Image from "material-ui-image";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import beefStroganoff from "../assets/img/beefStroganoff.jpg";
import honeySoyChicken from "../assets/img/honeySoyChicken.jpg";
import bbqPorkRamen from "../assets/img/bbqPorkRamen.jpg";
import beefNCheesePie from "../assets/img/beefNCheesePie.jpg";
import chickenTaco from "../assets/img/chickenTaco.jpg";
import crispyJapaneseChicken from "../assets/img/crispyJapaneseChicken.jpg";
import teriyakiBeef from "../assets/img/teriyakiBeef.jpg";
import fishCurry from "../assets/img/fishCurry.jpg";
import beefRumpSteaks from "../assets/img/beefRumpSteaks.jpg";
import macNCheese from "../assets/img/macNCheese.jpeg";
import chocBrownies from "../assets/img/chocBrownies.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // margin: theme.spacing(5, 2),
    minHeight: "calc(100vh - 200px)",
  },
  paper: {
    // width: 600,
    padding: 20,
    // marginLeft: 20,
    // marginRight: 20,
    margin: theme.spacing(5, 5),
  },
  list: {
    color: "#000000",
    textAlign: "left",
  },
}));

export default function RecipeDetails() {
  const classes = useStyles();
  const [recipe, setRecipe] = useState({});

  // When this component mounts, grab the recipe with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const { id } = useParams();

  useEffect(() => {
    API.getRecipe(id)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper} elevation={3}>
            <Image src={`/static/media/${recipe.thumbnail}`} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Paper className={classes.paper} elevation={3}>
            <Typography color="textPrimary" variant="h6">
              {recipe.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {recipe.description}
            </Typography>
            <br />
            {!recipe.ingrediates ? (
              <span>Loading...</span>
            ) : (
              <>
                <Typography paragraph>Ingrediates:</Typography>
                {Object.keys(recipe.ingrediates[0]).map((key, i) => {
                  return (
                    <ListItem button className={classes.list}>
                      {<ListItemText primary={recipe.ingrediates[0][key]} />}
                    </ListItem>
                  );
                })}
                ,<Typography paragraph>Method:</Typography>
                {Object.keys(recipe.method[0]).map((key, i) => {
                  return (
                    <ListItem button className={classes.list}>
                      {/* <Typography paragraph>{recipe.method[0][key]}</Typography> */}
                      <ListItemText primary={recipe.method[0][key]} />
                    </ListItem>
                  );
                })}
              </>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
