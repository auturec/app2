import * as React from 'react';

function SvgT({ height = 512, width = 512, style }) {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width} style={style}>
      <g data-name="Layer 2">
        <text
          transform="matrix(1.03 0 0 1 0 471.3)"
          fontSize={549.99}
          fill="#bb191e"
          fontFamily="OpenSans-Bold,Open Sans"
          fontWeight={700}
          data-name="t for turtle"
        >
          T
        </text>
      </g>
    </svg>
  );
}

export default SvgT;
