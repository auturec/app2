import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ColorBox from './ColorBox';
import './Colors.scss';

const useStyles = makeStyles({
  container: {
    marginTop: '50px',
    marginBottom: '100px',
  },
});

const TapColors = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <ColorBox />
        </Grid>
        <Grid item xs={6}>
          <ColorBox />
        </Grid>
      </Grid>{' '}
    </div>
  );
};

export default TapColors;
