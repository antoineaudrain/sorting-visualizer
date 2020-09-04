import React, { useState, useEffect } from 'react';
import { createRandomArr } from '../../utils/helpers';
import ValueBar from '../../components/ValueBar';

const SortingVisualizer = () => {
  const [arraySize, setArraySize] = useState(100);
  const [values, setValues] = useState([]);

  const randomizeValues = () =>
    setValues(createRandomArr(arraySize));

  const sort = () => {
    setValues([...values].sort((a, b) => {
      return a - b;
    }));
  }

  useEffect(() => {
    setValues(createRandomArr(arraySize))
  }, [arraySize]);

  return (
    <>
      <h1>SortingVisualizer</h1>
      <input name="array-size" type="range" min="20" max="200" value={arraySize} onChange={(event) => setArraySize(event.target.value)} />
      <label htmlFor="array-size">Array Size: {arraySize}</label>
      <button onClick={randomizeValues}>Randomize</button>
      <button onClick={sort}>Sort</button>

      <div style={{
        display:'flex',
        height: '100%',
        flex: 1,
        flexDirection: 'row',
        margin: 50
      }}>
        {values.map((value, index) => (
          <ValueBar key={index} value={value} maxValue={100} />
        ))}
      </div>
    </>
  );
};

export default SortingVisualizer;