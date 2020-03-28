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

const DisplayRandom = props => {
  const { gameState } = props;
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid container justify="center" spacing={24}>
        {gameState.ans.map((val, ind) => {
          const src = gameState.list[val];
          return (
            <Grid item key={val}>
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
      <Box fontWeight="fontWeightBold" fontFamily="NewRoman">
        --Choose tiles in the first line that match the tiles in the second
        line--
      </Box>
    </Grid>
  );
};

export default DisplayRandom;
