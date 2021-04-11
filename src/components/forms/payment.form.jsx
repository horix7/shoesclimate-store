import React, { Component, Fragment } from "react";
import { TextField , FormControl } from "@material-ui/core"

export default class PaymentForm extends Component {

    state = {

    }

    render() {

        return (
            <Fragment>

                <FormControl>
                <TextField
                        variant="outlined"
                        className="text-fields"  
                        label="delivery location "
                        id="location"
                />

                <TextField
                        variant="outlined"
                        className="text-fields"  
                        label="street address "
                        id="street"
                    />

                <TextField
                        variant="outlined"
                        className="text-fields"  
                        label="messages"
                        id="message"
                    />
                </FormControl>

            </Fragment>
        )
    }
}