import React, { Component, Fragment } from 'react' 
import CheckoutStepper from "../../components/checkout/checkoutStepper";       
import { AppBar, List, ListItem, Typography } from "@material-ui/core"


export default class Checkout extends Component {

    render() {
        return (
            <Fragment>

                <AppBar color="inherit"> <Typography component="h2" style={{fontWeight: "900",padding: "10px", textTransform: "uppercase", color: "black"}}>Checkout Shoes Climate</Typography> </AppBar>

                <div className="checkout">
                    <CheckoutStepper />
              

                <div className="checkout-summary">

              
                <List>
                {[1,2,3].map(elem => {
                return (
                    <ListItem>
                    <div className="cart-item">
                    <img alt="Remy Sharp" className="cart-image"  src="https://cdn.shopify.com/s/files/1/0502/0067/4468/products/C31CEEE8-BFB3-42CD-AEDC-6241EB0D783A_1024x1024@2x.jpg?v=1617023610" />
                    <div className="cart-item-info">
                    <span>  adidas Originals x Disney Stan Smith </span> 
                    <span> 12 * 2</span>
                    </div>
                    <Typography> 300</Typography>
                    </div>
                </ListItem>
                
                )
                })}
                </List>
                <div className="total-amount">
                <Typography>grand total</Typography>
                <Typography style={{textAlign: "end"}}> 123 USD</Typography>
                </div>
                </div>
                </div>
            </Fragment>
        )
    }
}