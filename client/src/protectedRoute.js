import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./utils/UserContext";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [userState] = useContext(UserContext);

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
