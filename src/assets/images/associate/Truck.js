import React from 'react';

function SvgTruck({ height = 512, width = 512, style }) {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width} style={style}>
      <path d="M104 120h160v168H104V120z" fill="#d3b585" />
      <path
        d="M264 288H104c81.506-14.387 145.095-78.584 158.704-160.224L264 120v168z"
        fill="#b4833f"
      />
      <path
        d="M144 80c8.837 0 16 7.163 16 16v104l24-24 24 24 24-24V96.288c-.004-8.994-7.294-16.284-16.288-16.288H144z"
        fill="#ffd884"
      />
      <path d="M408 168H296v112H56v80h384V249.232L408 168z" fill="#2bb3ce" />
      <g fill="#5a6570">
        <circle cx={120} cy={360} r={24} />
        <circle cx={352} cy={360} r={24} />
      </g>
      <path d="M0 384h480v16H0v-16z" fill="#8d9aa5" />
      <path d="M328 272h16v16h-16v-16z" fill="#1d5c88" />
      <path d="M328 200h56l16 48-72-8v-40z" fill="#d1e3ee" />
      <g fill="#b4833f">
        <path d="M128 240h16v16h-16v-16zM160 240h16v16h-16v-16z" />
      </g>
      <g fill="#d1e3ee">
        <path d="M408 296h32v64h-32v-64zM40 328h16v32H40c-8.837 0-16-7.163-16-16s7.163-16 16-16z" />
      </g>
      <g fill="#b4833f">
        <path d="M64 144h16v16H64v-16zM64 176h16v16H64v-16zM48 160h16v16H48v-16zM48 192h16v16H48v-16zM80 160h48v16H80v-16zM80 192h56v16H80v-16zM16 176h16v16H16v-16zM24 144h16v16H24v-16zM0 120h16v16H0v-16z" />
      </g>
    </svg>
  );
}

export default SvgTruck;
