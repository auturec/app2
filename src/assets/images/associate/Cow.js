import React from 'react';

function SvgCow({ height = 512, width = 512, style }) {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width} style={style}>
      <path
        d="M216 68H56C25.087 67.965.035 42.913 0 12V4h16v8c.026 22.08 17.92 39.974 40 40h160c22.08-.026 39.974-17.92 40-40V4h16v8c-.035 30.913-25.087 55.965-56 56z"
        fill="#ccc"
      />
      <path
        d="M344 140H88v152c0 35.346 28.654 64 64 64h16v120h32V356h176v120h32V204c0-35.346-28.654-64-64-64z"
        fill="#e6e6e6"
      />
      <path d="M312 388h32v88h-32v-88z" fill="#b3b3b3" />
      <path d="M376 356h-88c0 26.51 21.49 48 48 48h40v-48z" fill="#fba69c" />
      <path d="M56 52h160v96H56V52z" fill="#e6e6e6" />
      <g fill="#4d4d4d">
        <path d="M128 116h-16v-8a8 8 0 00-16 0v8H80v-8c0-13.255 10.745-24 24-24s24 10.745 24 24v8zM192 116h-16v-8a8 8 0 00-16 0v8h-16v-8c0-13.255 10.745-24 24-24s24 10.745 24 24v8z" />
      </g>
      <path
        d="M72 140h128c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32H72c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z"
        fill="#fba69c"
      />
      <g fill="#b3b3b3">
        <path d="M56 60C29.49 60 8 81.49 8 108v16c26.51 0 48-21.49 48-48V60zM216 60v16c0 26.51 21.49 48 48 48v-16c0-26.51-21.49-48-48-48z" />
      </g>
      <g fill="#4d4d4d">
        <path d="M96 164h16v16H96v-16zM160 164h16v16h-16v-16z" />
      </g>
      <path d="M104 332h32v144h-32V332z" fill="#b3b3b3" />
      <path
        d="M448 388h-16V268c0-13.255-10.745-24-24-24v-16c22.08.026 39.974 17.92 40 40v120z"
        fill="#ccc"
      />
      <path
        d="M440 372h-8v24c.026 22.08 17.92 39.974 40 40h8v-24c-.026-22.08-17.92-39.974-40-40z"
        fill="#e6e6e6"
      />
      <g fill="#ccc">
        <path d="M168 356v-16c0-35.346-28.654-64-64-64H88v16c0 35.346 28.654 64 64 64h16zM408 204v8h-8c-35.346 0-64-28.654-64-64v-8h8c35.346 0 64 28.654 64 64zM312 212c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.49-48 48-48zM212 252c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20z" />
      </g>
    </svg>
  );
}

export default SvgCow;
