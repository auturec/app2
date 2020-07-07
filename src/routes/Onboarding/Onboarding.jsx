import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Carousel } from 'antd';
import AppLogo from 'assets/Logo/AppLogo.svg';
import CharacterSlide2 from 'assets/Onboarding/CharacterSlide2.svg';
import CharacterSlide1 from 'assets/Onboarding/CharacterSlide1.svg';
import CharacterSlide3 from 'assets/Onboarding/CharacterSlide3.svg';
import Slide from './Slide';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
  },
  appLogo: {
    width: '200px',
    display: 'block',
    margin: '0 auto',
  },
}));

function Onboarding() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <img src={AppLogo} alt="" className={classes.appLogo} />
        <Carousel autoplay>
          <Slide
            img={CharacterSlide1}
            header="Games and activities"
            subheader="Expert certified activities created specially for your special child"
          />
          <Slide
            img={CharacterSlide2}
            header="Child profiling (coming soon)"
            subheader="Track your child's progress"
          />
          <Slide
            img={CharacterSlide3}
            header="Forum and community (coming soon)"
            subheader="Made just for you"
          />
        </Carousel>
      </div>
    </Container>
  );
}

export default Onboarding;
