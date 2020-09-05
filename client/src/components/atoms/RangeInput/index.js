import React from 'react';
import PropTypes from 'prop-types';

const RangeInput = ({ minValue, maxValue, value, onChange, ...props }) => {
  return (
    <>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  )
};

RangeInput.propTypes = {
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default RangeInput;