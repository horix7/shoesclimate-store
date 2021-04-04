import React, { Component, Fragment } from 'react'
import ProductCoursel from 'components/productCoursel/coursel'
import { Button, InputLabel , Select, MenuItem, Typography, FormControl } from "@material-ui/core"
import Header from 'components/Header/Header'
import HeaderLinks from 'components/Header/HeaderLinks'
import LogoImg from 'assets/img/logo.jpeg'

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
                        <InputLabel id="label" style={{margin:  "5px"}}>  Size </InputLabel>
                         <Select labelId="label" variant="outlined" id="label" Label="Size" className="product-select">
                            <MenuItem > 230 </MenuItem>
                            <MenuItem > 230 </MenuItem>
                        </Select>
                        </FormControl>

                        <button className="cart-button"> Add To cart </button>
                    </div>
                </div>

            </Fragment>
        )
    }
}