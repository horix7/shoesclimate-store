import React, { Component, Fragment } from 'react'
import  ProductCard from "components/productCard/card";
import { getProductDataByCollection, getProductDataShop } from "../../../services/productService";
import  GridSkeleton from "../../Components/skeleton/gridSkeleton";

export default class ProductGrids extends Component {
    
    state = {
        products: []
    }

    componentDidMount() {
        this.getProductsData()
    }

    getProductsData = async () => {
        const products = this.props.collection == "shop" ? await getProductDataShop()  : await getProductDataByCollection(this.props.collection)
        this.setState({products: products.data})

    }
    render() {
        return (

            <Fragment>
               {this.state.products.length >= 1 ? <>
                <h1 className="gridHeader"> {this.props.collection } </h1>
                
                  <div className="product_grids"> { this.state.products.map(elem => <ProductCard key={elem.id} product={elem} />)} </div> 
                </> : <> 
                <h1 className="gridHeader"> product </h1>

                <div className="product_grids">
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map(() => <GridSkeleton /> )}
                </div>

                </>}
            </Fragment>
        )
    }
}