import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { PrimaryButton } from "@fremtind/jkl-button-react";
import { Context as UserContext, actions } from "../store/user";

const Login = () => {
  const [user, dispatch] = useContext(UserContext);

  if (user.isAuthenticated) {
    return <Redirect to="/demo" />;
  }
  return (
    <main>
      <h1 className="jkl-h1">Logg inn</h1>
      <PrimaryButton onClick={() => actions.login(dispatch)}>
        Logg inn
      </PrimaryButton>
    </main>
  );
};

export default Login;
