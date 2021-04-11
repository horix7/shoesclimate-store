import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip"
import { userLogin, userSignUp } from "../../services/authServices";
import { CircularProgress } from '@material-ui/core';
import { Alert } from "@material-ui/lab"

const useStyles = makeStyles(styles);

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const [register, setRegister ] = React.useState(false)

  const [state, setState] = React.useState({})
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event ) => {

    let newState = {...state}
    newState[event.target.id] = event.target.value

    setState({...newState})

  }

  const [loading, setLoading] = React.useState(false)
  const [error, seterror] = React.useState({status: false , message: null})
  const [success, setsuccess] = React.useState({status: false, message: null})

  const hanldeSubmit = async () => {
    setLoading(true)
    try {
      if(register) {
        const check = Object.values(state).length >= 6
        if(check) {
        await userSignUp(state)
        setsuccess({status: true, message: "registered successfully"})
        seterror({status: false, message: null})
        location.href = "/account"
  
        }else {
      seterror({status: true, message: "validation Error"})
      setLoading(false)

        }
      }else {
        const login = await userLogin(state)

        setsuccess({status: true, message: "login successfully"})
        seterror({status: false, message: null})
        location.href = "/account"
      }
    } catch (error) {
      setLoading(false)
      seterror({status: true, message: "incorrect email or password"})
    }
  }

  const classes = useStyles();


  return (
    <div>
       {!props.className ?  <Tooltip
          id="account"
          title="account"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            onClick={() => {
              !localStorage.AUTH_TOKEN ? handleClickOpen() : location.href = "/account"
            }}
            className={props.className ? props.className : classes.navLink}
          >
            <i className={classes.socialIcons + " fas fa-user"} />
          </Button>
        </Tooltip> : <Button
            color="black"
            onClick={() => {
              !localStorage.AUTH_TOKEN ? handleClickOpen() : location.href = "/account"
            }}
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fas fa-user"} />
          </Button> }
      <Dialog open={open} onClose={handleClose} maxWidth={"xs"} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"> Account </DialogTitle>
        <DialogContent>
           
         {success.status ?  <Alert severity="success" color="success">
            {success.message}
          </Alert> : null}

               
         {error.status ?  <Alert severity="error" color="error">
            {error.message}
          </Alert> : null}

          <DialogContentText>


          </DialogContentText>
        
         { register ?  <div className="hidden-signup">
          <TextField
            onChange={handleInputChange}
            margin="dense"
            autoFocus
            id="firstName"
            label="first name"
            variant="outlined"
            fullWidth
          />
          <TextField
            onChange={handleInputChange}
            margin="dense"
            id="lastName"
            label="last name"
            variant="outlined"
            fullWidth
          />

        <TextField
            onChange={handleInputChange}
            margin="dense"
            id="phone"
            label="phone number"
            variant="outlined"
            fullWidth
          />
          <TextField
            onChange={handleInputChange}
            margin="dense"
            id="location"
            label="country"
            variant="outlined"
            fullWidth
          />
          </div> : null }

          <TextField
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            label="password"
            type="password"
            variant="outlined"
            fullWidth
          />

    { register ? 

<TextField
margin="dense"
id="passwordConfirmation"
onChange={handleInputChange}
label="confirm password"
type="password"
variant="outlined"
fullWidth
/> : null }


        <div className="links-holder">
            <span onClick={() => setRegister(!register)}> {!register ? "register" : "login"} </span> here 
        </div>
        <Button onClick={handleClose} style={{marginTop: "10px"}} fullWidth onClick={hanldeSubmit} color="primary" variant="outlined">
            {loading ? <CircularProgress /> : register ? "register" : "login"}
          </Button>
        </DialogContent>
        <DialogActions>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}

