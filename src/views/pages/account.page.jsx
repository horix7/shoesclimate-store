
import React, { Component, Fragment } from 'react'
import { Button,Typography } from "@material-ui/core"
import Header from 'components/Header/Header'
import HeaderLinks from 'components/Header/HeaderLinks'
import LogoImg from 'assets/img/logo.png'
import { ExitToApp } from "@material-ui/icons";

export default class ProductPage extends Component {

    render() {

        return (
            <Fragment>
                  <Header
                    brand={<Fragment> <img className="nav-logo" src={LogoImg} /> <span className="nav-text"> SHOES CLIMATE </span></Fragment>}
                    rightLinks={<HeaderLinks />}
                    fixed
                    color="white"
                    changeColorOnScroll={{
                    height: 300,
                    color: "white"
                    }}
                />
               <div className="account">
                <div className="account-header">
                    <Typography variant="button"> Orders</Typography>
                    <Button endIcon={< ExitToApp />}> logout  </Button>
                </div>

                <div className="orders">
                    
                </div>
                </div>
                {/* <Footer  />   */}
            </Fragment>
        )
    }
}



