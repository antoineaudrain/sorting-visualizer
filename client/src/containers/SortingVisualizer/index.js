import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { createRandomArr } from "../../utils/helpers";
import sort from '../../utils/sorter';
import { setAlgorithm, setInitialArray, setSize, setSpeed, setTheme } from '../../store/actions';
import BarWrapper from '../../components/BarWrapper';
import NavBar from '../../components/NavBar';

const StyledContainer = styled.div(
  () => `
    height: 100vh;
  `
);

const StyledCard = styled.div(
  (props) => `
    display: flex;
    flex-flow: column;
    height: 100%;
    background: ${props.theme.background.primary};
    border-radius: ${props.theme.borderRadius.medium};
    overflow: hidden;
  `
);

const SortingVisualizer = () => {
  const [step, setStep] = useState(0);
  const [sorting, setSorting] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState([]);
  const theme = useSelector((state) => state.theme);
  const initialArray = useSelector((state) => state.initialArray);
  const algorithm = useSelector((state) => state.algorithm);
  const speed = useSelector((state) => state.speed);
  const size = useSelector((state) => state.size);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sorting) {
      const animations = sort(initialArray, algorithm);
      const interval = setInterval(() => {
        if (sorting && step <= animations.length) {
          setCurrentAnimation(animations[step]);
          setStep(step + 1);
        } else {
          clearInterval(interval);
        }
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [step, initialArray, algorithm, sorting]);

  useEffect(() => {
    dispatch(setInitialArray(createRandomArr(size)));
  }, [dispatch, size]);

  return (
    <StyledContainer>
      <StyledCard>
        <NavBar
          theme={{
            state: theme,
            dispatch: () => dispatch(setTheme(theme.state === 'dark' ? 'light' : 'dark'))
          }}
          size={{
            state: size,
            dispatch: (event) => dispatch(setSize(event.target.value))
          }}
          algorithm={{
            state: algorithm,
            dispatch: (event) => dispatch(setAlgorithm(event.target.value))
          }}
          speed={{
            state: speed,
            dispatch: (event) => dispatch(setSpeed(event.target.value))
          }}
          initialArray={{
            state: initialArray,
            dispatch: () => dispatch(setInitialArray(createRandomArr(size)))
          }}
          sort={{
            state: sorting,
            dispatch: () => setSorting(!sorting)
          }}
        />
        <BarWrapper
          bars={sorting ? currentAnimation : initialArray}
          speed={speed}
        />
      </StyledCard>
    </StyledContainer>
  );
};

export default SortingVisualizer;