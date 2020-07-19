import React from 'react';

import StudentJpg from './Student.jpg';

const Student = ({ style }) => {
  return <img src={StudentJpg} style={style} alt="Student" />;
};

export default Student;
