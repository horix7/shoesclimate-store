/*eslint-disable*/
import React, {Fragment} from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem, Button } from "@material-ui/core";
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
    "email": 'contact@shoesclimate.com',
    phone: "0782374832"
  }


  const links = ["About us", "Contact us", "Shipping" ]
  const social = ["instagram", "facebook"]
  
  return (

    <Fragment>

      <div className="sizechartlink">

      <h3> Size </h3>
      <p> All sizes listed on our products are men sizes click to check our Size Conversion Chart</p>

      <Button variant="contained" color="primary" href="/size"> Size Chart </Button>
      </div>



    <footer  className="footer">

        <List>
          {Object.values(contacts).map(elem => (  <ListItem key={elem} className="footer-list">
              <a
                href="#"
                className="footer-link"
                target="_blank"
              >
               {elem}
              </a>
            </ListItem>))}

          </List>
          <List>


            {links.map(elem => (  <ListItem key={elem} className="footer-list">
              <a
                href="#"
                className="footer-link"
                target="_blank"
              >
               {elem}
              </a>
            </ListItem>))}
            
         
          </List>

          <List>
          {Object.values(social).map(elem => (  <ListItem key={elem} className="footer-list">
              <a
                href="#"
                className="footer-link"
                target="_blank"
              >
               {elem}
              </a>
            </ListItem>))}

          </List>
          <div></div>
    </footer>

    <div className="bottomFooter">
          &copy; {1900 + new Date().getYear()} , all right deserved {" "}
          <a
            href="/"
            className={aClasses}
            target="_blank"
          >
            shoesclimate 
          </a>{" "}
        </div>
    </Fragment>

  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
