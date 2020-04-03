import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Tienda from "views/Tienda/Tienda.js";
import Contacto from "views/Contacto/Contacto.js";
import QuienesSomos from "views/QuienesSomos/QuienesSomos.js";
import FAQ from "views/FAQ/FAQ.js";
import Inicio from "views/Inicio/Inicio.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/tienda" component={Tienda} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/quienessomos" component={QuienesSomos} />
      <Route path="/faq" component={FAQ} />
      <Route path="/" component={Inicio} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
