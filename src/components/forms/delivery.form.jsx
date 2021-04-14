import React, { useState, Fragment, useContext } from "react";
import { TextField, Button , FormControl } from "@material-ui/core"
import { StoreContext } from "../../mobxState/stateManagment";


export default function  DeliveryForm  () {
        const store = useContext(StoreContext)

        const [state, setState] = useState({
            location: store.shipping.location,
            street: store.shipping.street,
            message: store.shipping.store
        })

        const handleInputChange = (event ) => {
            let newState = {...state}
            newState[event.target.id] = event.target.value

            setState({...newState})
            store.updateShipping(newState)
            if(Object.values(newState).some(elem => elem == null)) {
                return
            }else {
                store.activateNextBtn("delivery address")
            }
        }



        return (
            <Fragment>

                <FormControl>
                <TextField
                        variant="outlined" 
                        className="text-fields" 
                        label="delivery location "
                        onChange={handleInputChange}
                        value={state.location}
                        id="location"
                />

                <TextField
                        variant="outlined" 
                        className="text-fields" 
                        label="street address "
                        onChange={handleInputChange}
                        value={state.street}
                        id="street"
                    />

                <TextField
                        variant="outlined" 
                        className="text-fields" 
                        label="messages"
                        onChange={handleInputChange}
                        value={state.message}
                        id="message"
                    />
                </FormControl>

            </Fragment>
        )
}