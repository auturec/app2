import React from 'react';
import TileImage from './TileImage';
import TilesImage from '../TilesImageMap';

// Add onclick to remove just the last tile
const PlayArea = props => {
  const { ansState, gameState } = props;
  return (
    <div className="columns is-centered is-mobile">
      {ansState.list.map((val, index) => {
        return (
          <div
            className="column"
            key={
              val === -1
                ? `grey${index}`
                : gameState.list[val] + index.toString()
            }
          >
            <button className="has-background-link" disabled type="button">
              {val === -1 ? (
                <TileImage value={TilesImage.GREY_TILE} />
              ) : (
                <TileImage value={gameState.list[val]} />
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlayArea;
