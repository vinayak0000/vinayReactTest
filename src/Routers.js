import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Add from "./Components/User/Add.js";
import Claim from "./Components/Claim/Claim.js";
import Modify from "./Components/User/Modify.js";
import InsPayer from "./Components/Insurance Payer/InsPayer.js";
import Home from "./Home.js";

const Routers = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/add" component={Add} />
      <Route path="/claim" component={Claim} />
      <Route path="/modify" component={Modify} />
      <Route path="/insPay" component={InsPayer} />
    </Switch>
  </BrowserRouter>
);

export default Routers;
