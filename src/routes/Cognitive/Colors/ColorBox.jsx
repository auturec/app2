import React from 'react';
import './Colors.scss';

const ColorBox = () => {
  const [fade, handleFade] = React.useState(false);

  return (
    <div
      role="button"
      aria-label="Color Option"
      tabIndex={0}
      className={`square ${fade ? 'fade' : ''}`}
      onClick={() => handleFade(true)}
      onKeyDown={() => handleFade(true)}
      onAnimationEnd={() => handleFade(false)}
    />
  );
};

export default ColorBox;
