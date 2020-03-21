import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import SingleOption from './SingleOption';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const MultipleOptions = ({ gameState, handleOnClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {gameState.state.map(val => {
          return (
            <Grid item xs={3} key={val.image}>
              <Paper className={classes.paper}>
                <SingleOption
                  image={val.image}
                  category={val.theme}
                  handleOnClick={handleOnClick}
                />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default MultipleOptions;
