import React, { createContext } from "react";
import { useLocalStore } from "mobx-react";

export const StoreContext = createContext();


export const UniversalState = ( {children }) => {

    const store = useLocalStore(() => ({
        cart: {
            title:'tittle',
            description:'<p> description </p>',
            price: 120,
            imageUrl:'https://i.stack.imgur.com/GsDIl.jpg'
        },
        updateProduct: newProduct =>  {
            store.product = {...newProduct}
        },
    }));

    return (
        <StoreContext.Provider value={store}> {children} </StoreContext.Provider>
    )
} 

