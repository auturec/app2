import React from 'react';

import AstronautJpg from './Astronaut.jpg';

const Astronaut = ({ style }) => {
  return <img src={AstronautJpg} style={style} alt="Astronaut" />;
};

export default Astronaut;
