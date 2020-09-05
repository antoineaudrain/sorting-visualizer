import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createRandomArr } from '../../utils/helpers';
import BarWrapper from '../../components/BarWrapper';
import { setTheme, setInitialArray, setSpeed, setSize } from '../../store/actions'

const SortingVisualizer = () => {
  const initialArray = useSelector((state) => state.initialArray)
  const theme = useSelector((state) => state.theme)
  const speed = useSelector((state) => state.speed)
  const size = useSelector((state) => state.size)
  const dispatch = useDispatch()

  const handleTheme = () =>
    dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'));

  const handleShuffleInitialArray = () =>
    dispatch(setInitialArray(createRandomArr(size)));

  const handleSize = (event) =>
    dispatch(setSize(event.target.value));

  const handleSpeed = (event) =>
    dispatch(setSpeed(event.target.value));
 
  useEffect(() => {
    handleShuffleInitialArray();
  }, [size]);

  return (
    <>
      <label htmlFor="array-size">Array Size: {size}</label>
      <input name="size" type="range" min="20" max="200" value={size} onChange={handleSize} />
      <label htmlFor="speed">Speed: {speed}</label>
      <input name="speed" type="range" min="500" max="10000" value={speed} onChange={handleSpeed} />
      <button onClick={handleShuffleInitialArray}>Randomize</button>
      <button onClick={handleTheme}>{theme}</button>

      <BarWrapper bars={initialArray} speed={speed} />
    </>
  );
};

export default SortingVisualizer;