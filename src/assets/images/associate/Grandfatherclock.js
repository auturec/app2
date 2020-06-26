import React from 'react';

function SvgGrandfatherclock({ height = 512, width = 512, style }) {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width} style={style}>
      <path d="M40 192h176v272H40zm0 0" fill="#a65a14" />
      <path
        d="M72 288h112v144H72zm0 0M256 128c0 70.691-57.309 128-128 128S0 198.691 0 128 57.309 0 128 0s128 57.309 128 128zm0 0"
        fill="#fdb62f"
      />
      <path d="M120 288h16v80h-16zm0 0" fill="#e6e6e6" />
      <path
        d="M224 128c0 53.02-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96zm0 0"
        fill="#ffe9cc"
      />
      <path
        d="M128 136a8.001 8.001 0 01-5.656-2.344l-24-24a8 8 0 0111.312-11.312L128 116.688l34.344-34.344a8 8 0 0111.312 11.312l-40 40A8.001 8.001 0 01128 136zm0 0"
        fill="#592c02"
      />
      <path
        d="M152 376c0 13.254-10.746 24-24 24s-24-10.746-24-24 10.746-24 24-24 24 10.746 24 24zm0 0"
        fill="#763a02"
      />
    </svg>
  );
}

export default SvgGrandfatherclock;
