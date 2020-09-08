import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Bar from '../atoms/Bar';

const StyledWrapper = styled.div(
  () => `
    flex-grow : 1;
    display: flex;
    align-items: flex-end;
    padding: 10% 8% 0 8%;
  `
);

const Wrapper = ({ bars, speed }) => {
  console.log(bars)
  return (
    <StyledWrapper>
      {bars.map(({ value, status }, index) => (
        <Bar key={index} bar={{ value, status }} speed={speed} />
      ))}
    </StyledWrapper>
  );
};

Wrapper.propTypes = {
  bars: PropTypes.array.isRequired,
  speed: PropTypes.number.isRequired
};

export default Wrapper;
