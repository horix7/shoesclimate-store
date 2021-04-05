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
import ProductGrids from "./grids/productsGrids"

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand={<Fragment> <img className="nav-logo" src={LogoImg} /> <span className="nav-text"> SHOES CLIMATE </span></Fragment>}
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>SHOES CLIMATE </h1>
                <h3 className={classes.subtitle}>
                  best shoes store in kigali 
                </h3>
                <button className="shop-button">
                  Shop Now 
                </button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <SHowCaseCoursel play={true} />
      <ProductGrids />

 <Footer />
    </div>
  );
}
