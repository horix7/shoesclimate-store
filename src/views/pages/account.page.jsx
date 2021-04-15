
import React, { Component, Fragment } from 'react'
import { Button,Typography } from "@material-ui/core"
import Header from 'components/Header/Header'
import HeaderLinks from 'components/Header/HeaderLinks'
import LogoImg from 'assets/img/logo.png'
import { ExitToApp, LocalSeeOutlined } from "@material-ui/icons";
import OrderTables from "views/Components/tables/orderTables"
import { createCart } from "../../services/cartServices";


export default class ProductPage extends Component {

    componentDidMount() {
       !localStorage.AUTH_TOKEN ? location.href = "/" : null

       localStorage.cart ? this.createUserCart() : null 
    }

    createUserCart = () => {
        try {
            if(localStorage.cart) {
                const carts = JSON.parse(localStorage.cart) 
                let count = 0 
                const cartsforEach = async (elem) => {

                    await createCart(carts[elem])
                        if(count == carts.length - 1) {
                            return 
                        }else {
                            count++
                            cartsforEach(count)
                        }
                }
                cartsforEach(count)

                localStorage.removeItem("cart")
                localStorage.removeItem("displayCart")
            }
        } catch {
              return 
           }

    }

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
                    <Button onClick={() => {
                        localStorage.removeItem("AUTH_TOKEN")
                        location.href = "/"
                    }} endIcon={< ExitToApp />}> logout  </Button>
                </div>

                <div className="orders">
                    <OrderTables />
                </div>
                </div>
                {/* <Footer  />   */}
            </Fragment>
        )
    }
}



