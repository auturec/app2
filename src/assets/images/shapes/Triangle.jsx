import * as React from 'react';
import triangle from './triangle.png';

function Triangle({ height = 512, width = 512, style }) {
  return (
    <img
      src={triangle}
      height={height}
      alt="rectangle"
      viewBox="0 0 512 512"
      width={width}
      style={style}
    />
  );
}

export default Triangle;
