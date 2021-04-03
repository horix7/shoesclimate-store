import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import './index.css'
import "assets/scss/material-kit-react.scss?v=1.9.0";
import 'rsuite/lib/styles/index.less'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Components from "views/Components/Components";


var hist = createBrowserHistory();

ReactDOM.render(
  (<Router history={hist}>
    <Switch>
      <Route path="/" component={Components} />
    </Switch>
  </Router>),
  document.getElementById("root")
);


