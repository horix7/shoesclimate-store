import React, { Component, Fragment } from 'react' 
import CheckoutStepper from "../../components/checkout/checkoutStepper";       
import { AppBar, List, ListItem, Typography } from "@material-ui/core"
import { getUserCart } from "../../services/cartServices";
import OrderSummary  from "../Components/order/orderSummary";

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
                    <CheckoutStepper state={this.state} />
                <div className="checkout-summary">
                    <OrderSummary state={this.state} />
     
                </div>
                </div>
            </Fragment>
        )
    }
}