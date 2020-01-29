import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { initTabListener } from "@fremtind/jkl-core";
import { reducer, initialState, Context as UserContext } from "./store/user";
import Demo1 from "./pages/Demo1";
import FirebaseProvider from "./utils/firebase";


import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-button/button.min.css";

import "./style.scss";

function App() {
  const userStore = React.useReducer(reducer, initialState);

  useEffect(() => {
    initTabListener();
  }, []);

  return (
    <FirebaseProvider>
      <UserContext.Provider value={userStore}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Demo1} />
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    </FirebaseProvider>
  );
}

export default App;
