import React from 'react';

function SvgTablelamp({ height = 512, width = 512, style }) {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width} style={style}>
      <path
        d="M128 168h32v56a77.248 77.248 0 0022.625 54.625l34.75 34.75C231.863 327.863 240 347.512 240 368s-8.137 40.137-22.625 54.625L176 464h-64l-41.375-41.375C56.137 408.137 48 388.488 48 368s8.137-40.137 22.625-54.625l34.75-34.75A77.248 77.248 0 00128 224zm0 0"
        fill="#a7d6dd"
      />
      <path
        d="M40 256a8 8 0 01-8-8v-64a8 8 0 0116 0v64a8 8 0 01-8 8zm0 0"
        fill="#ffe9cc"
      />
      <path d="M48 0L0 184h288L240 0zm0 0" fill="#fdb62f" />
      <path
        d="M90.527 442.527L112 464h64l41.375-41.375c25.95-25.945 30.055-66.566 9.824-97.176A401.807 401.807 0 0190.527 442.527zm0 0"
        fill="#6cbbc7"
      />
    </svg>
  );
}

export default SvgTablelamp;
