import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CharacterSlide1 from '../../assets/Onboarding/CharacterSlide1.svg';

const useStyles = makeStyles(() => ({
  characterSlide: {
    height: '300px',
    margin: '0 auto',
    marginTop: '30px',
  }
}));

function Slide({ header, subheader }) {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <img src={CharacterSlide1} alt="" className={classes.characterSlide} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>{header}</div>
          <div>{subheader}</div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Slide;