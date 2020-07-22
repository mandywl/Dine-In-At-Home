import React, { useState, useContext } from "react";
import API from "../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Button from "material-ui/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { AwesomeButton } from "react-awesome-button";
import { useHistory } from "react-router-dom";
import { UserContext } from "../utils/UserContext";

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
  container: {
    padding: theme.spacing(3, 2),
    minHeight: "calc(100vh - 250px)",
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
  errorMessage: {
    padding: theme.spacing(0, 0, 0, 2),
    color: "red",
  },
}));

export default function Login() {
  const classes = useStyles();

  const [, setUserState] = useContext(UserContext);
  const [formObject, setFormObject] = useState({});
  const [error, setError] = useState();
  let history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    API.login({
      username: formObject.username,
      password: formObject.password,
    })
      .then((res) => {
        setUserState({
          authenticated: true,
          name: res.data.name,
          email: res.data.email,
          id: res.data._id,
        });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setError("Incorrect Username or Password!");
      });
  }

  return (
    <>
      <Typography className={classes.heading} color="textPrimary" variant="h2">
        Log in
      </Typography>
      <Grid container justify="center" className={classes.container}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <form onSubmit={handleFormSubmit}>
              <CardContent>
                <TextField
                  id="username"
                  name="username"
                  label="Enter your username"
                  fullWidth
                  autoFocus
                  required
                  className={classes.textfield}
                  onChange={handleInputChange}
                />
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  label="Enter your password"
                  fullWidth
                  required
                  className={classes.textfield}
                  onChange={handleInputChange}
                />
              </CardContent>
              <CardActions className={classes.signupButton}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <AwesomeButton type="link" size="large" href="/signup">
                      Sign up
                    </AwesomeButton>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <AwesomeButton type="link" size="large">
                      Log in
                    </AwesomeButton>
                  </Grid>
                </Grid>
              </CardActions>
              <Typography
                color="textPrimary"
                variant="h6"
                className={classes.errorMessage}
              >
                {error}
              </Typography>
            </form>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
