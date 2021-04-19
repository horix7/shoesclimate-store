import React, { Component, Fragment, Context } from 'react'
import ProductCoursel from 'components/productCoursel/coursel'
import { Snackbar, CircularProgress , Select, MenuItem, Typography, FormControl } from "@material-ui/core"
import Header from 'components/Header/Header'
import HeaderLinks from 'components/Header/HeaderLinks'
import LogoImg from 'assets/img/logo.png'
import RelatedCoursel from 'components/productCoursel/showcasecoursel'
import Footer from 'components/Footer/Footer'
import { Oneproductservice } from "../../services/productService";
import { createCart } from "../../services/cartServices";

export default class ProductPage extends Component {


    state = {
        product: {

        },
        cart: {
            qty: 1,
            productId: this.props.match.params.id,
            size: 35
        },
        loading: false,
        open: false
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

    addToCart = async (product) => {
        this.setState({loading: true})

        try {
            await createCart(this.state.cart)
            this.setState({loading: false, open: true})

        } catch (error) {
       
            try {
                let cart = JSON.parse(localStorage.cart)
                let displayCart = JSON.parse(localStorage.displayCart)

            if(cart.some(elem => elem.productId === product.productId)) {
                cart.forEach(elem  => {
                    if(elem.productId === product.productId) {
                        console.log(elem.qty)
                        cart[cart.indexOf(elem)].qty =  Number(cart[cart.indexOf(elem)].qty) + this.state.cart.qty
                        displayCart[cart.indexOf(elem)].qty =  Number(cart[cart.indexOf(elem)].qty) + this.state.cart.qty
                    }
                });
            } else {
                cart.push(product)
                displayCart.push({
                    id: product.productId,
                    title: this.state.product.title,
                    description: this.state.product.title,
                    image: this.state.product.imageUrl,
                    qty: this.state.cart.qty,
                    size: this.state.cart.size,
                    price: this.state.product.price
                })
            }
            localStorage.setItem("cart", JSON.stringify(cart))
            localStorage.setItem("displayCart", JSON.stringify(displayCart))
            this.setState({loading: false, open: true})


        } catch (error) {
                let cart = []
                let displayCart = []
                cart.push(product)
                displayCart.push({
                    id: product.productId,
                    title: this.state.product.title,
                    description: this.state.product.title,
                    image: this.state.product.imageUrl,
                    qty: this.state.cart.qty,
                    size: this.state.cart.size,
                    price: this.state.product.price
                })
                localStorage.setItem("cart", JSON.stringify(cart))
                localStorage.setItem("displayCart", JSON.stringify(displayCart))

                this.setState({loading: false, open: true})

        }
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
                      <Snackbar
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={this.state.open}
                        autoHideDuration={1000}
                        onClose={() => this.setState({open: false})}
                        message="product added to cart"
                    />
                <div className="product-grid">
                    <ProductCoursel images={this.state.product.imageAddress || [this.state.product.imageUrl]} /> 
                    <div className="product-content">
                        <h1> {this.state.product.title }</h1>
                        <Typography className="product-price" >
                        {(this.state.product.price * Number(JSON.parse(localStorage.currency).rate)).toFixed(2)} {JSON.parse(localStorage.currency).name}
                        </Typography>
                        <FormControl>
                        <p className="product-label"> Size </p>
                         <Select onChange={this.updateSize} labelId="label" variant="outlined" id="label" Label="Size" value={this.state.cart.size} className="product-select">
                            {[35,36,37,38,39,40,41,42,43,44,45,46,47,48,49].map( elem => <MenuItem  value={elem}> {elem} </MenuItem> )}
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

                        <button onClick={() => this.addToCart(this.state.cart)} className="cart-button">{this.state.loading ? <CircularProgress /> : " Add To cart "}</button>

                        <Typography  className="product-description">
                            <p dangerouslySetInnerHTML={{__html: this.state.product.description }}></p>
                        </Typography>
                    </div>
                </div>
                
                <RelatedCoursel play={false}/>  

                <Footer  />  
            </Fragment>
        )
    }
}

