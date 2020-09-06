import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme, setInitialArray, setSpeed, setSize } from '../../store/actions'
import { createRandomArr } from '../../utils/helpers';
import RangeInput from '../atoms/RangeInput'

const NavBar = () => {
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
    dispatch(setInitialArray(createRandomArr(size)));
  }, [dispatch, size]);

  return (
    <>
      <label htmlFor="array-size">Array Size: {size}</label>
      <RangeInput minValue={20} maxValue={200} value={size} onChange={handleSize} />

      <label htmlFor="speed">Speed: {speed}</label>
      <RangeInput minValue={500} maxValue={1000} value={speed} onChange={handleSpeed} />

      <button onClick={handleShuffleInitialArray}>Randomize</button>
      <button onClick={handleTheme}>{theme}</button>
    </>
  )
};

export default NavBar;