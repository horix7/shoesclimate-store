import React, { Fragment, useContext, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Tooltip from '@material-ui/core/Tooltip'
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { CircularProgress, Typography } from '@material-ui/core';
import { StoreContext } from "../../mobxState/stateManagment"
import { useObserver } from 'mobx-react';
import { getUserCart, removeCart } from "../../services/cartServices"
import { RemoveShoppingCart, Close, ShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: 'auto',
  },
});

const useStyles2 = makeStyles(styles);


export default function TemporaryDrawer(props) {
  const store = useContext(StoreContext)
  
  const classes = useStyles();
  const classes2 = useStyles2();
  const [loadindIndex, setLoadindIndex] = React.useState(null)
  const localDisplayCart = () => {
    try {
      return JSON.parse(localStorage.displayCart)
    }catch(err) {
      return false 
    }
  }
  const [localCart, setLocalCart] = React.useState(localDisplayCart())
  const [state, setState] = React.useState({
    top: false,
    left: store.openCart,
    bottom: false,
    right: false,
  });

  const [cartItems, setCartItems] = React.useState(null)

  const getCartItem = async () => {
    try {
      const cart = await getUserCart()
      setCartItems({...cart.cartItem})
    } catch (error) {
      setCartItems(null)
    }
  }
  useEffect(() => {
    getCartItem()
  },  state, cartItems, store.openCart)

  const toggleDrawer = (anchor, open) => (event) => {
    getCartItem()
    
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });

  };


  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="cart-bottom" style={{height: "10vh"}}>
        <Button startIcon={<ShoppingCart />} onClick={() => {
          if(localStorage.AUTH_TOKEN ) {
            location.href="/checkout"
          } else {
            return  store.openModal()
          } 
        }} variant="contained" style={{backgroundColor: "blue", color: "white"}}> Checkout  </Button>
        <Button onClick={toggleDrawer(anchor, false) } variant="contained" style={{borderColor: "black", color: "black", width: "fit-content"}}> <Close /> </Button>

      </div>

        <div className="cart-content" style={{height: "80vh"}}>

        <List>
         { cartItems ? cartItems.items.map(elem => {
           return (
            <ListItem>
            <div className="cart-item">
            <img alt="Remy Sharp" className="cart-image"  src={JSON.parse(elem.image)[0]} />
            <div className="cart-item-info">
              <span> {elem.title} </span> 
              <span> {`${(elem.price * Number(JSON.parse(localStorage.currency).rate)).toFixed(2)} X ${elem.qty}`} </span>
              <Typography> { ((Number(elem.price) * Number(elem.qty)) * Number(JSON.parse(localStorage.currency).rate)).toFixed(2) } {JSON.parse(localStorage.currency).name}</Typography>

            </div>
            {
              loadindIndex == elem.id ? <CircularProgress size="20px" color="grey" /> :
              <RemoveShoppingCart htmlColor="#9e5555" onClick={async() => {
                setLoadindIndex(elem.id)
                await removeCart(elem.id)
                getCartItem()
              }} />
            }

            </div>
          </ListItem>
           )
         }) :  localCart.length >= 1 ? localCart.map(elem => {
           return (
            <ListItem>
            <div className="cart-item">
            <img alt="Remy Sharp" className="cart-image"  src={elem.image} />
            <div className="cart-item-info">
              <span> {elem.title} </span> 
              <span> {`${(elem.price * Number(JSON.parse(localStorage.currency).rate)).toFixed(2)} X ${elem.qty}`} </span>
              <Typography> { ((Number(elem.price) * Number(elem.qty)) * Number(JSON.parse(localStorage.currency).rate)).toFixed(2) }  {JSON.parse(localStorage.currency).name}</Typography>

            </div>
            <RemoveShoppingCart  htmlColor="#9e5555" onClick={() => {
              if(localCart.length == 1) {
                localStorage.removeItem("displayCart")
                localStorage.removeItem("cart")
                setLocalCart(null)
              }else {
                const newLoc = localCart.filter(elen => elen.id !== elem.id )
                localStorage.setItem("displayCart", JSON.stringify(newLoc))
                localStorage.setItem("cart", JSON.stringify(JSON.parse(localStorage.cart).filter(elen => elen.productId !== elem.id )))
                setLocalCart(newLoc)
              }
            }} />
            </div>
          </ListItem>
           )
         }) : null }
        </List>
      </div>

            {/* <Typography  variant="h6" style={{color: "grey", textAlign: "center", backgroundColor: "whitesmoke", padding: "2px"}}  component="h6">CART ITEMS</Typography> */}
            <div className="total-amount" style={{height: "10vh", color: "grey", fontWeight: "bold", backgroundColor: "rgba(0, 9, 10, 0.074)"}}>
        <Typography>grand total</Typography>
        <Typography style={{textAlign: "end", fontWeight: "bold"}}> { cartItems ? (Number(cartItems.totalAmount ) * Number(JSON.parse(localStorage.currency).rate)).toFixed(2) :  localStorage.displayCart ? (JSON.parse(localStorage.displayCart).map(elem => Number(elem.price) * Number(elem.qty)).reduce((a,b) => a + b ) * Number(JSON.parse(localStorage.currency).rate)).toFixed(2) : 0 } {JSON.parse(localStorage.currency).name} </Typography>
        </div>

    </div>
  );

  const checker = Object.values(state).some(elem => elem === true) 

    if(checker) {

      return useObserver ( () => ( <div>
   
        <React.Fragment key={'right'}>
          <Button onClick={toggleDrawer('right', true)}> </Button>
          <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
        </React.Fragment>
    </div>))
    } else {
       return useObserver ( () => (
       <Fragment>
         {props.className ? 
          <Button
          color="transparent"
          className={classes2.navLink}
          id="openModal"
          onClick={toggleDrawer('right', true)}
          placement={window.innerWidth > 959 ? "top" : "left"}
        >
        <i className={classes2.socialIcons + " fas fa-shopping-cart"} />
        <div className="card_count">
          <span> { cartItems ? cartItems.items.length :  localCart ? localCart.length : 0 }</span>
        </div>
        </Button>
         :
          <Tooltip
          id="shop"
          title="view Your Cart"
          id="openModal"
      
          onClick={toggleDrawer('right', true)}
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes2.tooltip }}
          >

          <Button
            color="transparent"
            className={props.className ? props.className : classes2.navLink}
          >
          <i className={classes2.socialIcons + " fas fa-shopping-cart"} />
          <div className="card_count">
          <span> { cartItems ? cartItems.items.length :  localStorage.cart ? JSON.parse(localStorage.cart).length : 0 }</span>
          </div>
          </Button>
        </Tooltip>
  }
       </Fragment>
       )
       )
    }
}
