import React, { Component, Fragment } from 'react'
import  ProductCard from "components/productCard/card";
import { Button, Typography } from '@material-ui/core';
import { ArrowRight } from "@material-ui/icons";


export default class ProductGrids extends Component {
   
    render() {
        return (

            <Fragment>
                    <div className="category">
                    <Typography>
                    <p>  {this.props.products[0].collection }</p>
                    </Typography>

                    <Button endIcon={<ArrowRight />} variant="" style={{backgroundColor: "transparent", color: "black", border: "none"}} href={"/"+ this.props.products[0].collection}> View All </Button>

                    </div>
                  <div className="product_grids"> { this.props.products.map(elem => <ProductCard key={elem.id} product={elem} />)} </div> 
            </Fragment>
        )
    }
}