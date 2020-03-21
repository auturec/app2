import React from 'react';

const DisplayRandom = props => {
  const { gameState } = props;
  return (
    <div className="columns is-centered is-mobile">
      {gameState.ans.map((val, ind) => {
        const src = gameState.list[val];
        return (
          <div className="column" key={val}>
            <button className="has-background-danger" disabled type="button">
              <img src={src} alt={ind.toString()} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayRandom;
