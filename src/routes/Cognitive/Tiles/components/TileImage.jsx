import React from 'react';
import { CardMedia } from '@material-ui/core';

const TileImage = ({ value }) => {
  return (
    <div>
      <CardMedia component="img" src={value} image={value} alt="grey-tile" />
    </div>
  );
};

export default TileImage;
