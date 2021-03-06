import * as React from 'react';
import rectangle from './rectangle.png';

function Rectangle({ height = 512, width = 512, style }) {
  return (
    <img
      src={rectangle}
      height={height}
      alt="rectangle"
      viewBox="0 0 512 512"
      width={width}
      style={style}
    />
  );
}

export default Rectangle;
