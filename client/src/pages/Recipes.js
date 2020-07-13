import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import API from "../utils/API";
import Grid from "@material-ui/core/Grid";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import beefStroganoff from "../assets/img/beefStroganoff.jpg";
import honeySoyChicken from "../assets/img/honeySoyChicken.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  typography: {
    padding: theme.spacing(2),
    textDecoration: "none",
    color: "#000000",
  },
}));

export default function Recipe() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    API.getRecipes()
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  };

  const createShoppingList = (ingrediates) => {
    console.log("Ingrediates are", ingrediates);
    Object.values(ingrediates).forEach((element, index) => {
      console.log(element);
      API.createShoppngList({
        ingrediates: element,
      }).catch((err) => console.log(err));
    });
    // API.createShoppngList({
    //   ingrediates: Object.values(ingrediates),
    // }).catch((err) => console.log(err));
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        {recipes.map((recipe) => {
          return (
            <Grid item xs={12} sm={6} lg={3}>
              <Card className={classes.root}>
                <CardHeader
                  action={
                    <IconButton
                      aria-label="settings"
                      onClick={handleClick("right-start")}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={recipe.title}
                />
                <Popper
                  open={open}
                  anchorEl={anchorEl}
                  placement={placement}
                  transition
                >
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper>
                        <Typography
                          component={Link}
                          to={"/recipes/" + recipe._id}
                          className={classes.typography}
                        >
                          Go to recipe!
                        </Typography>
                      </Paper>
                    </Fade>
                  )}
                </Popper>

                <CardMedia
                  className={classes.media}
                  component={Link}
                  image={`/static/media/${recipe.thumbnail}`}
                  // image={honeySoyChicken}
                  to={"/recipes/" + recipe._id}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {recipe.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <AwesomeButton
                    type="link"
                    href="/shopping"
                    target="_blank"
                    onPress={() => createShoppingList(recipe.ingrediates[0])}
                  >
                    Generate Shopping List
                  </AwesomeButton>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
