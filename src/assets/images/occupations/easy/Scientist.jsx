import React from 'react';

import ScientistJpg from './Scientist.jpg';

const Scientist = ({ style }) => {
  return <img src={ScientistJpg} style={style} alt="Scientist" />;
};

export default Scientist;
