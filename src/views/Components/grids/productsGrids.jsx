import React, { Component, Fragment } from 'react'
import  ProductCard from "components/productCard/card";

export default class ProductGrids extends Component {
    
    render() {
        return (

            <Fragment>
                <h1 className="gridHeader">Just dropped </h1>
                <div className="product_grids">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Fragment>
        )
    }
}