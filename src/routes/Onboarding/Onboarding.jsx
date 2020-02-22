import React from 'react';
import { Carousel } from 'antd';
import Slide from './Slide'

function Onboarding() {
  return (
    <Carousel autoplay>
      <Slide header="Slide 1" subheader="Slide 1" />
      <Slide header="Slide 2" subheader="Slide 2"/>
      <Slide header="Slide 3" subheader="Slide 3"/>
    </Carousel>
  );
}

export default Onboarding;
