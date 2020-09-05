import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

const LightTheme = {
  background: {
    primary: 'white',
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

const DarkTheme = {
  background: {
    primary: '#1E2039',
    secondary: '#262B4A',
  },
  stateColor: {
    compared: '#F8507F',
    swapped: '#30FECF',
  },
  borderRadius: {
    medium: '12px',
    large: '100px',
  }
}

const Theme = ({ children }) => {
  const theme = useSelector((state) => state.theme)

  return (
    <ThemeProvider theme={theme === 'dark' ? DarkTheme : LightTheme}>
      {children}
    </ThemeProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.node.isRequired
}

export default Theme