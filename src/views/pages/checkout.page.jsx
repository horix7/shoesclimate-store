import React, { Component, Fragment } from 'react' 
import CheckoutStepper from "../../components/checkout/checkoutStepper";       
import { AppBar, List, ListItem, Typography } from "@material-ui/core"
import { getUserCart } from "../../services/cartServices";

export default class Checkout extends Component {

    state = {
        cartItems: null,

    }

    getCartItems = async () => {

        const cart = await getUserCart()
        this.setState({cartItems: cart.cartItem})

    }

    componentDidMount() {
        if(localStorage.AUTH_TOKEN) {
        this.getCartItems()
        }else {
            location.href = '/'
        }
    }

    render() {
        return (
            <Fragment>

                <AppBar color="inherit"> <Typography component="h2" style={{fontWeight: "900",padding: "10px", textTransform: "uppercase", color: "black"}}>Checkout Shoes Climate</Typography> </AppBar>

                <div className="checkout">
                    <CheckoutStepper />
                <div className="checkout-summary">

              
                <List>
                { this.state.cartItems ? this.state.cartItems.items.map(elem => {
                return (
                    <ListItem>
                    <div className="cart-item">
                    <img alt="Remy Sharp" className="cart-image"  src={JSON.parse(elem.image)[0]} />
                    <div className="cart-item-info">
                    <span> {elem.title} </span> 
                    <span> {`${elem.price} * ${elem.qty}`} </span>
                    </div>
                    <Typography> { Number(elem.price) * Number(elem.qty)}</Typography>
                    </div>
                </ListItem>
                )
                }) :  localStorage.displayCart ? JSON.parse(localStorage.displayCart).map(elem => {
                    return (
                        <ListItem>
                        <div className="cart-item">
                        <img alt="Remy Sharp" className="cart-image"  src={elem.image} />
                        <div className="cart-item-info">
                        <span> {elem.title} </span> 
                        <span> {`${elem.price} * ${elem.qty}`} </span>
                        </div>
                        <Typography> { Number(elem.price) * Number(elem.qty)}</Typography>
                        </div>
                    </ListItem>
                    )
                    }) : null }
                </List>
                <div className="total-amount">
        <Typography>grand total</Typography>
        <Typography style={{textAlign: "end"}}> { this.state.cartItems ? this.state.cartItems.totalAmount :  localStorage.displayCart ? JSON.parse(localStorage.displayCart).map(elem => Number(elem.price) * Number(elem.qty)).reduce((a,b) => a + b ) : 0 } USD </Typography>
        </div>
                </div>
                </div>
            </Fragment>
        )
    }
}