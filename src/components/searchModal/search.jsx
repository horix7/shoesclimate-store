import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import TexField from '@material-ui/core/TextField'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [searchQuery, setSearchQuery] = React.useState("")
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    //   onClick={toggleDrawer(anchor, false)}
    //   onKeyDown={toggleDrawer(anchor, false)}
      style={{padding: "10px",display: "grid", gridTemplateColumns: "75% 20%", gridColumnGap: "5%"}}
    >
        <TexField value={searchQuery} onChange={(e) => {
          setSearchQuery(e.target.value)
        }} label="search" style={{width: "100%"}}  fullWidth variant="outlined" autoFocus /> 
        <Button variant="contained"  href={"/search/" + searchQuery} style={{maxWidth: "100px" ,backgroundColor: "black", color: "white"}}> Search</Button>

    </div>
  );

  return (
    <div>
      {['top'].map((anchor) => (
          <>
            <Button
            color="transparent"
            target="_blank"
            className={props.classNames}
            onClick={toggleDrawer("top", true)} 
          >

            <i className={props.iconClassName + " fas fa-search"} />
          </Button>

            <SwipeableDrawer
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
            onOpen={toggleDrawer("top", true)}
          >
            {list("top")}
          </SwipeableDrawer>
          </>
     ))}

       
    </div>
  );
}
