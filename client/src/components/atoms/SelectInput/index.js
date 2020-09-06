import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({ options, onChange }) => {
  return (
    <select onChange={onChange}>
      {options.map((option, index) => (
        <option
          key={index}
          {...option}
        >
          {option.label}
        </option>
      ))}
    </select>
  )
}

SelectInput.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

export default SelectInput;