import * as React from 'react';
import square from './square.png';

function Square({ height = 512, width = 512, style }) {
  return (
    <img
      src={square}
      height={height}
      alt="square"
      viewBox="0 0 512 512"
      width={width}
      style={style}
    />
  );
}

export default Square;
