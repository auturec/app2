import * as React from 'react';

function SvgW({ height = 512, width = 512, style }) {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width} style={style}>
      <g data-name="Layer 2">
        <text
          transform="translate(0 473.54)"
          fontSize={552.6}
          fill="#006b00"
          fontFamily="OpenSans-Bold,Open Sans"
          fontWeight={700}
          data-name="W for watermelon"
        >
          W
        </text>
      </g>
    </svg>
  );
}

export default SvgW;
