import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createRandomArr } from '../../utils/helpers';
import BarWrapper from '../../components/BarWrapper';
import { setTheme } from '../../store/actions'

const SortingVisualizer = () => {
  const [arraySize, setArraySize] = useState(20);
  const [values, setValues] = useState([]);
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  const handleTheme = () =>
    dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'));

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
      <input name="array-size" type="range" min="20" max="100" value={arraySize} onChange={(event) => setArraySize(event.target.value)} />
      <label htmlFor="array-size">Array Size: {arraySize}</label>
      <button onClick={randomizeValues}>Randomize</button>
      <button onClick={sort}>Sort</button>
      <button onClick={handleTheme}>{theme}</button>

      <BarWrapper bars={values} speed={10} />
    </>
  );
};

export default SortingVisualizer;