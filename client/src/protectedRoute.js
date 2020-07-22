import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./utils/UserContext";
import API from "./utils/API";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [userState, setUserState] = useContext(UserContext);

  useEffect(() => {
    API.isLoggedIn()
      .then((res) => {
        console.log("res in protected route", res.data);
        setUserState({
          authenticated: true,
          name: res.data.name,
          email: res.data.email,
          id: res.data._id,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        console.log("authenticated is ", userState.authenticated);
        if (userState.authenticated) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
