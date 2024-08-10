// CircularProgressBar.js
import React, { useState, useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';

const Result = () => {
  const [percentage, setPercentage] = useState(50);
  const customStyles = buildStyles({
    pathColor: `rgba(255, 0, 0, ${percentage / 100})`, // Adjust the color here
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  });
 

  return (
    <div style={{ width: '100px', margin: '50px auto' }}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} styles={customStyles} />
    </div>
  );
};

export default Result;
