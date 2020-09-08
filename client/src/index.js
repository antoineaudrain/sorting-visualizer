import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import StoreProvider from './store';
import ThemeProvider from './theme';
import SortingVisualizer from './containers/SortingVisualizer';
import './reset.css';

const App = () => {
  return (
    <StrictMode>
      <StoreProvider>
        <ThemeProvider>
          <SortingVisualizer />
        </ThemeProvider>
      </StoreProvider>
    </StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
