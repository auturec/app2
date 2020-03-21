import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useToasts } from 'react-toast-notifications';

import { TilesImageMap } from '../TilesImageMap';

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

const Gamepapers = props => {
  const {
    ansState,
    setAnswer,
    gameState,
    setGameState,
    setDisplay,
    randomList,
    shuffleArray,
    getFourRandomFromArray
  } = props;
  const { addToast } = useToasts();
  const handleAnswer = e => {
    e.preventDefault();
    if (ansState.list.every(val => gameState.ans.includes(val))) {
      addToast(`Nice work matching the patterns!`, {
        appearance: 'success',
        autoDismiss: true
      });
    } else {
      addToast(`Please check your answer and try again!`, {
        appearance: 'error',
        autoDismiss: true
      });
    }
  };

  const handleReset = e => {
    e.preventDefault();
    addToast(`Game has been reset!`, {
      appearance: 'warning',
      autoDismiss: true
    });
    // Reset game
    setGameState({
      ...gameState,
      list: TilesImageMap(),
      ans: getFourRandomFromArray(TilesImageMap())
    });
    // Reset Display
    setDisplay({
      ...randomList,
      display: shuffleArray(gameState.ans)
    });
  };

  const handleClearAll = e => {
    e.preventDefault();
    setAnswer({
      ...ansState,
      list: [-1, -1, -1, -1],
      pos: 0
    });
    addToast(`Selections has been cleared`, {
      appearance: 'warning',
      autoDismiss: true
    });
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseLine />
      <Container component="main" maxWidth="sm">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Button onClick={e => handleAnswer(e)}>Check Answer</Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Button onClick={e => handleReset(e)}>Reset Game</Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Button onClick={e => handleClearAll(e)}>
                Clear All Selections
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Gamepapers;
