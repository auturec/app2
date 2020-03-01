import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import 'components/DataLoader/DataLoader.scss';

const DataLoader = () => {
  return (
    <div className="data-loader__display">
      <div className="is-centered columns is-marginless is-paddingless is-mobile">
        <BeatLoader size={20} color="#3e61fa" />
      </div>
    </div>
  );
};

export default DataLoader;
