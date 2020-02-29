import React from 'react';

export const question = ({ image }) => {
  const labelArray = image.split('/');
  const labelDots = labelArray[labelArray.length - 1];
  const label = labelDots.split('.')[0];

  return (
    <div className="column is-centered">
      <img src={image} alt={label} height={150} width={150} />
      <p> {label} </p>
    </div>
  );
};

export default question;
