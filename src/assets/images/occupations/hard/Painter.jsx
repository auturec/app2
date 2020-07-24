import React from 'react';

import PainterJpg from './Painter.jpg';

const Painter = ({ style }) => {
  return <img src={PainterJpg} style={style} alt="Painter" />;
};

export default Painter;
