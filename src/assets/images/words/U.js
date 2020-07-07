import * as React from 'react';

function SvgU({ height = 512, width = 512, style }) {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width} style={style}>
      <g data-name="Layer 2">
        <text
          transform="translate(0 490.91)"
          fontSize={572.87}
          fill="#890055"
          fontFamily="OpenSans-Bold,Open Sans"
          fontWeight={700}
          data-name="U for umbrella"
        >
          U
        </text>
      </g>
    </svg>
  );
}

export default SvgU;
