import * as React from 'react';

function Star({ height = 500, width = 500 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 0 500 500"
      width={width}
    >
      <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
    </svg>
  );
}

export default Star;
