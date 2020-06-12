import * as React from 'react';

function SvgI({ height = 512, width = 512, style }) {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width} style={style}>
      <g data-name="Layer 2">
        <text
          transform="translate(0 495.18)"
          fontSize={595.84}
          fill="#006b00"
          fontFamily="TimesNewRomanPS-BoldMT,Times New Roman"
          fontWeight={700}
          data-name="I for icecream"
        >
          I
        </text>
      </g>
    </svg>
  );
}

export default SvgI;
