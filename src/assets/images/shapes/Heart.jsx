import * as React from 'react';
import heart from './heart.png';

function Heart({ height = 512, width = 512, style }) {
  return (
    <img
      src={heart}
      height={height}
      alt="heart"
      viewBox="0 0 512 512"
      width={width}
      style={style}
    />
  );
}

export default Heart;
