import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

const HeaderTitle = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box component="span" m={3}>
        <Typography variant="h5" gutterBottom>
          Tiles Game!
        </Typography>
      </Box>
    </div>
  );
};

export default HeaderTitle;
