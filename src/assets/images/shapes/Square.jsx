import * as React from 'react';

function Square({ height = 500, width = 500 }) {
  return (
    <svg height={height} viewBox="0 0 500 500" width={width}>
      <rect x="20" y="20" width="150" height="150" fill="red" />
    </svg>
  );
}

export default Square;
