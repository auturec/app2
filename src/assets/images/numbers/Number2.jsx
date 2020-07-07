import * as React from 'react';

function Number2({ height = 512, width = 512, style }) {
  return (
    <svg viewBox="0 0 768 768" height={height} width={width} style={style}>
      <text
        transform="translate(198.49 609.57)"
        fontSize={650}
        fill="#2c1e1a"
        fontFamily="OpenSans-Bold,Open Sans"
        fontWeight={700}
      >
        2
      </text>
    </svg>
  );
}

export default Number2;
