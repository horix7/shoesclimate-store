import React, { Component, Fragment } from 'react'
import ProductCoursel from 'components/productCoursel/coursel'
import { Button, InputLabel , Select, MenuItem, Typography, FormControl } from "@material-ui/core"
import Header from 'components/Header/Header'
import HeaderLinks from 'components/Header/HeaderLinks'
import LogoImg from 'assets/img/logo.png'
import RelatedCoursel from 'components/productCoursel/showcasecoursel'
import Footer from 'components/Footer/Footer'

export default class ProductPage extends Component {

    render() {
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
                <div className="product-grid">
                    <ProductCoursel /> 
                    <div className="product-content">
                        <h1>Air Jordan 1 Retro High OG 'Patina' </h1>
                        <Typography className="product-price" >
                            157,000 RWF 
                        </Typography>
                        <FormControl>
                        <p className="product-label"> Size    </p>
                         <Select labelId="label" variant="outlined" id="label" Label="Size" className="product-select">
                            <MenuItem > 230 </MenuItem>
                            <MenuItem > 230 </MenuItem>
                        </Select>
                        </FormControl>

                        <p className="product-label"> Quantinty    </p>
                        <div className="counterForm">
                       <div className="count-i">
                       <i width="100%" className="fas fa-minus"></i>
                       </div>
                       <div className="count-i">
                        10
                       </div>
                       <div className="count-i">
                        <i width="100%" className="fas fa-plus"></i>
                        </div>
                        </div>

                        <button className="cart-button"> Add To cart </button>

                        <Typography className="product-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aliquam harum perferendis sit incidunt odit alias beatae mollitia exercitationem velit eaque quidem laboriosam natus nulla tenetur, accusantium provident, unde excepturi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aliquam harum perferendis sit incidunt odit alias beatae mollitia exercitationem velit eaque quidem laboriosam natus nulla tenetur, accusantium provident, unde excepturi.
                        </Typography>
                    </div>
                </div>
                
                <RelatedCoursel play={false}/>  

                <Footer  />  
            </Fragment>
        )
    }
}

