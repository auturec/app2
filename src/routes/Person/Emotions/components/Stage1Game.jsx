import React from 'react';
import { Grid, makeStyles, Box, CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1
  },

  cardmedia: {
    display: 'flex'
  }
});

const Stage1Game = props => {
  const { gameState } = props;

  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid container justify="center" spacing={0}>
        {gameState.map((val, ind) => {
          const src = gameState[val];
          return (
            <Grid item key={val} xs={6} sm={3}>
              <Box m="2rem">
                <CardMedia
                  className={classes.cardmedia}
                  component="img"
                  src={src}
                  image={src}
                  alt={ind.toString()}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Box fontWeight="fontWeightBold" fontFamily="Roboto">
        Match the pattern of tiles seen above!
      </Box>
    </Grid>
  );
};

export default Stage1Game;
