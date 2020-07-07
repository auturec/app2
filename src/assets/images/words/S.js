import * as React from 'react';

function SvgS({ height = 512, width = 512, style }) {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width} style={style}>
      <g data-name="Layer 2">
        <text
          transform="matrix(1.04 0 0 1 0 474.28)"
          fontSize={553.47}
          fill="#005eb7"
          fontFamily="OpenSans-Bold,Open Sans"
          fontWeight={700}
          data-name="S for star"
        >
          S
        </text>
      </g>
    </svg>
  );
}

export default SvgS;
