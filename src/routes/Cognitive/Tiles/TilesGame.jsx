import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '100px',
    background: '#007700'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.grey
  }
}));

export const TilesGame = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseLine />
      <Container component="main" maxWidth="sm">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Tiles</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Start</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Here</Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TilesGame;
