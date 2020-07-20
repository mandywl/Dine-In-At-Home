import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./utils/UserContext";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [userState] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userState.authenticated) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/signup",
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
