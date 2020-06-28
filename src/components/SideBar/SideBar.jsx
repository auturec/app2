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
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

import { publicRoutes, gameRoutes, ONBOARDING } from 'constants/routes';
import { useGame } from 'contexts/GameContext';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    background: '#fafafa',
    height: '100%',
  },
  listItem: {
    color: theme.palette.primary.dark,
    fontFamily: 'Open Sans',
    fontSize: '1.125rem',
    fontWeight: 600,
    margin: '0',
  },
  fullList: {
    width: 'auto',
  },
  nested: {
    color: theme.palette.primary.dark,
    fontSize: '1rem',
    fontWeight: 600,
    paddingLeft: theme.spacing(2),
    margin: '0',
  },
}));

const SideBar = () => {
  const { setIsResettingGame } = useGame();
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleDrawer = (side, isDrawerOpen) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [side]: isDrawerOpen });
  };

  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button key="public-link-onboarding">
          <ListItemText
            disableTypography
            primary={
              <Link to={ONBOARDING} onClick={toggleDrawer(side, false)}>
                <h2 className={classes.listItem}>Home</h2>
              </Link>
            }
          />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemText
            disableTypography
            primary={<h2 className={classes.listItem}>Games</h2>}
          />
          {open ? (
            <ExpandLess className={classes.listItem} />
          ) : (
            <ExpandMore className={classes.listItem} />
          )}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {gameRoutes.map((route) => (
            <ListItem button key={`public-link-${route.name}`}>
              <ListItemText
                disableTypography
                primary={
                  <Link
                    to={route.path}
                    onClick={(event) => {
                      setIsResettingGame(true);
                      toggleDrawer(side, false)(event);
                    }}
                  >
                    <h2 className={classes.nested}>{route.name}</h2>
                  </Link>
                }
              />
            </ListItem>
          ))}
        </Collapse>
        {publicRoutes.map((route) => (
          <ListItem button key={`public-link-${route.name}`}>
            <ListItemText
              disableTypography
              primary={
                <Link to={route.path} onClick={toggleDrawer(side, false)}>
                  <h2 className={classes.listItem}>{route.name}</h2>
                </Link>
              }
            />
          </ListItem>
        ))}
      </List>
      <Divider />
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
};

export default SideBar;
