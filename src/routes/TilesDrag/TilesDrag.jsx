/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useReducer, useEffect, useState } from 'react';
import { Container, Button } from '@material-ui/core';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { CSS_COLOR_NAMES } from 'constants/colors';
import { getNRandomElements, shuffleArray } from 'utils/randomUtils';
import Tile from './Tile';

import './TilesDrag.scss';

const TilesDrag = ({ numberOfColors = 4 }) => {
  const [colors, setColors] = useState(
    getNRandomElements(
      getNRandomElements(CSS_COLOR_NAMES, numberOfColors),
      4
    ).map((e, i) => {
      return {
        color: e,
        id: i,
      };
    })
  );

  const [state, dispatch] = useReducer((s, a) => ({ ...s, ...a }), {
    topLeft: [],
    topRight: [],
    bottomLeft: [],
    bottomRight: [],
    optionsBar: shuffleArray(colors.slice()),
  });

  const [isCorrect, setIsCorrect] = useState(null);

  const handleNewGame = () => {
    const newColors = getNRandomElements(
      getNRandomElements(CSS_COLOR_NAMES, numberOfColors),
      4
    ).map((e, i) => {
      return {
        color: e,
        id: i,
      };
    });
    setColors(newColors);
    dispatch({
      topLeft: [],
      topRight: [],
      bottomLeft: [],
      bottomRight: [],
      optionsBar: shuffleArray(newColors.slice()),
    });
  };

  useEffect(() => {
    const answers = [
      ...state.topLeft,
      ...state.topRight,
      ...state.bottomLeft,
      ...state.bottomRight,
    ].map((e) => e.color);
    const solution = colors.map((e) => e.color);
    let equal = true;
    if (answers.length === solution.length) {
      for (let i = 0; i < answers.length; i += 1) {
        if (answers[i] !== solution[i]) equal = false;
      }
    } else {
      equal = false;
    }
    if (equal) {
      setIsCorrect(true);
    } else if (answers.length === solution.length) {
      setIsCorrect(false);
    } else {
      setIsCorrect(null);
    }
  }, [
    state.topLeft,
    state.topRight,
    state.bottomLeft,
    state.bottomRight,
    colors,
  ]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.droppableId === 'optionsBar'
    ) {
      const newOptionsBar = Array.from(state.optionsBar);
      newOptionsBar.splice(source.index, 1);
      newOptionsBar.splice(
        destination.index,
        0,
        state.optionsBar[source.index]
      );
      dispatch({
        optionsBar: newOptionsBar,
      });
      return;
    }

    const { droppableId } = destination;
    if (droppableId !== 'optionsBar' && state[droppableId].length === 1) return;

    if (source.droppableId === 'optionsBar') {
      const newOptionsBar = Array.from(state.optionsBar);
      const newDestination = Array.from(state[droppableId]);
      newOptionsBar.splice(source.index, 1);
      newDestination.splice(
        destination.index,
        0,
        state.optionsBar[source.index]
      );
      dispatch({
        optionsBar: newOptionsBar,
        [droppableId]: newDestination,
      });
    }

    const newSource = Array.from(state[source.droppableId]);
    const newDestination = Array.from(state[droppableId]);
    newSource.splice(source.index, 1);
    newDestination.splice(
      destination.index,
      0,
      state[source.droppableId][source.index]
    );
    dispatch({
      [source.droppableId]: newSource,
      [droppableId]: newDestination,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container component="main" maxWidth="sm">
        <div className="tiles-drag">
          <h2>Make Pattern</h2>
          <div className="tiles-drag__square">
            <div className="tiles-drag__square--row">
              <div style={{ backgroundColor: colors[0].color }} />
              <div style={{ backgroundColor: colors[1].color }} />
            </div>
            <div className="tiles-drag__square--row">
              <div style={{ backgroundColor: colors[2].color }} />
              <div style={{ backgroundColor: colors[3].color }} />
            </div>
          </div>

          <br />
          <h2>Your Pattern:</h2>

          <div className="tiles-drag__square">
            <div className="tiles-drag__square--row">
              <Droppable
                droppableId="topLeft"
                type="square"
                isDropDisabled={state.topLeft.length === 1}
              >
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`can-drop ${
                      snapshot.isDraggingOver ? 'dragged-over' : ''
                    }`}
                  >
                    {state.topLeft.map((c, i) => (
                      <Tile tile={c} index={i} key={c.id} />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <Droppable
                droppableId="topRight"
                type="square"
                isDropDisabled={state.topRight.length === 1}
              >
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`can-drop ${
                      snapshot.isDraggingOver ? 'dragged-over' : ''
                    }`}
                  >
                    {state.topRight.map((c, i) => (
                      <Tile tile={c} index={i} key={c.id} />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            <div className="tiles-drag__square--row">
              <Droppable
                droppableId="bottomLeft"
                type="square"
                isDropDisabled={state.bottomLeft.length === 1}
              >
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`can-drop ${
                      snapshot.isDraggingOver ? 'dragged-over' : ''
                    }`}
                  >
                    {state.bottomLeft.map((c, i) => (
                      <Tile tile={c} index={i} key={c.id} />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <Droppable
                droppableId="bottomRight"
                type="square"
                isDropDisabled={state.bottomRight.length === 1}
              >
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`can-drop ${
                      snapshot.isDraggingOver ? 'dragged-over' : ''
                    }`}
                  >
                    {state.bottomRight.map((c, i) => (
                      <Tile tile={c} index={i} key={c.id} />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>

          <Droppable
            droppableId="optionsBar"
            type="square"
            // isDropDisabled
            direction="horizontal"
          >
            {(provided, snapshot) => (
              <div
                className={`options-bar ${
                  snapshot.isDraggingOver ? 'dragged-over' : ''
                }`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {isCorrect === null ||
                snapshot.isDraggingOver ||
                state.optionsBar.length > 0
                  ? ''
                  : isCorrect
                  ? 'EXCELLENT!'
                  : 'ALMOST THERE!'}
                {state.optionsBar.map((c, i) => (
                  <Tile tile={c} index={i} key={c.id} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          {isCorrect && (
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={handleNewGame}
            >
              NEW GAME
            </Button>
          )}
        </div>
      </Container>
    </DragDropContext>
  );
};

export default TilesDrag;
