import React from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'

const store = createStore(rootReducer)

const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default StoreProvider;
