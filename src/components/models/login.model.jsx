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

    console.log(state)
    setState({...newState})

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
            onClick={handleClickOpen}
            className={props.className ? props.className : classes.navLink}
          >
            <i className={classes.socialIcons + " fas fa-user"} />
          </Button>
        </Tooltip> : <Button
            color="black"
            onClick={handleClickOpen}
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fas fa-user"} />
          </Button> }
      <Dialog open={open} onClose={handleClose} maxWidth={"xs"} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login To Your Account </DialogTitle>
        <DialogContent>
            Create An Account For Easy Checkout 
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

        <div className="links-holder">
            <span onClick={() => setRegister(!register)}> {!register ? "register" : "login"} </span> here 
        </div>
        <Button onClick={handleClose} style={{marginTop: "10px"}} fullWidth color="primary" variant="outlined">
            {register ? "register" : "login"}
          </Button>
        </DialogContent>
        <DialogActions>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}

