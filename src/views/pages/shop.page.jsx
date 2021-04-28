import React, { Fragment } from "react";
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
import ProductGrids from "../Components/grids/shopGrids"
import BackgroundImage from 'assets/img/bg4.jpg'


const useStyles = makeStyles(styles);


export default function HomePage(props) {
  const classes = useStyles();
  return (
    <Fragment>
                  <Header
                    brand={<Fragment> <img className="nav-logo"   src={LogoImg} /> <span className="nav-text"> SHOES CLIMATE </span></Fragment>}
                    rightLinks={<HeaderLinks />}
                    fixed
                    color="white"
                    changeColorOnScroll={{
                    height: 300,
                    color: "white"
                    }}
                />

     <div className="shopPage">
     <ProductGrids collection={props.match.params.collection} />

     </div>
 <Footer />
    </Fragment>
  );
}
