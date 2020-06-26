import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SideBar from 'components/SideBar';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    height: '56px',
    [theme.breakpoints.up('sm')]: {
      height: '64px',
    },
  },
  appBar: {
    background: '#9ac555',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    paddingLeft: theme.spacing(2),
    fontFamily: 'Open Sans',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <SideBar />
          <Typography className={classes.title} variant="h6" noWrap>
            Auturec
          </Typography>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
