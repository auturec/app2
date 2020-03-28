import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

const Title = props => {
  const { stage } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box component="span" m={3}>
        <Typography variant="h5" gutterBottom>
          Emotions Game!
        </Typography>
        <Button variant="outlined" color="primary" disabled>
          You are at stage {stage}
        </Button>
      </Box>
    </div>
  );
};

export default Title;
