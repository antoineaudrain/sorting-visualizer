import React from 'react';
import PropTypes from 'prop-types';

const ValueBar = ({ value, maxValue }) => {
  return (
    <div style={{
      height: (value * 100) / maxValue,
      flex: 1,
      backgroundColor: 'blue',
      margin: '0 1px'
    }}>
    </div>
  );
};

ValueBar.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired
}

export default ValueBar;