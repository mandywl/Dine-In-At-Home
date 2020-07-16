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
import API from "../../utils/API";
import Grid from "@material-ui/core/Grid";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import beefStroganoff from "../../assets/img/beefStroganoff.jpg";
import honeySoyChicken from "../../assets/img/honeySoyChicken.jpg";
import { Link } from "react-router-dom";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(5, 5),
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

export default function RecipesList(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const [added, setAdded] = useState(false);

  function checkAdded() {
    API.getFavorite(props.recipe._id)
      .then((data) => {
        if (data.data) {
          setAdded(true);
        } else {
          setAdded(false);
        }
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    checkAdded();
  }, []);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    if (added) {
      API.deleteFavorite(props.favoriteID).then((data) => setAdded(false));
    } else {
      API.addFavorite({
        title: props.recipe.title,
        description: props.recipe.description,
        ingrediates: props.recipe.ingrediates,
        thumbnail: props.recipe.thumbnail,
        method: props.recipe.method,
        recipeID: props.recipe._id,
      }).then((data) => setAdded(true));
    }
  };

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const createShoppingList = (ingrediates) => {
    Object.values(ingrediates).forEach((element, index) => {
      let item = element.match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g);
      if (item) {
        //console.log(item.join(" "));
        API.createShoppngList({
          ingrediates: item.join(" "),
        }).catch((err) => console.log(err));
      }
    });
  };

  return (
    <>
      <Grid item xs={12} sm={6} lg={3} key={props.recipe._id}>
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
            title={props.recipe.title}
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
                    to={"/recipes/" + props.id}
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
            image={`/static/media/${props.recipe.thumbnail}`}
            // image={honeySoyChicken}
            to={"/recipes/" + props.id}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.recipe.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {added ? (
              <IconButton
                aria-label="add to favorites"
                onClick={handleAddToFavorites}
              >
                <FavoriteIcon style={{ color: red[500] }} />
              </IconButton>
            ) : (
              <IconButton
                aria-label="add to favorites"
                onClick={handleAddToFavorites}
              >
                <FavoriteIcon />
              </IconButton>
            )}
            <AwesomeButton
              type="link"
              href="/shopping"
              target="_blank"
              onPress={() => createShoppingList(props.recipe.ingrediates[0])}
            >
              Generate Shopping List
            </AwesomeButton>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
