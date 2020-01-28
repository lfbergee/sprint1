import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { initTabListener } from "@fremtind/jkl-core";
import { reducer, initialState, Context as UserContext } from "./store/user";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Demo1 from "./pages/Demo1";

import "./fremtind";
import "./style.scss";

function App() {
  const user = React.useReducer(reducer, initialState);

  useEffect(() => {
    initTabListener();
  }, []);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Switch>
          <ProtectedRoute path="/demo" exact>
            <Demo1 />
          </ProtectedRoute>
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
