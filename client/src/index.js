import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import StoreProvider from './store';
import ThemeProvider from './theme';
import RouterProvider from './router';
import './reset.css'

const App = () => {
  return (
    <StrictMode>
      <StoreProvider>
        <ThemeProvider>
          <RouterProvider />
        </ThemeProvider>
      </StoreProvider>
    </StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
