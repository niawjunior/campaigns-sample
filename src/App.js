import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";

function usePageViews() {
  let location = useLocation();

  useEffect(() => {
    // window.Evergage.reinit();
  }, [location]);
}

function App() {
  usePageViews();
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
