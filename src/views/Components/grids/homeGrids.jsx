import React, { Component, Fragment } from 'react'
import  ProductCard from "components/productCard/card";

export default class ProductGrids extends Component {
   
    render() {
        return (

            <Fragment>
                  <div className="product_grids"> { this.props.products.map(elem => <ProductCard key={elem.id} product={elem} />)} </div> 
            </Fragment>
        )
    }
}