import React from 'react';

function SvgStandlamp({ height = 512, width = 512, style }) {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width} style={style}>
      <path d="M80 152h16v288H80zm0 0" fill="gray" />
      <path
        d="M40 464c0-17.672 14.328-32 32-32h32c17.672 0 32 14.328 32 32zm0 0"
        fill="#6cbbc7"
      />
      <path d="M32 144h16v160H32zm0 0" fill="#e6e6e6" />
      <path d="M24 0h136l16 160H0zm0 0" fill="#fdb62f" />
      <path
        d="M56 304c0 8.836-7.164 16-16 16s-16-7.164-16-16 7.164-16 16-16 16 7.164 16 16zm0 0"
        fill="#ff421d"
      />
    </svg>
  );
}

export default SvgStandlamp;
