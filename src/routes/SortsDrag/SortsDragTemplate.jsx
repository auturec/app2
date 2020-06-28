import React from 'react';
import { ImagesProvider } from './ImagesContext';

const Puzzle = React.lazy(() => {
  return import('./Puzzle');
});

const SortsDragTemplate = () => {
  return (
    <ImagesProvider
      r={require.context(
        '../../assets/images/SortsDrag',
        false,
        /\.(png|jpe?g|svg)$/
      )}
    >
      <Puzzle />
    </ImagesProvider>
  );
};

export default SortsDragTemplate;
