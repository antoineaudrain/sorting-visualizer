import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Bar from '../atoms/Bar'

const StyledWrapper = styled.div(
  (props) => `
    display: flex;
    align-items: flex-start;
    padding: 0 10%;
    height: 80vh;
    background: ${props.theme.background.primary};
  `
);

const Wrapper = ({ bars, speed }) => {
  return (
    <StyledWrapper>
      {bars.map(({ value }, index) => (
        <Bar
          key={index}
          bar={{ value, isSwapped: false , isCompared: false }}
          highest={bars.length}
          speed={speed}
        />
      ))}
    </StyledWrapper>
  );
};

Wrapper.propTypes = {
  bars: PropTypes.array.isRequired,
  speed: PropTypes.number.isRequired
}

export default Wrapper;
