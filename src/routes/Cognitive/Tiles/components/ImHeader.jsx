import React from 'react';

const ImHeader = props => {
  const { handleImageClick, randomList, gameState } = props;
  return (
    <div className="columns is-centered is-mobile">
      {randomList.display.map(val => {
        return (
          <div className="column" key={val}>
            <button
              className="has-background-primary	"
              onClick={e => handleImageClick(e, val)}
              type="button"
            >
              <img src={gameState.list[val]} alt={gameState.list[val]} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ImHeader;
