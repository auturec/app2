import React from 'react';

import './Colors.scss';

const ColorBox = ({ color }) => {
  return <div className={`colors__square colors__square--${color}`} />;
};

export default ColorBox;
