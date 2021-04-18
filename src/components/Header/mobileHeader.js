/*eslint-disable*/
import React, { Fragment } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import CartDrawer from 'components/cardDrawer/cart'
import LoginModel from 'components/models/login.model'
import SearchModal from "components/searchModal/search"


const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <Fragment>

      <div className="mobileHeader">
     
          <div className="div-holder">
         
          <LoginModel className="mobile-nav-link" />
          </div>

          <SearchModal iconClassName={classes.socialIcons} classNames={classes.navLink}/>
          
          {/* <Button
            color="transparent"
            href="#"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fas fa-search"} />
          </Button> */}
      
        <div>

        <select
          id="nav-simple-select"
          className={classes.navLink}

        >
          <option value={10}>USD</option>
          <option value={20}>EURO</option>
          <option value={30}>FR</option>
        </select>
          </div>
          <CartDrawer className="mobile-nav-link" />
         
        </div>
      
    
    </Fragment>
  );
}
