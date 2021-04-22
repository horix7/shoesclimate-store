import React, { Component, Fragment } from 'react'
import Header from 'components/Header/Header'
import HeaderLinks from 'components/Header/HeaderLinks'
import LogoImg from 'assets/img/logo.png'
import Footer from 'components/Footer/Footer'
import { List, ListItem } from "@material-ui/core";


export default class Contact extends Component {

    render () {

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
                <div  className="size-chart" >

                <h2> Contact Us </h2>
                <div className="contact-info">
                    <List>
                        <ListItem>
                            <div className="two-end">
                                <p>email : </p> <p> shoesclimate@gmail.com </p>
                            </div>
                        </ListItem>

                        <ListItem>
                            <div className="two-end">
                                <p>phone : </p> <p> +250782374832 </p>
                            </div>
                        </ListItem>
                    </List>
                </div>
                </div>
            
                <Footer />
            </Fragment>
        )
    }
}
