import React, { Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Tooltip from '@material-ui/core/Tooltip'
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";



const useStyles = makeStyles({
  list: {
    width: 400,
  },
  fullList: {
    width: 'auto',
  },
});

const useStyles2 = makeStyles(styles);


export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const classes2 = useStyles2();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const checker = Object.values(state).some(elem => elem === true) 

    if(checker) {

      return ( <div>
   
        <React.Fragment key={'right'}>
          <Button onClick={toggleDrawer('right', true)}> </Button>
          <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
        </React.Fragment>
    </div>)
    } else {
       return (
       <Fragment>
         {props.className ? 
          <Button
          color="transparent"
          className={classes2.navLink}
          onClick={toggleDrawer('right', true)}
          placement={window.innerWidth > 959 ? "top" : "left"}
        >
        <i className={" fas fa-shopping-cart mobile-icon"} />
        <div className="card_count">
          <span>9</span>
        </div>
        </Button>
         :
          <Tooltip
          id="shop"
          title="view Your Cart"
      
          classes={{ tooltip: classes2.tooltip }}
        >
          <Button
            color="transparent"
            className={props.className ? props.className : classes2.navLink}
          >
          <i className={classes2.socialIcons + " fas fa-shopping-cart"} />
          <div className="card_count">
            <span>9</span>
          </div>
          </Button>
        </Tooltip>
  }
       </Fragment>
       )
    }
}
