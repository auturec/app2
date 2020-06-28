import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppLogo from 'assets/Logo/AppLogo.svg';
import CharacterSlide2 from 'assets/Onboarding/CharacterSlide2.svg';
import CharacterSlide1 from 'assets/Onboarding/CharacterSlide1.svg';
import CharacterSlide3 from 'assets/Onboarding/CharacterSlide3.svg';
import Slide from './Slide';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(8, 2, 4, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 6, 4, 6),
    },
  },
  appLogo: {
    width: '200px',
    display: 'block',
    margin: '0 auto',
    paddingBottom: theme.spacing(4),
  },
}));

function Onboarding() {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <img src={AppLogo} alt="" className={classes.appLogo} />
      <Grid container>
        <Grid item xs={12} md={4}>
          <Slide
            img={CharacterSlide1}
            header="Games and activities"
            subheader="Expert certified activities created specially for your special child"
          />
        </Grid>
        <Grid item xs={12} md={4} py={2}>
          <Slide
            img={CharacterSlide2}
            header="Child profiling (coming soon)"
            subheader="Track your child's progress"
          />
        </Grid>
        <Grid item xs={12} md={4} py={2}>
          <Slide
            img={CharacterSlide3}
            header="Forum and community (coming soon)"
            subheader="Made just for you"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Onboarding;
