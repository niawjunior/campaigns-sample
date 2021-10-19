import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Subscribe from "./components/Subscribe";
import SecondHomeLoan from "./components/SecondHomeLoan";
function App() {
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
