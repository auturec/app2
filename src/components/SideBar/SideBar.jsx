import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

import {
  publicRoutes,
  privateRoutes,
} from '../../constants/routes'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  listItem: {
    color: 'teal',
  },
  fullList: {
    width: 'auto',
  },
});

const SideBar = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {
          publicRoutes.map((route, index) => (
            <ListItem button key={index}>
              <Link to={route.path}>
                <ListItemText primary={route.name} className={classes.listItem} />
              </Link>
            </ListItem>            
          ))
        }
      </List>
      <Divider />
      <List>
        {
          privateRoutes.map((route, index) => (
            <ListItem button key={index}>
              <Link to={route.path}>
                <ListItemText primary={route.name} className={classes.listItem} />
              </Link>
            </ListItem>            
          ))
        }
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer('left', true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  );
}

export default SideBar;