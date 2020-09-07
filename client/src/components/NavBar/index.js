import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme, setInitialArray, setAlgorythm, setSpeed, setSize } from '../../store/actions'
import { createRandomArr, algorythms } from '../../utils/helpers';
import RangeInput from '../atoms/RangeInput'
import SelectInput from '../atoms/SelectInput'

const algorythmItems = [
  { label: 'Bubble Sort', value: algorythms.BUBBLE_SORT, selected: true }
];

const NavBar = ({ handleSort }) => {
  const theme = useSelector((state) => state.theme)
  const initialArray = useSelector((state) => state.initialArray)
  const algorythm = useSelector((state) => state.algorythm)
  const speed = useSelector((state) => state.speed)
  const size = useSelector((state) => state.size)
  const dispatch = useDispatch()

  const handleTheme = () =>
    dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'));

  const handleShuffleInitialArray = () =>
    dispatch(setInitialArray(createRandomArr(size)));

  const handleAlgorythm = (event) =>
    dispatch(setAlgorythm(event.target.value));

  const handleSize = (event) =>
    dispatch(setSize(event.target.value));

  const handleSpeed = (event) =>
    dispatch(setSpeed(event.target.value));
 
  useEffect(() => {
    dispatch(setInitialArray(createRandomArr(size)));
  }, [dispatch, size]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label>Array Size: {size}</label>
      <RangeInput minValue={20} maxValue={200} value={size} onChange={handleSize} />

      <label>Algorythm: {algorythm}</label>
      <SelectInput options={algorythmItems} onChange={handleAlgorythm} />

      <label>Speed: {speed}</label>
      <RangeInput minValue={500} maxValue={1000} value={speed} onChange={handleSpeed} />

      <button onClick={handleShuffleInitialArray}>Randomize</button>
      <button onClick={handleSort} disabled={!algorythm || !initialArray}>Start sort</button>
      <button onClick={handleTheme}>{theme}</button>
    </div>
  )
};

export default NavBar;