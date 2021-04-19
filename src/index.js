import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import './index.css'
import "assets/scss/material-kit-react.scss?v=1.9.0";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Components from "views/Components/Components";
import ProductPage from 'views/pages/product.page'
import AccountPage from 'views/pages/account.page'
import CheckoutPage from 'views/pages/checkout.page'
import ShopPage from 'views/pages/shop.page'
import { UniversalState } from "./mobxState/stateManagment";
import SizeChart from "./views/pages/sizeCharts"
import SearchPage from "views/pages/search-results"



var hist = createBrowserHistory();

if(!localStorage.currency) {
  localStorage.setItem("currency", JSON.stringify({
    name: "RWF",
    rate: "1"
  }))
}


ReactDOM.render(
  (
  <UniversalState>

   <Router history={hist}>
     <Switch>
       <Route path="/product/:id" component={ProductPage} />
       <Route path="/search/:search" component={SearchPage} />
       <Route path="/size" component={SizeChart} />
       <Route path="/checkout" component={CheckoutPage} />
       <Route path="/account" component={AccountPage} />
       <Route path="/:collection" component={ShopPage} />
       <Route path="/" component={Components} />
     </Switch>
   </Router>
  </UniversalState>
  
  ),
  document.getElementById("root")
);


