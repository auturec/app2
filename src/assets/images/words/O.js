import * as React from 'react';

function SvgO({ height = 512, width = 512, style }) {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width} style={style}>
      <g data-name="Layer 2">
        <text
          transform="translate(0 499.24)"
          fontSize={582.59}
          fill="#005eb7"
          fontFamily="OpenSans-Bold,Open Sans"
          fontWeight={700}
          data-name="O for orange"
        >
          O
        </text>
      </g>
    </svg>
  );
}

export default SvgO;
