import * as React from 'react';

function SvgK({ height = 512, width = 512, style }) {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width} style={style}>
      <g data-name="Layer 2">
        <text
          transform="translate(0 465.86)"
          fontSize={543.64}
          fill="#410869"
          fontFamily="OpenSans-Bold,Open Sans"
          fontWeight={700}
          data-name="K for key"
        >
          K
        </text>
      </g>
    </svg>
  );
}

export default SvgK;
