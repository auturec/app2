import * as React from 'react';

function Triangle({ height = 500, width = 500 }) {
  return (
    <svg height={height} viewBox="0 0 500 500" width={width}>
      <polygon points="250,60 100,400 400,400" fill="green" />
    </svg>
  );
}

export default Triangle;
