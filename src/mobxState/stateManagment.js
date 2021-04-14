import React, { createContext } from "react";
import { useLocalStore } from "mobx-react";

export const StoreContext = createContext();

export const UniversalState = ( {children }) => {

    const store = useLocalStore(() => ({
        cart: {
            
        },
        shipping: {
            location: "rwanda "
        },
        checkout: {
            current: 1,
            active: {
                address: false,
                payment: false,
                order: false
            }
        },
        updateStep: (page) => {
            store.checkout.current = page
        },
        activateNextBtn: (step) => {
            store.checkout.active[step] =  true
        },
        loginModal: false,
        openModal: () => {
            store.loginModal = true 
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

