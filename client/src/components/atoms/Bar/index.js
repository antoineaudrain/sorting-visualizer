import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animationStatus } from '../../../utils/helpers';

const mapPropsToColor = (props) => {
  switch (props.status) {
    case animationStatus.COMPARING:
      return props.theme.background.compared
    case animationStatus.SWAPPED || animationStatus.SWAPPING:
      return props.theme.background.swapped
    default:
      return props.theme.background.secondary
  }
};

const StyledBar = styled.div(
  (props) => `
    height: ${props.height}%;
    flex: 1;
    background: ${mapPropsToColor(props)};
    transition: all ease-in-out ${Math.min(300, Math.floor((parseInt(props.speed) / 100) * (0 - 3000) + 3000))}ms;
    font-size: 2vw;
    border-radius: ${props.theme.borderRadius.medium} ${props.theme.borderRadius.medium} 0 0;
    display: flex;
    border: 1px solid ${props.theme.background.primary};
  `
);

const Bar = ({ bar: { value, status }, speed }) => {
  return (
    <StyledBar
      height={value}
      status={status}
      speed={speed}
    />
  );
};

Bar.propTypes = {
  bar: PropTypes.object.isRequired,
  speed: PropTypes.number.isRequired
};

export default Bar;