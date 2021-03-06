import * as React from 'react';

function SvgY({ height = 512, width = 512, style }) {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width} style={style}>
      <g data-name="Layer 2">
        <text
          transform="translate(0 480)"
          fontSize={560.13}
          fill="#890055"
          fontFamily="OpenSans-Bold,Open Sans"
          fontWeight={700}
          data-name="Y for yoyo"
        >
          Y
        </text>
      </g>
    </svg>
  );
}

export default SvgY;
