import React from 'react';
import { Grid, makeStyles, Box } from '@material-ui/core';
import TileImage from './TileImage';
import TilesImage from '../TilesImageMap';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1
  },

  box: {
    borderRadius: 16,
    background: 'linear-gradient(to right, #0083B0, #00B4DB)'
  }
});

// Add onclick to remove just the last tile
const PlayArea = props => {
  const { ansState, gameState } = props;
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid container justify="center" spacing={0}>
        {ansState.list.map((val, index) => {
          return (
            <Grid
              item
              xs={6}
              sm={3}
              key={
                val === -1
                  ? `grey${index}`
                  : gameState.list[val] + index.toString()
              }
            >
              <Box m="2rem" className={classes.box}>
                {val === -1 ? (
                  <TileImage value={TilesImage.GREY_TILE} />
                ) : (
                  <TileImage value={gameState.list[val]} />
                )}
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Box fontWeight="fontWeightBold" fontFamily="Roboto">
        The tiles you chose will be shown here
      </Box>
    </Grid>
  );
};

export default PlayArea;
