import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { red } from "@material-ui/core/colors";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {},
  heading: {
    textAlign: "center",
  },
  icon: {
    paddingTop: "10px",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <Typography className={classes.heading} variant="h6">
        Made with
        <FavoriteIcon className={classes.icon} style={{ color: red[500] }} />
        by &nbsp;
        <a
          className="contactLink"
          href="https://mandy-wellslakeland.herokuapp.com/"
          target="_blank"
        >
          Mandy Wells-Lakeland
        </a>
      </Typography>
      <Typography className={classes.heading}>
        * This website is made purely for study purposes. Some recipes have been
        referenced from Bargin Box.
      </Typography>
    </footer>
  );
}
