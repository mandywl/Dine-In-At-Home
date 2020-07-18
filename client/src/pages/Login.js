import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Button from "material-ui/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { AwesomeButton, AwesomeButtonProgress } from "react-awesome-button";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down({ mobileBreakpoint: "sm" })]: {
      boxShadow: "0px 0px 0px 0px",
    },
    [theme.breakpoints.up({ mobileBreakpoint: "sm" })]: {
      "max-width": 500,
    },
    padding: theme.spacing(3, 2),
  },
  heading: {
    textAlign: "center",
  },
  textfield: {
    padding: theme.spacing(2, 0),
    color: "#ffffff",
  },
  signupButton: {
    float: "right",
  },
}));

export default function Signup() {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.heading} color="textPrimary" variant="h2">
        Log in
      </Typography>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <form>
              <CardContent>
                <TextField
                  label="Enter your email"
                  fullWidth
                  autoFocus
                  required
                  className={classes.textfield}
                />
                <TextField
                  label="Enter your password"
                  fullWidth
                  required
                  className={classes.textfield}
                />
              </CardContent>
              <CardActions className={classes.signupButton}>
                <AwesomeButtonProgress
                  loadingLabel="Creating account.."
                  resultLabel="Account created!"
                  type="link"
                  size="large"
                  action={(element, next) => {
                    setTimeout(() => {
                      next();
                    }, 100);
                  }}
                >
                  Log in
                </AwesomeButtonProgress>
              </CardActions>
            </form>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
