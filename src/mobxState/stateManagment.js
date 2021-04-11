import React, { createContext } from "react";
import { useLocalStore } from "mobx-react";


export const StoreContext = createContext();


export const UniversalState = ( {children }) => {

    const store = useLocalStore(() => ({
        cart: {
            
        },
        loginModel: false,
        openLogin: () => loginModel = true,
        updateProduct: newCart =>  {
            cart.product = {...newCart}
        },
    }));

    return (
        <StoreContext.Provider value={store}> {children} </StoreContext.Provider>
    )
} 

