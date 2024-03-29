import React, {useContext, useEffect, useState } from 'react'
import CartSummary from "./orderSummary"
import { useObserver } from "mobx-react";
import { StoreContext } from "../../../mobxState/stateManagment";
import { getUserCart  } from "../../../services/cartServices";
import { List, ListItem, Button, CircularProgress } from "@material-ui/core";
import { createOrder } from "../../../services/productService"; 
import Success from "./succesModel"

export default function Receipt(props) {
    
    const store = useContext(StoreContext)

    const orderDetails = {
        ...store.shipping,
        referal: localStorage.referral
    }

    const [loading, setloading] = useState(false)
    const [open, setopen] = useState(false)
    const placingOrder = async () => {
      
      setloading(true)
      await createOrder(orderDetails)
      setloading(false)
      setopen(true)

    }

    return useObserver(() => (
        <>
        
        <div className="checkout-summary-mobile">

        <CartSummary state={props.state} />
        </div>
        <Success open={open} />
        <List>
             <ListItem> delivery location </ListItem>   
             <ListItem> <span className="endSpan"> {`${orderDetails.location } ${orderDetails.street}`}</span> </ListItem>            
             <ListItem> order message   </ListItem> 
             <ListItem> <span className="endSpan"> {`${orderDetails.message }`}</span></ListItem>              
        </List>
        <Button variant="outlined" fullWidth style={{marginBottom: "100px"}} onClick={placingOrder}> {loading ? <CircularProgress /> : "Place Order " } </Button>
           
        </>
    ))
}