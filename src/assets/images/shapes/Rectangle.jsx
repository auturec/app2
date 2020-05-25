import * as React from 'react';

function Rectangle({ height = 500, width = 500 }) {
  return (
    <svg height={height} viewBox="0 0 500 500" width={width}>
      <rect x="20" y="20" width="300" height="225" fill="green" />
    </svg>
  );
}

export default Rectangle;
