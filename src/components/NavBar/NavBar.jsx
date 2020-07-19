import React from 'react';
import { useLocation } from 'react-router-dom';
import { allRoutes } from 'constants/routes';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SideBar from 'components/SideBar';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    height: '64px',
  },
  appBar: {
    background: theme.palette.primary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    paddingLeft: theme.spacing(2),
    fontFamily: 'Open Sans',
    fontWeight: 600,
    display: 'block',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const location = useLocation().pathname;

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <SideBar />
          <Typography className={classes.title} variant="h6" noWrap>
            {allRoutes.get(location)}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
