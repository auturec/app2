import * as React from 'react';
import star from './star.png';

function Star({ height = 512, width = 512, style }) {
  return (
    <img
      src={star}
      height={height}
      alt="star"
      viewBox="0 0 512 512"
      width={width}
      style={style}
    />
  );
}

export default Star;
