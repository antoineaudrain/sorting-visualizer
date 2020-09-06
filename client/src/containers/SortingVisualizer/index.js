import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BarWrapper from '../../components/BarWrapper';
import sort from '../../utils/sorter';
import NavBar from '../../components/NavBar'

const SortingVisualizer = () => {
  const [sortedArray, setSortedArray] = useState([])
  const initialArray = useSelector((state) => state.initialArray)
  const algorythm = useSelector((state) => state.algorythm)
  const speed = useSelector((state) => state.speed)

  const handleSort = () => sort(initialArray, algorythm)
    // setSortedArray(sort(initialArray, algorythm));

  return (
    <>
      <NavBar handleSort={handleSort} />
      <BarWrapper bars={initialArray} speed={speed} />
    </>
  );
};

export default SortingVisualizer;