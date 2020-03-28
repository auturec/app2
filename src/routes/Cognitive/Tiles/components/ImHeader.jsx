import React from 'react';
import { Grid, makeStyles, Box, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1
  },

  button: {
    margin: 20,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }
});

const ImHeader = props => {
  const { handleImageClick, randomList, gameState } = props;
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid container justify="center" spacing={24}>
        {randomList.display.map(val => {
          return (
            <Grid key={val} item>
              <Button
                size="medium"
                variant="outlined"
                className={classes.button}
                onClick={e => handleImageClick(e, val)}
              >
                <img src={gameState.list[val]} alt={gameState.list[val]} />
              </Button>
            </Grid>
          );
        })}
      </Grid>
      <Box fontWeight="fontWeightBold" fontFamily="NewRoman">
        --Choose your tiles above by clicking on it--
      </Box>
    </Grid>
  );
};

export default ImHeader;
