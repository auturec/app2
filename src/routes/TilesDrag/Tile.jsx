/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Tile = ({ tile, index }) => {
  return (
    <Draggable
      draggableId={`${tile.color}-${tile.id}`}
      index={index}
      key={`option-${tile.color}-${tile.id}`}
    >
      {(provided, snapshot) => {
        const style = {
          backgroundColor: tile.color,
          ...provided.draggableProps.style,
        };
        return (
          <div
            className={`square ${snapshot.isDragging ? 'is-dragged' : ''}`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            style={style}
          />
        );
      }}
    </Draggable>
  );
};

export default Tile;
