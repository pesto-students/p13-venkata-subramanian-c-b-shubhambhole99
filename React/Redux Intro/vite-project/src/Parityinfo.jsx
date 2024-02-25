import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsEven } from './features/counterSlice';

function ParityInfo() {
  const isEven = useSelector(selectIsEven);

  return (
    <div>
      <p>Counter value is: {isEven ? 'Even' : 'Odd'}</p>
    </div>
  );
}

export default ParityInfo;
