import React, { useState } from 'react';


// custom counter hook
// will be used for books and for books likes!!

export const useCounter = () => {
  const [counter, setCounter] = useState(0);


  const incCounter = () => {
    setCounter(counter + 1);
  };

  return { counter, incCounter };
};