import React, { Fragment, useState,  useEffect } from "react";
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
import ProductGrids from "./grids/homeGrids"
import BackgroundImage from 'assets/img/bg4.jpg'
const useStyles = makeStyles(styles);
import { getProductDataByCollectionHome } from "../../services/productService";
import ComponentsGrids from "../Components/grids/featured_collection"



export default function HomePage(props) {

  const [homeProducts, setHomeProducts] = useState({})

  useEffect(async() => {
    const products = await getProductDataByCollectionHome()
    setHomeProducts(products.data)
  }, homeProducts)
  
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
      <Parallax image={BackgroundImage}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>SHOES CLIMATE </h1>
                <h3 className={classes.subtitle}>
                  best shoes store in kigali 
                </h3>
                <button onClick={() => location.href = "#shop-now"} className="shop-button">
                  Shop Now 
                </button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <SHowCaseCoursel play={true} />

      <div id="shop-now">
        <ComponentsGrids />
      </div>
      {
        Object.keys(homeProducts).length >= 1 ? <> 
         { Object.keys(homeProducts).map(elem => {
            return <ProductGrids products={homeProducts[elem]} />
           }) }
        </> : null 
      }

 <Footer />
    </div>
  );
}
