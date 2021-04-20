import React, {Fragment, useState} from 'react'
import { List, ListItem, Typography } from "@material-ui/core"


export default function OrderSummary(props) {


    return (
        <Fragment>
                     
        <List>
        { props.state.cartItems ? props.state.cartItems.items.map(elem => {
        return (
            <ListItem>
            <div className="cart-item">
            <img alt="Remy Sharp" className="cart-image"  src={JSON.parse(elem.image)[0]} />
            <div className="cart-item-info">
            <span> {elem.title} </span> 
            <span> {`${(elem.price * Number(JSON.parse(localStorage.currency).rate)).toFixed(2)} X ${elem.qty}`} </span>

            </div>
            <Typography> { ((Number(elem.price) * Number(elem.qty)) * Number(JSON.parse(localStorage.currency).rate)).toFixed(2) }</Typography>

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
                <span> {`${(elem.price * Number(JSON.parse(localStorage.currency).rate)).toFixed(2)} X ${elem.qty}`} </span>

                </div>
            <Typography> { ((Number(elem.price) * Number(elem.qty)) * Number(JSON.parse(localStorage.currency).rate)).toFixed(2) }</Typography>

                </div>
            </ListItem>
            )
            }) : null }
        </List>
        <div className="total-amount">
        <Typography>grand total</Typography>
        
        <Typography style={{textAlign: "end"}}> { props.state.cartItems ?( Number(props.state.cartItems.totalAmount)  * Number(JSON.parse(localStorage.currency).rate)).toFixed(2)  :  localStorage.displayCart ? (JSON.parse(localStorage.displayCart).map(elem => Number(elem.price) * Number(elem.qty)).reduce((a,b) => a + b ) * Number(JSON.parse(localStorage.currency).rate)).toFixed(2) : 0 } {JSON.parse(localStorage.currency).name} </Typography>
    </div>   
        </Fragment>
    )
}