import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import './index.css'
import "assets/scss/material-kit-react.scss?v=1.9.0";
import 'rsuite/lib/styles/index.less'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Components from "views/Components/Components";
import ProductPage from 'views/pages/product.page'

var hist = createBrowserHistory();

ReactDOM.render(
  (<Router history={hist}>
    <Switch>
      <Route path="/product/:id" component={ProductPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>),
  document.getElementById("root")
);


