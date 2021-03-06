import * as React from 'react';

function SvgR({ height = 512, width = 512, style }) {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width} style={style}>
      <g data-name="Layer 2">
        <text
          transform="translate(0 476.2)"
          fontSize={555.7}
          fill="#42066b"
          fontFamily="OpenSans-Bold,Open Sans"
          fontWeight={700}
          data-name="R for rainbow"
        >
          R
        </text>
      </g>
    </svg>
  );
}

export default SvgR;
