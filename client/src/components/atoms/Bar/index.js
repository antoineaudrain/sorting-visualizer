import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const mapPropsToColor = (props) => {
  if (props.isCompared) {
    return props.theme.background.compared
  }
  if (props.isSwapped) {
    return props.theme.background.swapped
  }
  return props.theme.background.secondary
}

const StyledBar = styled.div(
  (props) => `
    height: ${props.height};
    flex: 1;
    background: ${mapPropsToColor(props)};
    transition: all ease-in-out ${Math.min(300, Math.floor((parseInt(props.speed) / 100) * (0 - 3000) + 3000))}ms;
    font-size: 2vw;
    border-radius: 0 0 ${props.theme.borderRadius.medium} ${props.theme.borderRadius.medium};
    display: flex;
    border: 1px solid ${props.theme.background.primary};
  `
);

const Bar = ({ bar: { value, isSwapped, isCompared }, highest, speed }) => {
  const height = `${Math.floor((80 / 100) * value)}vh`;

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