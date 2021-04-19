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
          value={JSON.parse(localStorage.currency).name}
          onChange={(event) => {
            let conversion = {
              USD : 0.0010,
              EURO: 0.00085,
              RWF: 1
            }

            localStorage.setItem("currency", JSON.stringify({
              name: event.target.value,
              rate: conversion[event.target.value]
            }))

            location.reload()
          }}

        >
          <option value={"RWF"}>RWF</option>
          <option value={"USD"}>USD</option>
          <option value={"EURO"}>EURO</option>
        </select>

          </div>
          <CartDrawer className="mobile-nav-link" />
         
        </div>
      
    
    </Fragment>
  );
}
