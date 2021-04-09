/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  const contacts = {
    "email": '@ contact@shoesclimate.com',
    phone: "0782374832"
  }


  const links = ["About us", "Contact us", "Shipping" , "FAQS", "Terms & Conditions", "Purchase and returns"]
  const social = ["instgram", "facebook"]
  
  return (
    <footer style={{backgroundColor: "black"}} className={footerClasses}>

      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
          {Object.values(contacts).map(elem => (  <ListItem key={elem} className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
                target="_blank"
              >
               {elem}
              </a>
            </ListItem>))}

            {links.map(elem => (  <ListItem key={elem} className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
                target="_blank"
              >
               {elem}
              </a>
            </ListItem>))}
            
         
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , by{" "}
          <a
            href="#?ref=mkr-footer"
            className={aClasses}
            target="_blank"
          >
            Shoesclimate 
          </a>{" "}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
