import React, { createContext } from "react";
import { useLocalStore } from "mobx-react";

export const StoreContext = createContext();

export const UniversalState = ( {children }) => {

    const store = useLocalStore(() => ({
        cart: {
            
        },
        shipping: {
            location: "",
            street: "",
            message: "",
            customer: ""
        },
        checkout: {
            current: 0,
            active: {
                "delivery address": false,
                "confirm payment": true,
                "place order": false
            }
        },
        updateStep: (page) => {
            store.checkout.current = page
        },
        activateNextBtn: (step) => {
            store.checkout.active[step] =  true
        },
        loginModal: false,
        openCart: false,
        openModal: (open = true) => {
            store.loginModal = open 
        },
        updateShipping: (newInfo) => {
            store.shipping = {...newInfo}
        },
        updateProduct: newCart =>  {
            store.product = {...newCart}
        },
    }));

    return (
        <StoreContext.Provider value={store}> {children} </StoreContext.Provider>
    )
} 

