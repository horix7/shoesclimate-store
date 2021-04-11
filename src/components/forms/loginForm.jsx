import React, {Component, Fragment } from "react";
import { TextField , Button , CircularProgress} from "@material-ui/core"


export default class LoginForm extends Component {

    render() {
        return (
            <Fragment>
                  { this.props.register ?  <div className="hidden-signup">
          <TextField
            onChange={this.props.handleInputChange}
            margin="dense"
            autoFocus
            id="firstName"
            label="first name"
            variant="outlined"
            fullWidth
          />
          <TextField
            onChange={this.props.handleInputChange}
            margin="dense"
            id="lastName"
            label="last name"
            variant="outlined"
            fullWidth
          />

        <TextField
            onChange={this.props.handleInputChange}
            margin="dense"
            id="phone"
            label="phone number"
            variant="outlined"
            fullWidth
          />
          <TextField
            onChange={this.props.handleInputChange}
            margin="dense"
            id="location"
            label="country"
            variant="outlined"
            fullWidth
          />
          </div> : null }

          <TextField
            onChange={this.props.handleInputChange}
            margin="dense"
            id="email"
            autoFocus
            label="Email Address"
            type="email"
            variant="outlined"
            fullWidth
          />

        

        <TextField
            margin="dense"
            id="password"
            onChange={this.props.handleInputChange}
            label="password"
            type="password"
            variant="outlined"
            fullWidth
          />

    { this.props.register ? 

        <TextField
        margin="dense"
        id="passwordConfirmation"
        onChange={this.props.handleInputChange}
        label="confirm password"
        type="password"
        variant="outlined"
        fullWidth
        /> : null }


        <div className="links-holder">
            <span onClick={() => this.props.setRegister(!this.props.register)}> {!this.props.register ? "register now" : "login here"} </span>  
        </div>
        <Button onClick={this.props.handleClose} style={{marginTop: "10px"}} fullWidth onClick={this.props.hanldeSubmit} color="primary" variant="outlined">
            {this.props.loading ? <CircularProgress /> : this.props.register ? "register" : "login"}
          </Button>
            </Fragment>
        )
    }
}