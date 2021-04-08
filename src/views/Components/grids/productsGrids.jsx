import React, { Component, Fragment } from 'react'
import  ProductCard from "components/productCard/card";
import { getProductData } from "../../../services/productService";

export default class ProductGrids extends Component {
    
    state = {
        products: []
    }

    componentDidMount() {
        this.getProductsData()
    }

    getProductsData = async () => {
        const products = await getProductData()
        this.setState({products: products.data})

    }
    render() {
        return (

            <Fragment>
                <h1 className="gridHeader">Just dropped </h1>
                
                  <div className="product_grids"> { this.state.products.map(elem => <ProductCard key={elem.id} product={elem} />)} </div> 
               
            </Fragment>
        )
    }
}