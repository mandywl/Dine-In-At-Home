import React, { useState, useEffect, useContext } from "react";
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
import { Link } from "react-router-dom";
import { red } from "@material-ui/core/colors";
import { UserContext } from "../../utils/UserContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
  },
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

export default function Favourites({
  favorite,
  id,
  handleRemoveFromFavorites,
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const [added, setAdded] = useState(false);
  const [userState, setUserState] = useContext(UserContext);
  let history = useHistory();

  function checkAdded() {
    API.getFavorite(id)
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
          userID: userState.id,
        })
          .then((res) => {
            history.push("/shopping");
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <>
      <Grid item xs={12} sm={6} lg={4} key={favorite._id}>
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
            title={favorite.title}
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
                    to={"/recipes/" + favorite.recipeID}
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
            image={`/static/media/${favorite.thumbnail}`}
            // image={honeySoyChicken}
            to={"/recipes/" + favorite.recipeID}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {favorite.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              onClick={() => handleRemoveFromFavorites(favorite._id)}
            >
              <FavoriteIcon style={{ color: red[500] }} />
            </IconButton>
            <AwesomeButton
              type="link"
              onPress={() => createShoppingList(favorite.ingrediates[0])}
            >
              Generate Shopping List
            </AwesomeButton>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
