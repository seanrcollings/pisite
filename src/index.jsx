import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";

import "./styles/main.scss";
import NavBar from "./layout";
import Home from "./components/home/home";
import Stats from "./components/stats/statsContent";
import Portfolio from "./components/portfolio/portfolio";
import NotFound from "./notFound";

import HowTo from "./components/howto/howto";
import history from "./history";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router history={history}>
    <NavBar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/stats" component={Stats} />
        <Route path="/howto" component={HowTo} />
        <Route path="/portfolio" component={Portfolio} />
        <Route component={NotFound} />
      </Switch>
    </NavBar>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
