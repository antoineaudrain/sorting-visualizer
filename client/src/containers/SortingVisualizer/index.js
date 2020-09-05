import React from 'react';
import { useSelector } from 'react-redux';
import BarWrapper from '../../components/BarWrapper';
import NavBar from '../../components/NavBar'

const SortingVisualizer = () => {
  const initialArray = useSelector((state) => state.initialArray)
  const speed = useSelector((state) => state.speed)

  return (
    <>
      <NavBar />
      <BarWrapper bars={initialArray} speed={speed} />
    </>
  );
};

export default SortingVisualizer;