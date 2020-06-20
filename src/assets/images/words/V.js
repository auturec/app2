import * as React from 'react';

function SvgV({ height = 512, width = 512, style }) {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width} style={style}>
      <g data-name="Layer 2">
        <text
          transform="translate(0 457.14)"
          fontSize={533.46}
          fill="#410869"
          fontFamily="OpenSans-Bold,Open Sans"
          fontWeight={700}
          data-name="V for violin"
        >
          V
        </text>
      </g>
    </svg>
  );
}

export default SvgV;
