import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Subscribe from "./components/Subscribe";
function App() {
  return (
    <Switch>
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
