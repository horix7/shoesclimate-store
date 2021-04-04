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


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();


  return (
    <div>
        <Tooltip
          id="account"
          title="account"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            onClick={handleClickOpen}
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fas fa-user"} />
          </Button>
        </Tooltip>
      <Dialog open={open} onClose={handleClose} maxWidth={"xs"} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login To Your Account </DialogTitle>
        <DialogContent>
            Create An Account For Easy Checkout 
          <DialogContentText>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            variant="outlined"
            fullWidth
          />

        <TextField
            margin="dense"
            id="password"
            label="password"
            type="password"
            variant="outlined"
            fullWidth
          />

        <div className="links-holder">
            <span> register </span> for new users 
        </div>
        <Button onClick={handleClose} style={{marginTop: "10px"}} fullWidth color="primary" variant="outlined">
            login
          </Button>
        </DialogContent>
        <DialogActions>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}
