import * as React from 'react';

function SvgJ({ height = 512, width = 512, style }) {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width} style={style}>
      <g data-name="Layer 2">
        <text
          transform="matrix(1.03 0 0 1 38.85 436.59)"
          fontSize={509.48}
          fill="#bb191e"
          fontFamily="OpenSans-Bold,Open Sans"
          fontWeight={700}
          data-name="J for Jug"
        >
          J
        </text>
      </g>
    </svg>
  );
}

export default SvgJ;
