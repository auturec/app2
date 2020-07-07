import * as React from 'react';

function SvgQ({ height = 512, width = 512, style }) {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width} style={style}>
      <g data-name="Layer 2">
        <text
          transform="translate(0 465.87)"
          fontSize={543.64}
          fill="#005eb7"
          fontFamily="OpenSans-Bold,Open Sans"
          fontWeight={700}
          data-name="Q for question"
        >
          Q
        </text>
      </g>
    </svg>
  );
}

export default SvgQ;
