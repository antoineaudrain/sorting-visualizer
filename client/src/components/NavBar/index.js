import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { algorithmItems } from '../../utils/helpers';
import RangeInput from '../atoms/RangeInput';
import SelectInput from '../atoms/SelectInput';

const StyledNavBar = styled.div(
  (props) => `
    display: flex;
    align-items: center;
    width: 100%;
    height: 96px;
    border-bottom: 1px solid ${props.theme.background.secondary};
  `
);

const NavBar = ({
  theme,
  initialArray,
  algorithm,
  size,
  speed,
  sort
}) => {
  return (
    <StyledNavBar>
      <label>Array Size: {size.state}</label>
      <RangeInput minValue={5} maxValue={200} value={size.state} onChange={size.dispatch} />

      <label>Algorithm:</label>
      <SelectInput options={algorithmItems} onChange={algorithm.dispatch} />

      <label>Speed:</label>
      <RangeInput minValue={500} maxValue={1000} value={speed.state} onChange={speed.dispatch} />

      <button onClick={initialArray.dispatch}>
        Shuffle
      </button>
      <button onClick={sort.dispatch} disabled={!algorithm.state || !initialArray.state}>
        {sort.state ? 'Stop' : 'Start'}
      </button>
      <button onClick={theme.dispatch}>
        {theme.state}
      </button>
    </StyledNavBar>
  );
};

NavBar.propTypes = {
  theme: PropTypes.object.isRequired,
  initialArray: PropTypes.object.isRequired,
  algorithm: PropTypes.object.isRequired,
  size: PropTypes.object.isRequired,
  speed: PropTypes.object.isRequired,
  sort: PropTypes.object.isRequired
};

export default NavBar;