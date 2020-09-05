import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBar = styled.div(
  (props) => `
    height: ${props.height};
    flex: 1;
    background: ${(((props.isCompared && '#ff6361') || (props.isSwapped && '#4ecca3')) || '#0B2239')};
    transition: all ease-in-out ${Math.min(300, Math.floor((parseInt(props.speed) / 100) * (0 - 3000) + 3000))}ms;
    font-size: 2vw;
    border-radius: 0 0 10px 10px;
    display: flex;
    border: 1px solid #ECFBFE;
  `
);

const Bar = ({ bar: { value, isSwapped, isCompared }, highest, speed }) => {
  const height = `${Math.floor((value / highest) * 100)}px`;

  return (
    <StyledBar
      height={height}
      total={highest}
      isSwapped={isSwapped}
      isCompared={isCompared}
      speed={speed}
    />
  );
};

Bar.propTypes = {
  value: PropTypes.number.isRequired,
  highest: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired
}

export default Bar;