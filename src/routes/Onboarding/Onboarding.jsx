import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Carousel } from 'antd';

import Slide from './Slide'
import NameLogo from 'assets/Logo/Name.svg';
import CharacterSlide1 from 'assets/Onboarding/CharacterSlide1.svg';
import CharacterSlide2 from 'assets/Onboarding/CharacterSlide2.svg';
import CharacterSlide3 from 'assets/Onboarding/CharacterSlide3.svg';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(10),
  },
  nameLogo: {
    margin: '0px auto',
  }
}))

function Onboarding() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={NameLogo} alt="" className={classes.nameLogo}/>
        <Carousel autoplay>
          <Slide img={CharacterSlide1} header="Child Profiling" subheader="Track Your Child's Progess" />
          <Slide img={CharacterSlide2} header="Games and Activities" subheader="Expert Certified Activities created specially for your Special Child"/>
          <Slide img={CharacterSlide3} header="Forum and Community" subheader="Made Just for You"/>
        </Carousel>
      </div>
    </Container>
  );
}

export default Onboarding;
