import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { AwesomeButton } from "react-awesome-button";

import { UserContext } from "../utils/UserContext";
import API from "../utils/API";

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

export default function Signup() {
  const classes = useStyles();

  const [userState, setUserState] = useContext(UserContext);
  const [error, setError] = useState();
  const [formObject, setFormObject] = useState({});
  let history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formObject.email && formObject.password && formObject.name) {
      API.register({
        username: formObject.username,
        password: formObject.password,
        name: formObject.name,
        email: formObject.email,
      })
        .then((res) => {
          if (res.status === 200) {
            setUserState({
              authenticated: true,
              name: res.data.name,
              email: res.data.email,
              id: res.data._id,
            });
            history.push("/");
          } else {
            setError(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
          setError("Registration Failed!");
        });
    } else {
      setError("Incompleted details!");
    }
  };

  return (
    <>
      <Typography className={classes.heading} color="textPrimary" variant="h2">
        Sign Up
      </Typography>
      <Grid container justify="center" className={classes.container}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <form onSubmit={handleFormSubmit}>
              <CardContent>
                <TextField
                  id="name"
                  name="name"
                  label="Enter your name"
                  fullWidth
                  autoFocus
                  required
                  className={classes.textfield}
                  onChange={handleInputChange}
                />
                <TextField
                  id="email"
                  name="email"
                  label="Enter your email"
                  fullWidth
                  autoFocus
                  required
                  className={classes.textfield}
                  onChange={handleInputChange}
                />
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
                    <AwesomeButton type="link" size="large">
                      Sign up
                    </AwesomeButton>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <AwesomeButton type="link" size="large" href="/login">
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
