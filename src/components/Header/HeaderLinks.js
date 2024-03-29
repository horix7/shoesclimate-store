/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import CartDrawer from 'components/cardDrawer/cart'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import LoginModel from 'components/models/login.model'
import SearchDrawer from '../searchModal/search'


const useStyles = makeStyles(styles);

const linksStyles = {
  marginRight: "10px"
}
export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
       <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          style={linksStyles}
          href="/"

        >
           HOME 
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          style={linksStyles}
          href="/shop"

        >
           SHOP 
        </Button>
      </ListItem>
      <div className="hide-on-big">

      {["YEEZY", "AIR MAX", "AIR FORCE", "AIR ZOOM", "NIKE", "NIKE DUNKs", "ADIDAS", "CONVERSE", "BALENCIAGA", "OFF-WHITE", "NEW BALANCE", "SACAI", "VERSACE", "NBA", "LEBRONs", "CURRY", "KOBE", "KYRIE", "KEVIN DURANT", "FILA", "SLIDES", "VANS", "VAPORMAX", "HUARACHE", "HUMAN RACE", "PUMA", "McQUEEN", "REEBOK"].map(elem => {
              return (
               <ListItem
               className={classes.listItem}
               
               >
                  <Button
                  color="transparent"
                  className={classes.navLink}
                  style={linksStyles}
                  href={`/${elem}`}

                >
                   {elem}  
                </Button>
               
               </ListItem>
              )
            })}
      </div>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="COLLECTIONS"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          style={linksStyles}

          dropdownList={[...["YEEZY", "AIR MAX", "AIR FORCE", "AIR ZOOM", "NIKE", "NIKE DUNKs", "ADIDAS", "CONVERSE", "BALENCIAGA", "OFF-WHITE", "NEW BALANCE", "SACAI", "VERSACE", "NBA", "LEBRONs", "CURRY", "KOBE", "KYRIE", "KEVIN DURANT", "FILA", "SLIDES", "VANS", "VAPORMAX", "HUARACHE", "HUMAN RACE", "PUMA", "McQUEEN", "REEBOK"].map(elem => {
              return (
                <a
                  // color="transparent"
                  className={"collectiondrop"}
                  href={`/${elem}`}

                >
                  {elem}
                  
                </a>
               
               
              )
            })
           
          ]}
        />
      </ListItem>
     
      <ListItem className={classes.listItem}>
      <LoginModel />
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="search"
          title="Search Products"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
        
            <SearchDrawer iconClassName={classes.socialIcons }  classNames={classes.navLink} />
            {/* <i className={classes.socialIcons + " fas fa-search"} /> */}
        </Tooltip>
      </ListItem>

      

      <ListItem className={classes.listItem}>
      
          <CartDrawer />
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="search"
          // classes={{ tooltip: classes.tooltip }}
        >
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
        </Tooltip>
      </ListItem>
    
    </List>
  );
}
