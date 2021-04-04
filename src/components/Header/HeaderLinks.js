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

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
       <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
           HOME 
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
           SHOP 
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="COLLECTIONS"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
               collections
            </Link>,
            <a
              href="#"
              className={classes.dropdownLink}
            >
              shop 
            </a>
          ]}
        />
      </ListItem>
     
      <ListItem className={classes.listItem}>
        <Tooltip
          id="account"
          title="view Your Account Details"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fas fa-user"} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="search"
          title="Search Products"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="#"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fas fa-search"} />
          </Button>
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

        >
          <option value={10}>USD</option>
          <option value={20}>EURO</option>
          <option value={30}>FR</option>
        </select>
        </Tooltip>
      </ListItem>
    
    </List>
  );
}
