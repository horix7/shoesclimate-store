import React, {Fragment, useState} from 'react'
import { List, ListItem, Typography } from "@material-ui/core"


export default function OrderSummary(props) {

    const [state, setState] = useState(null)

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
            <span> {`${elem.price} X ${elem.qty}`} </span>
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
                <span> {`${elem.price} X ${elem.qty}`} </span>
                </div>
                <Typography> { Number(elem.price) * Number(elem.qty)}</Typography>
                </div>
            </ListItem>
            )
            }) : null }
        </List>
        <div className="total-amount">
        <Typography>grand total</Typography>
        <Typography style={{textAlign: "end"}}> { props.state.cartItems ? props.state.cartItems.totalAmount :  localStorage.displayCart ? JSON.parse(localStorage.displayCart).map(elem => Number(elem.price) * Number(elem.qty)).reduce((a,b) => a + b ) : 0 } USD </Typography>
    </div>   
        </Fragment>
    )
}