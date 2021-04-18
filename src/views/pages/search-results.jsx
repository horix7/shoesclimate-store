import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import ProductCoursel from "components/productCoursel/coursel";
import SHowCaseCoursel from  'components/productCoursel/showcasecoursel'
import Button from '@material-ui/core/Button'
import LogoImg from '../../assets/img/logo.png'
import ProductGrids from "../Components/grids/resultsGrids"
import BackgroundImage from 'assets/img/bg4.jpg'
import { searchProducts } from "../../services/productService";


const useStyles = makeStyles(styles);


export default function SearchResults(props) {
  const classes = useStyles();

  const [state, setState] = useState([])

  useEffect(async () => {

    const products = await searchProducts(this.props.match.params.search)
    setState(products.data)

  }, state)
  return (
    <Fragment>
            <Header
                    brand={<Fragment> <img className="nav-logo" src={LogoImg} /> <span className="nav-text"> SHOES CLIMATE </span></Fragment>}
                    rightLinks={<HeaderLinks />}
                    fixed
                    color="white"
                    changeColorOnScroll={{
                    height: 300,
                    color: "white"
                    }}
                />

     <div className="shopPage">
     <ProductGrids products={state} search={this.props.match.params.search} />

     </div>
 <Footer />
    </Fragment>
  );
}
