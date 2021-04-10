import React, { Component, Fragment } from 'react'
import ProductCoursel from 'components/productCoursel/coursel'
import { Button, InputLabel , Select, MenuItem, Typography, FormControl } from "@material-ui/core"
import Header from 'components/Header/Header'
import HeaderLinks from 'components/Header/HeaderLinks'
import LogoImg from 'assets/img/logo.png'
import RelatedCoursel from 'components/productCoursel/showcasecoursel'
import Footer from 'components/Footer/Footer'
import { Oneproductservice } from "../../services/productService";


export default class ProductPage extends Component {


    state = {
        product: {},

    }

    componentDidMount() {
        this.getProductData()
    }

    getProductData = async () => {
        const product = await Oneproductservice(this.props.match.params.id)
        this.setState({product: product.data})
    }
    render() {

        console.log(this.props)
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
                    <ProductCoursel images={this.state.product.imageAddress || [this.state.product.imageUrl]} /> 
                    <div className="product-content">
                        <h1> {this.state.product.title }</h1>
                        <Typography className="product-price" >
                        {this.state.product.price }
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
                        {this.state.product.description }
                              </Typography>
                    </div>
                </div>
                
                <RelatedCoursel play={false}/>  

                <Footer  />  
            </Fragment>
        )
    }
}

