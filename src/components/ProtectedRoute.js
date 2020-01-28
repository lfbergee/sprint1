import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Context as UserContext } from "../store/user";

const ProtectedRoute = ({ children, rest }) => {
  const [user] = React.useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
