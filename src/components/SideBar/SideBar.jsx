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
import Typography from '@material-ui/core/Typography';

import { publicRoutes, gameRoutes, ONBOARDING } from 'constants/routes';
import { useGame } from 'contexts/GameContext';

const useStyles = makeStyles((theme) => ({
  drawer: {
    background: '#9ac555',
  },
  list: {
    width: 250,
    background: '#9ac555',
    height: '100%',
  },
  listItem: {
    fontSize: '18px',
    color: 'black',
    fontFamily: 'Open Sans',
  },
  fullList: {
    width: 'auto',
  },
  nested: {
    paddingLeft: theme.spacing(2),
    color: 'black',
    fontSize: '16px',
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
        <Link
          to={ONBOARDING}
          key="public-link-onboarding"
          onClick={toggleDrawer(side, false)}
        >
          <ListItem button>
            <ListItemText
              disableTypography
              primary={
                <Typography type="h1" className={classes.listItem}>
                  Home
                </Typography>
              }
            />
          </ListItem>
        </Link>
        <ListItem button onClick={handleClick}>
          <ListItemText
            disableTypography
            primary={
              <Typography type="h1" className={classes.listItem}>
                Games
              </Typography>
            }
          />
          {open ? (
            <ExpandLess className={classes.listItem} />
          ) : (
            <ExpandMore className={classes.listItem} />
          )}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {gameRoutes.map((route) => (
            <Link
              to={route.path}
              key={`public-link-${route.name}`}
              onClick={(event) => {
                setIsResettingGame(true);
                toggleDrawer(side, false)(event);
              }}
            >
              <ListItem button>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography type="h1" className={classes.nested}>
                      {route.name}
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
          ))}
        </Collapse>
        {publicRoutes.map((route) => (
          <Link
            to={route.path}
            key={`public-link-${route.name}`}
            onClick={toggleDrawer(side, false)}
          >
            <ListItem button>
              <ListItemText
                disableTypography
                primary={
                  <Typography type="h1" className={classes.listItem}>
                    {route.name}
                  </Typography>
                }
              />
            </ListItem>
          </Link>
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
