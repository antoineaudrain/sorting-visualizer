import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const Theme = ({ children }) => {
  const DarkTheme = {
    background: {
      primary: '#1E2039',
      secondary: '#262B4A',
    },
    stateColor: {
      compared: '#ff6361',
      swapped: '#4ecca3',
    },
    borderRadius: {
      medium: '12px',
      large: '100px',
    }
  }

  return (
    <ThemeProvider theme={DarkTheme}>
      {children}
    </ThemeProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.node.isRequired
}

export default Theme