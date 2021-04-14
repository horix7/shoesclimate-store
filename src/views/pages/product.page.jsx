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
        product: {

        },
        cart: {
            qty: 1,
            productId: this.props.match.params.id,
            size: 43
        }
    }

    updateCount = (add) => {
        let product = {...this.state}.cart

        if(add) {
            product.qty ++
            this.setState({ cart: product})
        }else {
            product.qty > 1 ? product.qty-- : null 
            this.setState({cart: product})
        }
    }

    updateSize = (newSize) => {
        let cart = {...this.state}.cart
        cart.size = newSize.target.value

        this.setState({cart: cart})

        console.log(cart)

    }

    addToCart = (product) => {
        try {
            let cart = JSON.parse(localStorage.cart)
            if(cart.some(elem => elem.productId === product.productId)) {
                cart.forEach(elem  => {
                    if(elem.productId === product.productId) {
                        cart[cart.indexOf(elem)].qty += elem.qty
                    }else {
                        return 
                    }
                });
            }
        } catch (error) {
                let cart = []
                cart.push(product)
                localStorage.setItem("cart", JSON.stringify(cart))

        }
    }

    componentDidMount() {
        this.getProductData()
    }

    getProductData = async () => {
        const product = await Oneproductservice(this.props.match.params.id)
        this.setState({product: product.data})
    }
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
                    <ProductCoursel images={this.state.product.imageAddress || [this.state.product.imageUrl]} /> 
                    <div className="product-content">
                        <h1> {this.state.product.title }</h1>
                        <Typography className="product-price" >
                        {this.state.product.price }
                        </Typography>
                        <FormControl>
                        <p className="product-label"> Size    </p>
                         <Select onChange={this.updateSize} labelId="label" variant="outlined" id="label" Label="Size" value={this.state.cart.size} className="product-select">
                            <MenuItem  value={43}> 43 </MenuItem>
                            <MenuItem value={40}> 54 </MenuItem>
                        </Select>
                        </FormControl>

                        <p className="product-label"> Quantinty </p>
                        <div className="counterForm">
                       <div className="count-i" onClick={() => this.updateCount(false)}>
                       <i width="100%" className="fas fa-minus"></i>
                       </div>
                       <div className="count-i">
                        { this.state.cart.qty }
                       </div>
                       <div onClick={() => this.updateCount(true)} className="count-i">
                        <i width="100%" className="fas fa-plus"></i>
                        </div>
                        </div>

                        <button onClick={() => this.addToCart(this.state.cart)} className="cart-button"> Add To cart </button>

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

