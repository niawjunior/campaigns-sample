import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Home from "./components/Home";
import Subscribe from "./components/Subscribe";
import SecondHomeLoan from "./components/SecondHomeLoan";

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
      <Route path="/second-home-loan">
        <SecondHomeLoan />
      </Route>
      <Route path="/subscribe">
        <Subscribe />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
