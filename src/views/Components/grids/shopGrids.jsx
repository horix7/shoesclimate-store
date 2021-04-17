import React, { Component, Fragment } from 'react'
import  ProductCard from "components/productCard/card";
import { getProductDataByCollection, getProductData } from "../../../services/productService";

export default class ProductGrids extends Component {
    
    state = {
        products: []
    }

    componentDidMount() {
        this.getProductsData()
    }

    getProductsData = async () => {
        const products = this.props.collection == "shop" ? await getProductData()  : await getProductDataByCollection(this.props.collection)
        this.setState({products: products.data})

    }
    render() {
        return (

            <Fragment>
                <h1 className="gridHeader"> {this.props.collection } </h1>
                
                  <div className="product_grids"> { this.state.products.map(elem => <ProductCard key={elem.id} product={elem} />)} </div> 
               
            </Fragment>
        )
    }
}