import * as React from 'react';
import circle from './circle.png';

function Circle({ height = 512, width = 512, style }) {
  return (
    <img
      src={circle}
      height={height}
      alt="rectangle"
      viewBox="0 0 512 512"
      width={width}
      style={style}
    />
  );
}

export default Circle;
