import React from 'react';

import DoctorJpg from './Doctor.jpg';

const Doctor = ({ style }) => {
  return <img src={DoctorJpg} style={style} alt="Doctor" />;
};

export default Doctor;
