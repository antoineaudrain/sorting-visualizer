import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ThemeProvider from './theme';
import RouterProvider from './router';

const App = () => {
  return (
    <StrictMode>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
