import React from 'react';

function SvgChair({ height = 512, width = 512, style }) {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width} style={style}>
      <path d="M24 248v216h32V296h144v168h32V248zm0 0" fill="#a65a14" />
      <g fill="#763a02">
        <path d="M103.969 231.313l-16-184L85.945 24H69.887l2.144 24.688 16 184L89.36 248h16.067zm0 0M120 32h16v208h-16zm0 0M167.969 232.688l16-184L186.113 24h-16.058l-2.024 23.313-16 184L150.574 248h16.067zm0 0M199.879 233.367l32-184L236.297 24h-16.242l-3.934 22.633-32 184L181.098 248h16.238zm0 0M71.887 230.68L72 232l-.121-1.367-32-184L36.113 24H19.887l4.226 25.32L24 48l.121 1.367 32 184L58.56 248h16.218zm0 0" />
      </g>
      <path d="M0 0v48h256V0zm0 0" fill="#a65a14" />
      <path
        d="M24 232h208c8.836 0 16 7.164 16 16s-7.164 16-16 16H24c-8.836 0-16-7.164-16-16s7.164-16 16-16zm0 0"
        fill="#592c02"
      />
    </svg>
  );
}

export default SvgChair;
