import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Bar from '../Bar/index'

const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  background: #ECFBFE;
`;

const Wrapper = ({ bars, speed }) => {
  return (
    <StyledWrapper>
      {bars.map((bar, index) => (
        <Bar
          key={index}
          bar={{ value: bar, isSwapped: false , isCompared: false }}
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
