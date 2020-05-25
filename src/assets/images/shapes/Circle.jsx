import * as React from 'react';

function Circle({ height = 500, width = 500 }) {
  return (
    <svg height={height} viewBox="0 0 500 500" width={width}>
      <circle cx="150" cy="150" r="125" fill="yellow" />
    </svg>
  );
}

export default Circle;
