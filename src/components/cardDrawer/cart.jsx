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
import { Avatar, Typography } from '@material-ui/core';
import { StoreContext } from "../../mobxState/stateManagment"
import { useObserver } from 'mobx-react';
import { getUserCart } from "../../services/cartServices"


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
  },  state, cartItems)

  const toggleDrawer = (anchor, open) => (event) => {
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
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="cart-content" style={{height: "90vh"}}>
        <Typography  variant="h6" style={{color: "grey", textAlign: "center", backgroundColor: "whitesmoke", padding: "2px"}}  component="h6">CART ITEMS</Typography>
        <div className="total-amount">
        <Typography>grand total</Typography>
        <Typography style={{textAlign: "end"}}> { cartItems ? cartItems.totalAmount :  localStorage.displayCart ? JSON.parse(localStorage.displayCart).map(elem => Number(elem.price) * Number(elem.qty)).reduce((a,b) => a + b ) : 0 } USD </Typography>
        </div>

        <List>
         { cartItems ? cartItems.items.map(elem => {
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
      </div>
      <div className="cart-bottom" style={{height: "10vh"}}>
        <Button onClick={toggleDrawer(anchor, false) } variant="outlined" style={{borderColor: "white", color: "white"}}> Close </Button>
        <Button onClick={() => {
          if(localStorage.AUTH_TOKEN ) {
            location.href="/checkout"
          } else {
            return  store.openModal()
          } 
        }} variant="contained" style={{backgroundColor: "blue", color: "white"}}> Checkout  </Button>
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
          <span> { cartItems ? cartItems.items.length :  localStorage.cart ? JSON.parse(localStorage.cart).length : 0 }</span>
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
