import React from 'react';

const TileImage = ({ value }) => {
  return (
    <div>
      <img src={value} alt="grey-tile" />
    </div>
  );
};

export default TileImage;
